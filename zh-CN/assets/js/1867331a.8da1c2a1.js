"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[5868],{6465:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=r(5893),t=r(1151),o=r(4866),l=r(5162);const s={title:"\u4e86\u89e3alova\u5b9e\u4f8b",sidebar_position:10},i=void 0,c={id:"tutorial/learning/alova-instance",title:"\u4e86\u89e3alova\u5b9e\u4f8b",description:"\u5728 \u5feb\u901f\u5165\u95e8 \u4e2d\u6211\u4eec\u521d\u6b65\u4f7f\u7528\u4e86 alova \u5b9e\u4f8b\uff0c\u5982\u679c\u4f60\u8fd8\u672a\u9605\u8bfb \u5feb\u901f\u5165\u95e8\uff0c\u5efa\u8bae\u4f60\u5148\u9605\u8bfb\u5b83\u518d\u7ee7\u7eed\u9605\u8bfb\u8fd9\u90e8\u5206\u5185\u5bb9\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/03-learning/01-alova-instance.md",sourceDirName:"tutorial/03-learning",slug:"/tutorial/learning/alova-instance",permalink:"/zh-CN/tutorial/learning/alova-instance",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/03-learning/01-alova-instance.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\u4e86\u89e3alova\u5b9e\u4f8b",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Learning",permalink:"/zh-CN/category/learning"},next:{title:"\u8bf7\u6c42\u65b9\u6cd5\u5b9e\u4f8b",permalink:"/zh-CN/tutorial/learning/method-instance"}},u={},d=[{value:"\u521b\u5efa Alova \u5b9e\u4f8b",id:"\u521b\u5efa-alova-\u5b9e\u4f8b",level:2},{value:"\u8bbe\u7f6e\u5168\u5c40\u8bf7\u6c42\u62e6\u622a\u5668",id:"\u8bbe\u7f6e\u5168\u5c40\u8bf7\u6c42\u62e6\u622a\u5668",level:2},{value:"\u8bbe\u7f6e\u5168\u5c40\u54cd\u5e94\u62e6\u622a\u5668",id:"\u8bbe\u7f6e\u5168\u5c40\u54cd\u5e94\u62e6\u622a\u5668",level:2},{value:"\u8bbe\u7f6e\u5168\u5c40\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4",id:"\u8bbe\u7f6e\u5168\u5c40\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4",level:2},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["\u5728 ",(0,a.jsx)(n.a,{href:"/tutorial/get-started/quick-start",children:"\u5feb\u901f\u5165\u95e8"})," \u4e2d\u6211\u4eec\u521d\u6b65\u4f7f\u7528\u4e86 alova \u5b9e\u4f8b\uff0c\u5982\u679c\u4f60\u8fd8\u672a\u9605\u8bfb ",(0,a.jsx)(n.a,{href:"/tutorial/get-started/quick-start",children:"\u5feb\u901f\u5165\u95e8"}),"\uff0c\u5efa\u8bae\u4f60\u5148\u9605\u8bfb\u5b83\u518d\u7ee7\u7eed\u9605\u8bfb\u8fd9\u90e8\u5206\u5185\u5bb9\u3002"]})}),"\n",(0,a.jsx)(n.p,{children:"\u5176\u5b9e\uff0calova \u5b9e\u4f8b\u662f\u4e00\u4e2a\u5168\u5c40\u7684\u8bf7\u6c42\u914d\u7f6e\uff0c\u6240\u6709\u901a\u8fc7\u8fd9\u4e2a alova \u5b9e\u4f8b\u7684\u8bf7\u6c42\u90fd\u5c06\u4f7f\u7528\u5b83\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u63a5\u4e0b\u6765\u8ddf\u7740\u793a\u4f8b\u4ee3\u7801\u6765\u4e86\u89e3\u8fd9\u4e9b\u914d\u7f6e\u5427\uff01"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728\u63a5\u4e0b\u6765\u7684\u5165\u95e8\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u5c06\u4ee5\u5f85\u529e\u4e8b\u9879\uff08todo\uff09\u4e3a\u4f8b\uff0c\u56f4\u7ed5\u7740\u83b7\u53d6\u4e0d\u540c\u65e5\u671f\u7684\u5f85\u529e\u4e8b\u9879\u5217\u8868\u3001\u67e5\u770b todo \u8be6\u60c5\uff0c\u4ee5\u53ca\u521b\u5efa\u3001\u7f16\u8f91\u3001\u5220\u9664\u4e8b\u9879\u7b49\u9700\u6c42\u8fdb\u884c",(0,a.jsx)(n.code,{children:"alova"}),"\u7684\u8bb2\u89e3\u3002\u8ba9\u6211\u4eec\u5f00\u59cb\u5427\uff01"]}),"\n",(0,a.jsx)(n.h2,{id:"\u521b\u5efa-alova-\u5b9e\u4f8b",children:"\u521b\u5efa Alova \u5b9e\u4f8b"}),"\n",(0,a.jsxs)(n.p,{children:["\u4e00\u4e2a alova \u5b9e\u4f8b\u662f\u4f7f\u7528\u7684\u5f00\u7aef\uff0c\u6240\u6709\u7684\u8bf7\u6c42\u90fd\u9700\u8981\u4ece\u5b83\u5f00\u59cb\u3002\u5b83\u7684\u5199\u6cd5\u7c7b\u4f3c",(0,a.jsx)(n.code,{children:"axios"}),"\uff0c\u4ee5\u4e0b\u662f\u4e00\u4e2a\u6700\u7b80\u5355\u7684 alova \u5b9e\u4f8b\u7684\u521b\u5efa\u65b9\u6cd5\u3002"]}),"\n",(0,a.jsxs)(o.Z,{groupId:"framework",children:[(0,a.jsx)(l.Z,{value:"1",label:"vue composition",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import { createAlova } from 'alova';\r\nimport GlobalFetch from 'alova/GlobalFetch';\r\nimport VueHook from 'alova/vue';\r\n\r\nconst alovaInstance = createAlova({\r\n  baseURL: 'https://api.alovajs.org',\r\n  statesHook: VueHook,\r\n  requestAdapter: GlobalFetch()\r\n});\n"})})}),(0,a.jsx)(l.Z,{value:"2",label:"react",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import { createAlova } from 'alova';\r\nimport GlobalFetch from 'alova/GlobalFetch';\r\nimport ReactHook from 'alova/react';\r\n\r\nconst alovaInstance = createAlova({\r\n  baseURL: 'https://api.alovajs.org',\r\n  statesHook: ReactHook,\r\n  requestAdapter: GlobalFetch()\r\n});\n"})})}),(0,a.jsx)(l.Z,{value:"3",label:"svelte",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import { createAlova } from 'alova';\r\nimport GlobalFetch from 'alova/GlobalFetch';\r\nimport SvelteHook from 'alova/svelte';\r\n\r\nconst alovaInstance = createAlova({\r\n  baseURL: 'https://api.alovajs.org',\r\n  statesHook: SvelteHook,\r\n  requestAdapter: GlobalFetch()\r\n});\n"})})}),(0,a.jsx)(l.Z,{value:"4",label:"vue options",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import { createAlova } from 'alova';\r\nimport GlobalFetch from 'alova/GlobalFetch';\r\nimport { VueOptionsHook } from '@alova/vue-options'; // npm install @alova/vue-options\r\n\r\nconst alovaInstance = createAlova({\r\n  baseURL: 'https://api.alovajs.org',\r\n  statesHook: VueOptionsHook,\r\n  requestAdapter: GlobalFetch()\r\n});\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["\u5728\u8fd9\u4e2a\u521b\u5efa alova \u5b9e\u4f8b\u7684\u4ee3\u7801\u4e2d\uff0c\u5206\u522b\u6307\u5b9a\u4e86",(0,a.jsx)(n.strong,{children:"baseURL\u3001statesHook\u3001requestAdapter"}),"\uff0c\u73b0\u5728\u6211\u4eec\u6765\u4e86\u89e3\u4e0b\u5b83\u4eec\uff1a"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"baseURL"}),"\uff1a\uff08\u53ef\u9009\uff09\u8868\u793a\u8bf7\u6c42\u7684\u6839\u8def\u5f84\uff0c\u901a\u8fc7\u8fd9\u4e2a alova \u5b9e\u4f8b\u53d1\u9001\u7684\u8bf7\u6c42\u90fd\u4f1a\u5728\u524d\u9762\u62fc\u63a5 baseURL\uff0c\u4e00\u822c\u8bbe\u7f6e\u4e3a\u57df\u540d\uff1b"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"statesHook"}),"\uff1a\uff08\u5fc5\u987b\uff09\u5b83\u7528\u4e8e\u786e\u5b9a\u5728 use hook\uff08\u4f8b\u5982 useRequest\uff09\u5e94\u8be5\u5982\u4f55\u8fd4\u56de\u72b6\u6001\u5316\u6570\u636e\uff0c\u76ee\u524d\u63d0\u4f9b\u4e86 VueHook\u3001ReactHook\u3001SvelteHook \u5206\u522b\u7528\u4e8e\u652f\u6301 vue\u3001react \u548c svelte\uff0cstatesHook \u5c06\u4f1a\u5e2e\u6211\u4eec\u521b\u5efa\u4e0d\u540c UI \u6846\u67b6\u7684\u8bf7\u6c42\u76f8\u5173\u7684\u3001\u53ef\u4ee5\u88ab Alova \u7ba1\u7406\u7684\u72b6\u6001\uff0c\u5305\u62ec\u8bf7\u6c42\u72b6\u6001 loading\u3001\u54cd\u5e94\u6570\u636e data\u3001\u8bf7\u6c42\u9519\u8bef\u5bf9\u8c61 error \u7b49\uff1b"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"requestAdapter"}),"\uff1a\uff08\u5fc5\u987b\uff09\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u8bf7\u6c42\u9002\u914d\u5668\u5c06\u7528\u4e8e\u6240\u6709\u8bf7\u6c42\u7684\u53d1\u9001\uff0c\u8bf7\u6c42\u53d1\u9001\u6a21\u5757\u548c\u5177\u4f53\u7684\u8bf7\u6c42\u4fe1\u606f\u662f\u89e3\u8026\u7684\u3002\u5728\u793a\u4f8b\u4ee3\u7801\u4e2d\u4f7f\u7528\u4e86\u9ed8\u8ba4\u63d0\u4f9b\u7684 ",(0,a.jsx)(n.strong,{children:"GlobalFetch"}),"\uff0c\u5b83\u7531",(0,a.jsx)(n.code,{children:"window.fetch"}),"\u63d0\u4f9b\u8bf7\u6c42\u652f\u6301\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u8bbe\u7f6e\u5168\u5c40\u8bf7\u6c42\u62e6\u622a\u5668",children:"\u8bbe\u7f6e\u5168\u5c40\u8bf7\u6c42\u62e6\u622a\u5668"}),"\n",(0,a.jsxs)(n.p,{children:["\u901a\u5e38\uff0c\u6211\u4eec\u9700\u8981\u8ba9\u6240\u6709\u8bf7\u6c42\u90fd\u7528\u4e0a\u76f8\u540c\u7684\u914d\u7f6e\uff0c\u4f8b\u5982\u6dfb\u52a0 token\u3001timestamp \u5230\u8bf7\u6c42\u5934\uff0c",(0,a.jsx)(n.code,{children:"alova"}),"\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u5168\u5c40\u7684\u8bf7\u6c42\u62e6\u622a\u5668\uff0c\u5b83\u5c06\u5728\u8bf7\u6c42\u524d\u88ab\u89e6\u53d1\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u6b64\u62e6\u622a\u5668\u4e2d\u7edf\u4e00\u8bbe\u7f6e\u8bf7\u6c42\u53c2\u6570\uff0c\u8fd9\u4e5f\u4e0e",(0,a.jsx)(n.code,{children:"axios"}),"\u76f8\u4f3c\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const alovaInstance = createAlova({\r\n  // ...\r\n  // \u51fd\u6570\u53c2\u6570\u4e3a\u4e00\u4e2amethod\u5b9e\u4f8b\uff0c\u5305\u542b\u5982url\u3001params\u3001data\u3001headers\u7b49\u8bf7\u6c42\u6570\u636e\r\n  // \u4f60\u53ef\u4ee5\u81ea\u7531\u4fee\u6539\u8fd9\u4e9b\u6570\u636e\r\n  // highlight-start\r\n  beforeRequest(method) {\r\n    // \u5047\u8bbe\u6211\u4eec\u9700\u8981\u6dfb\u52a0token\u5230\u8bf7\u6c42\u5934\r\n    method.config.headers.token = 'token';\r\n  }\r\n  // highlight-end\r\n});\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u4f60\u4e5f\u53ef\u4ee5\u5c06 beforeRequest \u8bbe\u7f6e\u4e3a\u5f02\u6b65\u51fd\u6570\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const alovaInstance = createAlova({\r\n  // ...\r\n  // highlight-start\r\n  async beforeRequest(method) {\r\n    // \u6267\u884c\u4e00\u4e9b\u5f02\u6b65\u4efb\u52a1\r\n    // ...\r\n  }\r\n  // highlight-end\r\n});\n"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"\u8be6\u7ec6\u7684\u8bf7\u6c42\u65b9\u6cd5\u5b9e\u4f8b\u4ecb\u7ecd\u5c06\u5728\u4e0b\u4e00\u8282\u4e2d\u8bb2\u89e3"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u8bbe\u7f6e\u5168\u5c40\u54cd\u5e94\u62e6\u622a\u5668",children:"\u8bbe\u7f6e\u5168\u5c40\u54cd\u5e94\u62e6\u622a\u5668"}),"\n",(0,a.jsxs)(n.p,{children:["\u5f53\u6211\u4eec\u5e0c\u671b\u7edf\u4e00\u89e3\u6790\u54cd\u5e94\u6570\u636e\u3001\u7edf\u4e00\u5904\u7406\u9519\u8bef\u65f6\uff0c\u6b64\u65f6\u53ef\u4ee5\u5728\u521b\u5efa",(0,a.jsx)(n.code,{children:"alova"}),"\u5b9e\u4f8b\u65f6\u6307\u5b9a\u5168\u5c40\u7684\u54cd\u5e94\u62e6\u622a\u5668\uff0c\u8fd9\u540c\u6837\u4e0e",(0,a.jsx)(n.code,{children:"axios"}),"\u76f8\u4f3c\u3002\u54cd\u5e94\u62e6\u622a\u5668\u5305\u62ec\u8bf7\u6c42\u6210\u529f\u7684\u62e6\u622a\u5668\u548c\u8bf7\u6c42\u5931\u8d25\u7684\u62e6\u622a\u5668\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const alovaInstance = createAlova({\r\n  // ...\r\n  // highlight-start\r\n  // \u4f7f\u7528\u6570\u7ec4\u7684\u4e24\u4e2a\u9879\uff0c\u5206\u522b\u6307\u5b9a\u8bf7\u6c42\u6210\u529f\u7684\u62e6\u622a\u5668\u548c\u8bf7\u6c42\u5931\u8d25\u7684\u62e6\u622a\u5668\r\n  responded: {\r\n    // \u8bf7\u6c42\u6210\u529f\u7684\u62e6\u622a\u5668\r\n    // \u5f53\u4f7f\u7528GlobalFetch\u8bf7\u6c42\u9002\u914d\u5668\u65f6\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u63a5\u6536Response\u5bf9\u8c61\r\n    // \u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u5f53\u524d\u8bf7\u6c42\u7684method\u5b9e\u4f8b\uff0c\u4f60\u53ef\u4ee5\u7528\u5b83\u540c\u6b65\u8bf7\u6c42\u524d\u540e\u7684\u914d\u7f6e\u4fe1\u606f\r\n    onSuccess: async (response, method) => {\r\n      if (response.status >= 400) {\r\n        throw new Error(response.statusText);\r\n      }\r\n      const json = await response.json();\r\n      if (json.code !== 200) {\r\n        // \u629b\u51fa\u9519\u8bef\u6216\u8fd4\u56dereject\u72b6\u6001\u7684Promise\u5b9e\u4f8b\u65f6\uff0c\u6b64\u8bf7\u6c42\u5c06\u629b\u51fa\u9519\u8bef\r\n        throw new Error(json.message);\r\n      }\r\n\r\n      // \u89e3\u6790\u7684\u54cd\u5e94\u6570\u636e\u5c06\u4f20\u7ed9method\u5b9e\u4f8b\u7684transformData\u94a9\u5b50\u51fd\u6570\uff0c\u8fd9\u4e9b\u51fd\u6570\u5c06\u5728\u540e\u7eed\u8bb2\u89e3\r\n      return json.data;\r\n    },\r\n\r\n    // \u8bf7\u6c42\u5931\u8d25\u7684\u62e6\u622a\u5668\r\n    // \u8bf7\u6c42\u9519\u8bef\u65f6\u5c06\u4f1a\u8fdb\u5165\u8be5\u62e6\u622a\u5668\u3002\r\n    // \u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u5f53\u524d\u8bf7\u6c42\u7684method\u5b9e\u4f8b\uff0c\u4f60\u53ef\u4ee5\u7528\u5b83\u540c\u6b65\u8bf7\u6c42\u524d\u540e\u7684\u914d\u7f6e\u4fe1\u606f\r\n    onError: (err, method) => {\r\n      alert(error.message);\r\n    }\r\n  }\r\n  // highlight-end\r\n});\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679c\u4e0d\u9700\u8981\u8bbe\u7f6e\u8bf7\u6c42\u5931\u8d25\u7684\u62e6\u622a\u5668\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f20\u5165\u8bf7\u6c42\u6210\u529f\u7684\u62e6\u622a\u5668\u51fd\u6570\uff0c\u800c\u4e0d\u518d\u9700\u8981\u901a\u8fc7\u5bf9\u8c61\u6765\u8bbe\u7f6e\u56de\u8c03\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const alovaInstance = createAlova({\r\n  // ...\r\n  // highlight-start\r\n  async responded(response, method) {\r\n    // \u8bf7\u6c42\u6210\u529f\u7684\u62e6\u622a\u5668\r\n  }\r\n  // highlight-end\r\n});\n"})}),"\n",(0,a.jsx)(n.admonition,{title:"\u7279\u522b\u6ce8\u610f",type:"warning",children:(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"onSuccess"}),"\u548c",(0,a.jsx)(n.code,{children:"onError"}),"\u5747\u53ef\u4ee5\u8bbe\u4e3a\u540c\u6b65\u51fd\u6570\u548c\u5f02\u6b65\u51fd\u6570\u3002"]}),"\n",(0,a.jsx)(n.li,{children:"onError \u56de\u8c03\u662f\u8bf7\u6c42\u9519\u8bef\u7684\u6355\u83b7\u51fd\u6570\uff0conSuccess \u4e2d\u629b\u51fa\u9519\u8bef\u4e0d\u4f1a\u89e6\u53d1 onError\u3002\u5f53\u6355\u83b7\u9519\u8bef\u4f46\u6ca1\u6709\u629b\u51fa\u9519\u8bef\u6216\u8fd4\u56de reject \u72b6\u6001\u7684 Promise \u5b9e\u4f8b\uff0c\u5c06\u8ba4\u4e3a\u8bf7\u6c42\u662f\u6210\u529f\u7684\uff0c\u4e14\u4e0d\u4f1a\u83b7\u5f97\u54cd\u5e94\u6570\u636e\u3002"}),"\n",(0,a.jsxs)(n.li,{children:["\u5728 2.0.x \u53ca\u4ee5\u524d\u7684\u7248\u672c\u4e2d\u5c06",(0,a.jsx)(n.code,{children:"responded"}),"\u9519\u8bef\u5730\u62fc\u5199\u4e3a\u4e86",(0,a.jsx)(n.code,{children:"responsed"}),"\uff0c\u5728 2.1.0 \u4e2d\u5df2\u5c06\u4e24\u8005\u505a\u4e86\u517c\u5bb9\u5904\u7406\uff0c\u5efa\u8bae\u5728\u540e\u7eed\u7248\u672c\u4e2d\u4f7f\u7528",(0,a.jsx)(n.code,{children:"responded"}),"\u4ee3\u66ff",(0,a.jsx)(n.code,{children:"responsed"}),"\u3002"]}),"\n"]})}),"\n",(0,a.jsx)(n.h2,{id:"\u8bbe\u7f6e\u5168\u5c40\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4",children:"\u8bbe\u7f6e\u5168\u5c40\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4"}),"\n",(0,a.jsx)(n.p,{children:"\u4ee5\u4e0b\u4e3a\u8bbe\u7f6e\u5168\u5c40\u7684\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"// \u5168\u5c40\u8bbe\u7f6e\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\r\nconst alovaInstance = createAlova({\r\n  // ...\r\n  // highlight-start\r\n  // \u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2\uff0c\u9ed8\u8ba4\u4e3a0\uff0c\u8868\u793a\u6c38\u4e0d\u8d85\u65f6\r\n  timeout: 50000\r\n  // highlight-end\r\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u5176\u4ed6",children:"\u5176\u4ed6"}),"\n",(0,a.jsx)(n.p,{children:"\u5728 alova \u5b9e\u4f8b\u4e2d\uff0c\u8fd8\u53ef\u4ee5\u8bbe\u7f6e\u4ee5\u4e0b\u914d\u7f6e\uff1a"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/tutorial/learning/response-cache",children:"\u54cd\u5e94\u6570\u636e\u7684\u7f13\u5b58\u6a21\u5f0f"}),"\uff0c\u6211\u4eec\u5c06\u5728\u4e0b\u9762\u7684\u7ae0\u8282\u4e2d\u9610\u8ff0\uff1b"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/tutorial/advanced/custom-storage-adapter",children:"\u81ea\u5b9a\u4e49\u5b58\u50a8\u9002\u914d\u5668"}),"\uff0c\u5b83\u5c06\u7528\u4e8e\u6301\u4e45\u5316\u54cd\u5e94\u7f13\u5b58\uff0c\u8fd9\u5c06\u5728\u9ad8\u7ea7\u7ae0\u8282\u4e2d\u9610\u8ff0\uff1b"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5162:(e,n,r)=>{r.d(n,{Z:()=>l});r(7294);var a=r(4334);const t={tabItem:"tabItem_Ymn6"};var o=r(5893);function l(e){let{children:n,hidden:r,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(t.tabItem,l),hidden:r,children:n})}},4866:(e,n,r)=>{r.d(n,{Z:()=>w});var a=r(7294),t=r(4334),o=r(2466),l=r(6550),s=r(469),i=r(1980),c=r(7392),u=r(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}}))}(r);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function v(e){let{queryString:n=!1,groupId:r}=e;const t=(0,l.k6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(t.location.search);n.set(o,e),t.replace({...t.location,search:n.toString()})}),[o,t])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,o=h(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[c,d]=v({queryString:r,groupId:t}),[m,j]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,o]=(0,u.Nk)(r);return[t,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:t}),b=(()=>{const e=c??m;return p({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),j(e)}),[d,j,o]),tabValues:o}}var j=r(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(5893);function x(e){let{className:n,block:r,selectedValue:a,selectValue:l,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const n=e.currentTarget,r=i.indexOf(n),t=s[r].value;t!==a&&(c(n),l(t))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},n),children:s.map((e=>{let{value:n,label:r,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...o,className:(0,t.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function f(e){let{lazy:n,children:r,selectedValue:t}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function k(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,t.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...e,...n}),(0,g.jsx)(f,{...e,...n})]})}function w(e){const n=(0,j.Z)();return(0,g.jsx)(k,{...e,children:d(e.children)},String(n))}},1151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>l});var a=r(7294);const t={},o=a.createContext(t);function l(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);