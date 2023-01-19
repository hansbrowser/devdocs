import{_ as n,y as a,x as s,W as p}from"./plugin-vue_export-helper.ac3310fd.js";const b='{"title":"Scopes","description":"","frontmatter":{},"headers":[{"level":2,"title":"main.bicep","slug":"main-bicep"},{"level":2,"title":"main-withscope.bicep","slug":"main-withscope-bicep"}],"relativePath":"bicep/vars.md","lastUpdated":1674138850453}',t={},o=p(`<h1 id="scopes" tabindex="-1">Scopes <a class="header-anchor" href="#scopes" aria-hidden="true">#</a></h1><h2 id="main-bicep" tabindex="-1">main.bicep <a class="header-anchor" href="#main-bicep" aria-hidden="true">#</a></h2><div class="language-csharp"><pre><code>targetScope <span class="token operator">=</span> &#39;subscription&#39;

resource someResourceGroup &#39;Microsoft<span class="token punctuation">.</span>Resources<span class="token operator">/</span>resourceGroups@<span class="token number">2021</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>&#39; <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">:</span> &#39;Group1&#39;
  location<span class="token punctuation">:</span> <span class="token function">deployment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>location
<span class="token punctuation">}</span>

resource anotherResourceGroup &#39;Microsoft<span class="token punctuation">.</span>Resources<span class="token operator">/</span>resourceGroups@<span class="token number">2021</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>&#39; <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">:</span> &#39;Group2&#39;
  location<span class="token punctuation">:</span> <span class="token function">deployment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>location
<span class="token punctuation">}</span>

module storage &#39;storage<span class="token punctuation">.</span>bicep&#39; <span class="token operator">=</span> <span class="token punctuation">{</span>
  scope<span class="token punctuation">:</span> someResourceGroup   <span class="token comment">// or you could do --&gt; resourceGroup(&#39;Group1&#39;)</span>
  name<span class="token punctuation">:</span> &#39;uatDeploy&#39;
  <span class="token keyword">params</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    enviroment<span class="token punctuation">:</span> &#39;uat&#39;
    location<span class="token punctuation">:</span> &#39;AustraliaEast&#39;
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module website &#39;appservice<span class="token punctuation">.</span>bicep&#39; <span class="token operator">=</span> <span class="token punctuation">{</span>
  scope<span class="token punctuation">:</span> anotherResourceGroup <span class="token comment">// or you could --? resourceGroup(&#39;Group2&#39;)</span>
  name<span class="token punctuation">:</span> &#39;websiteDeploy&#39;
  <span class="token keyword">params</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    enviroment<span class="token punctuation">:</span> &#39;uat&#39;
    webAppName<span class="token punctuation">:</span> &#39;mywebapp&#39;
    location<span class="token punctuation">:</span> &#39;AustraliaEast&#39;
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="main-withscope-bicep" tabindex="-1">main-withscope.bicep <a class="header-anchor" href="#main-withscope-bicep" aria-hidden="true">#</a></h2><div class="language-csharp"><pre><code>targetScope <span class="token operator">=</span> &#39;resourceGroup&#39;

param location <span class="token keyword">string</span> <span class="token operator">=</span> <span class="token function">resourceGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token return-type class-name">location</span>

@<span class="token function">allowed</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    &#39;dev&#39;
    &#39;uat&#39;
    &#39;prod&#39;
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
param enviroment <span class="token keyword">string</span> 

<span class="token class-name"><span class="token keyword">var</span></span> uniquePart <span class="token operator">=</span> <span class="token function">uniqueString</span><span class="token punctuation">(</span><span class="token function">resourceGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span>
<span class="token class-name"><span class="token keyword">var</span></span> stgAcctName <span class="token operator">=</span> &#39;mystg$<span class="token punctuation">{</span>enviroment<span class="token punctuation">}</span>$<span class="token punctuation">{</span>uniquePart<span class="token punctuation">}</span>&#39;

resource mySymbolicName &#39;Microsoft<span class="token punctuation">.</span>Storage<span class="token operator">/</span>storageAccounts@<span class="token number">2021</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span>&#39; <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">:</span> <span class="token class-name">stgAcctName</span>
  location<span class="token punctuation">:</span> <span class="token class-name">location</span>
  kind<span class="token punctuation">:</span> &#39;BlobStorage&#39;
  sku<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    name<span class="token punctuation">:</span> &#39;Standard_LRS&#39;
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

output StorageAccountName <span class="token keyword">string</span> <span class="token operator">=</span> stgAcctName
</code></pre></div>`,5),e=[o];function c(u,r,l,i,k,m){return s(),a("div",null,e)}var h=n(t,[["render",c]]);export{b as __pageData,h as default};
