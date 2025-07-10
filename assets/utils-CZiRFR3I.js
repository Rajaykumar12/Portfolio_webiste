import{r as e}from"./animation-BYzGslgy.js";const t={_origin:"https://api.emailjs.com"},r=(e,t,r)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class a{constructor(e){this.status=e.status,this.text=e.responseText}}const i=(e,r,i={})=>new Promise((s,o)=>{const n=new XMLHttpRequest;n.addEventListener("load",({target:e})=>{const t=new a(e);200===t.status||"OK"===t.text?s(t):o(t)}),n.addEventListener("error",({target:e})=>{o(new a(e))}),n.open("POST",t._origin+e,!0),Object.keys(i).forEach(e=>{n.setRequestHeader(e,i[e])}),n.send(r)}),s={init:(e,r="https://api.emailjs.com")=>{t._userID=e,t._origin=r},send:(e,a,s,o)=>{const n=o||t._userID;r(n,e,a);const l={lib_version:"3.2.0",user_id:n,service_id:e,template_id:a,template_params:s};return i("/api/v1.0/email/send",JSON.stringify(l),{"Content-type":"application/json"})},sendForm:(e,a,s,o)=>{const n=o||t._userID,l=(e=>{let t;if(t="string"==typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t})(s);r(n,e,a);const d=new FormData(l);return d.append("lib_version","3.2.0"),d.append("service_id",e),d.append("template_id",a),d.append("user_id",n),i("/api/v1.0/email/send-form",d)}};let o,n,l,d={data:""},c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,p=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,m=(e,t)=>{let r="",a="",i="";for(let s in e){let o=e[s];"@"==s[0]?"i"==s[1]?r=s+" "+o+";":a+="f"==s[1]?m(o,s):s+"{"+m(o,"k"==s[1]?"":t)+"}":"object"==typeof o?a+=m(o,t?t.replace(/([^,])+/g,e=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):s):null!=o&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=m.p?m.p(s,o):s+":"+o+";")}return r+(t&&i?t+"{"+i+"}":i)+a},f={},h=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+h(e[r]);return t}return e};function g(e){let t=this||{},r=e.call?e(t.p):e;return((e,t,r,a,i)=>{let s=h(e),o=f[s]||(f[s]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(s));if(!f[o]){let t=s!==e?e:(e=>{let t,r,a=[{}];for(;t=c.exec(e.replace(p,""));)t[4]?a.shift():t[3]?(r=t[3].replace(u," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);f[o]=m(i?{["@keyframes "+o]:t}:t,r?"":"."+o)}let n=r&&f.g?f.g:null;return r&&(f.g=f[o]),l=f[o],d=t,g=a,(y=n)?d.data=d.data.replace(y,l):-1===d.data.indexOf(l)&&(d.data=g?l+d.data:d.data+l),o;var l,d,g,y})(r.unshift?r.raw?((e,t,r)=>e.reduce((e,a,i)=>{let s=t[i];if(s&&s.call){let e=s(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;s=t?"."+t:e&&"object"==typeof e?e.props?"":m(e,""):!1===e?"":e}return e+a+(null==s?"":s)},""))(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,(a=t.target,"object"==typeof window?((a?a.querySelector("#_goober"):window._goober)||Object.assign((a||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:a||d),t.g,t.o,t.k);var a}g.bind({g:1});let y=g.bind({k:1});function b(e,t){let r=this||{};return function(){let a=arguments;function i(t,s){let d=Object.assign({},t),c=d.className||i.className;r.p=Object.assign({theme:n&&n()},d),r.o=/ *go\d+/.test(c),d.className=g.apply(r,a)+(c?" "+c:"");let p=e;return e[0]&&(p=d.as||e,delete d.as),l&&p[0]&&l(d),o(p,d)}return t?t(i):i}}var v=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,x=(()=>{let e=0;return()=>(++e).toString()})(),w=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),E=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return E(e,{type:e.toasts.find(e=>e.id===r.id)?1:0,toast:r});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},D=[],j={toasts:[],pausedAt:void 0},_=e=>{j=E(j,e),D.forEach(e=>{e(j)})},O={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},$=e=>(t,r)=>{let a=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||x()}))(t,e,r);return _({type:2,toast:a}),a.id},k=(e,t)=>$("blank")(e,t);k.error=$("error"),k.success=$("success"),k.loading=$("loading"),k.custom=$("custom"),k.dismiss=e=>{_({type:3,toastId:e})},k.remove=e=>_({type:4,toastId:e}),k.promise=(e,t,r)=>{let a=k.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let i=t.success?v(t.success,e):void 0;return i?k.success(i,{id:a,...r,...null==r?void 0:r.success}):k.dismiss(a),e}).catch(e=>{let i=t.error?v(t.error,e):void 0;i?k.error(i,{id:a,...r,...null==r?void 0:r.error}):k.dismiss(a)}),e};var I,N,T,C,z=(e,t)=>{_({type:1,toast:{id:e,height:t}})},P=()=>{_({type:5,time:Date.now()})},A=new Map,M=t=>{let{toasts:r,pausedAt:a}=((t={})=>{let[r,a]=e.useState(j),i=e.useRef(j);e.useEffect(()=>(i.current!==j&&a(j),D.push(a),()=>{let e=D.indexOf(a);e>-1&&D.splice(e,1)}),[]);let s=r.toasts.map(e=>{var r,a,i;return{...t,...t[e.type],...e,removeDelay:e.removeDelay||(null==(r=t[e.type])?void 0:r.removeDelay)||(null==t?void 0:t.removeDelay),duration:e.duration||(null==(a=t[e.type])?void 0:a.duration)||(null==t?void 0:t.duration)||O[e.type],style:{...t.style,...null==(i=t[e.type])?void 0:i.style,...e.style}}});return{...r,toasts:s}})(t);e.useEffect(()=>{if(a)return;let e=Date.now(),t=r.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(r<0))return setTimeout(()=>k.dismiss(t.id),r);t.visible&&k.dismiss(t.id)});return()=>{t.forEach(e=>e&&clearTimeout(e))}},[r,a]);let i=e.useCallback(()=>{a&&_({type:6,time:Date.now()})},[a]),s=e.useCallback((e,t)=>{let{reverseOrder:a=!1,gutter:i=8,defaultPosition:s}=t||{},o=r.filter(t=>(t.position||s)===(e.position||s)&&t.height),n=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<n&&e.visible).length;return o.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+i,0)},[r]);return e.useEffect(()=>{r.forEach(e=>{if(e.dismissed)((e,t=1e3)=>{if(A.has(e))return;let r=setTimeout(()=>{A.delete(e),_({type:4,toastId:e})},t);A.set(e,r)})(e.id,e.removeDelay);else{let t=A.get(e.id);t&&(clearTimeout(t),A.delete(e.id))}})},[r]),{toasts:r,handlers:{updateHeight:z,startPause:P,endPause:i,calculateOffset:s}}},F=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,H=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,L=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,S=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${F} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${H} 0.15s ease-out forwards;
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
    animation: ${L} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,q=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,R=b("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${q} 1s linear infinite;
`,V=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,U=y`
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
}`,B=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${V} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${U} 0.2s ease-out forwards;
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
`,J=b("div")`
  position: absolute;
`,K=b("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,X=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Y=b("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${X} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Z=({toast:t})=>{let{icon:r,type:a,iconTheme:i}=t;return void 0!==r?"string"==typeof r?e.createElement(Y,null,r):r:"blank"===a?null:e.createElement(K,null,e.createElement(R,{...i}),"loading"!==a&&e.createElement(J,null,"error"===a?e.createElement(S,{...i}):e.createElement(B,{...i})))},G=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,Q=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,W=b("div")`
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
`,ee=b("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,te=e.memo(({toast:t,position:r,style:a,children:i})=>{let s=t.height?((e,t)=>{let r=e.includes("top")?1:-1,[a,i]=w()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[G(r),Q(r)];return{animation:t?`${y(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(t.position||r||"top-center",t.visible):{opacity:0},o=e.createElement(Z,{toast:t}),n=e.createElement(ee,{...t.ariaProps},v(t.message,t));return e.createElement(W,{className:t.className,style:{...s,...a,...t.style}},"function"==typeof i?i({icon:o,message:n}):e.createElement(e.Fragment,null,o,n))});I=e.createElement,m.p=N,o=I,n=T,l=C;var re=({id:t,className:r,style:a,onHeightUpdate:i,children:s})=>{let o=e.useCallback(e=>{if(e){let r=()=>{let r=e.getBoundingClientRect().height;i(t,r)};r(),new MutationObserver(r).observe(e,{subtree:!0,childList:!0,characterData:!0})}},[t,i]);return e.createElement("div",{ref:o,className:r,style:a},s)},ae=g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ie=({reverseOrder:t,position:r="top-center",toastOptions:a,gutter:i,children:s,containerStyle:o,containerClassName:n})=>{let{toasts:l,handlers:d}=M(a);return e.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:n,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map(a=>{let o=a.position||r,n=((e,t)=>{let r=e.includes("top"),a=r?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:w()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...a,...i}})(o,d.calculateOffset(a,{reverseOrder:t,gutter:i,defaultPosition:r}));return e.createElement(re,{id:a.id,key:a.id,onHeightUpdate:d.updateHeight,className:a.visible?ae:"",style:n},"custom"===a.type?v(a.message,a):s?s(a):e.createElement(te,{toast:a,position:o}))}))},se=k;export{ie as O,se as V,s as e};
