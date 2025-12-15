# STARK - Structured Problem-Solving Framework

## Project Structure

```
stark/
├── src/                    # Development - edit commands here
├── commands/stark/         # Distribution - deployed commands
├── .claude-plugin/         # Plugin manifest
├── .stark/                 # Runtime state (solutions, learning)
└── scripts/deploy.sh       # Deploy src/ → commands/stark/
```

## Development Workflow

1. **Edit** commands in `src/`
2. **Test** locally with `/project:command-name`
3. **Deploy** when ready: `./scripts/deploy.sh`
4. **Commit** and push to publish

## Commands

| Command | Purpose |
|---------|---------|
| `/stark:new` | Create new solution |
| `/stark:think` | Iterative deliberation |
| `/stark:plan` | Document solution plan |
| `/stark:task` | Create task report |
| `/stark:run` | Execute tasks |
| `/stark:verify` | Verify completion |
| `/stark:ready` | Check task readiness |
| `/stark:complete` | Finalize solution |
| `/stark:status` | Show solution status |
| `/stark:list` | List all solutions |
| `/stark:auto` | Autonomous end-to-end |
| `/stark:learn` | Capture feedback |
| `/stark:learn-history` | View learning history |
| `/stark:learn-propose` | Generate improvements |
| `/stark:learn-apply` | Apply improvements |

## State Directories

- `.stark/solutions/` - Active and completed solutions
- `.stark/learning/` - Command improvement history
