(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),s=(n(0),n(171)),o={id:"messaging",title:"Bridge Protocol",sidebar_label:"Overview"},i={id:"messaging",title:"Bridge Protocol",description:"The Bridge Protcol is the core messaging protocol that handles the encoding, signing, and encrypting of messages to faciliate secure peer-to-peer communication between Bridge Passports.  All messages are hex encoded for transport.\r",source:"@site/docs\\messaging.md",permalink:"/doc/docs/messaging",sidebar_label:"Overview",sidebar:"gettingStarted",previous:{title:"Blockchain Wallets",permalink:"/doc/docs/passport-wallet"},next:{title:"Authentication",permalink:"/doc/docs/messaging-auth"}},c=[{value:"Message Structure",id:"message-structure",children:[]},{value:"Message Types",id:"message-types",children:[{value:"Encoded Message",id:"encoded-message",children:[]},{value:"Signed Message",id:"signed-message",children:[]},{value:"Encrypted Message",id:"encrypted-message",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The Bridge Protcol is the core messaging protocol that handles the encoding, signing, and encrypting of messages to faciliate secure peer-to-peer communication between Bridge Passports.  All messages are hex encoded for transport."),Object(s.b)("img",{class:"centered",src:"/doc/img/message-overview.png"}),Object(s.b)("hr",null),Object(s.b)("h2",{id:"message-structure"},"Message Structure"),Object(s.b)("img",{src:"/img/message-structure.png"}),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Public Key")," - the public key of the sending passport"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Payload")," - the message payload (see below for formats)")),Object(s.b)("h2",{id:"message-types"},"Message Types"),Object(s.b)("h3",{id:"encoded-message"},"Encoded Message"),Object(s.b)("p",null,"An encoded message is a simple message with no signing or encryption."),Object(s.b)("h3",{id:"signed-message"},"Signed Message"),Object(s.b)("p",null,"A signed message contains the signed payload.  The the signed message can be verified using the public key and the signature of the payload."),Object(s.b)("h3",{id:"encrypted-message"},"Encrypted Message"),Object(s.b)("p",null,"An encrypted message has an encrypted payload.  The payload can be verified and decrypted using the public key of the sending passport and the private key of the the receiving passport."))}p.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,b=d["".concat(o,".").concat(u)]||d[u]||g[u]||s;return n?a.a.createElement(b,i({ref:t},l,{components:n})):a.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);