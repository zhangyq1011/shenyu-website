"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[82362],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44506:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={title:"Integration Test Analysis",author:"Kunshuai Zhu",author_title:"Apache ShenYu Committer",author_url:"https://github.com/JooKS-me",author_image_url:"https://avatars1.githubusercontent.com/u/62384022?v=4",tags:["Integration Test","Apache ShenYu"]},o=void 0,l={permalink:"/blog/IntegrationTest-Analysis",editUrl:"https://github.com/apache/shenyu-website/edit/main/blog/IntegrationTest-Analysis.md",source:"@site/blog/IntegrationTest-Analysis.md",title:"Integration Test Analysis",description:"This article will provide an in-depth analysis of Apache ShenYu's integration tests.",date:"2023-10-10T01:57:14.648Z",formattedDate:"October 10, 2023",tags:[{label:"Integration Test",permalink:"/blog/tags/integration-test"},{label:"Apache ShenYu",permalink:"/blog/tags/apache-shen-yu"}],readingTime:6.555,truncated:!1,prevItem:{title:"Code Analysis For Context-Path Plugin",permalink:"/blog/Plugin-SourceCode-Analysis-Context-Path-Plugin"},nextItem:{title:"E2e Test Analysis",permalink:"/blog/E2eTest-Analysis"}},s=[{value:"What are integration tests?",id:"what-are-integration-tests",children:[]},{value:"How to automate integration testing?",id:"how-to-automate-integration-testing",children:[]},{value:"Triggering the workflow",id:"triggering-the-workflow",children:[]},{value:"Initialize the environment",id:"initialize-the-environment",children:[]},{value:"Build the entire project while building the docker image",id:"build-the-entire-project-while-building-the-docker-image",children:[]},{value:"Build the examples module",id:"build-the-examples-module",children:[]},{value:"Build custom gateways",id:"build-custom-gateways",children:[]},{value:"Run docker compose",id:"run-docker-compose",children:[]},{value:"Run the health check and wait for docker-compose to start",id:"run-the-health-check-and-wait-for-docker-compose-to-start",children:[]},{value:"run tests",id:"run-tests",children:[]},{value:"View Docker Compose logs",id:"view-docker-compose-logs",children:[]}],c={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article will provide an in-depth analysis of Apache ShenYu's integration tests."),(0,i.kt)("h3",{id:"what-are-integration-tests"},"What are integration tests?"),(0,i.kt)("p",null,"Integration testing is also called E2E (End To End) testing in some projects. It is mainly used to test whether each module can meet expectations after being assembled into a system."),(0,i.kt)("p",null,"Apache ShenYu puts integration tests in continuous integration, using GitHub Actions to trigger each time a Pull Request or Merge is submitted to the main branch. This can greatly reduce the maintenance cost of the project and improve the stability of Apache ShenYu."),(0,i.kt)("h3",{id:"how-to-automate-integration-testing"},"How to automate integration testing?"),(0,i.kt)("p",null,"In Apache ShenYu, the main steps of integration testing are embodied in the script of the GitHub Action workflow, as shown below, which is located at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/.github/workflows"},"~/.github/workflows")," directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: it\non:\n  pull_request:\n  push:\n    branches:\n      - master\njobs:\n  build:\n    strategy:\n      matrix:\n        case:\n          - shenyu-integrated-test-alibaba-dubbo\n          ...\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n        with:\n          submodules: true\n      ...\n")),(0,i.kt)("p",null,"Next, I will start from this yaml file and take you to analyze the entire process of automated integration testing."),(0,i.kt)("h3",{id:"triggering-the-workflow"},"Triggering the workflow"),(0,i.kt)("p",null,"Since we specified ",(0,i.kt)("inlineCode",{parentName:"p"},"pull_request")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"push.branch: master")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"on"),", this workflow will be triggered when we submit pull_request or merge branch to master (push)."),(0,i.kt)("p",null,"For more usage of GitHub Action, you can refer to the documentation of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions"},"GitHub Action"),", which will not be introduced in detail here."),(0,i.kt)("h3",{id:"initialize-the-environment"},"Initialize the environment"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"pull code")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- uses: actions/checkout@v2\n  with:\n        submodules: true\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"set skip flag")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Set Skip Env Var\n      uses: ./.github/actions/skip-ci\n")),(0,i.kt)("p",null,"When something unrelated to functionality occurs (such as changing documentation), integration tests are skipped to save resources."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cache maven repos, install Java")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Cache Maven Repos\n...\n- uses: actions/setup-java@v1\n")),(0,i.kt)("h3",{id:"build-the-entire-project-while-building-the-docker-image"},"Build the entire project while building the docker image"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./mvnw -B clean install -Prelease,docker -Dmaven.javadoc.skip=true -Dmaven.test.skip=true\n")),(0,i.kt)("p",null,"In the above command, -P is followed by ",(0,i.kt)("inlineCode",{parentName:"p"},"release,docker"),", which means that the relevant profile configuration in the pom file will be activated."),(0,i.kt)("p",null,"The two profiles, release and docker, currently only exist in several submodules under ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-dist"),". The following will take the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-dist/shenyu-admin-dist"},"shenyu-dist-admin")," module as an example to introduce profiles as release and docker The specific content of the configuration. Also, integration tests only use the ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," image built in this step."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"First is release"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<profile>\n    <id>release</id>\n    <activation>\n        <activeByDefault>false</activeByDefault>\n    </activation>\n    <build>\n        <finalName>apache-shenyu-incubating-${project.version}</finalName>\n        <plugins>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-assembly-plugin</artifactId>\n                <executions>\n                    <execution>\n                        <id>admin-bin</id>\n                        <phase>package</phase>\n                        <goals>\n                            <goal>single</goal>\n                        </goals>\n                    </execution>\n                </executions>\n                <configuration>\n                    <descriptors>\n                        <descriptor>${project.basedir}/src/main/assembly/binary.xml</descriptor>\n                    </descriptors>\n                    <tarLongFileMode>posix</tarLongFileMode>\n                </configuration>\n            </plugin>\n        </plugins>\n    </build>\n</profile>\n")),(0,i.kt)("p",{parentName:"li"},"When -P is followed by release, the above ",(0,i.kt)("inlineCode",{parentName:"p"},"maven-assembly-plugin")," plugin is activated. In executions, the execution timing of the plugin is bound to the maven life cycle package, which means that it will be triggered when we execute ",(0,i.kt)("inlineCode",{parentName:"p"},"mvn install"),"."),(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"binary.xml")," we wrote is specified in the configuration, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"maven-assembly-plugin")," plugin will copy the required files and package them according to this file. You can click the link to view the file: ","[shenyu-dist/shenyu-admin-dist/src/main/assembly/binary.xml]","(",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/blob/master/shenyu-"},"https://github.com/apache/shenyu/blob/master/shenyu-")," dist/shenyu-admin-dist/src/main/assembly/binary.xml)"),(0,i.kt)("p",{parentName:"li"},'According to this file, the plugin will "copy" the packaged jar packages, configuration files, startup scripts, etc. under other modules, and finally make them into a compressed package in ',(0,i.kt)("inlineCode",{parentName:"p"},"tar.gz")," format.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"then docker"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<profile>\n    <id>docker</id>\n    <activation>\n        <activeByDefault>false</activeByDefault>\n    </activation>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>com.spotify</groupId>\n                <artifactId>dockerfile-maven-plugin</artifactId>\n                <version>${dockerfile-maven-plugin.version}</version>\n                <executions>\n                    <execution>\n                        <id>tag-latest</id>\n                        <goals>\n                            <goal>build</goal>\n                        </goals>\n                        <configuration>\n                            <tag>latest</tag>\n                        </configuration>\n                    </execution>\n                    <execution>\n                        <id>tag-version</id>\n                        <goals>\n                            <goal>build</goal>\n                        </goals>\n                        <configuration>\n                            <tag>${project.version}</tag>\n                        </configuration>\n                    </execution>\n                </executions>\n                <configuration>\n                    <repository>apache/shenyu-admin</repository>\n                    <buildArgs>\n                        <APP_NAME>apache-shenyu-incubating-${project.version}-admin-bin</APP_NAME>\n                    </buildArgs>\n                </configuration>\n            </plugin>\n        </plugins>\n    </build>\n</profile>\n")),(0,i.kt)("p",{parentName:"li"},"Similar to the release above, here is the activation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"dockerfile-maven-plugin")," plugin. When ",(0,i.kt)("inlineCode",{parentName:"p"},"mvn install -Pdocker"),", the plugin will use the dockerfile we wrote to build the docker image."))),(0,i.kt)("p",null,"It should be noted that the dockerfile-maven-plugin currently has limited support for aarch64 architecture devices, and the following error will occur when running the plugin on aarch64 architecture machines. And when I wrote this article, it has not been maintained for a long time, which means that the problem of aarch64 architecture devices using this plugin will not be solved in the short term."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"[ERROR] Failed to execute goal com.spotify:dockerfile-maven-plugin:1.4.6:build (tag-latest) on project shenyu-admin-dist: Could not build image: java.util.concurrent.ExecutionException: com.spotify.docker.client.shaded.javax.ws.rs.ProcessingException: java.lang.UnsatisfiedLinkError: could not load FFI provider jnr.ffi.provider.jffi.Provider: ExceptionInInitializerError: Can't overwrite cause with java.lang.UnsatisfiedLinkError: java.lang.UnsatisfiedLinkError: /private/var/folders/w2/j27f16yj7cvf_1cxbgqb89vh0000gn/T/jffi4972193792308935312.dylib: dlopen(/private/var/folders/w2/j27f16yj7cvf_1cxbgqb89vh0000gn/T/jffi4972193792308935312.dylib, 1): no suitable image found.  Did find:\n[ERROR]         /private/var/folders/w2/j27f16yj7cvf_1cxbgqb89vh0000gn/T/jffi4972193792308935312.dylib: no matching architecture in universal wrapper\n[ERROR]         /private/var/folders/w2/j27f16yj7cvf_1cxbgqb89vh0000gn/T/jffi4972193792308935312.dylib: no matching architecture in universal wrapper\n...\n")),(0,i.kt)("p",null,"Here is a temporary solution:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open a new shell, enter the following command, and use socat to route the unix socket to the tcp port"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"socat TCP-LISTEN:2375,range=127.0.0.1/32,reuseaddr,fork UNIX-CLIENT:/var/run/docker.sock\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set environment variables"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"export DOCKER_HOST=tcp://127.0.0.1:2375\n")))),(0,i.kt)("h3",{id:"build-the-examples-module"},"Build the examples module"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Build examples\n  if: env.SKIP_CI != 'true'\n  run: ./mvnw -B clean install -Pexample -Dmaven.javadoc.skip=true -Dmaven.test.skip=true -f ./shenyu-examples/pom.xml\n")),(0,i.kt)("p",null,"Considering the need for release, the current pom file in the project root directory does not contain the example submodule, so the examples module is additionally built in the above step."),(0,i.kt)("p",null,"Similar to the above, this line of command will also use the maven plugin to build an image for our subsequent docker orchestration."),(0,i.kt)("h3",{id:"build-custom-gateways"},"Build custom gateways"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Build integrated tests\n  if: env.SKIP_CI != 'true'\n  run: ./mvnw -B clean install -Pit -DskipTests -f ./shenyu-integrated-test/pom.xml\n")),(0,i.kt)("p",null,'In order to subdivide the integration tests of different functions of Apache ShenYu, we will build a gateway customized by the integration test module in this step. The so-called "customization" is to introduce the minimum required dependencies in the pom file, and then replace the default ',(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-bootstrap"),". Similar to the above two steps, this step will also build the docker image."),(0,i.kt)("p",null,"It is worth noting that the way of packaging and building here is slightly different from that of the ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-dist")," module, which you can find by comparing the pom file."),(0,i.kt)("h3",{id:"run-docker-compose"},"Run docker compose"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Start docker compose\n  if: env.SKIP_CI != 'true'\n  run: docker-compose -f ./shenyu-integrated-test/${{ matrix.case }}/docker-compose.yml up -d\n")),(0,i.kt)("p",null,"In this step, docker will be arranged according to the different ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," files written under the integration test module."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.9"\nservices:\n  shenyu-zk:\n    container_name: shenyu-zk\n    image: zookeeper:3.5\n    ...\n  shenyu-redis:\n    image: redis:6.0-alpine\n    container_name: shenyu-redis\n    ...\n\n  shenyu-examples-http:\n    deploy:\n      resources:\n        limits:\n          memory: 2048M\n    container_name: shenyu-examples-http\n    image: shenyu-examples-http:latest\n    ...\n\n  shenyu-admin:\n    image: apache/shenyu-admin:latest\n    container_name: shenyu-admin\n    ...\n\n  shenyu-integrated-test-http:\n    container_name: shenyu-integrated-test-http\n    image: apache/shenyu-integrated-test-http:latest\n    ...\n    depends_on:\n      shenyu-admin:\n        condition: service_healthy\n    healthcheck:\n      test: [ "CMD", "wget", "http://shenyu-integrated-test-http:9195/actuator/health" ]\n      timeout: 2s\n      retries: 30\n\nnetworks:\n  shenyu:\n    name: shenyu\n')),(0,i.kt)("p",null,"For example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," under the ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-integrated-test-http")," module starts zookeeper, redis, example, admin, gateway and other services in sequence. Among them, the mirrors of example, admin, and gateway are built by us before."),(0,i.kt)("p",null,"Among them, docker-compose uses depends_on to determine the topological relationship between services, and most services have corresponding health checks, and the next service will not be started until the health check passes."),(0,i.kt)("h3",{id:"run-the-health-check-and-wait-for-docker-compose-to-start"},"Run the health check and wait for docker-compose to start"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Wait for docker compose start up completely\n  if: env.SKIP_CI != 'true'\n  run: bash ./shenyu-integrated-test/${{ matrix.case }}/script/healthcheck.sh\n")),(0,i.kt)("p",null,"In this step, the host will run the ",(0,i.kt)("inlineCode",{parentName:"p"},"healthcheck.sh")," script, and then use the curl command to access the health status interface ",(0,i.kt)("inlineCode",{parentName:"p"},"/actuator/health")," of each service list (in the services.list file), until the service status is normal. will continue."),(0,i.kt)("h3",{id:"run-tests"},"run tests"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Run test\n  id: test\n  if: env.SKIP_CI != 'true'\n  run: ./mvnw test -Pit -f ./shenyu-integrated-test/${{ matrix.case }}/pom.xml\n  continue-on-error: true\n")),(0,i.kt)("p",null,"This step is to use the maven test command to execute the test classes in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/src/test/")," directory one by one."),(0,i.kt)("h3",{id:"view-docker-compose-logs"},"View Docker Compose logs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: Check test result\n  if: env.SKIP_CI != \'true\'\n  run: |\n    docker-compose -f ./shenyu-integrated-test/${{ matrix.case }}/docker-compose.yml logs --tail="all"\n    if [[ ${{steps.test.outcome}} == "failure" ]]; then\n      echo "Test Failed"\n      exit 1\n    else\n      echo "Test Successful"\n      exit 0\n    fi\n')),(0,i.kt)("p",null,"When there is an error in the workflow, the log of docker compose can help us to better troubleshoot the problem, so in this step, we will print the log of docker compose."))}p.isMDXComponent=!0}}]);