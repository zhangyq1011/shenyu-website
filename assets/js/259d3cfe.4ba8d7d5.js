"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[5566],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(a),u=o,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},60358:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={},l=void 0,i={unversionedId:"2.6.0-release",id:"2.6.0-release",isDocsHomePage:!1,title:"2.6.0-release",description:"2.6.0",source:"@site/event/2.6.0-release.md",sourceDirName:".",slug:"/2.6.0-release",permalink:"/event/2.6.0-release",editUrl:"https://github.com/apache/shenyu-website/edit/main/event/2.6.0-release.md",version:"current",lastUpdatedBy:"nothingimposible",lastUpdatedAt:1703902893,formattedLastUpdatedAt:"12/30/2023",frontMatter:{}},p=[{value:"2.6.0",id:"260",children:[{value:"New Features",id:"new-features",children:[]},{value:"API Changes",id:"api-changes",children:[]},{value:"Enhancement",id:"enhancement",children:[]},{value:"Refactor",id:"refactor",children:[]},{value:"Bug Fix",id:"bug-fix",children:[]}]}],s={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"260"},"2.6.0"),(0,o.kt)("h3",{id:"new-features"},"New Features"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Support shenyu-admin expose prometheus metrics"),(0,o.kt)("li",{parentName:"ol"},"Add shenyu Level-1 cache and Level-2 cache"),(0,o.kt)("li",{parentName:"ol"},"Save extend plugin jar to shenyu admin"),(0,o.kt)("li",{parentName:"ol"},"Support shenyu upload plugin hot load in gateway"),(0,o.kt)("li",{parentName:"ol"},"Support apollo sync data and register data"),(0,o.kt)("li",{parentName:"ol"},"Initializes client information collection"),(0,o.kt)("li",{parentName:"ol"},"Support spring-boot-client auto config in shenyu client"),(0,o.kt)("li",{parentName:"ol"},"Add TCP plugin"),(0,o.kt)("li",{parentName:"ol"},"Super admin forces password change"),(0,o.kt)("li",{parentName:"ol"},"Spring-mvc(boot) client support collect api-meta"),(0,o.kt)("li",{parentName:"ol"},"Add zookeeper discovery sync"),(0,o.kt)("li",{parentName:"ol"},"Initializes Shenyu ingress controller"),(0,o.kt)("li",{parentName:"ol"},"Add discovery upstream and proxy selector proxy"),(0,o.kt)("li",{parentName:"ol"},"Expose shenyu actuator endpoint"),(0,o.kt)("li",{parentName:"ol"},"Add naocs discovery sync"),(0,o.kt)("li",{parentName:"ol"},"Add apollo discovery sync"),(0,o.kt)("li",{parentName:"ol"},"Add HttpLongPolling discovery sync"),(0,o.kt)("li",{parentName:"ol"},"Add consul discovery sync"),(0,o.kt)("li",{parentName:"ol"},"Add huawei cloud lts logging plugin"),(0,o.kt)("li",{parentName:"ol"},"Support openGauss database for shenyu admin"),(0,o.kt)("li",{parentName:"ol"},"Support polaris config sync and register center")),(0,o.kt)("h3",{id:"api-changes"},"API Changes"),(0,o.kt)("h3",{id:"enhancement"},"Enhancement"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add tags for shenyu api doc client"),(0,o.kt)("li",{parentName:"ol"},"Add brpc integrated test"),(0,o.kt)("li",{parentName:"ol"},"Brpc support shared thread pool"),(0,o.kt)("li",{parentName:"ol"},"Add mapType to cryptor request and response plugin"),(0,o.kt)("li",{parentName:"ol"},"Crypto plugin supports multi field names"),(0,o.kt)("li",{parentName:"ol"},"Add p2c loadbalancer"),(0,o.kt)("li",{parentName:"ol"},"Modify plugin jar to Base64-string in plugin data"),(0,o.kt)("li",{parentName:"ol"},"Add shortest response load balancer"),(0,o.kt)("li",{parentName:"ol"},"Add hash load balancer test case"),(0,o.kt)("li",{parentName:"ol"},"Add DetailSerivice test case"),(0,o.kt)("li",{parentName:"ol"},"Tolerant path slash for shenyu"),(0,o.kt)("li",{parentName:"ol"},"Add shenyu-common enums test case"),(0,o.kt)("li",{parentName:"ol"},"Add shenyu-common dto test case"),(0,o.kt)("li",{parentName:"ol"},"Add shenyu-admin model test case"),(0,o.kt)("li",{parentName:"ol"},"Add shenyu match cache test case"),(0,o.kt)("li",{parentName:"ol"},"Support k8s probes"),(0,o.kt)("li",{parentName:"ol"},"Add shenyu-admin service test case"),(0,o.kt)("li",{parentName:"ol"},"Add document json data in api doc"),(0,o.kt)("li",{parentName:"ol"},"The SPEL in the mock plugin is secure by default"),(0,o.kt)("li",{parentName:"ol"},"Add test cases for ShenyuClientApiDocExecutorSubscriber"),(0,o.kt)("li",{parentName:"ol"},"Add test case for shenyu-client-sofa module"),(0,o.kt)("li",{parentName:"ol"},"Add tag relation for shenyu api doc"),(0,o.kt)("li",{parentName:"ol"},"Support shenyu admin, bootstrap service stop script bat in windows"),(0,o.kt)("li",{parentName:"ol"},"Add test case for ShenyuSdkClientFactory"),(0,o.kt)("li",{parentName:"ol"},"Add websocket synchronization method for e2e-springcloud"),(0,o.kt)("li",{parentName:"ol"},"Support divide plugin active offline"),(0,o.kt)("li",{parentName:"ol"},"Add springcloud service instance cache"),(0,o.kt)("li",{parentName:"ol"},"Change password support i18n"),(0,o.kt)("li",{parentName:"ol"},"Add websocket sync for shenyu discovery"),(0,o.kt)("li",{parentName:"ol"},"Update springboot to 2.7.13"),(0,o.kt)("li",{parentName:"ol"},"Add other syn method e2e-spring-cloud"),(0,o.kt)("li",{parentName:"ol"},"Add api doc client generated annotation attribute"),(0,o.kt)("li",{parentName:"ol"},"Update zookeeper client register repository active offline"),(0,o.kt)("li",{parentName:"ol"},"Update apollo client register repository active offline"),(0,o.kt)("li",{parentName:"ol"},"Storage adjustment for swagger type API documents, change from local cache to database"),(0,o.kt)("li",{parentName:"ol"},"Support nacos client offline"),(0,o.kt)("li",{parentName:"ol"},"Add e2e alibaba dubbo test case"),(0,o.kt)("li",{parentName:"ol"},"Add e2e apache dubbo test case"),(0,o.kt)("li",{parentName:"ol"},"Add shenyu-spring-sdk test cases"),(0,o.kt)("li",{parentName:"ol"},"Add e2e sofa test cases"),(0,o.kt)("li",{parentName:"ol"},"Add apollo config sync test case"),(0,o.kt)("li",{parentName:"ol"},"Add database connection pool"),(0,o.kt)("li",{parentName:"ol"},"Add idea icon for shenyu project")),(0,o.kt)("h3",{id:"refactor"},"Refactor"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Optimize shenyu-admin"),(0,o.kt)("li",{parentName:"ol"},"Refactor least active balance algorithm"),(0,o.kt)("li",{parentName:"ol"},"Optimized version-one for sign-plugin"),(0,o.kt)("li",{parentName:"ol"},"Optimize upstream check service"),(0,o.kt)("li",{parentName:"ol"},"Resolve shenyu project global version"),(0,o.kt)("li",{parentName:"ol"},"Refactor ShenyuConsulConfigWatch code"),(0,o.kt)("li",{parentName:"ol"},"Refactor shenyu trie codes"),(0,o.kt)("li",{parentName:"ol"},"Check uri condition of rule when saving"),(0,o.kt)("li",{parentName:"ol"},"Optimize shenyu-client code for shenyu-client-websocket"),(0,o.kt)("li",{parentName:"ol"},"Add license for admin dependency micrometer"),(0,o.kt)("li",{parentName:"ol"},"Update maven-assembly-plugin to 3.5.0"),(0,o.kt)("li",{parentName:"ol"},"Optimize global plugin sorting"),(0,o.kt)("li",{parentName:"ol"},"Use BearerToken replace StatelessToken in shenyu-admin"),(0,o.kt)("li",{parentName:"ol"},"Refactor shenyu-logging module"),(0,o.kt)("li",{parentName:"ol"},"Add validation for api doc"),(0,o.kt)("li",{parentName:"ol"},"Optimize Trie code and improve wildcard * supporting"),(0,o.kt)("li",{parentName:"ol"},"Refactor the custom plugin support hot load"),(0,o.kt)("li",{parentName:"ol"},"Refactor ShenyuWebHandler putPlugin methods"),(0,o.kt)("li",{parentName:"ol"},"Refactor Shenyu webfilter"),(0,o.kt)("li",{parentName:"ol"},"Reactor oauth2 plguin"),(0,o.kt)("li",{parentName:"ol"},"Refactor shenyu selector data continued field"),(0,o.kt)("li",{parentName:"ol"},"Refactor shenyu selector and rule cache"),(0,o.kt)("li",{parentName:"ol"},"Removed unused generics in shenyu client"),(0,o.kt)("li",{parentName:"ol"},"Refactor shenyu-plugin-sentinel plugin"),(0,o.kt)("li",{parentName:"ol"},"Refactor cache and add endpoint to expose cache"),(0,o.kt)("li",{parentName:"ol"},"Refactor checkUserPassword, not print known error log when startup"),(0,o.kt)("li",{parentName:"ol"},"Add some parameters for log"),(0,o.kt)("li",{parentName:"ol"},"Refactor shenyu global exception handler"),(0,o.kt)("li",{parentName:"ol"},"Add shenyu upload plugin integrated test case"),(0,o.kt)("li",{parentName:"ol"},"Optimize some syntactic sugar"),(0,o.kt)("li",{parentName:"ol"},"Change discovery_upstream discovery_handler_id"),(0,o.kt)("li",{parentName:"ol"},"Refactor shenyu global exception handlers"),(0,o.kt)("li",{parentName:"ol"},"Refactor shenyu plugin module"),(0,o.kt)("li",{parentName:"ol"},"Refactor AlibabaDubboConfigCache"),(0,o.kt)("li",{parentName:"ol"},"Remove hutool from dependency"),(0,o.kt)("li",{parentName:"ol"},"Refactor ShenyuClientShutdownHook"),(0,o.kt)("li",{parentName:"ol"},"Extractor add BaseAnnotationApiBeansExtractor"),(0,o.kt)("li",{parentName:"ol"},"Support multi-client registration"),(0,o.kt)("li",{parentName:"ol"},"Refactor shenyu-e2e support shenyu check style"),(0,o.kt)("li",{parentName:"ol"},"Refactor shenyu client register base"),(0,o.kt)("li",{parentName:"ol"},"Add domain test for shenyu divide plugin"),(0,o.kt)("li",{parentName:"ol"},"Update other rpc_ext for the same service"),(0,o.kt)("li",{parentName:"ol"},"Optimize consul connect operation"),(0,o.kt)("li",{parentName:"ol"},"Refactor shenyu e2e springcloud yaml change"),(0,o.kt)("li",{parentName:"ol"},"Add integrated test for k8s ingress controller"),(0,o.kt)("li",{parentName:"ol"},"Split the document field of the apidoc detail interface,and add fields such as requestHeaders and responseParameters"),(0,o.kt)("li",{parentName:"ol"},"Add swagger sample project to test the relevant functionality of the API documentation"),(0,o.kt)("li",{parentName:"ol"},"Optimize the display of form fields in json format"),(0,o.kt)("li",{parentName:"ol"},"Refactor shenyu log observability"),(0,o.kt)("li",{parentName:"ol"},"Add bootstrap start log"),(0,o.kt)("li",{parentName:"ol"},"Refactor api document for swagger"),(0,o.kt)("li",{parentName:"ol"},"Upgrade grpc version to 1.53.0"),(0,o.kt)("li",{parentName:"ol"},"Refactor api meta data process function"),(0,o.kt)("li",{parentName:"ol"},"polish master code and pom")),(0,o.kt)("h3",{id:"bug-fix"},"Bug Fix"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Smart h2 path"),(0,o.kt)("li",{parentName:"ol"},"Fix crypto-response plugin"),(0,o.kt)("li",{parentName:"ol"},"Fix jdk8 Map computeIfAbsent performance bug"),(0,o.kt)("li",{parentName:"ol"},"Fix zombieRemovalTimes code"),(0,o.kt)("li",{parentName:"ol"},"Fix the upgraded sql file"),(0,o.kt)("li",{parentName:"ol"},"Remove detectOfflineLinks tag"),(0,o.kt)("li",{parentName:"ol"},"Ignore flattened-pom"),(0,o.kt)("li",{parentName:"ol"},"Fix LOG invoke method"),(0,o.kt)("li",{parentName:"ol"},"Fix NPE for shenyu-example-springcloud with nacos"),(0,o.kt)("li",{parentName:"ol"},"Fix shenyu-admin names for arguement of type"),(0,o.kt)("li",{parentName:"ol"},"Fix loadbalance spi resource"),(0,o.kt)("li",{parentName:"ol"},"Fix sql script error"),(0,o.kt)("li",{parentName:"ol"},"Fix to 24-hour format and timeZone for jackson"),(0,o.kt)("li",{parentName:"ol"},"Fix JwtUtils error"),(0,o.kt)("li",{parentName:"ol"},"Fix dubbo invoker cache bug"),(0,o.kt)("li",{parentName:"ol"},"Fix missing HOST delete operation"),(0,o.kt)("li",{parentName:"ol"},"Fix SpringMvcClientEventListener test case"),(0,o.kt)("li",{parentName:"ol"},"Fix pass update PENDING_SYNC for zombie"),(0,o.kt)("li",{parentName:"ol"},"Fix Memory leak"),(0,o.kt)("li",{parentName:"ol"},"Fix rule query failed because there are too many rules"),(0,o.kt)("li",{parentName:"ol"},"Fix missing actuator dependency and port error in examples http"),(0,o.kt)("li",{parentName:"ol"},"Fix UpstreamCheckUtils http and https"),(0,o.kt)("li",{parentName:"ol"},"Fix FileFilter make memory leak"),(0,o.kt)("li",{parentName:"ol"},"Fix zookeeper sync error"),(0,o.kt)("li",{parentName:"ol"},"Fix MemorySafeWindowTinyLFUMap memory leak error"),(0,o.kt)("li",{parentName:"ol"},"Fix lack separator of path of ApiDoc"),(0,o.kt)("li",{parentName:"ol"},"Fix NPE for shenyu trie"),(0,o.kt)("li",{parentName:"ol"},"Fix plugin skip error"),(0,o.kt)("li",{parentName:"ol"},"Fix oracle sql error"),(0,o.kt)("li",{parentName:"ol"},"Fix shenyu icon can't load in shenyu admin"),(0,o.kt)("li",{parentName:"ol"},"Fix hystrix fallback bug"),(0,o.kt)("li",{parentName:"ol"},"Fix warm up time for divide and springcloud"),(0,o.kt)("li",{parentName:"ol"},"Fix springcloud service chooser"),(0,o.kt)("li",{parentName:"ol"},"Fix shenyu-spring-boot-starter-plugin-mock add spring.factories"),(0,o.kt)("li",{parentName:"ol"},"Fix shenyu-client-mvc and shenyu-client-springcloud lose ip"),(0,o.kt)("li",{parentName:"ol"},"Fix empty rule data and selector data in cache"),(0,o.kt)("li",{parentName:"ol"},"Fix api document module update api detail error"),(0,o.kt)("li",{parentName:"ol"},"Fix get topic from config in KafkaLogCollectClient"),(0,o.kt)("li",{parentName:"ol"},"Fix logging console thread safety"),(0,o.kt)("li",{parentName:"ol"},"Fix brpc integration testing response size"),(0,o.kt)("li",{parentName:"ol"},"Fix selector update gray remove cache for plugn-dubbo-common"),(0,o.kt)("li",{parentName:"ol"},"Fix shenyu admin menu name bug"),(0,o.kt)("li",{parentName:"ol"},"Fix shenyu admin cannot configure consul port"),(0,o.kt)("li",{parentName:"ol"},"Fix shenyu client metadata and uri cannot sync to admin with apollo"),(0,o.kt)("li",{parentName:"ol"},"Fix PathVariable annotation url cannot match"),(0,o.kt)("li",{parentName:"ol"},"Fix could not update uri in PathPattern mode"),(0,o.kt)("li",{parentName:"ol"},"Fix client shutdown method call twice"),(0,o.kt)("li",{parentName:"ol"},"Fix shenyu mishandle consul configuration"),(0,o.kt)("li",{parentName:"ol"},"Remove unused configuration from Request, modifyResponse plugin"),(0,o.kt)("li",{parentName:"ol"},"Fix http registration metadata"),(0,o.kt)("li",{parentName:"ol"},"Fix websocket lost the user-defined clost status"),(0,o.kt)("li",{parentName:"ol"},"Fix consul register lose the prop of meta-path when special symbol"),(0,o.kt)("li",{parentName:"ol"},"Fix etcd sync error"),(0,o.kt)("li",{parentName:"ol"},"Fix admin sync error"),(0,o.kt)("li",{parentName:"ol"},"Fix shenyu motan plugin execute error")))}m.isMDXComponent=!0}}]);