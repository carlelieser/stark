---
model: claude-sonnet-4-5-20250929
description: Check if a task is ready for execution
---

## Context

**Solution ID:** $1
**Task:** $2

Review task materials in .stark/$1/tasks/

## Task

Evaluate readiness for execution.

1. Load task materials (.stark/$1/tasks/ matching "$2"):
   - REPORT.md (execution plan)
   - All DELIBERATION files

2. Evaluate against readiness criteria:

### Readiness Checklist

- [ ] **Understanding**: Task requirements fully understood
- [ ] **Plan**: Execution steps are clear and actionable
- [ ] **Risks**: Potential issues identified with mitigations
- [ ] **Dependencies**: All prerequisites available
- [ ] **Deliberation**: At least one deliberation completed
- [ ] **Confidence**: High confidence in approach

## Response

### If READY:
```
## Status: READY
All criteria met.
**Summary:** [Key points and approach]
Proceed with: /stark:run $1 $2
```

### If NOT READY:
```
## Status: NOT READY
**Blocking:** [What's missing]
**Recommendation:** /stark:think $1 $2 to address [specific areas]
```

## Success Criteria

- [ ] All deliberations reviewed
- [ ] Readiness checklist evaluated
- [ ] Clear READY or NOT READY response
- [ ] Next action provided
