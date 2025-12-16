---
description: Deliberate on a task through iterative analysis
---

## Context

**Solution ID:** $1
**Task:** $2

## Task

Deep iterative analysis on the task.

1. Find task folder matching "$2" in `.stark/$1/tasks/`
2. Read REPORT.md and all DELIBERATION-*.md files
3. Create `.stark/$1/tasks/<task-id>/DELIBERATION-<n>.md` (sequential numbering)

```markdown
# Deliberation [N]

**Task:** [Task Name]
**Created:** [timestamp]

---

## Review of Prior Thinking
[Summary of previous deliberations]

---

## New Insights
[Key new angles or considerations]

---

## Questions Resolved
- [Question]: [Resolution]

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

4. Update REPORT.md if insights require changes

## Success Criteria

- [ ] New deliberation created
- [ ] Prior deliberations reviewed
- [ ] Confidence assessed
- [ ] Clear recommendation given
