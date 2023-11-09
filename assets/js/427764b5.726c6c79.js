"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[1175],{3676:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=a(5893),n=a(1151);const o={title:"Automatic cache invalidation",sidebar_position:50},c=void 0,s={id:"tutorial/next-step/auto-invalidate-cache",title:"Automatic cache invalidation",description:"Active invalidation cache usage scenarios",source:"@site/docs/tutorial/06-next-step/06-auto-invalidate-cache.md",sourceDirName:"tutorial/06-next-step",slug:"/tutorial/next-step/auto-invalidate-cache",permalink:"/tutorial/next-step/auto-invalidate-cache",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/06-next-step/06-auto-invalidate-cache.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"Automatic cache invalidation",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Method instance matcher",permalink:"/tutorial/next-step/method-instance-matcher"},next:{title:"Manage additional state",permalink:"/tutorial/next-step/manage-extra-states"}},r={},l=[{value:"Active invalidation cache usage scenarios",id:"active-invalidation-cache-usage-scenarios",level:2},{value:"Usage scenarios of automatic invalidation cache",id:"usage-scenarios-of-automatic-invalidation-cache",level:2},{value:"Set automatic invalidation rules",id:"set-automatic-invalidation-rules",level:2},{value:"Invalidation source is set to method instance",id:"invalidation-source-is-set-to-method-instance",level:3},{value:"Match invalidating source by method name",id:"match-invalidating-source-by-method-name",level:3},{value:"Match invalidating source by regexp of method name",id:"match-invalidating-source-by-regexp-of-method-name",level:3},{value:"Combination setting validating source",id:"combination-setting-validating-source",level:3},{value:"hitSource data type",id:"hitsource-data-type",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"active-invalidation-cache-usage-scenarios",children:"Active invalidation cache usage scenarios"}),"\n",(0,i.jsxs)(t.p,{children:["Usually we use ",(0,i.jsx)(t.code,{children:"invalidateCache"})," to manually invalidate the cache, that is, call it to invalidate the cache after an operation is performed. This is actually a way to trace the target cache from the invalidation source, and it is more suitable for the case where the source of the target cache invalidation is single. ."]}),"\n",(0,i.jsxs)(t.p,{children:["For example, when clicking on a list item, entering the edit page and submitting to modify this data, the detail cache data of this data needs to be cleared. In this example, the submit modification operation is the invalidation source, and the detail cache data is the target cache. The details cache of a piece of data will only be invalidated when the modification is submitted, and there is no other source of failure to invalidate it. At this time, it will be more convenient to use ",(0,i.jsx)(t.code,{children:"invalidateCache"})," to manually clear the details cache."]}),"\n",(0,i.jsx)(t.h2,{id:"usage-scenarios-of-automatic-invalidation-cache",children:"Usage scenarios of automatic invalidation cache"}),"\n",(0,i.jsxs)(t.p,{children:["When there are multiple invalidation sources in a target cache, if we still use ",(0,i.jsx)(t.code,{children:"invalidateCache"}),", we need to call it in multiple invalidation sources to invalidate the same target cache, which is not only cumbersome but also increases maintainability costs, at this time we can Uniformly set invalidation source rules in the target cache, as long as the rules match, the target cache can be automatically invalidated. It is actually another dimension of active cache invalidation."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/29848971/218662359-d7b999ba-2203-40e0-8152-f4159a6fb8e3.png",alt:""})}),"\n",(0,i.jsx)(t.h2,{id:"set-automatic-invalidation-rules",children:"Set automatic invalidation rules"}),"\n",(0,i.jsxs)(t.p,{children:["Setting this rule is very simple, you can set the ",(0,i.jsx)(t.code,{children:"hitSource"})," parameter for it when creating a Method instance with caching."]}),"\n",(0,i.jsx)(t.h3,{id:"invalidation-source-is-set-to-method-instance",children:"Invalidation source is set to method instance"}),"\n",(0,i.jsx)(t.p,{children:"With a fixed method instance as the invalidation source, as long as the method instance or its clone instance succeeds, the target cache will be cleared automatically."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"alova.Get('/todo/1', {\r\n  //...\r\n  hitSource: alova.Post('/todo', {})\r\n});\n"})}),"\n",(0,i.jsx)(t.h3,{id:"match-invalidating-source-by-method-name",children:"Match invalidating source by method name"}),"\n",(0,i.jsx)(t.p,{children:"Like the method instance matcher, you can specify the name of the method in hitSource to match the failure source. Multiple failure sources can be set to the same name. When the method instance request with this name succeeds, the target cache will be automatically cleared."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"const methodSubmitTodo = data =>\r\n  alova.Post('/todo', data, {\r\n    name: 'submitTodo'\r\n  });\r\n\r\nalova.Get('/todo/1', {\r\n  //...\r\n  // Match the failure source whose method instance name is submitTodo\r\n  hitSource: 'submitTodo'\r\n});\n"})}),"\n",(0,i.jsx)(t.h3,{id:"match-invalidating-source-by-regexp-of-method-name",children:"Match invalidating source by regexp of method name"}),"\n",(0,i.jsx)(t.p,{children:"If the method instance name is not fixed, you can specify a regular expression in hitSource to match the method name, and the target cache will be automatically cleared when the matched method instance succeeds in the request."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"const methodSubmitTodo = data =>\r\n  alova.Post('/todo', data, {\r\n    name: 'prefix-submitTodo'\r\n  });\r\n\r\nalova.Get('/todo/1', {\r\n  //...\r\n  // Match all instances whose method instance name starts with prefix\r\n  hitSource: /^prefix/\r\n});\n"})}),"\n",(0,i.jsx)(t.h3,{id:"combination-setting-validating-source",children:"Combination setting validating source"}),"\n",(0,i.jsx)(t.p,{children:"If you want to use the above multiple rules to match failure sources, you can specify hitSource as an array, and the array item is any one of the above three rules, and the method instance that meets any one of the rules in the array will be matched."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"alova.Get('/todo/1', {\r\n  //...\r\n  // When the method instance request that satisfies any matching rule in the array succeeds, the cache will be invalidated\r\n  hitSource: [alova.Post('/todo', {}), 'submitTodo', /^prefix/]\r\n});\n"})}),"\n",(0,i.jsx)(t.h2,{id:"hitsource-data-type",children:"hitSource data type"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"type hitSource = string | RegExp | Method | (string | RegExp | Method)[];\n"})})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>c});var i=a(7294);const n={},o=i.createContext(n);function c(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);