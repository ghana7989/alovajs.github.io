"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[2507],{4339:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var r=n(5893),o=n(1151);const d={title:"\u8de8\u9875\u9762/\u6a21\u5757\u66f4\u65b0\u54cd\u5e94\u72b6\u6001",sidebar_position:100},s=void 0,i={id:"tutorial/learning/update-response-data-across-modules",title:"\u8de8\u9875\u9762/\u6a21\u5757\u66f4\u65b0\u54cd\u5e94\u72b6\u6001",description:"\u5728\u4e0a\u4e00\u5c0f\u8282\u4e3b\u52a8\u5931\u6548\u54cd\u5e94\u7f13\u5b58\u7684\u4f8b\u5b50\u4e2d\uff0c\u5f53\u7528\u6237\u70b9\u5f00 todo \u5217\u8868\u4e2d\u7684\u67d0\u4e00\u9879\uff0c\u8fdb\u5165 todo \u8be6\u60c5\u9875\u5e76\u5bf9\u5b83\u6267\u884c\u4e86\u7f16\u8f91\uff0c\u6b64\u65f6\u6211\u4eec\u5e0c\u671b\u4e0a\u4e00\u9875\u4e2d\u7684 todo \u5217\u8868\u6570\u636e\u4e5f\u66f4\u65b0\u4e3a\u7f16\u8f91\u540e\u7684\u5185\u5bb9\uff0c\u4f7f\u7528useFetcher\u548cinvalidateCache\u7684\u65b9\u5f0f\u90fd\u4f1a\u91cd\u65b0\u53d1\u8d77\u8bf7\u6c42\uff0c\u90a3\u6709\u6ca1\u6709\u4e0d\u9700\u8981\u91cd\u65b0\u8bf7\u6c42\u7684\u65b9\u6cd5\u5462\uff1f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/03-learning/10-update-response-data-across-modules.md",sourceDirName:"tutorial/03-learning",slug:"/tutorial/learning/update-response-data-across-modules",permalink:"/zh-CN/tutorial/learning/update-response-data-across-modules",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/03-learning/10-update-response-data-across-modules.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{title:"\u8de8\u9875\u9762/\u6a21\u5757\u66f4\u65b0\u54cd\u5e94\u72b6\u6001",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"\u7f13\u5b58\u66f4\u65b0\u4e0e\u67e5\u627e",permalink:"/zh-CN/tutorial/learning/cache-set-and-query"},next:{title:"Next step",permalink:"/zh-CN/category/next-step"}},a={},l=[{value:"\u26a0\ufe0f \u8bf7\u786e\u4fdd\u7ec4\u4ef6\u672a\u9500\u6bc1",id:"\ufe0f-\u8bf7\u786e\u4fdd\u7ec4\u4ef6\u672a\u9500\u6bc1",level:2},{value:"\u4f7f\u7528 method \u5b9e\u4f8b\u67e5\u627e\u54cd\u5e94\u72b6\u6001",id:"\u4f7f\u7528-method-\u5b9e\u4f8b\u67e5\u627e\u54cd\u5e94\u72b6\u6001",level:2},{value:"\u52a8\u6001\u66f4\u65b0\u54cd\u5e94\u72b6\u6001",id:"\u52a8\u6001\u66f4\u65b0\u54cd\u5e94\u72b6\u6001",level:2},{value:"\u76d1\u542c\u5339\u914d\u4e8b\u4ef6",id:"\u76d1\u542c\u5339\u914d\u4e8b\u4ef6",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["\u5728\u4e0a\u4e00\u5c0f\u8282",(0,r.jsx)(t.a,{href:"/tutorial/learning/invalidate-response-cache",children:"\u4e3b\u52a8\u5931\u6548\u54cd\u5e94\u7f13\u5b58"}),"\u7684\u4f8b\u5b50\u4e2d\uff0c\u5f53\u7528\u6237\u70b9\u5f00 todo \u5217\u8868\u4e2d\u7684\u67d0\u4e00\u9879\uff0c\u8fdb\u5165 todo \u8be6\u60c5\u9875\u5e76\u5bf9\u5b83\u6267\u884c\u4e86\u7f16\u8f91\uff0c\u6b64\u65f6\u6211\u4eec\u5e0c\u671b\u4e0a\u4e00\u9875\u4e2d\u7684 todo \u5217\u8868\u6570\u636e\u4e5f\u66f4\u65b0\u4e3a\u7f16\u8f91\u540e\u7684\u5185\u5bb9\uff0c\u4f7f\u7528",(0,r.jsx)(t.code,{children:"useFetcher"}),"\u548c",(0,r.jsx)(t.code,{children:"invalidateCache"}),"\u7684\u65b9\u5f0f\u90fd\u4f1a\u91cd\u65b0\u53d1\u8d77\u8bf7\u6c42\uff0c\u90a3\u6709\u6ca1\u6709\u4e0d\u9700\u8981\u91cd\u65b0\u8bf7\u6c42\u7684\u65b9\u6cd5\u5462\uff1f"]}),"\n",(0,r.jsxs)(t.p,{children:["\u5f53\u7136\u6709\uff01alova \u63d0\u4f9b\u4e86",(0,r.jsx)(t.code,{children:"updateState"}),"\u6765\u624b\u52a8\u66f4\u65b0\u4efb\u610f\u6a21\u5757/\u9875\u9762\u4e0b\u7684\u5df2\u5b58\u5728\u7684\u54cd\u5e94\u72b6\u6001\u3002\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u4e0d\u540c\u7684\u54cd\u5e94\u72b6\u6001\u662f\u4ee5\u53d1\u9001\u8bf7\u6c42\u7684 method \u5b9e\u4f8b\u4f5c\u4e3a key \u8fdb\u884c\u4fdd\u5b58\u7684\uff0c\u56e0\u6b64\u5728\u66f4\u65b0\u72b6\u6001\u65f6\u4e5f\u5c06\u4f7f\u7528 method \u5b9e\u4f8b\u6765\u67e5\u627e\u5bf9\u5e94\u7684\u54cd\u5e94\u72b6\u6001\u3002"]}),"\n",(0,r.jsx)(t.h2,{id:"\ufe0f-\u8bf7\u786e\u4fdd\u7ec4\u4ef6\u672a\u9500\u6bc1",children:"\u26a0\ufe0f \u8bf7\u786e\u4fdd\u7ec4\u4ef6\u672a\u9500\u6bc1"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"updateState"}),"\u9ed8\u8ba4\u4f1a\u67e5\u627e\u7531 alova \u7684 use hooks \u53d1\u9001\u8bf7\u6c42\u65f6\u6240\u521b\u5efa\u7684\u54cd\u5e94\u72b6\u6001\uff0c\u800c\u4e00\u4e2a\u7ec4\u4ef6\u7684\u9500\u6bc1\u4e5f\u4f1a\u540c\u65f6\u56de\u6536\u5b83\u5185\u90e8\u521b\u5efa\u7684\u6240\u6709\u72b6\u6001\uff0c\u56e0\u6b64\u5728\u4f7f\u7528",(0,r.jsx)(t.code,{children:"updateState"}),"\u65f6\u8bf7\u786e\u4fdd\u4f60\u5e0c\u671b\u66f4\u65b0\u7684\u54cd\u5e94\u72b6\u6001\u5bf9\u5e94\u7684\u5bb9\u5668\u7ec4\u4ef6\u672a\u88ab\u9500\u6bc1\uff0c\u5426\u5219\u5c06\u65e0\u6cd5\u67e5\u627e\u5230\u5bf9\u5e94\u7684\u54cd\u5e94\u72b6\u6001\u800c\u5bfc\u81f4\u66f4\u65b0\u5931\u8d25\u3002"]}),"\n",(0,r.jsx)(t.p,{children:"\u8fd9\u4e2a\u95ee\u9898\u5e38\u5e38\u51fa\u73b0\u5728\u8de8\u9875\u9762\u66f4\u65b0\u72b6\u6001\u65f6\uff0c\u56e0\u4e3a\u5f53\u9875\u9762\u8df3\u8f6c\u65f6\u6211\u4eec\u5bb9\u6613\u5ffd\u7565\u7684\u662f\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0a\u4e00\u4e2a\u9875\u9762\u5df2\u7ecf\u88ab\u9500\u6bc1\u4e86\uff0c\u56e0\u6b64\uff0c\u5982\u679c\u4f60\u5e0c\u671b\u8de8\u9875\u9762\u66f4\u65b0\u72b6\u6001\uff0c\u8fd9\u8fb9\u6709\u4e24\u4e2a\u5efa\u8bae\uff1a"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"\u5c06\u9875\u9762\u7ec4\u4ef6\u6301\u4e45\u5316\uff0c\u4ee5\u4fdd\u8bc1\u88ab\u66f4\u65b0\u7684\u72b6\u6001\u8fd8\u53ef\u4ee5\u88ab\u67e5\u627e\u5230\uff1b"}),"\n",(0,r.jsxs)(t.li,{children:["\u4f7f\u7528 ",(0,r.jsx)(t.a,{href:"/tutorial/learning/cache-set-and-query",children:"\u624b\u52a8\u66f4\u65b0\u7f13\u5b58\uff08setCache\uff09"})," \u66ff\u4ee3",(0,r.jsx)(t.code,{children:"updateState"}),"\uff0c\u5176\u539f\u7406\u662f\uff0c\u5f53\u4e0a\u4e00\u4e2a\u9875\u9762\u7684\u8bf7\u6c42\u5b58\u5728\u7f13\u5b58\u65f6\uff0c\u66f4\u65b0\u5b83\u7684\u7f13\u5b58\u4ee5\u4fdd\u8bc1\u518d\u6b21\u521b\u5efa\u9875\u9762\u65f6\uff0c\u6240\u89e6\u53d1\u7684\u8bf7\u6c42\u53ef\u4ee5\u547d\u4e2d\u66f4\u65b0\u540e\u7684\u7f13\u5b58\uff0c\u8fbe\u5230\u540c\u6837\u7684\u6548\u679c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.a,{href:"/tutorial/example/update-state",children:["\u8fd9\u91cc\u6709\u4e2a",(0,r.jsx)(t.code,{children:"updateState"}),"\u7684 demo"]})}),"\n",(0,r.jsx)(t.h2,{id:"\u4f7f\u7528-method-\u5b9e\u4f8b\u67e5\u627e\u54cd\u5e94\u72b6\u6001",children:"\u4f7f\u7528 method \u5b9e\u4f8b\u67e5\u627e\u54cd\u5e94\u72b6\u6001"}),"\n",(0,r.jsxs)(t.p,{children:["\u5f53\u786e\u5b9a\u66f4\u65b0\u7684\u54cd\u5e94\u72b6\u6001\u5bf9\u5e94\u7684 method \u5b9e\u4f8b\u65f6\uff0c\u4f60\u53ef\u4ee5\u5728",(0,r.jsx)(t.code,{children:"updateState"}),"\u4e2d\u4f20\u5165\u6b64 method \u5b9e\u4f8b\uff0c\u5b83\u5c06\u67e5\u627e\u8fd9\u4e2a\u5b9e\u4f8b\u4e0b\u662f\u5426\u5b58\u5728\u5bf9\u5e94\u7684\u54cd\u5e94\u72b6\u6001\uff0c\u5e76\u5728\u56de\u8c03\u51fd\u6570\u4e2d\u63d0\u4f9b\u7ed9\u4f60\u8fdb\u884c\u4fee\u6539\uff0c\u6700\u540e\u5c06\u4fee\u6539\u540e\u7684\u6570\u636e\u8fd4\u56de\u5373\u53ef\u3002"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"import { updateState } from 'alova';\r\n\r\n// \u6b63\u5728\u7f16\u8f91\u7684todo\u9879\r\nconst editingTodo = {\r\n  id: 1,\r\n  title: 'todo1',\r\n  time: '09:00'\r\n};\r\n\r\nconst { send, onSuccess } = useRequest(createTodoPoster, { immediate: false });\r\nonSuccess(() => {\r\n  // highlight-start\r\n  // \u56fa\u5b9a\u4fee\u6539\u7b2c\u4e00\u9875\u7684todo\u6570\u636e\u6570\u636e\r\n  // updateState\u5c06\u8fd4\u56de\u662f\u5426\u66f4\u65b0\u6210\u529f\r\n  const updated = updateState(getTodoList(1), todoList => {\r\n    return todoList.map(item => {\r\n      if (item.id === editingTodo.id) {\r\n        return {\r\n          ...item,\r\n          ...editingTodo\r\n        };\r\n      }\r\n      return item;\r\n    });\r\n  });\r\n  // highlight-end\r\n});\n"})}),"\n",(0,r.jsx)(t.admonition,{title:"\u6ce8\u610f",type:"warning",children:(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\u901a\u8fc7",(0,r.jsx)(t.code,{children:"updateState"}),"\u66f4\u65b0\u72b6\u6001\u65f6\uff0c\u5982\u679c\u68c0\u6d4b\u5230\u7f13\u5b58\uff08\u5185\u5b58\u7f13\u5b58\u548c\u6301\u4e45\u5316\u7f13\u5b58\uff09\u4e5f\u5c06\u4f1a\u66f4\u65b0\u65b0\u7684\u6570\u636e\u66f4\u65b0\u7f13\u5b58\u3002"]}),"\n",(0,r.jsx)(t.li,{children:"\u53ea\u6709\u5f53\u4f7f\u7528 useRequest\u3001useWatcher \u53d1\u8d77\u8fc7\u8bf7\u6c42\u65f6\uff0calova \u624d\u4f1a\u7ba1\u7406 hook \u8fd4\u56de\u7684\u72b6\u6001\uff0c\u539f\u56e0\u662f\u54cd\u5e94\u72b6\u6001\u662f\u901a\u8fc7\u4e00\u4e2a Method \u5b9e\u4f8b\u6765\u751f\u6210 key \u5e76\u4fdd\u5b58\u7684\uff0c\u4f46\u5728\u672a\u53d1\u8d77\u8bf7\u6c42\u65f6 Method \u5b9e\u4f8b\u5185\u7684 url\u3001params\u3001query\u3001headers \u7b49\u53c2\u6570\u90fd\u8fd8\u4e0d\u786e\u5b9a\u3002"}),"\n"]})}),"\n",(0,r.jsx)(t.h2,{id:"\u52a8\u6001\u66f4\u65b0\u54cd\u5e94\u72b6\u6001",children:"\u52a8\u6001\u66f4\u65b0\u54cd\u5e94\u72b6\u6001"}),"\n",(0,r.jsxs)(t.p,{children:["\u53ef\u80fd\u6709\u65f6\u5019\u4f60\u5e76\u4e0d\u786e\u5b9a\u9700\u8981\u66f4\u65b0 method \u4e0b\u7684\u54cd\u5e94\u72b6\u6001\uff0c\u4f46\u5374\u77e5\u9053\u4ee5\u4ec0\u4e48\u65b9\u5f0f\u6765\u627e\u5230\u9700\u8981\u5931\u6548\u7684\u7f13\u5b58\u6570\u636e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(t.a,{href:"/tutorial/next-step/method-instance-matcher",children:"Method \u5b9e\u4f8b\u5339\u914d\u5668"})," \u6765\u52a8\u6001\u67e5\u627e\u5bf9\u5e94\u7684 method \u5b9e\u4f8b\u3002\u4ee5\u4e0b\u4f8b\u5b50\u5c55\u793a\u4e86\u4e3a\u540d\u79f0\u4e3a todoList \u7684 method \u5b9e\u4f8b\u5bf9\u5e94\u7684\u5217\u8868\u6dfb\u52a0\u4e00\u6761\u6570\u636e\u3002"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"updateState('todoList', todoListRaw => {\r\n  todoListRaw.push({\r\n    title: 'new todo',\r\n    time: '10:00'\r\n  });\r\n  return todoListRaw;\r\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u76d1\u542c\u5339\u914d\u4e8b\u4ef6",children:"\u76d1\u542c\u5339\u914d\u4e8b\u4ef6"}),"\n",(0,r.jsxs)(t.p,{children:["\u5728\u52a8\u6001\u66f4\u65b0\u54cd\u5e94\u72b6\u6001\u65f6\uff0c\u6709\u65f6\u5019\u4f60\u53ef\u80fd\u60f3\u8981\u5339\u914d\u5230 method \u5b9e\u4f8b\u65f6\u505a\u4e00\u4e9b\u5904\u7406\uff0c\u6216\u8005\u60f3\u8981\u83b7\u53d6\u5339\u914d\u7684 method \u5b9e\u4f8b\uff0c",(0,r.jsx)(t.code,{children:"updateState"}),"\u8fd8\u53ef\u4ee5\u4f20\u5165\u7b2c\u4e09\u4e2a\u53c2\u6570\u6765\u8bbe\u7f6e\u5339\u914d\u4e8b\u4ef6\u6765\u8fbe\u5230\u8fd9\u4e9b\u76ee\u7684\u3002"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"updateState(\r\n  'todoList',\r\n  todoListRaw => {\r\n    // ...\r\n  },\r\n  {\r\n    // \u5339\u914d\u5230method\u5b9e\u4f8b\u65f6\u8c03\u7528\uff0c\u53c2\u6570\u4e3a\u5339\u914d\u5230\u7684method\u5b9e\u4f8b\r\n    onMatch: method => {\r\n      // ...\r\n    }\r\n  }\r\n);\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\u5728\u5b9e\u9645\u4f7f\u7528\u4e2d\uff0c\u4e0d\u7ba1\u662f\u4f7f\u7528",(0,r.jsx)(t.code,{children:"useRequest"}),"\u8fd8\u662f",(0,r.jsx)(t.code,{children:"useWatcher"}),"\u53d1\u9001\u8bf7\u6c42\u65f6\uff0c\u4f60\u90fd\u53ef\u4ee5\u8c03\u7528",(0,r.jsx)(t.code,{children:"send"}),"\u51fd\u6570\u6765\u6307\u5b9a\u4e0d\u540c\u53c2\u6570\u91cd\u590d\u53d1\u9001\u8bf7\u6c42\uff0c\u8fd9\u4e9b use hook \u8fd4\u56de\u7684\u54cd\u5e94\u72b6\u6001\u4f1a\u88ab\u591a\u4e2a method \u5b9e\u4f8b\u5f15\u7528\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u9009\u62e9\u4efb\u610f\u4e00\u4e2a method \u5b9e\u4f8b\u90fd\u53ef\u4ee5\u5339\u914d\u5230\u540c\u4e00\u4e2a\u54cd\u5e94\u72b6\u6001\u503c\uff1b"]}),"\n",(0,r.jsx)(t.li,{children:"\u5f53\u52a8\u6001\u67e5\u627e\u66f4\u65b0\u54cd\u5e94\u72b6\u6001\u65f6\uff0cmethod \u5b9e\u4f8b\u5339\u914d\u5668\u627e\u5230\u4e86\u591a\u4e2a method \u5b9e\u4f8b\uff0c\u5c06\u4f1a\u4ee5\u7b2c\u4e00\u4e2a\u5b9e\u4f8b\u4e3a\u51c6\uff1b"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var r=n(7294);const o={},d=r.createContext(o);function s(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);