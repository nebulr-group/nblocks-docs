"use strict";(self.webpackChunknblocks_docs=self.webpackChunknblocks_docs||[]).push([[1734],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),a=n(7294),o=n(6010),i=n(2389),l=n(7392),s=n(7094),u=n(2466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){const{lazy:t,block:n,defaultValue:i,values:p,groupId:m,className:b}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=p??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,l.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===i?i:i??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==v&&!h.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:k}=(0,s.U)(),[w,T]=(0,a.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=m){const e=y[m];null!=e&&e!==w&&h.some((t=>t.value===e))&&T(e)}const N=e=>{const t=e.currentTarget,n=x.indexOf(t),r=h[n].value;r!==w&&(O(t),T(r),null!=m&&k(m,String(r)))},E=e=>{let t=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]??x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]??x[x.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},b)},h.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:E,onClick:N},i,{className:(0,o.Z)("tabs__item",d,i?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,a.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,i.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},8068:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),o=n(5488),i=n(5162);const l={sidebar_position:5,sidebar_label:"Tune in for B2C (5 min)"},s="Tune in for B2C",u={unversionedId:"examples/tune-in-b2c",id:"examples/tune-in-b2c",title:"Tune in for B2C",description:"In the Business-to-Consumer world, your users might expect a different and a little bit easier login and onboarding process than Business-to-Business (B2B).",source:"@site/docs/examples/tune-in-b2c.mdx",sourceDirName:"examples",slug:"/examples/tune-in-b2c",permalink:"/nblocks-docs/docs/examples/tune-in-b2c",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/examples/tune-in-b2c.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Tune in for B2C (5 min)"},sidebar:"tutorialSidebar",previous:{title:"Getting payment ready (10 min)",permalink:"/nblocks-docs/docs/examples/payment-ready"},next:{title:"Branding",permalink:"/nblocks-docs/docs/fundamentals/branding"}},c={},d=[{value:"Built in onboarding",id:"built-in-onboarding",level:2},{value:"Configuring",id:"configuring",level:3},{value:"See the result",id:"see-the-result",level:3}],p={toc:d};function m(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tune-in-for-b2c"},"Tune in for B2C"),(0,a.kt)("p",null,"In the Business-to-Consumer world, your users might expect a different and a little bit easier login and onboarding process than Business-to-Business (B2B).\nLet us walk you through how this can be customized with an example."),(0,a.kt)("h2",{id:"built-in-onboarding"},"Built in onboarding"),(0,a.kt)("p",null,"When a new user logs in, Nblocks will ask this user for some personal information like name and phone number.\nThis information collected is later provided to your app in the user details for every request made."),(0,a.kt)("img",{src:n(2359).Z,alt:"Branding",className:""}),(0,a.kt)("h3",{id:"configuring"},"Configuring"),(0,a.kt)("p",null,"Let's configure to not use the built in onboarding because it's not relevant to have names on the individual users in this case.\nWe're disabling this feature on the UI plugin."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"ionic",label:"Ionic",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Rember that NblocksIonicModule you imported during installation? Like we saw in the quickstart the module can take config parameters. This time we'll make use of the ",(0,a.kt)("inlineCode",{parentName:"p"},"onboarding")," configuration and we're disableing it all together."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/app/app.module.ts"',title:'"src/app/app.module.ts"'},"\n@NgModule({\n  ...\n    NblocksIonicModule.forRoot(\n    {\n      onboarding: {\n        enabled: false, <--- We set enable to false.\n        requiredFields: {\n          firstName: false, <--- Invididual fields can be required or not if we should enable the view\n          lastName: false, \n          phoneNumber: false\n        }\n      }\n    }\n  )\n})\n")))),(0,a.kt)("h3",{id:"see-the-result"},"See the result"),(0,a.kt)("p",null,"Try adding a new user, click the onboarding link sent to that users email address.\nAfter logging in in the first time you should come straight to the app and not see the built in onboarding any more."),(0,a.kt)("admonition",{title:"How do I add a new user?",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"See ending parts of the ",(0,a.kt)("a",{parentName:"p",href:"../quickstart"},"quickstart")," for a hands on example.")))}m.isMDXComponent=!0},2359:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/onboarding-0791d1f3839348ac1df0ec491bf1c9c1.png"}}]);