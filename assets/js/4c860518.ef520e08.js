"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[27294],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>y});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=l(t),h=i,y=u["".concat(c,".").concat(h)]||u[h]||p[h]||r;return t?a.createElement(y,s(s({ref:n},d),{},{components:t})):a.createElement(y,s({ref:n},d))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=h;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},33365:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=t(87462),i=(t(67294),t(3905));const r={title:"Data Synchronization Config",keywords:["Data Synchronization"],description:"use different data-sync strategy"},s=void 0,o={unversionedId:"user-guide/use-data-sync",id:"version-2.4.1/user-guide/use-data-sync",isDocsHomePage:!1,title:"Data Synchronization Config",description:"use different data-sync strategy",source:"@site/versioned_docs/version-2.4.1/user-guide/use-data-sync.md",sourceDirName:"user-guide",slug:"/user-guide/use-data-sync",permalink:"/docs/2.4.1/user-guide/use-data-sync",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.1/user-guide/use-data-sync.md",version:"2.4.1",frontMatter:{title:"Data Synchronization Config",keywords:["Data Synchronization"],description:"use different data-sync strategy"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"Tars Proxy",permalink:"/docs/2.4.1/user-guide/tars-proxy"},next:{title:"ContextPath Plugin",permalink:"/docs/2.4.1/plugin-center/http-handle/context-path-plugin"}},c=[{value:"WebSocket Synchronization Config\uff08default strategy, recommend\uff09",id:"websocket-synchronization-configdefault-strategy-recommend",children:[]},{value:"Zookeeper Synchronization Config",id:"zookeeper-synchronization-config",children:[]},{value:"HTTP Long Polling Synchronization Config",id:"http-long-polling-synchronization-config",children:[]},{value:"Nacos Synchronization Config",id:"nacos-synchronization-config",children:[]},{value:"Etcd Synchronization Config",id:"etcd-synchronization-config",children:[]},{value:"Consul Synchronization Config",id:"consul-synchronization-config",children:[]}],l={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document focuses on how to use different data synchronization strategies. Data synchronization refers to the strategy used to synchronize data to ShenYu gateway after shenyu-admin background operation data. ShenYu gateway currently supports ZooKeeper, WebSocket, HTTP Long Polling, Nacos, Etcd and Consul for data synchronization."),(0,i.kt)("img",{src:"/img/shenyu/dataSync/data-sync-config-dir-en.png",width:"70%",height:"60%"}),(0,i.kt)("p",null,"For details about the data synchronization principles, see ",(0,i.kt)("a",{parentName:"p",href:"../design/data-sync"},"Data Synchronization Design")," in the design document."),(0,i.kt)("h3",{id:"websocket-synchronization-configdefault-strategy-recommend"},"WebSocket Synchronization Config\uff08default strategy, recommend\uff09"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway config"),(0,i.kt)("p",{parentName:"li"},"Add these dependencies in ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml"),"\uff1a"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"    \x3c!-- apache shenyu data sync start use websocket--\x3e\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-spring-boot-starter-sync-data-websocket</artifactId>\n        <version>${project.version}</version>\n    </dependency>\n")),(0,i.kt)("img",{src:"/img/shenyu/dataSync/shenyu-data-sync-websocket-pom.png",width:"80%",height:"70%"}),(0,i.kt)("p",null,"Add these config values in  yaml file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  sync:\n    websocket :\n      urls: ws://localhost:9095/websocket\n      #urls: address of shenyu-admin\uff0cmulti-address will be separated with (,).\n")),(0,i.kt)("img",{src:"/img/shenyu/dataSync/shenyu-data-sync-websocket-yml.png",width:"80%",height:"70%"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," config"),(0,i.kt)("p",{parentName:"li"},"Add these config values in  yaml file:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"shenyu:\n  sync:\n    websocket:\n      enabled: true\n")),(0,i.kt)("img",{src:"/img/shenyu/dataSync/shenyu-data-sync-websocket-admin-yml.png",width:"80%",height:"70%"}),(0,i.kt)("p",null,"After the connection is established, the data will be fully obtained once, and the subsequent data will be updated and added increments, with good performance. It also supports disconnection (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"30")," seconds). This mode is recommended for data synchronization and is the default data synchronization strategy of ShenYu."),(0,i.kt)("h3",{id:"zookeeper-synchronization-config"},"Zookeeper Synchronization Config"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway config"),(0,i.kt)("p",{parentName:"li"}," Add these dependencies in ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml"),"\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"       \x3c!-- apache shenyu data sync start use zookeeper--\x3e\n       <dependency>\n           <groupId>org.apache.shenyu</groupId>\n           <artifactId>shenyu-spring-boot-starter-sync-data-zookeeper</artifactId>\n           <version>${project.version}</version>\n       </dependency>\n")),(0,i.kt)("img",{src:"/img/shenyu/dataSync/shenyu-data-sync-zk-pom.png",width:"80%",height:"70%"}))),(0,i.kt)("p",null,"Add these config values in  yaml file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  sync:\n    zookeeper:\n      url: localhost:2181\n       #url: config with your zk address, used by the cluster environment, separated with (,).\n      sessionTimeout: 5000\n      connectionTimeout: 2000\n")),(0,i.kt)("img",{src:"/img/shenyu/dataSync/shenyu-data-sync-zk-yml.png",width:"80%",height:"70%"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," config")),(0,i.kt)("p",null,"Add these config values in  yaml file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  sync:\n    zookeeper:\n      url: localhost:2181\n       #url: config with your zk address, used by the cluster environment, separated with (,).\n      sessionTimeout: 5000\n      connectionTimeout: 2000\n")),(0,i.kt)("img",{src:"/img/shenyu/dataSync/shenyu-data-sync-admin-zk-yml.png",width:"80%",height:"70%"}),(0,i.kt)("p",null,"It is a good idea to use ZooKeeper synchronization mechanism with high timeliness, but we also have to deal with the unstable environment of ZK, cluster brain splitting and other problems."),(0,i.kt)("h3",{id:"http-long-polling-synchronization-config"},"HTTP Long Polling Synchronization Config"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," gateway config")),(0,i.kt)("p",null,"Add these dependencies in ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu data sync start use http--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-sync-data-http</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,i.kt)("img",{src:"/img/shenyu/dataSync/shenyu-data-sync-http-pom.png",width:"80%",height:"70%"}),(0,i.kt)("p",null,"Add these config values in  yaml file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n    sync:\n        http:\n             url: http://localhost:9095\n        #url: config your shenyu-admin  ip and port\uff0ccluster IP by split by (,)\n")),(0,i.kt)("img",{src:"/img/shenyu/dataSync/shenyu-data-sync-http-yml.png",width:"80%",height:"70%"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," config"),(0,i.kt)("p",{parentName:"li"},"Add these config values in  yaml file:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  sync:\n    http:\n      enabled: true\n")),(0,i.kt)("img",{src:"/img/shenyu/dataSync/shenyu-data-sync-admin-http-yml.png",width:"80%",height:"70%"}),(0,i.kt)("p",null,"HTTP long-polling makes the gateway lightweight, but less time-sensitive. It pulls according to the group key, if the data is too large, it will have some influences, a small change under a group will pull the entire group."),(0,i.kt)("h3",{id:"nacos-synchronization-config"},"Nacos Synchronization Config"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," gateway config")),(0,i.kt)("p",null,"Add these dependencies in ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu data sync start use nacos--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-sync-data-nacos</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,i.kt)("img",{src:"/img/shenyu/dataSync/shenyu-data-sync-nacos-pom.png",width:"80%",height:"70%"}),(0,i.kt)("p",null,"Add these config values in  yaml file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  sync:\n    nacos:\n      url: localhost:8848\n         # url: config with your nacos address, please use (,) to split your cluster environment.\n      namespace: 1c10d748-af86-43b9-8265-75f487d20c6c\n      username:\n      password:\n      acm:\n        enabled: false\n        endpoint: acm.aliyun.com\n        namespace:\n        accessKey:\n        secretKey:\n     # other configure\uff0cplease refer to the naocs website.\n")),(0,i.kt)("img",{src:"/img/shenyu/dataSync/shenyu-data-sync-nacos-yml.png",width:"80%",height:"70%"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," config"),(0,i.kt)("p",{parentName:"li"},"Add these config values in  yaml file:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  sync:\n      nacos:\n        url: localhost:8848\n        namespace: 1c10d748-af86-43b9-8265-75f487d20c6c\n        username:\n        password:\n        acm:\n          enabled: false\n          endpoint: acm.aliyun.com\n          namespace:\n          accessKey:\n          secretKey:\n        # url: config with your nacos address, pls use (,) to split your cluster environment.\n        # other configure\uff0cpls refer to the naocs website.\n")),(0,i.kt)("img",{src:"/img/shenyu/dataSync/shenyu-data-sync-admin-nacos-yml.png",width:"80%",height:"70%"}),(0,i.kt)("h3",{id:"etcd-synchronization-config"},"Etcd Synchronization Config"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway config"),(0,i.kt)("p",{parentName:"li"},"Add these dependencies in ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml"),"\uff1a"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu data sync start use etcd--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-sync-data-etcd</artifactId>\n            <version>${project.version}</version>\n            <exclusions>\n                <exclusion>\n                    <groupId>io.grpc</groupId>\n                    <artifactId>grpc-grpclb</artifactId>\n                </exclusion>\n                <exclusion>\n                    <groupId>io.grpc</groupId>\n                    <artifactId>grpc-netty</artifactId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n")),(0,i.kt)("img",{src:"/img/shenyu/dataSync/shenyu-data-sync-etcd-pom.png",width:"80%",height:"70%"}),(0,i.kt)("p",null,"Add these config values in  yaml file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n    sync:\n       etcd:\n         url: http://localhost:2379\n       #url: config with your etcd address, used by the cluster environment, separated with (,).\n")),(0,i.kt)("img",{src:"/img/shenyu/dataSync/shenyu-data-sync-etcd-yml.png",width:"80%",height:"70%"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," config"),(0,i.kt)("p",{parentName:"li"},"Add these config values in  yaml file:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  sync:\n    etcd:\n      url: http://localhost:2379\n       #url: config with your etcd address, used by the cluster environment, separated with (,).\n")),(0,i.kt)("img",{src:"/img/shenyu/dataSync/shenyu-data-sync-admin-etcd-yml.png",width:"80%",height:"70%"}),(0,i.kt)("h3",{id:"consul-synchronization-config"},"Consul Synchronization Config"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," gateway config")),(0,i.kt)("p",null,"Add these dependencies in ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- apache shenyu data sync start use consul--\x3e\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-sync-data-consul</artifactId>\n  <version>${project.version}</version>\n</dependency>\n")),(0,i.kt)("img",{src:"/img/shenyu/dataSync/shenyu_consul_sync_gateway.jpg",width:"80%",height:"70%"}),(0,i.kt)("p",null,"Add these config values in  yaml file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n    sync:\n      consul:\n                url: http://localhost:8500\n        waitTime: 1000  # query wait time\n        watchDelay: 1000    # Data synchronization interval                             \n")),(0,i.kt)("img",{src:"/img/shenyu/dataSync/shenyu_consul_gateway_sync_config.jpg",width:"80%",height:"70%"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," config"),(0,i.kt)("p",{parentName:"li"},"Add these config values in  yaml file:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  sync:\n    consul:\n      url: http://localhost:8500\n")),(0,i.kt)("img",{src:"/img/shenyu/dataSync/shenyu_consul_admin_sync_config.jpg",width:"80%",height:"70%"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"After the data synchronization strategy of Apache ShenYu gateway and shenyu-admin is reconfigured, the microservice needs to be restarted."),(0,i.kt)("p",{parentName:"blockquote"},"the Apache ShenYu gateway and shenyu-admin must use the same synchronization strategy.")))}u.isMDXComponent=!0}}]);