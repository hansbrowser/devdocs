# devdocs
Development documentation

Based on:
* [VitePress](https://vitepress.vuejs.org/)
* [Remote development in Containers](https://code.visualstudio.com/docs/remote/containers-tutorial)
* For performance reasons and hot reload, use "Clone repository in Container Volume..."
* Enable ssh key on hosting environment. This will automaticly be available inside this container
  * Start ssh-agent ()
  * Get-Service -Name ssh-agent | Set-Service -StartupType Manual
  * ssh-agent
* Deploy as GitHub Pages: "bash deploy.sh" (branch: gh-pages)
* 