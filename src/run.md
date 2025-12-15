---
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

1. Find the task folder matching "$2"
2. Review:
   - REPORT.md for execution plan
   - Latest deliberation for any refinements
3. Execute each step in the plan
4. Document execution in `.stark/$1/tasks/<task-id>/EXECUTION.md`:

```markdown
# Execution Log

**Task:** [Task Name]
**Started:** [timestamp]
**Status:** In Progress

---

## Steps Executed

### Step 1: [Action]
**Status:** Complete/Failed
**Output:**
[Results or errors]

### Step 2: [Action]
**Status:** Complete/Failed
**Output:**
[Results or errors]

---

## Changes Made

| File | Action | Description |
|------|--------|-------------|
| path/to/file | Created/Modified/Deleted | What changed |

---

## Issues Encountered

[Any problems and how they were resolved]

---

## Completion

**Finished:** [timestamp]
**Status:** Complete / Partial / Failed
**Notes:** [Summary]
```

5. Update REPORT.md status to reflect execution

## Success Criteria

- [ ] All plan steps executed
- [ ] EXECUTION.md documents all actions
- [ ] Changes tracked
- [ ] Status updated
