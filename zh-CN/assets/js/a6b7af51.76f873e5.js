"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[3751],{60830:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(85893),a=t(11151),s=t(74866),l=t(85162);const i={title:"\u53d1\u9001\u9a8c\u8bc1\u7801"},o=void 0,c={id:"tutorial/client/strategy/use-captcha",title:"\u53d1\u9001\u9a8c\u8bc1\u7801",description:"use hook",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/03-client/01-strategy/10-use-captcha.md",sourceDirName:"tutorial/03-client/01-strategy",slug:"/tutorial/client/strategy/use-captcha",permalink:"/zh-CN/next/tutorial/client/strategy/use-captcha",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/03-client/01-strategy/10-use-captcha.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\u53d1\u9001\u9a8c\u8bc1\u7801"},sidebar:"tutorial",previous:{title:"\u8fd8\u6709\u4ec0\u4e48\uff1f",permalink:"/zh-CN/next/tutorial/client/strategy/sensorless-data-interaction/what-more"},next:{title:"\u4e32\u884c\u8bf7\u6c42\u7684useRequest",permalink:"/zh-CN/next/tutorial/client/strategy/use-serial-request"}},d={},u=[{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2},{value:"\u81ea\u5b9a\u4e49\u5012\u8ba1\u65f6\u79d2\u6570",id:"\u81ea\u5b9a\u4e49\u5012\u8ba1\u65f6\u79d2\u6570",level:3},{value:"API",id:"api",level:2},{value:"Hook \u914d\u7f6e",id:"hook-\u914d\u7f6e",level:3},{value:"\u54cd\u5e94\u5f0f\u6570\u636e",id:"\u54cd\u5e94\u5f0f\u6570\u636e",level:3},{value:"\u64cd\u4f5c\u51fd\u6570",id:"\u64cd\u4f5c\u51fd\u6570",level:3},{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{title:"\u7b56\u7565\u7c7b\u578b",type:"info",children:(0,r.jsx)(n.p,{children:"use hook"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u5728\u4f7f\u7528\u6269\u5c55 hooks \u524d\uff0c\u786e\u4fdd\u4f60\u5df2\u719f\u6089\u4e86 alova \u7684\u57fa\u672c\u4f7f\u7528\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u9a8c\u8bc1\u7801\u53d1\u9001 hook\uff0c\u51cf\u6389\u4f60\u5728\u5f00\u53d1\u9a8c\u8bc1\u7801\u53d1\u9001\u529f\u80fd\u65f6\u7684\u7e41\u7410\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u7279\u6027",children:"\u7279\u6027"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u9a8c\u8bc1\u7801\u53d1\u9001\u540e\u81ea\u52a8\u5f00\u59cb\u5012\u8ba1\u65f6\uff1b"}),"\n",(0,r.jsx)(n.li,{children:"\u81ea\u5b9a\u4e49\u5012\u8ba1\u65f6\u79d2\u6570\uff1b"}),"\n",(0,r.jsx)(n.li,{children:"\u9a8c\u8bc1\u7801\u53d1\u9001\u9650\u5236\uff1b"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,r.jsx)(n.h2,{id:"\u57fa\u672c\u4f7f\u7528",children:"\u57fa\u672c\u4f7f\u7528"}),"\n",(0,r.jsx)(n.p,{children:"\u5c55\u793a\u8868\u5355 hook \u7684\u57fa\u672c\u4f7f\u7528\u3002"}),"\n",(0,r.jsxs)(s.Z,{groupId:"framework",children:[(0,r.jsx)(l.Z,{value:"1",label:"vue",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<template>\n  <input v-model=\"mobile\" />\n  <button\n    @click=\"sendCaptcha\"\n    :loading=\"sending\"\n    :disabled=\"sending || countdown > 0\">\n    {{ loading ? '\u53d1\u9001\u4e2d...' : countdown > 0 ? `${countdown}\u540e\u53ef\u91cd\u53d1` : '\u53d1\u9001\u9a8c\u8bc1\u7801' }}\n  </button>\n</template>\n\n<script setup>\n  import { ref } from 'vue';\n  import { apiSendCaptcha } from './api.js';\n  import { useCaptcha } from 'alova/client';\n\n  const mobile = ref('');\n  const {\n    // \u53d1\u9001\u72b6\u6001\n    loading: sending,\n\n    // \u8c03\u7528sendCaptcha\u624d\u4f1a\u8bf7\u6c42\u63a5\u53e3\u53d1\u9001\u9a8c\u8bc1\u7801\n    send: sendCaptcha\n  } = useCaptcha(() => apiSendCaptcha(mobile.value));\n<\/script>\n"})})}),(0,r.jsx)(l.Z,{value:"2",label:"react",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"import { useState } from 'react';\nimport { apiSendCaptcha } from './api.js';\nimport { useCaptcha } from 'alova/clientct';\n\nconst App = () => {\n  const [mobile, setMobile] = ref('');\n  const {\n    // \u53d1\u9001\u72b6\u6001\n    loading: sending,\n\n    // \u8c03\u7528sendCaptcha\u624d\u4f1a\u8bf7\u6c42\u63a5\u53e3\u53d1\u9001\u9a8c\u8bc1\u7801\n    send: sendCaptcha\n  } = useCaptcha(() => apiSendCaptcha(mobile));\n\n  return (\n    <div>\n      <input\n        value={mobile}\n        onChange={({ target }) => setMobile(target.value)}\n      />\n      <button\n        onClick={sendCaptcha}\n        loading={sending}\n        disabled={sending || countdown > 0}>\n        {loading ? '\u53d1\u9001\u4e2d...' : countdown > 0 ? `${countdown}\u540e\u53ef\u91cd\u53d1` : '\u53d1\u9001\u9a8c\u8bc1\u7801'}\n      </button>\n    </div>\n  );\n};\n"})})}),(0,r.jsx)(l.Z,{value:"3",label:"svelte",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<script>\n  import { apiSendCaptcha } from './api.js';\n  import { useCaptcha } from 'alova/client';\n\n  let mobile = '';\n  const {\n    // \u53d1\u9001\u72b6\u6001\n    loading: sending,\n\n    // \u8c03\u7528sendCaptcha\u624d\u4f1a\u8bf7\u6c42\u63a5\u53e3\u53d1\u9001\u9a8c\u8bc1\u7801\n    send: sendCaptcha\n  } = useCaptcha(() => apiSendCaptcha(mobile));\n<\/script>\n\n<input bind:value=\"{mobile}\" />\n<button\n  on:click=\"{sendCaptcha}\"\n  loading=\"{$sending}\"\n  disabled=\"{$sending || $countdown > 0}\">\n  { $loading ? '\u53d1\u9001\u4e2d...' : $countdown > 0 ? `${$countdown}\u540e\u53ef\u91cd\u53d1` : '\u53d1\u9001\u9a8c\u8bc1\u7801' }\n</button>\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u9a8c\u8bc1\u7801\u53d1\u9001\u6210\u529f\u540e\u5c06\u4f1a\u5012\u8ba1\u65f6 60 \u79d2\uff0c\u5f53\u5012\u8ba1\u65f6\u6ca1\u6709\u7ed3\u675f\u65f6\u518d\u8c03\u7528",(0,r.jsx)(n.code,{children:"send"}),"\u5c06\u4f1a\u629b\u51fa\u9519\u8bef\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u81ea\u5b9a\u4e49\u5012\u8ba1\u65f6\u79d2\u6570",children:"\u81ea\u5b9a\u4e49\u5012\u8ba1\u65f6\u79d2\u6570"}),"\n",(0,r.jsx)(n.p,{children:"\u4f60\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u5012\u8ba1\u65f6\u79d2\u6570"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"useCaptcha(() => apiSendCaptcha(mobile.value), {\n  // ...\n  // highlight-start\n  // \u5c06\u5012\u8ba1\u65f6\u8bbe\u4e3a20\u79d2\n  initialCountdown: 20\n  // highlight-end\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,r.jsx)(n.h3,{id:"hook-\u914d\u7f6e",children:"Hook \u914d\u7f6e"}),"\n",(0,r.jsxs)(n.p,{children:["\u7ee7\u627f",(0,r.jsx)(n.a,{href:"/next/api/core-hooks#userequest",children:(0,r.jsx)(n.strong,{children:"useRequest"})}),"\u9664",(0,r.jsx)(n.code,{children:"immediate"}),"\u5916\u7684\u6240\u6709\u914d\u7f6e\uff0c",(0,r.jsx)(n.code,{children:"useCaptcha"}),"\u4e2d",(0,r.jsx)(n.code,{children:"immediate"}),"\u5df2\u786c\u7f16\u7801\u4e3a false\u3002"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u540d\u79f0"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"}),(0,r.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,r.jsx)(n.th,{children:"\u9ed8\u8ba4\u503c"}),(0,r.jsx)(n.th,{children:"\u7248\u672c"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"initialCountdown"}),(0,r.jsx)(n.td,{children:"\u521d\u59cb\u5012\u8ba1\u65f6\uff0c\u5f53\u9a8c\u8bc1\u7801\u53d1\u9001\u6210\u529f\u65f6\u5c06\u4f1a\u4ee5\u6b64\u6570\u636e\u6765\u5f00\u59cb\u5012\u8ba1\u65f6"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"60"}),(0,r.jsx)(n.td,{children:"-"})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"\u54cd\u5e94\u5f0f\u6570\u636e",children:"\u54cd\u5e94\u5f0f\u6570\u636e"}),"\n",(0,r.jsxs)(n.p,{children:["\u7ee7\u627f",(0,r.jsx)(n.a,{href:"/next/api/core-hooks#userequest",children:(0,r.jsx)(n.strong,{children:"useRequest"})}),"\u6240\u6709\u54cd\u5e94\u5f0f\u6570\u636e\u3002"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u540d\u79f0"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"}),(0,r.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,r.jsx)(n.th,{children:"\u7248\u672c"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"countdown"}),(0,r.jsx)(n.td,{children:"\u5f53\u524d\u5012\u8ba1\u65f6\uff0c\u6bcf\u79d2-1\uff0c\u5f53\u5012\u8ba1\u65f6\u7ed3\u675f\u540e\u624d\u53ef\u4ee5\u518d\u6b21\u53d1\u9001\u9a8c\u8bc1\u7801"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"-"})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"\u64cd\u4f5c\u51fd\u6570",children:"\u64cd\u4f5c\u51fd\u6570"}),"\n",(0,r.jsxs)(n.p,{children:["\u7ee7\u627f",(0,r.jsx)(n.a,{href:"/next/api/core-hooks#userequest",children:(0,r.jsx)(n.strong,{children:"useRequest"})}),"\u6240\u6709\u64cd\u4f5c\u51fd\u6570\u3002"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u540d\u79f0"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"}),(0,r.jsx)(n.th,{children:"\u51fd\u6570\u53c2\u6570"}),(0,r.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,r.jsx)(n.th,{children:"\u7248\u672c"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"send"}),(0,r.jsx)(n.td,{children:"\u53d1\u9001\u8bf7\u6c42\uff0c\u5f53\u5012\u8ba1\u65f6\u672a\u7ed3\u675f\u65f6\u8c03\u7528\u5c06\u629b\u51fa\u9519\u8bef"}),(0,r.jsx)(n.td,{children:"\u4e0e useRequest.send \u4e00\u81f4"}),(0,r.jsx)(n.td,{children:"Promise<Response>"}),(0,r.jsx)(n.td,{children:"-"})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"\u4e8b\u4ef6",children:"\u4e8b\u4ef6"}),"\n",(0,r.jsxs)(n.p,{children:["\u7ee7\u627f",(0,r.jsx)(n.a,{href:"/next/api/core-hooks#userequest",children:(0,r.jsx)(n.strong,{children:"useRequest"})}),"\u6240\u6709\u4e8b\u4ef6\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var r=t(90512);const a={tabItem:"tabItem_Ymn6"};var s=t(85893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(67294),a=t(90512),s=t(12466),l=t(16550),i=t(20469),o=t(91980),c=t(67392),d=t(20812);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,u]=x({queryString:t,groupId:a}),[j,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=c??j;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),m(e)}),[u,m,s]),tabValues:s}}var m=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(85893);function v(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),a=i[t].value;a!==r&&(c(n),l(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function C(e){const n=j(e);return(0,f.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(g,{...n,...e})]})}function k(e){const n=(0,m.Z)();return(0,f.jsx)(C,{...e,children:u(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>l});var r=t(67294);const a={},s=r.createContext(a);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);