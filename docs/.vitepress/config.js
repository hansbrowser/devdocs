module.exports = {
    base: '/devdocs/',
    title: 'Development Docs',
    description: 'Development documentation.',
    head: [
        ["link", { rel: "icon", href: `/logo-hb-dark.png` }],
        ["link", { rel: "manifest", href: "/manifest.json" }],
        ["meta", { name: "theme-color", content: "#3eaf7c" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        [
          "meta",
          { name: "apple-mobile-web-app-status-bar-style", content: "black" }
        ],
        [
          "link",
          { rel: "apple-touch-icon", href: `/icons/apple-touch-icon-152x152.png` }
        ],
        [
          "link",
          {
            rel: "mask-icon",
            href: "/icons/safari-pinned-tab.svg",
            color: "#3eaf7c"
          }
        ],
        [
          "meta",
          {
            name: "msapplication-TileImage",
            content: "/icons/msapplication-icon-144x144.png"
          }
        ],
        ["meta", { name: "msapplication-TileColor", content: "#000000" }]
      ],
      themeConfig: {
        /*
        nav: [
          { text: "vue", link: "/vue/" },
          { text: "javascript", link: "/javascript/" },
          { text: "npm", link: "/npm/" },
          { text: "webpack", link: "/webpack/" }
        ],
        */
        logo: "/logo-hb-dark.png",
        sidebar: [
          {
            title: "Dapper",
            collapsable: true,
            children: ["/dapper/"]
          },
          {
            title: "Docker",
            collapsable: true,
            children: ["/docker/"]
          },
          {
            title: "DevOps",
            collapsable: true,
            children: ["/devops/"]
          },
          {
            title: "Dotnet",
            collapsable: true,
            children: ["/dotnet/", "/dotnet/dotnet22"]
          },
          {
            title: "ElasticSearch",
            collapsable: true,
            children: ["/elastic/"]
          },
          {
            title: "IdentityServer",
            collapsable: true,
            children: ["/identityserver/", "/identityserver/Securing"]
          },
          {
            title: "Javascript",
            collapsable: true,
            children: ["/javascript/", "/javascript/pro-tips"]
          },
          {
            title: "Mac",
            collapsable: true,
            children: ["/mac/"]
          },
          {
            title: "Npm",
            collapsable: true,
            children: ["/npm/"]
          },
          {
            title: "Mssql",
            collapsable: true,
            children: ["/mssql/"]
          },
          {
            title: "Vscode",
            collapsable: true,
            children: ["/vscode/"]
          },
          {
            title: "Vue",
            collapsable: true,
            children: ["/vue/", "/vue/vuex", "/vue/vue-cli", "/vue/snippets", "/vue/fontawesome"]
          },
          {
            title: "Webpack",
            collapsable: true,
            children: ["/webpack/"]
          }
        ]
      }
    }