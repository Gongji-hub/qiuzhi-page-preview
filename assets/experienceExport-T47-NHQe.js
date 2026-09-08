const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/experienceExportWord-y7huuWGz.js","assets/index-Cqn09zkh.js","assets/ExperienceExportMenu-BYMChy7F.js","assets/index-ByeDTlrP.js","assets/session-BE_DFqmd.js","assets/index-CkLKeqVq.css","assets/send-Dj0Eeu90.js","assets/planEntitlements-okUu8Y_U.js","assets/useMembershipCheckout-CEem_A9b.js","assets/membershipCatalog-DUIDLZ9f.js","assets/MembershipCheckoutDialog-_09sNA3Z.js","assets/index-Dlc5b_rD.js","assets/headphones-DH24jZer.js","assets/minus-C1BeHpUC.js","assets/chevron-right-BIt9hWvm.js","assets/shield-check-CxyY01eV.js","assets/MembershipCheckoutDialog-BLCFJ64y.css","assets/resumeFieldConstraints-D8Jdgcds.js","assets/share-2-CcHl1szW.js","assets/download-DuwGgTWk.js","assets/lock-DBWnqrzh.js","assets/ExperienceExportMenu-BnuhLJ6X.css","assets/exportDocumentTheme-BJhbVYvx.js","assets/html2canvasColors-CeWDj_2g.js"])))=>i.map(i=>d[i]);
import{cj as R}from"./index-ByeDTlrP.js";import{e as O,q as U,s as X,v as Y,N as b,w as C,x as G,y as V,g as J,m as K,l as Q}from"./ExperienceExportMenu-BYMChy7F.js";import{b as i,a as T,e as Z}from"./exportDocumentTheme-BJhbVYvx.js";function tt(t){const o=[{label:"类型",value:O[t.type]},{label:"组织",value:t.organization.trim()},{label:"角色",value:t.role?.trim()||""},{label:"时间",value:t.period.trim()}].filter(e=>e.value&&e.value!==t.title.trim());return{title:t.title.trim(),metadata:o}}const z=18,et=38,B={fact:"#238653",inferred:"#b7791f",unverified:"#c54f4b",missing:"#8994a0"};function l(t){return t.replace(/[&<>"']/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"})[o])}function L(t,o){const e=Array.from(t.trim());return e.length>o?`${e.slice(0,Math.max(1,o-1)).join("")}…`:e.join("")}function _(t,o,e){const r=Array.from(t.trim()),s=[];for(let a=0;a<r.length&&s.length<e;a+=o)s.push(r.slice(a,a+o).join(""));return r.length>o*e&&s.length>0&&(s[s.length-1]=L(s[s.length-1],o)),s.length>0?s:[""]}function j(t){return typeof t=="number"?t:Number.parseFloat(t??"0")||0}function ot(t){const o=j(t.style?.width),e=j(t.style?.height);return`
    <g>
      <rect x="${t.position.x}" y="${t.position.y}" width="${o}" height="${e}" rx="14" fill="#f8fafc" stroke="${i.rule}"/>
      <text x="${t.position.x+o/2}" y="${t.position.y+37}" text-anchor="middle" fill="${i.muted}" font-size="22" font-weight="700" letter-spacing="1">${l(t.data.label)}</text>
    </g>`}function nt(t,o){const{x:e,y:r}=t.position,s=C(t.data.label),a=[s.eyebrow,t.data.onSpine?"主线":null].filter(Boolean).join(" · "),f=G[t.data.status],d=V[t.data.ownership],g=B[t.data.status],m=_(s.body,14,4);let c=r+24;const h=a?`<text x="${e+13}" y="${c}" fill="${i.faint}" font-size="10" font-weight="700" letter-spacing=".7">${l(L(a,f?14:24))}</text>`:"",$=f?`<text x="${e+b-13}" y="${c}" text-anchor="end" fill="${g}" font-size="9.5" font-weight="700">${l(f)}</text>`:"";(h||$)&&(c+=22);const k=m.map((x,u)=>`<tspan x="${e+13}" y="${c+u*20}">${l(x)}</tspan>`).join("");c+=m.length*20+2;const S=d?`<g><rect x="${e+13}" y="${c-14}" width="${Math.max(42,Array.from(d).length*11+22)}" height="16" rx="4" fill="#eef2f7"/><text x="${e+21}" y="${c-3}" fill="${i.muted}" font-size="9.5" font-weight="700">${l(`我${d}`)}</text></g>`:"";d&&(c+=24);const n=t.data.question?_(`待追问：${t.data.question}`,17,2):[],y=n.map((x,u)=>`<tspan x="${e+13}" y="${c+u*16}">${l(x)}</tspan>`).join("");c+=n.length*16+(n.length>0?4:0);const w=t.data.options.map((x,u)=>{const v=c+u*26;return`<g><rect x="${e+13}" y="${v-13}" width="${b-26}" height="21" rx="4" fill="#ffffff" stroke="${i.rule}"/><text x="${e+21}" y="${v+2}" fill="${i.muted}" font-size="9.5">${l(L(x,17))}</text></g>`}).join("");return`
    <g>
      <rect x="${e}" y="${r}" width="${b}" height="${o}" rx="9" fill="#ffffff" stroke="${g}" stroke-width="${t.data.onSpine?2.2:1.7}"${t.data.status==="missing"?' stroke-dasharray="6 4"':""}/>
      ${h}${$}
      <text fill="${i.ink}" font-size="13" font-weight="${t.data.onSpine?700:600}">${k}</text>
      ${S}
      ${y?`<text fill="${i.muted}" font-size="10.5">${y}</text>`:""}
      ${w}
    </g>`}function D(t,o,e){return e?.endsWith("bottom")?{x:t.position.x+b/2,y:t.position.y+o}:e?.endsWith("top")?{x:t.position.x+b/2,y:t.position.y}:e?.endsWith("left")?{x:t.position.x,y:t.position.y+o/2}:{x:t.position.x+b,y:t.position.y+o/2}}function it(t){const o=[["fact","明确事实"],["inferred","AI 补充待确认"],["unverified","内容有冲突"],["missing","待填写"]];let e=4;return o.map(([r,s])=>{const a=`<g><line x1="${e}" y1="${t}" x2="${e+18}" y2="${t}" stroke="${B[r]}" stroke-width="3"${r==="missing"?' stroke-dasharray="5 3"':""}/><text x="${e+25}" y="${t+4}" fill="${i.muted}" font-size="10.5">${l(s)}</text></g>`;return e+=52+Array.from(s).length*11,a}).join("")}function rt(t){if(t.nodes.length===0)return null;const o=U(t),e=o.nodes.filter(n=>n.type==="stageGroup"),r=o.nodes.filter(n=>n.type==="topology"),s=new Map(r.map(n=>[n.id,n])),a=new Map(t.nodes.map(n=>[n.id,X(n)])),f=Math.max(...e.map(n=>n.position.x+j(n.style?.width))),d=Math.max(0,...o.edges.map(n=>n.data?.route==="right-turn"?n.data.via??0:0)),g=Math.max(f,d),m=Math.max(...e.map(n=>n.position.y+j(n.style?.height))),c=o.edges.map(n=>{const y=s.get(n.source),w=s.get(n.target);if(!y||!w)return"";const x=a.get(y.id),u=a.get(w.id);if(x===void 0||u===void 0)return"";const v=D(y,x,n.sourceHandle),P=D(w,u,n.targetHandle),M=Y({sourceX:v.x,sourceY:v.y,targetX:P.x,targetY:P.y,route:n.data?.route??"horizontal",via:n.data?.via}),H=n.style?.strokeWidth===2,q=H?i.accent:i.faint,F=typeof n.label=="string"&&n.label?`<text x="${M.labelX}" y="${M.labelY-5}" text-anchor="middle" fill="${i.muted}" font-size="10" font-weight="600">${l(n.label)}</text>`:"";return`<path d="${M.path}" fill="none" stroke="${q}" stroke-width="${H?2:1.4}" marker-end="url(#${H?"arrow-main":"arrow-muted"})"/>${F}`}).join(""),h=Math.ceil(g+z*2),$=Math.ceil(m+z*2+et),k=`<svg xmlns="http://www.w3.org/2000/svg" width="${h}" height="${$}" viewBox="0 0 ${h} ${$}" role="img" aria-label="${l(t.topic||"工作思路图")}" style="font-family:${l(T)}">
    <defs>
      <marker id="arrow-main" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="${i.accent}"/></marker>
      <marker id="arrow-muted" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="${i.faint}"/></marker>
    </defs>
    <rect width="${h}" height="${$}" rx="14" fill="#ffffff"/>
    <g transform="translate(${z} ${z})">
      ${e.map(ot).join("")}
      ${c}
      ${r.map(n=>nt(n,a.get(n.id))).join("")}
      ${it(m+24)}
    </g>
  </svg>`;return{alt:t.topic?`工作思路图：${t.topic}，共 ${t.nodes.length} 个节点`:`工作思路图，共 ${t.nodes.length} 个节点`,dataUrl:`data:image/svg+xml;charset=utf-8,${encodeURIComponent(k)}`,height:$,svg:k,width:h}}const at=/[\\/:*?"<>|]/g;function E(t){return t.trim().replace(at,"_").replace(/\s+/g," ")||"经历梳理"}function N(t,o){const e=URL.createObjectURL(t),r=document.createElement("a");r.href=e,r.download=o,r.hidden=!0,document.body.append(r),r.click(),r.remove(),URL.revokeObjectURL(e)}function p(t){return t.replace(/[&<>"']/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[o])}const W=`
  .experience-export-document, .experience-export-document * { box-sizing: border-box; }
  .experience-export-document { width: 794px; min-height: 1123px; margin: 0 auto; padding: 64px 68px; background: ${i.surface}; color: ${i.ink}; font-family: ${T}; font-size: 13.5px; line-height: 1.76; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .experience-export-document h1 { margin: 0; color: ${i.ink}; font-size: 30px; font-weight: 750; letter-spacing: -.035em; line-height: 1.18; }
  .experience-export-document h2 { margin: 34px 0 14px; border-bottom: 1px solid ${i.rule}; padding-bottom: 9px; color: ${i.accent}; font-size: 17px; font-weight: 750; letter-spacing: .03em; }
  .experience-export-document h3 { margin: 22px 0 10px; color: #344250; font-size: 13px; font-weight: 750; letter-spacing: .04em; }
  .experience-export-document h4 { margin: 16px 0 8px; color: ${i.faint}; font-size: 11px; font-weight: 750; letter-spacing: .08em; }
  .experience-export-document p { margin: 0; white-space: pre-wrap; }
  .experience-export-document .document-header { border-top: 5px solid ${i.accent}; padding-top: 22px; }
  .experience-export-document .metadata { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 18px; margin: 24px 0 0; border-bottom: 1px solid ${i.rule}; padding-bottom: 22px; }
  .experience-export-document .metadata div { min-width: 0; }
  .experience-export-document .metadata dt { color: ${i.faint}; font-size: 10px; font-weight: 650; letter-spacing: .08em; }
  .experience-export-document .metadata dd { margin: 4px 0 0; color: #3e4b58; font-size: 12px; font-weight: 650; }
  .experience-export-document .summary { color: #344250; }
  .experience-export-document .overview { border-left: 3px solid ${i.accent}; padding: 2px 0 2px 18px; }
  .experience-export-document .overview h2 { margin-top: 30px; border-bottom: 0; padding-bottom: 0; }
  .experience-export-document .project { break-inside: avoid; }
  .experience-export-document dl { margin: 0; }
  .experience-export-document .analysis-grid { display: grid; grid-template-columns: 1fr; gap: 13px; }
  .experience-export-document .field { break-inside: avoid; border-top: 1px solid ${i.rule}; padding-top: 9px; }
  .experience-export-document .field dt { color: #344250; font-size: 12px; font-weight: 750; }
  .experience-export-document .field dd { margin: 3px 0 0; color: ${i.muted}; white-space: pre-wrap; }
  .experience-export-document .topology { break-inside: avoid; margin: 22px 0 0; }
  .experience-export-document .topology figcaption { margin: 0 0 10px; color: #344250; font-size: 13px; font-weight: 750; letter-spacing: .04em; }
  .experience-export-document .topology img { display: block; width: 100%; height: auto; max-height: 720px; margin: 0 auto; border: 1px solid ${i.rule}; border-radius: 8px; object-fit: contain; }
`,st=`
  @media screen { body { min-width: 794px; margin: 0; padding: 32px; background: ${i.canvas}; } .experience-export-document { box-shadow: 0 18px 50px rgba(47,62,78,.14); } }
  @media screen and (max-width: 850px) { body { padding: 0; } .experience-export-document { box-shadow: none; } }
  @media print { body { margin: 0; background: #fff; } .experience-export-document { margin: 0; box-shadow: none; } }
`;function ct(t){const o=rt(t);return o?`
    <figure class="topology">
      <figcaption>工作思路图${t.topic?`：${p(t.topic)}`:""}</figcaption>
      <img alt="${p(o.alt)}" data-topology-image="true" height="${o.height}" src="${o.dataUrl}" width="${o.width}">
    </figure>
  `:""}function A(t,o){const e=tt(t),r=e.metadata.map(a=>`
    <div><dt>${a.label}</dt><dd>${p(a.value)}</dd></div>
  `).join(""),s=J(t).map(a=>{const f=K(a.star).map(({field:m})=>`
      <div class="field"><dt>${p(m.label)}</dt><dd>${p(m.value)}</dd></div>
    `).join(""),d=Q(a,t),g=o?.get(a.id);return`
      <section class="project">
        <h2>${p(a.title)}</h2>
        ${d?`<h3>工作总述</h3><p>${p(d.value)}</p>`:""}
        <h3>工作详述</h3>
        <dl class="analysis-grid">${f}</dl>
        ${g?ct(g):""}
      </section>
    `}).join("");return`
    <article class="experience-export-document">
      <header class="document-header">
        <h1>${p(e.title)}</h1>
        <dl class="metadata">${r}</dl>
      </header>
      <section class="overview">
        <h2>经历概述</h2>
        <p class="summary">${p(t.summary.value)}</p>
      </section>
      ${s}
    </article>
  `}function I(t,o){return`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${p(t.title)}</title><style>${W}${st}</style></head><body>${A(t,o)}</body></html>`}function lt(t,o){N(new Blob([I(t,o)],{type:"text/html;charset=utf-8"}),`${E(t.title)}.html`)}async function pt(t,o){const{buildExperienceDocxBlob:e}=await R(async()=>{const{buildExperienceDocxBlob:r}=await import("./experienceExportWord-y7huuWGz.js");return{buildExperienceDocxBlob:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]));N(await e(t,o),`${E(t.title)}.docx`)}const dt=[".field",".topology img",".topology",".overview",".project"];async function mt(t,o){const e=document.createElement("div");e.style.cssText="position:absolute;left:0;top:0;z-index:-1;transform:translateX(-10000px);background:#fff",e.innerHTML=`<style>${W}</style>${A(t,o)}`,document.body.append(e);try{const r=e.querySelector("article");if(!r)throw new Error("无法生成导出文档，请刷新页面后重试。");await Z(r,`${E(t.title)}.pdf`,{widthPx:794,imageFormat:"PNG",renderScale:2.5,pageBreakSelectors:dt,pageMarginsPx:{continuationTop:48,bottom:48},minimumPageFillRatio:.55})}finally{e.remove()}}const gt=Object.freeze(Object.defineProperty({__proto__:null,buildExperienceDocumentHtml:I,exportExperienceHtml:lt,exportExperiencePdf:mt,exportExperienceWord:pt,safeExperienceFileName:E},Symbol.toStringTag,{value:"Module"}));export{gt as a,rt as b,tt as e};
