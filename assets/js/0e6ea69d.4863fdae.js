"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[4160],{11797:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var t=n(85893),o=n(11151),r=n(74866),s=n(85162);const l={title:"Taro Adapter"},i=void 0,d={id:"resource/request-adapter/taro",title:"Taro Adapter",description:"This plugin only supports the taro application of react 16.8+, vue3 version.",source:"@site/docs/resource/01-request-adapter/06-taro.md",sourceDirName:"resource/01-request-adapter",slug:"/resource/request-adapter/taro",permalink:"/resource/request-adapter/taro",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/resource/01-request-adapter/06-taro.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Taro Adapter"},sidebar:"resource",previous:{title:"Uniapp Adapter",permalink:"/resource/request-adapter/uniapp"},next:{title:"Storage Adapter",permalink:"/resource/storage-adapter/"}},c={},u=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"create alova",id:"create-alova",level:3},{value:"Request",id:"request",level:3},{value:"Upload",id:"upload",level:3},{value:"download",id:"download",level:3},{value:"Mock request adapter compatible",id:"mock-request-adapter-compatible",level:2},{value:"Typescript",id:"typescript",level:2},{value:"method configuration",id:"method-configuration",level:3},{value:"Response data",id:"response-data",level:3}];function p(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.admonition,{title:"Tips",type:"info",children:(0,t.jsx)(a.p,{children:"This plugin only supports the taro application of react 16.8+, vue3 version."})}),"\n",(0,t.jsx)(a.h2,{id:"install",children:"Install"}),"\n",(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(s.Z,{value:"1",label:"npm",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"npm install @alova/adapter-taro --save\n"})})}),(0,t.jsx)(s.Z,{value:"2",label:"yarn",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"yarn add @alova/adapter-taro\n"})})})]}),"\n",(0,t.jsxs)(a.admonition,{title:"React-Native Application",type:"warning",children:[(0,t.jsxs)(a.p,{children:["If you are develop a React-Native app with Taro, please ensure ",(0,t.jsx)(a.code,{children:"metro >= 0.76.0"})," and enable ",(0,t.jsx)(a.code,{children:"resolver.unstable_enablePackageExports"})," in the ",(0,t.jsx)(a.code,{children:"metro.config.js"}),"."]}),(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"https://facebook.github.io/metro/docs/configuration/#unstable_enablepackageexports-experimental",children:"about unstable_enablePackageExports of metro"})})]}),"\n",(0,t.jsxs)(a.admonition,{title:"Dependency precompilation issues",type:"warning",children:[(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"https://docs.taro.zone/blog/2022/05/19/Taro-3.5-beta#2-%E4%BE%9D%E8%B5%96%E9%A2%84%E7%BC%96%E8%AF%91",children:"Dependency precompilation function"})," has been added in Taro v3.5 beta, and is enabled by default in development mode when you are using the ",(0,t.jsx)(a.code,{children:"alova"})," library and ",(0,t.jsx)(a.code,{children:"@alova/scene-react(vue)"})," may cause the error ",(0,t.jsx)(a.code,{children:"[alova]can not call useHooks until set the `statesHook` at alova instance."}),". This is caused by the prebundle feature repeatedly packaging two different ",(0,t.jsx)(a.code,{children:"alova"})," packages. , turning off the prebundle function at this time can solve this problem."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-js",children:"// config/dev.ts\nexport default {\n   // ...\n   compiler: {\n     type: 'webpack5',\n     prebundle: {\n       // Close prebundle\n       enable: false\n     }\n   }\n} satisfies UserConfigExport\n\n"})}),(0,t.jsxs)(a.p,{children:["Thanks to ",(0,t.jsx)(a.a,{href:"https://github.com/alovajs/scene/issues/63",children:"LBinin\u2019s issue"}),"."]}),(0,t.jsxs)(a.p,{children:["This problem has been committed to the Taro team ",(0,t.jsx)(a.a,{href:"https://github.com/NervJS/taro/issues/15728",children:"issue"})," and we look forward to solving this issue."]})]}),"\n",(0,t.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(a.h3,{id:"create-alova",children:"create alova"}),"\n",(0,t.jsxs)(a.p,{children:["Calling ",(0,t.jsx)(a.strong,{children:"AdapterTaro"})," will return ",(0,t.jsx)(a.em,{children:"Request Adapter"}),", ",(0,t.jsx)(a.em,{children:"Storage Adapter"}),", and ",(0,t.jsx)(a.em,{children:"ReactHook"}),", so you no longer need to set these three items, and the usage is exactly the same."]}),"\n",(0,t.jsxs)(r.Z,{groupId:"framework",children:[(0,t.jsx)(s.Z,{value:"2",label:"react",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:"import { createAlova } from 'alova';\nimport AdapterTaro from '@alova/adapter-taro';\n\nconst alovaInst = createAlova({\n  baseURL: 'https://api.alovajs.org',\n  ...AdapterTaro()\n});\n"})})}),(0,t.jsx)(s.Z,{value:"1",label:"vue",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:"import { createAlova } from 'alova';\nimport AdapterTaroVue from '@alova/adapter-taro/vue';\n\nconst alovaInst = createAlova({\n  baseURL: 'https://api.alovajs.org',\n  ...AdapterTaroVue()\n});\n"})})})]}),"\n",(0,t.jsx)(a.h3,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(a.p,{children:["The usage method of the request is exactly the same as that used in the web environment. Already fully compatible with ",(0,t.jsx)(a.code,{children:"Taro.request"}),", you can specify ",(0,t.jsx)(a.a,{href:"https://taro-docs.jd.com/docs/apis/network/request/",children:"all configuration items"})," supported by ",(0,t.jsx)(a.code,{children:"Taro.request"})," in the ",(0,t.jsx)(a.em,{children:"config"})," of method instance creation"]}),"\n",(0,t.jsxs)(r.Z,{groupId:"framework",children:[(0,t.jsx)(s.Z,{value:"2",label:"react",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-jsx",children:"const list = () =>\n   alovaInst.Get('/list', {\n     // The set parameters will be passed to Taro.request\n     enableHttp2: true\n   });\n\nconst App = () => {\n   const { loading, data } = useRequest(list);\n\n   return (\n     { loading ? <View>Loading...</View> : null }\n     <View>The requested data is: { JSON.stringify(data) }</View>\n   )\n};\n"})})}),(0,t.jsx)(s.Z,{value:"1",label:"vue",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-html",children:"<tempate>\n   <view v-if=\"loading\">Loading...</view>\n   <view>The requested data is: {{ data }}</view>\n</template>\n\n<script setup>\n   const list = () =>\n     alovaInst.Get('/list', {\n       // The set parameters will be passed to Taro.request\n       enableHttp2: true\n     });\n   const { loading, data } = useRequest(list);\n<\/script>\n"})})})]}),"\n",(0,t.jsx)(a.h3,{id:"upload",children:"Upload"}),"\n",(0,t.jsxs)(a.p,{children:["When ",(0,t.jsx)(a.code,{children:"requestType: 'upload'"})," is set in the ",(0,t.jsx)(a.em,{children:"config"})," of the method instance, it means to upload the file, the request adapter will call ",(0,t.jsx)(a.code,{children:"Taro.uploadFile"}),", and the uploaded file data is placed in the data of the method instance, you need to specify in the data ",(0,t.jsx)(a.code,{children:"name"})," and ",(0,t.jsx)(a.code,{children:"filePath"}),", these two parameters will be passed to ",(0,t.jsx)(a.code,{children:"Taro.uploadFile"}),", at the same time, you can also specify other parameters in data, and the request adapter will pass them to ",(0,t.jsx)(a.code,{children:"formData "}),"in parameters."]}),"\n",(0,t.jsxs)(a.p,{children:["Similarly, it is fully compatible with ",(0,t.jsx)(a.code,{children:"Taro.uploadFile"}),", you can specify ",(0,t.jsx)(a.a,{href:"https://taro-docs.jd.com/docs/apis/network/upload/uploadFile",children:"all configuration items"})," supported by ",(0,t.jsx)(a.code,{children:"Taro.uploadFile"}),", if there are additional parameters to be set, please specify them in ",(0,t.jsx)(a.em,{children:"config"})," of the method instance."]}),"\n",(0,t.jsxs)(r.Z,{groupId:"framework",children:[(0,t.jsx)(s.Z,{value:"2",label:"react",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-jsx",children:"const uploadFile = (name, filePath, formData) =>\n   alovaInst.Post(\n     '/uploadImg',\n     {\n       name,\n       filePath,\n\n       // Additional data will be passed into formData of uni.uploadFile\n       ...formData\n     },\n     {\n       // Set the request method to upload, and the adapter will call uni.uploadFile\n       requestType: 'upload',\n\n       // Start upload progress\n       enableUpload: true\n     }\n   );\n\nconst App = () => {\n   const { loading, data, uploading, send } = useRequest(uploadFile, {\n     immediate: false\n   });\n\n   const handleImageChoose = () => {\n     Taro.chooseImage({\n       success: chooseImageRes => {\n         const tempFilePaths = chooseImageRes.tempFilePaths;\n         send('fileName', tempFilePaths[0], {\n           extra1: 'a',\n           extra2: 'b'\n         });\n       }\n     });\n   };\n\n   return (\n     { loading ? <View>Uploading...</View> : null }\n     <View>Upload progress: { uploading.loaded }/{ uploading.total }</View>\n     <Button onClick={handleImageChoose}>Upload Image</Button>\n     {/* ... */}\n   )\n}\n"})})}),(0,t.jsx)(s.Z,{value:"1",label:"vue",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-html",children:"<tempate>\n   <view v-if=\"loading\">Uploading...</view>\n   <view>Upload progress: {{ uploading.loaded }}/{{ uploading.total }}</view>\n   <button @click=\"handleImageChoose\">Upload image</button>\n   \x3c!-- ... --\x3e\n</template>\n\n<script setup>\n   const uploadFile = (name, filePath, formData) =>\n     alovaInst.Post(\n       '/uploadImg',\n       {\n         name,\n         filePath,\n\n         // Additional data will be passed into formData of uni.uploadFile\n         ...formData\n       },\n       {\n         // Set the request method to upload, and the adapter will call uni.uploadFile\n         requestType: 'upload',\n\n         // Start upload progress\n         enableUpload: true\n       }\n     );\n\n   const { loading, data, uploading, send } = useRequest(uploadFile, {\n     immediate: false\n   });\n\n   const handleImageChoose = () => {\n     Taro.chooseImage({\n       success: chooseImageRes => {\n         const tempFilePaths = chooseImageRes.tempFilePaths;\n         send('fileName', tempFilePaths[0], {\n           extra1: 'a',\n           extra2: 'b'\n         });\n       }\n     });\n   };\n<\/script>\n"})})})]}),"\n",(0,t.jsx)(a.h3,{id:"download",children:"download"}),"\n",(0,t.jsxs)(a.p,{children:["When ",(0,t.jsx)(a.code,{children:"requestType: 'download'"})," is set in the ",(0,t.jsx)(a.em,{children:"config"})," of the method instance, it means to download the file, and the request adapter will call ",(0,t.jsx)(a.code,{children:"Taro.downloadFile"}),"."]}),"\n",(0,t.jsxs)(a.p,{children:["Similarly, it is fully compatible with ",(0,t.jsx)(a.code,{children:"Taro.downloadFile"}),", you can specify ",(0,t.jsx)(a.a,{href:"https://taro-docs.jd.com/docs/apis/network/download/downloadFile",children:"all configuration items"})," supported by ",(0,t.jsx)(a.code,{children:"Taro.downloadFile"}),", if there are additional parameters to be set, please specify them in ",(0,t.jsx)(a.em,{children:"config"})," of the method instance."]}),"\n",(0,t.jsxs)(r.Z,{groupId:"framework",children:[(0,t.jsx)(s.Z,{value:"2",label:"react",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-jsx",children:"const downloadFile = filePath =>\n   alovaInst.Get('/bigImage.jpg', {\n     // Set the request method to download, and the adapter will call uni.downloadFile\n     requestType: 'download',\n     filePath,\n\n     // Start download progress\n     enableDownload: true\n   });\n\nconst App = () => {\n   const { loading, data, downloading, send } = useRequest(downloadFile, {\n     immediate: false\n   });\n   const handleImageDownload = () => {\n     send('file_save_path');\n   };\n\n   return (\n     { loading ? <View>Downloading...</View> : null }\n     <View>Download progress: { downloading.loaded }/{ downloading.total }</View>\n     <Button onClick={handleImageDownload}>Download image</Button>\n     {/* ... */}\n   );\n}\n"})})}),(0,t.jsx)(s.Z,{value:"1",label:"vue",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-html",children:"<tempate>\n   <view v-if=\"loading\">Downloading...</view>\n   <view>Download progress: {{ downloading.loaded }}/{{ downloading.total }}</view>\n   <button @click=\"handleImageDownload\">Download image</button>\n   \x3c!-- ... --\x3e\n</template>\n\n<script setup>\n   const downloadFile = filePath =>\n     alovaInst.Get('/bigImage.jpg', {\n       // Set the request method to download, and the adapter will call uni.downloadFile\n       requestType: 'download',\n       filePath,\n\n       // Start download progress\n       enableDownload: true\n     });\n\n   const { loading, data, downloading, send } = useRequest(downloadFile, {\n     immediate: false\n   });\n\n   const handleImageDownload = () => {\n     send('file_save_path');\n   };\n<\/script>\n"})})})]}),"\n",(0,t.jsx)(a.h2,{id:"mock-request-adapter-compatible",children:"Mock request adapter compatible"}),"\n",(0,t.jsxs)(a.p,{children:["When using Taro to develop applications, we may still need to use mock requests, but by default, the response data of ",(0,t.jsx)(a.a,{href:"/resource/request-adapter/alova-mock",children:"Mock Request Adapter (@alova/mock)"})," is a ",(0,t.jsx)(a.code,{children:"Response"})," instance, That is, it is compatible with the ",(0,t.jsx)(a.code,{children:"alova/fetch"})," request adapter by default. When used in the Taro environment, we need to make the response data of the simulated request adapter compatible with the Taro adapter, so you need to use the ",(0,t.jsx)(a.strong,{children:"@alova/adapter-taro"})," package exported ",(0,t.jsx)(a.code,{children:"taroMockResponse"})," as response adapter."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:"import { defineMock, createAlovaMockAdapter } from '@alova/mock';\nimport AdapterTaro, { taroRequestAdapter, taroMockResponse } from '@alova/adapter-taro';\n\nconst mocks = defineMock({\n  //...\n});\n\n// mock data request adapter\nexport default createAlovaMockAdapter([mocks], {\n  // After specifying the taro request adapter, requests that do not match the simulated interface will use this adapter to send requests\n  httpAdapter: taroRequestAdapter,\n\n  // Simulate the response adapter, after specifying, the response data will be converted to a taro-compatible data format\n  onMockResponse: taroMockResponse\n});\n\nexport const alovaInst = createAlova({\n  baseURL: 'https://api.alovajs.org',\n  timeout: 5000,\n  ...AdapterTaro({\n    // Control whether to use the simulated request adapter through environment variables\n    mockRequest: process.env.NODE_ENV === 'development' ? mockAdapter : undefined\n  })\n  //...\n});\n"})}),"\n",(0,t.jsx)(a.h2,{id:"typescript",children:"Typescript"}),"\n",(0,t.jsx)(a.p,{children:"The taro request adapter provides complete type adaptation, and the type of method configuration and response data will exactly match the type of taro."}),"\n",(0,t.jsx)(a.h3,{id:"method-configuration",children:"method configuration"}),"\n",(0,t.jsxs)(a.p,{children:["When creating a method instance, in addition to the general configuration items in the method, you can also use the configuration items in ",(0,t.jsx)(a.code,{children:"Taro.request"}),", ",(0,t.jsx)(a.code,{children:"Taro.uploadFile"})," and ",(0,t.jsx)(a.code,{children:"Taro.downloadFile"}),", we have removed the type and method Items that conflict with the common configuration of the instance."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-typescript",children:"/**\n * Taro.request requests additional parameters\n */\nexport type TaroRequestConfig = Omit<\n  Taro.request.Option,\n  'url' | 'data' | 'header' | 'method' | 'timeout' | 'success' | 'fail' | 'complete'\n>;\n\n/**\n * Taro.uploadFile additional parameter\n */\nexport type TaroUploadConfig = Omit<\n  Taro.uploadFile.Option,\n  | 'url'\n  | 'filePath'\n  | 'name'\n  | 'header'\n  | 'formData'\n  | 'timeout'\n  | 'success'\n  | 'fail'\n  | 'complete'\n>;\n\n/**\n * Taro.downloadFile additional parameters\n */\nexport type TaroDownloadConfig = Omit<\n  Taro.downloadFile.Option,\n  'url' | 'header' | 'timeout' | 'success' | 'fail' | 'complete'\n>;\n\n/**\n * Merged request configuration parameters\n */\nexport type TaroConfig = {\n  /**\n   * Request type, upload means upload, download means download, not filling means normal request\n   */\n  requestType?: 'upload' | 'download';\n} & TaroRequestConfig &\n  TaroUploadConfig &\n  TaroDownloadConfig;\n"})}),"\n",(0,t.jsx)(a.h3,{id:"response-data",children:"Response data"}),"\n",(0,t.jsxs)(a.p,{children:["Because the taro request adapter is compatible with ",(0,t.jsx)(a.code,{children:"Taro.request"}),", ",(0,t.jsx)(a.code,{children:"Taro.uploadFile"})," and ",(0,t.jsx)(a.code,{children:"Taro.downloadFile"}),", but their response value types are slightly different, so the response data type is as follows:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-typescript",children:"type TaroResponse =\n  // The response type of Taro.request\n  | Taro.request.SuccessCallbackResult<any>\n\n  // The response type of Taro.uploadFile\n  | Taro.uploadFile.SuccessCallbackResult\n\n  // The response type of Taro.downloadFile\n  | Taro.downloadFile.FileSuccessCallbackResult;\n"})}),"\n",(0,t.jsx)(a.p,{children:"In actual use, we usually need to process the response data globally. It is recommended to judge the returned data separately. A simple example is as follows:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-typescript",children:"const alovaInst = createAlova({\n  baseURL: 'https://api.alovajs.org',\n  ...AdapterTaro(),\n  responded(response) {\n    const { statusCode, data } = response as Taro.request.SuccessCallbackResult<any>;\n    if (statusCode >= 400) {\n      throw new Error('request error');\n    }\n    return data || null;\n  }\n});\n"})})]})}function h(e={}){const{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},85162:(e,a,n)=>{n.d(a,{Z:()=>s});n(67294);var t=n(90512);const o={tabItem:"tabItem_Ymn6"};var r=n(85893);function s(e){let{children:a,hidden:n,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)(o.tabItem,s),hidden:n,children:a})}},74866:(e,a,n)=>{n.d(a,{Z:()=>y});var t=n(67294),o=n(90512),r=n(12466),s=n(16550),l=n(20469),i=n(91980),d=n(67392),c=n(20812);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return u(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:o}}=e;return{value:a,label:n,attributes:t,default:o}}))}(n);return function(e){const a=(0,d.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function h(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:n}=e;const o=(0,s.k6)(),r=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,i._X)(r),(0,t.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(o.location.search);a.set(r,e),o.replace({...o.location,search:a.toString()})}),[r,o])]}function f(e){const{defaultValue:a,queryString:n=!1,groupId:o}=e,r=p(e),[s,i]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:r}))),[d,u]=m({queryString:n,groupId:o}),[f,g]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[o,r]=(0,c.Nk)(n);return[o,(0,t.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),v=(()=>{const e=d??f;return h({value:e,tabValues:r})?e:null})();(0,l.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var g=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(85893);function b(e){let{className:a,block:n,selectedValue:t,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),c=e=>{const a=e.currentTarget,n=i.indexOf(a),o=l[n].value;o!==t&&(d(a),s(o))},u=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;a=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;a=i[n]??i[i.length-1];break}}a?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},a),children:l.map((e=>{let{value:a,label:n,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>i.push(e),onKeyDown:u,onClick:c,...r,className:(0,o.Z)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":t===a}),children:n??a},a)}))})}function j(e){let{lazy:a,children:n,selectedValue:o}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==o})))})}function w(e){const a=f(e);return(0,x.jsxs)("div",{className:(0,o.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(b,{...a,...e}),(0,x.jsx)(j,{...a,...e})]})}function y(e){const a=(0,g.Z)();return(0,x.jsx)(w,{...e,children:u(e.children)},String(a))}},11151:(e,a,n)=>{n.d(a,{Z:()=>l,a:()=>s});var t=n(67294);const o={},r=t.createContext(o);function s(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);