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
			{ text: 'Dapper', link: '/dapper/' }
		],
		sidebar: [
			{ text: 'Dapper', link: '/dapper/' },
			{ text: "Docker", link: "/docker/" },
			{ text: 'Dotnet', link: '/dotnet/' },
			{ text: 'Elastic', link: '/elastic/' },
			{ text: 'IdentityServer', link: '/identityserver/' },
			{ text: 'Javascript', link: '/javascript/' },
			{ text: 'Mac', link: '/mac/' },
			{ text: 'MsSql', link: '/mssql/' },
			{ text: 'Npm', link: '/npm/' },
			{ text: 'VsCode', link: '/vscode/' },
			{ text: 'Vue', link: '/vue/' }
		]
	}
}