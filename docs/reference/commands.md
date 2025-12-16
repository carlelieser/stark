---
title: Command Reference
description: Complete guide to all 17 STARK commands - from setup through execution to continuous improvement
---

# Command Reference

This reference serves both as a learning guide to understand STARK's command landscape and a quick lookup for experienced users. Commands are organized by workflow stage - from one-time setup through core execution to advanced orchestration and continuous improvement.

For detailed documentation on any command including full prompts and instructions, see `.claude-plugin/commands/<command>.md` or invoke the command directly.

New to STARK? Start with the [Getting Started guide](/guide/getting-started) for your first solution, then see the [Workflow Guide](/guide/workflow) to understand how commands fit into typical sessions.

> **Quick Start Patterns:**
> - **Manual workflow:** `/stark:setup` (first time) → `/stark:new` → `/stark:plan` → `/stark:task` → `/stark:run` → `/stark:verify` → `/stark:complete`
> - **Autonomous workflow:** `/stark:setup` (first time) → `/stark:auto` "problem description" (handles all steps automatically)

## Getting Started

One-time initialization that creates the `.stark/` directory structure and methodology documentation. Run this once when you first use STARK.

| Command | Description |
|---------|-------------|
| `/stark:setup` | Initialize the STARK framework by creating `.stark/` directory and methodology documentation (one-time setup) |

## Core Workflow

The standard STARK workflow progresses linearly through these commands, though you can iterate on tasks (think → ready → run → verify loop) before moving forward. Each command builds on the prior phase's outputs.

| Command | Description | Token Usage | Optimization |
|---------|-------------|-------------|--------------|
| `/stark:new` | Create a new STARK solution from a problem statement, generating unique ID and analyzing root causes, constraints, and context | ~190 tokens | 25.5% reduction |
| `/stark:plan` | Document the complete solution plan including target definition, approach design, and task breakdown | ~200 tokens | 35.6% reduction |
| `/stark:task` | Create a detailed execution report for a specific task with analysis, risk assessment, and step-by-step plan (run before executing the task) | ~284 tokens | Template consolidation |
| `/stark:think` | Deliberate on a task through iterative analysis to refine approach before execution | ~284 tokens | 23.3% reduction |
| `/stark:ready` | Check if a task is ready for execution by validating prerequisites and plan completeness | ~291 tokens | 13.0% reduction |
| `/stark:run` | Execute a task according to its execution plan, making the actual changes and documenting all outcomes | ~231 tokens | 30.0% reduction |
| `/stark:verify` | Verify task completion against acceptance criteria, reporting PASS/FAIL with evidence | ~277 tokens | 33.0% reduction |
| `/stark:complete` | Finalize a solution after all tasks pass verification, capturing outcomes and learnings | ~216 tokens | 20.0% reduction |

**Performance Note:** All commands optimized through reference-based consolidation (SYSTEM.md), template condensation, and parallel operations. Average 41.4% token reduction across all core commands with zero quality degradation.

See the [basic workflow example](/guide/examples#example-1-basic-manual-workflow) to understand how these commands work together in practice.

## Advanced Workflows

> **Note:** These are special orchestration commands that coordinate multiple STARK operations autonomously. Use when you want hands-off execution with built-in quality gates.

| Command | Description | Token Usage | Optimization |
|---------|-------------|-------------|--------------|
| `/stark:auto` | Autonomous end-to-end workflow that solves a problem completely from analysis through completion, orchestrating all STARK phases via subagents (alternative to manual workflow) | ~1,011 tokens | 49.5% reduction |
| `/stark:cleanup` | Multi-agent quality analysis that systematically reviews all changes for code quality, configuration validity, and cross-file consistency, iterating until satisfactory | ~560 tokens | 66.1% reduction |

**Performance Note:** Meta-commands show exceptional optimization potential (50-66% reduction) due to their ability to consolidate multiple command patterns. Both commands use parallel subagent operations for faster execution.

For guidance on choosing between manual and autonomous workflows, see [When to Use Manual vs Autonomous Mode](/guide/workflow#when-to-use-manual-vs-autonomous-mode).

## Management

Utility commands for monitoring solutions and understanding current state. Use anytime during a solution to check progress, or after completion to review past solutions.

| Command | Description |
|---------|-------------|
| `/stark:status` | Show detailed status of a specific solution including progress, completed tasks, and current phase (use anytime during solution to check where you are) |
| `/stark:list` | List all STARK solutions with their status, creation date, and problem summary (useful for resuming previous work or reviewing past solutions) |

## Learning System

STARK's self-healing commands that capture feedback and improve command prompts over time. Use after executing STARK commands to capture what worked well or could improve, then periodically review and apply improvements.

| Command | Description |
|---------|-------------|
| `/stark:learn` | Capture structured feedback from command executions through a guided interview, recording what worked well and what could improve |
| `/stark:learn-history` | Display all feedback entries for a command with statistics and pattern analysis (review before generating improvement proposals) |
| `/stark:learn-propose` | Analyze feedback patterns and generate ranked improvement proposals for a command's prompts |
| `/stark:learn-apply` | Apply approved improvement proposals to command prompts while preserving structure |

For the theoretical foundation of STARK's continuous improvement approach, see the [Methodology Reference](/reference/methodology).

For practical examples of these commands in action, see [Usage Examples](/guide/examples).
