---
model: claude-haiku-4-20250514
description: Show detailed status of a STARK solution
---

## Context

**Solution ID:** $ARGUMENTS

## Task

1. Verify `.stark/$ARGUMENTS/` exists
2. Read `.stark/$ARGUMENTS/solution.md`
3. Display comprehensive status:

```
# Solution: $ARGUMENTS

**Status:** [status from solution.md]
**Created:** [date]

## Problem Summary
[First few lines of Situation section]

## Progress
[Checklist from Status section with completion %]

## Tasks
[List tasks with their current state]

## Recent Activity
[List recent files modified in tasks/ folder]
```

4. If solution doesn't exist: "Solution '$ARGUMENTS' not found. Use /stark:list to see available solutions."

## Success Criteria

- [ ] Solution details displayed accurately
- [ ] Task progress shown
- [ ] Recent activity visible
