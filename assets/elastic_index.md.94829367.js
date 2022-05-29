import{_ as n,c as s,o as a,a as t}from"./app.162ab074.js";const m='{"title":"Introduction ElasticSearch","description":"","frontmatter":{},"headers":[{"level":2,"title":"How it works","slug":"how-it-works"},{"level":2,"title":"mapping","slug":"mapping"},{"level":2,"title":"Reindex","slug":"reindex"},{"level":2,"title":"Alias","slug":"alias"},{"level":2,"title":"Bulk upload","slug":"bulk-upload"}],"relativePath":"elastic/index.md","lastUpdated":1653835935266}',e={},o=t(`<h1 id="introduction-elasticsearch" tabindex="-1">Introduction ElasticSearch <a class="header-anchor" href="#introduction-elasticsearch" aria-hidden="true">#</a></h1><h2 id="how-it-works" tabindex="-1">How it works <a class="header-anchor" href="#how-it-works" aria-hidden="true">#</a></h2><ul><li><a href="https://www.youtube.com/watch?v=p_cviIn1f_k" target="_blank" rel="noopener noreferrer">autosearch, ngrams</a></li><li><a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/tune-for-indexing-speed.html#_increase_the_refresh_interval" target="_blank" rel="noopener noreferrer">tuning for bulk indexing</a></li></ul><h2 id="mapping" tabindex="-1">mapping <a class="header-anchor" href="#mapping" aria-hidden="true">#</a></h2><ul><li>index: true/false (Fields that are not indexed are not queryable)</li><li>boost: only available at query time (index time boost is deprecated)</li><li>dynamic <ul><li>strict; trying to add document with fields that are not mapped. Document is rejected.</li><li>false; trying to add document with fields that are not mapped. Document is accepted. Extra fields are available in _source, but not indexed.</li></ul></li><li>keyword: search whole values</li><li>text: search individual tokens</li><li>default dynamic mappings for string fields are both text and keyword:</li></ul><div class="language-bash"><pre><code><span class="token punctuation">{</span>
  <span class="token string">&quot;foo&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;type&quot;</span> <span class="token string">&quot;text&quot;</span>,
    <span class="token string">&quot;fields&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;keyword&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;keyword&quot;</span>,
        <span class="token string">&quot;ignore_above&quot;</span><span class="token builtin class-name">:</span> <span class="token number">256</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="reindex" tabindex="-1">Reindex <a class="header-anchor" href="#reindex" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code>POST _reindex
<span class="token punctuation">{</span>
  <span class="token string">&quot;source&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;index&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;tradeitems_1&quot;</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;dest&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;index&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;tradeitems_2&quot;</span>,
    <span class="token string">&quot;version_type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;internal&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="alias" tabindex="-1">Alias <a class="header-anchor" href="#alias" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code>POST /_aliases
<span class="token punctuation">{</span>
    <span class="token string">&quot;actions&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token string">&quot;remove&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;index&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;tradeitems_1&quot;</span>, <span class="token string">&quot;alias&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;tradeitems&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>,
        <span class="token punctuation">{</span> <span class="token string">&quot;add&quot;</span><span class="token builtin class-name">:</span>    <span class="token punctuation">{</span> <span class="token string">&quot;index&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;tradeitems_2&quot;</span>, <span class="token string">&quot;alias&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;tradeitems&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="bulk-upload" tabindex="-1">Bulk upload <a class="header-anchor" href="#bulk-upload" aria-hidden="true">#</a></h2><ul><li>Set &quot;refresh_interval&quot;: &quot;-1&quot; (Default = 1 seconde)</li></ul><div class="language-bash"><pre><code><span class="token comment"># index: tradeitems</span>
<span class="token comment"># delete index</span>
<span class="token function">curl</span> -XDELETE <span class="token string">&#39;localhost:9200/tradeitems&#39;</span>

<span class="token comment"># create index</span>
<span class="token function">curl</span> -H <span class="token string">&#39;Content-Type: application/json&#39;</span> -XPUT <span class="token string">&#39;localhost:9200/tradeitems&#39;</span> -d @index.json

<span class="token comment"># split data in smaller files</span>
<span class="token assign-left variable"><span class="token environment constant">LINES</span></span><span class="token operator">=</span><span class="token number">20000</span>
<span class="token function">split</span> -l <span class="token environment constant">$LINES</span> data.json

<span class="token keyword">for</span> <span class="token for-or-select variable">xf</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">ls</span> <span class="token operator">|</span> <span class="token function">grep</span> x<span class="token punctuation">..</span>$<span class="token variable">)</span></span>
<span class="token keyword">do</span>
  <span class="token function">curl</span> --progress-bar -o nul -H <span class="token string">&#39;Content-Type: application/x-ndjson&#39;</span> -XPOST localhost:9200/tradeitems/_bulk --data-binary @<span class="token variable">$xf</span>
  <span class="token function">rm</span> <span class="token variable">$xf</span>
<span class="token keyword">done</span>

<span class="token comment"># refresh index</span>
<span class="token function">curl</span> -s -H <span class="token string">&#39;Content-Type: application/x-ndjson&#39;</span> -XPOST <span class="token string">&#39;localhost:9200/tradeitems/_refresh&#39;</span>
</code></pre></div>`,13),p=[o];function l(i,c,r,u,d,k){return a(),s("div",null,p)}var g=n(e,[["render",l]]);export{m as __pageData,g as default};
