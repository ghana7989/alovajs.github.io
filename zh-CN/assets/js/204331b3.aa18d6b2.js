"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[2365],{78837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(85893),l=n(11151),r=n(74866),o=n(85162);const s={title:"\u7ba1\u7406\u989d\u5916\u7684\u72b6\u6001"},i=void 0,u={id:"tutorial/client/in-depth/manage-extra-states",title:"\u7ba1\u7406\u989d\u5916\u7684\u72b6\u6001",description:"\u5ba2\u6237\u7aef useHook",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/03-client/02-in-depth/04-manage-extra-states.md",sourceDirName:"tutorial/03-client/02-in-depth",slug:"/tutorial/client/in-depth/manage-extra-states",permalink:"/zh-CN/next/tutorial/client/in-depth/manage-extra-states",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/03-client/02-in-depth/04-manage-extra-states.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u7ba1\u7406\u989d\u5916\u7684\u72b6\u6001"},sidebar:"tutorial",previous:{title:"\u8bf7\u6c42\u4e2d\u95f4\u4ef6",permalink:"/zh-CN/next/tutorial/client/in-depth/middleware"},next:{title:"\u670d\u52a1\u7aef\u7b56\u7565",permalink:"/zh-CN/next/tutorial/server/strategy/"}},c={},d=[{value:"\u66f4\u65b0\u5355\u4e2a\u72b6\u6001",id:"\u66f4\u65b0\u5355\u4e2a\u72b6\u6001",level:2},{value:"\u66f4\u65b0\u591a\u4e2a\u72b6\u6001",id:"\u66f4\u65b0\u591a\u4e2a\u72b6\u6001",level:2},{value:"data \u72b6\u6001\u66f4\u65b0\u7684\u7b80\u5199",id:"data-\u72b6\u6001\u66f4\u65b0\u7684\u7b80\u5199",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.admonition,{title:"\u4f7f\u7528\u8303\u56f4",type:"info",children:(0,a.jsx)(t.p,{children:"\u5ba2\u6237\u7aef useHook"})}),"\n","\n",(0,a.jsxs)(t.p,{children:["\u5728\u4e4b\u524d\u7684",(0,a.jsx)(t.a,{href:"/next/tutorial/client/in-depth/update-across-components",children:"\u8de8\u9875\u9762/\u6a21\u5757\u66f4\u65b0\u54cd\u5e94\u72b6\u6001"}),"\u7ae0\u8282\u4e2d\uff0c\u4ecb\u7ecd\u4e86\u5982\u4f55\u901a\u8fc7",(0,a.jsx)(t.code,{children:"updateState"}),"\u8de8\u9875\u9762\u6216\u6a21\u5757\u66f4\u65b0\u54cd\u5e94\u72b6\u6001\uff0c\u4f46\u5b83\u53ea\u80fd\u66f4\u65b0\u7531 useHooks \u521b\u5efa\u7684\u72b6\u6001\uff0c\u5982\u679c\u9700\u8981\u8de8\u7ec4\u4ef6\u66f4\u65b0\u81ea\u5b9a\u4e49\u7684\u72b6\u6001\uff0c\u5e94\u8be5\u600e\u4e48\u505a\u5462\uff1f\u8ba9\u6211\u4eec\u7ee7\u7eed\u5427\uff01"]}),"\n",(0,a.jsx)(t.h2,{id:"\u66f4\u65b0\u5355\u4e2a\u72b6\u6001",children:"\u66f4\u65b0\u5355\u4e2a\u72b6\u6001"}),"\n",(0,a.jsxs)(t.p,{children:["\u53ef\u4ee5\u5728 useHooks \u8c03\u7528\u65f6\u901a\u8fc7",(0,a.jsx)(t.code,{children:"managedStates"}),"\u7ba1\u7406\u989d\u5916\u7684\u72b6\u6001\uff0c\u5e76\u5728\u5176\u4ed6\u6a21\u5757/\u9875\u9762\u4e2d\u8c03\u7528",(0,a.jsx)(t.code,{children:"updateState"}),"\u65f6\uff0c\u81ea\u52a8\u6307\u5b9a\u72b6\u6001\u540d\u79f0\u6765\u66f4\u65b0\u5b83\u3002"]}),"\n",(0,a.jsxs)(r.Z,{groupId:"framework",children:[(0,a.jsxs)(o.Z,{value:"1",label:"vue",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="A.vue"',children:"const todoList = page =>\n  alova.Get('/todo', {\n    name: 'todoList'\n  });\n\nconst allTodo = ref([]);\nuseRequest(todoList, {\n  // ...\n\n  // highlight-start\n  // \u5c06allTodo\u4f5c\u4e3a\u989d\u5916\u7684\u72b6\u6001\u8fdb\u884c\u7ba1\u7406\n  managedStates: {\n    allTodo\n  }\n  // highlight-end\n});\n"})}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="B.vue"',children:"const handleSuccess = () => {\n  // highlight-start\n  // \u4f20\u5165\u4e00\u4e2a\u5bf9\u8c61\u5e76\u6307\u5b9a\u72b6\u6001\u540d\u6765\u67e5\u627e\n  updateState('todoList', {\n    allTodo: allTodoData => {\n      // \u65b0\u589e\u4e00\u6761todo\u9879\n      allTodoData.push({\n        title: 'new todo',\n        time: '10:00'\n      });\n      return allTodoData;\n    }\n  });\n  // highlight-end\n};\n"})})]}),(0,a.jsxs)(o.Z,{value:"2",label:"react",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="A.jsx"',children:"const PageA = () => {\n  const todoList = page =>\n    alova.Get('/todo', {\n      name: 'todoList'\n    });\n\n  const [allTodo, setAllTodo] = allTodoState = useState([]);\n  useRequest(todoList, {\n    // ...\n\n    // highlight-start\n    // \u5c06allTodo\u4f5c\u4e3a\u989d\u5916\u7684\u72b6\u6001\u8fdb\u884c\u7ba1\u7406\n    managedStates: {\n      allTodo: allTodoState\n    }\n    // highlight-end\n  });\n\n  return (\n    // ...\n  );\n}\n"})}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="B.jsx"',children:"const PageB = () => {\n  // ...\n  const handleSuccess = () => {\n    // highlight-start\n    // \u4f20\u5165\u4e00\u4e2a\u5bf9\u8c61\u5e76\u6307\u5b9a\u72b6\u6001\u540d\u6765\u67e5\u627e\n    updateState('todoList', {\n      allTodo: allTodoData => {\n        // \u65b0\u589e\u4e00\u6761todo\u9879\n        allTodoData.push({\n          title: 'new todo',\n          time: '10:00'\n        });\n        return allTodoData;\n      }\n    });\n    // highlight-end\n  };\n\n  return (\n    // ...\n  );\n}\n"})})]}),(0,a.jsxs)(o.Z,{value:"3",label:"svelte",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="A.svelte"',children:"// a.svelte\nconst todoList = page =>\n  alova.Get('/todo', {\n    name: 'todoList'\n  });\n\nconst allTodo = writable([]);\nuseRequest(todoList, {\n  // ...\n\n  // highlight-start\n  // \u5c06allTodo\u4f5c\u4e3a\u989d\u5916\u7684\u72b6\u6001\u8fdb\u884c\u7ba1\u7406\n  managedStates: {\n    allTodo\n  }\n  // highlight-end\n});\n"})}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="B.svelte"',children:"const handleSuccess = () => {\n  // highlight-start\n  // \u4f20\u5165\u4e00\u4e2a\u5bf9\u8c61\u5e76\u6307\u5b9a\u72b6\u6001\u540d\u6765\u67e5\u627e\n  updateState('todoList', {\n    allTodo: allTodoData => {\n      // \u65b0\u589e\u4e00\u6761todo\u9879\n      allTodoData.push({\n        title: 'new todo',\n        time: '10:00'\n      });\n      return allTodoData;\n    }\n  });\n  // highlight-end\n};\n"})})]})]}),"\n",(0,a.jsx)(t.h2,{id:"\u66f4\u65b0\u591a\u4e2a\u72b6\u6001",children:"\u66f4\u65b0\u591a\u4e2a\u72b6\u6001"}),"\n",(0,a.jsxs)(t.p,{children:["\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\u6211\u4eec\u5b9e\u73b0\u4e86\u8de8\u9875\u9762\u5bf9\u5355\u4e2a",(0,a.jsx)(t.code,{children:"allTodo"}),"\u72b6\u6001\u8fdb\u884c\u66f4\u65b0\uff0c\u5b9e\u9645\u4e0a\uff0c\u901a\u8fc7",(0,a.jsx)(t.code,{children:"updateState"}),"\u7684\u5bf9\u8c61\u63cf\u8ff0\u65b9\u5f0f\u53ef\u4ee5\u540c\u65f6\u66f4\u65b0\u4efb\u610f\u591a\u4e2a\u72b6\u6001\u3002"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"updateState('todoList', {\n  state1: state1Data => {\n    // ...\n  },\n  state2: state2Data => {\n    // ...\n  },\n  state3: state3Data => {\n    // ...\n  }\n  // ...\n});\n"})}),"\n",(0,a.jsxs)(t.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4ee5\u4e0a 3 \u4e2a\u989d\u5916\u7684\u72b6\u6001\u5728\u66f4\u65b0\u524d\uff0c\u9700\u8981\u901a\u8fc7",(0,a.jsx)(t.code,{children:"managedStates"}),"\u5c5e\u6027\u6765\u7ba1\u7406\u8d77\u6765\u3002"]}),"\n",(0,a.jsx)(t.h2,{id:"data-\u72b6\u6001\u66f4\u65b0\u7684\u7b80\u5199",children:"data \u72b6\u6001\u66f4\u65b0\u7684\u7b80\u5199"}),"\n",(0,a.jsx)(t.p,{children:"\u5f53\u53ea\u66f4\u65b0 data \u72b6\u6001\u65f6\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f20\u5165\u56de\u8c03\u51fd\u6570\u5373\u53ef\uff0c\u800c\u4e0d\u9700\u8981\u6307\u5b9a\u4e3a\u5bf9\u8c61\u3002"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"updateState('todoList', {\n  data: dataRaw => {\n    // ...\n  }\n});\n\n// \u4ee5\u4e0b\u4e3a\u7b80\u5199\nupdateState('todoList', dataRaw => {\n  // ...\n});\n"})})]})}function p(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var a=n(90512);const l={tabItem:"tabItem_Ymn6"};var r=n(85893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(67294),l=n(90512),r=n(12466),o=n(16550),s=n(20469),i=n(91980),u=n(67392),c=n(20812);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const l=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(l.location.search);t.set(r,e),l.replace({...l.location,search:t.toString()})}),[r,l])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,r=h(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[u,d]=m({queryString:n,groupId:l}),[g,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,r]=(0,c.Nk)(n);return[l,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:l}),f=(()=>{const e=u??g;return p({value:e,tabValues:r})?e:null})();(0,s.Z)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),v(e)}),[d,v,r]),tabValues:r}}var v=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function x(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.o5)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),l=s[n].value;l!==a&&(u(t),o(l))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...r,className:(0,l.Z)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:l}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function T(e){const t=g(e);return(0,b.jsxs)("div",{className:(0,l.Z)("tabs-container",f.tabList),children:[(0,b.jsx)(x,{...t,...e}),(0,b.jsx)(j,{...t,...e})]})}function w(e){const t=(0,v.Z)();return(0,b.jsx)(T,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var a=n(67294);const l={},r=a.createContext(l);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);