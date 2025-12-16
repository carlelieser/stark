---
allowed-tools: Bash, Task, Read, Glob, Edit
description: Autonomous STARK workflow - solve a problem end-to-end
---

## Context

**Problem:** $ARGUMENTS

## Purpose

Fully autonomous problem-solving. You are the **orchestrator** - your ONLY job is to coordinate work by delegating STARK commands to subagents. You do NOT execute STARK commands yourself.

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

For EACH STARK command, use the Task tool like this:

### /stark:new
```
Task tool:
  subagent_type: "general-purpose"
  prompt: |
    Execute the /stark:new command for this problem:
    "$ARGUMENTS"

    After completion, report back the solution ID that was created.
```

### /stark:plan
```
Task tool:
  subagent_type: "general-purpose"
  prompt: |
    Execute /stark:plan for solution ID: <id>

    Complete the planning phase and report when done.
```

### /stark:task, /stark:think, /stark:ready, /stark:run, /stark:verify
```
Task tool:
  subagent_type: "general-purpose"
  prompt: |
    Execute /stark:<command> <id> "<task name>"

    Report the outcome.
```

### /stark:complete
```
Task tool:
  subagent_type: "general-purpose"
  prompt: |
    Execute /stark:complete <id>

    Finalize the solution and report the summary.
```

### /stark:cleanup (Quality Gate)
```
Task tool:
  subagent_type: "general-purpose"
  prompt: |
    Execute /stark:cleanup

    Run multi-agent cleanup analysis on all uncommitted changes.
    This analyzes code quality, config validity, documentation, and consistency.

    Report the verdict (SATISFACTORY / NEEDS WORK / UNSATISFACTORY) and any critical issues found.
```

---

## State Detection

Read `.stark/<id>/solution.md` directly (use Read tool) to check state:

| State | How to Detect | Next Action |
|-------|---------------|-------------|
| Not started | No `.stark/` folder or no solution.md | Delegate `/stark:new` |
| New | Status: "New" | Delegate `/stark:plan` |
| Planned | Status: "Planning Complete" | Delegate `/stark:task` for first task |
| Task in progress | Task folder exists without VERIFICATION.md | Continue task loop |
| Task needs verification | EXECUTION.md exists | Delegate `/stark:verify` |
| Task verified | VERIFICATION.md shows PASS | Move to next task |
| All tasks done | All tasks verified | Delegate `/stark:cleanup` (quality gate) |
| Cleanup passed | Cleanup verdict = SATISFACTORY | Delegate `/stark:complete` |
| Cleanup failed | Cleanup verdict = NEEDS WORK/UNSATISFACTORY | Fix issues, re-run cleanup |
| Complete | Status: "Complete" + `[x] Execution complete` | **RESOLVE** |
| Error | 3 failures on same task OR 3 cleanup failures | **ABORT** |

---

## Task Loop (for each task)

For each task in the solution, delegate these commands in sequence:

1. **Delegate** `/stark:task <id> "<task>"` - Create task report
2. **Delegate** `/stark:think <id> "<task>"` - Deliberate on approach
3. **Delegate** `/stark:ready <id> "<task>"` - Check readiness
   - If NOT READY → Delegate another `/stark:think`
   - If READY → Continue
4. **Delegate** `/stark:run <id> "<task>"` - Execute the task
5. **Delegate** `/stark:verify <id> "<task>"` - Verify completion
   - If FAIL → Back to step 1 (max 3 attempts)
   - If PASS → Next task

---

## Cleanup Loop (after all tasks verified)

Once ALL tasks are verified, run the cleanup quality gate:

1. **Delegate** `/stark:cleanup` - Multi-agent analysis of all changes
2. **Check verdict**:
   - If SATISFACTORY → Proceed to `/stark:complete`
   - If NEEDS WORK or UNSATISFACTORY → Address critical issues
3. **If not satisfactory**:
   - Fix critical issues identified by cleanup
   - Re-delegate `/stark:cleanup` to re-analyze
   - Max 3 cleanup iterations before proceeding anyway
4. **After cleanup passes** → Delegate `/stark:complete`

The cleanup phase ensures:
- Code quality across all changes
- Configuration validity
- Documentation accuracy
- Cross-file consistency

---

## Progress Reporting

After each delegation, report:
```
[Heartbeat #N]
  State: <current state>
  Action: Delegated /stark:<command> to subagent
  Result: <subagent outcome>
```

---

## Exit Conditions

| Condition | Action |
|-----------|--------|
| Status = "Complete" AND `[x] Execution complete` | **RESOLVE** - Report success |
| Task failed 3 times | **ABORT** - Report failure |
| Cleanup failed 3 times | Proceed with warning, delegate `/stark:complete` |
| Max 100 heartbeats reached | **ABORT** - Report timeout |
| Unrecoverable error from subagent | **ABORT** - Report error |

---

## Your Task Now

Execute the heartbeat loop:

1. **Initialize**: Use Task tool to delegate `/stark:new "$ARGUMENTS"`. Get the solution ID from the subagent's response.

2. **Heartbeat Loop**:
   - Read solution.md to check state
   - Determine next action from state table
   - Use Task tool to delegate the appropriate STARK command
   - Sleep 2 seconds (`sleep 2` via Bash)
   - Repeat

3. **Cleanup Gate**: After all tasks are verified:
   - Delegate `/stark:cleanup` to analyze all changes
   - If not satisfactory, fix critical issues and re-run
   - Once satisfactory (or after 3 attempts), proceed to complete

4. **Resolve**: When state is Complete, report final summary.

**START NOW**: Delegate `/stark:new` to a subagent for the problem: "$ARGUMENTS"
