import{c3 as w}from"./index-C5giHCIu.js";const u="resume-editor-preview",l="library-resume-styled-preview",h=new Map,d=new Map;let m;const b=24,x=8,E=512,v=.9,R=160*1024,S=new Set(["data-alignment","data-header-mode","data-resume-template","data-section","role","type"]);function N(){return document.getElementById(u)??document.getElementById(l)}function _(e){return w(e)}function $(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function q(e){const t=Number(/scale\(([\d.]+)\)/.exec(e.style.transform||"")?.[1]);!Number.isFinite(t)||t<=0||t>=1||(e.style.removeProperty("transform"),e.style.removeProperty("transform-origin"),e.style.setProperty("width","100%"),e.style.setProperty("zoom",String(t)))}function k(e){const t=typeof e.className=="string"?e.className:"";return t.includes("min-h-screen")||t.includes("min-h-full")||t.includes("min-h-[297")?!0:/min-height\s*:\s*(100vh|100%|297mm)/i.test(e.getAttribute("style")??"")}function U(e,t=!1){(t?[e,...e.querySelectorAll("*")]:[...e.querySelectorAll("*")]).forEach(n=>{k(n)&&n.style.setProperty("min-height","0","important")})}function j(e){e.querySelectorAll(".page-break-line, [data-source-highlight-marker], [data-resume-selection-marker], [data-resume-inline-editor]").forEach(t=>t.remove()),e.querySelectorAll("mark[data-source-highlight], mark[data-resume-selection-decoration], mark[data-resume-review-diff]").forEach(t=>{t.replaceWith(...Array.from(t.childNodes))}),e.removeAttribute("data-editable"),e.querySelectorAll("[contenteditable]").forEach(t=>t.removeAttribute("contenteditable")),e.querySelectorAll("[data-resume-section-id]").forEach(t=>{t.style.backgroundColor="transparent",t.style.boxShadow="none",t.style.cursor="default"})}function A(e,t){const r=e.replace(/::[a-z-]+(?:\([^)]*\))?/gi,"");if(/(^|,)\s*(?::root|html|body)(?=\s|,|\.|:|#|\[|$)/i.test(r))return!0;try{return t.matches(r)||t.querySelector(r)!==null}catch{return!0}}function f(e,t,r){if(e.type===CSSRule.FONT_FACE_RULE||e.type===CSSRule.IMPORT_RULE)return r?e.cssText:"";if("selectorText"in e&&typeof e.selectorText=="string")return A(e.selectorText,t)?e.cssText:"";if("cssRules"in e&&e.cssRules instanceof CSSRuleList){const n=Array.from(e.cssRules).map(s=>f(s,t,r)).filter(Boolean).join(`
`);if(!n)return"";const a=e.cssText.indexOf("{");return a>=0?`${e.cssText.slice(0,a)}{${n}}`:e.cssText}return e.cssText}function g(e,t,r,n){if(!e.has(t)&&e.size>=n){const a=e.keys().next().value;a!==void 0&&e.delete(a)}e.set(t,r)}function C(e){const t=new Set;[e,...e.querySelectorAll("*")].forEach(a=>{const s=[];let i=a;for(;i&&e.contains(i);){const o=[i.tagName.toLowerCase()];if(i.id&&o.push(`#${i.id}`),i.classList.forEach(c=>o.push(`.${c}`)),Array.from(i.attributes).forEach(({name:c,value:y})=>{if(!(c==="id"||c==="class"||c==="style")){if(S.has(c)){o.push(`[${c}=${y}]`);return}o.push(`[${c}]`)}}),s.unshift(o.join("")),i===e)break;i=i.parentElement}t.add(s.join(">"))});let n=2166136261;for(const a of[...t].sort().join("|"))n^=a.charCodeAt(0),n=Math.imul(n,16777619);return(n>>>0).toString(36)}function D(e={}){const t=e.includeFontFaces??!0,r=e.root&&e.cacheKey?`${t?"with-fonts":"without-fonts"}:${e.cacheKey}:${C(e.root)}:${document.styleSheets.length}`:void 0;if(r){const a=h.get(r);if(a!==void 0)return a}const n=Array.from(document.styleSheets).map(a=>{try{return Array.from(a.cssRules).map(s=>e.root?f(s,e.root,t):t||s.type!==CSSRule.FONT_FACE_RULE&&s.type!==CSSRule.IMPORT_RULE?s.cssText:"").filter(Boolean).join(`
`)}catch{return""}}).join(`
`);return r&&g(h,r,n,b),n}function I(e){return new Promise((t,r)=>{const n=new FileReader;n.addEventListener("load",()=>typeof n.result=="string"?t(n.result):r(new Error("图片无法嵌入导出文档。")),{once:!0}),n.addEventListener("error",()=>r(new Error("图片无法嵌入导出文档。")),{once:!0}),n.readAsDataURL(e)})}function T(e){return new Promise(t=>{e.toBlob(t,"image/webp",v)})}async function P(e){if(e.size<=R||!e.type.startsWith("image/")||typeof createImageBitmap!="function")return e;let t;try{t=await createImageBitmap(e);const r=Math.min(1,E/Math.max(t.width,t.height)),n=Math.max(1,Math.round(t.width*r)),a=Math.max(1,Math.round(t.height*r)),s=document.createElement("canvas");s.width=n,s.height=a;const i=s.getContext("2d");if(!i)return e;i.drawImage(t,0,0,n,a);const o=await T(s);return o?.type==="image/webp"&&o.size<e.size?o:e}catch{return e}finally{t?.close()}}function M(e){const t=e.indexOf(",");if(!e.startsWith("data:")||t<0)throw new Error("图片数据地址无法解析。");const r=e.slice(5,t),n=r.split(";",1)[0]||"application/octet-stream",a=e.slice(t+1);if(!r.toLowerCase().includes(";base64"))return new Blob([decodeURIComponent(a)],{type:n});const s=atob(a),i=new Uint8Array(s.length);for(let o=0;o<s.length;o+=1)i[o]=s.charCodeAt(o);return new Blob([i],{type:n})}async function p(e,t){let r;if(e.startsWith("data:"))r=M(e);else{const n=await fetch(e);if(!n.ok)return null;r=await n.blob()}return I(t?await P(r):r)}function B(e,t){if(e.startsWith("data:")){const s=`${t?"compressed":"original"}:${e}`;if(m?.key===s)return m.pending;const i=p(e,t).catch(()=>null),o={key:s,pending:i};return m=o,i.then(c=>{!c&&m===o&&(m=void 0)}),i}const r=`${t?"compressed":"original"}:${e}`,n=d.get(r);if(n)return n;const a=p(e,t).catch(()=>null);return g(d,r,a,x),a.then(s=>{!s&&d.get(r)===a&&d.delete(r)}),a}async function O(e,t={}){await Promise.all(Array.from(e.getElementsByTagName("img")).map(async r=>{if(!r.src||!t.compress&&r.src.startsWith("data:"))return;const n=await B(r.src,t.compress===!0);n&&(r.src=n)}))}function L(){return`
    #${u} .min-h-screen,
    #${u} .min-h-full,
    #${u} [class*="min-h-[297"],
    #${l} .min-h-screen,
    #${l} .min-h-full,
    #${l} [class*="min-h-[297"],
    .resume-template-document .min-h-screen,
    .resume-template-document .min-h-full,
    .resume-template-document [class*="min-h-[297"] { min-height: 0 !important; }
    .page-break-line, [data-source-highlight-marker], [data-resume-selection-marker] { display: none !important; }
    [data-resume-section-id] { background: transparent !important; box-shadow: none !important; cursor: default !important; }
    .resume-document-section,
    [data-resume-section-id],
    .resume-document-item,
    [data-resume-export-item],
    .resume-preview li,
    .resume-preview p,
    .magic-resume-root li,
    .magic-resume-root p { break-inside: auto; page-break-inside: auto; }
    .resume-document-section__title,
    .resume-preview-module__title,
    [data-resume-section-title],
    .resume-preview h1,
    .resume-preview h2,
    .resume-preview h3,
    .resume-preview h4 { break-after: avoid; page-break-after: avoid; break-inside: avoid; }
    .resume-document-contacts,
    [data-resume-export-contact],
    .resume-document-item > :first-child,
    [data-resume-export-item] > :first-child { break-inside: avoid; page-break-inside: avoid; }
    .resume-preview p,
    .resume-preview li,
    .magic-resume-root p,
    .magic-resume-root li { orphans: 2; widows: 2; }
  `}function F(e,t){return`
    @page { size: A4 portrait; margin: 0; }
    * { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; width: 100%; background: white !important; height: auto !important; overflow-x: hidden !important; overflow-y: visible !important; }
    body { font-family: ${t}; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    #${u},
    #${l} {
      margin: 0 !important;
      padding: ${e}px !important;
      width: 210mm !important;
      max-width: 210mm !important;
      box-shadow: none !important;
      border: 0 !important;
      background: white !important;
      font-family: ${t} !important;
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;
    }
    #print-content { width: 210mm; margin: 0 auto; padding: 0; background: white; }
    ${L()}
  `}function W(e){return`<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${$(e.title)}</title><style>${e.styles}${F(e.pagePadding,e.fontFamily)}</style></head><body><div id="print-content">${e.contentHtml}</div></body></html>`}export{q as a,u as b,W as c,D as d,_ as e,U as f,N as g,j as h,l,O as o,L as r};
