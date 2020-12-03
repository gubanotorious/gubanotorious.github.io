(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{156:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(1),o=r(6),i=(r(0),r(169)),a={id:"integration",title:"Bridge REST Integration Microservice",sidebar_label:"Overview"},c={id:"integration",title:"Bridge REST Integration Microservice",description:"The Bridge Integration Microservices allows for easy integration with the Bridge SDK when the target platform does not support JavaScript.  The microservice is implemented as a standalone REST interface that can be easily run in a container in any hosting environment to enable that environment to take full advantage of Bridge SDK functionality.\r",source:"@site/docs\\integration.md",permalink:"/docs/integration",sidebar_label:"Overview",sidebar:"gettingStarted",previous:{title:"Claim",permalink:"/docs/sdk-utils-claim"},next:{title:"Passport",permalink:"/docs/integration-passport"}},s=[{value:"Installation and Configuration",id:"installation-and-configuration",children:[{value:"Clone the code from the github repository",id:"clone-the-code-from-the-github-repository",children:[]},{value:"Copy your passport file into the directory and update configuration",id:"copy-your-passport-file-into-the-directory-and-update-configuration",children:[]},{value:"Run the Service",id:"run-the-service",children:[]}]},{value:"Authentication",id:"authentication",children:[]},{value:"Responses",id:"responses",children:[]}],l={rightToc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Bridge Integration Microservices allows for easy integration with the Bridge SDK when the target platform does not support JavaScript.  The microservice is implemented as a standalone REST interface that can be easily run in a container in any hosting environment to enable that environment to take full advantage of Bridge SDK functionality."),Object(i.b)("p",null,"Source code for the integration microservice can be found in the ",Object(i.b)("a",{href:"https://github.com/bridge-protocol/bridge-protocol-integration-service/"},"GitHub Repository")),Object(i.b)("h2",{id:"installation-and-configuration"},"Installation and Configuration"),Object(i.b)("p",null,"Installing and configuring the microservice requires a few simple steps to configure the passport context and enable security for the service."),Object(i.b)("h3",{id:"clone-the-code-from-the-github-repository"},"Clone the code from the github repository"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"git clone https://github.com/bridge-protocol/bridge-protocol-integration-service.git\n")),Object(i.b)("h3",{id:"copy-your-passport-file-into-the-directory-and-update-configuration"},"Copy your passport file into the directory and update configuration"),Object(i.b)("p",null,"The integration service uses the context of a loaded passport to provide all Bridge functionality on behalf of the service.  Edit the config.json file in the /src directory to configure the passport and header security settings for the service."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n    "version": "2.5",\n    "serviceName": "Bridge Protocol Integration Service",\n    "passportFile": "./your-passport-file.json",\n    "passportPassphrase": "yourpassportpassphrase",\n    "securityHeaderValue": "securityheadervalue",\n    "bridgeApiBaseUrl": "https://bridgeprotocol.azurewebsites.net/api/"\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"passportFile (string) - The path to the passport file to load as the service context passport"),Object(i.b)("li",{parentName:"ul"},"passportPassphrase (string) - The password to unlock the passport that was provided at the time of creation"),Object(i.b)("li",{parentName:"ul"},"securityHeaderValue (string) - The value to be provided in the header for all REST calls to provide security")),Object(i.b)("h3",{id:"run-the-service"},"Run the Service"),Object(i.b)("p",null,"To run the service, navigate to the /src folder, install all dependencies via npm and start the service:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"npm i && npm start\n")),Object(i.b)("h2",{id:"authentication"},"Authentication"),Object(i.b)("p",null,"All requests to the REST service are secured by a security header.  Each request to the service will verify that the header with the security header value configured is provided in the request.  All requests should include the following headers:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Content-Type: application/json\nsecurityheader: securityheadervalue\n")),Object(i.b)("h2",{id:"responses"},"Responses"),Object(i.b)("p",null,"All responses from an endpoint will contain an object that contains a result and error property.  If errors occured during the request the error property will contain the error message, otherwise the response property will contain the response content."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"{ \n    response, \n    error \n}\n")))}p.isMDXComponent=!0},169:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,b=u["".concat(a,".").concat(h)]||u[h]||d[h]||i;return r?o.a.createElement(b,c({ref:t},l,{components:r})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);