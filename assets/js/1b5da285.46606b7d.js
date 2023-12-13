"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[6704],{3078:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=t(5893),a=t(1151),o=t(4866),s=t(5162);const i={title:"Mock data",sidebar_position:10},c=void 0,l={id:"tutorial/request-adapter/alova-mock",title:"Mock data",description:"This mock plug-in is an alova request adapter. Different from the traditional Proxy form, you can control the scope of use of mock data. You can control the global scope, a group of interface scopes, and even the enabling and use of a certain interface. Disabled, which is very useful in our actual business scenarios. Each iteration will add or modify a set of interfaces. We hope that the previous functions will still follow the developed interfaces, and let the new or modified interfaces Taking the simulation data, at this time, each developer can group the interfaces involved in this iteration into a group, and turn them on or off.",source:"@site/docs/tutorial/07-request-adapter/01-alova-mock.md",sourceDirName:"tutorial/07-request-adapter",slug:"/tutorial/request-adapter/alova-mock",permalink:"/tutorial/request-adapter/alova-mock",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/07-request-adapter/01-alova-mock.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Mock data",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Request adapter",permalink:"/category/request-adapter"},next:{title:"XMLHttpRequest Adapter",permalink:"/tutorial/request-adapter/alova-adapter-xhr"}},d={},u=[{value:"Features",id:"features",level:2},{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Define the mock interface",id:"define-the-mock-interface",level:3},{value:"Create mock request adapter",id:"create-mock-request-adapter",level:3},{value:"Paths match mode",id:"paths-match-mode",level:3},{value:"Practical advice",id:"practical-advice",level:2},{value:"Group interfaces per developer per version",id:"group-interfaces-per-developer-per-version",level:3},{value:"Exclude mock code in production",id:"exclude-mock-code-in-production",level:3},{value:"Use with mockjs",id:"use-with-mockjs",level:3},{value:"Convert mock data",id:"convert-mock-data",level:2},{value:"Convert response data",id:"convert-response-data",level:3},{value:"Convert Error Instance",id:"convert-error-instance",level:3}];function h(e){const r={admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"This mock plug-in is an alova request adapter. Different from the traditional Proxy form, you can control the scope of use of mock data. You can control the global scope, a group of interface scopes, and even the enabling and use of a certain interface. Disabled, which is very useful in our actual business scenarios. Each iteration will add or modify a set of interfaces. We hope that the previous functions will still follow the developed interfaces, and let the new or modified interfaces Taking the simulation data, at this time, each developer can group the interfaces involved in this iteration into a group, and turn them on or off."}),"\n",(0,n.jsx)(r.h2,{id:"features",children:"Features"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"\u2728Works seamlessly with alova"}),"\n",(0,n.jsx)(r.li,{children:"\u2728Arbitrary grouping of simulation requests to control global, group, and individual simulation interface enable and disable"}),"\n",(0,n.jsx)(r.li,{children:"\u2728Works with mockjs"}),"\n",(0,n.jsx)(r.li,{children:"\u2728Do not pollute the production environment"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"install",children:"Install"}),"\n",(0,n.jsxs)(o.Z,{groupId:"framework",children:[(0,n.jsx)(s.Z,{value:"1",label:"npm",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"npm install @alova/mock --save\n"})})}),(0,n.jsx)(s.Z,{value:"2",label:"yarn",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"yarn add @alova/mock\n"})})})]}),"\n",(0,n.jsx)(r.p,{children:"The following is the usage flow."}),"\n",(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r.h3,{id:"define-the-mock-interface",children:"Define the mock interface"}),"\n",(0,n.jsxs)(r.p,{children:["Use ",(0,n.jsx)(r.code,{children:"defineMock"})," to define a set of mock interfaces. You can directly specify the return response data in each mock interface, or specify the response data to be dynamically calculated for the callback function."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",metastring:"title=mockGrou1.js",children:"import { defineMock } from '@alova/mock';\r\n\r\nexport default defineMock(\r\n  {\r\n    // capture get request\r\n    '/todo': [1, 2, 3, 4],\r\n\r\n    // rest style request\r\n    '/todo/{id}': ({ params }) => {\r\n      const id = params.id;\r\n      // ...\r\n      return {\r\n        title: '...',\r\n        time: '10:00'\r\n      };\r\n    },\r\n\r\n    // capture post request\r\n    '[POST]/todo': ({ query, data }) => {\r\n      // ...\r\n      return { success: true };\r\n    },\r\n\r\n    // return more detailed information\r\n    '[POST]/todo': ({ query, data }) => {\r\n      //...\r\n      return {\r\n        status: 403,\r\n        statusText: 'unknown error',\r\n        responseHeaders: {\r\n          //...\r\n        },\r\n        body: {\r\n          success: true\r\n        }\r\n      };\r\n    },\r\n\r\n    // simulate network error\r\n    '[POST]/todo': ({ query, data }) => {\r\n      throw new Error('network error');\r\n    },\r\n\r\n    // Add `-` before the key to disable this mock interface\r\n    '-[DELETE]/todo/{id}': ({ params }) => {\r\n      // ...\r\n      return { success: true };\r\n    }\r\n  },\r\n  true\r\n); // The second parameter indicates whether to enable this group of mock interfaces, the default is true, and can be specified as false to close\n"})}),"\n",(0,n.jsx)(r.h3,{id:"create-mock-request-adapter",children:"Create mock request adapter"}),"\n",(0,n.jsxs)(r.p,{children:["Create a mock request adapter when calling ",(0,n.jsx)(r.code,{children:"createAlova"}),", and pass in the mock interface to complete."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:"import GlobalFetch from 'alova/GlobalFetch';\r\nimport { createAlovaMockAdapter } from '@alova/mock';\r\nimport mockGroup1 from './mockGroup1';\r\n\r\n// highlight-start\r\nconst mockAdapter = createAlovaMockAdapter([mockGroup1, /** ... */], {\r\n  // Global control whether the mock interface is enabled, the default is true\r\n  enable: true,\r\n\r\n  // Non-mock request adapter, used to send requests when the mock interface is not matched\r\n  httpAdapter: GlobalFetch(),\r\n\r\n  // mock interface response delay, in milliseconds\r\n  delay: 1000,\r\n\r\n  // Whether to print mock interface request information\r\n  mockRequestLogger: true,\r\n\r\n  // Simulation interface callback, data is the returned simulation data, you can use it to construct any object you want and return it to alova\r\n  // The following is the default callback function, which is suitable for requesting the adapter using GlobalFetch\r\n  // If you are using other request adapters, please customize the return data structure suitable for the adapter in the mock interface callback\r\n  onMockResponse: data => new Response(JSON.stringify(data))\r\n});\r\n// highlight-end\r\n\r\nexport const alovaInst = createAlova({\r\n  baseURL: 'http://xxx',\r\n\r\n  // Use the mock request adapter, if you need to switch adapters, please see the following practical suggestions\r\n  requestAdapter: mockAdapter,\r\n\r\n  statesHook: /** ... */\r\n});\n"})}),"\n",(0,n.jsx)(r.h3,{id:"paths-match-mode",children:"Paths match mode"}),"\n",(0,n.jsx)(r.admonition,{title:"version required",type:"info",children:(0,n.jsx)(r.p,{children:"1.5.0+"})}),"\n",(0,n.jsxs)(r.p,{children:["By default, the path defined in ",(0,n.jsx)(r.code,{children:"defineMock"})," is the full pathname of a url, see the following code snippet."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:"const alovaInst = createAlova({\r\n  baseURL: 'https://api.alovajs.org'\r\n  //...\r\n});\r\nalovaInst.Get('/user?id=1').send();\n"})}),"\n",(0,n.jsxs)(r.p,{children:["When the request path in the example is ",(0,n.jsx)(r.code,{children:"https://api.alovajs.org/user?id=1"}),", its full pathname is ",(0,n.jsx)(r.code,{children:"/user"}),", which can match ",(0,n.jsx)(r.code,{children:"/user"})," in ",(0,n.jsx)(r.code,{children:"defineMock"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"Usually this is enough, but when your baseURL is not just a domain name."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:"const alovaInst = createAlova({\r\n  baseURL: 'https://api.alovajs.org/v1/subname'\r\n  //...\r\n});\r\nalovaInst.Get('/user?id=1').send();\n"})}),"\n",(0,n.jsxs)(r.p,{children:["In this example, the request path is ",(0,n.jsx)(r.code,{children:"https://api.alovajs.org/v1/subname/user?id=1"}),", the matching path of the mock is ",(0,n.jsx)(r.code,{children:"/v1/subname/user"}),", and ",(0,n.jsx)(r.code,{children:"/ in the baseURL needs to be v1/subname"})," is also written together, which is slightly redundant when the number of interfaces is large."]}),"\n",(0,n.jsxs)(r.p,{children:["At this point, you can set ",(0,n.jsx)(r.code,{children:"matchMode"})," to ",(0,n.jsx)(r.code,{children:"methodurl"})," in ",(0,n.jsx)(r.code,{children:"createAlovaMockAdapter"}),", it will only match the url defined in the method instance, for example, the above instance will match ",(0,n.jsx)(r.code,{children:"/user?id=1"})," instead of The part in baseURL needs to be written. On the contrary, if the url in the method instance has a get parameter, it also needs to be written in the matching path of ",(0,n.jsx)(r.code,{children:"defineMock"}),", just like ",(0,n.jsx)(r.code,{children:"?id=1"})," here."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:"createAlovaMockAdapter([mockGroup1 /** ... */], {\r\n  //...\r\n  // highlight-start\r\n  matchMode: 'methodurl'\r\n  // highlight-end\r\n});\n"})}),"\n",(0,n.jsx)(r.h2,{id:"practical-advice",children:"Practical advice"}),"\n",(0,n.jsx)(r.h3,{id:"group-interfaces-per-developer-per-version",children:"Group interfaces per developer per version"}),"\n",(0,n.jsx)(r.p,{children:"In the team development scenario, we often only need to simulate some undeveloped interfaces for each version development, and use the test environment interface for the interface of the previous version. At this time, in order to achieve better simulation interface management, you can use The two dimensions, development version and developer, group interfaces."}),"\n",(0,n.jsxs)(r.p,{children:["For example, there are two developers named ",(0,n.jsx)(r.em,{children:"August"}),", ",(0,n.jsx)(r.em,{children:"kevin"}),", they are developing v1.1 product features, they can manage the mock interface like this."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",metastring:"title=August-v1.1.js",children:"import { defineMock } from '@alova/mock';\r\n\r\nexport default defineMock({\r\n  '/todo': [\r\n    /** */\r\n  ],\r\n  '[POST]/todo': ({ data }) => {\r\n    // ...\r\n    // return...\r\n  }\r\n  // ...\r\n});\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",metastring:"title=kevin-v1.1.js",children:"import { defineMock } from '@alova/mock';\r\n\r\nexport default defineMock({\r\n  '[PUT]/todo/add': ({ data }) => {\r\n    // ...\r\n    // return...\r\n  },\r\n  '[DELETE]/todo/remove': ({ data }) => {\r\n    // ...\r\n    // return...\r\n  }\r\n  // ...\r\n});\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",metastring:"title=request.js",children:"import Augustv1_1 from './August-v1.1';\r\nimport Keevenv1_1 from './kevin-v1.1';\r\n\r\nconst mockAdapter = createAlovaMockAdapter([Augustv1_1, kevinv1_1], {\r\n  httpAdapter: GlobalFetch(),\r\n  delay: 1000\r\n});\r\nexport const alovaInst = createAlova({\r\n  baseURL: 'http://xxx',\r\n  requestAdapter: mockAdapter\r\n  // ...\r\n});\n"})}),"\n",(0,n.jsx)(r.h3,{id:"exclude-mock-code-in-production",children:"Exclude mock code in production"}),"\n",(0,n.jsx)(r.p,{children:"The mock data is generally only used in the development environment, and will be switched to the actual interface in the production environment, so this mock code becomes useless in the production environment. At this time, we can exclude this code by judging the environment variables. , you just need to do:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:"const globalFetch = GlobalFetch();\r\nconst mockAdapter = createAlovaMockAdapter([mockGroup1, /** ... */], {\r\n  httpAdapter: globalFetch,\r\n  delay: 1000,\r\n});\r\n\r\nexport const alovaInst = createAlova({\r\n  baseURL: 'http://xxx',\r\n\r\n  // highlight-start\r\n  // In the production environment controlled by environment variables, the mock-related code will not be packaged in\r\n  requestAdapter: process.env.NODE_ENV === 'development' ? mockAdapter : globalFetch,\r\n  // highlight-end\r\n\r\n  statesHook: /** ... */\r\n});\n"})}),"\n",(0,n.jsx)(r.h3,{id:"use-with-mockjs",children:"Use with mockjs"}),"\n",(0,n.jsx)(r.p,{children:"If you don't want to write the mock data yourself, but use it with a mock js library (such as mockjs), you can do so."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:"import { defineMock } from '@alova/mock';\r\nimport Mock from 'mockjs';\r\n\r\nexport default defineMock({\r\n  '/api1': Mock.mock({\r\n    'id|1-10000': 100\r\n  })\r\n});\n"})}),"\n",(0,n.jsx)(r.h2,{id:"convert-mock-data",children:"Convert mock data"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"@alova/mock"})," By default, the response data is packaged as a Response instance, and the response header is packaged as a Headers instance by default, which is adapted for ",(0,n.jsx)(r.code,{children:"GlobalFetch"}),", but if you use other request adapters, you need to mock the data Convert to the corresponding format."]}),"\n",(0,n.jsx)(r.h3,{id:"convert-response-data",children:"Convert response data"}),"\n",(0,n.jsxs)(r.p,{children:["You can intercept the mock response data in the ",(0,n.jsx)(r.code,{children:"onMockResponse"})," field and return the transformed response data and response headers."]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"You can also throw an ERROR in onMockResponse to indicate a failure request."}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:"const mockAdapter = createAlovaMockAdapter(\r\n   [\r\n     /* mock data */\r\n   ],\r\n   {\r\n     //...\r\n     // highlight-start\r\n     onMockResponse(response, request, currentMethod) {\r\n       // response is the corresponding data set, which contains status, statusText, responseHeaders, body\r\n       // request is the request data, which contains query, params, headers, data\r\n       // currentMethod is the method instance of the current request\r\n       //...\r\n       // Return converted response data and response headers\r\n       return {\r\n         response: /** response data */,\r\n         headers: /** Response headers */\r\n       };\r\n     }\r\n     // highlight-end\r\n   }\r\n);\n"})}),"\n",(0,n.jsx)(r.h3,{id:"convert-error-instance",children:"Convert Error Instance"}),"\n",(0,n.jsxs)(r.p,{children:["You can intercept the error instance in the ",(0,n.jsx)(r.code,{children:"onMockError"})," field and return the converted error message."]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"You can also throw an ERROR in onMockResponse to indicate failure request."}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:"const mockAdapter = createAlovaMockAdapter(\r\n  [\r\n    /* mock data */\r\n  ],\r\n  {\r\n    //...\r\n    // highlight-start\r\n    onMockError(error, currentMethod) {\r\n      // error is an error instance\r\n      // currentMethod is the method instance of the current request\r\n      //...\r\n      // Return the converted error message collection\r\n    }\r\n    // highlight-end\r\n  }\r\n);\n"})})]})}function p(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5162:(e,r,t)=>{t.d(r,{Z:()=>s});t(7294);var n=t(4334);const a={tabItem:"tabItem_Ymn6"};var o=t(5893);function s(e){let{children:r,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,s),hidden:t,children:r})}},4866:(e,r,t)=>{t.d(r,{Z:()=>y});var n=t(7294),a=t(4334),o=t(2466),s=t(6550),i=t(469),c=t(1980),l=t(7392),d=t(12);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}(t);return function(e){const r=(0,l.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const a=(0,s.k6)(),o=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,c._X)(o),(0,n.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(a.location.search);r.set(o,e),a.replace({...a.location,search:r.toString()})}),[o,a])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,o=h(e),[s,c]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:o}))),[l,u]=m({queryString:t,groupId:a}),[f,v]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,o]=(0,d.Nk)(t);return[a,(0,n.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),g=(()=>{const e=l??f;return p({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{g&&c(g)}),[g]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),v(e)}),[u,v,o]),tabValues:o}}var v=t(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=t(5893);function b(e){let{className:r,block:t,selectedValue:n,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.o5)(),d=e=>{const r=e.currentTarget,t=c.indexOf(r),a=i[t].value;a!==n&&(l(r),s(a))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}r?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},r),children:i.map((e=>{let{value:r,label:t,attributes:o}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>c.push(e),onKeyDown:u,onClick:d,...o,className:(0,a.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function x(e){let{lazy:r,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:o.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function j(e){const r=f(e);return(0,k.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,k.jsx)(b,{...e,...r}),(0,k.jsx)(x,{...e,...r})]})}function y(e){const r=(0,v.Z)();return(0,k.jsx)(j,{...e,children:u(e.children)},String(r))}},1151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>s});var n=t(7294);const a={},o=n.createContext(a);function s(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);