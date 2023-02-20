import{r as g,a as h,o as c,c as l,b as a,F as y,d as b,u as k,e as w,f as x,g as S,w as C,h as N,t as p,i as $,j as E,P,k as j,l as L,v as V,m as D}from"./vendor.a357ec8b.js";const B=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}};B();var M=[{compName:"ESign",compZhName:"\u7535\u5B50\u7B7E\u540D",compDesc:"\u7B80\u5355\u8F7B\u91CF\u7684\u5355\u5B50\u7B7E\u540D\u7EC4\u4EF6",compClassName:"vue-esign"}];const O={class:"xi-doc"},A=a("div",{class:"xi-doc-logo"},[a("img",{src:"http://h5.dooring.cn/uploads/logo_1742fd359da.png",alt:""})],-1),X=x('<div><a href="https://github.com/MrXujiang/react-slider-vertify">Github</a></div><div style="margin-top:60px;"><h3>\u66F4\u591A\u63A8\u8350</h3><div><a href="http://h5.dooring.cn/slider-vertify" target="_blank">React-Slider-Vertify</a></div><div><a href="https://github.com/MrXujiang/h5-Dooring" target="_blank">H5-Dooring</a></div><div><a href="https://github.com/MrXujiang/xijs" target="_blank">xijs</a></div><div><a href="https://github.com/MrXujiang/react-loading" target="_blank">react-loading</a></div><div><a href="https://github.com/MrXujiang" target="_blank">\u5F90\u5C0F\u5915\u7684Github</a></div></div>',2),R={setup(o){const t=g({links:M.map(n=>({path:`/${n.compName}`,name:n.compZhName}))});return(n,i)=>{const e=h("router-link"),r=h("router-view");return c(),l("div",O,[a("aside",null,[A,(c(!0),l(y,null,b(k(t).links,(s,d)=>(c(),S(e,{key:d,to:s.path},{default:C(()=>[N(p(s.name),1)]),_:2},1032,["to"]))),128)),X]),a("main",null,[w(r)])])}}},q="modulepreload",m={},F="/vue3-sign/",H=function(t,n){return!n||n.length===0?t():Promise.all(n.map(i=>{if(i=`${F}${i}`,i in m)return;m[i]=!0;const e=i.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${r}`))return;const s=document.createElement("link");if(s.rel=e?"stylesheet":q,e||(s.as="script",s.crossOrigin=""),s.href=i,document.head.appendChild(s),e)return new Promise((d,f)=>{s.addEventListener("load",d),s.addEventListener("error",f)})})).then(()=>t())},I=[{title:"\u7535\u5B50\u7B7E\u540D",name:"ESign",path:"/ESign",component:()=>H(()=>import("./README.2b0ad8ec.js"),["assets/README.2b0ad8ec.js","assets/vendor.a357ec8b.js"])}],T={history:$(),routes:I,scrollBehavior(o,t){if(o.path!==t.path)return{top:0}}},G=E(T);var _=(o,t)=>{const n=o.__vccOpts||o;for(const[i,e]of t)n[i]=e;return n};const K={},W={class:"my-vue-esign"};function Z(o,t){return c(),l("div",W," \u6211\u662F\u7535\u5B50\u7B7E\u540D\u7EC4\u4EF6 ")}var Y=_(K,[["render",Z],["__scopeId","data-v-021dae8e"]]);const u={install(o){o.component("ESign",Y)}},z={install(o){var t;(t=u.install)==null||t.call(u,o)}};const J={props:{compName:{type:String,default:"",require:!0},demoName:{type:String,default:"",require:!0}},data(){return{sourceCode:"",codeVisible:!1}},computed:{previewSourceCode(){return this.sourceCode.replace(/'\.\.\/\.\.\/index'/g,"'@tencent/my-kit'")}},async mounted(){this.compName&&this.demoName&&(this.sourceCode=await fetch(`/MY-Kit/packages/${this.compName}/docs/${this.demoName}.vue`).then(o=>o.text())),await this.$nextTick(),P.highlightAll()},methods:{async copyCode(){},showSourceCode(){this.codeVisible=!this.codeVisible}}},Q={class:"xi-preview"},U={class:"source-code"},ee={class:"language-html"},te={class:"language-html"},re={class:"preview-bottom"};function oe(o,t,n,i,e,r){return c(),l("div",Q,[a("section",null,[j(o.$slots,"default")]),L(a("div",U,[a("pre",ee,[a("code",te,p(r.previewSourceCode),1)])],512),[[V,e.codeVisible]]),a("div",re,[a("span",{name:"Code",onClick:t[0]||(t[0]=(...s)=>r.showSourceCode&&r.showSourceCode(...s))},"\u67E5\u770B\u4EE3\u7801")])])}var se=_(J,[["render",oe]]);const v=D(R);v.component("Preview",se);v.use(z).use(G).mount("#app");export{_};
