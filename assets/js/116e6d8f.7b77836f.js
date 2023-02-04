"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[56534],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),p=l(r),h=o,d=p["".concat(c,".").concat(h)]||p[h]||s[h]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var m={};for(var c in t)hasOwnProperty.call(t,c)&&(m[c]=t[c]);m.originalType=e,m[p]="string"==typeof e?e:o,a[1]=m;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},96355:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>m,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={title:"Committer",sidebar_position:5,description:"Apache ShenYu Committer's Guide",author:"xiaoyu",categories:"Apache ShenYu",tags:["Committer"],date:new Date("2019-04-09T00:00:00.000Z"),cover:"/img/architecture/shenyu-framework.png"},a=void 0,m={unversionedId:"committer",id:"committer",isDocsHomePage:!1,title:"Committer",description:"Apache ShenYu Committer's Guide",source:"@site/community/5-committer.md",sourceDirName:".",slug:"/committer",permalink:"/community/committer",editUrl:"https://github.com/apache/shenyu-website/edit/main/community/5-committer.md",version:"current",lastUpdatedBy:"midnight2104",lastUpdatedAt:1675494942,formattedLastUpdatedAt:"2/4/2023",sidebarPosition:5,frontMatter:{title:"Committer",sidebar_position:5,description:"Apache ShenYu Committer's Guide",author:"xiaoyu",categories:"Apache ShenYu",tags:["Committer"],date:"2019-04-09T00:00:00.000Z",cover:"/img/architecture/shenyu-framework.png"},sidebar:"community",previous:{title:"Sign ICLA Guide",permalink:"/community/icla"},next:{title:"How to use Apache email",permalink:"/community/use-apache-email"}},c=[{value:"Committer Promotion",id:"committer-promotion",children:[]},{value:"Promotion process",id:"promotion-process",children:[]},{value:"Committer Responsibilities",id:"committer-responsibilities",children:[]},{value:"Pull Request",id:"pull-request",children:[]}],l={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"committer-promotion"},"Committer Promotion"),(0,o.kt)("p",null,"After you have made a lot of contributions, the community will nominate. Become a committer you will have"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Permissions written by Apache ShenYu repository"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/shop/eform/apache"},"jetbrains all"))),(0,o.kt)("h2",{id:"promotion-process"},"Promotion process"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Follow this ",(0,o.kt)("a",{parentName:"strong",href:"https://community.apache.org/newcommitter.html"},"Committer Guide")," to complete the vote")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you have not signed the ICLA, Please follow the ",(0,o.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/community/icla/"},"ICLA Guide")," to complete the signing")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you have ever signed an ICLA, please provide request account like this:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Prospective userid:  \nFull name: \nForwarding email address(sign icla send eamil):\nWhat time to receive the reply signed by icla:\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. Add the new committer to ",(0,o.kt)("a",{parentName:"strong",href:"https://whimsy.apache.org/roster/committee/shenyu"},"roster"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. Complete the ",(0,o.kt)("a",{parentName:"strong",href:"https://gitbox.apache.org/setup/"},"GitBox Setup"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4. Enable GitHub two-factor authentication")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/cn/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization"},"two-factor authentication")),(0,o.kt)("h2",{id:"committer-responsibilities"},"Committer Responsibilities"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Solving issue problems."),(0,o.kt)("li",{parentName:"ul"},"Mentoring contributors to the community.")),(0,o.kt)("h2",{id:"pull-request"},"Pull Request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Give sound advice where possible."),(0,o.kt)("li",{parentName:"ul"},"AThe pull request should be marked ",(0,o.kt)("inlineCode",{parentName:"li"},"shenyu Lable")," and the schedule must be set."),(0,o.kt)("li",{parentName:"ul"},"Once the merge is complete, you need to check that the associated ",(0,o.kt)("inlineCode",{parentName:"li"},"issueNo")," is closed.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The content refers to")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://community.apache.org/newcommitter.html"},"https://community.apache.org/newcommitter.html")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/cn/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization"},"https://docs.github.com/cn/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization")))}p.isMDXComponent=!0}}]);