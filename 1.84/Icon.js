import{bP as P,bW as B,bQ as F,bX as W,bS as I,bY as R,bZ as T,b_ as j,b$ as U,bU as q,c0 as E,l as x,p as D,b as _,y as G,aw as J,J as M,C as O,B as Q,L as A,a as S,D as V,N as X,c1 as p,c as Y,f as Z,aF as H,h as C}from"./index.js";function K(s,e,r,a,t){var l;var f=(l=e.$$slots)==null?void 0:l[r],n=!1;f===!0&&(f=e.children,n=!0),f===void 0||f(s,n?()=>a:a)}function $(s,e,r,a,t,f){var n,l,c=null,b=s,o;P(()=>{const i=e()||null;var h=W;i!==n&&(o&&(i===null?j(o,()=>{o=null,l=null}):i===l?U(o):q(o)),i&&i!==l&&(o=F(()=>{if(c=document.createElementNS(h,i),I(c,c),a){var v=c.appendChild(R());a(c,v)}T.nodes_end=c,b.before(c)})),n=i,n&&(l=n))},B)}function ne(s,e,r){var a=s.__className,t=y(e);(a!==t||E)&&(t===""?s.removeAttribute("class"):s.setAttribute("class",t),s.__className=t)}function ie(s,e,r){var a=s.__className,t=y(e);(a!==t||E)&&(e==null?s.removeAttribute("class"):s.className=t,s.__className=t)}function y(s,e){return(s??"")+""}function le(s,e,r){if(r){if(s.classList.contains(e))return;s.classList.add(e)}else{if(!s.classList.contains(e))return;s.classList.remove(e)}}/**
* @license lucide-svelte v0.475.0 - ISC
*
* ISC License
* 
* Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
* 
* Permission to use, copy, modify, and/or distribute this software for any
* purpose with or without fee is hereby granted, provided that the above
* copyright notice and this permission notice appear in all copies.
* 
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
* 
*/const ee={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var se=J("<svg><!><!></svg>");function re(s,e){const r=x(e,["children","$$slots","$$events","$$legacy"]),a=x(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);D(e,!1);let t=_(e,"name",8,void 0),f=_(e,"color",8,"currentColor"),n=_(e,"size",8,24),l=_(e,"strokeWidth",8,2),c=_(e,"absoluteStrokeWidth",8,!1),b=_(e,"iconNode",24,()=>[]);const o=(...d)=>d.filter((u,g,m)=>!!u&&m.indexOf(u)===g).join(" ");G();var i=se();let h;var v=Q(i);M(v,1,b,H,(d,u)=>{let g=()=>C(u)[0],m=()=>C(u)[1];var k=Y(),z=Z(k);$(z,g,!0,(N,te)=>{let w;A(()=>w=p(N,w,{...m()},void 0,N.namespaceURI===W,N.nodeName.includes("-")))}),S(d,k)});var L=O(v);K(L,e,"default",{}),A((d,u)=>h=p(i,h,{...ee,...a,width:n(),height:n(),stroke:f(),"stroke-width":d,class:u},void 0,!0),[()=>c()?Number(l())*24/Number(n()):l(),()=>o("lucide-icon","lucide",t()?`lucide-${t()}`:"",r.class)],X),S(s,i),V()}export{re as I,ie as a,ne as b,K as s,le as t};
