import{e as I,q as R,s as U,v as X,N as b,w as Y,x as C,y as G,g as O,m as _,l as J}from"./ExperienceExportMenu-gdVtRXVe.js";import{b as n,a as T,e as K}from"./exportDocumentTheme-B5gTmv1x.js";import"./index-BxHdmhyu.js";import"./session-B15EJOhV.js";import"./send-JmUeTQsX.js";import"./planEntitlements-okUu8Y_U.js";import"./useMembershipCheckout-DvM6Hy2c.js";import"./membershipCatalog-BZJqG1di.js";import"./MembershipCheckoutDialog-210rZwSH.js";import"./index-RU9ks5TK.js";import"./headphones-CIbvfR9A.js";import"./minus-2BP6Xv68.js";import"./chevron-right-B4yGPPrx.js";import"./shield-check-D4mICf9j.js";import"./resumeFieldConstraints-CkWF_QC3.js";import"./share-2-BS9hN8jH.js";import"./download-Cfm9ohOq.js";import"./lock-QWy50VuR.js";import"./html2canvasColors-CeWDj_2g.js";function Q(t){const o=[{label:"类型",value:I[t.type]},{label:"组织",value:t.organization.trim()},{label:"角色",value:t.role?.trim()||""},{label:"时间",value:t.period.trim()}].filter(e=>e.value&&e.value!==t.title.trim());return{title:t.title.trim(),metadata:o}}const z=18,V=38,D={fact:"#238653",inferred:"#b7791f",unverified:"#c54f4b",missing:"#8994a0"};function p(t){return t.replace(/[&<>"']/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"})[o])}function M(t,o){const e=Array.from(t.trim());return e.length>o?`${e.slice(0,Math.max(1,o-1)).join("")}…`:e.join("")}function P(t,o,e){const r=Array.from(t.trim()),s=[];for(let a=0;a<r.length&&s.length<e;a+=o)s.push(r.slice(a,a+o).join(""));return r.length>o*e&&s.length>0&&(s[s.length-1]=M(s[s.length-1],o)),s.length>0?s:[""]}function j(t){return typeof t=="number"?t:Number.parseFloat(t??"0")||0}function Z(t){const o=j(t.style?.width),e=j(t.style?.height);return`
    <g>
      <rect x="${t.position.x}" y="${t.position.y}" width="${o}" height="${e}" rx="14" fill="#f8fafc" stroke="${n.rule}"/>
      <text x="${t.position.x+o/2}" y="${t.position.y+37}" text-anchor="middle" fill="${n.muted}" font-size="22" font-weight="700" letter-spacing="1">${p(t.data.label)}</text>
    </g>`}function tt(t,o){const{x:e,y:r}=t.position,s=Y(t.data.label),a=[s.eyebrow,t.data.onSpine?"主线":null].filter(Boolean).join(" · "),f=C[t.data.status],d=G[t.data.ownership],g=D[t.data.status],m=P(s.body,14,4);let c=r+24;const h=a?`<text x="${e+13}" y="${c}" fill="${n.faint}" font-size="10" font-weight="700" letter-spacing=".7">${p(M(a,f?14:24))}</text>`:"",$=f?`<text x="${e+b-13}" y="${c}" text-anchor="end" fill="${g}" font-size="9.5" font-weight="700">${p(f)}</text>`:"";(h||$)&&(c+=22);const k=m.map((x,u)=>`<tspan x="${e+13}" y="${c+u*20}">${p(x)}</tspan>`).join("");c+=m.length*20+2;const L=d?`<g><rect x="${e+13}" y="${c-14}" width="${Math.max(42,Array.from(d).length*11+22)}" height="16" rx="4" fill="#eef2f7"/><text x="${e+21}" y="${c-3}" fill="${n.muted}" font-size="9.5" font-weight="700">${p(`我${d}`)}</text></g>`:"";d&&(c+=24);const i=t.data.question?P(`待追问：${t.data.question}`,17,2):[],y=i.map((x,u)=>`<tspan x="${e+13}" y="${c+u*16}">${p(x)}</tspan>`).join("");c+=i.length*16+(i.length>0?4:0);const w=t.data.options.map((x,u)=>{const v=c+u*26;return`<g><rect x="${e+13}" y="${v-13}" width="${b-26}" height="21" rx="4" fill="#ffffff" stroke="${n.rule}"/><text x="${e+21}" y="${v+2}" fill="${n.muted}" font-size="9.5">${p(M(x,17))}</text></g>`}).join("");return`
    <g>
      <rect x="${e}" y="${r}" width="${b}" height="${o}" rx="9" fill="#ffffff" stroke="${g}" stroke-width="${t.data.onSpine?2.2:1.7}"${t.data.status==="missing"?' stroke-dasharray="6 4"':""}/>
      ${h}${$}
      <text fill="${n.ink}" font-size="13" font-weight="${t.data.onSpine?700:600}">${k}</text>
      ${L}
      ${y?`<text fill="${n.muted}" font-size="10.5">${y}</text>`:""}
      ${w}
    </g>`}function N(t,o,e){return e?.endsWith("bottom")?{x:t.position.x+b/2,y:t.position.y+o}:e?.endsWith("top")?{x:t.position.x+b/2,y:t.position.y}:e?.endsWith("left")?{x:t.position.x,y:t.position.y+o/2}:{x:t.position.x+b,y:t.position.y+o/2}}function et(t){const o=[["fact","明确事实"],["inferred","AI 补充待确认"],["unverified","内容有冲突"],["missing","待填写"]];let e=4;return o.map(([r,s])=>{const a=`<g><line x1="${e}" y1="${t}" x2="${e+18}" y2="${t}" stroke="${D[r]}" stroke-width="3"${r==="missing"?' stroke-dasharray="5 3"':""}/><text x="${e+25}" y="${t+4}" fill="${n.muted}" font-size="10.5">${p(s)}</text></g>`;return e+=52+Array.from(s).length*11,a}).join("")}function ot(t){if(t.nodes.length===0)return null;const o=R(t),e=o.nodes.filter(i=>i.type==="stageGroup"),r=o.nodes.filter(i=>i.type==="topology"),s=new Map(r.map(i=>[i.id,i])),a=new Map(t.nodes.map(i=>[i.id,U(i)])),f=Math.max(...e.map(i=>i.position.x+j(i.style?.width))),d=Math.max(0,...o.edges.map(i=>i.data?.route==="right-turn"?i.data.via??0:0)),g=Math.max(f,d),m=Math.max(...e.map(i=>i.position.y+j(i.style?.height))),c=o.edges.map(i=>{const y=s.get(i.source),w=s.get(i.target);if(!y||!w)return"";const x=a.get(y.id),u=a.get(w.id);if(x===void 0||u===void 0)return"";const v=N(y,x,i.sourceHandle),S=N(w,u,i.targetHandle),E=X({sourceX:v.x,sourceY:v.y,targetX:S.x,targetY:S.y,route:i.data?.route??"horizontal",via:i.data?.via}),H=i.style?.strokeWidth===2,A=H?n.accent:n.faint,F=typeof i.label=="string"&&i.label?`<text x="${E.labelX}" y="${E.labelY-5}" text-anchor="middle" fill="${n.muted}" font-size="10" font-weight="600">${p(i.label)}</text>`:"";return`<path d="${E.path}" fill="none" stroke="${A}" stroke-width="${H?2:1.4}" marker-end="url(#${H?"arrow-main":"arrow-muted"})"/>${F}`}).join(""),h=Math.ceil(g+z*2),$=Math.ceil(m+z*2+V),k=`<svg xmlns="http://www.w3.org/2000/svg" width="${h}" height="${$}" viewBox="0 0 ${h} ${$}" role="img" aria-label="${p(t.topic||"工作思路图")}" style="font-family:${p(T)}">
    <defs>
      <marker id="arrow-main" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="${n.accent}"/></marker>
      <marker id="arrow-muted" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="${n.faint}"/></marker>
    </defs>
    <rect width="${h}" height="${$}" rx="14" fill="#ffffff"/>
    <g transform="translate(${z} ${z})">
      ${e.map(Z).join("")}
      ${c}
      ${r.map(i=>tt(i,a.get(i.id))).join("")}
      ${et(m+24)}
    </g>
  </svg>`;return{alt:t.topic?`工作思路图：${t.topic}，共 ${t.nodes.length} 个节点`:`工作思路图，共 ${t.nodes.length} 个节点`,dataUrl:`data:image/svg+xml;charset=utf-8,${encodeURIComponent(k)}`,height:$,svg:k,width:h}}const it=/[\\/:*?"<>|]/g;function W(t){return t.trim().replace(it,"_").replace(/\s+/g," ")||"经历梳理"}function nt(t,o){const e=URL.createObjectURL(t),r=document.createElement("a");r.href=e,r.download=o,r.hidden=!0,document.body.append(r),r.click(),r.remove(),URL.revokeObjectURL(e)}function l(t){return t.replace(/[&<>"']/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[o])}const B=`
  .experience-export-document, .experience-export-document * { box-sizing: border-box; }
  .experience-export-document { width: 794px; min-height: 1123px; margin: 0 auto; padding: 64px 68px; background: ${n.surface}; color: ${n.ink}; font-family: ${T}; font-size: 13.5px; line-height: 1.76; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .experience-export-document h1 { margin: 0; color: ${n.ink}; font-size: 30px; font-weight: 750; letter-spacing: -.035em; line-height: 1.18; }
  .experience-export-document h2 { margin: 34px 0 14px; border-bottom: 1px solid ${n.rule}; padding-bottom: 9px; color: ${n.accent}; font-size: 17px; font-weight: 750; letter-spacing: .03em; }
  .experience-export-document h3 { margin: 22px 0 10px; color: #344250; font-size: 13px; font-weight: 750; letter-spacing: .04em; }
  .experience-export-document h4 { margin: 16px 0 8px; color: ${n.faint}; font-size: 11px; font-weight: 750; letter-spacing: .08em; }
  .experience-export-document p { margin: 0; white-space: pre-wrap; }
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
`,rt=`
  @media screen { body { min-width: 794px; margin: 0; padding: 32px; background: ${n.canvas}; } .experience-export-document { box-shadow: 0 18px 50px rgba(47,62,78,.14); } }
  @media screen and (max-width: 850px) { body { padding: 0; } .experience-export-document { box-shadow: none; } }
  @media print { body { margin: 0; background: #fff; } .experience-export-document { margin: 0; box-shadow: none; } }
`;function at(t){const o=ot(t);return o?`
    <figure class="topology">
      <figcaption>工作思路图${t.topic?`：${l(t.topic)}`:""}</figcaption>
      <img alt="${l(o.alt)}" data-topology-image="true" height="${o.height}" src="${o.dataUrl}" width="${o.width}">
    </figure>
  `:""}function q(t,o){const e=Q(t),r=e.metadata.map(a=>`
    <div><dt>${a.label}</dt><dd>${l(a.value)}</dd></div>
  `).join(""),s=O(t).map(a=>{const f=_(a.star).map(({field:m})=>`
      <div class="field"><dt>${l(m.label)}</dt><dd>${l(m.value)}</dd></div>
    `).join(""),d=J(a,t),g=o?.get(a.id);return`
      <section class="project">
        <h2>${l(a.title)}</h2>
        ${d?`<h3>工作总述</h3><p>${l(d.value)}</p>`:""}
        <h3>工作详述</h3>
        <dl class="analysis-grid">${f}</dl>
        ${g?at(g):""}
      </section>
    `}).join("");return`
    <article class="experience-export-document">
      <header class="document-header">
        <h1>${l(e.title)}</h1>
        <dl class="metadata">${r}</dl>
      </header>
      <section class="overview">
        <h2>经历概述</h2>
        <p class="summary">${l(t.summary.value)}</p>
      </section>
      ${s}
    </article>
  `}function st(t,o){return`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${l(t.title)}</title><style>${B}${rt}</style></head><body>${q(t,o)}</body></html>`}function Mt(t,o){nt(new Blob([st(t,o)],{type:"text/html;charset=utf-8"}),`${W(t.title)}.html`)}const ct=[".field",".topology img",".topology",".overview",".project"];async function Lt(t,o){const e=document.createElement("div");e.style.cssText="position:absolute;left:0;top:0;z-index:-1;transform:translateX(-10000px);background:#fff",e.innerHTML=`<style>${B}</style>${q(t,o)}`,document.body.append(e);try{const r=e.querySelector("article");if(!r)throw new Error("无法生成导出文档，请刷新页面后重试。");await K(r,`${W(t.title)}.pdf`,{widthPx:794,imageFormat:"PNG",renderScale:2.5,pageBreakSelectors:ct,pageMarginsPx:{continuationTop:48,bottom:48},minimumPageFillRatio:.55})}finally{e.remove()}}export{st as buildExperienceDocumentHtml,Mt as exportExperienceHtml,Lt as exportExperiencePdf,W as safeExperienceFileName};
