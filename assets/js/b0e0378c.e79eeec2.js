"use strict";(self.webpackChunknblocks_docs=self.webpackChunknblocks_docs||[]).push([[2915],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),i=n(6550),s=n(1980),c=n(7392),u=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=g({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var b=n(2389);const k="tabList__CuJ",y="tabItem_LNqP";function f(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==i&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",y,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(f,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},7290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),l=n(5162);const i={sidebar_position:3,sidebar_label:"Quickstart Branding",tags:["frontend","user management","guide","quickstart"]},s="Quickstart Branding",c={unversionedId:"authentication-and-access/quickstart-branding",id:"authentication-and-access/quickstart-branding",title:"Quickstart Branding",description:"In this quickstart we'll apply branding to the Nblocks hosted views like Nblock Login and User management portal.",source:"@site/docs/02-authentication-and-access/quickstart-branding.mdx",sourceDirName:"02-authentication-and-access",slug:"/authentication-and-access/quickstart-branding",permalink:"/nblocks-docs/docs/authentication-and-access/quickstart-branding",draft:!1,tags:[{label:"frontend",permalink:"/nblocks-docs/docs/tags/frontend"},{label:"user management",permalink:"/nblocks-docs/docs/tags/user-management"},{label:"guide",permalink:"/nblocks-docs/docs/tags/guide"},{label:"quickstart",permalink:"/nblocks-docs/docs/tags/quickstart"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Quickstart Branding",tags:["frontend","user management","guide","quickstart"]},sidebar:"tutorialSidebar",previous:{title:"Quickstart User Ready",permalink:"/nblocks-docs/docs/authentication-and-access/quickstart-user-ready"},next:{title:"Quickstart Feature Flags",permalink:"/nblocks-docs/docs/Feature-flags/quickstart-feature-flags"}},u={},p=[{value:"Step 1. Change your logo",id:"step-1-change-your-logo",level:2},{value:"Example code",id:"example-code",level:4},{value:"Step 2. Change the styling using custom CSS",id:"step-2-change-the-styling-using-custom-css",level:2},{value:"Example code",id:"example-code-1",level:4},{value:"Step 3. Change a text entry using custom translation",id:"step-3-change-a-text-entry-using-custom-translation",level:2},{value:"Example code",id:"example-code-2",level:4},{value:"Test it",id:"test-it",level:2}],d={toc:p};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quickstart-branding"},"Quickstart Branding"),(0,r.kt)("p",null,"In this quickstart we'll apply branding to the Nblocks hosted views like Nblock Login and User management portal."),(0,r.kt)("p",null,"We'll accomplish this in three steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Change the logo"),(0,r.kt)("li",{parentName:"ol"},"Change the colors and fonts using CSS"),(0,r.kt)("li",{parentName:"ol"},"Override a specific button text with our own text")),(0,r.kt)("p",null,"At the end of this quickstart you'll take the default brand from this."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Without branding",src:n(9988).Z,width:"3456",height:"2161"})),(0,r.kt)("p",null,"To something like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"With branding",src:n(2825).Z,width:"3456",height:"2160"})),(0,r.kt)("admonition",{title:"Prerequisites",type:"info"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"If you haven't already, ",(0,r.kt)("a",{parentName:"li",href:"/docs/getting-started/signup"},"sign up")," for Nblocks and get access to your ",(0,r.kt)("a",{parentName:"li",href:"/docs/getting-started/id-and-keys"},"app id and api key")," "))),(0,r.kt)("h2",{id:"step-1-change-your-logo"},"Step 1. Change your logo"),(0,r.kt)("p",null,"First up is changing the logo. Your logo is displayed on both Nblocks login and emails that Nblocks sends on your behalf. The logo is part of your app profile and can easily be changed by pushing an updated JSON body with the ",(0,r.kt)("inlineCode",{parentName:"p"},"logo")," property to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/app")," endpoint."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"logo")," property should be URL to a image on the internet. Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "logo": "https://nebulr-public-assets.s3.eu-west-1.amazonaws.com/acme-logo.png"\n}\n')),(0,r.kt)("h4",{id:"example-code"},"Example code"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"cURL",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Copy the below cURL code and paste it into your terminal from anywhere."),(0,r.kt)("p",null,"You'll need to add your own ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/id-and-keys"},"app api key")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"x-api-key")," header."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request PUT 'https://account-api.nebulr-core.com/app' \\\n--header 'x-api-key: XXXX' \\\n--header 'Content-Type: application/json' \\\n--data '{\n    \"logo\": \"https://nebulr-public-assets.s3.eu-west-1.amazonaws.com/acme-logo.png\"\n}'\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Curious in what more ways you can use the  ",(0,r.kt)("inlineCode",{parentName:"p"},"/app")," endpoint? See the ",(0,r.kt)("a",{parentName:"p",href:"https://nebulr-group.github.io/nblocks-api-docs/#update-app-profile"},"API reference"))))),(0,r.kt)("h2",{id:"step-2-change-the-styling-using-custom-css"},"Step 2. Change the styling using custom CSS"),(0,r.kt)("p",null,"We're going to change the brand primary color, the body background and also the font-family. This can be done with a CSS file like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"html,body { background-color: #00ff8629 !important; }\n\n:root {\n    --color-primary-50: 0 48 255;\n    --color-primary-100: 0 43 230;\n    --color-primary-200: 0 38 204;\n    --color-primary-300: 0 34 179;\n    --color-primary-400: 0 29 153;\n    --color-primary-500: 0 24 128;\n    --color-primary-600: 0 19 102;\n    --color-primary-700: 0 14 76;\n    --color-primary-800: 0 10 51;\n    --color-primary-900: 0 0 0;\n\n    --font-body: monospace !important;\n    --font-paragraph: monospace !important;\n    --font-heading: monospace !important;\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can see more examples and a base CSS file in the ",(0,r.kt)("a",{parentName:"p",href:"https://nebulr-group.github.io/nblocks-api-docs/#set-custom-css"},"API reference"))),(0,r.kt)("h4",{id:"example-code-1"},"Example code"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"cURL",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Copy the below cURL code and paste it into your terminal from anywhere."),(0,r.kt)("p",null,"You'll need to add your own ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/id-and-keys"},"app api key")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"x-api-key")," header."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'https://backendless.nblocks.cloud/brand/css' \\\n--header 'x-api-key: XXXX' \\\n--header 'Content-Type: application/json' \\\n--data '{\n    \"content\": \"html,body { background-color: #00ff8629 !important; } :root { --color-primary-50: 0 48 255; --color-primary-100: 0 43 230; --color-primary-200: 0 38 204; --color-primary-300: 0 34 179; --color-primary-400: 0 29 153; --color-primary-500: 0 24 128; --color-primary-600: 0 19 102; --color-primary-700: 0 14 76; --color-primary-800: 0 10 51; --color-primary-900: 0 0 0; --font-body: monospace !important; --font-paragraph: monospace !important; --font-heading: monospace !important; }\"\n}'\n")))),(0,r.kt)("h2",{id:"step-3-change-a-text-entry-using-custom-translation"},"Step 3. Change a text entry using custom translation"),(0,r.kt)("p",null,'In the final step, we\'re going to override the translations by providing a JSON body of key value pairs. Here we want to change the login button to say "Log in" instead of "Sign in".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Sign in": "Log in"\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can see more examples and a complete translation file in the ",(0,r.kt)("a",{parentName:"p",href:"https://nebulr-group.github.io/nblocks-api-docs/#set-custom-translations"},"API reference"))),(0,r.kt)("h4",{id:"example-code-2"},"Example code"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"cURL",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Copy the below cURL code and paste it into your terminal from anywhere."),(0,r.kt)("p",null,"You'll need to add your own ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/id-and-keys"},"app api key")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"x-api-key")," header."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'https://backendless.nblocks.cloud/brand/translations' \\\n--header 'x-api-key: XXXX' \\\n--header 'Content-Type: application/json' \\\n--data '{\n    \"Sign in\": \"Log in\"\n}'\n")))),(0,r.kt)("h2",{id:"test-it"},"Test it"),(0,r.kt)("p",null,"To see how the new branding was applied you can open up a new tab and navgigate to Nblocks Login."),(0,r.kt)("p",null,"Copy this link, paste it into a new browser tab and replace the APP_ID to your own app id"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://auth.nblocks.cloud/url/login/APP_ID\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"That's it!")," You're down with this quickstart."))}m.isMDXComponent=!0},2825:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/branding-example-bb71cc0b598c7d756e939e1abc1d44b8.png"},9988:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/login-screen-8e1ca7623214fa765ddf83956e1a5eb7.png"}}]);