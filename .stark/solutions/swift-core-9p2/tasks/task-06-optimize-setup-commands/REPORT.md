# Task: Optimize Setup Commands

**Solution:** swift-core-9p2
**Task ID:** task-06-optimize-setup-commands
**Status:** Complete

---

## Description

Apply the optimization playbook to setup and maintenance commands: /stark:new (solution creation) and /stark:cleanup (multi-agent analysis and cleanup). These commands initialize new STARK solutions and perform comprehensive cleanup analysis, respectively. Both commands need optimization to reduce token usage and improve execution speed while maintaining their core functionality and output quality.

---

## Analysis

### Command Overview

**`/stark:new` - Solution Creation:**
- Purpose: Initialize a new STARK solution with structured problem-solving framework
- Current behavior: Guides through STARK methodology phases, creates solution folder structure
- Primary usage: Start of every STARK workflow
- Token impact: Medium (creates comprehensive initial structure)
- Execution frequency: High (every new solution)

**`/stark:cleanup` - Multi-Agent Cleanup Analysis:**
- Purpose: Systematically analyze all changes with multiple subagents, deliberate, and iterate
- Current behavior: Spawns multiple analysis agents for different perspectives
- Primary usage: Quality assurance and refinement phase
- Token impact: Very high (multiple subagent spawns, comprehensive analysis)
- Execution frequency: Medium (used for quality-critical solutions)

### Key Optimization Opportunities

**For /stark:new:**
1. Verbose methodology explanations could be condensed
2. Sequential file operations (folder creation, file writing) could be streamlined
3. Redundant instructions about STARK framework structure
4. Lengthy examples that could be shortened or referenced
5. Context loading could be optimized for initial setup

**For /stark:cleanup:**
1. Multiple subagent spawns create significant token overhead
2. Redundant analysis instructions across subagents
3. Verbose deliberation prompts
4. Sequential subagent execution could potentially be optimized
5. Heavy context loading for each subagent instance

### Dependencies

- Task 3 (Optimization Playbook Creation) must be complete
- Baseline metrics from Task 1 needed for comparison
- Pattern analysis from Task 2 informs specific optimizations
- Test scenarios must be established for validation

### Risk Considerations

**Risks specific to /stark:new:**
- Breaking solution folder structure could affect all downstream commands
- Incomplete methodology explanation could confuse new users
- Quality of initial setup affects entire solution lifecycle

**Risks specific to /stark:cleanup:**
- Subagent optimization might reduce analysis quality
- Multi-perspective analysis is core value proposition
- Over-optimization could compromise thoroughness

### Success Indicators

- /stark:new executes 30-50% faster while creating identical folder structures
- /stark:cleanup maintains analytical depth with fewer tokens
- Test solutions created with optimized /stark:new work with all other commands
- Cleanup analysis quality remains equivalent or improves
- User experience remains smooth for both commands

---

## Acceptance Criteria

From solution.md Task 6:

- [ ] /stark:new optimized and tested
- [ ] /stark:cleanup optimized and tested
- [ ] Each command validated against test scenarios
- [ ] Performance improvements measured and documented
- [ ] No degradation in output quality confirmed

---

## Execution Plan

### Step 1: Analyze Current Command Structure

**Actions:**
- Read `/stark:new` command file completely
- Read `/stark:cleanup` command file completely
- Document current token counts (from baseline metrics)
- Identify specific inefficiency patterns using playbook
- Map command flow and file operations

**Deliverables:**
- Annotated command files highlighting optimization opportunities
- Pattern match documentation referencing playbook categories
- Current performance baseline for both commands

---

### Step 2: Design Optimizations for /stark:new

**Actions:**
- Apply playbook optimization patterns:
  - Condense verbose methodology explanations
  - Remove redundant framework descriptions
  - Streamline file operation instructions
  - Optimize example content
  - Reduce context loading overhead
- Maintain solution folder structure compatibility
- Preserve methodology integrity
- Document all changes with rationale

**Deliverables:**
- Optimized /stark:new command file
- Change log documenting each optimization
- Estimated token reduction calculation

---

### Step 3: Design Optimizations for /stark:cleanup

**Actions:**
- Apply playbook optimization patterns:
  - Optimize subagent spawn prompts
  - Reduce redundancy across subagent instructions
  - Condense deliberation prompts
  - Streamline analysis coordination
  - Optimize context passing to subagents
- Maintain multi-perspective analysis quality
- Preserve iterative improvement capability
- Document all changes with rationale

**Deliverables:**
- Optimized /stark:cleanup command file
- Change log documenting each optimization
- Estimated token reduction calculation

---

### Step 4: Test /stark:new Optimization

**Actions:**
- Create new test solution using optimized /stark:new
- Verify folder structure matches expected format
- Compare output quality to baseline examples
- Validate compatibility with downstream commands (plan, task, etc.)
- Measure execution time and token usage
- Document any issues or regressions

**Deliverables:**
- Test solution in `.stark/solutions/` folder
- Test report comparing baseline vs optimized performance
- Quality validation checklist completion
- Performance metrics (time, tokens)

---

### Step 5: Test /stark:cleanup Optimization

**Actions:**
- Run optimized /stark:cleanup on existing test solution
- Verify multi-agent analysis maintains depth
- Compare analysis quality to baseline cleanup runs
- Validate deliberation and iteration functionality
- Measure execution time and token usage
- Document any issues or regressions

**Deliverables:**
- Cleanup analysis output from test run
- Test report comparing baseline vs optimized performance
- Quality validation checklist completion
- Performance metrics (time, tokens)

---

### Step 6: Refinement and Validation

**Actions:**
- Address any issues identified in testing
- Fine-tune optimizations to meet quality standards
- Validate 30% performance improvement targets
- Ensure no breaking changes to solution structure
- Get final sign-off on quality maintenance
- Update command files with final optimized versions

**Deliverables:**
- Final optimized command files
- Complete test validation report
- Performance improvement documentation
- Quality assurance confirmation

---

### Step 7: Documentation and Deployment

**Actions:**
- Document optimization patterns applied
- Update command documentation with changes
- Record performance improvements in solution metrics
- Commit optimized command files to repository
- Update user-facing documentation if needed
- Add optimization notes to knowledge base

**Deliverables:**
- Updated command documentation
- Performance metrics added to solution
- Git commit with optimized commands
- Knowledge capture for future reference

---

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Breaking solution folder structure in /stark:new | Low | Critical | Thorough testing with multiple test solutions; maintain exact folder/file naming conventions |
| Reduced analysis quality in /stark:cleanup | Medium | High | Quality validation with side-by-side comparison; preserve all subagent perspectives |
| Incompatibility with existing solutions | Low | High | Test with real solutions from `.stark/solutions/` folder; validate backward compatibility |
| Over-optimization reducing clarity | Medium | Medium | Balance token reduction with maintainability; keep prompts readable |
| Subagent coordination breaks in /stark:cleanup | Low | High | Careful testing of subagent spawning; validate multi-agent workflow |
| User confusion from changed behavior | Low | Medium | Maintain same output format; document changes clearly |
| Token reduction below 30% target | Medium | Low | Apply aggressive optimizations from playbook; iterate if needed |
| Performance regression instead of improvement | Low | Critical | Baseline measurement before changes; rollback if performance degrades |

---

## Dependencies

### Must Be Complete Before Execution:

1. **Task 1: Baseline Performance Measurement**
   - Need current token counts for /stark:new and /stark:cleanup
   - Need execution time baselines
   - Need test scenarios established

2. **Task 2: Inefficiency Pattern Analysis**
   - Need identified patterns that apply to these commands
   - Need frequency analysis to prioritize optimizations
   - Need examples of common inefficiencies

3. **Task 3: Optimization Playbook Creation**
   - Need specific optimization techniques to apply
   - Need quality preservation rules
   - Need before/after examples as guide

### Must Exist Before Execution:

- Existing `/stark:new` and `/stark:cleanup` command files
- `.stark/solutions/` folder with test solutions
- Git repository for version control
- Access to baseline metrics and playbook documents

### Concurrent Tasks:

- Can run in parallel with Task 4 and Task 5 (different commands)
- Should coordinate with Task 7 for integration testing

---

## Notes

- /stark:cleanup is particularly token-intensive due to subagent spawning - this is a high-value optimization target
- /stark:new is critical path for all solutions - must maintain 100% compatibility
- Both commands represent different optimization challenges: setup vs. analysis
- Success here demonstrates playbook effectiveness across diverse command types
