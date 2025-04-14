#!/usr/bin/env python3

"""
Compares sizes of Ruffle builds before and after a change.

record <output.json>
    Run from the root of a built repository. Records sizes of the
    distributed files and of symbols in the binaries.

compare <before.json> <after.json> <report.md>
    Raises a notice or a warning for desktop and web, writes a short report
    to the job summary, and a full report to the given file.
"""

import filecmp
import json
import os
import re
import subprocess
import sys

DESKTOP_BINARY = 'target/dist/ruffle_desktop'
WEB_DIST = 'web/packages/selfhosted/dist'
CORE_DIST = 'web/packages/core/dist'
WASM_BINARIES = {
    'wasm (extensions)': 'target/wasm32-unknown-unknown/web-wasm-extensions/ruffle_web.wasm',
    'wasm (mvp)': 'target/wasm32-unknown-unknown/web-wasm-mvp/ruffle_web.wasm',
}

# Growth above which a warning is raised instead of a notice.
WARNING_THRESHOLD_PERCENT = 1.0

# Number of rows shown in the job summary; the full report has all of them.
SUMMARY_ROWS = 20

UNATTRIBUTED = '[unattributed]'


# ===== Utilities ==========================================

def log(msg):
    print(msg, file=sys.stderr)


def run_command(args):
    return subprocess.run(args, check=True, stdout=subprocess.PIPE).stdout.decode('utf-8')


def format_size(size):
    if abs(size) < 1024:
        return f'{size} B'
    if abs(size) < 1024 * 1024:
        return f'{size / 1024:.2f} KiB'
    return f'{size / 1024 / 1024:.2f} MiB'


def format_diff(before, after):
    diff = after - before
    sign = '+' if diff > 0 else ''
    result = f'{sign}{format_size(diff)}'
    if before:
        result += f' ({sign}{diff / before * 100:.2f}%)'
    return result


def normalize_symbol(name):
    # Crate disambiguators, e.g. ruffle_core[f78ae50db0a0d1b0]
    name = re.sub(r'\[[0-9a-f]{16}\]', '', name)
    # LLVM suffixes, e.g. foo.llvm.12676506781747311562
    name = re.sub(r'\.llvm\.\d+', '', name)
    # Anonymous constants, e.g. anon.1cbe1f76f9726699c035f209de88c14a.50
    name = re.sub(r'^anon\.[0-9a-f]+\.\d+$', 'anon', name)
    return name


def symbol_crate(name):
    match = re.match(r'^[<&*\s]*(?:dyn\s+)?([A-Za-z_][A-Za-z0-9_]*)::', name)
    return match.group(1) if match else '[other]'


def add_symbol(symbols, name, size):
    name = normalize_symbol(name)
    symbols[name] = symbols.get(name, 0) + size


def desktop_symbols(path):
    symbols = {}
    # --size-sort lists only symbols with a size.
    for line in run_command(['nm', '--print-size', '--size-sort', '--demangle', path]).splitlines():
        parts = line.split(' ', 3)
        # Skip symbols not taking space in the file (bss, undefined, weak).
        if parts[2] in 'bBuUvVwW':
            continue
        add_symbol(symbols, parts[3], int(parts[1], 16))
    symbols[UNATTRIBUTED] = os.path.getsize(path) - sum(symbols.values())
    return symbols


def wasm_symbols(path):
    symbols = {}
    for item in json.loads(run_command(['twiggy', 'top', '--format', 'json', path])):
        add_symbol(symbols, item['name'], item['shallow_size'])
    symbols[UNATTRIBUTED] = os.path.getsize(path) - sum(symbols.values())
    return symbols


def web_file_name(path):
    """
    Returns a name of a web file that is stable across builds.

    Webpack puts content hashes in names, and wasm files are named only by
    their hash, so they are identified by content using the core package.
    """

    rel_path = os.path.relpath(path, WEB_DIST)
    if path.endswith('.wasm'):
        for candidate in sorted(os.listdir(CORE_DIST)):
            candidate_path = os.path.join(CORE_DIST, candidate)
            if candidate.endswith('.wasm') and filecmp.cmp(path, candidate_path, shallow=False):
                return candidate
    return re.sub(r'[0-9a-f]{20}', '[hash]', rel_path)


def web_files():
    files = {}
    for root, _, names in os.walk(WEB_DIST):
        for name in names:
            path = os.path.join(root, name)
            stable_name = web_file_name(path)
            files[stable_name] = files.get(stable_name, 0) + os.path.getsize(path)
    return files


def diff_table(before, after, rows=None):
    """
    Returns a markdown table of changed entries, sorted by the absolute change.
    """

    changes = []
    for name in before.keys() | after.keys():
        b = before.get(name, 0)
        a = after.get(name, 0)
        if a != b:
            changes.append((name, b, a))
    changes.sort(key=lambda c: (-abs(c[2] - c[1]), c[0]))

    if not changes:
        return 'No changes.\n'

    table = '| Name | Before | After | Change |\n'
    table += '| --- | ---: | ---: | ---: |\n'
    for name, b, a in changes[:rows]:
        escaped_name = name.replace('|', '\\|')
        table += f'| `{escaped_name}` | {format_size(b)} | {format_size(a)} | {format_diff(b, a)} |\n'
    if rows is not None and len(changes) > rows:
        table += f'\n{len(changes) - rows} more changes in the full report.\n'
    return table


def group_by_crate(symbols):
    crates = {}
    for name, size in symbols.items():
        crate = symbol_crate(name) if name != UNATTRIBUTED else UNATTRIBUTED
        crates[crate] = crates.get(crate, 0) + size
    return crates


def report(before, after, rows):
    result = '## Totals\n\n'
    result += '| Package | Before | After | Change |\n'
    result += '| --- | ---: | ---: | ---: |\n'
    for package, title in [('desktop', 'Desktop'), ('web', 'Web')]:
        b = before['totals'][package]
        a = after['totals'][package]
        result += f'| {title} | {format_size(b)} | {format_size(a)} | {format_diff(b, a)} |\n'

    result += '\n## Web files\n\n'
    result += diff_table(before['web_files'], after['web_files'], rows)

    for binary in after['symbols'].keys():
        before_symbols = before['symbols'].get(binary, {})
        after_symbols = after['symbols'][binary]
        result += f'\n## Symbols: {binary}\n\n'
        result += '### By crate\n\n'
        result += diff_table(group_by_crate(before_symbols), group_by_crate(after_symbols), rows)
        result += '\n### By symbol\n\n'
        result += diff_table(before_symbols, after_symbols, rows)

    return result

# ===== Commands ===========================================

def record(output):
    """
    Record sizes of the distributed files and of symbols in the binaries.
    """

    web = web_files()
    sizes = {
        'totals': {
            'desktop': os.path.getsize(DESKTOP_BINARY),
            'web': sum(web.values()),
        },
        'web_files': web,
        'symbols': {
            'desktop': desktop_symbols(DESKTOP_BINARY),
            **{name: wasm_symbols(path) for name, path in WASM_BINARIES.items()},
        },
    }

    with open(output, 'w') as f:
        json.dump(sizes, f)


def compare(before_path, after_path, report_path):
    """
    Raise annotations for total sizes and write reports with details.
    """

    with open(before_path) as f:
        before = json.load(f)
    with open(after_path) as f:
        after = json.load(f)

    for package, title in [('desktop', 'Desktop'), ('web', 'Web')]:
        b = before['totals'][package]
        a = after['totals'][package]
        growth = (a - b) / b * 100 if b else 0
        level = 'warning' if growth > WARNING_THRESHOLD_PERCENT else 'notice'
        message = f'{format_size(b)} → {format_size(a)}, {format_diff(b, a)}'
        # % has to be escaped in workflow commands.
        print(f'::{level} title={title} size::{message.replace("%", "%25")}')

    with open(report_path, 'w') as f:
        f.write('# Size report\n\n' + report(before, after, None))

    summary_path = os.environ.get('GITHUB_STEP_SUMMARY')
    if summary_path:
        with open(summary_path, 'a') as f:
            f.write('# Size report\n\n' + report(before, after, SUMMARY_ROWS))


def main():
    cmd = sys.argv[1]
    log(f'Running command {cmd}')
    if cmd == 'record':
        record(sys.argv[2])
    elif cmd == 'compare':
        compare(sys.argv[2], sys.argv[3], sys.argv[4])


if __name__ == '__main__':
    main()
