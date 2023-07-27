"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[5359],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),p=s(a),c=n,h=p["".concat(o,".").concat(c)]||p[c]||d[c]||l;return a?r.createElement(h,i(i({ref:t},m),{},{components:a})):r.createElement(h,i({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=p;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(7462),n=a(7294),l=a(6010),i=a(2466),u=a(6550),o=a(1980),s=a(7392),m=a(12);function d(e){return function(e){var t;return(null==(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=p(e),[i,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[o,s]=h({queryString:a,groupId:r}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,m.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),y=(()=>{const e=o??d;return c({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{y&&u(y)}),[y]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),g(e)}),[s,g,l]),tabValues:l}}var y=a(2389);const k="tabList__CuJ",f="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:u,selectValue:o,tabValues:s}=e;const m=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,a=m.indexOf(t),r=s[a].value;r!==u&&(d(t),o(r))},c=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=m.indexOf(e.currentTarget)+1;a=m[t]??m[0];break}case"ArrowLeft":{const t=m.indexOf(e.currentTarget)-1;a=m[t]??m[m.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>m.push(e),onKeyDown:c,onClick:p},i,{className:(0,l.Z)("tabs__item",f,null==i?void 0:i.className,{"tabs__item--active":u===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=g(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",k)},n.createElement(b,(0,r.Z)({},e,t)),n.createElement(v,(0,r.Z)({},e,t)))}function w(e){const t=(0,y.Z)();return n.createElement(N,(0,r.Z)({key:String(t)},e))}},6646:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>u,metadata:()=>s,toc:()=>d});var r=a(7462),n=(a(7294),a(3905)),l=a(4866),i=a(5162);const u={title:"retriable request",sidebar_position:80},o=void 0,s={unversionedId:"tutorial/strategy/useRetriableRequest",id:"tutorial/strategy/useRetriableRequest",title:"retriable request",description:"use hook",source:"@site/docs/tutorial/07-strategy/08-useRetriableRequest.md",sourceDirName:"tutorial/07-strategy",slug:"/tutorial/strategy/useRetriableRequest",permalink:"/tutorial/strategy/useRetriableRequest",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/07-strategy/08-useRetriableRequest.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{title:"retriable request",sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"useWatcher with serial",permalink:"/tutorial/strategy/useSerialWatcher"},next:{title:"Advanced",permalink:"/category/advanced"}},m={},d=[{value:"Example",id:"example",level:2},{value:"Features",id:"features",level:2},{value:"Install",id:"install",level:2},{value:"use",id:"use",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Set the static maximum number of retries",id:"set-the-static-maximum-number-of-retries",level:3},{value:"Dynamically set the maximum number of retries",id:"dynamically-set-the-maximum-number-of-retries",level:3},{value:"Set delay time",id:"set-delay-time",level:3},{value:"Set an unfixed retry delay time",id:"set-an-unfixed-retry-delay-time",level:3},{value:"Manually stop retrying",id:"manually-stop-retrying",level:3},{value:"API",id:"api",level:2},{value:"Hook configuration",id:"hook-configuration",level:3},{value:"Responsive data",id:"responsive-data",level:3},{value:"Action function",id:"action-function",level:3},{value:"Event",id:"event",level:3},{value:"RetriableRetryEvent",id:"retriableretryevent",level:4},{value:"RetriableFailEvent",id:"retriablefailevent",level:4}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"strategy type",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"use hook")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Before using extension hooks, make sure you are familiar with the basic usage of alova.")),(0,n.kt)("p",null,"A use hook that can automatically retry a request failure, you can use it for important requests, or use it for polling requests."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../example/retriable-hook"},"Request Retry Demo")),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u2728Customize the number of retries or judge whether retry is required according to the conditions;"),(0,n.kt)("li",{parentName:"ul"},"\u2728 Retry delay mechanism;"),(0,n.kt)("li",{parentName:"ul"},"\u2728 Manually stop retrying;")),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)(l.Z,{groupId:"framework",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm install @alova/scene-vue --save\n#yarn\nyarn add @alova/scene-vue\n\n"))),(0,n.kt)(i.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm install @alova/scene-react --save\n#yarn\nyarn add @alova/scene-react\n\n"))),(0,n.kt)(i.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm install @alova/scene-svelte --save\n#yarn\nyarn add @alova/scene-svelte\n\n")))),(0,n.kt)("h2",{id:"use"},"use"),(0,n.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const {\n  // Loading status, always true during retry, until retry succeeds or fails\n  loading,\n\n  // response data\n  data,\n\n  // Request error information, every time a request or retry fails, there will be an error instance\n  // The last error instance will be overwritten\n  error,\n\n  // Every time a request or retry fails, the onError event will be triggered\n  onError,\n\n  // Request retry event, triggered immediately after each retry request is issued\n  onRetry,\n\n  // request retry failure event\n  // The request is not successful after reaching the maximum number of retries, or manually stopping retries will trigger\n  onFail,\n\n  // request or retry success event\n  onSuccess,\n\n  // Every request or retry, regardless of success or failure, will trigger the completion event\n  onComplete\n} = useRetriableRequest(request);\n")),(0,n.kt)("p",null,"The maximum number of request retries for ",(0,n.kt)("inlineCode",{parentName:"p"},"useRetriableRequest")," defaults to 3, and each retry will be delayed by 1 second. It will also make a request by default, you can change the behavior by setting ",(0,n.kt)("inlineCode",{parentName:"p"},"immediate")," to false."),(0,n.kt)("h3",{id:"set-the-static-maximum-number-of-retries"},"Set the static maximum number of retries"),(0,n.kt)("p",null,"The maximum number of retries indicates the maximum number of times to retry the request after the first request fails. During this period, if the request succeeds, it will stop continuing to retry. The default maximum number of retries is 3, and you can customize the settings in the following ways."),(0,n.kt)("p",null,"When the request reaches the maximum number of retries and still fails, the ",(0,n.kt)("inlineCode",{parentName:"p"},"onFail")," event will be triggered and the request retry will stop. If you want to continue to retry after the failure, you can call the ",(0,n.kt)("inlineCode",{parentName:"p"},"send")," function, and it will perform a new round request and retry."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const { send } = useRetriableRequest(request, {\n  //...\n  // highlight-start\n  // Set the maximum number of retries to 5\n  retry: 5\n  // highlight-end\n});\n")),(0,n.kt)("h3",{id:"dynamically-set-the-maximum-number-of-retries"},"Dynamically set the maximum number of retries"),(0,n.kt)("p",null,"Maybe sometimes you want to use a certain condition to determine whether to continue to retry. At this time, you can set ",(0,n.kt)("inlineCode",{parentName:"p"},"retry")," as a function that returns a boolean value to dynamically determine whether to continue to retry."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"useRetriableRequest(request, {\n  //...\n  // highlight-start\n  // The first parameter is the last error instance, and the parameters passed in from the second parameter to send\n  retry(error, ...args) {\n    // If the request times out, continue to retry\n    return /network timeout/i.test(error.message);\n  }\n  // highlight-end\n});\n")),(0,n.kt)("h3",{id:"set-delay-time"},"Set delay time"),(0,n.kt)("p",null,"The default retry delay time is 1 second, you can customize the setting in the following ways."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"useRetriableRequest(request, {\n  //...\n  backoff: {\n    // highlight-start\n    // Set the delay time to 2 seconds\n    delay: 2000\n    // highlight-end\n  }\n});\n")),(0,n.kt)("h3",{id:"set-an-unfixed-retry-delay-time"},"Set an unfixed retry delay time"),(0,n.kt)("p",null,"Sometimes you want that the delay time of each request is not fixed, you can set the delay growth multiple in the following way, and the delay time will increase exponentially according to the number of retries."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"useRetriableRequest(request, {\n  //...\n  backoff: {\n    delay: 2000,\n    // highlight-start\n    // When the multiplier is set to 2, the first retry delay is 2 seconds, the second is 4 seconds, the third is 8 seconds, and so on.\n    multiplier: 2\n    // highlight-end\n  }\n});\n")),(0,n.kt)("p",null,"not enough? You can even add a random jitter value to each delay to make it look less regular."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"useRetriableRequest(request, {\n   //...\n   backoff: {\n     delay: 2000,\n     multiplier: 2,\n     // highlight-start\n     /**\n      * The initial jitter percentage value of the delay request, the range is 0-1\n      * When only startQuiver is set, endQuiver defaults to 1\n      * For example set to 0.5, it will add 50% to 100% random time on the current delay time\n      * If endQuiver has a value, the delay time will be increased by a random value in the range of startQuiver and endQuiver\n      */\n     startQuiver: 0.5,\n\n     /**\n      * The jitter end percentage value of the delayed request, the range is 0-1\n      * When only endQuiver is set, startQuiver defaults to 0\n      * For example set to 0.8, it will add a random time from 0% to 80% on the current delay time\n      * If startQuiver has a value, the delay time will increase the random value in the range of startQuiver and endQuiver\n      */\n     endQuiver: 0.8;\n     // highlight-end\n   }\n});\n")),(0,n.kt)("h3",{id:"manually-stop-retrying"},"Manually stop retrying"),(0,n.kt)("p",null,"In some cases, you need to manually stop the retry, whether you are currently requesting or waiting for the next retry, you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"stop")," to stop it."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const { stop } = useRetriableRequest(request, {\n  //...\n});\n\nconst handleStop = () => {\n  stop();\n};\n")),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("h3",{id:"hook-configuration"},"Hook configuration"),(0,n.kt)("p",null,"Inherit all configurations from ",(0,n.kt)("a",{parentName:"p",href:"../learning/use-request#api"},(0,n.kt)("strong",{parentName:"a"},"useRequest")),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"retry"),(0,n.kt)("td",{parentName:"tr",align:null},"The maximum number of retries can also be set as a function returning a boolean value to dynamically determine whether to continue to retry."),(0,n.kt)("td",{parentName:"tr",align:null},"number","|","(error: Error, ...args: any[]) => boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"3"),(0,n.kt)("td",{parentName:"tr",align:null},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"backoff"),(0,n.kt)("td",{parentName:"tr",align:null},"Backoff policy, set retry delay time, etc."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#backoffpolicy"},"BackoffPolicy")),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"-")))),(0,n.kt)("p",null,"####BackoffPolicy"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"delay"),(0,n.kt)("td",{parentName:"tr",align:null},"Delay time for another request, in milliseconds"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"1000"),(0,n.kt)("td",{parentName:"tr",align:null},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"multiplier"),(0,n.kt)("td",{parentName:"tr",align:null},"Specify the delay multiplier, for example, when multiplier is set to 2 and delay is 1 second, the first retry is 1 second, the second is 2 seconds, the third is 4 seconds, and so on"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"startQuiver"),(0,n.kt)("td",{parentName:"tr",align:null},"The initial jitter percentage value of the delay request, ranging from 0-1. When only startQuiver is set, endQuiver defaults to 1. For example, if it is set to 0.5, it will increase the current delay time by 50% to 100% randomly Time, if endQuiver has a value, the delay time will be increased by a random value in the range of startQuiver and endQuiver"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"endQuiver"),(0,n.kt)("td",{parentName:"tr",align:null},"The jitter end percentage value of the delayed request, the range is 0-1, when onlyWhen endQuiver is set, startQuiver defaults to 0. For example, if it is set to 0.5, it will add a random time from 0% to 50% to the current delay time. If startQuiver has a value, the delay time will increase the random value in the range of startQuiver and endQuiver"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"-")))),(0,n.kt)("h3",{id:"responsive-data"},"Responsive data"),(0,n.kt)("p",null,"Inherit all responsive data from ",(0,n.kt)("a",{parentName:"p",href:"../learning/use-request#api"},(0,n.kt)("strong",{parentName:"a"},"useRequest")),"."),(0,n.kt)("h3",{id:"action-function"},"Action function"),(0,n.kt)("p",null,"Inherit all action functions of ",(0,n.kt)("a",{parentName:"p",href:"../learning/use-request#api"},(0,n.kt)("strong",{parentName:"a"},"useRequest")),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"name"),(0,n.kt)("th",{parentName:"tr",align:null},"description"),(0,n.kt)("th",{parentName:"tr",align:null},"function parameters"),(0,n.kt)("th",{parentName:"tr",align:null},"return value"),(0,n.kt)("th",{parentName:"tr",align:null},"version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"stop"),(0,n.kt)("td",{parentName:"tr",align:null},"Stop retrying, it is only valid during retrying, and the onFail event will be triggered immediately after stopping"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"-")))),(0,n.kt)("h3",{id:"event"},"Event"),(0,n.kt)("p",null,"Inherit all events from ",(0,n.kt)("a",{parentName:"p",href:"../learning/use-request#api"},(0,n.kt)("strong",{parentName:"a"},"useRequest")),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Callback Parameters"),(0,n.kt)("th",{parentName:"tr",align:null},"Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"onRetry"),(0,n.kt)("td",{parentName:"tr",align:null},"Retry event bindings, they will fire after a retry is initiated"),(0,n.kt)("td",{parentName:"tr",align:null},"Retry event instance ",(0,n.kt)("a",{parentName:"td",href:"#retriableretryevent"},"RetriableRetryEvent")),(0,n.kt)("td",{parentName:"tr",align:null},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"onFail"),(0,n.kt)("td",{parentName:"tr",align:null},"Triggered when the request fails. It will be triggered when no more retries are made. For example, when the maximum number of retries is reached, when the retry callback returns false, manually call stop to stop retrying",(0,n.kt)("br",null),"Note:",(0,n.kt)("br",null),"1 The .onError event will be triggered every time an error is reported.",(0,n.kt)("br",null),"2. If there are no retries, onError, onComplete and onFail will be triggered at the same time"),(0,n.kt)("td",{parentName:"tr",align:null},"Retry event instance ",(0,n.kt)("a",{parentName:"td",href:"#retriablefailevent"},"RetriableFailEvent")),(0,n.kt)("td",{parentName:"tr",align:null},"-")))),(0,n.kt)("h4",{id:"retriableretryevent"},"RetriableRetryEvent"),(0,n.kt)("p",null,"Event event instance inherited from alova."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"retryTimes"),(0,n.kt)("td",{parentName:"tr",align:null},"current retry times"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"required"),(0,n.kt)("td",{parentName:"tr",align:null},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"retryDelay"),(0,n.kt)("td",{parentName:"tr",align:null},"The delay time of this retry, in ms"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"required"),(0,n.kt)("td",{parentName:"tr",align:null},"-")))),(0,n.kt)("h4",{id:"retriablefailevent"},"RetriableFailEvent"),(0,n.kt)("p",null,"Event event instance inherited from alova."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"retryTimes"),(0,n.kt)("td",{parentName:"tr",align:null},"current retry times"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"required"),(0,n.kt)("td",{parentName:"tr",align:null},"-")))))}c.isMDXComponent=!0}}]);