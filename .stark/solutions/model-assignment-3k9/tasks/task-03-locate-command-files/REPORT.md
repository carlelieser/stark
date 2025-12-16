# Task: Locate Command Definition Files

**Solution:** model-assignment-3k9
**Task ID:** task-03-locate-command-files
**Status:** Execution Complete

---

## Description

Find where STARK commands are defined in the codebase to understand the current structure and identify where model assignments should be added. This task involves exploring the file system to locate all 17 STARK command definition files, analyzing their current structure and format, and determining the appropriate mechanism for adding model assignments.

---

## Analysis

### Current State

The STARK framework has 17 commands that need default model assignments:
1. `/stark:setup` - One-time initialization
2. `/stark:new` - Problem analysis using Phase 1
3. `/stark:plan` - Complete Phases 2-4
4. `/stark:task` - Deep task analysis and execution planning
5. `/stark:think` - Iterative deliberation and confidence assessment
6. `/stark:ready` - Readiness evaluation against checklist
7. `/stark:run` - Task execution with allowed tools
8. `/stark:verify` - Verification against acceptance criteria
9. `/stark:complete` - Solution finalization and lessons learned
10. `/stark:status` - Display solution status (lightweight)
11. `/stark:list` - List all solutions (lightweight)
12. `/stark:auto` - Autonomous orchestration via Task tool delegation
13. `/stark:cleanup` - Multi-agent quality analysis
14. `/stark:learn` - Structured feedback collection
15. `/stark:learn-history` - Display learning data
16. `/stark:learn-propose` - Analyze feedback patterns
17. `/stark:learn-apply` - Apply approved improvements

According to the solution's Resources section, these commands should be located in `.claude-plugin/commands/` with filenames like `stark-*.md`.

### Investigation Required

1. **File Location Verification**: Confirm all 17 command files exist at expected paths
2. **Structure Analysis**: Examine file format (frontmatter, markdown structure, metadata)
3. **Model Specification Mechanism**: Determine if/how model assignments are currently supported
4. **Pattern Consistency**: Check if all command files follow the same structure
5. **Plugin System Documentation**: Understand Claude Code plugin system capabilities

### Technical Considerations

**Potential File Formats:**
- Markdown files with YAML frontmatter
- Plain markdown with structured sections
- Configuration-based approach
- Embedded metadata in command definitions

**Model Assignment Mechanisms:**
- Frontmatter field (e.g., `model: claude-opus-4-5`)
- Inline directive or annotation
- Separate configuration file
- Command parameter or argument

### Knowledge Gaps to Address

- Exact syntax for model specification in Claude Code plugins
- Whether model specification is currently supported
- Impact of adding model assignments on existing functionality
- Best practices for plugin command metadata

---

## Acceptance Criteria

- [ ] All 17 command definition files located and paths documented
- [ ] Current file structure and format documented (frontmatter, sections, metadata)
- [ ] Model assignment mechanism identified or designed (how to specify models)
- [ ] Implementation approach determined (where and how to add assignments)
- [ ] Any existing model specifications or patterns documented
- [ ] File consistency verified (all files follow similar structure)

---

## Execution Plan

### Step 1: Locate All Command Definition Files

Use Glob to find all files matching `.claude-plugin/commands/stark-*.md` and verify we have all 17 expected command files.

**Expected files:**
- stark-setup.md
- stark-new.md
- stark-plan.md
- stark-task.md
- stark-think.md
- stark-ready.md
- stark-run.md
- stark-verify.md
- stark-complete.md
- stark-status.md
- stark-list.md
- stark-auto.md
- stark-cleanup.md
- stark-learn.md
- stark-learn-history.md
- stark-learn-propose.md
- stark-learn-apply.md

### Step 2: Examine Command File Structure

Read 2-3 representative command files to understand:
- File format and structure
- Presence of frontmatter or metadata
- Command prompt organization
- Any existing configuration patterns

**Sample files to examine:**
- `stark-status.md` (simple/display command)
- `stark-task.md` (moderate complexity - this command!)
- `stark-think.md` (complex reasoning command)

### Step 3: Search for Model-Related Patterns

Use Grep to search for any existing model specifications or related keywords:
- Search for "model" in command files
- Search for "claude-" (model identifiers)
- Search for "opus", "sonnet", "haiku"
- Look for any configuration or metadata patterns

### Step 4: Analyze Plugin System Capabilities

Search for any plugin documentation or configuration files:
- Look for `.claude-plugin/` directory structure
- Search for README or documentation files
- Check for package.json or plugin.json
- Examine any existing metadata patterns

### Step 5: Determine Implementation Approach

Based on findings, decide:
- Where to add model assignments (frontmatter, config file, etc.)
- What syntax to use
- How to maintain backwards compatibility
- Testing approach to validate changes

### Step 6: Document Findings

Create comprehensive documentation of:
- File locations (absolute paths)
- Current structure
- Recommended implementation mechanism
- Examples of proposed changes
- Any risks or considerations

---

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Command files not in expected location | Low | High | Use comprehensive search patterns (Glob + Bash find) |
| Inconsistent file formats across commands | Medium | Medium | Document variations, establish standard pattern |
| Model specification not supported by plugin system | Medium | High | Design extensible approach that can evolve |
| Breaking existing command functionality | Low | Critical | Examine files carefully, test incrementally |
| Missing documentation on plugin format | High | Medium | Reverse-engineer from existing files, use conservative approach |

---

## Dependencies

### Must Exist Before Execution

- [ ] `.claude-plugin/commands/` directory exists
- [ ] Command files are accessible and readable
- [ ] Solution directory structure already created (`.stark/solutions/model-assignment-3k9/`)

### Must Be True

- [ ] File system access is available
- [ ] Read permissions on command files
- [ ] Ability to examine file structure without modifying

### Information Required

- Understanding of STARK command inventory (17 commands - provided in solution.md)
- Expected file naming pattern (stark-*.md - provided in solution.md)
- Model identifier formats (claude-opus-4-5, claude-sonnet-4-5, claude-haiku-4)

---

## Notes

This is a research and discovery task. The goal is to gather information, not to make changes. All findings should be documented thoroughly to inform Task 4 (implementation).

The quality of this analysis directly impacts the success of the implementation phase. Taking time to understand the current structure will prevent issues later.
