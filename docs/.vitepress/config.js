/**
 * VitePress Configuration for STARK Documentation Site
 *
 * This file controls the site's structure, navigation, theme, and metadata.
 * VitePress documentation: https://vitepress.dev/reference/site-config
 *
 * CUSTOMIZATION GUIDE:
 * - Site metadata: Update title, description, base path below
 * - Navigation: Modify nav and sidebar arrays in themeConfig
 * - Search: Currently uses local search (no external service needed)
 * - Theme: Uses default VitePress theme with custom metadata
 */

export default {
  // Site Language
  // Sets the lang attribute in the <html> tag. Important for accessibility and SEO.
  lang: 'en-US',

  // Site Title
  // Appears in browser tabs, search results, and social sharing cards.
  // Format: "Page Title | Site Title" on content pages.
  title: 'STARK',

  // Site Description
  // Used by search engines and social sharing. Keep under 160 characters for best SEO.
  description: 'Systematic problem-solving framework for Claude Code. Break down complex challenges using the STARK methodology: Situation, Target, Approach, Resources, Knowledge.',

  // Base URL Path
  // IMPORTANT: Must match your GitHub Pages repository name.
  // For github.com/username/stark → base: '/stark/'
  // For github.com/username/username.github.io → base: '/'
  // Include leading and trailing slashes!
  base: '/stark/',

  // HTML Head Tags
  // Adds metadata, favicons, and social sharing tags to every page's <head>.
  // When adding new tags, consider impact on SEO and social sharing.
  head: [
    // Favicon - appears in browser tabs and bookmarks
    // Path is relative to docs/.vitepress/public/ directory
    ['link', { rel: 'icon', href: '/stark/favicon.svg', type: 'image/svg+xml' }],

    // Theme color for mobile browser chrome (Android/Chrome)
    // Matches the primary brand color for visual consistency
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],

    // Open Graph tags - controls how links appear on Facebook, LinkedIn, Slack, etc.
    // Test with: https://www.opengraph.xyz/
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'STARK' }],
    ['meta', { property: 'og:description', content: 'Systematic problem-solving framework for Claude Code. Break down complex challenges using STARK methodology.' }],
    ['meta', { property: 'og:url', content: 'https://carlelieser.github.io/stark/' }],
    ['meta', { property: 'og:site_name', content: 'STARK Framework' }],
    // To add an image: ['meta', { property: 'og:image', content: 'https://carlelieser.github.io/stark/og-image.png' }],

    // Twitter Card tags - controls how links appear on Twitter/X
    // 'summary' = small card, 'summary_large_image' = large card with image
    // Test with: https://cards-dev.twitter.com/validator
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:title', content: 'STARK' }],
    ['meta', { name: 'twitter:description', content: 'Systematic problem-solving framework for Claude Code. Break down complex challenges with structured methodology.' }],
    // To add image: ['meta', { name: 'twitter:image', content: 'https://carlelieser.github.io/stark/twitter-card.png' }],

    // Additional SEO metadata
    // Keywords have minimal SEO impact but help with internal organization
    ['meta', { name: 'keywords', content: 'problem-solving, framework, Claude Code, systematic thinking, STARK, methodology, structured approach' }],
    ['meta', { name: 'author', content: 'Carlos Elieser' }]
  ],

  // Theme Configuration
  // Controls navigation, sidebar, search, and other theme features.
  // Full options: https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    // Search Configuration
    // 'local' = built-in search (no external service needed)
    // For larger sites, consider Algolia DocSearch: https://vitepress.dev/reference/default-theme-config#search
    search: {
      provider: 'local'
      // Options for local search:
      // options: {
      //   detailedView: true,        // Show more context in results
      //   miniSearch: { ... },       // Customize search algorithm
      //   translations: { ... }      // Localize search UI text
      // }
    },

    // Top Navigation Bar
    // Appears at the top of every page. Keep to 4-5 items for best UX.
    // 'text' = link label, 'link' = URL (internal or external)
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Reference', link: '/reference/commands' },
      { text: 'GitHub', link: 'https://github.com/carlelieser/stark' }
      // Dropdown example:
      // {
      //   text: 'More',
      //   items: [
      //     { text: 'Changelog', link: '/changelog' },
      //     { text: 'FAQ', link: '/faq' }
      //   ]
      // }
    ],

    // Sidebar Navigation
    // Path-specific sidebars for different documentation sections.
    // Key = path prefix (must start with /), Value = sidebar config
    // When a page matches multiple prefixes, the most specific (longest) wins.
    sidebar: {
      // Guide section sidebar - shows for all pages under /guide/
      '/guide/': [
        {
          text: 'Guide',  // Section heading
          items: [        // Pages in this section
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Framework', link: '/guide/framework' },
            { text: 'Workflow', link: '/guide/workflow' },
            { text: 'Examples', link: '/guide/examples' }
          ]
        }
        // To add another section in the sidebar:
        // {
        //   text: 'Advanced',
        //   items: [
        //     { text: 'Custom Commands', link: '/guide/custom-commands' }
        //   ]
        // }
      ],

      // Reference section sidebar - shows for all pages under /reference/
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

      // To add a new section with its own sidebar:
      // '/api/': [
      //   {
      //     text: 'API Reference',
      //     items: [
      //       { text: 'Introduction', link: '/api/' },
      //       { text: 'Functions', link: '/api/functions' }
      //     ]
      //   }
      // ]
    },

    // Social Links
    // Icons appear in the top navigation bar (right side).
    // Supported icons: github, twitter, discord, facebook, instagram, youtube, linkedin, slack
    // Custom icons: { icon: { svg: '...' }, link: '...' }
    socialLinks: [
      { icon: 'github', link: 'https://github.com/carlelieser/stark' }
      // Add more social links:
      // { icon: 'twitter', link: 'https://twitter.com/username' },
      // { icon: 'discord', link: 'https://discord.gg/invite-code' }
    ]

    // Additional Theme Options (currently using defaults):
    // logo: '/logo.svg',                           // Site logo in nav bar
    // siteTitle: 'STARK',                         // Override title in nav bar
    // outline: [2, 3],                            // Heading levels shown in outline (2 = h2, 3 = h3)
    // aside: true,                                // Show right sidebar with outline
    // lastUpdated: true,                          // Show last updated timestamp (requires git)
    // editLink: {                                 // "Edit this page" link
    //   pattern: 'https://github.com/carlelieser/stark/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },
    // footer: {                                   // Footer on every page
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2025 Carlos Elieser'
    // }
  }
}

/**
 * COMMON CUSTOMIZATIONS:
 *
 * 1. Adding a new documentation page:
 *    - Create markdown file in docs/ (e.g., docs/guide/advanced.md)
 *    - Add to appropriate sidebar array above
 *    - Restart dev server to see changes
 *
 * 2. Changing the color scheme:
 *    - Create docs/.vitepress/theme/index.js
 *    - Override CSS variables
 *    - See: https://vitepress.dev/guide/extending-default-theme#customizing-css
 *
 * 3. Adding custom components:
 *    - Create .vue files in docs/.vitepress/theme/components/
 *    - Register globally in docs/.vitepress/theme/index.js
 *    - Use in markdown with <ComponentName />
 *
 * 4. Internationalization (i18n):
 *    - Add 'locales' configuration
 *    - Create language-specific directories (docs/en/, docs/es/, etc.)
 *    - See: https://vitepress.dev/guide/i18n
 */
