"use strict";(self.webpackChunknblocks_docs=self.webpackChunknblocks_docs||[]).push([[547],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),o=n(6010),l=n(2389),s=n(7392),i=n(7094),u=n(2466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:l,values:d,groupId:m,className:f}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,s.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===l?l:l??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:v}=(0,i.U)(),[w,N]=(0,r.useState)(k),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=m){const e=y[m];null!=e&&e!==w&&g.some((t=>t.value===e))&&N(e)}const E=e=>{const t=e.currentTarget,n=O.indexOf(t),a=g[n].value;a!==w&&(T(t),N(a),null!=m&&v(m,String(a)))},j=e=>{let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;t=O[n]??O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;t=O[n]??O[O.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},f)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:j,onClick:E},l,{className:(0,o.Z)("tabs__item",c,l?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,r.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},8307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),l=n(5162);const s={sidebar_position:2},i="i18n & Translations",u={unversionedId:"fundamentals/translations",id:"fundamentals/translations",title:"i18n & Translations",description:"Internationalisation (i18n) support is a given requirement for any serious app project.",source:"@site/docs/fundamentals/translations.mdx",sourceDirName:"fundamentals",slug:"/fundamentals/translations",permalink:"/nblocks-docs/docs/fundamentals/translations",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/fundamentals/translations.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Branding",permalink:"/nblocks-docs/docs/fundamentals/branding"},next:{title:"Securing your app",permalink:"/nblocks-docs/docs/fundamentals/security"}},p={},c=[{value:"Frontend",id:"frontend",level:2},{value:"Backend",id:"backend",level:2},{value:"Supported languages in Nblocks platform",id:"supported-languages-in-nblocks-platform",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"i18n--translations"},"i18n & Translations"),(0,r.kt)("p",null,"Internationalisation (i18n) support is a given requirement for any serious app project.\nThe Nblocks platform uses i18n to generate onboarding content and other communication material in different languages for your users.\nWhat default language to use is determined by the ",(0,r.kt)("inlineCode",{parentName:"p"},"locale")," property of your tenants. This is something you (programmatically) or the tenant owner can change anytime."),(0,r.kt)("h2",{id:"frontend"},"Frontend"),(0,r.kt)("p",null,"Our frontend plugins come with i18n support and during the installation process some translation files were put into your project under the path ",(0,r.kt)("inlineCode",{parentName:"p"},"assets/i18n/"),".\nThe Nblocks views will load these files over HTTP. Feel free to change these text entries to your own standards.\nYou can add more languages by adding a new file named ",(0,r.kt)("inlineCode",{parentName:"p"},"nblocks_${LANG}.json"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"LANG")," should be lowercase in ISO_639-1 format and using the same translation keys as the other files."),(0,r.kt)("p",null,"The current language is automatically resolved for the logged in user. If you want to allow the user to change language via the built in frontend plugin views you need to configure this for the plugin."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ionic",label:"Ionic",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Use the forRoot() method on the NblocksIonicModule to customize the languages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/app/app.module.ts"',title:'"src/app/app.module.ts"'},"NblocksIonicModule.forRoot({\n  languages: ['en','sv'], <--- Enable both English and Swedish translations\n})\n")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"#supported-languages-in-nblocks-platform"},"supported languages")," to understand the possibility and limitation of new languages.")),(0,r.kt)("h2",{id:"backend"},"Backend"),(0,r.kt)("p",null,"Any request that has been authorized through Nblocks will contain the tenant context and ultimately a ",(0,r.kt)("inlineCode",{parentName:"p"},"locale")," property.\nYou can use this property to set the language of the i18n plugin and render your own translations."),(0,r.kt)("p",null,"Since our backend plugins do not use translations we don't provide any examples. Feel free to use any tool you like."),(0,r.kt)("h2",{id:"supported-languages-in-nblocks-platform"},"Supported languages in Nblocks platform"),(0,r.kt)("p",null,"Even if you're supporting different languages in your app, the Nblocks platform (responsible for emailing, onboarding etc.) supports these languages at the time.\nNblocks will fallback to English if an unknown language is present."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ISO_639-1"),(0,r.kt)("th",{parentName:"tr",align:null},"Language"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"en"),(0,r.kt)("td",{parentName:"tr",align:null},"English (Default for new tenants)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sv"),(0,r.kt)("td",{parentName:"tr",align:null},"Swedish")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Updated 2022-01-01")),(0,r.kt)("p",null,"Contact us if you want to request support for a new language. We'd be happy to put that into the roadmap."))}m.isMDXComponent=!0}}]);