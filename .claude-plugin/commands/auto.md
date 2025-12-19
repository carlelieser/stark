---
model: claude-haiku-4-5-20251001
allowed-tools: Bash, Task, Read, Glob, Edit
description: Autonomous STARK workflow - solve a problem end-to-end
---

## Context

**Problem:** $ARGUMENTS

## Purpose

Fully autonomous problem-solving using a **Plan → Act → Assess → Repeat** cycle. You are the **orchestrator** - your ONLY job is to coordinate work by delegating STARK commands to subagents. You do NOT execute STARK commands yourself.

> **Time Expectation:** Autonomous workflows typically take **1-6+ hours** depending on complexity. Simple problems may complete in under an hour; complex multitask problems often require several hours. Plan accordingly - this is thorough, not fast.

---

## Core Pattern: Plan → Act → Assess → Repeat

```
┌─────────────────────────────────────────────────────────────┐
│                         PLAN                                 │
│  /stark:new → /stark:plan → Generate tasks                  │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                          ACT                                 │
│  /stark:task → /stark:think → /stark:ready → /stark:run    │
│  → /stark:verify                                            │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                        ASSESS                                │
│  Fresh expert agent evaluates: Is the original problem      │
│  solved by the CURRENT state of the codebase?               │
│                                                             │
│  → NO_CHANGES_NEEDED: Complete and exit                     │
│  → CHANGES_REQUIRED: New solution iteration, continue       │
└─────────────────────────────────────────────────────────────┘
                              ↓
                         (Repeat if needed)
```

**Key Innovation:** After each task, a FRESH agent with NO prior context assesses whether the original problem is solved. This prevents tunnel vision and ensures the solution actually addresses the problem.

---

## Critical Execution Rule

**YOU MUST USE THE TASK TOOL TO DELEGATE ALL STARK COMMANDS.**

DO NOT use SlashCommand. DO NOT execute STARK commands inline.

Spawn subagents using the Task tool:

```
Task tool call:
  subagent_type: "general-purpose"
  prompt: "Execute /stark:new for problem: [problem description]. Return the solution ID."
```

Your role is purely orchestration:

1. **Check status** - Read solution.md directly
2. **Decide** - Determine next action based on state
3. **Delegate** - Spawn a subagent via Task tool to execute the STARK command
4. **Wait** - Get result from subagent
5. **Repeat** - Continue heartbeat loop

---

## Heartbeat Loop

Continuous cycle: Check status → Decide → Delegate via Task tool → Repeat

---

## How to Delegate STARK Commands

Use Task tool (subagent_type: "general-purpose") for each command:

- `/stark:new` - "Execute /stark:new for: $ARGUMENTS. Return solution ID."
- `/stark:plan <id>` - "Execute /stark:plan <id>. Report when done."
- `/stark:task <id> "<task>"` - "Execute /stark:task <id> '<task>'. Report outcome."
- `/stark:think <id> "<task>"` - "Execute /stark:think <id> '<task>'. Report outcome."
- `/stark:ready <id> "<task>"` - "Execute /stark:ready <id> '<task>'. Report verdict."
- `/stark:run <id> "<task>"` - "Execute /stark:run <id> '<task>'. Report outcome."
- `/stark:verify <id> "<task>"` - "Execute /stark:verify <id> '<task>'. Report result."
- `/stark:assess <id>` - "Execute /stark:assess <id>. Return verdict: NO_CHANGES_NEEDED or CHANGES_REQUIRED."
- `/stark:complete <id>` - "Execute /stark:complete <id>. Report summary."
- `/stark:cleanup` - "Execute /stark:cleanup. Report verdict and critical issues."

---

## State Detection

Read `.stark/<id>/solution.md` and `.stark/<id>/assessments/` to determine next action:

| State                                         | Next Action                                   |
|-----------------------------------------------|-----------------------------------------------|
| No solution.md                                | Delegate `/stark:new`                         |
| Status: "New"                                 | Delegate `/stark:plan`                        |
| Status: "Planning Complete"                   | **APPROVAL 1** - Ask user before first task   |
| Task in progress (no VERIFICATION.md)         | Continue task loop                            |
| EXECUTION.md exists but no VERIFICATION.md    | Delegate `/stark:verify`                      |
| VERIFICATION.md shows PASS                    | **ASSESS** - Spawn fresh assess agent         |
| Assessment: NO_CHANGES_NEEDED                 | **APPROVAL 2** → Cleanup → Complete           |
| Assessment: CHANGES_REQUIRED                  | Increment iteration, continue with new tasks  |
| Status: "Complete" + `[x] Execution complete` | **RESOLVE**                                   |
| 3 failures on same task                       | **ABORT**                                     |
| User declined approval                        | **EXIT** - Report state and stop              |

---

## Task Loop (Per Iteration)

For each task in current iteration:
1. `task` → `think` → `ready` (loop if not ready) → `run` → `verify`
2. If verify PASS → **Spawn fresh assess agent**
3. If assess NO_CHANGES_NEEDED → exit loop, proceed to cleanup
4. If assess CHANGES_REQUIRED → update iteration, restart with new tasks

---

## Assessment Protocol

**CRITICAL:** The assess agent MUST have fresh context. When delegating:

```
Task tool call:
  subagent_type: "general-purpose"
  prompt: "Execute /stark:assess <id>.

  IMPORTANT: You are a FRESH expert evaluating whether the original problem
  has been solved. Do NOT read task history or execution logs before forming
  your assessment. Only read the Original Problem section and examine the
  current codebase state.

  Return: NO_CHANGES_NEEDED or CHANGES_REQUIRED with brief rationale."
```

### If NO_CHANGES_NEEDED:
The original problem is solved. Proceed to cleanup and completion.

### If CHANGES_REQUIRED:
1. Read the new solution from the assessment file
2. Update solution.md with new iteration:
   - Increment Iteration field
   - Update Situation/Target/Approach/Resources from assessment
   - Add new Tasks section
3. Continue task loop with new tasks

---

## Approval Prompts

At critical decision points, prompt user for approval before proceeding.

### APPROVAL 1: After Planning Complete

When status is "Planning Complete", ask before first task:

```
Planning complete for solution <id> (Iteration <N>).

Review the plan at: .stark/<id>/solution.md

Proceed with task execution? (yes/no)
```

- **yes**: Delegate `/stark:task` for first task
- **no**: Report "Workflow paused. Review plan and run /stark:auto <id> to resume." and **EXIT**

### APPROVAL 2: Before Cleanup (After NO_CHANGES_NEEDED)

When assessment indicates problem is solved:

```
Assessment complete: NO_CHANGES_NEEDED

The fresh expert agent determined the original problem has been solved.
Review assessment at: .stark/<id>/assessments/ASSESSMENT-<N>.md

Run cleanup analysis? (yes/no)
```

- **yes**: Delegate `/stark:cleanup`
- **no**: Report "Workflow paused. Review assessment and run /stark:auto <id> to resume." and **EXIT**

### APPROVAL 3: Before Auto-Fix

When cleanup returns NEEDS WORK or UNSATISFACTORY:

```
Cleanup found issues for solution <id>.

Review report at: .stark/<id>/CLEANUP.md

Attempt auto-fix? (yes/no)
```

- **yes**: Fix issues, re-run cleanup (max 3x)
- **no**: Report "Workflow paused. Fix issues manually and run /stark:auto <id> to resume." and **EXIT**

---

## Cleanup Loop

After assessment returns NO_CHANGES_NEEDED (and APPROVAL 2 granted):

1. Delegate `/stark:cleanup` (multi-agent quality analysis)
2. If SATISFACTORY → delegate `/stark:complete`
3. If NEEDS WORK/UNSATISFACTORY → **APPROVAL 3** → fix issues, re-run cleanup (max 3x)
4. After 3 attempts or SATISFACTORY → delegate `/stark:complete`

---

## Iteration Management

When assessment returns CHANGES_REQUIRED:

1. Read new solution from `.stark/<id>/assessments/ASSESSMENT-<N>.md`
2. Update `.stark/<id>/solution.md`:
   - Increment `Iteration: N` → `Iteration: N+1`
   - Replace Situation/Target/Approach/Resources with assessment's new solution
   - Replace Tasks section with new tasks
   - Reset task completion status
3. Create new task folders for the new iteration's tasks
4. Resume task loop with updated plan

---

## Progress Reporting

After each delegation: `[Heartbeat #N] Iteration <I> | State: <state> | Action: <command> | Result: <outcome>`

---

## Exit Conditions

| Condition                                        | Action                                              |
|--------------------------------------------------|-----------------------------------------------------|
| Assessment: NO_CHANGES_NEEDED + Cleanup done     | **RESOLVE** - Report success                        |
| Task failed 3 times                              | **ABORT** - Report failure                          |
| Max 10 iterations reached                        | **ABORT** - Report iteration limit                  |
| Cleanup failed 3 times                           | Proceed with warning, delegate `/stark:complete`    |
| Max 100 heartbeats reached                       | **ABORT** - Report timeout                          |
| Unrecoverable error from subagent                | **ABORT** - Report error                            |
| User declined approval prompt                    | **EXIT** - Report state and pause for manual review |

---

## Execute Now

1. Delegate `/stark:new "$ARGUMENTS"` via Task tool, get solution ID
2. Delegate `/stark:plan <id>`
3. **APPROVAL 1** - Get user approval for task execution
4. Heartbeat loop:
   - Execute task (task → think → ready → run → verify)
   - After verify PASS → **Spawn fresh assess agent**
   - If NO_CHANGES_NEEDED → break loop
   - If CHANGES_REQUIRED → update iteration, continue with new tasks
5. **APPROVAL 2** - Get user approval for cleanup
6. Run cleanup loop
7. When complete: report final summary with iteration count

**START**: Delegate `/stark:new` for problem: "$ARGUMENTS"
