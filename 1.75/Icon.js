import{bF as I,bM as P,bG as R,bN as E,bI as T,bO as B,bP as F,bQ as j,bR as G,bK as M,bS as W,l as x,p as O,b as _,y as q,ar as D,J,C as K,B as Q,L as A,a as S,D as U,N as V,bT as p,c as H,f as X,aA as Y,h as C}from"./index.js";function Z(s,e,r,a,t){var l;var f=(l=e.$$slots)==null?void 0:l[r],n=!1;f===!0&&(f=e.children,n=!0),f===void 0||f(s,n?()=>a:a)}function $(s,e,r,a,t,f){var n,l,c=null,b=s,o;I(()=>{const i=e()||null;var h=E;i!==n&&(o&&(i===null?j(o,()=>{o=null,l=null}):i===l?G(o):M(o)),i&&i!==l&&(o=R(()=>{if(c=document.createElementNS(h,i),T(c,c),a){var v=c.appendChild(B());a(c,v)}F.nodes_end=c,b.before(c)})),n=i,n&&(l=n))},P)}function ne(s,e,r){var a=s.__className,t=y(e);(a!==t||W)&&(t===""?s.removeAttribute("class"):s.setAttribute("class",t),s.__className=t)}function ie(s,e,r){var a=s.__className,t=y(e);(a!==t||W)&&(e==null?s.removeAttribute("class"):s.className=t,s.__className=t)}function y(s,e){return(s??"")+""}function le(s,e,r){if(r){if(s.classList.contains(e))return;s.classList.add(e)}else{if(!s.classList.contains(e))return;s.classList.remove(e)}}/**
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
*/const ee={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var se=D("<svg><!><!></svg>");function re(s,e){const r=x(e,["children","$$slots","$$events","$$legacy"]),a=x(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);O(e,!1);let t=_(e,"name",8,void 0),f=_(e,"color",8,"currentColor"),n=_(e,"size",8,24),l=_(e,"strokeWidth",8,2),c=_(e,"absoluteStrokeWidth",8,!1),b=_(e,"iconNode",24,()=>[]);const o=(...d)=>d.filter((u,g,m)=>!!u&&m.indexOf(u)===g).join(" ");q();var i=se();let h;var v=Q(i);J(v,1,b,Y,(d,u)=>{let g=()=>C(u)[0],m=()=>C(u)[1];var k=H(),z=X(k);$(z,g,!0,(N,te)=>{let w;A(()=>w=p(N,w,{...m()},void 0,N.namespaceURI===E,N.nodeName.includes("-")))}),S(d,k)});var L=K(v);Z(L,e,"default",{}),A((d,u)=>h=p(i,h,{...ee,...a,width:n(),height:n(),stroke:f(),"stroke-width":d,class:u},void 0,!0),[()=>c()?Number(l())*24/Number(n()):l(),()=>o("lucide-icon","lucide",t()?`lucide-${t()}`:"",r.class)],V),S(s,i),U()}export{re as I,ie as a,ne as b,Z as s,le as t};
