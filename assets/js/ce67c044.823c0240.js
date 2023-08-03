"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[75],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,f=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4416:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={id:"demos",title:"Demos",sidebar_label:"Demos"},o=void 0,i={unversionedId:"reference/getting-started/demos",id:"reference/getting-started/demos",title:"Demos",description:"We believe, the easiest way to get started with Piranha is to build upon the demos.",source:"@site/docs/reference/getting-started/demos.md",sourceDirName:"reference/getting-started",slug:"/reference/getting-started/demos",permalink:"/piranha/docs/reference/getting-started/demos",draft:!1,editUrl:"https://github.com/uber/piranha/tree/website/site/docs/reference/getting-started/demos.md",tags:[],version:"current",frontMatter:{id:"demos",title:"Demos",sidebar_label:"Demos"},sidebar:"docsSidebar",previous:{title:"Usage",permalink:"/piranha/docs/reference/getting-started/usage"},next:{title:"Graph Language",permalink:"/piranha/docs/reference/dsl/graphs"}},s={},u=[{value:"Stale Feature Flag Cleanup",id:"stale-feature-flag-cleanup",level:3},{value:"Match-only rules",id:"match-only-rules",level:3},{value:"Building upon the stale feature flag cleanup demo",id:"building-upon-the-stale-feature-flag-cleanup-demo",level:3}],p={toc:u},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We believe, the easiest way to get started with Piranha is to build upon the demos."),(0,r.kt)("p",null,"To setup the demo please follow the below steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/uber/piranha.git")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cd polyglot/piranha")),(0,r.kt)("li",{parentName:"ul"},"Create a virtual environment:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"python3 -m venv .env")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"source .env/bin/activate")))),(0,r.kt)("li",{parentName:"ul"},"Install Polyglot Piranha",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pip install --upgrade pip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pip install .")," to run demo against current source code (please install ",(0,r.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},"Rust"),", it takes less than a minute)"),(0,r.kt)("li",{parentName:"ul"},"Or, ",(0,r.kt)("inlineCode",{parentName:"li"},"pip install polyglot-piranha")," to run demos against the latest release.")))),(0,r.kt)("p",null,"Currently, we have demos for the following :"),(0,r.kt)("h3",{id:"stale-feature-flag-cleanup"},"Stale Feature Flag Cleanup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"run ",(0,r.kt)("inlineCode",{parentName:"li"},"python3 demo/stale_feature_flag_cleanup_demos.py"),". It will execute the scenarios listed under ",(0,r.kt)("a",{parentName:"li",href:"/demo/java/ff/configurations/rules.toml"},"demo/java/ff")," and ",(0,r.kt)("a",{parentName:"li",href:"/demo/kt/ff/configurations/rules.toml"},"demo/kt/ff"),". These scenarios use simple feature flag API."),(0,r.kt)("li",{parentName:"ul"},"In these demos the ",(0,r.kt)("inlineCode",{parentName:"li"},"configurations")," contain :",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rules.toml")," : expresses how to capture different feature flag APIs (",(0,r.kt)("inlineCode",{parentName:"li"},"isTreated"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"enum constant"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"piranha_arguments.toml")," : expresses the flag behavior, i.e. the flag name and whether it is treated or not. Basically the ",(0,r.kt)("inlineCode",{parentName:"li"},"substitutions")," provided in the ",(0,r.kt)("inlineCode",{parentName:"li"},"piranha_arguments.toml")," can be used to instantiate the rules ",(0,r.kt)("a",{parentName:"li",href:"#piranha-arguments"},"reference"),".")))),(0,r.kt)("h3",{id:"match-only-rules"},"Match-only rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"run ",(0,r.kt)("inlineCode",{parentName:"li"},"python3 demo/match_only_demos.py")),(0,r.kt)("li",{parentName:"ul"},"This demo also shows how the piranha summary output can be used.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rules.toml")," : express how to capture two patterns - (i) invocation of the method ",(0,r.kt)("inlineCode",{parentName:"li"},'fooBar("...")'),"  and invocation of the method ",(0,r.kt)("inlineCode",{parentName:"li"},'barFoo("...")')," (but only in non-static methods)")))),(0,r.kt)("h4",null,"  Structural Find/Replace "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"run ",(0,r.kt)("inlineCode",{parentName:"li"},"python3 demo/find_replace_demos.py")),(0,r.kt)("li",{parentName:"ul"},"This demo shows how to use Piranha as a simple structural find/replace tool (that optionally hooks up to built-in cleanup rules)")),(0,r.kt)("h4",null,"  Structural Find/Replace with Custom Cleanup "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"run ",(0,r.kt)("inlineCode",{parentName:"li"},"python3 demo/find_replace_custom_cleanup_demos.py")),(0,r.kt)("li",{parentName:"ul"},"This demo shows how to replace ",(0,r.kt)("inlineCode",{parentName:"li"},"new ArrayList<>()")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"Collections.emptyList()"),". Note it also adds the required import statement.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Please refer to our test cases at ",(0,r.kt)("a",{parentName:"em",href:"/test-resources/"},(0,r.kt)("inlineCode",{parentName:"a"},"/test-resources/<language>/"))," as a reference for handling complicated scenarios")),(0,r.kt)("h3",{id:"building-upon-the-stale-feature-flag-cleanup-demo"},"Building upon the stale feature flag cleanup demo"),(0,r.kt)("p",null,"First, check if Polyglot Piranha supports ",(0,r.kt)("em",{parentName:"p"},"Stale feature flag cleanup")," for the required language."),(0,r.kt)("p",null,"Then see if your API usage is similar to the ones shown in the demo (",(0,r.kt)("a",{parentName:"p",href:"/demo/java/configurations/rules.toml"},"java-demo"),") or in the test resources (",(0,r.kt)("a",{parentName:"p",href:"/test-resources/java/feature_flag_system_1/control/configurations/rules.toml"},"java-ff_system1"),", ",(0,r.kt)("a",{parentName:"p",href:"/test-resources/java/feature_flag_system_2/control/configurations/rules.toml"},"java-ff_system2"),", ",(0,r.kt)("a",{parentName:"p",href:"/test-resources/kotlin/feature_flag_system_1/control/configurations/rules.toml"},"kt-ff_system1"),", ",(0,r.kt)("a",{parentName:"p",href:"/test-resources/kotlin/feature_flag_system_2/control/configurations/rules.toml"},"kt-ff_system2"),")."),(0,r.kt)("p",null,"If not :|, try to adapt these examples to your requirements. Further, you can study the ",(0,r.kt)("a",{parentName:"p",href:"https://tree-sitter.github.io/tree-sitter/using-parsers#pattern-matching-with-queries"},"tree-sitter query documentation")," to understand how tree-sitter queries work. It is recommended to read the section- ",(0,r.kt)("a",{parentName:"p",href:"#adding-support-for-a-new-feature-flag-system"},"Adding support for a new feature flag system")),(0,r.kt)("p",null,"Then adapt the ",(0,r.kt)("a",{parentName:"p",href:"/demo/java/configurations/piranha_arguments.toml"},"argument file")," as per your requirements. For instance, you may want to update the value corresponding to the ",(0,r.kt)("inlineCode",{parentName:"p"},"@stale_flag_name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@treated"),". If your rules do not contain require other tags feel free to remove them from your arguments file. In most cases ",(0,r.kt)("a",{parentName:"p",href:"/src/cleanup_rules/java/edges.toml"},"edges file")," is not required, unless your feature flag system API rules are inter-dependent."),(0,r.kt)("p",null,"More details for configuring Piranha - ",(0,r.kt)("a",{parentName:"p",href:"#adding-support-for-a-new-feature-flag-system"},"Adding support for a new feature flag system"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"#adding-cleanup-rules"},"Adding Cleanup Rules"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"One can similarly build upon the other demos too.")))}d.isMDXComponent=!0}}]);