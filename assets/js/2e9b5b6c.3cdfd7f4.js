"use strict";(self.webpackChunknblocks_docs=self.webpackChunknblocks_docs||[]).push([[2822],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),o=n(6010),i=n(2389),s=n(7392),l=n(7094),p=n(2466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:i,values:d,groupId:m,className:h}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,s.l)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===i?i:i??y.find((e=>e.props.default))?.props.value??y[0].props.value;if(null!==f&&!b.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:v}=(0,l.U)(),[N,w]=(0,r.useState)(f),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=m){const e=g[m];null!=e&&e!==N&&b.some((t=>t.value===e))&&w(e)}const x=e=>{const t=e.currentTarget,n=E.indexOf(t),a=b[n].value;a!==N&&(T(t),w(a),null!=m&&v(m,String(a)))},S=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;t=E[n]??E[0];break}case"ArrowLeft":{const n=E.indexOf(e.currentTarget)-1;t=E[n]??E[E.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},h)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>E.push(e),onKeyDown:S,onClick:x},i,{className:(0,o.Z)("tabs__item",c,i?.className,{"tabs__item--active":N===t})}),n??t)}))),t?(0,r.cloneElement)(y.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},75:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),i=n(5162);const s={sidebar_position:4,sidebar_label:"Getting payment ready (10 min)"},l="Getting payment ready",p={unversionedId:"examples/payment-ready",id:"examples/payment-ready",title:"Getting payment ready",description:"We've made it easy to setup a paywall to your app and offer new customers to pick a plan and checkout a new subscription that grants access to your app.",source:"@site/docs/examples/payment-ready.mdx",sourceDirName:"examples",slug:"/examples/payment-ready",permalink:"/nblocks-docs/docs/examples/payment-ready",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/examples/payment-ready.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Getting payment ready (10 min)"},sidebar:"tutorialSidebar",previous:{title:"First branding (5 min)",permalink:"/nblocks-docs/docs/examples/first-branding"},next:{title:"Tune in for B2C (5 min)",permalink:"/nblocks-docs/docs/examples/tune-in-b2c"}},u={},c=[{value:"Setup the Stripe integration",id:"setup-the-stripe-integration",level:2},{value:"Setup your business model",id:"setup-your-business-model",level:2},{value:"Restrict features",id:"restrict-features",level:2},{value:"Frontend",id:"frontend",level:3},{value:"Backend",id:"backend",level:3},{value:"Signup",id:"signup",level:2},{value:"Getting production ready",id:"getting-production-ready",level:2}],d={toc:c};function m(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-payment-ready"},"Getting payment ready"),(0,r.kt)("p",null,"We've made it easy to setup a paywall to your app and offer new customers to pick a plan and checkout a new subscription that grants access to your app.\nHow you get paid by your customers is defined by your Business model which essentially consists of your ",(0,r.kt)("em",{parentName:"p"},"plans")," configuration."),(0,r.kt)("p",null,"We use Stripe as our payment partner.\nYour business model can easily be setup programmatically, we'll go through this later."),(0,r.kt)("p",null,"We also have you covered from customers that stop paying. Users of these tenants will be locked out if they neglect the Nblocks reminders."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Read more about the concept of users and tenants ",(0,r.kt)("a",{parentName:"p",href:"/nblocks-docs/docs/fundamentals/tenants-users"},"here"),".")),(0,r.kt)("p",null,"In this guide we'll setup an integration with Stripe in no time. The integration will initially run Stripe in test mode for the sake of having you click through the functionalty.\nWe'll end up describing how you can toggle the integration into production mode."),(0,r.kt)("h2",{id:"setup-the-stripe-integration"},"Setup the Stripe integration"),(0,r.kt)("p",null,"First step is to create your own Stripe account which NBlocks is going to use to enable payments."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Register for a new Stripe account. This can be easily done at ",(0,r.kt)("a",{parentName:"li",href:"https://stripe.com"},"stripe.com"),". If you already have an account you can use that.",(0,r.kt)("img",{src:n(9094).Z,alt:"Create stripe account",className:""})),(0,r.kt)("li",{parentName:"ol"},"Theres no need to activate payments and setup banking at this point."),(0,r.kt)("li",{parentName:"ol"},"Give your account a name which is required by Stripe before we can test payments.",(0,r.kt)("img",{src:n(9682).Z,alt:"Set account name",className:""})),(0,r.kt)("li",{parentName:"ol"},"Grab your Stripe test keys (both Publishable key and Secret key) found in your Stripe dashboard or at ",(0,r.kt)("a",{parentName:"li",href:"https://dashboard.stripe.com/apikeys"},"https://dashboard.stripe.com/apikeys"),". It's important these keys are for the test mode, otherwise you'll not be able to use Stripes test credit cards during checkout.",(0,r.kt)("img",{src:n(7818).Z,alt:"Set account name",className:""})),(0,r.kt)("li",{parentName:"ol"},"Go to your app config page ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:8080/setup/config"},"http://localhost:8080/setup/config")," and add these keys. Nblocks will use this to authenticate itself for future payments."),(0,r.kt)("li",{parentName:"ol"},"Voila!")),(0,r.kt)("h2",{id:"setup-your-business-model"},"Setup your business model"),(0,r.kt)("p",null,"Next step is to define some simple plans so there's actually something our users can checkout. We'll go ahead and explain the ",(0,r.kt)("em",{parentName:"p"},"Business model")," very briefly and how to setup a first draft. "),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Read more about the concept of business model ",(0,r.kt)("a",{parentName:"p",href:"/nblocks-docs/docs/fundamentals/business-model"},"here"),".")),(0,r.kt)("p",null,"For this example we're going to create two ",(0,r.kt)("em",{parentName:"p"},"plans"),': one free named "FREE" and one paid named "PREMIUM".\nPayments will be made in Euro and charged should recur monthly. These details needs to be put together into a JSON format and stored on your app model.'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Head over to your backend project and locate the ",(0,r.kt)("inlineCode",{parentName:"li"},"app-configuration.json")," file located in ",(0,r.kt)("inlineCode",{parentName:"li"},"nblocks/config")," folder."),(0,r.kt)("li",{parentName:"ol"},"Change the ",(0,r.kt)("inlineCode",{parentName:"li"},"businessModel")," property with below JSON directly within the file.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="nblocks/config/app-configuration.json"',title:'"nblocks/config/app-configuration.json"'},'...\nbusinessModel: {\n  "taxes": [],\n  "plans": [\n      {\n          "name": "FREE",\n          "prices": [\n              {\n                  "region": "DEFAULT",\n                  "amount": 0,\n                  "currency": "EUR",\n                  "recurrenceInterval": "month"\n              }\n          ]\n      },\n      {\n          "name": "PREMIUM",\n          "prices": [\n              {\n                  "region": "DEFAULT",\n                  "amount": 50,\n                  "currency": "EUR",\n                  "recurrenceInterval": "month"\n              }\n          ]\n      }\n  ]\n},\n...\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"In the terminal of your backend project; run ",(0,r.kt)("inlineCode",{parentName:"li"},"npx @nebulr-group/nblocks-plugin-tool push-app")," to persist the changes.")),(0,r.kt)("h2",{id:"restrict-features"},"Restrict features"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TODO add a description")),(0,r.kt)("h3",{id:"frontend"},"Frontend"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"react",label:"React",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<PlanAccessControllComponent\n  plans={["PREMIUM"]}\n>\n  <h1>This is premium content!</h1>\n</PlanAccessControllComponent>\n')))),(0,r.kt)("h3",{id:"backend"},"Backend"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"nestjs",label:"NestJS",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="nblocks/config/resourceMappings.json"',title:'"nblocks/config/resourceMappings.json"'},'...\n"/super/feature": {\n    "privilege": "AUTHENTICATED",\n    "plans": ["PREMIUM"]\n},\n...\n')))),(0,r.kt)("h2",{id:"signup"},"Signup"),(0,r.kt)("p",null,"The time has come to finally test payments. NBlocks supports two ways to expose this to your end users."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using the signup form in-app where the new user will be guided through a payment step after onboarding."),(0,r.kt)("li",{parentName:"ul"},"Using a set of unique links to open the prebuilt checkout views which automatically create a new user.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"These alternatives and their links are available to explore on your app config page ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8080/setup/config"},"http://localhost:8080/setup/config"),".")),(0,r.kt)("p",null,"We're going to make use of the first option this time."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:8080/setup/signup"},"http://localhost:8080/setup/signup")," and signup for a new account."),(0,r.kt)("li",{parentName:"ol"},"Click the link in signup email and login."),(0,r.kt)("li",{parentName:"ol"},"Select the PREMIUM plan."),(0,r.kt)("li",{parentName:"ol"},"Enter the Stripe test credit card ",(0,r.kt)("inlineCode",{parentName:"li"},"4242 4242 4242 4242"),", valid until ",(0,r.kt)("inlineCode",{parentName:"li"},"12/34")," and any CVC number."),(0,r.kt)("li",{parentName:"ol"},"Click subscribe."),(0,r.kt)("li",{parentName:"ol"},"Done! You're now a paying subscriber to your own app! Check that you can access Premium features")),(0,r.kt)("h2",{id:"getting-production-ready"},"Getting production ready"),(0,r.kt)("p",null,"Getting production ready with Stripe is as easy as replacing the test keys with the live keys via the app config page. You can grab your Stripe live keys here ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.stripe.com/apikeys"},"https://dashboard.stripe.com/apikeys"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You will not be able to use the Stripe test credit card during checkout in production mode.")))}m.isMDXComponent=!0},9094:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/stripe_1-d696e6ee0881d42c778a218199e6c443.png"},9682:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/stripe_2-b5d75add190b103bc92bcc2d4c59f1e2.png"},7818:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/stripe_3-5e0fbc2b1d217695cfae2db9bad26552.png"}}]);