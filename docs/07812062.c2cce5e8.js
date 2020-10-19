(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{171:function(e,t,i){"use strict";i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return v}));var r=i(0),n=i.n(r);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=n.a.createContext({}),f=function(e){var t=n.a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a({},t,{},e)),i},p=function(e){var t=f(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=f(i),u=r,v=p["".concat(c,".").concat(u)]||p[u]||d[u]||o;return i?n.a.createElement(v,a({ref:t},l,{components:i})):n.a.createElement(v,a({ref:t},l))}));function v(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,c=new Array(o);c[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<o;l++)c[l]=i[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},99:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return c})),i.d(t,"metadata",(function(){return a})),i.d(t,"rightToc",(function(){return s})),i.d(t,"default",(function(){return f}));var r=i(1),n=i(6),o=(i(0),i(171)),c={id:"extension-marketplace-verification",title:"Partner Verification Process",sidebar_label:"Verification Process"},a={id:"extension-marketplace-verification",title:"Partner Verification Process",description:"Once a markeplace verification request is created, all network fees are verified, and the request is relayed to the partner, the url to access the verification process provided by the partner is displayed to the end user.  From there, the user simply clicks the link to begin the verification process with that marketplace partner.\r",source:"@site/docs\\extension-marketplace-verification.md",permalink:"/doc/docs/extension-marketplace-verification",sidebar_label:"Verification Process",sidebar:"gettingStarted",previous:{title:"Creating a Marketplace Request",permalink:"/doc/docs/extension-marketplace-request"},next:{title:"Bridge Overview",permalink:"/doc/docs/bridge-overview"}},s=[{value:"Verification Workflow with Bridge Protocol Corporation",id:"verification-workflow-with-bridge-protocol-corporation",children:[]},{value:"Retrieving Verification Status",id:"retrieving-verification-status",children:[]},{value:"Viewing Verification Results",id:"viewing-verification-results",children:[]}],l={rightToc:s};function f(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Once a markeplace verification request is created, all network fees are verified, and the request is relayed to the partner, the url to access the verification process provided by the partner is displayed to the end user.  From there, the user simply clicks the link to begin the verification process with that marketplace partner."),Object(o.b)("h3",{id:"verification-workflow-with-bridge-protocol-corporation"},"Verification Workflow with Bridge Protocol Corporation"),Object(o.b)("p",null,"All Bridge Marketplace partners are free to use whatever workflow they choose to perform their verification services, so\nthe workflow will vary. The following process will demonstrate the workflow required to do Basic KYC Verification using\nthe Bridge Protocol Corporation verification provider on the Bridge Network."),Object(o.b)("h4",{id:"1-login-with-your-passport"},"1. Login with your passport"),Object(o.b)("img",{class:"centered",src:"/doc/img/extension/verification/verification_site_login.jpg"}),Object(o.b)("h4",{id:"2-select-your-desired-verification-services"},"2. Select your desired verification service(s)"),Object(o.b)("img",{class:"centered",src:"/doc/img/extension/verification/verification_site_serviceselect.jpg"}),Object(o.b)("h4",{id:"3-make-the-token-payment-for-service-fees"},"3. Make the token payment for service fees"),Object(o.b)("img",{class:"centered",src:"/doc/img/extension/verification/verification_site_paymentrequest.jpg"}),Object(o.b)("h4",{id:"4-enter-your-4-mail-address-to-continue"},"4. Enter your 4-mail address to continue"),Object(o.b)("img",{class:"centered",src:"/doc/img/extension/verification/verification_site_start.jpg"}),Object(o.b)("h4",{id:"5-create-a-personal-access-code"},"5. Create a personal access code"),Object(o.b)("img",{class:"centered",src:"/doc/img/extension/verification/verification_site_accesscode.jpg"}),Object(o.b)("h4",{id:"6-agree-to-the-identity-verification-terms-of-service"},"6. Agree to the identity verification terms of service"),Object(o.b)("img",{class:"centered",src:"/doc/img/extension/verification/verification_site_tos.jpg"}),Object(o.b)("h4",{id:"7-verify-your-e-mail-address"},"7. Verify your e-mail address"),Object(o.b)("img",{class:"centered",src:"/doc/img/extension/verification/verification_site_emailverify.jpg"}),Object(o.b)("h4",{id:"8-capture-your-identification-document"},"8. Capture your identification document"),Object(o.b)("img",{class:"centered",src:"/doc/img/extension/verification/verification_site_idcapture.jpg"}),Object(o.b)("h4",{id:"9-enter-or-verify-your-personal-information"},"9. Enter or verify your personal information"),Object(o.b)("img",{class:"centered",src:"/doc/img/extension/verification/verification_site_personalinfo.jpg"}),Object(o.b)("h4",{id:"10-capture-your-portrait--selfie-photo"},"10. Capture your portrait / selfie photo"),Object(o.b)("img",{class:"centered",src:"/doc/img/extension/verification/verification_site_camcapture.jpg"}),Object(o.b)("h4",{id:"11-verify-all-steps-are-complete-and-submit-the-check-for-verification"},"11. Verify all steps are complete and submit the check for verification"),Object(o.b)("img",{class:"centered",src:"/doc/img/extension/verification/verification_site_allcomplete.jpg"}),Object(o.b)("h3",{id:"retrieving-verification-status"},"Retrieving Verification Status"),Object(o.b)("p",null,"After completing the verification process, you will see a verification request status information page. To view this at any\ntime after enrollment, simply click the verification partner link in the verification request in your passport."),Object(o.b)("img",{class:"centered",src:"/doc/img/extension/verification/verification_site_complete.jpg"}),Object(o.b)("h3",{id:"viewing-verification-results"},"Viewing Verification Results"),Object(o.b)("p",null,"If the verification request is complete, a link will appear next to the status to allow you to see the information that was\nsuccessfully verified. Simply click the link next to the status to see your verified claims and ",Object(o.b)("a",{href:"extension-using#importing-claims"},"import claims")," to your passport."),Object(o.b)("img",{class:"centered",src:"/doc/img/extension/verification/verification_site_verifiedclaims.jpg"}))}f.isMDXComponent=!0}}]);