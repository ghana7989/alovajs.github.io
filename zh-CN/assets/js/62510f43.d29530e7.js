"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[9368],{9378:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=n(5893),a=n(1151);const o={title:"\u7ba1\u7406APIs",sidebar_position:10},s=void 0,i={id:"tutorial/best-practice/manage-apis",title:"\u7ba1\u7406APIs",description:"\u5728\u4e00\u4e2a\u9879\u76ee\u4e2d\uff0c\u6211\u4eec\u53ef\u80fd\u9700\u8981\u4f7f\u7528\u5230\u6210\u767e\u4e0a\u5343\u4e2a\u8bf7\u6c42 api\uff0c\u56e0\u6b64\u7ba1\u7406\u8fd9\u4e9b\u8bf7\u6c42 api \u53d8\u5f97\u5c24\u4e3a\u91cd\u8981\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/06-best-practice/01-manage-apis.md",sourceDirName:"tutorial/06-best-practice",slug:"/tutorial/best-practice/manage-apis",permalink:"/zh-CN/tutorial/best-practice/manage-apis",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/06-best-practice/01-manage-apis.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\u7ba1\u7406APIs",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Best practice",permalink:"/zh-CN/category/best-practice"},next:{title:"\u4f7f\u7528\u6280\u5de7",permalink:"/zh-CN/tutorial/best-practice/skills"}},l={},d=[{value:"api \u6587\u4ef6\u7ed3\u6784",id:"api-\u6587\u4ef6\u7ed3\u6784",level:2},{value:"\u7ba1\u7406 alova \u5b9e\u4f8b",id:"\u7ba1\u7406-alova-\u5b9e\u4f8b",level:2},{value:"\u7ba1\u7406 method \u5b9e\u4f8b",id:"\u7ba1\u7406-method-\u5b9e\u4f8b",level:2}];function c(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"\u5728\u4e00\u4e2a\u9879\u76ee\u4e2d\uff0c\u6211\u4eec\u53ef\u80fd\u9700\u8981\u4f7f\u7528\u5230\u6210\u767e\u4e0a\u5343\u4e2a\u8bf7\u6c42 api\uff0c\u56e0\u6b64\u7ba1\u7406\u8fd9\u4e9b\u8bf7\u6c42 api \u53d8\u5f97\u5c24\u4e3a\u91cd\u8981\u3002"}),"\n",(0,t.jsxs)(r.p,{children:["\u4f60\u53ef\u80fd\u4f1a\u50cf ",(0,t.jsx)(r.a,{href:"/tutorial/getting-started/first-request",children:"\u7b2c\u4e00\u4e2a\u8bf7\u6c42"})," \u4e2d\u7684\u4ee3\u7801\u7247\u6bb5\u90a3\u6837\u7f16\u5199\u8bf7\u6c42\u53d1\u9001\u7684\u4ee3\u7801\uff0c\u5373\u8c03\u7528 useRequest \u7684\u540c\u65f6\u4f7f\u7528 alova \u5b9e\u4f8b\u521b\u5efa method \u5b9e\u4f8b\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"const { loading, data, error } = useRequest(\r\n  alovaInstance.Get('https://api.alovajs.org/profile', {\r\n    params: {\r\n      id: 1\r\n    }\r\n  })\r\n);\n"})}),"\n",(0,t.jsx)(r.p,{children:"\u8fd9\u53ea\u662f\u4fbf\u4e8e\u521d\u5b66\u8005\u7406\u89e3\uff0c\u4f46\u5728\u5b9e\u9645\u9879\u76ee\u4e2d\uff0c\u6211\u4eec\u5e76\u4e0d\u63a8\u8350\u8fd9\u6837\u505a\uff0c\u56e0\u4e3a method \u5b9e\u4f8b\u7684\u7528\u9014\u4e0d\u4ec5\u7528\u4e8e\u53d1\u9001\u8bf7\u6c42\uff0c\u5b83\u8fd8\u53ef\u4ee5\u7528\u4e8e\u64cd\u4f5c\u7f13\u5b58\u548c\u72b6\u6001\uff0c\u4e0a\u9762\u7684\u7528\u6cd5\u4f1a\u8ba9\u8fd9\u4e9b\u8bf7\u6c42 api \u53d8\u5f97\u96be\u4ee5\u7ba1\u7406\uff0c\u5982\u679c\u4f60\u8ba4\u4e3a\u4e0d\u5bf9\u7684\u8bdd\uff0c\u4f60\u53ef\u80fd\u5fd8\u8bb0\u4e00\u70b9\uff1a"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"\u54cd\u5e94\u6570\u636e\u7f13\u5b58\u7684 key \u662f\u7531 method \u5b9e\u4f8b\u7684\u8bf7\u6c42\u65b9\u6cd5(method)\u3001\u8bf7\u6c42\u5730\u5740(url)\u3001\u8bf7\u6c42\u5934\u53c2\u6570(headers)\u3001url \u53c2\u6570(params)\u3001\u8bf7\u6c42\u4f53\u53c2\u6570(requestBody)\u7ec4\u5408\u4f5c\u4e3a\u552f\u4e00\u6807\u8bc6\uff0c\u4efb\u610f\u4e00\u4e2a\u4fe1\u606f\u6216\u4f4d\u7f6e\u4e0d\u540c\u90fd\u5c06\u88ab\u5f53\u505a\u4e0d\u540c\u7684 key\u3002"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"\u56e0\u6b64\uff0c\u5728\u5b9e\u9645\u9879\u76ee\u4e2d\u5e94\u8be5\u628a method \u5b9e\u4f8b\u8fdb\u884c\u7ba1\u7406\uff0c\u4e5f\u53ef\u4ee5\u7edf\u4e00\u7ba1\u7406 alova \u5b9e\u4f8b\u3002"}),"\n",(0,t.jsx)(r.h2,{id:"api-\u6587\u4ef6\u7ed3\u6784",children:"api \u6587\u4ef6\u7ed3\u6784"}),"\n",(0,t.jsxs)(r.p,{children:["\u9996\u5148\uff0c\u4f60\u7684\u9879\u76ee\u9700\u8981\u4e00\u4e2a\u7edf\u4e00\u5b58\u653e method \u5b9e\u4f8b\u548c alova \u5b9e\u4f8b\u7684\u6587\u4ef6\u5939\uff0c\u4f8b\u5982\u53eb\u505a",(0,t.jsx)(r.code,{children:"api"}),"\uff0c\u4ee5\u4e0b\u4e3a\u4e00\u4e2a\u5e38\u89c1\u7684 api \u7ba1\u7406\u7ed3\u6784\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u9002\u5408\u9879\u76ee\u7684\u4efb\u4f55\u7ed3\u6784\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"|-api\r\n| |-index.js -> \u5305\u542b\u6240\u6709\u7684alova\u5b9e\u4f8b\r\n| |-methods\r\n| | |-user.js\r\n| | |-article.js\r\n| | |-order.js\r\n| | |-...\r\n|-...\n"})}),"\n",(0,t.jsx)(r.p,{children:"\u603b\u4e4b\uff0c\u4f60\u7684\u9879\u76ee\u5e94\u8be5\u4f7f\u7528\u9002\u5408\u7684\u6587\u4ef6\u5939\u7ed3\u6784\u5c06\u5b83\u4eec\u7ba1\u7406\u8d77\u6765\u3002"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"\u63a5\u4e0b\u6765\u4ee5 vue \u4e3a\u4f8b\u5c55\u793a\u793a\u4f8b\u4ee3\u7801"}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"\u7ba1\u7406-alova-\u5b9e\u4f8b",children:"\u7ba1\u7406 alova \u5b9e\u4f8b"}),"\n",(0,t.jsxs)(r.p,{children:["\u4f60\u7684\u9879\u76ee\u53ef\u80fd\u9700\u8981\u548c\u4e0d\u540c\u7684\u670d\u52a1\u5668\u901a\u4fe1\uff0c\u4e5f\u53ef\u80fd\u9700\u8981\u5728\u7279\u5b9a\u7684\u8bf7\u6c42\u4e2d\u4f7f\u7528\u7279\u6b8a\u7684\u8bf7\u6c42\u65b9\u6848\uff0c\u6216\u8005\u4f7f\u7528\u4e0d\u540c\u7684\u54cd\u5e94\u62e6\u622a\u5668\u7b49\uff0c\u8fd9\u4e9b\u90fd\u9700\u8981\u5728\u9879\u76ee\u4e2d\u521b\u5efa\u5e76\u7ef4\u62a4\u591a\u4e2a alova \u5b9e\u4f8b\uff0c\u5efa\u8bae\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u5355\u72ec\u7684\u6587\u4ef6\u6765\u7ba1\u7406\u5b83\u4eec\uff0c\u4f8b\u5982\u5728\u4e0a\u9762\u7684 api \u7ba1\u7406\u7ed3\u6784\u4e2d\uff0c\u5c06\u4f7f\u7528",(0,t.jsx)(r.code,{children:"api/index.js"}),"\u6765\u7ba1\u7406\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",metastring:"title=api/index.js",children:"import { createAlova } from 'alova';\r\nimport VueHook from 'alova/vue';\r\nimport GlobalFetch from 'alova/GlobalFetch';\r\nimport { axiosRequestAdapter } from '@alova/adapter-axios';\r\n\r\n// user alova instance\r\nexport const userAlova = createAlova({\r\n  baseURL: 'https://api-user.alovajs.org',\r\n  statesHook: VueHook,\r\n  requestAdapter: GlobalFetch(),\r\n  async responded(method) {\r\n    method.config.headers.token = 'user token';\r\n  }\r\n});\r\n\r\n// order alova instance\r\nexport const orderAlova = createAlova({\r\n  baseURL: 'https://api-order.alovajs.org',\r\n  statesHook: VueHook,\r\n  requestAdapter: GlobalFetch(),\r\n  async responded(method) {\r\n    method.config.headers.token = 'order token';\r\n  }\r\n});\r\n\r\n// upload alova instance\r\nexport const uploadAlova = createAlova({\r\n  baseURL: 'https://api-order.alovajs.org',\r\n  statesHook: VueHook,\r\n  requestAdapter: axiosRequestAdapter()\r\n});\n"})}),"\n",(0,t.jsx)(r.h2,{id:"\u7ba1\u7406-method-\u5b9e\u4f8b",children:"\u7ba1\u7406 method \u5b9e\u4f8b"}),"\n",(0,t.jsxs)(r.p,{children:["\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4e0d\u540c\u7684 js \u6587\u4ef6\u5c06 method \u5b9e\u4f8b\u5206\u7c7b\u7ba1\u7406\uff0c\u4f8b\u5982\u4e0a\u9762\u7684 api \u7ba1\u7406\u7ed3\u6784\u4e2d\uff0c\u5c06\u4f7f\u7528",(0,t.jsx)(r.code,{children:"api/methods/user.js"}),"\u6765\u7ba1\u7406\u7528\u6237\u4fe1\u606f\u76f8\u5173\u7684 method \u5b9e\u4f8b\uff0c\u7528",(0,t.jsx)(r.code,{children:"api/methods/order.js"}),"\u7ba1\u7406\u8ba2\u5355\u76f8\u5173\u7684 method \u5b9e\u4f8b\u3002"]}),"\n",(0,t.jsx)(r.p,{children:"\u6b64\u5916\uff0c\u5728\u4e0a\u6587\u4e2d\u63d0\u5230\u8fc7\u4e00\u70b9\uff0cmethod \u5b9e\u4f8b\u9664\u4e86\u7528\u4e8e\u53d1\u9001\u8bf7\u6c42\u5916\uff0c\u8fd8\u53ef\u4ee5\u7528\u4e8e\u64cd\u4f5c\u7f13\u5b58\u548c\u72b6\u6001\uff0c\u4e3a\u4e86\u786e\u4fdd\u8bf7\u6c42\u53c2\u6570\u7684\u4e2a\u6570\u548c\u987a\u5e8f\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u51fd\u6570\u6765\u5bf9\u5e94\u4e00\u4e2a\u8bf7\u6c42 api\uff0c\u901a\u8fc7\u4f20\u5165\u8bf7\u6c42\u53c2\u6570\u7684\u5f62\u5f0f\u6765\u8fd4\u56de\u5bf9\u5e94\u7684 method \u5b9e\u4f8b\uff0c\u53ea\u8981\u4f20\u5165\u53c2\u6570\u662f\u76f8\u540c\u7684\uff0cmethod \u5b9e\u4f8b\u7684\u8bf7\u6c42\u4fe1\u606f\u548c\u53c2\u6570\u987a\u5e8f\u4e5f\u662f\u76f8\u540c\u7684\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u786e\u4fdd\u7528\u4e8e\u64cd\u4f5c\u7f13\u5b58\u548c\u72b6\u6001\u7684 method \u5b9e\u4f8b\u4e0d\u51fa\u9519\u3002"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",metastring:"title=api/methods/user.js",children:"import { userAlova } from '..';\r\n\r\n// \u83b7\u53d6\u7528\u6237\u4fe1\u606f\r\nexport const getUserInfo = id => userAlova.Get('/user/' + id);\r\n\r\n// \u7f16\u8f91\u7528\u6237\u4fe1\u606f\r\nexport const editUserInfo = (name, age, mobile) =>\r\n  userAlova.Post('/user', {\r\n    name,\r\n    age,\r\n    mobile\r\n  });\r\n\r\n// \u79fb\u9664\u7528\u6237\r\nexport const removeUser = id => userAlova.Delete('/user/' + id);\r\n\r\n// ...\n"})}),"\n",(0,t.jsxs)(r.p,{children:["\u5728",(0,t.jsx)(r.strong,{children:"user \u7ec4\u4ef6"}),"\u4e2d\u53ef\u4ee5\u76f4\u63a5\u5bfc\u5165 method \u51fd\u6570\u8fdb\u884c\u4f7f\u7528\uff0c\u5e76\u4e14\u53ef\u4ee5\u5728\u8c03\u7528",(0,t.jsx)(r.code,{children:"invalidateCache"}),"\u518d\u6b21\u4f7f\u7528 method \u51fd\u6570\u6765\u5931\u6548\u5bf9\u5e94\u7684\u7f13\u5b58\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-html",metastring:"title=views/user.vue",children:'<template>\r\n  <div v-if="loading">Loading...</div>\r\n  <div v-else-if="error">{{ error.message }}</div>\r\n  <template v-else>\r\n    <div>\r\n      <label>name:</label>\r\n      <input v-model="data.name" />\r\n    </div>\r\n    <div>\r\n      <label>age:</label>\r\n      <input v-model="data.age" />\r\n    </div>\r\n    <div>\r\n      <label>mobile:</label>\r\n      <input v-model="data.mobile" />\r\n    </div>\r\n    <button\r\n      @click="handleEdit"\r\n      :loading="editing">\r\n      Edit\r\n    </button>\r\n  </template>\r\n</template>\r\n<script setup>\r\n  import { getUserInfo, editUserInfo } from \'@/api/methods/user\';\r\n  import { useRequest, invalidateCache } from \'alova\';\r\n\r\n  const userId = 1; // \u4f7f\u75281\u4f5c\u4e3auserId\r\n  const { loading, error, data } = useRequest(getUserInfo(userId));\r\n\r\n  // \u63d0\u4ea4\u7f16\u8f91\u4fe1\u606f\r\n  const {\r\n    loading: editing,\r\n    send: handleEdit,\r\n    onSuccess\r\n  } = useRequest(() => editUserInfo(data.name, data.age, data.mobile), {\r\n    immediate: false\r\n  });\r\n  onSuccess(() => {\r\n    invalidateCache(getUserInfo(userId));\r\n  });\r\n<\/script>\n'})})]})}function p(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>s});var t=n(7294);const a={},o=t.createContext(a);function s(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);