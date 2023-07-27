"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[8717],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>s});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=d(a),s=r,N=k["".concat(p,".").concat(s)]||k[s]||u[s]||l;return a?n.createElement(N,i(i({ref:e},m),{},{components:a})):n.createElement(N,i({ref:e},m))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3234:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={title:"\u8bf7\u6c42\u65b9\u6cd5\u8be6\u89e3",sidebar_position:10},i=void 0,o={unversionedId:"tutorial/next-step/method-details",id:"tutorial/next-step/method-details",title:"\u8bf7\u6c42\u65b9\u6cd5\u8be6\u89e3",description:"alova \u5b9e\u4f8b\u5bf9\u8c61\u63d0\u4f9b\u4e86\u4e03\u79cd\u8bf7\u6c42\u65b9\u6cd5\u7684\u62bd\u8c61\u5bf9\u8c61\uff0c\u5305\u62ec GET\u3001POST\u3001PUT\u3001DELETE\u3001HEAD\u3001OPTIONS\u3001PATCH\u3002\u4e3a\u4e86\u7b80\u5355\u6613\u7528\uff0calova \u4f7f\u7528\u4e86\u548caxios\u76f8\u540c\u7684\u53c2\u6570\u7ed3\u6784\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/06-next-step/01-method-details.md",sourceDirName:"tutorial/06-next-step",slug:"/tutorial/next-step/method-details",permalink:"/zh-CN/tutorial/next-step/method-details",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/06-next-step/01-method-details.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\u8bf7\u6c42\u65b9\u6cd5\u8be6\u89e3",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Next step",permalink:"/zh-CN/category/next-step"},next:{title:"\u5171\u4eab\u8bf7\u6c42",permalink:"/zh-CN/tutorial/next-step/share-request"}},p={},d=[{value:"config \u53c2\u6570\u8bf4\u660e",id:"config-\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u901a\u7528\u914d\u7f6e\u9879",id:"\u901a\u7528\u914d\u7f6e\u9879",level:3},{value:"\u9002\u914d\u5668\u914d\u7f6e\u9879",id:"\u9002\u914d\u5668\u914d\u7f6e\u9879",level:3},{value:"\u5b9e\u4f8b\u65b9\u6cd5",id:"\u5b9e\u4f8b\u65b9\u6cd5",level:2},{value:"setName \u793a\u4f8b",id:"setname-\u793a\u4f8b",level:3}],m={toc:d};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"alova \u5b9e\u4f8b\u5bf9\u8c61\u63d0\u4f9b\u4e86\u4e03\u79cd\u8bf7\u6c42\u65b9\u6cd5\u7684\u62bd\u8c61\u5bf9\u8c61\uff0c\u5305\u62ec GET\u3001POST\u3001PUT\u3001DELETE\u3001HEAD\u3001OPTIONS\u3001PATCH\u3002\u4e3a\u4e86\u7b80\u5355\u6613\u7528\uff0calova \u4f7f\u7528\u4e86\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"axios"),"\u76f8\u540c\u7684\u53c2\u6570\u7ed3\u6784\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b9e\u4f8b\u521b\u5efa\u51fd\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"alovaInstance.Get(url[, config])"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"alovaInstance.Post(url[, data[, config]])"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PUT"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"alova.Put(url[, data[, config]])"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"alova.Delete(url[, data[, config]])"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HEAD"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"alova.Head(url[, config])"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OPTIONS"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"alova.Options(url[, config])"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PATCH"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"alova.Patch(url[, data[, config]])"))))),(0,r.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url"),"\u662f\u8bf7\u6c42\u8def\u5f84\uff0c\u5b83\u5c06\u4f1a\u4e0e",(0,r.kt)("inlineCode",{parentName:"li"},"createAlova"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"baseURL"),"\u62fc\u63a5\u6210\u5b8c\u6574\u7684 url \u8fdb\u884c\u8bf7\u6c42\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data"),"\u4e3a\u8bf7\u6c42\u4f53\u6570\u636e\u5bf9\u8c61\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config"),"\u4e3a\u8bf7\u6c42\u914d\u7f6e\u5bf9\u8c61\uff0c\u5176\u4e2d\u5305\u542b\u4e86\u8bf7\u6c42\u5934\u3001params \u53c2\u6570\u7b49\u3001\u8bf7\u6c42\u884c\u4e3a\u53c2\u6570\u7b49\u914d\u7f6e\uff1b")),(0,r.kt)("h2",{id:"config-\u53c2\u6570\u8bf4\u660e"},"config \u53c2\u6570\u8bf4\u660e"),(0,r.kt)("h3",{id:"\u901a\u7528\u914d\u7f6e\u9879"},"\u901a\u7528\u914d\u7f6e\u9879"),(0,r.kt)("p",null,"config \u5bf9\u8c61\u5171\u6709 10 \u9879\u901a\u7528\u7684\u914d\u7f6e\u9879\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"method \u5b9e\u4f8b \u540d\u79f0\uff0c\u5b83\u4e00\u822c\u7528\u4e8e",(0,r.kt)("a",{parentName:"td",href:"../next-step/method-instance-matcher"},"\u5339\u914d method \u5b9e\u4f8b"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e url \u53c2\u6570\uff0c\u5177\u4f53\u67e5\u770b",(0,r.kt)("a",{parentName:"td",href:"../learning/method-instance"},"\u8bf7\u6c42\u65b9\u6cd5\u5b9e\u4f8b"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"headers"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u8bf7\u6c42\u5934\uff0c\u5177\u4f53\u67e5\u770b",(0,r.kt)("a",{parentName:"td",href:"../learning/method-instance"},"\u8bf7\u6c42\u65b9\u6cd5\u5b9e\u4f8b"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transformData"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u54cd\u5e94\u6570\u636e\u8f6c\u6362\u51fd\u6570\uff0c\u5177\u4f53\u67e5\u770b",(0,r.kt)("a",{parentName:"td",href:"../learning/transform-response-data"},"\u8f6c\u6362\u54cd\u5e94\u6570\u636e"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"localCache"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u8bf7\u6c42\u7ea7\u7684\u7f13\u5b58\u6a21\u5f0f\uff0c\u5177\u4f53\u67e5\u770b",(0,r.kt)("a",{parentName:"td",href:"../learning/response-cache"},"\u7f13\u5b58\u6a21\u5f0f"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u8bf7\u6c42\u7ea7\u7684\u8d85\u65f6\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enableDownload"),(0,r.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u4e0b\u8f7d\u8fdb\u5ea6\u4fe1\u606f\uff0c\u5177\u4f53\u67e5\u770b",(0,r.kt)("a",{parentName:"td",href:"../next-step/download-upload-progress"},"\u4e0b\u8f7d/\u4e0a\u4f20\u8fdb\u5ea6"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enableUpload"),(0,r.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u4e0a\u4f20\u8fdb\u5ea6\u4fe1\u606f\uff0c\u5177\u4f53\u67e5\u770b",(0,r.kt)("a",{parentName:"td",href:"../next-step/download-upload-progress"},"\u4e0b\u8f7d/\u4e0a\u4f20\u8fdb\u5ea6"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hitSource"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u81ea\u52a8\u5931\u6548\u8bbe\u7f6e\uff0c\u5177\u4f53\u67e5\u770b",(0,r.kt)("a",{parentName:"td",href:"../next-step/auto-invalidate-cache"},"\u81ea\u52a8\u5931\u6548\u7f13\u5b58"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"shareRequest"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5171\u4eab\u8bf7\u6c42\uff0c\u5177\u4f53\u67e5\u770b",(0,r.kt)("a",{parentName:"td",href:"../next-step/share-request"},"\u5171\u4eab\u8bf7\u6c42"))))),(0,r.kt)("h3",{id:"\u9002\u914d\u5668\u914d\u7f6e\u9879"},"\u9002\u914d\u5668\u914d\u7f6e\u9879"),(0,r.kt)("p",null,"\u6839\u636e\u914d\u7f6e\u4e0d\u540c\u7684 requestAdapter \u800c\u4e0d\u540c\uff0c\u5982 GlobalFetch \u9002\u914d\u5668\u5c06\u4fdd\u7559\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"fetch(url, config)"),"\u4e2d config \u7684\u5168\u90e8\u914d\u7f6e\u9879\uff0c\u5177\u4f53\u652f\u6301\u7684\u914d\u7f6e\u9879\u53ef\u5230\u4e0d\u540c\u7684\u8bf7\u6c42\u9002\u914d\u5668\u6587\u6863\u5185\u67e5\u770b\u3002"),(0,r.kt)("h2",{id:"\u5b9e\u4f8b\u65b9\u6cd5"},"\u5b9e\u4f8b\u65b9\u6cd5"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"send"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76f4\u63a5\u53d1\u9001\u8bf7\u6c42\uff0c\u5177\u4f53\u67e5\u770b",(0,r.kt)("a",{parentName:"td",href:"../next-step/send-request-directly"},"\u76f4\u63a5\u53d1\u9001\u8bf7\u6c42"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setName"),(0,r.kt)("td",{parentName:"tr",align:null},"\u52a8\u6001\u8bbe\u7f6e method \u5b9e\u4f8b\u7684\u540d\u79f0\uff0c\u5b83\u4e00\u822c\u7528\u4e8e\u5728\u9700\u8981\u540e\u7f6e\u8bbe\u7f6e\u540d\u79f0\u65f6\u4f7f\u7528\uff0c\u5982\u9700\u8981\u5728\u54cd\u5e94\u540e\u6839\u636e\u54cd\u5e94\u6570\u636e\u6765\u8bbe\u7f6e\u540d\u79f0\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"abort"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e2d\u65ad\u5f53\u524d method \u5b9e\u4f8b\u53d1\u9001\u7684\u8bf7\u6c42\uff0c\u5b83\u53ef\u4ee5\u4e2d\u65ad use hook \u548c\u76f4\u63a5\u8c03\u7528 send \u53d1\u9001\u7684\u8bf7\u6c42")))),(0,r.kt)("h3",{id:"setname-\u793a\u4f8b"},"setName \u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u5728\u8bf7\u6c42\u6210\u529f\u540e\u5c06\u6570\u636eid\u4f5c\u4e3a\u5f53\u524dmethod\u7684\u540d\u79f0\nonSuccess(event => {\n  event.method.setName(event.data.id);\n});\n")))}u.isMDXComponent=!0}}]);