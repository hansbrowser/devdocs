import{_ as e,y as s,x as a,W as n}from"./plugin-vue_export-helper.ac3310fd.js";const h='{"title":"Docker","description":"","frontmatter":{},"headers":[{"level":2,"title":"comands","slug":"comands"},{"level":3,"title":"volumes","slug":"volumes"},{"level":2,"title":"mssql","slug":"mssql"}],"relativePath":"docker/index.md","lastUpdated":1653835935266}',t={},o=n(`<h1 id="docker" tabindex="-1">Docker <a class="header-anchor" href="#docker" aria-hidden="true">#</a></h1><h2 id="comands" tabindex="-1">comands <a class="header-anchor" href="#comands" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token function">sudo</span> docker <span class="token function">ps</span> -a
docker container start 2a0edb527054

docker build --rm -f <span class="token string">&quot;src\\Services\\Mail\\Mail.Api\\Dockerfile&quot;</span> -t mailapi:latest <span class="token builtin class-name">.</span>
docker network create mynetwork
docker run -d --hostname my-rabbit --name some-rabbit -p <span class="token number">8080</span>:15672 rabbitmq:3-management --network mynetwork

docker-compose build --force-rm
docker-compose up
docker-compose -f .<span class="token punctuation">\\</span>docker-compose.elastic.yml up
</code></pre></div><h3 id="volumes" tabindex="-1">volumes <a class="header-anchor" href="#volumes" aria-hidden="true">#</a></h3><div class="language-bash"><pre><code>docker volume <span class="token function">ls</span>
docker volume inspect myvolume
</code></pre></div><h2 id="mssql" tabindex="-1">mssql <a class="header-anchor" href="#mssql" aria-hidden="true">#</a></h2><ul><li><a href="https://docs.microsoft.com/nl-nl/sql/linux/quickstart-install-connect-docker?view=sql-server-2017" target="_blank" rel="noopener noreferrer">https://docs.microsoft.com/nl-nl/sql/linux/quickstart-install-connect-docker?view=sql-server-2017</a></li><li>sa / Termin84U!</li></ul><div class="language-bash"><pre><code><span class="token function">sudo</span> docker run -e <span class="token string">&#39;ACCEPT_EULA=Y&#39;</span> -e <span class="token string">&#39;SA_PASSWORD=&lt;moeilijkww&gt;&#39;</span> <span class="token punctuation">\\</span>
   -p <span class="token number">1433</span>:1433 --name sql1 <span class="token punctuation">\\</span>
   -d mcr.microsoft.com/mssql/server:2017-latest
</code></pre></div><h1 id="rabbitmq" tabindex="-1">RabbitMQ <a class="header-anchor" href="#rabbitmq" aria-hidden="true">#</a></h1><ul><li>rabbit commands:</li></ul><div class="language-bash"><pre><code>rabbitmqctl <span class="token string">&quot;stop_app&quot;</span>
rabbitmqctl <span class="token string">&quot;reset&quot;</span>
rabbitmqctl <span class="token string">&quot;start_app&quot;</span>
</code></pre></div>`,11),r=[o];function c(l,i,d,p,m,u){return a(),s("div",null,r)}var b=e(t,[["render",c]]);export{h as __pageData,b as default};
