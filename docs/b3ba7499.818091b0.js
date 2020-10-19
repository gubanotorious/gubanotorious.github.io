(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{151:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(1),o=r(6),i=(r(0),r(171)),a={id:"sdk-services-profile",title:"Profile",sidebar_label:"Profile"},p={id:"sdk-services-profile",title:"Profile",description:"Service to retrieve the Bridge Network known claim profile types.  Profile types are used for convenience by network partners to define a group of claim types used for a specific purpose - ie: KYC, AML.\r",source:"@site/docs\\sdk-services-profile.md",permalink:"/doc/docs/sdk-services-profile",sidebar_label:"Profile",sidebar:"gettingStarted",previous:{title:"Passport",permalink:"/doc/docs/sdk-services-passport"},next:{title:"Token Swap",permalink:"/doc/docs/sdk-services-tokenswap"}},s=[{value:"Functions",id:"functions",children:[{value:"getAllTypes()",id:"getalltypes",children:[]},{value:"getType()",id:"gettype",children:[]}]}],c={rightToc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Service to retrieve the Bridge Network known claim profile types.  Profile types are used for convenience by network partners to define a group of claim types used for a specific purpose - ie: KYC, AML."),Object(i.b)("h2",{id:"functions"},"Functions"),Object(i.b)("h3",{id:"getalltypes"},"getAllTypes()"),Object(i.b)("p",null,"Retrieve all known profile types on the Bridge Network"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"async getAllProfileTypes(useApi, passport, passphrase)\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"useApi")," (bool) - whether or not to use the local constants or retrieve from Bridge Network API"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"passport")," (",Object(i.b)("a",{href:"sdk-models-passport"},"Passport"),") - passport context used for API authentication, only required if useApi=true"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"passphrase")," (string) - password used to unlock context passport private key, only required if useApi=true")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"gettype"},"getType()"),Object(i.b)("p",null,"Retrieve specific known profile type definition"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"async getProfileType(profileTypeId, useApi, passport, passphrase)\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"useApi")," (bool) - whether or not to use the local constants or retrieve from Bridge Network API"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"passport")," (",Object(i.b)("a",{href:"sdk-models-passport"},"Passport"),") - passport context used for API authentication, only required if useApi=true"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"passphrase")," (string) - password used to unlock context passport private key, only required if useApi=true")))}l.isMDXComponent=!0},171:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),l=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p({},t,{},e)),r},u=function(e){var t=l(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,d=u["".concat(a,".").concat(f)]||u[f]||b[f]||i;return r?o.a.createElement(d,p({ref:t},c,{components:r})):o.a.createElement(d,p({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);