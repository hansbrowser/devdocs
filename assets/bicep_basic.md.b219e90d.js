import{_ as n,y as s,x as a,W as p}from"./plugin-vue_export-helper.ac3310fd.js";const g='{"title":"Basic bicep file","description":"","frontmatter":{},"headers":[{"level":2,"title":"main.bicep","slug":"main-bicep"},{"level":2,"title":"dependson-example.bicep","slug":"dependson-example-bicep"},{"level":2,"title":"existing-resource-example.bicep","slug":"existing-resource-example-bicep"}],"relativePath":"bicep/basic.md","lastUpdated":1674137342317}',t={},o=p(`<h1 id="basic-bicep-file" tabindex="-1">Basic bicep file <a class="header-anchor" href="#basic-bicep-file" aria-hidden="true">#</a></h1><h2 id="main-bicep" tabindex="-1">main.bicep <a class="header-anchor" href="#main-bicep" aria-hidden="true">#</a></h2><div class="language-csharp"><pre><code>param location <span class="token keyword">string</span> <span class="token operator">=</span> <span class="token function">resourceGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token return-type class-name">location</span>

@<span class="token function">allowed</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    &#39;dev&#39;
    &#39;uat&#39;
    &#39;prod&#39;
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
@<span class="token function">minLength</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
@<span class="token function">maxLength</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
param enviroment <span class="token keyword">string</span> 

<span class="token class-name"><span class="token keyword">var</span></span> uniquePart <span class="token operator">=</span> <span class="token function">uniqueString</span><span class="token punctuation">(</span><span class="token function">resourceGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span>  <span class="token comment">// Note the &#39;seed&#39; value. Same value when using same seed.</span>
<span class="token class-name"><span class="token keyword">var</span></span> stgAcctName <span class="token operator">=</span> &#39;mystg$<span class="token punctuation">{</span>enviroment<span class="token punctuation">}</span>$<span class="token punctuation">{</span>uniquePart<span class="token punctuation">}</span>&#39;  <span class="token comment">// string interpolation</span>

resource mySymbolicName &#39;Microsoft<span class="token punctuation">.</span>Storage<span class="token operator">/</span>storageAccounts@<span class="token number">2021</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span>&#39; <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">:</span> <span class="token class-name">stgAcctName</span>
  location<span class="token punctuation">:</span> <span class="token class-name">location</span>
  kind<span class="token punctuation">:</span> &#39;BlobStorage&#39;
  sku<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    name<span class="token punctuation">:</span> &#39;Standard_LRS&#39; <span class="token comment">// Standard for now</span>
  <span class="token punctuation">}</span>
  properties<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    accessTier<span class="token punctuation">:</span> &#39;Hot&#39;
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

output StorageAccountName <span class="token keyword">string</span> <span class="token operator">=</span> stgAcctName

</code></pre></div><h2 id="dependson-example-bicep" tabindex="-1">dependson-example.bicep <a class="header-anchor" href="#dependson-example-bicep" aria-hidden="true">#</a></h2><div class="language-csharp"><pre><code>param location <span class="token keyword">string</span> <span class="token operator">=</span> &#39;AustraliaEast&#39;
param appNamePrefix <span class="token keyword">string</span> <span class="token operator">=</span> <span class="token function">uniqueString</span><span class="token punctuation">(</span><span class="token function">resourceGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span>

<span class="token class-name"><span class="token keyword">var</span></span> functionAppName <span class="token operator">=</span> &#39;$<span class="token punctuation">{</span>appNamePrefix<span class="token punctuation">}</span><span class="token operator">-</span>functionapp&#39;
<span class="token class-name"><span class="token keyword">var</span></span> appServiceName <span class="token operator">=</span> &#39;$<span class="token punctuation">{</span>appNamePrefix<span class="token punctuation">}</span><span class="token operator">-</span>appservice&#39;

<span class="token comment">// remove dashes for storage account name</span>
<span class="token class-name"><span class="token keyword">var</span></span> storageAccountName <span class="token operator">=</span> <span class="token function">format</span><span class="token punctuation">(</span>&#39;<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span>sta&#39;<span class="token punctuation">,</span> <span class="token function">replace</span><span class="token punctuation">(</span>appNamePrefix<span class="token punctuation">,</span> <span class="token string character">&#39;-&#39;</span><span class="token punctuation">,</span> &#39;&#39;<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// Storage Account</span>
resource storageAccount &#39;Microsoft<span class="token punctuation">.</span>Storage<span class="token operator">/</span>storageAccounts@<span class="token number">2019</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">01</span>&#39; <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">:</span> <span class="token class-name">storageAccountName</span>
  location<span class="token punctuation">:</span> <span class="token class-name">location</span>
  sku<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    name<span class="token punctuation">:</span> &#39;Standard_LRS&#39;
  <span class="token punctuation">}</span>
  kind<span class="token punctuation">:</span> &#39;StorageV2&#39;
  properties<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    supportsHttpsTrafficOnly<span class="token punctuation">:</span> <span class="token class-name">true</span>
    accessTier<span class="token punctuation">:</span> &#39;Hot&#39;
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// App Service</span>
resource appService &#39;Microsoft<span class="token punctuation">.</span>Web<span class="token operator">/</span>serverFarms@<span class="token number">2020</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">01</span>&#39; <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">:</span> <span class="token class-name">appServiceName</span>
  location<span class="token punctuation">:</span> <span class="token class-name">location</span>
  kind<span class="token punctuation">:</span> &#39;functionapp&#39;
  sku<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    name<span class="token punctuation">:</span> &#39;Y1&#39;
    tier<span class="token punctuation">:</span> &#39;Dynamic&#39;
    size<span class="token punctuation">:</span> &#39;Y1&#39;
    family<span class="token punctuation">:</span> <span class="token string character">&#39;Y&#39;</span>
    capacity<span class="token punctuation">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Function App</span>
resource functionApp &#39;Microsoft<span class="token punctuation">.</span>Web<span class="token operator">/</span>sites@<span class="token number">2021</span><span class="token operator">-</span><span class="token number">03</span><span class="token operator">-</span><span class="token number">01</span>&#39; <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">:</span> <span class="token class-name">functionAppName</span>
  
  location<span class="token punctuation">:</span> <span class="token class-name">location</span>
  kind<span class="token punctuation">:</span> &#39;functionapp&#39;
  properties<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    enabled<span class="token punctuation">:</span> <span class="token class-name">true</span>
    siteConfig<span class="token punctuation">:</span> <span class="token punctuation">{</span>
      appSettings<span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          name<span class="token punctuation">:</span> &#39;BlobStorageConnection&#39;
          <span class="token keyword">value</span><span class="token punctuation">:</span> &#39;DefaultEndpointsProtocol<span class="token operator">=</span>https<span class="token punctuation">;</span>AccountName<span class="token operator">=</span>$<span class="token punctuation">{</span>storageAccount<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token punctuation">;</span>EndpointSuffix<span class="token operator">=</span>$<span class="token punctuation">{</span><span class="token function">environment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>suffixes<span class="token punctuation">.</span>storage<span class="token punctuation">}</span><span class="token punctuation">;</span>AccountKey<span class="token operator">=</span>$<span class="token punctuation">{</span>storageAccount<span class="token punctuation">.</span><span class="token function">listKeys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>keys<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token keyword">value</span><span class="token punctuation">}</span>&#39;
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    httpsOnly<span class="token punctuation">:</span> <span class="token class-name">true</span>
    serverFarmId<span class="token punctuation">:</span> appService<span class="token punctuation">.</span>id
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="existing-resource-example-bicep" tabindex="-1">existing-resource-example.bicep <a class="header-anchor" href="#existing-resource-example-bicep" aria-hidden="true">#</a></h2><div class="language-csharp"><pre><code>param location <span class="token keyword">string</span> <span class="token operator">=</span> <span class="token function">resourceGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token return-type class-name">location</span>

@<span class="token function">allowed</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    &#39;dev&#39;
    &#39;uat&#39;
    &#39;prod&#39;
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
@<span class="token function">minLength</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
@<span class="token function">maxLength</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
param enviroment <span class="token keyword">string</span> 

<span class="token class-name"><span class="token keyword">var</span></span> uniquePart <span class="token operator">=</span> <span class="token function">uniqueString</span><span class="token punctuation">(</span><span class="token function">resourceGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span>  <span class="token comment">// Note the &#39;seed&#39; value. Same value when using same seed.</span>
<span class="token class-name"><span class="token keyword">var</span></span> stgAcctName <span class="token operator">=</span> &#39;mystg$<span class="token punctuation">{</span>enviroment<span class="token punctuation">}</span>$<span class="token punctuation">{</span>uniquePart<span class="token punctuation">}</span>&#39;  <span class="token comment">// string interpolation</span>

resource mySymbolicName &#39;Microsoft<span class="token punctuation">.</span>Storage<span class="token operator">/</span>storageAccounts@<span class="token number">2021</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span>&#39; <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">:</span> <span class="token class-name">stgAcctName</span>
  location<span class="token punctuation">:</span> <span class="token class-name">location</span>
  kind<span class="token punctuation">:</span> &#39;BlobStorage&#39;
  sku<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    name<span class="token punctuation">:</span> &#39;Standard_LRS&#39; <span class="token comment">// Standard for now</span>
  <span class="token punctuation">}</span>
  properties<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    accessTier<span class="token punctuation">:</span> &#39;Hot&#39;
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Reference in same resource group</span>
resource alreadyCreatedStorage &#39;Microsoft<span class="token punctuation">.</span>Storage<span class="token operator">/</span>storageAccounts@<span class="token number">2021</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span>&#39; existing <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">:</span> &#39;nameofstorageacct&#39;
<span class="token punctuation">}</span>

<span class="token comment">// Reference in different resource group</span>
resource alreadyCreatedStorageOtherGroup &#39;Microsoft<span class="token punctuation">.</span>Storage<span class="token operator">/</span>storageAccounts@<span class="token number">2021</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span>&#39; existing <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">:</span> &#39;nameofstorageacct&#39;
  scope<span class="token punctuation">:</span> <span class="token function">resourceGroup</span><span class="token punctuation">(</span>&#39;anotherResourceGroup&#39;<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Reference in different subscription and resource group</span>
resource alreadyCreatedStorageOtherSub &#39;Microsoft<span class="token punctuation">.</span>Storage<span class="token operator">/</span>storageAccounts@<span class="token number">2021</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span>&#39; existing <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">:</span> &#39;nameofstorageacct&#39;
  scope<span class="token punctuation">:</span> <span class="token function">resourceGroup</span><span class="token punctuation">(</span>&#39;subscriptionId<span class="token string character">&#39;,&#39;</span>anotherResourceGroup&#39;<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

output StorageAccountName <span class="token keyword">string</span> <span class="token operator">=</span> stgAcctName


</code></pre></div>`,7),e=[o];function c(u,l,r,i,k,m){return a(),s("div",null,e)}var f=n(t,[["render",c]]);export{g as __pageData,f as default};
