"use strict";(self.webpackChunknblocks_docs=self.webpackChunknblocks_docs||[]).push([[6824],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(b,l(l({ref:t},u),{},{components:n})):a.createElement(b,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),o=n(6010),l=n(2389),i=n(7392),s=n(7094),c=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:l,values:d,groupId:m,className:b}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,i.l)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===l?l:l??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:v}=(0,s.U)(),[w,N]=(0,r.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=m){const e=k[m];null!=e&&e!==w&&f.some((t=>t.value===e))&&N(e)}const O=e=>{const t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==w&&(E(t),N(a),null!=m&&v(m,String(a)))},x=e=>{let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},b)},f.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:x,onClick:O},l,{className:(0,o.Z)("tabs__item",p,l?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,r.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},4985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),l=n(5162);const i={sidebar_position:3,sidebar_label:"Branding intro (5 min)"},s="Branding intro",c={unversionedId:"essentials/first-branding",id:"essentials/first-branding",title:"Branding intro",description:"Wouldn't it be cool if your logo were used in both the UI and that onboarding email you received before instead?",source:"@site/docs/essentials/first-branding.mdx",sourceDirName:"essentials",slug:"/essentials/first-branding",permalink:"/nblocks-docs/docs/essentials/first-branding",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/essentials/first-branding.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Branding intro (5 min)"},sidebar:"tutorialSidebar",previous:{title:"Getting payment ready (10 min)",permalink:"/nblocks-docs/docs/essentials/payment-ready"},next:{title:"Play with GraphQL (5 min)",permalink:"/nblocks-docs/docs/tutorials/graphql-playground"}},u={},p=[{value:"Branding the email (Backend)",id:"branding-the-email-backend",level:4},{value:"Branding the UI (Frontend)",id:"branding-the-ui-frontend",level:4},{value:"Next steps",id:"next-steps",level:2}],d={toc:p};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"branding-intro"},"Branding intro"),(0,r.kt)("p",null,"Wouldn't it be cool if your logo were used in both the UI and that onboarding email you received before instead?\nWhile we're at it let's also try changing some colors and texts in the UI so you get a hang of it \ud83d\ude03"),(0,r.kt)("p",null,"Here's an overview on the stuff we're changing here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The email logo and footer link."),(0,r.kt)("li",{parentName:"ul"},"The UI logo."),(0,r.kt)("li",{parentName:"ul"},"The title of the set-password page."),(0,r.kt)("li",{parentName:"ul"},"The primary color for buttons and links.")),(0,r.kt)("h4",{id:"branding-the-email-backend"},"Branding the email (Backend)"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"nestjs",label:"NestJS",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"First off we'll change the email appearance a bit. This part is about information stored on your app configuration in the Nblocks platform.\nThe configuration can be changed in a lot of ways, using the built in ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/sdk-client"},"SDK client")," or a REST HTTP call.",(0,r.kt)("br",{parentName:"p"}),"\n","But hold on! We've made it super simple for this quick start and all you need to do is the following two step:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open your unique app-configuration.json file located in your nblocks folder which was put there by the setup script.\nYou can change the ",(0,r.kt)("inlineCode",{parentName:"li"},"logo")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"websiteUrl")," to your own or if you do not have it available use these two.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="nblocks/config/app-configuration.json"',title:'"nblocks/config/app-configuration.json"'},'{\n    ...\n    // Update logo and websiteUrl settings\n    "logo": "http://nblocks.dev/wp-content/uploads/2021/12/nblocks-testlogo.png",\n    "websiteUrl": "https://app.example.com",\n    ...\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Great! Now we'll push the data so Nblocks stores these new values. In your terminal, navigate to the root of your backend project and run.\n",(0,r.kt)("inlineCode",{parentName:"li"},"npx @nebulr-group/nblocks-nestjs push-app-configuration"),".")),(0,r.kt)("p",null,"Awesome! The data has now been pushed and Nblocks will use this configuration in the future \ud83d\ude80"),(0,r.kt)("p",null,"You can already see this in effect by requesting a forgot password email from the forgot-password view.\nClick here ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8100/auth/forgot-password"},"http://localhost:8100/auth/forgot-password")," and add the email address from any of your users."),(0,r.kt)("p",null,"Check you inbox again! Pretty neat huh! \ud83d\ude0e"))),(0,r.kt)("h4",{id:"branding-the-ui-frontend"},"Branding the UI (Frontend)"),(0,r.kt)("p",null,"Next step we're focusing on the views you get from the plugin."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"React",label:"React",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Lets change the default Nblocks primary color pallete, which is used by buttons and links.\nThis will be done by creating the ",(0,r.kt)("inlineCode",{parentName:"p"},"--color-primary-*")," variables in the global CSS variables block."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="src/theme/variables.scss"',title:'"src/theme/variables.scss"'},":root {\n  /** primary **/\n  --color-primary-50: #EBF1FF;\n  --color-primary-100: #D4E1FF;\n  --color-primary-200: #BECFFE;\n  --color-primary-300: #A8BDFD;\n  --color-primary-400: #93A9FD;\n  --color-primary-500: #6C82FB;\n  --color-primary-600: #4C5FF7;\n  --color-primary-700: #3342F2;\n  --color-primary-800: #202AE9;\n  --color-primary-900: #1117D7;\n")),(0,r.kt)("p",null,"\ud83d\udca5 Perfect! You just did your first branding. Click ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8081/auth/login"},"http://localhost:8081/auth/login")," to reveal your changes.",(0,r.kt)("br",{parentName:"p"}),"\n","The login page should look something like this now \ud83d\ude40"),(0,r.kt)("img",{src:n(1964).Z,alt:"Branding",className:"screenshot"}))),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h1",{parentName:"li",id:"read-more-about-the-concept-of-branding"},"Read more about the concept of ",(0,r.kt)("a",{parentName:"h1",href:"/nblocks-docs/docs/concepts/branding"},"Branding"),"."))))}m.isMDXComponent=!0},1964:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/branding-2195174cd7500cfcd97a8e75bd9b09b8.png"}}]);