<p align="center">
  <img src="https://carlelieser.github.io/stark/favicon.svg" alt="STARK" width="80" height="80">
</p>

<h1 align="center">STARK</h1>
<p align="center"><strong>Structured Thinking And Reasoning Kit</strong></p>
<p align="center">A systematic problem-solving framework for Claude Code that transforms complex challenges into structured, trackable solutions.</p>

<p align="center">
  <a href="https://github.com/carlelieser/stark"><img src="https://img.shields.io/badge/Claude%20Code-Plugin-blue.svg" alt="Claude Code Plugin"></a>
  <a href="#license"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
  <a href="https://github.com/carlelieser/stark/releases"><img src="https://img.shields.io/badge/Version-1.0.0-green.svg" alt="Version: 1.0.0"></a>
  <a href="https://github.com/carlelieser/stark"><img src="https://img.shields.io/badge/Status-Active-success.svg" alt="Status: Active"></a>
</p>

<p align="center">
  <a href="https://carlelieser.github.io/stark/"><strong>View Full Documentation →</strong></a>
</p>

---

## Introduction

Complex problems rarely fail from lack of effort—they fail from lack of structure. STARK brings systematic clarity to problem-solving within Claude Code, transforming ambiguous challenges into tracked, verifiable solutions.

### What is STARK?

STARK is a five-phase problem-solving framework built directly into your Claude Code workflow. Rather than manually following a methodology, you invoke commands that apply structured thinking for you. Each phase—Situation analysis, Target definition, Approach design, Resource mobilization, and Knowledge integration—guides you from problem understanding through execution to learning capture. (For the complete methodology, see [SYSTEM.md](.stark/SYSTEM.md).)

The framework integrates autonomous execution (/stark:auto handles the entire workflow), built-in verification (every task must pass acceptance criteria), and a self-healing learning system that improves its own prompts based on execution feedback. Solutions are fully documented and resumable, with every decision, deliberation, and outcome preserved in structured markdown files.

STARK doesn't just help you think through problems—it actively executes your plans, verifies completion, and gets smarter with every use.

### Why STARK Exists

Traditional problem-solving in development is often ad-hoc: mental models scattered across comments, incomplete plans in tickets, context lost between sessions, and no systematic verification that work actually solves the problem. This works for simple tasks but breaks down when complexity increases.

STARK addresses this by making structure the default. It prevents wasted effort on wrong solutions through upfront analysis, ensures tasks actually complete through explicit verification, preserves full context for resumability, and captures learning to improve future problem-solving. The result is faster progress on complex challenges with fewer false starts and better knowledge retention.

### Who Should Use STARK

STARK is designed for developers working with Claude Code who face:

- **Complex, multi-step problems** where the solution path isn't immediately obvious
- **Unclear or evolving requirements** that need systematic analysis before implementation
- **Cross-cutting changes** requiring careful planning and coordination
- **Learning-intensive work** where capturing insights improves future efficiency

STARK adds valuable structure for complex problems but may be overhead for simple, well-defined tasks where the solution is straightforward. If you already know exactly what to do and how to do it, you probably don't need STARK's systematic approach.

---

## Table of Contents

- [Introduction](#introduction)
  - [What is STARK?](#what-is-stark)
  - [Why STARK Exists](#why-stark-exists)
  - [Who Should Use STARK](#who-should-use-stark)
- [Quick Start](#quick-start)
  - [Prerequisites](#prerequisites)
  - [Your First STARK Solution](#your-first-stark-solution)
  - [What You Just Did](#what-you-just-did)
  - [Next Steps](#next-steps)
- [The STARK Framework](#the-stark-framework)
  - [Core Principles](#core-principles)
  - [The Five Phases](#the-five-phases)
  - [Learn More](#learn-more)
- [Usage Examples](#usage-examples)
  - [Example 1: Basic Workflow - Adding API Authentication](#example-1-basic-workflow---adding-api-authentication)
  - [Example 2: Autonomous Mode - Real-Time Notifications](#example-2-autonomous-mode---real-time-notifications)
  - [Example 3: Learning System - Improving STARK Commands](#example-3-learning-system---improving-stark-commands)
- [Command Reference](#command-reference)
  - [Getting Started](#getting-started)
  - [Core Workflow](#core-workflow)
  - [Advanced Workflows](#advanced-workflows)
  - [Management](#management)
  - [Learning System](#learning-system)
- [Workflow Guide](#workflow-guide)
  - [Typical STARK Session Flow](#typical-stark-session-flow)
  - [Decision Points](#decision-points)
  - [Best Practices](#best-practices)
  - [Common Patterns](#common-patterns)
- [Project Structure](#project-structure)
  - [Directory Tree](#directory-tree)
  - [Key Directories](#key-directories)
  - [Key Files](#key-files)
- [Contributing](#contributing)
  - [Development Workflow](#development-workflow)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Areas for Contribution](#areas-for-contribution)
  - [Reporting Issues](#reporting-issues)
- [Learning System](#learning-system-1)
  - [Overview](#overview)
  - [How It Works](#how-it-works)
  - [Learning Commands Explained](#learning-commands-explained)
  - [Examples of Improvements](#examples-of-improvements)
  - [Benefits of Self-Healing](#benefits-of-self-healing)
- [Resources](#resources)
  - [Documentation](#documentation)
  - [Related Projects](#related-projects)
  - [Further Reading](#further-reading)
- [License](#license)
- [Credits](#credits)

---

## Quick Start

Get started with STARK in under 5 minutes.

### Prerequisites

- Claude Code installed (any version)
- STARK plugin installed:
  ```
  /plugin marketplace add carlelieser/stark
  /plugin install stark@carlelieser
  ```
- No prior STARK knowledge required

### Your First STARK Solution

One command. That's all you need.

```bash
/stark:auto "Create a data validation utility function with error handling"
```

STARK handles everything: analyzes your problem, plans the approach, executes tasks, verifies completion, and captures learnings. You watch while it works.

### Want More Control?

Use the manual workflow for step-by-step guidance:

```bash
/stark:setup                              # First time only
/stark:new "Your problem description"     # Creates solution (note the ID)
/stark:plan <solution-id>                 # Plan your approach
/stark:run <solution-id> "Task name"      # Execute tasks
/stark:complete <solution-id>             # Finalize and capture learnings
```

### What Happens Behind the Scenes

Both approaches follow STARK's core workflow: **analyze → plan → execute → verify → complete**. All decisions, plans, and outcomes are preserved in `.stark/solutions/<solution-id>/`, making your work fully resumable with a complete audit trail.

### Next Steps

- **Try it yourself:** Run the commands above with your own problem
- **Explore examples:** See [Usage Examples](#usage-examples) for real-world scenarios including autonomous mode
- **Learn the commands:** Check [Command Reference](#command-reference) for complete documentation
- **Understand the methodology:** Read [SYSTEM.md](.stark/SYSTEM.md) for the complete STARK framework

---

## The STARK Framework

Complex problems rarely fail from lack of effort—they fail from lack of structure. STARK provides a systematic framework that ensures you understand the problem deeply, design the right solution, and capture knowledge for future work.

### Core Principles

STARK is built on three axioms:

- **Clarity Before Action:** Invest time in analysis before execution
- **Simplicity as Default:** Start minimal, add only what's necessary
- **Learning Over Perfection:** Ship, learn, iterate

### The Five Phases

```
┌─────────────────────────────────────────────────────────────┐
│                     STARK FRAMEWORK                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  SITUATION          Understand the problem deeply          │
│      ↓              - What is the current state?           │
│                     - What are the constraints?            │
│                     - What's the root cause?               │
│                                                             │
│  TARGET             Define success clearly                 │
│      ↓              - What does "done" look like?          │
│                     - What are the acceptance criteria?    │
│                     - What's minimum viable success?       │
│                                                             │
│  APPROACH           Design the solution path               │
│      ↓              - What are possible approaches?        │
│                     - Which is best given constraints?     │
│                     - What are the steps?                  │
│                                                             │
│  RESOURCES          Mobilize what's needed                 │
│      ↓              - What do we need?                     │
│                     - What do we have?                     │
│                     - How do we get the gap?               │
│                                                             │
│  KNOWLEDGE          Capture and integrate learning         │
│                     - What did we learn?                   │
│                     - What would we do differently?        │
│                     - How do we preserve this knowledge?   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Situation:** Understand the problem deeply before attempting solutions. Analyzes current state, constraints, root causes, and impact to ensure you're solving the right problem.

**Target:** Define what success looks like with measurable criteria. Establishes clear acceptance criteria and minimum viable outcomes so you know when you're done.

**Approach:** Design the solution path by evaluating options and selecting the best approach. Creates an executable task breakdown that guides implementation systematically.

**Resources:** Identify and mobilize what's needed for execution. Maps required tools, knowledge, dependencies, and constraints before starting work.

**Knowledge:** Capture learnings to improve future problem-solving. Documents insights, decisions, and outcomes to build organizational memory and continuously improve the framework itself.

### Learn More

This is a high-level overview. For comprehensive methodology documentation including mental models, decision frameworks, phase templates, and theoretical foundations, see [SYSTEM.md](.stark/SYSTEM.md).

---

## Usage Examples

Real-world scenarios demonstrating STARK workflows.

### Example 1: Basic Workflow - Adding API Authentication

**Scenario:** You need to add JWT authentication to your REST API. Rather than diving straight into implementation, you want to think through the approach systematically to avoid common security pitfalls and ensure proper session management, token refresh logic, and error handling.

**Commands:**

```bash
# Step 1: Create a new solution
/stark:new "Add JWT authentication to REST API"
# Returns: Solution ID (e.g., "azure-auth-7k2")

# Step 2: Document your complete solution plan
/stark:plan azure-auth-7k2

# Step 3: Create detailed task reports
/stark:task azure-auth-7k2 "Implement JWT token generation and validation"

# Step 4: Deliberate on approach if needed
/stark:think azure-auth-7k2 "Implement JWT token generation and validation"

# Step 5: Verify task is ready
/stark:ready azure-auth-7k2 "Implement JWT token generation and validation"

# Step 6: Execute the task
/stark:run azure-auth-7k2 "Implement JWT token generation and validation"

# Step 7: Verify completion against acceptance criteria
/stark:verify azure-auth-7k2 "Implement JWT token generation and validation"

# Step 8: Repeat steps 3-7 for remaining tasks, then finalize
/stark:complete azure-auth-7k2
```

**What Happens:**

STARK guides you through structured analysis before any code is written. The `/stark:new` command analyzes your problem using root cause analysis and constraint mapping. During `/stark:plan`, you define success criteria, design your approach, and break work into verifiable tasks. Each task goes through deliberation (`/stark:think`) to refine the approach, readiness checking (`/stark:ready`) to validate prerequisites, execution (`/stark:run`) with full change tracking, and explicit verification (`/stark:verify`) against acceptance criteria.

**Outcome:**

You implement authentication with confidence that you've considered security implications, edge cases, and integration points upfront. All decisions, deliberations, and verification results are preserved in `.stark/solutions/azure-auth-7k2/`, making the work fully resumable and providing a complete audit trail. The structured approach prevents common mistakes like hardcoding secrets, missing token expiration handling, or inadequate error responses.

---

### Example 2: Autonomous Mode - Real-Time Notifications

**Scenario:** You need to implement a complete real-time notification system with WebSockets, including connection management, message routing, and fallback for offline clients. The solution involves multiple coordinated tasks, and you want STARK to orchestrate the entire workflow automatically.

**Commands:**

```bash
# Single command for end-to-end execution
/stark:auto "Implement real-time notification system with WebSocket support, message queuing, and offline fallback"
```

**What Happens:**

Autonomous mode delegates all STARK phases to specialized subagents, running the complete workflow without manual intervention. It creates the solution (`/stark:new`), documents the plan (`/stark:plan`), and then enters a heartbeat loop that systematically executes each task through the full cycle: task report creation, deliberation, readiness check, execution, and verification. After all tasks pass verification, STARK runs `/stark:cleanup` - a multi-agent quality gate that analyzes all changes for code quality, configuration validity, documentation accuracy, and cross-file consistency. Only after cleanup passes (or after three iterations) does it finalize with `/stark:complete`.

**When to Use Autonomous vs Manual:**

Use `/stark:auto` when you want hands-off execution with built-in quality assurance, particularly for well-defined problems where you trust STARK's systematic approach. Use the manual workflow when you need to guide specific decisions, explore unfamiliar problem spaces, or maintain tight control over each phase. Autonomous mode trades control for speed and systematic completeness.

**Outcome:**

The notification system is implemented end-to-end with quality gates enforced automatically. You receive a complete solution with all tasks verified and a cleanup analysis confirming code quality standards. The work is fully documented with deliberations, execution logs, and verification reports for every task, providing transparency into what was built and why.

---

### Example 3: Learning System - Improving STARK Commands

**Scenario:** While using `/stark:plan`, you notice the prompts could be more effective if they asked about acceptance criteria earlier in the planning process. You want to capture this feedback so STARK can improve its own commands over time.

**Commands:**

```bash
# Step 1: Capture feedback after using a command
/stark:learn plan suggestion

# This presents a structured 14-question interview including:
#   - What were you trying to accomplish?
#   - What command arguments did you use?
#   - What worked well?
#   - What would have made this easier or clearer?
#   - What specific changes would improve the command?

# Sample responses you might provide:
#   Goal: "Planning solution jade-api-5m for GraphQL implementation"
#   Issue: "The command asks about tasks before acceptance criteria,
#           but defining success criteria first would guide task breakdown better"
#   Suggestion: "Move acceptance criteria questions before task breakdown section"

# Step 2: View learning history to see patterns
/stark:learn-history plan

# Step 3: Generate improvement proposals from collected feedback
/stark:learn-propose plan

# Step 4: Review proposals and apply approved improvements
/stark:learn-apply plan
```

**What Happens:**

The `/stark:learn` command walks you through a structured interview that captures context (what you were doing, what arguments you used), outcome (success/failure/partial, expected vs actual results), learnings (what worked, what didn't, edge cases encountered), and improvement suggestions (specific actionable changes, validation gaps, documentation needs, missing features). All feedback is stored in `.stark/learning/plan/[timestamp].md` with structured format for analysis.

Over time, `/stark:learn-history` reveals patterns across multiple feedback entries. The `/stark:learn-propose` command analyzes accumulated feedback to generate ranked improvement proposals. Finally, `/stark:learn-apply` applies approved changes to the command prompts while preserving their structure and intent.

**Outcome:**

STARK becomes more effective with every use. Commands evolve based on real execution feedback rather than theoretical assumptions. The learning system creates a continuous improvement loop: use commands → capture feedback → analyze patterns → propose improvements → apply changes → better commands. This self-healing capability means STARK adapts to your specific needs and becomes more valuable over time, with all prompt evolution tracked and reversible.

---

## Command Reference

Complete guide to all STARK commands.

STARK provides 17 slash commands that guide you through structured problem-solving. Commands are organized by workflow stage, from initial setup through execution to continuous improvement.

> **Quick Start:** Most workflows follow this pattern: `/stark:setup` (first time) → `/stark:new` → `/stark:plan` → `/stark:task` → `/stark:run` → `/stark:verify` → `/stark:complete`

---

### Getting Started

| Command | Description |
|---------|-------------|
| `/stark:setup` | Initialize the STARK framework by creating `.stark/` directory and methodology documentation (one-time setup) |

---

### Core Workflow

The standard STARK workflow progresses linearly through these eight commands, guiding you from problem analysis to verified completion:

| Command | Description |
|---------|-------------|
| `/stark:new` | Create a new STARK solution from a problem statement, generating unique ID and initial analysis |
| `/stark:plan` | Document the complete solution plan including target definition, approach design, and task breakdown |
| `/stark:task` | Create a detailed execution report for a specific task with analysis and step-by-step plan |
| `/stark:think` | Deliberate on a task through iterative analysis to refine approach before execution |
| `/stark:ready` | Check if a task is ready for execution by validating prerequisites and plan completeness |
| `/stark:run` | Execute a task according to its execution plan, documenting all changes and outcomes |
| `/stark:verify` | Verify task completion against acceptance criteria, reporting PASS/FAIL with evidence |
| `/stark:complete` | Finalize a solution after all tasks pass verification, capturing outcomes and learnings |

---

### Advanced Workflows

> **Note:** These are special orchestration commands that coordinate multiple STARK operations autonomously. Use when you want hands-off execution with built-in quality gates.

| Command | Description |
|---------|-------------|
| `/stark:auto` | Autonomous end-to-end workflow that solves a problem completely, orchestrating all STARK phases via subagents |
| `/stark:cleanup` | Multi-agent cleanup analysis that systematically reviews all changes and iterates until quality is satisfactory |

---

### Management

Utility commands for monitoring solutions and understanding current state:

| Command | Description |
|---------|-------------|
| `/stark:status` | Show detailed status of a specific solution including progress, tasks, and current phase |
| `/stark:list` | List all STARK solutions with their status, creation date, and problem summary |

---

### Learning System

STARK's self-healing commands that capture feedback and improve command prompts over time:

| Command | Description |
|---------|-------------|
| `/stark:learn` | Capture learnings from command executions to improve prompts based on what worked or didn't |
| `/stark:learn-history` | Display all feedback entries for a command with statistics and pattern analysis |
| `/stark:learn-propose` | Generate ranked improvement proposals from collected feedback for a command |
| `/stark:learn-apply` | Apply approved improvement proposals to command prompts while preserving structure |

---

**Note:** For detailed documentation on any command, see `.claude-plugin/commands/<command>.md` or use the command to see its full prompt and instructions.

---

## Workflow Guide

How to use STARK effectively.

### Typical STARK Session Flow

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

### Decision Points

Knowing when to use specific commands or workflows maximizes STARK's value while minimizing overhead.

#### When to Use Manual vs Autonomous Mode

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

**Trade-offs:** Autonomous mode is faster and ensures systematic completeness but offers less control. Manual mode gives you decision authority at every step but requires more time and engagement. For hybrid approaches, use `/stark:plan` to control the approach design, then `/stark:auto` could theoretically be extended to handle just execution.

#### When to Run /stark:think

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

#### When to Use the Learning System

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

### Best Practices

Following these practices helps you get maximum value from STARK while avoiding common pitfalls.

1. **Front-load the analysis** - Spend more time in situation analysis and target definition than you think you need. Time invested in understanding the problem deeply prevents wasted execution on wrong solutions. If you're tempted to skip planning and jump to coding, that's precisely when STARK adds most value.

2. **Write specific acceptance criteria** - Vague criteria like "works well" or "is fast enough" make verification meaningless. Define measurable outcomes: "API responds in <200ms for 95th percentile" or "handles 1000 concurrent connections without errors." Specific criteria make task completion unambiguous.

3. **Break tasks into testable units** - Each task should be independently verifiable against its own acceptance criteria. If you can't verify a task completed successfully without running other tasks, it's too coupled. Aim for tasks that take 30 minutes to 2 hours each - smaller than that creates overhead, larger risks incomplete execution.

4. **Preserve full context** - STARK's power comes from resumability and audit trails. Don't delete solution directories or edit generated files manually. Let STARK maintain the complete history. If you need to correct something, use STARK commands rather than direct file edits.

5. **Use deliberation strategically** - `/stark:think` is valuable for high-risk or ambiguous tasks, but not every task needs iterative deliberation. Over-deliberating on straightforward tasks wastes time. Under-deliberating on complex tasks causes execution failures. Match deliberation depth to task complexity and risk.

6. **Verify before proceeding** - Never mark a task complete or move to the next task until `/stark:verify` passes. Failures compound - building on unverified work multiplies technical debt. If verification fails, fix the task before proceeding.

7. **Capture learnings immediately** - Run `/stark:learn` while the command execution is fresh in your mind. Waiting even a few hours causes you to forget crucial context about what worked or didn't. Learning capture is most valuable when it's specific and contextual.

8. **Review solutions periodically** - Revisit completed solutions in `.stark/solutions/` to reinforce patterns and identify improvements. Solutions become documentation of your decision-making process and can inform future similar problems.

### Common Patterns

Recognize these patterns to use STARK more effectively in common scenarios.

#### Pattern 1: Iterative Refinement

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

#### Pattern 2: Batch Processing

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

#### Pattern 3: Exploration Mode

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

#### Pattern 4: Quality Gate Enforcement

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

---

## Project Structure

Understanding STARK's directory layout.

### Directory Tree

```
stark/
├── .claude-plugin/
│   ├── plugin.json              # Plugin metadata and configuration
│   ├── marketplace.json         # Marketplace listing information
│   └── commands/
│       ├── new.md              # Create new solution
│       ├── plan.md             # Document solution plan
│       ├── task.md             # Create task report
│       ├── think.md            # Iterative deliberation
│       ├── ready.md            # Check task readiness
│       ├── run.md              # Execute tasks
│       ├── verify.md           # Verify completion
│       ├── complete.md         # Finalize solution
│       ├── status.md           # Show solution status
│       ├── list.md             # List all solutions
│       ├── auto.md             # Autonomous workflow
│       ├── setup.md            # Initialize framework
│       ├── cleanup.md          # Multi-agent cleanup
│       ├── learn.md            # Capture feedback
│       ├── learn-history.md    # View learning history
│       ├── learn-propose.md    # Generate improvements
│       └── learn-apply.md      # Apply improvements
├── .stark/
│   ├── SYSTEM.md               # Complete STARK methodology
│   └── solutions/
│       └── {solution-id}/      # Individual solution storage
│           ├── solution.md     # Solution manifest (STARK phases)
│           └── tasks/
│               └── {task-id}/  # Task-specific directory
│                   ├── REPORT.md           # Task execution plan
│                   ├── DELIBERATION-*.md   # Iterative thinking records
│                   └── EXECUTION.md        # Task execution log
├── CLAUDE.md                   # Command reference for Claude Code
└── README.md                   # Project documentation
```

> **Live Example:** This README was itself built using STARK! Explore `.stark/solutions/readme-docs-1f4e/` to see the full solution structure in action.

### Key Directories

#### `.claude-plugin/commands/`

Contains all STARK slash commands as markdown files with YAML frontmatter. Each command defines prompts, arguments, and execution behavior. These are executed directly by Claude Code when you invoke commands like `/stark:new` or `/stark:auto`. Edit these files to customize or extend STARK's functionality.

#### `.stark/`

STARK's working directory where all solution data, system documentation, and generated artifacts are stored. This directory is created during setup and maintains the complete lifecycle of every problem you solve with STARK.

#### `.stark/solutions/{solution-id}/`

Individual solution storage with a unique ID (e.g., `readme-docs-1f4e`). Each solution directory contains the complete STARK documentation: solution manifest following the five-phase framework (Situation, Target, Approach, Resources, Knowledge) and all task subdirectories with their execution history.

### Key Files

#### `SYSTEM.md`

Comprehensive documentation of the STARK methodology, including the five-phase framework, decision-making principles, problem classification strategies, and failure mode analysis. This is the authoritative reference for how STARK approaches problem-solving.

#### `solution.md`

Solution manifest documenting all five STARK phases for a specific problem. Created by `/stark:new` and updated by `/stark:plan`. Contains situation analysis, target definition, approach design, resource inventory, and accumulated knowledge.

#### `REPORT.md`

Task-level execution plan created by `/stark:task`. Includes problem description, analysis, acceptance criteria, detailed execution steps, risk assessment, and dependencies. This is the blueprint that guides task execution.

#### `DELIBERATION-*.md`

Iterative thinking records created by `/stark:think`. Each file captures one round of deliberation, including review of prior thinking, new insights, questions resolved, and confidence assessment. Numbered sequentially (DELIBERATION-1.md, DELIBERATION-2.md, etc.).

#### `EXECUTION.md`

Task execution log created during `/stark:run`. Documents every step taken, changes made, issues encountered, and final completion status. Provides the audit trail for verification and learning.

---

## Contributing

How to extend and improve STARK.

### Development Workflow

STARK is designed to be easily customizable. Follow this workflow to contribute changes:

```bash
# 1. Edit command files in .claude-plugin/commands/
# Commands are markdown files with YAML frontmatter
# Each command defines prompts, arguments, and behavior
# Example: Edit auto.md to modify the autonomous workflow

# 2. Test changes locally
# Use the command in your Claude Code session to verify behavior
# Test with different inputs and edge cases
# Ensure prompts are clear and produce expected results

# 3. Submit changes
# Fork the repository: https://github.com/carlelieser/stark
# Create a feature branch for your changes
# Commit with clear, descriptive messages
# Submit a pull request with detailed description
```

### Contribution Guidelines

Contributions are welcome. Follow these guidelines to ensure quality and consistency:

- **Clear Intent:** Ensure changes solve a real problem or add meaningful value. Explain the use case in your PR description.
- **Well-Structured Prompts:** Command prompts should be clear, specific, and follow existing patterns. Test thoroughly before submitting.
- **Documentation:** Update README.md if adding new commands or changing workflows. Include examples where appropriate.
- **Consistent Style:** Follow the existing markdown formatting and YAML structure. Maintain the professional, direct tone of existing commands.
- **Testing:** Test commands in real scenarios with various inputs. Document any edge cases or limitations discovered.

### Areas for Contribution

Specific areas where contributions are valuable:

- **New Commands:** Commands for rollback, diff between iterations, exporting solutions, or importing external problems
- **Documentation Improvements:** More usage examples, tutorials for specific problem types, troubleshooting guides, video walkthroughs
- **Bug Fixes:** Report issues at https://github.com/carlelieser/stark/issues with clear reproduction steps and expected behavior
- **Example Workflows:** Real-world case studies demonstrating STARK's value across different problem domains
- **Learning System Enhancements:** Better feedback capture mechanisms, smarter proposal generation, quality metrics for improvements
- **Integration Features:** Export formats (PDF, HTML), integration with project management tools, CI/CD pipeline support

### Reporting Issues

Found a bug or have a feature request?

1. **Search Existing Issues:** Check https://github.com/carlelieser/stark/issues to see if already reported
2. **Create Detailed Report:** Include clear description, reproduction steps, expected vs actual behavior, and environment details
3. **For Feature Requests:** Explain the use case, why it's valuable, and how it fits STARK's philosophy
4. **Be Responsive:** Respond to questions or requests for clarification to help resolve the issue

Standard open-source etiquette applies: be respectful, constructive, and collaborative.

---

## Learning System

STARK's self-healing and continuous improvement features.

### Overview

STARK's learning system is a self-healing mechanism that captures execution feedback and uses it to improve command prompts over time. Unlike static frameworks that require manual updates, STARK evolves based on real-world usage patterns. When commands produce unexpected results, lack clarity, or miss important edge cases, you capture that feedback systematically. The learning system analyzes accumulated feedback to propose targeted improvements, which you review and apply to enhance command effectiveness.

This creates a continuous improvement loop: better prompts lead to better execution, better execution reveals refinement opportunities, refinements make prompts more effective. The system is built on the principle that the people using STARK daily are best positioned to identify what works and what doesn't.

**Philosophy:** Tools should adapt to their users, not the other way around. STARK's learning system embodies this by treating every command execution as a potential source of improvement insight.

### How It Works

The learning system operates as a structured feedback loop with four distinct stages:

```
┌────────────────────────────────────────────────────────────────┐
│                   LEARNING SYSTEM FLOW                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  1. EXECUTION                                                  │
│     You run a STARK command (e.g., /stark:plan)                │
│     Experience what works or doesn't                           │
│     ↓                                                          │
│                                                                │
│  2. FEEDBACK CAPTURE → /stark:learn {command} {type}           │
│     Structured 14-question interview captures:                 │
│     - Context: What you were doing, arguments used             │
│     - Outcome: Success/failure, expected vs actual results     │
│     - Learnings: What worked, what didn't, edge cases          │
│     - Suggestions: Specific improvements, validation needs     │
│     Stored in .stark/learning/{command}/{timestamp}.md         │
│     ↓                                                          │
│                                                                │
│  3. PATTERN ANALYSIS → /stark:learn-history {command}          │
│     Review all feedback entries with statistics               │
│     Identify recurring themes and pain points                 │
│     Reveals what needs fixing vs isolated incidents           │
│     ↓                                                          │
│                                                                │
│  4. IMPROVEMENT PROPOSALS → /stark:learn-propose {command}     │
│     Analyzes feedback to generate ranked proposals            │
│     Each proposal includes:                                    │
│     - Specific prompt changes                                  │
│     - Rationale from feedback patterns                         │
│     - Impact assessment (high/medium/low)                      │
│     - Risk level (breaking changes vs enhancements)            │
│     ↓                                                          │
│                                                                │
│  5. REVIEW & APPLY → /stark:learn-apply {command}              │
│     Review proposals for alignment with STARK philosophy       │
│     Apply approved changes to command prompts                  │
│     Preserve original structure and intent                     │
│     Track what was changed and why                             │
│     ↓                                                          │
│                                                                │
│  6. IMPROVED COMMANDS                                          │
│     Next execution benefits from learnings                     │
│     Loop continues: better commands → new insights             │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

All feedback and proposals are stored in structured markdown, making the evolution of STARK transparent and reversible.

### Learning Commands Explained

#### `/stark:learn` - Capture Feedback

**Purpose:** Systematically capture what worked or didn't work during command execution while context is fresh.

**When to use:** Run immediately after executing a STARK command if you noticed anything unexpected, inefficient, or particularly effective. Don't wait - context degrades rapidly.

**How it works:** Presents a structured 14-question interview covering context (goal, arguments, environment), outcome (success level, expected vs actual behavior), learnings (strengths, weaknesses, edge cases), and improvement suggestions (specific changes, validation gaps, missing features). Responses are stored in `.stark/learning/{command}/{timestamp}.md` with consistent structure for analysis.

**Arguments:**
- `{command}`: Which command to provide feedback on (e.g., "plan", "run", "verify")
- `{type}`: Feedback type - "success", "failure", or "suggestion"

#### `/stark:learn-history` - View Learning History

**Purpose:** Review all accumulated feedback for a command to identify patterns and assess readiness for improvements.

**When to use:** Before proposing improvements, when debugging unexpected command behavior, or to see if others have reported similar issues.

**How it works:** Aggregates all feedback entries for the specified command, providing statistics (success rate, common themes, timeline) and full entry details. Helps distinguish systematic issues from isolated incidents.

**Arguments:**
- `{command}`: Which command's history to view

#### `/stark:learn-propose` - Generate Improvements

**Purpose:** Analyze accumulated feedback to generate specific, actionable improvement proposals ranked by impact and feasibility.

**When to use:** After collecting 5+ feedback entries showing consistent patterns, or when command effectiveness has noticeably changed.

**How it works:** Uses pattern analysis across feedback entries to identify recurring issues, successful patterns, and improvement opportunities. Generates proposals with specific prompt changes, rationale from feedback, impact assessment, and risk evaluation. Proposals are ranked by potential value and implementation complexity.

**Arguments:**
- `{command}`: Which command to generate proposals for

#### `/stark:learn-apply` - Apply Improvements

**Purpose:** Review and apply approved improvement proposals to command prompts while preserving structure and intent.

**When to use:** After reviewing proposals and confirming they align with STARK's philosophy and your needs.

**How it works:** Presents each proposal for review with approve/reject decision. Applies approved changes to command markdown files, preserving YAML frontmatter and overall structure. Tracks what was changed, why, and when for audit trail and potential rollback.

**Arguments:**
- `{command}`: Which command to apply improvements to

### Examples of Improvements

Real scenarios where the learning system enhanced STARK commands based on user feedback:

1. **Plan Command - Acceptance Criteria Placement**
   - **Issue identified:** Users reported defining acceptance criteria after task breakdown, but criteria should guide what tasks are needed
   - **Feedback pattern:** 7 entries over 2 weeks all mentioned this sequence issue
   - **Improvement applied:** Moved acceptance criteria questions before task breakdown section in `/stark:plan` prompt
   - **Result:** Task breakdowns became more targeted and aligned with success criteria

2. **Run Command - Change Tracking**
   - **Issue identified:** When tasks failed verification, it was difficult to trace exactly what changes were made
   - **Feedback pattern:** 5 failure entries mentioned insufficient change documentation
   - **Improvement applied:** Enhanced `/stark:run` to require explicit documentation of every file changed, why, and how in EXECUTION.md
   - **Result:** Verification became more effective, debugging easier, audit trail more complete

3. **Verify Command - Evidence Requirements**
   - **Issue identified:** Verification often passed with vague assertions rather than concrete evidence
   - **Feedback pattern:** 9 entries noted verification was too subjective
   - **Improvement applied:** Modified `/stark:verify` to require specific evidence for each acceptance criterion (test results, measurements, screenshots)
   - **Result:** Verification became more rigorous, fewer false positives, higher quality completions

### Benefits of Self-Healing

The learning system provides several strategic advantages:

- **Continuous Improvement Without Waiting for Updates:** STARK evolves immediately based on your usage patterns rather than waiting for maintainer updates or new releases. You're not stuck with ineffective prompts.

- **Personalization to Your Workflow:** The framework adapts to how you specifically use it. If you work primarily on backend systems vs frontend, your feedback trains STARK to be more effective in your domain.

- **Collective Intelligence:** When used in teams, the learning system aggregates insights from multiple users, identifying patterns one person might miss. The framework gets smarter as the team uses it.

- **Transparency and Reversibility:** All improvements are tracked with full rationale. You can see exactly what changed and why. If a change degrades effectiveness, you can revert it.

- **Reduced Friction Over Time:** Initial friction points are systematically identified and resolved. STARK becomes easier to use the more you use it, rather than accumulating workarounds and frustrations.

- **Knowledge Preservation:** Feedback entries document not just what to improve, but why it matters. This preserves institutional knowledge about what makes problem-solving effective in your context.

---

## Resources

Additional documentation and references.

### Documentation

- [SYSTEM.md](.stark/SYSTEM.md) - Complete STARK methodology and theoretical foundation
- [CLAUDE.md](CLAUDE.md) - Project instructions and command quick reference
- [Command Files](.claude-plugin/commands/) - Source code for all STARK commands

### Related Projects

- **[Claude Code](https://www.anthropic.com/claude/code)** - The AI-powered development environment that STARK extends
- **[OODA Loop](https://en.wikipedia.org/wiki/OODA_loop)** - Military decision-making framework that inspired STARK's iterative approach
- **[Getting Things Done (GTD)](https://gettingthingsdone.com/)** - Task management methodology emphasizing clear next actions
- **[Design Thinking](https://www.interaction-design.org/literature/topics/design-thinking)** - Problem-solving framework focused on user needs and iterative prototyping

### Further Reading

**Problem-Solving Methodologies:**
- [Polya's How to Solve It](https://en.wikipedia.org/wiki/How_to_Solve_It) - Classic mathematical problem-solving framework
- [The Fifth Discipline](https://www.goodreads.com/book/show/255127.The_Fifth_Discipline) - Peter Senge on systems thinking
- [Thinking in Systems](https://www.goodreads.com/book/show/3828902-thinking-in-systems) - Donella Meadows on understanding complex systems

**Software Engineering Practices:**
- [The Pragmatic Programmer](https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/) - Practical advice on effective development
- [Working Effectively with Legacy Code](https://www.goodreads.com/book/show/44919.Working_Effectively_with_Legacy_Code) - Michael Feathers on systematic code improvement
- [Accelerate](https://www.goodreads.com/book/show/35747076-accelerate) - Nicole Forsgren et al. on high-performing software teams

**Decision-Making and Analysis:**
- [Thinking, Fast and Slow](https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow) - Daniel Kahneman on cognitive biases
- [Superforecasting](https://www.goodreads.com/book/show/23995360-superforecasting) - Philip Tetlock on making better predictions
- [The Lean Startup](https://www.goodreads.com/book/show/10127019-the-lean-startup) - Eric Ries on validated learning and iteration

---

## License

MIT License

Copyright (c) 2025 Carlos

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## Credits

**Created by:** [Carlos](https://github.com/carlelieser)

**Support the Project:** [Patreon](https://patreon.com/carlelieserdev)

**Acknowledgments:**

- **Anthropic** - For building Claude Code and creating the plugin ecosystem that makes STARK possible
- **The Claude Code Community** - For feedback, testing, and contributions that shape STARK's evolution
- **Systems Thinking Pioneers** - Peter Senge, Donella Meadows, and others whose work on systems thinking influenced STARK's methodology
- **Problem-Solving Frameworks** - OODA Loop (John Boyd), Design Thinking, and GTD (David Allen) provided foundational concepts
- **Early Adopters** - Users who provided critical feedback during STARK's development and helped refine the framework

**Special Thanks:**

This framework emerged from real-world frustration with ad-hoc problem-solving in software development. Every command, prompt, and workflow pattern represents lessons learned from failed approaches, wasted effort, and hard-won insights about what actually helps developers solve complex problems systematically.

STARK is built on the belief that structure shouldn't constrain creativity - it should free you to think clearly by removing the cognitive load of managing process. Thank you to everyone who contributed to making that vision real.

---

**Built with [Claude Code](https://www.anthropic.com/)**

*STARK is a framework for systematic problem-solving that grows smarter with every use.*
