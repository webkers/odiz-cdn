import{bV as _,a7 as o,a$ as c}from"./index.js";async function b(r){const{data:e,error:t}=await o.from("templates").select("*").eq("id",r).eq("is_delete",!1).single();if(t)throw t;return e}async function h(r){const{data:e,error:t}=await o.from("templates").select("*").eq("parent_id",r).eq("is_delete",!1).order("sort");if(t)throw t;return e||[]}async function m(r,e){let t=o.from("process_print_areas").select(`
            id,
            title,
            process_print_area_templates!inner (
                id,
                print_area_id,
                template_id,
                group_cd,
                created_at,
                updated_at,
                template:templates (*)
            )
        `).eq("object_id",r).eq("is_delete",!1).single();e&&(t=t.abortSignal(e));const{data:a,error:s}=await t;if(s)throw s;return a!=null&&a.process_print_area_templates&&(a.process_print_area_templates=a.process_print_area_templates.filter(i=>{var n;return((n=i.template)==null?void 0:n.is_delete)===!1}),a.process_print_area_templates.sort((i,n)=>{var p,f;const l=((p=i.template)==null?void 0:p.sort)??Number.MAX_SAFE_INTEGER,d=((f=n.template)==null?void 0:f.sort)??Number.MAX_SAFE_INTEGER;return l-d})),a}function g(r){return{signal:r,rows:new Map,parents:new Map,areas:new Map,products:new Map}}function u(r,e,t){return r.has(e)||r.set(e,Promise.resolve().then(t)),r.get(e)}function y(r,e=g()){return u(e.parents,r,async()=>{const t=[],a=new Set;let s=r;for(;s&&!a.has(s);){c(e.signal),a.add(s);const i=s,n=await u(e.rows,i,async()=>{let l=o.from("templates").select(" * ").eq("id",i).single();e.signal&&(l=l.abortSignal(e.signal));const{data:d,error:p}=await l;return c(e.signal),p?(console.error("템플릿 조회 오류:",p),null):d});if(!n)break;t.push(n),s=n.parent_id}return t.reverse()}).then(t=>_(t))}function T(r,e){return u(e.areas,r,()=>(c(e.signal),m(r,e.signal))).then(t=>_(t))}function R(r,e){return u(e.products,r,()=>(c(e.signal),w(r,e.signal))).then(t=>_(t))}async function w(r,e){let t=o.from("template_products").select(`
            *,
            product:products (*),
            template_product_variants (
                id,
                variant_id,
                color_count,
                min_quantity,
                plate_price
            )
        `).eq("template_id",r).single();e&&(t=t.abortSignal(e));const{data:a,error:s}=await t;if(s)throw s;return a}async function A(r){const{data:e,error:t}=await o.from("process_print_areas").select("*").eq("object_id",r).eq("is_delete",!1).single();return t?(console.error("인쇄영역 조회 오류:",t),null):e}export{g as createTemplateReadContext,h as getChildTemplates,y as getParentTemplates,A as getPrintAreaByObjectId,b as getTemplate,w as getTemplateProduct,R as getTemplateProductForRead,m as getTemplatesByObjectId,T as getTemplatesByObjectIdForRead};
