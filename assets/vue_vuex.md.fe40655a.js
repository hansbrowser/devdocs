import{_ as n,c as s,o as a,a as t}from"./app.e3da9a89.js";const _='{"title":"Vuex refactoring","description":"","frontmatter":{},"headers":[{"level":2,"title":"Old","slug":"old"},{"level":2,"title":"New","slug":"new"},{"level":2,"title":"component","slug":"component"}],"relativePath":"vue/vuex.md","lastUpdated":1634462221934}',p={},o=t(`<h1 id="vuex-refactoring" tabindex="-1">Vuex refactoring <a class="header-anchor" href="#vuex-refactoring" aria-hidden="true">#</a></h1><h2 id="old" tabindex="-1">Old <a class="header-anchor" href="#old" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	state<span class="token operator">:</span> <span class="token punctuation">{</span>
		counter<span class="token operator">:</span> <span class="token number">0</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	mutations<span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token function">setCounter</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			state<span class="token punctuation">.</span>counter <span class="token operator">=</span> payload<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	actions<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	getters<span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token function">getCounter</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> state<span class="token punctuation">.</span>counter<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	modules<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre></div><h2 id="new" tabindex="-1">New <a class="header-anchor" href="#new" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span><span class="token constant">GET_COUNTER</span><span class="token punctuation">,</span> <span class="token constant">SET_COUNTER</span><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./mutation-types&quot;</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	state<span class="token operator">:</span> <span class="token punctuation">{</span>
		counter<span class="token operator">:</span> <span class="token number">0</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	mutations<span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token punctuation">[</span><span class="token constant">SET_COUNTER</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>state<span class="token punctuation">.</span>counter <span class="token operator">=</span> payload<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	actions<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	getters<span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token punctuation">[</span><span class="token constant">GET_COUNTER</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>counter<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	modules<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre></div><h2 id="component" tabindex="-1">component <a class="header-anchor" href="#component" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span><span class="token constant">GET_COUNTER</span><span class="token punctuation">,</span> <span class="token constant">SET_COUNTER</span><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/store/mutation-types&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>mapGetters<span class="token punctuation">,</span> mapMutations<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token string">&quot;Home&quot;</span><span class="token punctuation">,</span>
	methods<span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			increment<span class="token operator">:</span> <span class="token constant">SET_COUNTER</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	computed<span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			counter<span class="token operator">:</span> <span class="token constant">GET_COUNTER</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,7),e=[o];function c(u,l,k,r,i,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{_ as __pageData,f as default};
