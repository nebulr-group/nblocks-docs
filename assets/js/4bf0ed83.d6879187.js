"use strict";(self.webpackChunknblocks_docs=self.webpackChunknblocks_docs||[]).push([[6878],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=l(n),h=s,g=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return n?i.createElement(g,a(a({ref:t},u),{},{components:n})):i.createElement(g,a({ref:t},u))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:s,a[1]=r;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9349:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=n(7462),s=(n(7294),n(3905));const o={sidebar_position:1,sidebar_label:"Authentication Settings",tags:["security","settings","lesson"]},a="Authentication Settings",r={unversionedId:"authentication-and-access/authentication-settings",id:"authentication-and-access/authentication-settings",title:"Authentication Settings",description:"Within Nblocks Admin, you can tailor authentication settings for your application. This includes options for multi-factor authentication (MFA), social login providers, and the duration of token sessions.",source:"@site/docs/02-authentication-and-access/authentication-settings.mdx",sourceDirName:"02-authentication-and-access",slug:"/authentication-and-access/authentication-settings",permalink:"/nblocks-docs/docs/authentication-and-access/authentication-settings",draft:!1,tags:[{label:"security",permalink:"/nblocks-docs/docs/tags/security"},{label:"settings",permalink:"/nblocks-docs/docs/tags/settings"},{label:"lesson",permalink:"/nblocks-docs/docs/tags/lesson"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Authentication Settings",tags:["security","settings","lesson"]},sidebar:"tutorialSidebar",previous:{title:"Switching to Nblocks",permalink:"/nblocks-docs/docs/getting-started/switching-to-nblocks"},next:{title:"Roles & Privileges",permalink:"/nblocks-docs/docs/authentication-and-access/roles-and-privileges"}},c={},l=[{value:"Login Settings",id:"login-settings",level:2},{value:"Authentication Methods",id:"authentication-methods",level:3},{value:"Passkeys",id:"passkeys",level:4},{value:"Multi-Factor Authentication (MFA)",id:"multi-factor-authentication-mfa",level:4},{value:"Signup",id:"signup",level:2},{value:"Social Connections",id:"social-connections",level:2},{value:"Enterprise Connections",id:"enterprise-connections",level:2},{value:"Security",id:"security",level:2},{value:"Callback",id:"callback",level:3},{value:"Sessions",id:"sessions",level:3}],u={toc:l};function p(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"authentication-settings"},"Authentication Settings"),(0,s.kt)("p",null,"Within ",(0,s.kt)("a",{parentName:"p",href:"https://admin.nblocks.cloud"},"Nblocks Admin"),", you can tailor authentication settings for your application. This includes options for multi-factor authentication (MFA), social login providers, and the duration of token sessions."),(0,s.kt)("h2",{id:"login-settings"},"Login Settings"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Login Settings",src:n(3889).Z,width:"3024",height:"1656"})),(0,s.kt)("h3",{id:"authentication-methods"},"Authentication Methods"),(0,s.kt)("h4",{id:"passkeys"},"Passkeys"),(0,s.kt)("p",null,"Toggle this setting to either permit or prohibit users from signing in with passkeys. Deactivating this feature will remove the passkey sign-in option from the login page."),(0,s.kt)("h4",{id:"multi-factor-authentication-mfa"},"Multi-Factor Authentication (MFA)"),(0,s.kt)("p",null,"Enable or disable MFA for your application's users. When MFA is activated, tenant owners have the option to enforce MFA for all users within their tenant. A user will be required to use MFA if they are part of any tenant that mandates it."),(0,s.kt)("admonition",{title:"Disabling MFA",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Deactivating MFA will turn it off for all users, regardless of individual tenant settings. Tenant owners will lose the ability to set their own MFA configurations.")),(0,s.kt)("p",null,"Turning MFA on or off will not alter existing tenant-specific settings. Re-enabling MFA will retain any previously configured tenant rules."),(0,s.kt)("h2",{id:"signup"},"Signup"),(0,s.kt)("p",null,"Access signup links quickly for the various plans you've set up in the ",(0,s.kt)("a",{parentName:"p",href:"/docs/payments/payments-portal#create-plans-in-nblocks-admin"},"payments section"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Signup",src:n(9918).Z,width:"3024",height:"1656"})),(0,s.kt)("h2",{id:"social-connections"},"Social Connections"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Social Connections",src:n(1188).Z,width:"3024",height:"1656"})),(0,s.kt)("p",null,"Specify which social login providers you wish to enable for your users. Upon activating a provider for the first time, Nblocks will request the necessary credentials. Once stored, you can toggle the login method on or off without affecting the saved credentials, which can be updated or removed separately. Toggling on or off a provider will show or hide it as a sign-in option on the login page. Current supported providers include ",(0,s.kt)("em",{parentName:"p"},"Google")," and ",(0,s.kt)("em",{parentName:"p"},"Azure AD SSO"),"."),(0,s.kt)("h2",{id:"enterprise-connections"},"Enterprise Connections"),(0,s.kt)("p",null,"How to setup Enterprise Connections are described in ",(0,s.kt)("a",{parentName:"p",href:"/docs/authentication-and-access/enterprise-login"},"Enterprise login")),(0,s.kt)("h2",{id:"security"},"Security"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Security",src:n(8022).Z,width:"3024",height:"2074"})),(0,s.kt)("h3",{id:"callback"},"Callback"),(0,s.kt)("p",null,"Designate an approved list of callback URLs that Nblocks can use to redirect your users. These URLs should point to your trusted applications. The default URL is where Nblocks will redirect users after they've completed authentication via Nblocks' Login, as configured in the ",(0,s.kt)("a",{parentName:"p",href:"/docs/getting-started/quickstart#step-2-receive-the-user-back-to-your-app"},"quickstart"),". For finer control, in line with OAuth2 specifications, refer to our ",(0,s.kt)("a",{parentName:"p",href:"https://nebulr-group.github.io/nblocks-api-docs/#authorize"},"API documentation"),"."),(0,s.kt)("h3",{id:"sessions"},"Sessions"),(0,s.kt)("p",null,"Set the lifespan of your tokens, measured in seconds. The access token's lifespan dictates how frequently your app needs to request a new token using the refresh token. The refresh token's lifespan sets the duration a user can access your app without needing to log in again."))}p.isMDXComponent=!0},3889:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/login-settings-b37748e0abfc744253850737c458389b.png"},8022:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/security-c46f33168d1ccd4f6fc1f885af9c6e20.png"},9918:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/signup-3dee1f0e48303ec3bb97da887578f574.png"},1188:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/social-connections-45b0a64a13534ac00e68ccd1d23c2536.png"}}]);