"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[88301],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>y});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=p(t),d=i,y=u["".concat(c,".").concat(d)]||u[d]||k[d]||l;return t?r.createElement(y,o(o({ref:n},s),{},{components:t})):r.createElement(y,o({ref:n},s))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[u]="string"==typeof e?e:i,o[1]=a;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},68096:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=t(87462),i=(t(67294),t(3905));const l={title:"Tcp\u63d2\u4ef6",keywords:["Tcp"],description:"Tcp\u63d2\u4ef6"},o="1. \u6982\u8ff0",a={unversionedId:"plugin-center/proxy/tcp-plugin",id:"plugin-center/proxy/tcp-plugin",isDocsHomePage:!1,title:"Tcp\u63d2\u4ef6",description:"Tcp\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/plugin-center/proxy/tcp-plugin.md",sourceDirName:"plugin-center/proxy",slug:"/plugin-center/proxy/tcp-plugin",permalink:"/zh/docs/next/plugin-center/proxy/tcp-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/plugin-center/proxy/tcp-plugin.md",version:"current",frontMatter:{title:"Tcp\u63d2\u4ef6",keywords:["Tcp"],description:"Tcp\u63d2\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"Tars\u63d2\u4ef6",permalink:"/zh/docs/next/plugin-center/proxy/tars-plugin"},next:{title:"Websocket\u63d2\u4ef6",permalink:"/zh/docs/next/plugin-center/proxy/websocket-plugin"}},c=[{value:"1.1 \u63d2\u4ef6\u540d\u79f0",id:"11-\u63d2\u4ef6\u540d\u79f0",children:[]},{value:"1.2 \u9002\u7528\u573a\u666f",id:"12-\u9002\u7528\u573a\u666f",children:[]},{value:"1.3 \u63d2\u4ef6\u529f\u80fd",id:"13-\u63d2\u4ef6\u529f\u80fd",children:[]},{value:"1.4 \u63d2\u4ef6\u4ee3\u7801",id:"14-\u63d2\u4ef6\u4ee3\u7801",children:[]},{value:"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c",id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c",children:[]},{value:"2.1 \u63d2\u4ef6\u914d\u7f6e",id:"21-\u63d2\u4ef6\u914d\u7f6e",children:[]},{value:"2.2 Discovery \u652f\u6301",id:"22-discovery-\u652f\u6301",children:[{value:"2.2.1 Zookeeper \u6a21\u5f0f",id:"221-zookeeper-\u6a21\u5f0f",children:[]},{value:"2.2.2 Local \u6a21\u5f0f",id:"222-local-\u6a21\u5f0f",children:[]}]},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[]}],p={toc:c},s="wrapper";function u(e){let{components:n,...l}=e;return(0,i.kt)(s,(0,r.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1-\u6982\u8ff0"},"1. \u6982\u8ff0"),(0,i.kt)("h2",{id:"11-\u63d2\u4ef6\u540d\u79f0"},"1.1 \u63d2\u4ef6\u540d\u79f0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tcp\u63d2\u4ef6")),(0,i.kt)("h2",{id:"12-\u9002\u7528\u573a\u666f"},"1.2 \u9002\u7528\u573a\u666f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5904\u7406 Tcp\u534f\u8bae \u8bf7\u6c42\uff0c\u5c06\u5176\u8f6c\u53d1\u5230\u540e\u7aef\u5176\u4ed6 Tcp \u534f\u8bae\u7684\u670d\u52a1"),(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u8d1f\u8f7d\u5747\u8861")),(0,i.kt)("h2",{id:"13-\u63d2\u4ef6\u529f\u80fd"},"1.3 \u63d2\u4ef6\u529f\u80fd"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u6839\u636e \u914d\u7f6e\u7684 upstream list \u505atcp\u4ee3\u7406"),(0,i.kt)("li",{parentName:"ul"},"upstream list \u53ef\u5728 admin \u6a21\u5757\u81ea\u884c\u914d\u7f6e \u70ed\u540c\u6b65\u5230 gateway"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u8bbe\u7f6e\u8bf7\u6c42\u7684\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\uff0c\u76ee\u524d\u652f\u6301 shenyu \u8d1f\u8f7d\u5747\u8861\u6a21\u5757\u7684\u7b56\u7565 \u6ce8\u610f: \u8d1f\u8f7d\u5747\u8861\u4f5c\u7528\u4e0e\u548cgateway\u5efa\u7acb\u8fde\u63a5\u65f6,\u5f53\u8fde\u63a5\u5efa\u7acb\u540e\u7eed\u7684\u6d41\u91cf\u7ee7\u7eed\u4fdd\u6301\n\u8d1f\u8f7d\u5747\u8861\u6a21\u5757 \u5df2\u7ecf\u9009\u5b9a\u7684upstream"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u914d\u7f6e\u5f00\u542f\u7aef\u53e3\u8fdb\u884c\u76d1\u542c, \u53ef\u914d\u7f6e reactor-netty \u53c2\u6570"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u5f00\u542f\u591a\u4e2a\u4ee3\u7406\u9009\u62e9\u5668")),(0,i.kt)("h2",{id:"14-\u63d2\u4ef6\u4ee3\u7801"},"1.4 \u63d2\u4ef6\u4ee3\u7801"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u6a21\u5757",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-plugin-tcp")," ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-protocol-tcp"))),(0,i.kt)("h2",{id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c"},"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2.6.0")),(0,i.kt)("h1",{id:"2-\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"},"2. \u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"),(0,i.kt)("p",null,"\u542f\u52a8 admin server \u5728 BasicConfig - Plugin \u4e2d \u641c\u7d22 tcp \u63d2\u4ef6 \u5e76\u4e14 \u70b9\u51fb Resource \u6fc0\u6d3b\u5f53\u524d tcp \u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"init-tcp",src:t(8301).Z})),(0,i.kt)("h2",{id:"21-\u63d2\u4ef6\u914d\u7f6e"},"2.1 \u63d2\u4ef6\u914d\u7f6e"),(0,i.kt)("p",null,"\u63d2\u4ef6\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "loadBalance": "random",\n  "bossGroupThreadCount": "1",\n  "workerGroupThreadCount": "12",\n  "clientMaxConnections": "20",\n  "clientMaxIdleTimeMs": "30000",\n  "clientMaxLifeTimeMs": "60000",\n  "clientPendingAcquireTimeout": "5",\n  "clientPendingAcquireMaxCount": "5"\n}\n')),(0,i.kt)("p",null,"loadBalanceAlgorithm : shenyu\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5 \u9ed8\u8ba4random\nbossGroupThreadCount , workerGroupThreadCount\nReactorNetty TcpServer \u914d\u7f6e \u8be6\u60c5\u89c1  ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-protocol-tcp#TcpBootstrapServer#start"),"\nclientMaxConnections , clientMaxIdleTimeMs , clientMaxLifeTimeMs , clientPendingAcquireTimeout ,\nclientPendingAcquireMaxCount\nReactorNetty ",(0,i.kt)("inlineCode",{parentName:"p"},"ConnectionProvider")," \u914d\u7f6e \u8be6\u60c5\u89c1 ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-protocol-tcp#ConnectionContext")),(0,i.kt)("h2",{id:"22-discovery-\u652f\u6301"},"2.2 Discovery \u652f\u6301"),(0,i.kt)("p",null,"\u76ee\u524d \u652f\u6301 Discovery Zookeeper \u548c Local \u6a21\u5f0f"),(0,i.kt)("h3",{id:"221-zookeeper-\u6a21\u5f0f"},"2.2.1 Zookeeper \u6a21\u5f0f"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"zookeeper.png",src:t(45866).Z}),"\n\u914d\u7f6e zookeeper \u94fe\u63a5\u5730\u5740\n\u5f53\u4f60\u8981\u88ab\u6ce8\u518c\u5230 shenyu tcp\u4ee3\u7406\u7684 \u670d\u52a1 \u6ce8\u518c\u5230 ListenerNode \u82e5\u4e0d\u914d\u7f6e\u81ea\u52a8\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"/shenyu/discovery")," \u4e0b\u7684 \u4e34\u65f6\u8282\u70b9"),(0,i.kt)("p",null,"\u6570\u636e\u4e3a:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "protocol": "tcp",\n  "url": "127.0.0.1:6379",\n  "status": 1,\n  "weight": 1,\n  "props": "{}"\n}\n')),(0,i.kt)("p",null,"\u82e5\u6ce8\u518c\u7684\u6570\u636e\u4e0e \u9ed8\u8ba4\u7684json\u683c\u5f0f\u4e0d\u540c\u65f6: \u53ef\u4ee5\u8bbe\u7f6e\u522b\u540d  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "${yourProtocol}": "tcp",\n  "${yourUrl}": "127.0.0.1:6379",\n  "${yourStatus}": 1,\n  "${yourWeight}": 1,\n  "${yourProps}": "{}"\n}\n')),(0,i.kt)("p",null,"discovery \u6a21\u5757\u4f1a\u81ea\u52a8 \u76d1\u542c\u5230 \u4f60\u7684 zookeeper \u6ce8\u518c\u4e2d\u5fc3 \u81ea\u52a8\u7ef4\u62a4 discovery_upstream"),(0,i.kt)("h3",{id:"222-local-\u6a21\u5f0f"},"2.2.2 Local \u6a21\u5f0f"),(0,i.kt)("p",null,"discovery#Local \u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "baseSleepTimeMilliseconds": "1000",\n  "maxRetries": "3",\n  "maxSleepTimeMilliseconds": "1000",\n  "connectionTimeoutMilliseconds": "1000",\n  "sessionTimeoutMilliseconds": "1000",\n  "namespace": "",\n  "digest": null\n}\n')),(0,i.kt)("p",null,"\u8be6\u60c5\u89c1 ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-discovery-zookeeper#ZookeeperDiscoveryService#init")),(0,i.kt)("p",null,"discovery#Local \u914d\u7f6e\n\u624b\u52a8\u914d\u7f6e \u8f6c\u53d1\u7aef\u53e3 \u548c \u4e0b\u6e38\u8282\u70b9\n",(0,i.kt)("img",{alt:"local.png",src:t(77329).Z})),(0,i.kt)("p",null,"shenyu-gateway \u7aef\u53e3\u542f\u52a8log\n",(0,i.kt)("img",{alt:"gateway_start_port_log.png",src:t(3811).Z})),(0,i.kt)("p",null,"shenyu-gateway \u4ee3\u7406\u5217\u8868\u540c\u6b65log\n",(0,i.kt)("img",{alt:"gateway_upstream_list.png",src:t(17143).Z})),(0,i.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,i.kt)("p",null,"\u4ee5 \u4ee3\u7406 redis \u4e3a\u4f8b\n\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"redis-cli -p {forwardPort}")," \u8bbf\u95ee"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"connection.png",src:t(9102).Z})),(0,i.kt)("p",null,"\u5982\u679c\u5f53\u524d admin \u7684  UpstreamList \u4e0e gateway \u51fa\u73b0\u5dee\u5f02\u65f6\u53ef\u4ee5 \u70b9\u51fb\u5237\u65b0 \u5f3a\u5236\u540c\u6b65\u5230gateway"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"refresh_upstream.png",src:t(45721).Z})))}u.isMDXComponent=!0},3811:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/gateway_start_port_log-66e5b55d4865a6cf6e2219d9678e724e.png"},17143:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/gateway_upstream_list-45dd034fab2ed19e67687c9d135dcba9.png"},8301:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/init-tcp-2c3f31e68be443a4dd94e46f7b90fc93.png"},77329:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/local-7378dfc6b716504eea86966c34565b5d.png"},9102:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcsAAABHCAYAAABoB2xQAAAdf0lEQVR4Xu2dac8V1dKGz2eMGo3GIWoUCBAcAmgQMWpQIgIaB4KoQAKCiDEMMiiYIIIyKM4jToCKDIqIQBARVBQEFHGeFX9Kv7lWcu0U+3hsDvsRPe9TH+5077VW1Rp6p+6uWkP/68QTT6xawXHHHVedcsop1fHHH1/ddddd1bfffluNGjWqOumkk6ovvvii2rlzZyOfNK4XXXRR9csvv1TPPvtskT/ttNPK9eSTTy46TzjhhIbe5voSiUQikTjc+Fdzwn8LCO3YY48tBAcZQoIbNmyorrvuuur777+v5s2bV0iQfK7gvPPOK3kvvfRSkYEYTz/99EKkEGfU21xfIpFIJBKHGy2TJUR36qmnFqLj99tvv119/fXX1WuvvVb9+OOP1ZlnnlkdddRRpQz5ECCe5c8//1w999xzhSwhxmOOOeYA4pVcm+tLJBKJROJwo2WyhOwA5MbvcePGVT/88EPBhx9+WNIhSkgQj/Kee+6pHn744eJZvvfee9W9995bXXvttUUH5Cj5ci8BJxKJRCLxd6JlspTQJDvuIULmLu+8884DyG/MmDGFRAnV4nX++uuv1TfffFO98847RY/zls5v5pxlIpFIJP4JaJksITRIzjlL7k13QQ+AMCnD3CT5hF2dy5RoAXOWhG3Ts0wkEonEPwUtk6XeIIQHAcZwaryPZCrBQobkK8dvwrUQayTeRCKRSCT+TrRMloZLITmuhk6dxwQu4NG71KM0bOu8Z1zQI5E215dIJBKJxOFGLVnqGUpekiB5pkGUcY5R7zGWkxCjh6k3qV7r1BOVVCVc8ign6VqHZaMO62lVvq7/XGP/yXPLC+Up48sCV3831+ncLuVsgzpsSxzDPxonf1ve/jbfR32xXzGEbv+U5V45X45so3nq8rfjaBvpn889jr3tsBz3cZxsO3mxrf5WJ22KW498PolEItEqaskSI8Q8o8ZJgxqNMEbw6KOPLr81VoZWNYTAwweUwRBi1Dp06NAwgm4xicaXMug3PRKKbdDoYjCR8dqqfF3/rQN5CcQwMnVSNzL03XlaiYCyEpLGnbrMQw4dyEoksWwknJhGufgMSLf98TkoG0nLvgD7Yb1cjRCgw3TvJavYDvvH1b5IbpYj3edkhMIV1D4Tx8qxjDqaX35Ic7x8zolEItEKaslSctGAY5gGDx5czZ49uxo4cGDDyJLfq1evav78+dXrr79ePfLII2WPJUbtjDPOqDp37lwtWrSoeuihh0qZhQsXlnswZMiQBskeeeSR/xautX7KnH/++UU3BxqwuhaZSGLq0ZC2pfwf9d+ykokEISlJCFwpO378+GrJkiXVK6+8UrbZKGv9Z599dhmfpUuXVtdff32RJZ88dIwcObJatmxZ9eqrrxZ5yUiy4Bk8+OCDpcwtt9zSeI4Sn8/U8bXd6jfP9nLPlfbFfnCVzBgfSa5ZjivjwHPlRcAXFf4TkqByEp/j4f9KEuS5cSoU9+jyBQj9RxxxRONZ8Hzmzp1bXXHFFY3+JxKJRCuoJUuNKYYM4719+/ay5YMtIC+++GLDwHLloIHvvvuugC0hP/30U7Vy5cpi1K688sqSjizpbB1BB1dIlLo0rOo0TSN/6aWXlgMP2HrC1TboBVpeL0rD34p8Xf8pY771xd/IS2gcwsCWGsaGsaIdEKckO3Xq1KKX8aF9jM2ePXuqjh07ljYij4xlyIf0rXPAgAEl7auvvipl2MLDkYISmmRkFCC2LRKmhCdJxXGUvCljP9GpvGnqjXWQD5HRxsmTJzdeiqLnDGJUInrHjPfvv//e6Attic/phhtuKHt70c848cLR/H9OJBKJQ8FBkaVeD4YIQ7x8+fLqt99+q55//vlisCQX0iEk7s8555xq7969xXBdfPHFjVCrhhdj9+abb5Z8vCkMJ2nq0pOjrJ7H1q1bC9FAvPz+/PPPC6n07NmzYWxtN78NNbYiX9d/ZShjCNnfkWzwpOjrvn37qu7du5c8DTseOGW+/PLL4jnhhVPvyy+/XAgPYunatWtpO2NKPvjggw9KOxg/CHDz5s2FJK+66qpCrpSFNMiX6Gibz0wS495xl/ia+y+h6k3aN71G+2m65Cipes/Y0+dp06Y1no+wPbaTe49BJI0XC/rTrNO2cQ4x40tkgzqefvrpxvNIJBKJVlBLlhgrDBn3w4YNK14OoUyM0eLFi4vxpIyG1CsyGCu8ScKFhjclEWTwsjD4EiXp3Dcbcj0IiIPy6IcQ9LAeeOCBA4gOOY1uq/J1/Y8EQrn+/fsXwqNv/fr1KzrANddcU+rD4JsGYZC2YMGCMj4Q8e7duxs6Z8yYUTxQDne4+uqrS1mOEZSIkIdAkSeNseaFgLxBgwaVNgLCsrQVcr7ttttKn9Afw92SXAyNxvEgD9L96KOPik5eMggl01faRvvRh/fLOFMG8qft6KQMZY0mcIXYKMM44S0ytlwjeVM3/wXq5+WB8ZBcJ0yYUPr8zDPPlHJ4/rxUEIqmDsa6+f+cSCQSh4JasuSAAMmG3xil3r17lzd8wmKmU0YjDjCc77//fvF8unTp0vAi9FLuvvvuQlTTp08vac4LSjyG2tBP/llnnVUMIHN1lINUPv3006Kf+TmJWiNrfa3K1/VfkteoQ4qGSLm3vxzpRxphU9LQBdlBLBh15txWrVpVfkN+eJOEYCEDvEjIHb3UiT7axRiik7QePXqU+xUrVhTdn332WZEnjf4R4oWM0QfRUY7jBylLu7naR18OHD+fw1tvvVX0rVu3rlq7dm0hPMZhxIgRpSzkiX6OMYSgGWPIjbEn0sDRhhAbZVavXl3df//9ZW4Rz9rxpy5J3DbQX9IgfD1LvnBDW6gLOWUBz4fnSl3N/+dEIpE4FNSSZTSWXvv27VsM1QsvvHDAmz/lJcxJkyYVo4ihVk4PheuOHTsKMejBYAyjwcRToRy/SYdsIIvHH3+8GGJ0X3LJJeXKcXm2F30QrSsm20K+rv+2GxCGxmOCkC677LLSX3SiDxnyIAd+M/9JmyAeyhCqheRoE2UBREQdECa/ISC8JwBRIL9mzZriuTGeTz75ZPGU0cGB9RDaxo0bG14j+iA7PF/08Rx4Vs5lusCGvvrS4jwyfaJOyYyvy6Bj9OjRVadOnRr6GEfK00ba9NRTT5X+MZ6GYSE7dDim/n/i/86XCvUR/kZ25syZ5Uq//I9Yhnp8PrxERJ2JRCJxqKglS6Dh5B6j1qdPn/KGT8gteoMaPIhp//79xXA6B6aHBTDiGDPmlsyDKNxCEMODEhYrTzG8eF+EHvUa8CBIc74wtqMt5Ov6T5qhY/ORY1y8lxDwjCA32gGJQVh4XpAAstu2bSv5eJ8QAp4v4wQBo485Un4rzxUQmmVxD7J4bPSPlwLqpDxkbDt9BuiDZA2L2n6I0RCt7eY3xE9bedGAGOnbnDlziiwrdH0Z0duM7dy1a1dDvwt8iCj44mS93EeC9Fn4HHjxsg504Llb1vLAMLlefHzx8Rnx2xe1RCKRqEMtWWJYMCp6Bsx3YYwwnDEMqVHDW4MEWDxD+E1ZDRQ6ISfkITC9F/I9N5YFI6RH3RhvVkJiBFm4Eo0ioVXkqD8aWNveinxd/0mj/ZItV9qvcY4vCegYO3Zs6T9eqfOYbJ8hVA0RrF+/vuihHrwwCAeSlVTYDkIIFeKEeFiZC4FRnnvKQ7LOraKf8ChjycsIc6oQKvOHvNDgqRIepW2SFeQYnxn3l19+eRmrRx99tKQBPFjJEo/VkDLfMsXTHTp0aCFRyJ6XIfQTTkbmjjvuKP2xTuuhnZHgbAdgvPGYfeEB9BM9rqglPM2CMvqt5+9zQ7dz5+h1fjaRSCTqUEuWehaGSTFIztlhjCxHOsYZoiTUyD3peouSBcBQ422oX2LCmOERYeggDvcxmocc6Rhi0mbNmlWM55QpUxrt0IBjuPG2WpWv6z/5hikBXifh1Y8//rjco1MSAPzGeKPnscceK3rYZ8qCHPrNvKD10X/y+Uaoi3IkEeQhUdoKIVGelwAIE7KiLueF6R+hUhbT0F9AKJZ9iLZd8tD74nnFZ0M5wrDvvvtu4wWAtqJ/1KhRVbdu3Upb3njjjYYe5Ly6J1IPFa80eroSoi8F/jeoy+gEW0EYD8rdfPPNpW7CwpZHFvJkLpZxyO+lJhKJtkItWQK9KkjC71FitDZt2lQIBw8CY25YECNOOQwiCzjwNjFSzLuxghFjCSlKIBg0rhivJ554oujA2OE5UT+GDYOJB0geJMXKVPci0j7KocNFIDFM16r8n/WfwwkoRx2UwxskD+LjXgONbhbZMB6s2iQMzDiw3UFyRAYiY4EPZVi5SzsYX8YI0qP+4cOHl7lJPCs8Q70nP7hNH+gfuihDGwhhspKVZ8I422fkJDSft4TlAQLqh7QZPwgRD5K6AGRJGbau8JuwMmNCu/ECWdVLHfxH8KDRQeSBAxogdr1CCYxyfnlGwuSKZ+nzYjxdUIRnTBm2APE8eAmh3JYtW/J7qYlEok1QS5YYMAwMhnPixInFCDlnxHwfniQLLZjHctEIJGA5iANjqS5WyJKH0cRISkQSJwZReTxADSOyhPIwgBAp+RhKSEHDh5GFbPE49Exbla/rP1dIRIMOwZNPHvJ6bUAjTj4hULZysB1DoiKcCXnSf8B4Qux6koRAHRuAd+4eTQiA9kOwtJ18iBKdhlUlDOqiP9xLhFw9VUdPz20zkjkLZ2gfuvFSee70hcMA0Elb8DwZX/IZA7x5t4+4wpmws4dCoIuXCuuAJKmfe8cU3chxwAVE6/OkfSyIIo17QtS+sKE3v5eaSCTaCgdFlhgiDItv/zFfY8Y1hiPj2zuy3COrocNYYSCRpSzpyEdvRgOnjOkQjEQU26HRlwgiER+qfF3/Y4iW35RFTwz3AdLoH3sACbtyMIGkoE7qRJ50V9IKxxPvCYJnPtixcpy550pI1FCzhGj7LG+buEoacTWsebaJPMOrvBhRhrlTCImwpzok3RtvvLG64IILDiAkSRj4v7A9ttM+xHbFsbdNpNH/qFNyJ1/i5TdlrINnkN9LTSQS/y1qyVLy0AgJDR5l4jWuPJR8NLx6C5SLhlGYRlmuGMRIdBo+SSYaO/Mw1LZNT6YV+br+00Y9N9KdG9OIW4ZxYS8l99TtkXP22/ppSyRQrsgAxo40rtYXn5OQeCTt+FzUKSnaBusj3Xbafl8IiBDg3d16663FA8c7/OSTT/5tjG0j94ZY/U/YH/8LttNxkyDNp7xjbz98bqbZD59DHHefif20L9br+CUSicSf4aDIkitGR89CAxbL+ZsyGmYNn1eMlYbcNOuQXCUA8tHVTCAawUgYGsxIVuptK/n/1H/zuaqfMpZTr16bfYz1On7qaB4XymnYTZMYlFeHxNU81sibFsurP/aruf3WefvttzfmeQn1spCJ+egoRz16b3h6zQRFvTF6EMc3jqtEKmxLbHtM40pd1El9ysd6Yt+bxyKRSCT+DLVkGQ26RlTDHUkw/o6Gyjd9fzcb6IPRr7GjLEZXw2q9iUQikUj8laglS8DbOlc9Aj0yvZW4/UDPDFKjrHNlLh5xXkkPqE4/V7wyyqrXOSfrSCQSiUTir0QtWcawHlsl2D/IPRvNWY3JFgZDYi6Mkej0Is0zPMvqx/vuu69sL6jTzzcMkaMtyKq3OayWSCQSicRfhVqyjAt22A7Acn+Iir1rbGPgM1uGSONcILKGTwHp7Mdja4NbBjiFpk4/R7XFxR/kueJUzzSRSCQSib8StWSp1wdRsZGcPWzc4x2yyIPzRfUgDZ/y2/Cr84qkswfPTe2Qoh8u/jP9nB8rCVMOvXGBSHN7E4lEIpFoa9SSpYQEWfmJJ84+5YQZN+RDYGwIZwM6p7YYHoXkOI6M8Cr3N910U5m7PPfccwsR4lnW6cezdN7SFZVc4xaCRCKRSCT+StSSpYDsOF6M80AhLM49xVPkODHIku8V4i36JRHAtgJIkY9A89utFxdeeGGDLOv0czybZSDI6LFmGDaRSCQShwO1ZAkp6f25sCbeAxf04EXiGSrHUW14h5zwEkOmHLIuWdbpJx/9XAm/xg3lGYZNJBKJxOFALVnWwQU9kBkf9OU8Uw/WJizLWaLmS358z5IzY5999tkiHxf5oBOijAuFEolEIpH4O9EyWUJohEb1BCHBDRs2lK9JsFhn3rx5jUU/hmfxNMljgY9eoqe9uE1Evc31JRKJRCJxuNEyWUJ0hEZdbMOCH45E83NRfImCQwTiIQV4lmwLye8NJhKJROJ/AS2TpfOWLrYZN25cWegD+AQV6RAlJIhH6fcg8SyZ48zvDSYSiUTin46WyVJCk+y4hwiZu+Q7hpH8xowZ0/jGZX5vMJFIJBL/K2iZLD0wwDlL7k13QQ/wqx/xHFjnMiVa4Bcr0rNMJBKJxD8FLZOl3iCE53cDDafG+0im8UQe8vN7g4lEIpH4J6NlsjRcCslxNXTqPCZwAY/epR6lYVvnPeOCHom0ub5EIpFIJA43aslSz1DykgTJMw2ijHOMeo+xnIQYPUy9SfVap56opCrhkkc5Sdc6LBt1WE+r8nX95xr7T55bXihPGV8WuPq7uU7ndj33VjgGjl+sv3mc/G15+9t8H/XFfsUQeuwf4BCJOC6xjYlEIvH/HbVkiWH0Kx8Sh+kaTYw8Z7fy232ShlY1yMDDB5SRsDp06NAw2G4xIU9DThn0mx4JxTZoxD1Sz2ur8nX9t45IkoaRqZO6kaHvztNKmJT1RUIipS7zkEMHspFcm0nXcTSNcvEZkG7743NQNhKsfQE+C5BkmUgk2jNqyVJy0YBjQAcPHlzNnj27GjhwYMN4kt+rV69q/vz55XxYvkPJHkuMMoend+7cuVq0aFH10EMPlTILFy4s92DIkCENkuUQ9eZwrfVThqPy0M2BBqyuRSaSmHokibaU/6P+WzYSZ3w5kMD00saPH18tWbKknIPLNhtlrf/ss88u47N06dJymDyykhM6Ro4cWS1btqx69dVXi7xkK2HyDB588MFShsPtfY4SuM/U8bXd6jfP9ooky0Qi0Z5RS5YaU4wnxnv79u1lywdbQF588cWGgeXKQQOcDQvYEoKBXblyZfGO+OQW6ciSztYRv2sJiVIXeiQY7k3TOPNBaA48YOsJV9ugF2h5vSgNfyvydf2XdCLRxN+SLlcOYWBLDWPDWNEOiFOSnTp1atHL+NA+xmbPnj1Vx44dSxuRR8Yy5PuZM+QHDBhQ0vh6C2XYwsORgtQN4dOOGAWIbYuEKVH6ggCSLBOJRHvGQZGlXg+HDGCIly9fXv3222/lIHQMquRCOoTEPV8h2bt3bzHeF198cSPUKqFgkPlwNPl4Uxhx0tSloaasntnWrVsL0UC8/Ob7l5BKz549G4RhuyW9VuXr+q8MZWLYkt8xTIp3TV/37dtXde/eveShz1OOKMPHrzlPFy+cel9++eVCeJMnT666du1a2s6Ykg/4kDbtYPwgwM2bNxeSvOqqqwq5UhZyJR99jqnPTKLk3nGnDz4n+w2SLBOJRHtGLVkyh4aB5H7YsGHFyyGUiZFfvHhxMcqUwcDG+T5k+DQX3iThQsObkggyeFkYfImSdO6bDTnp6IU4KI9+CEEP64EHHjiA6PSaJIVW5Ov6b38pT7n+/fsXwqNv/fr1KzrANddcU+rDkzRt2rRpJW3BggVlfCDi3bt3N3TOmDGjeKAc7nD11VeXshwjKFkhD4EiTxpjzQsBeYMGDSptBIRlaSvkfNttt5U+oT+GuyV2510lVpFkmUgk2jNqyZIDAiQbfmMoe/fuXTwWwpCmUyYaUQzx+++/XzyfLl26NLw8vbW77767GODp06eXNOcFJR7Dhugn/6yzziqGn7k6ykEqn376adHP/JxErYdkfa3K1/Vfkiede0jRECn39pcj/Qyb6rFBdhA4BHrEEUdUq1atKr8hP7xJQrAQIF4k5I5e6kQf7WIM0Ulajx49yv2KFSuK7s8++6zIk0b/CPH6cW28acpx/CBlDbvaR18OvIIky0Qi0Z5RS5YYUEnLa9++fYsR5nuVkoSGVUM6adKkYpgx1MrpfXHdsWNHIQY9GMhVwqI8nhbl+E06ZIPBfvzxx4unhG4+Ls2V4/JsL/ogWld8toV8Xf9tNyAMTagVQrrssstKf9GJPsOwhF35zfwnbVq7dm0pQ6gWkqNNeoUjRowodUCY/IbkCckCztZFfs2aNcXzZDyffPLJ4imjgwPr8UY3btzY8BrRt27duuL5oo/nwLNyLtOFQHr2jkuSZSKRaM+oJUsQDSfGsk+fPsWzYsFJ9AYlTIhp//79xRA7B6aHBTDiGGpWzZoHUWCs+R3DgxIWK08hA7wvQo/PPPNMqQvPkDTnC2M72kK+rv+kGTo2HznDmpFkCYVCOrQDEoOwCLMyB4rstm3bSj7e58yZM4vnyzhBwOhjjpTfynMFhGZZ3IPs6tWrS/94KaBOykPGttNngD5I1kVWth8SN0SrxwmSLBOJRHtGLVnqGQEMKvNdzNlh5GMYUmLAW4MEWDxD6FNZ8jXIkBPyEBiGF0+OfM+NZfuI3o2yGO/ff/+9GHYWrpDv3CGhVeSoX7Lj3ra3Il/Xf9Jov2TLlfbHcG4kqLFjx5b+45U6j8n2GULVENL69euLHuphIRJkCMlKUGwHIYQKcbKFhZW5eMqU557ykKxzq+hnmwpjycsIc6oQKvOqvNDgqfLlF9pGHbQXsnTc/B8kWSYSifaMWrLE4OtpcMVYOmeHwbcc6RhniJJQI/ek6y1KFgBDvWvXroZ+iQmDjkfkwhv3MZqHHOmEHEmbNWtWCTdOmTKl0Q5CkHpfeFutytf1n3y3uwC8TsKrH3/8cblHJ302n98QEnoee+yxood9pizIod9vvfVWoz76Tz7fCHVRjuFh5CFR2oonT3leAiBMPrxNXc4L07/Ro0eX1bZu7SEUe8UVVxywF9RwMm3keXkPkiwTiUR7Ri1ZAr0qSMLvUWLEN23aVAhn6NChxZgbFsSIU27OnDnV3Llzi7eJIWbebcKECcUrgxQlEL1IjPMTTzxRdGD08ZyoHwMNGeABkgdJsTLVvYi0j3LooG4/AYbn1hbyf9Z/DiegnB4o3qB7IbmXhNDNIhvGg/2ahIEZh507dzbIERmIjAU+lGHlLu1gfBkjSI/6hw8fXuYmCbfiGeoR+sFt+kD/0EUZ2sDc8UcffVSeCeNsn/WAoxcpGcaTjpIsE4lEe0YtWWIcDTVOnDixGGPnuZjvw5NkAUmnTp0ai0YgActBHGyBUBcrZMkj7IhXIxFJnIQ2lccD1CtDlnnNLVu2FCIlHzKAFDD2lIGwIVsMu55pq/J1/eeK5yfpQPDkk4e8XhvAk1SeEChbOdgDKVFxOg/kSf8B4wmx60k++uijjbEBeOfu0YRsaT8ES9vJhyjRaVg1eosevSfRcmV84vyzYXGQZJlIJNozDoosMZoYW+6jBwI0vs3hSIy3JIRsDLVqcDHMyLqYBHm9Gb1NidR6SYdgJKLYDo2+RBCJ+FDl6/ofQ7T8pix6DNkK0ugfx9ERduVgAupCVp3UiTzprqQVjicHKEDwzAc7Vo4z91y7devWCDVLiLbP8raJq15mXA1rnjJJlolEoj2jliwlDw2v4Hc00F7jlgvJR8OLIZa8NLiSa0zTSEev0HTKSDKR7MzDO7Jt7tVsRb6u/4ZZfSGgrF5cLMO4sJeSe+r2yDn7HUkoEihXPVPGjjSu1hefk5AgJe34XNQpKdoG6yPddpoGkiwTiUR7xkGRJVcMsAtAMJjRkAJ/x0UoeixeMcoactOsQ3KVACShZgKRfCJhSDiRrNTbVvL/qf/mc1V/JFT16rXZx1iv46eO5nGhnERnWgytWt76YzvIt7+mxfLqj/2K7bdskmUikWjPqCXLRCKRSCTaO5IsE4lEIpGoQZJlIpFIJBI1SLJMJBKJRKIGSZaJRCKRSNQgyTKRSCQSiRokWSYSiUQiUYMky0QikUgkapBkmUgkEolEDZIsE4lEIpGoQZJlIpFIJBI1SLJMJBKJRKIGSZaJRCKRSNQgyTKRSCQSiRokWSYSiUQiUYP/A1tJ6NZJlb+yAAAAAElFTkSuQmCC"},45721:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/refresh_upstream-82a5f1f46bc2fe8d18b60ccda42a353f.png"},45866:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/zookeeper-5026489bf11226d5d66b3c393eada3fc.png"}}]);