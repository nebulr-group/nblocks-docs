"use strict";(self.webpackChunknblocks_docs=self.webpackChunknblocks_docs||[]).push([[3013],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(a),p=r,g=h["".concat(i,".").concat(p)]||h[p]||d[p]||l;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7462),r=a(7294),l=a(6010),o=a(2466),s=a(6550),i=a(1980),u=a(7392),c=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function h(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=h(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,u]=g({queryString:a,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),m=(()=>{const e=i??d;return p({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{m&&s(m)}),[m]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var m=a(2389);const k="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),h=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==s&&(d(t),i(n))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:h},o,{className:(0,l.Z)("tabs__item",b,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,m.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},2507:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),o=a(5162);const s={sidebar_position:1,sidebar_label:"Quickstart Feature Flags",tags:["guide","quickstart"]},i="Quickstart Feature Flags",u={unversionedId:"Feature-flags/quickstart-feature-flags",id:"Feature-flags/quickstart-feature-flags",title:"Quickstart Feature Flags",description:"On this page you will integrate your web application with Nblocks feature flags. This allows you to conditionally give access to or show / hide features or content to your users.",source:"@site/docs/04-Feature-flags/quickstart-feature-flags.mdx",sourceDirName:"04-Feature-flags",slug:"/Feature-flags/quickstart-feature-flags",permalink:"/nblocks-docs/docs/Feature-flags/quickstart-feature-flags",draft:!1,tags:[{label:"guide",permalink:"/nblocks-docs/docs/tags/guide"},{label:"quickstart",permalink:"/nblocks-docs/docs/tags/quickstart"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Quickstart Feature Flags",tags:["guide","quickstart"]},sidebar:"tutorialSidebar",previous:{title:"Quickstart Branding",permalink:"/nblocks-docs/docs/authentication-and-access/quickstart-branding"}},c={},d=[{value:"Integrating in your code",id:"integrating-in-your-code",level:2},{value:"Example code",id:"example-code",level:5},{value:"Managing flags in Nblocks Admin",id:"managing-flags-in-nblocks-admin",level:2},{value:"Step 1. Create flag",id:"step-1-create-flag",level:3},{value:"Step 2. Create segment",id:"step-2-create-segment",level:3},{value:"Step 3. Attach the segmentent to the flag",id:"step-3-attach-the-segmentent-to-the-flag",level:3},{value:"Step 4. Activate the flag",id:"step-4-activate-the-flag",level:3},{value:"Testing it",id:"testing-it",level:2}],h={toc:d};function p(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quickstart-feature-flags"},"Quickstart Feature Flags"),(0,r.kt)("p",null,"On this page you will integrate your web application with Nblocks feature flags. This allows you to conditionally give access to or show / hide features or content to your users."),(0,r.kt)("p",null,"Some use cases for feature flags are: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Restrict access to premium content that just users with a certain plan can access"),(0,r.kt)("li",{parentName:"ul"},"Try beta features on a selection of customers"),(0,r.kt)("li",{parentName:"ul"},"Show a message to all users during a scheduled release."),(0,r.kt)("li",{parentName:"ul"},"Protect a feature with Role based access controll (RBAC).")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The content of this quickstart")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First we'll go through how you will apply a few lines of code to conditionally show content in your app."),(0,r.kt)("li",{parentName:"ol"},"Then we'll create the flags for the features in Nblocks Admin with conditions that should apply to it.")),(0,r.kt)("admonition",{title:"Prerequisites",type:"info"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"If you haven't already, ",(0,r.kt)("a",{parentName:"li",href:"/docs/getting-started/signup"},"sign up")," for Nblocks and get access to your ",(0,r.kt)("a",{parentName:"li",href:"/docs/getting-started/id-and-keys"},"app id")),(0,r.kt)("li",{parentName:"ol"},"Completed the ",(0,r.kt)("a",{parentName:"li",href:"/docs/authentication-and-access/quickstart-user-ready"},"Quickstart User Ready")," since we'll be using the magic of access tokens in this quickstart"))),(0,r.kt)("h2",{id:"integrating-in-your-code"},"Integrating in your code"),(0,r.kt)("p",null,"The integration essentially consists of requesting an evaluation of a flag by providing information about the current user and then handling the evaluation response.\nFor the purpose of this quickstart we'll attach the user access token that will have Nblocks automatically resolve all the information that's necessary for evaluating a flag."),(0,r.kt)("p",null,"Here's an ",(0,r.kt)("a",{parentName:"p",href:"https://backendless.nblocks.cloud/flags/evaluate/APP_ID/flag"},"example")," of the anatomy of a evaluation response."),(0,r.kt)("p",null,"Now, let's integrate this into our app!"),(0,r.kt)("h5",{id:"example-code"},"Example code"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"reactjs",label:"ReactJS",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Imagine you have a component that looks something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// We just want to render this if we're doing a release\n<h1>We're currently doing a release and will be back soon</h1>\n\n// We just want to render this for premium customers\n<span>This is premium content</span>\n\n// We just want to render this for beta customers \n<a href=\"/beta\">Button to beta feature</a>\n")),(0,r.kt)("p",null,"To conditionally render these different elements we can create a simple component.\nName this component ",(0,r.kt)("inlineCode",{parentName:"p"},"FeatureFlags"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEffect, useState } from 'react';\n\n// The component takes the prop flag.\nexport default function FeatureFlag({ flag, children }) {\n\n    // Replace this with your own APP ID\n  const APP_ID = 'XXX';\n\n  // This will be our variable telling if the feature is enabled or and we should render the component children\n  // Initially this variable is false\n  const [enabled, setEnabled] = useState(false);\n\n  useEffect(() => {\n    // Evaluate the flag\n    const accessToken = window.localStorage.getItem('access_token');\n    if (accessToken) {\n      evaluate(accessToken);\n    }\n  }, []);\n\n  const evaluate = async (accessToken) => {\n    const result = await fetch(\n      `https://backendless.nblocks.cloud/flags/evaluate/${APP_ID}/${flag}`,\n      {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify({\n          accessToken,\n        }),\n      }\n    ).then((res) => res.json());\n    setEnabled(result.enabled);\n  };\n\n  // Only if enabled should we render the component children\n  if (enabled) return children;\n  else return '';\n}\n")),(0,r.kt)("p",null,"Now we can use this component anywhere in your app to conditionally show content like pages or buttons in our React app.\nLike this, where the changes are highlighted:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'  // highlight-start\n<FeatureFlag flag="release-announcement">\n  // highlight-end\n    <h1>We\'re currently doing a release and will be back soon</h1>\n// highlight-start\n</FeatureFlag>\n<FeatureFlag flag="premium">\n  // highlight-end\n    <span>This is premium content</span>\n  // highlight-start\n</FeatureFlag>\n<FeatureFlag flag="beta-feature">\n  // highlight-end\n    <a href="/beta">Button to beta feature</a>\n  // highlight-start\n</FeatureFlag>\n  // highlight-end\n'))),(0,r.kt)(o.Z,{value:"nextjs",label:"NextJS",mdxType:"TabItem"},(0,r.kt)("p",null,"Imagine you have a NextJS page component that contains elements like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// We just want to render this if we're doing a release\n<h1>We're currently doing a release and will be back soon</h1>\n\n// We just want to render this for premium customers\n<span>This is premium content</span>\n\n// We just want to render this for beta customers \n<a href=\"/beta\">Button to beta feature</a>\n")),(0,r.kt)("p",null,"To conditionally render these different elements we can create a simple component.\nName this component ",(0,r.kt)("inlineCode",{parentName:"p"},"FeatureFlags"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=/components/feature-flags.jsx",title:"/components/feature-flags.jsx"},"'use client'\n\nimport React, { useEffect, useState } from 'react';\n\n// The component takes the prop flag.\nexport default function FeatureFlag({ flag, children}) {\n\n    // Replace this with your own APP ID\n  const APP_ID = 'XXX';\n\n  // This will be our variable telling if the feature is enabled or and we should render the component children\n  // Initially this variable is false\n  const [enabled, setEnabled] = useState(false);\n\n  useEffect(() => {\n    // Evaluate the flag\n    const accessToken = window.localStorage.getItem('access_token');\n    if (accessToken) {\n      evaluate(accessToken);\n    }\n  }, []);\n\n  const evaluate = async (accessToken) => {\n    const result = await fetch(\n      `https://backendless.nblocks.cloud/flags/evaluate/${APP_ID}/${flag}`,\n      {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify({\n          accessToken,\n        }),\n      }\n    ).then((res) => res.json());\n    setEnabled(result.enabled);\n  };\n\n  // Only if enabled should we render the component children\n  if (enabled) return children;\n  else return '';\n}\n")),(0,r.kt)("p",null,"Now we can use this component anywhere in your app to conditionally show content like pages or buttons in our app.\nLike this, where the changes are highlighted:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'  // highlight-start\n<FeatureFlag flag="release-announcement">\n  // highlight-end\n    <h1>We\'re currently doing a release and will be back soon</h1>\n// highlight-start\n</FeatureFlag>\n<FeatureFlag flag="premium">\n  // highlight-end\n    <span>This is premium content</span>\n  // highlight-start\n</FeatureFlag>\n<FeatureFlag flag="beta-feature">\n  // highlight-end\n    <a href="/beta">Button to beta feature</a>\n  // highlight-start\n</FeatureFlag>\n  // highlight-end\n')))),(0,r.kt)("p",null,"Now when we have the flag names sorted out and integrated in the code we can go ahead and create them in Nblocks Admin."),(0,r.kt)("h2",{id:"managing-flags-in-nblocks-admin"},"Managing flags in Nblocks Admin"),(0,r.kt)("p",null,"When signin up for Nblocks you also got access to Nblocks Admin where you can customize and make changes to your app configuration and access other features."),(0,r.kt)("p",null,"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://admin.nblocks.cloud"},"Nblocks Admin")," and login."),(0,r.kt)("p",null,"In this part we'll be creating a feature flag that matches your flag ID in code and define who should have access to it"),(0,r.kt)("h3",{id:"step-1-create-flag"},"Step 1. Create flag"),(0,r.kt)("p",null,'Click the flags tab and create a new flag. Call it "beta-feature" since this is the flag we expect to evaluate in our code.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Adding a flag",src:a(986).Z,width:"3456",height:"2160"})),(0,r.kt)("p",null,"Now let's add conditions to this flag so it can be evaluated when the right user tries accessing it. "),(0,r.kt)("h3",{id:"step-2-create-segment"},"Step 2. Create segment"),(0,r.kt)("p",null,"With segments we can build reusable conditions that can be attached to our different feature flags.\nThink of this as you'd want to target an individual workspace, user or a group of roles. That's what Segments are for. "),(0,r.kt)("p",null,'Navigate to Feature flags and click the segments tab.\nClick add segment and name it "beta-customer" and specify to match on org id using the operator "Equals" and choose one of the current workspaces that has signed up for your app.  '),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Adding a segment",src:a(6186).Z,width:"3456",height:"2159"})),(0,r.kt)("h3",{id:"step-3-attach-the-segmentent-to-the-flag"},"Step 3. Attach the segmentent to the flag"),(0,r.kt)("p",null,'Get back to the flags tab and click edit on the "beta-feature" flag we created earlier.'),(0,r.kt)("p",null,'Add the "beta-customer" segment and make sure that "Enabled if match" is set to true.\nThis means that the flag will be evaluated to ',(0,r.kt)("inlineCode",{parentName:"p"},"enabled: true")," if any of the segments match on the current user."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Adding a flag",src:a(986).Z,width:"3456",height:"2160"})),(0,r.kt)("h3",{id:"step-4-activate-the-flag"},"Step 4. Activate the flag"),(0,r.kt)("p",null,"Flags are inactive by default protect you from making misstakes. Click on the Inactive status and toggle it to Active and click save."),(0,r.kt)("h2",{id:"testing-it"},"Testing it"),(0,r.kt)("p",null,'We can now test this by logging into your app with the workspace we selected as target in the "beta-customer" segment.\nYou should see the content that was set with the flag ',(0,r.kt)("inlineCode",{parentName:"p"},"beta-feature"),". Now you can try creating flags for the other elements."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"That's it, your now done with this quickstart")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Can I provide other information than access token?"),(0,r.kt)("p",null,"You can send whatever context information you want to the evaluation api.\nBut we've simplified it using a base structure so you can build segments in Nblocks Admin more easily."),(0,r.kt)("p",null,"The context object contains three areas, ",(0,r.kt)("inlineCode",{parentName:"p"},"user"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"org")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"device"),". "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each one of them contains the property ",(0,r.kt)("inlineCode",{parentName:"li"},"key"),". You can assign any value to this property."),(0,r.kt)("li",{parentName:"ul"},"You can also assign any values you want to the other properties."),(0,r.kt)("li",{parentName:"ul"},"When building the segment targets you can define is the value should be equal (",(0,r.kt)("inlineCode",{parentName:"li"},"=="),"), contain, beginWith or endWith the value.")),(0,r.kt)("p",null,"Structure of the body that can be sent to ",(0,r.kt)("inlineCode",{parentName:"p"},"/flags/evaluate")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    context: {\n        user: {\n            key: "useThisAsYouWant",\n            id: "63d2ab029e23db0afb07a5a7",\n            role: "ADMIN",\n            name: "John Doe";\n        }\n\n        org: {\n            key: "useThisAsYouWant",\n            id: "63d2ab029e23db0afb07a5a7",\n            plan: "PREMIUM",\n            name: "My Workspace"\n        }\n\n        device: {\n            key: "iphone"\n        }\n    },\n    accessToken: "XXXXXX"\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Providing the access token will automatically resolve all values for ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"org")," so you don't have to. Read more in the ",(0,r.kt)("a",{parentName:"p",href:"https://nebulr-group.github.io/nblocks-api-docs/#evaluate-a-flag"},"API reference")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Instead of making multiple requests for each flag you can evaluate all flags in bulk once for better performance. See the ",(0,r.kt)("a",{parentName:"p",href:"https://nebulr-group.github.io/nblocks-api-docs/#evaluate-flags-in-bulk"},"API reference"))))}p.isMDXComponent=!0},986:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-flag-d407ed811f18eb160461d517ada7b3ef.png"},6186:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-segment-org-id-50c10d962e98d8bb6594e08460e01ec0.png"}}]);