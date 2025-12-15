---
description: List all STARK solutions with their status
---

## Purpose

Display all solution folders in `.stark/` with their current status.

## Task

1. List all directories in `.stark/` (excluding SYSTEM.md)
2. For each solution folder:
   - Read `solution.md` if it exists
   - Extract: ID, status, created date, problem summary
3. Display in a formatted table:

```
| ID                | Status      | Created    | Problem Summary        |
|-------------------|-------------|------------|------------------------|
| crimson-falcon-7x | Complete    | 2025-12-15 | Sandbox violation fix  |
| cobalt-hydra-3m   | In Progress | 2025-12-15 | Architectural integr...|
```

4. If no solutions exist, display: "No STARK solutions found. Use /stark:new to create one."

## Success Criteria

- [ ] All solution folders listed
- [ ] Status accurately reflects solution.md content
- [ ] Output is readable and well-formatted
