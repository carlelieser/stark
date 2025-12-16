---
model: claude-haiku-4-5-20251001
allowed-tools: Bash, Task, Read, Glob, Edit
description: Autonomous STARK workflow - solve a problem end-to-end
---

## Context

**Problem:** $ARGUMENTS

## Purpose

Fully autonomous problem-solving. You are the **orchestrator** - your ONLY job is to coordinate work by delegating STARK commands to subagents. You do NOT execute STARK commands yourself.

> **Time Expectation:** Autonomous workflows typically take **1-6+ hours** depending on complexity. Simple problems may complete in under an hour; complex multi-task problems often require several hours. Plan accordingly - this is thorough, not fast.

---

## Critical Execution Rule

**YOU MUST USE THE TASK TOOL TO DELEGATE ALL STARK COMMANDS.**

DO NOT use SlashCommand. DO NOT execute STARK commands inline.

Instead, spawn subagents using the Task tool:

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

Continuous cycle: Check status → Decide → Delegate via Task tool → Sleep 2s → Repeat

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
- `/stark:complete <id>` - "Execute /stark:complete <id>. Report summary."
- `/stark:cleanup` - "Execute /stark:cleanup. Report verdict and critical issues."

---

## State Detection

Read `.stark/<id>/solution.md` to determine next action:

| State | Next Action |
|-------|-------------|
| No solution.md | Delegate `/stark:new` |
| Status: "New" | Delegate `/stark:plan` |
| Status: "Planning Complete" | **APPROVAL 1** - Ask user before first task |
| Task folder without VERIFICATION.md | Continue task loop |
| EXECUTION.md exists | Delegate `/stark:verify` |
| VERIFICATION.md shows PASS | Next task or cleanup if all done |
| All tasks verified | **APPROVAL 2** - Ask user before cleanup |
| Cleanup SATISFACTORY | Delegate `/stark:complete` |
| Cleanup NEEDS WORK/UNSATISFACTORY | **APPROVAL 3** - Ask user before auto-fix |
| Status: "Complete" + `[x] Execution complete` | **RESOLVE** |
| 3 failures on same task OR 3 cleanup failures | **ABORT** |
| User declined approval | **EXIT** - Report state and stop |

---

## Task Loop

For each task: task → think → ready (loop if not ready) → run → verify (retry if fail, max 3x) → next task

---

## Approval Prompts

At critical decision points, prompt user for approval before proceeding.

### APPROVAL 1: After Planning Complete

When status is "Planning Complete", ask before first task:

```
Planning complete for solution <id>.

Review the plan at: .stark/<id>/PLAN.md

Proceed with task execution? (yes/no)
```

- **yes**: Delegate `/stark:task` for first task
- **no**: Report "Workflow paused. Review plan and run /stark:auto <id> to resume." and **EXIT**

### APPROVAL 2: Before Cleanup

When all tasks are verified, ask before cleanup:

```
All tasks verified for solution <id>.

Review implementation at: .stark/<id>/tasks/

Run cleanup analysis? (yes/no)
```

- **yes**: Delegate `/stark:cleanup`
- **no**: Report "Workflow paused. Review tasks and run /stark:auto <id> to resume." and **EXIT**

### APPROVAL 3: Before Auto-Fix

When cleanup returns NEEDS WORK or UNSATISFACTORY, ask before fixing:

```
Cleanup found issues for solution <id>.

Review report at: .stark/<id>/CLEANUP.md

Attempt auto-fix? (yes/no)
```

- **yes**: Fix issues, re-run cleanup (max 3x)
- **no**: Report "Workflow paused. Fix issues manually and run /stark:auto <id> to resume." and **EXIT**

---

## Cleanup Loop

After all tasks verified (and APPROVAL 2 granted):
1. Delegate `/stark:cleanup` (multi-agent quality analysis)
2. If SATISFACTORY → delegate `/stark:complete`
3. If NEEDS WORK/UNSATISFACTORY → **APPROVAL 3** → fix issues, re-run cleanup (max 3x)
4. After 3 attempts or SATISFACTORY → delegate `/stark:complete`

---

## Progress Reporting

After each delegation: `[Heartbeat #N] State: <state> | Action: <command> | Result: <outcome>`

---

## Exit Conditions

| Condition | Action |
|-----------|--------|
| Status = "Complete" AND `[x] Execution complete` | **RESOLVE** - Report success |
| Task failed 3 times | **ABORT** - Report failure |
| Cleanup failed 3 times | Proceed with warning, delegate `/stark:complete` |
| Max 100 heartbeats reached | **ABORT** - Report timeout |
| Unrecoverable error from subagent | **ABORT** - Report error |
| User declined approval prompt | **EXIT** - Report state and pause for manual review |

---

## Execute Now

1. Delegate `/stark:new "$ARGUMENTS"` via Task tool, get solution ID
2. Heartbeat loop: Read solution.md → determine state → delegate command → sleep 2s → repeat
3. After all tasks verified: run cleanup loop
4. When complete: report final summary

**START**: Delegate `/stark:new` for problem: "$ARGUMENTS"
