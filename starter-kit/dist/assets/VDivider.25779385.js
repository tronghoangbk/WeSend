import{X as c,ac as d,af as v,ap as u,$ as h,L as m,ay as a,P as g,p as f}from"./index.9f3abaf8.js";const b=c({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...d()},setup(e,i){let{attrs:t}=i;const{themeClasses:o}=v(e),{backgroundColorClasses:n,backgroundColorStyles:l}=u(h(e,"color")),s=m(()=>{const r={};return e.length&&(r[e.vertical?"maxHeight":"maxWidth"]=a(e.length)),e.thickness&&(r[e.vertical?"borderRightWidth":"borderTopWidth"]=a(e.thickness)),r});return g(()=>f("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},o.value,n.value],style:[s.value,l.value],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{b as V};