"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[324],{5545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(5893),s=n(1151);const i={title:"\u8bf7\u6c42\u7c7b\u578b\u548c\u53c2\u6570",sidebar_position:30},d=void 0,a={id:"tutorial/getting-started/method",title:"\u8bf7\u6c42\u7c7b\u578b\u548c\u53c2\u6570",description:"\u5728 alova \u4e2d\uff0c\u6bcf\u4e2a\u8bf7\u6c42\u90fd\u5bf9\u5e94\u4e00\u4e2a method \u5b9e\u4f8b\uff0c\u5b83\u63cf\u8ff0\u4e86\u4e00\u6b21\u8bf7\u6c42\u7684 url\u3001\u8bf7\u6c42\u5934\u3001\u8bf7\u6c42\u53c2\u6570\uff0c\u4ee5\u53ca\u8bf7\u6c42\u884c\u4e3a\u53c2\u6570\u7b49\uff0c\u5b83\u662f\u4e00\u4e2a PromiseLike \u5b9e\u4f8b\uff0c\u6240\u4ee5\u53ef\u4ee5\u4f7f\u7528 await alovaInstance.Get(...) \u6765\u89e6\u53d1\u8bf7\u6c42\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/02-getting-started/03-method.md",sourceDirName:"tutorial/02-getting-started",slug:"/tutorial/getting-started/method",permalink:"/zh-CN/tutorial/getting-started/method",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/02-getting-started/03-method.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"\u8bf7\u6c42\u7c7b\u578b\u548c\u53c2\u6570",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"\u7b2c\u4e00\u4e2a\u8bf7\u6c42",permalink:"/zh-CN/tutorial/getting-started/first-request"},next:{title:"\u8bbe\u7f6ebaseURL",permalink:"/zh-CN/tutorial/getting-started/base-url"}},c={},l=[{value:"\u8bf7\u6c42\u7c7b\u578b",id:"\u8bf7\u6c42\u7c7b\u578b",level:2},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",level:2},{value:"\u8bbe\u7f6e\u8bf7\u6c42\u9002\u914d\u5668\u652f\u6301\u7684\u53c2\u6570",id:"\u8bbe\u7f6e\u8bf7\u6c42\u9002\u914d\u5668\u652f\u6301\u7684\u53c2\u6570",level:2}];function o(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["\u5728 alova \u4e2d\uff0c\u6bcf\u4e2a\u8bf7\u6c42\u90fd\u5bf9\u5e94\u4e00\u4e2a method \u5b9e\u4f8b\uff0c\u5b83\u63cf\u8ff0\u4e86\u4e00\u6b21\u8bf7\u6c42\u7684 url\u3001\u8bf7\u6c42\u5934\u3001\u8bf7\u6c42\u53c2\u6570\uff0c\u4ee5\u53ca\u8bf7\u6c42\u884c\u4e3a\u53c2\u6570\u7b49\uff0c\u5b83\u662f\u4e00\u4e2a PromiseLike \u5b9e\u4f8b\uff0c\u6240\u4ee5\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(t.code,{children:"await alovaInstance.Get(...)"})," \u6765\u89e6\u53d1\u8bf7\u6c42\u3002"]}),"\n",(0,r.jsx)(t.p,{children:"\u63a5\u4e0b\u6765\u6211\u4eec\u5148\u6765\u770b\u4e0b\u8bf7\u6c42\u7c7b\u578b\u3002"}),"\n",(0,r.jsx)(t.h2,{id:"\u8bf7\u6c42\u7c7b\u578b",children:"\u8bf7\u6c42\u7c7b\u578b"}),"\n",(0,r.jsx)(t.p,{children:"alova \u63d0\u4f9b\u4e86 GET\u3001POST\u3001PUT\u3001DELETE\u3001HEAD\u3001OPTIONS\u3001PATCH 7 \u79cd\u8bf7\u6c42\u7c7b\u578b\u3002"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u5b9e\u4f8b\u521b\u5efa\u51fd\u6570"}),(0,r.jsx)(t.th,{children:"\u53c2\u6570"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"GET"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"alovaInstance.Get(url[, config])"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"POST"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"alovaInstance.Post(url[, data[, config]])"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"PUT"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"alovaInstance.Put(url[, data[, config]])"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DELETE"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"alovaInstance.Delete(url[, data[, config]])"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"HEAD"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"alovaInstance.Head(url[, config])"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"OPTIONS"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"alovaInstance.Options(url[, config])"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"PATCH"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"alovaInstance.Patch(url[, data[, config]])"})})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"\u53c2\u6570\u8bf4\u660e\uff1a"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"url"}),"\u662f\u8bf7\u6c42\u8def\u5f84\uff0c\u5b83\u5c06\u4f1a\u4e0e",(0,r.jsx)(t.code,{children:"createAlova"}),"\u4e2d\u7684",(0,r.jsx)(t.code,{children:"baseURL"}),"\u62fc\u63a5\u6210\u5b8c\u6574\u7684 url \u8fdb\u884c\u8bf7\u6c42\uff1b"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"data"}),"\u4e3a\u8bf7\u6c42\u4f53\u6570\u636e\u5bf9\u8c61\uff1b"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"config"}),"\u4e3a\u8bf7\u6c42\u914d\u7f6e\u5bf9\u8c61\uff0c\u5176\u4e2d\u5305\u542b\u4e86\u8bf7\u6c42\u5934\u3001params \u53c2\u6570\u7b49\u3001\u8bf7\u6c42\u884c\u4e3a\u53c2\u6570\u7b49\u914d\u7f6e\uff1b"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"\u8bf7\u6c42\u53c2\u6570",children:"\u8bf7\u6c42\u53c2\u6570"}),"\n",(0,r.jsx)(t.p,{children:"\u4f8b\u5982\uff0c\u521b\u5efa\u4e00\u4e2a\u83b7\u53d6 todo \u5217\u8868\u7684 GET \u8bf7\u6c42 method \u5b9e\u4f8b\u5982\u4e0b\uff0c\u5b83\u6307\u5b9a\u4e86\u8bf7\u6c42\u5934\u548c params \u53c2\u6570\uff0cparams \u53c2\u6570\u4f1a\u5728 url \u540e\u9762\u4ee5?\u7684\u5f62\u5f0f\u62fc\u63a5\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const todoListGetter = alovaInstance.Get('/todo/list', {\r\n  headers: {\r\n    'Content-Type': 'application/json;charset=UTF-8'\r\n  },\r\n  params: {\r\n    userId: 1\r\n  }\r\n});\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u63a5\u7740\u518d\u521b\u5efa\u4e00\u4e2a\u63d0\u4ea4 todo \u9879\u7684 POST \u8bf7\u6c42 Method \u5b9e\u4f8b\uff0c\u6b64\u65f6\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4f20\u5165\u7684\u662f request body\uff0c\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0cPOST \u8bf7\u6c42\u4e5f\u53ef\u4ee5\u4f20\u5165 params \u53c2\u6570\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"// \u521b\u5efaPost\u5b9e\u4f8b\r\nconst createTodoPoster = alovaInstance.Post(\r\n  '/todo/create',\r\n  // \u7b2c\u4e8c\u4e2a\u53c2\u6570\u662fhttp body\u6570\u636e\r\n  {\r\n    title: 'test todo',\r\n    time: '12:00'\r\n  },\r\n  // \u7b2c\u4e09\u4e2a\u53c2\u6570\u662f\u8bf7\u6c42\u914d\u7f6e\u76f8\u5173\u4fe1\u606f\r\n  {\r\n    headers: {\r\n      'Content-Type': 'application/json;charset=UTF-8'\r\n    },\r\n    params: {\r\n      // ...\r\n    }\r\n  }\r\n);\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u8bbe\u7f6e\u8bf7\u6c42\u9002\u914d\u5668\u652f\u6301\u7684\u53c2\u6570",children:"\u8bbe\u7f6e\u8bf7\u6c42\u9002\u914d\u5668\u652f\u6301\u7684\u53c2\u6570"}),"\n",(0,r.jsxs)(t.p,{children:["\u9664\u4e86\u8bf7\u6c42\u5934\u3001params \u53c2\u6570\u7b49\u5916\uff0c\u8fd8\u652f\u6301\u914d\u7f6e\u5bf9\u5e94\u8bf7\u6c42\u9002\u914d\u5668\u652f\u6301\u7684\u53c2\u6570\uff0c\u5f53\u4f7f\u7528",(0,r.jsx)(t.code,{children:"GlobalFetch"}),"\u4f5c\u4e3a alova \u7684\u8bf7\u6c42\u9002\u914d\u5668\u65f6\uff0c\u5c31\u53ef\u4ee5\u5728",(0,r.jsx)(t.code,{children:"method"}),"\u5b9e\u4f8b\u4e0a\u914d\u7f6e\u4efb\u4f55",(0,r.jsx)(t.code,{children:"fetch API"}),"\u652f\u6301\u7684\u53c2\u6570\uff0c\u8fd9\u4e9b\u53c2\u6570\u4f1a\u5728\u8bf7\u6c42\u65f6\u4f20\u7ed9",(0,r.jsx)(t.code,{children:"fetch"}),"\u51fd\u6570\u3002"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const todoListGetter = alovaInstance.Get('/todo/list', {\r\n  // ...\r\n  // highlight-start\r\n  credentials: 'same-origin',\r\n  referrerPolicy: 'no-referrer',\r\n  mode: 'cors'\r\n  // highlight-end\r\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["\u4ee5\u4e0a",(0,r.jsx)(t.code,{children:"method"}),"\u5b9e\u4f8b\u5728\u901a\u8fc7",(0,r.jsx)(t.code,{children:"fetch"}),"\u53d1\u9001\u8bf7\u6c42\u65f6\uff0c\u5c06\u4f1a\u4ee5\u4ee5\u4e0b\u53c2\u6570\u8bf7\u6c42\u3002"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"fetch('/todo/list', {\r\n  // ...\r\n  // highlight-start\r\n  credentials: 'same-origin',\r\n  referrerPolicy: 'no-referrer',\r\n  mode: 'cors'\r\n  // highlight-end\r\n});\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>d});var r=n(7294);const s={},i=r.createContext(s);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);