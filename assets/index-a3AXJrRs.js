var Ll=Object.defineProperty;var Ul=(e,t,s)=>t in e?Ll(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var Cs=(e,t,s)=>Ul(e,typeof t!="symbol"?t+"":t,s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Qi(e){const t=Object.create(null);for(const s of e.split(","))t[s]=1;return s=>s in t}const re={},Vt=[],qe=()=>{},Vl=()=>!1,qs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),er=e=>e.startsWith("onUpdate:"),we=Object.assign,tr=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},Bl=Object.prototype.hasOwnProperty,J=(e,t)=>Bl.call(e,t),H=Array.isArray,Bt=e=>Xs(e)==="[object Map]",Pn=e=>Xs(e)==="[object Set]",V=e=>typeof e=="function",fe=e=>typeof e=="string",gt=e=>typeof e=="symbol",le=e=>e!==null&&typeof e=="object",kn=e=>(le(e)||V(e))&&V(e.then)&&V(e.catch),In=Object.prototype.toString,Xs=e=>In.call(e),Hl=e=>Xs(e).slice(8,-1),Fn=e=>Xs(e)==="[object Object]",sr=e=>fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Qt=Qi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Js=e=>{const t=Object.create(null);return s=>t[s]||(t[s]=e(s))},Dl=/-(\w)/g,pt=Js(e=>e.replace(Dl,(t,s)=>s?s.toUpperCase():"")),jl=/\B([A-Z])/g,kt=Js(e=>e.replace(jl,"-$1").toLowerCase()),Nn=Js(e=>e.charAt(0).toUpperCase()+e.slice(1)),fi=Js(e=>e?`on${Nn(e)}`:""),ft=(e,t)=>!Object.is(e,t),hi=(e,...t)=>{for(let s=0;s<e.length;s++)e[s](...t)},Ln=(e,t,s,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:s})},zl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Dr;const Qs=()=>Dr||(Dr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ir(e){if(H(e)){const t={};for(let s=0;s<e.length;s++){const i=e[s],r=fe(i)?Yl(i):ir(i);if(r)for(const n in r)t[n]=r[n]}return t}else if(fe(e)||le(e))return e}const Wl=/;(?![^(]*\))/g,Kl=/:([^]+)/,Gl=/\/\*[^]*?\*\//g;function Yl(e){const t={};return e.replace(Gl,"").split(Wl).forEach(s=>{if(s){const i=s.split(Kl);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function rr(e){let t="";if(fe(e))t=e;else if(H(e))for(let s=0;s<e.length;s++){const i=rr(e[s]);i&&(t+=i+" ")}else if(le(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}const Zl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ql=Qi(Zl);function Un(e){return!!e||e===""}const Vn=e=>!!(e&&e.__v_isRef===!0),Ri=e=>fe(e)?e:e==null?"":H(e)||le(e)&&(e.toString===In||!V(e.toString))?Vn(e)?Ri(e.value):JSON.stringify(e,Bn,2):String(e),Bn=(e,t)=>Vn(t)?Bn(e,t.value):Bt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[i,r],n)=>(s[di(i,n)+" =>"]=r,s),{})}:Pn(t)?{[`Set(${t.size})`]:[...t.values()].map(s=>di(s))}:gt(t)?di(t):le(t)&&!H(t)&&!Fn(t)?String(t):t,di=(e,t="")=>{var s;return gt(e)?`Symbol(${(s=e.description)!=null?s:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ee;class Xl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ee,!t&&Ee&&(this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].pause();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].resume();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].resume()}}run(t){if(this._active){const s=Ee;try{return Ee=this,t()}finally{Ee=s}}}on(){Ee=this}off(){Ee=this.parent}stop(t){if(this._active){this._active=!1;let s,i;for(s=0,i=this.effects.length;s<i;s++)this.effects[s].stop();for(this.effects.length=0,s=0,i=this.cleanups.length;s<i;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,i=this.scopes.length;s<i;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Hn(){return Ee}function Jl(e,t=!1){Ee&&Ee.cleanups.push(e)}let oe;const pi=new WeakSet;class Dn{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ee&&Ee.active&&Ee.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,pi.has(this)&&(pi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zn(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,jr(this),Wn(this);const t=oe,s=Be;oe=this,Be=!0;try{return this.fn()}finally{Kn(this),oe=t,Be=s,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)lr(t);this.deps=this.depsTail=void 0,jr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?pi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Oi(this)&&this.run()}get dirty(){return Oi(this)}}let jn=0,es,ts;function zn(e,t=!1){if(e.flags|=8,t){e.next=ts,ts=e;return}e.next=es,es=e}function nr(){jn++}function or(){if(--jn>0)return;if(ts){let t=ts;for(ts=void 0;t;){const s=t.next;t.next=void 0,t.flags&=-9,t=s}}let e;for(;es;){let t=es;for(es=void 0;t;){const s=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=s}}if(e)throw e}function Wn(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Kn(e){let t,s=e.depsTail,i=s;for(;i;){const r=i.prevDep;i.version===-1?(i===s&&(s=r),lr(i),Ql(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}e.deps=t,e.depsTail=s}function Oi(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Gn(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Gn(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===us))return;e.globalVersion=us;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Oi(e)){e.flags&=-3;return}const s=oe,i=Be;oe=e,Be=!0;try{Wn(e);const r=e.fn(e._value);(t.version===0||ft(r,e._value))&&(e._value=r,t.version++)}catch(r){throw t.version++,r}finally{oe=s,Be=i,Kn(e),e.flags&=-3}}function lr(e,t=!1){const{dep:s,prevSub:i,nextSub:r}=e;if(i&&(i.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=i,e.nextSub=void 0),s.subs===e&&(s.subs=i,!i&&s.computed)){s.computed.flags&=-5;for(let n=s.computed.deps;n;n=n.nextDep)lr(n,!0)}!t&&!--s.sc&&s.map&&s.map.delete(s.key)}function Ql(e){const{prevDep:t,nextDep:s}=e;t&&(t.nextDep=s,e.prevDep=void 0),s&&(s.prevDep=t,e.nextDep=void 0)}let Be=!0;const Yn=[];function mt(){Yn.push(Be),Be=!1}function bt(){const e=Yn.pop();Be=e===void 0?!0:e}function jr(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const s=oe;oe=void 0;try{t()}finally{oe=s}}}let us=0;class ea{constructor(t,s){this.sub=t,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ei{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!oe||!Be||oe===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==oe)s=this.activeLink=new ea(oe,this),oe.deps?(s.prevDep=oe.depsTail,oe.depsTail.nextDep=s,oe.depsTail=s):oe.deps=oe.depsTail=s,Zn(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const i=s.nextDep;i.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=i),s.prevDep=oe.depsTail,s.nextDep=void 0,oe.depsTail.nextDep=s,oe.depsTail=s,oe.deps===s&&(oe.deps=i)}return s}trigger(t){this.version++,us++,this.notify(t)}notify(t){nr();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{or()}}}function Zn(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Zn(i)}const s=e.dep.subs;s!==e&&(e.prevSub=s,s&&(s.nextSub=e)),e.dep.subs=e}}const Vs=new WeakMap,St=Symbol(""),Pi=Symbol(""),fs=Symbol("");function xe(e,t,s){if(Be&&oe){let i=Vs.get(e);i||Vs.set(e,i=new Map);let r=i.get(s);r||(i.set(s,r=new ei),r.map=i,r.key=s),r.track()}}function rt(e,t,s,i,r,n){const o=Vs.get(e);if(!o){us++;return}const a=l=>{l&&l.trigger()};if(nr(),t==="clear")o.forEach(a);else{const l=H(e),h=l&&sr(s);if(l&&s==="length"){const f=Number(i);o.forEach((d,g)=>{(g==="length"||g===fs||!gt(g)&&g>=f)&&a(d)})}else switch((s!==void 0||o.has(void 0))&&a(o.get(s)),h&&a(o.get(fs)),t){case"add":l?h&&a(o.get("length")):(a(o.get(St)),Bt(e)&&a(o.get(Pi)));break;case"delete":l||(a(o.get(St)),Bt(e)&&a(o.get(Pi)));break;case"set":Bt(e)&&a(o.get(St));break}}or()}function ta(e,t){const s=Vs.get(e);return s&&s.get(t)}function Nt(e){const t=Z(e);return t===e?t:(xe(t,"iterate",fs),He(e)?t:t.map(Ce))}function ar(e){return xe(e=Z(e),"iterate",fs),e}const sa={__proto__:null,[Symbol.iterator](){return gi(this,Symbol.iterator,Ce)},concat(...e){return Nt(this).concat(...e.map(t=>H(t)?Nt(t):t))},entries(){return gi(this,"entries",e=>(e[1]=Ce(e[1]),e))},every(e,t){return tt(this,"every",e,t,void 0,arguments)},filter(e,t){return tt(this,"filter",e,t,s=>s.map(Ce),arguments)},find(e,t){return tt(this,"find",e,t,Ce,arguments)},findIndex(e,t){return tt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return tt(this,"findLast",e,t,Ce,arguments)},findLastIndex(e,t){return tt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return tt(this,"forEach",e,t,void 0,arguments)},includes(...e){return mi(this,"includes",e)},indexOf(...e){return mi(this,"indexOf",e)},join(e){return Nt(this).join(e)},lastIndexOf(...e){return mi(this,"lastIndexOf",e)},map(e,t){return tt(this,"map",e,t,void 0,arguments)},pop(){return Gt(this,"pop")},push(...e){return Gt(this,"push",e)},reduce(e,...t){return zr(this,"reduce",e,t)},reduceRight(e,...t){return zr(this,"reduceRight",e,t)},shift(){return Gt(this,"shift")},some(e,t){return tt(this,"some",e,t,void 0,arguments)},splice(...e){return Gt(this,"splice",e)},toReversed(){return Nt(this).toReversed()},toSorted(e){return Nt(this).toSorted(e)},toSpliced(...e){return Nt(this).toSpliced(...e)},unshift(...e){return Gt(this,"unshift",e)},values(){return gi(this,"values",Ce)}};function gi(e,t,s){const i=ar(e),r=i[t]();return i!==e&&!He(e)&&(r._next=r.next,r.next=()=>{const n=r._next();return n.value&&(n.value=s(n.value)),n}),r}const ia=Array.prototype;function tt(e,t,s,i,r,n){const o=ar(e),a=o!==e&&!He(e),l=o[t];if(l!==ia[t]){const d=l.apply(e,n);return a?Ce(d):d}let h=s;o!==e&&(a?h=function(d,g){return s.call(this,Ce(d),g,e)}:s.length>2&&(h=function(d,g){return s.call(this,d,g,e)}));const f=l.call(o,h,i);return a&&r?r(f):f}function zr(e,t,s,i){const r=ar(e);let n=s;return r!==e&&(He(e)?s.length>3&&(n=function(o,a,l){return s.call(this,o,a,l,e)}):n=function(o,a,l){return s.call(this,o,Ce(a),l,e)}),r[t](n,...i)}function mi(e,t,s){const i=Z(e);xe(i,"iterate",fs);const r=i[t](...s);return(r===-1||r===!1)&&hr(s[0])?(s[0]=Z(s[0]),i[t](...s)):r}function Gt(e,t,s=[]){mt(),nr();const i=Z(e)[t].apply(e,s);return or(),bt(),i}const ra=Qi("__proto__,__v_isRef,__isVue"),qn=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(gt));function na(e){gt(e)||(e=String(e));const t=Z(this);return xe(t,"has",e),t.hasOwnProperty(e)}class Xn{constructor(t=!1,s=!1){this._isReadonly=t,this._isShallow=s}get(t,s,i){if(s==="__v_skip")return t.__v_skip;const r=this._isReadonly,n=this._isShallow;if(s==="__v_isReactive")return!r;if(s==="__v_isReadonly")return r;if(s==="__v_isShallow")return n;if(s==="__v_raw")return i===(r?n?ga:to:n?eo:Qn).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=H(t);if(!r){let l;if(o&&(l=sa[s]))return l;if(s==="hasOwnProperty")return na}const a=Reflect.get(t,s,ue(t)?t:i);return(gt(s)?qn.has(s):ra(s))||(r||xe(t,"get",s),n)?a:ue(a)?o&&sr(s)?a:a.value:le(a)?r?ti(a):ur(a):a}}class Jn extends Xn{constructor(t=!1){super(!1,t)}set(t,s,i,r){let n=t[s];if(!this._isShallow){const l=Tt(n);if(!He(i)&&!Tt(i)&&(n=Z(n),i=Z(i)),!H(t)&&ue(n)&&!ue(i))return l?!1:(n.value=i,!0)}const o=H(t)&&sr(s)?Number(s)<t.length:J(t,s),a=Reflect.set(t,s,i,ue(t)?t:r);return t===Z(r)&&(o?ft(i,n)&&rt(t,"set",s,i):rt(t,"add",s,i)),a}deleteProperty(t,s){const i=J(t,s);t[s];const r=Reflect.deleteProperty(t,s);return r&&i&&rt(t,"delete",s,void 0),r}has(t,s){const i=Reflect.has(t,s);return(!gt(s)||!qn.has(s))&&xe(t,"has",s),i}ownKeys(t){return xe(t,"iterate",H(t)?"length":St),Reflect.ownKeys(t)}}class oa extends Xn{constructor(t=!1){super(!0,t)}set(t,s){return!0}deleteProperty(t,s){return!0}}const la=new Jn,aa=new oa,ca=new Jn(!0);const ki=e=>e,Ms=e=>Reflect.getPrototypeOf(e);function ua(e,t,s){return function(...i){const r=this.__v_raw,n=Z(r),o=Bt(n),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,h=r[e](...i),f=s?ki:t?Ii:Ce;return!t&&xe(n,"iterate",l?Pi:St),{next(){const{value:d,done:g}=h.next();return g?{value:d,done:g}:{value:a?[f(d[0]),f(d[1])]:f(d),done:g}},[Symbol.iterator](){return this}}}}function Ts(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function fa(e,t){const s={get(r){const n=this.__v_raw,o=Z(n),a=Z(r);e||(ft(r,a)&&xe(o,"get",r),xe(o,"get",a));const{has:l}=Ms(o),h=t?ki:e?Ii:Ce;if(l.call(o,r))return h(n.get(r));if(l.call(o,a))return h(n.get(a));n!==o&&n.get(r)},get size(){const r=this.__v_raw;return!e&&xe(Z(r),"iterate",St),Reflect.get(r,"size",r)},has(r){const n=this.__v_raw,o=Z(n),a=Z(r);return e||(ft(r,a)&&xe(o,"has",r),xe(o,"has",a)),r===a?n.has(r):n.has(r)||n.has(a)},forEach(r,n){const o=this,a=o.__v_raw,l=Z(a),h=t?ki:e?Ii:Ce;return!e&&xe(l,"iterate",St),a.forEach((f,d)=>r.call(n,h(f),h(d),o))}};return we(s,e?{add:Ts("add"),set:Ts("set"),delete:Ts("delete"),clear:Ts("clear")}:{add(r){!t&&!He(r)&&!Tt(r)&&(r=Z(r));const n=Z(this);return Ms(n).has.call(n,r)||(n.add(r),rt(n,"add",r,r)),this},set(r,n){!t&&!He(n)&&!Tt(n)&&(n=Z(n));const o=Z(this),{has:a,get:l}=Ms(o);let h=a.call(o,r);h||(r=Z(r),h=a.call(o,r));const f=l.call(o,r);return o.set(r,n),h?ft(n,f)&&rt(o,"set",r,n):rt(o,"add",r,n),this},delete(r){const n=Z(this),{has:o,get:a}=Ms(n);let l=o.call(n,r);l||(r=Z(r),l=o.call(n,r)),a&&a.call(n,r);const h=n.delete(r);return l&&rt(n,"delete",r,void 0),h},clear(){const r=Z(this),n=r.size!==0,o=r.clear();return n&&rt(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{s[r]=ua(r,e,t)}),s}function cr(e,t){const s=fa(e,t);return(i,r,n)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?i:Reflect.get(J(s,r)&&r in i?s:i,r,n)}const ha={get:cr(!1,!1)},da={get:cr(!1,!0)},pa={get:cr(!0,!1)};const Qn=new WeakMap,eo=new WeakMap,to=new WeakMap,ga=new WeakMap;function ma(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ba(e){return e.__v_skip||!Object.isExtensible(e)?0:ma(Hl(e))}function ur(e){return Tt(e)?e:fr(e,!1,la,ha,Qn)}function va(e){return fr(e,!1,ca,da,eo)}function ti(e){return fr(e,!0,aa,pa,to)}function fr(e,t,s,i,r){if(!le(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const n=r.get(e);if(n)return n;const o=ba(e);if(o===0)return e;const a=new Proxy(e,o===2?i:s);return r.set(e,a),a}function ss(e){return Tt(e)?ss(e.__v_raw):!!(e&&e.__v_isReactive)}function Tt(e){return!!(e&&e.__v_isReadonly)}function He(e){return!!(e&&e.__v_isShallow)}function hr(e){return e?!!e.__v_raw:!1}function Z(e){const t=e&&e.__v_raw;return t?Z(t):e}function _a(e){return!J(e,"__v_skip")&&Object.isExtensible(e)&&Ln(e,"__v_skip",!0),e}const Ce=e=>le(e)?ur(e):e,Ii=e=>le(e)?ti(e):e;function ue(e){return e?e.__v_isRef===!0:!1}function hs(e){return so(e,!1)}function At(e){return so(e,!0)}function so(e,t){return ue(e)?e:new ya(e,t)}class ya{constructor(t,s){this.dep=new ei,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?t:Z(t),this._value=s?t:Ce(t),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(t){const s=this._rawValue,i=this.__v_isShallow||He(t)||Tt(t);t=i?t:Z(t),ft(t,s)&&(this._rawValue=t,this._value=i?t:Ce(t),this.dep.trigger())}}function at(e){return ue(e)?e.value:e}function Xe(e){return V(e)?e():at(e)}const xa={get:(e,t,s)=>t==="__v_raw"?e:at(Reflect.get(e,t,s)),set:(e,t,s,i)=>{const r=e[t];return ue(r)&&!ue(s)?(r.value=s,!0):Reflect.set(e,t,s,i)}};function io(e){return ss(e)?e:new Proxy(e,xa)}class $a{constructor(t){this.__v_isRef=!0,this._value=void 0;const s=this.dep=new ei,{get:i,set:r}=t(s.track.bind(s),s.trigger.bind(s));this._get=i,this._set=r}get value(){return this._value=this._get()}set value(t){this._set(t)}}function wa(e){return new $a(e)}class Sa{constructor(t,s,i){this._object=t,this._key=s,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return ta(Z(this._object),this._key)}}class Aa{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Ea(e,t,s){return ue(e)?e:V(e)?new Aa(e):le(e)&&arguments.length>1?Ca(e,t,s):hs(e)}function Ca(e,t,s){const i=e[t];return ue(i)?i:new Sa(e,t,s)}class Ma{constructor(t,s,i){this.fn=t,this.setter=s,this._value=void 0,this.dep=new ei(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=us-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&oe!==this)return zn(this,!0),!0}get value(){const t=this.dep.track();return Gn(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ta(e,t,s=!1){let i,r;return V(e)?i=e:(i=e.get,r=e.set),new Ma(i,r,s)}const Rs={},Bs=new WeakMap;let $t;function Ra(e,t=!1,s=$t){if(s){let i=Bs.get(s);i||Bs.set(s,i=[]),i.push(e)}}function Oa(e,t,s=re){const{immediate:i,deep:r,once:n,scheduler:o,augmentJob:a,call:l}=s,h=T=>r?T:He(T)||r===!1||r===0?ct(T,1):ct(T);let f,d,g,$,R=!1,F=!1;if(ue(e)?(d=()=>e.value,R=He(e)):ss(e)?(d=()=>h(e),R=!0):H(e)?(F=!0,R=e.some(T=>ss(T)||He(T)),d=()=>e.map(T=>{if(ue(T))return T.value;if(ss(T))return h(T);if(V(T))return l?l(T,2):T()})):V(e)?t?d=l?()=>l(e,2):e:d=()=>{if(g){mt();try{g()}finally{bt()}}const T=$t;$t=f;try{return l?l(e,3,[$]):e($)}finally{$t=T}}:d=qe,t&&r){const T=d,Y=r===!0?1/0:r;d=()=>ct(T(),Y)}const q=Hn(),B=()=>{f.stop(),q&&q.active&&tr(q.effects,f)};if(n&&t){const T=t;t=(...Y)=>{T(...Y),B()}}let z=F?new Array(e.length).fill(Rs):Rs;const K=T=>{if(!(!(f.flags&1)||!f.dirty&&!T))if(t){const Y=f.run();if(r||R||(F?Y.some((he,ce)=>ft(he,z[ce])):ft(Y,z))){g&&g();const he=$t;$t=f;try{const ce=[Y,z===Rs?void 0:F&&z[0]===Rs?[]:z,$];l?l(t,3,ce):t(...ce),z=Y}finally{$t=he}}}else f.run()};return a&&a(K),f=new Dn(d),f.scheduler=o?()=>o(K,!1):K,$=T=>Ra(T,!1,f),g=f.onStop=()=>{const T=Bs.get(f);if(T){if(l)l(T,4);else for(const Y of T)Y();Bs.delete(f)}},t?i?K(!0):z=f.run():o?o(K.bind(null,!0),!0):f.run(),B.pause=f.pause.bind(f),B.resume=f.resume.bind(f),B.stop=B,B}function ct(e,t=1/0,s){if(t<=0||!le(e)||e.__v_skip||(s=s||new Set,s.has(e)))return e;if(s.add(e),t--,ue(e))ct(e.value,t,s);else if(H(e))for(let i=0;i<e.length;i++)ct(e[i],t,s);else if(Pn(e)||Bt(e))e.forEach(i=>{ct(i,t,s)});else if(Fn(e)){for(const i in e)ct(e[i],t,s);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&ct(e[i],t,s)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ws(e,t,s,i){try{return i?e(...i):e()}catch(r){si(r,t,s)}}function Qe(e,t,s,i){if(V(e)){const r=ws(e,t,s,i);return r&&kn(r)&&r.catch(n=>{si(n,t,s)}),r}if(H(e)){const r=[];for(let n=0;n<e.length;n++)r.push(Qe(e[n],t,s,i));return r}}function si(e,t,s,i=!0){const r=t?t.vnode:null,{errorHandler:n,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||re;if(t){let a=t.parent;const l=t.proxy,h=`https://vuejs.org/error-reference/#runtime-${s}`;for(;a;){const f=a.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](e,l,h)===!1)return}a=a.parent}if(n){mt(),ws(n,null,10,[e,l,h]),bt();return}}Pa(e,s,r,i,o)}function Pa(e,t,s,i=!0,r=!1){if(r)throw e;console.error(e)}const Me=[];let Ye=-1;const Ht=[];let ot=null,Lt=0;const ro=Promise.resolve();let Hs=null;function dr(e){const t=Hs||ro;return e?t.then(this?e.bind(this):e):t}function ka(e){let t=Ye+1,s=Me.length;for(;t<s;){const i=t+s>>>1,r=Me[i],n=ds(r);n<e||n===e&&r.flags&2?t=i+1:s=i}return t}function pr(e){if(!(e.flags&1)){const t=ds(e),s=Me[Me.length-1];!s||!(e.flags&2)&&t>=ds(s)?Me.push(e):Me.splice(ka(t),0,e),e.flags|=1,no()}}function no(){Hs||(Hs=ro.then(lo))}function Ia(e){H(e)?Ht.push(...e):ot&&e.id===-1?ot.splice(Lt+1,0,e):e.flags&1||(Ht.push(e),e.flags|=1),no()}function Wr(e,t,s=Ye+1){for(;s<Me.length;s++){const i=Me[s];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;Me.splice(s,1),s--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function oo(e){if(Ht.length){const t=[...new Set(Ht)].sort((s,i)=>ds(s)-ds(i));if(Ht.length=0,ot){ot.push(...t);return}for(ot=t,Lt=0;Lt<ot.length;Lt++){const s=ot[Lt];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}ot=null,Lt=0}}const ds=e=>e.id==null?e.flags&2?-1:1/0:e.id;function lo(e){try{for(Ye=0;Ye<Me.length;Ye++){const t=Me[Ye];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ws(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ye<Me.length;Ye++){const t=Me[Ye];t&&(t.flags&=-2)}Ye=-1,Me.length=0,oo(),Hs=null,(Me.length||Ht.length)&&lo()}}let Le=null,ao=null;function Ds(e){const t=Le;return Le=e,ao=e&&e.type.__scopeId||null,t}function Fa(e,t=Le,s){if(!t||e._n)return e;const i=(...r)=>{i._d&&en(-1);const n=Ds(t);let o;try{o=e(...r)}finally{Ds(n),i._d&&en(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function _t(e,t,s,i){const r=e.dirs,n=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];n&&(a.oldValue=n[o].value);let l=a.dir[i];l&&(mt(),Qe(l,s,8,[e.el,a,e,t]),bt())}}const Na=Symbol("_vte"),La=e=>e.__isTeleport;function gr(e,t){e.shapeFlag&6&&e.component?(e.transition=t,gr(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Ua(e,t){return V(e)?we({name:e.name},t,{setup:e}):e}function co(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Va(e){const t=li(),s=At(null);if(t){const r=t.refs===re?t.refs={}:t.refs;Object.defineProperty(r,e,{enumerable:!0,get:()=>s.value,set:n=>s.value=n})}return s}function js(e,t,s,i,r=!1){if(H(e)){e.forEach((R,F)=>js(R,t&&(H(t)?t[F]:t),s,i,r));return}if(is(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&js(e,t,s,i.component.subTree);return}const n=i.shapeFlag&4?_r(i.component):i.el,o=r?null:n,{i:a,r:l}=e,h=t&&t.r,f=a.refs===re?a.refs={}:a.refs,d=a.setupState,g=Z(d),$=d===re?()=>!1:R=>J(g,R);if(h!=null&&h!==l&&(fe(h)?(f[h]=null,$(h)&&(d[h]=null)):ue(h)&&(h.value=null)),V(l))ws(l,a,12,[o,f]);else{const R=fe(l),F=ue(l);if(R||F){const q=()=>{if(e.f){const B=R?$(l)?d[l]:f[l]:l.value;r?H(B)&&tr(B,n):H(B)?B.includes(n)||B.push(n):R?(f[l]=[n],$(l)&&(d[l]=f[l])):(l.value=[n],e.k&&(f[e.k]=l.value))}else R?(f[l]=o,$(l)&&(d[l]=o)):F&&(l.value=o,e.k&&(f[e.k]=o))};o?(q.id=-1,ke(q,s)):q()}}}Qs().requestIdleCallback;Qs().cancelIdleCallback;const is=e=>!!e.type.__asyncLoader,uo=e=>e.type.__isKeepAlive;function Ba(e,t){fo(e,"a",t)}function Ha(e,t){fo(e,"da",t)}function fo(e,t,s=_e){const i=e.__wdc||(e.__wdc=()=>{let r=s;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(ii(t,i,s),s){let r=s.parent;for(;r&&r.parent;)uo(r.parent.vnode)&&Da(i,t,s,r),r=r.parent}}function Da(e,t,s,i){const r=ii(t,e,i,!0);ho(()=>{tr(i[t],r)},s)}function ii(e,t,s=_e,i=!1){if(s){const r=s[e]||(s[e]=[]),n=t.__weh||(t.__weh=(...o)=>{mt();const a=Ss(s),l=Qe(t,s,e,o);return a(),bt(),l});return i?r.unshift(n):r.push(n),n}}const nt=e=>(t,s=_e)=>{(!ms||e==="sp")&&ii(e,(...i)=>t(...i),s)},ja=nt("bm"),ri=nt("m"),za=nt("bu"),Wa=nt("u"),Ka=nt("bum"),ho=nt("um"),Ga=nt("sp"),Ya=nt("rtg"),Za=nt("rtc");function qa(e,t=_e){ii("ec",e,t)}const Xa=Symbol.for("v-ndc"),Fi=e=>e?Io(e)?_r(e):Fi(e.parent):null,rs=we(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Fi(e.parent),$root:e=>Fi(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>go(e),$forceUpdate:e=>e.f||(e.f=()=>{pr(e.update)}),$nextTick:e=>e.n||(e.n=dr.bind(e.proxy)),$watch:e=>yc.bind(e)}),bi=(e,t)=>e!==re&&!e.__isScriptSetup&&J(e,t),Ja={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:s,setupState:i,data:r,props:n,accessCache:o,type:a,appContext:l}=e;let h;if(t[0]!=="$"){const $=o[t];if($!==void 0)switch($){case 1:return i[t];case 2:return r[t];case 4:return s[t];case 3:return n[t]}else{if(bi(i,t))return o[t]=1,i[t];if(r!==re&&J(r,t))return o[t]=2,r[t];if((h=e.propsOptions[0])&&J(h,t))return o[t]=3,n[t];if(s!==re&&J(s,t))return o[t]=4,s[t];Ni&&(o[t]=0)}}const f=rs[t];let d,g;if(f)return t==="$attrs"&&xe(e.attrs,"get",""),f(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(s!==re&&J(s,t))return o[t]=4,s[t];if(g=l.config.globalProperties,J(g,t))return g[t]},set({_:e},t,s){const{data:i,setupState:r,ctx:n}=e;return bi(r,t)?(r[t]=s,!0):i!==re&&J(i,t)?(i[t]=s,!0):J(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(n[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:i,appContext:r,propsOptions:n}},o){let a;return!!s[o]||e!==re&&J(e,o)||bi(t,o)||(a=n[0])&&J(a,o)||J(i,o)||J(rs,o)||J(r.config.globalProperties,o)},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:J(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};function Kr(e){return H(e)?e.reduce((t,s)=>(t[s]=null,t),{}):e}let Ni=!0;function Qa(e){const t=go(e),s=e.proxy,i=e.ctx;Ni=!1,t.beforeCreate&&Gr(t.beforeCreate,e,"bc");const{data:r,computed:n,methods:o,watch:a,provide:l,inject:h,created:f,beforeMount:d,mounted:g,beforeUpdate:$,updated:R,activated:F,deactivated:q,beforeDestroy:B,beforeUnmount:z,destroyed:K,unmounted:T,render:Y,renderTracked:he,renderTriggered:ce,errorCaptured:ye,serverPrefetch:de,expose:pe,inheritAttrs:O,components:se,directives:X,filters:Wt}=t;if(h&&ec(h,i,null),o)for(const x in o){const w=o[x];V(w)&&(i[x]=w.bind(s))}if(r){const x=r.call(s,s);le(x)&&(e.data=ur(x))}if(Ni=!0,n)for(const x in n){const w=n[x],L=V(w)?w.bind(s,s):V(w.get)?w.get.bind(s,s):qe,G=!V(w)&&V(w.set)?w.set.bind(s):qe,ee=Je({get:L,set:G});Object.defineProperty(i,x,{enumerable:!0,configurable:!0,get:()=>ee.value,set:ie=>ee.value=ie})}if(a)for(const x in a)po(a[x],i,s,x);if(l){const x=V(l)?l.call(s):l;Reflect.ownKeys(x).forEach(w=>{oc(w,x[w])})}f&&Gr(f,e,"c");function m(x,w){H(w)?w.forEach(L=>x(L.bind(s))):w&&x(w.bind(s))}if(m(ja,d),m(ri,g),m(za,$),m(Wa,R),m(Ba,F),m(Ha,q),m(qa,ye),m(Za,he),m(Ya,ce),m(Ka,z),m(ho,T),m(Ga,de),H(pe))if(pe.length){const x=e.exposed||(e.exposed={});pe.forEach(w=>{Object.defineProperty(x,w,{get:()=>s[w],set:L=>s[w]=L})})}else e.exposed||(e.exposed={});Y&&e.render===qe&&(e.render=Y),O!=null&&(e.inheritAttrs=O),se&&(e.components=se),X&&(e.directives=X),de&&co(e)}function ec(e,t,s=qe){H(e)&&(e=Li(e));for(const i in e){const r=e[i];let n;le(r)?"default"in r?n=ns(r.from||i,r.default,!0):n=ns(r.from||i):n=ns(r),ue(n)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>n.value,set:o=>n.value=o}):t[i]=n}}function Gr(e,t,s){Qe(H(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,s)}function po(e,t,s,i){let r=i.includes(".")?To(s,i):()=>s[i];if(fe(e)){const n=t[e];V(n)&&ht(r,n)}else if(V(e))ht(r,e.bind(s));else if(le(e))if(H(e))e.forEach(n=>po(n,t,s,i));else{const n=V(e.handler)?e.handler.bind(s):t[e.handler];V(n)&&ht(r,n,e)}}function go(e){const t=e.type,{mixins:s,extends:i}=t,{mixins:r,optionsCache:n,config:{optionMergeStrategies:o}}=e.appContext,a=n.get(t);let l;return a?l=a:!r.length&&!s&&!i?l=t:(l={},r.length&&r.forEach(h=>zs(l,h,o,!0)),zs(l,t,o)),le(t)&&n.set(t,l),l}function zs(e,t,s,i=!1){const{mixins:r,extends:n}=t;n&&zs(e,n,s,!0),r&&r.forEach(o=>zs(e,o,s,!0));for(const o in t)if(!(i&&o==="expose")){const a=tc[o]||s&&s[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const tc={data:Yr,props:Zr,emits:Zr,methods:qt,computed:qt,beforeCreate:Se,created:Se,beforeMount:Se,mounted:Se,beforeUpdate:Se,updated:Se,beforeDestroy:Se,beforeUnmount:Se,destroyed:Se,unmounted:Se,activated:Se,deactivated:Se,errorCaptured:Se,serverPrefetch:Se,components:qt,directives:qt,watch:ic,provide:Yr,inject:sc};function Yr(e,t){return t?e?function(){return we(V(e)?e.call(this,this):e,V(t)?t.call(this,this):t)}:t:e}function sc(e,t){return qt(Li(e),Li(t))}function Li(e){if(H(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function Se(e,t){return e?[...new Set([].concat(e,t))]:t}function qt(e,t){return e?we(Object.create(null),e,t):t}function Zr(e,t){return e?H(e)&&H(t)?[...new Set([...e,...t])]:we(Object.create(null),Kr(e),Kr(t??{})):t}function ic(e,t){if(!e)return t;if(!t)return e;const s=we(Object.create(null),e);for(const i in t)s[i]=Se(e[i],t[i]);return s}function mo(){return{app:null,config:{isNativeTag:Vl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rc=0;function nc(e,t){return function(i,r=null){V(i)||(i=we({},i)),r!=null&&!le(r)&&(r=null);const n=mo(),o=new WeakSet,a=[];let l=!1;const h=n.app={_uid:rc++,_component:i,_props:r,_container:null,_context:n,_instance:null,version:jc,get config(){return n.config},set config(f){},use(f,...d){return o.has(f)||(f&&V(f.install)?(o.add(f),f.install(h,...d)):V(f)&&(o.add(f),f(h,...d))),h},mixin(f){return n.mixins.includes(f)||n.mixins.push(f),h},component(f,d){return d?(n.components[f]=d,h):n.components[f]},directive(f,d){return d?(n.directives[f]=d,h):n.directives[f]},mount(f,d,g){if(!l){const $=h._ceVNode||Ct(i,r);return $.appContext=n,g===!0?g="svg":g===!1&&(g=void 0),e($,f,g),l=!0,h._container=f,f.__vue_app__=h,_r($.component)}},onUnmount(f){a.push(f)},unmount(){l&&(Qe(a,h._instance,16),e(null,h._container),delete h._container.__vue_app__)},provide(f,d){return n.provides[f]=d,h},runWithContext(f){const d=Et;Et=h;try{return f()}finally{Et=d}}};return h}}let Et=null;function oc(e,t){if(_e){let s=_e.provides;const i=_e.parent&&_e.parent.provides;i===s&&(s=_e.provides=Object.create(i)),s[e]=t}}function ns(e,t,s=!1){const i=_e||Le;if(i||Et){const r=Et?Et._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return s&&V(t)?t.call(i&&i.proxy):t}}function bo(){return!!(_e||Le||Et)}const vo={},_o=()=>Object.create(vo),yo=e=>Object.getPrototypeOf(e)===vo;function lc(e,t,s,i=!1){const r={},n=_o();e.propsDefaults=Object.create(null),xo(e,t,r,n);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);s?e.props=i?r:va(r):e.type.props?e.props=r:e.props=n,e.attrs=n}function ac(e,t,s,i){const{props:r,attrs:n,vnode:{patchFlag:o}}=e,a=Z(r),[l]=e.propsOptions;let h=!1;if((i||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let g=f[d];if(ni(e.emitsOptions,g))continue;const $=t[g];if(l)if(J(n,g))$!==n[g]&&(n[g]=$,h=!0);else{const R=pt(g);r[R]=Ui(l,a,R,$,e,!1)}else $!==n[g]&&(n[g]=$,h=!0)}}}else{xo(e,t,r,n)&&(h=!0);let f;for(const d in a)(!t||!J(t,d)&&((f=kt(d))===d||!J(t,f)))&&(l?s&&(s[d]!==void 0||s[f]!==void 0)&&(r[d]=Ui(l,a,d,void 0,e,!0)):delete r[d]);if(n!==a)for(const d in n)(!t||!J(t,d))&&(delete n[d],h=!0)}h&&rt(e.attrs,"set","")}function xo(e,t,s,i){const[r,n]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(Qt(l))continue;const h=t[l];let f;r&&J(r,f=pt(l))?!n||!n.includes(f)?s[f]=h:(a||(a={}))[f]=h:ni(e.emitsOptions,l)||(!(l in i)||h!==i[l])&&(i[l]=h,o=!0)}if(n){const l=Z(s),h=a||re;for(let f=0;f<n.length;f++){const d=n[f];s[d]=Ui(r,l,d,h[d],e,!J(h,d))}}return o}function Ui(e,t,s,i,r,n){const o=e[s];if(o!=null){const a=J(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&V(l)){const{propsDefaults:h}=r;if(s in h)i=h[s];else{const f=Ss(r);i=h[s]=l.call(null,t),f()}}else i=l;r.ce&&r.ce._setProp(s,i)}o[0]&&(n&&!a?i=!1:o[1]&&(i===""||i===kt(s))&&(i=!0))}return i}const cc=new WeakMap;function $o(e,t,s=!1){const i=s?cc:t.propsCache,r=i.get(e);if(r)return r;const n=e.props,o={},a=[];let l=!1;if(!V(e)){const f=d=>{l=!0;const[g,$]=$o(d,t,!0);we(o,g),$&&a.push(...$)};!s&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!n&&!l)return le(e)&&i.set(e,Vt),Vt;if(H(n))for(let f=0;f<n.length;f++){const d=pt(n[f]);qr(d)&&(o[d]=re)}else if(n)for(const f in n){const d=pt(f);if(qr(d)){const g=n[f],$=o[d]=H(g)||V(g)?{type:g}:we({},g),R=$.type;let F=!1,q=!0;if(H(R))for(let B=0;B<R.length;++B){const z=R[B],K=V(z)&&z.name;if(K==="Boolean"){F=!0;break}else K==="String"&&(q=!1)}else F=V(R)&&R.name==="Boolean";$[0]=F,$[1]=q,(F||J($,"default"))&&a.push(d)}}const h=[o,a];return le(e)&&i.set(e,h),h}function qr(e){return e[0]!=="$"&&!Qt(e)}const wo=e=>e[0]==="_"||e==="$stable",mr=e=>H(e)?e.map(Ze):[Ze(e)],uc=(e,t,s)=>{if(t._n)return t;const i=Fa((...r)=>mr(t(...r)),s);return i._c=!1,i},So=(e,t,s)=>{const i=e._ctx;for(const r in e){if(wo(r))continue;const n=e[r];if(V(n))t[r]=uc(r,n,i);else if(n!=null){const o=mr(n);t[r]=()=>o}}},Ao=(e,t)=>{const s=mr(t);e.slots.default=()=>s},Eo=(e,t,s)=>{for(const i in t)(s||i!=="_")&&(e[i]=t[i])},fc=(e,t,s)=>{const i=e.slots=_o();if(e.vnode.shapeFlag&32){const r=t._;r?(Eo(i,t,s),s&&Ln(i,"_",r,!0)):So(t,i)}else t&&Ao(e,t)},hc=(e,t,s)=>{const{vnode:i,slots:r}=e;let n=!0,o=re;if(i.shapeFlag&32){const a=t._;a?s&&a===1?n=!1:Eo(r,t,s):(n=!t.$stable,So(t,r)),o=t}else t&&(Ao(e,t),o={default:1});if(n)for(const a in r)!wo(a)&&o[a]==null&&delete r[a]},ke=Cc;function dc(e){return pc(e)}function pc(e,t){const s=Qs();s.__VUE__=!0;const{insert:i,remove:r,patchProp:n,createElement:o,createText:a,createComment:l,setText:h,setElementText:f,parentNode:d,nextSibling:g,setScopeId:$=qe,insertStaticContent:R}=e,F=(c,u,p,_=null,b=null,v=null,E=void 0,A=null,S=!!u.dynamicChildren)=>{if(c===u)return;c&&!Yt(c,u)&&(_=Ve(c),ie(c,b,v,!0),c=null),u.patchFlag===-2&&(S=!1,u.dynamicChildren=null);const{type:y,ref:I,shapeFlag:C}=u;switch(y){case oi:q(c,u,p,_);break;case ps:B(c,u,p,_);break;case _i:c==null&&z(u,p,_,E);break;case it:se(c,u,p,_,b,v,E,A,S);break;default:C&1?Y(c,u,p,_,b,v,E,A,S):C&6?X(c,u,p,_,b,v,E,A,S):(C&64||C&128)&&y.process(c,u,p,_,b,v,E,A,S,vt)}I!=null&&b&&js(I,c&&c.ref,v,u||c,!u)},q=(c,u,p,_)=>{if(c==null)i(u.el=a(u.children),p,_);else{const b=u.el=c.el;u.children!==c.children&&h(b,u.children)}},B=(c,u,p,_)=>{c==null?i(u.el=l(u.children||""),p,_):u.el=c.el},z=(c,u,p,_)=>{[c.el,c.anchor]=R(c.children,u,p,_,c.el,c.anchor)},K=({el:c,anchor:u},p,_)=>{let b;for(;c&&c!==u;)b=g(c),i(c,p,_),c=b;i(u,p,_)},T=({el:c,anchor:u})=>{let p;for(;c&&c!==u;)p=g(c),r(c),c=p;r(u)},Y=(c,u,p,_,b,v,E,A,S)=>{u.type==="svg"?E="svg":u.type==="math"&&(E="mathml"),c==null?he(u,p,_,b,v,E,A,S):de(c,u,b,v,E,A,S)},he=(c,u,p,_,b,v,E,A)=>{let S,y;const{props:I,shapeFlag:C,transition:P,dirs:U}=c;if(S=c.el=o(c.type,v,I&&I.is,I),C&8?f(S,c.children):C&16&&ye(c.children,S,null,_,b,vi(c,v),E,A),U&&_t(c,null,_,"created"),ce(S,c,c.scopeId,E,_),I){for(const ne in I)ne!=="value"&&!Qt(ne)&&n(S,ne,null,I[ne],v,_);"value"in I&&n(S,"value",null,I.value,v),(y=I.onVnodeBeforeMount)&&Ge(y,_,c)}U&&_t(c,null,_,"beforeMount");const j=gc(b,P);j&&P.beforeEnter(S),i(S,u,p),((y=I&&I.onVnodeMounted)||j||U)&&ke(()=>{y&&Ge(y,_,c),j&&P.enter(S),U&&_t(c,null,_,"mounted")},b)},ce=(c,u,p,_,b)=>{if(p&&$(c,p),_)for(let v=0;v<_.length;v++)$(c,_[v]);if(b){let v=b.subTree;if(u===v||Oo(v.type)&&(v.ssContent===u||v.ssFallback===u)){const E=b.vnode;ce(c,E,E.scopeId,E.slotScopeIds,b.parent)}}},ye=(c,u,p,_,b,v,E,A,S=0)=>{for(let y=S;y<c.length;y++){const I=c[y]=A?lt(c[y]):Ze(c[y]);F(null,I,u,p,_,b,v,E,A)}},de=(c,u,p,_,b,v,E)=>{const A=u.el=c.el;let{patchFlag:S,dynamicChildren:y,dirs:I}=u;S|=c.patchFlag&16;const C=c.props||re,P=u.props||re;let U;if(p&&yt(p,!1),(U=P.onVnodeBeforeUpdate)&&Ge(U,p,u,c),I&&_t(u,c,p,"beforeUpdate"),p&&yt(p,!0),(C.innerHTML&&P.innerHTML==null||C.textContent&&P.textContent==null)&&f(A,""),y?pe(c.dynamicChildren,y,A,p,_,vi(u,b),v):E||w(c,u,A,null,p,_,vi(u,b),v,!1),S>0){if(S&16)O(A,C,P,p,b);else if(S&2&&C.class!==P.class&&n(A,"class",null,P.class,b),S&4&&n(A,"style",C.style,P.style,b),S&8){const j=u.dynamicProps;for(let ne=0;ne<j.length;ne++){const te=j[ne],Oe=C[te],Te=P[te];(Te!==Oe||te==="value")&&n(A,te,Oe,Te,b,p)}}S&1&&c.children!==u.children&&f(A,u.children)}else!E&&y==null&&O(A,C,P,p,b);((U=P.onVnodeUpdated)||I)&&ke(()=>{U&&Ge(U,p,u,c),I&&_t(u,c,p,"updated")},_)},pe=(c,u,p,_,b,v,E)=>{for(let A=0;A<u.length;A++){const S=c[A],y=u[A],I=S.el&&(S.type===it||!Yt(S,y)||S.shapeFlag&70)?d(S.el):p;F(S,y,I,null,_,b,v,E,!0)}},O=(c,u,p,_,b)=>{if(u!==p){if(u!==re)for(const v in u)!Qt(v)&&!(v in p)&&n(c,v,u[v],null,b,_);for(const v in p){if(Qt(v))continue;const E=p[v],A=u[v];E!==A&&v!=="value"&&n(c,v,A,E,b,_)}"value"in p&&n(c,"value",u.value,p.value,b)}},se=(c,u,p,_,b,v,E,A,S)=>{const y=u.el=c?c.el:a(""),I=u.anchor=c?c.anchor:a("");let{patchFlag:C,dynamicChildren:P,slotScopeIds:U}=u;U&&(A=A?A.concat(U):U),c==null?(i(y,p,_),i(I,p,_),ye(u.children||[],p,I,b,v,E,A,S)):C>0&&C&64&&P&&c.dynamicChildren?(pe(c.dynamicChildren,P,p,b,v,E,A),(u.key!=null||b&&u===b.subTree)&&Co(c,u,!0)):w(c,u,p,I,b,v,E,A,S)},X=(c,u,p,_,b,v,E,A,S)=>{u.slotScopeIds=A,c==null?u.shapeFlag&512?b.ctx.activate(u,p,_,E,S):Wt(u,p,_,b,v,E,S):et(c,u,S)},Wt=(c,u,p,_,b,v,E)=>{const A=c.component=Lc(c,_,b);if(uo(c)&&(A.ctx.renderer=vt),Uc(A,!1,E),A.asyncDep){if(b&&b.registerDep(A,m,E),!c.el){const S=A.subTree=Ct(ps);B(null,S,u,p)}}else m(A,c,u,p,b,v,E)},et=(c,u,p)=>{const _=u.component=c.component;if(Ac(c,u,p))if(_.asyncDep&&!_.asyncResolved){x(_,u,p);return}else _.next=u,_.update();else u.el=c.el,_.vnode=u},m=(c,u,p,_,b,v,E)=>{const A=()=>{if(c.isMounted){let{next:C,bu:P,u:U,parent:j,vnode:ne}=c;{const We=Mo(c);if(We){C&&(C.el=ne.el,x(c,C,E)),We.asyncDep.then(()=>{c.isUnmounted||A()});return}}let te=C,Oe;yt(c,!1),C?(C.el=ne.el,x(c,C,E)):C=ne,P&&hi(P),(Oe=C.props&&C.props.onVnodeBeforeUpdate)&&Ge(Oe,j,C,ne),yt(c,!0);const Te=Jr(c),ze=c.subTree;c.subTree=Te,F(ze,Te,d(ze.el),Ve(ze),c,b,v),C.el=Te.el,te===null&&Ec(c,Te.el),U&&ke(U,b),(Oe=C.props&&C.props.onVnodeUpdated)&&ke(()=>Ge(Oe,j,C,ne),b)}else{let C;const{el:P,props:U}=u,{bm:j,m:ne,parent:te,root:Oe,type:Te}=c,ze=is(u);yt(c,!1),j&&hi(j),!ze&&(C=U&&U.onVnodeBeforeMount)&&Ge(C,te,u),yt(c,!0);{Oe.ce&&Oe.ce._injectChildStyle(Te);const We=c.subTree=Jr(c);F(null,We,p,_,c,b,v),u.el=We.el}if(ne&&ke(ne,b),!ze&&(C=U&&U.onVnodeMounted)){const We=u;ke(()=>Ge(C,te,We),b)}(u.shapeFlag&256||te&&is(te.vnode)&&te.vnode.shapeFlag&256)&&c.a&&ke(c.a,b),c.isMounted=!0,u=p=_=null}};c.scope.on();const S=c.effect=new Dn(A);c.scope.off();const y=c.update=S.run.bind(S),I=c.job=S.runIfDirty.bind(S);I.i=c,I.id=c.uid,S.scheduler=()=>pr(I),yt(c,!0),y()},x=(c,u,p)=>{u.component=c;const _=c.vnode.props;c.vnode=u,c.next=null,ac(c,u.props,_,p),hc(c,u.children,p),mt(),Wr(c),bt()},w=(c,u,p,_,b,v,E,A,S=!1)=>{const y=c&&c.children,I=c?c.shapeFlag:0,C=u.children,{patchFlag:P,shapeFlag:U}=u;if(P>0){if(P&128){G(y,C,p,_,b,v,E,A,S);return}else if(P&256){L(y,C,p,_,b,v,E,A,S);return}}U&8?(I&16&&je(y,b,v),C!==y&&f(p,C)):I&16?U&16?G(y,C,p,_,b,v,E,A,S):je(y,b,v,!0):(I&8&&f(p,""),U&16&&ye(C,p,_,b,v,E,A,S))},L=(c,u,p,_,b,v,E,A,S)=>{c=c||Vt,u=u||Vt;const y=c.length,I=u.length,C=Math.min(y,I);let P;for(P=0;P<C;P++){const U=u[P]=S?lt(u[P]):Ze(u[P]);F(c[P],U,p,null,b,v,E,A,S)}y>I?je(c,b,v,!0,!1,C):ye(u,p,_,b,v,E,A,S,C)},G=(c,u,p,_,b,v,E,A,S)=>{let y=0;const I=u.length;let C=c.length-1,P=I-1;for(;y<=C&&y<=P;){const U=c[y],j=u[y]=S?lt(u[y]):Ze(u[y]);if(Yt(U,j))F(U,j,p,null,b,v,E,A,S);else break;y++}for(;y<=C&&y<=P;){const U=c[C],j=u[P]=S?lt(u[P]):Ze(u[P]);if(Yt(U,j))F(U,j,p,null,b,v,E,A,S);else break;C--,P--}if(y>C){if(y<=P){const U=P+1,j=U<I?u[U].el:_;for(;y<=P;)F(null,u[y]=S?lt(u[y]):Ze(u[y]),p,j,b,v,E,A,S),y++}}else if(y>P)for(;y<=C;)ie(c[y],b,v,!0),y++;else{const U=y,j=y,ne=new Map;for(y=j;y<=P;y++){const Pe=u[y]=S?lt(u[y]):Ze(u[y]);Pe.key!=null&&ne.set(Pe.key,y)}let te,Oe=0;const Te=P-j+1;let ze=!1,We=0;const Kt=new Array(Te);for(y=0;y<Te;y++)Kt[y]=0;for(y=U;y<=C;y++){const Pe=c[y];if(Oe>=Te){ie(Pe,b,v,!0);continue}let Ke;if(Pe.key!=null)Ke=ne.get(Pe.key);else for(te=j;te<=P;te++)if(Kt[te-j]===0&&Yt(Pe,u[te])){Ke=te;break}Ke===void 0?ie(Pe,b,v,!0):(Kt[Ke-j]=y+1,Ke>=We?We=Ke:ze=!0,F(Pe,u[Ke],p,null,b,v,E,A,S),Oe++)}const Br=ze?mc(Kt):Vt;for(te=Br.length-1,y=Te-1;y>=0;y--){const Pe=j+y,Ke=u[Pe],Hr=Pe+1<I?u[Pe+1].el:_;Kt[y]===0?F(null,Ke,p,Hr,b,v,E,A,S):ze&&(te<0||y!==Br[te]?ee(Ke,p,Hr,2):te--)}}},ee=(c,u,p,_,b=null)=>{const{el:v,type:E,transition:A,children:S,shapeFlag:y}=c;if(y&6){ee(c.component.subTree,u,p,_);return}if(y&128){c.suspense.move(u,p,_);return}if(y&64){E.move(c,u,p,vt);return}if(E===it){i(v,u,p);for(let C=0;C<S.length;C++)ee(S[C],u,p,_);i(c.anchor,u,p);return}if(E===_i){K(c,u,p);return}if(_!==2&&y&1&&A)if(_===0)A.beforeEnter(v),i(v,u,p),ke(()=>A.enter(v),b);else{const{leave:C,delayLeave:P,afterLeave:U}=A,j=()=>i(v,u,p),ne=()=>{C(v,()=>{j(),U&&U()})};P?P(v,j,ne):ne()}else i(v,u,p)},ie=(c,u,p,_=!1,b=!1)=>{const{type:v,props:E,ref:A,children:S,dynamicChildren:y,shapeFlag:I,patchFlag:C,dirs:P,cacheIndex:U}=c;if(C===-2&&(b=!1),A!=null&&js(A,null,p,c,!0),U!=null&&(u.renderCache[U]=void 0),I&256){u.ctx.deactivate(c);return}const j=I&1&&P,ne=!is(c);let te;if(ne&&(te=E&&E.onVnodeBeforeUnmount)&&Ge(te,u,c),I&6)ge(c.component,p,_);else{if(I&128){c.suspense.unmount(p,_);return}j&&_t(c,null,u,"beforeUnmount"),I&64?c.type.remove(c,u,p,vt,_):y&&!y.hasOnce&&(v!==it||C>0&&C&64)?je(y,u,p,!1,!0):(v===it&&C&384||!b&&I&16)&&je(S,u,p),_&&Ne(c)}(ne&&(te=E&&E.onVnodeUnmounted)||j)&&ke(()=>{te&&Ge(te,u,c),j&&_t(c,null,u,"unmounted")},p)},Ne=c=>{const{type:u,el:p,anchor:_,transition:b}=c;if(u===it){De(p,_);return}if(u===_i){T(c);return}const v=()=>{r(p),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(c.shapeFlag&1&&b&&!b.persisted){const{leave:E,delayLeave:A}=b,S=()=>E(p,v);A?A(c.el,v,S):S()}else v()},De=(c,u)=>{let p;for(;c!==u;)p=g(c),r(c),c=p;r(u)},ge=(c,u,p)=>{const{bum:_,scope:b,job:v,subTree:E,um:A,m:S,a:y}=c;Xr(S),Xr(y),_&&hi(_),b.stop(),v&&(v.flags|=8,ie(E,c,u,p)),A&&ke(A,u),ke(()=>{c.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},je=(c,u,p,_=!1,b=!1,v=0)=>{for(let E=v;E<c.length;E++)ie(c[E],u,p,_,b)},Ve=c=>{if(c.shapeFlag&6)return Ve(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const u=g(c.anchor||c.el),p=u&&u[Na];return p?g(p):u};let Ft=!1;const Es=(c,u,p)=>{c==null?u._vnode&&ie(u._vnode,null,null,!0):F(u._vnode||null,c,u,null,null,null,p),u._vnode=c,Ft||(Ft=!0,Wr(),oo(),Ft=!1)},vt={p:F,um:ie,m:ee,r:Ne,mt:Wt,mc:ye,pc:w,pbc:pe,n:Ve,o:e};return{render:Es,hydrate:void 0,createApp:nc(Es)}}function vi({type:e,props:t},s){return s==="svg"&&e==="foreignObject"||s==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:s}function yt({effect:e,job:t},s){s?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function gc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Co(e,t,s=!1){const i=e.children,r=t.children;if(H(i)&&H(r))for(let n=0;n<i.length;n++){const o=i[n];let a=r[n];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[n]=lt(r[n]),a.el=o.el),!s&&a.patchFlag!==-2&&Co(o,a)),a.type===oi&&(a.el=o.el)}}function mc(e){const t=e.slice(),s=[0];let i,r,n,o,a;const l=e.length;for(i=0;i<l;i++){const h=e[i];if(h!==0){if(r=s[s.length-1],e[r]<h){t[i]=r,s.push(i);continue}for(n=0,o=s.length-1;n<o;)a=n+o>>1,e[s[a]]<h?n=a+1:o=a;h<e[s[n]]&&(n>0&&(t[i]=s[n-1]),s[n]=i)}}for(n=s.length,o=s[n-1];n-- >0;)s[n]=o,o=t[o];return s}function Mo(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Mo(t)}function Xr(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const bc=Symbol.for("v-scx"),vc=()=>ns(bc);function _c(e,t){return br(e,null,t)}function ht(e,t,s){return br(e,t,s)}function br(e,t,s=re){const{immediate:i,deep:r,flush:n,once:o}=s,a=we({},s),l=t&&i||!t&&n!=="post";let h;if(ms){if(n==="sync"){const $=vc();h=$.__watcherHandles||($.__watcherHandles=[])}else if(!l){const $=()=>{};return $.stop=qe,$.resume=qe,$.pause=qe,$}}const f=_e;a.call=($,R,F)=>Qe($,f,R,F);let d=!1;n==="post"?a.scheduler=$=>{ke($,f&&f.suspense)}:n!=="sync"&&(d=!0,a.scheduler=($,R)=>{R?$():pr($)}),a.augmentJob=$=>{t&&($.flags|=4),d&&($.flags|=2,f&&($.id=f.uid,$.i=f))};const g=Oa(e,t,a);return ms&&(h?h.push(g):l&&g()),g}function yc(e,t,s){const i=this.proxy,r=fe(e)?e.includes(".")?To(i,e):()=>i[e]:e.bind(i,i);let n;V(t)?n=t:(n=t.handler,s=t);const o=Ss(this),a=br(r,n.bind(i),s);return o(),a}function To(e,t){const s=t.split(".");return()=>{let i=e;for(let r=0;r<s.length&&i;r++)i=i[s[r]];return i}}const xc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${pt(t)}Modifiers`]||e[`${kt(t)}Modifiers`];function $c(e,t,...s){if(e.isUnmounted)return;const i=e.vnode.props||re;let r=s;const n=t.startsWith("update:"),o=n&&xc(i,t.slice(7));o&&(o.trim&&(r=s.map(f=>fe(f)?f.trim():f)),o.number&&(r=s.map(zl)));let a,l=i[a=fi(t)]||i[a=fi(pt(t))];!l&&n&&(l=i[a=fi(kt(t))]),l&&Qe(l,e,6,r);const h=i[a+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Qe(h,e,6,r)}}function Ro(e,t,s=!1){const i=t.emitsCache,r=i.get(e);if(r!==void 0)return r;const n=e.emits;let o={},a=!1;if(!V(e)){const l=h=>{const f=Ro(h,t,!0);f&&(a=!0,we(o,f))};!s&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!n&&!a?(le(e)&&i.set(e,null),null):(H(n)?n.forEach(l=>o[l]=null):we(o,n),le(e)&&i.set(e,o),o)}function ni(e,t){return!e||!qs(t)?!1:(t=t.slice(2).replace(/Once$/,""),J(e,t[0].toLowerCase()+t.slice(1))||J(e,kt(t))||J(e,t))}function Jr(e){const{type:t,vnode:s,proxy:i,withProxy:r,propsOptions:[n],slots:o,attrs:a,emit:l,render:h,renderCache:f,props:d,data:g,setupState:$,ctx:R,inheritAttrs:F}=e,q=Ds(e);let B,z;try{if(s.shapeFlag&4){const T=r||i,Y=T;B=Ze(h.call(Y,T,f,d,$,g,R)),z=a}else{const T=t;B=Ze(T.length>1?T(d,{attrs:a,slots:o,emit:l}):T(d,null)),z=t.props?a:wc(a)}}catch(T){os.length=0,si(T,e,1),B=Ct(ps)}let K=B;if(z&&F!==!1){const T=Object.keys(z),{shapeFlag:Y}=K;T.length&&Y&7&&(n&&T.some(er)&&(z=Sc(z,n)),K=Dt(K,z,!1,!0))}return s.dirs&&(K=Dt(K,null,!1,!0),K.dirs=K.dirs?K.dirs.concat(s.dirs):s.dirs),s.transition&&gr(K,s.transition),B=K,Ds(q),B}const wc=e=>{let t;for(const s in e)(s==="class"||s==="style"||qs(s))&&((t||(t={}))[s]=e[s]);return t},Sc=(e,t)=>{const s={};for(const i in e)(!er(i)||!(i.slice(9)in t))&&(s[i]=e[i]);return s};function Ac(e,t,s){const{props:i,children:r,component:n}=e,{props:o,children:a,patchFlag:l}=t,h=n.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&l>=0){if(l&1024)return!0;if(l&16)return i?Qr(i,o,h):!!o;if(l&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const g=f[d];if(o[g]!==i[g]&&!ni(h,g))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Qr(i,o,h):!0:!!o;return!1}function Qr(e,t,s){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const n=i[r];if(t[n]!==e[n]&&!ni(s,n))return!0}return!1}function Ec({vnode:e,parent:t},s){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=t.vnode).el=s,t=t.parent;else break}}const Oo=e=>e.__isSuspense;function Cc(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):Ia(e)}const it=Symbol.for("v-fgt"),oi=Symbol.for("v-txt"),ps=Symbol.for("v-cmt"),_i=Symbol.for("v-stc"),os=[];let Fe=null;function Mc(e=!1){os.push(Fe=e?null:[])}function Tc(){os.pop(),Fe=os[os.length-1]||null}let gs=1;function en(e,t=!1){gs+=e,e<0&&Fe&&t&&(Fe.hasOnce=!0)}function Rc(e){return e.dynamicChildren=gs>0?Fe||Vt:null,Tc(),gs>0&&Fe&&Fe.push(e),e}function Oc(e,t,s,i,r,n){return Rc(W(e,t,s,i,r,n,!0))}function Po(e){return e?e.__v_isVNode===!0:!1}function Yt(e,t){return e.type===t.type&&e.key===t.key}const ko=({key:e})=>e??null,ks=({ref:e,ref_key:t,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?fe(e)||ue(e)||V(e)?{i:Le,r:e,k:t,f:!!s}:e:null);function W(e,t=null,s=null,i=0,r=null,n=e===it?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ko(t),ref:t&&ks(t),scopeId:ao,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Le};return a?(vr(l,s),n&128&&e.normalize(l)):s&&(l.shapeFlag|=fe(s)?8:16),gs>0&&!o&&Fe&&(l.patchFlag>0||n&6)&&l.patchFlag!==32&&Fe.push(l),l}const Ct=Pc;function Pc(e,t=null,s=null,i=0,r=null,n=!1){if((!e||e===Xa)&&(e=ps),Po(e)){const a=Dt(e,t,!0);return s&&vr(a,s),gs>0&&!n&&Fe&&(a.shapeFlag&6?Fe[Fe.indexOf(e)]=a:Fe.push(a)),a.patchFlag=-2,a}if(Dc(e)&&(e=e.__vccOpts),t){t=kc(t);let{class:a,style:l}=t;a&&!fe(a)&&(t.class=rr(a)),le(l)&&(hr(l)&&!H(l)&&(l=we({},l)),t.style=ir(l))}const o=fe(e)?1:Oo(e)?128:La(e)?64:le(e)?4:V(e)?2:0;return W(e,t,s,i,r,o,n,!0)}function kc(e){return e?hr(e)||yo(e)?we({},e):e:null}function Dt(e,t,s=!1,i=!1){const{props:r,ref:n,patchFlag:o,children:a,transition:l}=e,h=t?Ic(r||{},t):r,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&ko(h),ref:t&&t.ref?s&&n?H(n)?n.concat(ks(t)):[n,ks(t)]:ks(t):n,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==it?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Dt(e.ssContent),ssFallback:e.ssFallback&&Dt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&i&&gr(f,l.clone(f)),f}function Vi(e=" ",t=0){return Ct(oi,null,e,t)}function Ze(e){return e==null||typeof e=="boolean"?Ct(ps):H(e)?Ct(it,null,e.slice()):Po(e)?lt(e):Ct(oi,null,String(e))}function lt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Dt(e)}function vr(e,t){let s=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(H(t))s=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),vr(e,r()),r._c&&(r._d=!0));return}else{s=32;const r=t._;!r&&!yo(t)?t._ctx=Le:r===3&&Le&&(Le.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else V(t)?(t={default:t,_ctx:Le},s=32):(t=String(t),i&64?(s=16,t=[Vi(t)]):s=8);e.children=t,e.shapeFlag|=s}function Ic(...e){const t={};for(let s=0;s<e.length;s++){const i=e[s];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=rr([t.class,i.class]));else if(r==="style")t.style=ir([t.style,i.style]);else if(qs(r)){const n=t[r],o=i[r];o&&n!==o&&!(H(n)&&n.includes(o))&&(t[r]=n?[].concat(n,o):o)}else r!==""&&(t[r]=i[r])}return t}function Ge(e,t,s,i=null){Qe(e,t,7,[s,i])}const Fc=mo();let Nc=0;function Lc(e,t,s){const i=e.type,r=(t?t.appContext:e.appContext)||Fc,n={uid:Nc++,vnode:e,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Xl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$o(i,r),emitsOptions:Ro(i,r),emit:null,emitted:null,propsDefaults:re,inheritAttrs:i.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=t?t.root:n,n.emit=$c.bind(null,n),e.ce&&e.ce(n),n}let _e=null;const li=()=>_e||Le;let Ws,Bi;{const e=Qs(),t=(s,i)=>{let r;return(r=e[s])||(r=e[s]=[]),r.push(i),n=>{r.length>1?r.forEach(o=>o(n)):r[0](n)}};Ws=t("__VUE_INSTANCE_SETTERS__",s=>_e=s),Bi=t("__VUE_SSR_SETTERS__",s=>ms=s)}const Ss=e=>{const t=_e;return Ws(e),e.scope.on(),()=>{e.scope.off(),Ws(t)}},tn=()=>{_e&&_e.scope.off(),Ws(null)};function Io(e){return e.vnode.shapeFlag&4}let ms=!1;function Uc(e,t=!1,s=!1){t&&Bi(t);const{props:i,children:r}=e.vnode,n=Io(e);lc(e,i,n,t),fc(e,r,s);const o=n?Vc(e,t):void 0;return t&&Bi(!1),o}function Vc(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ja);const{setup:i}=s;if(i){mt();const r=e.setupContext=i.length>1?Hc(e):null,n=Ss(e),o=ws(i,e,0,[e.props,r]),a=kn(o);if(bt(),n(),(a||e.sp)&&!is(e)&&co(e),a){if(o.then(tn,tn),t)return o.then(l=>{sn(e,l)}).catch(l=>{si(l,e,0)});e.asyncDep=o}else sn(e,o)}else Fo(e)}function sn(e,t,s){V(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:le(t)&&(e.setupState=io(t)),Fo(e)}function Fo(e,t,s){const i=e.type;e.render||(e.render=i.render||qe);{const r=Ss(e);mt();try{Qa(e)}finally{bt(),r()}}}const Bc={get(e,t){return xe(e,"get",""),e[t]}};function Hc(e){const t=s=>{e.exposed=s||{}};return{attrs:new Proxy(e.attrs,Bc),slots:e.slots,emit:e.emit,expose:t}}function _r(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(io(_a(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in rs)return rs[s](e)},has(t,s){return s in t||s in rs}})):e.proxy}function Dc(e){return V(e)&&"__vccOpts"in e}const Je=(e,t)=>Ta(e,t,ms),jc="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Hi;const rn=typeof window<"u"&&window.trustedTypes;if(rn)try{Hi=rn.createPolicy("vue",{createHTML:e=>e})}catch{}const No=Hi?e=>Hi.createHTML(e):e=>e,zc="http://www.w3.org/2000/svg",Wc="http://www.w3.org/1998/Math/MathML",st=typeof document<"u"?document:null,nn=st&&st.createElement("template"),Kc={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,i)=>{const r=t==="svg"?st.createElementNS(zc,e):t==="mathml"?st.createElementNS(Wc,e):s?st.createElement(e,{is:s}):st.createElement(e);return e==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:e=>st.createTextNode(e),createComment:e=>st.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>st.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,i,r,n){const o=s?s.previousSibling:t.lastChild;if(r&&(r===n||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),s),!(r===n||!(r=r.nextSibling)););else{nn.innerHTML=No(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const a=nn.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,s)}return[o?o.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}},Gc=Symbol("_vtc");function Yc(e,t,s){const i=e[Gc];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}const on=Symbol("_vod"),Zc=Symbol("_vsh"),qc=Symbol(""),Xc=/(^|;)\s*display\s*:/;function Jc(e,t,s){const i=e.style,r=fe(s);let n=!1;if(s&&!r){if(t)if(fe(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();s[a]==null&&Is(i,a,"")}else for(const o in t)s[o]==null&&Is(i,o,"");for(const o in s)o==="display"&&(n=!0),Is(i,o,s[o])}else if(r){if(t!==s){const o=i[qc];o&&(s+=";"+o),i.cssText=s,n=Xc.test(s)}}else t&&e.removeAttribute("style");on in e&&(e[on]=n?i.display:"",e[Zc]&&(i.display="none"))}const ln=/\s*!important$/;function Is(e,t,s){if(H(s))s.forEach(i=>Is(e,t,i));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const i=Qc(e,t);ln.test(s)?e.setProperty(kt(i),s.replace(ln,""),"important"):e[i]=s}}const an=["Webkit","Moz","ms"],yi={};function Qc(e,t){const s=yi[t];if(s)return s;let i=pt(t);if(i!=="filter"&&i in e)return yi[t]=i;i=Nn(i);for(let r=0;r<an.length;r++){const n=an[r]+i;if(n in e)return yi[t]=n}return t}const cn="http://www.w3.org/1999/xlink";function un(e,t,s,i,r,n=ql(t)){i&&t.startsWith("xlink:")?s==null?e.removeAttributeNS(cn,t.slice(6,t.length)):e.setAttributeNS(cn,t,s):s==null||n&&!Un(s)?e.removeAttribute(t):e.setAttribute(t,n?"":gt(s)?String(s):s)}function fn(e,t,s,i,r){if(t==="innerHTML"||t==="textContent"){s!=null&&(e[t]=t==="innerHTML"?No(s):s);return}const n=e.tagName;if(t==="value"&&n!=="PROGRESS"&&!n.includes("-")){const a=n==="OPTION"?e.getAttribute("value")||"":e.value,l=s==null?e.type==="checkbox"?"on":"":String(s);(a!==l||!("_value"in e))&&(e.value=l),s==null&&e.removeAttribute(t),e._value=s;return}let o=!1;if(s===""||s==null){const a=typeof e[t];a==="boolean"?s=Un(s):s==null&&a==="string"?(s="",o=!0):a==="number"&&(s=0,o=!0)}try{e[t]=s}catch{}o&&e.removeAttribute(r||t)}function eu(e,t,s,i){e.addEventListener(t,s,i)}function tu(e,t,s,i){e.removeEventListener(t,s,i)}const hn=Symbol("_vei");function su(e,t,s,i,r=null){const n=e[hn]||(e[hn]={}),o=n[t];if(i&&o)o.value=i;else{const[a,l]=iu(t);if(i){const h=n[t]=ou(i,r);eu(e,a,h,l)}else o&&(tu(e,a,o,l),n[t]=void 0)}}const dn=/(?:Once|Passive|Capture)$/;function iu(e){let t;if(dn.test(e)){t={};let i;for(;i=e.match(dn);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):kt(e.slice(2)),t]}let xi=0;const ru=Promise.resolve(),nu=()=>xi||(ru.then(()=>xi=0),xi=Date.now());function ou(e,t){const s=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=s.attached)return;Qe(lu(i,s.value),t,5,[i])};return s.value=e,s.attached=nu(),s}function lu(e,t){if(H(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const pn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,au=(e,t,s,i,r,n)=>{const o=r==="svg";t==="class"?Yc(e,i,o):t==="style"?Jc(e,s,i):qs(t)?er(t)||su(e,t,s,i,n):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):cu(e,t,i,o))?(fn(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&un(e,t,i,o,n,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!fe(i))?fn(e,pt(t),i,n,t):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),un(e,t,i,o))};function cu(e,t,s,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&pn(t)&&V(s));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return pn(t)&&fe(s)?!1:t in e}const uu=we({patchProp:au},Kc);let gn;function fu(){return gn||(gn=dc(uu))}const hu=(...e)=>{const t=fu().createApp(...e),{mount:s}=t;return t.mount=i=>{const r=pu(i);if(!r)return;const n=t._component;!V(n)&&!n.render&&!n.template&&(n.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=s(r,!1,du(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function du(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function pu(e){return fe(e)?document.querySelector(e):e}function gu(e){return Hn()?(Jl(e),!0):!1}const $i=new WeakMap,mu=(...e)=>{var t;const s=e[0],i=(t=li())==null?void 0:t.proxy;if(i==null&&!bo())throw new Error("injectLocal must be called in setup");return i&&$i.has(i)&&s in $i.get(i)?$i.get(i)[s]:ns(...e)},bu=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const vu=Object.prototype.toString,_u=e=>vu.call(e)==="[object Object]",yu=()=>{};function Lo(...e){if(e.length!==1)return Ea(...e);const t=e[0];return typeof t=="function"?ti(wa(()=>({get:t,set:yu}))):hs(t)}function xu(e,t){function s(...i){return new Promise((r,n)=>{Promise.resolve(e(()=>t.apply(this,i),{fn:t,thisArg:this,args:i})).then(r).catch(n)})}return s}const Uo=e=>e();function $u(e=Uo,t={}){const{initialState:s="active"}=t,i=Lo(s==="active");function r(){i.value=!1}function n(){i.value=!0}const o=(...a)=>{i.value&&e(...a)};return{isActive:ti(i),pause:r,resume:n,eventFilter:o}}function mn(e){return e.endsWith("rem")?Number.parseFloat(e)*16:Number.parseFloat(e)}function wi(e){return Array.isArray(e)?e:[e]}function wu(e){return li()}function Su(e,t,s={}){const{eventFilter:i=Uo,...r}=s;return ht(e,xu(i,t),r)}function Au(e,t,s={}){const{eventFilter:i,initialState:r="active",...n}=s,{eventFilter:o,pause:a,resume:l,isActive:h}=$u(i,{initialState:r});return{stop:Su(e,t,{...n,eventFilter:o}),pause:a,resume:l,isActive:h}}function Vo(e,t=!0,s){wu()?ri(e,s):t?e():dr(e)}function Eu(e=!1,t={}){const{truthyValue:s=!0,falsyValue:i=!1}=t,r=ue(e),n=At(e);function o(a){if(arguments.length)return n.value=a,n.value;{const l=Xe(s);return n.value=n.value===l?Xe(i):l,n.value}}return r?o:[n,o]}function Cu(e,t,s){return ht(e,t,{...s,immediate:!0})}const bs=bu?window:void 0;function Bo(e){var t;const s=Xe(e);return(t=s==null?void 0:s.$el)!=null?t:s}function Ks(...e){const t=[],s=()=>{t.forEach(a=>a()),t.length=0},i=(a,l,h,f)=>(a.addEventListener(l,h,f),()=>a.removeEventListener(l,h,f)),r=Je(()=>{const a=wi(Xe(e[0])).filter(l=>l!=null);return a.every(l=>typeof l!="string")?a:void 0}),n=Cu(()=>{var a,l;return[(l=(a=r.value)==null?void 0:a.map(h=>Bo(h)))!=null?l:[bs].filter(h=>h!=null),wi(Xe(r.value?e[1]:e[0])),wi(at(r.value?e[2]:e[1])),Xe(r.value?e[3]:e[2])]},([a,l,h,f])=>{if(s(),!(a!=null&&a.length)||!(l!=null&&l.length)||!(h!=null&&h.length))return;const d=_u(f)?{...f}:f;t.push(...a.flatMap(g=>l.flatMap($=>h.map(R=>i(g,$,R,d)))))},{flush:"post"}),o=()=>{n(),s()};return gu(s),o}function Mu(){const e=At(!1),t=li();return t&&ri(()=>{e.value=!0},t),e}function Tu(e){const t=Mu();return Je(()=>(t.value,!!e()))}const Ru=Symbol("vueuse-ssr-width");function Ou(){const e=bo()?mu(Ru,null):null;return typeof e=="number"?e:void 0}function Pu(e,t={}){const{window:s=bs,ssrWidth:i=Ou()}=t,r=Tu(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function"),n=At(typeof i=="number"),o=At(),a=At(!1),l=h=>{a.value=h.matches};return _c(()=>{if(n.value){n.value=!r.value;const h=Xe(e).split(",");a.value=h.some(f=>{const d=f.includes("not all"),g=f.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),$=f.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let R=!!(g||$);return g&&R&&(R=i>=mn(g[1])),$&&R&&(R=i<=mn($[1])),d?!R:R});return}r.value&&(o.value=s.matchMedia(Xe(e)),a.value=o.value.matches)}),Ks(o,"change",l,{passive:!0}),Je(()=>a.value)}const Os=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ps="__vueuse_ssr_handlers__",ku=Iu();function Iu(){return Ps in Os||(Os[Ps]=Os[Ps]||{}),Os[Ps]}function Ho(e,t){return ku[e]||t}function Fu(e){return Pu("(prefers-color-scheme: dark)",e)}function Nu(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const Lu={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},bn="vueuse-storage";function Uu(e,t,s,i={}){var r;const{flush:n="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:h=!1,shallow:f,window:d=bs,eventFilter:g,onError:$=O=>{console.error(O)},initOnMounted:R}=i,F=(f?At:hs)(typeof t=="function"?t():t),q=Je(()=>Xe(e));if(!s)try{s=Ho("getDefaultStorage",()=>{var O;return(O=bs)==null?void 0:O.localStorage})()}catch(O){$(O)}if(!s)return F;const B=Xe(t),z=Nu(B),K=(r=i.serializer)!=null?r:Lu[z],{pause:T,resume:Y}=Au(F,()=>ce(F.value),{flush:n,deep:o,eventFilter:g});ht(q,()=>de(),{flush:n}),d&&a&&Vo(()=>{s instanceof Storage?Ks(d,"storage",de,{passive:!0}):Ks(d,bn,pe),R&&de()}),R||de();function he(O,se){if(d){const X={key:q.value,oldValue:O,newValue:se,storageArea:s};d.dispatchEvent(s instanceof Storage?new StorageEvent("storage",X):new CustomEvent(bn,{detail:X}))}}function ce(O){try{const se=s.getItem(q.value);if(O==null)he(se,null),s.removeItem(q.value);else{const X=K.write(O);se!==X&&(s.setItem(q.value,X),he(se,X))}}catch(se){$(se)}}function ye(O){const se=O?O.newValue:s.getItem(q.value);if(se==null)return l&&B!=null&&s.setItem(q.value,K.write(B)),B;if(!O&&h){const X=K.read(se);return typeof h=="function"?h(X,B):z==="object"&&!Array.isArray(X)?{...B,...X}:X}else return typeof se!="string"?se:K.read(se)}function de(O){if(!(O&&O.storageArea!==s)){if(O&&O.key==null){F.value=B;return}if(!(O&&O.key!==q.value)){T();try{(O==null?void 0:O.newValue)!==K.write(F.value)&&(F.value=ye(O))}catch(se){$(se)}finally{O?dr(Y):Y()}}}}function pe(O){de(O.detail)}return F}const Vu="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function Bu(e={}){const{selector:t="html",attribute:s="class",initialValue:i="auto",window:r=bs,storage:n,storageKey:o="vueuse-color-scheme",listenToStorageChanges:a=!0,storageRef:l,emitAuto:h,disableTransition:f=!0}=e,d={auto:"",light:"light",dark:"dark",...e.modes||{}},g=Fu({window:r}),$=Je(()=>g.value?"dark":"light"),R=l||(o==null?Lo(i):Uu(o,i,n,{window:r,listenToStorageChanges:a})),F=Je(()=>R.value==="auto"?$.value:R.value),q=Ho("updateHTMLAttrs",(T,Y,he)=>{const ce=typeof T=="string"?r==null?void 0:r.document.querySelector(T):Bo(T);if(!ce)return;const ye=new Set,de=new Set;let pe=null;if(Y==="class"){const se=he.split(/\s/g);Object.values(d).flatMap(X=>(X||"").split(/\s/g)).filter(Boolean).forEach(X=>{se.includes(X)?ye.add(X):de.add(X)})}else pe={key:Y,value:he};if(ye.size===0&&de.size===0&&pe===null)return;let O;f&&(O=r.document.createElement("style"),O.appendChild(document.createTextNode(Vu)),r.document.head.appendChild(O));for(const se of ye)ce.classList.add(se);for(const se of de)ce.classList.remove(se);pe&&ce.setAttribute(pe.key,pe.value),f&&(r.getComputedStyle(O).opacity,document.head.removeChild(O))});function B(T){var Y;q(t,s,(Y=d[T])!=null?Y:T)}function z(T){e.onChanged?e.onChanged(T,B):B(T)}ht(F,z,{flush:"post",immediate:!0}),Vo(()=>z(F.value));const K=Je({get(){return h?R.value:F.value},set(T){R.value=T}});return Object.assign(K,{store:R,system:$,state:F})}function Hu(e={}){const{valueDark:t="dark",valueLight:s=""}=e,i=Bu({...e,onChanged:(o,a)=>{var l;e.onChanged?(l=e.onChanged)==null||l.call(e,o==="dark",a,o):a(o)},modes:{dark:t,light:s}}),r=Je(()=>i.system.value);return Je({get(){return i.value==="dark"},set(o){const a=o?"dark":"light";r.value===a?i.value="auto":i.value=a}})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fs=globalThis,yr=Fs.ShadowRoot&&(Fs.ShadyCSS===void 0||Fs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,xr=Symbol(),vn=new WeakMap;let Do=class{constructor(t,s,i){if(this._$cssResult$=!0,i!==xr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const s=this.t;if(yr&&t===void 0){const i=s!==void 0&&s.length===1;i&&(t=vn.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&vn.set(s,t))}return t}toString(){return this.cssText}};const Du=e=>new Do(typeof e=="string"?e:e+"",void 0,xr),Ue=(e,...t)=>{const s=e.length===1?e[0]:t.reduce((i,r,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[n+1],e[0]);return new Do(s,e,xr)},ju=(e,t)=>{if(yr)e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of t){const i=document.createElement("style"),r=Fs.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=s.cssText,e.appendChild(i)}},_n=yr?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return Du(s)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:zu,defineProperty:Wu,getOwnPropertyDescriptor:Ku,getOwnPropertyNames:Gu,getOwnPropertySymbols:Yu,getPrototypeOf:Zu}=Object,dt=globalThis,yn=dt.trustedTypes,qu=yn?yn.emptyScript:"",Si=dt.reactiveElementPolyfillSupport,ls=(e,t)=>e,Di={toAttribute(e,t){switch(t){case Boolean:e=e?qu:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},jo=(e,t)=>!zu(e,t),xn={attribute:!0,type:String,converter:Di,reflect:!1,hasChanged:jo};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),dt.litPropertyMetadata??(dt.litPropertyMetadata=new WeakMap);class Ut extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=xn){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);r!==void 0&&Wu(this.prototype,t,r)}}static getPropertyDescriptor(t,s,i){const{get:r,set:n}=Ku(this.prototype,t)??{get(){return this[s]},set(o){this[s]=o}};return{get(){return r==null?void 0:r.call(this)},set(o){const a=r==null?void 0:r.call(this);n.call(this,o),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??xn}static _$Ei(){if(this.hasOwnProperty(ls("elementProperties")))return;const t=Zu(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ls("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ls("properties"))){const s=this.properties,i=[...Gu(s),...Yu(s)];for(const r of i)this.createProperty(r,s[r])}const t=this[Symbol.metadata];if(t!==null){const s=litPropertyMetadata.get(t);if(s!==void 0)for(const[i,r]of s)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[s,i]of this.elementProperties){const r=this._$Eu(s,i);r!==void 0&&this._$Eh.set(r,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)s.unshift(_n(r))}else t!==void 0&&s.push(_n(t));return s}static _$Eu(t,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(s=>s(this))}addController(t){var s;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var s;(s=this._$EO)==null||s.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ju(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostConnected)==null?void 0:i.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostDisconnected)==null?void 0:i.call(s)})}attributeChangedCallback(t,s,i){this._$AK(t,i)}_$EC(t,s){var n;const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(r!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:Di).toAttribute(s,i.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,s){var n;const i=this.constructor,r=i._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const o=i.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:Di;this._$Em=r,this[r]=a.fromAttribute(s,o.type),this._$Em=null}}requestUpdate(t,s,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??jo)(this[t],s))return;this.P(t,s,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,o]of r)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(i=this._$EO)==null||i.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(s)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(s)}willUpdate(t){}_$AE(t){var s;(s=this._$EO)==null||s.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(s=>this._$EC(s,this[s]))),this._$EU()}updated(t){}firstUpdated(t){}}Ut.elementStyles=[],Ut.shadowRootOptions={mode:"open"},Ut[ls("elementProperties")]=new Map,Ut[ls("finalized")]=new Map,Si==null||Si({ReactiveElement:Ut}),(dt.reactiveElementVersions??(dt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const as=globalThis,Gs=as.trustedTypes,$n=Gs?Gs.createPolicy("lit-html",{createHTML:e=>e}):void 0,zo="$lit$",ut=`lit$${Math.random().toFixed(9).slice(2)}$`,Wo="?"+ut,Xu=`<${Wo}>`,Rt=document,vs=()=>Rt.createComment(""),_s=e=>e===null||typeof e!="object"&&typeof e!="function",$r=Array.isArray,Ju=e=>$r(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Ai=`[ 	
\f\r]`,Zt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,wn=/-->/g,Sn=/>/g,xt=RegExp(`>|${Ai}(?:([^\\s"'>=/]+)(${Ai}*=${Ai}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),An=/'/g,En=/"/g,Ko=/^(?:script|style|textarea|title)$/i,Qu=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),Q=Qu(1),Ot=Symbol.for("lit-noChange"),ae=Symbol.for("lit-nothing"),Cn=new WeakMap,wt=Rt.createTreeWalker(Rt,129);function Go(e,t){if(!$r(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return $n!==void 0?$n.createHTML(t):t}const ef=(e,t)=>{const s=e.length-1,i=[];let r,n=t===2?"<svg>":t===3?"<math>":"",o=Zt;for(let a=0;a<s;a++){const l=e[a];let h,f,d=-1,g=0;for(;g<l.length&&(o.lastIndex=g,f=o.exec(l),f!==null);)g=o.lastIndex,o===Zt?f[1]==="!--"?o=wn:f[1]!==void 0?o=Sn:f[2]!==void 0?(Ko.test(f[2])&&(r=RegExp("</"+f[2],"g")),o=xt):f[3]!==void 0&&(o=xt):o===xt?f[0]===">"?(o=r??Zt,d=-1):f[1]===void 0?d=-2:(d=o.lastIndex-f[2].length,h=f[1],o=f[3]===void 0?xt:f[3]==='"'?En:An):o===En||o===An?o=xt:o===wn||o===Sn?o=Zt:(o=xt,r=void 0);const $=o===xt&&e[a+1].startsWith("/>")?" ":"";n+=o===Zt?l+Xu:d>=0?(i.push(h),l.slice(0,d)+zo+l.slice(d)+ut+$):l+ut+(d===-2?a:$)}return[Go(e,n+(e[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class ys{constructor({strings:t,_$litType$:s},i){let r;this.parts=[];let n=0,o=0;const a=t.length-1,l=this.parts,[h,f]=ef(t,s);if(this.el=ys.createElement(h,i),wt.currentNode=this.el.content,s===2||s===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=wt.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(zo)){const g=f[o++],$=r.getAttribute(d).split(ut),R=/([.?@])?(.*)/.exec(g);l.push({type:1,index:n,name:R[2],strings:$,ctor:R[1]==="."?sf:R[1]==="?"?rf:R[1]==="@"?nf:ai}),r.removeAttribute(d)}else d.startsWith(ut)&&(l.push({type:6,index:n}),r.removeAttribute(d));if(Ko.test(r.tagName)){const d=r.textContent.split(ut),g=d.length-1;if(g>0){r.textContent=Gs?Gs.emptyScript:"";for(let $=0;$<g;$++)r.append(d[$],vs()),wt.nextNode(),l.push({type:2,index:++n});r.append(d[g],vs())}}}else if(r.nodeType===8)if(r.data===Wo)l.push({type:2,index:n});else{let d=-1;for(;(d=r.data.indexOf(ut,d+1))!==-1;)l.push({type:7,index:n}),d+=ut.length-1}n++}}static createElement(t,s){const i=Rt.createElement("template");return i.innerHTML=t,i}}function jt(e,t,s=e,i){var o,a;if(t===Ot)return t;let r=i!==void 0?(o=s._$Co)==null?void 0:o[i]:s._$Cl;const n=_s(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),n===void 0?r=void 0:(r=new n(e),r._$AT(e,s,i)),i!==void 0?(s._$Co??(s._$Co=[]))[i]=r:s._$Cl=r),r!==void 0&&(t=jt(e,r._$AS(e,t.values),r,i)),t}class tf{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:i}=this._$AD,r=((t==null?void 0:t.creationScope)??Rt).importNode(s,!0);wt.currentNode=r;let n=wt.nextNode(),o=0,a=0,l=i[0];for(;l!==void 0;){if(o===l.index){let h;l.type===2?h=new As(n,n.nextSibling,this,t):l.type===1?h=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(h=new of(n,this,t)),this._$AV.push(h),l=i[++a]}o!==(l==null?void 0:l.index)&&(n=wt.nextNode(),o++)}return wt.currentNode=Rt,r}p(t){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,s),s+=i.strings.length-2):i._$AI(t[s])),s++}}class As{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,s,i,r){this.type=2,this._$AH=ae,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=jt(this,t,s),_s(t)?t===ae||t==null||t===""?(this._$AH!==ae&&this._$AR(),this._$AH=ae):t!==this._$AH&&t!==Ot&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ju(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==ae&&_s(this._$AH)?this._$AA.nextSibling.data=t:this.T(Rt.createTextNode(t)),this._$AH=t}$(t){var n;const{values:s,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=ys.createElement(Go(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(s);else{const o=new tf(r,this),a=o.u(this.options);o.p(s),this.T(a),this._$AH=o}}_$AC(t){let s=Cn.get(t.strings);return s===void 0&&Cn.set(t.strings,s=new ys(t)),s}k(t){$r(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,r=0;for(const n of t)r===s.length?s.push(i=new As(this.O(vs()),this.O(vs()),this,this.options)):i=s[r],i._$AI(n),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(t=this._$AA.nextSibling,s){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,s);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var s;this._$AM===void 0&&(this._$Cv=t,(s=this._$AP)==null||s.call(this,t))}}class ai{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,i,r,n){this.type=1,this._$AH=ae,this._$AN=void 0,this.element=t,this.name=s,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ae}_$AI(t,s=this,i,r){const n=this.strings;let o=!1;if(n===void 0)t=jt(this,t,s,0),o=!_s(t)||t!==this._$AH&&t!==Ot,o&&(this._$AH=t);else{const a=t;let l,h;for(t=n[0],l=0;l<n.length-1;l++)h=jt(this,a[i+l],s,l),h===Ot&&(h=this._$AH[l]),o||(o=!_s(h)||h!==this._$AH[l]),h===ae?t=ae:t!==ae&&(t+=(h??"")+n[l+1]),this._$AH[l]=h}o&&!r&&this.j(t)}j(t){t===ae?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class sf extends ai{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ae?void 0:t}}class rf extends ai{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ae)}}class nf extends ai{constructor(t,s,i,r,n){super(t,s,i,r,n),this.type=5}_$AI(t,s=this){if((t=jt(this,t,s,0)??ae)===Ot)return;const i=this._$AH,r=t===ae&&i!==ae||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==ae&&(i===ae||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,t):this._$AH.handleEvent(t)}}class of{constructor(t,s,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){jt(this,t)}}const Ei=as.litHtmlPolyfillSupport;Ei==null||Ei(ys,As),(as.litHtmlVersions??(as.litHtmlVersions=[])).push("3.2.1");const lf=(e,t,s)=>{const i=(s==null?void 0:s.renderBefore)??t;let r=i._$litPart$;if(r===void 0){const n=(s==null?void 0:s.renderBefore)??null;i._$litPart$=r=new As(t.insertBefore(vs(),n),n,void 0,s??{})}return r._$AI(e),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let $e=class extends Ut{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const t=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=t.firstChild),t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=lf(s,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Ot}};var On;$e._$litElement$=!0,$e.finalized=!0,(On=globalThis.litElementHydrateSupport)==null||On.call(globalThis,{LitElement:$e});const Ci=globalThis.litElementPolyfillSupport;Ci==null||Ci({LitElement:$e});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const af=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yo={ATTRIBUTE:1,CHILD:2},Zo=e=>(...t)=>({_$litDirective$:e,values:t});let qo=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,i){this._$Ct=t,this._$AM=s,this._$Ci=i}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cs=(e,t)=>{var i;const s=e._$AN;if(s===void 0)return!1;for(const r of s)(i=r._$AO)==null||i.call(r,t,!1),cs(r,t);return!0},Ys=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while((s==null?void 0:s.size)===0)},Xo=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),ff(t)}};function cf(e){this._$AN!==void 0?(Ys(this),this._$AM=e,Xo(this)):this._$AM=e}function uf(e,t=!1,s=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(i))for(let n=s;n<i.length;n++)cs(i[n],!1),Ys(i[n]);else i!=null&&(cs(i,!1),Ys(i));else cs(this,e)}const ff=e=>{e.type==Yo.CHILD&&(e._$AP??(e._$AP=uf),e._$AQ??(e._$AQ=cf))};class hf extends qo{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,i){super._$AT(t,s,i),Xo(this),this.isConnected=t._$AU}_$AO(t,s=!0){var i,r;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)==null||i.call(this):(r=this.disconnected)==null||r.call(this)),s&&(cs(this,t),Ys(this))}setValue(t){if(af(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be=()=>new df;class df{}const Mi=new WeakMap,ve=Zo(class extends hf{render(e){return ae}update(e,[t]){var i;const s=t!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=t,this.ht=(i=e.options)==null?void 0:i.host,this.rt(this.ct=e.element)),ae}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let s=Mi.get(t);s===void 0&&(s=new WeakMap,Mi.set(t,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=Mi.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Mn={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};var Tn={red:0,orange:60,yellow:120,green:180,blue:240,purple:300};function pf(e){var f,d;var t,s=[],i=1,r;if(typeof e=="number")return{space:"rgb",values:[e>>>16,(e&65280)>>>8,e&255],alpha:1};if(typeof e=="number")return{space:"rgb",values:[e>>>16,(e&65280)>>>8,e&255],alpha:1};if(e=String(e).toLowerCase(),Mn[e])s=Mn[e].slice(),r="rgb";else if(e==="transparent")i=0,r="rgb",s=[0,0,0];else if(e[0]==="#"){var n=e.slice(1),o=n.length,a=o<=4;i=1,a?(s=[parseInt(n[0]+n[0],16),parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16)],o===4&&(i=parseInt(n[3]+n[3],16)/255)):(s=[parseInt(n[0]+n[1],16),parseInt(n[2]+n[3],16),parseInt(n[4]+n[5],16)],o===8&&(i=parseInt(n[6]+n[7],16)/255)),s[0]||(s[0]=0),s[1]||(s[1]=0),s[2]||(s[2]=0),r="rgb"}else if(t=/^((?:rgba?|hs[lvb]a?|hwba?|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms|oklch|oklab|color))\s*\(([^\)]*)\)/.exec(e)){var l=t[1];r=l.replace(/a$/,"");var h=r==="cmyk"?4:r==="gray"?1:3;s=t[2].trim().split(/\s*[,\/]\s*|\s+/),r==="color"&&(r=s.shift()),s=s.map(function(g,$){if(g[g.length-1]==="%")return g=parseFloat(g)/100,$===3?g:r==="rgb"?g*255:r[0]==="h"||r[0]==="l"&&!$?g*100:r==="lab"?g*125:r==="lch"?$<2?g*150:g*360:r[0]==="o"&&!$?g:r==="oklab"?g*.4:r==="oklch"?$<2?g*.4:g*360:g;if(r[$]==="h"||$===2&&r[r.length-1]==="h"){if(Tn[g]!==void 0)return Tn[g];if(g.endsWith("deg"))return parseFloat(g);if(g.endsWith("turn"))return parseFloat(g)*360;if(g.endsWith("grad"))return parseFloat(g)*360/400;if(g.endsWith("rad"))return parseFloat(g)*180/Math.PI}return g==="none"?0:parseFloat(g)}),i=s.length>h?s.pop():1}else/[0-9](?:\s|\/|,)/.test(e)&&(s=e.match(/([0-9]+)/g).map(function(g){return parseFloat(g)}),r=((d=(f=e.match(/([a-z])/ig))==null?void 0:f.join(""))==null?void 0:d.toLowerCase())||"rgb");return{space:r,values:s,alpha:i}}const xs={name:"rgb",min:[0,0,0],max:[255,255,255],channel:["red","green","blue"],alias:["RGB"]};var Mt={name:"hsl",min:[0,0,0],max:[360,100,100],channel:["hue","saturation","lightness"],alias:["HSL"],rgb:function(e){var t=e[0]/360,s=e[1]/100,i=e[2]/100,r,n,o,a,l,h=0;if(s===0)return l=i*255,[l,l,l];for(n=i<.5?i*(1+s):i+s-i*s,r=2*i-n,a=[0,0,0];h<3;)o=t+1/3*-(h-1),o<0?o++:o>1&&o--,l=6*o<1?r+(n-r)*6*o:2*o<1?n:3*o<2?r+(n-r)*(2/3-o)*6:r,a[h++]=l*255;return a}};xs.hsl=function(e){var t=e[0]/255,s=e[1]/255,i=e[2]/255,r=Math.min(t,s,i),n=Math.max(t,s,i),o=n-r,a,l,h;return n===r?a=0:t===n?a=(s-i)/o:s===n?a=2+(i-t)/o:i===n&&(a=4+(t-s)/o),a=Math.min(a*60,360),a<0&&(a+=360),h=(r+n)/2,n===r?l=0:h<=.5?l=o/(n+r):l=o/(2-n-r),[a,l*100,h*100]};function ji(e){Array.isArray(e)&&e.raw&&(e=String.raw(...arguments)),e instanceof Number&&(e=+e);var t,s=pf(e);if(!s.space)return[];const i=s.space[0]==="h"?Mt.min:xs.min,r=s.space[0]==="h"?Mt.max:xs.max;return t=Array(3),t[0]=Math.min(Math.max(s.values[0],i[0]),r[0]),t[1]=Math.min(Math.max(s.values[1],i[1]),r[1]),t[2]=Math.min(Math.max(s.values[2],i[2]),r[2]),s.space[0]==="h"&&(t=Mt.rgb(t)),t.push(Math.min(Math.max(s.alpha,0),1)),t}function gf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xt={exports:{}},mf=Xt.exports,Rn;function bf(){return Rn||(Rn=1,function(e,t){(function(s,i){i(t)})(mf,function(s){class n{constructor(...x){Cs(this,"inGamut",({epsilon:x=0}={})=>o(this.lRGB,x));Cs(this,"toGamut",({method:x="map"}={})=>{switch(x.toLowerCase()){case"clip":return new n(this.sRGB.map(w=>O.clamp(w,0,255)));case"map":return l(this);default:throw new TypeError(`Unknown method: '${x}'`)}});Cs(this,"toString",({format:x="hex",method:w="map"}={})=>{let L;if(this.inGamut())L=this.sRGB;else switch(w.toLowerCase()){case"clip":L=this.sRGB.map(G=>O.clamp(G,0,255));break;case"map":L=l(this).sRGB;break;default:throw new TypeError(`Unknown method: '${w}'`)}switch(x.toLowerCase()){case"hex":return`#${L.map(G=>G.toString(16).padStart(2,"0")).join("").toUpperCase()}`;case"rgb":return`rgb(${L.join(", ")})`;default:throw new TypeError(`Unknown format: '${x}'`)}});x.length===1&&(typeof x[0]=="string"&&(this.sRGB=se(x[0]).slice(0,3),this.lRGB=q(this.sRGB),this.R=pe(this.lRGB),this.XYZ=de(this.R)),Array.isArray(x[0])&&(x[0].length===38?(this.R=x[0],this.XYZ=de(this.R),this.lRGB=z(this.XYZ),this.sRGB=B(this.lRGB)):(this.sRGB=x[0],this.lRGB=q(this.sRGB),this.R=pe(this.lRGB),this.XYZ=de(this.R))))}get OKLab(){return this._OKLab??(this._OKLab=Y(this.XYZ))}get OKLCh(){return this._OKLCh??(this._OKLCh=ce(this.OKLab))}get KS(){return this._KS??(this._KS=this.R.map(x=>h(x)))}get luminance(){return this._luminance??(this._luminance=Math.max(Number.EPSILON,this.XYZ[1]))}get tintingStrength(){return this._tintingStrength??(this._tintingStrength=1)}set tintingStrength(x){this._tintingStrength=x}}const o=(m,{epsilon:x=0}={})=>m.every(w=>w>=-x&&w<=1+x),a=(m,x)=>{let[w,L,G]=m,[ee,ie,Ne]=x;return((w-ee)**2+(L-ie)**2+(G-Ne)**2)**.5},l=(m,{jnd:x=.03,e:w=1e-4}={})=>{let L=m.OKLCh[0];if(L>=1)return new n([255,255,255]);if(L<=0)return new n([0,0,0]);if(o(m.lRGB))return m;let G=m.OKLCh[2],ee=0,ie=m.OKLCh[1],Ne=!0,De=m.lRGB,ge=T(De.map(Ve=>O.clamp(Ve))),je=a(ge,T(De));if(je<x)return new n(B(z(he(ge))));for(;ie-ee>w;){const Ve=(ee+ie)/2;let Ft=ye([L,Ve,G]),Es=he(Ft);if(De=z(Es),Ne&&o(De))ee=Ve;else if(ge=T(De.map(vt=>O.clamp(vt))),je=a(ge,Ft),je<x){if(x-je<w)break;Ne=!1,ee=Ve}else ie=Ve}return new n(B(z(he(ge))))},h=m=>(1-m)**2/(2*m),f=m=>1+m-(m**2+2*m)**.5,d=(...m)=>{let x=new Array(38);for(let w=0;w<38;w++){let L=0,G=0;for(let[ee,ie]of m){let Ne=ie**2*ee.tintingStrength**2*ee.luminance;G+=Ne,L+=ee.KS[w]*Ne}x[w]=f(L/G)}return new n(x)},g=(m,x,w)=>{let L=new Array(w);for(let G=0;G<w;G++)L[G]=d([m,w-1-G],[x,G]);return L},$=(m,...x)=>{let w=null,L=null;for(const[ee,ie]of x)ie<=m&&(!w||ie>w[1])&&(w=[ee,ie]),ie>=m&&(!L||ie<L[1])&&(L=[ee,ie]);if(!w)return L[0];if(!L||w[1]===L[1])return w[0];const G=(m-w[1])/(L[1]-w[1]);return d([w[0],1-G],[L[0],G])},R=m=>m>.04045?((m+.055)/1.055)**2.4:m/12.92,F=m=>m>.0031308?1.055*m**(1/2.4)-.055:m*12.92,q=m=>m.map(x=>R(x/255)),B=m=>m.map(x=>Math.round(F(x)*255)),z=m=>O.mulMatVec(et.XYZ_RGB,m),K=m=>O.mulMatVec(et.RGB_XYZ,m),T=m=>Y(K(m)),Y=m=>{let x=O.mulMatVec(et.XYZ_LMS,m).map(w=>Math.cbrt(w));return O.mulMatVec(et.LMS_LAB,x)},he=m=>{let x=O.mulMatVec(et.LAB_LMS,m).map(w=>w**3);return O.mulMatVec(et.LMS_XYZ,x)},ce=m=>{let[x,w,L]=m;const G=(w*w+L*L)**.5,ee=Math.atan2(L,w)*180/Math.PI;return[x,G,ee>=0?ee:ee+360]},ye=m=>{let[x,w,L]=m,G=w*Math.cos(L*Math.PI/180),ee=w*Math.sin(L*Math.PI/180);return[x,G,ee]},de=m=>O.mulMatVec(Wt.CMF,m),pe=m=>{let x=Math.min(...m);m=[m[0]-x,m[1]-x,m[2]-x];let w=Math.min(m[1],m[2]),L=Math.min(m[0],m[2]),G=Math.min(m[0],m[1]),ee=Math.max(0,Math.min(m[0]-m[2],m[0]-m[1])),ie=Math.max(0,Math.min(m[1]-m[2],m[1]-m[0])),Ne=Math.max(0,Math.min(m[2]-m[1],m[2]-m[0]));const De=new Array(38);for(let ge=0;ge<38;ge++)De[ge]=Math.max(Number.EPSILON,x*X.W[ge]+w*X.C[ge]+L*X.M[ge]+G*X.Y[ge]+ee*X.R[ge]+ie*X.G[ge]+Ne*X.B[ge]);return De},O={lerp:(m,x,w)=>m+(x-m)*w,clamp:(m,x=0,w=1)=>Math.min(Math.max(m,x),w),dot:(m,x)=>m.reduce((w,L,G)=>w+L*x[G],0),mulMatVec:(m,x)=>m.map(w=>O.dot(w,x))},se=m=>m[0]==="#"?(m=m.length===4?m.replace(/./g,x=>x+x).slice(1):m.slice(1),[parseInt(m.substring(0,2),16),parseInt(m.substring(2,4),16),parseInt(m.substring(4,6),16),m.length===8?parseInt(m.substring(6,8),16)/255:1]):m.startsWith("rgb")?m.slice(m.indexOf("(")+1,-1).split(",").map((x,w)=>w<3&&x.includes("%")?Math.round(parseFloat(x)*2.55):parseFloat(x)):NaN,X=Object.freeze({W:[1.00116072718764,1.00116065159728,1.00116031922747,1.00115867270789,1.00115259844552,1.00113252528998,1.00108500663327,1.00099687889453,1.00086525152274,1.0006962900094,1.00050496114888,1.00030808187992,1.00011966602013,.999952765968407,.999821836899297,.999738609557593,.999709551639612,.999731930210627,.999799436346195,.999900330316671,1.00002040652611,1.00014478793658,1.00025997903412,1.00035579697089,1.00042753780269,1.00047623344888,1.00050720967508,1.00052519156373,1.00053509606896,1.00054022097482,1.00054272816784,1.00054389569087,1.00054448212151,1.00054476959992,1.00054489887762,1.00054496254689,1.00054498927058,1.000544996993],C:[.970585001322962,.970592498143425,.970625348729891,.970786806119017,.971368673228248,.973163230621252,.976740223158765,.981587605491377,.986280265652949,.989949147689134,.99249270153842,.994145680405256,.995183975033212,.995756750110818,.99591281828671,.995606157834528,.994597600961854,.99221571549237,.986236452783249,.967943337264541,.891285004244943,.536202477862053,.154108119001878,.0574575093228929,.0315349873107007,.0222633920086335,.0182022841492439,.016299055973264,.0153656239334613,.0149111568733976,.0146954339898235,.0145964146717719,.0145470156699655,.0145228771899495,.0145120341118965,.0145066940939832,.0145044507314479,.0145038009464639],M:[.990673557319988,.990671524961979,.990662582353421,.990618107644795,.99045148087871,.989871081400204,.98828660875964,.984290692797504,.973934905625306,.941817838460145,.817390326195156,.432472805065729,.13845397825887,.0537347216940033,.0292174996673231,.021313651750859,.0201349530181136,.0241323096280662,.0372236145223627,.0760506552706601,.205375471942399,.541268903460439,.815841685086486,.912817704123976,.946339830166962,.959927696331991,.966260595230312,.969325970058424,.970854536721399,.971605066528128,.971962769757392,.972127272274509,.972209417745812,.972249577678424,.972267621998742,.97227650946215,.972280243306874,.97228132482656],Y:[.0210523371789306,.0210564627517414,.0210746178695038,.0211649058448753,.0215027957272504,.0226738799041561,.0258235649693629,.0334879385639851,.0519069663740307,.100749014833473,.239129899706847,.534804312272748,.79780757864303,.911449894067384,.953797963004507,.971241615465429,.979303123807588,.983380119507575,.985461246567755,.986435046976605,.986738250670141,.986617882445032,.986277776758643,.985860592444056,.98547492767621,.985176934765558,.984971574014181,.984846303415712,.984775351811199,.984738066625265,.984719648311765,.984711023391939,.984706683300676,.984704554393091,.98470359630937,.984703124077552,.98470292561509,.984702868122795],R:[.0315605737777207,.0315520718330149,.0315148215513658,.0313318044982702,.0306729857725527,.0286480476989607,.0246450407045709,.0192960753663651,.0142066612220556,.0102942608878609,.0076191460521811,.005898041083542,.0048233247781713,.0042298748350633,.0040599171299341,.0043533695594676,.0053434425970201,.0076917201010463,.0135969795736536,.0316975442661115,.107861196355249,.463812603168704,.847055405272011,.943185409393918,.968862150696558,.978030667473603,.982043643854306,.983923623718707,.984845484154382,.985294275814596,.985507295219825,.985605071539837,.985653849933578,.985677685033883,.985688391806122,.985693664690031,.985695879848205,.985696521463762],G:[.0095560747554212,.0095581580120851,.0095673245444588,.0096129126297349,.0097837090401843,.010378622705871,.0120026452378567,.0160977721473922,.026706190223168,.0595555440185881,.186039826532826,.570579820116159,.861467768400292,.945879089767658,.970465486474305,.97841363028445,.979589031411224,.975533536908632,.962288755397813,.92312157451312,.793434018943111,.459270135902429,.185574103666303,.0881774959955372,.05436302287667,.0406288447060719,.034221520431697,.0311185790956966,.0295708898336134,.0288108739348928,.0284486271324597,.0282820301724731,.0281988376490237,.0281581655342037,.0281398910216386,.0281308901665811,.0281271086805816,.0281260133612096],B:[.979404752502014,.97940070684313,.979382903470261,.979294364945594,.97896301460857,.977814466694043,.974724321133836,.967198482343973,.949079657530575,.900850128940977,.76315044546224,.465922171649319,.201263280451005,.0877524413419623,.0457176793291679,.0284706050521843,.020527176756985,.0165302792310211,.0145135107212858,.0136003508637687,.0133604258769571,.013548894314568,.0139594356366992,.014443425575357,.0148854440621406,.0152254296999746,.0154592848180209,.0156018026485961,.0156824871281936,.0157248764360615,.0157458108784121,.0157556123350225,.0157605443964911,.0157629637515278,.0157640525629106,.015764589232951,.0157648147772649,.0157648801149616]}),Wt=Object.freeze({CMF:[[646919989576e-16,.0002194098998132,.0011205743509343,.0037666134117111,.011880553603799,.0232864424191771,.0345594181969747,.0372237901162006,.0324183761091486,.021233205609381,.0104909907685421,.0032958375797931,.0005070351633801,.0009486742057141,.0062737180998318,.0168646241897775,.028689649025981,.0426748124691731,.0562547481311377,.0694703972677158,.0830531516998291,.0861260963002257,.0904661376847769,.0850038650591277,.0709066691074488,.0506288916373645,.035473961885264,.0214682102597065,.0125164567619117,.0068045816390165,.0034645657946526,.0014976097506959,.000769700480928,.0004073680581315,.0001690104031614,952245150365e-16,490309872958e-16,199961492222e-16],[1844289444e-15,62053235865e-16,310096046799e-16,.0001047483849269,.0003536405299538,.0009514714056444,.0022822631748318,.004207329043473,.0066887983719014,.0098883960193565,.0152494514496311,.0214183109449723,.0334229301575068,.0513100134918512,.070402083939949,.0878387072603517,.0942490536184085,.0979566702718931,.0941521856862608,.0867810237486753,.0788565338632013,.0635267026203555,.05374141675682,.042646064357412,.0316173492792708,.020885205921391,.0138601101360152,.0081026402038399,.004630102258803,.0024913800051319,.0012593033677378,.000541646522168,.0002779528920067,.0001471080673854,610327472927e-16,343873229523e-16,177059860053e-16,7220974913e-15],[.000305017147638,.0010368066663574,.0053131363323992,.0179543925899536,.0570775815345485,.113651618936287,.17335872618355,.196206575558657,.186082370706296,.139950475383207,.0891745294268649,.0478962113517075,.0281456253957952,.0161376622950514,.0077591019215214,.0042961483736618,.0020055092122156,.0008614711098802,.0003690387177652,.0001914287288574,.0001495555858975,923109285104e-16,681349182337e-16,288263655696e-16,157671820553e-16,39406041027e-16,1584012587e-15,0,0,0,0,0,0,0,0,0,0,0]]}),et=Object.freeze({RGB_XYZ:[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],XYZ_RGB:[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]],XYZ_LMS:[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],LMS_XYZ:[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],LMS_LAB:[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],LAB_LMS:[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]]});s.Color=n,s.mix=d,s.palette=g,s.gradient=$})}(Xt,Xt.exports)),Xt.exports}var vf=bf();const Ti=gf(vf);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jo="important",_f=" !"+Jo,wr=Zo(class extends qo{constructor(e){var t;if(super(e),e.type!==Yo.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,s)=>{const i=e[s];return i==null?t:t+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:s}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?s.removeProperty(i):s[i]=null);for(const i in t){const r=t[i];if(r!=null){this.ft.add(i);const n=typeof r=="string"&&r.endsWith(_f);i.includes("-")||n?s.setProperty(i,n?r.slice(0,-11):r,n?Jo:""):s[i]=r}}return Ot}});var yf=Object.defineProperty,Qo=e=>{throw TypeError(e)},xf=(e,t,s)=>t in e?yf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,D=(e,t,s)=>xf(e,typeof t!="symbol"?t+"":t,s),el=(e,t,s)=>t.has(e)||Qo("Cannot "+s),N=(e,t,s)=>(el(e,t,"read from private field"),s?s.call(e):t.get(e)),Pt=(e,t,s)=>t.has(e)?Qo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),k=(e,t,s)=>(el(e,t,"access private method"),s),Ns,tl,sl,Ae,ci,il,rl,nl,ol,ll,$s,al,Zs,cl,ul,zi,Ls,fl,hl,me,dl,pl,gl,Sr,ml,Ar,bl,vl,_l,Er,yl,Wi,M,Cr,Ie,Re,ui,xl,$l,wl,Sl,Al,El,Jt,Cl,Ki,Gi,Yi,Zi,qi,Xi,Ml,Tl,Rl,Ol,Pl,kl,Il,Fl,Nl;class Mr extends $e{constructor(){super(),D(this,"rootEl",be())}render(){return Q`
      <div ${ve(this.rootEl)} class="body">
        ${this.label?Q` <span class="label" part="label">${this.label}</span>`:Q``}
        <div class="content" part="content">
          <slot></slot>
        </div>
      </div>
    `}}D(Mr,"properties",{label:{type:String}});D(Mr,"styles",Ue`
    :host {
      --background-color: light-dark(
        hsl(0 100 100 / 0.2),
        hsl(0 100 100 / 0.1)
      );
      --color: light-dark(#303030, #b0b0b0);
      --size: 16px;
      --direction: column;
    }

    .body {
      align-items: stretch;
      display: flex;
      flex-direction: column;
      gap: 4px;
      font-size: 10px;
      background-color: var(--background-color);
      padding: 4px;
      border-radius: 4px;
      flex: 1 1 auto;
    }

    .label {
      color: var(--color);
      letter-spacing: 0.25pt;
      text-transform: uppercase;
    }

    .content {
      align-items: center;
      display: flex;
      flex-direction: var(--direction);
      gap: 4px;
      justify-content: stretch;
    }
  `);class Tr extends $e{constructor(){super(),D(this,"rootEl",be())}render(){return Q`
      <div ${ve(this.rootEl)} class="body">
        <slot></slot>
      </div>
    `}}D(Tr,"properties",{});D(Tr,"styles",Ue`
    :host {
      --size: 16px;
      --color: light-dark(black, white);

      display: inline-flex;
    }

    .body {
      align-items: stretch;
      display: inline-flex;
      height: var(--size);
      justify-content: stretch;
      width: var(--size);
      color: var(--color);
    }
  `);class Rr extends $e{constructor(){super(),D(this,"rootEl",be()),D(this,"feedBackEl",be()),this.disabled=!1,this.feedback=!1}showFeedBack(t,s=1e3){if(!this.feedback){console.warn("Please enable the feedback attribute.");return}const{value:i}=this.feedBackEl;i.innerHTML=t,i.setAttribute("duration",s),i.setAttribute("show","")}render(){return Q`
      <button ${ve(this.rootEl)} class="body" ?disabled=${this.disabled}>
        ${this.feedback?Q` <rgb-color-mixer-ui-tool-tip
              ${ve(this.feedBackEl)}
            ></rgb-color-mixer-ui-tool-tip>`:Q``}
        <rgb-color-mixer-ui-icon>
          <slot></slot>
        </rgb-color-mixer-ui-icon>
      </button>
    `}}D(Rr,"properties",{disabled:{type:Boolean},feedback:{type:Boolean}});D(Rr,"styles",Ue`
    :host {
      --size: 24px;
      --color: light-dark(#202020, #f0f0f0);

      display: inline-flex;
    }

    .body {
      align-items: center;
      border-radius: 2px;
      border: none;
      box-shadow: inset 1px 1px 1px 0 hsl(0 100 100 / 0.2),
        inset -1px -1px 1px 0 hsl(0 0 0 / 0.1);
      display: inline-flex;
      height: var(--size);
      justify-content: center;
      margin: 0;
      padding: 0;
      position: relative;
      width: var(--size);
      color: var(--color);

      &:active {
        transform: translate(1px, 1px);
      }

      &[disabled] {
        color-mixer-ui-icon {
          opacity: 0.5;
        }
      }
    }
  `);function Us(e,t,s){return Math.min(Math.max(e,t),s)}async function $f(e){const s={["text/plain"]:e},i=new ClipboardItem(s);await navigator.clipboard.write([i])}function zt(e){const[t,s,i]=e;return[t/255,s/255,i/255]}function Ji(e,t="rgb"){const s=Math.round(e[0]*255),i=Math.round(e[1]*255),r=Math.round(e[2]*255);return t==="hex"?"#"+(r|i<<8|s<<16|1<<24).toString(16).slice(1):`rgb(${s},${i},${r})`}function It(e,t,s={bubbles:!0,composed:!0,cancelable:!0}){return new CustomEvent(e,{detail:window.structuredClone(t),...s})}function wf(e){const t=ji(e);if(!t)return console.warn("Cound not parse text to color. Fallback to black."),"black";const[s,i,r]=zt(t);return .2126*s+.7152*i+.0722*r>.179?"black":"white"}function Sf(){return new Promise((e,t)=>{new window.EyeDropper().open().then(i=>{e(i.sRGBHex)}).catch(t)})}function Af(){return"EyeDropper"in window}class Or extends $e{constructor(){super(),Pt(this,Ns),D(this,"rootEl",be()),D(this,"inputEl",be()),this.autofocus=!1,this.disabled=!1,this.readonly=!1,this.type="text",this.min=void 0,this.max=void 0,this.step=void 0}setValue(t){let s=t;this.type==="number"&&(this.step!=null&&(s=Math.round(s/this.step)*this.step),this.max!=null&&(s=Math.min(s,this.max)),this.min!=null&&(s=Math.max(s,this.min))),k(this,Ns,tl).call(this,s)}clear(){this.setValue("")}firstUpdated(t){t.has("autofocus")&&this.autofocus&&this.inputEl.value.focus()}updated(t){t.has("value")&&this.inputEl.value&&(this.inputEl.value.value=this.value)}render(){return Q`
      <div ${ve(this.rootEl)} class="body">
        <input
          ${ve(this.inputEl)}
          part="input"
          type="${this.type}"
          min="${this.min}"
          max="${this.max}"
          step="${this.step}"
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          @change=${k(this,Ns,sl)}
        />
      </div>
    `}}Ns=new WeakSet;tl=function(e){const t=It("update:value",{value:e},{bubbles:!1});this.dispatchEvent(t)};sl=function(e){const{value:t}=e.target;this.setValue(t)};D(Or,"properties",{autofocus:{type:Boolean},disabled:{type:Boolean},max:{type:Number},min:{type:Number},readonly:{type:Boolean},step:{type:Number},type:{type:String},value:{type:String}});D(Or,"styles",Ue`
    :host {
      --height: 24px;

      height: var(--height);
      display: inline-flex;
      box-sizing: border-box;

      *,
      *::after,
      *::before {
        box-sizing: inherit;
      }
    }

    .body {
      align-items: stretch;
      display: flex;
      flex: 1 1 auto;
    }

    input {
      padding: 4px;
      border: none;
      border-radius: 2px;
      flex: 1 1 auto;
      width: 100%;
      font-size: 13px;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

      &[type='number'] {
        -moz-appearance: textfield;

        font-variant-numeric: tabular-nums;
        text-align: right;
      }
    }
  `);class Pr extends $e{constructor(){super(),D(this,"rootEl",be())}render(){return Q` <div ${ve(this.rootEl)} class="body"></div> `}}D(Pr,"properties",{});D(Pr,"styles",Ue`
    :host {
      --padding: 8px;
      --margin: 8px;

      --border-color--top: light-dark(#c8c8c8, #000000);
      --border-color--bottom: light-dark(#f0f0f0, #404040);

      box-sizing: border-box;
      flex: 1 1 auto;

      *,
      *::after,
      *::before {
        box-sizing: inherit;
      }
    }

    .body {
      border-bottom-color: var(--border-color--bottom);
      border-left-color: transparent;
      border-right-color: transparent;
      border-style: solid;
      border-top-color: var(--border-color--top);
      border-width: 1px 0 1px 0;
      display: block;
      height: 0;
      margin-bottom: var(--margin);
      margin-left: var(--padding);
      margin-right: var(--padding);
      margin-top: var(--margin);
    }
  `);class kr extends $e{constructor(){super(),D(this,"rootEl",be()),this._intervalTimer,this.duration=1e3}willUpdate(t){t.has("show")&&(clearInterval(this._intervalTimer),this._intervalTimer=setTimeout(()=>{this.show=!1},this.duration))}render(){return Q`
      <div ${ve(this.rootEl)} class="body">
        <slot></slot>
      </div>
    `}}D(kr,"properties",{duration:{type:Number,reflect:!0},show:{type:Boolean,reflect:!0}});D(kr,"styles",Ue`
    :host {
      --offset: 8px;
      --z-index: 1000;

      --_y: calc(-200% - var(--offset));

      display: inline-flex;
      left: 50%;
      opacity: 0;
      pointer-events: none;
      position: absolute;
      transform: translate(-50%, var(--_y));
      transition: all 0.2s ease-out;
      z-index: var(--z-index);
    }

    :host([show]) {
      --_y: calc(-100% - var(--offset));

      opacity: 1;
    }

    .body {
      align-items: center;
      background-color: black;
      border-radius: 4px;
      color: white;
      display: inline-flex;
      justify-content: stretch;
      padding: 4px 8px;

      &::after {
        border-color: black transparent transparent transparent;
        border-style: solid;
        border-width: 4px;
        bottom: -8px;
        content: '';
        display: block;
        left: calc(50% - 4px);
        position: absolute;
      }
    }
  `);class Ir extends $e{constructor(){super(),Pt(this,Ae),D(this,"rootEl",be()),this._sliderValue=0,this.colorActive=null}resetSlider(){this._sliderValue=0}willUpdate(t){if(t.has("_sliderValue")){k(this,Ae,$s).call(this,null);const s=N(this,Ae,ci).call(this,this._sliderValue);k(this,Ae,ll).call(this,s)}t.has("colorActive")&&k(this,Ae,$s).call(this,this.colorActive)}render(){return Q`
      <div ${ve(this.rootEl)} class="body">
        <rgb-color-mixer-blender-stop
          ?active="${this.colorActive==="start"}"
          value=${this.colorStart}
          @update:active=${k(this,Ae,nl)}
        ></rgb-color-mixer-blender-stop>
        <rgb-color-slider
          .colorFunc=${k(this,Ae,al).bind(this)}
          .colorStops=${N(this,Ae,il)}
          max="1"
          min="0"
          step="0.01"
          value=${this._sliderValue}
          @update:value=${k(this,Ae,rl)}
        ></rgb-color-slider>
        <rgb-color-mixer-blender-stop
          ?active="${this.colorActive==="end"}"
          value=${this.colorEnd}
          @update:active=${k(this,Ae,ol)}
        ></rgb-color-mixer-blender-stop>
      </div>
    `}}Ae=new WeakSet;ci=function(){const e=new Ti.Color(this.colorStart),t=new Ti.Color(this.colorEnd);return s=>Ti.gradient(s,[e,0],[t,1]).toString()};il=function(){return[...Array(11).keys()].map(e=>N(this,Ae,ci).call(this,e/10))};rl=function(e){this._sliderValue=e.detail.value};nl=function(e){const t=e.detail.value?"start":null;k(this,Ae,$s).call(this,t)};ol=function(e){const t=e.detail.value?"end":null;k(this,Ae,$s).call(this,t)};ll=function(e){const t=It("update:value",{value:e},{bubbles:!1});this.dispatchEvent(t)};$s=function(e){const t=It("update:coloractive",{value:e},{bubbles:!1});this.dispatchEvent(t)};al=function(e){return N(this,Ae,ci).call(this,e)};D(Ir,"properties",{_sliderValue:{state:!0},colorActive:{type:String},colorStart:{type:String},colorEnd:{type:String}});D(Ir,"styles",Ue`
    :host {
      box-sizing: border-box;
      display: inline-flex;

      *,
      *::after,
      *::before {
        box-sizing: inherit;
      }
    }

    .body {
      display: flex;
      gap: 8px;
    }
  `);class Fr extends $e{constructor(){super(),Pt(this,Zs),this.active=!1,this.value="#000000"}willUpdate(t){t.has("value")&&(this._color=wf(this.value))}render(){return Q`
      <button
        ?active=${this.active}
        class="body"
        style=${wr({"--color":this._color,"--background-color":this.value})}
        @click=${k(this,Zs,cl)}
      >
        <rgb-color-mixer-ui-icon class="icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />
            <path d="M21 3a16 16 0 0 0 -12.8 10.2" />
            <path d="M21 3a16 16 0 0 1 -10.2 12.8" />
            <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
          </svg>
        </rgb-color-mixer-ui-icon>
      </button>
    `}}Zs=new WeakSet;cl=function(){const e=!this.active;k(this,Zs,ul).call(this,e)};ul=function(e){const t=It("update:active",{value:e},{bubbles:!1});this.dispatchEvent(t)};D(Fr,"properties",{_color:{state:!0},active:{type:Boolean,reflect:!0},value:{type:String,reflect:!0}});D(Fr,"styles",Ue`
    :host {
      --width: 40px;
      --height: 32px;

      align-items: stretch;
      box-sizing: border-box;
      display: flex;
      height: var(--height);
      justify-content: stretch;
      width: var(--width);

      *,
      *::after,
      *::before {
        box-sizing: inherit;
      }
    }

    .body {
      flex: 1 1 auto;
      border-radius: 4px;
      border: 1px solid black;
      appearance: none;
      box-shadow: inset 1px 1px 1px 0 hsl(0 100 100 / 0.2),
        inset -1px -1px 1px 0 hsl(0 0 0 / 0.1);
      color: var(--color);
      background-color: var(--background-color);
      display: flex;
      justify-content: center;
      align-items: center;

      &[active] {
        box-shadow: inset 0 0 0 1px black, inset 0 0 0 4px rgb(0 0 0 / 0.2);
      }
    }

    .icon {
      --color: var(--color);
    }
  `);class Nr extends $e{constructor(){super(),Pt(this,Ls),D(this,"rootEl",be()),D(this,"inputEl",be()),D(this,"copyEl",be()),Pt(this,zi,Af()),this.disabled=!1,this.noCopy=!1,this.noPicker=!1}async copyToClipboard(){await $f(this.value),this.copyEl.value.showFeedBack("Copied")}setValue(t){k(this,Ls,hl).call(this,t)}async openEyeDropper(){let t;try{t=await Sf()}catch{return}this.setValue(t)}updated(t){t.has("value")&&(this.inputEl.value.value=this.value)}render(){return Q`
      <div ${ve(this.rootEl)} class="body">
        <rgb-color-mixer-ui-field class="value">
          <div
            class="swatch"
            style=${wr({"--color":this.value})}
          ></div>
          <rgb-color-mixer-ui-input
            ${ve(this.inputEl)}
            class="input"
            ?disabled=${this.disabled}
            value=${this.value}
            @update:value=${k(this,Ls,fl)}
          ></rgb-color-mixer-ui-input>
          ${this.noCopy?Q``:Q` <!-- Copy -->
                <rgb-color-mixer-ui-icon-button
                  ${ve(this.copyEl)}
                  ?disabled=${this.disabled}
                  feedback
                  @click=${this.copyToClipboard}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"
                    />
                    <path
                      d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"
                    />
                  </svg>
                </rgb-color-mixer-ui-icon-button>`}
          ${!this.noPicker&&N(this,zi)?Q` <!-- Eye Dropper -->
                <rgb-color-mixer-ui-icon-button
                  ?disabled=${this.disabled}
                  @click=${this.openEyeDropper}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M11 7l6 6" />
                    <path
                      d="M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4z"
                    />
                  </svg>
                </rgb-color-mixer-ui-icon-button>`:Q``}
        </rgb-color-mixer-ui-field>
      </div>
    `}}zi=new WeakMap;Ls=new WeakSet;fl=function(e){e.stopPropagation();const{value:t}=e.detail;this.setValue(t)};hl=function(e){const t=It("update:value",{value:e},{bubbles:!1});this.dispatchEvent(t)};D(Nr,"properties",{disabled:{type:Boolean},noCopy:{type:Boolean},noPicker:{type:Boolean},value:{type:String,reflect:!0}});D(Nr,"styles",Ue`
    :host {
      --background-color: light-dark(#a0a0a0, #303030);
    }

    .body {
      align-items: stretch;
      background-color: var(--background-color);
      border-radius: 8px;
      display: inline-flex;
      font-family: sans-serif;
      gap: 4px;
      padding: 4px;
    }

    .swatch {
      --size: 20px;

      background-color: var(--color);
      border-radius: 2px;
      box-shadow: 0 0 0 1px black, 0 0 0 2px white;
      height: var(--size);
      margin: 2px;
      width: var(--size);
    }

    .value {
      --direction: 'horizontal';
    }

    .input {
      &::part(input) {
        font-family: Monaco, monospace;
        width: 160px;
        text-align: center;
      }
    }
  `);class Lr extends $e{constructor(){super(),Pt(this,me),D(this,"rootEl",be()),D(this,"trackEl",be()),D(this,"thumbEl",be()),this._percentage=0,this.value=0,this.min=0,this.max=1,this.step=.01,this.width=320,this.height=32,this.colorStops=[],this.colorFunc=()=>"transparent",this.stepMultiplier=1,this.stepMultiplierFast=10,this.gradientMode="to right in srgb",this._handlePointerUp=k(this,me,bl).bind(this),this._handlePointerMove=k(this,me,Ar).bind(this)}nextStep(t=1){this.value=Us(this.value+this.step*t,this.min,this.max)}previousStep(t=1){this.value=Us(this.value-this.step*t,this.min,this.max)}setValue(t){const{width:s}=this,i=Us(t,this.min,this.max),r=Math.round(i/this.step)*this.step,n=1/(this.max-this.min)*(r-this.min),o=s*n;k(this,me,Er).call(this,o,s)}willUpdate(t){t.has("value")&&this.setValue(this.value),t.has("_active")&&(this._active?k(this,me,yl).call(this):k(this,me,Wi).call(this)),t.has("_percentage")&&k(this,me,gl).call(this,this.value)}connectedCallback(){super.connectedCallback(),window.addEventListener("pointerup",this._handlePointerUp)}disconnectedCallback(){window.removeEventListener("pointerup",this._handlePointerUp),k(this,me,Wi).call(this),super.disconnectedCallback()}render(){return Q`
      <div
        ${ve(this.rootEl)}
        class="body"
        role="slider"
        tabindex="0"
        style=${wr({"--height":this.height+"px","--percentage":this._percentage.toFixed(4),"--width":this.width+"px","--color-stops":N(this,me,dl),"--color":N(this,me,pl),"--gradient-mode":this.gradientMode})}
        @keydown=${k(this,me,_l)}
      >
        <div class="ramp"></div>
        <div class="slider">
          <div
            ${ve(this.trackEl)}
            class="track"
            @pointerdown=${k(this,me,ml)}
          >
            <div
              ${ve(this.thumbEl)}
              class="thumb"
              @pointerdown=${k(this,me,vl)}
            ></div>
          </div>
        </div>
      </div>
    `}}me=new WeakSet;dl=function(){return this.colorStops.join(",")};pl=function(){return this.colorFunc(this.value)};gl=function(e){const t=It("update:value",{value:e},{bubbles:!1});this.dispatchEvent(t)};Sr=function(){const e=this.min+(this.max-this.min)*this._percentage,t=Math.round(e/this.step)*this.step;this.value=t};ml=function(e){k(this,me,Ar).call(this,e)};Ar=function(e){var t;const{x:s,width:i}=this.trackEl.value.getBoundingClientRect(),{clientX:r}=((t=e.touches)==null?void 0:t[0])||e,n=r-s;k(this,me,Er).call(this,n,i),k(this,me,Sr).call(this)};bl=function(){this._active=!1,k(this,me,Sr).call(this)};vl=function(){this._active=!0};_l=function(e){const t=e.shiftKey?this.stepMultiplierFast:this.stepMultiplier;switch(e.key){case"ArrowLeft":this.previousStep(t);break;case"ArrowRight":this.nextStep(t);break}};Er=function(e,t){const i=Us(1/t*e,0,1);Math.abs(this._percentage-i)>.001&&(this._percentage=i)};yl=function(){window.addEventListener("pointermove",this._handlePointerMove)};Wi=function(){window.removeEventListener("pointermove",this._handlePointerMove)};D(Lr,"properties",{_active:{state:!0},_percentage:{state:!0},colorFunc:{type:Function},colorStops:{type:Array},gradientMode:{type:String},height:{type:Number,reflect:!0},max:{type:Number},min:{type:Number},step:{type:Number},stepMultiplier:{type:Number},stepMultiplierFast:{type:Number},value:{type:Number},width:{type:Number,reflect:!0}});D(Lr,"styles",Ue`
    :host {
      --border-color: #303030;

      box-sizing: border-box;
      touch-action: none;

      *,
      *::after,
      *::before {
        box-sizing: inherit;
      }
    }

    .body {
      position: relative;
      touch-action: none;

      &:focus {
        outline: 2px solid inherit;
        outline-offset: 1px;
        border-radius: 4px;
      }
    }

    .ramp {
      position: absolute;
      inset: 0;
      z-index: -1;
    }

    .slider {
      background: linear-gradient(var(--gradient-mode), var(--color-stops));
      border-radius: 4px;
      border: 1px solid var(--border-color);
      display: flex;
      height: var(--height);
      width: var(--width);
    }

    .track {
      cursor: crosshair;
      inset: 0;
      position: absolute;
    }

    .thumb {
      --size: calc(var(--height) - 10px);

      background-color: var(--color);
      border-radius: 4px;
      box-shadow: inset 1px 1px 0 0 hsl(0 100 100 / 0.2), 0 0 0 1px black,
        0 0 0 2px white, 1px 1px 4px 0 hsl(0 0 0 / 0.5);
      cursor: grab;
      left: calc(var(--width) * var(--percentage));
      position: absolute;
      transform: translate(-50%, -50%);
      width: var(--size);
      height: var(--size);
      top: calc(var(--height) / 2);
      touch-action: none;

      &::after {
        content: '';
        position: absolute;
        inset: -10px;
        background-color: transparent;
        border-radius: 999px;
        z-index: -1;
      }
    }
  `);class Ur extends $e{constructor(){super(),D(this,"rootEl",be())}render(){return Q`
      <div ${ve(this.rootEl)} class="body">
        <div class="slider">
          <slot name="slider"></slot>
        </div>
        <div class="meta">
          <div class="label">
            <slot name="label"></slot>
          </div>
          <div class="value">
            <slot name="value"></slot>
          </div>
        </div>
      </div>
    `}}D(Ur,"properties",{});D(Ur,"styles",Ue`
    :host {
      --label-width: 32px;
      --background-color: light-dark(#c0c0c0, #404040);
      --color: light-dark(#202020, #f0f0f0);

      box-sizing: border-box;
      color: black;
      display: inline-flex;

      *,
      *::after,
      *::before {
        box-sizing: inherit;
      }
    }

    .body {
      align-items: stretch;
      display: flex;
      gap: 8px;
    }

    .slider {
      position: relative;
      z-index: 1;
    }

    .meta {
      display: flex;
      position: relative;
    }

    .label {
      align-items: center;
      background-color: var(--background-color);
      border-radius: 4px 0 0 4px;
      color: var(--color);
      display: flex;
      font-family: sans-serif;
      font-size: 13px;
      justify-content: center;
      user-select: none;
      width: var(--label-width);
      font-weight: 600;
    }

    .value {
      align-items: stretch;
      background-color: var(--background-color);
      border-radius: 0 4px 4px 0;
      color: var(--color);
      display: flex;
      font-variant-numeric: tabular-nums;
      justify-content: stretch;
      width: 56px;
    }
  `);class Vr extends $e{constructor(){super(),Pt(this,M),D(this,"rootEl",be()),D(this,"blenderEl",be()),this._colorActive=!1,this._colorEnd="#ffffff",this._colorStart="#000000",this._rgb=[0,0,0],this._value=void 0,this.channels="rgbhsl",this.format="rgb",this.initialValue=void 0,this.noBlender=!1,this.noCopy=!1,this.noPicker=!1,this.noValue=!1}get value(){return this._value}set value(t){throw new Error("Value is readonly.")}get colorCss(){return Ji(this._rgb,this.format)}setColor(t){const s=ji(t);s.length&&this.setRgb(s)}setRgb(t){const s=zt(t);this.setRgbNormalized(s)}setRgbNormalized(t){t.some((r,n)=>Math.abs(r-this._rgb[n])>1e-4)&&(this._rgb=[...t])}willUpdate(t){if(t.has("initialValue")){this.setColor(this.initialValue),this._colorStart=N(this,M,Jt);const s=xs.hsl(ji(N(this,M,Jt)));s[0]=(s[0]+90)%360;const i=Mt.rgb(s);this._colorEnd=Ji(zt(i),"hex")}(t.has("_rgb")||t.has("_colorActive"))&&(this._colorActive==="start"?this._colorStart=N(this,M,Jt):this._colorActive==="end"&&(this._colorEnd=N(this,M,Jt))),t.has("_rgb")&&(this._value=this.colorCss,k(this,M,Cl).call(this,this.colorCss))}render(){const t=[];for(const s of this.channels){let i;switch(s){case"r":i=Q` <!-- Red -->
            <rgb-color-slider-item>
              <div slot="label">R</div>
              <rgb-color-slider
                min="0"
                max="255"
                slot="slider"
                step="1"
                value=${N(this,M,Ie)[0]}
                .colorStops=${N(this,M,xl)}
                .colorFunc=${k(this,M,Ml).bind(this)}
                @update:value=${k(this,M,Ki)}
              ></rgb-color-slider>
              <rgb-color-mixer-ui-input
                slot="value"
                class="value"
                max="255"
                min="0"
                step="1"
                type="number"
                value=${N(this,M,Ie)[0]}
                @update:value=${k(this,M,Ki)}
              ></rgb-color-mixer-ui-input>
            </rgb-color-slider-item>`;break;case"g":i=Q` <!-- Green -->
            <rgb-color-slider-item>
              <div slot="label">G</div>
              <rgb-color-slider
                .colorFunc=${k(this,M,Tl).bind(this)}
                .colorStops=${N(this,M,$l)}
                max="255"
                min="0"
                slot="slider"
                step="1"
                value=${N(this,M,Ie)[1]}
                @update:value=${k(this,M,Gi)}
              ></rgb-color-slider>
              <rgb-color-mixer-ui-input
                slot="value"
                class="value"
                max="255"
                min="0"
                step="1"
                type="number"
                value=${N(this,M,Ie)[1]}
                @update:value=${k(this,M,Gi)}
              ></rgb-color-mixer-ui-input>
            </rgb-color-slider-item>`;break;case"b":i=Q` <!-- Blue -->
            <rgb-color-slider-item>
              <div slot="label">B</div>
              <rgb-color-slider
                .colorFunc=${k(this,M,Rl).bind(this)}
                .colorStops=${N(this,M,wl)}
                max="255"
                min="0"
                slot="slider"
                step="1"
                value=${N(this,M,Ie)[2]}
                @update:value=${k(this,M,Yi)}
              ></rgb-color-slider>
              <rgb-color-mixer-ui-input
                slot="value"
                class="value"
                max="255"
                min="0"
                step="1"
                type="number"
                value=${N(this,M,Ie)[2]}
                @update:value=${k(this,M,Yi)}
              ></rgb-color-mixer-ui-input>
            </rgb-color-slider-item>`;break;case"h":i=Q` <!-- Hue -->
            <rgb-color-slider-item>
              <div slot="label">H</div>
              <rgb-color-slider
                .colorFunc=${k(this,M,Ol).bind(this)}
                .colorStops=${N(this,M,Sl)}
                gradientMode="to right in hsl longer hue"
                max="360"
                min="0"
                slot="slider"
                step="0.01"
                stepMultiplier="100"
                stepMultiplierFast="1500"
                value=${N(this,M,Re)[0].toFixed(2)}
                @update:value=${k(this,M,Zi)}
              ></rgb-color-slider>
              <rgb-color-mixer-ui-input
                slot="value"
                class="value"
                max="360"
                min="0"
                step="0.01"
                type="number"
                value=${N(this,M,Re)[0].toFixed(2)}
                @update:value=${k(this,M,Zi)}
              ></rgb-color-mixer-ui-input>
            </rgb-color-slider-item>`;break;case"s":i=Q` <!-- Saturation -->
            <rgb-color-slider-item>
              <div slot="label">S</div>
              <rgb-color-slider
                .colorFunc=${k(this,M,Pl).bind(this)}
                .colorStops=${N(this,M,Al)}
                gradientMode="to right in hsl"
                max="100"
                min="0"
                slot="slider"
                step="0.01"
                stepMultiplier="100"
                stepMultiplierFast="1000"
                value=${N(this,M,Re)[1].toFixed(2)}
                @update:value=${k(this,M,qi)}
              ></rgb-color-slider>
              <rgb-color-mixer-ui-input
                slot="value"
                class="value"
                max="100"
                min="0"
                step="0.01"
                type="number"
                value=${N(this,M,Re)[1].toFixed(2)}
                @update:value=${k(this,M,qi)}
              ></rgb-color-mixer-ui-input>
            </rgb-color-slider-item>`;break;case"l":i=Q` <!-- Lightness -->
            <rgb-color-slider-item>
              <div slot="label">L</div>
              <rgb-color-slider
                .colorFunc=${k(this,M,kl).bind(this)}
                .colorStops=${N(this,M,El)}
                gradientMode="to right in hsl"
                max="100"
                min="0"
                slot="slider"
                step="0.01"
                stepMultiplier="100"
                stepMultiplierFast="1000"
                value=${N(this,M,Re)[2].toFixed(2)}
                @update:value=${k(this,M,Xi)}
              ></rgb-color-slider>
              <rgb-color-mixer-ui-input
                slot="value"
                class="value"
                max="100"
                min="0"
                step="0.01"
                type="number"
                value=${N(this,M,Re)[2].toFixed(2)}
                @update:value=${k(this,M,Xi)}
              ></rgb-color-mixer-ui-input>
            </rgb-color-slider-item>`;break}if(!i)throw new Error(`Unknown slider mode: ${s}`);t.push(i)}return Q`
      <div ${ve(this.rootEl)} class="mixer">
        ${this.noValue?Q``:Q` <!-- Value Input -->
              <rgb-color-mixer-value
                class="value-input"
                value=${this.colorCss}
                ?noCopy=${this.noCopy}
                ?noPicker=${this.noPicker}
                @update:value=${k(this,M,Il)}
              ></rgb-color-mixer-value>
              <rgb-color-mixer-ui-separator></rgb-color-mixer-ui-separator>`}
        ${this.noBlender?Q``:Q` <!-- Blender Slider -->
              <div class="blender">
                <rgb-color-mixer-blender
                  ${ve(this.blenderEl)}
                  colorActive=${this._colorActive}
                  colorEnd=${this._colorEnd}
                  colorStart=${this._colorStart}
                  @update:coloractive=${k(this,M,Nl)}
                  @update:value=${k(this,M,Fl)}
                ></rgb-color-mixer-blender>
              </div>
              <rgb-color-mixer-ui-separator></rgb-color-mixer-ui-separator>`}
        <div class="channels">${t}</div>
      </div>
    `}}M=new WeakSet;Cr=function(){const[e,t,s]=this._rgb;return[e*255,t*255,s*255]};Ie=function(){const[e,t,s]=N(this,M,Cr);return[Math.round(e),Math.round(t),Math.round(s)]};Re=function(){return xs.hsl(N(this,M,Cr))};ui=function(){const[e,t,s]=N(this,M,Re);return[Math.round(e*1e4)/1e4,Math.round(t*1e4)/1e4,Math.round(s*1e4)/1e4]};xl=function(){const[e,t,s]=N(this,M,Ie),i=`rgb(0 ${t} ${s})`,r=`rgb(255 ${t} ${s})`;return[i,r]};$l=function(){const[e,t,s]=N(this,M,Ie),i=`rgb(${e} 0 ${s})`,r=`rgb(${e} 255 ${s})`;return[i,r]};wl=function(){const[e,t,s]=N(this,M,Ie),i=`rgb(${e} ${t} 0)`,r=`rgb(${e} ${t} 255)`;return[i,r]};Sl=function(){const[e,t,s]=N(this,M,Re),i=`hsl(0 ${t.toFixed(4)} ${s.toFixed(4)})`,r=`hsl(360 ${t.toFixed(4)} ${s.toFixed(4)})`;return[i,r]};Al=function(){const[e,t,s]=N(this,M,Re),i=`hsl(${e.toFixed(2)} 0 ${s.toFixed(4)})`,r=`hsl(${e.toFixed(2)} 100 ${s.toFixed(4)})`;return[i,r]};El=function(){const[e,t,s]=N(this,M,Re);return[...Array(11).keys()].map(r=>`hsl(${e.toFixed(2)} ${t.toFixed(4)} ${r*10})`)};Jt=function(){return Ji(this._rgb,"hex")};Cl=function(e){const t=It("update:value",{value:e},{bubbles:!1});this.dispatchEvent(t)};Ki=function(e){const t=e.detail.value/255,[s,i,r]=this._rgb;this.setRgbNormalized([t,i,r])};Gi=function(e){const t=e.detail.value/255,[s,i,r]=this._rgb;this.setRgbNormalized([s,t,r])};Yi=function(e){const t=e.detail.value/255,[s,i,r]=this._rgb;this.setRgbNormalized([s,i,t])};Zi=function(e){const t=e.detail.value,[s,i,r]=N(this,M,Re),n=Mt.rgb([t,i,r]),o=zt(n);this.setRgbNormalized(o)};qi=function(e){const t=e.detail.value,[s,i,r]=N(this,M,Re),n=Mt.rgb([s,t,r]),o=zt(n);this.setRgbNormalized(o)};Xi=function(e){const t=e.detail.value,[s,i,r]=N(this,M,Re),n=Mt.rgb([s,i,t]),o=zt(n);this.setRgbNormalized(o)};Ml=function(e){const[t,s,i]=N(this,M,Ie);return`rgb(${e} ${s} ${i})`};Tl=function(e){const[t,s,i]=N(this,M,Ie);return`rgb(${t} ${e} ${i})`};Rl=function(e){const[t,s,i]=N(this,M,Ie);return`rgb(${t} ${s} ${e})`};Ol=function(e){const[t,s,i]=N(this,M,ui);return`hsl(${e.toFixed(2)} ${s.toFixed(4)} ${i.toFixed(4)})`};Pl=function(e){const[t,s,i]=N(this,M,ui);return`hsl(${t.toFixed(2)} ${e.toFixed(4)} ${i.toFixed(4)})`};kl=function(e){const[t,s,i]=N(this,M,ui);return`hsl(${t.toFixed(2)} ${s.toFixed(4)} ${e.toFixed(4)})`};Il=function(e){const t=e.detail.value;this.setColor(t)};Fl=function(e){const t=e.detail.value;this.setColor(t)};Nl=function(e){const t=e.detail.value;this._colorActive=t};D(Vr,"properties",{_colorActive:{state:!0},_colorEnd:{state:!0},_colorStart:{state:!0},_rgb:{state:!0},_value:{state:!0},channels:{type:String},format:{type:String},initialValue:{type:String},noBlender:{type:Boolean},noCopy:{type:Boolean},noPicker:{type:Boolean},noValue:{type:Boolean}});D(Vr,"styles",Ue`
    :host {
      --padding: 16px;

      box-sizing: border-box;
      display: inline-flex;

      *,
      *::after,
      *::before {
        box-sizing: inherit;
      }
    }

    .mixer {
      align-items: stretch;
      background-color: light-dark(#e0e0e0, #303030);
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: var(--padding);
    }

    .channels {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .value {
      --height: 30px;

      flex: 1 1 auto;
      margin: 1px;

      &::part(input) {
        border-radius: 0 4px 4px 0;
      }
    }

    .value-input {
      margin: 0 auto;
    }
  `);window.customElements.define("rgb-color-mixer-ui-field",Mr);window.customElements.define("rgb-color-mixer-ui-icon",Tr);window.customElements.define("rgb-color-mixer-ui-icon-button",Rr);window.customElements.define("rgb-color-mixer-ui-input",Or);window.customElements.define("rgb-color-mixer-ui-separator",Pr);window.customElements.define("rgb-color-mixer-ui-tool-tip",kr);window.customElements.define("rgb-color-mixer-blender",Ir);window.customElements.define("rgb-color-mixer-blender-stop",Fr);window.customElements.define("rgb-color-mixer-value",Nr);window.customElements.define("rgb-color-slider",Lr);window.customElements.define("rgb-color-slider-item",Ur);window.customElements.define("rgb-color-mixer",Vr);const Ef={VITE_API_DOCUMENTATION_URL:"https://github.com/bennyschudel/rgb-color-mixer/blob/main/docs/API.md",VITE_APP_VERSION:"0.8.1",VITE_GITHUB_URL:"https://github.com/bennyschudel/rgb-color-mixer"},{VITE_APP_VERSION:Cf,VITE_API_DOCUMENTATION_URL:Mf,VITE_GITHUB_URL:Tf}=Ef,Rf=Cf,Of=Mf,Pf=Tf,kf={class:"app"},If={class:"head"},Ff={class:"ml-2"},Nf=["href"],Lf=["href"],Uf={class:"badge"},Vf=["initialValue"],Bf=["initialValue"],Hf=["initialValue"],Df=["initialValue"],jf=["initialValue"],zf=["initialValue"],Wf=["initialValue"],Kf=["initialValue"],Gf=8,Yf=Ua({__name:"App",setup(e){const t=hs("hotpink"),s=hs("black"),i=Hu(),r=Eu(i),n=[...Array(Gf).keys()].map(a=>Va(`mixer${a}`));function o(a){s.value=a.detail.value}return ht(s,a=>{n.map(l=>{l.value&&l.value.setColor(a)})}),ri(()=>{n.map(a=>{a.value&&Ks(a.value,"update:value",o)})}),(a,l)=>(Mc(),Oc("div",kf,[W("div",If,[W("button",{onClick:l[0]||(l[0]=h=>at(r)())},[W("span",Ff,Ri(at(i)?"Dark":"Light"),1)]),W("a",{href:at(Of)},"API Documentation",8,Nf),W("a",{href:at(Pf)},"Github",8,Lf)]),l[1]||(l[1]=W("h1",null,"<rgb-color-mixer>",-1)),W("div",Uf,Ri(at(Rf)),1),W("rgb-color-mixer",{ref:"mixer0",initialValue:t.value},null,8,Vf),l[2]||(l[2]=W("h2",null,"RGB Only",-1)),l[3]||(l[3]=W("code",null,'channels="rgb"',-1)),W("rgb-color-mixer",{ref:"mixer1",initialValue:t.value,channels:"rgb"},null,8,Bf),l[4]||(l[4]=W("h2",null,"HSL Only",-1)),l[5]||(l[5]=W("code",null,'channels="hsl"',-1)),W("rgb-color-mixer",{ref:"mixer2",initialValue:t.value,channels:"hsl"},null,8,Hf),l[6]||(l[6]=W("h2",null,"No Blender",-1)),l[7]||(l[7]=W("code",null,"noBlender",-1)),W("rgb-color-mixer",{ref:"mixer3",initialValue:t.value,noBlender:""},null,8,Df),l[8]||(l[8]=W("h2",null,"No Value",-1)),l[9]||(l[9]=W("code",null,"noValue",-1)),W("rgb-color-mixer",{ref:"mixer4",initialValue:t.value,noValue:""},null,8,jf),l[10]||(l[10]=W("h2",null,"No Copy & No Picker",-1)),l[11]||(l[11]=W("code",null,"noCopy noPicker",-1)),W("rgb-color-mixer",{ref:"mixer5",initialValue:t.value,noCopy:"",noPicker:""},null,8,zf),l[12]||(l[12]=W("h2",null,"Minimal RGB",-1)),l[13]||(l[13]=W("code",null,'channels="rgb" noBlender noValue',-1)),W("rgb-color-mixer",{ref:"mixer6",initialValue:t.value,channels:"rgb",noBlender:"",noValue:""},null,8,Wf),l[14]||(l[14]=W("h2",null,"Minimal HSL",-1)),l[15]||(l[15]=W("code",null,'channels="hsl" noBlender noValue',-1)),W("rgb-color-mixer",{ref:"mixer7",initialValue:t.value,channels:"hsl",noBlender:"",noValue:""},null,8,Kf),l[16]||(l[16]=W("p",{class:"note"},[Vi(" 2025, by "),W("a",{href:"https://twitter.com/bennyschudel",target:"_blank"},"@bennyschudel"),Vi(", MIT License ")],-1))]))}}),Zf=(e,t)=>{const s=e.__vccOpts||e;for(const[i,r]of t)s[i]=r;return s},qf=Zf(Yf,[["__scopeId","data-v-38f9b7bb"]]);hu(qf).mount("#app");
