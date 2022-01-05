var S=Object.defineProperty;var O=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var w=(t,n,e)=>n in t?S(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,k=(t,n)=>{for(var e in n||(n={}))m.call(n,e)&&w(t,e,n[e]);if(O)for(var e of O(n))q.call(n,e)&&w(t,e,n[e]);return t};import{V as A,W as v,A as B}from"./vendor.e1944527.js";function R(t){const n=t-1;return n*n*n+1}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function E(t,n){var e={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&n.indexOf(o)<0&&(e[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,o=Object.getOwnPropertySymbols(t);c<o.length;c++)n.indexOf(o[c])<0&&Object.prototype.propertyIsEnumerable.call(t,o[c])&&(e[o[c]]=t[o[c]]);return e}function I(t){var{fallback:n}=t,e=E(t,["fallback"]);const o=new Map,c=new Map;function $(i,a,u){const{delay:f=0,duration:r=s=>Math.sqrt(s)*30,easing:d=R}=v(v({},e),u),l=a.getBoundingClientRect(),y=i.left-l.left,g=i.top-l.top,j=i.width/l.width,M=i.height/l.height,_=Math.sqrt(y*y+g*g),p=getComputedStyle(a),C=p.transform==="none"?"":p.transform,P=+p.opacity;return{delay:f,duration:A(r)?r(_):r,easing:d,css:(s,b)=>`
				opacity: ${s*P};
				transform-origin: top left;
				transform: ${C} translate(${b*y}px,${b*g}px) scale(${s+(1-s)*j}, ${s+(1-s)*M});
			`}}function h(i,a,u){return(f,r)=>(i.set(r.key,{rect:f.getBoundingClientRect()}),()=>{if(a.has(r.key)){const{rect:d}=a.get(r.key);return a.delete(r.key),$(d,f,r)}return i.delete(r.key),n&&n(f,r,u)})}return[h(c,o,!1),h(o,c,!0)]}function x(t){const[n,e]=I(k({},t));return B({send:n,receive:e})}const W=x({}),z=x({duration:4e3});export{z as i,W as t};
