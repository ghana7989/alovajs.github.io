"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[9999],{24662:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=t(85893),r=t(11151),s=t(74866),o=t(85162);const l={title:"Server-sent events\u53d1\u9001\u8bf7\u6c42"},i=void 0,u={id:"tutorial/client/strategy/use-sse",title:"Server-sent events\u53d1\u9001\u8bf7\u6c42",description:"use hook",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/03-client/01-strategy/14-use-sse.md",sourceDirName:"tutorial/03-client/01-strategy",slug:"/tutorial/client/strategy/use-sse",permalink:"/zh-CN/next/tutorial/client/strategy/use-sse",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/03-client/01-strategy/14-use-sse.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Server-sent events\u53d1\u9001\u8bf7\u6c42"},sidebar:"tutorial",previous:{title:"\u8bf7\u6c42\u91cd\u8bd5\u7b56\u7565",permalink:"/zh-CN/next/tutorial/client/strategy/use-retriable-request"},next:{title:"\u65ad\u70b9\u7eed\u4f20\u7b56\u7565",permalink:"/zh-CN/next/tutorial/client/strategy/use-breakpoint-uploader"}},c={},d=[{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u7ed1\u5b9a\u81ea\u5b9a\u4e49\u4e8b\u4ef6",id:"\u7ed1\u5b9a\u81ea\u5b9a\u4e49\u4e8b\u4ef6",level:3},{value:"\u5168\u5c40\u54cd\u5e94\u62e6\u622a",id:"\u5168\u5c40\u54cd\u5e94\u62e6\u622a",level:3},{value:"\u7c7b\u578b\u58f0\u660e",id:"\u7c7b\u578b\u58f0\u660e",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{title:"\u7b56\u7565\u7c7b\u578b",type:"info",children:(0,a.jsx)(n.p,{children:"use hook"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"\u5728\u4f7f\u7528\u6269\u5c55 hooks \u524d\uff0c\u786e\u4fdd\u4f60\u5df2\u719f\u6089\u4e86 alova \u7684\u57fa\u672c\u4f7f\u7528\u3002"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["\u901a\u8fc7 Server-sent Events(SSE)\u8bf7\u6c42\uff0c\u5185\u90e8\u4f7f\u7528",(0,a.jsx)(n.code,{children:"EventSource"}),"\u5b9e\u73b0\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u7279\u6027",children:"\u7279\u6027"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u66f4\u52a0\u7b80\u6d01\u6613\u7528\u7684\u4f7f\u7528\u65b9\u5f0f\uff1b"}),"\n",(0,a.jsx)(n.li,{children:"\u81ea\u52a8\u7ba1\u7406\u8fde\u63a5\uff1b"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u7528\u6cd5",children:"\u7528\u6cd5"}),"\n",(0,a.jsxs)(s.Z,{groupId:"framework",children:[(0,a.jsx)(o.Z,{value:"1",label:"vue",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { useSSE } from 'alova/client';\n\nconst method = (value: string) => alova.Get('/api/source', { param: { key: value } });\nconst { data, eventSource, readyState, onMessage, onError, on, send, close } = useSSE(method, {\n  initialData: 'initial-data' // \u521d\u59cb\u65f6 data \u4e2d\u7684\u6570\u636e\n});\n\n// connect\nsend('value');\n\nconsole.log(data.value); // data \u5728\u63a5\u6536\u5230\u4e8b\u4ef6\u540e\u66f4\u65b0\uff0c\u9ed8\u8ba4\u662f initialData\n\n// \u5bf9\u5e94 eventsource \u7684 message \u4e8b\u4ef6\nconst unbindMessage = onMessage(({ data }) => {\n  console.log(data);\n});\n\nconst unbindError = onError(({ error }) => {\n  console.error('sse error', error);\n  close();\n});\n\n// \u5728\u9700\u8981\u7684\u65f6\u5019\u89e3\u7ed1\nunbindMessage();\nunbindError();\n"})})}),(0,a.jsx)(o.Z,{value:"2",label:"react",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { useSSE } from 'alova/client';\n\nconst method = (value: string) => alova.Get('/api/source', { param: { key: value } });\nconst { data, eventSource, readyState, onMessage, onError, on, send, close } = useSSE(method, {\n  initialData: 'initial-data' // \u521d\u59cb\u65f6 data \u4e2d\u7684\u6570\u636e\n});\n\n// connect\nsend('value');\n\nconsole.log(data); // data \u5728\u63a5\u6536\u5230\u4e8b\u4ef6\u540e\u66f4\u65b0\uff0c\u9ed8\u8ba4\u662f initialData\n\n// \u5bf9\u5e94 eventsource \u7684 message \u4e8b\u4ef6\nconst unbindMessage = onMessage(({ data }) => {\n  console.log(data);\n});\n\nconst unbindError = onError(({ error }) => {\n  console.error('sse error', error);\n  close();\n});\n\n// \u5728\u9700\u8981\u7684\u65f6\u5019\u89e3\u7ed1\nunbindMessage();\nunbindError();\n"})})}),(0,a.jsx)(o.Z,{value:"3",label:"svelte",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { useSSE } from 'alova/client';\n\nconst method = (value: string) => alova.Get('/api/source', { param: { key: value } });\nconst { data, eventSource, readyState, onMessage, onError, on, send, close } = useSSE(method, {\n  initialData: 'initial-data' // \u521d\u59cb\u65f6 data \u4e2d\u7684\u6570\u636e\n});\n\n// connect\nsend('value');\n\nconsole.log(data); // data \u5728\u63a5\u6536\u5230\u4e8b\u4ef6\u540e\u66f4\u65b0\uff0c\u9ed8\u8ba4\u662f initialData\n\n// \u5bf9\u5e94 eventsource \u7684 message \u4e8b\u4ef6\nconst unbindMessage = onMessage(({ data }) => {\n  console.log(data);\n});\n\nconst unbindError = onError(({ error }) => {\n  console.error('sse error', error);\n  close();\n});\n\n// \u5728\u9700\u8981\u7684\u65f6\u5019\u89e3\u7ed1\nunbindMessage();\nunbindError();\n"})})})]}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"useSSE"})," \u76ee\u524d\u53ea\u80fd\u8fde\u63a5\u5230\u4e00\u4e2a\u6e90\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5f53\u8bd5\u56fe\u8fde\u63a5\u591a\u4e2a\u76ee\u6807\u65f6\uff0c\u4e0a\u4e00\u4e2a\u8fde\u63a5\u603b\u4f1a\u88ab\u65ad\u5f00\u3002"]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const { data, eventSource, readyState, onMessage, onError, on, send, close } = useSSE(method);\n\nsend('value1');\n// highlight-start\nsend('value2'); // \u8fd9\u4f1a\u65ad\u5f00\u4e0a\u4e00\u4e2a\u8fde\u63a5\nsend('value3'); // \u8fd9\u4e5f\u4f1a\u65ad\u5f00\u4e0a\u4e00\u4e2a\u8fde\u63a5\n// highlight-end\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e0d\u4f1a\u53d1\u9001\u8bf7\u6c42\u3002\u5f53\u7136\uff0c\u901a\u8fc7\u8bbe\u7f6e",(0,a.jsx)(n.code,{children:"immediate = true"}),"\uff0c\u53ef\u4ee5\u7701\u53bb\u624b\u52a8 send \u7684\u4e00\u6b65\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const { data, eventSource, readyState, onMessage, onError, on, send, close } = useSSE(method, {\n  // highlight-start\n  immediate: true\n  // highlight-end\n});\n\n// codes here...\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u7ed1\u5b9a\u81ea\u5b9a\u4e49\u4e8b\u4ef6",children:"\u7ed1\u5b9a\u81ea\u5b9a\u4e49\u4e8b\u4ef6"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const { data, readyState, onMessage, on } = useSSE(method);\n\non('event-name', ({ data }) => {\n  console.log(data);\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u5168\u5c40\u54cd\u5e94\u62e6\u622a",children:"\u5168\u5c40\u54cd\u5e94\u62e6\u622a"}),"\n",(0,a.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u54cd\u5e94\u6570\u636e\u53d7\u5230",(0,a.jsx)(n.a,{href:"/next/tutorial/getting-started/basic/global-interceptor",children:"\u5168\u5c40\u54cd\u5e94\u62e6\u622a\u5668\u7684\u6355\u83b7"}),"\u3002\u5982\u679c\u8fd9\u4e0d\u662f\u4f60\u9884\u671f\u7684\u884c\u4e3a\uff0c\u53ef\u4ee5\u624b\u52a8\u5173\u95ed\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const { data, readyState, onMessage, on } = useSSE(method, {\n  // highlight-start\n  interceptByGlobalResponded: false // \u73b0\u5728\u6570\u636e\u4e0d\u4f1a\u88ab\u54cd\u5e94\u62e6\u622a\n  // highlight-end\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u7c7b\u578b\u58f0\u660e",children:"\u7c7b\u578b\u58f0\u660e"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const enum SSEHookReadyState {\n  CONNECTING = 0,\n  OPEN = 1,\n  CLOSED = 2\n};\n\ntype SSEHookConfig = {\n  /**\n   * \u4f1a\u4f20\u7ed9new EventSource\n   */\n  withCredentials?: boolean;\n\n  /**\n   * \u662f\u5426\u7ecf\u8fc7alova\u5b9e\u4f8b\u7684responded\u62e6\u622a\n   * @default true\n   */\n  interceptByGlobalResponded?: boolean;\n\n  /**\n   * \u521d\u59cb\u6570\u636e\n   */\n  initialData?: any;\n\n  /**\n   * \u662f\u5426\u7acb\u5373\u53d1\u8d77\u8bf7\u6c42\n   * @default false\n   */\n  immediate?: boolean;\n};\n\ntype SSEReturnType<S, Data> = {\n  readyState: ExportedType<SSEHookReadyState, S>;\n  data: ExportedType<Data | undefined, S>;\n  eventSource: ExportedType<EventSource | undefined, S>;\n  /**\n   * \u624b\u52a8\u53d1\u8d77\u8bf7\u6c42\u3002\u5728\u4f7f\u7528 `immediate: true` \u65f6\u8be5\u65b9\u6cd5\u4f1a\u81ea\u52a8\u89e6\u53d1\n   * @param sendArgs \u8bf7\u6c42\u53c2\u6570\uff0c\u4f1a\u4f20\u9012\u7ed9 method\n   */\n  send: (...sendArgs: any[]) => Promise<void>;\n  /**\n   * \u5173\u95ed\u8fde\u63a5\n   */\n  close: () => void;\n  /**\n   * \u6ce8\u518c EventSource open \u7684\u56de\u8c03\u51fd\u6570\n   * @param callback \u56de\u8c03\u51fd\u6570\n   * @returns \u53d6\u6d88\u6ce8\u518c\u51fd\u6570\n   */\n  onOpen(callback: SSEOnOpenTrigger): () => void;\n\n  /**\n   * \u6ce8\u518c EventSource message \u7684\u56de\u8c03\u51fd\u6570\n   * @param callback \u56de\u8c03\u51fd\u6570\n   * @returns \u53d6\u6d88\u6ce8\u518c\u51fd\u6570\n   */\n  onMessage<T = Data>(callback: SSEOnMessageTrigger<T>): () => void;\n\n  /**\n   * \u6ce8\u518c EventSource error \u7684\u56de\u8c03\u51fd\u6570\n   * @param callback \u56de\u8c03\u51fd\u6570\n   * @returns \u53d6\u6d88\u6ce8\u518c\u51fd\u6570\n   */\n  onError(callback: SSEOnErrorTrigger): () => void;\n\n  /**\n   * @param eventName \u4e8b\u4ef6\u540d\u79f0\uff0c\u9ed8\u8ba4\u5b58\u5728 `open` | `error` | `message`\n   * @param handler \u4e8b\u4ef6\u5904\u7406\u5668\n   */\n  on(\n    eventName: string,\n    handler: (event: AlovaSSEMessageEvent<S, E, R, T, RC, RE, RH>) => void\n  ) => () => void;\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var a=t(90512);const r={tabItem:"tabItem_Ymn6"};var s=t(85893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>E});var a=t(67294),r=t(90512),s=t(12466),o=t(16550),l=t(20469),i=t(91980),u=t(67392),c=t(20812);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function v(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[u,d]=v({queryString:t,groupId:r}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),b=(()=>{const e=u??m;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(85893);function S(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),r=l[t].value;r!==a&&(u(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(S,{...n,...e}),(0,f.jsx)(x,{...n,...e})]})}function E(e){const n=(0,g.Z)();return(0,f.jsx)(y,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var a=t(67294);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);