---
title: STARK Methodology
description: Complete STARK problem-solving methodology - framework, phases, principles, and templates
---

# STARK Problem-Solving Methodology

**Version:** 1.0
**Last Updated:** 2025-12-15

---

## Table of Contents

1. [Core Philosophy](#core-philosophy)
2. [The STARK Framework](#the-stark-framework)
3. [Phase 1: Situation Analysis](#phase-1-situation-analysis)
4. [Phase 2: Target Definition](#phase-2-target-definition)
5. [Phase 3: Approach Design](#phase-3-approach-design)
6. [Phase 4: Resource Mobilization](#phase-4-resource-mobilization)
7. [Phase 5: Knowledge Integration](#phase-5-knowledge-integration)
8. [Cross-Cutting Principles](#cross-cutting-principles)
9. [Problem Classification](#problem-classification)
10. [Decision Frameworks](#decision-frameworks)
11. [Failure Mode Analysis](#failure-mode-analysis)
12. [Templates and Checklists](#templates-and-checklists)

---

## Core Philosophy

### Three Axioms

1. **Clarity Before Action** - A well-understood problem is halfway solved. Invest time in analysis before execution.
2. **Simplicity as Default** - Complex solutions should be justified, not simple ones. Start minimal, add only what's necessary.
3. **Learning Over Perfection** - Ship, learn, iterate. Perfect plans fail; adaptive ones succeed.

### Mental Models

#### First Principles Thinking
Break problems down to fundamental truths and reason up from there. Question assumptions ruthlessly.

**Application:**
- What do we know to be true?
- What are we assuming?
- Can we build a solution from scratch using only known truths?

#### Inversion
Instead of asking "How do I succeed?", ask "How could I guarantee failure?" Then avoid those things.

**Application:**
- List all ways this could fail
- Identify which failures are most likely
- Design safeguards against top failure modes

#### Occam's Razor
The simplest explanation (or solution) that fits the facts is usually correct.

**Application:**
- Generate simple solution first
- Only add complexity when simple approach is proven insufficient
- Regularly ask: "What can we remove?"

#### Map vs Territory
The model is not reality. All frameworks, including STARK, are simplified representations.

**Application:**
- Recognize when framework doesn't fit reality
- Adapt methodology to context
- Hold all models lightly

#### Second-Order Effects
Every action has consequences, and those consequences have consequences.

**Application:**
- Ask: "And then what?"
- Consider 2nd and 3rd order impacts
- Watch for unintended consequences

---

## The STARK Framework

STARK is a five-phase problem-solving methodology:

```
┌─────────────────────────────────────────────────────────────┐
│                     STARK FRAMEWORK                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  SITUATION          Understand the problem deeply          │
│      ↓              - What is the current state?           │
│                     - What are the constraints?            │
│                     - What's the root cause?               │
│                                                             │
│  TARGET             Define success clearly                 │
│      ↓              - What does "done" look like?          │
│                     - What are the acceptance criteria?    │
│                     - What's minimum viable success?       │
│                                                             │
│  APPROACH           Design the solution path               │
│      ↓              - What are possible approaches?        │
│                     - Which is best given constraints?     │
│                     - What are the steps?                  │
│                                                             │
│  RESOURCES          Mobilize what's needed                 │
│      ↓              - What do we need?                     │
│                     - What do we have?                     │
│                     - How do we get the gap?               │
│                                                             │
│  KNOWLEDGE          Capture and integrate learning         │
│                     - What did we learn?                   │
│                     - What would we do differently?        │
│                     - How do we preserve this knowledge?   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

Each phase builds on the previous, but iteration between phases is expected and encouraged.

---

## Phase 1: Situation Analysis

**Goal:** Develop a comprehensive understanding of the problem and its context.

### 1.1 Problem Statement

Use the **Current → Desired → Gap → Impact** framework:

```
CURRENT STATE:
- What is happening now?
- What are the symptoms?
- Who is affected?

DESIRED STATE:
- What should be happening?
- What would "solved" look like?
- What is the ideal outcome?

GAP:
- What is the difference between current and desired?
- How big is this gap?
- Is this gap growing or shrinking?

IMPACT:
- What are the costs of this gap?
- Who suffers? How much?
- What happens if we don't solve this?
```

### 1.2 Context Mapping

**Stakeholders:**
- Who cares about this problem?
- Who has power to help or hinder?
- Whose buy-in is critical?

**Environment:**
- What external factors influence this?
- What is changing in the broader context?
- What assumptions are we making about the environment?

**History:**
- Has this been attempted before?
- What worked? What failed?
- Why is now different?

### 1.3 Root Cause Analysis

#### 5 Whys Technique

Ask "Why?" five times to drill down to root cause:

```
Problem: [Surface problem]
Why? [First cause]
Why? [Deeper cause]
Why? [Deeper still]
Why? [Root cause emerging]
Why? [Fundamental root cause]
```

**Warning:** Stop when you reach causes outside your control or influence.

#### Fishbone Diagram Categories

Consider causes across multiple dimensions:
- **People:** Skills, motivation, capacity
- **Process:** Workflows, procedures, handoffs
- **Technology:** Tools, systems, infrastructure
- **Environment:** Culture, constraints, external factors
- **Materials:** Inputs, data, resources
- **Measurement:** How we track, what we measure

### 1.4 Constraint Identification

Categorize constraints into three types:

**Hard Constraints** (Cannot be changed)
- Laws, regulations
- Physics, mathematics
- Irrevocable deadlines
- Fixed budgets

**Soft Constraints** (Can be negotiated)
- Preferences
- Internal policies
- Self-imposed deadlines
- Requested features

**Assumed Constraints** (May not be real)
- "We've always done it this way"
- Unstated assumptions
- Inherited beliefs
- Unquestioned norms

**Action:** Challenge every assumed constraint. Negotiate soft constraints. Work within hard constraints.

---

## Phase 2: Target Definition

**Goal:** Define what success looks like with precision and clarity.

### 2.1 SMART-ER Criteria

Every target should be:

- **Specific:** Precisely defined, no ambiguity
- **Measurable:** Quantifiable or observable
- **Achievable:** Possible given constraints
- **Relevant:** Aligned with broader goals
- **Time-bound:** Clear deadline
- **Evaluated:** How will we measure success?
- **Reviewed:** When will we check progress?

### 2.2 Target Hierarchy

```
VISION (Why this matters)
    ↓
GOAL (What we want to achieve)
    ↓
OBJECTIVES (Specific outcomes)
    ↓
KEY RESULTS (Measurable indicators)
    ↓
ACCEPTANCE CRITERIA (Binary pass/fail tests)
```

### 2.3 Anti-Goals

Define what success is NOT:
- What outcomes would we consider failure even if we hit some metrics?
- What trade-offs are unacceptable?
- What values must we preserve?

**Example:**
- Goal: Increase revenue
- Anti-goal: Not at the cost of customer trust or team burnout

### 2.4 Minimum Viable Success

What is the smallest version of success that still delivers value?

**Framework:**
- **Must Have:** Non-negotiable for any success
- **Should Have:** Important but not critical
- **Could Have:** Nice to have if time/resources allow
- **Won't Have:** Explicitly out of scope

This creates a clear line between success and failure while allowing for degrees of success.

---

## Phase 3: Approach Design

**Goal:** Generate and evaluate solution approaches, then select the best path forward.

### 3.1 Solution Generation

**Generate at least 7 approaches** before evaluating any. This forces creative thinking beyond obvious solutions.

**Techniques:**
1. **Obvious Approach:** What's the first thing that comes to mind?
2. **Opposite Approach:** What if we did the exact opposite?
3. **Analogous Approach:** How is this solved in other domains?
4. **Minimal Approach:** What's the simplest possible solution?
5. **Maximal Approach:** What if we had unlimited resources?
6. **Constraint Removal:** What if our biggest constraint disappeared?
7. **Combination Approach:** Can we combine elements from above?

### 3.2 Evaluation Matrix

Score each approach across key dimensions:

| Approach | Effectiveness | Feasibility | Speed | Cost | Risk | Total |
|----------|---------------|-------------|-------|------|------|-------|
| A        | 8             | 6           | 9     | 7    | 8    | 38    |
| B        | 9             | 4           | 5     | 3    | 5    | 26    |
| C        | 7             | 9           | 8     | 8    | 9    | 41    |

**Dimensions to consider:**
- Effectiveness (solves the problem)
- Feasibility (can we do it?)
- Speed (time to results)
- Cost (resources required)
- Risk (what could go wrong?)
- Reversibility (can we undo it?)
- Learning value (what will we learn?)

### 3.3 Pre-Mortem

**Before committing to an approach, imagine it has failed spectacularly:**

1. It's 6 months from now
2. We implemented Approach X
3. It was a total disaster
4. Why did it fail?

List all the reasons, then design mitigations for the most likely failures.

### 3.4 Work Breakdown

Break the chosen approach into tasks:

```
APPROACH
    ↓
PHASES (major chunks of work)
    ↓
TASKS (actionable units, 1-3 days each)
    ↓
SUBTASKS (steps within tasks)
```

**Task Definition Template:**
- **What:** Description of the work
- **Why:** How this contributes to the goal
- **Done When:** Acceptance criteria
- **Dependencies:** What must be completed first
- **Risks:** What could go wrong
- **Estimate:** Time/effort required

---

## Phase 4: Resource Mobilization

**Goal:** Identify, acquire, and allocate resources needed for execution.

### 4.1 Resource Inventory

**Categories:**

**Human Resources:**
- Skills needed
- People available
- Capacity/availability
- Skill gaps

**Technical Resources:**
- Tools required
- Systems access
- Infrastructure needs
- Data requirements

**Financial Resources:**
- Budget available
- Cost estimates
- Funding sources
- Approval needed

**Time Resources:**
- Available time
- Deadlines
- Dependencies
- Schedule constraints

**Knowledge Resources:**
- Existing documentation
- Expert knowledge
- Prior art
- Learning resources

### 4.2 Gap Analysis

For each resource category:

```
NEEDED: [What we need]
HAVE: [What we have]
GAP: [The difference]
PLAN: [How to close the gap]
```

### 4.3 Acquisition Strategy

**For each gap:**
- **Build:** Create it ourselves
- **Buy:** Purchase or contract
- **Borrow:** Get temporary access
- **Partner:** Collaborate with someone who has it
- **Substitute:** Use alternative resource
- **Eliminate:** Re-scope to not need it

### 4.4 Risk-Resource Mapping

Allocate resources to de-risk critical paths:

**High Risk + High Impact = Maximum Resources**
- Prototype early
- Get expert help
- Build redundancy

**Low Risk + High Impact = Adequate Resources**
- Standard allocation
- Monitoring in place

**High Risk + Low Impact = Minimal Resources**
- Accept or mitigate cheaply
- Don't over-invest

**Low Risk + Low Impact = Minimal Resources**
- Standard approach
- Minimal oversight

---

## Phase 5: Knowledge Integration

**Goal:** Capture learning and integrate it into organizational knowledge.

### 5.1 Learning Loops

**Real-time Learning (During Execution):**
- Daily: What did we learn today?
- Weekly: What patterns are emerging?
- Milestone: What would we do differently?

**Post-execution Learning:**
- What worked better than expected?
- What worked worse than expected?
- What surprised us?
- What would we do differently?

### 5.2 Documentation Protocol

**Capture:**
- **Decisions Made:** What we decided and why
- **Approaches Tried:** What worked, what didn't
- **Unexpected Findings:** Surprises and anomalies
- **Reusable Patterns:** What could be templated

**Organize:**
- Tag by topic/domain
- Link related learnings
- Update existing documentation
- Create new templates

**Share:**
- Who needs to know this?
- What's the best format for them?
- How do we make it discoverable?

### 5.3 Post-Mortem Framework

**Within 1 week of completion:**

```
WHAT WAS THE GOAL?
- Restate original target
- Remind of context

WHAT DID WE ACHIEVE?
- Actual results
- Metrics achieved
- Variance from plan

WHAT WENT WELL?
- Successes to celebrate
- Things to repeat
- Unexpected wins

WHAT WENT POORLY?
- Failures and struggles
- Things to avoid
- Missed opportunities

WHAT DID WE LEARN?
- New knowledge gained
- Assumptions validated/invalidated
- Mental models updated

WHAT WILL WE DO DIFFERENTLY?
- Concrete changes to process
- Skills to develop
- Resources to acquire

ACTION ITEMS:
- Who will do what by when
- How will we track this
```

---

## Cross-Cutting Principles

These principles apply across all phases:

### 8.1 Iteration Over Perfection

**Principle:** Ship fast, learn, improve. Perfect plans fail because reality intervenes.

**Application:**
- Break work into iterations
- Ship minimum viable version
- Get feedback early
- Improve based on real data

**Warning Signs You're Not Iterating:**
- Planning phase exceeds 20% of total timeline
- No user feedback until final delivery
- Desire to "get it right the first time"

### 8.2 Leverage Over Effort

**Principle:** Find the smallest input that creates the largest output.

**Application:**
- What's the 20% that drives 80% of results?
- What's the bottleneck we should focus on?
- What can we automate, delegate, or eliminate?

**Questions:**
- If we could only do one thing, what would it be?
- What task, if completed, would make everything else easier?

### 8.3 Constraints Are Gifts

**Principle:** Constraints force creativity and focus.

**Application:**
- Don't fight constraints, use them
- Artificial constraints can improve outcomes
- Time-boxing prevents perfectionism

**Example:**
- Limited budget → creative solutions
- Tight deadline → ruthless prioritization
- Small team → simple architecture

### 8.4 Simplicity Bias

**Principle:** Default to simpler solutions. Complexity requires justification.

**Application:**
- Start with simplest approach that could work
- Add complexity only when simple approach fails
- Regularly ask: "What can we remove?"

**Complexity Checklist:**
- Can we solve this with existing tools?
- Can we solve this with fewer components?
- Can we solve this with less code/process?
- Can we solve this with fewer people?

---

## Problem Classification

Different problem types require different approaches:

### 9.1 Clear Problems

**Characteristics:**
- Well-defined cause and effect
- Best practices exist
- Repeatable solutions
- Right answer is knowable

**Approach:**
- Apply best practices
- Follow established procedures
- Optimize for efficiency

**Examples:** Bug fixes, known configurations, standard deployments

### 9.2 Complicated Problems

**Characteristics:**
- Multiple components
- Expert knowledge required
- Analysis yields answers
- Solutions exist but aren't obvious

**Approach:**
- Break down into components
- Apply expertise
- Analyze thoroughly before acting
- Use STARK methodology fully

**Examples:** System architecture, optimization, complex integrations

### 9.3 Complex Problems

**Characteristics:**
- Emergent behavior
- Solutions only visible in retrospect
- Need to probe and sense
- Multiple valid approaches

**Approach:**
- Run safe-to-fail experiments
- Iterate rapidly
- Amplify what works, dampen what doesn't
- Embrace emergence

**Examples:** Organizational change, product-market fit, culture building

### 9.4 Chaotic Problems

**Characteristics:**
- No clear cause and effect
- Novel situation
- Urgent action needed
- Stability is the goal

**Approach:**
- Act quickly to establish order
- Don't analyze, just stabilize
- Move to Complex or Complicated once stable
- Prevent, don't optimize

**Examples:** Production outages, crisis response, emergencies

### 9.5 Confused Problems

**Characteristics:**
- Treating one type as another
- Wrong approach for problem type
- Stuck or making no progress

**Approach:**
- Step back and reclassify
- Identify why current approach isn't working
- Switch to appropriate methodology

**Warning Signs:**
- Analysis paralysis on chaotic problem
- Rushing solution on complicated problem
- Applying best practices to complex problem

---

## Decision Frameworks

### 10.1 OODA Loop (Observe-Orient-Decide-Act)

**Observe:** Gather current information
**Orient:** Analyze and synthesize
**Decide:** Choose course of action
**Act:** Implement decision

**Speed matters:** Iterate through OODA faster than the problem evolves.

### 10.2 Reversible vs Irreversible Decisions

**Reversible (Two-way doors):**
- Can be undone
- Make quickly with minimal process
- Iterate and improve
- Examples: Feature flags, experiments, design tweaks

**Irreversible (One-way doors):**
- Cannot be undone or costly to reverse
- Require thorough analysis
- Get buy-in and review
- Examples: Data deletion, public commitments, team restructuring

**Rule:** Make reversible decisions fast, irreversible decisions carefully.

### 10.3 Expected Value Framework

For decisions under uncertainty:

```
Expected Value = (Probability of Success × Value if Success)
                 - (Probability of Failure × Cost if Failure)
```

**Application:**
- Estimate probabilities and values
- Compare expected values
- Choose highest expected value
- Account for risk tolerance

### 10.4 The 10-10-10 Rule

**Evaluate decisions across three time horizons:**

- How will I feel about this decision in 10 minutes?
- How will I feel about this decision in 10 months?
- How will I feel about this decision in 10 years?

**Use for:** Distinguishing urgent from important, gaining perspective on stakes.

### 10.5 Regret Minimization

**Ask:** When I'm 80 years old, which decision will I regret less?

**Use for:** Major life/career decisions, values-based choices.

---

## Failure Mode Analysis

### 11.1 Common Failure Patterns

**Analysis Paralysis:**
- **Symptom:** Endless planning, no execution
- **Cause:** Fear of wrong decision, perfectionism
- **Recovery:** Set decision deadline, use reversible decisions, bias to action

**Premature Execution:**
- **Symptom:** Building before understanding
- **Cause:** Action bias, time pressure
- **Recovery:** Pause, complete Situation and Target phases, prototype first

**Scope Creep:**
- **Symptom:** Growing requirements, moving targets
- **Cause:** Unclear targets, stakeholder misalignment
- **Recovery:** Reaffirm targets, explicit change control process

**Resource Starvation:**
- **Symptom:** Insufficient time/people/budget
- **Cause:** Optimistic estimation, poor mobilization
- **Recovery:** Re-scope, acquire resources, or abandon

**Knowledge Loss:**
- **Symptom:** Repeating mistakes, reinventing wheels
- **Cause:** Poor documentation, no learning loops
- **Recovery:** Implement post-mortems, knowledge repository

**Wrong Problem:**
- **Symptom:** Solving symptoms not root cause
- **Cause:** Insufficient Situation analysis
- **Recovery:** Return to Phase 1, apply 5 Whys, validate assumptions

### 11.2 Recovery Protocols

**When stuck, ask:**
1. What phase am I in?
2. Is this the right phase for this problem type?
3. Have I completed the previous phase?
4. Am I using the right tools for this phase?
5. Do I need to reclassify the problem?

**Default recovery action:** Return to Situation Analysis. Most failures stem from misunderstood problems.

---

## Templates and Checklists

### 12.1 Quick Start Checklist

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

### 12.2 Comprehensive Checklist

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

### 12.3 Decision Template

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

### 12.4 Task Template

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

---

## Conclusion

STARK is a framework, not a rigid process. Adapt it to your context. Use what works, skip what doesn't.

**The core principle remains constant:** Understand deeply, aim clearly, plan thoughtfully, execute decisively, learn continuously.

**Remember:**
- Clarity before action
- Simplicity as default
- Learning over perfection

Now go solve problems.
