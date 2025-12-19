# STARK Command Model Reference

**Version:** 1.0
**Last Updated:** 2025-12-16
**Status:** Active

---

## Overview

This document provides a comprehensive reference for the Claude model assignments across all 18 STARK commands. The STARK framework uses a three-tier model assignment strategy to optimize for both performance quality and operational cost.

**Three-Tier System:**
- **Tier 3 (Complex Analysis):** Claude Opus 4.5 - Deep reasoning, creative problem-solving, quality-critical work
- **Tier 2 (Moderate Execution):** Claude Sonnet 4.5 - Structured execution, balanced reasoning, operational tasks
- **Tier 1 (Simple Display):** Claude Haiku 4.5 - Data retrieval, display, lightweight coordination

---

## Quick Reference Table

| Command | Model | Tier | Primary Purpose |
|---------|-------|------|-----------------|
| auto | Haiku 4.5 | 1 | Autonomous orchestrator (plan→act→assess→repeat loop) |
| cleanup | Haiku 4.5 | 1 | Multi-agent orchestrator (aggregates subagent analysis) |
| learn-history | Haiku 4.5 | 1 | Display learning data with basic pattern analysis |
| list | Haiku 4.5 | 1 | List all solutions with metadata display |
| status | Haiku 4.5 | 1 | Display solution status report |
| complete | Sonnet 4.5 | 2 | Finalize solution with lessons learned |
| learn-apply | Sonnet 4.5 | 2 | Apply approved proposals with validation |
| ready | Sonnet 4.5 | 2 | Evaluate task readiness against checklist |
| run | Sonnet 4.5 | 2 | Execute task steps according to plan |
| setup | Sonnet 4.5 | 2 | Initialize STARK framework with template generation |
| verify | Sonnet 4.5 | 2 | Verify acceptance criteria with evidence |
| assess | Opus 4.5 | 3 | Fresh expert evaluation of current state vs original problem |
| learn | Opus 4.5 | 3 | Capture feedback through 14 validation-heavy prompts |
| learn-propose | Opus 4.5 | 3 | Pattern detection and improvement proposal generation |
| new | Opus 4.5 | 3 | Phase 1 STARK: 5 Whys root cause analysis |
| plan | Opus 4.5 | 3 | Phases 2-4: Solution generation and SMART-ER planning |
| task | Opus 4.5 | 3 | Deep task analysis with risk assessment and planning |
| think | Opus 4.5 | 3 | Iterative deliberation with confidence assessment |

---

## Tier Breakdown

### Tier 3: Complex Analysis (Claude Opus 4.5)

**Model Identifier:** `claude-opus-4-5-20251101`

**Commands (7):**
- `/stark:new` - Phase 1 STARK problem analysis
- `/stark:plan` - Phases 2-4 solution generation and planning
- `/stark:task` - Deep task breakdown and risk assessment
- `/stark:think` - Iterative deliberation and reasoning
- `/stark:assess` - Fresh expert evaluation of current state vs original problem
- `/stark:learn` - Capture feedback with extensive validation
- `/stark:learn-propose` - Pattern detection and proposal generation

**Collective Rationale:**

These commands require the highest level of reasoning capability and output quality. They perform deep analytical work including:
- Root cause analysis (5 Whys methodology)
- Creative solution generation and evaluation
- Complex decision-making under uncertainty
- Iterative reasoning with confidence assessment
- Fresh expert assessment of current state vs original problem
- Pattern recognition across multiple feedback instances
- Quality-critical outputs that guide the entire solution process

Opus 4.5 provides the sophisticated reasoning needed for these foundational and analytical tasks where output quality directly impacts solution success.

---

### Tier 2: Moderate Execution (Claude Sonnet 4.5)

**Model Identifier:** `claude-sonnet-4-5-20250929`

**Commands (6):**
- `/stark:setup` - One-time STARK framework initialization
- `/stark:ready` - Task readiness evaluation
- `/stark:run` - Task execution following established plan
- `/stark:verify` - Acceptance criteria verification
- `/stark:complete` - Solution finalization with reflection
- `/stark:learn-apply` - Precise application of approved improvements

**Collective Rationale:**

These commands focus on structured execution and moderate-complexity operations. They require:
- Following established plans and templates
- Structured evaluation against clear criteria
- Balanced reasoning for operational tasks
- Quality output without needing maximum sophistication
- Tool use and implementation capabilities
- Reflective analysis and documentation

Sonnet 4.5 provides the optimal balance of quality, capability, and cost for these execution-focused commands. They require more than simple display but less than deep creative analysis.

---

### Tier 1: Simple Display (Claude Haiku 4.5)

**Model Identifier:** `claude-haiku-4-5-20251001`

**Commands (5):**
- `/stark:status` - Display solution status report
- `/stark:list` - List all solutions with metadata
- `/stark:auto` - Autonomous orchestration via state machine
- `/stark:cleanup` - Multi-agent orchestration and aggregation
- `/stark:learn-history` - Display learning data with basic analysis

**Collective Rationale:**

These commands prioritize speed and efficiency for operations that require minimal reasoning:
- Pure data retrieval and formatted display
- Simple state machine logic and coordination
- Orchestration where intelligence lives in delegated subagents
- Basic algorithmic processing (pattern counting, formatting)
- Operations where fast response time matters more than sophisticated reasoning

**Key Insight:** The orchestrator commands (`auto`, `cleanup`) use Haiku despite coordinating complex workflows because they delegate the actual analytical work to subagents. The orchestrator itself just manages state transitions and aggregates results, making Haiku's speed ideal for the coordination overhead.

---

## Model Specifications

### Claude Opus 4.5
- **Identifier:** `claude-opus-4-5-20251101`
- **Strengths:** Deep reasoning, creative problem-solving, complex analysis, highest output quality
- **Use Case:** Quality-critical analytical work, strategic decision-making, creative generation
- **Trade-offs:** Higher cost, slower response time
- **Commands Using:** 7/18 (39%)

### Claude Sonnet 4.5
- **Identifier:** `claude-sonnet-4-5-20250929`
- **Strengths:** Balanced reasoning, structured execution, tool use, good quality-to-cost ratio
- **Use Case:** Operational tasks, structured evaluation, implementation work
- **Trade-offs:** Balanced performance and cost
- **Commands Using:** 6/18 (33%)

### Claude Haiku 4.5
- **Identifier:** `claude-haiku-4-5-20251001`
- **Strengths:** Fast response time, near-frontier intelligence, cost-effective
- **Use Case:** Display operations, coordination overhead, data retrieval
- **Trade-offs:** Lower reasoning than Opus/Sonnet, best for straightforward tasks
- **Commands Using:** 5/18 (28%)

---

## Decision Framework

### Five Complexity Factors

Model assignments are based on analysis across five key dimensions:

1. **Cognitive Complexity** - Level of reasoning required (recall → creation)
2. **Quality Sensitivity** - Impact of output quality on downstream processes
3. **Validation Intensity** - Extent of validation and verification needed
4. **Ambiguity Level** - How well-defined vs. open-ended the task is
5. **Creative Demand** - Need for novel solutions vs. template application

### Tier Assignment Rules

- **Tier 3 (Opus):** High scores in 3+ factors, especially quality sensitivity and creative demand
- **Tier 2 (Sonnet):** Moderate scores across factors, structured but non-trivial tasks
- **Tier 1 (Haiku):** Low scores across most factors, well-defined simple operations

### Full Documentation

For complete decision methodology, scoring criteria, and detailed analysis, see:
- **Decision Matrix:** `.stark/solutions/model-assignment-3k9/tasks/task-02-document-decision-matrix/DECISION_MATRIX.md`
- **Categorization Analysis:** `.stark/solutions/model-assignment-3k9/tasks/task-01-analyze-categorize-commands/EXECUTION.md`
- **Validation Results:** `.stark/solutions/model-assignment-3k9/tasks/task-05-validate-assignments/EXECUTION.md`

---

## Validation Status

All model assignments have been validated against the decision matrix criteria:

- **Completeness:** 18/18 commands have model assignments (100%)
- **Correctness:** All model identifiers verified as valid Claude API names (100%)
- **Consistency:** All assignments match documented tier categorization (100%)
- **Validation Date:** 2025-12-16

See Task 5 execution for detailed validation report.

---

## Maintenance

### Updating Model Assignments

When updating a command's model assignment:

1. **Analyze Requirement Change:** Has the command's complexity profile changed?
2. **Re-evaluate Against Five Factors:** Score the command using the decision framework
3. **Update Command File:** Modify the `model:` field in YAML frontmatter
4. **Update This Reference:** Keep this guide synchronized
5. **Document Rationale:** Note why the change was made
6. **Validate:** Test the command with the new model

### Version History

- **v1.0 (2025-12-16):** Initial release based on comprehensive analysis of all 17 commands

### Future Enhancements

Planned improvements to this reference guide:
- Performance metrics from real-world usage
- Actual vs. expected cost analysis
- Usage patterns and frequency data
- Recommendations for tier adjustments based on empirical data
- A/B test results for contentious categorizations

---

## Location and Accessibility

**Current Location:** `.stark/solutions/model-assignment-3k9/MODEL_REFERENCE.md`

This guide is currently stored in the solution directory. For permanent documentation after solution completion, consider relocating to:
- `.claude-plugin/docs/MODEL_REFERENCE.md`
- `docs/model-assignments.md`

**Linked From:** This reference should be accessible via CLAUDE.md for easy discovery.

---

## Quick Lookup by Use Case

**Need deep analytical reasoning?** → Use Opus 4.5 commands (new, plan, task, think, assess, learn, learn-propose)

**Need structured execution?** → Use Sonnet 4.5 commands (setup, ready, run, verify, complete, learn-apply)

**Need fast display or coordination?** → Use Haiku 4.5 commands (status, list, auto, cleanup, learn-history)

**Starting a new solution?** → new (Opus) → plan (Opus) → setup (Sonnet)

**Executing tasks?** → ready (Sonnet) → run (Sonnet) → verify (Sonnet) → assess (Opus)

**Checking status?** → status (Haiku) or list (Haiku)

**Autonomous operation?** → auto (Haiku orchestrator with plan→act→assess→repeat loop)

**Learning system?** → learn (Opus) → learn-propose (Opus) → learn-apply (Sonnet)

---

**End of Reference Guide**
