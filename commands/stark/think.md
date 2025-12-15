---
description: Deliberate on a task through iterative analysis
---

## Context

**Solution ID:** $1
**Task:** $2

Review existing materials:
- Solution: @.stark/$1/solution.md
- Task reports in: .stark/$1/tasks/

## Task

Iterate on the task plan through deep deliberation.

1. Find the task folder matching "$2" in `.stark/$1/tasks/`
2. Review:
   - The task's REPORT.md
   - All existing DELIBERATION-*.md files
   - Related tasks' deliberations (for cross-task insights)

3. Create new deliberation: `.stark/$1/tasks/<task-id>/DELIBERATION-<n>.md`
   - Number sequentially: DELIBERATION-1.md, DELIBERATION-2.md, etc.

```markdown
# Deliberation [N]

**Task:** [Task Name]
**Created:** [timestamp]

---

## Review of Prior Thinking

[Summary of previous deliberations if any]

---

## New Insights

[What new angles or considerations emerged]

---

## Questions Resolved

- [Question]: [Answer/Resolution]

---

## Open Questions

- [Remaining uncertainties]

---

## Confidence Assessment

| Aspect | Confidence | Notes |
|--------|------------|-------|
| Understanding | High/Med/Low | |
| Approach | High/Med/Low | |
| Risks identified | High/Med/Low | |

---

## Recommendation

**READY** / **NEEDS MORE THINKING**

[Rationale]
```

4. If insights require changes, update REPORT.md accordingly

## Success Criteria

- [ ] New deliberation file created
- [ ] Prior deliberations reviewed and referenced
- [ ] Confidence assessment provided
- [ ] Clear recommendation given
