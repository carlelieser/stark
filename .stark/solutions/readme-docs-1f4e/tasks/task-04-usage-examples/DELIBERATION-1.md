# Deliberation 1

**Task:** Usage Examples
**Created:** 2025-12-15T16:02:45Z

---

## Review of Prior Thinking

This is the first deliberation for Task 4. The REPORT.md provides a comprehensive 7-step execution plan to create three concrete examples:

1. **Example 1:** Basic workflow (new → plan → run → complete)
2. **Example 2:** Autonomous mode (/stark:auto)
3. **Example 3:** Learning system usage

The task follows completion of:
- Task 1 (Structure) - README skeleton created
- Task 2 (Introduction) - Value proposition established
- Task 3 (Command Reference) - All 17 commands documented

Examples serve as the critical "show don't tell" component that translates theoretical understanding into practical application.

---

## New Insights

### 1. Command Behavior Understanding from Source Files

After reviewing actual command files in `.claude-plugin/commands/`, key behavioral insights:

**`/stark:new`:**
- Takes problem statement as $ARGUMENTS
- Generates unique kebab-case ID (e.g., "azure-falcon-7k")
- Creates `.stark/solutions/<id>/solution.md` with Situation analysis
- Returns solution ID for subsequent commands

**`/stark:auto`:**
- Fully autonomous orchestration mode
- Uses Task tool to delegate ALL STARK commands to subagents
- Implements heartbeat loop: Check → Decide → Delegate → Wait → Repeat
- Includes cleanup quality gate before completion
- Has explicit exit conditions (success, failure, timeout)

**`/stark:learn`:**
- Takes command name and optional feedback type as arguments
- Presents 14-question structured interview
- Creates timestamped learning files in `.stark/learning/<command>/`
- Validates responses (minimum 10 characters, no empty fields)
- Supports types: success, failure, edge-case, suggestion, general

### 2. Example Scenario Selection Criteria

Based on command behavior and target audience (developers using Claude Code), ideal scenarios should:

**For Example 1 (Basic Workflow):**
- Use a common development task that resonates broadly
- Show gradual progression through phases (not all at once)
- Demonstrate the value of structured thinking before coding
- Be concrete enough to visualize but not so specific as to be niche

**Candidate Scenarios:**
- ✅ "Add JWT authentication to REST API" - Universal, multi-step, requires planning
- ❌ "Fix typo in documentation" - Too trivial, doesn't justify STARK overhead
- ❌ "Implement ML-based recommendation engine" - Too specialized, too complex for first example

**For Example 2 (Autonomous Mode):**
- Show a scenario where manual workflow would be tedious
- Highlight time savings and cognitive load reduction
- Demonstrate when to choose auto vs manual mode
- Show the cleanup quality gate integration

**Candidate Scenarios:**
- ✅ "Implement real-time notification system with WebSockets" - Complex enough to benefit from automation
- ✅ "Refactor legacy codebase to use dependency injection" - Multi-step, benefits from orchestration
- ❌ "Rename a function across the project" - Could use auto, but too simple to show value

**For Example 3 (Learning System):**
- Show a realistic improvement opportunity
- Demonstrate the feedback collection process (without overwhelming detail)
- Illustrate how STARK self-improves
- Keep it meta but not confusingly self-referential

**Candidate Scenarios:**
- ✅ "After using /stark:plan, notice prompts could ask about dependencies earlier"
- ✅ "Verification step missed edge case in test coverage requirements"
- ❌ "Learn command itself needs improvement" - Too meta, creates confusion

### 3. Example Format Consistency

Reviewing Task 2 and Task 3 deliberations, they emphasized:
- **Progressive disclosure** (broad → specific)
- **Scannability** (headers, code blocks, lists)
- **Professional but accessible** tone

Examples should follow the same pattern:

```markdown
### Example N: [Type] - [Scenario Title]

**Scenario:** [Context paragraph explaining the problem]

**Command Sequence:**
[Step-by-step commands with brief explanations]

**What Happens:**
[Narrative explanation of execution flow]

**Outcome:**
[What the user achieves and learns]
```

This structure:
- Provides context first (Scenario)
- Shows concrete commands (copy-pasteable)
- Explains behavior (educational)
- Concludes with value (outcome-focused)

### 4. Command Syntax Accuracy Critical

From command files:
- `/stark:new` uses: `/stark:new "problem description"` (quotes for multi-word problems)
- `/stark:plan` uses: `/stark:plan <solution-id>`
- `/stark:run` uses: `/stark:run <solution-id> "<task name>"`
- `/stark:auto` uses: `/stark:auto "problem description"`
- `/stark:learn` uses: `/stark:learn <command-name> [feedback-type]`

**Critical:** Examples must show exact syntax including quotes where needed. Wrong syntax in examples would confuse users and undermine credibility.

### 5. Autonomous Mode Complexity Challenge

The `/stark:auto` command file reveals significant complexity:
- Heartbeat loop with state detection
- Task delegation via subagents
- Cleanup quality gate integration
- Multiple exit conditions

**Dilemma:** How much detail to show in Example 2?

**Resolution:**
- Show the simple command invocation: `/stark:auto "problem"`
- Explain WHAT happens at high level (orchestrates workflow automatically)
- Mention cleanup gate briefly (quality assurance)
- DON'T explain heartbeat loop internals (that's implementation detail)
- Focus on WHEN to use it and WHAT it delivers

Keep it user-focused, not architecture-focused.

### 6. Learning System Example Edge Case

The `/stark:learn` command has a 14-question interview process with validation. Example 3 faces a challenge:

**If we show the full interview:** Example becomes 300+ lines, overwhelming
**If we show just the command:** Users don't understand what happens next
**If we show abbreviated interview:** May mislead about actual experience

**Resolution:**
- Show the command invocation
- Mention it presents structured interview (14 questions)
- Show 2-3 sample questions as representative examples
- Show the resulting learning file path
- Explain the workflow: learn → learn-propose → learn-apply

This gives accurate sense of the process without drowning in detail.

### 7. Cross-Task Integration Insights

From Task 2 (Introduction) deliberation:
- Value proposition already established: "clarity before action"
- Target audience: developers with complex, multi-step problems
- Anti-pattern mentioned: "trivial tasks don't need STARK overhead"

**Implication for Examples:**
- Example 1 should demonstrate "clarity before action" value explicitly
- Scenarios should align with "complex, multi-step" characterization
- Can reference "as mentioned in Introduction" to create cohesion

From Task 3 (Command Reference) deliberation:
- Commands grouped into: Getting Started, Core Workflow, Advanced Workflows, Management, Learning System
- Users already saw command table before examples section

**Implication:**
- Examples can assume user has seen command list
- Can reference command categories: "Using the Core Workflow commands..."
- Should demonstrate commands in realistic combinations (not just isolated usage)

### 8. The "What Next?" Problem

After reading examples, users will ask: "Now what do I do?"

**Each example should conclude with:**
- ✅ Clear outcome statement (what was accomplished)
- ✅ What the user learned or gained
- ✅ Implicit or explicit "try this yourself" suggestion
- ✅ Link to related commands or sections (where applicable)

This creates actionable closure and encourages engagement.

---

## Questions Resolved

**Q: Should examples show full command output or just the command invocations?**
**A:** Show command invocations with brief inline comments, then describe the outcome narratively. Full output would be too verbose and break flow. Focus on WHAT happens, not terminal transcripts.

**Q: How much detail for the /stark:auto example?**
**A:** Show the command, explain high-level orchestration (delegates workflow to subagents), mention cleanup gate, focus on WHEN to use vs manual mode. Skip implementation details (heartbeat loop, state detection).

**Q: Should Example 3 show the full 14-question learning interview?**
**A:** No. Show command invocation, mention interview exists (14 questions), show 2-3 representative questions, show resulting file structure, explain the three-phase cycle (learn → propose → apply).

**Q: Can examples reference content from earlier README sections?**
**A:** Yes. Examples come after Introduction and Command Reference, so can reference "as mentioned" or "using the Core Workflow commands." This creates cohesion and reinforces concepts.

**Q: Should examples be copy-pasteable?**
**A:** Command invocations should be, but with placeholder values (e.g., `<your-solution-id>`) where needed. Users should adapt to their context, not blindly copy. Include guidance on what to change.

**Q: How do we balance realism vs simplicity?**
**A:** Use realistic scenarios (JWT auth, WebSocket notifications) but simplify the narrative. Focus on STARK workflow, not implementation details of the feature being built. The example is about STARK, not about authentication systems.

**Q: Should examples show failure scenarios?**
**A:** Not in this task. These are success-path examples demonstrating value. Failure handling can be addressed in troubleshooting or FAQ sections (future tasks).

**Q: What reading level for example narratives?**
**A:** Match the tone from Task 2: "professional but accessible." Assume intermediate developer audience familiar with software concepts but not necessarily with problem-solving frameworks.

---

## Open Questions

**Q: Should we add a fourth example for the /stark:cleanup command?**
**Current status:** Cleanup is integrated into /stark:auto example as quality gate.
**Consideration:** Cleanup is also standalone command, could show manual quality analysis use case.
**Recommendation:** Defer to execution. If three examples feel incomplete, add brief cleanup example. If three examples already substantial (800+ words), keep cleanup integrated only.

**Q: Should examples include visual diagrams (ASCII art)?**
**Consideration:** Task 2 mentioned "Visual ASCII diagram of STARK workflow" in the methodology section.
**Recommendation:** No diagrams in examples section. Examples are concrete and narrative. Methodology section handles conceptual diagrams. Keep examples text-focused for clarity.

**Q: How do we handle solution ID generation in examples?**
**Consideration:** `/stark:new` auto-generates IDs like "azure-falcon-7k". Should examples show this happening or use placeholder IDs?
**Recommendation:** Show the generation happening in Example 1 to educate users. Use placeholder IDs in Examples 2-3 where the focus isn't on solution creation.

---

## Confidence Assessment

| Aspect | Confidence | Notes |
|--------|-------------|-------|
| Understanding | High | Command behavior verified from source files. Example requirements clear. |
| Approach | High | 7-step execution plan is solid. Format decisions resolved through deliberation. |
| Risks identified | High | Key risks: complexity overwhelm, syntax errors, staleness. Mitigations clear. |
| Content clarity | Medium-High | Know structure and content; execution will determine if examples resonate. |
| Alignment | High | Examples align with progressive disclosure, follow tone from Tasks 2-3. |

---

## Recommendation

**READY**

### Rationale

The task is ready for execution with clear understanding of command behavior and example requirements:

**Why Ready:**
1. ✅ Command files reviewed - accurate syntax and behavior understanding
2. ✅ Example scenarios selected - JWT auth, WebSocket notifications, learning feedback
3. ✅ Format structure defined - Scenario → Commands → What Happens → Outcome
4. ✅ Complexity balance resolved - show user value, hide implementation details
5. ✅ Tone alignment confirmed - professional but accessible, matches Tasks 2-3
6. ✅ Integration opportunities identified - reference earlier sections for cohesion
7. ✅ All acceptance criteria are measurable and achievable
8. ✅ Source material accessible - command files in `.claude-plugin/commands/`

**Key Decisions Made:**

**Example 1 Structure:**
- Scenario: "Add JWT authentication to REST API"
- Commands: /stark:new → /stark:plan → /stark:run → /stark:verify → /stark:complete
- Focus: Demonstrate structured thinking preventing common pitfalls
- Length target: 250-300 words

**Example 2 Structure:**
- Scenario: "Implement real-time notification system with WebSockets"
- Commands: /stark:auto (single command, full orchestration)
- Focus: Show autonomous mode value, mention cleanup gate
- Length target: 200-250 words

**Example 3 Structure:**
- Scenario: "Improving STARK commands through feedback"
- Commands: /stark:learn → /stark:learn-propose → /stark:learn-apply
- Focus: Demonstrate self-healing system, show 2-3 sample interview questions
- Length target: 250-300 words

**Total target length:** 700-850 words for all three examples

**Execution Strategy:**
1. Read command files for accurate syntax (Step 1 of REPORT)
2. Write Example 1 first (establishes baseline pattern)
3. Write Example 2 (shows advanced capability)
4. Write Example 3 (demonstrates unique differentiator)
5. Add contextual notes (when to use each approach)
6. Validate syntax, formatting, and links
7. Self-review against acceptance criteria

**Risk Mitigation:**
- **Complexity overwhelm:** Keep narratives focused on user actions, not internal mechanics
- **Syntax errors:** Verify every command against source files
- **Staleness:** Use current command structure, add note if examples need updating
- **Wrong scenarios:** Choose universally relatable development tasks
- **Too long:** Strict word count targets per example
- **Too technical:** Use accessible language, define terms inline where needed

**Acceptance Criteria Validation:**
- [x] Three distinct examples identified (basic, auto, learning)
- [x] Each includes scenario, commands, outcomes (format defined)
- [x] Realistic problem scenarios selected (JWT, WebSockets, feedback)
- [x] Code block formatting strategy confirmed (GitHub markdown)
- [x] Copy-pasteable command syntax verified from source files

**Dependencies Satisfied:**
- README.md exists with Usage Examples section placeholder (from Task 1)
- Command files accessible at `.claude-plugin/commands/`
- Value proposition and tone established (from Task 2)
- Command reference completed (from Task 3)

**Proceed to /stark:ready for formal verification, then /stark:run for execution.**
