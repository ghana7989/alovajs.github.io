"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[7951],{5726:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var n=a(5893),o=a(1151),i=a(2778),s=a(4243),r=a(718);const l={title:"Cache mode",sidebar_position:60},c=void 0,d={id:"tutorial/learning/response-cache",title:"Cache mode",description:"The cache mode can make better use of server-side data multiple times without sending a request to get data every time a request is made. alova provides three cache modes to meet different cache scenarios, namely memory mode, cache placeholder mode, and restore mode. The cache mode can be set at different granularities such as global or request level. When set globally, all Method instances created from the same alova instance will inherit the setting.",source:"@site/docs/tutorial/03-learning/06-response-cache.md",sourceDirName:"tutorial/03-learning",slug:"/tutorial/learning/response-cache",permalink:"/tutorial/learning/response-cache",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/03-learning/06-response-cache.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{title:"Cache mode",sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"Data fetch",permalink:"/tutorial/learning/use-fetcher"},next:{title:"Transform response data",permalink:"/tutorial/learning/transform-response-data"}},h={},m=[{value:"Memory mode (default)",id:"memory-mode-default",level:2},{value:"Memory mode example",id:"memory-mode-example",level:3},{value:"Cache placeholder mode",id:"cache-placeholder-mode",level:2},{value:"Cache placeholder mode example",id:"cache-placeholder-mode-example",level:3},{value:"Restore mode",id:"restore-mode",level:2},{value:"Restore mode example",id:"restore-mode-example",level:3},{value:"What should I do if the data changes in restore mode?",id:"what-should-i-do-if-the-data-changes-in-restore-mode",level:3},{value:"Global setting cache mode",id:"global-setting-cache-mode",level:2},{value:"Disable caching mode globally",id:"disable-caching-mode-globally",level:2},{value:"Expiration time type",id:"expiration-time-type",level:2},{value:"Relative Time",id:"relative-time",level:3},{value:"absolute time",id:"absolute-time",level:3},{value:"Cache key automatic maintenance",id:"cache-key-automatic-maintenance",level:2}];function p(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The cache mode can make better use of server-side data multiple times without sending a request to get data every time a request is made. ",(0,n.jsx)(t.code,{children:"alova"})," provides three cache modes to meet different cache scenarios, namely memory mode, cache placeholder mode, and restore mode. The cache mode can be set at different granularities such as global or request level. When set globally, all Method instances created from the same alova instance will inherit the setting."]}),"\n",(0,n.jsx)(t.admonition,{title:"note",type:"info",children:(0,n.jsx)(t.p,{children:"Whether to use the cache mode and which cache mode to use depends on the scenario. The usage scenarios of different cache modes will be mentioned below when introducing different cache modes separately."})}),"\n",(0,n.jsx)(t.h2,{id:"memory-mode-default",children:"Memory mode (default)"}),"\n",(0,n.jsx)(t.p,{children:"The memory mode puts the cache in the memory, which means that the page cache is invalidated when it is refreshed, and is the most commonly used cache mode."}),"\n",(0,n.jsxs)(t.p,{children:["Memory mode is generally used to solve the performance consumption caused by frequent requests for the same data in a short period of time (minutes or seconds). For example, when you are writing a todo details page, you may think that users will frequently click on the todo list Check the details, if the user does not repeatedly request the interface when repeatedly viewing a certain detail, and can return the data immediately, the colleague who improves the response speed also reduces the pressure on the server. At this point we can set the response data cache for a todo detail ",(0,n.jsx)(t.code,{children:"Method"})," instance."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"alovaInstance.GET('/todo/list', {\r\n  //...\r\n  // highlight-start\r\n  localCache: {\r\n    // Set cache mode to memory mode\r\n    mode: 'memory',\r\n\r\n    // unit is milliseconds\r\n    // When set to `Infinity`, it means that the data will never expire, and when it is set to 0 or a negative number, it means no caching\r\n    expire: 60 * 10 * 1000\r\n  }\r\n  // highlight-end\r\n});\n"})}),"\n",(0,n.jsx)(t.p,{children:"Memory mode is the default mode, you can abbreviate like this"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"alovaInstance.GET('/todo/list', {\r\n  //...\r\n  // highlight-start\r\n  localCache: 60 * 10 * 1000\r\n  // highlight-end\r\n});\n"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"GET requests will set the memory cache time of 300000ms (5 minutes) by default, and developers can also customize the settings."}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"If you need to set the caching mode globally, see [Global setting cache mode] at the bottom of this section (#Global setting cache mode)"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"memory-mode-example",children:"Memory mode example"}),"\n",(0,n.jsx)(i.Z,{}),"\n",(0,n.jsx)(t.h2,{id:"cache-placeholder-mode",children:"Cache placeholder mode"}),"\n",(0,n.jsx)(t.p,{children:"This cache mode is used when you don't want to display the Loading icon every time the application is entered, but you want to use the old data instead, you can use the cache occupancy mode, which has a better experience than Loading."}),"\n",(0,n.jsxs)(t.p,{children:["In the cache occupancy mode, ",(0,n.jsx)(t.code,{children:"data"})," will be immediately assigned the old data of the last cache. You can judge that if there is old data, use it to replace the Loading display. At the same time, it will send a request to obtain the latest data and update the cache, so as to achieve In order to quickly display the actual data, and obtain the latest data."]}),"\n",(0,n.jsxs)(t.p,{children:["Set on ",(0,n.jsx)(t.code,{children:"Method"})," instances:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"const todoListGetter = alovaInstance.Get('/todo/list', {\r\n  //...\r\n  // highlight-start\r\n  localCache: {\r\n    // Set the cache mode to persistent placeholder mode\r\n    mode: 'placeholder',\r\n    // cache time\r\n    expire: 60 * 10 * 1000\r\n  }\r\n  // highlight-end\r\n});\n"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"If you need to set the caching mode globally, see [Global setting cache mode] at the bottom of this section (#Global setting cache mode)"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"cache-placeholder-mode-example",children:"Cache placeholder mode example"}),"\n",(0,n.jsx)(s.Z,{}),"\n",(0,n.jsx)(t.h2,{id:"restore-mode",children:"Restore mode"}),"\n",(0,n.jsx)(t.p,{children:"In this mode, the server-side cached data will be persistent. If the expiration time is not reached, even if the page cache is refreshed, it will not be invalidated. It is generally used for some data that requires server-side management but is basically unchanged, such as the specific dates of annual holidays. It is different, but it will not change again. In this scenario, we only need to set the cache expiration time to the last moment of this year."}),"\n",(0,n.jsxs)(t.p,{children:["Set on ",(0,n.jsx)(t.code,{children:"Method"})," instances:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"const todoListGetter = alovaInstance.Get('/todo/list', {\r\n  //...\r\n  // highlight-start\r\n  localCache: {\r\n    // Set the cache mode to persistent mode\r\n    mode: 'restore',\r\n    // cache time\r\n    expire: 60 * 10 * 1000\r\n  }\r\n  // highlight-end\r\n});\n"})}),"\n",(0,n.jsx)(t.admonition,{title:"Caution",type:"warning",children:(0,n.jsxs)(t.p,{children:["When request body is special data such as ",(0,n.jsx)(t.strong,{children:"FormData"}),", ",(0,n.jsx)(t.strong,{children:"Blob"}),", ",(0,n.jsx)(t.strong,{children:"ArrayBuffer"}),", ",(0,n.jsx)(t.strong,{children:"URLSearchParams"}),", ",(0,n.jsx)(t.strong,{children:"ReadableStream"}),", it will be considered that you intend to communicate with server. In this case would not cache data."]})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"If you need to set the caching mode globally, see [Global setting cache mode] at the bottom of this section (#Global setting cache mode)"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"restore-mode-example",children:"Restore mode example"}),"\n",(0,n.jsx)(r.Z,{}),"\n",(0,n.jsx)(t.h3,{id:"what-should-i-do-if-the-data-changes-in-restore-mode",children:"What should I do if the data changes in restore mode?"}),"\n",(0,n.jsxs)(t.p,{children:["When the ",(0,n.jsx)(t.code,{children:"Method"})," instance in restore mode is set, it may be due to the change of the interface data or the logic change of the front-end processing response data. At this time, it is necessary to let the user re-cache the changed data after publishing the application. At this time, you can use ",(0,n.jsx)(t.code,{children:"tag"})," The attribute sets the cache tag. Each piece of persistent data contains a ",(0,n.jsx)(t.code,{children:"tag"})," identifier. When the ",(0,n.jsx)(t.code,{children:"tag"})," changes, the original persistent data will become invalid, and new data will be obtained again, and the new ",(0,n.jsx)(t.code,{children:"tag"})," will be used for identification ."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"const todoListGetter = alovaInstance.Get('/todo/list', {\r\n  //...\r\n  localCache: {\r\n    mode: 'restore',\r\n    expire: 60 * 10 * 1000,\r\n\r\n    // highlight-start\r\n    // Add or modify the tag parameter, the cached data will be invalid\r\n    // It is recommended to use version number management\r\n    tag: 'v1'\r\n    // highlight-end\r\n  }\r\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"global-setting-cache-mode",children:"Global setting cache mode"}),"\n",(0,n.jsx)(t.admonition,{title:"version required",type:"info",children:(0,n.jsx)(t.p,{children:"v1.3.0+"})}),"\n",(0,n.jsxs)(t.p,{children:["The above settings are all set separately on ",(0,n.jsx)(t.code,{children:"Method"}),". If you need to set the cache mode globally, you can do it as follows:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"const alovaInstance = createAlova({\r\n  //...\r\n  // highlight-start\r\n  localCache: {\r\n    // Uniformly set the cache mode of POST\r\n    POST: {\r\n      mode: 'placeholder',\r\n      expire: 60 * 10 * 1000\r\n    },\r\n    // Uniformly set the cache mode of the HEAD request\r\n    HEAD: 60 * 10 * 1000\r\n  }\r\n  // highlight-end\r\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Henceforth, the ",(0,n.jsx)(t.code,{children:"Method"})," instance created by ",(0,n.jsx)(t.code,{children:"alovaInstance"})," instance will use this cache setting by default, and it can also be overridden in the ",(0,n.jsx)(t.code,{children:"Method"})," instance."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Note: When the cache mode is set globally, the original 5-minute GET cache mode will be overwritten."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"disable-caching-mode-globally",children:"Disable caching mode globally"}),"\n",(0,n.jsxs)(t.p,{children:["If you don't want to use any request cache in your project, you can turn it off globally. If you want to use it only in a few specific requests, you can also turn it off globally and set it in the specified ",(0,n.jsx)(t.code,{children:"Method"})," instance ."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"const alovaInstance = createAlova({\r\n  //...\r\n  // highlight-start\r\n  // Set to null to disable all request caching globally\r\n  localCache: null\r\n  // highlight-end\r\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"expiration-time-type",children:"Expiration time type"}),"\n",(0,n.jsxs)(t.p,{children:["There are two types of expiration time to choose from, namely ",(0,n.jsx)(t.strong,{children:"relative time"})," and ",(0,n.jsx)(t.strong,{children:"absolute time"})]}),"\n",(0,n.jsx)(t.h3,{id:"relative-time",children:"Relative Time"}),"\n",(0,n.jsxs)(t.p,{children:["That is, the time to expire when the cached data is saved, in ",(0,n.jsx)(t.strong,{children:"milliseconds"}),", the above examples are all of this type."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"localCache: 60 * 10 * 1000;\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"localCache: {\r\nexpire: 60 * 10 * 1000,\r\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"absolute-time",children:"absolute time"}),"\n",(0,n.jsx)(t.p,{children:"With a specific time point as the expiration time, the cache will expire at the set time point"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"localCache: new Date('2030-01-01');\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"localCache: {\r\n  expire: new Date('2030-01-01');\r\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"cache-key-automatic-maintenance",children:"Cache key automatic maintenance"}),"\n",(0,n.jsx)(t.p,{children:"The key of the response data cache is uniquely identified by the combination of the request method (method), request address (url), request header parameters (headers), url parameters (params), and request body parameters (requestBody) of the method instance. Any information or Different positions will be treated as different keys."})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},2778:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(3894),o=(a(7294),a(5893));const i=()=>(0,o.jsx)(n.Z,{src:"https://codesandbox.io/p/sandbox/github/alovajs/alova-examples/tree/main/packages/memory-cache?embed=1&file=%2Fsrc%2FApp.vue"})},4243:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(3894),o=(a(7294),a(5893));const i=()=>(0,o.jsx)(n.Z,{src:"https://codesandbox.io/p/sandbox/github/alovajs/alova-examples/tree/main/packages/storage-placeholder?embed=1&file=%2Fsrc%2FApp.vue"})},718:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(3894),o=(a(7294),a(5893));const i=()=>(0,o.jsx)(n.Z,{src:"https://codesandbox.io/p/sandbox/github/alovajs/alova-examples/tree/main/packages/storage-restore?embed=1&file=%2Fsrc%2FApp.vue"})},3894:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(5893);const o=e=>{let{src:t}=e;return(0,n.jsx)("iframe",{src:t,style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},1151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>s});var n=a(7294);const o={},i=n.createContext(o);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);