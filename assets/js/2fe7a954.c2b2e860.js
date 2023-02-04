"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[38009],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55926:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:2,title:"Integrate Http with soul gateway",keywords:["soul"],description:"Integrate Http with soul gateway"},o=void 0,l={unversionedId:"users-guide/http-proxy",id:"version-2.3.0-Legacy/users-guide/http-proxy",isDocsHomePage:!1,title:"Integrate Http with soul gateway",description:"Integrate Http with soul gateway",source:"@site/versioned_docs/version-2.3.0-Legacy/users-guide/http-proxy.md",sourceDirName:"users-guide",slug:"/users-guide/http-proxy",permalink:"/docs/2.3.0-Legacy/users-guide/http-proxy",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.3.0-Legacy/users-guide/http-proxy.md",version:"2.3.0-Legacy",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Integrate Http with soul gateway",keywords:["soul"],description:"Integrate Http with soul gateway"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"Environment Setup",permalink:"/docs/2.3.0-Legacy/users-guide/soul-set-up"},next:{title:"Integrate dubbo with soul gateway",permalink:"/docs/2.3.0-Legacy/users-guide/dubbo-proxy"}},s=[{value:"Features",id:"features",children:[]},{value:"Configure soul gateway as Http proxy.",id:"configure-soul-gateway-as-http-proxy",children:[]},{value:"Http request via soul gateway\uff08springMVC user\uff09",id:"http-request-via-soul-gatewayspringmvc-user",children:[]},{value:"Configure soul gateway as an Http proxy\uff08other framework\uff09",id:"configure-soul-gateway-as-an-http-proxyother-framework",children:[]},{value:"User request",id:"user-request",children:[]}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This chapter is a guide about integrating Http service with soul gateway."),(0,a.kt)("li",{parentName:"ul"},"Soul gateway uses divide plugin handling http request, pls enable it in soul-admin background."),(0,a.kt)("li",{parentName:"ul"},"Please start ",(0,a.kt)("inlineCode",{parentName:"li"},"soul-admin")," successfully before integrating and ",(0,a.kt)("a",{parentName:"li",href:"./soul-set-up"},"Environment Setup")," is Ok.")),(0,a.kt)("h2",{id:"configure-soul-gateway-as-http-proxy"},"Configure soul gateway as Http proxy."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add these dependencies in gateway's ",(0,a.kt)("inlineCode",{parentName:"li"},"pom.xml"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!--if you use http proxy start this--\x3e\n   <dependency>\n       <groupId>org.dromara</groupId>\n       <artifactId>soul-spring-boot-starter-plugin-divide</artifactId>\n       <version>${last.version}</version>\n   </dependency>\n\n   <dependency>\n       <groupId>org.dromara</groupId>\n       <artifactId>soul-spring-boot-starter-plugin-httpclient</artifactId>\n       <version>${last.version}</version>\n   </dependency>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"pls restart the gateway.")),(0,a.kt)("h2",{id:"http-request-via-soul-gatewayspringmvc-user"},"Http request via soul gateway\uff08springMVC user\uff09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"pls make sure divide plugin has enabled in ",(0,a.kt)("inlineCode",{parentName:"li"},"soul-admin")," background.")),(0,a.kt)("h5",{id:"add-soul-client-methodsavailable-for-springmvcspringboot-user"},"add Soul-Client methods\uff08available for SpringMVC,SpringBoot user\uff09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"SpringBoot User")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add these dependencies in your local maven repository ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"     <dependency>\n         <groupId>org.dromara</groupId>\n         <artifactId>soul-spring-boot-starter-client-springmvc</artifactId>\n         <version>${last.version}</version>\n     </dependency>\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Backend server register center config, please look:",(0,a.kt)("a",{parentName:"p",href:"../register-center/register-center-access"},"register center access"),".  ")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"SpringMVC User")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add these dependencies in your local maven repository ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml"),": "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"       <dependency>\n           <groupId>org.dromara</groupId>\n           <artifactId>soul-client-springmvc</artifactId>\n           <version>${last.version}</version>\n       </dependency>\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Inject these properties into your Spring beans XML file:   "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'    <bean id ="springMvcClientBeanPostProcessor" class ="org.dromara.soul.client.springmvc.init.SpringMvcClientBeanPostProcessor">\n         <constructor-arg  ref="soulRegisterCenterConfig"/>\n    </bean>\n    \n    <bean id="soulRegisterCenterConfig" class="org.dromara.soul.register.common.config.SoulRegisterCenterConfig;">\n         <property name="registerType" value="http"/>\n         <property name="serverList" value="http://localhost:9095"/>\n         <property name="props">\n              <map>\n                <entry key="contextPath" value="/your contextPath"/>\n                <entry key="appName" value="your server name"/>\n                <entry key="port" value="your server port"/>\n                <entry key="isFull" value="false"/>\n              </map>\n         </property>\n    </bean>\n'))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add this annotation ",(0,a.kt)("inlineCode",{parentName:"p"},"@SoulSpringMvcClient")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"controller")," interface."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can apply the annotation to class-level in a controller.the name of the path variable is prefix and '/**' will apply proxy for entire interfaces. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Example1: both ",(0,a.kt)("inlineCode",{parentName:"p"},"/test/payment")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"/test/findByUserId")," will be handled by proxy service."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'  @RestController\n  @RequestMapping("/test")\n  @SoulSpringMvcClient(path = "/test/**")\n  public class HttpTestController {\n      \n      @PostMapping("/payment")\n      public UserDTO post(@RequestBody final UserDTO userDTO) {\n          return userDTO;\n      }\n   \n      @GetMapping("/findByUserId")\n      public UserDTO findByUserId(@RequestParam("userId") final String userId) {\n          UserDTO userDTO = new UserDTO();\n          userDTO.setUserId(userId);\n          userDTO.setUserName("hello world");\n          return userDTO;\n      }      \n   }\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Example2: ",(0,a.kt)("inlineCode",{parentName:"p"},"/order/save")," will be handled by proxy service, but ",(0,a.kt)("inlineCode",{parentName:"p"},"/order/findById")," won't."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'  @RestController\n  @RequestMapping("/order")\n  @SoulSpringMvcClient(path = "/order")\n  public class OrderController {\n  \n      @PostMapping("/save")\n      @SoulSpringMvcClient(path = "/save")\n      public OrderDTO save(@RequestBody final OrderDTO orderDTO) {\n          orderDTO.setName("hello world save order");\n          return orderDTO;\n      }\n \n      @GetMapping("/findById")\n      public OrderDTO findById(@RequestParam("id") final String id) {\n          OrderDTO orderDTO = new OrderDTO();\n          orderDTO.setId(id);\n          orderDTO.setName("hello world findById");\n          return orderDTO;\n      }\n  }\n'))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Kick off your project with your interface, which is integrated with soul gateway."))),(0,a.kt)("h2",{id:"configure-soul-gateway-as-an-http-proxyother-framework"},"Configure soul gateway as an Http proxy\uff08other framework\uff09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"first of all, enable the divide plugin in ",(0,a.kt)("inlineCode",{parentName:"li"},"soul-admin"),", then add selector and rule which will filter the request."),(0,a.kt)("li",{parentName:"ul"},"if you don't know how to configure, pls refer to ",(0,a.kt)("a",{parentName:"li",href:"../admin/selector-and-rule"},"selector guide"),"."),(0,a.kt)("li",{parentName:"ul"},"you can also develop your cutomized http-client\uff0crefer to ",(0,a.kt)("a",{parentName:"li",href:"../developer-guide/developer-soul-client"},"multi-language Http client development"),"\u3002")),(0,a.kt)("h2",{id:"user-request"},"User request"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Send the request as before, only two points need to notice.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Firstly\uff0cthe domain name that requested before in your service, now need to replace with gateway's domain name.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Secondly\uff0csoul gateway needs a route prefix which comes from ",(0,a.kt)("inlineCode",{parentName:"p"},"contextPath"),", it configured during the integration with gateway, you can change it freely in divide plugin of ",(0,a.kt)("inlineCode",{parentName:"p"},"soul-admin"),", if you are familiar with it."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"for example, if you have an order service and it has a interface, the request url: http://localhost:8080/test/save"),(0,a.kt)("li",{parentName:"ul"},"Now need to change to:  http://localhost:9195/order/test/save"),(0,a.kt)("li",{parentName:"ul"},"We can see localhost:9195 is your gateway's ip port\uff0cdefault port number is 9195 \uff0c/order is your contextPath which you configured with gateway."),(0,a.kt)("li",{parentName:"ul"},"other parameters doesn't change in request method."),(0,a.kt)("li",{parentName:"ul"},"Any questions, pls join the group and we can talk about it."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Then you can visit, very easy and simple."))))}d.isMDXComponent=!0}}]);