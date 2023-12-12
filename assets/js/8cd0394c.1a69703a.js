"use strict";(self.webpackChunknblocks_docs=self.webpackChunknblocks_docs||[]).push([[2548],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(7462),a=n(7294),o=n(6010),i=n(2466),s=n(6550),l=n(1980),c=n(7392),u=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,c]=h({queryString:n,groupId:r}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=l??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=n(2389);const b="tabList__CuJ",k="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==s&&(p(t),l(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",k,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},2315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));n(4866),n(5162);const o={sidebar_position:6,sidebar_label:"Enterprise login",tags:["security","enterprise","tutorial"]},i="Enterprise login",s={unversionedId:"authentication-and-access/enterprise-login",id:"authentication-and-access/enterprise-login",title:"Enterprise login",description:"In this guide, we'll walk you through the process of setting up Enterprise Login with Security Assertion Markup Language (SAML) in Nblocks.",source:"@site/docs/02-authentication-and-access/enterprise-login.mdx",sourceDirName:"02-authentication-and-access",slug:"/authentication-and-access/enterprise-login",permalink:"/nblocks-docs/docs/authentication-and-access/enterprise-login",draft:!1,tags:[{label:"security",permalink:"/nblocks-docs/docs/tags/security"},{label:"enterprise",permalink:"/nblocks-docs/docs/tags/enterprise"},{label:"tutorial",permalink:"/nblocks-docs/docs/tags/tutorial"}],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Enterprise login",tags:["security","enterprise","tutorial"]},sidebar:"tutorialSidebar",previous:{title:"User management portal (tutorial)",permalink:"/nblocks-docs/docs/authentication-and-access/user-management-portal"},next:{title:"Quickstart Feature Flags",permalink:"/nblocks-docs/docs/feature-flags/quickstart-feature-flags"}},l={},c=[{value:"Why Enterprise Login Matters",id:"why-enterprise-login-matters",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating a new connection",id:"creating-a-new-connection",level:2},{value:"Assigning a connection to a tenant",id:"assigning-a-connection-to-a-tenant",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"enterprise-login"},"Enterprise login"),(0,a.kt)("p",null,"In this guide, we'll walk you through the process of setting up Enterprise Login with Security Assertion Markup Language (SAML) in Nblocks.\nThis powerful feature allows you to seamlessly integrate your application with various Identity Providers (IdPs) supporting SAML."),(0,a.kt)("h2",{id:"why-enterprise-login-matters"},"Why Enterprise Login Matters"),(0,a.kt)("p",null,"If your app needs to scale for enterprise users. Security is non-negotiable, and centralized user management is a must, Enterprise login becomes a requirement.\nIT admins and managers can control who gets access to your app directly from their identity management system. "),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before setting up the SAML connection, make sure you have the following information from your Identity Provider (IdP):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SSO / Login URL"),": The URL where the IdP expects to receive SAML authentication requests."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Certificate"),": The public key certificate provided by the IdP to validate the SAML responses."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Client ID"),": The identifier assigned to your application by the IdP. This is sometimes not required."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Request Method"),": The preferred method for sending SAML requests, either HTTP GET Redirect (most common) or HTTP POST."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Signed Request"),": Determine whether the IdP requires the SAML request to be signed or not.")),(0,a.kt)("admonition",{title:"Test with a mock IdP",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"There are several mock SAML IdPs avaible to test with, like ",(0,a.kt)("a",{parentName:"p",href:"https://mocksaml.com/"},"Mock SAML"),".\nYou can use this to setup a new Enterprise Connection in Nblocks.")),(0,a.kt)("h2",{id:"creating-a-new-connection"},"Creating a new connection"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create enterprise connection",src:n(8629).Z,width:"3456",height:"1814"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log in to ",(0,a.kt)("a",{parentName:"li",href:"https://admin.nblocks.cloud"},"Nblocks Admin"),"."),(0,a.kt)("li",{parentName:"ol"},"Click Enterprise Login."),(0,a.kt)("li",{parentName:"ol"},"Click Create connection."),(0,a.kt)("li",{parentName:"ol"},"Give your new connection a name. This will also be visible for users when logging in."),(0,a.kt)("li",{parentName:"ol"},"Enter Client id, if the IdP have assigned you one."),(0,a.kt)("li",{parentName:"ol"},"Enter the SSO Url from the IdP."),(0,a.kt)("li",{parentName:"ol"},"Enter the certificate from the IdP."),(0,a.kt)("li",{parentName:"ol"},"Enter the preferred request method. Defaults to GET."),(0,a.kt)("li",{parentName:"ol"},"If the IdP requires the request to be signed",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Choose a signing algorithm. Defaults to SHA-256."),(0,a.kt)("li",{parentName:"ol"},"Generate a public and private key in PEM format and give the public key to the IdP."),(0,a.kt)("li",{parentName:"ol"},"Enter the private key."))),(0,a.kt)("li",{parentName:"ol"},"Click save.")),(0,a.kt)("p",null,"Your connection is now ready to be used. Before we can test it we need to assign it to a tenant. Users of that tenant will be able to authenticate with this connection."),(0,a.kt)("h2",{id:"assigning-a-connection-to-a-tenant"},"Assigning a connection to a tenant"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Assign enterprise connection",src:n(5353).Z,width:"3438",height:"1784"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log in to ",(0,a.kt)("a",{parentName:"li",href:"https://admin.nblocks.cloud"},"Nblocks Admin"),"."),(0,a.kt)("li",{parentName:"ol"},"Click Workspaces."),(0,a.kt)("li",{parentName:"ol"},"Click the workspace you wish to assign to, or create a new one."),(0,a.kt)("li",{parentName:"ol"},"Click edit workspace."),(0,a.kt)("li",{parentName:"ol"},"Under Enterprise connection, select the new connection."),(0,a.kt)("li",{parentName:"ol"},"Click save.")),(0,a.kt)("p",null,"That's it \ud83c\udf89 The SAML connection is now the preferred login method for this tenant and you you can test this by logging in as one of the users."),(0,a.kt)("admonition",{title:"Security information",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Users of tenants with enterprise login will only be able to login this way. That's because the IdP now manage the application access.")))}p.isMDXComponent=!0},8629:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-enterprise-connection-020b98537d7da6dac85db10790e9fd64.png"},5353:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tenant-enterprise-connection-23528820fac10a06953cde3bf33183a7.png"}}]);