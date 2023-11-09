"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[8742],{3089:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=s(5893),o=s(1151);const r={title:"\u4e32\u884c\u8bf7\u6c42",sidebar_position:80},i=void 0,a={id:"tutorial/next-step/serial-request",title:"\u4e32\u884c\u8bf7\u6c42",description:"\u4e32\u884c\u8bf7\u6c42\u4e5f\u5177\u6709\u4e24\u79cd\u65b9\u5f0f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/06-next-step/09-serial-request.md",sourceDirName:"tutorial/06-next-step",slug:"/tutorial/next-step/serial-request",permalink:"/zh-CN/tutorial/next-step/serial-request",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/06-next-step/09-serial-request.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{title:"\u4e32\u884c\u8bf7\u6c42",sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"\u5e76\u884c\u8bf7\u6c42",permalink:"/zh-CN/tutorial/next-step/parallel-request"},next:{title:"\u53d7\u63a7\u7684\u7f13\u5b58",permalink:"/zh-CN/tutorial/next-step/controlled-cache"}},d={},l=[{value:"\u65b9\u5f0f 1",id:"\u65b9\u5f0f-1",level:2},{value:"\u65b9\u5f0f 2",id:"\u65b9\u5f0f-2",level:2}];function c(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"\u4e32\u884c\u8bf7\u6c42\u4e5f\u5177\u6709\u4e24\u79cd\u65b9\u5f0f"}),"\n",(0,n.jsx)(t.h2,{id:"\u65b9\u5f0f-1",children:"\u65b9\u5f0f 1"}),"\n",(0,n.jsxs)(t.p,{children:["\u8ba9\u7b2c\u4e00\u4e2a\u8bf7\u6c42\u81ea\u52a8\u53d1\u51fa\uff0c\u7b2c\u4e8c\u4e2a\u8bf7\u6c42\u5728\u7b2c\u4e00\u4e2a\u8bf7\u6c42\u7684",(0,n.jsx)(t.code,{children:"onSuccess"}),"\u56de\u8c03\u4e2d\u89e6\u53d1\uff0c\u5373\u53ef\u5b8c\u6210\u4e32\u884c\u8bf7\u6c42\uff0c\u53ef\u901a\u8fc7\u4ee5\u4e0b\u5199\u6cd5\u5b8c\u6210\u4e32\u884c\u8bf7\u6c42\uff1a"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"//\r\nconst { data: todoList, onSuccess } = useRequest(todoListGetter);\r\nconst { data: todoDetail, send: sendTodoDetail } = useRequest(todoId => todoDetailGetter(todoId), { immediate: false });\r\n\r\n// \u5148\u83b7\u53d6\u5217\u8868\uff0c\u518d\u83b7\u53d6\u7b2c\u4e00\u4e2atodo\u7684\u8be6\u60c5\r\nonSuccess(event => {\r\n  sendTodoDetail(event.todoList[0].id);\r\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"\u65b9\u5f0f-2",children:"\u65b9\u5f0f 2"}),"\n",(0,n.jsxs)(t.p,{children:["\u4f7f\u7528",(0,n.jsx)(t.code,{children:"useRequest"}),"\u51fd\u6570\u8fd4\u56de\u7684",(0,n.jsx)(t.code,{children:"send"}),"\u51fd\u6570\uff0c\u8c03\u7528",(0,n.jsx)(t.code,{children:"send"}),"\u5c06\u4f1a\u8fd4\u56de\u4e00\u4e2a\u53ef\u7528\u7684 promise \u5bf9\u8c61\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"// \u5148\u8ba9\u5b83\u4eec\u4e0d\u81ea\u52a8\u53d1\u9001\u8bf7\u6c42\r\nconst { send: sendList } = useRequest(todoListGetter, { immediate: false });\r\nconst { send: sendTodoDetail } = useRequest(todoId => todoDetailGetter(todoId), { immediate: false });\r\n\r\n// \u5229\u7528send\u51fd\u6570\u8fd4\u56de\u7684promise\u5bf9\u8c61\r\nconst serialRequest = async () => {\r\n  const todoList = await sendList();\r\n  const todoDetail = await sendTodoDetail(todoList[0].id);\r\n  // \u4e32\u884c\u8bf7\u6c42\u5b8c\u6210\uff0c\u7ee7\u7eed\u5904\u7406\u4e1a\u52a1...\r\n};\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>i});var n=s(7294);const o={},r=n.createContext(o);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);