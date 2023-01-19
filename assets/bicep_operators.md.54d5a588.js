import{_ as s,y as a,x as n,W as e}from"./plugin-vue_export-helper.ac3310fd.js";const _='{"title":"Operators","description":"","frontmatter":{},"headers":[],"relativePath":"bicep/operators.md","lastUpdated":1674137144995}',o={},p=e(`<h1 id="operators" tabindex="-1">Operators <a class="header-anchor" href="#operators" aria-hidden="true">#</a></h1><div class="language-csharp"><pre><code>
param environment <span class="token keyword">string</span>

<span class="token class-name"><span class="token keyword">var</span></span> someObject <span class="token operator">=</span> <span class="token punctuation">{</span>
  prop1<span class="token punctuation">:</span> <span class="token keyword">null</span>
  prop2<span class="token punctuation">:</span> &#39;all<span class="token operator">-</span>good&#39;
<span class="token punctuation">}</span>

<span class="token class-name"><span class="token keyword">var</span></span> capacityInGb <span class="token operator">=</span> <span class="token number">200</span>
<span class="token class-name"><span class="token keyword">var</span></span> sqlCapacityActualValue <span class="token operator">=</span> capacityInGb <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span>

<span class="token class-name"><span class="token keyword">var</span></span> coalesceOp <span class="token operator">=</span> someObject<span class="token punctuation">.</span>prop1 <span class="token operator">??</span> &#39;<span class="token number">123</span>&#39;

<span class="token class-name"><span class="token keyword">var</span></span> isProd <span class="token operator">=</span> environment <span class="token operator">==</span> &#39;prd&#39;

<span class="token class-name"><span class="token keyword">var</span></span> vmSeries <span class="token operator">=</span> isProd <span class="token punctuation">?</span> &#39;Standard_D4_v3&#39; <span class="token punctuation">:</span> &#39;Standard_B2ms&#39;  <span class="token comment">// Use burstable VM&#39;s for non prod</span>

output sqlCapacityFigure <span class="token keyword">int</span> <span class="token operator">=</span> sqlCapacityActualValue  <span class="token comment">// 214748364800</span>
output isProduction <span class="token keyword">bool</span> <span class="token operator">=</span> isProd   <span class="token comment">// if &#39;dev&#39; or &#39;uat&#39;, then false, else true</span>
output isItNull <span class="token keyword">string</span> <span class="token operator">=</span> coalesceOp <span class="token comment">// &#39;123&#39;</span>
output vmSeries <span class="token keyword">string</span> <span class="token operator">=</span> vmSeries
</code></pre></div>`,2),t=[p];function r(c,l,k,i,d,u){return n(),a("div",null,t)}var v=s(o,[["render",r]]);export{_ as __pageData,v as default};
