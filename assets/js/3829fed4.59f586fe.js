"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[69341],{3905:(e,n,i)=>{i.d(n,{Zo:()=>u,kt:()=>f});var t=i(67294);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function o(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?o(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function a(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var d=t.createContext({}),s=function(e){var n=t.useContext(d),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},u=function(e){var n=s(e.components);return t.createElement(d.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(i),g=r,f=p["".concat(d,".").concat(g)]||p[g]||c[g]||o;return i?t.createElement(f,l(l({ref:n},u),{},{components:i})):t.createElement(f,l({ref:n},u))}));function f(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=i.length,l=new Array(o);l[0]=g;var a={};for(var d in n)hasOwnProperty.call(n,d)&&(a[d]=n[d]);a.originalType=e,a[p]="string"==typeof e?e:r,l[1]=a;for(var s=2;s<o;s++)l[s]=i[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,i)}g.displayName="MDXCreateElement"},77087:(e,n,i)=>{i.r(n),i.d(n,{contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=i(87462),r=(i(67294),i(3905));const o={sidebar_position:3,title:"File Uploading And Downloading",keywords:["soul"],description:"file uploading and downloading"},l=void 0,a={unversionedId:"developer-guide/file-and-image",id:"version-2.3.0-Legacy/developer-guide/file-and-image",isDocsHomePage:!1,title:"File Uploading And Downloading",description:"file uploading and downloading",source:"@site/versioned_docs/version-2.3.0-Legacy/developer-guide/file-and-image.md",sourceDirName:"developer-guide",slug:"/developer-guide/file-and-image",permalink:"/docs/2.3.0-Legacy/developer-guide/file-and-image",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.3.0-Legacy/developer-guide/file-and-image.md",version:"2.3.0-Legacy",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"File Uploading And Downloading",keywords:["soul"],description:"file uploading and downloading"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"Custom Plugin",permalink:"/docs/2.3.0-Legacy/developer-guide/custom-plugin"},next:{title:"Fetching Correct IP Address And Host",permalink:"/docs/2.3.0-Legacy/developer-guide/custom-parsing-ip-and-host"}},d=[{value:"description",id:"description",children:[]},{value:"File Uploading",id:"file-uploading",children:[]},{value:"File Downloading",id:"file-downloading",children:[]}],s={toc:d},u="wrapper";function p(e){let{components:n,...i}=e;return(0,r.kt)(u,(0,t.Z)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"description"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This doc gives a brief description for uploading and downloading files using soul.")),(0,r.kt)("h2",{id:"file-uploading"},"File Uploading"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The default file size limit is 10M."),(0,r.kt)("li",{parentName:"ul"},"For custom limitation, use",(0,r.kt)("inlineCode",{parentName:"li"},"--file.size")," with an integer variable. e.g.",(0,r.kt)("inlineCode",{parentName:"li"},"--file.size = 30")),(0,r.kt)("li",{parentName:"ul"},"Upload your files just as way you did before")),(0,r.kt)("h2",{id:"file-downloading"},"File Downloading"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Soul supports downloading files in streams. There is no need to change anything.")))}p.isMDXComponent=!0}}]);