"use strict";(self.webpackChunknblocks_docs=self.webpackChunknblocks_docs||[]).push([[547],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(f,l(l({ref:n},c),{},{components:t})):a.createElement(f,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(7462),r=t(7294),o=t(2389),l=t(9443);var i=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(3616),u=t(6010),c="tabItem_vU9c";function p(e){var n,t,a,o=e.lazy,l=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:h.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),v=(0,s.lx)(g,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(n=null!=p?p:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=h[0])?void 0:a.props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=i(),y=k.tabGroupChoices,w=k.setTabGroupChoices,N=(0,r.useState)(b),O=N[0],T=N[1],E=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=y[m];null!=j&&j!==O&&g.some((function(e){return e.value===j}))&&T(j)}var C=function(e){var n=e.currentTarget,t=E.indexOf(n),a=g[t].value;a!==O&&(x(n),T(a),null!=m&&w(m,a))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;t=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;t=E[r]||E[E.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":l},f)},g.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":O===n}),key:n,ref:function(e){return E.push(e)},onKeyDown:I,onFocus:C,onClick:C},null!=t?t:n)}))),o?(0,r.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function d(e){var n=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},8307:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),l=t(6396),i=t(8215),s=["components"],u={sidebar_position:2},c="i18n & Translations",p={unversionedId:"fundamentals/translations",id:"fundamentals/translations",title:"i18n & Translations",description:"Internationalisation (i18n) support is a given requirement for any serious app project.",source:"@site/docs/fundamentals/translations.mdx",sourceDirName:"fundamentals",slug:"/fundamentals/translations",permalink:"/nblocks-docs/docs/fundamentals/translations",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/fundamentals/translations.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Branding",permalink:"/nblocks-docs/docs/fundamentals/branding"},next:{title:"Securing your app",permalink:"/nblocks-docs/docs/fundamentals/security"}},d=[{value:"Frontend",id:"frontend",children:[],level:2},{value:"Backend",id:"backend",children:[],level:2},{value:"Supported languages in Nblocks platform",id:"supported-languages-in-nblocks-platform",children:[],level:2}],m={toc:d};function f(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"i18n--translations"},"i18n & Translations"),(0,o.kt)("p",null,"Internationalisation (i18n) support is a given requirement for any serious app project.\nThe Nblocks platform uses i18n to generate onboarding content and other communication material in different languages for your users.\nWhat default language to use is determined by the ",(0,o.kt)("inlineCode",{parentName:"p"},"locale")," property of your tenants. This is something you (programmatically) or the tenant owner can change anytime."),(0,o.kt)("h2",{id:"frontend"},"Frontend"),(0,o.kt)("p",null,"Our frontend plugins come with i18n support and during the installation process some translation files were put into your project under the path ",(0,o.kt)("inlineCode",{parentName:"p"},"assets/i18n/"),".\nThe Nblocks views will load these files over HTTP. Feel free to change these text entries to your own standards.\nYou can add more languages by adding a new file named ",(0,o.kt)("inlineCode",{parentName:"p"},"nblocks_${LANG}.json"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"LANG")," should be lowercase in ISO_639-1 format and using the same translation keys as the other files."),(0,o.kt)("p",null,"The current language is automatically resolved for the logged in user. If you want to allow the user to change language via the built in frontend plugin views you need to configure this for the plugin."),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"ionic",label:"Ionic",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Use the forRoot() method on the NblocksIonicModule to customize the languages."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/app/app.module.ts"',title:'"src/app/app.module.ts"'},"/* Enable both English and Swedish translations */\nNblocksIonicModule.forRoot({\n  languages: ['en','sv'],\n})\n")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"See ",(0,o.kt)("a",{parentName:"p",href:"#supported-languages-in-nblocks-platform"},"supported languages")," to understand the possibility and limitation of new languages."))),(0,o.kt)("h2",{id:"backend"},"Backend"),(0,o.kt)("p",null,"Any request that has been authorized through Nblocks will contain the tenant context and ultimately a ",(0,o.kt)("inlineCode",{parentName:"p"},"locale")," property.\nYou can use this property to set the language of the i18n plugin and render your own translations."),(0,o.kt)("p",null,"Since our backend plugins do not use translations we don't provide any examples. Feel free to use any tool you like."),(0,o.kt)("h2",{id:"supported-languages-in-nblocks-platform"},"Supported languages in Nblocks platform"),(0,o.kt)("p",null,"Even if you're supporting different languages in your app, the Nblocks platform (responsible for emailing, onboarding etc.) supports these languages at the time.\nNblocks will fallback to English if an unknown language is present."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"ISO_639-1"),(0,o.kt)("th",{parentName:"tr",align:null},"Language"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"en"),(0,o.kt)("td",{parentName:"tr",align:null},"English (Default for new tenants)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sv"),(0,o.kt)("td",{parentName:"tr",align:null},"Swedish")))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Updated 2022-01-01")),(0,o.kt)("p",null,"Contact us if you want to request support for a new language. We'd be happy to put that into the roadmap."))}f.isMDXComponent=!0}}]);