(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{143:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(1),a=r(6),o=(r(0),r(171)),s={id:"sdk-services-partner",title:"Partner",sidebar_label:"Partner"},i={id:"sdk-services-partner",title:"Partner",description:"Service used to retrieve the Bridge Network known network partner passports\r",source:"@site/docs\\sdk-services-partner.md",permalink:"/docs/sdk-services-partner",sidebar_label:"Partner",sidebar:"gettingStarted",previous:{title:"Claim",permalink:"/docs/sdk-services-claim"},next:{title:"Passport",permalink:"/docs/sdk-services-passport"}},p=[{value:"Functions",id:"functions",children:[{value:"getAllPartners()",id:"getallpartners",children:[]},{value:"getPartner()",id:"getpartner",children:[]}]}],c={rightToc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Service used to retrieve the Bridge Network known network partner passports"),Object(o.b)("h2",{id:"functions"},"Functions"),Object(o.b)("h3",{id:"getallpartners"},"getAllPartners()"),Object(o.b)("p",null,"Retrieve all known partners on the Bridge Network"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"async getAllPartners(useApi, passport, passphrase)\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"useApi")," (bool) - whether or not to use the local constants or retrieve from Bridge Network API"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"passport")," (",Object(o.b)("a",{href:"sdk-models-passport"},"Passport"),") - passport context used for API authentication, only required if useApi=true"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"passphrase")," (string) - password used to unlock context passport private key, only required if useApi=true")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"getpartner"},"getPartner()"),Object(o.b)("p",null,"Retrieve specified known partner information"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"async getPartner(partnerId, useApi, passport, passphrase)\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"partnerId")," (string) - the passport id of the partner"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"useApi")," (bool) - whether or not to use the local constants or retrieve from Bridge Network API"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"passport")," (",Object(o.b)("a",{href:"sdk-models-passport"},"Passport"),") - passport context used for API authentication, only required if useApi=true"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"passphrase")," (string) - password used to unlock context passport private key, only required if useApi=true")))}l.isMDXComponent=!0},171:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},u=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,f=u["".concat(s,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(f,i({ref:t},c,{components:r})):a.a.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);