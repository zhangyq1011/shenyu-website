"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[42175],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=o(n),m=i,h=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(h,a(a({ref:t},s),{},{components:n})):r.createElement(h,a({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[c]="string"==typeof e?e:i,a[1]=p;for(var o=2;o<l;o++)a[o]=n[o];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51900:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const l={title:"Rewrite\u63d2\u4ef6",keywords:["rewrite"],description:"rewrite\u63d2\u4ef6"},a="1. \u6982\u8ff0",p={unversionedId:"plugin-center/http-process/rewrite-plugin",id:"version-2.4.3/plugin-center/http-process/rewrite-plugin",isDocsHomePage:!1,title:"Rewrite\u63d2\u4ef6",description:"rewrite\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/plugin-center/http-process/rewrite-plugin.md",sourceDirName:"plugin-center/http-process",slug:"/plugin-center/http-process/rewrite-plugin",permalink:"/zh/docs/2.4.3/plugin-center/http-process/rewrite-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/plugin-center/http-process/rewrite-plugin.md",version:"2.4.3",frontMatter:{title:"Rewrite\u63d2\u4ef6",keywords:["rewrite"],description:"rewrite\u63d2\u4ef6"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"Request\u63d2\u4ef6",permalink:"/zh/docs/2.4.3/plugin-center/http-process/request-plugin"},next:{title:"Divide\u63d2\u4ef6",permalink:"/zh/docs/2.4.3/plugin-center/proxy/divide-plugin"}},u=[{value:"1.1 \u63d2\u4ef6\u540d\u79f0",id:"11-\u63d2\u4ef6\u540d\u79f0",children:[]},{value:"1.2 \u9002\u7528\u573a\u666f",id:"12-\u9002\u7528\u573a\u666f",children:[]},{value:"1.3 \u63d2\u4ef6\u529f\u80fd",id:"13-\u63d2\u4ef6\u529f\u80fd",children:[]},{value:"1.4 \u63d2\u4ef6\u4ee3\u7801",id:"14-\u63d2\u4ef6\u4ee3\u7801",children:[]},{value:"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2aShenyu\u7248\u672c",id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c",children:[]},{value:"2.1 \u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe",id:"21-\u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe",children:[]},{value:"2.2 \u5bfc\u5165pom",id:"22-\u5bfc\u5165pom",children:[]},{value:"2.3 \u542f\u7528\u63d2\u4ef6",id:"23-\u542f\u7528\u63d2\u4ef6",children:[]},{value:"2.4 \u914d\u7f6e\u63d2\u4ef6",id:"24-\u914d\u7f6e\u63d2\u4ef6",children:[{value:"2.4.1 \u63d2\u4ef6\u914d\u7f6e",id:"241-\u63d2\u4ef6\u914d\u7f6e",children:[]},{value:"2.4.2 \u9009\u62e9\u5668\u914d\u7f6e",id:"242-\u9009\u62e9\u5668\u914d\u7f6e",children:[]},{value:"2.4.3 \u89c4\u5219\u914d\u7f6e",id:"243-\u89c4\u5219\u914d\u7f6e",children:[]}]},{value:"2.5 \u793a\u4f8b",id:"25-\u793a\u4f8b",children:[{value:"2.5.1 \u91cd\u65b0uri\u793a\u4f8b",id:"251-\u91cd\u65b0uri\u793a\u4f8b",children:[]}]}],o={toc:u},s="wrapper";function c(e){let{components:t,...l}=e;return(0,i.kt)(s,(0,r.Z)({},o,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1-\u6982\u8ff0"},"1. \u6982\u8ff0"),(0,i.kt)("h2",{id:"11-\u63d2\u4ef6\u540d\u79f0"},"1.1 \u63d2\u4ef6\u540d\u79f0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rewrite\u63d2\u4ef6")),(0,i.kt)("h2",{id:"12-\u9002\u7528\u573a\u666f"},"1.2 \u9002\u7528\u573a\u666f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u91cd\u5199\u8bf7\u6c42\u8def\u5f84, \u53ef\u4ee5\u4f7f\u7528\u4e0e\u76ee\u6807\u670d\u52a1\u4e0d\u540c\u7684uri\u3002")),(0,i.kt)("h2",{id:"13-\u63d2\u4ef6\u529f\u80fd"},"1.3 \u63d2\u4ef6\u529f\u80fd"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8be5\u63d2\u4ef6\u7528\u4e8e\u91cd\u5199\u8bf7\u6c42uri\u3002")),(0,i.kt)("h2",{id:"14-\u63d2\u4ef6\u4ee3\u7801"},"1.4 \u63d2\u4ef6\u4ee3\u7801"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6838\u5fc3\u6a21\u5757 ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-plugin-rewrite"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6838\u5fc3\u7c7b ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.rewrite.RewritePlugin")))),(0,i.kt)("h2",{id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c"},"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2aShenyu\u7248\u672c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2.4.0")),(0,i.kt)("h1",{id:"2-\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"},"2. \u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"),(0,i.kt)("h2",{id:"21-\u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe"},"2.1 \u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(49586).Z})),(0,i.kt)("h2",{id:"22-\u5bfc\u5165pom"},"2.2 \u5bfc\u5165pom"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u7f51\u5173\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"pom.xml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u63d2\u4ef6 maven \u914d\u7f6e\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"  <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-plugin-rewrite</artifactId>\n      <version>${project.version}</version>\n  </dependency>\n")),(0,i.kt)("h2",{id:"23-\u542f\u7528\u63d2\u4ef6"},"2.3 \u542f\u7528\u63d2\u4ef6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406 --\x3e ",(0,i.kt)("inlineCode",{parentName:"li"},"rewrite")," \u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002\n",(0,i.kt)("img",{src:n(7576).Z}))),(0,i.kt)("h2",{id:"24-\u914d\u7f6e\u63d2\u4ef6"},"2.4 \u914d\u7f6e\u63d2\u4ef6"),(0,i.kt)("h3",{id:"241-\u63d2\u4ef6\u914d\u7f6e"},"2.4.1 \u63d2\u4ef6\u914d\u7f6e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u4f7f\u7528\u524d\u8981\u542f\u7528\u63d2\u4ef6\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u518d\u4f7f\u7528\u63d2\u4ef6\u9700\u8981\u7981\u7528\u3002 ")),(0,i.kt)("h3",{id:"242-\u9009\u62e9\u5668\u914d\u7f6e"},"2.4.2 \u9009\u62e9\u5668\u914d\u7f6e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8bf7\u53c2\u8003: ",(0,i.kt)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u7ba1\u7406"),".")),(0,i.kt)("h3",{id:"243-\u89c4\u5219\u914d\u7f6e"},"2.4.3 \u89c4\u5219\u914d\u7f6e"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(23955).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53c2\u6570\u89e3\u91ca:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"regex")," : \u5339\u914duri\u4e2d\u8981\u91cd\u5199\u90e8\u5206\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"replace")," : \u66ff\u6362\u7684\u5185\u5bb9")))),(0,i.kt)("h2",{id:"25-\u793a\u4f8b"},"2.5 \u793a\u4f8b"),(0,i.kt)("h3",{id:"251-\u91cd\u65b0uri\u793a\u4f8b"},"2.5.1 \u91cd\u65b0uri\u793a\u4f8b"),(0,i.kt)("h4",{id:"2511-\u8fd0\u884c-shenyu-examples-http-\u9879\u76ee"},"2.5.1.1 \u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"h4"},"shenyu-examples-http")," \u9879\u76ee"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-shenyu/tree/master/shenyu-examples/shenyu-examples-http"},"shenyu-examples-http"),", \u53c2\u8003",(0,i.kt)("a",{parentName:"li",href:"../../quick-start/quick-start-http#%E8%BF%90%E8%A1%8Cshenyu-examples-http%E9%A1%B9%E7%9B%AE"}))),(0,i.kt)("h4",{id:"2511-\u63d2\u4ef6\u914d\u7f6e"},"2.5.1.1 \u63d2\u4ef6\u914d\u7f6e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("a",{parentName:"li",href:"#241-%E6%8F%92%E4%BB%B6%E9%85%8D%E7%BD%AE"},"2.4.1"),"\u914d\u7f6e\u63d2\u4ef6.")),(0,i.kt)("h4",{id:"2512-\u9009\u62e9\u5668\u914d\u7f6e"},"2.5.1.2 \u9009\u62e9\u5668\u914d\u7f6e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("a",{parentName:"li",href:"#242-%E9%80%89%E6%8B%A9%E5%99%A8%E9%85%8D%E7%BD%AE"},"2.4.2"),"\u914d\u7f6e\u9009\u62e9\u5668")),(0,i.kt)("h4",{id:"2513-\u89c4\u5219\u914d\u7f6e"},"2.5.1.3 \u89c4\u5219\u914d\u7f6e"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(15933).Z})),(0,i.kt)("p",null,"\u8bf7\u6c42 ",(0,i.kt)("inlineCode",{parentName:"p"},"/http/hello")," \u5c06\u88ab\u91cd\u5199\u6210",(0,i.kt)("inlineCode",{parentName:"p"},"/hi"),"\u3002"),(0,i.kt)("h4",{id:"2514-\u9a8c\u8bc1\u7ed3\u679c"},"2.5.1.4 \u9a8c\u8bc1\u7ed3\u679c"),(0,i.kt)("p",null,"\u4f7f\u7528\u5de5\u5177\uff08\u5982Postman\uff09\u53d1\u8d77\u8bf7\u6c42\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(92205).Z})),(0,i.kt)("h1",{id:"3-\u5982\u4f55\u7981\u7528\u63d2\u4ef6"},"3. \u5982\u4f55\u7981\u7528\u63d2\u4ef6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406 --\x3e ",(0,i.kt)("inlineCode",{parentName:"li"},"rewrite")," \u8bbe\u7f6e\u4e3a\u5173\u95ed\u3002")))}c.isMDXComponent=!0},92205:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rewrite_example_result-1f6860e296fc5418aa97ad425dca82b3.png"},15933:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rewrite_example_rule-5ad55fb5d2a785738487d663b9c49977.png"},7576:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rewrite_open-c55fca4d158b61d0ae9cc8bd592204ce.png"},23955:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rewrite_rule_config-d5e17a2648c2d6a0e0def60767164ae5.png"},49586:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rewrite_use_zh-12454c7c233b74dd945dfa3637056ed4.png"}}]);