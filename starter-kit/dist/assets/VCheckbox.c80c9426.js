import{ag as A,N as B,bD as z,Q as H,an as K,K as F,aa as x,ab as _,ac as u,ae as Q,aC as Y,U as r,M as S,p as v,a8 as J,ak as W,k as P,bk as R,a2 as X,az as Z,H as p,a4 as k,bE as ee,a0 as T,ad as le,aw as te,bF as O,Y as ne,aP as w,bh as ae,bj as oe,bl as ue,bo as ie}from"./index.d6ea0e9d.js";const U=Symbol.for("vuetify:selection-control-group"),j=A({color:String,disabled:Boolean,error:Boolean,id:String,inline:Boolean,falseIcon:B,trueIcon:B,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,modelValue:null,type:String,valueComparator:{type:Function,default:z},...H(),...K()},"v-selection-control-group");F({name:"VSelectionControlGroup",props:{defaultsTarget:{type:String,default:"VSelectionControl"},...j()},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:s}=a;const l=x(e,"modelValue"),t=_(),i=u(()=>e.id||`v-selection-control-group-${t}`),n=u(()=>e.name||i.value);return Q(U,{modelValue:l}),Y({[e.defaultsTarget]:{color:r(e,"color"),disabled:r(e,"disabled"),density:r(e,"density"),error:r(e,"error"),inline:r(e,"inline"),modelValue:l,multiple:u(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:n,falseIcon:r(e,"falseIcon"),trueIcon:r(e,"trueIcon"),readonly:r(e,"readonly"),ripple:r(e,"ripple"),type:r(e,"type"),valueComparator:r(e,"valueComparator")}}),S(()=>{var o;return v("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline}],"aria-labelled-by":e.type==="radio"?i.value:void 0,role:e.type==="radio"?"radiogroup":void 0},[(o=s.default)==null?void 0:o.call(s)])}),{}}});const G=A({label:String,trueValue:null,falseValue:null,value:null,...j()},"v-selection-control");function ce(e){const a=le(U,void 0),{densityClasses:s}=te(e),l=x(e,"modelValue"),t=u(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),i=u(()=>e.falseValue!==void 0?e.falseValue:!1),n=u(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),o=u({get(){const c=a?a.modelValue.value:l.value;return n.value?c.some(d=>e.valueComparator(d,t.value)):e.valueComparator(c,t.value)},set(c){if(e.readonly)return;const d=c?t.value:i.value;let m=d;n.value&&(m=c?[...O(l.value),d]:O(l.value).filter(C=>!e.valueComparator(C,t.value))),a?a.modelValue.value=m:l.value=m}}),{textColorClasses:f,textColorStyles:y}=ne(u(()=>o.value&&!e.error&&!e.disabled?e.color:void 0)),V=u(()=>o.value?e.trueIcon:e.falseIcon);return{group:a,densityClasses:s,trueValue:t,falseValue:i,model:o,textColorClasses:f,textColorStyles:y,icon:V}}const E=J()({name:"VSelectionControl",directives:{Ripple:W},inheritAttrs:!1,props:G(),emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:s,slots:l}=a;const{densityClasses:t,icon:i,model:n,textColorClasses:o,textColorStyles:f,trueValue:y}=ce(e),V=_(),c=u(()=>e.id||`input-${V}`),d=P(!1),m=P(!1),C=P();function I(b){d.value=!0,(!w||w&&b.target.matches(":focus-visible"))&&(m.value=!0)}function h(){d.value=!1,m.value=!1}function g(b){n.value=b.target.checked}return S(()=>{var b,$;const D=l.label?l.label({label:e.label,props:{for:c.value}}):e.label,[N,q]=R(s);return v("div",k({class:["v-selection-control",{"v-selection-control--dirty":n.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":d.value,"v-selection-control--focus-visible":m.value,"v-selection-control--inline":e.inline},t.value]},N),[v("div",{class:["v-selection-control__wrapper",o.value],style:f.value},[(b=l.default)==null?void 0:b.call(l),X(v("div",{class:["v-selection-control__input"]},[i.value&&v(p,{key:"icon",icon:i.value},null),v("input",k({ref:C,checked:n.value,disabled:e.disabled,id:c.value,onBlur:h,onFocus:I,onInput:g,"aria-readonly":e.readonly,type:e.type,value:y.value,name:e.name,"aria-checked":e.type==="checkbox"?n.value:void 0},q),null),($=l.input)==null?void 0:$.call(l,{model:n,textColorClasses:o,textColorStyles:f,props:{onFocus:I,onBlur:h,id:c.value}})]),[[Z("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),D&&v(ee,{for:c.value,clickable:!0},{default:()=>[D]})])}),{isFocused:d,input:C}}});function de(e){return T(e,Object.keys(E.props))}const M=A({indeterminate:Boolean,indeterminateIcon:{type:B,default:"$checkboxIndeterminate"},...G({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"v-checkbox-btn"),L=F({name:"VCheckboxBtn",props:M(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,a){let{slots:s}=a;const l=x(e,"indeterminate"),t=x(e,"modelValue");function i(f){l.value&&(l.value=!1)}const n=u(()=>e.indeterminate?e.indeterminateIcon:e.falseIcon),o=u(()=>e.indeterminate?e.indeterminateIcon:e.trueIcon);return S(()=>v(E,k(e,{modelValue:t.value,"onUpdate:modelValue":[f=>t.value=f,i],class:"v-checkbox-btn",type:"checkbox",inline:!0,falseIcon:n.value,trueIcon:o.value,"aria-checked":e.indeterminate?"mixed":void 0}),s)),{}}});function re(e){return T(e,Object.keys(L.props))}const ve=F({name:"VCheckbox",inheritAttrs:!1,props:{...ae(),...M()},emits:{"update:focused":e=>!0},setup(e,a){let{attrs:s,slots:l}=a;const{isFocused:t,focus:i,blur:n}=oe(e),o=_(),f=u(()=>e.id||`checkbox-${o}`);return S(()=>{const[y,V]=R(s),[c,d]=ue(e),[m,C]=re(e);return v(ie,k({class:"v-checkbox"},y,c,{id:f.value,focused:t.value}),{...l,default:I=>{let{id:h,isDisabled:g,isReadonly:b}=I;return v(L,k(m,{id:h.value,disabled:g.value,readonly:b.value},V,{onFocus:i,onBlur:n}),l)}})}),{}}});export{E as V,ve as a,L as b,de as f,G as m};
