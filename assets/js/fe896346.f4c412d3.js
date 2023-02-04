"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[94962],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),u=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return i.createElement(p.Provider,{value:n},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,f=c["".concat(p,".").concat(m)]||c[m]||s[m]||r;return t?i.createElement(f,l(l({ref:n},d),{},{components:t})):i.createElement(f,l({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=t[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},15564:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=t(87462),a=(t(67294),t(3905));const r={title:"Waf Plugin",keywords:["waf"],description:"waf plugin"},l=void 0,o={unversionedId:"plugin-center/security/waf-plugin",id:"plugin-center/security/waf-plugin",isDocsHomePage:!1,title:"Waf Plugin",description:"waf plugin",source:"@site/docs/plugin-center/security/waf-plugin.md",sourceDirName:"plugin-center/security",slug:"/plugin-center/security/waf-plugin",permalink:"/docs/next/plugin-center/security/waf-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/docs/plugin-center/security/waf-plugin.md",version:"current",frontMatter:{title:"Waf Plugin",keywords:["waf"],description:"waf plugin"},sidebar:"tutorialSidebar",previous:{title:"Sign Plugin",permalink:"/docs/next/plugin-center/security/sign-plugin"},next:{title:"Logging Aliyun Sls Plugin",permalink:"/docs/next/plugin-center/observability/logging-aliyun-sls"}},p=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Add Dependency",id:"add-dependency",children:[]},{value:"Waf Plugin Configuration",id:"waf-plugin-configuration",children:[]},{value:"Situation",id:"situation",children:[]}],u={toc:p},d="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Waf")," is the core implementation of gateway to realize firewall function for network traffic.")),(0,a.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,a.kt)("p",null,"Please refer to the ",(0,a.kt)("inlineCode",{parentName:"p"},"deployment")," document, choose a way to start ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),". For example, through ",(0,a.kt)("a",{parentName:"p",href:"../../deployment/deployment-local"},"Local Deployment")," to start the ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," management system."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," BasicConfig --\x3e plugin -> ",(0,a.kt)("inlineCode",{parentName:"p"},"waf")," set to enable.If you don't want to use this function, please disable this plugin in the ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"."),(0,a.kt)("img",{src:"/img/shenyu/plugin/waf/waf_open_en.jpg",width:"80%",height:"80%"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add configuration mode in plugin editing."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"{\"model\":\"black\"}\n# model can be 'black' or 'mixed'\n# The default mode is blacklist mode; If setting is mixed, it will be mixed mode. We will explain it specifically below.\n")),(0,a.kt)("h2",{id:"add-dependency"},"Add Dependency"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Introducing ",(0,a.kt)("inlineCode",{parentName:"li"},"waf")," dependency in the pom.xml of the gateway.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu waf plugin start--\x3e\n  <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-plugin-waf</artifactId>\n      <version>${project.version}</version>\n  </dependency>\n  \x3c!-- apache shenyu waf plugin end--\x3e\n")),(0,a.kt)("h2",{id:"waf-plugin-configuration"},"Waf Plugin Configuration"),(0,a.kt)("p",null,"For more instructions on selector and rule configuration, please refer to: ",(0,a.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config"),", here only some fields are introduced."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Waf")," plugin rule configuration page:"),(0,a.kt)("img",{src:"/img/shenyu/plugin/waf/waf_rule_en.jpg",width:"80%",height:"80%"}),(0,a.kt)("p",null,"For requests that are denied access by ",(0,a.kt)("inlineCode",{parentName:"p"},"Waf")," , the response header status code is: ",(0,a.kt)("inlineCode",{parentName:"p"},"403"),"."),(0,a.kt)("h4",{id:"black-model"},"Black Model"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When ",(0,a.kt)("inlineCode",{parentName:"li"},"model")," is set to ",(0,a.kt)("inlineCode",{parentName:"li"},"black")," mode, only the matched traffic will execute the rejection policy, and the unmatched traffic will be skipped directly."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Handler")," feild in the rule configuration is invalid and can be configured to be empty.")),(0,a.kt)("h4",{id:"mixed-model"},"Mixed Model"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When ",(0,a.kt)("inlineCode",{parentName:"p"},"model")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"mixed")," mode, all traffic will pass through waf plugin. For different matching traffic, users can set whether to reject or pass.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Handler")," feild  in the rule configuration must be configured:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"permission"),": The handle logic that matches the rule. ",(0,a.kt)("inlineCode",{parentName:"p"},"reject"),": deny access, ",(0,a.kt)("inlineCode",{parentName:"p"},"allow"),": allow access.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"statusCode"),": When access is denied, the value of the code field in the response body. ",(0,a.kt)("inlineCode",{parentName:"p"},"Will not modify the status code of the response header"),"."),(0,a.kt)("p",{parentName:"li"},"  e.g.\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"statusCode=10001"),"\uff0cThe rejected response body is :"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{"code":10001,"message":"You are forbidden to visit"}\n')))))),(0,a.kt)("h2",{id:"situation"},"Situation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Waf")," is also the pre-plugin of ",(0,a.kt)("inlineCode",{parentName:"li"},"ShenYu"),", which is mainly used to intercept illegal requests or exception requests and give relevant rejection policies."),(0,a.kt)("li",{parentName:"ul"},"When faced with replay attacks, you can intercept illegal ",(0,a.kt)("inlineCode",{parentName:"li"},"ip")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"host"),", and set reject strategy according to matched ",(0,a.kt)("inlineCode",{parentName:"li"},"ip")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"host"),"."),(0,a.kt)("li",{parentName:"ul"},"How to determine ",(0,a.kt)("inlineCode",{parentName:"li"},"ip")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"host"),", please refer to: ",(0,a.kt)("a",{parentName:"li",href:"../../developer/custom-parsing-ip-and-host"},"parsing-ip-and-host"))))}c.isMDXComponent=!0}}]);