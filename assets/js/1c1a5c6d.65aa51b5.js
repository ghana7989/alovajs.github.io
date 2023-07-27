"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[9894],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(a),h=i,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||s;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,r=new Array(s);r[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var d=2;d<s;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},351:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const s={title:"Overview",sidebar_position:10},r=void 0,o={unversionedId:"tutorial/strategy/sensorless-data-interaction/overview",id:"tutorial/strategy/sensorless-data-interaction/overview",title:"Overview",description:"Non-inductive data interaction means that when users interact with the application, relevant content can be displayed immediately without waiting, or the operation result can be displayed without waiting when submitting information, just like interacting with local data, thereby greatly improving the smoothness of the application It allows users to not feel the lag caused by data transmission.",source:"@site/docs/tutorial/07-strategy/01-sensorless-data-interaction/01-overview.md",sourceDirName:"tutorial/07-strategy/01-sensorless-data-interaction",slug:"/tutorial/strategy/sensorless-data-interaction/overview",permalink:"/tutorial/strategy/sensorless-data-interaction/overview",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/07-strategy/01-sensorless-data-interaction/01-overview.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Overview",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Sensorless data interaction",permalink:"/category/sensorless-data-interaction"},next:{title:"Virtual data",permalink:"/tutorial/strategy/sensorless-data-interaction/virtual-data"}},l={},d=[{value:"Application scenarios",id:"application-scenarios",level:2},{value:"Editor application",id:"editor-application",level:3},{value:"Setup module",id:"setup-module",level:3},{value:"Simple list management",id:"simple-list-management",level:3},{value:"Complex list management",id:"complex-list-management",level:3},{value:"Free Mode",id:"free-mode",level:3},{value:"Not recommended application scenarios",id:"not-recommended-application-scenarios",level:2},{value:"Information sharing class",id:"information-sharing-class",level:3},{value:"Complex data interaction class",id:"complex-data-interaction-class",level:3},{value:"Technical solutions",id:"technical-solutions",level:2},{value:"Data pre-fetching",id:"data-pre-fetching",level:3},{value:"Silent commit",id:"silent-commit",level:3},{value:"Quiet Queue",id:"quiet-queue",level:3},{value:"virtual data",id:"virtual-data",level:3}],u={toc:d};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Non-inductive data interaction means that when users interact with the application, relevant content can be displayed immediately without waiting, or the operation result can be displayed without waiting when submitting information, just like interacting with local data, thereby greatly improving the smoothness of the application It allows users to not feel the lag caused by data transmission."),(0,i.kt)("p",null,"This is not new. The concept of optimistic update existed before 2015. It refers to displaying the submission results to the interface before the server responds. It is based on the assumption that most submissions are successful. The opposite is a conservative update, that is, the server will display a wait state before responding until the request is completed. In terms of handling failures, the current optimistic update solution is usually handled through fallback, such as the following sample code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const list = [];\nconst data = {};\naddTodo(data).catch(() => {\n  list = list.filter(item => item !== data);\n});\nlist.push(data);\n")),(0,i.kt)("p",null,"This can cause the following problems:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Rollback will increase the user's understanding and operation costs;"),(0,i.kt)("li",{parentName:"ol"},"Request timing issues;"),(0,i.kt)("li",{parentName:"ol"},"If subsequent requests depend on this submission, this failure will make subsequent requests meaningless;"),(0,i.kt)("li",{parentName:"ol"},"Possible lost requests;")),(0,i.kt)("p",null,"After several months of program design and continuous iteration, alova has taken a big step in this area. In our program, the above problems have been solved, which can ensure the success of the request more stably. Although there are still technical limitations, But it has been applied in many scenarios. In our technical solution, the problems caused by network fluctuations can be reduced to a higher extent. Your application is still available in high-latency networks or even disconnected, and the latest data can still be maintained after refreshing the page."),(0,i.kt)("h2",{id:"application-scenarios"},"Application scenarios"),(0,i.kt)("p",null,"Although non-inductive data interaction cannot be used on a large scale, it is very suitable in certain scenarios. During the exploration, we found at least including but not limited to the following scenarios for your reference."),(0,i.kt)("h3",{id:"editor-application"},"Editor application"),(0,i.kt)("p",null,"Note-taking applications such as Evernote and canvas editing applications such as MasterGO need to meet the following requirements:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"When entering the note or drawing list, the list data will be pulled in full, and the local cache data will be used next time;"),(0,i.kt)("li",{parentName:"ol"},"Real-time synchronization to the server during the editing process, and the synchronization process occurs in the background, which will not affect the normal use of users;"),(0,i.kt)("li",{parentName:"ol"},"You can continue to use it even when the network is poor or disconnected;")),(0,i.kt)("admonition",{title:"example",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"We provide a ",(0,i.kt)("a",{parentName:"p",href:"../../example/silent-submit-notes"},"note application example"),", you can enter the experience.")),(0,i.kt)("h3",{id:"setup-module"},"Setup module"),(0,i.kt)("p",null,"The setting module composed of commonly used switches and selectors needs to realize the requirement that the user operation is synchronized to the server in real time, and the submission status is no longer displayed, but the latest status after the operation is directly displayed."),(0,i.kt)("admonition",{title:"example",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"We provide a ",(0,i.kt)("a",{parentName:"p",href:"../../example/silent-submit-setting"},"setting page example"),", you can enter the experience.")),(0,i.kt)("h3",{id:"simple-list-management"},"Simple list management"),(0,i.kt)("p",null,"The data we fill in when creating a list item is enough for the display of the list page, which is called a simple list. For example, a student list page displays the three data of the student's name, gender, and grade. These three data are required when creating a student fill in. In a simple list the following requirements will be fulfilled:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Immediately display the latest status on the list page when adding, editing and deleting list items, no need to display it after the submission is completed, and it is not limited by network fluctuations;"),(0,i.kt)("li",{parentName:"ol"},"When the page is refreshed, the list page is always kept up to date;")),(0,i.kt)("admonition",{title:"example",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"We provide a ",(0,i.kt)("a",{parentName:"p",href:"../../example/silent-submit-simple-list"},"simple list page example"),", you can enter the experience.")),(0,i.kt)("h3",{id:"complex-list-management"},"Complex list management"),(0,i.kt)("p",null,"A complex list means that the data filled in when creating a list item is not enough for display on the list page, and additional data needs to be generated according to the calculation of the server. For example, a Todo list page needs to list specific executions in addition to displaying basic information. date, but only the execution date range and related rules are specified on the creation page, so the execution date is calculated and generated by the server based on the date range and rules."),(0,i.kt)("p",null,"The following requirements will be fulfilled in a complex list:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Immediately display the latest status on the list page when adding, editing and deleting list items, and update the data calculated by the server to this list item after the server responds;"),(0,i.kt)("li",{parentName:"ol"},"When the page is refreshed, the list page is always kept up to date;")),(0,i.kt)("admonition",{title:"example",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Stay tuned for complex list examples...")),(0,i.kt)("h3",{id:"free-mode"},"Free Mode"),(0,i.kt)("p",null,"In the above scenarios, you may want to judge whether to use the non-inductive interaction strategy or the most common conservative request strategy based on a condition. The requirements are as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"When the network status is good, or paying users will use the non-sensing interaction strategy, but when the network fluctuates greatly, or free users cannot enjoy the non-sensing interaction strategy;"),(0,i.kt)("li",{parentName:"ol"},"Strategies can be switched freely;")),(0,i.kt)("admonition",{title:"example",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In the above examples, you can experience the free switching strategy")),(0,i.kt)("h2",{id:"not-recommended-application-scenarios"},"Not recommended application scenarios"),(0,i.kt)("h3",{id:"information-sharing-class"},"Information sharing class"),(0,i.kt)("p",null,"The submitted information needs to be synchronized to others, such as order information. This type of information has high real-time requirements, and we should ensure that the submission is successful."),(0,i.kt)("h3",{id:"complex-data-interaction-class"},"Complex data interaction class"),(0,i.kt)("p",null,"Complex data interaction refers to the mixed editing and filtering of data, such as adding, editing, deleting and filtering a certain list. In this case, Alova cannot currently support it well. In subsequent versions Will try to solve this puzzle too."),(0,i.kt)("h2",{id:"technical-solutions"},"Technical solutions"),(0,i.kt)("p",null,"In the technical solution of non-inductive data interaction, alova has implemented data pre-fetching and silent submission respectively. Next, let's understand these two technical solutions."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Please make sure you have mastered the following chapters before reading"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../../category/learning"},"Basic Learning")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../../category/next-step"},"Next step")))),(0,i.kt)("h3",{id:"data-pre-fetching"},"Data pre-fetching"),(0,i.kt)("p",null,"In html, you may have seen such a tag ",(0,i.kt)("inlineCode",{parentName:"p"},'<link rel="prefetch" href="index.css" as="style">'),", which tells the browser to preload the style file when it is idle, and put it in the cache In , when you really need to use it, you can take it out of the cache. Alova also uses a similar scheme to pre-fetch the required data through ",(0,i.kt)("a",{parentName:"p",href:"../../learning/use-fetcher"},"useFetcher"),", and it will be stored locally. in cache. You can predict the content that the user needs to read under any circumstances, and then pre-fetch the corresponding content. For example, the content of the next page can be pre-loaded in the process page, or the user stays on a button 200ms, we can pre-fetch the data needed for the next interface, which is similar to ",(0,i.kt)("strong",{parentName:"p"},"Next.js")," page preloading."),(0,i.kt)("p",null,"We provide a ",(0,i.kt)("a",{parentName:"p",href:"../../example/prefetch"},"preloaded example"),", you can enter the experience."),(0,i.kt)("h3",{id:"silent-commit"},"Silent commit"),(0,i.kt)("p",null,"Silent submission is a mechanism of submitting and responding. In the scheme, the completion of submission will be guaranteed, so it can be regarded as a safer optimistic update scheme. Silent submission mainly uses ",(0,i.kt)("strong",{parentName:"p"},"Silent Queue")," to persist request information and ensure request timing issues. ",(0,i.kt)("strong",{parentName:"p"},"Virtual data")," is used as a placeholder for server response data, which is replaced with actual response data when the request is completed. , through these two technologies, localized data creation is realized, and operations such as editing and deleting of newly created data are realized, even if the created data has not yet been submitted successfully on the server side. In order to keep development costs to a minimum, this is done automatically in alova."),(0,i.kt)("h3",{id:"quiet-queue"},"Quiet Queue"),(0,i.kt)("p",null,"Silent queues are used to ensure the timing of requests. We can create queues arbitrarily, and all requests entering the queue will be stored in the queue in the form of ",(0,i.kt)("strong",{parentName:"p"},"SilentMethod")," instances. Each ",(0,i.kt)("strong",{parentName:"p"},"SilentMethod")," not only contains request information, but also Contains related configurations for silent submission, such as ",(0,i.kt)("em",{parentName:"p"},"unique id"),", ",(0,i.kt)("em",{parentName:"p"},"error retry parameters"),", etc. The requests in the queue will only initiate the next request after the previous response, thus ensuring the timing of the requests in the queue. You can put dependent requests in the same queue, which also ensures data consistency."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29848971/220057005-dd467392-4a43-45a7-90dc-999dd1d95531.png",alt:"Silent queue"})),(0,i.kt)("p",null,"In the scheme, three behavior modes of ",(0,i.kt)("inlineCode",{parentName:"p"},"queue"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"silent"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"static")," are provided respectively, which are used to distinguish what kind of behavior a request needs to perform."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"queue: The request will enter the silent queue, but it will not be persisted. It will wait for the previous request to complete before sending the request. The response callback will be triggered after the response. It is generally used for data acquisition that depends on the previous request;"),(0,i.kt)("li",{parentName:"ul"},"silent: The request will enter the silent queue and be persisted, and then trigger the response callback immediately. In this behavior mode, onSuccess will receive virtual data, and onError will never be triggered. Use this pattern;"),(0,i.kt)("li",{parentName:"ul"},"static: the request will not enter the silent queue, nor will it be persisted, it will issue the request immediately, and this mode can be used when silent submission is disabled;")),(0,i.kt)("h3",{id:"virtual-data"},"virtual data"),(0,i.kt)("p",null,"In the submit-to-response mechanism, virtual data plays an important role. It means that before the server actually responds, it is used as a placeholder for the response data, and through the tracing mechanism, even if the virtual data is distributed in various locations of the application, Can be automatically replaced with the actual response data after the response. At the same time, it also plays an important role in the silent queue. It can identify the dependencies of requests in the queue, and replace the dependent data with actual data after the dependencies respond. For example, when creating a piece of data, it will return the id of this data. When the service When the terminal has not responded, the user performs a delete operation, and the id needs to be used as the delete identifier. At this time, the delete request will depend on the creation request. Before creating a request response, the virtual data will be used as an id placeholder as a parameter for deletion, and the virtual data id will be replaced after creating a request response, so that the deletion request can be completed."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29848971/220005505-d30b7ae2-ddd0-4080-81a4-65c9be2cb0bd.png",alt:"virtual data"})),(0,i.kt)("p",null,"Next, we will learn more about the characteristics of virtual data."))}c.isMDXComponent=!0}}]);