(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(6),o=(n(0),n(169)),s={id:"extension-wallets-swap",title:"Token Swap",sidebar_label:"Token Swap"},i={id:"extension-wallets-swap",title:"Token Swap",description:"The token swap dialog allows users to send a token swap request to the Bridge Network to swap their tokens cross-chain.  The user specifies the number of tokenss to be transferred and any applicable Ethereum gas fees will be displayed for the user for the transaction.  \r",source:"@site/docs\\extension-wallets-swap.md",permalink:"/docs/extension-wallets-swap",sidebar_label:"Token Swap",sidebar:"gettingStarted",previous:{title:"Transaction History",permalink:"/docs/extension-wallets-tx"},next:{title:"Marketplace Requests",permalink:"/docs/extension-marketplace"}},c=[],p={rightToc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The token swap dialog allows users to send a token swap request to the Bridge Network to swap their tokens cross-chain.  The user specifies the number of tokenss to be transferred and any applicable Ethereum gas fees will be displayed for the user for the transaction.  "),Object(o.b)("img",{class:"centered",src:"/doc/img/extension/passport-wallets-swap.jpg"}),Object(o.b)("p",null,"Once the token swap is sent to the network, the status will be reflected with links to the Bridge Token transaction that was sent to the swap address as part of the swap request.  If there is a pending swap request, the user must wait until that request is completed before sending an additional swap request."),Object(o.b)("img",{class:"centered",src:"/doc/img/extension/passport-wallets-swap-pending.jpg"}))}l.isMDXComponent=!0},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return w}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,w=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?a.a.createElement(w,i({ref:t},p,{components:n})):a.a.createElement(w,i({ref:t},p))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);