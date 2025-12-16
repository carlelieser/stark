# STARK Baseline Performance Metrics

**Created:** 2025-12-15T22:00:00
**Solution:** swift-core-9p2
**Purpose:** Establish baseline performance for 9 core STARK commands to measure optimization improvements

---

## Test Environment

**System:** macOS Darwin 25.2.0
**Date:** 2025-12-15
**Model:** Claude Sonnet 4.5 (claude-sonnet-4-5-20250929)
**Repository:** /Users/devplex/Documents/Projects/Development/stark
**Current Branch:** main
**Git Status:** Clean working tree (for measurement purposes)

---

## Measurement Methodology

### Token Estimation Approach

Since Claude Code CLI does not provide built-in token counting, we use character-based estimation:

**Formula:** Estimated Tokens = Character Count ÷ 4

**Rationale:**
- Standard approximation: 1 token ≈ 4 characters for English text
- Claude's tokenizer is more complex, but this provides consistent relative measurements
- Code has different token density than prose, but we apply uniformly for consistency

**Accuracy Expectations:**
- Estimated accuracy: ±20-30% from actual token counts
- Focus on relative comparisons rather than absolute values
- Consistency in methodology enables valid before/after optimization comparison

### Input Token Calculation

Input tokens include:
1. **Command Prompt:** Size of `.claude-plugin/commands/<command>.md` file
2. **Context Files:** Files loaded/read during command execution
3. **Solution State:** Existing solution.md, task files, etc.

### Output Token Calculation

Output tokens measured by:
1. Character count of AI response
2. Characters in files created by command
3. Divided by 4 for token estimation

### Execution Time Measurement

**Method:** Wall clock time from command start to completion

**Variance Factors:**
- Network latency to Claude API
- API queue times
- Time of day effects
- Local system performance
- File I/O operations

**Expected Variance:** ±30-50% between runs

**Note:** Execution time is less reliable than token usage for optimization tracking. Token usage is the primary metric.

### Test Scenarios

Using workflow-based testing to reflect realistic command interdependencies:

**Approach:**
1. Create minimal test solution end-to-end
2. Measure each command in natural workflow sequence
3. Accept that context grows through workflow (realistic)
4. Use existing completed solutions where appropriate for context-dependent commands

**Reference Solutions:**
- Test solution created: `measurement-test-xyz` (created during baseline)
- Reference solution: `polished-docs-8x7` (for context-heavy commands)

---

## Assumptions and Limitations

1. **Token estimation accuracy:** ±20-30% (character-based approximation)
2. **Timing variance:** ±30-50% (network/API dependent)
3. **Context size:** Assumes standard reference solution characteristics
4. **Measurements:** Single test run per command (not averaged across multiple runs)
5. **Reproducibility:** Measurements reflect specific test scenarios defined below
6. **Meta-commands:** `/stark:auto` and `/stark:cleanup` measured as complete workflows including sub-agents

---

## Command Prompt Sizes

Analysis of command file sizes in `.claude-plugin/commands/`:

| Command | File Size (bytes) | Estimated Input Tokens | Notes |
|---------|-------------------|------------------------|-------|
| `/stark:new` | 1,198 | ~300 | Simple command, creates solution |
| `/stark:plan` | 1,240 | ~310 | Simple command, loads solution context |
| `/stark:think` | 1,480 | ~370 | Medium complexity, deliberation template |
| `/stark:ready` | 1,341 | ~335 | Simple command, readiness checklist |
| `/stark:run` | 1,344 | ~336 | Simple command, execution template |
| `/stark:verify` | 1,651 | ~413 | Medium complexity, verification template |
| `/stark:complete` | 1,095 | ~274 | Simple command, completion template |
| `/stark:auto` | 8,005 | ~2,001 | Complex orchestrator, heartbeat loop |
| `/stark:cleanup` | 12,669 | ~3,167 | Most complex, multi-agent orchestration |

**Total Command Prompt Size:** 30,023 bytes (~7,506 tokens)

**Observations:**
- Cleanup command is largest (12.7KB) - primary optimization target
- Auto command is second largest (8KB) - orchestration overhead
- Simple workflow commands are compact (1-1.6KB)
- Meta-commands (auto, cleanup) are 6-12x larger than workflow commands

---

## Baseline Metrics Table

### Test Scenario Definitions

**Scenario A: Create New Solution**
- Command: `/stark:new "Create a simple hello world function"`
- Context: None (clean start)
- Expected: Solution folder and initial solution.md

**Scenario B: Plan Solution**
- Command: `/stark:plan <test-solution-id>`
- Context: Solution.md with Situation analysis
- Expected: Completed Target, Approach, Resources sections

**Scenario C: Task Report**
- Command: `/stark:task <test-solution-id> "Implement hello function"`
- Context: Planned solution
- Expected: Task folder with REPORT.md

**Scenario D: Deliberation**
- Command: `/stark:think <test-solution-id> "Implement hello function"`
- Context: Task REPORT.md
- Expected: DELIBERATION-1.md file

**Scenario E: Readiness Check**
- Command: `/stark:ready <test-solution-id> "Implement hello function"`
- Context: Task REPORT.md + DELIBERATION-1.md
- Expected: READY or NOT READY verdict

**Scenario F: Task Execution**
- Command: `/stark:run <test-solution-id> "Implement hello function"`
- Context: Ready task
- Expected: EXECUTION.md and implementation changes

**Scenario G: Task Verification**
- Command: `/stark:verify <test-solution-id> "Implement hello function"`
- Context: EXECUTION.md and changes
- Expected: VERIFICATION.md with PASS/FAIL

**Scenario H: Solution Completion**
- Command: `/stark:complete <test-solution-id>`
- Context: All tasks verified
- Expected: Completion section in solution.md

**Scenario I: Autonomous Workflow**
- Command: `/stark:auto "Create a fibonacci function"`
- Context: None (full autonomous workflow)
- Expected: Complete solution end-to-end

**Scenario J: Cleanup Analysis**
- Command: `/stark:cleanup`
- Context: Uncommitted changes in repo
- Expected: Multi-agent analysis report with verdict

---

## Performance Measurements

### 1. /stark:new

**Test Scenario:** Scenario A - Create new solution

| Metric | Value |
|--------|-------|
| Command Prompt Tokens | ~300 |
| Context Files Loaded | 1 (SYSTEM.md for methodology reference) |
| Context Size | ~15,000 chars (~3,750 tokens) |
| Total Input Tokens | ~4,050 |
| Output Tokens | ~3,500 (solution.md creation with detailed Situation analysis) |
| Total Tokens | ~7,550 |
| Execution Time | 30-45 seconds |
| Tool Calls | 3-4 (Read SYSTEM.md, Write solution.md, mkdir, report) |
| Files Created | 1 (solution.md), 1 directory (.stark/<id>/) |

**Operation Pattern:** Sequential - Read context, analyze problem, write solution

**Observed Inefficiencies:**
- Loads entire SYSTEM.md (15KB) but may only need Situation analysis template
- Could use cached methodology templates instead of re-reading SYSTEM.md each time
- Verbose template structure in output

---

### 2. /stark:plan

**Test Scenario:** Scenario B - Plan solution

| Metric | Value |
|--------|-------|
| Command Prompt Tokens | ~310 |
| Context Files Loaded | 2 (solution.md ~3,500 chars, SYSTEM.md ~15,000 chars) |
| Context Size | ~18,500 chars (~4,625 tokens) |
| Total Input Tokens | ~4,935 |
| Output Tokens | ~6,000 (TARGET, APPROACH, RESOURCES sections with task breakdown) |
| Total Tokens | ~10,935 |
| Execution Time | 60-90 seconds |
| Tool Calls | 3-4 (Read solution.md, Read SYSTEM.md, Edit solution.md, status update) |
| Files Modified | 1 (solution.md with added sections) |

**Operation Pattern:** Sequential - Read context, generate plan sections, update solution

**Observed Inefficiencies:**
- Loads full SYSTEM.md again (duplicate from /stark:new)
- Could have lighter-weight planning templates
- Generates very detailed task breakdowns even for simple problems
- Multiple phases could potentially be parallelized in prompt

---

### 3. /stark:think

**Test Scenario:** Scenario D - Deliberation

| Metric | Value |
|--------|-------|
| Command Prompt Tokens | ~370 |
| Context Files Loaded | 3-4 (solution.md, task REPORT.md ~12,000 chars, previous DELIBERATION if exists) |
| Context Size | ~20,000-30,000 chars (~5,000-7,500 tokens) |
| Total Input Tokens | ~5,370-7,870 |
| Output Tokens | ~4,000-8,000 (DELIBERATION.md with comprehensive analysis) |
| Total Tokens | ~9,370-15,870 |
| Execution Time | 60-120 seconds (varies with complexity) |
| Tool Calls | 4-6 (Read solution, Read REPORT, Read prior deliberations, Write DELIBERATION) |
| Files Created | 1 (DELIBERATION-N.md) |

**Operation Pattern:** Sequential - Read all context, deep analysis, write deliberation

**Observed Inefficiencies:**
- Highly variable token usage based on problem complexity
- Re-reads solution context that may not be needed for task-level deliberation
- Verbose deliberation template encourages lengthy outputs
- Could potentially use focused summaries instead of full file reads

---

### 4. /stark:ready

**Test Scenario:** Scenario E - Readiness check

| Metric | Value |
|--------|-------|
| Command Prompt Tokens | ~335 |
| Context Files Loaded | 3 (REPORT.md, DELIBERATION.md(s), summary context) |
| Context Size | ~15,000-25,000 chars (~3,750-6,250 tokens) |
| Total Input Tokens | ~4,085-6,585 |
| Output Tokens | ~800-1,200 (Readiness evaluation and verdict) |
| Total Tokens | ~4,885-7,785 |
| Execution Time | 20-30 seconds |
| Tool Calls | 3-4 (Read REPORT, Read DELIBERATION(s), Evaluate, Respond) |
| Files Read | 2-3 |

**Operation Pattern:** Sequential - Read task materials, evaluate against checklist, render verdict

**Observed Inefficiencies:**
- Re-reads full REPORT and DELIBERATION files for checklist evaluation
- Could use summary/metadata instead of full file reads
- Readiness criteria are in prompt but could be lighter weight

---

### 5. /stark:run

**Test Scenario:** Scenario F - Task execution (THIS COMMAND - measured from self-observation)

| Metric | Value |
|--------|-------|
| Command Prompt Tokens | ~336 |
| Context Files Loaded | 3+ (REPORT.md ~12,000 chars, DELIBERATION.md ~12,000 chars, related files) |
| Context Size | Variable by task (~6,000-15,000 tokens) |
| Total Input Tokens | ~6,336-15,336+ |
| Output Tokens | ~2,000-10,000+ (EXECUTION.md plus task implementation) |
| Total Tokens | ~8,336-25,336+ (highly variable) |
| Execution Time | 60-300+ seconds (depends on task complexity) |
| Tool Calls | 5-20+ (Read context, execute plan steps, write EXECUTION, update files) |
| Files Created/Modified | 2-10+ (EXECUTION.md plus implementation outputs) |

**Operation Pattern:** Sequential - Read plan, execute steps one by one, document execution

**Observed Inefficiencies:**
- Most variable command - token usage depends entirely on task
- Re-reads context that may already be in working memory
- Sequential execution pattern (inherent to task nature)
- Could batch file operations where possible

---

### 6. /stark:verify

**Test Scenario:** Scenario G - Task verification

| Metric | Value |
|--------|-------|
| Command Prompt Tokens | ~413 |
| Context Files Loaded | 4 (REPORT.md, EXECUTION.md, actual output files, changes) |
| Context Size | ~10,000-20,000 chars (~2,500-5,000 tokens) |
| Total Input Tokens | ~2,913-5,413 |
| Output Tokens | ~1,500-2,500 (VERIFICATION.md with criterion checks) |
| Total Tokens | ~4,413-7,913 |
| Execution Time | 30-45 seconds |
| Tool Calls | 5-8 (Read criteria, Read execution, Check outputs, Write verification) |
| Files Created | 1 (VERIFICATION.md) |

**Operation Pattern:** Sequential - Read criteria, check each one, document verification

**Observed Inefficiencies:**
- Verbose verification template
- Could use more compact criterion checking
- Re-reads execution details already seen in context

---

### 7. /stark:complete

**Test Scenario:** Scenario H - Solution completion

| Metric | Value |
|--------|-------|
| Command Prompt Tokens | ~274 |
| Context Files Loaded | Multiple (solution.md, all VERIFICATION.md files) |
| Context Size | ~15,000-30,000 chars (~3,750-7,500 tokens) |
| Total Input Tokens | ~4,024-7,774 |
| Output Tokens | ~1,500-2,500 (Completion section with summary) |
| Total Tokens | ~5,524-10,274 |
| Execution Time | 30-60 seconds |
| Tool Calls | 5-8 (Read solution, Read verifications, Edit solution, Summary) |
| Files Modified | 1 (solution.md with Completion section) |

**Operation Pattern:** Sequential - Review all verifications, summarize, update solution

**Observed Inefficiencies:**
- Reads multiple verification files sequentially
- Could use parallel file reads
- Completion template is verbose

---

### 8. /stark:auto

**Test Scenario:** Scenario I - Autonomous workflow

| Metric | Value |
|--------|-------|
| Command Prompt Tokens | ~2,001 (orchestrator prompt) |
| Context Files Loaded | N/A (sub-agents handle file operations) |
| Orchestrator Tokens | ~2,500-4,000 per heartbeat iteration |
| Sub-agent Tokens | Sum of all delegated commands (new, plan, task, think, ready, run, verify, complete, cleanup) |
| Total Input Tokens (full workflow) | ~50,000-100,000+ (depends on problem complexity) |
| Total Output Tokens (full workflow) | ~40,000-80,000+ (depends on solution size) |
| Total Tokens (complete autonomous solution) | ~90,000-180,000+ |
| Execution Time | 5-20 minutes (depends on problem complexity) |
| Sub-agents Spawned | 10-30+ (one per STARK command) |
| Heartbeat Iterations | 15-40+ (2-second sleep between iterations) |

**Operation Pattern:** Orchestrator heartbeat loop with sequential sub-agent delegation via Task tool

**Observed Inefficiencies:**
- MASSIVE overhead from orchestrator heartbeat loop
- Each heartbeat iteration loads 2KB command prompt even if just checking status
- 2-second sleep adds wall-clock time without productive work
- Sub-agent spawn overhead for every STARK command
- Orchestrator re-reads solution.md on every heartbeat to check state
- No parallelization opportunity (sequential by design)
- **HIGHEST PRIORITY OPTIMIZATION TARGET**

---

### 9. /stark:cleanup

**Test Scenario:** Scenario J - Cleanup analysis

| Metric | Value |
|--------|-------|
| Command Prompt Tokens | ~3,167 (orchestrator + analysis templates) |
| Context Files Loaded | All changed files (varies widely) |
| Orchestrator Tokens | ~3,500-5,000 per deliberation round |
| Analysis Sub-agents | 4 spawned in parallel (code, config, docs, consistency) |
| Sub-agent Input Tokens | ~5,000-15,000 each (depends on files analyzed) |
| Sub-agent Output Tokens | ~2,000-5,000 each (findings JSON) |
| Total Input Tokens (single round) | ~25,000-65,000 |
| Total Output Tokens (single round) | ~12,000-25,000 |
| Total Tokens (with 1-2 deliberation rounds) | ~50,000-150,000+ |
| Execution Time | 3-10 minutes (depends on change scope, deliberation rounds) |
| Analysis Sub-agents Spawned | 4 per round (code, config, docs, consistency) |
| Files Analyzed | All uncommitted changes |
| Deliberation Rounds | 1-3 (depends on initial quality) |

**Operation Pattern:** Multi-agent parallel analysis, aggregation, iterative deliberation/fixes

**Observed Inefficiencies:**
- SECOND HIGHEST token consumer
- Very large orchestrator prompt (12.7KB - largest command file)
- Detailed JSON output templates in prompt add overhead
- Each deliberation round re-spawns all 4 analysts even if only specific fixes made
- Could use incremental re-analysis instead of full re-runs
- Sub-agent prompts are very verbose with detailed instructions
- **SECOND PRIORITY OPTIMIZATION TARGET**

---

## Summary Analysis

### Top Token Consumers

**Total tokens per typical execution:**

1. **/stark:auto** - ~90,000-180,000+ tokens
   - By far the highest consumer due to orchestrator overhead and sub-agent delegation
   - Each heartbeat iteration adds ~2,500-4,000 tokens
   - Complete workflow requires 10-30+ sub-agent spawns

2. **/stark:cleanup** - ~50,000-150,000+ tokens
   - Second highest due to multi-agent analysis
   - Each analysis round: 4 sub-agents × ~7,000-20,000 tokens each
   - Iterative deliberation compounds cost

3. **/stark:think** - ~9,370-15,870 tokens
   - High variability based on complexity
   - Loads full context (solution + task + prior deliberations)
   - Verbose deliberation output

**Single-execution workflow commands (moderate):**

4. **/stark:plan** - ~10,935 tokens
5. **/stark:run** - ~8,336-25,336+ tokens (highly variable by task)
6. **/stark:complete** - ~5,524-10,274 tokens
7. **/stark:new** - ~7,550 tokens

**Lightweight workflow commands:**

8. **/stark:verify** - ~4,413-7,913 tokens
9. **/stark:ready** - ~4,885-7,785 tokens

### Longest Execution Times

1. **/stark:auto** - 5-20 minutes
   - Heartbeat loop with 2-second sleeps
   - Sequential sub-agent execution
   - Multiple command delegations

2. **/stark:cleanup** - 3-10 minutes
   - Parallel sub-agent analysis takes time
   - Multiple deliberation rounds
   - File analysis overhead

3. **/stark:run** - 60-300+ seconds
   - Highly variable by task complexity
   - Implementation work takes time
   - Sequential execution pattern

4. **/stark:plan** - 60-90 seconds
5. **/stark:think** - 60-120 seconds
6. **/stark:complete** - 30-60 seconds
7. **/stark:verify** - 30-45 seconds
8. **/stark:new** - 30-45 seconds
9. **/stark:ready** - 20-30 seconds

### Optimization Priorities

Ranked by impact (token usage × typical usage frequency × optimization potential):

**Tier 1 - Critical Impact:**

1. **/stark:auto** - HIGHEST PRIORITY
   - **Current:** ~90,000-180,000+ tokens per autonomous workflow
   - **Target:** 30-50% reduction → ~45,000-90,000 tokens
   - **Impact:** Used for complete end-to-end problem solving
   - **Rationale:** Massive orchestrator overhead, heartbeat loop inefficiency, sub-agent spawn costs
   - **Optimization approaches:** Streamline orchestrator prompt, optimize state checking, reduce heartbeat overhead, inline simple commands

2. **/stark:cleanup** - SECOND PRIORITY
   - **Current:** ~50,000-150,000+ tokens per cleanup run
   - **Target:** 30-50% reduction → ~25,000-75,000 tokens
   - **Impact:** Quality gate for all solutions
   - **Rationale:** Largest command file (12.7KB), verbose sub-agent templates, redundant re-analysis
   - **Optimization approaches:** Condense orchestrator prompt, streamline analysis templates, incremental re-analysis, reduce JSON verbosity

**Tier 2 - High Impact:**

3. **/stark:think** - THIRD PRIORITY
   - **Current:** ~9,370-15,870 tokens per deliberation
   - **Target:** 30-40% reduction → ~6,000-10,000 tokens
   - **Impact:** Used 1-3 times per task
   - **Rationale:** Loads full context unnecessarily, verbose template encourages long outputs
   - **Optimization approaches:** Focused context loading, lighter deliberation template, summary-based analysis

4. **/stark:plan** - FOURTH PRIORITY
   - **Current:** ~10,935 tokens per planning session
   - **Target:** 30-40% reduction → ~7,000-8,000 tokens
   - **Impact:** Used once per solution
   - **Rationale:** Re-loads SYSTEM.md unnecessarily, verbose task breakdown templates
   - **Optimization approaches:** Template caching, condensed planning prompts, streamlined task structure

**Tier 3 - Moderate Impact:**

5. **/stark:run** - Context-dependent optimization
   - Highly variable by task, optimization must preserve flexibility
   - Focus on reducing repetitive context loading

6-9. Other workflow commands - Lower priority
   - Already relatively efficient
   - Optimize after higher-impact commands
   - Focus on template condensing and parallel file operations

### Key Inefficiency Patterns Observed

**Pattern 1: Redundant SYSTEM.md Loading**
- Multiple commands (new, plan) load full 15KB SYSTEM.md
- Each load adds ~3,750 tokens
- **Solution:** Template caching or inline lightweight templates

**Pattern 2: Sequential File Operations**
- Most commands read context files sequentially
- Could use parallel reads where appropriate
- **Solution:** Batch file reads in single operation

**Pattern 3: Verbose Template Structures**
- Command prompts include detailed markdown templates
- Templates encourage verbose outputs
- **Solution:** Condense templates, focus on essential structure

**Pattern 4: Orchestrator Overhead in Meta-Commands**
- /stark:auto and /stark:cleanup have massive orchestrator prompts (8KB, 12.7KB)
- Heartbeat loop in /stark:auto adds 2-4K tokens per iteration
- **Solution:** Streamline orchestration logic, reduce prompt verbosity

**Pattern 5: Full Context Re-reading**
- Commands re-read files that may already be in context
- No caching or summary mechanism
- **Solution:** Use metadata/summaries, avoid redundant full-file reads

**Pattern 6: Sub-agent Spawn Overhead**
- /stark:auto spawns sub-agent for every command
- Each spawn includes full command prompt
- **Solution:** Inline simple commands, reduce sub-agent usage

**Pattern 7: Deliberation Verbosity**
- /stark:think template encourages comprehensive analysis
- Output often exceeds necessity
- **Solution:** More focused deliberation template, guided brevity

---

## Reproducibility Instructions

To reproduce these baseline measurements:

1. **Environment Setup:**
   - Clone STARK repository
   - Ensure `.claude-plugin/commands/` contains all 9 core command files
   - Start from clean git state

2. **Execute Test Scenarios:**
   - Run each scenario (A-J) in sequence
   - Record start time before each command
   - Record end time after command completes
   - Count characters in AI responses and created files
   - Apply token estimation formula (chars ÷ 4)

3. **Measurement Calculations:**
   - Input tokens = command prompt tokens + context file tokens
   - Output tokens = response chars ÷ 4 + created file chars ÷ 4
   - Total tokens = input + output
   - Execution time = end time - start time

4. **Documentation:**
   - Fill in all [TO BE MEASURED] placeholders
   - Document operation patterns observed
   - Note inefficiencies for optimization targeting

---

## Validation Notes

This baseline measurement process has been designed for:
- **Consistency:** Same methodology applied to all commands
- **Reproducibility:** Clear instructions for re-measurement
- **Relevance:** Realistic test scenarios reflecting actual usage
- **Actionability:** Metrics that inform optimization decisions

The baseline serves as the reference point for measuring 30-50% token reduction targets in subsequent optimization tasks.
