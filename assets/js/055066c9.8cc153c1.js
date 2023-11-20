"use strict";(self.webpackChunknblocks_docs=self.webpackChunknblocks_docs||[]).push([[6289],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,b=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(b,o(o({ref:t},p),{},{components:n})):a.createElement(b,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2,sidebar_label:"Roles & Privileges",tags:["security","lesson"]},o="Roles & Privileges",s={unversionedId:"authentication-and-access/roles-and-privileges",id:"authentication-and-access/roles-and-privileges",title:"Roles & Privileges",description:"In Nblocks, each user is assigned a role that grants them specific privileges. Roles act as groups for these privileges, enabling fine-grained control over what each user can see and do within your application. This setup is key to crafting a secure and robust system. While the OWNER role and AUTHENTICATED privilege are mandatory and cannot be changed, you have full flexibility to define additional roles and privileges based on your needs.",source:"@site/docs/02-authentication-and-access/roles-and-privileges.mdx",sourceDirName:"02-authentication-and-access",slug:"/authentication-and-access/roles-and-privileges",permalink:"/nblocks-docs/docs/authentication-and-access/roles-and-privileges",draft:!1,tags:[{label:"security",permalink:"/nblocks-docs/docs/tags/security"},{label:"lesson",permalink:"/nblocks-docs/docs/tags/lesson"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Roles & Privileges",tags:["security","lesson"]},sidebar:"tutorialSidebar",previous:{title:"Authentication Settings",permalink:"/nblocks-docs/docs/authentication-and-access/authentication-settings"},next:{title:"Protect a frontend (tutorial)",permalink:"/nblocks-docs/docs/authentication-and-access/protect-frontend"}},l={},c=[{value:"Define your roles",id:"define-your-roles",level:2},{value:"Implement authorization",id:"implement-authorization",level:2}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"roles--privileges"},"Roles & Privileges"),(0,r.kt)("p",null,"In Nblocks, each user is assigned a role that grants them specific privileges. Roles act as groups for these privileges, enabling fine-grained control over what each user can see and do within your application. This setup is key to crafting a secure and robust system. While the ",(0,r.kt)("inlineCode",{parentName:"p"},"OWNER")," role and ",(0,r.kt)("inlineCode",{parentName:"p"},"AUTHENTICATED")," privilege are mandatory and cannot be changed, you have full flexibility to define additional roles and privileges based on your needs."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Good examples of roles"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"ADMIN"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MANAGER"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"GUEST"),", etc.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Good examples of privileges"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"USER_READ"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"USER_WRITE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ENTITY_READ"),", etc."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Nblocks automatically assigns the ",(0,r.kt)("inlineCode",{parentName:"p"},"OWNER")," role to the person who initiates the creation of a new tenant. This person becomes the first user and responsible owner of that tenant.")),(0,r.kt)("h2",{id:"define-your-roles"},"Define your roles"),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"https://admin.nblocks.cloud"},"Nblocks Admin"),", begin by creating a privilege and adding an optional description:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"New Privilege",src:n(7804).Z,width:"3024",height:"1890"})),(0,r.kt)("p",null,"Then, associate that privilege, along with others, to a new role:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"New Role",src:n(7970).Z,width:"3024",height:"1890"})),(0,r.kt)("h2",{id:"implement-authorization"},"Implement authorization"),(0,r.kt)("p",null,"After protecting your ",(0,r.kt)("a",{parentName:"p",href:"/docs/authentication-and-access/protect-backend"},"backend")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/authentication-and-access/protect-frontend"},"frontend"),", your newly defined roles will become available for granting user access, as reflected in the updated ",(0,r.kt)("a",{parentName:"p",href:"/docs/authentication-and-access/protect-backend#short-info-about-the-access-token"},"access token"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "aid": "63d2ab029e23db0afb07a5a7",\n  "tid": "63d2b5c18892e10022e08399",\n  // highlight-start\n  "scope": "AUTHENTICATED USER_READ ENTITY_READ",\n  "role": "MANAGER",\n  // highlight-end\n  "plan": "FREE",\n  "iat": 1685648418,\n  "exp": 1685652018,\n  "aud": ["63d2ab029e23db0afb07a5a7", "https://app.nblocks.cloud"],\n  "iss": "https://auth.nblocks.cloud",\n  "sub": "63d2b5c18892e10022e083a2"\n}\n')))}d.isMDXComponent=!0},7804:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/new_privilege-1a1d8b3c0b648479e76cf515343e844d.png"},7970:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/new_role-c6fa367d50be1e931d29c76083abbe96.png"}}]);