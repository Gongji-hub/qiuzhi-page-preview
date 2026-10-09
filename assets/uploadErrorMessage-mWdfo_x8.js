import{A as s}from"./schemas-Ba4PjL8p.js";function d(e){return e instanceof s?e.code==="UNAUTHORIZED"?{message:"登录状态已失效，请重新登录后再上传。",requestId:e.requestId,copyText:["【文件上传失败】",`code: ${e.code}`,e.requestId?`request_id: ${e.requestId}`:void 0].filter(Boolean).join(`
`)}:{message:e.message,requestId:e.requestId,copyText:e.requestId?`request_id: ${e.requestId}
message: ${e.message}
code: ${e.code}`:e.message}:e instanceof Error?{message:e.message,requestId:void 0,copyText:e.message}:{message:"上传失败，请重试。",requestId:void 0,copyText:"上传失败，请重试。"}}export{d as f};
