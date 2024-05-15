"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[9474],{2227:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(5893),s=n(1151);const a={title:"Method Instance",sidebar_position:30},o=void 0,i={id:"tutorial/getting-started/method",title:"Method Instance",description:"In the previous chapter we tried to send a request and obtain the response data. In fact, alovaInstance.Get(...) is not a function that initiates a request, but creates a method instance, which is a PromiseLike instance. You can use then, catch, finally methods or await Send the request just like a Promise object.",source:"@site/docs/tutorial/02-getting-started/03-method.md",sourceDirName:"tutorial/02-getting-started",slug:"/tutorial/getting-started/method",permalink:"/tutorial/getting-started/method",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/02-getting-started/03-method.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Method Instance",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/tutorial/getting-started/quick-start"},next:{title:"Alova Instance",permalink:"/tutorial/getting-started/alova"}},d={},l=[{value:"Request type",id:"request-type",level:2},{value:"Request parameters",id:"request-parameters",level:2},{value:"URL parameters",id:"url-parameters",level:3},{value:"Request body",id:"request-body",level:3},{value:"Request header",id:"request-header",level:3},{value:"Other parameters supported by the request adapter",id:"other-parameters-supported-by-the-request-adapter",level:3},{value:"Request behavior",id:"request-behavior",level:2},{value:"overtime time",id:"overtime-time",level:3},{value:"Request sharing",id:"request-sharing",level:3},{value:"Convert response data",id:"convert-response-data",level:3},{value:"Response cache",id:"response-cache",level:3},{value:"Abort request",id:"abort-request",level:2},{value:"Monitor upload and download progress",id:"monitor-upload-and-download-progress",level:2}];function c(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["In the previous chapter we tried to send a request and obtain the response data. In fact, ",(0,r.jsx)(t.code,{children:"alovaInstance.Get(...)"})," is not a function that initiates a request, but creates a method instance, which is a PromiseLike instance. You can use ",(0,r.jsx)(t.code,{children:"then, catch, finally"})," methods or ",(0,r.jsx)(t.code,{children:"await"})," Send the request just like a Promise object."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const userMethodInstance = alovaInstance.Get('/api/user');\r\n\r\nuserMethodInstance.then(response => {\r\n  // ...\r\n});\r\n\r\nuserMethodInstance.catch(error => {\r\n  // ...\r\n});\r\n\r\nuserMethodInstance.finally(() => {\r\n  // ...\r\n});\r\n\r\ntry {\r\n  await userMethodInstance;\r\n} catch (error) {\r\n  // ...\r\n} finally {\r\n  // ...\r\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"Simple way to write:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const response = await alovaInstance.Get('/api/user');\n"})}),"\n",(0,r.jsx)(t.p,{children:"Each method instance describes the type of each request, request url, request headers, request parameters, etc. In addition, you can define request behavior on the method instance to control how the method handles the request."}),"\n",(0,r.jsx)(t.h2,{id:"request-type",children:"Request type"}),"\n",(0,r.jsx)(t.p,{children:"alova provides a total of 7 request types: GET, POST, PUT, DELETE, HEAD, OPTIONS, and PATCH."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Instance creation function"}),(0,r.jsx)(t.th,{children:"Parameters"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"GET"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"alovaInstance.Get(url[, config])"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"POST"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"alovaInstance.Post(url[, data[, config]])"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"PUT"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"alovaInstance.Put(url[, data[, config]])"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DELETE"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"alovaInstance.Delete(url[, data[, config]])"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"HEAD"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"alovaInstance.Head(url[, config])"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"OPTIONS"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"alovaInstance.Options(url[, config])"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"PATCH"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"alovaInstance.Patch(url[, data[, config]])"})})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Parameter Description:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"url"})," is the request path;"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"data"})," is the request body data;"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"config"})," is the request configuration object, which includes configurations such as request headers, params parameters, request behavior parameters, etc.;"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"you can also create a method instance customly. This is useful when you need to dynamically specify the request type."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"import { Method } from 'alova';\r\n\r\nconst method = new Method('GET', alovaInstance, '/api/users', {\r\n  params: {\r\n    ID: 1\r\n  }\r\n});\n"})}),"\n",(0,r.jsx)(t.p,{children:"Next, let\u2019s take a look at how to define request parameters, which should seem familiar to you."}),"\n",(0,r.jsx)(t.h2,{id:"request-parameters",children:"Request parameters"}),"\n",(0,r.jsx)(t.h3,{id:"url-parameters",children:"URL parameters"}),"\n",(0,r.jsx)(t.p,{children:"Pass in the URL parameters through params, and the params parameters will be spliced in the form of ? after the url."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"alovaInstance.Get('/todo/list', {\r\n  params: {\r\n    userId: 1\r\n  }\r\n});\n"})}),"\n",(0,r.jsx)(t.p,{children:"Of course, you can also directly splice it behind the url, and the effect will be the same."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"alovaInstance.Get('/todo/list?userId=1');\n"})}),"\n",(0,r.jsx)(t.h3,{id:"request-body",children:"Request body"}),"\n",(0,r.jsxs)(t.p,{children:["When sending ",(0,r.jsx)(t.strong,{children:"POST, PUT, DELETE, PATCH request"}),", you can send data through the request body. At this time, the second parameter is passed in the request body. It is worth noting that the POST request can also pass in the params parameter."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"alovaInstance.Post(\r\n  '/todo',\r\n  //The second parameter is the request body\r\n  {\r\n    title: 'test todo',\r\n    time: '12:00'\r\n  },\r\n  // The third parameter is configuration\r\n  {\r\n    params: {\r\n      userId: 1\r\n    }\r\n  }\r\n);\n"})}),"\n",(0,r.jsx)(t.h3,{id:"request-header",children:"Request header"}),"\n",(0,r.jsx)(t.p,{children:"Specify request headers via headers."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"alovaInstance.Get('/user', {\r\n  headers: {\r\n    'Content-Type': 'application/json;charset=UTF-8'\r\n  }\r\n});\n"})}),"\n",(0,r.jsx)(t.h3,{id:"other-parameters-supported-by-the-request-adapter",children:"Other parameters supported by the request adapter"}),"\n",(0,r.jsxs)(t.p,{children:["In addition to request headers, params parameters, etc., it also supports configuring parameters supported by the corresponding request adapter. When using ",(0,r.jsx)(t.code,{children:"GlobalFetch"})," as the request adapter of alova, you can configure any ",(0,r.jsx)(t.code,{children:"fetch API"})," supported parameters on the ",(0,r.jsx)(t.code,{children:"method"})," instance. These Parameters will be passed to the ",(0,r.jsx)(t.code,{children:"fetch"})," function during request."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"alovaInstance.Get('/todo/list', {\r\n  // ...\r\n  // highlight-start\r\n  credentials: 'same-origin',\r\n  referrerPolicy: 'no-referrer',\r\n  mode: 'cors'\r\n  // highlight-end\r\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["When the above ",(0,r.jsx)(t.code,{children:"method"})," instance sends a request through ",(0,r.jsx)(t.code,{children:"fetch"}),", it will be requested with the following parameters."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"fetch('/todo/list', {\r\n  // ...\r\n  // highlight-start\r\n  credentials: 'same-origin',\r\n  referrerPolicy: 'no-referrer',\r\n  mode: 'cors'\r\n  // highlight-end\r\n});\n"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["In addition to passing Object, the request body can also pass request body parameters supported by the request adapter. For example, GlobalFetch supports passing ",(0,r.jsx)(t.code,{children:"string | FormData | Blob | ArrayBuffer | URLSearchParams | ReadableStream"})," parameters."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"If you use other request adapters, you can also pass the parameters they support."}),"\n",(0,r.jsx)(t.h2,{id:"request-behavior",children:"Request behavior"}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.a,{href:"/tutorial/others/RSM",children:"RSM"}),", request behavior is used to describe how the request will be handled."]}),"\n",(0,r.jsx)(t.h3,{id:"overtime-time",children:"overtime time"}),"\n",(0,r.jsx)(t.p,{children:"Set request timeout."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"// Request timeout at request level\r\nalovaInstance.Get('/todo/list', {\r\n  // ...\r\n  // highlight-start\r\n  timeout: 10000\r\n  // highlight-end\r\n});\n"})}),"\n",(0,r.jsx)(t.h3,{id:"request-sharing",children:"Request sharing"}),"\n",(0,r.jsx)(t.p,{children:"We will always encounter this situation. When a request is issued but has not yet been responded to, the same request is issued again, resulting in a waste of requests or repeated submission of problems, such as the following three scenarios:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"A component will obtain initialization data when it is created. When a page renders multiple components at the same time, multiple identical requests will be issued at the same time;"}),"\n",(0,r.jsx)(t.li,{children:"The submit button is not disabled and the user clicks the submit button multiple times;"}),"\n",(0,r.jsx)(t.li,{children:"When the preloading page is entered before preloading is completed, multiple identical requests will be initiated;"}),"\n",(0,r.jsx)(t.li,{children:"Prevent repeated requests from being sent under react\u2019s StrictMode;"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Shared requests are used to solve these problems. It can not only improve application fluency, but also reduce server pressure."}),"\n",(0,r.jsx)(t.mermaid,{value:"flowchart LR\r\n   classDef response fill:#a8bcff\r\n   R1[Request 1] --\x3e S1[Send request] --\x3e W1[Waiting for response]:::response --\x3e RE1[Receive data 1]\r\n   R2[Same request as request 1] --\x3e W1[Waiting for response]:::response --\x3e RE2[Receive data 1]"}),"\n",(0,r.jsx)(t.p,{children:"Request sharing is enabled by default. If you wish to turn off request sharing on a specific request, you can do this:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"alovaInst.Get('/todo', {\r\n  // ...\r\n  // highlight-start\r\n  shareRequest: false\r\n  // highlight-end\r\n});\n"})}),"\n",(0,r.jsx)(t.admonition,{title:"How to identify identical requests",type:"warning",children:(0,r.jsx)(t.p,{children:"The request method, request URL, request header, URL parameters, and request body of the method instance are used as a unique identifier. If the identifier is the same, it means the same request, instead of comparing the reference address of the method instance."})}),"\n",(0,r.jsx)(t.h3,{id:"convert-response-data",children:"Convert response data"}),"\n",(0,r.jsxs)(t.p,{children:["Sometimes we need to uniformly transform the response data. We can set the ",(0,r.jsx)(t.code,{children:"transformData"})," function for the method instance to convert the response data into the required structure."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"alovaInstance.Get('/todo/list', {\r\n  // The function accepts response data and response header data, and requires the converted data to be returned.\r\n  transformData(rawData, headers) {\r\n    return rawData.list.map(item => {\r\n      return {\r\n        ...item,\r\n        statusText: item.done ? 'Completed' : 'In progress'\r\n      };\r\n    });\r\n  }\r\n});\n"})}),"\n",(0,r.jsx)(t.h3,{id:"response-cache",children:"Response cache"}),"\n",(0,r.jsxs)(t.p,{children:["Response caching allows you to better utilize server-side data multiple times without having to send a request to obtain the data every time it is requested. GET requests will set a memory cache time of 5 minutes by default, which we will explain in detail in the ",(0,r.jsx)(t.a,{href:"/tutorial/cache/mode",children:"Response Caching"})," section later."]}),"\n",(0,r.jsx)(t.h2,{id:"abort-request",children:"Abort request"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"[2.6.2+]"})," calls the ",(0,r.jsx)(t.code,{children:"abort"})," of the method instance to abort the request."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const userMethod = alovaInstance.Get('/api/user');\r\nuserMethod.then(res => {\r\n  // ...\r\n});\r\n\r\nconst handleCancel = () => {\r\n  // highlight-start\r\n  userMethod.abort();\r\n  // highlight-end\r\n};\n"})}),"\n",(0,r.jsx)(t.h2,{id:"monitor-upload-and-download-progress",children:"Monitor upload and download progress"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"[v2.17.0+]"})," Bind the upload progress event through ",(0,r.jsx)(t.code,{children:"onUpload"})," of the method instance, and bind the download progress event through ",(0,r.jsx)(t.code,{children:"onDownload"}),", which will return the unbinding function."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const uploadMethod = alovaInstance.Post('/todo/uploadfile', formData);\r\nconst offUploadEvent = uploadMethod.onUpload(event => {\r\n  console.log('File size:', event.total);\r\n  console.log('Uploaded:', event.loaded);\r\n});\r\n\r\nuploadMethod.then(res => {\r\n  // ...\r\n});\r\n\r\n// Unbind upload callback\r\nconst handleOffEvent = () => {\r\n  offUploadEvent();\r\n};\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const downloadMethod = alovaInstance.Get('/todo/downloadfile');\r\nconst offDownloadEvent = downloadMethod.onDownload(event => {\r\n  console.log('File size:', event.total);\r\n  console.log('Downloaded:', event.loaded);\r\n});\r\n\r\ndownloadMethod.then(res => {\r\n  // ...\r\n});\r\n\r\n// Unbind download callback\r\nconst handleOffEvent = () => {\r\n  offDownloadEvent();\r\n};\n"})}),"\n",(0,r.jsxs)(t.admonition,{type:"warning",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["Things to note when using the ",(0,r.jsx)(t.code,{children:"GlobalFetch"})," adapter"]}),(0,r.jsxs)(t.p,{children:["Due to fetch api limitations, the ",(0,r.jsx)(t.strong,{children:"GlobalFetch"})," adapter provided by alova does not support upload progress. If you need to upload progress, please use ",(0,r.jsx)(t.a,{href:"/tutorial/request-adapter/alova-adapter-xhr",children:"XMLHttpRequest Adapter"})," or ",(0,r.jsx)(t.a,{href:"/tutorial/request-adapter/alova-adapter-axios",children:"axios Adapter"}),"."]}),(0,r.jsxs)(t.p,{children:["You can also write your own request adapter, see ",(0,r.jsx)(t.a,{href:"/tutorial/custom/custom-http-adapter",children:"Writing Request Adapter"})," for details."]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Upload/Download Status Type"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"type Progress = {\r\n  /** Total amount of data uploaded or downloaded */\r\n  total: number;\r\n  /** Completed data */\r\n  loaded: number;\r\n};\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var r=n(7294);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);