"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[5075],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||n;return r?a.createElement(f,l(l({ref:t},s),{},{components:r})):a.createElement(f,l({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<n;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3894:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294);const o=e=>{let{src:t}=e;return a.createElement("iframe",{src:t,style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},8111:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var a=r(7462),o=r(7294),n=r(3905),l=r(3894);const i=()=>o.createElement(l.Z,{src:"https://codesandbox.io/p/sandbox/github/alovajs/alova-examples/tree/main/packages/storage-placeholder?embed=1&file=%2Fsrc%2FApp.vue"}),p={title:"\u54cd\u5e94\u7f13\u5b58-\u7f13\u5b58\u5360\u4f4d\u6a21\u5f0f",sidebar_position:50},c=void 0,s={unversionedId:"tutorial/example/storage-placeholder",id:"tutorial/example/storage-placeholder",title:"\u54cd\u5e94\u7f13\u5b58-\u7f13\u5b58\u5360\u4f4d\u6a21\u5f0f",description:"\u793a\u4f8b\u4ee5 vue3 \u4e3a\u4f8b\uff0c\u4f46\u4f60\u8fd8\u53ef\u4ee5\u5728 react\u3001svelte \u4e2d\u4f7f\u7528 alova\uff0c\u8be6\u7ec6\u8bf7\u9605\u8bfb \u5165\u95e8\u6307\u5357;",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/02-example/05-storage-placeholder.md",sourceDirName:"tutorial/02-example",slug:"/tutorial/example/storage-placeholder",permalink:"/zh-CN/tutorial/example/storage-placeholder",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/02-example/05-storage-placeholder.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"\u54cd\u5e94\u7f13\u5b58-\u7f13\u5b58\u5360\u4f4d\u6a21\u5f0f",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"\u54cd\u5e94\u7f13\u5b58-\u5185\u5b58\u6a21\u5f0f",permalink:"/zh-CN/tutorial/example/memory-cache"},next:{title:"\u54cd\u5e94\u7f13\u5b58-\u6062\u590d\u6a21\u5f0f",permalink:"/zh-CN/tutorial/example/storage-restore"}},u={},m=[],d={toc:m};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u793a\u4f8b\u4ee5 vue3 \u4e3a\u4f8b\uff0c\u4f46\u4f60\u8fd8\u53ef\u4ee5\u5728 react\u3001svelte \u4e2d\u4f7f\u7528 alova\uff0c\u8be6\u7ec6\u8bf7\u9605\u8bfb ",(0,n.kt)("a",{parentName:"p",href:"../get-started/overview"},"\u5165\u95e8\u6307\u5357"),";")),(0,n.kt)(i,{mdxType:"StoragePlaceholder"}),(0,n.kt)("admonition",{title:"\u793a\u4f8b\u8bf4\u660e",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u7f13\u5b58\u5360\u4f4d\u6a21\u5f0f\u662f\u5c06\u54cd\u5e94\u6570\u636e\u6301\u4e45\u5316\uff0c\u5b83\u5c06\u5728\u5237\u65b0\u9875\u9762\u540e\u7acb\u5373\u66f4\u65b0\u5230 data state \u4e2d\u4f5c\u4e3a\u5360\u4f4d\u6570\u636e\uff0c\u540c\u65f6\u53d1\u9001\u8bf7\u6c42\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u5728\u54cd\u5e94\u524d\u4f7f\u7528\u5360\u4f4d\u6570\u636e\u66ff\u4ee3 Loading \u72b6\u6001\u3002"),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("em",{parentName:"p"},"\u64cd\u4f5c\u5f15\u5bfc\uff1a")),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"Reload page"),"\u5237\u65b0\u9875\u9762\uff0c\u4f60\u4e0d\u518d\u770b\u5230 Loading \u72b6\u6001\uff0c\u800c\u662f\u65e7\u6570\u636e\u88ab\u6e32\u67d3\u51fa\u6765\u4e86\uff0c\u4e14\u5f53\u8bf7\u6c42\u54cd\u5e94\u540e\u88ab\u66ff\u6362\u4e3a\u65b0\u6570\u636e\uff1b"),(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"Invalidate the data of placeholder"),"\u8ba9\u7f13\u5b58\u6570\u636e\u5931\u6548\uff0c\u6b64\u65f6\u4f60\u5c06\u91cd\u65b0\u770b\u5230 Loading \u72b6\u6001\uff1b"))))}f.isMDXComponent=!0}}]);