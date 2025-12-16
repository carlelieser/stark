# STARK Learning System

STARK's self-healing and continuous improvement features.

## Table of Contents

- [Overview](#overview)
- [How It Works](#how-it-works)
- [Commands](#commands)
- [Example Improvements](#example-improvements)
- [Benefits](#benefits)

---

## Overview

STARK's learning system captures execution feedback and uses it to improve command prompts over time. Unlike static frameworks requiring manual updates, STARK evolves based on real-world usage patterns.

When commands produce unexpected results, lack clarity, or miss edge cases, you capture that feedback systematically. The learning system analyzes accumulated feedback to propose targeted improvements, which you review and apply.

This creates a continuous improvement loop:
1. Better prompts lead to better execution
2. Better execution reveals refinement opportunities
3. Refinements make prompts more effective

**Philosophy:** Tools should adapt to their users, not the other way around.

---

## How It Works

```
+------------------------------------------------------------------+
|                     LEARNING SYSTEM FLOW                          |
+------------------------------------------------------------------+
|                                                                   |
|  1. EXECUTION                                                     |
|     Run a STARK command (e.g., /stark:plan)                       |
|     Experience what works or doesn't                              |
|     |                                                             |
|     v                                                             |
|  2. FEEDBACK CAPTURE -> /stark:learn {command} {type}            |
|     Structured interview captures:                                |
|     - Context: Goal, arguments used                               |
|     - Outcome: Success/failure, expected vs actual                |
|     - Learnings: What worked, what didn't                         |
|     - Suggestions: Specific improvements                          |
|     Stored in .stark/learning/{command}/{timestamp}.md            |
|     |                                                             |
|     v                                                             |
|  3. PATTERN ANALYSIS -> /stark:learn-history {command}           |
|     Review all feedback with statistics                           |
|     Identify recurring themes                                     |
|     Distinguish systematic issues from isolated incidents         |
|     |                                                             |
|     v                                                             |
|  4. IMPROVEMENT PROPOSALS -> /stark:learn-propose {command}      |
|     Generates ranked proposals with:                              |
|     - Specific prompt changes                                     |
|     - Rationale from feedback patterns                            |
|     - Impact assessment (high/medium/low)                         |
|     - Risk level                                                  |
|     |                                                             |
|     v                                                             |
|  5. REVIEW & APPLY -> /stark:learn-apply {command}               |
|     Review proposals for alignment                                |
|     Apply approved changes                                        |
|     Track what was changed and why                                |
|     |                                                             |
|     v                                                             |
|  6. IMPROVED COMMANDS                                             |
|     Next execution benefits from learnings                        |
|     Loop continues                                                |
|                                                                   |
+------------------------------------------------------------------+
```

All feedback and proposals are stored in structured markdown, making evolution transparent and reversible.

---

## Commands

### /stark:learn - Capture Feedback

**Purpose:** Systematically capture what worked or didn't while context is fresh.

**When to use:** Immediately after executing a STARK command if you noticed anything unexpected, inefficient, or particularly effective.

**How it works:** Presents a structured interview covering context, outcome, learnings, and improvement suggestions. Responses stored in `.stark/learning/{command}/{timestamp}.md`.

**Arguments:**
- `{command}`: Which command to provide feedback on (e.g., "plan", "run")
- `{type}`: Feedback type - "success", "failure", or "suggestion"

---

### /stark:learn-history - View Learning History

**Purpose:** Review accumulated feedback to identify patterns.

**When to use:** Before proposing improvements, when debugging command behavior, or to check for similar reported issues.

**How it works:** Aggregates all feedback entries with statistics and full details.

**Arguments:**
- `{command}`: Which command's history to view

---

### /stark:learn-propose - Generate Improvements

**Purpose:** Analyze feedback to generate actionable improvement proposals.

**When to use:** After collecting 5+ feedback entries showing consistent patterns.

**How it works:** Uses pattern analysis to identify recurring issues and generate ranked proposals with specific changes, rationale, and impact assessment.

**Arguments:**
- `{command}`: Which command to generate proposals for

---

### /stark:learn-apply - Apply Improvements

**Purpose:** Review and apply approved proposals to command prompts.

**When to use:** After reviewing proposals and confirming alignment with STARK's philosophy.

**How it works:** Presents each proposal for approve/reject decision. Applies changes while preserving structure. Tracks changes for audit trail.

**Arguments:**
- `{command}`: Which command to apply improvements to

---

## Example Improvements

These are illustrative scenarios showing how the learning system could improve commands:

### Scenario: Acceptance Criteria Placement

**Issue:** Users define acceptance criteria after task breakdown, but criteria should guide what tasks are needed.

**Pattern:** Multiple feedback entries mention this sequence issue.

**Improvement:** Move acceptance criteria questions before task breakdown in `/stark:plan`.

**Result:** Task breakdowns become more targeted and aligned with success criteria.

---

### Scenario: Change Tracking

**Issue:** When tasks fail verification, it's difficult to trace exactly what changes were made.

**Pattern:** Failure entries mention insufficient change documentation.

**Improvement:** Enhance `/stark:run` to require explicit documentation of every file changed.

**Result:** Verification becomes more effective, debugging easier.

---

### Scenario: Evidence Requirements

**Issue:** Verification passes with vague assertions rather than concrete evidence.

**Pattern:** Entries note verification is too subjective.

**Improvement:** Modify `/stark:verify` to require specific evidence for each criterion.

**Result:** Verification becomes more rigorous with fewer false positives.

---

## Benefits

- **Continuous Improvement:** STARK evolves immediately based on your usage rather than waiting for releases.

- **Personalization:** The framework adapts to how you specifically use it.

- **Collective Intelligence:** In teams, the system aggregates insights from multiple users.

- **Transparency:** All improvements are tracked with full rationale and reversible.

- **Reduced Friction:** Initial friction points are systematically identified and resolved.

- **Knowledge Preservation:** Feedback documents why improvements matter, preserving institutional knowledge.
