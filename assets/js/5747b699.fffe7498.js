"use strict";(self.webpackChunknblocks_docs=self.webpackChunknblocks_docs||[]).push([[535],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||l;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),a=n(7294),l=n(2389),i=n(9443);var o=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(3616),s=n(6010),c="tabItem_vU9c";function p(e){var t,n,r,l=e.lazy,i=e.block,p=e.defaultValue,d=e.values,f=e.groupId,m=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,u.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=o(),g=y.tabGroupChoices,w=y.setTabGroupChoices,N=(0,a.useState)(k),T=N[0],C=N[1],P=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var O=g[f];null!=O&&O!==T&&h.some((function(e){return e.value===O}))&&C(O)}var x=function(e){var t=e.currentTarget,n=P.indexOf(t),r=h[n].value;r!==T&&(E(t),C(r),null!=f&&w(f,r))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=P.indexOf(e.currentTarget)+1;n=P[r]||P[0];break;case"ArrowLeft":var a=P.indexOf(e.currentTarget)-1;n=P[a]||P[P.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},m)},h.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":T===t}),key:t,ref:function(e){return P.push(e)},onKeyDown:I,onFocus:x,onClick:x},null!=n?n:t)}))),l?(0,a.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},1680:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=n(6396),o=n(8215),u=["components"],s={sidebar_position:100},c="API client",p={unversionedId:"fundamentals/api-client",id:"fundamentals/api-client",title:"API client",description:"The API client is our swiss army knife for querying the Nblocks Rest API directly and most of our plug-n-play experiences use the API client under the hood to deliver their feature set.",source:"@site/docs/fundamentals/api-client.mdx",sourceDirName:"fundamentals",slug:"/fundamentals/api-client",permalink:"/nblocks-docs/docs/fundamentals/api-client",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/fundamentals/api-client.mdx",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Users & Tenants",permalink:"/nblocks-docs/docs/fundamentals/tenants-users"},next:{title:"Business model",permalink:"/nblocks-docs/docs/fundamentals/business-model"}},d=[{value:"Reference",id:"reference",children:[],level:3},{value:"Deep dive",id:"deep-dive",children:[],level:2},{value:"Quick start",id:"quick-start",children:[],level:2}],f={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"api-client"},"API client"),(0,l.kt)("p",null,"The API client is our swiss army knife for querying the Nblocks Rest API directly and most of our plug-n-play experiences use the API client under the hood to deliver their feature set.\nIt comes with typings and documentation built in for your convenience."),(0,l.kt)("p",null,"You'll be able to get hold of a client instance straight, all prepped with credentials, from your plug-n-play plugin."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"nestjs",label:"NestJS",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"constructor(\n    private readonly clientService: ClientService <--- Inject the ClientService\n  ) {}\n...\nconst client = this.clientService.client; <--- Get the client instance\n\nawait client.tenants.list(); <--- Use the client instance for something\n")))),(0,l.kt)("h3",{id:"reference"},"Reference"),(0,l.kt)("p",null,"The API client wraps all functionality from the Nblocks Rest API. See our ",(0,l.kt)("a",{parentName:"p",href:"https://nebulr-group.github.io/nblocks-api-docs"},"API Reference")," for exact usage."),(0,l.kt)("h2",{id:"deep-dive"},"Deep dive"),(0,l.kt)("p",null,"The client and its sub clients are organised around the Nblocks feature areas and to be a smooth experience for developers using it. "),(0,l.kt)("p",null,"A client hierarchy has been setup to allow chaining calls."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"PlatformClient\n\u2502\u2500\u2500 AuthClient\n\u2502\u2500\u2500 CommunicationClient\n\u2502\u2500\u2500 Tenants (generic client)\n\u2514\u2500\u2500\u2500Tenant (specific client)\n    \u2502\u2500\u2500 FileClient\n    \u2502\u2500\u2500 Users (generic client)\n    \u2514\u2500\u2500\u2500User (specific client)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Generic clients lets you do operations on a group of instances that doesn't require a certain id to be present. E.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"create"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"list")," etc."),(0,l.kt)("li",{parentName:"ul"},"Specific clients lets you do operations on a specific instance that require a certain id to be present. E.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"get"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"update"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"delete"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"sendEmail")," etc.")),(0,l.kt)("p",null,"This allowed us to accomplish the following experience for our developers."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'const client = new PlatformClient("ACCESS_KEY");\n\nconst aBunchOfUsers = await client.tenant(user.tenant.id).users.list();\n\nconst user = client.auth.authorize(authToken, userId, "secure/endpoint");\n\nawait client.tenant(user.tenant.id).user(user.id).sendSms({text: "Hello you"});\n')),(0,l.kt)("h2",{id:"quick-start"},"Quick start"),(0,l.kt)("p",null,"You can install the API client manually and use it directly if non of our plug-n-play experiences suite your needs."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install the plugin")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm i @nebulr-group/nblocks-ts-client\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Import the PlatformClient from the package")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { PlatformClient } from '@nebulr-group/nblocks-ts-client'\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Instantiate a new client with your access token.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'const client = new PlatformClient("ACCESS_KEY");\n')),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"List all tenants in your app and write the result to your console")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Tenant } from '@nebulr-group/nblocks-ts-client'\n\nconst tenants:Tenant[] = await client.tenants.list();\ntenants.map(t: Tenant => console.log(`Name: ${t.name}, ID:${t.id}`));\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Success!")))}m.isMDXComponent=!0}}]);