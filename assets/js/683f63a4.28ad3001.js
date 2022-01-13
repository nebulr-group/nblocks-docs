"use strict";(self.webpackChunknblocks_docs=self.webpackChunknblocks_docs||[]).push([[611],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(7294),l=n(2389),o=n(9443);var i=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(3616),u=n(6010),c="tabItem_vU9c";function p(e){var t,n,a,l=e.lazy,o=e.block,p=e.defaultValue,m=e.values,d=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,s.lx)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==v&&!b.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=i(),y=k.tabGroupChoices,N=k.setTabGroupChoices,w=(0,r.useState)(v),T=w[0],x=w[1],O=[],P=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var C=y[d];null!=C&&C!==T&&b.some((function(e){return e.value===C}))&&x(C)}var S=function(e){var t=e.currentTarget,n=O.indexOf(t),a=b[n].value;a!==T&&(P(t),x(a),null!=d&&N(d,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":o},h)},b.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":T===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:E,onFocus:S,onClick:S},null!=n?n:t)}))),l?(0,r.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},8092:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return h}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=n(6396),i=n(8215),s=["components"],u={sidebar_position:1},c="Branding",p={unversionedId:"articles/branding",id:"articles/branding",title:"Branding",description:"Flexible branding has been a top priority for us and Nblocks lets you apply your own brand to your app. This applies to all aspects like colors, logos, wordings, emailing etc. Learn how to setup your app with your own custom branding.",source:"@site/docs/articles/branding.mdx",sourceDirName:"articles",slug:"/articles/branding",permalink:"/nblocks-docs/docs/articles/branding",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/articles/branding.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Query your first data (2 min)",permalink:"/nblocks-docs/docs/examples/querying-first-data"},next:{title:"i18n & Translations",permalink:"/nblocks-docs/docs/articles/translations"}},m=[{value:"Frontend plugins",id:"frontend-plugins",children:[{value:"Colors and Fonts",id:"colors-and-fonts",children:[{value:"Color scheme",id:"color-scheme",children:[],level:4},{value:"Fonts",id:"fonts",children:[],level:4},{value:"Variables",id:"variables",children:[],level:4}],level:3},{value:"Translations",id:"translations",children:[],level:3}],level:2},{value:"App variables",id:"app-variables",children:[],level:2}],d={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"branding"},"Branding"),(0,l.kt)("p",null,"Flexible branding has been a top priority for us and Nblocks lets you apply your own brand to your app. This applies to all aspects like colors, logos, wordings, emailing etc. Learn how to setup your app with your own custom branding."),(0,l.kt)("p",null,"Branding can be customized in two ways:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#frontend-plugins"},(0,l.kt)("strong",{parentName:"a"},"Frontend plugins"))," styling can be overridden with your own variables for colors, fonts, settings and translations."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#app-variables"},(0,l.kt)("strong",{parentName:"a"},"App variables"))," like App name, logo, email sender alias etc. that Nblocks will use in all interactions with your users. This data is stored on your app model in the NBlocks platform.")),(0,l.kt)("h2",{id:"frontend-plugins"},"Frontend plugins"),(0,l.kt)("p",null,"Our frontend plugins come prebaked with colors, fonts and other default settings which can easily be changed to match your requirements."),(0,l.kt)("h3",{id:"colors-and-fonts"},"Colors and Fonts"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"ionic",label:"Ionic",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"The plugin views has been built around Ionic and for some complex components, PrimeNG, using default styling with as small footprint as possible."),(0,l.kt)("h4",{id:"color-scheme"},"Color scheme"),(0,l.kt)("p",null,"We use the default Ionic colors: primary, secondary, tertiary etc. You can easily change them by following the ",(0,l.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/theming/css-variables"},"official guide from Ionic.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src/theme/variables.scss"',title:'"src/theme/variables.scss"'},":root {\n  --ion-color-primary: #36383b;\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-tertiary: #5260ff;\n")),(0,l.kt)("p",null,"For PrimeNG you can either swap the base theme to any of the available free themes by following the ",(0,l.kt)("a",{parentName:"p",href:"https://www.primefaces.org/primeng/v12-lts/#/setup"},"official docs"),".\nIf that's not sufficient you can override the theme styling by adding rules to your own CSS."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Swap PrimeNG theme")),(0,l.kt)("p",null,"One of the styles you added to ",(0,l.kt)("inlineCode",{parentName:"p"},"angular.json")," during the quickstart intro represents the PrimeNG theme. You can change this to any of the 30+ available themes."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="angular.json"',title:'"angular.json"'},'...\n"styles": [\n  ...\n  "node_modules/primeng/resources/themes/saga-blue/theme.css",\n  or\n  "node_modules/primeng/resources/themes/md-light-indigo/theme.css",\n  or\n  "node_modules/primeng/resources/themes/luna-amber/theme.css",\n  etc\n  ...\n],\n...\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Override PrimeNG CSS rules")),(0,l.kt)("p",null,"Append the global.scss with rules overriding the default theme styling from PrimeNG."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src/global.scss"',title:'"src/global.scss"'},".p-highlight {\n    color: red !important;\n}\n")),(0,l.kt)("h4",{id:"fonts"},"Fonts"),(0,l.kt)("p",null,"As with colors the fonts can easily be changed using Ionic variables and PrimeNG theme changing and/or style rule override."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src/theme/variables.scss"',title:'"src/theme/variables.scss"'},":root {\n  --ion-font-family: 'Roboto'\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Swap PrimeNG theme")),(0,l.kt)("p",null,"See above example with colors."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Override PrimeNG CSS rules")),(0,l.kt)("p",null,"Append the global.scss with rules overriding the default theme styling from PrimeNG."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src/global.scss"',title:'"src/global.scss"'},".p-component {\n    font-family: 'Times New Roman', Times, serif !important\n}\n")),(0,l.kt)("h4",{id:"variables"},"Variables"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"forRoot()")," method on the ",(0,l.kt)("inlineCode",{parentName:"p"},"NblocksIonicModule")," to provide your own variables."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/app/app.module.ts"',title:'"src/app/app.module.ts"'},'NblocksIonicModule.forRoot({\n  logoPath: "https://www.myapp.com/path/to/logo.png",\n  privacyPolicyUrl: "https://www.myapp.com/privacy",\n})\n'))),(0,l.kt)(i.Z,{value:"flutter",label:"Flutter",mdxType:"TabItem"},"Coming soon...")),(0,l.kt)("h3",{id:"translations"},"Translations"),(0,l.kt)("p",null,"Head over to ",(0,l.kt)("a",{parentName:"p",href:"./translations"},"i18n & Translations")," to see how to setup and use your own lingo."),(0,l.kt)("h2",{id:"app-variables"},"App variables"),(0,l.kt)("p",null,"Using our backend plugins or not, Nblocks have already stored an App model which is up to you to change.\nYour app model holds some variables that are central to how content like onboarding material from Nblocks looks like."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Variable"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"Your app name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"logo"),(0,l.kt)("td",{parentName:"tr",align:null},"A public url to your logo")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"emailSenderName"),(0,l.kt)("td",{parentName:"tr",align:null},"This will be the sender name in all Nblocks emails")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"emailSenderEmail"),(0,l.kt)("td",{parentName:"tr",align:null},"This will be the sender email in all Nblocks emails. You'll have to verify this email address before being able to use it")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"websiteUrl"),(0,l.kt)("td",{parentName:"tr",align:null},"A public url to a landing page. Used in email footers etc.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"privacyPolicyUrl"),(0,l.kt)("td",{parentName:"tr",align:null},"A public url to a privacy policy. Used in email footers etc.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"termsOfServiceUrl"),(0,l.kt)("td",{parentName:"tr",align:null},"A public url to a terms of service. Used in email footers etc.")))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Changing the ",(0,l.kt)("inlineCode",{parentName:"p"},"emailSenderName")," will send a verification email to that email address.\nOnly after you've verified that you're the rightful owner of the email address will Nblocks use it."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Updating your app model")),(0,l.kt)("p",null,"You can update your app model with the built in Nblocks Api client, Postman, Curl or any HTTP POST tool.\nBelow we use the built in Nblocks Api client that can be obtained via the plugin."),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"nestjs",label:"NestJS",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'constructor(\n    private readonly clientService: ClientService\n  ) {}\n...\n// Set branding\nawait this.clientService.client.updateApp({\n    "name": "My App",\n    "logo": "https://www.example.com/logo.png",\n    "emailSenderName": "My app [Notification]",\n    "emailSenderEmail": "notifications@example.com",\n    "websiteUrl": "https://www.example.com",\n    "privacyPolicyUrl": "https://www.example.com/privacy-policy",\n    "termsOfServiceUrl": "https://www.example.com/terms-of-service"\n});\n'))),(0,l.kt)(i.Z,{value:"expressjs",label:"Express.js",mdxType:"TabItem"},"Coming soon...")))}h.isMDXComponent=!0}}]);