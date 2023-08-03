"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[984],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9117:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={id:"graphs",label:"Graph Language",title:"Graph Language"},i=void 0,l={unversionedId:"reference/dsl/graphs",id:"reference/dsl/graphs",title:"Graph Language",description:"Piranha Polyglot uses a domain-specific language (DSL) to specify program transformations. The DSL is used to define rules, scopes, and edges between rules.",source:"@site/docs/reference/dsl/graphs.md",sourceDirName:"reference/dsl",slug:"/reference/dsl/graphs",permalink:"/piranha/docs/reference/dsl/graphs",draft:!1,editUrl:"https://github.com/uber/piranha/tree/website/site/docs/reference/dsl/graphs.md",tags:[],version:"current",frontMatter:{id:"graphs",label:"Graph Language",title:"Graph Language"},sidebar:"docsSidebar",previous:{title:"Demos",permalink:"/piranha/docs/reference/getting-started/demos"},next:{title:"Rule Languages",permalink:"/piranha/docs/reference/dsl/rules"}},s={},p=[{value:"Rules",id:"rules",level:2},{value:"Edges",id:"edges",level:2},{value:"Scopes",id:"scopes",level:2}],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Piranha Polyglot uses a domain-specific language (DSL) to specify program transformations. The DSL is used to define rules, scopes, and edges between rules.\nYou either build rules using TOML are defined using TOML (Tom's Obvious, Minimal Language) or the Python API."),(0,a.kt)("h2",{id:"rules"},"Rules"),(0,a.kt)("p",null,"Individual edits are represented as rules in Polyglot Piranha. Each rule represents a transformation that identifies and modifies specific code snippets.\nA rule should contain at least one rule with the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"query"),": A query to find the code pattern to refactor (currently only tree-sitter queries and regex are supported)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"replace_node"),": The captured node in the query that will be replaced."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"replace_string"),": Replacement string or pattern for the refactored code."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"holes"),": Placeholders in your queries that will be instantiated at runtime."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"is_seed_rule"),": Specifies whether this rule is an entry point for the rule graph.")),(0,a.kt)("p",null,"Optionally, a rule can have filters. Piranha supports two kinds of filters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"enclosing_node"),": A pattern that specifies the enclosing node of the rule."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"not_enclosing_node"),": A pattern that should not match any parent of the main match.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"enclosing_node")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"not_enclosing_node")," filters can be refined using contains with specified ",(0,a.kt)("inlineCode",{parentName:"p"},"[at_least, at_most]")," bounds, as well as ",(0,a.kt)("inlineCode",{parentName:"p"},"not_contains"),"."),(0,a.kt)("p",null,"Example of a rule in TOML:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[[rules]]\nname = "your_rule_name"\nquery = """(\n    (method_invocation name: (_) @name\n                       arguments: (argument_list) @args) @invk\n    (#eq? @name @hole1))\n"""\nreplace_node = "invk"\nreplace = "X.other_string @args"\nholes = ["hole1"]\nis_seed_rule = true\n\n[[rules.filters]]\nenclosing_node = "(your_enclosing_node_pattern) @your_capture_name"\nnot_contains = [\n    """(\n    (identifier) @id\n    (#eq? @id "x"))\n    """,\n]\n\n[[rules.filters]]\nenclosing_node = "(your_enclosing_node_pattern) @your_capture_name"\ncontains =\n    """(\n    (identifier) @other_id\n    (#eq? @other_id "y"))\n    """\nat_least = 1\nat_most = 5\n')),(0,a.kt)("h2",{id:"edges"},"Edges"),(0,a.kt)("p",null,"Edges in Polyglot Piranha allow rules to depend on each other, establishing a hierarchy or sequence of application among rules. An edge essentially describes the direction of dependency between two or more rules. It signifies that a particular rule (",(0,a.kt)("inlineCode",{parentName:"p"},"from"),") is based on, or derives information from, one or more other rules (",(0,a.kt)("inlineCode",{parentName:"p"},"to"),").\nEdges are also represented in the TOML format."),(0,a.kt)("p",null,"Example edges in TOML:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[[edges]]\nscope = "Method"\nfrom = "your_rule_name"\nto = ["other_rule_name", "another_rule_name"]\n\n[[edges]]\nscope = "Method"\nfrom = "other_rule_name"\nto = ["your_rule_name"]\n')),(0,a.kt)("h2",{id:"scopes"},"Scopes"))}d.isMDXComponent=!0}}]);