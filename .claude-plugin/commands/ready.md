---
description: Check if a task is ready for execution
---

## Context

**Solution ID:** $1
**Task:** $2

Review task materials in .stark/$1/tasks/

## Task

Evaluate readiness for execution.

1. Find the task folder matching "$2"
2. Review:
   - REPORT.md (execution plan)
   - All DELIBERATION-*.md files
3. Evaluate against readiness criteria:

### Readiness Checklist

- [ ] **Understanding**: Task requirements fully understood
- [ ] **Plan**: Execution steps are clear and actionable
- [ ] **Risks**: Potential issues identified with mitigations
- [ ] **Dependencies**: All prerequisites available
- [ ] **Deliberation**: At least one deliberation completed
- [ ] **Confidence**: High confidence in approach

## Response

Based on evaluation, respond with ONE of:

### READY

```
## Status: READY

All criteria met. Task is ready for execution.

**Summary:**
- [Key points from deliberation]
- [Approach to be taken]

Proceed with: /stark:run $1 $2
```

### NOT READY

```
## Status: NOT READY

[Explain what's missing or uncertain]

**Blocking Issues:**
1. [Issue]
2. [Issue]

**Recommendation:**
Run /stark:think $1 $2 to address:
- [Specific area needing more thought]
```

## Success Criteria

- [ ] All deliberations reviewed
- [ ] Readiness checklist evaluated
- [ ] Clear READY or NOT READY response
- [ ] Next action provided
