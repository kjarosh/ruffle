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

    details = f"""
<details>
<summary>Details</summary>

#### Summary

```{files_summary}```

#### How to fix it?

Add more tests! Currently coverage runs on SWF tests (that test compatibility with Flash Player).

Sometimes you'll see missing coverage on files you cannot cover (desktop, web code, etc.). \
In this case you can ignore the warning for these files.
</details>
"""

    report = f"""
⚠️ Coverage check failed: [{coverage_percent}%]({job_url})

{details}
"""

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
