---
model: claude-opus-4-5-20251101
description: Assess current state against original problem with fresh perspective
---

## Context

**Solution ID:** $1

## Purpose

You are a **fresh expert agent** with NO prior context. Your role is to objectively evaluate whether the original problem has been solved by examining the current state of the codebase.

**Critical:** You must approach this with zero assumptions about what work has been done. You only know the original problem and can observe the current codebase state.

---

## Task

### Step 1: Load Original Problem

Read `.stark/$1/solution.md` and extract ONLY:
- The **original problem statement** (from the first `## Original Problem` section)
- The **solution ID** and creation date

Do NOT read task history, execution logs, or previous assessments. You must maintain fresh perspective.

### Step 2: Analyze Current State

Examine the codebase to understand its current state:
- Read relevant source files
- Check configurations
- Run tests if applicable
- Review any outputs or artifacts

Form your own independent understanding of what exists NOW.

### Step 3: Compare Against Original Problem

Evaluate objectively:
1. Does the current state satisfy the original problem's desired outcome?
2. Are there gaps between current state and the original goal?
3. What specific changes (if any) would still be needed?

### Step 4: Render Verdict

Create `.stark/$1/assessments/ASSESSMENT-<N>.md` where N is the next sequential number:

```markdown
# Assessment <N>

**Solution ID:** $1
**Timestamp:** [ISO 8601]
**Assessor:** Fresh Expert Agent

## Original Problem

[Copy the original problem statement verbatim]

## Current State Analysis

[Your independent analysis of what currently exists in the codebase]

## Gap Analysis

[Comparison: what was requested vs what exists now]

## Verdict

**[NO_CHANGES_NEEDED | CHANGES_REQUIRED]**

### If CHANGES_REQUIRED:

## New Solution

### Situation
[Fresh analysis of remaining gap]

### Target
[Specific measurable outcomes still needed]

### Approach
[Strategy to close remaining gap]

### Resources
[What's needed for remaining work]

### Tasks
[Numbered list of specific tasks to complete the solution]

### If NO_CHANGES_NEEDED:

## Completion Rationale

[Evidence that the original problem has been fully addressed]
```

---

## Decision Logic

### NO_CHANGES_NEEDED when:
- The original problem's desired state has been achieved
- All explicit and implicit requirements are satisfied
- No meaningful gaps remain between goal and current state

### CHANGES_REQUIRED when:
- Gaps exist between original goal and current state
- New issues discovered that relate to original problem
- Original requirements not fully satisfied

---

## Critical Rules

1. **Fresh Perspective:** Do not read EXECUTION.md, VERIFICATION.md, or previous assessments before forming your own view
2. **Original Problem Only:** Base your evaluation solely on the original problem statement
3. **Current State Focus:** Judge by what EXISTS, not what was attempted
4. **Objective Evidence:** Support your verdict with concrete observations
5. **Complete Solutions:** If CHANGES_REQUIRED, provide a complete new solution plan

---

## Success Criteria

- [ ] Original problem extracted from solution.md
- [ ] Current codebase state independently analyzed
- [ ] Gap analysis completed with evidence
- [ ] Clear verdict rendered (NO_CHANGES_NEEDED or CHANGES_REQUIRED)
- [ ] If CHANGES_REQUIRED: Complete new solution with tasks provided
- [ ] Assessment file created in .stark/$1/assessments/
