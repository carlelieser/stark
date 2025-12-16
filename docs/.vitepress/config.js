export default {
  lang: 'en-US',
  title: 'STARK - Structured Problem-Solving Framework',
  description: 'Systematic problem-solving framework for Claude Code. Break down complex challenges using the STARK methodology: Situation, Target, Approach, Resources, Knowledge.',
  base: '/stark/',

  head: [
    // Favicon
    ['link', { rel: 'icon', href: '/stark/favicon.svg', type: 'image/svg+xml' }],

    // Theme color for mobile browsers
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],

    // Open Graph tags for social sharing (Facebook, LinkedIn)
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'STARK - Structured Problem-Solving Framework' }],
    ['meta', { property: 'og:description', content: 'Systematic problem-solving framework for Claude Code. Break down complex challenges using STARK methodology.' }],
    ['meta', { property: 'og:url', content: 'https://carlelieser.github.io/stark/' }],
    ['meta', { property: 'og:site_name', content: 'STARK Framework' }],

    // Twitter Card tags
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:title', content: 'STARK - Structured Problem-Solving Framework' }],
    ['meta', { name: 'twitter:description', content: 'Systematic problem-solving framework for Claude Code. Break down complex challenges with structured methodology.' }],

    // Additional SEO
    ['meta', { name: 'keywords', content: 'problem-solving, framework, Claude Code, systematic thinking, STARK, methodology, structured approach' }],
    ['meta', { name: 'author', content: 'Carlos Elieser' }]
  ],

  themeConfig: {
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Reference', link: '/reference/commands' },
      { text: 'GitHub', link: 'https://github.com/carlelieser/stark' }
    ],

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
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/carlelieser/stark' }
    ]
  }
}
