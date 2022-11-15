"use strict";(self.webpackChunknblocks_docs=self.webpackChunknblocks_docs||[]).push([[410],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),a=n(7294),o=n(2389),l=n(9443);var i=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(3616),u=n(6010),c="tabItem_vU9c";function p(e){var t,n,r,o=e.lazy,l=e.block,p=e.defaultValue,d=e.values,f=e.groupId,m=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,s.lx)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=h[0])?void 0:r.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=i(),y=v.tabGroupChoices,w=v.setTabGroupChoices,N=(0,a.useState)(k),x=N[0],T=N[1],O=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var j=y[f];null!=j&&j!==x&&b.some((function(e){return e.value===j}))&&T(j)}var C=function(e){var t=e.currentTarget,n=O.indexOf(t),r=b[n].value;r!==x&&(E(t),T(r),null!=f&&w(f,r))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":l},m)},b.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":x===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:I,onFocus:C,onClick:C},null!=n?n:t)}))),o?(0,a.cloneElement)(h.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},9718:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(6396),i=n(8215),s=["components"],u={sidebar_position:3,sidebar_label:"First branding (5 min)"},c="First branding",p={unversionedId:"examples/first-branding",id:"examples/first-branding",title:"First branding",description:"Wouldn't it be cool if your logo were used in both the UI and that onboarding email you received before instead?",source:"@site/docs/examples/first-branding.mdx",sourceDirName:"examples",slug:"/examples/first-branding",permalink:"/nblocks-docs/docs/examples/first-branding",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/examples/first-branding.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"First branding (5 min)"},sidebar:"tutorialSidebar",previous:{title:"Your first controller (5 min)",permalink:"/nblocks-docs/docs/examples/querying-first-data"},next:{title:"Getting payment ready (10 min)",permalink:"/nblocks-docs/docs/examples/payment-ready"}},d=[{value:"Branding the email (Backend)",id:"branding-the-email-backend",children:[],level:4},{value:"Branding the UI (Frontend)",id:"branding-the-ui-frontend",children:[],level:4},{value:"Next steps",id:"next-steps",children:[],level:2}],f={toc:d};function m(e){var t=e.components,u=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"first-branding"},"First branding"),(0,o.kt)("p",null,"Wouldn't it be cool if your logo were used in both the UI and that onboarding email you received before instead?\nWhile we're at it let's also try changing some colors and texts in the UI so you get a hang of it \ud83d\ude03"),(0,o.kt)("p",null,"Here's an overview on the stuff we're changing here: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The email logo and footer link."),(0,o.kt)("li",{parentName:"ul"},"The UI logo."),(0,o.kt)("li",{parentName:"ul"},"The title of the set-password page."),(0,o.kt)("li",{parentName:"ul"},"The primary color for buttons and links.")),(0,o.kt)("h4",{id:"branding-the-email-backend"},"Branding the email (Backend)"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"nestjs",label:"NestJS",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"First off we'll change the email appearance a bit. This part is about information stored on your app configuration in the Nblocks platform.\nThe configuration can be changed in a lot of ways, using the built in API client or a REST Http call.",(0,o.kt)("br",{parentName:"p"}),"\n","But hold on! We've made it super simple for this quick start and all you need to do is the following two step:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open your unique app-configuration.json file located in your nblocks folder which was put there by the setup script.\nYou can change the ",(0,o.kt)("inlineCode",{parentName:"li"},"logo")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"websiteUrl")," to your own or if you do not have it available use these two.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="nblocks/config/app-configuration.json"',title:'"nblocks/config/app-configuration.json"'},'{\n    ...\n    // Update logo and websiteUrl settings\n    "logo": "http://nblocks.dev/wp-content/uploads/2021/12/nblocks-testlogo.png",\n    "websiteUrl": "https://app.example.com",\n    ...\n}\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Great! Now we'll push the data so Nblocks stores these new values. In your terminal, navigate to the root of your backend project and run.\n",(0,o.kt)("inlineCode",{parentName:"li"},"npx @nebulr-group/nblocks-nestjs push-app-configuration"),".")),(0,o.kt)("p",null,"Awesome! The data has now been pushed and Nblocks will use this configuration in the future \ud83d\ude80"),(0,o.kt)("p",null,"You can already see this in effect by requesting a forgot password email from the forgot-password view.\nClick here ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8100/auth/forgot-password"},"http://localhost:8100/auth/forgot-password")," and add the email address from any of your users."),(0,o.kt)("p",null,"Check you inbox again! Pretty neat huh! \ud83d\ude0e"))),(0,o.kt)("h4",{id:"branding-the-ui-frontend"},"Branding the UI (Frontend)"),(0,o.kt)("p",null,"Next step we're focusing on the views you get from the plugin."),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"ionic",label:"Ionic",default:!0,mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Rember that NblocksIonicModule you imported during installation? Let's give it a few configs instead of using the default ones! We'll tell it to use another logo by configuring the ",(0,o.kt)("inlineCode",{parentName:"li"},"logoPath"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/app/app.module.ts"',title:'"src/app/app.module.ts"'},"\n@NgModule({\n  ...\n    NblocksIonicModule.forRoot({\n      logoPath: 'http://nblocks.dev/wp-content/uploads/2021/12/nblocks-testlogo.png', <--- configure logo\n    })\n})\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Open up the english language translation file found under ",(0,o.kt)("inlineCode",{parentName:"li"},"assets/i18n"),".\nThis, and other translation files, where put here by the setup script and defines the text content of all Nblocks views.\nWe'll replace the text of the translation key ",(0,o.kt)("inlineCode",{parentName:"li"},"NBLOCKS.AUTH.SET_NEW_PASSWORD")," which is the title of the set-password page and set it to something nice.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="src/assets/i18n/nblocks_en.json"',title:'"src/assets/i18n/nblocks_en.json"'},'{\n    "NBLOCKS": {\n    ...\n        "AUTH": {\n      ...\n            "SET_NEW_PASSWORD": "It\'s time to set that first password ;)", <--- Change this\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Lastly lets change the default Nblocks primary color for buttons and links.\nThis will be done by altering the ",(0,o.kt)("inlineCode",{parentName:"li"},"--ion-color-primary")," color in the Ionic theme variable.scss.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="src/theme/variables.scss"',title:'"src/theme/variables.scss"'},":root {\n  /** primary **/\n  --ion-color-primary: #434447;\n")),(0,o.kt)("p",null,"\ud83d\udca5 Perfect! You just did your first branding. Click ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8100/auth/set-password/token"},"http://localhost:8100/auth/set-password/token")," to reveal your changes.",(0,o.kt)("br",{parentName:"p"}),"\n","The set-password page should look something like this now \ud83d\ude40"),(0,o.kt)("img",{src:n(1964).Z,alt:"Branding",className:"screenshot"}))),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Read more about the concept of ",(0,o.kt)("a",{parentName:"li",href:"/nblocks-docs/docs/fundamentals/branding"},"Branding"),".")))}m.isMDXComponent=!0},1964:function(e,t,n){t.Z=n.p+"assets/images/branding-1dc4193c6a531c57fd711d0193906c9f.png"}}]);