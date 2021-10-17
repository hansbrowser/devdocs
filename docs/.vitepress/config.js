module.exports = {
    base: '/devdocs/',
    title: 'Development Docs',
    description: 'Development documentation.',
    head: [
        ["link", { rel: "icon", href: `/logo-hb-dark.png` }]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },      
            { text: 'Dapper', link: '/dapper/' },
            { text: 'Contact', link: '/contact' }
        ],
        sidebar: [
            { text: 'Dapper', link: '/dapper/' },
            {
                text: "Docker",
                link: "/docker/"
              },
            { text: 'Our Story', link: '/about/our-story' }
        ]
      }
}