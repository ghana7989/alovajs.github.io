"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[3889],{9585:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var s=i(5893),r=i(1151);const l={title:"\u5f00\u53d1\u6307\u5357",sidebar_position:30},t=void 0,c={id:"contributing/developing-guidelines",title:"\u5f00\u53d1\u6307\u5357",description:"Node.js 16+, npm 8+",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/contributing/03-developing-guidelines.md",sourceDirName:"contributing",slug:"/contributing/developing-guidelines",permalink:"/zh-CN/contributing/developing-guidelines",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/contributing/03-developing-guidelines.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"\u5f00\u53d1\u6307\u5357",sidebar_position:30},sidebar:"contributingSidebar",previous:{title:"\u6210\u4e3a\u6838\u5fc3\u56e2\u961f\u6210\u5458",permalink:"/zh-CN/contributing/become-core-member"},next:{title:"\u884c\u4e3a\u51c6\u5219",permalink:"/zh-CN/contributing/code-of-conduct"}},o={},d=[{value:"1. fork \u4ed3\u5e93",id:"1-fork-\u4ed3\u5e93",level:2},{value:"2. \u514b\u9686\u9879\u76ee\u5230\u672c\u5730",id:"2-\u514b\u9686\u9879\u76ee\u5230\u672c\u5730",level:2},{value:"3. \u65b0\u5efa pull request",id:"3-\u65b0\u5efa-pull-request",level:2},{value:"4. \u5728\u672c\u5730\u7f16\u7801",id:"4-\u5728\u672c\u5730\u7f16\u7801",level:2},{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:3},{value:"\u5b89\u88c5\u63a8\u8350\u63d2\u4ef6\uff08vscode\uff09",id:"\u5b89\u88c5\u63a8\u8350\u63d2\u4ef6vscode",level:3},{value:"\u9879\u76ee\u7ed3\u6784",id:"\u9879\u76ee\u7ed3\u6784",level:3},{value:"\u7f16\u7801\u89c4\u8303",id:"\u7f16\u7801\u89c4\u8303",level:3},{value:"\u4ee3\u7801\u683c\u5f0f",id:"\u4ee3\u7801\u683c\u5f0f",level:4},{value:"\u5c3d\u91cf\u51cf\u5c11\u4ee3\u7801",id:"\u5c3d\u91cf\u51cf\u5c11\u4ee3\u7801",level:4},{value:"5. \u5355\u5143\u6d4b\u8bd5\u6307\u5357",id:"5-\u5355\u5143\u6d4b\u8bd5\u6307\u5357",level:2},{value:"\u8fd0\u884c\u548c\u8c03\u8bd5\u5355\u4e2a\u6d4b\u8bd5\u7528\u4f8b\u6216\u5408\u96c6",id:"\u8fd0\u884c\u548c\u8c03\u8bd5\u5355\u4e2a\u6d4b\u8bd5\u7528\u4f8b\u6216\u5408\u96c6",level:3},{value:"\u8fd0\u884c\u5168\u90e8\u6d4b\u8bd5\u7528\u4f8b",id:"\u8fd0\u884c\u5168\u90e8\u6d4b\u8bd5\u7528\u4f8b",level:3},{value:"6. \u63d0\u4ea4\u4ee3\u7801",id:"6-\u63d0\u4ea4\u4ee3\u7801",level:2},{value:"7.\u7f16\u5199\u6587\u6863",id:"7\u7f16\u5199\u6587\u6863",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{title:"\u7248\u672c\u8981\u6c42",type:"info",children:(0,s.jsx)(n.p,{children:"Node.js 16+, npm 8+"})}),"\n",(0,s.jsx)(n.h2,{id:"1-fork-\u4ed3\u5e93",children:"1. fork \u4ed3\u5e93"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/alovajs/alova/fork",children:"\u6253\u5f00 alova \u4ed3\u5e93 fork \u9875"}),"\uff0c\u70b9\u51fb\u201cCreate fork\u201dfork \u4ed3\u5e93\uff0c\u5e76\u5c06\u5df2 fork \u7684\u4ed3\u5e93\u514b\u9686\u5230\u672c\u5730\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"2-\u514b\u9686\u9879\u76ee\u5230\u672c\u5730",children:"2. \u514b\u9686\u9879\u76ee\u5230\u672c\u5730"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528",(0,s.jsx)(n.code,{children:"git clone"}),"\u547d\u4ee4\uff0c\u6216",(0,s.jsx)(n.code,{children:"Github Desktop"}),"\u5e94\u7528\u514b\u9686\u9879\u76ee\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"3-\u65b0\u5efa-pull-request",children:"3. \u65b0\u5efa pull request"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u5148\u968f\u4fbf\u4fee\u6539\u4e00\u4e9b\u4ec0\u4e48\u5e76\u63d0\u4ea4\uff0c\u7136\u540e\u65b0\u5efa pull request \u5e76\u4f7f\u7528",(0,s.jsx)(n.code,{children:"close #xxx"}),"\u6765\u5173\u8054\u6b63\u5728\u89e3\u51b3\u7684 issue\uff0c\u8fd9\u5c06\u8868\u793a\u4f60\u5df2\u5360\u6709\u8be5 issue\uff0c",(0,s.jsx)(n.a,{href:"https://docs.github.com/zh/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork",children:"\u5982\u4f55\u901a\u8fc7 fork \u4ed3\u5e93\u521b\u5efa pull request"}),"\u5728\u8fd9\u91cc\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"4-\u5728\u672c\u5730\u7f16\u7801",children:"4. \u5728\u672c\u5730\u7f16\u7801"}),"\n",(0,s.jsx)(n.h3,{id:"\u5b89\u88c5\u4f9d\u8d56",children:"\u5b89\u88c5\u4f9d\u8d56"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528",(0,s.jsx)(n.code,{children:"npm install"}),"\u5b89\u88c5\u4f9d\u8d56\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5b89\u88c5\u63a8\u8350\u63d2\u4ef6vscode",children:"\u5b89\u88c5\u63a8\u8350\u63d2\u4ef6\uff08vscode\uff09"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u4f60\u4f7f\u7528 vscode\uff0c\u5c06\u4f1a\u63a8\u8350\u4f60\u5b89\u88c5\u4ee5\u4e0b\u63d2\u4ef6\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"eslint\uff1a\u68c0\u67e5\u4ee3\u7801\u8d28\u91cf"}),"\n",(0,s.jsx)(n.li,{children:"prettier\uff1a\u683c\u5f0f\u5316\u4ee3\u7801"}),"\n",(0,s.jsx)(n.li,{children:"jest\uff1a\u81ea\u52a8\u6267\u884c\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b\uff0c\u4ee5\u53ca\u6267\u884c\u5355\u4e2a\u5408\u96c6\u6216\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b"}),"\n",(0,s.jsx)(n.li,{children:"EditorConfig\uff1a\u4fdd\u8bc1\u6587\u4ef6\u683c\u5f0f\u4e00\u81f4"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u9879\u76ee\u7ed3\u6784",children:"\u9879\u76ee\u7ed3\u6784"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"|-.github\r\n| |-ISSUE_TEMPLATE -> github issues\u6a21\u677f\r\n| |-workflows -> github action\r\n|-.husky -> husky\u914d\u7f6e\r\n|-.vscode -> vscode\u914d\u7f6e\r\n|-config -> rollup\u6253\u5305\u6587\u4ef6\r\n|-src -> \u6e90\u4ee3\u7801\r\n|-test -> \u5355\u5143\u6d4b\u8bd5\r\n| |-browser -> \u6d4f\u89c8\u5668\u73af\u5883\u5355\u5143\u6d4b\u8bd5\r\n| |-server -> SSR\u5355\u5143\u6d4b\u8bd5\r\n| |-components -> \u5355\u5143\u6d4b\u8bd5\u7ec4\u4ef6\r\n| |-mockServer.ts -> mock\u63a5\u53e3\uff08msw\uff09\r\n|-typings -> ts\u7c7b\u578b\u58f0\u660e\r\n|-\u5176\u4ed6\u914d\u7f6e\u6587\u4ef6\r\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u7f16\u7801\u89c4\u8303",children:"\u7f16\u7801\u89c4\u8303"}),"\n",(0,s.jsx)(n.h4,{id:"\u4ee3\u7801\u683c\u5f0f",children:"\u4ee3\u7801\u683c\u5f0f"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u5b89\u88c5\u4e86",(0,s.jsx)(n.code,{children:"prettier"}),"\u63d2\u4ef6\uff0c\u5728\u6bcf\u6b21\u4fdd\u5b58\u6587\u4ef6\u65f6\u4f1a\u81ea\u52a8\u8fdb\u884c\u683c\u5f0f\u5316\u4ee3\u7801\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u4e0d\u5fc5\u5728\u610f\u683c\u5f0f\u7684\u95ee\u9898\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u5c3d\u91cf\u51cf\u5c11\u4ee3\u7801",children:"\u5c3d\u91cf\u51cf\u5c11\u4ee3\u7801"}),"\n",(0,s.jsx)(n.p,{children:"alova \u7684\u7279\u6027\u4e4b\u4e00\u662f\u8f7b\u91cf\u5316\uff0c\u56e0\u6b64\u5728\u7f16\u7801\u65f6\u9700\u8981\u5c3d\u91cf\u51cf\u5c11\u7f16\u7801\u91cf\uff0c\u8fd9\u91cc\u6709\u51e0\u4e2a\u9700\u8981\u9075\u5faa\u7684\u7f16\u7801\u89c4\u8303\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u907f\u514d\u51fa\u73b0\u76f8\u540c\u7684\u4ee3\u7801\u5757\uff0c\u8fd9\u53ef\u4ee5\u51cf\u5c11\u5e93\u7684\u4ee3\u7801\u91cf\uff0c\u4f46\u4e24\u884c\u4ee3\u7801\u53ef\u80fd\u5c31\u4e0d\u503c\u5f97\u5c01\u88c5\uff1b"}),"\n",(0,s.jsx)(n.li,{children:"\u4f7f\u7528\u4e00\u4e2a\u53d8\u91cf\u58f0\u660e\u7b26\u805a\u5408\u53d8\u91cf\u7684\u58f0\u660e\uff0c\u4f8b\u5982\uff1a"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"// \u274c\r\nconst a = 1;\r\nconst b = 2;\r\n\r\n// \u2705\r\nconst a = 1,\r\n  b = 2;\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["\u4f7f\u7528\u5e38\u91cf\u4fdd\u5b58\u56fa\u5b9a\u503c\u3001\u539f\u578b\u65b9\u6cd5\uff0c\u5728\u7f16\u8bd1",(0,s.jsx)(n.code,{children:"uglify"}),"\u9636\u6bb5\u51cf\u5c11\u4ee3\u7801\u91cf\u3002\u5728",(0,s.jsx)(n.code,{children:"src/utils/variables.ts"}),"\u4e2d\u5b9a\u4e49\u4e86\u5e38\u7528\u7684\u56fa\u5b9a\u503c\u548c\u539f\u578b\u65b9\u6cd5\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"// \u274c\r\nif (a === false) {\r\n  // ...\r\n}\r\narr.forEach(item => {\r\n  // ...\r\n});\r\n\r\n// \u2705\r\nimport { falseValue, forEach } from '@/utils/variables';\r\nif (a === falseValue) {\r\n  // ...\r\n}\r\nforEach(arr, item => {\r\n  // ...\r\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"5-\u5355\u5143\u6d4b\u8bd5\u6307\u5357",children:"5. \u5355\u5143\u6d4b\u8bd5\u6307\u5357"}),"\n",(0,s.jsx)(n.p,{children:"\u7f16\u5199\u5b8c\u4ee3\u7801\u540e\uff0c\u6dfb\u52a0\u5bf9\u5e94\u7684\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b\uff0c\u5c3d\u91cf\u5305\u542b\u8fb9\u7f18\u60c5\u51b5\u7684\u6d4b\u8bd5\u3002"}),"\n",(0,s.jsx)(n.p,{children:"alova \u9879\u76ee\u4f7f\u7528 jest \u4f5c\u4e3a\u5355\u5143\u6d4b\u8bd5\u6846\u67b6\uff0c\u4f7f\u7528 msw \u4f5c\u4e3a\u6a21\u62df\u670d\u52a1\u5668\u3002\u5efa\u8bae\u4f7f\u7528 TDD \u6a21\u5f0f\u3002\u6bcf\u6b21\u4fee\u6539\u4ee3\u7801\u540e\uff0c\u8fd0\u884c\u5bf9\u5e94\u7684\u5355\u5143\u6d4b\u8bd5\u5e76\u901a\u8fc7\u5b83\u3002"}),"\n",(0,s.jsx)(n.admonition,{title:"\u91cd\u8981",type:"warning",children:(0,s.jsx)(n.p,{children:"\u5f53\u51c6\u5907\u63d0\u4ea4\u4ee3\u7801\u65f6\uff0c\u8bf7\u786e\u4fdd\u901a\u8fc7\u4e86\u5168\u90e8\u5355\u5143\u6d4b\u8bd5\uff0c\u5f53\u60a8\u5904\u7406 pull request \u65f6\uff0c\u53ef\u4ee5\u6709\u591a\u4e2a\u5c0f\u63d0\u4ea4\uff0cGitHub \u53ef\u4ee5\u5728\u5408\u5e76\u4e4b\u524d\u81ea\u52a8\u538b\u7f29\u5b83\u4eec\u3002"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u6dfb\u52a0\u6d4f\u89c8\u5668\u76f8\u5173\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b\uff0c\u8bf7\u6dfb\u52a0\u5230",(0,s.jsx)(n.code,{children:"test/browser"}),"\u4e2d\u5bf9\u5e94\u7684\u6d4b\u8bd5\u5408\u96c6\uff0c\u5982\u679c\u6ca1\u6709\u5408\u9002\u7684\u6d4b\u8bd5\u5408\u96c6\u53ef\u81ea\u884c\u521b\u5efa\uff1b"]}),"\n",(0,s.jsxs)(n.li,{children:["\u6dfb\u52a0 SSR \u76f8\u5173\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b\uff0c\u8bf7\u6dfb\u52a0\u5230",(0,s.jsx)(n.code,{children:"test/server"}),"\u4e2d\u5bf9\u5e94\u7684\u6d4b\u8bd5\u5408\u96c6\uff0c\u5982\u679c\u6ca1\u6709\u5408\u9002\u7684\u6d4b\u8bd5\u5408\u96c6\u53ef\u81ea\u884c\u521b\u5efa\uff1b"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u8fd0\u884c\u548c\u8c03\u8bd5\u5355\u4e2a\u6d4b\u8bd5\u7528\u4f8b\u6216\u5408\u96c6",children:"\u8fd0\u884c\u548c\u8c03\u8bd5\u5355\u4e2a\u6d4b\u8bd5\u7528\u4f8b\u6216\u5408\u96c6"}),"\n",(0,s.jsxs)(n.p,{children:["\u5efa\u8bae\u4f7f\u7528",(0,s.jsx)(n.strong,{children:"jest"}),"\u63d2\u4ef6\uff08\u4e0a\u9762\u63a8\u8350\u7684\u63d2\u4ef6\u4e4b\u4e00\uff09\u5bf9\u5355\u4e2a\u7528\u4f8b\u6216\u5408\u96c6\u8fdb\u884c\u6d4b\u8bd5\uff0c\u4f60\u53ef\u4ee5\u5728\u6d4b\u8bd5\u7528\u4f8b\u4e2d\u53f3\u952e\u70b9\u51fb\u8fd0\u884c\u6307\u5b9a\u7684\u7528\u4f8b\uff0c\u9009\u62e9",(0,s.jsx)(n.code,{children:"Run Test"}),"\u8fd0\u884c\u6b64\u6d4b\u8bd5\u7528\u4f8b\uff0c\u9009\u62e9",(0,s.jsx)(n.code,{children:"Debug Test"}),"\u65ad\u70b9\u8c03\u8bd5\u6b64\u6d4b\u8bd5\u7528\u4f8b\uff0c\u5982\u56fe\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/alovajs/alova/assets/29848971/a94ba9db-c100-472f-b870-6bcecb031bea",alt:"image"})}),"\n",(0,s.jsx)(n.h3,{id:"\u8fd0\u884c\u5168\u90e8\u6d4b\u8bd5\u7528\u4f8b",children:"\u8fd0\u884c\u5168\u90e8\u6d4b\u8bd5\u7528\u4f8b"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4f7f\u7528",(0,s.jsx)(n.strong,{children:"jest"}),"\u63d2\u4ef6\u8fd0\u884c\uff0c\u5982\u4e0b\u56fe\uff1a"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/alovajs/alova/assets/29848971/5af3ff15-16b7-4b28-9ae6-d0b5a236b181",alt:"image"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["\u901a\u8fc7\u547d\u4ee4\u884c",(0,s.jsx)(n.code,{children:"npm run test:browser"}),"\u8fd0\u884c\u6d4f\u89c8\u5668\u5355\u5143\u6d4b\u8bd5\uff0c\u901a\u8fc7",(0,s.jsx)(n.code,{children:"npm run test:node"}),"\u8fd0\u884c SSR \u5355\u5143\u6d4b\u8bd5\uff0c\u901a\u8fc7",(0,s.jsx)(n.code,{children:"npm run test"}),"\u540c\u65f6\u8fd0\u884c\u4e24\u8005\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"6-\u63d0\u4ea4\u4ee3\u7801",children:"6. \u63d0\u4ea4\u4ee3\u7801"}),"\n",(0,s.jsxs)(n.p,{children:["alova \u4f7f\u7528\u4e86 ",(0,s.jsx)(n.a,{href:"https://semantic-release.gitbook.io",children:"semantic-release"})," \u4f5c\u4e3a\u81ea\u52a8\u53d1\u5e03\u5de5\u5177\uff0c\u5b83\u53ef\u4ee5\u5728\u5408\u5e76\u4ee3\u7801\u5230",(0,s.jsx)(n.code,{children:"main"}),"\u540e\u81ea\u52a8\u53d1\u5e03\u65b0\u7248\u672c\u5305\uff0c\u4ee5\u53ca\u751f\u6210",(0,s.jsx)(n.code,{children:"CHANGELOG"}),"\uff0c\u4f46\u9700\u8981\u786e\u4fdd\u63d0\u4ea4\u7684\u6d88\u606f\u683c\u5f0f\u9075\u5faa",(0,s.jsx)(n.a,{href:"https://www.conventionalcommits.org/zh-hans/v1.0.0/",children:"\u63d0\u4ea4\u4fe1\u606f\u7ea6\u5b9a"}),"\uff0c\u5efa\u8bae\u4f60\u5c3d\u91cf\u4f7f\u7528",(0,s.jsx)(n.code,{children:"npm run commit"}),"\u6765\u81ea\u52a8\u751f\u6210\u7b26\u5408\u89c4\u8303\u7684 git message\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"7\u7f16\u5199\u6587\u6863",children:"7.\u7f16\u5199\u6587\u6863"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u6b63\u5728\u6dfb\u52a0\u65b0\u7279\u6027\uff0c\u53ef\u5c1d\u8bd5\u6dfb\u52a0\u65b0\u7279\u6027\u7684\u76f8\u5173\u6587\u6863\u8bf4\u660e\uff0c\u8be6\u7ec6\u8bf7\u9605\u8bfb",(0,s.jsx)(n.a,{href:"/contributing/overview#%E6%9B%B4%E6%AD%A3%E6%88%96%E7%BC%96%E5%86%99%E6%96%87%E6%A1%A3",children:"\u66f4\u6b63\u6216\u7f16\u5199\u6587\u6863"}),"\uff0c\u5426\u5219\u8bf7\u5728 pull request \u4e2d\u8bf4\u660e\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>t});var s=i(7294);const r={},l=s.createContext(r);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);