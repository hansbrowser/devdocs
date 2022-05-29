import{_ as s,c as n,o as a,a as t}from"./app.27936946.js";const d='{"title":"Introduction vscode","description":"","frontmatter":{},"headers":[{"level":2,"title":"Snippets","slug":"snippets"},{"level":2,"title":"User Settings","slug":"user-settings"}],"relativePath":"vscode/index.md","lastUpdated":1653835935282}',o={},p=t(`<h1 id="introduction-vscode" tabindex="-1">Introduction vscode <a class="header-anchor" href="#introduction-vscode" aria-hidden="true">#</a></h1><h2 id="snippets" tabindex="-1">Snippets <a class="header-anchor" href="#snippets" aria-hidden="true">#</a></h2><p>There&#39;s a VsCode Plugin called : snippet creator..</p><p>After installing it , all you have to do is to :</p><ul><li>Select the code that you want to make it a snippet.</li><li>Right click on it and select &quot;Command Palette&quot;(or Ctrl+Shift+P).</li><li>Write &quot;Create Snippet&quot;.</li><li>Choose a snippet name.</li><li>Choose a snippet shortcut.</li><li>Choose type of files needed to be watched to trigger your snippet shortcut. That&#39;s All ..</li></ul><p>Note : if you want to edit your snippets , you will find them in [fileType].json Example : Ctrl+P , then select &quot;javascript.json&quot;</p><h2 id="user-settings" tabindex="-1">User Settings <a class="header-anchor" href="#user-settings" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token string">&quot;gitlens.advanced.messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;suppressCommitHasNoPreviousCommitWarning&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string">&quot;suppressCommitNotFoundWarning&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string">&quot;suppressFileNotUnderSourceControlWarning&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string">&quot;suppressGitVersionWarning&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string">&quot;suppressLineUncommittedWarning&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string">&quot;suppressNoRepositoryWarning&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string">&quot;suppressResultsExplorerNotice&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string">&quot;suppressShowKeyBindingsNotice&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string">&quot;suppressUpdateNotice&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string">&quot;suppressWelcomeNotice&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">&quot;workbench.iconTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode-icons&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;git.enableSmartCommit&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string">&quot;files.exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;**/.git&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/.svn&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/.hg&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/CVS&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/.DS_Store&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/Logs/&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/obj/&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/bin/&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/node_modules/&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/packages/&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">&quot;window.zoomLevel&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token string">&quot;eslint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token string">&quot;language&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;autoFix&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string">&quot;eslint.autoFixOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string">&quot;eslint.trace.server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;verbose&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;vetur.format.defaultFormatter.html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;js-beautify-html&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;gitlens.keymap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;chorded&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;editor.renderWhitespace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;editor.detectIndentation&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string">&quot;editor.insertSpaces&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string">&quot;editor.formatOnPaste&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string">&quot;telemetry.enableTelemetry&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string">&quot;gitlens.historyExplorer.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string">&quot;workbench.colorTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Cobalt2&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;explorer.openEditors.visible&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string">&quot;extensions.showRecommendationsOnlyOnDemand&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string">&quot;breadcrumbs.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string">&quot;workbench.sideBar.location&quot;</span><span class="token operator">:</span> <span class="token string">&quot;right&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;npm.enableScriptExplorer&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string">&quot;editor.largeFileOptimizations&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre></div>`,8),e=[p];function l(c,u,r,i,k,q){return a(),n("div",null,e)}var b=s(o,[["render",l]]);export{d as __pageData,b as default};
