const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/experienceExportWord-Fhhk8OuE.js","assets/index-Cqn09zkh.js","assets/ExperienceExportMenu-C4RULNpV.js","assets/index-C7fBOsGU.js","assets/session-BE_DFqmd.js","assets/index-Xepty46r.css","assets/send-bbepRLdD.js","assets/planEntitlements-okUu8Y_U.js","assets/useMembershipCheckout-DUzbuTbX.js","assets/membershipCatalog-BQj_WJJr.js","assets/MembershipCheckoutDialog-BZADfB5A.js","assets/index-B0vx5SQP.js","assets/headphones-Bsiwo3pl.js","assets/minus-BdlEtDnh.js","assets/chevron-right-DXcMDad-.js","assets/shield-check-I7Kddetm.js","assets/MembershipCheckoutDialog-BLCFJ64y.css","assets/resumeFieldConstraints-CQSvtlde.js","assets/rotate-cw-DHZuia9O.js","assets/download-D6dyz9PQ.js","assets/lock-CQbsYpBe.js","assets/ExperienceExportMenu-BnuhLJ6X.css","assets/exportDocumentTheme-CWkm91c7.js","assets/html2canvasColors-CeWDj_2g.js"])))=>i.map(i=>d[i]);
import{c8 as R}from"./index-C7fBOsGU.js";import{e as O,o as U,q as X,s as Y,N as y,v as C,w as G,x as V,g as J,l as K}from"./ExperienceExportMenu-C4RULNpV.js";import{b as n,a as T,e as Q}from"./exportDocumentTheme-CWkm91c7.js";function Z(t){const o=[{label:"类型",value:O[t.type]},{label:"组织",value:t.organization.trim()},{label:"角色",value:t.role?.trim()||""},{label:"时间",value:t.period.trim()}].filter(e=>e.value&&e.value!==t.title.trim());return{title:t.title.trim(),metadata:o}}const z=18,tt=38,B={fact:"#238653",inferred:"#b7791f",unverified:"#c54f4b",missing:"#8994a0"};function l(t){return t.replace(/[&<>"']/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"})[o])}function L(t,o){const e=Array.from(t.trim());return e.length>o?`${e.slice(0,Math.max(1,o-1)).join("")}…`:e.join("")}function _(t,o,e){const r=Array.from(t.trim()),a=[];for(let s=0;s<r.length&&a.length<e;s+=o)a.push(r.slice(s,s+o).join(""));return r.length>o*e&&a.length>0&&(a[a.length-1]=L(a[a.length-1],o)),a.length>0?a:[""]}function j(t){return typeof t=="number"?t:Number.parseFloat(t??"0")||0}function et(t){const o=j(t.style?.width),e=j(t.style?.height);return`
    <g>
      <rect x="${t.position.x}" y="${t.position.y}" width="${o}" height="${e}" rx="14" fill="#f8fafc" stroke="${n.rule}"/>
      <text x="${t.position.x+o/2}" y="${t.position.y+37}" text-anchor="middle" fill="${n.muted}" font-size="22" font-weight="700" letter-spacing="1">${l(t.data.label)}</text>
    </g>`}function ot(t,o){const{x:e,y:r}=t.position,a=C(t.data.label),s=[a.eyebrow,t.data.onSpine?"主线":null].filter(Boolean).join(" · "),u=G[t.data.status],p=V[t.data.ownership],f=B[t.data.status],b=_(a.body,14,4);let c=r+24;const g=s?`<text x="${e+13}" y="${c}" fill="${n.faint}" font-size="10" font-weight="700" letter-spacing=".7">${l(L(s,u?14:24))}</text>`:"",h=u?`<text x="${e+y-13}" y="${c}" text-anchor="end" fill="${f}" font-size="9.5" font-weight="700">${l(u)}</text>`:"";(g||h)&&(c+=22);const k=b.map((m,x)=>`<tspan x="${e+13}" y="${c+x*20}">${l(m)}</tspan>`).join("");c+=b.length*20+2;const S=p?`<g><rect x="${e+13}" y="${c-14}" width="${Math.max(42,Array.from(p).length*11+22)}" height="16" rx="4" fill="#eef2f7"/><text x="${e+21}" y="${c-3}" fill="${n.muted}" font-size="9.5" font-weight="700">${l(`我${p}`)}</text></g>`:"";p&&(c+=24);const i=t.data.question?_(`待追问：${t.data.question}`,17,2):[],$=i.map((m,x)=>`<tspan x="${e+13}" y="${c+x*16}">${l(m)}</tspan>`).join("");c+=i.length*16+(i.length>0?4:0);const w=t.data.options.map((m,x)=>{const v=c+x*26;return`<g><rect x="${e+13}" y="${v-13}" width="${y-26}" height="21" rx="4" fill="#ffffff" stroke="${n.rule}"/><text x="${e+21}" y="${v+2}" fill="${n.muted}" font-size="9.5">${l(L(m,17))}</text></g>`}).join("");return`
    <g>
      <rect x="${e}" y="${r}" width="${y}" height="${o}" rx="9" fill="#ffffff" stroke="${f}" stroke-width="${t.data.onSpine?2.2:1.7}"${t.data.status==="missing"?' stroke-dasharray="6 4"':""}/>
      ${g}${h}
      <text fill="${n.ink}" font-size="13" font-weight="${t.data.onSpine?700:600}">${k}</text>
      ${S}
      ${$?`<text fill="${n.muted}" font-size="10.5">${$}</text>`:""}
      ${w}
    </g>`}function D(t,o,e){return e?.endsWith("bottom")?{x:t.position.x+y/2,y:t.position.y+o}:e?.endsWith("top")?{x:t.position.x+y/2,y:t.position.y}:e?.endsWith("left")?{x:t.position.x,y:t.position.y+o/2}:{x:t.position.x+y,y:t.position.y+o/2}}function it(t){const o=[["fact","明确事实"],["inferred","AI 补充待确认"],["unverified","内容有冲突"],["missing","待填写"]];let e=4;return o.map(([r,a])=>{const s=`<g><line x1="${e}" y1="${t}" x2="${e+18}" y2="${t}" stroke="${B[r]}" stroke-width="3"${r==="missing"?' stroke-dasharray="5 3"':""}/><text x="${e+25}" y="${t+4}" fill="${n.muted}" font-size="10.5">${l(a)}</text></g>`;return e+=52+Array.from(a).length*11,s}).join("")}function nt(t){if(t.nodes.length===0)return null;const o=U(t),e=o.nodes.filter(i=>i.type==="stageGroup"),r=o.nodes.filter(i=>i.type==="topology"),a=new Map(r.map(i=>[i.id,i])),s=new Map(t.nodes.map(i=>[i.id,X(i)])),u=Math.max(...e.map(i=>i.position.x+j(i.style?.width))),p=Math.max(0,...o.edges.map(i=>i.data?.route==="right-turn"?i.data.via??0:0)),f=Math.max(u,p),b=Math.max(...e.map(i=>i.position.y+j(i.style?.height))),c=o.edges.map(i=>{const $=a.get(i.source),w=a.get(i.target);if(!$||!w)return"";const m=s.get($.id),x=s.get(w.id);if(m===void 0||x===void 0)return"";const v=D($,m,i.sourceHandle),P=D(w,x,i.targetHandle),M=Y({sourceX:v.x,sourceY:v.y,targetX:P.x,targetY:P.y,route:i.data?.route??"horizontal",via:i.data?.via}),H=i.style?.strokeWidth===2,q=H?n.accent:n.faint,F=typeof i.label=="string"&&i.label?`<text x="${M.labelX}" y="${M.labelY-5}" text-anchor="middle" fill="${n.muted}" font-size="10" font-weight="600">${l(i.label)}</text>`:"";return`<path d="${M.path}" fill="none" stroke="${q}" stroke-width="${H?2:1.4}" marker-end="url(#${H?"arrow-main":"arrow-muted"})"/>${F}`}).join(""),g=Math.ceil(f+z*2),h=Math.ceil(b+z*2+tt),k=`<svg xmlns="http://www.w3.org/2000/svg" width="${g}" height="${h}" viewBox="0 0 ${g} ${h}" role="img" aria-label="${l(t.topic||"工作思路图")}" style="font-family:${l(T)}">
    <defs>
      <marker id="arrow-main" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="${n.accent}"/></marker>
      <marker id="arrow-muted" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="${n.faint}"/></marker>
    </defs>
    <rect width="${g}" height="${h}" rx="14" fill="#ffffff"/>
    <g transform="translate(${z} ${z})">
      ${e.map(et).join("")}
      ${c}
      ${r.map(i=>ot(i,s.get(i.id))).join("")}
      ${it(b+24)}
    </g>
  </svg>`;return{alt:t.topic?`工作思路图：${t.topic}，共 ${t.nodes.length} 个节点`:`工作思路图，共 ${t.nodes.length} 个节点`,dataUrl:`data:image/svg+xml;charset=utf-8,${encodeURIComponent(k)}`,height:h,svg:k,width:g}}const rt=/[\\/:*?"<>|]/g;function E(t){return t.trim().replace(rt,"_").replace(/\s+/g," ")||"经历梳理"}function N(t,o){const e=URL.createObjectURL(t),r=document.createElement("a");r.href=e,r.download=o,r.hidden=!0,document.body.append(r),r.click(),r.remove(),URL.revokeObjectURL(e)}function d(t){return t.replace(/[&<>"']/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[o])}const W=`
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
`,at=`
  @media screen { body { min-width: 794px; margin: 0; padding: 32px; background: ${n.canvas}; } .experience-export-document { box-shadow: 0 18px 50px rgba(47,62,78,.14); } }
  @media screen and (max-width: 850px) { body { padding: 0; } .experience-export-document { box-shadow: none; } }
  @media print { body { margin: 0; background: #fff; } .experience-export-document { margin: 0; box-shadow: none; } }
`;function st(t){const o=nt(t);return o?`
    <figure class="topology">
      <figcaption>工作思路图${t.topic?`：${d(t.topic)}`:""}</figcaption>
      <img alt="${d(o.alt)}" data-topology-image="true" height="${o.height}" src="${o.dataUrl}" width="${o.width}">
    </figure>
  `:""}function A(t,o){const e=Z(t),r=e.metadata.map(s=>`
    <div><dt>${s.label}</dt><dd>${d(s.value)}</dd></div>
  `).join(""),a=J(t).map(s=>{const u=K(s.star).map(({field:f})=>`
      <div class="field"><dt>${d(f.label)}</dt><dd>${d(f.value)}</dd></div>
    `).join(""),p=o?.get(s.id);return`
      <section class="project">
        <h2>${d(s.title)}</h2>
        <h3>工作详述</h3>
        <dl class="analysis-grid">${u}</dl>
        ${p?st(p):""}
      </section>
    `}).join("");return`
    <article class="experience-export-document">
      <header class="document-header">
        <h1>${d(e.title)}</h1>
        <dl class="metadata">${r}</dl>
      </header>
      <section class="overview">
        <h2>经历概述</h2>
        <p class="summary">${d(t.summary.value)}</p>
      </section>
      ${a}
    </article>
  `}function I(t,o){return`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${d(t.title)}</title><style>${W}${at}</style></head><body>${A(t,o)}</body></html>`}function ct(t,o){N(new Blob([I(t,o)],{type:"text/html;charset=utf-8"}),`${E(t.title)}.html`)}async function lt(t,o){const{buildExperienceDocxBlob:e}=await R(async()=>{const{buildExperienceDocxBlob:r}=await import("./experienceExportWord-Fhhk8OuE.js");return{buildExperienceDocxBlob:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]));N(await e(t,o),`${E(t.title)}.docx`)}const pt=[".field",".topology img",".topology",".overview",".project"];async function dt(t,o){const e=document.createElement("div");e.style.cssText="position:absolute;left:0;top:0;z-index:-1;transform:translateX(-10000px);background:#fff",e.innerHTML=`<style>${W}</style>${A(t,o)}`,document.body.append(e);try{const r=e.querySelector("article");if(!r)throw new Error("无法生成导出文档，请刷新页面后重试。");await Q(r,`${E(t.title)}.pdf`,{widthPx:794,imageFormat:"PNG",renderScale:2.5,pageBreakSelectors:pt,pageMarginsPx:{continuationTop:48,bottom:48},minimumPageFillRatio:.55})}finally{e.remove()}}const ft=Object.freeze(Object.defineProperty({__proto__:null,buildExperienceDocumentHtml:I,exportExperienceHtml:ct,exportExperiencePdf:dt,exportExperienceWord:lt,safeExperienceFileName:E},Symbol.toStringTag,{value:"Module"}));export{ft as a,nt as b,Z as e};
