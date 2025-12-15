---
allowed-tools: Read, Write, Edit, Glob, Bash
description: Apply approved prompt improvement proposals to STARK commands
---

## Context

**Command:** $1
**Proposal ID:** $2 (optional - if omitted, will list all approved proposals)

Apply approved improvements to STARK command prompts while preserving structure and functionality.

## Task

Apply validated prompt improvements to a STARK command file.

### Step 1: Validate Inputs

1. Verify command exists at `.claude/commands/stark/$1.md`
2. Check for approved proposals in `.stark/learning/$1/proposals/`
3. If no proposal ID provided, list all approved proposals and prompt for selection

### Step 2: Load Proposal

1. Read the approved proposal file:
   - `.stark/learning/$1/proposals/approved-$2.md` (if ID provided)
   - Or list all `approved-*.md` files for selection
2. Parse proposal to extract:
   - Target section/area for improvement
   - Specific changes to apply
   - Rationale for the improvement
   - Expected impact

### Step 3: Create Backup

Before ANY modification:

1. Create backup directory: `.stark/learning/$1/backups/`
2. Copy current command file to:
   - `.stark/learning/$1/backups/$1-[timestamp].md`
3. Record backup metadata:

```markdown
# Backup Metadata

**Original File:** .claude/commands/stark/$1.md
**Backup Created:** [ISO timestamp]
**Reason:** Applying proposal $2
**Backup Location:** .stark/learning/$1/backups/$1-[timestamp].md
```

### Step 4: Apply Improvements

1. Read current command file at `.claude/commands/stark/$1.md`
2. Parse YAML frontmatter (lines between `---` markers)
3. Apply improvements:
   - **PRESERVE** YAML frontmatter exactly (description, allowed-tools, etc.)
   - **MODIFY** only the approved sections specified in proposal
   - **MAINTAIN** markdown structure and formatting
   - **KEEP** all existing success criteria unless explicitly updated
4. Add version history comment at end of file:

```markdown
---

<!--
IMPROVEMENT HISTORY:
- [timestamp] Applied proposal $2: [brief description]
  Rationale: [why this change was made]
  Backup: .stark/learning/$1/backups/$1-[timestamp].md
-->
```

### Step 5: Validate Modified File

1. Check YAML frontmatter is still valid:
   - Opens with `---`
   - Closes with `---`
   - Contains required fields (description)
   - No syntax errors
2. Verify markdown structure:
   - Headers are properly formatted
   - Code blocks are closed
   - Lists are properly indented
3. Confirm no accidental deletions:
   - All original sections present (unless explicitly removed by proposal)
   - Success criteria preserved

### Step 6: Record Application

Create application record at `.stark/learning/$1/proposals/applied-$2.md`:

```markdown
# Proposal Application Record

**Proposal ID:** $2
**Command:** $1
**Applied:** [ISO timestamp]
**Applied By:** Claude Code

---

## Changes Made

[Specific changes applied to the command file]

---

## Validation Results

- [x] YAML frontmatter valid
- [x] Markdown structure intact
- [x] Backup created successfully
- [x] Version history updated

---

## Backup Location

`.stark/learning/$1/backups/$1-[timestamp].md`

---

## Notes

[Any observations or additional context about the application]
```

### Step 7: Report Results

Provide summary:
- What was changed
- Where the backup is located
- Validation status
- Next steps (test the command, provide feedback)

## Safety Measures

**CRITICAL SAFEGUARDS:**

1. **ALWAYS** create backup before ANY modification
2. **NEVER** modify YAML frontmatter structure (only preserve it)
3. **NEVER** apply proposals without explicit approval indicator
4. **VALIDATE** before writing modified file
5. **ABORT** if any validation fails - restore from backup

**Rollback Procedure:**

If anything goes wrong:
1. Copy backup file back to `.claude/commands/stark/$1.md`
2. Record rollback in `.stark/learning/$1/rollbacks/`
3. Document what went wrong
4. Preserve original backup

## Success Criteria

- [ ] Target command file identified and validated
- [ ] Approved proposal loaded successfully
- [ ] Backup created before modification
- [ ] Improvements applied to correct sections only
- [ ] YAML frontmatter integrity preserved
- [ ] Markdown structure validated
- [ ] Version history comment added
- [ ] Application record created
- [ ] Summary report provided

## Error Handling

**If command doesn't exist:**
- Report: "Command '$1' not found at .claude/commands/stark/$1.md"
- List available STARK commands

**If no approved proposals:**
- Report: "No approved proposals found for command '$1'"
- Suggest: "Use /stark:learn $1 to capture feedback first"

**If proposal file corrupt/invalid:**
- Report error details
- Do NOT proceed with application
- Suggest manual review

**If validation fails:**
- Restore from backup immediately
- Document validation failure
- Report specific validation errors
- Preserve both backup and failed modification for analysis

## Example Usage

```bash
# List all approved proposals for 'think' command
/stark:learn-apply think

# Apply specific approved proposal
/stark:learn-apply think proposal-001

# Apply proposal with full ID
/stark:learn-apply run approved-2024-12-15-001
```

## Integration

This command works with:
- `/stark:learn` - Collects feedback that generates proposals
- `/stark:learn-review` - Reviews and approves proposals
- All STARK commands - Targets for improvement

The learning cycle:
1. Execute command → Experience outcome
2. `/stark:learn <command>` → Capture feedback
3. System analyzes feedback → Generates proposals
4. `/stark:learn-review <command>` → Review and approve proposals
5. `/stark:learn-apply <command> <proposal>` → Apply improvements
6. Test improved command → Iterate
