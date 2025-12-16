# Task: Validate Assignments Against Decision Matrix

**Solution:** model-assignment-3k9
**Task ID:** task-05-validate-assignments
**Status:** Complete

---

## Description

Review all implemented model assignments across the 17 STARK commands to ensure they match the documented decision matrix and rationale. This validation step ensures consistency between the documented three-tier categorization (Haiku 4/Sonnet 4.5/Opus 4.5) and the actual model assignments in the command files.

This task acts as a quality gate to catch:
- Commands missing model assignments
- Incorrect model identifiers
- Mismatches between documented tier and implemented model
- Inconsistencies in assignment rationale

---

## Analysis

### Task Context

This is the fifth task in a six-task solution for assigning default models to STARK commands. The previous tasks have:
1. Analyzed and categorized all 17 commands into three complexity tiers
2. Documented the decision matrix with rationale
3. Located command definition files in `.claude-plugin/commands/`
4. Implemented model assignments in all command files

Now we need to validate that the implementation matches the design.

### Validation Scope

**What to Validate:**
1. **Completeness** - All 17 commands have model assignments
2. **Correctness** - Model identifiers match valid Claude API names
3. **Consistency** - Implemented models match documented tiers
4. **Documentation Alignment** - Implementation reflects decision matrix rationale

**Commands by Expected Tier:**

**Tier 1 - Haiku 4 (Simple/Display):**
- `/stark:status` - Display solution status
- `/stark:list` - List all solutions

**Tier 2 - Sonnet 4.5 (Moderate/Execution):**
- `/stark:setup` - One-time initialization
- `/stark:task` - Task analysis and planning
- `/stark:ready` - Readiness evaluation
- `/stark:run` - Task execution
- `/stark:verify` - Verification against criteria
- `/stark:complete` - Solution finalization
- `/stark:learn` - Structured feedback collection
- `/stark:learn-history` - Display learning data
- `/stark:learn-apply` - Apply improvements

**Tier 3 - Opus 4.5 (Complex/Analysis):**
- `/stark:new` - Problem analysis with 5 Whys
- `/stark:plan` - Complete solution planning
- `/stark:think` - Iterative deliberation
- `/stark:auto` - Autonomous orchestration
- `/stark:cleanup` - Multi-agent analysis
- `/stark:learn-propose` - Pattern analysis and proposal generation

### Valid Model Identifiers

According to Claude API documentation:
- `claude-opus-4-5` (or specific version like `claude-opus-4-5-20251101`)
- `claude-sonnet-4-5` (or specific version like `claude-sonnet-4-5-20250929`)
- `claude-haiku-4` (or specific version)

### Potential Issues to Check

1. **Typos in model names** - e.g., "opus-4.5" instead of "opus-4-5"
2. **Incorrect tier assignments** - e.g., complex commands using Haiku
3. **Missing assignments** - Commands without model specification
4. **Inconsistent formatting** - Different syntax across commands
5. **Documentation drift** - Changes made during implementation not reflected in docs

---

## Acceptance Criteria

- [ ] Each assignment matches documented tier (Haiku/Sonnet/Opus)
- [ ] No commands missing assignments (all 17 have models)
- [ ] Model identifiers are correct (claude-opus-4-5, claude-sonnet-4-5, claude-haiku-4)
- [ ] Documentation and implementation are consistent

---

## Execution Plan

### Step 1: Read All Command Files
Read all 17 command files from `.claude-plugin/commands/` to extract their model assignments.

**Files to read:**
- `stark-setup.md`
- `stark-new.md`
- `stark-plan.md`
- `stark-task.md`
- `stark-think.md`
- `stark-ready.md`
- `stark-run.md`
- `stark-verify.md`
- `stark-complete.md`
- `stark-status.md`
- `stark-list.md`
- `stark-auto.md`
- `stark-cleanup.md`
- `stark-learn.md`
- `stark-learn-history.md`
- `stark-learn-propose.md`
- `stark-learn-apply.md`

### Step 2: Extract Model Assignments
For each command file, identify the model assignment mechanism (likely frontmatter or configuration) and extract the assigned model identifier.

Create a mapping:
```
command -> actual_model -> expected_tier -> expected_model
```

### Step 3: Compare Against Decision Matrix
Compare each command's actual model assignment against the expected tier from the decision matrix documented in the solution.

Flag any discrepancies:
- Wrong tier (e.g., Opus assigned where Sonnet expected)
- Missing assignment
- Invalid model identifier
- Inconsistent formatting

### Step 4: Verify Model Identifiers
Ensure all model identifiers use valid Claude API names:
- Check for typos or incorrect syntax
- Verify versioning if specific versions are used
- Ensure consistency in identifier format across all commands

### Step 5: Cross-Reference Documentation
Check that the decision matrix documentation and any other references (like the categorization table from Task 1) align with the implemented assignments.

### Step 6: Generate Validation Report
Create a comprehensive validation report showing:
- Summary: X/17 commands validated successfully
- Per-command validation results
- List of any discrepancies found
- Recommendations for fixes (if needed)

### Step 7: Update Status
If validation passes (all criteria met), mark task as complete.
If validation fails, document issues and flag for remediation before proceeding to Task 6.

---

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Model identifiers use incorrect syntax | Medium | High | Compare against official Claude API documentation |
| Commands missing assignments | Low | High | Systematic check of all 17 commands |
| Documentation-implementation drift | Medium | Medium | Cross-reference decision matrix with actual files |
| Inconsistent assignment format | Medium | Low | Define standard format in validation |
| Command files not found | Low | High | Verify file paths before reading |

---

## Dependencies

**Must be completed before this task:**
- Task 1: Analyze and Categorize All 17 Commands (provides expected tiers)
- Task 2: Document Model Assignment Decision Matrix (provides rationale)
- Task 3: Locate Command Definition Files (provides file locations)
- Task 4: Implement Model Assignments in Command Files (provides actual implementations)

**Files that must exist:**
- All 17 command files in `.claude-plugin/commands/`
- Decision matrix documentation (in solution.md or separate doc)
- Categorization results from Task 1

**Knowledge required:**
- Valid Claude model identifier syntax
- Expected tier for each command
- Location and format of model assignments in command files
