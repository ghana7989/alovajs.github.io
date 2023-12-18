"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[1327],{9422:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=t(5893),a=t(1151),s=t(4866),i=t(5162);const o={title:"send captcha",sidebar_position:40},l=void 0,c={id:"tutorial/strategy/useCaptcha",title:"send captcha",description:"use hook",source:"@site/docs/tutorial/05-strategy/08-useCaptcha.md",sourceDirName:"tutorial/05-strategy",slug:"/tutorial/strategy/useCaptcha",permalink:"/tutorial/strategy/useCaptcha",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/05-strategy/08-useCaptcha.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"send captcha",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Universal upload strategy",permalink:"/tutorial/strategy/useUploader"},next:{title:"Cross components to trigger request",permalink:"/tutorial/strategy/actionDelegationMiddleware"}},d={},u=[{value:"Example",id:"example",level:2},{value:"Features",id:"features",level:2},{value:"Install",id:"install",level:2},{value:"use",id:"use",level:2},{value:"Basic usage",id:"basic-usage",level:2},{value:"Custom countdown seconds",id:"custom-countdown-seconds",level:3},{value:"API",id:"api",level:2},{value:"Hook configuration",id:"hook-configuration",level:3},{value:"Responsive data",id:"responsive-data",level:3},{value:"Action function",id:"action-function",level:3},{value:"Event",id:"event",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{title:"strategy type",type:"info",children:(0,r.jsx)(n.p,{children:"use hook"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Before using extension hooks, make sure you are familiar with the basic usage of alova."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The verification code sending hook saves you the trouble of developing the verification code sending function."}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/tutorial/example/captcha-send",children:"Send Captcha Demo"})}),"\n",(0,r.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u2728 The countdown will start automatically after the verification code is sent;"}),"\n",(0,r.jsx)(n.li,{children:"\u2728 Custom countdown seconds;"}),"\n",(0,r.jsx)(n.li,{children:"\u2728 Verification code sending limit;"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,r.jsxs)(s.Z,{groupId:"framework",children:[(0,r.jsx)(i.Z,{value:"1",label:"vue composition",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# npm\r\nnpm install @alova/scene-vue --save\r\n#yarn\r\nyarn add @alova/scene-vue\r\n\n"})})}),(0,r.jsx)(i.Z,{value:"2",label:"react",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# npm\r\nnpm install @alova/scene-react --save\r\n#yarn\r\nyarn add @alova/scene-react\r\n\n"})})}),(0,r.jsx)(i.Z,{value:"3",label:"svelte",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# npm\r\nnpm install @alova/scene-svelte --save\r\n#yarn\r\nyarn add @alova/scene-svelte\r\n\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"use",children:"use"}),"\n",(0,r.jsx)(n.h2,{id:"basic-usage",children:"Basic usage"}),"\n",(0,r.jsx)(n.p,{children:"Demonstrates basic use of form hooks."}),"\n",(0,r.jsxs)(s.Z,{groupId:"framework",children:[(0,r.jsx)(i.Z,{value:"1",label:"vue composition",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<template>\r\n  <input v-model=\"mobile\" />\r\n  <button\r\n    @click=\"sendCaptcha\"\r\n    :loading=\"sending\"\r\n    :disabled=\"sending || countdown > 0\">\r\n    {{ loading ? 'Sending...' : countdown > 0 ? `${countdown} can be resent` : 'Send verification code' }}\r\n  </button>\r\n</template>\r\n\r\n<script setup>\r\n  import { ref } from 'vue';\r\n  import { apiSendCaptcha } from './api.js';\r\n  import { useCaptcha } from '@alova/scene-vue';\r\n\r\n  const mobile = ref('');\r\n  const {\r\n    // send status\r\n    loading: sending,\r\n\r\n    // Call sendCaptcha to request the interface to send the verification code\r\n    send: sendCaptcha\r\n  } = useCaptcha(() => apiSendCaptcha(mobile.value));\r\n<\/script>\n"})})}),(0,r.jsx)(i.Z,{value:"2",label:"react",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"import { useState } from 'react';\r\nimport { apiSendCaptcha } from './api.js';\r\nimport { useCaptcha } from '@alova/scene-react';\r\n\r\nconst App = () => {\r\n  const [mobile, setMobile] = ref('');\r\n  const {\r\n    // send status\r\n    loading: sending,\r\n\r\n    // Call sendCaptcha to request the interface to send the verification code\r\n    send: sendCaptcha\r\n  } = useCaptcha(() => apiSendCaptcha(mobile));\r\n\r\n  return (\r\n    <div>\r\n      <input\r\n        value={mobile}\r\n        onChange={({ target }) => setMobile(target.value)}\r\n      />\r\n      <button\r\n        onClick={sendCaptcha}\r\n        loading={sending}\r\n        disabled={sending || countdown > 0}>\r\n        {loading ? 'Sending...' : countdown > 0 ? `${countdown} can be resent` : 'Send verification code'}\r\n      </button>\r\n    </div>\r\n  );\r\n};\n"})})}),(0,r.jsx)(i.Z,{value:"3",label:"svelte",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<script>\r\n  import { apiSendCaptcha } from './api.js';\r\n  import { useCaptcha } from '@alova/scene-vue';\r\n\r\n  let mobile = '';\r\n  const {\r\n    // send status\r\n    loading: sending,\r\n\r\n    // Call sendCaptcha to request the interface to send the verification code\r\n    send: sendCaptcha\r\n  } = useCaptcha(() => apiSendCaptcha(mobile));\r\n<\/script>\r\n\r\n<input bind:value=\"{mobile}\" />\r\n<button\r\n  on:click=\"{sendCaptcha}\"\r\n  loading=\"{$sending}\"\r\n  disabled=\"{$sending || $countdown > 0}\">\r\n  { $loading ? 'Sending...' : $countdown > 0 ? `after ${$countdown} seconds can be resent` : 'Send captcha' }\r\n</button>\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["By default, after the verification code is successfully sent, it will count down for 60 seconds, and calling ",(0,r.jsx)(n.code,{children:"send"})," when the countdown is not over will throw an error."]}),"\n",(0,r.jsx)(n.h3,{id:"custom-countdown-seconds",children:"Custom countdown seconds"}),"\n",(0,r.jsx)(n.p,{children:"You can also customize the countdown seconds"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"useCaptcha(() => apiSendCaptcha(mobile.value), {\r\n  //...\r\n  // highlight-start\r\n  // Set the countdown to 20 seconds\r\n  initialCountdown: 20\r\n  // highlight-end\r\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,r.jsx)(n.h3,{id:"hook-configuration",children:"Hook configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Inherit all configurations of ",(0,r.jsx)(n.a,{href:"/api/core-hooks#userequest",children:(0,r.jsx)(n.strong,{children:"useRequest"})})," except ",(0,r.jsx)(n.code,{children:"immediate"}),", ",(0,r.jsx)(n.code,{children:"immediate"})," in ",(0,r.jsx)(n.code,{children:"useCaptcha"})," has been hard-coded to false."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Version"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"initialCountdown"}),(0,r.jsx)(n.td,{children:"Initial countdown, when the verification code is sent successfully, it will start countdown with this data"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"60"}),(0,r.jsx)(n.td,{children:"-"})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"responsive-data",children:"Responsive data"}),"\n",(0,r.jsxs)(n.p,{children:["Inherit all responsive data from ",(0,r.jsx)(n.a,{href:"/api/core-hooks#userequest",children:(0,r.jsx)(n.strong,{children:"useRequest"})}),"."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Version"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"countdown"}),(0,r.jsx)(n.td,{children:"The current countdown, -1 per second, the verification code can only be sent again after the countdown ends"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"-"})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"action-function",children:"Action function"}),"\n",(0,r.jsxs)(n.p,{children:["Inherit all action functions of ",(0,r.jsx)(n.a,{href:"/api/core-hooks#userequest",children:(0,r.jsx)(n.strong,{children:"useRequest"})}),"."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"name"}),(0,r.jsx)(n.th,{children:"description"}),(0,r.jsx)(n.th,{children:"function parameters"}),(0,r.jsx)(n.th,{children:"return value"}),(0,r.jsx)(n.th,{children:"version"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"send"}),(0,r.jsx)(n.td,{children:"Send a request, when the countdown is not over, the call will throw an error"}),(0,r.jsx)(n.td,{children:"Consistent with useRequest.send"}),(0,r.jsx)(n.td,{children:"Promise<Response>"}),(0,r.jsx)(n.td,{children:"-"})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"event",children:"Event"}),"\n",(0,r.jsxs)(n.p,{children:["Inherit all events from ",(0,r.jsx)(n.a,{href:"/api/core-hooks#userequest",children:(0,r.jsx)(n.strong,{children:"useRequest"})}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>i});t(7294);var r=t(4334);const a={tabItem:"tabItem_Ymn6"};var s=t(5893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(7294),a=t(4334),s=t(2466),i=t(6550),o=t(469),l=t(1980),c=t(7392),d=t(12);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,u]=m({queryString:t,groupId:a}),[v,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),x=(()=>{const e=c??v;return p({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=t(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(5893);function j(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==r&&(c(n),i(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=v(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...e,...n}),(0,b.jsx)(g,{...e,...n})]})}function y(e){const n=(0,f.Z)();return(0,b.jsx)(w,{...e,children:u(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var r=t(7294);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);