# Introduction vscode

## Snippets

There's a VsCode Plugin called : snippet creator..

After installing it , all you have to do is to :

- Select the code that you want to make it a snippet.
- Right click on it and select "Command Palette"(or Ctrl+Shift+P).
- Write "Create Snippet".
- Choose a snippet name.
- Choose a snippet shortcut.
- Choose type of files needed to be watched to trigger your snippet shortcut.
  That's All ..

Note : if you want to edit your snippets , you will find them in [fileType].json
Example : Ctrl+P , then select "javascript.json"

## User Settings

```js
{
  "gitlens.advanced.messages": {
    "suppressCommitHasNoPreviousCommitWarning": false,
    "suppressCommitNotFoundWarning": false,
    "suppressFileNotUnderSourceControlWarning": false,
    "suppressGitVersionWarning": false,
    "suppressLineUncommittedWarning": false,
    "suppressNoRepositoryWarning": false,
    "suppressResultsExplorerNotice": false,
    "suppressShowKeyBindingsNotice": true,
    "suppressUpdateNotice": false,
    "suppressWelcomeNotice": true
  },
  "workbench.iconTheme": "vscode-icons",
  "git.enableSmartCommit": true,
  "files.exclude": {
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/Logs/": true,
    "**/obj/": true,
    "**/bin/": true,
    "**/node_modules/": true,
    "**/packages/": true
  },
  "window.zoomLevel": 1,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "eslint.autoFixOnSave": true,
  "eslint.trace.server": "verbose",
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "gitlens.keymap": "chorded",
  "editor.renderWhitespace": "all",
  "editor.detectIndentation": false,
  "editor.insertSpaces": false,
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "telemetry.enableTelemetry": false,
  "gitlens.historyExplorer.enabled": true,
  "workbench.colorTheme": "Cobalt2",
  "explorer.openEditors.visible": 0,
  "extensions.showRecommendationsOnlyOnDemand": true,
  "breadcrumbs.enabled": true,
  "workbench.sideBar.location": "right",
  "npm.enableScriptExplorer": true,
  "editor.largeFileOptimizations": false
}
```
