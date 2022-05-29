import{_ as e,c as a,o as t,a as r}from"./app.27936946.js";const h='{"title":"Azure","description":"","frontmatter":{},"headers":[{"level":2,"title":"Start","slug":"start"},{"level":2,"title":"Next","slug":"next"}],"relativePath":"azure/index.md","lastUpdated":1653839323811}',n={},o=r(`__VP_STATIC_START__<h1 id="azure" tabindex="-1">Azure <a class="header-anchor" href="#azure" aria-hidden="true">#</a></h1><h2 id="start" tabindex="-1">Start <a class="header-anchor" href="#start" aria-hidden="true">#</a></h2><ul><li><a href="https://docs.microsoft.com/en-us/cli/azure/install-azure-cli" target="_blank" rel="noopener noreferrer">install azure CLI</a></li><li>az login</li><li>az extension add --name containerapp --upgrade</li><li>az account list -o table</li><li>az provider register --namespace Microsoft.App</li></ul><h2 id="next" tabindex="-1">Next <a class="header-anchor" href="#next" aria-hidden="true">#</a></h2><div class="language-sh"><pre><code>RESOURCE_GROUP=&quot;ketenstandaard&quot;
LOCATION=&quot;North Europe&quot;
LOG_ANALYTICS_WORKSPACE=&quot;ketenstandaard-logs&quot;
CONTAINERAPPS_ENVIRONMENT=&quot;ketenstandaard-apps&quot;
</code></pre></div><p>Next, retrieve the Log Analytics Client ID and client secret.</p><div class="language-sh"><pre><code>LOG_ANALYTICS_WORKSPACE_CLIENT_ID=\`az monitor log-analytics workspace show --query customerId -g $RESOURCE_GROUP -n $LOG_ANALYTICS_WORKSPACE --out tsv\`
</code></pre></div><div class="language-sh"><pre><code>LOG_ANALYTICS_WORKSPACE_CLIENT_SECRET=\`az monitor log-analytics workspace get-shared-keys --query primarySharedKey -g $RESOURCE_GROUP -n $LOG_ANALYTICS_WORKSPACE --out tsv\`
</code></pre></div><p>Create environment</p><div class="language-sh"><pre><code>az containerapp env create \\
  --name $CONTAINERAPPS_ENVIRONMENT \\
  --resource-group $RESOURCE_GROUP \\
  --logs-workspace-id $LOG_ANALYTICS_WORKSPACE_CLIENT_ID \\
  --logs-workspace-key $LOG_ANALYTICS_WORKSPACE_CLIENT_SECRET \\
  --location &quot;$LOCATION&quot;
</code></pre></div><p>Create a container app</p><div class="language-sh"><pre><code>az containerapp create \\
  --name my-container-app \\
  --resource-group $RESOURCE_GROUP \\
  --environment $CONTAINERAPPS_ENVIRONMENT \\
  --image ketenstandaard.azurecr.io/test/ksauthorize:latest \\
  --target-port 80 \\
  --ingress &#39;external&#39; \\
  --query configuration.ingress.fqdn
</code></pre></div>__VP_STATIC_END__`,12),s=[o];function i(c,d,l,_,p,u){return t(),a("div",null,s)}var A=e(n,[["render",i]]);export{h as __pageData,A as default};
