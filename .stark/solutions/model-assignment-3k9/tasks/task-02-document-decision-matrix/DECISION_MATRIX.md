# STARK Model Assignment Decision Matrix

**Version:** 1.0
**Last Updated:** 2025-12-15
**Status:** Active

---

## Executive Summary

The STARK framework uses a **three-tier model assignment system** to optimize the balance between response quality, cost efficiency, and execution speed across its 17 commands. Each command is assigned to one of three Claude model tiers based on its complexity profile:

- **Tier 1 - Haiku 4:** Simple display and orchestration commands requiring minimal reasoning
- **Tier 2 - Sonnet 4.5:** Moderate execution and validation commands with balanced requirements
- **Tier 3 - Opus 4.5:** Complex analysis and planning commands where quality is critical

This approach ensures that:
- High-stakes analytical work receives the sophisticated reasoning of Opus 4.5
- Routine execution benefits from Sonnet 4.5's balanced performance
- Display and coordination operations leverage Haiku 4's speed and efficiency

**Current Distribution:**
- 5 commands (29.4%) use Haiku 4
- 6 commands (35.3%) use Sonnet 4.5
- 6 commands (35.3%) use Opus 4.5

---

## Why Model Differentiation Matters

### The Challenge

STARK commands vary dramatically in their cognitive requirements:
- Some commands simply display existing data (`/stark:status`, `/stark:list`)
- Others execute predefined plans (`/stark:run`, `/stark:verify`)
- Still others perform deep analytical work (`/stark:new`, `/stark:plan`, `/stark:think`)

Using a single model for all commands creates suboptimal tradeoffs:
- **All Opus:** Maximum quality but unnecessarily expensive and slower for simple operations
- **All Sonnet:** Good balance but underpowered for critical analysis, overpowered for display
- **All Haiku:** Fast and cheap but insufficient quality for complex reasoning tasks

### The Solution

Differentiated model assignment allows each command to use the optimal model for its requirements:
- **Quality-critical commands** get the reasoning power they need (Opus)
- **Execution-focused commands** get balanced performance (Sonnet)
- **Simple operations** get speed and efficiency (Haiku)

This results in:
- Better overall solution quality (complex commands use stronger models)
- Lower operational costs (simple commands use cheaper models)
- Faster response times (display and coordination commands are faster)
- Appropriate resource allocation (complexity matches capability)

---

## The Five Complexity Factors

Commands are evaluated across five dimensions to determine their tier assignment:

### 1. Reasoning Depth

**Definition:** The level of analytical thinking, multi-step reasoning, and creative problem-solving required.

**Levels:**
- **Low:** Simple logic, straightforward operations, minimal decision-making
  - *Example:* Reading a file and displaying its contents
  - *Example:* Looking up a value in a predefined table

- **Medium:** Some analysis required, structured decision-making, moderate evaluation
  - *Example:* Evaluating task readiness against a checklist
  - *Example:* Executing plan steps and documenting progress

- **High:** Deep reasoning, multi-step analysis, creative thinking, complex evaluation
  - *Example:* Conducting root cause analysis using 5 Whys methodology
  - *Example:* Generating and evaluating multiple solution approaches
  - *Example:* Iterative deliberation to resolve complex questions

**Impact on Tier:**
- High reasoning depth strongly favors Tier 3 (Opus)
- Low reasoning depth enables Tier 1 (Haiku)
- Medium reasoning depth typically fits Tier 2 (Sonnet)

### 2. Output Quality Sensitivity

**Definition:** How much the value of the output degrades if quality is compromised. How critical is precision, sophistication, and correctness?

**Levels:**
- **Low:** Output is primarily informational; minor quality issues have minimal impact
  - *Example:* Displaying a status report (accuracy matters, but presentation is secondary)
  - *Example:* Listing available solutions (completeness matters, but formatting is flexible)

- **Medium:** Quality matters but within structured bounds; some tolerance for variance
  - *Example:* Documenting execution steps (should be clear and accurate)
  - *Example:* Creating initialization templates (should be correct but follows patterns)

- **High:** Output quality directly impacts downstream work; poor quality causes significant problems
  - *Example:* Problem statement formulation (poor analysis leads to wrong solutions)
  - *Example:* Solution approach generation (weak ideas waste time and resources)
  - *Example:* Task planning (inadequate plans cause execution failures)

**Impact on Tier:**
- High quality sensitivity strongly favors Tier 3 (Opus)
- Low quality sensitivity enables Tier 1 (Haiku)
- Medium quality sensitivity typically fits Tier 2 (Sonnet)

### 3. Orchestration Needs

**Definition:** Whether the command coordinates other agents, manages workflows, or delegates work to subagents.

**Levels:**
- **None:** Command performs its work directly without coordinating other agents
  - *Example:* Most STARK commands that execute their own logic

- **Some:** Limited coordination or simple workflow management
  - *Example:* Sequential execution of predefined steps

- **Complex:** Multi-agent orchestration, parallel coordination, workflow state management
  - *Example:* `/stark:auto` - orchestrates entire STARK lifecycle via Task tool delegation
  - *Example:* `/stark:cleanup` - spawns 4 parallel analysis subagents and aggregates results

**Critical Insight:**
**Orchestrators can use lightweight models** because the intelligence lives in the delegated subagents, not in the orchestrator itself. An orchestrator primarily:
- Maintains state (where are we in the workflow?)
- Makes routing decisions (what should happen next?)
- Delegates work (invoke the appropriate subagent)
- Aggregates results (collect and present outputs)

These are relatively simple operations that don't require sophisticated reasoning.

**Impact on Tier:**
- Complex orchestration with simple routing logic enables Tier 1 (Haiku) if the subagents handle complexity
- Complex orchestration requiring sophisticated coordination logic may require Tier 2 or 3

### 4. Data Processing Type

**Definition:** Whether the command primarily retrieves and displays existing data or analyzes and generates new insights.

**Levels:**
- **Display:** Primarily retrieval, formatting, and presentation of existing data
  - *Example:* Reading solution.md and displaying status
  - *Example:* Listing solution directories

- **Mixed:** Combination of retrieval and some processing or light analysis
  - *Example:* Initializing system with template generation
  - *Example:* Collecting feedback with basic validation

- **Analysis:** Primarily analytical work, insight generation, or creative content production
  - *Example:* Problem statement construction from user input
  - *Example:* Solution approach generation and evaluation
  - *Example:* Pattern detection across feedback entries

**Impact on Tier:**
- Display operations favor Tier 1 (Haiku)
- Mixed operations typically fit Tier 2 (Sonnet)
- Analysis-heavy operations favor Tier 3 (Opus)

### 5. Validation Requirements

**Definition:** The extent and complexity of validation, verification, and structured checking required.

**Levels:**
- **Minimal:** Basic checks, simple format validation
  - *Example:* Checking if a file exists
  - *Example:* Verifying a simple status value

- **Moderate:** Structured validation against known criteria or checklists
  - *Example:* Checking readiness against a predefined checklist
  - *Example:* Validating that required fields are populated

- **Heavy:** Extensive validation, complex verification logic, multi-faceted checking
  - *Example:* Verifying acceptance criteria with evidence evaluation
  - *Example:* Validating feedback responses with intelligent reprompting
  - *Example:* Ensuring SMART-ER criteria compliance across multiple dimensions

**Impact on Tier:**
- Heavy validation requirements favor Tier 2 (Sonnet) or Tier 3 (Opus) depending on complexity
- Moderate validation typically fits Tier 2 (Sonnet)
- Minimal validation enables Tier 1 (Haiku)

---

## Tier Definitions

### Tier 1: Haiku 4 (Simple/Display)

**Model:** Claude Haiku 4
**Use Cases:** Display, retrieval, simple orchestration

**Characteristics:**
- **Reasoning Depth:** Low - straightforward logic and simple operations
- **Output Quality:** Low sensitivity - accuracy matters but sophistication is not critical
- **Orchestration:** May have complex orchestration IF the orchestrator itself is simple
- **Data Processing:** Primarily display/retrieval or simple coordination
- **Validation:** Minimal validation requirements

**Typical Command Types:**
- Status and information display commands
- List and inventory commands
- Orchestrators that delegate complex work to subagents
- Simple data retrieval and formatting operations

**Response Time:** Fast - Haiku prioritizes speed
**Cost:** Low - most economical option
**Quality Level:** Sufficient for operations where accuracy is primary concern, not sophistication

**Example Commands:**
- `/stark:status` - Display solution status from solution.md
- `/stark:list` - List all solutions in table format
- `/stark:auto` - Orchestrate STARK lifecycle by delegating to subagents
- `/stark:cleanup` - Coordinate multi-agent analysis workflow
- `/stark:learn-history` - Display learning history with basic patterns

**When to Use:**
- Output is primarily display or simple formatting
- Logic is straightforward with minimal branching
- Quality degradation has minimal downstream impact
- Speed is valuable (user-facing display commands)
- Command delegates complex work to other agents

### Tier 2: Sonnet 4.5 (Moderate/Execution)

**Model:** Claude Sonnet 4.5
**Use Cases:** Execution, validation, moderate analysis

**Characteristics:**
- **Reasoning Depth:** Medium - structured analysis and decision-making
- **Output Quality:** Medium to High - quality matters but within bounded contexts
- **Orchestration:** None or simple coordination
- **Data Processing:** Execution-focused or mixed (retrieval + processing)
- **Validation:** Moderate to Heavy validation requirements

**Typical Command Types:**
- Plan execution commands
- Validation and verification commands
- Template generation and initialization
- Structured application of predefined changes
- Finalization and completion operations

**Response Time:** Balanced - reasonable speed with good quality
**Cost:** Moderate - balanced cost-performance ratio
**Quality Level:** Reliable execution, good attention to detail, structured reasoning

**Example Commands:**
- `/stark:setup` - Initialize STARK system with comprehensive methodology
- `/stark:ready` - Evaluate task readiness against checklist
- `/stark:run` - Execute task steps according to plan
- `/stark:verify` - Verify acceptance criteria with evidence
- `/stark:complete` - Finalize solution with lessons learned
- `/stark:learn-apply` - Apply approved proposals with validation

**When to Use:**
- Execution of predefined plans or procedures
- Validation against known criteria
- Moderate analysis within structured contexts
- Quality matters but creative sophistication is not critical
- Template-based generation or application
- Operational commands that need reliability

### Tier 3: Opus 4.5 (Complex/Analysis)

**Model:** Claude Opus 4.5
**Use Cases:** Analysis, planning, creative problem-solving

**Characteristics:**
- **Reasoning Depth:** High - deep analysis, creative thinking, multi-step reasoning
- **Output Quality:** High sensitivity - quality directly impacts solution success
- **Orchestration:** None (complex work is done directly, not delegated)
- **Data Processing:** Analysis and insight generation
- **Validation:** Variable - quality comes from reasoning, not just validation

**Typical Command Types:**
- Problem analysis and formulation
- Solution generation and evaluation
- Deep task planning and design
- Iterative deliberation and thinking
- Pattern analysis and proposal generation
- Critical feedback collection with intelligent interaction

**Response Time:** Slower - prioritizes quality over speed
**Cost:** High - most expensive option
**Quality Level:** Superior reasoning, creative problem-solving, nuanced analysis

**Example Commands:**
- `/stark:new` - Create solution with 5 Whys root cause analysis
- `/stark:plan` - Generate and evaluate solution approaches
- `/stark:task` - Deep task analysis with risk assessment
- `/stark:think` - Iterative deliberation with insight generation
- `/stark:learn` - Intelligent feedback collection with validation
- `/stark:learn-propose` - Pattern-based improvement proposal generation

**When to Use:**
- Foundational work where quality determines downstream success
- Creative problem-solving requiring multiple perspectives
- Deep analytical reasoning with complex evaluation
- High-stakes decisions with significant impact
- Nuanced understanding and interpretation required
- Pattern detection and insight extraction

---

## Command Assignment Reference

### Complete Assignment Table

| Command | Tier | Model | Primary Function | Key Justification |
|---------|------|-------|------------------|-------------------|
| `/stark:setup` | 2 | Sonnet 4.5 | System initialization | Template generation, infrequent operation, moderate quality needs |
| `/stark:new` | 3 | Opus 4.5 | Create new solution (Phase 1) | 5 Whys analysis, constraint mapping - foundational quality critical |
| `/stark:plan` | 3 | Opus 4.5 | Solution planning (Phases 2-4) | Generate & evaluate alternatives, SMART-ER criteria - creative work |
| `/stark:task` | 3 | Opus 4.5 | Task analysis and planning | Risk assessment, execution planning - comprehensive reasoning |
| `/stark:think` | 3 | Opus 4.5 | Iterative deliberation | Pure reasoning work, insight generation, confidence assessment |
| `/stark:ready` | 2 | Sonnet 4.5 | Readiness evaluation | Structured checklist evaluation against defined criteria |
| `/stark:run` | 2 | Sonnet 4.5 | Task execution | Execute plan steps, use tools, document - operational focus |
| `/stark:verify` | 2 | Sonnet 4.5 | Acceptance verification | Evidence-based validation against pre-defined criteria |
| `/stark:complete` | 2 | Sonnet 4.5 | Solution finalization | Reflective analysis, lessons learned - moderate sophistication |
| `/stark:status` | 1 | Haiku 4 | Display solution status | Pure retrieval and display, minimal reasoning required |
| `/stark:list` | 1 | Haiku 4 | List all solutions | Simple directory listing and table formatting |
| `/stark:auto` | 1 | Haiku 4 | Autonomous orchestration | State machine delegates all work to subagents via Task tool |
| `/stark:cleanup` | 1 | Haiku 4 | Multi-agent cleanup analysis | Orchestrator spawns 4 subagents, aggregates results |
| `/stark:learn` | 3 | Opus 4.5 | Collect improvement feedback | 14 validation-heavy prompts with intelligent reprompting |
| `/stark:learn-history` | 1 | Haiku 4 | Display learning history | Basic pattern analysis, primarily display-focused |
| `/stark:learn-propose` | 3 | Opus 4.5 | Generate improvement proposals | Pattern detection, ranking, creative proposal generation |
| `/stark:learn-apply` | 2 | Sonnet 4.5 | Apply approved proposals | Precise execution with extensive validation and backups |

### Distribution Summary

**By Tier:**
- **Tier 1 (Haiku 4):** 5 commands (29.4%)
- **Tier 2 (Sonnet 4.5):** 6 commands (35.3%)
- **Tier 3 (Opus 4.5):** 6 commands (35.3%)

**By Functional Category:**
- **Display/Retrieval:** 3 commands → Tier 1 (status, list, learn-history)
- **Orchestration:** 2 commands → Tier 1 (auto, cleanup)
- **Execution:** 4 commands → Tier 2 (setup, ready, run, complete)
- **Validation:** 2 commands → Tier 2 (verify, learn-apply)
- **Analysis/Planning:** 4 commands → Tier 3 (new, plan, task, think)
- **Learning System:** 2 commands → Tier 3 (learn, learn-propose)

---

## Detailed Command Justifications

### Tier 1: Haiku 4 Commands

#### `/stark:status`

**Assignment:** Tier 1 (Haiku 4)

**What It Does:**
Reads solution.md and displays current solution status including phase, current state, and progress indicators.

**Complexity Profile:**
- **Reasoning Depth:** Low - straightforward file reading and formatting
- **Output Quality:** Low sensitivity - accuracy in display matters, but presentation sophistication does not
- **Orchestration:** None
- **Data Processing:** Display - pure retrieval and formatting
- **Validation:** Minimal - basic file existence and parsing

**Why Tier 1:**
This is a pure display operation. The command reads existing structured data and presents it in a readable format. There's no analysis, no decision-making, no creative work. Speed is actually valuable here since users want quick status checks. Haiku's speed and accuracy are perfect for this use case.

**Alternative Considerations:** None - clear Tier 1 candidate.

---

#### `/stark:list`

**Assignment:** Tier 1 (Haiku 4)

**What It Does:**
Lists all solution directories in `.stark/solutions/` and displays them in a table with basic metadata.

**Complexity Profile:**
- **Reasoning Depth:** Low - directory listing and table formatting
- **Output Quality:** Low sensitivity - completeness and accuracy matter, but sophistication does not
- **Orchestration:** None
- **Data Processing:** Display - retrieval and formatting
- **Validation:** Minimal - directory existence checks

**Why Tier 1:**
Another pure display operation. Lists directories, extracts basic information, formats as a table. No reasoning required. Fast response is beneficial for user experience.

**Alternative Considerations:** None - clear Tier 1 candidate.

---

#### `/stark:auto`

**Assignment:** Tier 1 (Haiku 4)

**What It Does:**
Orchestrates the entire STARK problem-solving lifecycle autonomously by reading solution state and delegating appropriate commands to subagents via the Task tool.

**Complexity Profile:**
- **Reasoning Depth:** Low - simple state machine logic
- **Output Quality:** Low sensitivity - coordination messages, not analytical output
- **Orchestration:** Complex - manages full STARK lifecycle
- **Data Processing:** Mixed - reads state, makes routing decisions
- **Validation:** Minimal - basic state validation

**Why Tier 1 (Critical Insight):**
This is the most interesting assignment because `/stark:auto` is the "autonomous end-to-end solver." Intuitively, it seems like it should use the most powerful model. However, this is **pure orchestration**.

The orchestrator's job is:
1. Read solution.md to determine current state
2. Use a simple lookup table to determine next action
3. Delegate to the appropriate command via Task tool (e.g., call `/stark:plan` as a subagent)
4. Monitor completion and iterate

**The actual intelligence lives in the delegated commands:**
- When auto delegates to `/stark:new`, that subagent runs with Opus 4.5
- When auto delegates to `/stark:run`, that subagent runs with Sonnet 4.5
- When auto delegates to `/stark:verify`, that subagent runs with Sonnet 4.5

The orchestrator just maintains a heartbeat loop and routes work. This is simple logic that Haiku handles excellently. Using Haiku for the orchestrator actually provides better performance:
- Faster iteration through the heartbeat loop
- Lower cost for the coordination overhead
- Quality where it matters (in the delegated commands, not the router)

**Alternative Considerations:**
Could argue for Tier 2 (Sonnet) if the state management becomes complex, but current implementation is straightforward state machine logic.

---

#### `/stark:cleanup`

**Assignment:** Tier 1 (Haiku 4)

**What It Does:**
Orchestrates multi-agent code cleanup by spawning 4 specialized analysis subagents in parallel (Code Quality Analyst, Config Validator, Documentation Reviewer, Consistency Checker), aggregating their findings, and managing iterative refinement.

**Complexity Profile:**
- **Reasoning Depth:** Low - coordination logic, simple aggregation
- **Output Quality:** Low sensitivity - presents aggregated findings, doesn't generate them
- **Orchestration:** Complex - multi-agent parallel coordination
- **Data Processing:** Mixed - aggregates subagent results
- **Validation:** Minimal - structural validation of results

**Why Tier 1 (Similar to auto):**
Like `/stark:auto`, this is pure orchestration. The cleanup command:
1. Spawns 4 analysis subagents in parallel via Task tool
2. Each subagent performs specialized analysis (they do the actual work)
3. Orchestrator collects and aggregates results
4. Aggregation is mechanical (merge JSON, sort by severity, format report)
5. Deliberation loop is simple: "Critical issues remain? → Re-analyze"

**The intelligence lives in the subagents:**
- Code Quality Analyst analyzes code issues
- Config Validator checks configurations
- Documentation Reviewer evaluates docs
- Consistency Checker finds inconsistencies

The orchestrator just coordinates these agents and merges their output. This is lightweight work that Haiku handles well, and Haiku's speed benefits the coordination overhead.

**Alternative Considerations:**
Could use Tier 2 if the aggregation logic becomes sophisticated (e.g., resolving conflicts between subagent findings), but current implementation is straightforward.

---

#### `/stark:learn-history`

**Assignment:** Tier 1 (Haiku 4)

**What It Does:**
Displays learning history from `LEARNING_HISTORY.json` with basic pattern analysis (keyword frequency, issue categories).

**Complexity Profile:**
- **Reasoning Depth:** Low - algorithmic pattern counting, no deep analysis
- **Output Quality:** Low sensitivity - informational display
- **Orchestration:** None
- **Data Processing:** Display - retrieval with basic algorithmic processing
- **Validation:** Moderate - JSON parsing and structure validation

**Why Tier 1:**
While this command does some "analysis" (counting keyword frequencies, categorizing issues), it's algorithmic processing, not reasoning. The pattern detection is simple frequency counting, not insight generation. The output is primarily display-focused. Haiku can handle the algorithmic processing and formatting efficiently.

**Alternative Considerations:**
If pattern analysis becomes more sophisticated (e.g., semantic clustering, trend analysis), could move to Tier 2.

---

### Tier 2: Sonnet 4.5 Commands

#### `/stark:setup`

**Assignment:** Tier 2 (Sonnet 4.5)

**What It Does:**
One-time initialization that creates `SYSTEM.md` with comprehensive STARK methodology documentation (12 sections including problem-solving framework, quality standards, etc.).

**Complexity Profile:**
- **Reasoning Depth:** Low - template-based generation following clear structure
- **Output Quality:** Medium - needs to be correct and comprehensive, but follows established patterns
- **Orchestration:** None
- **Data Processing:** Mixed - template generation with structured content
- **Validation:** Moderate - ensuring all required sections are present and well-formed

**Why Tier 2:**
Setup generates substantial content, but it's template-based following a predefined structure. The content quality matters (users rely on this methodology), but it's not creative work requiring deep reasoning. Sonnet provides good balance:
- Sufficient quality for comprehensive documentation
- Attention to detail for covering all required sections
- Cost-effective for a relatively infrequent operation
- Faster than Opus for routine template generation

This is a one-time operation, so the cost isn't a major concern, but there's no need for Opus-level sophistication since the structure and content are well-defined.

**Alternative Considerations:**
Could use Tier 1 (Haiku) if setup were purely template insertion, but the content generation benefits from Sonnet's quality. Could use Tier 3 (Opus) if methodology were being designed from scratch, but it's implementing an established framework.

---

#### `/stark:ready`

**Assignment:** Tier 2 (Sonnet 4.5)

**What It Does:**
Evaluates task readiness by checking REPORT.md and deliberations against a predefined checklist, returning READY or NOT READY with explanation.

**Complexity Profile:**
- **Reasoning Depth:** Medium - structured evaluation against criteria
- **Output Quality:** Medium - correct assessment matters, but criteria are defined
- **Orchestration:** None
- **Data Processing:** Analysis - evaluates completeness and quality
- **Validation:** Moderate - checklist-based verification

**Why Tier 2:**
Readiness evaluation requires judgment (Is the plan sufficient? Are dependencies clear?), but it's structured judgment against known criteria. The command isn't inventing criteria; it's checking against them. Sonnet handles this structured evaluation well:
- Good at following checklists systematically
- Sufficient reasoning for evaluating completeness
- Balanced approach for a preparatory command
- Appropriate cost for a pre-execution check

**Alternative Considerations:**
Could argue for Tier 1 if the checklist were purely mechanical (file exists? fields populated?), but there's some qualitative assessment involved. Could argue for Tier 3 if readiness evaluation required sophisticated judgment, but the criteria are reasonably clear.

---

#### `/stark:run`

**Assignment:** Tier 2 (Sonnet 4.5)

**What It Does:**
Executes task steps according to the plan in REPORT.md, using appropriate tools, documenting execution in EXECUTION.md, and tracking changes.

**Complexity Profile:**
- **Reasoning Depth:** Medium - interpreting plan, making execution decisions
- **Output Quality:** Medium - execution should be correct and well-documented
- **Orchestration:** None
- **Data Processing:** Execution - active implementation work
- **Validation:** Moderate - tracking changes, documenting steps

**Why Tier 2:**
Run is the workhorse execution command. It needs to:
- Interpret the execution plan from REPORT.md
- Use tools appropriately (file operations, bash commands, etc.)
- Handle execution issues and document them
- Track all changes systematically

This is operational work that requires competence and reliability, not deep reasoning. Sonnet excels at:
- Tool use and execution
- Following structured procedures
- Documenting work systematically
- Balanced cost for a frequently-used command

The plan provides the "what" and "why" (created by Opus-powered `/stark:task`). Run focuses on the "how" - implementation.

**Alternative Considerations:**
Could argue for Tier 3 if execution requires significant problem-solving, but well-planned tasks should have clear execution paths. Could argue for Tier 1 if execution were purely mechanical, but there's enough interpretation and decision-making to warrant Sonnet.

---

#### `/stark:verify`

**Assignment:** Tier 2 (Sonnet 4.5)
**Note:** Borderline case - could be Tier 3

**What It Does:**
Verifies task completion by checking each acceptance criterion in REPORT.md, documenting evidence, and determining PASS/FAIL.

**Complexity Profile:**
- **Reasoning Depth:** Medium - structured validation with evidence evaluation
- **Output Quality:** High - incorrect verification causes downstream problems
- **Orchestration:** None
- **Data Processing:** Analysis - evaluating evidence against criteria
- **Validation:** Heavy - extensive verification requirements

**Why Tier 2:**
Verification is quality-critical work, which typically favors higher tiers. However, the acceptance criteria are pre-defined in REPORT.md, making this structured validation rather than open-ended evaluation. Sonnet's strengths align well:
- Strong attention to detail for checking each criterion
- Good at evidence-based reasoning (Does X prove Y?)
- Systematic verification against known standards
- Appropriate cost for a frequently-used gate

The criteria provide clear targets. Verify doesn't define quality; it checks against defined quality standards.

**Why Not Tier 3:**
While verification quality matters, the criteria are explicit. This is more like a careful inspection than creative evaluation. Opus would provide marginal benefit at significantly higher cost.

**Why Not Tier 1:**
Verification requires judgment (Is this evidence sufficient? Does it truly meet the criterion?). Haiku wouldn't provide enough sophistication for this quality-critical gate.

**Monitoring Recommendation:**
Track verification accuracy. If false positives (passing when shouldn't) or false negatives (failing when should pass) become common, escalate to Tier 3.

---

#### `/stark:complete`

**Assignment:** Tier 2 (Sonnet 4.5)

**What It Does:**
Finalizes solution by documenting outcomes, extracting lessons learned, and updating solution status to Complete.

**Complexity Profile:**
- **Reasoning Depth:** Medium - reflective analysis of what was achieved
- **Output Quality:** Medium - lessons learned should be insightful, but within bounded context
- **Orchestration:** None
- **Data Processing:** Mixed - summarizing outcomes and extracting insights
- **Validation:** Moderate - ensuring completeness of finalization

**Why Tier 2:**
Completion requires reflection: What did we achieve? What worked well? What could be improved? This is analytical work, but it's retrospective analysis within a known context (the solution that was just completed). Sonnet provides:
- Sufficient sophistication for extracting lessons learned
- Good summarization capabilities
- Balanced cost for a finalization operation
- Appropriate quality for reflective analysis

**Alternative Considerations:**
Could use Tier 3 if lessons learned were being synthesized across multiple solutions to generate broader insights, but this is solution-specific reflection. Could use Tier 1 if this were just status updates, but the lessons learned extraction has analytical value.

---

#### `/stark:learn-apply`

**Assignment:** Tier 2 (Sonnet 4.5)
**Note:** Borderline case - could be Tier 3

**What It Does:**
Applies approved improvement proposals to command files with validation, backups, and structured verification.

**Complexity Profile:**
- **Reasoning Depth:** Medium - precise execution with interpretation
- **Output Quality:** High - breaking a command has serious consequences
- **Orchestration:** None
- **Data Processing:** Execution - file modification with validation
- **Validation:** Heavy - extensive pre/post validation, backups, rollback capability

**Why Tier 2:**
This is high-stakes execution work. The command must:
- Apply specific changes from approved proposals
- Preserve YAML frontmatter and markdown structure
- Validate semantic integrity before and after
- Create backups for rollback
- Verify the changes were applied correctly

However, the **changes are pre-specified** in the proposals. This is precise execution, not creative problem-solving. Sonnet's strengths:
- Excellent attention to detail for precise modifications
- Strong validation capabilities
- Good at following structured procedures
- Appropriate cost for a relatively infrequent operation

The proposals (created by Opus-powered `/stark:learn-propose`) define **what** to change and **why**. Learn-apply focuses on **how** to safely apply those changes.

**Why Not Tier 3:**
The proposals specify exactly what to change. There's minimal creative interpretation required. The complexity is in careful execution and validation, which is Sonnet's strength.

**Why Not Tier 1:**
The stakes are too high and the validation requirements too extensive for Haiku. Breaking a command could disable the entire STARK framework.

**Monitoring Recommendation:**
Track application errors. If commands break frequently or semantic integrity issues arise, escalate to Tier 3.

---

### Tier 3: Opus 4.5 Commands

#### `/stark:new`

**Assignment:** Tier 3 (Opus 4.5)

**What It Does:**
Creates a new STARK solution using Phase 1 (Situation Analysis): constructing problem statements, root cause analysis via 5 Whys, mapping constraints (hard/soft/assumed).

**Complexity Profile:**
- **Reasoning Depth:** High - deep analytical work, creative problem construction
- **Output Quality:** High sensitivity - poor problem analysis leads to wrong solutions
- **Orchestration:** None
- **Data Processing:** Analysis - generating insights from user input
- **Validation:** Moderate - structured output but quality is in the thinking

**Why Tier 3:**
This is foundational analytical work. The problem statement and root cause analysis determine the entire solution direction. If `/stark:new` misunderstands the problem or conducts shallow analysis, all downstream work is wasted. Opus is essential for:

**5 Whys Root Cause Analysis:**
- Requires probing deeper than surface symptoms
- Each "why" must be insightful, not superficial
- Needs to identify actual root causes, not obvious factors
- Creative thinking to explore different causal chains

**Constraint Mapping:**
- Distinguishing hard constraints (cannot change) from soft (difficult but possible) from assumed (mistakenly believed)
- This distinction requires sophisticated judgment
- Challenging assumptions is critical for innovative solutions

**Problem Statement Construction:**
- Synthesizing complex situations into clear problem statements
- Balancing specificity and scope
- Identifying what's truly being solved vs. symptoms

**Output Quality Impact:**
Poor problem analysis → Wrong solution direction → Wasted effort on the wrong solution

This is exactly the kind of deep, creative, foundational reasoning that justifies Opus's cost.

**Alternative Considerations:**
None - this is a clear Tier 3 candidate. Could potentially downgrade if problem domains become routine and template-based, but STARK is designed for novel complex problems.

---

#### `/stark:plan`

**Assignment:** Tier 3 (Opus 4.5)

**What It Does:**
Completes Phases 2-4 of STARK: defining success criteria (SMART-ER), generating 3+ solution approaches, evaluating them, and breaking the chosen approach into tasks.

**Complexity Profile:**
- **Reasoning Depth:** High - creative solution generation, multi-criteria evaluation
- **Output Quality:** High sensitivity - plan quality determines solution success
- **Orchestration:** None
- **Data Processing:** Analysis - generating and evaluating alternatives
- **Validation:** Heavy - SMART-ER compliance, approach completeness

**Why Tier 3:**
Planning is high-stakes creative work requiring:

**Solution Approach Generation (Phase 3):**
- Creating 3+ distinct solution approaches
- Each approach must be viable and different
- Creative thinking to explore solution space
- Considering trade-offs and implications

**Approach Evaluation:**
- Multi-criteria assessment (feasibility, resources, risks, etc.)
- Comparative analysis to identify best approach
- Justifying selection with clear reasoning

**Task Breakdown (Phase 4):**
- Decomposing solution into executable tasks
- Identifying dependencies and sequencing
- Balancing granularity (not too big, not too small)
- Ensuring complete coverage of approach

**SMART-ER Criteria Definition (Phase 2):**
- Specific, Measurable, Achievable, Relevant, Time-bound, Evaluated, Reviewed
- Creating meaningful success criteria
- Ensuring criteria are actually measurable and relevant

**Output Quality Impact:**
Poor planning → Weak solution approaches → Implementation difficulties → Suboptimal outcomes

The plan is the blueprint. It must be high quality because everything else builds on it. This is exactly what Opus excels at: creative generation, multi-criteria evaluation, and comprehensive planning.

**Alternative Considerations:**
None - clear Tier 3 candidate. The creative and analytical demands justify Opus.

---

#### `/stark:task`

**Assignment:** Tier 3 (Opus 4.5)

**What It Does:**
Performs deep task analysis: understanding requirements, creating execution plans, conducting risk assessments, mapping dependencies, defining acceptance criteria.

**Complexity Profile:**
- **Reasoning Depth:** High - comprehensive multi-perspective analysis
- **Output Quality:** High sensitivity - task plan quality affects execution success
- **Orchestration:** None
- **Data Processing:** Analysis - planning and risk assessment
- **Validation:** Heavy - extensive structured output requirements

**Why Tier 3:**
Task planning requires thorough analysis:

**Execution Plan Creation:**
- Breaking task into specific, actionable steps
- Sequencing steps logically
- Identifying required tools and approaches
- Anticipating execution challenges

**Risk Assessment:**
- Identifying potential problems
- Evaluating likelihood and impact
- Defining mitigation strategies
- Considering edge cases and failure modes

**Dependency Mapping:**
- Understanding what must exist before execution
- Identifying blocking dependencies vs. helpful context
- Mapping file, information, and external dependencies

**Acceptance Criteria Definition:**
- Creating verifiable criteria for task completion
- Ensuring criteria are specific and measurable
- Covering all aspects of success

**Output Quality Impact:**
Poor task planning → Execution difficulties → Rework → Delayed completion

Tasks are the unit of execution. If task plans are weak, execution will struggle. Opus provides the comprehensive reasoning needed to create robust, actionable task plans.

**Alternative Considerations:**
Could potentially use Tier 2 for very straightforward tasks if the domain becomes routine, but STARK tasks tend to be complex enough to warrant thorough analysis.

---

#### `/stark:think`

**Assignment:** Tier 3 (Opus 4.5)

**What It Does:**
Iterative deliberation on tasks: reviewing prior deliberations, generating new insights, resolving open questions, assessing confidence, and refining understanding.

**Complexity Profile:**
- **Reasoning Depth:** High - pure analytical thinking and insight generation
- **Output Quality:** High sensitivity - quality of thinking directly determines outcomes
- **Orchestration:** None
- **Data Processing:** Analysis - deliberative reasoning
- **Validation:** Moderate - structured format but quality is in the insights

**Why Tier 3:**
This is **pure reasoning work**. Think has one job: produce high-quality analytical thinking about the task. There's no execution, no formatting, no coordination - just thinking. This is the purest use case for Opus:

**Iterative Deliberation:**
- Building on prior deliberations
- Generating new perspectives and insights
- Questioning assumptions
- Exploring implications

**Question Resolution:**
- Identifying open questions
- Reasoning through to answers
- Recognizing when questions can't be answered yet
- Generating new questions from analysis

**Confidence Assessment:**
- Evaluating readiness to proceed
- Identifying gaps in understanding
- Recognizing when more deliberation is needed
- Balancing thoroughness with progress

**Output Quality Impact:**
Poor thinking → Weak understanding → Poor decisions → Failed execution

The quality of deliberation directly determines the quality of task execution. There's no intermediate buffer - thinking quality **is** the output. This is exactly where Opus should be used: when reasoning quality is the deliverable.

**Alternative Considerations:**
None - this is the clearest Tier 3 candidate. Deliberative reasoning is Opus's primary strength.

---

#### `/stark:learn`

**Assignment:** Tier 3 (Opus 4.5)
**Note:** Could potentially be Tier 2, but complexity warrants Tier 3

**What It Does:**
Collects improvement feedback through 14 sequential prompts with extensive examples, validation, and intelligent reprompting.

**Complexity Profile:**
- **Reasoning Depth:** Low - mostly presenting questions and collecting responses
- **Output Quality:** High sensitivity - quality feedback enables quality improvements
- **Orchestration:** None
- **Data Processing:** Mixed - collecting structured feedback with validation
- **Validation:** Heavy - 14 prompts with min length checks, vagueness detection, intelligent reprompting

**Why Tier 3:**
At first glance, this looks like a survey/questionnaire that could be Tier 2 or even Tier 1. However, the implementation reveals complexity:

**14 Sequential Validation-Heavy Prompts:**
Each prompt has:
- Extensive examples to guide responses
- Multiple reprompting scenarios based on response quality
- Context-specific validation rules
- Intelligent feedback on why responses are insufficient

**Quality Validation Requirements:**
- Minimum 10 characters (prevent "N/A" or "None")
- Vagueness detection ("sort of", "maybe", "unclear")
- Context-specific validation (e.g., prompt 5 requires list format)
- Intelligent reprompting with new examples when validation fails

**Importance of Quality:**
The learning system's effectiveness depends entirely on feedback quality:
- Vague feedback → Vague improvement proposals → Wasted effort
- Shallow feedback → Shallow understanding → Missed opportunities
- Poor feedback → Poor proposals → Potential harm to commands

**Feedback is the seed for improvement proposals.** If feedback quality is poor, the entire learning system fails. The extensive validation and intelligent reprompting are designed to ensure high-quality feedback, which requires sophistication.

**Why Not Tier 2:**
While Sonnet could potentially handle the validation logic, the 14-prompt sequence with context-sensitive intelligent reprompting is complex enough to warrant Opus's capabilities. The quality sensitivity (garbage in, garbage out for the improvement system) supports the higher tier.

**Monitoring Recommendation:**
If Sonnet becomes capable of handling this structured interaction effectively, could consider downgrading to Tier 2.

---

#### `/stark:learn-propose`

**Assignment:** Tier 3 (Opus 4.5)

**What It Does:**
Analyzes feedback patterns to generate ranked improvement proposals: pattern detection, proposal generation, evidence-based justification, impact assessment, and multi-factor ranking.

**Complexity Profile:**
- **Reasoning Depth:** High - pattern analysis, creative proposal generation, evaluation
- **Output Quality:** High sensitivity - poor proposals waste time or harm commands
- **Orchestration:** None
- **Data Processing:** Analysis - synthesizing insights from feedback
- **Validation:** Heavy - structured proposal format with evidence requirements

**Why Tier 3:**
This combines analytical and creative work at high quality requirements:

**Pattern Detection:**
- Analyzing feedback across multiple entries
- Identifying common themes and issues
- Clustering related problems
- Recognizing systemic issues vs. one-off problems

**Proposal Generation:**
- Creating specific, actionable improvement recommendations
- Drafting prompt modifications that address issues
- Ensuring proposals are implementable
- Balancing specificity and flexibility

**Evidence-Based Justification:**
- Linking proposals to specific feedback entries
- Explaining why the proposal addresses the issue
- Providing rationale for the approach

**Impact and Risk Assessment:**
- Evaluating positive impact of proposals
- Identifying potential risks or unintended consequences
- Considering command dependencies and framework coherence

**Multi-Factor Ranking:**
- Scoring proposals on impact, effort, risk
- Prioritizing highest-value improvements
- Justifying ranking decisions

**Output Quality Impact:**
- Poor pattern detection → Missing important issues or seeing false patterns
- Weak proposals → Wasted implementation effort
- Bad proposals → Broken commands, framework damage
- Poor ranking → Wrong priorities, low-value work first

This is sophisticated analytical and generative work where quality is critical. Opus's capabilities are essential for:
- Nuanced pattern recognition
- Creative yet grounded proposal generation
- Multi-criteria evaluation and ranking
- Evidence-based reasoning

**Alternative Considerations:**
None - this is clear Tier 3 work combining analysis, creativity, and critical evaluation.

---

## Edge Cases and Borderline Commands

### 1. `/stark:verify` - Tier 2 (Borderline Tier 3)

**Current Assignment:** Tier 2 (Sonnet 4.5)

**Case for Tier 2 (Current):**
- Acceptance criteria are pre-defined in REPORT.md
- Verification is structured: check criterion → document evidence → determine PASS/FAIL
- While quality matters, verification is against known standards, not creative evaluation
- Sonnet excels at structured validation and attention to detail
- Cost-effective for a frequently-used command

**Case for Tier 3 (Alternative):**
- Verification quality is critical - false positives cause problems downstream
- Requires judicious evidence evaluation - what constitutes sufficient evidence?
- May need to interpret complex technical criteria
- High-stakes binary decision (PASS/FAIL) determines workflow progression
- Verification errors are costly (either blocking valid work or allowing invalid work)

**Decision Rationale:**
Kept in Tier 2 because the criteria provide clear targets. This is careful inspection against defined standards rather than open-ended evaluation. Sonnet's systematic approach and attention to detail are well-suited for this structured validation.

**Monitoring Strategy:**
- Track verification error rates (false positives and false negatives)
- If errors become common, especially false positives, escalate to Tier 3
- Monitor user feedback on verification quality
- Consider A/B testing: run sample verifications with both Sonnet and Opus to compare

**Upgrade Triggers:**
- Verification error rate > 10%
- User complaints about verification quality
- Complex criteria requiring sophisticated interpretation
- High-stakes projects where verification errors are particularly costly

---

### 2. `/stark:learn-apply` - Tier 2 (Borderline Tier 3)

**Current Assignment:** Tier 2 (Sonnet 4.5)

**Case for Tier 2 (Current):**
- Changes are pre-specified in approved proposals (no creative decision-making required)
- Execution-focused: apply changes, validate, create backups
- Precision and careful execution matter more than reasoning depth
- Sonnet excels at attention to detail and systematic validation
- Reasonable cost for relatively infrequent operations

**Case for Tier 3 (Alternative):**
- Modifying command prompts is high-stakes - errors could break STARK framework
- Requires understanding YAML frontmatter, markdown structure, semantic integrity
- "Applying improvement" may require interpretation of how to integrate proposals
- Complex rollback scenarios if something breaks
- Commands have dependencies - breaking one could affect others

**Decision Rationale:**
Kept in Tier 2 because the proposals explicitly specify what to change. The task is precise execution with extensive validation, not creative problem-solving. The risk is managed through:
- Pre-specified changes (no interpretation needed)
- Extensive validation (pre and post application)
- Backup creation (rollback capability)
- Structured verification (semantic integrity checks)

Sonnet's strengths in careful execution and systematic validation are appropriate for this use case.

**Monitoring Strategy:**
- Track application errors and command breakage
- Monitor semantic integrity issues
- Review rollback frequency
- Collect feedback on application quality

**Upgrade Triggers:**
- Command breakage rate > 5%
- Frequent semantic integrity issues
- Complex proposal interpretation becoming necessary
- Critical framework commands being modified

---

### 3. `/stark:auto` - Tier 1 (Unconventional)

**Current Assignment:** Tier 1 (Haiku 4)

**Why This Is Surprising:**
This is the "autonomous end-to-end solver" - intuitively seems like it should use the most powerful model!

**Why It's Tier 1 (Key Insight):**
Auto is a **meta-orchestrator** that delegates all actual work to subagents. The orchestrator's responsibilities are:

1. **State Management:** Read solution.md to determine current state
2. **Routing Logic:** Use lookup table to determine next action
3. **Delegation:** Invoke appropriate command via Task tool
4. **Monitoring:** Track completion and iterate

These are simple operations that don't require sophisticated reasoning.

**Where the Intelligence Lives:**
- When auto calls `/stark:new` → that subagent runs with Opus 4.5 (analyzes problem)
- When auto calls `/stark:plan` → that subagent runs with Opus 4.5 (creates plan)
- When auto calls `/stark:run` → that subagent runs with Sonnet 4.5 (executes tasks)
- When auto calls `/stark:verify` → that subagent runs with Sonnet 4.5 (verifies completion)

**The orchestrator is just a router.** The intelligence is in the routed-to commands.

**Benefits of Tier 1:**
- **Speed:** Faster iteration through the heartbeat loop
- **Cost:** Lower overhead for coordination
- **Appropriate:** Complexity matches capability

**Alternative Perspective:**
Could use Tier 2 if state management or routing logic becomes sophisticated (e.g., dynamic strategy selection, complex error recovery). Current implementation is straightforward.

---

### 4. `/stark:cleanup` - Tier 1 (Similar to auto)

**Current Assignment:** Tier 1 (Haiku 4)

**Why This Might Seem Wrong:**
Multi-agent cleanup analysis sounds complex and important!

**Why It's Tier 1 (Same Logic as auto):**
Cleanup is an orchestrator that spawns specialized analysis subagents:

1. **Code Quality Analyst** (analyzes code issues)
2. **Config Validator** (checks configurations)
3. **Documentation Reviewer** (evaluates documentation)
4. **Consistency Checker** (finds inconsistencies)

**The cleanup command's job:**
- Spawn these 4 subagents in parallel (simple delegation)
- Collect their results (data aggregation)
- Merge findings (mechanical JSON merge and severity sorting)
- Present report (formatting)
- Manage iteration (simple loop: issues remain? → re-analyze)

**Where the Intelligence Lives:**
In the subagents! Each subagent performs specialized analysis. The orchestrator just coordinates and aggregates.

**Aggregation Is Mechanical:**
- Merge JSON objects from all subagents
- Sort issues by severity (Critical, High, Medium, Low)
- Format as report
- Count issue types

This is algorithmic processing, not reasoning.

**Benefits of Tier 1:**
- Fast coordination (Haiku's speed reduces orchestration overhead)
- Cost-effective (lower cost for coordination work)
- Appropriate (simple coordination logic matches Haiku's capabilities)

**Alternative Perspective:**
Could use Tier 2 if aggregation becomes sophisticated (e.g., resolving conflicts between subagent findings, synthesizing insights across findings). Current implementation is straightforward merging.

---

### 5. `/stark:learn` - Tier 3 (Could Be Tier 2)

**Current Assignment:** Tier 3 (Opus 4.5)

**Why This Might Be Overassigned:**
It's a questionnaire/survey - seems like it could be simpler?

**Why It's Tier 3 (Complexity Analysis):**
The 14-prompt sequence has surprising complexity:

**Extensive Validation Per Prompt:**
- Minimum 10 characters (prevent dismissive "N/A" responses)
- Vagueness detection (reject "sort of", "maybe", "unclear")
- Format validation (e.g., prompt 5 requires list format)
- Context-specific rules for each prompt

**Intelligent Reprompting:**
- Detects why response failed validation
- Provides context-specific examples to guide better responses
- Multiple reprompting strategies based on failure type
- Maintains conversation context across reprompts

**Quality Criticality:**
- Feedback is seed for improvement proposals
- Poor feedback → Poor proposals → Wasted effort or command damage
- "Garbage in, garbage out" applies to the entire learning system
- Heavy validation is designed to prevent garbage feedback

**14 Sequential Prompts:**
Each requiring validation logic and potential reprompting creates a complex interaction flow. Opus's conversational capabilities and quality awareness are valuable here.

**Case for Tier 2:**
- The prompts are highly structured
- Validation is rule-based (though extensive)
- Not much creative reasoning - mostly careful questionnaire management
- Sonnet handles structured interactions well

**Current Decision:**
Kept in Tier 3 initially because the 14-prompt validation-heavy sequence is complex enough to warrant Opus. The quality sensitivity (feedback quality determines proposal quality) supports the higher tier.

**Potential Downgrade:**
If Sonnet proves capable of handling the structured interaction with sufficient quality, could downgrade to Tier 2 to reduce cost.

**Testing Strategy:**
- Run feedback collection sessions with both Opus and Sonnet
- Compare feedback quality (depth, specificity, usefulness)
- Evaluate validation effectiveness (catching vague/shallow responses)
- Assess downstream impact (quality of resulting proposals)
- Decide based on quality-cost tradeoff

---

## Future Refinement Guidance

### Evaluating New Commands

When adding new commands to STARK, use this process to determine tier assignment:

**Step 1: Analyze Complexity Factors**

Score the new command across all five factors:

1. **Reasoning Depth:** Low / Medium / High
   - What level of analytical thinking is required?
   - Is this straightforward logic or complex reasoning?
   - Does it require creative problem-solving?

2. **Output Quality Sensitivity:** Low / Medium / High
   - How much does value degrade if quality is compromised?
   - What's the impact of poor output downstream?
   - Is this a "good enough" situation or "must be excellent"?

3. **Orchestration Needs:** None / Some / Complex
   - Does this command coordinate other agents?
   - If yes, is the orchestration itself complex or simple?
   - Where does the intelligence live - orchestrator or subagents?

4. **Data Processing Type:** Display / Mixed / Analysis
   - Is this primarily retrieval/display or generation/analysis?
   - How much transformation or insight generation is required?

5. **Validation Requirements:** Minimal / Moderate / Heavy
   - How extensive are validation and verification needs?
   - Is validation simple checks or complex evaluation?

**Step 2: Map Factors to Tier**

Use these guidelines:

**Tier 1 Indicators:**
- Reasoning: Low
- Quality: Low
- Orchestration: Complex is OK if the orchestrator logic is simple
- Data: Display or simple coordination
- Validation: Minimal

**Tier 2 Indicators:**
- Reasoning: Medium
- Quality: Medium to High (within structured contexts)
- Orchestration: None or simple
- Data: Execution or Mixed
- Validation: Moderate to Heavy

**Tier 3 Indicators:**
- Reasoning: High
- Quality: High (especially foundational or creative work)
- Orchestration: None (does complex work directly)
- Data: Analysis/Generation
- Validation: Variable (quality comes from reasoning)

**Step 3: Consider Special Cases**

**Orchestrators:**
If the command primarily orchestrates other agents:
- Evaluate the orchestrator's logic complexity, not the delegated work
- Simple state machines and routing logic → Tier 1 (even if delegating complex work)
- Sophisticated coordination and synthesis → Tier 2 or 3

**Borderline Cases:**
If factors conflict (e.g., low reasoning but high quality sensitivity):
- Lean toward higher tier if quality impact is significant
- Consider Tier 2 as the balanced choice
- Document the tradeoff and rationale
- Plan for monitoring and potential adjustment

**Cost-Sensitive Operations:**
For frequently-used commands:
- Start with the tier indicated by complexity
- If cost becomes problematic, consider downgrade with monitoring
- Track quality metrics to ensure downgrade doesn't harm outcomes

**Step 4: Document and Monitor**

For each new command:
- Document tier assignment with justification
- List the key factors driving the decision
- Note any borderline considerations
- Define quality metrics to monitor
- Set triggers for tier reassessment

---

### Reassessing Existing Commands

Commands may need tier reassessment when:

**Capability Changes:**
- Model capabilities improve (e.g., Haiku becomes much stronger → downgrade opportunities)
- Model capabilities differentiate more (e.g., Opus gap widens → upgrade high-stakes commands)

**Command Evolution:**
- Command implementation becomes more sophisticated
- Command implementation becomes simpler or more template-based
- New validation or quality requirements are added
- Requirements are simplified or standardized

**Usage Pattern Changes:**
- Command becomes much more frequently used (cost pressure)
- Command becomes rarely used (cost less important)
- Command becomes more critical to workflow (quality pressure)
- Command becomes routine (quality less critical)

**Performance Data:**
- Quality issues emerge at current tier
- Quality metrics show headroom at current tier
- Cost analysis shows opportunity for optimization
- Error rates trigger tier change

**Reassessment Process:**

1. **Collect Data:**
   - Usage frequency
   - Error rates and types
   - Quality feedback
   - Cost metrics
   - Performance indicators

2. **Reanalyze Complexity:**
   - Have requirements changed?
   - Has implementation changed?
   - Do factors still map to current tier?

3. **Consider Alternatives:**
   - What would upgrade/downgrade accomplish?
   - What are the risks?
   - What metrics would monitor the change?

4. **Test if Possible:**
   - Run sample operations with alternative tier
   - Compare quality, speed, outcomes
   - Assess cost-quality tradeoff

5. **Decide and Document:**
   - Make tier change decision
   - Document rationale thoroughly
   - Update this decision matrix
   - Define ongoing monitoring

---

### Handling Borderline Cases

Some commands will be difficult to tier. Use this framework:

**Identify the Tension:**
- Which factors favor higher tier?
- Which factors favor lower tier?
- What's the core tradeoff?

**Assess Impact:**
- What happens if we choose wrong tier?
- Overtier (too high): Waste cost, slower response
- Undertier (too low): Quality issues, downstream problems

**Which failure mode is worse?**
- If quality failures are costly → lean higher
- If cost/speed is critical → lean lower

**Make Provisional Decision:**
- Choose the tier that addresses the worse failure mode
- Document it as borderline
- Clearly state the tradeoff

**Design Monitoring:**
- Define metrics that would indicate wrong tier
- Set thresholds for tier change
- Plan evaluation timeline

**Review Periodically:**
- Quarterly review of borderline cases
- Check if data supports current tier
- Adjust if evidence warrants

**Example Decision Process:**

Command: `/stark:verify`
- **Tension:** Medium reasoning but high quality sensitivity
- **Tier 2 argument:** Structured validation, defined criteria
- **Tier 3 argument:** High stakes, false positives costly
- **Impact analysis:**
  - Overtier (Tier 3): Higher cost per verification, slower
  - Undertier (Tier 1): Verification errors, workflow problems
- **Worse failure:** Verification errors more costly than speed/cost
- **Decision:** Tier 2 (balanced choice)
- **Monitoring:** Track error rates, upgrade if > 10% errors
- **Rationale:** Sonnet's attention to detail suits structured validation; escalate if evidence shows insufficient quality

---

### Testing Model Assignments

To validate tier assignments:

**A/B Testing Approach:**

1. **Select Commands for Testing:**
   - Borderline cases
   - High-frequency commands (cost impact)
   - High-stakes commands (quality impact)
   - Commands with quality concerns

2. **Run Parallel Trials:**
   - Execute same task with multiple tiers
   - Use realistic scenarios
   - Collect quality metrics
   - Measure performance and cost

3. **Evaluate Results:**
   - Compare output quality (depth, accuracy, completeness)
   - Assess downstream impact (did it cause problems later?)
   - Measure response time
   - Calculate cost difference

4. **Make Data-Driven Decision:**
   - Quality difference justifies cost difference?
   - Unacceptable quality degradation?
   - Acceptable quality at lower cost?
   - Document evidence and decision

**Quality Metrics by Command Type:**

**Analysis Commands (new, plan, task, think):**
- Depth of analysis
- Insight quality
- Completeness of coverage
- Downstream execution success

**Execution Commands (run, verify, complete):**
- Correctness of execution
- Completeness of documentation
- Error handling effectiveness
- Accuracy of verification

**Display Commands (status, list, learn-history):**
- Accuracy of information
- Clarity of presentation
- Response time

**Orchestration Commands (auto, cleanup):**
- Coordination effectiveness
- Error handling
- Iteration efficiency

---

### Overriding Defaults

There may be situations where the default tier should be overridden:

**Project-Specific Overrides:**

High-stakes project where quality is paramount:
- Consider upgrading Tier 2 commands to Tier 3
- Document that this project uses premium model assignments
- Accept higher cost for reduced risk

Learning/experimental project where cost matters:
- Consider downgrading some Tier 3 commands to Tier 2
- Monitor quality carefully
- Accept that some iterations may need rework

**Command-Specific Overrides:**

User explicitly requests higher quality:
- Allow tier override for specific invocations
- Example: `/stark:verify --tier=opus` for critical verification
- Charge the cost to user's explicit request

Complex or novel domain:
- Upgrade tier when problem domain is unfamiliar
- Higher model capability helps with novel situations
- Downgrade as domain becomes familiar and routine

**Implementation Approaches:**

Environment variable override:
```bash
STARK_VERIFY_MODEL=opus /stark:verify ...
```

Command-line flag:
```bash
/stark:verify --model=opus task-01
```

Project-level configuration:
```yaml
# .stark/config.yml
model_overrides:
  verify: opus-4.5
  run: sonnet-4.5
```

**When to Override:**

- Specific high-stakes decisions (verify critical deliverable)
- Novel or complex problem domains
- Quality issues observed with default tier
- Experimental tier testing
- Cost constraints requiring downgrades
- Performance requirements requiring specific models

**When NOT to Override:**

- Routine operations (trust the defaults)
- Well-tested command-tier combinations
- Without monitoring plan (don't override and forget)

---

## Examples: Decision Matrix in Action

### Example 1: Simple Display Command

**Hypothetical Command:** `/stark:diff` - Show differences between two solutions

**Analysis:**

1. **Reasoning Depth:** Low
   - Read two solution.md files
   - Compare fields
   - Format differences
   - No analysis or evaluation

2. **Output Quality Sensitivity:** Low
   - Accuracy matters (show correct differences)
   - Sophistication doesn't matter (simple diff display)
   - User can verify visually

3. **Orchestration:** None
   - Direct operation, no subagents

4. **Data Processing:** Display
   - Pure retrieval and comparison
   - No insight generation

5. **Validation:** Minimal
   - File existence checks
   - Basic format validation

**Tier Decision:** Tier 1 (Haiku 4)

**Rationale:** Pure display operation with minimal reasoning. Haiku's speed is beneficial for user-facing command. Accuracy (correct diff) is achievable with Haiku; sophistication not required.

**Monitoring:** Track complaints about incorrect diffs. If accuracy issues emerge, reconsider.

---

### Example 2: Moderate Execution Command

**Hypothetical Command:** `/stark:clone` - Clone existing solution as template for new solution

**Analysis:**

1. **Reasoning Depth:** Medium
   - Read source solution
   - Determine what to copy vs. customize
   - Adapt names, IDs, metadata
   - Some judgment required (what's template vs. specific?)

2. **Output Quality Sensitivity:** Medium
   - Cloned solution should be correct template
   - Some errors acceptable (user will customize)
   - Not foundational (user will review and adapt)

3. **Orchestration:** None
   - Direct file operations

4. **Data Processing:** Mixed
   - Copy files (retrieval)
   - Adapt content (processing)
   - Generate new IDs (generation)

5. **Validation:** Moderate
   - Ensure valid solution structure
   - Check ID uniqueness
   - Verify required files present

**Tier Decision:** Tier 2 (Sonnet 4.5)

**Rationale:** Requires judgment about what to template vs. customize, but within bounded context. Sonnet's balanced capabilities suit this operational command. Not critical enough for Opus; too complex for Haiku.

**Monitoring:** Track clone success rate. If cloned solutions frequently have issues, consider upgrade.

---

### Example 3: Complex Analysis Command

**Hypothetical Command:** `/stark:analyze-failure` - Analyze why solution failed and recommend improvements

**Analysis:**

1. **Reasoning Depth:** High
   - Review entire solution history
   - Identify failure points
   - Analyze root causes
   - Generate improvement recommendations
   - Requires creative and critical thinking

2. **Output Quality Sensitivity:** High
   - Poor analysis → Wrong lessons learned
   - Weak recommendations → Repeated failures
   - Insights must be actionable and correct

3. **Orchestration:** None
   - Performs analysis directly

4. **Data Processing:** Analysis
   - Deep review of execution logs
   - Pattern recognition across failures
   - Insight generation
   - Recommendation synthesis

5. **Validation:** Moderate
   - Structured output format
   - Quality is in the analysis, not validation

**Tier Decision:** Tier 3 (Opus 4.5)

**Rationale:** Deep analytical work where quality is critical. Failure analysis requires nuanced understanding, creative thinking, and high-quality insights. Poor analysis leads to wrong lessons and repeated mistakes. This is exactly where Opus's superior reasoning is worth the cost.

**Monitoring:** Track whether recommendations lead to improved outcomes. If analysis proves shallow, validate Tier 3 choice. If consistently excellent with Sonnet in testing, could consider downgrade.

---

### Example 4: Orchestration Command

**Hypothetical Command:** `/stark:batch` - Execute multiple solutions in parallel with progress tracking

**Analysis:**

1. **Reasoning Depth:** Low (for orchestrator)
   - Read list of solutions
   - Spawn parallel execution subagents
   - Track progress
   - Aggregate results
   - Simple state management

2. **Output Quality Sensitivity:** Low (for orchestrator)
   - Quality lives in the executed solutions (which use their own tiers)
   - Orchestrator just coordinates

3. **Orchestration:** Complex
   - Parallel multi-solution execution
   - Progress tracking
   - Result aggregation
   - But the orchestration logic itself is straightforward

4. **Data Processing:** Mixed
   - Read solution list (retrieval)
   - Track state (processing)
   - Format progress (display)

5. **Validation:** Minimal
   - Solution existence checks
   - Basic status validation

**Tier Decision:** Tier 1 (Haiku 4)

**Rationale:** Following the auto/cleanup pattern - this is orchestration where intelligence lives in the orchestrated work (the solutions being executed). The batch command just coordinates. Haiku's speed is beneficial for coordination overhead.

**Key Insight:** Each executed solution runs with its own model tier assignments (Opus for /stark:new, Sonnet for /stark:run, etc.). The batch orchestrator doesn't need sophistication.

**Monitoring:** Track orchestration errors. If parallel coordination becomes complex (e.g., dependency management, conflict resolution), reconsider tier.

---

### Example 5: Borderline Case

**Hypothetical Command:** `/stark:refactor` - Refactor solution structure (rename tasks, reorganize, update references)

**Analysis:**

1. **Reasoning Depth:** Medium to High
   - **Medium:** If refactoring is following clear patterns
   - **High:** If refactoring requires design decisions

2. **Output Quality Sensitivity:** High
   - Breaking references would corrupt solution
   - Must maintain consistency across files
   - Errors are costly

3. **Orchestration:** None
   - Direct file operations

4. **Data Processing:** Execution
   - File renaming and restructuring
   - Reference updates
   - Consistency maintenance

5. **Validation:** Heavy
   - Verify all references updated
   - Check consistency across files
   - Validate solution structure

**Tension:**
- Reasoning depth suggests Tier 2 (execution-focused)
- Quality sensitivity suggests Tier 3 (high stakes)

**Decision Process:**

**Impact Analysis:**
- Overtier (Tier 3): Higher cost for refactoring operation
- Undertier (Tier 2): Risk of broken references, corrupted solution

**Which is worse?** Broken solution is much worse than higher cost for occasional operation.

**Provisional Decision:** Tier 3 (Opus 4.5)

**Rationale:**
- High stakes - broken solution is serious problem
- Requires careful tracking of all references
- Consistency maintenance is complex
- While execution-focused, the precision required justifies Opus
- Refactoring is relatively infrequent, so cost is manageable

**Alternative Approach:** Start with Tier 3, collect data, consider Tier 2 if:
- Refactoring becomes routine
- Clear patterns emerge
- Testing shows Sonnet handles it reliably

**Monitoring:**
- Track refactoring errors
- Monitor reference consistency issues
- Collect user feedback
- Test Sonnet on sample refactorings
- Downgrade to Tier 2 if data supports

This exemplifies the borderline decision process: identify tension, assess impact, choose tier addressing worse failure mode, document thoroughly, monitor actively.

---

## Conclusion

The STARK model assignment decision matrix provides a systematic framework for assigning commands to appropriate model tiers. Key principles:

**Differentiation Adds Value:**
Using the right model for each command optimizes quality, cost, and speed across the framework.

**Complexity Drives Assignment:**
Five factors (reasoning depth, output quality sensitivity, orchestration needs, data processing type, validation requirements) determine appropriate tier.

**Orchestrators Can Be Lightweight:**
Commands that delegate complex work to subagents can use lighter models since intelligence lives in the subagents.

**Quality Justifies Cost:**
High-stakes analytical and creative work warrants Opus 4.5, even at higher cost, because poor quality has downstream consequences.

**Balance Is Key:**
Tier 2 (Sonnet 4.5) provides balanced capability for execution and validation commands that need reliability without creative sophistication.

**Monitoring Enables Refinement:**
Tier assignments aren't permanent. Data-driven reassessment ensures assignments remain optimal as capabilities, requirements, and usage evolve.

**Current Distribution (17 Commands):**
- 5 Haiku (29.4%): Display, orchestration
- 6 Sonnet (35.3%): Execution, validation
- 6 Opus (35.3%): Analysis, planning

This distribution reflects STARK's nature as a problem-solving framework: substantial analytical work (Opus), supported by reliable execution (Sonnet), with efficient display and coordination (Haiku).

---

**Last Updated:** 2025-12-15
**Version:** 1.0
**Status:** Active - Subject to refinement based on feedback and performance data
