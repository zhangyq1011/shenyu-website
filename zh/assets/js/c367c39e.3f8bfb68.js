"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[45208],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(h,o(o({ref:n},c),{},{components:t})):r.createElement(h,o({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},158:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const i={title:"Tars\u670d\u52a1\u63a5\u5165",description:"Tars\u670d\u52a1\u63a5\u5165"},o=void 0,l={unversionedId:"user-guide/tars-proxy",id:"version-2.5.0/user-guide/tars-proxy",isDocsHomePage:!1,title:"Tars\u670d\u52a1\u63a5\u5165",description:"Tars\u670d\u52a1\u63a5\u5165",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.0/user-guide/tars-proxy.md",sourceDirName:"user-guide",slug:"/user-guide/tars-proxy",permalink:"/zh/docs/user-guide/tars-proxy",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.5.0/user-guide/tars-proxy.md",version:"2.5.0",frontMatter:{title:"Tars\u670d\u52a1\u63a5\u5165",description:"Tars\u670d\u52a1\u63a5\u5165"},sidebar:"version-2.5.0/tutorialSidebar",previous:{title:"Spring Cloud\u670d\u52a1\u63a5\u5165",permalink:"/zh/docs/user-guide/spring-cloud-proxy"},next:{title:"Websocket\u670d\u52a1\u63a5\u5165",permalink:"/zh/docs/user-guide/websocket-proxy"}},p=[{value:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165 tars \u63d2\u4ef6",id:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165-tars-\u63d2\u4ef6",children:[]},{value:"Tars\u670d\u52a1\u63a5\u5165\u7f51\u5173",id:"tars\u670d\u52a1\u63a5\u5165\u7f51\u5173",children:[]},{value:"\u7528\u6237\u8bf7\u6c42",id:"\u7528\u6237\u8bf7\u6c42",children:[]}],s={toc:p},c="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6b64\u7bc7\u6587\u4ecb\u7ecd\u5982\u4f55\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"Tars")," \u670d\u52a1\u63a5\u5165\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"tars")," \u63d2\u4ef6\u6765\u63a5\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"Tars"),"\u670d\u52a1\u3002"),(0,a.kt)("p",null,"\u63a5\u5165\u524d\uff0c\u8bf7\u6b63\u786e\u542f\u52a8 ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"\uff0c\u5e76\u5f00\u542f",(0,a.kt)("inlineCode",{parentName:"p"},"tars"),"\u63d2\u4ef6\uff0c\u5728\u7f51\u5173\u7aef\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"tars"),"\u670d\u52a1\u7aef\u5f15\u5165\u76f8\u5173\u4f9d\u8d56\u3002\u53ef\u4ee5\u53c2\u8003\u524d\u9762\u7684 ",(0,a.kt)("a",{parentName:"p",href:"../quick-start/quick-start-tars"},"Tars\u5feb\u901f\u5f00\u59cb")," \u3002"),(0,a.kt)("p",null,"\u5e94\u7528\u5ba2\u6237\u7aef\u63a5\u5165\u7684\u76f8\u5173\u914d\u7f6e\u8bf7\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/user-guide/property-config/register-center-access"},"\u5ba2\u6237\u7aef\u63a5\u5165\u914d\u7f6e"),"\u3002"),(0,a.kt)("p",null,"\u6570\u636e\u540c\u6b65\u7684\u76f8\u5173\u914d\u7f6e\u8bf7\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/user-guide/property-config/use-data-sync"},"\u6570\u636e\u540c\u6b65\u914d\u7f6e"),"\u3002"),(0,a.kt)("h2",{id:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165-tars-\u63d2\u4ef6"},"\u5728\u7f51\u5173\u4e2d\u5f15\u5165 tars \u63d2\u4ef6"),(0,a.kt)("p",null,"\u5f15\u5165\u7f51\u5173\u5bf9",(0,a.kt)("inlineCode",{parentName:"p"},"Tars"),"\u7684\u4ee3\u7406\u63d2\u4ef6\uff0c\u5728\u7f51\u5173\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu tars plugin start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-tars</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n\n        <dependency>\n            <groupId>com.tencent.tars</groupId>\n            <artifactId>tars-client</artifactId>\n            <version>1.7.2</version>\n        </dependency>\n        \x3c!-- apache shenyu tars plugin end--\x3e\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u91cd\u542f\u4f60\u7684\u7f51\u5173\u670d\u52a1\u3002")),(0,a.kt)("h2",{id:"tars\u670d\u52a1\u63a5\u5165\u7f51\u5173"},"Tars\u670d\u52a1\u63a5\u5165\u7f51\u5173"),(0,a.kt)("p",null,"\u53ef\u4ee5\u53c2\u8003\uff1a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-tars"},"shenyu-examples-tars")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u7531",(0,a.kt)("inlineCode",{parentName:"li"},"Tars"),"\u6784\u5efa\u7684\u5fae\u670d\u52a1\u4e2d\uff0c\u5f15\u5165\u5982\u4e0b\u4f9d\u8d56\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-client-tars</artifactId>\n            <version>${shenyu.version}</version>\n        </dependency>\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"application.yaml")," \u914d\u7f6e\u6587\u4ef6\u589e\u52a0\u5982\u4e0b\u914d\u7f6e\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    registerType: http #zookeeper #etcd #nacos #consul\n    serverLists: http://localhost:9095 #localhost:2181 #http://localhost:2379 #localhost:8848\n    props:\n      username: admin\n      password: 123456\n  client:\n    tars:\n      props:\n        contextPath: /tars\n        appName: tars\n        port: 21715\n        host: 192.168.41.103\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"Tars"),"\u670d\u52a1\u63a5\u53e3\u5b9e\u73b0\u7c7b\u4e0a\u52a0\u4e0a ",(0,a.kt)("inlineCode",{parentName:"li"},"@ShenyuTarsService")," \u6ce8\u89e3\uff0c\u5728\u65b9\u6cd5\u4e0a\u52a0\u4e0a\u6ce8\u89e3",(0,a.kt)("inlineCode",{parentName:"li"},"@ShenyuTarsClient"),"\uff0c\u542f\u52a8\u4f60\u7684\u670d\u52a1\u63d0\u4f9b\u8005\uff0c\u6210\u529f\u6ce8\u518c\u540e\uff0c\u5728\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u8fdb\u5165",(0,a.kt)("inlineCode",{parentName:"li"},"\u63d2\u4ef6\u5217\u8868 -> rpc proxy -> tars"),"\uff0c\u4f1a\u770b\u5230\u81ea\u52a8\u6ce8\u518c\u7684\u9009\u62e9\u5668\u548c\u89c4\u5219\u4fe1\u606f\u3002")),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'    @TarsServant("HelloObj")\n    @ShenyuTarsService(serviceName = "ShenyuExampleServer.ShenyuExampleApp.HelloObj")\n    public class HelloServantImpl implements HelloServant {\n        @Override\n        @ShenyuTarsClient(path = "/hello", desc = "hello")\n        public String hello(int no, String name) {\n            return String.format("hello no=%s, name=%s, time=%s", no, name, System.currentTimeMillis());\n        }\n    \n        @Override\n        @ShenyuTarsClient(path = "/helloInt", desc = "helloInt")\n        public int helloInt(int no, String name) {\n            return 1;\n        }\n    }\n\n')),(0,a.kt)("h2",{id:"\u7528\u6237\u8bf7\u6c42"},"\u7528\u6237\u8bf7\u6c42"),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," \u7684\u65b9\u5f0f\u6765\u8bf7\u6c42\u4f60\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"tars"),"\u670d\u52a1\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u9700\u8981\u6709\u4e00\u4e2a\u8def\u7531\u524d\u7f00\uff0c\u8fd9\u4e2a\u8def\u7531\u524d\u7f00\u5c31\u662f\u63a5\u5165\u7f51\u5173\u914d\u7f6e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"contextPath"),"\u3002\u6bd4\u5982\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:9195/tars/hello")," \u3002"))}u.isMDXComponent=!0}}]);