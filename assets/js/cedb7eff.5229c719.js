"use strict";(self.webpackChunknblocks_docs=self.webpackChunknblocks_docs||[]).push([[6829],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),y=a,g=u["".concat(c,".").concat(y)]||u[y]||d[y]||i;return r?n.createElement(g,o(o({ref:t},l),{},{components:r})):n.createElement(g,o({ref:t},l))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8822:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:3,sidebar_label:"Accessing your app id and api key"},o="Accessing your app id and api key",s={unversionedId:"getting-started/id-and-keys",id:"getting-started/id-and-keys",title:"Accessing your app id and api key",description:"Access through terminal",source:"@site/docs/01-getting-started/id-and-keys.mdx",sourceDirName:"01-getting-started",slug:"/getting-started/id-and-keys",permalink:"/nblocks-docs/docs/getting-started/id-and-keys",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Accessing your app id and api key"},sidebar:"tutorialSidebar",previous:{title:"Signup for Nblocks",permalink:"/nblocks-docs/docs/getting-started/signup"},next:{title:"Quickstart User Ready",permalink:"/nblocks-docs/docs/authentication-and-access/quickstart-user-ready"}},c={},p=[{value:"Access through terminal",id:"access-through-terminal",level:2}],l={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"accessing-your-app-id-and-api-key"},"Accessing your app id and api key"),(0,a.kt)("h2",{id:"access-through-terminal"},"Access through terminal"),(0,a.kt)("p",null,"When you ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/signup"},"signed up")," for Nblocks, the terminal tool created a new folder and placed a .env file containing your Nblocks API key and App id. "),(0,a.kt)("p",null,"The file looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title=".env"',title:'".env"'},"NBLOCKS_APP_ID=XXXX\nNBLOCKS_API_KEY=XXXXXXXXX\n")),(0,a.kt)("p",null,"The app id is used for public calls to our endpoints that are not protected.",(0,a.kt)("br",{parentName:"p"}),"\n","The api key is used in private calls to our endpoints that are protected. The api key is ",(0,a.kt)("strong",{parentName:"p"},"secret")," and should never be shared with anyone."))}d.isMDXComponent=!0}}]);