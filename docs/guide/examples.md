---
title: Usage Examples
description: Real-world scenarios demonstrating STARK workflows - basic workflow, autonomous mode, and learning system
---

# Usage Examples

See STARK in action through realistic development scenarios. These examples demonstrate how STARK's structured approach delivers value in common challenges developers face, from adding authentication features to implementing complex notification systems.

The examples progress from manual workflow (maximum control) through autonomous mode (maximum automation) to the learning system (continuous improvement). Each shows when and why you'd use STARK over ad-hoc approaches.

If you're new to STARK, start with the [Framework Overview](/guide/framework) to understand the methodology, then visit the [Getting Started guide](/guide/getting-started) to run your first solution.

## Example 1: Basic Workflow - Adding API Authentication

**Scenario:** You've been asked to add JWT authentication to your REST API. Your first instinct is to search for a JWT library, copy an example, and start coding. But you've been burned before: hardcoded secrets that made it to production, missing token expiration handling that left sessions open indefinitely, error responses that leaked implementation details to attackers.

This time, you want to think through the approach systematically to avoid common security pitfalls and ensure proper session management, token refresh logic, and error handling.

**Commands:**

```bash
# Step 1: Create a new solution
/stark:new "Add JWT authentication to REST API"
# Returns: Solution ID (e.g., "azure-auth-7k2")

# Step 2: Document your complete solution plan
/stark:plan azure-auth-7k2

# Step 3: Create detailed task reports
/stark:task azure-auth-7k2 "Implement JWT token generation and validation"

# Step 4: Deliberate on approach if needed
/stark:think azure-auth-7k2 "Implement JWT token generation and validation"

# Step 5: Verify task is ready
/stark:ready azure-auth-7k2 "Implement JWT token generation and validation"

# Step 6: Execute the task
/stark:run azure-auth-7k2 "Implement JWT token generation and validation"

# Step 7: Verify completion against acceptance criteria
/stark:verify azure-auth-7k2 "Implement JWT token generation and validation"

# Step 8: Repeat steps 3-7 for remaining tasks, then finalize
/stark:complete azure-auth-7k2
```

**What Happens:**

STARK guides you through structured analysis before any code is written. The `/stark:new` command analyzes your problem using root cause analysis and constraint mapping. During `/stark:plan`, you define success criteria, design your approach, and break work into verifiable tasks. Each task goes through deliberation (`/stark:think`) to refine the approach, readiness checking (`/stark:ready`) to validate prerequisites, execution (`/stark:run`) with full change tracking, and explicit verification (`/stark:verify`) against acceptance criteria.

**Outcome:**

You implement authentication with confidence that you've considered security implications, edge cases, and integration points upfront. All decisions, deliberations, and verification results are preserved in `.stark/solutions/azure-auth-7k2/`, making the work fully resumable and providing a complete audit trail. The structured approach prevents common mistakes like hardcoding secrets, missing token expiration handling, or inadequate error responses.

Ready to try the basic workflow yourself? See [Getting Started](/guide/getting-started) for your first STARK solution.

## Example 2: Autonomous Mode - Real-Time Notifications

**Scenario:** You need to implement a complete real-time notification system with WebSockets, including connection management, message routing, and fallback for offline clients. The solution involves multiple coordinated tasks, and you want STARK to orchestrate the entire workflow automatically.

**Commands:**

```bash
# Single command for end-to-end execution
/stark:auto "Implement real-time notification system with WebSocket support, message queuing, and offline fallback"
```

**What Happens:**

Autonomous mode delegates all STARK phases to specialized subagents, running the complete workflow without manual intervention. It creates the solution (`/stark:new`), documents the plan (`/stark:plan`), and then enters a heartbeat loop that systematically executes each task through the full cycle: task report creation, deliberation, readiness check, execution, and verification.

**The autonomous mode differentiator:** After all tasks pass verification, STARK runs `/stark:cleanup` - a multi-agent quality gate that analyzes all changes for code quality, configuration validity, documentation accuracy, and cross-file consistency. This is automated quality assurance that most manual workflows skip. Multiple specialized agents review your implementation from different perspectives (performance, security, maintainability, correctness) before finalization. Only after cleanup passes (or after three iterations) does it finalize with `/stark:complete`.

**When to Use Autonomous vs Manual:**

Use `/stark:auto` when you want hands-off execution with built-in quality assurance, particularly for well-defined problems where you trust STARK's systematic approach. Use the manual workflow when you need to guide specific decisions, explore unfamiliar problem spaces, or maintain tight control over each phase. Autonomous mode trades control for speed and systematic completeness.

**Outcome:**

The notification system is implemented end-to-end with quality gates enforced automatically. You receive a complete solution with all tasks verified and a cleanup analysis confirming code quality standards. The work is fully documented with deliberations, execution logs, and verification reports for every task, providing transparency into what was built and why.

For more details on autonomous mode commands and options, see the [Command Reference](/reference/commands).

## Example 3: Learning System - Improving STARK Commands

**Scenario:** After running a dozen STARK solutions, you've developed preferences for how you like to work. Some command prompts feel out of order for your thinking process, some validations catch issues you never encounter, some documentation questions ask for detail you don't need. STARK's learning system lets you capture this feedback systematically, so the framework becomes more effective with every use.

For example, while using `/stark:plan`, you notice the prompts could be more effective if they asked about acceptance criteria earlier in the planning process. You want to capture this feedback so STARK can improve its own commands over time.

**Commands:**

```bash
# Step 1: Capture feedback after using a command
/stark:learn plan suggestion

# This presents a structured 14-question interview including:
#   - What were you trying to accomplish?
#   - What command arguments did you use?
#   - What worked well?
#   - What would have made this easier or clearer?
#   - What specific changes would improve the command?

# Sample responses you might provide:
#   Goal: "Planning solution jade-api-5m for GraphQL implementation"
#   Issue: "The command asks about tasks before acceptance criteria,
#           but defining success criteria first would guide task breakdown better"
#   Suggestion: "Move acceptance criteria questions before task breakdown section"

# Step 2: View learning history to see patterns
/stark:learn-history plan

# Step 3: Generate improvement proposals from collected feedback
/stark:learn-propose plan

# Step 4: Review proposals and apply approved improvements
/stark:learn-apply plan
```

**What Happens:**

The `/stark:learn` command walks you through a structured interview that captures context (what you were doing, what arguments you used), outcome (success/failure/partial, expected vs actual results), learnings (what worked, what didn't, edge cases encountered), and improvement suggestions (specific actionable changes, validation gaps, documentation needs, missing features). All feedback is stored in `.stark/learning/plan/[timestamp].md` with structured format for analysis.

Over time, `/stark:learn-history` reveals patterns across multiple feedback entries. The `/stark:learn-propose` command analyzes accumulated feedback to generate ranked improvement proposals. Finally, `/stark:learn-apply` applies approved changes to the command prompts while preserving their structure and intent.

This creates a flywheel effect: better commands lead to better solutions, which lead to better feedback, which lead to better commands. Unlike static tools that never change, STARK evolves based on your execution patterns, becoming increasingly aligned with how you think and work.

**Outcome:**

STARK becomes more effective with every use. Commands evolve based on real execution feedback rather than theoretical assumptions. The learning system creates a continuous improvement loop: use commands → capture feedback → analyze patterns → propose improvements → apply changes → better commands. This self-healing capability means STARK adapts to your specific needs and becomes more valuable over time, with all prompt evolution tracked and reversible.

For more workflow patterns and guidance, see the [Workflow Guide](/guide/workflow).
