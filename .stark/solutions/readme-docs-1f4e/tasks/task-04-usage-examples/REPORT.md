# Task: Usage Examples

**Solution:** readme-docs-1f4e
**Task ID:** task-04-usage-examples
**Status:** Executed

---

## Description

Write 3 concrete, executable examples demonstrating STARK workflow for the README.md file. These examples must show real-world usage patterns that help users understand how to apply STARK to their own problems.

---

## Analysis

### Current State
The solution plan calls for Task 4: Usage Examples, which is critical for demonstrating STARK's value through practical demonstration rather than theoretical explanation. The README structure has been defined (Task 1), but no concrete examples exist yet to show users how STARK works in practice.

### Requirements Deep Dive

**Example 1: Basic Workflow**
- Must demonstrate the core STARK command sequence: new → plan → run → complete
- Should use a realistic scenario that resonates with developers
- Needs to show the progressive nature of the framework
- Must explain what each command does in context

**Example 2: Autonomous Mode**
- Must demonstrate /stark:auto command for end-to-end execution
- Should highlight the difference from manual workflow
- Needs to show when autonomous mode is appropriate
- Must explain the trade-offs (speed vs control)

**Example 3: Learning System Usage**
- Must demonstrate the self-healing learning cycle
- Should show /stark:learn, /stark:learn-propose, /stark:learn-apply commands
- Needs to illustrate how STARK improves over time
- Must explain the feedback loop mechanism

### Technical Considerations
- Examples must be based on actual STARK command behavior (sourced from command files)
- Each example needs clear scenario setup, command sequence, and expected outcomes
- Code blocks must use proper markdown formatting for GitHub rendering
- Examples should be progressive in complexity (basic → intermediate → advanced)
- Must avoid making examples too trivial or too complex

### User Journey Impact
These examples serve multiple user types:
- **Quick Scanners:** Want to see "show me don't tell me" evidence
- **Practical Learners:** Need concrete patterns to copy and adapt
- **Evaluators:** Deciding if STARK fits their workflow
- **Contributors:** Understanding how the system works end-to-end

Without quality examples, users may:
- Struggle to translate theory into practice
- Misunderstand STARK's capabilities or appropriate use cases
- Abandon the framework before experiencing value
- Fail to discover advanced features like autonomous mode or learning system

---

## Acceptance Criteria

From solution.md Task 4:
- [ ] Example 1: Basic workflow (new → plan → run → complete)
- [ ] Example 2: Autonomous mode (/stark:auto)
- [ ] Example 3: Learning system usage
- [ ] Each example includes: scenario, commands used, expected outcomes
- [ ] Examples use realistic problem scenarios
- [ ] Code blocks properly formatted
- [ ] Examples are copy-pasteable (where applicable)

---

## Execution Plan

### Step 1: Review Command Implementations
Read the relevant command files to ensure examples accurately reflect actual behavior:
- `/Users/devplex/Documents/Projects/Development/stark/.claude/commands/stark/new.md`
- `/Users/devplex/Documents/Projects/Development/stark/.claude/commands/stark/plan.md`
- `/Users/devplex/Documents/Projects/Development/stark/.claude/commands/stark/run.md`
- `/Users/devplex/Documents/Projects/Development/stark/.claude/commands/stark/complete.md`
- `/Users/devplex/Documents/Projects/Development/stark/.claude/commands/stark/auto.md`
- `/Users/devplex/Documents/Projects/Development/stark/.claude/commands/stark/learn.md`
- `/Users/devplex/Documents/Projects/Development/stark/.claude/commands/stark/learn-propose.md`
- `/Users/devplex/Documents/Projects/Development/stark/.claude/commands/stark/learn-apply.md`

**Output:** Command behavior understanding, accurate command syntax

### Step 2: Design Example Scenarios
Create realistic, relatable problem scenarios for each example:
- Example 1: Common development task (e.g., "Add authentication to API")
- Example 2: Complex feature request (e.g., "Implement real-time notifications")
- Example 3: Command improvement scenario (e.g., "Noticed /stark:plan could be clearer")

**Output:** Three scenario descriptions that resonate with target audience

### Step 3: Write Example 1 - Basic Workflow
Structure:
```markdown
### Example 1: Basic Workflow - Adding Authentication

**Scenario:** You need to add JWT authentication to your REST API...

**Step 1: Create Solution**
\`\`\`bash
/stark:new auth-system-8k2p "Add JWT authentication to REST API"
\`\`\`

[Continue with plan, run, complete steps with explanatory text]

**Outcome:** [What the user achieves]
```

**Output:** Complete Example 1 with scenario, commands, explanations, outcomes

### Step 4: Write Example 2 - Autonomous Mode
Structure:
```markdown
### Example 2: Autonomous Mode - Full Feature Implementation

**Scenario:** You need to implement a complete feature but want STARK to handle the orchestration...

**Command:**
\`\`\`bash
/stark:auto "Implement real-time notification system with WebSockets"
\`\`\`

[Explain what happens automatically, when to use vs manual mode]

**Outcome:** [What autonomous mode delivers]
```

**Output:** Complete Example 2 showing autonomous workflow advantages

### Step 5: Write Example 3 - Learning System
Structure:
```markdown
### Example 3: Learning System - Improving STARK Over Time

**Scenario:** While using /stark:plan, you notice the prompts could be clearer...

**Step 1: Capture Feedback**
\`\`\`bash
/stark:learn plan "The prompt should ask about acceptance criteria earlier"
\`\`\`

[Continue through propose and apply steps]

**Outcome:** [How STARK improves itself]
```

**Output:** Complete Example 3 demonstrating self-healing capability

### Step 6: Add Contextual Notes
For each example, add:
- When to use this approach
- What makes this scenario appropriate for STARK
- Common variations or alternatives
- Links to related commands or documentation

**Output:** Enhanced examples with contextual guidance

### Step 7: Format and Validate
- Ensure all code blocks use proper markdown syntax
- Verify command syntax matches actual implementation
- Check that explanatory text is clear and concise
- Validate progressive complexity (basic → advanced)
- Ensure examples are copy-pasteable where applicable

**Output:** Polished, validated examples ready for README integration

---

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Examples don't match actual command behavior | Low | High | Read command files before writing, verify syntax |
| Scenarios are too trivial/unrealistic | Medium | High | Use real development problems, avoid "hello world" examples |
| Examples are too complex for beginners | Medium | Medium | Start with basic workflow, add complexity progressively |
| Code blocks don't render properly | Low | Medium | Use standard GitHub markdown, validate rendering |
| Examples become stale as commands evolve | Medium | Medium | Base on core workflow which is stable, add "last updated" note |
| Users can't map examples to their problems | Low | High | Choose broadly applicable scenarios, add contextual notes |

---

## Dependencies

### Must Exist Before Execution:
- [ ] Task 1 (Structure) complete - Need to know where examples fit in README
- [ ] Access to command files in `.claude/commands/stark/`
- [ ] Understanding of STARK methodology from SYSTEM.md

### Must Be True:
- [ ] Commands referenced in examples actually exist and work as described
- [ ] Example scenarios are realistic and relatable to target audience
- [ ] GitHub-flavored markdown syntax understood

### Blocking Issues:
None identified. All dependencies are satisfied.

---

## Notes

**Writing Principles:**
- Show, don't tell
- Use active voice and present tense
- Keep scenarios realistic and relatable
- Balance detail with brevity
- Include "why" not just "what" and "how"

**Quality Checks:**
- Can a beginner follow Example 1 successfully?
- Does Example 2 clearly show autonomous mode value?
- Does Example 3 demonstrate self-healing without being too meta?
- Are all commands syntactically correct?
- Do examples build on each other logically?
