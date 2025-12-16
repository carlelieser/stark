<p align="center">
  <img src="https://carlelieser.github.io/stark/favicon.svg?v=2" alt="STARK" width="80" height="80">
</p>

<h1 align="center">STARK</h1>
<p align="center"><strong>Structured Thinking And Reasoning Kit</strong></p>
<p align="center">A systematic problem-solving framework for Claude Code.</p>

<p align="center">
  <a href="https://github.com/carlelieser/stark"><img src="https://img.shields.io/badge/Claude%20Code-Plugin-blue.svg" alt="Claude Code Plugin"></a>
  <a href="#license"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
  <a href="https://github.com/carlelieser/stark/releases"><img src="https://img.shields.io/github/v/release/carlelieser/stark" alt="Release"></a>
</p>

<p align="center">
  <a href="https://carlelieser.github.io/stark/"><strong>Full Documentation</strong></a>
</p>

---

## Quick Start

### Installation

```bash
# Add from marketplace and install
/plugin marketplace add carlelieser/stark
/plugin install stark@carlelieser

# One-time setup
/stark:setup
```

### Your First Solution

**Autonomous mode** (hands-off):
```bash
/stark:auto "Create a data validation utility with error handling"
```

**Manual mode** (step-by-step):
```bash
/stark:new "Your problem description"     # Creates solution, returns ID
/stark:plan <solution-id>                 # Plan your approach
/stark:run <solution-id> "Task name"      # Execute tasks
/stark:complete <solution-id>             # Finalize
```

Both approaches follow: **analyze -> plan -> execute -> verify -> complete**

All work is saved in `.stark/solutions/<solution-id>/` and fully resumable.

---

## What is STARK?

STARK is a five-phase problem-solving framework:

| Phase | Purpose |
|-------|---------|
| **S**ituation | Understand the problem deeply |
| **T**arget | Define what success looks like |
| **A**pproach | Design the solution path |
| **R**esources | Identify what's needed |
| **K**nowledge | Capture learnings |

### Performance

STARK commands are optimized for efficiency:
- **41% faster** token usage on average across core commands
- **2,674 tokens saved** compared to baseline
- **Zero quality degradation** - maintains analytical depth
- Parallel operations for faster execution

### When to Use STARK

**Good fit:**
- Complex, multi-step problems
- Unclear or evolving requirements
- Cross-cutting changes needing coordination
- Learning-intensive work

**Skip STARK for:**
- Simple, well-defined tasks where you know exactly what to do

---

## Commands

### Core Workflow

| Command | Description |
|---------|-------------|
| `/stark:new` | Create solution from problem statement |
| `/stark:plan` | Document solution plan with tasks |
| `/stark:task` | Create detailed task execution report |
| `/stark:think` | Deliberate on approach before execution |
| `/stark:ready` | Validate task prerequisites |
| `/stark:run` | Execute task with change tracking |
| `/stark:verify` | Verify completion against criteria |
| `/stark:complete` | Finalize solution and capture learnings |

### Autonomous & Management

| Command | Description |
|---------|-------------|
| `/stark:auto` | End-to-end autonomous workflow |
| `/stark:cleanup` | Multi-agent quality analysis |
| `/stark:status` | Show solution progress |
| `/stark:list` | List all solutions |
| `/stark:setup` | Initialize framework (one-time) |

### Learning System

| Command | Description |
|---------|-------------|
| `/stark:learn` | Capture feedback on command execution |
| `/stark:learn-history` | View feedback history |
| `/stark:learn-propose` | Generate improvement proposals |
| `/stark:learn-apply` | Apply approved improvements |

See [docs/WORKFLOW.md](docs/WORKFLOW.md) for detailed usage patterns.
See [docs/LEARNING.md](docs/LEARNING.md) for learning system details.

---

## Example: Adding API Authentication

```bash
# Create solution
/stark:new "Add JWT authentication to REST API"
# Returns: azure-auth-7k2

# Plan the approach
/stark:plan azure-auth-7k2

# For each task:
/stark:task azure-auth-7k2 "Implement token validation"
/stark:think azure-auth-7k2 "Implement token validation"   # Optional
/stark:ready azure-auth-7k2 "Implement token validation"
/stark:run azure-auth-7k2 "Implement token validation"
/stark:verify azure-auth-7k2 "Implement token validation"

# After all tasks verified:
/stark:complete azure-auth-7k2
```

**What happens:** STARK guides structured analysis before code is written. Each task goes through deliberation, readiness checking, execution with tracking, and verification against acceptance criteria.

---

## Project Structure

```
stark/
├── .claude-plugin/
│   └── commands/           # STARK slash commands
├── .stark/
│   ├── SYSTEM.md           # Complete methodology
│   └── solutions/          # Your solutions
│       └── {solution-id}/
│           ├── solution.md
│           └── tasks/
├── docs/
│   ├── WORKFLOW.md         # Detailed workflow guide
│   └── LEARNING.md         # Learning system details
└── README.md
```

---

## Troubleshooting

**"Solution not found"**
- Verify the solution ID with `/stark:list`
- IDs are case-sensitive (e.g., `azure-auth-7k2`)

**Task verification fails**
- Check acceptance criteria in `REPORT.md`
- Review execution log in `EXECUTION.md`
- Use `/stark:think` to reconsider approach

**Commands feel ineffective**
- Use `/stark:learn` to capture feedback
- After 5+ entries, run `/stark:learn-propose`

**Want to start over on a task**
- Re-run `/stark:task` to regenerate the execution plan

---

## Contributing

1. Edit commands in `.claude-plugin/commands/`
2. Test locally in Claude Code
3. Fork, branch, and submit PR

See [CREDITS.md](CREDITS.md) for acknowledgments and further reading.

---

## License

MIT License - See [LICENSE](LICENSE) for details.

**Created by [Carlos](https://github.com/carlelieser)** | [Support on Patreon](https://patreon.com/carlelieserdev)

---

*STARK is a framework for systematic problem-solving that grows smarter with every use.*
