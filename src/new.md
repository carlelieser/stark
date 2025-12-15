---
description: Create a new STARK solution
---

## Context

**Problem:** $ARGUMENTS

## Prereqs

Verify `.stark/SYSTEM.md` exists. If not, instruct user to run `/stark:setup` first.

## Task

1. Generate a unique solution ID (kebab-case, e.g., `azure-falcon-7k`)
2. Create solution folder: `.stark/<id>/`
3. Analyze the problem using STARK Phase 1 (Situation Analysis):
   - Construct problem statement (Current State → Desired State → Gap → Impact)
   - Identify root causes (5 Whys)
   - Map constraints (hard, soft, assumed)
4. Create initial `.stark/<id>/solution.md` with:

```markdown
# STARK Solution: [Brief Title]

**ID:** <id>
**Created:** [date]
**Status:** New

---

## Situation

[Problem analysis from step 3]

---

## Target

[To be defined in /stark:plan]

---

## Approach

[To be defined in /stark:plan]

---

## Resources

[To be defined in /stark:plan]

---

## Status

- [ ] Problem analyzed
- [ ] Solution planned
- [ ] Tasks defined
- [ ] Execution complete
```

5. Report the solution ID for subsequent commands

## Success Criteria

- [ ] Unique ID generated
- [ ] Solution folder created
- [ ] Initial solution.md with Situation analysis
- [ ] ID reported to user
