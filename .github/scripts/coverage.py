#!/usr/bin/env python3

import os
import subprocess
import sys
from datetime import datetime
import xml.etree.ElementTree as xml
import json

SCRIPT_DIR = os.path.dirname(os.path.realpath(__file__))
REPO_DIR = os.path.realpath(os.path.join(SCRIPT_DIR, '../../'))

DIFF_COVER_REPORT = "target/diff-cover/report.json"
MIN_COVERAGE = 90


# ===== Utilities ==========================================

def log(msg):
    print(msg, file=sys.stderr)

# ===== Commands to execute ================================

def run_command(args, cwd=REPO_DIR):
    return subprocess.run(
        args,
        cwd=cwd,
        check=True,
        stdout=subprocess.PIPE,
    ).stdout.decode('utf-8')

# ===== Commands ===========================================

def comment_report(pr_number, job_url):
    """
    Generate a report that and post it as a comment on GitHub.
    """

    with open(DIFF_COVER_REPORT) as f:
        report_json = json.load(f)
    coverage_percent = report_json["total_percent_covered"]

    if coverage_percent >= MIN_COVERAGE:
        # Coverage passed
        return

    src_stats = report_json["src_stats"]

    files_summary = "\n"
    for (filename, file_stats) in sorted(src_stats.items(), key=lambda e: (-e[1]["percent_covered"], e[0])):
        covered = file_stats["percent_covered"]
        files_summary += f"{covered:3.0f}%: {filename}\n"

    details = f"""<details>
<summary>Details</summary>

#### Summary

```{files_summary}```

#### Why coverage is important?

There are two main reasons.
Without coverage:

1. we don't know if the new behavior matches Flash, and
1. the code can (and will) break in the future.

Significant amount of work on Ruffle comes from reverse engineering Flash.
By adding tests you contribute to better understanding how Flash works and you
make sure the work you've done will not disappear.

The code you add might be buggy or wrong, that happens all the time, it *will*
be modified in the future by someone else, who doesn't have the scenario you're
implementing in mind.

#### How to fix it?

Add more tests! Currently coverage runs on SWF tests (that test compatibility with Flash Player).
</details>
"""

    report = f"⚠️ Coverage check failed: [{coverage_percent}%]({job_url})\n\n{details}"

    if pr_number:
        run_command([
            'gh', 'pr', 'comment', pr_number,
            '--body', report])
    else:
        print(report)

def main():
    cmd = sys.argv[1]
    log(f'Running command {cmd}')
    if cmd == 'comment_report':
        pr_number = sys.argv[2] if len(sys.argv) > 2 else ""
        job_url = sys.argv[3] if len(sys.argv) > 3 else ""
        comment_report(pr_number, job_url)


if __name__ == '__main__':
    main()
