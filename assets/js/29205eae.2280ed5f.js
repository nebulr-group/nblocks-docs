"use strict";(self.webpackChunknblocks_docs=self.webpackChunknblocks_docs||[]).push([[291],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),r=n(7294),i=n(2389),o=n(9443);var l=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(3616),c=n(6010),u="tabItem_vU9c";function p(e){var t,n,a,i=e.lazy,o=e.block,p=e.defaultValue,d=e.values,m=e.groupId,h=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:k.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),f=(0,s.lx)(v,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=k[0])?void 0:a.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=l(),N=g.tabGroupChoices,y=g.setTabGroupChoices,w=(0,r.useState)(b),T=w[0],x=w[1],S=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=N[m];null!=C&&C!==T&&v.some((function(e){return e.value===C}))&&x(C)}var O=function(e){var t=e.currentTarget,n=S.indexOf(t),a=v[n].value;a!==T&&(E(t),x(a),null!=m&&y(m,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=S.indexOf(e.currentTarget)+1;n=S[a]||S[0];break;case"ArrowLeft":var r=S.indexOf(e.currentTarget)-1;n=S[r]||S[S.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},h)},v.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":T===t}),key:t,ref:function(e){return S.push(e)},onKeyDown:P,onFocus:O,onClick:O},null!=n?n:t)}))),i?(0,r.cloneElement)(k.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},5813:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(6396),l=n(8215),s=["components"],c={sidebar_position:6},u="Customers & Stripe",p={unversionedId:"articles/stripe",id:"articles/stripe",title:"Customers & Stripe",description:"We've made it easy to setup a paywall to your app and offer new customers to pick a plan and checkout a new subscription that grants access to your app.",source:"@site/docs/articles/stripe.mdx",sourceDirName:"articles",slug:"/articles/stripe",permalink:"/nblocks-docs/docs/articles/stripe",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/articles/stripe.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Users & Tenants",permalink:"/nblocks-docs/docs/articles/tenants-users"},next:{title:"API client",permalink:"/nblocks-docs/docs/articles/api-client"}},d=[{value:"Plans",id:"plans",children:[{value:"Prices",id:"prices",children:[],level:3}],level:2},{value:"Taxes",id:"taxes",children:[],level:2},{value:"Checkout",id:"checkout",children:[],level:2},{value:"Setup",id:"setup",children:[{value:"Register for a Stripe account",id:"register-for-a-stripe-account",children:[],level:3},{value:"Store Stripe credentials",id:"store-stripe-credentials",children:[],level:3},{value:"Update the business model",id:"update-the-business-model",children:[],level:3},{value:"Obtain an id for the prebuild Stripe checkout",id:"obtain-an-id-for-the-prebuild-stripe-checkout",children:[],level:3}],level:2}],m={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"customers--stripe"},"Customers & Stripe"),(0,i.kt)("p",null,"We've made it easy to setup a paywall to your app and offer new customers to pick a plan and checkout a new subscription that grants access to your app.\nWith this module we also have you covered from customers that stop paying. Users of these tenants will be locked out if they neglect the Nblocks reminders.\nHow you get paid by your customers is defined by your Business model which essentially consists of your ",(0,i.kt)("inlineCode",{parentName:"p"},"plans")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tax")," configurations."),(0,i.kt)("p",null,"We use Stripe as our payment partner.\nThe business model can be setup using the Nblock Dashboard or programmatically."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Read more about the concept of users and tenants ",(0,i.kt)("a",{parentName:"p",href:"/nblocks-docs/docs/articles/tenants-users"},"here"),"."))),(0,i.kt)("h2",{id:"plans"},"Plans"),(0,i.kt)("p",null,"With plans you describe different subscription types that customers will be able to subscribe to.\nNaturally, different plans set out how rich feature set your app will provide. The richer feature set, the higher pricing."),(0,i.kt)("p",null,"For example consider you want to offer your app in two pricing points with different feature sets. One essential feature set and one complete.\nFor that we define two plans."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ESSENTIAL"),(0,i.kt)("td",{parentName:"tr",align:null},"A light set of features that people can subscribe to")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"COMPLETE"),(0,i.kt)("td",{parentName:"tr",align:null},"A bigger set of features that people can subscribe to")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Every time a customer (may it be a new or an existing one) checkout a new subscription; a new tenant with this plan is created.\nYou're app will be able to easily obtain the plan information every time a request to your backend is made.\nUsing that information you'll be able to provision different feature sets"))),(0,i.kt)("p",null,"Once we've defined the different types of plans it's time to think of the pricing."),(0,i.kt)("h3",{id:"prices"},"Prices"),(0,i.kt)("p",null,"Each plan will be tied to one or more pricings. The sole purpose for this is to make the plan available for different regions and currencies."),(0,i.kt)("p",null,'Consider you want to offer the "essential" plan for 50 Euros in France and 30 GBP in England.'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Region"),(0,i.kt)("th",{parentName:"tr",align:null},"Price"),(0,i.kt)("th",{parentName:"tr",align:null},"Currency"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"FR"),(0,i.kt)("td",{parentName:"tr",align:null},"50"),(0,i.kt)("td",{parentName:"tr",align:null},"EUR")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EN"),(0,i.kt)("td",{parentName:"tr",align:null},"30"),(0,i.kt)("td",{parentName:"tr",align:null},"GBP")))),(0,i.kt)("p",null,'And the "complete" plan for 150 Euros in France and 100 GBP in England.'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Region"),(0,i.kt)("th",{parentName:"tr",align:null},"Price"),(0,i.kt)("th",{parentName:"tr",align:null},"Currency"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"FR"),(0,i.kt)("td",{parentName:"tr",align:null},"150"),(0,i.kt)("td",{parentName:"tr",align:null},"EUR")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EN"),(0,i.kt)("td",{parentName:"tr",align:null},"100"),(0,i.kt)("td",{parentName:"tr",align:null},"GBP")))),(0,i.kt)("p",null,"These prices will be withdrawn monthly from your customers credit cards. "),(0,i.kt)("p",null,"Great! Now we know the plans and their pricings for different regions. Last but not least is to have a look at taxes."),(0,i.kt)("h2",{id:"taxes"},"Taxes"),(0,i.kt)("p",null,"Many businesses are obligated to collect Value added tax (VAT) from their domestic customers. This may vary if you have international customers.\nWith that in mind we've done it easy to apply taxes like this for the regions you decide."),(0,i.kt)("p",null,"Let's say we're a French startup and we'd like our French customers to get a VAT of 20 % added to the total whilst having our English customers proceed without affecting the total.\nWe therefore declare these taxes:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Region"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Percentage"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"FR"),(0,i.kt)("td",{parentName:"tr",align:null},"VAT/TVA"),(0,i.kt)("td",{parentName:"tr",align:null},"20")))),(0,i.kt)("h2",{id:"checkout"},"Checkout"),(0,i.kt)("p",null,"We offer a pre built checkout solution that you can easily embed on your own product web page.\nThe checkout allows new customers to subscribe to a plan with their credit card that automatically creates a new tenant workspace and user access to your application. "),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Read more about tenants, users and how they can access your application ",(0,i.kt)("a",{parentName:"p",href:"tenants-users"},"here"),"."))),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"Now when we understand the different parts of the business model we can set this up programmatically for our Nblocks app model."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You must first register for a Stripe account. This can be easily done at ",(0,i.kt)("a",{parentName:"li",href:"https://stripe.com"},"stripe.com"),"."),(0,i.kt)("li",{parentName:"ol"},"Add the Nblocks webhook URL to Stripe webhooks"),(0,i.kt)("li",{parentName:"ol"},"Provide your Stripe api credentials (found in your Stripe dashboard) to Nblocks. Nblocks will use this to authenticate itself."),(0,i.kt)("li",{parentName:"ol"},"Then we update the business model which will synchronize automatically with Stripe creating the necessary resources in Stripe."),(0,i.kt)("li",{parentName:"ol"},"In the last example we use the checkout api to obtain a checkout id to use with Stripes official frontend library to open the prebuilt checkout view.")),(0,i.kt)("h3",{id:"register-for-a-stripe-account"},"Register for a Stripe account"),(0,i.kt)("p",null,"Coming soon..."),(0,i.kt)("h3",{id:"store-stripe-credentials"},"Store Stripe credentials"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"nestjs",label:"NestJS",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'constructor(\n    private readonly clientService: ClientService\n  ) {}\n...\nawait client.updateAppCredentials(\n    {\n        stripeSecretKey: "XXXXXXX", \n        stripePublicKey: "XXXXXXX"\n    }\n);\n'))),(0,i.kt)(l.Z,{value:"expressjs",label:"Express.js",mdxType:"TabItem"},"Coming soon...")),(0,i.kt)("h3",{id:"update-the-business-model"},"Update the business model"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"nestjs",label:"NestJS",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'constructor(\n    private readonly clientService: ClientService\n  ) {}\n...\n\nawait this.clientService.client.updateApp({\n    "businessModel": {\n        "taxes": [\n            {\n                "region": "FR",\n                "name": "VAT/TVA",\n                "percentage": 20\n            }\n        ],\n        "plans": [\n            {\n                "name": "ESSENTIAL",\n                "prices": [\n                    {\n                        "region": "FR",\n                        "amount": 50,\n                        "currency": "EUR",\n                        "recurrenceInterval": "month"\n                    },\n                    {\n                        "region": "EN",\n                        "amount": 30,\n                        "currency": "GBP",\n                        "recurrenceInterval": "month"\n                    }\n                ]\n            },\n            {\n                "name": "COMPLETE",\n                "prices": [\n                    {\n                        "region": "FR",\n                        "amount": 150,\n                        "currency": "EUR",\n                        "recurrenceInterval": "month"\n                    },\n                    {\n                        "region": "EN",\n                        "amount": 100,\n                        "currency": "GBP",\n                        "recurrenceInterval": "month"\n                    }\n                ]\n            }\n        ]\n    }\n});\n'))),(0,i.kt)(l.Z,{value:"expressjs",label:"Express.js",mdxType:"TabItem"},"Coming soon...")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Altering the business model will trigger a synchronization with Stripe. You must have stored your Stripe integration keys in Nblocks for this to happen."))),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Don't change products and price data inside Stripe created automatically by Nblocks. This might affect the checkout availability and recurring subscription management."))),(0,i.kt)("h3",{id:"obtain-an-id-for-the-prebuild-stripe-checkout"},"Obtain an id for the prebuild Stripe checkout"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"nestjs",label:"NestJS",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'constructor(\n    private readonly clientService: ClientService\n  ) {}\n...\nconst checkoutSession = await client.createCheckoutSession({plan: "ESSENTIAL", region: "FR"});\n\n// Use checkoutSession.id to render the prebuilt Stripe checkout page using Stripe JS Lib.\n'))),(0,i.kt)(l.Z,{value:"expressjs",label:"Express.js",mdxType:"TabItem"},"Coming soon...")))}h.isMDXComponent=!0}}]);