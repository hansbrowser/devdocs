import{_ as n,y as s,x as a,W as t}from"./plugin-vue_export-helper.ac3310fd.js";const m='{"title":"Conditions","description":"","frontmatter":{},"headers":[{"level":2,"title":"Conditions-from-json-file.bicep","slug":"conditions-from-json-file-bicep"},{"level":2,"title":"skuSettings/dbSku.json","slug":"skusettings-dbsku-json"},{"level":2,"title":"skuSettings/dbSkuProperties.json","slug":"skusettings-dbskuproperties-json"}],"relativePath":"bicep/conditions.md","lastUpdated":1674137739358}',p={},o=t(`<h1 id="conditions" tabindex="-1">Conditions <a class="header-anchor" href="#conditions" aria-hidden="true">#</a></h1><h2 id="conditions-from-json-file-bicep" tabindex="-1">Conditions-from-json-file.bicep <a class="header-anchor" href="#conditions-from-json-file-bicep" aria-hidden="true">#</a></h2><div class="language-csharp"><pre><code>
@<span class="token function">allowed</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  &#39;dev&#39;
  &#39;uat&#39;
  &#39;prod&#39;
<span class="token punctuation">]</span><span class="token punctuation">)</span>
@<span class="token function">description</span><span class="token punctuation">(</span>&#39;Deployment environment&#39;<span class="token punctuation">)</span>
param environment <span class="token return-type class-name"><span class="token keyword">string</span></span> 

@<span class="token function">minLength</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>
param adminUsername <span class="token return-type class-name"><span class="token keyword">string</span></span>

@<span class="token function">secure</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
@<span class="token function">minLength</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
param adminPassword <span class="token keyword">string</span>

<span class="token class-name"><span class="token keyword">var</span></span> sqlDbName <span class="token operator">=</span> &#39;SomeSqlDb&#39;
<span class="token class-name"><span class="token keyword">var</span></span> sqlServerName <span class="token operator">=</span> &#39;SomeSqlServer&#39;

resource sqlServer &#39;Microsoft<span class="token punctuation">.</span>Sql<span class="token operator">/</span>servers@<span class="token number">2019</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span>preview&#39; <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">:</span> <span class="token class-name">sqlServerName</span>
  location<span class="token punctuation">:</span> <span class="token function">resourceGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token class-name">location</span>
  properties<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    minimalTlsVersion<span class="token punctuation">:</span> &#39;<span class="token number">1.2</span>&#39;
    administratorLogin<span class="token punctuation">:</span> <span class="token class-name">adminUsername</span>
    administratorLoginPassword<span class="token punctuation">:</span> adminPassword
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name"><span class="token keyword">var</span></span> dbSkus <span class="token operator">=</span> <span class="token function">loadJsonContent</span><span class="token punctuation">(</span>&#39;skuSettings<span class="token operator">/</span>dbSku<span class="token punctuation">.</span>json&#39;<span class="token punctuation">)</span>
<span class="token class-name"><span class="token keyword">var</span></span> dbSkuProperties <span class="token operator">=</span> <span class="token function">loadJsonContent</span><span class="token punctuation">(</span>&#39;skuSettings<span class="token operator">/</span>dbSkuProperties<span class="token punctuation">.</span>json&#39;<span class="token punctuation">)</span>

resource sqlDatabase &#39;Microsoft<span class="token punctuation">.</span>Sql<span class="token operator">/</span>servers<span class="token operator">/</span>databases@<span class="token number">2020</span><span class="token operator">-</span><span class="token number">08</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span>preview&#39; <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">:</span> &#39;$<span class="token punctuation">{</span>sqlServer<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">/</span>$<span class="token punctuation">{</span>sqlDbName<span class="token punctuation">}</span>&#39;
  location<span class="token punctuation">:</span> <span class="token function">resourceGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token class-name">location</span>
  sku<span class="token punctuation">:</span> dbSkus<span class="token punctuation">[</span>environment<span class="token punctuation">]</span>
  properties<span class="token punctuation">:</span> dbSkuProperties<span class="token punctuation">[</span>environment<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="skusettings-dbsku-json" tabindex="-1">skuSettings/dbSku.json <a class="header-anchor" href="#skusettings-dbsku-json" aria-hidden="true">#</a></h2><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;GP_Gen5&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;GeneralPurpose&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;family&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Gen5&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;capacity&quot;</span><span class="token operator">:</span> <span class="token number">4</span> 
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;uat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;GP_Gen5&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;GeneralPurpose&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;family&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Gen5&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;capacity&quot;</span><span class="token operator">:</span> <span class="token number">12</span> 
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;prod&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;GP_Gen5&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;GeneralPurpose&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;family&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Gen5&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;capacity&quot;</span><span class="token operator">:</span> <span class="token number">24</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="skusettings-dbskuproperties-json" tabindex="-1">skuSettings/dbSkuProperties.json <a class="header-anchor" href="#skusettings-dbskuproperties-json" aria-hidden="true">#</a></h2><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;collation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Latin1_General_CI_AS&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;maxSizeBytes&quot;</span><span class="token operator">:</span> <span class="token number">268435456000</span><span class="token punctuation">,</span>
    <span class="token property">&quot;zoneRedundant&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;uat&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;collation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Latin1_General_CI_AS&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;maxSizeBytes&quot;</span><span class="token operator">:</span> <span class="token number">536870912000</span><span class="token punctuation">,</span>
    <span class="token property">&quot;zoneRedundant&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;prod&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;collation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Latin1_General_CI_AS&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;maxSizeBytes&quot;</span><span class="token operator">:</span> <span class="token number">1073741824000</span><span class="token punctuation">,</span>
    <span class="token property">&quot;zoneRedundant&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,7),e=[o];function c(u,r,l,k,i,d){return a(),s("div",null,e)}var b=n(p,[["render",c]]);export{m as __pageData,b as default};
