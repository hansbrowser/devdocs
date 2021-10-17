import{_ as a,c as s,o as n,a as e}from"./app.e3da9a89.js";const b='{"title":"MSSQL","description":"","frontmatter":{},"headers":[{"level":2,"title":"Create Db and User","slug":"create-db-and-user"},{"level":2,"title":"show fragmentation","slug":"show-fragmentation"},{"level":2,"title":"rebuild all indexes","slug":"rebuild-all-indexes"},{"level":2,"title":"recompile views","slug":"recompile-views"},{"level":2,"title":"change collation by copying databases","slug":"change-collation-by-copying-databases"}],"relativePath":"mssql/Readme.md","lastUpdated":1634462221821}',t={},o=e(`__VP_STATIC_START__<h1 id="mssql" tabindex="-1">MSSQL <a class="header-anchor" href="#mssql" aria-hidden="true">#</a></h1><h2 id="create-db-and-user" tabindex="-1">Create Db and User <a class="header-anchor" href="#create-db-and-user" aria-hidden="true">#</a></h2><div class="language-sql"><pre><code><span class="token keyword">CREATE</span> <span class="token keyword">database</span> MyDb
GO

<span class="token keyword">USE</span> MyDb
GO

<span class="token keyword">CREATE</span> LOGIN MyUser
    <span class="token keyword">WITH</span> PASSWORD <span class="token operator">=</span> <span class="token string">&#39;MyPassword&#39;</span><span class="token punctuation">;</span>
GO

<span class="token comment">-- Creates a database user for the login created above.</span>
<span class="token keyword">CREATE</span> <span class="token keyword">USER</span> MyUser <span class="token keyword">FOR</span> LOGIN MyUser<span class="token punctuation">;</span>
GO

<span class="token keyword">CREATE</span> <span class="token keyword">SCHEMA</span> <span class="token punctuation">[</span>mailservice<span class="token punctuation">]</span>
GO

<span class="token keyword">ALTER</span> <span class="token keyword">AUTHORIZATION</span> <span class="token keyword">ON</span> <span class="token keyword">SCHEMA</span>::<span class="token punctuation">[</span>MySchema<span class="token punctuation">]</span> <span class="token keyword">TO</span> <span class="token punctuation">[</span>MyUser<span class="token punctuation">]</span>
GO

<span class="token comment">-- add db_owner role</span>
<span class="token comment">-- EXEC sp_addrolemember N&#39;db_owner&#39;, N&#39;MyUser&#39;</span>
<span class="token comment">-- GO</span>
</code></pre></div><h2 id="show-fragmentation" tabindex="-1">show fragmentation <a class="header-anchor" href="#show-fragmentation" aria-hidden="true">#</a></h2><div class="language-sql"><pre><code><span class="token keyword">SELECT</span> dbschemas<span class="token punctuation">.</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token string">&#39;Schema&#39;</span><span class="token punctuation">,</span>
dbtables<span class="token punctuation">.</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token string">&#39;Table&#39;</span><span class="token punctuation">,</span>
dbindexes<span class="token punctuation">.</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token string">&#39;Index&#39;</span><span class="token punctuation">,</span>
indexstats<span class="token punctuation">.</span>avg_fragmentation_in_percent<span class="token punctuation">,</span>
indexstats<span class="token punctuation">.</span>page_count
<span class="token keyword">FROM</span> sys<span class="token punctuation">.</span>dm_db_index_physical_stats <span class="token punctuation">(</span>DB_ID<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> indexstats
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> sys<span class="token punctuation">.</span><span class="token keyword">tables</span> dbtables <span class="token keyword">on</span> dbtables<span class="token punctuation">.</span><span class="token punctuation">[</span>object_id<span class="token punctuation">]</span> <span class="token operator">=</span> indexstats<span class="token punctuation">.</span><span class="token punctuation">[</span>object_id<span class="token punctuation">]</span>
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> sys<span class="token punctuation">.</span>schemas dbschemas <span class="token keyword">on</span> dbtables<span class="token punctuation">.</span><span class="token punctuation">[</span>schema_id<span class="token punctuation">]</span> <span class="token operator">=</span> dbschemas<span class="token punctuation">.</span><span class="token punctuation">[</span>schema_id<span class="token punctuation">]</span>
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> sys<span class="token punctuation">.</span>indexes <span class="token keyword">AS</span> dbindexes <span class="token keyword">ON</span> dbindexes<span class="token punctuation">.</span><span class="token punctuation">[</span>object_id<span class="token punctuation">]</span> <span class="token operator">=</span> indexstats<span class="token punctuation">.</span><span class="token punctuation">[</span>object_id<span class="token punctuation">]</span>
<span class="token operator">AND</span> indexstats<span class="token punctuation">.</span>index_id <span class="token operator">=</span> dbindexes<span class="token punctuation">.</span>index_id
<span class="token keyword">WHERE</span> indexstats<span class="token punctuation">.</span>database_id <span class="token operator">=</span> DB_ID<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">AND</span> dbtables<span class="token punctuation">.</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">like</span> <span class="token string">&#39;%%&#39;</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> indexstats<span class="token punctuation">.</span>avg_fragmentation_in_percent <span class="token keyword">desc</span>
</code></pre></div><h2 id="rebuild-all-indexes" tabindex="-1">rebuild all indexes <a class="header-anchor" href="#rebuild-all-indexes" aria-hidden="true">#</a></h2><div class="language-sql"><pre><code><span class="token keyword">Exec</span> sp_msforeachtable <span class="token string">&#39;SET QUOTED_IDENTIFIER ON; ALTER INDEX ALL ON ? REBUILD&#39;</span>
GO
</code></pre></div><h2 id="recompile-views" tabindex="-1">recompile views <a class="header-anchor" href="#recompile-views" aria-hidden="true">#</a></h2><div class="language-sql"><pre><code><span class="token comment">-----------------------------------------------------------------------------</span>
<span class="token comment">-- REFRESH ALL VIEWS</span>
<span class="token comment">-----------------------------------------------------------------------------</span>
<span class="token keyword">SET</span> NOCOUNT <span class="token keyword">ON</span>
<span class="token keyword">DECLARE</span> <span class="token variable">@SQL</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
<span class="token keyword">SELECT</span> <span class="token variable">@SQL</span> <span class="token operator">=</span> <span class="token variable">@SQL</span> <span class="token operator">+</span> <span class="token string">&#39;print &#39;&#39;Refreshing --&gt; &#39;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&#39;&#39;&#39;
EXEC sp_refreshview &#39;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&#39;;
&#39;</span>
  <span class="token keyword">FROM</span> sysobjects
  <span class="token keyword">WHERE</span> <span class="token keyword">type</span> <span class="token operator">=</span> <span class="token string">&#39;V&#39;</span> <span class="token operator">and</span> name <span class="token operator">like</span> <span class="token string">&#39;vw_%&#39;</span>  <span class="token comment">--&lt; condition to select all views, may vary by your standards</span>
<span class="token comment">--SELECT @SQL</span>
<span class="token keyword">EXEC</span><span class="token punctuation">(</span><span class="token variable">@SQL</span><span class="token punctuation">)</span>
go
</code></pre></div><h2 id="change-collation-by-copying-databases" tabindex="-1">change collation by copying databases <a class="header-anchor" href="#change-collation-by-copying-databases" aria-hidden="true">#</a></h2><p><a href="https://confluence.atlassian.com/kb/how-to-fix-the-collation-of-a-microsoft-sql-server-database-744326177.html" target="_blank" rel="noopener noreferrer">link</a></p><ul><li>create new database with new collation</li><li>generate script from old database <ul><li>Click &quot;Tasks&quot; \xBB &quot;Generate Scripts...&quot;</li><li>In the &quot;Choose Objects&quot; screen, choose &quot;Select specific database objects&quot; -Tick &quot;Tables&quot; - this selects all the objects in the database, but not the database itself (since we already created the new database)</li><li>On the &quot;Set Scripting Options&quot; click &quot;Advanced&quot; and adjust the following options:</li><li>Set &quot;Script USE DATABASE&quot; to false</li><li>Set &quot;Script Full-Text Indexes&quot; to true</li><li>Set &quot;Script Indexes&quot; to true</li><li>Click &quot;Next,&quot; then &quot;Finish&quot;</li><li>Run the script against your new database. At this point, your new database will contain tables with the correct data types and collation, but no data.</li></ul></li><li>Disabling Constraint Checks before importing<div class="language-SQL"><pre><code><span class="token keyword">EXEC</span> sp_MSforeachtable<span class="token string">&quot;ALTER TABLE ? NOCHECK CONSTRAINT all&quot;</span>
</code></pre></div></li><li>Importing Data from the Old Database <ul><li>Click &quot;Tasks&quot; \xBB &quot;Export Data...&quot;</li><li>In the &quot;Choose a Data Source&quot; screen, ensure your old database is selected. Then click &quot;Next&quot;</li><li>In the &quot;Choose a Destination&quot; screen, provide the connection information for your new database. Usually, this will be the same server; however, you can use any SQL Server you can authenticate against. Then click &quot;Next&quot;</li><li>Choose &quot;Copy Data from one or more tables or views&quot; then click &quot;Next&quot;</li><li>In the &quot;Select Source Tables and Views,&quot; ensure all tables are ticked, and that all tables have been highlighted</li><li>With the tables highlighted, click &quot;Edit Mappings...&quot;</li><li>Ensure the correct schema has been selected (DBO is usually the correct schema) and that &quot;Enable Identity Insert&quot; has been ticked. Click &quot;OK&quot;</li><li>Click &quot;Next&quot; and complete the transfer of data. Depending on the size of the database, and the speed of the database server(s) being used, this process will take time.</li></ul></li><li>Re-enabling Constraint Checks after importing<div class="language-SQL"><pre><code><span class="token keyword">EXEC</span> sp_MSforeachtable<span class="token string">&quot;ALTER TABLE ? WITH CHECK CHECK CONSTRAINT all&quot;</span>
</code></pre></div></li></ul>__VP_STATIC_END__`,12),p=[o];function c(l,i,r,u,d,k){return n(),s("div",null,p)}var y=a(t,[["render",c]]);export{b as __pageData,y as default};
