"use strict";(self.webpackChunknblocks_docs=self.webpackChunknblocks_docs||[]).push([[850],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?r.createElement(f,i(i({ref:t},p),{},{components:a})):r.createElement(f,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(7462),n=a(7294),o=a(6010),i=a(2466),l=a(6550),s=a(1980),c=a(7392),p=a(12);function u(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=d(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=f({queryString:a,groupId:r}),[u,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,p.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),k=(()=>{const e=s??u;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var k=a(2389);const g="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),r=c[a].value;r!==l&&(u(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",b,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=h(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",g)},n.createElement(y,(0,r.Z)({},e,t)),n.createElement(w,(0,r.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return n.createElement(v,(0,r.Z)({key:String(t)},e))}},7694:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=a(7462),n=(a(7294),a(3905)),o=a(4866),i=a(5162);const l={sidebar_position:2,sidebar_label:"Quickstart Microsoft marketplace"},s="Quickstart Microsoft commercial marketplace",c={unversionedId:"payments/quickstart-microsoft-commercial-marketplace",id:"payments/quickstart-microsoft-commercial-marketplace",title:"Quickstart Microsoft commercial marketplace",description:"On this page you will integrate your web application with Microsoft commercial marketplace.",source:"@site/docs/04-payments/quickstart-microsoft-commercial-marketplace.mdx",sourceDirName:"04-payments",slug:"/payments/quickstart-microsoft-commercial-marketplace",permalink:"/nblocks-docs/docs/payments/quickstart-microsoft-commercial-marketplace",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Quickstart Microsoft marketplace"},sidebar:"tutorialSidebar",previous:{title:"Quickstart Payments",permalink:"/nblocks-docs/docs/payments/quickstart-payments"}},p={},u=[{value:"Generate apps and secrets in Microsoft Azure portal",id:"generate-apps-and-secrets-in-microsoft-azure-portal",level:2},{value:"Step 1. Create a new app registration for the marketplace integration",id:"step-1-create-a-new-app-registration-for-the-marketplace-integration",level:3},{value:"Step 2. Create new app registrations for Azure AD SSO Login",id:"step-2-create-new-app-registrations-for-azure-ad-sso-login",level:3},{value:"Step 3. Store the Azure app secrets in Nblocks",id:"step-3-store-the-azure-app-secrets-in-nblocks",level:3},{value:"Example code",id:"example-code",level:4},{value:"Create a new marketplace offer",id:"create-a-new-marketplace-offer",level:2},{value:"Test with a purchase",id:"test-with-a-purchase",level:2}],d={toc:u};function m(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"quickstart-microsoft-commercial-marketplace"},"Quickstart Microsoft commercial marketplace"),(0,n.kt)("p",null,"On this page you will integrate your web application with ",(0,n.kt)("a",{parentName:"p",href:"https://partner.microsoft.com/en-US/partnership/the-commercial-marketplace"},"Microsoft commercial marketplace"),".\nThis allows you to list a transactional SaaS offer on either Azure Marketplace or Microsoft AppSource in no-time."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The content of this quickstart")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Firstly, we'll create an app and generate secrets in Microsoft Azure portal to give Nblocks access to the integration."),(0,n.kt)("li",{parentName:"ol"},"Secondly, we'll create a new marketplace offer in Microsoft partner center and add the Nblocks landing page and connection webhook."),(0,n.kt)("li",{parentName:"ol"},"Last but not least, we'll test the integration by purchasing the offer.")),(0,n.kt)("admonition",{title:"Prerequisites",type:"info"},(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"If you haven't already, ",(0,n.kt)("a",{parentName:"li",href:"/docs/getting-started/signup"},"sign up")," for Nblocks and get access to your ",(0,n.kt)("a",{parentName:"li",href:"/docs/getting-started/id-and-keys"},"app id")),(0,n.kt)("li",{parentName:"ol"},"Completed the ",(0,n.kt)("a",{parentName:"li",href:"/docs/authentication-and-access/quickstart-user-ready"},"Quickstart User Ready")," since we'll arriving as a new and logged in user to your app."),(0,n.kt)("li",{parentName:"ol"},"You need to sign up and get access to ",(0,n.kt)("a",{parentName:"li",href:"https://azure.microsoft.com"},"Microsoft Azure")," and have an Azure AD tenant."),(0,n.kt)("li",{parentName:"ol"},"To be able to list offers on Microsoft commercial marketplace you need to become a ",(0,n.kt)("a",{parentName:"li",href:"https://partner.microsoft.com"},"partner")," and get access to Microsoft Partner Center."))),(0,n.kt)("h2",{id:"generate-apps-and-secrets-in-microsoft-azure-portal"},"Generate apps and secrets in Microsoft Azure portal"),(0,n.kt)("h3",{id:"step-1-create-a-new-app-registration-for-the-marketplace-integration"},"Step 1. Create a new app registration for the marketplace integration"),(0,n.kt)("p",null,"Go to ",(0,n.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"Azure portal")," and login."),(0,n.kt)("p",null,'Click "Azure Active Directory".'),(0,n.kt)("p",null,'Click "App registrations".\n',(0,n.kt)("img",{alt:"Apps",src:a(9144).Z,width:"3456",height:"2160"})),(0,n.kt)("p",null,'Click "New registration".'),(0,n.kt)("p",null,'Name the new app to anything you want, select "Single tenant" as the supported account type and click "Register".'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create app",src:a(7927).Z,width:"3456",height:"2159"})),(0,n.kt)("p",null,'In the new app, click "Certificates & Secrets".'),(0,n.kt)("p",null,'Click "New client secret" and select a suitable expiration time.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create secret",src:a(8059).Z,width:"3456",height:"2159"})),(0,n.kt)("admonition",{title:"What expiration time to use?",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"We recommend at least 6 months so that you don't need to recreate this secrets and sync them with Nblocks all to often.")),(0,n.kt)("p",null,'Save this new secret value for a couple of minutes before we store it in Nblocks. Also save the "Application (client) ID and "Directory (tenant) ID" which is available to copy from the "Overview" tab.'),(0,n.kt)("h3",{id:"step-2-create-new-app-registrations-for-azure-ad-sso-login"},"Step 2. Create new app registrations for Azure AD SSO Login"),(0,n.kt)("admonition",{title:"Why two app registrations?",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"A requirement for listing offers in the commercial marketplace is that your customers should be able to login with Azure AD for a seamless experience."),(0,n.kt)("p",{parentName:"admonition"},"Microsoft recommends developers to register separate applications for the marketplace integration and Azure AD SSO.\nThis helps separate logic of user logins and subscription management and is better from a security standpoint.")),(0,n.kt)("p",null,'Click "Azure Active Directory" -> "App registrations" -> "New registration" once again.'),(0,n.kt)("p",null,'Name the new app to anything you want but remember that users will see this name when they login with Microsoft.\nSelect "Multitenant" as the supported account type.\nUnder "Redirect URI" select "Web" and add the URI ',(0,n.kt)("inlineCode",{parentName:"p"},"https://auth-stage.nblocks.cloud/federated/ms-azure-ad/return"),' and click "Register".'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create app",src:a(9484).Z,width:"3456",height:"2159"})),(0,n.kt)("p",null,'Again, click  "Certificates & Secrets" -> "New client secret" and generate a secret for this app aswell.'),(0,n.kt)("h3",{id:"step-3-store-the-azure-app-secrets-in-nblocks"},"Step 3. Store the Azure app secrets in Nblocks"),(0,n.kt)("p",null,"The secrets for both the marketplace integration app aswell as the Azure AD SSO app should now be saved in Nblocks."),(0,n.kt)("p",null,"You should provide ",(0,n.kt)("em",{parentName:"p"},"Client ID"),", ",(0,n.kt)("em",{parentName:"p"},"Client secret")," and ",(0,n.kt)("em",{parentName:"p"},"Tenant ID")," for both the marketplace integration and Azure AD SSO apps."),(0,n.kt)("h4",{id:"example-code"},"Example code"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"curl",label:"cURL",default:!0,mdxType:"TabItem"},"Copy the below cURL code and paste it into your terminal fr om anywhere.",(0,n.kt)("p",null,"You'll need to add your own ",(0,n.kt)("a",{parentName:"p",href:"/docs/getting-started/id-and-keys"},"app api key")," to the ",(0,n.kt)("inlineCode",{parentName:"p"},"x-api-key")," header."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'curl --request PUT \'https://account-api-stage.nebulr-core.com/app/credentials\' \\\n--header \'x-api-key: YOUR_APP_API_KEY\' \\\n--data-raw \'{\n    "microsoftAzureADClientId": "XXXXXXX",\n    "microsoftAzureADClientSecret": "XXXXXXX",\n    "microsoftAzureADTenantId": "XXXXXXX",\n    "microsoftAzureMarketplaceClientId": "XXXXXXX",\n    "microsoftAzureMarketplaceClientSecret": "XXXXXXX",\n    "microsoftAzureMarketplaceTenantId": "XXXXXXX"\n}\'\n')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Curious in what more ways you can use the  ",(0,n.kt)("inlineCode",{parentName:"p"},"/credentials")," endpoint? See the ",(0,n.kt)("a",{parentName:"p",href:"https://nebulr-group.github.io/nblocks-api-docs/#update-credentials"},"API reference"))))),(0,n.kt)("p",null,"That's all, now we will go ahead to the marketplace offer listing."),(0,n.kt)("h2",{id:"create-a-new-marketplace-offer"},"Create a new marketplace offer"),(0,n.kt)("p",null,"Go to ",(0,n.kt)("a",{parentName:"p",href:"https://partner.microsoft.com"},"Microsoft partner center")," and login."),(0,n.kt)("p",null,'Click "Marketplace offers".'),(0,n.kt)("p",null,'Click "New offer", select "Software as a Service" and name your offer to anything you want.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create offer",src:a(2270).Z,width:"3456",height:"2159"})),(0,n.kt)("p",null,'In your new offer, click "Technical configuration".'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'In "Landing page URL", add your unique landing page url which is ',(0,n.kt)("inlineCode",{parentName:"li"},"https://account-api-stage.nebulr-core.com/ms-azure-marketplace/signup/APP_ID")),(0,n.kt)("li",{parentName:"ul"},'In "Connection webhook" add your unique webhook url which is ',(0,n.kt)("inlineCode",{parentName:"li"},"https://account-api-stage.nebulr-core.com/ms-azure-marketplace/webhook/APP_ID")),(0,n.kt)("li",{parentName:"ul"},'In "Azure Active Directory tenant ID" add your marketplace integration app tenant id.'),(0,n.kt)("li",{parentName:"ul"},'In "Azure Active Directory application ID" add your marketplace integration app client id.')),(0,n.kt)("p",null,"You'll find your app id ",(0,n.kt)("a",{parentName:"p",href:"/docs/getting-started/id-and-keys"},"here"),"\n",(0,n.kt)("img",{alt:"Technical configuration",src:a(4562).Z,width:"3456",height:"2159"})),(0,n.kt)("p",null,"That's all that's needed to be done for the integration!"),(0,n.kt)("h2",{id:"test-with-a-purchase"},"Test with a purchase"),(0,n.kt)("p",null,"Before we can publish a draft and test the new offer you need to provide enough information like listing details, categorizing, different plans etc.\nThis process, about what is required, is well guided by microsoft."),(0,n.kt)("p",null,"Once that is done we can submit it for review and preview it. You'll then get a link to a preview version and test buying it."),(0,n.kt)("p",null,"You should see the listing, be able to purchase it, get to the Nblocks Landing page and then arrive as a new customer and logged in into your app."))}m.isMDXComponent=!0},8059:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/app-marketplace-create-secret-e69ff5b4f1a01f249b65e02a89bb6d51.png"},9144:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/apps-d520c8efdd312f79f7e55480aed455fe.png"},7927:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-app-marketplace-f7d4282e75f9c2c22e7dcbfb1e295f13.png"},9484:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-app-sso-2cbec08080efea06528a7c8021a1a7fd.png"},2270:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/partner-center-new-offer-bf68476c8eb7a149aaa1fa19b745b681.png"},4562:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/partner-center-technical-conf-44d5d54799bf0576dd547ce861001a39.png"}}]);