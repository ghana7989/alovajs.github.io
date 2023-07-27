"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[2151],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),i=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(a),m=r,v=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(v,l(l({ref:t},c),{},{components:a})):n.createElement(v,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),o=a(6010),l=a(2466),s=a(6550),u=a(1980),i=a(7392),c=a(12);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,i]=v({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=u??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),h(e)}),[i,h,o]),tabValues:o}}var k=a(2389);const f="tabList__CuJ",b="tabItem_LNqP";function g(e){let{className:t,block:a,selectedValue:s,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=i[a].value;n!==s&&(p(t),u(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":s===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},7232:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),o=a(4866),l=a(5162);const s={title:"\u5feb\u901f\u5165\u95e8",sidebar_position:50},u=void 0,i={unversionedId:"tutorial/get-started/quick-start",id:"tutorial/get-started/quick-start",title:"\u5feb\u901f\u5165\u95e8",description:"1. \u5982\u679c\u4f60\u8fd8\u672a\u4e86\u89e3 alova\uff0c\u5f3a\u70c8\u63a8\u8350\u4f60\u5148\u9605\u8bfb alova \u6982\u8ff0\u90e8\u5206\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/01-get-started/03-quick-start.md",sourceDirName:"tutorial/01-get-started",slug:"/tutorial/get-started/quick-start",permalink:"/zh-CN/tutorial/get-started/quick-start",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/01-get-started/03-quick-start.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"\u5feb\u901f\u5165\u95e8",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"\u8bf7\u6c42\u573a\u666f\u6a21\u578b\uff08RSM\uff09",permalink:"/zh-CN/tutorial/get-started/RSM"},next:{title:"Examples",permalink:"/zh-CN/category/examples"}},c={},p=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528 useRequest \u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42",id:"\u4f7f\u7528-userequest-\u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42",level:2},{value:"use hook \u7684\u4f7f\u7528\u89c4\u8303",id:"use-hook-\u7684\u4f7f\u7528\u89c4\u8303",level:3},{value:"\u4f7f\u7528 method \u5b9e\u4f8b\u53d1\u9001\u8bf7\u6c42",id:"\u4f7f\u7528-method-\u5b9e\u4f8b\u53d1\u9001\u8bf7\u6c42",level:2},{value:"\u5728\u9759\u6001 html \u4e2d\u4f7f\u7528",id:"\u5728\u9759\u6001-html-\u4e2d\u4f7f\u7528",level:2},{value:"\u63a5\u4e0b\u6765\u8981\u505a\u4ec0\u4e48\uff1f",id:"\u63a5\u4e0b\u6765\u8981\u505a\u4ec0\u4e48",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"\u793a\u4f8b\u63d0\u793a",type:"tip"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u8fd8\u672a\u4e86\u89e3 alova\uff0c\u5f3a\u70c8\u63a8\u8350\u4f60\u5148\u9605\u8bfb ",(0,r.kt)("a",{parentName:"li",href:"../get-started/overview"},"alova \u6982\u8ff0\u90e8\u5206"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u60f3\u5148\u5c1d\u8bd5\u4e00\u4e0b\u5417\uff1f\u53ef\u4ee5 ",(0,r.kt)("a",{parentName:"li",href:"../example/init-page"},"\u70b9\u6b64")," \u5c1d\u8bd5\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff01"))),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"1",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install alova --save\n"))),(0,r.kt)(l.Z,{value:"2",label:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add alova\n")))),(0,r.kt)("p",null,"alova \u7ed3\u5408 UI \u6846\u67b6\uff0c\u8ba9\u8bf7\u6c42\u53d8\u5f97\u66f4\u7b80\u5355\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 alova \u63d0\u4f9b\u7684",(0,r.kt)("strong",{parentName:"p"},"use hook"),"\u53d1\u8d77\u8bf7\u6c42\uff0c\u5b83\u5c06\u8fd4\u56de\u4f8b\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"loading"),"\u7b49\u591a\u4e2a\u8bf7\u6c42\u76f8\u5173\u7684\u72b6\u6001\u5316\u6570\u636e\uff0c\u5e76\u5728 alova \u4e2d\u81ea\u52a8\u7ba1\u7406\u5b83\u4eec\uff0c\u800c\u65e0\u9700\u81ea\u5df1\u7ef4\u62a4\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528 alova \u65f6\uff0c\u8bf7\u786e\u4fdd UI \u6846\u67b6\u7b26\u5408\u4ee5\u4e0b\u7248\u672c\u8981\u6c42\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"React: >= v16.8"),(0,r.kt)("li",{parentName:"ol"},"Vue: 2.7\u30013.x"),(0,r.kt)("li",{parentName:"ol"},"Svelte: \u4efb\u610f")),(0,r.kt)("h2",{id:"\u4f7f\u7528-userequest-\u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42"},"\u4f7f\u7528 useRequest \u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42"),(0,r.kt)("p",null,"\u9996\u5148\u521b\u5efa\u4e00\u4e2a alova \u5b9e\u4f8b\uff0c\u5e76\u4f7f\u7528\u8fd9\u4e2a\u5b9e\u4f8b\u521b\u5efa\u5bf9\u5e94\u7684 method\uff0c\u628a\u5b83\u4f20\u7ed9 useRequest \u5373\u53ef\u3002"),(0,r.kt)(o.Z,{groupId:"framework",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <div v-if=\"loading\">Loading...</div>\n  <div v-else-if=\"error\">{{ error.message }}</div>\n  <span v-else>responseData: {{ data }}</span>\n</template>\n\n<script setup>\n  import { createAlova, useRequest } from 'alova';\n  import GlobalFetch from 'alova/GlobalFetch';\n  import VueHook from 'alova/vue';\n\n  // 1. \u521b\u5efaalova\u5b9e\u4f8b\n  const alovaInstance = createAlova({\n    // VueHook\u7528\u4e8e\u521b\u5efaref\u72b6\u6001\uff0c\u5305\u62ec\u8bf7\u6c42\u72b6\u6001loading\u3001\u54cd\u5e94\u6570\u636edata\u3001\u8bf7\u6c42\u9519\u8bef\u5bf9\u8c61error\u7b49\n    statesHook: VueHook,\n\n    // \u8bf7\u6c42\u9002\u914d\u5668\uff0c\u63a8\u8350\u4f7f\u7528fetch\u8bf7\u6c42\u9002\u914d\u5668\n    requestAdapter: GlobalFetch(),\n\n    // \u5168\u5c40\u7684\u54cd\u5e94\u62e6\u622a\u5668\n    responded: response => response.json()\n  });\n\n  // 2. \u4f7f\u7528alova\u5b9e\u4f8b\u521b\u5efamethod\u5e76\u4f20\u7ed9useRequest\u5373\u53ef\u53d1\u9001\u8bf7\u6c42\n  const { loading, data, error } = useRequest(\n    alovaInstance.Get('https://api.alovajs.org/profile', {\n      params: {\n        id: 1\n      }\n    })\n  );\n<\/script>\n"))),(0,r.kt)(l.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { createAlova, useRequest } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nimport ReactHook from 'alova/react';\n\n// 1. \u521b\u5efaalova\u5b9e\u4f8b\nconst alovaInstance = createAlova({\n  // ReactHook\u7528\u4e8e\u521b\u5efaref\u72b6\u6001\uff0c\u5305\u62ec\u8bf7\u6c42\u72b6\u6001loading\u3001\u54cd\u5e94\u6570\u636edata\u3001\u8bf7\u6c42\u9519\u8bef\u5bf9\u8c61error\u7b49\n  statesHook: ReactHook,\n\n  // \u8bf7\u6c42\u9002\u914d\u5668\uff0c\u63a8\u8350\u4f7f\u7528fetch\u8bf7\u6c42\u9002\u914d\u5668\n  requestAdapter: GlobalFetch(),\n\n  // \u5168\u5c40\u7684\u54cd\u5e94\u62e6\u622a\u5668\n  responded: response => response.json()\n});\n\nconst app = () => {\n  // 2. \u4f7f\u7528alova\u5b9e\u4f8b\u521b\u5efamethod\u5e76\u4f20\u7ed9useRequest\u5373\u53ef\u53d1\u9001\u8bf7\u6c42\n  const { loading, data, error } = useRequest(\n    alovaInstance.Get('https://api.alovajs.org/profile', {\n      params: {\n        id: 1\n      }\n    })\n  );\n\n  if (loading) {\n    return <div>Loading...</div>;\n  } else if (error) {\n    return <div>{error.message}</div>;\n  }\n  return (\n    <>\n      <span>responseData: {JSON.stringify(data)}</span>\n    </>\n  );\n};\n"))),(0,r.kt)(l.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  import { createAlova, useRequest } from 'alova';\n  import GlobalFetch from 'alova/GlobalFetch';\n  import SvelteHook from 'alova/svelte';\n\n  // 1. \u521b\u5efaalova\u5b9e\u4f8b\n  const alovaInstance = createAlova({\n    // SvelteHook\u7528\u4e8e\u521b\u5efaref\u72b6\u6001\uff0c\u5305\u62ec\u8bf7\u6c42\u72b6\u6001loading\u3001\u54cd\u5e94\u6570\u636edata\u3001\u8bf7\u6c42\u9519\u8bef\u5bf9\u8c61error\u7b49\n    statesHook: SvelteHook,\n\n    // \u8bf7\u6c42\u9002\u914d\u5668\uff0c\u63a8\u8350\u4f7f\u7528fetch\u8bf7\u6c42\u9002\u914d\u5668\n    requestAdapter: GlobalFetch(),\n\n    // GlobalFetch\u9002\u914d\u5668\u5c06\u4f1a\u8fd4\u56deResponse\u5b9e\u4f8b\uff0c\n    // \u4f60\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a\u5168\u5c40\u7684\u54cd\u5e94\u62e6\u622a\u5668\u8fd4\u56dejson\u6570\u636e\n    responded: response => response.json()\n  });\n\n  // 2. \u4f7f\u7528alova\u5b9e\u4f8b\u521b\u5efamethod\u5e76\u4f20\u7ed9useRequest\u5373\u53ef\u53d1\u9001\u8bf7\u6c42\n  const { loading, data, error } = useRequest(\n    alovaInstance.Get('https://api.alovajs.org/profile', {\n      params: {\n        id: 1\n      }\n    })\n  );\n<\/script>\n{#if $loading}\n<div>Loading...</div>\n{:else if $error}\n<div>{ $error.message }</div>\n{:else}\n<span>responseData: {{ data }}</span>\n{/if}\n")))),(0,r.kt)("h3",{id:"use-hook-\u7684\u4f7f\u7528\u89c4\u8303"},"use hook \u7684\u4f7f\u7528\u89c4\u8303"),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0cuseRequest \u7684\u4f7f\u7528\u9700\u8981\u7b26\u5408 use hook \u4f7f\u7528\u89c4\u5219\uff0c\u5373\u53ea\u80fd\u5728\u51fd\u6570\u6700\u5916\u5c42\u8c03\u7528\u3002\u274c\u274c\u274c \u4e0d\u63a8\u8350\u5728\u5728\u5faa\u73af\u3001\u6761\u4ef6\u5224\u65ad\u6216\u8005\u5b50\u51fd\u6570\u4e2d\u8c03\u7528\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\u4ee5\u4e0b\u5728 click \u56de\u8c03\u4e2d\u7684\u4f7f\u7528\u793a\u4f8b\uff0c\u5728\u56de\u8c03\u51fd\u6570\u4e2d\u4f7f\u7528\u65f6\uff0c\u867d\u7136\u53ef\u4ee5\u6b63\u5e38\u53d1\u8d77\u8bf7\u6c42\uff0c\u4f46 use hook \u8fd4\u56de\u7684\u54cd\u5e94\u5f0f\u6570\u636e\u65e0\u6cd5\u5728\u89c6\u56fe\u4e2d\u4f7f\u7528\uff0c\u5faa\u73af\u548c\u6761\u4ef6\u5224\u65ad\u4e2d\u4f7f\u7528\u4e5f\u662f\u5982\u6b64\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u274c bad\nconst handleClick = () => {\n  const { loading, data } = useRequest(getter);\n};\n\n// -------\n// \u2705 good\nconst { loading, data, send } = useRequest(getter, {\n  immediate: false\n});\nconst handleClick = () => {\n  send();\n};\n")),(0,r.kt)("h2",{id:"\u4f7f\u7528-method-\u5b9e\u4f8b\u53d1\u9001\u8bf7\u6c42"},"\u4f7f\u7528 method \u5b9e\u4f8b\u53d1\u9001\u8bf7\u6c42"),(0,r.kt)("p",null,"use hook \u53ea\u80fd\u7528\u4e8e\u7ec4\u4ef6\u5185\u53d1\u9001\u8bf7\u6c42\uff0c\u5728\u7ec4\u4ef6\u5916\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 method \u5b9e\u4f8b\u76f4\u63a5\u53d1\u9001\u8bf7\u6c42\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const response = await alovaInstance.Get('https://api.alovajs.org/profile?id=1').send();\n")),(0,r.kt)("p",null,"\u66f4\u591a\u5173\u4e8e method \u5b9e\u4f8b\u53d1\u9001\u8bf7\u6c42\u7684\u5185\u5bb9\uff0c\u8bf7\u524d\u5f80",(0,r.kt)("a",{parentName:"p",href:"../next-step/send-request-directly"},"\u4f7f\u7528 method \u5b9e\u4f8b\u53d1\u9001\u8bf7\u6c42"),"\u9605\u8bfb\u3002"),(0,r.kt)("p",null,"\u5173\u4e8e\u5728\u4f55\u65f6\u4f7f\u7528 useRequest \u53d1\u9001\u8bf7\u6c42\uff0c\u4f55\u65f6\u4f7f\u7528 method \u5b9e\u4f8b\u53d1\u9001\u8bf7\u6c42\uff0c\u8bf7\u79fb\u6b65\u9605\u8bfb\u8fd9\u8fb9\u7684",(0,r.kt)("a",{parentName:"p",href:"../best-practice/skills"},"\u6700\u4f73\u5b9e\u8df5"),"\u3002"),(0,r.kt)("h2",{id:"\u5728\u9759\u6001-html-\u4e2d\u4f7f\u7528"},"\u5728\u9759\u6001 html \u4e2d\u4f7f\u7528"),(0,r.kt)("p",null,"\u9664\u4e86\u4f7f\u7528 esModule \u7684\u65b9\u5f0f\u5b89\u88c5 alova \u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"<script>"),"\u6807\u7b7e\u7684\u65b9\u5f0f\u4f7f\u7528 alova\u3002"),(0,r.kt)(o.Z,{groupId:"framework",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <script src="https://unpkg.com/alova/dist/alova.umd.min.js"><\/script>\n    <script src="https://unpkg.com/alova/dist/adapter/globalfetch.umd.min.js"><\/script>\n    <script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>\n    \x3c!-- vuehook\u4f9d\u8d56 vue\uff0c\u56e0\u6b64\u9700\u5148\u5f15\u5165 vue --\x3e\n    <script src="https://unpkg.com/alova/dist/hooks/vuehook.umd.min.js"><\/script>\n    <script>\n      const alovaInstance = window.alova.createAlova({\n        baseURL: \'https://api.alovajs.org\',\n        statesHook: window.VueHook,\n        requestAdapter: window.GlobalFetch()\n      });\n      // ...\n    <\/script>\n  </head>\n  <body>\n    \x3c!-- ... --\x3e\n  </body>\n</html>\n'))),(0,r.kt)(l.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <script src="https://unpkg.com/alova/dist/alova.umd.min.js"><\/script>\n    <script src="https://unpkg.com/alova/dist/adapter/globalfetch.umd.min.js"><\/script>\n    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>\n    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>\n    \x3c!-- reacthook\u4f9d\u8d56 react\uff0c\u56e0\u6b64\u9700\u5148\u5f15\u5165 react \u548c react-dom --\x3e\n    <script src="https://unpkg.com/alova/dist/hooks/reacthook.umd.min.js"><\/script>\n    <script>\n      const alovaInstance = window.alova.createAlova({\n        baseURL: \'https://api.alovajs.org\',\n        statesHook: window.ReactHook,\n        requestAdapter: window.GlobalFetch()\n      });\n      // ...\n    <\/script>\n  </head>\n  <body>\n    \x3c!-- ... --\x3e\n  </body>\n</html>\n'))),(0,r.kt)(l.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"svelte \u4f9d\u8d56\u4e8e\u7f16\u8bd1\u5de5\u5177\uff0c\u4e0d\u80fd\u901a\u8fc7 CDN \u76f4\u63a5\u4f7f\u7528\uff0c\u8be6\u60c5\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"https://svelte.dev/"},"svelte.dev"))))),(0,r.kt)("h2",{id:"\u63a5\u4e0b\u6765\u8981\u505a\u4ec0\u4e48"},"\u63a5\u4e0b\u6765\u8981\u505a\u4ec0\u4e48\uff1f"),(0,r.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u8fd9\u53ea\u662f\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u793a\u4f8b\u4ee3\u7801\uff0c\u4f46 alova \u8fd8\u5305\u62ec\u5982\u8bf7\u6c42\u548c\u54cd\u5e94\u62e6\u622a\u5668\u3001\u7f13\u5b58\u548c\u72b6\u6001\u7ba1\u7406\u3001\u591a\u4e2a\u6838\u5fc3 use hook \u7b49\u4e30\u5bcc\u7684\u529f\u80fd\uff0c\u6211\u4eec\u5c06\u5728\u540e\u7eed\u7684\u7ae0\u8282\u4e2d\u9610\u8ff0\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u8981\u66f4\u597d\u5730\u7ba1\u7406\u4f60\u7684\u8bf7\u6c42\u4ee3\u7801\uff0c\u8fd9\u91cc\u6709\u4e00\u4e2a ",(0,r.kt)("a",{parentName:"p",href:"../best-practice/method-manage"},"method \u7ba1\u7406")," \u7684\u6700\u4f73\u5b9e\u8df5\uff0c\u5f85\u4f60\u79fb\u6b65\u53bb\u9605\u8bfb\u3002"))}m.isMDXComponent=!0}}]);