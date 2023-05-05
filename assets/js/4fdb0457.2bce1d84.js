"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[87238],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95502:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"2.5.1",sidebar_position:3,keywords:["release-notes"],description:"release-notes"},l="2.5.1",o={unversionedId:"2.5.1-release",id:"2.5.1-release",isDocsHomePage:!1,title:"2.5.1",description:"release-notes",source:"@site/event/2.5.1-release.md",sourceDirName:".",slug:"/2.5.1-release",permalink:"/event/2.5.1-release",editUrl:"https://github.com/apache/shenyu-website/edit/main/event/2.5.1-release.md",version:"current",lastUpdatedBy:"Bird",lastUpdatedAt:1683255527,formattedLastUpdatedAt:"5/5/2023",sidebarPosition:3,frontMatter:{title:"2.5.1",sidebar_position:3,keywords:["release-notes"],description:"release-notes"}},p=[{value:"New Features",id:"new-features",children:[]},{value:"API Changes",id:"api-changes",children:[]},{value:"Enhancement",id:"enhancement",children:[]},{value:"Refactor",id:"refactor",children:[]},{value:"Bug Fix",id:"bug-fix",children:[]}],c={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"251"},"2.5.1"),(0,r.kt)("h3",{id:"new-features"},"New Features"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add brpc example"),(0,r.kt)("li",{parentName:"ol"},"Add spring boot starter plugin brpc&admin"),(0,r.kt)("li",{parentName:"ol"},"Add brpc-plugin"),(0,r.kt)("li",{parentName:"ol"},"Add shenyu-client-api-doc"),(0,r.kt)("li",{parentName:"ol"},"Add sdk duplicate class check"),(0,r.kt)("li",{parentName:"ol"},"Support diff nacos namespace"),(0,r.kt)("li",{parentName:"ol"},"Add array method of expression in mock plugin"),(0,r.kt)("li",{parentName:"ol"},"Support generation of mock data on request"),(0,r.kt)("li",{parentName:"ol"},"Support user specify http request domain"),(0,r.kt)("li",{parentName:"ol"},"Add MockRequestRecord"),(0,r.kt)("li",{parentName:"ol"},"Development shenyu-register-instance-eureka"),(0,r.kt)("li",{parentName:"ol"},"Support API document Api doc detail mapper"),(0,r.kt)("li",{parentName:"ol"},"Add api doc ddl"),(0,r.kt)("li",{parentName:"ol"},"Add TagMapper and TagRelationMapper"),(0,r.kt)("li",{parentName:"ol"},"Add api and api_rule_relation mapper"),(0,r.kt)("li",{parentName:"ol"},"Not config rule"),(0,r.kt)("li",{parentName:"ol"},"Refactor message readers"),(0,r.kt)("li",{parentName:"ol"},"Add sentinel rule handle parameter"),(0,r.kt)("li",{parentName:"ol"},"Add shenyu-e2e test engine"),(0,r.kt)("li",{parentName:"ol"},"Make an Apache Shenyu SSO authentication plugin based on casdoor"),(0,r.kt)("li",{parentName:"ol"},"Add logging-tencent-cls plugin"),(0,r.kt)("li",{parentName:"ol"},"Support clickhouse-logging-pugin"),(0,r.kt)("li",{parentName:"ol"},"Add logging-pulsar plugin"),(0,r.kt)("li",{parentName:"ol"},"Add new plugin: key-auth"),(0,r.kt)("li",{parentName:"ol"},"Fix sign plugin DataBufferLimitException error"),(0,r.kt)("li",{parentName:"ol"},"Fix context-path error")),(0,r.kt)("h3",{id:"api-changes"},"API Changes"),(0,r.kt)("h3",{id:"enhancement"},"Enhancement"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add simpler client annotations for motan"),(0,r.kt)("li",{parentName:"ol"},"Add simpler client annotations for websocket"),(0,r.kt)("li",{parentName:"ol"},"Add configuration in starter for motan plugin"),(0,r.kt)("li",{parentName:"ol"},"Add convenience annotation for shenyu-client-springcloud and shenyu-client-springmvc")),(0,r.kt)("h3",{id:"refactor"},"Refactor"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Refactor some code for mock request of api doc"),(0,r.kt)("li",{parentName:"ol"},"Refactor logging-clickhouse"),(0,r.kt)("li",{parentName:"ol"},"Polish maven dependencies of dubbo"),(0,r.kt)("li",{parentName:"ol"},"Refactor sign plugin"),(0,r.kt)("li",{parentName:"ol"},"Update ShenyuExtConfiguration"),(0,r.kt)("li",{parentName:"ol"},"Remove unnecessary singleton"),(0,r.kt)("li",{parentName:"ol"},"Fix generating mock data in multithreading"),(0,r.kt)("li",{parentName:"ol"},"Refactor sdk test and processArgument"),(0,r.kt)("li",{parentName:"ol"},"Refactor DefaultSignService"),(0,r.kt)("li",{parentName:"ol"},"Fix shenyu-admin rule"),(0,r.kt)("li",{parentName:"ol"},"Optimized ShaUtil"),(0,r.kt)("li",{parentName:"ol"},"Fix cache too large"),(0,r.kt)("li",{parentName:"ol"},"Fix ConcurrentModificationException"),(0,r.kt)("li",{parentName:"ol"},"Fix sync data in etcd"),(0,r.kt)("li",{parentName:"ol"},"Refactor shenyu sdk client"),(0,r.kt)("li",{parentName:"ol"},"Optimize request timeout response"),(0,r.kt)("li",{parentName:"ol"},"Refactor log module"),(0,r.kt)("li",{parentName:"ol"},"Refactor shenyu-client-springcloud"),(0,r.kt)("li",{parentName:"ol"},"Refactor MotanServiceEventListener"),(0,r.kt)("li",{parentName:"ol"},"Refactor shenyu-admin sync data listener"),(0,r.kt)("li",{parentName:"ol"},"Refactor shenyu-client-tars"),(0,r.kt)("li",{parentName:"ol"},"Refactor client sdks alibaba dubbo"),(0,r.kt)("li",{parentName:"ol"},"Refactor springmvc client"),(0,r.kt)("li",{parentName:"ol"},"Refactor admin mapper config"),(0,r.kt)("li",{parentName:"ol"},"Refactor shenyu-plugin-logging"),(0,r.kt)("li",{parentName:"ol"},"Optimize random algorithm"),(0,r.kt)("li",{parentName:"ol"},"Refactor random loadbalancer"),(0,r.kt)("li",{parentName:"ol"},"Refactor logging-kafka")),(0,r.kt)("h3",{id:"bug-fix"},"Bug Fix"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Remove redundant cookie setting"),(0,r.kt)("li",{parentName:"ol"},"Fix appAuth delete"),(0,r.kt)("li",{parentName:"ol"},"fix Cryptor-Request Plugin"),(0,r.kt)("li",{parentName:"ol"},"To avoid load the same ext plugins repeatedly"),(0,r.kt)("li",{parentName:"ol"},"Fix the TagRelationQuery"),(0,r.kt)("li",{parentName:"ol"},"Fix upgrade sql"),(0,r.kt)("li",{parentName:"ol"},"Fix Nacos register NPE"),(0,r.kt)("li",{parentName:"ol"},"Fix sandbox json parsing"),(0,r.kt)("li",{parentName:"ol"},"Prevent the first time from failing to load"),(0,r.kt)("li",{parentName:"ol"},"Fix plugin update bug by modifying config field setter"),(0,r.kt)("li",{parentName:"ol"},"Fix postgresql sql"),(0,r.kt)("li",{parentName:"ol"},"Fix the postgresql error during ShenYu-Admin startup"),(0,r.kt)("li",{parentName:"ol"},"Fix sentinel can't fuse"),(0,r.kt)("li",{parentName:"ol"},"Fix TencentClsLogCollectClient"),(0,r.kt)("li",{parentName:"ol"},"Fix change password error"),(0,r.kt)("li",{parentName:"ol"},"Fix selector page"),(0,r.kt)("li",{parentName:"ol"},"Fix request plugin can't replaceCookie"),(0,r.kt)("li",{parentName:"ol"},"Fix RateLimiterPlugin concurrent handler error")))}m.isMDXComponent=!0}}]);