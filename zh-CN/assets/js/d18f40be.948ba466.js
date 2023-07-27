"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[2277],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const s={title:"\u5e76\u884c\u8bf7\u6c42",sidebar_position:70},a=void 0,i={unversionedId:"tutorial/next-step/parallel-request",id:"tutorial/next-step/parallel-request",title:"\u5e76\u884c\u8bf7\u6c42",description:"\u7b80\u5355\u7684\u5e76\u884c\u8bf7\u6c42\uff0c\u53ea\u9700\u8981\u540c\u65f6\u8c03\u7528\u591a\u4e2a useRequest \u5373\u53ef\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/06-next-step/08-parallel-request.md",sourceDirName:"tutorial/06-next-step",slug:"/tutorial/next-step/parallel-request",permalink:"/zh-CN/tutorial/next-step/parallel-request",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/06-next-step/08-parallel-request.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{title:"\u5e76\u884c\u8bf7\u6c42",sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"\u7ba1\u7406\u989d\u5916\u7684\u72b6\u6001",permalink:"/zh-CN/tutorial/next-step/manage-extra-states"},next:{title:"\u4e32\u884c\u8bf7\u6c42",permalink:"/zh-CN/tutorial/next-step/serial-request"}},l={},u=[{value:"\u65b9\u5f0f 1",id:"\u65b9\u5f0f-1",level:2},{value:"\u65b9\u5f0f 2",id:"\u65b9\u5f0f-2",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u7b80\u5355\u7684\u5e76\u884c\u8bf7\u6c42\uff0c\u53ea\u9700\u8981\u540c\u65f6\u8c03\u7528\u591a\u4e2a useRequest \u5373\u53ef\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { data: todoList } = useRequest(todoListGetter);\nconst { data: todoCounter } = useRequest(todoCountGetter);\n")),(0,o.kt)("p",null,"\u4f46\u8fd9\u6837\u7684\u8bf7\u6c42\u53ea\u9002\u7528\u4e8e\u5355\u7eaf\u7684\u5e76\u884c\u8bf7\u6c42\uff0c\u5982\u679c\u4f60\u9700\u8981\u5728\u5e76\u884c\u8bf7\u6c42\u90fd\u5b8c\u6210\u540e\u518d\u8fdb\u884c\u67d0\u4e9b\u64cd\u4f5c\uff0c\u6709\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u53ef\u4ee5\u5b9e\u73b0\uff1a"),(0,o.kt)("h2",{id:"\u65b9\u5f0f-1"},"\u65b9\u5f0f 1"),(0,o.kt)("p",null,"\u624b\u52a8\u521b\u5efa promise \u5bf9\u8c61\uff0c\u5e76\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"Promise.all"),"\u5b8c\u6210\u6548\u679c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { data: todoList, onSuccess: onListSuccess, onError: onListError } = useRequest(todoListGetter);\nconst { data: todoCounter, onSuccess: onCountSuccess, onError: onCountError } = useRequest(todoCountGetter);\n\n// \u624b\u52a8\u521b\u5efapromise\u5bf9\u8c61\nconst listPromise = new Promise((resolve, reject) => {\n  onListSuccess(resolve);\n  onListError(reject);\n});\nconst countPromise = new Promise((resolve, reject) => {\n  onCountSuccess(resolve);\n  onCountError(reject);\n});\nconst [listEvent, countEvent] = await Promise.all([listPromise, countPromise]);\n// \u5e76\u884c\u8bf7\u6c42\u5b8c\u6210\uff0c\u7ee7\u7eed\u5904\u7406\u4e1a\u52a1...\n")),(0,o.kt)("h2",{id:"\u65b9\u5f0f-2"},"\u65b9\u5f0f 2"),(0,o.kt)("p",null,"\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"useRequest"),"\u51fd\u6570\u8fd4\u56de\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"send"),"\u51fd\u6570\uff0c\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"send"),"\u5c06\u4f1a\u8fd4\u56de\u4e00\u4e2a\u53ef\u7528\u7684 promise \u5bf9\u8c61\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u5148\u8ba9\u5b83\u4eec\u4e0d\u81ea\u52a8\u53d1\u9001\u8bf7\u6c42\nconst { send: sendList } = useRequest(todoListGetter, { immediate: false });\nconst { send: sendCount } = useRequest(todoCountGetter, { immediate: false });\n\n// \u5229\u7528send\u51fd\u6570\u8fd4\u56de\u7684promise\u5bf9\u8c61\nconst parallelRequest = async () => {\n  const [listResponse, countResponse] = await Promise.all([sendList(), sendCount()]);\n  // \u5e76\u884c\u8bf7\u6c42\u5b8c\u6210\uff0c\u7ee7\u7eed\u5904\u7406\u4e1a\u52a1...\n};\n")))}p.isMDXComponent=!0}}]);