"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[4579],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),o=a(6010),s=a(2466),l=a(6550),i=a(1980),u=a(7392),p=a(12);function c(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,u]=h({queryString:a,groupId:n}),[c,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),v=(()=>{const e=i??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var v=a(2389);const g="tabList__CuJ",b="tabItem_LNqP";function k(e){let{className:t,block:a,selectedValue:l,selectValue:i,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==l&&(c(t),i(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;a=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;a=p[t]??p[p.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",b,null==s?void 0:s.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function x(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,v.Z)();return r.createElement(x,(0,n.Z)({key:String(t)},e))}},5420:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),o=a(4866),s=a(5162);const l={title:"axios adapter",sidebar_position:30},i=void 0,u={unversionedId:"tutorial/extension/alova-adapter-axios",id:"tutorial/extension/alova-adapter-axios",title:"axios adapter",description:"Install",source:"@site/docs/tutorial/09-extension/03-alova-adapter-axios.md",sourceDirName:"tutorial/09-extension",slug:"/tutorial/extension/alova-adapter-axios",permalink:"/tutorial/extension/alova-adapter-axios",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/09-extension/03-alova-adapter-axios.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"axios adapter",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"XMLHttpRequest Adapter",permalink:"/tutorial/extension/alova-adapter-xhr"},next:{title:"Taro Adapter",permalink:"/tutorial/extension/alova-adapter-taro"}},p={},c=[{value:"Install",id:"install",level:2},{value:"Instructions",id:"instructions",level:2},{value:"create alova",id:"create-alova",level:3},{value:"ask",id:"ask",level:3},{value:"Upload",id:"upload",level:3},{value:"download",id:"download",level:3},{value:"Mock request adapter compatible",id:"mock-request-adapter-compatible",level:2},{value:"method configuration",id:"method-configuration",level:3},{value:"Response data",id:"response-data",level:3},{value:"Error",id:"error",level:3}],d={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"1",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @alova/adapter-axios --save\n"))),(0,r.kt)(s.Z,{value:"2",label:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @alova/adapter-axios\n")))),(0,r.kt)("h2",{id:"instructions"},"Instructions"),(0,r.kt)("h3",{id:"create-alova"},"create alova"),(0,r.kt)("p",null,"Use ",(0,r.kt)("strong",{parentName:"p"},"axiosRequestAdapter")," as request adapter for alova."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createAlova } from 'alova';\nimport { axiosRequestAdapter } from '@alova/adapter-axios';\n\nconst alovaInst = createAlova({\n  //...\n  requestAdapter: axiosRequestAdapter()\n  //...\n});\n")),(0,r.kt)("h3",{id:"ask"},"ask"),(0,r.kt)("p",null,"The usage method of the request is exactly the same as that used in the web environment. Already fully compatible with ",(0,r.kt)("strong",{parentName:"p"},"axios"),", you can specify ","[all configuration items]"," supported by ",(0,r.kt)("inlineCode",{parentName:"p"},"axios")," in ",(0,r.kt)("em",{parentName:"p"},"config")," of method instance creation (",(0,r.kt)("a",{parentName:"p",href:"https://axios-http.com/docs/req_config"},"https://axios-http.com/docs/req_config"),")"),(0,r.kt)(o.Z,{groupId:"framework",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<tempate>\n   <div v-if=\"loading\">Loading...</div>\n   <div>The request data is: {{ data }}</div>\n</template>\n\n<script setup>\n   const list = () =>\n     alovaInst. Get('/list', {\n       // The set parameters will be passed to axios\n       paramsSerializer: params => {\n         return Qs. stringify(params, { arrayFormat: 'brackets' });\n       }\n     });\n   const { loading, data } = useRequest(list);\n<\/script>\n"))),(0,r.kt)(s.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const list = () =>\n   alovaInst. Get('/list', {\n     // The set parameters will be passed to axios\n     paramsSerializer: params => {\n       return Qs. stringify(params, {arrayFormat: 'brackets'})\n     },\n   });\n\nconst App = () => {\n   const { loading, data } = useRequest(list);\n\n   return (\n     { loading ? <div>Loading...</div> : null }\n     <div>The request data is: { JSON.stringify(data) }</div>\n   )\n};\n"))),(0,r.kt)(s.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  const list = () =>\n    alovaInst.Get('/list', {\n      // The set parameters will be passed to axios\n      paramsSerializer: params => {\n        return Qs.stringify(params, { arrayFormat: 'brackets' });\n      }\n    });\n  const { loading, data } = useRequest(list);\n<\/script>\n\n{#if $loading}\n<div>Loading...</div>\n{/if}\n<div>The request data is: { data }</div>\n")))),(0,r.kt)("h3",{id:"upload"},"Upload"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"FormData")," to upload files, and this ",(0,r.kt)("inlineCode",{parentName:"p"},"FormData")," instance will be passed to axios, which is consistent with the usage of axios upload files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const uploadFile = imageFile => {\n  const formData = new FormData();\n  formData.append('file', imageFile);\n  return alovaInst.Post('/uploadImg', formData, {\n    // Start upload progress\n    enableUpload: true\n  });\n};\n\nconst {\n  loading,\n  data,\n  uploading,\n  send: sendUpload\n} = useRequest(uploadFile, {\n  immediate: false\n});\n\n// Picture selection event callback\nconst handleImageChoose = ({ target }) => {\n  sendUpload(target.files[0]);\n};\n")),(0,r.kt)("h3",{id:"download"},"download"),(0,r.kt)("p",null,"Point the request url to the file address to download, you can also enable the download progress by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"enableDownload")," to true."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const downloadFile = () =>\n  alovaInst.Get('/bigImage. jpg', {\n    // Start download progress\n    enableDownload: true,\n    responseType: 'blob'\n  });\n\nconst { loading, data, downloading, send, onSuccess } = useRequest(downloadFile, {\n  immediate: false\n});\nonSuccess(({ data: imageBlob }) => {\n  // download image\n  const anchor = document.createElement('a');\n  anchor.href = URL.createObjectURL(blob);\n  anchor.download = 'image.jpg';\n  anchor.click();\n  URL.revokeObjectURL(anchor.href);\n});\nconst handleImageDownload = () => {\n  send();\n};\n")),(0,r.kt)("h2",{id:"mock-request-adapter-compatible"},"Mock request adapter compatible"),(0,r.kt)("p",null,"When developing applications, we may still need to use simulated requests. Only by default, the response data of ",(0,r.kt)("a",{parentName:"p",href:"../extension/alova-mock"},"Mock Request Adapter (@alova/mock)")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Response")," instance, which is compatible with the ",(0,r.kt)("inlineCode",{parentName:"p"},"GlobalFetch")," request adapter by default. When using the axios adapter, we The response data of the mock request adapter needs to be compatible with ",(0,r.kt)("strong",{parentName:"p"},"AxiosResponse"),", and the error instance is ",(0,r.kt)("strong",{parentName:"p"},"AxiosError"),", so you need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"axiosMockResponse")," exported from the ",(0,r.kt)("strong",{parentName:"p"},"@alova/adapter-axios")," package as the response adapter ."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { defineMock, createAlovaMockAdapter } from '@alova/mock';\nimport { axiosRequestAdapter, axiosMockResponse } from '@alova/adapter-axios';\n\nconst mocks = defineMock({\n  //...\n});\n\n// mock data request adapter\nexport default createAlovaMockAdapter([mocks], {\n  // After specifying axios request adapter, requests that do not match the simulated interface will use this adapter to send requests\n  httpAdapter: axiosRequestAdapter(),\n\n  // axiosMockResponse contains onMockResponse and onMockError\n  // Used to convert mock data to AxiosResponse and AxiosError compatible format\n  ...axiosMockResponse\n});\n\nexport const alovaInst = createAlova({\n  //...\n  // Control whether to use the simulated request adapter through environment variables\n  requestAdapter: process.env.NODE_ENV === 'development' ? mockAdapter : axiosRequestAdapter()\n});\n")),(0,r.kt)("p",null,"##Typescript"),(0,r.kt)("p",null,"The axios request adapter provides complete type adaptation. The type of method configuration and response data will exactly match the type of axios."),(0,r.kt)("h3",{id:"method-configuration"},"method configuration"),(0,r.kt)("p",null,"When creating a method instance, in addition to the general configuration items in the method, you can also use the configuration items in ",(0,r.kt)("inlineCode",{parentName:"p"},"AxiosRequestConfig"),", we have removed the items that conflict with the general configuration of the method instance in the type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * axios request configuration parameters\n * Removed the attributes that conflicted with the method\n */\nexport type AlovaAxiosRequestConfig = Omit<\n  AxiosRequestConfig,\n  | 'url'\n  | 'method'\n  | 'baseURL'\n  | 'headers'\n  | 'params'\n  | 'data'\n  | 'timeout'\n  | 'cancelToken'\n  | 'signal'\n  | 'onUploadProgress'\n  | 'onDownloadProgress'\n>;\n")),(0,r.kt)("h3",{id:"response-data"},"Response data"),(0,r.kt)("p",null,"The response data type of axios is ",(0,r.kt)("inlineCode",{parentName:"p"},"AxiosResponse"),", when you use the axios adapter, you will also get the response data in the same format. In actual use, we usually need to process response data globally. A simple example is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const alovaInst = createAlova(\n   baseURL: 'https://api.alovajs.org',\n   requestAdapter: axiosRequestAdapter(),\n   responded(response) {\n     // response is automatically inferred as AxiosResponse type\n     return response.data;\n   }\n});\n")),(0,r.kt)("h3",{id:"error"},"Error"),(0,r.kt)("p",null,"When axios receives non-20x and 30x response status codes, it will throw an error. In order to contain more information, axios custom-designed the error instance into an ",(0,r.kt)("inlineCode",{parentName:"p"},"AxiosError")," instance instead of a normal Error instance, so when encountering An error will be thrown when there is a server error or a network error, and you can catch it in the global error callback."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const alovaInst = createAlova(\n   baseURL: 'https://api.alovajs.org',\n   requestAdapter: axiosRequestAdapter(),\n   responded: {\n     onSuccess(response) {\n       // response is automatically inferred as AxiosResponse type\n       return response.data;\n     },\n     onError(err: AxiosError) {\n       // err type is any by default, you can cast it to AxiosError\n       //...\n     }\n   }\n});\n")))}m.isMDXComponent=!0}}]);