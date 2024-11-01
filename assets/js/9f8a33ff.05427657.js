"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[1336],{96048:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(85893),r=a(11151);a(74866),a(85162);const i={title:"Boot silent factory"},s=void 0,o={id:"tutorial/client/strategy/seamless-data-interaction/start-silent-factory",title:"Boot silent factory",description:"The silent queue is not started by default, and we need to specify the startup parameters for initialization. In general, call bootSilentFactory in the entry file to initialize the silent factory, which will read unexecuted requests to the corresponding silent through the specified configuration items queues and start those queues.",source:"@site/docs/tutorial/03-client/01-strategy/09-seamless-data-interaction/03-start-silent-factory.md",sourceDirName:"tutorial/03-client/01-strategy/09-seamless-data-interaction",slug:"/tutorial/client/strategy/seamless-data-interaction/start-silent-factory",permalink:"/tutorial/client/strategy/seamless-data-interaction/start-silent-factory",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/03-client/01-strategy/09-seamless-data-interaction/03-start-silent-factory.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Boot silent factory"},sidebar:"tutorial",previous:{title:"Virtual data",permalink:"/tutorial/client/strategy/seamless-data-interaction/virtual-data"},next:{title:"Step 1 - Implement features with conservative requests",permalink:"/tutorial/client/strategy/seamless-data-interaction/conservative-request"}},l={},u=[];function c(e){const t={admonition:"admonition",code:"code",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The silent queue is not started by default, and we need to specify the startup parameters for initialization. In general, call ",(0,n.jsx)(t.code,{children:"bootSilentFactory"})," in the entry file to initialize the silent factory, which will read unexecuted requests to the corresponding silent through the specified configuration items queues and start those queues."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="main.js"',children:"import { bootSilentFactory } from 'alova/client';\nimport { alovaInst } from '@/api';\n\nbootSilentFactory({\n  // Specify the alova instance at startup to request information storage and request sending\n  alova: alovaInst,\n\n  // Delay start time, in milliseconds, the default is 2000ms, see the follow-up instructions for details\n  delay: 1000\n});\n"})}),"\n",(0,n.jsxs)(t.admonition,{type:"warning",children:[(0,n.jsxs)(t.mdxAdmonitionTitle,{children:[(0,n.jsx)(t.code,{children:"delay"})," parameter description"]}),(0,n.jsx)(t.p,{children:'In actual scenarios, when entering the current page, a request is also sent to load the page data. In order to ensure that the user can see the page data faster, the request to load the data needs to be forwarded to the beginning of the queue, otherwise it may cause the loading data to fail. The request is placed at the end of the queue. At this time, it is necessary to wait until all the previous requests are completed before loading the page data. This is obviously inappropriate. Therefore, by delaying initialization for a period of time, the request for loading data enters the queue first to achieve "queue jumping" effect, the specific delay time depends on the time required for page rendering.'})]})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},85162:(e,t,a)=>{a.d(t,{Z:()=>s});a(67294);var n=a(90512);const r={tabItem:"tabItem_Ymn6"};var i=a(85893);function s(e){let{children:t,hidden:a,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,s),hidden:a,children:t})}},74866:(e,t,a)=>{a.d(t,{Z:()=>q});var n=a(67294),r=a(90512),i=a(12466),s=a(16550),o=a(20469),l=a(91980),u=a(67392),c=a(20812);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function f(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,i=h(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[u,d]=p({queryString:a,groupId:r}),[m,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),g=(()=>{const e=u??m;return f({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(85893);function y(e){let{className:t,block:a,selectedValue:n,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),c=e=>{const t=e.currentTarget,a=l.indexOf(t),r=o[a].value;r!==n&&(u(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...i,className:(0,r.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function w(e){let{lazy:t,children:a,selectedValue:r}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function x(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(y,{...t,...e}),(0,v.jsx)(w,{...t,...e})]})}function q(e){const t=(0,b.Z)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(t))}},11151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>s});var n=a(67294);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);