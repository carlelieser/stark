---
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

First, detect all changes in the repository:

```bash
# Get comprehensive change summary
echo "=== STAGED CHANGES ==="
git diff --cached --name-status

echo "=== UNSTAGED CHANGES ==="
git diff --name-status

echo "=== UNTRACKED FILES ==="
git ls-files --others --exclude-standard

echo "=== FULL DIFF SUMMARY ==="
git diff HEAD --stat
```

Categorize changes by type:
- **Code**: `.py`, `.js`, `.ts`, `.dart`, etc.
- **Config**: `.yaml`, `.yml`, `.json`, `.toml`, etc.
- **Docs**: `.md`, `.rst`, `.txt`, etc.
- **Other**: Everything else

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

After all subagents complete, aggregate their findings:

1. **Collect** all JSON outputs from subagents
2. **Merge** findings, removing duplicates
3. **Sort** by severity (critical > moderate > minor)
4. **Group** by file for actionability

Create aggregated report:

```markdown
# Cleanup Analysis Report

**Generated:** [timestamp]
**Scope:** [what was analyzed]

---

## Summary

| Agent | Critical | Moderate | Minor | Quality |
|-------|----------|----------|-------|---------|
| Code Quality | X | X | X | [rating] |
| Config Validator | X | X | X | [rating] |
| Documentation | X | X | X | [rating] |
| Consistency | X | X | X | [rating] |
| **TOTAL** | X | X | X | [overall] |

---

## Critical Issues (Must Fix)

### [File Path]
- **[Category]**: [Issue description]
  - Recommendation: [How to fix]

---

## Moderate Issues (Should Fix)

### [File Path]
- **[Category]**: [Issue description]
  - Recommendation: [How to fix]

---

## Minor Issues (Nice to Fix)

### [File Path]
- **[Category]**: [Issue description]
  - Recommendation: [How to fix]

---

## Verdict

**Overall Quality:** [SATISFACTORY / NEEDS WORK / UNSATISFACTORY]

[Explanation of verdict]
```

---

## Phase 4: Deliberation Loop

If verdict is not SATISFACTORY:

### Round N Deliberation

1. **Present** aggregated findings to user
2. **Identify** highest-priority issues to address
3. **Propose** specific fixes for critical issues
4. **Execute** fixes (with user approval)
5. **Re-analyze** changed files
6. **Repeat** until SATISFACTORY or user accepts current state

```
Deliberation Template:

## Deliberation Round [N]

**Previous Verdict:** [rating]
**Issues Addressed:** [count]
**Remaining Critical:** [count]

### Actions Taken
1. [What was fixed]
2. [What was fixed]

### Re-Analysis Results
[Updated findings after fixes]

### New Verdict
**Overall Quality:** [rating]
**Recommendation:** [Continue fixing / Accept current state / Request user input]
```

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

1. **Execute Phase 1**: Detect all changes using git commands
2. **Execute Phase 2**: Spawn analysis subagents in parallel (use multiple Task tool calls in one message)
3. **Execute Phase 3**: Aggregate findings into report
4. **Execute Phase 4**: If not satisfactory, enter deliberation loop
5. **Exit**: Report final verdict

**START NOW**: Run the git commands to detect changes, then spawn the appropriate subagents based on what file types changed.
