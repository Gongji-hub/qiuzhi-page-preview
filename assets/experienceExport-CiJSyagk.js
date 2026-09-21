import{e as X,o as Y,q as O,C as L,s as _,v as S,N as j,w as J,x as K,y as Q,g as V,l as Z,k as tt}from"./ExperienceExportMenu-SNeGRiij.js";import{a as r,e as N}from"./exportDocumentTheme-Ddd9Ilk8.js";import{e as et}from"./exportElementPdf-DdHD5HKg.js";import"./index-DUr9XpLx.js";import"./session-B15EJOhV.js";import"./send-CD7dixJj.js";import"./planEntitlements-okUu8Y_U.js";import"./useMembershipCheckout-BeJSPTkG.js";import"./membershipCatalog-Ch6hCXcg.js";import"./MembershipCheckoutDialog-CuXj9GaR.js";import"./index-gDfcjQYw.js";import"./headphones-Dh3pjwDx.js";import"./minus-BngLcWN8.js";import"./chevron-right-g0xaC5Kd.js";import"./shield-check-BYRQtC8h.js";import"./arrow-left-Q3bm8Cf7.js";import"./resumeFieldConstraints-D4XUuQZL.js";import"./rotate-cw-D4eOE12I.js";import"./download-WjSfcJTl.js";import"./lock-B_BDks_F.js";import"./html2canvasColors-CeWDj_2g.js";function ot(t){const e=[{label:"类型",value:X[t.type]},{label:"组织",value:t.organization.trim()},{label:"角色",value:t.role?.trim()||""},{label:"时间",value:t.period.trim()}].filter(o=>o.value&&o.value!==t.title.trim());return{title:t.title.trim(),metadata:e}}const z=18,it=38,W={fact:"#238653",inferred:"#b7791f",unverified:"#c54f4b",missing:"#8994a0"};function p(t){return t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"})[e])}function C(t,e){const o=Array.from(t.trim());return o.length>e?`${o.slice(0,Math.max(1,e-1)).join("")}…`:o.join("")}function T(t,e,o){const n=Array.from(t.trim()),a=[];for(let s=0;s<n.length&&a.length<o;s+=e)a.push(n.slice(s,s+e).join(""));return n.length>e*o&&a.length>0&&(a[a.length-1]=C(a[a.length-1],e)),a.length>0?a:[""]}function H(t){return typeof t=="number"?t:Number.parseFloat(t??"0")||0}function rt(t){const e=H(t.style?.width),o=H(t.style?.height);return`
    <g>
      <rect x="${t.position.x}" y="${t.position.y}" width="${e}" height="${o}" rx="14" fill="#f8fafc" stroke="${r.rule}"/>
      <text x="${t.position.x+e/2}" y="${t.position.y+37}" text-anchor="middle" fill="${r.muted}" font-size="22" font-weight="700" letter-spacing="1">${p(t.data.label)}</text>
    </g>`}function nt(t,e){const{x:o,y:n}=t.position,a=J(t.data.label),s=[a.eyebrow,t.data.onSpine?"主线":null].filter(Boolean).join(" · "),l=K[t.data.status],m=Q[t.data.ownership],f=W[t.data.status],h=T(a.body,14,4);let c=n+24;const w=s?`<text x="${o+13}" y="${c}" fill="${r.faint}" font-size="10" font-weight="700" letter-spacing=".7">${p(C(s,l?14:24))}</text>`:"",g=l?`<text x="${o+j-13}" y="${c}" text-anchor="end" fill="${f}" font-size="9.5" font-weight="700">${p(l)}</text>`:"";(w||g)&&(c+=22);const $=h.map((x,u)=>`<tspan x="${o+13}" y="${c+u*20}">${p(x)}</tspan>`).join("");c+=h.length*20+2;const k=m?`<g><rect x="${o+13}" y="${c-14}" width="${Math.max(42,Array.from(m).length*11+22)}" height="16" rx="4" fill="#eef2f7"/><text x="${o+21}" y="${c-3}" fill="${r.muted}" font-size="9.5" font-weight="700">${p(`我${m}`)}</text></g>`:"";m&&(c+=24);const v=t.data.question?T(`待追问：${t.data.question}`,17,2):[],i=v.map((x,u)=>`<tspan x="${o+13}" y="${c+u*16}">${p(x)}</tspan>`).join("");c+=v.length*16+(v.length>0?4:0);const y=t.data.options.map((x,u)=>{const b=c+u*26;return`<g><rect x="${o+13}" y="${b-13}" width="${j-26}" height="21" rx="4" fill="#ffffff" stroke="${r.rule}"/><text x="${o+21}" y="${b+2}" fill="${r.muted}" font-size="9.5">${p(C(x,17))}</text></g>`}).join("");return`
    <g>
      <rect x="${o}" y="${n}" width="${j}" height="${e}" rx="9" fill="#ffffff" stroke="${f}" stroke-width="${t.data.onSpine?2.2:1.7}"${t.data.status==="missing"?' stroke-dasharray="6 4"':""}/>
      ${w}${g}
      <text fill="${r.ink}" font-size="13" font-weight="${t.data.onSpine?700:600}">${$}</text>
      ${k}
      ${i?`<text fill="${r.muted}" font-size="10.5">${i}</text>`:""}
      ${y}
    </g>`}function at(t){const{x:e,y:o}=t.position;return`<g><rect x="${e}" y="${o}" width="${S}" height="${L}" rx="18" fill="#ffffff" stroke="${r.rule}"/><text x="${e+S/2}" y="${o+L/2+4}" text-anchor="middle" fill="${r.muted}" font-size="12" font-weight="600">${p(t.data.label)}</text></g>`}function I(t,e,o){const n=t.type==="solutionChoice"?S:j;return o?.endsWith("bottom")?{x:t.position.x+n/2,y:t.position.y+e}:o?.endsWith("top")?{x:t.position.x+n/2,y:t.position.y}:o?.endsWith("left")?{x:t.position.x,y:t.position.y+e/2}:{x:t.position.x+n,y:t.position.y+e/2}}function st(t){const e=[["fact","明确事实"],["inferred","AI 补充待确认"],["unverified","内容有冲突"],["missing","待填写"]];let o=4;return e.map(([n,a])=>{const s=`<g><line x1="${o}" y1="${t}" x2="${o+18}" y2="${t}" stroke="${W[n]}" stroke-width="3"${n==="missing"?' stroke-dasharray="5 3"':""}/><text x="${o+25}" y="${t+4}" fill="${r.muted}" font-size="10.5">${p(a)}</text></g>`;return o+=52+Array.from(a).length*11,s}).join("")}function ct(t){if(t.nodes.length===0)return null;const e=Y(t),o=e.nodes.filter(i=>i.type==="stageGroup"),n=e.nodes.filter(i=>i.type==="topology"),a=e.nodes.filter(i=>i.type==="solutionChoice"),s=new Map([...n,...a].map(i=>[i.id,i])),l=new Map(t.nodes.map(i=>[i.id,O(i)]));for(const i of a)l.set(i.id,L);const m=Math.max(...o.map(i=>i.position.x+H(i.style?.width))),f=Math.max(0,...e.edges.map(i=>i.data?.route==="right-turn"?i.data.via??0:0)),h=Math.max(m,f),c=Math.max(...o.map(i=>i.position.y+H(i.style?.height))),w=e.edges.map(i=>{const y=s.get(i.source),x=s.get(i.target);if(!y||!x)return"";const u=l.get(y.id),b=l.get(x.id);if(u===void 0||b===void 0)return"";const D=I(y,u,i.sourceHandle),P=I(x,b,i.targetHandle),E=_({sourceX:D.x,sourceY:D.y,targetX:P.x,targetY:P.y,route:i.data?.route??"horizontal",via:i.data?.via,detour:i.data?.detour}),M=i.style?.strokeWidth===2,F=M?r.accent:r.faint,G=typeof i.label=="string"&&i.label?`<text x="${E.labelX}" y="${E.labelY-5}" text-anchor="middle" fill="${r.muted}" font-size="10" font-weight="600">${p(i.label)}</text>`:"",R=i.markerEnd?` marker-end="url(#${M?"arrow-main":"arrow-muted"})"`:"",U=i.style?.strokeDasharray?` stroke-dasharray="${p(String(i.style.strokeDasharray))}"`:"";return`<path d="${E.path}" fill="none" stroke="${F}" stroke-width="${M?2:1.4}"${R}${U}/>${G}`}).join(""),g=Math.ceil(h+z*2),$=Math.ceil(c+z*2+it),k=`<svg xmlns="http://www.w3.org/2000/svg" width="${g}" height="${$}" viewBox="0 0 ${g} ${$}" role="img" aria-label="${p(t.topic||"工作思路图")}" style="font-family:${p(N)}">
    <defs>
      <marker id="arrow-main" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="${r.accent}"/></marker>
      <marker id="arrow-muted" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="${r.faint}"/></marker>
    </defs>
    <rect width="${g}" height="${$}" rx="14" fill="#ffffff"/>
    <g transform="translate(${z} ${z})">
      ${o.map(rt).join("")}
      ${w}
      ${a.map(at).join("")}
      ${n.map(i=>nt(i,l.get(i.id))).join("")}
      ${st(c+24)}
    </g>
  </svg>`;return{alt:t.topic?`工作思路图：${t.topic}，共 ${t.nodes.length} 个节点`:`工作思路图，共 ${t.nodes.length} 个节点`,dataUrl:`data:image/svg+xml;charset=utf-8,${encodeURIComponent(k)}`,height:$,svg:k,width:g}}const pt=/[\\/:*?"<>|]/g;function B(t){return t.trim().replace(pt,"_").replace(/\s+/g," ")||"经历梳理"}function lt(t,e){const o=URL.createObjectURL(t),n=document.createElement("a");n.href=o,n.download=e,n.hidden=!0,document.body.append(n),n.click(),n.remove(),URL.revokeObjectURL(o)}function d(t){return t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}const q=`
  .experience-export-document, .experience-export-document * { box-sizing: border-box; }
  .experience-export-document { width: 794px; min-height: 1123px; margin: 0 auto; padding: 64px 68px; background: ${r.surface}; color: ${r.ink}; font-family: ${N}; font-size: 13.5px; line-height: 1.76; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .experience-export-document h1 { margin: 0; color: ${r.ink}; font-size: 30px; font-weight: 750; letter-spacing: -.035em; line-height: 1.18; }
  .experience-export-document h2 { margin: 34px 0 14px; border-bottom: 1px solid ${r.rule}; padding-bottom: 9px; color: ${r.accent}; font-size: 17px; font-weight: 750; letter-spacing: .03em; }
  .experience-export-document h3 { margin: 22px 0 10px; color: #344250; font-size: 13px; font-weight: 750; letter-spacing: .04em; }
  .experience-export-document h4 { margin: 16px 0 8px; color: ${r.faint}; font-size: 11px; font-weight: 750; letter-spacing: .08em; }
  .experience-export-document p { margin: 0; white-space: pre-wrap; }
  .experience-export-document .document-header { border-top: 5px solid ${r.accent}; padding-top: 22px; }
  .experience-export-document .metadata { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 18px; margin: 24px 0 0; border-bottom: 1px solid ${r.rule}; padding-bottom: 22px; }
  .experience-export-document .metadata div { min-width: 0; }
  .experience-export-document .metadata dt { color: ${r.faint}; font-size: 10px; font-weight: 650; letter-spacing: .08em; }
  .experience-export-document .metadata dd { margin: 4px 0 0; color: #3e4b58; font-size: 12px; font-weight: 650; }
  .experience-export-document .summary { color: #344250; }
  .experience-export-document .overview { border-left: 3px solid ${r.accent}; padding: 2px 0 2px 18px; }
  .experience-export-document .overview h2 { margin-top: 30px; border-bottom: 0; padding-bottom: 0; }
  .experience-export-document .project { break-inside: avoid; }
  .experience-export-document dl { margin: 0; }
  .experience-export-document .analysis-grid { display: grid; grid-template-columns: 1fr; gap: 13px; }
  .experience-export-document .field { break-inside: avoid; border-top: 1px solid ${r.rule}; padding-top: 9px; }
  .experience-export-document .field dt { color: #344250; font-size: 12px; font-weight: 750; }
  .experience-export-document .field dd { margin: 3px 0 0; color: ${r.muted}; white-space: pre-wrap; }
  .experience-export-document .topology { break-inside: avoid; margin: 22px 0 0; }
  .experience-export-document .topology figcaption { margin: 0 0 10px; color: #344250; font-size: 13px; font-weight: 750; letter-spacing: .04em; }
  .experience-export-document .topology img { display: block; width: 100%; height: auto; max-height: 720px; margin: 0 auto; border: 1px solid ${r.rule}; border-radius: 8px; object-fit: contain; }
`,dt=`
  @media screen { body { min-width: 794px; margin: 0; padding: 32px; background: ${r.canvas}; } .experience-export-document { box-shadow: 0 18px 50px rgba(47,62,78,.14); } }
  @media screen and (max-width: 850px) { body { padding: 0; } .experience-export-document { box-shadow: none; } }
  @media print { body { margin: 0; background: #fff; } .experience-export-document { margin: 0; box-shadow: none; } }
`;function mt(t){const e=ct(t);return e?`
    <figure class="topology">
      <figcaption>工作思路图${t.topic?`：${d(t.topic)}`:""}</figcaption>
      <img alt="${d(e.alt)}" data-topology-image="true" height="${e.height}" src="${e.dataUrl}" width="${e.width}">
    </figure>
  `:""}function A(t,e){const o=ot(t),n=o.metadata.map(s=>`
    <div><dt>${s.label}</dt><dd>${d(s.value)}</dd></div>
  `).join(""),a=V(t).map(s=>{const l=Z(s.star).map(({field:h})=>`
      <div class="field"><dt>${d(h.label)}</dt><dd>${d(h.value)}</dd></div>
    `).join(""),m=tt(s,t),f=e?.get(s.id);return`
      <section class="project">
        <h2>${d(s.title)}</h2>
        ${m?`<h3>工作总述</h3><p>${d(m.value)}</p>`:""}
        <h3>工作详述</h3>
        <dl class="analysis-grid">${l}</dl>
        ${f?mt(f):""}
      </section>
    `}).join("");return`
    <article class="experience-export-document">
      <header class="document-header">
        <h1>${d(o.title)}</h1>
        <dl class="metadata">${n}</dl>
      </header>
      <section class="overview">
        <h2>经历概述</h2>
        <p class="summary">${d(t.summary.value)}</p>
      </section>
      ${a}
    </article>
  `}function xt(t,e){return`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${d(t.title)}</title><style>${q}${dt}</style></head><body>${A(t,e)}</body></html>`}function Nt(t,e){lt(new Blob([xt(t,e)],{type:"text/html;charset=utf-8"}),`${B(t.title)}.html`)}const ut=[".field",".topology img",".topology",".overview",".project"];async function Wt(t,e){const o=document.createElement("div");o.style.cssText="position:absolute;left:0;top:0;z-index:-1;transform:translateX(-10000px);background:#fff",o.innerHTML=`<style>${q}</style>${A(t,e)}`,document.body.append(o);try{const n=o.querySelector("article");if(!n)throw new Error("无法生成导出文档，请刷新页面后重试。");await et(n,`${B(t.title)}.pdf`,{widthPx:794,imageFormat:"PNG",renderScale:2.5,pageBreakSelectors:ut,pageMarginsPx:{continuationTop:48,bottom:48},minimumPageFillRatio:.55})}finally{o.remove()}}export{xt as buildExperienceDocumentHtml,Nt as exportExperienceHtml,Wt as exportExperiencePdf,B as safeExperienceFileName};
