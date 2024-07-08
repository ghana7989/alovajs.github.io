"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[2882],{57420:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=a(85893),r=a(11151),o=a(74866),s=a(85162);const l={title:"Storage Adapter"},c=void 0,u={id:"tutorial/advanced/custom/storage-adapter",title:"Storage Adapter",description:"alova provides a comprehensive multi-level cache function, and the following caches are used by default",source:"@site/docs/tutorial/06-advanced/02-custom/02-storage-adapter.md",sourceDirName:"tutorial/06-advanced/02-custom",slug:"/tutorial/advanced/custom/storage-adapter",permalink:"/next/tutorial/advanced/custom/storage-adapter",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/06-advanced/02-custom/02-storage-adapter.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Storage Adapter"},sidebar:"tutorial",previous:{title:"Request Adapter",permalink:"/next/tutorial/advanced/custom/http-adapter"},next:{title:"Client Strategy",permalink:"/next/tutorial/advanced/custom/client-strategy"}},i={},d=[{value:"SessionStorage Storage Adapter Example",id:"sessionstorage-storage-adapter-example",level:2}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"alova provides a comprehensive multi-level cache function, and the following caches are used by default"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"L1 cache: both the client and the server save in the form of object key-value"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["L2 cache: the client uses ",(0,n.jsx)(t.code,{children:"localStorage"})," to store, and the server does not provide an L2 adapter"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In certain situations, you may need to customize different storage adapters. Customizing storage adapters is also very simple. You only need to specify functions for saving data, getting data, and removing data."}),"\n",(0,n.jsxs)(o.Z,{children:[(0,n.jsxs)(s.Z,{value:"1",label:"object",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"const customStorageAdapter = {\n  set(key, value) {\n    // Save data, value is structured data, you can call JSON.stringify to convert it to a string\n  },\n  get(key) {\n    // Get data, you need to return structured data, you can call JSON.parse to convert it to an object\n  },\n  remove(key) {\n    // Remove data\n  },\n  clear() {\n    // Clear data\n  }\n};\n"})}),(0,n.jsx)(t.p,{children:"Use a custom adapter."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"const alovaInstance = createAlova({\n  // ...\n  l1Cache: customStorageAdapter, // l1 cache\n  l2Cache: customStorageAdapter // l2 cache\n});\n"})})]}),(0,n.jsxs)(s.Z,{value:"2",label:"class",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import { AlovaGlobalCacheAdapter } from 'alova';\n\nclass CustomStorageAdapter implements AlovaGlobalCacheAdapter {\n  set(key, value) {\n    // Save data, value is structured data, you can call JSON.stringify to convert it to a string\n  }\n  get(key) {\n    // Get data, you need to return structured data, you can call JSON.parse to convert it to an object\n  }\n  remove(key) {\n    // Remove data\n  }\n  clear() {\n    // Clear data\n  }\n}\n"})}),(0,n.jsx)(t.p,{children:"Use a custom adapter."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"const alovaInstance = createAlova({\n  // ...\n  l1Cache: new CustomStorageAdapter(), // l1 cache\n  l2Cache: new CustomStorageAdapter() // l2 cache\n});\n"})})]})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["For more information about response caching, please refer to ",(0,n.jsx)(t.a,{href:"/next/tutorial/cache/mode",children:"Detailed of Cache"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"sessionstorage-storage-adapter-example",children:"SessionStorage Storage Adapter Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"const sessionStorageAdapter = {\n  set(key, value) {\n    sessionStorage.setItem(key, JSON.stringify(value));\n  },\n  get(key) {\n    const data = sessionStorage.getItem(key);\n    return data ? JSON.parse(data) : data;\n  },\n  remove(key) {\n    sessionStorage.removeItem(key);\n  },\n  clear() {\n    sessionStorage.clear();\n  }\n};\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},85162:(e,t,a)=>{a.d(t,{Z:()=>s});a(67294);var n=a(90512);const r={tabItem:"tabItem_Ymn6"};var o=a(85893);function s(e){let{children:t,hidden:a,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,s),hidden:a,children:t})}},74866:(e,t,a)=>{a.d(t,{Z:()=>S});var n=a(67294),r=a(90512),o=a(12466),s=a(16550),l=a(20469),c=a(91980),u=a(67392),i=a(20812);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function v(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=p(e),[s,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,d]=m({queryString:a,groupId:r}),[v,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,i.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),g=(()=>{const e=u??v;return h({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{g&&c(g)}),[g]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=a(85893);function x(e){let{className:t,block:a,selectedValue:n,selectValue:s,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),i=e=>{const t=e.currentTarget,a=c.indexOf(t),r=l[a].value;r!==n&&(u(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:l.map((e=>{let{value:t,label:a,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:d,onClick:i,...o,className:(0,r.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function y(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function j(e){const t=v(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,b.jsx)(x,{...t,...e}),(0,b.jsx)(y,{...t,...e})]})}function S(e){const t=(0,f.Z)();return(0,b.jsx)(j,{...e,children:d(e.children)},String(t))}},11151:(e,t,a)=>{a.d(t,{Z:()=>l,a:()=>s});var n=a(67294);const r={},o=n.createContext(r);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);