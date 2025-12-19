# STARK - Structured Problem-Solving Framework

## Development Workflow

1. Edit commands in `.claude-plugin/commands/`
2. Commit and push to publish

## Commands

| Command | Purpose |
|---------|---------|
| `/stark:new` | Create new solution |
| `/stark:plan` | Document solution plan |
| `/stark:task` | Create task report |
| `/stark:think` | Iterative deliberation |
| `/stark:ready` | Check task readiness |
| `/stark:run` | Execute tasks |
| `/stark:verify` | Verify completion |
| `/stark:assess` | Fresh expert evaluation of current state vs original problem |
| `/stark:complete` | Finalize solution |
| `/stark:status` | Show solution status |
| `/stark:list` | List all solutions |
| `/stark:auto` | Autonomous end-to-end (plan→act→assess→repeat loop) |
| `/stark:setup` | Initial setup |
| `/stark:cleanup` | Multi-agent cleanup analysis |
| `/stark:learn` | Capture feedback |
| `/stark:learn-history` | View learning history |
| `/stark:learn-propose` | Generate improvements |
| `/stark:learn-apply` | Apply improvements |

## Documentation

- **[Command Model Reference](.stark/solutions/model-assignment-3k9/MODEL_REFERENCE.md)** - Quick reference showing which Claude model each command uses and why
