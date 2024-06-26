"use strict";(self.webpackChunknblocks_docs=self.webpackChunknblocks_docs||[]).push([[9618],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(b,s(s({ref:t},c),{},{components:n})):r.createElement(b,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(7462),a=n(7294),o=n(6010),s=n(2466),l=n(6550),i=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,u]=b({queryString:n,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),h=(()=>{const e=i??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var h=n(2389);const g="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==l&&(d(t),i(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},s,{className:(0,o.Z)("tabs__item",v,s?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function T(e){const t=(0,h.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},5873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),s=n(5162);const l={sidebar_position:5,sidebar_label:"User management portal (tutorial)",tags:["tutorial","frontend","user management"]},i="User management portal",u={unversionedId:"authentication-and-access/user-management-portal",id:"authentication-and-access/user-management-portal",title:"User management portal",description:"The user management portal exists so you can embedd ready made user management views straight into your app either by using Iframes or redirecting the user to it.",source:"@site/docs/02-authentication-and-access/user-management-portal.mdx",sourceDirName:"02-authentication-and-access",slug:"/authentication-and-access/user-management-portal",permalink:"/nblocks-docs/docs/authentication-and-access/user-management-portal",draft:!1,tags:[{label:"tutorial",permalink:"/nblocks-docs/docs/tags/tutorial"},{label:"frontend",permalink:"/nblocks-docs/docs/tags/frontend"},{label:"user management",permalink:"/nblocks-docs/docs/tags/user-management"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"User management portal (tutorial)",tags:["tutorial","frontend","user management"]},sidebar:"tutorialSidebar",previous:{title:"Protect a backend (tutorial)",permalink:"/nblocks-docs/docs/authentication-and-access/protect-backend"},next:{title:"Enterprise login",permalink:"/nblocks-docs/docs/authentication-and-access/enterprise-login"}},c={},d=[{value:"User list",id:"user-list",level:2},{value:"Implement it",id:"implement-it",level:3},{value:"Example code",id:"example-code",level:4}],p={toc:d};function m(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"user-management-portal"},"User management portal"),(0,a.kt)("p",null,"The user management portal exists so you can embedd ready made user management views straight into your app either by using Iframes or redirecting the user to it."),(0,a.kt)("h2",{id:"user-list"},"User list"),(0,a.kt)("p",null,"The user list let's you render a ready made view to let the logged in user manage the tenant and invite other users to it."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Nblocks Login",src:n(2929).Z,width:"3456",height:"2160"})),(0,a.kt)("h3",{id:"implement-it"},"Implement it"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The url can either be rendered as an Iframe or you can redirect the user to it.")),(0,a.kt)("p",null,"There will be two Nblocks endpoints involved when requesting to render the user list."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First we need to get the ",(0,a.kt)("a",{parentName:"li",href:"https://nebulr-group.github.io/nblocks-api-docs/#handover-code"},"handover code")," which is unique to the user. This is done using ",(0,a.kt)("inlineCode",{parentName:"li"},"/handover/code")," endpoint."),(0,a.kt)("li",{parentName:"ol"},"Then we will use the code to render the ",(0,a.kt)("a",{parentName:"li",href:"https://nebulr-group.github.io/nblocks-api-docs/#user-management-portal-users"},"user list view")," using the ",(0,a.kt)("inlineCode",{parentName:"li"},"/user-management-portal/users")," endpoint.")),(0,a.kt)("h4",{id:"example-code"},"Example code"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"reactjs",label:"ReactJS",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Create a new component that we call UserList."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'export default function UserList() {\n  const [url, setUrl] = useState();\n\n  const APP_ID = "XXX";\n\n  useEffect(() => {\n    createUrl();\n  }, []);\n\n    const createUrl = async () => {\n    // Retrieve the access token JWT from localstorage\n    const accessToken = window.localStorage.getItem("access_token");\n\n    // Get the handover code from Nblocks\n    const result = await fetch(\n      `https://auth.nblocks.cloud/handover/code/${APP_ID}`,\n      {\n        method: "POST",\n        headers: {\n          "Content-Type": "application/json",\n        },\n        body: JSON.stringify({\n          accessToken,\n        }),\n      }\n    ).then((res) => res.json());\n\n    // Create the user management portal url\n    setUrl(\n      `https://backendless.nblocks.cloud/user-management-portal/users?code=${result.code}`\n    );\n  };\n\n  // Render the url as an iframe\n  return <iframe width="100%" height="500px" src={url}></iframe>;\n}\n\n')),(0,a.kt)("admonition",{title:"How to get the access token?",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In the User Login Quickstart, we stored the access token into Localstorage as a fast and easy way later retrieve it again. Other ways could be to save in-memory in a global state or React context."))),(0,a.kt)(s.Z,{value:"angular",label:"Angular",mdxType:"TabItem"}),(0,a.kt)(s.Z,{value:"pseudo",label:"Can't find your stack?",mdxType:"TabItem"})))}m.isMDXComponent=!0},2929:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/user-list-ef17ce9954b934322cb96ed378f050ee.png"}}]);