import{u as y,w as F,N as x}from"./app.06c38476.js";import{_ as m,u as h,n as i,z as e,x as o,y as a,D as _,A as n,C as l,F as g,M as I,N as L,T as A,O as d,P as k}from"./plugin-vue_export-helper.d4f00d1e.js";const C={key:0,class:"home-hero"},N={key:0,class:"figure"},B=["src","alt"],w={key:1,id:"main-title",class:"title"},D={key:2,class:"tagline"},V=h({__name:"HomeHero",setup(p){const{site:s,frontmatter:t}=y(),c=i(()=>{const{heroImage:r,heroText:u,tagline:H,actionLink:$,actionText:T}=t.value;return r||u||H||$&&T}),v=i(()=>t.value.heroText||s.value.title),f=i(()=>t.value.tagline||s.value.description);return(r,u)=>e(c)?(o(),a("header",C,[e(t).heroImage?(o(),a("figure",N,[_("img",{class:"image",src:e(F)(e(t).heroImage),alt:e(t).heroAlt},null,8,B)])):n("",!0),e(v)?(o(),a("h1",w,l(e(v)),1)):n("",!0),e(f)?(o(),a("p",D,l(e(f)),1)):n("",!0),e(t).actionLink&&e(t).actionText?(o(),g(x,{key:3,item:{link:e(t).actionLink,text:e(t).actionText},class:"action"},null,8,["item"])):n("",!0),e(t).altActionLink&&e(t).altActionText?(o(),g(x,{key:4,item:{link:e(t).altActionLink,text:e(t).altActionText},class:"action alt"},null,8,["item"])):n("",!0)])):n("",!0)}});var b=m(V,[["__scopeId","data-v-370f18c0"]]);const S={key:0,class:"home-features"},z={class:"wrapper"},E={class:"container"},M={class:"features"},O={key:0,class:"title"},P={key:1,class:"details"},j=h({__name:"HomeFeatures",setup(p){const{frontmatter:s}=y(),t=i(()=>s.value.features&&s.value.features.length>0),c=i(()=>s.value.features?s.value.features:[]);return(v,f)=>e(t)?(o(),a("div",S,[_("div",z,[_("div",E,[_("div",M,[(o(!0),a(I,null,L(e(c),(r,u)=>(o(),a("section",{key:u,class:"feature"},[r.title?(o(),a("h2",O,l(r.title),1)):n("",!0),r.details?(o(),a("p",P,l(r.details),1)):n("",!0)]))),128))])])])])):n("",!0)}});var q=m(j,[["__scopeId","data-v-e39c13e0"]]);const G={key:0,class:"footer"},J={class:"container"},K={class:"text"},Q=h({__name:"HomeFooter",setup(p){const{frontmatter:s}=y();return(t,c)=>e(s).footer?(o(),a("footer",G,[_("div",J,[_("p",K,l(e(s).footer),1)])])):n("",!0)}});var R=m(Q,[["__scopeId","data-v-30918238"]]);const U={class:"home","aria-labelledby":"main-title"},W={class:"home-content"},X=h({__name:"Home",setup(p){return(s,t)=>{const c=A("Content");return o(),a("main",U,[d(b),k(s.$slots,"hero",{},void 0,!0),d(q),_("div",W,[d(c)]),k(s.$slots,"features",{},void 0,!0),d(R),k(s.$slots,"footer",{},void 0,!0)])}}});var ee=m(X,[["__scopeId","data-v-10122c92"]]);export{ee as default};
