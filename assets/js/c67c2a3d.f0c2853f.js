"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[87800],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>w});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=r.createContext({}),m=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=m(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=m(t),l=s,w=p["".concat(c,".").concat(l)]||p[l]||g[l]||i;return t?r.createElement(w,a(a({ref:n},u),{},{components:t})):r.createElement(w,a({ref:n},u))}));function w(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,a=new Array(i);a[0]=l;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[p]="string"==typeof e?e:s,a[1]=o;for(var m=2;m<i;m++)a[m]=t[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},62352:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>u,default:()=>h,frontMatter:()=>m,metadata:()=>p,toc:()=>g});var r=t(87462),s=t(67294),i=t(3905),a=t(44996),o=t(62426);const c=()=>s.createElement(s.Fragment,null,o.Z.map((e=>s.createElement("a",{href:e.link,target:"_blank",style:{margin:5}},s.createElement("img",{src:e.src&&(e.src.startsWith("http")?e.src:(0,a.Z)(e.src)),alt:e.name,width:"150",height:"60"}))))),m={title:"User Registration",sidebar_position:10,description:"User List",author:"xiaoyu",categories:"Apache ShenYu",tags:["UserList"]},u=void 0,p={unversionedId:"user-registration",id:"user-registration",isDocsHomePage:!1,title:"User Registration",description:"User List",source:"@site/community/10-user-registration.mdx",sourceDirName:".",slug:"/user-registration",permalink:"/community/user-registration",editUrl:"https://github.com/apache/shenyu-website/edit/main/community/10-user-registration.mdx",version:"current",lastUpdatedBy:"tomsun28",lastUpdatedAt:1696903014,formattedLastUpdatedAt:"10/10/2023",sidebarPosition:10,frontMatter:{title:"User Registration",sidebar_position:10,description:"User List",author:"xiaoyu",categories:"Apache ShenYu",tags:["UserList"]},sidebar:"community",previous:{title:"Release Guide",permalink:"/community/release-guide"},next:{title:"Community",permalink:"/community/community"}},g=[{value:"Known Users",id:"knownusers",children:[]},{value:"Registration",id:"registration",children:[]}],l={toc:g},w="wrapper";function h(e){let{components:n,...t}=e;return(0,i.kt)(w,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"knownusers"},"Known Users"),(0,i.kt)("p",null,"Here is a list of companies or organizations that we know have used all or some of Apache ShenYu's components in production.This list is in no particular order:"),(0,i.kt)(c,{mdxType:"Users"}),(0,i.kt)("h2",{id:"registration"},"Registration"),(0,i.kt)("p",null,"Please register and let us know so that we can serve you better."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/shenyu/issues/68"},"Apache ShenYu registration"))))}h.isMDXComponent=!0},13919:(e,n,t)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function s(e){return void 0!==e&&!r(e)}t.d(n,{Z:()=>s,b:()=>r})},44996:(e,n,t)=>{t.d(n,{C:()=>i,Z:()=>a});var r=t(52263),s=t(13919);function i(){const{siteConfig:{baseUrl:e="/",url:n}={}}=(0,r.Z)();return{withBaseUrl:(t,r)=>function(e,n,t,r){let{forcePrependBaseUrl:i=!1,absolute:a=!1}=void 0===r?{}:r;if(!t)return t;if(t.startsWith("#"))return t;if((0,s.b)(t))return t;if(i)return n+t;const o=t.startsWith(n)?t:n+t.replace(/^\//,"");return a?e+o:o}(n,e,t,r)}}function a(e,n){void 0===n&&(n={});const{withBaseUrl:t}=i();return t(e,n)}},62426:(e,n,t)=>{t.d(n,{Z:()=>r});const r=[{name:"\u4eac\u4e1c",src:"/img/users/jd_logo.png",link:"https://www.jd.com/"},{name:"\u817e\u8baf",src:"/img/users/tencent.jpeg",link:"https://tencent.com/"},{name:"\u6ef4\u6ef4\u51fa\u884c",src:"/img/users/dd.png",link:"https://www.didiglobal.com/"},{name:"\u6b22\u805a\u65f6\u4ee3",src:"/img/users/yy_logo.png",link:"http://www.huanju.cn/"},{name:"\u7c73\u54c8\u6e38",src:"/img/users/mihayo_logo.png",link:"https://www.mihoyo.com/"},{name:"Kenyatta University",src:"/img/users/KenyattaUniversity.png",link:"http://www.ku.ac.ke/"},{name:"\u4e2d\u56fd\u7535\u529b\u79d1\u5b66\u7814\u7a76\u9662",src:"/img/users/guojiadianwang.jpeg",link:"http://www.epri.sgcc.com.cn/"},{name:"\u8292\u679cTV",src:"/img/users/mgtv.jpg",link:"http://www.mgtv.com"},{name:"\u82cf\u5dde\u5b89\u8f6f\u4fe1\u606f\u79d1\u6280\u6709\u9650\u516c\u53f8",src:"/img/users/safesoft.png",link:"http:/www.safesoftcorp.com"},{name:"\u963f\u5e15\u79d1\u84dd",src:"/img/users/songguo.png",link:"https://songguo7.com/"},{name:"\u5409\u7965\u822a\u7a7a",src:"/img/users/jixiang.jpg",link:"http://www.juneyaoair.com/"},{name:"\u95ea\u9001\u79d1\u6280",src:"/img/users/shansong_logo.png",link:"http://www.ishansong.com/"},{name:"\u5e7f\u4e1c\u601d\u57e0\u96c6\u56e2",src:"/img/users/sibu.png",link:"http://www.sibu.cn"},{name:"\u5fae\u8109",src:"/img/users/weimai.png",link:"https://www.myweimai.net"},{name:"\u5317\u4eac\u8f66\u6613\u62cd",src:"/img/users/cheyipai_logo.jpg",link:"http://www.cheyipai.com"},{name:"\u5f69\u8d1d\u58f3",src:"/img/users/caibeike_logo.png",link:"https://www.caibeike.com/"},{name:"\u65b9\u4ed8\u901a",src:"/img/users/fangfutong.png",link:"https://www.f-road.com.cn/"},{name:"\u4e2d\u56fd\u7535\u4fe1",src:"/img/users/china_telecom_logo.png",link:"http://www.chinatelecom.com.cn/"},{name:"\u5f00\u666e\u4e91",src:"/img/users/kaipuyun.png",link:"https://www.kaipuyun.cn/"},{name:"\u9882\u5927\u6559\u80b2",src:"/img/users/songda.png",link:"http://www.whsundata.com"},{name:"\u7af9\u4e91\u79d1\u6280",src:"/img/users/bamboocloud.png",link:"http://www.bamboocloud.com"},{name:"\u76d2\u77e5\u79d1\u6280",src:"/img/users/hezhi.png",link:"https://www.hezhiiot.com/"},{name:"\u4e07\u5a01\u79d1\u6280",src:"/img/users/wanwei_logo.png",link:""},{name:"\u597d\u6177\u5728\u5bb6",src:"/img/users/haokangzaijia.png",link:""},{name:"\u51ef\u6492\u65c5\u6e38",src:"/img/users/caissa.png",link:""},{name:"\u6df1\u5170",src:"/img/users/deepblue.png",link:"https://www.deepblueai.com/"},{name:"\u534e\u590f\u4e8c\u624b\u8f66",src:"/img/users/huaxiaershouche_logo.png",link:"http://www.hx2car.com/"},{name:"\u660e\u7565\u79d1\u6280",src:"/img/users/minglamp.jpeg",link:"https://www.mininglamp.com/"},{name:"\u9cb8\u7075\u79d1\u6280",src:"/img/users/jingling.png",link:"http://www.jinglingtech.com.cn/"},{name:"\u5f00\u601d\u65f6\u4ee3",src:"/img/users/casstime.png",link:"https://www.casstime.com/"},{name:"\u6c38\u94a2\u96c6\u56e2",src:"/img/users/jiangsuyonggang.jpg",link:"http://www.yong-gang.com/"},{name:"\u8fde\u8fde\u652f\u4ed8",src:"/img/users/lianlianpay.png",link:""},{name:"\u5927\u641c\u8f66",src:"/img/users/dasouche.png",link:"https://www.dasouche.com/zh/"},{name:"\u676d\u5dde\u66fc\u5b5a\u79d1\u6280\u6709\u9650\u516c\u53f8",src:"/img/users/manfu.png",link:"https://www.mindflow.com.cn/"},{name:"\u5947\u70b9\u4e91",src:"/img/users/qidianyun.png",link:"https://www.startdt.com/"},{name:"\u5927\u53c2\u6797",src:"/img/users/dasunlin.png",link:"https://www.dslyy.com/"},{name:"\u6d59\u6c5f\u65b0\u8bfe\u5802\u6559\u80b2\u80a1\u4efd\u6709\u9650\u516c\u53f8",src:"/img/users/xinketang.png",link:"https://www.thinktown.com/"},{name:"\u7a3f\u5b9a\u79d1\u6280",src:"/img/users/gaoding.png",link:"https://www.gaoding.com/"},{name:"\u53f8\u673a\u5b9d",src:"/img/users/sijibao.png",link:"https://www.sijibao.com/"},{name:"\u51ef\u4eac\u79d1\u6280",src:"/img/users/keking.jpeg",link:"http://www.keking.com/"},{name:"\u805a\u62cd\u7f51",src:"/img/users/jupai.png",link:"https://www.jupai.net"},{name:"\u4e5d\u5dde\u901a",src:"/img/users/jzt.png",link:"https://www.yyjzt.com"},{name:"\u6d59\u6c5f\u767e\u5e94\u79d1\u6280",src:"/img/users/by_logo.png",link:"https://www.byai.com/"},{name:"ShipOut",src:"/img/users/shipout_logo.png",link:"https://www.ShipOut.com"},{name:"\u9a7f\u901a\u79d1\u6280",src:"/img/users/etcp.png",link:"https://www.etcp.cn"},{name:"\u94c1\u9a91\u529b\u58eb\u96c6\u56e2",src:"/img/users/tql.png",link:"https://www.tqlsgroup.com/"}]}}]);