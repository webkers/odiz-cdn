import{bK as P,bR as R,bL as T,bS as W,bN as B,bT as F,bU as I,bV as j,bW as U,bP as V,bX as E,l as x,p as q,b as _,y as D,aw as G,J,C as K,B as M,L as A,a as S,D as O,N as X,bY as p,c as Y,f as H,aF as Q,h as C}from"./index.js";function Z(s,e,r,a,t){var l;var f=(l=e.$$slots)==null?void 0:l[r],n=!1;f===!0&&(f=e.children,n=!0),f===void 0||f(s,n?()=>a:a)}function $(s,e,r,a,t,f){var n,l,c=null,b=s,o;P(()=>{const i=e()||null;var h=W;i!==n&&(o&&(i===null?j(o,()=>{o=null,l=null}):i===l?U(o):V(o)),i&&i!==l&&(o=T(()=>{if(c=document.createElementNS(h,i),B(c,c),a){var v=c.appendChild(F());a(c,v)}I.nodes_end=c,b.before(c)})),n=i,n&&(l=n))},R)}function ne(s,e,r){var a=s.__className,t=L(e);(a!==t||E)&&(t===""?s.removeAttribute("class"):s.setAttribute("class",t),s.__className=t)}function ie(s,e,r){var a=s.__className,t=L(e);(a!==t||E)&&(e==null?s.removeAttribute("class"):s.className=t,s.__className=t)}function L(s,e){return(s??"")+""}function le(s,e,r){if(r){if(s.classList.contains(e))return;s.classList.add(e)}else{if(!s.classList.contains(e))return;s.classList.remove(e)}}/**
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
*/const ee={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var se=G("<svg><!><!></svg>");function re(s,e){const r=x(e,["children","$$slots","$$events","$$legacy"]),a=x(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);q(e,!1);let t=_(e,"name",8,void 0),f=_(e,"color",8,"currentColor"),n=_(e,"size",8,24),l=_(e,"strokeWidth",8,2),c=_(e,"absoluteStrokeWidth",8,!1),b=_(e,"iconNode",24,()=>[]);const o=(...d)=>d.filter((u,g,m)=>!!u&&m.indexOf(u)===g).join(" ");D();var i=se();let h;var v=M(i);J(v,1,b,Q,(d,u)=>{let g=()=>C(u)[0],m=()=>C(u)[1];var k=Y(),z=H(k);$(z,g,!0,(N,te)=>{let w;A(()=>w=p(N,w,{...m()},void 0,N.namespaceURI===W,N.nodeName.includes("-")))}),S(d,k)});var y=K(v);Z(y,e,"default",{}),A((d,u)=>h=p(i,h,{...ee,...a,width:n(),height:n(),stroke:f(),"stroke-width":d,class:u},void 0,!0),[()=>c()?Number(l())*24/Number(n()):l(),()=>o("lucide-icon","lucide",t()?`lucide-${t()}`:"",r.class)],X),S(s,i),O()}export{re as I,ie as a,ne as b,Z as s,le as t};
