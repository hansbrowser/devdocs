import{_ as n,c as s,o as a,a as t}from"./app.e3da9a89.js";const h='{"title":"dotnet 2.2","description":"","frontmatter":{},"headers":[{"level":2,"title":"Api Controller Analyzers & Conventions","slug":"api-controller-analyzers-conventions"},{"level":2,"title":"Default return type for \\"400 Bad Request\\" replies","slug":"default-return-type-for-400-bad-request-replies"}],"relativePath":"dotnet/dotnet22.md","lastUpdated":1634462221664}',e={},o=t(`__VP_STATIC_START__<h1 id="dotnet-2-2" tabindex="-1">dotnet 2.2 <a class="header-anchor" href="#dotnet-2-2" aria-hidden="true">#</a></h1><h2 id="api-controller-analyzers-conventions" tabindex="-1">Api Controller Analyzers &amp; Conventions <a class="header-anchor" href="#api-controller-analyzers-conventions" aria-hidden="true">#</a></h2><ul><li>Roslyn analyzers that help you ensure complete documentation of your api controllers</li><li>Extensible sets of conventions that encapsulate common API Controller patterns</li><li>Applicable to contollers marked with the ApiContoller attribute</li><li>Work together to ensure correctness of the OpenApi documentation</li><li>Reduce boilerplate plate</li></ul><h2 id="default-return-type-for-400-bad-request-replies" tabindex="-1">Default return type for &quot;400 Bad Request&quot; replies <a class="header-anchor" href="#default-return-type-for-400-bad-request-replies" aria-hidden="true">#</a></h2><div class="language-json"><pre><code><span class="token punctuation">{</span>	<span class="token property">&quot;errors&quot;</span><span class="token operator">:</span> 
	<span class="token punctuation">{</span> <span class="token property">&quot;Lastname&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;lastname is required&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;One or more validation errors occurred.&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
	<span class="token property">&quot;tradeId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;9873489237492&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><a href="https://docs.microsoft.com/en-us/aspnet/core/migration/21-to-22?view=aspnetcore-2.2&amp;tabs=visual-studio&amp;WT.mc_id=-blog-scottha" target="_blank" rel="noopener noreferrer">Upgrading from 2.1 is straightforward.</a></p><ul><li><a href="https://blogs.msdn.microsoft.com/webdev/2018/08/23/asp-net-core-2-20-preview1-open-api-analyzers-conventions/?WT.mc_id=-blog-scottha" target="_blank" rel="noopener noreferrer">Better integration with popular Open API (Swagger) libraries including design-time checks with code analyzers</a></li><li><a href="https://blogs.msdn.microsoft.com/webdev/2018/08/27/asp-net-core-2-2-0-preview1-endpoint-routing/?WT.mc_id=-blog-scottha" target="_blank" rel="noopener noreferrer">Introduction of Endpoint Routing with up to 20% improved routing performance in MVC</a></li><li>Improved URL generation with the LinkGenerator class &amp; support for <a href="https://blogs.msdn.microsoft.com/webdev/2018/10/17/asp-net-core-2-2-0-preview3-now-available?WT.mc_id=-blog-scottha" target="_blank" rel="noopener noreferrer">route Parameter Transformers</a> (<a href="https://www.hanselman.com/blog/ASPNETCore22ParameterTransformersForCleanURLGenerationAndSlugsInRazorPagesOrMVC.aspx" target="_blank" rel="noopener noreferrer">and a post from Scott Hanselman</a>)</li><li><a href="https://blogs.msdn.microsoft.com/webdev/2018/08/22/asp-net-core-2-2-0-preview1-healthcheck/?WT.mc_id=-blog-scottha" target="_blank" rel="noopener noreferrer">New Health Checks API for application health monitoring</a></li><li><a href="https://blogs.msdn.microsoft.com/webdev/2018/09/12/asp-net-core-2-2-0-preview2-now-available/?WT.mc_id=-blog-scottha" target="_blank" rel="noopener noreferrer">Up to 400% improved throughput on IIS due to in-process hosting support</a></li><li><a href="https://blogs.msdn.microsoft.com/webdev/2018/10/17/asp-net-core-2-2-0-preview3-now-available?WT.mc_id=-blog-scottha" target="_blank" rel="noopener noreferrer">Up to 15% improved MVC model validation performance</a></li><li><a href="https://blogs.msdn.microsoft.com/webdev/2018/09/12/asp-net-core-2-2-0-preview2-now-available/?WT.mc_id=-blog-scottha" target="_blank" rel="noopener noreferrer">Problem Details (RFC 7807) support in MVC for detailed API error results</a></li><li><a href="https://blogs.msdn.microsoft.com/webdev/2018/08/22/asp-net-core-2-2-0-preview1-http-2-in-kestrel/?WT.mc_id=-blog-scottha" target="_blank" rel="noopener noreferrer">Preview of HTTP/2 server support in ASP.NET Core</a></li><li><a href="https://blogs.msdn.microsoft.com/webdev/2018/09/12/asp-net-core-2-2-0-preview2-now-available/?WT.mc_id=-blog-scottha" target="_blank" rel="noopener noreferrer">Template updates for Bootstrap 4 and Angular 6</a></li><li>[Java client for <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Core SignalR}(<a href="https://blogs.msdn.microsoft.com/webdev/2018/08/23/asp-net-core-2-2-0-preview1-signalr-java-client/?WT.mc_id=-blog-scottha" target="_blank" rel="noopener noreferrer">https://blogs.msdn.microsoft.com/webdev/2018/08/23/asp-net-core-2-2-0-preview1-signalr-java-client/?WT.mc_id=-blog-scottha</a>)</li><li><a href="https://blogs.msdn.microsoft.com/webdev/2018/10/17/asp-net-core-2-2-0-preview3-now-available/?WT.mc_id=-blog-scottha" target="_blank" rel="noopener noreferrer">Up to 60% improved HTTP Client performance on Linux and 20% on Windows</a></li><li>You can get a very significant performance boost <a href="https://docs.microsoft.com/en-us/aspnet/core/fundamentals/servers/aspnet-core-module?view=aspnetcore-2.2&amp;WT.mc_id=-blog-scottha#in-process-hosting-model" target="_blank" rel="noopener noreferrer">by moving ASP.NET Core in process with IIS</a>.</li></ul><div class="language-csharp"><pre><code>	<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ApiController</span></span><span class="token punctuation">]</span>
	<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;api/[controller]&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
	<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Authorize</span></span><span class="token punctuation">]</span>
	<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyController</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ControllerBase</span></span>
	<span class="token punctuation">{</span>
		<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">HttpGet</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;{id}&quot;</span><span class="token punctuation">,</span> Name <span class="token operator">=</span> <span class="token string">&quot;GetCustomer&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
		<span class="token keyword">public</span> <span class="token return-type class-name">ActionResult<span class="token punctuation">&lt;</span>Customer<span class="token punctuation">&gt;</span></span> <span class="token function">GetCustomer</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> id<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>id <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
			<span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Customer</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> id<span class="token punctuation">,</span> Name <span class="token operator">=</span> <span class="token string">&quot;Piet&quot;</span> <span class="token punctuation">}</span>
			<span class="token punctuation">}</span>

			<span class="token keyword">return</span> <span class="token function">NotFound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

</code></pre></div><div class="language-xml"><pre><code>add analyzer to projectfile:
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PackageReference</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Microsoft.AspNetCore.Mvc.Api.Analyzers<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2.2.0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">PrivateAssets</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>All<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

add default conventions in startup:
	[assembly: ApiConventionType(typeof(DefaultApiConventions))]
</code></pre></div><p>Healthchecks</p><div class="language-csharp"><pre><code>services<span class="token punctuation">.</span><span class="token function">AddHealthChecks</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">.</span><span class="token function">AdddiskStorageHealthCheck</span><span class="token punctuation">(</span>options <span class="token operator">=&gt;</span> options<span class="token punctuation">.</span><span class="token function">AddDrive</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\&quot;</span><span class="token punctuation">,</span> <span class="token number">1024L</span> <span class="token operator">*</span> <span class="token number">32L</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;DiskSpace&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">.</span><span class="token function">AddAsyncCheck</span><span class="token punctuation">(</span><span class="token string">&quot;PingBing&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> ping <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Ping</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token class-name"><span class="token keyword">var</span></span> result <span class="token operator">=</span> <span class="token keyword">await</span> ping<span class="token punctuation">.</span><span class="token function">SendPingAsync</span><span class="token punctuation">(</span><span class="token string">&quot;bing.com&quot;</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HealthCheckResult</span><span class="token punctuation">(</span>
				result<span class="token punctuation">.</span>Status <span class="token operator">==</span> IPStatus<span class="token punctuation">.</span>Success
				<span class="token punctuation">?</span> result<span class="token punctuation">.</span>RoundtripTime <span class="token operator">&lt;</span> <span class="token number">200</span>
					<span class="token punctuation">?</span> HealthStatus<span class="token punctuation">.</span>Healthy
					<span class="token punctuation">:</span> HealthStatus<span class="token punctuation">.</span>Degraded
				<span class="token punctuation">:</span> HealthStatus<span class="token punctuation">.</span>Unhealthy<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">UseHealthChecks</span><span class="token punctuation">(</span><span class="token string">&quot;/healthchecks-api&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HealthCheckOptions</span>
<span class="token punctuation">{</span>
	Predicate <span class="token operator">=</span> _ <span class="token operator">=&gt;</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	ResponseWriter <span class="token operator">=</span> UIResponseWriter<span class="token punctuation">.</span>WriteHealthCheckUIResponse
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>__VP_STATIC_END__`,11),p=[o];function c(r,l,i,u,k,d){return a(),s("div",null,p)}var g=n(e,[["render",c]]);export{h as __pageData,g as default};
