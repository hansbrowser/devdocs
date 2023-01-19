import{_ as n,y as s,x as a,W as p}from"./plugin-vue_export-helper.ac3310fd.js";const b='{"title":"Loops","description":"","frontmatter":{},"headers":[{"level":2,"title":"main.bicep","slug":"main-bicep"}],"relativePath":"bicep/loops.md","lastUpdated":1674137795949}',t={},o=p(`<h1 id="loops" tabindex="-1">Loops <a class="header-anchor" href="#loops" aria-hidden="true">#</a></h1><h2 id="main-bicep" tabindex="-1">main.bicep <a class="header-anchor" href="#main-bicep" aria-hidden="true">#</a></h2><div class="language-csharp"><pre><code>
<span class="token comment">// Simple range var</span>
<span class="token class-name"><span class="token keyword">var</span></span> strArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token function">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span> &#39;stuff$<span class="token punctuation">{</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span>&#39;<span class="token punctuation">]</span>  <span class="token comment">// [&quot;stuff0&quot;,&quot;stuff1&quot;, &quot;stuff2&quot;, &quot;stuff3&quot;]</span>

<span class="token comment">/*
** Range to create multiple resources
   --&gt; Creates myPublicIp1, myPublicIp2, myPublicIp3
*/</span>
resource publicIp &#39;Microsoft<span class="token punctuation">.</span>Network<span class="token operator">/</span>publicIPAddresses@<span class="token number">2020</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">01</span>&#39; <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">for</span> index <span class="token keyword">in</span> <span class="token function">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">:</span> &#39;myPublicIp$<span class="token punctuation">{</span>index<span class="token punctuation">}</span>&#39;
  location<span class="token punctuation">:</span> &#39;AustraliaEast&#39;
  properties<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    publicIPAllocationMethod<span class="token punctuation">:</span> &#39;Dynamic&#39;
    dnsSettings<span class="token punctuation">:</span> <span class="token punctuation">{</span>
      domainNameLabel<span class="token punctuation">:</span> &#39;dnslabel&#39;
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>

<span class="token comment">// Make a list of sites to create</span>
<span class="token class-name"><span class="token keyword">var</span></span> webappList <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    appName<span class="token punctuation">:</span> &#39;webapp<span class="token operator">-</span>admin&#39;
    appTag<span class="token punctuation">:</span> &#39;admin module&#39;
  <span class="token punctuation">}</span>
  <span class="token punctuation">{</span>
    appName<span class="token punctuation">:</span> &#39;webapp<span class="token operator">-</span><span class="token keyword">public</span>&#39;
    appTag<span class="token punctuation">:</span> &#39;<span class="token keyword">public</span> facing&#39;
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token comment">// Creates the number of sites based on length of webappList array and its item properties</span>
resource appService &#39;Microsoft<span class="token punctuation">.</span>Web<span class="token operator">/</span>sites@<span class="token number">2020</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">01</span>&#39; <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">for</span> <span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token keyword">in</span> webappList<span class="token punctuation">:</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">:</span> <span class="token class-name">item<span class="token punctuation">.</span>appName</span>
  location<span class="token punctuation">:</span> &#39;AustraliaEast&#39;
  kind<span class="token punctuation">:</span> &#39;linux&#39;
  properties<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    serverFarmId<span class="token punctuation">:</span> appServicePlan<span class="token punctuation">.</span>id
  <span class="token punctuation">}</span>
  tags<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    appComponent<span class="token punctuation">:</span> <span class="token class-name">item<span class="token punctuation">.</span>appTag</span>
    componentNumber<span class="token punctuation">:</span> &#39;C<span class="token operator">-</span>$<span class="token punctuation">{</span>index<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">}</span> of $<span class="token punctuation">{</span><span class="token function">length</span><span class="token punctuation">(</span>webappList<span class="token punctuation">)</span><span class="token punctuation">}</span>&#39;
  <span class="token punctuation">}</span>  
<span class="token punctuation">}</span><span class="token punctuation">]</span>

resource appServicePlan &#39;Microsoft<span class="token punctuation">.</span>Web<span class="token operator">/</span>serverfarms@<span class="token number">2020</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">01</span>&#39; <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">:</span> &#39;myplan&#39;
  location<span class="token punctuation">:</span> &#39;AustraliaEast&#39;
  sku<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    name<span class="token punctuation">:</span> &#39;S1&#39;
  <span class="token punctuation">}</span>
  kind<span class="token punctuation">:</span> &#39;linux&#39;
  properties<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    reserved<span class="token punctuation">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>



</code></pre></div>`,3),e=[o];function c(u,l,i,k,r,m){return a(),s("div",null,e)}var f=n(t,[["render",c]]);export{b as __pageData,f as default};
