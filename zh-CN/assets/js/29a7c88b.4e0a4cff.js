"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[7941],{53466:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var o=a(85893),t=a(11151),r=a(74866),l=a(85162);const s={title:"Taro\u9002\u914d\u5668"},i=void 0,d={id:"resource/request-adapter/taro",title:"Taro\u9002\u914d\u5668",description:"\u6b64\u63d2\u4ef6\u53ea\u652f\u6301 react 16.8+\u3001vue3 \u7248\u672c\u7684 taro \u5e94\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/resource/01-request-adapter/06-taro.md",sourceDirName:"resource/01-request-adapter",slug:"/resource/request-adapter/taro",permalink:"/zh-CN/resource/request-adapter/taro",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/resource/01-request-adapter/06-taro.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Taro\u9002\u914d\u5668"},sidebar:"resource",previous:{title:"Uniapp\u9002\u914d\u5668",permalink:"/zh-CN/resource/request-adapter/uniapp"},next:{title:"\u5b58\u50a8\u9002\u914d\u5668",permalink:"/zh-CN/resource/storage-adapter/"}},c={},u=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u521b\u5efa alova",id:"\u521b\u5efa-alova",level:3},{value:"\u8bf7\u6c42",id:"\u8bf7\u6c42",level:3},{value:"\u4e0a\u4f20",id:"\u4e0a\u4f20",level:3},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:3},{value:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9",id:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9",level:2},{value:"Typescript",id:"typescript",level:2},{value:"method \u914d\u7f6e",id:"method-\u914d\u7f6e",level:3},{value:"\u54cd\u5e94\u6570\u636e",id:"\u54cd\u5e94\u6570\u636e",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{title:"\u63d0\u793a",type:"info",children:(0,o.jsx)(n.p,{children:"\u6b64\u63d2\u4ef6\u53ea\u652f\u6301 react 16.8+\u3001vue3 \u7248\u672c\u7684 taro \u5e94\u7528\u3002"})}),"\n",(0,o.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,o.jsxs)(r.Z,{children:[(0,o.jsx)(l.Z,{value:"1",label:"npm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm install alova @alova/adapter-taro --save\n"})})}),(0,o.jsx)(l.Z,{value:"2",label:"yarn",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn add alova @alova/adapter-taro\n"})})}),(0,o.jsx)(l.Z,{value:"3",label:"pnpm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pnpm install alova @alova/adapter-taro\n"})})})]}),"\n",(0,o.jsxs)(n.admonition,{title:"React-Native \u5e94\u7528",type:"warning",children:[(0,o.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528 Taro \u5f00\u53d1 React-Native \u5e94\u7528\uff0c\u8bf7\u786e\u4fdd",(0,o.jsx)(n.code,{children:"metro >= 0.76.0"}),"\uff0c\u5e76\u5728",(0,o.jsx)(n.code,{children:"metro.config.js"}),"\u4e2d\u5f00\u542f",(0,o.jsx)(n.code,{children:"resolver.unstable_enablePackageExports"})]}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://facebook.github.io/metro/docs/configuration/#unstable_enablepackageexports-experimental",children:"\u5173\u4e8e metro \u7684 unstable_enablePackageExports \u53c2\u6570"})})]}),"\n",(0,o.jsxs)(n.admonition,{title:"\u4f9d\u8d56\u9884\u7f16\u8bd1\u95ee\u9898",type:"warning",children:[(0,o.jsxs)(n.p,{children:["\u5728 Taro v3.5 beta \u4e2d\u65b0\u589e\u4e86",(0,o.jsx)(n.a,{href:"https://docs.taro.zone/blog/2022/05/19/Taro-3.5-beta#2-%E4%BE%9D%E8%B5%96%E9%A2%84%E7%BC%96%E8%AF%91",children:"\u4f9d\u8d56\u9884\u7f16\u8bd1\u529f\u80fd"}),"\u5e76\u5728\u5f00\u53d1\u6a21\u5f0f\u4e0b\u9ed8\u8ba4\u5f00\u542f\uff0c\u5f53\u4f60\u6b63\u5728 Taro \u4e2d\u540c\u65f6\u4f7f\u7528",(0,o.jsx)(n.code,{children:"alova"}),"\u5e93\u548c",(0,o.jsx)(n.code,{children:"@alova/scene-react(vue)"}),"\u65f6\u53ef\u80fd\u5bfc\u81f4\u62a5 ",(0,o.jsx)(n.code,{children:" [alova]can not call useHooks until set the `statesHook` at alova instance."}),"\u7684\u9519\u8bef\uff0c\u8fd9\u662f\u7531\u4e8e prebundle \u529f\u80fd\u91cd\u590d\u6253\u5305\u4e86\u4e24\u4efd\u4e0d\u540c\u7684",(0,o.jsx)(n.code,{children:"alova"}),"\u5305\u5bfc\u81f4\uff0c\u6b64\u65f6\u5173\u95ed prebundle \u529f\u80fd\u5373\u53ef\u89e3\u51b3\u6b64\u95ee\u9898\u3002"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// config/dev.ts\nexport default {\n  // ...\n  compiler: {\n    type: 'webpack5',\n    prebundle: {\n      // \u5173\u95edprebundle\n      enable: false\n    }\n  }\n} satisfies UserConfigExport\n\n"})}),(0,o.jsxs)(n.p,{children:["\u611f\u8c22",(0,o.jsx)(n.a,{href:"https://github.com/alovajs/scene/issues/63",children:"LBinin \u7684 issue"}),"\u3002"]}),(0,o.jsxs)(n.p,{children:["\u6b64\u95ee\u9898\u5df2\u5411 Taro \u56e2\u961f\u63d0\u4ea4",(0,o.jsx)(n.a,{href:"https://github.com/NervJS/taro/issues/15728",children:"issue"}),"\uff0c\u671f\u5f85\u89e3\u51b3\u6b64\u95ee\u9898\u3002"]})]}),"\n",(0,o.jsx)(n.h2,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,o.jsx)(n.h3,{id:"\u521b\u5efa-alova",children:"\u521b\u5efa alova"}),"\n",(0,o.jsxs)(n.p,{children:["\u8c03\u7528 ",(0,o.jsx)(n.strong,{children:"AdapterTaro"})," \u5c06\u8fd4\u56de",(0,o.jsx)(n.em,{children:"\u8bf7\u6c42\u9002\u914d\u5668"}),"\u3001",(0,o.jsx)(n.em,{children:"\u5b58\u50a8\u9002\u914d\u5668"}),"\uff0c\u4ee5\u53ca",(0,o.jsx)(n.em,{children:"ReactHook"}),"\uff0c\u56e0\u6b64\u4f60\u4e0d\u518d\u9700\u8981\u8bbe\u7f6e\u8fd9\u4e09\u4e2a\u9879\uff0c\u4f7f\u7528\u65b9\u6cd5\u5b8c\u5168\u4e00\u81f4\u3002"]}),"\n",(0,o.jsxs)(r.Z,{groupId:"framework",children:[(0,o.jsx)(l.Z,{value:"2",label:"react",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"import { createAlova } from 'alova';\nimport AdapterTaro from '@alova/adapter-taro';\n\nconst alovaInst = createAlova({\n  baseURL: 'https://api.alovajs.org',\n  ...AdapterTaro()\n});\n"})})}),(0,o.jsx)(l.Z,{value:"1",label:"vue",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"import { createAlova } from 'alova';\nimport AdapterTaroVue from '@alova/adapter-taro/vue';\n\nconst alovaInst = createAlova({\n  baseURL: 'https://api.alovajs.org',\n  ...AdapterTaroVue()\n});\n"})})})]}),"\n",(0,o.jsx)(n.h3,{id:"\u8bf7\u6c42",children:"\u8bf7\u6c42"}),"\n",(0,o.jsxs)(n.p,{children:["\u8bf7\u6c42\u7684\u4f7f\u7528\u65b9\u6cd5\u4e0e web \u73af\u5883\u4e2d\u4f7f\u7528\u5b8c\u5168\u4e00\u81f4\u3002\u5df2\u7ecf\u5b8c\u5168\u517c\u5bb9",(0,o.jsx)(n.code,{children:"Taro.request"}),"\uff0c\u4f60\u53ef\u4ee5\u5728\u521b\u5efa method \u5b9e\u4f8b\u7684",(0,o.jsx)(n.em,{children:"config"}),"\u4e2d\u6307\u5b9a",(0,o.jsx)(n.code,{children:"Taro.request"}),"\u652f\u6301\u7684",(0,o.jsx)(n.a,{href:"https://taro-docs.jd.com/docs/apis/network/request/",children:"\u5168\u90e8\u914d\u7f6e\u9879"})]}),"\n",(0,o.jsxs)(r.Z,{groupId:"framework",children:[(0,o.jsx)(l.Z,{value:"2",label:"react",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"const list = () =>\n  alovaInst.Get('/list', {\n    // \u8bbe\u7f6e\u7684\u53c2\u6570\u5c06\u4f20\u9012\u7ed9Taro.request\n    enableHttp2: true\n  });\n\nconst App = () => {\n  const { loading, data } = useRequest(list);\n\n  return (\n    { loading ? <View>\u52a0\u8f7d\u4e2d...</View> : null }\n    <View>\u8bf7\u6c42\u6570\u636e\u4e3a\uff1a{ JSON.stringify(data) }</View>\n  )\n};\n"})})}),(0,o.jsx)(l.Z,{value:"1",label:"vue",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:"<tempate>\n  <view v-if=\"loading\">\u52a0\u8f7d\u4e2d...</view>\n  <view>\u8bf7\u6c42\u6570\u636e\u4e3a\uff1a{{ data }}</view>\n</tempate>\n\n<script setup>\n  const list = () =>\n    alovaInst.Get('/list', {\n      // \u8bbe\u7f6e\u7684\u53c2\u6570\u5c06\u4f20\u9012\u7ed9Taro.request\n      enableHttp2: true\n    });\n  const { loading, data } = useRequest(list);\n<\/script>\n"})})})]}),"\n",(0,o.jsx)(n.h3,{id:"\u4e0a\u4f20",children:"\u4e0a\u4f20"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728 method \u5b9e\u4f8b\u7684",(0,o.jsx)(n.em,{children:"config"}),"\u4e2d\u8bbe\u7f6e",(0,o.jsx)(n.code,{children:"requestType: 'upload'"}),"\u65f6\u8868\u793a\u4e0a\u4f20\u6587\u4ef6\uff0c\u8bf7\u6c42\u9002\u914d\u5668\u5c06\u4f1a\u8c03\u7528",(0,o.jsx)(n.code,{children:"Taro.uploadFile"}),"\uff0c\u4e0a\u4f20\u7684\u6587\u4ef6\u6570\u636e\u653e\u5728 method \u5b9e\u4f8b\u7684 data \u4e2d\uff0c\u4f60\u9700\u8981\u5728 data \u4e2d\u6307\u5b9a",(0,o.jsx)(n.code,{children:"name"}),"\u548c",(0,o.jsx)(n.code,{children:"filePath"}),"\uff0c\u8fd9 2 \u4e2a\u53c2\u6570\u5c06\u4f20\u5230",(0,o.jsx)(n.code,{children:"Taro.uploadFile"}),"\u4e2d\uff0c\u540c\u65f6\uff0c\u4f60\u8fd8\u53ef\u4ee5\u5728 data \u4e2d\u6307\u5b9a\u8fd9 2 \u4e2a\u53c2\u6570\u5916\u7684\u5176\u4ed6\u53c2\u6570\uff0c\u8bf7\u6c42\u9002\u914d\u5668\u4f1a\u5c06\u5b83\u4eec\u4f20\u5165\u5230",(0,o.jsx)(n.code,{children:"formData"}),"\u53c2\u6570\u4e2d\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u540c\u6837\u7684\uff0c\u5df2\u7ecf\u5b8c\u5168\u517c\u5bb9",(0,o.jsx)(n.code,{children:"Taro.uploadFile"}),"\uff0c\u4f60\u53ef\u4ee5\u5728\u521b\u5efa method \u5b9e\u4f8b\u7684",(0,o.jsx)(n.em,{children:"config"}),"\u4e2d\u6307\u5b9a",(0,o.jsx)(n.code,{children:"Taro.uploadFile"}),"\u652f\u6301\u7684",(0,o.jsx)(n.a,{href:"https://taro-docs.jd.com/docs/apis/network/upload/uploadFile",children:"\u5168\u90e8\u914d\u7f6e\u9879"}),"\uff0c\u5982\u679c\u8fd8\u6709\u989d\u5916\u7684\u53c2\u6570\u9700\u8981\u8bbe\u7f6e\uff0c\u8bf7\u5728 method \u5b9e\u4f8b\u7684",(0,o.jsx)(n.em,{children:"config"}),"\u4e2d\u6307\u5b9a\u3002"]}),"\n",(0,o.jsxs)(r.Z,{groupId:"framework",children:[(0,o.jsx)(l.Z,{value:"2",label:"react",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"const uploadFile = (name, filePath, formData) =>\n  alovaInst.Post(\n    '/uploadImg',\n    {\n      name,\n      filePath,\n\n      // \u989d\u5916\u6570\u636e\u5c06\u4f20\u5165Taro.uploadFile\u7684formData\u4e2d\n      ...formData\n    },\n    {\n      // \u8bbe\u7f6e\u8bf7\u6c42\u65b9\u5f0f\u4e3a\u4e0a\u4f20\uff0c\u9002\u914d\u5668\u5185\u5c06\u8c03\u7528Taro.uploadFile\n      requestType: 'upload'\n    }\n  );\n\nconst App = () => {\n  const { loading, data, uploading, send } = useRequest(uploadFile, {\n    immediate: false\n  });\n\n  const handleImageChoose = () => {\n    Taro.chooseImage({\n      success: chooseImageRes => {\n        const tempFilePaths = chooseImageRes.tempFilePaths;\n        send('fileName', tempFilePaths[0], {\n          extra1: 'a',\n          extra2: 'b'\n        });\n      }\n    });\n  };\n\n  return (\n    { loading ? <View>\u4e0a\u4f20\u4e2d...</View> : null }\n    <View>\u4e0a\u4f20\u8fdb\u5ea6\uff1a{ uploading.loaded }/{ uploading.total }</View>\n    <Button onClick={handleImageChoose}>\u4e0a\u4f20\u56fe\u7247</Button>\n    {/* ... */}\n  )\n}\n"})})}),(0,o.jsx)(l.Z,{value:"1",label:"vue",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:"<tempate>\n  <view v-if=\"loading\">\u4e0a\u4f20\u4e2d...</view>\n  <view>\u4e0a\u4f20\u8fdb\u5ea6\uff1a{{ uploading.loaded }}/{{ uploading.total }}</view>\n  <button @click=\"handleImageChoose\">\u4e0a\u4f20\u56fe\u7247</button>\n  \x3c!-- ... --\x3e\n</tempate>\n\n<script setup>\n  const uploadFile = (name, filePath, formData) =>\n    alovaInst.Post(\n      '/uploadImg',\n      {\n        name,\n        filePath,\n\n        // \u989d\u5916\u6570\u636e\u5c06\u4f20\u5165Taro.uploadFile\u7684formData\u4e2d\n        ...formData\n      },\n      {\n        // \u8bbe\u7f6e\u8bf7\u6c42\u65b9\u5f0f\u4e3a\u4e0a\u4f20\uff0c\u9002\u914d\u5668\u5185\u5c06\u8c03\u7528Taro.uploadFile\n        requestType: 'upload'\n      }\n    );\n\n  const { loading, data, uploading, send } = useRequest(uploadFile, {\n    immediate: false\n  });\n\n  const handleImageChoose = () => {\n    Taro.chooseImage({\n      success: chooseImageRes => {\n        const tempFilePaths = chooseImageRes.tempFilePaths;\n        send('fileName', tempFilePaths[0], {\n          extra1: 'a',\n          extra2: 'b'\n        });\n      }\n    });\n  };\n<\/script>\n"})})})]}),"\n",(0,o.jsx)(n.h3,{id:"\u4e0b\u8f7d",children:"\u4e0b\u8f7d"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728 method \u5b9e\u4f8b\u7684",(0,o.jsx)(n.em,{children:"config"}),"\u4e2d\u8bbe\u7f6e",(0,o.jsx)(n.code,{children:"requestType: 'download'"}),"\u65f6\u8868\u793a\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u6c42\u9002\u914d\u5668\u5c06\u4f1a\u8c03\u7528",(0,o.jsx)(n.code,{children:"Taro.downloadFile"}),"\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u540c\u6837\u7684\uff0c\u5df2\u7ecf\u5b8c\u5168\u517c\u5bb9",(0,o.jsx)(n.code,{children:"Taro.downloadFile"}),"\uff0c\u4f60\u53ef\u4ee5\u5728\u521b\u5efa method \u5b9e\u4f8b\u7684",(0,o.jsx)(n.em,{children:"config"}),"\u4e2d\u6307\u5b9a",(0,o.jsx)(n.code,{children:"Taro.downloadFile"}),"\u652f\u6301\u7684",(0,o.jsx)(n.a,{href:"https://taro-docs.jd.com/docs/apis/network/download/downloadFile",children:"\u5168\u90e8\u914d\u7f6e\u9879"}),"\uff0c\u5982\u679c\u8fd8\u6709\u989d\u5916\u7684\u53c2\u6570\u9700\u8981\u8bbe\u7f6e\uff0c\u8bf7\u5728 method \u5b9e\u4f8b\u7684",(0,o.jsx)(n.em,{children:"config"}),"\u4e2d\u6307\u5b9a\u3002"]}),"\n",(0,o.jsxs)(r.Z,{groupId:"framework",children:[(0,o.jsx)(l.Z,{value:"2",label:"react",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"const downloadFile = filePath =>\n  alovaInst.Get('/bigImage.jpg', {\n    // \u8bbe\u7f6e\u8bf7\u6c42\u65b9\u5f0f\u4e3a\u4e0b\u8f7d\uff0c\u9002\u914d\u5668\u5185\u5c06\u8c03\u7528Taro.downloadFile\n    requestType: 'download',\n    filePath\n  });\n\nconst App = () => {\n  const { loading, data, downloading, send } = useRequest(downloadFile, {\n    immediate: false\n  });\n  const handleImageDownload = () => {\n    send('file_save_path');\n  };\n\n  return (\n    { loading ? <View>\u4e0b\u8f7d\u4e2d...</View> : null }\n    <View>\u4e0b\u8f7d\u8fdb\u5ea6\uff1a{ downloading.loaded }/{ downloading.total }</View>\n    <Button onClick={handleImageDownload}>\u4e0b\u8f7d\u56fe\u7247</Button>\n    {/* ... */}\n  );\n}\n"})})}),(0,o.jsx)(l.Z,{value:"1",label:"vue",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:"<tempate>\n  <view v-if=\"loading\">\u4e0b\u8f7d\u4e2d...</view>\n  <view>\u4e0b\u8f7d\u8fdb\u5ea6\uff1a{{ downloading.loaded }}/{{ downloading.total }}</view>\n  <button @click=\"handleImageDownload\">\u4e0b\u8f7d\u56fe\u7247</button>\n  \x3c!-- ... --\x3e\n</tempate>\n\n<script setup>\n  const downloadFile = filePath =>\n    alovaInst.Get('/bigImage.jpg', {\n      // \u8bbe\u7f6e\u8bf7\u6c42\u65b9\u5f0f\u4e3a\u4e0b\u8f7d\uff0c\u9002\u914d\u5668\u5185\u5c06\u8c03\u7528Taro.downloadFile\n      requestType: 'download',\n      filePath\n    });\n\n  const { loading, data, downloading, send } = useRequest(downloadFile, {\n    immediate: false\n  });\n\n  const handleImageDownload = () => {\n    send('file_save_path');\n  };\n<\/script>\n"})})})]}),"\n",(0,o.jsx)(n.h2,{id:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9",children:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u4f7f\u7528 Taro \u5f00\u53d1\u5e94\u7528\u65f6\uff0c\u6211\u4eec\u4ecd\u7136\u53ef\u80fd\u9700\u8981\u7528\u5230\u6a21\u62df\u8bf7\u6c42\uff0c\u53ea\u662f\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,o.jsx)(n.a,{href:"/resource/request-adapter/alova-mock",children:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668(@alova/mock)"}),"\u7684\u54cd\u5e94\u6570\u636e\u662f\u4e00\u4e2a",(0,o.jsx)(n.code,{children:"Response"}),"\u5b9e\u4f8b\uff0c\u5373\u9ed8\u8ba4\u517c\u5bb9",(0,o.jsx)(n.code,{children:"alova/fetch"}),"\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u5f53\u5728 Taro \u73af\u5883\u4e0b\u4f7f\u7528\u65f6\uff0c\u6211\u4eec\u9700\u8981\u8ba9\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u7684\u54cd\u5e94\u6570\u636e\u662f\u517c\u5bb9 Taro \u9002\u914d\u5668\u7684\uff0c\u56e0\u6b64\u4f60\u9700\u8981\u4f7f\u7528**@alova/adapter-taro**\u5305\u4e2d\u5bfc\u51fa\u7684",(0,o.jsx)(n.code,{children:"taroMockResponse"}),"\u4f5c\u4e3a\u54cd\u5e94\u9002\u914d\u5668\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"import { defineMock, createAlovaMockAdapter } from '@alova/mock';\nimport AdapterTaro, { taroRequestAdapter, taroMockResponse } from '@alova/adapter-taro';\n\nconst mocks = defineMock({\n  // ...\n});\n\n// \u6a21\u62df\u6570\u636e\u8bf7\u6c42\u9002\u914d\u5668\nexport default createAlovaMockAdapter([mocks], {\n  // \u6307\u5b9ataro\u8bf7\u6c42\u9002\u914d\u5668\u540e\uff0c\u672a\u5339\u914d\u6a21\u62df\u63a5\u53e3\u7684\u8bf7\u6c42\u5c06\u4f7f\u7528\u8fd9\u4e2a\u9002\u914d\u5668\u53d1\u9001\u8bf7\u6c42\n  httpAdapter: taroRequestAdapter,\n\n  //  \u6a21\u62df\u54cd\u5e94\u9002\u914d\u5668\uff0c\u6307\u5b9a\u540e\u54cd\u5e94\u6570\u636e\u5c06\u8f6c\u6362\u4e3ataro\u517c\u5bb9\u7684\u6570\u636e\u683c\u5f0f\n  onMockResponse: taroMockResponse\n});\n\nexport const alovaInst = createAlova({\n  baseURL: 'https://api.alovajs.org',\n  timeout: 5000,\n  ...AdapterTaro({\n    // \u901a\u8fc7\u73af\u5883\u53d8\u91cf\u63a7\u5236\u662f\u5426\u4f7f\u7528\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\n    mockRequest: process.env.NODE_ENV === 'development' ? mockAdapter : undefined\n  })\n  // ...\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"typescript",children:"Typescript"}),"\n",(0,o.jsx)(n.p,{children:"taro \u8bf7\u6c42\u9002\u914d\u5668 \u63d0\u4f9b\u4e86\u5b8c\u6574\u7684\u7c7b\u578b\u9002\u914d\uff0cmethod \u914d\u7f6e\u3001\u54cd\u5e94\u6570\u636e\u7684\u7c7b\u578b\u5c06\u4e0e taro \u7684\u7c7b\u578b\u5b8c\u5168\u5339\u914d\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"method-\u914d\u7f6e",children:"method \u914d\u7f6e"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u521b\u5efa method \u5b9e\u4f8b\u65f6\uff0c\u9664\u4e86 method \u4e2d\u901a\u7528\u7684\u914d\u7f6e\u9879\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528",(0,o.jsx)(n.code,{children:"Taro.request"}),"\u3001",(0,o.jsx)(n.code,{children:"Taro.uploadFile"}),"\u548c",(0,o.jsx)(n.code,{children:"Taro.downloadFile"}),"\u4e2d\u7684\u914d\u7f6e\u9879\uff0c\u6211\u4eec\u5df2\u7ecf\u5728\u7c7b\u578b\u4e2d\u53bb\u9664\u4e86\u548c method \u5b9e\u4f8b\u901a\u7528\u914d\u7f6e\u51b2\u7a81\u7684\u9879\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"/**\n * Taro.request\u8bf7\u6c42\u989d\u5916\u53c2\u6570\n */\nexport type TaroRequestConfig = Omit<\n  Taro.request.Option,\n  'url' | 'data' | 'header' | 'method' | 'timeout' | 'success' | 'fail' | 'complete'\n>;\n\n/**\n * Taro.uploadFile\u989d\u5916\u53c2\u6570\n */\nexport type TaroUploadConfig = Omit<\n  Taro.uploadFile.Option,\n  | 'url'\n  | 'filePath'\n  | 'name'\n  | 'header'\n  | 'formData'\n  | 'timeout'\n  | 'success'\n  | 'fail'\n  | 'complete'\n>;\n\n/**\n * Taro.downloadFile\u989d\u5916\u53c2\u6570\n */\nexport type TaroDownloadConfig = Omit<\n  Taro.downloadFile.Option,\n  'url' | 'header' | 'timeout' | 'success' | 'fail' | 'complete'\n>;\n\n/**\n * \u5408\u5e76\u7684\u8bf7\u6c42\u914d\u7f6e\u53c2\u6570\n */\nexport type TaroConfig = {\n  /**\n   * \u8bf7\u6c42\u7c7b\u578b\uff0cupload\u8868\u793a\u4e0a\u4f20\uff0cdownload\u8868\u793a\u4e0b\u8f7d\uff0c\u4e0d\u586b\u5199\u8868\u793a\u6b63\u5e38\u8bf7\u6c42\n   */\n  requestType?: 'upload' | 'download';\n} & TaroRequestConfig &\n  TaroUploadConfig &\n  TaroDownloadConfig;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"\u54cd\u5e94\u6570\u636e",children:"\u54cd\u5e94\u6570\u636e"}),"\n",(0,o.jsxs)(n.p,{children:["\u56e0\u4e3a taro \u8bf7\u6c42\u9002\u914d\u5668\u540c\u65f6\u517c\u5bb9\u4e86",(0,o.jsx)(n.code,{children:"Taro.request"}),"\u3001",(0,o.jsx)(n.code,{children:"Taro.uploadFile"}),"\u548c",(0,o.jsx)(n.code,{children:"Taro.downloadFile"}),"\uff0c\u4f46\u5b83\u4eec\u7684\u54cd\u5e94\u503c\u7c7b\u578b\u7a0d\u6709\u4e0d\u540c\uff0c\u6240\u4ee5\u54cd\u5e94\u6570\u636e\u7c7b\u578b\u662f\u8fd9\u6837\u7684\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"type TaroResponse =\n  // Taro.request\u7684\u54cd\u5e94\u7c7b\u578b\n  | Taro.request.SuccessCallbackResult<any>\n\n  // Taro.uploadFile\u7684\u54cd\u5e94\u7c7b\u578b\n  | Taro.uploadFile.SuccessCallbackResult\n\n  // Taro.downloadFile\u7684\u54cd\u5e94\u7c7b\u578b\n  | Taro.downloadFile.FileSuccessCallbackResult;\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u5728\u5b9e\u9645\u4f7f\u7528\u4e2d\uff0c\u6211\u4eec\u901a\u5e38\u9700\u8981\u5728\u5168\u5c40\u5904\u7406\u54cd\u5e94\u6570\u636e\uff0c\u5efa\u8bae\u5206\u5f00\u573a\u666f\u5224\u65ad\u8fd4\u56de\u6570\u636e\uff0c\u4e00\u4e2a\u7b80\u5355\u7684\u5b9e\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"const alovaInst = createAlova(\n  baseURL: 'https://api.alovajs.org',\n  ...AdapterTaro(),\n  responded(response) {\n    const { statusCode, data } = response as Taro.request.SuccessCallbackResult<any>;\n    if (statusCode >= 400) {\n      throw new Error('\u8bf7\u6c42\u9519\u8bef');\n    }\n    return data || null;\n  }\n});\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},85162:(e,n,a)=>{a.d(n,{Z:()=>l});a(67294);var o=a(90512);const t={tabItem:"tabItem_Ymn6"};var r=a(85893);function l(e){let{children:n,hidden:a,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.Z)(t.tabItem,l),hidden:a,children:n})}},74866:(e,n,a)=>{a.d(n,{Z:()=>T});var o=a(67294),t=a(90512),r=a(12466),l=a(16550),s=a(20469),i=a(91980),d=a(67392),c=a(20812);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:o,default:t}}=e;return{value:n,label:a,attributes:o,default:t}}))}(a);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const t=(0,l.k6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,i._X)(r),(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})}),[r,t])]}function x(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,r=p(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=a.find((e=>e.default))??a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:r}))),[d,u]=m({queryString:a,groupId:t}),[x,v]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,r]=(0,c.Nk)(a);return[t,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:t}),j=(()=>{const e=d??x;return h({value:e,tabValues:r})?e:null})();(0,s.Z)((()=>{j&&i(j)}),[j]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),v(e)}),[u,v,r]),tabValues:r}}var v=a(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(85893);function f(e){let{className:n,block:a,selectedValue:o,selectValue:l,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),c=e=>{const n=e.currentTarget,a=i.indexOf(n),t=s[a].value;t!==o&&(d(n),l(t))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;n=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;n=i[a]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":a},n),children:s.map((e=>{let{value:n,label:a,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>i.push(e),onKeyDown:u,onClick:c,...r,className:(0,t.Z)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":o===n}),children:a??n},n)}))})}function b(e){let{lazy:n,children:a,selectedValue:t}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===t));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function w(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,t.Z)("tabs-container",j.tabList),children:[(0,g.jsx)(f,{...n,...e}),(0,g.jsx)(b,{...n,...e})]})}function T(e){const n=(0,v.Z)();return(0,g.jsx)(w,{...e,children:u(e.children)},String(n))}},11151:(e,n,a)=>{a.d(n,{Z:()=>s,a:()=>l});var o=a(67294);const t={},r=o.createContext(t);function l(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);