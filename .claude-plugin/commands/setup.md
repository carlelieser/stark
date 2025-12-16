---
model: claude-sonnet-4-5-20250929
description: Initialize the STARK problem-solving framework
---

## Purpose

One-time setup to create the `.stark/` directory and `SYSTEM.md` methodology document.

## Task

1. Create `.stark/` directory if it doesn't exist
2. Check if `SYSTEM.md` already exists
   - If yes: Report "STARK framework already initialized"
   - If no: Create `SYSTEM.md` with the complete framework

## SYSTEM.md Content

Generate a comprehensive problem-solving methodology document containing:

1. **Core Philosophy** - Three axioms and mental models (First Principles, Inversion, Occam's Razor, Map vs Territory, Second-Order Effects)
2. **The STARK Framework** - Situation → Target → Approach → Resources → Knowledge with visual diagram
3. **Phase 1: Situation Analysis** - Problem statement, context mapping, root cause analysis (5 Whys, Fishbone), constraint identification
4. **Phase 2: Target Definition** - SMART-ER criteria, target hierarchy, anti-goals, minimum viable success
5. **Phase 3: Approach Design** - Solution generation (7+ approaches), evaluation matrix, pre-mortem, work breakdown
6. **Phase 4: Resource Mobilization** - Resource inventory, acquisition strategy, risk-resource mapping
7. **Phase 5: Knowledge Integration** - Learning loops, documentation protocol, post-mortem framework
8. **Cross-Cutting Principles** - Iteration, leverage, constraint focus, simplicity bias
9. **Problem Classification** - Clear, Complicated, Complex, Chaotic, Confused types
10. **Decision Frameworks** - OODA, reversible vs irreversible, expected value, 10-10-10
11. **Failure Mode Analysis** - Common patterns and recovery protocols
12. **Templates and Checklists** - Quick start and comprehensive checklists

## STARK Command Reference

After setup, you'll have access to these commands:

### Core Workflow Commands
- `/stark:new` - Create a new solution from a problem statement
- `/stark:think` - Deliberate on a task through iterative analysis
- `/stark:plan` - Document the full solution plan
- `/stark:task` - Create a task execution report
- `/stark:run` - Execute a STARK task
- `/stark:verify` - Verify task completion against acceptance criteria
- `/stark:ready` - Check if a task is ready for execution
- `/stark:complete` - Finalize a STARK solution

### Management Commands
- `/stark:status` - Show detailed status of a STARK solution
- `/stark:list` - List all STARK solutions with their status
- `/stark:auto` - Autonomous STARK workflow - solve a problem end-to-end

### Self-Healing Learning System
- `/stark:learn <command> [type]` - Capture feedback from command executions
- `/stark:learn-history <command>` - View learning history for a command
- `/stark:learn-propose <command>` - Generate improvement proposals from feedback
- `/stark:learn-apply <command>` - Apply approved improvements to commands

## Self-Healing Learning Workflow

The STARK framework includes a self-healing system that learns from command execution feedback:

**Recommended Workflow:**
1. **Execute** any STARK command (e.g., `/stark:run amber-learn-9k 3`)
2. **Provide Feedback** using `/stark:learn <command> [type]` where type is:
   - `success` - Command worked as expected
   - `failure` - Command failed or produced errors
   - `edge-case` - Encountered unexpected scenario
   - `suggestion` - Ideas for improving the command
   - `general` - General observations
3. **Review Learnings** periodically with `/stark:learn-history <command>`
4. **Generate Proposals** when you have 5+ feedback entries: `/stark:learn-propose <command>`
5. **Apply Improvements** to commands: `/stark:learn-apply <command> <proposal-id>`

**Example Learning Cycle:**
```bash
# Execute a command
/stark:run amber-learn-9k 1

# Capture what worked or didn't work
/stark:learn run success

# After multiple executions, analyze patterns
/stark:learn-propose run

# Apply approved improvements
/stark:learn-apply run proposal-001

# Test and continue learning
/stark:run next-solution 1
/stark:learn run success  # Verify improvements worked
```

## Directory Structure

The `.stark/` directory will contain:

```
.stark/
├── SYSTEM.md              # Core methodology (created by setup)
├── solutions/             # All STARK solutions
│   └── <solution-id>/
│       ├── SOLUTION.md    # Problem analysis and approach
│       ├── PLAN.md        # Detailed implementation plan
│       ├── tasks/         # Individual task reports
│       └── status.yaml    # Current status metadata
└── learning/              # Self-healing learning data
    └── <command-name>/
        ├── *.md           # Feedback entries (timestamped)
        ├── proposals/     # Generated improvement proposals
        │   ├── *-proposals.md
        │   └── *-decisions.yaml
        ├── backups/       # Command file backups before changes
        └── LATEST-PROPOSALS.md  # Most recent proposals
```

## Success Criteria

- [ ] `.stark/` directory exists
- [ ] `.stark/SYSTEM.md` created with all 12 sections
- [ ] Document is self-contained and actionable
- [ ] Learning system directories will be created automatically when needed
