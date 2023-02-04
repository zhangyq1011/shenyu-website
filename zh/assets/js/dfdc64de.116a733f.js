"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[73032],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(t),m=i,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return t?r.createElement(g,a(a({ref:n},p),{},{components:t})):r.createElement(g,a({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[c]="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},68635:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const l={sidebar_position:7,title:"Sentinel\u63d2\u4ef6",keywords:["soul"],description:"sentinel\u63d2\u4ef6"},a=void 0,o={unversionedId:"plugins/sentinel-plugin",id:"version-2.3.0-Legacy/plugins/sentinel-plugin",isDocsHomePage:!1,title:"Sentinel\u63d2\u4ef6",description:"sentinel\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0-Legacy/plugins/sentinel-plugin.md",sourceDirName:"plugins",slug:"/plugins/sentinel-plugin",permalink:"/zh/docs/2.3.0-Legacy/plugins/sentinel-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0-Legacy/plugins/sentinel-plugin.md",version:"2.3.0-Legacy",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Sentinel\u63d2\u4ef6",keywords:["soul"],description:"sentinel\u63d2\u4ef6"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"Hystrix\u63d2\u4ef6",permalink:"/zh/docs/2.3.0-Legacy/plugins/hystrix-plugin"},next:{title:"Resilience4j\u63d2\u4ef6",permalink:"/zh/docs/2.3.0-Legacy/plugins/resilience4j-plugin"}},u=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u63d2\u4ef6\u8bbe\u7f6e",id:"\u63d2\u4ef6\u8bbe\u7f6e",children:[]},{value:"\u63d2\u4ef6\u4f7f\u7528",id:"\u63d2\u4ef6\u4f7f\u7528",children:[]}],s={toc:u},p="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"sentinel\u63d2\u4ef6\u662f\u7f51\u5173\u7528\u6765\u5bf9\u6d41\u91cf\u8fdb\u884c\u9650\u6d41\u4e0e\u7194\u65ad\u7684\u53ef\u9009\u9009\u62e9\u4e4b\u4e00\u3002"),(0,i.kt)("li",{parentName:"ul"},"sentinel\u4e3a\u7f51\u5173\u7194\u65ad\u9650\u6d41\u63d0\u4f9b\u80fd\u529b\u3002")),(0,i.kt)("h2",{id:"\u63d2\u4ef6\u8bbe\u7f6e"},"\u63d2\u4ef6\u8bbe\u7f6e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"soul-admin")," --\x3e  \u63d2\u4ef6\u7ba1\u7406 --\x3e ",(0,i.kt)("inlineCode",{parentName:"li"},"sentinel"),"\uff0c\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u7528\u6237\u4e0d\u4f7f\u7528\uff0c\u5219\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"soul-admin")," \u540e\u53f0\u628a\u6b64\u63d2\u4ef6\u505c\u7528\u3002")),(0,i.kt)("h2",{id:"\u63d2\u4ef6\u4f7f\u7528"},"\u63d2\u4ef6\u4f7f\u7528"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u7f51\u5173\u7684 pom.xml \u6587\u4ef6\u4e2d\u6dfb\u52a0 sentinel\u7684\u652f\u6301\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- soul sentinel plugin start--\x3e\n  <dependency>\n      <groupId>org.dromara</groupId>\n      <artifactId>soul-spring-boot-starter-plugin-sentinel</artifactId>\n       <version>${last.version}</version>\n  </dependency>\n  \x3c!-- soul sentinel plugin end--\x3e\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\uff0c\u8bf7\u8be6\u7ec6\u770b\uff1a",(0,i.kt)("a",{parentName:"p",href:"../admin/selector-and-rule"},"\u9009\u62e9\u5668\u89c4\u5219"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Sentinel\u5904\u7406\u8be6\u89e3\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u662f\u5426\u5f00\u542f\u6d41\u63a7(1\u62160) \uff1a\u662f\u5426\u5f00\u542fsentinel\u7684\u6d41\u63a7\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6d41\u63a7\u6548\u679c \uff1a \u6d41\u63a7\u6548\u679c\uff08\u76f4\u63a5\u62d2\u7edd / \u6392\u961f\u7b49\u5f85 / \u6162\u542f\u52a8\u6a21\u5f0f\uff09\uff0c\u4e0d\u652f\u6301\u6309\u8c03\u7528\u5173\u7cfb\u9650\u6d41\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u9650\u6d41\u9608\u503c\u7c7b\u578b \uff1a \u9650\u6d41\u9608\u503c\u7c7b\u578b\uff0cQPS \u6216\u7ebf\u7a0b\u6570\u6a21\u5f0f\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u662f\u5426\u5f00\u542f\u7194\u65ad(1\u62160) \uff1a\u662f\u5426\u5f00\u542fsentinel\u7194\u65ad\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7194\u65ad\u7c7b\u578b\uff1a \u7194\u65ad\u7b56\u7565\uff0c\u652f\u6301\u79d2\u7ea7 RT/\u79d2\u7ea7\u5f02\u5e38\u6bd4\u4f8b/\u5206\u949f\u7ea7\u5f02\u5e38\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7194\u65ad\u9608\u503c: \u9608\u503c\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7194\u65ad\u7a97\u53e3\u5927\u5c0f: \u964d\u7ea7\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a s\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7194\u65adURI: \u7194\u65ad\u540e\u7684\u964d\u7ea7uri\u3002")))))}c.isMDXComponent=!0}}]);