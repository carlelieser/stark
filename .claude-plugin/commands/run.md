---
model: claude-sonnet-4-5-20250929
allowed-tools: Bash, Task, Read, Write, Glob, Edit, Grep
description: Execute a STARK task
---

## Context

**Solution ID:** $1
**Task:** $2

Review task materials in .stark/$1/tasks/

## Prereqs

Ensure `/stark:ready $1 $2` returned READY before executing.

## Task

Execute the task according to the plan.

1. Load task materials (.stark/$1/tasks/ matching "$2"):
   - REPORT.md (execution plan)
   - Latest DELIBERATION

2. Execute each step in the plan

3. Create EXECUTION.md with:
   - Header: Task name, timestamp, status
   - Steps Executed: Each step with status and output
   - Changes Made: Table of file changes (path, action, description)
   - Issues Encountered: Problems and resolutions
   - Completion: Timestamp, final status, summary notes

4. Update REPORT.md status to reflect execution

## Success Criteria

- [ ] All plan steps executed
- [ ] EXECUTION.md documents all actions
- [ ] Changes tracked
- [ ] Status updated
