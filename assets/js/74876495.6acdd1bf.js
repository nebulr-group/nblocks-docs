"use strict";(self.webpackChunknblocks_docs=self.webpackChunknblocks_docs||[]).push([[49],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7462),o=n(7294),r=n(2389),i=n(9443);var l=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(3616),c=n(6010),d="tabItem_vU9c";function p(e){var t,n,a,r=e.lazy,i=e.block,p=e.defaultValue,u=e.values,m=e.groupId,h=e.className,k=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=u?u:k.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),v=(0,s.lx)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===p?p:null!=(t=null!=p?p:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=k[0])?void 0:a.props.value;if(null!==f&&!g.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),N=b.tabGroupChoices,y=b.setTabGroupChoices,w=(0,o.useState)(f),T=w[0],x=w[1],C=[],j=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var I=N[m];null!=I&&I!==T&&g.some((function(e){return e.value===I}))&&x(I)}var E=function(e){var t=e.currentTarget,n=C.indexOf(t),a=g[n].value;a!==T&&(j(t),x(a),null!=m&&y(m,a))},M=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var o=C.indexOf(e.currentTarget)-1;n=C[o]||C[C.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},h)},g.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":T===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:M,onFocus:E,onClick:E},null!=n?n:t)}))),r?(0,o.cloneElement)(k.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function u(e){var t=(0,r.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}},4235:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},GridContainer:function(){return m},GridChild:function(){return h},default:function(){return g}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=n(6396),l=n(8215),s=["components"],c={sidebar_position:1,sidebar_label:"Quickstart (5 min)"},d="Quickstart",p={unversionedId:"quickstart",id:"quickstart",title:"Quickstart",description:");",source:"@site/docs/quickstart.mdx",sourceDirName:".",slug:"/quickstart",permalink:"/nblocks-docs/docs/quickstart",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/quickstart.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Quickstart (5 min)"},sidebar:"tutorialSidebar",next:{title:"How-to brand emails (2 min)",permalink:"/nblocks-docs/docs/examples/setup-email-sender"}},u=[{value:"Overview",id:"overview",children:[],level:2},{value:"Getting Started",id:"getting-started",children:[{value:"Backend",id:"backend",children:[],level:3},{value:"Frontend",id:"frontend",children:[],level:3}],level:2},{value:"Everything is installed and set! Let&#39;s try it!",id:"everything-is-installed-and-set-lets-try-it",children:[{value:"Logging in for the first time",id:"logging-in-for-the-first-time",children:[],level:3},{value:"Customize your app branding",id:"customize-your-app-branding",children:[{value:"Branding the email (Backend)",id:"branding-the-email-backend",children:[],level:4},{value:"Branding the UI (Frontend)",id:"branding-the-ui-frontend",children:[],level:4}],level:3},{value:"Try adding a second user",id:"try-adding-a-second-user",children:[],level:3},{value:"That&#39;s all for today folks!",id:"thats-all-for-today-folks",children:[],level:3}],level:2},{value:"Next steps",id:"next-steps",children:[],level:2}],m=function(e){var t=e.children;return(0,r.kt)("div",{className:"row"},t)},h=function(e){var t=e.children;return(0,r.kt)("div",{className:"column"},t)},k={toc:u,GridContainer:m,GridChild:h};function g(e){var t=e.components,c=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},k,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quickstart"},"Quickstart"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The following guide will get you up and running as quickly as possible by covering the following 3 steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Nblocks plugins for both Frontend and Backend."),(0,r.kt)("li",{parentName:"ol"},"Run our provided scripts to bootstrap your project with an initial scaffolding and other dependencies. During this phase you'll be able to signup directly."),(0,r.kt)("li",{parentName:"ol"},"Testing the result and doing a small branding excercise \ud83d\ude09")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This quickstart requires you to have ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," installed."))),(0,r.kt)("p",null,"Lets go! \ud83d\ude80"),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"In this exercise we'll install ",(0,r.kt)("strong",{parentName:"p"},"Nblocks")," for both a frontent and a backend project to leverage the full plug-n-play experience and prebaked feature set.\nPick whatever framework that suits your taste for each area."),(0,r.kt)("p",null,"During the backend setup; the scripts will let you choose to signup for your own app and have the new credentials resolve automatically or use our demo app playground which is shared across all testers.\nIf you choose to sign up, wait with clicking the onboard link until the guide says so."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you don't have a project yet you can create new skeleton projects for both NestJS and Ionic.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"nest new my-backend")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ionic start my-frontend blank --type=angular"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Requires ",(0,r.kt)("inlineCode",{parentName:"p"},"@nestjs/cli")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@ionic/cli")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Our plugins should be installed into your project root folder and not anywhere else."))),(0,r.kt)(m,{mdxType:"GridContainer"},(0,r.kt)(h,{mdxType:"GridChild"},(0,r.kt)("h3",{id:"backend"},"Backend"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"nestjs",label:"NestJS",default:!0,mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install plugin.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @nebulr-group/nblocks-nestjs\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Run scaffolding script and choose to sign up or use the demo app.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx @nebulr-group/nblocks-nestjs setup\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Import the NBlocksModule in your app.module.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/app.module.ts"',title:'"src/app.module.ts"'},"import { NBlocksModule } from '@nebulr-group/nblocks-nestjs';\n\n@Module({\n  imports: [NBlocksModule],\n})\nexport class AppModule {}\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Enable CORS in your main.ts since the Frontend project will need that to query data.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/main.ts"',title:'"src/main.ts"'},"...\nasync function bootstrap() {\n  ...\n  app.enableCors();\n  ...\n  await app.listen(3000);\n}\n...\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Launch your Backend. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start:dev\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We support both NestJS 7 & 8.")))),(0,r.kt)(l.Z,{value:"expressjs",label:"Express.js",mdxType:"TabItem"},(0,r.kt)("p",null,"Coming soon...")))),(0,r.kt)(h,{mdxType:"GridChild"},(0,r.kt)("h3",{id:"frontend"},"Frontend"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ionic",label:"Ionic",default:!0,mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run scaffolding script to install all dependencies.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx @nebulr-group/nblocks-plugin-tool setup-ionic\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Include the Nblocks css styles and styles from PrimeNG peer dependencies under ",(0,r.kt)("strong",{parentName:"li"},"app > architect > build > options")," in the angular.json file located in your project root.\nUsually this property sits around row 34.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="angular.json"',title:'"angular.json"'},'...\n"styles": [\n  ...\n  "node_modules/primeicons/primeicons.css",\n  "node_modules/primeng/resources/themes/saga-blue/theme.css",\n  "node_modules/primeng/resources/primeng.min.css",\n  "node_modules/@nebulr-group/nblocks-ionic/styles/global.css"\n],\n...\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Import the NblocksIonicModule in your app.module.ts.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/app/app.module.ts"',title:'"src/app/app.module.ts"'},"import { NblocksIonicModule, AUTH_HTTP_INTERCEPTOR_PROVIDERS } from '@nebulr-group/nblocks-ionic';\n\n@NgModule({\n    declarations: [AppComponent],\n    entryComponents: [],\n    imports: [\n      ...\n        NblocksIonicModule.forRoot({})\n\n    providers: [\n        ...\n        AUTH_HTTP_INTERCEPTOR_PROVIDERS\n})\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Launch your Frontend. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ionic serve\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We support Ionic 5 & 6 and Angular 10, 11, 12, 13.")))),(0,r.kt)(l.Z,{value:"flutter",label:"Flutter",mdxType:"TabItem"},"Coming soon...")))),(0,r.kt)("h2",{id:"everything-is-installed-and-set-lets-try-it"},"Everything is installed and set! Let's try it!"),(0,r.kt)("h3",{id:"logging-in-for-the-first-time"},"Logging in for the first time"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open up your web browser and navigate to your frontend project start screen. "),(0,r.kt)("li",{parentName:"ol"},"Append the current url with ",(0,r.kt)("inlineCode",{parentName:"li"},"/auth")," like in ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:8100/auth")," and hit enter.\nYou should see your first glimpse of the Nblocks login screen \ud83d\ude0e"),(0,r.kt)("li",{parentName:"ol"},"If you signed up straight in your console you have received an email to onboard your first user, click that link now and set your first password and login. (If you choose to use the Demo app, login as ",(0,r.kt)("inlineCode",{parentName:"li"},"john.doe@example.com"),", password ",(0,r.kt)("inlineCode",{parentName:"li"},"helloworld"),")"),(0,r.kt)("li",{parentName:"ol"},"You're now logged in and your session is kept between page reloads, congrats!")),(0,r.kt)("img",{src:n(7243).Z,alt:"Login screen",className:"screenshot"}),(0,r.kt)("h3",{id:"customize-your-app-branding"},"Customize your app branding"),(0,r.kt)("p",null,"Wouldn't it be cool if your logo were used in both the UI and that onboarding email you received before instead?\nWhile we're at it let's also try changing some colors and texts so you get a hang of it \ud83d\ude03"),(0,r.kt)("p",null,"Here's an overview on the stuff we're changing here: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The email logo and footer."),(0,r.kt)("li",{parentName:"ul"},"The UI logo."),(0,r.kt)("li",{parentName:"ul"},"A text header on a page."),(0,r.kt)("li",{parentName:"ul"},"The primary color for buttons and links.")),(0,r.kt)("h4",{id:"branding-the-email-backend"},"Branding the email (Backend)"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"nestjs",label:"NestJS",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"First off we'll change the email appearance a bit. This part is actually stored on your app configuration in the Nblocks platform.\nThe configuration can be changed in a lot of ways, using the built in API client, REST Http call or via the upcoming Web dashboard.",(0,r.kt)("br",{parentName:"p"}),"\n","But hold on! We've made it super simple for this quick start and all you need to do is the following two step:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open your unique app-configuration.json file located in your nblocks folder which was put there by the setup script.\nChange both the ",(0,r.kt)("inlineCode",{parentName:"li"},"logo")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"websiteUrl")," to anything that is publicly available on the internet. Don't worry, this is just for demoing.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="nblocks/config/app-configuration.json"',title:'"nblocks/config/app-configuration.json"'},'{\n    ...\n    "logo": "http://nblocks.dev/wp-content/uploads/2021/12/nblocks-testlogo.png",\n    "websiteUrl": "https://app.example.com",\n  ...\n}\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The logo URL should be a publicly available image on the internet. Do you have a web page with your own logo?\nGo ahead and add it, aswell as the url to the actual web page."))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Great! Now we'll push the data so Nblocks stores these new values. In your terminal, navigate to the root of your backend project and run.\n",(0,r.kt)("inlineCode",{parentName:"li"},"npx @nebulr-group/nblocks-nestjs push-app-configuration"),".")),(0,r.kt)("p",null,"Awesome! The data has now been pushed and Nblocks will use this configuration in the future \ud83d\ude80")),(0,r.kt)(l.Z,{value:"expressjs",label:"Express.js",mdxType:"TabItem"},(0,r.kt)("p",null,"Coming soon..."))),(0,r.kt)("h4",{id:"branding-the-ui-frontend"},"Branding the UI (Frontend)"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ionic",label:"Ionic",default:!0,mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Rember that NblocksIonicModule that you imported during installation? Let's give it a few configs instead of using the default ones! We'll tell it to use another logo by configuring the ",(0,r.kt)("inlineCode",{parentName:"li"},"logoPath"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/app/app.module.ts"',title:'"src/app/app.module.ts"'},"\n@NgModule({\n  ...\n      NblocksIonicModule.forRoot({\n        logoPath: 'https://www.northwhistle.com/wp-content/uploads/2021/08/NorthWhistle-logo-retina-2.png',\n      })\n})\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Open up the english language translation file found under assets.\nThis, and other translation files, where put here by the setup script and defines the text content of all Nblocks views.\nWe'll replace the text of the translation key ",(0,r.kt)("inlineCode",{parentName:"li"},"NBLOCKS.AUTH.SET_NEW_PASSWORD")," which is the title of the set-password page and set it to something nicer.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="src/assets/i18n/nblocks_en.json"',title:'"src/assets/i18n/nblocks_en.json"'},'{\n    "NBLOCKS": {\n    ...\n        "AUTH": {\n      ...\n            "SET_NEW_PASSWORD": "It\'s time to set that first password ;)",\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Lastly we're not keen about the default Nblocks primary color for buttons and links and we wish to change it.\nThis will be done by altering the ",(0,r.kt)("inlineCode",{parentName:"li"},"--ion-color-primary")," color in the Ionic theme variable.scss.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="src/theme/variables.scss"',title:'"src/theme/variables.scss"'},":root {\n  /** primary **/\n  --ion-color-primary: #434447;\n")),(0,r.kt)("p",null,"\ud83d\udca5 Perfect! You just did your first branding. We'll wait to unveal the results until you get to the next final step where you'll add a new user.")),(0,r.kt)(l.Z,{value:"flutter",label:"Flutter",mdxType:"TabItem"},"Coming soon...")),(0,r.kt)("h3",{id:"try-adding-a-second-user"},"Try adding a second user"),(0,r.kt)("p",null,"Just one last step! This is where we see all things come together."),(0,r.kt)("p",null,"As a starter, we must make sure that we've protected the backend so that the Nblocks plugin will authorize and identify you before the requests hits the controllers.\nThis is achieved using the ",(0,r.kt)("inlineCode",{parentName:"p"},"resourceMappings.json")," file which is read by the plugin during startup. "),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Every time you change ",(0,r.kt)("inlineCode",{parentName:"p"},"resourceMappings.json"),", a server restart is necessary for the changes to take effect."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Let's proceed!")," \ud83d\udc68\u200d\ud83d\udcbb"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make all endpoints require the ",(0,r.kt)("inlineCode",{parentName:"li"},"USER_READ")," privilege by adding this to the file and restart your backend server. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="nblocks/config/resourceMappings.json"',title:'"nblocks/config/resourceMappings.json"'},'{\n    "graphql/**": "USER_READ",\n    "/**": "USER_READ"\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Navigate your browser to ",(0,r.kt)("inlineCode",{parentName:"li"},"/user")," as in ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:8100/user")," to see the User management screen.",(0,r.kt)("img",{src:n(649).Z,alt:"User list",className:"screenshot"})),(0,r.kt)("li",{parentName:"ol"},"Click add user, enter an alternative email address to yourself and click invite."),(0,r.kt)("li",{parentName:"ol"},"Check your inbox for a new onboarding email and click the link to start the onboarding process."),(0,r.kt)("li",{parentName:"ol"},"Remember that we customized the branding a bit? You're set-password page should look something like this now! \ud83d\ude40",(0,r.kt)("img",{src:n(1964).Z,alt:"Branding",className:"screenshot"})),(0,r.kt)("li",{parentName:"ol"},"Go ahead and finish the onboarding to not leave this user hanging...")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mission completed!")," \ud83e\udd4a"),(0,r.kt)("h3",{id:"thats-all-for-today-folks"},"That's all for today folks!"),(0,r.kt)("p",null,"You've just unlocked the next level and you're ready take on another challenge."),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read how to use your ",(0,r.kt)("a",{parentName:"li",href:"/nblocks-docs/docs/articles/branding"},"custom branding"),"."),(0,r.kt)("li",{parentName:"ul"},"Get ready and ",(0,r.kt)("a",{parentName:"li",href:"/nblocks-docs/docs/articles/security"},"secure your app"),"."),(0,r.kt)("li",{parentName:"ul"},"Understand the concept of ",(0,r.kt)("a",{parentName:"li",href:"/nblocks-docs/docs/articles/tenants-users"},"Tenants and Users"),"."),(0,r.kt)("li",{parentName:"ul"},"Go full hard core and checkout the ",(0,r.kt)("a",{parentName:"li",href:"/nblocks-docs/docs/articles/api-client"},"API client")," and ",(0,r.kt)("a",{parentName:"li",href:"https://nebulr-group.github.io/nblocks-api-docs"},"API reference"),".")))}g.isMDXComponent=!0},1964:function(e,t,n){t.Z=n.p+"assets/images/branding-1dc4193c6a531c57fd711d0193906c9f.png"},7243:function(e,t,n){t.Z=n.p+"assets/images/login-6a60478327d05777cd62e542e9a28c15.png"},649:function(e,t,n){t.Z=n.p+"assets/images/user-list-13c35a363d21bc65e925fc168d5018b5.png"}}]);