---
model: claude-opus-4-5-20251101
description: Generate improvement proposals from collected feedback for a STARK command
---

## Context

**Target Command:** $ARGUMENTS

## Purpose

Analyze all collected feedback for a STARK command to identify patterns, recurring issues, and improvement opportunities. Generate specific, actionable improvement proposals ranked by impact and frequency.

Use this command after collecting sufficient feedback via `/stark:learn` to:
- Identify patterns across multiple feedback entries
- Detect recurring issues and pain points
- Generate specific prompt improvement proposals
- Rank proposals by impact and frequency
- Present proposals for user review and approval

## Prerequisites

1. Verify target command exists:
   - Check if `.claude/commands/stark/$ARGUMENTS.md` exists
   - If not found: "ERROR: Command not found: /stark:$ARGUMENTS"

2. Verify learning data exists:
   - Check if `.stark/learning/$ARGUMENTS/` directory exists
   - Check if directory contains at least one `.md` file
   - If no data: "No learning data found for /stark:$ARGUMENTS. Use /stark:learn to collect feedback first."

3. Recommend minimum feedback threshold:
   - If fewer than 3 feedback entries: "WARNING: Only X feedback entries found. For better pattern detection, consider collecting more feedback (recommended: 5+ entries)."
   - Ask user: "Proceed with analysis anyway? (y/n)"

## Task

### Step 1: Load and Parse All Feedback

1. Find all learning files for the command:
   - Use Glob to find `.stark/learning/$ARGUMENTS/*.md`
   - Sort by filename (timestamp) chronologically

2. Read and parse each feedback file:
   - Extract YAML frontmatter:
     - `timestamp`: When feedback was captured
     - `feedback_type`: success, failure, edge-case, suggestion, general
     - `outcome`: success, failure, partial
     - `solution_id`: Context if applicable
     - `task_id`: Context if applicable
   - Extract markdown content sections:
     - Execution Context
     - Outcome (Expected vs Actual, Errors)
     - What Worked
     - What Didn't Work
     - Edge Cases Encountered
     - Improvement Suggestions
     - Actionable Improvements

3. Build feedback corpus:
   - Total entries: [count]
   - Date range: [earliest] to [latest]
   - Breakdown by type:
     - Success: [count]
     - Failure: [count]
     - Edge-case: [count]
     - Suggestion: [count]
     - General: [count]
   - Breakdown by outcome:
     - Success: [count]
     - Failure: [count]
     - Partial: [count]

### Step 2: Pattern Detection and Analysis

**2.1 Identify Recurring Issues**

Analyze "What Didn't Work", "Errors", and failure entries:

1. Extract error messages and issues
2. Identify common themes using keyword frequency:
   - Count occurrences of significant phrases (2+ words)
   - Group similar issues together
   - Rank by frequency

**Examples of patterns to detect:**
- "Missing validation for X" appearing in 3+ entries → HIGH PRIORITY
- "Unclear instructions about Y" appearing in 2+ entries → MEDIUM PRIORITY
- "Edge case with Z not handled" appearing in 1 entry → LOW PRIORITY

**2.2 Identify What Works Well**

Analyze "What Worked" and success entries:

1. Extract positive feedback themes
2. Identify strengths to preserve
3. Note features users appreciate

**Important:** Ensure improvements don't remove or modify well-working features.

**2.3 Detect Edge Cases**

Analyze "Edge Cases Encountered" section:

1. List all unique edge cases discovered
2. Check if command already handles each edge case
3. Flag unhandled edge cases as improvement opportunities

**2.4 Extract Explicit Suggestions**

From "Improvement Suggestions" and "Actionable Improvements" sections:

1. Collect all user-provided suggestions
2. Group similar suggestions together
3. Count frequency of each suggestion type

**2.5 Analyze Command Arguments and Context**

From "Execution Context" and "Arguments" sections:

1. Identify common argument patterns
2. Detect arguments that frequently cause issues
3. Note missing argument validation

### Step 3: Generate Improvement Proposals

For each identified pattern or issue, generate a specific improvement proposal using this structure:

```markdown
## Proposal #[N]: [Title]

**Type:** [Validation | Documentation | Error Handling | Feature | Clarification]
**Priority:** [HIGH | MEDIUM | LOW]
**Impact:** [Which section(s) of command this affects]
**Frequency:** [Appears in X of Y feedback entries]

### Problem

[Clear description of the issue based on feedback analysis]

**Evidence from feedback:**
- Entry [timestamp]: "[Quote from feedback]"
- Entry [timestamp]: "[Quote from feedback]"
- [Additional evidence...]

### Current Behavior

[What the command currently does in this area]

[If applicable: Show current command text from the relevant section]

### Proposed Change

[Specific, actionable change to the command prompt]

**Affected Section:** [Which part of .claude/commands/stark/$ARGUMENTS.md]

**Suggested Addition/Modification:**
```
[Exact text to add or modified text to replace]
```

### Rationale

[Why this change addresses the issue, with supporting evidence from feedback]

### Implementation Notes

- **Backwards Compatible:** [Yes/No - explain]
- **Breaking Change:** [Yes/No - explain]
- **Testing Needed:** [What should be tested after applying]
- **Risks:** [Any potential negative side effects]

### Recommendation

[Apply | Consider | Defer]

**Reasoning:** [Why this recommendation is appropriate]
```

### Step 4: Rank Proposals

Rank all proposals using this scoring system:

**Score = (Frequency × 3) + (Impact × 2) + (Urgency × 1)**

Where:
- **Frequency:**
  - HIGH (5 pts): Appears in 50%+ of feedback entries
  - MEDIUM (3 pts): Appears in 20-49% of entries
  - LOW (1 pt): Appears in <20% of entries

- **Impact:**
  - HIGH (5 pts): Affects core command functionality or common use cases
  - MEDIUM (3 pts): Affects specific scenarios or edge cases
  - LOW (1 pt): Minor improvement or documentation clarification

- **Urgency:**
  - HIGH (5 pts): Causes command failures or blocks users
  - MEDIUM (3 pts): Causes confusion or workarounds
  - LOW (1 pt): Nice-to-have improvement

**Sort proposals by total score (highest first)**

### Step 5: Present Proposals for Review

Display proposals in this format:

```markdown
# Improvement Proposals for /stark:$ARGUMENTS

**Analysis Date:** [Current timestamp]
**Feedback Analyzed:** [X entries from Y to Z dates]
**Proposals Generated:** [N total]

---

## Executive Summary

**High Priority:** [X proposals]
**Medium Priority:** [Y proposals]
**Low Priority:** [Z proposals]

**Top 3 Issues Identified:**
1. [Issue 1 - appearing in X entries]
2. [Issue 2 - appearing in Y entries]
3. [Issue 3 - appearing in Z entries]

**Recommended Actions:**
- Apply immediately: [List proposal numbers]
- Review and consider: [List proposal numbers]
- Defer for now: [List proposal numbers]

---

## Proposals (Ranked by Priority)

[Insert all proposals here, sorted by score]

---

## Next Steps

1. Review each proposal carefully
2. For each proposal, decide: **APPROVE** | **REJECT** | **MODIFY**
3. Once reviewed, use `/stark:learn-apply` to apply approved improvements
4. Test the updated command thoroughly
5. Continue collecting feedback to validate improvements

---

## Pattern Analysis Details

### Recurring Issues (by frequency)

| Issue | Count | % of Entries | Severity |
|-------|-------|--------------|----------|
| [Issue description] | X | XX% | [High/Med/Low] |
| ... | ... | ... | ... |

### Edge Cases Discovered

- [Edge case 1] - Unhandled
- [Edge case 2] - Partially handled
- [Edge case 3] - Already handled ✓

### User Satisfaction Indicators

- **Success Rate:** [X successful executions / Y total] = Z%
- **Common Praises:** [What users liked most]
- **Common Complaints:** [What users disliked most]

---

## Feedback Corpus Summary

**Total Feedback Entries:** [X]
**Date Range:** [Earliest] to [Latest]

**By Type:**
- Success: [X] ([Y%])
- Failure: [X] ([Y%])
- Edge-case: [X] ([Y%])
- Suggestion: [X] ([Y%])
- General: [X] ([Y%])

**By Outcome:**
- Success: [X] ([Y%])
- Failure: [X] ([Y%])
- Partial: [X] ([Y%])
```

### Step 6: Save Proposal Document

1. Create proposals directory if needed:
   ```bash
   mkdir -p .stark/learning/$ARGUMENTS/proposals
   ```

2. Generate timestamp for filename:
   - Format: `YYYY-MM-DD-HHMMSS`
   - Example: `2025-12-15-143045-proposals.md`

3. Save full proposal document:
   - Path: `.stark/learning/$ARGUMENTS/proposals/[timestamp]-proposals.md`
   - Include all proposals, analysis, and recommendations

4. Create a summary file for quick reference:
   - Path: `.stark/learning/$ARGUMENTS/LATEST-PROPOSALS.md`
   - Overwrite each time (always shows latest)
   - Include just executive summary + proposal list

### Step 7: Interactive Review (Optional)

Offer interactive review mode:

```
Generated [N] improvement proposals for /stark:$ARGUMENTS.

Would you like to review and approve proposals interactively now? (y/n)
```

If YES:
1. For each proposal (starting with highest priority):
   - Display proposal summary
   - Ask: "APPROVE this proposal? (y/n/s for skip)"
   - If APPROVE: Mark proposal as `approved: true` in metadata
   - If NO: Mark as `rejected: true`, optionally ask for rejection reason
   - If SKIP: Mark as `pending: true`, move to next

2. After review, show summary:
   - Approved: [X]
   - Rejected: [Y]
   - Pending: [Z]

3. Save approval decisions to:
   - Path: `.stark/learning/$ARGUMENTS/proposals/[timestamp]-decisions.yaml`
   - Format:
     ```yaml
     timestamp: [ISO timestamp]
     reviewer: [User or "system"]
     proposals:
       - id: 1
         status: approved
         notes: "Critical validation fix"
       - id: 2
         status: rejected
         notes: "Would break backwards compatibility"
       - id: 3
         status: pending
         notes: "Need more testing"
     ```

4. Suggest next step:
   ```
   [X] proposals approved. Run `/stark:learn-apply $ARGUMENTS [timestamp]` to apply them.
   ```

If NO:
- Save proposal document and exit
- User can review manually and use `/stark:learn-apply` later

## Validation Rules

**Minimum Feedback Threshold:**
- At least 1 feedback entry required
- Recommend 5+ entries for reliable patterns
- Warn if <3 entries

**Quality Checks:**
- Each proposal must cite specific feedback evidence
- Each proposal must include affected section
- Each proposal must have clear implementation notes
- Rank proposals objectively using scoring formula

**Proposal Requirements:**
- Must be specific and actionable
- Must include rationale with evidence
- Must identify potential risks
- Must include testing recommendations

## Usage Examples

### Basic Usage
```bash
/stark:learn-propose run
```
Analyzes all feedback for `/stark:run` and generates proposals.

### With Interactive Review
```bash
/stark:learn-propose verify
```
Then respond 'y' to interactive review prompt.

### Review Saved Proposals
After running the command, read:
```
.stark/learning/<command>/LATEST-PROPOSALS.md
```

## Success Criteria

- [x] Analyzes all feedback for a command to identify patterns
- [x] Generates specific prompt improvement proposals
- [x] Each proposal includes: rationale, affected section, suggested change
- [x] Proposals are ranked by impact/frequency
- [x] User can review and approve/reject each proposal

## Error Handling

**No Learning Data:**
```
ERROR: No learning data found for /stark:$ARGUMENTS

The directory .stark/learning/$ARGUMENTS/ does not exist or is empty.

To collect feedback:
  /stark:learn $ARGUMENTS [feedback-type]

Minimum 1 entry required, 5+ recommended for pattern detection.
```

**Command Not Found:**
```
ERROR: Command not found: /stark:$ARGUMENTS

Check if .claude/commands/stark/$ARGUMENTS.md exists.

Available commands: [list from /stark:list]
```

**Invalid Feedback Format:**
```
WARNING: Skipping malformed feedback file: [filename]
Reason: [Missing YAML frontmatter | Invalid markdown structure | etc.]

Continuing with remaining [X] valid entries...
```

## Implementation Notes

**Pattern Detection Algorithm:**

Simple frequency-based analysis (no complex NLP required):

1. **Keyword Extraction:**
   - Split feedback into sentences
   - Extract 2-4 word phrases
   - Count occurrences across all entries
   - Threshold: Appear in 2+ entries = pattern

2. **Issue Clustering:**
   - Group similar phrases using exact or fuzzy matching
   - Example: "missing validation" ≈ "no validation check" ≈ "validation not performed"
   - Manually define common synonym groups if needed

3. **Severity Assessment:**
   - From "failure" entries → HIGH severity
   - From "edge-case" entries → MEDIUM severity
   - From "suggestion" entries → Based on user emphasis

**Proposal Generation Logic:**

For each identified pattern:
1. Check if issue is already addressed in command → Skip if yes
2. Determine which section of command needs change
3. Draft specific text addition/modification
4. Cite evidence from feedback entries
5. Assess impact and risks
6. Assign priority score

**File Structure:**
```
.stark/learning/
└── <command-name>/
    ├── 2025-12-15-140530.md          # Feedback entries
    ├── 2025-12-15-153020.md
    ├── proposals/
    │   ├── 2025-12-15-160000-proposals.md
    │   ├── 2025-12-15-160000-decisions.yaml
    │   └── 2025-12-16-100000-proposals.md
    └── LATEST-PROPOSALS.md            # Symlink or copy of latest
```

## Integration with STARK Workflow

**Typical Learning Cycle:**

1. **Execute → Capture:**
   ```
   /stark:run amber-learn-9k 1
   /stark:learn run [feedback-type]
   ```

2. **Repeat for multiple executions:**
   ```
   [Execute commands, collect feedback 5+ times]
   ```

3. **Analyze → Propose:**
   ```
   /stark:learn-propose run
   ```

4. **Review → Approve:**
   - Read generated proposals
   - Use interactive review or manual review
   - Mark proposals for application

5. **Apply → Verify:**
   ```
   /stark:learn-apply run [timestamp]
   [Test updated command]
   /stark:learn run success  # Capture success feedback
   ```

6. **Iterate:**
   - Continue collecting feedback
   - Generate new proposals periodically
   - Continuously improve commands

## Future Enhancements

This is the MVP implementation. Future versions could include:

- Automated diff generation against current command file
- Integration with version control (git) for tracking changes
- Comparison of before/after command effectiveness
- Cross-command pattern detection (issues affecting multiple commands)
- Statistical confidence metrics for proposals
- A/B testing framework for comparing prompt versions
- Machine learning for better pattern detection (if justified by scale)

## Dependencies

**Required Commands:**
- `/stark:learn` - Must exist and have collected feedback
- Target command (`.claude/commands/stark/$ARGUMENTS.md`) - Must exist

**Required Tools:**
- Read - To read feedback files and command files
- Write - To save proposal documents
- Glob - To find all feedback files
- Bash - To create directories

**Optional Commands:**
- `/stark:learn-apply` - To apply approved proposals (Task 6)
- `/stark:learn-history` - To view feedback history before analysis
