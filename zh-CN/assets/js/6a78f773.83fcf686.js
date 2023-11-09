"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[1673],{870:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var t=r(5893),a=r(1151),s=r(4866),o=r(5162);const l={title:"Typescript",sidebar_position:60},i=void 0,d={id:"tutorial/advanced/typescript",title:"Typescript",description:"\u5728 Typescript \u65b9\u9762\uff0c\u6211\u4eec\u786e\u5b9e\u82b1\u4e86\u5f88\u5927\u7684\u7cbe\u529b\u4f18\u5316\uff0c\u4e3a\u7684\u5c31\u662f\u63d0\u4f9b\u66f4\u597d\u7684\u4f7f\u7528\u4f53\u9a8c\uff0c\u6211\u4eec\u5c3d\u529b\u5730\u4f7f\u7528\u81ea\u52a8\u63a8\u65ad\u7c7b\u578b\u6765\u51cf\u5c11\u4f60\u5b9a\u4e49\u7c7b\u578b\u7684\u9ebb\u70e6\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/08-advanced/06-typescript.md",sourceDirName:"tutorial/08-advanced",slug:"/tutorial/advanced/typescript",permalink:"/zh-CN/tutorial/advanced/typescript",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/08-advanced/06-typescript.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{title:"Typescript",sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49States Hook",permalink:"/zh-CN/tutorial/advanced/custom-stateshook"},next:{title:"Extensions",permalink:"/zh-CN/category/extensions"}},c={},u=[{value:"\u81ea\u52a8\u63a8\u65ad alova useHooks \u72b6\u6001\u7c7b\u578b",id:"\u81ea\u52a8\u63a8\u65ad-alova-usehooks-\u72b6\u6001\u7c7b\u578b",level:2},{value:"\u54cd\u5e94\u6570\u636e\u7684\u7c7b\u578b",id:"\u54cd\u5e94\u6570\u636e\u7684\u7c7b\u578b",level:2},{value:"\u60c5\u51b5 1",id:"\u60c5\u51b5-1",level:3},{value:"\u60c5\u51b5 2",id:"\u60c5\u51b5-2",level:3},{value:"\u6839\u636e\u8bf7\u6c42\u9002\u914d\u5668\u63a8\u65ad\u7684\u7c7b\u578b",id:"\u6839\u636e\u8bf7\u6c42\u9002\u914d\u5668\u63a8\u65ad\u7684\u7c7b\u578b",level:2},{value:"\u5168\u5c40\u54cd\u5e94\u62e6\u622a\u5668\u53c2\u6570\u7c7b\u578b",id:"\u5168\u5c40\u54cd\u5e94\u62e6\u622a\u5668\u53c2\u6570\u7c7b\u578b",level:2},{value:"Method \u914d\u7f6e\u5bf9\u8c61\u7684\u7c7b\u578b",id:"method-\u914d\u7f6e\u5bf9\u8c61\u7684\u7c7b\u578b",level:2},{value:"\u8bf7\u6c42\u9002\u914d\u5668\u7c7b\u578b",id:"\u8bf7\u6c42\u9002\u914d\u5668\u7c7b\u578b",level:2},{value:"\u81ea\u5b9a\u4e49 States Hook \u7684\u7c7b\u578b",id:"\u81ea\u5b9a\u4e49-states-hook-\u7684\u7c7b\u578b",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u5728 Typescript \u65b9\u9762\uff0c\u6211\u4eec\u786e\u5b9e\u82b1\u4e86\u5f88\u5927\u7684\u7cbe\u529b\u4f18\u5316\uff0c\u4e3a\u7684\u5c31\u662f\u63d0\u4f9b\u66f4\u597d\u7684\u4f7f\u7528\u4f53\u9a8c\uff0c\u6211\u4eec\u5c3d\u529b\u5730\u4f7f\u7528\u81ea\u52a8\u63a8\u65ad\u7c7b\u578b\u6765\u51cf\u5c11\u4f60\u5b9a\u4e49\u7c7b\u578b\u7684\u9ebb\u70e6\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u81ea\u52a8\u63a8\u65ad-alova-usehooks-\u72b6\u6001\u7c7b\u578b",children:"\u81ea\u52a8\u63a8\u65ad alova useHooks \u72b6\u6001\u7c7b\u578b"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 createAlova \u521b\u5efa alova \u5b9e\u4f8b\u65f6\u4f1a\u6839\u636e\u4f20\u5165\u7684",(0,t.jsx)(n.code,{children:"statesHook"}),"\u81ea\u52a8\u63a8\u65ad\u51fa",(0,t.jsx)(n.code,{children:"useRequest"}),"\u3001",(0,t.jsx)(n.code,{children:"useWatcher"}),"\u3001",(0,t.jsx)(n.code,{children:"useFetcher"}),"\u6240\u521b\u5efa\u7684\u72b6\u6001\u7c7b\u578b\u3002\u76ee\u524d\u53ea\u652f\u6301 Vue\u3001React\u3001Svelte\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0b\u4e3a\u9884\u8bbe\u4e2d\uff0cuseHooks \u8fd4\u56de\u7684\u72b6\u6001\u7c7b\u578b\u3002"}),"\n",(0,t.jsxs)(s.Z,{groupId:"framework",children:[(0,t.jsx)(o.Z,{value:"1",label:"VueHook",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const vueAlova = createAlova({\r\n  statesHook: VueHook\r\n  // ...\r\n});\r\nconst {\r\n  loading, // Ref<boolean>\r\n  data, // Ref<{ data: any }>\r\n  error // Ref<Error>\r\n} = useRequest(vueAlova.Get<{ data: any }>('/todo/list'));\n"})})}),(0,t.jsx)(o.Z,{value:"2",label:"ReactHook",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const reactAlova = createAlova({\r\n  statesHook: ReactHook\r\n  // ...\r\n});\r\nconst {\r\n  loading, // boolean\r\n  data, // { data: any }\r\n  error // Error\r\n} = useRequest(reactAlova.Get<{ data: any }>('/todo/list'));\n"})})}),(0,t.jsx)(o.Z,{value:"3",label:"SvelteHook",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const svelteAlova = createAlova({\r\n  statesHook: SvelteHook\r\n  // ...\r\n});\r\nconst {\r\n  loading, // Writable<boolean>\r\n  data, // Writable<{ data: any }>\r\n  error // Writable<Error>\r\n} = useRequest(svelteAlova.Get<{ data: any }>('/todo/list'));\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"data \u7684\u7c7b\u578b\u5c06\u4f1a\u6839\u636e\u4e0d\u540c\u7684 Method \u5b9e\u4f8b\u4e2d\u6307\u5b9a\u7684\u54cd\u5e94\u6570\u636e\u7c7b\u578b\u800c\u4e0d\u540c\uff0c\u6211\u4eec\u7ee7\u7eed\u5f80\u4e0b\u770b\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u54cd\u5e94\u6570\u636e\u7684\u7c7b\u578b",children:"\u54cd\u5e94\u6570\u636e\u7684\u7c7b\u578b"}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u4f60\u4e3a\u4e00\u4e2a\u6570\u636e\u63a5\u53e3\u6307\u5b9a\u7c7b\u578b\u65f6\uff0c\u9700\u8981\u5206\u4e3a\u4e24\u79cd\u60c5\u51b5\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u60c5\u51b5-1",children:"\u60c5\u51b5 1"}),"\n",(0,t.jsxs)(n.p,{children:["\u5f53\u54cd\u5e94\u6570\u636e\u4e0d\u9700\u8981\u518d\u8c03\u7528",(0,t.jsx)(n.code,{children:"transformData"}),"\u8f6c\u6362\uff0c\u76f4\u63a5\u901a\u8fc7\u6cdb\u578b\u6307\u5b9a\u7c7b\u578b"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"interface Todo {\r\n  title: string;\r\n  time: string;\r\n  done: boolean;\r\n}\r\nconst Get = alovaInstance.Get<Todo[]>('/todo/list');\r\nconst { data } = useRequest(Get);\r\n// vue: data\u7684\u7c7b\u578b\u4e3aRef<Todo[]>\r\n// react: data\u7684\u7c7b\u578b\u4e3aTodo[]\r\n// svelte: data\u7684\u7c7b\u578b\u4e3aWritable<Todo[]>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u60c5\u51b5-2",children:"\u60c5\u51b5 2"}),"\n",(0,t.jsxs)(n.p,{children:["\u5f53\u54cd\u5e94\u6570\u636e\u9700\u8981\u518d\u8c03\u7528",(0,t.jsx)(n.code,{children:"transformData"}),"\u8f6c\u6362\uff0c\u90a3\u5c31\u9700\u8981\u5728\u8f6c\u6362\u51fd\u6570\u53c2\u6570\u4e2d\u6307\u5b9a\u7c7b\u578b\uff0c\u7136\u540e\u5b83\u7684\u8fd4\u56de\u503c\u7c7b\u578b\u5c06\u4f1a\u4f5c\u4e3a\u54cd\u5e94\u6570\u636e\u7c7b\u578b\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"interface Todo {\r\n  title: string;\r\n  time: string;\r\n  done: boolean;\r\n}\r\nconst Get = alovaInstance.Get('/todo/list', {\r\n  // \u5c06\u7c7b\u578b\u5199\u5230data\u53c2\u6570\u4e2d\uff0c\u800cheaders\u4f1a\u81ea\u52a8\u63a8\u65ad\uff0c\u53ef\u4ee5\u4e0d\u7528\u6307\u5b9a\u7c7b\u578b\r\n  transformData(data: Todo[], headers) {\r\n    return data.map(item => ({\r\n      ...item,\r\n      status: item.done ? '\u5df2\u5b8c\u6210' : '\u672a\u5b8c\u6210'\r\n    }));\r\n  }\r\n});\r\n\r\nconst { data } = useRequest(Get);\r\n// vue: data\u7684\u7c7b\u578b\u4e3aRef<(Todo & { status: string })[]>\r\n// react: data\u7684\u7c7b\u578b\u4e3a(Todo & { status: string })[]\r\n// svelte: data\u7684\u7c7b\u578b\u4e3aWritable<(Todo & { status: string })[]>\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"warning",children:(0,t.jsx)(n.p,{children:"\u54cd\u5e94\u6570\u636e\u662f\u7ecf\u8fc7\u5168\u5c40\u54cd\u5e94\u62e6\u622a\u5668\u8f6c\u6362\u540e\u7684\uff0c\u56e0\u6b64\u8bbe\u7f6e\u7c7b\u578b\u65f6\u4e5f\u5e94\u8be5\u8bbe\u7f6e\u4e3a\u8f6c\u6362\u540e\u7684\u7c7b\u578b\u3002"})}),"\n",(0,t.jsx)(n.h2,{id:"\u6839\u636e\u8bf7\u6c42\u9002\u914d\u5668\u63a8\u65ad\u7684\u7c7b\u578b",children:"\u6839\u636e\u8bf7\u6c42\u9002\u914d\u5668\u63a8\u65ad\u7684\u7c7b\u578b"}),"\n",(0,t.jsxs)(n.p,{children:["\u56e0\u4e3a alova \u652f\u6301\u81ea\u5b9a\u4e49\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u800c\u4e0d\u540c\u7684\u9002\u914d\u5668\u7684\u8bf7\u6c42\u914d\u7f6e\u5bf9\u8c61\u3001\u54cd\u5e94\u5bf9\u8c61\u3001\u54cd\u5e94\u5934\u90fd\u53ef\u80fd\u4e0d\u540c\uff0c\u56e0\u6b64\u5168\u5c40\u7684",(0,t.jsx)(n.code,{children:"beforeRequest"}),"\u3001",(0,t.jsx)(n.code,{children:"responded"}),"\u62e6\u622a\u5668\uff0c\u4ee5\u53ca",(0,t.jsx)(n.code,{children:"Method"}),"\u5b9e\u4f8b\u521b\u5efa\u65f6\u7684\u914d\u7f6e\u5bf9\u8c61\u7684\u7c7b\u578b\uff0c\u90fd\u4f1a\u6839\u636e\u8bf7\u6c42\u9002\u914d\u5668\u63d0\u4f9b\u7684\u7c7b\u578b\u81ea\u52a8\u63a8\u65ad\uff0c\u6211\u4eec\u5148\u6765\u770b\u8fd9\u51e0\u4e2a\u7c7b\u578b\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f GlobalFetch \u7684\u7c7b\u578b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"type GlobalFetch = () => (\r\n  elements: RequestElements,\r\n  method: Method<any, any, any, any, RequestInit, Response, Headers>\r\n) => {\r\n  response: () => Promise<Response>,\r\n  headers: () => Promise<Headers>,\r\n  onDownload: (handler: ProgressUpdater) => void,\r\n  abort: () => void\r\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u8fd9\u4e2a\u7c7b\u578b\u4e2d\u5206\u522b\u6307\u5b9a\u4e86",(0,t.jsx)(n.code,{children:"RC"}),"\u3001",(0,t.jsx)(n.code,{children:"RE"}),"\u548c",(0,t.jsx)(n.code,{children:"RH"}),"\u4e09\u4e2a\u7c7b\u578b\u7684\u503c\uff0c\u56e0\u6b64\u5728\u5168\u5c40\u7684\u62e6\u622a\u5668\u4e2d\u3001method \u5b9e\u4f8b\u914d\u7f6e\u4e2d\u7b49\u5730\u65b9\u5c06\u81ea\u52a8\u63a8\u65ad\u4e3a\u8bf7\u6c42\u9002\u914d\u5668\u7ed9\u5b9a\u7684\u7c7b\u578b\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u5b83\u4eec\u5206\u522b\u8868\u793a\u4e3a\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"RC"}),"\uff1a",(0,t.jsx)(n.em,{children:"RequestConfig"}),"\u7684\u7f29\u5199\uff0c\u8bf7\u6c42\u914d\u7f6e\u5bf9\u8c61\u7c7b\u578b"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"RH"}),"\uff1a",(0,t.jsx)(n.em,{children:"ResponseHeader"}),"\u7684\u7f29\u5199\uff0c\u54cd\u5e94\u5934\u5bf9\u8c61\u7c7b\u578b"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"RE"}),"\uff1a",(0,t.jsx)(n.em,{children:"Response"}),"\u7684\u7f29\u5199\uff0c\u54cd\u5e94\u7c7b\u578b"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528 ",(0,t.jsx)(n.strong,{children:"GlobalFetch"}),"\uff0c\u4ed6\u4eec\u7684\u7c7b\u578b\u5206\u522b\u4f1a\u88ab\u63a8\u65ad\u4e3a\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"RC"}),"\uff1afetch api \u7684\u8bf7\u6c42\u914d\u7f6e\u5bf9\u8c61",(0,t.jsx)(n.code,{children:"RequestInit"}),";"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"RH"}),"\uff1a\u54cd\u5e94\u5934\u5bf9\u8c61",(0,t.jsx)(n.code,{children:"Headers"}),";"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"RE"}),"\uff1a\u54cd\u5e94\u5bf9\u8c61",(0,t.jsx)(n.code,{children:"Response"}),";"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5168\u5c40\u54cd\u5e94\u62e6\u622a\u5668\u53c2\u6570\u7c7b\u578b",children:"\u5168\u5c40\u54cd\u5e94\u62e6\u622a\u5668\u53c2\u6570\u7c7b\u578b"}),"\n",(0,t.jsxs)(n.p,{children:["\u5168\u5c40\u54cd\u5e94\u62e6\u622a\u5668",(0,t.jsx)(n.code,{children:"responded"}),"\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u7b2c\u4e00\u4e2a\u4e3a\u54cd\u5e94\u6570\u636e\uff0c\u5b83\u7684\u7c7b\u578b\u4e3a\u54cd\u5e94\u5bf9\u8c61 ",(0,t.jsx)(n.strong,{children:"RE"}),"\uff1b"]}),"\n",(0,t.jsx)(n.li,{children:"\u7b2c\u4e8c\u4e2a\u4e3a\u5f53\u524d\u8bf7\u6c42\u7684 method \u5b9e\u4f8b\uff0c\u4f60\u53ef\u4ee5\u83b7\u53d6\u6b64\u6b21\u8bf7\u6c42\u7684\u53c2\u6570\uff0c\u4e5f\u53ef\u4ee5\u7528\u5b83\u4f5c\u4e3a\u8bf7\u6c42\u524d\u540e\u7684\u6570\u636e\u4f20\u9012\u4e0a\u4e0b\u6587\uff1b"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"type RespondedHandler<R, T, RC, RE, RH> = (response: RE, methodInstance: Method<any, any, R, T, RC, RE, RH>) => any;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5f53\u8bf7\u6c42\u9002\u914d\u5668\u4f7f\u7528",(0,t.jsx)(n.code,{children:"GlobalFetch"}),"\u65f6\uff0c",(0,t.jsx)(n.strong,{children:"RE"})," \u5c06\u81ea\u52a8\u63a8\u65ad\u4e3a",(0,t.jsx)(n.code,{children:"Response"}),"\u7c7b\u578b\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"method-\u914d\u7f6e\u5bf9\u8c61\u7684\u7c7b\u578b",children:"Method \u914d\u7f6e\u5bf9\u8c61\u7684\u7c7b\u578b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"/**\r\n * \u8bf7\u6c42\u7f13\u5b58\u8bbe\u7f6e\r\n * expire: \u8fc7\u671f\u65f6\u95f4\r\n *  1. \u5f53\u8bbe\u7f6e\u4e3a\u6570\u5b57\u65f6\uff1a\u5982\u679c\u5927\u4e8e0\u5219\u9996\u5148\u8fd4\u56de\u7f13\u5b58\u6570\u636e\uff0c\u8fc7\u671f\u65f6\u95f4\u5355\u4f4d\u4e3a\u6beb\u79d2\uff0c\u5c0f\u4e8e\u7b49\u4e8e0\u4e0d\u7f13\u5b58\uff0cInfinity\u4e3a\u6c38\u4e0d\u8fc7\u671f\uff1b\r\n *  2. \u5f53\u8bbe\u7f6e\u4e3aDate\u5bf9\u8c61\u65f6\uff0c\u8868\u793a\r\n * mode: \u7f13\u5b58\u6a21\u5f0f\uff0c\u53ef\u9009\u503c\u4e3amemory\u3001placeholder\u3001restore\r\n */\r\ntype CacheExpire = number | Date;\r\ntype DetailLocalCacheConfig = {\r\n  expire: CacheExpire;\r\n  mode?: 'memory' | 'placeholder' | 'restore';\r\n\r\n  /** \u6301\u4e45\u5316\u7f13\u5b58\u6807\u7b7e\uff0c\u6807\u7b7e\u6539\u53d8\u540e\u539f\u6709\u6301\u4e45\u5316\u6570\u636e\u5c06\u4f1a\u5931\u6548 */\r\n  tag?: string | number;\r\n};\r\ntype LocalCacheConfig = CacheExpire | DetailLocalCacheConfig;\r\n\r\ntype AlovaMethodConfig<R, T, RC, RH> = {\r\n  /** method\u5bf9\u8c61\u540d\u79f0\uff0c\u5728updateState\u3001invalidateCache\u3001setCache\u3001\u4ee5\u53cafetch\u51fd\u6570\u4e2d\u53ef\u4ee5\u901a\u8fc7\u540d\u79f0\u6216\u901a\u914d\u7b26\u83b7\u53d6\u5bf9\u5e94method\u5bf9\u8c61 */\r\n  name?: string | number;\r\n  params?: Arg;\r\n  headers?: Arg;\r\n\r\n  /** \u5f53\u524d\u4e2d\u65ad\u65f6\u95f4 */\r\n  timeout?: number;\r\n\r\n  /** \u54cd\u5e94\u6570\u636e\u5728\u7f13\u5b58\u65f6\u95f4\u5185\u5219\u4e0d\u518d\u6b21\u8bf7\u6c42\u3002get\u3001head\u8bf7\u6c42\u9ed8\u8ba4\u4fdd\u9c9c5\u5206\u949f\uff08300000\u6beb\u79d2\uff09\uff0c\u5176\u4ed6\u8bf7\u6c42\u9ed8\u8ba4\u4e0d\u7f13\u5b58 */\r\n  localCache?: LocalCacheConfig;\r\n\r\n  /**\r\n   * \u6253\u51fb\u6e90\u65b9\u6cd5\u5b9e\u4f8b\uff0c\u5f53\u6e90\u65b9\u6cd5\u5b9e\u4f8b\u8bf7\u6c42\u6210\u529f\u65f6\uff0c\u5f53\u524d\u65b9\u6cd5\u5b9e\u4f8b\u7684\u7f13\u5b58\u5c06\u88ab\u5931\u6548\r\n   * \u4f5c\u4e3a\u81ea\u52a8\u5931\u6548\u529f\u80fd\uff0c\u53ea\u9700\u8bbe\u7f6e\u6253\u51fb\u6e90\u5373\u53ef\uff0c\u800c\u4e0d\u9700\u8981\u624b\u52a8\u8c03\u7528invalidateCache\u5931\u6548\u7f13\u5b58\r\n   * \u540c\u65f6\uff0c\u6b64\u529f\u80fd\u5728\u9519\u7efc\u590d\u6742\u7684\u5931\u6548\u5173\u7cfb\u4e2d\u6bd4invalidateCache\u65b9\u6cd5\u66f4\u7b80\u6d01\r\n   * \u8be5\u5b57\u6bb5\u503c\u53ef\u8bbe\u7f6e\u4e3amethod\u5b9e\u4f8b\u3001\u5176\u4ed6method\u5b9e\u4f8b\u7684name\u3001name\u6b63\u5219\u5339\u914d\uff0c\u6216\u8005\u5b83\u4eec\u7684\u6570\u7ec4\r\n   */\r\n  hitSource?: string | RegExp | Method | (string | RegExp | Method)[];\r\n\r\n  /** \u662f\u5426\u542f\u7528\u4e0b\u8f7d\u8fdb\u5ea6\u4fe1\u606f\uff0c\u542f\u7528\u540e\u6bcf\u6b21\u8bf7\u6c42progress\u624d\u4f1a\u6709\u8fdb\u5ea6\u503c\uff0c\u5426\u5219\u4e00\u81f4\u4e3a0\uff0c\u9ed8\u8ba4\u4e0d\u5f00\u542f */\r\n  enableDownload?: boolean;\r\n\r\n  /** \u662f\u5426\u542f\u7528\u4e0a\u4f20\u8fdb\u5ea6\u4fe1\u606f\uff0c\u542f\u7528\u540e\u6bcf\u6b21\u8bf7\u6c42progress\u624d\u4f1a\u6709\u8fdb\u5ea6\u503c\uff0c\u5426\u5219\u4e00\u81f4\u4e3a0\uff0c\u9ed8\u8ba4\u4e0d\u5f00\u542f */\r\n  enableUpload?: boolean;\r\n\r\n  /** \u54cd\u5e94\u6570\u636e\u8f6c\u6362\uff0c\u8f6c\u6362\u540e\u7684\u6570\u636e\u5c06\u8f6c\u6362\u4e3adata\u72b6\u6001\uff0c\u6ca1\u6709\u8f6c\u6362\u6570\u636e\u5219\u76f4\u63a5\u7528\u54cd\u5e94\u6570\u636e\u4f5c\u4e3adata\u72b6\u6001 */\r\n  transformData?: (data: T, headers: RH) => R;\r\n} & RC;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Method \u914d\u7f6e\u5bf9\u8c61\u5185\uff0c\u5305\u542b\u901a\u7528\u7684\u914d\u7f6e\u53c2\u6570\u548c\u6839\u636e\u8bf7\u6c42\u9002\u914d\u5668\u63a8\u65ad\u51fa\u7684 ",(0,t.jsx)(n.strong,{children:"RC"})," \u7684\u5e76\u96c6\uff0c\u5f53\u8bf7\u6c42\u9002\u914d\u5668\u4f7f\u7528 ",(0,t.jsx)(n.strong,{children:"GlobalFetch"})," \u65f6\uff0c",(0,t.jsx)(n.strong,{children:"RC"})," \u5c06\u81ea\u52a8\u63a8\u65ad\u4e3a",(0,t.jsx)(n.code,{children:"RequestInit"}),"\u7c7b\u578b\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bf7\u6c42\u9002\u914d\u5668\u7c7b\u578b",children:"\u8bf7\u6c42\u9002\u914d\u5668\u7c7b\u578b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"interface RequestElements {\r\n  readonly url: string;\r\n  readonly type: MethodType;\r\n  readonly headers: Arg;\r\n  readonly data?: RequestBody;\r\n}\r\ntype ProgressUpdater = (loaded: number, total: number) => void;\r\ntype AlovaRequestAdapter<R, T, RC, RE, RH> = (\r\n  elements: RequestElements,\r\n  method: Method<any, any, R, T, RC, RE, RH>\r\n) => {\r\n  response: () => Promise<RE>;\r\n  headers: () => Promise<RH>;\r\n  onDownload?: (handler: ProgressUpdater) => void;\r\n  onUpload?: (handler: ProgressUpdater) => void;\r\n  abort: () => void;\r\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u9700\u8981\u5728 alova \u4e2d\u81ea\u52a8\u63a8\u65ad ",(0,t.jsx)(n.strong,{children:"RC"}),"\u3001",(0,t.jsx)(n.strong,{children:"RE"}),"\u3001",(0,t.jsx)(n.strong,{children:"RH"})," \u7c7b\u578b\uff0c\u90a3\u4e48\u8bf7\u6c42\u9002\u914d\u5668\u4e0a\u4e0d\u5e94\u8be5\u6307\u5b9a\u4efb\u4f55\u6cdb\u578b\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u7c7b\u578b\u63a8\u65ad\u9519\u8bef\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4ee5 ",(0,t.jsx)(n.strong,{children:"GlobalFetch"})," \u4e3a\u4f8b\u3002"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/alovajs/alova/blob/main/src/predefine/GlobalFetch.ts",children:"GlobalFetch \u6e90\u7801\u70b9\u6b64\u67e5\u770b"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"type GlobalFetch = (defaultRequestInit?: RequestInit) => (\r\n  adapterConfig: AlovaRequestAdapterConfig<unknown, unknown, RequestInit, Headers>\r\n) => {\r\n  response: () => Promise<Response>;\r\n  headers: () => Promise<Headers>;\r\n  onDownload: (handler: (total: number, loaded: number) => void) => void;\r\n  abort: () => void;\r\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u81ea\u5b9a\u4e49-states-hook-\u7684\u7c7b\u578b",children:"\u81ea\u5b9a\u4e49 States Hook \u7684\u7c7b\u578b"}),"\n",(0,t.jsx)(n.p,{children:"\u656c\u8bf7\u671f\u5f85..."})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},5162:(e,n,r)=>{r.d(n,{Z:()=>o});r(7294);var t=r(4334);const a={tabItem:"tabItem_Ymn6"};var s=r(5893);function o(e){let{children:n,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,o),hidden:r,children:n})}},4866:(e,n,r)=>{r.d(n,{Z:()=>y});var t=r(7294),a=r(4334),s=r(2466),o=r(6550),l=r(469),i=r(1980),d=r(7392),c=r(12);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const a=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i._X)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=h(e),[o,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[d,u]=m({queryString:r,groupId:a}),[x,v]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Nk)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),j=(()=>{const e=d??x;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{j&&i(j)}),[j]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),v(e)}),[u,v,s]),tabValues:s}}var v=r(2389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(5893);function g(e){let{className:n,block:r,selectedValue:t,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),c=e=>{const n=e.currentTarget,r=i.indexOf(n),a=l[r].value;a!==t&&(d(n),o(a))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:u,onClick:c,...s,className:(0,a.Z)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function f(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function R(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",j.tabList),children:[(0,b.jsx)(g,{...e,...n}),(0,b.jsx)(f,{...e,...n})]})}function y(e){const n=(0,v.Z)();return(0,b.jsx)(R,{...e,children:u(e.children)},String(n))}},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>o});var t=r(7294);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);