---
model: claude-haiku-4-5-20251001
description: Display learning history for a STARK command
---

## Context

**Command:** $ARGUMENTS

## Purpose

Display all feedback entries captured for a specific STARK command, organized chronologically with summary statistics and pattern analysis.

## Task

1. Parse arguments:
   - Required: `<command-name>` (e.g., "new", "plan", "run")
   - Optional: `--type=<type>` (success, failure, edge-case, suggestion)
   - Optional: `--since=<date>` (YYYY-MM-DD format)

2. Validate inputs:
   - Command name must be a valid STARK command (exists in `.claude/commands/stark/`)
   - If `--since` provided, validate date format

3. Read learning data:
   - Check if `.stark/learning/<command-name>/` exists
   - If not: Display "No learning data found for command '<command-name>'. Use /stark:learn to capture feedback."
   - If exists: Read all `.md` files in the directory

4. Parse feedback entries:
   - Extract YAML frontmatter from each file:
     - `timestamp`: When feedback was captured
     - `type`: Feedback category (success, failure, edge-case, suggestion)
     - `outcome`: Command execution result
     - `user`: Who provided feedback (optional)
   - Extract markdown content (the actual feedback)

5. Apply filters:
   - If `--type` specified: Include only entries matching that type
   - If `--since` specified: Include only entries after that date

6. Sort chronologically (oldest first)

7. Generate summary statistics:
   - Total entries
   - Breakdown by type (success: X, failure: Y, edge-case: Z, suggestion: W)
   - Date range (earliest to latest)
   - Common patterns (identify recurring keywords/phrases across entries)
   - Frequent issues (identify most mentioned problems)

8. Display output:

```
# Learning History: /stark:<command-name>

## Summary
- **Total Entries:** <count>
- **Date Range:** <earliest> to <latest>
- **Breakdown:**
  - Successes: <count>
  - Failures: <count>
  - Edge Cases: <count>
  - Suggestions: <count>

## Common Patterns
<List 3-5 recurring themes identified across entries>

## Frequent Issues
<List top 3-5 most mentioned problems>

## Actionable Feedback
<Highlight entries marked as actionable or containing specific improvement suggestions>

---

## All Entries (Chronological)

### <timestamp> | Type: <type> | Outcome: <outcome>
<feedback content>

---

### <timestamp> | Type: <type> | Outcome: <outcome>
<feedback content>

---

[Continue for all entries...]
```

9. If no entries match filters:
   - Display: "No learning entries found matching filters (type: <type>, since: <date>)"

## Usage Examples

```bash
# View all learning history for the 'run' command
/stark:learn-history run

# View only failures
/stark:learn-history run --type=failure

# View entries since a specific date
/stark:learn-history plan --since=2025-12-01

# View failures since a specific date
/stark:learn-history verify --type=failure --since=2025-12-10
```

## Success Criteria

- [ ] Command can display all feedback entries for a given command
- [ ] Output is organized chronologically
- [ ] Displays summary: total entries, common patterns, frequent issues
- [ ] Highlights actionable feedback vs informational notes
- [ ] Option to filter by feedback type or date range

## Implementation Notes

**Pattern Detection Logic:**
- Common patterns: Extract frequently occurring phrases (2+ word sequences appearing in 3+ entries)
- Frequent issues: Keywords from failure/edge-case entries (e.g., "timeout", "missing file", "validation error")
- Use simple word frequency analysis, not complex NLP

**Actionable vs Informational:**
- Actionable: Entries with type=suggestion OR containing phrases like "should", "could improve", "recommend", "propose"
- Informational: Entries with type=success OR general observations

**File Naming Convention:**
Learning files stored as: `.stark/learning/<command-name>/YYYY-MM-DD-HHMMSS.md`

**YAML Frontmatter Format:**
```yaml
---
timestamp: 2025-12-15T14:30:00Z
type: failure
outcome: error
command_args: "run task-03"
user: devplex
actionable: true
---
```

## Error Handling

- Invalid command name: "Command '<name>' not found in .claude/commands/stark/"
- Invalid date format: "Invalid date format. Use YYYY-MM-DD (e.g., 2025-12-15)"
- Invalid type: "Invalid type. Valid types: success, failure, edge-case, suggestion"
- Missing learning directory but command exists: This is normal, just indicate no data collected yet
