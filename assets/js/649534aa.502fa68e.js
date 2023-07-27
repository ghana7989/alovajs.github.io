"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[2925],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),i=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=i(a),m=n,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||s;return a?r.createElement(f,l(l({ref:t},c),{},{components:a})):r.createElement(f,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var i=2;i<s;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),n=a(6010);const s="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(s,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(7462),n=a(7294),s=a(6010),l=a(2466),o=a(6550),u=a(1980),i=a(7392),c=a(12);function p(e){return function(e){var t;return(null==(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=d(e),[l,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,i]=f({queryString:a,groupId:r}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),g=(()=>{const e=u??p;return m({value:e,tabValues:s})?e:null})();(0,n.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),i(e),h(e)}),[i,h,s]),tabValues:s}}var g=a(2389);const v="tabList__CuJ",b="tabItem_LNqP";function k(e){let{className:t,block:a,selectedValue:o,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),r=i[a].value;r!==o&&(p(t),u(r))},m=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,s.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function q(e){const t=h(e);return n.createElement("div",{className:(0,s.Z)("tabs-container",v)},n.createElement(k,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return n.createElement(q,(0,r.Z)({key:String(t)},e))}},8768:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905)),s=a(4866),l=a(5162);const o={title:"useRequest with serial",sidebar_position:60},u=void 0,i={unversionedId:"tutorial/strategy/useSerialRequest",id:"tutorial/strategy/useSerialRequest",title:"useRequest with serial",description:"use hook",source:"@site/docs/tutorial/07-strategy/06-useSerialRequest.md",sourceDirName:"tutorial/07-strategy",slug:"/tutorial/strategy/useSerialRequest",permalink:"/tutorial/strategy/useSerialRequest",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/07-strategy/06-useSerialRequest.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{title:"useRequest with serial",sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"Cross components to trigger request",permalink:"/tutorial/strategy/actionDelegationMiddleware"},next:{title:"useWatcher with serial",permalink:"/tutorial/strategy/useSerialWatcher"}},c={},p=[{value:"Features",id:"features",level:2},{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Request error",id:"request-error",level:3},{value:"API",id:"api",level:2},{value:"Hook configuration",id:"hook-configuration",level:3},{value:"Responsive data",id:"responsive-data",level:3},{value:"Action function",id:"action-function",level:3},{value:"Event",id:"event",level:3}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"strategy type",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"use hook")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Before using extension hooks, make sure you are familiar with the basic usage of alova.")),(0,n.kt)("p",null,"This use hook is more concise and easy to use than ",(0,n.kt)("a",{parentName:"p",href:"../next-step/serial-request"},"alova's serial request method"),", with unified loading status, error, and callback functions."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u2728 A more concise and easy-to-use serial method;"),(0,n.kt)("li",{parentName:"ul"},"\u2728Unified request status and callback function;"),(0,n.kt)("li",{parentName:"ul"},"\u2728 send function can trigger serial execution of multiple requests;")),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)(s.Z,{groupId:"framework",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm install @alova/scene-vue --save\n#yarn\nyarn add @alova/scene-vue\n\n"))),(0,n.kt)(l.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm install @alova/scene-react --save\n#yarn\nyarn add @alova/scene-react\n\n"))),(0,n.kt)(l.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm install @alova/scene-svelte --save\n#yarn\nyarn add @alova/scene-svelte\n\n")))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,n.kt)("p",null,"Same usage as ",(0,n.kt)("inlineCode",{parentName:"p"},"useRequest"),", except that the first parameter is changed to an array of handlers executed serially, and each handler will receive the response data of the previous request."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const {\n  // Serial loading status, all requests will be changed to false\n  loading,\n\n  // The response data of the last request\n  data,\n\n  // Any request error will record the error message here\n  error,\n\n  // Manually send a serial request\n  send,\n\n  // serial request success callback binding function\n  onSuccess,\n\n  // Serial request error callback binding function, any request error will trigger it\n  onError,\n\n  // Serial request completion callback binding function\n  onComplete\n} = useSerialRequest(\n  [\n    // args is the parameter passed in by the send function\n    (...args) => request1(args),\n\n    // Starting from the second handler, the first parameter is the response data of the previous request, and args is received from the second\n    (response1, ...args) => request2(response1, args),\n    (response2, ...args) => request3(response2, args)\n  ],\n  {\n    immediate: false\n  }\n);\n\n// emit request manually and pass arguments\nsend(1, 2, 3);\n")),(0,n.kt)("p",null,"It is worth noting that the first item in the handler array can also be specified as a method instance, and the second item must be a function."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"useSerialRequest([\n  methodInstance,\n  (response1, ...args) => request2(response1, args),\n  (response2, ...args) => request3(response2, args)\n]);\n")),(0,n.kt)("h3",{id:"request-error"},"Request error"),(0,n.kt)("p",null,"When any of the serial requests is wrong, ",(0,n.kt)("inlineCode",{parentName:"p"},"onError")," will be triggered, and its ",(0,n.kt)("inlineCode",{parentName:"p"},"event.method")," will point to the method instance of the request error."),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("h3",{id:"hook-configuration"},"Hook configuration"),(0,n.kt)("p",null,"Inherit all configurations from ",(0,n.kt)("a",{parentName:"p",href:"../learning/use-request#api"},(0,n.kt)("strong",{parentName:"a"},"useRequest")),"."),(0,n.kt)("h3",{id:"responsive-data"},"Responsive data"),(0,n.kt)("p",null,"Inherit all responsive data from ",(0,n.kt)("a",{parentName:"p",href:"../learning/use-request#api"},(0,n.kt)("strong",{parentName:"a"},"useRequest")),"."),(0,n.kt)("h3",{id:"action-function"},"Action function"),(0,n.kt)("p",null,"Inherit all action functions of ",(0,n.kt)("a",{parentName:"p",href:"../learning/use-request#api"},(0,n.kt)("strong",{parentName:"a"},"useRequest")),"."),(0,n.kt)("h3",{id:"event"},"Event"),(0,n.kt)("p",null,"Inherit all events from ",(0,n.kt)("a",{parentName:"p",href:"../learning/use-request#api"},(0,n.kt)("strong",{parentName:"a"},"useRequest")),"."))}m.isMDXComponent=!0}}]);