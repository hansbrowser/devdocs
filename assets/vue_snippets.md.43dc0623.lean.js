import{_ as n,c as s,o as a,a as t}from"./app.898a861e.js";const g='{"title":"Snippets","description":"","frontmatter":{},"headers":[{"level":2,"title":"Vue template","slug":"vue-template"}],"relativePath":"vue/snippets.md","lastUpdated":1634462221907}',p={},o=t(`__VP_STATIC_START__<h1 id="snippets" tabindex="-1">Snippets <a class="header-anchor" href="#snippets" aria-hidden="true">#</a></h1><h2 id="vue-template" tabindex="-1">Vue template <a class="header-anchor" href="#vue-template" aria-hidden="true">#</a></h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-js"><pre><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mapState<span class="token punctuation">,</span> mapActions<span class="token punctuation">,</span> mapGetters <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> myComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../components/components.vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span> myComponent <span class="token punctuation">}</span><span class="token punctuation">,</span>
  props<span class="token operator">:</span> <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> Number<span class="token punctuation">,</span>
	  required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	  <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    <span class="token comment">// The value must match one of these strings</span>
	    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;warning&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;danger&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span>
	<span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      myAttribute<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      myArray<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">&quot;s&quot;</span><span class="token punctuation">,</span> text<span class="token operator">:</span> <span class="token string">&quot;Small&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">&quot;m&quot;</span><span class="token punctuation">,</span> text<span class="token operator">:</span> <span class="token string">&quot;Medium&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">&quot;l&quot;</span><span class="token punctuation">,</span> text<span class="token operator">:</span> <span class="token string">&quot;Large&quot;</span> <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      myObject<span class="token operator">:</span> <span class="token punctuation">{</span>
        x<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">0.3</span><span class="token punctuation">,</span>
        y<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        z<span class="token operator">:</span> <span class="token number">0</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  computed<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token string">&quot;myStore&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;myItem1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;myItem2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token string">&quot;myStore&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;myItem3&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function-variable function">myComputed</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>myObject<span class="token punctuation">.</span>x <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  watch<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">myItem1</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">newItem1<span class="token punctuation">,</span> oldItem1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// do something on state change myItem1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">mounted</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// do something on mounted</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">created</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// do something on created</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token string">&quot;myStore&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;initStore&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">myMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>myAttribute <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><div class="language-css"><pre><code>&lt;style scoped&gt;
&lt;/style&gt;
</code></pre></div>__VP_STATIC_END__`,5),e=[o];function c(u,l,k,i,r,m){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{g as __pageData,y as default};
