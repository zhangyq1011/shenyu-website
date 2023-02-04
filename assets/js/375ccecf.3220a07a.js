"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[4602],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,p=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=s(n),y=i,m=u["".concat(l,".").concat(y)]||u[y]||d[y]||p;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=n.length,o=new Array(p);o[0]=y;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:i,o[1]=a;for(var s=2;s<p;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},92677:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>a,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const p={title:"CryptorResponse plugin",keywords:["CryptorResponse"],description:"CryptorResponse plugin"},o=void 0,a={unversionedId:"plugin-center/security/cryptor-response-plugin",id:"version-2.5.0/plugin-center/security/cryptor-response-plugin",isDocsHomePage:!1,title:"CryptorResponse plugin",description:"CryptorResponse plugin",source:"@site/versioned_docs/version-2.5.0/plugin-center/security/cryptor-response-plugin.md",sourceDirName:"plugin-center/security",slug:"/plugin-center/security/cryptor-response-plugin",permalink:"/docs/plugin-center/security/cryptor-response-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.0/plugin-center/security/cryptor-response-plugin.md",version:"2.5.0",frontMatter:{title:"CryptorResponse plugin",keywords:["CryptorResponse"],description:"CryptorResponse plugin"},sidebar:"version-2.5.0/tutorialSidebar",previous:{title:"CryptorRequest plugin",permalink:"/docs/plugin-center/security/cryptor-request-plugin"},next:{title:"JWT plugin",permalink:"/docs/plugin-center/security/jwt-plugin"}},l=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Plugin Use",id:"plugin-use",children:[]},{value:"Situation",id:"situation",children:[]}],s={toc:l},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"CryptorResponse")," plug-in uses ",(0,i.kt)("inlineCode",{parentName:"li"},"fieldNames")," to match the parameters in ",(0,i.kt)("inlineCode",{parentName:"li"},"responseBody")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"encryption")," processing, replacing the corresponding content of the current ",(0,i.kt)("inlineCode",{parentName:"li"},"fieldNames"),".")),(0,i.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," BasicConfig --\x3e plugin -> ",(0,i.kt)("inlineCode",{parentName:"li"},"cryptor_response")," set to enable.")),(0,i.kt)("img",{src:"/img/shenyu/plugin/cryptor/enable-cryptor-response-plugin.png",width:"80%",height:"80%"}),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open ",(0,i.kt)("inlineCode",{parentName:"p"},"selector")," to configure the traffic that needs to be matched.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the ",(0,i.kt)("inlineCode",{parentName:"p"},"Rules")," configuration corresponding to the ",(0,i.kt)("inlineCode",{parentName:"p"},"selector"),"."),(0,i.kt)("img",{src:"/img/shenyu/plugin/cryptor/cryptor-response-rules-config.png",width:"80%",height:"80%"}))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"strategyName: Algorithm name. Currently, based on shenyu's SPI mechanism, the encryption and decryption algorithms can be customized,\nNeed to implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.cryptor.strategy.CryptorStrategy")," interface."),(0,i.kt)("p",{parentName:"li"},"At the same time find the ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.cryptor.strategy.CryptorStrategy")," file under ",(0,i.kt)("inlineCode",{parentName:"p"},"resources/META-INF/shenyu/"),",\nWrite the name of the algorithm, and the package name of the class that implements the ",(0,i.kt)("inlineCode",{parentName:"p"},"CryptorStrategy")," interface."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"fieldNames: Matching parameter name. Support parsing multi-level json format matching, using ",(0,i.kt)("inlineCode",{parentName:"li"},".")," segmentation, such as data.id.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},'    {\n      data: {\n        "id": ""\n      }\n    }\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"decryptKey: Secret key. Used to decrypt data.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"encryptKey: Secret key. Used to encrypt data.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"way: Select encrypt or decrypt."))),(0,i.kt)("h2",{id:"plugin-use"},"Plugin Use"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add support for ",(0,i.kt)("inlineCode",{parentName:"li"},"cryptorResponse")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"pom.xml")," file of shenyu-bootstrap.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- apache shenyu Cryptor Response plugin start--\x3e\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-cryptor</artifactId>\n  <version>${project.version}</version>\n</dependency>\n\x3c!-- apache shenyu Cryptor Response plugin end--\x3e\n")),(0,i.kt)("h2",{id:"situation"},"Situation"),(0,i.kt)("p",null,"Prevent Internet hacking and obtain data maliciously. Improve data security."))}u.isMDXComponent=!0}}]);