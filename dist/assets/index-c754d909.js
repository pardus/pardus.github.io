(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function P(){}function Ue(e,t){for(const n in t)e[n]=t[n];return e}function qe(e){return e()}function ke(){return Object.create(null)}function N(e){e.forEach(qe)}function ue(e){return typeof e=="function"}function H(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let re;function $e(e,t){return re||(re=document.createElement("a")),re.href=t,e===re.href}function _t(e){return Object.keys(e).length===0}function ye(e,...t){if(e==null)return P;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Y(e){let t;return ye(e,n=>t=n)(),t}function q(e,t,n){e.$$.on_destroy.push(ye(t,n))}function mt(e,t,n,o){if(e){const r=Be(e,t,n,o);return e[0](r)}}function Be(e,t,n,o){return e[1]&&o?Ue(n.ctx.slice(),e[1](o(t))):n.ctx}function gt(e,t,n,o){if(e[2]&&o){const r=e[2](o(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const s=[],i=Math.max(t.dirty.length,r.length);for(let c=0;c<i;c+=1)s[c]=t.dirty[c]|r[c];return s}return t.dirty|r}return t.dirty}function yt(e,t,n,o,r,s){if(r){const i=Be(t,n,o,s);e.p(i,r)}}function wt(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let o=0;o<n;o++)t[o]=-1;return t}return-1}function bt(e,t,n){return e.set(n),t}function Pt(e){return e&&ue(e.destroy)?e.destroy:P}function Nn(e,t){e.appendChild(t)}function E(e,t,n){e.insertBefore(t,n||null)}function k(e){e.parentNode&&e.parentNode.removeChild(e)}function jn(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function we(e){return document.createElement(e)}function He(e){return document.createTextNode(e)}function be(){return He(" ")}function X(){return He("")}function Dn(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function Q(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function kt(e){return Array.from(e.childNodes)}function Mn(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Ke(e,t,n,o){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,o?"important":"")}function Fn(e,t,n){e.classList[n?"add":"remove"](t)}function ae(e,t){return new e(t)}let Z;function G(e){Z=e}function Pe(){if(!Z)throw new Error("Function called outside component initialization");return Z}function $t(e){Pe().$$.on_destroy.push(e)}function Ve(e,t){return Pe().$$.context.set(e,t),t}function ze(e){return Pe().$$.context.get(e)}const U=[],xe=[];let B=[];const Ee=[],We=Promise.resolve();let pe=!1;function Je(){pe||(pe=!0,We.then(Qe))}function xt(){return Je(),We}function he(e){B.push(e)}const de=new Set;let M=0;function Qe(){if(M!==0)return;const e=Z;do{try{for(;M<U.length;){const t=U[M];M++,G(t),Et(t.$$)}}catch(t){throw U.length=0,M=0,t}for(G(null),U.length=0,M=0;xe.length;)xe.pop()();for(let t=0;t<B.length;t+=1){const n=B[t];de.has(n)||(de.add(n),n())}B.length=0}while(U.length);for(;Ee.length;)Ee.pop()();pe=!1,de.clear(),G(e)}function Et(e){if(e.fragment!==null){e.update(),N(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(he)}}function Rt(e){const t=[],n=[];B.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),B=t}const se=new Set;let A;function K(){A={r:0,c:[],p:A}}function V(){A.r||N(A.c),A=A.p}function _(e,t){e&&e.i&&(se.delete(e),e.i(t))}function b(e,t,n,o){if(e&&e.o){if(se.has(e))return;se.add(e),A.c.push(()=>{se.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function vt(e,t){e.d(1),t.delete(e.key)}function Lt(e,t){b(e,1,1,()=>{t.delete(e.key)})}function Ge(e,t,n,o,r,s,i,c,a,l,u,f){let h=e.length,p=s.length,m=h;const x={};for(;m--;)x[e[m].key]=m;const v=[],C=new Map,z=new Map,j=[];for(m=p;m--;){const g=f(r,s,m),d=n(g);let y=i.get(d);y?o&&j.push(()=>y.p(g,t)):(y=l(d,g),y.c()),C.set(d,v[m]=y),d in x&&z.set(d,Math.abs(m-x[d]))}const oe=new Set,W=new Set;function J(g){_(g,1),g.m(c,u),i.set(g.key,g),u=g.first,p--}for(;h&&p;){const g=v[p-1],d=e[h-1],y=g.key,D=d.key;g===d?(u=g.first,h--,p--):C.has(D)?!i.has(y)||oe.has(y)?J(g):W.has(D)?h--:z.get(y)>z.get(D)?(W.add(y),J(g)):(oe.add(D),h--):(a(d,i),h--)}for(;h--;){const g=e[h];C.has(g.key)||a(g,i)}for(;p;)J(v[p-1]);return N(j),v}function Ot(e,t){const n={},o={},r={$$scope:1};let s=e.length;for(;s--;){const i=e[s],c=t[s];if(c){for(const a in i)a in c||(o[a]=1);for(const a in c)r[a]||(n[a]=c[a],r[a]=1);e[s]=c}else for(const a in i)r[a]=1}for(const i in o)i in n||(n[i]=void 0);return n}function It(e){return typeof e=="object"&&e!==null?e:{}}function T(e){e&&e.c()}function O(e,t,n,o){const{fragment:r,after_update:s}=e.$$;r&&r.m(t,n),o||he(()=>{const i=e.$$.on_mount.map(qe).filter(ue);e.$$.on_destroy?e.$$.on_destroy.push(...i):N(i),e.$$.on_mount=[]}),s.forEach(he)}function I(e,t){const n=e.$$;n.fragment!==null&&(Rt(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Tt(e,t){e.$$.dirty[0]===-1&&(U.push(e),Je(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ee(e,t,n,o,r,s,i,c=[-1]){const a=Z;G(e);const l=e.$$={fragment:null,ctx:[],props:s,update:P,not_equal:r,bound:ke(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:ke(),dirty:c,skip_bound:!1,root:t.target||a.$$.root};i&&i(l.root);let u=!1;if(l.ctx=n?n(e,t.props||{},(f,h,...p)=>{const m=p.length?p[0]:h;return l.ctx&&r(l.ctx[f],l.ctx[f]=m)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](m),u&&Tt(e,f)),h}):[],l.update(),u=!0,N(l.before_update),l.fragment=o?o(l.ctx):!1,t.target){if(t.hydrate){const f=kt(t.target);l.fragment&&l.fragment.l(f),f.forEach(k)}else l.fragment&&l.fragment.c();t.intro&&_(e.$$.fragment),O(e,t.target,t.anchor,t.customElement),Qe()}G(a)}class te{$destroy(){I(this,1),this.$destroy=P}$on(t,n){if(!ue(n))return P;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!_t(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const L={queryHandler:{parse:e=>St(new URLSearchParams(e)),stringify:e=>"?"+new URLSearchParams(e).toString()},urlTransform:{apply:e=>e,remove:e=>e},useHash:!1};function St(e){return[...e].reduce((t,[n,o])=>(t[n]=o,t),{})}const Ye=RegExp(/\:([^/()]+)/g);function Ct(e,t){if(navigator.userAgent.includes("jsdom"))return!1;t&&Xe(e),At()}function At(){if(navigator.userAgent.includes("jsdom"))return!1;const{hash:e}=window.location;if(e){const t=document.getElementById(e.substring(1));t&&t.scrollIntoView()}}function Xe(e){e&&e.scrollTo&&e.dataset.routify!=="scroll-lock"&&e.dataset["routify-scroll"]!=="lock"&&(e.style["scroll-behavior"]="auto",e.scrollTo({top:0,behavior:"auto"}),e.style["scroll-behavior"]="",Xe(e.parentElement))}const Nt=(e,t)=>{const n=t?"":"/?$";return e=e.replace(/\/_fallback?$/,"(/|$)"),e=e.replace(/\/index$/,"(/index)?"),e=e.replace(Ye,"([^/]+)")+n,e=`^${e}`,e},Ze=e=>{const t=[];let n;for(;n=Ye.exec(e);)t.push(n[1]);return t},jt=({path:e})=>e.split("/").filter(Boolean).map(t=>t==="_fallback"?"A":t.startsWith(":")?"B":"C").join("");function ie(e,t){ie._console=ie._console||{log:console.log,warn:console.warn};const{_console:n}=ie,o=e.componentFile.name.replace(/Proxy<_?(.+)>/,"$1").replace(/^Index$/,e.component.shortPath.split("/").pop()).replace(/^./,s=>s.toUpperCase()).replace(/\:(.+)/,"U5B$1u5D"),r=[`<${o}> received an unexpected slot "default".`,`<${o}> was created with unknown prop 'scoped'`,`<${o}> was created with unknown prop 'scopedSync'`];for(const s of["log","warn"])console[s]=(...i)=>{r.includes(i[0])||n[s](...i)},t().then(()=>{console[s]=n[s]})}function le(){let e=window.location.pathname+window.location.search+window.location.hash;const{url:t,options:n}=Dt(e);return{..._e(t),options:n}}function Dt(e){const[t,n]=e.split("__[[routify_url_options]]__"),o=JSON.parse(decodeURIComponent(n||"")||"{}");return window.routify=window.routify||{},window.routify.prefetched=o.prefetch,{url:t,options:o}}function _e(e){L.useHash&&(e=e.replace(/.*#(.+)/,"$1"));const t=e.startsWith("/")?window.location.origin:void 0,n=new URL(e,t),o=n.pathname+n.search+n.hash;return{url:n,fullpath:o}}function Re(e,t,n){const o=L.useHash?"#":"";let r;return r=Mt(e,t,n),r=L.urlTransform.apply(r),r=o+r,r}function Mt(e,t,n){const o=Object.assign({},n,t),r=Ft(e,t);for(const[s,i]of Object.entries(o))e=e.replace(new RegExp(`:${s}(/|$)`),i+"$1");return`${e}${r}`}function Ft(e,t){if(!L.queryHandler)return"";const n=Ze(e),o={};return t&&Object.entries(t).forEach(([r,s])=>{n.includes(r)||(o[r]=s)}),L.queryHandler.stringify(o).replace(/\?$/,"")}function Ut(e){let t;const n=e[2].default,o=mt(n,e,e[1],null);return{c(){o&&o.c()},m(r,s){o&&o.m(r,s),t=!0},p(r,[s]){o&&o.p&&(!t||s&2)&&yt(o,n,r,r[1],t?gt(n,r[1],s,null):wt(r[1]),null)},i(r){t||(_(o,r),t=!0)},o(r){b(o,r),t=!1},d(r){o&&o.d(r)}}}function qt(e,t,n){let{$$slots:o={},$$scope:r}=t,{scoped:s={}}=t;return e.$$set=i=>{"scoped"in i&&n(0,s=i.scoped),"$$scope"in i&&n(1,r=i.$$scope)},[s,r,o]}class Bt extends te{constructor(t){super(),ee(this,t,qt,Ut,H,{scoped:0})}}const F=[];function Ht(e,t){return{subscribe:S(e,t).subscribe}}function S(e,t=P){let n;const o=new Set;function r(c){if(H(e,c)&&(e=c,n)){const a=!F.length;for(const l of o)l[1](),F.push(l,e);if(a){for(let l=0;l<F.length;l+=2)F[l][0](F[l+1]);F.length=0}}}function s(c){r(c(e))}function i(c,a=P){const l=[c,a];return o.add(l),o.size===1&&(n=t(r)||P),c(e),()=>{o.delete(l),o.size===0&&n&&(n(),n=null)}}return{set:r,update:s,subscribe:i}}function et(e,t,n){const o=!Array.isArray(e),r=o?[e]:e,s=t.length<2;return Ht(n,i=>{let c=!1;const a=[];let l=0,u=P;const f=()=>{if(l)return;u();const p=t(o?a[0]:a,i);s?i(p):u=ue(p)?p:P},h=r.map((p,m)=>ye(p,x=>{a[m]=x,l&=~(1<<m),c&&f()},()=>{l|=1<<m}));return c=!0,f(),function(){N(h),u(),c=!1}})}window.routify=window.routify||{};const ne=S(null),fe=S([]);fe.subscribe(e=>window.routify.routes=e);let tt=S({component:{params:{}}});const Kt=S(null),nt=S(!0);async function Vt({page:e,metatags:t,afterPageLoad:n,parentNode:o}){const r=e.last!==e;setTimeout(()=>Ct(o,r));const{path:s}=e,{options:i}=le(),c=i.prefetch;for(const a of n._hooks)a&&await a(e.api);t.update(),dispatchEvent(new CustomEvent("app-loaded")),parent.postMessage({msg:"app-loaded",prefetched:window.routify.prefetched,path:s,prefetchId:c},"*"),window.routify.appLoaded=!0,window.routify.stopAutoReady=!1}function me(e,t=!1){e=L.urlTransform.remove(e);let{pathname:n,search:o}=_e(e).url;const r=Y(fe),s=r.find(u=>n===u.meta.name)||r.find(u=>n.match(u.regex));if(!s)throw new Error(`Route could not be found for "${n}".`);const i=t?Object.create(s):s,{route:c,redirectPath:a,rewritePath:l}=ot(i,r);return l&&({pathname:n,search:o}=_e(Re(l,c.params)).url,a&&(c.redirectTo=Re(a,c.params||{}))),L.queryHandler&&(c.params=Object.assign({},L.queryHandler.parse(o))),zt(c,n),c.leftover=e.replace(new RegExp(c.regex),""),c}function zt(e,t){if(e.paramKeys){const n=Wt(e.layouts),o=t.split("/").filter(Boolean);Jt(e.path).forEach((s,i)=>{s&&(e.params[s]=o[i],n[i]?n[i].param={[s]:o[i]}:e.param={[s]:o[i]})})}}function ot(e,t,n,o){const{redirect:r,rewrite:s}=e.meta;if(r||s){n=r?r.path||r:n,o=s?s.path||s:n;const i=r&&r.params,c=s&&s.params,a=t.find(l=>l.path.replace(/\/index$/,"")===o);return a===e&&console.error(`${o} is redirecting to itself`),a||console.error(`${e.path} is redirecting to non-existent path: ${o}`),(i||c)&&(a.params=Object.assign({},a.params,i,c)),ot(a,t,n,o)}return{route:e,redirectPath:n,rewritePath:o}}function Wt(e){const t=[];return e.forEach(n=>{t[n.path.split("/").filter(Boolean).length-1]=n}),t}function Jt(e){return e.split("/").filter(Boolean).map(t=>t.match(/\:(.+)/)).map(t=>t&&t[1])}function ve(e,t,n){const o=e.slice();return o[1]=t[n],o}function Le(e,t){let n,o;return{key:e,first:null,c(){n=we("iframe"),$e(n.src,o=t[1].url)||Q(n,"src",o),Q(n,"frameborder","0"),Q(n,"title","routify prefetcher"),this.first=n},m(r,s){E(r,n,s)},p(r,s){t=r,s&1&&!$e(n.src,o=t[1].url)&&Q(n,"src",o)},d(r){r&&k(n)}}}function Qt(e){let t,n=[],o=new Map,r=e[0];const s=i=>i[1].options.prefetch;for(let i=0;i<r.length;i+=1){let c=ve(e,r,i),a=s(c);o.set(a,n[i]=Le(a,c))}return{c(){t=we("div");for(let i=0;i<n.length;i+=1)n[i].c();Q(t,"id","__routify_iframes"),Ke(t,"display","none")},m(i,c){E(i,t,c);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(t,null)},p(i,[c]){c&1&&(r=i[0],n=Ge(n,c,s,1,i,r,o,t,vt,Le,null,ve))},i:P,o:P,d(i){i&&k(t);for(let c=0;c<n.length;c+=1)n[c].d()}}}const Gt=2,ge=S([]),rt=et(ge,e=>e.slice(0,Gt));rt.subscribe(e=>e.forEach(({options:t})=>{setTimeout(()=>st(t.prefetch),t.timeout)}));function st(e){const t=e.data?e.data.prefetchId:e;if(!t)return null;const n=Y(ge).find(o=>o&&o.options.prefetch==t);if(n){const{gracePeriod:o}=n.options,r=new Promise(i=>setTimeout(i,o)),s=new Promise(i=>{window.requestIdleCallback?window.requestIdleCallback(i):setTimeout(i,o+1e3)});Promise.all([r,s]).then(()=>{ge.update(i=>i.filter(c=>c.options.prefetch!=t))})}}addEventListener("message",st,!1);function Yt(e,t,n){let o;return q(e,rt,r=>n(0,o=r)),[o]}class Xt extends te{constructor(t){super(),ee(this,t,Yt,Qt,H,{})}}function it(){return ze("routify")||tt}const Un={subscribe(e){const t=it();return et(t,n=>n.layout.api).subscribe(e)}},Zt={_hooks:[e=>nt.set(!1)],subscribe:ct},en={_hooks:[],subscribe:ct};function ct(e){const t=this._hooks,n=t.length;return e(o=>{t[n]=o}),(...o)=>{delete t[n],e(...o)}}const w={subscribe(e){return this._origin=this.getOrigin(),e(ce)},props:{},templates:{},services:{plain:{propField:"name",valueField:"content"},twitter:{propField:"name",valueField:"content"},og:{propField:"property",valueField:"content"}},plugins:[{name:"applyTemplate",condition:()=>!0,action:(e,t)=>{const n=w.getLongest(w.templates,e)||(o=>o);return[e,n(t)]}},{name:"createMeta",condition:()=>!0,action(e,t){w.writeMeta(e,t)}},{name:"createOG",condition:e=>!e.match(":"),action(e,t){w.writeMeta(`og:${e}`,t)}},{name:"createTitle",condition:e=>e==="title",action(e,t){document.title=t}}],getLongest(e,t){const n=e[t];if(n){const o=Y(ne).path,i=Object.keys(e[t]).filter(c=>o.includes(c)).sort((c,a)=>a.length-c.length)[0];return n[i]}},writeMeta(e,t){const n=document.getElementsByTagName("head")[0],o=e.match(/(.+)\:/),r=o&&o[1]||"plain",{propField:s,valueField:i}=ce.services[r]||ce.services.plain,c=document.querySelector(`meta[${s}='${e}']`);c&&c.remove();const a=document.createElement("meta");a.setAttribute(s,e),a.setAttribute(i,t),a.setAttribute("data-origin","routify"),n.appendChild(a)},set(e,t){typeof e=="string"&&w.plugins.forEach(n=>{n.condition(e,t)&&([e,t]=n.action(e,t)||[e,t])})},clear(){const e=document.querySelector("meta");e&&e.remove()},template(e,t){const n=w.getOrigin;w.templates[e]=w.templates[e]||{},w.templates[e][n]=t},update(){Object.keys(w.props).forEach(e=>{let t=w.getLongest(w.props,e);w.plugins.forEach(n=>{n.condition(e,t)&&([e,t]=n.action(e,t)||[e,t])})})},batchedUpdate(){w._pendingUpdate||(w._pendingUpdate=!0,setTimeout(()=>{w._pendingUpdate=!1,this.update()}))},_updateQueued:!1,_origin:!1,getOrigin(){if(this._origin)return this._origin;const e=it();return e&&Y(e).path||"/"},_pendingUpdate:!1},ce=new Proxy(w,{set(e,t,n,o){const{props:r}=e;return Reflect.has(e,t)?Reflect.set(e,t,n,o):(r[t]=r[t]||{},r[t][e.getOrigin()]=n),window.routify.appLoaded&&e.batchedUpdate(),!0}});function Oe(e,t,n){const o=e.slice();return o[21]=t[n].component,o[22]=t[n].componentFile,o[2]=t[n].decorator,o[1]=t[n].nodes,o}function Ie(e){let t=[],n=new Map,o,r,s=[e[4]];const i=c=>c[7];for(let c=0;c<1;c+=1){let a=Oe(e,s,c),l=i(a);n.set(l,t[c]=Se(l,a))}return{c(){for(let c=0;c<1;c+=1)t[c].c();o=X()},m(c,a){for(let l=0;l<1;l+=1)t[l]&&t[l].m(c,a);E(c,o,a),r=!0},p(c,a){a&33554621&&(s=[c[4]],K(),t=Ge(t,a,i,1,c,s,n,o.parentNode,Lt,Se,o,Oe),V())},i(c){if(!r){for(let a=0;a<1;a+=1)_(t[a]);r=!0}},o(c){for(let a=0;a<1;a+=1)b(t[a]);r=!1},d(c){for(let a=0;a<1;a+=1)t[a].d(c);c&&k(o)}}}function Te(e){let t,n;return t=new at({props:{decorator:e[2],nodes:e[1],scoped:{...e[0],...e[25]}}}),{c(){T(t.$$.fragment)},m(o,r){O(t,o,r),n=!0},p(o,r){const s={};r&4&&(s.decorator=o[2]),r&16&&(s.nodes=o[1]),r&33554433&&(s.scoped={...o[0],...o[25]}),t.$set(s)},i(o){n||(_(t.$$.fragment,o),n=!0)},o(o){b(t.$$.fragment,o),n=!1},d(o){I(t,o)}}}function tn(e){let t,n,o=e[21]&&e[1].length&&Te(e);return{c(){o&&o.c(),t=X()},m(r,s){o&&o.m(r,s),E(r,t,s),n=!0},p(r,s){r[21]&&r[1].length?o?(o.p(r,s),s&16&&_(o,1)):(o=Te(r),o.c(),_(o,1),o.m(t.parentNode,t)):o&&(K(),b(o,1,1,()=>{o=null}),V())},i(r){n||(_(o),n=!0)},o(r){b(o),n=!1},d(r){o&&o.d(r),r&&k(t)}}}function nn(e){let t,n,o;const r=[{scoped:e[0]},{scopedSync:e[5]},e[3].param||{}];var s=e[22];function i(c){let a={$$slots:{default:[tn,({scoped:l,decorator:u})=>({25:l,2:u}),({scoped:l,decorator:u})=>(l?33554432:0)|(u?4:0)]},$$scope:{ctx:c}};for(let l=0;l<r.length;l+=1)a=Ue(a,r[l]);return{props:a}}return s&&(t=ae(s,i(e))),{c(){t&&T(t.$$.fragment),n=be()},m(c,a){t&&O(t,c,a),E(c,n,a),o=!0},p(c,a){const l=a&41?Ot(r,[a&1&&{scoped:c[0]},a&32&&{scopedSync:c[5]},a&8&&It(c[3].param||{})]):{};if(a&100663317&&(l.$$scope={dirty:a,ctx:c}),a&16&&s!==(s=c[22])){if(t){K();const u=t;b(u.$$.fragment,1,0,()=>{I(u,1)}),V()}s?(t=ae(s,i(c)),T(t.$$.fragment),_(t.$$.fragment,1),O(t,n.parentNode,n)):t=null}else s&&t.$set(l)},i(c){o||(t&&_(t.$$.fragment,c),o=!0)},o(c){t&&b(t.$$.fragment,c),o=!1},d(c){t&&I(t,c),c&&k(n)}}}function Se(e,t){let n,o,r,s;var i=t[2];function c(a){return{props:{scoped:a[0],$$slots:{default:[nn]},$$scope:{ctx:a}}}}return i&&(o=ae(i,c(t))),{key:e,first:null,c(){n=X(),o&&T(o.$$.fragment),r=X(),this.first=n},m(a,l){E(a,n,l),o&&O(o,a,l),E(a,r,l),s=!0},p(a,l){t=a;const u={};if(l&1&&(u.scoped=t[0]),l&67108925&&(u.$$scope={dirty:l,ctx:t}),l&16&&i!==(i=t[2])){if(o){K();const f=o;b(f.$$.fragment,1,0,()=>{I(f,1)}),V()}i?(o=ae(i,c(t)),T(o.$$.fragment),_(o.$$.fragment,1),O(o,r.parentNode,r)):o=null}else i&&o.$set(u)},i(a){s||(o&&_(o.$$.fragment,a),s=!0)},o(a){o&&b(o.$$.fragment,a),s=!1},d(a){a&&k(n),a&&k(r),o&&I(o,a)}}}function Ce(e){let t,n,o;return{c(){t=we("div"),Ke(t,"display","contents")},m(r,s){E(r,t,s),n||(o=Pt(e[10].call(null,t)),n=!0)},d(r){r&&k(t),n=!1,o()}}}function on(e){let t,n,o,r=e[4]&&Ie(e),s=!e[6]&&Ce(e);return{c(){r&&r.c(),t=be(),s&&s.c(),n=X()},m(i,c){r&&r.m(i,c),E(i,t,c),s&&s.m(i,c),E(i,n,c),o=!0},p(i,[c]){i[4]?r?(r.p(i,c),c&16&&_(r,1)):(r=Ie(i),r.c(),_(r,1),r.m(t.parentNode,t)):r&&(K(),b(r,1,1,()=>{r=null}),V()),i[6]?s&&(s.d(1),s=null):s||(s=Ce(i),s.c(),s.m(n.parentNode,n))},i(i){o||(_(r),o=!0)},o(i){b(r),o=!1},d(i){r&&r.d(i),i&&k(t),s&&s.d(i),i&&k(n)}}}function rn(e,t,n){let o,r,s,i,c;q(e,ne,d=>n(14,s=d)),q(e,fe,d=>n(16,c=d));let{nodes:a=[]}=t,{scoped:l={}}=t,{decorator:u=void 0}=t,f=null,h=null,p={},m,x=1;const v=S(null);q(e,v,d=>n(4,r=d));const C=ze("routify")||tt;q(e,C,d=>n(15,i=d));const z=d=>n(6,m=d.parentNode);Ve("routify",v);let j=[];function oe(d){let y=d.component();y instanceof Promise?y.then(W):W(y)}function W(d){n(5,p={...l});const y={...r,nodes:h,decorator:u||Bt,layout:f.isLayout?f:i.layout,component:f,route:s,routes:c,componentFile:d,parentNode:m||i.parentNode};v.set(y),bt(C,i.child=f,i),h.length===0&&J()}async function J(){await new Promise(y=>setTimeout(y));const d=r.component.path===s.path;!window.routify.stopAutoReady&&d&&Vt({page:r.component,metatags:ce,afterPageLoad:Zt,parentNode:m})}function g({meta:d,path:y,param:D,params:ht}){return JSON.stringify({path:y,invalidate:x,param:(d["param-is-page"]||d["slug-is-page"])&&D,queryParams:d["query-params-is-page"]&&ht})}return e.$$set=d=>{"nodes"in d&&n(1,a=d.nodes),"scoped"in d&&n(0,l=d.scoped),"decorator"in d&&n(2,u=d.decorator)},e.$$.update=()=>{e.$$.dirty&6146&&j!==a&&(n(12,j=a),n(3,[f,...h]=[...a],f),n(3,f.api.reset=()=>n(11,x++,x),f)),e.$$.dirty&8&&oe(f),e.$$.dirty&2064&&n(7,o=r&&x&&g(r.component)),e.$$.dirty&16&&r&&ie(r,xt)},[l,a,u,f,r,p,m,o,v,C,z,x,j]}class at extends te{constructor(t){super(),ee(this,t,rn,on,H,{nodes:1,scoped:0,decorator:2})}}function sn(e,t){let n=!1;function o(s,i){const c=s||le().fullpath,a=me(c);a.redirectTo&&(history.replaceStateNative({},null,a.redirectTo),delete a.redirectTo);const f=[...(i&&me(le().fullpath,e)||a).layouts,a];n&&delete n.last,a.last=n,n=a,s||Kt.set(a),ne.set(a),a.api.preload().then(()=>{nt.set(!0),t(f)})}const r=cn(o);return{updatePage:o,destroy:r}}function cn(e){["pushState","replaceState"].forEach(r=>{history[r+"Native"]||(history[r+"Native"]=history[r]),history[r]=async function(s={},i,c){const a=location.pathname+location.search+location.hash;if(c===a)return!1;const{id:l,path:u,params:f}=Y(ne);s={id:l,path:u,params:f,...s};const h=new Event(r.toLowerCase());if(Object.assign(h,{state:s,title:i,url:c}),await Ae(h,c))return history[r+"Native"].apply(this,[s,i,c]),dispatchEvent(h)}});let t=!1;const n={click:an,pushstate:()=>e(),replacestate:()=>e(),popstate:async r=>{t?t=!1:await Ae(r,le().fullpath)?e():(t=!0,r.preventDefault(),history.go(1))}};return Object.entries(n).forEach(r=>addEventListener(...r)),()=>{Object.entries(n).forEach(r=>removeEventListener(...r))}}function an(e){const t=e.target.closest("a")||e.composedPath().find(s=>s.tagName==="A"),n=t&&t.href;if(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button||e.defaultPrevented||!n||t.target||t.host!==location.host)return;const o=new URL(n),r=o.pathname+o.search+o.hash;e.preventDefault(),history.pushState({},"",r)}async function Ae(e,t){const n=me(t).api;for(const o of en._hooks.filter(Boolean))if(!await o(e,n,{url:t}))return!1;return!0}function Ne(e){let t,n;return t=new at({props:{nodes:e[0]}}),{c(){T(t.$$.fragment)},m(o,r){O(t,o,r),n=!0},p(o,r){const s={};r&1&&(s.nodes=o[0]),t.$set(s)},i(o){n||(_(t.$$.fragment,o),n=!0)},o(o){b(t.$$.fragment,o),n=!1},d(o){I(t,o)}}}function ln(e){let t,n,o,r=e[0]&&e[1]!==null&&Ne(e);return n=new Xt({}),{c(){r&&r.c(),t=be(),T(n.$$.fragment)},m(s,i){r&&r.m(s,i),E(s,t,i),O(n,s,i),o=!0},p(s,[i]){s[0]&&s[1]!==null?r?(r.p(s,i),i&3&&_(r,1)):(r=Ne(s),r.c(),_(r,1),r.m(t.parentNode,t)):r&&(K(),b(r,1,1,()=>{r=null}),V())},i(s){o||(_(r),_(n.$$.fragment,s),o=!0)},o(s){b(r),b(n.$$.fragment,s),o=!1},d(s){r&&r.d(s),s&&k(t),I(n,s)}}}function un(e,t,n){let o;q(e,ne,p=>n(1,o=p));let{routes:r}=t,{config:s={}}=t,i,c;window.routify=window.routify||{},window.routify.inBrowser=!window.navigator.userAgent.match("jsdom"),Object.assign(L,s),Ve("routifyupdatepage",(...p)=>c&&c.updatePage(...p));const l=p=>n(0,i=p),u=()=>{c&&(c.destroy(),c=null)};let f=null;const h=()=>{clearTimeout(f),f=setTimeout(()=>{u(),c=sn(r,l),fe.set(r),c.updatePage()})};return $t(u),e.$$set=p=>{"routes"in p&&n(2,r=p.routes),"config"in p&&n(3,s=p.config)},e.$$.update=()=>{e.$$.dirty&4&&r&&h()},[i,o,r,s]}class fn extends te{constructor(t){super(),ee(this,t,un,ln,H,{routes:2,config:3})}}function $(e){const t=async function(o){return await lt(e,{file:o.tree,state:{treePayload:o},scope:{}})};return t.sync=function(o){return ut(e,{file:o.tree,state:{treePayload:o},scope:{}})},t}async function lt(e,t){const n=await e(t);if(n===!1)return!1;const o=n||t.file;if(o.children){const r=await Promise.all(o.children.map(async s=>lt(e,{state:t.state,scope:ft(t.scope||{}),parent:t.file,file:await s})));o.children=r.filter(Boolean)}return o}function ut(e,t){const n=e(t);if(n===!1)return!1;const o=n||t.file;if(o.children){const r=o.children.map(s=>ut(e,{state:t.state,scope:ft(t.scope||{}),parent:t.file,file:s}));o.children=r.filter(Boolean)}return o}function ft(e){return JSON.parse(JSON.stringify(e))}const dn=$(({file:e})=>{(e.isPage||e.isFallback)&&(e.regex=Nt(e.path,e.isFallback))}),pn=$(({file:e})=>{e.paramKeys=Ze(e.path)}),hn=$(({file:e})=>{e.isFallback||e.isIndex?e.shortPath=e.path.replace(/\/[^/]+$/,""):e.shortPath=e.path}),_n=$(({file:e})=>{e.ranking=jt(e)}),mn=$(({file:e})=>{const t=e,n=e.meta&&e.meta.children||[];n.length&&(t.children=t.children||[],t.children.push(...n.map(o=>({isMeta:!0,...o,meta:o}))))}),gn=$(e=>{const{file:t}=e,{isFallback:n,meta:o}=t,r=t.path.split("/").pop().startsWith(":"),s=t.path.endsWith("/index"),i=o.index||o.index===0,c=o.index===!1;t.isIndexable=i||!n&&!r&&!s&&!c,t.isNonIndexable=!t.isIndexable}),yn=$(({file:e,parent:t})=>{Object.defineProperty(e,"parent",{get:()=>t}),Object.defineProperty(e,"nextSibling",{get:()=>je(e,1)}),Object.defineProperty(e,"prevSibling",{get:()=>je(e,-1)}),Object.defineProperty(e,"lineage",{get:()=>dt(t)})});function dt(e,t=[]){return e&&(t.unshift(e),dt(e.parent,t)),t}function je(e,t){if(!e.root){const n=e.parent.children.filter(r=>r.isIndexable),o=n.indexOf(e);return n[o+t]}}const wn=$(({file:e,parent:t})=>{e.isIndex&&Object.defineProperty(t,"index",{get:()=>e})}),bn=$(({file:e,scope:t})=>{Object.defineProperty(e,"layouts",{get:()=>n(e)});function n(o){if(!o.isLayout&&o.meta.reset)return[];const{parent:r}=o,s=r&&r.component&&r,i=s&&(s.isReset||s.meta.reset),c=r&&!i&&n(r)||[];return s&&c.push(s),c}}),Pn=e=>{$(t=>{(t.file.isPage||t.file.isFallback)&&t.state.treePayload.routes.push(t.file)}).sync(e),e.routes.sort((t,n)=>t.ranking>=n.ranking?-1:1)},kn=$(({file:e})=>{const t=e.root?a:e.children?e.isPage?i:o:e.isReset?c:e.isLayout?n:e.isFallback?r:s;Object.setPrototypeOf(e,t.prototype);function n(){}function o(){}function r(){}function s(){}function i(){}function c(){}function a(){}}),$n=Object.freeze(Object.defineProperty({__proto__:null,addMetaChildren:mn,assignIndex:wn,assignLayout:bn,assignRelations:yn,createFlatList:Pn,setIsIndexable:gn,setParamKeys:pn,setPrototype:kn,setRank:_n,setRegex:dn,setShortPath:hn},Symbol.toStringTag,{value:"Module"})),xn={isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!1,isPage:!1,ownMeta:{},meta:{recursive:!0,preload:!1,prerender:!0},id:"__fallback"};function pt(e){return Object.entries(xn).forEach(([t,n])=>{typeof e[t]>"u"&&(e[t]=n)}),e.children&&(e.children=e.children.map(pt)),e}const En=$(({file:e})=>{e.api=new Rn(e)});class Rn{constructor(t){this.__file=t,Object.defineProperty(this,"__file",{enumerable:!1}),this.isMeta=!!t.isMeta,this.path=t.path,this.title=vn(t),this.meta=t.meta}get parent(){return!this.__file.root&&this.__file.parent.api}get children(){return(this.__file.children||this.__file.isLayout&&this.__file.parent.children||[]).filter(t=>!t.isNonIndexable).sort((t,n)=>t.isMeta&&n.isMeta?0:(t=(t.meta.index||t.meta.title||t.path).toString(),n=(n.meta.index||n.meta.title||n.path).toString(),t.localeCompare(n,void 0,{numeric:!0,sensitivity:"base"}))).map(({api:t})=>t)}get next(){return De(this,1)}get prev(){return De(this,-1)}async preload(){const t=[...this.__file.layouts,this.__file,this.index&&this.index.__file].filter(Boolean).map(n=>n.component());await Promise.all(t)}get component(){return this.__file.component?this.__file.component():this.__file.index?this.__file.index.component():!1}get componentWithIndex(){return new Promise(t=>Promise.all([this.component,this.index&&this.index.component]).then(n=>t(n)))}get index(){const t=this.__file.children&&this.__file.children.find(n=>n.isIndex);return t&&t.api}}function De(e,t){if(!e.__file.root){const o=e.parent.children.indexOf(e);return e.parent.children[o+t]}}function vn(e){return typeof e.meta.title<"u"?e.meta.title:(e.shortPath||e.path).split("/").pop().replace(/-/g," ")}const Me={...$n,restoreDefaults:({tree:e})=>pt(e),assignAPI:En};function Ln(e){const t=["restoreDefaults","setParamKeys","setRegex","setShortPath","setRank","assignLayout","setPrototype","addMetaChildren","assignRelations","setIsIndexable","assignIndex","assignAPI","createFlatList"],n={tree:e,routes:[]};for(let o of t)(Me[o].sync||Me[o])(n);return n}const On="modulepreload",In=function(e){return"/"+e},Fe={},R=function(t,n,o){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=In(s),s in Fe)return;Fe[s]=!0;const i=s.endsWith(".css"),c=i?'[rel="stylesheet"]':"";if(!!o)for(let u=r.length-1;u>=0;u--){const f=r[u];if(f.href===s&&(!i||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${c}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":On,i||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),i)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},Tn={root:!0,children:[{isDir:!0,ext:"",children:[{isIndex:!0,isPage:!0,path:"/contact/index",id:"_contact_index",component:()=>R(()=>import("./index-c4a7d740.js"),["assets/index-c4a7d740.js","assets/store-99271b3d.js"]).then(e=>e.default)}],path:"/contact"},{isDir:!0,ext:"",children:[{isIndex:!0,isPage:!0,path:"/download/index",id:"_download_index",component:()=>R(()=>import("./index-996b6c1c.js"),["assets/index-996b6c1c.js","assets/store-99271b3d.js","assets/index-8a63ebe2.css"]).then(e=>e.default)}],path:"/download"},{isIndex:!0,isPage:!0,path:"/index",id:"_index",component:()=>R(()=>import("./index-56ec79b5.js"),["assets/index-56ec79b5.js","assets/store-99271b3d.js","assets/index-a3cba5ad.css","assets/footer-436271b3.css"]).then(e=>e.default)},{isDir:!0,children:[{ext:"md",isIndex:!0,isPage:!0,path:"/wiki/index",id:"_wiki_index",component:()=>R(()=>import("./index-79be7d26.js"),[]).then(e=>e.default)},{isDir:!0,ext:"",children:[{ext:"md",isPage:!0,path:"/wiki/system/01-installation",id:"_wiki_system_01Installation",component:()=>R(()=>import("./01-installation-5f4e5b43.js"),[]).then(e=>e.default)},{ext:"md",isPage:!0,path:"/wiki/system/02-after-install",id:"_wiki_system_02AfterInstall",component:()=>R(()=>import("./02-after-install-0a5014a9.js"),[]).then(e=>e.default)},{ext:"md",isPage:!0,path:"/wiki/system/03-yusuf-duzgun",id:"_wiki_system_03YusufDuzgun",component:()=>R(()=>import("./03-yusuf-duzgun-8b6a95bd.js"),[]).then(e=>e.default)},{ext:"md",isIndex:!0,isPage:!0,path:"/wiki/system/index",id:"_wiki_system_index",component:()=>R(()=>import("./index-e50ed64d.js"),[]).then(e=>e.default)}],path:"/wiki/system"}],isLayout:!0,path:"/wiki",id:"_wiki__layout",component:()=>R(()=>import("./_layout-4ad0597e.js"),["assets/_layout-4ad0597e.js","assets/_layout-c848feb4.css","assets/footer-436271b3.css"]).then(e=>e.default)}],isLayout:!0,path:"/",id:"__layout",component:()=>R(()=>import("./_layout-d5f2663e.js"),["assets/_layout-d5f2663e.js","assets/store-99271b3d.js","assets/footer-436271b3.css"]).then(e=>e.default)},{tree:qn,routes:Sn}=Ln(Tn);function Cn(e){let t,n;return t=new fn({props:{routes:Sn,config:{useHash:!0}}}),{c(){T(t.$$.fragment)},m(o,r){O(t,o,r),n=!0},p:P,i(o){n||(_(t.$$.fragment,o),n=!0)},o(o){b(t.$$.fragment,o),n=!1},d(o){I(t,o)}}}class An extends te{constructor(t){super(),ee(this,t,null,Cn,H,{})}}new An({target:document.getElementById("app")});export{Pt as A,N as B,bt as C,S as D,te as S,be as a,Q as b,$e as c,E as d,we as e,Nn as f,k as g,jn as h,ee as i,q as j,Mn as k,T as l,O as m,P as n,_ as o,b as p,I as q,Dn as r,H as s,He as t,Un as u,Fn as v,mt as w,yt as x,wt as y,gt as z};
