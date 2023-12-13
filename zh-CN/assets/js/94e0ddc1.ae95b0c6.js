"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[6768],{6773:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=a(5893),r=a(1151),l=a(4866),s=a(5162);const o={title:"\u7ba1\u7406\u989d\u5916\u7684\u72b6\u6001",sidebar_position:70},i=void 0,d={id:"tutorial/advanced/manage-extra-states",title:"\u7ba1\u7406\u989d\u5916\u7684\u72b6\u6001",description:"\u5728\u4e4b\u524d\u7684\u8de8\u9875\u9762/\u6a21\u5757\u66f4\u65b0\u54cd\u5e94\u72b6\u6001\u7ae0\u8282\u4e2d\uff0c\u4ecb\u7ecd\u4e86\u5982\u4f55\u8de8\u9875\u9762\u6216\u6a21\u5757\u66f4\u65b0\u54cd\u5e94\u72b6\u6001\uff0c\u4f46\u5728\u6b64\u7ae0\u8282\u4e2d\u6211\u4eec\u53ea\u4ecb\u7ecd\u4e86\u901a\u8fc7updateState\u66f4\u65b0\u5728useRequest\u548cuseWatcher\u4e2d\u8fd4\u56de\u7684data\u72b6\u6001\uff0cdata \u7684\u503c\u603b\u662f\u548c\u54cd\u5e94\u6570\u636e\u4e00\u81f4\uff0c\u4f46\u5728\u5f88\u591a\u60c5\u51b5\u4e0b\u6211\u4eec\u4f1a\u4f7f\u7528\u989d\u5916\u7684\u72b6\u6001\u6765\u5c55\u793a\uff08\u5982\u72b6\u6001 A\uff09\u6570\u636e\uff0c\u5e76\u5728\u8bf7\u6c42\u6210\u529f\u540e\u5c06 data \u6570\u636e\u9644\u52a0\u5230\u989d\u5916\u7684\u72b6\u6001 A \u4e2d\uff0c\u5982\u4e0b\u62c9\u52a0\u8f7d\u7684\u5206\u9875\u65b9\u6848\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5c31\u9700\u8981\u5c06\u989d\u5916\u7684\u72b6\u6001 A \u8fdb\u884c\u7ba1\u7406\uff0c\u4fbf\u4e8e\u5b9e\u73b0\u8de8\u9875\u9762/\u6a21\u5757\u66f4\u65b0\u5b83\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/04-advanced/07-manage-extra-states.md",sourceDirName:"tutorial/04-advanced",slug:"/tutorial/advanced/manage-extra-states",permalink:"/zh-CN/tutorial/advanced/manage-extra-states",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/04-advanced/07-manage-extra-states.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{title:"\u7ba1\u7406\u989d\u5916\u7684\u72b6\u6001",sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"\u7f13\u5b58\u547d\u4e2d\u65e5\u5fd7",permalink:"/zh-CN/tutorial/advanced/cache-logger"},next:{title:"\u670d\u52a1\u7aef\u6e32\u67d3\uff08SSR\uff09",permalink:"/zh-CN/tutorial/advanced/ssr"}},u={},c=[{value:"\u66f4\u65b0\u5355\u4e2a\u72b6\u6001",id:"\u66f4\u65b0\u5355\u4e2a\u72b6\u6001",level:2},{value:"\u66f4\u65b0\u591a\u4e2a\u72b6\u6001",id:"\u66f4\u65b0\u591a\u4e2a\u72b6\u6001",level:2},{value:"data \u72b6\u6001\u66f4\u65b0\u7684\u7b80\u5199",id:"data-\u72b6\u6001\u66f4\u65b0\u7684\u7b80\u5199",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["\u5728\u4e4b\u524d\u7684",(0,n.jsx)(t.a,{href:"/tutorial/advanced/update-states-across-modules",children:"\u8de8\u9875\u9762/\u6a21\u5757\u66f4\u65b0\u54cd\u5e94\u72b6\u6001"}),"\u7ae0\u8282\u4e2d\uff0c\u4ecb\u7ecd\u4e86\u5982\u4f55\u8de8\u9875\u9762\u6216\u6a21\u5757\u66f4\u65b0\u54cd\u5e94\u72b6\u6001\uff0c\u4f46\u5728\u6b64\u7ae0\u8282\u4e2d\u6211\u4eec\u53ea\u4ecb\u7ecd\u4e86\u901a\u8fc7",(0,n.jsx)(t.code,{children:"updateState"}),"\u66f4\u65b0\u5728",(0,n.jsx)(t.code,{children:"useRequest"}),"\u548c",(0,n.jsx)(t.code,{children:"useWatcher"}),"\u4e2d\u8fd4\u56de\u7684",(0,n.jsx)(t.code,{children:"data"}),"\u72b6\u6001\uff0cdata \u7684\u503c\u603b\u662f\u548c\u54cd\u5e94\u6570\u636e\u4e00\u81f4\uff0c\u4f46\u5728\u5f88\u591a\u60c5\u51b5\u4e0b\u6211\u4eec\u4f1a\u4f7f\u7528\u989d\u5916\u7684\u72b6\u6001\u6765\u5c55\u793a\uff08\u5982\u72b6\u6001 A\uff09\u6570\u636e\uff0c\u5e76\u5728\u8bf7\u6c42\u6210\u529f\u540e\u5c06 data \u6570\u636e\u9644\u52a0\u5230\u989d\u5916\u7684\u72b6\u6001 A \u4e2d\uff0c\u5982\u4e0b\u62c9\u52a0\u8f7d\u7684\u5206\u9875\u65b9\u6848\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5c31\u9700\u8981\u5c06\u989d\u5916\u7684\u72b6\u6001 A \u8fdb\u884c\u7ba1\u7406\uff0c\u4fbf\u4e8e\u5b9e\u73b0\u8de8\u9875\u9762/\u6a21\u5757\u66f4\u65b0\u5b83\u3002"]}),"\n",(0,n.jsx)(t.h2,{id:"\u66f4\u65b0\u5355\u4e2a\u72b6\u6001",children:"\u66f4\u65b0\u5355\u4e2a\u72b6\u6001"}),"\n",(0,n.jsxs)(t.p,{children:["\u53ef\u4ee5\u5728 use hook \u8c03\u7528\u65f6\u901a\u8fc7",(0,n.jsx)(t.code,{children:"managedStates"}),"\u7ba1\u7406\u989d\u5916\u7684\u72b6\u6001\uff0c\u5e76\u5728\u5176\u4ed6\u6a21\u5757/\u9875\u9762\u4e2d\u8c03\u7528",(0,n.jsx)(t.code,{children:"updateState"}),"\u65f6\uff0c\u81ea\u52a8\u6307\u5b9a\u72b6\u6001\u540d\u79f0\u6765\u66f4\u65b0\u5b83\u3002"]}),"\n",(0,n.jsxs)(l.Z,{groupId:"framework",children:[(0,n.jsxs)(s.Z,{value:"1",label:"vue composition",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="A.vue"',children:"const todoList = page =>\r\n  alova.Get('/todo', {\r\n    name: 'todoList'\r\n  });\r\n\r\nconst allTodo = ref([]);\r\nuseRequest(todoList, {\r\n  // ...\r\n\r\n  // highlight-start\r\n  // \u5c06allTodo\u4f5c\u4e3a\u989d\u5916\u7684\u72b6\u6001\u8fdb\u884c\u7ba1\u7406\r\n  managedStates: {\r\n    allTodo\r\n  }\r\n  // highlight-end\r\n});\n"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="B.vue"',children:"const handleSuccess = () => {\r\n  // highlight-start\r\n  // \u4f20\u5165\u4e00\u4e2a\u5bf9\u8c61\u5e76\u6307\u5b9a\u72b6\u6001\u540d\u6765\u67e5\u627e\r\n  updateState('todoList', {\r\n    allTodo: allTodoData => {\r\n      // \u65b0\u589e\u4e00\u6761todo\u9879\r\n      allTodoData.push({\r\n        title: 'new todo',\r\n        time: '10:00'\r\n      });\r\n      return allTodoData;\r\n    }\r\n  });\r\n  // highlight-end\r\n};\n"})})]}),(0,n.jsxs)(s.Z,{value:"2",label:"react",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="A.jsx"',children:"const PageA = () => {\r\n  const todoList = page =>\r\n    alova.Get('/todo', {\r\n      name: 'todoList'\r\n    });\r\n\r\n  const [allTodo, setAllTodo] = allTodoState = useState([]);\r\n  useRequest(todoList, {\r\n    // ...\r\n\r\n    // highlight-start\r\n    // \u5c06allTodo\u4f5c\u4e3a\u989d\u5916\u7684\u72b6\u6001\u8fdb\u884c\u7ba1\u7406\r\n    managedStates: {\r\n      allTodo: allTodoState\r\n    }\r\n    // highlight-end\r\n  });\r\n\r\n  return (\r\n    // ...\r\n  );\r\n}\n"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="B.jsx"',children:"const PageB = () => {\r\n  // ...\r\n  const handleSuccess = () => {\r\n    // highlight-start\r\n    // \u4f20\u5165\u4e00\u4e2a\u5bf9\u8c61\u5e76\u6307\u5b9a\u72b6\u6001\u540d\u6765\u67e5\u627e\r\n    updateState('todoList', {\r\n      allTodo: allTodoData => {\r\n        // \u65b0\u589e\u4e00\u6761todo\u9879\r\n        allTodoData.push({\r\n          title: 'new todo',\r\n          time: '10:00'\r\n        });\r\n        return allTodoData;\r\n      }\r\n    });\r\n    // highlight-end\r\n  };\r\n\r\n  return (\r\n    // ...\r\n  );\r\n}\n"})})]}),(0,n.jsxs)(s.Z,{value:"3",label:"svelte",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="A.svelte"',children:"// a.svelte\r\nconst todoList = page =>\r\n  alova.Get('/todo', {\r\n    name: 'todoList'\r\n  });\r\n\r\nconst allTodo = ref([]);\r\nuseRequest(todoList, {\r\n  // ...\r\n\r\n  // highlight-start\r\n  // \u5c06allTodo\u4f5c\u4e3a\u989d\u5916\u7684\u72b6\u6001\u8fdb\u884c\u7ba1\u7406\r\n  managedStates: {\r\n    allTodo\r\n  }\r\n  // highlight-end\r\n});\n"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="B.svelte"',children:"const handleSuccess = () => {\r\n  // highlight-start\r\n  // \u4f20\u5165\u4e00\u4e2a\u5bf9\u8c61\u5e76\u6307\u5b9a\u72b6\u6001\u540d\u6765\u67e5\u627e\r\n  updateState('todoList', {\r\n    allTodo: allTodoData => {\r\n      // \u65b0\u589e\u4e00\u6761todo\u9879\r\n      allTodoData.push({\r\n        title: 'new todo',\r\n        time: '10:00'\r\n      });\r\n      return allTodoData;\r\n    }\r\n  });\r\n  // highlight-end\r\n};\n"})})]}),(0,n.jsx)(s.Z,{value:"4",label:"vue options",children:(0,n.jsx)(t.admonition,{title:"\u8bf4\u660e",type:"info",children:(0,n.jsx)(t.p,{children:"\u4e0d\u652f\u6301\u7ba1\u7406\u989d\u5916\u72b6\u6001\u3002"})})})]}),"\n",(0,n.jsx)(t.h2,{id:"\u66f4\u65b0\u591a\u4e2a\u72b6\u6001",children:"\u66f4\u65b0\u591a\u4e2a\u72b6\u6001"}),"\n",(0,n.jsxs)(t.p,{children:["\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\u6211\u4eec\u5b9e\u73b0\u4e86\u8de8\u9875\u9762\u5bf9\u5355\u4e2a",(0,n.jsx)(t.code,{children:"allTodo"}),"\u72b6\u6001\u8fdb\u884c\u66f4\u65b0\uff0c\u5b9e\u9645\u4e0a\uff0c\u901a\u8fc7",(0,n.jsx)(t.code,{children:"updateState"}),"\u7684\u5bf9\u8c61\u63cf\u8ff0\u65b9\u5f0f\u53ef\u4ee5\u540c\u65f6\u66f4\u65b0\u4efb\u610f\u591a\u4e2a\u72b6\u6001\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"updateState('todoList', {\r\n  state1: state1Data => {\r\n    // ...\r\n  },\r\n  state2: state2Data => {\r\n    // ...\r\n  },\r\n  state3: state3Data => {\r\n    // ...\r\n  }\r\n  // ...\r\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4ee5\u4e0a 3 \u4e2a\u989d\u5916\u7684\u72b6\u6001\u5728\u66f4\u65b0\u524d\uff0c\u9700\u8981\u901a\u8fc7",(0,n.jsx)(t.code,{children:"managedStates"}),"\u5c5e\u6027\u6765\u7ba1\u7406\u8d77\u6765\u3002"]}),"\n",(0,n.jsx)(t.h2,{id:"data-\u72b6\u6001\u66f4\u65b0\u7684\u7b80\u5199",children:"data \u72b6\u6001\u66f4\u65b0\u7684\u7b80\u5199"}),"\n",(0,n.jsx)(t.p,{children:"\u5f53\u53ea\u66f4\u65b0 data \u72b6\u6001\u65f6\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f20\u5165\u56de\u8c03\u51fd\u6570\u5373\u53ef\uff0c\u800c\u4e0d\u9700\u8981\u6307\u5b9a\u4e3a\u5bf9\u8c61\u3002"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"updateState('todoList', {\r\n  data: dataRaw => {\r\n    // ...\r\n  }\r\n});\r\n\r\n// \u4ee5\u4e0b\u4e3a\u7b80\u5199\r\nupdateState('todoList', dataRaw => {\r\n  // ...\r\n});\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5162:(e,t,a)=>{a.d(t,{Z:()=>s});a(7294);var n=a(4334);const r={tabItem:"tabItem_Ymn6"};var l=a(5893);function s(e){let{children:t,hidden:a,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,s),hidden:a,children:t})}},4866:(e,t,a)=>{a.d(t,{Z:()=>S});var n=a(7294),r=a(4334),l=a(2466),s=a(6550),o=a(469),i=a(1980),d=a(7392),u=a(12);function c(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=h(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[d,c]=m({queryString:a,groupId:r}),[g,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),b=(()=>{const e=d??g;return p({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),v(e)}),[c,v,l]),tabValues:l}}var v=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=a(5893);function x(e){let{className:t,block:a,selectedValue:n,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),u=e=>{const t=e.currentTarget,a=i.indexOf(t),r=o[a].value;r!==n&&(d(t),s(r))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:c,onClick:u,...l,className:(0,r.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function j(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function T(e){const t=g(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(x,{...e,...t}),(0,f.jsx)(j,{...e,...t})]})}function S(e){const t=(0,v.Z)();return(0,f.jsx)(T,{...e,children:c(e.children)},String(t))}},1151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>s});var n=a(7294);const r={},l=n.createContext(r);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);