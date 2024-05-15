"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[3626],{1312:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var a=n(5893),t=n(1151),o=n(4866),l=n(5162);const s={title:"Taro\u9002\u914d\u5668",sidebar_position:40},i=void 0,d={id:"tutorial/request-adapter/alova-adapter-taro",title:"Taro\u9002\u914d\u5668",description:"\u6b64\u63d2\u4ef6\u53ea\u652f\u6301 react 16.8+\u3001vue3 \u7248\u672c\u7684 taro \u5e94\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/08-request-adapter/04-alova-adapter-taro.md",sourceDirName:"tutorial/08-request-adapter",slug:"/tutorial/request-adapter/alova-adapter-taro",permalink:"/zh-CN/tutorial/request-adapter/alova-adapter-taro",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/08-request-adapter/04-alova-adapter-taro.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"Taro\u9002\u914d\u5668",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"axios\u9002\u914d\u5668",permalink:"/zh-CN/tutorial/request-adapter/alova-adapter-axios"},next:{title:"Uniapp\u9002\u914d\u5668",permalink:"/zh-CN/tutorial/request-adapter/alova-adapter-uniapp"}},c={},u=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u521b\u5efa alova",id:"\u521b\u5efa-alova",level:3},{value:"\u8bf7\u6c42",id:"\u8bf7\u6c42",level:3},{value:"\u4e0a\u4f20",id:"\u4e0a\u4f20",level:3},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:3},{value:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9",id:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9",level:2},{value:"Typescript",id:"typescript",level:2},{value:"method \u914d\u7f6e",id:"method-\u914d\u7f6e",level:3},{value:"\u54cd\u5e94\u6570\u636e",id:"\u54cd\u5e94\u6570\u636e",level:3}];function p(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.admonition,{title:"\u63d0\u793a",type:"info",children:(0,a.jsx)(r.p,{children:"\u6b64\u63d2\u4ef6\u53ea\u652f\u6301 react 16.8+\u3001vue3 \u7248\u672c\u7684 taro \u5e94\u7528\u3002"})}),"\n",(0,a.jsx)(r.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(l.Z,{value:"1",label:"npm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"npm install @alova/adapter-taro --save\n"})})}),(0,a.jsx)(l.Z,{value:"2",label:"yarn",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"yarn add @alova/adapter-taro\n"})})})]}),"\n",(0,a.jsxs)(r.admonition,{title:"React-Native \u5e94\u7528",type:"warning",children:[(0,a.jsxs)(r.p,{children:["\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528 Taro \u5f00\u53d1 React-Native \u5e94\u7528\uff0c\u8bf7\u786e\u4fdd",(0,a.jsx)(r.code,{children:"metro >= 0.76.0"}),"\uff0c\u5e76\u5728",(0,a.jsx)(r.code,{children:"metro.config.js"}),"\u4e2d\u5f00\u542f",(0,a.jsx)(r.code,{children:"resolver.unstable_enablePackageExports"})]}),(0,a.jsx)(r.p,{children:(0,a.jsx)(r.a,{href:"https://facebook.github.io/metro/docs/configuration/#unstable_enablepackageexports-experimental",children:"\u5173\u4e8e metro \u7684 unstable_enablePackageExports \u53c2\u6570"})})]}),"\n",(0,a.jsxs)(r.admonition,{title:"\u4f9d\u8d56\u9884\u7f16\u8bd1\u95ee\u9898",type:"warning",children:[(0,a.jsxs)(r.p,{children:["\u5728 Taro v3.5 beta \u4e2d\u65b0\u589e\u4e86",(0,a.jsx)(r.a,{href:"https://docs.taro.zone/blog/2022/05/19/Taro-3.5-beta#2-%E4%BE%9D%E8%B5%96%E9%A2%84%E7%BC%96%E8%AF%91",children:"\u4f9d\u8d56\u9884\u7f16\u8bd1\u529f\u80fd"}),"\u5e76\u5728\u5f00\u53d1\u6a21\u5f0f\u4e0b\u9ed8\u8ba4\u5f00\u542f\uff0c\u5f53\u4f60\u6b63\u5728 Taro \u4e2d\u540c\u65f6\u4f7f\u7528",(0,a.jsx)(r.code,{children:"alova"}),"\u5e93\u548c",(0,a.jsx)(r.code,{children:"@alova/scene-react(vue)"}),"\u65f6\u53ef\u80fd\u5bfc\u81f4\u62a5 ",(0,a.jsx)(r.code,{children:" [alova]can not call useHooks until set the `statesHook` at alova instance."}),"\u7684\u9519\u8bef\uff0c\u8fd9\u662f\u7531\u4e8e prebundle \u529f\u80fd\u91cd\u590d\u6253\u5305\u4e86\u4e24\u4efd\u4e0d\u540c\u7684",(0,a.jsx)(r.code,{children:"alova"}),"\u5305\u5bfc\u81f4\uff0c\u6b64\u65f6\u5173\u95ed prebundle \u529f\u80fd\u5373\u53ef\u89e3\u51b3\u6b64\u95ee\u9898\u3002"]}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:"// config/dev.ts\r\nexport default {\r\n  // ...\r\n  compiler: {\r\n    type: 'webpack5',\r\n    prebundle: {\r\n      // \u5173\u95edprebundle\r\n      enable: false\r\n    }\r\n  }\r\n} satisfies UserConfigExport\r\n\n"})}),(0,a.jsxs)(r.p,{children:["\u611f\u8c22",(0,a.jsx)(r.a,{href:"https://github.com/alovajs/scene/issues/63",children:"LBinin \u7684 issue"}),"\u3002"]}),(0,a.jsxs)(r.p,{children:["\u6b64\u95ee\u9898\u5df2\u5411 Taro \u56e2\u961f\u63d0\u4ea4",(0,a.jsx)(r.a,{href:"https://github.com/NervJS/taro/issues/15728",children:"issue"}),"\uff0c\u671f\u5f85\u89e3\u51b3\u6b64\u95ee\u9898\u3002"]})]}),"\n",(0,a.jsx)(r.h2,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,a.jsx)(r.h3,{id:"\u521b\u5efa-alova",children:"\u521b\u5efa alova"}),"\n",(0,a.jsxs)(r.p,{children:["\u8c03\u7528 ",(0,a.jsx)(r.strong,{children:"AdapterTaro"})," \u5c06\u8fd4\u56de",(0,a.jsx)(r.em,{children:"\u8bf7\u6c42\u9002\u914d\u5668"}),"\u3001",(0,a.jsx)(r.em,{children:"\u5b58\u50a8\u9002\u914d\u5668"}),"\uff0c\u4ee5\u53ca",(0,a.jsx)(r.em,{children:"ReactHook"}),"\uff0c\u56e0\u6b64\u4f60\u4e0d\u518d\u9700\u8981\u8bbe\u7f6e\u8fd9\u4e09\u4e2a\u9879\uff0c\u4f7f\u7528\u65b9\u6cd5\u5b8c\u5168\u4e00\u81f4\u3002"]}),"\n",(0,a.jsxs)(o.Z,{groupId:"framework",children:[(0,a.jsx)(l.Z,{value:"2",label:"react",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-javascript",children:"import { createAlova } from 'alova';\r\nimport AdapterTaro from '@alova/adapter-taro';\r\n\r\nconst alovaInst = createAlova({\r\n  baseURL: 'https://api.alovajs.org',\r\n  ...AdapterTaro()\r\n});\n"})})}),(0,a.jsx)(l.Z,{value:"1",label:"vue composition",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-javascript",children:"import { createAlova } from 'alova';\r\nimport AdapterTaroVue from '@alova/adapter-taro/vue';\r\n\r\nconst alovaInst = createAlova({\r\n  baseURL: 'https://api.alovajs.org',\r\n  ...AdapterTaroVue()\r\n});\n"})})})]}),"\n",(0,a.jsx)(r.h3,{id:"\u8bf7\u6c42",children:"\u8bf7\u6c42"}),"\n",(0,a.jsxs)(r.p,{children:["\u8bf7\u6c42\u7684\u4f7f\u7528\u65b9\u6cd5\u4e0e web \u73af\u5883\u4e2d\u4f7f\u7528\u5b8c\u5168\u4e00\u81f4\u3002\u5df2\u7ecf\u5b8c\u5168\u517c\u5bb9",(0,a.jsx)(r.code,{children:"Taro.request"}),"\uff0c\u4f60\u53ef\u4ee5\u5728\u521b\u5efa method \u5b9e\u4f8b\u7684",(0,a.jsx)(r.em,{children:"config"}),"\u4e2d\u6307\u5b9a",(0,a.jsx)(r.code,{children:"Taro.request"}),"\u652f\u6301\u7684",(0,a.jsx)(r.a,{href:"https://taro-docs.jd.com/docs/apis/network/request/",children:"\u5168\u90e8\u914d\u7f6e\u9879"})]}),"\n",(0,a.jsxs)(o.Z,{groupId:"framework",children:[(0,a.jsx)(l.Z,{value:"2",label:"react",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-jsx",children:"const list = () =>\r\n  alovaInst.Get('/list', {\r\n    // \u8bbe\u7f6e\u7684\u53c2\u6570\u5c06\u4f20\u9012\u7ed9Taro.request\r\n    enableHttp2: true\r\n  });\r\n\r\nconst App = () => {\r\n  const { loading, data } = useRequest(list);\r\n\r\n  return (\r\n    { loading ? <View>\u52a0\u8f7d\u4e2d...</View> : null }\r\n    <View>\u8bf7\u6c42\u6570\u636e\u4e3a\uff1a{ JSON.stringify(data) }</View>\r\n  )\r\n};\n"})})}),(0,a.jsx)(l.Z,{value:"1",label:"vue composition",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-html",children:"<tempate>\r\n  <view v-if=\"loading\">\u52a0\u8f7d\u4e2d...</view>\r\n  <view>\u8bf7\u6c42\u6570\u636e\u4e3a\uff1a{{ data }}</view>\r\n</tempate>\r\n\r\n<script setup>\r\n  const list = () =>\r\n    alovaInst.Get('/list', {\r\n      // \u8bbe\u7f6e\u7684\u53c2\u6570\u5c06\u4f20\u9012\u7ed9Taro.request\r\n      enableHttp2: true\r\n    });\r\n  const { loading, data } = useRequest(list);\r\n<\/script>\n"})})})]}),"\n",(0,a.jsx)(r.h3,{id:"\u4e0a\u4f20",children:"\u4e0a\u4f20"}),"\n",(0,a.jsxs)(r.p,{children:["\u5728 method \u5b9e\u4f8b\u7684",(0,a.jsx)(r.em,{children:"config"}),"\u4e2d\u8bbe\u7f6e",(0,a.jsx)(r.code,{children:"requestType: 'upload'"}),"\u65f6\u8868\u793a\u4e0a\u4f20\u6587\u4ef6\uff0c\u8bf7\u6c42\u9002\u914d\u5668\u5c06\u4f1a\u8c03\u7528",(0,a.jsx)(r.code,{children:"Taro.uploadFile"}),"\uff0c\u4e0a\u4f20\u7684\u6587\u4ef6\u6570\u636e\u653e\u5728 method \u5b9e\u4f8b\u7684 data \u4e2d\uff0c\u4f60\u9700\u8981\u5728 data \u4e2d\u6307\u5b9a",(0,a.jsx)(r.code,{children:"name"}),"\u548c",(0,a.jsx)(r.code,{children:"filePath"}),"\uff0c\u8fd9 2 \u4e2a\u53c2\u6570\u5c06\u4f20\u5230",(0,a.jsx)(r.code,{children:"Taro.uploadFile"}),"\u4e2d\uff0c\u540c\u65f6\uff0c\u4f60\u8fd8\u53ef\u4ee5\u5728 data \u4e2d\u6307\u5b9a\u8fd9 2 \u4e2a\u53c2\u6570\u5916\u7684\u5176\u4ed6\u53c2\u6570\uff0c\u8bf7\u6c42\u9002\u914d\u5668\u4f1a\u5c06\u5b83\u4eec\u4f20\u5165\u5230",(0,a.jsx)(r.code,{children:"formData"}),"\u53c2\u6570\u4e2d\u3002"]}),"\n",(0,a.jsxs)(r.p,{children:["\u540c\u6837\u7684\uff0c\u5df2\u7ecf\u5b8c\u5168\u517c\u5bb9",(0,a.jsx)(r.code,{children:"Taro.uploadFile"}),"\uff0c\u4f60\u53ef\u4ee5\u5728\u521b\u5efa method \u5b9e\u4f8b\u7684",(0,a.jsx)(r.em,{children:"config"}),"\u4e2d\u6307\u5b9a",(0,a.jsx)(r.code,{children:"Taro.uploadFile"}),"\u652f\u6301\u7684",(0,a.jsx)(r.a,{href:"https://taro-docs.jd.com/docs/apis/network/upload/uploadFile",children:"\u5168\u90e8\u914d\u7f6e\u9879"}),"\uff0c\u5982\u679c\u8fd8\u6709\u989d\u5916\u7684\u53c2\u6570\u9700\u8981\u8bbe\u7f6e\uff0c\u8bf7\u5728 method \u5b9e\u4f8b\u7684",(0,a.jsx)(r.em,{children:"config"}),"\u4e2d\u6307\u5b9a\u3002"]}),"\n",(0,a.jsxs)(o.Z,{groupId:"framework",children:[(0,a.jsx)(l.Z,{value:"2",label:"react",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-jsx",children:"const uploadFile = (name, filePath, formData) =>\r\n  alovaInst.Post(\r\n    '/uploadImg',\r\n    {\r\n      name,\r\n      filePath,\r\n\r\n      // \u989d\u5916\u6570\u636e\u5c06\u4f20\u5165uni.uploadFile\u7684formData\u4e2d\r\n      ...formData\r\n    },\r\n    {\r\n      // \u8bbe\u7f6e\u8bf7\u6c42\u65b9\u5f0f\u4e3a\u4e0a\u4f20\uff0c\u9002\u914d\u5668\u5185\u5c06\u8c03\u7528uni.uploadFile\r\n      requestType: 'upload',\r\n\r\n      // \u5f00\u542f\u4e0a\u4f20\u8fdb\u5ea6\r\n      enableUpload: true\r\n    }\r\n  );\r\n\r\nconst App = () => {\r\n  const { loading, data, uploading, send } = useRequest(uploadFile, {\r\n    immediate: false\r\n  });\r\n\r\n  const handleImageChoose = () => {\r\n    Taro.chooseImage({\r\n      success: chooseImageRes => {\r\n        const tempFilePaths = chooseImageRes.tempFilePaths;\r\n        send('fileName', tempFilePaths[0], {\r\n          extra1: 'a',\r\n          extra2: 'b'\r\n        });\r\n      }\r\n    });\r\n  };\r\n\r\n  return (\r\n    { loading ? <View>\u4e0a\u4f20\u4e2d...</View> : null }\r\n    <View>\u4e0a\u4f20\u8fdb\u5ea6\uff1a{ uploading.loaded }/{ uploading.total }</View>\r\n    <Button onClick={handleImageChoose}>\u4e0a\u4f20\u56fe\u7247</Button>\r\n    {/* ... */}\r\n  )\r\n}\n"})})}),(0,a.jsx)(l.Z,{value:"1",label:"vue composition",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-html",children:"<tempate>\r\n  <view v-if=\"loading\">\u4e0a\u4f20\u4e2d...</view>\r\n  <view>\u4e0a\u4f20\u8fdb\u5ea6\uff1a{{ uploading.loaded }}/{{ uploading.total }}</view>\r\n  <button @click=\"handleImageChoose\">\u4e0a\u4f20\u56fe\u7247</button>\r\n  \x3c!-- ... --\x3e\r\n</tempate>\r\n\r\n<script setup>\r\n  const uploadFile = (name, filePath, formData) =>\r\n    alovaInst.Post(\r\n      '/uploadImg',\r\n      {\r\n        name,\r\n        filePath,\r\n\r\n        // \u989d\u5916\u6570\u636e\u5c06\u4f20\u5165uni.uploadFile\u7684formData\u4e2d\r\n        ...formData\r\n      },\r\n      {\r\n        // \u8bbe\u7f6e\u8bf7\u6c42\u65b9\u5f0f\u4e3a\u4e0a\u4f20\uff0c\u9002\u914d\u5668\u5185\u5c06\u8c03\u7528uni.uploadFile\r\n        requestType: 'upload',\r\n\r\n        // \u5f00\u542f\u4e0a\u4f20\u8fdb\u5ea6\r\n        enableUpload: true\r\n      }\r\n    );\r\n\r\n  const { loading, data, uploading, send } = useRequest(uploadFile, {\r\n    immediate: false\r\n  });\r\n\r\n  const handleImageChoose = () => {\r\n    Taro.chooseImage({\r\n      success: chooseImageRes => {\r\n        const tempFilePaths = chooseImageRes.tempFilePaths;\r\n        send('fileName', tempFilePaths[0], {\r\n          extra1: 'a',\r\n          extra2: 'b'\r\n        });\r\n      }\r\n    });\r\n  };\r\n<\/script>\n"})})})]}),"\n",(0,a.jsx)(r.h3,{id:"\u4e0b\u8f7d",children:"\u4e0b\u8f7d"}),"\n",(0,a.jsxs)(r.p,{children:["\u5728 method \u5b9e\u4f8b\u7684",(0,a.jsx)(r.em,{children:"config"}),"\u4e2d\u8bbe\u7f6e",(0,a.jsx)(r.code,{children:"requestType: 'download'"}),"\u65f6\u8868\u793a\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u6c42\u9002\u914d\u5668\u5c06\u4f1a\u8c03\u7528",(0,a.jsx)(r.code,{children:"Taro.downloadFile"}),"\u3002"]}),"\n",(0,a.jsxs)(r.p,{children:["\u540c\u6837\u7684\uff0c\u5df2\u7ecf\u5b8c\u5168\u517c\u5bb9",(0,a.jsx)(r.code,{children:"Taro.downloadFile"}),"\uff0c\u4f60\u53ef\u4ee5\u5728\u521b\u5efa method \u5b9e\u4f8b\u7684",(0,a.jsx)(r.em,{children:"config"}),"\u4e2d\u6307\u5b9a",(0,a.jsx)(r.code,{children:"Taro.downloadFile"}),"\u652f\u6301\u7684",(0,a.jsx)(r.a,{href:"https://taro-docs.jd.com/docs/apis/network/download/downloadFile",children:"\u5168\u90e8\u914d\u7f6e\u9879"}),"\uff0c\u5982\u679c\u8fd8\u6709\u989d\u5916\u7684\u53c2\u6570\u9700\u8981\u8bbe\u7f6e\uff0c\u8bf7\u5728 method \u5b9e\u4f8b\u7684",(0,a.jsx)(r.em,{children:"config"}),"\u4e2d\u6307\u5b9a\u3002"]}),"\n",(0,a.jsxs)(o.Z,{groupId:"framework",children:[(0,a.jsx)(l.Z,{value:"2",label:"react",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-jsx",children:"const downloadFile = filePath =>\r\n  alovaInst.Get('/bigImage.jpg', {\r\n    // \u8bbe\u7f6e\u8bf7\u6c42\u65b9\u5f0f\u4e3a\u4e0b\u8f7d\uff0c\u9002\u914d\u5668\u5185\u5c06\u8c03\u7528uni.downloadFile\r\n    requestType: 'download',\r\n    filePath,\r\n\r\n    // \u5f00\u542f\u4e0b\u8f7d\u8fdb\u5ea6\r\n    enableDownload: true\r\n  });\r\n\r\nconst App = () => {\r\n  const { loading, data, downloading, send } = useRequest(downloadFile, {\r\n    immediate: false\r\n  });\r\n  const handleImageDownload = () => {\r\n    send('file_save_path');\r\n  };\r\n\r\n  return (\r\n    { loading ? <View>\u4e0b\u8f7d\u4e2d...</View> : null }\r\n    <View>\u4e0b\u8f7d\u8fdb\u5ea6\uff1a{ downloading.loaded }/{ downloading.total }</View>\r\n    <Button onClick={handleImageDownload}>\u4e0b\u8f7d\u56fe\u7247</Button>\r\n    {/* ... */}\r\n  );\r\n}\n"})})}),(0,a.jsx)(l.Z,{value:"1",label:"vue composition",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-html",children:"<tempate>\r\n  <view v-if=\"loading\">\u4e0b\u8f7d\u4e2d...</view>\r\n  <view>\u4e0b\u8f7d\u8fdb\u5ea6\uff1a{{ downloading.loaded }}/{{ downloading.total }}</view>\r\n  <button @click=\"handleImageDownload\">\u4e0b\u8f7d\u56fe\u7247</button>\r\n  \x3c!-- ... --\x3e\r\n</tempate>\r\n\r\n<script setup>\r\n  const downloadFile = filePath =>\r\n    alovaInst.Get('/bigImage.jpg', {\r\n      // \u8bbe\u7f6e\u8bf7\u6c42\u65b9\u5f0f\u4e3a\u4e0b\u8f7d\uff0c\u9002\u914d\u5668\u5185\u5c06\u8c03\u7528uni.downloadFile\r\n      requestType: 'download',\r\n      filePath,\r\n\r\n      // \u5f00\u542f\u4e0b\u8f7d\u8fdb\u5ea6\r\n      enableDownload: true\r\n    });\r\n\r\n  const { loading, data, downloading, send } = useRequest(downloadFile, {\r\n    immediate: false\r\n  });\r\n\r\n  const handleImageDownload = () => {\r\n    send('file_save_path');\r\n  };\r\n<\/script>\n"})})})]}),"\n",(0,a.jsx)(r.h2,{id:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9",children:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9"}),"\n",(0,a.jsxs)(r.p,{children:["\u5728\u4f7f\u7528 Taro \u5f00\u53d1\u5e94\u7528\u65f6\uff0c\u6211\u4eec\u4ecd\u7136\u53ef\u80fd\u9700\u8981\u7528\u5230\u6a21\u62df\u8bf7\u6c42\uff0c\u53ea\u662f\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,a.jsx)(r.a,{href:"/tutorial/request-adapter/alova-mock",children:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668(@alova/mock)"}),"\u7684\u54cd\u5e94\u6570\u636e\u662f\u4e00\u4e2a",(0,a.jsx)(r.code,{children:"Response"}),"\u5b9e\u4f8b\uff0c\u5373\u9ed8\u8ba4\u517c\u5bb9",(0,a.jsx)(r.code,{children:"GlobalFetch"}),"\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u5f53\u5728 Taro \u73af\u5883\u4e0b\u4f7f\u7528\u65f6\uff0c\u6211\u4eec\u9700\u8981\u8ba9\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u7684\u54cd\u5e94\u6570\u636e\u662f\u517c\u5bb9 Taro \u9002\u914d\u5668\u7684\uff0c\u56e0\u6b64\u4f60\u9700\u8981\u4f7f\u7528**@alova/adapter-taro**\u5305\u4e2d\u5bfc\u51fa\u7684",(0,a.jsx)(r.code,{children:"taroMockResponse"}),"\u4f5c\u4e3a\u54cd\u5e94\u9002\u914d\u5668\u3002"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-javascript",children:"import { defineMock, createAlovaMockAdapter } from '@alova/mock';\r\nimport AdapterTaro, { taroRequestAdapter, taroMockResponse } from '@alova/adapter-taro';\r\n\r\nconst mocks = defineMock({\r\n  // ...\r\n});\r\n\r\n// \u6a21\u62df\u6570\u636e\u8bf7\u6c42\u9002\u914d\u5668\r\nexport default createAlovaMockAdapter([mocks], {\r\n  // \u6307\u5b9ataro\u8bf7\u6c42\u9002\u914d\u5668\u540e\uff0c\u672a\u5339\u914d\u6a21\u62df\u63a5\u53e3\u7684\u8bf7\u6c42\u5c06\u4f7f\u7528\u8fd9\u4e2a\u9002\u914d\u5668\u53d1\u9001\u8bf7\u6c42\r\n  httpAdapter: taroRequestAdapter,\r\n\r\n  //  \u6a21\u62df\u54cd\u5e94\u9002\u914d\u5668\uff0c\u6307\u5b9a\u540e\u54cd\u5e94\u6570\u636e\u5c06\u8f6c\u6362\u4e3ataro\u517c\u5bb9\u7684\u6570\u636e\u683c\u5f0f\r\n  onMockResponse: taroMockResponse\r\n});\r\n\r\nexport const alovaInst = createAlova({\r\n  baseURL: 'https://api.alovajs.org',\r\n  timeout: 5000,\r\n  ...AdapterTaro({\r\n    // \u901a\u8fc7\u73af\u5883\u53d8\u91cf\u63a7\u5236\u662f\u5426\u4f7f\u7528\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\r\n    mockRequest: process.env.NODE_ENV === 'development' ? mockAdapter : undefined\r\n  })\r\n  // ...\r\n});\n"})}),"\n",(0,a.jsx)(r.h2,{id:"typescript",children:"Typescript"}),"\n",(0,a.jsx)(r.p,{children:"taro \u8bf7\u6c42\u9002\u914d\u5668 \u63d0\u4f9b\u4e86\u5b8c\u6574\u7684\u7c7b\u578b\u9002\u914d\uff0cmethod \u914d\u7f6e\u3001\u54cd\u5e94\u6570\u636e\u7684\u7c7b\u578b\u5c06\u4e0e taro \u7684\u7c7b\u578b\u5b8c\u5168\u5339\u914d\u3002"}),"\n",(0,a.jsx)(r.h3,{id:"method-\u914d\u7f6e",children:"method \u914d\u7f6e"}),"\n",(0,a.jsxs)(r.p,{children:["\u5728\u521b\u5efa method \u5b9e\u4f8b\u65f6\uff0c\u9664\u4e86 method \u4e2d\u901a\u7528\u7684\u914d\u7f6e\u9879\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528",(0,a.jsx)(r.code,{children:"Taro.request"}),"\u3001",(0,a.jsx)(r.code,{children:"Taro.uploadFile"}),"\u548c",(0,a.jsx)(r.code,{children:"Taro.downloadFile"}),"\u4e2d\u7684\u914d\u7f6e\u9879\uff0c\u6211\u4eec\u5df2\u7ecf\u5728\u7c7b\u578b\u4e2d\u53bb\u9664\u4e86\u548c method \u5b9e\u4f8b\u901a\u7528\u914d\u7f6e\u51b2\u7a81\u7684\u9879\u3002"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-typescript",children:"/**\r\n * Taro.request\u8bf7\u6c42\u989d\u5916\u53c2\u6570\r\n */\r\nexport type TaroRequestConfig = Omit<\r\n  Taro.request.Option,\r\n  'url' | 'data' | 'header' | 'method' | 'timeout' | 'success' | 'fail' | 'complete'\r\n>;\r\n\r\n/**\r\n * Taro.uploadFile\u989d\u5916\u53c2\u6570\r\n */\r\nexport type TaroUploadConfig = Omit<\r\n  Taro.uploadFile.Option,\r\n  'url' | 'filePath' | 'name' | 'header' | 'formData' | 'timeout' | 'success' | 'fail' | 'complete'\r\n>;\r\n\r\n/**\r\n * Taro.downloadFile\u989d\u5916\u53c2\u6570\r\n */\r\nexport type TaroDownloadConfig = Omit<\r\n  Taro.downloadFile.Option,\r\n  'url' | 'header' | 'timeout' | 'success' | 'fail' | 'complete'\r\n>;\r\n\r\n/**\r\n * \u5408\u5e76\u7684\u8bf7\u6c42\u914d\u7f6e\u53c2\u6570\r\n */\r\nexport type TaroConfig = {\r\n  /**\r\n   * \u8bf7\u6c42\u7c7b\u578b\uff0cupload\u8868\u793a\u4e0a\u4f20\uff0cdownload\u8868\u793a\u4e0b\u8f7d\uff0c\u4e0d\u586b\u5199\u8868\u793a\u6b63\u5e38\u8bf7\u6c42\r\n   */\r\n  requestType?: 'upload' | 'download';\r\n} & TaroRequestConfig &\r\n  TaroUploadConfig &\r\n  TaroDownloadConfig;\n"})}),"\n",(0,a.jsx)(r.h3,{id:"\u54cd\u5e94\u6570\u636e",children:"\u54cd\u5e94\u6570\u636e"}),"\n",(0,a.jsxs)(r.p,{children:["\u56e0\u4e3a taro \u8bf7\u6c42\u9002\u914d\u5668\u540c\u65f6\u517c\u5bb9\u4e86",(0,a.jsx)(r.code,{children:"Taro.request"}),"\u3001",(0,a.jsx)(r.code,{children:"Taro.uploadFile"}),"\u548c",(0,a.jsx)(r.code,{children:"Taro.downloadFile"}),"\uff0c\u4f46\u5b83\u4eec\u7684\u54cd\u5e94\u503c\u7c7b\u578b\u7a0d\u6709\u4e0d\u540c\uff0c\u6240\u4ee5\u54cd\u5e94\u6570\u636e\u7c7b\u578b\u662f\u8fd9\u6837\u7684\uff1a"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-typescript",children:"type TaroResponse =\r\n  // Taro.request\u7684\u54cd\u5e94\u7c7b\u578b\r\n  | Taro.request.SuccessCallbackResult<any>\r\n\r\n  // Taro.uploadFile\u7684\u54cd\u5e94\u7c7b\u578b\r\n  | Taro.uploadFile.SuccessCallbackResult\r\n\r\n  // Taro.downloadFile\u7684\u54cd\u5e94\u7c7b\u578b\r\n  | Taro.downloadFile.FileSuccessCallbackResult;\n"})}),"\n",(0,a.jsx)(r.p,{children:"\u5728\u5b9e\u9645\u4f7f\u7528\u4e2d\uff0c\u6211\u4eec\u901a\u5e38\u9700\u8981\u5728\u5168\u5c40\u5904\u7406\u54cd\u5e94\u6570\u636e\uff0c\u5efa\u8bae\u5206\u5f00\u573a\u666f\u5224\u65ad\u8fd4\u56de\u6570\u636e\uff0c\u4e00\u4e2a\u7b80\u5355\u7684\u5b9e\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-typescript",children:"const alovaInst = createAlova(\r\n  baseURL: 'https://api.alovajs.org',\r\n  ...AdapterTaro(),\r\n  responded(response) {\r\n    const { statusCode, data } = response as Taro.request.SuccessCallbackResult<any>;\r\n    if (statusCode >= 400) {\r\n      throw new Error('\u8bf7\u6c42\u9519\u8bef');\r\n    }\r\n    return data || null;\r\n  }\r\n});\n"})})]})}function h(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},5162:(e,r,n)=>{n.d(r,{Z:()=>l});n(7294);var a=n(512);const t={tabItem:"tabItem_Ymn6"};var o=n(5893);function l(e){let{children:r,hidden:n,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(t.tabItem,l),hidden:n,children:r})}},4866:(e,r,n)=>{n.d(r,{Z:()=>T});var a=n(7294),t=n(512),o=n(2466),l=n(6550),s=n(469),i=n(1980),d=n(7392),c=n(12);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:n}=e;return(0,a.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:n,attributes:a,default:t}}=e;return{value:r,label:n,attributes:a,default:t}}))}(n);return function(e){const r=(0,d.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function h(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:n}=e;const t=(0,l.k6)(),o=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(t.location.search);r.set(o,e),t.replace({...t.location,search:r.toString()})}),[o,t])]}function x(e){const{defaultValue:r,queryString:n=!1,groupId:t}=e,o=p(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:o}))),[d,u]=m({queryString:n,groupId:t}),[x,v]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[t,o]=(0,c.Nk)(n);return[t,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:t}),j=(()=>{const e=d??x;return h({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{j&&i(j)}),[j]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),v(e)}),[u,v,o]),tabValues:o}}var v=n(2389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(5893);function g(e){let{className:r,block:n,selectedValue:a,selectValue:l,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),c=e=>{const r=e.currentTarget,n=i.indexOf(r),t=s[n].value;t!==a&&(d(r),l(t))},u=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;r=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;r=i[n]??i[i.length-1];break}}r?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":n},r),children:s.map((e=>{let{value:r,label:n,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>i.push(e),onKeyDown:u,onClick:c,...o,className:(0,t.Z)("tabs__item",j.tabItem,o?.className,{"tabs__item--active":a===r}),children:n??r},r)}))})}function b(e){let{lazy:r,children:n,selectedValue:t}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==t})))})}function w(e){const r=x(e);return(0,f.jsxs)("div",{className:(0,t.Z)("tabs-container",j.tabList),children:[(0,f.jsx)(g,{...e,...r}),(0,f.jsx)(b,{...e,...r})]})}function T(e){const r=(0,v.Z)();return(0,f.jsx)(w,{...e,children:u(e.children)},String(r))}},1151:(e,r,n)=>{n.d(r,{Z:()=>s,a:()=>l});var a=n(7294);const t={},o=a.createContext(t);function l(e){const r=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(o.Provider,{value:r},e.children)}}}]);