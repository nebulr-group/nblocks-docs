"use strict";(self.webpackChunknblocks_docs=self.webpackChunknblocks_docs||[]).push([[7398],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,g=d["".concat(i,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),o=n(6010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),o=n(7294),r=n(6010),l=n(2466),s=n(6550),i=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=d(e),[l,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[i,u]=g({queryString:n,groupId:a}),[p,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),f=(()=>{const e=i??p;return h({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),m(e)}),[u,m,r]),tabValues:r}}var f=n(2389);const k="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(p(t),i(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:d},l,{className:(0,r.Z)("tabs__item",b,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=m(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",k)},o.createElement(y,(0,a.Z)({},e,t)),o.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return o.createElement(w,(0,a.Z)({key:String(t)},e))}},1755:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(7462),o=(n(7294),n(3905)),r=n(4866),l=n(5162);const s={sidebar_position:2,sidebar_label:"Feature Flags Standalone",tags:["tutorial","standalone"]},i="Using Feature Flags Standalone",u={unversionedId:"feature-flags/standalone-feature-flags",id:"feature-flags/standalone-feature-flags",title:"Using Feature Flags Standalone",description:"On this page you will learn how to integrate your web application with Nblocks Feature Flags and use it standalone without other Nblocks features.",source:"@site/docs/03-feature-flags/standalone-feature-flags.mdx",sourceDirName:"03-feature-flags",slug:"/feature-flags/standalone-feature-flags",permalink:"/nblocks-docs/docs/feature-flags/standalone-feature-flags",draft:!1,tags:[{label:"tutorial",permalink:"/nblocks-docs/docs/tags/tutorial"},{label:"standalone",permalink:"/nblocks-docs/docs/tags/standalone"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Feature Flags Standalone",tags:["tutorial","standalone"]},sidebar:"tutorialSidebar",previous:{title:"Quickstart Feature Flags",permalink:"/nblocks-docs/docs/feature-flags/quickstart-feature-flags"},next:{title:"Payments portal (tutorial)",permalink:"/nblocks-docs/docs/payments/payments-portal"}},c={},p=[{value:"What is Standalone?",id:"what-is-standalone",level:2},{value:"Integrating in your code",id:"integrating-in-your-code",level:2},{value:"Adding user context information",id:"adding-user-context-information",level:3},{value:"Example code",id:"example-code",level:5},{value:"Managing flags in Nblocks Admin",id:"managing-flags-in-nblocks-admin",level:2},{value:"Step 1. Create flag",id:"step-1-create-flag",level:3},{value:"Step 2. Create group",id:"step-2-create-group",level:3},{value:"Step 3. Attach the group to the flag",id:"step-3-attach-the-group-to-the-flag",level:3},{value:"Testing it",id:"testing-it",level:2}],d={toc:p};function h(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-feature-flags-standalone"},"Using Feature Flags Standalone"),(0,o.kt)("p",null,"On this page you will learn how to integrate your web application with Nblocks Feature Flags and use it standalone without other Nblocks features.\nThis allows you to conditionally give access to or show / hide features or content to your users."),(0,o.kt)("p",null,"Some use cases for feature flags are: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Restrict access to premium content that just users with a certain plan can access"),(0,o.kt)("li",{parentName:"ul"},"Try beta features on a selection of customers"),(0,o.kt)("li",{parentName:"ul"},"Show a message to all users during a scheduled release."),(0,o.kt)("li",{parentName:"ul"},"Protect a feature with Role based access controll (RBAC).")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The content of this tutorial")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First we'll go through how you will apply a few lines of code to conditionally show content in your app."),(0,o.kt)("li",{parentName:"ol"},"Then we'll create the flags for the features in Nblocks Admin with conditions that should apply to it.")),(0,o.kt)("admonition",{title:"Prerequisites",type:"info"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"If you haven't already, ",(0,o.kt)("a",{parentName:"li",href:"/docs/getting-started/signup"},"sign up")," for Nblocks and get access to your ",(0,o.kt)("a",{parentName:"li",href:"/docs/getting-started/id-and-keys"},"app id")))),(0,o.kt)("h2",{id:"what-is-standalone"},"What is Standalone?"),(0,o.kt)("p",null,"Everything within Nblocks can cherrypicked and used as standalone features.\nThis guide shows you how you can integrate Feature flags into your project without using authentication or user management from Nblocks."),(0,o.kt)("p",null,"Use this as a way to tap into what Nblocks has to offer without going the whole route. But remember, it is when you use the features together the magic happens! \ud83d\ude80"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you have Nblocks manage your users, checkout the more simple approach using the magic of access tokens in ",(0,o.kt)("a",{parentName:"p",href:"/docs/feature-flags/quickstart-feature-flags"},"Feature flags Quickstart"))),(0,o.kt)("h2",{id:"integrating-in-your-code"},"Integrating in your code"),(0,o.kt)("p",null,"The integration essentially consists of requesting an evaluation of a flag by providing user context information and then handling the evaluation response."),(0,o.kt)("p",null,"The evaluation endpoint URL consists of your app id and the flag key you wish to evaluate."),(0,o.kt)("p",null,"The url can look like this: ",(0,o.kt)("a",{parentName:"p",href:"https://backendless.nblocks.cloud/flags/evaluate/APP_ID/FLAG_KEY"},"https://backendless.nblocks.cloud/flags/evaluate/APP_ID/FLAG_KEY")),(0,o.kt)("p",null,"And the response looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "enabled": true\n}\n')),(0,o.kt)("h3",{id:"adding-user-context-information"},"Adding user context information"),(0,o.kt)("p",null,"Adding user context information to your evaluation request enable you to build conditions for what and whom flags should be enabled for in Nblocks Admin.\nWe've simplified this by defining a base structure, the context object, of what information you can and should send."),(0,o.kt)("p",null,"We recommend you to send as much information as possible from start for a flexible experience without the need for re-releases while you add more flags and conditions. "),(0,o.kt)("p",null,"The context object contains three areas, ",(0,o.kt)("inlineCode",{parentName:"p"},"user"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"org")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"device"),". Each one of them reflect different traits and holds predefined relevant properties that you can assign.\nHere's an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    user: {\n        id: "john@doe.com",\n        role: "ADMIN",\n        name: "John Doe",\n        key: "custom-user-trait"\n    }\n\n    org: {\n        id: "66238feb99227400774266f5",\n        plan: "PREMIUM",\n        name: "My Workspace",\n        key: "custom-customer-trait",\n    }\n\n    device: {\n        key: "iphone"\n    }\n}\n')),(0,o.kt)("p",null,"Now, let's integrate this into our app!"),(0,o.kt)("h5",{id:"example-code"},"Example code"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"reactjs",label:"ReactJS",default:!0,mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the Nblocks react plugin")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @nebulr-group/nblocks-cli setup-react\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Add the NblocksProvider")),(0,o.kt)("p",null,"Add the ",(0,o.kt)("inlineCode",{parentName:"p"},"NblocksProvider")," to your top most component, e.g. the App component and wrap the rest of your app as children."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { NblocksProvider } from '@nebulr-group/nblocks-react';\n\nexport default function App() {\n  return (\n    <NblocksProvider config={{ appId: 'XXX'  /* Replace this with your own APP ID */ }}>\n      ... App components ...\n    </NblocksProvider>\n  );\n}\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Use the FeatureFlag Component")),(0,o.kt)("p",null,"Imagine you have a component that looks something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// We just want to render this for premium customers\n<span>Premium content</span>\n\n// We just want to render this for admins \n<a href=\"/beta\">Button to admin features</a>\n\n// We just want to render this if we're doing a release\n<h1>We're currently doing a release and will be back soon</h1>\n")),(0,o.kt)("p",null,"Now you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"FeatureFlagComponent")," from the plugin to conditionally show these components in your React app."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { FeatureFlagComponent } from \'@nebulr-group/nblocks-react\';\n\n// highlight-start  \n<FeatureFlagComponent flagKey="premium-features">\n// highlight-end\n    <span>Premium content</span>\n// highlight-start  \n</FeatureFlagComponent>\n<FeatureFlagComponent flagKey="admin-features">\n// highlight-end\n    <a href="/beta">Button to admin features</a>\n// highlight-start  \n</FeatureFlagComponent>\n<FeatureFlagComponent flagKey="release-announcement">\n// highlight-end\n    <h1>We\'re currently doing a release and will be back soon</h1>\n// highlight-start  \n</FeatureFlagComponent>\n// highlight-end\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Provide the user context")),(0,o.kt)("p",null,"To attach context information to the flags when they get evaluated use ",(0,o.kt)("inlineCode",{parentName:"p"},"setContext")," method from the ",(0,o.kt)("inlineCode",{parentName:"p"},"useFlags()")," hook.\nThis is especially useful to set during your login process when the user is identified."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useFlags } from '@nebulr-group/nblocks-react';\n\nconst { setContext } = useFlags();\n\nsetContext({\n  user: {\n    id: \"john@doe.com\",\n    ...\n  }\n})\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When calling ",(0,o.kt)("inlineCode",{parentName:"p"},"setContext()")," all your FeatureFlagComponents will reload automatically. "),(0,o.kt)("p",{parentName:"admonition"},"You can also provide an inital flags context to ",(0,o.kt)("inlineCode",{parentName:"p"},"NblocksProvider"),"."))),(0,o.kt)(l.Z,{value:"reactjs-vanilla",label:"ReactJS (vanilla)",mdxType:"TabItem"},(0,o.kt)("p",null,"Imagine you have a component that looks something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// We just want to render this if we're doing a release\n<h1>We're currently doing a release and will be back soon</h1>\n\n// We just want to render this for premium customers\n<span>This is premium content</span>\n\n// We just want to render this for beta customers \n<a href=\"/beta\">Button to beta feature</a>\n")),(0,o.kt)("p",null,"To conditionally render these different elements we can create a simple component.\nName this component ",(0,o.kt)("inlineCode",{parentName:"p"},"FeatureFlags"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEffect, useState } from 'react';\n\n// The component takes the prop flag.\nexport default function FeatureFlag({ flag, children }) {\n\n  // Replace this with your own APP ID\n  const APP_ID = 'XXX';\n\n  // This will be our variable telling if the feature is enabled or and we should render the component children\n  // Initially this variable is false\n  const [enabled, setEnabled] = useState(false);\n\n  useEffect(() => {\n    evaluate();\n  }, []);\n\n  const evaluate = async () => {\n    \n    // We fetch information from localStorage that we have previously set e.g. during login \n    const context = window.localStorage.getItem('context');\n\n    const result = await fetch(\n      `https://backendless.nblocks.cloud/flags/evaluate/${APP_ID}/${flag}`,\n      {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify({\n          context,\n        }),\n      }\n    ).then((res) => res.json());\n    setEnabled(result.enabled);\n  };\n\n  // Only if enabled should we render the component children\n  if (enabled) return children;\n  else return '';\n}\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For the purpose of simplicity this component use a context object from localStorage.\nThis object could be stored during your login process when the user is identified.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Instead of making multiple requests for each flag you can evaluate all flags in bulk once for better performance. See the ",(0,o.kt)("a",{parentName:"p",href:"https://nebulr-group.github.io/nblocks-api-docs/#evaluate-flags-in-bulk"},"API reference"))),(0,o.kt)("p",null,"Now we can use this component anywhere in your app to conditionally show content like pages or buttons in our React app.\nLike this, where the changes are highlighted:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'  // highlight-start\n<FeatureFlag flag="release-announcement">\n  // highlight-end\n    <h1>We\'re currently doing a release and will be back soon</h1>\n// highlight-start\n</FeatureFlag>\n<FeatureFlag flag="premium">\n  // highlight-end\n    <span>This is premium content</span>\n  // highlight-start\n</FeatureFlag>\n<FeatureFlag flag="beta-feature">\n  // highlight-end\n    <a href="/beta">Button to beta feature</a>\n  // highlight-start\n</FeatureFlag>\n  // highlight-end\n'))),(0,o.kt)(l.Z,{value:"nextjs",label:"NextJS",mdxType:"TabItem"},(0,o.kt)("p",null,"Imagine you have a NextJS page component that contains elements like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// We just want to render this if we're doing a release\n<h1>We're currently doing a release and will be back soon</h1>\n\n// We just want to render this for premium customers\n<span>This is premium content</span>\n\n// We just want to render this for beta customers \n<a href=\"/beta\">Button to beta feature</a>\n")),(0,o.kt)("p",null,"To conditionally render these different elements we can create a simple component.\nName this component ",(0,o.kt)("inlineCode",{parentName:"p"},"FeatureFlags"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=/components/feature-flags.jsx",title:"/components/feature-flags.jsx"},"'use client'\n\nimport React, { useEffect, useState } from 'react';\n\n// The component takes the prop flag.\nexport default function FeatureFlag({ flag, children}) {\n\n    // Replace this with your own APP ID\n  const APP_ID = 'XXX';\n\n  // This will be our variable telling if the feature is enabled or and we should render the component children\n  // Initially this variable is false\n  const [enabled, setEnabled] = useState(false);\n\n  useEffect(() => {\n    evaluate();\n  }, []);\n\n  const evaluate = async (accessToken) => {\n    \n    // We fetch information from localStorage that we have previously set e.g. during login \n    const context = window.localStorage.getItem('context');\n\n    const result = await fetch(\n      `https://backendless.nblocks.cloud/flags/evaluate/${APP_ID}/${flag}`,\n      {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify({\n          context,\n        }),\n      }\n    ).then((res) => res.json());\n    setEnabled(result.enabled);\n  };\n\n  // Only if enabled should we render the component children\n  if (enabled) return children;\n  else return '';\n}\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For the purpose of simplicity this component use a context object from localStorage.\nThis object could be stored during your login process when the user is identified.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Instead of making multiple requests for each flag you can evaluate all flags in bulk once for better performance. See the ",(0,o.kt)("a",{parentName:"p",href:"https://nebulr-group.github.io/nblocks-api-docs/#evaluate-flags-in-bulk"},"API reference"))),(0,o.kt)("p",null,"Now we can use this component anywhere in your app to conditionally show content like pages or buttons in our app.\nLike this, where the changes are highlighted:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'  // highlight-start\n<FeatureFlag flag="release-announcement">\n  // highlight-end\n    <h1>We\'re currently doing a release and will be back soon</h1>\n// highlight-start\n</FeatureFlag>\n<FeatureFlag flag="premium">\n  // highlight-end\n    <span>This is premium content</span>\n  // highlight-start\n</FeatureFlag>\n<FeatureFlag flag="beta-feature">\n  // highlight-end\n    <a href="/beta">Button to beta feature</a>\n  // highlight-start\n</FeatureFlag>\n  // highlight-end\n'))),(0,o.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("p",null,"Imagine you're developing a new AI-model, and want to easily switch between the new and the old model:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'if (useNewModel) {\n    // Logic for new model\n    response.getWriter().write("Running new model");\n    return;\n} else {\n    // Logic for old model\n    response.getWriter().write("Running old model");\n    return;\n}\n')),(0,o.kt)("p",null,"To conditionally run the new model, we can create a new class called ",(0,o.kt)("inlineCode",{parentName:"p"},"FeatureFlags"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"title=src/main/java/com/mycompany/app/FeatureFlag.java",title:"src/main/java/com/mycompany/app/FeatureFlag.java"},'package com.mycompany.app;\n\nimport java.io.IOException;\nimport java.net.URI;\nimport java.net.http.HttpClient;\nimport java.net.http.HttpRequest;\nimport java.net.http.HttpResponse;\nimport org.json.JSONObject;\n\nimport javax.servlet.ServletException;\nimport javax.servlet.http.HttpServletRequest;\nimport javax.servlet.http.HttpServletResponse;\n\npublic class FeatureFlag {\n\n    // Replace this with your own APP ID\n    // highlight-start\n    private static final String APP_ID = "XXX";\n    // highlight-end\n\n    private static final String FEATURE_FLAG_URL = "https://backendless.nblocks.cloud/flags/evaluate/" + APP_ID + "/";\n\n    public static Boolean evaluateFlag(String flagId, HttpServletRequest request, HttpServletResponse response)\n            throws ServletException, IOException {\n        try {\n            // Grab your context information from your storage\n            // and build the feature flags context\n            String context = "{\\"device\\": {\\"key\\": \\"iphone\\"}}";\n\n            // Prepare the request\n            JSONObject requestBody = new JSONObject().put("context", context);\n\n            HttpRequest flagsRequest = HttpRequest.newBuilder()\n                    .uri(URI.create(FEATURE_FLAG_URL + flagId))\n                    .header("Content-Type", "application/json")\n                    .POST(HttpRequest.BodyPublishers.ofString(requestBody.toString()))\n                    .build();\n\n            // Send the request\n            HttpClient client = HttpClient.newHttpClient();\n\n            HttpResponse<String> flagResponse = client.send(flagsRequest, HttpResponse.BodyHandlers.ofString());\n            // Extract flag status from response\n            String flagResponseBody = flagResponse.body();\n            JSONObject flag = new JSONObject(flagResponseBody);\n\n            return flag.getBoolean("enabled");\n        } catch (Exception e) {\n            e.printStackTrace();\n            return false;\n        }\n    }\n}\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For the purpose of simplicity this class use a context object previously saved in a storage.\nThis object could be stored during your login process when the user is identified.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Instead of making multiple requests for each flag you can evaluate all flags in bulk once for better performance. See the ",(0,o.kt)("a",{parentName:"p",href:"https://nebulr-group.github.io/nblocks-api-docs/#evaluate-flags-in-bulk"},"API reference"))),(0,o.kt)("p",null,"Now we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"evaluateFlag")," method anywhere in your app to conditionally run operations, such as the new model.\nLike in this ",(0,o.kt)("inlineCode",{parentName:"p"},"ModelServlet"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package com.mycompany.app;\n\nimport java.io.IOException;\n\nimport javax.servlet.ServletException;\nimport javax.servlet.http.HttpServlet;\nimport javax.servlet.http.HttpServletRequest;\nimport javax.servlet.http.HttpServletResponse;\n\npublic class ModelServlet extends HttpServlet {\n    @Override\n    protected void doGet(HttpServletRequest request, HttpServletResponse response)\n            throws ServletException, IOException {\n        try {\n            Boolean useNewModel = FeatureFlag.evaluateFlag("new-model", request, response);\n            if (useNewModel) {\n                // Logic for new model\n                response.getWriter().write("Running new model");\n                return;\n            } else {\n                // Logic for old model\n                response.getWriter().write("Running old model");\n                return;\n            }\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n}\n')))),(0,o.kt)("p",null,"Now when we have the flag names sorted out and integrated in the code we can go ahead and create them in Nblocks Admin."),(0,o.kt)("h2",{id:"managing-flags-in-nblocks-admin"},"Managing flags in Nblocks Admin"),(0,o.kt)("p",null,"When signing up for Nblocks you also got access to Nblocks Admin where you can customize and make changes to your app configuration and access other features."),(0,o.kt)("p",null,"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://admin.nblocks.cloud"},"Nblocks Admin")," and login."),(0,o.kt)("p",null,"In this part we'll be creating a feature flag that matches your flag ID in code and define who should have access to it"),(0,o.kt)("h3",{id:"step-1-create-flag"},"Step 1. Create flag"),(0,o.kt)("p",null,'Click the flags tab and create a new flag. Call it "beta-feature" since this is the flag we expect to evaluate in our code.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Adding a flag",src:n(986).Z,width:"3456",height:"1918"})),(0,o.kt)("p",null,"Now let's add conditions to this flag so it can be evaluated when the right user tries accessing it. "),(0,o.kt)("h3",{id:"step-2-create-group"},"Step 2. Create group"),(0,o.kt)("p",null,"With groups we can build reusable conditions that can be attached to our different feature flags.\nThink of this as you'd want to target an individual tenant, user or a group of roles. That's what groups are for. "),(0,o.kt)("p",null,'Navigate to Feature flags and click the groups tab.\nClick add group and name it "beta-customer" and specify to match on "Workspace name" using the operator "Begins with". Enter the value "beta-".\nThis means all users with the workspace name that begins with "beta-" will be matched for this group and it\'s a good starting point to test with the context you will provide when testing.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Adding a group",src:n(9194).Z,width:"3456",height:"1916"})),(0,o.kt)("h3",{id:"step-3-attach-the-group-to-the-flag"},"Step 3. Attach the group to the flag"),(0,o.kt)("p",null,'Get back to the flags tab and click edit on the "beta-feature" flag we created earlier.'),(0,o.kt)("p",null,'Add the "beta-customer" group and make sure that "Flag is active" is set to true.\nThis means that the flag will be evaluated to ',(0,o.kt)("inlineCode",{parentName:"p"},"enabled: true")," if any of the groups match on the current user."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Adding a flag",src:n(4356).Z,width:"3456",height:"1916"})),(0,o.kt)("h2",{id:"testing-it"},"Testing it"),(0,o.kt)("p",null,"You can now test this by starting your application. Save a test context object into localStorage directly from the browser developer console or add it to your own logic.\nMake sure the workspace name is set to something that begins with ",(0,o.kt)("inlineCode",{parentName:"p"},"beta-...."),".\nYou should see the content that was set with the flag ",(0,o.kt)("inlineCode",{parentName:"p"},"beta-feature"),". Now you can try creating flags for the other elements."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"That's it, your now done with this tutorial")))}h.isMDXComponent=!0},986:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/add-flag-0c78c8fb0345b56f652fc0907e954d3e.png"},9194:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/add-segment-org-id-standalone-a43cbbd0a1e778f46316071dd1413c36.png"},4356:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/update-flag-with-segment-b4aab303c6114a2a3b0c816a5fef2557.png"}}]);