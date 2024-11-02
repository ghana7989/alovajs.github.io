"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[5084],{61265:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var t=a(85893),r=a(11151),s=a(74866),o=a(85162);const l={title:"XMLHttpRequest\u9002\u914d\u5668"},i=void 0,c={id:"resource/request-adapter/xhr",title:"XMLHttpRequest\u9002\u914d\u5668",description:"\u5b89\u88c5",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/resource/01-request-adapter/03-xhr.md",sourceDirName:"resource/01-request-adapter",slug:"/resource/request-adapter/xhr",permalink:"/zh-CN/resource/request-adapter/xhr",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/resource/01-request-adapter/03-xhr.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"XMLHttpRequest\u9002\u914d\u5668"},sidebar:"resource",previous:{title:"Fetch\u9002\u914d\u5668",permalink:"/zh-CN/resource/request-adapter/fetch"},next:{title:"axios\u9002\u914d\u5668",permalink:"/zh-CN/resource/request-adapter/axios"}},u={},d=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u521b\u5efa alova",id:"\u521b\u5efa-alova",level:3},{value:"\u8bf7\u6c42",id:"\u8bf7\u6c42",level:3},{value:"\u4e0a\u4f20",id:"\u4e0a\u4f20",level:3},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:3},{value:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9",id:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9",level:2},{value:"Typescript",id:"typescript",level:2},{value:"method \u914d\u7f6e",id:"method-\u914d\u7f6e",level:3},{value:"\u54cd\u5e94\u6570\u636e",id:"\u54cd\u5e94\u6570\u636e",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(o.Z,{value:"1",label:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install alova @alova/adapter-xhr --save\n"})})}),(0,t.jsx)(o.Z,{value:"2",label:"yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add alova @alova/adapter-xhr\n"})})}),(0,t.jsx)(o.Z,{value:"3",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm install alova @alova/adapter-xhr\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,t.jsx)(n.h3,{id:"\u521b\u5efa-alova",children:"\u521b\u5efa alova"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.strong,{children:"xhrRequestAdapter"})," \u4f5c\u4e3a alova \u7684\u8bf7\u6c42\u9002\u914d\u5668\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"import { createAlova } from 'alova';\nimport { xhrRequestAdapter } from '@alova/adapter-xhr';\n\nconst alovaInst = createAlova({\n  // ...\n  requestAdapter: xhrResponseAdapter()\n  // ...\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u8bf7\u6c42",children:"\u8bf7\u6c42"}),"\n",(0,t.jsxs)(n.p,{children:["XMLHttpRequest \u9002\u914d\u5668\u63d0\u4f9b\u4e86\u57fa\u672c\u7684\u914d\u7f6e\u53c2\u6570\uff0c\u5305\u542b",(0,t.jsx)(n.code,{children:"responseType"}),"\u3001",(0,t.jsx)(n.code,{children:"withCredentials"}),"\u3001",(0,t.jsx)(n.code,{children:"mimeType"}),"\u3001",(0,t.jsx)(n.code,{children:"auth"}),"\uff0c\u5177\u4f53\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsxs)(s.Z,{groupId:"framework",children:[(0,t.jsx)(o.Z,{value:"1",label:"vue",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<tempate>\n  <div v-if=\"loading\">\u52a0\u8f7d\u4e2d...</div>\n  <div>\u8bf7\u6c42\u6570\u636e\u4e3a\uff1a{{ data }}</div>\n</tempate>\n\n<script setup>\n  const list = () =>\n    alovaInst.Get('/list', {\n      /**\n       * \u8bbe\u7f6e\u54cd\u5e94\u6570\u636e\u7c7b\u578b\n       * \u53ef\u4ee5\u8bbe\u7f6e\u66f4\u6539\u54cd\u5e94\u7c7b\u578b\u3002 \u503c\u4e3a\uff1a\u201carraybuffer\u201d\u3001\u201cblob\u201d\u3001\u201cdocument\u201d\u3001\u201cjson\u201d\u548c\u201ctext\u201d\n       * \u9ed8\u8ba4\u4e3a\u201cjson\u201d\n       */\n      responseType: 'text',\n\n      /**\n       * \u5f53\u51ed\u8bc1\u8981\u5305\u542b\u5728\u8de8\u6e90\u8bf7\u6c42\u4e2d\u65f6\u4e3atrue\u3002 \u5f53\u5b83\u4eec\u88ab\u6392\u9664\u5728\u8de8\u6e90\u8bf7\u6c42\u4e2d\u4ee5\u53ca\u5f53 cookie \u5728\u5176\u54cd\u5e94\u4e2d\u88ab\u5ffd\u7565\u65f6\u4e3a false\u3002 \u9ed8\u8ba4\u4e3afalse\n       */\n      withCredentials: true,\n\n      /**\n       * \u8bbe\u7f6e\u54cd\u5e94\u6570\u636e\u7684mimeType\n       */\n      mimeType: 'text/plain; charset=x-user-defined',\n\n      /**\n       * auth \u8868\u793a\u4f7f\u7528 HTTP Basic \u8eab\u4efd\u9a8c\u8bc1\uff0c\u5e76\u63d0\u4f9b\u51ed\u636e\u3002\n       * \u8fd9\u5c06\u8bbe\u7f6e\u4e00\u4e2a `Authorization` \u6807\u5934\uff0c\u8986\u76d6\u4efb\u4f55\u73b0\u6709\u7684\n       * \u4f7f\u7528 `headers` \u8bbe\u7f6e\u7684 `Authorization` \u81ea\u5b9a\u4e49\u6807\u5934\u3002\n       * \u8bf7\u6ce8\u610f\uff0c\u53ea\u6709 HTTP Basic \u8eab\u4efd\u9a8c\u8bc1\u53ef\u4ee5\u901a\u8fc7\u6b64\u53c2\u6570\u8fdb\u884c\u914d\u7f6e\u3002\n       * \u5bf9\u4e8e Bearer \u4ee4\u724c\u7b49\uff0c\u8bf7\u6539\u7528 `Authorization` \u81ea\u5b9a\u4e49\u6807\u5934\u3002\n       */\n      auth: {\n        username: 'name1',\n        password: '123456'\n      }\n    });\n  const { loading, data } = useRequest(list);\n<\/script>\n"})})}),(0,t.jsx)(o.Z,{value:"2",label:"react",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"const list = () =>\n  alovaInst.Get('/list', {\n    /**\n       * \u8bbe\u7f6e\u54cd\u5e94\u6570\u636e\u7c7b\u578b\n       * \u53ef\u4ee5\u8bbe\u7f6e\u66f4\u6539\u54cd\u5e94\u7c7b\u578b\u3002 \u503c\u4e3a\uff1a\u201carraybuffer\u201d\u3001\u201cblob\u201d\u3001\u201cdocument\u201d\u3001\u201cjson\u201d\u548c\u201ctext\u201d\n       * \u9ed8\u8ba4\u4e3a\u201cjson\u201d\n       */\n      responseType: 'text',\n\n      /**\n       * \u5f53\u51ed\u8bc1\u8981\u5305\u542b\u5728\u8de8\u6e90\u8bf7\u6c42\u4e2d\u65f6\u4e3atrue\u3002 \u5f53\u5b83\u4eec\u88ab\u6392\u9664\u5728\u8de8\u6e90\u8bf7\u6c42\u4e2d\u4ee5\u53ca\u5f53 cookie \u5728\u5176\u54cd\u5e94\u4e2d\u88ab\u5ffd\u7565\u65f6\u4e3a false\u3002 \u9ed8\u8ba4\u4e3afalse\n       */\n      withCredentials: true,\n\n      /**\n       * \u8bbe\u7f6e\u54cd\u5e94\u6570\u636e\u7684mimeType\n       */\n      mimeType: 'text/plain; charset=x-user-defined',\n\n      /**\n       * auth \u8868\u793a\u4f7f\u7528 HTTP Basic \u8eab\u4efd\u9a8c\u8bc1\uff0c\u5e76\u63d0\u4f9b\u51ed\u636e\u3002\n       * \u8fd9\u5c06\u8bbe\u7f6e\u4e00\u4e2a `Authorization` \u6807\u5934\uff0c\u8986\u76d6\u4efb\u4f55\u73b0\u6709\u7684\n       * \u4f7f\u7528 `headers` \u8bbe\u7f6e\u7684 `Authorization` \u81ea\u5b9a\u4e49\u6807\u5934\u3002\n       * \u8bf7\u6ce8\u610f\uff0c\u53ea\u6709 HTTP Basic \u8eab\u4efd\u9a8c\u8bc1\u53ef\u4ee5\u901a\u8fc7\u6b64\u53c2\u6570\u8fdb\u884c\u914d\u7f6e\u3002\n       * \u5bf9\u4e8e Bearer \u4ee4\u724c\u7b49\uff0c\u8bf7\u6539\u7528 `Authorization` \u81ea\u5b9a\u4e49\u6807\u5934\u3002\n       */\n      auth: {\n        username: 'name1',\n        password: '123456'\n      }\n  });\n\nconst App = () => {\n  const { loading, data } = useRequest(list);\n\n  return (\n    { loading ? <div>\u52a0\u8f7d\u4e2d...</div> : null }\n    <div>\u8bf7\u6c42\u6570\u636e\u4e3a\uff1a{ JSON.stringify(data) }</div>\n  )\n};\n"})})}),(0,t.jsx)(o.Z,{value:"3",label:"svelte",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<script>\n  const list = () =>\n    alovaInst.Get('/list', {\n      /**\n       * \u8bbe\u7f6e\u54cd\u5e94\u6570\u636e\u7c7b\u578b\n       * \u53ef\u4ee5\u8bbe\u7f6e\u66f4\u6539\u54cd\u5e94\u7c7b\u578b\u3002 \u503c\u4e3a\uff1a\u201carraybuffer\u201d\u3001\u201cblob\u201d\u3001\u201cdocument\u201d\u3001\u201cjson\u201d\u548c\u201ctext\u201d\n       * \u9ed8\u8ba4\u4e3a\u201cjson\u201d\n       */\n      responseType: 'text',\n\n      /**\n       * \u5f53\u51ed\u8bc1\u8981\u5305\u542b\u5728\u8de8\u6e90\u8bf7\u6c42\u4e2d\u65f6\u4e3atrue\u3002 \u5f53\u5b83\u4eec\u88ab\u6392\u9664\u5728\u8de8\u6e90\u8bf7\u6c42\u4e2d\u4ee5\u53ca\u5f53 cookie \u5728\u5176\u54cd\u5e94\u4e2d\u88ab\u5ffd\u7565\u65f6\u4e3a false\u3002 \u9ed8\u8ba4\u4e3afalse\n       */\n      withCredentials: true,\n\n      /**\n       * \u8bbe\u7f6e\u54cd\u5e94\u6570\u636e\u7684mimeType\n       */\n      mimeType: 'text/plain; charset=x-user-defined',\n\n      /**\n       * auth \u8868\u793a\u4f7f\u7528 HTTP Basic \u8eab\u4efd\u9a8c\u8bc1\uff0c\u5e76\u63d0\u4f9b\u51ed\u636e\u3002\n       * \u8fd9\u5c06\u8bbe\u7f6e\u4e00\u4e2a `Authorization` \u6807\u5934\uff0c\u8986\u76d6\u4efb\u4f55\u73b0\u6709\u7684\n       * \u4f7f\u7528 `headers` \u8bbe\u7f6e\u7684 `Authorization` \u81ea\u5b9a\u4e49\u6807\u5934\u3002\n       * \u8bf7\u6ce8\u610f\uff0c\u53ea\u6709 HTTP Basic \u8eab\u4efd\u9a8c\u8bc1\u53ef\u4ee5\u901a\u8fc7\u6b64\u53c2\u6570\u8fdb\u884c\u914d\u7f6e\u3002\n       * \u5bf9\u4e8e Bearer \u4ee4\u724c\u7b49\uff0c\u8bf7\u6539\u7528 `Authorization` \u81ea\u5b9a\u4e49\u6807\u5934\u3002\n       */\n      auth: {\n        username: 'name1',\n        password: '123456'\n      }\n    });\n  const { loading, data } = useRequest(list);\n<\/script>\n\n{#if $loading}\n<div>\u52a0\u8f7d\u4e2d...</div>\n{/if}\n<div>\u8bf7\u6c42\u6570\u636e\u4e3a\uff1a{ data }</div>\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"\u4e0a\u4f20",children:"\u4e0a\u4f20"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528",(0,t.jsx)(n.code,{children:"FormData"}),"\u4e0a\u4f20\u6587\u4ef6\uff0c\u8fd9\u4e2a",(0,t.jsx)(n.code,{children:"FormData"}),"\u5b9e\u4f8b\u4f1a\u901a\u8fc7",(0,t.jsx)(n.code,{children:"xhr.send"}),"\u53d1\u9001\u5230\u670d\u52a1\u7aef\u3002\u4e0a\u4f20\u65f6\u5c06\u81ea\u52a8\u8bbe\u7f6e",(0,t.jsx)(n.code,{children:"Content-Type"}),"\uff0c\u4e0d\u9700\u8981\u81ea\u5b9a\u4e49\u8bbe\u7f6e\u4e3a",(0,t.jsx)(n.code,{children:"multipart/form-data"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const uploadFile = imageFile => {\n  const formData = new FormData();\n  formData.append('file', imageFile);\n  return alovaInst.Post('/uploadImg', formData);\n};\n\nconst {\n  loading,\n  data,\n  uploading,\n  send: sendUpload\n} = useRequest(uploadFile, {\n  immediate: false\n});\n\n// \u56fe\u7247\u9009\u62e9\u4e8b\u4ef6\u56de\u8c03\nconst handleImageChoose = ({ target }) => {\n  sendUpload(target.files[0]);\n};\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u4e0b\u8f7d",children:"\u4e0b\u8f7d"}),"\n",(0,t.jsx)(n.p,{children:"\u5c06\u8bf7\u6c42 url \u6307\u5411\u6587\u4ef6\u5730\u5740\u5373\u53ef\u4e0b\u8f7d\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const downloadFile = () =>\n  alovaInst.Get('/bigImage.jpg', {\n    responseType: 'blob'\n  });\n\nconst { loading, data, downloading, send, onSuccess } = useRequest(downloadFile, {\n  immediate: false\n});\nonSuccess(({ data: imageBlob }) => {\n  // \u4e0b\u8f7d\u56fe\u7247\n  const anchor = document.createElement('a');\n  anchor.href = URL.createObjectURL(blob);\n  anchor.download = 'image.jpg';\n  anchor.click();\n  URL.revokeObjectURL(anchor.href);\n});\nconst handleImageDownload = () => {\n  send();\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9",children:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u5f00\u53d1\u5e94\u7528\u65f6\uff0c\u6211\u4eec\u4ecd\u7136\u53ef\u80fd\u9700\u8981\u7528\u5230\u6a21\u62df\u8bf7\u6c42\u3002\u53ea\u662f\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,t.jsx)(n.a,{href:"/resource/request-adapter/alova-mock",children:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668(@alova/mock)"}),"\u7684\u54cd\u5e94\u6570\u636e\u662f\u4e00\u4e2a",(0,t.jsx)(n.code,{children:"Response"}),"\u5b9e\u4f8b\uff0c\u5373\u9ed8\u8ba4\u517c\u5bb9",(0,t.jsx)(n.code,{children:"alova/fetch"}),"\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u5f53\u4f7f\u7528 XMLHttpRequest \u9002\u914d\u5668\u65f6\uff0c\u6211\u4eec\u9700\u8981\u8ba9\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u7684\u54cd\u5e94\u6570\u636e\u9002\u914d XMLHttpRequest \u9002\u914d\u5668\uff0c\u6b64\u65f6\u4f60\u9700\u8981\u4f7f\u7528**@alova/adapter-xhr**\u5305\u4e2d\u5bfc\u51fa\u7684",(0,t.jsx)(n.code,{children:"xhrMockResponse"}),"\u4f5c\u4e3a\u54cd\u5e94\u9002\u914d\u5668\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"import { defineMock, createAlovaMockAdapter } from '@alova/mock';\nimport { xhrRequestAdapter, xhrMockResponse } from '@alova/adapter-xhr';\n\nconst mocks = defineMock({\n  // ...\n});\n\n// \u6a21\u62df\u6570\u636e\u8bf7\u6c42\u9002\u914d\u5668\nexport default createAlovaMockAdapter([mocks], {\n  // \u6307\u5b9a\u8bf7\u6c42\u9002\u914d\u5668\u540e\uff0c\u672a\u5339\u914d\u6a21\u62df\u63a5\u53e3\u7684\u8bf7\u6c42\u5c06\u4f7f\u7528\u8fd9\u4e2a\u9002\u914d\u5668\u53d1\u9001\u8bf7\u6c42\n  httpAdapter: xhrRequestAdapter(),\n\n  // \u4f7f\u7528xhrMockResponse\uff0c\u8ba9\u6a21\u62df\u6570\u636e\u9002\u914dXMLHttpRequest\u9002\u914d\u5668\n  onMockResponse: xhrMockResponse\n});\n\nexport const alovaInst = createAlova({\n  // ...\n  // \u901a\u8fc7\u73af\u5883\u53d8\u91cf\u63a7\u5236\u662f\u5426\u4f7f\u7528\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\n  requestAdapter: process.env.NODE_ENV === 'development' ? mockAdapter : xhrRequestAdapter()\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"typescript",children:"Typescript"}),"\n",(0,t.jsx)(n.p,{children:"XMLHttpRequest \u8bf7\u6c42\u9002\u914d\u5668 \u63d0\u4f9b\u4e86\u5b8c\u6574\u7684\u7c7b\u578b\u9002\u914d\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"method-\u914d\u7f6e",children:"method \u914d\u7f6e"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u521b\u5efa method \u5b9e\u4f8b\u65f6\uff0c\u9664\u4e86 method \u4e2d\u901a\u7528\u7684\u914d\u7f6e\u9879\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528",(0,t.jsx)(n.code,{children:"AlovaXHRRequestConfig"}),"\u4e2d\u7684\u914d\u7f6e\u9879\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'/**\n * xhr\u8bf7\u6c42\u914d\u7f6e\u53c2\u6570\n */\ninterface AlovaXHRRequestConfig {\n  /**\n   * \u8bbe\u7f6e\u54cd\u5e94\u6570\u636e\u7c7b\u578b\u3002\n   *\n   * \u53ef\u4ee5\u8bbe\u7f6e\u66f4\u6539\u54cd\u5e94\u7c7b\u578b\u3002 \u503c\u4e3a\uff1a\u201carraybuffer\u201d\u3001\u201cblob\u201d\u3001\u201cdocument\u201d\u3001\u201cjson\u201d\u548c\u201ctext\u201d\u3002\n   * \u8bbe\u7f6e1\uff1a\u5982\u679c\u5f53\u524d\u5168\u5c40\u5bf9\u8c61\u4e0d\u662f Window \u5bf9\u8c61\uff0c\u5219\u5ffd\u7565\u8bbe\u7f6e\u4e3a\u201c\u6587\u6863\u201d\u3002\n   * \u8bbe\u7f6e2\uff1a\u5982\u679c\u72b6\u6001\u6b63\u5728\u52a0\u8f7d\u6216\u5b8c\u6210\uff0c\u5219\u629b\u51fa\u201cInvalidStateError\u201dDOMException\u3002\n   * \u8bbe\u7f6e3\uff1a\u5982\u679c\u8bbe\u7f6e\u4e86\u540c\u6b65\u6807\u5fd7\u4e14\u5f53\u524d\u5168\u5c40\u5bf9\u8c61\u662f Window \u5bf9\u8c61\uff0c\u5219\u629b\u51fa\u201cInvalidAccessError\u201dDOMException\u3002\n   * @default "json"\n   */\n  responseType?: XMLHttpRequestResponseType;\n\n  /**\n   * \u5f53\u51ed\u8bc1\u8981\u5305\u542b\u5728\u8de8\u6e90\u8bf7\u6c42\u4e2d\u65f6\u4e3atrue\u3002 \u5f53\u5b83\u4eec\u88ab\u6392\u9664\u5728\u8de8\u6e90\u8bf7\u6c42\u4e2d\u4ee5\u53ca\u5f53 cookie \u5728\u5176\u54cd\u5e94\u4e2d\u88ab\u5ffd\u7565\u65f6\u4e3a false\u3002 \u9ed8\u8ba4\u4e3afalse\u3002\n   * \u5982\u679c\u72b6\u6001\u672a\u53d1\u9001\u6216\u672a\u6253\u5f00\uff0c\u6216\u8005\u8bbe\u7f6e\u4e86send() \u6807\u5fd7\uff0c\u5219\u629b\u51fa\u201cInvalidStateError\u201dDOMException\u3002\n   * @default false\n   */\n  withCredentials?: boolean;\n\n  /**\n   * \u8bbe\u7f6e\u54cd\u5e94\u6570\u636e\u7684mimeType\n   */\n  mimeType?: string;\n\n  /**\n   * `auth` \u8868\u793a\u5e94\u8be5\u4f7f\u7528 HTTP Basic \u8eab\u4efd\u9a8c\u8bc1\uff0c\u5e76\u63d0\u4f9b\u51ed\u636e\u3002\n   * \u8fd9\u5c06\u8bbe\u7f6e\u4e00\u4e2a `Authorization` \u6807\u5934\uff0c\u8986\u76d6\u4efb\u4f55\u73b0\u6709\u7684\n   * \u4f7f\u7528 `headers` \u8bbe\u7f6e\u7684 `Authorization` \u81ea\u5b9a\u4e49\u6807\u5934\u3002\n   * \u8bf7\u6ce8\u610f\uff0c\u53ea\u6709 HTTP Basic \u8eab\u4efd\u9a8c\u8bc1\u53ef\u4ee5\u901a\u8fc7\u6b64\u53c2\u6570\u8fdb\u884c\u914d\u7f6e\u3002\n   * \u5bf9\u4e8e Bearer \u4ee4\u724c\u7b49\uff0c\u8bf7\u6539\u7528 `Authorization` \u81ea\u5b9a\u4e49\u6807\u5934\u3002\n   */\n  auth?: {\n    username: string;\n    password: string;\n  };\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u54cd\u5e94\u6570\u636e",children:"\u54cd\u5e94\u6570\u636e"}),"\n",(0,t.jsx)(n.p,{children:"XMLHttpRequest \u9002\u914d\u5668\u54cd\u5e94\u6570\u636e\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"interface AlovaXHRResponseHeaders {\n  [x: string]: any;\n}\ninterface AlovaXHRResponse<T = any> {\n  status: number;\n  statusText: string;\n  data: T;\n  headers: AlovaXHRResponseHeaders;\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:(e,n,a)=>{a.d(n,{Z:()=>o});a(67294);var t=a(90512);const r={tabItem:"tabItem_Ymn6"};var s=a(85893);function o(e){let{children:n,hidden:a,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,o),hidden:a,children:n})}},74866:(e,n,a)=>{a.d(n,{Z:()=>T});var t=a(67294),r=a(90512),s=a(12466),o=a(16550),l=a(20469),i=a(91980),c=a(67392),u=a(20812);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const r=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,i._X)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function v(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,s=h(e),[o,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,d]=m({queryString:a,groupId:r}),[v,x]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Nk)(a);return[r,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),f=(()=>{const e=c??v;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),x(e)}),[d,x,s]),tabValues:s}}var x=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=a(85893);function j(e){let{className:n,block:a,selectedValue:t,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const n=e.currentTarget,a=i.indexOf(n),r=l[a].value;r!==t&&(c(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;n=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;n=i[a]??i[i.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n),children:l.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function g(e){let{lazy:n,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=v(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,b.jsx)(j,{...n,...e}),(0,b.jsx)(g,{...n,...e})]})}function T(e){const n=(0,x.Z)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(n))}},11151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>o});var t=a(67294);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);