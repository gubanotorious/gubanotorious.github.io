(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{170:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(180),c=a(176),i=a(172),m=a(174),s=a(175);var o=function(e){const{metadata:t}=e;return l.a.createElement("nav",{className:"pagination-nav"},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(s.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("div",{className:"pagination-nav__link--sublabel"},"Previous"),l.a.createElement("div",{className:"pagination-nav__link--label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(s.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("div",{className:"pagination-nav__link--sublabel"},"Next"),l.a.createElement("div",{className:"pagination-nav__link--label"},t.next.title," \xbb"))))};var d=function(e,t,a){const[l,r]=Object(n.useState)(void 0);Object(n.useEffect)(()=>{let n=[],c=[];function i(){const i=function(){let e=0,t=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!t;){const l=n[e],{top:r}=l.getBoundingClientRect();r>=0&&r<=a&&(t=l),e+=1}return t}();if(i){let a=0,n=!1;for(c=document.getElementsByClassName(e);a<c.length&&!n;){const e=c[a],{href:m}=e,s=decodeURIComponent(m.substring(m.indexOf("#")+1));i.id===s&&(l&&l.classList.remove(t),e.classList.add(t),r(e),n=!0),a+=1}}}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}})},E=a(173),g=a.n(E),u=a(101),v=a.n(u);function p({headings:e}){return d("contents__link","contents__link--active",100),l.a.createElement("div",{className:"col col--3"},l.a.createElement("div",{className:v.a.tableOfContents},l.a.createElement(_,{headings:e})))}function _({headings:e,isChild:t}){return e.length?l.a.createElement("ul",{className:t?"":"contents contents__left-border"},e.map(e=>l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:"contents__link",dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(_,{isChild:!0,headings:e.children})))):null}t.default=function(e){const{siteConfig:t={}}=Object(i.a)(),{url:a,title:n}=t,{content:s}=e,{metadata:d}=s,{description:E,title:u,permalink:_,editUrl:h,lastUpdatedAt:N,lastUpdatedBy:f,version:b}=d,{frontMatter:{image:k,keywords:w,hide_title:y,hide_table_of_contents:C}}=s,x=u?`${u} | ${n}`:n;let L=a+Object(m.a)(k);return Object(c.a)(k)||(L=k),l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("title",null,x),l.a.createElement("meta",{property:"og:title",content:x}),E&&l.a.createElement("meta",{name:"description",content:E}),E&&l.a.createElement("meta",{property:"og:description",content:E}),w&&w.length&&l.a.createElement("meta",{name:"keywords",content:w.join(",")}),k&&l.a.createElement("meta",{property:"og:image",content:L}),k&&l.a.createElement("meta",{property:"twitter:image",content:L}),k&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+u}),_&&l.a.createElement("meta",{property:"og:url",content:a+_})),l.a.createElement("div",{className:g()("container padding-vert--lg",v.a.docItemWrapper)},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:g()("col",v.a.docItemCol)},l.a.createElement("div",{className:v.a.docItemContainer},l.a.createElement("article",null,b&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",b)),!y&&l.a.createElement("header",null,l.a.createElement("h1",{className:v.a.docTitle},u)),l.a.createElement("div",{className:"markdown"},l.a.createElement(s,null))),(h||N||f)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},h&&l.a.createElement("a",{href:h,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(N||f)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",N&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*N).toISOString(),className:v.a.docLastUpdatedAt},new Date(1e3*N).toLocaleDateString()),f&&" "),f&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,f)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(o,{metadata:d})))),!C&&s.rightToc&&l.a.createElement(p,{headings:s.rightToc}))))}}}]);