# Task: Polish Command Reference

**Solution:** polished-docs-8x7
**Task ID:** task-06-polish-command-reference
**Status:** Complete

---

## Description

Refine the command reference documentation (`reference/commands.md`) to serve effectively as both a learning resource for new users and quick lookup documentation for experienced users. The command reference currently documents all 17 STARK commands organized by workflow stage but needs polish to improve clarity, consistency, and usability.

Key improvements needed:
- Enhance command descriptions for clarity and conciseness
- Ensure organization by workflow stage is intuitive
- Add context about when/why to use each command
- Improve table formatting for scannability
- Strengthen cross-references to examples and workflow guide
- Ensure consistency with actual command behavior

---

## Analysis

### Current State Assessment

The command reference at `/docs/reference/commands.md` provides:
- Overview of all 17 STARK commands
- Organization by workflow stage (Setup, Solution Creation, Task Execution, Advanced Workflows, Learning System)
- Quick start pattern showing basic command sequence
- Table format with command names and descriptions
- Note about command details and accessing help

**Strengths:**
- Comprehensive coverage of all commands
- Logical organization by workflow stage
- Table format aids quick scanning
- Quick start pattern helps new users
- Links to examples and workflow pages

**Areas for Improvement:**
- Command descriptions could be more concise and action-oriented
- Missing "when to use" context for many commands
- Table formatting could be more scannable
- Cross-references could be more strategic
- Some descriptions may not fully convey command value
- Advanced workflow commands need clearer differentiation

### User Perspective

**New Users Need:**
- Quick understanding of what each command does
- Guidance on which commands to start with
- Clear learning path through command complexity
- Confidence about which command fits their current need

**Experienced Users Need:**
- Fast lookup of command syntax and purpose
- Quick reminder of command parameters
- Easy scanning to find the right command
- Reference while working in solution

### Reference Files Context

The command reference should accurately reflect:
- Actual command behavior from `.claude-plugin/commands/*.md`
- Workflow patterns from `guide/workflow.md`
- Example usage from `guide/examples.md`
- Methodology from `reference/methodology.md`

### Quality Dimensions

**Clarity:**
- Each command description immediately communicates purpose
- Language is precise without being verbose
- Technical terms are used consistently
- Action verbs clearly indicate what command does

**Consistency:**
- Description style uniform across all commands
- Terminology matches other documentation
- Formatting consistent throughout
- Voice and tone professional yet accessible

**Usability:**
- Table organization supports quick scanning
- Headers clearly delineate workflow stages
- Quick start pattern is prominent and accurate
- Cross-references strategically placed

**Completeness:**
- All 17 commands documented
- Each command has sufficient detail
- Context provided where needed
- Links to deeper documentation available

---

## Acceptance Criteria

- [ ] Command descriptions are clear, accurate, and concise
- [ ] Organization by workflow stage makes sense and aids navigation
- [ ] Each command description includes when/why to use it
- [ ] Quick start pattern is clear and helpful
- [ ] Table formatting is consistent and scannable
- [ ] Cross-references to examples and workflow guide are helpful
- [ ] Advanced workflow commands are appropriately highlighted
- [ ] Note about command details is clear and actionable

---

## Execution Plan

### Step 1: Read Current Command Reference
- Read `/docs/reference/commands.md` completely
- Assess current state against acceptance criteria
- Identify specific areas needing improvement
- Note any inconsistencies with actual command behavior

### Step 2: Review Source Command Files
- Check key command files in `.claude-plugin/commands/` for accuracy
- Ensure reference documentation matches actual behavior
- Note any parameters or features not mentioned
- Verify workflow stage categorization is correct

### Step 3: Polish Introduction and Quick Start
- Review and refine opening paragraphs
- Ensure quick start pattern is clear and accurate
- Strengthen value proposition for using reference
- Improve formatting for immediate comprehension

### Step 4: Enhance Setup Commands Section
- Polish `/stark:setup` description
- Ensure clarity about when setup is needed
- Improve formatting and presentation

### Step 5: Enhance Solution Creation Commands
- Refine descriptions for `/stark:new`, `/stark:plan`, `/stark:status`, `/stark:list`
- Add "when to use" context where helpful
- Ensure descriptions are action-oriented
- Verify accuracy of command purposes

### Step 6: Enhance Task Execution Commands
- Polish descriptions for core execution loop: `/stark:task`, `/stark:think`, `/stark:ready`, `/stark:run`, `/stark:verify`, `/stark:complete`
- Clarify workflow progression and dependencies
- Strengthen descriptions to show value of each phase
- Ensure consistency with methodology

### Step 7: Enhance Advanced Workflow Commands
- Refine `/stark:auto` and `/stark:cleanup` descriptions
- Clearly differentiate from basic workflow
- Add context about when advanced commands add value
- Ensure descriptions convey power of autonomous mode

### Step 8: Enhance Learning System Commands
- Polish `/stark:learn`, `/stark:learn-history`, `/stark:learn-propose`, `/stark:learn-apply` descriptions
- Clarify learning system workflow
- Explain value proposition of continuous improvement
- Ensure progression through learning commands is clear

### Step 9: Improve Table Formatting
- Ensure consistent column widths
- Review table header clarity
- Improve visual scannability
- Check alignment and spacing

### Step 10: Strengthen Cross-References
- Review links to examples page
- Add strategic links to workflow guide
- Ensure methodology cross-reference is helpful
- Verify all links work correctly

### Step 11: Polish Closing Content
- Refine note about accessing command details
- Ensure guidance for next steps is clear
- Review overall page flow and structure
- Check consistency with page purpose

### Step 12: Final Quality Review
- Read entire page for flow and consistency
- Verify all acceptance criteria met
- Check for any remaining clarity issues
- Ensure formatting is professional

---

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Command descriptions don't match actual behavior | Low | High | Cross-reference with source command files before finalizing changes |
| Over-editing makes descriptions too verbose | Medium | Medium | Focus on conciseness; use action verbs; limit each description to 1-2 sentences |
| Inconsistency with terminology in other docs | Low | Medium | Review framework.md and workflow.md terminology; maintain consistency |
| Breaking internal links during editing | Low | Medium | Validate all links after editing; test cross-references |
| Table formatting breaks during editing | Low | Low | Preview changes; verify markdown table syntax is correct |
| Changing workflow stage organization incorrectly | Very Low | Medium | Verify with SYSTEM.md methodology; keep current logical organization |
| Missing important command details | Low | Medium | Review each command file in .claude-plugin/commands/ for completeness |

---

## Dependencies

### Prerequisites
- Access to `/docs/reference/commands.md`
- Access to `.claude-plugin/commands/*.md` for accuracy verification
- Read tool for reviewing current content
- Edit tool for making improvements

### Required Context
- Understanding of STARK's five-phase methodology
- Knowledge of all 17 command purposes and parameters
- Familiarity with workflow patterns from guide/workflow.md
- Awareness of examples from guide/examples.md

### Related Documentation
- `guide/workflow.md` - Describes how commands fit into workflows
- `guide/examples.md` - Shows commands in action
- `reference/methodology.md` - Provides theoretical foundation
- `.claude-plugin/commands/` - Source of truth for command behavior

### No Blockers
All required files are accessible and no external dependencies exist. Task can proceed immediately.

---

## Notes

**Key Focus Areas:**
1. **Clarity over comprehensiveness** - Each description should be immediately understandable
2. **Action-oriented language** - Use strong verbs that convey what command accomplishes
3. **Context where it adds value** - Not every command needs "when to use" if purpose is obvious
4. **Scannability** - Users should be able to quickly find the command they need
5. **Accuracy first** - Must reflect actual command behavior, not idealized behavior

**Success Indicators:**
- New user can quickly understand command landscape
- Experienced user can find needed command in <30 seconds
- Descriptions are precise enough to guide command selection
- Reference serves dual purpose: learning and lookup

**Quality Checks:**
- Read each command description aloud - does it make immediate sense?
- Could someone unfamiliar with STARK understand the command purpose?
- Is every word necessary, or can description be tightened?
- Do cross-references add value or just clutter?
