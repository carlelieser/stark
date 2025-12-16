---
model: claude-opus-4-5-20251101
description: Create a new STARK solution
---

## Context

**Problem:** $ARGUMENTS

## Prereqs

Verify `.stark/SYSTEM.md` exists. If not, instruct user to run `/stark:setup` first.

## Task

1. Generate unique solution ID (kebab-case, e.g., `azure-falcon-7k`)
2. Create `.stark/<id>/` folder
3. Analyze problem using STARK Phase 1 (Situation):
   - Problem statement: Current State → Desired State → Gap → Impact
   - Root causes (5 Whys)
   - Constraints (hard, soft, assumed)
4. Create `.stark/<id>/solution.md`:
   - Header: Title, ID, Created date, Status: New
   - Situation: Analysis from step 3
   - Target/Approach/Resources: Placeholders (define in /stark:plan)
   - Status checklist: Problem analyzed, Solution planned, Tasks defined, Execution complete
5. Report solution ID

## Success Criteria

- [ ] Unique ID generated
- [ ] Solution folder created
- [ ] Initial solution.md with Situation analysis
- [ ] ID reported to user
