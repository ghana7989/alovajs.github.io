"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[6387],{8321:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var n=r(5893),a=r(1151);const s={title:"Custom Request Adapter",sidebar_position:20},o=void 0,d={id:"tutorial/advanced/custom-http-adapter",title:"Custom Request Adapter",description:"Remember how to create an Alova instance?",source:"@site/docs/tutorial/08-advanced/02-custom-http-adapter.md",sourceDirName:"tutorial/08-advanced",slug:"/tutorial/advanced/custom-http-adapter",permalink:"/tutorial/advanced/custom-http-adapter",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/08-advanced/02-custom-http-adapter.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Custom Request Adapter",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Advanced Overview",permalink:"/tutorial/advanced/overview"},next:{title:"Custom Storage Adapter",permalink:"/tutorial/advanced/custom-storage-adapter"}},i={},l=[{value:"Request adapter structure",id:"request-adapter-structure",level:2},{value:"Request parameter details",id:"request-parameter-details",level:3},{value:"Return parameter details",id:"return-parameter-details",level:3},{value:"XMLHttpRequest request adapter example",id:"xmlhttprequest-request-adapter-example",level:2},{value:"request adapter type",id:"request-adapter-type",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Remember how to create an Alova instance?"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"const alovaInstance = createAlova({\r\n  //...\r\n  requestAdapter: GlobalFetch()\r\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"requestAdapter"})," is a request adapter. Internal request sending and receiving will depend on the request adapter. ",(0,n.jsx)(t.code,{children:"GlobalFetch"})," manages requests through fetch api. In most cases, we can use it. However, when ",(0,n.jsx)(t.code,{children:"alova"})," When running in an environment where fetch api is not available (such as app, applet), it is necessary to replace a request adapter that supports the current environment."]}),"\n",(0,n.jsxs)(t.p,{children:["So how should you customize a request adapter? Very simple, it is actually a function, which is called every time a request is made, and returns an object, which contains such things as ",(0,n.jsx)(t.code,{children:"url"}),", ",(0,n.jsx)(t.code,{children:"method"}),", ",(0,n.jsx)(t.code,{children:"data"}),", ",(0,n.jsx)(t.code,{children:"headers"}),", ",(0,n.jsx)(t.code,{children:"timeout"}),", etc. Request related data sets. Although there are many fields, we only need to access the data we need."]}),"\n",(0,n.jsx)(t.h2,{id:"request-adapter-structure",children:"Request adapter structure"}),"\n",(0,n.jsx)(t.p,{children:"The request adapter will receive request-related parameters and the currently requesting method instance, and return a set of response-related functions."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"function CustomRequestAdapter(requestElements, methodInstance) {\r\n  // send request...\r\n  return {\r\n    async response() {\r\n      // ...return the response data\r\n    },\r\n    async headers() {\r\n      // Asynchronous function that returns response headers\r\n    },\r\n    abort() {\r\n      // Interrupt request, this function will be triggered when abort is called externally\r\n    },\r\n    onDownload(updateDownloadProgress) {\r\n      // Download progress information, internally call updateDownloadProgress continuously to update the download progress\r\n    },\r\n    onUpload(updateUploadProgress) {\r\n      // Upload progress information, internally call updateUploadProgress continuously to update the upload progress\r\n    }\r\n  };\r\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"request-parameter-details",children:"Request parameter details"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"requestElements"})}),"\n",(0,n.jsx)(t.p,{children:"Relevant elements of the send request, including the following data."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"interface RequestElements {\r\n  // request url, the get parameter is already included\r\n  readonly url: string;\r\n\r\n  // Request type, such as GET, POST, PUT, etc.\r\n  readonly type: MethodType;\r\n\r\n  // Request header information, object\r\n  readonly headers: Arg;\r\n\r\n  // request body information\r\n  readonly data?: RequestBody;\r\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"methodInstance"})}),"\n",(0,n.jsx)(t.p,{children:"The method instance of the current request"}),"\n",(0,n.jsx)(t.h3,{id:"return-parameter-details",children:"Return parameter details"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"response (required)"})}),"\n",(0,n.jsx)(t.p,{children:"An asynchronous function, the function returns the response value, which will be passed to the global response interceptor responded;"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"headers (required)"})}),"\n",(0,n.jsx)(t.p,{children:"An asynchronous function, the response header object returned by the function will be passed to the transformData conversion hook function of the Method instance;"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"abort (required)"})}),"\n",(0,n.jsxs)(t.p,{children:["An ordinary function, which is used for interrupt request. When the ",(0,n.jsx)(t.code,{children:"abort"})," function is called in the [Manual Interrupt Request](#Manual Interrupt Request) chapter, the function that actually triggers the interrupt request is this interrupt function;"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"onDownload (optional)"})}),"\n",(0,n.jsxs)(t.p,{children:["An ordinary function that receives a callback function that updates the download progress, and customizes the frequency of the progress update within this function, in this example simulating an update every 100 milliseconds. The ",(0,n.jsx)(t.code,{children:"updateDownloadProgress"})," callback function receives two parameters, the first parameter is the total size, and the second parameter is the downloaded size;"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"onUpload (optional)"})}),"\n",(0,n.jsxs)(t.p,{children:["An ordinary function that receives a callback function that updates the upload progress, and customizes the frequency of the progress update within this function, in this example simulating an update every 100 milliseconds. The ",(0,n.jsx)(t.code,{children:"updateUploadProgress"})," callback function receives two parameters, the first parameter is the total size, and the second parameter is the uploaded size;"]}),"\n",(0,n.jsx)(t.h2,{id:"xmlhttprequest-request-adapter-example",children:"XMLHttpRequest request adapter example"}),"\n",(0,n.jsx)(t.p,{children:"The following is an example of an adapter that sends requests through XMLHttpRequest, mainly to demonstrate how to write the adapter, the code is incomplete and cannot be run."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"function XMLHttpRequestAdapter(requestElements, methodInstance) {\r\n  // Deconstruct the data that needs to be used\r\n  const { url, type, data, headers } = config;\r\n\r\n  // send request\r\n  const xhr = new XMLHttpRequest();\r\n  xhr.open(type, url);\r\n  for (const key in headers) {\r\n    xhr.setRequestHeader(key, headers[key]);\r\n  }\r\n  const responsePromise = new Promise((resolve, reject) => {\r\n    xhr.addEventListener('load', event => {\r\n      // process response data\r\n      resolve(/* ... */);\r\n    });\r\n    xhr.addEventListener('error', event => {\r\n      // Handle request errors\r\n      reject(/* ... */);\r\n    });\r\n  });\r\n\r\n  xhr.send(JSON.stringify(data));\r\n\r\n  return {\r\n    // Asynchronous function that returns response data\r\n    response: () => responsePromise,\r\n\r\n    // Asynchronous function that returns response headers\r\n    headers: () => responsePromise.then(() => xhr.getAllResponseHeaders()),\r\n    abort: () => {\r\n      xhr.abort();\r\n    },\r\n\r\n    // Download progress information, internally call updateDownloadProgress continuously to update the download progress\r\n    onDownload: updateDownloadProgress => {\r\n      xhr.addEventListener('progress', event => {\r\n        // data receiving progress\r\n        updateDownloadProgress(event.total, event.loaded);\r\n      });\r\n    },\r\n\r\n    // Upload progress information, internally call updateUploadProgress continuously to update the upload progress\r\n    onUpload: updateUploadProgress => {\r\n      xhr.upload.onprogress = event => {\r\n        updateUploadProgress(event.total, event.loaded);\r\n      };\r\n    }\r\n  };\r\n}\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["More complete request adapter details can be found in ",(0,n.jsx)(t.a,{href:"https://github.com/alovajs/alova/blob/main/src/predefine/GlobalFetch.ts",children:"GlobalFetch source code"})," to understand."]})}),"\n",(0,n.jsx)(t.h2,{id:"request-adapter-type",children:"request adapter type"}),"\n",(0,n.jsxs)(t.p,{children:["The parameters of the request adapter and the way it supports Typescript can be found in the ",(0,n.jsx)(t.a,{href:"/tutorial/advanced/typescript",children:"Typescript chapter"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>d,a:()=>o});var n=r(7294);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);