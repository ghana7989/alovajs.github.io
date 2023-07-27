"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[9847],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Controlled Caching",sidebar_position:90},i=void 0,s={unversionedId:"tutorial/next-step/controlled-cache",id:"tutorial/next-step/controlled-cache",title:"Controlled Caching",description:"v2.1.0+",source:"@site/docs/tutorial/06-next-step/10-controlled-cache.md",sourceDirName:"tutorial/06-next-step",slug:"/tutorial/next-step/controlled-cache",permalink:"/tutorial/next-step/controlled-cache",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/06-next-step/10-controlled-cache.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{title:"Controlled Caching",sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"Serial request",permalink:"/tutorial/next-step/serial-request"},next:{title:"Download/Upload progress",permalink:"/tutorial/next-step/download-upload-progress"}},l={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"version required",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"v2.1.0+")),(0,a.kt)("p",null,"When sending a request, by default, it will first check whether there is matching cache data, and if it matches, it will use it as the response data to return. If in some scenarios, the user needs to use a custom cache, he must first use ",(0,a.kt)("inlineCode",{parentName:"p"},"setCache")," to synchronize It is only feasible to set cached data, which undoubtedly increases the burden on users. This is an uncontrolled cache."),(0,a.kt)("p",null,"If you want to use such ",(0,a.kt)("strong",{parentName:"p"},"IndexedDB")," to custom management cache data with uncontrolled caching, you may first pre-set the hit cache for upcoming requests, like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const getFile = fileName => {\n  const fileGetter = alovaInstance.GET(`/file/${fileName}`);\n  const tx = db.transaction(['files']);\n  const getRequest = tx.objectStore('files').get(fileName);\n  getRequest.onsuccess = ({ result }) => {\n    setCache(fileGetter, result);\n  };\n  return fileGetter;\n};\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u274c But the usage above is not recommended"),", for the following reasons:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Each call to ",(0,a.kt)("inlineCode",{parentName:"li"},"getFile")," will set up a cache, but fileGetter is not necessarily used to send requests;"),(0,a.kt)("li",{parentName:"ol"},"IndexedDB is an asynchronous interface. If the step of matching the cache occurs before IndexedDB triggers onsuccess, then the cached data will not be matched, and their order is unpredictable;"),(0,a.kt)("li",{parentName:"ol"},"Custom cache management tasks and methods are separate, but in fact they should be aggregated together;")),(0,a.kt)("p",null,"In this case, you can use controlled caching to solve the above problem. Using controlled caching is also very simple. You can set localCache in the method as an asynchronous or synchronous function, and return custom data as a hit in this function The cached data is returned."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const getFile = fileName =>\n  alovaInstance.GET(`/file/${fileName}`, {\n    // Controlled caching functions support asynchronous and synchronous functions\n    localCache() {\n      return new Promise((resolve, reject) => {\n        const tx = db.transaction(['files']);\n        const getRequest = tx.objectStore('files').get(fileName);\n        getRequest.onsuccess = resolve;\n        getRequest.onerror = reject;\n      });\n    }\n  });\n")),(0,a.kt)("p",null,"If you want to continue sending requests, you can return undefined or no data in ",(0,a.kt)("inlineCode",{parentName:"p"},"localCache"),", which is useful in case of a cache miss when customizing the managed cache."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You can also use ",(0,a.kt)("a",{parentName:"li",href:"../learning/transform-response-data"},"special usage of transformData")," to implement custom cache storage tasks."),(0,a.kt)("li",{parentName:"ol"},"When used in usehooks, throwing an error in the ",(0,a.kt)("inlineCode",{parentName:"li"},"localCache")," function will trigger ",(0,a.kt)("inlineCode",{parentName:"li"},"onError"),", and when using the method instance to request directly, a rejected promise will be returned.")))}p.isMDXComponent=!0}}]);