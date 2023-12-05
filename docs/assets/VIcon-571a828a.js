import{p as m,g as A,r as I,a2 as te,k as q,A as x,a3 as E,B as ne,l as P,a4 as ae,y as se,c as S,d as v,m as u,q as re,E as M,n as ie,S as L,s as z,a5 as oe,V as le,Z as H,_ as ue,N as ce,a6 as de,M as V,a7 as R,a8 as Y,a9 as F,aa as ge,ab as ve,ac as me,L as fe,Y as he,u as Se,w as be,ad as ye,v as Ce,ae as _e,af as ze}from"./index-a4d36728.js";const B=m({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function w(e){const a=A("useRender");a.render=e}function He(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const n=I(),t=I();if(te){const s=new ResizeObserver(o=>{e==null||e(o,s),o.length&&(a==="content"?t.value=o[0].contentRect:t.value=o[0].target.getBoundingClientRect())});q(()=>{s.disconnect()}),x(n,(o,r)=>{r&&(s.unobserve(E(r)),t.value=void 0),o&&s.observe(E(o))},{flush:"post"})}return{resizeRef:n,contentRect:ne(t)}}const Re=m({tag:{type:String,default:"div"}},"tag"),ke=m({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Fe=P(!1)({name:"VDefaultsProvider",props:ke(),setup(e,a){let{slots:n}=a;const{defaults:t,disabled:s,reset:o,root:r,scoped:l}=ae(e);return se(t,{reset:o,root:r,scoped:l,disabled:s}),()=>{var g;return(g=n.default)==null?void 0:g.call(n)}}});const xe=m({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Ie(e){return{dimensionStyles:S(()=>({height:v(e.height),maxHeight:v(e.maxHeight),maxWidth:v(e.maxWidth),minHeight:v(e.minHeight),minWidth:v(e.minWidth),width:v(e.width)}))}}function Pe(e){return{aspectStyles:S(()=>{const a=Number(e.aspectRatio);return a?{paddingBottom:String(1/a*100)+"%"}:void 0})}}const Z=m({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...B(),...xe()},"VResponsive"),U=P()({name:"VResponsive",props:Z(),setup(e,a){let{slots:n}=a;const{aspectStyles:t}=Pe(e),{dimensionStyles:s}=Ie(e);return w(()=>{var o;return u("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[s.value,e.style]},[u("div",{class:"v-responsive__sizer",style:t.value},null),(o=n.additional)==null?void 0:o.call(n),n.default&&u("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),Ne=m({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),k=(e,a)=>{let{slots:n}=a;const{transition:t,disabled:s,...o}=e,{component:r=ie,...l}=typeof t=="object"?t:{};return re(r,M(typeof t=="string"?{name:s?"":t}:l,o,{disabled:s}),n)};function Ve(e,a){if(!L)return;const n=a.modifiers||{},t=a.value,{handler:s,options:o}=typeof t=="object"?t:{handler:t,options:{}},r=new IntersectionObserver(function(){var h;let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],g=arguments.length>1?arguments[1]:void 0;const f=(h=e._observe)==null?void 0:h[a.instance.$.uid];if(!f)return;const c=l.some(b=>b.isIntersecting);s&&(!n.quiet||f.init)&&(!n.once||c||f.init)&&s(c,l,g),c&&n.once?G(e,a):f.init=!0},o);e._observe=Object(e._observe),e._observe[a.instance.$.uid]={init:!1,observer:r},r.observe(e)}function G(e,a){var t;const n=(t=e._observe)==null?void 0:t[a.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[a.instance.$.uid])}const Be={mounted:Ve,unmounted:G},we=Be,Te=m({alt:String,cover:Boolean,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...Z(),...B(),...Ne()},"VImg"),Ue=P()({name:"VImg",directives:{intersect:we},props:Te(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,a){let{emit:n,slots:t}=a;const s=A("VImg"),o=z(""),r=I(),l=z(e.eager?"loading":"idle"),g=z(),f=z(),c=S(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),h=S(()=>c.value.aspect||g.value/f.value||0);x(()=>e.src,()=>{b(l.value!=="idle")}),x(h,(i,d)=>{!i&&d&&r.value&&_(r.value)}),oe(()=>b());function b(i){if(!(e.eager&&i)&&!(L&&!i&&!e.eager)){if(l.value="loading",c.value.lazySrc){const d=new Image;d.src=c.value.lazySrc,_(d,null)}c.value.src&&le(()=>{var d;n("loadstart",((d=r.value)==null?void 0:d.currentSrc)||c.value.src),setTimeout(()=>{var y;if(!s.isUnmounted)if((y=r.value)!=null&&y.complete){if(r.value.naturalWidth||T(),l.value==="error")return;h.value||_(r.value,null),l.value==="loading"&&C()}else h.value||_(r.value),$()})})}}function C(){var i;s.isUnmounted||($(),_(r.value),l.value="loaded",n("load",((i=r.value)==null?void 0:i.currentSrc)||c.value.src))}function T(){var i;s.isUnmounted||(l.value="error",n("error",((i=r.value)==null?void 0:i.currentSrc)||c.value.src))}function $(){const i=r.value;i&&(o.value=i.currentSrc||i.src)}let N=-1;q(()=>{clearTimeout(N)});function _(i){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const y=()=>{if(clearTimeout(N),s.isUnmounted)return;const{naturalHeight:O,naturalWidth:D}=i;O||D?(g.value=D,f.value=O):!i.complete&&l.value==="loading"&&d!=null?N=window.setTimeout(y,d):(i.currentSrc.endsWith(".svg")||i.currentSrc.startsWith("data:image/svg+xml"))&&(g.value=1,f.value=1)};y()}const W=S(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),K=()=>{var y;if(!c.value.src||l.value==="idle")return null;const i=u("img",{class:["v-img__img",W.value],style:{objectPosition:e.position},src:c.value.src,srcset:c.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:r,onLoad:C,onError:T},null),d=(y=t.sources)==null?void 0:y.call(t);return u(k,{transition:e.transition,appear:!0},{default:()=>[H(d?u("picture",{class:"v-img__picture"},[d,i]):i,[[de,l.value==="loaded"]])]})},Q=()=>u(k,{transition:e.transition},{default:()=>[c.value.lazySrc&&l.value!=="loaded"&&u("img",{class:["v-img__img","v-img__img--preload",W.value],style:{objectPosition:e.position},src:c.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),X=()=>t.placeholder?u(k,{transition:e.transition,appear:!0},{default:()=>[(l.value==="loading"||l.value==="error"&&!t.error)&&u("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,p=()=>t.error?u(k,{transition:e.transition,appear:!0},{default:()=>[l.value==="error"&&u("div",{class:"v-img__error"},[t.error()])]}):null,ee=()=>e.gradient?u("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,j=z(!1);{const i=x(h,d=>{d&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{j.value=!0})}),i())})}return w(()=>{const i=U.filterProps(e);return H(u(U,M({class:["v-img",{"v-img--booting":!j.value},e.class],style:[{width:v(e.width==="auto"?g.value:e.width)},e.style]},i,{aspectRatio:h.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>u(ce,null,[u(K,null,null),u(Q,null,null),u(ee,null,null),u(X,null,null),u(p,null,null)]),default:t.default}),[[ue("intersect"),{handler:b,options:e.options},null,{once:!0}]])}),{currentSrc:o,image:r,state:l,naturalWidth:g,naturalHeight:f}}}),Ae=m({border:[Boolean,Number,String]},"border");function qe(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();return{borderClasses:S(()=>{const t=R(e)?e.value:e.border,s=[];if(t===!0||t==="")s.push(`${a}--border`);else if(typeof t=="string"||t===0)for(const o of String(t).split(" "))s.push(`border-${o}`);return s})}}function J(e){return Y(()=>{const a=[],n={};if(e.value.background)if(F(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&ge(e.value.background)){const t=ve(e.value.background);if(t.a==null||t.a===1){const s=me(t);n.color=s,n.caretColor=s}}}else a.push(`bg-${e.value.background}`);return e.value.text&&(F(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):a.push(`text-${e.value.text}`)),{colorClasses:a,colorStyles:n}})}function $e(e,a){const n=S(()=>({text:R(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:s}=J(n);return{textColorClasses:t,textColorStyles:s}}function Me(e,a){const n=S(()=>({background:R(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:s}=J(n);return{backgroundColorClasses:t,backgroundColorStyles:s}}const Le=m({elevation:{type:[Number,String],validator(e){const a=parseInt(e);return!isNaN(a)&&a>=0&&a<=24}}},"elevation");function Ye(e){return{elevationClasses:S(()=>{const n=R(e)?e.value:e.elevation,t=[];return n==null||t.push(`elevation-${n}`),t})}}const Ze=m({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Ge(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();return{roundedClasses:S(()=>{const t=R(e)?e.value:e.rounded,s=[];if(t===!0||t==="")s.push(`${a}--rounded`);else if(typeof t=="string"||t===0)for(const o of String(t).split(" "))s.push(`rounded-${o}`);return s})}}const We=["x-small","small","default","large","x-large"],je=m({size:{type:[String,Number],default:"default"}},"size");function Oe(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();return Y(()=>{let n,t;return fe(We,e.size)?n=`${a}--size-${e.size}`:e.size&&(t={width:v(e.size),height:v(e.size)}),{sizeClasses:n,sizeStyles:t}})}const De=m({color:String,start:Boolean,end:Boolean,icon:he,...B(),...je(),...Re({tag:"i"}),...Se()},"VIcon"),Je=P()({name:"VIcon",props:De(),setup(e,a){let{attrs:n,slots:t}=a;const s=I(),{themeClasses:o}=be(e),{iconData:r}=ye(S(()=>s.value||e.icon)),{sizeClasses:l}=Oe(e),{textColorClasses:g,textColorStyles:f}=$e(Ce(e,"color"));return w(()=>{var h,b;const c=(h=t.default)==null?void 0:h.call(t);return c&&(s.value=(b=_e(c).filter(C=>C.type===ze&&C.children&&typeof C.children=="string")[0])==null?void 0:b.children),u(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",o.value,l.value,g.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[l.value?void 0:{fontSize:v(e.size),height:v(e.size),width:v(e.size)},f.value,e.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[c]})}),{}}});export{Ue as V,Re as a,w as b,Ae as c,Le as d,Ze as e,Me as f,qe as g,Ye as h,Ge as i,Fe as j,Je as k,J as l,B as m,je as n,Oe as o,$e as p,xe as q,Ie as r,U as s,He as u};
