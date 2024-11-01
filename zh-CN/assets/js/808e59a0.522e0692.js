"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[2254],{15970:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>j,contentTitle:()=>m,default:()=>f,frontMatter:()=>h,metadata:()=>v,toc:()=>x});var o=t(85893),s=t(11151),r=t(74866),a=t(85162),i=t(2274),l=t(45498);const d='<template>\n  <select v-model="userId">\n    <option :value="1">User 1</option>\n    <option :value="2">User 2</option>\n    <option :value="3">User 3</option>\n  </select>\n\n  \x3c!-- \u6e32\u67d3\u7b5b\u9009\u540e\u7684todo\u5217\u8868 --\x3e\n  <div v-if="loading">Loading...</div>\n  <ul v-else>\n    <li\n      v-for="todo in data"\n      :key="todo.id">\n      {{ todo.completed ? \'(Completed)\' : \'\' }}{{ todo.title }}\n    </li>\n  </ul>\n</template>\n\n<script setup>\nimport { useWatcher } from \'alova/client\';\nimport { ref } from \'vue\';\nimport { alovaInstance } from \'./api\';\n\n// \u521b\u5efamethod\u5b9e\u4f8b\nconst filterTodoList = userId => {\n  return alovaInstance.Get(`/users/${userId}/todos`);\n};\nconst userId = ref(1);\nconst { loading, data } = useWatcher(\n  // \u5fc5\u987b\u8bbe\u7f6e\u4e3a\u8fd4\u56demethod\u5b9e\u4f8b\u7684\u51fd\u6570\n  () => filterTodoList(userId.value),\n\n  // \u88ab\u76d1\u542c\u7684\u72b6\u6001\u6570\u7ec4\uff0c\u8fd9\u4e9b\u72b6\u6001\u53d8\u5316\u5c06\u4f1a\u89e6\u53d1\u4e00\u6b21\u8bf7\u6c42\n  [userId]\n);\n<\/script>\n',c="import { useWatcher } from 'alova/client';\nimport { useState } from 'react';\nimport { alovaInstance } from './api';\n\n// \u521b\u5efamethod\u5b9e\u4f8b\nconst filterTodoList = userId => {\n  return alovaInstance.Get(`/users/${userId}/todos`);\n};\n\nconst App = () => {\n  const [userId, setUserId] = useState(1);\n  const {\n    loading,\n    data = [],\n    error\n  } = useWatcher(\n    // \u5fc5\u987b\u8bbe\u7f6e\u4e3a\u8fd4\u56demethod\u5b9e\u4f8b\u7684\u51fd\u6570\n    () => filterTodoList(userId),\n\n    // \u88ab\u76d1\u542c\u7684\u72b6\u6001\u6570\u7ec4\uff0c\u8fd9\u4e9b\u72b6\u6001\u53d8\u5316\u5c06\u4f1a\u89e6\u53d1\u4e00\u6b21\u8bf7\u6c42\n    [userId]\n  );\n\n  return (\n    <>\n      <select\n        value={userId}\n        onChange={e => setUserId(e.target.value)}>\n        <option value={1}>User 1</option>\n        <option value={2}>User 2</option>\n        <option value={3}>User 3</option>\n      </select>\n\n      {/* \u6e32\u67d3\u7b5b\u9009\u540e\u7684todo\u5217\u8868 */}\n      {loading ? <div>Loading...</div> : null}\n      {!loading ? (\n        <ul>\n          {data.map(todo => (\n            <li>\n              {todo.completed ? '(Completed)' : ''}\n              {todo.title}\n            </li>\n          ))}\n        </ul>\n      ) : null}\n    </>\n  );\n};\nexport default App;\n",p='<script>\nimport { useWatcher } from \'alova/client\';\nimport { writable } from \'svelte/store\';\n\n// \u521b\u5efamethod\u5b9e\u4f8b\nconst filterTodoList = userId => {\n  return alovaInstance.Get(`/users/${userId}/todos`);\n};\nconst userId = writable(0);\nconst { loading, data, error } = useWatcher(\n  // \u53c2\u6570\u5fc5\u987b\u8bbe\u7f6e\u4e3a\u8fd4\u56demethod\u5b9e\u4f8b\u7684\u51fd\u6570\n  () => filterTodoList($userId),\n\n  // \u88ab\u76d1\u542c\u7684\u72b6\u6001\u6570\u7ec4\uff0c\u8fd9\u4e9b\u72b6\u6001\u53d8\u5316\u5c06\u4f1a\u89e6\u53d1\u4e00\u6b21\u8bf7\u6c42\n  [userId]\n);\n<\/script>\n\n<select bind:value="{$userId}">\n  <option value="{1}">User 1</option>\n  <option value="{2}">User 2</option>\n  <option value="{3}">User 3</option>\n</select>\n\n\x3c!-- \u6e32\u67d3\u7b5b\u9009\u540e\u7684todo\u5217\u8868 --\x3e\n{#if $loading}\n<div>Loading...</div>\n{:else}\n<ul>\n  {#each $data as todo}\n    <li class="todo-title">{ todo.completed ? \'(Completed)\' : \'\' }{ todo.title }</li>\n  {/each}\n</ul>\n{/if}\n',u="import { useWatcher } from 'alova/client';\nimport { createSignal } from 'solid-js';\nimport { alovaInstance } from './api';\n\n// \u521b\u5efamethod\u5b9e\u4f8b\nconst filterTodoList = userId => {\n  return alovaInstance.Get(`/users/${userId}/todos`);\n};\n\nconst App = () => {\n  const [userId, setUserId] = createSignal(1);\n  const { loading, data } = useWatcher(\n    // \u5fc5\u987b\u8bbe\u7f6e\u4e3a\u8fd4\u56demethod\u5b9e\u4f8b\u7684\u51fd\u6570\n    () => filterTodoList(userId()),\n\n    // \u88ab\u76d1\u542c\u7684\u72b6\u6001\u6570\u7ec4\uff0c\u8fd9\u4e9b\u72b6\u6001\u53d8\u5316\u5c06\u4f1a\u89e6\u53d1\u4e00\u6b21\u8bf7\u6c42\n    [userId],\n    {\n      initialData: []\n    }\n  );\n\n  return (\n    <>\n      <select\n        value={userId()}\n        onChange={e => setUserId(e.target.value)}>\n        <option value={1}>User 1</option>\n        <option value={2}>User 2</option>\n        <option value={3}>User 3</option>\n      </select>\n\n      {/* \u6e32\u67d3\u7b5b\u9009\u540e\u7684todo\u5217\u8868 */}\n      {loading() ? (\n        <div>Loading...</div>\n      ) : (\n        <ul>\n          {data().map(todo => (\n            <li>\n              {todo.completed ? '(Completed)' : ''}\n              {todo.title}\n            </li>\n          ))}\n        </ul>\n      )}\n    </>\n  );\n};\nexport default App;\n",h={title:"\u76d1\u542c\u8bf7\u6c42"},m=void 0,v={id:"tutorial/client/strategy/use-watcher",title:"\u76d1\u542c\u8bf7\u6c42",description:"use hook",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/03-client/01-strategy/02-use-watcher.md",sourceDirName:"tutorial/03-client/01-strategy",slug:"/tutorial/client/strategy/use-watcher",permalink:"/zh-CN/tutorial/client/strategy/use-watcher",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/03-client/01-strategy/02-use-watcher.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u76d1\u542c\u8bf7\u6c42"},sidebar:"tutorial",previous:{title:"\u81ea\u52a8\u7ba1\u7406\u8bf7\u6c42\u72b6\u6001",permalink:"/zh-CN/tutorial/client/strategy/use-request"},next:{title:"\u6570\u636e\u62c9\u53d6",permalink:"/zh-CN/tutorial/client/strategy/use-fetcher"}},j={},x=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u7acb\u5373\u53d1\u9001\u8bf7\u6c42",id:"\u7acb\u5373\u53d1\u9001\u8bf7\u6c42",level:3},{value:"\u8bf7\u6c42\u9632\u6296",id:"\u8bf7\u6c42\u9632\u6296",level:3},{value:"\u8bf7\u6c42\u65f6\u5e8f",id:"\u8bf7\u6c42\u65f6\u5e8f",level:3},{value:"API",id:"api",level:2}];function g(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{title:"\u7b56\u7565\u7c7b\u578b",type:"info",children:(0,o.jsx)(n.p,{children:"use hook"})}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u4e00\u4e9b\u9700\u8981\u968f\u6570\u636e\u53d8\u5316\u800c\u91cd\u65b0\u8bf7\u6c42\u7684\u573a\u666f\u4e0b\uff0c\u5982\u5206\u9875\u3001\u6570\u636e\u7b5b\u9009\u3001\u6a21\u7cca\u641c\u7d22\u3001tab \u680f\u5207\u6362\u7b49\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,o.jsx)(n.code,{children:"useWatcher"})," \u6765\u76d1\u542c\u6307\u5b9a\u7684\u72b6\u6001\u53d8\u5316\u65f6\u7acb\u5373\u53d1\u9001\u8bf7\u6c42\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,o.jsx)(n.p,{children:"\u63a5\u4e0b\u6765\u6211\u4eec\u4ee5\u641c\u7d22 todo \u9879\u4e3a\u4f8b\uff0c\u5c1d\u8bd5\u6539\u53d8\u9009\u62e9\u6846\u4e2d\u7684\u9009\u9879\uff0c\u770b\u770b todo \u5217\u8868\u662f\u5982\u4f55\u53d8\u5316\u7684\u3002"}),"\n",(0,o.jsxs)(r.Z,{groupId:"framework",children:[(0,o.jsx)(a.Z,{value:"1",label:"vue",children:(0,o.jsx)(i.Z,{template:"vue",mainFile:d,editorHeight:800})}),(0,o.jsx)(a.Z,{value:"2",label:"react",children:(0,o.jsx)(i.Z,{template:"react",mainFile:c,editorHeight:800})}),(0,o.jsx)(a.Z,{value:"3",label:"svelte",children:(0,o.jsx)(l.Z,{language:"html",children:p})}),(0,o.jsx)(a.Z,{value:"4",label:"solid",children:(0,o.jsx)(i.Z,{template:"solid",mainFile:u,editorHeight:800})})]}),"\n",(0,o.jsx)(n.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,o.jsx)(n.admonition,{title:"\u7528\u6cd5\u63d0\u793a",type:"tip",children:(0,o.jsxs)(n.p,{children:["useWatcher \u652f\u6301 useRequest \u7684\u6240\u6709\u529f\u80fd\uff0c\u8be6\u60c5\u8bf7\u67e5\u770b ",(0,o.jsx)(n.a,{href:"/tutorial/client/strategy/use-request",children:"useRequest"}),"\u3002\u4ee5\u4e0b\u662f useWatcher \u7279\u6709\u7684\u7528\u6cd5\u3002"]})}),"\n",(0,o.jsx)(n.h3,{id:"\u7acb\u5373\u53d1\u9001\u8bf7\u6c42",children:"\u7acb\u5373\u53d1\u9001\u8bf7\u6c42"}),"\n",(0,o.jsxs)(n.p,{children:["\u4e0e",(0,o.jsx)(n.code,{children:"useRequest"}),"\u4e0d\u540c\u7684\u662f\uff0c",(0,o.jsx)(n.code,{children:"useWatcher"}),"\u7684",(0,o.jsx)(n.code,{children:"immediate"}),"\u5c5e\u6027\u9ed8\u8ba4\u662f",(0,o.jsx)(n.code,{children:"false"}),"\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const { send } = useWatcher(() => getTodoList(currentPage), [currentPage], {\n  // highlight-start\n  immediate: true\n  // highlight-end\n});\nsend();\n"})}),"\n",(0,o.jsx)(n.h3,{id:"\u8bf7\u6c42\u9632\u6296",children:"\u8bf7\u6c42\u9632\u6296"}),"\n",(0,o.jsx)(n.p,{children:"\u901a\u5e38\u6211\u4eec\u90fd\u4f1a\u5728\u9891\u7e41\u89e6\u53d1\u7684\u4e8b\u4ef6\u5c42\u9762\u7f16\u5199\u9632\u6296\u4ee3\u7801\uff0c\u8fd9\u6b21\u6211\u4eec\u5728\u8bf7\u6c42\u5c42\u9762\u5b9e\u73b0\u4e86\u9632\u6296\u529f\u80fd\uff0c\u8fd9\u610f\u5473\u7740\u4f60\u518d\u4e5f\u4e0d\u7528\u5728\u6a21\u7cca\u641c\u7d22\u529f\u80fd\u4e2d\u81ea\u5df1\u5b9e\u73b0\u9632\u6296\u4e86\uff0c\u7528\u6cd5\u4e5f\u975e\u5e38\u7b80\u5355\u3002"}),"\n",(0,o.jsx)(n.admonition,{title:"\u4ec0\u4e48\u662f\u9632\u6296",type:"info",children:(0,o.jsx)(n.p,{children:"\u9632\u6296\uff08debounce\uff09\uff0c\u5c31\u662f\u6307\u89e6\u53d1\u4e8b\u4ef6\u540e\uff0c\u5728 n \u79d2\u5185\u51fd\u6570\u53ea\u80fd\u6267\u884c\u4e00\u6b21\uff0c\u5982\u679c\u89e6\u53d1\u4e8b\u4ef6\u540e\u5728 n \u79d2\u5185\u53c8\u89e6\u53d1\u4e86\u4e8b\u4ef6\uff0c\u5219\u4f1a\u91cd\u65b0\u8ba1\u7b97\u51fd\u6570\u5ef6\u6267\u884c\u65f6\u95f4\uff08\u5728\u8fd9\u91cc\u548c\u8282\u6d41\u533a\u5206\u4e00\u4e0b\uff0c\u8282\u6d41\u662f\u5728\u89e6\u53d1\u5b8c\u4e8b\u4ef6\u4e4b\u540e\u7684\u4e00\u6bb5\u65f6\u95f4\u4e4b\u5185\u4e0d\u80fd\u518d\u6b21\u89e6\u53d1\u4e8b\u4ef6\uff09"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"\u8bbe\u7f6e\u6240\u6709\u76d1\u542c\u72b6\u6001\u7684\u9632\u6296\u65f6\u95f4"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const { loading, data, error } = useWatcher(\n  () => filterTodoList(keyword, date),\n  [keyword, date],\n  {\n    // highlight-start\n    // \u8bbe\u7f6edebounce\u4e3a\u6570\u5b57\u65f6\u8868\u793a\u4e3a\u6240\u6709\u76d1\u542c\u72b6\u6001\u7684\u9632\u6296\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2\n    // \u5982\u8fd9\u8fb9\u8868\u793a\u5f53\u72b6\u6001keyword\u3001date\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u53d8\u5316\u65f6\uff0c\u5c06\u5728500ms\u540e\u624d\u53d1\u9001\u8bf7\u6c42\n    debounce: 500\n    // highlight-end\n  }\n);\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"\u4e3a\u5355\u4e2a\u76d1\u542c\u72b6\u6001\u8bbe\u7f6e\u9632\u6296\u65f6\u95f4"})}),"\n",(0,o.jsxs)(n.p,{children:["\u5f88\u591a\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5bf9\u67d0\u51e0\u4e2a\u9891\u7e41\u53d8\u5316\u7684\u76d1\u542c\u72b6\u6001\u8fdb\u884c\u9632\u6296\uff0c\u5982\u6587\u672c\u6846\u7684",(0,o.jsx)(n.code,{children:"onInput"}),"\u89e6\u53d1\u7684\u72b6\u6001\u53d8\u5316\uff0c\u53ef\u4ee5\u8fd9\u6837\u505a\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const { loading, data, error } = useWatcher(\n  () => filterTodoList(keyword, date),\n  [keyword, date],\n  {\n    // highlight-start\n    // \u4ee5\u76d1\u542c\u72b6\u6001\u7684\u6570\u7ec4\u987a\u5e8f\u5206\u522b\u8bbe\u7f6e\u9632\u6296\u65f6\u95f4\uff0c0\u6216\u4e0d\u4f20\u8868\u793a\u4e0d\u9632\u6296\n    // \u8fd9\u8fb9\u76d1\u542c\u72b6\u6001\u7684\u987a\u5e8f\u662f[keyword, date]\uff0c\u9632\u6296\u6570\u7ec4\u8bbe\u7f6e\u7684\u662f[500, 0]\uff0c\u8868\u793a\u53ea\u5bf9keyword\u5355\u72ec\u8bbe\u7f6e\u9632\u6296\n    debounce: [500, 0]\n    // \u4e5f\u53ef\u4ee5\u8fd9\u4e48\u6309\u5982\u4e0b\u8bbe\u7f6e:\n    // debounce: [500],\n    // highlight-end\n  }\n);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"\u8bf7\u6c42\u65f6\u5e8f",children:"\u8bf7\u6c42\u65f6\u5e8f"}),"\n",(0,o.jsxs)(n.p,{children:["\u6709\u65f6\u5019\u5f53",(0,o.jsx)(n.code,{children:"useWatcher"}),"\u76d1\u542c\u7684\u72b6\u6001\u53d1\u751f\u8fde\u7eed\u7684\u6539\u53d8\u5bfc\u81f4\u8fde\u7eed\u7684\u8bf7\u6c42\u7684\u53d1\u8d77\u65f6\uff0c\u540e\u4e00\u6b21\u7684\u8bf7\u6c42\u5148\u4e8e\u524d\u4e00\u6b21\u7684\u8bf7\u6c42\u83b7\u5f97\u54cd\u5e94\uff0c\u4f46\u662f\u5f53\u524d\u4e00\u6b21\u8bf7\u6c42\u83b7\u5f97\u54cd\u5e94\u65f6\uff0c\u4f1a\u8986\u76d6\u540e\u4e00\u6b21\u8bf7\u6c42\u7684\u54cd\u5e94\uff0c\u5bfc\u81f4\u83b7\u53d6\u5230\u4e0e\u72b6\u6001\u4e0d\u5339\u914d\u7684\u54cd\u5e94\uff1b\u4f8b\u5982\u8bf4\u6709\u4e2a\u72b6\u6001",(0,o.jsx)(n.code,{children:"state"}),"\u6539\u53d8\u540e\u53d1\u51fa\u4e86\u8bf7\u6c42",(0,o.jsx)(n.code,{children:"1"}),"\uff0c\u7136\u540e\u5728\u8bf7\u6c42",(0,o.jsx)(n.code,{children:"1"}),"\u8fd8\u672a\u54cd\u5e94\u65f6\u53c8\u6539\u53d8\u4e86",(0,o.jsx)(n.code,{children:"state"}),"\u503c\uff0c\u5e76\u53d1\u51fa\u4e86\u8bf7\u6c42",(0,o.jsx)(n.code,{children:"2"}),"\uff0c\u5982\u679c\u8bf7\u6c42",(0,o.jsx)(n.code,{children:"1"}),"\u540e\u4e8e\u8bf7\u6c42",(0,o.jsx)(n.code,{children:"2"}),"\u8fd4\u56de\uff0c\u6700\u7ec8\u7684\u54cd\u5e94\u6570\u636e\u4f1a\u7ef4\u6301\u5728\u8bf7\u6c42",(0,o.jsx)(n.code,{children:"1"}),"\u3002\n\u6240\u4ee5\u6211\u4eec\u8bbe\u8ba1\u4e86",(0,o.jsx)(n.code,{children:"abortLast"}),"\u53c2\u6570\uff0c\u5b83\u7528\u4e8e\u6807\u8bb0\u5f53\u4e0b\u4e00\u6b21\u8bf7\u6c42\u53d1\u51fa\u65f6\uff0c\u662f\u5426\u4e2d\u65ad\u4e0a\u4e00\u6b21\u7684\u672a\u54cd\u5e94\u8bf7\u6c42\uff0c\u9ed8\u8ba4\u4e3a",(0,o.jsx)(n.code,{children:"true"}),"\uff0c\u8fd9\u6837",(0,o.jsx)(n.code,{children:"useWatcher"}),"\u6240\u53d1\u51fa\u7684\u8bf7\u6c42\u53ea\u6709\u6700\u540e\u4e00\u6b21\u6709\u6548\u3002"]}),"\n",(0,o.jsx)(n.mermaid,{value:"sequenceDiagram\n  participant U as \u7528\u6237\n  participant S as \u670d\u52a1\u5668\n  U ->> U: \u76d1\u542cstate\u72b6\u6001\n  U ->> S: state\u6539\u53d8\u53d1\u8d77\u8bf7\u6c421\n  U ->> S: state\u6539\u53d8\u53d1\u8d77\u8bf7\u6c422\n  S ->> U: \u8bf7\u6c422\u5148\u54cd\u5e94\n  S ->> U: \u8bf7\u6c421\u540e\u54cd\u5e94\n  U ->> U: \u8bf7\u6c422\u7684\u54cd\u5e94\u88ab\u8986\u76d6"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"useWatcher(\n  () => getTodoList($currentPage),\n  // \u88ab\u76d1\u542c\u7684\u72b6\u6001\u6570\u7ec4\uff0c\u8fd9\u4e9b\u72b6\u6001\u53d8\u5316\u5c06\u4f1a\u89e6\u53d1\u4e00\u6b21\u8bf7\u6c42\n  [state],\n  {\n    // highlight-start\n    abortLast: true // \u662f\u5426\u4e2d\u65ad\u4e0a\u4e00\u6b21\u7684\u672a\u54cd\u5e94\u8bf7\u6c42\uff0c\u9ed8\u8ba4\u4e3atrue\n    // highlight-end\n  }\n);\n"})}),"\n",(0,o.jsx)(n.admonition,{title:"\u6ce8\u610f\u4e8b\u9879",type:"warning",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"abortLast"}),"\u9ed8\u8ba4\u4e3a",(0,o.jsx)(n.code,{children:"true"}),"\uff0c\u5728\u6b63\u5e38\u60c5\u51b5\u4e0b\u4f60\u4e0d\u9700\u8981\u5173\u6ce8\u8fd9\u4e2a\u53c2\u6570\uff0c\u5982\u679c\u4fee\u6539\u4e3a",(0,o.jsx)(n.code,{children:"false"}),"\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u72b6\u6001\u4e0e\u54cd\u5e94\u4e0d\u5339\u914d\u7684\u95ee\u9898\u3002"]})}),"\n",(0,o.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,o.jsxs)(n.p,{children:["\u8bf7\u67e5\u770b",(0,o.jsx)(n.a,{href:"/api/core-hooks#usewatcher",children:"API-useWatcher"}),"\u3002"]})]})}function f(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},2274:(e,n,t)=>{t.d(n,{Z:()=>d});var o=t(59020),s=t(73808),r=t(92949),a=t(85893);const i={vue:{root:"/src/App.vue",files:{"/src/api.js":"import { createAlova } from 'alova';\nimport adapterFetch from 'alova/fetch';\nimport VueHook from 'alova/vue';\nexport const alovaInstance = createAlova({\n  baseURL: 'https://jsonplaceholder.typicode.com',\n  statesHook: VueHook,\n  requestAdapter: adapterFetch(),\n  responded: response => response.json()\n});\n"}},"vue-options":{root:"/src/App.vue",files:{"/src/api.js":"import { VueOptionsHook } from '@alova/vue-options';\nimport { createAlova } from 'alova';\nimport adapterFetch from 'alova/fetch';\nexport const alovaInstance = createAlova({\n  baseURL: 'https://jsonplaceholder.typicode.com',\n  statesHook: VueOptionsHook,\n  requestAdapter: adapterFetch(),\n  responded: response => response.json()\n});\n"},deps:{"@alova/vue-options":"latest"}},react:{root:"/App.js",files:{"/api.js":"import { createAlova } from 'alova';\nimport adapterFetch from 'alova/fetch';\nimport ReactHook from 'alova/react';\nexport const alovaInstance = createAlova({\n  baseURL: 'https://jsonplaceholder.typicode.com',\n  statesHook: ReactHook,\n  requestAdapter: adapterFetch(),\n  responded: response => response.json()\n});\n"}},svelte:{root:"/App.svelte",files:{"/api.js":"import { createAlova } from 'alova';\nimport adapterFetch from 'alova/fetch';\nimport SvelteHook from 'alova/svelte';\nexport const alovaInstance = createAlova({\n  baseURL: 'https://jsonplaceholder.typicode.com',\n  statesHook: SvelteHook,\n  requestAdapter: adapterFetch(),\n  responded: response => response.json()\n});\n"}},solid:{root:"/App.js",files:{"/api.js":"import { createAlova } from 'alova';\nimport adapterFetch from 'alova/fetch';\nimport SolidHook from 'alova/solid';\nexport const alovaInstance = createAlova({\n  baseURL: 'https://jsonplaceholder.typicode.com',\n  statesHook: SolidHook,\n  requestAdapter: adapterFetch(),\n  responded: response => response.json()\n});\n"}},static:{root:"/index.html"},vanilla:{root:"/index.js"}},l={svelte:e=>({files:{"/index.js":{code:'import App from "./App.svelte";    \n  const app = new App({\n    target: document.body\n  });\n  export default app;\n        ',hidden:!0},"/public/index.html":{code:'<!DOCTYPE html>\n  <html>\n    <head>\n      <meta charset="utf8" />\n      <meta name="viewport" content="width=device-width" />\n      <title>Svelte app</title>\n      <link rel="stylesheet" href="public/bundle.css" />\n    </head>\n    <body>\n      <script src="bundle.js"><\/script>\n    </body>\n  </html>',hidden:!0},...e.files},customSetup:{entry:"/index.js",dependencies:{svelte:"^3.59.2",...e.customSetup.dependencies}},main:"/App.svelte",environment:"svelte"})},d=e=>{let{template:n,mainFile:t,externalFiles:d={},containBaseURL:c=!0,containResponded:p=!0,editorHeight:u,style:h}=e;const m={light:s.SF,dark:s.eq},v=i[n+(h?`-${h}`:"")],j={[v.root]:t,...v.files?v.files:{},...d},x=Object.keys(j).find((e=>/api\.js$/.test(e)));j[x]&&(c||(j[x]=j[x].replace(/baseURL.+?\s{4}/,"")),p||(j[x]=j[x].replace(/,\s+responded.+json\(\)/,"")));const g={alova:"latest",...v.deps||{}},{colorMode:f}=(0,r.I)();let I={files:j,template:n,customSetup:{dependencies:g}};return I=l[n]?l[n](I):I,(0,a.jsx)(o.xR,{...I,theme:m[f],options:{editorWidthPercentage:70,editorHeight:u}})}}}]);