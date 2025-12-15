---
description: Create a task execution report
---

## Context

**Solution ID:** $1
**Task:** $2

Review the solution at @.stark/$1/solution.md

## Task

Analyze the specified task and create an execution plan.

1. Review the solution and locate the task in the Approach section
2. Create task folder: `.stark/$1/tasks/<task-id>/`
   - Use descriptive kebab-case: `task-NN-description`
   - Example: `task-01-setup`, `task-02-refactor`

3. Generate `.stark/$1/tasks/<task-id>/REPORT.md`:

```markdown
# Task: [Task Name]

**Solution:** $1
**Task ID:** <task-id>
**Status:** Planning

---

## Description

[What needs to be done]

---

## Analysis

[Deep analysis of the task requirements]

---

## Acceptance Criteria

[Copy from solution.md]
- [ ] Criterion 1
- [ ] Criterion 2

---

## Execution Plan

### Step 1: [Action]
[Details]

### Step 2: [Action]
[Details]

---

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|

---

## Dependencies

[What must exist or be true before execution]
```

## Success Criteria

- [ ] Task folder created
- [ ] REPORT.md generated with full analysis
- [ ] Execution plan is actionable
