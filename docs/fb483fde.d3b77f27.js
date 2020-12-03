(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),o=(n(0),n(169)),i={id:"extension-wallets-detail",title:"Wallet Detail View",sidebar_label:"Detail View"},l={id:"extension-wallets-detail",title:"Wallet Detail View",description:"When a blockchain wallet is expanded, all details of the wallet are shown including the Bridge Token balance, the GAS / ETH balance and the address.  From this interface the user can click to view the previous transactions for the wallet, launch the token swap request dialog to do a cross-chain token swap, and view the private key.\r",source:"@site/docs\\extension-wallets-detail.md",permalink:"/docs/extension-wallets-detail",sidebar_label:"Detail View",sidebar:"gettingStarted",previous:{title:"Blockchain Wallets",permalink:"/docs/extension-wallets"},next:{title:"Transaction History",permalink:"/docs/extension-wallets-tx"}},c=[],s={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When a blockchain wallet is expanded, all details of the wallet are shown including the Bridge Token balance, the GAS / ETH balance and the address.  From this interface the user can click to view the previous transactions for the wallet, launch the token swap request dialog to do a cross-chain token swap, and view the private key."),Object(o.b)("img",{class:"centered",src:"/img/extension/passport-wallets-details.jpg"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"PROTIP"),": If you have imported your blockchain address, you already have the private key.  If you allowed the passport to generate the wallet for you when it was created, it is important that you backup your private key.  Simply click the link to view the private key and ensure you back the key up so it can be used with other blockchain wallets outside of your passport."))}p.isMDXComponent=!0},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,h=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return n?a.a.createElement(h,l({ref:t},s,{components:n})):a.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);