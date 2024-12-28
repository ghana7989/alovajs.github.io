"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[1530],{28568:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=t(85893),s=t(11151),r=t(74866),o=t(85162);const i={title:"axios adapter"},l=void 0,c={id:"tutorial/request-adapter/alova-adapter-axios",title:"axios adapter",description:"Install",source:"@site/versioned_docs/version-v2/tutorial/08-request-adapter/03-alova-adapter-axios.md",sourceDirName:"tutorial/08-request-adapter",slug:"/tutorial/request-adapter/alova-adapter-axios",permalink:"/v2/tutorial/request-adapter/alova-adapter-axios",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-v2/tutorial/08-request-adapter/03-alova-adapter-axios.md",tags:[],version:"v2",sidebarPosition:3,frontMatter:{title:"axios adapter"},sidebar:"tutorial",previous:{title:"XMLHttpRequest Adapter",permalink:"/v2/tutorial/request-adapter/alova-adapter-xhr"},next:{title:"Taro Adapter",permalink:"/v2/tutorial/request-adapter/alova-adapter-taro"}},d={},u=[{value:"Install",id:"install",level:2},{value:"Instructions",id:"instructions",level:2},{value:"create alova",id:"create-alova",level:3},{value:"usage",id:"usage",level:2},{value:"request",id:"request",level:3},{value:"Upload",id:"upload",level:3},{value:"download",id:"download",level:3},{value:"Use custom axios instance",id:"use-custom-axios-instance",level:2},{value:"Mock request adapter compatible",id:"mock-request-adapter-compatible",level:2},{value:"method configuration",id:"method-configuration",level:3},{value:"Response data",id:"response-data",level:3},{value:"Error",id:"error",level:3}];function p(e){const a={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"install",children:"Install"}),"\n",(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(o.Z,{value:"1",label:"npm",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"npm install @alova/adapter-axios axios --save\n"})})}),(0,n.jsx)(o.Z,{value:"2",label:"yarn",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"yarn add @alova/adapter-axios axios\n"})})})]}),"\n",(0,n.jsx)(a.h2,{id:"instructions",children:"Instructions"}),"\n",(0,n.jsx)(a.h3,{id:"create-alova",children:"create alova"}),"\n",(0,n.jsxs)(a.p,{children:["Use ",(0,n.jsx)(a.strong,{children:"axiosRequestAdapter"})," as request adapter for alova."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"import { createAlova } from 'alova';\nimport { axiosRequestAdapter } from '@alova/adapter-axios';\n\nconst alovaInst = createAlova({\n  //...\n  requestAdapter: axiosRequestAdapter()\n  //...\n});\n"})}),"\n",(0,n.jsx)(a.p,{children:"The adapter will use the default axios instance to make requests internally. If you set some global parameters for axios, you may need to pay attention to the following two points:"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["Priority is given to using the ",(0,n.jsx)(a.code,{children:"baseURL"})," and ",(0,n.jsx)(a.code,{children:"timeout"})," parameters in the axios instance, so if you set these parameters on the axios instance, you do not need to set them in ",(0,n.jsx)(a.code,{children:"createAlova"}),";"]}),"\n",(0,n.jsxs)(a.li,{children:["The ",(0,n.jsx)(a.code,{children:"beforeRequest"})," hook of the alova instance will be triggered earlier than the ",(0,n.jsx)(a.code,{children:"interceptor.request"})," of the axios instance, and the ",(0,n.jsx)(a.code,{children:"responded"})," hook of the alova will be triggered later than the ",(0,n.jsx)(a.code,{children:"interceptor.response"})," of the axios instance;"]}),"\n"]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:["You can also ",(0,n.jsx)(a.a,{href:"#use-custom-axios-instance",children:"use custom axios instance"})]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"usage",children:"usage"}),"\n",(0,n.jsx)(a.h3,{id:"request",children:"request"}),"\n",(0,n.jsxs)(a.p,{children:["The usage of request is exactly the same as that used in the web environment. Already fully compatible with ",(0,n.jsx)(a.strong,{children:"axios"}),", you can specify ",(0,n.jsx)(a.a,{href:"https://axios-http.com/docs/req_config",children:"all configuration items"})," supported by ",(0,n.jsx)(a.code,{children:"axios"})," in ",(0,n.jsx)(a.em,{children:"config"})," of method instance creation."]}),"\n",(0,n.jsxs)(r.Z,{groupId:"framework",children:[(0,n.jsx)(o.Z,{value:"1",label:"vue",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-html",children:"<template>\n  <div v-if=\"loading\">Loading...</div>\n  <div>The request data is: {{ data }}</div>\n</template>\n\n<script setup>\n  const list = () =>\n    alovaInst.Get('/list', {\n      // The set parameters will be passed to axios\n      paramsSerializer: params => {\n        return Qs.stringify(params, { arrayFormat: 'brackets' });\n      }\n    });\n  const { loading, data } = useRequest(list);\n<\/script>\n"})})}),(0,n.jsx)(o.Z,{value:"2",label:"react",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",children:"const list = () =>\n   alovaInst.Get('/list', {\n     // The set parameters will be passed to axios\n     paramsSerializer: params => {\n       return Qs.stringify(params, {arrayFormat: 'brackets'})\n     },\n   });\n\nconst App = () => {\n   const { loading, data } = useRequest(list);\n\n   return (\n     { loading ? <div>Loading...</div> : null }\n     <div>The request data is: { JSON.stringify(data) }</div>\n   )\n};\n"})})}),(0,n.jsx)(o.Z,{value:"3",label:"svelte",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-html",children:"<script>\n  const list = () =>\n    alovaInst.Get('/list', {\n      // The set parameters will be passed to axios\n      paramsSerializer: params => {\n        return Qs.stringify(params, { arrayFormat: 'brackets' });\n      }\n    });\n  const { loading, data } = useRequest(list);\n<\/script>\n\n{#if $loading}\n<div>Loading...</div>\n{/if}\n<div>The request data is: { data }</div>\n"})})})]}),"\n",(0,n.jsx)(a.h3,{id:"upload",children:"Upload"}),"\n",(0,n.jsxs)(a.p,{children:["Use ",(0,n.jsx)(a.code,{children:"FormData"})," to upload files, and this ",(0,n.jsx)(a.code,{children:"FormData"})," instance will be passed to axios, which is consistent with the usage of axios upload files."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"const uploadFile = imageFile => {\n  const formData = new FormData();\n  formData.append('file', imageFile);\n  return alovaInst.Post('/uploadImg', formData, {\n    // Start upload progress\n    enableUpload: true\n  });\n};\n\nconst {\n  loading,\n  data,\n  uploading,\n  send: sendUpload\n} = useRequest(uploadFile, {\n  immediate: false\n});\n\n// Picture selection event callback\nconst handleImageChoose = ({ target }) => {\n  sendUpload(target.files[0]);\n};\n"})}),"\n",(0,n.jsx)(a.h3,{id:"download",children:"download"}),"\n",(0,n.jsxs)(a.p,{children:["Point the request url to the file address to download, you can also enable the download progress by setting ",(0,n.jsx)(a.code,{children:"enableDownload"})," to true."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"const downloadFile = () =>\n  alovaInst.Get('/bigImage.jpg', {\n    // Start download progress\n    enableDownload: true,\n    responseType: 'blob'\n  });\n\nconst { loading, data, downloading, send, onSuccess } = useRequest(downloadFile, {\n  immediate: false\n});\nonSuccess(({ data: imageBlob }) => {\n  // download image\n  const anchor = document.createElement('a');\n  anchor.href = URL.createObjectURL(blob);\n  anchor.download = 'image.jpg';\n  anchor.click();\n  URL.revokeObjectURL(anchor.href);\n});\nconst handleImageDownload = () => {\n  send();\n};\n"})}),"\n",(0,n.jsx)(a.h2,{id:"use-custom-axios-instance",children:"Use custom axios instance"}),"\n",(0,n.jsx)(a.p,{children:"By default, this adapter will use the default axios instance for requests, but in some cases you need to use a custom created axios instance. You can do this:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"const customAxios = axios.create({\n  // ...\n});\n\nconst alovaInst = createAlova({\n  // ...\n  // highlight-start\n  requestAdapter: axiosRequestAdapter({\n    axios: customAxios\n  })\n  // highlight-end\n});\n"})}),"\n",(0,n.jsx)(a.h2,{id:"mock-request-adapter-compatible",children:"Mock request adapter compatible"}),"\n",(0,n.jsxs)(a.p,{children:["When developing applications, we may still need to use simulated requests. Only by default, the response data of ",(0,n.jsx)(a.a,{href:"/v2/tutorial/request-adapter/alova-mock",children:"Mock Request Adapter (@alova/mock)"})," is a ",(0,n.jsx)(a.code,{children:"Response"})," instance, which is compatible with the ",(0,n.jsx)(a.code,{children:"GlobalFetch"})," request adapter by default. When using the axios adapter, we The response data of the mock request adapter needs to be compatible with ",(0,n.jsx)(a.strong,{children:"AxiosResponse"}),", and the error instance is ",(0,n.jsx)(a.strong,{children:"AxiosError"}),", so you need to use ",(0,n.jsx)(a.code,{children:"axiosMockResponse"})," exported from the ",(0,n.jsx)(a.strong,{children:"@alova/adapter-axios"})," package as the response adapter ."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"import { defineMock, createAlovaMockAdapter } from '@alova/mock';\nimport { axiosRequestAdapter, axiosMockResponse } from '@alova/adapter-axios';\n\nconst mocks = defineMock({\n  //...\n});\n\n// mock data request adapter\nexport default createAlovaMockAdapter([mocks], {\n  // After specifying axios request adapter, requests that do not match the simulated interface will use this adapter to send requests\n  httpAdapter: axiosRequestAdapter(),\n\n  // axiosMockResponse contains onMockResponse and onMockError\n  // Used to convert mock data to AxiosResponse and AxiosError compatible format\n  ...axiosMockResponse\n});\n\nexport const alovaInst = createAlova({\n  //...\n  // Control whether to use the simulated request adapter through environment variables\n  requestAdapter: process.env.NODE_ENV === 'development' ? mockAdapter : axiosRequestAdapter()\n});\n"})}),"\n",(0,n.jsx)(a.p,{children:"##Typescript"}),"\n",(0,n.jsx)(a.p,{children:"The axios request adapter provides complete type adaptation. The type of method configuration and response data will exactly match the type of axios."}),"\n",(0,n.jsx)(a.h3,{id:"method-configuration",children:"method configuration"}),"\n",(0,n.jsxs)(a.p,{children:["When creating a method instance, in addition to the general configuration items in the method, you can also use the configuration items in ",(0,n.jsx)(a.code,{children:"AxiosRequestConfig"}),", we have removed the items that conflict with the general configuration of the method instance in the type."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-typescript",children:"/**\n * axios request configuration parameters\n * Removed the attributes that conflicted with the method\n */\nexport type AlovaAxiosRequestConfig = Omit<\n  AxiosRequestConfig,\n  | 'url'\n  | 'method'\n  | 'baseURL'\n  | 'headers'\n  | 'params'\n  | 'data'\n  | 'timeout'\n  | 'cancelToken'\n  | 'signal'\n  | 'onUploadProgress'\n  | 'onDownloadProgress'\n>;\n"})}),"\n",(0,n.jsx)(a.h3,{id:"response-data",children:"Response data"}),"\n",(0,n.jsxs)(a.p,{children:["The response data type of axios is ",(0,n.jsx)(a.code,{children:"AxiosResponse"}),", when you use the axios adapter, you will also get the response data in the same format. In actual use, we usually need to process response data globally. A simple example is as follows:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-typescript",children:"const alovaInst = createAlova(\n   baseURL: 'https://api.alovajs.org',\n   requestAdapter: axiosRequestAdapter(),\n   responded(response) {\n     // response is automatically inferred as AxiosResponse type\n     return response.data;\n   }\n});\n"})}),"\n",(0,n.jsx)(a.h3,{id:"error",children:"Error"}),"\n",(0,n.jsxs)(a.p,{children:["When axios receives non-20x and 30x response status codes, it will throw an error. In order to contain more information, axios custom-designed the error instance into an ",(0,n.jsx)(a.code,{children:"AxiosError"})," instance instead of a normal Error instance, so when encountering An error will be thrown when there is a server error or a network error, and you can catch it in the global error callback."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-typescript",children:"const alovaInst = createAlova(\n   baseURL: 'https://api.alovajs.org',\n   requestAdapter: axiosRequestAdapter(),\n   responded: {\n     onSuccess(response) {\n       // response is automatically inferred as AxiosResponse type\n       return response.data;\n     },\n     onError(err: AxiosError) {\n       // err type is any by default, you can cast it to AxiosError\n       //...\n     }\n   }\n});\n"})})]})}function h(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},85162:(e,a,t)=>{t.d(a,{Z:()=>o});t(67294);var n=t(90512);const s={tabItem:"tabItem_Ymn6"};var r=t(85893);function o(e){let{children:a,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,o),hidden:t,children:a})}},74866:(e,a,t)=>{t.d(a,{Z:()=>w});var n=t(67294),s=t(90512),r=t(12466),o=t(16550),i=t(20469),l=t(91980),c=t(67392),d=t(20812);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return u(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:s}}=e;return{value:a,label:t,attributes:n,default:s}}))}(t);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function h(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:t}=e;const s=(0,o.k6)(),r=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,l._X)(r),(0,n.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(s.location.search);a.set(r,e),s.replace({...s.location,search:a.toString()})}),[r,s])]}function x(e){const{defaultValue:a,queryString:t=!1,groupId:s}=e,r=p(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:r}))),[c,u]=m({queryString:t,groupId:s}),[x,v]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[s,r]=(0,d.Nk)(t);return[s,(0,n.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),f=(()=>{const e=c??x;return h({value:e,tabValues:r})?e:null})();(0,i.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),v(e)}),[u,v,r]),tabValues:r}}var v=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function b(e){let{className:a,block:t,selectedValue:n,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const a=e.currentTarget,t=l.indexOf(a),s=i[t].value;s!==n&&(c(a),o(s))},u=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;a=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;a=l[t]??l[l.length-1];break}}a?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},a),children:i.map((e=>{let{value:a,label:t,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,s.Z)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":n===a}),children:t??a},a)}))})}function j(e){let{lazy:a,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==s})))})}function y(e){const a=x(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,g.jsx)(b,{...a,...e}),(0,g.jsx)(j,{...a,...e})]})}function w(e){const a=(0,v.Z)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(a))}},11151:(e,a,t)=>{t.d(a,{Z:()=>i,a:()=>o});var n=t(67294);const s={},r=n.createContext(s);function o(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);