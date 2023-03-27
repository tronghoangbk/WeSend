import{S as u,W as g,M as m,p as t,U as y,ap as N,a7 as _,a9 as h,aq as P,am as T,X as d,ai as L,ar as A,al as I,as as R,at as w,a0 as X,au as M,Z as Y,$ as q,O as c,B as D}from"./index.02e136f0.js";const U=u({name:"VListItemAction",props:{start:Boolean,end:Boolean,...g()},setup(e,a){let{slots:i}=a;return m(()=>t(e.tag,{class:["v-list-item-action",{"v-list-item-action--start":e.start,"v-list-item-action--end":e.end}]},i)),{}}});const W=u({name:"VBadge",inheritAttrs:!1,props:{bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:y,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...N({location:"top end"}),..._(),...g(),...h(),...P({transition:"scale-rotate-transition"})},setup(e,a){const{backgroundColorClasses:i,backgroundColorStyles:b}=T(d(e,"color")),{roundedClasses:v}=L(e),{t:f}=A(),{textColorClasses:C,textColorStyles:B}=I(d(e,"textColor")),{themeClasses:S}=R(),{locationStyles:x}=w(e,!0,o=>{var n,l;return(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(o)?+((n=e.offsetY)!=null?n:0):["left","right"].includes(o)?+((l=e.offsetX)!=null?l:0):0)});return m(()=>{var o,r,n,l;const s=Number(e.content),V=!e.max||isNaN(s)?e.content:s<=e.max?s:`${e.max}+`,[$,k]=X(a.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return t(e.tag,c({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline}]},k),{default:()=>[t("div",{class:"v-badge__wrapper"},[(o=(r=a.slots).default)==null?void 0:o.call(r),t(M,{transition:e.transition},{default:()=>[Y(t("span",c({class:["v-badge__badge",S.value,i.value,v.value,C.value],style:[b.value,B.value,e.inline?{}:x.value],"aria-atomic":"true","aria-label":f(e.label,s),"aria-live":"polite",role:"status"},$),[e.dot?void 0:a.slots.badge?(n=(l=a.slots).badge)==null?void 0:n.call(l):e.icon?t(D,{icon:e.icon},null):V]),[[q,e.modelValue]])]})])]})}),{}}});export{U as V,W as a};