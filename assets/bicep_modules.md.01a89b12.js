import{_ as n,y as s,x as a,W as p}from"./plugin-vue_export-helper.ac3310fd.js";const b='{"title":"Modules","description":"","frontmatter":{},"headers":[{"level":2,"title":"main.bicep","slug":"main-bicep"},{"level":2,"title":"storage.bicep","slug":"storage-bicep"},{"level":2,"title":"appservice.bicep","slug":"appservice-bicep"},{"level":2,"title":"vm.bicep","slug":"vm-bicep"}],"relativePath":"bicep/modules.md","lastUpdated":1674137497803}',t={},o=p(`<h1 id="modules" tabindex="-1">Modules <a class="header-anchor" href="#modules" aria-hidden="true">#</a></h1><h2 id="main-bicep" tabindex="-1">main.bicep <a class="header-anchor" href="#main-bicep" aria-hidden="true">#</a></h2><div class="language-csharp"><pre><code>param location <span class="token keyword">string</span> <span class="token operator">=</span> &#39;AustraliaEast&#39;
param webAppName <span class="token return-type class-name"><span class="token keyword">string</span></span>

@<span class="token function">secure</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
@<span class="token function">description</span><span class="token punctuation">(</span>&#39;Admin password <span class="token keyword">for</span> VM&#39;<span class="token punctuation">)</span>
param adminPassword <span class="token return-type class-name"><span class="token keyword">string</span></span>

@<span class="token function">description</span><span class="token punctuation">(</span>&#39;Admin username <span class="token keyword">for</span> VM&#39;<span class="token punctuation">)</span>
param adminUsername <span class="token return-type class-name"><span class="token keyword">string</span></span>


@<span class="token function">allowed</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    &#39;dev&#39;
    &#39;uat&#39;
    &#39;prod&#39;
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
param environment <span class="token keyword">string</span> 

<span class="token comment">// Module 1 - App Service</span>
module appService &#39;appservice<span class="token punctuation">.</span>bicep&#39; <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">:</span> &#39;appServiceDeployment&#39;
  <span class="token keyword">params</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    enviroment<span class="token punctuation">:</span> <span class="token class-name">environment</span>
    webAppName<span class="token punctuation">:</span> <span class="token class-name">webAppName</span>
    location<span class="token punctuation">:</span> location
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Module 2 - Storage</span>
module storage &#39;storage<span class="token punctuation">.</span>bicep&#39; <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">:</span> &#39;storageDeployment&#39;
  <span class="token keyword">params</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    enviroment<span class="token punctuation">:</span> <span class="token class-name">environment</span>
    location<span class="token punctuation">:</span> location
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name"><span class="token keyword">var</span></span> isProd <span class="token operator">=</span> environment <span class="token operator">==</span> &#39;prod&#39;

<span class="token comment">// Module 3 - VM</span>
<span class="token comment">// Only deploy the VM in production environments</span>
module vm &#39;vm<span class="token punctuation">.</span>bicep&#39; <span class="token operator">=</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>isProd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">:</span> &#39;vmDeployment&#39;
  <span class="token keyword">params</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    location<span class="token punctuation">:</span> <span class="token class-name">location</span>
    adminPassword<span class="token punctuation">:</span> <span class="token class-name">adminPassword</span>
    adminUsername<span class="token punctuation">:</span> <span class="token class-name">adminUsername</span>
    vmName<span class="token punctuation">:</span> &#39;ndc<span class="token operator">-</span>awesome<span class="token operator">-</span>vm&#39;
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

output appServiceName <span class="token keyword">string</span> <span class="token operator">=</span> appService<span class="token punctuation">.</span>outputs<span class="token punctuation">.</span>appServiceName
output appServicePlanName <span class="token keyword">string</span> <span class="token operator">=</span> appService<span class="token punctuation">.</span>outputs<span class="token punctuation">.</span>appServicePlanName

</code></pre></div><h2 id="storage-bicep" tabindex="-1">storage.bicep <a class="header-anchor" href="#storage-bicep" aria-hidden="true">#</a></h2><div class="language-csharp"><pre><code>param location <span class="token keyword">string</span> <span class="token operator">=</span> &#39;AustraliaEast&#39;

@<span class="token function">allowed</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    &#39;dev&#39;
    &#39;uat&#39;
    &#39;prod&#39;
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
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

</code></pre></div><h2 id="appservice-bicep" tabindex="-1">appservice.bicep <a class="header-anchor" href="#appservice-bicep" aria-hidden="true">#</a></h2><div class="language-csharp"><pre><code>@<span class="token function">allowed</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  &#39;dev&#39;
  &#39;uat&#39;
  &#39;prod&#39;
<span class="token punctuation">]</span><span class="token punctuation">)</span>
param enviroment <span class="token keyword">string</span> 
param webAppName <span class="token keyword">string</span>
param sku <span class="token keyword">string</span> <span class="token operator">=</span> &#39;F1&#39; <span class="token comment">// The SKU of App Service Plan</span>
param linuxFxVersion <span class="token keyword">string</span> <span class="token operator">=</span> &#39;node<span class="token operator">|</span><span class="token number">14</span><span class="token operator">-</span>lts&#39; <span class="token comment">// The runtime stack of web app</span>
param location <span class="token keyword">string</span> <span class="token operator">=</span> &#39;AustraliaEast&#39;

<span class="token class-name"><span class="token keyword">var</span></span> appServicePlanName <span class="token operator">=</span> <span class="token function">toLower</span><span class="token punctuation">(</span>&#39;AppServicePlan<span class="token operator">-</span>$<span class="token punctuation">{</span>webAppName<span class="token punctuation">}</span><span class="token operator">-</span>$<span class="token punctuation">{</span>enviroment<span class="token punctuation">}</span>&#39;<span class="token punctuation">)</span>
<span class="token class-name"><span class="token keyword">var</span></span> webSiteName <span class="token operator">=</span> <span class="token function">toLower</span><span class="token punctuation">(</span>&#39;wapp<span class="token operator">-</span>$<span class="token punctuation">{</span>webAppName<span class="token punctuation">}</span><span class="token operator">-</span>$<span class="token punctuation">{</span>enviroment<span class="token punctuation">}</span>&#39;<span class="token punctuation">)</span>

resource myAppServicePlan &#39;Microsoft<span class="token punctuation">.</span>Web<span class="token operator">/</span>serverfarms@<span class="token number">2020</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">01</span>&#39; <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">:</span> <span class="token class-name">appServicePlanName</span>
  location<span class="token punctuation">:</span> <span class="token class-name">location</span>
  properties<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    reserved<span class="token punctuation">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
  sku<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    name<span class="token punctuation">:</span> sku
  <span class="token punctuation">}</span>
  kind<span class="token punctuation">:</span> &#39;linux&#39;
<span class="token punctuation">}</span>

resource myAppService &#39;Microsoft<span class="token punctuation">.</span>Web<span class="token operator">/</span>sites@<span class="token number">2020</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">01</span>&#39; <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">:</span> <span class="token class-name">webSiteName</span>
  location<span class="token punctuation">:</span> <span class="token class-name">location</span>
  properties<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    serverFarmId<span class="token punctuation">:</span> <span class="token class-name">myAppServicePlan<span class="token punctuation">.</span>id</span>
    siteConfig<span class="token punctuation">:</span> <span class="token punctuation">{</span>
      linuxFxVersion<span class="token punctuation">:</span> linuxFxVersion
    <span class="token punctuation">}</span>
    httpsOnly<span class="token punctuation">:</span> <span class="token boolean">true</span>    
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

output appServiceName <span class="token keyword">string</span> <span class="token operator">=</span> webSiteName
output appServicePlanName <span class="token keyword">string</span> <span class="token operator">=</span> appServicePlanName

</code></pre></div><h2 id="vm-bicep" tabindex="-1">vm.bicep <a class="header-anchor" href="#vm-bicep" aria-hidden="true">#</a></h2><div class="language-csharp"><pre><code>@<span class="token function">description</span><span class="token punctuation">(</span>&#39;Username <span class="token keyword">for</span> the Virtual Machine<span class="token punctuation">.</span>&#39;<span class="token punctuation">)</span>
param adminUsername <span class="token keyword">string</span>

param vmName <span class="token return-type class-name"><span class="token keyword">string</span></span>

@<span class="token function">description</span><span class="token punctuation">(</span>&#39;Password <span class="token keyword">for</span> the Virtual Machine<span class="token punctuation">.</span>&#39;<span class="token punctuation">)</span>  <span class="token comment">// SSH key is recommended but this is ok for a demo</span>
@<span class="token function">secure</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
param adminPassword <span class="token return-type class-name"><span class="token keyword">string</span></span>

@<span class="token function">description</span><span class="token punctuation">(</span>&#39;Location <span class="token keyword">for</span> all resources<span class="token punctuation">.</span>&#39;<span class="token punctuation">)</span>
param location <span class="token keyword">string</span> <span class="token operator">=</span> <span class="token function">resourceGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token return-type class-name">location</span>

@<span class="token function">description</span><span class="token punctuation">(</span>&#39;The size of the VM&#39;<span class="token punctuation">)</span>
param vmSize <span class="token keyword">string</span> <span class="token operator">=</span> &#39;Standard_B2s&#39;

<span class="token class-name"><span class="token keyword">var</span></span> publicIPAddressName <span class="token operator">=</span> &#39;$<span class="token punctuation">{</span>vmName<span class="token punctuation">}</span>PublicIP&#39;
<span class="token class-name"><span class="token keyword">var</span></span> networkInterfaceName <span class="token operator">=</span> &#39;$<span class="token punctuation">{</span>vmName<span class="token punctuation">}</span>NetInt&#39;
<span class="token class-name"><span class="token keyword">var</span></span> osDiskType <span class="token operator">=</span> &#39;Standard_LRS&#39;
<span class="token class-name"><span class="token keyword">var</span></span> subnetAddressPrefix <span class="token operator">=</span> &#39;<span class="token number">10.1</span><span class="token number">.0</span><span class="token number">.0</span><span class="token operator">/</span><span class="token number">24</span>&#39;
<span class="token class-name"><span class="token keyword">var</span></span> addressPrefix <span class="token operator">=</span> &#39;<span class="token number">10.1</span><span class="token number">.0</span><span class="token number">.0</span><span class="token operator">/</span><span class="token number">16</span>&#39;
<span class="token class-name"><span class="token keyword">var</span></span> dnsLabelPrefix <span class="token operator">=</span> <span class="token function">toLower</span><span class="token punctuation">(</span>&#39;$<span class="token punctuation">{</span>vmName<span class="token punctuation">}</span><span class="token operator">-</span>$<span class="token punctuation">{</span><span class="token function">uniqueString</span><span class="token punctuation">(</span><span class="token function">resourceGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">}</span>&#39;<span class="token punctuation">)</span>
<span class="token class-name"><span class="token keyword">var</span></span> ubuntuOSVersion <span class="token operator">=</span> &#39;<span class="token number">18.04</span><span class="token operator">-</span>LTS&#39;
<span class="token class-name"><span class="token keyword">var</span></span> subnetName <span class="token operator">=</span> &#39;Subnet&#39;
<span class="token class-name"><span class="token keyword">var</span></span> networkSecurityGroupName <span class="token operator">=</span> &#39;SecGroupNet&#39;
<span class="token class-name"><span class="token keyword">var</span></span> virtualNetworkName <span class="token operator">=</span> &#39;vNet&#39;



resource nic &#39;Microsoft<span class="token punctuation">.</span>Network<span class="token operator">/</span>networkInterfaces@<span class="token number">2021</span><span class="token operator">-</span><span class="token number">05</span><span class="token operator">-</span><span class="token number">01</span>&#39; <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">:</span> <span class="token class-name">networkInterfaceName</span>
  location<span class="token punctuation">:</span> <span class="token class-name">location</span>
  properties<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    ipConfigurations<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name<span class="token punctuation">:</span> &#39;ipconfig1&#39;
        properties<span class="token punctuation">:</span> <span class="token punctuation">{</span>
          subnet<span class="token punctuation">:</span> <span class="token punctuation">{</span>
            id<span class="token punctuation">:</span> subnet<span class="token punctuation">.</span>id
          <span class="token punctuation">}</span>
          privateIPAllocationMethod<span class="token punctuation">:</span> &#39;Dynamic&#39;
          publicIPAddress<span class="token punctuation">:</span> <span class="token punctuation">{</span>
            id<span class="token punctuation">:</span> publicIP<span class="token punctuation">.</span>id
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
    networkSecurityGroup<span class="token punctuation">:</span> <span class="token punctuation">{</span>
      id<span class="token punctuation">:</span> nsg<span class="token punctuation">.</span>id
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

resource nsg &#39;Microsoft<span class="token punctuation">.</span>Network<span class="token operator">/</span>networkSecurityGroups@<span class="token number">2021</span><span class="token operator">-</span><span class="token number">05</span><span class="token operator">-</span><span class="token number">01</span>&#39; <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">:</span> <span class="token class-name">networkSecurityGroupName</span>
  location<span class="token punctuation">:</span> <span class="token class-name">location</span>
  properties<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    securityRules<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name<span class="token punctuation">:</span> &#39;SSH&#39;
        properties<span class="token punctuation">:</span> <span class="token punctuation">{</span>
          priority<span class="token punctuation">:</span> <span class="token number">1000</span>
          protocol<span class="token punctuation">:</span> &#39;Tcp&#39;
          access<span class="token punctuation">:</span> &#39;Allow&#39;
          direction<span class="token punctuation">:</span> &#39;Inbound&#39;
          sourceAddressPrefix<span class="token punctuation">:</span> <span class="token string character">&#39;*&#39;</span>
          sourcePortRange<span class="token punctuation">:</span> <span class="token string character">&#39;*&#39;</span>
          destinationAddressPrefix<span class="token punctuation">:</span> <span class="token string character">&#39;*&#39;</span>
          destinationPortRange<span class="token punctuation">:</span> &#39;<span class="token number">22</span>&#39;
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

resource vnet &#39;Microsoft<span class="token punctuation">.</span>Network<span class="token operator">/</span>virtualNetworks@<span class="token number">2021</span><span class="token operator">-</span><span class="token number">05</span><span class="token operator">-</span><span class="token number">01</span>&#39; <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">:</span> <span class="token class-name">virtualNetworkName</span>
  location<span class="token punctuation">:</span> <span class="token class-name">location</span>
  properties<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    addressSpace<span class="token punctuation">:</span> <span class="token punctuation">{</span>
      addressPrefixes<span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token attribute"><span class="token class-name">addressPrefix</span></span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

resource subnet &#39;Microsoft<span class="token punctuation">.</span>Network<span class="token operator">/</span>virtualNetworks<span class="token operator">/</span>subnets@<span class="token number">2021</span><span class="token operator">-</span><span class="token number">05</span><span class="token operator">-</span><span class="token number">01</span>&#39; <span class="token operator">=</span> <span class="token punctuation">{</span>
  parent<span class="token punctuation">:</span> <span class="token class-name">vnet</span>
  name<span class="token punctuation">:</span> <span class="token class-name">subnetName</span>
  properties<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    addressPrefix<span class="token punctuation">:</span> <span class="token class-name">subnetAddressPrefix</span>
    privateEndpointNetworkPolicies<span class="token punctuation">:</span> &#39;Enabled&#39;
    privateLinkServiceNetworkPolicies<span class="token punctuation">:</span> &#39;Enabled&#39;
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

resource publicIP &#39;Microsoft<span class="token punctuation">.</span>Network<span class="token operator">/</span>publicIPAddresses@<span class="token number">2021</span><span class="token operator">-</span><span class="token number">05</span><span class="token operator">-</span><span class="token number">01</span>&#39; <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">:</span> <span class="token class-name">publicIPAddressName</span>
  location<span class="token punctuation">:</span> <span class="token class-name">location</span>
  sku<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    name<span class="token punctuation">:</span> &#39;Basic&#39;
  <span class="token punctuation">}</span>
  properties<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    publicIPAllocationMethod<span class="token punctuation">:</span> &#39;Dynamic&#39;
    publicIPAddressVersion<span class="token punctuation">:</span> &#39;IPv4&#39;
    dnsSettings<span class="token punctuation">:</span> <span class="token punctuation">{</span>
      domainNameLabel<span class="token punctuation">:</span> dnsLabelPrefix
    <span class="token punctuation">}</span>
    idleTimeoutInMinutes<span class="token punctuation">:</span> <span class="token number">4</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

resource vm &#39;Microsoft<span class="token punctuation">.</span>Compute<span class="token operator">/</span>virtualMachines@<span class="token number">2021</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>&#39; <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">:</span> <span class="token class-name">vmName</span>
  location<span class="token punctuation">:</span> <span class="token class-name">location</span>
  properties<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    hardwareProfile<span class="token punctuation">:</span> <span class="token punctuation">{</span>
      vmSize<span class="token punctuation">:</span> vmSize
    <span class="token punctuation">}</span>
    storageProfile<span class="token punctuation">:</span> <span class="token punctuation">{</span>
      osDisk<span class="token punctuation">:</span> <span class="token punctuation">{</span>
        createOption<span class="token punctuation">:</span> &#39;FromImage&#39;
        managedDisk<span class="token punctuation">:</span> <span class="token punctuation">{</span>
          storageAccountType<span class="token punctuation">:</span> osDiskType
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      imageReference<span class="token punctuation">:</span> <span class="token punctuation">{</span>
        publisher<span class="token punctuation">:</span> &#39;Canonical&#39;
        offer<span class="token punctuation">:</span> &#39;UbuntuServer&#39;
        sku<span class="token punctuation">:</span> <span class="token class-name">ubuntuOSVersion</span>
        version<span class="token punctuation">:</span> &#39;latest&#39;
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    networkProfile<span class="token punctuation">:</span> <span class="token punctuation">{</span>
      networkInterfaces<span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          id<span class="token punctuation">:</span> nic<span class="token punctuation">.</span>id
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    osProfile<span class="token punctuation">:</span> <span class="token punctuation">{</span>
      computerName<span class="token punctuation">:</span> <span class="token class-name">vmName</span>
      adminUsername<span class="token punctuation">:</span> <span class="token class-name">adminUsername</span>
      adminPassword<span class="token punctuation">:</span> adminPassword
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

output adminUsername <span class="token keyword">string</span> <span class="token operator">=</span> adminUsername
output hostname <span class="token keyword">string</span> <span class="token operator">=</span> publicIP<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>dnsSettings<span class="token punctuation">.</span>fqdn

</code></pre></div>`,9),e=[o];function c(u,l,i,r,k,m){return a(),s("div",null,e)}var v=n(t,[["render",c]]);export{b as __pageData,v as default};
