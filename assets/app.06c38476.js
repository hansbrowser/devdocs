import{i as O,c as et,e as tt,a as nt,b as st,d as ot,f as Se,h as Ce,g as rt,j as at,k as it,l as Ee,m as ct,s as lt,n as _,o as Ae,r as ut,p as G,t as dt,w as ft,u as k,v as B,_ as x,x as d,y as p,z as l,A as b,B as te,C as A,D as f,E as Pe,F as E,G as Ne,H as Re,I as Te,J as q,K as z,L as M,M as F,N as ne,O as g,P as $,Q as D,R as pt,S as Be,T as Y,U as _t,V as P}from"./plugin-vue_export-helper.d4f00d1e.js";const ht="modulepreload",ce={},mt="/",Ie=function(t,n){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=`${mt}${s}`,s in ce)return;ce[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const r=document.createElement("link");if(r.rel=o?"stylesheet":ht,o||(r.as="script",r.crossOrigin=""),r.href=s,document.head.appendChild(r),o)return new Promise((i,c)=>{r.addEventListener("load",i),r.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},vt="http://www.w3.org/2000/svg",T=typeof document!="undefined"?document:null,le=T&&T.createElement("template"),gt={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t?T.createElementNS(vt,e):T.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>T.createTextNode(e),createComment:e=>T.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>T.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,s,o,a){const r=n?n.previousSibling:t.lastChild;if(o&&(o===a||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===a||!(o=o.nextSibling)););else{le.innerHTML=s?`<svg>${e}</svg>`:e;const i=le.content;if(s){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}t.insertBefore(i,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function bt(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function kt(e,t,n){const s=e.style,o=O(n);if(n&&!o){for(const a in n)Q(s,a,n[a]);if(t&&!O(t))for(const a in t)n[a]==null&&Q(s,a,"")}else{const a=s.display;o?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=a)}}const ue=/\s*!important$/;function Q(e,t,n){if(Se(n))n.forEach(s=>Q(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=wt(e,t);ue.test(n)?e.setProperty(Ce(s),n.replace(ue,""),"important"):e[s]=n}}const de=["Webkit","Moz","ms"],J={};function wt(e,t){const n=J[t];if(n)return n;let s=rt(t);if(s!=="filter"&&s in e)return J[t]=s;s=at(s);for(let o=0;o<de.length;o++){const a=de[o]+s;if(a in e)return J[t]=a}return t}const fe="http://www.w3.org/1999/xlink";function $t(e,t,n,s,o){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(fe,t.slice(6,t.length)):e.setAttributeNS(fe,t,n);else{const a=it(t);n==null||a&&!Ee(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function xt(e,t,n,s,o,a,r){if(t==="innerHTML"||t==="textContent"){s&&r(s,o,a),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n==null?"":n;(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let i=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Ee(n):n==null&&c==="string"?(n="",i=!0):c==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(t)}const[De,Lt]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Z=0;const yt=Promise.resolve(),St=()=>{Z=0},Ct=()=>Z||(yt.then(St),Z=De());function Et(e,t,n,s){e.addEventListener(t,n,s)}function At(e,t,n,s){e.removeEventListener(t,n,s)}function Pt(e,t,n,s,o=null){const a=e._vei||(e._vei={}),r=a[t];if(s&&r)r.value=s;else{const[i,c]=Nt(t);if(s){const u=a[t]=Rt(s,o);Et(e,i,u,c)}else r&&(At(e,i,r,c),a[t]=void 0)}}const pe=/(?:Once|Passive|Capture)$/;function Nt(e){let t;if(pe.test(e)){t={};let n;for(;n=e.match(pe);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Ce(e.slice(2)),t]}function Rt(e,t){const n=s=>{const o=s.timeStamp||De();(Lt||o>=n.attached-1)&&ct(Tt(s,n.value),t,5,[s])};return n.value=e,n.attached=Ct(),n}function Tt(e,t){if(Se(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const _e=/^on[a-z]/,Bt=(e,t,n,s,o=!1,a,r,i,c)=>{t==="class"?bt(e,s,o):t==="style"?kt(e,n,s):nt(t)?st(t)||Pt(e,t,n,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):It(e,t,s,o))?xt(e,t,s,a,r,i,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),$t(e,t,s,o))};function It(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&_e.test(t)&&ot(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||_e.test(t)&&O(n)?!1:t in e}const Dt=tt({patchProp:Bt},gt);let K,he=!1;function Ht(){return K=he?K:et(Dt),he=!0,K}const Ot=(...e)=>{const t=Ht().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=Mt(s);if(o)return n(o,!0,o instanceof SVGElement)},t};function Mt(e){return O(e)?document.querySelector(e):e}var Ut='{"lang":"en-US","title":"Development Docs","description":"Development documentation.","base":"/","head":[],"themeConfig":{"logo":"/logo-hb-dark.png","nav":[{"text":"Home","link":"/"},{"text":"Dapper","link":"/dapper/"}],"sidebar":[{"text":"Azure","link":"/azure/","children":[{"text":"Logs","link":"/azure/logs"}]},{"text":"Blazor","link":"/blazor/"},{"text":"Dapper","link":"/dapper/"},{"text":"DevOps","link":"/devops/"},{"text":"Docker","link":"/docker/"},{"text":"Dotnet","link":"/dotnet/"},{"text":"Elastic","link":"/elastic/"},{"text":"IdentityServer","link":"/identityserver/"},{"text":"Javascript","link":"/javascript/","children":[{"text":"Async Await","link":"/javascript/async-await"},{"text":"Pro tips","link":"/javascript/pro-tips"}]},{"text":"Mac","link":"/mac/"},{"text":"MsSql","link":"/mssql/"},{"text":"Npm","link":"/npm/"},{"text":"Unity","link":"/unity/"},{"text":"VsCode","link":"/vscode/"},{"text":"Vue","link":"/vue/"}]},"locales":{},"langs":{},"scrollOffset":90}';const He=/^https?:/i,S=typeof window!="undefined";function jt(e,t){t.sort((n,s)=>{const o=s.split("/").length-n.split("/").length;return o!==0?o:s.length-n.length});for(const n of t)if(e.startsWith(n))return n}function me(e,t){const n=jt(t,Object.keys(e));return n?e[n]:void 0}function qt(e){const{locales:t}=e.themeConfig||{},n=e.locales;return t&&n?Object.keys(t).reduce((s,o)=>(s[o]={label:t[o].label,lang:n[o].lang},s),{}):{}}function zt(e,t){t=Ft(e,t);const n=me(e.locales||{},t),s=me(e.themeConfig.locales||{},t);return Object.assign({},e,n,{themeConfig:Object.assign({},e.themeConfig,s,{locales:{}}),lang:(n||e).lang,locales:{},langs:qt(e)})}function Ft(e,t){if(!S)return t;const n=e.base,s=n.endsWith("/")?n.slice(0,-1):n;return t.slice(s.length)}const Oe=Symbol(),W=lt(Wt(Ut));function Wt(e){return JSON.parse(e)}function Vt(e){const t=_(()=>zt(W.value,e.path));return{site:t,theme:_(()=>t.value.themeConfig),page:_(()=>e.data),frontmatter:_(()=>e.data.frontmatter),lang:_(()=>t.value.lang),localePath:_(()=>{const{langs:n,lang:s}=t.value,o=Object.keys(n).find(a=>n[a].lang===s);return I(o||"/")}),title:_(()=>e.data.title?e.data.title+" | "+t.value.title:t.value.title),description:_(()=>e.data.description||t.value.description)}}function C(){const e=Ae(Oe);if(!e)throw new Error("vitepress data not properly injected in app");return e}function Gt(e,t){return`${e}${t}`.replace(/\/+/g,"/")}function I(e){return He.test(e)?e:Gt(W.value.base,e)}function Me(e){let t=e.replace(/\.html$/,"");if(t=decodeURIComponent(t),t.endsWith("/")&&(t+="index"),S){const n="/";t=t.slice(n.length).replace(/\//g,"_")+".md";const s=__VP_HASH_MAP__[t.toLowerCase()];t=`${n}assets/${t}.${s}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}const Ue=Symbol(),ve="http://a.com",Jt=()=>({path:"/",component:null,data:{frontmatter:{}}});function Kt(e,t){const n=ut(Jt());function s(r=S?location.href:"/"){const i=new URL(r,ve);return!i.pathname.endsWith("/")&&!i.pathname.endsWith(".html")&&(i.pathname+=".html",r=i.pathname+i.search+i.hash),S&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",r)),a(r)}let o=null;async function a(r,i=0){const c=new URL(r,ve),u=o=c.pathname;try{let h=e(u);if("then"in h&&typeof h.then=="function"&&(h=await h),o===u){o=null;const{default:m,__pageData:L}=h;if(!m)throw new Error(`Invalid route component: ${m}`);n.path=u,n.component=G(m),n.data=G(JSON.parse(L)),S&&dt(()=>{if(c.hash&&!i){let w=null;try{w=document.querySelector(decodeURIComponent(c.hash))}catch(y){console.warn(y)}if(w){ge(w,c.hash);return}}window.scrollTo(0,i)})}}catch(h){h.message.match(/fetch/)||console.error(h),o===u&&(o=null,n.path=u,n.component=t?G(t):null)}}return S&&(window.addEventListener("click",r=>{const i=r.target.closest("a");if(i){const{href:c,protocol:u,hostname:h,pathname:m,hash:L,target:w}=i,y=window.location,R=m.match(/\.\w+$/);!r.ctrlKey&&!r.shiftKey&&!r.altKey&&!r.metaKey&&w!=="_blank"&&u===y.protocol&&h===y.hostname&&!(R&&R[0]!==".html")&&(r.preventDefault(),m===y.pathname?L&&L!==y.hash&&(history.pushState(null,"",L),window.dispatchEvent(new Event("hashchange")),ge(i,L,i.classList.contains("header-anchor"))):s(c))}},{capture:!0}),window.addEventListener("popstate",r=>{a(location.href,r.state&&r.state.scrollPosition||0)}),window.addEventListener("hashchange",r=>{r.preventDefault()})),{route:n,go:s}}function Xt(){const e=Ae(Ue);if(!e)throw new Error("useRouter() is called without provider.");return e}function N(){return Xt().route}function ge(e,t,n=!1){let s=null;try{s=e.classList.contains(".header-anchor")?e:document.querySelector(decodeURIComponent(t))}catch(o){console.warn(o)}if(s){let o=W.value.scrollOffset;typeof o=="string"&&(o=document.querySelector(o).getBoundingClientRect().bottom+24);const a=parseInt(window.getComputedStyle(s).paddingTop,10),r=window.scrollY+s.getBoundingClientRect().top-o+a;!n||Math.abs(r-window.scrollY)>window.innerHeight?window.scrollTo(0,r):window.scrollTo({left:0,top:r,behavior:"smooth"})}}function Yt(e,t){let n=[],s=!0;const o=a=>{if(s){s=!1;return}const r=[],i=Math.min(n.length,a.length);for(let c=0;c<i;c++){let u=n[c];const[h,m,L=""]=a[c];if(u.tagName.toLocaleLowerCase()===h){for(const w in m)u.getAttribute(w)!==m[w]&&u.setAttribute(w,m[w]);for(let w=0;w<u.attributes.length;w++){const y=u.attributes[w].name;y in m||u.removeAttribute(y)}u.innerHTML!==L&&(u.innerHTML=L)}else document.head.removeChild(u),u=be(a[c]),document.head.append(u);r.push(u)}n.slice(i).forEach(c=>document.head.removeChild(c)),a.slice(i).forEach(c=>{const u=be(c);document.head.appendChild(u),r.push(u)}),n=r};ft(()=>{const a=e.data,r=t.value,i=a&&a.title,c=a&&a.description,u=a&&a.frontmatter.head;document.title=(i?i+" | ":"")+r.title,document.querySelector("meta[name=description]").setAttribute("content",c||r.description),o([...u?Zt(u):[]])})}function be([e,t,n]){const s=document.createElement(e);for(const o in t)s.setAttribute(o,t[o]);return n&&(s.innerHTML=n),s}function Qt(e){return e[0]==="meta"&&e[1]&&e[1].name==="description"}function Zt(e){return e.filter(t=>!Qt(t))}const en=k({name:"VitePressContent",setup(){const e=N();return()=>B("div",{style:{position:"relative"}},[e.component?B(e.component):null])}});const tn=/#.*$/,nn=/(index)?\.(md|html)$/,U=/\/$/,sn=/^[a-z]+:/i;function se(e){return Array.isArray(e)}function oe(e){return sn.test(e)}function on(e,t){if(t===void 0)return!1;const n=ke(`/${e.data.relativePath}`),s=ke(t);return n===s}function ke(e){return decodeURI(e).replace(tn,"").replace(nn,"")}function rn(e,t){const n=e.endsWith("/"),s=t.startsWith("/");return n&&s?e.slice(0,-1)+t:!n&&!s?`${e}/${t}`:e+t}function ee(e){return/^\//.test(e)?e:`/${e}`}function je(e){return e.replace(/(index)?(\.(md|html))?$/,"")||"/"}function an(e){return e===!1||e==="auto"||se(e)}function cn(e){return e.children!==void 0}function ln(e){return se(e)?e.length===0:!e}function re(e,t){if(an(e))return e;t=ee(t);for(const n in e)if(t.startsWith(ee(n)))return e[n];return"auto"}function qe(e){return e.reduce((t,n)=>(n.link&&t.push({text:n.text,link:je(n.link)}),cn(n)&&(t=[...t,...qe(n.children)]),t),[])}const un=["href","aria-label"],dn=["src"],fn=k({__name:"NavBarTitle",setup(e){const{site:t,theme:n,localePath:s}=C();return(o,a)=>(d(),p("a",{class:"nav-bar-title",href:l(s),"aria-label":`${l(t).title}, back to home`},[l(n).logo?(d(),p("img",{key:0,class:"logo",src:l(I)(l(n).logo),alt:"Logo"},null,8,dn)):b("",!0),te(" "+A(l(t).title),1)],8,un))}});var pn=x(fn,[["__scopeId","data-v-cc01ef16"]]);function _n(){const{site:e,localePath:t,theme:n}=C();return _(()=>{const s=e.value.langs,o=Object.keys(s);if(o.length<2)return null;const r=N().path.replace(t.value,""),i=o.map(u=>({text:s[u].label,link:`${u}${r}`}));return{text:n.value.selectText||"Languages",items:i}})}const hn=["GitHub","GitLab","Bitbucket"].map(e=>[e,new RegExp(e,"i")]);function mn(){const{site:e}=C();return _(()=>{const t=e.value.themeConfig,n=t.docsRepo||t.repo;if(!n)return null;const s=vn(n);return{text:gn(s,t.repoLabel),link:s}})}function vn(e){return He.test(e)?e:`https://github.com/${e}`}function gn(e,t){if(t)return t;const n=e.match(/^https?:\/\/[^/]+/);if(!n)return"Source";const s=hn.find(([o,a])=>a.test(n[0]));return s&&s[0]?s[0]:"Source"}function ze(e){const t=N(),n=oe(e.value.link);return{props:_(()=>{const o=we(`/${t.data.relativePath}`);let a=!1;if(e.value.activeMatch)a=new RegExp(e.value.activeMatch).test(o);else{const r=we(e.value.link);a=r==="/"?r===o:o.startsWith(r)}return{class:{active:a,isExternal:n},href:n?e.value.link:I(e.value.link),target:e.value.target||(n?"_blank":null),rel:e.value.rel||(n?"noopener noreferrer":null),"aria-label":e.value.ariaLabel}}),isExternal:n}}function we(e){return e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const bn={},kn={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},wn=f("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),$n=f("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1),xn=[wn,$n];function Ln(e,t){return d(),p("svg",kn,xn)}var ae=x(bn,[["render",Ln]]);const yn={class:"nav-link"},Sn=k({__name:"NavLink",props:{item:null},setup(e){const n=Pe(e),{props:s,isExternal:o}=ze(n.item);return(a,r)=>(d(),p("div",yn,[f("a",Ne({class:"item"},l(s)),[te(A(e.item.text)+" ",1),l(o)?(d(),E(ae,{key:0})):b("",!0)],16)]))}});var $e=x(Sn,[["__scopeId","data-v-b8818f8c"]]);const Cn=e=>(Re("data-v-bbc27490"),e=e(),Te(),e),En={class:"nav-dropdown-link-item"},An=Cn(()=>f("span",{class:"arrow"},null,-1)),Pn={class:"text"},Nn={class:"icon"},Rn=k({__name:"NavDropdownLinkItem",props:{item:null},setup(e){const n=Pe(e),{props:s,isExternal:o}=ze(n.item);return(a,r)=>(d(),p("div",En,[f("a",Ne({class:"item"},l(s)),[An,f("span",Pn,A(e.item.text),1),f("span",Nn,[l(o)?(d(),E(ae,{key:0})):b("",!0)])],16)]))}});var Tn=x(Rn,[["__scopeId","data-v-bbc27490"]]);const Bn=["aria-label"],In={class:"button-text"},Dn={class:"dialog"},Hn=k({__name:"NavDropdownLink",props:{item:null},setup(e){const t=N(),n=q(!1);z(()=>t.path,()=>{n.value=!1});function s(){n.value=!n.value}return(o,a)=>(d(),p("div",{class:M(["nav-dropdown-link",{open:n.value}])},[f("button",{class:"button","aria-label":e.item.ariaLabel,onClick:s},[f("span",In,A(e.item.text),1),f("span",{class:M(["button-arrow",n.value?"down":"right"])},null,2)],8,Bn),f("ul",Dn,[(d(!0),p(F,null,ne(e.item.items,r=>(d(),p("li",{key:r.text,class:"dialog-item"},[g(Tn,{item:r},null,8,["item"])]))),128))])],2))}});var xe=x(Hn,[["__scopeId","data-v-56bf3a3f"]]);const On={key:0,class:"nav-links"},Mn={key:1,class:"item"},Un={key:2,class:"item"},jn=k({__name:"NavLinks",setup(e){const{theme:t}=C(),n=_n(),s=mn(),o=_(()=>t.value.nav||s.value||n.value);return(a,r)=>l(o)?(d(),p("nav",On,[l(t).nav?(d(!0),p(F,{key:0},ne(l(t).nav,i=>(d(),p("div",{key:i.text,class:"item"},[i.items?(d(),E(xe,{key:0,item:i},null,8,["item"])):(d(),E($e,{key:1,item:i},null,8,["item"]))]))),128)):b("",!0),l(n)?(d(),p("div",Mn,[g(xe,{item:l(n)},null,8,["item"])])):b("",!0),l(s)?(d(),p("div",Un,[g($e,{item:l(s)},null,8,["item"])])):b("",!0)])):b("",!0)}});var Fe=x(jn,[["__scopeId","data-v-eab3edfe"]]);const qn={emits:["toggle"]},zn=f("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[f("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1),Fn=[zn];function Wn(e,t,n,s,o,a){return d(),p("div",{class:"sidebar-button",onClick:t[0]||(t[0]=r=>e.$emit("toggle"))},Fn)}var Vn=x(qn,[["render",Wn]]);const Gn=e=>(Re("data-v-675d8756"),e=e(),Te(),e),Jn={class:"nav-bar"},Kn=Gn(()=>f("div",{class:"flex-grow"},null,-1)),Xn={class:"nav"},Yn=k({__name:"NavBar",emits:["toggle"],setup(e){return(t,n)=>(d(),p("header",Jn,[g(Vn,{onToggle:n[0]||(n[0]=s=>t.$emit("toggle"))}),g(pn),Kn,f("div",Xn,[g(Fe)]),$(t.$slots,"search",{},void 0,!0)]))}});var Qn=x(Yn,[["__scopeId","data-v-675d8756"]]);function Zn(){let e=null,t=null;const n=os(s,300);function s(){const r=es(),i=ts(r);for(let c=0;c<i.length;c++){const u=i[c],h=i[c+1],[m,L]=ss(c,u,h);if(m){history.replaceState(null,document.title,L||" "),o(L);return}}}function o(r){if(a(t),a(e),t=document.querySelector(`.sidebar a[href="${r}"]`),!t)return;t.classList.add("active");const i=t.closest(".sidebar-links > ul > li");i&&i!==t.parentElement?(e=i.querySelector("a"),e&&e.classList.add("active")):e=null}function a(r){r&&r.classList.remove("active")}D(()=>{s(),window.addEventListener("scroll",n)}),pt(()=>{o(decodeURIComponent(location.hash))}),Be(()=>{window.removeEventListener("scroll",n)})}function es(){return[].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item"))}function ts(e){return[].slice.call(document.querySelectorAll(".header-anchor")).filter(t=>e.some(n=>n.hash===t.hash))}function ns(){return document.querySelector(".nav-bar").offsetHeight}function Le(e){const t=ns();return e.parentElement.offsetTop-t-15}function ss(e,t,n){const s=window.scrollY;return e===0&&s===0?[!0,null]:s<Le(t)?[!1,null]:!n||s<Le(n)?[!0,decodeURIComponent(t.hash)]:[!1,null]}function os(e,t){let n,s=!1;return()=>{n&&clearTimeout(n),s?n=setTimeout(e,t):(e(),s=!0,setTimeout(()=>{s=!1},t))}}function rs(){const e=N(),{site:t}=C();return Zn(),_(()=>{const n=e.data.headers,s=e.data.frontmatter.sidebar,o=e.data.frontmatter.sidebarDepth;if(s===!1)return[];if(s==="auto")return ye(n,o);const a=re(t.value.themeConfig.sidebar,e.data.relativePath);return a===!1?[]:a==="auto"?ye(n,o):a})}function ye(e,t){const n=[];if(e===void 0)return[];let s;return e.forEach(({level:o,title:a,slug:r})=>{if(o-1>t)return;const i={text:a,link:`#${r}`};o===2?(s=i,n.push(i)):s&&(s.children||(s.children=[])).push(i)}),n}const We=e=>{const t=N(),{site:n,frontmatter:s}=C(),o=e.depth||1,a=s.value.sidebarDepth||1/0,r=t.data.headers,i=e.item.text,c=as(n.value.base,e.item.link),u=e.item.children,h=on(t,e.item.link),m=o<a?Ve(h,u,r,o+1):null;return B("li",{class:"sidebar-link"},[B(c?"a":"p",{class:{"sidebar-link-item":!0,active:h},href:c},i),m])};function as(e,t){return t===void 0||t.startsWith("#")?t:rn(e,t)}function Ve(e,t,n,s=1){return t&&t.length>0?B("ul",{class:"sidebar-links"},t.map(o=>B(We,{item:o,depth:s}))):e&&n?Ve(!1,is(n),void 0,s):null}function is(e){return Ge(cs(e))}function cs(e){e=e.map(n=>Object.assign({},n));let t;return e.forEach(n=>{n.level===2?t=n:t&&(t.children||(t.children=[])).push(n)}),e.filter(n=>n.level===2)}function Ge(e){return e.map(t=>({text:t.title,link:`#${t.slug}`,children:t.children?Ge(t.children):void 0}))}const ls={key:0,class:"sidebar-links"},us=k({__name:"SideBarLinks",setup(e){const t=rs();return(n,s)=>l(t).length>0?(d(),p("ul",ls,[(d(!0),p(F,null,ne(l(t),o=>(d(),E(l(We),{item:o},null,8,["item"]))),256))])):b("",!0)}});const ds=k({__name:"SideBar",props:{open:{type:Boolean}},setup(e){return(t,n)=>(d(),p("aside",{class:M(["sidebar",{open:e.open}])},[g(Fe,{class:"nav"}),$(t.$slots,"sidebar-top",{},void 0,!0),g(us),$(t.$slots,"sidebar-bottom",{},void 0,!0)],2))}});var fs=x(ds,[["__scopeId","data-v-83e92a68"]]);const ps=/bitbucket.org/;function _s(){const{page:e,theme:t,frontmatter:n}=C(),s=_(()=>{const{repo:a,docsDir:r="",docsBranch:i="master",docsRepo:c=a,editLinks:u}=t.value,h=n.value.editLink!=null?n.value.editLink:u,{relativePath:m}=e.value;return!h||!m||!a?null:hs(a,c,r,i,m)}),o=_(()=>t.value.editLinkText||"Edit this page");return{url:s,text:o}}function hs(e,t,n,s,o){return ps.test(e)?vs(e,t,n,s,o):ms(e,t,n,s,o)}function ms(e,t,n,s,o){return(oe(t)?t:`https://github.com/${t}`).replace(U,"")+`/edit/${s}/`+(n?n.replace(U,"")+"/":"")+o}function vs(e,t,n,s,o){return(oe(t)?t:e).replace(U,"")+`/src/${s}/`+(n?n.replace(U,"")+"/":"")+o+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}const gs={class:"edit-link"},bs=["href"],ks=k({__name:"EditLink",setup(e){const{url:t,text:n}=_s();return(s,o)=>(d(),p("div",gs,[l(t)?(d(),p("a",{key:0,class:"link",href:l(t),target:"_blank",rel:"noopener noreferrer"},[te(A(l(n))+" ",1),g(ae,{class:"icon"})],8,bs)):b("",!0)]))}});var ws=x(ks,[["__scopeId","data-v-1ed99556"]]);const $s={key:0,class:"last-updated"},xs={class:"prefix"},Ls={class:"datetime"},ys=k({__name:"LastUpdated",setup(e){const{theme:t,page:n}=C(),s=_(()=>{const r=t.value.lastUpdated;return r!==void 0&&r!==!1}),o=_(()=>{const r=t.value.lastUpdated;return r===!0?"Last Updated":r}),a=q("");return D(()=>{a.value=new Date(n.value.lastUpdated).toLocaleString("en-US")}),(r,i)=>l(s)?(d(),p("p",$s,[f("span",xs,A(l(o))+":",1),f("span",Ls,A(a.value),1)])):b("",!0)}});var Ss=x(ys,[["__scopeId","data-v-5797b537"]]);const Cs={class:"page-footer"},Es={class:"edit"},As={class:"updated"},Ps=k({__name:"PageFooter",setup(e){return(t,n)=>(d(),p("footer",Cs,[f("div",Es,[g(ws)]),f("div",As,[g(Ss)])]))}});var Ns=x(Ps,[["__scopeId","data-v-fb8d84c6"]]);function Rs(){const{page:e,theme:t}=C(),n=_(()=>je(ee(e.value.relativePath))),s=_(()=>{const c=re(t.value.sidebar,n.value);return se(c)?qe(c):[]}),o=_(()=>s.value.findIndex(c=>c.link===n.value)),a=_(()=>{if(t.value.nextLinks!==!1&&o.value>-1&&o.value<s.value.length-1)return s.value[o.value+1]}),r=_(()=>{if(t.value.prevLinks!==!1&&o.value>0)return s.value[o.value-1]}),i=_(()=>!!a.value||!!r.value);return{next:a,prev:r,hasLinks:i}}const Ts={},Bs={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Is=f("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1),Ds=[Is];function Hs(e,t){return d(),p("svg",Bs,Ds)}var Os=x(Ts,[["render",Hs]]);const Ms={},Us={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},js=f("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),qs=[js];function zs(e,t){return d(),p("svg",Us,qs)}var Fs=x(Ms,[["render",zs]]);const Ws={key:0,class:"next-and-prev-link"},Vs={class:"container"},Gs={class:"prev"},Js=["href"],Ks={class:"text"},Xs={class:"next"},Ys=["href"],Qs={class:"text"},Zs=k({__name:"NextAndPrevLinks",setup(e){const{hasLinks:t,prev:n,next:s}=Rs();return(o,a)=>l(t)?(d(),p("div",Ws,[f("div",Vs,[f("div",Gs,[l(n)?(d(),p("a",{key:0,class:"link",href:l(I)(l(n).link)},[g(Os,{class:"icon icon-prev"}),f("span",Ks,A(l(n).text),1)],8,Js)):b("",!0)]),f("div",Xs,[l(s)?(d(),p("a",{key:0,class:"link",href:l(I)(l(s).link)},[f("span",Qs,A(l(s).text),1),g(Fs,{class:"icon icon-next"})],8,Ys)):b("",!0)])])])):b("",!0)}});var eo=x(Zs,[["__scopeId","data-v-38ede35f"]]);const to={class:"page"},no={class:"container"},so=k({__name:"Page",setup(e){return(t,n)=>{const s=Y("Content");return d(),p("main",to,[f("div",no,[$(t.$slots,"top",{},void 0,!0),g(s,{class:"content"}),g(Ns),g(eo),$(t.$slots,"bottom",{},void 0,!0)])])}}});var oo=x(so,[["__scopeId","data-v-7eddb2c4"]]);const ro={key:0,id:"ads-container"},ao=k({__name:"Layout",setup(e){const t=_t(()=>Ie(()=>import("./Home.c4239029.js"),["assets/Home.c4239029.js","assets/plugin-vue_export-helper.d4f00d1e.js"])),n=()=>null,s=n,o=n,a=n,r=N(),{site:i,page:c,theme:u,frontmatter:h}=C(),m=_(()=>!!h.value.customLayout),L=_(()=>!!h.value.home),w=_(()=>Object.keys(i.value.langs).length>1),y=_(()=>{const v=u.value;return h.value.navbar===!1||v.navbar===!1?!1:i.value.title||v.logo||v.repo||v.nav}),R=q(!1),Ke=_(()=>h.value.home||h.value.sidebar===!1?!1:!ln(re(u.value.sidebar,r.data.relativePath))),V=v=>{R.value=typeof v=="boolean"?v:!R.value},Xe=V.bind(null,!1);z(r,Xe);const Ye=_(()=>[{"no-navbar":!y.value,"sidebar-open":R.value,"no-sidebar":!Ke.value}]);return(v,ie)=>{const Qe=Y("Content"),Ze=Y("Debug");return d(),p(F,null,[f("div",{class:M(["theme",l(Ye)])},[l(y)?(d(),E(Qn,{key:0,onToggle:V},{search:P(()=>[$(v.$slots,"navbar-search",{},()=>[l(u).algolia?(d(),E(l(a),{key:0,options:l(u).algolia,multilang:l(w)},null,8,["options","multilang"])):b("",!0)])]),_:3})):b("",!0),g(fs,{open:R.value},{"sidebar-top":P(()=>[$(v.$slots,"sidebar-top")]),"sidebar-bottom":P(()=>[$(v.$slots,"sidebar-bottom")]),_:3},8,["open"]),f("div",{class:"sidebar-mask",onClick:ie[0]||(ie[0]=$o=>V(!1))}),l(m)?(d(),E(Qe,{key:1})):l(L)?$(v.$slots,"home",{key:2},()=>[g(l(t),null,{hero:P(()=>[$(v.$slots,"home-hero")]),features:P(()=>[$(v.$slots,"home-features")]),footer:P(()=>[$(v.$slots,"home-footer")]),_:3})]):(d(),E(oo,{key:3},{top:P(()=>[$(v.$slots,"page-top-ads",{},()=>[l(u).carbonAds&&l(u).carbonAds.carbon?(d(),p("div",ro,[(d(),E(l(s),{key:"carbon"+l(c).relativePath,code:l(u).carbonAds.carbon,placement:l(u).carbonAds.placement},null,8,["code","placement"]))])):b("",!0)]),$(v.$slots,"page-top")]),bottom:P(()=>[$(v.$slots,"page-bottom"),$(v.$slots,"page-bottom-ads",{},()=>[l(u).carbonAds&&l(u).carbonAds.custom?(d(),E(l(o),{key:"custom"+l(c).relativePath,code:l(u).carbonAds.custom,placement:l(u).carbonAds.placement},null,8,["code","placement"])):b("",!0)])]),_:3}))],2),g(Ze)],64)}}}),io={class:"theme"},co=f("h1",null,"404",-1),lo=["href"],uo=k({__name:"NotFound",setup(e){const{site:t}=C(),n=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];function s(){return n[Math.floor(Math.random()*n.length)]}return(o,a)=>(d(),p("div",io,[co,f("blockquote",null,A(s()),1),f("a",{href:l(t).base,"aria-label":"go to home"},"Take me home.",8,lo)]))}}),j={Layout:ao,NotFound:uo},X=new Set,Je=()=>document.createElement("link"),fo=e=>{const t=Je();t.rel="prefetch",t.href=e,document.head.appendChild(t)},po=e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};let H;const _o=S&&(H=Je())&&H.relList&&H.relList.supports&&H.relList.supports("prefetch")?fo:po;function ho(){if(!S||!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const s=()=>{n&&n.disconnect(),n=new IntersectionObserver(a=>{a.forEach(r=>{if(r.isIntersecting){const i=r.target;n.unobserve(i);const{pathname:c}=i;if(!X.has(c)){X.add(c);const u=Me(c);_o(u)}}})}),t(()=>{document.querySelectorAll("#app a").forEach(a=>{const{target:r,hostname:i,pathname:c}=a,u=c.match(/\.\w+$/);u&&u[0]!==".html"||r!=="_blank"&&i===location.hostname&&(c!==location.pathname?n.observe(a):X.add(c))})})};D(s);const o=N();z(()=>o.path,s),Be(()=>{n&&n.disconnect()})}const mo=k({setup(e,{slots:t}){const n=q(!1);return D(()=>{n.value=!0}),()=>n.value&&t.default?t.default():null}}),vo=j.NotFound||(()=>"404 Not Found"),go={name:"VitePressApp",setup(){const{site:e}=C();return D(()=>{z(()=>e.value.lang,t=>{document.documentElement.lang=t},{immediate:!0})}),ho(),()=>B(j.Layout)}};function bo(){const e=wo(),t=ko();t.provide(Ue,e);const n=Vt(e.route);return t.provide(Oe,n),S&&Yt(e.route,n.site),t.component("Content",en),t.component("ClientOnly",mo),t.component("Debug",()=>null),Object.defineProperty(t.config.globalProperties,"$frontmatter",{get(){return n.frontmatter.value}}),j.enhanceApp&&j.enhanceApp({app:t,router:e,siteData:W}),{app:t,router:e}}function ko(){return Ot(go)}function wo(){let e=S,t;return Kt(n=>{let s=Me(n);return e&&(t=s),(e||t===s)&&(s=s.replace(/\.js$/,".lean.js")),S?(e=!1,Ie(()=>import(s),[])):require(s)},vo)}if(S){const{app:e,router:t}=bo();t.go().then(()=>{e.mount("#app")})}export{$e as N,bo as createApp,C as u,I as w};
