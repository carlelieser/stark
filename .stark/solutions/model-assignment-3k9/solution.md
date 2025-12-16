# STARK Solution: Assign Default Models to STARK Commands

**ID:** model-assignment-3k9
**Created:** 2025-12-15
**Status:** New

---

## Situation

### Current State

The STARK framework consists of 17 slash commands that orchestrate problem-solving workflows. Currently, these commands do not have explicit default model assignments, meaning they rely on whatever model the user has configured globally. The commands vary significantly in their complexity, cognitive requirements, and resource needs:

**Command Inventory:**
1. `/stark:setup` - One-time initialization, creates SYSTEM.md
2. `/stark:new` - Problem analysis using Phase 1 (Situation Analysis with 5 Whys, constraints)
3. `/stark:plan` - Complete Phases 2-4 (Target, Approach with 3+ solutions, Resources)
4. `/stark:task` - Deep task analysis and execution planning
5. `/stark:think` - Iterative deliberation and confidence assessment
6. `/stark:ready` - Readiness evaluation against checklist
7. `/stark:run` - Task execution with allowed tools (Bash, Task, Read, Write, Glob, Edit, Grep)
8. `/stark:verify` - Verification against acceptance criteria with evidence
9. `/stark:complete` - Solution finalization and lessons learned
10. `/stark:status` - Display solution status (lightweight)
11. `/stark:list` - List all solutions (lightweight)
12. `/stark:auto` - Autonomous orchestration via Task tool delegation
13. `/stark:cleanup` - Multi-agent quality analysis with parallel subagents
14. `/stark:learn` - Structured feedback collection (14 validation-heavy prompts)
15. `/stark:learn-history` - Display learning data with pattern analysis
16. `/stark:learn-propose` - Analyze feedback patterns, generate ranked proposals
17. `/stark:learn-apply` - Apply approved improvements with validation and backups

**Characteristics:**
- Complexity ranges from simple queries (status, list) to deep analysis (think, plan, learn-propose)
- Some commands spawn subagents (auto, cleanup) requiring orchestration capability
- Some require tool access (run has explicit allowed-tools)
- Learning commands involve heavy validation, parsing, and structured output generation
- Planning commands require creative thinking and evaluation

### Desired State

Each STARK command should have an appropriate default model assignment based on:
- **Cognitive complexity** - How much reasoning is required
- **Task type** - Analysis vs execution vs orchestration vs display
- **Resource requirements** - Need for speed vs depth
- **User experience** - Balance between quality and response time
- **Cost efficiency** - Appropriate model tier for task value

Model options available (from knowledge):
- **claude-opus-4-5** - Highest capability, best for complex reasoning, analysis, creative problem-solving
- **claude-sonnet-4-5** - Balanced capability/speed, good for most tasks
- **claude-haiku-4** - Fast and efficient, good for simple tasks, data processing

### Gap

Currently there is no systematic model assignment strategy for STARK commands. This means:
- Users may get inconsistent experiences
- Complex commands might run on insufficient models
- Simple commands might waste resources on oversized models
- No optimization for the specific cognitive demands of each command type

### Impact

**Without proper model assignment:**
- **Quality risks** - Complex analysis commands (think, plan, learn-propose) may produce shallow results on smaller models
- **Efficiency waste** - Simple display commands (status, list) may use expensive models unnecessarily
- **User confusion** - No clear guidance on which commands need more vs less capability
- **Cost inefficiency** - Suboptimal resource allocation across command types

**With proper model assignment:**
- Optimized quality/cost ratio for each command type
- Predictable performance characteristics
- Better user experience with appropriate response times
- Foundation for future model selection refinement

### Root Cause Analysis (5 Whys)

**Why don't STARK commands have default models?**
→ Because the framework was built without considering model differentiation

**Why was model differentiation not considered?**
→ Because the focus was on workflow structure and problem-solving methodology

**Why was workflow prioritized over execution optimization?**
→ Because establishing the STARK phases and command structure was the primary goal

**Why was that the primary goal?**
→ Because the framework needed to prove the methodology worked before optimizing execution

**Why did methodology need to be proven first?**
→ Because without a solid problem-solving structure, model optimization would be premature

**Root Cause:** The framework has matured from methodology design to execution optimization phase. Model assignment is a natural next step in evolution.

### Constraints

**Hard Constraints:**
- Models must be valid Claude API model IDs
- Commands with `allowed-tools` must use models that support those tools
- Cannot change existing command functionality or structure
- Must preserve backwards compatibility

**Soft Constraints:**
- Prefer consistency within command categories (e.g., all learning commands use similar tier)
- Balance between quality and cost
- Consider user expectations for response time
- Maintain flexibility for user override

**Assumed Constraints:**
- Commands can only use one default model (challenge: maybe some could benefit from different models for different phases?)
- All users have access to all model tiers (challenge: what about tier restrictions?)
- Model assignments should be static (challenge: could they be dynamic based on context?)

---

## Target

### Success Criteria (SMART-ER)

**Specific:**
Assign appropriate default model identifiers to all 17 STARK commands based on their cognitive complexity and task requirements. Model assignments will be documented in each command's frontmatter or configuration.

**Measurable:**
- All 17 commands have explicit default model assignments
- Model assignments follow a documented decision matrix
- At least 3 distinct model tiers are utilized across commands
- Commands are categorized by complexity (simple/moderate/complex)

**Achievable:**
Using available Claude model tiers (Opus 4.5, Sonnet 4.5, Haiku 4) and existing command structure without breaking changes.

**Relevant:**
Optimizes quality/cost ratio, improves user experience, and ensures complex reasoning tasks get appropriate model capability.

**Time-bound:**
Complete assignment and documentation within this solution cycle.

**Evaluate:**
Success will be evaluated by:
- Completeness of assignments (17/17 commands)
- Logical consistency of decision matrix
- Documentation clarity
- Preservation of existing functionality

**Reward:**
- Optimized resource usage across STARK framework
- Clear model selection guidance for future command development
- Foundation for user customization and override mechanisms
- Improved quality for high-complexity commands

### Anti-Goals (What Success is NOT)

- **NOT** changing command functionality or workflow logic
- **NOT** implementing dynamic model selection (future enhancement)
- **NOT** creating user-facing model selection UI
- **NOT** modifying the STARK phase structure
- **NOT** requiring users to reconfigure existing solutions
- **NOT** making assignments based solely on cost optimization (quality must be primary)

### Minimum Viable Success

At minimum, success requires:
1. All 17 commands have documented default model assignments
2. Assignments follow a clear, documented rationale
3. High-complexity commands (think, plan, learn-propose) use Opus 4.5
4. Low-complexity commands (status, list) use Haiku 4
5. No breaking changes to existing command behavior

### Failure Conditions

The solution fails if:
- Any command lacks a model assignment
- Model assignments break existing functionality
- No clear decision rationale is documented
- Complex reasoning commands are assigned insufficient models (e.g., Haiku for /stark:think)
- Simple commands waste resources with oversized models (e.g., Opus for /stark:status)

---

## Approach

### Solution Approaches Considered

#### Approach 1: Uniform Model Assignment
Assign the same model (Sonnet 4.5) to all commands for consistency.

**Pros:**
- Simple to implement and maintain
- Predictable behavior across all commands
- No complexity in decision-making

**Cons:**
- Wastes resources on simple commands
- Underserves complex reasoning tasks
- Misses optimization opportunity
- Poor cost/quality balance

**Verdict:** Rejected - fails to optimize for task-specific needs

#### Approach 2: Three-Tier Categorization
Categorize commands into Simple/Moderate/Complex tiers and assign Haiku 4/Sonnet 4.5/Opus 4.5 respectively.

**Pros:**
- Balances quality and cost effectively
- Clear decision framework
- Optimizes for task complexity
- Allows future refinement within tiers

**Cons:**
- Requires careful categorization
- Some commands may be borderline between tiers
- Initial assignments may need tuning

**Verdict:** Selected - best balance of optimization and simplicity

#### Approach 3: Dynamic Model Selection
Implement runtime logic to select models based on context, input size, or user preferences.

**Pros:**
- Maximum flexibility
- Can optimize per-execution
- Handles edge cases well

**Cons:**
- High implementation complexity
- Adds decision overhead to every execution
- Difficult to predict behavior
- Beyond scope of current need

**Verdict:** Rejected - over-engineered for current requirements, consider for future enhancement

### Selected Approach: Three-Tier Categorization

#### Decision Matrix

Commands will be categorized using these criteria:

**Complexity Factors:**
1. **Reasoning Depth** - Does it require multi-step analysis, evaluation, or creative thinking?
2. **Output Quality Sensitivity** - How much does quality degradation impact value?
3. **Orchestration Needs** - Does it spawn subagents or coordinate complex workflows?
4. **Data Processing** - Is it primarily reading/displaying vs analyzing/generating?
5. **Validation Requirements** - How much structured validation is needed?

**Tier Definitions:**

**Tier 1 - Haiku 4 (Simple/Display):**
- Primarily data retrieval and display
- Minimal reasoning required
- Fast response prioritized
- Low quality sensitivity
- Examples: status, list

**Tier 2 - Sonnet 4.5 (Moderate/Execution):**
- Balanced reasoning and execution
- Moderate quality requirements
- Some analysis or validation
- Good speed/quality balance
- Examples: ready, verify, setup, task, run

**Tier 3 - Opus 4.5 (Complex/Analysis):**
- Deep reasoning and analysis required
- High quality critical to value
- Creative problem-solving needed
- Multi-perspective evaluation
- Complex orchestration or generation
- Examples: think, plan, new, learn-propose, cleanup, auto

### Task Breakdown

#### Task 1: Analyze and Categorize All 17 Commands

**Description:**
Review each command's prompt and functionality to categorize it into Simple (Tier 1), Moderate (Tier 2), or Complex (Tier 3) based on the decision matrix.

**Acceptance Criteria:**
- [ ] All 17 commands reviewed
- [ ] Each command assigned to a tier with rationale
- [ ] Categorization documented in a decision table
- [ ] Edge cases or borderline commands flagged for review

**Definition of Done:**
Complete categorization matrix exists showing command → tier mapping with justification for each assignment.

#### Task 2: Document Model Assignment Decision Matrix

**Description:**
Create comprehensive documentation explaining the three-tier system, decision criteria, and rationale for each command's assignment.

**Acceptance Criteria:**
- [ ] Decision matrix documented with clear tier definitions
- [ ] Complexity factors explained
- [ ] Each command's assignment justified
- [ ] Examples provided for each tier
- [ ] Documentation includes future refinement guidance

**Definition of Done:**
Documentation file exists that any developer can use to understand and validate the model assignments.

#### Task 3: Locate Command Definition Files

**Description:**
Find where STARK commands are defined in the codebase to understand the current structure and identify where model assignments should be added.

**Acceptance Criteria:**
- [ ] All command definition files located
- [ ] Current structure documented
- [ ] Model assignment mechanism identified or designed
- [ ] Implementation approach determined

**Definition of Done:**
Clear understanding of where and how to implement model assignments in the existing codebase.

#### Task 4: Implement Model Assignments in Command Files

**Description:**
Add default model specifications to each command file using the appropriate mechanism (frontmatter, configuration, or command structure).

**Acceptance Criteria:**
- [ ] All 17 commands updated with model assignments
- [ ] Syntax follows established patterns
- [ ] No breaking changes to existing functionality
- [ ] Model identifiers are valid and correct

**Definition of Done:**
All command files contain proper model assignments that can be read and utilized by the STARK framework.

#### Task 5: Validate Assignments Against Decision Matrix

**Description:**
Review all implemented assignments to ensure they match the documented decision matrix and rationale.

**Acceptance Criteria:**
- [ ] Each assignment matches documented tier
- [ ] No commands missing assignments
- [ ] Model identifiers are correct (claude-opus-4-5, claude-sonnet-4-5, claude-haiku-4)
- [ ] Documentation and implementation are consistent

**Definition of Done:**
Validation checklist completed with zero discrepancies between documentation and implementation.

#### Task 6: Create Command Model Reference Guide

**Description:**
Generate a quick reference guide showing all commands with their assigned models for easy lookup and future maintenance.

**Acceptance Criteria:**
- [ ] Reference guide lists all 17 commands
- [ ] Each command shows assigned model
- [ ] Commands grouped by tier
- [ ] Purpose/rationale summary included
- [ ] Guide is easily accessible

**Definition of Done:**
Reference guide file exists and is linked from main STARK documentation.

---

## Resources

### Required Files

**Command Definition Files:**
- `.claude-plugin/commands/stark-setup.md`
- `.claude-plugin/commands/stark-new.md`
- `.claude-plugin/commands/stark-plan.md`
- `.claude-plugin/commands/stark-task.md`
- `.claude-plugin/commands/stark-think.md`
- `.claude-plugin/commands/stark-ready.md`
- `.claude-plugin/commands/stark-run.md`
- `.claude-plugin/commands/stark-verify.md`
- `.claude-plugin/commands/stark-complete.md`
- `.claude-plugin/commands/stark-status.md`
- `.claude-plugin/commands/stark-list.md`
- `.claude-plugin/commands/stark-auto.md`
- `.claude-plugin/commands/stark-cleanup.md`
- `.claude-plugin/commands/stark-learn.md`
- `.claude-plugin/commands/stark-learn-history.md`
- `.claude-plugin/commands/stark-learn-propose.md`
- `.claude-plugin/commands/stark-learn-apply.md`

**Documentation Files:**
- `.stark/solutions/model-assignment-3k9/` - Current solution directory
- `CLAUDE.md` - Project documentation (for reference guide linking)
- `.claude-plugin/` - Plugin structure documentation (if exists)

### Required Tools

**Development Tools:**
- Read - To examine existing command files
- Edit - To update command files with model assignments
- Write - To create new documentation files
- Grep - To search for patterns in command files
- Glob - To find all command files

**Analysis Tools:**
- Bash - To verify file structures and test changes

### Required Knowledge

**Model Identifiers:**
- `claude-opus-4-5` - Highest capability model
- `claude-sonnet-4-5` - Balanced model (currently in use: claude-sonnet-4-5-20250929)
- `claude-haiku-4` - Fast, efficient model

**Command File Structure:**
- Need to understand frontmatter format (if used)
- Need to understand how models are specified in Claude Code plugin system
- Need to understand command prompt structure

### Dependencies

**Technical Dependencies:**
- Claude Code plugin system must support model specification
- Command files must support metadata or configuration
- No code changes required to STARK framework itself

**Information Dependencies:**
- Must review all 17 command prompts to understand complexity
- Must understand current command file format
- Must validate model identifier syntax

### Potential Blockers

**Known Risks:**
1. **Command file format uncertainty** - May need to investigate how to specify models
   - Mitigation: Examine existing command files first

2. **Model specification mechanism** - May not be clear where/how to add model assignments
   - Mitigation: Research Claude Code plugin documentation or examples

3. **Backwards compatibility** - Changes might affect existing solutions
   - Mitigation: Test with existing solution before full rollout

4. **Command categorization disagreement** - Some commands may be borderline
   - Mitigation: Document rationale clearly and allow for refinement

### Knowledge Gaps

- Exact syntax for model specification in command files (need to investigate)
- Whether model specification is supported in current plugin version (need to verify)
- Impact on existing solutions using these commands (need to test)

---

## Status

- [x] Problem analyzed
- [x] Solution planned
- [x] Tasks defined
- [x] Execution complete

**Status:** Complete

---

## Completion

**Completed:** 2025-12-16
**Duration:** 1 day (from 2025-12-15 to 2025-12-16)

### Outcomes

Successfully implemented a three-tier model assignment system for all 17 STARK commands, optimizing the quality-cost balance across the framework. Each command now has an appropriate default model based on its cognitive complexity, reasoning requirements, and task characteristics.

**Achievements:**
- All 17 commands assigned appropriate models (5 Haiku, 6 Sonnet, 6 Opus)
- Comprehensive decision matrix documentation created
- Model assignments implemented in command frontmatter
- Reference guide published and linked from project documentation
- Zero breaking changes to existing functionality

### Changes Made

| Area | Change | Impact |
|------|--------|--------|
| Command Files | Added `model:` field to YAML frontmatter in all 17 `.claude-plugin/commands/*.md` files | Commands now use optimized models: Haiku for simple tasks, Sonnet for moderate execution, Opus for complex analysis |
| Documentation | Created DECISION_MATRIX.md (9,632 words) with tier definitions, complexity factors, and command justifications | Provides authoritative reference for understanding and refining model assignments |
| Documentation | Created MODEL_REFERENCE.md (247 lines) with quick reference table and tier breakdowns | Enables instant lookup of command-model mappings for developers and users |
| Project Docs | Updated CLAUDE.md with Documentation section linking to MODEL_REFERENCE.md | Improves discoverability of model assignment information |
| Model Distribution | Tier 1 (Haiku): 5 commands - status, list, auto, cleanup, learn-history | Optimized for fast display and lightweight orchestration |
| Model Distribution | Tier 2 (Sonnet): 6 commands - setup, ready, run, verify, complete, learn-apply | Balanced speed and quality for execution tasks |
| Model Distribution | Tier 3 (Opus): 6 commands - new, plan, task, think, learn, learn-propose | Maximum capability for deep analysis and creative problem-solving |

### Lessons Learned

**What worked well:**
- **Systematic categorization framework**: The five complexity factors (Reasoning Depth, Output Quality Sensitivity, Orchestration Needs, Data Processing Type, Validation Requirements) provided a clear, objective basis for tier assignments
- **Three-tier approach**: Striking the right balance between optimization and simplicity - enough granularity to optimize without over-complicating decisions
- **Deliberative analysis**: Taking time to analyze edge cases (auto, cleanup, task) prevented incorrect assignments and revealed important architectural insights about orchestration patterns
- **Comprehensive documentation**: Creating both detailed decision matrix and quick reference guide serves different audiences and use cases effectively
- **Evidence-based verification**: Each task's acceptance criteria with concrete evidence ensured quality and caught potential issues

**What could improve:**
- **Earlier research on command file format**: Could have investigated the `model:` field specification mechanism before planning, though discovering it during execution worked fine
- **Performance baseline collection**: Would be valuable to establish baseline response times and quality metrics before implementation for future A/B testing
- **User override mechanism**: While model assignments are now in place, we didn't implement a user-level override system (intentionally deferred as future enhancement)
- **Dynamic model selection exploration**: The rejected Approach 3 (dynamic selection) may warrant future investigation for certain high-variance commands

**Key takeaways for future:**
- **Orchestration insight is valuable**: Discovered that orchestrator commands (auto, cleanup) can use lightweight models because the intelligence lives in spawned subagents - this pattern is applicable to future command design
- **Edge cases drive learning**: Commands at tier boundaries (verify, learn-apply, task) provided the most valuable insights about the decision framework
- **Documentation is implementation**: Creating comprehensive documentation (DECISION_MATRIX.md) wasn't just about explaining decisions - the act of writing forced deeper thinking and caught inconsistencies
- **Model versioning matters**: Using specific versioned model identifiers (e.g., claude-opus-4-5-20251101) rather than generic aliases ensures reproducible behavior and facilitates future migrations
- **Multi-tier validation pays off**: Validating not just implementation but also the decision matrix application (Task 5 Deliberation 2) caught subtle categorization issues
- **Quick wins exist**: Simple display commands (status, list) were obvious Tier 1 candidates, allowing focus on more challenging categorizations

**Future optimization opportunities:**
- Collect real-world usage data to empirically validate tier assignments
- Implement optional user-level model overrides for project-specific needs
- Consider command-specific A/B testing for borderline cases
- Monitor token usage patterns to refine cost optimization
- Explore dynamic model selection for commands with high input variance

---
