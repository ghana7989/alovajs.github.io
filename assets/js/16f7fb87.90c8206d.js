"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[5279],{8855:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var n=t(5893),r=t(1151);const c={title:"Manage Cache with IndexedDB",sidebar_position:30},i=void 0,s={id:"tutorial/best-practice/manage-cache-by-indexeddb",title:"Manage Cache with IndexedDB",description:"If you are developing applications that require extensive use of local cache, such as graphics editing applications, file management applications, etc., the low-capacity localStorage can no longer meet the development needs. At this time, you can use IndexedDB and alova for large-capacity local cache management.",source:"@site/docs/tutorial/06-best-practice/03-manage-cache-by-indexeddb.md",sourceDirName:"tutorial/06-best-practice",slug:"/tutorial/best-practice/manage-cache-by-indexeddb",permalink:"/tutorial/best-practice/manage-cache-by-indexeddb",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/06-best-practice/03-manage-cache-by-indexeddb.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Manage Cache with IndexedDB",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Skills",permalink:"/tutorial/best-practice/skills"},next:{title:"Multiple servers",permalink:"/tutorial/best-practice/multiple-servers"}},o={},d=[{value:"Create IndexedDB instance",id:"create-indexeddb-instance",level:2},{value:"save data",id:"save-data",level:2},{value:"retrieve data",id:"retrieve-data",level:2}];function l(e){const a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"If you are developing applications that require extensive use of local cache, such as graphics editing applications, file management applications, etc., the low-capacity localStorage can no longer meet the development needs. At this time, you can use IndexedDB and alova for large-capacity local cache management."}),"\n",(0,n.jsx)(a.p,{children:"This feature is mainly due to alova's [Controlled Cache] (/next-step/controlled-cache) function, which can implement custom cache management. Let's take a look at the practical steps."}),"\n",(0,n.jsxs)(a.p,{children:["Here is an ",(0,n.jsx)(a.a,{href:"/tutorial/example/controlled-cache-by-indexeddb",children:"example of managed cache with IndexedDB"})]}),"\n",(0,n.jsx)(a.p,{children:"Let's take custom management of large image data as an example."}),"\n",(0,n.jsx)(a.h2,{id:"create-indexeddb-instance",children:"Create IndexedDB instance"}),"\n",(0,n.jsx)(a.p,{children:"First create an IndexedDB instance to operate the local cache, and export the cache operate function."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",metastring:"title=db.js",children:"const dbVersion = 1;\r\nlet dbInstance;\r\nconst request = window.indexedDB.open('MyTestDatabase', dbVersion);\r\nrequest.onupgradeneeded = ({ target }) => {\r\n  dbInstance = target.result;\r\n  const imgStore = dbInstance.createObjectStore('images', {\r\n    autoIncrement: true\r\n  });\r\n  imgStore.createIndex('fileName', 'fileName', {\r\n    unique: true\r\n  });\r\n};\r\nrequest.onerror = () => {\r\n  throw new Error('Database open fail');\r\n};\r\nrequest.onsuccess = ({ target }) => {\r\n  dbInstance = target.result;\r\n};\r\n\r\n// Add new data to IndexedDB\r\nexport const addImage2Cache = async (fileName, data) => {\r\n  const tx = dbInstance.transaction(['images'], 'readwrite');\r\n  const request = tx.objectStore('images').add({\r\n    fileName,\r\n    data\r\n  });\r\n  return new Promise((resolve, reject) => {\r\n    request.onerror = () => {\r\n      reject('data add fail');\r\n    };\r\n    request.onsuccess = ({ result }) => {\r\n      resolve(result);\r\n    };\r\n  });\r\n};\r\n\r\n// Get file data according to fileName\r\nexport const getImageFromCache = async fileName => {\r\n  const tx = dbInstance.transaction(['images']);\r\n  const request = tx.objectStore('images').index('fileName').get(fileName);\r\n  return new Promise((resolve, reject) => {\r\n    request.onerror = () => {\r\n      reject('data add fail');\r\n    };\r\n    request.onsuccess = ({ target }) => {\r\n      resolve(target.result);\r\n    };\r\n  });\r\n};\n"})}),"\n",(0,n.jsx)(a.h2,{id:"save-data",children:"save data"}),"\n",(0,n.jsxs)(a.p,{children:["When saving data, we can save the cache in the ",(0,n.jsx)(a.code,{children:"transformData"})," of the method, because ",(0,n.jsx)(a.code,{children:"transformData"})," will only be triggered when the network request responds, but will not be triggered when the cache is hit. In the sample code, convert the image blob instance to base64 data, cache and return this base64 data."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript-api.js",children:"import { addImage2Cache } from './db';\r\n\r\nexport const image = fileName =>\r\n   alovaInst.Get(`/image/${fileName}`, {\r\n     // highlight-start\r\n     async transformData(imgBlob) {\r\n       // Asynchronously convert the blob to base64\r\n       const reader = new FileReader();\r\n       reader.readAsDataURL(imgBlob);\r\n       const base64Img = await new Promise(resolve => {\r\n         reader.onload = ({ target }) => {\r\n           resolve(target.result);\r\n         };\r\n       });\r\n\r\n       // Cache image data to IndexedDB\r\n       await addImage2Cache(fileName, base64Img);\r\n       return base64Img;\r\n     }\r\n     // highlight-end\r\n   });\n"})}),"\n",(0,n.jsx)(a.h2,{id:"retrieve-data",children:"retrieve data"}),"\n",(0,n.jsxs)(a.p,{children:["Specify ",(0,n.jsx)(a.code,{children:"localCache"})," of this method instance as an asynchronous function to change the cache into a controlled state, match the cache in IndexedDB in this function, and return it if it matches, otherwise return ",(0,n.jsx)(a.code,{children:"undefined"})," and continue to initiate a request to obtain data."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",metastring:"title=api.js",children:"import { getImageFromCache } from './db';\r\n\r\nexport const image = fileName =>\r\n  alovaInst.Get(`/image/${fileName}`, {\r\n    async transformData(imgBlob) {\r\n      //...\r\n    },\r\n\r\n    // highlight-start\r\n    async localCache() {\r\n      // get cache\r\n      const cache = await getImageFromCache(fileName);\r\n      return cache && cache.data;\r\n    }\r\n    // highlight-end\r\n  });\n"})}),"\n",(0,n.jsxs)(a.p,{children:["In this way, a basic custom cache management is basically completed. You can also save the expiration time of the cache, and judge whether it has expired when the cache is matched in ",(0,n.jsx)(a.code,{children:"localCache"}),", so as to realize the cache expiration function."]}),"\n",(0,n.jsx)(a.p,{children:"IndexedDB is just one example of managing caches asynchronously, you can also connect to your cache servers to manage them."})]})}function h(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,a,t)=>{t.d(a,{Z:()=>s,a:()=>i});var n=t(7294);const r={},c=n.createContext(r);function i(e){const a=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(c.Provider,{value:a},e.children)}}}]);