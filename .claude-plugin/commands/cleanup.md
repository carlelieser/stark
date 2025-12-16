---
model: claude-haiku-4-5-20251001
allowed-tools: Bash, Task, Read, Glob, Edit, Grep
description: Analyze all changes systematically with multiple subagents, deliberate, and iterate until satisfactory
---

## Context

**Scope:** $ARGUMENTS

Default scope: All uncommitted changes in the repository (staged, unstaged, untracked)

## Purpose

Multi-agent cleanup analysis. You are the **orchestrator** - coordinate multiple specialized subagents to analyze changes from different perspectives, aggregate findings, deliberate on quality, and iterate until the codebase reaches a satisfactory state.

---

## Phase 1: Change Detection

Run: `git diff --cached --name-status` (staged), `git diff --name-status` (unstaged), `git ls-files --others --exclude-standard` (untracked), `git diff HEAD --stat` (summary).

Categorize: Code (.py, .js, .ts, etc.), Config (.yaml, .json, etc.), Docs (.md, .rst, etc.), Other.

---

## Phase 2: Parallel Analysis (Spawn Subagents)

For each category with changes, spawn a specialized analysis subagent **in parallel**:

### Code Quality Analyst
```
Task: Analyze [list code files]. Review for: 1) Correctness (logic, bugs, edge cases) 2) Style (consistency, naming) 3) Security (vulnerabilities, secrets) 4) Performance (inefficiencies, leaks) 5) Maintainability (complexity, duplication). Output JSON: {"agent": "code-quality", "findings": [{file, line, severity, category, issue, recommendation}], "summary": {critical, moderate, minor, overall_quality}}
```

### Configuration Validator
```
Task: Analyze [list config files]. Review for: 1) Syntax (valid YAML/JSON/TOML) 2) Schema (required fields, types) 3) Security (no secrets, safe defaults) 4) Consistency (naming, formatting) 5) Completeness (no missing/orphaned refs). Output JSON: {"agent": "config-validator", "findings": [{file, line, severity, category, issue, recommendation}], "summary": {critical, moderate, minor, overall_quality}}
```

### Documentation Reviewer
```
Task: Analyze [list doc files]. Review for: 1) Accuracy (matches implementation) 2) Completeness (all features documented) 3) Clarity (understandable, organized) 4) Consistency (style, terminology) 5) Currency (no outdated refs). Output JSON: {"agent": "documentation-reviewer", "findings": [{file, line, severity, category, issue, recommendation}], "summary": {critical, moderate, minor, overall_quality}}
```

### Consistency Checker
```
Task: Analyze [list all files]. Review for: 1) Cross-file consistency 2) API contracts match 3) Import/export alignment 4) Naming consistency 5) Pattern adherence. Output JSON: {"agent": "consistency-checker", "findings": [{files, severity, category, issue, recommendation}], "summary": {critical, moderate, minor, overall_consistency}}
```

---

## Phase 3: Aggregate Findings

Collect JSON from subagents, merge (remove duplicates), sort by severity, group by file.

Create report: Header (timestamp, scope) → Summary table (agent, critical/moderate/minor counts, quality ratings) → Issues by severity (Critical/Moderate/Minor, grouped by file with category, description, recommendation) → Verdict (SATISFACTORY/NEEDS WORK/UNSATISFACTORY with explanation)

---

## Phase 4: Deliberation Loop

If not SATISFACTORY: Present findings → Identify priorities → Propose fixes → Execute (with approval) → Re-analyze → Repeat (max 5 rounds).

Each round documents: Previous verdict, issues addressed, remaining critical, actions taken, re-analysis results, new verdict/recommendation.

---

## Exit Conditions

| Condition | Action |
|-----------|--------|
| Verdict = SATISFACTORY | Report success, exit |
| No critical issues remain | Report success, note minor issues |
| User accepts current state | Report final state, exit |
| Max 5 deliberation rounds | Report final state, recommend manual review |
| No changes to analyze | Report "nothing to clean up" |

---

## Execution Flow

DETECT changes → SPAWN subagents (parallel) → AGGREGATE findings → JUDGE quality → If unsatisfactory: DELIBERATE & FIX (max 5 rounds) → EXIT

---

## Your Task Now

Execute: Phase 1 (detect changes) → Phase 2 (spawn subagents in parallel) → Phase 3 (aggregate report) → Phase 4 (deliberate if needed) → Exit (final verdict).

Start by running git commands, then spawn appropriate subagents based on file types.
