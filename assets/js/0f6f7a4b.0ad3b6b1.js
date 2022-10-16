"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[49841],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(n),m=a,d=g["".concat(l,".").concat(m)]||g[m]||p[m]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},83715:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={description:"Zookeeper",title:"Zookeeper Example"},o=void 0,s={unversionedId:"zookeeper",id:"zookeeper",isDocsHomePage:!1,title:"Zookeeper Example",description:"Zookeeper",source:"@site/shenyuClientGolang/zookeeper.md",sourceDirName:".",slug:"/zookeeper",permalink:"/shenyuClientGolang/zookeeper",version:"current",lastUpdatedBy:"Bowen Li",lastUpdatedAt:1665884933,formattedLastUpdatedAt:"10/16/2022",frontMatter:{description:"Zookeeper",title:"Zookeeper Example"},sidebar:"community",previous:{title:"Nacos Example",permalink:"/shenyuClientGolang/nacos"}},l=[{value:"The Zookeeper type Register",id:"the-zookeeper-type-register",children:[]},{value:"Entire Success log",id:"entire-success-log",children:[]}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"the-zookeeper-type-register"},"The Zookeeper type Register"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.Fist make sure your Zookeeper env is correct,the set this necessary param.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'    //Create ShenYuZkClient  start\n    zcp := &zk_client.ZkClientParam{\n    ZkServers: []string{"127.0.0.1:2181"}, //require user provide\n    ZkRoot:    "/api",                     //require user provide\n    }\n\n    sdkClient := shenyu_sdk_client.GetFactoryClient(constants.ZOOKEEPER_CLIENT)\n    client, createResult, err := sdkClient.NewClient(zcp)\n\n    if !createResult && err != nil {\n    logger.Fatal("Create ShenYuZkClient error : %v", err)\n    }\n\n    zc := client.(*zk_client.ShenYuZkClient)\n    defer zc.Close()\n    //Create ShenYuZkClient end\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. Prepare your service metaData to register")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'//metaData is necessary param, this will be register to shenyu gateway to use\n    metaData1 := &model.MetaDataRegister{\n        AppName: "testMetaDataRegister1", //require user provide\n        Path:    "your/path1",            //require user provide\n        Enabled: true,                    //require user provide\n        Host:    "127.0.0.1",             //require user provide\n        Port:    "8080",                  //require user provide\n    }\n\n    metaData2 := &model.MetaDataRegister{\n        AppName: "testMetaDataRegister2", //require user provide\n        Path:    "your/path2",            //require user provide\n        Enabled: true,                    //require user provide\n        Host:    "127.0.0.1",             //require user provide\n        Port:    "8181",                  //require user provide\n    }\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3.use client to invoke RegisterServiceInstance")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'   //register multiple metaData\n    registerResult1, err := zc.RegisterServiceInstance(metaData1)\n        if !registerResult1 && err != nil {\n        logger.Fatal("Register zk Instance error : %v", err)\n    }\n\n    registerResult2, err := zc.RegisterServiceInstance(metaData2)\n        if !registerResult2 && err != nil {\n        logger.Fatal("Register zk Instance error : %v", err)\n    }\n    //do your logic\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4.use client to invoke DeregisterServiceInstance")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"    //your can chose to invoke,not require\n    deRegisterResult1, err := zc.DeregisterServiceInstance(metaData1)\n        if err != nil {\n        panic(err)\n        }\n\n    deRegisterResult2, err := zc.DeregisterServiceInstance(metaData2)\n        if err != nil {\n        panic(err)\n        }\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"5.use client to GetServiceInstanceInfo")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'    //GetServiceInstanceInfo start\n    instanceDetail, err := zc.GetServiceInstanceInfo(metaData1)\n        nodes1, ok := instanceDetail.([]*model.MetaDataRegister)\n        if !ok {\n        logger.Fatal("get zk client metaData error %v:", err)\n     }\n    \n    //range nodes\n    for index, node := range nodes1 {\n        nodeJson, err := json.Marshal(node)\n        if err == nil {\n        logger.Info("GetNodesInfo ,success Index", index, string(nodeJson))\n        }\n    }\n    \n    instanceDetail2, err := zc.GetServiceInstanceInfo(metaData2)\n        nodes2, ok := instanceDetail2.([]*model.MetaDataRegister)\n        if !ok {\n            logger.Fatal("get zk client metaData error %v:", err)\n    }\n    //GetServiceInstanceInfo end\n\n')),(0,a.kt)("h2",{id:"entire-success-log"},"Entire Success log"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'2022-07-13 16:09:31 [INFO] [github.com/shenyu-client-golang/example/zk_client/main.go:105] GetNodesInfo ,success Index 0 {"appName":"testMetaDataRegister1","path":"your/path1","contextPath":"","ruleName":"","rpcType":"","enabled":true,"host":"127.0.0.1","port":"8080","pluginNames":null,"registerMetaData":false,"timeMillis":0}\n2022-07-13 16:09:31 [INFO] [github.com/shenyu-client-golang/example/zk_client/main.go:119] GetNodesInfo ,success Index 0 {"appName":"testMetaDataRegister2","path":"your/path2","contextPath":"","ruleName":"","rpcType":"","enabled":true,"host":"127.0.0.1","port":"8181","pluginNames":null,"registerMetaData":false,"timeMillis":0}\n2022-07-13 16:09:31 [INFO] [github.com/shenyu-client-golang/example/zk_client/main.go:132] GetNodesInfo ,success Index 0 {"appName":"testMetaDataRegister3","path":"your/path3","contextPath":"","ruleName":"","rpcType":"","enabled":true,"host":"127.0.0.1","port":"8282","pluginNames":null,"registerMetaData":false,"timeMillis":0}\n2022-07-13 16:09:31 [INFO] [github.com/shenyu-client-golang/example/zk_client/main.go:139] > DeregisterServiceInstance start\n2022-07-13 16:09:31 [INFO] [github.com/shenyu-client-golang/clients/zk_client/zk_client.go:213] ensureName check, path is -> /api/testMetaDataRegister1\n2022-07-13 16:09:31 [INFO] [github.com/shenyu-client-golang/clients/zk_client/zk_client.go:215] ensureName check result is -> true\n2022-07-13 16:09:31 [INFO] [github.com/shenyu-client-golang/clients/zk_client/zk_client.go:213] ensureName check, path is -> /api/testMetaDataRegister2\n2022-07-13 16:09:31 [INFO] [github.com/shenyu-client-golang/clients/zk_client/zk_client.go:215] ensureName check result is -> true\n2022-07-13 16:09:31 [INFO] [github.com/shenyu-client-golang/clients/zk_client/zk_client.go:213] ensureName check, path is -> /api/testMetaDataRegister3\n2022-07-13 16:09:31 [INFO] [github.com/shenyu-client-golang/clients/zk_client/zk_client.go:215] ensureName check result is -> true\n2022-07-13 16:09:31 [INFO] [github.com/shenyu-client-golang/example/zk_client/main.go:156] DeregisterServiceInstance success !\n')))}u.isMDXComponent=!0}}]);