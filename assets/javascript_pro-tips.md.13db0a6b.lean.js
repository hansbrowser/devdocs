import{_ as n,c as s,o as a,d as t}from"./app.0a7881cb.js";const g='{"title":"Pro Tips","description":"","frontmatter":{},"headers":[{"level":2,"title":"console-log","slug":"console-log"},{"level":2,"title":"destructuring","slug":"destructuring"},{"level":2,"title":"template-literals","slug":"template-literals"},{"level":2,"title":"spread-syntax","slug":"spread-syntax"},{"level":2,"title":"loops","slug":"loops"},{"level":2,"title":"async-await","slug":"async-await"}],"relativePath":"javascript/pro-tips.md","lastUpdated":1634462221782}',p={},o=t(`__VP_STATIC_START__<h1 id="pro-tips" tabindex="-1">Pro Tips <a class="header-anchor" href="#pro-tips" aria-hidden="true">#</a></h1><ul><li><a href="https://www.youtube.com/watch?v=Mus_vwhTCq0&amp;list=WL&amp;index=132" target="_blank" rel="noopener noreferrer">youtube</a></li><li>Use vscode + quokka to see the javascript in action <ul><li>copy code</li><li>cmd-shift-p &quot;Quokka.js; new javascript file&quot;</li><li>past code</li></ul></li></ul><h2 id="console-log" tabindex="-1">console-log <a class="header-anchor" href="#console-log" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">const</span> foo    <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span>   age<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span> nervous<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> bar    <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;dick&#39;</span><span class="token punctuation">,</span>  age<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span> nervous<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> baz    <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;harry&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> nervous<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token string">&#39;Bad Code \u{1F4A9}&#39;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>baz<span class="token punctuation">)</span><span class="token punctuation">;</span>



<span class="token string">&#39;Good Code \u2705&#39;</span>

<span class="token comment">// Computed Property Names</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c My Friends&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;color: orange; font-weight: bold;&#39;</span> <span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span> foo<span class="token punctuation">,</span> bar<span class="token punctuation">,</span> baz <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Console.table(...)</span>
console<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token punctuation">[</span>foo<span class="token punctuation">,</span> bar<span class="token punctuation">,</span> baz<span class="token punctuation">]</span><span class="token punctuation">)</span>


<span class="token comment">// // Console.time</span>
console<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&#39;looper&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">1000000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> i <span class="token operator">++</span> <span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">&#39;looper&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// // Stack Trace Logs</span>

<span class="token keyword">const</span> <span class="token function-variable function">deleteMe</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">trace</span><span class="token punctuation">(</span><span class="token string">&#39;bye bye database&#39;</span><span class="token punctuation">)</span>

<span class="token function">deleteMe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">deleteMe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="destructuring" tabindex="-1">destructuring <a class="header-anchor" href="#destructuring" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">const</span> turtle <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;Bob \u{1F422}&#39;</span><span class="token punctuation">,</span>
    legs<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    shell<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> 
    type<span class="token operator">:</span> <span class="token string">&#39;amphibious&#39;</span><span class="token punctuation">,</span>
    meal<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    diet<span class="token operator">:</span> <span class="token string">&#39;berries&#39;</span>
<span class="token punctuation">}</span>

<span class="token string">&#39;Bad Code \u{1F4A9}&#39;</span>

<span class="token keyword">function</span> <span class="token function">feed</span><span class="token punctuation">(</span><span class="token parameter">animal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Feed </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>animal<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>animal<span class="token punctuation">.</span>meal<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> kilos of </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>animal<span class="token punctuation">.</span>diet<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token string">&#39;Good Code \u2705&#39;</span>

<span class="token keyword">function</span> <span class="token function">feed</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name<span class="token punctuation">,</span> meal<span class="token punctuation">,</span> diet <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Feed </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>meal<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> kilos of </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>diet<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// OR</span>

<span class="token keyword">function</span> <span class="token function">feed</span><span class="token punctuation">(</span><span class="token parameter">animal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> meal<span class="token punctuation">,</span> diet <span class="token punctuation">}</span> <span class="token operator">=</span> animal<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Feed </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>meal<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> kilos of </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>diet<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>



console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">feed</span><span class="token punctuation">(</span>turtle<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="template-literals" tabindex="-1">template-literals <a class="header-anchor" href="#template-literals" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">const</span> horse <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;Topher \u{1F434}&#39;</span><span class="token punctuation">,</span>
    size<span class="token operator">:</span> <span class="token string">&#39;large&#39;</span><span class="token punctuation">,</span>
    skills<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;jousting&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;racing&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">7</span>
<span class="token punctuation">}</span>

<span class="token string">&#39;Bad String Code \u{1F4A9}&#39;</span>
  
<span class="token keyword">let</span> bio <span class="token operator">=</span> horse<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39; is a &#39;</span> <span class="token operator">+</span> horse<span class="token punctuation">.</span>size <span class="token operator">+</span> <span class="token string">&#39; horse skilled in &#39;</span> <span class="token operator">+</span> horse<span class="token punctuation">.</span>skills<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39; &amp; &#39;</span><span class="token punctuation">)</span>

<span class="token string">&#39;Good String Code \u2705&#39;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> size<span class="token punctuation">,</span> skills <span class="token punctuation">}</span> <span class="token operator">=</span> horse<span class="token punctuation">;</span>
bio <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is a </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>size<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> horse skilled in </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>skills<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39; &amp; &#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bio<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Advanced Tag Example</span>

<span class="token keyword">function</span> <span class="token function">horseAge</span><span class="token punctuation">(</span><span class="token parameter">str<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">const</span> ageStr <span class="token operator">=</span> age <span class="token operator">&gt;</span> <span class="token number">5</span> <span class="token operator">?</span> <span class="token string">&#39;old&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;young&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>str<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>ageStr<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> at </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> years</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> bio2 <span class="token operator">=</span> horseAge<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">This horse is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>horse<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bio2<span class="token punctuation">)</span>

</code></pre></div><h2 id="spread-syntax" tabindex="-1">spread-syntax <a class="header-anchor" href="#spread-syntax" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// Objects</span>

<span class="token keyword">const</span> pikachu <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;Pikachu \u{1F439}&#39;</span>  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> stats <span class="token operator">=</span> <span class="token punctuation">{</span> hp<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span> attack<span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span> defense<span class="token operator">:</span> <span class="token number">45</span> <span class="token punctuation">}</span>

<span class="token string">&#39;Bad Object Code \u{1F4A9}&#39;</span>

pikachu<span class="token punctuation">[</span><span class="token string">&#39;hp&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> stats<span class="token punctuation">.</span>hp
pikachu<span class="token punctuation">[</span><span class="token string">&#39;attack&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> stats<span class="token punctuation">.</span>attack
pikachu<span class="token punctuation">[</span><span class="token string">&#39;defense&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> stats<span class="token punctuation">.</span>defense

<span class="token comment">// OR</span>

<span class="token keyword">const</span> lvl0 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>pikachu<span class="token punctuation">,</span> stats<span class="token punctuation">)</span>
<span class="token keyword">const</span> lvl1 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>pikachu<span class="token punctuation">,</span> <span class="token punctuation">{</span> hp<span class="token operator">:</span> <span class="token number">45</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token string">&#39;Good Object Code \u2705&#39;</span>

<span class="token keyword">const</span> lvl0 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>pikachu<span class="token punctuation">,</span> <span class="token operator">...</span>stats <span class="token punctuation">}</span>
<span class="token keyword">const</span> lvl1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>pikachu<span class="token punctuation">,</span> hp<span class="token operator">:</span> <span class="token number">45</span> <span class="token punctuation">}</span>


<span class="token comment">// Arrays</span>

<span class="token keyword">let</span> pokemon <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Arbok&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Raichu&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sandshrew&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token string">&#39;Bad Array Code \u{1F4A9}&#39;</span>

pokemon<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;Bulbasaur&#39;</span><span class="token punctuation">)</span>
pokemon<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;Metapod&#39;</span><span class="token punctuation">)</span>
pokemon<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;Weedle&#39;</span><span class="token punctuation">)</span>

<span class="token string">&#39;Good Array Code \u2705&#39;</span>

<span class="token comment">// Push </span>
pokemon <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>pokemon<span class="token punctuation">,</span> <span class="token string">&#39;Bulbasaur&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Metapod&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Weedle&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// Shift</span>

pokemon <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Bulbasaur&#39;</span><span class="token punctuation">,</span> <span class="token operator">...</span>pokemon<span class="token punctuation">,</span> <span class="token string">&#39;Metapod&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Weedle&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">]</span>

</code></pre></div><h2 id="loops" tabindex="-1">loops <a class="header-anchor" href="#loops" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">const</span> orders <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">223</span><span class="token punctuation">]</span><span class="token punctuation">;</span>


<span class="token string">&#39;Bad Loop Code \u{1F4A9}&#39;</span>

<span class="token keyword">const</span> total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> withTax <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> highValue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> orders<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 

    <span class="token comment">// Reduce</span>
    total <span class="token operator">+=</span> orders<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// Map</span>
    withTax<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>orders<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">1.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Filter</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>orders<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        highValue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>orders<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token string">&#39;Good Loop Code \u2705&#39;</span>

<span class="token comment">// Reduce</span>
<span class="token keyword">const</span> total <span class="token operator">=</span> orders<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> acc <span class="token operator">+</span> cur<span class="token punctuation">)</span>

<span class="token comment">// Map</span>
<span class="token keyword">const</span> withTax <span class="token operator">=</span> orders<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> v <span class="token operator">*</span> <span class="token number">1.1</span><span class="token punctuation">)</span>

<span class="token comment">// Filter</span>
<span class="token keyword">const</span> highValue <span class="token operator">=</span> orders<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> v <span class="token operator">&gt;</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * Every
 * @returns false
 */</span>
<span class="token keyword">const</span> everyValueGreaterThan50 <span class="token operator">=</span> orders<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> v <span class="token operator">&gt;</span> <span class="token number">50</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * Every
 * @returns true
 */</span>
<span class="token keyword">const</span> everyValueGreaterThan10 <span class="token operator">=</span> orders<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> v <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">)</span>


<span class="token comment">/**
 * Some
 * @returns false
 */</span>
<span class="token keyword">const</span> someValueGreaterThan500 <span class="token operator">=</span> orders<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> v <span class="token operator">&gt;</span> <span class="token number">500</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * Some
 * @returns true
 */</span>
<span class="token keyword">const</span> someValueGreaterThan10 <span class="token operator">=</span> orders<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> v <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">)</span>

</code></pre></div><h2 id="async-await" tabindex="-1">async-await <a class="header-anchor" href="#async-await" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">random</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token string">&#39;Bad Promise Code \u{1F4A9}&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">sumRandomAsyncNums</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> first<span class="token punctuation">;</span>
    <span class="token keyword">let</span> second<span class="token punctuation">;</span>
    <span class="token keyword">let</span> third<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            first <span class="token operator">=</span> v<span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            second <span class="token operator">=</span> v<span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            third <span class="token operator">=</span> v<span class="token punctuation">;</span>
            <span class="token keyword">return</span> first <span class="token operator">+</span> second <span class="token operator">+</span> third
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Result </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>v<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token string">&#39;Good Promise Code \u2705&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">sumRandomAsyncNums</span> <span class="token operator">=</span> <span class="token keyword">async</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> first <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> second <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> third <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Result </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>first <span class="token operator">+</span> second <span class="token operator">+</span> third<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// do something</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> randos <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
        <span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">const</span> r <span class="token keyword">of</span> <span class="token keyword">await</span> randos<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token function">sumRandomAsyncNums</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h1 id="async-await-with-try-catch" tabindex="-1">Async Await with Try-catch <a class="header-anchor" href="#async-await-with-try-catch" aria-hidden="true">#</a></h1><div class="language-js"><pre><code>    <span class="token keyword">try</span> <span class="token punctuation">{</span>
       <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> UserModel<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>user<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">cb</span><span class="token punctuation">(</span><span class="token string">&#39;No user found&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">cb</span><span class="token punctuation">(</span><span class="token string">&#39;Unexpected error occurred&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre></div><ul><li>Alternative</li></ul><div class="language-js"><pre><code><span class="token comment">// to.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">to</span><span class="token punctuation">(</span><span class="token parameter">promise</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token keyword">null</span><span class="token punctuation">,</span> data<span class="token punctuation">]</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>err<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

     <span class="token keyword">let</span> err<span class="token punctuation">,</span> user<span class="token punctuation">,</span> savedTask<span class="token punctuation">;</span>

     <span class="token punctuation">[</span>err<span class="token punctuation">,</span> user<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">to</span><span class="token punctuation">(</span>UserModel<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>user<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">CustomerError</span><span class="token punctuation">(</span><span class="token string">&#39;No user found&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div>__VP_STATIC_END__`,18),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{g as __pageData,h as default};
