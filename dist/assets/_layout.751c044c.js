import{_ as n}from"./index.4b22c44e.js";import{S as $,i as j,s as D,e as m,g as G,h as l,q as p,j as A,k as d,r as S,n as L,l as R,p as I,c as v,f as q,m as y,a as g,v as H,t as E,w as C,x as O,d as b,y as k,z as W}from"./vendor.152b18c6.js";import{p as V,m as M}from"./marqueeHandlerStore.47cc0480.js";function z(r){let a,t,i=V.pages.byTitle[r[1]].title+"",o;return{c(){a=m("div"),t=m("h5"),o=G(i),l(t,"class","main-text-header svelte-1y64g3n"),p(t,"inactive",r[2].has(r[0].page)),p(t,"press",r[0].page==="press"),p(t,"sm",r[0].page==="meet the team"),p(t,"map",r[0].page==="map"),l(a,"class","header-container svelte-1y64g3n")},m(e,s){A(e,a,s),d(a,t),d(t,o)},p(e,[s]){s&2&&i!==(i=V.pages.byTitle[e[1]].title+"")&&S(o,i),s&5&&p(t,"inactive",e[2].has(e[0].page)),s&1&&p(t,"press",e[0].page==="press"),s&1&&p(t,"sm",e[0].page==="meet the team"),s&1&&p(t,"map",e[0].page==="map")},i:L,o:L,d(e){e&&R(a)}}}function N(r,a,t){let i;I(r,M,s=>t(0,i=s));let o;const e=new Set(["maliview","aviator"]);return r.$$.update=()=>{r.$$.dirty&1&&t(1,o=i.page)},[i,o,e]}class Y extends ${constructor(a){super();j(this,a,N,z,D,{})}}function B(r){let a,t,i,o,e,s,c;t=new Y({props:{pages:r[0]}});var u=r[1];function h(_){return{}}return u&&(e=new u(h())),{c(){a=m("div"),v(t.$$.fragment),i=q(),o=m("div"),e&&v(e.$$.fragment),l(o,"class","page-wrapper svelte-gux584"),l(a,"class","page-content-container page-content-container-anim svelte-gux584")},m(_,f){A(_,a,f),y(t,a,null),d(a,i),d(a,o),e&&y(e,o,null),c=!0},p(_,[f]){const P={};if(f&1&&(P.pages=_[0]),t.$set(P),u!==(u=_[1])){if(e){k();const T=e;g(T.$$.fragment,1,0,()=>{b(T,1)}),H()}u?(e=new u(h()),v(e.$$.fragment),E(e.$$.fragment,1),y(e,o,null)):e=null}},i(_){c||(E(t.$$.fragment,_),e&&E(e.$$.fragment,_),_&&C(()=>{s||(s=O(a,w,{},!0)),s.run(1)}),c=!0)},o(_){g(t.$$.fragment,_),e&&g(e.$$.fragment,_),_&&(s||(s=O(a,w,{},!1)),s.run(0)),c=!1},d(_){_&&R(a),b(t),e&&b(e),_&&s&&s.end()}}}function w(){return{duration:1500,css:(r,a)=>`transform: translateY(${100*a}vh);`}}function F(r,a,t){let i,o;I(r,W,u=>t(2,o=u));let e;const s={"private-homes":async()=>n(()=>import("./MasonryGallery.4dcb26c5.js"),["assets/MasonryGallery.4dcb26c5.js","assets/vendor.152b18c6.js","assets/marqueeHandlerStore.47cc0480.js","assets/store.113de28b.js"]),"multi-family":async()=>n(()=>import("./MasonryGallery.4dcb26c5.js"),["assets/MasonryGallery.4dcb26c5.js","assets/vendor.152b18c6.js","assets/marqueeHandlerStore.47cc0480.js","assets/store.113de28b.js"]),"mixed-use":async()=>n(()=>import("./MasonryGallery.4dcb26c5.js"),["assets/MasonryGallery.4dcb26c5.js","assets/vendor.152b18c6.js","assets/marqueeHandlerStore.47cc0480.js","assets/store.113de28b.js"]),hospitality:async()=>n(()=>import("./MasonryGallery.4dcb26c5.js"),["assets/MasonryGallery.4dcb26c5.js","assets/vendor.152b18c6.js","assets/marqueeHandlerStore.47cc0480.js","assets/store.113de28b.js"]),commercial:async()=>n(()=>import("./MasonryGallery.4dcb26c5.js"),["assets/MasonryGallery.4dcb26c5.js","assets/vendor.152b18c6.js","assets/marqueeHandlerStore.47cc0480.js","assets/store.113de28b.js"]),concept:async()=>n(()=>import("./MasonryGallery.4dcb26c5.js"),["assets/MasonryGallery.4dcb26c5.js","assets/vendor.152b18c6.js","assets/marqueeHandlerStore.47cc0480.js","assets/store.113de28b.js"]),sculptures:async()=>n(()=>import("./MasonryGallery.4dcb26c5.js"),["assets/MasonryGallery.4dcb26c5.js","assets/vendor.152b18c6.js","assets/marqueeHandlerStore.47cc0480.js","assets/store.113de28b.js"]),"meet-amit-apel":async()=>n(()=>import("./MeetAmitApel.0b30ff8d.js"),["assets/MeetAmitApel.0b30ff8d.js","assets/vendor.152b18c6.js"]),"meet-the-team":async()=>n(()=>import("./MeetTheTeam.4cf96b83.js"),["assets/MeetTheTeam.4cf96b83.js","assets/vendor.152b18c6.js","assets/index.e6e77149.js","assets/utils.f73a3604.js"]),press:async()=>n(()=>import("./Press.64c4adbe.js"),["assets/Press.64c4adbe.js","assets/vendor.152b18c6.js","assets/index.e6e77149.js"]),"contact-us":async()=>n(()=>import("./Contact.df9d469b.js"),["assets/Contact.df9d469b.js","assets/vendor.152b18c6.js"]),furniture:async()=>n(()=>import("./MasonryGallery.4dcb26c5.js"),["assets/MasonryGallery.4dcb26c5.js","assets/vendor.152b18c6.js","assets/marqueeHandlerStore.47cc0480.js","assets/store.113de28b.js"]),"malibu-rebuild":async()=>n(()=>import("./MalibuRebuild.2785ece7.js"),["assets/MalibuRebuild.2785ece7.js","assets/vendor.152b18c6.js"]),"what-we-do":async()=>n(()=>import("./WhatWeDo.51fb1ce2.js"),["assets/WhatWeDo.51fb1ce2.js","assets/vendor.152b18c6.js"]),aviator:async()=>n(()=>import("./Developments.51393734.js"),["assets/Developments.51393734.js","assets/vendor.152b18c6.js","assets/marqueeHandlerStore.47cc0480.js"]),maliview:async()=>n(()=>import("./Developments.51393734.js"),["assets/Developments.51393734.js","assets/vendor.152b18c6.js","assets/marqueeHandlerStore.47cc0480.js"]),map:async()=>n(()=>import("./Map.e2bd7bf9.js"),["assets/Map.e2bd7bf9.js","assets/vendor.152b18c6.js"])},c=async u=>{u&&(M.setPage(u),t(1,e=(await s[u]()).default))};return r.$$.update=()=>{r.$$.dirty&4&&t(0,{pages:i}=o,i),r.$$.dirty&1&&c(i)},[i,e,o]}class U extends ${constructor(a){super();j(this,a,F,B,D,{})}}export{U as default};
