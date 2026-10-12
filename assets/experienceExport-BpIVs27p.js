import{e as Y,g as O,m as _,l as J}from"./ExperienceExportMenu-CjycSkyx.js";import{b as K,e as Q,C as S,a as V,c as P,N as j,t as Z,d as tt,f as et,s as ot}from"./edgePath-HYalDZEQ.js";import{a as n,e as W}from"./exportDocumentTheme-Ddd9Ilk8.js";import{e as it}from"./exportElementPdf-xenTk6Xn.js";import"./schemas-cN6dWSg6.js";import"./index-B3lj4cjF.js";import"./planEntitlements-okUu8Y_U.js";import"./useMembershipCheckout-KdT03t1J.js";import"./membershipCatalog-fS100tvC.js";import"./MembershipCheckoutDialog-rwHfyw9y.js";import"./pageTransition-B0JN2UI-.js";import"./index-wAP_p133.js";import"./headphones-DkBQdooJ.js";import"./minus-j6DBNjbq.js";import"./index-BCrO_1z0.js";import"./chevron-right-S4G9U769.js";import"./arrow-left-lN9Jk_Z9.js";import"./resumeFieldConstraints-CG3Z8_fz.js";import"./code-xml-GJ6u2DL4.js";import"./download-CkescQmg.js";import"./chevron-down-DhLQr5So.js";import"./lock-DHxuTehR.js";import"./triangle-alert-Bnd8wfkO.js";import"./circle-help-D2T_TK4u.js";import"./html2canvasColors-CeWDj_2g.js";function rt(t){const o=[{label:"类型",value:Y[t.type]},{label:"组织",value:t.organization.trim()},{label:"角色",value:t.role?.trim()||""},{label:"时间",value:t.period.trim()}].filter(e=>e.value&&e.value!==t.title.trim());return{title:t.title.trim(),metadata:o}}const z=18,nt=38,B={fact:"#238653",inferred:"#b7791f",unverified:"#c54f4b",missing:"#8994a0"};function l(t){return t.replace(/[&<>"']/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"})[o])}function C(t,o){const e=Array.from(t.trim());return e.length>o?`${e.slice(0,Math.max(1,o-1)).join("")}…`:e.join("")}function T(t,o,e){const r=Array.from(t.trim()),a=[];for(let s=0;s<r.length&&a.length<e;s+=o)a.push(r.slice(s,s+o).join(""));return r.length>o*e&&a.length>0&&(a[a.length-1]=C(a[a.length-1],o)),a.length>0?a:[""]}function H(t){return typeof t=="number"?t:Number.parseFloat(t??"0")||0}function at(t){const o=H(t.style?.width),e=H(t.style?.height);return`
    <g>
      <rect x="${t.position.x}" y="${t.position.y}" width="${o}" height="${e}" rx="14" fill="#f8fafc" stroke="${n.rule}"/>
      <text x="${t.position.x+o/2}" y="${t.position.y+37}" text-anchor="middle" fill="${n.muted}" font-size="22" font-weight="700" letter-spacing="1">${l(t.data.label)}</text>
    </g>`}function st(t,o){const{x:e,y:r}=t.position,a=Z(t.data.label),s=[a.eyebrow,t.data.onSpine?"主线":null].filter(Boolean).join(" · "),c=tt[t.data.status],d=et[t.data.ownership],f=B[t.data.status],h=T(a.body,14,4);let p=r+24;const w=s?`<text x="${e+13}" y="${p}" fill="${n.faint}" font-size="10" font-weight="700" letter-spacing=".7">${l(C(s,c?14:24))}</text>`:"",g=c?`<text x="${e+j-13}" y="${p}" text-anchor="end" fill="${f}" font-size="9.5" font-weight="700">${l(c)}</text>`:"";(w||g)&&(p+=22);const $=h.map((m,x)=>`<tspan x="${e+13}" y="${p+x*20}">${l(m)}</tspan>`).join("");p+=h.length*20+2;const v=d?`<g><rect x="${e+13}" y="${p-14}" width="${Math.max(42,Array.from(d).length*11+22)}" height="16" rx="4" fill="#eef2f7"/><text x="${e+21}" y="${p-3}" fill="${n.muted}" font-size="9.5" font-weight="700">${l(`我${d}`)}</text></g>`:"";d&&(p+=24);const k=t.data.question?T(`待追问：${t.data.question}`,17,2):[],i=k.map((m,x)=>`<tspan x="${e+13}" y="${p+x*16}">${l(m)}</tspan>`).join("");p+=k.length*16+(k.length>0?4:0);const y=t.data.options.map((m,x)=>{const b=p+x*26;return`<g><rect x="${e+13}" y="${b-13}" width="${j-26}" height="21" rx="4" fill="#ffffff" stroke="${n.rule}"/><text x="${e+21}" y="${b+2}" fill="${n.muted}" font-size="9.5">${l(C(m,17))}</text></g>`}).join("");return`
    <g>
      <rect x="${e}" y="${r}" width="${j}" height="${o}" rx="9" fill="#ffffff" stroke="${f}" stroke-width="${t.data.onSpine?2.2:1.7}"${t.data.status==="missing"?' stroke-dasharray="6 4"':""}/>
      ${w}${g}
      <text fill="${n.ink}" font-size="13" font-weight="${t.data.onSpine?700:600}">${$}</text>
      ${v}
      ${i?`<text fill="${n.muted}" font-size="10.5">${i}</text>`:""}
      ${y}
    </g>`}function ct(t){const{x:o,y:e}=t.position;return`<g><rect x="${o}" y="${e}" width="${P}" height="${S}" rx="18" fill="#ffffff" stroke="${n.rule}"/><text x="${o+P/2}" y="${e+S/2+4}" text-anchor="middle" fill="${n.muted}" font-size="12" font-weight="600">${l(t.data.label)}</text></g>`}function N(t,o,e){const r=t.type==="solutionChoice"?P:j;return e?.endsWith("bottom")?{x:t.position.x+r/2,y:t.position.y+o}:e?.endsWith("top")?{x:t.position.x+r/2,y:t.position.y}:e?.endsWith("left")?{x:t.position.x,y:t.position.y+o/2}:{x:t.position.x+r,y:t.position.y+o/2}}function pt(t){const o=[["fact","明确事实"],["inferred","AI 补充待确认"],["unverified","内容有冲突"],["missing","待填写"]];let e=4;return o.map(([r,a])=>{const s=`<g><line x1="${e}" y1="${t}" x2="${e+18}" y2="${t}" stroke="${B[r]}" stroke-width="3"${r==="missing"?' stroke-dasharray="5 3"':""}/><text x="${e+25}" y="${t+4}" fill="${n.muted}" font-size="10.5">${l(a)}</text></g>`;return e+=52+Array.from(a).length*11,s}).join("")}function lt(t){if(t.nodes.length===0)return null;const o=K(t),e=o.nodes.filter(i=>i.type==="stageGroup"),r=o.nodes.filter(i=>i.type==="topology"),a=o.nodes.filter(i=>i.type==="solutionChoice"),s=new Map([...r,...a].map(i=>[i.id,i])),c=new Map(t.nodes.map(i=>[i.id,Q(i)]));for(const i of a)c.set(i.id,S);const d=Math.max(...e.map(i=>i.position.x+H(i.style?.width))),f=Math.max(0,...o.edges.map(i=>i.data?.route==="right-turn"?i.data.via??0:0)),h=Math.max(d,f),p=Math.max(...e.map(i=>i.position.y+H(i.style?.height))),w=o.edges.map(i=>{const y=s.get(i.source),m=s.get(i.target);if(!y||!m)return"";const x=c.get(y.id),b=c.get(m.id);if(x===void 0||b===void 0)return"";const D=N(y,x,i.sourceHandle),I=N(m,b,i.targetHandle),E=V({sourceX:D.x,sourceY:D.y,targetX:I.x,targetY:I.y,route:i.data?.route??"horizontal",via:i.data?.via,detour:i.data?.detour}),M=i.style?.strokeWidth===2,F=M?n.accent:n.faint,G=typeof i.label=="string"&&i.label?`<text x="${E.labelX}" y="${E.labelY-5}" text-anchor="middle" fill="${n.muted}" font-size="10" font-weight="600">${l(i.label)}</text>`:"",U=i.markerEnd?` marker-end="url(#${M?"arrow-main":"arrow-muted"})"`:"",X=i.style?.strokeDasharray?` stroke-dasharray="${l(String(i.style.strokeDasharray))}"`:"";return`<path d="${E.path}" fill="none" stroke="${F}" stroke-width="${M?2:1.4}"${U}${X}/>${G}`}).join(""),g=Math.ceil(h+z*2),$=Math.ceil(p+z*2+nt),v=`<svg xmlns="http://www.w3.org/2000/svg" width="${g}" height="${$}" viewBox="0 0 ${g} ${$}" role="img" aria-label="${l(t.topic||"工作思路图")}" style="font-family:${l(W)}">
    <defs>
      <marker id="arrow-main" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="${n.accent}"/></marker>
      <marker id="arrow-muted" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="${n.faint}"/></marker>
    </defs>
    <rect width="${g}" height="${$}" rx="14" fill="#ffffff"/>
    <g transform="translate(${z} ${z})">
      ${e.map(at).join("")}
      ${w}
      ${a.map(ct).join("")}
      ${r.map(i=>st(i,c.get(i.id))).join("")}
      ${pt(p+24)}
    </g>
  </svg>`;return{alt:t.topic?`工作思路图：${t.topic}，共 ${t.nodes.length} 个节点`:`工作思路图，共 ${t.nodes.length} 个节点`,dataUrl:`data:image/svg+xml;charset=utf-8,${encodeURIComponent(v)}`,height:$,svg:v,width:g}}const dt=/[\\/:*?"<>|]/g;function q(t){return t.trim().replace(dt,"_").replace(/\s+/g," ")||"经历梳理"}function mt(t,o){const e=URL.createObjectURL(t),r=document.createElement("a");r.href=e,r.download=o,r.hidden=!0,document.body.append(r),r.click(),r.remove(),URL.revokeObjectURL(e)}function u(t){return t.replace(/[&<>"']/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[o])}const R=`
  .experience-export-document, .experience-export-document * { box-sizing: border-box; }
  .experience-export-document { width: 794px; min-height: 1123px; margin: 0 auto; padding: 64px 68px; background: ${n.surface}; color: ${n.ink}; font-family: ${W}; font-size: 13.5px; line-height: 1.76; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .experience-export-document h1 { margin: 0; color: ${n.ink}; font-size: 30px; font-weight: 750; letter-spacing: -.035em; line-height: 1.18; }
  .experience-export-document h2 { margin: 34px 0 14px; border-bottom: 1px solid ${n.rule}; padding-bottom: 9px; color: ${n.accent}; font-size: 17px; font-weight: 750; letter-spacing: .03em; }
  .experience-export-document h3 { margin: 22px 0 10px; color: #344250; font-size: 13px; font-weight: 750; letter-spacing: .04em; }
  .experience-export-document h4 { margin: 16px 0 8px; color: ${n.faint}; font-size: 11px; font-weight: 750; letter-spacing: .08em; }
  .experience-export-document p { margin: 0; white-space: pre-wrap; }
  .experience-export-document .evidence-meta { color: ${n.faint}; font-size: 11px; margin-top: 4px; }
  .experience-export-document .document-header { border-top: 5px solid ${n.accent}; padding-top: 22px; }
  .experience-export-document .metadata { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 18px; margin: 24px 0 0; border-bottom: 1px solid ${n.rule}; padding-bottom: 22px; }
  .experience-export-document .metadata div { min-width: 0; }
  .experience-export-document .metadata dt { color: ${n.faint}; font-size: 10px; font-weight: 650; letter-spacing: .08em; }
  .experience-export-document .metadata dd { margin: 4px 0 0; color: #3e4b58; font-size: 12px; font-weight: 650; }
  .experience-export-document .summary { color: #344250; }
  .experience-export-document .overview { border-left: 3px solid ${n.accent}; padding: 2px 0 2px 18px; }
  .experience-export-document .overview h2 { margin-top: 30px; border-bottom: 0; padding-bottom: 0; }
  .experience-export-document .project { break-inside: avoid; }
  .experience-export-document dl { margin: 0; }
  .experience-export-document .analysis-grid { display: grid; grid-template-columns: 1fr; gap: 13px; }
  .experience-export-document .field { break-inside: avoid; border-top: 1px solid ${n.rule}; padding-top: 9px; }
  .experience-export-document .field dt { color: #344250; font-size: 12px; font-weight: 750; }
  .experience-export-document .field dd { margin: 3px 0 0; color: ${n.muted}; white-space: pre-wrap; }
  .experience-export-document .topology { break-inside: avoid; margin: 22px 0 0; }
  .experience-export-document .topology figcaption { margin: 0 0 10px; color: #344250; font-size: 13px; font-weight: 750; letter-spacing: .04em; }
  .experience-export-document .topology img { display: block; width: 100%; height: auto; max-height: 720px; margin: 0 auto; border: 1px solid ${n.rule}; border-radius: 8px; object-fit: contain; }
`,ut=`
  @media screen { body { min-width: 794px; margin: 0; padding: 32px; background: ${n.canvas}; } .experience-export-document { box-shadow: 0 18px 50px rgba(47,62,78,.14); } }
  @media screen and (max-width: 850px) { body { padding: 0; } .experience-export-document { box-shadow: none; } }
  @media print { body { margin: 0; background: #fff; } .experience-export-document { margin: 0; box-shadow: none; } }
`;function xt(t){const o=lt(t);return o?`
    <figure class="topology">
      <figcaption>工作思路图${t.topic?`：${u(t.topic)}`:""}</figcaption>
      <img alt="${u(o.alt)}" data-topology-image="true" height="${o.height}" src="${o.dataUrl}" width="${o.width}">
    </figure>
  `:""}function L(t){return(t.items?.length?t.items:[t]).map(e=>{const r=e.status??t.status,a=e.sourceRefs??t.sourceRefs,s=[r==="confirmed"?"":ot[r].label,...a.map(c=>`来源材料 ${c.materialId} · 第 ${c.page} 页${c.quote?`：「${c.quote}」`:""}`)].filter(Boolean);return`<p>${u(e.value)}</p>${s.length?`<p class="evidence-meta" data-evidence-status="${r}">${s.map(u).join("<br>")}</p>`:""}`}).join("")}function A(t,o){const e=rt(t),r=e.metadata.map(s=>`
    <div><dt>${s.label}</dt><dd>${u(s.value)}</dd></div>
  `).join(""),a=O(t).map(s=>{const c=_(s.star).map(({field:h})=>`
      <div class="field"><dt>${u(h.label)}</dt><dd>${L(h)}</dd></div>
    `).join(""),d=J(s,t),f=o?.get(s.id);return`
      <section class="project">
        <h2>${u(s.title)}</h2>
        ${d?`<h3>工作总述</h3>${L(d)}`:""}
        <h3>工作详述</h3>
        <dl class="analysis-grid">${c}</dl>
        ${f?xt(f):""}
      </section>
    `}).join("");return`
    <article class="experience-export-document">
      <header class="document-header">
        <h1>${u(e.title)}</h1>
        <dl class="metadata">${r}</dl>
      </header>
      <section class="overview">
        <h2>经历概述</h2>
        <div class="summary">${L(t.summary)}</div>
      </section>
      ${a}
    </article>
  `}function ft(t,o){return`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${u(t.title)}</title><style>${R}${ut}</style></head><body>${A(t,o)}</body></html>`}function Ft(t,o){mt(new Blob([ft(t,o)],{type:"text/html;charset=utf-8"}),`${q(t.title)}.html`)}const ht=[".field",".topology img",".topology",".overview",".project"];async function Gt(t,o){const e=document.createElement("div");e.style.cssText="position:absolute;left:0;top:0;z-index:-1;transform:translateX(-10000px);background:#fff",e.innerHTML=`<style>${R}</style>${A(t,o)}`,document.body.append(e);try{const r=e.querySelector("article");if(!r)throw new Error("无法生成导出文档，请刷新页面后重试。");await it(r,`${q(t.title)}.pdf`,{widthPx:794,imageFormat:"PNG",renderScale:2.5,pageBreakSelectors:ht,pageMarginsPx:{continuationTop:48,bottom:48},minimumPageFillRatio:.55})}finally{e.remove()}}export{ft as buildExperienceDocumentHtml,Ft as exportExperienceHtml,Gt as exportExperiencePdf,q as safeExperienceFileName};
