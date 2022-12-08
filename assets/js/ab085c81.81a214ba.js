"use strict";(self.webpackChunknblocks_docs=self.webpackChunknblocks_docs||[]).push([[4105],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_label:"Pricing plan"},i="The pricing plan in-depth",o={unversionedId:"concepts/pricing-plan",id:"concepts/pricing-plan",title:"The pricing plan in-depth",description:"Plans",source:"@site/docs/concepts/pricing-plan.mdx",sourceDirName:"concepts",slug:"/concepts/pricing-plan",permalink:"/nblocks-docs/docs/concepts/pricing-plan",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/concepts/pricing-plan.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Pricing plan"},sidebar:"tutorialSidebar",previous:{title:"Users & Tenants",permalink:"/nblocks-docs/docs/concepts/tenants-users"}},p={},s=[{value:"Plans",id:"plans",level:2},{value:"Prices",id:"prices",level:3},{value:"Taxes",id:"taxes",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-pricing-plan-in-depth"},"The pricing plan in-depth"),(0,a.kt)("h2",{id:"plans"},"Plans"),(0,a.kt)("p",null,"With plans you describe different subscription types that customers will be able to subscribe to.\nNaturally, different plans set out how rich feature set your app will provide. The richer feature set, the higher pricing."),(0,a.kt)("p",null,"For example consider you want to offer your app in two pricing points with different feature sets. One essential feature set and one premium.\nFor that we define two plans."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ESSENTIAL"),(0,a.kt)("td",{parentName:"tr",align:null},"A light set of features that people can subscribe to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PREMIUM"),(0,a.kt)("td",{parentName:"tr",align:null},"A bigger set of features that people can subscribe to")))),(0,a.kt)("p",null,"Once we've defined the different types of plans it's time to think of the pricing."),(0,a.kt)("h3",{id:"prices"},"Prices"),(0,a.kt)("p",null,"Each plan will be tied to one or more pricings. The sole purpose for this is to make the plan available for different regions and currencies."),(0,a.kt)("p",null,'Consider you want to offer the "essential" plan for 50 Euros in France and 30 GBP in England.'),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Region"),(0,a.kt)("th",{parentName:"tr",align:null},"Price"),(0,a.kt)("th",{parentName:"tr",align:null},"Currency"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FR"),(0,a.kt)("td",{parentName:"tr",align:null},"50"),(0,a.kt)("td",{parentName:"tr",align:null},"EUR")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EN"),(0,a.kt)("td",{parentName:"tr",align:null},"30"),(0,a.kt)("td",{parentName:"tr",align:null},"GBP")))),(0,a.kt)("p",null,'And the "premium" plan for 150 Euros in France and 100 GBP in England.'),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Region"),(0,a.kt)("th",{parentName:"tr",align:null},"Price"),(0,a.kt)("th",{parentName:"tr",align:null},"Currency"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FR"),(0,a.kt)("td",{parentName:"tr",align:null},"150"),(0,a.kt)("td",{parentName:"tr",align:null},"EUR")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EN"),(0,a.kt)("td",{parentName:"tr",align:null},"100"),(0,a.kt)("td",{parentName:"tr",align:null},"GBP")))),(0,a.kt)("p",null,"These prices will be withdrawn monthly from your customers credit cards. "),(0,a.kt)("p",null,"Great! Now we know the plans and their pricings for different regions. Last but not least is to have a look at taxes."),(0,a.kt)("h2",{id:"taxes"},"Taxes"),(0,a.kt)("p",null,"Many businesses are obligated to collect Value added tax (VAT) from their domestic customers. This may vary if you have international customers.\nWith that in mind we've done it easy to apply taxes like this for the regions you decide."),(0,a.kt)("p",null,"Let's say we're a French startup and we'd like our French customers to get a VAT of 20 % added to the total whilst having our English customers proceed without affecting the total.\nWe therefore declare these taxes:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Region"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Percentage"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FR"),(0,a.kt)("td",{parentName:"tr",align:null},"VAT/TVA"),(0,a.kt)("td",{parentName:"tr",align:null},"20")))))}u.isMDXComponent=!0}}]);