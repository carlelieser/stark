---
title: Templates and Checklists
description: STARK templates and checklists - quick start, comprehensive checklist, decision template, and task template
---

# Templates and Checklists

STARK templates provide structured frameworks for applying the methodology to real problems. These templates are designed to be copied, customized, and adapted to your specific needs. Use them to structure your thinking, ensure thoroughness, and create reviewable documentation throughout your problem-solving process.

## Template Overview

- **Quick Start Checklist**: For straightforward problems you can solve in 10-15 minutes
- **Comprehensive Checklist**: For complex or high-stakes problems requiring thorough analysis
- **Decision Template**: For documenting important decisions, especially irreversible ones
- **Task Template**: For detailed task planning (similar to `/stark:task` command output)

## Quick Start Checklist

Use this checklist when you have a straightforward problem with clear scope, are working under time constraints, or are familiar with this type of problem. This streamlined approach can typically be completed in 10-15 minutes.

**For straightforward problems:**

- [ ] Define current state and desired state
- [ ] Identify 3-5 acceptance criteria
- [ ] List major constraints
- [ ] Generate 3 possible approaches
- [ ] Select best approach with rationale
- [ ] Break into tasks
- [ ] Identify required resources
- [ ] Execute
- [ ] Capture learning

## Comprehensive Checklist

Use this checklist for complex problems, high-stakes situations, unfamiliar domains, or when you want to ensure nothing critical is missed. This maps to STARK's five phases and can be used with commands like `/stark:new`, `/stark:plan`, and `/stark:run`.

**For complex or high-stakes problems:**

**Phase 1: Situation**
- [ ] Current state documented
- [ ] Desired state documented
- [ ] Gap and impact quantified
- [ ] Stakeholders identified
- [ ] Context mapped
- [ ] Root cause analysis completed (5 Whys)
- [ ] Constraints categorized (hard/soft/assumed)
- [ ] Problem type classified

**Phase 2: Target**
- [ ] SMART-ER criteria applied
- [ ] Target hierarchy defined
- [ ] Anti-goals identified
- [ ] Minimum viable success defined
- [ ] Acceptance criteria documented

**Phase 3: Approach**
- [ ] 7+ approaches generated
- [ ] Evaluation matrix completed
- [ ] Approach selected with rationale
- [ ] Pre-mortem conducted
- [ ] Risks identified and mitigations planned
- [ ] Work breakdown structure created
- [ ] Dependencies mapped

**Phase 4: Resources**
- [ ] Resource inventory completed
- [ ] Gaps identified
- [ ] Acquisition strategy defined
- [ ] Resources allocated
- [ ] Risk-resource mapping completed

**Phase 5: Knowledge**
- [ ] Learning loops established
- [ ] Documentation protocol defined
- [ ] Post-mortem scheduled
- [ ] Knowledge sharing plan created

## Decision Template

Use this template to document important project decisions, especially irreversible ones (Type II decisions). Creating a written record improves decision quality and provides valuable context for future reviews.

::: tip
Irreversible decisions deserve more analysis than reversible ones. If you can easily change your mind later, use a lighter decision-making process.
:::

```markdown
## Decision: [Title]

**Date:** [YYYY-MM-DD]
**Decider:** [Name/Role]
**Type:** [Reversible / Irreversible]

### Context
[What's the situation requiring a decision?]

### Options Considered
1. [Option 1]
   - Pros:
   - Cons:
   - Expected Value:

2. [Option 2]
   - Pros:
   - Cons:
   - Expected Value:

3. [Option 3]
   - Pros:
   - Cons:
   - Expected Value:

### Decision
[What did we decide?]

### Rationale
[Why did we choose this option?]

### Success Criteria
[How will we know this was the right decision?]

### Review Date
[When will we evaluate this decision?]
```

## Task Template

Use this template for detailed task planning when working outside the STARK command workflow. Note that the `/stark:task` command generates a similar structure automatically, so this template is most useful for manual planning or non-STARK task management.

```markdown
## Task: [Title]

**ID:** [Unique identifier]
**Status:** [Not Started / In Progress / Blocked / Done]
**Owner:** [Name]
**Estimated Effort:** [Hours/Days]

### Objective
[What are we trying to achieve?]

### Context
[Why does this matter? How does it fit into the larger goal?]

### Acceptance Criteria
- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]

### Approach
[How will we do this?]

### Dependencies
- [Task/Resource this depends on]
- [Another dependency]

### Risks
- [Risk 1]: [Mitigation]
- [Risk 2]: [Mitigation]

### Resources Needed
- [Resource 1]
- [Resource 2]

### Completion Notes
[To be filled when done: what worked, what didn't, learnings]
```

## Using These Templates

These templates are starting points, not rigid requirements. Copy them, customize them, and adapt them to fit your specific needs and problem context. Start with the Quick Start Checklist for most problems, then move to the Comprehensive Checklist when you need deeper analysis. The templates work well alongside STARK commands but can also be used independently for any structured problem-solving work.

## Related Resources

- [Complete Methodology](/reference/methodology) - Understanding STARK's five phases
- [Command Reference](/reference/commands) - Commands that implement these workflows
- [Workflow Guide](/guide/workflow) - How to use templates with commands
- [Usage Examples](/guide/examples) - See templates applied to real problems
