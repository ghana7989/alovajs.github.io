"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[8121],{49440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(85893),o=n(11151),a=n(74866),s=n(85162);const l={title:"Troubleshooting"},i=void 0,c={id:"tutorial/project/troubleshooting",title:"Troubleshooting",description:"How to use alova via cdn?",source:"@site/docs/tutorial/07-project/03-troubleshooting.md",sourceDirName:"tutorial/07-project",slug:"/tutorial/project/troubleshooting",permalink:"/tutorial/project/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/07-project/03-troubleshooting.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Troubleshooting"},sidebar:"tutorial",previous:{title:"Migrate from axios",permalink:"/tutorial/project/migration/from-axios"}},u={},d=[{value:"How to use alova via cdn?",id:"how-to-use-alova-via-cdn",level:2},{value:"What to pay attention to in React-Native?",id:"what-to-pay-attention-to-in-react-native",level:2},{value:"Error when importing <code>alova/fetch</code>",id:"error-when-importing-alovafetch",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"how-to-use-alova-via-cdn",children:"How to use alova via cdn?"}),"\n",(0,r.jsxs)(a.Z,{groupId:"framework",children:[(0,r.jsx)(s.Z,{value:"1",label:"vue",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>\n    <script src="https://unpkg.com/alova/dist/alova.umd.min.js"><\/script>\n    <script src="https://unpkg.com/alova/dist/adapter/fetch.umd.min.js"><\/script>\n    <script src="https://unpkg.com/alova/dist/hooks/vuehook.umd.min.js"><\/script>\n  </head>\n  <body>\n    <div id="app">\n      <div v-if="loading">Loading...</div>\n      <div v-else-if="error">{{ error.message }}</div>\n      <span v-else>responseData: {{ data }}</span>\n    </div>\n  </body>\n  <script>\n    const alovaInstance = alova.createAlova({\n      statesHook: VueHook,\n      requestAdapter: alovaFetch(),\n      responded: response => response.json()\n    });\n\n    Vue.createApp({\n      setup() {\n        return alova.useRequest(\n          alovaInstance.Get(\'https://jsonplaceholder.typicode.com/todos/1\')\n        );\n      }\n    }).mount(\'#app\');\n  <\/script>\n</html>\n'})})}),(0,r.jsx)(s.Z,{value:"2",label:"react",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>\n    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>\n    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"><\/script>\n    <script src="https://unpkg.com/alova/dist/alova.umd.min.js"><\/script>\n    <script src="https://unpkg.com/alova/dist/adapter/fetch.umd.min.js"><\/script>\n    <script src="https://unpkg.com/alova/dist/hooks/reacthook.umd.min.js"><\/script>\n  </head>\n  <body>\n    <div id="app"></div>\n  </body>\n  <script type="text/babel">\n    const alovaInstance = alova.createAlova({\n      statesHook: ReactHook,\n      requestAdapter: alovaFetch(),\n      responded: response => response.json()\n    });\n\n    const App = () => {\n      const { loading, data, error } = alova.useRequest(\n        alovaInstance.Get(\'https://jsonplaceholder.typicode.com/todos/1\')\n      );\n\n      if (loading) {\n        return <div>Loading...</div>;\n      } else if (error) {\n        return <div>{error.message}</div>;\n      }\n      return <span>responseData: {JSON.stringify(data)}</span>;\n    };\n    const root = ReactDOM.createRoot(document.getElementById(\'app\'));\n    root.render(<App />);\n  <\/script>\n</html>\n'})})}),(0,r.jsx)(s.Z,{value:"3",label:"svelte",children:(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["svelte depends on the compilation tool and cannot be used directly through CDN. For details, see ",(0,r.jsx)(t.a,{href:"https://svelte.dev/",children:"svelte.dev"})]})})})]}),"\n",(0,r.jsx)(t.h2,{id:"what-to-pay-attention-to-in-react-native",children:"What to pay attention to in React-Native?"}),"\n",(0,r.jsxs)(t.p,{children:["When using alova to develop React-Native applications, you can also use ",(0,r.jsx)(t.code,{children:"alova/fetch"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"But there are the following precautions:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Metro version"})}),"\n",(0,r.jsxs)(t.p,{children:["In alova's ",(0,r.jsx)(t.code,{children:"package.json"}),", ",(0,r.jsx)(t.code,{children:"exports"})," is used to define multiple export items, so you need to ensure these two points:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Metro version is higher than 0.76.0"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Enable ",(0,r.jsx)(t.code,{children:"resolver.unstable_enablePackageExports"})," in ",(0,r.jsx)(t.code,{children:"metro.config.js"}),". ",(0,r.jsx)(t.a,{href:"https://facebook.github.io/metro/docs/configuration/#unstable_enablepackageexports-experimental",children:"Click here for details"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.h2,{id:"error-when-importing-alovafetch",children:["Error when importing ",(0,r.jsx)(t.code,{children:"alova/fetch"})]}),"\n",(0,r.jsxs)(t.p,{children:["When you introduce ",(0,r.jsx)(t.code,{children:"alova/fetch"})," in a typescript project and get the error ",(0,r.jsx)(t.code,{children:'module "${1}/alova/typings/fetch" has no default export'}),", please check the following 2 points:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["add configuration below to ",(0,r.jsx)(t.code,{children:"tsconfig.json"}),":"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "esModuleInterop": true\n  }\n}\n'})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsx)(t.li,{children:"downgrade typescript version to 5.5.x or below."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var r=n(90512);const o={tabItem:"tabItem_Ymn6"};var a=n(85893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(67294),o=n(90512),a=n(12466),s=n(16550),l=n(20469),i=n(91980),c=n(67392),u=n(20812);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:n}=e;const o=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,a=p(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,d]=v({queryString:n,groupId:o}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,u.Nk)(n);return[o,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:o}),f=(()=>{const e=c??m;return h({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function j(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),o=l[n].value;o!==r&&(c(t),s(o))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...a,className:(0,o.Z)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:o}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function y(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,o.Z)("tabs-container",f.tabList),children:[(0,g.jsx)(j,{...t,...e}),(0,g.jsx)(x,{...t,...e})]})}function k(e){const t=(0,b.Z)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>s});var r=n(67294);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);