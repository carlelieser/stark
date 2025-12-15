---
title: Command Reference
description: Complete guide to all 17 STARK commands - from setup through execution to continuous improvement
---

# Command Reference

Complete guide to all STARK commands.

STARK provides 17 slash commands that guide you through structured problem-solving. Commands are organized by workflow stage, from initial setup through execution to continuous improvement.

> **Quick Start:** Most workflows follow this pattern: `/stark:setup` (first time) → `/stark:new` → `/stark:plan` → `/stark:task` → `/stark:run` → `/stark:verify` → `/stark:complete`

---

## Getting Started

| Command | Description |
|---------|-------------|
| `/stark:setup` | Initialize the STARK framework by creating `.stark/` directory and methodology documentation (one-time setup) |

---

## Core Workflow

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

## Advanced Workflows

> **Note:** These are special orchestration commands that coordinate multiple STARK operations autonomously. Use when you want hands-off execution with built-in quality gates.

| Command | Description |
|---------|-------------|
| `/stark:auto` | Autonomous end-to-end workflow that solves a problem completely, orchestrating all STARK phases via subagents |
| `/stark:cleanup` | Multi-agent cleanup analysis that systematically reviews all changes and iterates until quality is satisfactory |

---

## Management

Utility commands for monitoring solutions and understanding current state:

| Command | Description |
|---------|-------------|
| `/stark:status` | Show detailed status of a specific solution including progress, tasks, and current phase |
| `/stark:list` | List all STARK solutions with their status, creation date, and problem summary |

---

## Learning System

STARK's self-healing commands that capture feedback and improve command prompts over time:

| Command | Description |
|---------|-------------|
| `/stark:learn` | Capture learnings from command executions to improve prompts based on what worked or didn't |
| `/stark:learn-history` | Display all feedback entries for a command with statistics and pattern analysis |
| `/stark:learn-propose` | Generate ranked improvement proposals from collected feedback for a command |
| `/stark:learn-apply` | Apply approved improvement proposals to command prompts while preserving structure |

---

**Note:** For detailed documentation on any command, see `.claude-plugin/commands/<command>.md` or use the command to see its full prompt and instructions.

For practical examples of these commands in action, see [Usage Examples](/guide/examples).
