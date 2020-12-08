(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(6),a=(n(0),n(176)),i={id:"extension-wallets-buy",title:"Token Acquisition",sidebar_label:"Token Acquisition"},s={id:"extension-wallets-buy",title:"Token Acquisition",description:"The token swap dialog allows users to send a token swap request to the Bridge Network to swap their tokens cross-chain.  The user specifies the number of tokenss to be transferred and any applicable Ethereum gas fees will be displayed for the user for the transaction.  \r",source:"@site/docs\\extension-wallets-buy.md",permalink:"/docs/extension-wallets-buy",sidebar_label:"Token Acquisition",sidebar:"gettingStarted",previous:{title:"Transaction History",permalink:"/docs/extension-wallets-tx"},next:{title:"Token Swap",permalink:"/docs/extension-wallets-swap"}},c=[],l={rightToc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The token swap dialog allows users to send a token swap request to the Bridge Network to swap their tokens cross-chain.  The user specifies the number of tokenss to be transferred and any applicable Ethereum gas fees will be displayed for the user for the transaction.  "),Object(a.b)("h2",null,"Neo Blockchain"),Object(a.b)("p",null,"On the Neo blockchain, tokens can be acquired via the decentralized exchanges Flamingo and Switcheo.  Links to the respective exchanges can be found in the Bridge Passport Neo Wallet."),Object(a.b)("img",{class:"centered",src:"/img/extension/neo-buy.jpg"}),Object(a.b)("h2",null,"Ethereum Blockchain"),Object(a.b)("p",null,"On Ethereum, tokens can be acquired via Uniswap decentralized exchange.  Given the robust integration tools of Uniswap, users can acquire tokens by sending a request to Uniswap directly within the Bridge Passport Extension.  The button to acquire via Uniswap is in the Bridge Passport Ethereum Wallet."),Object(a.b)("img",{class:"centered",src:"/img/extension/eth-buy.jpg"}),Object(a.b)("h3",null,"Sending a Uniswap Request"),Object(a.b)("p",null,"To send a request to Uniswap, simply click the button and open the dialog, provide the amount to purchase and the acceptable slippage (default is 50%), and submit the request.  "),Object(a.b)("img",{class:"centered",src:"/img/extension/eth-buy-uniswap.jpg"}),Object(a.b)("p",null,"After the request is sent, follow the transaction for further status information."),Object(a.b)("img",{class:"centered",src:"/img/extension/eth-buy-uniswap-pending.jpg"}))}u.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(f,s({ref:t},l,{components:n})):o.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);