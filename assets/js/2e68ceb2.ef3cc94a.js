"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[44109],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=i,y=d["".concat(c,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},38277:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={title:"Register Center Instance Config",keywords:["register center"],description:"Register Instance"},a=void 0,s={unversionedId:"user-guide/register-center-instance",id:"version-2.4.2/user-guide/register-center-instance",isDocsHomePage:!1,title:"Register Center Instance Config",description:"Register Instance",source:"@site/versioned_docs/version-2.4.2/user-guide/register-center-instance.md",sourceDirName:"user-guide",slug:"/user-guide/register-center-instance",permalink:"/docs/2.4.2/user-guide/register-center-instance",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.2/user-guide/register-center-instance.md",version:"2.4.2",frontMatter:{title:"Register Center Instance Config",keywords:["register center"],description:"Register Instance"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"Application Client Access Config",permalink:"/docs/2.4.2/user-guide/register-center-access"},next:{title:"Sofa Proxy",permalink:"/docs/2.4.2/user-guide/sofa-rpc-proxy"}},c=[{value:"Add Maven dependency",id:"add-maven-dependency",children:[]},{value:"Use zookeeper",id:"use-zookeeper",children:[]},{value:"Use etcd",id:"use-etcd",children:[]}],l={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document will introduce how to register the gateway instance to the registry. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway currently supports registration to ",(0,i.kt)("inlineCode",{parentName:"p"},"zookeeper")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"etcd"),"."),(0,i.kt)("h3",{id:"add-maven-dependency"},"Add Maven dependency"),(0,i.kt)("p",null,"First, introduce the following dependencies in the gateway's ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--shenyu instance start--\x3e\n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-instance</artifactId>\n    <version>${project.version}</version>\n</dependency>\n\x3c!--shenyu instance end--\x3e\n")),(0,i.kt)("h3",{id:"use-zookeeper"},"Use zookeeper"),(0,i.kt)("p",null,"Add the following configuration to the gateway's ",(0,i.kt)("inlineCode",{parentName:"p"},"yml")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"instance:\n    enabled: true\n    registerType: zookeeper\n    serverLists: localhost:2181 #config with your zk address, used by the cluster environment, separated with (,).\n    props:\n      sessionTimeout: 3000 #Optional, default 3000\n      connectionTimeout: 3000 #Optional, default 3000\n")),(0,i.kt)("h3",{id:"use-etcd"},"Use etcd"),(0,i.kt)("p",null,"Add the following configuration to the gateway's ",(0,i.kt)("inlineCode",{parentName:"p"},"yml")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"instance:\n    enabled: true\n    registerType: etcd\n    serverLists: http://localhost:2379 #config with your etcd address, used by the cluster environment, separated with (,).\n    props:\n      etcdTimeout: 3000 #Optional, default 3000\n      etcdTTL: 5 #Optional, default 5\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"After the configuration is complete, start the gateway and it will successfully register to the corresponding registration center.")))}d.isMDXComponent=!0}}]);