# Task: Analyze and Categorize All 17 Commands

**Solution:** model-assignment-3k9
**Task ID:** task-01-analyze-categorize-commands
**Status:** Executed

---

## Description

Review each of the 17 STARK commands to understand their functionality, cognitive complexity, and resource requirements. Categorize each command into one of three tiers (Simple/Moderate/Complex) based on the decision matrix defined in the solution plan. The categorization will determine which Claude model (Haiku 4, Sonnet 4.5, or Opus 4.5) should be assigned as the default for each command.

---

## Analysis

### Task Requirements

This task serves as the foundation for the entire model assignment solution. Before any implementation can occur, we must systematically analyze each command to understand:

1. **Reasoning Depth** - What level of analysis, evaluation, or creative thinking is required?
2. **Output Quality Sensitivity** - How critical is high-quality output to the command's value?
3. **Orchestration Needs** - Does the command spawn subagents or coordinate complex workflows?
4. **Data Processing Type** - Is it primarily retrieval/display or analysis/generation?
5. **Validation Requirements** - How much structured validation and parsing is needed?

### Complexity Factors Reference

**Tier 1 - Haiku 4 (Simple/Display):**
- Primarily data retrieval and display
- Minimal reasoning required
- Fast response prioritized
- Low quality sensitivity

**Tier 2 - Sonnet 4.5 (Moderate/Execution):**
- Balanced reasoning and execution
- Moderate quality requirements
- Some analysis or validation
- Good speed/quality balance

**Tier 3 - Opus 4.5 (Complex/Analysis):**
- Deep reasoning and analysis required
- High quality critical to value
- Creative problem-solving needed
- Multi-perspective evaluation
- Complex orchestration or generation

### Commands to Analyze

1. `/stark:setup` - One-time initialization, creates SYSTEM.md
2. `/stark:new` - Problem analysis using Phase 1 (Situation Analysis with 5 Whys, constraints)
3. `/stark:plan` - Complete Phases 2-4 (Target, Approach with 3+ solutions, Resources)
4. `/stark:task` - Deep task analysis and execution planning
5. `/stark:think` - Iterative deliberation and confidence assessment
6. `/stark:ready` - Readiness evaluation against checklist
7. `/stark:run` - Task execution with allowed tools
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

### Approach

The analysis will be conducted by:
1. Reading each command file to understand its prompt structure and requirements
2. Evaluating each command against the five complexity factors
3. Assigning a tier based on the evaluation
4. Documenting the rationale for each assignment
5. Identifying any borderline cases that may need special consideration
6. Creating a comprehensive categorization matrix

---

## Acceptance Criteria

- [ ] All 17 commands reviewed
- [ ] Each command assigned to a tier with rationale
- [ ] Categorization documented in a decision table
- [ ] Edge cases or borderline commands flagged for review

---

## Execution Plan

### Step 1: Locate All Command Files

Use Glob to find all STARK command files in `.claude-plugin/commands/` directory. Verify that all 17 commands are present.

**Expected Output:** List of file paths for all command files

### Step 2: Read and Analyze Each Command

Systematically read each command file to understand:
- The prompt structure and instructions
- The cognitive requirements
- Tool usage and orchestration needs
- Output expectations
- Validation and structured generation requirements

**Method:** Use Read tool for each command file, taking notes on complexity factors

### Step 3: Score Each Command Against Complexity Factors

For each command, evaluate on a scale for each factor:
- Reasoning Depth (Low/Medium/High)
- Output Quality Sensitivity (Low/Medium/High)
- Orchestration Needs (None/Some/Complex)
- Data Processing Type (Display/Mixed/Analysis)
- Validation Requirements (Minimal/Moderate/Heavy)

**Method:** Create a scoring matrix in the report

### Step 4: Assign Tiers Based on Evaluation

Apply the tier definitions to assign each command to Tier 1, 2, or 3 based on the aggregate evaluation.

**Decision Rules:**
- If most factors are Low/Minimal/Display → Tier 1 (Haiku 4)
- If factors are balanced or mostly Medium → Tier 2 (Sonnet 4.5)
- If multiple factors are High/Complex/Heavy → Tier 3 (Opus 4.5)

### Step 5: Document Rationale for Each Assignment

Write clear justification for why each command was placed in its tier, referencing specific complexity factors.

**Format:** Command name → Tier → Rationale (2-3 sentences)

### Step 6: Identify and Flag Edge Cases

Note any commands that were borderline between tiers or where there might be reasonable disagreement about the assignment.

**Output:** List of edge cases with alternative perspectives

### Step 7: Create Final Categorization Matrix

Compile all findings into a structured decision table showing:
- Command name
- Assigned tier
- Model assignment
- Key rationale
- Complexity factor scores

**Format:** Markdown table for easy reference

---

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Command files not found in expected location | Low | High | Use Glob to search entire codebase for command files |
| Subjective disagreement on tier assignments | Medium | Medium | Document clear rationale; acknowledge borderline cases |
| Commands may have changed since solution plan | Low | Medium | Read actual files rather than relying on descriptions |
| Missing complexity factors in analysis | Low | High | Use systematic checklist for each command |
| Inconsistent evaluation criteria across commands | Medium | High | Apply same framework to all; review for consistency |

---

## Dependencies

### Must Exist Before Execution:
- Command files in `.claude-plugin/commands/` directory
- Solution file at `.stark/solutions/model-assignment-3k9/solution.md` (already confirmed)
- Access to Read and Glob tools

### Must Be True:
- All 17 commands are implemented and have prompt files
- Command structure is stable and documented
- Decision matrix criteria are well-defined (confirmed in solution.md)

### Information Dependencies:
- Understanding of each command's purpose and workflow
- Knowledge of Claude model capabilities (Opus 4.5, Sonnet 4.5, Haiku 4)
- Familiarity with STARK framework phases and methodology

---

## Next Steps

After report generation:
1. Run `/stark:think` to deliberate on the analysis approach
2. Run `/stark:ready` to verify readiness for execution
3. Run `/stark:run` to perform the actual command analysis and categorization
4. Run `/stark:verify` to ensure all acceptance criteria are met
