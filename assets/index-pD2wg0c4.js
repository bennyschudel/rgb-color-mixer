(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function hi(e){const t=Object.create(null);for(const s of e.split(","))t[s]=1;return s=>s in t}const te={},zt=[],Ge=()=>{},Hl=()=>!1,Zs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),di=e=>e.startsWith("onUpdate:"),Se=Object.assign,pi=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},Dl=Object.prototype.hasOwnProperty,Z=(e,t)=>Dl.call(e,t),D=Array.isArray,Ht=e=>Js(e)==="[object Map]",On=e=>Js(e)==="[object Set]",z=e=>typeof e=="function",de=e=>typeof e=="string",gt=e=>typeof e=="symbol",ce=e=>e!==null&&typeof e=="object",Ln=e=>(ce(e)||z(e))&&z(e.then)&&z(e.catch),In=Object.prototype.toString,Js=e=>In.call(e),jl=e=>Js(e).slice(8,-1),kn=e=>Js(e)==="[object Object]",gi=e=>de(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Xt=hi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xs=e=>{const t=Object.create(null);return s=>t[s]||(t[s]=e(s))},Bl=/-(\w)/g,pt=Xs(e=>e.replace(Bl,(t,s)=>s?s.toUpperCase():"")),Ul=/\B([A-Z])/g,It=Xs(e=>e.replace(Ul,"-$1").toLowerCase()),Nn=Xs(e=>e.charAt(0).toUpperCase()+e.slice(1)),ar=Xs(e=>e?`on${Nn(e)}`:""),ft=(e,t)=>!Object.is(e,t),ur=(e,...t)=>{for(let s=0;s<e.length;s++)e[s](...t)},Fn=(e,t,s,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:s})},Vl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ji;const Qs=()=>ji||(ji=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function mi(e){if(D(e)){const t={};for(let s=0;s<e.length;s++){const r=e[s],i=de(r)?Yl(r):mi(r);if(i)for(const n in i)t[n]=i[n]}return t}else if(de(e)||ce(e))return e}const Wl=/;(?![^(]*\))/g,Kl=/:([^]+)/,Gl=/\/\*[^]*?\*\//g;function Yl(e){const t={};return e.replace(Gl,"").split(Wl).forEach(s=>{if(s){const r=s.split(Kl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function bi(e){let t="";if(de(e))t=e;else if(D(e))for(let s=0;s<e.length;s++){const r=bi(e[s]);r&&(t+=r+" ")}else if(ce(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}const ql="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zl=hi(ql);function zn(e){return!!e||e===""}const Hn=e=>!!(e&&e.__v_isRef===!0),Dn=e=>de(e)?e:e==null?"":D(e)||ce(e)&&(e.toString===In||!z(e.toString))?Hn(e)?Dn(e.value):JSON.stringify(e,jn,2):String(e),jn=(e,t)=>Hn(t)?jn(e,t.value):Ht(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[r,i],n)=>(s[fr(r,n)+" =>"]=i,s),{})}:On(t)?{[`Set(${t.size})`]:[...t.values()].map(s=>fr(s))}:gt(t)?fr(t):ce(t)&&!D(t)&&!kn(t)?String(t):t,fr=(e,t="")=>{var s;return gt(e)?`Symbol(${(s=e.description)!=null?s:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Re;class Jl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Re,!t&&Re&&(this.index=(Re.scopes||(Re.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].pause();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].resume();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].resume()}}run(t){if(this._active){const s=Re;try{return Re=this,t()}finally{Re=s}}}on(){Re=this}off(){Re=this.parent}stop(t){if(this._active){this._active=!1;let s,r;for(s=0,r=this.effects.length;s<r;s++)this.effects[s].stop();for(this.effects.length=0,s=0,r=this.cleanups.length;s<r;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,r=this.scopes.length;s<r;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Bn(){return Re}function Xl(e,t=!1){Re&&Re.cleanups.push(e)}let ie;const hr=new WeakSet;class Un{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Re&&Re.active&&Re.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,hr.has(this)&&(hr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Wn(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bi(this),Kn(this);const t=ie,s=He;ie=this,He=!0;try{return this.fn()}finally{Gn(this),ie=t,He=s,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)yi(t);this.deps=this.depsTail=void 0,Bi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?hr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Pr(this)&&this.run()}get dirty(){return Pr(this)}}let Vn=0,Qt,es;function Wn(e,t=!1){if(e.flags|=8,t){e.next=es,es=e;return}e.next=Qt,Qt=e}function vi(){Vn++}function _i(){if(--Vn>0)return;if(es){let t=es;for(es=void 0;t;){const s=t.next;t.next=void 0,t.flags&=-9,t=s}}let e;for(;Qt;){let t=Qt;for(Qt=void 0;t;){const s=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=s}}if(e)throw e}function Kn(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Gn(e){let t,s=e.depsTail,r=s;for(;r;){const i=r.prevDep;r.version===-1?(r===s&&(s=i),yi(r),Ql(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}e.deps=t,e.depsTail=s}function Pr(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Yn(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Yn(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===us))return;e.globalVersion=us;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Pr(e)){e.flags&=-3;return}const s=ie,r=He;ie=e,He=!0;try{Kn(e);const i=e.fn(e._value);(t.version===0||ft(i,e._value))&&(e._value=i,t.version++)}catch(i){throw t.version++,i}finally{ie=s,He=r,Gn(e),e.flags&=-3}}function yi(e,t=!1){const{dep:s,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),s.subs===e&&(s.subs=r,!r&&s.computed)){s.computed.flags&=-5;for(let n=s.computed.deps;n;n=n.nextDep)yi(n,!0)}!t&&!--s.sc&&s.map&&s.map.delete(s.key)}function Ql(e){const{prevDep:t,nextDep:s}=e;t&&(t.nextDep=s,e.prevDep=void 0),s&&(s.prevDep=t,e.nextDep=void 0)}let He=!0;const qn=[];function mt(){qn.push(He),He=!1}function bt(){const e=qn.pop();He=e===void 0?!0:e}function Bi(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const s=ie;ie=void 0;try{t()}finally{ie=s}}}let us=0;class ec{constructor(t,s){this.sub=t,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class er{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!ie||!He||ie===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==ie)s=this.activeLink=new ec(ie,this),ie.deps?(s.prevDep=ie.depsTail,ie.depsTail.nextDep=s,ie.depsTail=s):ie.deps=ie.depsTail=s,Zn(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const r=s.nextDep;r.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=r),s.prevDep=ie.depsTail,s.nextDep=void 0,ie.depsTail.nextDep=s,ie.depsTail=s,ie.deps===s&&(ie.deps=r)}return s}trigger(t){this.version++,us++,this.notify(t)}notify(t){vi();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{_i()}}}function Zn(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Zn(r)}const s=e.dep.subs;s!==e&&(e.prevSub=s,s&&(s.nextSub=e)),e.dep.subs=e}}const Hs=new WeakMap,St=Symbol(""),Tr=Symbol(""),fs=Symbol("");function $e(e,t,s){if(He&&ie){let r=Hs.get(e);r||Hs.set(e,r=new Map);let i=r.get(s);i||(r.set(s,i=new er),i.map=r,i.key=s),i.track()}}function rt(e,t,s,r,i,n){const o=Hs.get(e);if(!o){us++;return}const l=c=>{c&&c.trigger()};if(vi(),t==="clear")o.forEach(l);else{const c=D(e),d=c&&gi(s);if(c&&s==="length"){const f=Number(r);o.forEach((h,g)=>{(g==="length"||g===fs||!gt(g)&&g>=f)&&l(h)})}else switch((s!==void 0||o.has(void 0))&&l(o.get(s)),d&&l(o.get(fs)),t){case"add":c?d&&l(o.get("length")):(l(o.get(St)),Ht(e)&&l(o.get(Tr)));break;case"delete":c||(l(o.get(St)),Ht(e)&&l(o.get(Tr)));break;case"set":Ht(e)&&l(o.get(St));break}}_i()}function tc(e,t){const s=Hs.get(e);return s&&s.get(t)}function kt(e){const t=K(e);return t===e?t:($e(t,"iterate",fs),De(e)?t:t.map(Ce))}function xi(e){return $e(e=K(e),"iterate",fs),e}const sc={__proto__:null,[Symbol.iterator](){return dr(this,Symbol.iterator,Ce)},concat(...e){return kt(this).concat(...e.map(t=>D(t)?kt(t):t))},entries(){return dr(this,"entries",e=>(e[1]=Ce(e[1]),e))},every(e,t){return et(this,"every",e,t,void 0,arguments)},filter(e,t){return et(this,"filter",e,t,s=>s.map(Ce),arguments)},find(e,t){return et(this,"find",e,t,Ce,arguments)},findIndex(e,t){return et(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return et(this,"findLast",e,t,Ce,arguments)},findLastIndex(e,t){return et(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return et(this,"forEach",e,t,void 0,arguments)},includes(...e){return pr(this,"includes",e)},indexOf(...e){return pr(this,"indexOf",e)},join(e){return kt(this).join(e)},lastIndexOf(...e){return pr(this,"lastIndexOf",e)},map(e,t){return et(this,"map",e,t,void 0,arguments)},pop(){return Kt(this,"pop")},push(...e){return Kt(this,"push",e)},reduce(e,...t){return Ui(this,"reduce",e,t)},reduceRight(e,...t){return Ui(this,"reduceRight",e,t)},shift(){return Kt(this,"shift")},some(e,t){return et(this,"some",e,t,void 0,arguments)},splice(...e){return Kt(this,"splice",e)},toReversed(){return kt(this).toReversed()},toSorted(e){return kt(this).toSorted(e)},toSpliced(...e){return kt(this).toSpliced(...e)},unshift(...e){return Kt(this,"unshift",e)},values(){return dr(this,"values",Ce)}};function dr(e,t,s){const r=xi(e),i=r[t]();return r!==e&&!De(e)&&(i._next=i.next,i.next=()=>{const n=i._next();return n.value&&(n.value=s(n.value)),n}),i}const rc=Array.prototype;function et(e,t,s,r,i,n){const o=xi(e),l=o!==e&&!De(e),c=o[t];if(c!==rc[t]){const h=c.apply(e,n);return l?Ce(h):h}let d=s;o!==e&&(l?d=function(h,g){return s.call(this,Ce(h),g,e)}:s.length>2&&(d=function(h,g){return s.call(this,h,g,e)}));const f=c.call(o,d,r);return l&&i?i(f):f}function Ui(e,t,s,r){const i=xi(e);let n=s;return i!==e&&(De(e)?s.length>3&&(n=function(o,l,c){return s.call(this,o,l,c,e)}):n=function(o,l,c){return s.call(this,o,Ce(l),c,e)}),i[t](n,...r)}function pr(e,t,s){const r=K(e);$e(r,"iterate",fs);const i=r[t](...s);return(i===-1||i===!1)&&Ei(s[0])?(s[0]=K(s[0]),r[t](...s)):i}function Kt(e,t,s=[]){mt(),vi();const r=K(e)[t].apply(e,s);return _i(),bt(),r}const ic=hi("__proto__,__v_isRef,__isVue"),Jn=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(gt));function nc(e){gt(e)||(e=String(e));const t=K(this);return $e(t,"has",e),t.hasOwnProperty(e)}class Xn{constructor(t=!1,s=!1){this._isReadonly=t,this._isShallow=s}get(t,s,r){if(s==="__v_skip")return t.__v_skip;const i=this._isReadonly,n=this._isShallow;if(s==="__v_isReactive")return!i;if(s==="__v_isReadonly")return i;if(s==="__v_isShallow")return n;if(s==="__v_raw")return r===(i?n?gc:so:n?to:eo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=D(t);if(!i){let c;if(o&&(c=sc[s]))return c;if(s==="hasOwnProperty")return nc}const l=Reflect.get(t,s,he(t)?t:r);return(gt(s)?Jn.has(s):ic(s))||(i||$e(t,"get",s),n)?l:he(l)?o&&gi(s)?l:l.value:ce(l)?i?tr(l):wi(l):l}}class Qn extends Xn{constructor(t=!1){super(!1,t)}set(t,s,r,i){let n=t[s];if(!this._isShallow){const c=Pt(n);if(!De(r)&&!Pt(r)&&(n=K(n),r=K(r)),!D(t)&&he(n)&&!he(r))return c?!1:(n.value=r,!0)}const o=D(t)&&gi(s)?Number(s)<t.length:Z(t,s),l=Reflect.set(t,s,r,he(t)?t:i);return t===K(i)&&(o?ft(r,n)&&rt(t,"set",s,r):rt(t,"add",s,r)),l}deleteProperty(t,s){const r=Z(t,s);t[s];const i=Reflect.deleteProperty(t,s);return i&&r&&rt(t,"delete",s,void 0),i}has(t,s){const r=Reflect.has(t,s);return(!gt(s)||!Jn.has(s))&&$e(t,"has",s),r}ownKeys(t){return $e(t,"iterate",D(t)?"length":St),Reflect.ownKeys(t)}}class oc extends Xn{constructor(t=!1){super(!0,t)}set(t,s){return!0}deleteProperty(t,s){return!0}}const lc=new Qn,cc=new oc,ac=new Qn(!0);const Mr=e=>e,Es=e=>Reflect.getPrototypeOf(e);function uc(e,t,s){return function(...r){const i=this.__v_raw,n=K(i),o=Ht(n),l=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,d=i[e](...r),f=s?Mr:t?Or:Ce;return!t&&$e(n,"iterate",c?Tr:St),{next(){const{value:h,done:g}=d.next();return g?{value:h,done:g}:{value:l?[f(h[0]),f(h[1])]:f(h),done:g}},[Symbol.iterator](){return this}}}}function As(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function fc(e,t){const s={get(i){const n=this.__v_raw,o=K(n),l=K(i);e||(ft(i,l)&&$e(o,"get",i),$e(o,"get",l));const{has:c}=Es(o),d=t?Mr:e?Or:Ce;if(c.call(o,i))return d(n.get(i));if(c.call(o,l))return d(n.get(l));n!==o&&n.get(i)},get size(){const i=this.__v_raw;return!e&&$e(K(i),"iterate",St),Reflect.get(i,"size",i)},has(i){const n=this.__v_raw,o=K(n),l=K(i);return e||(ft(i,l)&&$e(o,"has",i),$e(o,"has",l)),i===l?n.has(i):n.has(i)||n.has(l)},forEach(i,n){const o=this,l=o.__v_raw,c=K(l),d=t?Mr:e?Or:Ce;return!e&&$e(c,"iterate",St),l.forEach((f,h)=>i.call(n,d(f),d(h),o))}};return Se(s,e?{add:As("add"),set:As("set"),delete:As("delete"),clear:As("clear")}:{add(i){!t&&!De(i)&&!Pt(i)&&(i=K(i));const n=K(this);return Es(n).has.call(n,i)||(n.add(i),rt(n,"add",i,i)),this},set(i,n){!t&&!De(n)&&!Pt(n)&&(n=K(n));const o=K(this),{has:l,get:c}=Es(o);let d=l.call(o,i);d||(i=K(i),d=l.call(o,i));const f=c.call(o,i);return o.set(i,n),d?ft(n,f)&&rt(o,"set",i,n):rt(o,"add",i,n),this},delete(i){const n=K(this),{has:o,get:l}=Es(n);let c=o.call(n,i);c||(i=K(i),c=o.call(n,i)),l&&l.call(n,i);const d=n.delete(i);return c&&rt(n,"delete",i,void 0),d},clear(){const i=K(this),n=i.size!==0,o=i.clear();return n&&rt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{s[i]=uc(i,e,t)}),s}function $i(e,t){const s=fc(e,t);return(r,i,n)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(Z(s,i)&&i in r?s:r,i,n)}const hc={get:$i(!1,!1)},dc={get:$i(!1,!0)},pc={get:$i(!0,!1)};const eo=new WeakMap,to=new WeakMap,so=new WeakMap,gc=new WeakMap;function mc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bc(e){return e.__v_skip||!Object.isExtensible(e)?0:mc(jl(e))}function wi(e){return Pt(e)?e:Si(e,!1,lc,hc,eo)}function vc(e){return Si(e,!1,ac,dc,to)}function tr(e){return Si(e,!0,cc,pc,so)}function Si(e,t,s,r,i){if(!ce(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const n=i.get(e);if(n)return n;const o=bc(e);if(o===0)return e;const l=new Proxy(e,o===2?r:s);return i.set(e,l),l}function ts(e){return Pt(e)?ts(e.__v_raw):!!(e&&e.__v_isReactive)}function Pt(e){return!!(e&&e.__v_isReadonly)}function De(e){return!!(e&&e.__v_isShallow)}function Ei(e){return e?!!e.__v_raw:!1}function K(e){const t=e&&e.__v_raw;return t?K(t):e}function _c(e){return!Z(e,"__v_skip")&&Object.isExtensible(e)&&Fn(e,"__v_skip",!0),e}const Ce=e=>ce(e)?wi(e):e,Or=e=>ce(e)?tr(e):e;function he(e){return e?e.__v_isRef===!0:!1}function hs(e){return ro(e,!1)}function Et(e){return ro(e,!0)}function ro(e,t){return he(e)?e:new yc(e,t)}class yc{constructor(t,s){this.dep=new er,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?t:K(t),this._value=s?t:Ce(t),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(t){const s=this._rawValue,r=this.__v_isShallow||De(t)||Pt(t);t=r?t:K(t),ft(t,s)&&(this._rawValue=t,this._value=r?t:Ce(t),this.dep.trigger())}}function ds(e){return he(e)?e.value:e}function Ye(e){return z(e)?e():ds(e)}const xc={get:(e,t,s)=>t==="__v_raw"?e:ds(Reflect.get(e,t,s)),set:(e,t,s,r)=>{const i=e[t];return he(i)&&!he(s)?(i.value=s,!0):Reflect.set(e,t,s,r)}};function io(e){return ts(e)?e:new Proxy(e,xc)}class $c{constructor(t){this.__v_isRef=!0,this._value=void 0;const s=this.dep=new er,{get:r,set:i}=t(s.track.bind(s),s.trigger.bind(s));this._get=r,this._set=i}get value(){return this._value=this._get()}set value(t){this._set(t)}}function wc(e){return new $c(e)}class Sc{constructor(t,s,r){this._object=t,this._key=s,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return tc(K(this._object),this._key)}}class Ec{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Ac(e,t,s){return he(e)?e:z(e)?new Ec(e):ce(e)&&arguments.length>1?Rc(e,t,s):hs(e)}function Rc(e,t,s){const r=e[t];return he(r)?r:new Sc(e,t,s)}class Cc{constructor(t,s,r){this.fn=t,this.setter=s,this._value=void 0,this.dep=new er(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=us-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ie!==this)return Wn(this,!0),!0}get value(){const t=this.dep.track();return Yn(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Pc(e,t,s=!1){let r,i;return z(e)?r=e:(r=e.get,i=e.set),new Cc(r,i,s)}const Rs={},Ds=new WeakMap;let $t;function Tc(e,t=!1,s=$t){if(s){let r=Ds.get(s);r||Ds.set(s,r=[]),r.push(e)}}function Mc(e,t,s=te){const{immediate:r,deep:i,once:n,scheduler:o,augmentJob:l,call:c}=s,d=R=>i?R:De(R)||i===!1||i===0?at(R,1):at(R);let f,h,g,x,C=!1,O=!1;if(he(e)?(h=()=>e.value,C=De(e)):ts(e)?(h=()=>d(e),C=!0):D(e)?(O=!0,C=e.some(R=>ts(R)||De(R)),h=()=>e.map(R=>{if(he(R))return R.value;if(ts(R))return d(R);if(z(R))return c?c(R,2):R()})):z(e)?t?h=c?()=>c(e,2):e:h=()=>{if(g){mt();try{g()}finally{bt()}}const R=$t;$t=f;try{return c?c(e,3,[x]):e(x)}finally{$t=R}}:h=Ge,t&&i){const R=h,Y=i===!0?1/0:i;h=()=>at(R(),Y)}const J=Bn(),B=()=>{f.stop(),J&&J.active&&pi(J.effects,f)};if(n&&t){const R=t;t=(...Y)=>{R(...Y),B()}}let G=O?new Array(e.length).fill(Rs):Rs;const V=R=>{if(!(!(f.flags&1)||!f.dirty&&!R))if(t){const Y=f.run();if(i||C||(O?Y.some((ue,se)=>ft(ue,G[se])):ft(Y,G))){g&&g();const ue=$t;$t=f;try{const se=[Y,G===Rs?void 0:O&&G[0]===Rs?[]:G,x];c?c(t,3,se):t(...se),G=Y}finally{$t=ue}}}else f.run()};return l&&l(V),f=new Un(h),f.scheduler=o?()=>o(V,!1):V,x=R=>Tc(R,!1,f),g=f.onStop=()=>{const R=Ds.get(f);if(R){if(c)c(R,4);else for(const Y of R)Y();Ds.delete(f)}},t?r?V(!0):G=f.run():o?o(V.bind(null,!0),!0):f.run(),B.pause=f.pause.bind(f),B.resume=f.resume.bind(f),B.stop=B,B}function at(e,t=1/0,s){if(t<=0||!ce(e)||e.__v_skip||(s=s||new Set,s.has(e)))return e;if(s.add(e),t--,he(e))at(e.value,t,s);else if(D(e))for(let r=0;r<e.length;r++)at(e[r],t,s);else if(On(e)||Ht(e))e.forEach(r=>{at(r,t,s)});else if(kn(e)){for(const r in e)at(e[r],t,s);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&at(e[r],t,s)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $s(e,t,s,r){try{return r?e(...r):e()}catch(i){sr(i,t,s)}}function Ze(e,t,s,r){if(z(e)){const i=$s(e,t,s,r);return i&&Ln(i)&&i.catch(n=>{sr(n,t,s)}),i}if(D(e)){const i=[];for(let n=0;n<e.length;n++)i.push(Ze(e[n],t,s,r));return i}}function sr(e,t,s,r=!0){const i=t?t.vnode:null,{errorHandler:n,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||te;if(t){let l=t.parent;const c=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${s}`;for(;l;){const f=l.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](e,c,d)===!1)return}l=l.parent}if(n){mt(),$s(n,null,10,[e,c,d]),bt();return}}Oc(e,s,i,r,o)}function Oc(e,t,s,r=!0,i=!1){if(i)throw e;console.error(e)}const Pe=[];let We=-1;const Dt=[];let lt=null,Nt=0;const no=Promise.resolve();let js=null;function Ai(e){const t=js||no;return e?t.then(this?e.bind(this):e):t}function Lc(e){let t=We+1,s=Pe.length;for(;t<s;){const r=t+s>>>1,i=Pe[r],n=ps(i);n<e||n===e&&i.flags&2?t=r+1:s=r}return t}function Ri(e){if(!(e.flags&1)){const t=ps(e),s=Pe[Pe.length-1];!s||!(e.flags&2)&&t>=ps(s)?Pe.push(e):Pe.splice(Lc(t),0,e),e.flags|=1,oo()}}function oo(){js||(js=no.then(co))}function Ic(e){D(e)?Dt.push(...e):lt&&e.id===-1?lt.splice(Nt+1,0,e):e.flags&1||(Dt.push(e),e.flags|=1),oo()}function Vi(e,t,s=We+1){for(;s<Pe.length;s++){const r=Pe[s];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Pe.splice(s,1),s--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function lo(e){if(Dt.length){const t=[...new Set(Dt)].sort((s,r)=>ps(s)-ps(r));if(Dt.length=0,lt){lt.push(...t);return}for(lt=t,Nt=0;Nt<lt.length;Nt++){const s=lt[Nt];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}lt=null,Nt=0}}const ps=e=>e.id==null?e.flags&2?-1:1/0:e.id;function co(e){try{for(We=0;We<Pe.length;We++){const t=Pe[We];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),$s(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;We<Pe.length;We++){const t=Pe[We];t&&(t.flags&=-2)}We=-1,Pe.length=0,lo(),js=null,(Pe.length||Dt.length)&&co()}}let Fe=null,ao=null;function Bs(e){const t=Fe;return Fe=e,ao=e&&e.type.__scopeId||null,t}function kc(e,t=Fe,s){if(!t||e._n)return e;const r=(...i)=>{r._d&&Qi(-1);const n=Bs(t);let o;try{o=e(...i)}finally{Bs(n),r._d&&Qi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function _t(e,t,s,r){const i=e.dirs,n=t&&t.dirs;for(let o=0;o<i.length;o++){const l=i[o];n&&(l.oldValue=n[o].value);let c=l.dir[r];c&&(mt(),Ze(c,s,8,[e.el,l,e,t]),bt())}}const Nc=Symbol("_vte"),Fc=e=>e.__isTeleport;function Ci(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Ci(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function zc(e,t){return z(e)?Se({name:e.name},t,{setup:e}):e}function uo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Cs(e){const t=lr(),s=Et(null);if(t){const i=t.refs===te?t.refs={}:t.refs;Object.defineProperty(i,e,{enumerable:!0,get:()=>s.value,set:n=>s.value=n})}return s}function Us(e,t,s,r,i=!1){if(D(e)){e.forEach((C,O)=>Us(C,t&&(D(t)?t[O]:t),s,r,i));return}if(ss(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Us(e,t,s,r.component.subTree);return}const n=r.shapeFlag&4?Oi(r.component):r.el,o=i?null:n,{i:l,r:c}=e,d=t&&t.r,f=l.refs===te?l.refs={}:l.refs,h=l.setupState,g=K(h),x=h===te?()=>!1:C=>Z(g,C);if(d!=null&&d!==c&&(de(d)?(f[d]=null,x(d)&&(h[d]=null)):he(d)&&(d.value=null)),z(c))$s(c,l,12,[o,f]);else{const C=de(c),O=he(c);if(C||O){const J=()=>{if(e.f){const B=C?x(c)?h[c]:f[c]:c.value;i?D(B)&&pi(B,n):D(B)?B.includes(n)||B.push(n):C?(f[c]=[n],x(c)&&(h[c]=f[c])):(c.value=[n],e.k&&(f[e.k]=c.value))}else C?(f[c]=o,x(c)&&(h[c]=o)):O&&(c.value=o,e.k&&(f[e.k]=o))};o?(J.id=-1,Ie(J,s)):J()}}}Qs().requestIdleCallback;Qs().cancelIdleCallback;const ss=e=>!!e.type.__asyncLoader,fo=e=>e.type.__isKeepAlive;function Hc(e,t){ho(e,"a",t)}function Dc(e,t){ho(e,"da",t)}function ho(e,t,s=ye){const r=e.__wdc||(e.__wdc=()=>{let i=s;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(rr(t,r,s),s){let i=s.parent;for(;i&&i.parent;)fo(i.parent.vnode)&&jc(r,t,s,i),i=i.parent}}function jc(e,t,s,r){const i=rr(t,e,r,!0);po(()=>{pi(r[t],i)},s)}function rr(e,t,s=ye,r=!1){if(s){const i=s[e]||(s[e]=[]),n=t.__weh||(t.__weh=(...o)=>{mt();const l=ws(s),c=Ze(t,s,e,o);return l(),bt(),c});return r?i.unshift(n):i.push(n),n}}const it=e=>(t,s=ye)=>{(!bs||e==="sp")&&rr(e,(...r)=>t(...r),s)},Bc=it("bm"),ir=it("m"),Uc=it("bu"),Vc=it("u"),Wc=it("bum"),po=it("um"),Kc=it("sp"),Gc=it("rtg"),Yc=it("rtc");function qc(e,t=ye){rr("ec",e,t)}const Zc=Symbol.for("v-ndc"),Lr=e=>e?ko(e)?Oi(e):Lr(e.parent):null,rs=Se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Lr(e.parent),$root:e=>Lr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>mo(e),$forceUpdate:e=>e.f||(e.f=()=>{Ri(e.update)}),$nextTick:e=>e.n||(e.n=Ai.bind(e.proxy)),$watch:e=>_a.bind(e)}),gr=(e,t)=>e!==te&&!e.__isScriptSetup&&Z(e,t),Jc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:s,setupState:r,data:i,props:n,accessCache:o,type:l,appContext:c}=e;let d;if(t[0]!=="$"){const x=o[t];if(x!==void 0)switch(x){case 1:return r[t];case 2:return i[t];case 4:return s[t];case 3:return n[t]}else{if(gr(r,t))return o[t]=1,r[t];if(i!==te&&Z(i,t))return o[t]=2,i[t];if((d=e.propsOptions[0])&&Z(d,t))return o[t]=3,n[t];if(s!==te&&Z(s,t))return o[t]=4,s[t];Ir&&(o[t]=0)}}const f=rs[t];let h,g;if(f)return t==="$attrs"&&$e(e.attrs,"get",""),f(e);if((h=l.__cssModules)&&(h=h[t]))return h;if(s!==te&&Z(s,t))return o[t]=4,s[t];if(g=c.config.globalProperties,Z(g,t))return g[t]},set({_:e},t,s){const{data:r,setupState:i,ctx:n}=e;return gr(i,t)?(i[t]=s,!0):r!==te&&Z(r,t)?(r[t]=s,!0):Z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(n[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:r,appContext:i,propsOptions:n}},o){let l;return!!s[o]||e!==te&&Z(e,o)||gr(t,o)||(l=n[0])&&Z(l,o)||Z(r,o)||Z(rs,o)||Z(i.config.globalProperties,o)},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:Z(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};function Wi(e){return D(e)?e.reduce((t,s)=>(t[s]=null,t),{}):e}let Ir=!0;function Xc(e){const t=mo(e),s=e.proxy,r=e.ctx;Ir=!1,t.beforeCreate&&Ki(t.beforeCreate,e,"bc");const{data:i,computed:n,methods:o,watch:l,provide:c,inject:d,created:f,beforeMount:h,mounted:g,beforeUpdate:x,updated:C,activated:O,deactivated:J,beforeDestroy:B,beforeUnmount:G,destroyed:V,unmounted:R,render:Y,renderTracked:ue,renderTriggered:se,errorCaptured:xe,serverPrefetch:pe,expose:ve,inheritAttrs:H,components:ee,directives:le,filters:Vt}=t;if(d&&Qc(d,r,null),o)for(const oe in o){const q=o[oe];z(q)&&(r[oe]=q.bind(s))}if(i){const oe=i.call(s,s);ce(oe)&&(e.data=wi(oe))}if(Ir=!0,n)for(const oe in n){const q=n[oe],Je=z(q)?q.bind(s,s):z(q.get)?q.get.bind(s,s):Ge,nt=!z(q)&&z(q.set)?q.set.bind(s):Ge,Xe=qe({get:Je,set:nt});Object.defineProperty(r,oe,{enumerable:!0,configurable:!0,get:()=>Xe.value,set:m=>Xe.value=m})}if(l)for(const oe in l)go(l[oe],r,s,oe);if(c){const oe=z(c)?c.call(s):c;Reflect.ownKeys(oe).forEach(q=>{na(q,oe[q])})}f&&Ki(f,e,"c");function _e(oe,q){D(q)?q.forEach(Je=>oe(Je.bind(s))):q&&oe(q.bind(s))}if(_e(Bc,h),_e(ir,g),_e(Uc,x),_e(Vc,C),_e(Hc,O),_e(Dc,J),_e(qc,xe),_e(Yc,ue),_e(Gc,se),_e(Wc,G),_e(po,R),_e(Kc,pe),D(ve))if(ve.length){const oe=e.exposed||(e.exposed={});ve.forEach(q=>{Object.defineProperty(oe,q,{get:()=>s[q],set:Je=>s[q]=Je})})}else e.exposed||(e.exposed={});Y&&e.render===Ge&&(e.render=Y),H!=null&&(e.inheritAttrs=H),ee&&(e.components=ee),le&&(e.directives=le),pe&&uo(e)}function Qc(e,t,s=Ge){D(e)&&(e=kr(e));for(const r in e){const i=e[r];let n;ce(i)?"default"in i?n=is(i.from||r,i.default,!0):n=is(i.from||r):n=is(i),he(n)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>n.value,set:o=>n.value=o}):t[r]=n}}function Ki(e,t,s){Ze(D(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,s)}function go(e,t,s,r){let i=r.includes(".")?To(s,r):()=>s[r];if(de(e)){const n=t[e];z(n)&&ht(i,n)}else if(z(e))ht(i,e.bind(s));else if(ce(e))if(D(e))e.forEach(n=>go(n,t,s,r));else{const n=z(e.handler)?e.handler.bind(s):t[e.handler];z(n)&&ht(i,n,e)}}function mo(e){const t=e.type,{mixins:s,extends:r}=t,{mixins:i,optionsCache:n,config:{optionMergeStrategies:o}}=e.appContext,l=n.get(t);let c;return l?c=l:!i.length&&!s&&!r?c=t:(c={},i.length&&i.forEach(d=>Vs(c,d,o,!0)),Vs(c,t,o)),ce(t)&&n.set(t,c),c}function Vs(e,t,s,r=!1){const{mixins:i,extends:n}=t;n&&Vs(e,n,s,!0),i&&i.forEach(o=>Vs(e,o,s,!0));for(const o in t)if(!(r&&o==="expose")){const l=ea[o]||s&&s[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const ea={data:Gi,props:Yi,emits:Yi,methods:qt,computed:qt,beforeCreate:Ee,created:Ee,beforeMount:Ee,mounted:Ee,beforeUpdate:Ee,updated:Ee,beforeDestroy:Ee,beforeUnmount:Ee,destroyed:Ee,unmounted:Ee,activated:Ee,deactivated:Ee,errorCaptured:Ee,serverPrefetch:Ee,components:qt,directives:qt,watch:sa,provide:Gi,inject:ta};function Gi(e,t){return t?e?function(){return Se(z(e)?e.call(this,this):e,z(t)?t.call(this,this):t)}:t:e}function ta(e,t){return qt(kr(e),kr(t))}function kr(e){if(D(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function Ee(e,t){return e?[...new Set([].concat(e,t))]:t}function qt(e,t){return e?Se(Object.create(null),e,t):t}function Yi(e,t){return e?D(e)&&D(t)?[...new Set([...e,...t])]:Se(Object.create(null),Wi(e),Wi(t??{})):t}function sa(e,t){if(!e)return t;if(!t)return e;const s=Se(Object.create(null),e);for(const r in t)s[r]=Ee(e[r],t[r]);return s}function bo(){return{app:null,config:{isNativeTag:Hl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ra=0;function ia(e,t){return function(r,i=null){z(r)||(r=Se({},r)),i!=null&&!ce(i)&&(i=null);const n=bo(),o=new WeakSet,l=[];let c=!1;const d=n.app={_uid:ra++,_component:r,_props:i,_container:null,_context:n,_instance:null,version:Ba,get config(){return n.config},set config(f){},use(f,...h){return o.has(f)||(f&&z(f.install)?(o.add(f),f.install(d,...h)):z(f)&&(o.add(f),f(d,...h))),d},mixin(f){return n.mixins.includes(f)||n.mixins.push(f),d},component(f,h){return h?(n.components[f]=h,d):n.components[f]},directive(f,h){return h?(n.directives[f]=h,d):n.directives[f]},mount(f,h,g){if(!c){const x=d._ceVNode||Rt(r,i);return x.appContext=n,g===!0?g="svg":g===!1&&(g=void 0),e(x,f,g),c=!0,d._container=f,f.__vue_app__=d,Oi(x.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Ze(l,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(f,h){return n.provides[f]=h,d},runWithContext(f){const h=At;At=d;try{return f()}finally{At=h}}};return d}}let At=null;function na(e,t){if(ye){let s=ye.provides;const r=ye.parent&&ye.parent.provides;r===s&&(s=ye.provides=Object.create(r)),s[e]=t}}function is(e,t,s=!1){const r=ye||Fe;if(r||At){const i=At?At._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return s&&z(t)?t.call(r&&r.proxy):t}}function vo(){return!!(ye||Fe||At)}const _o={},yo=()=>Object.create(_o),xo=e=>Object.getPrototypeOf(e)===_o;function oa(e,t,s,r=!1){const i={},n=yo();e.propsDefaults=Object.create(null),$o(e,t,i,n);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);s?e.props=r?i:vc(i):e.type.props?e.props=i:e.props=n,e.attrs=n}function la(e,t,s,r){const{props:i,attrs:n,vnode:{patchFlag:o}}=e,l=K(i),[c]=e.propsOptions;let d=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let h=0;h<f.length;h++){let g=f[h];if(nr(e.emitsOptions,g))continue;const x=t[g];if(c)if(Z(n,g))x!==n[g]&&(n[g]=x,d=!0);else{const C=pt(g);i[C]=Nr(c,l,C,x,e,!1)}else x!==n[g]&&(n[g]=x,d=!0)}}}else{$o(e,t,i,n)&&(d=!0);let f;for(const h in l)(!t||!Z(t,h)&&((f=It(h))===h||!Z(t,f)))&&(c?s&&(s[h]!==void 0||s[f]!==void 0)&&(i[h]=Nr(c,l,h,void 0,e,!0)):delete i[h]);if(n!==l)for(const h in n)(!t||!Z(t,h))&&(delete n[h],d=!0)}d&&rt(e.attrs,"set","")}function $o(e,t,s,r){const[i,n]=e.propsOptions;let o=!1,l;if(t)for(let c in t){if(Xt(c))continue;const d=t[c];let f;i&&Z(i,f=pt(c))?!n||!n.includes(f)?s[f]=d:(l||(l={}))[f]=d:nr(e.emitsOptions,c)||(!(c in r)||d!==r[c])&&(r[c]=d,o=!0)}if(n){const c=K(s),d=l||te;for(let f=0;f<n.length;f++){const h=n[f];s[h]=Nr(i,c,h,d[h],e,!Z(d,h))}}return o}function Nr(e,t,s,r,i,n){const o=e[s];if(o!=null){const l=Z(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&z(c)){const{propsDefaults:d}=i;if(s in d)r=d[s];else{const f=ws(i);r=d[s]=c.call(null,t),f()}}else r=c;i.ce&&i.ce._setProp(s,r)}o[0]&&(n&&!l?r=!1:o[1]&&(r===""||r===It(s))&&(r=!0))}return r}const ca=new WeakMap;function wo(e,t,s=!1){const r=s?ca:t.propsCache,i=r.get(e);if(i)return i;const n=e.props,o={},l=[];let c=!1;if(!z(e)){const f=h=>{c=!0;const[g,x]=wo(h,t,!0);Se(o,g),x&&l.push(...x)};!s&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!n&&!c)return ce(e)&&r.set(e,zt),zt;if(D(n))for(let f=0;f<n.length;f++){const h=pt(n[f]);qi(h)&&(o[h]=te)}else if(n)for(const f in n){const h=pt(f);if(qi(h)){const g=n[f],x=o[h]=D(g)||z(g)?{type:g}:Se({},g),C=x.type;let O=!1,J=!0;if(D(C))for(let B=0;B<C.length;++B){const G=C[B],V=z(G)&&G.name;if(V==="Boolean"){O=!0;break}else V==="String"&&(J=!1)}else O=z(C)&&C.name==="Boolean";x[0]=O,x[1]=J,(O||Z(x,"default"))&&l.push(h)}}const d=[o,l];return ce(e)&&r.set(e,d),d}function qi(e){return e[0]!=="$"&&!Xt(e)}const So=e=>e[0]==="_"||e==="$stable",Pi=e=>D(e)?e.map(Ke):[Ke(e)],aa=(e,t,s)=>{if(t._n)return t;const r=kc((...i)=>Pi(t(...i)),s);return r._c=!1,r},Eo=(e,t,s)=>{const r=e._ctx;for(const i in e){if(So(i))continue;const n=e[i];if(z(n))t[i]=aa(i,n,r);else if(n!=null){const o=Pi(n);t[i]=()=>o}}},Ao=(e,t)=>{const s=Pi(t);e.slots.default=()=>s},Ro=(e,t,s)=>{for(const r in t)(s||r!=="_")&&(e[r]=t[r])},ua=(e,t,s)=>{const r=e.slots=yo();if(e.vnode.shapeFlag&32){const i=t._;i?(Ro(r,t,s),s&&Fn(r,"_",i,!0)):Eo(t,r)}else t&&Ao(e,t)},fa=(e,t,s)=>{const{vnode:r,slots:i}=e;let n=!0,o=te;if(r.shapeFlag&32){const l=t._;l?s&&l===1?n=!1:Ro(i,t,s):(n=!t.$stable,Eo(t,i)),o=t}else t&&(Ao(e,t),o={default:1});if(n)for(const l in i)!So(l)&&o[l]==null&&delete i[l]},Ie=Aa;function ha(e){return da(e)}function da(e,t){const s=Qs();s.__VUE__=!0;const{insert:r,remove:i,patchProp:n,createElement:o,createText:l,createComment:c,setText:d,setElementText:f,parentNode:h,nextSibling:g,setScopeId:x=Ge,insertStaticContent:C}=e,O=(a,u,p,v=null,b=null,_=null,S=void 0,w=null,$=!!u.dynamicChildren)=>{if(a===u)return;a&&!Gt(a,u)&&(v=W(a),m(a,b,_,!0),a=null),u.patchFlag===-2&&($=!1,u.dynamicChildren=null);const{type:y,ref:L,shapeFlag:E}=u;switch(y){case or:J(a,u,p,v);break;case gs:B(a,u,p,v);break;case br:a==null&&G(u,p,v,S);break;case st:ee(a,u,p,v,b,_,S,w,$);break;default:E&1?Y(a,u,p,v,b,_,S,w,$):E&6?le(a,u,p,v,b,_,S,w,$):(E&64||E&128)&&y.process(a,u,p,v,b,_,S,w,$,vt)}L!=null&&b&&Us(L,a&&a.ref,_,u||a,!u)},J=(a,u,p,v)=>{if(a==null)r(u.el=l(u.children),p,v);else{const b=u.el=a.el;u.children!==a.children&&d(b,u.children)}},B=(a,u,p,v)=>{a==null?r(u.el=c(u.children||""),p,v):u.el=a.el},G=(a,u,p,v)=>{[a.el,a.anchor]=C(a.children,u,p,v,a.el,a.anchor)},V=({el:a,anchor:u},p,v)=>{let b;for(;a&&a!==u;)b=g(a),r(a,p,v),a=b;r(u,p,v)},R=({el:a,anchor:u})=>{let p;for(;a&&a!==u;)p=g(a),i(a),a=p;i(u)},Y=(a,u,p,v,b,_,S,w,$)=>{u.type==="svg"?S="svg":u.type==="math"&&(S="mathml"),a==null?ue(u,p,v,b,_,S,w,$):pe(a,u,b,_,S,w,$)},ue=(a,u,p,v,b,_,S,w)=>{let $,y;const{props:L,shapeFlag:E,transition:T,dirs:F}=a;if($=a.el=o(a.type,_,L&&L.is,L),E&8?f($,a.children):E&16&&xe(a.children,$,null,v,b,mr(a,_),S,w),F&&_t(a,null,v,"created"),se($,a,a.scopeId,S,v),L){for(const re in L)re!=="value"&&!Xt(re)&&n($,re,null,L[re],_,v);"value"in L&&n($,"value",null,L.value,_),(y=L.onVnodeBeforeMount)&&Ve(y,v,a)}F&&_t(a,null,v,"beforeMount");const U=pa(b,T);U&&T.beforeEnter($),r($,u,p),((y=L&&L.onVnodeMounted)||U||F)&&Ie(()=>{y&&Ve(y,v,a),U&&T.enter($),F&&_t(a,null,v,"mounted")},b)},se=(a,u,p,v,b)=>{if(p&&x(a,p),v)for(let _=0;_<v.length;_++)x(a,v[_]);if(b){let _=b.subTree;if(u===_||Oo(_.type)&&(_.ssContent===u||_.ssFallback===u)){const S=b.vnode;se(a,S,S.scopeId,S.slotScopeIds,b.parent)}}},xe=(a,u,p,v,b,_,S,w,$=0)=>{for(let y=$;y<a.length;y++){const L=a[y]=w?ct(a[y]):Ke(a[y]);O(null,L,u,p,v,b,_,S,w)}},pe=(a,u,p,v,b,_,S)=>{const w=u.el=a.el;let{patchFlag:$,dynamicChildren:y,dirs:L}=u;$|=a.patchFlag&16;const E=a.props||te,T=u.props||te;let F;if(p&&yt(p,!1),(F=T.onVnodeBeforeUpdate)&&Ve(F,p,u,a),L&&_t(u,a,p,"beforeUpdate"),p&&yt(p,!0),(E.innerHTML&&T.innerHTML==null||E.textContent&&T.textContent==null)&&f(w,""),y?ve(a.dynamicChildren,y,w,p,v,mr(u,b),_):S||q(a,u,w,null,p,v,mr(u,b),_,!1),$>0){if($&16)H(w,E,T,p,b);else if($&2&&E.class!==T.class&&n(w,"class",null,T.class,b),$&4&&n(w,"style",E.style,T.style,b),$&8){const U=u.dynamicProps;for(let re=0;re<U.length;re++){const Q=U[re],Oe=E[Q],Te=T[Q];(Te!==Oe||Q==="value")&&n(w,Q,Oe,Te,b,p)}}$&1&&a.children!==u.children&&f(w,u.children)}else!S&&y==null&&H(w,E,T,p,b);((F=T.onVnodeUpdated)||L)&&Ie(()=>{F&&Ve(F,p,u,a),L&&_t(u,a,p,"updated")},v)},ve=(a,u,p,v,b,_,S)=>{for(let w=0;w<u.length;w++){const $=a[w],y=u[w],L=$.el&&($.type===st||!Gt($,y)||$.shapeFlag&70)?h($.el):p;O($,y,L,null,v,b,_,S,!0)}},H=(a,u,p,v,b)=>{if(u!==p){if(u!==te)for(const _ in u)!Xt(_)&&!(_ in p)&&n(a,_,u[_],null,b,v);for(const _ in p){if(Xt(_))continue;const S=p[_],w=u[_];S!==w&&_!=="value"&&n(a,_,w,S,b,v)}"value"in p&&n(a,"value",u.value,p.value,b)}},ee=(a,u,p,v,b,_,S,w,$)=>{const y=u.el=a?a.el:l(""),L=u.anchor=a?a.anchor:l("");let{patchFlag:E,dynamicChildren:T,slotScopeIds:F}=u;F&&(w=w?w.concat(F):F),a==null?(r(y,p,v),r(L,p,v),xe(u.children||[],p,L,b,_,S,w,$)):E>0&&E&64&&T&&a.dynamicChildren?(ve(a.dynamicChildren,T,p,b,_,S,w),(u.key!=null||b&&u===b.subTree)&&Co(a,u,!0)):q(a,u,p,L,b,_,S,w,$)},le=(a,u,p,v,b,_,S,w,$)=>{u.slotScopeIds=w,a==null?u.shapeFlag&512?b.ctx.activate(u,p,v,S,$):Vt(u,p,v,b,_,S,$):Ss(a,u,$)},Vt=(a,u,p,v,b,_,S)=>{const w=a.component=Na(a,v,b);if(fo(a)&&(w.ctx.renderer=vt),Fa(w,!1,S),w.asyncDep){if(b&&b.registerDep(w,_e,S),!a.el){const $=w.subTree=Rt(gs);B(null,$,u,p)}}else _e(w,a,u,p,b,_,S)},Ss=(a,u,p)=>{const v=u.component=a.component;if(Sa(a,u,p))if(v.asyncDep&&!v.asyncResolved){oe(v,u,p);return}else v.next=u,v.update();else u.el=a.el,v.vnode=u},_e=(a,u,p,v,b,_,S)=>{const w=()=>{if(a.isMounted){let{next:E,bu:T,u:F,parent:U,vnode:re}=a;{const Be=Po(a);if(Be){E&&(E.el=re.el,oe(a,E,S)),Be.asyncDep.then(()=>{a.isUnmounted||w()});return}}let Q=E,Oe;yt(a,!1),E?(E.el=re.el,oe(a,E,S)):E=re,T&&ur(T),(Oe=E.props&&E.props.onVnodeBeforeUpdate)&&Ve(Oe,U,E,re),yt(a,!0);const Te=Ji(a),je=a.subTree;a.subTree=Te,O(je,Te,h(je.el),W(je),a,b,_),E.el=Te.el,Q===null&&Ea(a,Te.el),F&&Ie(F,b),(Oe=E.props&&E.props.onVnodeUpdated)&&Ie(()=>Ve(Oe,U,E,re),b)}else{let E;const{el:T,props:F}=u,{bm:U,m:re,parent:Q,root:Oe,type:Te}=a,je=ss(u);yt(a,!1),U&&ur(U),!je&&(E=F&&F.onVnodeBeforeMount)&&Ve(E,Q,u),yt(a,!0);{Oe.ce&&Oe.ce._injectChildStyle(Te);const Be=a.subTree=Ji(a);O(null,Be,p,v,a,b,_),u.el=Be.el}if(re&&Ie(re,b),!je&&(E=F&&F.onVnodeMounted)){const Be=u;Ie(()=>Ve(E,Q,Be),b)}(u.shapeFlag&256||Q&&ss(Q.vnode)&&Q.vnode.shapeFlag&256)&&a.a&&Ie(a.a,b),a.isMounted=!0,u=p=v=null}};a.scope.on();const $=a.effect=new Un(w);a.scope.off();const y=a.update=$.run.bind($),L=a.job=$.runIfDirty.bind($);L.i=a,L.id=a.uid,$.scheduler=()=>Ri(L),yt(a,!0),y()},oe=(a,u,p)=>{u.component=a;const v=a.vnode.props;a.vnode=u,a.next=null,la(a,u.props,v,p),fa(a,u.children,p),mt(),Vi(a),bt()},q=(a,u,p,v,b,_,S,w,$=!1)=>{const y=a&&a.children,L=a?a.shapeFlag:0,E=u.children,{patchFlag:T,shapeFlag:F}=u;if(T>0){if(T&128){nt(y,E,p,v,b,_,S,w,$);return}else if(T&256){Je(y,E,p,v,b,_,S,w,$);return}}F&8?(L&16&&X(y,b,_),E!==y&&f(p,E)):L&16?F&16?nt(y,E,p,v,b,_,S,w,$):X(y,b,_,!0):(L&8&&f(p,""),F&16&&xe(E,p,v,b,_,S,w,$))},Je=(a,u,p,v,b,_,S,w,$)=>{a=a||zt,u=u||zt;const y=a.length,L=u.length,E=Math.min(y,L);let T;for(T=0;T<E;T++){const F=u[T]=$?ct(u[T]):Ke(u[T]);O(a[T],F,p,null,b,_,S,w,$)}y>L?X(a,b,_,!0,!1,E):xe(u,p,v,b,_,S,w,$,E)},nt=(a,u,p,v,b,_,S,w,$)=>{let y=0;const L=u.length;let E=a.length-1,T=L-1;for(;y<=E&&y<=T;){const F=a[y],U=u[y]=$?ct(u[y]):Ke(u[y]);if(Gt(F,U))O(F,U,p,null,b,_,S,w,$);else break;y++}for(;y<=E&&y<=T;){const F=a[E],U=u[T]=$?ct(u[T]):Ke(u[T]);if(Gt(F,U))O(F,U,p,null,b,_,S,w,$);else break;E--,T--}if(y>E){if(y<=T){const F=T+1,U=F<L?u[F].el:v;for(;y<=T;)O(null,u[y]=$?ct(u[y]):Ke(u[y]),p,U,b,_,S,w,$),y++}}else if(y>T)for(;y<=E;)m(a[y],b,_,!0),y++;else{const F=y,U=y,re=new Map;for(y=U;y<=T;y++){const Le=u[y]=$?ct(u[y]):Ke(u[y]);Le.key!=null&&re.set(Le.key,y)}let Q,Oe=0;const Te=T-U+1;let je=!1,Be=0;const Wt=new Array(Te);for(y=0;y<Te;y++)Wt[y]=0;for(y=F;y<=E;y++){const Le=a[y];if(Oe>=Te){m(Le,b,_,!0);continue}let Ue;if(Le.key!=null)Ue=re.get(Le.key);else for(Q=U;Q<=T;Q++)if(Wt[Q-U]===0&&Gt(Le,u[Q])){Ue=Q;break}Ue===void 0?m(Le,b,_,!0):(Wt[Ue-U]=y+1,Ue>=Be?Be=Ue:je=!0,O(Le,u[Ue],p,null,b,_,S,w,$),Oe++)}const Hi=je?ga(Wt):zt;for(Q=Hi.length-1,y=Te-1;y>=0;y--){const Le=U+y,Ue=u[Le],Di=Le+1<L?u[Le+1].el:v;Wt[y]===0?O(null,Ue,p,Di,b,_,S,w,$):je&&(Q<0||y!==Hi[Q]?Xe(Ue,p,Di,2):Q--)}}},Xe=(a,u,p,v,b=null)=>{const{el:_,type:S,transition:w,children:$,shapeFlag:y}=a;if(y&6){Xe(a.component.subTree,u,p,v);return}if(y&128){a.suspense.move(u,p,v);return}if(y&64){S.move(a,u,p,vt);return}if(S===st){r(_,u,p);for(let E=0;E<$.length;E++)Xe($[E],u,p,v);r(a.anchor,u,p);return}if(S===br){V(a,u,p);return}if(v!==2&&y&1&&w)if(v===0)w.beforeEnter(_),r(_,u,p),Ie(()=>w.enter(_),b);else{const{leave:E,delayLeave:T,afterLeave:F}=w,U=()=>r(_,u,p),re=()=>{E(_,()=>{U(),F&&F()})};T?T(_,U,re):re()}else r(_,u,p)},m=(a,u,p,v=!1,b=!1)=>{const{type:_,props:S,ref:w,children:$,dynamicChildren:y,shapeFlag:L,patchFlag:E,dirs:T,cacheIndex:F}=a;if(E===-2&&(b=!1),w!=null&&Us(w,null,p,a,!0),F!=null&&(u.renderCache[F]=void 0),L&256){u.ctx.deactivate(a);return}const U=L&1&&T,re=!ss(a);let Q;if(re&&(Q=S&&S.onVnodeBeforeUnmount)&&Ve(Q,u,a),L&6)N(a.component,p,v);else{if(L&128){a.suspense.unmount(p,v);return}U&&_t(a,null,u,"beforeUnmount"),L&64?a.type.remove(a,u,p,vt,v):y&&!y.hasOnce&&(_!==st||E>0&&E&64)?X(y,u,p,!1,!0):(_===st&&E&384||!b&&L&16)&&X($,u,p),v&&P(a)}(re&&(Q=S&&S.onVnodeUnmounted)||U)&&Ie(()=>{Q&&Ve(Q,u,a),U&&_t(a,null,u,"unmounted")},p)},P=a=>{const{type:u,el:p,anchor:v,transition:b}=a;if(u===st){I(p,v);return}if(u===br){R(a);return}const _=()=>{i(p),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(a.shapeFlag&1&&b&&!b.persisted){const{leave:S,delayLeave:w}=b,$=()=>S(p,_);w?w(a.el,_,$):$()}else _()},I=(a,u)=>{let p;for(;a!==u;)p=g(a),i(a),a=p;i(u)},N=(a,u,p)=>{const{bum:v,scope:b,job:_,subTree:S,um:w,m:$,a:y}=a;Zi($),Zi(y),v&&ur(v),b.stop(),_&&(_.flags|=8,m(S,a,u,p)),w&&Ie(w,u),Ie(()=>{a.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&a.asyncDep&&!a.asyncResolved&&a.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},X=(a,u,p,v=!1,b=!1,_=0)=>{for(let S=_;S<a.length;S++)m(a[S],u,p,v,b)},W=a=>{if(a.shapeFlag&6)return W(a.component.subTree);if(a.shapeFlag&128)return a.suspense.next();const u=g(a.anchor||a.el),p=u&&u[Nc];return p?g(p):u};let Qe=!1;const ot=(a,u,p)=>{a==null?u._vnode&&m(u._vnode,null,null,!0):O(u._vnode||null,a,u,null,null,null,p),u._vnode=a,Qe||(Qe=!0,Vi(),lo(),Qe=!1)},vt={p:O,um:m,m:Xe,r:P,mt:Vt,mc:xe,pc:q,pbc:ve,n:W,o:e};return{render:ot,hydrate:void 0,createApp:ia(ot)}}function mr({type:e,props:t},s){return s==="svg"&&e==="foreignObject"||s==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:s}function yt({effect:e,job:t},s){s?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function pa(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Co(e,t,s=!1){const r=e.children,i=t.children;if(D(r)&&D(i))for(let n=0;n<r.length;n++){const o=r[n];let l=i[n];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[n]=ct(i[n]),l.el=o.el),!s&&l.patchFlag!==-2&&Co(o,l)),l.type===or&&(l.el=o.el)}}function ga(e){const t=e.slice(),s=[0];let r,i,n,o,l;const c=e.length;for(r=0;r<c;r++){const d=e[r];if(d!==0){if(i=s[s.length-1],e[i]<d){t[r]=i,s.push(r);continue}for(n=0,o=s.length-1;n<o;)l=n+o>>1,e[s[l]]<d?n=l+1:o=l;d<e[s[n]]&&(n>0&&(t[r]=s[n-1]),s[n]=r)}}for(n=s.length,o=s[n-1];n-- >0;)s[n]=o,o=t[o];return s}function Po(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Po(t)}function Zi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const ma=Symbol.for("v-scx"),ba=()=>is(ma);function va(e,t){return Ti(e,null,t)}function ht(e,t,s){return Ti(e,t,s)}function Ti(e,t,s=te){const{immediate:r,deep:i,flush:n,once:o}=s,l=Se({},s),c=t&&r||!t&&n!=="post";let d;if(bs){if(n==="sync"){const x=ba();d=x.__watcherHandles||(x.__watcherHandles=[])}else if(!c){const x=()=>{};return x.stop=Ge,x.resume=Ge,x.pause=Ge,x}}const f=ye;l.call=(x,C,O)=>Ze(x,f,C,O);let h=!1;n==="post"?l.scheduler=x=>{Ie(x,f&&f.suspense)}:n!=="sync"&&(h=!0,l.scheduler=(x,C)=>{C?x():Ri(x)}),l.augmentJob=x=>{t&&(x.flags|=4),h&&(x.flags|=2,f&&(x.id=f.uid,x.i=f))};const g=Mc(e,t,l);return bs&&(d?d.push(g):c&&g()),g}function _a(e,t,s){const r=this.proxy,i=de(e)?e.includes(".")?To(r,e):()=>r[e]:e.bind(r,r);let n;z(t)?n=t:(n=t.handler,s=t);const o=ws(this),l=Ti(i,n.bind(r),s);return o(),l}function To(e,t){const s=t.split(".");return()=>{let r=e;for(let i=0;i<s.length&&r;i++)r=r[s[i]];return r}}const ya=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${pt(t)}Modifiers`]||e[`${It(t)}Modifiers`];function xa(e,t,...s){if(e.isUnmounted)return;const r=e.vnode.props||te;let i=s;const n=t.startsWith("update:"),o=n&&ya(r,t.slice(7));o&&(o.trim&&(i=s.map(f=>de(f)?f.trim():f)),o.number&&(i=s.map(Vl)));let l,c=r[l=ar(t)]||r[l=ar(pt(t))];!c&&n&&(c=r[l=ar(It(t))]),c&&Ze(c,e,6,i);const d=r[l+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Ze(d,e,6,i)}}function Mo(e,t,s=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const n=e.emits;let o={},l=!1;if(!z(e)){const c=d=>{const f=Mo(d,t,!0);f&&(l=!0,Se(o,f))};!s&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!n&&!l?(ce(e)&&r.set(e,null),null):(D(n)?n.forEach(c=>o[c]=null):Se(o,n),ce(e)&&r.set(e,o),o)}function nr(e,t){return!e||!Zs(t)?!1:(t=t.slice(2).replace(/Once$/,""),Z(e,t[0].toLowerCase()+t.slice(1))||Z(e,It(t))||Z(e,t))}function Ji(e){const{type:t,vnode:s,proxy:r,withProxy:i,propsOptions:[n],slots:o,attrs:l,emit:c,render:d,renderCache:f,props:h,data:g,setupState:x,ctx:C,inheritAttrs:O}=e,J=Bs(e);let B,G;try{if(s.shapeFlag&4){const R=i||r,Y=R;B=Ke(d.call(Y,R,f,h,x,g,C)),G=l}else{const R=t;B=Ke(R.length>1?R(h,{attrs:l,slots:o,emit:c}):R(h,null)),G=t.props?l:$a(l)}}catch(R){ns.length=0,sr(R,e,1),B=Rt(gs)}let V=B;if(G&&O!==!1){const R=Object.keys(G),{shapeFlag:Y}=V;R.length&&Y&7&&(n&&R.some(di)&&(G=wa(G,n)),V=Bt(V,G,!1,!0))}return s.dirs&&(V=Bt(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(s.dirs):s.dirs),s.transition&&Ci(V,s.transition),B=V,Bs(J),B}const $a=e=>{let t;for(const s in e)(s==="class"||s==="style"||Zs(s))&&((t||(t={}))[s]=e[s]);return t},wa=(e,t)=>{const s={};for(const r in e)(!di(r)||!(r.slice(9)in t))&&(s[r]=e[r]);return s};function Sa(e,t,s){const{props:r,children:i,component:n}=e,{props:o,children:l,patchFlag:c}=t,d=n.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return r?Xi(r,o,d):!!o;if(c&8){const f=t.dynamicProps;for(let h=0;h<f.length;h++){const g=f[h];if(o[g]!==r[g]&&!nr(d,g))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Xi(r,o,d):!0:!!o;return!1}function Xi(e,t,s){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const n=r[i];if(t[n]!==e[n]&&!nr(s,n))return!0}return!1}function Ea({vnode:e,parent:t},s){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=s,t=t.parent;else break}}const Oo=e=>e.__isSuspense;function Aa(e,t){t&&t.pendingBranch?D(e)?t.effects.push(...e):t.effects.push(e):Ic(e)}const st=Symbol.for("v-fgt"),or=Symbol.for("v-txt"),gs=Symbol.for("v-cmt"),br=Symbol.for("v-stc"),ns=[];let Ne=null;function Ra(e=!1){ns.push(Ne=e?null:[])}function Ca(){ns.pop(),Ne=ns[ns.length-1]||null}let ms=1;function Qi(e,t=!1){ms+=e,e<0&&Ne&&t&&(Ne.hasOnce=!0)}function Pa(e){return e.dynamicChildren=ms>0?Ne||zt:null,Ca(),ms>0&&Ne&&Ne.push(e),e}function Ta(e,t,s,r,i,n){return Pa(fe(e,t,s,r,i,n,!0))}function Lo(e){return e?e.__v_isVNode===!0:!1}function Gt(e,t){return e.type===t.type&&e.key===t.key}const Io=({key:e})=>e??null,Os=({ref:e,ref_key:t,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?de(e)||he(e)||z(e)?{i:Fe,r:e,k:t,f:!!s}:e:null);function fe(e,t=null,s=null,r=0,i=null,n=e===st?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Io(t),ref:t&&Os(t),scopeId:ao,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Fe};return l?(Mi(c,s),n&128&&e.normalize(c)):s&&(c.shapeFlag|=de(s)?8:16),ms>0&&!o&&Ne&&(c.patchFlag>0||n&6)&&c.patchFlag!==32&&Ne.push(c),c}const Rt=Ma;function Ma(e,t=null,s=null,r=0,i=null,n=!1){if((!e||e===Zc)&&(e=gs),Lo(e)){const l=Bt(e,t,!0);return s&&Mi(l,s),ms>0&&!n&&Ne&&(l.shapeFlag&6?Ne[Ne.indexOf(e)]=l:Ne.push(l)),l.patchFlag=-2,l}if(ja(e)&&(e=e.__vccOpts),t){t=Oa(t);let{class:l,style:c}=t;l&&!de(l)&&(t.class=bi(l)),ce(c)&&(Ei(c)&&!D(c)&&(c=Se({},c)),t.style=mi(c))}const o=de(e)?1:Oo(e)?128:Fc(e)?64:ce(e)?4:z(e)?2:0;return fe(e,t,s,r,i,o,n,!0)}function Oa(e){return e?Ei(e)||xo(e)?Se({},e):e:null}function Bt(e,t,s=!1,r=!1){const{props:i,ref:n,patchFlag:o,children:l,transition:c}=e,d=t?La(i||{},t):i,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Io(d),ref:t&&t.ref?s&&n?D(n)?n.concat(Os(t)):[n,Os(t)]:Os(t):n,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==st?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Bt(e.ssContent),ssFallback:e.ssFallback&&Bt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Ci(f,c.clone(f)),f}function Fr(e=" ",t=0){return Rt(or,null,e,t)}function Ke(e){return e==null||typeof e=="boolean"?Rt(gs):D(e)?Rt(st,null,e.slice()):Lo(e)?ct(e):Rt(or,null,String(e))}function ct(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Bt(e)}function Mi(e,t){let s=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(D(t))s=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Mi(e,i()),i._c&&(i._d=!0));return}else{s=32;const i=t._;!i&&!xo(t)?t._ctx=Fe:i===3&&Fe&&(Fe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else z(t)?(t={default:t,_ctx:Fe},s=32):(t=String(t),r&64?(s=16,t=[Fr(t)]):s=8);e.children=t,e.shapeFlag|=s}function La(...e){const t={};for(let s=0;s<e.length;s++){const r=e[s];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=bi([t.class,r.class]));else if(i==="style")t.style=mi([t.style,r.style]);else if(Zs(i)){const n=t[i],o=r[i];o&&n!==o&&!(D(n)&&n.includes(o))&&(t[i]=n?[].concat(n,o):o)}else i!==""&&(t[i]=r[i])}return t}function Ve(e,t,s,r=null){Ze(e,t,7,[s,r])}const Ia=bo();let ka=0;function Na(e,t,s){const r=e.type,i=(t?t.appContext:e.appContext)||Ia,n={uid:ka++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Jl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wo(r,i),emitsOptions:Mo(r,i),emit:null,emitted:null,propsDefaults:te,inheritAttrs:r.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=t?t.root:n,n.emit=xa.bind(null,n),e.ce&&e.ce(n),n}let ye=null;const lr=()=>ye||Fe;let Ws,zr;{const e=Qs(),t=(s,r)=>{let i;return(i=e[s])||(i=e[s]=[]),i.push(r),n=>{i.length>1?i.forEach(o=>o(n)):i[0](n)}};Ws=t("__VUE_INSTANCE_SETTERS__",s=>ye=s),zr=t("__VUE_SSR_SETTERS__",s=>bs=s)}const ws=e=>{const t=ye;return Ws(e),e.scope.on(),()=>{e.scope.off(),Ws(t)}},en=()=>{ye&&ye.scope.off(),Ws(null)};function ko(e){return e.vnode.shapeFlag&4}let bs=!1;function Fa(e,t=!1,s=!1){t&&zr(t);const{props:r,children:i}=e.vnode,n=ko(e);oa(e,r,n,t),ua(e,i,s);const o=n?za(e,t):void 0;return t&&zr(!1),o}function za(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Jc);const{setup:r}=s;if(r){mt();const i=e.setupContext=r.length>1?Da(e):null,n=ws(e),o=$s(r,e,0,[e.props,i]),l=Ln(o);if(bt(),n(),(l||e.sp)&&!ss(e)&&uo(e),l){if(o.then(en,en),t)return o.then(c=>{tn(e,c)}).catch(c=>{sr(c,e,0)});e.asyncDep=o}else tn(e,o)}else No(e)}function tn(e,t,s){z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ce(t)&&(e.setupState=io(t)),No(e)}function No(e,t,s){const r=e.type;e.render||(e.render=r.render||Ge);{const i=ws(e);mt();try{Xc(e)}finally{bt(),i()}}}const Ha={get(e,t){return $e(e,"get",""),e[t]}};function Da(e){const t=s=>{e.exposed=s||{}};return{attrs:new Proxy(e.attrs,Ha),slots:e.slots,emit:e.emit,expose:t}}function Oi(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(io(_c(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in rs)return rs[s](e)},has(t,s){return s in t||s in rs}})):e.proxy}function ja(e){return z(e)&&"__vccOpts"in e}const qe=(e,t)=>Pc(e,t,bs),Ba="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Hr;const sn=typeof window<"u"&&window.trustedTypes;if(sn)try{Hr=sn.createPolicy("vue",{createHTML:e=>e})}catch{}const Fo=Hr?e=>Hr.createHTML(e):e=>e,Ua="http://www.w3.org/2000/svg",Va="http://www.w3.org/1998/Math/MathML",tt=typeof document<"u"?document:null,rn=tt&&tt.createElement("template"),Wa={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,r)=>{const i=t==="svg"?tt.createElementNS(Ua,e):t==="mathml"?tt.createElementNS(Va,e):s?tt.createElement(e,{is:s}):tt.createElement(e);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>tt.createTextNode(e),createComment:e=>tt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>tt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,r,i,n){const o=s?s.previousSibling:t.lastChild;if(i&&(i===n||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),s),!(i===n||!(i=i.nextSibling)););else{rn.innerHTML=Fo(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=rn.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,s)}return[o?o.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}},Ka=Symbol("_vtc");function Ga(e,t,s){const r=e[Ka];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}const nn=Symbol("_vod"),Ya=Symbol("_vsh"),qa=Symbol(""),Za=/(^|;)\s*display\s*:/;function Ja(e,t,s){const r=e.style,i=de(s);let n=!1;if(s&&!i){if(t)if(de(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();s[l]==null&&Ls(r,l,"")}else for(const o in t)s[o]==null&&Ls(r,o,"");for(const o in s)o==="display"&&(n=!0),Ls(r,o,s[o])}else if(i){if(t!==s){const o=r[qa];o&&(s+=";"+o),r.cssText=s,n=Za.test(s)}}else t&&e.removeAttribute("style");nn in e&&(e[nn]=n?r.display:"",e[Ya]&&(r.display="none"))}const on=/\s*!important$/;function Ls(e,t,s){if(D(s))s.forEach(r=>Ls(e,t,r));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const r=Xa(e,t);on.test(s)?e.setProperty(It(r),s.replace(on,""),"important"):e[r]=s}}const ln=["Webkit","Moz","ms"],vr={};function Xa(e,t){const s=vr[t];if(s)return s;let r=pt(t);if(r!=="filter"&&r in e)return vr[t]=r;r=Nn(r);for(let i=0;i<ln.length;i++){const n=ln[i]+r;if(n in e)return vr[t]=n}return t}const cn="http://www.w3.org/1999/xlink";function an(e,t,s,r,i,n=Zl(t)){r&&t.startsWith("xlink:")?s==null?e.removeAttributeNS(cn,t.slice(6,t.length)):e.setAttributeNS(cn,t,s):s==null||n&&!zn(s)?e.removeAttribute(t):e.setAttribute(t,n?"":gt(s)?String(s):s)}function un(e,t,s,r,i){if(t==="innerHTML"||t==="textContent"){s!=null&&(e[t]=t==="innerHTML"?Fo(s):s);return}const n=e.tagName;if(t==="value"&&n!=="PROGRESS"&&!n.includes("-")){const l=n==="OPTION"?e.getAttribute("value")||"":e.value,c=s==null?e.type==="checkbox"?"on":"":String(s);(l!==c||!("_value"in e))&&(e.value=c),s==null&&e.removeAttribute(t),e._value=s;return}let o=!1;if(s===""||s==null){const l=typeof e[t];l==="boolean"?s=zn(s):s==null&&l==="string"?(s="",o=!0):l==="number"&&(s=0,o=!0)}try{e[t]=s}catch{}o&&e.removeAttribute(i||t)}function Qa(e,t,s,r){e.addEventListener(t,s,r)}function e0(e,t,s,r){e.removeEventListener(t,s,r)}const fn=Symbol("_vei");function t0(e,t,s,r,i=null){const n=e[fn]||(e[fn]={}),o=n[t];if(r&&o)o.value=r;else{const[l,c]=s0(t);if(r){const d=n[t]=n0(r,i);Qa(e,l,d,c)}else o&&(e0(e,l,o,c),n[t]=void 0)}}const hn=/(?:Once|Passive|Capture)$/;function s0(e){let t;if(hn.test(e)){t={};let r;for(;r=e.match(hn);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):It(e.slice(2)),t]}let _r=0;const r0=Promise.resolve(),i0=()=>_r||(r0.then(()=>_r=0),_r=Date.now());function n0(e,t){const s=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=s.attached)return;Ze(o0(r,s.value),t,5,[r])};return s.value=e,s.attached=i0(),s}function o0(e,t){if(D(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const dn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,l0=(e,t,s,r,i,n)=>{const o=i==="svg";t==="class"?Ga(e,r,o):t==="style"?Ja(e,s,r):Zs(t)?di(t)||t0(e,t,s,r,n):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):c0(e,t,r,o))?(un(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&an(e,t,r,o,n,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!de(r))?un(e,pt(t),r,n,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),an(e,t,r,o))};function c0(e,t,s,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&dn(t)&&z(s));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return dn(t)&&de(s)?!1:t in e}const a0=Se({patchProp:l0},Wa);let pn;function u0(){return pn||(pn=ha(a0))}const f0=(...e)=>{const t=u0().createApp(...e),{mount:s}=t;return t.mount=r=>{const i=d0(r);if(!i)return;const n=t._component;!z(n)&&!n.render&&!n.template&&(n.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=s(i,!1,h0(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function h0(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function d0(e){return de(e)?document.querySelector(e):e}function p0(e){return Bn()?(Xl(e),!0):!1}const yr=new WeakMap,g0=(...e)=>{var t;const s=e[0],r=(t=lr())==null?void 0:t.proxy;if(r==null&&!vo())throw new Error("injectLocal must be called in setup");return r&&yr.has(r)&&s in yr.get(r)?yr.get(r)[s]:is(...e)},m0=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const b0=Object.prototype.toString,v0=e=>b0.call(e)==="[object Object]",_0=()=>{};function zo(...e){if(e.length!==1)return Ac(...e);const t=e[0];return typeof t=="function"?tr(wc(()=>({get:t,set:_0}))):hs(t)}function y0(e,t){function s(...r){return new Promise((i,n)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(i).catch(n)})}return s}const Ho=e=>e();function x0(e=Ho,t={}){const{initialState:s="active"}=t,r=zo(s==="active");function i(){r.value=!1}function n(){r.value=!0}const o=(...l)=>{r.value&&e(...l)};return{isActive:tr(r),pause:i,resume:n,eventFilter:o}}function gn(e){return e.endsWith("rem")?Number.parseFloat(e)*16:Number.parseFloat(e)}function xr(e){return Array.isArray(e)?e:[e]}function $0(e){return lr()}function w0(e,t,s={}){const{eventFilter:r=Ho,...i}=s;return ht(e,y0(r,t),i)}function S0(e,t,s={}){const{eventFilter:r,initialState:i="active",...n}=s,{eventFilter:o,pause:l,resume:c,isActive:d}=x0(r,{initialState:i});return{stop:w0(e,t,{...n,eventFilter:o}),pause:l,resume:c,isActive:d}}function Do(e,t=!0,s){$0()?ir(e,s):t?e():Ai(e)}function E0(e=!1,t={}){const{truthyValue:s=!0,falsyValue:r=!1}=t,i=he(e),n=Et(e);function o(l){if(arguments.length)return n.value=l,n.value;{const c=Ye(s);return n.value=n.value===c?Ye(r):c,n.value}}return i?o:[n,o]}function A0(e,t,s){return ht(e,t,{...s,immediate:!0})}const vs=m0?window:void 0;function jo(e){var t;const s=Ye(e);return(t=s==null?void 0:s.$el)!=null?t:s}function Ks(...e){const t=[],s=()=>{t.forEach(l=>l()),t.length=0},r=(l,c,d,f)=>(l.addEventListener(c,d,f),()=>l.removeEventListener(c,d,f)),i=qe(()=>{const l=xr(Ye(e[0])).filter(c=>c!=null);return l.every(c=>typeof c!="string")?l:void 0}),n=A0(()=>{var l,c;return[(c=(l=i.value)==null?void 0:l.map(d=>jo(d)))!=null?c:[vs].filter(d=>d!=null),xr(Ye(i.value?e[1]:e[0])),xr(ds(i.value?e[2]:e[1])),Ye(i.value?e[3]:e[2])]},([l,c,d,f])=>{if(s(),!(l!=null&&l.length)||!(c!=null&&c.length)||!(d!=null&&d.length))return;const h=v0(f)?{...f}:f;t.push(...l.flatMap(g=>c.flatMap(x=>d.map(C=>r(g,x,C,h)))))},{flush:"post"}),o=()=>{n(),s()};return p0(s),o}function R0(){const e=Et(!1),t=lr();return t&&ir(()=>{e.value=!0},t),e}function C0(e){const t=R0();return qe(()=>(t.value,!!e()))}const P0=Symbol("vueuse-ssr-width");function T0(){const e=vo()?g0(P0,null):null;return typeof e=="number"?e:void 0}function M0(e,t={}){const{window:s=vs,ssrWidth:r=T0()}=t,i=C0(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function"),n=Et(typeof r=="number"),o=Et(),l=Et(!1),c=d=>{l.value=d.matches};return va(()=>{if(n.value){n.value=!i.value;const d=Ye(e).split(",");l.value=d.some(f=>{const h=f.includes("not all"),g=f.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),x=f.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let C=!!(g||x);return g&&C&&(C=r>=gn(g[1])),x&&C&&(C=r<=gn(x[1])),h?!C:C});return}i.value&&(o.value=s.matchMedia(Ye(e)),l.value=o.value.matches)}),Ks(o,"change",c,{passive:!0}),qe(()=>l.value)}const Ps=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ts="__vueuse_ssr_handlers__",O0=L0();function L0(){return Ts in Ps||(Ps[Ts]=Ps[Ts]||{}),Ps[Ts]}function Bo(e,t){return O0[e]||t}function I0(e){return M0("(prefers-color-scheme: dark)",e)}function k0(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const N0={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},mn="vueuse-storage";function F0(e,t,s,r={}){var i;const{flush:n="pre",deep:o=!0,listenToStorageChanges:l=!0,writeDefaults:c=!0,mergeDefaults:d=!1,shallow:f,window:h=vs,eventFilter:g,onError:x=H=>{console.error(H)},initOnMounted:C}=r,O=(f?Et:hs)(typeof t=="function"?t():t),J=qe(()=>Ye(e));if(!s)try{s=Bo("getDefaultStorage",()=>{var H;return(H=vs)==null?void 0:H.localStorage})()}catch(H){x(H)}if(!s)return O;const B=Ye(t),G=k0(B),V=(i=r.serializer)!=null?i:N0[G],{pause:R,resume:Y}=S0(O,()=>se(O.value),{flush:n,deep:o,eventFilter:g});ht(J,()=>pe(),{flush:n}),h&&l&&Do(()=>{s instanceof Storage?Ks(h,"storage",pe,{passive:!0}):Ks(h,mn,ve),C&&pe()}),C||pe();function ue(H,ee){if(h){const le={key:J.value,oldValue:H,newValue:ee,storageArea:s};h.dispatchEvent(s instanceof Storage?new StorageEvent("storage",le):new CustomEvent(mn,{detail:le}))}}function se(H){try{const ee=s.getItem(J.value);if(H==null)ue(ee,null),s.removeItem(J.value);else{const le=V.write(H);ee!==le&&(s.setItem(J.value,le),ue(ee,le))}}catch(ee){x(ee)}}function xe(H){const ee=H?H.newValue:s.getItem(J.value);if(ee==null)return c&&B!=null&&s.setItem(J.value,V.write(B)),B;if(!H&&d){const le=V.read(ee);return typeof d=="function"?d(le,B):G==="object"&&!Array.isArray(le)?{...B,...le}:le}else return typeof ee!="string"?ee:V.read(ee)}function pe(H){if(!(H&&H.storageArea!==s)){if(H&&H.key==null){O.value=B;return}if(!(H&&H.key!==J.value)){R();try{(H==null?void 0:H.newValue)!==V.write(O.value)&&(O.value=xe(H))}catch(ee){x(ee)}finally{H?Ai(Y):Y()}}}}function ve(H){pe(H.detail)}return O}const z0="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function H0(e={}){const{selector:t="html",attribute:s="class",initialValue:r="auto",window:i=vs,storage:n,storageKey:o="vueuse-color-scheme",listenToStorageChanges:l=!0,storageRef:c,emitAuto:d,disableTransition:f=!0}=e,h={auto:"",light:"light",dark:"dark",...e.modes||{}},g=I0({window:i}),x=qe(()=>g.value?"dark":"light"),C=c||(o==null?zo(r):F0(o,r,n,{window:i,listenToStorageChanges:l})),O=qe(()=>C.value==="auto"?x.value:C.value),J=Bo("updateHTMLAttrs",(R,Y,ue)=>{const se=typeof R=="string"?i==null?void 0:i.document.querySelector(R):jo(R);if(!se)return;const xe=new Set,pe=new Set;let ve=null;if(Y==="class"){const ee=ue.split(/\s/g);Object.values(h).flatMap(le=>(le||"").split(/\s/g)).filter(Boolean).forEach(le=>{ee.includes(le)?xe.add(le):pe.add(le)})}else ve={key:Y,value:ue};if(xe.size===0&&pe.size===0&&ve===null)return;let H;f&&(H=i.document.createElement("style"),H.appendChild(document.createTextNode(z0)),i.document.head.appendChild(H));for(const ee of xe)se.classList.add(ee);for(const ee of pe)se.classList.remove(ee);ve&&se.setAttribute(ve.key,ve.value),f&&(i.getComputedStyle(H).opacity,document.head.removeChild(H))});function B(R){var Y;J(t,s,(Y=h[R])!=null?Y:R)}function G(R){e.onChanged?e.onChanged(R,B):B(R)}ht(O,G,{flush:"post",immediate:!0}),Do(()=>G(O.value));const V=qe({get(){return d?C.value:O.value},set(R){C.value=R}});return Object.assign(V,{store:C,system:x,state:O})}function D0(e={}){const{valueDark:t="dark",valueLight:s=""}=e,r=H0({...e,onChanged:(o,l)=>{var c;e.onChanged?(c=e.onChanged)==null||c.call(e,o==="dark",l,o):l(o)},modes:{dark:t,light:s}}),i=qe(()=>r.system.value);return qe({get(){return r.value==="dark"},set(o){const l=o?"dark":"light";i.value===l?r.value="auto":r.value=l}})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Is=globalThis,Li=Is.ShadowRoot&&(Is.ShadyCSS===void 0||Is.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ii=Symbol(),bn=new WeakMap;let Uo=class{constructor(t,s,r){if(this._$cssResult$=!0,r!==Ii)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const s=this.t;if(Li&&t===void 0){const r=s!==void 0&&s.length===1;r&&(t=bn.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&bn.set(s,t))}return t}toString(){return this.cssText}};const j0=e=>new Uo(typeof e=="string"?e:e+"",void 0,Ii),ze=(e,...t)=>{const s=e.length===1?e[0]:t.reduce((r,i,n)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1],e[0]);return new Uo(s,e,Ii)},B0=(e,t)=>{if(Li)e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of t){const r=document.createElement("style"),i=Is.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=s.cssText,e.appendChild(r)}},vn=Li?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(const r of t.cssRules)s+=r.cssText;return j0(s)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:U0,defineProperty:V0,getOwnPropertyDescriptor:W0,getOwnPropertyNames:K0,getOwnPropertySymbols:G0,getPrototypeOf:Y0}=Object,dt=globalThis,_n=dt.trustedTypes,q0=_n?_n.emptyScript:"",$r=dt.reactiveElementPolyfillSupport,os=(e,t)=>e,Dr={toAttribute(e,t){switch(t){case Boolean:e=e?q0:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},Vo=(e,t)=>!U0(e,t),yn={attribute:!0,type:String,converter:Dr,reflect:!1,hasChanged:Vo};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),dt.litPropertyMetadata??(dt.litPropertyMetadata=new WeakMap);class Ft extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=yn){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,s);i!==void 0&&V0(this.prototype,t,i)}}static getPropertyDescriptor(t,s,r){const{get:i,set:n}=W0(this.prototype,t)??{get(){return this[s]},set(o){this[s]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const l=i==null?void 0:i.call(this);n.call(this,o),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??yn}static _$Ei(){if(this.hasOwnProperty(os("elementProperties")))return;const t=Y0(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(os("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(os("properties"))){const s=this.properties,r=[...K0(s),...G0(s)];for(const i of r)this.createProperty(i,s[i])}const t=this[Symbol.metadata];if(t!==null){const s=litPropertyMetadata.get(t);if(s!==void 0)for(const[r,i]of s)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[s,r]of this.elementProperties){const i=this._$Eu(s,r);i!==void 0&&this._$Eh.set(i,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)s.unshift(vn(i))}else t!==void 0&&s.push(vn(t));return s}static _$Eu(t,s){const r=s.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(s=>s(this))}addController(t){var s;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var s;(s=this._$EO)==null||s.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const r of s.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return B0(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostConnected)==null?void 0:r.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostDisconnected)==null?void 0:r.call(s)})}attributeChangedCallback(t,s,r){this._$AK(t,r)}_$EC(t,s){var n;const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const o=(((n=r.converter)==null?void 0:n.toAttribute)!==void 0?r.converter:Dr).toAttribute(s,r.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,s){var n;const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=r.getPropertyOptions(i),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:Dr;this._$Em=i,this[i]=l.fromAttribute(s,o.type),this._$Em=null}}requestUpdate(t,s,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??Vo)(this[t],s))return;this.P(t,s,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,s,r){this._$AL.has(t)||this._$AL.set(t,s),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,o]of i)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(r=this._$EO)==null||r.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(s)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(s)}willUpdate(t){}_$AE(t){var s;(s=this._$EO)==null||s.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(s=>this._$EC(s,this[s]))),this._$EU()}updated(t){}firstUpdated(t){}}Ft.elementStyles=[],Ft.shadowRootOptions={mode:"open"},Ft[os("elementProperties")]=new Map,Ft[os("finalized")]=new Map,$r==null||$r({ReactiveElement:Ft}),(dt.reactiveElementVersions??(dt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ls=globalThis,Gs=ls.trustedTypes,xn=Gs?Gs.createPolicy("lit-html",{createHTML:e=>e}):void 0,Wo="$lit$",ut=`lit$${Math.random().toFixed(9).slice(2)}$`,Ko="?"+ut,Z0=`<${Ko}>`,Tt=document,_s=()=>Tt.createComment(""),ys=e=>e===null||typeof e!="object"&&typeof e!="function",ki=Array.isArray,J0=e=>ki(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",wr=`[ 	
\f\r]`,Yt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$n=/-->/g,wn=/>/g,xt=RegExp(`>|${wr}(?:([^\\s"'>=/]+)(${wr}*=${wr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Sn=/'/g,En=/"/g,Go=/^(?:script|style|textarea|title)$/i,X0=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),ne=X0(1),Mt=Symbol.for("lit-noChange"),ae=Symbol.for("lit-nothing"),An=new WeakMap,wt=Tt.createTreeWalker(Tt,129);function Yo(e,t){if(!ki(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return xn!==void 0?xn.createHTML(t):t}const Q0=(e,t)=>{const s=e.length-1,r=[];let i,n=t===2?"<svg>":t===3?"<math>":"",o=Yt;for(let l=0;l<s;l++){const c=e[l];let d,f,h=-1,g=0;for(;g<c.length&&(o.lastIndex=g,f=o.exec(c),f!==null);)g=o.lastIndex,o===Yt?f[1]==="!--"?o=$n:f[1]!==void 0?o=wn:f[2]!==void 0?(Go.test(f[2])&&(i=RegExp("</"+f[2],"g")),o=xt):f[3]!==void 0&&(o=xt):o===xt?f[0]===">"?(o=i??Yt,h=-1):f[1]===void 0?h=-2:(h=o.lastIndex-f[2].length,d=f[1],o=f[3]===void 0?xt:f[3]==='"'?En:Sn):o===En||o===Sn?o=xt:o===$n||o===wn?o=Yt:(o=xt,i=void 0);const x=o===xt&&e[l+1].startsWith("/>")?" ":"";n+=o===Yt?c+Z0:h>=0?(r.push(d),c.slice(0,h)+Wo+c.slice(h)+ut+x):c+ut+(h===-2?l:x)}return[Yo(e,n+(e[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};let jr=class qo{constructor({strings:t,_$litType$:s},r){let i;this.parts=[];let n=0,o=0;const l=t.length-1,c=this.parts,[d,f]=Q0(t,s);if(this.el=qo.createElement(d,r),wt.currentNode=this.el.content,s===2||s===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=wt.nextNode())!==null&&c.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(Wo)){const g=f[o++],x=i.getAttribute(h).split(ut),C=/([.?@])?(.*)/.exec(g);c.push({type:1,index:n,name:C[2],strings:x,ctor:C[1]==="."?tu:C[1]==="?"?su:C[1]==="@"?ru:cr}),i.removeAttribute(h)}else h.startsWith(ut)&&(c.push({type:6,index:n}),i.removeAttribute(h));if(Go.test(i.tagName)){const h=i.textContent.split(ut),g=h.length-1;if(g>0){i.textContent=Gs?Gs.emptyScript:"";for(let x=0;x<g;x++)i.append(h[x],_s()),wt.nextNode(),c.push({type:2,index:++n});i.append(h[g],_s())}}}else if(i.nodeType===8)if(i.data===Ko)c.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf(ut,h+1))!==-1;)c.push({type:7,index:n}),h+=ut.length-1}n++}}static createElement(t,s){const r=Tt.createElement("template");return r.innerHTML=t,r}};function Ut(e,t,s=e,r){var o,l;if(t===Mt)return t;let i=r!==void 0?(o=s._$Co)==null?void 0:o[r]:s._$Cl;const n=ys(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),n===void 0?i=void 0:(i=new n(e),i._$AT(e,s,r)),r!==void 0?(s._$Co??(s._$Co=[]))[r]=i:s._$Cl=i),i!==void 0&&(t=Ut(e,i._$AS(e,t.values),i,r)),t}let eu=class{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:r}=this._$AD,i=((t==null?void 0:t.creationScope)??Tt).importNode(s,!0);wt.currentNode=i;let n=wt.nextNode(),o=0,l=0,c=r[0];for(;c!==void 0;){if(o===c.index){let d;c.type===2?d=new Ni(n,n.nextSibling,this,t):c.type===1?d=new c.ctor(n,c.name,c.strings,this,t):c.type===6&&(d=new iu(n,this,t)),this._$AV.push(d),c=r[++l]}o!==(c==null?void 0:c.index)&&(n=wt.nextNode(),o++)}return wt.currentNode=Tt,i}p(t){let s=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,s),s+=r.strings.length-2):r._$AI(t[s])),s++}},Ni=class Zo{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,s,r,i){this.type=2,this._$AH=ae,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=Ut(this,t,s),ys(t)?t===ae||t==null||t===""?(this._$AH!==ae&&this._$AR(),this._$AH=ae):t!==this._$AH&&t!==Mt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):J0(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==ae&&ys(this._$AH)?this._$AA.nextSibling.data=t:this.T(Tt.createTextNode(t)),this._$AH=t}$(t){var n;const{values:s,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=jr.createElement(Yo(r.h,r.h[0]),this.options)),r);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(s);else{const o=new eu(i,this),l=o.u(this.options);o.p(s),this.T(l),this._$AH=o}}_$AC(t){let s=An.get(t.strings);return s===void 0&&An.set(t.strings,s=new jr(t)),s}k(t){ki(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let r,i=0;for(const n of t)i===s.length?s.push(r=new Zo(this.O(_s()),this.O(_s()),this,this.options)):r=s[i],r._$AI(n),i++;i<s.length&&(this._$AR(r&&r._$AB.nextSibling,i),s.length=i)}_$AR(t=this._$AA.nextSibling,s){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,s);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var s;this._$AM===void 0&&(this._$Cv=t,(s=this._$AP)==null||s.call(this,t))}};class cr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,r,i,n){this.type=1,this._$AH=ae,this._$AN=void 0,this.element=t,this.name=s,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ae}_$AI(t,s=this,r,i){const n=this.strings;let o=!1;if(n===void 0)t=Ut(this,t,s,0),o=!ys(t)||t!==this._$AH&&t!==Mt,o&&(this._$AH=t);else{const l=t;let c,d;for(t=n[0],c=0;c<n.length-1;c++)d=Ut(this,l[r+c],s,c),d===Mt&&(d=this._$AH[c]),o||(o=!ys(d)||d!==this._$AH[c]),d===ae?t=ae:t!==ae&&(t+=(d??"")+n[c+1]),this._$AH[c]=d}o&&!i&&this.j(t)}j(t){t===ae?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}let tu=class extends cr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ae?void 0:t}},su=class extends cr{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ae)}},ru=class extends cr{constructor(t,s,r,i,n){super(t,s,r,i,n),this.type=5}_$AI(t,s=this){if((t=Ut(this,t,s,0)??ae)===Mt)return;const r=this._$AH,i=t===ae&&r!==ae||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==ae&&(r===ae||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,t):this._$AH.handleEvent(t)}},iu=class{constructor(t,s,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Ut(this,t)}};const Sr=ls.litHtmlPolyfillSupport;Sr==null||Sr(jr,Ni),(ls.litHtmlVersions??(ls.litHtmlVersions=[])).push("3.2.1");const nu=(e,t,s)=>{const r=(s==null?void 0:s.renderBefore)??t;let i=r._$litPart$;if(i===void 0){const n=(s==null?void 0:s.renderBefore)??null;r._$litPart$=i=new Ni(t.insertBefore(_s(),n),n,void 0,s??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let we=class extends Ft{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const t=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=t.firstChild),t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=nu(s,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Mt}};var Mn;we._$litElement$=!0,we.finalized=!0,(Mn=globalThis.litElementHydrateSupport)==null||Mn.call(globalThis,{LitElement:we});const Er=globalThis.litElementPolyfillSupport;Er==null||Er({LitElement:we});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ou=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jo={ATTRIBUTE:1,CHILD:2},Xo=e=>(...t)=>({_$litDirective$:e,values:t});let Qo=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,r){this._$Ct=t,this._$AM=s,this._$Ci=r}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cs=(e,t)=>{var r;const s=e._$AN;if(s===void 0)return!1;for(const i of s)(r=i._$AO)==null||r.call(i,t,!1),cs(i,t);return!0},Ys=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while((s==null?void 0:s.size)===0)},el=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),au(t)}};function lu(e){this._$AN!==void 0?(Ys(this),this._$AM=e,el(this)):this._$AM=e}function cu(e,t=!1,s=0){const r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let n=s;n<r.length;n++)cs(r[n],!1),Ys(r[n]);else r!=null&&(cs(r,!1),Ys(r));else cs(this,e)}const au=e=>{e.type==Jo.CHILD&&(e._$AP??(e._$AP=cu),e._$AQ??(e._$AQ=lu))};class uu extends Qo{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,r){super._$AT(t,s,r),el(this),this.isConnected=t._$AU}_$AO(t,s=!0){var r,i;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(i=this.disconnected)==null||i.call(this)),s&&(cs(this,t),Ys(this))}setValue(t){if(ou(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=()=>new fu;let fu=class{};const Ar=new WeakMap,be=Xo(class extends uu{render(e){return ae}update(e,[t]){var r;const s=t!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=t,this.ht=(r=e.options)==null?void 0:r.host,this.rt(this.ct=e.element)),ae}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let s=Ar.get(t);s===void 0&&(s=new WeakMap,Ar.set(t,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=Ar.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});function hu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zt={exports:{}},du=Zt.exports,Rn;function pu(){return Rn||(Rn=1,function(e,t){(function(s,r){r(t)})(du,function(s){function f(m,P,I){let N=m*(1-I)**2,X=P*I**2;return X/(N+X)}function h(m,P,I,N){m=pe(m),P=pe(P);let X=O(m),W=O(P),Qe=R(X),ot=R(W),vt=se(Qe,q),zi=se(ot,q);I=f(vt,zi,I);const a=new Array(38);for(let p=0;p<38;p++){let v=(1-I)*((1-Qe[p])**2/(2*Qe[p]))+I*((1-ot[p])**2/(2*ot[p])),b=1+v-Math.sqrt(v**2+2*v);a[p]=b}let u=B(G(a));return u.push(Y(m[3],P[3],I)),ve(u,N)}function g(m,P,I,N){let X=[];for(let W=0;W<I;W++)X.push(h(m,P,W/(I-1),N));return X}function x(m){return m<.04045?m/12.92:((m+.055)/1.055)**2.4}function C(m){return m<.0031308?m*12.92:1.055*m**(1/2.4)-.055}function O(m){let P=x(m[0]/255),I=x(m[1]/255),N=x(m[2]/255);return[P,I,N]}function J(m){let P=C(m[0]),I=C(m[1]),N=C(m[2]);return[Math.round(ue(P,0,1)*255),Math.round(ue(I,0,1)*255),Math.round(ue(N,0,1)*255)]}function B(m){let P=se(nt[0],m),I=se(nt[1],m),N=se(nt[2],m);return J([P,I,N])}function G(m){let P=se(m,oe),I=se(m,q),N=se(m,Je);return[P,I,N]}function V(m){let P=Math.min(Math.min(m[0],m[1]),m[2]);m=[m[0]-P,m[1]-P,m[2]-P];let I=Math.min(m[1],m[2]),N=Math.min(m[0],m[2]),X=Math.min(m[0],m[1]),W=Math.max(0,Math.min(m[0]-m[2],m[0]-m[1])),Qe=Math.max(0,Math.min(m[1]-m[2],m[1]-m[0])),ot=Math.max(0,Math.min(m[2]-m[1],m[2]-m[0]));return[P,I,N,X,W,Qe,ot]}function R(m){let P=V(m);const I=new Array(38);for(let N=0;N<38;N++)I[N]=Math.max(1e-8,P[0]+P[1]*H[N]+P[2]*ee[N]+P[3]*le[N]+P[4]*Vt[N]+P[5]*Ss[N]+P[6]*_e[N]);return I}function Y(m,P,I){return m+I*(P-m)}function ue(m,P,I){return Math.min(Math.max(m,P),I)}function se(m,P){return m.map((I,N)=>m[N]*P[N]).reduce((I,N)=>I+N)}function xe(m){let P=pe(m);return[P[0]/255,P[1]/255,P[2]/255,P[3]>1?P[3]/255:P[3]]}function pe(m){if(Array.isArray(m)){const[P,I,N,X=1]=m;return[P,I,N,X]}if(m.startsWith("rgb")){m=m.slice(m.indexOf("(")+1,-1).split(",").map(W=>W.trim().endsWith("%")?Math.round(parseFloat(W.trim())*2.55):Number(W.trim()));const[P,I,N,X=1]=m;return[P,I,N,X]}if(m.startsWith("#")){m.length===4||m.length===5?m=m.split("").slice(1).map(W=>W+W).join(""):m=m.slice(1),m=m.match(/.{1,2}/g).map(W=>parseInt(W,16));const[P,I,N,X=1]=m.length===3?[...m,1]:m;return[P,I,N,X]}return[0,0,0,1]}function ve(m,P){let I=m[0],N=m[1],X=m[2],W=m[3];return P===0||P===1?`rgb${P===1?"a":""}(${I}, ${N}, ${X}${P===1?", "+W:""})`:(I=I.toString(16),N=N.toString(16),X=X.toString(16),W=(W>1?W:Math.round(ue(W,0,1)*255)).toString(16),I.length==1&&(I="0"+I),N.length==1&&(N="0"+N),X.length==1&&(X="0"+X),W.length==1&&(W="0"+W),`#${I}${N}${X}${P===3?W:""}`)}const H=[.96853629,.96855103,.96859338,.96877345,.96942204,.97143709,.97541862,.98074186,.98580992,.98971194,.99238027,.99409844,.995172,.99576545,.99593552,.99564041,.99464769,.99229579,.98638762,.96829712,.89228016,.53740239,.15360445,.05705719,.03126539,.02205445,.01802271,.0161346,.01520947,.01475977,.01454263,.01444459,.01439897,.0143762,.01436343,.01435687,.0143537,.01435408],ee=[.51567122,.5401552,.62645502,.75595012,.92826996,.97223624,.98616174,.98955255,.98676237,.97312575,.91944277,.32564851,.13820628,.05015143,.02912336,.02421691,.02660696,.03407586,.04835936,1172e-7,8554e-8,.85267882,.93188793,.94810268,.94200977,.91478045,.87065445,.78827548,.65738359,.59909403,.56817268,.54031997,.52110241,.51041094,.50526577,.5025508,.50126452,.50083021],le=[.02055257,.02059936,.02062723,.02073387,.02114202,.02233154,.02556857,.03330189,.05185294,.10087639,.24000413,.53589066,.79874659,.91186529,.95399623,.97137099,.97939505,.98345207,.98553736,.98648905,.98674535,.98657555,.98611877,.98559942,.98507063,.98460039,.98425301,.98403909,.98388535,.98376116,.98368246,.98365023,.98361309,.98357259,.98353856,.98351247,.98350101,.98350852],Vt=[.03147571,.03146636,.03140624,.03119611,.03053888,.02856855,.02459485,.0192952,.01423112,.01033111,.00765876,.00593693,.00485616,.00426186,.00409039,.00438375,.00537525,.00772962,.0136612,.03181352,.10791525,.46249516,.84604333,.94275572,.96860996,.97783966,.98187757,.98377315,.98470202,.98515481,.98537114,.98546685,.98550011,.98551031,.98550741,.98551323,.98551563,.98551547],Ss=[.49108579,.46944057,.4016578,.2449042,.0682688,.02732883,.013606,.01000187,.01284127,.02636635,.07058713,.70421692,.85473994,.95081565,.9717037,.97651888,.97429245,.97012917,.9425863,.99989207,.99989891,.13823139,.06968113,.05628787,.06111561,.08987709,.13656016,.22169624,.32176956,.36157329,.4836192,.46488579,.47440306,.4857699,.49267971,.49625685,.49807754,.49889859],_e=[.97901834,.97901649,.97901118,.97892146,.97858555,.97743705,.97428075,.96663223,.94822893,.89937713,.76070164,.4642044,.20123039,.08808402,.04592894,.02860373,.02060067,.01656701,.01451549,.01357964,.01331243,.01347661,.01387181,.01435472,.01479836,.0151525,.01540513,.01557233,.0156571,.01571025,.01571916,.01572133,.01572502,.01571717,.01571905,.01571059,.01569728,.0157002],oe=[6469e-8,21941e-8,.00112057,.00376661,.01188055,.02328644,.03455942,.03722379,.03241838,.02123321,.01049099,.00329584,50704e-8,94867e-8,.00627372,.01686462,.02868965,.04267481,.05625475,.0694704,.08305315,.0861261,.09046614,.08500387,.07090667,.05062889,.03547396,.02146821,.01251646,.00680458,.00346457,.00149761,7697e-7,40737e-8,16901e-8,9522e-8,4903e-8,2e-5],q=[184e-8,621e-8,3101e-8,10475e-8,35364e-8,95147e-8,.00228226,.00420733,.0066888,.0098884,.01524945,.02141831,.03342293,.05131001,.07040208,.08783871,.09424905,.09795667,.09415219,.08678102,.07885653,.0635267,.05374142,.04264606,.03161735,.02088521,.01386011,.00810264,.0046301,.00249138,.0012593,54165e-8,27795e-8,14711e-8,6103e-8,3439e-8,1771e-8,722e-8],Je=[30502e-8,.00103681,.00531314,.01795439,.05707758,.11365162,.17335873,.19620658,.18608237,.13995048,.08917453,.04789621,.02814563,.01613766,.0077591,.00429615,.00200551,86147e-8,36904e-8,19143e-8,14956e-8,9231e-8,6813e-8,2883e-8,1577e-8,394e-8,158e-8,0,0,0,0,0,0,0,0,0,0,0],nt=[[3.24306333,-1.53837619,-.49893282],[-.96896309,1.87542451,.04154303],[.05568392,-.20417438,1.05799454]];function Xe(){return`
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
    `}s.RGB=0,s.RGBA=1,s.HEX=2,s.HEXA=3,s.mix=h,s.palette=g,s.glsl_color=xe,s.glsl=Xe})}(Zt,Zt.exports)),Zt.exports}var gu=pu();const mu=hu(gu);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tl="important",bu=" !"+tl,Fi=Xo(class extends Qo{constructor(e){var t;if(super(e),e.type!==Jo.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,s)=>{const r=e[s];return r==null?t:t+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(e,[t]){const{style:s}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const r of this.ft)t[r]==null&&(this.ft.delete(r),r.includes("-")?s.removeProperty(r):s[r]=null);for(const r in t){const i=t[r];if(i!=null){this.ft.add(r);const n=typeof i=="string"&&i.endsWith(bu);r.includes("-")||n?s.setProperty(r,n?i.slice(0,-11):i,n?tl:""):s[r]=i}}return Mt}});var vu=Object.defineProperty,sl=e=>{throw TypeError(e)},_u=(e,t,s)=>t in e?vu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,j=(e,t,s)=>_u(e,typeof t!="symbol"?t+"":t,s),rl=(e,t,s)=>t.has(e)||sl("Cannot "+s),k=(e,t,s)=>(rl(e,t,"read from private field"),s?s.call(e):t.get(e)),Ot=(e,t,s)=>t.has(e)?sl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),M=(e,t,s)=>(rl(e,t,"access private method"),s);class Br extends we{constructor(){super(),j(this,"rootEl",me())}render(){return ne`
      <div ${be(this.rootEl)} class="body">
        ${this.label?ne` <span class="label" part="label">${this.label}</span>`:ne``}
        <div class="content" part="content">
          <slot></slot>
        </div>
      </div>
    `}}j(Br,"properties",{label:{type:String}}),j(Br,"styles",ze`
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
  `);class Ur extends we{constructor(){super(),j(this,"rootEl",me())}render(){return ne`
      <div
        ${be(this.rootEl)}
        class="body"
      >
        <slot></slot>
      </div>
    `}}j(Ur,"properties",{}),j(Ur,"styles",ze`
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
  `);class Vr extends we{constructor(){super(),j(this,"rootEl",me()),j(this,"feedBackEl",me()),this.disabled=!1,this.feedback=!1}showFeedBack(t,s=1e3){if(!this.feedback){console.warn("Please enable the feedback attribute.");return}const{value:r}=this.feedBackEl;r.innerHTML=t,r.setAttribute("duration",s),r.setAttribute("show","")}render(){return ne`
      <button ${be(this.rootEl)} class="body" ?disabled=${this.disabled}>
        ${this.feedback?ne` <rgb-color-mixer-ui-tool-tip
              ${be(this.feedBackEl)}
            ></rgb-color-mixer-ui-tool-tip>`:ne``}
        <rgb-color-mixer-ui-icon>
          <slot></slot>
        </rgb-color-mixer-ui-icon>
      </button>
    `}}j(Vr,"properties",{disabled:{type:Boolean},feedback:{type:Boolean}}),j(Vr,"styles",ze`
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
  `);const Cn={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};var Pn={red:0,orange:60,yellow:120,green:180,blue:240,purple:300};function yu(e){var t,s,r,i=[],n=1,o;if(typeof e=="number")return{space:"rgb",values:[e>>>16,(e&65280)>>>8,e&255],alpha:1};if(typeof e=="number")return{space:"rgb",values:[e>>>16,(e&65280)>>>8,e&255],alpha:1};if(e=String(e).toLowerCase(),Cn[e])i=Cn[e].slice(),o="rgb";else if(e==="transparent")n=0,o="rgb",i=[0,0,0];else if(e[0]==="#"){var l=e.slice(1),c=l.length,d=c<=4;n=1,d?(i=[parseInt(l[0]+l[0],16),parseInt(l[1]+l[1],16),parseInt(l[2]+l[2],16)],c===4&&(n=parseInt(l[3]+l[3],16)/255)):(i=[parseInt(l[0]+l[1],16),parseInt(l[2]+l[3],16),parseInt(l[4]+l[5],16)],c===8&&(n=parseInt(l[6]+l[7],16)/255)),i[0]||(i[0]=0),i[1]||(i[1]=0),i[2]||(i[2]=0),o="rgb"}else if(r=/^((?:rgba?|hs[lvb]a?|hwba?|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms|oklch|oklab|color))\s*\(([^\)]*)\)/.exec(e)){var f=r[1];o=f.replace(/a$/,"");var h=o==="cmyk"?4:o==="gray"?1:3;i=r[2].trim().split(/\s*[,\/]\s*|\s+/),o==="color"&&(o=i.shift()),i=i.map(function(g,x){if(g[g.length-1]==="%")return g=parseFloat(g)/100,x===3?g:o==="rgb"?g*255:o[0]==="h"||o[0]==="l"&&!x?g*100:o==="lab"?g*125:o==="lch"?x<2?g*150:g*360:o[0]==="o"&&!x?g:o==="oklab"?g*.4:o==="oklch"?x<2?g*.4:g*360:g;if(o[x]==="h"||x===2&&o[o.length-1]==="h"){if(Pn[g]!==void 0)return Pn[g];if(g.endsWith("deg"))return parseFloat(g);if(g.endsWith("turn"))return parseFloat(g)*360;if(g.endsWith("grad"))return parseFloat(g)*360/400;if(g.endsWith("rad"))return parseFloat(g)*180/Math.PI}return g==="none"?0:parseFloat(g)}),n=i.length>h?i.pop():1}else/[0-9](?:\s|\/|,)/.test(e)&&(i=e.match(/([0-9]+)/g).map(function(g){return parseFloat(g)}),o=((s=(t=e.match(/([a-z])/ig))==null?void 0:t.join(""))==null?void 0:s.toLowerCase())||"rgb");return{space:o,values:i,alpha:n}}const xs={name:"rgb",min:[0,0,0],max:[255,255,255],channel:["red","green","blue"],alias:["RGB"]};var Ct={name:"hsl",min:[0,0,0],max:[360,100,100],channel:["hue","saturation","lightness"],alias:["HSL"],rgb:function(e){var t=e[0]/360,s=e[1]/100,r=e[2]/100,i,n,o,l,c,d=0;if(s===0)return c=r*255,[c,c,c];for(n=r<.5?r*(1+s):r+s-r*s,i=2*r-n,l=[0,0,0];d<3;)o=t+1/3*-(d-1),o<0?o++:o>1&&o--,c=6*o<1?i+(n-i)*6*o:2*o<1?n:3*o<2?i+(n-i)*(2/3-o)*6:i,l[d++]=c*255;return l}};xs.hsl=function(e){var t=e[0]/255,s=e[1]/255,r=e[2]/255,i=Math.min(t,s,r),n=Math.max(t,s,r),o=n-i,l,c,d;return n===i?l=0:t===n?l=(s-r)/o:s===n?l=2+(r-t)/o:r===n&&(l=4+(t-s)/o),l=Math.min(l*60,360),l<0&&(l+=360),d=(i+n)/2,n===i?c=0:d<=.5?c=o/(n+i):c=o/(2-n-i),[l,c*100,d*100]};function Wr(e){Array.isArray(e)&&e.raw&&(e=String.raw(...arguments)),e instanceof Number&&(e=+e);var t,s=yu(e);if(!s.space)return[];const r=s.space[0]==="h"?Ct.min:xs.min,i=s.space[0]==="h"?Ct.max:xs.max;return t=Array(3),t[0]=Math.min(Math.max(s.values[0],r[0]),i[0]),t[1]=Math.min(Math.max(s.values[1],r[1]),i[1]),t[2]=Math.min(Math.max(s.values[2],r[2]),i[2]),s.space[0]==="h"&&(t=Ct.rgb(t)),t.push(Math.min(Math.max(s.alpha,0),1)),t}function ks(e,t,s){return Math.min(Math.max(e,t),s)}function Kr(e,t="rgb"){const s=Math.round(e[0]*255),r=Math.round(e[1]*255),i=Math.round(e[2]*255);return t==="hex"?"#"+(i|r<<8|s<<16|1<<24).toString(16).slice(1):`rgb(${s},${r},${i})`}function jt(e){const[t,s,r]=e;return[t/255,s/255,r/255]}async function xu(e){const t={"text/plain":e},s=new ClipboardItem(t);await navigator.clipboard.write([s])}function Lt(e,t,s={bubbles:!0,composed:!0,cancelable:!0}){return new CustomEvent(e,{detail:window.structuredClone(t),...s})}function $u(e){const t=Wr(e);if(!t)return console.warn("Cound not parse text to color. Fallback to black."),"black";const[s,r,i]=jt(t);return .2126*s+.7152*r+.0722*i>.179?"black":"white"}function wu(){return new Promise((e,t)=>{new EyeDropper().open().then(s=>{e(s.sRGBHex)}).catch(t)})}function Su(){return"EyeDropper"in window}var Ns,il,nl;class Gr extends we{constructor(){super(),Ot(this,Ns),j(this,"rootEl",me()),j(this,"inputEl",me()),this.autofocus=!1,this.disabled=!1,this.readonly=!1,this.type="text",this.min=void 0,this.max=void 0,this.step=void 0}setValue(t){let s=t;this.type==="number"&&(this.step!=null&&(s=Math.round(s/this.step)*this.step),this.max!=null&&(s=Math.min(s,this.max)),this.min!=null&&(s=Math.max(s,this.min))),M(this,Ns,il).call(this,s)}clear(){this.setValue("")}firstUpdated(t){t.has("autofocus")&&this.autofocus&&this.inputEl.value.focus()}updated(t){t.has("value")&&this.inputEl.value&&(this.inputEl.value.value=this.value)}render(){return ne`
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
          @change=${M(this,Ns,nl)}
        />
      </div>
    `}}Ns=new WeakSet,il=function(e){const t=Lt("update:value",{value:e},{bubbles:!1});this.dispatchEvent(t)},nl=function(e){const{value:t}=e.target;this.setValue(t)},j(Gr,"properties",{autofocus:{type:Boolean},disabled:{type:Boolean},max:{type:Number},min:{type:Number},readonly:{type:Boolean},step:{type:Number},type:{type:String},value:{type:String}}),j(Gr,"styles",ze`
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
  `);class Yr extends we{constructor(){super(),j(this,"rootEl",me())}render(){return ne`
      <div
        ${be(this.rootEl)}
        class="body"
      >
      </div>
    `}}j(Yr,"properties",{}),j(Yr,"styles",ze`
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
  `);class qr extends we{constructor(){super(),j(this,"rootEl",me()),this._intervalTimer,this.duration=1e3}willUpdate(t){t.has("show")&&(clearInterval(this._intervalTimer),this._intervalTimer=setTimeout(()=>{this.show=!1},this.duration))}render(){return ne`
      <div
        ${be(this.rootEl)}
        class="body"
      >
        <slot></slot>
      </div>
    `}}j(qr,"properties",{duration:{type:Number,reflect:!0},show:{type:Boolean,reflect:!0}}),j(qr,"styles",ze`
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
  `);var Ae,Fs,ol,ll,cl,al,ul,as,fl;class Zr extends we{constructor(){super(),Ot(this,Ae),j(this,"rootEl",me()),this._sliderValue=0,this.colorActive=null}resetSlider(){this._sliderValue=0}willUpdate(t){if(t.has("_sliderValue")){M(this,Ae,as).call(this,null);const s=k(this,Ae,Fs).call(this,this._sliderValue);M(this,Ae,ul).call(this,s)}t.has("colorActive")&&M(this,Ae,as).call(this,this.colorActive)}render(){return ne`
      <div ${be(this.rootEl)} class="body">
        <rgb-color-mixer-blender-stop
          ?active="${this.colorActive==="start"}"
          value=${this.colorStart}
          @update:active=${M(this,Ae,cl)}
        ></rgb-color-mixer-blender-stop>
        <rgb-color-slider
          .colorFunc=${M(this,Ae,fl).bind(this)}
          .colorStops=${k(this,Ae,ol)}
          max="1"
          min="0"
          step="0.01"
          value=${this._sliderValue}
          @update:value=${M(this,Ae,ll)}
        ></rgb-color-slider>
        <rgb-color-mixer-blender-stop
          ?active="${this.colorActive==="end"}"
          value=${this.colorEnd}
          @update:active=${M(this,Ae,al)}
        ></rgb-color-mixer-blender-stop>
      </div>
    `}}Ae=new WeakSet,Fs=function(){return e=>mu.mix(this.colorStart,this.colorEnd,e)},ol=function(){return[...Array(11).keys()].map(e=>k(this,Ae,Fs).call(this,e/10))},ll=function(e){this._sliderValue=e.detail.value},cl=function(e){const t=e.detail.value?"start":null;M(this,Ae,as).call(this,t)},al=function(e){const t=e.detail.value?"end":null;M(this,Ae,as).call(this,t)},ul=function(e){const t=Lt("update:value",{value:e},{bubbles:!1});this.dispatchEvent(t)},as=function(e){const t=Lt("update:coloractive",{value:e},{bubbles:!1});this.dispatchEvent(t)},fl=function(e){return k(this,Ae,Fs).call(this,e)},j(Zr,"properties",{_sliderValue:{state:!0},colorActive:{type:String},colorStart:{type:String},colorEnd:{type:String}}),j(Zr,"styles",ze`
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
  `);var qs,hl,Tn;class Jr extends we{constructor(){super(),Ot(this,qs),this.active=!1,this.value="#000000"}willUpdate(t){t.has("value")&&(this._color=$u(this.value))}render(){return ne`
      <button
        ?active=${this.active}
        class="body"
        style=${Fi({"--color":this._color,"--background-color":this.value})}
        @click=${M(this,qs,hl)}
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
    `}}qs=new WeakSet,hl=function(e){const t=!this.active;M(this,qs,Tn).call(this,t)},Tn=function(e){const t=Lt("update:active",{value:e},{bubbles:!1});this.dispatchEvent(t)},j(Jr,"properties",{_color:{state:!0},active:{type:Boolean,reflect:!0},value:{type:String,reflect:!0}}),j(Jr,"styles",ze`
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
  `);var Xr,zs,dl,pl;class Qr extends we{constructor(){super(),Ot(this,zs),j(this,"rootEl",me()),j(this,"inputEl",me()),j(this,"copyEl",me()),Ot(this,Xr,Su()),this.disabled=!1}setValue(t){M(this,zs,pl).call(this,t)}async copyToClipboard(){await xu(this.value),this.copyEl.value.showFeedBack("Copied")}async openEyeDropper(){let t;try{t=await wu()}catch{}this.setValue(t)}updated(t){t.has("value")&&(this.inputEl.value.value=this.value)}render(){return ne`
      <div ${be(this.rootEl)} class="body">
        <rgb-color-mixer-ui-field class="value">
          <div
            class="swatch"
            style=${Fi({"--color":this.value})}
          ></div>
          <rgb-color-mixer-ui-input
            ${be(this.inputEl)}
            class="input"
            ?disabled=${this.disabled}
            value=${this.value}
            @update:value=${M(this,zs,dl)}
          ></rgb-color-mixer-ui-input>
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
          </rgb-color-mixer-ui-icon-button>
        ${k(this,Xr)?ne`
          <rgb-color-mixer-ui-icon-button @click=${this.openEyeDropper}>
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
          </rgb-color-mixer-ui-icon-button>`:ne``}
        </rgb-color-mixer-ui-field>
      </div>
    `}}Xr=new WeakMap,zs=new WeakSet,dl=function(e){e.stopPropagation();const{value:t}=e.detail;this.setValue(t)},pl=function(e){const t=Lt("update:value",{value:e},{bubbles:!1});this.dispatchEvent(t)},j(Qr,"properties",{disabled:{type:Boolean},value:{type:String,reflect:!0}}),j(Qr,"styles",ze`
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
  `);var ge,gl,ml,bl,Rr,vl,ei,_l,yl,xl,ti,$l,si;class ri extends we{constructor(){super(),Ot(this,ge),j(this,"rootEl",me()),j(this,"trackEl",me()),j(this,"thumbEl",me()),this._percentage=0,this.value=0,this.min=0,this.max=1,this.step=.01,this.width=320,this.height=32,this.colorStops=[],this.colorFunc=()=>"transparent",this.stepMultiplier=1,this.stepMultiplierFast=10,this.gradientMode="to right in srgb",this._handlePointerUp=M(this,ge,_l).bind(this),this._handlePointerMove=M(this,ge,ei).bind(this)}setValue(t){const{width:s}=this,r=ks(t,this.min,this.max),i=Math.round(r/this.step)*this.step,n=1/(this.max-this.min)*(i-this.min),o=s*n;M(this,ge,ti).call(this,o,s)}previousStep(t=1){this.value=ks(this.value-this.step*t,this.min,this.max)}nextStep(t=1){this.value=ks(this.value+this.step*t,this.min,this.max)}willUpdate(t){t.has("value")&&this.setValue(this.value),t.has("_active")&&(this._active?M(this,ge,$l).call(this):M(this,ge,si).call(this)),t.has("_percentage")&&M(this,ge,bl).call(this,this.value)}connectedCallback(){super.connectedCallback(),window.addEventListener("pointerup",this._handlePointerUp)}disconnectedCallback(){window.removeEventListener("pointerup",this._handlePointerUp),M(this,ge,si).call(this),super.disconnectedCallback()}render(){return ne`
      <div
        ${be(this.rootEl)}
        class="body"
        role="slider"
        tabindex="0"
        style=${Fi({"--height":this.height+"px","--percentage":this._percentage.toFixed(4),"--width":this.width+"px","--color-stops":k(this,ge,gl),"--color":k(this,ge,ml),"--gradient-mode":this.gradientMode})}
        @keydown=${M(this,ge,xl)}
      >
        <div class="ramp"></div>
        <div class="slider">
          <div
            ${be(this.trackEl)}
            class="track"
            @pointerdown=${M(this,ge,vl)}
          >
            <div
              ${be(this.thumbEl)}
              class="thumb"
              @pointerdown=${M(this,ge,yl)}
            ></div>
          </div>
        </div>
      </div>
    `}}ge=new WeakSet,gl=function(){return this.colorStops.join(",")},ml=function(){return this.colorFunc(this.value)},bl=function(e){const t=Lt("update:value",{value:e},{bubbles:!1});this.dispatchEvent(t)},Rr=function(){const e=this.min+(this.max-this.min)*this._percentage,t=Math.round(e/this.step)*this.step;this.value=t},vl=function(e){M(this,ge,ei).call(this,e)},ei=function(e){var t;const{x:s,width:r}=this.trackEl.value.getBoundingClientRect(),{clientX:i}=((t=e.touches)==null?void 0:t[0])||e,n=i-s;M(this,ge,ti).call(this,n,r),M(this,ge,Rr).call(this)},_l=function(e){this._active=!1,M(this,ge,Rr).call(this)},yl=function(e){this._active=!0},xl=function(e){const t=e.shiftKey?this.stepMultiplierFast:this.stepMultiplier;switch(e.key){case"ArrowLeft":this.previousStep(t);break;case"ArrowRight":this.nextStep(t);break}},ti=function(e,t){const s=ks(1/t*e,0,1);Math.abs(this._percentage-s)>.001&&(this._percentage=s)},$l=function(){window.addEventListener("pointermove",this._handlePointerMove)},si=function(){window.removeEventListener("pointermove",this._handlePointerMove)},j(ri,"properties",{_active:{state:!0},_percentage:{state:!0},colorFunc:{type:Function},colorStops:{type:Array},gradientMode:{type:String},height:{type:Number,reflect:!0},max:{type:Number},min:{type:Number},step:{type:Number},stepMultiplier:{type:Number},stepMultiplierFast:{type:Number},value:{type:Number},width:{type:Number,reflect:!0}}),j(ri,"styles",ze`
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
  `);class ii extends we{constructor(){super(),j(this,"rootEl",me())}render(){return ne`
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
    `}}j(ii,"properties",{}),j(ii,"styles",ze`
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
`);var A,Cr,ke,Me,Ms,wl,Sl,El,Al,Rl,Cl,Jt,Pl,ni,oi,li,ci,ai,ui,Tl,Ml,Ol,Ll,Il,kl,Nl,Fl,zl;class fi extends we{constructor(){super(),Ot(this,A),j(this,"rootEl",me()),j(this,"blenderEl",me()),this._colorActive=!1,this._colorEnd="#ffffff",this._colorStart="#000000",this._rgb=[0,0,0],this.channels="rgbhsl",this.format="rgb",this.initialValue=void 0,this.noBlender=!1,this.value=void 0}get colorCss(){return Kr(this._rgb,this.format)}setColor(t){const s=Wr(t);s.length&&this.setRgb(s)}setRgb(t){const s=jt(t);this.setRgbNormalized(s)}setRgbNormalized(t){t.some((s,r)=>Math.abs(s-this._rgb[r])>1e-4)&&(this._rgb=[...t])}connectedCallback(){super.connectedCallback()}willUpdate(t){if(t.has("initialValue")){this.setColor(this.initialValue),this._colorStart=k(this,A,Jt);const s=xs.hsl(Wr(k(this,A,Jt)));s[0]=(s[0]+90)%360;const r=Ct.rgb(s);this._colorEnd=Kr(jt(r),"hex")}(t.has("_rgb")||t.has("_colorActive"))&&(this._colorActive==="start"?this._colorStart=k(this,A,Jt):this._colorActive==="end"&&(this._colorEnd=k(this,A,Jt))),t.has("_rgb")&&(this.value=this.colorCss,M(this,A,Pl).call(this,this.colorCss))}render(){const t=[];for(const s of this.channels){let r;switch(s){case"r":r=ne` <!-- Red -->
            <rgb-color-slider-item>
              <div slot="label">R</div>
              <rgb-color-slider
                min="0"
                max="255"
                slot="slider"
                step="1"
                value=${k(this,A,ke)[0]}
                .colorStops=${k(this,A,wl)}
                .colorFunc=${M(this,A,Tl).bind(this)}
                @update:value=${M(this,A,ni)}
              ></rgb-color-slider>
              <rgb-color-mixer-ui-input
                slot="value"
                class="value"
                max="255"
                min="0"
                step="1"
                type="number"
                value=${k(this,A,ke)[0]}
                @update:value=${M(this,A,ni)}
              ></rgb-color-mixer-ui-input>
            </rgb-color-slider-item>`;break;case"g":r=ne` <!-- Green -->
            <rgb-color-slider-item>
              <div slot="label">G</div>
              <rgb-color-slider
                .colorFunc=${M(this,A,Ml).bind(this)}
                .colorStops=${k(this,A,Sl)}
                max="255"
                min="0"
                slot="slider"
                step="1"
                value=${k(this,A,ke)[1]}
                @update:value=${M(this,A,oi)}
              ></rgb-color-slider>
              <rgb-color-mixer-ui-input
                slot="value"
                class="value"
                max="255"
                min="0"
                step="1"
                type="number"
                value=${k(this,A,ke)[1]}
                @update:value=${M(this,A,oi)}
              ></rgb-color-mixer-ui-input>
            </rgb-color-slider-item>`;break;case"b":r=ne` <!-- Blue -->
            <rgb-color-slider-item>
              <div slot="label">B</div>
              <rgb-color-slider
                .colorFunc=${M(this,A,Ol).bind(this)}
                .colorStops=${k(this,A,El)}
                max="255"
                min="0"
                slot="slider"
                step="1"
                value=${k(this,A,ke)[2]}
                @update:value=${M(this,A,li)}
              ></rgb-color-slider>
              <rgb-color-mixer-ui-input
                slot="value"
                class="value"
                max="255"
                min="0"
                step="1"
                type="number"
                value=${k(this,A,ke)[2]}
                @update:value=${M(this,A,li)}
              ></rgb-color-mixer-ui-input>
            </rgb-color-slider-item>`;break;case"h":r=ne` <!-- Hue -->
            <rgb-color-slider-item>
              <div slot="label">H</div>
              <rgb-color-slider
                .colorFunc=${M(this,A,Ll).bind(this)}
                .colorStops=${k(this,A,Al)}
                gradientMode="to right in hsl longer hue"
                max="360"
                min="0"
                slot="slider"
                step="0.01"
                stepMultiplier="100"
                stepMultiplierFast="1500"
                value=${k(this,A,Me)[0].toFixed(2)}
                @update:value=${M(this,A,ci)}
              ></rgb-color-slider>
              <rgb-color-mixer-ui-input
                slot="value"
                class="value"
                max="360"
                min="0"
                step="0.01"
                type="number"
                value=${k(this,A,Me)[0].toFixed(2)}
                @update:value=${M(this,A,ci)}
              ></rgb-color-mixer-ui-input>
            </rgb-color-slider-item>`;break;case"s":r=ne` <!-- Saturation -->
            <rgb-color-slider-item>
              <div slot="label">S</div>
              <rgb-color-slider
                .colorFunc=${M(this,A,Il).bind(this)}
                .colorStops=${k(this,A,Rl)}
                gradientMode="to right in hsl"
                max="100"
                min="0"
                slot="slider"
                step="0.01"
                stepMultiplier="100"
                stepMultiplierFast="1000"
                value=${k(this,A,Me)[1].toFixed(2)}
                @update:value=${M(this,A,ai)}
              ></rgb-color-slider>
              <rgb-color-mixer-ui-input
                slot="value"
                class="value"
                max="100"
                min="0"
                step="0.01"
                type="number"
                value=${k(this,A,Me)[1].toFixed(2)}
                @update:value=${M(this,A,ai)}
              ></rgb-color-mixer-ui-input>
            </rgb-color-slider-item>`;break;case"l":r=ne` <!-- Lightness -->
            <rgb-color-slider-item>
              <div slot="label">L</div>
              <rgb-color-slider
                .colorFunc=${M(this,A,kl).bind(this)}
                .colorStops=${k(this,A,Cl)}
                gradientMode="to right in hsl"
                max="100"
                min="0"
                slot="slider"
                step="0.01"
                stepMultiplier="100"
                stepMultiplierFast="1000"
                value=${k(this,A,Me)[2].toFixed(2)}
                @update:value=${M(this,A,ui)}
              ></rgb-color-slider>
              <rgb-color-mixer-ui-input
                slot="value"
                class="value"
                max="100"
                min="0"
                step="0.01"
                type="number"
                value=${k(this,A,Me)[2].toFixed(2)}
                @update:value=${M(this,A,ui)}
              ></rgb-color-mixer-ui-input>
            </rgb-color-slider-item>`;break}if(!r)throw new Error(`Unknown slider mode: ${s}`);t.push(r)}return ne`
      <div ${be(this.rootEl)} class="mixer">
        <rgb-color-mixer-value
          class="input-value"
          value=${this.colorCss}
          @update:value=${M(this,A,Nl)}
        ></rgb-color-mixer-value>
        <rgb-color-mixer-ui-separator></rgb-color-mixer-ui-separator>
        ${this.noBlender?ne``:ne` <!-- Blender Slider -->
              <div class="blender">
                <rgb-color-mixer-blender
                  ${be(this.blenderEl)}
                  colorActive=${this._colorActive}
                  colorEnd=${this._colorEnd}
                  colorStart=${this._colorStart}
                  @update:coloractive=${M(this,A,zl)}
                  @update:value=${M(this,A,Fl)}
                ></rgb-color-mixer-blender>
              </div>
              <rgb-color-mixer-ui-separator></rgb-color-mixer-ui-separator>`}
        <div class="channels">${t}</div>
      </div>
    `}}A=new WeakSet,Cr=function(){const[e,t,s]=this._rgb;return[e*255,t*255,s*255]},ke=function(){const[e,t,s]=k(this,A,Cr);return[Math.round(e),Math.round(t),Math.round(s)]},Me=function(){return xs.hsl(k(this,A,Cr))},Ms=function(){const[e,t,s]=k(this,A,Me);return[Math.round(e*1e4)/1e4,Math.round(t*1e4)/1e4,Math.round(s*1e4)/1e4]},wl=function(){const[e,t,s]=k(this,A,ke),r=`rgb(0 ${t} ${s})`,i=`rgb(255 ${t} ${s})`;return[r,i]},Sl=function(){const[e,t,s]=k(this,A,ke),r=`rgb(${e} 0 ${s})`,i=`rgb(${e} 255 ${s})`;return[r,i]},El=function(){const[e,t,s]=k(this,A,ke),r=`rgb(${e} ${t} 0)`,i=`rgb(${e} ${t} 255)`;return[r,i]},Al=function(){const[e,t,s]=k(this,A,Me),r=`hsl(0 ${t.toFixed(4)} ${s.toFixed(4)})`,i=`hsl(360 ${t.toFixed(4)} ${s.toFixed(4)})`;return[r,i]},Rl=function(){const[e,t,s]=k(this,A,Me),r=`hsl(${e.toFixed(2)} 0 ${s.toFixed(4)})`,i=`hsl(${e.toFixed(2)} 100 ${s.toFixed(4)})`;return[r,i]},Cl=function(){const[e,t,s]=k(this,A,Me);return[...Array(11).keys()].map(r=>`hsl(${e.toFixed(2)} ${t.toFixed(4)} ${r*10})`)},Jt=function(){return Kr(this._rgb,"hex")},Pl=function(e){const t=Lt("update:value",{value:e},{bubbles:!1});this.dispatchEvent(t)},ni=function(e){const t=e.detail.value/255,[s,r,i]=this._rgb;this.setRgbNormalized([t,r,i])},oi=function(e){const t=e.detail.value/255,[s,r,i]=this._rgb;this.setRgbNormalized([s,t,i])},li=function(e){const t=e.detail.value/255,[s,r,i]=this._rgb;this.setRgbNormalized([s,r,t])},ci=function(e){const t=e.detail.value,[s,r,i]=k(this,A,Me),n=Ct.rgb([t,r,i]),o=jt(n);this.setRgbNormalized(o)},ai=function(e){const t=e.detail.value,[s,r,i]=k(this,A,Me),n=Ct.rgb([s,t,i]),o=jt(n);this.setRgbNormalized(o)},ui=function(e){const t=e.detail.value,[s,r,i]=k(this,A,Me),n=Ct.rgb([s,r,t]),o=jt(n);this.setRgbNormalized(o)},Tl=function(e){const[t,s,r]=k(this,A,ke);return`rgb(${e} ${s} ${r})`},Ml=function(e){const[t,s,r]=k(this,A,ke);return`rgb(${t} ${e} ${r})`},Ol=function(e){const[t,s,r]=k(this,A,ke);return`rgb(${t} ${s} ${e})`},Ll=function(e){const[t,s,r]=k(this,A,Ms);return`hsl(${e.toFixed(2)} ${s.toFixed(4)} ${r.toFixed(4)})`},Il=function(e){const[t,s,r]=k(this,A,Ms);return`hsl(${t.toFixed(2)} ${e.toFixed(4)} ${r.toFixed(4)})`},kl=function(e){const[t,s,r]=k(this,A,Ms);return`hsl(${t.toFixed(2)} ${s.toFixed(4)} ${e.toFixed(4)})`},Nl=function(e){const t=e.detail.value;this.setColor(t)},Fl=function(e){const t=e.detail.value;this.setColor(t)},zl=function(e){const t=e.detail.value;this._colorActive=t},j(fi,"properties",{_colorActive:{state:!0},_colorEnd:{state:!0},_colorStart:{state:!0},_rgb:{state:!0},channels:{type:String},format:{type:String},initialValue:{type:String},noBlender:{type:Boolean},value:{type:String,reflect:!0}}),j(fi,"styles",ze`
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

    .input-value {
      margin: 0 auto;
    }
  `);window.customElements.define("rgb-color-mixer-ui-field",Br);window.customElements.define("rgb-color-mixer-ui-icon",Ur);window.customElements.define("rgb-color-mixer-ui-icon-button",Vr);window.customElements.define("rgb-color-mixer-ui-input",Gr);window.customElements.define("rgb-color-mixer-ui-separator",Yr);window.customElements.define("rgb-color-mixer-ui-tool-tip",qr);window.customElements.define("rgb-color-mixer-blender",Zr);window.customElements.define("rgb-color-mixer-blender-stop",Jr);window.customElements.define("rgb-color-mixer-value",Qr);window.customElements.define("rgb-color-slider",ri);window.customElements.define("rgb-color-slider-item",ii);window.customElements.define("rgb-color-mixer",fi);const Eu={class:"app"},Au={class:"head"},Ru={class:"ml-2"},Cu=["initialValue"],Pu=["initialValue"],Tu=["initialValue"],Mu=["initialValue"],Ou=zc({__name:"App",setup(e){const t=hs("hotpink"),s=hs("black"),r=D0(),i=E0(r),n=Cs("mixer1"),o=Cs("mixer2"),l=Cs("mixer3"),c=Cs("mixer4");function d(f){s.value=f.detail.value}return ht(s,f=>{[n,o,l,c].map(h=>{h.value&&h.value.setColor(f)})}),ir(()=>{[n,o,l,c].map(f=>{f.value&&Ks(f.value,"update:value",d)})}),(f,h)=>(Ra(),Ta("div",Eu,[fe("div",Au,[fe("button",{onClick:h[0]||(h[0]=g=>ds(i)())},[fe("span",Ru,Dn(ds(r)?"Dark":"Light"),1)]),h[1]||(h[1]=fe("a",{href:"http://github.com/bennyschudel/rgb-color-mixer"},"Github",-1))]),h[2]||(h[2]=fe("h1",null,"<rgb-color-mixer>",-1)),fe("rgb-color-mixer",{ref_key:"mixer1",ref:n,initialValue:t.value,"onUpdate:value":d},null,40,Cu),h[3]||(h[3]=fe("h2",null,"RGB Only",-1)),h[4]||(h[4]=fe("code",null,'channels="rgb"',-1)),fe("rgb-color-mixer",{ref_key:"mixer2",ref:o,initialValue:t.value,channels:"rgb"},null,8,Pu),h[5]||(h[5]=fe("h2",null,"HSL Only",-1)),h[6]||(h[6]=fe("code",null,'channels="hsl"',-1)),fe("rgb-color-mixer",{ref_key:"mixer3",ref:l,initialValue:t.value,channels:"hsl"},null,8,Tu),h[7]||(h[7]=fe("h2",null,"No Blender",-1)),h[8]||(h[8]=fe("code",null,"noBlender",-1)),fe("rgb-color-mixer",{ref_key:"mixer4",ref:c,initialValue:t.value,noBlender:""},null,8,Mu),h[9]||(h[9]=fe("p",{class:"note"},[Fr("2025, by "),fe("a",{href:"https://twitter.com/bennyschudel",target:"_blank"},"@bennyschudel"),Fr(", MIT License")],-1))]))}}),Lu=(e,t)=>{const s=e.__vccOpts||e;for(const[r,i]of t)s[r]=i;return s},Iu=Lu(Ou,[["__scopeId","data-v-d1fc7cd8"]]);f0(Iu).mount("#app");
