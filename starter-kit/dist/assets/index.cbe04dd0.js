import{bq as b,bP as J,bp as v,C as f,r as p,o,c as s,m as t,F as B,a as $,p as n,s as w,x as g,bt as d,a6 as h,bQ as K,w as a,bb as R,G as k,V as I,A as O,B as j,y as A,bc as V,bd as U,bR as X,z as Y,b as F,I as x,k as z,a2 as T,a3 as q,d as Q}from"./index.a336b519.js";import{V as Z}from"./VSelect.2812b622.js";import{V as G,a as tt,b as E}from"./VList.7278dcde.js";import{b as D,a as L}from"./avatar-4.fc1b14d3.js";import{V as et}from"./VTextField.240fdacb.js";import{V as nt}from"./VCheckbox.5fb4a063.js";import{V as ot}from"./VDivider.79af0ead.js";import{Q as st,M as at,m as ct}from"./index.d45f1146.js";import{_ as it}from"./verify.ed42df3b.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.2c286082.js";import"./lazy.dab113c5.js";import"./VMenu.a7a55564.js";import"./VCheckboxBtn.a7e5a695.js";const W="/assets/avatar-2.11d6be6e.png",rt=["Foo","Bar","Fizz","Buzz"],lt=["First Name","Select","Last Name","Contact Number","Select"],pt={name:"ImportContact",components:{BtnRound:b},props:{action:{type:Function,required:!0}},setup(){return{items:rt,columns:lt,dataCampaigns:J,btnBlack:v}}};const _t=t("h2",{class:"import-contact"}," Import Contacts ",-1),dt=t("div",{class:"d-flex w-100 import-title"},[t("p",null,"Define Fields"),t("p",null,"127 of 127 Contacts Imported")],-1),ut={class:"import-container"},mt={class:"import-grid"},ht={class:"col"},bt={class:"px-4 pt-8 pb-0"},vt={class:"import-bottom"},ft=t("p",null,[t("span",{className:"asterisk"}),h(" Name and phone number are mandatory.")],-1),yt={class:"btn-next"};function St(c,u,r,e,y,l){const _=p("BtnRound");return o(),s("div",null,[_t,dt,t("div",ut,[t("div",mt,[(o(!0),s(B,null,$(e.dataCampaigns,(i,m)=>(o(),s("div",{key:m},[t("div",ht,[n(Z,{items:e.items,label:i.column,"single-line":"",color:"#6B7280","bg-color":i.bgColor,class:w(i.class)},null,8,["items","label","bg-color","class"]),t("div",{class:w(["container-items my-4",`container-items${m}`])},[t("h4",bt,g(i.title),1),n(G,{class:"py-5",items:i.data,"bg-color":i.bgColor,density:"compact",color:"#374151"},null,8,["items","bg-color"])],2)])]))),128))])]),t("div",vt,[ft,t("div",yt,[n(_,{"button-title":"Next",action:r.action,color:"btnBlack.color",style:d(e.btnBlack),variant:"contained","icon-a-n-b":"tabler-chevron-right","icon-a-color-n-b":e.btnBlack.color},null,8,["action","style","icon-a-color-n-b"])])])])}const xt=f(pt,[["render",St]]),gt="/assets/microsoft-excel.9293542f.svg",Ct={name:"Step1",components:{BtnRound:b},props:{action:{type:Function,required:!0}},setup(){return{WhatsAppIcon:K,MicrosoftExcelIcon:gt,btnBlack:v}}};const C=c=>(O("data-v-75f73a07"),c=c(),j(),c),Bt={class:""},kt=C(()=>t("div",{class:"input-field"},[t("h3",{class:"mb-3"}," Campaign Title "),t("input",{type:"text",placeholder:"Type here",class:"phone-number"})],-1)),It=C(()=>t("h3",{class:"mb-3"}," Import contacts from ",-1)),Vt={class:""},wt=C(()=>t("span",null,"Excel",-1)),Rt=C(()=>t("h4",{class:"mb-3"}," Expiry Date ",-1)),$t=C(()=>t("div",{class:"input-field input-file"},[t("input",{type:"file",class:"phone-number"}),t("button",{class:"button-browse",type:"button"}," Browse ")],-1)),Ft={class:"my-6 btn-next"};function Mt(c,u,r,e,y,l){const _=p("BtnRound");return o(),s("div",Bt,[n(R,{class:"mb-4 pa-6"},{default:a(()=>[kt]),_:1}),n(R,{class:"pa-6"},{default:a(()=>[It,t("div",Vt,[n(k,{class:"button-excel button-import v-btn--rounded"},{default:a(()=>[n(I,{src:e.MicrosoftExcelIcon,width:"20",height:"20"},null,8,["src"]),wt]),_:1}),n(k,{class:"button-import v-btn--rounded"},{default:a(()=>[n(I,{src:e.WhatsAppIcon,width:"20",height:"20"},null,8,["src"]),h(" Whatsapp Group ")]),_:1}),n(k,{class:"button-import v-btn--rounded"},{default:a(()=>[n(I,{src:e.WhatsAppIcon,width:"20",height:"20"},null,8,["src"]),h(" Whatsapp Contacts ")]),_:1})]),Rt,$t]),_:1}),t("div",Ft,[t("div",null,[n(_,{"button-title":"continue",action:r.action,color:"btnBlack.color",style:d(e.btnBlack),variant:"contained"},null,8,["action","style"])])])])}const Nt=f(Ct,[["render",Mt],["__scopeId","data-v-75f73a07"]]),At=[{avatar:A,name:"Caroline Black",status:"Online",phone:"+92 3330950553"},{avatar:W,name:"Alfred Copeland",status:"Away",phone:"+92 3330950553"},{avatar:D,name:"Celia Schneider",status:"Offline",phone:"+92 3330950553"},{avatar:L,name:"Max Rogan",status:"In Meeting",phone:"+92 3330950553"},{avatar:A,name:"Caroline Black",status:"Online",phone:"+92 3330950553"},{avatar:W,name:"Alfred Copeland",status:"Away",phone:"+92 3330950553"},{avatar:D,name:"Celia Schneider",status:"Offline",phone:"+92 3330950553"},{avatar:L,name:"Max Rogan",status:"In Meeting",phone:"+92 3330950553"}],zt={name:"Step2",components:{BtnRound:b},props:{action:{type:Function,required:!0}},setup(){return{users:At,btnBlack:v}}};const Tt={class:"d-flex justify-space-between align-center"},qt={class:"my-6 btn-next"};function Et(c,u,r,e,y,l){const _=p("BtnRound");return o(),s("div",null,[n(R,{class:"container-step-2-create"},{default:a(()=>[n(V,{class:"py-4"},{default:a(()=>[t("div",Tt,[n(U,{class:"card-title"},{default:a(()=>[h(" Select Contacts ")]),_:1}),n(X,{class:"contact-count"},{default:a(()=>[h(" 232 of 233 contacts ")]),_:1})])]),_:1}),n(V,{class:"py-0 px-4"},{default:a(()=>[n(et,{label:"Type here","single-line":"",variant:"plain","prepend-inner-icon":"tabler-search",class:"input-field-icon"})]),_:1}),n(V,{class:"px-0 pt-4 pb-0"},{default:a(()=>[n(G,{lines:"two",class:"list-contact"},{default:a(()=>[(o(!0),s(B,null,$(e.users,(i,m)=>(o(),s(B,{key:i.name},[n(tt,{class:"py-5"},{prepend:a(()=>[n(Y,{image:i.avatar,size:"45"},null,8,["image"])]),append:a(()=>[n(nt,{key:"color",class:"checkbox",color:"success",value:"success"})]),default:a(()=>[n(E,{class:"contact-name"},{default:a(()=>[h(g(i.name),1)]),_:2},1024),n(E,{class:"contact-phone"},{default:a(()=>[t("span",null,g(i.phone),1)]),_:2},1024)]),_:2},1024),m!==e.users.length-1?(o(),F(ot,{key:0})):x("",!0)],64))),128))]),_:1})]),_:1})]),_:1}),t("div",qt,[t("div",null,[n(_,{"button-title":"continue",action:r.action,color:"btnBlack.color",style:d(e.btnBlack),variant:"contained"},null,8,["action","style"])])])])}const Dt=f(zt,[["render",Et]]),Lt={name:"Step3",components:{BtnRound:b,QuillEditorCustomer:st,Message:at},props:{action:{type:Function,required:!0}},setup(){return{btnBlack:v,messageImg:ct}}};const Wt={class:"step-3-wrapper"},Ot={class:"my-6 btn-next"};function jt(c,u,r,e,y,l){const _=p("Message"),i=p("BtnRound");return o(),s("div",null,[t("div",Wt,[n(_,{action:r.action},null,8,["action"])]),t("div",Ot,[t("div",null,[n(i,{"button-title":"continue",action:r.action,color:"btnBlack.color",style:d(e.btnBlack),variant:"contained"},null,8,["action","style"])])])])}const Qt=f(Lt,[["render",jt]]),Gt={name:"Step4",components:{BtnRound:b},props:{action:{type:Function,required:!0}},setup(){return{btnBlack:v}}};const Pt={class:"my-6 btn-next"};function Ht(c,u,r,e,y,l){const _=p("BtnRound");return o(),s("div",Pt,[t("div",null,[n(_,{"button-title":"continue",action:r.action,color:"btnBlack.color",style:d(e.btnBlack),variant:"contained"},null,8,["action","style"])])])}const Jt=f(Gt,[["render",Ht]]),Kt={name:"CreateCampain",components:{Step1:Nt,Step2:Dt,Step3:Qt,Step4:Jt,BtnRound:b,ImportContact:xt},setup(){return{curentStep:z(1),importContact:z(!1),btnBlack:v,steps:[{title:"Create Campaign"},{title:"Import Contacts"},{title:"Build Message"},{title:"Schedule Message"}]}},methods:{nextStep(){this.curentStep<4?this.curentStep===1&&!this.importContact?this.importContact=!0:(this.curentStep++,this.importContact=!1):this.$router.push("/campaign")},prevStep(){this.curentStep--}}};const M=c=>(O("data-v-293bc95a"),c=c(),j(),c),Ut={class:"biggest-container"},Xt={class:"container"},Yt={class:"select__container"},Zt={class:"wrapper-stepper mb-10"},te={class:"stepper"},ee=M(()=>t("div",{class:"stepper-progress"},[t("div",{class:"stepper-progress-bar"})],-1)),ne={class:"stepper-item-counter"},oe=M(()=>t("img",{class:"icon-success",src:it,alt:"verify"},null,-1)),se={class:"number"},ae={class:"stepper-item-title"},ce={key:0},ie={key:1},re={key:2},le={key:3},pe={key:4},_e={key:0,class:"btn-text-preview",style:{color:"#374151"}},de=M(()=>t("span",null,"Preview",-1)),ue=[de],me={key:1,class:"btn-phone"},he={key:2,class:"btn-phone"};function be(c,u,r,e,y,l){const _=p("Step1"),i=p("Step2"),m=p("ImportContact"),P=p("Step3"),H=p("Step4"),N=p("BtnRound");return o(),s("div",Ut,[t("div",Xt,[t("div",Yt,[T(t("h1",null," Create New Campaign ",512),[[q,e.curentStep!==1||e.importContact!==!0]]),T(t("div",Zt,[t("div",te,[ee,(o(),s(B,null,$(4,S=>t("div",{key:S,class:w(["stepper-item",{current:e.curentStep===S,success:e.curentStep>S}])},[t("div",ne,[oe,t("span",se,g(S),1)]),t("span",ae,g(e.steps[S-1].title),1)],2)),64))])],512),[[q,e.curentStep!==1||e.importContact!==!0]]),e.curentStep===1&&!e.importContact?(o(),s("div",ce,[n(_,{action:l.nextStep},null,8,["action"])])):e.curentStep===2?(o(),s("div",ie,[n(i,{action:l.nextStep},null,8,["action"])])):e.curentStep===1&&e.importContact?(o(),s("div",re,[n(m,{action:l.nextStep},null,8,["action"])])):e.curentStep===3?(o(),s("div",le,[n(P,{action:l.nextStep},null,8,["action"])])):e.curentStep===4?(o(),s("div",pe,[n(H,{action:l.nextStep},null,8,["action"])])):x("",!0)])]),t("div",{class:"btn-phone-container",style:d(e.curentStep===3?"justify-content: between; padding: 10px 20px":"justify-content: end ")},[e.curentStep===3?(o(),s("div",_e,ue)):x("",!0),e.importContact?x("",!0):(o(),s("div",me,[n(N,{"button-title":"continue",action:l.nextStep,color:"btnBlack.color",style:d(e.btnBlack),variant:"contained"},null,8,["action","style"])])),e.curentStep===1&&e.importContact?(o(),s("div",he,[n(N,{"button-title":"next",action:l.nextStep,color:"btnBlack.color",style:d(e.btnBlack),variant:"contained","icon-a-n-b":"tabler-chevron-right","icon-a-color-n-b":e.btnBlack.color},null,8,["action","style","icon-a-color-n-b"])])):x("",!0)],4)])}const ve=f(Kt,[["render",be],["__scopeId","data-v-293bc95a"]]),fe=Q({__name:"index",setup(c){return(u,r)=>(o(),F(ve))}}),Ne=Q({__name:"index",setup(c){return(u,r)=>(o(),F(fe))}});export{Ne as default};