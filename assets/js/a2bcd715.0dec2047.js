"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[65164],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19519:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Quick start with Motan",description:"Motan quick start"},i=void 0,s={unversionedId:"quick-start/quick-start-motan",id:"version-2.5.0/quick-start/quick-start-motan",isDocsHomePage:!1,title:"Quick start with Motan",description:"Motan quick start",source:"@site/versioned_docs/version-2.5.0/quick-start/quick-start-motan.md",sourceDirName:"quick-start",slug:"/quick-start/quick-start-motan",permalink:"/docs/quick-start/quick-start-motan",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.0/quick-start/quick-start-motan.md",version:"2.5.0",frontMatter:{title:"Quick start with Motan",description:"Motan quick start"},sidebar:"version-2.5.0/tutorialSidebar",previous:{title:"Quick start with Http",permalink:"/docs/quick-start/quick-start-http"},next:{title:"Quick start with Sofa",permalink:"/docs/quick-start/quick-start-sofa"}},p=[{value:"Environment to prepare",id:"environment-to-prepare",children:[]},{value:"Run the shenyu-examples-motan project",id:"run-the-shenyu-examples-motan-project",children:[]},{value:"Test",id:"test",children:[]}],c={toc:p},l="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document introduces how to quickly access the Apache ShenYu gateway using Motan RPC. You can get the code example of this document by clicking ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/v2.5.0/shenyu-examples/shenyu-examples-motan"},"here"),"."),(0,r.kt)("h2",{id:"environment-to-prepare"},"Environment to prepare"),(0,r.kt)("p",null,"Please refer to the deployment to select a way to start shenyu-admin. For example, start the Apache ShenYu gateway management system through ",(0,r.kt)("a",{parentName:"p",href:"../deployment/deployment-local"},"local deployment")," ."),(0,r.kt)("p",null,"After successful startup, you need to open the Sofa plugin on in the BasicConfig ",(0,r.kt)("inlineCode",{parentName:"p"},"->")," Plugin."),(0,r.kt)("img",{src:"/img/shenyu/quick-start/motan/motan_open_en.png",width:"60%",height:"50%"}),(0,r.kt)("p",null,"If you are a startup gateway by means of source, can be directly run the ShenyuBootstrapApplication of shenyu-bootstrap module."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Before starting, make sure the gateway has added dependencies.\nStart up zookeeper in local.")),(0,r.kt)("p",null,"Import the gateway proxy plugin for ",(0,r.kt)("inlineCode",{parentName:"p"},"Motan")," and add the following dependencies to the gateway's ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu motan plugin --\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-motan</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n\n        <dependency>\n            <groupId>com.weibo</groupId>\n            <artifactId>motan-core</artifactId>\n            <version>1.1.9</version>\n        </dependency>\n\n        <dependency>\n            <groupId>com.weibo</groupId>\n            <artifactId>motan-registry-zookeeper</artifactId>\n            <version>1.1.9</version>\n        </dependency>\n\n        <dependency>\n            <groupId>com.weibo</groupId>\n            <artifactId>motan-transport-netty4</artifactId>\n            <version>1.1.9</version>\n        </dependency>\n\n        <dependency>\n            <groupId>com.weibo</groupId>\n            <artifactId>motan-springsupport</artifactId>\n            <version>1.1.9</version>\n        </dependency>\n")),(0,r.kt)("h2",{id:"run-the-shenyu-examples-motan-project"},"Run the shenyu-examples-motan project"),(0,r.kt)("p",null,"Download ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/v2.5.0/shenyu-examples/shenyu-examples-motan"},"shenyu-examples-motan")," ."),(0,r.kt)("p",null,"Run main method of ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.examples.motan.service.TestMotanApplication")," to start this project."),(0,r.kt)("p",null,"log info as follows after starting:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'2021-07-18 16:46:25.388  INFO 96 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8081 (http) with context path \'\'\n2021-07-18 16:46:25.393  INFO 96 --- [           main] o.a.s.e.m.service.TestMotanApplication   : Started TestMotanApplication in 3.89 seconds (JVM running for 4.514)\n2021-07-18 16:46:25.396  INFO 96 --- [           main] info                                     : [ZookeeperRegistry] Url (null) will set to available to Registry [zookeeper://localhost:2181/default_rpc/com.weibo.api.motan.registry.RegistryService/1.0/service]\n2021-07-18 16:46:25.399  INFO 96 --- [       Thread-6] o.a.s.c.c.s.ShenyuClientShutdownHook     : hook Thread-0 will sleep 3000ms when it start\n2021-07-18 16:46:25.399  INFO 96 --- [       Thread-6] o.a.s.c.c.s.ShenyuClientShutdownHook     : hook SpringContextShutdownHook will sleep 3000ms when it start\n2021-07-18 16:46:25.445  INFO 96 --- [ntLoopGroup-3-2] info                                     : NettyChannelHandler channelActive: remote=/192.168.1.8:49740 local=/192.168.1.8:8002\n2021-07-18 16:46:25.445  INFO 96 --- [ntLoopGroup-3-1] info                                     : NettyChannelHandler channelActive: remote=/192.168.1.8:49739 local=/192.168.1.8:8002\n2021-07-18 16:46:25.925  INFO 96 --- [or_consumer_-17] o.a.s.r.client.http.utils.RegisterUtils  : motan client register success: {"appName":"motan","contextPath":"/motan","path":"/motan/hello","pathDesc":"","rpcType":"motan","serviceName":"org.apache.shenyu.examples.motan.service.MotanDemoService","methodName":"hello","ruleName":"/motan/hello","parameterTypes":"java.lang.String","rpcExt":"{\\"methodInfo\\":[{\\"methodName\\":\\"hello\\",\\"params\\":[{\\"left\\":\\"java.lang.String\\",\\"right\\":\\"name\\"}]}],\\"group\\":\\"motan-shenyu-rpc\\"}","enabled":true,"host":"192.168.220.1","port":8081,"registerMetaData":false} \n\n')),(0,r.kt)("h2",{id:"test"},"Test"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-examples-motan")," project will automatically register the ",(0,r.kt)("inlineCode",{parentName:"p"},"@ShenyuMotanClient")," annotated interface methods with the gateway and add selectors and rules. If not, you can manually add them."),(0,r.kt)("p",null,"Open PluginList -> rpc proxy -> motan to see the list of plugin rule configurations:"),(0,r.kt)("img",{src:"/img/shenyu/quick-start/motan/motan_service_en.png",width:"60%",height:"50%"}),(0,r.kt)("p",null,"Use PostMan to simulate HTTP to request your Motan service:"),(0,r.kt)("img",{src:"/img/shenyu/plugin/motan/motan_service.png",width:"60%",height:"50%"}))}u.isMDXComponent=!0}}]);