(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{128:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return d}));var n=t(1),i=t(6),o=(t(0),t(169)),a={id:"bridge-overview",title:"Bridge Overview",sidebar_label:"Overview"},c={id:"bridge-overview",title:"Bridge Overview",description:"There are several components that make up the Bridge ecosystem that allow end users to verify and store their personal information, and securely transmit that information via peer-to-peer or blockchain communication.\r",source:"@site/docs\\bridge-overview.md",permalink:"/docs/bridge-overview",sidebar_label:"Overview",sidebar:"gettingStarted",previous:{title:"Partner Verification Process",permalink:"/docs/extension-marketplace-verification"},next:{title:"Bridge Passport",permalink:"/docs/bridge-passport"}},s=[{value:"Bridge Protocol",id:"bridge-protocol",children:[]},{value:"Bridge Passport",id:"bridge-passport",children:[]},{value:"Bridge Verified Claims",id:"bridge-verified-claims",children:[]},{value:"Bridge Network",id:"bridge-network",children:[]},{value:"Bridge Marketplace",id:"bridge-marketplace",children:[]}],l={rightToc:s};function d(e){var r=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are several components that make up the Bridge ecosystem that allow end users to verify and store their personal information, and securely transmit that information via peer-to-peer or blockchain communication."),Object(o.b)("img",{class:"centered",src:"../img/overview.png"}),Object(o.b)("hr",null),Object(o.b)("h2",{id:"bridge-protocol"},"Bridge Protocol"),Object(o.b)("p",null,"The secure messaging protocol that allows a Bridge Passport to communicate directly with another Bridge Passport via peer-to-peer communications."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"bridge-passport"},"Bridge Passport"),Object(o.b)("p",null,"The container used to store the Bridge Protocol Key, Blockchain Wallets and Bridge Verified Claims to allow an entity to communicate using the Bridge Protocol and interact with the Bridge Protocol blockchain smart contract(s)."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"bridge-verified-claims"},"Bridge Verified Claims"),Object(o.b)("p",null,"Verified user information that is of a known claim type on the network that has been verified by a known network verification partner.  This is expressed as a secure, portable encrypted claim package for transmission between passports."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"bridge-network"},"Bridge Network"),Object(o.b)("p",null,"The point of trust among Bridge Passports and serves as a point of validation for any Bridge Passport or claim type.  The Bridge Network maintains a list of all known network and verification partner passports, blacklisted bad-actor passports, and known claim types."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"bridge-marketplace"},"Bridge Marketplace"),Object(o.b)("p",null,"The marketplace that matches end users with verification providers on the Bridge Network offering verification services in exchange for network fees paid in BRDG."))}d.isMDXComponent=!0},169:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return f}));var n=t(0),i=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),d=function(e){var r=i.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c({},r,{},e)),t},p=function(e){var r=d(e.components);return i.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},b=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(t),b=n,f=p["".concat(a,".").concat(b)]||p[b]||u[b]||o;return t?i.a.createElement(f,c({ref:r},l,{components:t})):i.a.createElement(f,c({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=b;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);