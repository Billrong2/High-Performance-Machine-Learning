(function(){"use strict";const{ipcRenderer:o,webFrame:c,crashReporter:u,contextBridge:v}=require("electron");function t(e){if(!e||!e.startsWith("vscode:"))throw new Error(`Unsupported event IPC channel '${e}'`);return!0}function p(e){if(e!=="uncaughtException")throw new Error(`Unsupported process event '${e}'`);return!0}function g(e){for(const r of process.argv)if(r.indexOf(`--${e}=`)===0)return r.split("=")[1]}let s;const a=(async()=>{var r;const e=g("vscode-window-config");if(!e)throw new Error("Preload: did not find expected vscode-window-config in renderer process arguments list.");try{if(t(e))return s=await o.invoke(e),Object.assign(process.env,s.userEnv),c.setZoomLevel((r=s.zoomLevel)!=null?r:0),s}catch(n){throw new Error(`Preload: unable to fetch vscode-window-config: ${n}`)}})(),l=(async()=>{const[e,r]=await Promise.all([(async()=>(await a).userEnv)(),o.invoke("vscode:fetchShellEnv")]);return process.env.VSCODE_SKIP_PROCESS_ENV_PATCHING||Object.assign(process.env,r,e),{...process.env,...r,...e}})(),d={ipcRenderer:{send(e,...r){t(e)&&o.send(e,...r)},invoke(e,...r){if(t(e))return o.invoke(e,...r)},on(e,r){if(t(e))return o.on(e,r),this},once(e,r){if(t(e))return o.once(e,r),this},removeListener(e,r){if(t(e))return o.removeListener(e,r),this}},ipcMessagePort:{connect(e,r,n){if(t(e)&&t(r)){const f=(w,E)=>{n===E&&(o.off(r,f),window.postMessage(n,"*",w.ports))};o.on(r,f),o.send(e,n)}}},webFrame:{setZoomLevel(e){typeof e=="number"&&c.setZoomLevel(e)}},crashReporter:{addExtraParameter(e,r){u.addExtraParameter(e,r)}},process:{get platform(){return process.platform},get arch(){return process.arch},get env(){return process.env},get versions(){return process.versions},get type(){return"renderer"},get execPath(){return process.execPath},get sandboxed(){return process.sandboxed},cwd(){return process.env.VSCODE_CWD||process.execPath.substr(0,process.execPath.lastIndexOf(process.platform==="win32"?"\\":"/"))},shellEnv(){return l},getProcessMemoryInfo(){return process.getProcessMemoryInfo()},on(e,r){if(p(e))return process.on(e,r),this}},context:{configuration(){return s},async resolveConfiguration(){return a}}};let i=process.argv.includes("--context-isolation");if(i)try{v.exposeInMainWorld("vscode",d)}catch(e){console.error(e),i=!1}i||(window.vscode=d)})();

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/054a9295330880ed74ceaedda236253b4f39a335/core/vs/base/parts/sandbox/electron-browser/preload.js.map