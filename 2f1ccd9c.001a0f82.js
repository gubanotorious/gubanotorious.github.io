(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{118:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(6),i=(r(0),r(171)),c={id:"sdk-messaging-claim",title:"Claim",sidebar_label:"Claim"},o={id:"sdk-messaging-claim",title:"Claim",description:"Implements the claims import protocol to allow verified claims to be securely communicated between verifier and user passports.\r",source:"@site/docs\\sdk-messaging-claim.md",permalink:"/docs/sdk-messaging-claim",sidebar_label:"Claim",sidebar:"gettingStarted",previous:{title:"Auth",permalink:"/docs/sdk-messaging-auth"},next:{title:"Payment",permalink:"/docs/sdk-messaging-payment"}},s=[{value:"Functions",id:"functions",children:[{value:"createClaimsImportRequest()",id:"createclaimsimportrequest",children:[]},{value:"verifyClaimsImportRequest()",id:"verifyclaimsimportrequest",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Implements the claims import protocol to allow verified claims to be securely communicated between verifier and user passports."),Object(i.b)("h2",{id:"functions"},"Functions"),Object(i.b)("h3",{id:"createclaimsimportrequest"},"createClaimsImportRequest()"),Object(i.b)("p",null,"Create a claims import request to send claims to a target passport"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"async createClaimsImportRequest(passport, password, claimPackages)\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"passport")," (string) - the passport receiving the claims import request that the claim packages were signed and encrypted for"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"password")," (string) - the password to unlock the passport receiving the claims import request"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"claimPackages")," (",Object(i.b)("a",{href:"sdk-models-claimpackage"},"ClaimPackage"),"[]) - the claim packages signed and encrypted for the receiving passport")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"verifyclaimsimportrequest"},"verifyClaimsImportRequest()"),Object(i.b)("p",null,"Verify a received claims import request from a passport"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"async verifyClaimsImportRequest(message)\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"message")," (string) - the received claims import message")))}p.isMDXComponent=!0},171:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},m=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),b=n,d=m["".concat(c,".").concat(b)]||m[b]||u[b]||i;return r?a.a.createElement(d,o({ref:t},l,{components:r})):a.a.createElement(d,o({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);