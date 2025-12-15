export default {
  title: 'STARK',
  description: 'Structured Problem-Solving Framework for Claude Code',
  base: '/stark/',

  themeConfig: {
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
