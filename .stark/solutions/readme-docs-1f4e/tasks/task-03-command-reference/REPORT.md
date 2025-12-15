# Task: Command Reference Documentation

**Solution:** readme-docs-1f4e
**Task ID:** task-03-command-reference
**Status:** Verified - PASS

---

## Description

Create comprehensive command reference table with all 17 STARK commands in a scannable, GitHub-markdown compliant format. The table should provide command names, purposes, and clear usage guidelines to serve as the primary reference for users looking to understand available STARK commands.

---

## Analysis

### Current State

The STARK framework has 17 slash commands distributed across three categories:
1. **Core Workflow Commands** (8): new, plan, task, think, ready, run, verify, complete
2. **Management Commands** (3): status, list, auto
3. **Learning System Commands** (5): learn, learn-history, learn-propose, learn-apply, setup (also includes cleanup)

All commands exist in `.claude-plugin/commands/` directory with full markdown documentation including:
- YAML frontmatter with description field
- Detailed task instructions
- Success criteria
- Examples and usage patterns

### Task Requirements

From solution.md Task 3 acceptance criteria:
- All 17 commands must be listed
- Each command needs: name, purpose, when to use
- Table format must be scannable and GitHub-markdown compliant
- Commands should be grouped logically
- Links to detailed command documentation where applicable
- Special commands (auto, cleanup, learn) should be highlighted

### User Journey

Users will encounter this table when:
1. **First discovering STARK** - Need overview of capabilities
2. **Planning workflow** - Deciding which commands to use
3. **Mid-task reference** - Quick lookup of command purpose
4. **Learning the framework** - Understanding command relationships

The table must serve all these use cases by being:
- **Scannable** - Clear headers, concise descriptions
- **Hierarchical** - Grouped by function
- **Actionable** - Include "when to use" guidance
- **Complete** - All 17 commands present

### Design Considerations

**Format Options:**
1. Single flat table (all 17 commands)
   - Pro: Complete view
   - Con: Overwhelming, hard to scan
2. Multiple tables by category
   - Pro: Easier to scan, logical grouping
   - Con: More space, potential duplication
3. Collapsible sections with tables
   - Pro: Progressive disclosure
   - Con: Requires user interaction

**Recommended:** Multiple tables by category with clear section headers

**Information Architecture:**
- Section 1: Core Workflow (8 commands) - Primary usage pattern
- Section 2: Quality & Analysis (cleanup) - Special highlight
- Section 3: Management (status, list) - Utilities
- Section 4: Autonomous (auto, setup) - Advanced features
- Section 5: Learning System (4 learn commands) - Self-healing

### Command Categorization

After analyzing all 17 command files:

**Core Workflow Commands** (Linear progression):
1. `/stark:new` - Create solution from problem
2. `/stark:plan` - Document full solution plan
3. `/stark:task` - Create task execution report
4. `/stark:think` - Deliberate on task iteratively
5. `/stark:ready` - Check task readiness
6. `/stark:run` - Execute task
7. `/stark:verify` - Verify task completion
8. `/stark:complete` - Finalize solution

**Special Commands** (Highlighted):
- `/stark:auto` - Autonomous end-to-end execution (orchestrator)
- `/stark:cleanup` - Multi-agent quality analysis (quality gate)

**Management Commands**:
- `/stark:status` - Show solution details
- `/stark:list` - List all solutions

**Learning System** (Self-healing):
- `/stark:learn` - Capture command feedback
- `/stark:learn-history` - View learning history
- `/stark:learn-propose` - Generate improvement proposals
- `/stark:learn-apply` - Apply approved improvements

**Setup**:
- `/stark:setup` - Initialize STARK framework

### Key Information Per Command

From command file analysis:

| Command | Purpose (from description field) | When to Use |
|---------|----------------------------------|-------------|
| new | Create a new STARK solution | Starting a new problem |
| plan | Document the full solution plan | After situation analysis |
| task | Create a task execution report | Before executing a task |
| think | Deliberate on a task through iterative analysis | When approach needs refinement |
| ready | Check if a task is ready for execution | Before running a task |
| run | Execute a STARK task | When task is ready |
| verify | Verify task completion against acceptance criteria | After task execution |
| complete | Finalize a STARK solution | When all tasks pass |
| status | Show detailed status of a STARK solution | Checking progress |
| list | List all STARK solutions with their status | Overview of all work |
| auto | Autonomous STARK workflow - solve a problem end-to-end | Fully automated execution |
| setup | Initialize the STARK problem-solving framework | First-time setup |
| cleanup | Analyze all changes systematically with multiple subagents | Before completing solution |
| learn | Capture learnings from STARK command executions | After any command execution |
| learn-history | Display learning history for a STARK command | Reviewing feedback patterns |
| learn-propose | Generate improvement proposals from collected feedback | When 5+ feedback entries exist |
| learn-apply | Apply approved prompt improvement proposals | After proposals approved |

---

## Acceptance Criteria

From solution.md:

- [ ] All 17 commands listed (new, plan, task, think, ready, run, verify, complete, status, list, auto, setup, cleanup, learn, learn-history, learn-propose, learn-apply)
- [ ] Each command has: name, purpose, when to use
- [ ] Table format is scannable and GitHub-markdown compliant
- [ ] Commands grouped logically (e.g., core workflow, learning system, utilities)
- [ ] Links to detailed command documentation where applicable
- [ ] Special commands (auto, cleanup, learn) highlighted

---

## Execution Plan

### Step 1: Design Table Structure
**Action:** Define markdown table structure for README
**Details:**
- Determine column headers: Command | Purpose | When to Use
- Plan section organization (5 sections as outlined)
- Design visual hierarchy with headers and emphasis
- Ensure GitHub markdown compliance (no special characters in tables)

**Output:** Table structure template ready for content

---

### Step 2: Extract Command Information
**Action:** Pull accurate command data from .claude-plugin/commands/
**Details:**
- Read all 17 command files
- Extract description from YAML frontmatter (source of truth)
- Extract key usage patterns from each command's content
- Identify special features (allowed-tools, orchestration, etc.)
- Verify command names match slash command format

**Output:** Structured data for all 17 commands

---

### Step 3: Write Core Workflow Table
**Action:** Document the 8-step linear workflow
**Details:**
- Create markdown table with 3 columns
- List commands in execution order (new → complete)
- Write concise "when to use" for each (1-2 sentences)
- Add introductory paragraph explaining workflow progression
- Emphasize this is the primary usage pattern

**Output:** Core workflow section complete

---

### Step 4: Write Special Commands Section
**Action:** Highlight auto and cleanup with emphasis
**Details:**
- Use bold or emoji to draw attention
- Explain autonomous orchestration (auto)
- Explain quality gate role (cleanup)
- Note these are advanced/special use cases
- Clarify when to use vs manual workflow

**Output:** Special commands section with clear differentiation

---

### Step 5: Write Management & Setup Sections
**Action:** Document utility commands (status, list, setup)
**Details:**
- Group management commands together
- Place setup as initial prerequisite
- Keep descriptions brief (these are self-explanatory)
- Note setup is one-time only

**Output:** Management and setup sections complete

---

### Step 6: Write Learning System Section
**Action:** Document the 4-command self-healing system
**Details:**
- Explain learning system purpose (self-healing)
- Show progression: learn → history → propose → apply
- Note this is optional but recommended
- Emphasize continuous improvement aspect
- Include workflow example if space allows

**Output:** Learning system section complete

---

### Step 7: Add Context and Navigation
**Action:** Provide section introduction and cross-references
**Details:**
- Write brief intro to command reference section
- Add "Quick Start" callout pointing to most common workflow
- Link to detailed command files (if including)
- Note that `/stark:` prefix is required for all commands
- Add footer note about getting help

**Output:** Full command reference with context

---

### Step 8: Validate Table Rendering
**Action:** Verify GitHub markdown compliance
**Details:**
- Check table syntax (pipes, headers, alignment)
- Verify no special characters break tables
- Ensure links are properly formatted
- Test that tables are readable on narrow screens
- Confirm all 17 commands present

**Output:** Validated, render-ready command reference

---

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Command descriptions become stale | Medium | High | Source directly from command YAML frontmatter during execution |
| Table is too wide for GitHub mobile | Low | Medium | Keep columns concise, test rendering, use responsive markdown |
| Users don't understand command progression | Medium | High | Add visual flow indicators, clear "when to use" guidance, workflow diagram |
| Special commands (auto, cleanup) get lost | Low | Medium | Highlight with bold/emphasis, separate section, clear differentiation |
| Learning system seems complex | Medium | Low | Simplify descriptions, note it's optional, provide example workflow |
| Missing commands in final count | Low | High | Validate count equals 17, cross-reference with command files |

---

## Dependencies

**Files to Read:**
- All 17 command files in `.claude-plugin/commands/`:
  - new.md, plan.md, task.md, think.md, ready.md, run.md, verify.md, complete.md
  - status.md, list.md, auto.md, setup.md, cleanup.md
  - learn.md, learn-history.md, learn-propose.md, learn-apply.md

**Information Required:**
- YAML frontmatter `description` field from each command (source of truth)
- Command execution order (from STARK methodology)
- Command categories (from SYSTEM.md and CLAUDE.md)
- Usage patterns (from command content)

**Target File:**
- `/Users/devplex/Documents/Projects/Development/stark/README.md`
- Specifically the "Command Reference" section

**Prerequisites:**
- Task 1 (Structure and Outline) must be complete
- Task 2 (Introduction) should be complete for context
- README.md must exist with section placeholders

**No Blockers:** All required information is available in existing command files.

---

## Notes

**Formatting Standards:**
- Use GitHub-flavored markdown
- Table syntax: `| Column | Column |` with `|---|---|` separator
- Bold for emphasis: `**text**`
- Inline code for commands: `` `/stark:command` ``
- Keep descriptions under 100 characters for scannability

**Content Guidelines:**
- Purpose: What the command does (from YAML description)
- When to Use: Specific scenario or workflow stage
- Avoid jargon, use clear language
- Be consistent in voice and structure
- Focus on user benefit, not technical implementation

**Quality Checks:**
- Count: Exactly 17 commands listed
- Accuracy: Descriptions match command files
- Completeness: All three columns filled for every command
- Consistency: Parallel structure across descriptions
- Scannability: Can find any command in <10 seconds

---

**STATUS:** Ready for deliberation with `/stark:think`
