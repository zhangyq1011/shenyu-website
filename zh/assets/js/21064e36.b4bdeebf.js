"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[55369],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(y,o(o({ref:t},s),{},{components:n})):a.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82675:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:2,title:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72",keywords:["\u4e8c\u8fdb\u5236","\u90e8\u7f72"],description:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72"},o=void 0,p={unversionedId:"deployment/deployment-package",id:"version-2.4.1/deployment/deployment-package",isDocsHomePage:!1,title:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72",description:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.1/deployment/deployment-package.md",sourceDirName:"deployment",slug:"/deployment/deployment-package",permalink:"/zh/docs/2.4.1/deployment/deployment-package",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.1/deployment/deployment-package.md",version:"2.4.1",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72",keywords:["\u4e8c\u8fdb\u5236","\u90e8\u7f72"],description:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"\u5355\u673a\u5feb\u901f\u90e8\u7f72",permalink:"/zh/docs/2.4.1/deployment/deployment-quick"},next:{title:"Docker\u90e8\u7f72",permalink:"/zh/docs/2.4.1/deployment/deployment-docker"}},l=[{value:"\u542f\u52a8 Apache ShenYu Admin",id:"\u542f\u52a8-apache-shenyu-admin",children:[]},{value:"\u542f\u52a8 Apache ShenYu Bootstrap",id:"\u542f\u52a8-apache-shenyu-bootstrap",children:[]}],c={toc:l},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4f7f\u7528\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72 ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u3002"),(0,r.kt)("h3",{id:"\u542f\u52a8-apache-shenyu-admin"},"\u542f\u52a8 Apache ShenYu Admin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e0b\u8f7d ",(0,r.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/incubator/shenyu/2.4.1/apache-shenyu-incubating-2.4.1-admin-bin.tar.gz"},"apache-shenyu-incubating-2.4.1-admin-bin.tar.gz"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u89e3\u538b\u7f29 ",(0,r.kt)("inlineCode",{parentName:"p"},"apache-shenyu-incubating-2.4.1-admin-bin.tar.gz"),"\u3002 \u8fdb\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"bin")," \u76ee\u5f55\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"h2")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e\uff1a"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> windows: start.bat --spring.profiles.active = h2\n\n> linux: ./start.sh --spring.profiles.active = h2\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"MySQL")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e\uff0c\u5c06",(0,r.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.18/mysql-connector-java-8.0.18.jar"},"mysql-connector.jar")," \u62f7\u8d1d\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"/${your_work_dir}/ext-lib"),"\uff0c \u8fdb\u5165 ",(0,r.kt)("inlineCode",{parentName:"li"},"/conf")," \u76ee\u5f55\uff0c\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"li"},"application.yaml")," \u4e2d ",(0,r.kt)("inlineCode",{parentName:"li"},"mysql")," \u7684\u914d\u7f6e\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> windows: start.bat \n\n> linux: ./start.sh \n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"PostgreSql")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e\uff0c \u8fdb\u5165 ",(0,r.kt)("inlineCode",{parentName:"li"},"/conf")," \u76ee\u5f55\uff0c\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"li"},"application.yaml")," \u4e2d ",(0,r.kt)("inlineCode",{parentName:"li"},"spring.profiles.active")," \u7684\u914d\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"pg"),"\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> windows: start.bat \n\n> linux: ./start.sh \n")),(0,r.kt)("h3",{id:"\u542f\u52a8-apache-shenyu-bootstrap"},"\u542f\u52a8 Apache ShenYu Bootstrap"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e0b\u8f7d ",(0,r.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/incubator/shenyu/2.4.1/apache-shenyu-incubating-2.4.1-bootstrap-bin.tar.gz"},"apache-shenyu-incubating-2.4.1-bootstrap-bin.tar.gz"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u89e3\u538b\u7f29 ",(0,r.kt)("inlineCode",{parentName:"p"},"apache-shenyu-incubating-2.4.1-bootstrap-bin.tar.gz"),"\u3002 \u8fdb\u5165 bin \u76ee\u5f55\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> windwos : start.bat \n\n> linux : ./start.sh \n")))}u.isMDXComponent=!0}}]);