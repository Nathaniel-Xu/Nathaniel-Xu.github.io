"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[619],{8625:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.addLocale=void 0,n(4777),t.addLocale=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7592:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6106:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.hasBasePath=function(e){return r.pathHasPrefix(e,"/Nathaniel-Xu.github.io")};var r=n(6100);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3619:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(8644).Z,o=n(872).Z,a=r(n(6006)),l=n(3241),c=n(6718),u=n(9006),i=n(9448),s=n(8625),f=n(8189),d=n(3641),p=n(2141),h=n(7592),y=n(9265);let g=new Set;function m(e,t,n,r,o){if(o||c.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,a=t+"%"+n+"%"+o;if(g.has(a))return;g.add(a)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function v(e){return"string"==typeof e?e:u.formatUrl(e)}let b=a.default.forwardRef(function(e,t){let n,r;let{href:u,as:g,children:b,prefetch:_,passHref:P,replace:j,shallow:R,scroll:O,locale:M,onClick:C,onMouseEnter:x,onTouchStart:E,legacyBehavior:w=!1}=e,k=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=b,w&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));let S=!1!==_,I=a.default.useContext(f.RouterContext),L=a.default.useContext(d.AppRouterContext),T=null!=I?I:L,A=!I,{href:U,as:N}=a.default.useMemo(()=>{if(!I){let e=v(u);return{href:e,as:g?v(g):e}}let[e,t]=l.resolveHref(I,u,!0);return{href:e,as:g?l.resolveHref(I,g):t||e}},[I,u,g]),W=a.default.useRef(U),D=a.default.useRef(N);w&&(r=a.default.Children.only(n));let z=w?r&&"object"==typeof r&&r.ref:t,[B,Z,q]=p.useIntersection({rootMargin:"200px"}),K=a.default.useCallback(e=>{(D.current!==N||W.current!==U)&&(q(),D.current=N,W.current=U),B(e),z&&("function"==typeof z?z(e):"object"==typeof z&&(z.current=e))},[N,z,U,q,B]);a.default.useEffect(()=>{T&&Z&&S&&m(T,U,N,{locale:M},A)},[N,U,Z,M,S,null==I?void 0:I.locale,T,A]);let $={ref:K,onClick(e){w||"function"!=typeof C||C(e),w&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),T&&!e.defaultPrevented&&function(e,t,n,r,o,l,u,i,s,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!c.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:l,locale:i,scroll:u}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};s?a.default.startTransition(h):h()}(e,T,U,N,j,R,O,M,A,S)},onMouseEnter(e){w||"function"!=typeof x||x(e),w&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),T&&(S||!A)&&m(T,U,N,{locale:M,priority:!0,bypassPrefetchedCheck:!0},A)},onTouchStart(e){w||"function"!=typeof E||E(e),w&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),T&&(S||!A)&&m(T,U,N,{locale:M,priority:!0,bypassPrefetchedCheck:!0},A)}};if(i.isAbsoluteUrl(N))$.href=N;else if(!w||P||"a"===r.type&&!("href"in r.props)){let e=void 0!==M?M:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&h.getDomainLocale(N,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);$.href=t||y.addBasePath(s.addLocale(N,e,null==I?void 0:I.defaultLocale))}return w?a.default.cloneElement(r,$):a.default.createElement("a",Object.assign({},k,$),n)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},225:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.cancelIdleCallback=t.requestIdleCallback=void 0;let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)};t.requestIdleCallback=n;let r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};t.cancelIdleCallback=r,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2141:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:u}=e,i=u||!a,[s,f]=r.useState(!1),d=r.useRef(null),p=r.useCallback(e=>{d.current=e},[]);r.useEffect(()=>{if(a){if(i||s)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:a}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=c.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:a,elements:o},c.push(n),l.set(n,t),t}(n);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),l.delete(r);let e=c.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&c.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!s){let e=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(e)}},[i,n,t,s,d.current]);let h=r.useCallback(()=>{f(!1)},[]);return[p,s,h]};var r=n(6006),o=n(225);let a="function"==typeof IntersectionObserver,l=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2476:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.escapeStringRegexp=function(e){return n.test(e)?e.replace(r,"\\$&"):e};let n=/[|\\{}()[\]^$+*?.-]/,r=/[|\\{}()[\]^$+*?.-]/g},8189:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.RouterContext=void 0;var r=(0,n(8644).Z)(n(6006));let o=r.default.createContext(null);t.RouterContext=o},9006:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.formatUrl=a,t.formatWithValidation=function(e){return a(e)},t.urlObjectKeys=void 0;var r=(0,n(9536).Z)(n(1254));let o=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:n}=e,a=e.protocol||"",l=e.pathname||"",c=e.hash||"",u=e.query||"",i=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?i=t+e.host:n&&(i=t+(~n.indexOf(":")?"[".concat(n,"]"):n),e.port&&(i+=":"+e.port)),u&&"object"==typeof u&&(u=String(r.urlQueryToSearchParams(u)));let s=e.search||u&&"?".concat(u)||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||o.test(a))&&!1!==i?(i="//"+(i||""),l&&"/"!==l[0]&&(l="/"+l)):i||(i=""),c&&"#"!==c[0]&&(c="#"+c),s&&"?"!==s[0]&&(s="?"+s),l=l.replace(/[?#]/g,encodeURIComponent),s=s.replace("#","%23"),"".concat(a).concat(i).concat(l).concat(s).concat(c)}t.urlObjectKeys=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"]},2203:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.interpolateAs=function(e,t,n){let a="",l=o.getRouteRegex(e),c=l.groups,u=(t!==e?r.getRouteMatcher(l)(t):"")||n;a=e;let i=Object.keys(c);return i.every(e=>{let t=u[e]||"",{repeat:n,optional:r}=c[e],o="[".concat(n?"...":"").concat(e,"]");return r&&(o="".concat(t?"":"/","[").concat(o,"]")),n&&!Array.isArray(t)&&(t=[t]),(r||e in u)&&(a=a.replace(o,n?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(a=""),{params:i,result:a}};var r=n(6805),o=n(2698)},5350:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.isDynamicRoute=function(e){return n.test(e)};let n=/\/\[[^/]+?\](?=\/|$)/},6718:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.isLocalURL=function(e){if(!r.isAbsoluteUrl(e))return!0;try{let t=r.getLocationOrigin(),n=new URL(e,t);return n.origin===t&&o.hasBasePath(n.pathname)}catch(e){return!1}};var r=n(9448),o=n(6106)},7301:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.omit=function(e,t){let n={};return Object.keys(e).forEach(r=>{t.includes(r)||(n[r]=e[r])}),n}},6100:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.pathHasPrefix=function(e,t){if("string"!=typeof e)return!1;let{pathname:n}=r.parsePath(e);return n===t||n.startsWith(t+"/")};var r=n(7194)},1254:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.searchParamsToUrlQuery=function(e){let t={};return e.forEach((e,n)=>{void 0===t[n]?t[n]=e:Array.isArray(t[n])?t[n].push(e):t[n]=[t[n],e]}),t},t.urlQueryToSearchParams=function(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,o]=e;Array.isArray(o)?o.forEach(e=>t.append(r,n(e))):t.set(r,n(o))}),t},t.assign=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,n)=>e.append(n,t))}),e};function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}},3241:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.resolveHref=function(e,t,n){let f;let d="string"==typeof t?t:o.formatWithValidation(t),p=d.match(/^[a-zA-Z]{1,}:\/\//),h=p?d.slice(p[0].length):d,y=h.split("?");if((y[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '".concat(d,"' passed to next/router in page: '").concat(e.pathname,"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href."));let t=l.normalizeRepeatedSlashes(h);d=(p?p[0]:"")+t}if(!u.isLocalURL(d))return n?[d]:d;try{f=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){f=new URL("/","http://n")}try{let e=new URL(d,f);e.pathname=c.normalizePathTrailingSlash(e.pathname);let t="";if(i.isDynamicRoute(e.pathname)&&e.searchParams&&n){let n=r.searchParamsToUrlQuery(e.searchParams),{result:l,params:c}=s.interpolateAs(e.pathname,e.pathname,n);l&&(t=o.formatWithValidation({pathname:l,hash:e.hash,query:a.omit(n,c)}))}let l=e.origin===f.origin?e.href.slice(e.origin.length):e.href;return n?[l,t||l]:l}catch(e){return n?[d]:d}};var r=n(1254),o=n(9006),a=n(7301),l=n(9448),c=n(4777),u=n(6718),i=n(5350),s=n(2203)},6805:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.getRouteMatcher=function(e){let{re:t,groups:n}=e;return e=>{let o=t.exec(e);if(!o)return!1;let a=e=>{try{return decodeURIComponent(e)}catch(e){throw new r.DecodeError("failed to decode param")}},l={};return Object.keys(n).forEach(e=>{let t=n[e],r=o[t.pos];void 0!==r&&(l[e]=~r.indexOf("/")?r.split("/").map(e=>a(e)):t.repeat?[a(r)]:a(r))}),l}};var r=n(9448)},2698:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.getRouteRegex=i,t.getNamedRouteRegex=function(e,t){let n=s(e,t);return r({},i(e),{namedRegex:"^".concat(n.namedParameterizedRoute,"(?:/)?$"),routeKeys:n.routeKeys})},t.getNamedMiddlewareRegex=function(e,t){let{parameterizedRoute:n}=u(e),{catchAll:r=!0}=t;if("/"===n)return{namedRegex:"^/".concat(r?".*":"","$")};let{namedParameterizedRoute:o}=s(e,!1);return{namedRegex:"^".concat(o).concat(r?"(?:(/.*)?)":"","$")}};var r=n(5996).Z,o=n(2476),a=n(1491);let l="nextParam";function c(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let n=e.startsWith("...");return n&&(e=e.slice(3)),{key:e,repeat:n,optional:t}}function u(e){let t=a.removeTrailingSlash(e).slice(1).split("/"),n={},r=1;return{parameterizedRoute:t.map(e=>{if(!(e.startsWith("[")&&e.endsWith("]")))return"/".concat(o.escapeStringRegexp(e));{let{key:t,optional:o,repeat:a}=c(e.slice(1,-1));return n[t]={pos:r++,repeat:a,optional:o},a?o?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:n}}function i(e){let{parameterizedRoute:t,groups:n}=u(e);return{re:new RegExp("^".concat(t,"(?:/)?$")),groups:n}}function s(e,t){let n,r;let u=a.removeTrailingSlash(e).slice(1).split("/"),i=(n=97,r=1,()=>{let e="";for(let t=0;t<r;t++)e+=String.fromCharCode(n),++n>122&&(r++,n=97);return e}),s={};return{namedParameterizedRoute:u.map(e=>{if(!(e.startsWith("[")&&e.endsWith("]")))return"/".concat(o.escapeStringRegexp(e));{let{key:n,optional:r,repeat:o}=c(e.slice(1,-1)),a=n.replace(/\W/g,""),u=!1;return(0===a.length||a.length>30)&&(u=!0),isNaN(parseInt(a.slice(0,1)))||(u=!0),u&&(a=i()),t?s[a="".concat(l).concat(a)]="".concat(l).concat(n):s[a]="".concat(n),o?r?"(?:/(?<".concat(a,">.+?))?"):"/(?<".concat(a,">.+?)"):"/(?<".concat(a,">[^/]+?)")}}).join(""),routeKeys:s}}},9448:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.execOnce=function(e){let t,n=!1;return function(){for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return n||(n=!0,t=e(...o)),t}},t.getLocationOrigin=l,t.getURL=function(){let{href:e}=window.location,t=l();return e.substring(t.length)},t.getDisplayName=c,t.isResSent=u,t.normalizeRepeatedSlashes=function(e){let t=e.split("?"),n=t[0];return n.replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?".concat(t.slice(1).join("?")):"")},t.loadGetInitialProps=i,t.ST=t.SP=t.isAbsoluteUrl=t.WEB_VITALS=void 0;var r=n(3720).Z;t.WEB_VITALS=["CLS","FCP","FID","INP","LCP","TTFB"];let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,a=e=>o.test(e);function l(){let{protocol:e,hostname:t,port:n}=window.location;return"".concat(e,"//").concat(t).concat(n?":"+n:"")}function c(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function i(e,t){return s.apply(this,arguments)}function s(){return(s=r(function*(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:yield i(t.Component,t.ctx)}:{};let r=yield e.getInitialProps(t);if(n&&u(n))return r;if(!r){let t='"'.concat(c(e),'.getInitialProps()" should resolve to an object. But found "').concat(r,'" instead.');throw Error(t)}return r})).apply(this,arguments)}t.isAbsoluteUrl=a;let f="undefined"!=typeof performance;t.SP=f;let d=f&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);t.ST=d,t.DecodeError=class extends Error{},t.NormalizeError=class extends Error{},t.PageNotFoundError=class extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: ".concat(e)}},t.MissingStaticPage=class extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: ".concat(e," ").concat(t)}},t.MiddlewareNotFoundError=class extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}}}]);