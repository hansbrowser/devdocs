import{_ as n,y as a,x as s,W as t}from"./plugin-vue_export-helper.d4f00d1e.js";const m='{"title":"Blazor","description":"","frontmatter":{},"headers":[{"level":2,"title":"CascadingParameter","slug":"cascadingparameter"},{"level":2,"title":"RequestParameterFromQuery","slug":"requestparameterfromquery"},{"level":2,"title":"SessionState","slug":"sessionstate"}],"relativePath":"blazor/index.md","lastUpdated":1655228992280}',p={},e=t(`<h1 id="blazor" tabindex="-1">Blazor <a class="header-anchor" href="#blazor" aria-hidden="true">#</a></h1><h2 id="cascadingparameter" tabindex="-1">CascadingParameter <a class="header-anchor" href="#cascadingparameter" aria-hidden="true">#</a></h2><div class="language-html"><pre><code>    @inject SessionStateModel SessionState


	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CascadingValue</span> <span class="token attr-name">Value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@SessionState<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SessionState<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Container</span><span class="token punctuation">&gt;</span></span>
            @Body
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Container</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CascadingValue</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-cs"><pre><code>	<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">CascadingParameter</span><span class="token attribute-arguments"><span class="token punctuation">(</span>Name <span class="token operator">=</span> <span class="token string">&quot;SessionState&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
	<span class="token keyword">private</span> <span class="token return-type class-name">SessionStateModel<span class="token punctuation">?</span></span> SessionState <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

</code></pre></div><h2 id="requestparameterfromquery" tabindex="-1">RequestParameterFromQuery <a class="header-anchor" href="#requestparameterfromquery" aria-hidden="true">#</a></h2><div class="language-cs"><pre><code>	<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Parameter</span></span><span class="token punctuation">]</span>
	<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">SupplyParameterFromQuery</span><span class="token attribute-arguments"><span class="token punctuation">(</span>Name <span class="token operator">=</span> <span class="token string">&quot;q&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
	<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span><span class="token punctuation">?</span></span> SearchString <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

	<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Parameter</span></span><span class="token punctuation">]</span>
	<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">SupplyParameterFromQuery</span><span class="token attribute-arguments"><span class="token punctuation">(</span>Name <span class="token operator">=</span> <span class="token string">&quot;group&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
	<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> Groups <span class="token punctuation">{</span> <span class="token keyword">get</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> _groups<span class="token punctuation">.</span><span class="token function">ToArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token keyword">set</span> <span class="token punctuation">{</span> _groups<span class="token punctuation">.</span><span class="token function">Clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> _groups<span class="token punctuation">.</span><span class="token function">AddRange</span><span class="token punctuation">(</span><span class="token keyword">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
	<span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> _groups <span class="token operator">=</span> <span class="token keyword">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">UpdateUri</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token class-name"><span class="token keyword">var</span></span> parms <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">object</span><span class="token punctuation">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">string</span><span class="token punctuation">.</span><span class="token function">IsNullOrEmpty</span><span class="token punctuation">(</span>SearchString<span class="token punctuation">)</span><span class="token punctuation">)</span> parms<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">&quot;q&quot;</span><span class="token punctuation">,</span> SearchString<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>Groups <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> parms<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">&quot;group&quot;</span><span class="token punctuation">,</span> Groups<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name"><span class="token keyword">var</span></span> uri <span class="token operator">=</span> NavigationManager<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">GetUriWithQueryParameters</span><span class="token punctuation">(</span>parms<span class="token punctuation">)</span><span class="token punctuation">;</span>

		NavigationManager<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">NavigateTo</span><span class="token punctuation">(</span>uri<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre></div><h2 id="sessionstate" tabindex="-1">SessionState <a class="header-anchor" href="#sessionstate" aria-hidden="true">#</a></h2><ul><li>SessionStateModel</li></ul><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SessionStateModel</span>
<span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">?</span></span> _languagecode<span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span><span class="token punctuation">?</span></span> Languagecode
	<span class="token punctuation">{</span>
		<span class="token keyword">get</span> <span class="token operator">=&gt;</span> _languagecode<span class="token punctuation">;</span>
		<span class="token keyword">set</span>
		<span class="token punctuation">{</span>
			_languagecode <span class="token operator">=</span> <span class="token keyword">value</span><span class="token punctuation">;</span>
			<span class="token function">NotifyStateChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">event</span> <span class="token class-name">Action<span class="token punctuation">?</span></span> OnChange<span class="token punctuation">;</span>

	<span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">NotifyStateChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> OnChange<span class="token punctuation">?.</span><span class="token function">Invoke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>Startup.cs / Program.cs</li></ul><div class="language-cs"><pre><code>builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddScoped</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>SessionStateModel<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><ul><li>MainLayout.razor file</li></ul><div class="language-html"><pre><code>@implements IDisposable
@inject SessionStateModel SessionState

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CascadingValue</span> <span class="token attr-name">Value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@SessionState<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SessionState<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LanguageSelect</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LanguageSelect</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CascadingValue</span><span class="token punctuation">&gt;</span></span>

@code {

	protected override void OnInitialized()
	{
		SessionState.OnChange += StateHasChanged;
	}

	public void Dispose()
	{
		SessionState.OnChange -= StateHasChanged;
	}
}
</code></pre></div><ul><li>LanguageSelect.razor</li></ul><div class="language-html"><pre><code>	@code {
	[CascadingParameter(Name = &quot;SessionState&quot;)]
	private SessionStateModel? SessionState { get; set; }

	private LanguageModel? _item { get; set; }
	public LanguageModel? Item
	{
		get { return _item; }
		set
		{
			if (_item != value)
			{
				_item = value;
				SessionState!.Languagecode = value?.Code ?? &quot;EN&quot;;

				if (ItemChanged.HasDelegate)
				{
					ItemChanged.InvokeAsync(value);
				}
			}
		}
	}

</code></pre></div>`,15),o=[e];function c(u,l,i,k,r,d){return s(),a("div",null,o)}var y=n(p,[["render",c]]);export{m as __pageData,y as default};
