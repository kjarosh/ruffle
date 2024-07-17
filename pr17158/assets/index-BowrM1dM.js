const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ruffle_web-wasm_extensions-DRUHr_of.js","./ruffle-imports-CztXuSei.js","./ruffle_web-DRUHr_of.js"])))=>i.map(i=>d[i]);
var dp=Object.defineProperty;var fp=(e,n,t)=>n in e?dp(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var qr=(e,n,t)=>fp(e,typeof n!="symbol"?n+"":n,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();var Sn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function pp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gu={exports:{}},Qo={},Yu={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ar=Symbol.for("react.element"),mp=Symbol.for("react.portal"),hp=Symbol.for("react.fragment"),vp=Symbol.for("react.strict_mode"),gp=Symbol.for("react.profiler"),wp=Symbol.for("react.provider"),yp=Symbol.for("react.context"),kp=Symbol.for("react.forward_ref"),bp=Symbol.for("react.suspense"),Sp=Symbol.for("react.memo"),Rp=Symbol.for("react.lazy"),ws=Symbol.iterator;function xp(e){return e===null||typeof e!="object"?null:(e=ws&&e[ws]||e["@@iterator"],typeof e=="function"?e:null)}var Xu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ec=Object.assign,nc={};function Lt(e,n,t){this.props=e,this.context=n,this.refs=nc,this.updater=t||Xu}Lt.prototype.isReactComponent={};Lt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Lt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function tc(){}tc.prototype=Lt.prototype;function sl(e,n,t){this.props=e,this.context=n,this.refs=nc,this.updater=t||Xu}var ul=sl.prototype=new tc;ul.constructor=sl;ec(ul,Lt.prototype);ul.isPureReactComponent=!0;var ys=Array.isArray,rc=Object.prototype.hasOwnProperty,cl={current:null},oc={key:!0,ref:!0,__self:!0,__source:!0};function ic(e,n,t){var r,o={},i=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(i=""+n.key),n)rc.call(n,r)&&!oc.hasOwnProperty(r)&&(o[r]=n[r]);var l=arguments.length-2;if(l===1)o.children=t;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Ar,type:e,key:i,ref:a,props:o,_owner:cl.current}}function zp(e,n){return{$$typeof:Ar,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function dl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ar}function Ep(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ks=/\/+/g;function bi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Ep(""+e.key):n.toString(36)}function lo(e,n,t,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ar:case mp:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+bi(a,0):r,ys(o)?(t="",e!=null&&(t=e.replace(ks,"$&/")+"/"),lo(o,n,t,"",function(u){return u})):o!=null&&(dl(o)&&(o=zp(o,t+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(ks,"$&/")+"/")+e)),n.push(o)),1;if(a=0,r=r===""?".":r+":",ys(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+bi(i,l);a+=lo(i,n,t,s,o)}else if(s=xp(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+bi(i,l++),a+=lo(i,n,t,s,o);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function Ur(e,n,t){if(e==null)return e;var r=[],o=0;return lo(e,r,"","",function(i){return n.call(t,i,o++)}),r}function jp(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},so={transition:null},Cp={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:so,ReactCurrentOwner:cl};function ac(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:Ur,forEach:function(e,n,t){Ur(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Ur(e,function(){n++}),n},toArray:function(e){return Ur(e,function(n){return n})||[]},only:function(e){if(!dl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=Lt;F.Fragment=hp;F.Profiler=gp;F.PureComponent=sl;F.StrictMode=vp;F.Suspense=bp;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cp;F.act=ac;F.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ec({},e.props),o=e.key,i=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,a=cl.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)rc.call(n,s)&&!oc.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ar,type:e.type,key:o,ref:i,props:r,_owner:a}};F.createContext=function(e){return e={$$typeof:yp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wp,_context:e},e.Consumer=e};F.createElement=ic;F.createFactory=function(e){var n=ic.bind(null,e);return n.type=e,n};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:kp,render:e}};F.isValidElement=dl;F.lazy=function(e){return{$$typeof:Rp,_payload:{_status:-1,_result:e},_init:jp}};F.memo=function(e,n){return{$$typeof:Sp,type:e,compare:n===void 0?null:n}};F.startTransition=function(e){var n=so.transition;so.transition={};try{e()}finally{so.transition=n}};F.unstable_act=ac;F.useCallback=function(e,n){return we.current.useCallback(e,n)};F.useContext=function(e){return we.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return we.current.useDeferredValue(e)};F.useEffect=function(e,n){return we.current.useEffect(e,n)};F.useId=function(){return we.current.useId()};F.useImperativeHandle=function(e,n,t){return we.current.useImperativeHandle(e,n,t)};F.useInsertionEffect=function(e,n){return we.current.useInsertionEffect(e,n)};F.useLayoutEffect=function(e,n){return we.current.useLayoutEffect(e,n)};F.useMemo=function(e,n){return we.current.useMemo(e,n)};F.useReducer=function(e,n,t){return we.current.useReducer(e,n,t)};F.useRef=function(e){return we.current.useRef(e)};F.useState=function(e){return we.current.useState(e)};F.useSyncExternalStore=function(e,n,t){return we.current.useSyncExternalStore(e,n,t)};F.useTransition=function(){return we.current.useTransition()};F.version="18.3.1";Yu.exports=F;var te=Yu.exports;const ra=pp(te);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp=te,_p=Symbol.for("react.element"),Ap=Symbol.for("react.fragment"),Dp=Object.prototype.hasOwnProperty,Tp=Pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fp={key:!0,ref:!0,__self:!0,__source:!0};function lc(e,n,t){var r,o={},i=null,a=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)Dp.call(n,r)&&!Fp.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:_p,type:e,key:i,ref:a,props:o,_owner:Tp.current}}Qo.Fragment=Ap;Qo.jsx=lc;Qo.jsxs=lc;Gu.exports=Qo;var C=Gu.exports,oa={},sc={exports:{}},Ae={},uc={exports:{}},cc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(A,D){var T=A.length;A.push(D);e:for(;0<T;){var G=T-1>>>1,oe=A[G];if(0<o(oe,D))A[G]=D,A[T]=oe,T=G;else break e}}function t(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var D=A[0],T=A.pop();if(T!==D){A[0]=T;e:for(var G=0,oe=A.length,Nr=oe>>>1;G<Nr;){var $n=2*(G+1)-1,ki=A[$n],qn=$n+1,$r=A[qn];if(0>o(ki,T))qn<oe&&0>o($r,ki)?(A[G]=$r,A[qn]=T,G=qn):(A[G]=ki,A[$n]=T,G=$n);else if(qn<oe&&0>o($r,T))A[G]=$r,A[qn]=T,G=qn;else break e}}return D}function o(A,D){var T=A.sortIndex-D.sortIndex;return T!==0?T:A.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],p=1,h=null,m=3,g=!1,y=!1,S=!1,O=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(A){for(var D=t(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=A)r(u),D.sortIndex=D.expirationTime,n(s,D);else break;D=t(u)}}function v(A){if(S=!1,f(A),!y)if(t(s)!==null)y=!0,wi(R);else{var D=t(u);D!==null&&yi(v,D.startTime-A)}}function R(A,D){y=!1,S&&(S=!1,d(E),E=-1),g=!0;var T=m;try{for(f(D),h=t(s);h!==null&&(!(h.expirationTime>D)||A&&!M());){var G=h.callback;if(typeof G=="function"){h.callback=null,m=h.priorityLevel;var oe=G(h.expirationTime<=D);D=e.unstable_now(),typeof oe=="function"?h.callback=oe:h===t(s)&&r(s),f(D)}else r(s);h=t(s)}if(h!==null)var Nr=!0;else{var $n=t(u);$n!==null&&yi(v,$n.startTime-D),Nr=!1}return Nr}finally{h=null,m=T,g=!1}}var _=!1,x=null,E=-1,w=5,b=-1;function M(){return!(e.unstable_now()-b<w)}function ze(){if(x!==null){var A=e.unstable_now();b=A;var D=!0;try{D=x(!0,A)}finally{D?$e():(_=!1,x=null)}}else _=!1}var $e;if(typeof c=="function")$e=function(){c(ze)};else if(typeof MessageChannel<"u"){var Ee=new MessageChannel,cp=Ee.port2;Ee.port1.onmessage=ze,$e=function(){cp.postMessage(null)}}else $e=function(){O(ze,0)};function wi(A){x=A,_||(_=!0,$e())}function yi(A,D){E=O(function(){A(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,wi(R))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(A){switch(m){case 1:case 2:case 3:var D=3;break;default:D=m}var T=m;m=D;try{return A()}finally{m=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,D){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var T=m;m=A;try{return D()}finally{m=T}},e.unstable_scheduleCallback=function(A,D,T){var G=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?G+T:G):T=G,A){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=T+oe,A={id:p++,callback:D,priorityLevel:A,startTime:T,expirationTime:oe,sortIndex:-1},T>G?(A.sortIndex=T,n(u,A),t(s)===null&&A===t(u)&&(S?(d(E),E=-1):S=!0,yi(v,T-G))):(A.sortIndex=oe,n(s,A),y||g||(y=!0,wi(R))),A},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(A){var D=m;return function(){var T=m;m=D;try{return A.apply(this,arguments)}finally{m=T}}}})(cc);uc.exports=cc;var Mp=uc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp=te,_e=Mp;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dc=new Set,dr={};function et(e,n){Et(e,n),Et(e+"Capture",n)}function Et(e,n){for(dr[e]=n,e=0;e<n.length;e++)dc.add(n[e])}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ia=Object.prototype.hasOwnProperty,Op=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bs={},Ss={};function Ip(e){return ia.call(Ss,e)?!0:ia.call(bs,e)?!1:Op.test(e)?Ss[e]=!0:(bs[e]=!0,!1)}function Np(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $p(e,n,t,r){if(n===null||typeof n>"u"||Np(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ye(e,n,t,r,o,i,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=a}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ce[n]=new ye(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var fl=/[\-:]([a-z])/g;function pl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(fl,pl);ce[n]=new ye(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(fl,pl);ce[n]=new ye(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(fl,pl);ce[n]=new ye(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function ml(e,n,t,r){var o=ce.hasOwnProperty(n)?ce[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&($p(n,t,o,r)&&(t=null),r||o===null?Ip(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var hn=Lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wr=Symbol.for("react.element"),ot=Symbol.for("react.portal"),it=Symbol.for("react.fragment"),hl=Symbol.for("react.strict_mode"),aa=Symbol.for("react.profiler"),fc=Symbol.for("react.provider"),pc=Symbol.for("react.context"),vl=Symbol.for("react.forward_ref"),la=Symbol.for("react.suspense"),sa=Symbol.for("react.suspense_list"),gl=Symbol.for("react.memo"),wn=Symbol.for("react.lazy"),mc=Symbol.for("react.offscreen"),Rs=Symbol.iterator;function Nt(e){return e===null||typeof e!="object"?null:(e=Rs&&e[Rs]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,Si;function Kt(e){if(Si===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Si=n&&n[1]||""}return`
`+Si+e}var Ri=!1;function xi(e,n){if(!e||Ri)return"";Ri=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Ri=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Kt(e):""}function qp(e){switch(e.tag){case 5:return Kt(e.type);case 16:return Kt("Lazy");case 13:return Kt("Suspense");case 19:return Kt("SuspenseList");case 0:case 2:case 15:return e=xi(e.type,!1),e;case 11:return e=xi(e.type.render,!1),e;case 1:return e=xi(e.type,!0),e;default:return""}}function ua(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case it:return"Fragment";case ot:return"Portal";case aa:return"Profiler";case hl:return"StrictMode";case la:return"Suspense";case sa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pc:return(e.displayName||"Context")+".Consumer";case fc:return(e._context.displayName||"Context")+".Provider";case vl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gl:return n=e.displayName||null,n!==null?n:ua(e.type)||"Memo";case wn:n=e._payload,e=e._init;try{return ua(e(n))}catch{}}return null}function Up(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ua(n);case 8:return n===hl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Wp(e){var n=hc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Br(e){e._valueTracker||(e._valueTracker=Wp(e))}function vc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=hc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function ko(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ca(e,n){var t=n.checked;return J({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function xs(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Mn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function gc(e,n){n=n.checked,n!=null&&ml(e,"checked",n,!1)}function da(e,n){gc(e,n);var t=Mn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?fa(e,n.type,t):n.hasOwnProperty("defaultValue")&&fa(e,n.type,Mn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function zs(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function fa(e,n,t){(n!=="number"||ko(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Qt=Array.isArray;function gt(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Mn(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function pa(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return J({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Es(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(Qt(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Mn(t)}}function wc(e,n){var t=Mn(n.value),r=Mn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function js(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function yc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ma(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?yc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Vr,kc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Vr=Vr||document.createElement("div"),Vr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Vr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function fr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Gt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bp=["Webkit","ms","Moz","O"];Object.keys(Gt).forEach(function(e){Bp.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Gt[n]=Gt[e]})});function bc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Gt.hasOwnProperty(e)&&Gt[e]?(""+n).trim():n+"px"}function Sc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=bc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var Vp=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ha(e,n){if(n){if(Vp[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function va(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ga=null;function wl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wa=null,wt=null,yt=null;function Cs(e){if(e=Fr(e)){if(typeof wa!="function")throw Error(k(280));var n=e.stateNode;n&&(n=Xo(n),wa(e.stateNode,e.type,n))}}function Rc(e){wt?yt?yt.push(e):yt=[e]:wt=e}function xc(){if(wt){var e=wt,n=yt;if(yt=wt=null,Cs(e),n)for(e=0;e<n.length;e++)Cs(n[e])}}function zc(e,n){return e(n)}function Ec(){}var zi=!1;function jc(e,n,t){if(zi)return e(n,t);zi=!0;try{return zc(e,n,t)}finally{zi=!1,(wt!==null||yt!==null)&&(Ec(),xc())}}function pr(e,n){var t=e.stateNode;if(t===null)return null;var r=Xo(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var ya=!1;if(cn)try{var $t={};Object.defineProperty($t,"passive",{get:function(){ya=!0}}),window.addEventListener("test",$t,$t),window.removeEventListener("test",$t,$t)}catch{ya=!1}function Hp(e,n,t,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(p){this.onError(p)}}var Yt=!1,bo=null,So=!1,ka=null,Kp={onError:function(e){Yt=!0,bo=e}};function Qp(e,n,t,r,o,i,a,l,s){Yt=!1,bo=null,Hp.apply(Kp,arguments)}function Jp(e,n,t,r,o,i,a,l,s){if(Qp.apply(this,arguments),Yt){if(Yt){var u=bo;Yt=!1,bo=null}else throw Error(k(198));So||(So=!0,ka=u)}}function nt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Cc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ps(e){if(nt(e)!==e)throw Error(k(188))}function Zp(e){var n=e.alternate;if(!n){if(n=nt(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return Ps(o),e;if(i===r)return Ps(o),n;i=i.sibling}throw Error(k(188))}if(t.return!==r.return)t=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===t){a=!0,t=o,r=i;break}if(l===r){a=!0,r=o,t=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===t){a=!0,t=i,r=o;break}if(l===r){a=!0,r=i,t=o;break}l=l.sibling}if(!a)throw Error(k(189))}}if(t.alternate!==r)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function Pc(e){return e=Zp(e),e!==null?_c(e):null}function _c(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=_c(e);if(n!==null)return n;e=e.sibling}return null}var Ac=_e.unstable_scheduleCallback,_s=_e.unstable_cancelCallback,Gp=_e.unstable_shouldYield,Yp=_e.unstable_requestPaint,Y=_e.unstable_now,Xp=_e.unstable_getCurrentPriorityLevel,yl=_e.unstable_ImmediatePriority,Dc=_e.unstable_UserBlockingPriority,Ro=_e.unstable_NormalPriority,em=_e.unstable_LowPriority,Tc=_e.unstable_IdlePriority,Jo=null,Xe=null;function nm(e){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(Jo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:om,tm=Math.log,rm=Math.LN2;function om(e){return e>>>=0,e===0?32:31-(tm(e)/rm|0)|0}var Hr=64,Kr=4194304;function Jt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function xo(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=t&268435455;if(a!==0){var l=a&~o;l!==0?r=Jt(l):(i&=a,i!==0&&(r=Jt(i)))}else a=t&~o,a!==0?r=Jt(a):i!==0&&(r=Jt(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ve(n),o=1<<t,r|=e[t],n&=~o;return r}function im(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function am(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Ve(i),l=1<<a,s=o[a];s===-1?(!(l&t)||l&r)&&(o[a]=im(l,n)):s<=n&&(e.expiredLanes|=l),i&=~l}}function ba(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fc(){var e=Hr;return Hr<<=1,!(Hr&4194240)&&(Hr=64),e}function Ei(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Dr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ve(n),e[n]=t}function lm(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-Ve(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function kl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ve(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var N=0;function Mc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Lc,bl,Oc,Ic,Nc,Sa=!1,Qr=[],zn=null,En=null,jn=null,mr=new Map,hr=new Map,kn=[],sm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function As(e,n){switch(e){case"focusin":case"focusout":zn=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":jn=null;break;case"pointerover":case"pointerout":mr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":hr.delete(n.pointerId)}}function qt(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=Fr(n),n!==null&&bl(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function um(e,n,t,r,o){switch(n){case"focusin":return zn=qt(zn,e,n,t,r,o),!0;case"dragenter":return En=qt(En,e,n,t,r,o),!0;case"mouseover":return jn=qt(jn,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return mr.set(i,qt(mr.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,hr.set(i,qt(hr.get(i)||null,e,n,t,r,o)),!0}return!1}function $c(e){var n=Bn(e.target);if(n!==null){var t=nt(n);if(t!==null){if(n=t.tag,n===13){if(n=Cc(t),n!==null){e.blockedOn=n,Nc(e.priority,function(){Oc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ra(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ga=r,t.target.dispatchEvent(r),ga=null}else return n=Fr(t),n!==null&&bl(n),e.blockedOn=t,!1;n.shift()}return!0}function Ds(e,n,t){uo(e)&&t.delete(n)}function cm(){Sa=!1,zn!==null&&uo(zn)&&(zn=null),En!==null&&uo(En)&&(En=null),jn!==null&&uo(jn)&&(jn=null),mr.forEach(Ds),hr.forEach(Ds)}function Ut(e,n){e.blockedOn===n&&(e.blockedOn=null,Sa||(Sa=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,cm)))}function vr(e){function n(o){return Ut(o,e)}if(0<Qr.length){Ut(Qr[0],e);for(var t=1;t<Qr.length;t++){var r=Qr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(zn!==null&&Ut(zn,e),En!==null&&Ut(En,e),jn!==null&&Ut(jn,e),mr.forEach(n),hr.forEach(n),t=0;t<kn.length;t++)r=kn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<kn.length&&(t=kn[0],t.blockedOn===null);)$c(t),t.blockedOn===null&&kn.shift()}var kt=hn.ReactCurrentBatchConfig,zo=!0;function dm(e,n,t,r){var o=N,i=kt.transition;kt.transition=null;try{N=1,Sl(e,n,t,r)}finally{N=o,kt.transition=i}}function fm(e,n,t,r){var o=N,i=kt.transition;kt.transition=null;try{N=4,Sl(e,n,t,r)}finally{N=o,kt.transition=i}}function Sl(e,n,t,r){if(zo){var o=Ra(e,n,t,r);if(o===null)Li(e,n,r,Eo,t),As(e,r);else if(um(o,e,n,t,r))r.stopPropagation();else if(As(e,r),n&4&&-1<sm.indexOf(e)){for(;o!==null;){var i=Fr(o);if(i!==null&&Lc(i),i=Ra(e,n,t,r),i===null&&Li(e,n,r,Eo,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else Li(e,n,r,null,t)}}var Eo=null;function Ra(e,n,t,r){if(Eo=null,e=wl(r),e=Bn(e),e!==null)if(n=nt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Cc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Eo=e,null}function qc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xp()){case yl:return 1;case Dc:return 4;case Ro:case em:return 16;case Tc:return 536870912;default:return 16}default:return 16}}var Rn=null,Rl=null,co=null;function Uc(){if(co)return co;var e,n=Rl,t=n.length,r,o="value"in Rn?Rn.value:Rn.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===o[i-r];r++);return co=o.slice(e,1<r?1-r:void 0)}function fo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Jr(){return!0}function Ts(){return!1}function De(e){function n(t,r,o,i,a){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Jr:Ts,this.isPropagationStopped=Ts,this}return J(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Jr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Jr)},persist:function(){},isPersistent:Jr}),n}var Ot={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=De(Ot),Tr=J({},Ot,{view:0,detail:0}),pm=De(Tr),ji,Ci,Wt,Zo=J({},Tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wt&&(Wt&&e.type==="mousemove"?(ji=e.screenX-Wt.screenX,Ci=e.screenY-Wt.screenY):Ci=ji=0,Wt=e),ji)},movementY:function(e){return"movementY"in e?e.movementY:Ci}}),Fs=De(Zo),mm=J({},Zo,{dataTransfer:0}),hm=De(mm),vm=J({},Tr,{relatedTarget:0}),Pi=De(vm),gm=J({},Ot,{animationName:0,elapsedTime:0,pseudoElement:0}),wm=De(gm),ym=J({},Ot,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),km=De(ym),bm=J({},Ot,{data:0}),Ms=De(bm),Sm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zm(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=xm[e])?!!n[e]:!1}function zl(){return zm}var Em=J({},Tr,{key:function(e){if(e.key){var n=Sm[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=fo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zl,charCode:function(e){return e.type==="keypress"?fo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jm=De(Em),Cm=J({},Zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ls=De(Cm),Pm=J({},Tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zl}),_m=De(Pm),Am=J({},Ot,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dm=De(Am),Tm=J({},Zo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fm=De(Tm),Mm=[9,13,27,32],El=cn&&"CompositionEvent"in window,Xt=null;cn&&"documentMode"in document&&(Xt=document.documentMode);var Lm=cn&&"TextEvent"in window&&!Xt,Wc=cn&&(!El||Xt&&8<Xt&&11>=Xt),Os=" ",Is=!1;function Bc(e,n){switch(e){case"keyup":return Mm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var at=!1;function Om(e,n){switch(e){case"compositionend":return Vc(n);case"keypress":return n.which!==32?null:(Is=!0,Os);case"textInput":return e=n.data,e===Os&&Is?null:e;default:return null}}function Im(e,n){if(at)return e==="compositionend"||!El&&Bc(e,n)?(e=Uc(),co=Rl=Rn=null,at=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Wc&&n.locale!=="ko"?null:n.data;default:return null}}var Nm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ns(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Nm[e.type]:n==="textarea"}function Hc(e,n,t,r){Rc(r),n=jo(n,"onChange"),0<n.length&&(t=new xl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var er=null,gr=null;function $m(e){rd(e,0)}function Go(e){var n=ut(e);if(vc(n))return e}function qm(e,n){if(e==="change")return n}var Kc=!1;if(cn){var _i;if(cn){var Ai="oninput"in document;if(!Ai){var $s=document.createElement("div");$s.setAttribute("oninput","return;"),Ai=typeof $s.oninput=="function"}_i=Ai}else _i=!1;Kc=_i&&(!document.documentMode||9<document.documentMode)}function qs(){er&&(er.detachEvent("onpropertychange",Qc),gr=er=null)}function Qc(e){if(e.propertyName==="value"&&Go(gr)){var n=[];Hc(n,gr,e,wl(e)),jc($m,n)}}function Um(e,n,t){e==="focusin"?(qs(),er=n,gr=t,er.attachEvent("onpropertychange",Qc)):e==="focusout"&&qs()}function Wm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Go(gr)}function Bm(e,n){if(e==="click")return Go(n)}function Vm(e,n){if(e==="input"||e==="change")return Go(n)}function Hm(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ke=typeof Object.is=="function"?Object.is:Hm;function wr(e,n){if(Ke(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!ia.call(n,o)||!Ke(e[o],n[o]))return!1}return!0}function Us(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ws(e,n){var t=Us(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Us(t)}}function Jc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Jc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Zc(){for(var e=window,n=ko();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ko(e.document)}return n}function jl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Km(e){var n=Zc(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Jc(t.ownerDocument.documentElement,t)){if(r!==null&&jl(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ws(t,i);var a=Ws(t,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qm=cn&&"documentMode"in document&&11>=document.documentMode,lt=null,xa=null,nr=null,za=!1;function Bs(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;za||lt==null||lt!==ko(r)||(r=lt,"selectionStart"in r&&jl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),nr&&wr(nr,r)||(nr=r,r=jo(xa,"onSelect"),0<r.length&&(n=new xl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=lt)))}function Zr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var st={animationend:Zr("Animation","AnimationEnd"),animationiteration:Zr("Animation","AnimationIteration"),animationstart:Zr("Animation","AnimationStart"),transitionend:Zr("Transition","TransitionEnd")},Di={},Gc={};cn&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete st.animationend.animation,delete st.animationiteration.animation,delete st.animationstart.animation),"TransitionEvent"in window||delete st.transitionend.transition);function Yo(e){if(Di[e])return Di[e];if(!st[e])return e;var n=st[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Gc)return Di[e]=n[t];return e}var Yc=Yo("animationend"),Xc=Yo("animationiteration"),ed=Yo("animationstart"),nd=Yo("transitionend"),td=new Map,Vs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(e,n){td.set(e,n),et(n,[e])}for(var Ti=0;Ti<Vs.length;Ti++){var Fi=Vs[Ti],Jm=Fi.toLowerCase(),Zm=Fi[0].toUpperCase()+Fi.slice(1);On(Jm,"on"+Zm)}On(Yc,"onAnimationEnd");On(Xc,"onAnimationIteration");On(ed,"onAnimationStart");On("dblclick","onDoubleClick");On("focusin","onFocus");On("focusout","onBlur");On(nd,"onTransitionEnd");Et("onMouseEnter",["mouseout","mouseover"]);Et("onMouseLeave",["mouseout","mouseover"]);Et("onPointerEnter",["pointerout","pointerover"]);Et("onPointerLeave",["pointerout","pointerover"]);et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));et("onBeforeInput",["compositionend","keypress","textInput","paste"]);et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zt));function Hs(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Jp(r,n,void 0,e),e.currentTarget=null}function rd(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;Hs(o,l,u),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;Hs(o,l,u),i=s}}}if(So)throw e=ka,So=!1,ka=null,e}function U(e,n){var t=n[_a];t===void 0&&(t=n[_a]=new Set);var r=e+"__bubble";t.has(r)||(od(n,e,2,!1),t.add(r))}function Mi(e,n,t){var r=0;n&&(r|=4),od(t,e,r,n)}var Gr="_reactListening"+Math.random().toString(36).slice(2);function yr(e){if(!e[Gr]){e[Gr]=!0,dc.forEach(function(t){t!=="selectionchange"&&(Gm.has(t)||Mi(t,!1,e),Mi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Gr]||(n[Gr]=!0,Mi("selectionchange",!1,n))}}function od(e,n,t,r){switch(qc(n)){case 1:var o=dm;break;case 4:o=fm;break;default:o=Sl}t=o.bind(null,n,t,e),o=void 0,!ya||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function Li(e,n,t,r,o){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=Bn(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}jc(function(){var u=i,p=wl(t),h=[];e:{var m=td.get(e);if(m!==void 0){var g=xl,y=e;switch(e){case"keypress":if(fo(t)===0)break e;case"keydown":case"keyup":g=jm;break;case"focusin":y="focus",g=Pi;break;case"focusout":y="blur",g=Pi;break;case"beforeblur":case"afterblur":g=Pi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Fs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=hm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=_m;break;case Yc:case Xc:case ed:g=wm;break;case nd:g=Dm;break;case"scroll":g=pm;break;case"wheel":g=Fm;break;case"copy":case"cut":case"paste":g=km;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ls}var S=(n&4)!==0,O=!S&&e==="scroll",d=S?m!==null?m+"Capture":null:m;S=[];for(var c=u,f;c!==null;){f=c;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,d!==null&&(v=pr(c,d),v!=null&&S.push(kr(c,v,f)))),O)break;c=c.return}0<S.length&&(m=new g(m,y,null,t,p),h.push({event:m,listeners:S}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&t!==ga&&(y=t.relatedTarget||t.fromElement)&&(Bn(y)||y[dn]))break e;if((g||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,g?(y=t.relatedTarget||t.toElement,g=u,y=y?Bn(y):null,y!==null&&(O=nt(y),y!==O||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(S=Fs,v="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(S=Ls,v="onPointerLeave",d="onPointerEnter",c="pointer"),O=g==null?m:ut(g),f=y==null?m:ut(y),m=new S(v,c+"leave",g,t,p),m.target=O,m.relatedTarget=f,v=null,Bn(p)===u&&(S=new S(d,c+"enter",y,t,p),S.target=f,S.relatedTarget=O,v=S),O=v,g&&y)n:{for(S=g,d=y,c=0,f=S;f;f=rt(f))c++;for(f=0,v=d;v;v=rt(v))f++;for(;0<c-f;)S=rt(S),c--;for(;0<f-c;)d=rt(d),f--;for(;c--;){if(S===d||d!==null&&S===d.alternate)break n;S=rt(S),d=rt(d)}S=null}else S=null;g!==null&&Ks(h,m,g,S,!1),y!==null&&O!==null&&Ks(h,O,y,S,!0)}}e:{if(m=u?ut(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var R=qm;else if(Ns(m))if(Kc)R=Vm;else{R=Wm;var _=Um}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(R=Bm);if(R&&(R=R(e,u))){Hc(h,R,t,p);break e}_&&_(e,m,u),e==="focusout"&&(_=m._wrapperState)&&_.controlled&&m.type==="number"&&fa(m,"number",m.value)}switch(_=u?ut(u):window,e){case"focusin":(Ns(_)||_.contentEditable==="true")&&(lt=_,xa=u,nr=null);break;case"focusout":nr=xa=lt=null;break;case"mousedown":za=!0;break;case"contextmenu":case"mouseup":case"dragend":za=!1,Bs(h,t,p);break;case"selectionchange":if(Qm)break;case"keydown":case"keyup":Bs(h,t,p)}var x;if(El)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else at?Bc(e,t)&&(E="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(E="onCompositionStart");E&&(Wc&&t.locale!=="ko"&&(at||E!=="onCompositionStart"?E==="onCompositionEnd"&&at&&(x=Uc()):(Rn=p,Rl="value"in Rn?Rn.value:Rn.textContent,at=!0)),_=jo(u,E),0<_.length&&(E=new Ms(E,e,null,t,p),h.push({event:E,listeners:_}),x?E.data=x:(x=Vc(t),x!==null&&(E.data=x)))),(x=Lm?Om(e,t):Im(e,t))&&(u=jo(u,"onBeforeInput"),0<u.length&&(p=new Ms("onBeforeInput","beforeinput",null,t,p),h.push({event:p,listeners:u}),p.data=x))}rd(h,n)})}function kr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function jo(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=pr(e,t),i!=null&&r.unshift(kr(e,i,o)),i=pr(e,n),i!=null&&r.push(kr(e,i,o))),e=e.return}return r}function rt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ks(e,n,t,r,o){for(var i=n._reactName,a=[];t!==null&&t!==r;){var l=t,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=pr(t,i),s!=null&&a.unshift(kr(t,s,l))):o||(s=pr(t,i),s!=null&&a.push(kr(t,s,l)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var Ym=/\r\n?/g,Xm=/\u0000|\uFFFD/g;function Qs(e){return(typeof e=="string"?e:""+e).replace(Ym,`
`).replace(Xm,"")}function Yr(e,n,t){if(n=Qs(n),Qs(e)!==n&&t)throw Error(k(425))}function Co(){}var Ea=null,ja=null;function Ca(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Pa=typeof setTimeout=="function"?setTimeout:void 0,eh=typeof clearTimeout=="function"?clearTimeout:void 0,Js=typeof Promise=="function"?Promise:void 0,nh=typeof queueMicrotask=="function"?queueMicrotask:typeof Js<"u"?function(e){return Js.resolve(null).then(e).catch(th)}:Pa;function th(e){setTimeout(function(){throw e})}function Oi(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),vr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);vr(n)}function Cn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Zs(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var It=Math.random().toString(36).slice(2),Ge="__reactFiber$"+It,br="__reactProps$"+It,dn="__reactContainer$"+It,_a="__reactEvents$"+It,rh="__reactListeners$"+It,oh="__reactHandles$"+It;function Bn(e){var n=e[Ge];if(n)return n;for(var t=e.parentNode;t;){if(n=t[dn]||t[Ge]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Zs(e);e!==null;){if(t=e[Ge])return t;e=Zs(e)}return n}e=t,t=e.parentNode}return null}function Fr(e){return e=e[Ge]||e[dn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ut(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Xo(e){return e[br]||null}var Aa=[],ct=-1;function In(e){return{current:e}}function W(e){0>ct||(e.current=Aa[ct],Aa[ct]=null,ct--)}function q(e,n){ct++,Aa[ct]=e.current,e.current=n}var Ln={},me=In(Ln),Se=In(!1),Jn=Ln;function jt(e,n){var t=e.type.contextTypes;if(!t)return Ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function Re(e){return e=e.childContextTypes,e!=null}function Po(){W(Se),W(me)}function Gs(e,n,t){if(me.current!==Ln)throw Error(k(168));q(me,n),q(Se,t)}function id(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(k(108,Up(e)||"Unknown",o));return J({},t,r)}function _o(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ln,Jn=me.current,q(me,e),q(Se,Se.current),!0}function Ys(e,n,t){var r=e.stateNode;if(!r)throw Error(k(169));t?(e=id(e,n,Jn),r.__reactInternalMemoizedMergedChildContext=e,W(Se),W(me),q(me,e)):W(Se),q(Se,t)}var tn=null,ei=!1,Ii=!1;function ad(e){tn===null?tn=[e]:tn.push(e)}function ih(e){ei=!0,ad(e)}function Nn(){if(!Ii&&tn!==null){Ii=!0;var e=0,n=N;try{var t=tn;for(N=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}tn=null,ei=!1}catch(o){throw tn!==null&&(tn=tn.slice(e+1)),Ac(yl,Nn),o}finally{N=n,Ii=!1}}return null}var dt=[],ft=0,Ao=null,Do=0,Fe=[],Me=0,Zn=null,rn=1,on="";function Un(e,n){dt[ft++]=Do,dt[ft++]=Ao,Ao=e,Do=n}function ld(e,n,t){Fe[Me++]=rn,Fe[Me++]=on,Fe[Me++]=Zn,Zn=e;var r=rn;e=on;var o=32-Ve(r)-1;r&=~(1<<o),t+=1;var i=32-Ve(n)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,rn=1<<32-Ve(n)+o|t<<o|r,on=i+e}else rn=1<<i|t<<o|r,on=e}function Cl(e){e.return!==null&&(Un(e,1),ld(e,1,0))}function Pl(e){for(;e===Ao;)Ao=dt[--ft],dt[ft]=null,Do=dt[--ft],dt[ft]=null;for(;e===Zn;)Zn=Fe[--Me],Fe[Me]=null,on=Fe[--Me],Fe[Me]=null,rn=Fe[--Me],Fe[Me]=null}var Pe=null,Ce=null,V=!1,Be=null;function sd(e,n){var t=Le(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Xs(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Pe=e,Ce=Cn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Pe=e,Ce=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Zn!==null?{id:rn,overflow:on}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Le(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Pe=e,Ce=null,!0):!1;default:return!1}}function Da(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ta(e){if(V){var n=Ce;if(n){var t=n;if(!Xs(e,n)){if(Da(e))throw Error(k(418));n=Cn(t.nextSibling);var r=Pe;n&&Xs(e,n)?sd(r,t):(e.flags=e.flags&-4097|2,V=!1,Pe=e)}}else{if(Da(e))throw Error(k(418));e.flags=e.flags&-4097|2,V=!1,Pe=e}}}function eu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function Xr(e){if(e!==Pe)return!1;if(!V)return eu(e),V=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ca(e.type,e.memoizedProps)),n&&(n=Ce)){if(Da(e))throw ud(),Error(k(418));for(;n;)sd(e,n),n=Cn(n.nextSibling)}if(eu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ce=Cn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ce=null}}else Ce=Pe?Cn(e.stateNode.nextSibling):null;return!0}function ud(){for(var e=Ce;e;)e=Cn(e.nextSibling)}function Ct(){Ce=Pe=null,V=!1}function _l(e){Be===null?Be=[e]:Be.push(e)}var ah=hn.ReactCurrentBatchConfig;function Bt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var r=t.stateNode}if(!r)throw Error(k(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(a){var l=o.refs;a===null?delete l[i]:l[i]=a},n._stringRef=i,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function eo(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function nu(e){var n=e._init;return n(e._payload)}function cd(e){function n(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function t(d,c){if(!e)return null;for(;c!==null;)n(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=Dn(d,c),d.index=0,d.sibling=null,d}function i(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function a(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,c,f,v){return c===null||c.tag!==6?(c=Vi(f,d.mode,v),c.return=d,c):(c=o(c,f),c.return=d,c)}function s(d,c,f,v){var R=f.type;return R===it?p(d,c,f.props.children,v,f.key):c!==null&&(c.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===wn&&nu(R)===c.type)?(v=o(c,f.props),v.ref=Bt(d,c,f),v.return=d,v):(v=yo(f.type,f.key,f.props,null,d.mode,v),v.ref=Bt(d,c,f),v.return=d,v)}function u(d,c,f,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Hi(f,d.mode,v),c.return=d,c):(c=o(c,f.children||[]),c.return=d,c)}function p(d,c,f,v,R){return c===null||c.tag!==7?(c=Qn(f,d.mode,v,R),c.return=d,c):(c=o(c,f),c.return=d,c)}function h(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Vi(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Wr:return f=yo(c.type,c.key,c.props,null,d.mode,f),f.ref=Bt(d,null,c),f.return=d,f;case ot:return c=Hi(c,d.mode,f),c.return=d,c;case wn:var v=c._init;return h(d,v(c._payload),f)}if(Qt(c)||Nt(c))return c=Qn(c,d.mode,f,null),c.return=d,c;eo(d,c)}return null}function m(d,c,f,v){var R=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return R!==null?null:l(d,c,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Wr:return f.key===R?s(d,c,f,v):null;case ot:return f.key===R?u(d,c,f,v):null;case wn:return R=f._init,m(d,c,R(f._payload),v)}if(Qt(f)||Nt(f))return R!==null?null:p(d,c,f,v,null);eo(d,f)}return null}function g(d,c,f,v,R){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(f)||null,l(c,d,""+v,R);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Wr:return d=d.get(v.key===null?f:v.key)||null,s(c,d,v,R);case ot:return d=d.get(v.key===null?f:v.key)||null,u(c,d,v,R);case wn:var _=v._init;return g(d,c,f,_(v._payload),R)}if(Qt(v)||Nt(v))return d=d.get(f)||null,p(c,d,v,R,null);eo(c,v)}return null}function y(d,c,f,v){for(var R=null,_=null,x=c,E=c=0,w=null;x!==null&&E<f.length;E++){x.index>E?(w=x,x=null):w=x.sibling;var b=m(d,x,f[E],v);if(b===null){x===null&&(x=w);break}e&&x&&b.alternate===null&&n(d,x),c=i(b,c,E),_===null?R=b:_.sibling=b,_=b,x=w}if(E===f.length)return t(d,x),V&&Un(d,E),R;if(x===null){for(;E<f.length;E++)x=h(d,f[E],v),x!==null&&(c=i(x,c,E),_===null?R=x:_.sibling=x,_=x);return V&&Un(d,E),R}for(x=r(d,x);E<f.length;E++)w=g(x,d,E,f[E],v),w!==null&&(e&&w.alternate!==null&&x.delete(w.key===null?E:w.key),c=i(w,c,E),_===null?R=w:_.sibling=w,_=w);return e&&x.forEach(function(M){return n(d,M)}),V&&Un(d,E),R}function S(d,c,f,v){var R=Nt(f);if(typeof R!="function")throw Error(k(150));if(f=R.call(f),f==null)throw Error(k(151));for(var _=R=null,x=c,E=c=0,w=null,b=f.next();x!==null&&!b.done;E++,b=f.next()){x.index>E?(w=x,x=null):w=x.sibling;var M=m(d,x,b.value,v);if(M===null){x===null&&(x=w);break}e&&x&&M.alternate===null&&n(d,x),c=i(M,c,E),_===null?R=M:_.sibling=M,_=M,x=w}if(b.done)return t(d,x),V&&Un(d,E),R;if(x===null){for(;!b.done;E++,b=f.next())b=h(d,b.value,v),b!==null&&(c=i(b,c,E),_===null?R=b:_.sibling=b,_=b);return V&&Un(d,E),R}for(x=r(d,x);!b.done;E++,b=f.next())b=g(x,d,E,b.value,v),b!==null&&(e&&b.alternate!==null&&x.delete(b.key===null?E:b.key),c=i(b,c,E),_===null?R=b:_.sibling=b,_=b);return e&&x.forEach(function(ze){return n(d,ze)}),V&&Un(d,E),R}function O(d,c,f,v){if(typeof f=="object"&&f!==null&&f.type===it&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Wr:e:{for(var R=f.key,_=c;_!==null;){if(_.key===R){if(R=f.type,R===it){if(_.tag===7){t(d,_.sibling),c=o(_,f.props.children),c.return=d,d=c;break e}}else if(_.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===wn&&nu(R)===_.type){t(d,_.sibling),c=o(_,f.props),c.ref=Bt(d,_,f),c.return=d,d=c;break e}t(d,_);break}else n(d,_);_=_.sibling}f.type===it?(c=Qn(f.props.children,d.mode,v,f.key),c.return=d,d=c):(v=yo(f.type,f.key,f.props,null,d.mode,v),v.ref=Bt(d,c,f),v.return=d,d=v)}return a(d);case ot:e:{for(_=f.key;c!==null;){if(c.key===_)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){t(d,c.sibling),c=o(c,f.children||[]),c.return=d,d=c;break e}else{t(d,c);break}else n(d,c);c=c.sibling}c=Hi(f,d.mode,v),c.return=d,d=c}return a(d);case wn:return _=f._init,O(d,c,_(f._payload),v)}if(Qt(f))return y(d,c,f,v);if(Nt(f))return S(d,c,f,v);eo(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(t(d,c.sibling),c=o(c,f),c.return=d,d=c):(t(d,c),c=Vi(f,d.mode,v),c.return=d,d=c),a(d)):t(d,c)}return O}var Pt=cd(!0),dd=cd(!1),To=In(null),Fo=null,pt=null,Al=null;function Dl(){Al=pt=Fo=null}function Tl(e){var n=To.current;W(To),e._currentValue=n}function Fa(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function bt(e,n){Fo=e,Al=pt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(be=!0),e.firstContext=null)}function Ie(e){var n=e._currentValue;if(Al!==e)if(e={context:e,memoizedValue:n,next:null},pt===null){if(Fo===null)throw Error(k(308));pt=e,Fo.dependencies={lanes:0,firstContext:e}}else pt=pt.next=e;return n}var Vn=null;function Fl(e){Vn===null?Vn=[e]:Vn.push(e)}function fd(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,Fl(n)):(t.next=o.next,o.next=t),n.interleaved=t,fn(e,r)}function fn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var yn=!1;function Ml(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function an(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Pn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,fn(e,t)}return o=r.interleaved,o===null?(n.next=n,Fl(r)):(n.next=o.next,o.next=n),r.interleaved=n,fn(e,t)}function po(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,kl(e,t)}}function tu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=a:i=i.next=a,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Mo(e,n,t,r){var o=e.updateQueue;yn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?i=u:a.next=u,a=s;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==a&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=s))}if(i!==null){var h=o.baseState;a=0,p=u=s=null,l=i;do{var m=l.lane,g=l.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,S=l;switch(m=n,g=t,S.tag){case 1:if(y=S.payload,typeof y=="function"){h=y.call(g,h,m);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=S.payload,m=typeof y=="function"?y.call(g,h,m):y,m==null)break e;h=J({},h,m);break e;case 2:yn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[l]:m.push(l))}else g={eventTime:g,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=g,s=h):p=p.next=g,a|=m;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;m=l,l=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(p===null&&(s=h),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=p,n=o.shared.interleaved,n!==null){o=n;do a|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);Yn|=a,e.lanes=a,e.memoizedState=h}}function ru(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var Mr={},en=In(Mr),Sr=In(Mr),Rr=In(Mr);function Hn(e){if(e===Mr)throw Error(k(174));return e}function Ll(e,n){switch(q(Rr,n),q(Sr,e),q(en,Mr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ma(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ma(n,e)}W(en),q(en,n)}function _t(){W(en),W(Sr),W(Rr)}function md(e){Hn(Rr.current);var n=Hn(en.current),t=ma(n,e.type);n!==t&&(q(Sr,e),q(en,t))}function Ol(e){Sr.current===e&&(W(en),W(Sr))}var K=In(0);function Lo(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ni=[];function Il(){for(var e=0;e<Ni.length;e++)Ni[e]._workInProgressVersionPrimary=null;Ni.length=0}var mo=hn.ReactCurrentDispatcher,$i=hn.ReactCurrentBatchConfig,Gn=0,Q=null,ne=null,ie=null,Oo=!1,tr=!1,xr=0,lh=0;function de(){throw Error(k(321))}function Nl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ke(e[t],n[t]))return!1;return!0}function $l(e,n,t,r,o,i){if(Gn=i,Q=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,mo.current=e===null||e.memoizedState===null?dh:fh,e=t(r,o),tr){i=0;do{if(tr=!1,xr=0,25<=i)throw Error(k(301));i+=1,ie=ne=null,n.updateQueue=null,mo.current=ph,e=t(r,o)}while(tr)}if(mo.current=Io,n=ne!==null&&ne.next!==null,Gn=0,ie=ne=Q=null,Oo=!1,n)throw Error(k(300));return e}function ql(){var e=xr!==0;return xr=0,e}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?Q.memoizedState=ie=e:ie=ie.next=e,ie}function Ne(){if(ne===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var n=ie===null?Q.memoizedState:ie.next;if(n!==null)ie=n,ne=e;else{if(e===null)throw Error(k(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},ie===null?Q.memoizedState=ie=e:ie=ie.next=e}return ie}function zr(e,n){return typeof n=="function"?n(e):n}function qi(e){var n=Ne(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=ne,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,u=i;do{var p=u.lane;if((Gn&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=h,a=r):s=s.next=h,Q.lanes|=p,Yn|=p}u=u.next}while(u!==null&&u!==i);s===null?a=r:s.next=l,Ke(r,n.memoizedState)||(be=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,Q.lanes|=i,Yn|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ui(e){var n=Ne(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Ke(i,n.memoizedState)||(be=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function hd(){}function vd(e,n){var t=Q,r=Ne(),o=n(),i=!Ke(r.memoizedState,o);if(i&&(r.memoizedState=o,be=!0),r=r.queue,Ul(yd.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||ie!==null&&ie.memoizedState.tag&1){if(t.flags|=2048,Er(9,wd.bind(null,t,r,o,n),void 0,null),ae===null)throw Error(k(349));Gn&30||gd(t,n,o)}return o}function gd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Q.updateQueue,n===null?(n={lastEffect:null,stores:null},Q.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function wd(e,n,t,r){n.value=t,n.getSnapshot=r,kd(n)&&bd(e)}function yd(e,n,t){return t(function(){kd(n)&&bd(e)})}function kd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ke(e,t)}catch{return!0}}function bd(e){var n=fn(e,1);n!==null&&He(n,e,1,-1)}function ou(e){var n=Ze();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zr,lastRenderedState:e},n.queue=e,e=e.dispatch=ch.bind(null,Q,e),[n.memoizedState,e]}function Er(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Q.updateQueue,n===null?(n={lastEffect:null,stores:null},Q.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Sd(){return Ne().memoizedState}function ho(e,n,t,r){var o=Ze();Q.flags|=e,o.memoizedState=Er(1|n,t,void 0,r===void 0?null:r)}function ni(e,n,t,r){var o=Ne();r=r===void 0?null:r;var i=void 0;if(ne!==null){var a=ne.memoizedState;if(i=a.destroy,r!==null&&Nl(r,a.deps)){o.memoizedState=Er(n,t,i,r);return}}Q.flags|=e,o.memoizedState=Er(1|n,t,i,r)}function iu(e,n){return ho(8390656,8,e,n)}function Ul(e,n){return ni(2048,8,e,n)}function Rd(e,n){return ni(4,2,e,n)}function xd(e,n){return ni(4,4,e,n)}function zd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ed(e,n,t){return t=t!=null?t.concat([e]):null,ni(4,4,zd.bind(null,n,e),t)}function Wl(){}function jd(e,n){var t=Ne();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Nl(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Cd(e,n){var t=Ne();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Nl(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Pd(e,n,t){return Gn&21?(Ke(t,n)||(t=Fc(),Q.lanes|=t,Yn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,be=!0),e.memoizedState=t)}function sh(e,n){var t=N;N=t!==0&&4>t?t:4,e(!0);var r=$i.transition;$i.transition={};try{e(!1),n()}finally{N=t,$i.transition=r}}function _d(){return Ne().memoizedState}function uh(e,n,t){var r=An(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Ad(e))Dd(n,t);else if(t=fd(e,n,t,r),t!==null){var o=ge();He(t,e,r,o),Td(t,n,r)}}function ch(e,n,t){var r=An(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ad(e))Dd(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var a=n.lastRenderedState,l=i(a,t);if(o.hasEagerState=!0,o.eagerState=l,Ke(l,a)){var s=n.interleaved;s===null?(o.next=o,Fl(n)):(o.next=s.next,s.next=o),n.interleaved=o;return}}catch{}finally{}t=fd(e,n,o,r),t!==null&&(o=ge(),He(t,e,r,o),Td(t,n,r))}}function Ad(e){var n=e.alternate;return e===Q||n!==null&&n===Q}function Dd(e,n){tr=Oo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Td(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,kl(e,t)}}var Io={readContext:Ie,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},dh={readContext:Ie,useCallback:function(e,n){return Ze().memoizedState=[e,n===void 0?null:n],e},useContext:Ie,useEffect:iu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,ho(4194308,4,zd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ho(4194308,4,e,n)},useInsertionEffect:function(e,n){return ho(4,2,e,n)},useMemo:function(e,n){var t=Ze();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ze();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=uh.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var n=Ze();return e={current:e},n.memoizedState=e},useState:ou,useDebugValue:Wl,useDeferredValue:function(e){return Ze().memoizedState=e},useTransition:function(){var e=ou(!1),n=e[0];return e=sh.bind(null,e[1]),Ze().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Q,o=Ze();if(V){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),ae===null)throw Error(k(349));Gn&30||gd(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,iu(yd.bind(null,r,i,e),[e]),r.flags|=2048,Er(9,wd.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Ze(),n=ae.identifierPrefix;if(V){var t=on,r=rn;t=(r&~(1<<32-Ve(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=xr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=lh++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},fh={readContext:Ie,useCallback:jd,useContext:Ie,useEffect:Ul,useImperativeHandle:Ed,useInsertionEffect:Rd,useLayoutEffect:xd,useMemo:Cd,useReducer:qi,useRef:Sd,useState:function(){return qi(zr)},useDebugValue:Wl,useDeferredValue:function(e){var n=Ne();return Pd(n,ne.memoizedState,e)},useTransition:function(){var e=qi(zr)[0],n=Ne().memoizedState;return[e,n]},useMutableSource:hd,useSyncExternalStore:vd,useId:_d,unstable_isNewReconciler:!1},ph={readContext:Ie,useCallback:jd,useContext:Ie,useEffect:Ul,useImperativeHandle:Ed,useInsertionEffect:Rd,useLayoutEffect:xd,useMemo:Cd,useReducer:Ui,useRef:Sd,useState:function(){return Ui(zr)},useDebugValue:Wl,useDeferredValue:function(e){var n=Ne();return ne===null?n.memoizedState=e:Pd(n,ne.memoizedState,e)},useTransition:function(){var e=Ui(zr)[0],n=Ne().memoizedState;return[e,n]},useMutableSource:hd,useSyncExternalStore:vd,useId:_d,unstable_isNewReconciler:!1};function Ue(e,n){if(e&&e.defaultProps){n=J({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ma(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:J({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ti={isMounted:function(e){return(e=e._reactInternals)?nt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ge(),o=An(e),i=an(r,o);i.payload=n,t!=null&&(i.callback=t),n=Pn(e,i,o),n!==null&&(He(n,e,o,r),po(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ge(),o=An(e),i=an(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Pn(e,i,o),n!==null&&(He(n,e,o,r),po(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ge(),r=An(e),o=an(t,r);o.tag=2,n!=null&&(o.callback=n),n=Pn(e,o,r),n!==null&&(He(n,e,r,t),po(n,e,r))}};function au(e,n,t,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):n.prototype&&n.prototype.isPureReactComponent?!wr(t,r)||!wr(o,i):!0}function Fd(e,n,t){var r=!1,o=Ln,i=n.contextType;return typeof i=="object"&&i!==null?i=Ie(i):(o=Re(n)?Jn:me.current,r=n.contextTypes,i=(r=r!=null)?jt(e,o):Ln),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ti,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function lu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ti.enqueueReplaceState(n,n.state,null)}function La(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},Ml(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=Ie(i):(i=Re(n)?Jn:me.current,o.context=jt(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Ma(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&ti.enqueueReplaceState(o,o.state,null),Mo(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function At(e,n){try{var t="",r=n;do t+=qp(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function Wi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Oa(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var mh=typeof WeakMap=="function"?WeakMap:Map;function Md(e,n,t){t=an(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){$o||($o=!0,Ka=r),Oa(e,n)},t}function Ld(e,n,t){t=an(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){Oa(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Oa(e,n),typeof r!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function su(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new mh;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=Ch.bind(null,e,n,t),n.then(e,e))}function uu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function cu(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=an(-1,1),n.tag=2,Pn(t,n,1))),t.lanes|=1),e)}var hh=hn.ReactCurrentOwner,be=!1;function he(e,n,t,r){n.child=e===null?dd(n,null,t,r):Pt(n,e.child,t,r)}function du(e,n,t,r,o){t=t.render;var i=n.ref;return bt(n,o),r=$l(e,n,t,r,i,o),t=ql(),e!==null&&!be?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,pn(e,n,o)):(V&&t&&Cl(n),n.flags|=1,he(e,n,r,o),n.child)}function fu(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!Gl(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Od(e,n,i,r,o)):(e=yo(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(t=t.compare,t=t!==null?t:wr,t(a,r)&&e.ref===n.ref)return pn(e,n,o)}return n.flags|=1,e=Dn(i,r),e.ref=n.ref,e.return=n,n.child=e}function Od(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if(wr(i,r)&&e.ref===n.ref)if(be=!1,n.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(be=!0);else return n.lanes=e.lanes,pn(e,n,o)}return Ia(e,n,t,r,o)}function Id(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(ht,je),je|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,q(ht,je),je|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,q(ht,je),je|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,q(ht,je),je|=r;return he(e,n,o,t),n.child}function Nd(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ia(e,n,t,r,o){var i=Re(t)?Jn:me.current;return i=jt(n,i),bt(n,o),t=$l(e,n,t,r,i,o),r=ql(),e!==null&&!be?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,pn(e,n,o)):(V&&r&&Cl(n),n.flags|=1,he(e,n,t,o),n.child)}function pu(e,n,t,r,o){if(Re(t)){var i=!0;_o(n)}else i=!1;if(bt(n,o),n.stateNode===null)vo(e,n),Fd(n,t,r),La(n,t,r,o),r=!0;else if(e===null){var a=n.stateNode,l=n.memoizedProps;a.props=l;var s=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=Ie(u):(u=Re(t)?Jn:me.current,u=jt(n,u));var p=t.getDerivedStateFromProps,h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&lu(n,a,r,u),yn=!1;var m=n.memoizedState;a.state=m,Mo(n,r,a,o),s=n.memoizedState,l!==r||m!==s||Se.current||yn?(typeof p=="function"&&(Ma(n,t,p,r),s=n.memoizedState),(l=yn||au(n,t,l,r,m,s,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,pd(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:Ue(n.type,l),a.props=u,h=n.pendingProps,m=a.context,s=t.contextType,typeof s=="object"&&s!==null?s=Ie(s):(s=Re(t)?Jn:me.current,s=jt(n,s));var g=t.getDerivedStateFromProps;(p=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==h||m!==s)&&lu(n,a,r,s),yn=!1,m=n.memoizedState,a.state=m,Mo(n,r,a,o);var y=n.memoizedState;l!==h||m!==y||Se.current||yn?(typeof g=="function"&&(Ma(n,t,g,r),y=n.memoizedState),(u=yn||au(n,t,u,r,m,y,s)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,s)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),a.props=r,a.state=y,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return Na(e,n,t,r,i,o)}function Na(e,n,t,r,o,i){Nd(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return o&&Ys(n,t,!1),pn(e,n,i);r=n.stateNode,hh.current=n;var l=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=Pt(n,e.child,null,i),n.child=Pt(n,null,l,i)):he(e,n,l,i),n.memoizedState=r.state,o&&Ys(n,t,!0),n.child}function $d(e){var n=e.stateNode;n.pendingContext?Gs(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Gs(e,n.context,!1),Ll(e,n.containerInfo)}function mu(e,n,t,r,o){return Ct(),_l(o),n.flags|=256,he(e,n,t,r),n.child}var $a={dehydrated:null,treeContext:null,retryLane:0};function qa(e){return{baseLanes:e,cachePool:null,transitions:null}}function qd(e,n,t){var r=n.pendingProps,o=K.current,i=!1,a=(n.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),q(K,o&1),e===null)return Ta(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,i?(r=n.mode,i=n.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=ii(a,r,0,null),e=Qn(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=qa(t),n.memoizedState=$a,e):Bl(n,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return vh(e,n,a,r,l,o,t);if(i){i=r.fallback,a=n.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=Dn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Dn(l,i):(i=Qn(i,a,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,a=e.child.memoizedState,a=a===null?qa(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~t,n.memoizedState=$a,r}return i=e.child,e=i.sibling,r=Dn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Bl(e,n){return n=ii({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function no(e,n,t,r){return r!==null&&_l(r),Pt(n,e.child,null,t),e=Bl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function vh(e,n,t,r,o,i,a){if(t)return n.flags&256?(n.flags&=-257,r=Wi(Error(k(422))),no(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=ii({mode:"visible",children:r.children},o,0,null),i=Qn(i,o,a,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&Pt(n,e.child,null,a),n.child.memoizedState=qa(a),n.memoizedState=$a,i);if(!(n.mode&1))return no(e,n,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(k(419)),r=Wi(i,r,void 0),no(e,n,a,r)}if(l=(a&e.childLanes)!==0,be||l){if(r=ae,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,fn(e,o),He(r,e,o,-1))}return Zl(),r=Wi(Error(k(421))),no(e,n,a,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=Ph.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,Ce=Cn(o.nextSibling),Pe=n,V=!0,Be=null,e!==null&&(Fe[Me++]=rn,Fe[Me++]=on,Fe[Me++]=Zn,rn=e.id,on=e.overflow,Zn=n),n=Bl(n,r.children),n.flags|=4096,n)}function hu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Fa(e.return,n,t)}function Bi(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function Ud(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(he(e,n,r.children,t),r=K.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hu(e,t,n);else if(e.tag===19)hu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(K,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&Lo(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),Bi(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&Lo(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}Bi(n,!0,t,null,i);break;case"together":Bi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function vo(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function pn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Yn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=Dn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Dn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function gh(e,n,t){switch(n.tag){case 3:$d(n),Ct();break;case 5:md(n);break;case 1:Re(n.type)&&_o(n);break;case 4:Ll(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;q(To,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(q(K,K.current&1),n.flags|=128,null):t&n.child.childLanes?qd(e,n,t):(q(K,K.current&1),e=pn(e,n,t),e!==null?e.sibling:null);q(K,K.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Ud(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),q(K,K.current),r)break;return null;case 22:case 23:return n.lanes=0,Id(e,n,t)}return pn(e,n,t)}var Wd,Ua,Bd,Vd;Wd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ua=function(){};Bd=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,Hn(en.current);var i=null;switch(t){case"input":o=ca(e,o),r=ca(e,r),i=[];break;case"select":o=J({},o,{value:void 0}),r=J({},r,{value:void 0}),i=[];break;case"textarea":o=pa(e,o),r=pa(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Co)}ha(t,r);var a;t=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(dr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(t||(t={}),t[a]=s[a])}else t||(i||(i=[]),i.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(dr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&U("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};Vd=function(e,n,t,r){t!==r&&(n.flags|=4)};function Vt(e,n){if(!V)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function wh(e,n,t){var r=n.pendingProps;switch(Pl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(n),null;case 1:return Re(n.type)&&Po(),fe(n),null;case 3:return r=n.stateNode,_t(),W(Se),W(me),Il(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Be!==null&&(Za(Be),Be=null))),Ua(e,n),fe(n),null;case 5:Ol(n);var o=Hn(Rr.current);if(t=n.type,e!==null&&n.stateNode!=null)Bd(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(k(166));return fe(n),null}if(e=Hn(en.current),Xr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Ge]=n,r[br]=i,e=(n.mode&1)!==0,t){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(o=0;o<Zt.length;o++)U(Zt[o],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":xs(r,i),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},U("invalid",r);break;case"textarea":Es(r,i),U("invalid",r)}ha(t,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Yr(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Yr(r.textContent,l,e),o=["children",""+l]):dr.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&U("scroll",r)}switch(t){case"input":Br(r),zs(r,i,!0);break;case"textarea":Br(r),js(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Co)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[Ge]=n,e[br]=r,Wd(e,n,!1,!1),n.stateNode=e;e:{switch(a=va(t,r),t){case"dialog":U("cancel",e),U("close",e),o=r;break;case"iframe":case"object":case"embed":U("load",e),o=r;break;case"video":case"audio":for(o=0;o<Zt.length;o++)U(Zt[o],e);o=r;break;case"source":U("error",e),o=r;break;case"img":case"image":case"link":U("error",e),U("load",e),o=r;break;case"details":U("toggle",e),o=r;break;case"input":xs(e,r),o=ca(e,r),U("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=J({},r,{value:void 0}),U("invalid",e);break;case"textarea":Es(e,r),o=pa(e,r),U("invalid",e);break;default:o=r}ha(t,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Sc(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&kc(e,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&fr(e,s):typeof s=="number"&&fr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(dr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&U("scroll",e):s!=null&&ml(e,i,s,a))}switch(t){case"input":Br(e),zs(e,r,!1);break;case"textarea":Br(e),js(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Mn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?gt(e,!!r.multiple,i,!1):r.defaultValue!=null&&gt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Co)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return fe(n),null;case 6:if(e&&n.stateNode!=null)Vd(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(k(166));if(t=Hn(Rr.current),Hn(en.current),Xr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ge]=n,(i=r.nodeValue!==t)&&(e=Pe,e!==null))switch(e.tag){case 3:Yr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ge]=n,n.stateNode=r}return fe(n),null;case 13:if(W(K),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&Ce!==null&&n.mode&1&&!(n.flags&128))ud(),Ct(),n.flags|=98560,i=!1;else if(i=Xr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[Ge]=n}else Ct(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;fe(n),i=!1}else Be!==null&&(Za(Be),Be=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||K.current&1?re===0&&(re=3):Zl())),n.updateQueue!==null&&(n.flags|=4),fe(n),null);case 4:return _t(),Ua(e,n),e===null&&yr(n.stateNode.containerInfo),fe(n),null;case 10:return Tl(n.type._context),fe(n),null;case 17:return Re(n.type)&&Po(),fe(n),null;case 19:if(W(K),i=n.memoizedState,i===null)return fe(n),null;if(r=(n.flags&128)!==0,a=i.rendering,a===null)if(r)Vt(i,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=Lo(e),a!==null){for(n.flags|=128,Vt(i,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return q(K,K.current&1|2),n.child}e=e.sibling}i.tail!==null&&Y()>Dt&&(n.flags|=128,r=!0,Vt(i,!1),n.lanes=4194304)}else{if(!r)if(e=Lo(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Vt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!V)return fe(n),null}else 2*Y()-i.renderingStartTime>Dt&&t!==1073741824&&(n.flags|=128,r=!0,Vt(i,!1),n.lanes=4194304);i.isBackwards?(a.sibling=n.child,n.child=a):(t=i.last,t!==null?t.sibling=a:n.child=a,i.last=a)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Y(),n.sibling=null,t=K.current,q(K,r?t&1|2:t&1),n):(fe(n),null);case 22:case 23:return Jl(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?je&1073741824&&(fe(n),n.subtreeFlags&6&&(n.flags|=8192)):fe(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function yh(e,n){switch(Pl(n),n.tag){case 1:return Re(n.type)&&Po(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return _t(),W(Se),W(me),Il(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ol(n),null;case 13:if(W(K),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));Ct()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return W(K),null;case 4:return _t(),null;case 10:return Tl(n.type._context),null;case 22:case 23:return Jl(),null;case 24:return null;default:return null}}var to=!1,pe=!1,kh=typeof WeakSet=="function"?WeakSet:Set,P=null;function mt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Z(e,n,r)}else t.current=null}function Wa(e,n,t){try{t()}catch(r){Z(e,n,r)}}var vu=!1;function bh(e,n){if(Ea=zo,e=Zc(),jl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var a=0,l=-1,s=-1,u=0,p=0,h=e,m=null;n:for(;;){for(var g;h!==t||o!==0&&h.nodeType!==3||(l=a+o),h!==i||r!==0&&h.nodeType!==3||(s=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(g=h.firstChild)!==null;)m=h,h=g;for(;;){if(h===e)break n;if(m===t&&++u===o&&(l=a),m===i&&++p===r&&(s=a),(g=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=g}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(ja={focusedElem:e,selectionRange:t},zo=!1,P=n;P!==null;)if(n=P,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,P=e;else for(;P!==null;){n=P;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var S=y.memoizedProps,O=y.memoizedState,d=n.stateNode,c=d.getSnapshotBeforeUpdate(n.elementType===n.type?S:Ue(n.type,S),O);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(v){Z(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,P=e;break}P=n.return}return y=vu,vu=!1,y}function rr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Wa(n,t,i)}o=o.next}while(o!==r)}}function ri(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ba(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Hd(e){var n=e.alternate;n!==null&&(e.alternate=null,Hd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ge],delete n[br],delete n[_a],delete n[rh],delete n[oh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Kd(e){return e.tag===5||e.tag===3||e.tag===4}function gu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Va(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Co));else if(r!==4&&(e=e.child,e!==null))for(Va(e,n,t),e=e.sibling;e!==null;)Va(e,n,t),e=e.sibling}function Ha(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ha(e,n,t),e=e.sibling;e!==null;)Ha(e,n,t),e=e.sibling}var se=null,We=!1;function gn(e,n,t){for(t=t.child;t!==null;)Qd(e,n,t),t=t.sibling}function Qd(e,n,t){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(Jo,t)}catch{}switch(t.tag){case 5:pe||mt(t,n);case 6:var r=se,o=We;se=null,gn(e,n,t),se=r,We=o,se!==null&&(We?(e=se,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):se.removeChild(t.stateNode));break;case 18:se!==null&&(We?(e=se,t=t.stateNode,e.nodeType===8?Oi(e.parentNode,t):e.nodeType===1&&Oi(e,t),vr(e)):Oi(se,t.stateNode));break;case 4:r=se,o=We,se=t.stateNode.containerInfo,We=!0,gn(e,n,t),se=r,We=o;break;case 0:case 11:case 14:case 15:if(!pe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Wa(t,n,a),o=o.next}while(o!==r)}gn(e,n,t);break;case 1:if(!pe&&(mt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){Z(t,n,l)}gn(e,n,t);break;case 21:gn(e,n,t);break;case 22:t.mode&1?(pe=(r=pe)||t.memoizedState!==null,gn(e,n,t),pe=r):gn(e,n,t);break;default:gn(e,n,t)}}function wu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new kh),n.forEach(function(r){var o=_h.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function qe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,a=n,l=a;e:for(;l!==null;){switch(l.tag){case 5:se=l.stateNode,We=!1;break e;case 3:se=l.stateNode.containerInfo,We=!0;break e;case 4:se=l.stateNode.containerInfo,We=!0;break e}l=l.return}if(se===null)throw Error(k(160));Qd(i,a,o),se=null,We=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){Z(o,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Jd(n,e),n=n.sibling}function Jd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qe(n,e),Je(e),r&4){try{rr(3,e,e.return),ri(3,e)}catch(S){Z(e,e.return,S)}try{rr(5,e,e.return)}catch(S){Z(e,e.return,S)}}break;case 1:qe(n,e),Je(e),r&512&&t!==null&&mt(t,t.return);break;case 5:if(qe(n,e),Je(e),r&512&&t!==null&&mt(t,t.return),e.flags&32){var o=e.stateNode;try{fr(o,"")}catch(S){Z(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=t!==null?t.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&gc(o,i),va(l,a);var u=va(l,i);for(a=0;a<s.length;a+=2){var p=s[a],h=s[a+1];p==="style"?Sc(o,h):p==="dangerouslySetInnerHTML"?kc(o,h):p==="children"?fr(o,h):ml(o,p,h,u)}switch(l){case"input":da(o,i);break;case"textarea":wc(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?gt(o,!!i.multiple,g,!1):m!==!!i.multiple&&(i.defaultValue!=null?gt(o,!!i.multiple,i.defaultValue,!0):gt(o,!!i.multiple,i.multiple?[]:"",!1))}o[br]=i}catch(S){Z(e,e.return,S)}}break;case 6:if(qe(n,e),Je(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(S){Z(e,e.return,S)}}break;case 3:if(qe(n,e),Je(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{vr(n.containerInfo)}catch(S){Z(e,e.return,S)}break;case 4:qe(n,e),Je(e);break;case 13:qe(n,e),Je(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Kl=Y())),r&4&&wu(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(pe=(u=pe)||p,qe(n,e),pe=u):qe(n,e),Je(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(P=e,p=e.child;p!==null;){for(h=P=p;P!==null;){switch(m=P,g=m.child,m.tag){case 0:case 11:case 14:case 15:rr(4,m,m.return);break;case 1:mt(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(S){Z(r,t,S)}}break;case 5:mt(m,m.return);break;case 22:if(m.memoizedState!==null){ku(h);continue}}g!==null?(g.return=m,P=g):ku(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{o=h.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=h.stateNode,s=h.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=bc("display",a))}catch(S){Z(e,e.return,S)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(S){Z(e,e.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:qe(n,e),Je(e),r&4&&wu(e);break;case 21:break;default:qe(n,e),Je(e)}}function Je(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Kd(t)){var r=t;break e}t=t.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(fr(o,""),r.flags&=-33);var i=gu(e);Ha(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=gu(e);Va(e,l,a);break;default:throw Error(k(161))}}catch(s){Z(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Sh(e,n,t){P=e,Zd(e)}function Zd(e,n,t){for(var r=(e.mode&1)!==0;P!==null;){var o=P,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||to;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||pe;l=to;var u=pe;if(to=a,(pe=s)&&!u)for(P=o;P!==null;)a=P,s=a.child,a.tag===22&&a.memoizedState!==null?bu(o):s!==null?(s.return=a,P=s):bu(o);for(;i!==null;)P=i,Zd(i),i=i.sibling;P=o,to=l,pe=u}yu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,P=i):yu(e)}}function yu(e){for(;P!==null;){var n=P;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:pe||ri(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!pe)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:Ue(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&ru(n,i,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ru(n,a,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&vr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}pe||n.flags&512&&Ba(n)}catch(m){Z(n,n.return,m)}}if(n===e){P=null;break}if(t=n.sibling,t!==null){t.return=n.return,P=t;break}P=n.return}}function ku(e){for(;P!==null;){var n=P;if(n===e){P=null;break}var t=n.sibling;if(t!==null){t.return=n.return,P=t;break}P=n.return}}function bu(e){for(;P!==null;){var n=P;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ri(4,n)}catch(s){Z(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(s){Z(n,o,s)}}var i=n.return;try{Ba(n)}catch(s){Z(n,i,s)}break;case 5:var a=n.return;try{Ba(n)}catch(s){Z(n,a,s)}}}catch(s){Z(n,n.return,s)}if(n===e){P=null;break}var l=n.sibling;if(l!==null){l.return=n.return,P=l;break}P=n.return}}var Rh=Math.ceil,No=hn.ReactCurrentDispatcher,Vl=hn.ReactCurrentOwner,Oe=hn.ReactCurrentBatchConfig,I=0,ae=null,X=null,ue=0,je=0,ht=In(0),re=0,jr=null,Yn=0,oi=0,Hl=0,or=null,ke=null,Kl=0,Dt=1/0,nn=null,$o=!1,Ka=null,_n=null,ro=!1,xn=null,qo=0,ir=0,Qa=null,go=-1,wo=0;function ge(){return I&6?Y():go!==-1?go:go=Y()}function An(e){return e.mode&1?I&2&&ue!==0?ue&-ue:ah.transition!==null?(wo===0&&(wo=Fc()),wo):(e=N,e!==0||(e=window.event,e=e===void 0?16:qc(e.type)),e):1}function He(e,n,t,r){if(50<ir)throw ir=0,Qa=null,Error(k(185));Dr(e,t,r),(!(I&2)||e!==ae)&&(e===ae&&(!(I&2)&&(oi|=t),re===4&&bn(e,ue)),xe(e,r),t===1&&I===0&&!(n.mode&1)&&(Dt=Y()+500,ei&&Nn()))}function xe(e,n){var t=e.callbackNode;am(e,n);var r=xo(e,e===ae?ue:0);if(r===0)t!==null&&_s(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&_s(t),n===1)e.tag===0?ih(Su.bind(null,e)):ad(Su.bind(null,e)),nh(function(){!(I&6)&&Nn()}),t=null;else{switch(Mc(r)){case 1:t=yl;break;case 4:t=Dc;break;case 16:t=Ro;break;case 536870912:t=Tc;break;default:t=Ro}t=of(t,Gd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Gd(e,n){if(go=-1,wo=0,I&6)throw Error(k(327));var t=e.callbackNode;if(St()&&e.callbackNode!==t)return null;var r=xo(e,e===ae?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Uo(e,r);else{n=r;var o=I;I|=2;var i=Xd();(ae!==e||ue!==n)&&(nn=null,Dt=Y()+500,Kn(e,n));do try{Eh();break}catch(l){Yd(e,l)}while(!0);Dl(),No.current=i,I=o,X!==null?n=0:(ae=null,ue=0,n=re)}if(n!==0){if(n===2&&(o=ba(e),o!==0&&(r=o,n=Ja(e,o))),n===1)throw t=jr,Kn(e,0),bn(e,r),xe(e,Y()),t;if(n===6)bn(e,r);else{if(o=e.current.alternate,!(r&30)&&!xh(o)&&(n=Uo(e,r),n===2&&(i=ba(e),i!==0&&(r=i,n=Ja(e,i))),n===1))throw t=jr,Kn(e,0),bn(e,r),xe(e,Y()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(k(345));case 2:Wn(e,ke,nn);break;case 3:if(bn(e,r),(r&130023424)===r&&(n=Kl+500-Y(),10<n)){if(xo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Pa(Wn.bind(null,e,ke,nn),n);break}Wn(e,ke,nn);break;case 4:if(bn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var a=31-Ve(r);i=1<<a,a=n[a],a>o&&(o=a),r&=~i}if(r=o,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rh(r/1960))-r,10<r){e.timeoutHandle=Pa(Wn.bind(null,e,ke,nn),r);break}Wn(e,ke,nn);break;case 5:Wn(e,ke,nn);break;default:throw Error(k(329))}}}return xe(e,Y()),e.callbackNode===t?Gd.bind(null,e):null}function Ja(e,n){var t=or;return e.current.memoizedState.isDehydrated&&(Kn(e,n).flags|=256),e=Uo(e,n),e!==2&&(n=ke,ke=t,n!==null&&Za(n)),e}function Za(e){ke===null?ke=e:ke.push.apply(ke,e)}function xh(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!Ke(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function bn(e,n){for(n&=~Hl,n&=~oi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ve(n),r=1<<t;e[t]=-1,n&=~r}}function Su(e){if(I&6)throw Error(k(327));St();var n=xo(e,0);if(!(n&1))return xe(e,Y()),null;var t=Uo(e,n);if(e.tag!==0&&t===2){var r=ba(e);r!==0&&(n=r,t=Ja(e,r))}if(t===1)throw t=jr,Kn(e,0),bn(e,n),xe(e,Y()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Wn(e,ke,nn),xe(e,Y()),null}function Ql(e,n){var t=I;I|=1;try{return e(n)}finally{I=t,I===0&&(Dt=Y()+500,ei&&Nn())}}function Xn(e){xn!==null&&xn.tag===0&&!(I&6)&&St();var n=I;I|=1;var t=Oe.transition,r=N;try{if(Oe.transition=null,N=1,e)return e()}finally{N=r,Oe.transition=t,I=n,!(I&6)&&Nn()}}function Jl(){je=ht.current,W(ht)}function Kn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,eh(t)),X!==null)for(t=X.return;t!==null;){var r=t;switch(Pl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Po();break;case 3:_t(),W(Se),W(me),Il();break;case 5:Ol(r);break;case 4:_t();break;case 13:W(K);break;case 19:W(K);break;case 10:Tl(r.type._context);break;case 22:case 23:Jl()}t=t.return}if(ae=e,X=e=Dn(e.current,null),ue=je=n,re=0,jr=null,Hl=oi=Yn=0,ke=or=null,Vn!==null){for(n=0;n<Vn.length;n++)if(t=Vn[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}t.pending=r}Vn=null}return e}function Yd(e,n){do{var t=X;try{if(Dl(),mo.current=Io,Oo){for(var r=Q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Oo=!1}if(Gn=0,ie=ne=Q=null,tr=!1,xr=0,Vl.current=null,t===null||t.return===null){re=1,jr=n,X=null;break}e:{var i=e,a=t.return,l=t,s=n;if(n=ue,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=l,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var g=uu(a);if(g!==null){g.flags&=-257,cu(g,a,l,i,n),g.mode&1&&su(i,u,n),n=g,s=u;var y=n.updateQueue;if(y===null){var S=new Set;S.add(s),n.updateQueue=S}else y.add(s);break e}else{if(!(n&1)){su(i,u,n),Zl();break e}s=Error(k(426))}}else if(V&&l.mode&1){var O=uu(a);if(O!==null){!(O.flags&65536)&&(O.flags|=256),cu(O,a,l,i,n),_l(At(s,l));break e}}i=s=At(s,l),re!==4&&(re=2),or===null?or=[i]:or.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var d=Md(i,s,n);tu(i,d);break e;case 1:l=s;var c=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(_n===null||!_n.has(f)))){i.flags|=65536,n&=-n,i.lanes|=n;var v=Ld(i,l,n);tu(i,v);break e}}i=i.return}while(i!==null)}nf(t)}catch(R){n=R,X===t&&t!==null&&(X=t=t.return);continue}break}while(!0)}function Xd(){var e=No.current;return No.current=Io,e===null?Io:e}function Zl(){(re===0||re===3||re===2)&&(re=4),ae===null||!(Yn&268435455)&&!(oi&268435455)||bn(ae,ue)}function Uo(e,n){var t=I;I|=2;var r=Xd();(ae!==e||ue!==n)&&(nn=null,Kn(e,n));do try{zh();break}catch(o){Yd(e,o)}while(!0);if(Dl(),I=t,No.current=r,X!==null)throw Error(k(261));return ae=null,ue=0,re}function zh(){for(;X!==null;)ef(X)}function Eh(){for(;X!==null&&!Gp();)ef(X)}function ef(e){var n=rf(e.alternate,e,je);e.memoizedProps=e.pendingProps,n===null?nf(e):X=n,Vl.current=null}function nf(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=yh(t,n),t!==null){t.flags&=32767,X=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,X=null;return}}else if(t=wh(t,n,je),t!==null){X=t;return}if(n=n.sibling,n!==null){X=n;return}X=n=e}while(n!==null);re===0&&(re=5)}function Wn(e,n,t){var r=N,o=Oe.transition;try{Oe.transition=null,N=1,jh(e,n,t,r)}finally{Oe.transition=o,N=r}return null}function jh(e,n,t,r){do St();while(xn!==null);if(I&6)throw Error(k(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(lm(e,i),e===ae&&(X=ae=null,ue=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ro||(ro=!0,of(Ro,function(){return St(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Oe.transition,Oe.transition=null;var a=N;N=1;var l=I;I|=4,Vl.current=null,bh(e,t),Jd(t,e),Km(ja),zo=!!Ea,ja=Ea=null,e.current=t,Sh(t),Yp(),I=l,N=a,Oe.transition=i}else e.current=t;if(ro&&(ro=!1,xn=e,qo=o),i=e.pendingLanes,i===0&&(_n=null),nm(t.stateNode),xe(e,Y()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if($o)throw $o=!1,e=Ka,Ka=null,e;return qo&1&&e.tag!==0&&St(),i=e.pendingLanes,i&1?e===Qa?ir++:(ir=0,Qa=e):ir=0,Nn(),null}function St(){if(xn!==null){var e=Mc(qo),n=Oe.transition,t=N;try{if(Oe.transition=null,N=16>e?16:e,xn===null)var r=!1;else{if(e=xn,xn=null,qo=0,I&6)throw Error(k(331));var o=I;for(I|=4,P=e.current;P!==null;){var i=P,a=i.child;if(P.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(P=u;P!==null;){var p=P;switch(p.tag){case 0:case 11:case 15:rr(8,p,i)}var h=p.child;if(h!==null)h.return=p,P=h;else for(;P!==null;){p=P;var m=p.sibling,g=p.return;if(Hd(p),p===u){P=null;break}if(m!==null){m.return=g,P=m;break}P=g}}}var y=i.alternate;if(y!==null){var S=y.child;if(S!==null){y.child=null;do{var O=S.sibling;S.sibling=null,S=O}while(S!==null)}}P=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,P=a;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:rr(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,P=d;break e}P=i.return}}var c=e.current;for(P=c;P!==null;){a=P;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,P=f;else e:for(a=c;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ri(9,l)}}catch(R){Z(l,l.return,R)}if(l===a){P=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,P=v;break e}P=l.return}}if(I=o,Nn(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(Jo,e)}catch{}r=!0}return r}finally{N=t,Oe.transition=n}}return!1}function Ru(e,n,t){n=At(t,n),n=Md(e,n,1),e=Pn(e,n,1),n=ge(),e!==null&&(Dr(e,1,n),xe(e,n))}function Z(e,n,t){if(e.tag===3)Ru(e,e,t);else for(;n!==null;){if(n.tag===3){Ru(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_n===null||!_n.has(r))){e=At(t,e),e=Ld(n,e,1),n=Pn(n,e,1),e=ge(),n!==null&&(Dr(n,1,e),xe(n,e));break}}n=n.return}}function Ch(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ge(),e.pingedLanes|=e.suspendedLanes&t,ae===e&&(ue&t)===t&&(re===4||re===3&&(ue&130023424)===ue&&500>Y()-Kl?Kn(e,0):Hl|=t),xe(e,n)}function tf(e,n){n===0&&(e.mode&1?(n=Kr,Kr<<=1,!(Kr&130023424)&&(Kr=4194304)):n=1);var t=ge();e=fn(e,n),e!==null&&(Dr(e,n,t),xe(e,t))}function Ph(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),tf(e,t)}function _h(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(n),tf(e,t)}var rf;rf=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Se.current)be=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return be=!1,gh(e,n,t);be=!!(e.flags&131072)}else be=!1,V&&n.flags&1048576&&ld(n,Do,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;vo(e,n),e=n.pendingProps;var o=jt(n,me.current);bt(n,t),o=$l(null,n,r,e,o,t);var i=ql();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Re(r)?(i=!0,_o(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ml(n),o.updater=ti,n.stateNode=o,o._reactInternals=n,La(n,r,e,t),n=Na(null,n,r,!0,i,t)):(n.tag=0,V&&i&&Cl(n),he(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(vo(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=Dh(r),e=Ue(r,e),o){case 0:n=Ia(null,n,r,e,t);break e;case 1:n=pu(null,n,r,e,t);break e;case 11:n=du(null,n,r,e,t);break e;case 14:n=fu(null,n,r,Ue(r.type,e),t);break e}throw Error(k(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ue(r,o),Ia(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ue(r,o),pu(e,n,r,o,t);case 3:e:{if($d(n),e===null)throw Error(k(387));r=n.pendingProps,i=n.memoizedState,o=i.element,pd(e,n),Mo(n,r,null,t);var a=n.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=At(Error(k(423)),n),n=mu(e,n,r,t,o);break e}else if(r!==o){o=At(Error(k(424)),n),n=mu(e,n,r,t,o);break e}else for(Ce=Cn(n.stateNode.containerInfo.firstChild),Pe=n,V=!0,Be=null,t=dd(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ct(),r===o){n=pn(e,n,t);break e}he(e,n,r,t)}n=n.child}return n;case 5:return md(n),e===null&&Ta(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Ca(r,o)?a=null:i!==null&&Ca(r,i)&&(n.flags|=32),Nd(e,n),he(e,n,a,t),n.child;case 6:return e===null&&Ta(n),null;case 13:return qd(e,n,t);case 4:return Ll(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Pt(n,null,r,t):he(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ue(r,o),du(e,n,r,o,t);case 7:return he(e,n,n.pendingProps,t),n.child;case 8:return he(e,n,n.pendingProps.children,t),n.child;case 12:return he(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,a=o.value,q(To,r._currentValue),r._currentValue=a,i!==null)if(Ke(i.value,a)){if(i.children===o.children&&!Se.current){n=pn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=an(-1,t&-t),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Fa(i.return,t,n),l.lanes|=t;break}s=s.next}}else if(i.tag===10)a=i.type===n.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(k(341));a.lanes|=t,l=a.alternate,l!==null&&(l.lanes|=t),Fa(a,t,n),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===n){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}he(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,bt(n,t),o=Ie(o),r=r(o),n.flags|=1,he(e,n,r,t),n.child;case 14:return r=n.type,o=Ue(r,n.pendingProps),o=Ue(r.type,o),fu(e,n,r,o,t);case 15:return Od(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ue(r,o),vo(e,n),n.tag=1,Re(r)?(e=!0,_o(n)):e=!1,bt(n,t),Fd(n,r,o),La(n,r,o,t),Na(null,n,r,!0,e,t);case 19:return Ud(e,n,t);case 22:return Id(e,n,t)}throw Error(k(156,n.tag))};function of(e,n){return Ac(e,n)}function Ah(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,n,t,r){return new Ah(e,n,t,r)}function Gl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Dh(e){if(typeof e=="function")return Gl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vl)return 11;if(e===gl)return 14}return 2}function Dn(e,n){var t=e.alternate;return t===null?(t=Le(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function yo(e,n,t,r,o,i){var a=2;if(r=e,typeof e=="function")Gl(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case it:return Qn(t.children,o,i,n);case hl:a=8,o|=8;break;case aa:return e=Le(12,t,n,o|2),e.elementType=aa,e.lanes=i,e;case la:return e=Le(13,t,n,o),e.elementType=la,e.lanes=i,e;case sa:return e=Le(19,t,n,o),e.elementType=sa,e.lanes=i,e;case mc:return ii(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fc:a=10;break e;case pc:a=9;break e;case vl:a=11;break e;case gl:a=14;break e;case wn:a=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=Le(a,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function Qn(e,n,t,r){return e=Le(7,e,r,n),e.lanes=t,e}function ii(e,n,t,r){return e=Le(22,e,r,n),e.elementType=mc,e.lanes=t,e.stateNode={isHidden:!1},e}function Vi(e,n,t){return e=Le(6,e,null,n),e.lanes=t,e}function Hi(e,n,t){return n=Le(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Th(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ei(0),this.expirationTimes=Ei(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ei(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Yl(e,n,t,r,o,i,a,l,s){return e=new Th(e,n,t,l,s),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Le(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ml(i),e}function Fh(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ot,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function af(e){if(!e)return Ln;e=e._reactInternals;e:{if(nt(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Re(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(Re(t))return id(e,t,n)}return n}function lf(e,n,t,r,o,i,a,l,s){return e=Yl(t,r,!0,e,o,i,a,l,s),e.context=af(null),t=e.current,r=ge(),o=An(t),i=an(r,o),i.callback=n??null,Pn(t,i,o),e.current.lanes=o,Dr(e,o,r),xe(e,r),e}function ai(e,n,t,r){var o=n.current,i=ge(),a=An(o);return t=af(t),n.context===null?n.context=t:n.pendingContext=t,n=an(i,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Pn(o,n,a),e!==null&&(He(e,o,a,i),po(e,o,a)),a}function Wo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Xl(e,n){xu(e,n),(e=e.alternate)&&xu(e,n)}function Mh(){return null}var sf=typeof reportError=="function"?reportError:function(e){console.error(e)};function es(e){this._internalRoot=e}li.prototype.render=es.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));ai(e,n,null,null)};li.prototype.unmount=es.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Xn(function(){ai(null,e,null,null)}),n[dn]=null}};function li(e){this._internalRoot=e}li.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ic();e={blockedOn:null,target:e,priority:n};for(var t=0;t<kn.length&&n!==0&&n<kn[t].priority;t++);kn.splice(t,0,e),t===0&&$c(e)}};function ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function si(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zu(){}function Lh(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Wo(a);i.call(u)}}var a=lf(n,r,e,0,null,!1,!1,"",zu);return e._reactRootContainer=a,e[dn]=a.current,yr(e.nodeType===8?e.parentNode:e),Xn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=Wo(s);l.call(u)}}var s=Yl(e,0,!1,null,null,!1,!1,"",zu);return e._reactRootContainer=s,e[dn]=s.current,yr(e.nodeType===8?e.parentNode:e),Xn(function(){ai(n,s,t,r)}),s}function ui(e,n,t,r,o){var i=t._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=Wo(a);l.call(s)}}ai(n,a,e,o)}else a=Lh(t,n,e,o,r);return Wo(a)}Lc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Jt(n.pendingLanes);t!==0&&(kl(n,t|1),xe(n,Y()),!(I&6)&&(Dt=Y()+500,Nn()))}break;case 13:Xn(function(){var r=fn(e,1);if(r!==null){var o=ge();He(r,e,1,o)}}),Xl(e,1)}};bl=function(e){if(e.tag===13){var n=fn(e,134217728);if(n!==null){var t=ge();He(n,e,134217728,t)}Xl(e,134217728)}};Oc=function(e){if(e.tag===13){var n=An(e),t=fn(e,n);if(t!==null){var r=ge();He(t,e,n,r)}Xl(e,n)}};Ic=function(){return N};Nc=function(e,n){var t=N;try{return N=e,n()}finally{N=t}};wa=function(e,n,t){switch(n){case"input":if(da(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=Xo(r);if(!o)throw Error(k(90));vc(r),da(r,o)}}}break;case"textarea":wc(e,t);break;case"select":n=t.value,n!=null&&gt(e,!!t.multiple,n,!1)}};zc=Ql;Ec=Xn;var Oh={usingClientEntryPoint:!1,Events:[Fr,ut,Xo,Rc,xc,Ql]},Ht={findFiberByHostInstance:Bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ih={bundleType:Ht.bundleType,version:Ht.version,rendererPackageName:Ht.rendererPackageName,rendererConfig:Ht.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pc(e),e===null?null:e.stateNode},findFiberByHostInstance:Ht.findFiberByHostInstance||Mh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oo.isDisabled&&oo.supportsFiber)try{Jo=oo.inject(Ih),Xe=oo}catch{}}Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Oh;Ae.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ns(n))throw Error(k(200));return Fh(e,n,null,t)};Ae.createRoot=function(e,n){if(!ns(e))throw Error(k(299));var t=!1,r="",o=sf;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=Yl(e,1,!1,null,null,t,!1,r,o),e[dn]=n.current,yr(e.nodeType===8?e.parentNode:e),new es(n)};Ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Pc(n),e=e===null?null:e.stateNode,e};Ae.flushSync=function(e){return Xn(e)};Ae.hydrate=function(e,n,t){if(!si(n))throw Error(k(200));return ui(null,e,n,!0,t)};Ae.hydrateRoot=function(e,n,t){if(!ns(e))throw Error(k(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",a=sf;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=lf(n,null,e,1,t??null,o,!1,i,a),e[dn]=n.current,yr(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new li(n)};Ae.render=function(e,n,t){if(!si(n))throw Error(k(200));return ui(null,e,n,!1,t)};Ae.unmountComponentAtNode=function(e){if(!si(e))throw Error(k(40));return e._reactRootContainer?(Xn(function(){ui(null,null,e,!1,function(){e._reactRootContainer=null,e[dn]=null})}),!0):!1};Ae.unstable_batchedUpdates=Ql;Ae.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!si(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return ui(e,n,t,!1,r)};Ae.version="18.3.1-next-f1338f8080-20240426";function uf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uf)}catch(e){console.error(e)}}uf(),sc.exports=Ae;var Nh=sc.exports,Eu=Nh;oa.createRoot=Eu.createRoot,oa.hydrateRoot=Eu.hydrateRoot;class $h extends ra.Component{constructor(t){super(t);qr(this,"container");qr(this,"player",null);qr(this,"isLoading",!1);this.container=ra.createRef()}componentDidMount(){this.player=window.RufflePlayer.newest().createPlayer(),this.player.id="player",this.player.addEventListener("loadedmetadata",()=>{this.props.onLoadedMetadata&&this.props.onLoadedMetadata(this.player.metadata)}),this.isLoading=!1,this.container.current.appendChild(this.player)}componentWillUnmount(){var t;(t=this.player)==null||t.remove(),this.player=null,this.isLoading=!1}render(){return C.jsx("div",{id:this.props.id,ref:this.container,onDragEnter:this.props.onDragEnter,onDragLeave:this.props.onDragLeave,onDragOver:this.props.onDragOver,onDrop:this.props.onDragDrop,children:this.props.children})}reload(){var t;this.isLoading||(this.isLoading=!0,(t=this.player)==null||t.reload().finally(()=>{this.isLoading=!1}))}loadUrl(t,r){var o;this.isLoading||(this.isLoading=!0,(o=this.player)==null||o.load({url:t,...this.props.baseConfig,...r},!1).finally(()=>{this.isLoading=!1}))}loadFile(t){this.isLoading||(this.isLoading=!0,new Response(t).arrayBuffer().then(r=>{var o;return(o=this.player)==null?void 0:o.load({data:r,...this.props.baseConfig},!1)}).finally(()=>{this.isLoading=!1}))}}const qh=""+new URL("../logo.svg",import.meta.url).href,ju={Animation:"Animations",Game:"Games"};function Uh({sampleSelectionInput:e,selectedSample:n,setSelectedSample:t,setSelectedFilename:r,onSelectUrl:o}){const[i,a]=te.useState([]),l=u=>{const p=u.target,h=parseInt(p.value,10);i[h]&&s(i[h])},s=te.useCallback(u=>{o(u.location,u.config??{}),t(u),r(null)},[o,r,t]);return te.useEffect(()=>{(async()=>{const u=await fetch("swfs.json");if(u.ok){const p=await u.json();a(p.swfs),p.swfs.length>0&&s(p.swfs[0])}})()},[s]),C.jsxs("div",{id:"sample-swfs-container",className:i.length==0?"hidden":"",children:[C.jsx("span",{id:"sample-swfs-label",children:"Sample SWF:"}),C.jsxs("select",{id:"sample-swfs","aria-describedby":"sample-swfs-label",onChange:l,ref:e,children:[i.map((u,p)=>C.jsx(te.Fragment,{children:u.type==null&&C.jsx("option",{value:p,children:u.title})},p)),Object.keys(ju).map(u=>C.jsx("optgroup",{label:ju[u],children:i.map((p,h)=>C.jsx(te.Fragment,{children:p.type==u&&C.jsx("option",{value:h,children:p.title})},h))},u))]}),C.jsxs("div",{id:"author-container",className:n!=null&&n.author?"":"hidden",children:[C.jsx("span",{children:"Author: "}),C.jsx("a",{href:n==null?void 0:n.authorLink,target:"_blank",id:"author",children:n==null?void 0:n.author})]})]})}function Wh({allowUrlLoading:e,allowSampleSwfs:n,onToggleMetadata:t,onReloadMovie:r,onSelectUrl:o,onSelectFile:i,selectedFilename:a,setSelectedFilename:l,onFileDragLeave:s,onFileDragOver:u,onFileDragDrop:p}){const h=te.useRef(null),m=te.useRef(null),g=te.useRef(null),[y,S]=te.useState(null),O=()=>{var x;(x=h.current)==null||x.click()},d=x=>{o(x,{}),l(null),S(null),g.current&&(g.current.selectedIndex=-1)},c=x=>{i(x),S(null),l(x.name),g.current&&(g.current.selectedIndex=-1)},f=x=>{var E;x.preventDefault(),(E=m.current)!=null&&E.value&&d(m.current.value)},v=x=>{const E=x.target;E!=null&&E.files&&(E==null?void 0:E.files.length)>0&&E.files[0]&&c(E.files[0])},R=()=>{confirm("Reload the current SWF?")&&r()},_=navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPhone/i)||navigator.platform==="MacIntel"&&typeof navigator.standalone<"u";return te.useEffect(()=>{a!=null&&(S(null),g.current&&(g.current.selectedIndex=-1))},[a]),C.jsxs("div",{id:"nav",children:[C.jsx("a",{id:"logo-container",href:"https://ruffle.rs/",target:"_blank",children:C.jsx("img",{className:"logo",src:qh,alt:"Ruffle"})}),C.jsxs("div",{className:"select-container",children:[C.jsxs("form",{id:"web-url-container",onSubmit:f,hidden:!e,children:[C.jsx("input",{id:"web-url",name:"web-url",type:"text",placeholder:"URL of a .swf file on the web",ref:m}),C.jsx("button",{id:"web-form-submit",type:"submit",children:"Load"})]}),C.jsxs("div",{id:"local-file-container",onDragLeave:s,onDragOver:u,onDrop:p,children:[C.jsx("span",{id:"local-file-static-label",onClick:O,children:"Local SWF:"}),C.jsx("input",{type:"file",accept:_?void 0:".swf,.spl",id:"local-file","aria-describedby":"local-file-static-label",ref:h,onChange:v}),C.jsx("button",{id:"local-file-label",onClick:O,children:"Select File"}),C.jsx("label",{id:"local-file-name",htmlFor:"local-file",children:a??"No file selected."})]}),n&&C.jsx(Uh,{onSelectUrl:o,selectedSample:y,setSelectedFilename:l,setSelectedSample:S,sampleSelectionInput:g})]}),C.jsxs("div",{children:[C.jsx("svg",{id:"toggle-info",width:"20px",viewBox:"0 0 416.979 416.979",onClick:t,children:C.jsx("path",{fill:"white",d:"M356.004 61.156c-81.37-81.47-213.377-81.551-294.848-.182-81.47 81.371-81.552 213.379-.181 294.85 81.369 81.47 213.378 81.551 294.849.181 81.469-81.369 81.551-213.379.18-294.849zM237.6 340.786a5.821 5.821 0 0 1-5.822 5.822h-46.576a5.821 5.821 0 0 1-5.822-5.822V167.885a5.821 5.821 0 0 1 5.822-5.822h46.576a5.82 5.82 0 0 1 5.822 5.822v172.901zm-29.11-202.885c-18.618 0-33.766-15.146-33.766-33.765 0-18.617 15.147-33.766 33.766-33.766s33.766 15.148 33.766 33.766c0 18.619-15.149 33.765-33.766 33.765z"})}),C.jsx("svg",{id:"reload-swf",width:"20px",viewBox:"0 0 489.711 489.711",onClick:R,children:C.jsx("path",{fill:"white",d:"M112.156 97.111c72.3-65.4 180.5-66.4 253.8-6.7l-58.1 2.2c-7.5.3-13.3 6.5-13 14 .3 7.3 6.3 13 13.5 13h.5l89.2-3.3c7.3-.3 13-6.2 13-13.5v-1.6l-3.3-88.2c-.3-7.5-6.6-13.3-14-13-7.5.3-13.3 6.5-13 14l2.1 55.3c-36.3-29.7-81-46.9-128.8-49.3-59.2-3-116.1 17.3-160 57.1-60.4 54.7-86 137.9-66.8 217.1 1.5 6.2 7 10.3 13.1 10.3 1.1 0 2.1-.1 3.2-.4 7.2-1.8 11.7-9.1 9.9-16.3-16.8-69.6 5.6-142.7 58.7-190.7zm350.3 98.4c-1.8-7.2-9.1-11.7-16.3-9.9-7.2 1.8-11.7 9.1-9.9 16.3 16.9 69.6-5.6 142.7-58.7 190.7-37.3 33.7-84.1 50.3-130.7 50.3-44.5 0-88.9-15.1-124.7-44.9l58.8-5.3c7.4-.7 12.9-7.2 12.2-14.7s-7.2-12.9-14.7-12.2l-88.9 8c-7.4.7-12.9 7.2-12.2 14.7l8 88.9c.6 7 6.5 12.3 13.4 12.3.4 0 .8 0 1.2-.1 7.4-.7 12.9-7.2 12.2-14.7l-4.8-54.1c36.3 29.4 80.8 46.5 128.3 48.9 3.8.2 7.6.3 11.3.3 55.1 0 107.5-20.2 148.7-57.4 60.4-54.7 86-137.8 66.8-217.1z"})})]})]})}const Bh={1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9.0",10:"10.0/10.1",11:"10.2",12:"10.3",13:"11.0",14:"11.1",15:"11.2",16:"11.3",17:"11.4",18:"11.5",19:"11.6",20:"11.7",21:"11.8",22:"11.9",23:"12",24:"13",25:"14",26:"15",27:"16",28:"17",29:"18",30:"19",31:"20",32:"21",33:"22",34:"23",35:"24",36:"25",37:"26",38:"27",39:"28",40:"29",41:"30",42:"31",43:"32"};function Vh({visible:e,metadata:n}){return C.jsxs("div",{id:"info-container",className:e?"":"hidden",children:[C.jsxs("div",{children:[C.jsx("span",{children:"Uncompressed Length"}),C.jsxs("span",{id:"uncompressedLength",children:[((n==null?void 0:n.uncompressedLength)??0)>>10,"Kb"]})]}),C.jsxs("div",{children:[C.jsx("span",{children:"SWF Version"}),C.jsx("span",{id:"swfVersion",children:n==null?void 0:n.swfVersion})]}),C.jsxs("div",{children:[C.jsx("span",{children:"FP Version"}),C.jsx("span",{id:"flashVersion",children:n?Bh[n.swfVersion]??"Unknown":""})]}),C.jsxs("div",{children:[C.jsx("span",{children:"ActionScript 3"}),C.jsx("span",{id:"isActionScript3",children:n!=null&&n.isActionScript3?"true":"false"})]}),C.jsxs("div",{children:[C.jsx("span",{children:"Total Frames"}),C.jsx("span",{id:"numFrames",children:n==null?void 0:n.numFrames})]}),C.jsxs("div",{children:[C.jsx("span",{children:"Frame Rate"}),C.jsx("span",{id:"frameRate",children:n==null?void 0:n.frameRate})]}),C.jsxs("div",{children:[C.jsx("span",{children:"SWF Width"}),C.jsx("span",{id:"width",children:n==null?void 0:n.width})]}),C.jsxs("div",{children:[C.jsx("span",{children:"SWF Height"}),C.jsx("span",{id:"height",children:n==null?void 0:n.height})]}),C.jsxs("div",{children:[C.jsx("span",{children:"SWF Background Color"}),C.jsx("span",{id:"backgroundColor",style:{backgroundColor:(n==null?void 0:n.backgroundColor)??void 0}})]})]})}function Hh({ruffleBaseConfig:e,allowUrlLoading:n,allowSampleSwfs:t}){const[r,o]=te.useState(null),[i,a]=te.useState(!1),[l,s]=te.useState(null),[u,p]=te.useState(!1),h=te.useRef(null),m=()=>{a(!i)},g=()=>{var v;(v=h.current)==null||v.reload()},y=te.useCallback((v,R)=>{var _;(_=h.current)==null||_.loadUrl(v,R)},[]),S=v=>{var R;(R=h.current)==null||R.loadFile(v)},O=v=>{v.stopPropagation(),v.preventDefault()},d=v=>{v.stopPropagation(),v.preventDefault(),p(!1)},c=v=>{v.stopPropagation(),v.preventDefault(),p(!0)},f=v=>{var R;v.stopPropagation(),v.preventDefault(),p(!1),v.dataTransfer&&(s(v.dataTransfer.files[0].name),(R=h.current)==null||R.loadFile(v.dataTransfer.files[0]))};return C.jsxs(C.Fragment,{children:[C.jsx(Wh,{allowUrlLoading:n,allowSampleSwfs:t,onToggleMetadata:m,onReloadMovie:g,onSelectUrl:y,onSelectFile:S,selectedFilename:l,setSelectedFilename:s,onFileDragLeave:d,onFileDragOver:c,onFileDragDrop:f}),C.jsxs("div",{id:"main",className:i?"info-container-shown":"",children:[C.jsx($h,{id:"player-container","aria-label":"Select a demo or drag an SWF",onLoadedMetadata:o,ref:h,onDragEnter:O,onDragLeave:d,onDragOver:c,onDragDrop:f,baseConfig:e,children:C.jsx("div",{id:"overlay",className:u?"drag":""})}),C.jsx(Vh,{visible:i,metadata:r})]})]})}var ln={},Lr={},cf={},df={};Object.defineProperty(df,"__esModule",{value:!0});var ff={};Object.defineProperty(ff,"__esModule",{value:!0});var pf={};Object.defineProperty(pf,"__esModule",{value:!0});var mf={};Object.defineProperty(mf,"__esModule",{value:!0});var hf={};Object.defineProperty(hf,"__esModule",{value:!0});var ci={};Object.defineProperty(ci,"__esModule",{value:!0});ci.classnames=void 0;const Kh=e=>Object.entries(e).map(([n,t])=>t&&n),Cu=e=>!!e,Qh=(e,n,t)=>t.indexOf(e)===n,Jh=[];function vf(e){return e?typeof e=="string"?[e]:Array.isArray(e)?e.flatMap(vf).filter(Cu):Kh(e).filter(Cu):Jh}function Zh(e){const n=vf(e).filter(Qh);return n.length>0?n.join(" "):void 0}ci.classnames=Zh;(function(e){var n=Sn&&Sn.__createBinding||(Object.create?function(r,o,i,a){a===void 0&&(a=i);var l=Object.getOwnPropertyDescriptor(o,i);(!l||("get"in l?!o.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return o[i]}}),Object.defineProperty(r,a,l)}:function(r,o,i,a){a===void 0&&(a=i),r[a]=o[i]}),t=Sn&&Sn.__exportStar||function(r,o){for(var i in r)i!=="default"&&!Object.prototype.hasOwnProperty.call(o,i)&&n(o,r,i)};Object.defineProperty(e,"__esModule",{value:!0}),t(df,e),t(ff,e),t(pf,e),t(mf,e),t(hf,e),t(ci,e)})(cf);Object.defineProperty(Lr,"__esModule",{value:!0});Lr.setAttributes=void 0;const Gh=cf;function Yh(e,n){for(const t of Object.keys(e))t in n&&(n[t]=e[t])}const Xh=new RegExp("^on\\p{Lu}","u");function ev(e,n){for(const t of Object.keys(n)){if(t==="__source"||t==="__self"||t==="tsxTag")continue;const r=n[t];if(t==="class"){const o=(0,Gh.classnames)(r);o&&e.setAttribute(t,o)}else if(t==="ref")r.current=e;else if(Xh.test(t)){const o=t.replace(/Capture$/,""),i=t!==o,a=o.toLowerCase().substring(2);e.addEventListener(a,r,i)}else t==="style"&&typeof r!="string"?Yh(r,e.style):t==="dangerouslySetInnerHTML"?e.innerHTML=r:r===!0?e.setAttribute(t,t):(r||r===0)&&e.setAttribute(t,r.toString())}}Lr.setAttributes=ev;var sn={};Object.defineProperty(sn,"__esModule",{value:!0});sn.applyTsxTag=sn.createDomElement=sn.applyChildren=void 0;function nv(e,n){n instanceof Element?e.appendChild(n):typeof n=="string"||typeof n=="number"?e.appendChild(document.createTextNode(n.toString())):console.warn("Unknown type to append: ",n)}function gf(e,n){for(const t of n)!t&&t!==0||(Array.isArray(t)?gf(e,t):nv(e,t))}sn.applyChildren=gf;function tv(e,n){const t=n!=null&&n.is?{is:n.is}:void 0;return n!=null&&n.xmlns?document.createElementNS(n.xmlns,e,t):document.createElement(e,t)}sn.createDomElement=tv;function rv(e,n){let t=e,r=n;return r&&"tsxTag"in r&&(t=r.tsxTag,!r.is&&e.includes("-")&&(r={...r,is:e})),{finalTag:t,finalAttrs:r}}sn.applyTsxTag=rv;Object.defineProperty(ln,"__esModule",{value:!0});ln.jsxDEV=wf=ln.jsxs=ve=ln.jsx=void 0;const ov=Lr,Ki=sn;function ts(e,n){if(typeof e=="function")return e(n);const{children:t,...r}=n,{finalTag:o,finalAttrs:i}=(0,Ki.applyTsxTag)(e,r),a=(0,Ki.createDomElement)(o,i);return(0,ov.setAttributes)(a,i),(0,Ki.applyChildren)(a,[t]),a}var ve=ln.jsx=ts,wf=ln.jsxs=ts;ln.jsxDEV=ts;const iv="modulepreload",av=function(e,n){return new URL(e,n).href},Pu={},_u=function(n,t,r){let o=Promise.resolve();if(t&&t.length>0){const i=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.all(t.map(s=>{if(s=av(s,r),s in Pu)return;Pu[s]=!0;const u=s.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(!!r)for(let g=i.length-1;g>=0;g--){const y=i[g];if(y.href===s&&(!u||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${p}`))return;const m=document.createElement("link");if(m.rel=u?"stylesheet":iv,u||(m.as="script",m.crossOrigin=""),m.href=s,l&&m.setAttribute("nonce",l),document.head.appendChild(m),u)return new Promise((g,y)=>{m.addEventListener("load",g),m.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${s}`)))})}))}return o.then(()=>n()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},lv=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,14,1,12,0,65,0,65,0,65,0,252,10,0,0,11])),sv=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,7,1,5,0,208,112,26,11])),uv=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,12,1,10,0,67,0,0,0,0,252,0,26,11])),cv=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,65,0,192,26,11])),dv=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]));function fv(){Object.defineProperty(Array.prototype,"reduce",{value(...e){if(e.length===0&&window.Prototype&&window.Prototype.Version&&window.Prototype.Version<"1.6.1")return this.length>1?this:this[0];const n=e[0];if(this===null)throw new TypeError("Array.prototype.reduce called on null or undefined");if(typeof n!="function")throw new TypeError(`${n} is not a function`);const t=Object(this),r=t.length>>>0;let o=0,i;if(e.length>=2)i=e[1];else{for(;o<r&&!(o in t);)o++;if(o>=r)throw new TypeError("Reduce of empty array with no initial value");i=t[o++]}for(;o<r;)o in t&&(i=n(i,t[o],o,t)),o++;return i}})}function pv(){typeof window.constructor!="function"||!Ga(window.constructor)||(window.Window=window.constructor)}function mv(){(window.Reflect===void 0||window.Reflect===null)&&(window.Reflect={}),typeof Reflect.get!="function"&&Object.defineProperty(Reflect,"get",{value(e,n){return e[n]}}),typeof Reflect.set!="function"&&Object.defineProperty(Reflect,"set",{value(e,n,t){e[n]=t}}),typeof Reflect.has!="function"&&Object.defineProperty(Reflect,"has",{value(e,n){return n in e}}),typeof Reflect.ownKeys!="function"&&Object.defineProperty(Reflect,"ownKeys",{value(e){return[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)]}})}function Ga(e){const n=typeof Function.prototype.toString=="function"?Function.prototype.toString():null;return typeof n=="string"&&n.indexOf("[native code]")>=0?Function.prototype.toString.call(e).indexOf("[native code]")>=0:!1}function hv(){(typeof Array.prototype.reduce!="function"||!Ga(Array.prototype.reduce))&&fv(),(typeof Window!="function"||!Ga(Window))&&pv(),mv()}const vv=999,Ya={};function gv(e){const n=Ya[e];return n!==void 0?{internalName:e,name:n.name,class:n.class}:null}function rs(e,n){const t=Ya[e];if(t!==void 0){if(t.class!==n)throw new Error("Internal naming conflict on "+e);return t.name}let r=0;if(window.customElements!==void 0)for(;r<vv;){let o=e;if(r>0&&(o=o+"-"+r),window.customElements.get(o)!==void 0){r+=1;continue}else window.customElements.define(o,n);return Ya[e]={class:n,name:o,internalName:e},o}throw new Error("Failed to assign custom element "+e)}const Te={versionNumber:"0.1.0",versionName:"nightly 2024-07-17",versionChannel:"nightly",buildDate:"2024-07-17T19:16:54.463Z",commitHash:"5ae33f26adca52ca7296b1e557f7df0b7ff192df"},ar={version:Te.versionNumber+"+"+Te.buildDate.substring(0,10),polyfill(){uw()},pluginPolyfill(){sw()},createPlayer(){const e=rs("ruffle-player",Ye);return document.createElement(e)},options:{}};async function wv(e){var u,p,h;hv();const n=(await Promise.all([lv(),dv(),uv(),cv(),sv()])).every(Boolean);n||console.log("Some WebAssembly extensions are NOT available, falling back to the vanilla WebAssembly module"),(p=(u=ar.options).onFirstLoad)==null||p.call(u),ar.options.onFirstLoad=()=>{};const{default:t,RuffleInstanceBuilder:r,ZipWriter:o}=await(n?_u(()=>import("./ruffle_web-wasm_extensions-DRUHr_of.js"),__vite__mapDeps([0,1]),import.meta.url):_u(()=>import("./ruffle_web-DRUHr_of.js"),__vite__mapDeps([2,1]),import.meta.url));let i;const a=n?new URL(""+new URL("ruffle_web_bg-GP-fRWSu.wasm",import.meta.url).href,import.meta.url):new URL(""+new URL("ruffle_web_bg-GP-fRWSu.wasm",import.meta.url).href,import.meta.url),l=await fetch(a);if(e&&typeof ReadableStreamDefaultController=="function"){const m=((h=l==null?void 0:l.headers)==null?void 0:h.get("content-length"))||"";let g=0;const y=parseInt(m);i=new Response(new ReadableStream({async start(S){var d;const O=(d=l.body)==null?void 0:d.getReader();if(!O)throw"Response had no body";for(e(g,y);;){const{done:c,value:f}=await O.read();if(c)break;f!=null&&f.byteLength&&(g+=f==null?void 0:f.byteLength),S.enqueue(f),e(g,y)}S.close()}}),l)}else i=l;return await t(i),[r,o]}let Qi=null;async function yv(e){Qi===null&&(Qi=wv(e));const n=await Qi;return[new n[0],()=>new n[1]]}class di{constructor(n){this.value=n}valueOf(){return this.value}}class ee extends di{constructor(n="???"){super(n)}toString(n){return`{${this.value}}`}}class un extends di{constructor(n,t={}){super(n),this.opts=t}toString(n){try{return n.memoizeIntlObject(Intl.NumberFormat,this.opts).format(this.value)}catch(t){return n.reportError(t),this.value.toString(10)}}}class lr extends di{constructor(n,t={}){super(n),this.opts=t}toString(n){try{return n.memoizeIntlObject(Intl.DateTimeFormat,this.opts).format(this.value)}catch(t){return n.reportError(t),new Date(this.value).toISOString()}}}const Au=100,kv="⁨",bv="⁩";function Sv(e,n,t){if(t===n||t instanceof un&&n instanceof un&&t.value===n.value)return!0;if(n instanceof un&&typeof t=="string"){let r=e.memoizeIntlObject(Intl.PluralRules,n.opts).select(n.value);if(t===r)return!0}return!1}function Du(e,n,t){return n[t]?Tt(e,n[t].value):(e.reportError(new RangeError("No default")),new ee)}function Xa(e,n){const t=[],r=Object.create(null);for(const o of n)o.type==="narg"?r[o.name]=Cr(e,o.value):t.push(Cr(e,o));return{positional:t,named:r}}function Cr(e,n){switch(n.type){case"str":return n.value;case"num":return new un(n.value,{minimumFractionDigits:n.precision});case"var":return Rv(e,n);case"mesg":return xv(e,n);case"term":return zv(e,n);case"func":return Ev(e,n);case"select":return jv(e,n);default:return new ee}}function Rv(e,{name:n}){let t;if(e.params)if(Object.prototype.hasOwnProperty.call(e.params,n))t=e.params[n];else return new ee(`$${n}`);else if(e.args&&Object.prototype.hasOwnProperty.call(e.args,n))t=e.args[n];else return e.reportError(new ReferenceError(`Unknown variable: $${n}`)),new ee(`$${n}`);if(t instanceof di)return t;switch(typeof t){case"string":return t;case"number":return new un(t);case"object":if(t instanceof Date)return new lr(t.getTime());default:return e.reportError(new TypeError(`Variable type not supported: $${n}, ${typeof t}`)),new ee(`$${n}`)}}function xv(e,{name:n,attr:t}){const r=e.bundle._messages.get(n);if(!r)return e.reportError(new ReferenceError(`Unknown message: ${n}`)),new ee(n);if(t){const o=r.attributes[t];return o?Tt(e,o):(e.reportError(new ReferenceError(`Unknown attribute: ${t}`)),new ee(`${n}.${t}`))}return r.value?Tt(e,r.value):(e.reportError(new ReferenceError(`No value: ${n}`)),new ee(n))}function zv(e,{name:n,attr:t,args:r}){const o=`-${n}`,i=e.bundle._terms.get(o);if(!i)return e.reportError(new ReferenceError(`Unknown term: ${o}`)),new ee(o);if(t){const l=i.attributes[t];if(l){e.params=Xa(e,r).named;const s=Tt(e,l);return e.params=null,s}return e.reportError(new ReferenceError(`Unknown attribute: ${t}`)),new ee(`${o}.${t}`)}e.params=Xa(e,r).named;const a=Tt(e,i.value);return e.params=null,a}function Ev(e,{name:n,args:t}){let r=e.bundle._functions[n];if(!r)return e.reportError(new ReferenceError(`Unknown function: ${n}()`)),new ee(`${n}()`);if(typeof r!="function")return e.reportError(new TypeError(`Function ${n}() is not callable`)),new ee(`${n}()`);try{let o=Xa(e,t);return r(o.positional,o.named)}catch(o){return e.reportError(o),new ee(`${n}()`)}}function jv(e,{selector:n,variants:t,star:r}){let o=Cr(e,n);if(o instanceof ee)return Du(e,t,r);for(const i of t){const a=Cr(e,i.key);if(Sv(e,o,a))return Tt(e,i.value)}return Du(e,t,r)}function yf(e,n){if(e.dirty.has(n))return e.reportError(new RangeError("Cyclic reference")),new ee;e.dirty.add(n);const t=[],r=e.bundle._useIsolating&&n.length>1;for(const o of n){if(typeof o=="string"){t.push(e.bundle._transform(o));continue}if(e.placeables++,e.placeables>Au)throw e.dirty.delete(n),new RangeError(`Too many placeables expanded: ${e.placeables}, max allowed is ${Au}`);r&&t.push(kv),t.push(Cr(e,o).toString(e)),r&&t.push(bv)}return e.dirty.delete(n),t.join("")}function Tt(e,n){return typeof n=="string"?e.bundle._transform(n):yf(e,n)}class Cv{constructor(n,t,r){this.dirty=new WeakSet,this.params=null,this.placeables=0,this.bundle=n,this.errors=t,this.args=r}reportError(n){if(!this.errors||!(n instanceof Error))throw n;this.errors.push(n)}memoizeIntlObject(n,t){let r=this.bundle._intls.get(n);r||(r={},this.bundle._intls.set(n,r));let o=JSON.stringify(t);return r[o]||(r[o]=new n(this.bundle.locales,t)),r[o]}}function Bo(e,n){const t=Object.create(null);for(const[r,o]of Object.entries(e))n.includes(r)&&(t[r]=o.valueOf());return t}const Tu=["unitDisplay","currencyDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"];function Pv(e,n){let t=e[0];if(t instanceof ee)return new ee(`NUMBER(${t.valueOf()})`);if(t instanceof un)return new un(t.valueOf(),{...t.opts,...Bo(n,Tu)});if(t instanceof lr)return new un(t.valueOf(),{...Bo(n,Tu)});throw new TypeError("Invalid argument to NUMBER")}const Fu=["dateStyle","timeStyle","fractionalSecondDigits","dayPeriod","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName"];function _v(e,n){let t=e[0];if(t instanceof ee)return new ee(`DATETIME(${t.valueOf()})`);if(t instanceof lr)return new lr(t.valueOf(),{...t.opts,...Bo(n,Fu)});if(t instanceof un)return new lr(t.valueOf(),{...Bo(n,Fu)});throw new TypeError("Invalid argument to DATETIME")}const Mu=new Map;function Av(e){const n=Array.isArray(e)?e.join(" "):e;let t=Mu.get(n);return t===void 0&&(t=new Map,Mu.set(n,t)),t}class Dv{constructor(n,{functions:t,useIsolating:r=!0,transform:o=i=>i}={}){this._terms=new Map,this._messages=new Map,this.locales=Array.isArray(n)?n:[n],this._functions={NUMBER:Pv,DATETIME:_v,...t},this._useIsolating=r,this._transform=o,this._intls=Av(n)}hasMessage(n){return this._messages.has(n)}getMessage(n){return this._messages.get(n)}addResource(n,{allowOverrides:t=!1}={}){const r=[];for(let o=0;o<n.body.length;o++){let i=n.body[o];if(i.id.startsWith("-")){if(t===!1&&this._terms.has(i.id)){r.push(new Error(`Attempt to override an existing term: "${i.id}"`));continue}this._terms.set(i.id,i)}else{if(t===!1&&this._messages.has(i.id)){r.push(new Error(`Attempt to override an existing message: "${i.id}"`));continue}this._messages.set(i.id,i)}}return r}formatPattern(n,t=null,r=null){if(typeof n=="string")return this._transform(n);let o=new Cv(this,r,t);try{return yf(o,n).toString(o)}catch(i){if(o.errors&&i instanceof Error)return o.errors.push(i),new ee().toString(o);throw i}}}const Ji=/^(-?[a-zA-Z][\w-]*) *= */gm,Lu=/\.([a-zA-Z][\w-]*) *= */y,Tv=/\*?\[/y,Zi=/(-?[0-9]+(?:\.([0-9]+))?)/y,Fv=/([a-zA-Z][\w-]*)/y,Ou=/([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y,Mv=/^[A-Z][A-Z0-9_-]*$/,io=/([^{}\n\r]+)/y,Lv=/([^\\"\n\r]*)/y,Iu=/\\([\\"])/y,Nu=/\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y,Ov=/^\n+/,$u=/ +$/,Iv=/ *\r?\n/g,Nv=/( *)$/,$v=/{\s*/y,qu=/\s*}/y,qv=/\[\s*/y,Uv=/\s*] */y,Wv=/\s*\(\s*/y,Bv=/\s*->\s*/y,Vv=/\s*:\s*/y,Hv=/\s*,?\s*/y,Kv=/\s+/y;class Qv{constructor(n){this.body=[],Ji.lastIndex=0;let t=0;for(;;){let w=Ji.exec(n);if(w===null)break;t=Ji.lastIndex;try{this.body.push(s(w[1]))}catch(b){if(b instanceof SyntaxError)continue;throw b}}function r(w){return w.lastIndex=t,w.test(n)}function o(w,b){if(n[t]===w)return t++,!0;if(b)throw new b(`Expected ${w}`);return!1}function i(w,b){if(r(w))return t=w.lastIndex,!0;if(b)throw new b(`Expected ${w.toString()}`);return!1}function a(w){w.lastIndex=t;let b=w.exec(n);if(b===null)throw new SyntaxError(`Expected ${w.toString()}`);return t=w.lastIndex,b}function l(w){return a(w)[1]}function s(w){let b=p(),M=u();if(b===null&&Object.keys(M).length===0)throw new SyntaxError("Expected message value or attributes");return{id:w,value:b,attributes:M}}function u(){let w=Object.create(null);for(;r(Lu);){let b=l(Lu),M=p();if(M===null)throw new SyntaxError("Expected attribute value");w[b]=M}return w}function p(){let w;if(r(io)&&(w=l(io)),n[t]==="{"||n[t]==="}")return h(w?[w]:[],1/0);let b=_();return b?w?h([w,b],b.length):(b.value=x(b.value,Ov),h([b],b.length)):w?x(w,$u):null}function h(w=[],b){for(;;){if(r(io)){w.push(l(io));continue}if(n[t]==="{"){w.push(m());continue}if(n[t]==="}")throw new SyntaxError("Unbalanced closing brace");let Ee=_();if(Ee){w.push(Ee),b=Math.min(b,Ee.length);continue}break}let M=w.length-1,ze=w[M];typeof ze=="string"&&(w[M]=x(ze,$u));let $e=[];for(let Ee of w)Ee instanceof Uu&&(Ee=Ee.value.slice(0,Ee.value.length-b)),Ee&&$e.push(Ee);return $e}function m(){i($v,SyntaxError);let w=g();if(i(qu))return w;if(i(Bv)){let b=O();return i(qu,SyntaxError),{type:"select",selector:w,...b}}throw new SyntaxError("Unclosed placeable")}function g(){if(n[t]==="{")return m();if(r(Ou)){let[,w,b,M=null]=a(Ou);if(w==="$")return{type:"var",name:b};if(i(Wv)){let ze=y();if(w==="-")return{type:"term",name:b,attr:M,args:ze};if(Mv.test(b))return{type:"func",name:b,args:ze};throw new SyntaxError("Function names must be all upper-case")}return w==="-"?{type:"term",name:b,attr:M,args:[]}:{type:"mesg",name:b,attr:M}}return c()}function y(){let w=[];for(;;){switch(n[t]){case")":return t++,w;case void 0:throw new SyntaxError("Unclosed argument list")}w.push(S()),i(Hv)}}function S(){let w=g();return w.type!=="mesg"?w:i(Vv)?{type:"narg",name:w.name,value:c()}:w}function O(){let w=[],b=0,M;for(;r(Tv);){o("*")&&(M=b);let ze=d(),$e=p();if($e===null)throw new SyntaxError("Expected variant value");w[b++]={key:ze,value:$e}}if(b===0)return null;if(M===void 0)throw new SyntaxError("Expected default variant");return{variants:w,star:M}}function d(){i(qv,SyntaxError);let w;return r(Zi)?w=f():w={type:"str",value:l(Fv)},i(Uv,SyntaxError),w}function c(){if(r(Zi))return f();if(n[t]==='"')return v();throw new SyntaxError("Invalid expression")}function f(){let[,w,b=""]=a(Zi),M=b.length;return{type:"num",value:parseFloat(w),precision:M}}function v(){o('"',SyntaxError);let w="";for(;;){if(w+=l(Lv),n[t]==="\\"){w+=R();continue}if(o('"'))return{type:"str",value:w};throw new SyntaxError("Unclosed string literal")}}function R(){if(r(Iu))return l(Iu);if(r(Nu)){let[,w,b]=a(Nu),M=parseInt(w||b,16);return M<=55295||57344<=M?String.fromCodePoint(M):"�"}throw new SyntaxError("Unknown escape sequence")}function _(){let w=t;switch(i(Kv),n[t]){case".":case"[":case"*":case"}":case void 0:return!1;case"{":return E(n.slice(w,t))}return n[t-1]===" "?E(n.slice(w,t)):!1}function x(w,b){return w.replace(b,"")}function E(w){let b=w.replace(Iv,`
`),M=Nv.exec(w)[1].length;return new Uu(b,M)}}}class Uu{constructor(n,t){this.value=n,this.length=t}}const Jv="([a-z]{2,3}|\\*)",Zv="(?:-([a-z]{4}|\\*))",Gv="(?:-([a-z]{2}|\\*))",Yv="(?:-(([0-9][a-z0-9]{3}|[a-z0-9]{5,8})|\\*))",Xv=new RegExp(`^${Jv}${Zv}?${Gv}?${Yv}?$`,"i");class sr{constructor(n){const t=Xv.exec(n.replace(/_/g,"-"));if(!t){this.isWellFormed=!1;return}let[,r,o,i,a]=t;r&&(this.language=r.toLowerCase()),o&&(this.script=o[0].toUpperCase()+o.slice(1)),i&&(this.region=i.toUpperCase()),this.variant=a,this.isWellFormed=!0}isEqual(n){return this.language===n.language&&this.script===n.script&&this.region===n.region&&this.variant===n.variant}matches(n,t=!1,r=!1){return(this.language===n.language||t&&this.language===void 0||r&&n.language===void 0)&&(this.script===n.script||t&&this.script===void 0||r&&n.script===void 0)&&(this.region===n.region||t&&this.region===void 0||r&&n.region===void 0)&&(this.variant===n.variant||t&&this.variant===void 0||r&&n.variant===void 0)}toString(){return[this.language,this.script,this.region,this.variant].filter(n=>n!==void 0).join("-")}clearVariants(){this.variant=void 0}clearRegion(){this.region=void 0}addLikelySubtags(){const n=ng(this.toString().toLowerCase());return n?(this.language=n.language,this.script=n.script,this.region=n.region,this.variant=n.variant,!0):!1}}const Wu={ar:"ar-arab-eg","az-arab":"az-arab-ir","az-ir":"az-arab-ir",be:"be-cyrl-by",da:"da-latn-dk",el:"el-grek-gr",en:"en-latn-us",fa:"fa-arab-ir",ja:"ja-jpan-jp",ko:"ko-kore-kr",pt:"pt-latn-br",sr:"sr-cyrl-rs","sr-ru":"sr-latn-ru",sv:"sv-latn-se",ta:"ta-taml-in",uk:"uk-cyrl-ua",zh:"zh-hans-cn","zh-hant":"zh-hant-tw","zh-hk":"zh-hant-hk","zh-mo":"zh-hant-mo","zh-tw":"zh-hant-tw","zh-gb":"zh-hant-gb","zh-us":"zh-hant-us"},eg=["az","bg","cs","de","es","fi","fr","hu","it","lt","lv","nl","pl","ro","ru"];function ng(e){if(Object.prototype.hasOwnProperty.call(Wu,e))return new sr(Wu[e]);const n=new sr(e);return n.language&&eg.includes(n.language)?(n.region=n.language.toUpperCase(),n):null}function tg(e,n,t){const r=new Set,o=new Map;for(let i of n)new sr(i).isWellFormed&&o.set(i,new sr(i));e:for(const i of e){const a=i.toLowerCase(),l=new sr(a);if(l.language!==void 0){for(const s of o.keys())if(a===s.toLowerCase()){if(r.add(s),o.delete(s),t==="lookup")return Array.from(r);if(t==="filtering")continue;continue e}for(const[s,u]of o.entries())if(u.matches(l,!0,!1)){if(r.add(s),o.delete(s),t==="lookup")return Array.from(r);if(t==="filtering")continue;continue e}if(l.addLikelySubtags()){for(const[s,u]of o.entries())if(u.matches(l,!0,!1)){if(r.add(s),o.delete(s),t==="lookup")return Array.from(r);if(t==="filtering")continue;continue e}}l.clearVariants();for(const[s,u]of o.entries())if(u.matches(l,!0,!0)){if(r.add(s),o.delete(s),t==="lookup")return Array.from(r);if(t==="filtering")continue;continue e}if(l.clearRegion(),l.addLikelySubtags()){for(const[s,u]of o.entries())if(u.matches(l,!0,!1)){if(r.add(s),o.delete(s),t==="lookup")return Array.from(r);if(t==="filtering")continue;continue e}}l.clearRegion();for(const[s,u]of o.entries())if(u.matches(l,!0,!0)){if(r.add(s),o.delete(s),t==="lookup")return Array.from(r);if(t==="filtering")continue;continue e}}}return Array.from(r)}function rg(e,n,{strategy:t="filtering",defaultLocale:r}={}){const o=tg(Array.from(e??[]).map(String),Array.from(n??[]).map(String),t);if(t==="lookup"){if(r===void 0)throw new Error("defaultLocale cannot be undefined for strategy `lookup`");o.length===0&&o.push(r)}else r&&!o.includes(r)&&o.push(r);return o}const og={"ar-SA":{"context_menu.ftl":`context-menu-download-swf = تحميل .swf
context-menu-copy-debug-info = نسخ معلومات التصحيح
context-menu-open-save-manager = فتح مدير الحفظ
context-menu-about-ruffle =
    { $flavor ->
        [extension] حول ملحق Ruffle ({ $version })
       *[other] حول Ruffle ({ $version })
    }
context-menu-hide = إخفاء هذه القائمة
context-menu-exit-fullscreen = الخروج من وضعية الشاشة الكاملة
context-menu-enter-fullscreen = تفعيل وضعية الشاشة الكاملة
context-menu-volume-controls = التحكم بالصوت
`,"messages.ftl":`message-cant-embed =
    لم يكن Ruffle قادر على تشغيل الفلاش المضمنة في هذه الصفحة.
    يمكنك محاولة فتح الملف في علامة تبويب منفصلة لتجاوز هذه المشكلة.
panic-title = لقد حدث خطأ ما :(
more-info = معلومات أكثر
run-anyway = التشغيل على أي حال
continue = الاستمرار
report-bug = إبلاغ عن خلل
update-ruffle = تحديث رفل
ruffle-demo = ويب التجريبي
ruffle-desktop = برنامج سطح المكتب
ruffle-wiki = عرض ويكي Ruffle
enable-hardware-acceleration = يبدو أن تسريع الجهاز معطل. على الرغم من أن Ruffle قد يعمل، إلا أنه قد يكون بطيئًا جدًا. يمكنك معرفة كيفية تمكين تسريع الأجهزة باتباع الرابط أدناه:
enable-hardware-acceleration-link = الأسئلة الشائعة - تسريع أجهزة Chrome
view-error-details = عرض تفاصيل الخطأ
open-in-new-tab = فتح في علامة تبويب جديدة
click-to-unmute = انقر لإلغاء الكتم
clipboard-message-title = النسخ واللصق في Ruffle
clipboard-message-description =
    {$variant ->
       *[unsupported] متصفحك لا يدعم الوصول للحافظة الكاملة،
        [access-denied] تم رفض الوصول للحافظة،
    } لكن يمكنك إستخدام هذه الاختصارات دائمًا:
clipboard-message-copy = { " " } للنسخ
clipboard-message-cut = { " " } للقص
clipboard-message-paste = { " " } للصق
error-file-protocol =
    يبدو أنك تقوم بتشغيل Ruffle على بروتوكول "الملف:".
    هذا لن يعمل لأن المتصفحات تمنع العديد من الميزات من العمل لأسباب أمنية.
    بدلاً من ذلك، ندعوك إلى إعداد خادم محلي أو استخدام عرض الويب أو تطبيق سطح المكتب.
error-javascript-config =
    تعرض Ruffle إلى مشكلة كبيرة بسبب الإعدادات الخاطئة للجافا سكريبت.
    إذا كنت مسؤول الخادم، نحن ندعوك إلى التحقق من تفاصيل الخطأ لمعرفة سبب المشكلة.
    يمكنك أيضا الرجوع إلى ويكي Ruffle للحصول على المساعدة.
error-wasm-not-found =
    فشل Ruffle في تحميل مكون الملف ".wasm" المطلوب.
    إذا كنت مسؤول الخادم، يرجى التأكد من أن الملف قد تم تحميله بشكل صحيح.
    إذا استمرت المشكلة، قد تحتاج إلى استخدام إعدادات "المسار العام": الرجاء مراجعة ويكي Ruffle للحصول على المساعدة.
error-wasm-mime-type =
    واجه Ruffle مشكلة كبيرة أثناء محاولة التهيئة.
    خادم الويب هذا لا يخدم ملفات ". wasm" مع نوع MIME الصحيح.
    إذا كنت مسؤول الخادم، يرجى مراجعة ويكي Ruffle للحصول على المساعدة.
error-invalid-swf =
    لا يمكن لـ Ruffle تحليل الملف المطلوب.
    السبب الأكثر إحتمالاً هو أن الملف المطلوب ليس صالحا.
error-swf-fetch =
    فشل Ruffle في تحميل ملف فلاش SWF.
    السبب الأكثر احتمالاً هو أن الملف لم يعد موجود، لذلك لا يوجد شيء ليحمله رفل.
    حاول الاتصال بمسؤول الموقع للحصول على المساعدة.
error-swf-cors =
    فشل Ruffle في تحميل ملف فلاش SWF.
    من المحتمل أن تم حظر إحضار الملف بواسطة سياسة CORS.
    إذا كنت مسؤول الخادم، يرجى مراجعة رفل ويكي للحصول على المساعدة.
error-wasm-cors =
    فشل Ruffle في تحميل مكون ملف ".wasm" المطلوب.
    من المحتمل أن تم حظر إحضار الملف بواسطة سياسة CORS.
    إذا كنت مسؤول الخادم، يرجى مراجعة رفل ويكي للحصول على المساعدة.
error-wasm-invalid =
    واجه Ruffle مشكلة كبيرة أثناء محاولة التهيئة.
    يبدو أن هذه الصفحة تحتوي على ملفات مفقودة أو غير صالحة لتشغيل Ruffle.
    إذا كنت مسؤول الخادم، يرجى مراجعة ويكي Ruffle للحصول على المساعدة.
error-wasm-download =
    واجه Ruffle مشكلة كبيرة أثناء محاولتها التهيئة.
    هذا يمكن أن يحل نفسه في كثير من الأحيان، لذلك يمكنك محاولة إعادة تحميل الصفحة.
    وإلا يرجى الاتصال بمدير الموقع.
error-wasm-disabled-on-edge =
    فشل Ruffle في تحميل مكون الملف ".wasm" المطلوب.
    لإصلاح هذه المشكلة، حاول فتح إعدادات المتصفح الخاص بك، انقر فوق "الخصوصية، البحث، الخدمات"، والتمرير لأسفل، وإيقاف "تعزيز أمانك على الويب".
    هذا سيسمح للمتصفح الخاص بك بتحميل الملفات ".wasm" المطلوبة.
    إذا استمرت المشكلة، قد تحتاج إلى استخدام متصفح أخر.
error-javascript-conflict =
    واجه Ruffle مشكلة كبيرة أثناء محاولة التهيئة.
    يبدو أن هذه الصفحة تستخدم كود JavaScript الذي يتعارض مع Ruffle.
    إذا كنت مسؤول الخادم، فإننا ندعوك إلى محاولة تحميل الملف على صفحة فارغة.
error-javascript-conflict-outdated = يمكنك أيضًا محاولة تحميل نسخة أحدث من رفل التي قد تحل المشكلة (النسخة الحالية قديمة: { $buildDate }).
error-csp-conflict =
    واجه Ruffle مشكلة كبيرة أثناء محاولة التهيئة.
    لا تسمح سياسة أمان المحتوى لخادم الويب هذا بتشغيل مكون ".wasm" المطلوب.
    إذا كنت مسؤول الخادم، يرجى الرجوع إلى ويكي Ruffle للحصول على المساعدة.
error-unknown =
    واجه Ruffle مشكلة كبيرة أثناء محاولة عرض محتوى الفلاش هذا.
    { $outdated ->
        [true] إذا كنت مسؤول الخادم، الرجاء محاولة تحميل إصدار أحدث من Ruffle (النسخة الحالية قديمة: { $buildDate }).
       *[false] ليس من المفترض أن يحدث هذا، لذلك نحن نقدر حقًا إذا قمت بالتبليغ عن الخطأ!
    }
`,"save-manager.ftl":`save-delete-prompt = هل أنت متأكد أنك تريد حذف ملف الحفظ هذا؟
save-reload-prompt =
    الطريقة الوحيدة ل{ $action ->
        [delete] حذف
       *[replace] إستبدال
    } هذا الملف الحفظ دون تعارض محتمل هي لإعادة تحميل هذا المحتوى. هل ترغب في المتابعة على أي حال؟
save-download = تحميل
save-replace = استبدال
save-delete = حذف
save-backup-all = تحميل جميع ملفات الحفظ
`,"volume-controls.ftl":`volume-controls-mute = كتم
volume-controls-unmute = إلغاء الكتم
`},"ca-ES":{"context_menu.ftl":`context-menu-download-swf = Baixa el fitxer .swf
context-menu-copy-debug-info = Copia la informació de depuració
context-menu-open-save-manager = Obre el gestor d'emmagatzematge
context-menu-about-ruffle =
    { $flavor ->
        [extension] Quant a l'extensió de Ruffle ({ $version })
       *[other] Quant a Ruffle ({ $version })
    }
context-menu-hide = Amaga aquest menú
context-menu-exit-fullscreen = Surt de la pantalla completa
context-menu-enter-fullscreen = Pantalla completa
context-menu-volume-controls = Controls de volum
`,"messages.ftl":`message-cant-embed =
    Ruffle no ha pogut executar el contingut Flash incrustat en aquesta pàgina.
    Podeu provar d'obrir el fitxer en una pestanya a part per evitar aquest problema.
panic-title = Alguna cosa ha fallat :(
more-info = Més informació
run-anyway = Reprodueix igualment
continue = Continua
report-bug = Informa d'un error
update-ruffle = Actualitza Ruffle
ruffle-demo = Demostració web
ruffle-desktop = Aplicació d'escriptori
ruffle-wiki = Obre la wiki de Ruffle
view-error-details = Mostra detalls de l'error
open-in-new-tab = Obre en una pestanya nova
click-to-unmute = Feu clic per activar el so
error-file-protocol =
    Sembla que esteu executant Ruffle al protocol "file:".
    Això no funcionarà perquè els navegadors bloquegen moltes característiques per raons de seguretat. En comptes d'això, us suggerim que configureu un servidor local o bé utilitzeu la demostració web o l'aplicació d'escriptori.
error-javascript-config =
    Ruffle ha topat amb un problema greu a causa d'una configuració JavaScript errònia.
    Si sou l'administrador del servidor, us suggerim que comproveu els detalls de l'error per determinar el paràmetre culpable.
    També podeu consultar la wiki del Ruffle per obtenir ajuda.
error-wasm-not-found =
    Ruffle no ha pogut carregar el component de fitxer ".wasm" necessari.
    Si sou l'administrador del servidor, si us plau, comproveu que el fitxer ha estat carregat correctament.
    Si el problema continua, és possible que hàgiu d'utilitzar el parámetre "publicPath": us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-wasm-mime-type =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Aquest servidor no està servint els fitxers ".wasm" amb el tipus MIME adequat.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-invalid-swf =
    Ruffle no ha pogut llegir el fitxer sol·licitat.
    La raó més probable és que no sigui un fitxer SWF vàlid.
error-swf-fetch =
    Ruffle no ha pogut carregar el fitxer SWF Flash.
    La raó més probable és que el fitxer ja no existeixi, així que no hi ha res que el Ruffle pugui carregar.
    Proveu de contactar a l'administrador del lloc per obtenir ajuda.
error-swf-cors =
    Ruffle no ha pogut carregar el fitxer SWF Flash.
    És probable que l'accés a la càrrega hagi estat denegat per una política CORS.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki del Ruffle per obtenir ajuda.
error-wasm-cors =
    Ruffle no ha pogut carregar el component de fitxer ".wasm" necessari.
    És probable que l'accés a la càrrega hagi estat denegat per una política CORS.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki del Ruffle per obtenir ajuda.
error-wasm-invalid =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Sembla que a aquest lloc li manquen fitxers o aquests no són vàlids per a l'execució de Ruffle.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-wasm-download =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Això sovint això pot resoldre's sol, així que podeu provar de recarregar la pàgina.
    En cas contrari, us preguem que contacteu l'administrador del lloc.
error-wasm-disabled-on-edge =
    Ruffle no ha pogut carregar el component de fitxer ".wasm" necessari.
    Per a arreglar-ho, proveu d'obrir els paràmetres del navegador, feu clic sobre "Privadesa, cerca i serveis", i desactiveu "Prevenció de seguiment".
    Això permetrà que el vostre navegador carregui els fitxers ".wasm" necessaris.
    Si el problema continua, possiblement haureu d'utilitzar un altre navegador.
error-javascript-conflict =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Sembla que aquest lloc fa servir codi JavaScript que entra en conflicte amb Ruffle.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-javascript-conflict-outdated = També podeu provar de carregar una versió més recent de Ruffle que podria resoldre el problema (la compilació actual està desactualitzada: { $buildDate }).
error-csp-conflict =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    La política de seguretat del contingut (CSP) no permet l'execució del component ".wasm" necessari.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-unknown =
    Ruffle ha topat amb un problema greu mentre provava de mostrar aquest contingut Flash.
    { $outdated ->
        [true] Si sou l'administrador del servidor, us preguem que proveu de carregar una versió més recent de Ruffle (la compilació actual està desactualitzada: { $buildDate }).
       *[false] Això no hauria d'haver passat, així que us agrairíem molt que n'informéssiu l'error!
    }
`,"save-manager.ftl":`save-delete-prompt = Segur que vols esborrar aquest fitxer desat?
save-reload-prompt =
    L'única forma d{ $action ->
        [delete] 'eliminar
       *[replace] e substituir
    } aquest fitxer desat sense crear un potencial conflicte és recarregant el contingut. Voleu continuar igualment?
save-download = Baixa
save-replace = Substitueix
save-delete = Elimina
save-backup-all = Baixa tots els fitxers desats
`,"volume-controls.ftl":`volume-controls-mute = Silenci
`},"cs-CZ":{"context_menu.ftl":`context-menu-download-swf = Stáhnout .swf
context-menu-copy-debug-info = Zkopírovat debug info
context-menu-open-save-manager = Otevřít správce uložení
context-menu-about-ruffle =
    { $flavor ->
         [extension] O Ruffle rozšíření ({ $version })
        *[other] O Ruffle ({ $version })
    }
context-menu-hide = Skrýt menu
context-menu-exit-fullscreen = Ukončit režim celé obrazovky
context-menu-enter-fullscreen = Přejít do režimu celé obrazovky
context-menu-volume-controls = Ovládání hlasitosti
`,"messages.ftl":`message-cant-embed =
    Ruffle nemohl spustit Flash vložený na této stránce.
    Můžete se pokusit otevřít soubor na samostatné kartě, abyste se vyhnuli tomuto problému.
panic-title = Něco se pokazilo :(
more-info = Další informace
run-anyway = Přesto spustit
continue = Pokračovat
report-bug = Nahlásit chybu
update-ruffle = Aktualizovat Ruffle
ruffle-demo = Web Demo
ruffle-desktop = Desktopová aplikace
ruffle-wiki = Zobrazit Ruffle Wiki
view-error-details = Zobrazit podrobnosti o chybě
open-in-new-tab = Otevřít na nové kartě
click-to-unmute = Kliknutím zrušíte ztlumení
clipboard-message-title = Kopírování a vkládání v Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Váš prohlížeč nepodporuje plný přístup ke schránce,
        [access-denied] Přístup ke schránce byl odepřen,
    } ale místo toho můžete vždy použít tyto zkratky:
clipboard-message-copy = { " " } pro kopírování
clipboard-message-cut = { " " } pro vystřihování
clipboard-message-paste = { " " } pro vkládání
error-file-protocol =
    Zdá se, že používáte Ruffle na protokolu "file:".
    To není možné, protože prohlížeče blokují fungování mnoha funkcí z bezpečnostních důvodů.
    Namísto toho vám doporučujeme nastavit lokální server nebo použít web demo či desktopovou aplikaci.
error-javascript-config =
    Ruffle narazil na problém v důsledku nesprávné konfigurace JavaScriptu.
    Pokud jste správcem serveru, doporučujeme vám zkontrolovat podrobnosti o chybě, abyste zjistili, který parametr je vadný.
    Pomoc můžete získat také na wiki Ruffle.
error-wasm-not-found =
    Ruffle se nepodařilo načíst požadovanou komponentu souboru „.wasm“.
    Pokud jste správcem serveru, zkontrolujte, zda byl soubor správně nahrán.
    Pokud problém přetrvává, možná budete muset použít nastavení „publicPath“: pomoc naleznete na wiki Ruffle.
error-wasm-mime-type =
    Ruffle narazil na problém při pokusu o inicializaci.
    Tento webový server neposkytuje soubory „.wasm“ se správným typem MIME.
    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.
error-invalid-swf =
    Ruffle nemůže zpracovat požadovaný soubor.
    Nejpravděpodobnějším důvodem je, že požadovaný soubor není platným souborem SWF.
error-swf-fetch =
    Ruffle se nepodařilo načíst SWF soubor Flash.
    Nejpravděpodobnějším důvodem je, že soubor již neexistuje, takže Ruffle nemá co načíst.
    Zkuste požádat o pomoc správce webu.
error-swf-cors =
    Ruffle se nepodařilo načíst SWF soubor Flash.
    Přístup k načítání byl pravděpodobně zablokován politikou CORS.
    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.
error-wasm-cors =
    Ruffle se nepodařilo načíst požadovanou komponentu souboru „.wasm“.
    Přístup k načítání byl pravděpodobně zablokován politikou CORS.
    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.
error-wasm-invalid =
    Ruffle narazil na problém při pokusu o inicializaci.
    Zdá se, že na této stránce chybí nebo jsou neplatné soubory ke spuštění Ruffle.
    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.
error-wasm-download =
    Ruffle narazil na problém při pokusu o inicializaci.
    Problém se může vyřešit i sám, takže můžete zkusit stránku načíst znovu.
    V opačném případě kontaktujte administrátora stránky.
error-wasm-disabled-on-edge =
    Ruffle se nepodařilo načíst požadovanou komponentu souboru „.wasm“.
    Chcete-li tento problém vyřešit, zkuste otevřít nastavení prohlížeče, klikněte na položku „Ochrana osobních údajů, vyhledávání a služby“, přejděte dolů a vypněte možnost „Zvyšte svou bezpečnost na webu“.
    Vašemu prohlížeči to umožní načíst požadované soubory „.wasm“.
    Pokud problém přetrvává, budete možná muset použít jiný prohlížeč.
error-javascript-conflict =
    Ruffle narazil na problém při pokusu o inicializaci.
    Zdá se, že tato stránka používá kód JavaScript, který je v konfliktu s Ruffle.
    Pokud jste správcem serveru, doporučujeme vám zkusit načíst soubor na prázdnou stránku.
error-javascript-conflict-outdated = Můžete se také pokusit nahrát novější verzi Ruffle, která může daný problém vyřešit (aktuální build je zastaralý: { $buildDate }).
error-csp-conflict =
    Ruffle narazil na problém při pokusu o inicializaci.
    Zásady zabezpečení obsahu tohoto webového serveru nepovolují spuštění požadované komponenty „.wasm“.
    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.
error-unknown =
    Ruffle narazil na problém při pokusu zobrazit tento Flash obsah.
    { $outdated ->
          [true] Pokud jste správcem serveru, zkuste nahrát novější verzi Ruffle (aktuální build je zastaralý: { $buildDate }).
         *[false] Toto by se nemělo stát, takže bychom opravdu ocenili, kdybyste mohli nahlásit chybu!
    }
`,"save-manager.ftl":`save-delete-prompt = Opravdu chcete odstranit tento soubor s uloženými pozicemi?
save-reload-prompt =
    Jediný způsob, jak { $action ->
          [delete] vymazat
         *[replace] nahradit
    } tento soubor s uloženými pozicemi bez potenciálního konfliktu je opětovné načtení tohoto obsahu. Chcete přesto pokračovat?
save-download = Stáhnout
save-replace = Nahradit
save-delete = Vymazat
save-backup-all = Stáhnout všechny soubory s uloženými pozicemi
`,"volume-controls.ftl":`volume-controls-mute = Ztlumit
`},"de-DE":{"context_menu.ftl":`context-menu-download-swf = .swf herunterladen
context-menu-copy-debug-info = Debug-Info kopieren
context-menu-open-save-manager = Dateimanager öffnen
context-menu-about-ruffle =
    { $flavor ->
        [extension] Über Ruffle Erweiterung ({ $version })
       *[other] Über Ruffle ({ $version })
    }
context-menu-hide = Menü ausblenden
context-menu-exit-fullscreen = Vollbild verlassen
context-menu-enter-fullscreen = Vollbildmodus aktivieren
context-menu-volume-controls = Lautstärke einstellen
`,"messages.ftl":`message-cant-embed =
    Ruffle konnte den Flash in dieser Seite nicht ausführen.
    Du kannst versuchen, die Datei in einem separaten Tab zu öffnen, um dieses Problem zu umgehen.
panic-title = Etwas ist schief gelaufen
more-info = Weitere Informationen
run-anyway = Trotzdem ausführen
continue = Fortfahren
report-bug = Fehler melden
update-ruffle = Ruffle aktuallisieren
ruffle-demo = Web-Demo
ruffle-desktop = Desktop-Anwendung
ruffle-wiki = Ruffle-Wiki anzeigen
view-error-details = Fehlerdetails anzeigen
open-in-new-tab = In einem neuen Tab öffnen
click-to-unmute = Klicke zum Entmuten
error-file-protocol =
    Es scheint, dass Sie Ruffle auf dem "file:"-Protokoll ausführen.
    Jedoch werden aus Sicherheitsgründen viele Funktionen vom Browser blockiert, weswegen die Datei nicht geladen werden kann.
    Setzen Sie stattdessen einen lokalen Server auf, verwenden Sie die Webdemo oder die Desktop-Anwendung.
error-javascript-config =
    Ruffle ist aufgrund einer falschen JavaScript-Konfiguration auf ein Problem gestoßen.
    Wenn du der Server-Administrator bist, laden wir dich ein, die Fehlerdetails zu überprüfen, um herauszufinden, welcher Parameter fehlerhaft ist.
    Sie können auch das Ruffle-Wiki für Hilfe konsultieren.
error-wasm-not-found =
    Ruffle konnte die erforderliche ".wasm"-Datei-Komponente nicht laden.
    Wenn Sie der Server-Administrator sind, stellen Sie bitte sicher, dass die Datei korrekt hochgeladen wurde.
    Wenn das Problem weiterhin besteht, müssen Sie unter Umständen die "publicPath"-Einstellung verwenden: Bitte konsultieren Sie das Ruffle-Wiki für Hilfe.
error-wasm-mime-type =
    Ruffle ist auf ein Fehler beim Initialisieren gestoßen.
    Dieser Webserver dient nicht ". asm"-Dateien mit dem korrekten MIME-Typ.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.
error-invalid-swf =
    Ruffle konnte die angegebene Datei nicht lesen.
    Am wahrscheinlichsten ist die angegebene Datei keine gültige SWF.
error-swf-fetch =
    Ruffle konnte die Flash-SWF-Datei nicht laden.
    Der wahrscheinlichste Grund ist, dass die Datei nicht mehr existiert, so dass Ruffle nicht geladen werden kann.
    Kontaktieren Sie den Website-Administrator für Hilfe.
error-swf-cors =
    Ruffle konnte die Flash-SWF-Datei nicht laden.
    Der Zugriff auf den Abruf wurde wahrscheinlich durch die CORS-Richtlinie blockiert.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.
error-wasm-cors =
    Ruffle konnte die Flash-SWF-Datei nicht laden.
    Der Zugriff auf den Abruf wurde wahrscheinlich durch die CORS-Richtlinie blockiert.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.
error-wasm-invalid =
    Ruffle ist auf ein Fehler beim Initialisieren gestoßen.
    Dieser Webserver dient nicht ". asm"-Dateien mit dem korrekten MIME-Typ.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.
error-wasm-download =
    Ruffle ist auf ein Fehler beim Initialisieren gestoßen.
    Dies kann sich oft selbst beheben, so dass Sie versuchen können, die Seite neu zu laden.
    Andernfalls kontaktieren Sie bitte den Website-Administrator.
error-wasm-disabled-on-edge =
    Ruffle konnte die erforderliche ".wasm"-Datei-Komponente nicht laden.
    Um dies zu beheben, versuche die Einstellungen deines Browsers zu öffnen, klicke auf "Privatsphäre, Suche und Dienste", scrollen nach unten und schalte "Verbessere deine Sicherheit im Web" aus.
    Dies erlaubt Ihrem Browser die erforderlichen ".wasm"-Dateien zu laden.
    Wenn das Problem weiterhin besteht, müssen Sie möglicherweise einen anderen Browser verwenden.
error-javascript-conflict =
    Ruffle ist auf ein Fehler beim Initialisieren gestoßen.
    Es scheint, als ob diese Seite JavaScript-Code verwendet, der mit Ruffle kollidiert.
    Wenn Sie der Server-Administrator sind, laden wir Sie ein, die Datei auf einer leeren Seite zu laden.
error-javascript-conflict-outdated = Du kannst auch versuchen, eine neuere Version von Ruffle hochzuladen, die das Problem umgehen könnte (aktuelle Version ist veraltet: { $buildDate }).
error-csp-conflict =
    Ruffle ist auf ein Fehler beim Initialisieren gestoßen.
    Dieser Webserver dient nicht ". asm"-Dateien mit dem korrekten MIME-Typ.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.
error-unknown =
    Bei dem Versuch, diesen Flash-Inhalt anzuzeigen, ist Ruffle auf ein großes Problem gestoßen.
    { $outdated ->
        [true] Wenn Sie der Server-Administrator sind, Bitte versuchen Sie, eine neuere Version von Ruffle hochzuladen (aktuelle Version ist veraltet: { $buildDate }).
       *[false] Dies soll nicht passieren, deshalb würden wir uns sehr darüber freuen, wenn Sie einen Fehler melden könnten!
    }
`,"save-manager.ftl":`save-delete-prompt = Sind Sie sicher, dass Sie diese Speicherdatei löschen möchten?
save-reload-prompt =
    Der einzige Weg zu { $action ->
        [delete] löschen
       *[replace] ersetzen
    } diese Speicherdatei ohne möglichen Konflikt ist das erneute Laden dieses Inhalts. Möchten Sie trotzdem fortfahren?
save-download = Herunterladen
save-replace = Ersetzen
save-delete = Löschen
save-backup-all = Alle gespeicherten Dateien herunterladen
`,"volume-controls.ftl":`volume-controls-mute = Stummschalten
`},"en-US":{"context_menu.ftl":`context-menu-download-swf = Download .swf
context-menu-copy-debug-info = Copy debug info
context-menu-open-save-manager = Open Save Manager
context-menu-about-ruffle =
    { $flavor ->
        [extension] About Ruffle Extension ({$version})
        *[other] About Ruffle ({$version})
    }
context-menu-hide = Hide this menu
context-menu-exit-fullscreen = Exit fullscreen
context-menu-enter-fullscreen = Enter fullscreen
context-menu-volume-controls = Volume controls
`,"messages.ftl":`message-cant-embed =
    Ruffle wasn't able to run the Flash embedded in this page.
    You can try to open the file in a separate tab, to sidestep this issue.
panic-title = Something went wrong :(
more-info = More info
run-anyway = Run anyway
continue = Continue
report-bug = Report Bug
update-ruffle = Update Ruffle
ruffle-demo = Web Demo
ruffle-desktop = Desktop Application
ruffle-wiki = View Ruffle Wiki
enable-hardware-acceleration = It looks like hardware acceleration is disabled. While Ruffle may work, it could be very slow. You can find out how to enable hardware acceleration by following the link below:
enable-hardware-acceleration-link = FAQ - Chrome Hardware Acceleration
view-error-details = View Error Details
open-in-new-tab = Open in a new tab
click-to-unmute = Click to unmute
clipboard-message-title = Copying and pasting in Ruffle
clipboard-message-description =
    { $variant ->
        *[unsupported] Your browser does not support full clipboard access,
        [access-denied] Access to the clipboard has been denied,
    } but you can always use these shortcuts instead:
clipboard-message-copy = { " " } for copy
clipboard-message-cut = { " " } for cut
clipboard-message-paste = { " " } for paste
error-file-protocol =
    It appears you are running Ruffle on the "file:" protocol.
    This doesn't work as browsers block many features from working for security reasons.
    Instead, we invite you to setup a local server or either use the web demo or the desktop application.
error-javascript-config =
    Ruffle has encountered a major issue due to an incorrect JavaScript configuration.
    If you are the server administrator, we invite you to check the error details to find out which parameter is at fault.
    You can also consult the Ruffle wiki for help.
error-wasm-not-found =
    Ruffle failed to load the required ".wasm" file component.
    If you are the server administrator, please ensure the file has correctly been uploaded.
    If the issue persists, you may need to use the "publicPath" setting: please consult the Ruffle wiki for help.
error-wasm-mime-type =
    Ruffle has encountered a major issue whilst trying to initialize.
    This web server is not serving ".wasm" files with the correct MIME type.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-invalid-swf =
    Ruffle cannot parse the requested file.
    The most likely reason is that the requested file is not a valid SWF.
error-swf-fetch =
    Ruffle failed to load the Flash SWF file.
    The most likely reason is that the file no longer exists, so there is nothing for Ruffle to load.
    Try contacting the website administrator for help.
error-swf-cors =
    Ruffle failed to load the Flash SWF file.
    Access to fetch has likely been blocked by CORS policy.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-wasm-cors =
    Ruffle failed to load the required ".wasm" file component.
    Access to fetch has likely been blocked by CORS policy.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-wasm-invalid =
    Ruffle has encountered a major issue whilst trying to initialize.
    It seems like this page has missing or invalid files for running Ruffle.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-wasm-download =
    Ruffle has encountered a major issue whilst trying to initialize.
    This can often resolve itself, so you can try reloading the page.
    Otherwise, please contact the website administrator.
error-wasm-disabled-on-edge =
    Ruffle failed to load the required ".wasm" file component.
    To fix this, try opening your browser's settings, clicking "Privacy, search, and services", scrolling down, and turning off "Enhance your security on the web".
    This will allow your browser to load the required ".wasm" files.
    If the issue persists, you might have to use a different browser.
error-javascript-conflict =
    Ruffle has encountered a major issue whilst trying to initialize.
    It seems like this page uses JavaScript code that conflicts with Ruffle.
    If you are the server administrator, we invite you to try loading the file on a blank page.
error-javascript-conflict-outdated = You can also try to upload a more recent version of Ruffle that may circumvent the issue (current build is outdated: {$buildDate}).
error-csp-conflict =
    Ruffle has encountered a major issue whilst trying to initialize.
    This web server's Content Security Policy does not allow the required ".wasm" component to run.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-unknown =
    Ruffle has encountered a major issue whilst trying to display this Flash content.
    {$outdated ->
        [true] If you are the server administrator, please try to upload a more recent version of Ruffle (current build is outdated: {$buildDate}).
        *[false] This isn't supposed to happen, so we'd really appreciate if you could file a bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Are you sure you want to delete this save file?
save-reload-prompt =
    The only way to {$action ->
    [delete] delete
    *[replace] replace
    } this save file without potential conflict is to reload this content. Do you wish to continue anyway?
save-download = Download
save-replace = Replace
save-delete = Delete
save-backup-all = Download all save files`,"volume-controls.ftl":`volume-controls-mute = Mute
volume-controls-unmute = Unmute
`},"es-ES":{"context_menu.ftl":`context-menu-download-swf = Descargar .swf
context-menu-copy-debug-info = Copiar Información de depuración
context-menu-open-save-manager = Abrir gestor de guardado
context-menu-about-ruffle =
    { $flavor ->
        [extension] Sobre la extensión de Ruffle ({ $version })
       *[other] Sobre Ruffle ({ $version })
    }
context-menu-hide = Ocultar este menú
context-menu-exit-fullscreen = Salir de pantalla completa
context-menu-enter-fullscreen = Entrar a pantalla completa
context-menu-volume-controls = Controles de volumen
`,"messages.ftl":`message-cant-embed =
    Ruffle no pudo ejecutar el Flash incrustado en esta página.
    Puedes intentar abrir el archivo en una pestaña aparte, para evitar este problema.
panic-title = Algo salió mal :(
more-info = Más info
run-anyway = Ejecutar de todos modos
continue = Continuar
report-bug = Reportar un Error
update-ruffle = Actualizar Ruffle
ruffle-demo = Demostración de web
ruffle-desktop = Aplicación de Desktop
ruffle-wiki = Ver la página wiki
view-error-details = Ver los detalles del error
open-in-new-tab = Abrir en una pestaña nueva
click-to-unmute = Haz clic para dejar de silenciar
clipboard-message-title = Para copiar y pegar en Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Este navegador no apoya acceso completo al portapapeles,
        [access-denied] Se ha denegado el acceso al portapapeles,
    } pero siempre se puede utilizar estos atajos:
clipboard-message-copy = Para copiar
clipboard-message-cut = Para cortar
clipboard-message-paste = Para pegar
error-file-protocol =
    Parece que está ejecutando Ruffle en el protocolo "archivo:".
    Esto no funciona porque los navegadores bloquean que muchas características funcionen por razones de seguridad.
    En su lugar, le invitamos a configurar un servidor local o bien usar la demostración web o la aplicación de desktop.
error-javascript-config =
    Ruffle ha encontrado un problema crítico debido a una configuración JavaScript incorrecta.
    Si usted es el administrador del servidor, le invitamos a comprobar los detalles del error para averiguar qué parámetro está en falta.
    También puedes consultar la wiki de Ruffle para obtener ayuda.
error-wasm-not-found =
    Ruffle no pudo cargar el componente de archivo ".wasm" requerido.
    Si usted es el administrador del servidor, asegúrese de que el archivo ha sido subido correctamente.
    Si el problema persiste, puede que necesite usar la configuración "publicPath": por favor consulte la wiki de Ruffle para obtener ayuda.
error-wasm-mime-type =
    Ruffle ha encontrado un problema crítico al intentar inicializar.
    Este servidor web no está sirviendo archivos wasm" con el tipo MIME correcto.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-invalid-swf = Ruffle no puede analizar el archivo solicitado. La razón más probable es que no es un archivo válido SWF.
error-swf-fetch =
    Ruffle no pudo cargar el archivo Flash SWF.
    La razón más probable es que el archivo ya no existe, así que no hay nada para cargar Ruffle.
    Intente ponerse en contacto con el administrador del sitio web para obtener ayuda.
error-swf-cors =
    Ruffle no pudo cargar el archivo Flash SWF.
    Es probable que el acceso a la búsqueda haya sido bloqueado por la política CORS.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-wasm-cors =
    Ruffle no pudo cargar el archivo ".wasm."
    Es probable que el acceso a la búsqueda o la llamada a la función fetch haya sido bloqueado por la política CORS.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-wasm-invalid =
    Ruffle ha encontrado un problema crítico al intentar inicializar.
    Este servidor web no está sirviendo archivos wasm" con el tipo Mime correcto.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-wasm-download =
    Ruffle ha encontrado un problema crítico mientras intentaba inicializarse.
    Esto a menudo puede resolverse por sí mismo, así que puede intentar recargar la página.
    De lo contrario, póngase en contacto con el administrador del sitio web.
error-wasm-disabled-on-edge =
    Ruffle no pudo cargar el componente de archivo ".wasm" requerido.
    Para solucionar esto, intenta abrir la configuración de tu navegador, haciendo clic en "Privacidad, búsqueda y servicios", desplazándote y apagando "Mejore su seguridad en la web".
    Esto permitirá a su navegador cargar los archivos ".wasm" necesarios.
    Si el problema persiste, puede que tenga que utilizar un navegador diferente.
error-javascript-conflict =
    Ruffle ha encontrado un problema crítico mientras intentaba inicializarse.
    Parece que esta página utiliza código JavaScript que entra en conflicto con Ruffle.
    Si usted es el administrador del servidor, le invitamos a intentar cargar el archivo en una página en blanco.
error-javascript-conflict-outdated = También puedes intentar subir una versión más reciente de Ruffle que puede eludir el problema (la versión actual está desactualizada: { $buildDate }).
error-csp-conflict =
    Ruffle encontró un problema al intentar inicializarse.
    La Política de Seguridad de Contenido de este servidor web no permite el componente requerido ".wasm". 
    Si usted es el administrador del servidor, por favor consulta la wiki de Ruffle para obtener ayuda.
error-unknown =
    Ruffle ha encontrado un problema al tratar de mostrar el contenido Flash.
    { $outdated ->
        [true] Si usted es el administrador del servidor, intenta cargar una version más reciente de Ruffle (la version actual esta desactualizada: { $buildDate }).
       *[false] Esto no deberia suceder! apreciariamos que reportes el error!
    }
`,"save-manager.ftl":`save-delete-prompt = ¿Está seguro de querer eliminar este archivo de guardado?
save-reload-prompt =
    La única forma de { $action ->
        [delete] eliminar
       *[replace] sobreescribir
    } este archivo de guardado sin conflictos potenciales es reiniciando el contenido. ¿Desea continuar de todos modos?
save-download = Descargar
save-replace = Sobreescribir
save-delete = Borrar
save-backup-all = Borrar todos los archivos de guardado
`,"volume-controls.ftl":`volume-controls-mute = Silenciar
`},"fr-FR":{"context_menu.ftl":`context-menu-download-swf = Télécharger en tant que .swf
context-menu-copy-debug-info = Copier les infos de débogage
context-menu-open-save-manager = Ouvrir le gestionnaire de stockage
context-menu-about-ruffle =
    { $flavor ->
        [extension] À propos de l'Extension Ruffle ({ $version })
       *[other] À propos de Ruffle ({ $version })
    }
context-menu-hide = Masquer ce menu
context-menu-exit-fullscreen = Sortir du mode plein écran
context-menu-enter-fullscreen = Afficher en plein écran
context-menu-volume-controls = Contrôles du volume
`,"messages.ftl":`message-cant-embed =
    Ruffle n'a pas été en mesure de lire le fichier Flash intégré dans cette page.
    Vous pouvez essayer d'ouvrir le fichier dans un onglet isolé, pour contourner le problème.
panic-title = Une erreur est survenue :(
more-info = Plus d'infos
run-anyway = Exécuter quand même
continue = Continuer
report-bug = Signaler le bug
update-ruffle = Mettre à jour Ruffle
ruffle-demo = Démo en ligne
ruffle-desktop = Application de bureau
ruffle-wiki = Wiki de Ruffle
view-error-details = Détails de l'erreur
open-in-new-tab = Ouvrir dans un nouvel onglet
click-to-unmute = Cliquez pour activer le son
error-file-protocol =
    Il semblerait que vous exécutiez Ruffle sur le protocole "file:".
    Cela ne fonctionne pas car les navigateurs bloquent de nombreuses fonctionnalités pour des raisons de sécurité.
    Nous vous invitons soit à configurer un serveur local, soit à utiliser la démo en ligne ou l'application de bureau.
error-javascript-config =
    Ruffle a rencontré un problème majeur en raison d'une configuration JavaScript incorrecte.
    Si vous êtes l'administrateur du serveur, nous vous invitons à vérifier les détails de l'erreur pour savoir quel est le paramètre en cause.
    Vous pouvez également consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-not-found =
    Ruffle n'a pas réussi à charger son fichier ".wasm".
    Si vous êtes l'administrateur du serveur, veuillez vous assurer que ce fichier a bien été mis en ligne.
    Si le problème persiste, il vous faudra peut-être utiliser le paramètre "publicPath" : veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-mime-type =
    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.
    Ce serveur web ne renvoie pas le bon type MIME pour les fichiers ".wasm".
    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-invalid-swf =
    Ruffle n'a pas été en mesure de lire le fichier demandé.
    La raison la plus probable est que ce fichier n'est pas un SWF valide.
error-swf-fetch =
    Ruffle n'a pas réussi à charger le fichier Flash.
    La raison la plus probable est que le fichier n'existe pas ou plus.
    Vous pouvez essayer de prendre contact avec l'administrateur du site pour obtenir plus d'informations.
error-swf-cors =
    Ruffle n'a pas réussi à charger le fichier Flash.
    La requête a probablement été rejetée en raison de la configuration du CORS.
    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-cors =
    Ruffle n'a pas réussi à charger son fichier ".wasm".
    La requête a probablement été rejetée en raison de la configuration du CORS.
    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-invalid =
    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.
    Il semblerait que cette page comporte des fichiers manquants ou invalides pour exécuter Ruffle.
    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-download =
    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.
    Le problème détecté peut souvent se résoudre de lui-même, donc vous pouvez essayer de recharger la page.
    Si le problème persiste, veuillez prendre contact avec l'administrateur du site.
error-wasm-disabled-on-edge =
    Ruffle n'a pas réussi à charger son fichier ".wasm".
    Pour résoudre ce problème, essayez d'ouvrir les paramètres de votre navigateur et de cliquer sur "Confidentialité, recherche et services". Puis, vers le bas de la page, désactivez l'option "Améliorez votre sécurité sur le web".
    Cela permettra à votre navigateur de charger les fichiers ".wasm".
    Si le problème persiste, vous devrez peut-être utiliser un autre navigateur.
error-javascript-conflict =
    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.
    Il semblerait que cette page contienne du code JavaScript qui entre en conflit avec Ruffle.
    Si vous êtes l'administrateur du serveur, nous vous invitons à essayer de charger le fichier dans une page vide.
error-javascript-conflict-outdated = Vous pouvez également essayer de mettre en ligne une version plus récente de Ruffle qui pourrait avoir corrigé le problème (la version que vous utilisez est obsolète : { $buildDate }).
error-csp-conflict =
    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.
    La stratégie de sécurité du contenu (CSP) de ce serveur web n'autorise pas l'exécution de fichiers ".wasm".
    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-unknown =
    Ruffle a rencontré un problème majeur durant l'exécution de ce contenu Flash.
    { $outdated ->
        [true] Si vous êtes l'administrateur du serveur, veuillez essayer de mettre en ligne une version plus récente de Ruffle (la version que vous utilisez est obsolète : { $buildDate }).
       *[false] Cela n'est pas censé se produire, donc nous vous serions reconnaissants si vous pouviez nous signaler ce bug !
    }
`,"save-manager.ftl":`save-delete-prompt = Voulez-vous vraiment supprimer ce fichier de sauvegarde ?
save-reload-prompt =
    La seule façon de { $action ->
        [delete] supprimer
       *[replace] remplacer
    } ce fichier de sauvegarde sans conflit potentiel est de recharger ce contenu. Souhaitez-vous quand même continuer ?
save-download = Télécharger
save-replace = Remplacer
save-delete = Supprimer
save-backup-all = Télécharger tous les fichiers de sauvegarde
`,"volume-controls.ftl":`volume-controls-mute = Muet
`},"he-IL":{"context_menu.ftl":`context-menu-download-swf = הורדת קובץ הswf.
context-menu-copy-debug-info = העתקת נתוני ניפוי שגיאות
context-menu-open-save-manager = פתח את מנהל השמירות
context-menu-about-ruffle =
    { $flavor ->
        [extension] אודות התוסף Ruffle ({ $version })
       *[other] אודות Ruffle ({ $version })
    }
context-menu-hide = הסתר תפריט זה
context-menu-exit-fullscreen = יציאה ממסך מלא
context-menu-enter-fullscreen = מסך מלא
context-menu-volume-controls = בקרת עוצמת קול
`,"messages.ftl":`message-cant-embed =
    Ruffle לא הצליח להריץ את תוכן הפלאש המוטמע בדף זה.
    אתה יכול לפתוח את הקובץ בלשונית נפרדת, על מנת לעקוף בעיה זו.
panic-title = משהו השתבש :(
more-info = מידע נוסף
run-anyway = הפעל בכל זאת
continue = המשך
report-bug = דווח על תקלה
update-ruffle = עדכן את Ruffle
ruffle-demo = הדגמה
ruffle-desktop = אפליקציית שולחן עבודה
ruffle-wiki = ראה את Ruffle wiki
view-error-details = ראה פרטי שגיאה
open-in-new-tab = פתח בכרטיסייה חדשה
click-to-unmute = לחץ על מנת לבטל השתקה
clipboard-message-title = העתקה והדבקה בRuffle
clipboard-message-copy = { " " } עבור העתקה
clipboard-message-cut = { " " } עבור גזירה
clipboard-message-paste = { " " } עבור הדבקה
error-file-protocol =
    נדמה שאתה מריץ את Ruffle תחת פרוטוקול "file:".
    זה לא יעבוד מכיוון שדפדפנים חוסמים אפשרויות רבות מלעבוד עקב סיבות אבטחה.
    במקום זה, אנו מזמינים אותך לאחסן אתר זה תחת שרת מקומי או הדגמה ברשת או דרך אפליקציית שולחן העבודה.
error-javascript-config =
    Ruffle נתקל בתקלה חמורה עקב הגדרת JavaScript שגויה.
    אם אתה מנהל האתר, אנו מזמינים אותך לבדוק את פרטי השגיאה על מנת למצוא איזה פרמטר הוא שגוי.
    אתה יכול לעיין ולהועץ בwiki של Ruffle על מנת לקבל עזרה.
error-wasm-not-found =
    Ruffle נכשל לטעון את קובץ ה"wasm." הדרוש.
    אם אתה מנהל האתר, אנא וודא כי הקובץ הועלה כשורה.
    אם הבעיה ממשיכה, ייתכן ותצטרך להשתמש בהגדרת "publicPath": אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-wasm-mime-type =
    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.
    שרתו של אתר זה לא משייך קבצי ".wasm" עם סוג הMIME הנכון.
    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-invalid-swf =
    Ruffle לא יכול לנתח את הקובץ המבוקש.
    הסיבה הסבירה ביותר לבעיה זו היא בגלל שהקובץ המבוקש אינו SWF חוקי.
error-swf-fetch =
    Ruffle נכשל לטעון את קובץ הפלאש/swf. .
    זה נובע ככל הנראה מכיוון והקובץ לא קיים יותר, אז אין לRuffle מה לטעון.
    נסה ליצור קשר עם מנהל האתר על מנת לקבל עזרה.
error-swf-cors =
    Ruffle נכשל לטעון את קובץ הפלאש/swf. .
    גישה לfetch ככל הנראה נחסמה על ידי מדיניות CORS.
    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-wasm-cors =
    Ruffle נכשל לטעון את קובץ ה".wasm" הדרוש.
    גישה לfetch ככל הנראה נחסמה על ידי מדיניות CORS.
    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-wasm-invalid =
    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.
    נדמה כי בדף זה חסרים או לא עובדים כראוי קבצים אשר משמשים את Ruffle כדי לפעול
    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-wasm-download =
    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.
    לעיתים בעיה זו יכולה לפתור את עצמה, אז אתה יכול לנסות לטעון מחדש את הדף זה.
    אם לא, אנא פנה למנהל האתר.
error-wasm-disabled-on-edge =
    Ruffle נכשל לטעון את קובץ ה".wasm" הדרוש.
    על מנת לתקן בעיה זו, נסה לפתוח את הגדרות הדפדפן שלך, לחץ על "אבטחה, חיפוש ושירות",
    גלול מטה, וכבה את "הגבר את האבטחה שלך ברשת".
    זה יאפשר לדפדפן שלך לטעון את קובץ ה".wasm" הדרוש.
    אם הבעיה ממשיכה, ייתכן ועליך להשתמש בדפדפן אחר.
error-javascript-conflict =
    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.
    נדמה כי דף זה משתמש בקוד JavaScript אשר מתנגש עם Ruffle.
    אם אתה מנהל האתר, אנו מזמינים אותך לנסות לטעון את הדף תחת עמוד ריק.
error-javascript-conflict-outdated = בנוסף, אתה יכול לנסות ולהעלות גרסאות עדכניות של Ruffle אשר עלולים לעקוף בעיה זו (גרסה זו הינה מיושנת : { $buildDate }).
error-csp-conflict =
    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.
    מדיניות אבטחת התוכן של שרתו של אתר זה אינה מאפשרת לקובץ ה"wasm." הדרוש לפעול.
    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-unknown =
    Ruffle נתקל בבעיה חמורה בניסיון להציג את תוכן פלאש זה.
    { $outdated ->
        [true] אם אתה מנהל האתר, אנא נסה להעלות גרסה עדכנית יותר של Ruffle (גרסה זו הינה מיושנת:  { $buildDate }).
       *[false] זה לא אמור לקרות, נשמח אם תוכל לשתף תקלה זו!
    }
`,"save-manager.ftl":`save-delete-prompt = האם אתה בטוח שברצונך למחוק את קובץ שמירה זה?
save-reload-prompt =
    הדרך היחידה { $action ->
        [delete] למחוק
       *[replace] להחליף
    } את קובץ השמירה הזה מבלי לגרום לו להתנגש היא לטעון מחדש את תוכן זה. האם אתה רוצה להמשיך בכל זאת?
save-download = הורדה
save-replace = החלפה
save-delete = מחיקה
save-backup-all = הורדת כל קבצי השמירה
`,"volume-controls.ftl":`volume-controls-mute = השתק
`},"hu-HU":{"context_menu.ftl":`context-menu-download-swf = .swf fájl letöltése
context-menu-copy-debug-info = Hibakeresési információk másolása
context-menu-open-save-manager = Mentéskezelő megnyitása
context-menu-about-ruffle =
    { $flavor ->
        [extension] A Ruffle kiegészítő ({ $version }) névjegye
       *[other] A Ruffle ({ $version }) névjegye
    }
context-menu-hide = Ezen menü elrejtése
context-menu-exit-fullscreen = Kilépés a teljes képernyőből
context-menu-enter-fullscreen = Váltás teljes képernyőre
context-menu-volume-controls = Hangerőszabályzó
`,"messages.ftl":`message-cant-embed =
    A Ruffle nem tudta futtatni az oldalba ágyazott Flash tartalmat.
    A probléma kikerüléséhez megpróbálhatod megnyitni a fájlt egy külön lapon.
panic-title = Valami baj történt :(
more-info = További információ
run-anyway = Futtatás mégis
continue = Folytatás
report-bug = Hiba jelentése
update-ruffle = Ruffle frissítése
ruffle-demo = Webes demó
ruffle-desktop = Asztali alkalmazás
ruffle-wiki = Ruffle Wiki megnyitása
enable-hardware-acceleration = Úgy tűnik, a hardveres gyorsítás ki van kapcsolva. Bár a Ruffle működhet, nagyon lassú lehet. Az alábbi hivatkozást követve megtudhatod, hogyan engedélyezd a hardveres gyorsítást:
enable-hardware-acceleration-link = GYIK - Chrome hardveres gyorsítás
view-error-details = Hiba részletei
open-in-new-tab = Megnyitás új lapon
click-to-unmute = Kattints a némítás feloldásához
clipboard-message-title = Másolás és beíllesztés a Ruffle-ben
clipboard-message-description =
    { $variant ->
       *[unsupported] A böngésződ nem támogatja a vágólaphoz való teljes hozzáférést,
        [access-denied] A vágólaphoz való hozzáférés el lett utasítva,
    } de mindig használhatod ezeket a gyorsbillentyűket helyette:
clipboard-message-copy = { " " } másoláshoz
clipboard-message-cut = { " " } kivágáshoz
clipboard-message-paste = { " " } beillesztéshez
error-file-protocol =
    Úgy tűnik, a Ruffle-t a "file:" protokollon futtatod.
    Ez nem működik, mivel így a böngészők biztonsági okokból számos funkció működését letiltják.
    Ehelyett azt ajánljuk hogy indíts egy helyi kiszolgálót, vagy használd a webes demót vagy az asztali alkalmazást.
error-javascript-config =
    A Ruffle komoly problémába ütközött egy helytelen JavaScript-konfiguráció miatt.
    Ha a szerver rendszergazdája vagy, kérjük, ellenőrizd a hiba részleteit, hogy megtudd, melyik paraméter a hibás.
    A Ruffle wikiben is találhatsz ehhez segítséget.
error-wasm-not-found =
    A Ruffle nem tudta betölteni a szükséges ".wasm" összetevőt.
    Ha a szerver rendszergazdája vagy, kérjük ellenőrizd, hogy a fájl megfelelően lett-e feltöltve.
    Ha a probléma továbbra is fennáll, előfordulhat, hogy a "publicPath" beállítást kell használnod: segítségért keresd fel a Ruffle wikit.
error-wasm-mime-type =
    A Ruffle komoly problémába ütközött az inicializálás során.
    Ez a webszerver a ".wasm" fájlokat nem a megfelelő MIME-típussal szolgálja ki.
    Ha a szerver rendszergazdája vagy, kérjük, keresd fel a Ruffle wikit segítségért.
error-invalid-swf =
    A Ruffle nem tudta értelmezni a kért fájlt.
    Ennek a legvalószínűbb oka az, hogy a kért fájl nem érvényes SWF.
error-swf-fetch =
    A Ruffle nem tudta betölteni a Flash SWF fájlt.
    A legvalószínűbb ok az, hogy a fájl már nem létezik, így a Ruffle számára nincs mit betölteni.
    Próbáld meg felvenni a kapcsolatot a webhely rendszergazdájával segítségért.
error-swf-cors =
    A Ruffle nem tudta betölteni a Flash SWF fájlt.
    A lekéréshez való hozzáférést valószínűleg letiltotta a CORS-házirend.
    Ha a szerver rendszergazdája vagy, kérjük, keresd fel a Ruffle wikit segítségért.
error-wasm-cors =
    A Ruffle nem tudta betölteni a szükséges ".wasm" összetevőt.
    A lekéréshez való hozzáférést valószínűleg letiltotta a CORS-házirend.
    Ha a szerver rendszergazdája vagy, kérjük keresd fel a Ruffle wikit segítségért.
error-wasm-invalid =
    A Ruffle komoly problémába ütközött az inicializálás során.
    Úgy tűnik, hogy ezen az oldalon hiányoznak vagy hibásak a Ruffle futtatásához szükséges fájlok.
    Ha a szerver rendszergazdája vagy, kérjük keresd fel a Ruffle wikit segítségért.
error-wasm-download =
    A Ruffle komoly problémába ütközött az inicializálás során.
    Ez gyakran magától megoldódik, ezért megpróbálhatod újratölteni az oldalt.
    Ellenkező esetben fordulj a webhely rendszergazdájához.
error-wasm-disabled-on-edge =
    A Ruffle nem tudta betölteni a szükséges ".wasm" összetevőt.
    A probléma megoldásához nyisd meg a böngésző beállításait, kattints az „Adatvédelem, keresés és szolgáltatások” elemre, görgess le, és kapcsold ki a „Fokozott biztonság a weben” opciót.
    Ez lehetővé teszi a böngésző számára, hogy betöltse a szükséges ".wasm" fájlokat.
    Ha a probléma továbbra is fennáll, lehet, hogy másik böngészőt kell használnod.
error-javascript-conflict =
    A Ruffle komoly problémába ütközött az inicializálás során.
    Úgy tűnik, ez az oldal olyan JavaScript-kódot használ, amely ütközik a Ruffle-lel.
    Ha a kiszolgáló rendszergazdája vagy, kérjük, próbáld meg a fájlt egy üres oldalon betölteni.
error-javascript-conflict-outdated = Megpróbálhatod továbbá feltölteni a Ruffle egy újabb verzióját is, amely megkerülheti a problémát (a jelenlegi elavult: { $buildDate }).
error-csp-conflict =
    A Ruffle komoly problémába ütközött az inicializálás során.
    A kiszolgáló tartalombiztonsági házirendje nem teszi lehetővé a szükséges „.wasm” összetevők futtatását.
    Ha a szerver rendszergazdája vagy, kérjük, keresd fel a Ruffle wikit segítségért.
error-unknown =
    A Ruffle komoly problémába ütközött, miközben megpróbálta megjeleníteni ezt a Flash-tartalmat.
    { $outdated ->
        [true] Ha a szerver rendszergazdája vagy, kérjük, próbáld meg feltölteni a Ruffle egy újabb verzióját (a jelenlegi elavult: { $buildDate }).
       *[false] Ennek nem lett volna szabad megtörténnie, ezért nagyon hálásak lennénk, ha jeleznéd a hibát!
    }
`,"save-manager.ftl":`save-delete-prompt = Biztosan törölni akarod ezt a mentést?
save-reload-prompt =
    Ennek a mentésnek az esetleges konfliktus nélküli { $action ->
        [delete] törléséhez
       *[replace] cseréjéhez
    } újra kell tölteni a tartalmat. Mégis szeretnéd folytatni?
save-download = Letöltés
save-replace = Csere
save-delete = Törlés
save-backup-all = Az összes fájl letöltése
`,"volume-controls.ftl":`volume-controls-mute = Némítás
volume-controls-unmute = Némítás feloldása
`},"id-ID":{"context_menu.ftl":`context-menu-download-swf = Unduh .swf
context-menu-copy-debug-info = Salin info debug
context-menu-open-save-manager = Buka Manager Save
context-menu-about-ruffle =
    { $flavor ->
        [extension] Tentang Ekstensi Ruffle ({ $version })
       *[other] Tentang Ruffle ({ $version })
    }
context-menu-hide = Sembunyikan Menu ini
context-menu-exit-fullscreen = Keluar dari layar penuh
context-menu-enter-fullscreen = Masuk mode layar penuh
context-menu-volume-controls = Pengaturan Volume
`,"messages.ftl":`message-cant-embed =
    Ruffle tidak dapat menjalankan Flash yang disematkan di halaman ini.
    Anda dapat mencoba membuka file di tab terpisah, untuk menghindari masalah ini.
panic-title = Terjadi kesalahan :(
more-info = Info lebih lanjut
run-anyway = Jalankan
continue = Lanjutkan
report-bug = Laporkan Bug
update-ruffle = Perbarui Ruffle
ruffle-demo = Demo Web
ruffle-desktop = Aplikasi Desktop
ruffle-wiki = Kunjungi Wiki Ruffle
view-error-details = Tunjukan Detail Error
open-in-new-tab = Buka di Tab Baru
click-to-unmute = Tekan untuk menyalakan suara
error-file-protocol =
    Sepertinya anda menjalankan Ruffle di protokol "file:". 
    Ini tidak berfungsi karena browser memblokir fitur ini dengan alasan keamanan.
    Sebagai gantinya, kami mengajak anda untuk membuat server lokal, menggunakan demo web atau aplikasi desktop.
error-javascript-config =
    Ruffle mengalami masalah besar karena konfigurasi JavaScript yang salah.
    Jika Anda adalah administrator server ini, kami mengajak Anda untuk memeriksa detail kesalahan untuk mengetahui parameter mana yang salah.
    Anda juga dapat membaca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-not-found =
    Ruffle gagal memuat komponen file ".wasm" yang diperlukan.
    Jika Anda adalah administrator server ini, pastikan file telah diunggah dengan benar.
    Jika masalah terus berlanjut, Anda mungkin perlu menggunakan pengaturan "publicPath": silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-mime-type =
    Ruffle mengalami masalah ketika mencoba melakukan inisialisasi.
    Server web ini tidak melayani file ".wasm" dengan tipe MIME yang benar.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-swf-fetch =
    Ruffle gagal memuat file SWF Flash.
    Kemungkinan file tersebut sudah tidak ada, sehingga tidak dapat dimuat oleh Ruffle.
    Coba hubungi administrator situs web ini untuk mendapatkan bantuan.
error-swf-cors =
    Ruffle gagal memuat file SWF Flash.
    Akses untuk memuat kemungkinan telah diblokir oleh kebijakan CORS.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-cors =
    Ruffle gagal memuat komponen file ".wasm" yang diperlukan.
    Akses untuk mengambil kemungkinan telah diblokir oleh kebijakan CORS.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-invalid =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Sepertinya halaman ini memiliki file yang hilang atau tidak valid untuk menjalankan Ruffle.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-download =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Hal ini sering kali dapat teratasi dengan sendirinya, sehingga Anda dapat mencoba memuat ulang halaman.
    Jika tidak, silakan hubungi administrator situs web ini.
error-wasm-disabled-on-edge =
    Ruffle gagal memuat komponen file ".wasm" yang diperlukan.
    Untuk mengatasinya, coba buka pengaturan peramban Anda, klik "Privasi, pencarian, dan layanan", turun ke bawah, dan matikan "Tingkatkan keamanan Anda di web".
    Ini akan memungkinkan browser Anda memuat file ".wasm" yang diperlukan.
    Jika masalah berlanjut, Anda mungkin harus menggunakan browser yang berbeda.
error-javascript-conflict =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Sepertinya situs web ini menggunakan kode JavaScript yang bertentangan dengan Ruffle.
    Jika Anda adalah administrator server ini, kami mengajak Anda untuk mencoba memuat file pada halaman kosong.
error-javascript-conflict-outdated = Anda juga dapat mencoba mengunggah versi Ruffle yang lebih baru yang mungkin dapat mengatasi masalah ini (versi saat ini sudah kedaluwarsa: { $buildDate }).
error-csp-conflict =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Kebijakan Keamanan Konten server web ini tidak mengizinkan komponen ".wasm" yang diperlukan untuk dijalankan.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-unknown =
    Ruffle telah mengalami masalah besar saat menampilkan konten Flash ini.
    { $outdated ->
        [true] Jika Anda administrator server ini, cobalah untuk mengganti versi Ruffle yang lebih baru (versi saat ini sudah kedaluwarsa: { $buildDate }).
       *[false] Hal ini seharusnya tidak terjadi, jadi kami sangat menghargai jika Anda dapat melaporkan bug ini!
    }
`,"save-manager.ftl":`save-delete-prompt = Anda yakin ingin menghapus berkas ini?
save-reload-prompt =
    Satu-satunya cara untuk { $action ->
        [delete] menghapus
       *[replace] mengganti
    } berkas penyimpanan ini tanpa potensi konflik adalah dengan memuat ulang konten ini. Apakah Anda ingin melanjutkannya?
save-download = Unduh
save-replace = Ganti
save-delete = Hapus
save-backup-all = Unduh semua berkas penyimpanan
`,"volume-controls.ftl":`volume-controls-mute = Bisukan
`},"it-IT":{"context_menu.ftl":`context-menu-download-swf = Scarica .swf
context-menu-copy-debug-info = Copia informazioni di debug
context-menu-open-save-manager = Apri Gestione salvataggi
context-menu-about-ruffle =
    { $flavor ->
        [extension] Informazioni su Ruffle Extension ({ $version })
       *[other] Informazioni su Ruffle ({ $version })
    }
context-menu-hide = Nascondi questo menu
context-menu-exit-fullscreen = Esci dallo schermo intero
context-menu-enter-fullscreen = Entra a schermo intero
context-menu-volume-controls = Controlli volume
`,"messages.ftl":`message-cant-embed =
    Ruffle non è stato in grado di eseguire il Flash incorporato in questa pagina.
    Puoi provare ad aprire il file in una scheda separata, per evitare questo problema.
panic-title = Qualcosa è andato storto :(
more-info = Maggiori informazioni
run-anyway = Esegui comunque
continue = Continua
report-bug = Segnala Un Bug
update-ruffle = Aggiorna Ruffle
ruffle-demo = Demo Web
ruffle-desktop = Applicazione Desktop
ruffle-wiki = Visualizza Ruffle Wiki
view-error-details = Visualizza Dettagli Errore
open-in-new-tab = Apri in una nuova scheda
click-to-unmute = Clicca per riattivare l'audio
error-file-protocol =
    Sembra che tu stia eseguendo Ruffle sul protocollo "file:".
    Questo non funziona come browser blocca molte funzionalità di lavoro per motivi di sicurezza.
    Invece, ti invitiamo a configurare un server locale o a utilizzare la demo web o l'applicazione desktop.
error-javascript-config =
    Ruffle ha incontrato un problema importante a causa di una configurazione JavaScript non corretta.
    Se sei l'amministratore del server, ti invitiamo a controllare i dettagli dell'errore per scoprire quale parametro è in errore.
    Puoi anche consultare il wiki Ruffle per aiuto.
error-wasm-not-found =
    Ruffle non è riuscito a caricare il componente di file ".wasm".
    Se sei l'amministratore del server, assicurati che il file sia stato caricato correttamente.
    Se il problema persiste, potrebbe essere necessario utilizzare l'impostazione "publicPath": si prega di consultare il wiki Ruffle per aiuto.
error-wasm-mime-type =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.
    Questo server web non serve ". asm" file con il tipo MIME corretto.
    Se sei l'amministratore del server, consulta la wiki Ruffle per aiuto.
error-swf-fetch =
    Ruffle non è riuscito a caricare il file Flash SWF.
    La ragione più probabile è che il file non esiste più, quindi non c'è nulla che Ruffle possa caricare.
    Prova a contattare l'amministratore del sito web per aiuto.
error-swf-cors =
    Ruffle non è riuscito a caricare il file SWF Flash.
    L'accesso al recupero probabilmente è stato bloccato dalla politica CORS.
    Se sei l'amministratore del server, consulta la wiki Ruffle per ricevere aiuto.
error-wasm-cors =
    Ruffle non è riuscito a caricare il componente di file ".wasm".
    L'accesso al recupero probabilmente è stato bloccato dalla politica CORS.
    Se sei l'amministratore del server, consulta la wiki Ruffle per ricevere aiuto.
error-wasm-invalid =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.
    Sembra che questa pagina abbia file mancanti o non validi per l'esecuzione di Ruffle.
    Se sei l'amministratore del server, consulta la wiki Ruffle per ricevere aiuto.
error-wasm-download =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.
    Questo può spesso risolversi da solo, quindi puoi provare a ricaricare la pagina.
    Altrimenti, contatta l'amministratore del sito.
error-wasm-disabled-on-edge =
    Ruffle non ha caricato il componente di file ".wasm" richiesto.
    Per risolvere il problema, prova ad aprire le impostazioni del tuo browser, facendo clic su "Privacy, search, and services", scorrendo verso il basso e disattivando "Migliora la tua sicurezza sul web".
    Questo permetterà al tuo browser di caricare i file ".wasm" richiesti.
    Se il problema persiste, potresti dover usare un browser diverso.
error-javascript-conflict =
    Ruffle ha riscontrato un problema importante durante il tentativo di inizializzazione.
    Sembra che questa pagina utilizzi il codice JavaScript che è in conflitto con Ruffle.
    Se sei l'amministratore del server, ti invitiamo a provare a caricare il file su una pagina vuota.
error-javascript-conflict-outdated = Puoi anche provare a caricare una versione più recente di Ruffle che potrebbe aggirare il problema (l'attuale build è obsoleta: { $buildDate }).
error-csp-conflict =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzare.
    La Politica di Sicurezza dei Contenuti di questo server web non consente l'impostazione richiesta". asm" componente da eseguire.
    Se sei l'amministratore del server, consulta la Ruffle wiki per aiuto.
error-unknown =
    Ruffle ha incontrato un problema importante durante il tentativo di visualizzare questo contenuto Flash.
    { $outdated ->
        [true] Se sei l'amministratore del server, prova a caricare una versione più recente di Ruffle (la versione attuale è obsoleta: { $buildDate }).
       *[false] Questo non dovrebbe accadere, quindi ci piacerebbe molto se si potesse inviare un bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Sei sicuro di voler eliminare questo file di salvataggio?
save-reload-prompt =
    L'unico modo per { $action ->
        [delete] delete
       *[replace] replace
    } questo salvataggio file senza potenziali conflitti è quello di ricaricare questo contenuto. Volete continuare comunque?
save-download = Scarica
save-replace = Sostituisci
save-delete = Elimina
save-backup-all = Scarica tutti i file di salvataggio
`,"volume-controls.ftl":`volume-controls-mute = Silenzia
`},"ja-JP":{"context_menu.ftl":`context-menu-download-swf = .swfをダウンロード
context-menu-copy-debug-info = デバッグ情報をコピー
context-menu-open-save-manager = セーブマネージャーを開く
context-menu-about-ruffle =
    { $flavor ->
        [extension] Ruffle拡張機能について ({ $version })
       *[other] Ruffleについて ({ $version })
    }
context-menu-hide = メニューを隠す
context-menu-exit-fullscreen = フルスクリーンを終了
context-menu-enter-fullscreen = フルスクリーンにする
context-menu-volume-controls = 音量
`,"messages.ftl":`message-cant-embed =
    Ruffleはこのページに埋め込まれた Flash を実行できませんでした。
    別のタブでファイルを開くことで、この問題を解決できるかもしれません。
panic-title = エラーが発生しました :(
more-info = 詳細情報
run-anyway = とにかく実行する
continue = 続行
report-bug = バグを報告
update-ruffle = Ruffleを更新
ruffle-demo = Webデモ
ruffle-desktop = デスクトップアプリケーション
ruffle-wiki = Ruffle Wikiを表示
view-error-details = エラーの詳細を表示
open-in-new-tab = 新しいタブで開く
click-to-unmute = クリックでミュートを解除
error-file-protocol =
    Ruffleを"file:"プロトコルで使用しているようです。
    ブラウザはセキュリティ上の理由から殆どの機能を制限しているため、正しく動作しません。
    ローカルサーバーをセットアップするか、ウェブデモまたはデスクトップアプリをご利用ください。
error-javascript-config =
    JavaScriptの設定が正しくないため、Ruffleで問題が発生しました。
    サーバー管理者の方は、エラーの詳細から、どのパラメーターに問題があるのかを確認してください。
    Ruffleのwikiを参照することで、解決方法が見つかるかもしれません。
error-wasm-not-found =
    Ruffleの初期化時に重大な問題が発生しました。
    このWebサーバーのコンテンツセキュリティポリシーが、実行に必要となる「.wasm」コンポーネントの実行を許可していません。サーバーの管理者の場合は、ファイルが正しくアップロードされているか確認をしてください。この問題が解決しない場合は、「publicPath」の設定を使用する必要があります。
    サーバーの管理者は、Ruffleのwikiを参照してください。
error-wasm-mime-type =
    Ruffleの初期化に失敗する大きな問題が発生しました。
    このWebサーバーは正しいMIMEタイプの「.wasm」ファイルを提供していません。
    サーバーの管理者は、Ruffleのwikiを参照してください。
error-invalid-swf =
    Ruffle は要求されたファイルを解析できません。
    最も考えられる原因は、要求されたファイルが有効な SWF でないことです。
error-swf-fetch =
    RuffleがFlash SWFファイルの読み込みに失敗しました。
    最も考えられる原因は、SWFファイルが既に存在しない事でRuffleが読み込みに失敗するという問題です。
    Webサイトの管理者にお問い合わせください。
error-swf-cors =
    RuffleはSWFファイルの読み込みに失敗しました。
    CORSポリシーの設定により、fetchへのアクセスがブロックされている可能性があります。
    サーバー管理者の方は、Ruffleのwikiを参照してください。
error-wasm-cors =
    Ruffleに必要となる「.wasm」ファイルコンポーネントの読み込みに失敗しました。
    CORSポリシーによってfetchへのアクセスがブロックされている可能性があります。
    サーバーの管理者は、Ruffle wikiを参照してください。
error-wasm-invalid =
    Ruffleの初期化時に重大な問題が発生しました。
    このページにはRuffleを実行するためのファイルが存在しないか、無効なファイルがあるかもしれません。
    サーバーの管理者は、Ruffleのwikiを参照してください。
error-wasm-download =
    Ruffleの初期化時に重大な問題が発生しました。
    この問題はページを再読み込みする事で大抵は解決するはずなので行なってみてください。
    もしも解決しない場合は、Webサイトの管理者にお問い合わせください。
error-wasm-disabled-on-edge =
    Ruffleに必要となる「.wasm」ファイルコンポーネントの読み込みに失敗しました。
    この問題を解決するにはブラウザーの設定を開き、「プライバシー、検索、サービス」をクリックし、下にスクロールで「Web上のセキュリティを強化する」をオフにしてみてください。
    これで必要となる「.wasm」ファイルが読み込まれるようになります。
    それでも問題が解決しない場合、別のブラウザーを使用する必要があるかもしれません。
error-javascript-conflict =
    Ruffleの初期化時に重大な問題が発生しました。
    このページではRuffleと競合するJavaScriptコードが使用されているかもしれません。
    サーバーの管理者は、空白のページでファイルを読み込みし直してみてください。
error-javascript-conflict-outdated = 新しいバージョンのRuffleをアップロードすることで、この問題を回避できる可能性があります。(現在のビルドは古い物です:{ $buildDate })
error-csp-conflict =
    Ruffleの初期化時に重大な問題が発生しました。
    このWebサーバーのコンテンツセキュリティポリシーが実行に必要となる「.wasm」コンポーネントの実行を許可していません。
    サーバーの管理者は、Ruffleのwikiを参照してください。
error-unknown =
    Flashコンテンツを表示する際にRuffleで問題が発生しました。
    { $outdated ->
        [true] 現在使用しているビルドは最新ではないため、サーバー管理者の方は、最新版のRuffleに更新してみてください(現在利用中のビルド: { $buildDate })。
       *[false] 想定外の問題なので、バグとして報告していただけると嬉しいです!
    }
`,"save-manager.ftl":`save-delete-prompt = このセーブファイルを削除してもよろしいですか?
save-reload-prompt =
    セーブファイルを競合の可能性なく { $action ->
        [delete] 削除する
       *[replace] 置き換える
    } ために、このコンテンツを再読み込みすることを推奨します。続行しますか？
save-download = ダウンロード
save-replace = 置き換え
save-delete = 削除
save-backup-all = すべてのセーブファイルをダウンロード
`,"volume-controls.ftl":`volume-controls-mute = 消音
`},"ko-KR":{"context_menu.ftl":`context-menu-download-swf = .swf 다운로드
context-menu-copy-debug-info = 디버그 정보 복사
context-menu-open-save-manager = 저장 관리자 열기
context-menu-about-ruffle =
    { $flavor ->
        [extension] Ruffle 확장 프로그램 정보 ({ $version })
       *[other] Ruffle 정보 ({ $version })
    }
context-menu-hide = 이 메뉴 숨기기
context-menu-exit-fullscreen = 전체화면 나가기
context-menu-enter-fullscreen = 전체화면으로 열기
context-menu-volume-controls = 음량 조절
`,"messages.ftl":`message-cant-embed = Ruffle이 이 페이지에 포함된 플래시를 실행할 수 없었습니다. 별도의 탭에서 파일을 열어봄으로서 이 문제를 해결할 수 있습니다.
panic-title = 문제가 발생했습니다 :(
more-info = 추가 정보
run-anyway = 그래도 실행하기
continue = 계속하기
report-bug = 버그 제보
update-ruffle = Ruffle 업데이트
ruffle-demo = 웹 데모
ruffle-desktop = 데스크톱 애플리케이션
ruffle-wiki = Ruffle 위키 보기
view-error-details = 오류 세부 정보 보기
open-in-new-tab = 새 탭에서 열기
click-to-unmute = 클릭하여 음소거 해제
clipboard-message-title = Ruffle에서 복사하고 붙여넣기
clipboard-message-description =
    { $variant ->
       *[unsupported] 이 브라우저는 클립보드 액세스를 지원하지 않습니다,
        [access-denied] 클립보드 액세스가 거절되었습니다,
    } 하지만 다음 단축키를 대신 사용할 수 있습니다:
clipboard-message-copy = { " " } 복사
clipboard-message-cut = { " " } 잘라내기
clipboard-message-paste = { " " } 붙여넣기
error-file-protocol =
    Ruffle을 "file:" 프로토콜에서 실행하고 있는 것으로 보입니다.
    브라우저에서는 이 프로토콜을 보안상의 이유로 많은 기능을 작동하지 않게 차단하므로 이 방법은 작동하지 않습니다.
    대신, 로컬 서버를 직접 열어서 설정하거나 웹 데모 또는 데스크톱 애플리케이션을 사용하시기 바랍니다.
error-javascript-config =
    잘못된 자바스크립트 설정으로 인해 Ruffle에서 중대한 문제가 발생했습니다.
    만약 당신이 서버 관리자인 경우, 오류 세부사항을 확인하여 어떤 매개변수가 잘못되었는지 알아보세요.
    또는 Ruffle 위키를 통해 도움을 받아 볼 수도 있습니다.
error-wasm-not-found =
    Ruffle이 ".wasm" 필수 파일 구성요소를 로드하지 못했습니다.
    만약 당신이 서버 관리자라면 파일이 올바르게 업로드되었는지 확인하세요.
    문제가 지속된다면 "publicPath" 옵션을 사용해야 할 수도 있습니다: Ruffle 위키를 참조하여 도움을 받으세요.
error-wasm-mime-type =
    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.
    이 웹 서버는 올바른 MIME 유형의 ".wasm" 파일을 제공하지 않습니다.
    만약 당신이 서버 관리자라면 Ruffle 위키를 통해 도움을 받으세요.
error-invalid-swf =
    Ruffle이 요청한 파일을 분석하지 못했습니다.
    요청한 파일이 유효한 SWF 파일이 아닐 가능성이 높습니다.
error-swf-fetch =
    Ruffle이 플래시 SWF 파일을 로드하는 데 실패하였습니다.
    이는 주로 파일이 더 이상 존재하지 않아 Ruffle이 로드할 수 있는 것이 없을 가능성이 높습니다.
    웹사이트 관리자에게 문의하여 도움을 받아보세요.
error-swf-cors =
    Ruffle이 플래시 SWF 파일을 로드하는 데 실패하였습니다.
    CORS 정책에 의해 데이터 가져오기에 대한 액세스가 차단되었을 수 있습니다.
    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.
error-wasm-cors =
    Ruffle이 ".wasm" 필수 파일 구성요소를 로드하지 못했습니다.
    CORS 정책에 의해 데이터 가져오기에 대한 액세스가 차단되었을 수 있습니다.
    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.
error-wasm-invalid =
    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.
    이 페이지에 Ruffle을 실행하기 위한 파일이 누락되었거나 잘못된 것 같습니다.
    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.
error-wasm-download =
    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.
    이 문제는 때때로 바로 해결될 수 있으므로 페이지를 새로고침하여 다시 시도해보세요.
    그래도 문제가 지속된다면, 웹사이트 관리자에게 문의해주세요.
error-wasm-disabled-on-edge =
    Ruffle이 ".wasm" 필수 파일 구성요소를 로드하지 못했습니다.
    이를 해결하려면 브라우저 설정에서 "개인 정보, 검색 및 서비스"를 클릭한 후, 하단으로 스크롤하여 "웹에서 보안 강화" 기능을 꺼야 합니다.
    이는 필요한 ".wasm" 파일을 브라우저에서 로드할 수 있도록 허용합니다.
    이 문제가 지속될 경우 다른 브라우저를 사용해야 할 수 있습니다.
error-javascript-conflict =
    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.
    이 페이지에서 사용되는 자바스크립트 코드가 Ruffle과 충돌하는 것으로 보입니다.
    만약 당신이 서버 관리자라면 빈 페이지에서 파일을 로드해보세요.
error-javascript-conflict-outdated = 또한 Ruffle의 최신 버전을 업로드하는 것을 시도하여 문제를 우회해볼 수 있습니다. (현재 빌드가 오래되었습니다: { $buildDate }).
error-csp-conflict =
    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.
    이 웹 서버의 CSP(Content Security Policy) 정책이 ".wasm" 필수 구성요소를 실행하는 것을 허용하지 않습니다.
    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.
error-unknown =
    Ruffle이 플래시 콘텐츠를 표시하려고 시도하는 동안 중대한 문제가 발생했습니다.
    { $outdated ->
        [true] 만약 당신이 서버 관리자라면, Ruffle의 최신 버전을 업로드하여 다시 시도해보세요. (현재 빌드가 오래되었습니다: { $buildDate }).
       *[false] 이런 현상이 발생해서는 안되므로, 버그를 제보해주신다면 감사하겠습니다!
    }
`,"save-manager.ftl":`save-delete-prompt = 정말로 이 세이브 파일을 삭제하시겠습니까?
save-reload-prompt =
    \b이 파일을 잠재적인 충돌 없이 { $action ->
        [delete] 삭제
       *[replace] 교체
    }하려면 콘텐츠를 다시 로드해야 합니다. 그래도 계속하시겠습니까?
save-download = 다운로드
save-replace = 교체
save-delete = 삭제
save-backup-all = 모든 저장 파일 다운로드
`,"volume-controls.ftl":`volume-controls-mute = 음소거
`},"nl-NL":{"context_menu.ftl":`context-menu-download-swf = .swf downloaden
context-menu-copy-debug-info = Kopieer debuginformatie
context-menu-open-save-manager = Open opgeslagen-data-manager
context-menu-about-ruffle =
    { $flavor ->
        [extension] Over Ruffle Uitbreiding ({ $version })
       *[other] Over Ruffle ({ $version })
    }
context-menu-hide = Verberg dit menu
context-menu-exit-fullscreen = Verlaat volledig scherm
context-menu-enter-fullscreen = Naar volledig scherm
context-menu-volume-controls = Geluidsniveaus
`,"messages.ftl":`message-cant-embed =
    Ruffle kon de Flash-inhoud op de pagina niet draaien.
    Je kan proberen het bestand in een apart tabblad te openen, om hier omheen te werken.
panic-title = Er ging iets mis :(
more-info = Meer informatie
run-anyway = Toch starten
continue = Doorgaan
report-bug = Bug rapporteren
update-ruffle = Ruffle updaten
ruffle-demo = Web Demo
ruffle-desktop = Desktopapplicatie
ruffle-wiki = Bekijk de Ruffle Wiki
view-error-details = Foutdetails tonen
open-in-new-tab = Openen in een nieuw tabblad
click-to-unmute = Klik om te ontdempen
error-file-protocol =
    Het lijkt erop dat je Ruffle gebruikt met het "file" protocol.
    De meeste browsers blokkeren dit om veiligheidsredenen, waardoor het niet werkt.
    In plaats hiervan raden we aan om een lokale server te draaien, de web demo te gebruiken, of de desktopapplicatie.
error-javascript-config =
    Ruffle heeft een groot probleem ondervonden vanwege een onjuiste JavaScript configuratie.
    Als je de serverbeheerder bent, kijk dan naar de foutdetails om te zien wat er verkeerd is.
    Je kan ook in de Ruffle wiki kijken voor hulp.
error-wasm-not-found =
    Ruffle kon het vereiste ".wasm" bestandscomponent niet laden.
    Als je de serverbeheerder bent, controleer dan of het bestaand juist is geüpload.
    Mocht het probleem blijven voordoen, moet je misschien de "publicPath" instelling gebruiken: zie ook de Ruffle wiki voor hulp.
error-wasm-mime-type =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Deze webserver serveert ".wasm" bestanden niet met het juiste MIME type.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-invalid-swf =
    Ruffle kon het gevraagde bestand niet verwerken.
    Waarschijnlijk is het geen geldig SWF bestand.
error-swf-fetch =
    Ruffle kon het Flash SWF bestand niet inladen.
    De meest waarschijnlijke reden is dat het bestand niet langer bestaat, en er dus niets is om in te laden.
    Probeer contact op te nemen met de websitebeheerder voor hulp.
error-swf-cors =
    Ruffle kon het Flash SWD bestand niet inladen.
    Toegang is waarschijnlijk geblokeerd door het CORS beleid.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-wasm-cors =
    Ruffle kon het vereiste ".wasm" bestandscomponent niet laden.
    Toegang is waarschijnlijk geblokeerd door het CORS beleid.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-wasm-invalid =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Het lijkt erop dat de Ruffle bestanden ontbreken of ongeldig zijn.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-wasm-download =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Dit lost zichzelf vaak op als je de bladzijde opnieuw inlaadt.
    Zo niet, neem dan contact op met de websitebeheerder.
error-wasm-disabled-on-edge =
    Ruffle kon het vereiste ".wasm" bestandscomponent niet laden.
    Om dit op te lossen, ga naar je browserinstellingen, klik op "Privacy, zoeken en diensten", scroll omlaag, en schakel "Verbeter je veiligheid op he web" uit.
    Dan kan je browser wel de vereiste ".wasm" bestanden inladen.
    Als het probleem zich blijft voordoen, moet je misschien een andere browser gebruiken.
error-javascript-conflict =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Het lijkt erop dat deze pagina JavaScript code gebruikt die conflicteert met Ruffle.
    Als je de serverbeheerder bent, raden we aan om het bestand op een lege pagina te proberen in te laden.
error-javascript-conflict-outdated = Je kan ook proberen een nieuwe versie van Ruffle te installeren, om om het probleem heen te werken (huidige versie is oud: { $buildDate }).
error-csp-conflict =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Het CSP-beleid staat niet toe dat het vereiste ".wasm" component kan draaien.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-unknown =
    Ruffle heeft een groot probleem onderbonden tijdens het weergeven van deze Flash-inhoud.
    { $outdated ->
        [true] Als je de serverbeheerder bent, upload dan een nieuwe versie van Ruffle (huidige versie is oud: { $buildDate }).
       *[false] Dit hoort niet te gebeuren, dus we stellen het op prijs als je de fout aan ons rapporteert!
    }
`,"save-manager.ftl":`save-delete-prompt = Weet je zeker dat je deze opgeslagen data wilt verwijderen?
save-reload-prompt =
    De enige manier om deze opgeslagen data te { $action ->
        [delete] verwijderen
       *[replace] vervangen
    } zonder potentiële problemen is door de inhoud opnieuw te laden. Toch doorgaan?
save-download = Downloaden
save-replace = Vervangen
save-delete = Verwijderen
save-backup-all = Download alle opgeslagen data
`,"volume-controls.ftl":`volume-controls-mute = Dempen
`},"pl-PL":{"context_menu.ftl":`context-menu-download-swf = Pobierz .swf
context-menu-copy-debug-info = Kopiuj informacje debugowania
context-menu-open-save-manager = Otwórz Menadżer Zapisów
context-menu-about-ruffle =
    { $flavor ->
        [extension] O Rozszerzeniu Ruffle ({ $version })
       *[other] O Ruffle ({ $version })
    }
context-menu-hide = Ukryj to menu
context-menu-exit-fullscreen = Zamknij pełny ekran
context-menu-enter-fullscreen = Pełny ekran
context-menu-volume-controls = Sterowanie głośnością
`,"messages.ftl":`message-cant-embed =
    Ruffle nie było w stanie uruchomić zawartości Flash w tej stronie.
    Możesz spróbować otworzyć plik w nowej karcie, aby uniknąć tego problemu.
panic-title = Coś poszło nie tak :(
more-info = Więcej informacji
run-anyway = Uruchom mimo tego
continue = Kontynuuj
report-bug = Zgłoś błąd
update-ruffle = Zaktualizuj Ruffle
ruffle-desktop = Aplikacja na komputer
ruffle-wiki = Zobacz Wiki Ruffle
view-error-details = Zobacz szczegóły błędu
open-in-new-tab = Otwórz w nowej karcie
click-to-unmute = Kliknij aby wyłączyć wyciszenie
error-file-protocol =
    Wygląda na to, że używasz Ruffle w protokole "plik:".
    To nie działa ponieważ przeglądarka blokuje wiele funkcji przed działaniem ze względów bezpieczeństwa.
    Zamiast tego zapraszamy do konfiguracji serwera lokalnego lub użycia aplikacji demo lub desktopowej.
error-javascript-config =
    Ruffle napotkał poważny problem z powodu nieprawidłowej konfiguracji JavaScript.
    Jeśli jesteś administratorem serwera, prosimy o sprawdzenie szczegółów błędu, aby dowiedzieć się, który parametr jest błędny.
    Możesz również zapoznać się z wiki Ruffle po pomoc.
error-wasm-not-found =
    Ruffle nie udało się załadować wymaganego komponentu pliku ".wasm".
    Jeśli jesteś administratorem serwera, upewnij się, że plik został poprawnie przesłany.
    Jeśli problem będzie się powtarzał, być może będziesz musiał użyć ustawienia "publicPath": zapoznaj się z wiki Ruffle aby uzyskać pomoc.
error-wasm-mime-type =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Ten serwer internetowy nie obsługuje ". asm" pliki z poprawnym typem MIME.
    Jeśli jesteś administratorem serwera, zapoznaj się z wiki Ruffle aby uzyskać pomoc.
error-invalid-swf =
    Ruffle nie może przetworzyć żądanego pliku.
    Prawdopodobnie to nie jest poprawny plik SWF.
error-swf-fetch =
    Ruffle nie udało się załadować pliku Flash SWF.
    Najbardziej prawdopodobnym powodem jest to, że plik już nie istnieje, więc Ruffle nie ma nic do załadowania.
    Spróbuj skontaktować się z administratorem witryny, aby uzyskać pomoc.
error-swf-cors =
    Ruffle nie udało się załadować pliku Flash SWF.
    Dostęp do pobierania został prawdopodobnie zablokowany przez politykę CORS.
    Jeśli jesteś administratorem serwera, prosimy o pomoc z wiki Ruffle.
error-wasm-cors =
    Ruffle nie udało się załadować wymaganego komponentu pliku ".wasm".
    Dostęp do pobierania został prawdopodobnie zablokowany przez politykę CORS.
    Jeśli jesteś administratorem serwera, prosimy o pomoc z wiki Ruffle.
error-wasm-invalid =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Wygląda na to, że ta strona ma brakujące lub nieprawidłowe pliki do uruchomienia Ruffle.
    Jeśli jesteś administratorem serwera, prosimy o pomoc z wiki Ruffle.
error-wasm-download =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Może to często rozwiązać siebie, więc możesz spróbować odświeżyć stronę.
    W przeciwnym razie skontaktuj się z administratorem witryny.
error-wasm-disabled-on-edge =
    Ruffle nie udało się załadować wymaganego komponentu pliku ".wasm".
    Aby to naprawić, spróbuj otworzyć ustawienia przeglądarki, klikając "Prywatność, wyszukiwanie i usługi", przewijając w dół i wyłączając "Zwiększ bezpieczeństwo w sieci".
    Pozwoli to przeglądarce załadować wymagane pliki ".wasm".
    Jeśli problem będzie się powtarzał, być może będziesz musiał użyć innej przeglądarki.
error-javascript-conflict =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Wygląda na to, że ta strona używa kodu JavaScript, który koliduje z Ruffle.
    Jeśli jesteś administratorem serwera, zapraszamy Cię do ładowania pliku na pustej stronie.
error-javascript-conflict-outdated = Możesz również spróbować przesłać nowszą wersję Ruffle, która może ominąć problem (obecna wersja jest przestarzała: { $buildDate }).
error-csp-conflict =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Polityka bezpieczeństwa zawartości tego serwera nie zezwala na wymagany ". wasm" komponent do uruchomienia.
    Jeśli jesteś administratorem serwera, zapoznaj się z wiki Ruffle po pomoc.
error-unknown =
    Ruffle napotkał poważny problem podczas próby wyświetlenia tej zawartości Flash.
    { $outdated ->
        [true] Jeśli jesteś administratorem serwera, spróbuj przesłać nowszą wersję Ruffle (obecna wersja jest przestarzała: { $buildDate }).
       *[false] To nie powinno się wydarzyć, więc bylibyśmy wdzięczni, gdybyś mógł zgłosić błąd!
    }
`,"save-manager.ftl":`save-delete-prompt = Czy na pewno chcesz skasować ten plik zapisu?
save-reload-prompt =
    Jedyną opcją, aby { $action ->
        [delete] usunąć
       *[replace] zamienić
    } ten plik zapisu bez potencjalnych konfliktów jest przeładowanie zawartości. Czy chcesz kontynuować?
save-download = Pobierz
save-replace = Zamień
save-delete = Usuń
save-backup-all = Pobierz wszystkie pliki zapisu
`,"volume-controls.ftl":`volume-controls-mute = Wycisz
`},"pt-BR":{"context_menu.ftl":`context-menu-download-swf = Baixar .swf
context-menu-copy-debug-info = Copiar informação de depuração
context-menu-open-save-manager = Abrir o Gerenciador de Salvamento
context-menu-about-ruffle =
    { $flavor ->
        [extension] Sobre a extensão do Ruffle ({ $version })
       *[other] Sobre o Ruffle ({ $version })
    }
context-menu-hide = Esconder este menu
context-menu-exit-fullscreen = Sair da tela cheia
context-menu-enter-fullscreen = Entrar em tela cheia
context-menu-volume-controls = Controles de volume
`,"messages.ftl":`message-cant-embed =
    Ruffle não conseguiu executar o Flash incorporado nesta página.
    Você pode tentar abrir o arquivo em uma guia separada para evitar esse problema.
panic-title = Algo deu errado :(
more-info = Mais informação
run-anyway = Executar mesmo assim
continue = Continuar
report-bug = Reportar Bug
update-ruffle = Atualizar Ruffle
ruffle-demo = Demo Web
ruffle-desktop = Aplicativo de Desktop
ruffle-wiki = Ver Wiki do Ruffle
view-error-details = Ver detalhes do erro
open-in-new-tab = Abrir em uma nova guia
click-to-unmute = Clique para ativar o som
error-file-protocol =
    Parece que você está executando o Ruffle no protocolo "file:".
    Isto não funciona como navegadores bloqueiam muitos recursos de funcionar por razões de segurança.
    Ao invés disso, convidamos você a configurar um servidor local ou a usar a demonstração da web, ou o aplicativo de desktop.
error-javascript-config =
    O Ruffle encontrou um grande problema devido a uma configuração incorreta do JavaScript.
    Se você for o administrador do servidor, convidamos você a verificar os detalhes do erro para descobrir qual parâmetro está com falha.
    Você também pode consultar o wiki do Ruffle para obter ajuda.
error-wasm-not-found =
    Ruffle falhou ao carregar o componente de arquivo ".wasm" necessário.
    Se você é o administrador do servidor, por favor, certifique-se de que o arquivo foi carregado corretamente.
    Se o problema persistir, você pode precisar usar a configuração "publicPath": por favor consulte a wiki do Ruffle para obter ajuda.
error-wasm-mime-type =
    Ruffle encontrou um grande problema ao tentar inicializar.
    Este servidor de web não está servindo ".wasm" arquivos com o tipo MIME correto.
    Se você é o administrador do servidor, por favor consulte o wiki do Ruffle para obter ajuda.
error-invalid-swf =
    Ruffle não pode analisar o arquivo solicitado.
    O motivo provável é que o arquivo solicitado não seja um SWF válido.
error-swf-fetch =
    Ruffle falhou ao carregar o arquivo Flash SWF.
    A razão provável é que o arquivo não existe mais, então não há nada para o Ruffle carregar.
    Tente contatar o administrador do site para obter ajuda.
error-swf-cors =
    Ruffle falhou ao carregar o arquivo Flash SWF.
    O acesso para fetch provavelmente foi bloqueado pela política CORS.
    Se você for o administrador do servidor, consulte o wiki do Ruffle para obter ajuda.
error-wasm-cors =
    Ruffle falhou ao carregar o componente de arquivo ".wasm" necessário.
    O acesso para fetch foi provavelmente bloqueado pela política CORS.
    Se você é o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.
error-wasm-invalid =
    Ruffle encontrou um grande problema ao tentar inicializar.
    Parece que esta página tem arquivos ausentes ou inválidos para executar o Ruffle.
    Se você for o administrador do servidor, consulte o wiki do Ruffle para obter ajuda.
error-wasm-download =
    O Ruffle encontrou um grande problema ao tentar inicializar.
    Muitas vezes isso pode se resolver sozinho, então você pode tentar recarregar a página.
    Caso contrário, contate o administrador do site.
error-wasm-disabled-on-edge =
    O Ruffle falhou ao carregar o componente de arquivo ".wasm" necessário.
    Para corrigir isso, tente abrir configurações do seu navegador, clicando em "Privacidade, pesquisa e serviços", rolando para baixo e desativando "Melhore sua segurança na web".
    Isso permitirá que seu navegador carregue os arquivos ".wasm" necessários.
    Se o problema persistir, talvez seja necessário usar um navegador diferente.
error-javascript-conflict =
    Ruffle encontrou um grande problema ao tentar inicializar.
    Parece que esta página usa código JavaScript que entra em conflito com o Ruffle.
    Se você for o administrador do servidor, convidamos você a tentar carregar o arquivo em uma página em branco.
error-javascript-conflict-outdated = Você também pode tentar fazer o upload de uma versão mais recente do Ruffle que pode contornar o problema (a compilação atual está desatualizada: { $buildDate }).
error-csp-conflict =
    Ruffle encontrou um grande problema ao tentar inicializar.
    A política de segurança de conteúdo deste servidor da web não permite a execução do componente ".wasm" necessário.
    Se você for o administrador do servidor, consulte o wiki do Ruffle para obter ajuda.
error-unknown =
    O Ruffle encontrou um grande problema enquanto tentava exibir este conteúdo em Flash.
    { $outdated ->
        [true] Se você é o administrador do servidor, por favor tente fazer o upload de uma versão mais recente do Ruffle (a compilação atual está desatualizada: { $buildDate }).
       *[false] Isso não deveria acontecer, então apreciaríamos muito se você pudesse arquivar um bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Tem certeza que deseja excluir este arquivo de salvamento?
save-reload-prompt =
    A única maneira de { $action ->
        [delete] excluir
       *[replace] substituir
    } este arquivo sem potencial conflito é recarregar este conteúdo. Deseja continuar mesmo assim?
save-download = Baixar
save-replace = Substituir
save-delete = Excluir
save-backup-all = Baixar todos os arquivos de salvamento
`,"volume-controls.ftl":`volume-controls-mute = Silenciar
`},"pt-PT":{"context_menu.ftl":`context-menu-download-swf = Descarga.swf
context-menu-copy-debug-info = Copiar informações de depuração
context-menu-open-save-manager = Abrir Gestor de Gravações
context-menu-about-ruffle =
    { $flavor ->
        [extension] Sobre a extensão do Ruffle ({ $version })
       *[other] Sobre o Ruffle ({ $version })
    }
context-menu-hide = Esconder este menu
context-menu-exit-fullscreen = Fechar Ecrã Inteiro
context-menu-enter-fullscreen = Abrir Ecrã Inteiro
context-menu-volume-controls = Controlos de volume
`,"messages.ftl":`message-cant-embed =
    O Ruffle não conseguiu abrir o Flash integrado nesta página.
    Para tentar resolver o problema, pode abrir o ficheiro num novo separador.
panic-title = Algo correu mal :(
more-info = Mais informações
run-anyway = Executar mesmo assim
continue = Continuar
report-bug = Reportar falha
update-ruffle = Atualizar o Ruffle
ruffle-demo = Demonstração na Web
ruffle-desktop = Aplicação para Desktop
ruffle-wiki = Ver a Wiki do Ruffle
view-error-details = Ver detalhes do erro
open-in-new-tab = Abrir num novo separador
click-to-unmute = Clique para ativar o som
error-file-protocol =
    Parece que executa o Ruffle no protocolo "file:".
    Isto não funciona, já que os navegadores bloqueiam muitas funcionalidades por razões de segurança.
    Em vez disto, recomendados configurar um servidor local ou usar a demonstração na web, ou a aplicação para desktop.
error-javascript-config =
    O Ruffle encontrou um problema maior devido a uma configuração de JavaScript incorreta.
    Se é o administrador do servidor, convidamo-lo a verificar os detalhes do erro para descobrir o parâmetro problemático.
    Pode ainda consultar a wiki do Ruffle para obter ajuda.
error-wasm-not-found =
    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necessário.
    Se é o administrador do servidor, por favor certifique-se de que o ficheiro foi devidamente carregado.
    Se o problema persistir, poderá querer usar a configuração "publicPath": consulte a wiki do Ruffle para obter ajuda.
error-wasm-mime-type =
    O Ruffle encontrou um problema maior ao tentar inicializar.
    Este servidor de web não suporta ficheiros ".wasm" com o tipo MIME correto.
    Se é o administrador do servidor, por favor consulte o wiki do Ruffle para obter ajuda.
error-swf-fetch =
    Ruffle falhou ao carregar o arquivo SWF do Flash
    A razão mais provável é que o arquivo não existe mais, então não há nada para o Ruffle carregar.
    Tente contactar o administrador do site para obter ajuda.
error-swf-cors =
    O Ruffle falhou ao carregar o ficheiro Flash SWF.
    Acesso a buscar foi provavelmente bloqueado pela política de CORS.
    Se é o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.
error-wasm-cors =
    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necessário.
    O acesso a buscar foi provavelmente bloqueado pela política CORS.
    Se é o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.
error-wasm-invalid =
    Ruffle encontrou um grande problema ao tentar inicializar.
    Parece que esta página está ausente ou arquivos inválidos para executar o Ruffle.
    Se você é o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.
error-wasm-download =
    O Ruffle encontrou um problema maior ao tentar inicializar.
    Isto frequentemente resolve-se sozinho, portanto experimente recarregar a página.
    Caso contrário, por favor contacte o administrador do site.
error-wasm-disabled-on-edge =
    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necessário.
    Para corrigir isso, tente abrir as opções do seu navegador, clicando em "Privacidade, pesquisa e serviços", rolando para baixo e desativando "Melhore a sua segurança na web".
    Isto permitirá ao seu navegador carregar os ficheiros ".wasm" necessários.
    Se o problema persistir, talvez seja necessário usar um navegador diferente.
error-javascript-conflict =
    O Ruffle encontrou um problema maior ao tentar inicializar.
    Parece que esta página usa código JavaScript que entra em conflito com o Ruffle.
    Se é o administrador do servidor, convidamo-lo a tentar carregar o ficheiro em numa página em branco.
error-javascript-conflict-outdated = Pode ainda tentar carregar uma versão mais recente do Ruffle que talvez contorne o problema (a compilação atual está desatualizada: { $buildDate }).
error-csp-conflict =
    O Ruffle encontrou um problema maior ao tentar inicializar.
    A Política de Segurança de Conteúdo deste servidor não permite que o componente ".wasm" necessário seja executado.
    Se é o administrador do servidor, por favor consulte o wiki do Ruffle para obter ajuda.
error-unknown =
    O Ruffle encontrou um problema maior enquanto tentava mostrar este conteúdo em Flash.
    { $outdated ->
        [true] Se é o administrador do servidor, por favor tente carregar uma versão mais recente do Ruffle (a compilação atual está desatualizada: { $buildDate }).
       *[false] Não era suposto isto ter acontecido, por isso agradeceríamos muito se pudesse reportar a falha!
    }
`,"save-manager.ftl":`save-delete-prompt = Tem a certeza de que quer apagar esta gravação?
save-reload-prompt =
    A única forma de { $action ->
        [delete] apagar
       *[replace] substituir
    } esta gravação sem um potencial conflito é recarregar este conteúdo. Deseja continuar mesmo assim?
save-download = Descarregar
save-replace = Substituir
save-delete = Apagar
save-backup-all = Descarregar todas as gravações
`,"volume-controls.ftl":`volume-controls-mute = Silenciar
`},"ro-RO":{"context_menu.ftl":`context-menu-download-swf = Descarcă .swf
context-menu-copy-debug-info = Copiază informațiile de depanare
context-menu-open-save-manager = Deschide managerul de salvări
context-menu-about-ruffle =
    { $flavor ->
        [extension] Despre extensia Ruffle ({ $version })
       *[other] Despre Ruffle ({ $version })
    }
context-menu-hide = Ascunde acest meniu
context-menu-exit-fullscreen = Ieși din ecranul complet
context-menu-enter-fullscreen = Intră în ecran complet
context-menu-volume-controls = Comenzi pentru volum
`,"messages.ftl":`message-cant-embed =
    Ruffle nu a putut să ruleze Flash încorporat în această pagină.
    Poți încerca să deschizi fișierul într-o filă separată, pentru a evita această problemă.
panic-title = Ceva a mers prost :(
more-info = Mai multe informații
run-anyway = Rulează oricum
continue = Continuă
report-bug = Raportează un bug
update-ruffle = Actualizează Ruffle
ruffle-demo = Demo web
ruffle-desktop = Aplicație desktop
ruffle-wiki = Vezi wikiul Ruffle
view-error-details = Vezi detaliile erorii
open-in-new-tab = Deschide într-o filă nouă
click-to-unmute = Dă click pentru a dezmuți
error-file-protocol =
    Se pare că rulezi Ruffle pe protocolul „file:”.
    Acesta nu funcționează, deoarece browserele blochează funcționarea multor funcții din motive de securitate.
    În schimb, te invităm să configurezi un server local sau să folosești fie demoul web, fie aplicația desktop.
error-javascript-config =
    Ruffle a întâmpinat o problemă majoră din cauza unei configurări incorecte a JavaScript.
    Dacă ești administratorul serverului, te invităm să verifici detaliile erorii pentru a afla care parametru este defect.
    De asemenea, poți consulta wikiul Ruffle pentru ajutor.
error-wasm-not-found =
    Ruffle a eșuat la încărcarea componentei de fișier „.wasm”.
    Dacă ești administratorul serverului, te rugăm să te asiguri că fișierul a fost încărcat corect.
    Dacă problema persistă, poate fi necesar să folosești setarea „publicPath”: te rugăm să consulți wikiul Ruffle pentru ajutor.
error-wasm-mime-type =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să se inițializeze.
    Acest server web nu servește fișiere „.wasm” cu tipul MIME corect.
    Dacă ești administratorul serverului, te rugăm să consulți wikiul Ruffle pentru ajutor.
error-swf-fetch =
    Ruffle a eșuat la încărcarea fișierului SWF.
    Motivul cel mai probabil este că fișierul nu mai există, deci Ruffle nu mai are ce să încarce.
    Încearcă să contactezi administratorul site-ului web pentru ajutor.
error-swf-cors =
    Ruffle a eșuat la încărcarea fișierului SWF.
    Accesul de preluare a fost probabil blocat de politica CORS.
    Dacă ești administratorul serverului, te rugăm să consulți wikiul Ruffle pentru ajutor.
error-wasm-cors =
    Ruffle a eșuat la încărcarea componentei de fișier „.wasm”.
    Accesul de preluare a fost probabil blocat de politica CORS.
    Dacă ești administratorul serverului, te rugăm să consulți wikiul Ruffle pentru ajutor.
error-wasm-invalid =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să se inițializeze.
    Se pare că această pagină are fișiere lipsă sau nevalide pentru a rula Ruffle.
    Dacă ești administratorul serverului, te rugăm să consulți wikiul Ruffle pentru ajutor.
error-wasm-download =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să inițializeze.
    Acest lucru se poate rezolva adesea de la sine, așa că poți încerca să reîncarci pagina.
    În caz contrar, te rugăm să contactezi administratorul site-ului web.
error-wasm-disabled-on-edge =
    Ruffle a eșuat la încărcarea componentei de fișier „.wasm”.
    Pentru a remedia acest lucru, încearcă să deschizi setările browserului, să faci clic pe „Confidențialitate, căutare și servicii”, să derulezi în jos și să dezactivezi „Îmbunătățiți-vă securitatea pe web”.
    Acest lucru va permite browserului să încarce fișierele „.wasm” necesare.
    Dacă problema persistă, este posibil să trebuiască să folosești un alt browser.
error-javascript-conflict =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să se inițializeze.
    Se pare că această pagină folosește cod JavaScript care intră în conflict cu Ruffle.
    Dacă ești administratorul serverului, te invităm să încerci încărcarea fișierului pe o pagină goală.
error-javascript-conflict-outdated = De asemenea, poți încerca să încarci o versiune mai recentă de Ruffle care ar putea ocoli problema (versiunea actuală este învechită: { $buildDate }).
error-csp-conflict =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să se inițializeze.
    Politica de securitate a conținutului a acestui server web nu permite rularea componentei „.wasm” necesare.
    Dacă ești administratorul serverului, te rugăm să consulți wikiul Ruffle pentru ajutor.
error-unknown =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să afișeze acest conținut Flash.
    { $outdated ->
        [true] Dacă ești administratorul serverului, te rugăm să încerci să încarci o versiune mai recentă de Ruffle (versiunea actuală este învechită: { $buildDate }).
       *[false] Acest lucru nu ar trebui să se întâmple, așa că am aprecia foarte mult dacă ai putea trimite un bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Sigur vrei să ștergi acest fișier de salvare?
save-reload-prompt =
    Singura cale de a { $action ->
        [delete] șterge
       *[replace] înlocui
    } acest fișier de salvare fără un conflict potențial este de a reîncărca acest conținut. Dorești să continui oricum?
save-download = Descarcă
save-replace = Înlocuiește
save-delete = Șterge
`,"volume-controls.ftl":""},"ru-RU":{"context_menu.ftl":`context-menu-download-swf = Скачать .swf
context-menu-copy-debug-info = Копировать отладочную информацию
context-menu-open-save-manager = Менеджер сохранений
context-menu-about-ruffle =
    { $flavor ->
        [extension] О расширении Ruffle ({ $version })
       *[other] О Ruffle ({ $version })
    }
context-menu-hide = Скрыть это меню
context-menu-exit-fullscreen = Оконный режим
context-menu-enter-fullscreen = Полноэкранный режим
context-menu-volume-controls = Громкость
`,"messages.ftl":`message-cant-embed =
    Ruffle не смог запустить Flash, используемый на этой странице.
    Чтобы обойти эту проблему, вы можете попробовать открыть файл в отдельной вкладке.
panic-title = Что-то пошло не так :(
more-info = Подробнее
run-anyway = Всё равно запустить
continue = Продолжить
report-bug = Сообщить об ошибке
update-ruffle = Обновить Ruffle
ruffle-demo = Веб-демо
ruffle-desktop = Настольное приложение
ruffle-wiki = Открыть вики Ruffle
enable-hardware-acceleration = Похоже, что аппаратное ускорение отключено. Хотя Ruffle может работать, но он может быть очень медленным. Вы можете узнать, как включить аппаратное ускорение, перейдя по ссылке ниже:
enable-hardware-acceleration-link = FAQ - Аппаратное ускорение Chrome
view-error-details = Сведения об ошибке
open-in-new-tab = Открыть в новой вкладке
click-to-unmute = Включить звук
clipboard-message-title = Копирование и вставка в Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Ваш браузер не поддерживает полный доступ к буферу обмена.
        [access-denied]  Доступ к буферу обмена был отклонён.
    } Используйте сочетания клавиш для вырезания, копирования и вставки:
clipboard-message-copy = { " " } копировать
clipboard-message-cut = { " " } вырезать
clipboard-message-paste = { " " } вставить
error-file-protocol =
    Похоже, что вы запускаете Ruffle по протоколу "file:".
    Это не работает, поскольку браузеры блокируют работу многих функций по соображениям безопасности.
    Вместо этого мы предлагаем вам использовать настольное приложение, веб-демо или настроить локальный сервер.
error-javascript-config =
    Возникла серьёзная ошибка из-за неправильной конфигурации JavaScript.
    Если вы являетесь администратором сервера, мы предлагаем вам проверить детали ошибки, чтобы выяснить, какой параметр дал сбой.
    Вы также можете обратиться за помощью к вики Ruffle.
error-wasm-not-found =
    Ruffle не удалось запустить необходимый компонент файла ".wasm".
    Если вы администратор сервера, пожалуйста, убедитесь, что файл был загружен правильно.
    Если проблема не устраняется, вам может потребоваться использовать настройку "publicPath": обратитесь к вики Ruffle.
error-wasm-mime-type =
    Ruffle столкнулся с серьёзной проблемой во время инициализации.
    Этот веб-сервер не предоставляет файлы ".wasm" с правильным типом MIME.
    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.
error-invalid-swf =
    Ruffle не удалось обработать запрашиваемый файл.
    Вероятнее всего, данный SWF повреждён или не является таковым.
error-swf-fetch =
    Ruffle не удалось запустить SWF-файл Flash.
    Вероятнее всего, файл больше не существует, поэтому Ruffle нечего загружать.
    Попробуйте связаться с администратором сайта для получения помощи.
error-swf-cors =
    Ruffle не удалось запустить SWF-файл Flash.
    Скорее всего, доступ к файлу был заблокирован политикой CORS.
    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.
error-wasm-cors =
    Ruffle не удалось загрузить необходимый компонент файла ".wasm".
    Скорее всего, доступ к файлу был заблокирован политикой CORS.
    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.
error-wasm-invalid =
    Ruffle столкнулся с серьёзной проблемой во время инициализации.
    Похоже, что на этой странице отсутствуют файлы для запуска Ruffle или они недействительны.
    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.
error-wasm-download =
    Ruffle столкнулся с серьёзной проблемой во время инициализации.
    Чаще всего эта проблема устраняется сама собою, поэтому вы можете просто перезагрузить страницу.
    Если ошибка продолжает появляться, свяжитесь с администратором сайта.
error-wasm-disabled-on-edge =
    Ruffle не удалось загрузить необходимый компонент файла ".wasm".
    Чтобы исправить эту ошибку, попробуйте отключить в настройках браузера дополнительную конфиденциальность. Это позволит браузеру загрузить необходимые WASM-файлы.
    Если проблема осталась, вам может потребоваться другой браузер.
error-javascript-conflict =
    Ruffle столкнулся с серьёзной проблемой во время инициализации.
    Похоже, что эта страница использует конфликтующий с Ruffle код JavaScript.
    Если вы являетесь администратором сервера, мы предлагаем вам попробовать запустить файл на пустой странице.
error-javascript-conflict-outdated = Вы также можете попробовать загрузить последнюю версию Ruffle, которая может обойти проблему (текущая версия устарела: { $buildDate }).
error-csp-conflict =
    Ruffle столкнулся с серьёзной проблемой во время инициализации.
    Политика безопасности содержимого этого веб-сервера не позволяет использовать требуемые компоненты для запуска ".wasm".
    Если вы являетесь администратором сервера, обратитесь за помощью к вики Ruffle.
error-unknown =
    Ruffle столкнулся с серьёзной проблемой при попытке отобразить этот Flash-контент.
    { $outdated ->
        [true] Если вы администратор сервера, попробуйте загрузить более новую версию Ruffle (текущая версия устарела: { $buildDate }).
       *[false] Этого не должно происходить, поэтому мы будем очень признательны, если вы сообщите нам об ошибке!
    }
`,"save-manager.ftl":`save-delete-prompt = Удалить этот файл сохранения?
save-reload-prompt =
    Единственный способ { $action ->
        [delete] удалить
       *[replace] заменить
    } этот файл сохранения без потенциального конфликта – перезапустить запущенный контент. Всё равно продолжить?
save-download = Скачать
save-replace = Заменить
save-delete = Удалить
save-backup-all = Скачать все сохранения
`,"volume-controls.ftl":`volume-controls-mute = Без звука
volume-controls-unmute = Включить звук
`},"sk-SK":{"context_menu.ftl":`context-menu-download-swf = Stiahnuť .swf
context-menu-copy-debug-info = Skopírovať debug info
context-menu-open-save-manager = Otvoriť správcu uložení
context-menu-about-ruffle =
    { $flavor ->
        [extension] O Ruffle rozšírení ({ $version })
       *[other] O Ruffle ({ $version })
    }
context-menu-hide = Skryť menu
context-menu-exit-fullscreen = Ukončiť režim celej obrazovky
context-menu-enter-fullscreen = Prejsť do režimu celej obrazovky
context-menu-volume-controls = Ovládanie hlasitosti
`,"messages.ftl":`message-cant-embed =
    Ruffle nemohol spustiť Flash vložený na tejto stránke.
    Môžete sa pokúsiť otvoriť súbor na samostatnej karte, aby ste sa vyhli tomuto problému.
panic-title = Niečo sa pokazilo :(
more-info = Viac informácií
run-anyway = Spustiť aj tak
continue = Pokračovať
report-bug = Nahlásiť chybu
update-ruffle = Aktualizovať Ruffle
ruffle-demo = Web Demo
ruffle-desktop = Desktopová aplikácia
ruffle-wiki = Zobraziť Ruffle Wiki
view-error-details = Zobraziť podrobnosti o chybe
open-in-new-tab = Otvoriť na novej karte
click-to-unmute = Kliknutím zapnete zvuk
clipboard-message-title = Kopírovanie a vkladanie v Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Váš prehliadač nepodporuje plný prístup k schránke,
        [access-denied] Prístup k schránke bol odmietnutý,
    } ale namiesto toho môžete vždy použiť tieto skratky:
clipboard-message-copy = { " " } pre kopírovanie
clipboard-message-cut = { " " } pre vystrihovanie
clipboard-message-paste = { " " } pre vloženie
error-file-protocol =
    Zdá sa, že používate Ruffle na protokole "file:".
    To nie je možné, pretože prehliadače blokujú fungovanie mnohých funkcií z bezpečnostných dôvodov.
    Namiesto toho vám odporúčame nastaviť lokálny server alebo použiť web demo či desktopovú aplikáciu.
error-javascript-config =
    Ruffle narazil na problém v dôsledku nesprávnej konfigurácie JavaScriptu.
    Ak ste správcom servera, odporúčame vám skontrolovať podrobnosti o chybe, aby ste zistili, ktorý parameter je chybný.
    Pomoc môžete získať aj na wiki Ruffle.
error-wasm-not-found =
    Ruffle sa nepodarilo načítať požadovaný komponent súboru „.wasm“.
    Ak ste správcom servera, skontrolujte, či bol súbor správne nahraný.
    Ak problém pretrváva, možno budete musieť použiť nastavenie „publicPath“: pomoc nájdete na wiki Ruffle.
error-wasm-mime-type =
    Ruffle narazil na problém pri pokuse o inicializáciu.
    Tento webový server neposkytuje súbory „.wasm“ so správnym typom MIME.
    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.
error-invalid-swf =
    Ruffle nemôže spracovať požadovaný súbor.
    Najpravdepodobnejším dôvodom je, že požadovaný súbor nie je platným súborom SWF.
error-swf-fetch =
    Ruffle sa nepodarilo načítať SWF súbor Flash.
    Najpravdepodobnejším dôvodom je, že súbor už neexistuje, takže Ruffle nemá čo načítať.
    Skúste požiadať o pomoc správcu webovej lokality.
error-swf-cors =
    Ruffle sa nepodarilo načítať SWF súbor Flash.
    Prístup k načítaniu bol pravdepodobne zablokovaný politikou CORS.
    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.
error-wasm-cors =
    Ruffle sa nepodarilo načítať požadovaný komponent súboru „.wasm“.
    Prístup k načítaniu bol pravdepodobne zablokovaný politikou CORS.
    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.
error-wasm-invalid =
    Ruffle narazil na problém pri pokuse o inicializáciu.
    Zdá sa, že na tejto stránke chýbajú alebo sú neplatné súbory na spustenie Ruffle.
    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.
error-wasm-download =
    Ruffle narazil na problém pri pokuse o inicializáciu.
    Problém sa môže vyriešiť aj sám, takže môžete skúsiť stránku načítať znova.
    V opačnom prípade kontaktujte administrátora stránky.
error-wasm-disabled-on-edge =
    Ruffle sa nepodarilo načítať požadovaný komponent súboru „.wasm“.
    Ak chcete tento problém vyriešiť, skúste otvoriť nastavenia prehliadača, kliknite na položku „Ochrana osobných údajov, vyhľadávanie a služby“, prejdite nadol a vypnite možnosť „Zvýšte svoju bezpečnosť na webe“.
    Vášmu prehliadaču to umožní načítať požadované súbory „.wasm“.
    Ak problém pretrváva, možno budete musieť použiť iný prehliadač.
error-javascript-conflict =
    Ruffle narazil na problém pri pokuse o inicializáciu.
    Zdá sa, že táto stránka používa kód JavaScript, ktorý je v konflikte s Ruffle.
    Ak ste správcom servera, odporúčame vám skúsiť načítať súbor na prázdnu stránku.
error-javascript-conflict-outdated = Môžete sa tiež pokúsiť nahrať novšiu verziu Ruffle, ktorá môže daný problém vyriešiť (aktuálny build je zastaraný: { $buildDate }).
error-csp-conflict =
    Ruffle narazil na problém pri pokuse o inicializáciu.
    Zásady zabezpečenia obsahu tohto webového servera nepovoľujú spustenie požadovaného komponentu „.wasm“.
    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.
error-unknown =
    Ruffle narazil na problém pri pokuse zobraziť tento Flash obsah.
    { $outdated ->
         [true] Ak ste správcom servera, skúste nahrať novšiu verziu Ruffle (aktuálny build je zastaraný: { $buildDate }).
        *[false] Toto by sa nemalo stať, takže by sme naozaj ocenili, keby ste mohli nahlásiť chybu!
    }
`,"save-manager.ftl":`save-delete-prompt = Naozaj chcete odstrániť tento súbor s uloženými pozíciami?
save-reload-prompt =
    Jediný spôsob, ako { $action ->
         [delete] vymazať
        *[replace] nahradiť
    } tento súbor s uloženými pozíciami bez potenciálneho konfliktu je opätovné načítanie tohto obsahu. Chcete napriek tomu pokračovať?
save-download = Stiahnuť
save-replace = Nahradiť
save-delete = Vymazať
save-backup-all = Stiahnuť všetky súbory s uloženými pozíciami
`,"volume-controls.ftl":`volume-controls-mute = Stlmiť
`},"sv-SE":{"context_menu.ftl":`context-menu-download-swf = Ladda ner .swf
context-menu-copy-debug-info = Kopiera felsökningsinfo
context-menu-open-save-manager = Öppna Sparhanteraren
context-menu-about-ruffle =
    { $flavor ->
        [extension] Om Ruffle-tillägget ({ $version })
       *[other] Om Ruffle ({ $version })
    }
context-menu-hide = Dölj denna meny
context-menu-exit-fullscreen = Avsluta helskärm
context-menu-enter-fullscreen = Helskärm
context-menu-volume-controls = Ljudkontroller
`,"messages.ftl":`message-cant-embed =
    Ruffle kunde inte köra det inbäddade Flashinnehållet på denna sida.
    Du kan försöka öppna filen i en separat flik för att kringgå problemet.
panic-title = Något gick fel :(
more-info = Mer info
run-anyway = Kör ändå
continue = Fortsätt
report-bug = Rapportera Bugg
update-ruffle = Uppdatera Ruffle
ruffle-demo = Webbdemo
ruffle-desktop = Skrivbordsprogram
ruffle-wiki = Se Ruffle-wiki
view-error-details = Visa Felinformation
open-in-new-tab = Öppna i en ny flik
click-to-unmute = Klicka för ljud
error-file-protocol =
    Det verkar som att du kör Ruffle på "fil:"-protokollet.
    Detta fungerar inte eftersom webbläsare blockerar många funktioner från att fungera av säkerhetsskäl.
    Istället bjuder vi in dig att sätta upp en lokal server eller antingen använda webbdemon eller skrivbordsprogrammet.
error-javascript-config =
    Ruffle har stött på ett stort fel på grund av en felaktig JavaScript-konfiguration.
    Om du är serveradministratören bjuder vi in dig att kontrollera feldetaljerna för att ta reda på vilken parameter som är felaktig.
    Du kan också konsultera Ruffle-wikin för hjälp.
error-wasm-not-found =
    Ruffle misslyckades ladda ".wasm"-filkomponenten.
    Om du är serveradministratören se till att filen har laddats upp korrekt.
    Om problemet kvarstår kan du behöva använda inställningen "publicPath": konsultera vänligen Ruffle-wikin för hjälp.
error-wasm-mime-type =
    Ruffle har stött på ett stort fel under initialiseringen.
    Denna webbserver serverar inte ".wasm"-filer med korrekt MIME-typ.
    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.
error-invalid-swf =
    Ruffle kan inte läsa den begärda filen.
    Det mest sannolika skälet är att den begärda filen inte är en giltig SWF.
error-swf-fetch =
    Ruffle misslyckades ladda SWF-filen.
    Det mest sannolika skälet är att filen inte längre existerar, så det finns inget för Ruffle att köra.
    Försök att kontakta webbplatsadministratören för hjälp.
error-swf-cors =
    Ruffle misslyckades ladda SWF-filen.
    Åtkomst att hämta har sannolikt blockerats av CORS-policy.
    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.
error-wasm-cors =
    Ruffle misslyckades ladda ".wasm"-filkomponenten.
    Åtkomst att hämta har sannolikt blockerats av CORS-policy.
    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.
error-wasm-invalid =
    Ruffle har stött på ett stort fel under initialiseringen.
    Det verkar som att den här sidan har saknade eller ogiltiga filer för att köra Ruffle.
    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.
error-wasm-download =
    Ruffle har stött på ett stort fel under initialiseringen.
    Detta kan ofta lösas av sig själv så du kan prova att ladda om sidan.
    Kontakta annars vänligen webbplatsens administratör.
error-wasm-disabled-on-edge =
    Ruffle misslyckades ladda ".wasm"-filkomponenten.
    För att åtgärda detta försök att öppna webbläsarens inställningar, klicka på "Sekretess, sökning och tjänster", bläddra ner och stäng av "Förbättra säkerheten på webben".
    Detta tillåter din webbläsare att ladda ".wasm"-filerna.
    Om problemet kvarstår kan du behöva använda en annan webbläsare.
error-javascript-conflict =
    Ruffle har stött på ett stort fel under initialiseringen.
    Det verkar som att den här sidan använder JavaScript-kod som stör Ruffle.
    Om du är serveradministratören bjuder vi in dig att försöka köra filen på en blank sida.
error-javascript-conflict-outdated = Du kan också försöka ladda upp en nyare version av Ruffle, vilket kan kringgå problemet (nuvarande version är utdaterad: { $buildDate }).
error-csp-conflict =
    Ruffle har stött på ett stort fel under initialiseringen.
    Webbserverns Content Security Policy tillåter inte ".wasm"-komponenten att köra.
    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.
error-unknown =
    Ruffle har stött på ett stort fel medan den försökte visa Flashinnehållet.
    { $outdated ->
        [true] Om du är serveradministratören försök att ladda upp en nyare version av Ruffle (nuvarande version är utdaterad: { $buildDate }).
       *[false] Detta är inte tänkt att hända så vi skulle verkligen uppskatta om du kunde rapportera in en bugg!
    }
`,"save-manager.ftl":`save-delete-prompt = Är du säker på att du vill radera sparfilen?
save-reload-prompt =
    Det enda sättet att { $action ->
        [delete] radera
       *[replace] ersätta
    } denna sparfil utan potentiell konflikt är att ladda om innehållet. Vill du fortsätta ändå?
save-download = Ladda ner
save-replace = Ersätt
save-delete = Radera
save-backup-all = Ladda ner alla sparfiler
`,"volume-controls.ftl":`volume-controls-mute = Stäng av ljud
`},"tr-TR":{"context_menu.ftl":`context-menu-download-swf = İndir .swf
context-menu-copy-debug-info = Hata ayıklama bilgisini kopyala
context-menu-open-save-manager = Kayıt Yöneticisini Aç
context-menu-about-ruffle =
    { $flavor ->
        [extension] Ruffle Uzantısı Hakkında ({ $version })
       *[other] Ruffle Hakkında ({ $version })
    }
context-menu-hide = Bu menüyü gizle
context-menu-exit-fullscreen = Tam ekrandan çık
context-menu-enter-fullscreen = Tam ekran yap
context-menu-volume-controls = Ses kontrolleri
`,"messages.ftl":`message-cant-embed =
    Ruffle, bu sayfaya gömülü Flash'ı çalıştıramadı.
    Bu sorunu ortadan kaldırmak için dosyayı ayrı bir sekmede açmayı deneyebilirsiniz.
panic-title = Bir şeyler yanlış gitti :(
more-info = Daha fazla bilgi
run-anyway = Yine de çalıştır
continue = Devam et
report-bug = Hata Bildir
update-ruffle = Ruffle'ı Güncelle
ruffle-demo = Ağ Demosu
ruffle-desktop = Masaüstü Uygulaması
ruffle-wiki = Ruffle Wiki'yi Görüntüle
view-error-details = Hata Ayrıntılarını Görüntüle
open-in-new-tab = Yeni sekmede aç
click-to-unmute = Sesi açmak için tıklayın
error-file-protocol =
    Görünüşe göre Ruffle'ı "dosya:" protokolünde çalıştırıyorsunuz.
    Tarayıcılar güvenlik nedenleriyle birçok özelliğin çalışmasını engellediğinden bu işe yaramaz.
    Bunun yerine, sizi yerel bir sunucu kurmaya veya ağın demosunu ya da masaüstü uygulamasını kullanmaya davet ediyoruz.
error-javascript-config =
    Ruffle, yanlış bir JavaScript yapılandırması nedeniyle önemli bir sorunla karşılaştı.
    Sunucu yöneticisiyseniz, hangi parametrenin hatalı olduğunu bulmak için sizi hata ayrıntılarını kontrol etmeye davet ediyoruz.
    Yardım için Ruffle wiki'sine de başvurabilirsiniz.
error-wasm-not-found =
    Ruffle gerekli ".wasm" dosya bileşenini yükleyemedi.
    Sunucu yöneticisi iseniz, lütfen dosyanın doğru bir şekilde yüklendiğinden emin olun.
    Sorun devam ederse, "publicPath" ayarını kullanmanız gerekebilir: yardım için lütfen Ruffle wiki'sine başvurun.
error-wasm-mime-type =
    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.
    Bu web sunucusu, doğru MIME tipinde ".wasm" dosyaları sunmuyor.
    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine başvurun.
error-invalid-swf =
    Ruffle istenen dosyayı ayrıştıramıyor.
    Bunun en olası nedeni, istenen dosyanın geçerli bir SWF olmamasıdır.
error-swf-fetch =
    Ruffle, Flash SWF dosyasını yükleyemedi.
    Bunun en olası nedeni, dosyanın artık mevcut olmaması ve bu nedenle Ruffle'ın yükleyeceği hiçbir şeyin olmamasıdır.
    Yardım için web sitesi yöneticisiyle iletişime geçmeyi deneyin.
error-swf-cors =
    Ruffle, Flash SWF dosyasını yükleyemedi.
    Getirme erişimi muhtemelen CORS politikası tarafından engellenmiştir.
    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine başvurun.
error-wasm-cors =
    Ruffle gerekli ".wasm" dosya bileşenini yükleyemedi.
    Getirme erişimi muhtemelen CORS politikası tarafından engellenmiştir.
    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine başvurun.
error-wasm-invalid =
    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.
    Görünüşe göre bu sayfada Ruffle'ı çalıştırmak için eksik veya geçersiz dosyalar var.
    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine başvurun.
error-wasm-download =
    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.
    Bu genellikle kendi kendine çözülebilir, bu nedenle sayfayı yeniden yüklemeyi deneyebilirsiniz.
    Aksi takdirde, lütfen site yöneticisiyle iletişime geçin.
error-wasm-disabled-on-edge =
    Ruffle gerekli ".wasm" dosya bileşenini yükleyemedi.
    Bunu düzeltmek için tarayıcınızın ayarlarını açın, "Gizlilik, arama ve hizmetler"i tıklayın, aşağı kaydırın ve "Web'de güvenliğinizi artırın"ı kapatmayı deneyin.
    Bu, tarayıcınızın gerekli ".wasm" dosyalarını yüklemesine izin verecektir.
    Sorun devam ederse, farklı bir tarayıcı kullanmanız gerekebilir.
error-javascript-conflict =
    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.
    Görünüşe göre bu sayfa, Ruffle ile çakışan JavaScript kodu kullanıyor.
    Sunucu yöneticisiyseniz, sizi dosyayı boş bir sayfaya yüklemeyi denemeye davet ediyoruz.
error-javascript-conflict-outdated = Ayrıca sorunu giderebilecek daha yeni bir Ruffle sürümü yüklemeyi de deneyebilirsiniz (mevcut yapım eskimiş: { $buildDate }).
error-csp-conflict =
    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.
    Bu web sunucusunun İçerik Güvenliği Politikası, gerekli ".wasm" bileşeninin çalışmasına izin vermiyor.
    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine bakın.
error-unknown =
    Ruffle, bu Flash içeriğini görüntülemeye çalışırken önemli bir sorunla karşılaştı.
    { $outdated ->
        [true] Sunucu yöneticisiyseniz, lütfen Ruffle'ın daha yeni bir sürümünü yüklemeyi deneyin (mevcut yapım eskimiş: { $buildDate }).
       *[false] Bunun olmaması gerekiyor, bu yüzden bir hata bildirebilirseniz çok memnun oluruz!
    }
`,"save-manager.ftl":`save-delete-prompt = Bu kayıt dosyasını silmek istediğinize emin misiniz?
save-reload-prompt =
    Bu kaydetme dosyasını potansiyel çakışma olmadan { $action ->
        [delete] silmenin
       *[replace] değiştirmenin
    } tek yolu, bu içeriği yeniden yüklemektir. Yine de devam etmek istiyor musunuz?
save-download = İndir
save-replace = Değiştir
save-delete = Sil
save-backup-all = Tüm kayıt dosyalarını indir
`,"volume-controls.ftl":`volume-controls-mute = Sustur
`},"zh-CN":{"context_menu.ftl":`context-menu-download-swf = 下载 .swf
context-menu-copy-debug-info = 复制调试信息
context-menu-open-save-manager = 打开存档管理器
context-menu-about-ruffle =
    { $flavor ->
        [extension] 关于 Ruffle 扩展 ({ $version })
       *[other] 关于 Ruffle ({ $version })
    }
context-menu-hide = 隐藏此菜单
context-menu-exit-fullscreen = 退出全屏
context-menu-enter-fullscreen = 进入全屏
context-menu-volume-controls = 音量控制
`,"messages.ftl":`message-cant-embed =
    Ruffle 无法运行嵌入在此页面中的 Flash。
    您可以尝试在单独的标签页中打开该文件，以回避此问题。
panic-title = 出了些问题 :(
more-info = 更多信息
run-anyway = 仍然运行
continue = 继续
report-bug = 反馈问题
update-ruffle = 更新 Ruffle
ruffle-demo = 网页演示
ruffle-desktop = 桌面应用程序
ruffle-wiki = 查看 Ruffle Wiki
enable-hardware-acceleration = 看起来硬件加速已被禁用。虽然Ruffle可能可以运行，但速度可能会非常慢。您可以通过下面的链接了解如何启用硬件加速：
enable-hardware-acceleration-link = 常见问题 - Chrome 硬件加速
view-error-details = 查看错误详情
open-in-new-tab = 在新标签页中打开
click-to-unmute = 点击取消静音
clipboard-message-title = 在Ruffle中复制粘贴
clipboard-message-description =
    { $variant ->
       *[unsupported] 您的浏览器不支持完全剪贴板访问,
        [access-denied] 对剪贴板的访问已被拒绝,
    } 但您仍然可以使用以下快捷键:
clipboard-message-copy = { " " } 复制
clipboard-message-cut = { " " } 剪切
clipboard-message-paste = { " " } 粘贴
error-file-protocol =
    看来您正在 "file:" 协议上使用 Ruffle。
    由于浏览器以安全原因阻止许多功能，因此这不起作用。
    相反我们邀请您设置本地服务器或使用网页演示或桌面应用程序。
error-javascript-config =
    由于错误的 JavaScript 配置，Ruffle 遇到了一个重大问题。
    如果您是服务器管理员，我们邀请您检查错误详细信息，以找出哪个参数有故障。
    您也可以查阅 Ruffle 的 Wiki 获取帮助。
error-wasm-not-found =
    Ruffle 无法加载所需的 “.wasm” 文件组件。
    如果您是服务器管理员，请确保文件已正确上传。
    如果问题仍然存在，您可能需要使用 “publicPath” 设置：请查看 Ruffle 的 Wiki 获取帮助。
error-wasm-mime-type =
    Ruffle 在试图初始化时遇到了一个重大问题。
    该网站服务器没有提供 ".asm” 文件正确的 MIME 类型。
    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。
error-invalid-swf =
    Ruffle无法解析请求的文件。
    最有可能的原因是该请求文件不是一个合法的SWF文件。
error-swf-fetch =
    Ruffle 无法加载 Flash SWF 文件。
    最可能的原因是文件不再存在所以 Ruffle 没有要加载的内容。
    请尝试联系网站管理员寻求帮助。
error-swf-cors =
    Ruffle 无法加载 Flash SWF 文件。
    获取权限可能被 CORS 策略阻止。
    如果您是服务器管理员，请参考 Ruffle Wiki 获取帮助。
error-wasm-cors =
    Ruffle 无法加载所需的“.wasm”文件组件。
    获取权限可能被 CORS 策略阻止。
    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。
error-wasm-invalid =
    Ruffle 在试图初始化时遇到了一个重大问题。
    这个页面似乎缺少文件来运行 Curl。
    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。
error-wasm-download =
    Ruffle 在试图初始化时遇到了一个重大问题。
    这通常可以自行解决，因此您可以尝试重新加载页面。
    否则请联系网站管理员。
error-wasm-disabled-on-edge =
    Ruffle 无法加载所需的 “.wasm” 文件组件。
    要解决这个问题，请尝试打开您的浏览器设置，单击"隐私、搜索和服务"，向下滚动并关闭"增强 Web 安全性"。
    这将允许您的浏览器加载所需的 “.wasm” 文件。
    如果问题仍然存在，您可能必须使用不同的浏览器。
error-javascript-conflict =
    Ruffle 在试图初始化时遇到了一个重大问题。
    这个页面似乎使用了与 Ruffle 冲突的 JavaScript 代码。
    如果您是服务器管理员，我们建议您尝试在空白页面上加载文件。
error-javascript-conflict-outdated = 您还可以尝试上传可能规避该问题的最新版本的 (当前构建已过时: { $buildDate })。
error-csp-conflict =
    Ruffle 在试图初始化时遇到了一个重大问题。
    该网站服务器的内容安全策略不允许运行所需的 “.wasm” 组件。
    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。
error-unknown =
    Ruffle 在试图显示此 Flash 内容时遇到了一个重大问题。
    { $outdated ->
        [true] 如果您是服务器管理员，请尝试上传更新的 Ruffle 版本 (当前版本已过时: { $buildDate }).
       *[false] 这不应该发生，因此如果您可以报告错误，我们将非常感谢！
    }
`,"save-manager.ftl":`save-delete-prompt = 确定要删除此存档吗？
save-reload-prompt =
    为了避免潜在的冲突，{ $action ->
        [delete] 删除
       *[replace] 替换
    } 此存档文件需要重新加载当前内容。是否仍然继续？
save-download = 下载
save-replace = 替换
save-delete = 删除
save-backup-all = 下载所有存档文件
`,"volume-controls.ftl":`volume-controls-mute = 静音
volume-controls-unmute = 取消静音
`},"zh-TW":{"context_menu.ftl":`context-menu-download-swf = 下載SWF檔案
context-menu-copy-debug-info = 複製除錯資訊
context-menu-open-save-manager = 開啟存檔管理器
context-menu-about-ruffle =
    { $flavor ->
        [extension] 關於Ruffle擴充功能 ({ $version })
       *[other] 關於Ruffle ({ $version })
    }
context-menu-hide = 隱藏菜單
context-menu-exit-fullscreen = 退出全螢幕
context-menu-enter-fullscreen = 進入全螢幕
context-menu-volume-controls = 音量控制
`,"messages.ftl":`message-cant-embed =
    目前Ruffle沒辦法執行嵌入式Flash。
    你可以在新分頁中開啟來解決這個問題。
panic-title = 完蛋，出問題了 :(
more-info = 更多資訊
run-anyway = 直接執行
continue = 繼續
report-bug = 回報BUG
update-ruffle = 更新Ruffle
ruffle-demo = 網頁展示
ruffle-desktop = 桌面應用程式
ruffle-wiki = 查看Ruffle Wiki
enable-hardware-acceleration =
    看起來你的硬體加速沒有開啟，雖然Ruffle還可以執行，但是你會感覺到會很慢。
    你可以在下方連結找到如何開啟硬體加速。
enable-hardware-acceleration-link = FAQ - Chrome硬體加速
view-error-details = 檢視錯誤詳細資料
open-in-new-tab = 開啟新增分頁
click-to-unmute = 點擊以取消靜音
clipboard-message-title = 在Ruffle執行複製、貼上。
clipboard-message-description =
    { $variant ->
       *[unsupported] 你的瀏覽器不支援完整剪貼簿使用,
        [access-denied] 剪貼簿使用權被拒絕訪問,
    } 你可以直接使用快捷鍵:
clipboard-message-copy = { " " } 複製
clipboard-message-cut = { " " } 剪下
clipboard-message-paste = { " " } 貼上
error-file-protocol =
    看起來你想要用Ruffle來執行"file:"的協議。
    因為瀏覽器禁了很多功能以資安的理由來講。
    我們建議你建立本地伺服器或著直接使用網頁展示或桌面應用程式。
error-javascript-config =
    目前Ruffle遇到不正確的JavaScript配置。
    如果你是伺服器管理員，我們建議你檢查哪個環節出錯。
    或著你可以查詢Ruffle wiki得到需求幫助。
error-wasm-not-found =
    目前Ruffle找不到".wasm"檔案。
    如果你是伺服器管理員，確保檔案是否放對位置。
    如果還是有問題的話，你要用"publicPath"來設定: 或著查詢Ruffle wiki得到需求幫助。
error-wasm-mime-type =
    目前Ruffle初始化時遇到重大問題。
    這網頁伺服器並沒有服務".wasm"檔案或正確的網際網路媒體類型。
    如果你是伺服器管理員，請查詢Ruffle wiki得到需求幫助。
error-invalid-swf =
    目前Ruffle無法讀取Flash的SWF檔案。
    很有可能要讀取的檔案並一個不是有效的SWF。
error-swf-fetch =
    目前Ruffle無法讀取Flash的SWF檔案。
    很有可能要讀取的檔案不存在，所以Ruffle讀不到東西。
    請嘗試溝通伺服器管理員得到需求幫助。
error-swf-cors =
    目前Ruffle無法讀取Flash的SWF檔案。
    看起來是使用權被跨來源資源共用機制被擋到了。
    如果你是伺服器管理員，請查詢Ruffle wiki得到需求幫助。
error-wasm-cors =
    目前Ruffle無法讀取".wasm"檔案。
    看起來是使用權被跨來源資源共用機制被擋到了。
    如果你是伺服器管理員，請查詢Ruffle wiki得到需求幫助。
error-wasm-invalid =
    目前Ruffle初始化時遇到重大問題。
    看起來這網頁有缺失檔案導致Ruffle無法運行。
    如果你是伺服器管理員，請查詢Ruffle wiki得到需求幫助。
error-wasm-download =
    目前Ruffle初始化時遇到重大問題。
    這可以你自己解決，你只要重新整理就好了。
    否則，請嘗試溝通伺服器管理員得到需求幫助。
error-wasm-disabled-on-edge =
    目前Ruffle無法讀取".wasm"檔案。
    要修正的話，打開你的瀏覽器設定，點選"隱私權、搜尋與服務"，把"防止追蹤"給關掉。
    這樣一來你的瀏覽器會讀取需要的".wasm"檔案。
    如果問題一直還在的話，你必須要換瀏覽器了。
error-javascript-conflict =
    目前Ruffle初始化時遇到重大問題。
    看起來這網頁使用的JavaScript會跟Ruffle起衝突。
    如果你是伺服器管理員，我們建議你開個空白頁來測試。
error-javascript-conflict-outdated = 你也可以上傳最新版的Ruffle，說不定你要說的的問題已經不見了(現在使用的版本已經過時: { $buildDate })。
error-csp-conflict =
    目前Ruffle初始化時遇到重大問題。
    這網頁伺服器被跨來源資源共用機制禁止讀取".wasm"檔案。
    如果你是伺服器管理員，請查詢Ruffle wiki得到需求幫助。
error-unknown =
    目前Ruffle初始化要讀取Flash內容時遇到重大問題
    { $outdated ->
        [true] 如果你是伺服器管理員， 請上傳最新版的Ruffle(現在使用的版本已經過時: { $buildDate }).
       *[false] 這不應該發生的，我們也很高興你告知bug!
    }
`,"save-manager.ftl":`save-delete-prompt = 你確定要刪除這個存檔嗎？
save-reload-prompt =
    唯一方法只有 { $action ->
        [delete] 刪除
       *[replace] 取代
    } 這個存檔不會完全取代直到重新啟動. 你需要繼續嗎?
save-download = 下載
save-replace = 取代
save-delete = 刪除
save-backup-all = 下載所有存檔檔案。
`,"volume-controls.ftl":`volume-controls-mute = 靜音
volume-controls-unmute = 取消靜音
`}},os={};for(const[e,n]of Object.entries(og)){const t=new Dv(e);if(n){for(const[r,o]of Object.entries(n))if(o)for(const i of t.addResource(new Qv(o)))console.error(`Error in text for ${e} ${r}: ${i}`)}os[e]=t}function ig(e,n,t){const r=os[e];if(r!==void 0){const o=r.getMessage(n);if(o!==void 0&&o.value)return r.formatPattern(o.value,t)}return null}function L(e,n){const t=rg(navigator.languages,Object.keys(os),{defaultLocale:"en-US"});for(const r in t){const o=ig(t[r],e,n);if(o)return o}return console.error(`Unknown text key '${e}'`),e}function le(e,n){const t=document.createElement("div");return L(e,n).split(`
`).forEach(r=>{const o=document.createElement("p");o.innerText=r,t.appendChild(o)}),t}function ag(e,n){for(const t of n)try{e.insertRule(t)}catch{}}function lg(e){if(!e.sheet)return;const n=[`:host {
            all: initial;
            pointer-events: inherit;

            --ruffle-blue: #37528c;
            --ruffle-orange: #ffad33;

            display: inline-block;
            position: relative;
            /* Default width/height; this will get overridden by user styles/attributes. */
            width: 550px;
            height: 400px;
            font-family: Arial, sans-serif;
            letter-spacing: 0.4px;
            touch-action: none;
            user-select: none;
            -webkit-user-select: none;
            -webkit-tap-highlight-color: transparent;
        }`,`:host(:-webkit-full-screen) {
            display: block;
            width: 100% !important;
            height: 100% !important;
        }`,`.hidden {
            display: none !important;
        }`,`#container,
        #play-button,
        #unmute-overlay,
        #unmute-overlay .background,
        #panic,
        #splash-screen,
        #message-overlay {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }`,`#container {
            overflow: hidden;
            outline: none;
        }`,`#container canvas {
            width: 100%;
            height: 100%;
        }`,`#play-button,
        #unmute-overlay {
            cursor: pointer;
            display: none;
        }`,`#unmute-overlay .background {
            background: black;
            opacity: 0.7;
        }`,`#play-button .icon,
        #unmute-overlay .icon {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 50%;
            height: 50%;
            max-width: 384px;
            max-height: 384px;
            transform: translate(-50%, -50%);
            opacity: 0.8;
        }`,`#play-button:hover .icon,
        #unmute-overlay:hover .icon {
            opacity: 1;
        }`,`#panic {
            font-size: 20px;
            text-align: center;
            background: linear-gradient(180deg, #fd3a40 0%, #fda138 100%);
            color: white;
            display: flex;
            flex-flow: column;
            justify-content: space-around;
        }`,`#panic a {
            color: var(--ruffle-blue);
            font-weight: bold;
        }`,`#panic-title {
            font-size: xxx-large;
            font-weight: bold;
        }`,`#panic-body.details {
            flex: 0.9;
            margin: 0 10px;
        }`,`#panic-body textarea {
            width: 100%;
            height: 100%;
            resize: none;
        }`,`#panic ul {
            padding: 0;
            display: flex;
            list-style-type: none;
            justify-content: space-evenly;
        }`,`#message-overlay {
            position: absolute;
            background: var(--ruffle-blue);
            color: var(--ruffle-orange);
            opacity: 1;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: auto;
        }`,`#message-overlay .message {
            text-align: center;
            max-height: 100%;
            max-width: 100%;
            padding: 5%;
            font-size: 20px;
        }`,`#message-overlay p {
            margin: 0.5em 0;
        }`,`#message-overlay .message div {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            column-gap: 1em;
        }`,`#message-overlay a, #message-overlay button {
            cursor: pointer;
            background: var(--ruffle-blue);
            color: var(--ruffle-orange);
            border: 2px solid var(--ruffle-orange);
            font-weight: bold;
            font-size: 1.25em;
            border-radius: 0.6em;
            padding: 10px;
            text-decoration: none;
            margin: 2% 0;
        }`,`#message-overlay a:hover, #message-overlay button:hover {
            background: #ffffff4c;
        }`,`#continue-btn {
             cursor: pointer;
             background: var(--ruffle-blue);
             color: var(--ruffle-orange);
             border: 2px solid var(--ruffle-orange);
             font-weight: bold;
             font-size: 20px;
             border-radius: 20px;
             padding: 10px;
        }`,`#continue-btn:hover {
            background: #ffffff4c;
        }`,`#context-menu-overlay, .modal {
            width: 100%;
            height: 100%;
            z-index: 1;
            position: absolute;
        }`,`#context-menu {
            color: rgb(var(--modal-foreground-rgb));
            background-color: var(--modal-background);
            border: 1px solid gray;
            box-shadow: 0px 5px 10px -5px black;
            position: absolute;
            font-size: 14px;
            text-align: left;
            list-style: none;
            white-space: nowrap;
            padding: 3px 0;
            margin: 0;
        }`,`#context-menu .menu-item {
            padding: 5px 10px;
            color: rgb(var(--modal-foreground-rgb));
        }`,`#context-menu .menu-item.disabled {
            cursor: default;
            color: rgba(var(--modal-foreground-rgb), 0.5);
        }`,`#context-menu .menu-item:not(.disabled):hover {
            background-color: rgba(var(--modal-foreground-rgb), 0.15);
        }`,`#context-menu .menu-separator hr {
            border: none;
            border-bottom: 1px solid rgba(var(--modal-foreground-rgb), 0.2);
            margin: 3px;
        }`,`#splash-screen {
            display: flex;
            flex-direction: column;
            background: var(--splash-screen-background, var(--preloader-background, var(--ruffle-blue)));
            align-items: center;
            justify-content: center;
        }`,`.loadbar {
            width: 100%;
            max-width: 316px;
            max-height: 10px;
            height: 20%;
            background: #253559;
        }`,`.loadbar-inner {
            width: 0px;
            max-width: 100%;
            height: 100%;
            background: var(--ruffle-orange);
        }`,`.logo {
            display: var(--logo-display, block);
            max-width: 380px;
            max-height: 150px;
        }`,`.loading-animation {
            max-width: 28px;
            max-height: 28px;
            margin-bottom: 2%;
            width: 10%;
            aspect-ratio: 1;
        }`,`.spinner {
            stroke-dasharray: 180;
            stroke-dashoffset: 135;
            stroke: var(--ruffle-orange);
            transform-origin: 50% 50%;
            animation: rotate 1.5s linear infinite;
        }`,`@keyframes rotate {
            to {
                transform: rotate(360deg);
            }
        }`,`#virtual-keyboard {
            position: absolute;
            opacity: 0;
            top: -100px;
            width: 1px;
            height: 1px;
        }`,`.modal {
            background-color: #0008;
        }`,`.modal-area {
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            background-color: var(--modal-background);
            color: rgb(var(--modal-foreground-rgb));
            width: fit-content;
            padding: 8px 12px;
            border-radius: 12px;
            box-shadow: 0 2px 6px 0px #0008;
        }`,`#modal-area {
            width: 450px;
            height: 300px;
        }`,`.close-modal {
            width: 16px;
            height: 16px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='16px' viewBox='0 -960 960 960' width='16px' fill='black'%3E%3Cpath d='M480-392 300-212q-18 18-44 18t-44-18q-18-18-18-44t18-44l180-180-180-180q-18-18-18-44t18-44q18-18 44-18t44 18l180 180 180-180q18-18 44-18t44 18q18 18 18 44t-18 44L568-480l180 180q18 18 18 44t-18 44q-18 18-44 18t-44-18L480-392Z'/%3E%3C/svg%3E");
            cursor: pointer;
            filter: var(--modal-foreground-filter);
        }`,`.modal-button {
            display: inline-block;
            background-color: rgba(var(--modal-foreground-rgb), 0.2);
            color: rgb(var(--modal-foreground-rgb));
            text-decoration: none;
            padding: 4px 8px;
            border-radius: 6px;
            cursor: pointer;
        }`,`:not(#volume-controls) > .close-modal {
            position: absolute;
            top: 14px;
            right: 16px;
        }`,`.general-save-options {
            text-align: center;
            padding-bottom: 8px;
            border-bottom: 2px solid rgba(var(--modal-foreground-rgb), 0.3);
        }`,`#local-saves {
            color: inherit;
            border-collapse: collapse;
            overflow-y: auto;
            display: block;
            height: calc(100% - 45px);
            min-height: 30px;
        }`,`#local-saves td {
            border-bottom: 2px solid rgba(var(--modal-foreground-rgb), 0.15);
            height: 30px;
        }`,`#local-saves td:nth-child(1) {
            width: 100%;
            word-break: break-all;
        }`,`.save-option {
            display: inline-block;
            width: 24px;
            height: 24px;
            cursor: pointer;
            filter: var(--modal-foreground-filter);
            vertical-align: middle;
            opacity: 0.4;
        }`,`#local-saves > tr:hover .save-option {
            opacity: 1;
        }`,`#download-save {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='black'%3E%3Cpath d='M480-337q-8 0-15-2.5t-13-8.5L308-492q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T365-549l75 75v-286q0-17 11.5-28.5T480-800q17 0 28.5 11.5T520-760v286l75-75q12-12 28.5-11.5T652-548q11 12 11.5 28T652-492L508-348q-6 6-13 8.5t-15 2.5ZM240-160q-33 0-56.5-23.5T160-240v-80q0-17 11.5-28.5T200-360q17 0 28.5 11.5T240-320v80h480v-80q0-17 11.5-28.5T760-360q17 0 28.5 11.5T800-320v80q0 33-23.5 56.5T720-160H240Z'/%3E%3C/svg%3E");
        }`,`#replace-save {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -1080 960 1200' width='24px' fill='black'%3E%3Cpath d='M440-367v127q0 17 11.5 28.5T480-200q17 0 28.5-11.5T520-240v-127l36 36q6 6 13.5 9t15 2.5q7.5-.5 14.5-3.5t13-9q11-12 11.5-28T612-388L508-492q-6-6-13-8.5t-15-2.5q-8 0-15 2.5t-13 8.5L348-388q-12 12-11.5 28t12.5 28q12 11 28 11.5t28-11.5l35-35ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80H240Zm280-560q0 17 11.5 28.5T560-600h160L520-800v160Z'/%3E%3C/svg%3E");
        }`,`#delete-save {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -1020 960 1080' width='24px' fill='black'%3E%3Cpath d='M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120H280Zm120-160q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640q-17 0-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280Zm160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640q-17 0-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280Z'/%3E%3C/svg%3E");
        }`,`.replace-save {
            display: none;
        }`,`#video-modal .modal-area {
            width: 95%;
            height: 95%;
            box-sizing: border-box;
        }`,`#video-holder {
            height: 100%;
            box-sizing: border-box;
            padding: 36px 4px 6px;
        }`,`#video-holder video {
            width: 100%;
            height: 100%;
            background-color: black;
        }`,`#volume-controls {
            display: flex;
            align-items: center;
            gap: 6px;
        }`,`#mute-checkbox {
            display: none;
        }`,`label[for="mute-checkbox"] {
            width: 24px;
            height: 24px;
            line-height: 0;
            cursor: pointer;
            filter: var(--modal-foreground-filter);
        }`,`#volume-mute {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='black'%3E%3Cpath d='m719.13-419.35-71.67 71.68Q634.78-335 617.13-335t-30.33-12.67q-12.67-12.68-12.67-30.33t12.67-30.33L658.48-480l-71.68-71.67q-12.67-12.68-12.67-30.33t12.67-30.33Q599.48-625 617.13-625t30.33 12.67l71.67 71.68 71.67-71.68Q803.48-625 821.13-625t30.33 12.67q12.67 12.68 12.67 30.33t-12.67 30.33L779.78-480l71.68 71.67q12.67 12.68 12.67 30.33t-12.67 30.33Q838.78-335 821.13-335t-30.33-12.67l-71.67-71.68ZM278-357.87H161.22q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67H278l130.15-129.91q20.63-20.63 46.98-9.45 26.35 11.19 26.35 39.77v443.44q0 28.58-26.35 39.77-26.35 11.18-46.98-9.45L278-357.87Z'/%3E%3C/svg%3E");
        }`,`#volume-min {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='161 -960 960 960' width='24px' fill='black'%3E%3Cpath d='M438.65-357.87H321.87q-17.65 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.68-12.67 30.33-12.67h116.78L568.8-732.04q20.63-20.63 46.98-9.45 26.35 11.19 26.35 39.77v443.44q0 28.58-26.35 39.77-26.35 11.18-46.98-9.45L438.65-357.87Z'/%3E%3C/svg%3E");
        }`,`#volume-mid {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='80 -960 960 960' width='24px' fill='black'%3E%3Cpath d='M357.98-357.87H241.2q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67h116.78L487.65-731.8q20.63-20.64 47.1-9.57 26.47 11.07 26.47 39.65v443.44q0 28.58-26.47 39.65t-47.1-9.57L357.98-357.87ZM741.8-480q0 42.48-20.47 80.09-20.48 37.61-54.94 60.82-10.22 5.98-20.19.25-9.98-5.73-9.98-17.44v-248.44q0-11.71 9.98-17.32 9.97-5.61 20.19.37 34.46 23.71 54.94 61.45Q741.8-522.48 741.8-480Z'/%3E%3C/svg%3E");
        }`,`#volume-max {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='9 -960 960 960' width='24px' fill='black'%3E%3Cpath d='M754.22-480.5q0-78.52-41.88-143.9-41.88-65.38-111.91-98.62-14.47-6.74-20.47-20.96-6-14.22-.53-28.93 5.74-15.72 20.34-22.46t29.58 0q92.48 42.46 147.97 127.05 55.48 84.6 55.48 187.82t-55.48 187.82q-55.49 84.59-147.97 127.05-14.98 6.74-29.58 0-14.6-6.74-20.34-22.46-5.47-14.71.53-28.93 6-14.22 20.47-20.96 70.03-33.24 111.91-98.62 41.88-65.38 41.88-143.9ZM286.98-357.87H170.2q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67h116.78L416.65-731.8q20.63-20.64 47.1-9.57 26.47 11.07 26.47 39.65v443.44q0 28.58-26.47 39.65t-47.1-9.57L286.98-357.87ZM670.8-480q0 42.48-20.47 80.09-20.48 37.61-54.94 60.82-10.22 5.98-20.19.25-9.98-5.73-9.98-17.44v-248.44q0-11.71 9.98-17.32 9.97-5.61 20.19.37 34.46 23.71 54.94 61.45Q670.8-522.48 670.8-480Z'/%3E%3C/svg%3E");
        }`,`#volume-slider-text {
            width: 4.8ch;
            text-align: center;
            user-select: none;
        }`,`#hardware-acceleration-modal .modal-area {
            text-align: center;
            padding: 16px 48px;
            width: 95%;
            box-sizing: border-box;
        }`,`#acceleration-text {
            display: block;
            margin-bottom: 8px;
        }`,`#clipboard-modal h2 {
            margin-top: 4px;
            margin-right: 36px;
        }`,`#clipboard-modal p:last-child {
            margin-bottom: 2px;
        }`,`@media (prefers-color-scheme: light) {
            :host {
                --modal-background: #fafafa;
                --modal-foreground-rgb: 0, 0, 0;
                --modal-foreground-filter: none;
            }
        }`,`@media (prefers-color-scheme: dark) {
            :host {
                --modal-background: #282828;
                --modal-foreground-rgb: 221, 221, 221;
                --modal-foreground-filter: invert(90%);
            }
        }`];ag(e.sheet,n)}function j(e,n,t,r,o){const i=o?document.createElementNS(o,e):document.createElement(e);if(n&&(i.id=n),t&&o?i.classList.add(t):t&&(i.className=t),r)for(const[a,l]of Object.entries(r))i.setAttribute(a,l);return i}function kf(e,n,t,r,o){const i=j("input",n);return i.type=e,t&&(i.min=t),r&&(i.max=r),o&&(i.step=o),i}function fi(e,n){const t=j("label",e);return t.htmlFor=n,t}function z(e,n){e.appendChild(n)}const Qe=document.createElement("template"),H="http://www.w3.org/2000/svg",sg=j("style","static-styles"),ug=j("style","dynamic-styles"),pi=j("div","container"),bf=j("div","play-button"),Sf=j("div",void 0,"icon"),is=j("svg",void 0,void 0,{xmlns:H,"xmlns:xlink":"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid",viewBox:"0 0 250 250",width:"100%",height:"100%"},H),as=j("defs",void 0,void 0,void 0,H),ls=j("linearGradient","a",void 0,{gradientUnits:"userSpaceOnUse",x1:"125",y1:"0",x2:"125",y2:"250",spreadMethod:"pad"},H),cg=j("stop",void 0,void 0,{offset:"0%","stop-color":"#FDA138"},H),dg=j("stop",void 0,void 0,{offset:"100%","stop-color":"#FD3A40"},H),ss=j("g","b",void 0,void 0,H),fg=j("path",void 0,void 0,{fill:"url(#a)",d:"M250 125q0-52-37-88-36-37-88-37T37 37Q0 73 0 125t37 88q36 37 88 37t88-37q37-36 37-88M87 195V55l100 70-100 70z"},H),pg=j("path",void 0,void 0,{fill:"#FFF",d:"M87 55v140l100-70L87 55z"},H),Rf=document.createElementNS(H,"use");Rf.href.baseVal="#b";const us=j("div","unmute-overlay"),mg=j("div",void 0,"background"),xf=j("div",void 0,"icon"),Or=j("svg","unmute-overlay-svg",void 0,{xmlns:H,"xmlns:xlink":"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid",viewBox:"0 0 512 584",width:"100%",height:"100%",scale:"0.8"},H),hg=j("path",void 0,void 0,{fill:"#FFF",stroke:"#FFF",d:"m457.941 256 47.029-47.029c9.372-9.373 9.372-24.568 0-33.941-9.373-9.373-24.568-9.373-33.941 0l-47.029 47.029-47.029-47.029c-9.373-9.373-24.568-9.373-33.941 0-9.372 9.373-9.372 24.568 0 33.941l47.029 47.029-47.029 47.029c-9.372 9.373-9.372 24.568 0 33.941 4.686 4.687 10.827 7.03 16.97 7.03s12.284-2.343 16.971-7.029l47.029-47.03 47.029 47.029c4.687 4.687 10.828 7.03 16.971 7.03s12.284-2.343 16.971-7.029c9.372-9.373 9.372-24.568 0-33.941z"},H),vg=j("path",void 0,void 0,{fill:"#FFF",stroke:"#FFF",d:"m99 160h-55c-24.301 0-44 19.699-44 44v104c0 24.301 19.699 44 44 44h55c2.761 0 5-2.239 5-5v-182c0-2.761-2.239-5-5-5z"},H),gg=j("path",void 0,void 0,{fill:"#FFF",stroke:"#FFF",d:"m280 56h-24c-5.269 0-10.392 1.734-14.578 4.935l-103.459 79.116c-1.237.946-1.963 2.414-1.963 3.972v223.955c0 1.557.726 3.026 1.963 3.972l103.459 79.115c4.186 3.201 9.309 4.936 14.579 4.936h23.999c13.255 0 24-10.745 24-24v-352.001c0-13.255-10.745-24-24-24z"},H),wg=j("text","unmute-text",void 0,{x:"256",y:"560","text-anchor":"middle","font-size":"60px",fill:"#FFF",stroke:"#FFF"},H),yg=j("input","virtual-keyboard",void 0,{type:"text",autocapitalize:"off",autocomplete:"off",autocorrect:"off"}),mi=j("div","splash-screen","hidden"),zf=j("svg",void 0,"logo",{xmlns:H,"xmlns:xlink":"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid",viewBox:"0 0 380 150"},H),cs=j("g",void 0,void 0,void 0,H),kg=j("path",void 0,void 0,{fill:"#966214",d:"M58.75 85.6q.75-.1 1.5-.35.85-.25 1.65-.75.55-.35 1.05-.8.5-.45.95-1 .5-.5.75-1.2-.05.05-.15.1-.1.15-.25.25l-.1.2q-.15.05-.25.1-.4 0-.8.05-.5-.25-.9-.5-.3-.1-.55-.3l-.6-.6-4.25-6.45-1.5 11.25h3.45m83.15-.2h3.45q.75-.1 1.5-.35.25-.05.45-.15.35-.15.65-.3l.5-.3q.25-.15.5-.35.45-.35.9-.75.45-.35.75-.85l.1-.1q.1-.2.2-.35.2-.3.35-.6l-.3.4-.15.15q-.5.15-1.1.1-.25 0-.4-.05-.5-.15-.8-.4-.15-.1-.25-.25-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25m-21.15-3.95q-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25h3.45q.75-.1 1.5-.35.85-.25 1.6-.75.75-.5 1.4-1.1.45-.35.75-.85.35-.5.65-1.05l-.45.55q-.5.15-1.1.1-.9 0-1.45-.7m59.15.3q-.75-.5-1.4-1-3.15-2.55-3.5-6.4l-1.5 11.25h21q-3.1-.25-5.7-.75-5.6-1.05-8.9-3.1m94.2 3.85h3.45q.6-.1 1.2-.3.4-.1.75-.2.35-.15.65-.3.7-.35 1.35-.8.75-.55 1.3-1.25.1-.15.25-.3-2.55-.25-3.25-1.8l-4.2-6.3-1.5 11.25m-45.3-4.85q-.5-.4-.9-.8-2.3-2.35-2.6-5.6l-1.5 11.25h21q-11.25-.95-16-4.85m97.7 4.85q-.3-.05-.6-.05-10.8-1-15.4-4.8-3.15-2.55-3.5-6.35l-1.5 11.2h21Z"},H),bg=j("path",void 0,void 0,{fill:"var(--ruffle-orange)",d:"M92.6 54.8q-1.95-1.4-4.5-1.4H60.35q-1.35 0-2.6.45-1.65.55-3.15 1.8-2.75 2.25-3.25 5.25l-1.65 12h.05v.3l5.85 1.15h-9.5q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-.95.7-.45.35-.85.8-.35.4-.65.85-.3.45-.5.9-.15.45-.3.95l-5.85 41.6H50.3l5-35.5 1.5-11.25 4.25 6.45.6.6q.25.2.55.3.4.25.9.5.4-.05.8-.05.1-.05.25-.1l.1-.2q.15-.1.25-.25.1-.05.15-.1l.3-1.05 1.75-12.3h11.15L75.8 82.6h16.5l2.3-16.25h-.05l.8-5.7q.4-2.45-1-4.2-.35-.4-.75-.8-.25-.25-.55-.5-.2-.2-.45-.35m16.2 18.1h.05l-.05.3 5.85 1.15H105.2q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-1 .65-.4.4-.8.85-.25.3-.55.65-.05.1-.15.2-.25.45-.4.9-.2.45-.3.95-.1.65-.2 1.25-.2 1.15-.4 2.25l-4.3 30.6q-.25 3 1.75 5.25 1.6 1.8 4 2.15.6.1 1.25.1h27.35q3.25 0 6-2.25.35-.35.7-.55l.3-.2q2-2 2.25-4.5l1.65-11.6q.05-.05.1-.05l1.65-11.35h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.1.15.25.25.3.25.8.4.15.05.4.05.6.05 1.1-.1l.15-.15.3-.4.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5h.05v.2l-.05.1h.05l5.8 1.15H132.7q-.5.05-1 .15-.5.15-1 .35-.15.05-.3.15-.3.1-.55.25-.05 0-.1.05-.5.3-1 .65-.4.35-.7.7-.55.7-.95 1.45-.35.65-.55 1.4-.15.7-.25 1.4v.05q-.15 1.05-.35 2.05l-1.2 8.75v.1l-2.1 14.7H111.4l2.25-15.55h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.55.7 1.45.7.6.05 1.1-.1l.45-.55.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5m106.5-41.75q-2.25-2.25-5.5-2.25h-27.75q-3 0-5.75 2.25-1.3.95-2.05 2.1-.45.6-.7 1.2-.2.5-.35 1-.1.45-.15.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-5.3 38.1h16.25l5-35.5 1.5-11.25q.35 3.85 3.5 6.4.65.5 1.4 1 3.3 2.05 8.9 3.1 2.6.5 5.7.75l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.1-.9.3-1.9.1-.75.2-1.6.85-5.9 2.15-14.9 0-.15.05-.25l.1-.9q.2-1.55.45-3.15h11.25l-3.1 20.8h16.5l4.1-28.05q.15-1.7-.4-3.15-.5-1.1-1.35-2.1m46.65 44.15q-.5.3-1 .65-.4.4-.8.85-.35.4-.7.85-.25.45-.45.9-.15.45-.3.95l-5.85 41.6h16.25l5-35.5 1.5-11.25 4.2 6.3q.7 1.55 3.25 1.8l.05-.1q.25-.4.35-.85l.3-1.05 1.8-14.05v-.05l5.35-37.45h-16.25l-6.15 44.3 5.85 1.15h-9.45q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45m5.4-38.9q.15-1.7-.4-3.15-.5-1.1-1.35-2.1-2.25-2.25-5.5-2.25h-27.75q-2.3 0-4.45 1.35-.65.35-1.3.9-1.3.95-2.05 2.1-.45.6-.7 1.2-.4.9-.5 1.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-1.2 8.75v.1l-4.1 29.25h16.25l5-35.5 1.5-11.25q.3 3.25 2.6 5.6.4.4.9.8 4.75 3.9 16 4.85l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.15-.9.3-1.9.1-.75.25-1.6.15-1.25.35-2.65v-.05q.95-6.7 2.35-16.5h11.25l-3.1 20.8h16.5l4.1-28.05M345 66.35h-.05l1.15-8.2q.5-3-1.75-5.25-1.25-1.25-3-1.75-1-.5-2.25-.5h-27.95q-.65 0-1.3.1-2.5.35-4.7 2.15-2.75 2.25-3.25 5.25l-1.95 14.7v.05l-.05.3 5.85 1.15h-9.45q-1.9.05-3.6 1.35-.2.1-.35.25-1.9 1.55-2.25 3.55l-4.85 34.1q-.25 3 1.75 5.25 1.25 1.4 3 1.95 1.05.3 2.25.3H320q3.25 0 6-2.25 2.75-2 3.25-5l2.75-18.5h-16.5l-1.75 11H302.5l2.1-14.75h.05l.85-6 1.5-11.2q.35 3.8 3.5 6.35 4.6 3.8 15.4 4.8.3 0 .6.05h15.75L345 66.35m-16.4-.95-1.25 8.95h-11.3l.4-2.95h-.05l.7-5.05h-.1l.15-.95h11.45Z"},H),Ef=j("svg",void 0,"loading-animation",{xmlns:H,viewBox:"0 0 66 66"},H),Sg=j("circle",void 0,"spinner",{fill:"none","stroke-width":"6","stroke-linecap":"round",cx:"33",cy:"33",r:"30"},H),jf=j("div",void 0,"loadbar"),Rg=j("div",void 0,"loadbar-inner"),Cf=j("div","save-manager","modal hidden"),hi=j("div","modal-area","modal-area"),xg=j("span",void 0,"close-modal"),Pf=j("div",void 0,"general-save-options"),zg=j("span",void 0,"modal-button"),Eg=j("table","local-saves"),_f=j("div","volume-controls-modal","modal hidden"),Af=j("div",void 0,"modal-area"),vn=j("div","volume-controls"),jg=kf("checkbox","mute-checkbox"),Cg=kf("range","volume-slider","0","100","1"),Df=fi("volume-mute","mute-checkbox");Df.title=L("volume-controls-unmute");const Tf=fi("volume-min","mute-checkbox"),Ff=fi("volume-mid","mute-checkbox"),Mf=fi("volume-max","mute-checkbox");[Tf,Ff,Mf].forEach(e=>e.title=L("volume-controls-mute"));const Pg=j("span","volume-slider-text"),_g=j("span",void 0,"close-modal"),Lf=j("div","video-modal","modal hidden"),ds=j("div",void 0,"modal-area"),Ag=j("span",void 0,"close-modal"),Dg=j("div","video-holder"),Of=j("div","hardware-acceleration-modal","modal hidden"),vi=j("div",void 0,"modal-area"),Tg=j("span",void 0,"close-modal"),If=j("span","acceleration-text");If.textContent=L("enable-hardware-acceleration");const Ir=document.createElement("a");Ir.href="https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users#chrome-hardware-acceleration";Ir.target="_blank";Ir.className="modal-button";Ir.textContent=L("enable-hardware-acceleration-link");const Nf=j("div","clipboard-modal","modal hidden"),tt=j("div",void 0,"modal-area"),Fg=j("span",void 0,"close-modal"),$f=j("h2",void 0);$f.textContent=L("clipboard-message-title");const Mg=j("p","clipboard-modal-description"),fs=navigator.userAgent.includes("Mac OS X")?"Command":"Ctrl",ps=j("p",void 0),qf=j("b",void 0);qf.textContent=`${fs}+C`;const Uf=j("span",void 0);Uf.textContent=L("clipboard-message-copy");const ms=j("p",void 0),Wf=j("b",void 0);Wf.textContent=`${fs}+X`;const Bf=j("span",void 0);Bf.textContent=L("clipboard-message-cut");const hs=j("p",void 0),Vf=j("b",void 0);Vf.textContent=`${fs}+V`;const Hf=j("span",void 0);Hf.textContent=L("clipboard-message-paste");const Kf=j("div","context-menu-overlay","hidden"),Lg=j("ul","context-menu");z(Qe.content,sg);z(Qe.content,ug);z(Qe.content,pi);z(pi,bf);z(bf,Sf);z(Sf,is);z(is,as);z(as,ls);z(ls,cg);z(ls,dg);z(as,ss);z(ss,fg);z(ss,pg);z(is,Rf);z(pi,us);z(us,mg);z(us,xf);z(xf,Or);z(Or,hg);z(Or,vg);z(Or,gg);z(Or,wg);z(pi,yg);z(Qe.content,mi);z(mi,zf);z(zf,cs);z(cs,kg);z(cs,bg);z(mi,Ef);z(Ef,Sg);z(mi,jf);z(jf,Rg);z(Qe.content,Cf);z(Cf,hi);z(hi,xg);z(hi,Pf);z(Pf,zg);z(hi,Eg);z(Qe.content,_f);z(_f,Af);z(Af,vn);z(vn,jg);z(vn,Df);z(vn,Tf);z(vn,Ff);z(vn,Mf);z(vn,Cg);z(vn,Pg);z(vn,_g);z(Qe.content,Lf);z(Lf,ds);z(ds,Ag);z(ds,Dg);z(Qe.content,Of);z(Of,vi);z(vi,Tg);z(vi,If);z(vi,Ir);z(Qe.content,Nf);z(Nf,tt);z(tt,Fg);z(tt,$f);z(tt,Mg);z(tt,ps);z(ps,qf);z(ps,Uf);z(tt,ms);z(ms,Wf);z(ms,Bf);z(tt,hs);z(hs,Vf);z(hs,Hf);z(Qe.content,Kf);z(Kf,Lg);var Ft;(function(e){e.On="on",e.Off="off",e.Auto="auto"})(Ft||(Ft={}));var Vo;(function(e){e.Off="off",e.Fullscreen="fullscreen",e.On="on"})(Vo||(Vo={}));var Pr;(function(e){e.Visible="visible",e.Hidden="hidden"})(Pr||(Pr={}));var Ho;(function(e){e.Error="error",e.Warn="warn",e.Info="info",e.Debug="debug",e.Trace="trace"})(Ho||(Ho={}));var Ko;(function(e){e.Window="window",e.Opaque="opaque",e.Transparent="transparent",e.Direct="direct",e.Gpu="gpu"})(Ko||(Ko={}));var Bu;(function(e){e.WebGpu="webgpu",e.WgpuWebgl="wgpu-webgl",e.Webgl="webgl",e.Canvas="canvas"})(Bu||(Bu={}));var Rt;(function(e){e.On="on",e.RightClickOnly="rightClickOnly",e.Off="off"})(Rt||(Rt={}));var el;(function(e){e.AIR="air",e.FlashPlayer="flashPlayer"})(el||(el={}));var nl;(function(e){e.Allow="allow",e.Confirm="confirm",e.Deny="deny"})(nl||(nl={}));var tl;(function(e){e.All="all",e.Internal="internal",e.None="none"})(tl||(tl={}));const Og={allowScriptAccess:!1,parameters:{},autoplay:Ft.Auto,backgroundColor:null,letterbox:Vo.Fullscreen,unmuteOverlay:Pr.Visible,upgradeToHttps:!0,compatibilityRules:!0,favorFlash:!0,warnOnUnsupportedContent:!0,logLevel:Ho.Error,showSwfDownload:!1,contextMenu:Rt.On,preloader:!0,splashScreen:!0,maxExecutionDuration:15,base:null,menu:!0,allowFullscreen:!1,salign:"",forceAlign:!1,quality:"high",scale:"showAll",forceScale:!1,frameRate:null,wmode:Ko.Window,publicPath:null,polyfills:!0,playerVersion:null,preferredRenderer:null,openUrlMode:nl.Allow,allowNetworking:tl.All,openInNewTab:null,socketProxy:[],fontSources:[],defaultFonts:{},credentialAllowList:[],playerRuntime:el.FlashPlayer},Qf="application/x-shockwave-flash",Jf="application/futuresplash",Zf="application/x-shockwave-flash2-preview",Gf="application/vnd.adobe.flash.movie",Ig="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";function Ng(e){let n="";try{n=new URL(e,"https://example.com").pathname}catch{}if(n&&n.length>=4){const t=n.slice(-4).toLowerCase();if(t===".swf"||t===".spl")return!0}return!1}function $g(e,n){switch(e=e.toLowerCase(),e){case Qf.toLowerCase():case Jf.toLowerCase():case Zf.toLowerCase():case Gf.toLowerCase():return!0;default:if(n)switch(e){case"application/octet-stream":case"binary/octet-stream":return!0}}return!1}function Yf(e,n){const t=Ng(e);return n?$g(n,t):t}function qg(e){const n=e.pathname;return n.substring(n.lastIndexOf("/")+1)}let ur=null,Tn=!1;try{if(document.currentScript!==void 0&&document.currentScript!==null&&"src"in document.currentScript&&document.currentScript.src!==""){let e=document.currentScript.src;!e.endsWith(".js")&&!e.endsWith("/")&&(e+="/"),ur=new URL(".",e),Tn=ur.protocol.includes("extension")}}catch{console.warn("Unable to get currentScript URL")}function B(e){return e!=null}function Ug(e,n){if(B(n.allowScriptAccess)&&e.setAllowScriptAccess(n.allowScriptAccess),B(n.backgroundColor)&&e.setBackgroundColor(Wg(n.backgroundColor)),B(n.upgradeToHttps)&&e.setUpgradeToHttps(n.upgradeToHttps),B(n.compatibilityRules)&&e.setCompatibilityRules(n.compatibilityRules),B(n.letterbox)&&e.setLetterbox(n.letterbox.toLowerCase()),B(n.base)&&e.setBaseUrl(n.base),B(n.menu)&&e.setShowMenu(n.menu),B(n.allowFullscreen)&&e.setAllowFullscreen(n.allowFullscreen),B(n.salign)&&e.setStageAlign(n.salign.toLowerCase()),B(n.forceAlign)&&e.setForceAlign(n.forceAlign),B(n.quality)?e.setQuality(n.quality.toLowerCase()):Vg()&&(console.log("Running on a mobile device; defaulting to low quality"),e.setQuality("low")),B(n.scale)&&e.setScale(n.scale.toLowerCase()),B(n.forceScale)&&e.setForceScale(n.forceScale),B(n.frameRate)&&e.setFrameRate(n.frameRate),B(n.wmode)&&e.setWmode(n.wmode),B(n.logLevel)&&e.setLogLevel(n.logLevel),B(n.maxExecutionDuration)&&e.setMaxExecutionDuration(Bg(n.maxExecutionDuration)),B(n.playerVersion)&&e.setPlayerVersion(n.playerVersion),B(n.preferredRenderer)&&e.setPreferredRenderer(n.preferredRenderer),B(n.openUrlMode)&&e.setOpenUrlMode(n.openUrlMode.toLowerCase()),B(n.allowNetworking)&&e.setAllowNetworking(n.allowNetworking.toLowerCase()),B(n.credentialAllowList)&&e.setCredentialAllowList(n.credentialAllowList),B(n.playerRuntime)&&e.setPlayerRuntime(n.playerRuntime),B(n.socketProxy))for(const t of n.socketProxy)e.addSocketProxy(t.host,t.port,t.proxyUrl)}function Wg(e){if(e.startsWith("#")&&(e=e.substring(1)),e.length<6)return;let n=0;for(let t=0;t<6;t++){const r=parseInt(e[t],16);isNaN(r)?n=n<<4:n=n<<4|r}return n}function Bg(e){return typeof e=="number"?e:e.secs}function Vg(){return typeof window.orientation<"u"}var Xf={},Fn={};Object.defineProperty(Fn,"__esModule",{value:!0});Fn.createRef=Fn.h=Fn.createElement=void 0;const Hg=Lr,Gi=sn;function ep(e,n,...t){if(typeof e=="function")return e({...n,children:t});const{finalTag:r,finalAttrs:o}=(0,Gi.applyTsxTag)(e,n),i=(0,Gi.createDomElement)(r,o);return o&&(0,Hg.setAttributes)(i,o),(0,Gi.applyChildren)(i,t),i}Fn.createElement=ep;Fn.h=ep;const Kg=()=>({current:null});Fn.createRef=Kg;var gi={};Object.defineProperty(gi,"__esModule",{value:!0});gi.defineCustomElement=void 0;const Qg=ln;function Jg(e,n,t){return customElements.define(e,n,t),r=>(0,Qg.jsx)(e,r)}gi.defineCustomElement=Jg;var np={};Object.defineProperty(np,"__esModule",{value:!0});(function(e){var n=Sn&&Sn.__createBinding||(Object.create?function(r,o,i,a){a===void 0&&(a=i);var l=Object.getOwnPropertyDescriptor(o,i);(!l||("get"in l?!o.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return o[i]}}),Object.defineProperty(r,a,l)}:function(r,o,i,a){a===void 0&&(a=i),r[a]=o[i]}),t=Sn&&Sn.__exportStar||function(r,o){for(var i in r)i!=="default"&&!Object.prototype.hasOwnProperty.call(o,i)&&n(o,r,i)};Object.defineProperty(e,"__esModule",{value:!0}),t(Fn,e),t(gi,e),t(ln,e),t(np,e)})(Xf);const cr="https://ruffle.rs";class tp extends Error{constructor(n){super(`Failed to fetch ${n}`),this.swfUrl=n,this.swfUrl=n}}class rp extends Error{constructor(n){super(`Not a valid swf: ${n}`)}}class rl extends Error{constructor(n){super("Failed to load Ruffle WASM"),this.cause=n}}class op extends Error{constructor(n){super(`Invalid options: ${n}`)}}function Zg({action:e,showDetails:n,errorArray:t,errorText:r,swfUrl:o}){if(e.type=="show_details")return ve("li",{children:ve("a",{href:"#",id:"panic-view-details",onClick:()=>(n(),!1),children:L("view-error-details")})});if(e.type=="open_link")return ve("li",{children:ve("a",{href:e.url,target:"_top",children:e.label})});{let i;document.location.protocol.includes("extension")&&o?i=o.href:i=document.location.href,i=i.split(/[?#]/,1)[0];const a=`Error on ${i}`;let l=`https://github.com/ruffle-rs/ruffle/issues/new?title=${encodeURIComponent(a)}&template=error_report.md&labels=error-report&body=`,s=encodeURIComponent(r);return t.stackIndex>-1&&String(l+s).length>8195&&(t[t.stackIndex]=null,t.avmStackIndex>-1&&(t[t.avmStackIndex]=null),s=encodeURIComponent(t.join(""))),l+=s,ve("li",{children:ve("a",{href:l,target:"_top",children:L("report-bug")})})}}function ol(){const e=new Date(Te.buildDate),n=new Date;return n.setMonth(n.getMonth()-6),n>e}const $={OpenDemo:{type:"open_link",url:cr+"/demo",label:L("ruffle-demo")},DownloadDesktop:{type:"open_link",url:cr+"/downloads#desktop-app",label:L("ruffle-desktop")},UpdateRuffle:{type:"open_link",url:cr+"/downloads",label:L("update-ruffle")},CreateReport:{type:"create_report"},ShowDetails:{type:"show_details"},createReportOrUpdate(){return ol()?this.UpdateRuffle:this.CreateReport},openWiki(e,n){return{type:"open_link",url:`https://github.com/ruffle-rs/ruffle/wiki/${e}`,label:n??L("ruffle-wiki")}}};function Gg(e){var n;if(e instanceof tp)return e.swfUrl&&!e.swfUrl.protocol.includes("http")?{body:le("error-file-protocol"),actions:[$.OpenDemo,$.DownloadDesktop]}:window.location.origin===((n=e.swfUrl)==null?void 0:n.origin)||window.location.protocol.includes("extension")?{body:le("error-swf-fetch"),actions:[$.ShowDetails]}:{body:le("error-swf-cors"),actions:[$.openWiki("Using-Ruffle#configure-cors-header"),$.ShowDetails]};if(e instanceof rp)return{body:le("error-invalid-swf"),actions:[$.ShowDetails]};if(e instanceof rl){if(window.location.protocol==="file:")return{body:le("error-file-protocol"),actions:[$.OpenDemo,$.DownloadDesktop]};const t=String(e.cause.message).toLowerCase();if(t.includes("mime"))return{body:le("error-wasm-mime-type"),actions:[$.openWiki("Using-Ruffle#configure-webassembly-mime-type"),$.ShowDetails]};if(t.includes("networkerror")||t.includes("failed to fetch"))return{body:le("error-wasm-cors"),actions:[$.openWiki("Using-Ruffle#configure-cors-header"),$.ShowDetails]};if(t.includes("disallowed by embedder"))return{body:le("error-csp-conflict"),actions:[$.openWiki("Using-Ruffle#configure-wasm-csp"),$.ShowDetails]};if(e.cause.name==="CompileError")return{body:le("error-wasm-invalid"),actions:[$.openWiki("Using-Ruffle#addressing-a-compileerror"),$.ShowDetails]};if(t.includes("could not download wasm module")&&e.cause.name==="TypeError")return{body:le("error-wasm-download"),actions:[$.ShowDetails]};if(e.cause.name==="TypeError"){const r=le("error-javascript-conflict");return ol()&&r.appendChild(le("error-javascript-conflict-outdated",{buildDate:Te.buildDate})),{body:r,actions:[$.createReportOrUpdate(),$.ShowDetails]}}return navigator.userAgent.includes("Edg")&&t.includes("webassembly is not defined")?{body:le("error-wasm-disabled-on-edge"),actions:[$.openWiki("Frequently-Asked-Questions-For-Users#edge-webassembly-error",L("more-info")),$.ShowDetails]}:{body:le("error-wasm-not-found"),actions:[$.openWiki("Using-Ruffle#configuration-options"),$.ShowDetails]}}return e instanceof op?{body:le("error-javascript-config"),actions:[$.openWiki("Using-Ruffle#javascript-api"),$.ShowDetails]}:{body:le("error-unknown",{buildDate:Te.buildDate,outdated:String(ol)}),actions:[$.createReportOrUpdate(),$.ShowDetails]}}function Yg(e,n,t,r){const o=t.join("");let{body:i,actions:a}=Gg(n);const l=Xf.createRef(),s=()=>{l.current.classList.add("details"),l.current.replaceChildren(ve("textarea",{readOnly:!0,children:o}))};e.textContent="",e.appendChild(wf("div",{id:"panic",children:[ve("div",{id:"panic-title",children:L("panic-title")}),ve("div",{id:"panic-body",ref:l,children:i}),ve("div",{id:"panic-footer",children:ve("ul",{children:a.map(u=>Zg({action:u,showDetails:s,errorText:o,errorArray:t,swfUrl:r}))})})]}))}const Xg=/^\s*(\d+(\.\d+)?(%)?)/;let ao=!1;function Yi(e){if(e==null)return{};e instanceof URLSearchParams||(e=new URLSearchParams(e));const n={};for(const[t,r]of e)n[t]=r.toString();return n}class Vu{constructor(n,t){this.x=n,this.y=t}distanceTo(n){const t=n.x-this.x,r=n.y-this.y;return Math.sqrt(t*t+r*r)}}class Ye extends HTMLElement{get readyState(){return this._readyState}get metadata(){return this._metadata}constructor(){super(),this.contextMenuForceDisabled=!1,this.isTouch=!1,this.contextMenuSupported=!1,this._suppressContextMenu=!1,this.panicked=!1,this.rendererDebugInfo="",this.longPressTimer=null,this.pointerDownPosition=null,this.pointerMoveMaxDistance=0,this.config={},this.shadow=this.attachShadow({mode:"open"}),this.shadow.appendChild(Qe.content.cloneNode(!0)),this.dynamicStyles=this.shadow.getElementById("dynamic-styles"),this.staticStyles=this.shadow.getElementById("static-styles"),this.container=this.shadow.getElementById("container"),this.playButton=this.shadow.getElementById("play-button"),this.playButton.addEventListener("click",()=>this.play()),this.unmuteOverlay=this.shadow.getElementById("unmute-overlay"),this.splashScreen=this.shadow.getElementById("splash-screen"),this.virtualKeyboard=this.shadow.getElementById("virtual-keyboard"),this.virtualKeyboard.addEventListener("input",this.virtualKeyboardInput.bind(this)),this.saveManager=this.shadow.getElementById("save-manager"),this.videoModal=this.shadow.getElementById("video-modal"),this.hardwareAccelerationModal=this.shadow.getElementById("hardware-acceleration-modal"),this.volumeControls=this.shadow.getElementById("volume-controls-modal"),this.clipboardModal=this.shadow.getElementById("clipboard-modal"),this.addModalJavaScript(this.saveManager),this.addModalJavaScript(this.volumeControls),this.addModalJavaScript(this.videoModal),this.addModalJavaScript(this.hardwareAccelerationModal),this.addModalJavaScript(this.clipboardModal),this.volumeSettings=new ew(!1,100),this.addVolumeControlsJavaScript(this.volumeControls);const n=this.saveManager.querySelector(".modal-button");n&&(n.addEventListener("click",this.backupSaves.bind(this)),n.innerText=L("save-backup-all"));const t=this.unmuteOverlay.querySelector("#unmute-overlay-svg");if(t){const r=t.querySelector("#unmute-text");r.textContent=L("click-to-unmute")}this.contextMenuOverlay=this.shadow.getElementById("context-menu-overlay"),this.contextMenuElement=this.shadow.getElementById("context-menu"),document.documentElement.addEventListener("pointerdown",this.checkIfTouch.bind(this)),this.addEventListener("contextmenu",this.showContextMenu.bind(this)),this.container.addEventListener("pointerdown",this.pointerDown.bind(this)),this.container.addEventListener("pointermove",this.checkLongPressMovement.bind(this)),this.container.addEventListener("pointerup",this.checkLongPress.bind(this)),this.container.addEventListener("pointercancel",this.clearLongPressTimer.bind(this)),this.addEventListener("fullscreenchange",this.fullScreenChange.bind(this)),this.addEventListener("webkitfullscreenchange",this.fullScreenChange.bind(this)),this.instance=null,this.newZipWriter=null,this.onFSCommand=null,this._readyState=vt.HaveNothing,this._metadata=null,this.lastActivePlayingState=!1,this.setupPauseOnTabHidden()}addModalJavaScript(n){const t=n.querySelector("#video-holder"),r=()=>{n.classList.add("hidden"),t&&(t.textContent="")};n.parentNode.addEventListener("click",r);const o=n.querySelector(".modal-area");o&&o.addEventListener("click",a=>a.stopPropagation());const i=n.querySelector(".close-modal");i&&i.addEventListener("click",r)}addVolumeControlsJavaScript(n){const t=n.querySelector("#mute-checkbox"),r=n.querySelector("#volume-mute"),o=[n.querySelector("#volume-min"),n.querySelector("#volume-mid"),n.querySelector("#volume-max")],i=n.querySelector("#volume-slider"),a=n.querySelector("#volume-slider-text"),l=()=>{if(this.volumeSettings.isMuted)r.style.display="inline",o.forEach(s=>{s.style.display="none"});else{r.style.display="none";const s=Math.round(this.volumeSettings.volume/50);o.forEach((u,p)=>{u.style.display=p===s?"inline":"none"})}};t.checked=this.volumeSettings.isMuted,i.disabled=t.checked,i.valueAsNumber=this.volumeSettings.volume,a.textContent=i.value+"%",l(),t.addEventListener("change",()=>{var s;i.disabled=t.checked,this.volumeSettings.isMuted=t.checked,(s=this.instance)==null||s.set_volume(this.volumeSettings.get_volume()),l()}),i.addEventListener("input",()=>{var s;a.textContent=i.value+"%",this.volumeSettings.volume=i.valueAsNumber,(s=this.instance)==null||s.set_volume(this.volumeSettings.get_volume()),l()})}setupPauseOnTabHidden(){document.addEventListener("visibilitychange",()=>{this.instance&&(document.hidden&&(this.lastActivePlayingState=this.instance.is_playing(),this.instance.pause()),!document.hidden&&this.lastActivePlayingState===!0&&this.instance.play())},!1)}get height(){return this.getAttribute("height")||""}set height(n){this.setAttribute("height",n)}get width(){return this.getAttribute("width")||""}set width(n){this.setAttribute("width",n)}get type(){return this.getAttribute("type")||""}set type(n){this.setAttribute("type",n)}connectedCallback(){this.updateStyles(),lg(this.staticStyles)}static get observedAttributes(){return["width","height"]}attributeChangedCallback(n,t,r){(n==="width"||n==="height")&&this.updateStyles()}disconnectedCallback(){this.destroy()}updateStyles(){if(this.dynamicStyles.sheet){if(this.dynamicStyles.sheet.cssRules)for(let r=this.dynamicStyles.sheet.cssRules.length-1;r>=0;r--)this.dynamicStyles.sheet.deleteRule(r);const n=this.attributes.getNamedItem("width");if(n!=null){const r=Ye.htmlDimensionToCssDimension(n.value);r!==null&&this.dynamicStyles.sheet.insertRule(`:host { width: ${r}; }`)}const t=this.attributes.getNamedItem("height");if(t!=null){const r=Ye.htmlDimensionToCssDimension(t.value);r!==null&&this.dynamicStyles.sheet.insertRule(`:host { height: ${r}; }`)}}}isUnusedFallbackObject(){const n=gv("ruffle-object");if(n!==null){let t=this.parentNode;for(;t!==document&&t!==null;){if(t.nodeName===n.name)return!0;t=t.parentNode}}return!1}async ensureFreshInstance(){var i,a,l;this.destroy(),this.loadedConfig&&this.loadedConfig.splashScreen!==!1&&this.loadedConfig.preloader!==!1&&this.showSplashScreen(),this.loadedConfig&&this.loadedConfig.preloader===!1&&console.warn("The configuration option preloader has been replaced with splashScreen. If you own this website, please update the configuration."),this.loadedConfig&&this.loadedConfig.maxExecutionDuration&&typeof this.loadedConfig.maxExecutionDuration!="number"&&console.warn("Configuration: An obsolete format for duration for 'maxExecutionDuration' was used, please use a single number indicating seconds instead. For instance '15' instead of '{secs: 15, nanos: 0}'."),this.loadedConfig&&typeof this.loadedConfig.contextMenu=="boolean"&&console.warn('The configuration option contextMenu no longer takes a boolean. Use "on", "off", or "rightClickOnly".');const[n,t]=await yv(this.onRuffleDownloadProgress.bind(this)).catch(s=>{console.error(`Serious error loading Ruffle: ${s}`);const u=new rl(s);throw this.panic(u),u});if(this.newZipWriter=t,Ug(n,this.loadedConfig||{}),n.setVolume(this.volumeSettings.get_volume()),(i=this.loadedConfig)!=null&&i.fontSources)for(const s of this.loadedConfig.fontSources)try{const u=await fetch(s);n.addFont(s,new Uint8Array(await u.arrayBuffer()))}catch(u){console.warn(`Couldn't download font source from ${s}`,u)}for(const s in(a=this.loadedConfig)==null?void 0:a.defaultFonts){const u=this.loadedConfig.defaultFonts[s];u&&n.setDefaultFont(s,u)}this.instance=await n.build(this.container,this).catch(s=>{throw console.error(`Serious error loading Ruffle: ${s}`),this.panic(s),s}),this.rendererDebugInfo=this.instance.renderer_debug_info(),this.rendererDebugInfo.includes("Adapter Device Type: Cpu")&&this.container.addEventListener("mouseover",this.openHardwareAccelerationModal.bind(this),{once:!0});const r=this.instance.renderer_name(),o=this.instance.constructor;if(console.log("%cNew Ruffle instance created (Version: "+Te.versionName+" | WebAssembly extensions: "+(o.is_wasm_simd_used()?"ON":"OFF")+" | Used renderer: "+(r??"")+")","background: #37528C; color: #FFAD33"),this.audioState()!=="running"&&(this.container.style.visibility="hidden",await new Promise(s=>{window.setTimeout(()=>{s()},200)}),this.container.style.visibility=""),this.unmuteAudioContext(),!this.loadedConfig||this.loadedConfig.autoplay===Ft.On||this.loadedConfig.autoplay!==Ft.Off&&this.audioState()==="running"){if(this.play(),this.audioState()!=="running"){(!this.loadedConfig||this.loadedConfig.unmuteOverlay!==Pr.Hidden)&&(this.unmuteOverlay.style.display="block"),this.container.addEventListener("click",this.unmuteOverlayClicked.bind(this),{once:!0});const s=(l=this.instance)==null?void 0:l.audio_context();s&&(s.onstatechange=()=>{s.state==="running"&&this.unmuteOverlayClicked(),s.onstatechange=null})}}else this.playButton.style.display="block"}onRuffleDownloadProgress(n,t){const r=this.splashScreen.querySelector(".loadbar-inner"),o=this.splashScreen.querySelector(".loadbar");Number.isNaN(t)?o&&(o.style.display="none"):r.style.width=`${100*(n/t)}%`}destroy(){this.instance&&(this.instance.destroy(),this.instance=null,this._metadata=null,this._readyState=vt.HaveNothing,console.log("Ruffle instance destroyed."))}checkOptions(n){if(typeof n=="string")return{url:n};const t=(r,o)=>{if(!r){const i=new op(o);throw this.panic(i),i}};return t(n!==null&&typeof n=="object","Argument 0 must be a string or object"),t("url"in n||"data"in n,"Argument 0 must contain a `url` or `data` key"),t(!("url"in n)||typeof n.url=="string","`url` must be a string"),n}async reload(){if(this.loadedConfig)await this.load(this.loadedConfig);else throw new Error("Cannot reload if load wasn't first called")}async load(n,t=!1){var r;if(n=this.checkOptions(n),!this.isConnected||this.isUnusedFallbackObject()){console.warn("Ignoring attempt to play a disconnected or suspended Ruffle element");return}if(!vs(this))try{this.loadedConfig={...Og,...t&&"url"in n?{allowScriptAccess:ip("samedomain",n.url)}:{},...((r=window.RufflePlayer)==null?void 0:r.config)??{},...this.config,...n},this.loadedConfig.backgroundColor&&this.loadedConfig.wmode!==Ko.Transparent&&(this.container.style.backgroundColor=this.loadedConfig.backgroundColor),await this.ensureFreshInstance(),"url"in n?(console.log(`Loading SWF file ${n.url}`),this.swfUrl=new URL(n.url,document.baseURI),this.instance.stream_from(this.swfUrl.href,Yi(n.parameters))):"data"in n&&(console.log("Loading SWF data"),delete this.swfUrl,this.instance.load_data(new Uint8Array(n.data),Yi(n.parameters),n.swfFileName||"movie.swf"))}catch(o){console.error(`Serious error occurred loading SWF file: ${o}`);const i=new Error(o);throw this.panic(i),i}}play(){this.instance&&(this.instance.play(),this.playButton.style.display="none")}get isPlaying(){return this.instance?this.instance.is_playing():!1}get volume(){return this.instance?this.instance.volume():1}set volume(n){this.instance&&this.instance.set_volume(n)}get fullscreenEnabled(){return!!(document.fullscreenEnabled||document.webkitFullscreenEnabled)}get isFullscreen(){return(document.fullscreenElement||document.webkitFullscreenElement)===this}setFullscreen(n){this.fullscreenEnabled&&n!==this.isFullscreen&&(n?this.enterFullscreen():this.exitFullscreen())}enterFullscreen(){const n={navigationUI:"hide"};this.requestFullscreen?this.requestFullscreen(n):this.webkitRequestFullscreen?this.webkitRequestFullscreen(n):this.webkitRequestFullScreen&&this.webkitRequestFullScreen(n)}exitFullscreen(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}fullScreenChange(){var n;(n=this.instance)==null||n.set_fullscreen(this.isFullscreen)}saveFile(n,t){const r=URL.createObjectURL(n),o=document.createElement("a");o.href=r,o.download=t,o.click(),URL.revokeObjectURL(r)}checkIfTouch(n){this.isTouch=n.pointerType==="touch"||n.pointerType==="pen"}base64ToArray(n){const t=atob(n),r=new Uint8Array(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return r}base64ToBlob(n,t){const r=this.base64ToArray(n);return new Blob([r],{type:t})}isB64SOL(n){try{return atob(n).slice(6,10)==="TCSO"}catch{return!1}}confirmReloadSave(n,t,r){if(this.isB64SOL(t)&&localStorage[n]){if(!r&&!confirm(L("save-delete-prompt")))return;const o=this.swfUrl?this.swfUrl.pathname:"",i=this.swfUrl?this.swfUrl.hostname:document.location.hostname,a=n.split("/").slice(1,-1).join("/");if(o.includes(a)&&n.startsWith(i)){confirm(L("save-reload-prompt",{action:r?"replace":"delete"}))&&this.loadedConfig&&(this.destroy(),r?localStorage.setItem(n,t):localStorage.removeItem(n),this.reload(),this.populateSaves(),this.saveManager.classList.add("hidden"));return}r?localStorage.setItem(n,t):localStorage.removeItem(n),this.populateSaves(),this.saveManager.classList.add("hidden")}}replaceSOL(n,t){const r=n.target,o=new FileReader;o.addEventListener("load",()=>{if(o.result&&typeof o.result=="string"){const i=new RegExp("data:.*;base64,"),a=o.result.replace(i,"");this.confirmReloadSave(t,a,!0)}}),r&&r.files&&r.files.length>0&&r.files[0]&&o.readAsDataURL(r.files[0])}checkSaves(){if(!this.saveManager.querySelector("#local-saves"))return!1;try{if(localStorage===null)return!1}catch{return!1}return Object.keys(localStorage).some(n=>{const t=n.split("/").pop(),r=localStorage.getItem(n);return t&&r&&this.isB64SOL(r)})}deleteSave(n){const t=localStorage.getItem(n);t&&this.confirmReloadSave(n,t,!1)}populateSaves(){if(!this.checkSaves())return;const n=this.saveManager.querySelector("#local-saves");n.textContent="",Object.keys(localStorage).forEach(t=>{const r=t.split("/").pop(),o=localStorage.getItem(t);if(r&&o&&this.isB64SOL(o)){const i=document.createElement("TR"),a=document.createElement("TD");a.textContent=r,a.title=t;const l=document.createElement("TD"),s=document.createElement("SPAN");s.className="save-option",s.id="download-save",s.title=L("save-download"),s.addEventListener("click",()=>{const y=this.base64ToBlob(o,"application/octet-stream");this.saveFile(y,r+".sol")}),l.appendChild(s);const u=document.createElement("TD"),p=document.createElement("INPUT");p.type="file",p.accept=".sol",p.className="replace-save",p.id="replace-save-"+t;const h=document.createElement("LABEL");h.htmlFor="replace-save-"+t,h.className="save-option",h.id="replace-save",h.title=L("save-replace"),p.addEventListener("change",y=>this.replaceSOL(y,t)),u.appendChild(p),u.appendChild(h);const m=document.createElement("TD"),g=document.createElement("SPAN");g.className="save-option",g.id="delete-save",g.title=L("save-delete"),g.addEventListener("click",()=>this.deleteSave(t)),m.appendChild(g),i.appendChild(a),i.appendChild(l),i.appendChild(u),i.appendChild(m),n.appendChild(i)}})}async backupSaves(){const n=this.newZipWriter(),t=[];Object.keys(localStorage).forEach(o=>{let i=String(o.split("/").pop());const a=localStorage.getItem(o);if(a&&this.isB64SOL(a)){const l=this.base64ToArray(a),s=t.filter(u=>u===i).length;t.push(i),s>0&&(i+=` (${s+1})`),n.addFile(i+".sol",l)}});const r=new Blob([n.save()],{type:"application/zip"});this.saveFile(r,"saves.zip")}openHardwareAccelerationModal(){this.hardwareAccelerationModal.classList.remove("hidden")}async openSaveManager(){this.populateSaves(),this.saveManager.classList.remove("hidden")}openVolumeControls(){this.volumeControls.classList.remove("hidden")}async downloadSwf(){try{if(this.swfUrl){console.log("Downloading SWF: "+this.swfUrl);const n=await fetch(this.swfUrl.href);if(!n.ok){console.error("SWF download failed");return}const t=await n.blob();this.saveFile(t,qg(this.swfUrl))}else console.error("SWF download failed")}catch{console.error("SWF download failed")}}virtualKeyboardInput(){const n=this.virtualKeyboard,t=n.value;for(const r of t)for(const o of["keydown","keyup"])this.dispatchEvent(new KeyboardEvent(o,{key:r,bubbles:!0}));n.value=""}openVirtualKeyboard(){setTimeout(()=>{this.virtualKeyboard.focus({preventScroll:!0})},0)}closeVirtualKeyboard(){setTimeout(()=>{this.isVirtualKeyboardFocused()&&this.container.focus({preventScroll:!0})},0)}isVirtualKeyboardFocused(){return this.shadow.activeElement===this.virtualKeyboard}contextMenuItems(){const n="✓",t=[],r=()=>{t.length>0&&t[t.length-1]!==null&&t.push(null)};return this.instance&&this.isPlaying&&(this.instance.prepare_context_menu().forEach((i,a)=>{i.separatorBefore&&r(),t.push({text:i.caption+(i.checked?` (${n})`:""),onClick:async()=>{var l;return(l=this.instance)==null?void 0:l.run_context_menu_callback(a)},enabled:i.enabled})}),r()),this.fullscreenEnabled&&(this.isFullscreen?t.push({text:L("context-menu-exit-fullscreen"),onClick:async()=>this.setFullscreen(!1)}):t.push({text:L("context-menu-enter-fullscreen"),onClick:async()=>this.setFullscreen(!0)})),t.push({text:L("context-menu-volume-controls"),onClick:async()=>{this.openVolumeControls()}}),this.instance&&this.swfUrl&&this.loadedConfig&&this.loadedConfig.showSwfDownload===!0&&(r(),t.push({text:L("context-menu-download-swf"),onClick:this.downloadSwf.bind(this)})),navigator.clipboard&&window.isSecureContext&&t.push({text:L("context-menu-copy-debug-info"),onClick:()=>navigator.clipboard.writeText(this.getPanicData())}),this.checkSaves()&&t.push({text:L("context-menu-open-save-manager"),onClick:this.openSaveManager.bind(this)}),r(),t.push({text:L("context-menu-about-ruffle",{flavor:Tn?"extension":"",version:Te.versionName}),async onClick(){window.open(cr,"_blank")}}),this.isTouch&&(r(),t.push({text:L("context-menu-hide"),onClick:async()=>{this.contextMenuForceDisabled=!0}})),t}pointerDown(n){this.pointerDownPosition=new Vu(n.pageX,n.pageY),this.pointerMoveMaxDistance=0,this.startLongPressTimer()}clearLongPressTimer(){this.longPressTimer&&(clearTimeout(this.longPressTimer),this.longPressTimer=null)}startLongPressTimer(){this.clearLongPressTimer(),this.longPressTimer=setTimeout(()=>this.clearLongPressTimer(),800)}checkLongPressMovement(n){if(this.pointerDownPosition!==null){const t=new Vu(n.pageX,n.pageY),r=this.pointerDownPosition.distanceTo(t);r>this.pointerMoveMaxDistance&&(this.pointerMoveMaxDistance=r)}}checkLongPress(n){this.longPressTimer?this.clearLongPressTimer():!this.contextMenuSupported&&n.pointerType!=="mouse"&&this.pointerMoveMaxDistance<15&&this.showContextMenu(n)}suppressContextMenu(){this._suppressContextMenu=!0}showContextMenu(n){var s,u;if(this.panicked)return;if(n.preventDefault(),this._suppressContextMenu){this._suppressContextMenu=!1;return}if(this.shadow.querySelectorAll(".modal:not(.hidden)").length!==0||(n.type==="contextmenu"?(this.contextMenuSupported=!0,document.documentElement.addEventListener("click",this.hideContextMenu.bind(this),{once:!0})):(document.documentElement.addEventListener("pointerup",this.hideContextMenu.bind(this),{once:!0}),n.stopPropagation()),[!1,Rt.Off].includes(((s=this.loadedConfig)==null?void 0:s.contextMenu)??Rt.On)||this.isTouch&&((u=this.loadedConfig)==null?void 0:u.contextMenu)===Rt.RightClickOnly||this.contextMenuForceDisabled))return;for(;this.contextMenuElement.firstChild;)this.contextMenuElement.removeChild(this.contextMenuElement.firstChild);for(const p of this.contextMenuItems())if(p===null)this.contextMenuElement.appendChild(ve("li",{class:"menu-separator",children:ve("hr",{})}));else{const{text:h,onClick:m,enabled:g}=p,y=ve("li",{class:{"menu-item":!0,disabled:g===!1},children:h});this.contextMenuElement.appendChild(y),g!==!1&&y.addEventListener(this.contextMenuSupported?"click":"pointerup",async S=>{S.stopPropagation(),await m(S),this.hideContextMenu()})}this.contextMenuOverlay.classList.remove("hidden");const t=this.getBoundingClientRect(),r=this.contextMenuElement.getBoundingClientRect(),o=Math.max(0,n.clientX+r.width-document.documentElement.clientWidth),i=Math.max(0,n.clientY+r.height-document.documentElement.clientHeight),a=n.clientX-t.x-o,l=n.clientY-t.y-i;this.contextMenuElement.style.transform=`translate(${a}px, ${l}px)`}hideContextMenu(){var n;(n=this.instance)==null||n.clear_custom_menu_items(),this.contextMenuOverlay.classList.add("hidden")}pause(){this.instance&&(this.instance.pause(),this.playButton.style.display="block")}audioState(){if(this.instance){const n=this.instance.audio_context();return n&&n.state||"running"}return"suspended"}unmuteOverlayClicked(){if(this.instance){if(this.audioState()!=="running"){const n=this.instance.audio_context();n&&n.resume()}this.unmuteOverlay.style.display="none"}}unmuteAudioContext(){if(!ao){if(navigator.maxTouchPoints<1){ao=!0;return}this.container.addEventListener("click",()=>{var r;if(ao)return;const n=(r=this.instance)==null?void 0:r.audio_context();if(!n)return;const t=new Audio;t.src=(()=>{const o=new ArrayBuffer(10),i=new DataView(o),a=n.sampleRate;return i.setUint32(0,a,!0),i.setUint32(4,a,!0),i.setUint16(8,1,!0),`data:audio/wav;base64,UklGRisAAABXQVZFZm10IBAAAAABAAEA${window.btoa(String.fromCharCode(...new Uint8Array(o))).slice(0,13)}AgAZGF0YQcAAACAgICAgICAAAA=`})(),t.load(),t.play().then(()=>{ao=!0}).catch(o=>{console.warn(`Failed to play dummy sound: ${o}`)})},{once:!0})}}copyElement(n){if(n){for(const t of n.attributes)if(t.specified){if(t.name==="title"&&t.value==="Adobe Flash Player")continue;try{this.setAttribute(t.name,t.value)}catch{console.warn(`Unable to set attribute ${t.name} on Ruffle instance`)}}for(const t of Array.from(n.children))this.appendChild(t)}}static htmlDimensionToCssDimension(n){if(n){const t=n.match(Xg);if(t){let r=t[1];return t[3]||(r+="px"),r}}return null}onCallbackAvailable(n){const t=this.instance;this[n]=(...r)=>t==null?void 0:t.call_exposed_callback(n,r)}getObjectId(){return this.getAttribute("name")}set traceObserver(n){var t;(t=this.instance)==null||t.set_trace_observer(n)}getPanicData(){let n=`
# Player Info
`;if(n+=`Allows script access: ${this.loadedConfig?this.loadedConfig.allowScriptAccess:!1}
`,n+=`${this.rendererDebugInfo}
`,n+=this.debugPlayerInfo(),n+=`
# Page Info
`,n+=`Page URL: ${document.location.href}
`,this.swfUrl&&(n+=`SWF URL: ${this.swfUrl}
`),n+=`
# Browser Info
`,n+=`User Agent: ${window.navigator.userAgent}
`,n+=`Platform: ${window.navigator.platform}
`,n+=`Has touch support: ${window.navigator.maxTouchPoints>0}
`,n+=`
# Ruffle Info
`,n+=`Version: ${Te.versionNumber}
`,n+=`Name: ${Te.versionName}
`,n+=`Channel: ${Te.versionChannel}
`,n+=`Built: ${Te.buildDate}
`,n+=`Commit: ${Te.commitHash}
`,n+=`Is extension: ${Tn}
`,n+=`
# Metadata
`,this.metadata)for(const[t,r]of Object.entries(this.metadata))n+=`${t}: ${r}
`;return n}panic(n){var r;if(this.panicked||(this.panicked=!0,this.hideSplashScreen(),n instanceof Error&&(n.name==="AbortError"||n.message.includes("AbortError"))))return;if(n instanceof rl){const o=(r=this.loadedConfig)==null?void 0:r.openInNewTab,i=this.loadedConfig&&"url"in this.loadedConfig?new URL(this.loadedConfig.url,document.baseURI):void 0;if(o&&i){this.addOpenInNewTabMessage(o,i);return}}const t=Object.assign([],{stackIndex:-1,avmStackIndex:-1});if(t.push(`# Error Info
`),n instanceof Error){if(t.push(`Error name: ${n.name}
`),t.push(`Error message: ${n.message}
`),n.stack){const o=t.push(`Error stack:
\`\`\`
${n.stack}
\`\`\`
`)-1;if(n.avmStack){const i=t.push(`AVM2 stack:
\`\`\`
    ${n.avmStack.trim().replace(/\t/g,"    ")}
\`\`\`
`)-1;t.avmStackIndex=i}t.stackIndex=o}}else t.push(`Error: ${n}
`);t.push(this.getPanicData()),Yg(this.container,n,t,this.swfUrl),this.destroy()}addOpenInNewTabMessage(n,t){var s,u;const r=new URL(t);if((s=this.loadedConfig)!=null&&s.parameters){const p=Yi((u=this.loadedConfig)==null?void 0:u.parameters);Object.entries(p).forEach(([h,m])=>{r.searchParams.set(h,m)})}this.hideSplashScreen();const o=document.createElement("div");o.id="message-overlay";const i=document.createElement("div");i.className="message",i.appendChild(le("message-cant-embed"));const a=document.createElement("div"),l=document.createElement("a");l.innerText=L("open-in-new-tab"),l.onclick=()=>n(r),a.appendChild(l),i.appendChild(a),o.appendChild(i),this.container.prepend(o)}displayRootMovieDownloadFailedMessage(n){var r;const t=(r=this.loadedConfig)==null?void 0:r.openInNewTab;if(t&&this.swfUrl&&window.location.origin!==this.swfUrl.origin)this.addOpenInNewTabMessage(t,this.swfUrl);else{const o=n?new rp(this.swfUrl):new tp(this.swfUrl);this.panic(o)}}displayMessage(n){const t=document.createElement("div");t.id="message-overlay";const r=document.createElement("div");r.className="message";const o=document.createElement("p");o.textContent=n,r.appendChild(o);const i=document.createElement("div"),a=document.createElement("button");a.id="continue-btn",a.textContent=L("continue"),i.appendChild(a),r.appendChild(i),t.appendChild(r),this.container.prepend(t),this.container.querySelector("#continue-btn").onclick=()=>{t.parentNode.removeChild(t)}}displayUnsupportedVideo(n){const t=this.videoModal.querySelector("#video-holder");if(t){const r=document.createElement("video");r.addEventListener("contextmenu",o=>o.stopPropagation()),r.src=n,r.autoplay=!0,r.controls=!0,t.textContent="",t.appendChild(r),this.videoModal.classList.remove("hidden")}}displayClipboardModal(n){const t=this.clipboardModal.querySelector("#clipboard-modal-description");t&&(t.textContent=L("clipboard-message-description",{variant:n?"access-denied":"unsupported"}),this.clipboardModal.classList.remove("hidden"))}debugPlayerInfo(){return""}hideSplashScreen(){this.splashScreen.classList.add("hidden"),this.container.classList.remove("hidden")}showSplashScreen(){this.splashScreen.classList.remove("hidden"),this.container.classList.add("hidden")}setMetadata(n){this._metadata=n,this._readyState=vt.Loaded,this.hideSplashScreen(),this.dispatchEvent(new CustomEvent(Ye.LOADED_METADATA)),this.dispatchEvent(new CustomEvent(Ye.LOADED_DATA))}PercentLoaded(){return this._readyState===vt.Loaded?100:0}}Ye.LOADED_METADATA="loadedmetadata";Ye.LOADED_DATA="loadeddata";var vt;(function(e){e[e.HaveNothing=0]="HaveNothing",e[e.Loading=1]="Loading",e[e.Loaded=2]="Loaded"})(vt||(vt={}));function Hu(e){switch(e==null?void 0:e.toLowerCase()){case"true":return!0;case"false":return!1;default:return null}}function ip(e,n){switch(e==null?void 0:e.toLowerCase()){case"always":return!0;case"never":return!1;case"samedomain":try{return new URL(window.location.href).origin===new URL(n,window.location.href).origin}catch{return!1}default:return null}}function il(e,n){const t={url:e},r=n("allowNetworking");r!==null&&(t.allowNetworking=r);const o=ip(n("allowScriptAccess"),e);o!==null&&(t.allowScriptAccess=o);const i=n("bgcolor");i!==null&&(t.backgroundColor=i);const a=n("base");if(a!==null)if(a==="."){const y=new URL(e,document.baseURI);t.base=new URL(a,y).href}else t.base=a;const l=Hu(n("menu"));l!==null&&(t.menu=l);const s=Hu(n("allowFullScreen"));s!==null&&(t.allowFullscreen=s);const u=n("flashvars");u!==null&&(t.parameters=u);const p=n("quality");p!==null&&(t.quality=p);const h=n("salign");h!==null&&(t.salign=h);const m=n("scale");m!==null&&(t.scale=m);const g=n("wmode");return g!==null&&(t.wmode=g),t}function al(e){if(e){let n="",t="";try{const r=new URL(e,cr);n=r.pathname,t=r.hostname}catch{}if(n.startsWith("/v/")&&/^(?:(?:www\.|m\.)?youtube(?:-nocookie)?\.com)|(?:youtu\.be)$/i.test(t))return!0}return!1}function ll(e,n){var o;const t=e.getAttribute(n),r=((o=window.RufflePlayer)==null?void 0:o.config)??{};if(t)try{const i=new URL(t);i.protocol==="http:"&&window.location.protocol==="https:"&&(!("upgradeToHttps"in r)||r.upgradeToHttps!==!1)&&(i.protocol="https:",e.setAttribute(n,i.toString()))}catch{}}function vs(e){let n=e.parentElement;for(;n!==null;){switch(n.tagName){case"AUDIO":case"VIDEO":return!0}n=n.parentElement}return!1}class ew{constructor(n,t){this.isMuted=n,this.volume=t}get_volume(){return this.isMuted?0:this.volume/100}}class Mt extends Ye{connectedCallback(){super.connectedCallback();const n=this.attributes.getNamedItem("src");if(n){const t=o=>{var i;return((i=this.attributes.getNamedItem(o))==null?void 0:i.value)??null},r=il(n.value,t);this.load(r,!0)}}get nodeName(){return"EMBED"}get src(){var n;return(n=this.attributes.getNamedItem("src"))==null?void 0:n.value}set src(n){if(n){const t=document.createAttribute("src");t.value=n,this.attributes.setNamedItem(t)}else this.attributes.removeNamedItem("src")}static get observedAttributes(){return["src","width","height"]}attributeChangedCallback(n,t,r){if(super.attributeChangedCallback(n,t,r),this.isConnected&&n==="src"){const o=this.attributes.getNamedItem("src");if(o){const i=l=>{var s;return((s=this.attributes.getNamedItem(l))==null?void 0:s.value)??null},a=il(o.value,i);this.load(a,!0)}}}static isInterdictable(n){const t=n.getAttribute("src"),r=n.getAttribute("type");return!t||vs(n)?!1:al(t)?(ll(n,"src"),!1):Yf(t,r)}static fromNativeEmbedElement(n){const t=rs("ruffle-embed",Mt),r=document.createElement(t);return r.copyElement(n),r}}function nw(e,n,t){n=n.toLowerCase();for(const[r,o]of Object.entries(e))if(r.toLowerCase()===n)return o;return t}function Ku(e){var t,r;const n={};for(const o of e.children)if(o instanceof HTMLParamElement){const i=(t=o.attributes.getNamedItem("name"))==null?void 0:t.value,a=(r=o.attributes.getNamedItem("value"))==null?void 0:r.value;i&&a&&(n[i]=a)}return n}class xt extends Ye{constructor(){super(...arguments),this.params={}}connectedCallback(){var t;super.connectedCallback(),this.params=Ku(this);let n=null;if(this.attributes.getNamedItem("data")?n=(t=this.attributes.getNamedItem("data"))==null?void 0:t.value:this.params.movie&&(n=this.params.movie),n){const r=["allowNetworking","base","bgcolor","flashvars"],i=il(n,a=>nw(this.params,a,r.includes(a)?this.getAttribute(a):null));this.load(i,!0)}}debugPlayerInfo(){var r;let n=`Player type: Object
`,t=null;return this.attributes.getNamedItem("data")?t=(r=this.attributes.getNamedItem("data"))==null?void 0:r.value:this.params.movie&&(t=this.params.movie),n+=`SWF URL: ${t}
`,Object.keys(this.params).forEach(o=>{n+=`Param ${o}: ${this.params[o]}
`}),Object.keys(this.attributes).forEach(o=>{var i;n+=`Attribute ${o}: ${(i=this.attributes.getNamedItem(o))==null?void 0:i.value}
`}),n}get nodeName(){return"OBJECT"}get data(){return this.getAttribute("data")}set data(n){if(n){const t=document.createAttribute("data");t.value=n,this.attributes.setNamedItem(t)}else this.attributes.removeNamedItem("data")}static isInterdictable(n){var l,s,u;if(vs(n)||n.getElementsByTagName("ruffle-object").length>0||n.getElementsByTagName("ruffle-embed").length>0)return!1;const t=(l=n.attributes.getNamedItem("data"))==null?void 0:l.value.toLowerCase(),r=((s=n.attributes.getNamedItem("type"))==null?void 0:s.value)??null,o=Ku(n);let i;if(t){if(al(t))return ll(n,"data"),!1;i=t}else if(o&&o.movie){if(al(o.movie)){const p=n.querySelector("param[name='movie']");if(p){ll(p,"value");const h=p.getAttribute("value");h&&n.setAttribute("data",h)}return!1}i=o.movie}else return!1;const a=(u=n.attributes.getNamedItem("classid"))==null?void 0:u.value.toLowerCase();return a===Ig.toLowerCase()?!Array.from(n.getElementsByTagName("object")).some(xt.isInterdictable)&&!Array.from(n.getElementsByTagName("embed")).some(Mt.isInterdictable):a?!1:Yf(i,r)}static fromNativeObjectElement(n){const t=rs("ruffle-object",xt),r=document.createElement(t);for(const o of Array.from(n.getElementsByTagName("embed")))Mt.isInterdictable(o)&&o.remove();for(const o of Array.from(n.getElementsByTagName("object")))xt.isInterdictable(o)&&o.remove();return r.copyElement(n),r}}class ap{constructor(n){if(this.__mimeTypes=[],this.__namedMimeTypes={},n)for(let t=0;t<n.length;t++)this.install(n[t])}install(n){const t=this.__mimeTypes.length;this.__mimeTypes.push(n),this.__namedMimeTypes[n.type]=n,this[n.type]=n,this[t]=n}item(n){return this.__mimeTypes[n>>>0]}namedItem(n){return this.__namedMimeTypes[n]}get length(){return this.__mimeTypes.length}[Symbol.iterator](){return this.__mimeTypes[Symbol.iterator]()}}class tw extends ap{constructor(n,t,r){super(),this.name=n,this.description=t,this.filename=r}}class rw{constructor(n){this.__plugins=[],this.__namedPlugins={};for(let t=0;t<n.length;t++)this.install(n[t])}install(n){const t=this.__plugins.length;this.__plugins.push(n),this.__namedPlugins[n.name]=n,this[n.name]=n,this[t]=n}item(n){return this.__plugins[n>>>0]}namedItem(n){return this.__namedPlugins[n]}refresh(){}[Symbol.iterator](){return this.__plugins[Symbol.iterator]()}get length(){return this.__plugins.length}}const mn=new tw("Shockwave Flash","Shockwave Flash 32.0 r0","ruffle.js");mn.install({type:Jf,description:"Shockwave Flash",suffixes:"spl",enabledPlugin:mn});mn.install({type:Qf,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:mn});mn.install({type:Zf,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:mn});mn.install({type:Gf,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:mn});function ow(e){(!("install"in navigator.plugins)||!navigator.plugins.install)&&Object.defineProperty(navigator,"plugins",{value:new rw(navigator.plugins),writable:!1}),navigator.plugins.install(e),e.length>0&&(!("install"in navigator.mimeTypes)||!navigator.mimeTypes.install)&&Object.defineProperty(navigator,"mimeTypes",{value:new ap(navigator.mimeTypes),writable:!1});const t=navigator.mimeTypes;for(let r=0;r<e.length;r+=1)t.install(e[r])}function iw(e){let n=(ur==null?void 0:ur.href)??"";return!Tn&&"publicPath"in e&&e.publicPath!==null&&e.publicPath!==void 0&&(n=e.publicPath),n!==""&&!n.endsWith("/")&&(n+="/"),n}var Zu;const _r=((Zu=window.RufflePlayer)==null?void 0:Zu.config)??{},aw=iw(_r)+"ruffle.js";let Xi,ea;function lp(){var e;return"favorFlash"in _r&&_r.favorFlash===!1?!1:(((e=navigator.plugins.namedItem("Shockwave Flash"))==null?void 0:e.filename)??"ruffle.js")!=="ruffle.js"}function sp(){try{Xi=Xi??document.getElementsByTagName("object"),ea=ea??document.getElementsByTagName("embed");for(const e of Array.from(Xi))if(xt.isInterdictable(e)){const n=xt.fromNativeObjectElement(e);e.replaceWith(n)}for(const e of Array.from(ea))if(Mt.isInterdictable(e)){const n=Mt.fromNativeEmbedElement(e);e.replaceWith(n)}}catch(e){console.error(`Serious error encountered when polyfilling native Flash elements: ${e}`)}}let na,ta;function up(){na=na??document.getElementsByTagName("iframe"),ta=ta??document.getElementsByTagName("frame"),[na,ta].forEach(e=>{for(const n of e){if(n.dataset.rufflePolyfilled!==void 0)continue;n.dataset.rufflePolyfilled="";const t=n.contentWindow,r=`Couldn't load Ruffle into ${n.tagName}[${n.src}]: `;try{t.document.readyState==="complete"&&Qu(t,r)}catch(o){Tn||console.warn(r+o)}n.addEventListener("load",()=>{Qu(t,r)},!1)}})}async function Qu(e,n){await new Promise(r=>{window.setTimeout(()=>{r()},100)});let t;try{if(t=e.document,!t)return}catch(r){Tn||console.warn(n+r);return}if(!(!Tn&&t.documentElement.dataset.ruffleOptout!==void 0)){if(Tn)e.RufflePlayer||(e.RufflePlayer={}),e.RufflePlayer.config={..._r,...e.RufflePlayer.config??{}};else if(!e.RufflePlayer){const r=t.createElement("script");r.setAttribute("src",aw),r.onload=()=>{e.RufflePlayer={},e.RufflePlayer.config=_r},t.head.appendChild(r)}}}function lw(){new MutationObserver(function(n){n.some(r=>Array.from(r.addedNodes).some(o=>["EMBED","OBJECT"].includes(o.nodeName)||o instanceof Element&&o.querySelector("embed, object")!==null))&&(sp(),up())}).observe(document,{childList:!0,subtree:!0})}function sw(){lp()||ow(mn)}function uw(){lp()||(sp(),up(),lw())}class zt{constructor(n,t,r,o,i){this.major=n,this.minor=t,this.patch=r,this.prIdent=o,this.buildIdent=i}static fromSemver(n){const t=n.split("+"),r=t[0].split("-"),o=r[0].split("."),i=parseInt(o[0],10);let a=0,l=0,s=null,u=null;return o[1]!==void 0&&(a=parseInt(o[1],10)),o[2]!==void 0&&(l=parseInt(o[2],10)),r[1]!==void 0&&(s=r[1].split(".")),t[1]!==void 0&&(u=t[1].split(".")),new zt(i,a,l,s,u)}isCompatibleWith(n){return this.major!==0&&this.major===n.major||this.major===0&&n.major===0&&this.minor!==0&&this.minor===n.minor||this.major===0&&n.major===0&&this.minor===0&&n.minor===0&&this.patch!==0&&this.patch===n.patch}hasPrecedenceOver(n){if(this.major>n.major)return!0;if(this.major<n.major)return!1;if(this.minor>n.minor)return!0;if(this.minor<n.minor)return!1;if(this.patch>n.patch)return!0;if(this.patch<n.patch)return!1;if(this.prIdent===null&&n.prIdent!==null)return!0;if(this.prIdent!==null&&n.prIdent===null)return!1;if(this.prIdent!==null&&n.prIdent!==null){const t=/^[0-9]*$/;for(let r=0;r<this.prIdent.length&&r<n.prIdent.length;r+=1){const o=t.test(n.prIdent[r]),i=t.test(this.prIdent[r]);if(!i&&o)return!0;if(i&&o){const a=parseInt(this.prIdent[r],10),l=parseInt(n.prIdent[r],10);if(a>l)return!0;if(a<l)return!1}else{if(i&&!o)return!1;if(!i&&!o){if(this.prIdent[r]>n.prIdent[r])return!0;if(this.prIdent[r]<n.prIdent[r])return!1}}}if(this.prIdent.length>n.prIdent.length)return!0;if(this.prIdent.length<n.prIdent.length)return!1}if(this.buildIdent!==null&&n.buildIdent===null)return!0;if(this.buildIdent===null&&n.buildIdent!==null)return!1;if(this.buildIdent!==null&&n.buildIdent!==null){const t=/^[0-9]*$/;for(let r=0;r<this.buildIdent.length&&r<n.buildIdent.length;r+=1){const o=t.test(this.buildIdent[r]),i=t.test(n.buildIdent[r]);if(!o&&i)return!0;if(o&&i){const a=parseInt(this.buildIdent[r],10),l=parseInt(n.buildIdent[r],10);if(a>l)return!0;if(a<l)return!1}else{if(o&&!i)return!1;if(!o&&!i){if(this.buildIdent[r]>n.buildIdent[r])return!0;if(this.buildIdent[r]<n.buildIdent[r])return!1}}}return this.buildIdent.length>n.buildIdent.length}return!1}isEqual(n){return this.major===n.major&&this.minor===n.minor&&this.patch===n.patch}isStableOrCompatiblePrerelease(n){return n.prIdent===null?!0:this.major===n.major&&this.minor===n.minor&&this.patch===n.patch}}class gs{constructor(n){this.requirements=n}satisfiedBy(n){for(const t of this.requirements){let r=!0;for(const{comparator:o,version:i}of t)r=r&&i.isStableOrCompatiblePrerelease(n),o===""||o==="="?r=r&&i.isEqual(n):o===">"?r=r&&n.hasPrecedenceOver(i):o===">="?r=r&&(n.hasPrecedenceOver(i)||i.isEqual(n)):o==="<"?r=r&&i.hasPrecedenceOver(n):o==="<="?r=r&&(i.hasPrecedenceOver(n)||i.isEqual(n)):o==="^"&&(r=r&&i.isCompatibleWith(n));if(r)return!0}return!1}static fromRequirementString(n){const t=n.split(" ");let r=[];const o=[];for(const i of t)if(i==="||")r.length>0&&(o.push(r),r=[]);else if(i.length>0){const a=/[0-9]/.exec(i);if(a){const l=i.slice(0,a.index).trim(),s=zt.fromSemver(i.slice(a.index).trim());r.push({comparator:l,version:s})}}return r.length>0&&o.push(r),new gs(o)}}class Ju{constructor(n){var t;this.sources=(n==null?void 0:n.sources)||{},this.config=(n==null?void 0:n.config)||{},this.invoked=(n==null?void 0:n.invoked)||!1,this.newestName=(n==null?void 0:n.newestName)||null,(t=n==null?void 0:n.superseded)==null||t.call(n),document.readyState==="loading"?document.addEventListener("readystatechange",this.init.bind(this)):window.setTimeout(this.init.bind(this),0)}get version(){return"0.1.0"}newestSourceName(){let n=null,t=zt.fromSemver("0.0.0");for(const r in this.sources)if(Object.prototype.hasOwnProperty.call(this.sources,r)){const o=zt.fromSemver(this.sources[r].version);o.hasPrecedenceOver(t)&&(n=r,t=o)}return n}init(){if(!this.invoked){if(this.invoked=!0,this.newestName=this.newestSourceName(),this.newestName===null)throw new Error("No registered Ruffle source!");("polyfills"in this.config?this.config.polyfills:!0)!==!1&&this.sources[this.newestName].polyfill()}}newest(){const n=this.newestSourceName();return n!==null?this.sources[n]:null}satisfying(n){const t=gs.fromRequirementString(n);let r=null;for(const o in this.sources)if(Object.prototype.hasOwnProperty.call(this.sources,o)){const i=zt.fromSemver(this.sources[o].version);t.satisfiedBy(i)&&(r=this.sources[o])}return r}localCompatible(){return this.sources.local!==void 0?this.satisfying("^"+this.sources.local.version):this.newest()}local(){return this.sources.local!==void 0?this.satisfying("="+this.sources.local.version):this.newest()}superseded(){this.invoked=!0}}function cw(e,n={}){let t;window.RufflePlayer instanceof Ju?t=window.RufflePlayer:(t=new Ju(window.RufflePlayer),window.RufflePlayer=t),t.sources[e]=ar,ar.options=n,("polyfills"in t.config?t.config.polyfills:!0)!==!1&&ar.pluginPolyfill()}cw("local");oa.createRoot(document.getElementById("root")).render(C.jsx(ra.StrictMode,{children:C.jsx(Hh,{ruffleBaseConfig:{autoplay:Ft.On,unmuteOverlay:Pr.Hidden,logLevel:Ho.Warn,letterbox:Vo.On,forceScale:!0,forceAlign:!0},allowSampleSwfs:!0,allowUrlLoading:!1})}));
