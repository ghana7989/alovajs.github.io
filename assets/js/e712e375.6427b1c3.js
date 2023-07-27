"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[9711],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5084:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={title:"send captcha",sidebar_position:40},o=void 0,i={unversionedId:"tutorial/strategy/useCaptcha",id:"tutorial/strategy/useCaptcha",title:"send captcha",description:"use hook",source:"@site/docs/tutorial/07-strategy/04-useCaptcha.md",sourceDirName:"tutorial/07-strategy",slug:"/tutorial/strategy/useCaptcha",permalink:"/tutorial/strategy/useCaptcha",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/07-strategy/04-useCaptcha.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"send captcha",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Form submit strategy",permalink:"/tutorial/strategy/useForm"},next:{title:"Cross components to trigger request",permalink:"/tutorial/strategy/actionDelegationMiddleware"}},s={},u=[{value:"Example",id:"example",level:2},{value:"Features",id:"features",level:2},{value:"Install",id:"install",level:2},{value:"use",id:"use",level:2},{value:"Basic usage",id:"basic-usage",level:2},{value:"Custom countdown seconds",id:"custom-countdown-seconds",level:3},{value:"API",id:"api",level:2},{value:"Hook configuration",id:"hook-configuration",level:3},{value:"Responsive data",id:"responsive-data",level:3},{value:"Action function",id:"action-function",level:3},{value:"Event",id:"event",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=p("Tabs"),d=p("TabItem"),m={toc:u};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"strategy type",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"use hook")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Before using extension hooks, make sure you are familiar with the basic usage of alova.")),(0,r.kt)("p",null,"The verification code sending hook saves you the trouble of developing the verification code sending function."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../example/captcha-send"},"Send Captcha Demo")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2728 The countdown will start automatically after the verification code is sent;"),(0,r.kt)("li",{parentName:"ul"},"\u2728 Custom countdown seconds;"),(0,r.kt)("li",{parentName:"ul"},"\u2728 Verification code sending limit;")),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(c,{groupId:"framework",mdxType:"Tabs"},(0,r.kt)(d,{value:"1",label:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm install @alova/scene-vue --save\n#yarn\nyarn add @alova/scene-vue\n\n"))),(0,r.kt)(d,{value:"2",label:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm install @alova/scene-react --save\n#yarn\nyarn add @alova/scene-react\n\n"))),(0,r.kt)(d,{value:"3",label:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm install @alova/scene-svelte --save\n#yarn\nyarn add @alova/scene-svelte\n\n")))),(0,r.kt)("h2",{id:"use"},"use"),(0,r.kt)("h2",{id:"basic-usage"},"Basic usage"),(0,r.kt)("p",null,"Demonstrates basic use of form hooks."),(0,r.kt)(c,{groupId:"framework",mdxType:"Tabs"},(0,r.kt)(d,{value:"1",label:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <input v-model=\"mobile\" />\n  <button\n    @click=\"sendCaptcha\"\n    :loading=\"sending\"\n    :disabled=\"sending || countdown > 0\">\n    {{ loading ? 'Sending...' : countdown > 0 ? `${countdown} can be resent` : 'Send verification code' }}\n  </button>\n</template>\n\n<script setup>\n  import { ref } from 'vue';\n  import { apiSendCaptcha } from './api.js';\n  import { useCaptcha } from '@alova/scene-vue';\n\n  const mobile = ref('');\n  const {\n    // send status\n    loading: sending,\n\n    // Call sendCaptcha to request the interface to send the verification code\n    send: sendCaptcha\n  } = useCaptcha(() => apiSendCaptcha(mobile.value));\n<\/script>\n"))),(0,r.kt)(d,{value:"2",label:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useState } from 'react';\nimport { apiSendCaptcha } from './api.js';\nimport { useCaptcha } from '@alova/scene-react';\n\nconst App = () => {\n  const [mobile, setMobile] = ref('');\n  const {\n    // send status\n    loading: sending,\n\n    // Call sendCaptcha to request the interface to send the verification code\n    send: sendCaptcha\n  } = useCaptcha(() => apiSendCaptcha(mobile));\n\n  return (\n    <div>\n      <input\n        value={mobile}\n        onChange={({ target }) => setMobile(target.value)}\n      />\n      <button\n        onClick={sendCaptcha}\n        loading={sending}\n        disabled={sending || countdown > 0}>\n        {loading ? 'Sending...' : countdown > 0 ? `${countdown} can be resent` : 'Send verification code'}\n      </button>\n    </div>\n  );\n};\n"))),(0,r.kt)(d,{value:"3",label:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  import { apiSendCaptcha } from './api.js';\n  import { useCaptcha } from '@alova/scene-vue';\n\n  let mobile = '';\n  const {\n    // send status\n    loading: sending,\n\n    // Call sendCaptcha to request the interface to send the verification code\n    send: sendCaptcha\n  } = useCaptcha(() => apiSendCaptcha(mobile));\n<\/script>\n\n<input bind:value=\"{mobile}\" />\n<button\n  on:click=\"{sendCaptcha}\"\n  loading=\"{$sending}\"\n  disabled=\"{$sending || $countdown > 0}\">\n  { $loading ? 'Sending...' : $countdown > 0 ? `after ${$countdown} seconds can be resent` : 'Send captcha' }\n</button>\n")))),(0,r.kt)("p",null,"By default, after the verification code is successfully sent, it will count down for 60 seconds, and calling ",(0,r.kt)("inlineCode",{parentName:"p"},"send")," when the countdown is not over will throw an error."),(0,r.kt)("h3",{id:"custom-countdown-seconds"},"Custom countdown seconds"),(0,r.kt)("p",null,"You can also customize the countdown seconds"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"useCaptcha(() => apiSendCaptcha(mobile.value), {\n  //...\n  // highlight-start\n  // Set the countdown to 20 seconds\n  initialCountdown: 20\n  // highlight-end\n});\n")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"hook-configuration"},"Hook configuration"),(0,r.kt)("p",null,"Inherit all configurations of ",(0,r.kt)("a",{parentName:"p",href:"../learning/use-request#api"},(0,r.kt)("strong",{parentName:"a"},"useRequest"))," except ",(0,r.kt)("inlineCode",{parentName:"p"},"immediate"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"immediate")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"useCaptcha")," has been hard-coded to false."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"initialCountdown"),(0,r.kt)("td",{parentName:"tr",align:null},"Initial countdown, when the verification code is sent successfully, it will start countdown with this data"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"60"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"responsive-data"},"Responsive data"),(0,r.kt)("p",null,"Inherit all responsive data from ",(0,r.kt)("a",{parentName:"p",href:"../learning/use-request#api"},(0,r.kt)("strong",{parentName:"a"},"useRequest")),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"countdown"),(0,r.kt)("td",{parentName:"tr",align:null},"The current countdown, -1 per second, the verification code can only be sent again after the countdown ends"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"action-function"},"Action function"),(0,r.kt)("p",null,"Inherit all action functions of ",(0,r.kt)("a",{parentName:"p",href:"../learning/use-request#api"},(0,r.kt)("strong",{parentName:"a"},"useRequest")),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"function parameters"),(0,r.kt)("th",{parentName:"tr",align:null},"return value"),(0,r.kt)("th",{parentName:"tr",align:null},"version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"send"),(0,r.kt)("td",{parentName:"tr",align:null},"Send a request, when the countdown is not over, the call will throw an error"),(0,r.kt)("td",{parentName:"tr",align:null},"Consistent with useRequest.send"),(0,r.kt)("td",{parentName:"tr",align:null},"Promise","<","Response",">"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"event"},"Event"),(0,r.kt)("p",null,"Inherit all events from ",(0,r.kt)("a",{parentName:"p",href:"../learning/use-request#api"},(0,r.kt)("strong",{parentName:"a"},"useRequest")),"."))}h.isMDXComponent=!0}}]);