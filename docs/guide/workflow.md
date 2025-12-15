---
title: Workflow Guide
description: How to use STARK effectively - session flows, decision points, best practices, and common patterns
---

# Workflow Guide

How to use STARK effectively.

## Typical STARK Session Flow

A typical STARK session follows a structured progression from problem identification through verified completion. Understanding this flow helps you use STARK effectively and know what to expect at each stage.

```
┌─────────────────────────────────────────────────────────────────┐
│                    STARK SESSION FLOW                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. PROBLEM IDENTIFICATION                                      │
│     You have a complex problem that needs systematic thinking   │
│     ↓                                                           │
│                                                                 │
│  2. SOLUTION CREATION → /stark:new "problem description"        │
│     STARK analyzes the problem and creates a tracked solution   │
│     Returns: Unique solution ID (e.g., azure-falcon-7k)         │
│     ↓                                                           │
│                                                                 │
│  3. PLANNING → /stark:plan {solution-id}                        │
│     Define success criteria, design approach, break into tasks  │
│     Alternative: /stark:auto for hands-off autonomous execution │
│     ↓                                                           │
│                                                                 │
│  4. TASK BREAKDOWN → /stark:task {solution-id} "task name"      │
│     Create detailed execution plan for each task                │
│     Repeat for all tasks identified in planning phase           │
│     ↓                                                           │
│                                                                 │
│  5. EXECUTION LOOP (for each task)                              │
│     ┌──────────────────────────────────────┐                   │
│     │ /stark:think → Deliberate on approach│                   │
│     │         ↓                             │                   │
│     │ /stark:ready → Validate prerequisites │                   │
│     │         ↓                             │                   │
│     │ /stark:run → Execute the task        │                   │
│     │         ↓                             │                   │
│     │ /stark:verify → Check acceptance     │                   │
│     └──────────────────────────────────────┘                   │
│     Repeat until all tasks pass verification                    │
│     ↓                                                           │
│                                                                 │
│  6. COMPLETION → /stark:complete {solution-id}                  │
│     Finalize solution, capture outcomes and learnings           │
│     ↓                                                           │
│                                                                 │
│  7. LEARNING CAPTURE → /stark:learn {command-name} {type}       │
│     (Optional) Capture feedback to improve STARK commands       │
│     Helps STARK evolve based on real-world usage                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Expected Timeline:** Simple problems (1-2 tasks) typically complete in 15-30 minutes. Complex problems (5+ tasks) may take several hours or span multiple sessions. STARK preserves full context, so you can pause and resume at any point.

## Decision Points

Knowing when to use specific commands or workflows maximizes STARK's value while minimizing overhead.

### When to Use Manual vs Autonomous Mode

**Use Manual Mode (`/stark:new` → `/stark:plan` → `/stark:task` → loop) when:**
- You're exploring unfamiliar problem spaces and need to guide each decision
- The problem has high uncertainty requiring frequent course corrections
- You want to learn by actively participating in each phase
- You need tight control over approach selection and task sequencing
- The problem involves creative or subjective decisions

**Use Autonomous Mode (`/stark:auto`) when:**
- The problem is well-defined with clear requirements
- You trust STARK's systematic approach for this problem domain
- You want hands-off execution with built-in quality gates
- Time efficiency is more important than direct involvement
- You're solving a similar problem to ones STARK has handled before

**Trade-offs:** Autonomous mode is faster and ensures systematic completeness but offers less control. Manual mode gives you decision authority at every step but requires more time and engagement.

### When to Run /stark:think

**Always deliberate when:**
- The task approach isn't immediately obvious
- Multiple viable approaches exist and you need to evaluate trade-offs
- The task has significant risk or irreversible consequences
- You're working in unfamiliar territory
- Prior attempts at similar tasks failed

**Skip deliberation when:**
- The execution plan is clear and straightforward
- The task is routine with established patterns
- You're confident in the approach from prior experience
- Time is critical and the risk is low

**Rule of thumb:** If you're asking "how should I approach this?" rather than "what are the steps?", run `/stark:think` first.

### When to Use the Learning System

**Capture feedback (`/stark:learn`) when:**
- A command produced unexpected results (good or bad)
- You noticed inefficiencies or gaps in command prompts
- You had to work around limitations or unclear instructions
- A command helped you solve a particularly tricky problem
- You see patterns across multiple command executions

**Review history (`/stark:learn-history`) when:**
- You've accumulated 3+ feedback entries for a command
- You want to see if patterns emerge before proposing improvements
- You're debugging why a command behaves a certain way

**Generate proposals (`/stark:learn-propose`) when:**
- You have 5+ feedback entries showing consistent patterns
- Command effectiveness has noticeably improved or degraded
- You're ready to systematically improve a command

**Apply improvements (`/stark:learn-apply`) when:**
- Proposals are clearly beneficial and low-risk
- You've reviewed proposals and they align with STARK's philosophy
- You want to test iterative command evolution

**Best practice:** Capture feedback immediately after command execution while context is fresh. Review and apply improvements in batches rather than after every single feedback entry.

## Best Practices

Following these practices helps you get maximum value from STARK while avoiding common pitfalls.

1. **Front-load the analysis** - Spend more time in situation analysis and target definition than you think you need. Time invested in understanding the problem deeply prevents wasted execution on wrong solutions. If you're tempted to skip planning and jump to coding, that's precisely when STARK adds most value.

2. **Write specific acceptance criteria** - Vague criteria like "works well" or "is fast enough" make verification meaningless. Define measurable outcomes: "API responds in <200ms for 95th percentile" or "handles 1000 concurrent connections without errors." Specific criteria make task completion unambiguous.

3. **Break tasks into testable units** - Each task should be independently verifiable against its own acceptance criteria. If you can't verify a task completed successfully without running other tasks, it's too coupled. Aim for tasks that take 30 minutes to 2 hours each - smaller than that creates overhead, larger risks incomplete execution.

4. **Preserve full context** - STARK's power comes from resumability and audit trails. Don't delete solution directories or edit generated files manually. Let STARK maintain the complete history. If you need to correct something, use STARK commands rather than direct file edits.

5. **Use deliberation strategically** - `/stark:think` is valuable for high-risk or ambiguous tasks, but not every task needs iterative deliberation. Over-deliberating on straightforward tasks wastes time. Under-deliberating on complex tasks causes execution failures. Match deliberation depth to task complexity and risk.

6. **Verify before proceeding** - Never mark a task complete or move to the next task until `/stark:verify` passes. Failures compound - building on unverified work multiplies technical debt. If verification fails, fix the task before proceeding.

7. **Capture learnings immediately** - Run `/stark:learn` while the command execution is fresh in your mind. Waiting even a few hours causes you to forget crucial context about what worked or didn't. Learning capture is most valuable when it's specific and contextual.

8. **Review solutions periodically** - Revisit completed solutions in `.stark/solutions/` to reinforce patterns and identify improvements. Solutions become documentation of your decision-making process and can inform future similar problems.

## Common Patterns

Recognize these patterns to use STARK more effectively in common scenarios.

### Pattern 1: Iterative Refinement

**Scenario:** Your initial approach isn't working and you need to pivot without starting over.

**Commands:**
```bash
# Review current state
/stark:status {solution-id}

# Deliberate on alternative approaches
/stark:think {solution-id} "Task name"

# Update task execution plan if needed
/stark:task {solution-id} "Task name"  # Regenerates REPORT.md

# Execute revised approach
/stark:run {solution-id} "Task name"

# Verify new approach
/stark:verify {solution-id} "Task name"
```

**Key insight:** STARK tracks deliberation iterations, so pivoting doesn't lose your thinking. Each `DELIBERATION-*.md` file preserves what you tried and why, building institutional knowledge even from failed approaches.

### Pattern 2: Batch Processing

**Scenario:** You have multiple similar tasks to execute (e.g., implementing several API endpoints, fixing multiple related bugs, or adding tests for multiple components).

**Commands:**
```bash
# Create task reports for all tasks upfront
/stark:task {solution-id} "Task 1"
/stark:task {solution-id} "Task 2"
/stark:task {solution-id} "Task 3"

# Execute all tasks systematically
/stark:ready {solution-id} "Task 1" && /stark:run {solution-id} "Task 1"
/stark:verify {solution-id} "Task 1"

/stark:ready {solution-id} "Task 2" && /stark:run {solution-id} "Task 2"
/stark:verify {solution-id} "Task 2"

# ... continue for remaining tasks

# Finalize after all tasks verified
/stark:complete {solution-id}
```

**Alternative (autonomous):** Use `/stark:auto` to handle batch execution automatically. The autonomous mode will systematically work through all tasks with the same rigor but without manual intervention.

**Key insight:** Creating all task reports upfront helps you see dependencies and sequencing issues before execution begins.

### Pattern 3: Exploration Mode

**Scenario:** You don't fully understand the problem space and need to explore before committing to a solution approach.

**Commands:**
```bash
# Create solution with initial understanding
/stark:new "Exploratory problem description"

# Plan with explicit unknowns documented
/stark:plan {solution-id}
# During planning, call out assumptions and knowledge gaps

# Create reconnaissance task
/stark:task {solution-id} "Investigate and document [unknown aspect]"

# Execute investigation
/stark:run {solution-id} "Investigate and document [unknown aspect]"

# Based on findings, update plan
# (Edit .stark/solutions/{solution-id}/solution.md to revise approach)

# Continue with informed execution
/stark:task {solution-id} "Implement [now-understood solution]"
# ... rest of workflow
```

**Key insight:** STARK supports learning-oriented tasks, not just implementation tasks. Use early tasks to reduce uncertainty before committing to a specific approach. Document findings in `EXECUTION.md` to inform subsequent planning.

### Pattern 4: Quality Gate Enforcement

**Scenario:** You want systematic quality checks before finalizing work, especially for production changes.

**Commands:**
```bash
# Execute all tasks to completion
# ... normal workflow ...

# Run comprehensive cleanup analysis
/stark:cleanup {solution-id}

# Review cleanup report (multiple subagents analyze your changes)
# Address any issues found

# Re-run cleanup until satisfactory
/stark:cleanup {solution-id}

# Only finalize after cleanup passes
/stark:complete {solution-id}
```

**Key insight:** `/stark:cleanup` runs multiple specialized subagents that analyze code quality, configuration validity, documentation accuracy, and cross-file consistency. This catches issues manual review often misses. Autonomous mode (`/stark:auto`) runs cleanup automatically before completion.
