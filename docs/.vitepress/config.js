module.exports = {
	base: '/',
	title: 'Development Docs',
	description: 'Development documentation.',
	head: [
		["link", { rel: "icon", href: "/logo-hb-dark.png" }]
	],
	themeConfig: {
		logo: '/logo-hb-dark.png',
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Dapper', link: '/dapper/' }
		],
		sidebar: [
			{
				text: 'Azure', link: '/azure/',
				children: [
					{ text: "Logs", link: '/azure/logs' }
				]
			},
			{
				text: 'Bicep', link: '/bicep/',
				children: [
					{ text: "Vars", link: '/bicep/vars' },
					{ text: "Operators", link: '/bicep/operators' },
					{ text: "Basic bicep files", link: '/bicep/basic' },
					{ text: "Modules", link: '/bicep/modules' },
					{ text: "Conditions", link: '/bicep/conditions' },
					{ text: "Loops", link: '/bicep/loops' },
					{ text: "Scopes", link: '/bicep/scopes' },
					{ text: "Too lazy to code", link: '/bicep/toolazytocode' }
				]
			},
			{ text: 'Blazor', link: '/blazor/' },
			{ text: 'Dapper', link: '/dapper/' },
			{ text: 'DevOps', link: '/devops/' },
			{ text: "Docker", link: "/docker/" },
			{ text: 'Dotnet', link: '/dotnet/' },
			{ text: 'Elastic', link: '/elastic/' },
			{ text: 'IdentityServer', link: '/identityserver/' },
			{
				text: 'Javascript', link: '/javascript/',
				children: [
					{ text: "Async Await", link: '/javascript/async-await' },
					{ text: "Pro tips", link: '/javascript/pro-tips' }
				]
			},
			{ text: 'Mac', link: '/mac/' },
			{ text: 'MsSql', link: '/mssql/' },
			{ text: 'Npm', link: '/npm/' },
			{ text: 'Unity', link: '/unity/' },
			{ text: 'VsCode', link: '/vscode/' },
			{ text: 'Vue', link: '/vue/' }
		]
	}
}