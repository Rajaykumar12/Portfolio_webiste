import{r as c}from"./animation-DapMf6yi.js";const D={_origin:"https://api.emailjs.com"},L=(e,t="https://api.emailjs.com")=>{D._userID=e,D._origin=t},F=(e,t,a)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class N{constructor(t){this.status=t.status,this.text=t.responseText}}const I=(e,t,a={})=>new Promise((o,n)=>{const r=new XMLHttpRequest;r.addEventListener("load",({target:s})=>{const i=new N(s);i.status===200||i.text==="OK"?o(i):n(i)}),r.addEventListener("error",({target:s})=>{n(new N(s))}),r.open("POST",D._origin+e,!0),Object.keys(a).forEach(s=>{r.setRequestHeader(s,a[s])}),r.send(t)}),q=(e,t,a,o)=>{const n=o||D._userID;return F(n,e,t),I("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:n,service_id:e,template_id:t,template_params:a}),{"Content-type":"application/json"})},R=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},V=(e,t,a,o)=>{const n=o||D._userID,r=R(a);F(n,e,t);const s=new FormData(r);return s.append("lib_version","3.2.0"),s.append("service_id",e),s.append("template_id",t),s.append("user_id",n),I("/api/v1.0/email/send-form",s)},Fe={init:L,send:q,sendForm:V};let J={data:""},U=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||J,K=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,X=/\/\*[^]*?\*\/|  +/g,P=/\n+/g,b=(e,t)=>{let a="",o="",n="";for(let r in e){let s=e[r];r[0]=="@"?r[1]=="i"?a=r+" "+s+";":o+=r[1]=="f"?b(s,r):r+"{"+b(s,r[1]=="k"?"":t)+"}":typeof s=="object"?o+=b(s,t?t.replace(/([^,])+/g,i=>r.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,i):i?i+" "+l:l)):r):s!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=b.p?b.p(r,s):r+":"+s+";")}return a+(t&&n?t+"{"+n+"}":n)+o},g={},A=e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+A(e[a]);return t}return e},Y=(e,t,a,o,n)=>{let r=A(e),s=g[r]||(g[r]=(l=>{let d=0,p=11;for(;d<l.length;)p=101*p+l.charCodeAt(d++)>>>0;return"go"+p})(r));if(!g[s]){let l=r!==e?e:(d=>{let p,f,m=[{}];for(;p=K.exec(d.replace(X,""));)p[4]?m.shift():p[3]?(f=p[3].replace(P," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][p[1]]=p[2].replace(P," ").trim();return m[0]})(e);g[s]=b(n?{["@keyframes "+s]:l}:l,a?"":"."+s)}let i=a&&g.g?g.g:null;return a&&(g.g=g[s]),((l,d,p,f)=>{f?d.data=d.data.replace(f,l):d.data.indexOf(l)===-1&&(d.data=p?l+d.data:d.data+l)})(g[s],t,o,i),s},Z=(e,t,a)=>e.reduce((o,n,r)=>{let s=t[r];if(s&&s.call){let i=s(a),l=i&&i.props&&i.props.className||/^go/.test(i)&&i;s=l?"."+l:i&&typeof i=="object"?i.props?"":b(i,""):i===!1?"":i}return o+n+(s??"")},"");function k(e){let t=this||{},a=e.call?e(t.p):e;return Y(a.unshift?a.raw?Z(a,[].slice.call(arguments,1),t.p):a.reduce((o,n)=>Object.assign(o,n&&n.call?n(t.p):n),{}):a,U(t.target),t.g,t.o,t.k)}let M,S,C;k.bind({g:1});let y=k.bind({k:1});function B(e,t,a,o){b.p=t,M=e,S=a,C=o}function v(e,t){let a=this||{};return function(){let o=arguments;function n(r,s){let i=Object.assign({},r),l=i.className||n.className;a.p=Object.assign({theme:S&&S()},i),a.o=/ *go\d+/.test(l),i.className=k.apply(a,o)+(l?" "+l:"");let d=e;return e[0]&&(d=i.as||e,delete i.as),C&&d[0]&&C(i),M(d,i)}return t?t(n):n}}var W=e=>typeof e=="function",j=(e,t)=>W(e)?e(t):e,G=(()=>{let e=0;return()=>(++e).toString()})(),z=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Q=20,H=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,Q)};case 1:return{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:a}=t;return H(e,{type:e.toasts.find(r=>r.id===a.id)?1:0,toast:a});case 3:let{toastId:o}=t;return{...e,toasts:e.toasts.map(r=>r.id===o||o===void 0?{...r,dismissed:!0,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+n}))}}},_=[],x={toasts:[],pausedAt:void 0},w=e=>{x=H(x,e),_.forEach(t=>{t(x)})},ee={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},te=(e={})=>{let[t,a]=c.useState(x),o=c.useRef(x);c.useEffect(()=>(o.current!==x&&a(x),_.push(a),()=>{let r=_.indexOf(a);r>-1&&_.splice(r,1)}),[]);let n=t.toasts.map(r=>{var s,i,l;return{...e,...e[r.type],...r,removeDelay:r.removeDelay||((s=e[r.type])==null?void 0:s.removeDelay)||(e==null?void 0:e.removeDelay),duration:r.duration||((i=e[r.type])==null?void 0:i.duration)||(e==null?void 0:e.duration)||ee[r.type],style:{...e.style,...(l=e[r.type])==null?void 0:l.style,...r.style}}});return{...t,toasts:n}},re=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(a==null?void 0:a.id)||G()}),$=e=>(t,a)=>{let o=re(t,e,a);return w({type:2,toast:o}),o.id},u=(e,t)=>$("blank")(e,t);u.error=$("error");u.success=$("success");u.loading=$("loading");u.custom=$("custom");u.dismiss=e=>{w({type:3,toastId:e})};u.remove=e=>w({type:4,toastId:e});u.promise=(e,t,a)=>{let o=u.loading(t.loading,{...a,...a==null?void 0:a.loading});return typeof e=="function"&&(e=e()),e.then(n=>{let r=t.success?j(t.success,n):void 0;return r?u.success(r,{id:o,...a,...a==null?void 0:a.success}):u.dismiss(o),n}).catch(n=>{let r=t.error?j(t.error,n):void 0;r?u.error(r,{id:o,...a,...a==null?void 0:a.error}):u.dismiss(o)}),e};var ae=(e,t)=>{w({type:1,toast:{id:e,height:t}})},se=()=>{w({type:5,time:Date.now()})},E=new Map,ie=1e3,oe=(e,t=ie)=>{if(E.has(e))return;let a=setTimeout(()=>{E.delete(e),w({type:4,toastId:e})},t);E.set(e,a)},ne=e=>{let{toasts:t,pausedAt:a}=te(e);c.useEffect(()=>{if(a)return;let r=Date.now(),s=t.map(i=>{if(i.duration===1/0)return;let l=(i.duration||0)+i.pauseDuration-(r-i.createdAt);if(l<0){i.visible&&u.dismiss(i.id);return}return setTimeout(()=>u.dismiss(i.id),l)});return()=>{s.forEach(i=>i&&clearTimeout(i))}},[t,a]);let o=c.useCallback(()=>{a&&w({type:6,time:Date.now()})},[a]),n=c.useCallback((r,s)=>{let{reverseOrder:i=!1,gutter:l=8,defaultPosition:d}=s||{},p=t.filter(h=>(h.position||d)===(r.position||d)&&h.height),f=p.findIndex(h=>h.id===r.id),m=p.filter((h,T)=>T<f&&h.visible).length;return p.filter(h=>h.visible).slice(...i?[m+1]:[0,m]).reduce((h,T)=>h+(T.height||0)+l,0)},[t]);return c.useEffect(()=>{t.forEach(r=>{if(r.dismissed)oe(r.id,r.removeDelay);else{let s=E.get(r.id);s&&(clearTimeout(s),E.delete(r.id))}})},[t]),{toasts:t,handlers:{updateHeight:ae,startPause:se,endPause:o,calculateOffset:n}}},le=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,de=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ce=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,pe=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${le} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${de} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ce} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ue=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,me=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ue} 1s linear infinite;
`,fe=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,he=y`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ge=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${fe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${he} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ye=v("div")`
  position: absolute;
`,be=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ve=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,xe=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ve} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,we=({toast:e})=>{let{icon:t,type:a,iconTheme:o}=e;return t!==void 0?typeof t=="string"?c.createElement(xe,null,t):t:a==="blank"?null:c.createElement(be,null,c.createElement(me,{...o}),a!=="loading"&&c.createElement(ye,null,a==="error"?c.createElement(pe,{...o}):c.createElement(ge,{...o})))},Ee=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,De=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,$e="0%{opacity:0;} 100%{opacity:1;}",Oe="0%{opacity:1;} 100%{opacity:0;}",_e=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,je=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ke=(e,t)=>{let a=e.includes("top")?1:-1,[o,n]=z()?[$e,Oe]:[Ee(a),De(a)];return{animation:t?`${y(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Te=c.memo(({toast:e,position:t,style:a,children:o})=>{let n=e.height?ke(e.position||t||"top-center",e.visible):{opacity:0},r=c.createElement(we,{toast:e}),s=c.createElement(je,{...e.ariaProps},j(e.message,e));return c.createElement(_e,{className:e.className,style:{...n,...a,...e.style}},typeof o=="function"?o({icon:r,message:s}):c.createElement(c.Fragment,null,r,s))});B(c.createElement);var Se=({id:e,className:t,style:a,onHeightUpdate:o,children:n})=>{let r=c.useCallback(s=>{if(s){let i=()=>{let l=s.getBoundingClientRect().height;o(e,l)};i(),new MutationObserver(i).observe(s,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return c.createElement("div",{ref:r,className:t,style:a},n)},Ce=(e,t)=>{let a=e.includes("top"),o=a?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:z()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...o,...n}},Ne=k`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,O=16,Ie=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:o,children:n,containerStyle:r,containerClassName:s})=>{let{toasts:i,handlers:l}=ne(a);return c.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:O,left:O,right:O,bottom:O,pointerEvents:"none",...r},className:s,onMouseEnter:l.startPause,onMouseLeave:l.endPause},i.map(d=>{let p=d.position||t,f=l.calculateOffset(d,{reverseOrder:e,gutter:o,defaultPosition:t}),m=Ce(p,f);return c.createElement(Se,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?Ne:"",style:m},d.type==="custom"?j(d.message,d):n?n(d):c.createElement(Te,{toast:d,position:p}))}))},Ae=u;export{Ie as O,Ae as V,Fe as e};
