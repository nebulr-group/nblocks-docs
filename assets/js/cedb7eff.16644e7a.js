"use strict";(self.webpackChunknblocks_docs=self.webpackChunknblocks_docs||[]).push([[6829],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),g=a,y=u["".concat(c,".").concat(g)]||u[g]||d[g]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8822:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3,sidebar_label:"Accessing your app id and api key"},i="Accessing your app id and api key",s={unversionedId:"getting-started/id-and-keys",id:"getting-started/id-and-keys",title:"Accessing your app id and api key",description:"Access through terminal",source:"@site/docs/01-getting-started/id-and-keys.mdx",sourceDirName:"01-getting-started",slug:"/getting-started/id-and-keys",permalink:"/nblocks-docs/docs/getting-started/id-and-keys",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Accessing your app id and api key"},sidebar:"tutorialSidebar",previous:{title:"Signup for Nblocks",permalink:"/nblocks-docs/docs/getting-started/signup"},next:{title:"Switching to Nblocks",permalink:"/nblocks-docs/docs/getting-started/switching-to-nblocks"}},c={},l=[{value:"Access through terminal",id:"access-through-terminal",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"accessing-your-app-id-and-api-key"},"Accessing your app id and api key"),(0,a.kt)("h2",{id:"access-through-terminal"},"Access through terminal"),(0,a.kt)("p",null,"When you ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/signup"},"signed up")," for Nblocks, the terminal tool created a new folder and placed a .env file containing your Nblocks API key and App id. "),(0,a.kt)("p",null,"The file looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title=".env"',title:'".env"'},"NBLOCKS_APP_ID=XXXX\nNBLOCKS_API_KEY=XXXXXXXXX\n")),(0,a.kt)("p",null,"The app id is used for public calls to our endpoints that are not protected.",(0,a.kt)("br",{parentName:"p"}),"\n","The api key is used in private calls to our endpoints that are protected. The api key is ",(0,a.kt)("strong",{parentName:"p"},"secret")," and should never be shared with anyone."))}d.isMDXComponent=!0}}]);