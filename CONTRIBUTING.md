# Contributing to STARK Documentation

Thank you for your interest in improving the STARK documentation! This guide will help you contribute to the documentation site built with VitePress.

## Documentation Site Overview

The STARK documentation site is built using [VitePress](https://vitepress.dev/), a static site generator optimized for technical documentation. The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

- **Live Site:** https://carlelieser.github.io/stark/
- **Source Files:** `docs/` directory
- **Configuration:** `docs/.vitepress/config.js`

## Quick Start

### Prerequisites

Before you begin, ensure you have:

- **Node.js** v18 or higher ([download](https://nodejs.org/))
- **npm** (comes with Node.js)
- **Git** for version control
- A GitHub account for submitting pull requests

### Local Development Setup

1. **Fork and clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/stark.git
   cd stark
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run docs:dev
   ```

   The site will be available at `http://localhost:5173`. Changes to markdown files will hot-reload automatically.

4. **Build and preview (optional):**
   ```bash
   npm run docs:build    # Build static site
   npm run docs:preview  # Preview production build
   ```

## Making Documentation Changes

### Directory Structure

```
docs/
├── .vitepress/
│   ├── config.js          # Site configuration (nav, sidebar, theme)
│   ├── dist/              # Built site (generated, do not edit)
│   ├── cache/             # VitePress cache (generated, do not edit)
│   └── public/            # Static assets (images, favicon, etc.)
├── index.md               # Homepage
├── guide/
│   ├── getting-started.md
│   ├── framework.md
│   ├── workflow.md
│   └── examples.md
└── reference/
    ├── commands.md
    ├── methodology.md
    └── templates.md
```

### Common Tasks

#### Adding a New Page

1. **Create the markdown file** in the appropriate directory:
   ```bash
   # Example: Adding a new guide page
   touch docs/guide/advanced-techniques.md
   ```

2. **Add frontmatter** at the top of the file:
   ```markdown
   ---
   title: Advanced Techniques
   description: Advanced STARK techniques for complex problems
   ---

   # Advanced Techniques

   Your content here...
   ```

3. **Update navigation** in `docs/.vitepress/config.js`:
   ```javascript
   sidebar: {
     '/guide/': [
       {
         text: 'Guide',
         items: [
           { text: 'Getting Started', link: '/guide/getting-started' },
           { text: 'Advanced Techniques', link: '/guide/advanced-techniques' }, // New page
           // ... other items
         ]
       }
     ]
   }
   ```

4. **Preview locally** to verify the page appears correctly.

#### Updating Existing Content

1. **Edit the markdown file** directly in the `docs/` directory
2. **Save and review** - changes hot-reload in your browser
3. **Test links** - ensure all internal links work correctly
4. **Commit changes** with a descriptive message

#### Updating Navigation

Navigation is controlled in `docs/.vitepress/config.js`:

- **Top navigation bar:** Edit the `nav` array
- **Sidebar:** Edit the `sidebar` object (supports different sidebars per section)
- **Social links:** Edit the `socialLinks` array

Example navigation structure:
```javascript
nav: [
  { text: 'Home', link: '/' },
  { text: 'Guide', link: '/guide/getting-started' },
  { text: 'Reference', link: '/reference/commands' }
]
```

#### Adding Images

1. **Place images** in `docs/.vitepress/public/images/`
2. **Reference in markdown:**
   ```markdown
   ![Alt text](/images/screenshot.png)
   ```
   Note: Paths are relative to the `public` directory

### VitePress Features

VitePress supports many markdown extensions beyond standard markdown:

#### Custom Containers

```markdown
::: tip
This is a helpful tip for users.
:::

::: warning
This is a warning about potential issues.
:::

::: danger
This is a critical warning.
:::
```

#### Code Blocks with Highlighting

````markdown
```javascript{2,4-6}
// Line 2 is highlighted
export default {
  // Lines 4-6 are highlighted
  data() {
    return { count: 0 }
  }
}
```
````

#### Internal Links

```markdown
[Getting Started](/guide/getting-started)
[Commands Reference](/reference/commands)
```

Learn more in the [VitePress Markdown Guide](https://vitepress.dev/guide/markdown).

## Deployment

### Automatic Deployment

The site deploys automatically via GitHub Actions when changes are pushed to the `main` branch:

1. **GitHub Actions workflow** builds the VitePress site
2. **Built files** are uploaded to GitHub Pages
3. **Site updates** typically within 2-3 minutes

You can monitor deployment status in the [Actions tab](https://github.com/carlelieser/stark/actions).

### Manual Deployment

If automatic deployment fails, you can build locally and deploy manually:

```bash
npm run docs:build
# Built files will be in docs/.vitepress/dist
```

Then follow [GitHub Pages manual deployment instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Contribution Workflow

### Submitting Changes

1. **Create a feature branch:**
   ```bash
   git checkout -b docs/improve-getting-started
   ```

2. **Make your changes** and test locally

3. **Commit with clear messages:**
   ```bash
   git add docs/guide/getting-started.md
   git commit -m "docs: clarify installation prerequisites"
   ```

4. **Push to your fork:**
   ```bash
   git push origin docs/improve-getting-started
   ```

5. **Open a pull request** on GitHub with:
   - Clear description of changes
   - Screenshots if UI/layout changed
   - Link to related issues if applicable

### Pull Request Guidelines

- **One topic per PR:** Keep changes focused and reviewable
- **Test locally:** Ensure the site builds without errors
- **Check links:** Verify all internal and external links work
- **Follow style:** Match existing documentation tone and formatting
- **Be descriptive:** Explain why the change improves the docs

## Style Guidelines

### Writing Style

- **Clear and concise:** Use simple language; avoid jargon
- **Active voice:** "Click the button" not "The button should be clicked"
- **Code examples:** Include practical examples where helpful
- **Step-by-step:** Break complex procedures into numbered steps
- **Consistent terminology:** Use STARK framework terms consistently

### Formatting

- **Headings:** Use proper hierarchy (h1 → h2 → h3)
- **Code blocks:** Always specify language for syntax highlighting
- **Lists:** Use bulleted lists for options, numbered for sequential steps
- **Emphasis:** Use **bold** for UI elements, *italics* for emphasis

### File Naming

- **Lowercase with hyphens:** `getting-started.md` not `Getting_Started.md`
- **Descriptive names:** `workflow-guide.md` not `guide2.md`
- **Consistent structure:** Follow existing directory patterns

## Troubleshooting

### Common Issues

#### Port Already in Use

**Problem:** `Error: Port 5173 is already in use`

**Solution:**
```bash
# Kill the process using the port
lsof -ti:5173 | xargs kill -9
# Or use a different port
npm run docs:dev -- --port 5174
```

#### Build Failures

**Problem:** `Build failed with errors`

**Solutions:**
- Check for markdown syntax errors in your files
- Verify all internal links point to existing pages
- Ensure frontmatter is valid YAML
- Review build logs: `npm run docs:build`

#### Changes Not Reflecting

**Problem:** Changes don't appear in the browser

**Solutions:**
- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Clear VitePress cache: `rm -rf docs/.vitepress/cache`
- Restart dev server: Stop (`Ctrl+C`) and run `npm run docs:dev` again

#### Navigation Not Updating

**Problem:** Added page to config but not showing in nav/sidebar

**Solutions:**
- Verify config.js syntax (valid JavaScript)
- Ensure file path matches exactly (case-sensitive)
- Restart dev server to pick up config changes
- Check browser console for errors

### Getting Help

If you encounter issues not covered here:

1. **Check VitePress docs:** https://vitepress.dev/
2. **Review existing issues:** https://github.com/carlelieser/stark/issues
3. **Open a new issue:** Include error messages, steps to reproduce, and your environment (OS, Node version)

## Questions?

For questions about:
- **Documentation content:** Open an issue with the `documentation` label
- **STARK framework:** See the main [README.md](README.md)
- **Plugin development:** See the "Contributing" section in [README.md](README.md#contributing)

Thank you for helping improve STARK documentation!
