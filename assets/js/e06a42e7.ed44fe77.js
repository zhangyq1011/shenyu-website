"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[66207],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=u(a),c=r,g=s["".concat(p,".").concat(c)]||s[c]||m[c]||i;return a?n.createElement(g,l(l({ref:t},d),{},{components:a})):n.createElement(g,l({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},43775:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"Dubbo Plugin",keywords:["dubbo"],description:"dubbo plugin"},l=void 0,o={unversionedId:"plugin-center/proxy/dubbo-plugin",id:"version-2.4.2/plugin-center/proxy/dubbo-plugin",isDocsHomePage:!1,title:"Dubbo Plugin",description:"dubbo plugin",source:"@site/versioned_docs/version-2.4.2/plugin-center/proxy/dubbo-plugin.md",sourceDirName:"plugin-center/proxy",slug:"/plugin-center/proxy/dubbo-plugin",permalink:"/docs/2.4.2/plugin-center/proxy/dubbo-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.2/plugin-center/proxy/dubbo-plugin.md",version:"2.4.2",frontMatter:{title:"Dubbo Plugin",keywords:["dubbo"],description:"dubbo plugin"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"Divide Plugin",permalink:"/docs/2.4.2/plugin-center/proxy/divide-plugin"},next:{title:"gRPC Plugin",permalink:"/docs/2.4.2/plugin-center/proxy/grpc-plugin"}},p=[{value:"Explanation",id:"explanation",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Plugin Detail",id:"plugin-detail",children:[]},{value:"Metadata",id:"metadata",children:[]}],u={toc:p},d="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"explanation"},"Explanation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dubbo is a plugin that converts ",(0,r.kt)("inlineCode",{parentName:"li"},"http protocol")," into ",(0,r.kt)("inlineCode",{parentName:"li"},"Dubbo protocol")," and it is also the key for gateway to realize dubbo generic service."),(0,r.kt)("li",{parentName:"ul"},"Dubbo plugin needs to cooperate with metadata to realize dubbo calls."),(0,r.kt)("li",{parentName:"ul"},"Apache Dubbo and Alibaba Dubbo users both use the same plugin.")),(0,r.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add related dependencies and enable plugin, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"../../quick-start/quick-start-dubbo"},"Quick start with Dubbo")," .")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Dubbo")," client access, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"../../user-guide/dubbo-proxy"},"Dubbo Proxy")," .")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set selector and rule, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")," ."))),(0,r.kt)("h2",{id:"plugin-detail"},"Plugin Detail"),(0,r.kt)("p",null,"After the client accesses the ",(0,r.kt)("inlineCode",{parentName:"p"},"ShenYu")," gateway, it will automatically register the selector and rule information. For details about the selector and rule configuration, see ",(0,r.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector and Rule Config")," ."),(0,r.kt)("h4",{id:"selector-handler"},"Selector Handler"),(0,r.kt)("img",{src:"/img/shenyu/plugin/dubbo/selector_en_new.png",width:"80%",height:"80%"}),(0,r.kt)("p",null,"Selector Handler, the ",(0,r.kt)("inlineCode",{parentName:"p"},"handle")," field, is an operation that can be processed by the gateway after matching the traffic. For more information, please refer to ",(0,r.kt)("a",{parentName:"p",href:"../plugin-handle-explanation"},"Plugin handle management")," in Plugin Config."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"details\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"host"),"\uff1ahost string.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ip:port"),"\uff1aip+port string.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"protocol"),"\uff1aprotocol default is 'http'.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"group"),"\uff1athe group of dubbo service.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"version"),"\uff1athe version of dubbo service.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"weight"),"\uff1athe server instance and participate in load balancing calculation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"warmupTime"),"\uff1athe server's warm up time and and participate in load balancing calculation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"startupTime"),"\uff1athe server's start time.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"status"),"\uff1atrue: the server is available\uff0cfalse: the server is unavailable.\n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"gray"),"\uff1aenable gray routing."))))),(0,r.kt)("p",null,"Gray routing"),(0,r.kt)("p",null,"if you want to user gray route in dubbo-plugin, you can click the ",(0,r.kt)("inlineCode",{parentName:"p"},"gray")," button."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gray level publishing can customize and control the traffic proportion of new version applications when publishing new version applications, gradually complete the full launch of new version applications, maximize the business risk caused by new version publishing, reduce the impact surface caused by faults, and support rapid roll back.")),(0,r.kt)("p",null,"when the gray is open,Gateway load balancing will select one node from the current node list for routing and you can modify node weights to change the weight of nodes in the load balancing algorithm.\nIt should be noted that,if your business instance not use the client jar of 'shenyu-client-apache-dubbo' or 'shenyu-client-alibaba-dubbo', You should add gray node information manually on this selector page."),(0,r.kt)("h4",{id:"rule-handler"},"Rule Handler"),(0,r.kt)("img",{src:"/img/shenyu/plugin/dubbo/rule_en.png",width:"80%",height:"80%"}),(0,r.kt)("p",null,"Rule Handler, the ",(0,r.kt)("inlineCode",{parentName:"p"},"handle")," field, can be performed by the gateway after the final matching of traffic. For more information, please refer to ",(0,r.kt)("a",{parentName:"p",href:"../plugin-handle-explanation"},"Plugin handle management")," in Plugin Config."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"details\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"loadbalance"),"\uff1athe loadbalance of dubbo service, if the gray node selection fails, the default load balancing method will be used."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Apache ShenYu will obtain the real IP of the corresponding service and initiate rpc proxy calls from registration center of dubbo."))),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Every dubbo interface method corresponds to a piece of metadata, which can be found in ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig -> Metadata .")),(0,r.kt)("img",{src:"/img/shenyu/plugin/dubbo/dubbo-metadata-en.jpg",width:"50%"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"AppName: The name of the application to which this piece of metadata belongs.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MethodName: The name of the method that needs to be called.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Path: your http request path.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"PathDescribe: Description of the path, for easy viewing.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ParamsType: List of parameter types of dubbo interface, there are two declaration methods here:\ne.g. we have an interface ",(0,r.kt)("inlineCode",{parentName:"p"},"update(Integer id, String name, Integer age)")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Type list"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"```yaml\njava.lang.Integer,java.lang.String,java.lang.Integer\n```\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"According to the order of the parameter types of the interface, separated by ",(0,r.kt)("inlineCode",{parentName:"p"},","))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When requesting to pass parameters, ",(0,r.kt)("strong",{parentName:"p"},"the parameters must be passed in strictly in accordance with the order of the parameter types"),", if a parameter without value use ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," as a placeholder."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'Request body example: `{"id":1,"name": null,"age":18}`\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name mapping"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'{"id":"java.lang.Integer","name":"java.lang.String","age":"java.lang.Integer"}      \n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},'"parameter name":"parameter type"')," to represent a parameter, set in order of interface parameter type, separated by ",(0,r.kt)("inlineCode",{parentName:"p"},","))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"No need to pay attention to the order when requesting, and no need to use null placeholders."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'Request body example: `{"name":"Mike","id":1}`\n'))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RpcExpand: corresponding to some configurations of dubbo interface; If you want to adjust, please modify here, which support json format like the following fields:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'{"timeout":10000,"group":"",version":"","loadbalance":"","retries":1}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface: The fully-qualified name for dubbo interface .")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RpcType: Choose ",(0,r.kt)("inlineCode",{parentName:"p"},"dubbo")," ."))))}s.isMDXComponent=!0}}]);