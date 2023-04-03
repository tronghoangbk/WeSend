import{d as P,cg as E,k as m,ch as f,E as I,aK as j,o as r,b as y,w as t,p as a,bb as q,bI as C,q as l,b8 as G,b$ as B,G as A,H as u,m as n,be as H,a2 as D,c as d,F as b,a as x,a6 as z,x as v,n as w,a3 as $,bf as O,bg as X,I as L,A as J,B as W,C as Y}from"./index.420a2100.js";import{V as Z}from"./VTextField.38367eba.js";import{V as ee}from"./VDivider.0c84c83e.js";import{V as R,c as se,a as K,b as te}from"./VList.73720e1f.js";import{V as ae}from"./VDialog.dbc24433.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.ff25a3e5.js";import"./lazy.724d1983.js";const le=_=>(J("data-v-49961e29"),_=_(),W(),_),re={class:"d-flex align-center"},oe={class:"h-100"},ie={class:"text-xs text-disabled text-uppercase"},ne={class:"h-100"},ce={class:"app-bar-search-suggestions d-flex flex-column align-center justify-center text-high-emphasis h-100"},ue={class:"text-h6 my-3"},de={key:0,class:"mt-8"},pe=le(()=>n("span",{class:"d-flex justify-center text-disabled"},"Try searching for",-1)),he=["onClick"],fe={class:"text-sm"},_e=P({__name:"AppBarSearch",props:{isDialogVisible:{type:Boolean},searchQuery:null,searchResults:null,suggestions:null,noDataSuggestion:null},emits:["update:isDialogVisible","update:searchQuery","itemSelected"],setup(_,{emit:g}){const o=_,{ctrl_k:Q,meta_k:T}=E(),k=m(),i=m(structuredClone(f(o.searchQuery))),F=m(),S=m(structuredClone(f(o.isDialogVisible))),p=m(structuredClone(f(o.searchResults)));I(o,()=>{S.value=structuredClone(f(o.isDialogVisible)),p.value=structuredClone(f(o.searchResults)),i.value=structuredClone(f(o.searchQuery))}),I([Q,T],()=>{S.value=!0,g("update:isDialogVisible",!0)});const V=()=>{g("update:isDialogVisible",!1),g("update:searchQuery","")};j(()=>{i.value.length||(p.value=[])});const U=e=>{var c,s;e.key==="ArrowDown"?(e.preventDefault(),(c=k.value)==null||c.focus("next")):e.key==="ArrowUp"&&(e.preventDefault(),(s=k.value)==null||s.focus("prev"))},M=e=>{g("update:isDialogVisible",e),g("update:searchQuery","")},N=e=>e==="dashboards"?"Dashboards":e==="appsPages"?"Apps & Pages":e==="userInterface"?"User Interface":e==="formsTables"?"Forms Tables":e==="chartsMisc"?"Charts Misc":"Misc";return(e,c)=>(r(),y(ae,{"max-width":"600","model-value":l(S),height:e.$vuetify.display.smAndUp?"550":"100%",fullscreen:e.$vuetify.display.width<600,class:"app-bar-search-dialog","onUpdate:modelValue":M,onKeyup:B(V,["esc"])},{default:t(()=>[a(q,{height:"100%",width:"100%",class:"position-relative"},{default:t(()=>[a(C,{class:"pt-1",style:{"max-height":"65px"}},{default:t(()=>[a(Z,{ref_key:"refSearchInput",ref:F,modelValue:l(i),"onUpdate:modelValue":[c[0]||(c[0]=s=>G(i)?i.value=s:null),c[1]||(c[1]=s=>e.$emit("update:searchQuery",l(i)))],autofocus:"",variant:"plain",density:"comfortable",class:"app-bar-autocomplete-box",onKeyup:B(V,["esc"]),onKeydown:U},{"prepend-inner":t(()=>[a(A,{icon:"",variant:"text",color:"default",size:"x-small",class:"text-high-emphasis ms-n1"},{default:t(()=>[a(u,{size:"22",icon:"tabler-search"})]),_:1})]),"append-inner":t(()=>[n("div",re,[n("div",{class:"text-base text-disabled cursor-pointer me-2",onClick:V}," [esc] "),a(A,{icon:"",variant:"text",color:"default",size:"x-small",onClick:V},{default:t(()=>[a(u,{size:"22",icon:"tabler-x"})]),_:1})])]),_:1},8,["modelValue","onKeyup"])]),_:1}),a(ee),a(l(H),{options:{wheelPropagation:!1,suppressScrollX:!0},class:"h-100"},{default:t(()=>[D(a(l(R),{ref_key:"refSearchList",ref:k,density:"compact",class:"app-bar-search-list"},{default:t(()=>[(r(!0),d(b,null,x(l(p),s=>(r(),d(b,{key:s.title},["header"in s?(r(),y(l(se),{key:0,class:"text-disabled"},{default:t(()=>[z(v(N(s.title)),1)]),_:2},1024)):w(e.$slots,"searchResult",{key:1,item:s},()=>[a(l(K),{link:"",onClick:h=>e.$emit("itemSelected",s)},{prepend:t(()=>[a(u,{size:"20",icon:s.icon,class:"me-3"},null,8,["icon"])]),append:t(()=>[a(u,{size:"20",icon:"tabler-corner-down-left",class:"enter-icon text-disabled"})]),default:t(()=>[a(te,null,{default:t(()=>[z(v(s.title),1)]),_:2},1024)]),_:2},1032,["onClick"])],!0)],64))),128))]),_:3},512),[[$,l(i).length&&!!l(p).length]]),D(n("div",oe,[w(e.$slots,"suggestions",{},()=>[a(C,{class:"app-bar-search-suggestions h-100 pa-10"},{default:t(()=>[o.suggestions?(r(),y(O,{key:0,class:"gap-y-4"},{default:t(()=>[(r(!0),d(b,null,x(o.suggestions,s=>(r(),y(X,{key:s.title,cols:"12",sm:"6",class:"ps-6"},{default:t(()=>[n("p",ie,v(s.title),1),a(l(R),{class:"card-list"},{default:t(()=>[(r(!0),d(b,null,x(s.content,h=>(r(),y(l(K),{key:h.title,link:"",title:h.title,class:"app-bar-search-suggestion",onClick:ge=>e.$emit("itemSelected",h)},{prepend:t(()=>[a(u,{icon:h.icon,size:"20",class:"me-2"},null,8,["icon"])]),_:2},1032,["title","onClick"]))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1})):L("",!0)]),_:1})],!0)],512),[[$,!!l(p)&&!l(i)]]),D(n("div",ne,[w(e.$slots,"noData",{},()=>[a(C,{class:"h-100"},{default:t(()=>[n("div",ce,[a(u,{size:"75",icon:"tabler-file-x"}),n("h6",ue,' No Result For "'+v(l(i))+'" ',1),o.noDataSuggestion?(r(),d("div",de,[pe,(r(!0),d(b,null,x(o.noDataSuggestion,s=>(r(),d("h6",{key:s.title,class:"app-bar-search-suggestion text-sm font-weight-regular cursor-pointer mt-3",onClick:h=>e.$emit("itemSelected",s)},[a(u,{size:"20",icon:s.icon,class:"me-3"},null,8,["icon"]),n("span",fe,v(s.title),1)],8,he))),128))])):L("",!0)])]),_:1})],!0)],512),[[$,!l(p).length&&l(i).length]])]),_:3})]),_:3})]),_:3},8,["model-value","height","fullscreen","onKeyup"]))}});const Ce=Y(_e,[["__scopeId","data-v-49961e29"]]);export{Ce as default};