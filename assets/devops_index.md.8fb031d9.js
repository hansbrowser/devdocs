import{_ as e,y as t,x as a,W as o}from"./plugin-vue_export-helper.d4f00d1e.js";const p='{"title":"Introduction DevOps","description":"","frontmatter":{},"headers":[{"level":2,"title":"How it works","slug":"how-it-works"},{"level":3,"title":"Great, but how do I automate my pipelines?","slug":"great-but-how-do-i-automate-my-pipelines"},{"level":3,"title":"Feature toggles","slug":"feature-toggles"}],"relativePath":"devops/index.md","lastUpdated":1653835935266}',r={},s=o('<h1 id="introduction-devops" tabindex="-1">Introduction DevOps <a class="header-anchor" href="#introduction-devops" aria-hidden="true">#</a></h1><h2 id="how-it-works" tabindex="-1">How it works <a class="header-anchor" href="#how-it-works" aria-hidden="true">#</a></h2><h3 id="great-but-how-do-i-automate-my-pipelines" tabindex="-1">Great, but how do I automate my pipelines? <a class="header-anchor" href="#great-but-how-do-i-automate-my-pipelines" aria-hidden="true">#</a></h3><p>In order to automate your releases, there will also have to be some changes to the way your team works. Chances are that within your organization the teams still work with a master branch, a dev branch and also a branch per employee or per feature. The advantage of this is that every developer can work in isolation on his own task. The disadvantage of this is the large number of merge conflicts that this generates. The longer a branch lives, the greater the chance that two developers will hit the same file. This means you spend a lot of time solving the merge conflicts. You can reduce the number of merge conflicts by using short-lived branches. These are branches that usually do not live longer than a day before they go to master. You heard me right, they will be merged directly into master. This is called trunk-based development. The branches are short-lived because you create a new branch for every task on your sprint backlog and then merge them with master when you are done with that task.</p><h3 id="feature-toggles" tabindex="-1">Feature toggles <a class="header-anchor" href="#feature-toggles" aria-hidden="true">#</a></h3><p>I can hear you think \u2018great that it goes straight to master, but that means there will be features in production that are not finished yet\u2019. That\u2019s right, but the user will not notice this when you use feature toggles for this. With a feature toggle you determine whether a user can see the feature or not. This way you can push a feature that has not yet been completed to production. Automatic releases bring more benefits than you might think at first. By automatic releases, I really mean automatic. Not only the release itself should be automated, but all the way to it. That means that from the moment a commit on master is done everything goes fully automated to release. A build will automatically be triggered and build your application, then it will test your application, release it to an acceptance environment and perform the automatic acceptance tests. When all tests succeed the application will be able to be released to production. You probably do not want it to go to production at office hours and so the release to production will have a delay set. Because of this the application will only be released at 12 o\u2019clock in the night. With automatic releases you will be able to stop your monthly release train and even release several times a day. This will allow you to get new features to customers faster and release with smaller changes. In general smaller release changes have a smaller impact and therefore the chance that something goes wrong is also smaller.</p>',6),i=[s];function n(h,l,d,u,c,m){return a(),t("div",null,i)}var w=e(r,[["render",n]]);export{p as __pageData,w as default};
