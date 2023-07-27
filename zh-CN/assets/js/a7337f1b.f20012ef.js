"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[8689],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"\u8f6c\u6362\u54cd\u5e94\u6570\u636e",sidebar_position:70},i=void 0,l={unversionedId:"tutorial/learning/transform-response-data",id:"tutorial/learning/transform-response-data",title:"\u8f6c\u6362\u54cd\u5e94\u6570\u636e",description:"\u5f53\u54cd\u5e94\u6570\u636e\u7ed3\u6784\u4e0d\u80fd\u76f4\u63a5\u6ee1\u8db3\u524d\u7aef\u9700\u6c42\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u4e3a method \u5b9e\u4f8b\u8bbe\u7f6etransformData\u94a9\u5b50\u51fd\u6570\u5c06\u54cd\u5e94\u6570\u636e\u8f6c\u6362\u6210\u9700\u8981\u7684\u7ed3\u6784\uff0c\u6570\u636e\u8f6c\u6362\u540e\u5c06\u4f1a\u4f5c\u4e3adata\u72b6\u6001\u7684\u503c\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/03-learning/07-transform-response-data.md",sourceDirName:"tutorial/03-learning",slug:"/tutorial/learning/transform-response-data",permalink:"/zh-CN/tutorial/learning/transform-response-data",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/03-learning/07-transform-response-data.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{title:"\u8f6c\u6362\u54cd\u5e94\u6570\u636e",sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"\u7f13\u5b58\u6a21\u5f0f",permalink:"/zh-CN/tutorial/learning/response-cache"},next:{title:"\u4e3b\u52a8\u5931\u6548\u54cd\u5e94\u7f13\u5b58",permalink:"/zh-CN/tutorial/learning/invalidate-response-cache"}},s={},p=[{value:"transformData \u7684\u7279\u6b8a\u4f7f\u7528\u573a\u666f",id:"transformdata-\u7684\u7279\u6b8a\u4f7f\u7528\u573a\u666f",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5f53\u54cd\u5e94\u6570\u636e\u7ed3\u6784\u4e0d\u80fd\u76f4\u63a5\u6ee1\u8db3\u524d\u7aef\u9700\u6c42\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u4e3a method \u5b9e\u4f8b\u8bbe\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"transformData"),"\u94a9\u5b50\u51fd\u6570\u5c06\u54cd\u5e94\u6570\u636e\u8f6c\u6362\u6210\u9700\u8981\u7684\u7ed3\u6784\uff0c\u6570\u636e\u8f6c\u6362\u540e\u5c06\u4f1a\u4f5c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"data"),"\u72b6\u6001\u7684\u503c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const todoListGetter = alovaInstance.Get('/todo/list', {\n  params: {\n    page: 1\n  },\n\n  // \u51fd\u6570\u63a5\u53d7\u672a\u52a0\u5de5\u7684\u6570\u636e\u548c\u54cd\u5e94\u5934\u5bf9\u8c61\uff0c\u5e76\u8981\u6c42\u5c06\u8f6c\u6362\u540e\u7684\u6570\u636e\u8fd4\u56de\uff0c\u5b83\u5c06\u4f1a\u88ab\u8d4b\u503c\u7ed9data\u72b6\u6001\u3002\n  // \u6ce8\u610f\uff1arawData\u662f\u5168\u5c40\u54cd\u5e94\u62e6\u622a\u5668\uff08\u5982\u679c\u6709\u8bbe\u7f6e\uff09\u8fc7\u6ee4\u540e\u7684\u6570\u636e\uff0c\u54cd\u5e94\u62e6\u622a\u5668\u7684\u914d\u7f6e\u53ef\u4ee5\u53c2\u8003[\u8bbe\u7f6e\u5168\u5c40\u54cd\u5e94\u62e6\u622a\u5668]\u7ae0\u8282\u3002\n  transformData(rawData, headers) {\n    return rawData.list.map(item => {\n      return {\n        ...item,\n        statusText: item.done ? '\u5df2\u5b8c\u6210' : '\u8fdb\u884c\u4e2d'\n      };\n    });\n  }\n});\n")),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"\u5728 usehooks \u4e2d\u4f7f\u7528\u65f6\uff0c\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"transformData"),"\u4e2d\u629b\u51fa\u9519\u8bef\u5c06\u4f1a\u89e6\u53d1",(0,a.kt)("inlineCode",{parentName:"li"},"onError"),"\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 method \u5b9e\u4f8b\u76f4\u63a5\u53d1\u8d77\u8bf7\u6c42\u65f6\uff0c\u5c06\u4f1a\u8fd4\u56de\u4e00\u4e2a reject \u72b6\u6001\u7684 promise \u5b9e\u4f8b\uff1b"))),(0,a.kt)("h2",{id:"transformdata-\u7684\u7279\u6b8a\u4f7f\u7528\u573a\u666f"},"transformData \u7684\u7279\u6b8a\u4f7f\u7528\u573a\u666f"),(0,a.kt)("p",null,"\u7531\u4e8e transformData \u51fd\u6570\u5177\u6709\u4ee5\u4e0b\u4e24\u4e2a\u7279\u6027\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u53ea\u6709\u5728\u7f51\u7edc\u8bf7\u6c42\u54cd\u5e94\u65f6\u624d\u88ab\u89e6\u53d1\uff0c\u800c\u547d\u4e2d\u54cd\u5e94\u7f13\u5b58\u65f6\u4e0d\u4f1a\u89e6\u53d1\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u652f\u6301\u5f02\u6b65\u51fd\u6570\uff1b")),(0,a.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u5c06\u5b83\u5f53\u4f5c\u7f51\u7edc\u8bf7\u6c42\u54cd\u5e94\u7684\u94a9\u5b50\u51fd\u6570\u4f7f\u7528\uff0c\u4f8b\u5982\u4ee5\u6587\u4ef6\u4e3a\u54cd\u5e94\u6570\u636e\u7684\u7f13\u5b58\u573a\u666f\u4e0b\uff0c\u53ef\u4ee5\u914d\u5408 IndexedDB \u8fdb\u884c\u6587\u4ef6\u6570\u636e\u7684\u7f13\u5b58\uff0c\u540c\u65f6\u914d\u5408 ",(0,a.kt)("a",{parentName:"p",href:"../next-step/controlled-cache"},"\u53d7\u63a7\u7684\u7f13\u5b58")," \u6765\u547d\u4e2d IndexedDB \u4e2d\u7684\u6587\u4ef6\u7f13\u5b58\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const fileGetter = alovaInstance.Get('/file/file_name', {\n  // \u4f7f\u7528IndexedDB\u7f13\u5b58\u6587\u4ef6\n  async transformData(fileBlob) {\n    await new Promise((resolve, reject) => {\n      const tx = db.transaction(['files'], 'readwrite');\n      const putRequest = tx.objectStore('files').put({\n        file: fileBlob\n      });\n      putRequest.onsuccess = resolve;\n      putRequest.onerror = reject;\n    });\n    return fileBlob;\n  }\n});\n")))}u.isMDXComponent=!0}}]);