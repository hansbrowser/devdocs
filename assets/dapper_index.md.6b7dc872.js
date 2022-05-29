import{_ as n,c as s,o as a,a as t}from"./app.162ab074.js";const w='{"title":"Dapper","description":"","frontmatter":{},"headers":[{"level":2,"title":"Select SingleOrDefault","slug":"select-singleordefault"},{"level":2,"title":"Select list","slug":"select-list"},{"level":2,"title":"Select list nested","slug":"select-list-nested"},{"level":2,"title":"Insert","slug":"insert"},{"level":2,"title":"Update","slug":"update"}],"relativePath":"dapper/index.md","lastUpdated":1653835935266}',p={},o=t(`<h1 id="dapper" tabindex="-1">Dapper <a class="header-anchor" href="#dapper" aria-hidden="true">#</a></h1><h2 id="select-singleordefault" tabindex="-1">Select SingleOrDefault <a class="header-anchor" href="#select-singleordefault" aria-hidden="true">#</a></h2><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task<span class="token punctuation">&lt;</span>Contact<span class="token punctuation">&gt;</span></span> <span class="token function">GetContact</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> contactId<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token class-name"><span class="token keyword">string</span></span> Query <span class="token operator">=</span> <span class="token string">@&quot;SELECT * FROM Contacts WHERE Id = @id;&quot;</span><span class="token punctuation">;</span>

	<span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> con <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SqlConnection</span><span class="token punctuation">(</span>_connectionString<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token class-name"><span class="token keyword">var</span></span> model <span class="token operator">=</span> <span class="token keyword">await</span> con<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">QuerySingleOrDefaultAsync</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Contact<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>Query<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> id <span class="token operator">=</span> contactId <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> model<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="select-list" tabindex="-1">Select list <a class="header-anchor" href="#select-list" aria-hidden="true">#</a></h2><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task<span class="token punctuation">&lt;</span>IEnumerable<span class="token punctuation">&lt;</span>Category<span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">GetCategories</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token class-name"><span class="token keyword">string</span></span> Query <span class="token operator">=</span> <span class="token string">@&quot;SELECT * FROM Categories;&quot;</span><span class="token punctuation">;</span>

	<span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> con <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SqlConnection</span><span class="token punctuation">(</span>_connectionString<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token class-name"><span class="token keyword">var</span></span> result <span class="token operator">=</span> <span class="token keyword">await</span> con<span class="token punctuation">.</span><span class="token function">QueryMultipleAsync</span><span class="token punctuation">(</span>Query<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name"><span class="token keyword">var</span></span> model <span class="token operator">=</span> <span class="token keyword">await</span> result<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ReadAsync</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Category<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">return</span> model<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="select-list-nested" tabindex="-1">Select list nested <a class="header-anchor" href="#select-list-nested" aria-hidden="true">#</a></h2><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task<span class="token punctuation">&lt;</span>IEnumerable<span class="token punctuation">&lt;</span>Product<span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">GetProducts</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token class-name"><span class="token keyword">string</span></span> Query <span class="token operator">=</span> <span class="token string">@&quot;
		SELECT * FROM Products;
		SELECT * FROM Categories;
		SELECT * FROM ProductMaterials;&quot;</span><span class="token punctuation">;</span>

	<span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> con <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SqlConnection</span><span class="token punctuation">(</span>_connectionString<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token class-name"><span class="token keyword">var</span></span> result <span class="token operator">=</span> <span class="token keyword">await</span> con<span class="token punctuation">.</span><span class="token function">QueryMultipleAsync</span><span class="token punctuation">(</span>Query<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name"><span class="token keyword">var</span></span> products <span class="token operator">=</span> <span class="token keyword">await</span> result<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ReadAsync</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Product<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name"><span class="token keyword">var</span></span> categories <span class="token operator">=</span> <span class="token keyword">await</span> result<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ReadAsync</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Category<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name"><span class="token keyword">var</span></span> productMaterials <span class="token operator">=</span> <span class="token keyword">await</span> result<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ReadAsync</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ProductMaterial<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> product <span class="token keyword">in</span> products<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			product<span class="token punctuation">.</span>Category <span class="token operator">=</span> categories<span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> x<span class="token punctuation">.</span>Id <span class="token operator">==</span> product<span class="token punctuation">.</span>CategoryId<span class="token punctuation">)</span><span class="token punctuation">;</span>
			product<span class="token punctuation">.</span>Materials <span class="token operator">=</span> productMaterials<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> x<span class="token punctuation">.</span>ProductId <span class="token operator">==</span> product<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">return</span> products<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="insert" tabindex="-1">Insert <a class="header-anchor" href="#insert" aria-hidden="true">#</a></h2><div class="language-csharp"><pre><code><span class="token comment">// returns the number of rows affected.</span>
<span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span> <span class="token function">Addcontact</span><span class="token punctuation">(</span><span class="token class-name">Contact</span> contact<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token class-name"><span class="token keyword">string</span></span> Query <span class="token operator">=</span> <span class="token string">@&quot;
		INSERT INTO Contacts(SessionId, OrderId, Amount)
		VALUES(@sessionId, @orderId, @amount)
		&quot;</span><span class="token punctuation">;</span>
	<span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> con <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SqlConnection</span><span class="token punctuation">(</span>_connectionString<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token class-name"><span class="token keyword">var</span></span> result <span class="token operator">=</span> <span class="token keyword">await</span> con<span class="token punctuation">.</span><span class="token function">ExecuteAsync</span><span class="token punctuation">(</span>Query<span class="token punctuation">,</span> contact<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">return</span> result<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-csharp"><pre><code><span class="token comment">// returns the inserted id.</span>
<span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span> <span class="token function">Addcontact</span><span class="token punctuation">(</span><span class="token class-name">Contact</span> contact<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token class-name"><span class="token keyword">string</span></span> Query <span class="token operator">=</span> <span class="token string">@&quot;
		DECLARE @newId INT;
		INSERT INTO Contacts(SessionId, OrderId, Amount)
		VALUES(@sessionId, @orderId, @amount);
		SELECT @newId = CAST(SCOPE_IDENTITY() AS INT);
		SELECT @newId;
		&quot;</span><span class="token punctuation">;</span>
	<span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> con <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SqlConnection</span><span class="token punctuation">(</span>_connectionString<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token class-name"><span class="token keyword">var</span></span> result <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token keyword">await</span> con<span class="token punctuation">.</span><span class="token function">ExecuteScalarAsync</span><span class="token punctuation">(</span>Query<span class="token punctuation">,</span> contact<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">return</span> result<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="update" tabindex="-1">Update <a class="header-anchor" href="#update" aria-hidden="true">#</a></h2><div class="language-csharp"><pre><code><span class="token comment">// returns the number of rows affected.</span>
<span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span> <span class="token function">UpdateContact</span><span class="token punctuation">(</span><span class="token class-name">Contact</span> contact<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token class-name"><span class="token keyword">string</span></span> Query <span class="token operator">=</span> <span class="token string">@&quot;
		UPDATE Contacts
		SET Betaald = @betaald, PaymentId = @paymentId, PaymentStatus = @paymentStatus
		WHERE Id = @id&quot;</span><span class="token punctuation">;</span>

	<span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> con <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SqlConnection</span><span class="token punctuation">(</span>_connectionString<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token class-name"><span class="token keyword">var</span></span> result <span class="token operator">=</span> <span class="token keyword">await</span> con<span class="token punctuation">.</span><span class="token function">ExecuteAsync</span><span class="token punctuation">(</span>Query<span class="token punctuation">,</span> contact<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> result<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,12),e=[o];function c(l,u,k,r,i,d){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{w as __pageData,g as default};
