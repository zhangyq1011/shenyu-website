"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[14195],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=r,f=c["".concat(s,".").concat(g)]||c[g]||d[g]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},27925:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:4,title:"Sofa Plugin",keywords:["sofa"],description:"sofa access soul gateway"},o=void 0,l={unversionedId:"plugins/sofa-plugin",id:"version-2.3.0-Legacy/plugins/sofa-plugin",isDocsHomePage:!1,title:"Sofa Plugin",description:"sofa access soul gateway",source:"@site/versioned_docs/version-2.3.0-Legacy/plugins/sofa-plugin.md",sourceDirName:"plugins",slug:"/plugins/sofa-plugin",permalink:"/docs/2.3.0-Legacy/plugins/sofa-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.3.0-Legacy/plugins/sofa-plugin.md",version:"2.3.0-Legacy",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Sofa Plugin",keywords:["sofa"],description:"sofa access soul gateway"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"SpringCloud Plugin",permalink:"/docs/2.3.0-Legacy/plugins/spring-cloud-plugin"},next:{title:"RateLimiter Plugin",permalink:"/docs/2.3.0-Legacy/plugins/rate-limiter-plugin"}},s=[{value:"Description",id:"description",children:[]},{value:"Plugin Settings",id:"plugin-settings",children:[]},{value:"Plugin Metadata",id:"plugin-metadata",children:[]}],p={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The sofa plug-in is a plug-in that converts the HTTP protocol into the sofa protocol, and it is also the key to the gateway to realize the sofa generalization call."),(0,r.kt)("li",{parentName:"ul"},"sThe sofa plug-in needs to cooperate with metadata to realize the call of Dubbo. Please refer to: ",(0,r.kt)("a",{parentName:"li",href:"../design/meta-data"},"Metadata"),"\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.dromara</groupId>\n    <artifactId>soul-spring-boot-starter-plugin-sofa</artifactId>\n    <version>${last.version}</version>\n</dependency>\n")),(0,r.kt)("h2",{id:"plugin-settings"},"Plugin Settings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First, go to ",(0,r.kt)("inlineCode",{parentName:"li"},"soul-admin")," --\x3e plug-in management->  setting ",(0,r.kt)("inlineCode",{parentName:"li"},"sofa")," is open."),(0,r.kt)("li",{parentName:"ul"},"Then, in the configuration of sofa plug-in, config sofa's register center like this: ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'{"protocol":"zookeeper","register":"127.0.0.1:2181"}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The plug-in needs to be used with a dependent ",(0,r.kt)("inlineCode",{parentName:"p"},"starter"),". For details, please see: ",(0,r.kt)("a",{parentName:"p",href:"../users-guide/sofa-rpc-proxy"},"user-sofa"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Selector's rules\uff0csee : ",(0,r.kt)("a",{parentName:"p",href:"../admin/selector-and-rule"},"selector"),"\u3002"))),(0,r.kt)("h2",{id:"plugin-metadata"},"Plugin Metadata"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each sofa interface method corresponds to a piece of metadata, which can be viewed in the soul-admin > metadata management."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url"),": It's your http urls."),(0,r.kt)("li",{parentName:"ul"},"RPC extension parameter, corresponding to some configuration of sofa interface.If you wanna be modify it, please modify it here. Support JSON format. The following fields:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'{"loadbalance":"hash","retries":3,"timeout":-1}\n')))}c.isMDXComponent=!0}}]);