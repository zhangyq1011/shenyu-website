"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[6885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=c(n),u=r,k=s["".concat(l,".").concat(u)]||s[u]||d[u]||p;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<p;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72762:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const p={sidebar_position:2,title:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72",keywords:["\u4e8c\u8fdb\u5236","\u90e8\u7f72"],description:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72"},o=void 0,i={unversionedId:"deployment/deployment-package",id:"version-2.5.0/deployment/deployment-package",isDocsHomePage:!1,title:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72",description:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.0/deployment/deployment-package.md",sourceDirName:"deployment",slug:"/deployment/deployment-package",permalink:"/zh/docs/deployment/deployment-package",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.5.0/deployment/deployment-package.md",version:"2.5.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72",keywords:["\u4e8c\u8fdb\u5236","\u90e8\u7f72"],description:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72"},sidebar:"version-2.5.0/tutorialSidebar",previous:{title:"\u5355\u673a\u5feb\u901f\u90e8\u7f72",permalink:"/zh/docs/deployment/deployment-quick"},next:{title:"Docker-compose \u90e8\u7f72",permalink:"/zh/docs/deployment/deployment-docker-compose"}},l=[{value:"\u542f\u52a8 Apache ShenYu Admin",id:"\u542f\u52a8-apache-shenyu-admin",children:[]},{value:"\u542f\u52a8 Apache ShenYu Bootstrap",id:"\u542f\u52a8-apache-shenyu-bootstrap",children:[]}],c={toc:l},m="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4f7f\u7528\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72 ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728\u9605\u8bfb\u672c\u6587\u6863\u524d\uff0c\u4f60\u9700\u8981\u5148\u9605\u8bfb",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/deployment/deployment-before"},"\u90e8\u7f72\u5148\u51b3\u6761\u4ef6"),"\u6587\u6863\u6765\u5b8c\u6210\u90e8\u7f72 ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu")," \u524d\u7684\u73af\u5883\u51c6\u5907\u5de5\u4f5c\u3002")),(0,r.kt)("h3",{id:"\u542f\u52a8-apache-shenyu-admin"},"\u542f\u52a8 Apache ShenYu Admin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e0b\u8f7d ",(0,r.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/shenyu/2.5.0/apache-shenyu-2.5.0-admin-bin.tar.gz"},"apache-shenyu-${current.version}-admin-bin.tar.gz"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u89e3\u538b\u7f29 ",(0,r.kt)("inlineCode",{parentName:"p"},"apache-shenyu-${current.version}-admin-bin.tar.gz"),"\u3002 \u8fdb\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"bin")," \u76ee\u5f55\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"h2")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e\uff1a"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> windows: start.bat\n\n> linux: ./start.sh\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"MySQL")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e\uff0c\u9700\u6309\u7167 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/deployment/deployment-before#mysql"},"\u6307\u5f15\u6587\u6863")," \u521d\u59cb\u5316\u6570\u636e\u5e93\uff0c\u5c06 ",(0,r.kt)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.18/mysql-connector-java-8.0.18.jar"},"mysql-connector.jar")," \u62f7\u8d1d\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"/${your_work_dir}/ext-lib"),"\uff0c \u8fdb\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"/conf")," \u76ee\u5f55\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"application-mysql.yaml")," \u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"jdbc")," \u7684\u914d\u7f6e\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/application.yml")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"spring.profiles.active")," \u4fee\u6539\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> windows: start.bat\n\n> linux: ./start.sh\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"PostgreSql")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e\uff0c\u9700\u6309\u7167 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/deployment/deployment-before#postgresql"},"\u6307\u5f15\u6587\u6863")," \u521d\u59cb\u5316\u6570\u636e\u5e93\uff0c \u8fdb\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"/conf")," \u76ee\u5f55\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"application-pg.yaml")," \u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"jdbc")," \u7684\u914d\u7f6e\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/application.yml")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"spring.profiles.active")," \u4fee\u6539\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"pg")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> windows: start.bat\n\n> linux: ./start.sh\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Oracle")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e\uff0c\u9700\u6309\u7167 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/deployment/deployment-before#oracle"},"\u6307\u5f15\u6587\u6863")," \u521d\u59cb\u5316\u6570\u636e\u5e93\uff0c \u8fdb\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"/conf")," \u76ee\u5f55\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"application-oracle.yaml")," \u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"jdbc")," \u7684\u914d\u7f6e\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/application.yml")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"spring.profiles.active")," \u4fee\u6539\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"oracle")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> windows: start.bat\n\n> linux: ./start.sh\n")),(0,r.kt)("h3",{id:"\u542f\u52a8-apache-shenyu-bootstrap"},"\u542f\u52a8 Apache ShenYu Bootstrap"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e0b\u8f7d ",(0,r.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/shenyu/2.5.0/apache-shenyu-2.5.0-bootstrap-bin.tar.gz"},(0,r.kt)("inlineCode",{parentName:"a"},"apache-shenyu-${current.version}-bootstrap-bin.tar.gz")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u89e3\u538b\u7f29 ",(0,r.kt)("inlineCode",{parentName:"p"},"apache-shenyu-${current.version}-bootstrap-bin.tar.gz"),"\u3002 \u8fdb\u5165 bin \u76ee\u5f55\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> windwos : start.bat \n\n> linux : ./start.sh \n")))}s.isMDXComponent=!0}}]);