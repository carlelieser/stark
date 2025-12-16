# Task: Optimize Execution Commands

**Solution:** swift-core-9p2
**Task ID:** task-05-optimize-execution-commands
**Status:** Execution Complete

---

## Description

Apply the optimization playbook to the execution phase commands of the STARK framework: /stark:ready (readiness check), /stark:run (task execution), /stark:verify (completion verification), and /stark:complete (solution finalization). These commands form the core execution cycle and are frequently used in every STARK solution workflow.

---

## Analysis

### Command Overview

The four execution commands serve distinct but interconnected purposes:

1. **/stark:ready** - Validates that a task is ready for execution by checking:
   - Task report exists and is properly formatted
   - Dependencies are satisfied
   - Resources are available
   - Acceptance criteria are clear and testable

2. **/stark:run** - Executes the actual task work by:
   - Loading the task execution plan
   - Performing the planned steps
   - Creating work artifacts
   - Documenting progress and decisions

3. **/stark:verify** - Validates task completion against acceptance criteria by:
   - Reviewing all acceptance criteria
   - Testing completed work
   - Identifying gaps or failures
   - Documenting verification results

4. **/stark:complete** - Finalizes the solution by:
   - Validating all tasks completed
   - Updating solution status
   - Creating final documentation
   - Archiving artifacts

### Current Inefficiency Patterns

Based on the optimization playbook (Task 3), these commands likely exhibit:

**Prompt Verbosity:**
- Detailed explanations that could be condensed
- Redundant instructions across similar sections
- Overly elaborate examples when concise ones would suffice

**Sequential Operations:**
- File reads that could be parallelized
- Independent validation checks performed sequentially
- Documentation updates that don't depend on prior operations

**Redundant Context:**
- Re-loading solution context that may already be in memory
- Repeated instructions about file paths and folder structure
- Duplicate explanations of STARK methodology

**Excessive File Operations:**
- Multiple reads of the same file
- Unnecessary file existence checks
- Redundant directory traversals

### Optimization Opportunities

**High Impact:**
- Parallel file reading in /stark:ready (task report + dependencies)
- Consolidated acceptance criteria checking in /stark:verify
- Streamlined status updates in /stark:complete
- Reduced context loading across all four commands

**Medium Impact:**
- Condensed prompt instructions while preserving clarity
- Optimized markdown formatting instructions
- Simplified error handling patterns

**Low Impact:**
- Minor wording improvements
- Reduced example verbosity
- Consolidated similar instructions

### Quality Preservation

Critical elements that MUST be preserved:

- Complete validation of all acceptance criteria
- Thorough dependency checking
- Comprehensive error reporting
- Clear user feedback on progress
- Accurate status tracking
- Proper documentation generation

### Expected Performance Gains

**Token Reduction:** 30-50% through:
- Condensed prompt instructions (15-20%)
- Eliminated redundancy (10-15%)
- Optimized examples and explanations (5-15%)

**Speed Improvement:** 30-50% through:
- Parallel file operations (20-30%)
- Reduced context loading (5-10%)
- Streamlined processing logic (5-10%)

---

## Acceptance Criteria

- [ ] /stark:ready optimized and tested
- [ ] /stark:run optimized and tested
- [ ] /stark:verify optimized and tested
- [ ] /stark:complete optimized and tested
- [ ] Each command validated against test scenarios
- [ ] Performance improvements measured and documented
- [ ] No degradation in output quality confirmed

---

## Execution Plan

### Step 1: Read Current Command Files

**Action:** Read all four execution command files to establish baseline understanding.

**Details:**
- Read `/Users/devplex/Documents/Projects/Development/stark/.claude-plugin/commands/stark-ready.md`
- Read `/Users/devplex/Documents/Projects/Development/stark/.claude-plugin/commands/stark-run.md`
- Read `/Users/devplex/Documents/Projects/Development/stark/.claude-plugin/commands/stark-verify.md`
- Read `/Users/devplex/Documents/Projects/Development/stark/.claude-plugin/commands/stark-complete.md`
- Use parallel reads to optimize this step

**Output:** Complete understanding of current command structure, prompt patterns, and functionality.

---

### Step 2: Apply Optimization Playbook to /stark:ready

**Action:** Optimize the readiness check command using documented patterns.

**Details:**
- Review baseline metrics for /stark:ready
- Apply playbook optimization techniques:
  - Condense verbose instructions
  - Identify parallel operation opportunities (e.g., reading task report + checking dependencies)
  - Eliminate redundant context loading
  - Streamline validation logic
- Create optimized version of stark-ready.md
- Preserve all validation checks and quality requirements

**Output:** Optimized /stark:ready command file with documented changes.

---

### Step 3: Apply Optimization Playbook to /stark:run

**Action:** Optimize the task execution command using documented patterns.

**Details:**
- Review baseline metrics for /stark:run
- Apply playbook optimization techniques:
  - Condense execution plan instructions
  - Identify parallel operations (e.g., loading resources + checking status)
  - Optimize progress tracking patterns
  - Streamline artifact creation guidance
- Create optimized version of stark-run.md
- Preserve execution quality and documentation standards

**Output:** Optimized /stark:run command file with documented changes.

---

### Step 4: Apply Optimization Playbook to /stark:verify

**Action:** Optimize the verification command using documented patterns.

**Details:**
- Review baseline metrics for /stark:verify
- Apply playbook optimization techniques:
  - Streamline acceptance criteria checking logic
  - Identify parallel validation opportunities
  - Condense testing instructions
  - Optimize result documentation
- Create optimized version of stark-verify.md
- Preserve thorough verification standards

**Output:** Optimized /stark:verify command file with documented changes.

---

### Step 5: Apply Optimization Playbook to /stark:complete

**Action:** Optimize the solution finalization command using documented patterns.

**Details:**
- Review baseline metrics for /stark:complete
- Apply playbook optimization techniques:
  - Streamline completion validation logic
  - Optimize status update operations
  - Condense finalization instructions
  - Parallelize documentation updates where possible
- Create optimized version of stark-complete.md
- Preserve completion quality standards

**Output:** Optimized /stark:complete command file with documented changes.

---

### Step 6: Validate Each Command with Test Scenarios

**Action:** Run test scenarios for each optimized command to ensure functionality and quality.

**Details:**
- Create or identify test tasks for validation
- Test /stark:ready on sample task reports
  - Verify dependency checking works
  - Confirm proper validation of acceptance criteria
  - Ensure clear readiness feedback
- Test /stark:run on executable tasks
  - Verify execution plan is followed
  - Confirm proper artifact creation
  - Ensure progress documentation
- Test /stark:verify on completed tasks
  - Verify all criteria are checked
  - Confirm gap identification works
  - Ensure proper verification reports
- Test /stark:complete on ready solutions
  - Verify all tasks checked
  - Confirm status updates work
  - Ensure proper finalization
- Document any issues or quality concerns

**Output:** Test results for all four commands with pass/fail status and quality assessment.

---

### Step 7: Measure Performance Improvements

**Action:** Compare optimized commands against baseline metrics.

**Details:**
- Measure token usage for each optimized command
- Calculate execution time improvements
- Compare against baseline from Task 1
- Document percentage improvements:
  - Token reduction percentage
  - Speed improvement percentage
  - Output quality assessment
- Create performance comparison table

**Output:** Performance metrics document showing improvements for all four commands.

---

### Step 8: Quality Validation and Rollback Plan

**Action:** Perform final quality validation and establish rollback capability.

**Details:**
- Compare outputs from original vs optimized commands
- Verify no loss of analytical depth
- Confirm all validation checks still execute
- Test edge cases and error conditions
- Create backup of original command files
- Document any quality concerns or edge case behaviors
- Establish clear rollback procedure if issues arise

**Output:** Quality validation report with go/no-go decision for deployment.

---

### Step 9: Document Optimizations and Deploy

**Action:** Document all changes and deploy optimized commands.

**Details:**
- Create optimization summary for each command:
  - List of changes made
  - Performance improvements achieved
  - Quality validation results
- Update command documentation if needed
- Commit optimized command files to git
- Add entry to solution knowledge capture
- Update task status to complete

**Output:** Deployed optimized commands with complete documentation of changes and improvements.

---

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Quality degradation in optimized commands | Medium | High | Thorough validation with test scenarios, side-by-side output comparison, rollback plan ready |
| Breaking changes to command interface | Low | High | Maintain exact same command arguments and output format, test with existing solutions |
| Validation checks accidentally removed | Medium | High | Systematic review of all acceptance criteria checks, validation test suite |
| Performance improvements below 30% target | Medium | Medium | Focus on high-impact optimizations first, parallel operations, measured iteration |
| Edge cases not properly handled | Medium | Medium | Test diverse scenarios, review error handling, validate against existing solutions |
| Readiness checks too permissive after optimization | Low | High | Validate dependency checking, resource verification, criteria validation |
| Verification becomes superficial | Low | High | Ensure all acceptance criteria still checked, test gap identification |
| Completion command misses incomplete tasks | Low | Critical | Thorough testing of task status validation, multiple solution scenarios |

---

## Dependencies

### Required Artifacts from Previous Tasks

**Task 3: Optimization Playbook**
- Complete optimization playbook with patterns and techniques
- Quality preservation guidelines
- Before/after examples

**Task 1: Baseline Metrics**
- Current token usage for ready, run, verify, complete
- Current execution times
- Test scenarios for validation

### File Dependencies

**Command Files (Read + Write):**
- `.claude-plugin/commands/stark-ready.md`
- `.claude-plugin/commands/stark-run.md`
- `.claude-plugin/commands/stark-verify.md`
- `.claude-plugin/commands/stark-complete.md`

**Test Solutions (Read):**
- Existing solutions in `.stark/solutions/` for validation testing
- Sample task reports for readiness testing

**Solution Files (Read):**
- `solution.md` files for completion testing
- Task folder structure for verification testing

### Knowledge Dependencies

**Required Understanding:**
- STARK execution workflow and phase transitions
- Acceptance criteria structure and validation patterns
- Task report format and requirements
- Solution status lifecycle
- Dependency checking mechanisms

### Technical Dependencies

**Tools Required:**
- Read tool for analyzing current commands
- Edit tool for optimizing command files
- Write tool for creating optimized versions
- Bash tool for running test scenarios
- Git for version control and rollback capability

**No External Blockers:**
- All required files are accessible
- Optimization playbook will be available from Task 3
- Test scenarios can be created or reused from existing solutions

### Sequence Dependencies

**Must Complete Before:**
- Task 3: Optimization Playbook Creation (provides optimization techniques)
- Task 1: Baseline Performance Measurement (provides comparison baseline)

**Can Run in Parallel With:**
- None - this task follows Task 4 in the sequence

**Must Complete Before Starting:**
- Task 7: Integration Testing (requires optimized execution commands)
- Task 8: Documentation (requires completed optimizations)
