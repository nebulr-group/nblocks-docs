"use strict";(self.webpackChunknblocks_docs=self.webpackChunknblocks_docs||[]).push([[8081],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(f,l(l({ref:n},p),{},{components:t})):a.createElement(f,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),r=t(6010);const o="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(7462),r=t(7294),o=t(6010),l=t(2389),i=t(7392),c=t(7094),s=t(2466);const p="tabList__CuJ",u="tabItem_LNqP";function d(e){const{lazy:n,block:t,defaultValue:l,values:d,groupId:m,className:f}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??b.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),h=(0,i.l)(g,((e,n)=>e.value===n.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===l?l:l??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:v}=(0,c.U)(),[w,N]=(0,r.useState)(y),S=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=m){const e=k[m];null!=e&&e!==w&&g.some((n=>n.value===e))&&N(e)}const O=e=>{const n=e.currentTarget,t=S.indexOf(n),a=g[t].value;a!==w&&(T(n),N(a),null!=m&&v(m,String(a)))},x=e=>{let n=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;n=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;n=S[t]??S[S.length-1];break}}n?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},f)},g.map((e=>{let{value:n,label:t,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>S.push(e),onKeyDown:x,onClick:O},l,{className:(0,o.Z)("tabs__item",u,l?.className,{"tabs__item--active":w===n})}),t??n)}))),n?(0,r.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function m(e){const n=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},4738:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=t(7462),r=(t(7294),t(3905)),o=t(5488),l=t(5162);const i={sidebar_position:1},c="Branding",s={unversionedId:"concepts/branding",id:"concepts/branding",title:"Branding",description:"Flexible branding has been a top priority for us and Nblocks lets you apply your own brand to your app. This applies to all aspects like colors, logos, wordings, emailing etc. Learn how to setup your app with your own custom branding.",source:"@site/docs/concepts/branding.mdx",sourceDirName:"concepts",slug:"/concepts/branding",permalink:"/nblocks-docs/docs/concepts/branding",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/concepts/branding.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"SDK client",permalink:"/nblocks-docs/docs/core/sdk-client"},next:{title:"i18n & Translations",permalink:"/nblocks-docs/docs/concepts/translations"}},p={},u=[{value:"Frontend plugins",id:"frontend-plugins",level:2},{value:"Colors, Fonts and Spacing",id:"colors-fonts-and-spacing",level:3},{value:"Color scheme",id:"color-scheme",level:4},{value:"Fonts",id:"fonts",level:4},{value:"Spacing",id:"spacing",level:4},{value:"App&#39;s Branding Configuration",id:"apps-branding-configuration",level:2}],d={toc:u};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"branding"},"Branding"),(0,r.kt)("p",null,"Flexible branding has been a top priority for us and Nblocks lets you apply your own brand to your app. This applies to all aspects like colors, logos, wordings, emailing etc. Learn how to setup your app with your own custom branding."),(0,r.kt)("p",null,"Branding can be customized in two ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#frontend-plugins"},(0,r.kt)("strong",{parentName:"a"},"Frontend plugins"))," styling can be overridden with your own variables for colors, fonts, settings and translations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#app-variables"},(0,r.kt)("strong",{parentName:"a"},"App variables"))," like App name, logo, email sender alias etc. that Nblocks will use in all interactions with your users. This data is stored on your app model in the NBlocks platform.")),(0,r.kt)("h2",{id:"frontend-plugins"},"Frontend plugins"),(0,r.kt)("p",null,"Our frontend plugins come prebaked with colors, fonts and other default settings which can easily be changed to match your requirements."),(0,r.kt)("h3",{id:"colors-fonts-and-spacing"},"Colors, Fonts and Spacing"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"React",label:"React",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"We exposed css variables which you can use to change the color theme of the Nblocks components."),(0,r.kt)("h4",{id:"color-scheme"},"Color scheme"),(0,r.kt)("p",null,"We use the default Tailwind colour pallete. You can easily change the colors by declaring global CSS variables in your CSS file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},":root {\n  /* White */\n  --color-white: #ffffff;\n  /* Primary */\n  --color-primary-50: #faf5ff;\n  --color-primary-100: #f3e8ff;\n  --color-primary-200: #e9d5ff;\n  --color-primary-300: #f3e8ff;\n  --color-primary-400: #c084fc;\n  --color-primary-500: #a855f7;\n  --color-primary-600: #9333ea;\n  --color-primary-700: #7e22ce;\n  --color-primary-800: #6b21a8;\n  --color-primary-900: #581c87;\n  /* Secondary */\n  --color-tertiary-50: #f9fafb;\n  --color-tertiary-100: #f3f4f6;\n  --color-tertiary-200: #e5e7eb;\n  --color-tertiary-300: #d1d5db;\n  --color-tertiary-400: #9ca3af;\n  --color-tertiary-500: #6b7280;\n  --color-tertiary-600: #4b5563;\n  --color-tertiary-700: #374151;\n  --color-tertiary-800: #1f2937;\n  --color-tertiary-900: #111827;\n  /* Success */\n  --color-success-50: #f0fdf4;\n  --color-success-100: #dcfce7;\n  --color-success-200: #bbf7d0;\n  --color-success-300: #86efac;\n  --color-success-400: #4ade80;\n  --color-success-500: #22c55e;\n  --color-success-600: #16a34a;\n  --color-success-700: #15803d;\n  --color-success-800: #166534;\n  --color-success-900: #14532d;\n  /* Warning */\n  --color-warning-50: #fefce8;\n  --color-warning-100: #fef9c3;\n  --color-warning-200: #fef08a;\n  --color-warning-300: #fde047;\n  --color-warning-400: #facc15;\n  --color-warning-500: #eab308;\n  --color-warning-600: #ca8a04;\n  --color-warning-700: #a16207;\n  --color-warning-800: #854d0e;\n  --color-warning-900: #713f12;\n  /* Danger */\n  --color-danger-50: #fef2f2;\n  --color-danger-100: #fee2e2;\n  --color-danger-200: #fecaca;\n  --color-danger-300: #fca5a5;\n  --color-danger-400: #f87171;\n  --color-danger-500: #ef4444;\n  --color-danger-600: #dc2626;\n  --color-danger-700: #b91c1c;\n  --color-danger-800: #991b1b;\n  --color-danger-900: #7f1d1d;\n  /* Info */\n  --color-info-50: #eff6ff;\n  --color-info-100: #dbeafe;\n  --color-info-200: #bfdbfe;\n  --color-info-300: #93c5fd;\n  --color-info-400: #60a5fa;\n  --color-info-500: #3b82f6;\n  --color-info-600: #2563eb;\n  --color-info-700: #1d4ed8;\n  --color-info-800: #1e40af;\n  --color-info-900: #1e3a8a;\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"There are two useful tools you can use for generating 50-900 shades of your own custom colors, ",(0,r.kt)("a",{parentName:"p",href:"https://palettte.app/"},"Palettte")," and ",(0,r.kt)("a",{parentName:"p",href:"https://colorbox.io/"},"ColorBox"),".")),(0,r.kt)("h4",{id:"fonts"},"Fonts"),(0,r.kt)("p",null,"As with colors the fonts can easily be changed using global CSS variables."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},":root {\n  /* Fonts */\n  --font-body: Inter, san-serif;\n  --font-paragraph: Inter, san-serif;\n  --font-heading: Inter, san-serif;\n}\n")),(0,r.kt)("h4",{id:"spacing"},"Spacing"),(0,r.kt)("p",null,"You can also edit the default spacing used in the nblocks views layout. Spacing can also be changed using the global CSS variables."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},":root {\n  /* Spacing */\n  /* Spacing/Sizing scale */\n  --px-space: 1px;\n  --space-0: 0;\n  --space-0-5: 0.125rem;\n  --space-1: 0.25rem;\n  --space-1-5: 0.375rem;\n  --space-2: 0.5rem;\n  --space-2-5: 0.625rem;\n  --space-3: 0.75rem;\n  --space-3-5: 0.875rem;\n  --space-4: 1rem;\n  --space-5: 1.25rem;\n  --space-6: 1.5rem;\n  --space-7: 1.75rem;\n  --space-8: 2rem;\n  --space-9: 2.25rem;\n  --space-10: 2.5rem;\n  --space-11: 2.75rem;\n  --space-12: 3rem;\n  --space-14: 3.5rem;\n  --space-16: 4rem;\n  --space-20: 5rem;\n  --space-28: 7rem;\n  --space-32: 8rem;\n  --space-40: 10rem;\n  --space-44: 11rem;\n  --space-48: 12rem;\n  --space-52: 13rem;\n  --space-56: 14rem;\n  --space-60: 15rem;\n  --space-64: 16rem;\n  --space-72: 18rem;\n  --space-80: 20rem;\n  --space-96: 24rem;\n}\n")))),(0,r.kt)("h2",{id:"apps-branding-configuration"},"App's Branding Configuration"),(0,r.kt)("p",null,"Using our backend plugins or not, Nblocks have already stored an App model which is up to you to change.\nYour app model holds some variables that are central to how content like onboarding material from Nblocks looks like."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"Your app name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"logo"),(0,r.kt)("td",{parentName:"tr",align:null},"A public url to your logo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"emailSenderName"),(0,r.kt)("td",{parentName:"tr",align:null},"This will be the sender name in all Nblocks emails")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"emailSenderEmail"),(0,r.kt)("td",{parentName:"tr",align:null},"This will be the sender email in all Nblocks emails. You'll have to verify this email address before being able to use it")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"websiteUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"A public url to a landing page. Used in email footers etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"privacyPolicyUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"A public url to a privacy policy. Used in email footers etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"termsOfServiceUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"A public url to a terms of service. Used in email footers etc.")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Changing the ",(0,r.kt)("inlineCode",{parentName:"p"},"emailSenderName")," will send a verification email to that email address.\nOnly after you've verified that you're the rightful owner of the email address will Nblocks use it.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Updating your app model")),(0,r.kt)("p",null,"You can update your app model with the built in Nblocks Api client, Postman, Curl or any HTTP POST tool.\nBelow we use the built in Nblocks Api client that can be obtained via the plugin."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"nestjs",label:"NestJS",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'constructor(\n    private readonly clientService: ClientService <--- Inject the ClientService\n  ) {}\n...\n// Set branding\nawait this.clientService.client.updateApp({\n    "name": "My App",\n    "logo": "https://www.example.com/logo.png",\n    "emailSenderName": "My app [Notification]",\n    "emailSenderEmail": "notifications@example.com",\n    "websiteUrl": "https://www.example.com",\n    "privacyPolicyUrl": "https://www.example.com/privacy-policy",\n    "termsOfServiceUrl": "https://www.example.com/terms-of-service"\n});\n')))))}m.isMDXComponent=!0}}]);