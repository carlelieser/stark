---
model: claude-sonnet-4-5-20250929
description: Verify task completion against acceptance criteria
---

## Context

**Solution ID:** $1
**Task:** $2

Review task materials in .stark/$1/tasks/

## Task

Verify task execution meets all acceptance criteria.

1. Load task materials (.stark/$1/tasks/ matching "$2"):
   - REPORT.md (acceptance criteria)
   - EXECUTION.md (work completed)
   - Actual outputs/changes

2. Check each criterion with evidence (files, tests, etc.)

3. Create VERIFICATION.md with:
   - Header: Task name, timestamp
   - Acceptance Criteria Check: Each criterion with status (PASS/FAIL), evidence, notes
   - Summary: Table of all criteria with statuses, overall count
   - Result: PASS or FAIL

## Response

### If PASS:
```
## Verification: PASS
All criteria met. Task complete.
Update solution.md to mark task as done.
```

### If FAIL:
```
## Verification: FAIL
**Failed:** [Criterion and reason]
**Actions:** [What to fix]
Return to: /stark:task $1 $2
```

## Success Criteria

- [ ] All criteria verified with evidence
- [ ] VERIFICATION.md created
- [ ] Clear PASS or FAIL result
- [ ] Next action provided
