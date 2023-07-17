"use strict";(self.webpackChunkfl0_docs=self.webpackChunkfl0_docs||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,y=u["".concat(p,".").concat(f)]||u[f]||s[f]||i;return r?n.createElement(y,a(a({ref:t},d),{},{components:r})):n.createElement(y,a({ref:t},d))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:1,slug:"/"},a="Introduction",c={unversionedId:"intro",id:"intro",title:"Introduction",description:"What is FL0?",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/fl0zone/fl0-docs/tree/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"docsSidebar",next:{title:"Getting Started",permalink:"/docs/getting-started"}},p={},l=[{value:"What is FL0?",id:"what-is-fl0",level:2}],d={toc:l},u="wrapper";function s(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("h2",{id:"what-is-fl0"},"What is FL0?"),(0,o.kt)("p",null,"FL0 is a platform that makes it really simple to deploy your code as a web service.\nFL0 can build your code into a container using one of two methods:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Building a Dockerfile that you provide in your repo"),(0,o.kt)("li",{parentName:"ol"},"By automatically detecting your codebase")),(0,o.kt)("p",null,"Once built, we deploy it to your Dev environment on FL0 and provide you with a unique URL.\nNext time you push a change to your repo, we repeat the process automatically or manually depending on your chosen settings."),(0,o.kt)("mermaid",{value:"flowchart LR\n    code[Your code]\n    git[Git repo]\n    code --\x3e|push|git\n    git --\x3e|deploy| dev\n    subgraph workspace [FL0 Workspace]\n        subgraph project [Project]\n            direction LR\n            dev[FL0 Dev]\n            prod[FL0 Prod]\n            dev --\x3e|promote| prod\n            subgraph dev [Dev]\n                direction TB\n                devApp[App]\n                devDb[DB]\n                devApp -.-> devDb\n            end\n            subgraph prod [Prod]\n                direction TB\n                prodApp[App]\n                prodDb[DB]\n                prodApp -.-> prodDb\n            end\n        end\n    end"}))}s.isMDXComponent=!0}}]);