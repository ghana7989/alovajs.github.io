"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[2394],{9236:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=t(85893),i=t(11151);const o=t.p+"assets/medias/vscode-demo-video-chinese-f90dbe81afb49d90d689d48aa596f780.mp4",a={title:"\u7f16\u8f91\u5668\u6269\u5c55\u96c6\u6210"},r=void 0,l={id:"tutorial/getting-started/extension-integration",title:"\u7f16\u8f91\u5668\u6269\u5c55\u96c6\u6210",description:"\u96c6\u6210 alova \u7684\u7f16\u8f91\u5668\u6269\u5c55\u53ef\u4ee5\u8ba9\u5b83\u5c55\u73b0\u51fa\u5b83\u66f4\u5f3a\u5927\u7684\u529b\u91cf\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/02-getting-started/09-extension-integration.md",sourceDirName:"tutorial/02-getting-started",slug:"/tutorial/getting-started/extension-integration",permalink:"/zh-CN/next/tutorial/getting-started/extension-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/02-getting-started/09-extension-integration.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"\u7f16\u8f91\u5668\u6269\u5c55\u96c6\u6210"},sidebar:"tutorial",previous:{title:"\u5728\u670d\u52a1\u7aef\u4f7f\u7528",permalink:"/zh-CN/next/tutorial/getting-started/basic/server"},next:{title:"\u7ed3\u8bed",permalink:"/zh-CN/next/tutorial/getting-started/congratulations"}},c={},d=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u8c03\u7528 API",id:"\u8c03\u7528-api",level:2},{value:"\u5feb\u901f\u8bbf\u95ee API",id:"\u5feb\u901f\u8bbf\u95ee-api",level:2},{value:"\u901a\u8fc7 url \u67e5\u627e",id:"\u901a\u8fc7-url-\u67e5\u627e",level:3},{value:"\u901a\u8fc7\u63cf\u8ff0\u67e5\u627e",id:"\u901a\u8fc7\u63cf\u8ff0\u67e5\u627e",level:3},{value:"\u8bbe\u7f6e alova \u53c2\u6570",id:"\u8bbe\u7f6e-alova-\u53c2\u6570",level:2},{value:"\u65e7\u9879\u76ee\u8fc1\u79fb",id:"\u65e7\u9879\u76ee\u8fc1\u79fb",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function p(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u96c6\u6210 alova \u7684\u7f16\u8f91\u5668\u6269\u5c55\u53ef\u4ee5\u8ba9\u5b83\u5c55\u73b0\u51fa\u5b83\u66f4\u5f3a\u5927\u7684\u529b\u91cf\u3002"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u81ea\u52a8\u751f\u6210\u8bf7\u6c42\u4ee3\u7801\u548c\u54cd\u5e94\u6570\u636e\u7c7b\u578b\uff0c\u5728 js \u9879\u76ee\u4e2d\u4e5f\u80fd\u4f53\u9a8c\u5bf9\u63a5\u53e3\u6570\u636e\u7684\u667a\u80fd\u63d0\u793a\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5c06 api \u6587\u6863\u5d4c\u5165\u4ee3\u7801\u4e2d\uff0c\u5e26\u4f60\u4f53\u9a8c\u8fb9\u67e5\u8fb9\u7528 API \u7684\u6548\u679c\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5b9a\u65f6\u66f4\u65b0 api \u5e76\u4e3b\u52a8\u901a\u77e5\u524d\u7aef\u5f00\u53d1\uff0c\u4e0d\u518d\u4f9d\u8d56\u670d\u52a1\u7aef\u5f00\u53d1\u4eba\u5458\u901a\u77e5\u3002"}),"\n"]}),"\n",(0,s.jsx)("a",{className:"button button--primary",href:"vscode:extension/Alova.alova-vscode-extension",children:"\u5b89\u88c5 VS Code \u6269\u5c55"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u81ea\u52a8\u751f\u6210\u652f\u6301 swagger-v2 \u548c openapi-v3 \u89c4\u8303\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u6269\u5c55\u6f14\u793a\u89c6\u9891"}),"\n","\n",(0,s.jsx)("video",{width:"100%",controls:!0,controlsList:"nodownload",src:o}),"\n",(0,s.jsx)(n.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528\u6269\u5c55\u65f6\uff0c\u4f60\u9700\u8981\u6307\u5b9a\u4ece openapi \u6587\u4ef6\u7684\u8f93\u5165\u6e90\u548c\u8f93\u51fa\u76ee\u5f55\u7b49\uff0c\u4f60\u53ef\u4ee5\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u521b\u5efa\u914d\u7f6e\u6587\u4ef6\uff0c\u5b83\u652f\u6301\u4ee5\u4e0b\u683c\u5f0f\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"alova.config.cjs"}),"\uff1acommonjs \u89c4\u8303\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u4f7f\u7528",(0,s.jsx)(n.code,{children:"module.exports"}),"\u5bfc\u51fa\u914d\u7f6e\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"alova.config.js"}),"\uff1aESModule \u89c4\u8303\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u4f7f\u7528",(0,s.jsx)(n.code,{children:"export default"}),"\u5bfc\u51fa\u914d\u7f6e\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"alova.config.ts"}),"\uff1atypescript \u683c\u5f0f\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u4f7f\u7528",(0,s.jsx)(n.code,{children:"export default"}),"\u5bfc\u51fa\u914d\u7f6e\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5177\u4f53\u7684\u914d\u7f6e\u53c2\u6570\u5982\u4e0b\uff0c\u4ee5 commonjs \u4e3a\u4f8b\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// alova.config.js\nmodule.exports = {\n  // api\u751f\u6210\u8bbe\u7f6e\u6570\u7ec4\uff0c\u6bcf\u9879\u4ee3\u8868\u4e00\u4e2a\u81ea\u52a8\u751f\u6210\u7684\u89c4\u5219\uff0c\u5305\u542b\u751f\u6210\u7684\u8f93\u5165\u8f93\u51fa\u76ee\u5f55\u3001\u89c4\u8303\u6587\u4ef6\u5730\u5740\u7b49\u7b49\n  generator: [\n    // \u670d\u52a1\u56681\n    {\n      // input\u53c2\u65701\uff1aopenapi\u7684json\u6587\u4ef6url\u5730\u5740\n      input: 'http://localhost:3000/openapi.json',\n\n      // input\u53c2\u65702\uff1a\u4ee5\u5f53\u524d\u9879\u76ee\u4e3a\u76f8\u5bf9\u76ee\u5f55\u7684\u672c\u5730\u5730\u5740\n      // input: 'openapi/api.json'\n\n      // input\u53c2\u65703\uff1a\u6ca1\u6709\u76f4\u63a5\u6307\u5411openapi\u6587\u4ef6\u65f6\uff0c\u662f\u4e00\u4e2a\u6587\u6863\u5730\u5740\uff0c\u5fc5\u987b\u914d\u5408platform\u53c2\u6570\u6307\u5b9a\u6587\u6863\u7c7b\u578b\n      // input: 'http://192.168.5.123:8080'\n\n      // \uff08\u53ef\u9009\uff09platform\u4e3a\u652f\u6301openapi\u7684\u5e73\u53f0\uff0c\u76ee\u524d\u53ea\u652f\u6301swagger\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\n      // \u5f53\u6307\u5b9a\u4e86\u6b64\u53c2\u6570\u540e\uff0cinput\u5b57\u6bb5\u53ea\u9700\u8981\u6307\u5b9a\u6587\u6863\u7684\u5730\u5740\u800c\u4e0d\u9700\u8981\u6307\u5b9a\u5230openapi\u6587\u4ef6\n      platform: 'swagger',\n\n      // \u63a5\u53e3\u6587\u4ef6\u548c\u7c7b\u578b\u6587\u4ef6\u7684\u8f93\u51fa\u8def\u5f84\uff0c\u591a\u4e2agenerator\u4e0d\u80fd\u91cd\u590d\u7684\u5730\u5740\uff0c\u5426\u5219\u751f\u6210\u7684\u4ee3\u7801\u4f1a\u76f8\u4e92\u8986\u76d6\n      output: 'src/api',\n\n      // \uff08\u53ef\u9009\uff09\u6307\u5b9a\u751f\u6210\u7684\u54cd\u5e94\u6570\u636e\u7684mediaType\uff0c\u4ee5\u6b64\u6570\u636e\u7c7b\u578b\u6765\u751f\u6210200\u72b6\u6001\u7801\u7684\u54cd\u5e94ts\u683c\u5f0f\uff0c\u9ed8\u8ba4application/json\n      responseMediaType: 'application/json',\n\n      // \uff08\u53ef\u9009\uff09\u6307\u5b9a\u751f\u6210\u7684\u8bf7\u6c42\u4f53\u6570\u636e\u7684bodyMediaType\uff0c\u4ee5\u6b64\u6570\u636e\u7c7b\u578b\u6765\u751f\u6210\u8bf7\u6c42\u4f53\u7684ts\u683c\u5f0f\uff0c\u9ed8\u8ba4application/json\n      bodyMediaType: 'application/json',\n\n      // \uff08\u53ef\u9009\uff09\u6307\u5b9a\u751f\u6210\u7684api\u7248\u672c\uff0c\u9ed8\u8ba4\u4e3aauto\uff0c\u4f1a\u901a\u8fc7\u5f53\u524d\u9879\u76ee\u5b89\u88c5\u7684alova\u7248\u672c\u5224\u65ad\u5f53\u524d\u9879\u76ee\u7684\u7248\u672c\uff0c\u5982\u679c\u751f\u6210\u4e0d\u6b63\u786e\u4f60\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u6307\u5b9a\u7248\u672c\n      version: 'auto',\n\n      /**\n       * \uff08\u53ef\u9009\uff09\u751f\u6210\u4ee3\u7801\u7684\u7c7b\u578b\uff0c\u53ef\u9009\u503c\u4e3aauto/ts/typescript/module/commonjs\uff0c\u9ed8\u8ba4\u4e3aauto\uff0c\u4f1a\u901a\u8fc7\u4e00\u5b9a\u89c4\u5219\u5224\u65ad\u5f53\u524d\u9879\u76ee\u7684\u7c7b\u578b\uff0c\u5982\u679c\u751f\u6210\u4e0d\u6b63\u786e\u4f60\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u6307\u5b9a\u7c7b\u578b\uff1a\n       * ts/typescript\uff1a\u610f\u601d\u76f8\u540c\uff0c\u8868\u793a\u751f\u6210ts\u7c7b\u578b\u6587\u4ef6\n       * module\uff1a\u751f\u6210esModule\u89c4\u8303\u6587\u4ef6\n       * commonjs\uff1a\u8868\u793a\u751f\u6210commonjs\u89c4\u8303\u6587\u4ef6\n       */\n      type: 'auto',\n\n      /**\n       * \uff08\u53ef\u9009\uff09\u8fc7\u6ee4\u6216\u8f6c\u6362\u751f\u6210\u7684api\u63a5\u53e3\u51fd\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684apiDescriptor\u6765\u751f\u6210api\u8c03\u7528\u51fd\u6570\uff0c\u672a\u6307\u5b9a\u6b64\u51fd\u6570\u65f6\u5219\u4e0d\u8f6c\u6362apiDescripor\u5bf9\u8c61\n       */\n      handleApi: apiDescriptor => {\n        // \u8fd4\u56defalsy\u503c\u8868\u793a\u8fc7\u6ee4\u6b64api\n        if (!apiDescriptor.path.startWith('/user')) {\n          return;\n        }\n\n        apiDescriptor.parameter = apiDescriptor.parameter.filter(\n          param => param.in === 'header' && param.name === 'token'\n        );\n        delete apiDescriptor.requestBody.id;\n        apiDescriptor.url = apiDescriptor.url.replace('/user', '');\n        return apiDescriptor;\n      }\n    },\n\n    // \u670d\u52a1\u56682\n    {\n      // ...\n    }\n  ],\n\n  // \uff08\u53ef\u9009\uff09\u662f\u5426\u81ea\u52a8\u66f4\u65b0\u63a5\u53e3\uff0c\u9ed8\u8ba4\u5f00\u542f\uff0c\u6bcf5\u5206\u949f\u68c0\u67e5\u4e00\u6b21\uff0cfalse\u65f6\u5173\u95ed\n  autoUpdate: true\n\n  /* \u4e5f\u53ef\u4ee5\u914d\u7f6e\u66f4\u8be6\u7ec6\u7684\u53c2\u6570\n  autoUpdate: {\n    // \u7f16\u8f91\u5668\u5f00\u542f\u65f6\u66f4\u65b0\uff0c\u9ed8\u8ba4false\n    launchEditor: true,\n    // \u81ea\u52a8\u66f4\u65b0\u95f4\u9694\uff0c\u5355\u4f4d\u6beb\u79d2\n    interval: 5 * 60 * 1000\n  }\n  */\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u8c03\u7528-api",children:"\u8c03\u7528 API"}),"\n",(0,s.jsxs)(n.p,{children:["\u751f\u6210\u7684 API \u4ee3\u7801\u9ed8\u8ba4\u901a\u8fc7\u5168\u5c40\u7684",(0,s.jsx)(n.code,{children:"Apis"}),"\u53d8\u91cf\u8bbf\u95ee\uff0c\u4f60\u53ef\u4ee5\u4eab\u53d7\u7f16\u8f91\u5668\u4e3a\u4f60\u5e26\u6765\u7684\u667a\u80fd\u63d0\u793a\u6765\u5feb\u901f\u9884\u89c8 API \u4fe1\u606f\uff0c\u8ba9\u4f60\u53ef\u4ee5\u8fb9\u67e5\u8fb9\u4f7f\u7528 API\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"\u663e\u793a\u63a5\u53e3\u7684\u8be6\u7ec6\u4fe1\u606f",src:t(9322).Z+"",width:"1602",height:"948"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u4e2d",(0,s.jsx)(n.code,{children:"pet"}),"\u662f API \u7684 tag\uff0cAPI \u540d\u79f0\u5bf9\u5e94",(0,s.jsx)(n.code,{children:"operationId"}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(23529).Z+"",width:"461",height:"347"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u4f7f\u7528\u63a5\u53e3\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,s.jsx)(n.code,{children:"params/pathParams/data/headers"}),"\u6765\u6307\u5b9a\u8bf7\u6c42\u53c2\u6570\uff0c\u5b83\u5c06\u4f1a\u667a\u80fd\u63d0\u793a\u6b64\u63a5\u53e3\u9700\u8981\u7684\u53c2\u6570\u3002\u6b64\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u6307\u5b9a method \u5b9e\u4f8b\u7684\u5176\u4ed6 config \u53c2\u6570\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"useRequest(() =>\n  Apis.user.changeProfile({\n    // \uff08\u53ef\u9009\uff09query\u53c2\u6570\n    params: {\n      id: 12\n    },\n    // \uff08\u53ef\u9009\uff09path\u53c2\u6570\n    pathParams: {\n      id2: 20\n    },\n    // \uff08\u53ef\u9009\uff09body\u53c2\u6570\n    data: {\n      name: 'alova',\n      age: 18\n    },\n    // \uff08\u53ef\u9009\uff09header\u53c2\u6570\n    headers: {\n      'Content-Type': 'application/json'\n    },\n\n    // \u5176\u4ed6method\u652f\u6301\u7684config\u914d\u7f6e\u9879\n    cacheFor: 100 * 1000,\n    transform: response => response.detail\n  })\n);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5feb\u901f\u8bbf\u95ee-api",children:"\u5feb\u901f\u8bbf\u95ee API"}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u5e38\uff0c\u6211\u4eec\u4e0d\u53ef\u80fd\u77e5\u9053\u6bcf\u4e2a API \u7684 tag \u548c operationId\uff0c\u4e3a\u4e86\u5feb\u901f\u8bbf\u95ee\u4e0d\u540c\u7684 API\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u76ee\u6807 API \u7684\u63cf\u8ff0\u6216 url \u5173\u952e\u8bcd\u5feb\u901f\u5b9a\u4f4d\u5230\u5bf9\u5e94\u7684 API\uff0c\u901a\u8fc7\u89e6\u53d1\u8bcd",(0,s.jsx)(n.code,{children:"a->"}),"\u89e6\u53d1\u5feb\u901f\u5b9a\u4f4d\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u901a\u8fc7-url-\u67e5\u627e",children:"\u901a\u8fc7 url \u67e5\u627e"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(25704).Z+"",width:"1938",height:"428"})}),"\n",(0,s.jsx)(n.h3,{id:"\u901a\u8fc7\u63cf\u8ff0\u67e5\u627e",children:"\u901a\u8fc7\u63cf\u8ff0\u67e5\u627e"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(97009).Z+"",width:"1984",height:"396"})}),"\n",(0,s.jsx)(n.h2,{id:"\u8bbe\u7f6e-alova-\u53c2\u6570",children:"\u8bbe\u7f6e alova \u53c2\u6570"}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u5e38\u6211\u4eec\u4f1a\u5728",(0,s.jsx)(n.code,{children:"createAlova"}),"\u4e2d\u8bbe\u7f6e\u5168\u5c40\u53c2\u6570\uff0c\u5728\u81ea\u52a8\u751f\u6210\u7684\u4ee3\u7801\u4e2d\uff0c\u4f60\u53ef\u4ee5\u8fdb\u5165",(0,s.jsx)(n.code,{children:"${output}/index.[js/ts]"}),"\u4e2d\u8fdb\u884c\u8bbe\u7f6e\uff0c",(0,s.jsx)(n.code,{children:"${output}"}),"\u662f\u4f60\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u6307\u5b9a\u7684",(0,s.jsx)(n.code,{children:"output"}),"\u76ee\u5f55\u3002\u5f53\u91cd\u65b0\u751f\u6210\u4ee3\u7801\u65f6\uff0c\u6b64\u6587\u4ef6\u4e0d\u4f1a\u88ab\u8986\u76d6\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"index"}),"\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nimport vueHook from 'alova/vue';\nimport { createApis, withConfigType } from './createApis';\n\n// \u5f53\u524dapi\u5bf9\u5e94\u7684alova\u5b9e\u4f8b\uff0c\u4f60\u53ef\u4ee5\u5728\u6b64\u4fee\u6539\u53c2\u6570\u3002\nexport const alovaInstance = createAlova({\n  baseURL: 'openapi\u6587\u4ef6\u4e2d\u7684server\u53c2\u6570',\n  statesHook: vueHook,\n  requestAdapter: GlobalFetch(),\n  beforeRequest: method => {},\n  responded: res => {\n    return res.json();\n  }\n});\n\n// \u53ef\u590d\u7528\u7684method\u53c2\u6570\u914d\u7f6e\nexport const $$userConfigMap = withConfigType({});\n\n/**\n * @type {APIS}\n */\nconst Apis = createApis(alovaInstance, $$userConfigMap);\nglobalThis.Apis = Apis;\nexport default Apis;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u5728",(0,s.jsx)(n.code,{children:"createAlova"}),"\u4e2d\u50cf\u5f80\u5e38\u4e00\u6837\u7f16\u5199\u62e6\u622a\u5668\uff0c\u66f4\u6362\u8bf7\u6c42\u9002\u914d\u5668\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6709\u4e00\u70b9\u9700\u8981\u6ce8\u610f\uff0c\u7531\u4e8e method \u5b9e\u4f8b\u662f\u81ea\u52a8\u751f\u6210\u7684\uff0c\u4f60\u4e0d\u80fd\u76f4\u63a5\u5728\u521b\u5efa method \u65f6\u8bbe\u7f6e",(0,s.jsx)(n.code,{children:"transform/cacheFor"}),"\u7b49 method \u53c2\u6570\uff0c\u9700\u8981\u8fbe\u5230\u76f8\u540c\u7684\u6548\u679c\uff0c\u4f60\u53ef\u4ee5\u5728",(0,s.jsx)(n.code,{children:"withConfigType({})"}),"\u4e2d\u6307\u5b9a\u5bf9\u5e94\u53c2\u6570\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u5bf9\u6bd4\u7684\u4f8b\u5b50\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// \u624b\u52a8\u5b9a\u4e49\u8c03\u7528\u51fd\u6570\nexport const useProfile = () =>\n  alovaInstance.Get('/user/profile', {\n    cacheFor: 100 * 1000,\n    transform(data) {\n      return data.detail;\n    }\n  });\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// \u4e3a\u81ea\u52a8\u751f\u6210\u7684\u4ee3\u7801\u8bbe\u7f6emethod\u53c2\u6570\nexport const $$userConfigMap = withConfigType({\n  'user.profile': {\n    cacheFor: 100 * 1000,\n    transform(data) {\n      return data.detail;\n    }\n  }\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["user \u4e3a tag\uff0cprofile \u4e3a operationId\uff0c\u5177\u4f53\u4f60\u53ef\u4ee5\u6253\u5f00",(0,s.jsx)(n.code,{children:"${output}/apiDefinitions.[js/ts]"}),"\u4e2d\u67e5\u770b\u6240\u6709\u7684 api \u63a5\u53e3\u8def\u5f84\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u65e7\u9879\u76ee\u8fc1\u79fb",children:"\u65e7\u9879\u76ee\u8fc1\u79fb"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u4f60\u5e0c\u671b\u5728\u5df2\u7ecf\u4f7f\u7528\u4e86 alova \u7684\u9879\u76ee\u4e2d\u96c6\u6210 vscode \u6269\u5c55\uff0c\u4f60\u9700\u8981\u6309\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5148\u6839\u636e openapi \u89c4\u8303\u6587\u4ef6\u751f\u6210\u4ee3\u7801\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5c06",(0,s.jsx)(n.code,{children:"${output}/index.[js/ts]"}),"\u4e2d\u7684 alova \u5b9e\u4f8b\u7528\u539f alova \u5b9e\u4f8b\u4ee3\u7801\u66ff\u6362\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5728\u9879\u76ee\u4e2d\u5df2\u7ecf\u5b9a\u4e49\u597d\u7684 api \u8c03\u7528\u51fd\u6570\u4e2d\uff0c\u4fee\u6539 alova \u5b9e\u4f8b\u7684\u5f15\u5165\u8def\u5f84\u4e3a",(0,s.jsx)(n.code,{children:"${output}/index.[js/ts]"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u6837\uff0c\u4f60\u53ef\u4ee5\u5728\u4e0d\u6539\u53d8\u539f\u59cb\u4ee3\u7801\u7684\u60c5\u51b5\u4e0b\u96c6\u6210\u81ea\u52a8\u751f\u6210\u7684\u4ee3\u7801\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5728 ts \u9879\u76ee\u4e2d\uff0c\u5982\u679c\u53d1\u73b0 vscode \u65e0\u6cd5\u6b63\u786e\u667a\u80fd\u63d0\u793a\uff0c\u8bf7\u5728",(0,s.jsx)(n.code,{children:"tsconfig.json"}),"\u4e2d\u8bbe\u7f6e",(0,s.jsx)(n.code,{children:'"strictNullChecks": true'}),"\u3002"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},9322:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/vscode-api-doc-3e17c4b1f4a4dcff2b2f7a6a37fe1ddc.png"},23529:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/vscode-namespace-operationid-fc8197050631bc865a34f31c9d94d5d5.png"},97009:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/vscode-query-with-description-3bb3a57904f916252032e97edf306e2b.png"},25704:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/vscode-query-with-url-b7b6a3163b6d1da7cf3253e2fcbe1a86.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var s=t(67294);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);