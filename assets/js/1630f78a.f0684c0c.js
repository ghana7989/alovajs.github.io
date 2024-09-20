"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[7193],{73293:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(85893),s=n(11151);const o={title:"Manage APIs"},r=void 0,i={id:"tutorial/project/best-practice/manage-apis",title:"Manage APIs",description:"In a project, we may need to use hundreds or thousands of request APIs, so managing these request APIs becomes particularly important.",source:"@site/docs/tutorial/07-project/01-best-practice/01-manage-apis.md",sourceDirName:"tutorial/07-project/01-best-practice",slug:"/tutorial/project/best-practice/manage-apis",permalink:"/tutorial/project/best-practice/manage-apis",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/07-project/01-best-practice/01-manage-apis.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Manage APIs"},sidebar:"tutorial",previous:{title:"Best Practices",permalink:"/tutorial/project/best-practice/"},next:{title:"Building Client-Server Interaction Layer",permalink:"/tutorial/project/best-practice/csil"}},d={},c=[{value:"api file structure",id:"api-file-structure",level:2},{value:"Manage alova instance",id:"manage-alova-instance",level:2},{value:"Manage method instances",id:"manage-method-instances",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"In a project, we may need to use hundreds or thousands of request APIs, so managing these request APIs becomes particularly important."}),"\n",(0,a.jsxs)(t.p,{children:["You may write the request code like the code snippet in ",(0,a.jsx)(t.a,{href:"/tutorial/getting-started/quick-start",children:"quick start"}),". all codes in one file."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const { loading, data, error } = useRequest(\n  alovaInstance.Get('https://api.alovajs.org/profile', {\n    params: {\n      id: 1\n    }\n  })\n);\n"})}),"\n",(0,a.jsx)(t.p,{children:"This is just for beginners to understand, but in actual projects, we do not recommend this, because the method instance is not only used to send requests, it can also be used to operate cache and state, the above usage will make these request api become It's unmanageable, and if you think it's wrong, you might forget a little:"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The key of the response data cache is uniquely identified by the combination of the method instance\u2019s request method (method), request address (url), request header parameters (headers), url parameters (params), and request body parameters (requestBody). Or different positions will be treated as different keys."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Therefore, in actual projects, method instances should be managed, and alova instances can also be managed uniformly."}),"\n",(0,a.jsx)(t.h2,{id:"api-file-structure",children:"api file structure"}),"\n",(0,a.jsxs)(t.p,{children:["First of all, your project needs a folder that uniformly stores method instances and alova instances, for example called ",(0,a.jsx)(t.code,{children:"api"}),", the following is a common api management structure, and you can also use any structure suitable for the project."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"|-api\n| |-index.js -> contains all alova instances\n| |-methods\n| | |-user.js\n| | |-article.js\n| | |-order.js\n| | |-...\n|-...\n"})}),"\n",(0,a.jsx)(t.p,{children:"In short, your project should use a suitable folder structure to organize them."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Next, take vue as an example to show the sample code"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"manage-alova-instance",children:"Manage alova instance"}),"\n",(0,a.jsxs)(t.p,{children:["Your project may need to communicate with different servers, or you may need to use special request schemes in specific requests, or use different response interceptors, etc. All of these require creating and maintaining multiple alova instances in the project. It is recommended to Use a separate file to manage them, for example in the above api management structure, will use ",(0,a.jsx)(t.code,{children:"api/index.js"})," to manage."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:"title=api/index.js",children:"import { createAlova } from 'alova';\nimport VueHook from 'alova/vue';\nimport adapterFetch from 'alova/fetch';\nimport { axiosRequestAdapter } from '@alova/adapter-axios';\n\n// user alova instance\nexport const userAlova = createAlova({\n  baseURL: 'https://api-user.alovajs.org',\n  statesHook: VueHook,\n  requestAdapter: adapterFetch(),\n  async responded(method) {\n    method.config.headers.token = 'user token';\n  }\n});\n\n// order alova instance\nexport const orderAlova = createAlova({\n  baseURL: 'https://api-order.alovajs.org',\n  statesHook: VueHook,\n  requestAdapter: adapterFetch(),\n  async responded(method) {\n    method.config.headers.token = 'order token';\n  }\n});\n\n// upload alova instance\nexport const uploadAlova = createAlova({\n  baseURL: 'https://api-order.alovajs.org',\n  statesHook: VueHook,\n  requestAdapter: axiosRequestAdapter()\n});\n"})}),"\n",(0,a.jsx)(t.h2,{id:"manage-method-instances",children:"Manage method instances"}),"\n",(0,a.jsxs)(t.p,{children:["We can use different js files to classify and manage method instances. For example, in the above api management structure, ",(0,a.jsx)(t.code,{children:"api/methods/user.js"})," will be used to manage method instances related to user information, and ",(0,a.jsx)(t.code,{children:"api/methods/order.js"})," will be used `A method instance related to order management."]}),"\n",(0,a.jsx)(t.p,{children:"In addition, as mentioned above, in addition to sending requests, method instances can also be used to operate caches and states. In order to ensure the number and order of request parameters, we can use a function to correspond to a request API, through The corresponding method instance is returned in the form of incoming request parameters. As long as the incoming parameters are the same, the request information and parameter order of the method instance are also the same, so as to ensure that the method instance used to operate the cache and state is correct."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:"title=api/methods/user.js",children:"import { userAlova } from '..';\n\n// Get user information\nexport const getUserInfo = id => userAlova.Get('/user/' + id);\n\n// Edit user information\nexport const editUserInfo = (name, age, mobile) =>\n  userAlova.Post('/user', {\n    name,\n    age,\n    mobile\n  });\n\n// remove user\nexport const removeUser = id => userAlova.Delete('/user/' + id);\n\n//...\n"})}),"\n",(0,a.jsxs)(t.p,{children:["In the ",(0,a.jsx)(t.strong,{children:"user component"}),", the method function can be directly imported for use, and the method function can be used again to invalidate the corresponding cache after calling ",(0,a.jsx)(t.code,{children:"invalidateCache"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",metastring:"title=views/user.vue",children:'<template>\n  <div v-if="loading">Loading...</div>\n  <div v-else-if="error">{{ error.message }}</div>\n  <template v-else>\n    <div>\n      <label>name:</label>\n      <input v-model="data.name" />\n    </div>\n    <div>\n      <label>age:</label>\n      <input v-model="data.age" />\n    </div>\n    <div>\n      <label>mobile:</label>\n      <input v-model="data.mobile" />\n    </div>\n    <button\n      @click="handleEdit"\n      :loading="editing">\n      Edit\n    </button>\n  </template>\n</template>\n<script setup>\n  import { getUserInfo, editUserInfo } from \'@/api/methods/user\';\n  import { useRequest, invalidateCache } from \'alova\';\n\n  const userId = 1; // use 1 as userId\n  const { loading, error, data } = useRequest(getUserInfo(userId));\n\n  // Submit edit information\n  const {\n    loading: editing,\n    send: handleEdit,\n    onSuccess\n  } = useRequest(() => editUserInfo(data.name, data.age, data.mobile), {\n    immediate: false\n  });\n  onSuccess(() => {\n    invalidateCache(getUserInfo(userId));\n  });\n<\/script>\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var a=n(67294);const s={},o=a.createContext(s);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);