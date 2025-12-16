# STARK Workflow Guide

Detailed guidance on using STARK effectively.

## Table of Contents

- [Session Flow](#session-flow)
- [Decision Points](#decision-points)
- [Best Practices](#best-practices)
- [Common Patterns](#common-patterns)

---

## Session Flow

A typical STARK session follows a structured progression from problem identification through verified completion.

```
+-------------------------------------------------------------------+
|                      STARK SESSION FLOW                           |
+-------------------------------------------------------------------+
|                                                                   |
|  1. PROBLEM IDENTIFICATION                                        |
|     You have a complex problem that needs systematic thinking     |
|     |                                                             |
|     v                                                             |
|  2. SOLUTION CREATION -> /stark:new "problem description"        |
|     STARK analyzes the problem and creates a tracked solution     |
|     Returns: Unique solution ID (e.g., azure-falcon-7k)           |
|     |                                                             |
|     v                                                             |
|  3. PLANNING -> /stark:plan {solution-id}                        |
|     Define success criteria, design approach, break into tasks    |
|     Alternative: /stark:auto for hands-off autonomous execution   |
|     |                                                             |
|     v                                                             |
|  4. TASK BREAKDOWN -> /stark:task {solution-id} "task name"      |
|     Create detailed execution plan for each task                  |
|     Repeat for all tasks identified in planning phase             |
|     |                                                             |
|     v                                                             |
|  5. EXECUTION LOOP (for each task)                                |
|     +--------------------------------------+                      |
|     | /stark:think  -> Deliberate approach |                      |
|     |        |                             |                      |
|     |        v                             |                      |
|     | /stark:ready  -> Validate prereqs    |                      |
|     |        |                             |                      |
|     |        v                             |                      |
|     | /stark:run    -> Execute the task    |                      |
|     |        |                             |                      |
|     |        v                             |                      |
|     | /stark:verify -> Check acceptance    |                      |
|     +--------------------------------------+                      |
|     Repeat until all tasks pass verification                      |
|     |                                                             |
|     v                                                             |
|  6. COMPLETION -> /stark:complete {solution-id}                  |
|     Finalize solution, capture outcomes and learnings             |
|     |                                                             |
|     v                                                             |
|  7. LEARNING CAPTURE -> /stark:learn {command} {type}            |
|     (Optional) Capture feedback to improve STARK commands         |
|                                                                   |
+-------------------------------------------------------------------+
```

**Expected Duration:** STARK workflows typically take 1-6+ hours depending on complexity. Simple problems (1-2 tasks) may complete in 30-60 minutes, while complex problems (5+ tasks) often require several hours. STARK preserves full context, so you can pause and resume at any point.

---

## Decision Points

### Manual vs Autonomous Mode

**Use Manual Mode** (`/stark:new` -> `/stark:plan` -> `/stark:task` -> loop) when:
- Exploring unfamiliar problem spaces
- High uncertainty requiring frequent course corrections
- You want to learn by actively participating
- Need tight control over approach selection
- Problem involves creative or subjective decisions

**Use Autonomous Mode** (`/stark:auto`) when:
- Problem is well-defined with clear requirements
- You trust STARK's systematic approach
- Want hands-off execution with quality gates
- Time efficiency is priority
- Solving a similar problem to previous ones

### When to Run /stark:think

**Always deliberate when:**
- Task approach isn't immediately obvious
- Multiple viable approaches exist
- Task has significant risk or irreversible consequences
- Working in unfamiliar territory
- Prior similar tasks failed

**Skip deliberation when:**
- Execution plan is clear and straightforward
- Task is routine with established patterns
- Confident from prior experience
- Time is critical and risk is low

**Rule of thumb:** If asking "how should I approach this?" rather than "what are the steps?", run `/stark:think` first.

### When to Use the Learning System

**Capture feedback** (`/stark:learn`) when:
- Command produced unexpected results
- Noticed inefficiencies or gaps
- Had to work around limitations
- Command helped solve a tricky problem
- See patterns across multiple executions

**Review history** (`/stark:learn-history`) when:
- Accumulated 3+ feedback entries
- Want to see patterns before proposing improvements
- Debugging unexpected command behavior

**Generate proposals** (`/stark:learn-propose`) when:
- Have 5+ feedback entries showing patterns
- Command effectiveness has changed
- Ready to systematically improve a command

**Apply improvements** (`/stark:learn-apply`) when:
- Proposals are clearly beneficial
- Reviewed proposals align with STARK's philosophy
- Want to test iterative command evolution

---

## Best Practices

1. **Front-load the analysis** - Invest time in situation analysis and target definition. Time spent understanding the problem prevents wasted execution on wrong solutions.

2. **Write specific acceptance criteria** - Avoid vague criteria like "works well". Define measurable outcomes: "API responds in <200ms for 95th percentile".

3. **Break tasks into testable units** - Each task should be independently verifiable. Aim for tasks that take 30 minutes to 2 hours each.

4. **Preserve full context** - Don't delete solution directories or edit generated files manually. Let STARK maintain complete history.

5. **Use deliberation strategically** - Match deliberation depth to task complexity and risk. Over-deliberating wastes time; under-deliberating causes failures.

6. **Verify before proceeding** - Never mark a task complete until `/stark:verify` passes. Failures compound.

7. **Capture learnings immediately** - Run `/stark:learn` while execution is fresh. Waiting causes you to forget context.

8. **Review solutions periodically** - Revisit completed solutions to reinforce patterns and inform future work.

---

## Common Patterns

### Pattern 1: Iterative Refinement

When your initial approach isn't working and you need to pivot:

```bash
# Review current state
/stark:status {solution-id}

# Deliberate on alternative approaches
/stark:think {solution-id} "Task name"

# Update task execution plan
/stark:task {solution-id} "Task name"

# Execute revised approach
/stark:run {solution-id} "Task name"

# Verify new approach
/stark:verify {solution-id} "Task name"
```

STARK tracks deliberation iterations, so pivoting preserves your thinking history.

### Pattern 2: Batch Processing

When you have multiple similar tasks:

```bash
# Create task reports for all tasks upfront
/stark:task {solution-id} "Task 1"
/stark:task {solution-id} "Task 2"
/stark:task {solution-id} "Task 3"

# Execute each task through the full cycle
/stark:ready {solution-id} "Task 1"
/stark:run {solution-id} "Task 1"
/stark:verify {solution-id} "Task 1"

# Continue for remaining tasks...

# Finalize after all verified
/stark:complete {solution-id}
```

Creating all task reports upfront helps identify dependencies before execution.

### Pattern 3: Exploration Mode

When you don't fully understand the problem space:

```bash
# Create solution with initial understanding
/stark:new "Exploratory problem description"

# Plan with explicit unknowns documented
/stark:plan {solution-id}

# Create reconnaissance task
/stark:task {solution-id} "Investigate [unknown aspect]"

# Execute investigation
/stark:run {solution-id} "Investigate [unknown aspect]"

# Update plan based on findings, then continue
/stark:task {solution-id} "Implement [now-understood solution]"
```

Use early tasks to reduce uncertainty before committing to an approach.

### Pattern 4: Quality Gate Enforcement

For production changes requiring systematic quality checks:

```bash
# Execute all tasks...

# Run comprehensive cleanup analysis
/stark:cleanup {solution-id}

# Address issues found, re-run until satisfactory
/stark:cleanup {solution-id}

# Only finalize after cleanup passes
/stark:complete {solution-id}
```

`/stark:cleanup` runs multiple specialized subagents for code quality, configuration validity, and cross-file consistency.
