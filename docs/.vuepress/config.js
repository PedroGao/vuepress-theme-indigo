module.exports = {
  title: 'Pedro Blog',
  description: 'Just a blog for a unknown man',
  dest: 'dist',
  // head: [['link', { rel: 'icon', href: `/logo.png` }]],
  serviceWorker: true,
  themeConfig: {
    algolia: {
      appId: '76S5YNGFSB',
      apiKey: '9b0396d931120d465c7dc371256fcc5f',
      indexName: 'personal_blog'
    },
    repo: 'https://coding.net/u/pedrogao/p/cookbook-doc/git?public=true',
    editLinks: true,
    docsDir: 'docs',
    nav: [
      {
        text: '主页',
        link: '/'
      },
      {
        text: '博客',
        link: '/blog/'
      },
      {
        text: '随笔',
        link: '/essay/'
      },
      {
        text: '关于',
        link: '/about/'
      }
    ],
    sidebar: {
      '/blog/': [
        {
          title: '博客',
          collapsable: false,
          children: [
            '',
            'Go-1',
            'Go-2',
            'Search-1',
            'Search-2',
            'Search-3',
            'Spring-1',
            'Spring-2',
            'Spring-3',
            'Web-1',
            'Web-2'
          ]
        }
      ],
      '/essay/': [
        {
          title: '随笔',
          collapsable: false,
          children: ['', 'Essay-1']
        }
      ]
    }
  }
};
