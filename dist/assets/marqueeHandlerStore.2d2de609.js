var m=Object.defineProperty;var s=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;var c=(r,e,t)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,u=(r,e)=>{for(var t in e||(e={}))g.call(e,t)&&c(r,t,e[t]);if(s)for(var t of s(e))l.call(e,t)&&c(r,t,e[t]);return r};import{F as p}from"./vendor.c8af8b81.js";const d=()=>{const r={page:null,component:null,category:!0},{subscribe:e,set:t,update:a}=p(r);return u({subscribe:e,set:t,update:a},{setCategory(n){a(o=>(o.category=n,o))},setPage(n){a(o=>(o.page=n,o))}})},f=d();export{f as m};
