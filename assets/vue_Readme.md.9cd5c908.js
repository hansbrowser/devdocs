import{_ as a,c as n,o as s,a as t}from"./app.e3da9a89.js";const h='{"title":"Introduction vue","description":"","frontmatter":{},"relativePath":"vue/Readme.md","lastUpdated":1634462221875}',e={},p=t(`<h1 id="introduction-vue" tabindex="-1">Introduction vue <a class="header-anchor" href="#introduction-vue" aria-hidden="true">#</a></h1><p><a href="https://medium.com/@znck/type-vue-without-typescript-b2b49210f0b" target="_blank" rel="noopener noreferrer">Using Types in vuejs, vscode</a></p><p><a href="https://medium.com/magnetis-backstage/working-an-application-in-vue-js-with-tdd-an-extensive-guide-for-people-who-have-time-part-1-3be791dafa2b" target="_blank" rel="noopener noreferrer">Test Driven Development</a></p><p><a href="https://michaelnthiessen.com/26-time-saving-tips/" target="_blank" rel="noopener noreferrer">Time saving tips</a></p><h1 id="replace-jquery-with-vue" tabindex="-1">Replace jQuery with Vue <a class="header-anchor" href="#replace-jquery-with-vue" aria-hidden="true">#</a></h1><ul><li><a href="https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/" target="_blank" rel="noopener noreferrer">https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/</a></li></ul><h1 id="lazy-loading-views-router-pages" tabindex="-1">Lazy loading views --&gt; router pages <a class="header-anchor" href="#lazy-loading-views-router-pages" aria-hidden="true">#</a></h1><ul><li>every page in a seperate chunk (automaticly sets it to prefetch)<div class="language-bash"><pre><code>const ProductView <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span>import<span class="token punctuation">(</span>/* webpackChunkName: <span class="token string">&quot;product&quot;</span> */ <span class="token string">&quot;@/views/product/Product.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li></ul><h1 id="lazy-loading-images-v-lazy-image" tabindex="-1">Lazy loading images --&gt; v-lazy-image <a class="header-anchor" href="#lazy-loading-images-v-lazy-image" aria-hidden="true">#</a></h1><p><a href="https://vuedose.tips/tips/lazy-loading-images-with-v-lazy-image/" target="_blank" rel="noopener noreferrer">Lazy load images with v-lazy-image</a></p><h1 id="debugging-templates-in-vue-js" tabindex="-1">Debugging Templates in Vue.js <a class="header-anchor" href="#debugging-templates-in-vue-js" aria-hidden="true">#</a></h1><p><a href="https://vuedose.tips/tips/debugging-templates-in-vue-js/" target="_blank" rel="noopener noreferrer">tip link</a></p><h1 id="handling-dialogs-with-vue-router" tabindex="-1">Handling Dialogs with Vue Router <a class="header-anchor" href="#handling-dialogs-with-vue-router" aria-hidden="true">#</a></h1><p><a href="https://dev.to/berniwittmann/handling-dialogs-with-vue-router-29ji?utm_campaign=Vue.js%20News&amp;utm_medium=email&amp;utm_source=Revue%20newsletter" target="_blank" rel="noopener noreferrer">Handling Dialogs with Vue Router</a></p><h1 id="filters" tabindex="-1">Filters <a class="header-anchor" href="#filters" aria-hidden="true">#</a></h1><div class="language-js"><pre><code>Vue<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token string">&#39;toFixed&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">price<span class="token punctuation">,</span> limit</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> price<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span>limit<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token string">&#39;toUSD&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">price</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">$</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>price<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    el<span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>

    data<span class="token operator">:</span> <span class="token punctuation">{</span>
        price<span class="token operator">:</span> <span class="token number">435.333</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{ price | toFixed(2) | toUSD }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,17),o=[p];function i(c,r,u,l,d,k){return s(),n("div",null,o)}var m=a(e,[["render",i]]);export{h as __pageData,m as default};