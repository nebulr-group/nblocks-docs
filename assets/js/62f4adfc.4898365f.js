"use strict";(self.webpackChunknblocks_docs=self.webpackChunknblocks_docs||[]).push([[871],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,k=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>j,contentTitle:()=>I,default:()=>q,frontMatter:()=>O,metadata:()=>S,toc:()=>E});var a=n(7462),r=n(7294),o=n(3905),l=n(6010),i=n(2466),s=n(6550),u=n(1980),c=n(7392),d=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function k(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!k({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=g({queryString:n,groupId:a}),[c,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=s??c;return k({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!k({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),p(e)}),[u,p,o]),tabValues:o}}var m=n(2389);const f="tabList__CuJ",y="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==o&&(d(t),s(a))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:p},i,{className:(0,l.Z)("tabs__item",y,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function T(e){const t=(0,m.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}const P="tabItem_Ymn6";function x(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(P,a),hidden:n},t)}const O={sidebar_position:1,sidebar_label:"Quickstart login",tags:["guide","quickstart"]},I="Quickstart User login",S={unversionedId:"user-login/adding-login",id:"user-login/adding-login",title:"Quickstart User login",description:"Integrate with Nblocks Cloud Login in any stack and have your users authenticate in no time!",source:"@site/docs/02-user-login/adding-login.mdx",sourceDirName:"02-user-login",slug:"/user-login/adding-login",permalink:"/nblocks-docs/docs/user-login/adding-login",draft:!1,tags:[{label:"guide",permalink:"/nblocks-docs/docs/tags/guide"},{label:"quickstart",permalink:"/nblocks-docs/docs/tags/quickstart"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Quickstart login",tags:["guide","quickstart"]},sidebar:"tutorialSidebar",previous:{title:"Switching to Nblocks",permalink:"/nblocks-docs/docs/getting-started/switching-to-nblocks"},next:{title:"Roles & Privileges",permalink:"/nblocks-docs/docs/access-and-security/roles-and-privileges"}},j={},E=[{value:"What will we build?",id:"what-will-we-build",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Open your project code base",id:"step-1-open-your-project-code-base",level:2},{value:"Step 2: Redirect the user to Nblocks Login",id:"step-2-redirect-the-user-to-nblocks-login",level:2},{value:"Add a login route",id:"add-a-login-route",level:3},{value:"Pseudo code",id:"pseudo-code",level:4},{value:"Step 3: Recieve the user back",id:"step-3-recieve-the-user-back",level:2},{value:"Add a callback route",id:"add-a-callback-route",level:3},{value:"Pseudo code",id:"pseudo-code-1",level:4},{value:"Exchange the code for tokens",id:"exchange-the-code-for-tokens",level:3},{value:"Try it!",id:"try-it",level:2},{value:"Start your app",id:"start-your-app",level:3},{value:"Navigate to /login",id:"navigate-to-login",level:3},{value:"Get redirected to Nblocks Login",id:"get-redirected-to-nblocks-login",level:3},{value:"Get back to your app as a logged in user",id:"get-back-to-your-app-as-a-logged-in-user",level:3},{value:"Next steps",id:"next-steps",level:2}],_={toc:E};function q(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quickstart-user-login"},"Quickstart User login"),(0,o.kt)("p",null,"Integrate with Nblocks Cloud Login in any stack and have your users authenticate in no time!"),(0,o.kt)("h2",{id:"what-will-we-build"},"What will we build?"),(0,o.kt)("p",null,"Here we're going to go through some awesome yada yada yada\nYou can do this in any stack you want, frontend or backend."),(0,o.kt)("p",null,"In 5 minutes from now, your application will have a login box with Sign in, Sign up, and SSO. All this with just a few lines of code using redirects, Open Id Connect, and OAuth2."),(0,o.kt)("p",null,"Use case: yada yada yada, your own web project project "),(0,o.kt)("admonition",{title:"Code examples",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You'll find example projects implementing this quickstart ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/example-projects"},"here"),".")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You have previously ",(0,o.kt)("a",{parentName:"li",href:"/docs/getting-started/signup"},"signed up")," for Nblocks and have access to your ",(0,o.kt)("a",{parentName:"li",href:"/docs/getting-started/id-and-keys"},"app id")," "),(0,o.kt)("li",{parentName:"ul"},"You have a web project in any stack you like that can run on http://localhost:8080")),(0,o.kt)("h2",{id:"step-1-open-your-project-code-base"},"Step 1: Open your project code base"),(0,o.kt)("p",null,"Open your project source code in any editor of your choice."),(0,o.kt)("h2",{id:"step-2-redirect-the-user-to-nblocks-login"},"Step 2: Redirect the user to Nblocks Login"),(0,o.kt)("p",null,"The idea is that your app should navigate user to Nblocks Login. "),(0,o.kt)("h3",{id:"add-a-login-route"},"Add a login route"),(0,o.kt)("p",null,"Add a new route in your app and redirect your user to the Nblocks Login entrypoint.\nBelow are pseudo code depending if you're implementing this for a frontend or backend."),(0,o.kt)("h4",{id:"pseudo-code"},"Pseudo code"),(0,o.kt)(T,{mdxType:"Tabs"},(0,o.kt)(x,{value:"frontend",label:"Frontend",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'var APP_ID = "XXX";\nwindow.location.href = `https://auth-stage.nblocks.cloud/url/login/${APP_ID}`;\n\n'))),(0,o.kt)(x,{value:"backend",label:"Backend",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'var APP_ID = "XXX";\nrouter.get("/login", (req, res) => {\n    res.redirect(`https://auth-stage.nblocks.cloud/url/login/${APP_ID}`)\n})\n')))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We're using the ",(0,o.kt)("inlineCode",{parentName:"p"},"/authorize")," endpoint here. For more details see the ",(0,o.kt)("a",{parentName:"p",href:"https://nebulr-group.github.io/nblocks-api-docs/#short-hand-authorize"},"API reference"))),(0,o.kt)("p",null,"That's enough for this step. The user will be redirected away from your app and we can proceed to next step."),(0,o.kt)("h2",{id:"step-3-recieve-the-user-back"},"Step 3: Recieve the user back"),(0,o.kt)("p",null,"When the user completes authentication with Nblocks login, the user is redirected back to your app with a code that we will resolve into something more useful.\nThe URL looks like this:\n",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/auth/oauth-callback?code=eyJh....")),(0,o.kt)("h3",{id:"add-a-callback-route"},"Add a callback route"),(0,o.kt)("p",null,"Add a new route in your app that act as a handler when the user is returned. Your code must be able to retrieve the code parameter from the URL. "),(0,o.kt)("h4",{id:"pseudo-code-1"},"Pseudo code"),(0,o.kt)(T,{mdxType:"Tabs"},(0,o.kt)(x,{value:"frontend",label:"Frontend",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"var code = (new URL(window.location.href)).searchParams.get('code');\n"))),(0,o.kt)(x,{value:"backend",label:"Backend",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'router.get("/auth/oauth-callback", (req, res) => {\n    var code = req.query.code;\n})\n')))),(0,o.kt)("h3",{id:"exchange-the-code-for-tokens"},"Exchange the code for tokens"),(0,o.kt)("p",null,"With the code now successfully obtained we can exchange it for some more useful profile information.\nYour app should make a API call to make this exchange.\nThe returning response contains secure token data and a resolved user profile which you can print to the console or display on your frontend page."),(0,o.kt)(T,{mdxType:"Tabs"},(0,o.kt)(x,{value:"rest",label:"Rest",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"POST https://auth-stage.nblocks.cloud/token/code/APP_ID\n")),(0,o.kt)("p",null,"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "token_type": "Bearer",\n  "expires_in": 3600,\n  "access_token": "eyJhbGciOiJQ...",\n  "refresh_token": "eyJhbGciOiJQ...",\n  "id_token": "eyJhbGciOiJQ...",\n  "user_profile": {\n    "name": "John Doe",\n    "family_name": "Doe",\n    "given_name": "John",\n    ...\n  }\n}\n'))),(0,o.kt)(x,{value:"js",label:"JS",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const APP_ID = "XXXX";\nconst code = "XXXX";\nconst result = await fetch(`https://auth-stage.nblocks.cloud/token/code/${APP_ID}`,\n  {\n    method: "POST",\n    headers: {\n      "Content-Type": "application/json",\n    },\n    body: JSON.stringify({\n      code: code,\n    }),\n  }\n).then(res => res.json());\n\n// Print the user info\nconsole.log(result.user_profile);\n')))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We're using the ",(0,o.kt)("inlineCode",{parentName:"p"},"/token")," endpoint here. For more details see the ",(0,o.kt)("a",{parentName:"p",href:"https://nebulr-group.github.io/nblocks-api-docs/#shorthand-get-tokens"},"API reference"))),(0,o.kt)("p",null,"That was all that was needed from you. We can now see this in action and test it."),(0,o.kt)("h2",{id:"try-it"},"Try it!"),(0,o.kt)("h3",{id:"start-your-app"},"Start your app"),(0,o.kt)("h3",{id:"navigate-to-login"},"Navigate to /login"),(0,o.kt)("h3",{id:"get-redirected-to-nblocks-login"},"Get redirected to Nblocks Login"),(0,o.kt)("p",null,"Here we show how nice it looks. Youtube? Images? etc."),(0,o.kt)("p",null,"The user signs up or logs in."),(0,o.kt)("h3",{id:"get-back-to-your-app-as-a-logged-in-user"},"Get back to your app as a logged in user"),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"Nblocks has a lot to offer. Here's some ideas on what to try next."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add SSO alternatives to your login experience"),(0,o.kt)("li",{parentName:"ul"},"Understand the mechanics of user tokens and how you can trust them in your app."),(0,o.kt)("li",{parentName:"ul"},"Protect your frontend and backend with these tokens."),(0,o.kt)("li",{parentName:"ul"},"Add Nblocks user management self service views to your app."),(0,o.kt)("li",{parentName:"ul"},"Look at the checklist before going live.")))}q.isMDXComponent=!0}}]);