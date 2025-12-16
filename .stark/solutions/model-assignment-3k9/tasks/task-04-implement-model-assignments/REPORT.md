# Task: Implement Model Assignments in Command Files

**Solution:** model-assignment-3k9
**Task ID:** task-04-implement-model-assignments
**Status:** Complete

---

## Description

Add default model specifications to each of the 17 STARK command files using the appropriate mechanism (frontmatter, configuration, or command structure). This involves updating each command file with the correct model identifier based on the three-tier categorization completed in previous tasks.

---

## Analysis

### Task Context

This task is the core implementation step of the model assignment solution. Previous tasks have:
1. Analyzed and categorized all 17 commands into three tiers
2. Documented the decision matrix and rationale
3. Located the command definition files in `.claude-plugin/commands/`

Now we need to actually implement the model assignments by modifying each command file.

### Technical Considerations

**Command File Format:**
- Need to determine the correct syntax for specifying models in Claude Code plugin commands
- May use frontmatter (YAML-style metadata at file start)
- May use special markers or configuration sections
- Must preserve existing command functionality

**Model Identifiers:**
- Tier 1 (Simple): `claude-haiku-4`
- Tier 2 (Moderate): `claude-sonnet-4-5`
- Tier 3 (Complex): `claude-opus-4-5`

**Command Categorization Reference:**
Based on the decision matrix:

**Tier 1 - Haiku 4:**
- `/stark:status` - Display solution status
- `/stark:list` - List all solutions

**Tier 2 - Sonnet 4.5:**
- `/stark:setup` - One-time initialization
- `/stark:task` - Task analysis and planning
- `/stark:ready` - Readiness evaluation
- `/stark:run` - Task execution
- `/stark:verify` - Verification against criteria
- `/stark:complete` - Solution finalization
- `/stark:learn` - Feedback collection
- `/stark:learn-history` - Display learning data
- `/stark:learn-apply` - Apply improvements

**Tier 3 - Opus 4.5:**
- `/stark:new` - Deep problem analysis
- `/stark:plan` - Complete planning phases
- `/stark:think` - Iterative deliberation
- `/stark:auto` - Autonomous orchestration
- `/stark:cleanup` - Multi-agent analysis
- `/stark:learn-propose` - Pattern analysis and proposal generation

### Implementation Strategy

1. **Examine existing command file** - Read one command to understand current structure
2. **Identify model specification mechanism** - Determine correct syntax
3. **Implement for one tier** - Start with one tier to validate approach
4. **Validate syntax** - Ensure no breaking changes
5. **Roll out to all commands** - Apply to remaining commands
6. **Final verification** - Check all 17 commands

### Risks

1. **Unknown model specification syntax** - May need to research or experiment
2. **Breaking changes** - Incorrect syntax could break commands
3. **Inconsistent implementation** - Need to ensure all commands follow same pattern
4. **Invalid model identifiers** - Must use exact model ID strings

---

## Acceptance Criteria

- [ ] All 17 commands updated with model assignments
- [ ] Syntax follows established patterns
- [ ] No breaking changes to existing functionality
- [ ] Model identifiers are valid and correct

---

## Execution Plan

### Step 1: Examine Command File Structure

Read an existing command file to understand the current format and identify where/how to add model specifications.

**Actions:**
- Read a sample command file (e.g., `/stark:status`)
- Identify frontmatter or configuration sections
- Research Claude Code plugin model specification syntax if needed

**Expected Outcome:**
Clear understanding of where and how to add model assignments.

### Step 2: Determine Model Specification Syntax

Based on the examination, determine the correct syntax for specifying default models.

**Actions:**
- Check for existing model specifications in any command files
- Review Claude Code plugin documentation if available
- Test syntax with a simple command first

**Expected Outcome:**
Validated syntax pattern to use across all commands.

### Step 3: Implement Tier 1 Commands (Haiku 4)

Update the 2 simple commands with `claude-haiku-4` assignment.

**Actions:**
- Update `/stark:status` command file
- Update `/stark:list` command file
- Verify syntax is correct

**Expected Outcome:**
2 commands successfully assigned Haiku 4 model.

### Step 4: Implement Tier 2 Commands (Sonnet 4.5)

Update the 9 moderate complexity commands with `claude-sonnet-4-5` assignment.

**Actions:**
- Update `/stark:setup`
- Update `/stark:task`
- Update `/stark:ready`
- Update `/stark:run`
- Update `/stark:verify`
- Update `/stark:complete`
- Update `/stark:learn`
- Update `/stark:learn-history`
- Update `/stark:learn-apply`
- Verify all syntax is consistent

**Expected Outcome:**
9 commands successfully assigned Sonnet 4.5 model.

### Step 5: Implement Tier 3 Commands (Opus 4.5)

Update the 6 complex commands with `claude-opus-4-5` assignment.

**Actions:**
- Update `/stark:new`
- Update `/stark:plan`
- Update `/stark:think`
- Update `/stark:auto`
- Update `/stark:cleanup`
- Update `/stark:learn-propose`
- Verify all syntax is consistent

**Expected Outcome:**
6 commands successfully assigned Opus 4.5 model.

### Step 6: Final Validation

Verify all 17 commands have correct model assignments matching the decision matrix.

**Actions:**
- Create checklist of all 17 commands with expected models
- Verify each command file contains correct model identifier
- Check for syntax consistency across all files
- Ensure no typos in model identifiers

**Expected Outcome:**
All 17 commands validated with correct model assignments.

---

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Unknown model specification syntax | Medium | High | Examine existing files first, research documentation, test with one command before rolling out |
| Breaking existing functionality | Low | High | Use Edit tool carefully, preserve all existing content, test incrementally |
| Typos in model identifiers | Medium | Medium | Use exact strings from documentation, validate with checklist |
| Inconsistent syntax across files | Low | Medium | Establish pattern with first implementation, apply consistently |
| Command files don't support model specification | Low | Critical | Investigate early in Step 1, adjust approach if needed |

---

## Dependencies

### Must Exist Before Execution:
- All 17 command files in `.claude-plugin/commands/`
- Categorization decision matrix (completed in Task 1)
- Understanding of command file format

### Required Tools:
- Read - To examine existing command files
- Edit - To update command files
- Grep - To search for patterns or verify changes
- Glob - To list all command files

### Required Knowledge:
- Model identifiers: `claude-haiku-4`, `claude-sonnet-4-5`, `claude-opus-4-5`
- Command tier assignments from decision matrix
- Claude Code plugin command file syntax

### Blocking Conditions:
- If command files don't support model specification, need to determine alternative approach
- If model specification syntax is unclear, need to research or test first
