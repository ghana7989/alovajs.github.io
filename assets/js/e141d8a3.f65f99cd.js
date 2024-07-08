"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[8869],{32157:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var t=n(85893),s=n(11151),r=n(74866),o=n(85162);const i={title:"axios adapter"},l=void 0,c={id:"resource/request-adapter/alova-adapter-axios",title:"axios adapter",description:"Install",source:"@site/docs/resource/01-request-adapter/03-alova-adapter-axios.md",sourceDirName:"resource/01-request-adapter",slug:"/resource/request-adapter/alova-adapter-axios",permalink:"/next/resource/request-adapter/alova-adapter-axios",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/resource/01-request-adapter/03-alova-adapter-axios.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"axios adapter"},sidebar:"resource",previous:{title:"XMLHttpRequest Adapter",permalink:"/next/resource/request-adapter/alova-adapter-xhr"},next:{title:"Taro Adapter",permalink:"/next/resource/request-adapter/alova-adapter-taro"}},d={},u=[{value:"Install",id:"install",level:2},{value:"Instructions",id:"instructions",level:2},{value:"create alova",id:"create-alova",level:3},{value:"usage",id:"usage",level:2},{value:"request",id:"request",level:3},{value:"Upload",id:"upload",level:3},{value:"download",id:"download",level:3},{value:"Use custom axios instance",id:"use-custom-axios-instance",level:2},{value:"Mock request adapter compatible",id:"mock-request-adapter-compatible",level:2},{value:"method configuration",id:"method-configuration",level:3},{value:"Response data",id:"response-data",level:3},{value:"Error",id:"error",level:3}];function p(e){const a={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"install",children:"Install"}),"\n",(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(o.Z,{value:"1",label:"npm",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"npm install @alova/adapter-axios@beta --save\n"})})}),(0,t.jsx)(o.Z,{value:"2",label:"yarn",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"yarn add @alova/adapter-axios@beta\n"})})})]}),"\n",(0,t.jsx)(a.h2,{id:"instructions",children:"Instructions"}),"\n",(0,t.jsx)(a.h3,{id:"create-alova",children:"create alova"}),"\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.strong,{children:"axiosRequestAdapter"})," as request adapter for alova."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:"import { createAlova } from 'alova';\nimport { axiosRequestAdapter } from '@alova/adapter-axios';\n\nconst alovaInst = createAlova({\n  //...\n  requestAdapter: axiosRequestAdapter()\n  //...\n});\n"})}),"\n",(0,t.jsx)(a.p,{children:"The adapter will use the default axios instance to make requests internally. If you set some global parameters for axios, you may need to pay attention to the following two points:"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["Priority is given to using the ",(0,t.jsx)(a.code,{children:"baseURL"})," and ",(0,t.jsx)(a.code,{children:"timeout"})," parameters in the axios instance, so if you set these parameters on the axios instance, you do not need to set them in ",(0,t.jsx)(a.code,{children:"createAlova"}),";"]}),"\n",(0,t.jsxs)(a.li,{children:["The ",(0,t.jsx)(a.code,{children:"beforeRequest"})," hook of the alova instance will be triggered earlier than the ",(0,t.jsx)(a.code,{children:"interceptor.request"})," of the axios instance, and the ",(0,t.jsx)(a.code,{children:"responded"})," hook of the alova will be triggered later than the ",(0,t.jsx)(a.code,{children:"interceptor.response"})," of the axios instance;"]}),"\n"]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsxs)(a.p,{children:["You can also ",(0,t.jsx)(a.a,{href:"#use-custom-axios-instance",children:"use custom axios instance"})]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"usage",children:"usage"}),"\n",(0,t.jsx)(a.h3,{id:"request",children:"request"}),"\n",(0,t.jsxs)(a.p,{children:["The usage of request is exactly the same as that used in the web environment. Already fully compatible with ",(0,t.jsx)(a.strong,{children:"axios"}),", you can specify ",(0,t.jsx)(a.a,{href:"https://axios-http.com/docs/req_config",children:"all configuration items"})," supported by ",(0,t.jsx)(a.code,{children:"axios"})," in ",(0,t.jsx)(a.em,{children:"config"})," of method instance creation."]}),"\n",(0,t.jsxs)(r.Z,{groupId:"framework",children:[(0,t.jsx)(o.Z,{value:"1",label:"vue",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-html",children:"<tempate>\n   <div v-if=\"loading\">Loading...</div>\n   <div>The request data is: {{ data }}</div>\n</template>\n\n<script setup>\n   const list = () =>\n     alovaInst.Get('/list', {\n       // The set parameters will be passed to axios\n       paramsSerializer: params => {\n         return Qs.stringify(params, { arrayFormat: 'brackets' });\n       }\n     });\n   const { loading, data } = useRequest(list);\n<\/script>\n"})})}),(0,t.jsx)(o.Z,{value:"2",label:"react",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-jsx",children:"const list = () =>\n   alovaInst.Get('/list', {\n     // The set parameters will be passed to axios\n     paramsSerializer: params => {\n       return Qs.stringify(params, {arrayFormat: 'brackets'})\n     },\n   });\n\nconst App = () => {\n   const { loading, data } = useRequest(list);\n\n   return (\n     { loading ? <div>Loading...</div> : null }\n     <div>The request data is: { JSON.stringify(data) }</div>\n   )\n};\n"})})}),(0,t.jsx)(o.Z,{value:"3",label:"svelte",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-html",children:"<script>\n  const list = () =>\n    alovaInst.Get('/list', {\n      // The set parameters will be passed to axios\n      paramsSerializer: params => {\n        return Qs.stringify(params, { arrayFormat: 'brackets' });\n      }\n    });\n  const { loading, data } = useRequest(list);\n<\/script>\n\n{#if $loading}\n<div>Loading...</div>\n{/if}\n<div>The request data is: { data }</div>\n"})})})]}),"\n",(0,t.jsx)(a.h3,{id:"upload",children:"Upload"}),"\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.code,{children:"FormData"})," to upload files, and this ",(0,t.jsx)(a.code,{children:"FormData"})," instance will be passed to axios, which is consistent with the usage of axios upload files."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:"const uploadFile = imageFile => {\n  const formData = new FormData();\n  formData.append('file', imageFile);\n  return alovaInst.Post('/uploadImg', formData, {\n    // Start upload progress\n    enableUpload: true\n  });\n};\n\nconst {\n  loading,\n  data,\n  uploading,\n  send: sendUpload\n} = useRequest(uploadFile, {\n  immediate: false\n});\n\n// Picture selection event callback\nconst handleImageChoose = ({ target }) => {\n  sendUpload(target.files[0]);\n};\n"})}),"\n",(0,t.jsx)(a.h3,{id:"download",children:"download"}),"\n",(0,t.jsxs)(a.p,{children:["Point the request url to the file address to download, you can also enable the download progress by setting ",(0,t.jsx)(a.code,{children:"enableDownload"})," to true."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:"const downloadFile = () =>\n  alovaInst.Get('/bigImage.jpg', {\n    // Start download progress\n    enableDownload: true,\n    responseType: 'blob'\n  });\n\nconst { loading, data, downloading, send, onSuccess } = useRequest(downloadFile, {\n  immediate: false\n});\nonSuccess(({ data: imageBlob }) => {\n  // download image\n  const anchor = document.createElement('a');\n  anchor.href = URL.createObjectURL(blob);\n  anchor.download = 'image.jpg';\n  anchor.click();\n  URL.revokeObjectURL(anchor.href);\n});\nconst handleImageDownload = () => {\n  send();\n};\n"})}),"\n",(0,t.jsx)(a.h2,{id:"use-custom-axios-instance",children:"Use custom axios instance"}),"\n",(0,t.jsx)(a.p,{children:"By default, this adapter will use the default axios instance for requests, but in some cases you need to use a custom created axios instance. You can do this:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:"const customAxios = axios.create({\n  // ...\n});\n\nconst alovaInst = createAlova({\n  // ...\n  // highlight-start\n  requestAdapter: axiosRequestAdapter({\n    axios: customAxios\n  })\n  // highlight-end\n});\n"})}),"\n",(0,t.jsx)(a.h2,{id:"mock-request-adapter-compatible",children:"Mock request adapter compatible"}),"\n",(0,t.jsxs)(a.p,{children:["When developing applications, we may still need to use simulated requests. Only by default, the response data of ",(0,t.jsx)(a.a,{href:"/next/resource/request-adapter/alova-mock",children:"Mock Request Adapter (@alova/mock)"})," is a ",(0,t.jsx)(a.code,{children:"Response"})," instance, which is compatible with the ",(0,t.jsx)(a.code,{children:"alova/fetch"})," request adapter by default. When using the axios adapter, we The response data of the mock request adapter needs to be compatible with ",(0,t.jsx)(a.strong,{children:"AxiosResponse"}),", and the error instance is ",(0,t.jsx)(a.strong,{children:"AxiosError"}),", so you need to use ",(0,t.jsx)(a.code,{children:"axiosMockResponse"})," exported from the ",(0,t.jsx)(a.strong,{children:"@alova/adapter-axios"})," package as the response adapter ."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:"import { defineMock, createAlovaMockAdapter } from '@alova/mock';\nimport { axiosRequestAdapter, axiosMockResponse } from '@alova/adapter-axios';\n\nconst mocks = defineMock({\n  //...\n});\n\n// mock data request adapter\nexport default createAlovaMockAdapter([mocks], {\n  // After specifying axios request adapter, requests that do not match the simulated interface will use this adapter to send requests\n  httpAdapter: axiosRequestAdapter(),\n\n  // axiosMockResponse contains onMockResponse and onMockError\n  // Used to convert mock data to AxiosResponse and AxiosError compatible format\n  ...axiosMockResponse\n});\n\nexport const alovaInst = createAlova({\n  //...\n  // Control whether to use the simulated request adapter through environment variables\n  requestAdapter: process.env.NODE_ENV === 'development' ? mockAdapter : axiosRequestAdapter()\n});\n"})}),"\n",(0,t.jsx)(a.p,{children:"##Typescript"}),"\n",(0,t.jsx)(a.p,{children:"The axios request adapter provides complete type adaptation. The type of method configuration and response data will exactly match the type of axios."}),"\n",(0,t.jsx)(a.h3,{id:"method-configuration",children:"method configuration"}),"\n",(0,t.jsxs)(a.p,{children:["When creating a method instance, in addition to the general configuration items in the method, you can also use the configuration items in ",(0,t.jsx)(a.code,{children:"AxiosRequestConfig"}),", we have removed the items that conflict with the general configuration of the method instance in the type."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-typescript",children:"/**\n * axios request configuration parameters\n * Removed the attributes that conflicted with the method\n */\nexport type AlovaAxiosRequestConfig = Omit<\n  AxiosRequestConfig,\n  | 'url'\n  | 'method'\n  | 'baseURL'\n  | 'headers'\n  | 'params'\n  | 'data'\n  | 'timeout'\n  | 'cancelToken'\n  | 'signal'\n  | 'onUploadProgress'\n  | 'onDownloadProgress'\n>;\n"})}),"\n",(0,t.jsx)(a.h3,{id:"response-data",children:"Response data"}),"\n",(0,t.jsxs)(a.p,{children:["The response data type of axios is ",(0,t.jsx)(a.code,{children:"AxiosResponse"}),", when you use the axios adapter, you will also get the response data in the same format. In actual use, we usually need to process response data globally. A simple example is as follows:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-typescript",children:"const alovaInst = createAlova(\n   baseURL: 'https://api.alovajs.org',\n   requestAdapter: axiosRequestAdapter(),\n   responded(response) {\n     // response is automatically inferred as AxiosResponse type\n     return response.data;\n   }\n});\n"})}),"\n",(0,t.jsx)(a.h3,{id:"error",children:"Error"}),"\n",(0,t.jsxs)(a.p,{children:["When axios receives non-20x and 30x response status codes, it will throw an error. In order to contain more information, axios custom-designed the error instance into an ",(0,t.jsx)(a.code,{children:"AxiosError"})," instance instead of a normal Error instance, so when encountering An error will be thrown when there is a server error or a network error, and you can catch it in the global error callback."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-typescript",children:"const alovaInst = createAlova(\n   baseURL: 'https://api.alovajs.org',\n   requestAdapter: axiosRequestAdapter(),\n   responded: {\n     onSuccess(response) {\n       // response is automatically inferred as AxiosResponse type\n       return response.data;\n     },\n     onError(err: AxiosError) {\n       // err type is any by default, you can cast it to AxiosError\n       //...\n     }\n   }\n});\n"})})]})}function h(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},85162:(e,a,n)=>{n.d(a,{Z:()=>o});n(67294);var t=n(90512);const s={tabItem:"tabItem_Ymn6"};var r=n(85893);function o(e){let{children:a,hidden:n,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,o),hidden:n,children:a})}},74866:(e,a,n)=>{n.d(a,{Z:()=>w});var t=n(67294),s=n(90512),r=n(12466),o=n(16550),i=n(20469),l=n(91980),c=n(67392),d=n(20812);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return u(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:s}}=e;return{value:a,label:n,attributes:t,default:s}}))}(n);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function h(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:n}=e;const s=(0,o.k6)(),r=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,l._X)(r),(0,t.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(s.location.search);a.set(r,e),s.replace({...s.location,search:a.toString()})}),[r,s])]}function x(e){const{defaultValue:a,queryString:n=!1,groupId:s}=e,r=p(e),[o,l]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:r}))),[c,u]=m({queryString:n,groupId:s}),[x,v]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[s,r]=(0,d.Nk)(n);return[s,(0,t.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),f=(()=>{const e=c??x;return h({value:e,tabValues:r})?e:null})();(0,i.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),v(e)}),[u,v,r]),tabValues:r}}var v=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function b(e){let{className:a,block:n,selectedValue:t,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const a=e.currentTarget,n=l.indexOf(a),s=i[n].value;s!==t&&(c(a),o(s))},u=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;a=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;a=l[n]??l[l.length-1];break}}a?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},a),children:i.map((e=>{let{value:a,label:n,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,s.Z)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":t===a}),children:n??a},a)}))})}function j(e){let{lazy:a,children:n,selectedValue:s}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==s})))})}function y(e){const a=x(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,g.jsx)(b,{...a,...e}),(0,g.jsx)(j,{...a,...e})]})}function w(e){const a=(0,v.Z)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(a))}},11151:(e,a,n)=>{n.d(a,{Z:()=>i,a:()=>o});var t=n(67294);const s={},r=t.createContext(s);function o(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);