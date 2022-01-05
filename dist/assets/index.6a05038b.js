var N=Object.defineProperty;var D=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var S=(s,e,t)=>e in s?N(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,A=(s,e)=>{for(var t in e||(e={}))Q.call(e,t)&&S(s,t,e[t]);if(D)for(var t of D(e))R.call(e,t)&&S(s,t,e[t]);return s};import{A as V,S as C,i as M,s as L,e as h,g as T,f as B,h as g,j as y,k as v,r as F,l as b,B as j,n as E,C as H,D as Z,p as W,E as x,o as Y,F as w,G as $,t as k,a as I,v as ee,w as te,x as z,c as ne,m as le,d as re,y as se,z as ae}from"./vendor.e1944527.js";import{m as ie,p as G}from"./marqueeHandlerStore.6791448c.js";import{g as oe}from"./store.24c541cf.js";import{g as O}from"./index.e6e77149.js";import{c as ue}from"./utils.f73a3604.js";const ce=()=>{const s={ele:null,eleA:null,marquee:null,animationDefaults:{duration:.6,ease:"expo"}},{subscribe:e,set:t,update:n}=V(s);return A({subscribe:e,set:t,update:n},{init(o,l,r,d){n(a=>(a.ele=o,a.eleA=l,a.marquee=r,a.marqueeInner=d,a))},mouseEnter(o){n(l=>{const r=this.findClosestEdge(o,l.ele);return O.timeline({defaults:l.animationDefaults}).set(l.marquee,{y:r==="top"?"-101%":"101%"},0).to([l.marquee,l.marqueeInner],{y:"0%"},0),l})},mouseLeave(o){n(l=>{const r=this.findClosestEdge(o,l.ele);return O.timeline({defaults:l.animationDefaults}).to(l.marquee,{y:r==="top"?"-101%":"101%"},0).to(l.marqueeInner,{y:r==="top"?"101%":"-101%"},0),l})},findClosestEdge(o,l){const r=o.pageX-l.offsetLeft,d=o.pageY-l.offsetTop;return ue(r,d,l.clientWidth,l.clientHeight)}})};function P(s,e,t){const n=s.slice();return n[13]=e[t],n}function U(s){let e,t=s[13]+"",n,i,o;return{c(){e=h("span"),n=T(t),i=B(),o=h("div"),g(e,"class","svelte-1n60fj0"),g(o,"class","marquee__img svelte-1n60fj0")},m(l,r){y(l,e,r),v(e,n),y(l,i,r),y(l,o,r)},p(l,r){r&1&&t!==(t=l[13]+"")&&F(n,t)},d(l){l&&b(e),l&&b(i),l&&b(o)}}}function me(s){let e,t,n=s[0].title+"",i,o,l,r,d,a,p,u=Array(8).fill(s[0].title),m=[];for(let f=0;f<u.length;f+=1)m[f]=U(P(s,u,f));return{c(){e=h("div"),t=h("div"),i=T(n),o=B(),l=h("div"),r=h("div"),d=h("div");for(let f=0;f<m.length;f+=1)m[f].c();g(t,"class","menu__item-link svelte-1n60fj0"),g(d,"class","marquee__inner svelte-1n60fj0"),g(d,"aria-hidden","true"),g(r,"class","marquee__inner-wrap svelte-1n60fj0"),g(l,"class","marquee svelte-1n60fj0"),g(e,"class","menu__item svelte-1n60fj0")},m(f,q){y(f,e,q),v(e,t),v(t,i),v(e,o),v(e,l),v(l,r),v(r,d);for(let _=0;_<m.length;_+=1)m[_].m(d,null);s[8](r),s[9](l),s[11](e),a||(p=[j(t,"mouseenter",s[6]),j(t,"mouseleave",s[7]),j(e,"click",s[10])],a=!0)},p(f,[q]){if(q&1&&n!==(n=f[0].title+"")&&F(i,n),q&1){u=Array(8).fill(f[0].title);let _;for(_=0;_<u.length;_+=1){const c=P(f,u,_);m[_]?m[_].p(c,q):(m[_]=U(c),m[_].c(),m[_].m(d,null))}for(;_<m.length;_+=1)m[_].d(1);m.length=u.length}},i:E,o:E,d(f){f&&b(e),H(m,f),s[8](null),s[9](null),s[11](null),a=!1,Z(p)}}}function fe(s,e,t){let n;W(s,x,c=>t(5,n=c));let{menuItem:i}=e,o,l,r,d,a;Y(()=>{t(4,a=ce()),a.init(o,l,d,r)});const p=c=>{a.mouseEnter(c)},u=c=>{a.mouseLeave(c)};function m(c){w[c?"unshift":"push"](()=>{r=c,t(2,r)})}function f(c){w[c?"unshift":"push"](()=>{d=c,t(3,d)})}const q=async c=>{n("./"+i.urlFormatted),ie.setPage(i.urlFormatted)};function _(c){w[c?"unshift":"push"](()=>{o=c,t(1,o)})}return s.$$set=c=>{"menuItem"in c&&t(0,i=c.menuItem)},[i,o,r,d,a,n,p,u,m,f,q,_]}class _e extends C{constructor(e){super();M(this,e,fe,me,L,{menuItem:0})}}function X(s,e,t){const n=s.slice();return n[3]=e[t],n}function de(s){let e,t;return e=new _e({props:{menuItem:s[3]}}),{c(){ne(e.$$.fragment)},m(n,i){le(e,n,i),t=!0},p:E,i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){I(e.$$.fragment,n),t=!1},d(n){re(e,n)}}}function J(s){let e,t,n=s[3]&&de(s);return{c(){n&&n.c(),e=$()},m(i,o){n&&n.m(i,o),y(i,e,o),t=!0},p(i,o){i[3]&&n.p(i,o)},i(i){t||(k(n),t=!0)},o(i){I(n),t=!1},d(i){n&&n.d(i),i&&b(e)}}}function pe(s){let e,t,n,i,o,l=s[0],r=[];for(let a=0;a<l.length;a+=1)r[a]=J(X(s,l,a));const d=a=>I(r[a],1,1,()=>{r[a]=null});return{c(){e=h("div"),t=h("div"),n=h("div");for(let a=0;a<r.length;a+=1)r[a].c();g(n,"class","menu-wrap svelte-1ktuwto"),g(t,"class","container flex-item svelte-1ktuwto"),g(e,"class","marquee-animation-container page-wrapper svelte-1ktuwto")},m(a,p){y(a,e,p),v(e,t),v(t,n);for(let u=0;u<r.length;u+=1)r[u].m(n,null);o=!0},p(a,[p]){if(p&1){l=a[0];let u;for(u=0;u<l.length;u+=1){const m=X(a,l,u);r[u]?(r[u].p(m,p),k(r[u],1)):(r[u]=J(m),r[u].c(),k(r[u],1),r[u].m(n,null))}for(se(),u=l.length;u<r.length;u+=1)d(u);ee()}},i(a){if(!o){for(let p=0;p<l.length;p+=1)k(r[p]);a&&te(()=>{i||(i=z(e,K,{},!0)),i.run(1)}),o=!0}},o(a){r=r.filter(Boolean);for(let p=0;p<r.length;p+=1)I(r[p]);a&&(i||(i=z(e,K,{},!1)),i.run(0)),o=!1},d(a){a&&b(e),H(r,a),a&&i&&i.end()}}}function K(){return{duration:800,css:(s,e)=>`transform: translateY(${100*e}vh);`}}function ge(s,e,t){let n;W(s,ae,l=>t(1,n=l));const o=G.categories.byTitle[n.category].pages.map(l=>G.pages.byTitle[l.key]);return Y(()=>{oe.closeModal()}),[o]}class Ie extends C{constructor(e){super();M(this,e,ge,pe,L,{})}}export{Ie as default};