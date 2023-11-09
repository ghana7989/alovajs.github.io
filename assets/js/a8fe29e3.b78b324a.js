"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[6770],{1440:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=t(5893),o=t(1151);const c={title:"cache logger",sidebar_position:130},a=void 0,i={id:"tutorial/next-step/cache-logger",title:"cache logger",description:"v2.8.0+",source:"@site/docs/tutorial/06-next-step/13-cache-logger.md",sourceDirName:"tutorial/06-next-step",slug:"/tutorial/next-step/cache-logger",permalink:"/tutorial/next-step/cache-logger",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/06-next-step/13-cache-logger.md",tags:[],version:"current",sidebarPosition:130,frontMatter:{title:"cache logger",sidebar_position:130},sidebar:"tutorialSidebar",previous:{title:"Error logger",permalink:"/tutorial/next-step/error-logger"},next:{title:"Server-Side Rendering(SSR)",permalink:"/tutorial/next-step/ssr"}},s={},l=[{value:"Turn off printing cache logger",id:"turn-off-printing-cache-logger",level:2},{value:"Custom print cache logger",id:"custom-print-cache-logger",level:2}];function h(e){const n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{title:"version required",type:"info",children:(0,r.jsx)(n.p,{children:"v2.8.0+"})}),"\n",(0,r.jsx)(n.p,{children:"In order to facilitate debugging when using the interface cache, when the request hits the cache without sending a network request, the hit cache information will be printed on the console by default, which can solve some confusion when using the cache."}),"\n",(0,r.jsx)(n.p,{children:"If you don't want to print cache information or custom control print cache information in some cases (such as production environment), alova also provides support for them."}),"\n",(0,r.jsx)(n.h2,{id:"turn-off-printing-cache-logger",children:"Turn off printing cache logger"}),"\n",(0,r.jsxs)(n.p,{children:["Console printing can be turned off by setting ",(0,r.jsx)(n.code,{children:"cacheLogger"})," to ",(0,r.jsx)(n.code,{children:"false or null"})," when creating an alova instance."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const alovaInstance = createAlova({\r\n  //...\r\n  cacheLogger: false\r\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can also dynamically turn it on and off according to different environments."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const alovaInstance = createAlova({\r\n  //...\r\n  // Enable cache logger in the development environment\r\n  cacheLogger: process.env.NODE_ENV === 'development'\r\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"custom-print-cache-logger",children:"Custom print cache logger"}),"\n",(0,r.jsxs)(n.p,{children:["The cache logger is printed via ",(0,r.jsx)(n.code,{children:"console.log"})," by default. If ",(0,r.jsx)(n.code,{children:"console.log"})," or other purposes are not supported in your project environment, ",(0,r.jsx)(n.code,{children:"cacheLogger"})," can be specified as a function to customize the logger for processing cache hits."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const alovaInstance = createAlova({\r\n  //...\r\n  /**\r\n   * Custom cache logger function\r\n   * @param response hit cache data\r\n   * @param method the current method instance\r\n   * @param cacheMode cache mode memory or restore\r\n   * @param tag The tag in the restore mode has a value only when the tag is set in the corresponding cache\r\n   */\r\n  cacheLogger(response, method, cacheMode, tag) {\r\n    saveHitCache({\r\n      response,\r\n      method,\r\n      cacheMode,\r\n      tag\r\n    });\r\n  }\r\n});\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var r=t(7294);const o={},c=r.createContext(o);function a(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);