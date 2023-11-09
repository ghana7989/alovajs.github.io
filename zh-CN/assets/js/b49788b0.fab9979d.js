"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[7430],{5814:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var s=r(5893),n=r(1151),a=r(4866),l=r(5162);const i={title:"\u8de8\u7ec4\u4ef6\u89e6\u53d1\u8bf7\u6c42",sidebar_position:80},d=void 0,c={id:"tutorial/strategy/actionDelegationMiddleware",title:"\u8de8\u7ec4\u4ef6\u89e6\u53d1\u8bf7\u6c42",description:"\u4e2d\u95f4\u4ef6",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/07-strategy/08-actionDelegationMiddleware.md",sourceDirName:"tutorial/07-strategy",slug:"/tutorial/strategy/actionDelegationMiddleware",permalink:"/zh-CN/tutorial/strategy/actionDelegationMiddleware",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/07-strategy/08-actionDelegationMiddleware.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{title:"\u8de8\u7ec4\u4ef6\u89e6\u53d1\u8bf7\u6c42",sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"\u53d1\u9001\u9a8c\u8bc1\u7801",permalink:"/zh-CN/tutorial/strategy/useCaptcha"},next:{title:"\u4e32\u884c\u8bf7\u6c42\u7684useRequest",permalink:"/zh-CN/tutorial/strategy/useSerialRequest"}},u={},o=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:3},{value:"\u6279\u91cf\u89e6\u53d1\u64cd\u4f5c\u51fd\u6570",id:"\u6279\u91cf\u89e6\u53d1\u64cd\u4f5c\u51fd\u6570",level:3},{value:"\u64cd\u4f5c\u51fd\u6570\u59d4\u6258\u8868",id:"\u64cd\u4f5c\u51fd\u6570\u59d4\u6258\u8868",level:2},{value:"useRequest",id:"userequest",level:3},{value:"useWatcher",id:"usewatcher",level:3},{value:"useFetcher",id:"usefetcher",level:3},{value:"usePagination",id:"usepagination",level:3},{value:"useSQRequest",id:"usesqrequest",level:3},{value:"useForm",id:"useform",level:3},{value:"useCaptcha",id:"usecaptcha",level:3},{value:"useRetriableRequest",id:"useretriablerequest",level:3},{value:"useSerialRequest",id:"useserialrequest",level:3},{value:"useSerialWatcher",id:"useserialwatcher",level:3}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"\u7b56\u7565\u7c7b\u578b",type:"info",children:(0,s.jsx)(t.p,{children:"\u4e2d\u95f4\u4ef6"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"\u5728\u4f7f\u7528\u6269\u5c55 hooks \u524d\uff0c\u786e\u4fdd\u4f60\u5df2\u719f\u6089\u4e86 alova \u7684\u57fa\u672c\u4f7f\u7528\u3002"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["\u4ece\u524d\uff0c\u5728\u4e00\u4e2a\u7ec4\u4ef6\u4e2d\u60f3\u8981\u89e6\u53d1\u53e6\u4e00\u4e2a\u7ec4\u4ef6\u4e2d\u7684\u8bf7\u6c42\uff0c\u4f60\u9700\u8981\u5c06\u6570\u636e\u4fdd\u5b58\u5230 Store \u4e2d\uff0c\u901a\u8fc7\u5206\u53d1 Action \u5b8c\u6210\u3002\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u4e2d\u95f4\u4ef6",(0,s.jsx)(t.strong,{children:"\u6d88\u9664\u7ec4\u4ef6\u5c42\u7ea7\u7684\u9650\u5236"}),"\uff0c\u5728\u4efb\u610f\u7ec4\u4ef6\u4e2d\u5feb\u901f\u5730\u89e6\u53d1\u4efb\u610f\u8bf7\u6c42\u7684\u64cd\u4f5c\u51fd\u6570\u3002"]}),"\n",(0,s.jsx)(t.p,{children:"\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u67d0\u4e2a\u7ec4\u4ef6\u4e2d\u66f4\u65b0\u4e86\u83dc\u5355\u6570\u636e\u540e\uff0c\u91cd\u65b0\u89e6\u53d1\u4fa7\u8fb9\u83dc\u5355\u680f\u7684\u91cd\u65b0\u8bf7\u6c42\uff0c\u4ece\u800c\u5237\u65b0\u6570\u636e\u3002\u5f53\u64cd\u4f5c\u4e86\u5217\u8868\u6570\u636e\u540e\uff0c\u89e6\u53d1\u5217\u8868\u66f4\u65b0\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/tutorial/example/action-delegation-middleware",children:"\u8de8\u7ec4\u4ef6\u89e6\u53d1\u8bf7\u6c42 Demo"})}),"\n",(0,s.jsx)(t.h2,{id:"\u7279\u6027",children:"\u7279\u6027"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u2728 \u59d4\u6258\u4efb\u610f alova \u4e2d\u7684 use hook \u7684\u64cd\u4f5c\u51fd\u6570\uff1b"}),"\n",(0,s.jsx)(t.li,{children:"\u2728 \u4efb\u610f\u4f4d\u7f6e\u89e6\u53d1\u5df2\u59d4\u6258\u7684\u64cd\u4f5c\u51fd\u6570\uff1b"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,s.jsxs)(a.Z,{groupId:"framework",children:[(0,s.jsx)(l.Z,{value:"1",label:"vue composition",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# npm\r\nnpm install @alova/scene-vue --save\r\n# yarn\r\nyarn add @alova/scene-vue\r\n\n"})})}),(0,s.jsx)(l.Z,{value:"2",label:"react",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# npm\r\nnpm install @alova/scene-react --save\r\n# yarn\r\nyarn add @alova/scene-react\r\n\n"})})}),(0,s.jsx)(l.Z,{value:"3",label:"svelte",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# npm\r\nnpm install @alova/scene-svelte --save\r\n# yarn\r\nyarn add @alova/scene-svelte\r\n\n"})})})]}),"\n",(0,s.jsx)(t.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,s.jsx)(t.h3,{id:"\u57fa\u672c\u4f7f\u7528",children:"\u57fa\u672c\u4f7f\u7528"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"\u4ee5 vue3 \u4e3a\u4f8b\uff0c\u5728 react\u3001svelte \u4e2d\u7528\u6cd5\u76f8\u540c\u3002"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["\u5728\u7ec4\u4ef6 A \u4e2d\u4f7f\u7528",(0,s.jsx)(t.code,{children:"actionDelegationMiddleware"}),"\u59d4\u6258",(0,s.jsx)(t.code,{children:"useRequest"}),"\u7684\u64cd\u4f5c\u51fd\u6570\u3002"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",metastring:"title=\u7ec4\u4ef6A",children:"import { actionDelegationMiddleware } from '@alova/scene-vue';\r\n\r\nuseRequest(queryTodo, {\r\n  // ...\r\n  middleware: actionDelegationMiddleware('actionName')\r\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u5728\u4efb\u610f\u4e00\u4e2a\u7ec4\u4ef6\u4e2d\uff08\u5982\u7ec4\u4ef6 B\uff09\u901a\u8fc7",(0,s.jsx)(t.code,{children:"accessAction"}),"\u4f20\u5165\u6307\u5b9a\u7684\u59d4\u6258\u540d\u79f0\u89e6\u53d1\u7ec4\u4ef6 A \u4e2d\u7684",(0,s.jsx)(t.code,{children:"useRequest"}),"\u7684\u64cd\u4f5c\u51fd\u6570\u3002"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",metastring:"title=\u7ec4\u4ef6B",children:"import { accessAction } from '@alova/scene-vue';\r\n\r\naccessAction('actionName', delegatedActions => {\r\n  // \u8c03\u7528\u7ec4\u4ef6A\u4e2d\u7684send\u51fd\u6570\r\n  delegatedActions.send();\r\n\r\n  // \u8c03\u7528\u7ec4\u4ef6A\u4e2d\u7684abort\u51fd\u6570\r\n  delegatedActions.abort();\r\n});\n"})}),"\n",(0,s.jsx)(t.admonition,{title:"\u6ce8\u610f",type:"info",children:(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"alova \u5185\u7684\u5168\u90e8 use hook \u90fd\u652f\u6301\u64cd\u4f5c\u51fd\u6570\u59d4\u6258\uff0c\u4f46\u4e0d\u540c\u7684 use hook \u6240\u59d4\u6258\u7684\u51fd\u6570\u6709\u6240\u4e0d\u540c\u3002"}),"\n",(0,s.jsxs)(t.li,{children:["\u4f7f\u7528",(0,s.jsx)(t.code,{children:"actionDelegationMiddleware"}),"\u65f6\uff0c\u59d4\u6258\u540d\u79f0\u53ef\u4f20\u5165\u5b57\u7b26\u4e32\u3001\u6570\u5b57\u3001symbol \u503c\u3002"]}),"\n"]})}),"\n",(0,s.jsx)(t.h3,{id:"\u6279\u91cf\u89e6\u53d1\u64cd\u4f5c\u51fd\u6570",children:"\u6279\u91cf\u89e6\u53d1\u64cd\u4f5c\u51fd\u6570"}),"\n",(0,s.jsxs)(t.p,{children:["\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528",(0,s.jsx)(t.code,{children:"accessAction"}),"\u89e6\u53d1\u4e86\u4e00\u4e2a use hook \u7684\u64cd\u4f5c\u51fd\u6570\uff0c\u4f46\u5b9e\u9645\u4e0a\uff0c\u76f8\u540c\u540d\u79f0\u7684\u59d4\u6258\u4e0d\u4f1a\u4e92\u76f8\u8986\u76d6\uff0c\u800c\u662f\u4f1a\u4fdd\u5b58\u5728\u4e00\u7ec4\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u540d\u79f0\u540c\u65f6\u89e6\u53d1\u5b83\u4eec\u59d4\u6258\u7684\u51fd\u6570\u3002"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",metastring:"title=\u7ec4\u4ef6C",children:"import { actionDelegationMiddleware } from '@alova/scene-vue';\r\n\r\nuseRequest(queryTodo, {\r\n  // ...\r\n  middleware: actionDelegationMiddleware('actionName1')\r\n});\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",metastring:"title=\u7ec4\u4ef6D",children:"import { actionDelegationMiddleware } from '@alova/scene-vue';\r\n\r\nuseRequest(queryTodo, {\r\n  // ...\r\n  middleware: actionDelegationMiddleware('actionName1')\r\n});\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",metastring:"title=\u7ec4\u4ef6E",children:"import { accessAction } from '@alova/scene-vue';\r\n\r\n// \u56e0\u4e3a\u5c06\u4f1a\u5339\u914d\u7ec4\u4ef6C\u3001\u7ec4\u4ef6D\u7684\u59d4\u6258hook\uff0c\u56e0\u6b64\u56de\u8c03\u51fd\u6570\u5c06\u88ab\u6267\u884c\u4e24\u6b21\r\naccessAction('actionName1', delegatedActions => {\r\n  // \u8c03\u7528\u7ec4\u4ef6C\u3001\u7ec4\u4ef6D\u4e2d\u7684send\u51fd\u6570\r\n  delegatedActions.send();\r\n\r\n  // \u8c03\u7528\u7ec4\u4ef6C\u3001\u7ec4\u4ef6D\u4e2d\u7684abort\u51fd\u6570\r\n  delegatedActions.abort();\r\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u540c\u65f6\uff0c\u8fd8\u53ef\u4ee5\u5728",(0,s.jsx)(t.code,{children:"accessAction"}),"\u4e2d\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u6765\u6279\u91cf\u89e6\u53d1\u59d4\u6258\u540d\u79f0\u6ee1\u8db3\u6761\u4ef6\u7684\u64cd\u4f5c\u51fd\u6570"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",metastring:"title=\u7ec4\u4ef6F",children:"import { actionDelegationMiddleware } from '@alova/scene-vue';\r\n\r\nuseRequest(queryTodo, {\r\n  // ...\r\n  middleware: actionDelegationMiddleware('prefix_name1')\r\n});\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",metastring:"title=\u7ec4\u4ef6G",children:"import { actionDelegationMiddleware } from '@alova/scene-vue';\r\n\r\nuseRequest(queryTodo, {\r\n  // ...\r\n  middleware: actionDelegationMiddleware('prefix_name2')\r\n});\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",metastring:"title=\u7ec4\u4ef6H",children:"import { accessAction } from '@alova/scene-vue';\r\n\r\n// \u56e0\u4e3a\u5c06\u4f1a\u5339\u914d\u7ec4\u4ef6F\u3001\u7ec4\u4ef6G\u7684\u59d4\u6258hook\uff0c\u56e0\u6b64\u56de\u8c03\u51fd\u6570\u5c06\u88ab\u6267\u884c\u4e24\u6b21\r\naccessAction(/^prefix_/, delegatedActions => {\r\n  // \u8c03\u7528\u7ec4\u4ef6F\u3001\u7ec4\u4ef6G\u4e2d\u7684send\u51fd\u6570\r\n  delegatedActions.send();\r\n\r\n  // \u8c03\u7528\u7ec4\u4ef6F\u3001\u7ec4\u4ef6G\u4e2d\u7684abort\u51fd\u6570\r\n  delegatedActions.abort();\r\n});\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u64cd\u4f5c\u51fd\u6570\u59d4\u6258\u8868",children:"\u64cd\u4f5c\u51fd\u6570\u59d4\u6258\u8868"}),"\n",(0,s.jsx)(t.p,{children:"\u5c3d\u7ba1\u5927\u90e8\u5206 hook \u59d4\u6258\u7684\u64cd\u4f5c\u51fd\u6570\u4e0e\u5b83\u672c\u8eab\u5e26\u6709\u7684\u64cd\u4f5c\u51fd\u6570\u76f8\u540c\uff0c\u4f46\u8fd9\u4e0d\u662f\u7edd\u5bf9\u7684\uff0c\u4ee5\u4e0b\u662f\u6bcf\u4e2a hook \u7684\u64cd\u4f5c\u51fd\u6570\u59d4\u6258\u8868\u3002"}),"\n",(0,s.jsx)(t.h3,{id:"userequest",children:"useRequest"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u540d\u79f0"}),(0,s.jsx)(t.th,{children:"\u63cf\u8ff0"}),(0,s.jsx)(t.th,{children:"\u51fd\u6570\u53c2\u6570"}),(0,s.jsx)(t.th,{children:"\u8fd4\u56de\u503c"}),(0,s.jsx)(t.th,{children:"\u7248\u672c"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"send"}),(0,s.jsxs)(t.td,{children:["\u4e0e ",(0,s.jsx)(t.a,{href:"/tutorial/learning/use-request",children:"useRequset"}),".send \u76f8\u540c"]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"abort"}),(0,s.jsxs)(t.td,{children:["\u4e0e ",(0,s.jsx)(t.a,{href:"/tutorial/learning/use-request",children:"useRequset"}),".abort \u76f8\u540c"]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"update"}),(0,s.jsxs)(t.td,{children:["\u4e0e ",(0,s.jsx)(t.a,{href:"/tutorial/learning/use-request",children:"useRequset"}),".update \u76f8\u540c"]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"usewatcher",children:"useWatcher"}),"\n",(0,s.jsxs)(t.p,{children:["\u4e0e",(0,s.jsx)(t.a,{href:"#userequest",children:"useRequest \u59d4\u6258\u5217\u8868"}),"\u76f8\u540c\u3002"]}),"\n",(0,s.jsx)(t.h3,{id:"usefetcher",children:"useFetcher"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u540d\u79f0"}),(0,s.jsx)(t.th,{children:"\u63cf\u8ff0"}),(0,s.jsx)(t.th,{children:"\u51fd\u6570\u53c2\u6570"}),(0,s.jsx)(t.th,{children:"\u8fd4\u56de\u503c"}),(0,s.jsx)(t.th,{children:"\u7248\u672c"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"fetch"}),(0,s.jsxs)(t.td,{children:["\u4e0e ",(0,s.jsx)(t.a,{href:"/tutorial/learning/use-fetcher",children:"useFetcher"}),".fetch \u76f8\u540c"]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"abort"}),(0,s.jsxs)(t.td,{children:["\u4e0e ",(0,s.jsx)(t.a,{href:"/tutorial/learning/use-fetcher",children:"useFetcher"}),".abort \u76f8\u540c"]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"update"}),(0,s.jsxs)(t.td,{children:["\u4e0e ",(0,s.jsx)(t.a,{href:"/tutorial/learning/use-fetcher",children:"useFetcher"}),".update \u76f8\u540c"]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"usepagination",children:"usePagination"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u540d\u79f0"}),(0,s.jsx)(t.th,{children:"\u63cf\u8ff0"}),(0,s.jsx)(t.th,{children:"\u51fd\u6570\u53c2\u6570"}),(0,s.jsx)(t.th,{children:"\u8fd4\u56de\u503c"}),(0,s.jsx)(t.th,{children:"\u7248\u672c"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"refresh"}),(0,s.jsxs)(t.td,{children:["\u8be6\u89c1",(0,s.jsx)(t.a,{href:"/tutorial/strategy/usePagination#api",children:"usePagination \u64cd\u4f5c\u51fd\u6570"})]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"insert"}),(0,s.jsxs)(t.td,{children:["\u8be6\u89c1",(0,s.jsx)(t.a,{href:"/tutorial/strategy/usePagination#api",children:"usePagination \u64cd\u4f5c\u51fd\u6570"})]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"remove"}),(0,s.jsxs)(t.td,{children:["\u8be6\u89c1",(0,s.jsx)(t.a,{href:"/tutorial/strategy/usePagination#api",children:"usePagination \u64cd\u4f5c\u51fd\u6570"})]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"replace"}),(0,s.jsxs)(t.td,{children:["\u8be6\u89c1",(0,s.jsx)(t.a,{href:"/tutorial/strategy/usePagination#api",children:"usePagination \u64cd\u4f5c\u51fd\u6570"})]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"reload"}),(0,s.jsxs)(t.td,{children:["\u8be6\u89c1",(0,s.jsx)(t.a,{href:"/tutorial/strategy/usePagination#api",children:"usePagination \u64cd\u4f5c\u51fd\u6570"})]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"update"}),(0,s.jsxs)(t.td,{children:["\u8be6\u89c1",(0,s.jsx)(t.a,{href:"/tutorial/strategy/usePagination#api",children:"usePagination \u64cd\u4f5c\u51fd\u6570"})]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"getState"}),(0,s.jsx)(t.td,{children:"\u6309\u540d\u79f0\u83b7\u53d6\u5206\u9875\u76f8\u5173\u6570\u636e"}),(0,s.jsx)(t.td,{children:"stateKey: 'page' | 'pageSize' | 'data' | 'pageCount' | 'total' | 'isLastPage'"}),(0,s.jsx)(t.td,{children:"\u5bf9\u5e94 statekey \u7684\u503c"}),(0,s.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"usesqrequest",children:"useSQRequest"}),"\n",(0,s.jsxs)(t.p,{children:["\u4e0e",(0,s.jsx)(t.a,{href:"#userequest",children:"useRequest \u59d4\u6258\u5217\u8868"}),"\u76f8\u540c\u3002"]}),"\n",(0,s.jsx)(t.h3,{id:"useform",children:"useForm"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u540d\u79f0"}),(0,s.jsx)(t.th,{children:"\u63cf\u8ff0"}),(0,s.jsx)(t.th,{children:"\u51fd\u6570\u53c2\u6570"}),(0,s.jsx)(t.th,{children:"\u8fd4\u56de\u503c"}),(0,s.jsx)(t.th,{children:"\u7248\u672c"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"updateForm"}),(0,s.jsxs)(t.td,{children:["\u8be6\u89c1",(0,s.jsx)(t.a,{href:"/tutorial/strategy/useForm#api",children:"useForm \u64cd\u4f5c\u51fd\u6570"})]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"reset"}),(0,s.jsxs)(t.td,{children:["\u8be6\u89c1",(0,s.jsx)(t.a,{href:"/tutorial/strategy/useForm#api",children:"useForm \u64cd\u4f5c\u51fd\u6570"})]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"send"}),(0,s.jsxs)(t.td,{children:["\u4e0e ",(0,s.jsx)(t.a,{href:"/tutorial/learning/use-request",children:"useRequset"}),".send \u76f8\u540c"]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"abort"}),(0,s.jsxs)(t.td,{children:["\u4e0e ",(0,s.jsx)(t.a,{href:"/tutorial/learning/use-request",children:"useRequset"}),".abort \u76f8\u540c"]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"update"}),(0,s.jsxs)(t.td,{children:["\u4e0e ",(0,s.jsx)(t.a,{href:"/tutorial/learning/use-request",children:"useRequset"}),".update \u76f8\u540c"]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"usecaptcha",children:"useCaptcha"}),"\n",(0,s.jsxs)(t.p,{children:["\u4e0e",(0,s.jsx)(t.a,{href:"#userequest",children:"useRequest \u59d4\u6258\u5217\u8868"}),"\u76f8\u540c\u3002"]}),"\n",(0,s.jsx)(t.h3,{id:"useretriablerequest",children:"useRetriableRequest"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u540d\u79f0"}),(0,s.jsx)(t.th,{children:"\u63cf\u8ff0"}),(0,s.jsx)(t.th,{children:"\u51fd\u6570\u53c2\u6570"}),(0,s.jsx)(t.th,{children:"\u8fd4\u56de\u503c"}),(0,s.jsx)(t.th,{children:"\u7248\u672c"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"stop"}),(0,s.jsxs)(t.td,{children:["\u8be6\u89c1",(0,s.jsx)(t.a,{href:"/tutorial/strategy/useRetriableRequest#api",children:"useRetriableRequest \u64cd\u4f5c\u51fd\u6570"})]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"send"}),(0,s.jsxs)(t.td,{children:["\u4e0e ",(0,s.jsx)(t.a,{href:"/tutorial/learning/use-request",children:"useRequset"}),".send \u76f8\u540c"]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"abort"}),(0,s.jsxs)(t.td,{children:["\u4e0e ",(0,s.jsx)(t.a,{href:"/tutorial/learning/use-request",children:"useRequset"}),".abort \u76f8\u540c"]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"update"}),(0,s.jsxs)(t.td,{children:["\u4e0e ",(0,s.jsx)(t.a,{href:"/tutorial/learning/use-request",children:"useRequset"}),".update \u76f8\u540c"]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"useserialrequest",children:"useSerialRequest"}),"\n",(0,s.jsxs)(t.p,{children:["\u4e0e",(0,s.jsx)(t.a,{href:"#userequest",children:"useRequest \u59d4\u6258\u5217\u8868"}),"\u76f8\u540c\u3002"]}),"\n",(0,s.jsx)(t.h3,{id:"useserialwatcher",children:"useSerialWatcher"}),"\n",(0,s.jsxs)(t.p,{children:["\u4e0e",(0,s.jsx)(t.a,{href:"#userequest",children:"useRequest \u59d4\u6258\u5217\u8868"}),"\u76f8\u540c\u3002"]})]})}function x(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5162:(e,t,r)=>{r.d(t,{Z:()=>l});r(7294);var s=r(4334);const n={tabItem:"tabItem_Ymn6"};var a=r(5893);function l(e){let{children:t,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(n.tabItem,l),hidden:r,children:t})}},4866:(e,t,r)=>{r.d(t,{Z:()=>y});var s=r(7294),n=r(4334),a=r(2466),l=r(6550),i=r(469),d=r(1980),c=r(7392),u=r(12);function o(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return o(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:n}}=e;return{value:t,label:r,attributes:s,default:n}}))}(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,d._X)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=h(e),[l,d]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[c,o]=j({queryString:r,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,u.Nk)(r);return[n,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),m=(()=>{const e=c??p;return x({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{m&&d(m)}),[m]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!x({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);d(e),o(e),g(e)}),[o,g,a]),tabValues:a}}var g=r(2389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(5893);function f(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),u=e=>{const t=e.currentTarget,r=d.indexOf(t),n=i[r].value;n!==s&&(c(t),l(n))},o=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>d.push(e),onKeyDown:o,onClick:u,...a,className:(0,n.Z)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":s===t}),children:r??t},t)}))})}function b(e){let{lazy:t,children:r,selectedValue:n}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function q(e){const t=p(e);return(0,v.jsxs)("div",{className:(0,n.Z)("tabs-container",m.tabList),children:[(0,v.jsx)(f,{...e,...t}),(0,v.jsx)(b,{...e,...t})]})}function y(e){const t=(0,g.Z)();return(0,v.jsx)(q,{...e,children:o(e.children)},String(t))}},1151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>l});var s=r(7294);const n={},a=s.createContext(n);function l(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);