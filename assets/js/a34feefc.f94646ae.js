"use strict";(self.webpackChunknblocks_docs=self.webpackChunknblocks_docs||[]).push([[328],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),a=n(7294),o=n(2389),i=n(9443);var l=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(3616),c=n(6010),u="tabItem_vU9c";function p(e){var t,n,r,o=e.lazy,i=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),v=(0,s.lx)(y,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=h[0])?void 0:r.props.value;if(null!==b&&!y.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=l(),k=g.tabGroupChoices,N=g.setTabGroupChoices,w=(0,a.useState)(b),E=w[0],T=w[1],C=[],S=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var A=k[m];null!=A&&A!==E&&y.some((function(e){return e.value===A}))&&T(A)}var R=function(e){var t=e.currentTarget,n=C.indexOf(t),r=y[n].value;r!==E&&(S(t),T(r),null!=m&&N(m,r))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.currentTarget)+1;n=C[r]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.currentTarget)-1;n=C[a]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},f)},y.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":E===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:x,onFocus:R,onClick:R},null!=n?n:t)}))),o?(0,a.cloneElement)(h.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function d(e){var t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},3942:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(6396),l=n(8215),s=["components"],c={sidebar_position:3},u="Securing your app",p={unversionedId:"concepts/security",id:"concepts/security",title:"Securing your app",description:"Security is essential for any project and we want it to be as easy as possible for you to customize nBlocks to your security model.",source:"@site/docs/concepts/security.mdx",sourceDirName:"concepts",slug:"/concepts/security",permalink:"/nblocks-docs/docs/concepts/security",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/concepts/security.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"i18n & Translations",permalink:"/nblocks-docs/docs/concepts/translations"},next:{title:"Users & Tenants",permalink:"/nblocks-docs/docs/concepts/tenants-users"}},d=[{value:"Define your roles",id:"define-your-roles",children:[],level:2},{value:"Restricting backend endpoints",id:"restricting-backend-endpoints",children:[],level:2},{value:"Security data is always available",id:"security-data-is-always-available",children:[],level:2},{value:"Password complexity",id:"password-complexity",children:[],level:2}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"securing-your-app"},"Securing your app"),(0,o.kt)("p",null,"Security is essential for any project and we want it to be as easy as possible for you to customize nBlocks to your security model.\nThe security model relates to the concept of users and tenants. If you wish to read about that before click ",(0,o.kt)("a",{parentName:"p",href:"tenants-users"},"here"),"."),(0,o.kt)("h2",{id:"define-your-roles"},"Define your roles"),(0,o.kt)("p",null,"Your app model lets you define the different types of roles your users can adapt.\nEach role you define can grant one of many privileges, think of roles like a way of grouping privileges.\nThe names of these are totally up to you and how you organize and protect the data in your app.\nIt's ultimately the match between the granted and required privilege that gets checked during authorization."),(0,o.kt)("p",null,"Good examples of roles: ",(0,o.kt)("inlineCode",{parentName:"p"},"OWNER"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ADMIN"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"MANAGER")," etc."),(0,o.kt)("p",null,"Good examples of privileges: ",(0,o.kt)("inlineCode",{parentName:"p"},"USER_READ"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"USER_WRITE"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ENTITY_READ")," etc."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Nblocks assigns the ",(0,o.kt)("inlineCode",{parentName:"p"},"OWNER")," role to the person that initiated the creation of a ",(0,o.kt)("a",{parentName:"p",href:"tenants-users"},"tenant"),". That person will be the first user and the responsible owner of that tenant."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"nestjs",label:"NestJS",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'constructor(\n    private readonly nebulrAuthService: NebulrAuthService,\n    private readonly clientService: ClientService\n  ) {}\n...\n// Get the client instance\nconst client = this.clientService.client;\n\n// Set role configuration\nawait client.updateApp({\n    roles: [\n        "OWNER": [\n            "USER_READ",\n            "USER_WRITE",\n        ],\n        "ADMIN": [\n            "USER_READ",\n            "USER_WRITE",\n        ],\n        "MANAGER": [\n            "USER_READ"\n        ]\n    ]\n});\n\n// Change the role for the current user\nconst currentUser = this.nebulrAuthService.getCurrentUser();\nconst userClient = client.tenant(currentUser.tenant.id).user(currentUser.id);\nawait userClient.update({role: "MANAGER"});\n')))),(0,o.kt)("h2",{id:"restricting-backend-endpoints"},"Restricting backend endpoints"),(0,o.kt)("p",null,"When users login, Nblocks will automatically grant their set of privileges depending on their role."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"resourceMappings.json")," is the heart of the RBAC configuration. It supports both GraphQL queries/mutations as well as HTTP requests. You can use wildcards to allow or disallow a whole controller or route. Here's how one could look."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=nblocks/config/resourceMappings.json",title:"nblocks/config/resourceMappings.json"},'{\n    "graphql/readCase":"CASE_READ",\n    "graphql/createCase":"CASE_WRITE",\n    "/secret": "SECRET_READ",\n    "/**": "ANONYMOUS"\n}\n')),(0,o.kt)("p",null,"Above configuration will demand authenticated users to have the privilege ",(0,o.kt)("inlineCode",{parentName:"p"},"CASE_READ")," when calling the GraphQL query ",(0,o.kt)("inlineCode",{parentName:"p"},"readCase")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"SECRET_READ")," when calling ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP GET|PUT|POST /secret"),". Any HTTP call to any other controller action (/","*","*",") will be treated as an anonymous call."),(0,o.kt)("p",null,"In the quick start part the script did just configure all endpoints to allow ",(0,o.kt)("inlineCode",{parentName:"p"},"ANONYMOUS")," calls meaning the built in gatekeeping will not activate any authentication nor resource authorization. To activate gatekeeping, try to change the privileges to ",(0,o.kt)("inlineCode",{parentName:"p"},"USER_READ"),". This will have all calls that are missing auth context to render back ",(0,o.kt)("inlineCode",{parentName:"p"},"401 Unauthorized")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"403 Forbidden"),". If you're already using any of our NBlocks UI plugins, you'll be redirected to the login screen immediately after making such a request."),(0,o.kt)("p",null,"If you wish to do your own role check in your own code you'll always have access to the role data of the ",(0,o.kt)("inlineCode",{parentName:"p"},"currentUser")," data via ",(0,o.kt)("inlineCode",{parentName:"p"},"NebulrAuthService.getCurrentUser()"),"."),(0,o.kt)("h2",{id:"security-data-is-always-available"},"Security data is always available"),(0,o.kt)("p",null,"Each request made from a logged in user always contains resolved security data. You can use this data build filters, data separation, audit logs etc."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"nestjs",label:"NestJS",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'constructor(\n    private readonly nebulrAuthService: NebulrAuthService\n  ) {}\n\nconst currentUser = this.nebulrAuthService.getCurrentUser();\n\n// Content of currentUser\n{\n    "id": "605b603cfeb",\n    "role": "MANAGER",\n    "email": "john@doe.com",\n    "username": "john@doe.com",\n    "fullName": "John Doe",\n    "onboarded": true,\n    "tenant": {\n      "id": "605b603cf",\n      "name": "Monsters Inc",\n      "locale": "en"\n    }\n  }\n')))),(0,o.kt)("h2",{id:"password-complexity"},"Password complexity"),(0,o.kt)("p",null,"Initially password complexity is disabled for a smooth quick start. This can easily be enabled by providing the configuration to the nblocks UI plugin."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"ionic",label:"Ionic",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/app/app.module.ts"',title:'"src/app/app.module.ts"'},"@NgModule({\n    imports: [\n      ...\n        NblocksIonicModule.forRoot({passwordComplexity: true})\n})\n")))))}f.isMDXComponent=!0}}]);