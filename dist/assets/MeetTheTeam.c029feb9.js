var Bt=Object.defineProperty;var rt=Object.getOwnPropertySymbols;var Kt=Object.prototype.hasOwnProperty,Vt=Object.prototype.propertyIsEnumerable;var st=(i,t,e)=>t in i?Bt(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,z=(i,t)=>{for(var e in t||(t={}))Kt.call(t,e)&&st(i,e,t[e]);if(rt)for(var e of rt(t))Vt.call(t,e)&&st(i,e,t[e]);return i};import{z as w,w as zt,S as ot,i as at,s as ct,e as S,k as j,t as lt,a as h,c as U,d as y,f as ut,g as Y,K as W,A as M,n as ft,C as Ut,h as J,E as dt,N as Yt,y as Z,F as q,j as Wt,m as qt,r as N,o as Q,p as Nt,l as Gt,q as Ht,B as Ft,a6 as Xt,a7 as Jt}from"./vendor.7ae63dc5.js";import{d as ht}from"./index.bf895789.js";function Zt(i,t,e){return Math.max(t,Math.min(i,e))}const O={toVector(i,t){return i===void 0&&(i=t),Array.isArray(i)?i:[i,i]},add(i,t){return[i[0]+t[0],i[1]+t[1]]},sub(i,t){return[i[0]-t[0],i[1]-t[1]]},addTo(i,t){i[0]+=t[0],i[1]+=t[1]},subTo(i,t){i[0]-=t[0],i[1]-=t[1]}};function pt(i,t,e){return t===0||Math.abs(t)===1/0?Math.pow(i,e*5):i*t*e/(t+e*i)}function mt(i,t,e,n=.15){return n===0?Zt(i,t,e):i<t?-pt(t-i,e-t,n)+t:i>e?+pt(i-e,e-t,n)+e:i}function Qt(i,[t,e],[n,r]){const[[c,a],[s,o]]=i;return[mt(t,c,a,n),mt(e,s,o,r)]}function A(i,t,e){return t in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}function gt(i,t){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),e.push.apply(e,n)}return e}function C(i){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?gt(Object(e),!0).forEach(function(n){A(i,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):gt(Object(e)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(e,n))})}return i}const _t={pointer:{start:"down",change:"move",end:"up"},mouse:{start:"down",change:"move",end:"up"},touch:{start:"start",change:"move",end:"end"},gesture:{start:"start",change:"change",end:"end"}};function yt(i){return i?i[0].toUpperCase()+i.slice(1):""}function $t(i,t="",e=!1){const n=_t[i],r=n&&n[t]||t;return"on"+yt(i)+yt(r)+(e?"Capture":"")}function te(i,t=""){const e=_t[i],n=e&&e[t]||t;return i+n}function $(i){return"touches"in i}function ee(i){return Array.from(i.touches).filter(t=>{var e,n;return t.target===i.currentTarget||((e=i.currentTarget)===null||e===void 0||(n=e.contains)===null||n===void 0?void 0:n.call(e,t.target))})}function ie(i){return i.type==="touchend"?i.changedTouches:i.targetTouches}function bt(i){return $(i)?ie(i)[0]:i}function ne(i){return ee(i).map(t=>t.identifier)}function tt(i){const t=bt(i);return $(i)?t.identifier:t.pointerId}function vt(i){const t=bt(i);return[t.clientX,t.clientY]}function re(i){const t={};if("buttons"in i&&(t.buttons=i.buttons),"shiftKey"in i){const{shiftKey:e,altKey:n,metaKey:r,ctrlKey:c}=i;Object.assign(t,{shiftKey:e,altKey:n,metaKey:r,ctrlKey:c})}return t}function G(i,...t){return typeof i=="function"?i(...t):i}function se(){}function oe(...i){return i.length===0?se:i.length===1?i[0]:function(){let t;for(const e of i)t=e.apply(this,arguments)||t;return t}}function kt(i,t){return Object.assign({},t,i||{})}const ae=32;class ce{constructor(t,e,n){this.ctrl=t,this.args=e,this.key=n,this.state||(this.state={},this.computeValues([0,0]),this.computeInitial(),this.init&&this.init(),this.reset())}get state(){return this.ctrl.state[this.key]}set state(t){this.ctrl.state[this.key]=t}get shared(){return this.ctrl.state.shared}get eventStore(){return this.ctrl.gestureEventStores[this.key]}get timeoutStore(){return this.ctrl.gestureTimeoutStores[this.key]}get config(){return this.ctrl.config[this.key]}get sharedConfig(){return this.ctrl.config.shared}get handler(){return this.ctrl.handlers[this.key]}reset(){const{state:t,shared:e,ingKey:n,args:r}=this;e[n]=t._active=t.active=t._blocked=t._force=!1,t._step=[!1,!1],t.intentional=!1,t._movement=[0,0],t._distance=[0,0],t._delta=[0,0],t._bounds=[[-1/0,1/0],[-1/0,1/0]],t.args=r,t.axis=void 0,t.memo=void 0,t.elapsedTime=0,t.direction=[0,0],t.distance=[0,0],t.velocity=[0,0],t.movement=[0,0],t.delta=[0,0],t.timeStamp=0}start(t){const e=this.state,n=this.config;e._active||(this.reset(),this.computeInitial(),e._active=!0,e.target=t.target,e.currentTarget=t.currentTarget,e.lastOffset=n.from?G(n.from,e):e.offset,e.offset=e.lastOffset),e.startTime=e.timeStamp=t.timeStamp}computeValues(t){const e=this.state;e._values=t,e.values=this.config.transform(t)}computeInitial(){const t=this.state;t._initial=t._values,t.initial=t.values}compute(t){const{state:e,config:n,shared:r}=this;e.args=this.args;let c=0;if(t&&(e.event=t,n.preventDefault&&t.cancelable&&e.event.preventDefault(),e.type=t.type,r.touches=this.ctrl.pointerIds.size||this.ctrl.touchIds.size,r.locked=!!document.pointerLockElement,Object.assign(r,re(t)),r.down=r.pressed=r.buttons%2==1||r.touches>0,c=t.timeStamp-e.timeStamp,e.timeStamp=t.timeStamp,e.elapsedTime=e.timeStamp-e.startTime),e._active){const b=e._delta.map(Math.abs);O.addTo(e._distance,b)}const[a,s]=e._movement,[o,l]=n.threshold,{_step:u,values:p}=e;if(n.hasCustomTransform?(u[0]===!1&&(u[0]=Math.abs(a)>=o&&p[0]),u[1]===!1&&(u[1]=Math.abs(s)>=l&&p[1])):(u[0]===!1&&(u[0]=Math.abs(a)>=o&&Math.sign(a)*o),u[1]===!1&&(u[1]=Math.abs(s)>=l&&Math.sign(s)*l)),e.intentional=u[0]!==!1||u[1]!==!1,!e.intentional)return;const d=[0,0];if(n.hasCustomTransform){const[b,m]=p;d[0]=u[0]!==!1?b-u[0]:0,d[1]=u[1]!==!1?m-u[1]:0}else d[0]=u[0]!==!1?a-u[0]:0,d[1]=u[1]!==!1?s-u[1]:0;if(this.intent&&this.intent(d),(e._active&&!e._blocked||e.active)&&(e.first=e._active&&!e.active,e.last=!e._active&&e.active,e.active=r[this.ingKey]=e._active,t)){e.first&&("bounds"in n&&(e._bounds=G(n.bounds,e)),this.setup&&this.setup()),e.movement=d;const b=e.offset;if(this.computeOffset(),!e.last||c>ae){e.delta=O.sub(e.offset,b);const m=e.delta.map(Math.abs);O.addTo(e.distance,m),e.direction=e.delta.map(Math.sign),!e.first&&c>0&&(e.velocity=[m[0]/c,m[1]/c])}}const f=e._active?n.rubberband||[0,0]:[0,0];e.offset=Qt(e._bounds,e.offset,f),this.computeMovement()}emit(){const t=this.state,e=this.shared,n=this.config;if(t._active||this.clean(),(t._blocked||!t.intentional)&&!t._force&&!n.triggerAllEvents)return;const r=this.handler(C(C(C({},e),t),{},{[this.aliasKey]:t.values}));r!==void 0&&(t.memo=r)}clean(){this.eventStore.clean(),this.timeoutStore.clean()}}function le([i,t]){const e=Math.abs(i)-Math.abs(t);if(e>0)return"x";if(e<0)return"y"}function ue(i,t){switch(t){case"x":i[1]=0;break;case"y":i[0]=0;break}}class fe extends ce{constructor(...t){super(...t);A(this,"aliasKey","xy")}reset(){super.reset(),this.state.axis=void 0}init(){this.state.offset=[0,0],this.state.lastOffset=[0,0]}computeOffset(){this.state.offset=O.add(this.state.lastOffset,this.state.movement)}computeMovement(){this.state.movement=O.sub(this.state.offset,this.state.lastOffset)}intent(t){this.state.axis=this.state.axis||le(t),this.state._blocked=(this.config.lockDirection||!!this.config.axis)&&!this.state.axis||!!this.config.axis&&this.config.axis!==this.state.axis,!this.state._blocked&&(this.config.axis||this.config.lockDirection)&&ue(t,this.state.axis)}}const de=i=>i,wt=.15,St={enabled(i=!0){return i},preventDefault(i=!1){return i},triggerAllEvents(i=!1){return i},rubberband(i=0){switch(i){case!0:return[wt,wt];case!1:return[0,0];default:return O.toVector(i)}},from(i){if(typeof i=="function")return i;if(i!=null)return O.toVector(i)},transform(i,t,e){const n=i||e.shared.transform;return this.hasCustomTransform=!!n,n||de},threshold(i){return O.toVector(i,0)}},B=C(C({},St),{},{axis(i,t,{axis:e}){if(this.lockDirection=e==="lock",!this.lockDirection)return e},bounds(i={}){if(typeof i=="function")return c=>B.bounds(i(c));if("current"in i)return()=>i.current;if(typeof HTMLElement=="function"&&i instanceof HTMLElement)return i;const{left:t=-1/0,right:e=1/0,top:n=-1/0,bottom:r=1/0}=i;return[[t,e],[n,r]]}}),H=10,Ct={ArrowRight:(i=1)=>[H*i,0],ArrowLeft:(i=1)=>[-H*i,0],ArrowUp:(i=1)=>[0,-H*i],ArrowDown:(i=1)=>[0,H*i]};class he extends fe{constructor(...t){super(...t);A(this,"ingKey","dragging")}reset(){super.reset();const t=this.state;t._pointerId=void 0,t._pointerActive=!1,t._keyboardActive=!1,t._preventScroll=!1,t._delayed=!1,t.swipe=[0,0],t.tap=!1,t.canceled=!1,t.cancel=this.cancel.bind(this)}setup(){const t=this.state;if(t._bounds instanceof HTMLElement){const e=t._bounds.getBoundingClientRect(),n=t.currentTarget.getBoundingClientRect(),r={left:e.left-n.left+t.offset[0],right:e.right-n.right+t.offset[0],top:e.top-n.top+t.offset[1],bottom:e.bottom-n.bottom+t.offset[1]};t._bounds=B.bounds(r)}}cancel(){const t=this.state;t.canceled||(t.canceled=!0,t._active=!1,setTimeout(()=>{this.compute(),this.emit()},0))}setActive(){this.state._active=this.state._pointerActive||this.state._keyboardActive}clean(){this.pointerClean(),this.state._pointerActive=!1,this.state._keyboardActive=!1,super.clean()}pointerDown(t){const e=this.config,n=this.state;t.buttons!=null&&(Array.isArray(e.pointerButtons)?!e.pointerButtons.includes(t.buttons):e.pointerButtons!==-1&&e.pointerButtons!==t.buttons)||(this.ctrl.setEventIds(t),e.pointerCapture&&t.target.setPointerCapture(t.pointerId),!n._pointerActive&&(this.start(t),this.setupPointer(t),n._pointerId=tt(t),n._pointerActive=!0,this.computeValues(vt(t)),this.computeInitial(),e.preventScroll?this.setupScrollPrevention(t):e.delay>0?this.setupDelayTrigger(t):this.startPointerDrag(t)))}startPointerDrag(t){const e=this.state;e._active=!0,e._preventScroll=!0,e._delayed=!1,this.compute(t),this.emit()}pointerMove(t){const e=this.state,n=this.config;if(!e._pointerActive||e.type===t.type&&t.timeStamp===e.timeStamp)return;const r=tt(t);if(e._pointerId&&r!==e._pointerId)return;const c=vt(t);if(document.pointerLockElement===t.target?e._delta=[t.movementX,t.movementY]:(e._delta=O.sub(c,e._values),this.computeValues(c)),O.addTo(e._movement,e._delta),this.compute(t),e._delayed){this.timeoutStore.remove("dragDelay"),e.active=!1,this.startPointerDrag(t);return}if(n.preventScroll&&!e._preventScroll)if(e.axis)if(e.axis===n.preventScrollAxis||n.preventScrollAxis==="xy"){e._active=!1,this.clean();return}else{this.timeoutStore.remove("startPointerDrag"),this.startPointerDrag(t);return}else return;this.emit()}pointerUp(t){this.ctrl.setEventIds(t);try{this.config.pointerCapture&&t.target.hasPointerCapture(t.pointerId)&&t.target.releasePointerCapture(t.pointerId)}catch{}const e=this.state,n=this.config;if(!e._pointerActive)return;const r=tt(t);if(e._pointerId&&r!==e._pointerId)return;this.state._pointerActive=!1,this.setActive(),this.compute(t);const[c,a]=e._distance;if(e.tap=c<=3&&a<=3,e.tap&&n.filterTaps)e._force=!0;else{const[s,o]=e.direction,[l,u]=e.velocity,[p,d]=e.movement,[f,b]=n.swipe.velocity,[m,E]=n.swipe.distance,L=n.swipe.duration;e.elapsedTime<L&&(Math.abs(l)>f&&Math.abs(p)>m&&(e.swipe[0]=s),Math.abs(u)>b&&Math.abs(d)>E&&(e.swipe[1]=o))}this.emit()}pointerClick(t){this.state.tap||(t.preventDefault(),t.stopPropagation())}setupPointer(t){const e=this.config;let n=e.device;e.pointerLock&&t.currentTarget.requestPointerLock(),e.pointerCapture||(this.eventStore.add(this.sharedConfig.window,n,"change",this.pointerMove.bind(this)),this.eventStore.add(this.sharedConfig.window,n,"end",this.pointerUp.bind(this)))}pointerClean(){this.config.pointerLock&&document.pointerLockElement===this.state.currentTarget&&document.exitPointerLock()}preventScroll(t){this.state._preventScroll&&t.cancelable&&t.preventDefault()}setupScrollPrevention(t){pe(t),this.eventStore.add(this.sharedConfig.window,"touch","change",this.preventScroll.bind(this),{passive:!1}),this.eventStore.add(this.sharedConfig.window,"touch","end",this.clean.bind(this),{passive:!1}),this.eventStore.add(this.sharedConfig.window,"touch","cancel",this.clean.bind(this),{passive:!1}),this.timeoutStore.add("startPointerDrag",this.startPointerDrag.bind(this),this.config.preventScroll,t)}setupDelayTrigger(t){this.state._delayed=!0,this.timeoutStore.add("dragDelay",this.startPointerDrag.bind(this),this.config.delay,t)}keyDown(t){const e=Ct[t.key];if(e){const n=this.state,r=t.shiftKey?10:t.altKey?.1:1;n._delta=e(r),this.start(t),n._keyboardActive=!0,O.addTo(n._movement,n._delta),this.compute(t),this.emit()}}keyUp(t){t.key in Ct&&(this.state._keyboardActive=!1,this.setActive(),this.compute(t),this.emit())}bind(t){const e=this.config.device;t(e,"start",this.pointerDown.bind(this)),this.config.pointerCapture&&(t(e,"change",this.pointerMove.bind(this)),t(e,"end",this.pointerUp.bind(this)),t(e,"cancel",this.pointerUp.bind(this))),t("key","down",this.keyDown.bind(this)),t("key","up",this.keyUp.bind(this)),this.config.filterTaps&&t("click","",this.pointerClick.bind(this),{capture:!0})}}function pe(i){"persist"in i&&typeof i.persist=="function"&&i.persist()}const K=typeof window!="undefined"&&window.document&&window.document.createElement;function Et(){return K&&"ontouchstart"in window}function me(){return Et()||K&&window.navigator.maxTouchPoints>1}function ge(){return K&&"onpointerdown"in window}function _e(){return K&&"exitPointerLock"in window.document}function ye(){try{return"constructor"in GestureEvent}catch{return!1}}const P={isBrowser:K,gesture:ye(),touch:Et(),touchscreen:me(),pointer:ge(),pointerLock:_e()},be=250,ve=180,ke=.5,we=50,Se=250,Ce=C(C({},B),{},{pointerLock(i,t,{pointer:{lock:e=!1,touch:n=!1}={}}){return this.useTouch=P.touch&&n,P.pointerLock&&e},device(i,t){return this.useTouch?"touch":this.pointerLock?"mouse":P.pointer?"pointer":P.touch?"touch":"mouse"},preventScroll(i=!1,t,{preventScrollAxis:e="y"}){return e&&(this.preventScrollAxis=e),P.touchscreen?typeof i=="number"?i:i?be:!1:!1},pointerCapture(i,t,{pointer:{capture:e=!0,buttons:n=1}={}}){return this.pointerButtons=n,!this.pointerLock&&this.device==="pointer"&&e},threshold(i,t,{filterTaps:e=!1,axis:n=void 0}){const r=O.toVector(i,e?3:n?1:0);return this.filterTaps=e,r},swipe({velocity:i=ke,distance:t=we,duration:e=Se}={}){return{velocity:this.transform(O.toVector(i)),distance:this.transform(O.toVector(t)),duration:e}},delay(i=0){switch(i){case!0:return ve;case!1:return 0;default:return i}}});C(C({},St),{},{useTouch(i,t,{pointer:{touch:e=!1}={}}){return P.touch&&e},device(i,t,e){if(e.shared.target&&!P.touch&&P.gesture)return"gesture";if(this.useTouch)return"touch";if(P.touchscreen){if(P.pointer)return"pointer";if(P.touch)return"touch"}},bounds(i,t,{scaleBounds:e={},angleBounds:n={}}){const r=a=>{const s=kt(G(e,a),{min:-1/0,max:1/0});return[s.min,s.max]},c=a=>{const s=kt(G(n,a),{min:-1/0,max:1/0});return[s.min,s.max]};return typeof e!="function"&&typeof n!="function"?[r(),c()]:a=>[r(a),c(a)]},threshold(i,t,e){return this.lockDirection=e.axis==="lock",O.toVector(i,this.lockDirection?[.1,3]:0)}});C(C({},B),{},{mouseOnly:(i=!0)=>i});C(C({},B),{},{mouseOnly:(i=!0)=>i});const Ot=new Map,et=new Map;function Ee(i){Ot.set(i.key,i.engine),et.set(i.key,i.resolver)}const Oe={key:"drag",engine:he,resolver:Ce};function Te(i,t){if(i==null)return{};var e={},n=Object.keys(i),r,c;for(c=0;c<n.length;c++)r=n[c],!(t.indexOf(r)>=0)&&(e[r]=i[r]);return e}function Ae(i,t){if(i==null)return{};var e=Te(i,t),n,r;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(i);for(r=0;r<c.length;r++)n=c[r],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,n)||(e[n]=i[n]))}return e}const Pe={target(i){if(i)return()=>"current"in i?i.current:i},enabled(i=!0){return i},window(i=P.isBrowser?window:void 0){return i},eventOptions({passive:i=!0,capture:t=!1}={}){return{passive:i,capture:t}},transform(i){return i}},xe=["target","eventOptions","window","enabled","transform"];function F(i={},t){const e={};for(const[n,r]of Object.entries(t))switch(typeof r){case"function":e[n]=r.call(e,i[n],n,i);break;case"object":e[n]=F(i[n],r);break;case"boolean":r&&(e[n]=i[n]);break}return e}function De(i,t){const e=i,{target:n,eventOptions:r,window:c,enabled:a,transform:s}=e,o=Ae(e,xe),l={shared:F({target:n,eventOptions:r,window:c,enabled:a,transform:s},Pe)};if(t){const u=et.get(t);l[t]=F(C({shared:l.shared},o),u)}else for(const u in o){const p=et.get(u);p&&(l[u]=F(C({shared:l.shared},o[u]),p))}return l}class Tt{constructor(t){A(this,"_listeners",[]),this._ctrl=t}add(t,e,n,r,c){const a=te(e,n),s=C(C({},this._ctrl.config.shared.eventOptions),c);t.addEventListener(a,r,s),this._listeners.push(()=>t.removeEventListener(a,r,s))}clean(){this._listeners.forEach(t=>t()),this._listeners=[]}}class Ie{constructor(){A(this,"_timeouts",new Map)}add(t,e,n=140,...r){this.remove(t),this._timeouts.set(t,window.setTimeout(e,n,...r))}remove(t){const e=this._timeouts.get(t);e&&window.clearTimeout(e)}clean(){this._timeouts.forEach(t=>void window.clearTimeout(t)),this._timeouts.clear()}}class je{constructor(t){A(this,"gestures",new Set),A(this,"_targetEventStore",new Tt(this)),A(this,"gestureEventStores",{}),A(this,"gestureTimeoutStores",{}),A(this,"handlers",{}),A(this,"config",{}),A(this,"pointerIds",new Set),A(this,"touchIds",new Set),A(this,"state",{shared:{shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1}}),Le(this,t)}setEventIds(t){$(t)?this.touchIds=new Set(ne(t)):"pointerId"in t&&(t.type==="pointerup"||t.type==="pointercancel"?this.pointerIds.delete(t.pointerId):t.type==="pointerdown"&&this.pointerIds.add(t.pointerId))}applyHandlers(t,e){this.handlers=t,this.nativeHandlers=e}applyConfig(t,e){this.config=De(t,e)}clean(){this._targetEventStore.clean();for(const t of this.gestures)this.gestureEventStores[t].clean(),this.gestureTimeoutStores[t].clean()}effect(){return this.config.shared.target&&this.bind(),()=>this._targetEventStore.clean()}bind(...t){const e=this.config.shared,n=e.eventOptions,r={};let c;if(e.target&&(c=e.target(),!c))return;const a=Me(r,n,!!c);if(e.enabled){for(const s of this.gestures)if(this.config[s].enabled){const o=Ot.get(s);new o(this,t,s).bind(a)}for(const s in this.nativeHandlers)a(s,"",o=>this.nativeHandlers[s](C(C({},this.state.shared),{},{event:o,args:t})),void 0,!0)}for(const s in r)r[s]=oe(...r[s]);if(!c)return r;for(const s in r){let o=s.substr(2).toLowerCase();const l=!!~o.indexOf("capture"),u=!!~o.indexOf("passive");(l||u)&&(o=o.replace(/capture|passive/g,"")),this._targetEventStore.add(c,o,"",r[s],{capture:l,passive:u})}}}function R(i,t){i.gestures.add(t),i.gestureEventStores[t]=new Tt(i),i.gestureTimeoutStores[t]=new Ie}function Le(i,t){t.drag&&R(i,"drag"),t.wheel&&R(i,"wheel"),t.scroll&&R(i,"scroll"),t.move&&R(i,"move"),t.pinch&&R(i,"pinch"),t.hover&&R(i,"hover")}const Me=(i,t,e)=>(n,r,c,a={},s=!1)=>{var o,l;const u=(o=a.capture)!==null&&o!==void 0?o:t.capture,p=(l=a.passive)!==null&&l!==void 0?l:t.passive;let d=s?n:$t(n,r,u);e&&p&&(d+="Passive"),i[d]=i[d]||[],i[d].push(c)};function Re(i,t,e){return t in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}function At(i,t){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),e.push.apply(e,n)}return e}function Pt(i){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?At(Object(e),!0).forEach(function(n){Re(i,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):At(Object(e)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(e,n))})}return i}const xt=function(t,e,n,r,c){this._gestureKey=r,this._ctrl=new je(e),this._ctrl.applyHandlers(e,c),this._ctrl.applyConfig(Pt(Pt({},n),{},{target:t}),this._gestureKey),this._ctrl.effect()};xt.prototype.destroy=function(){this._ctrl.clean()};const Be=function(t,e,n={}){return Ee(Oe),new xt(t,{drag:e},n,"drag")},Ke=()=>{const i={introAnimation:w.timeline({paused:!0}),exitedArr:[],currentStack:[5,4,3,2,1,0],shouldReturn:!1,outline:null,cardToExit:null,shouldAnimate:!0},t=z({},i),{subscribe:e,set:n,update:r}=zt(i);return z({subscribe:e,set:n,update:r},{returnCard(a){r(s=>(s.exitedArr=s.exitedArr.filter(o=>o!==a),s.currentStack=[...s.currentStack,a],s))},init(a){r(s=>(s.outline=a,s))},exit(a){r(s=>(s.currentStack=s.currentStack.filter(o=>o!==a),s.exitedArr=[...s.exitedArr,a],s))},detectCollision(a){const s=a.getBoundingClientRect(),o=i.outline.getBoundingClientRect();return!(s.left<o.right-100)},introAnim(){r(a=>(a.introAnimation.to(".meet-the-team-card",{y:0,delay:1.2,stagger:-.2,duration:.5}),a.introAnimation.progress(1),a))},reset(){r(a=>(a.shouldReturn=!0,a))},getExitLocation(a,s){const o=i.outline.getBoundingClientRect(),l=a.getBoundingClientRect();return ht(o.x,l.x,o.y,l.y)},manualExit(a,s){r(o=>(o.cardToExit=o.currentStack[o.currentStack.length-1],o))},returnAll(){r(s=>(s.shouldAnimate=!1,s.shouldReturn=!0,s));let a=0;w.to(".meet-the-team-card",{x:0,stagger:{amount:.5,from:6,onStart:function(){w.set(this.targets()[0],{zIndex:a}),a+=1}},delay:1.5,onComplete:function(){r(s=>(s=z({},t),s))}})}})},D=Ke();const{window:Ve}=Yt;function Dt(i){let t,e,n,r,c=i[0].description.email+"",a,s,o=i[0].description.bio&&It(i);return{c(){t=S("div"),e=S("div"),o&&o.c(),n=j(),r=S("a"),a=lt(c),h(r,"href",s="mailto:"+i[0].description.email),h(r,"class","email svelte-7jb4c3"),h(e,"class","bio-container svelte-7jb4c3"),h(t,"class","description-container svelte-7jb4c3")},m(l,u){U(l,t,u),y(t,e),o&&o.m(e,null),y(e,n),y(e,r),y(r,a),i[14](r)},p(l,u){l[0].description.bio?o?o.p(l,u):(o=It(l),o.c(),o.m(e,n)):o&&(o.d(1),o=null),u&1&&c!==(c=l[0].description.email+"")&&ut(a,c),u&1&&s!==(s="mailto:"+l[0].description.email)&&h(r,"href",s)},d(l){l&&Y(t),o&&o.d(),i[14](null)}}}function It(i){let t,e=i[0].description.bio+"",n;return{c(){t=S("p"),n=lt(e),h(t,"class","bio pg svelte-7jb4c3")},m(r,c){U(r,t,c),y(t,n)},p(r,c){c&1&&e!==(e=r[0].description.bio+"")&&ut(n,e)},d(r){r&&Y(t)}}}function ze(i){let t,e,n,r,c,a,s,o,l,u,p,d=i[0].description.email&&Dt(i);return{c(){t=S("div"),e=S("div"),n=S("img"),c=j(),a=S("div"),d&&d.c(),s=j(),o=S("img"),h(n,"draggable","false"),W(n.src,r=i[0].front)||h(n,"src",r),h(n,"alt",""),h(n,"class","svelte-7jb4c3"),h(e,"draggable","false"),h(e,"class","image-container front-container svelte-7jb4c3"),h(o,"draggable","false"),W(o.src,l=i[0].back)||h(o,"src",l),h(o,"alt",""),h(o,"class","svelte-7jb4c3"),h(a,"draggable","false"),h(a,"class","image-container back-container svelte-7jb4c3"),h(t,"draggable","false"),h(t,"class","card-container meet-the-team-card svelte-7jb4c3")},m(f,b){U(f,t,b),y(t,e),y(e,n),y(t,c),y(t,a),d&&d.m(a,null),y(a,s),y(a,o),i[17](t),u||(p=[M(Ve,"resize",i[13]),M(n,"dragstart",Ue),M(o,"dragstart",Ye),M(t,"mouseover",i[15]),M(t,"mouseleave",i[16])],u=!0)},p(f,[b]){b&1&&!W(n.src,r=f[0].front)&&h(n,"src",r),f[0].description.email?d?d.p(f,b):(d=Dt(f),d.c(),d.m(a,s)):d&&(d.d(1),d=null),b&1&&!W(o.src,l=f[0].back)&&h(o,"src",l)},i:ft,o:ft,d(f){f&&Y(t),d&&d.d(),i[17](null),u=!1,Ut(p)}}}const Ue=i=>{i.preventDefault()},Ye=i=>{i.preventDefault()};function We(i,t,e){let n,r,c,a,s,o;J(i,D,_=>e(12,o=_));let{index:l}=t,{image:u}=t,{stack:p}=t,{outline:d}=t,f,b,m=w.timeline({paused:!0}),E=!1;async function L(){e(4,E=!1),D.returnCard(l),await Z(),f&&w.to(f,{x:0})}function x(){const _=d.getBoundingClientRect(),I=p.getBoundingClientRect();return ht(_.x,I.x,_.y,I.y)}async function g(_){e(4,E=!0);const I=x();D.exit(l),await Z(),w.to(f,{x:_?-900:-I})}dt(()=>{console.log(u),m.to(f,{rotateY:-180}),new Be(f,async({xy:_,active:I,offset:it,tap:nt,swipe:Rt})=>{if(c){if(nt&&!w.isTweening(f)&&E)L(),await Z();else if(nt&&!E)m.reversed()?m.play():m.reverse();else if(!E)if(I)w.set(f,{x:it[0],zIndex:10}),w.killTweensOf(f,"x");else if(window.innerWidth>=550&&!D.detectCollision(f)&&!I){g();return}else window.innerWidth<=550&&Rt[0]===-1?g(!0):w.to(f,{x:0})}},{eventOptions:{capture:!1,passive:!1},filterTaps:!0,from(){return[w.getProperty(f,"x"),0]}}),w.set(f,{y:"-100vh",rotateZ:l*(Math.random()*2)})});const X=()=>{E&&w.set(f,{x:-x()})};function v(_){q[_?"unshift":"push"](()=>{b=_,e(3,b)})}const T=_=>{!E&&!n&&w.to(f,{scale:1.1})},k=_=>{w.to(f,{scale:1})};function V(_){q[_?"unshift":"push"](()=>{f=_,e(1,f)})}return i.$$set=_=>{"index"in _&&e(6,l=_.index),"image"in _&&e(0,u=_.image),"stack"in _&&e(7,p=_.stack),"outline"in _&&e(8,d=_.outline)},i.$$.update=()=>{i.$$.dirty&4096&&e(2,{shouldReturn:n,cardToExit:r,shouldAnimate:c}=o,n,(e(11,r),e(12,o))),i.$$.dirty&4160&&e(9,a=o.currentStack.indexOf(l)),i.$$.dirty&2114&&r===l&&(g(window.innerWidth<=550),w.set(f,{zIndex:10})),i.$$.dirty&514&&f&&a>=0&&w.set(f,{zIndex:a}),i.$$.dirty&4160&&e(10,s=o.exitedArr.indexOf(l)),i.$$.dirty&1538&&(s>=0&&f?w.to(f,{zIndex:s,delay:.3}):w.to(f,{zIndex:a})),i.$$.dirty&4&&n&&e(4,E=!1)},[u,f,n,b,E,x,l,p,d,a,s,r,o,X,v,T,k,V]}class qe extends ot{constructor(t){super();at(this,t,We,ze,ct,{index:6,image:0,stack:7,outline:8})}}const jt=[{front:"https://res.cloudinary.com/dt4xntymn/image/upload/v1633335279/mainSite/meet%20the%20team/Cards/front/Omar_Card_frdbxy.jpg",back:"https://res.cloudinary.com/dt4xntymn/image/upload/v1642112370/mainSite/meet%20the%20team/Cards/back/Omar_Card_Back-Recovered_vflfbh.jpg",description:{email:"omar@apeldesign.com",bio:"Omar Santillan is the Senior Designer at Amit Apel Design Inc since 2010. He has about 14 years of design experience. By adopting the principles of Apel Design and combining them with his own aesthetic, he has a unique take on the design process."}},{front:"https://res.cloudinary.com/dt4xntymn/image/upload/v1633335279/mainSite/meet%20the%20team/Cards/front/Luke_Card_dgfcrg.jpg",back:"https://res.cloudinary.com/dt4xntymn/image/upload/v1642112370/mainSite/meet%20the%20team/Cards/back/Luke_Card_Back-Recovered_jl8aqz.jpg",description:{email:"luke@apeldesign.com",bio:"Luke is the senior project coordinator at Apel Design.  His passion to connect people to the art of living branches off into all aspects of the design process. With his background in architecture and engineering, along with his experience across this broad range of projects, he closely analyzes and looks at all aspects of any project parallel to the beautiful end design goal of Amit."}},{front:"https://res.cloudinary.com/dt4xntymn/image/upload/v1633335279/mainSite/meet%20the%20team/Cards/front/Mike_Card_yyevct.jpg",back:"https://res.cloudinary.com/dt4xntymn/image/upload/v1642112370/mainSite/meet%20the%20team/Cards/back/Mike_Card_Back-Recovered_s7gfu8.jpg",description:{email:"apeldesign@apeldesign.com",bio:"What does a licensed architect, a general contractor, a registered nurse and a licensed realtor have in common? Some may say nothing but Mike holds all of those \u201Cso-called\u201D labels. Simultaneously working in healthcare as well as architecture during the past several decades has given Mike a unique perspective. As one of only a handful of nurse-architects in the country, he combines his vision of architecture with his clinical background."}},{front:"https://res.cloudinary.com/dt4xntymn/image/upload/v1633335279/mainSite/meet%20the%20team/Cards/front/Elchin_Card_hhfjc2.jpg",back:"https://res.cloudinary.com/dt4xntymn/image/upload/v1642112370/mainSite/meet%20the%20team/Cards/back/Elchin_Card_Back_Recovered_t9jh9k.jpg",description:{email:"accounting@apeldesign.com",bio:"Controller at Amit Apel Design, Inc with a Bachelor's degree in Finance (Summa Cum Laude) and Law Degree combining his knowledge in two different fields to make the company more productive and customers happier. Currently, Elchin is getting his LLM degree in Alternative Dispute Resolution at Pepperdine Caruso School of Law."}},{front:"https://res.cloudinary.com/dt4xntymn/image/upload/v1633335279/mainSite/meet%20the%20team/Cards/front/Yak_Card_c55nzc.jpg",back:"https://res.cloudinary.com/dt4xntymn/image/upload/v1642112370/mainSite/meet%20the%20team/Cards/back/Yak_Card_Back-Recovered_eww5bu.jpg",description:{email:"apeldesign@apeldesign.com"}},{front:"https://res.cloudinary.com/dt4xntymn/image/upload/v1637784455/mainSite/meet%20the%20team/Cards/front/Joker_Card_pwqclu.jpg",back:"https://res.cloudinary.com/dt4xntymn/image/upload/v1637784449/mainSite/meet%20the%20team/Cards/back/Joker_Card_Back_x8eonc.jpg",description:"JOKER"}];function Lt(i,t,e){const n=i.slice();return n[12]=t[e],n[14]=e,n}function Mt(i){let t,e;return t=new qe({props:{observer:i[4],stack:i[1],outline:i[0],dropPosition:i[3],shouldReturn:!1,index:i[14],image:i[12],rotate:i[2].includes(i[14])?i[14]*2:0}}),{c(){Wt(t.$$.fragment)},m(n,r){qt(t,n,r),e=!0},p(n,r){const c={};r&2&&(c.stack=n[1]),r&1&&(c.outline=n[0]),t.$set(c)},i(n){e||(N(t.$$.fragment,n),e=!0)},o(n){Q(t.$$.fragment,n),e=!1},d(n){Nt(t,n)}}}function Ne(i){let t,e,n,r,c,a,s,o,l,u,p,d,f,b,m,E,L,x=jt,g=[];for(let v=0;v<x.length;v+=1)g[v]=Mt(Lt(i,x,v));const X=v=>Q(g[v],1,1,()=>{g[v]=null});return{c(){t=S("div"),e=S("div"),n=S("div"),r=S("div"),c=S("div"),a=j(),s=S("div"),o=j(),l=S("div"),l.innerHTML='<img src="https://res.cloudinary.com/dt4xntymn/image/upload/v1638853734/mainSite/meet%20the%20team/cardArrow_lz4ufg.png" alt="" class="svelte-14voy1k"/>',u=j(),p=S("div"),d=S("ul");for(let v=0;v<g.length;v+=1)g[v].c();f=j(),b=S("div"),h(c,"class","three-by-two aspect-ratio svelte-14voy1k"),h(s,"class","card-outline svelte-14voy1k"),h(r,"class","card-outline aspect-ratio svelte-14voy1k"),h(l,"class","arrow-image-container svelte-14voy1k"),h(d,"class","card-wrapper svelte-14voy1k"),h(b,"class","three-by-two aspect-ratio svelte-14voy1k"),h(p,"draggable","false"),h(p,"class","aspect-ratio svelte-14voy1k"),h(n,"class","card-layout-container svelte-14voy1k"),h(e,"class","container svelte-14voy1k"),h(t,"class","wrapper svelte-14voy1k")},m(v,T){U(v,t,T),y(t,e),y(e,n),y(n,r),y(r,c),y(r,a),y(r,s),i[8](s),y(n,o),y(n,l),y(n,u),y(n,p),y(p,d);for(let k=0;k<g.length;k+=1)g[k].m(d,null);i[10](d),y(p,f),y(p,b),m=!0,E||(L=M(l,"click",i[9]),E=!0)},p(v,[T]){if(T&31){x=jt;let k;for(k=0;k<x.length;k+=1){const V=Lt(v,x,k);g[k]?(g[k].p(V,T),N(g[k],1)):(g[k]=Mt(V),g[k].c(),N(g[k],1),g[k].m(d,null))}for(Gt(),k=x.length;k<g.length;k+=1)X(k);Ht()}},i(v){if(!m){for(let T=0;T<x.length;T+=1)N(g[T]);m=!0}},o(v){g=g.filter(Boolean);for(let T=0;T<g.length;T+=1)Q(g[T]);m=!1},d(v){v&&Y(t),i[8](null),Ft(g,v),i[10](null),E=!1,L()}}}function Ge(i,t,e){let n,r,c;J(i,Xt,m=>e(11,r=m)),J(i,D,m=>e(7,c=m));const a=[0,3,2,4];let s,o,l,u,p;dt(()=>{r(),D.init(s),D.introAnim()}),Jt(()=>{D.init(s)});function d(m){q[m?"unshift":"push"](()=>{s=m,e(0,s)})}const f=()=>{D.manualExit()};function b(m){q[m?"unshift":"push"](()=>{o=m,e(1,o)})}return i.$$.update=()=>{i.$$.dirty&128&&e(6,{currentStack:n}=c,n),i.$$.dirty&64&&e(5,u=n.length),i.$$.dirty&32&&u===0&&D.returnAll()},[s,o,a,l,p,u,n,c,d,f,b]}class Je extends ot{constructor(t){super();at(this,t,Ge,Ne,ct,{})}}export{Je as default};
