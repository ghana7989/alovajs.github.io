"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[7503],{6367:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var t=n(5893),a=n(1151),o=n(4866),s=n(5162);const l={title:"\u6a21\u62df\u6570\u636e",sidebar_position:10},c=void 0,i={id:"tutorial/extension/alova-mock",title:"\u6a21\u62df\u6570\u636e",description:"\u6b64 mock \u63d2\u4ef6\u662f\u4e00\u4e2a alova \u7684\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u4e0e\u4f20\u7edf\u7684 Proxy \u5f62\u5f0f\u4e0d\u540c\uff0c\u4f60\u53ef\u4ee5\u5f88\u597d\u5730\u63a7\u5236\u4f7f\u7528 mock \u6570\u636e\u7684\u4f7f\u7528\u8303\u56f4\uff0c\u4f60\u53ef\u4ee5\u63a7\u5236\u5168\u5c40\u8303\u56f4\u3001\u67d0\u4e00\u7ec4\u63a5\u53e3\u8303\u56f4\uff0c\u751a\u81f3\u662f\u67d0\u4e00\u4e2a\u63a5\u53e3\u7684\u542f\u7528\u548c\u7981\u7528\uff0c\u8fd9\u5728\u6211\u4eec\u5b9e\u9645\u7684\u4e1a\u52a1\u573a\u666f\u4e2d\u662f\u5f88\u6709\u7528\u7684\uff0c\u6bcf\u4e00\u6b21\u7684\u8fed\u4ee3\u90fd\u4f1a\u65b0\u589e\u6216\u4fee\u6539\u4e00\u7ec4\u63a5\u53e3\uff0c\u6211\u4eec\u5e0c\u671b\u8ba9\u4e4b\u524d\u7684\u529f\u80fd\u8fd8\u662f\u8d70\u5df2\u5f00\u53d1\u597d\u7684\u63a5\u53e3\uff0c\u800c\u8ba9\u65b0\u589e\u6216\u4fee\u6539\u7684\u63a5\u53e3\u8d70\u6a21\u62df\u6570\u636e\uff0c\u6b64\u65f6\u5c31\u53ef\u4ee5\u5c06\u6bcf\u4e2a\u5f00\u53d1\u4eba\u5458\u9488\u5bf9\u672c\u6b21\u8fed\u4ee3\u6d89\u53ca\u5230\u7684\u63a5\u53e3\u5206\u4e3a\u4e00\u7ec4\uff0c\u5e76\u5bf9\u5b83\u4eec\u8fdb\u884c\u5f00\u542f\u6216\u5173\u95ed\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/09-extension/01-alova-mock.md",sourceDirName:"tutorial/09-extension",slug:"/tutorial/extension/alova-mock",permalink:"/zh-CN/tutorial/extension/alova-mock",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/09-extension/01-alova-mock.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\u6a21\u62df\u6570\u636e",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Extensions",permalink:"/zh-CN/category/extensions"},next:{title:"XMLHttpRequest\u9002\u914d\u5668",permalink:"/zh-CN/tutorial/extension/alova-adapter-xhr"}},d={},u=[{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u5b9a\u4e49 mock \u63a5\u53e3",id:"\u5b9a\u4e49-mock-\u63a5\u53e3",level:3},{value:"\u521b\u5efa\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668",id:"\u521b\u5efa\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668",level:3},{value:"\u8def\u5f84\u5339\u914d\u6a21\u5f0f",id:"\u8def\u5f84\u5339\u914d\u6a21\u5f0f",level:3},{value:"\u5b9e\u8df5\u5efa\u8bae",id:"\u5b9e\u8df5\u5efa\u8bae",level:2},{value:"\u6309\u6bcf\u4e2a\u5f00\u53d1\u8005\u6bcf\u6b21\u7248\u672c\u5206\u7ec4\u63a5\u53e3",id:"\u6309\u6bcf\u4e2a\u5f00\u53d1\u8005\u6bcf\u6b21\u7248\u672c\u5206\u7ec4\u63a5\u53e3",level:3},{value:"\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u6392\u9664 mock \u4ee3\u7801",id:"\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u6392\u9664-mock-\u4ee3\u7801",level:3},{value:"\u4e0e mockjs \u4e00\u540c\u4f7f\u7528",id:"\u4e0e-mockjs-\u4e00\u540c\u4f7f\u7528",level:3},{value:"\u8f6c\u6362\u6a21\u62df\u6570\u636e",id:"\u8f6c\u6362\u6a21\u62df\u6570\u636e",level:2},{value:"\u8f6c\u6362\u54cd\u5e94\u6570\u636e",id:"\u8f6c\u6362\u54cd\u5e94\u6570\u636e",level:3},{value:"\u8f6c\u6362\u9519\u8bef\u5bf9\u8c61",id:"\u8f6c\u6362\u9519\u8bef\u5bf9\u8c61",level:3}];function h(e){const r={admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"\u6b64 mock \u63d2\u4ef6\u662f\u4e00\u4e2a alova \u7684\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u4e0e\u4f20\u7edf\u7684 Proxy \u5f62\u5f0f\u4e0d\u540c\uff0c\u4f60\u53ef\u4ee5\u5f88\u597d\u5730\u63a7\u5236\u4f7f\u7528 mock \u6570\u636e\u7684\u4f7f\u7528\u8303\u56f4\uff0c\u4f60\u53ef\u4ee5\u63a7\u5236\u5168\u5c40\u8303\u56f4\u3001\u67d0\u4e00\u7ec4\u63a5\u53e3\u8303\u56f4\uff0c\u751a\u81f3\u662f\u67d0\u4e00\u4e2a\u63a5\u53e3\u7684\u542f\u7528\u548c\u7981\u7528\uff0c\u8fd9\u5728\u6211\u4eec\u5b9e\u9645\u7684\u4e1a\u52a1\u573a\u666f\u4e2d\u662f\u5f88\u6709\u7528\u7684\uff0c\u6bcf\u4e00\u6b21\u7684\u8fed\u4ee3\u90fd\u4f1a\u65b0\u589e\u6216\u4fee\u6539\u4e00\u7ec4\u63a5\u53e3\uff0c\u6211\u4eec\u5e0c\u671b\u8ba9\u4e4b\u524d\u7684\u529f\u80fd\u8fd8\u662f\u8d70\u5df2\u5f00\u53d1\u597d\u7684\u63a5\u53e3\uff0c\u800c\u8ba9\u65b0\u589e\u6216\u4fee\u6539\u7684\u63a5\u53e3\u8d70\u6a21\u62df\u6570\u636e\uff0c\u6b64\u65f6\u5c31\u53ef\u4ee5\u5c06\u6bcf\u4e2a\u5f00\u53d1\u4eba\u5458\u9488\u5bf9\u672c\u6b21\u8fed\u4ee3\u6d89\u53ca\u5230\u7684\u63a5\u53e3\u5206\u4e3a\u4e00\u7ec4\uff0c\u5e76\u5bf9\u5b83\u4eec\u8fdb\u884c\u5f00\u542f\u6216\u5173\u95ed\u3002"}),"\n",(0,t.jsx)(r.h2,{id:"\u7279\u6027",children:"\u7279\u6027"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"\u2728 \u4e0e alova \u65e0\u7f1d\u534f\u4f5c"}),"\n",(0,t.jsx)(r.li,{children:"\u2728 \u6a21\u62df\u8bf7\u6c42\u4efb\u610f\u5206\u7ec4\uff0c\u53ef\u63a7\u5236\u5168\u5c40\u3001\u7ec4\u3001\u4ee5\u53ca\u5355\u4e2a\u6a21\u62df\u63a5\u53e3\u7684\u542f\u7528\u548c\u7981\u7528"}),"\n",(0,t.jsx)(r.li,{children:"\u2728 \u4e0e mockjs \u914d\u5408\u4f7f\u7528"}),"\n",(0,t.jsx)(r.li,{children:"\u2728 \u4e0d\u6c61\u67d3\u751f\u4ea7\u73af\u5883"}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,t.jsxs)(o.Z,{groupId:"framework",children:[(0,t.jsx)(s.Z,{value:"1",label:"npm",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"npm install @alova/mock --save\n"})})}),(0,t.jsx)(s.Z,{value:"2",label:"yarn",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"yarn add @alova/mock\n"})})})]}),"\n",(0,t.jsx)(r.p,{children:"\u4ee5\u4e0b\u4e3a\u4f7f\u7528\u6d41\u7a0b\u3002"}),"\n",(0,t.jsx)(r.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,t.jsx)(r.h3,{id:"\u5b9a\u4e49-mock-\u63a5\u53e3",children:"\u5b9a\u4e49 mock \u63a5\u53e3"}),"\n",(0,t.jsxs)(r.p,{children:["\u4f7f\u7528",(0,t.jsx)(r.code,{children:"defineMock"}),"\u5b9a\u4e49\u4e00\u7ec4 mock \u63a5\u53e3\uff0c\u4f60\u53ef\u4ee5\u5728\u6bcf\u4e00\u9879\u6a21\u62df\u63a5\u53e3\u4e2d\u76f4\u63a5\u6307\u5b9a\u8fd4\u56de\u54cd\u5e94\u6570\u636e\uff0c\u6216\u6307\u5b9a\u4e3a\u56de\u8c03\u51fd\u6570\u52a8\u6001\u8ba1\u7b97\u54cd\u5e94\u6570\u636e\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",metastring:"title=mockGrou1.js",children:"import { defineMock } from '@alova/mock';\r\n\r\nexport default defineMock(\r\n  {\r\n    // \u6355\u83b7get\u8bf7\u6c42\r\n    '/todo': [1, 2, 3, 4],\r\n\r\n    // rest\u98ce\u683c\u8bf7\u6c42\r\n    '/todo/{id}': ({ params }) => {\r\n      const id = params.id;\r\n      // ...\r\n      return {\r\n        title: '...',\r\n        time: '10:00'\r\n      };\r\n    },\r\n\r\n    // \u6355\u83b7post\u8bf7\u6c42\r\n    '[POST]/todo': ({ query, data }) => {\r\n      // ...\r\n      return { success: true };\r\n    },\r\n\r\n    // \u8fd4\u56de\u66f4\u8be6\u7ec6\u7684\u4fe1\u606f\r\n    '[POST]/todo': ({ query, data }) => {\r\n      // ...\r\n      return {\r\n        status: 403,\r\n        statusText: 'unknown error',\r\n        responseHeaders: {\r\n          // ...\r\n        },\r\n        body: {\r\n          success: true\r\n        }\r\n      };\r\n    },\r\n\r\n    // \u6a21\u62df\u7f51\u7edc\u9519\u8bef\r\n    '[POST]/todo': ({ query, data }) => {\r\n      throw new Error('network error');\r\n    },\r\n\r\n    // key\u524d\u9762\u6dfb\u52a0`-`\uff0c\u8868\u793a\u7981\u7528\u6b64mock\u63a5\u53e3\r\n    '-[DELETE]/todo/{id}': ({ params }) => {\r\n      // ...\r\n      return { success: true };\r\n    }\r\n  },\r\n  true\r\n); // \u7b2c\u4e8c\u4e2a\u53c2\u6570\u8868\u793a\u662f\u5426\u542f\u7528\u672c\u7ec4mock\u63a5\u53e3\uff0c\u9ed8\u8ba4\u4e3atrue\uff0c\u53ef\u4ee5\u6307\u5b9a\u4e3afalse\u5173\u95ed\n"})}),"\n",(0,t.jsx)(r.h3,{id:"\u521b\u5efa\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668",children:"\u521b\u5efa\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668"}),"\n",(0,t.jsxs)(r.p,{children:["\u5728\u8c03\u7528",(0,t.jsx)(r.code,{children:"createAlova"}),"\u65f6\u521b\u5efa\u4e00\u4e2a\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u5e76\u5c06 mock \u63a5\u53e3\u4f20\u5165\u5373\u53ef\u5b8c\u6210\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"import GlobalFetch from 'alova/GlobalFetch';\r\nimport { createAlovaMockAdapter } from '@alova/mock';\r\nimport mockGroup1 from './mockGroup1';\r\n\r\n// highlight-start\r\nconst mockAdapter = createAlovaMockAdapter([mockGroup1, /** ... */], {\r\n  // \u5168\u5c40\u63a7\u5236\u662f\u5426\u542f\u7528mock\u63a5\u53e3\uff0c\u9ed8\u8ba4\u4e3atrue\r\n  enable: true,\r\n\r\n  // \u975e\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u7528\u4e8e\u672a\u5339\u914dmock\u63a5\u53e3\u65f6\u53d1\u9001\u8bf7\u6c42\r\n  httpAdapter: GlobalFetch(),\r\n\r\n  // mock\u63a5\u53e3\u54cd\u5e94\u5ef6\u8fdf\uff0c\u5355\u4f4d\u6beb\u79d2\r\n  delay: 1000,\r\n\r\n  // \u662f\u5426\u6253\u5370mock\u63a5\u53e3\u8bf7\u6c42\u4fe1\u606f\r\n  mockRequestLogger: true,\r\n\r\n  // \u6a21\u62df\u63a5\u53e3\u56de\u8c03\uff0cdata\u4e3a\u8fd4\u56de\u7684\u6a21\u62df\u6570\u636e\uff0c\u4f60\u53ef\u4ee5\u7528\u5b83\u6784\u9020\u4efb\u4f55\u4f60\u60f3\u8981\u7684\u5bf9\u8c61\u8fd4\u56de\u7ed9alova\r\n  // \u4ee5\u4e0b\u4e3a\u9ed8\u8ba4\u7684\u56de\u8c03\u51fd\u6570\uff0c\u5b83\u9002\u7528\u4e8e\u4f7f\u7528GlobalFetch\u8bf7\u6c42\u9002\u914d\u5668\r\n  // \u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u5176\u4ed6\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u5728\u6a21\u62df\u63a5\u53e3\u56de\u8c03\u4e2d\u8bf7\u81ea\u5b9a\u4e49\u8fd4\u56de\u9002\u5408\u9002\u914d\u5668\u7684\u6570\u636e\u7ed3\u6784\r\n  onMockResponse: data => new Response(JSON.stringify(data))\r\n});\r\n// highlight-end\r\n\r\nexport const alovaInst = createAlova({\r\n  baseURL: 'http://xxx',\r\n\r\n  // \u4f7f\u7528mock\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u5982\u679c\u9700\u8981\u5207\u6362\u9002\u914d\u5668\uff0c\u8bf7\u770b\u4e0b\u9762\u7684\u5b9e\u8df5\u5efa\u8bae\r\n  requestAdapter: mockAdapter,\r\n\r\n  statesHook: /** ... */\r\n});\n"})}),"\n",(0,t.jsx)(r.h3,{id:"\u8def\u5f84\u5339\u914d\u6a21\u5f0f",children:"\u8def\u5f84\u5339\u914d\u6a21\u5f0f"}),"\n",(0,t.jsx)(r.admonition,{title:"\u7248\u672c\u8981\u6c42",type:"info",children:(0,t.jsx)(r.p,{children:"1.5.0+"})}),"\n",(0,t.jsxs)(r.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5728",(0,t.jsx)(r.code,{children:"defineMock"}),"\u4e2d\u5b9a\u4e49\u7684\u8def\u5f84\u662f\u4e00\u4e2a url \u7684\u5b8c\u6574 pathname\uff0c\u770b\u4ee5\u4e0b\u4ee3\u7801\u7247\u6bb5\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"const alovaInst = createAlova({\r\n  baseURL: 'https://api.alovajs.org'\r\n  // ...\r\n});\r\nalovaInst.Get('/user?id=1').send();\n"})}),"\n",(0,t.jsxs)(r.p,{children:["\u793a\u4f8b\u4e2d\u7684\u8bf7\u6c42\u8def\u5f84\u4e3a",(0,t.jsx)(r.code,{children:"https://api.alovajs.org/user?id=1"}),"\u65f6\uff0c\u5b83\u7684\u5b8c\u6574 pathname \u4e3a",(0,t.jsx)(r.code,{children:"/user"}),"\uff0c\u6b64\u65f6\u53ef\u4ee5\u5339\u914d\u5230",(0,t.jsx)(r.code,{children:"defineMock"}),"\u4e2d\u7684",(0,t.jsx)(r.code,{children:"/user"}),"\u3002"]}),"\n",(0,t.jsx)(r.p,{children:"\u901a\u5e38\u60c5\u51b5\u4e0b\u8fd9\u5df2\u7ecf\u8db3\u591f\u4e86\uff0c\u4f46\u662f\u5f53\u4f60\u7684 baseURL \u4e0d\u4ec5\u4ec5\u662f\u4e00\u4e2a\u57df\u540d\u65f6\u3002"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"const alovaInst = createAlova({\r\n  baseURL: 'https://api.alovajs.org/v1/subname'\r\n  // ...\r\n});\r\nalovaInst.Get('/user?id=1').send();\n"})}),"\n",(0,t.jsxs)(r.p,{children:["\u8fd9\u4e2a\u793a\u4f8b\u4e2d\u7684\u8bf7\u6c42\u8def\u5f84\u4e3a",(0,t.jsx)(r.code,{children:"https://api.alovajs.org/v1/subname/user?id=1"}),"\uff0cmock \u7684\u5339\u914d\u8def\u5f84\u4e3a",(0,t.jsx)(r.code,{children:"/v1/subname/user"}),"\uff0c\u9700\u8981\u5c06 baseURL \u4e2d\u7684",(0,t.jsx)(r.code,{children:"/v1/subname"}),"\u4e5f\u4e00\u540c\u5199\u4e0a\uff0c\u5f53\u63a5\u53e3\u6570\u91cf\u8f83\u591a\u65f6\u5c31\u7a0d\u663e\u5197\u4f59\u3002"]}),"\n",(0,t.jsxs)(r.p,{children:["\u6b64\u65f6\uff0c\u4f60\u53ef\u4ee5\u5728",(0,t.jsx)(r.code,{children:"createAlovaMockAdapter"}),"\u4e2d\u8bbe\u7f6e",(0,t.jsx)(r.code,{children:"matchMode"}),"\u4e3a",(0,t.jsx)(r.code,{children:"methodurl"}),"\uff0c\u5b83\u5c06\u53ea\u5339\u914d method \u5b9e\u4f8b\u4e2d\u5b9a\u4e49\u7684 url\uff0c\u4f8b\u5982\u4e0a\u9762\u7684\u5b9e\u4f8b\u5c06\u4f1a\u5339\u914d\u5230",(0,t.jsx)(r.code,{children:"/user?id=1"}),"\uff0c\u800c\u4e0d\u518d\u9700\u8981\u5199 baseURL \u4e2d\u7684\u90e8\u5206\uff0c\u76f8\u5bf9\u7684\uff0c\u5982\u679c method \u5b9e\u4f8b\u4e2d\u7684 url \u4e2d\u5e26\u4e86 get \u53c2\u6570\u65f6\uff0c\u4e5f\u9700\u8981\u5c06\u5b83\u4e00\u540c\u5199\u5230",(0,t.jsx)(r.code,{children:"defineMock"}),"\u7684\u5339\u914d\u8def\u5f84\u4e2d\uff0c\u5c31\u50cf\u8fd9\u8fb9\u7684",(0,t.jsx)(r.code,{children:"?id=1"}),"\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"createAlovaMockAdapter([mockGroup1 /** ... */], {\r\n  // ...\r\n  // highlight-start\r\n  matchMode: 'methodurl'\r\n  // highlight-end\r\n});\n"})}),"\n",(0,t.jsx)(r.h2,{id:"\u5b9e\u8df5\u5efa\u8bae",children:"\u5b9e\u8df5\u5efa\u8bae"}),"\n",(0,t.jsx)(r.h3,{id:"\u6309\u6bcf\u4e2a\u5f00\u53d1\u8005\u6bcf\u6b21\u7248\u672c\u5206\u7ec4\u63a5\u53e3",children:"\u6309\u6bcf\u4e2a\u5f00\u53d1\u8005\u6bcf\u6b21\u7248\u672c\u5206\u7ec4\u63a5\u53e3"}),"\n",(0,t.jsx)(r.p,{children:"\u5728\u56e2\u961f\u5f00\u53d1\u573a\u666f\u4e0b\uff0c\u6bcf\u6b21\u7248\u672c\u5f00\u53d1\u65f6\u6211\u4eec\u7ecf\u5e38\u53ea\u9700\u8981\u5bf9\u90e8\u5206\u672a\u5f00\u53d1\u597d\u7684\u63a5\u53e3\u8fdb\u884c\u6a21\u62df\u8bf7\u6c42\uff0c\u5e76\u4e14\u5bf9\u4e4b\u524d\u7248\u672c\u7684\u63a5\u53e3\u4f7f\u7528\u6d4b\u8bd5\u73af\u5883\u63a5\u53e3\uff0c\u6b64\u65f6\u4e3a\u4e86\u8fbe\u5230\u66f4\u597d\u7684\u6a21\u62df\u63a5\u53e3\u7ba1\u7406\uff0c\u53ef\u4ee5\u4ee5\u5f00\u53d1\u7248\u672c\u548c\u5f00\u53d1\u8005\u4e24\u4e2a\u7ef4\u5ea6\u5c06\u63a5\u53e3\u5206\u7ec4\u3002"}),"\n",(0,t.jsxs)(r.p,{children:["\u4f8b\u5982\u6709\u4e24\u4e2a\u5f00\u53d1\u8005\u540d\u4e3a ",(0,t.jsx)(r.em,{children:"August"}),"\u3001",(0,t.jsx)(r.em,{children:"kevin"}),"\uff0c\u4ed6\u4eec\u6b63\u5728\u5f00\u53d1 v1.1 \u4ea7\u54c1\u529f\u80fd\uff0c\u4ed6\u4eec\u53ef\u4ee5\u8fd9\u6837\u7ba1\u7406\u6a21\u62df\u63a5\u53e3\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",metastring:"title=August-v1.1.js",children:"import { defineMock } from '@alova/mock';\r\n\r\nexport default defineMock({\r\n  '/todo': [\r\n    /** */\r\n  ],\r\n  '[POST]/todo': ({ data }) => {\r\n    // ...\r\n    // return ...\r\n  }\r\n  // ...\r\n});\n"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",metastring:"title=kevin-v1.1.js",children:"import { defineMock } from '@alova/mock';\r\n\r\nexport default defineMock({\r\n  '[PUT]/todo/add': ({ data }) => {\r\n    // ...\r\n    // return ...\r\n  },\r\n  '[DELETE]/todo/remove': ({ data }) => {\r\n    // ...\r\n    // return ...\r\n  }\r\n  // ...\r\n});\n"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",metastring:"title=request.js",children:"import Augustv1_1 from './August-v1.1';\r\nimport kevinv1_1 from './kevin-v1.1';\r\n\r\nconst mockAdapter = createAlovaMockAdapter([Augustv1_1, kevinv1_1], {\r\n  httpAdapter: GlobalFetch(),\r\n  delay: 1000\r\n});\r\nexport const alovaInst = createAlova({\r\n  baseURL: 'http://xxx',\r\n  requestAdapter: mockAdapter\r\n  // ...\r\n});\n"})}),"\n",(0,t.jsx)(r.h3,{id:"\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u6392\u9664-mock-\u4ee3\u7801",children:"\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u6392\u9664 mock \u4ee3\u7801"}),"\n",(0,t.jsx)(r.p,{children:"mock \u6570\u636e\u4e00\u822c\u53ea\u4f5c\u7528\u4e8e\u5f00\u53d1\u73af\u5883\uff0c\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u5c06\u4f1a\u5207\u6362\u5230\u5b9e\u9645\u7684\u63a5\u53e3\u4e2d\uff0c\u56e0\u6b64\u8fd9\u6bb5 mock \u4ee3\u7801\u5728\u751f\u4ea7\u73af\u5883\u5c31\u53d8\u5f97\u6ca1\u6709\u4f5c\u7528\uff0c\u6b64\u65f6\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u7684\u5224\u65ad\u6765\u6392\u9664\u8fd9\u5757\u4ee3\u7801\uff0c\u4f60\u53ea\u9700\u8981\u8fd9\u6837\u505a\uff1a"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"const globalFetch = GlobalFetch();\r\nconst mockAdapter = createAlovaMockAdapter([mockGroup1, /** ... */], {\r\n  httpAdapter: globalFetch,\r\n  delay: 1000,\r\n});\r\n\r\nexport const alovaInst = createAlova({\r\n  baseURL: 'http://xxx',\r\n\r\n  // highlight-start\r\n  // \u901a\u8fc7\u73af\u5883\u53d8\u91cf\u63a7\u5236\u751f\u4ea7\u73af\u5883\u4e0b\uff0c\u4e0d\u4f1a\u5c06mock\u76f8\u5173\u4ee3\u7801\u6253\u5305\u8fdb\u53bb\r\n  requestAdapter: process.env.NODE_ENV === 'development' ? mockAdapter : globalFetch,\r\n  // highlight-end\r\n\r\n  statesHook: /** ... */\r\n});\n"})}),"\n",(0,t.jsx)(r.h3,{id:"\u4e0e-mockjs-\u4e00\u540c\u4f7f\u7528",children:"\u4e0e mockjs \u4e00\u540c\u4f7f\u7528"}),"\n",(0,t.jsx)(r.p,{children:"\u5982\u679c\u4f60\u4e0d\u5e0c\u671b\u81ea\u5df1\u7f16\u5199\u6a21\u62df\u6570\u636e\uff0c\u800c\u662f\u4f7f\u7528\u6a21\u62df\u6570\u636e\u5e93\uff08\u4f8b\u5982 mockjs\uff09\u4e00\u540c\u4f7f\u7528\uff0c\u4f60\u53ef\u4ee5\u8fd9\u6837\u505a\u3002"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"import { defineMock } from '@alova/mock';\r\nimport Mock from 'mockjs';\r\n\r\nexport default defineMock({\r\n  '/api1': Mock.mock({\r\n    'id|1-10000': 100\r\n  })\r\n});\n"})}),"\n",(0,t.jsx)(r.h2,{id:"\u8f6c\u6362\u6a21\u62df\u6570\u636e",children:"\u8f6c\u6362\u6a21\u62df\u6570\u636e"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"@alova/mock"})," \u9ed8\u8ba4\u5c06\u54cd\u5e94\u6570\u636e\u5305\u88c5\u4e3a Response \u5b9e\u4f8b\uff0c\u5c06\u54cd\u5e94\u5934\u9ed8\u8ba4\u5305\u88c5\u4e3a Headers \u5b9e\u4f8b\uff0c\u8fd9\u662f\u9488\u5bf9",(0,t.jsx)(r.code,{children:"GlobalFetch"}),"\u8fdb\u884c\u9002\u914d\u7684\uff0c\u4f46\u5982\u679c\u4f7f\u7528\u5176\u4ed6\u7684\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u5c31\u9700\u8981\u5c06\u6a21\u62df\u6570\u636e\u8f6c\u6362\u4e3a\u76f8\u5e94\u7684\u683c\u5f0f\u3002"]}),"\n",(0,t.jsx)(r.h3,{id:"\u8f6c\u6362\u54cd\u5e94\u6570\u636e",children:"\u8f6c\u6362\u54cd\u5e94\u6570\u636e"}),"\n",(0,t.jsxs)(r.p,{children:["\u4f60\u53ef\u4ee5\u5728",(0,t.jsx)(r.code,{children:"onMockResponse"}),"\u5b57\u6bb5\u4e2d\u62e6\u622a\u6a21\u62df\u54cd\u5e94\u6570\u636e\u5e76\u8fd4\u56de\u8f6c\u6362\u540e\u7684\u54cd\u5e94\u6570\u636e\u4ee5\u53ca\u54cd\u5e94\u5934\u3002"]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"\u4f60\u4e5f\u53ef\u4ee5\u5728 onMockResponse \u4e2d\u629b\u51fa\u4e00\u4e2a\u9519\u8bef\uff0c\u8868\u793a\u8bf7\u6c42\u5931\u8d25\u3002"}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"const mockAdapter = createAlovaMockAdapter(\r\n  [\r\n    /* \u6a21\u62df\u6570\u636e */\r\n  ],\r\n  {\r\n    // ...\r\n    // highlight-start\r\n    onMockResponse(response, request, currentMethod) {\r\n      // response\u4e3a\u76f8\u5e94\u6570\u636e\u96c6\u5408\uff0c\u5176\u4e2d\u5305\u542bstatus\u3001statusText\u3001responseHeaders\u3001body\r\n      // request\u4e3a\u8bf7\u6c42\u6570\u636e\uff0c\u5176\u4e2d\u5305\u542bquery\u3001params\u3001headers\u3001data\r\n      // currentMethod\u4e3a\u5f53\u524d\u8bf7\u6c42\u7684method\u5b9e\u4f8b\r\n      // ...\r\n      // \u8fd4\u56de\u8f6c\u6362\u540e\u7684\u54cd\u5e94\u6570\u636e\u548c\u54cd\u5e94\u5934\r\n      return {\r\n        response: /** \u54cd\u5e94\u6570\u636e */,\r\n        headers: /** \u54cd\u5e94\u5934 */\r\n      };\r\n    }\r\n    // highlight-end\r\n  }\r\n);\n"})}),"\n",(0,t.jsx)(r.h3,{id:"\u8f6c\u6362\u9519\u8bef\u5bf9\u8c61",children:"\u8f6c\u6362\u9519\u8bef\u5bf9\u8c61"}),"\n",(0,t.jsxs)(r.p,{children:["\u4f60\u53ef\u4ee5\u5728",(0,t.jsx)(r.code,{children:"onMockError"}),"\u5b57\u6bb5\u4e2d\u62e6\u622a\u9519\u8bef\u5b9e\u4f8b\u5e76\u8fd4\u56de\u8f6c\u6362\u540e\u7684\u9519\u8bef\u4fe1\u606f\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"const mockAdapter = createAlovaMockAdapter(\r\n  [\r\n    /* \u6a21\u62df\u6570\u636e */\r\n  ],\r\n  {\r\n    // ...\r\n    // highlight-start\r\n    onMockError(error, currentMethod) {\r\n      // error\u4e3a\u9519\u8bef\u5b9e\u4f8b\r\n      // currentMethod\u4e3a\u5f53\u524d\u8bf7\u6c42\u7684method\u5b9e\u4f8b\r\n      // ...\r\n      // \u8fd4\u56de\u8f6c\u6362\u540e\u7684\u9519\u8bef\u4fe1\u606f\u96c6\u5408\r\n    }\r\n    // highlight-end\r\n  }\r\n);\n"})})]})}function p(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},5162:(e,r,n)=>{n.d(r,{Z:()=>s});n(7294);var t=n(4334);const a={tabItem:"tabItem_Ymn6"};var o=n(5893);function s(e){let{children:r,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,s),hidden:n,children:r})}},4866:(e,r,n)=>{n.d(r,{Z:()=>A});var t=n(7294),a=n(4334),o=n(2466),s=n(6550),l=n(469),c=n(1980),i=n(7392),d=n(12);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:a}}=e;return{value:r,label:n,attributes:t,default:a}}))}(n);return function(e){const r=(0,i.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,c._X)(o),(0,t.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(a.location.search);r.set(o,e),a.replace({...a.location,search:r.toString()})}),[o,a])]}function v(e){const{defaultValue:r,queryString:n=!1,groupId:a}=e,o=h(e),[s,c]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:o}))),[i,u]=m({queryString:n,groupId:a}),[v,x]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,o]=(0,d.Nk)(n);return[a,(0,t.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),j=(()=>{const e=i??v;return p({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{j&&c(j)}),[j]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),x(e)}),[u,x,o]),tabValues:o}}var x=n(2389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=n(5893);function g(e){let{className:r,block:n,selectedValue:t,selectValue:s,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.o5)(),d=e=>{const r=e.currentTarget,n=c.indexOf(r),a=l[n].value;a!==t&&(i(r),s(a))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;r=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;r=c[n]??c[c.length-1];break}}r?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},r),children:l.map((e=>{let{value:r,label:n,attributes:o}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>c.push(e),onKeyDown:u,onClick:d,...o,className:(0,a.Z)("tabs__item",j.tabItem,o?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function b(e){let{lazy:r,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:o.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function f(e){const r=v(e);return(0,k.jsxs)("div",{className:(0,a.Z)("tabs-container",j.tabList),children:[(0,k.jsx)(g,{...e,...r}),(0,k.jsx)(b,{...e,...r})]})}function A(e){const r=(0,x.Z)();return(0,k.jsx)(f,{...e,children:u(e.children)},String(r))}},1151:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>s});var t=n(7294);const a={},o=t.createContext(a);function s(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);