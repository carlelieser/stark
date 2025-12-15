---
description: Verify task completion against acceptance criteria
---

## Context

**Solution ID:** $1
**Task:** $2

Review task materials in .stark/$1/tasks/

## Task

Verify the task execution meets all acceptance criteria.

1. Find the task folder matching "$2"
2. Review:
   - REPORT.md for acceptance criteria
   - EXECUTION.md for what was done
   - Actual outputs/changes made

3. Check each acceptance criterion:
   - Verify with evidence (file exists, test passes, etc.)
   - Document verification method

4. Create or update `.stark/$1/tasks/<task-id>/VERIFICATION.md`:

```markdown
# Verification Report

**Task:** [Task Name]
**Verified:** [timestamp]

---

## Acceptance Criteria Check

### Criterion 1: [Description]
- **Status:** PASS / FAIL
- **Evidence:** [How verified]
- **Notes:** [Details]

### Criterion 2: [Description]
- **Status:** PASS / FAIL
- **Evidence:** [How verified]
- **Notes:** [Details]

---

## Summary

| Criterion | Status |
|-----------|--------|
| 1. [Name] | PASS/FAIL |
| 2. [Name] | PASS/FAIL |

**Overall:** X/Y criteria passed

---

## Result

**PASS** / **FAIL**
```

## Response

Based on verification, respond with ONE of:

### PASS

```
## Verification: PASS

All acceptance criteria met.
Task complete.

Update solution.md to mark task as done.
```

### FAIL

```
## Verification: FAIL

**Failed Criteria:**
1. [Criterion]: [Why it failed]

**Required Actions:**
- [What needs to be fixed]

Return to: /stark:task $1 $2 (to revise approach)
```

## Success Criteria

- [ ] All criteria verified with evidence
- [ ] VERIFICATION.md created
- [ ] Clear PASS or FAIL result
- [ ] Next action provided
