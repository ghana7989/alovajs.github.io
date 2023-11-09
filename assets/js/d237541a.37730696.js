"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[6295],{3326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(5893),o=n(1151);const r={title:"Custom States Hook",sidebar_position:50},i=void 0,a={id:"tutorial/advanced/custom-stateshook",title:"Custom States Hook",description:"Remember how to create an Alova instance?",source:"@site/docs/tutorial/08-advanced/05-custom-stateshook.md",sourceDirName:"tutorial/08-advanced",slug:"/tutorial/advanced/custom-stateshook",permalink:"/tutorial/advanced/custom-stateshook",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/08-advanced/05-custom-stateshook.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"Custom States Hook",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Middleware",permalink:"/tutorial/advanced/middleware"},next:{title:"Typescript",permalink:"/tutorial/advanced/typescript"}},c={},d=[{value:"statesHook structure",id:"stateshook-structure",level:2},{value:"Custom statesHook function description",id:"custom-stateshook-function-description",level:2},{value:"statesHook type",id:"stateshook-type",level:2}];function l(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Remember how to create an Alova instance?"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const alovaInstance = createAlova({\r\n  //...\r\n  statesHook: ReactHook\r\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"statesHook"})," will decide which MVVM library state to return when requesting, alova currently provides ",(0,s.jsx)(t.strong,{children:"VueHook, ReactHook, svelteHook"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["In most cases, you should not use this function, but if you need to adapt to more MVVM libraries that alova does not support, you need to customize ",(0,s.jsx)(t.code,{children:"statesHook"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"statesHook"})," is an ordinary object that contains specific functions, but these basically do not involve algorithms, let's see how ",(0,s.jsx)(t.strong,{children:"VueHook"})," is written."]}),"\n",(0,s.jsx)(t.h2,{id:"stateshook-structure",children:"statesHook structure"}),"\n",(0,s.jsxs)(t.p,{children:["statesHook is represented by an object, the following is an example of ",(0,s.jsx)(t.strong,{children:"VueHook"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"import { ref, watch, onUnmounted } from 'vue';\r\n\r\nconst VueHook = {\r\n  // state creation function\r\n  create: rawData => ref(data),\r\n\r\n  // state export function\r\n  export: state => state,\r\n\r\n  // dehydration function\r\n  dehydrate: state => state.value,\r\n\r\n  // Reactive state update function\r\n  update: (newVal, states) => {\r\n    Object.keys(newVal).forEach(key => {\r\n      states[key].value = newVal[key];\r\n    });\r\n  },\r\n\r\n  // request send control function\r\n  effectRequest({ handler, removeStates, saveStates, immediate, frontStates, watchingStates }) {\r\n    // Remove the corresponding state when the component is uninstalled\r\n    onUnmounted(removeStates);\r\n\r\n    // When calling useRequest and useFetcher, watchingStates is undefined\r\n    if (!watchingStates) {\r\n      handler();\r\n      return;\r\n    }\r\n\r\n    // When calling useWatcher, watchingStates is an array of states that need to be monitored\r\n    // When immediate is true, it means that the request needs to be sent immediately\r\n    watch(watchingStates, handler, { immediate });\r\n  }\r\n};\n"})}),"\n",(0,s.jsx)(t.h2,{id:"custom-stateshook-function-description",children:"Custom statesHook function description"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"All of the following 5 functions must be specified."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"create"})}),"\n",(0,s.jsxs)(t.p,{children:["Responsive state creation function, ",(0,s.jsx)(t.code,{children:"loading"}),", ",(0,s.jsx)(t.code,{children:"error"}),", ",(0,s.jsx)(t.code,{children:"data"}),", ",(0,s.jsx)(t.code,{children:"downloading"}),", ",(0,s.jsx)(t.code,{children:"uploading"}),", etc. are all created by calling this function, such as the vue3 project will be created as a ref value;"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"export"})}),"\n",(0,s.jsxs)(t.p,{children:["State export function, this function receives the responsive state created by the create function, and exports the final state for developers to use, where the state exported by ",(0,s.jsx)(t.code,{children:"VueHook"})," is the original state;"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"dehydrate"})}),"\n",(0,s.jsxs)(t.p,{children:["Dehydration function, which means converting the responsive state into normal data, is the opposite operation to create, in ",(0,s.jsx)(t.code,{children:"updateState"}),";"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"update"})}),"\n",(0,s.jsxs)(t.p,{children:["Responsive status update function, the status update maintained internally by ",(0,s.jsx)(t.code,{children:"alova"})," is done through this function. This function receives two parameters, the first parameter is the new data object, and the second parameter is the map collection of the original responsive state, here you can write a fixed cycle to update ",(0,s.jsx)(t.code,{children:"states"}),";"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"effectRequest"})}),"\n",(0,s.jsxs)(t.p,{children:["Request sending control function, it will execute this function immediately when ",(0,s.jsx)(t.code,{children:"useRequest"}),", ",(0,s.jsx)(t.code,{children:"useWatcher"}),", ",(0,s.jsx)(t.code,{children:"useFetcher"})," are called, we need to complete three things in this function:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"When the current component is uninstalled, call the removeStates function to remove the responsive state involved in the current component to avoid memory overflow;"}),"\n",(0,s.jsxs)(t.li,{children:["When calling useWatcher, bind the state monitor, and call the sendRequest function when the state changes. You can use whether ",(0,s.jsx)(t.code,{children:"states"})," is an array to judge whether ",(0,s.jsx)(t.code,{children:"useWatcher"})," is called. At the same time, the ",(0,s.jsx)(t.code,{children:"immediate"})," parameter is used to judge whether ",(0,s.jsx)(t.code,{children:"useWatcher"})," is called Whether the request needs to be sent immediately;"]}),"\n",(0,s.jsxs)(t.li,{children:["When calling ",(0,s.jsx)(t.code,{children:"useRequest"})," and ",(0,s.jsx)(t.code,{children:"useFetcher"}),", call sendRequest to send a request, at this time ",(0,s.jsx)(t.code,{children:"states"})," is ",(0,s.jsx)(t.code,{children:"undefined"}),";"]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{title:"Caution",type:"warning",children:(0,s.jsxs)(t.p,{children:["If the library involved in statesHook is like ",(0,s.jsx)(t.code,{children:"react"}),", the use hook of ",(0,s.jsx)(t.code,{children:"alova"})," will be called every time it is re-rendered, then the ",(0,s.jsx)(t.code,{children:"saveStates"})," function needs to be triggered every time it is re-rendered in ",(0,s.jsx)(t.code,{children:"effectRequest"}),", this is because ",(0,s.jsx)(t.code,{children:"react "}),"Every re-render refreshes its state references, so we need to re-save them again."]})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/alovajs/alova/blob/main/src/predefine/ReactHook.ts",children:"ReactHook source code click here to view"})}),"\n",(0,s.jsx)(t.h2,{id:"stateshook-type",children:"statesHook type"}),"\n",(0,s.jsxs)(t.p,{children:["If you want it to support typescript when customizing statesHook, you can ",(0,s.jsx)(t.a,{href:"/tutorial/advanced/typescript",children:"click here to view"})]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var s=n(7294);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);