import{b2 as a,o as e,c as n,d as l,r as p,F as $,a as h,p as _}from"./index.b6d1adaf.js";import{T as f}from"./TabsGrow.18579e5a.js";import"./lazy.debcbdc8.js";const C={name:"CampaignDetail"};function g(t,o,c,s,r,d){return e(),n("div",null,"dshjd")}const b=a(C,[["render",g]]),S={name:"CampaignMessage"};function v(t,o,c,s,r,d){return e(),n("div",null,"dshjd")}const x=a(S,[["render",v]]),y=l({name:"NoSchedulesCard"});function N(t,o,c,s,r,d){return" No schedules "}const k=a(y,[["render",N]]),T={name:"CampaignSchedulesCard"};function w(t,o,c,s,r,d){return e(),n("div",null," Card ")}const G=a(T,[["render",w]]),M={name:"CampaignSchedules",components:{SchedulesCard:G,NoSchedulesCard:k},setup(){return{items:[1,2,3,4,5,6,7,8,9,10]}}},j={key:0},B={key:1};function D(t,o,c,s,r,d){const i=p("SchedulesCard"),m=p("NoSchedulesCard");return e(),n("div",null,[s.items.length>0?(e(),n("div",j,[(e(!0),n($,null,h(s.items,u=>(e(),n("div",{key:u},[_(i)]))),128))])):(e(),n("div",B,[_(m)]))])}const F=a(M,[["render",D]]),E=l({name:"CampaignDetail",components:{TabsGrow:f},setup(){return{items:[{label:"Schedules",icon:"tabler-calendar-event",body:F},{label:"Contacts",icon:"tabler-phone",body:b},{label:"Messages",icon:"mdi-message-text",body:x}]}}});function L(t,o,c,s,r,d){const i=p("TabsGrow");return e(),n("div",null,[_(i,{items:t.items},null,8,["items"])])}const A=a(E,[["render",L]]);export{A as default};
