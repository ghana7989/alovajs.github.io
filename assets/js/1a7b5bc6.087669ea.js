"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[8564],{23346:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=t(85893),s=t(11151),r=t(74866),o=t(85162);const i={title:"Server-sent events send request"},l=void 0,c={id:"tutorial/client/strategy/use-sse",title:"Server-sent events send request",description:"use hook",source:"@site/docs/tutorial/03-client/01-strategy/14-use-sse.md",sourceDirName:"tutorial/03-client/01-strategy",slug:"/tutorial/client/strategy/use-sse",permalink:"/tutorial/client/strategy/use-sse",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/03-client/01-strategy/14-use-sse.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Server-sent events send request"},sidebar:"tutorial",previous:{title:"retriable request",permalink:"/tutorial/client/strategy/use-retriable-request"},next:{title:"Breakpoint upload",permalink:"/tutorial/client/strategy/use-breakpoint-uploader"}},d={},u=[{value:"Features",id:"features",level:2},{value:"Usage",id:"usage",level:2},{value:"Send request",id:"send-request",level:2},{value:"Receive data",id:"receive-data",level:2},{value:"Binding events",id:"binding-events",level:3},{value:"Global response interception",id:"global-response-interception",level:3},{value:"Type declaration",id:"type-declaration",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{title:"strategy type",type:"info",children:(0,a.jsx)(n.p,{children:"use hook"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Before using extended hooks, make sure you are familiar with the basic use of alova."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["This hook is implemented using the ",(0,a.jsx)(n.code,{children:"EventSource"})," API."]}),"\n",(0,a.jsx)(n.p,{children:"::: warning note"}),"\n",(0,a.jsxs)(n.p,{children:["When you are not to be used in useSSE add custom header, because the standard ",(0,a.jsx)(n.a,{href:"https://stackoverflow.com/a/36226251",children:"does not contain the behavior"})]}),"\n",(0,a.jsx)(n.p,{children:":::"}),"\n",(0,a.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"A simpler and easier way to use;"}),"\n",(0,a.jsx)(n.li,{children:"Automatically manage connections;"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import { useSSE } from 'alova/client';\n\nconst method = (value: string) => alova.Get('/api/source', { param: { key: value } });\nconst {\n  // Received data, each reception will modify data\n  data,\n\n  // Current EventSource instance\n  eventSource,\n\n  // Connection status, 0-connecting, 1-open, 2-closed\n  readyState,\n\n  // Bind connection event\n  onOpen,\n\n  // Bind message reception\n  onMessage,\n\n  // Bind error event\n  onError,\n\n  // Bind custom event\n  on,\n\n  // Connect and send message\n  send,\n\n  // Close connection\n  close\n} = useSSE(method, {\n  withCredentials: true, // Will be passed to EventSource\n  initialData: 'initial-data' // Data in data at the beginning\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"send-request",children:"Send request"}),"\n",(0,a.jsxs)(n.p,{children:["By default, no request will be sent. You need to call ",(0,a.jsx)(n.code,{children:"send"})," to send the request, or you can set ",(0,a.jsx)(n.code,{children:"immediate = true"})," to send the request immediately."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const { data, eventSource, readyState, onMessage, onError, on, send, close } = useSSE(method, {\n  // highlight-start\n  immediate: true\n  // highlight-end\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"useSSE"})," can only connect to one source at present. That is, when trying to connect to multiple targets, the previous connection will always be disconnected."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const { data, eventSource, readyState, onMessage, onError, on, send, close } = useSSE(method);\n\nsend('value1');\n// highlight-start\nsend('value2'); // This will disconnect the previous connection\nsend('value3'); // This will also disconnect the previous connection\n// highlight-end\n"})}),"\n",(0,a.jsx)(n.h2,{id:"receive-data",children:"Receive data"}),"\n",(0,a.jsxs)(n.p,{children:["When data is received, it will automatically be assigned to the state ",(0,a.jsx)(n.code,{children:"data"}),". You can bind it directly to the view, or listen to it to perform some operations."]}),"\n",(0,a.jsxs)(r.Z,{groupId:"framework",children:[(0,a.jsx)(o.Z,{value:"1",label:"vue",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<template>\n  <div>\n    <span v-if="readyState === 0">Connecting</span>\n    <span v-else-if="readyState === 1">Connected</span>\n    <span v-else-if="readyState === 2">Disconnected</span>\n  </div>\n  <div>Last received data: {{data}}</div>\n  <ul>\n    <li\n      v-for="item in dataList"\n      :key="item">\n      {{item}}\n    </li>\n  </ul>\n  <button @click="send">Connect</button>\n  <button @click="close">Close</button>\n</template>\n\n<script setup>\n  import { ref } from \'vue\';\n\n  const { data, readyState, onMessage, close, send } = useSSE(method);\n  const dataList = ref([]);\n  onMessage(({ data }) => {\n    dataList.value.push(data);\n  });\n<\/script>\n'})})}),(0,a.jsx)(o.Z,{value:"2",label:"react",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"import { useEffect, useState } from 'react';\nconst App = () => {\n  const [dataList, setDataList] = useState([]);\n  const { data, readyState, onMessage, onError, close, send } = useSSE(method);\n  onMessage(({ data }) => {\n    setDataList(prevList => [...prevList, data]);\n  });\n  return (\n    <div>\n      <span>\n        {readyState === 0 ? 'Connecting' : readyState === 1 ? 'Connected' : 'Disconnected'}\n      </span>\n      <div>Last received data: {data}</div>\n      <ul>\n        {dataList.map(item => (\n          <li key={item}>{item}</li>\n        ))}\n      </ul>\n      <button onClick={send}>Connect</button>\n      <button onClick={close}>Close</button>\n    </div>\n  );\n};\n"})})}),(0,a.jsx)(o.Z,{value:"3",label:"svelte",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"<script>\n  let dataList = [];\n  const { data, readyState, onMessage, close, send } = useSSE(method);\n\n  onMessage(({ data: newData }) => {\n    dataList.push(newData);\n    data = newData;\n  });\n<\/script>\n\n<div>\n  <span\n    >{readyState === 0 ? 'Connecting' : readyState === 1 ? 'Connected' : 'Disconnected'}</span\n  >\n  <div>Last received data: {data}</div>\n  <ul>\n    {#each dataList as item}\n    <li>{item}</li>\n    {/each}\n  </ul>\n  <button on:click=\"{send}\">Connect</button>\n  <button on:click=\"{close}\">Close</button>\n</div>\n"})})}),(0,a.jsx)(o.Z,{value:"4",label:"solid",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"import { createSignal } from 'solid-js';\n\nconst App = () => {\n  const [dataList, setDataList] = createSignal([]);\n  const { data, readyState, onMessage, onError, close, send } = useSSE(method);\n\n  onMessage(({ data }) => {\n    setDataList(prevList => [...prevList, data]);\n  });\n  return (\n    <div>\n      <span>\n        {readyState() === 0 ? 'Connecting' : readyState() === 1 ? 'Connected' : 'Disconnected'}\n      </span>\n      <div>Last received data: {data()}</div>\n      <ul>\n        <For each={dataList()}>{item => <li key={item}>{item}</li>}</For>\n      </ul>\n      <button onClick={send}>Connect</button>\n      <button onClick={close}>Close</button>\n    </div>\n  );\n};\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"binding-events",children:"Binding events"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"useSSE"})," provides a series of binding event methods, and will return the unbinding function when binding."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const { onMessage, onError, close } = useSSE(method);\n\n// Corresponding to the message event of eventsource\nconst offMessage = onMessage(event => {\n  console.log(event.eventSource); // Current EventSource instance\n  console.log(event.data);\n});\n\nconst offError = onError(event => {\n  console.log(event.eventSource); // Current EventSource instance\n  console.error('sse error', event.error);\n  close();\n});\n\n// Unbind event\noffMessage();\noffError();\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In addition, you can also listen to custom EventSource events, which will call the ",(0,a.jsx)(n.code,{children:"addEventListener"})," binding of EventSource."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const { on } = useSSE(method);\n\n// The following code will listen for events with the field `event: update`\nconst offUpdate = on('update', event => {\n  console.log(event.eventSource); // Current EventSource instance\n  console.log(event.data);\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"global-response-interception",children:"Global response interception"}),"\n",(0,a.jsxs)(n.p,{children:["By default, response data is captured by the ",(0,a.jsx)(n.a,{href:"/tutorial/getting-started/basic/global-interceptor",children:"global response interceptor"}),". If this is not the behavior you expect, you can turn it off manually."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const { data, readyState, onMessage, on } = useSSE(method, {\n  // highlight-start\n  interceptByGlobalResponded: false // Now dataWill not be intercepted by response\n  // highlight-end\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"type-declaration",children:"Type declaration"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const enum SSEHookReadyState {\n  CONNECTING = 0,\n  OPEN = 1,\n  CLOSED = 2\n};\n\ntype SSEHookConfig = {\n  /**\n  * Will be passed to new EventSource\n  */\n  withCredentials?: boolean;\n\n  /**\n  * Whether to intercept by responding of alova instance\n  * @default true\n  */\n  interceptByGlobalResponded?: boolean;\n\n  /**\n  * Initial data\n  */\n  initialData?: any;\n\n  /**\n  * Whether to initiate a request immediately\n  * @default false\n  */\n  immediate?: boolean;\n};\n\ntype SSEReturnType<S, Data> = {\n  readyState: ExportedType<SSEHookReadyState, S>;\n  data: ExportedType<Data | undefined, S>;\n  eventSource: ExportedType<EventSource | undefined, S>;\n  /**\n  * Manually initiate a request. This method is automatically triggered when `immediate: true` is used\n  * @param args request parameters, which will be passed to method\n  */\n  send: (...args: any[]) => Promise<void>;\n  /**\n  * Close the connection\n  */\n  close: () => void;\n  /**\n  * Register the callback function of EventSource open\n  * @param callback callback function\n  * @returns cancel the registration function\n  */\n  onOpen(callback: SSEOnOpenTrigger): () => void;\n\n  /**\n  * Register the callback function of EventSource message\n  * @param callback callback function\n  * @returns cancel the registration function\n  */\n  onMessage<T = Data>(callback: SSEOnMessageTrigger<T>): () => void;\n\n  /**\n  * Register the callback function of EventSource error\n  * @param callback callback function\n  * @returns cancel the registration function\n  */\n  onError(callback: SSEOnErrorTrigger): () => void;\n\n  /**\n  * @param eventName event name, default exists `open` | `error` | `message`\n  * @param handler event handler\n  */\n  on(\n    eventName: string,\n    handler: (event: AlovaSSEMessageEvent<S, E, R, T, RC, RE, RH>) => void\n  ) => () => void;\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var a=t(90512);const s={tabItem:"tabItem_Ymn6"};var r=t(85893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>j});var a=t(67294),s=t(90512),r=t(12466),o=t(16550),i=t(20469),l=t(91980),c=t(67392),d=t(20812);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function v(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=h(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,u]=v({queryString:t,groupId:s}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,d.Nk)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),b=(()=>{const e=c??m;return p({value:e,tabValues:r})?e:null})();(0,i.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var g=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(85893);function S(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),s=i[t].value;s!==a&&(c(n),o(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,s.Z)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function x(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(S,{...n,...e}),(0,f.jsx)(y,{...n,...e})]})}function j(e){const n=(0,g.Z)();return(0,f.jsx)(x,{...e,children:u(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var a=t(67294);const s={},r=a.createContext(s);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);