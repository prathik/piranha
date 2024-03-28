"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[834],{5680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>f});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,f=c["".concat(l,".").concat(d)]||c[d]||g[d]||i;return t?n.createElement(f,o(o({ref:r},u),{},{components:t})):n.createElement(f,o({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5990:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=t(8168),a=(t(6540),t(5680));const i={id:"vis",title:"Visualizing rules",sidebar_label:"Visualizing rules"},o=void 0,s={unversionedId:"reference/vis",id:"reference/vis",title:"Visualizing rules",description:"Visualizing rules, groups and their edges through a graph is a great way to understand how Piranha Polyglot works.",source:"@site/docs/reference/vis.md",sourceDirName:"reference",slug:"/reference/vis",permalink:"/piranha/docs/reference/vis",draft:!1,editUrl:"https://github.com/uber/piranha/tree/website/site/docs/reference/vis.md",tags:[],version:"current",frontMatter:{id:"vis",title:"Visualizing rules",sidebar_label:"Visualizing rules"},sidebar:"docsSidebar",previous:{title:"Refactoring",permalink:"/piranha/docs/reference/playground/refactor"},next:{title:"Languages supported",permalink:"/piranha/docs/reference/languages"}},l={},p=[],u={toc:p},c="wrapper";function g(e){let{components:r,...t}=e;return(0,a.yg)(c,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Visualizing rules, groups and their edges through a graph is a great way to understand how Piranha Polyglot works."),(0,a.yg)("p",null,"We use ",(0,a.yg)("a",{parentName:"p",href:"https://graphviz.org/"},"Graphviz")," to generate a .dot file and a .svg image generated by ",(0,a.yg)("inlineCode",{parentName:"p"},"visualize_rules_graph.py"),".\nPlease follow the instructions to install Graphviz at ",(0,a.yg)("a",{parentName:"p",href:"https://graphviz.org/download/"},"https://graphviz.org/download/"),".\nMoreover, the script also needs the ",(0,a.yg)("inlineCode",{parentName:"p"},"toml")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"graphviz")," python packages."),(0,a.yg)("p",null,"The script takes as first argument a path for the generated .dot file.\nThe following arguments are paths for directories containing ",(0,a.yg)("inlineCode",{parentName:"p"},"rules.toml")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"edges.toml")," files.\nOptionally, you can provide a ",(0,a.yg)("inlineCode",{parentName:"p"},"--title")," argument to give a title to the generated graph.\nTo generate the .dot file and the .svg image used in this README (assuming a Python venv and a valid Graphviz installation):"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'pip install toml\npip install graphviz\npython visualize_rules_graph.py ./java_prebuilt_rules.dot src/cleanup_rules/java --title "Java pre-built cleanup rules"\n')),(0,a.yg)("p",null,"To generate an image for ",(0,a.yg)("a",{parentName:"p",href:"test-resources/java/feature_flag_system_1/control/configurations/"},"java-ff_system1")," in our tests:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'python visualize_rules_graph.py ./java-ff_system1.dot src/cleanup_rules/java test-resources/java/feature_flag_system_1/control/configurations --title "Java Test Feature Flag Cleanup System 1"\n')))}g.isMDXComponent=!0}}]);