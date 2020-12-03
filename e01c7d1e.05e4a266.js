(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),i=n(6),a=(n(0),n(171)),o={id:"integration-claim",title:"Claim",sidebar_label:"Claim"},c={id:"integration-claim",title:"Claim",description:"The claim endpoints exposes functionality to retrieve claim type information and verifying claims\r",source:"@site/docs\\integration-claim.md",permalink:"/docs/integration-claim",sidebar_label:"Claim",sidebar:"gettingStarted",previous:{title:"Passport",permalink:"/docs/integration-passport"},next:{title:"Profile Types",permalink:"/docs/integration-profile"}},l=[{value:"GET /claim/types",id:"get-claimtypes",children:[]},{value:"POST /claim//verifysignature",id:"post-claimverifysignature",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The claim endpoints exposes functionality to retrieve claim type information and verifying claims"),Object(a.b)("h3",{id:"get-claimtypes"},"GET /claim/types"),Object(a.b)("p",null,"Retrieves the type definitions for all known Claim types on the Bridge Network"),Object(a.b)("h5",{id:"example-response"},"Example Response:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'[\n    {\n        "id":1,\n        "name":"First Name",\n        "description":"Owner first name",\n        "dataType":"string",\n        "scope":"private",\n        "defaultExpirationDays":0\n    }\n]\n')),Object(a.b)("hr",null),Object(a.b)("h3",{id:"post-claimverifysignature"},"POST /claim//verifysignature"),Object(a.b)("p",null,"Verifies the signature of the provided claim"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"passportId")," (string) - the passport the claim was signed for"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"claim")," (",Object(a.b)("a",{href:"sdk-models-claim"},"Claim"),") - the claim to verify")),Object(a.b)("h5",{id:"example-response-1"},"Example Response:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'    {\n        "result": true\n    }\n')))}s.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,f=u["".concat(o,".").concat(b)]||u[b]||m[b]||a;return n?i.a.createElement(f,c({ref:t},p,{components:n})):i.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);