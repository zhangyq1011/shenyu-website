"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[44328],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,g=s["".concat(l,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[s]="string"==typeof e?e:a,o[1]=u;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12153:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={title:"Custom Predicate Judge",keywords:["PredicateJudge"],description:"Custom Predicate Judge"},o=void 0,u={unversionedId:"developer/spi/custom-predicate-judge",id:"version-2.4.0/developer/spi/custom-predicate-judge",isDocsHomePage:!1,title:"Custom Predicate Judge",description:"Custom Predicate Judge",source:"@site/versioned_docs/version-2.4.0/developer/spi/custom-predicate-judge.md",sourceDirName:"developer/spi",slug:"/developer/spi/custom-predicate-judge",permalink:"/docs/2.4.0/developer/spi/custom-predicate-judge",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.0/developer/spi/custom-predicate-judge.md",version:"2.4.0",frontMatter:{title:"Custom Predicate Judge",keywords:["PredicateJudge"],description:"Custom Predicate Judge"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"Custom Parameter Data",permalink:"/docs/2.4.0/developer/spi/custom-parameter-data"},next:{title:"Custom Rate Limiter",permalink:"/docs/2.4.0/developer/spi/custom-rate-limiter"}},l=[],p={toc:l},c="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This paper describes how to customize the extension of  ",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.judge.PredicateJudge"),".")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a new class ",(0,a.kt)("inlineCode",{parentName:"li"},"CustomPredicateJudge"),", implements ",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.judge.PredicateJudge"),", add annotation ",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.spi.Join"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * custom predicate judge.\n */\n@Join\npublic class CustomPredicateJudge implements PredicateJudge {\n\n    @Override\n    public Boolean judge(final ConditionData conditionData, final String realData) {\n        // Custom Predicate Judge\n    }\n}\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In ",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.judge.PredicateJudge")," file, add key-value as following:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="script"',title:'"script"'},"${spi name} = ${custom class path}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"${spi name}")," represents the name of ",(0,a.kt)("inlineCode",{parentName:"p"},"spi")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"${custom class path}")," represents the fully qualified name of the class. Such as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="script"',title:'"script"'},"custom=org.apache.shenyu.examples.http.judge.CustomPredicateJudge\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add enum in ",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.common.enums.OperatorEnum")," class:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'\n    /**\n     * custom operator enum.\n     */\n    CUSTOM("custom", true),\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the ",(0,a.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," gateway management system --\x3e BasicConfig --\x3e Dictionary, find the dictionary code as ",(0,a.kt)("inlineCode",{parentName:"li"},"OPERATOR"),", add a new piece of data, pay attention to the dictionary name: ",(0,a.kt)("inlineCode",{parentName:"li"},"${spi name}"),".")),(0,a.kt)("img",{src:"/img/shenyu/custom/custom_predicate_judge_en.png",width:"70%",height:"60%"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"DictionaryType: ",(0,a.kt)("inlineCode",{parentName:"p"},"operator"),";"),(0,a.kt)("p",{parentName:"blockquote"},"DictionaryCode: ",(0,a.kt)("inlineCode",{parentName:"p"},"OPERATOR"),";"),(0,a.kt)("p",{parentName:"blockquote"},"DictionaryName: ",(0,a.kt)("inlineCode",{parentName:"p"},"${spi name}"),", input your custom spi name;"),(0,a.kt)("p",{parentName:"blockquote"},"DictionaryValue: When used, the value of the drop-down box, do not repeat with the existing;"),(0,a.kt)("p",{parentName:"blockquote"},"DictionaryDescribe: desc your custom match strategy;"),(0,a.kt)("p",{parentName:"blockquote"},"Sort: to sort;"),(0,a.kt)("p",{parentName:"blockquote"},"Status: open or close.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When adding selectors or rules, you can use custom predicate judge:")),(0,a.kt)("img",{src:"/img/shenyu/custom/use_custom_predicate_judge_en.png",width:"80%",height:"70%"}))}s.isMDXComponent=!0}}]);