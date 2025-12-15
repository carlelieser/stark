# Task: Methodology Overview

**Solution:** readme-docs-1f4e
**Task ID:** task-06-methodology-overview
**Status:** Complete

---

## Description

Create a concise methodology overview section for the README that summarizes the STARK framework's five phases (Situation, Target, Approach, Resources, Knowledge) without duplicating the comprehensive content in SYSTEM.md. This section should include an ASCII workflow diagram, brief phase explanations, core principles, and a clear link to the full methodology documentation.

The goal is to give readers enough understanding to grasp what STARK is and why it's structured this way, while keeping the content under 300 words and encouraging deeper exploration via SYSTEM.md.

---

## Analysis

### Context
- **Location in README:** This section follows the Quick Start Guide and precedes the Contributing section
- **Reader state:** At this point, the reader has seen examples and may have tried STARK
- **Purpose:** Bridge between "how to use" and "how to contribute/understand deeply"
- **Audience:** Users who want to understand the framework philosophy, not just execute commands

### Content Requirements
Based on the solution acceptance criteria:
1. **Five phases** briefly explained (1-2 sentences each)
2. **ASCII diagram** showing the STARK workflow visually
3. **Link to SYSTEM.md** for comprehensive methodology documentation
4. **Core principles** mentioned (Clarity Before Action, Simplicity as Default, Learning Over Perfection)
5. **"Why STARK"** rationale, not just "what is STARK"
6. **Length constraint:** Under 300 words (summary, not full documentation)

### Content Sources
- `/Users/devplex/Documents/Projects/Development/stark/.stark/SYSTEM.md` contains:
  - Complete STARK framework diagram (lines 82-112)
  - Core philosophy and three axioms (lines 25-32)
  - Full phase descriptions (starting line 117+)
  - Mental models and principles

### Challenges
1. **Brevity vs Completeness:** Must be concise but meaningful - no fluff
2. **Duplication Avoidance:** Don't replicate SYSTEM.md content, summarize and reference
3. **Visual Communication:** ASCII diagram must be clear and add value
4. **Motivation:** Need to explain "why" this structure exists, not just "what" it is
5. **Natural Flow:** Should feel like a natural progression from Quick Start to deeper learning

### Key Decisions
1. **Diagram:** Reuse the SYSTEM.md diagram but potentially simplify for README context
2. **Phase Descriptions:** 1 sentence per phase focusing on "what question it answers"
3. **Principles:** Feature the three axioms prominently as they define STARK's philosophy
4. **Link Placement:** Link to SYSTEM.md early and again at the end for easy discovery
5. **Tone:** Explanatory and educational, not prescriptive

---

## Acceptance Criteria

From solution.md Task 6:

- [ ] Five phases briefly explained (Situation, Target, Approach, Resources, Knowledge)
- [ ] ASCII diagram showing workflow
- [ ] Link to SYSTEM.md for full methodology
- [ ] Core principles mentioned (Clarity Before Action, Simplicity as Default, Learning Over Perfection)
- [ ] Explains "why STARK" not just "what is STARK"
- [ ] Under 300 words (summary, not full documentation)

---

## Execution Plan

### Step 1: Extract Core Content from SYSTEM.md
- Read SYSTEM.md sections: Core Philosophy (axioms), STARK Framework diagram, phase introductions
- Identify the one-sentence essence of each phase
- Extract the ASCII diagram
- Note the three core axioms

**Output:** Raw content elements ready for synthesis

### Step 2: Draft Phase Descriptions
- Write 1-2 sentence description for each phase that answers:
  - Situation: "What is the problem?"
  - Target: "What does success look like?"
  - Approach: "How do we solve it?"
  - Resources: "What do we need?"
  - Knowledge: "What did we learn?"
- Focus on questions answered, not actions taken

**Output:** Five concise phase descriptions

### Step 3: Create or Adapt ASCII Diagram
- Review SYSTEM.md diagram (lines 82-112)
- Determine if it fits README context or needs simplification
- Ensure diagram is readable and adds clarity
- Verify proper markdown code block formatting

**Output:** ASCII diagram ready for README

### Step 4: Write "Why STARK" Rationale
- Explain the purpose of structured problem-solving
- Connect the three axioms to the five-phase structure
- Keep it brief (2-3 sentences max)

**Output:** Motivational context paragraph

### Step 5: Assemble and Polish Section
- Combine all elements in logical flow:
  1. Brief introduction (what and why)
  2. Core principles/axioms
  3. ASCII diagram
  4. Phase descriptions
  5. Link to SYSTEM.md for deep dive
- Check word count (target: under 300 words)
- Ensure markdown formatting is clean
- Verify link to SYSTEM.md is correct

**Output:** Complete methodology overview section

### Step 6: Validation
- Count words (must be under 300)
- Verify all acceptance criteria met
- Check that content doesn't duplicate SYSTEM.md
- Ensure ASCII diagram renders properly in markdown
- Confirm link to SYSTEM.md works

**Output:** Validated section ready for README integration

---

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Content too verbose, exceeds 300 words | Medium | Medium | Draft with strict word budget, edit ruthlessly, use bullet points |
| Diagram doesn't render properly in README | Low | Medium | Test in markdown preview, use standard ASCII characters, verify in code block |
| Phase descriptions too abstract or unclear | Medium | High | Focus on concrete questions each phase answers, use plain language |
| Duplication of SYSTEM.md content | Low | Low | Reference SYSTEM.md frequently, summarize rather than copy |
| Fails to convey "why STARK" | Low | High | Lead with purpose and principles before structure |
| Section feels disconnected from rest of README | Low | Medium | Review context (what comes before/after), ensure natural flow |

---

## Dependencies

**Must exist before execution:**
- [ ] README.md file exists (created in earlier tasks)
- [ ] SYSTEM.md is accessible and contains complete methodology
- [ ] Understanding of where this section fits in README structure
- [ ] Previous sections (Introduction, Quick Start, Examples) complete to understand reader's journey

**Required for execution:**
- [ ] Access to SYSTEM.md for content extraction
- [ ] Ability to read and write README.md
- [ ] Markdown formatting knowledge (code blocks, links, headers)

**Blocking factors:**
- If SYSTEM.md doesn't exist or is incomplete, cannot create accurate summary
- If README.md structure isn't established, section placement unclear

---

## Notes

**Word Count Strategy:**
- Introduction: ~40 words
- Core principles: ~40 words (3 axioms)
- ASCII diagram: (not counted in word limit)
- Five phase descriptions: ~120 words (24 words each)
- Closing/link: ~40 words
- **Total Target: ~240 words** (leaves 60-word buffer)

**Quality Checks:**
- Does this make someone want to read SYSTEM.md?
- Can a reader understand the framework structure from this summary?
- Are the three axioms clear and memorable?
- Does the diagram add clarity or just take up space?

**Success Signal:**
A reader should think: "This framework makes sense, and I want to understand it more deeply" → clicks SYSTEM.md link.
