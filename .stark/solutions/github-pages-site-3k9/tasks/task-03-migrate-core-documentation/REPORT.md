# Task: Migrate Core Documentation

**Solution:** github-pages-site-3k9
**Task ID:** task-03-migrate-core-documentation
**Status:** Complete

---

## Description

Transform existing repository documentation (README.md and SYSTEM.md) into structured, web-optimized documentation pages for the VitePress site. This migration involves extracting content from flat markdown files, reorganizing it into a logical site navigation structure, and adapting it for web consumption while preserving all content and improving discoverability.

---

## Analysis

### Current State

The STARK project has comprehensive, high-quality documentation:

**README.md (1,030 lines):**
- Complete project overview and introduction
- Quick Start guide with both autonomous and manual workflows
- Full command reference (17 commands)
- Detailed usage examples
- Workflow guide with patterns and best practices
- Learning system documentation
- Project structure explanation
- Contributing guidelines

**SYSTEM.md (913 lines):**
- Complete STARK methodology documentation
- Five-phase framework explanation
- Mental models and core philosophy
- Problem classification strategies
- Decision frameworks
- Failure mode analysis
- Templates and checklists

Both files are repository-optimized (single-file, linear reading) but contain all content needed for the documentation site.

### Content Structure Transformation

**From:** Two large monolithic markdown files designed for repository browsing

**To:** Hierarchical multi-page documentation with navigation:

```
docs/
├── index.md                        # Landing page (from Task 2 - already complete)
├── guide/
│   ├── getting-started.md         # Quick Start + Installation (from README)
│   ├── framework.md               # STARK Framework overview (from README + SYSTEM)
│   ├── workflow.md                # Workflow Guide (from README)
│   └── examples.md                # Usage Examples (from README)
├── reference/
│   ├── commands.md                # Command Reference (from README)
│   ├── methodology.md             # Complete STARK methodology (from SYSTEM)
│   └── templates.md               # Templates and Checklists (from SYSTEM)
└── .vitepress/
    └── config.js                  # Navigation configuration
```

### Key Transformation Challenges

1. **Content Extraction:** Intelligently splitting large files into logical page boundaries without losing context or breaking internal references
2. **Navigation Structure:** Creating intuitive information architecture that serves both new users (Guide) and experienced users (Reference)
3. **Link Updates:** Converting repository-relative links (`README.md#section`) to VitePress structure (`/guide/getting-started#section`)
4. **Context Preservation:** Ensuring each page stands alone while maintaining relationships between topics
5. **Syntax Adaptation:** Ensuring code blocks, tables, and markdown features render correctly in VitePress
6. **Table of Contents:** Removing manual TOCs (VitePress generates these automatically from headings)

### Migration Strategy

**Phased Approach:**

1. **Extract Getting Started** (README lines 97-138): Installation, Quick Start, first workflow
2. **Extract Framework Overview** (README lines 140-201 + SYSTEM lines 77-115): High-level STARK framework explanation
3. **Extract Command Reference** (README lines 321-392): All 17 commands with descriptions
4. **Extract Workflow Guide** (README lines 395-647): Session flow, decision points, best practices, patterns
5. **Extract Examples** (README lines 203-318): Three detailed usage examples
6. **Extract Complete Methodology** (SYSTEM lines 1-913): Full STARK methodology for reference
7. **Extract Templates** (SYSTEM lines 759-897): All templates and checklists
8. **Configure Navigation** (`.vitepress/config.js`): Sidebar and top nav structure
9. **Update Internal Links:** Scan all pages and fix cross-references
10. **Verify Rendering:** Check all content renders correctly without formatting issues

---

## Acceptance Criteria

- [ ] README.md content migrated to docs/guide/getting-started.md
- [ ] SYSTEM.md content migrated to docs/guide/framework.md
- [ ] Command reference extracted to docs/reference/commands.md
- [ ] Navigation sidebar configured in .vitepress/config.js
- [ ] Internal links updated to work in VitePress structure
- [ ] Code blocks have proper syntax highlighting
- [ ] All content renders correctly without broken formatting

---

## Execution Plan

### Step 1: Create Directory Structure
Create the `docs/guide/` and `docs/reference/` directories to organize documentation pages.

**Commands:**
```bash
mkdir -p docs/guide docs/reference
```

**Deliverable:** Directory structure ready for documentation files

---

### Step 2: Extract Getting Started Guide
Extract Quick Start section from README.md (lines 97-138) and create `docs/guide/getting-started.md`.

**Content to extract:**
- Prerequisites
- Quick Start (both autonomous and manual workflows)
- What Happens Behind the Scenes
- Next Steps

**Adaptations:**
- Remove "Quick Start" heading (will be page title)
- Update internal links from `#section` to `/guide/section` format
- Add frontmatter with title and description
- Remove manual table of contents (VitePress generates this)

**Deliverable:** `docs/guide/getting-started.md` with Quick Start content

---

### Step 3: Extract Framework Overview
Combine README framework section (lines 140-201) and SYSTEM framework diagram (lines 77-115) into `docs/guide/framework.md`.

**Content to extract:**
- Core Principles (README)
- Five Phases explanation (README + SYSTEM)
- Framework diagram (SYSTEM)
- Link to complete methodology (SYSTEM.md → /reference/methodology)

**Adaptations:**
- Merge README high-level overview with SYSTEM detailed framework
- Update cross-references to point to /reference/methodology
- Add frontmatter
- Ensure diagram renders correctly

**Deliverable:** `docs/guide/framework.md` with comprehensive framework overview

---

### Step 4: Extract Workflow Guide
Extract Workflow Guide section from README (lines 395-647) into `docs/guide/workflow.md`.

**Content to extract:**
- Typical STARK Session Flow
- Decision Points (Manual vs Autonomous, When to Think, Learning System usage)
- Best Practices (8 practices)
- Common Patterns (4 patterns with examples)

**Adaptations:**
- Update command references to link to /reference/commands
- Update internal links
- Add frontmatter
- Preserve all code examples and flow diagrams

**Deliverable:** `docs/guide/workflow.md` with complete workflow guidance

---

### Step 5: Extract Usage Examples
Extract Usage Examples section from README (lines 203-318) into `docs/guide/examples.md`.

**Content to extract:**
- Example 1: Basic Workflow (API Authentication)
- Example 2: Autonomous Mode (Real-Time Notifications)
- Example 3: Learning System (Improving Commands)

**Adaptations:**
- Update command references to link to /reference/commands
- Preserve all code blocks with proper syntax highlighting
- Add frontmatter
- Ensure examples flow well as standalone page

**Deliverable:** `docs/guide/examples.md` with three detailed examples

---

### Step 6: Extract Command Reference
Extract Command Reference section from README (lines 321-392) into `docs/reference/commands.md`.

**Content to extract:**
- Command table structure (Getting Started, Core Workflow, Advanced, Management, Learning)
- All 17 commands with descriptions
- Quick Start pattern note

**Adaptations:**
- Enhance with additional detail from CLAUDE.md if useful
- Add frontmatter
- Consider enhanced formatting (badges, visual hierarchy)
- Link to examples in /guide/examples

**Deliverable:** `docs/reference/commands.md` with complete command reference

---

### Step 7: Extract Complete Methodology
Migrate SYSTEM.md (lines 1-913) to `docs/reference/methodology.md`.

**Content to extract:**
- Entire SYSTEM.md content (comprehensive methodology)
- Core Philosophy, Five Phases, Cross-Cutting Principles
- Problem Classification, Decision Frameworks, Failure Mode Analysis
- All frameworks and mental models

**Adaptations:**
- Add frontmatter indicating this is comprehensive reference
- Update table of contents to work with VitePress anchors
- Preserve all diagrams, frameworks, and templates
- Add navigation links back to /guide/framework for high-level overview

**Deliverable:** `docs/reference/methodology.md` with complete STARK methodology

---

### Step 8: Extract Templates and Checklists
Extract Templates section from SYSTEM.md (lines 759-897) into `docs/reference/templates.md`.

**Content to extract:**
- Quick Start Checklist
- Comprehensive Checklist
- Decision Template
- Task Template

**Adaptations:**
- Add frontmatter
- Enhance with copy-to-clipboard functionality if possible
- Link to methodology sections that explain each template
- Format templates for easy scanning

**Deliverable:** `docs/reference/templates.md` with all templates

---

### Step 9: Configure Site Navigation
Update `.vitepress/config.js` to configure sidebar navigation and top navigation bar.

**Configuration needed:**

**Sidebar structure:**
```javascript
sidebar: {
  '/guide/': [
    {
      text: 'Guide',
      items: [
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Framework', link: '/guide/framework' },
        { text: 'Workflow', link: '/guide/workflow' },
        { text: 'Examples', link: '/guide/examples' }
      ]
    }
  ],
  '/reference/': [
    {
      text: 'Reference',
      items: [
        { text: 'Commands', link: '/reference/commands' },
        { text: 'Methodology', link: '/reference/methodology' },
        { text: 'Templates', link: '/reference/templates' }
      ]
    }
  ]
}
```

**Top navigation:**
```javascript
nav: [
  { text: 'Home', link: '/' },
  { text: 'Guide', link: '/guide/getting-started' },
  { text: 'Reference', link: '/reference/commands' },
  { text: 'GitHub', link: 'https://github.com/carlelieser/stark' }
]
```

**Deliverable:** Fully configured navigation in `.vitepress/config.js`

---

### Step 10: Update Internal Links
Systematically scan all created documentation files and update internal links to work in VitePress structure.

**Link patterns to fix:**
- `README.md#section` → `/guide/getting-started#section`
- `SYSTEM.md` → `/reference/methodology`
- `.stark/SYSTEM.md` → `/reference/methodology`
- `#command-reference` → `/reference/commands`

**Approach:**
1. Create mapping of old links to new structure
2. Use find-replace with regex to update systematically
3. Manually verify complex cross-references

**Deliverable:** All internal links functional in VitePress structure

---

### Step 11: Verify Syntax and Rendering
Test all migrated content to ensure proper rendering in VitePress.

**Verification checklist:**
- [ ] All code blocks have language specified for syntax highlighting
- [ ] All tables render correctly
- [ ] All diagrams (ASCII art) display properly
- [ ] Frontmatter is valid YAML
- [ ] Headings follow hierarchy (h1 → h2 → h3, no skips)
- [ ] Lists (ordered/unordered) render correctly
- [ ] Blockquotes display properly
- [ ] Internal links work (test navigation)
- [ ] External links open correctly

**Testing approach:**
```bash
npm run docs:dev
# Navigate to each page
# Check rendering
# Test all links
```

**Deliverable:** All content verified to render correctly without formatting issues

---

### Step 12: Test Local Build
Build the complete VitePress site and verify all pages work in production build.

**Commands:**
```bash
npm run docs:build
npm run docs:preview
```

**Verification:**
- Build completes without errors
- Preview site loads correctly
- All pages accessible
- Navigation works
- Search indexes all content (if search is enabled)
- Performance is acceptable

**Deliverable:** Successfully built and previewed site with all migrated documentation

---

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Broken internal links after migration | High | Medium | Create systematic link mapping, use find-replace carefully, test thoroughly |
| Context loss from splitting large files | Medium | Medium | Add cross-references between pages, use clear headings, preserve complete content |
| VitePress markdown incompatibilities | Low | Medium | Test early with sample content, consult VitePress docs for markdown extensions |
| Navigation structure confusing to users | Medium | High | Follow common documentation patterns (Guide vs Reference), get feedback |
| Content duplication between pages | Low | Low | Clear page boundaries, use links instead of repeating content |
| Manual table of contents conflicts with VitePress | High | Low | Remove all manual TOCs, rely on VitePress automatic generation |
| Code blocks missing syntax highlighting | Medium | Low | Add language identifiers to all code blocks during extraction |
| Large SYSTEM.md page overwhelming | Low | Medium | Consider further splitting methodology into sub-pages if needed |

---

## Dependencies

**Must exist before execution:**
- [x] VitePress installed and configured (Task 1)
- [x] Landing page created (Task 2 - COMPLETE)
- [x] `docs/` directory structure exists
- [x] `.vitepress/config.js` exists with basic configuration
- [ ] README.md and SYSTEM.md accessible at repository root

**Required tools:**
- Text editor for content extraction
- Local dev server (`npm run docs:dev`) for testing
- Git for version control

**Required knowledge:**
- VitePress markdown syntax and frontmatter format
- Navigation configuration in VitePress
- Internal linking conventions in VitePress

---

## Notes

**Content Preservation:** This migration preserves 100% of existing documentation content. No content is lost or simplified—only reorganized for better web consumption.

**Progressive Enhancement:** Start with basic migration, then enhance with VitePress features (custom components, advanced markdown) in future iterations if needed.

**Fallback:** If VitePress-specific features cause issues, fallback to standard markdown that works everywhere.

**Documentation Quality:** Both README.md and SYSTEM.md are exceptionally well-written. The migration should preserve this quality while adapting structure for web navigation.
