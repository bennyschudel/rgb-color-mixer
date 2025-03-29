(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function fr(e){const t=Object.create(null);for(const s of e.split(","))t[s]=1;return s=>s in t}const ie={},zt=[],Ge=()=>{},zl=()=>!1,qs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),hr=e=>e.startsWith("onUpdate:"),Se=Object.assign,dr=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},Hl=Object.prototype.hasOwnProperty,X=(e,t)=>Hl.call(e,t),D=Array.isArray,Ht=e=>Zs(e)==="[object Map]",Tn=e=>Zs(e)==="[object Set]",z=e=>typeof e=="function",de=e=>typeof e=="string",gt=e=>typeof e=="symbol",ce=e=>e!==null&&typeof e=="object",On=e=>(ce(e)||z(e))&&z(e.then)&&z(e.catch),Ln=Object.prototype.toString,Zs=e=>Ln.call(e),Dl=e=>Zs(e).slice(8,-1),kn=e=>Zs(e)==="[object Object]",pr=e=>de(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Jt=fr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xs=e=>{const t=Object.create(null);return s=>t[s]||(t[s]=e(s))},Bl=/-(\w)/g,pt=Xs(e=>e.replace(Bl,(t,s)=>s?s.toUpperCase():"")),jl=/\B([A-Z])/g,kt=Xs(e=>e.replace(jl,"-$1").toLowerCase()),In=Xs(e=>e.charAt(0).toUpperCase()+e.slice(1)),ai=Xs(e=>e?`on${In(e)}`:""),ft=(e,t)=>!Object.is(e,t),ci=(e,...t)=>{for(let s=0;s<e.length;s++)e[s](...t)},Nn=(e,t,s,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:s})},Ul=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Dr;const Js=()=>Dr||(Dr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function gr(e){if(D(e)){const t={};for(let s=0;s<e.length;s++){const i=e[s],r=de(i)?Gl(i):gr(i);if(r)for(const n in r)t[n]=r[n]}return t}else if(de(e)||ce(e))return e}const Vl=/;(?![^(]*\))/g,Wl=/:([^]+)/,Kl=/\/\*[^]*?\*\//g;function Gl(e){const t={};return e.replace(Kl,"").split(Vl).forEach(s=>{if(s){const i=s.split(Wl);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function mr(e){let t="";if(de(e))t=e;else if(D(e))for(let s=0;s<e.length;s++){const i=mr(e[s]);i&&(t+=i+" ")}else if(ce(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}const Yl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ql=fr(Yl);function Fn(e){return!!e||e===""}const zn=e=>!!(e&&e.__v_isRef===!0),Hn=e=>de(e)?e:e==null?"":D(e)||ce(e)&&(e.toString===Ln||!z(e.toString))?zn(e)?Hn(e.value):JSON.stringify(e,Dn,2):String(e),Dn=(e,t)=>zn(t)?Dn(e,t.value):Ht(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[i,r],n)=>(s[ui(i,n)+" =>"]=r,s),{})}:Tn(t)?{[`Set(${t.size})`]:[...t.values()].map(s=>ui(s))}:gt(t)?ui(t):ce(t)&&!D(t)&&!kn(t)?String(t):t,ui=(e,t="")=>{var s;return gt(e)?`Symbol(${(s=e.description)!=null?s:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Re;class Zl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Re,!t&&Re&&(this.index=(Re.scopes||(Re.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].pause();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].resume();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].resume()}}run(t){if(this._active){const s=Re;try{return Re=this,t()}finally{Re=s}}}on(){Re=this}off(){Re=this.parent}stop(t){if(this._active){this._active=!1;let s,i;for(s=0,i=this.effects.length;s<i;s++)this.effects[s].stop();for(this.effects.length=0,s=0,i=this.cleanups.length;s<i;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,i=this.scopes.length;s<i;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Bn(){return Re}function Xl(e,t=!1){Re&&Re.cleanups.push(e)}let oe;const fi=new WeakSet;class jn{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Re&&Re.active&&Re.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,fi.has(this)&&(fi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Vn(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Br(this),Wn(this);const t=oe,s=He;oe=this,He=!0;try{return this.fn()}finally{Kn(this),oe=t,He=s,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)_r(t);this.deps=this.depsTail=void 0,Br(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?fi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ci(this)&&this.run()}get dirty(){return Ci(this)}}let Un=0,Qt,es;function Vn(e,t=!1){if(e.flags|=8,t){e.next=es,es=e;return}e.next=Qt,Qt=e}function br(){Un++}function vr(){if(--Un>0)return;if(es){let t=es;for(es=void 0;t;){const s=t.next;t.next=void 0,t.flags&=-9,t=s}}let e;for(;Qt;){let t=Qt;for(Qt=void 0;t;){const s=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=s}}if(e)throw e}function Wn(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Kn(e){let t,s=e.depsTail,i=s;for(;i;){const r=i.prevDep;i.version===-1?(i===s&&(s=r),_r(i),Jl(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}e.deps=t,e.depsTail=s}function Ci(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Gn(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Gn(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===us))return;e.globalVersion=us;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Ci(e)){e.flags&=-3;return}const s=oe,i=He;oe=e,He=!0;try{Wn(e);const r=e.fn(e._value);(t.version===0||ft(r,e._value))&&(e._value=r,t.version++)}catch(r){throw t.version++,r}finally{oe=s,He=i,Kn(e),e.flags&=-3}}function _r(e,t=!1){const{dep:s,prevSub:i,nextSub:r}=e;if(i&&(i.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=i,e.nextSub=void 0),s.subs===e&&(s.subs=i,!i&&s.computed)){s.computed.flags&=-5;for(let n=s.computed.deps;n;n=n.nextDep)_r(n,!0)}!t&&!--s.sc&&s.map&&s.map.delete(s.key)}function Jl(e){const{prevDep:t,nextDep:s}=e;t&&(t.nextDep=s,e.prevDep=void 0),s&&(s.prevDep=t,e.nextDep=void 0)}let He=!0;const Yn=[];function mt(){Yn.push(He),He=!1}function bt(){const e=Yn.pop();He=e===void 0?!0:e}function Br(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const s=oe;oe=void 0;try{t()}finally{oe=s}}}let us=0;class Ql{constructor(t,s){this.sub=t,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Qs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!oe||!He||oe===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==oe)s=this.activeLink=new Ql(oe,this),oe.deps?(s.prevDep=oe.depsTail,oe.depsTail.nextDep=s,oe.depsTail=s):oe.deps=oe.depsTail=s,qn(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const i=s.nextDep;i.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=i),s.prevDep=oe.depsTail,s.nextDep=void 0,oe.depsTail.nextDep=s,oe.depsTail=s,oe.deps===s&&(oe.deps=i)}return s}trigger(t){this.version++,us++,this.notify(t)}notify(t){br();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{vr()}}}function qn(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)qn(i)}const s=e.dep.subs;s!==e&&(e.prevSub=s,s&&(s.nextSub=e)),e.dep.subs=e}}const zs=new WeakMap,St=Symbol(""),Pi=Symbol(""),fs=Symbol("");function $e(e,t,s){if(He&&oe){let i=zs.get(e);i||zs.set(e,i=new Map);let r=i.get(s);r||(i.set(s,r=new Qs),r.map=i,r.key=s),r.track()}}function it(e,t,s,i,r,n){const o=zs.get(e);if(!o){us++;return}const l=a=>{a&&a.trigger()};if(br(),t==="clear")o.forEach(l);else{const a=D(e),h=a&&pr(s);if(a&&s==="length"){const f=Number(i);o.forEach((d,g)=>{(g==="length"||g===fs||!gt(g)&&g>=f)&&l(d)})}else switch((s!==void 0||o.has(void 0))&&l(o.get(s)),h&&l(o.get(fs)),t){case"add":a?h&&l(o.get("length")):(l(o.get(St)),Ht(e)&&l(o.get(Pi)));break;case"delete":a||(l(o.get(St)),Ht(e)&&l(o.get(Pi)));break;case"set":Ht(e)&&l(o.get(St));break}}vr()}function ea(e,t){const s=zs.get(e);return s&&s.get(t)}function It(e){const t=G(e);return t===e?t:($e(t,"iterate",fs),De(e)?t:t.map(Ce))}function yr(e){return $e(e=G(e),"iterate",fs),e}const ta={__proto__:null,[Symbol.iterator](){return hi(this,Symbol.iterator,Ce)},concat(...e){return It(this).concat(...e.map(t=>D(t)?It(t):t))},entries(){return hi(this,"entries",e=>(e[1]=Ce(e[1]),e))},every(e,t){return et(this,"every",e,t,void 0,arguments)},filter(e,t){return et(this,"filter",e,t,s=>s.map(Ce),arguments)},find(e,t){return et(this,"find",e,t,Ce,arguments)},findIndex(e,t){return et(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return et(this,"findLast",e,t,Ce,arguments)},findLastIndex(e,t){return et(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return et(this,"forEach",e,t,void 0,arguments)},includes(...e){return di(this,"includes",e)},indexOf(...e){return di(this,"indexOf",e)},join(e){return It(this).join(e)},lastIndexOf(...e){return di(this,"lastIndexOf",e)},map(e,t){return et(this,"map",e,t,void 0,arguments)},pop(){return Kt(this,"pop")},push(...e){return Kt(this,"push",e)},reduce(e,...t){return jr(this,"reduce",e,t)},reduceRight(e,...t){return jr(this,"reduceRight",e,t)},shift(){return Kt(this,"shift")},some(e,t){return et(this,"some",e,t,void 0,arguments)},splice(...e){return Kt(this,"splice",e)},toReversed(){return It(this).toReversed()},toSorted(e){return It(this).toSorted(e)},toSpliced(...e){return It(this).toSpliced(...e)},unshift(...e){return Kt(this,"unshift",e)},values(){return hi(this,"values",Ce)}};function hi(e,t,s){const i=yr(e),r=i[t]();return i!==e&&!De(e)&&(r._next=r.next,r.next=()=>{const n=r._next();return n.value&&(n.value=s(n.value)),n}),r}const sa=Array.prototype;function et(e,t,s,i,r,n){const o=yr(e),l=o!==e&&!De(e),a=o[t];if(a!==sa[t]){const d=a.apply(e,n);return l?Ce(d):d}let h=s;o!==e&&(l?h=function(d,g){return s.call(this,Ce(d),g,e)}:s.length>2&&(h=function(d,g){return s.call(this,d,g,e)}));const f=a.call(o,h,i);return l&&r?r(f):f}function jr(e,t,s,i){const r=yr(e);let n=s;return r!==e&&(De(e)?s.length>3&&(n=function(o,l,a){return s.call(this,o,l,a,e)}):n=function(o,l,a){return s.call(this,o,Ce(l),a,e)}),r[t](n,...i)}function di(e,t,s){const i=G(e);$e(i,"iterate",fs);const r=i[t](...s);return(r===-1||r===!1)&&Sr(s[0])?(s[0]=G(s[0]),i[t](...s)):r}function Kt(e,t,s=[]){mt(),br();const i=G(e)[t].apply(e,s);return vr(),bt(),i}const ia=fr("__proto__,__v_isRef,__isVue"),Zn=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(gt));function ra(e){gt(e)||(e=String(e));const t=G(this);return $e(t,"has",e),t.hasOwnProperty(e)}class Xn{constructor(t=!1,s=!1){this._isReadonly=t,this._isShallow=s}get(t,s,i){if(s==="__v_skip")return t.__v_skip;const r=this._isReadonly,n=this._isShallow;if(s==="__v_isReactive")return!r;if(s==="__v_isReadonly")return r;if(s==="__v_isShallow")return n;if(s==="__v_raw")return i===(r?n?pa:to:n?eo:Qn).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=D(t);if(!r){let a;if(o&&(a=ta[s]))return a;if(s==="hasOwnProperty")return ra}const l=Reflect.get(t,s,he(t)?t:i);return(gt(s)?Zn.has(s):ia(s))||(r||$e(t,"get",s),n)?l:he(l)?o&&pr(s)?l:l.value:ce(l)?r?ei(l):$r(l):l}}class Jn extends Xn{constructor(t=!1){super(!1,t)}set(t,s,i,r){let n=t[s];if(!this._isShallow){const a=Pt(n);if(!De(i)&&!Pt(i)&&(n=G(n),i=G(i)),!D(t)&&he(n)&&!he(i))return a?!1:(n.value=i,!0)}const o=D(t)&&pr(s)?Number(s)<t.length:X(t,s),l=Reflect.set(t,s,i,he(t)?t:r);return t===G(r)&&(o?ft(i,n)&&it(t,"set",s,i):it(t,"add",s,i)),l}deleteProperty(t,s){const i=X(t,s);t[s];const r=Reflect.deleteProperty(t,s);return r&&i&&it(t,"delete",s,void 0),r}has(t,s){const i=Reflect.has(t,s);return(!gt(s)||!Zn.has(s))&&$e(t,"has",s),i}ownKeys(t){return $e(t,"iterate",D(t)?"length":St),Reflect.ownKeys(t)}}class na extends Xn{constructor(t=!1){super(!0,t)}set(t,s){return!0}deleteProperty(t,s){return!0}}const oa=new Jn,la=new na,aa=new Jn(!0);const Mi=e=>e,Es=e=>Reflect.getPrototypeOf(e);function ca(e,t,s){return function(...i){const r=this.__v_raw,n=G(r),o=Ht(n),l=e==="entries"||e===Symbol.iterator&&o,a=e==="keys"&&o,h=r[e](...i),f=s?Mi:t?Ti:Ce;return!t&&$e(n,"iterate",a?Pi:St),{next(){const{value:d,done:g}=h.next();return g?{value:d,done:g}:{value:l?[f(d[0]),f(d[1])]:f(d),done:g}},[Symbol.iterator](){return this}}}}function As(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ua(e,t){const s={get(r){const n=this.__v_raw,o=G(n),l=G(r);e||(ft(r,l)&&$e(o,"get",r),$e(o,"get",l));const{has:a}=Es(o),h=t?Mi:e?Ti:Ce;if(a.call(o,r))return h(n.get(r));if(a.call(o,l))return h(n.get(l));n!==o&&n.get(r)},get size(){const r=this.__v_raw;return!e&&$e(G(r),"iterate",St),Reflect.get(r,"size",r)},has(r){const n=this.__v_raw,o=G(n),l=G(r);return e||(ft(r,l)&&$e(o,"has",r),$e(o,"has",l)),r===l?n.has(r):n.has(r)||n.has(l)},forEach(r,n){const o=this,l=o.__v_raw,a=G(l),h=t?Mi:e?Ti:Ce;return!e&&$e(a,"iterate",St),l.forEach((f,d)=>r.call(n,h(f),h(d),o))}};return Se(s,e?{add:As("add"),set:As("set"),delete:As("delete"),clear:As("clear")}:{add(r){!t&&!De(r)&&!Pt(r)&&(r=G(r));const n=G(this);return Es(n).has.call(n,r)||(n.add(r),it(n,"add",r,r)),this},set(r,n){!t&&!De(n)&&!Pt(n)&&(n=G(n));const o=G(this),{has:l,get:a}=Es(o);let h=l.call(o,r);h||(r=G(r),h=l.call(o,r));const f=a.call(o,r);return o.set(r,n),h?ft(n,f)&&it(o,"set",r,n):it(o,"add",r,n),this},delete(r){const n=G(this),{has:o,get:l}=Es(n);let a=o.call(n,r);a||(r=G(r),a=o.call(n,r)),l&&l.call(n,r);const h=n.delete(r);return a&&it(n,"delete",r,void 0),h},clear(){const r=G(this),n=r.size!==0,o=r.clear();return n&&it(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{s[r]=ca(r,e,t)}),s}function xr(e,t){const s=ua(e,t);return(i,r,n)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?i:Reflect.get(X(s,r)&&r in i?s:i,r,n)}const fa={get:xr(!1,!1)},ha={get:xr(!1,!0)},da={get:xr(!0,!1)};const Qn=new WeakMap,eo=new WeakMap,to=new WeakMap,pa=new WeakMap;function ga(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ma(e){return e.__v_skip||!Object.isExtensible(e)?0:ga(Dl(e))}function $r(e){return Pt(e)?e:wr(e,!1,oa,fa,Qn)}function ba(e){return wr(e,!1,aa,ha,eo)}function ei(e){return wr(e,!0,la,da,to)}function wr(e,t,s,i,r){if(!ce(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const n=r.get(e);if(n)return n;const o=ma(e);if(o===0)return e;const l=new Proxy(e,o===2?i:s);return r.set(e,l),l}function ts(e){return Pt(e)?ts(e.__v_raw):!!(e&&e.__v_isReactive)}function Pt(e){return!!(e&&e.__v_isReadonly)}function De(e){return!!(e&&e.__v_isShallow)}function Sr(e){return e?!!e.__v_raw:!1}function G(e){const t=e&&e.__v_raw;return t?G(t):e}function va(e){return!X(e,"__v_skip")&&Object.isExtensible(e)&&Nn(e,"__v_skip",!0),e}const Ce=e=>ce(e)?$r(e):e,Ti=e=>ce(e)?ei(e):e;function he(e){return e?e.__v_isRef===!0:!1}function hs(e){return so(e,!1)}function Et(e){return so(e,!0)}function so(e,t){return he(e)?e:new _a(e,t)}class _a{constructor(t,s){this.dep=new Qs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?t:G(t),this._value=s?t:Ce(t),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(t){const s=this._rawValue,i=this.__v_isShallow||De(t)||Pt(t);t=i?t:G(t),ft(t,s)&&(this._rawValue=t,this._value=i?t:Ce(t),this.dep.trigger())}}function ds(e){return he(e)?e.value:e}function Ye(e){return z(e)?e():ds(e)}const ya={get:(e,t,s)=>t==="__v_raw"?e:ds(Reflect.get(e,t,s)),set:(e,t,s,i)=>{const r=e[t];return he(r)&&!he(s)?(r.value=s,!0):Reflect.set(e,t,s,i)}};function io(e){return ts(e)?e:new Proxy(e,ya)}class xa{constructor(t){this.__v_isRef=!0,this._value=void 0;const s=this.dep=new Qs,{get:i,set:r}=t(s.track.bind(s),s.trigger.bind(s));this._get=i,this._set=r}get value(){return this._value=this._get()}set value(t){this._set(t)}}function $a(e){return new xa(e)}class wa{constructor(t,s,i){this._object=t,this._key=s,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return ea(G(this._object),this._key)}}class Sa{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Ea(e,t,s){return he(e)?e:z(e)?new Sa(e):ce(e)&&arguments.length>1?Aa(e,t,s):hs(e)}function Aa(e,t,s){const i=e[t];return he(i)?i:new wa(e,t,s)}class Ra{constructor(t,s,i){this.fn=t,this.setter=s,this._value=void 0,this.dep=new Qs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=us-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&oe!==this)return Vn(this,!0),!0}get value(){const t=this.dep.track();return Gn(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ca(e,t,s=!1){let i,r;return z(e)?i=e:(i=e.get,r=e.set),new Ra(i,r,s)}const Rs={},Hs=new WeakMap;let $t;function Pa(e,t=!1,s=$t){if(s){let i=Hs.get(s);i||Hs.set(s,i=[]),i.push(e)}}function Ma(e,t,s=ie){const{immediate:i,deep:r,once:n,scheduler:o,augmentJob:l,call:a}=s,h=R=>r?R:De(R)||r===!1||r===0?ct(R,1):ct(R);let f,d,g,x,C=!1,O=!1;if(he(e)?(d=()=>e.value,C=De(e)):ts(e)?(d=()=>h(e),C=!0):D(e)?(O=!0,C=e.some(R=>ts(R)||De(R)),d=()=>e.map(R=>{if(he(R))return R.value;if(ts(R))return h(R);if(z(R))return a?a(R,2):R()})):z(e)?t?d=a?()=>a(e,2):e:d=()=>{if(g){mt();try{g()}finally{bt()}}const R=$t;$t=f;try{return a?a(e,3,[x]):e(x)}finally{$t=R}}:d=Ge,t&&r){const R=d,q=r===!0?1/0:r;d=()=>ct(R(),q)}const Q=Bn(),j=()=>{f.stop(),Q&&Q.active&&dr(Q.effects,f)};if(n&&t){const R=t;t=(...q)=>{R(...q),j()}}let Y=O?new Array(e.length).fill(Rs):Rs;const V=R=>{if(!(!(f.flags&1)||!f.dirty&&!R))if(t){const q=f.run();if(r||C||(O?q.some((fe,re)=>ft(fe,Y[re])):ft(q,Y))){g&&g();const fe=$t;$t=f;try{const re=[q,Y===Rs?void 0:O&&Y[0]===Rs?[]:Y,x];a?a(t,3,re):t(...re),Y=q}finally{$t=fe}}}else f.run()};return l&&l(V),f=new jn(d),f.scheduler=o?()=>o(V,!1):V,x=R=>Pa(R,!1,f),g=f.onStop=()=>{const R=Hs.get(f);if(R){if(a)a(R,4);else for(const q of R)q();Hs.delete(f)}},t?i?V(!0):Y=f.run():o?o(V.bind(null,!0),!0):f.run(),j.pause=f.pause.bind(f),j.resume=f.resume.bind(f),j.stop=j,j}function ct(e,t=1/0,s){if(t<=0||!ce(e)||e.__v_skip||(s=s||new Set,s.has(e)))return e;if(s.add(e),t--,he(e))ct(e.value,t,s);else if(D(e))for(let i=0;i<e.length;i++)ct(e[i],t,s);else if(Tn(e)||Ht(e))e.forEach(i=>{ct(i,t,s)});else if(kn(e)){for(const i in e)ct(e[i],t,s);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&ct(e[i],t,s)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $s(e,t,s,i){try{return i?e(...i):e()}catch(r){ti(r,t,s)}}function Ze(e,t,s,i){if(z(e)){const r=$s(e,t,s,i);return r&&On(r)&&r.catch(n=>{ti(n,t,s)}),r}if(D(e)){const r=[];for(let n=0;n<e.length;n++)r.push(Ze(e[n],t,s,i));return r}}function ti(e,t,s,i=!0){const r=t?t.vnode:null,{errorHandler:n,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ie;if(t){let l=t.parent;const a=t.proxy,h=`https://vuejs.org/error-reference/#runtime-${s}`;for(;l;){const f=l.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](e,a,h)===!1)return}l=l.parent}if(n){mt(),$s(n,null,10,[e,a,h]),bt();return}}Ta(e,s,r,i,o)}function Ta(e,t,s,i=!0,r=!1){if(r)throw e;console.error(e)}const Pe=[];let We=-1;const Dt=[];let lt=null,Nt=0;const ro=Promise.resolve();let Ds=null;function Er(e){const t=Ds||ro;return e?t.then(this?e.bind(this):e):t}function Oa(e){let t=We+1,s=Pe.length;for(;t<s;){const i=t+s>>>1,r=Pe[i],n=ps(r);n<e||n===e&&r.flags&2?t=i+1:s=i}return t}function Ar(e){if(!(e.flags&1)){const t=ps(e),s=Pe[Pe.length-1];!s||!(e.flags&2)&&t>=ps(s)?Pe.push(e):Pe.splice(Oa(t),0,e),e.flags|=1,no()}}function no(){Ds||(Ds=ro.then(lo))}function La(e){D(e)?Dt.push(...e):lt&&e.id===-1?lt.splice(Nt+1,0,e):e.flags&1||(Dt.push(e),e.flags|=1),no()}function Ur(e,t,s=We+1){for(;s<Pe.length;s++){const i=Pe[s];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;Pe.splice(s,1),s--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function oo(e){if(Dt.length){const t=[...new Set(Dt)].sort((s,i)=>ps(s)-ps(i));if(Dt.length=0,lt){lt.push(...t);return}for(lt=t,Nt=0;Nt<lt.length;Nt++){const s=lt[Nt];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}lt=null,Nt=0}}const ps=e=>e.id==null?e.flags&2?-1:1/0:e.id;function lo(e){try{for(We=0;We<Pe.length;We++){const t=Pe[We];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),$s(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;We<Pe.length;We++){const t=Pe[We];t&&(t.flags&=-2)}We=-1,Pe.length=0,oo(),Ds=null,(Pe.length||Dt.length)&&lo()}}let Fe=null,ao=null;function Bs(e){const t=Fe;return Fe=e,ao=e&&e.type.__scopeId||null,t}function ka(e,t=Fe,s){if(!t||e._n)return e;const i=(...r)=>{i._d&&Jr(-1);const n=Bs(t);let o;try{o=e(...r)}finally{Bs(n),i._d&&Jr(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function _t(e,t,s,i){const r=e.dirs,n=t&&t.dirs;for(let o=0;o<r.length;o++){const l=r[o];n&&(l.oldValue=n[o].value);let a=l.dir[i];a&&(mt(),Ze(a,s,8,[e.el,l,e,t]),bt())}}const Ia=Symbol("_vte"),Na=e=>e.__isTeleport;function Rr(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Rr(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Fa(e,t){return z(e)?Se({name:e.name},t,{setup:e}):e}function co(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function za(e){const t=oi(),s=Et(null);if(t){const r=t.refs===ie?t.refs={}:t.refs;Object.defineProperty(r,e,{enumerable:!0,get:()=>s.value,set:n=>s.value=n})}return s}function js(e,t,s,i,r=!1){if(D(e)){e.forEach((C,O)=>js(C,t&&(D(t)?t[O]:t),s,i,r));return}if(ss(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&js(e,t,s,i.component.subTree);return}const n=i.shapeFlag&4?Tr(i.component):i.el,o=r?null:n,{i:l,r:a}=e,h=t&&t.r,f=l.refs===ie?l.refs={}:l.refs,d=l.setupState,g=G(d),x=d===ie?()=>!1:C=>X(g,C);if(h!=null&&h!==a&&(de(h)?(f[h]=null,x(h)&&(d[h]=null)):he(h)&&(h.value=null)),z(a))$s(a,l,12,[o,f]);else{const C=de(a),O=he(a);if(C||O){const Q=()=>{if(e.f){const j=C?x(a)?d[a]:f[a]:a.value;r?D(j)&&dr(j,n):D(j)?j.includes(n)||j.push(n):C?(f[a]=[n],x(a)&&(d[a]=f[a])):(a.value=[n],e.k&&(f[e.k]=a.value))}else C?(f[a]=o,x(a)&&(d[a]=o)):O&&(a.value=o,e.k&&(f[e.k]=o))};o?(Q.id=-1,ke(Q,s)):Q()}}}Js().requestIdleCallback;Js().cancelIdleCallback;const ss=e=>!!e.type.__asyncLoader,uo=e=>e.type.__isKeepAlive;function Ha(e,t){fo(e,"a",t)}function Da(e,t){fo(e,"da",t)}function fo(e,t,s=ye){const i=e.__wdc||(e.__wdc=()=>{let r=s;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(si(t,i,s),s){let r=s.parent;for(;r&&r.parent;)uo(r.parent.vnode)&&Ba(i,t,s,r),r=r.parent}}function Ba(e,t,s,i){const r=si(t,e,i,!0);ho(()=>{dr(i[t],r)},s)}function si(e,t,s=ye,i=!1){if(s){const r=s[e]||(s[e]=[]),n=t.__weh||(t.__weh=(...o)=>{mt();const l=ws(s),a=Ze(t,s,e,o);return l(),bt(),a});return i?r.unshift(n):r.push(n),n}}const rt=e=>(t,s=ye)=>{(!bs||e==="sp")&&si(e,(...i)=>t(...i),s)},ja=rt("bm"),ii=rt("m"),Ua=rt("bu"),Va=rt("u"),Wa=rt("bum"),ho=rt("um"),Ka=rt("sp"),Ga=rt("rtg"),Ya=rt("rtc");function qa(e,t=ye){si("ec",e,t)}const Za=Symbol.for("v-ndc"),Oi=e=>e?ko(e)?Tr(e):Oi(e.parent):null,is=Se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Oi(e.parent),$root:e=>Oi(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>go(e),$forceUpdate:e=>e.f||(e.f=()=>{Ar(e.update)}),$nextTick:e=>e.n||(e.n=Er.bind(e.proxy)),$watch:e=>_c.bind(e)}),pi=(e,t)=>e!==ie&&!e.__isScriptSetup&&X(e,t),Xa={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:s,setupState:i,data:r,props:n,accessCache:o,type:l,appContext:a}=e;let h;if(t[0]!=="$"){const x=o[t];if(x!==void 0)switch(x){case 1:return i[t];case 2:return r[t];case 4:return s[t];case 3:return n[t]}else{if(pi(i,t))return o[t]=1,i[t];if(r!==ie&&X(r,t))return o[t]=2,r[t];if((h=e.propsOptions[0])&&X(h,t))return o[t]=3,n[t];if(s!==ie&&X(s,t))return o[t]=4,s[t];Li&&(o[t]=0)}}const f=is[t];let d,g;if(f)return t==="$attrs"&&$e(e.attrs,"get",""),f(e);if((d=l.__cssModules)&&(d=d[t]))return d;if(s!==ie&&X(s,t))return o[t]=4,s[t];if(g=a.config.globalProperties,X(g,t))return g[t]},set({_:e},t,s){const{data:i,setupState:r,ctx:n}=e;return pi(r,t)?(r[t]=s,!0):i!==ie&&X(i,t)?(i[t]=s,!0):X(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(n[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:i,appContext:r,propsOptions:n}},o){let l;return!!s[o]||e!==ie&&X(e,o)||pi(t,o)||(l=n[0])&&X(l,o)||X(i,o)||X(is,o)||X(r.config.globalProperties,o)},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:X(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};function Vr(e){return D(e)?e.reduce((t,s)=>(t[s]=null,t),{}):e}let Li=!0;function Ja(e){const t=go(e),s=e.proxy,i=e.ctx;Li=!1,t.beforeCreate&&Wr(t.beforeCreate,e,"bc");const{data:r,computed:n,methods:o,watch:l,provide:a,inject:h,created:f,beforeMount:d,mounted:g,beforeUpdate:x,updated:C,activated:O,deactivated:Q,beforeDestroy:j,beforeUnmount:Y,destroyed:V,unmounted:R,render:q,renderTracked:fe,renderTriggered:re,errorCaptured:xe,serverPrefetch:pe,expose:ve,inheritAttrs:H,components:se,directives:ae,filters:Vt}=t;if(h&&Qa(h,i,null),o)for(const le in o){const Z=o[le];z(Z)&&(i[le]=Z.bind(s))}if(r){const le=r.call(s,s);ce(le)&&(e.data=$r(le))}if(Li=!0,n)for(const le in n){const Z=n[le],Xe=z(Z)?Z.bind(s,s):z(Z.get)?Z.get.bind(s,s):Ge,nt=!z(Z)&&z(Z.set)?Z.set.bind(s):Ge,Je=qe({get:Xe,set:nt});Object.defineProperty(i,le,{enumerable:!0,configurable:!0,get:()=>Je.value,set:m=>Je.value=m})}if(l)for(const le in l)po(l[le],i,s,le);if(a){const le=z(a)?a.call(s):a;Reflect.ownKeys(le).forEach(Z=>{nc(Z,le[Z])})}f&&Wr(f,e,"c");function _e(le,Z){D(Z)?Z.forEach(Xe=>le(Xe.bind(s))):Z&&le(Z.bind(s))}if(_e(ja,d),_e(ii,g),_e(Ua,x),_e(Va,C),_e(Ha,O),_e(Da,Q),_e(qa,xe),_e(Ya,fe),_e(Ga,re),_e(Wa,Y),_e(ho,R),_e(Ka,pe),D(ve))if(ve.length){const le=e.exposed||(e.exposed={});ve.forEach(Z=>{Object.defineProperty(le,Z,{get:()=>s[Z],set:Xe=>s[Z]=Xe})})}else e.exposed||(e.exposed={});q&&e.render===Ge&&(e.render=q),H!=null&&(e.inheritAttrs=H),se&&(e.components=se),ae&&(e.directives=ae),pe&&co(e)}function Qa(e,t,s=Ge){D(e)&&(e=ki(e));for(const i in e){const r=e[i];let n;ce(r)?"default"in r?n=rs(r.from||i,r.default,!0):n=rs(r.from||i):n=rs(r),he(n)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>n.value,set:o=>n.value=o}):t[i]=n}}function Wr(e,t,s){Ze(D(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,s)}function po(e,t,s,i){let r=i.includes(".")?Po(s,i):()=>s[i];if(de(e)){const n=t[e];z(n)&&ht(r,n)}else if(z(e))ht(r,e.bind(s));else if(ce(e))if(D(e))e.forEach(n=>po(n,t,s,i));else{const n=z(e.handler)?e.handler.bind(s):t[e.handler];z(n)&&ht(r,n,e)}}function go(e){const t=e.type,{mixins:s,extends:i}=t,{mixins:r,optionsCache:n,config:{optionMergeStrategies:o}}=e.appContext,l=n.get(t);let a;return l?a=l:!r.length&&!s&&!i?a=t:(a={},r.length&&r.forEach(h=>Us(a,h,o,!0)),Us(a,t,o)),ce(t)&&n.set(t,a),a}function Us(e,t,s,i=!1){const{mixins:r,extends:n}=t;n&&Us(e,n,s,!0),r&&r.forEach(o=>Us(e,o,s,!0));for(const o in t)if(!(i&&o==="expose")){const l=ec[o]||s&&s[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const ec={data:Kr,props:Gr,emits:Gr,methods:qt,computed:qt,beforeCreate:Ee,created:Ee,beforeMount:Ee,mounted:Ee,beforeUpdate:Ee,updated:Ee,beforeDestroy:Ee,beforeUnmount:Ee,destroyed:Ee,unmounted:Ee,activated:Ee,deactivated:Ee,errorCaptured:Ee,serverPrefetch:Ee,components:qt,directives:qt,watch:sc,provide:Kr,inject:tc};function Kr(e,t){return t?e?function(){return Se(z(e)?e.call(this,this):e,z(t)?t.call(this,this):t)}:t:e}function tc(e,t){return qt(ki(e),ki(t))}function ki(e){if(D(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function Ee(e,t){return e?[...new Set([].concat(e,t))]:t}function qt(e,t){return e?Se(Object.create(null),e,t):t}function Gr(e,t){return e?D(e)&&D(t)?[...new Set([...e,...t])]:Se(Object.create(null),Vr(e),Vr(t??{})):t}function sc(e,t){if(!e)return t;if(!t)return e;const s=Se(Object.create(null),e);for(const i in t)s[i]=Ee(e[i],t[i]);return s}function mo(){return{app:null,config:{isNativeTag:zl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ic=0;function rc(e,t){return function(i,r=null){z(i)||(i=Se({},i)),r!=null&&!ce(r)&&(r=null);const n=mo(),o=new WeakSet,l=[];let a=!1;const h=n.app={_uid:ic++,_component:i,_props:r,_container:null,_context:n,_instance:null,version:jc,get config(){return n.config},set config(f){},use(f,...d){return o.has(f)||(f&&z(f.install)?(o.add(f),f.install(h,...d)):z(f)&&(o.add(f),f(h,...d))),h},mixin(f){return n.mixins.includes(f)||n.mixins.push(f),h},component(f,d){return d?(n.components[f]=d,h):n.components[f]},directive(f,d){return d?(n.directives[f]=d,h):n.directives[f]},mount(f,d,g){if(!a){const x=h._ceVNode||Rt(i,r);return x.appContext=n,g===!0?g="svg":g===!1&&(g=void 0),e(x,f,g),a=!0,h._container=f,f.__vue_app__=h,Tr(x.component)}},onUnmount(f){l.push(f)},unmount(){a&&(Ze(l,h._instance,16),e(null,h._container),delete h._container.__vue_app__)},provide(f,d){return n.provides[f]=d,h},runWithContext(f){const d=At;At=h;try{return f()}finally{At=d}}};return h}}let At=null;function nc(e,t){if(ye){let s=ye.provides;const i=ye.parent&&ye.parent.provides;i===s&&(s=ye.provides=Object.create(i)),s[e]=t}}function rs(e,t,s=!1){const i=ye||Fe;if(i||At){const r=At?At._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return s&&z(t)?t.call(i&&i.proxy):t}}function bo(){return!!(ye||Fe||At)}const vo={},_o=()=>Object.create(vo),yo=e=>Object.getPrototypeOf(e)===vo;function oc(e,t,s,i=!1){const r={},n=_o();e.propsDefaults=Object.create(null),xo(e,t,r,n);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);s?e.props=i?r:ba(r):e.type.props?e.props=r:e.props=n,e.attrs=n}function lc(e,t,s,i){const{props:r,attrs:n,vnode:{patchFlag:o}}=e,l=G(r),[a]=e.propsOptions;let h=!1;if((i||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let g=f[d];if(ri(e.emitsOptions,g))continue;const x=t[g];if(a)if(X(n,g))x!==n[g]&&(n[g]=x,h=!0);else{const C=pt(g);r[C]=Ii(a,l,C,x,e,!1)}else x!==n[g]&&(n[g]=x,h=!0)}}}else{xo(e,t,r,n)&&(h=!0);let f;for(const d in l)(!t||!X(t,d)&&((f=kt(d))===d||!X(t,f)))&&(a?s&&(s[d]!==void 0||s[f]!==void 0)&&(r[d]=Ii(a,l,d,void 0,e,!0)):delete r[d]);if(n!==l)for(const d in n)(!t||!X(t,d))&&(delete n[d],h=!0)}h&&it(e.attrs,"set","")}function xo(e,t,s,i){const[r,n]=e.propsOptions;let o=!1,l;if(t)for(let a in t){if(Jt(a))continue;const h=t[a];let f;r&&X(r,f=pt(a))?!n||!n.includes(f)?s[f]=h:(l||(l={}))[f]=h:ri(e.emitsOptions,a)||(!(a in i)||h!==i[a])&&(i[a]=h,o=!0)}if(n){const a=G(s),h=l||ie;for(let f=0;f<n.length;f++){const d=n[f];s[d]=Ii(r,a,d,h[d],e,!X(h,d))}}return o}function Ii(e,t,s,i,r,n){const o=e[s];if(o!=null){const l=X(o,"default");if(l&&i===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&z(a)){const{propsDefaults:h}=r;if(s in h)i=h[s];else{const f=ws(r);i=h[s]=a.call(null,t),f()}}else i=a;r.ce&&r.ce._setProp(s,i)}o[0]&&(n&&!l?i=!1:o[1]&&(i===""||i===kt(s))&&(i=!0))}return i}const ac=new WeakMap;function $o(e,t,s=!1){const i=s?ac:t.propsCache,r=i.get(e);if(r)return r;const n=e.props,o={},l=[];let a=!1;if(!z(e)){const f=d=>{a=!0;const[g,x]=$o(d,t,!0);Se(o,g),x&&l.push(...x)};!s&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!n&&!a)return ce(e)&&i.set(e,zt),zt;if(D(n))for(let f=0;f<n.length;f++){const d=pt(n[f]);Yr(d)&&(o[d]=ie)}else if(n)for(const f in n){const d=pt(f);if(Yr(d)){const g=n[f],x=o[d]=D(g)||z(g)?{type:g}:Se({},g),C=x.type;let O=!1,Q=!0;if(D(C))for(let j=0;j<C.length;++j){const Y=C[j],V=z(Y)&&Y.name;if(V==="Boolean"){O=!0;break}else V==="String"&&(Q=!1)}else O=z(C)&&C.name==="Boolean";x[0]=O,x[1]=Q,(O||X(x,"default"))&&l.push(d)}}const h=[o,l];return ce(e)&&i.set(e,h),h}function Yr(e){return e[0]!=="$"&&!Jt(e)}const wo=e=>e[0]==="_"||e==="$stable",Cr=e=>D(e)?e.map(Ke):[Ke(e)],cc=(e,t,s)=>{if(t._n)return t;const i=ka((...r)=>Cr(t(...r)),s);return i._c=!1,i},So=(e,t,s)=>{const i=e._ctx;for(const r in e){if(wo(r))continue;const n=e[r];if(z(n))t[r]=cc(r,n,i);else if(n!=null){const o=Cr(n);t[r]=()=>o}}},Eo=(e,t)=>{const s=Cr(t);e.slots.default=()=>s},Ao=(e,t,s)=>{for(const i in t)(s||i!=="_")&&(e[i]=t[i])},uc=(e,t,s)=>{const i=e.slots=_o();if(e.vnode.shapeFlag&32){const r=t._;r?(Ao(i,t,s),s&&Nn(i,"_",r,!0)):So(t,i)}else t&&Eo(e,t)},fc=(e,t,s)=>{const{vnode:i,slots:r}=e;let n=!0,o=ie;if(i.shapeFlag&32){const l=t._;l?s&&l===1?n=!1:Ao(r,t,s):(n=!t.$stable,So(t,r)),o=t}else t&&(Eo(e,t),o={default:1});if(n)for(const l in r)!wo(l)&&o[l]==null&&delete r[l]},ke=Ac;function hc(e){return dc(e)}function dc(e,t){const s=Js();s.__VUE__=!0;const{insert:i,remove:r,patchProp:n,createElement:o,createText:l,createComment:a,setText:h,setElementText:f,parentNode:d,nextSibling:g,setScopeId:x=Ge,insertStaticContent:C}=e,O=(c,u,p,v=null,b=null,_=null,S=void 0,w=null,$=!!u.dynamicChildren)=>{if(c===u)return;c&&!Gt(c,u)&&(v=W(c),m(c,b,_,!0),c=null),u.patchFlag===-2&&($=!1,u.dynamicChildren=null);const{type:y,ref:L,shapeFlag:E}=u;switch(y){case ni:Q(c,u,p,v);break;case gs:j(c,u,p,v);break;case mi:c==null&&Y(u,p,v,S);break;case st:se(c,u,p,v,b,_,S,w,$);break;default:E&1?q(c,u,p,v,b,_,S,w,$):E&6?ae(c,u,p,v,b,_,S,w,$):(E&64||E&128)&&y.process(c,u,p,v,b,_,S,w,$,vt)}L!=null&&b&&js(L,c&&c.ref,_,u||c,!u)},Q=(c,u,p,v)=>{if(c==null)i(u.el=l(u.children),p,v);else{const b=u.el=c.el;u.children!==c.children&&h(b,u.children)}},j=(c,u,p,v)=>{c==null?i(u.el=a(u.children||""),p,v):u.el=c.el},Y=(c,u,p,v)=>{[c.el,c.anchor]=C(c.children,u,p,v,c.el,c.anchor)},V=({el:c,anchor:u},p,v)=>{let b;for(;c&&c!==u;)b=g(c),i(c,p,v),c=b;i(u,p,v)},R=({el:c,anchor:u})=>{let p;for(;c&&c!==u;)p=g(c),r(c),c=p;r(u)},q=(c,u,p,v,b,_,S,w,$)=>{u.type==="svg"?S="svg":u.type==="math"&&(S="mathml"),c==null?fe(u,p,v,b,_,S,w,$):pe(c,u,b,_,S,w,$)},fe=(c,u,p,v,b,_,S,w)=>{let $,y;const{props:L,shapeFlag:E,transition:M,dirs:F}=c;if($=c.el=o(c.type,_,L&&L.is,L),E&8?f($,c.children):E&16&&xe(c.children,$,null,v,b,gi(c,_),S,w),F&&_t(c,null,v,"created"),re($,c,c.scopeId,S,v),L){for(const ne in L)ne!=="value"&&!Jt(ne)&&n($,ne,null,L[ne],_,v);"value"in L&&n($,"value",null,L.value,_),(y=L.onVnodeBeforeMount)&&Ve(y,v,c)}F&&_t(c,null,v,"beforeMount");const U=pc(b,M);U&&M.beforeEnter($),i($,u,p),((y=L&&L.onVnodeMounted)||U||F)&&ke(()=>{y&&Ve(y,v,c),U&&M.enter($),F&&_t(c,null,v,"mounted")},b)},re=(c,u,p,v,b)=>{if(p&&x(c,p),v)for(let _=0;_<v.length;_++)x(c,v[_]);if(b){let _=b.subTree;if(u===_||To(_.type)&&(_.ssContent===u||_.ssFallback===u)){const S=b.vnode;re(c,S,S.scopeId,S.slotScopeIds,b.parent)}}},xe=(c,u,p,v,b,_,S,w,$=0)=>{for(let y=$;y<c.length;y++){const L=c[y]=w?at(c[y]):Ke(c[y]);O(null,L,u,p,v,b,_,S,w)}},pe=(c,u,p,v,b,_,S)=>{const w=u.el=c.el;let{patchFlag:$,dynamicChildren:y,dirs:L}=u;$|=c.patchFlag&16;const E=c.props||ie,M=u.props||ie;let F;if(p&&yt(p,!1),(F=M.onVnodeBeforeUpdate)&&Ve(F,p,u,c),L&&_t(u,c,p,"beforeUpdate"),p&&yt(p,!0),(E.innerHTML&&M.innerHTML==null||E.textContent&&M.textContent==null)&&f(w,""),y?ve(c.dynamicChildren,y,w,p,v,gi(u,b),_):S||Z(c,u,w,null,p,v,gi(u,b),_,!1),$>0){if($&16)H(w,E,M,p,b);else if($&2&&E.class!==M.class&&n(w,"class",null,M.class,b),$&4&&n(w,"style",E.style,M.style,b),$&8){const U=u.dynamicProps;for(let ne=0;ne<U.length;ne++){const te=U[ne],Oe=E[te],Me=M[te];(Me!==Oe||te==="value")&&n(w,te,Oe,Me,b,p)}}$&1&&c.children!==u.children&&f(w,u.children)}else!S&&y==null&&H(w,E,M,p,b);((F=M.onVnodeUpdated)||L)&&ke(()=>{F&&Ve(F,p,u,c),L&&_t(u,c,p,"updated")},v)},ve=(c,u,p,v,b,_,S)=>{for(let w=0;w<u.length;w++){const $=c[w],y=u[w],L=$.el&&($.type===st||!Gt($,y)||$.shapeFlag&70)?d($.el):p;O($,y,L,null,v,b,_,S,!0)}},H=(c,u,p,v,b)=>{if(u!==p){if(u!==ie)for(const _ in u)!Jt(_)&&!(_ in p)&&n(c,_,u[_],null,b,v);for(const _ in p){if(Jt(_))continue;const S=p[_],w=u[_];S!==w&&_!=="value"&&n(c,_,w,S,b,v)}"value"in p&&n(c,"value",u.value,p.value,b)}},se=(c,u,p,v,b,_,S,w,$)=>{const y=u.el=c?c.el:l(""),L=u.anchor=c?c.anchor:l("");let{patchFlag:E,dynamicChildren:M,slotScopeIds:F}=u;F&&(w=w?w.concat(F):F),c==null?(i(y,p,v),i(L,p,v),xe(u.children||[],p,L,b,_,S,w,$)):E>0&&E&64&&M&&c.dynamicChildren?(ve(c.dynamicChildren,M,p,b,_,S,w),(u.key!=null||b&&u===b.subTree)&&Ro(c,u,!0)):Z(c,u,p,L,b,_,S,w,$)},ae=(c,u,p,v,b,_,S,w,$)=>{u.slotScopeIds=w,c==null?u.shapeFlag&512?b.ctx.activate(u,p,v,S,$):Vt(u,p,v,b,_,S,$):Ss(c,u,$)},Vt=(c,u,p,v,b,_,S)=>{const w=c.component=Nc(c,v,b);if(uo(c)&&(w.ctx.renderer=vt),Fc(w,!1,S),w.asyncDep){if(b&&b.registerDep(w,_e,S),!c.el){const $=w.subTree=Rt(gs);j(null,$,u,p)}}else _e(w,c,u,p,b,_,S)},Ss=(c,u,p)=>{const v=u.component=c.component;if(Sc(c,u,p))if(v.asyncDep&&!v.asyncResolved){le(v,u,p);return}else v.next=u,v.update();else u.el=c.el,v.vnode=u},_e=(c,u,p,v,b,_,S)=>{const w=()=>{if(c.isMounted){let{next:E,bu:M,u:F,parent:U,vnode:ne}=c;{const je=Co(c);if(je){E&&(E.el=ne.el,le(c,E,S)),je.asyncDep.then(()=>{c.isUnmounted||w()});return}}let te=E,Oe;yt(c,!1),E?(E.el=ne.el,le(c,E,S)):E=ne,M&&ci(M),(Oe=E.props&&E.props.onVnodeBeforeUpdate)&&Ve(Oe,U,E,ne),yt(c,!0);const Me=Zr(c),Be=c.subTree;c.subTree=Me,O(Be,Me,d(Be.el),W(Be),c,b,_),E.el=Me.el,te===null&&Ec(c,Me.el),F&&ke(F,b),(Oe=E.props&&E.props.onVnodeUpdated)&&ke(()=>Ve(Oe,U,E,ne),b)}else{let E;const{el:M,props:F}=u,{bm:U,m:ne,parent:te,root:Oe,type:Me}=c,Be=ss(u);yt(c,!1),U&&ci(U),!Be&&(E=F&&F.onVnodeBeforeMount)&&Ve(E,te,u),yt(c,!0);{Oe.ce&&Oe.ce._injectChildStyle(Me);const je=c.subTree=Zr(c);O(null,je,p,v,c,b,_),u.el=je.el}if(ne&&ke(ne,b),!Be&&(E=F&&F.onVnodeMounted)){const je=u;ke(()=>Ve(E,te,je),b)}(u.shapeFlag&256||te&&ss(te.vnode)&&te.vnode.shapeFlag&256)&&c.a&&ke(c.a,b),c.isMounted=!0,u=p=v=null}};c.scope.on();const $=c.effect=new jn(w);c.scope.off();const y=c.update=$.run.bind($),L=c.job=$.runIfDirty.bind($);L.i=c,L.id=c.uid,$.scheduler=()=>Ar(L),yt(c,!0),y()},le=(c,u,p)=>{u.component=c;const v=c.vnode.props;c.vnode=u,c.next=null,lc(c,u.props,v,p),fc(c,u.children,p),mt(),Ur(c),bt()},Z=(c,u,p,v,b,_,S,w,$=!1)=>{const y=c&&c.children,L=c?c.shapeFlag:0,E=u.children,{patchFlag:M,shapeFlag:F}=u;if(M>0){if(M&128){nt(y,E,p,v,b,_,S,w,$);return}else if(M&256){Xe(y,E,p,v,b,_,S,w,$);return}}F&8?(L&16&&ee(y,b,_),E!==y&&f(p,E)):L&16?F&16?nt(y,E,p,v,b,_,S,w,$):ee(y,b,_,!0):(L&8&&f(p,""),F&16&&xe(E,p,v,b,_,S,w,$))},Xe=(c,u,p,v,b,_,S,w,$)=>{c=c||zt,u=u||zt;const y=c.length,L=u.length,E=Math.min(y,L);let M;for(M=0;M<E;M++){const F=u[M]=$?at(u[M]):Ke(u[M]);O(c[M],F,p,null,b,_,S,w,$)}y>L?ee(c,b,_,!0,!1,E):xe(u,p,v,b,_,S,w,$,E)},nt=(c,u,p,v,b,_,S,w,$)=>{let y=0;const L=u.length;let E=c.length-1,M=L-1;for(;y<=E&&y<=M;){const F=c[y],U=u[y]=$?at(u[y]):Ke(u[y]);if(Gt(F,U))O(F,U,p,null,b,_,S,w,$);else break;y++}for(;y<=E&&y<=M;){const F=c[E],U=u[M]=$?at(u[M]):Ke(u[M]);if(Gt(F,U))O(F,U,p,null,b,_,S,w,$);else break;E--,M--}if(y>E){if(y<=M){const F=M+1,U=F<L?u[F].el:v;for(;y<=M;)O(null,u[y]=$?at(u[y]):Ke(u[y]),p,U,b,_,S,w,$),y++}}else if(y>M)for(;y<=E;)m(c[y],b,_,!0),y++;else{const F=y,U=y,ne=new Map;for(y=U;y<=M;y++){const Le=u[y]=$?at(u[y]):Ke(u[y]);Le.key!=null&&ne.set(Le.key,y)}let te,Oe=0;const Me=M-U+1;let Be=!1,je=0;const Wt=new Array(Me);for(y=0;y<Me;y++)Wt[y]=0;for(y=F;y<=E;y++){const Le=c[y];if(Oe>=Me){m(Le,b,_,!0);continue}let Ue;if(Le.key!=null)Ue=ne.get(Le.key);else for(te=U;te<=M;te++)if(Wt[te-U]===0&&Gt(Le,u[te])){Ue=te;break}Ue===void 0?m(Le,b,_,!0):(Wt[Ue-U]=y+1,Ue>=je?je=Ue:Be=!0,O(Le,u[Ue],p,null,b,_,S,w,$),Oe++)}const zr=Be?gc(Wt):zt;for(te=zr.length-1,y=Me-1;y>=0;y--){const Le=U+y,Ue=u[Le],Hr=Le+1<L?u[Le+1].el:v;Wt[y]===0?O(null,Ue,p,Hr,b,_,S,w,$):Be&&(te<0||y!==zr[te]?Je(Ue,p,Hr,2):te--)}}},Je=(c,u,p,v,b=null)=>{const{el:_,type:S,transition:w,children:$,shapeFlag:y}=c;if(y&6){Je(c.component.subTree,u,p,v);return}if(y&128){c.suspense.move(u,p,v);return}if(y&64){S.move(c,u,p,vt);return}if(S===st){i(_,u,p);for(let E=0;E<$.length;E++)Je($[E],u,p,v);i(c.anchor,u,p);return}if(S===mi){V(c,u,p);return}if(v!==2&&y&1&&w)if(v===0)w.beforeEnter(_),i(_,u,p),ke(()=>w.enter(_),b);else{const{leave:E,delayLeave:M,afterLeave:F}=w,U=()=>i(_,u,p),ne=()=>{E(_,()=>{U(),F&&F()})};M?M(_,U,ne):ne()}else i(_,u,p)},m=(c,u,p,v=!1,b=!1)=>{const{type:_,props:S,ref:w,children:$,dynamicChildren:y,shapeFlag:L,patchFlag:E,dirs:M,cacheIndex:F}=c;if(E===-2&&(b=!1),w!=null&&js(w,null,p,c,!0),F!=null&&(u.renderCache[F]=void 0),L&256){u.ctx.deactivate(c);return}const U=L&1&&M,ne=!ss(c);let te;if(ne&&(te=S&&S.onVnodeBeforeUnmount)&&Ve(te,u,c),L&6)N(c.component,p,v);else{if(L&128){c.suspense.unmount(p,v);return}U&&_t(c,null,u,"beforeUnmount"),L&64?c.type.remove(c,u,p,vt,v):y&&!y.hasOnce&&(_!==st||E>0&&E&64)?ee(y,u,p,!1,!0):(_===st&&E&384||!b&&L&16)&&ee($,u,p),v&&P(c)}(ne&&(te=S&&S.onVnodeUnmounted)||U)&&ke(()=>{te&&Ve(te,u,c),U&&_t(c,null,u,"unmounted")},p)},P=c=>{const{type:u,el:p,anchor:v,transition:b}=c;if(u===st){k(p,v);return}if(u===mi){R(c);return}const _=()=>{r(p),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(c.shapeFlag&1&&b&&!b.persisted){const{leave:S,delayLeave:w}=b,$=()=>S(p,_);w?w(c.el,_,$):$()}else _()},k=(c,u)=>{let p;for(;c!==u;)p=g(c),r(c),c=p;r(u)},N=(c,u,p)=>{const{bum:v,scope:b,job:_,subTree:S,um:w,m:$,a:y}=c;qr($),qr(y),v&&ci(v),b.stop(),_&&(_.flags|=8,m(S,c,u,p)),w&&ke(w,u),ke(()=>{c.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},ee=(c,u,p,v=!1,b=!1,_=0)=>{for(let S=_;S<c.length;S++)m(c[S],u,p,v,b)},W=c=>{if(c.shapeFlag&6)return W(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const u=g(c.anchor||c.el),p=u&&u[Ia];return p?g(p):u};let Qe=!1;const ot=(c,u,p)=>{c==null?u._vnode&&m(u._vnode,null,null,!0):O(u._vnode||null,c,u,null,null,null,p),u._vnode=c,Qe||(Qe=!0,Ur(),oo(),Qe=!1)},vt={p:O,um:m,m:Je,r:P,mt:Vt,mc:xe,pc:Z,pbc:ve,n:W,o:e};return{render:ot,hydrate:void 0,createApp:rc(ot)}}function gi({type:e,props:t},s){return s==="svg"&&e==="foreignObject"||s==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:s}function yt({effect:e,job:t},s){s?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function pc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ro(e,t,s=!1){const i=e.children,r=t.children;if(D(i)&&D(r))for(let n=0;n<i.length;n++){const o=i[n];let l=r[n];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[n]=at(r[n]),l.el=o.el),!s&&l.patchFlag!==-2&&Ro(o,l)),l.type===ni&&(l.el=o.el)}}function gc(e){const t=e.slice(),s=[0];let i,r,n,o,l;const a=e.length;for(i=0;i<a;i++){const h=e[i];if(h!==0){if(r=s[s.length-1],e[r]<h){t[i]=r,s.push(i);continue}for(n=0,o=s.length-1;n<o;)l=n+o>>1,e[s[l]]<h?n=l+1:o=l;h<e[s[n]]&&(n>0&&(t[i]=s[n-1]),s[n]=i)}}for(n=s.length,o=s[n-1];n-- >0;)s[n]=o,o=t[o];return s}function Co(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Co(t)}function qr(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const mc=Symbol.for("v-scx"),bc=()=>rs(mc);function vc(e,t){return Pr(e,null,t)}function ht(e,t,s){return Pr(e,t,s)}function Pr(e,t,s=ie){const{immediate:i,deep:r,flush:n,once:o}=s,l=Se({},s),a=t&&i||!t&&n!=="post";let h;if(bs){if(n==="sync"){const x=bc();h=x.__watcherHandles||(x.__watcherHandles=[])}else if(!a){const x=()=>{};return x.stop=Ge,x.resume=Ge,x.pause=Ge,x}}const f=ye;l.call=(x,C,O)=>Ze(x,f,C,O);let d=!1;n==="post"?l.scheduler=x=>{ke(x,f&&f.suspense)}:n!=="sync"&&(d=!0,l.scheduler=(x,C)=>{C?x():Ar(x)}),l.augmentJob=x=>{t&&(x.flags|=4),d&&(x.flags|=2,f&&(x.id=f.uid,x.i=f))};const g=Ma(e,t,l);return bs&&(h?h.push(g):a&&g()),g}function _c(e,t,s){const i=this.proxy,r=de(e)?e.includes(".")?Po(i,e):()=>i[e]:e.bind(i,i);let n;z(t)?n=t:(n=t.handler,s=t);const o=ws(this),l=Pr(r,n.bind(i),s);return o(),l}function Po(e,t){const s=t.split(".");return()=>{let i=e;for(let r=0;r<s.length&&i;r++)i=i[s[r]];return i}}const yc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${pt(t)}Modifiers`]||e[`${kt(t)}Modifiers`];function xc(e,t,...s){if(e.isUnmounted)return;const i=e.vnode.props||ie;let r=s;const n=t.startsWith("update:"),o=n&&yc(i,t.slice(7));o&&(o.trim&&(r=s.map(f=>de(f)?f.trim():f)),o.number&&(r=s.map(Ul)));let l,a=i[l=ai(t)]||i[l=ai(pt(t))];!a&&n&&(a=i[l=ai(kt(t))]),a&&Ze(a,e,6,r);const h=i[l+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Ze(h,e,6,r)}}function Mo(e,t,s=!1){const i=t.emitsCache,r=i.get(e);if(r!==void 0)return r;const n=e.emits;let o={},l=!1;if(!z(e)){const a=h=>{const f=Mo(h,t,!0);f&&(l=!0,Se(o,f))};!s&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!n&&!l?(ce(e)&&i.set(e,null),null):(D(n)?n.forEach(a=>o[a]=null):Se(o,n),ce(e)&&i.set(e,o),o)}function ri(e,t){return!e||!qs(t)?!1:(t=t.slice(2).replace(/Once$/,""),X(e,t[0].toLowerCase()+t.slice(1))||X(e,kt(t))||X(e,t))}function Zr(e){const{type:t,vnode:s,proxy:i,withProxy:r,propsOptions:[n],slots:o,attrs:l,emit:a,render:h,renderCache:f,props:d,data:g,setupState:x,ctx:C,inheritAttrs:O}=e,Q=Bs(e);let j,Y;try{if(s.shapeFlag&4){const R=r||i,q=R;j=Ke(h.call(q,R,f,d,x,g,C)),Y=l}else{const R=t;j=Ke(R.length>1?R(d,{attrs:l,slots:o,emit:a}):R(d,null)),Y=t.props?l:$c(l)}}catch(R){ns.length=0,ti(R,e,1),j=Rt(gs)}let V=j;if(Y&&O!==!1){const R=Object.keys(Y),{shapeFlag:q}=V;R.length&&q&7&&(n&&R.some(hr)&&(Y=wc(Y,n)),V=jt(V,Y,!1,!0))}return s.dirs&&(V=jt(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(s.dirs):s.dirs),s.transition&&Rr(V,s.transition),j=V,Bs(Q),j}const $c=e=>{let t;for(const s in e)(s==="class"||s==="style"||qs(s))&&((t||(t={}))[s]=e[s]);return t},wc=(e,t)=>{const s={};for(const i in e)(!hr(i)||!(i.slice(9)in t))&&(s[i]=e[i]);return s};function Sc(e,t,s){const{props:i,children:r,component:n}=e,{props:o,children:l,patchFlag:a}=t,h=n.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&a>=0){if(a&1024)return!0;if(a&16)return i?Xr(i,o,h):!!o;if(a&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const g=f[d];if(o[g]!==i[g]&&!ri(h,g))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:i===o?!1:i?o?Xr(i,o,h):!0:!!o;return!1}function Xr(e,t,s){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const n=i[r];if(t[n]!==e[n]&&!ri(s,n))return!0}return!1}function Ec({vnode:e,parent:t},s){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=t.vnode).el=s,t=t.parent;else break}}const To=e=>e.__isSuspense;function Ac(e,t){t&&t.pendingBranch?D(e)?t.effects.push(...e):t.effects.push(e):La(e)}const st=Symbol.for("v-fgt"),ni=Symbol.for("v-txt"),gs=Symbol.for("v-cmt"),mi=Symbol.for("v-stc"),ns=[];let Ne=null;function Rc(e=!1){ns.push(Ne=e?null:[])}function Cc(){ns.pop(),Ne=ns[ns.length-1]||null}let ms=1;function Jr(e,t=!1){ms+=e,e<0&&Ne&&t&&(Ne.hasOnce=!0)}function Pc(e){return e.dynamicChildren=ms>0?Ne||zt:null,Cc(),ms>0&&Ne&&Ne.push(e),e}function Mc(e,t,s,i,r,n){return Pc(K(e,t,s,i,r,n,!0))}function Oo(e){return e?e.__v_isVNode===!0:!1}function Gt(e,t){return e.type===t.type&&e.key===t.key}const Lo=({key:e})=>e??null,Ts=({ref:e,ref_key:t,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?de(e)||he(e)||z(e)?{i:Fe,r:e,k:t,f:!!s}:e:null);function K(e,t=null,s=null,i=0,r=null,n=e===st?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Lo(t),ref:t&&Ts(t),scopeId:ao,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Fe};return l?(Mr(a,s),n&128&&e.normalize(a)):s&&(a.shapeFlag|=de(s)?8:16),ms>0&&!o&&Ne&&(a.patchFlag>0||n&6)&&a.patchFlag!==32&&Ne.push(a),a}const Rt=Tc;function Tc(e,t=null,s=null,i=0,r=null,n=!1){if((!e||e===Za)&&(e=gs),Oo(e)){const l=jt(e,t,!0);return s&&Mr(l,s),ms>0&&!n&&Ne&&(l.shapeFlag&6?Ne[Ne.indexOf(e)]=l:Ne.push(l)),l.patchFlag=-2,l}if(Bc(e)&&(e=e.__vccOpts),t){t=Oc(t);let{class:l,style:a}=t;l&&!de(l)&&(t.class=mr(l)),ce(a)&&(Sr(a)&&!D(a)&&(a=Se({},a)),t.style=gr(a))}const o=de(e)?1:To(e)?128:Na(e)?64:ce(e)?4:z(e)?2:0;return K(e,t,s,i,r,o,n,!0)}function Oc(e){return e?Sr(e)||yo(e)?Se({},e):e:null}function jt(e,t,s=!1,i=!1){const{props:r,ref:n,patchFlag:o,children:l,transition:a}=e,h=t?Lc(r||{},t):r,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&Lo(h),ref:t&&t.ref?s&&n?D(n)?n.concat(Ts(t)):[n,Ts(t)]:Ts(t):n,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==st?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&jt(e.ssContent),ssFallback:e.ssFallback&&jt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&i&&Rr(f,a.clone(f)),f}function Ni(e=" ",t=0){return Rt(ni,null,e,t)}function Ke(e){return e==null||typeof e=="boolean"?Rt(gs):D(e)?Rt(st,null,e.slice()):Oo(e)?at(e):Rt(ni,null,String(e))}function at(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:jt(e)}function Mr(e,t){let s=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(D(t))s=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),Mr(e,r()),r._c&&(r._d=!0));return}else{s=32;const r=t._;!r&&!yo(t)?t._ctx=Fe:r===3&&Fe&&(Fe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else z(t)?(t={default:t,_ctx:Fe},s=32):(t=String(t),i&64?(s=16,t=[Ni(t)]):s=8);e.children=t,e.shapeFlag|=s}function Lc(...e){const t={};for(let s=0;s<e.length;s++){const i=e[s];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=mr([t.class,i.class]));else if(r==="style")t.style=gr([t.style,i.style]);else if(qs(r)){const n=t[r],o=i[r];o&&n!==o&&!(D(n)&&n.includes(o))&&(t[r]=n?[].concat(n,o):o)}else r!==""&&(t[r]=i[r])}return t}function Ve(e,t,s,i=null){Ze(e,t,7,[s,i])}const kc=mo();let Ic=0;function Nc(e,t,s){const i=e.type,r=(t?t.appContext:e.appContext)||kc,n={uid:Ic++,vnode:e,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Zl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$o(i,r),emitsOptions:Mo(i,r),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:i.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=t?t.root:n,n.emit=xc.bind(null,n),e.ce&&e.ce(n),n}let ye=null;const oi=()=>ye||Fe;let Vs,Fi;{const e=Js(),t=(s,i)=>{let r;return(r=e[s])||(r=e[s]=[]),r.push(i),n=>{r.length>1?r.forEach(o=>o(n)):r[0](n)}};Vs=t("__VUE_INSTANCE_SETTERS__",s=>ye=s),Fi=t("__VUE_SSR_SETTERS__",s=>bs=s)}const ws=e=>{const t=ye;return Vs(e),e.scope.on(),()=>{e.scope.off(),Vs(t)}},Qr=()=>{ye&&ye.scope.off(),Vs(null)};function ko(e){return e.vnode.shapeFlag&4}let bs=!1;function Fc(e,t=!1,s=!1){t&&Fi(t);const{props:i,children:r}=e.vnode,n=ko(e);oc(e,i,n,t),uc(e,r,s);const o=n?zc(e,t):void 0;return t&&Fi(!1),o}function zc(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Xa);const{setup:i}=s;if(i){mt();const r=e.setupContext=i.length>1?Dc(e):null,n=ws(e),o=$s(i,e,0,[e.props,r]),l=On(o);if(bt(),n(),(l||e.sp)&&!ss(e)&&co(e),l){if(o.then(Qr,Qr),t)return o.then(a=>{en(e,a)}).catch(a=>{ti(a,e,0)});e.asyncDep=o}else en(e,o)}else Io(e)}function en(e,t,s){z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ce(t)&&(e.setupState=io(t)),Io(e)}function Io(e,t,s){const i=e.type;e.render||(e.render=i.render||Ge);{const r=ws(e);mt();try{Ja(e)}finally{bt(),r()}}}const Hc={get(e,t){return $e(e,"get",""),e[t]}};function Dc(e){const t=s=>{e.exposed=s||{}};return{attrs:new Proxy(e.attrs,Hc),slots:e.slots,emit:e.emit,expose:t}}function Tr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(io(va(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in is)return is[s](e)},has(t,s){return s in t||s in is}})):e.proxy}function Bc(e){return z(e)&&"__vccOpts"in e}const qe=(e,t)=>Ca(e,t,bs),jc="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zi;const tn=typeof window<"u"&&window.trustedTypes;if(tn)try{zi=tn.createPolicy("vue",{createHTML:e=>e})}catch{}const No=zi?e=>zi.createHTML(e):e=>e,Uc="http://www.w3.org/2000/svg",Vc="http://www.w3.org/1998/Math/MathML",tt=typeof document<"u"?document:null,sn=tt&&tt.createElement("template"),Wc={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,i)=>{const r=t==="svg"?tt.createElementNS(Uc,e):t==="mathml"?tt.createElementNS(Vc,e):s?tt.createElement(e,{is:s}):tt.createElement(e);return e==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:e=>tt.createTextNode(e),createComment:e=>tt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>tt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,i,r,n){const o=s?s.previousSibling:t.lastChild;if(r&&(r===n||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),s),!(r===n||!(r=r.nextSibling)););else{sn.innerHTML=No(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const l=sn.content;if(i==="svg"||i==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,s)}return[o?o.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}},Kc=Symbol("_vtc");function Gc(e,t,s){const i=e[Kc];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}const rn=Symbol("_vod"),Yc=Symbol("_vsh"),qc=Symbol(""),Zc=/(^|;)\s*display\s*:/;function Xc(e,t,s){const i=e.style,r=de(s);let n=!1;if(s&&!r){if(t)if(de(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();s[l]==null&&Os(i,l,"")}else for(const o in t)s[o]==null&&Os(i,o,"");for(const o in s)o==="display"&&(n=!0),Os(i,o,s[o])}else if(r){if(t!==s){const o=i[qc];o&&(s+=";"+o),i.cssText=s,n=Zc.test(s)}}else t&&e.removeAttribute("style");rn in e&&(e[rn]=n?i.display:"",e[Yc]&&(i.display="none"))}const nn=/\s*!important$/;function Os(e,t,s){if(D(s))s.forEach(i=>Os(e,t,i));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const i=Jc(e,t);nn.test(s)?e.setProperty(kt(i),s.replace(nn,""),"important"):e[i]=s}}const on=["Webkit","Moz","ms"],bi={};function Jc(e,t){const s=bi[t];if(s)return s;let i=pt(t);if(i!=="filter"&&i in e)return bi[t]=i;i=In(i);for(let r=0;r<on.length;r++){const n=on[r]+i;if(n in e)return bi[t]=n}return t}const ln="http://www.w3.org/1999/xlink";function an(e,t,s,i,r,n=ql(t)){i&&t.startsWith("xlink:")?s==null?e.removeAttributeNS(ln,t.slice(6,t.length)):e.setAttributeNS(ln,t,s):s==null||n&&!Fn(s)?e.removeAttribute(t):e.setAttribute(t,n?"":gt(s)?String(s):s)}function cn(e,t,s,i,r){if(t==="innerHTML"||t==="textContent"){s!=null&&(e[t]=t==="innerHTML"?No(s):s);return}const n=e.tagName;if(t==="value"&&n!=="PROGRESS"&&!n.includes("-")){const l=n==="OPTION"?e.getAttribute("value")||"":e.value,a=s==null?e.type==="checkbox"?"on":"":String(s);(l!==a||!("_value"in e))&&(e.value=a),s==null&&e.removeAttribute(t),e._value=s;return}let o=!1;if(s===""||s==null){const l=typeof e[t];l==="boolean"?s=Fn(s):s==null&&l==="string"?(s="",o=!0):l==="number"&&(s=0,o=!0)}try{e[t]=s}catch{}o&&e.removeAttribute(r||t)}function Qc(e,t,s,i){e.addEventListener(t,s,i)}function e0(e,t,s,i){e.removeEventListener(t,s,i)}const un=Symbol("_vei");function t0(e,t,s,i,r=null){const n=e[un]||(e[un]={}),o=n[t];if(i&&o)o.value=i;else{const[l,a]=s0(t);if(i){const h=n[t]=n0(i,r);Qc(e,l,h,a)}else o&&(e0(e,l,o,a),n[t]=void 0)}}const fn=/(?:Once|Passive|Capture)$/;function s0(e){let t;if(fn.test(e)){t={};let i;for(;i=e.match(fn);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):kt(e.slice(2)),t]}let vi=0;const i0=Promise.resolve(),r0=()=>vi||(i0.then(()=>vi=0),vi=Date.now());function n0(e,t){const s=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=s.attached)return;Ze(o0(i,s.value),t,5,[i])};return s.value=e,s.attached=r0(),s}function o0(e,t){if(D(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const hn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,l0=(e,t,s,i,r,n)=>{const o=r==="svg";t==="class"?Gc(e,i,o):t==="style"?Xc(e,s,i):qs(t)?hr(t)||t0(e,t,s,i,n):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):a0(e,t,i,o))?(cn(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&an(e,t,i,o,n,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!de(i))?cn(e,pt(t),i,n,t):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),an(e,t,i,o))};function a0(e,t,s,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&hn(t)&&z(s));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return hn(t)&&de(s)?!1:t in e}const c0=Se({patchProp:l0},Wc);let dn;function u0(){return dn||(dn=hc(c0))}const f0=(...e)=>{const t=u0().createApp(...e),{mount:s}=t;return t.mount=i=>{const r=d0(i);if(!r)return;const n=t._component;!z(n)&&!n.render&&!n.template&&(n.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=s(r,!1,h0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function h0(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function d0(e){return de(e)?document.querySelector(e):e}function p0(e){return Bn()?(Xl(e),!0):!1}const _i=new WeakMap,g0=(...e)=>{var t;const s=e[0],i=(t=oi())==null?void 0:t.proxy;if(i==null&&!bo())throw new Error("injectLocal must be called in setup");return i&&_i.has(i)&&s in _i.get(i)?_i.get(i)[s]:rs(...e)},m0=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const b0=Object.prototype.toString,v0=e=>b0.call(e)==="[object Object]",_0=()=>{};function Fo(...e){if(e.length!==1)return Ea(...e);const t=e[0];return typeof t=="function"?ei($a(()=>({get:t,set:_0}))):hs(t)}function y0(e,t){function s(...i){return new Promise((r,n)=>{Promise.resolve(e(()=>t.apply(this,i),{fn:t,thisArg:this,args:i})).then(r).catch(n)})}return s}const zo=e=>e();function x0(e=zo,t={}){const{initialState:s="active"}=t,i=Fo(s==="active");function r(){i.value=!1}function n(){i.value=!0}const o=(...l)=>{i.value&&e(...l)};return{isActive:ei(i),pause:r,resume:n,eventFilter:o}}function pn(e){return e.endsWith("rem")?Number.parseFloat(e)*16:Number.parseFloat(e)}function yi(e){return Array.isArray(e)?e:[e]}function $0(e){return oi()}function w0(e,t,s={}){const{eventFilter:i=zo,...r}=s;return ht(e,y0(i,t),r)}function S0(e,t,s={}){const{eventFilter:i,initialState:r="active",...n}=s,{eventFilter:o,pause:l,resume:a,isActive:h}=x0(i,{initialState:r});return{stop:w0(e,t,{...n,eventFilter:o}),pause:l,resume:a,isActive:h}}function Ho(e,t=!0,s){$0()?ii(e,s):t?e():Er(e)}function E0(e=!1,t={}){const{truthyValue:s=!0,falsyValue:i=!1}=t,r=he(e),n=Et(e);function o(l){if(arguments.length)return n.value=l,n.value;{const a=Ye(s);return n.value=n.value===a?Ye(i):a,n.value}}return r?o:[n,o]}function A0(e,t,s){return ht(e,t,{...s,immediate:!0})}const vs=m0?window:void 0;function Do(e){var t;const s=Ye(e);return(t=s==null?void 0:s.$el)!=null?t:s}function Ws(...e){const t=[],s=()=>{t.forEach(l=>l()),t.length=0},i=(l,a,h,f)=>(l.addEventListener(a,h,f),()=>l.removeEventListener(a,h,f)),r=qe(()=>{const l=yi(Ye(e[0])).filter(a=>a!=null);return l.every(a=>typeof a!="string")?l:void 0}),n=A0(()=>{var l,a;return[(a=(l=r.value)==null?void 0:l.map(h=>Do(h)))!=null?a:[vs].filter(h=>h!=null),yi(Ye(r.value?e[1]:e[0])),yi(ds(r.value?e[2]:e[1])),Ye(r.value?e[3]:e[2])]},([l,a,h,f])=>{if(s(),!(l!=null&&l.length)||!(a!=null&&a.length)||!(h!=null&&h.length))return;const d=v0(f)?{...f}:f;t.push(...l.flatMap(g=>a.flatMap(x=>h.map(C=>i(g,x,C,d)))))},{flush:"post"}),o=()=>{n(),s()};return p0(s),o}function R0(){const e=Et(!1),t=oi();return t&&ii(()=>{e.value=!0},t),e}function C0(e){const t=R0();return qe(()=>(t.value,!!e()))}const P0=Symbol("vueuse-ssr-width");function M0(){const e=bo()?g0(P0,null):null;return typeof e=="number"?e:void 0}function T0(e,t={}){const{window:s=vs,ssrWidth:i=M0()}=t,r=C0(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function"),n=Et(typeof i=="number"),o=Et(),l=Et(!1),a=h=>{l.value=h.matches};return vc(()=>{if(n.value){n.value=!r.value;const h=Ye(e).split(",");l.value=h.some(f=>{const d=f.includes("not all"),g=f.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),x=f.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let C=!!(g||x);return g&&C&&(C=i>=pn(g[1])),x&&C&&(C=i<=pn(x[1])),d?!C:C});return}r.value&&(o.value=s.matchMedia(Ye(e)),l.value=o.value.matches)}),Ws(o,"change",a,{passive:!0}),qe(()=>l.value)}const Cs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ps="__vueuse_ssr_handlers__",O0=L0();function L0(){return Ps in Cs||(Cs[Ps]=Cs[Ps]||{}),Cs[Ps]}function Bo(e,t){return O0[e]||t}function k0(e){return T0("(prefers-color-scheme: dark)",e)}function I0(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const N0={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},gn="vueuse-storage";function F0(e,t,s,i={}){var r;const{flush:n="pre",deep:o=!0,listenToStorageChanges:l=!0,writeDefaults:a=!0,mergeDefaults:h=!1,shallow:f,window:d=vs,eventFilter:g,onError:x=H=>{console.error(H)},initOnMounted:C}=i,O=(f?Et:hs)(typeof t=="function"?t():t),Q=qe(()=>Ye(e));if(!s)try{s=Bo("getDefaultStorage",()=>{var H;return(H=vs)==null?void 0:H.localStorage})()}catch(H){x(H)}if(!s)return O;const j=Ye(t),Y=I0(j),V=(r=i.serializer)!=null?r:N0[Y],{pause:R,resume:q}=S0(O,()=>re(O.value),{flush:n,deep:o,eventFilter:g});ht(Q,()=>pe(),{flush:n}),d&&l&&Ho(()=>{s instanceof Storage?Ws(d,"storage",pe,{passive:!0}):Ws(d,gn,ve),C&&pe()}),C||pe();function fe(H,se){if(d){const ae={key:Q.value,oldValue:H,newValue:se,storageArea:s};d.dispatchEvent(s instanceof Storage?new StorageEvent("storage",ae):new CustomEvent(gn,{detail:ae}))}}function re(H){try{const se=s.getItem(Q.value);if(H==null)fe(se,null),s.removeItem(Q.value);else{const ae=V.write(H);se!==ae&&(s.setItem(Q.value,ae),fe(se,ae))}}catch(se){x(se)}}function xe(H){const se=H?H.newValue:s.getItem(Q.value);if(se==null)return a&&j!=null&&s.setItem(Q.value,V.write(j)),j;if(!H&&h){const ae=V.read(se);return typeof h=="function"?h(ae,j):Y==="object"&&!Array.isArray(ae)?{...j,...ae}:ae}else return typeof se!="string"?se:V.read(se)}function pe(H){if(!(H&&H.storageArea!==s)){if(H&&H.key==null){O.value=j;return}if(!(H&&H.key!==Q.value)){R();try{(H==null?void 0:H.newValue)!==V.write(O.value)&&(O.value=xe(H))}catch(se){x(se)}finally{H?Er(q):q()}}}}function ve(H){pe(H.detail)}return O}const z0="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function H0(e={}){const{selector:t="html",attribute:s="class",initialValue:i="auto",window:r=vs,storage:n,storageKey:o="vueuse-color-scheme",listenToStorageChanges:l=!0,storageRef:a,emitAuto:h,disableTransition:f=!0}=e,d={auto:"",light:"light",dark:"dark",...e.modes||{}},g=k0({window:r}),x=qe(()=>g.value?"dark":"light"),C=a||(o==null?Fo(i):F0(o,i,n,{window:r,listenToStorageChanges:l})),O=qe(()=>C.value==="auto"?x.value:C.value),Q=Bo("updateHTMLAttrs",(R,q,fe)=>{const re=typeof R=="string"?r==null?void 0:r.document.querySelector(R):Do(R);if(!re)return;const xe=new Set,pe=new Set;let ve=null;if(q==="class"){const se=fe.split(/\s/g);Object.values(d).flatMap(ae=>(ae||"").split(/\s/g)).filter(Boolean).forEach(ae=>{se.includes(ae)?xe.add(ae):pe.add(ae)})}else ve={key:q,value:fe};if(xe.size===0&&pe.size===0&&ve===null)return;let H;f&&(H=r.document.createElement("style"),H.appendChild(document.createTextNode(z0)),r.document.head.appendChild(H));for(const se of xe)re.classList.add(se);for(const se of pe)re.classList.remove(se);ve&&re.setAttribute(ve.key,ve.value),f&&(r.getComputedStyle(H).opacity,document.head.removeChild(H))});function j(R){var q;Q(t,s,(q=d[R])!=null?q:R)}function Y(R){e.onChanged?e.onChanged(R,j):j(R)}ht(O,Y,{flush:"post",immediate:!0}),Ho(()=>Y(O.value));const V=qe({get(){return h?C.value:O.value},set(R){C.value=R}});return Object.assign(V,{store:C,system:x,state:O})}function D0(e={}){const{valueDark:t="dark",valueLight:s=""}=e,i=H0({...e,onChanged:(o,l)=>{var a;e.onChanged?(a=e.onChanged)==null||a.call(e,o==="dark",l,o):l(o)},modes:{dark:t,light:s}}),r=qe(()=>i.system.value);return qe({get(){return i.value==="dark"},set(o){const l=o?"dark":"light";r.value===l?i.value="auto":i.value=l}})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ls=globalThis,Or=Ls.ShadowRoot&&(Ls.ShadyCSS===void 0||Ls.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Lr=Symbol(),mn=new WeakMap;let jo=class{constructor(t,s,i){if(this._$cssResult$=!0,i!==Lr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const s=this.t;if(Or&&t===void 0){const i=s!==void 0&&s.length===1;i&&(t=mn.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&mn.set(s,t))}return t}toString(){return this.cssText}};const B0=e=>new jo(typeof e=="string"?e:e+"",void 0,Lr),ze=(e,...t)=>{const s=e.length===1?e[0]:t.reduce((i,r,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[n+1],e[0]);return new jo(s,e,Lr)},j0=(e,t)=>{if(Or)e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of t){const i=document.createElement("style"),r=Ls.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=s.cssText,e.appendChild(i)}},bn=Or?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return B0(s)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:U0,defineProperty:V0,getOwnPropertyDescriptor:W0,getOwnPropertyNames:K0,getOwnPropertySymbols:G0,getPrototypeOf:Y0}=Object,dt=globalThis,vn=dt.trustedTypes,q0=vn?vn.emptyScript:"",xi=dt.reactiveElementPolyfillSupport,os=(e,t)=>e,Hi={toAttribute(e,t){switch(t){case Boolean:e=e?q0:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},Uo=(e,t)=>!U0(e,t),_n={attribute:!0,type:String,converter:Hi,reflect:!1,hasChanged:Uo};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),dt.litPropertyMetadata??(dt.litPropertyMetadata=new WeakMap);class Ft extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=_n){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);r!==void 0&&V0(this.prototype,t,r)}}static getPropertyDescriptor(t,s,i){const{get:r,set:n}=W0(this.prototype,t)??{get(){return this[s]},set(o){this[s]=o}};return{get(){return r==null?void 0:r.call(this)},set(o){const l=r==null?void 0:r.call(this);n.call(this,o),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_n}static _$Ei(){if(this.hasOwnProperty(os("elementProperties")))return;const t=Y0(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(os("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(os("properties"))){const s=this.properties,i=[...K0(s),...G0(s)];for(const r of i)this.createProperty(r,s[r])}const t=this[Symbol.metadata];if(t!==null){const s=litPropertyMetadata.get(t);if(s!==void 0)for(const[i,r]of s)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[s,i]of this.elementProperties){const r=this._$Eu(s,i);r!==void 0&&this._$Eh.set(r,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)s.unshift(bn(r))}else t!==void 0&&s.push(bn(t));return s}static _$Eu(t,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(s=>s(this))}addController(t){var s;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var s;(s=this._$EO)==null||s.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return j0(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostConnected)==null?void 0:i.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostDisconnected)==null?void 0:i.call(s)})}attributeChangedCallback(t,s,i){this._$AK(t,i)}_$EC(t,s){var n;const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(r!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:Hi).toAttribute(s,i.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,s){var n;const i=this.constructor,r=i._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const o=i.getPropertyOptions(r),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:Hi;this._$Em=r,this[r]=l.fromAttribute(s,o.type),this._$Em=null}}requestUpdate(t,s,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??Uo)(this[t],s))return;this.P(t,s,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,o]of r)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(i=this._$EO)==null||i.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(s)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(s)}willUpdate(t){}_$AE(t){var s;(s=this._$EO)==null||s.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(s=>this._$EC(s,this[s]))),this._$EU()}updated(t){}firstUpdated(t){}}Ft.elementStyles=[],Ft.shadowRootOptions={mode:"open"},Ft[os("elementProperties")]=new Map,Ft[os("finalized")]=new Map,xi==null||xi({ReactiveElement:Ft}),(dt.reactiveElementVersions??(dt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ls=globalThis,Ks=ls.trustedTypes,yn=Ks?Ks.createPolicy("lit-html",{createHTML:e=>e}):void 0,Vo="$lit$",ut=`lit$${Math.random().toFixed(9).slice(2)}$`,Wo="?"+ut,Z0=`<${Wo}>`,Mt=document,_s=()=>Mt.createComment(""),ys=e=>e===null||typeof e!="object"&&typeof e!="function",kr=Array.isArray,X0=e=>kr(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",$i=`[ 	
\f\r]`,Yt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xn=/-->/g,$n=/>/g,xt=RegExp(`>|${$i}(?:([^\\s"'>=/]+)(${$i}*=${$i}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wn=/'/g,Sn=/"/g,Ko=/^(?:script|style|textarea|title)$/i,J0=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),J=J0(1),Tt=Symbol.for("lit-noChange"),ue=Symbol.for("lit-nothing"),En=new WeakMap,wt=Mt.createTreeWalker(Mt,129);function Go(e,t){if(!kr(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return yn!==void 0?yn.createHTML(t):t}const Q0=(e,t)=>{const s=e.length-1,i=[];let r,n=t===2?"<svg>":t===3?"<math>":"",o=Yt;for(let l=0;l<s;l++){const a=e[l];let h,f,d=-1,g=0;for(;g<a.length&&(o.lastIndex=g,f=o.exec(a),f!==null);)g=o.lastIndex,o===Yt?f[1]==="!--"?o=xn:f[1]!==void 0?o=$n:f[2]!==void 0?(Ko.test(f[2])&&(r=RegExp("</"+f[2],"g")),o=xt):f[3]!==void 0&&(o=xt):o===xt?f[0]===">"?(o=r??Yt,d=-1):f[1]===void 0?d=-2:(d=o.lastIndex-f[2].length,h=f[1],o=f[3]===void 0?xt:f[3]==='"'?Sn:wn):o===Sn||o===wn?o=xt:o===xn||o===$n?o=Yt:(o=xt,r=void 0);const x=o===xt&&e[l+1].startsWith("/>")?" ":"";n+=o===Yt?a+Z0:d>=0?(i.push(h),a.slice(0,d)+Vo+a.slice(d)+ut+x):a+ut+(d===-2?l:x)}return[Go(e,n+(e[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};let Di=class Yo{constructor({strings:t,_$litType$:s},i){let r;this.parts=[];let n=0,o=0;const l=t.length-1,a=this.parts,[h,f]=Q0(t,s);if(this.el=Yo.createElement(h,i),wt.currentNode=this.el.content,s===2||s===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=wt.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(Vo)){const g=f[o++],x=r.getAttribute(d).split(ut),C=/([.?@])?(.*)/.exec(g);a.push({type:1,index:n,name:C[2],strings:x,ctor:C[1]==="."?tu:C[1]==="?"?su:C[1]==="@"?iu:li}),r.removeAttribute(d)}else d.startsWith(ut)&&(a.push({type:6,index:n}),r.removeAttribute(d));if(Ko.test(r.tagName)){const d=r.textContent.split(ut),g=d.length-1;if(g>0){r.textContent=Ks?Ks.emptyScript:"";for(let x=0;x<g;x++)r.append(d[x],_s()),wt.nextNode(),a.push({type:2,index:++n});r.append(d[g],_s())}}}else if(r.nodeType===8)if(r.data===Wo)a.push({type:2,index:n});else{let d=-1;for(;(d=r.data.indexOf(ut,d+1))!==-1;)a.push({type:7,index:n}),d+=ut.length-1}n++}}static createElement(t,s){const i=Mt.createElement("template");return i.innerHTML=t,i}};function Ut(e,t,s=e,i){var o,l;if(t===Tt)return t;let r=i!==void 0?(o=s._$Co)==null?void 0:o[i]:s._$Cl;const n=ys(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),n===void 0?r=void 0:(r=new n(e),r._$AT(e,s,i)),i!==void 0?(s._$Co??(s._$Co=[]))[i]=r:s._$Cl=r),r!==void 0&&(t=Ut(e,r._$AS(e,t.values),r,i)),t}let eu=class{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:i}=this._$AD,r=((t==null?void 0:t.creationScope)??Mt).importNode(s,!0);wt.currentNode=r;let n=wt.nextNode(),o=0,l=0,a=i[0];for(;a!==void 0;){if(o===a.index){let h;a.type===2?h=new Ir(n,n.nextSibling,this,t):a.type===1?h=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(h=new ru(n,this,t)),this._$AV.push(h),a=i[++l]}o!==(a==null?void 0:a.index)&&(n=wt.nextNode(),o++)}return wt.currentNode=Mt,r}p(t){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,s),s+=i.strings.length-2):i._$AI(t[s])),s++}},Ir=class qo{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,s,i,r){this.type=2,this._$AH=ue,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=Ut(this,t,s),ys(t)?t===ue||t==null||t===""?(this._$AH!==ue&&this._$AR(),this._$AH=ue):t!==this._$AH&&t!==Tt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):X0(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==ue&&ys(this._$AH)?this._$AA.nextSibling.data=t:this.T(Mt.createTextNode(t)),this._$AH=t}$(t){var n;const{values:s,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Di.createElement(Go(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(s);else{const o=new eu(r,this),l=o.u(this.options);o.p(s),this.T(l),this._$AH=o}}_$AC(t){let s=En.get(t.strings);return s===void 0&&En.set(t.strings,s=new Di(t)),s}k(t){kr(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,r=0;for(const n of t)r===s.length?s.push(i=new qo(this.O(_s()),this.O(_s()),this,this.options)):i=s[r],i._$AI(n),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(t=this._$AA.nextSibling,s){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,s);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var s;this._$AM===void 0&&(this._$Cv=t,(s=this._$AP)==null||s.call(this,t))}};class li{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,i,r,n){this.type=1,this._$AH=ue,this._$AN=void 0,this.element=t,this.name=s,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ue}_$AI(t,s=this,i,r){const n=this.strings;let o=!1;if(n===void 0)t=Ut(this,t,s,0),o=!ys(t)||t!==this._$AH&&t!==Tt,o&&(this._$AH=t);else{const l=t;let a,h;for(t=n[0],a=0;a<n.length-1;a++)h=Ut(this,l[i+a],s,a),h===Tt&&(h=this._$AH[a]),o||(o=!ys(h)||h!==this._$AH[a]),h===ue?t=ue:t!==ue&&(t+=(h??"")+n[a+1]),this._$AH[a]=h}o&&!r&&this.j(t)}j(t){t===ue?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}let tu=class extends li{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ue?void 0:t}},su=class extends li{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ue)}},iu=class extends li{constructor(t,s,i,r,n){super(t,s,i,r,n),this.type=5}_$AI(t,s=this){if((t=Ut(this,t,s,0)??ue)===Tt)return;const i=this._$AH,r=t===ue&&i!==ue||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==ue&&(i===ue||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,t):this._$AH.handleEvent(t)}},ru=class{constructor(t,s,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ut(this,t)}};const wi=ls.litHtmlPolyfillSupport;wi==null||wi(Di,Ir),(ls.litHtmlVersions??(ls.litHtmlVersions=[])).push("3.2.1");const nu=(e,t,s)=>{const i=(s==null?void 0:s.renderBefore)??t;let r=i._$litPart$;if(r===void 0){const n=(s==null?void 0:s.renderBefore)??null;i._$litPart$=r=new Ir(t.insertBefore(_s(),n),n,void 0,s??{})}return r._$AI(e),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let we=class extends Ft{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const t=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=t.firstChild),t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=nu(s,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Tt}};var Mn;we._$litElement$=!0,we.finalized=!0,(Mn=globalThis.litElementHydrateSupport)==null||Mn.call(globalThis,{LitElement:we});const Si=globalThis.litElementPolyfillSupport;Si==null||Si({LitElement:we});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ou=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zo={ATTRIBUTE:1,CHILD:2},Xo=e=>(...t)=>({_$litDirective$:e,values:t});let Jo=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,i){this._$Ct=t,this._$AM=s,this._$Ci=i}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const as=(e,t)=>{var i;const s=e._$AN;if(s===void 0)return!1;for(const r of s)(i=r._$AO)==null||i.call(r,t,!1),as(r,t);return!0},Gs=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while((s==null?void 0:s.size)===0)},Qo=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),cu(t)}};function lu(e){this._$AN!==void 0?(Gs(this),this._$AM=e,Qo(this)):this._$AM=e}function au(e,t=!1,s=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(i))for(let n=s;n<i.length;n++)as(i[n],!1),Gs(i[n]);else i!=null&&(as(i,!1),Gs(i));else as(this,e)}const cu=e=>{e.type==Zo.CHILD&&(e._$AP??(e._$AP=au),e._$AQ??(e._$AQ=lu))};class uu extends Jo{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,i){super._$AT(t,s,i),Qo(this),this.isConnected=t._$AU}_$AO(t,s=!0){var i,r;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)==null||i.call(this):(r=this.disconnected)==null||r.call(this)),s&&(as(this,t),Gs(this))}setValue(t){if(ou(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=()=>new fu;class fu{}const Ei=new WeakMap,be=Xo(class extends uu{render(e){return ue}update(e,[t]){var i;const s=t!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=t,this.ht=(i=e.options)==null?void 0:i.host,this.rt(this.ct=e.element)),ue}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let s=Ei.get(t);s===void 0&&(s=new WeakMap,Ei.set(t,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=Ei.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});function hu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zt={exports:{}},du=Zt.exports,An;function pu(){return An||(An=1,function(e,t){(function(s,i){i(t)})(du,function(s){function f(m,P,k){let N=m*(1-k)**2,ee=P*k**2;return ee/(N+ee)}function d(m,P,k,N){m=pe(m),P=pe(P);let ee=O(m),W=O(P),Qe=R(ee),ot=R(W),vt=re(Qe,Z),Fr=re(ot,Z);k=f(vt,Fr,k);const c=new Array(38);for(let p=0;p<38;p++){let v=(1-k)*((1-Qe[p])**2/(2*Qe[p]))+k*((1-ot[p])**2/(2*ot[p])),b=1+v-Math.sqrt(v**2+2*v);c[p]=b}let u=j(Y(c));return u.push(q(m[3],P[3],k)),ve(u,N)}function g(m,P,k,N){let ee=[];for(let W=0;W<k;W++)ee.push(d(m,P,W/(k-1),N));return ee}function x(m){return m<.04045?m/12.92:((m+.055)/1.055)**2.4}function C(m){return m<.0031308?m*12.92:1.055*m**(1/2.4)-.055}function O(m){let P=x(m[0]/255),k=x(m[1]/255),N=x(m[2]/255);return[P,k,N]}function Q(m){let P=C(m[0]),k=C(m[1]),N=C(m[2]);return[Math.round(fe(P,0,1)*255),Math.round(fe(k,0,1)*255),Math.round(fe(N,0,1)*255)]}function j(m){let P=re(nt[0],m),k=re(nt[1],m),N=re(nt[2],m);return Q([P,k,N])}function Y(m){let P=re(m,le),k=re(m,Z),N=re(m,Xe);return[P,k,N]}function V(m){let P=Math.min(Math.min(m[0],m[1]),m[2]);m=[m[0]-P,m[1]-P,m[2]-P];let k=Math.min(m[1],m[2]),N=Math.min(m[0],m[2]),ee=Math.min(m[0],m[1]),W=Math.max(0,Math.min(m[0]-m[2],m[0]-m[1])),Qe=Math.max(0,Math.min(m[1]-m[2],m[1]-m[0])),ot=Math.max(0,Math.min(m[2]-m[1],m[2]-m[0]));return[P,k,N,ee,W,Qe,ot]}function R(m){let P=V(m);const k=new Array(38);for(let N=0;N<38;N++)k[N]=Math.max(1e-8,P[0]+P[1]*H[N]+P[2]*se[N]+P[3]*ae[N]+P[4]*Vt[N]+P[5]*Ss[N]+P[6]*_e[N]);return k}function q(m,P,k){return m+k*(P-m)}function fe(m,P,k){return Math.min(Math.max(m,P),k)}function re(m,P){return m.map((k,N)=>m[N]*P[N]).reduce((k,N)=>k+N)}function xe(m){let P=pe(m);return[P[0]/255,P[1]/255,P[2]/255,P[3]>1?P[3]/255:P[3]]}function pe(m){if(Array.isArray(m)){const[P,k,N,ee=1]=m;return[P,k,N,ee]}if(m.startsWith("rgb")){m=m.slice(m.indexOf("(")+1,-1).split(",").map(W=>W.trim().endsWith("%")?Math.round(parseFloat(W.trim())*2.55):Number(W.trim()));const[P,k,N,ee=1]=m;return[P,k,N,ee]}if(m.startsWith("#")){m.length===4||m.length===5?m=m.split("").slice(1).map(W=>W+W).join(""):m=m.slice(1),m=m.match(/.{1,2}/g).map(W=>parseInt(W,16));const[P,k,N,ee=1]=m.length===3?[...m,1]:m;return[P,k,N,ee]}return[0,0,0,1]}function ve(m,P){let k=m[0],N=m[1],ee=m[2],W=m[3];return P===0||P===1?`rgb${P===1?"a":""}(${k}, ${N}, ${ee}${P===1?", "+W:""})`:(k=k.toString(16),N=N.toString(16),ee=ee.toString(16),W=(W>1?W:Math.round(fe(W,0,1)*255)).toString(16),k.length==1&&(k="0"+k),N.length==1&&(N="0"+N),ee.length==1&&(ee="0"+ee),W.length==1&&(W="0"+W),`#${k}${N}${ee}${P===3?W:""}`)}const H=[.96853629,.96855103,.96859338,.96877345,.96942204,.97143709,.97541862,.98074186,.98580992,.98971194,.99238027,.99409844,.995172,.99576545,.99593552,.99564041,.99464769,.99229579,.98638762,.96829712,.89228016,.53740239,.15360445,.05705719,.03126539,.02205445,.01802271,.0161346,.01520947,.01475977,.01454263,.01444459,.01439897,.0143762,.01436343,.01435687,.0143537,.01435408],se=[.51567122,.5401552,.62645502,.75595012,.92826996,.97223624,.98616174,.98955255,.98676237,.97312575,.91944277,.32564851,.13820628,.05015143,.02912336,.02421691,.02660696,.03407586,.04835936,1172e-7,8554e-8,.85267882,.93188793,.94810268,.94200977,.91478045,.87065445,.78827548,.65738359,.59909403,.56817268,.54031997,.52110241,.51041094,.50526577,.5025508,.50126452,.50083021],ae=[.02055257,.02059936,.02062723,.02073387,.02114202,.02233154,.02556857,.03330189,.05185294,.10087639,.24000413,.53589066,.79874659,.91186529,.95399623,.97137099,.97939505,.98345207,.98553736,.98648905,.98674535,.98657555,.98611877,.98559942,.98507063,.98460039,.98425301,.98403909,.98388535,.98376116,.98368246,.98365023,.98361309,.98357259,.98353856,.98351247,.98350101,.98350852],Vt=[.03147571,.03146636,.03140624,.03119611,.03053888,.02856855,.02459485,.0192952,.01423112,.01033111,.00765876,.00593693,.00485616,.00426186,.00409039,.00438375,.00537525,.00772962,.0136612,.03181352,.10791525,.46249516,.84604333,.94275572,.96860996,.97783966,.98187757,.98377315,.98470202,.98515481,.98537114,.98546685,.98550011,.98551031,.98550741,.98551323,.98551563,.98551547],Ss=[.49108579,.46944057,.4016578,.2449042,.0682688,.02732883,.013606,.01000187,.01284127,.02636635,.07058713,.70421692,.85473994,.95081565,.9717037,.97651888,.97429245,.97012917,.9425863,.99989207,.99989891,.13823139,.06968113,.05628787,.06111561,.08987709,.13656016,.22169624,.32176956,.36157329,.4836192,.46488579,.47440306,.4857699,.49267971,.49625685,.49807754,.49889859],_e=[.97901834,.97901649,.97901118,.97892146,.97858555,.97743705,.97428075,.96663223,.94822893,.89937713,.76070164,.4642044,.20123039,.08808402,.04592894,.02860373,.02060067,.01656701,.01451549,.01357964,.01331243,.01347661,.01387181,.01435472,.01479836,.0151525,.01540513,.01557233,.0156571,.01571025,.01571916,.01572133,.01572502,.01571717,.01571905,.01571059,.01569728,.0157002],le=[6469e-8,21941e-8,.00112057,.00376661,.01188055,.02328644,.03455942,.03722379,.03241838,.02123321,.01049099,.00329584,50704e-8,94867e-8,.00627372,.01686462,.02868965,.04267481,.05625475,.0694704,.08305315,.0861261,.09046614,.08500387,.07090667,.05062889,.03547396,.02146821,.01251646,.00680458,.00346457,.00149761,7697e-7,40737e-8,16901e-8,9522e-8,4903e-8,2e-5],Z=[184e-8,621e-8,3101e-8,10475e-8,35364e-8,95147e-8,.00228226,.00420733,.0066888,.0098884,.01524945,.02141831,.03342293,.05131001,.07040208,.08783871,.09424905,.09795667,.09415219,.08678102,.07885653,.0635267,.05374142,.04264606,.03161735,.02088521,.01386011,.00810264,.0046301,.00249138,.0012593,54165e-8,27795e-8,14711e-8,6103e-8,3439e-8,1771e-8,722e-8],Xe=[30502e-8,.00103681,.00531314,.01795439,.05707758,.11365162,.17335873,.19620658,.18608237,.13995048,.08917453,.04789621,.02814563,.01613766,.0077591,.00429615,.00200551,86147e-8,36904e-8,19143e-8,14956e-8,9231e-8,6813e-8,2883e-8,1577e-8,394e-8,158e-8,0,0,0,0,0,0,0,0,0,0,0],nt=[[3.24306333,-1.53837619,-.49893282],[-.96896309,1.87542451,.04154303],[.05568392,-.20417438,1.05799454]];function Je(){return`
#ifndef SPECTRAL
#define SPECTRAL

const int SPECTRAL_SIZE = 38;
const float SPECTRAL_GAMMA = 2.4;
const float SPECTRAL_EPSILON = 0.0001;

float spectral_uncompand(float x) {
  return (x < 0.04045) ? x / 12.92 : pow((x + 0.055) / 1.055, SPECTRAL_GAMMA);
}

float spectral_compand(float x) {
  return (x < 0.0031308) ? x * 12.92 : 1.055 * pow(x, 1.0 / SPECTRAL_GAMMA) - 0.055;
}

vec3 spectral_srgb_to_linear(vec3 srgb) {
    return vec3(spectral_uncompand(srgb[0]), spectral_uncompand(srgb[1]), spectral_uncompand(srgb[2]));
}

vec3 spectral_linear_to_srgb(vec3 lrgb) {
    return clamp(vec3(spectral_compand(lrgb[0]), spectral_compand(lrgb[1]), spectral_compand(lrgb[2])), 0.0, 1.0);
}

void spectral_upsampling(vec3 lrgb, out float w, out float c, out float m, out float y, out float r, out float g, out float b) {
    w = min(lrgb.r, min(lrgb.g, lrgb.b));

    lrgb -= w;

    c = min(lrgb.g, lrgb.b);
    m = min(lrgb.r, lrgb.b);
    y = min(lrgb.r, lrgb.g);
    r = min(max(0., lrgb.r - lrgb.b), max(0., lrgb.r - lrgb.g));
    g = min(max(0., lrgb.g - lrgb.b), max(0., lrgb.g - lrgb.r));
    b = min(max(0., lrgb.b - lrgb.g), max(0., lrgb.b - lrgb.r));
}

void spectral_linear_to_reflectance(vec3 lrgb, inout float R[SPECTRAL_SIZE]) {
    float w, c, m, y, r, g, b;
    
    spectral_upsampling(lrgb, w, c, m, y, r, g, b);
    
     R[0] = max(SPECTRAL_EPSILON, w + c * 0.96853629 + m * 0.51567122 + y * 0.02055257 + r * 0.03147571 + g * 0.49108579 + b * 0.97901834);
     R[1] = max(SPECTRAL_EPSILON, w + c * 0.96855103 + m * 0.54015520 + y * 0.02059936 + r * 0.03146636 + g * 0.46944057 + b * 0.97901649);
     R[2] = max(SPECTRAL_EPSILON, w + c * 0.96859338 + m * 0.62645502 + y * 0.02062723 + r * 0.03140624 + g * 0.40165780 + b * 0.97901118);
     R[3] = max(SPECTRAL_EPSILON, w + c * 0.96877345 + m * 0.75595012 + y * 0.02073387 + r * 0.03119611 + g * 0.24490420 + b * 0.97892146);
     R[4] = max(SPECTRAL_EPSILON, w + c * 0.96942204 + m * 0.92826996 + y * 0.02114202 + r * 0.03053888 + g * 0.06826880 + b * 0.97858555);
     R[5] = max(SPECTRAL_EPSILON, w + c * 0.97143709 + m * 0.97223624 + y * 0.02233154 + r * 0.02856855 + g * 0.02732883 + b * 0.97743705);
     R[6] = max(SPECTRAL_EPSILON, w + c * 0.97541862 + m * 0.98616174 + y * 0.02556857 + r * 0.02459485 + g * 0.01360600 + b * 0.97428075);
     R[7] = max(SPECTRAL_EPSILON, w + c * 0.98074186 + m * 0.98955255 + y * 0.03330189 + r * 0.01929520 + g * 0.01000187 + b * 0.96663223);
     R[8] = max(SPECTRAL_EPSILON, w + c * 0.98580992 + m * 0.98676237 + y * 0.05185294 + r * 0.01423112 + g * 0.01284127 + b * 0.94822893);
     R[9] = max(SPECTRAL_EPSILON, w + c * 0.98971194 + m * 0.97312575 + y * 0.10087639 + r * 0.01033111 + g * 0.02636635 + b * 0.89937713);
    R[10] = max(SPECTRAL_EPSILON, w + c * 0.99238027 + m * 0.91944277 + y * 0.24000413 + r * 0.00765876 + g * 0.07058713 + b * 0.76070164);
    R[11] = max(SPECTRAL_EPSILON, w + c * 0.99409844 + m * 0.32564851 + y * 0.53589066 + r * 0.00593693 + g * 0.70421692 + b * 0.46420440);
    R[12] = max(SPECTRAL_EPSILON, w + c * 0.99517200 + m * 0.13820628 + y * 0.79874659 + r * 0.00485616 + g * 0.85473994 + b * 0.20123039);
    R[13] = max(SPECTRAL_EPSILON, w + c * 0.99576545 + m * 0.05015143 + y * 0.91186529 + r * 0.00426186 + g * 0.95081565 + b * 0.08808402);
    R[14] = max(SPECTRAL_EPSILON, w + c * 0.99593552 + m * 0.02912336 + y * 0.95399623 + r * 0.00409039 + g * 0.97170370 + b * 0.04592894);
    R[15] = max(SPECTRAL_EPSILON, w + c * 0.99564041 + m * 0.02421691 + y * 0.97137099 + r * 0.00438375 + g * 0.97651888 + b * 0.02860373);
    R[16] = max(SPECTRAL_EPSILON, w + c * 0.99464769 + m * 0.02660696 + y * 0.97939505 + r * 0.00537525 + g * 0.97429245 + b * 0.02060067);
    R[17] = max(SPECTRAL_EPSILON, w + c * 0.99229579 + m * 0.03407586 + y * 0.98345207 + r * 0.00772962 + g * 0.97012917 + b * 0.01656701);
    R[18] = max(SPECTRAL_EPSILON, w + c * 0.98638762 + m * 0.04835936 + y * 0.98553736 + r * 0.01366120 + g * 0.94258630 + b * 0.01451549);
    R[19] = max(SPECTRAL_EPSILON, w + c * 0.96829712 + m * 0.00011720 + y * 0.98648905 + r * 0.03181352 + g * 0.99989207 + b * 0.01357964);
    R[20] = max(SPECTRAL_EPSILON, w + c * 0.89228016 + m * 0.00008554 + y * 0.98674535 + r * 0.10791525 + g * 0.99989891 + b * 0.01331243);
    R[21] = max(SPECTRAL_EPSILON, w + c * 0.53740239 + m * 0.85267882 + y * 0.98657555 + r * 0.46249516 + g * 0.13823139 + b * 0.01347661);
    R[22] = max(SPECTRAL_EPSILON, w + c * 0.15360445 + m * 0.93188793 + y * 0.98611877 + r * 0.84604333 + g * 0.06968113 + b * 0.01387181);
    R[23] = max(SPECTRAL_EPSILON, w + c * 0.05705719 + m * 0.94810268 + y * 0.98559942 + r * 0.94275572 + g * 0.05628787 + b * 0.01435472);
    R[24] = max(SPECTRAL_EPSILON, w + c * 0.03126539 + m * 0.94200977 + y * 0.98507063 + r * 0.96860996 + g * 0.06111561 + b * 0.01479836);
    R[25] = max(SPECTRAL_EPSILON, w + c * 0.02205445 + m * 0.91478045 + y * 0.98460039 + r * 0.97783966 + g * 0.08987709 + b * 0.01515250);
    R[26] = max(SPECTRAL_EPSILON, w + c * 0.01802271 + m * 0.87065445 + y * 0.98425301 + r * 0.98187757 + g * 0.13656016 + b * 0.01540513);
    R[27] = max(SPECTRAL_EPSILON, w + c * 0.01613460 + m * 0.78827548 + y * 0.98403909 + r * 0.98377315 + g * 0.22169624 + b * 0.01557233);
    R[28] = max(SPECTRAL_EPSILON, w + c * 0.01520947 + m * 0.65738359 + y * 0.98388535 + r * 0.98470202 + g * 0.32176956 + b * 0.01565710);
    R[29] = max(SPECTRAL_EPSILON, w + c * 0.01475977 + m * 0.59909403 + y * 0.98376116 + r * 0.98515481 + g * 0.36157329 + b * 0.01571025);
    R[30] = max(SPECTRAL_EPSILON, w + c * 0.01454263 + m * 0.56817268 + y * 0.98368246 + r * 0.98537114 + g * 0.48361920 + b * 0.01571916);
    R[31] = max(SPECTRAL_EPSILON, w + c * 0.01444459 + m * 0.54031997 + y * 0.98365023 + r * 0.98546685 + g * 0.46488579 + b * 0.01572133);
    R[32] = max(SPECTRAL_EPSILON, w + c * 0.01439897 + m * 0.52110241 + y * 0.98361309 + r * 0.98550011 + g * 0.47440306 + b * 0.01572502);
    R[33] = max(SPECTRAL_EPSILON, w + c * 0.01437620 + m * 0.51041094 + y * 0.98357259 + r * 0.98551031 + g * 0.48576990 + b * 0.01571717);
    R[34] = max(SPECTRAL_EPSILON, w + c * 0.01436343 + m * 0.50526577 + y * 0.98353856 + r * 0.98550741 + g * 0.49267971 + b * 0.01571905);
    R[35] = max(SPECTRAL_EPSILON, w + c * 0.01435687 + m * 0.50255080 + y * 0.98351247 + r * 0.98551323 + g * 0.49625685 + b * 0.01571059);
    R[36] = max(SPECTRAL_EPSILON, w + c * 0.01435370 + m * 0.50126452 + y * 0.98350101 + r * 0.98551563 + g * 0.49807754 + b * 0.01569728);
    R[37] = max(SPECTRAL_EPSILON, w + c * 0.01435408 + m * 0.50083021 + y * 0.98350852 + r * 0.98551547 + g * 0.49889859 + b * 0.01570020);
}

vec3 spectral_xyz_to_srgb(vec3 xyz) {
    mat3 XYZ_RGB;

    XYZ_RGB[0] = vec3( 3.24306333, -1.53837619, -0.49893282);
    XYZ_RGB[1] = vec3(-0.96896309,  1.87542451,  0.04154303);
    XYZ_RGB[2] = vec3( 0.05568392, -0.20417438,  1.05799454);
    
    float r = dot(XYZ_RGB[0], xyz);
    float g = dot(XYZ_RGB[1], xyz);
    float b = dot(XYZ_RGB[2], xyz);

    return spectral_linear_to_srgb(vec3(r, g, b));
}

vec3 spectral_reflectance_to_xyz(float R[SPECTRAL_SIZE]) {
    vec3 xyz = vec3(0.0);
    
    xyz +=  R[0] * vec3(0.00006469, 0.00000184, 0.00030502);
    xyz +=  R[1] * vec3(0.00021941, 0.00000621, 0.00103681);
    xyz +=  R[2] * vec3(0.00112057, 0.00003101, 0.00531314);
    xyz +=  R[3] * vec3(0.00376661, 0.00010475, 0.01795439);
    xyz +=  R[4] * vec3(0.01188055, 0.00035364, 0.05707758);
    xyz +=  R[5] * vec3(0.02328644, 0.00095147, 0.11365162);
    xyz +=  R[6] * vec3(0.03455942, 0.00228226, 0.17335873);
    xyz +=  R[7] * vec3(0.03722379, 0.00420733, 0.19620658);
    xyz +=  R[8] * vec3(0.03241838, 0.00668880, 0.18608237);
    xyz +=  R[9] * vec3(0.02123321, 0.00988840, 0.13995048);
    xyz += R[10] * vec3(0.01049099, 0.01524945, 0.08917453);
    xyz += R[11] * vec3(0.00329584, 0.02141831, 0.04789621);
    xyz += R[12] * vec3(0.00050704, 0.03342293, 0.02814563);
    xyz += R[13] * vec3(0.00094867, 0.05131001, 0.01613766);
    xyz += R[14] * vec3(0.00627372, 0.07040208, 0.00775910);
    xyz += R[15] * vec3(0.01686462, 0.08783871, 0.00429615);
    xyz += R[16] * vec3(0.02868965, 0.09424905, 0.00200551);
    xyz += R[17] * vec3(0.04267481, 0.09795667, 0.00086147);
    xyz += R[18] * vec3(0.05625475, 0.09415219, 0.00036904);
    xyz += R[19] * vec3(0.06947040, 0.08678102, 0.00019143);
    xyz += R[20] * vec3(0.08305315, 0.07885653, 0.00014956);
    xyz += R[21] * vec3(0.08612610, 0.06352670, 0.00009231);
    xyz += R[22] * vec3(0.09046614, 0.05374142, 0.00006813);
    xyz += R[23] * vec3(0.08500387, 0.04264606, 0.00002883);
    xyz += R[24] * vec3(0.07090667, 0.03161735, 0.00001577);
    xyz += R[25] * vec3(0.05062889, 0.02088521, 0.00000394);
    xyz += R[26] * vec3(0.03547396, 0.01386011, 0.00000158);
    xyz += R[27] * vec3(0.02146821, 0.00810264, 0.00000000);
    xyz += R[28] * vec3(0.01251646, 0.00463010, 0.00000000);
    xyz += R[29] * vec3(0.00680458, 0.00249138, 0.00000000);
    xyz += R[30] * vec3(0.00346457, 0.00125930, 0.00000000);
    xyz += R[31] * vec3(0.00149761, 0.00054165, 0.00000000);
    xyz += R[32] * vec3(0.00076970, 0.00027795, 0.00000000);
    xyz += R[33] * vec3(0.00040737, 0.00014711, 0.00000000);
    xyz += R[34] * vec3(0.00016901, 0.00006103, 0.00000000);
    xyz += R[35] * vec3(0.00009522, 0.00003439, 0.00000000);
    xyz += R[36] * vec3(0.00004903, 0.00001771, 0.00000000);
    xyz += R[37] * vec3(0.00002000, 0.00000722, 0.00000000);

    return xyz;
}

float spectral_linear_to_concentration(float l1, float l2, float t) {
    float t1 = l1 * pow(1.0 - t, 2.0);
    float t2 = l2 * pow(t, 2.0);

    return t2 / (t1 + t2);
}

vec3 spectral_mix(vec3 color1, vec3 color2, float t) {
    vec3 lrgb1 = spectral_srgb_to_linear(color1);
    vec3 lrgb2 = spectral_srgb_to_linear(color2);

    float R1[SPECTRAL_SIZE];
    float R2[SPECTRAL_SIZE];

    spectral_linear_to_reflectance(lrgb1, R1);
    spectral_linear_to_reflectance(lrgb2, R2);

    float l1 = spectral_reflectance_to_xyz(R1)[1];
    float l2 = spectral_reflectance_to_xyz(R2)[1];

    t = spectral_linear_to_concentration(l1, l2, t);

    float R[SPECTRAL_SIZE];

    for (int i = 0; i < SPECTRAL_SIZE; i++) {
      float KS = (1.0 - t) * (pow(1.0 - R1[i], 2.0) / (2.0 * R1[i])) + t * (pow(1.0 - R2[i], 2.0) / (2.0 * R2[i]));
      float KM = 1.0 + KS - sqrt(pow(KS, 2.0) + 2.0 * KS);

      //Saunderson correction
      // let S = ((1.0 - K1) * (1.0 - K2) * KM) / (1.0 - K2 * KM);

      R[i] = KM;
    }

    return spectral_xyz_to_srgb(spectral_reflectance_to_xyz(R));
}

vec4 spectral_mix(vec4 color1, vec4 color2, float t) {
    return vec4(spectral_mix(color1.rgb, color2.rgb, t), mix(color1.a, color2.a, t));
}

#endif
    `}s.RGB=0,s.RGBA=1,s.HEX=2,s.HEXA=3,s.mix=d,s.palette=g,s.glsl_color=xe,s.glsl=Je})}(Zt,Zt.exports)),Zt.exports}var gu=pu();const mu=hu(gu);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const el="important",bu=" !"+el,Nr=Xo(class extends Jo{constructor(e){var t;if(super(e),e.type!==Zo.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,s)=>{const i=e[s];return i==null?t:t+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:s}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?s.removeProperty(i):s[i]=null);for(const i in t){const r=t[i];if(r!=null){this.ft.add(i);const n=typeof r=="string"&&r.endsWith(bu);i.includes("-")||n?s.setProperty(i,n?r.slice(0,-11):r,n?el:""):s[i]=r}}return Tt}});var vu=Object.defineProperty,tl=e=>{throw TypeError(e)},_u=(e,t,s)=>t in e?vu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,B=(e,t,s)=>_u(e,typeof t!="symbol"?t+"":t,s),sl=(e,t,s)=>t.has(e)||tl("Cannot "+s),I=(e,t,s)=>(sl(e,t,"read from private field"),s?s.call(e):t.get(e)),Ot=(e,t,s)=>t.has(e)?tl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),T=(e,t,s)=>(sl(e,t,"access private method"),s);class Bi extends we{constructor(){super(),B(this,"rootEl",me())}render(){return J`
      <div ${be(this.rootEl)} class="body">
        ${this.label?J` <span class="label" part="label">${this.label}</span>`:J``}
        <div class="content" part="content">
          <slot></slot>
        </div>
      </div>
    `}}B(Bi,"properties",{label:{type:String}}),B(Bi,"styles",ze`
    :host {
      --background-color: light-dark(hsl(0 100 100 / 0.2), hsl(0 100 100 / 0.1));
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
  `);class ji extends we{constructor(){super(),B(this,"rootEl",me())}render(){return J`
      <div
        ${be(this.rootEl)}
        class="body"
      >
        <slot></slot>
      </div>
    `}}B(ji,"properties",{}),B(ji,"styles",ze`
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
  `);class Ui extends we{constructor(){super(),B(this,"rootEl",me()),B(this,"feedBackEl",me()),this.disabled=!1,this.feedback=!1}showFeedBack(t,s=1e3){if(!this.feedback){console.warn("Please enable the feedback attribute.");return}const{value:i}=this.feedBackEl;i.innerHTML=t,i.setAttribute("duration",s),i.setAttribute("show","")}render(){return J`
      <button ${be(this.rootEl)} class="body" ?disabled=${this.disabled}>
        ${this.feedback?J` <rgb-color-mixer-ui-tool-tip
              ${be(this.feedBackEl)}
            ></rgb-color-mixer-ui-tool-tip>`:J``}
        <rgb-color-mixer-ui-icon>
          <slot></slot>
        </rgb-color-mixer-ui-icon>
      </button>
    `}}B(Ui,"properties",{disabled:{type:Boolean},feedback:{type:Boolean}}),B(Ui,"styles",ze`
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
  `);const Rn={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};var Cn={red:0,orange:60,yellow:120,green:180,blue:240,purple:300};function yu(e){var t,s,i,r=[],n=1,o;if(typeof e=="number")return{space:"rgb",values:[e>>>16,(e&65280)>>>8,e&255],alpha:1};if(typeof e=="number")return{space:"rgb",values:[e>>>16,(e&65280)>>>8,e&255],alpha:1};if(e=String(e).toLowerCase(),Rn[e])r=Rn[e].slice(),o="rgb";else if(e==="transparent")n=0,o="rgb",r=[0,0,0];else if(e[0]==="#"){var l=e.slice(1),a=l.length,h=a<=4;n=1,h?(r=[parseInt(l[0]+l[0],16),parseInt(l[1]+l[1],16),parseInt(l[2]+l[2],16)],a===4&&(n=parseInt(l[3]+l[3],16)/255)):(r=[parseInt(l[0]+l[1],16),parseInt(l[2]+l[3],16),parseInt(l[4]+l[5],16)],a===8&&(n=parseInt(l[6]+l[7],16)/255)),r[0]||(r[0]=0),r[1]||(r[1]=0),r[2]||(r[2]=0),o="rgb"}else if(i=/^((?:rgba?|hs[lvb]a?|hwba?|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms|oklch|oklab|color))\s*\(([^\)]*)\)/.exec(e)){var f=i[1];o=f.replace(/a$/,"");var d=o==="cmyk"?4:o==="gray"?1:3;r=i[2].trim().split(/\s*[,\/]\s*|\s+/),o==="color"&&(o=r.shift()),r=r.map(function(g,x){if(g[g.length-1]==="%")return g=parseFloat(g)/100,x===3?g:o==="rgb"?g*255:o[0]==="h"||o[0]==="l"&&!x?g*100:o==="lab"?g*125:o==="lch"?x<2?g*150:g*360:o[0]==="o"&&!x?g:o==="oklab"?g*.4:o==="oklch"?x<2?g*.4:g*360:g;if(o[x]==="h"||x===2&&o[o.length-1]==="h"){if(Cn[g]!==void 0)return Cn[g];if(g.endsWith("deg"))return parseFloat(g);if(g.endsWith("turn"))return parseFloat(g)*360;if(g.endsWith("grad"))return parseFloat(g)*360/400;if(g.endsWith("rad"))return parseFloat(g)*180/Math.PI}return g==="none"?0:parseFloat(g)}),n=r.length>d?r.pop():1}else/[0-9](?:\s|\/|,)/.test(e)&&(r=e.match(/([0-9]+)/g).map(function(g){return parseFloat(g)}),o=((s=(t=e.match(/([a-z])/ig))==null?void 0:t.join(""))==null?void 0:s.toLowerCase())||"rgb");return{space:o,values:r,alpha:n}}const xs={name:"rgb",min:[0,0,0],max:[255,255,255],channel:["red","green","blue"],alias:["RGB"]};var Ct={name:"hsl",min:[0,0,0],max:[360,100,100],channel:["hue","saturation","lightness"],alias:["HSL"],rgb:function(e){var t=e[0]/360,s=e[1]/100,i=e[2]/100,r,n,o,l,a,h=0;if(s===0)return a=i*255,[a,a,a];for(n=i<.5?i*(1+s):i+s-i*s,r=2*i-n,l=[0,0,0];h<3;)o=t+1/3*-(h-1),o<0?o++:o>1&&o--,a=6*o<1?r+(n-r)*6*o:2*o<1?n:3*o<2?r+(n-r)*(2/3-o)*6:r,l[h++]=a*255;return l}};xs.hsl=function(e){var t=e[0]/255,s=e[1]/255,i=e[2]/255,r=Math.min(t,s,i),n=Math.max(t,s,i),o=n-r,l,a,h;return n===r?l=0:t===n?l=(s-i)/o:s===n?l=2+(i-t)/o:i===n&&(l=4+(t-s)/o),l=Math.min(l*60,360),l<0&&(l+=360),h=(r+n)/2,n===r?a=0:h<=.5?a=o/(n+r):a=o/(2-n-r),[l,a*100,h*100]};function Vi(e){Array.isArray(e)&&e.raw&&(e=String.raw(...arguments)),e instanceof Number&&(e=+e);var t,s=yu(e);if(!s.space)return[];const i=s.space[0]==="h"?Ct.min:xs.min,r=s.space[0]==="h"?Ct.max:xs.max;return t=Array(3),t[0]=Math.min(Math.max(s.values[0],i[0]),r[0]),t[1]=Math.min(Math.max(s.values[1],i[1]),r[1]),t[2]=Math.min(Math.max(s.values[2],i[2]),r[2]),s.space[0]==="h"&&(t=Ct.rgb(t)),t.push(Math.min(Math.max(s.alpha,0),1)),t}function ks(e,t,s){return Math.min(Math.max(e,t),s)}function Wi(e,t="rgb"){const s=Math.round(e[0]*255),i=Math.round(e[1]*255),r=Math.round(e[2]*255);return t==="hex"?"#"+(r|i<<8|s<<16|1<<24).toString(16).slice(1):`rgb(${s},${i},${r})`}function Bt(e){const[t,s,i]=e;return[t/255,s/255,i/255]}async function xu(e){const t={"text/plain":e},s=new ClipboardItem(t);await navigator.clipboard.write([s])}function Lt(e,t,s={bubbles:!0,composed:!0,cancelable:!0}){return new CustomEvent(e,{detail:window.structuredClone(t),...s})}function $u(e){const t=Vi(e);if(!t)return console.warn("Cound not parse text to color. Fallback to black."),"black";const[s,i,r]=Bt(t);return .2126*s+.7152*i+.0722*r>.179?"black":"white"}function wu(){return new Promise((e,t)=>{new EyeDropper().open().then(s=>{e(s.sRGBHex)}).catch(t)})}function Su(){return"EyeDropper"in window}var Is,il,rl;class Ki extends we{constructor(){super(),Ot(this,Is),B(this,"rootEl",me()),B(this,"inputEl",me()),this.autofocus=!1,this.disabled=!1,this.readonly=!1,this.type="text",this.min=void 0,this.max=void 0,this.step=void 0}setValue(t){let s=t;this.type==="number"&&(this.step!=null&&(s=Math.round(s/this.step)*this.step),this.max!=null&&(s=Math.min(s,this.max)),this.min!=null&&(s=Math.max(s,this.min))),T(this,Is,il).call(this,s)}clear(){this.setValue("")}firstUpdated(t){t.has("autofocus")&&this.autofocus&&this.inputEl.value.focus()}updated(t){t.has("value")&&this.inputEl.value&&(this.inputEl.value.value=this.value)}render(){return J`
      <div ${be(this.rootEl)} class="body">
        <input
          ${be(this.inputEl)}
          part="input"
          type="${this.type}"
          min="${this.min}"
          max="${this.max}"
          step="${this.step}"
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          @change=${T(this,Is,rl)}
        />
      </div>
    `}}Is=new WeakSet,il=function(e){const t=Lt("update:value",{value:e},{bubbles:!1});this.dispatchEvent(t)},rl=function(e){const{value:t}=e.target;this.setValue(t)},B(Ki,"properties",{autofocus:{type:Boolean},disabled:{type:Boolean},max:{type:Number},min:{type:Number},readonly:{type:Boolean},step:{type:Number},type:{type:String},value:{type:String}}),B(Ki,"styles",ze`
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
  `);class Gi extends we{constructor(){super(),B(this,"rootEl",me())}render(){return J`
      <div
        ${be(this.rootEl)}
        class="body"
      >
      </div>
    `}}B(Gi,"properties",{}),B(Gi,"styles",ze`
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
  `);class Yi extends we{constructor(){super(),B(this,"rootEl",me()),this._intervalTimer,this.duration=1e3}willUpdate(t){t.has("show")&&(clearInterval(this._intervalTimer),this._intervalTimer=setTimeout(()=>{this.show=!1},this.duration))}render(){return J`
      <div
        ${be(this.rootEl)}
        class="body"
      >
        <slot></slot>
      </div>
    `}}B(Yi,"properties",{duration:{type:Number,reflect:!0},show:{type:Boolean,reflect:!0}}),B(Yi,"styles",ze`
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
        content: "";
        display: block;
        left: calc(50% - 4px);
        position: absolute;
      }
    }
  `);var Ae,Ns,nl,ol,ll,al,cl,cs,ul;class qi extends we{constructor(){super(),Ot(this,Ae),B(this,"rootEl",me()),this._sliderValue=0,this.colorActive=null}resetSlider(){this._sliderValue=0}willUpdate(t){if(t.has("_sliderValue")){T(this,Ae,cs).call(this,null);const s=I(this,Ae,Ns).call(this,this._sliderValue);T(this,Ae,cl).call(this,s)}t.has("colorActive")&&T(this,Ae,cs).call(this,this.colorActive)}render(){return J`
      <div ${be(this.rootEl)} class="body">
        <rgb-color-mixer-blender-stop
          ?active="${this.colorActive==="start"}"
          value=${this.colorStart}
          @update:active=${T(this,Ae,ll)}
        ></rgb-color-mixer-blender-stop>
        <rgb-color-slider
          .colorFunc=${T(this,Ae,ul).bind(this)}
          .colorStops=${I(this,Ae,nl)}
          max="1"
          min="0"
          step="0.01"
          value=${this._sliderValue}
          @update:value=${T(this,Ae,ol)}
        ></rgb-color-slider>
        <rgb-color-mixer-blender-stop
          ?active="${this.colorActive==="end"}"
          value=${this.colorEnd}
          @update:active=${T(this,Ae,al)}
        ></rgb-color-mixer-blender-stop>
      </div>
    `}}Ae=new WeakSet,Ns=function(){return e=>mu.mix(this.colorStart,this.colorEnd,e)},nl=function(){return[...Array(11).keys()].map(e=>I(this,Ae,Ns).call(this,e/10))},ol=function(e){this._sliderValue=e.detail.value},ll=function(e){const t=e.detail.value?"start":null;T(this,Ae,cs).call(this,t)},al=function(e){const t=e.detail.value?"end":null;T(this,Ae,cs).call(this,t)},cl=function(e){const t=Lt("update:value",{value:e},{bubbles:!1});this.dispatchEvent(t)},cs=function(e){const t=Lt("update:coloractive",{value:e},{bubbles:!1});this.dispatchEvent(t)},ul=function(e){return I(this,Ae,Ns).call(this,e)},B(qi,"properties",{_sliderValue:{state:!0},colorActive:{type:String},colorStart:{type:String},colorEnd:{type:String}}),B(qi,"styles",ze`
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
  `);var Ys,fl,Pn;class Zi extends we{constructor(){super(),Ot(this,Ys),this.active=!1,this.value="#000000"}willUpdate(t){t.has("value")&&(this._color=$u(this.value))}render(){return J`
      <button
        ?active=${this.active}
        class="body"
        style=${Nr({"--color":this._color,"--background-color":this.value})}
        @click=${T(this,Ys,fl)}
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
    `}}Ys=new WeakSet,fl=function(e){const t=!this.active;T(this,Ys,Pn).call(this,t)},Pn=function(e){const t=Lt("update:active",{value:e},{bubbles:!1});this.dispatchEvent(t)},B(Zi,"properties",{_color:{state:!0},active:{type:Boolean,reflect:!0},value:{type:String,reflect:!0}}),B(Zi,"styles",ze`
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
  `);var Xi,Fs,hl,dl;class Ji extends we{constructor(){super(),Ot(this,Fs),B(this,"rootEl",me()),B(this,"inputEl",me()),B(this,"copyEl",me()),Ot(this,Xi,Su()),this.disabled=!1,this.noCopy=!1,this.noPicker=!1}setValue(t){T(this,Fs,dl).call(this,t)}async copyToClipboard(){await xu(this.value),this.copyEl.value.showFeedBack("Copied")}async openEyeDropper(){let t;try{t=await wu()}catch{}this.setValue(t)}updated(t){t.has("value")&&(this.inputEl.value.value=this.value)}render(){return J`
      <div ${be(this.rootEl)} class="body">
        <rgb-color-mixer-ui-field class="value">
          <div
            class="swatch"
            style=${Nr({"--color":this.value})}
          ></div>
          <rgb-color-mixer-ui-input
            ${be(this.inputEl)}
            class="input"
            ?disabled=${this.disabled}
            value=${this.value}
            @update:value=${T(this,Fs,hl)}
          ></rgb-color-mixer-ui-input>
          ${this.noCopy?J``:J` <!-- Copy -->
                <rgb-color-mixer-ui-icon-button
                  ${be(this.copyEl)}
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
          ${!this.noPicker&&I(this,Xi)?J` <!-- Eye Dropper -->
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
                </rgb-color-mixer-ui-icon-button>`:J``}
        </rgb-color-mixer-ui-field>
      </div>
    `}}Xi=new WeakMap,Fs=new WeakSet,hl=function(e){e.stopPropagation();const{value:t}=e.detail;this.setValue(t)},dl=function(e){const t=Lt("update:value",{value:e},{bubbles:!1});this.dispatchEvent(t)},B(Ji,"properties",{disabled:{type:Boolean},noCopy:{type:Boolean},noPicker:{type:Boolean},value:{type:String,reflect:!0}}),B(Ji,"styles",ze`
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
  `);var ge,pl,gl,ml,Ai,bl,Qi,vl,_l,yl,er,xl,tr;class sr extends we{constructor(){super(),Ot(this,ge),B(this,"rootEl",me()),B(this,"trackEl",me()),B(this,"thumbEl",me()),this._percentage=0,this.value=0,this.min=0,this.max=1,this.step=.01,this.width=320,this.height=32,this.colorStops=[],this.colorFunc=()=>"transparent",this.stepMultiplier=1,this.stepMultiplierFast=10,this.gradientMode="to right in srgb",this._handlePointerUp=T(this,ge,vl).bind(this),this._handlePointerMove=T(this,ge,Qi).bind(this)}setValue(t){const{width:s}=this,i=ks(t,this.min,this.max),r=Math.round(i/this.step)*this.step,n=1/(this.max-this.min)*(r-this.min),o=s*n;T(this,ge,er).call(this,o,s)}previousStep(t=1){this.value=ks(this.value-this.step*t,this.min,this.max)}nextStep(t=1){this.value=ks(this.value+this.step*t,this.min,this.max)}willUpdate(t){t.has("value")&&this.setValue(this.value),t.has("_active")&&(this._active?T(this,ge,xl).call(this):T(this,ge,tr).call(this)),t.has("_percentage")&&T(this,ge,ml).call(this,this.value)}connectedCallback(){super.connectedCallback(),window.addEventListener("pointerup",this._handlePointerUp)}disconnectedCallback(){window.removeEventListener("pointerup",this._handlePointerUp),T(this,ge,tr).call(this),super.disconnectedCallback()}render(){return J`
      <div
        ${be(this.rootEl)}
        class="body"
        role="slider"
        tabindex="0"
        style=${Nr({"--height":this.height+"px","--percentage":this._percentage.toFixed(4),"--width":this.width+"px","--color-stops":I(this,ge,pl),"--color":I(this,ge,gl),"--gradient-mode":this.gradientMode})}
        @keydown=${T(this,ge,yl)}
      >
        <div class="ramp"></div>
        <div class="slider">
          <div
            ${be(this.trackEl)}
            class="track"
            @pointerdown=${T(this,ge,bl)}
          >
            <div
              ${be(this.thumbEl)}
              class="thumb"
              @pointerdown=${T(this,ge,_l)}
            ></div>
          </div>
        </div>
      </div>
    `}}ge=new WeakSet,pl=function(){return this.colorStops.join(",")},gl=function(){return this.colorFunc(this.value)},ml=function(e){const t=Lt("update:value",{value:e},{bubbles:!1});this.dispatchEvent(t)},Ai=function(){const e=this.min+(this.max-this.min)*this._percentage,t=Math.round(e/this.step)*this.step;this.value=t},bl=function(e){T(this,ge,Qi).call(this,e)},Qi=function(e){var t;const{x:s,width:i}=this.trackEl.value.getBoundingClientRect(),{clientX:r}=((t=e.touches)==null?void 0:t[0])||e,n=r-s;T(this,ge,er).call(this,n,i),T(this,ge,Ai).call(this)},vl=function(e){this._active=!1,T(this,ge,Ai).call(this)},_l=function(e){this._active=!0},yl=function(e){const t=e.shiftKey?this.stepMultiplierFast:this.stepMultiplier;switch(e.key){case"ArrowLeft":this.previousStep(t);break;case"ArrowRight":this.nextStep(t);break}},er=function(e,t){const s=ks(1/t*e,0,1);Math.abs(this._percentage-s)>.001&&(this._percentage=s)},xl=function(){window.addEventListener("pointermove",this._handlePointerMove)},tr=function(){window.removeEventListener("pointermove",this._handlePointerMove)},B(sr,"properties",{_active:{state:!0},_percentage:{state:!0},colorFunc:{type:Function},colorStops:{type:Array},gradientMode:{type:String},height:{type:Number,reflect:!0},max:{type:Number},min:{type:Number},step:{type:Number},stepMultiplier:{type:Number},stepMultiplierFast:{type:Number},value:{type:Number},width:{type:Number,reflect:!0}}),B(sr,"styles",ze`
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
      box-shadow:
        inset 1px 1px 0 0 hsl(0 100 100 / 0.2),
        0 0 0 1px black,
        0 0 0 2px white,
        1px 1px 4px 0 hsl(0 0 0 / 0.5);
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
  `);class ir extends we{constructor(){super(),B(this,"rootEl",me())}render(){return J`
      <div
        ${be(this.rootEl)}
        class="body"
      >
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
    `}}B(ir,"properties",{}),B(ir,"styles",ze`
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
      border-radius:  0 4px 4px 0;
      color: var(--color);
      display: flex;
      font-variant-numeric: tabular-nums;
      justify-content: stretch;
      width: 56px;
    }
`);var A,Ri,Ie,Te,Ms,$l,wl,Sl,El,Al,Rl,Xt,Cl,rr,nr,or,lr,ar,cr,Pl,Ml,Tl,Ol,Ll,kl,Il,Nl,Fl;class ur extends we{constructor(){super(),Ot(this,A),B(this,"rootEl",me()),B(this,"blenderEl",me()),this._colorActive=!1,this._colorEnd="#ffffff",this._colorStart="#000000",this._rgb=[0,0,0],this.channels="rgbhsl",this.format="rgb",this.initialValue=void 0,this.noBlender=!1,this.noCopy=!1,this.noPicker=!1,this.noValue=!1,this.value=void 0}get colorCss(){return Wi(this._rgb,this.format)}setColor(t){const s=Vi(t);s.length&&this.setRgb(s)}setRgb(t){const s=Bt(t);this.setRgbNormalized(s)}setRgbNormalized(t){t.some((s,i)=>Math.abs(s-this._rgb[i])>1e-4)&&(this._rgb=[...t])}connectedCallback(){super.connectedCallback()}willUpdate(t){if(t.has("initialValue")){this.setColor(this.initialValue),this._colorStart=I(this,A,Xt);const s=xs.hsl(Vi(I(this,A,Xt)));s[0]=(s[0]+90)%360;const i=Ct.rgb(s);this._colorEnd=Wi(Bt(i),"hex")}(t.has("_rgb")||t.has("_colorActive"))&&(this._colorActive==="start"?this._colorStart=I(this,A,Xt):this._colorActive==="end"&&(this._colorEnd=I(this,A,Xt))),t.has("_rgb")&&(this.value=this.colorCss,T(this,A,Cl).call(this,this.colorCss))}render(){const t=[];for(const s of this.channels){let i;switch(s){case"r":i=J` <!-- Red -->
            <rgb-color-slider-item>
              <div slot="label">R</div>
              <rgb-color-slider
                min="0"
                max="255"
                slot="slider"
                step="1"
                value=${I(this,A,Ie)[0]}
                .colorStops=${I(this,A,$l)}
                .colorFunc=${T(this,A,Pl).bind(this)}
                @update:value=${T(this,A,rr)}
              ></rgb-color-slider>
              <rgb-color-mixer-ui-input
                slot="value"
                class="value"
                max="255"
                min="0"
                step="1"
                type="number"
                value=${I(this,A,Ie)[0]}
                @update:value=${T(this,A,rr)}
              ></rgb-color-mixer-ui-input>
            </rgb-color-slider-item>`;break;case"g":i=J` <!-- Green -->
            <rgb-color-slider-item>
              <div slot="label">G</div>
              <rgb-color-slider
                .colorFunc=${T(this,A,Ml).bind(this)}
                .colorStops=${I(this,A,wl)}
                max="255"
                min="0"
                slot="slider"
                step="1"
                value=${I(this,A,Ie)[1]}
                @update:value=${T(this,A,nr)}
              ></rgb-color-slider>
              <rgb-color-mixer-ui-input
                slot="value"
                class="value"
                max="255"
                min="0"
                step="1"
                type="number"
                value=${I(this,A,Ie)[1]}
                @update:value=${T(this,A,nr)}
              ></rgb-color-mixer-ui-input>
            </rgb-color-slider-item>`;break;case"b":i=J` <!-- Blue -->
            <rgb-color-slider-item>
              <div slot="label">B</div>
              <rgb-color-slider
                .colorFunc=${T(this,A,Tl).bind(this)}
                .colorStops=${I(this,A,Sl)}
                max="255"
                min="0"
                slot="slider"
                step="1"
                value=${I(this,A,Ie)[2]}
                @update:value=${T(this,A,or)}
              ></rgb-color-slider>
              <rgb-color-mixer-ui-input
                slot="value"
                class="value"
                max="255"
                min="0"
                step="1"
                type="number"
                value=${I(this,A,Ie)[2]}
                @update:value=${T(this,A,or)}
              ></rgb-color-mixer-ui-input>
            </rgb-color-slider-item>`;break;case"h":i=J` <!-- Hue -->
            <rgb-color-slider-item>
              <div slot="label">H</div>
              <rgb-color-slider
                .colorFunc=${T(this,A,Ol).bind(this)}
                .colorStops=${I(this,A,El)}
                gradientMode="to right in hsl longer hue"
                max="360"
                min="0"
                slot="slider"
                step="0.01"
                stepMultiplier="100"
                stepMultiplierFast="1500"
                value=${I(this,A,Te)[0].toFixed(2)}
                @update:value=${T(this,A,lr)}
              ></rgb-color-slider>
              <rgb-color-mixer-ui-input
                slot="value"
                class="value"
                max="360"
                min="0"
                step="0.01"
                type="number"
                value=${I(this,A,Te)[0].toFixed(2)}
                @update:value=${T(this,A,lr)}
              ></rgb-color-mixer-ui-input>
            </rgb-color-slider-item>`;break;case"s":i=J` <!-- Saturation -->
            <rgb-color-slider-item>
              <div slot="label">S</div>
              <rgb-color-slider
                .colorFunc=${T(this,A,Ll).bind(this)}
                .colorStops=${I(this,A,Al)}
                gradientMode="to right in hsl"
                max="100"
                min="0"
                slot="slider"
                step="0.01"
                stepMultiplier="100"
                stepMultiplierFast="1000"
                value=${I(this,A,Te)[1].toFixed(2)}
                @update:value=${T(this,A,ar)}
              ></rgb-color-slider>
              <rgb-color-mixer-ui-input
                slot="value"
                class="value"
                max="100"
                min="0"
                step="0.01"
                type="number"
                value=${I(this,A,Te)[1].toFixed(2)}
                @update:value=${T(this,A,ar)}
              ></rgb-color-mixer-ui-input>
            </rgb-color-slider-item>`;break;case"l":i=J` <!-- Lightness -->
            <rgb-color-slider-item>
              <div slot="label">L</div>
              <rgb-color-slider
                .colorFunc=${T(this,A,kl).bind(this)}
                .colorStops=${I(this,A,Rl)}
                gradientMode="to right in hsl"
                max="100"
                min="0"
                slot="slider"
                step="0.01"
                stepMultiplier="100"
                stepMultiplierFast="1000"
                value=${I(this,A,Te)[2].toFixed(2)}
                @update:value=${T(this,A,cr)}
              ></rgb-color-slider>
              <rgb-color-mixer-ui-input
                slot="value"
                class="value"
                max="100"
                min="0"
                step="0.01"
                type="number"
                value=${I(this,A,Te)[2].toFixed(2)}
                @update:value=${T(this,A,cr)}
              ></rgb-color-mixer-ui-input>
            </rgb-color-slider-item>`;break}if(!i)throw new Error(`Unknown slider mode: ${s}`);t.push(i)}return J`
      <div ${be(this.rootEl)} class="mixer">
        ${this.noValue?J``:J` <!-- Value Input -->
              <rgb-color-mixer-value
                class="value-input"
                value=${this.colorCss}
                ?noCopy=${this.noCopy}
                ?noPicker=${this.noPicker}
                @update:value=${T(this,A,Il)}
              ></rgb-color-mixer-value>
              <rgb-color-mixer-ui-separator></rgb-color-mixer-ui-separator>`}
        ${this.noBlender?J``:J` <!-- Blender Slider -->
              <div class="blender">
                <rgb-color-mixer-blender
                  ${be(this.blenderEl)}
                  colorActive=${this._colorActive}
                  colorEnd=${this._colorEnd}
                  colorStart=${this._colorStart}
                  @update:coloractive=${T(this,A,Fl)}
                  @update:value=${T(this,A,Nl)}
                ></rgb-color-mixer-blender>
              </div>
              <rgb-color-mixer-ui-separator></rgb-color-mixer-ui-separator>`}
        <div class="channels">${t}</div>
      </div>
    `}}A=new WeakSet,Ri=function(){const[e,t,s]=this._rgb;return[e*255,t*255,s*255]},Ie=function(){const[e,t,s]=I(this,A,Ri);return[Math.round(e),Math.round(t),Math.round(s)]},Te=function(){return xs.hsl(I(this,A,Ri))},Ms=function(){const[e,t,s]=I(this,A,Te);return[Math.round(e*1e4)/1e4,Math.round(t*1e4)/1e4,Math.round(s*1e4)/1e4]},$l=function(){const[e,t,s]=I(this,A,Ie),i=`rgb(0 ${t} ${s})`,r=`rgb(255 ${t} ${s})`;return[i,r]},wl=function(){const[e,t,s]=I(this,A,Ie),i=`rgb(${e} 0 ${s})`,r=`rgb(${e} 255 ${s})`;return[i,r]},Sl=function(){const[e,t,s]=I(this,A,Ie),i=`rgb(${e} ${t} 0)`,r=`rgb(${e} ${t} 255)`;return[i,r]},El=function(){const[e,t,s]=I(this,A,Te),i=`hsl(0 ${t.toFixed(4)} ${s.toFixed(4)})`,r=`hsl(360 ${t.toFixed(4)} ${s.toFixed(4)})`;return[i,r]},Al=function(){const[e,t,s]=I(this,A,Te),i=`hsl(${e.toFixed(2)} 0 ${s.toFixed(4)})`,r=`hsl(${e.toFixed(2)} 100 ${s.toFixed(4)})`;return[i,r]},Rl=function(){const[e,t,s]=I(this,A,Te);return[...Array(11).keys()].map(i=>`hsl(${e.toFixed(2)} ${t.toFixed(4)} ${i*10})`)},Xt=function(){return Wi(this._rgb,"hex")},Cl=function(e){const t=Lt("update:value",{value:e},{bubbles:!1});this.dispatchEvent(t)},rr=function(e){const t=e.detail.value/255,[s,i,r]=this._rgb;this.setRgbNormalized([t,i,r])},nr=function(e){const t=e.detail.value/255,[s,i,r]=this._rgb;this.setRgbNormalized([s,t,r])},or=function(e){const t=e.detail.value/255,[s,i,r]=this._rgb;this.setRgbNormalized([s,i,t])},lr=function(e){const t=e.detail.value,[s,i,r]=I(this,A,Te),n=Ct.rgb([t,i,r]),o=Bt(n);this.setRgbNormalized(o)},ar=function(e){const t=e.detail.value,[s,i,r]=I(this,A,Te),n=Ct.rgb([s,t,r]),o=Bt(n);this.setRgbNormalized(o)},cr=function(e){const t=e.detail.value,[s,i,r]=I(this,A,Te),n=Ct.rgb([s,i,t]),o=Bt(n);this.setRgbNormalized(o)},Pl=function(e){const[t,s,i]=I(this,A,Ie);return`rgb(${e} ${s} ${i})`},Ml=function(e){const[t,s,i]=I(this,A,Ie);return`rgb(${t} ${e} ${i})`},Tl=function(e){const[t,s,i]=I(this,A,Ie);return`rgb(${t} ${s} ${e})`},Ol=function(e){const[t,s,i]=I(this,A,Ms);return`hsl(${e.toFixed(2)} ${s.toFixed(4)} ${i.toFixed(4)})`},Ll=function(e){const[t,s,i]=I(this,A,Ms);return`hsl(${t.toFixed(2)} ${e.toFixed(4)} ${i.toFixed(4)})`},kl=function(e){const[t,s,i]=I(this,A,Ms);return`hsl(${t.toFixed(2)} ${s.toFixed(4)} ${e.toFixed(4)})`},Il=function(e){const t=e.detail.value;this.setColor(t)},Nl=function(e){const t=e.detail.value;this.setColor(t)},Fl=function(e){const t=e.detail.value;this._colorActive=t},B(ur,"properties",{_colorActive:{state:!0},_colorEnd:{state:!0},_colorStart:{state:!0},_rgb:{state:!0},channels:{type:String},format:{type:String},initialValue:{type:String},noBlender:{type:Boolean},noCopy:{type:Boolean},noPicker:{type:Boolean},noValue:{type:Boolean},value:{type:String,reflect:!0}}),B(ur,"styles",ze`
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
  `);window.customElements.define("rgb-color-mixer-ui-field",Bi);window.customElements.define("rgb-color-mixer-ui-icon",ji);window.customElements.define("rgb-color-mixer-ui-icon-button",Ui);window.customElements.define("rgb-color-mixer-ui-input",Ki);window.customElements.define("rgb-color-mixer-ui-separator",Gi);window.customElements.define("rgb-color-mixer-ui-tool-tip",Yi);window.customElements.define("rgb-color-mixer-blender",qi);window.customElements.define("rgb-color-mixer-blender-stop",Zi);window.customElements.define("rgb-color-mixer-value",Ji);window.customElements.define("rgb-color-slider",sr);window.customElements.define("rgb-color-slider-item",ir);window.customElements.define("rgb-color-mixer",ur);const Eu={class:"app"},Au={class:"head"},Ru={class:"ml-2"},Cu=["initialValue"],Pu=["initialValue"],Mu=["initialValue"],Tu=["initialValue"],Ou=["initialValue"],Lu=["initialValue"],ku=["initialValue"],Iu=["initialValue"],Nu=8,Fu=Fa({__name:"App",setup(e){const t=hs("hotpink"),s=hs("black"),i=D0(),r=E0(i),n=[...Array(Nu).keys()].map(l=>za(`mixer${l}`));function o(l){s.value=l.detail.value}return ht(s,l=>{n.map(a=>{a.value&&a.value.setColor(l)})}),ii(()=>{n.map(l=>{l.value&&Ws(l.value,"update:value",o)})}),(l,a)=>(Rc(),Mc("div",Eu,[K("div",Au,[K("button",{onClick:a[0]||(a[0]=h=>ds(r)())},[K("span",Ru,Hn(ds(i)?"Dark":"Light"),1)]),a[1]||(a[1]=K("a",{href:"http://github.com/bennyschudel/rgb-color-mixer"},"Github",-1))]),a[2]||(a[2]=K("h1",null,"<rgb-color-mixer>",-1)),K("rgb-color-mixer",{ref:"mixer0",initialValue:t.value,"onUpdate:value":o},null,40,Cu),a[3]||(a[3]=K("h2",null,"RGB Only",-1)),a[4]||(a[4]=K("code",null,'channels="rgb"',-1)),K("rgb-color-mixer",{ref:"mixer1",initialValue:t.value,channels:"rgb"},null,8,Pu),a[5]||(a[5]=K("h2",null,"HSL Only",-1)),a[6]||(a[6]=K("code",null,'channels="hsl"',-1)),K("rgb-color-mixer",{ref:"mixer2",initialValue:t.value,channels:"hsl"},null,8,Mu),a[7]||(a[7]=K("h2",null,"No Blender",-1)),a[8]||(a[8]=K("code",null,"noBlender",-1)),K("rgb-color-mixer",{ref:"mixer3",initialValue:t.value,noBlender:""},null,8,Tu),a[9]||(a[9]=K("h2",null,"No Value",-1)),a[10]||(a[10]=K("code",null,"noValue",-1)),K("rgb-color-mixer",{ref:"mixer4",initialValue:t.value,noValue:""},null,8,Ou),a[11]||(a[11]=K("h2",null,"No Copy & No Picker",-1)),a[12]||(a[12]=K("code",null,"noCopy noPicker",-1)),K("rgb-color-mixer",{ref:"mixer5",initialValue:t.value,noCopy:"",noPicker:""},null,8,Lu),a[13]||(a[13]=K("h2",null,"Minimal RGB",-1)),a[14]||(a[14]=K("code",null,'channels="rgb" noBlender noValue',-1)),K("rgb-color-mixer",{ref:"mixer6",initialValue:t.value,channels:"rgb",noBlender:"",noValue:""},null,8,ku),a[15]||(a[15]=K("h2",null,"Minimal HSL",-1)),a[16]||(a[16]=K("code",null,'channels="hsl" noBlender noValue',-1)),K("rgb-color-mixer",{ref:"mixer7",initialValue:t.value,channels:"hsl",noBlender:"",noValue:""},null,8,Iu),a[17]||(a[17]=K("p",{class:"note"},[Ni(" 2025, by "),K("a",{href:"https://twitter.com/bennyschudel",target:"_blank"},"@bennyschudel"),Ni(", MIT License ")],-1))]))}}),zu=(e,t)=>{const s=e.__vccOpts||e;for(const[i,r]of t)s[i]=r;return s},Hu=zu(Fu,[["__scopeId","data-v-c447a0ea"]]);f0(Hu).mount("#app");
