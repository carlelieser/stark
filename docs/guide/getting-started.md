---
title: Getting Started
description: Get started with STARK in under 5 minutes - your first structured problem-solving solution
---

# Getting Started

Ready to experience structured problem-solving? This guide will have you running your first STARK solution in under 5 minutes. No methodology knowledge required - just describe your problem and let STARK guide you through a systematic solution.

## Prerequisites

- **Claude Code installed** - [Get Claude Code](https://claude.ai/code) if you haven't already
- **STARK plugin installed** - Run these commands in Claude Code:
  ```
  /plugin marketplace add carlelieser/stark
  /plugin install stark@carlelieser
  ```
- **No prior STARK knowledge required** - this guide assumes you're brand new to structured problem-solving frameworks

Let's get started with the simplest possible approach.

## Your First STARK Solution

One command. That's all you need.

```bash
/stark:auto "Create a data validation utility function with error handling"
```

STARK handles everything: analyzes your problem, plans the approach, executes tasks, verifies completion, and captures learnings. Watch as it works through each phase automatically, building a complete solution with full documentation of every decision made.

## Want More Control?

STARK handled everything automatically above. Here's what happened internally - and how you can control each step when you need to:

```bash
/stark:setup                              # First time only - initializes STARK system
/stark:new "Your problem description"     # Creates solution analysis (note the ID)
/stark:plan <solution-id>                 # Develop detailed execution plan
/stark:run <solution-id> "Task name"      # Execute specific tasks one at a time
/stark:complete <solution-id>             # Finalize solution and capture learnings
```

This manual approach gives you control over timing, lets you review plans before execution, and allows you to tackle complex problems that benefit from deliberate phase-by-phase work.

## What Happens Behind the Scenes

Whether you use autonomous or manual mode, STARK follows the same systematic approach: **analyze → plan → execute → verify → complete**.

Every solution creates a complete record in `.stark/solutions/<solution-id>/`:
- Your problem analysis and solution plan
- Task execution reports with detailed steps
- Deliberation notes capturing key decisions
- Verification results confirming completion

This makes your work fully resumable and creates a learning artifact you can review and improve upon. Need to pause? Come back anytime - STARK knows exactly where you left off.

## Performance Expectations

STARK commands are optimized for speed and efficiency:
- Commands execute **41% faster** than baseline through token optimization
- Parallel operations for file reading and independent validations
- Zero quality degradation - maintains full analytical depth
- Efficient workflows save time while preserving thoroughness

You'll notice STARK works quickly without sacrificing the depth of analysis that makes structured problem-solving valuable.

## Next Steps

You now know how to run STARK. Here's how to go deeper:

**Ready to solve your own problems?**
Run `/stark:auto` with any development challenge you're facing - from architecting APIs to refactoring legacy code.

**Want to see more examples first?**
Check out [Usage Examples](/guide/examples) for real-world scenarios showing both autonomous and manual workflows.

**Curious how STARK's methodology works?**
Read the [Framework Overview](/guide/framework) to understand the five-phase approach and when to use each command.

**Need the complete command reference?**
Browse [Command Reference](/reference/commands) for all commands, parameters, and advanced usage patterns.
