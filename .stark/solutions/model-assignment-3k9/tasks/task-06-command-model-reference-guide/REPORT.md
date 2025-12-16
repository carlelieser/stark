# Task: Create Command Model Reference Guide

**Solution:** model-assignment-3k9
**Task ID:** task-06-command-model-reference-guide
**Status:** Complete

---

## Description

Generate a quick reference guide showing all 17 STARK commands with their assigned models for easy lookup and future maintenance. This guide will serve as a single-page reference that developers and users can quickly consult to understand which model each command uses and why.

---

## Analysis

### Purpose and Value

The Command Model Reference Guide serves multiple critical functions:

1. **Quick Lookup**: Provides instant access to model assignments without reading individual command files
2. **Maintenance Tool**: Enables easy auditing and updating of model assignments
3. **Onboarding Resource**: Helps new developers understand the model strategy at a glance
4. **Documentation**: Captures the rationale for the three-tier categorization system
5. **Future Reference**: Serves as baseline for evaluating model assignment effectiveness

### Content Requirements

The reference guide must include:

1. **Overview Section**: Explanation of the three-tier model assignment system
2. **Tier Definitions**: Clear description of Simple/Moderate/Complex tiers
3. **Command Listings**: All 17 commands organized by tier with:
   - Command name
   - Assigned model
   - Brief purpose/rationale
4. **Model Details**: Specifications for each model tier (Opus 4.5, Sonnet 4.5, Haiku 4)
5. **Usage Guidance**: How to interpret and use the reference guide

### Format Considerations

The guide should be:
- **Concise**: Single page or quick-scroll document
- **Scannable**: Use tables or structured lists for easy navigation
- **Clear**: Use consistent formatting and terminology
- **Accessible**: Linked from main STARK documentation (CLAUDE.md)
- **Maintainable**: Easy to update when assignments change

### Integration Points

The guide needs to:
- Be stored in an appropriate location within the project structure
- Be linked from CLAUDE.md for discoverability
- Reference the full decision matrix documentation (Task 2)
- Align with implemented assignments (Task 4)

### Dependencies on Prior Tasks

This task requires completion of:
- **Task 1**: Command categorization must be finalized
- **Task 2**: Decision matrix documentation must exist
- **Task 4**: Model assignments must be implemented
- **Task 5**: Validation must confirm accuracy

---

## Acceptance Criteria

- [ ] Reference guide lists all 17 commands
- [ ] Each command shows assigned model
- [ ] Commands grouped by tier (Simple/Moderate/Complex)
- [ ] Purpose/rationale summary included for each tier
- [ ] Guide is easily accessible (linked from CLAUDE.md or stored in obvious location)
- [ ] Guide includes model specifications (Opus 4.5, Sonnet 4.5, Haiku 4)
- [ ] Formatting is clear and scannable (tables or structured lists)
- [ ] Document includes creation date and version information

---

## Execution Plan

### Step 1: Review Completed Task Outputs

**Details:**
- Read the categorization matrix from Task 1 to get the complete tier assignments
- Review the decision matrix documentation from Task 2 for tier definitions
- Verify implemented assignments from Task 4 to ensure accuracy
- Check validation results from Task 5 for any discrepancies

**Output:** Complete understanding of all command assignments and rationale

### Step 2: Design Reference Guide Structure

**Details:**
- Determine optimal format (table vs. lists vs. hybrid)
- Plan sections: Introduction, Tier Definitions, Command Listings, Usage Notes
- Design layout for scannability and quick lookup
- Decide on file location and naming

**Output:** Clear structure outline for the guide

### Step 3: Create Reference Guide Content

**Details:**
- Write introduction explaining the three-tier system
- Document tier definitions (Simple/Moderate/Complex)
- Create command listings organized by tier:
  - **Tier 3 - Complex (Opus 4.5)**: think, plan, new, learn-propose, cleanup, auto
  - **Tier 2 - Moderate (Sonnet 4.5)**: setup, task, ready, run, verify, complete, learn, learn-history, learn-apply
  - **Tier 1 - Simple (Haiku 4)**: status, list
- Include model specifications and brief rationale for each tier
- Add usage notes and maintenance guidance

**Output:** Complete reference guide document

### Step 4: Integrate with Project Documentation

**Details:**
- Save guide in appropriate location (e.g., `.stark/solutions/model-assignment-3k9/MODEL_REFERENCE.md` or `.claude-plugin/docs/`)
- Add link to CLAUDE.md in appropriate section
- Ensure guide is discoverable through project navigation
- Add cross-references to full decision matrix documentation

**Output:** Reference guide integrated into project documentation structure

### Step 5: Validate Completeness and Accuracy

**Details:**
- Verify all 17 commands are listed
- Confirm model assignments match validated implementation
- Check for clarity and usability
- Ensure all acceptance criteria are met
- Test that links work correctly

**Output:** Validated, complete reference guide ready for use

---

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Prior tasks incomplete | Medium | High | Check task outputs before proceeding; flag missing dependencies |
| Categorization changes during execution | Low | Medium | Reference validated Task 5 output as authoritative source |
| Guide location unclear | Medium | Low | Use solution directory first, can relocate later if needed |
| CLAUDE.md structure unclear | Low | Low | Review file first to find appropriate section for link |
| Format not user-friendly | Medium | Medium | Use table format for primary listings, test readability |
| Guide becomes outdated | Low | Medium | Include maintenance notes and version date in guide |

---

## Dependencies

### Must Exist Before Execution

1. **Task 1 Output**: Complete categorization matrix with all 17 commands assigned to tiers
2. **Task 2 Output**: Decision matrix documentation with tier definitions and rationale
3. **Task 4 Output**: Implemented model assignments in all command files
4. **Task 5 Output**: Validation confirming assignments match documentation

### Required Information

- List of all 17 STARK commands
- Model assignment for each command
- Tier categorization (Simple/Moderate/Complex)
- Brief purpose/rationale for each tier
- Model specifications (Opus 4.5, Sonnet 4.5, Haiku 4)

### Required Access

- Write access to solution directory or documentation directory
- Edit access to CLAUDE.md for adding link
- Read access to prior task outputs

### Success Criteria

This task is complete when:
1. Reference guide file exists with all required content
2. All 17 commands are listed with correct model assignments
3. Commands are organized by tier with clear formatting
4. Guide is linked from CLAUDE.md or other discoverable location
5. All acceptance criteria checkboxes are marked complete
6. Guide is validated for accuracy and completeness
