"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[5624],{4450:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var n=a(5893),r=a(1151),s=a(4866),i=a(5162);const o={title:"Cache set and query",sidebar_position:90},c=void 0,l={id:"tutorial/learning/cache-set-and-query",title:"Cache set and query",description:"Some service interfaces support batch request data, which means that it is always composed of uncertain sets of response data. When we want to batch request data when initializing the page, and then only request a single piece of data in the interaction, it will cause caching Penetration problem.",source:"@site/docs/tutorial/03-learning/09-cache-set-and-query.md",sourceDirName:"tutorial/03-learning",slug:"/tutorial/learning/cache-set-and-query",permalink:"/tutorial/learning/cache-set-and-query",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/03-learning/09-cache-set-and-query.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{title:"Cache set and query",sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"Actively Invalidate Response Cache",permalink:"/tutorial/learning/invalidate-response-cache"},next:{title:"Update response status across pages/modules",permalink:"/tutorial/learning/update-response-data-across-modules"}},d={},h=[{value:"Update static cache data",id:"update-static-cache-data",level:2},{value:"Dynamically set cache data",id:"dynamically-set-cache-data",level:2},{value:"Abort to set cache",id:"abort-to-set-cache",level:2},{value:"cache query",id:"cache-query",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Some service interfaces support batch request data, which means that it is always composed of uncertain sets of response data. When we want to batch request data when initializing the page, and then only request a single piece of data in the interaction, it will cause caching Penetration problem."}),"\n",(0,n.jsx)(t.p,{children:"For example, we need to obtain the todo list data by date. During initialization, a request obtains the data of 5 days from May 1 to 5, and then the user obtains the data of May 1 again during the operation. At this time, it will not Hit the data on May 1st when it was initialized, because the initialized data of 5 days is stored together instead of being cached separately. At this time, we can manually create a single response cache for the data of these 5 days, so that we can Solve the problem of cache penetration when a single data request is made."}),"\n",(0,n.jsxs)(t.p,{children:["As we mentioned in ",(0,n.jsx)(t.a,{href:"/tutorial/learning/response-cache",children:"cache mode"}),", each cached data is saved with the method instance that sends the request as the key, so the method instance will also be used when updating the cache manually to find the corresponding cached data."]}),"\n",(0,n.jsx)(t.h2,{id:"update-static-cache-data",children:"Update static cache data"}),"\n",(0,n.jsxs)(s.Z,{groupId:"framework",children:[(0,n.jsx)(i.Z,{value:"1",label:"vue composition",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"<template>\r\n  <button @click=\"handleTodolistToggle\">Switch date, hit cache</button>\r\n</template>\r\n<script setup>\r\n  import { setCache } from 'alova';\r\n  import { ref } from 'vue';\r\n\r\n  const getTodoListByDate = dateList =>\r\n    alovaInstance.Get('/todo/list/dates', {\r\n      params: { dateList }\r\n    });\r\n  // Get 5 days of data in batches during initialization\r\n  const dates = ref(['2022-05-01', '2022-05-02', '2022-05-03', '2022-05-04', '2022-05-05']);\r\n  const {\r\n    //...\r\n    onSuccess\r\n  } = useWatcher(() => getTodoListByDate(dates.value.join()), [dates], {\r\n    immediate: true\r\n  });\r\n  onSuccess(todoListDates => {\r\n    if (todoListDates.length <= 1) {\r\n      return;\r\n    }\r\n\r\n    // highlight-start\r\n    // By default, the data of these 5 days will be cached together in a key\r\n    // In order to make subsequent requests for data of a certain day also hit the cache, we can disassemble the data of 5 days into days, and manually set the response cache successively through setCache\r\n    todoListDates.forEach(todoDate => {\r\n      // setCache parameter description:\r\n      // Parameter 1: method instance object, which is used to specify the key of the cache\r\n      // Parameter 2: Cache data\r\n      setCache(getTodoListByDate(todoDate.date), [todoDate]);\r\n    });\r\n    // highlight-end\r\n  });\r\n\r\n  // highlight-start\r\n  const handleTodolistToggle = () => {\r\n    // At this time, when the switching date is May 1, it will hit the response cache we manually set.\r\n    // The dates value is being monitored by useWatcher, so changing it can automatically trigger the request\r\n    dates.value = ['2022-05-01'];\r\n  };\r\n  // highlight-end\r\n<\/script>\n"})})}),(0,n.jsx)(i.Z,{value:"2",label:"react",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"import { setCache } from 'alova';\r\nimport { useState } from 'react';\r\n\r\nconst getTodoListByDate = dateList =>\r\n  alovaInstance.Get('/todo/list/dates', {\r\n    params: { dateList }\r\n  });\r\n\r\nconst App = () => {\r\n  // Get 5 days of data in batches during initialization\r\n  const [dates, setDates] = useState(['2022-05-01', '2022-05-02', '2022-05-03', '2022-05-04', '2022-05-05']);\r\n  const {\r\n    //...\r\n    onSuccess\r\n  } = useWatcher(() => getTodoListByDate(dates.join()), [dates], {\r\n    immediate: true\r\n  });\r\n  onSuccess(todoListDates => {\r\n    if (todoListDates.length <= 1) {\r\n      return;\r\n    }\r\n\r\n    // highlight-start\r\n    // By default, the data of these 5 days will be cached together in a key\r\n    // In order to make subsequent requests for data of a certain day also hit the cache, we can disassemble the data of 5 days into days, and manually set the response cache one by one through setCache\r\n    // The first parameter of setCache is the method instance object, which is used to specify the key of the cache\r\n    // The second parameter is the cached data\r\n    todoListDates.forEach(todoDate => {\r\n      setCache(getTodoListByDate(todoDate.date), [todoDate]);\r\n    });\r\n    // highlight-end\r\n  });\r\n\r\n  // highlight-start\r\n  const handleTodolistToggle = () => {\r\n    // At this time, when the switching date is May 1, it will hit the response cache we manually set.\r\n    // The dates value is being monitored by useWatcher, so changing it can automatically trigger the request\r\n    setDates(['2022-05-01']);\r\n  };\r\n  // highlight-end\r\n\r\n  return <button onClick={handleTodolistToggle}>Switch date, hit cache</button>;\r\n};\n"})})}),(0,n.jsx)(i.Z,{value:"3",label:"svelte",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"<script>\r\n  import { setCache } from 'alova';\r\n  import { writable } from 'svelte/store';\r\n\r\n  const getTodoListByDate = dateList =>\r\n    alovaInstance.Get('/todo/list/dates', {\r\n      params: { dateList }\r\n    });\r\n  // Get 5 days of data in batches during initialization\r\n  const dates = writable(['2022-05-01', '2022-05-02', '2022-05-03', '2022-05-04', '2022-05-05']);\r\n  const {\r\n    //...\r\n    onSuccess\r\n  } = useWatcher(() => getTodoListByDate($dates.join()), [dates], {\r\n    immediate: true\r\n  });\r\n  onSuccess(todoListDates => {\r\n    if (todoListDates.length <= 1) {\r\n      return;\r\n    }\r\n\r\n    // highlight-start\r\n    // By default, the data of these 5 days will be cached together in a key\r\n    // In order to make subsequent requests for data of a certain day also hit the cache, we can disassemble the data of 5 days into days, and manually set the response cache one by one through setCache\r\n    // The first parameter of setCache is the method instance object, which is used to specify the key of the cache\r\n    // The second parameter is the cached data\r\n    todoListDates.forEach(todoDate => {\r\n      setCache(getTodoListByDate(todoDate.date), [todoDate]);\r\n    });\r\n    // highlight-end\r\n  });\r\n\r\n  // highlight-start\r\n  const handleTodolistToggle = () => {\r\n    // At this time, when the switching date is May 1, it will hit the response cache we manually set.\r\n    // The dates value is being monitored by useWatcher, so changing it can automatically trigger the request\r\n    $dates = ['2022-05-01'];\r\n  };\r\n  // highlight-end\r\n<\/script>\r\n<button on:click=\"{handleTodolistToggle}\">Switch date, hit cache</button>\n"})})}),(0,n.jsx)(i.Z,{value:"4",label:"vue options",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"<template>\r\n  <button @click=\"handleTodolistToggle\">Switch date, hit cache</button>\r\n</template>\r\n<script>\r\n  import { setCache, useWatcher } from 'alova';\r\n  import { mapAlovaHook } from '@alova/vue-options';\r\n\r\n  const getTodoListByDate = dateList =>\r\n    alovaInstance.Get('/todo/list/dates', {\r\n      params: { dateList }\r\n    });\r\n\r\n  export default {\r\n    mixins: mapAlovaHook(function () {\r\n      return {\r\n        todo: useWatcher(() => getTodoListByDate(this.dates.join()), ['dates'], {\r\n          immediate: true\r\n        })\r\n      };\r\n    }),\r\n    data() {\r\n      return {\r\n        // Get 5 days of data in batches during initialization\r\n        dates: ['2022-05-01', '2022-05-02', '2022-05-03', '2022-05-04', '2022-05-05']\r\n      };\r\n    },\r\n    mounted() {\r\n      this.todo$onSuccess(({ data: todoListDates }) => {\r\n        if (todoListDates.length <= 1) {\r\n          return;\r\n        }\r\n\r\n        // highlight-start\r\n        // By default, the data of these 5 days will be cached together in a key\r\n        // In order to make subsequent requests for data of a certain day also hit the cache, we can disassemble the data of 5 days into days, and manually set the response cache successively through setCache\r\n        todoListDates.forEach(todoDate => {\r\n          // setCache parameter description:\r\n          // Parameter 1: method instance object, which is used to specify the key of the cache\r\n          // Parameter 2: Cache data\r\n          setCache(getTodoListByDate(todoDate.date), [todoDate]);\r\n        });\r\n        // highlight-end\r\n      });\r\n    },\r\n    methods: {\r\n      // highlight-start\r\n      handleTodolistToggle() {\r\n        // At this time, when the switching date is May 1, it will hit the response cache we manually set.\r\n        // The dates value is being monitored by useWatcher, so changing it can automatically trigger the request\r\n        this.dates = ['2022-05-01'];\r\n      }\r\n      // highlight-end\r\n    }\r\n  };\r\n<\/script>\n"})})})]}),"\n",(0,n.jsx)(t.h2,{id:"dynamically-set-cache-data",children:"Dynamically set cache data"}),"\n",(0,n.jsxs)(t.p,{children:["You can also pass in a callback function in ",(0,n.jsx)(t.code,{children:"setCache"})," to dynamically calculate the cache data and return the cache data that needs to be updated."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"setCache(getTodoListByDate('2022-10-01'), oldCache => {\r\n  // Return the data that needs to be cached\r\n  return {\r\n    ...oldCache,\r\n    expire: isAfter('2022-10-01', new Date())\r\n  };\r\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Similarly, you can also dynamically find method instances through ",(0,n.jsx)(t.a,{href:"/tutorial/next-step/method-instance-matcher",children:"method instance matcher"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"setCache(\r\n  {\r\n    name: 'todoList',\r\n    filter: (method, index, ary) => {\r\n      return index < 5;\r\n    }\r\n  },\r\n  'newCache'\r\n);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"abort-to-set-cache",children:"Abort to set cache"}),"\n",(0,n.jsxs)(t.p,{children:["Sometimes you need to dynamically determine whether to update the cache. If no data is returned in the callback function of ",(0,n.jsx)(t.code,{children:"setCache"}),", or ",(0,n.jsx)(t.code,{children:"undefined"})," is returned, the original cache data will not be updated at this time"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"setCache(getTodoListByDate('2022-10-01'), oldCache => {\r\n  const isExpired = isAfter('2022-10-01', new Date());\r\n  if (!isExpired) {\r\n    return; // abort cache updating when return the undefined\r\n  }\r\n  return null; // update the cache to null\r\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"cache-query",children:"cache query"}),"\n",(0,n.jsx)(t.p,{children:"At the same time, we also provide a cache query method."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"import { queryCache } from 'alova';\r\n\r\nconst cacheData = queryCache(getTodoListByDate('2022-10-01'));\n"})}),"\n",(0,n.jsxs)(t.p,{children:["You can also dynamically find method instances via ",(0,n.jsx)(t.a,{href:"/tutorial/next-step/method-instance-matcher",children:"method instance matcher"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"const cacheData = queryCache({\r\n  name: 'todoList',\r\n  filter: (method, index, ary) => {\r\n    return index < 5;\r\n  }\r\n});\n"})})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},5162:(e,t,a)=>{a.d(t,{Z:()=>i});a(7294);var n=a(4334);const r={tabItem:"tabItem_Ymn6"};var s=a(5893);function i(e){let{children:t,hidden:a,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,i),hidden:a,children:t})}},4866:(e,t,a)=>{a.d(t,{Z:()=>j});var n=a(7294),r=a(4334),s=a(2466),i=a(6550),o=a(469),c=a(1980),l=a(7392),d=a(12);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=u(e),[i,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[l,h]=p({queryString:a,groupId:r}),[g,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,d.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),y=(()=>{const e=l??g;return m({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{y&&c(y)}),[y]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),f(e)}),[h,f,s]),tabValues:s}}var f=a(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=a(5893);function v(e){let{className:t,block:a,selectedValue:n,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),r=o[a].value;r!==n&&(l(t),i(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:h,onClick:d,...s,className:(0,r.Z)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function w(e){let{lazy:t,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function x(e){const t=g(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",y.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(w,{...e,...t})]})}function j(e){const t=(0,f.Z)();return(0,b.jsx)(x,{...e,children:h(e.children)},String(t))}},1151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>i});var n=a(7294);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);