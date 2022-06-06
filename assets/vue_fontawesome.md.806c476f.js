import{_ as n,c as a,o as s,a as o}from"./app.898a861e.js";const m='{"title":"Fontawesome","description":"","frontmatter":{},"relativePath":"vue/fontawesome.md","lastUpdated":1634462221892}',t={},e=o(`<h1 id="fontawesome" tabindex="-1">Fontawesome <a class="header-anchor" href="#fontawesome" aria-hidden="true">#</a></h1><ul><li>install vue-cli-plugin-fontawesome</li><li>add .npmrc file for pro-version</li></ul><div class="language-bash"><pre><code><span class="token comment"># https://fontawesome.com/how-to-use/use-with-node-js#pro</span>
@fortawesome:registry<span class="token operator">=</span>https://npm.fontawesome.com/TOKEN

</code></pre></div><ul><li><a href="https://github.com/FortAwesome/Font-Awesome/blob/master/UPGRADING.md#50x-to-510" target="_blank" rel="noopener noreferrer">extra info</a></li><li>add package</li></ul><div class="language-bash"><pre><code><span class="token string">&quot;@fortawesome/pro-solid-svg-icons&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;^5.7.1&quot;</span>,
</code></pre></div><ul><li>@/plugins/fontawesome.js</li></ul><div class="language-js"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> library <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@fortawesome/fontawesome-svg-core&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  faBars<span class="token punctuation">,</span>
  faBarcodeRead<span class="token punctuation">,</span>
  faBookmark<span class="token punctuation">,</span>
  faCog<span class="token punctuation">,</span>
  faChevronDoubleLeft<span class="token punctuation">,</span>
  faHeart<span class="token punctuation">,</span>
  faShareSquare
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@fortawesome/pro-solid-svg-icons&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> FontAwesomeIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@fortawesome/vue-fontawesome&quot;</span><span class="token punctuation">;</span>

library<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>
  faBars<span class="token punctuation">,</span>
  faBarcodeRead<span class="token punctuation">,</span>
  faBookmark<span class="token punctuation">,</span>
  faCog<span class="token punctuation">,</span>
  faChevronDoubleLeft<span class="token punctuation">,</span>
  faHeart<span class="token punctuation">,</span>
  faShareSquare
<span class="token punctuation">)</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;font-awesome-icon&quot;</span><span class="token punctuation">,</span> FontAwesomeIcon<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div>`,7),p=[e];function c(u,l,r,i,k,d){return s(),a("div",null,p)}var w=n(t,[["render",c]]);export{m as __pageData,w as default};
