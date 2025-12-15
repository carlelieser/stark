---
title: Getting Started
description: Get started with STARK in under 5 minutes - your first structured problem-solving solution
---

# Getting Started

Get started with STARK in under 5 minutes.

## Prerequisites

- Claude Code installed (any version)
- No prior STARK knowledge required

## Your First STARK Solution

One command. That's all you need.

```bash
/stark:auto "Create a data validation utility function with error handling"
```

STARK handles everything: analyzes your problem, plans the approach, executes tasks, verifies completion, and captures learnings. You watch while it works.

## Want More Control?

Use the manual workflow for step-by-step guidance:

```bash
/stark:setup                              # First time only
/stark:new "Your problem description"     # Creates solution (note the ID)
/stark:plan <solution-id>                 # Plan your approach
/stark:run <solution-id> "Task name"      # Execute tasks
/stark:complete <solution-id>             # Finalize and capture learnings
```

## What Happens Behind the Scenes

Both approaches follow STARK's core workflow: **analyze → plan → execute → verify → complete**. All decisions, plans, and outcomes are preserved in `.stark/solutions/<solution-id>/`, making your work fully resumable with a complete audit trail.

## Next Steps

- **Try it yourself:** Run the commands above with your own problem
- **Explore examples:** See [Usage Examples](/guide/examples) for real-world scenarios including autonomous mode
- **Learn the commands:** Check [Command Reference](/reference/commands) for complete documentation
- **Understand the methodology:** Read the [Complete Methodology](/reference/methodology) for the complete STARK framework
