---
description: Capture learnings from STARK command executions to improve prompts
---

## Context

**Target Command:** $1
**Feedback Type:** ${2:-general}

## Purpose

The `/stark:learn` command enables self-healing for STARK slash commands by capturing execution feedback and using it to improve command prompts over time.

Use this command after executing any STARK command to:
- Record what worked well and what didn't
- Document edge cases and unexpected behaviors
- Suggest improvements to command prompts
- Build a knowledge base for continuous improvement

## Prerequisites

Verify that the target STARK command exists:
- Check if `.claude/commands/stark/$1.md` exists
- If not found, report: "Command not found: /stark:$1. Use /stark:list to see available commands."

## Valid Feedback Types

- `success` - Command worked as expected
- `failure` - Command failed or produced errors
- `edge-case` - Encountered unexpected scenario or edge case
- `suggestion` - Ideas for improving the command
- `general` - General observations or learnings

## Task

### Step 1: Validate Input

1. Verify command name argument is provided
   - If missing: "Usage: /stark:learn <command-name> [feedback-type]"
   - Example: `/stark:learn run failure`

2. Validate command name format
   - Must contain only alphanumeric characters and hyphens
   - Pattern: `^[a-zA-Z0-9-]+$`
   - If invalid: "ERROR: Invalid command name. Use only letters, numbers, and hyphens."

3. Verify target command exists
   - Check for `.claude/commands/stark/$1.md`
   - If not found, list available STARK commands

4. Validate feedback type (if provided)
   - Must be one of: success, failure, edge-case, suggestion, general
   - Default to "general" if not specified

### Step 2: Collect Feedback

Present the user with a structured feedback collection interface. For each category below, show the prompt, provide examples of good feedback, and validate the response.

**VALIDATION RULES:**
- No response field can be empty or just whitespace
- Each response must have minimum 10 characters
- Encourage specific details over vague statements
- If response is too brief, reprompt with examples

---

#### 2.1 Context Questions

**PROMPT 1: What were you trying to accomplish?**

Please describe your goal when executing `/stark:$1`:

EXAMPLES OF GOOD FEEDBACK:
  ✓ "I was trying to execute Task 3 of solution amber-learn-9k which involves building a feedback collection interface"
  ✓ "I wanted to verify that Task 2 was complete and met all acceptance criteria before moving to Task 3"
  ✓ "I was attempting to create a new solution for implementing user authentication in the Jarvis system"

EXAMPLES OF INSUFFICIENT FEEDBACK:
  ✗ "Run a task"
  ✗ "Testing"
  ✗ "Nothing special"

Your response (be specific):

---

**PROMPT 2: What command arguments did you use?**

Provide the exact command with all arguments:

EXAMPLES OF GOOD FEEDBACK:
  ✓ "/stark:run amber-learn-9k 3"
  ✓ "/stark:verify azure-auth-5x task-2"
  ✓ "/stark:plan crimson-debug-2w"
  ✓ "/stark:new Implement GraphQL API for user data queries"

EXAMPLES OF INSUFFICIENT FEEDBACK:
  ✗ "standard arguments"
  ✗ "the usual ones"
  ✗ "some solution id"

Your exact command (copy/paste if possible):

---

**PROMPT 3: What was the execution context?**

Provide relevant context about your work session:

EXAMPLES OF GOOD FEEDBACK:
  ✓ "Solution ID: amber-learn-9k, Task: 3, Working on implementing feedback validation for /stark:learn command"
  ✓ "Fresh session, just initialized STARK framework with /stark:setup, then created first solution"
  ✓ "Mid-way through multi-task solution, had already completed Tasks 1-2 successfully, on Task 3 now"

EXAMPLES OF INSUFFICIENT FEEDBACK:
  ✗ "normal context"
  ✗ "working on stuff"
  ✗ "using STARK"

Your session context (include solution ID, task number, what stage you're at):

---

#### 2.2 Outcome Questions

**PROMPT 4: Did the command succeed or fail?**

Select one:
  [1] Success - Command completed as expected
  [2] Failure - Command failed with errors
  [3] Partial - Command ran but results were incomplete/incorrect

Your selection (1/2/3):

(After selection, capture: outcome = "success" | "failure" | "partial")

---

**PROMPT 5: What was the actual result vs expected result?**

Describe what you expected and what actually happened:

EXAMPLES OF GOOD FEEDBACK:
  ✓ "EXPECTED: Task execution report created at .stark/solutions/amber-learn-9k/tasks/03/EXECUTED.md with all sections filled. ACTUAL: Report was created but the 'Changes Made' section was empty."

  ✓ "EXPECTED: Verification to pass because I completed all acceptance criteria. ACTUAL: Verification failed because it couldn't find the implementation files I created."

  ✓ "EXPECTED: New solution created with ID generated from problem statement. ACTUAL: Got exactly that - solution ID 'jade-api-7m' was created with proper directory structure."

EXAMPLES OF INSUFFICIENT FEEDBACK:
  ✗ "It worked / It didn't work"
  ✗ "Got errors"
  ✗ "Not what I wanted"

Your response (be specific about expected vs actual):

---

**PROMPT 6: Were there any errors or warnings?**

Copy/paste any error messages, warnings, or unexpected output:

EXAMPLES OF GOOD FEEDBACK:
  ✓ "ERROR: Task file not found: .stark/solutions/amber-learn-9k/tasks/03/TASK.md
     The command expected this file to exist before execution."

  ✓ "WARNING: No acceptance criteria found in task file. Proceeding with execution anyway."

  ✓ "No errors - command completed successfully with confirmation message."

EXAMPLES OF INSUFFICIENT FEEDBACK:
  ✗ "some error"
  ✗ "warning appeared"
  ✗ "N/A"

Your response (copy exact error text, or write "No errors/warnings"):

---

#### 2.3 Learning Questions

**PROMPT 7: What worked well?**

Describe what aspects of the command were effective or helpful:

EXAMPLES OF GOOD FEEDBACK:
  ✓ "The structured prompts in the command made it very clear what I needed to do step-by-step. The examples provided were helpful for understanding the expected format."

  ✓ "Validation caught my mistake immediately - I forgot to create the task file first, and the command told me exactly what was missing and how to fix it."

  ✓ "The command automatically created all necessary directories, so I didn't have to worry about file structure."

EXAMPLES OF INSUFFICIENT FEEDBACK:
  ✗ "Everything"
  ✗ "It was fine"
  ✗ "Good enough"

Your response (be specific about what worked and why):

---

**PROMPT 8: What didn't work or was confusing?**

Describe any issues, confusing instructions, or unclear expectations:

EXAMPLES OF GOOD FEEDBACK:
  ✓ "The command said 'update the task file' but didn't specify which tool to use (Edit vs Write). I wasn't sure if I should append or replace content."

  ✓ "The acceptance criteria were checked but no feedback was given on which specific criteria passed or failed. I had to manually verify each one."

  ✓ "The command asked for a 'solution ID' but I didn't know where to find mine. The docs didn't explain the ID format or where it's stored."

EXAMPLES OF INSUFFICIENT FEEDBACK:
  ✗ "Confusing parts"
  ✗ "Some things unclear"
  ✗ "Nothing" (when there were actually issues)

Your response (be specific about what confused you or failed, or write "Nothing - everything was clear"):

---

**PROMPT 9: What edge cases did you encounter?**

Describe any unexpected scenarios, unusual situations, or boundary conditions:

EXAMPLES OF GOOD FEEDBACK:
  ✓ "I tried to run the command when there were uncommitted git changes, and it didn't warn me that my work might get lost. Should there be a git safety check?"

  ✓ "My solution ID had uppercase letters (Amber-Learn-9k) but the command converted it to lowercase. This wasn't documented and caused confusion when looking for files."

  ✓ "I ran the command twice for the same task and it overwrote the first execution report without warning. Maybe it should archive previous reports or warn about overwriting?"

EXAMPLES OF INSUFFICIENT FEEDBACK:
  ✗ "Weird stuff happened"
  ✗ "Edge case occurred"
  ✗ "None" (when you actually encountered something unusual)

Your response (describe unexpected scenarios, or write "None encountered"):

---

**PROMPT 10: What would have made this easier or clearer?**

Suggest changes that would improve the user experience:

EXAMPLES OF GOOD FEEDBACK:
  ✓ "If the command showed me the current task file content before asking me to execute, I could verify I'm working on the right task."

  ✓ "A dry-run option (--dry-run) would let me preview what the command will do without actually executing the task."

  ✓ "Show me a progress indicator for multi-step tasks so I know how far along I am."

EXAMPLES OF INSUFFICIENT FEEDBACK:
  ✗ "Make it better"
  ✗ "Improve it"
  ✗ "Nothing"

Your response (specific suggestions for improvement):

---

#### 2.4 Improvement Questions

**PROMPT 11: What specific changes would improve the command?**

Propose concrete, actionable improvements:

EXAMPLES OF GOOD FEEDBACK:
  ✓ "Add a prerequisite check that verifies the task file exists and has acceptance criteria before starting execution."

  ✓ "Include a confirmation prompt showing the solution ID, task number, and acceptance criteria, asking 'Proceed with execution? (y/n)'"

  ✓ "After execution, automatically run /stark:verify to check if the task is complete, and show the verification results."

EXAMPLES OF INSUFFICIENT FEEDBACK:
  ✗ "Make it work better"
  ✗ "Fix the issues"
  ✗ "Improve documentation"

Your response (specific actionable changes):

---

**PROMPT 12: Should any validation be added or changed?**

Identify missing or incorrect validation logic:

EXAMPLES OF GOOD FEEDBACK:
  ✓ "Validate that solution ID follows the pattern: color-name-code (e.g., amber-learn-9k). Currently it accepts any string."

  ✓ "Check that task number is a positive integer, not zero or negative. I accidentally used task 0 and it created invalid directory."

  ✓ "Verify that acceptance criteria exist in the task file before allowing execution. Currently it lets you execute tasks with no defined criteria."

EXAMPLES OF INSUFFICIENT FEEDBACK:
  ✗ "Better validation"
  ✗ "Check inputs"
  ✗ "None needed" (when there clearly are gaps)

Your response (specific validation to add/change, or write "Current validation is sufficient"):

---

**PROMPT 13: Should documentation or examples be updated?**

Identify gaps in documentation or examples:

EXAMPLES OF GOOD FEEDBACK:
  ✓ "Add an example showing how to handle multi-step tasks where each step depends on the previous one completing."

  ✓ "Document what happens if a task execution fails partway through - how do I resume or rollback?"

  ✓ "Include a troubleshooting section for common errors like 'task file not found' or 'invalid solution ID'."

EXAMPLES OF INSUFFICIENT FEEDBACK:
  ✗ "Add more examples"
  ✗ "Better docs"
  ✗ "None"

Your response (specific documentation improvements, or write "Documentation is adequate"):

---

**PROMPT 14: Are there missing features or capabilities?**

Identify functionality that should exist but doesn't:

EXAMPLES OF GOOD FEEDBACK:
  ✓ "The command should support batch execution of multiple tasks at once: /stark:run amber-learn-9k 1,2,3"

  ✓ "Add a --resume flag that continues from where a failed execution stopped, instead of starting over."

  ✓ "Support for task dependencies - automatically execute prerequisite tasks before running the requested task."

EXAMPLES OF INSUFFICIENT FEEDBACK:
  ✗ "More features"
  ✗ "Add stuff"
  ✗ "Nothing missing"

Your response (specific missing features, or write "No missing features identified"):

---

**VALIDATION CHECKPOINT:**

Before proceeding to Step 3, verify all responses:
- Check that no response is empty or just whitespace
- Confirm each response has minimum 10 characters
- Flag any vague responses and reprompt with examples
- Ensure execution context captures: command used, solution ID (if applicable), task number (if applicable)

If any validation fails, reprompt the specific question with emphasis on examples of good feedback.

### Step 3: Store Learning Data

Create learning storage with explicit directory creation:

1. Create command-specific directory structure using Bash:
   ```bash
   mkdir -p .stark/learning/$1
   ```
   - The `-p` flag creates parent directories if needed
   - Verify the command succeeds (exit code 0)
   - If creation fails, report error with diagnostic information

2. Generate timestamp for filename:
   - Format: `YYYY-MM-DD-HHMMSS` (local time)
   - Example: `2025-12-15-143045.md`
   - This ensures chronological sorting and uniqueness

3. Use Write tool to create learning file at: `.stark/learning/$1/[timestamp].md`

4. Write learning data in this format with YAML frontmatter:

```markdown
---
timestamp: [ISO 8601 UTC timestamp, e.g., 2025-12-15T14:30:45Z]
command: $1
feedback_type: [success|failure|edge-case|suggestion|general]
outcome: [success|failure|partial]
solution_id: [solution ID if applicable, otherwise null]
task_id: [task ID if applicable, otherwise null]
session_context: [brief description of what was being worked on]
---

# Learning Entry: /stark:$1

**Date:** [Human-readable local timestamp, e.g., 2025-12-15 14:30:45]
**Type:** [feedback-type from $2 or default]
**Status:** [success/failure/partial based on outcome]

---

## Execution Context

**Goal:** [What user was trying to accomplish - from "What were you trying to accomplish?"]
**Arguments:** [Command arguments used - from "What command arguments did you use?"]
**Solution ID:** [From execution context question if applicable]
**Task:** [From execution context question if applicable]

---

## Outcome

**Result:** [Success/Failure/Partial - from "Did the command succeed or fail?"]
**Expected:** [What was expected to happen - from outcome questions]
**Actual:** [What actually happened - from "What was the actual result vs expected result?"]
**Errors:** [Any errors or warnings - from outcome questions]

---

## What Worked

[Things that worked well - from "What worked well?"]

---

## What Didn't Work

[Issues, confusion, failures - from "What didn't work or was confusing?"]

---

## Edge Cases Encountered

[Unexpected scenarios or edge cases - from "What edge cases did you encounter?"]

---

## Improvement Suggestions

[Specific suggestions for improving the command - from improvement questions]

### Actionable Improvements

- [ ] [Specific improvement 1 - from "What specific changes would improve the command?"]
- [ ] [Specific improvement 2 - from "Should any validation be added or changed?"]
- [ ] [Specific improvement 3 - from "Should documentation or examples be updated?"]
- [ ] [Additional improvements as identified]

---

## Additional Notes

[Any other relevant observations - from "What would have made this easier or clearer?"]

---

## Metadata

- **Learning ID:** [timestamp filename]
- **Captured By:** Claude Code /stark:learn v1.0
- **Storage Location:** `.stark/learning/$1/[timestamp].md`
```

### Step 4: Confirm and Report

1. Confirm learning data was saved successfully
2. Report storage location: `.stark/learning/$1/[timestamp].md`
3. Show quick summary of what was captured
4. Suggest next steps:
   - Continue using command normally
   - Add more learnings over time
   - Review learnings: Read `.stark/learning/$1/*.md` files
   - Generate improvements (manual process for now)

## Usage Examples

### Example 1: Report a Failure
```
/stark:learn run failure
```
After `/stark:run` fails, document what went wrong and why.

### Example 2: Suggest an Improvement
```
/stark:learn verify suggestion
```
After using `/stark:verify`, suggest how it could be better.

### Example 3: Document Success with Edge Case
```
/stark:learn task edge-case
```
Document an unusual but successful execution scenario.

### Example 4: General Feedback
```
/stark:learn plan
```
Provide general feedback about `/stark:plan` command.

## Integration Notes

**Current Workflow:**
```
/stark:new <problem>          # Create solution
/stark:plan <solution-id>     # Plan approach
/stark:task <solution-id> <task>  # Create task report
/stark:run <solution-id> <task>   # Execute task
/stark:verify <solution-id> <task> # Verify completion
```

**With Learning:**
```
/stark:run <solution-id> <task>   # Execute task
/stark:learn run failure          # IF it failed, capture learning
/stark:learn run success          # OR if successful, capture what worked
```

## Learning Data Management

**Directory Structure:**
```
.stark/
├── learning/
│   ├── run/
│   │   ├── 2025-12-15-140530.md
│   │   ├── 2025-12-15-153020.md
│   │   └── ...
│   ├── verify/
│   │   └── 2025-12-15-161045.md
│   └── task/
│       └── 2025-12-15-142315.md
```

**Reviewing Learnings:**
- View all learnings for a command: `ls .stark/learning/<command-name>/`
- Read specific learning: `Read .stark/learning/<command-name>/[timestamp].md`
- Find patterns: `Grep` across learning files for common issues

## Future Enhancements

This is the MVP implementation focused on feedback collection. Future versions may include:

- Automated pattern detection across learnings
- Improvement proposal generation based on feedback analysis
- Automated application of approved improvements to command files
- Integration with git for tracking prompt evolution
- Statistical analysis of command effectiveness

## Success Criteria

Task complete when:
- [x] Learning data captured in structured format
- [x] File saved to `.stark/learning/$1/[timestamp].md`
- [x] Feedback includes all required sections
- [x] User receives confirmation and next steps
- [x] Learning data is human-readable and actionable

## Error Handling

**Command Not Found:**
```
ERROR: Command not found: /stark:$1

Available STARK commands:
- setup, new, think, plan, task, run, verify
- ready, status, list, complete, auto, learn

Usage: /stark:learn <command-name> [feedback-type]
Example: /stark:learn run failure
```

**Missing Arguments:**
```
ERROR: Missing required argument

Usage: /stark:learn <command-name> [feedback-type]

Arguments:
  <command-name>  Name of STARK command (without /stark: prefix)
  [feedback-type] Optional: success, failure, edge-case, suggestion, general

Examples:
  /stark:learn run failure
  /stark:learn plan suggestion
  /stark:learn verify edge-case
```

**Invalid Feedback Type:**
```
WARNING: Unknown feedback type "$2"
Valid types: success, failure, edge-case, suggestion, general
Defaulting to: general
```
