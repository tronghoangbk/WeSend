import{_ as o}from"./arrows.24378433.js";import{C as d,o as _,c as r,m as t,p as s,H as n,bs as l,F as b,a6 as C,r as h}from"./index.d6ea0e9d.js";const f={name:"List",setup(){return{isShowModal:!1}},methods:{viewCampaign(){console.log("view campaign",this.$router),this.$router.push({path:"/campaign/detail"})}}},a="/assets/excel.5da33769.svg";const w={class:"contact-container"},x=l('<div class="contact-title"><div class="contact-title-name"><span>Campaign Name</span><img src="'+o+'"></div><div class="contact-title-phone"><span>CreAted Date</span><img src="'+o+'"></div><div class="contact-title-gender"><span>Contacts</span><img src="'+o+'"></div><div class="contact-title-age"><span>Status</span><img src="'+o+'"></div><div class="contact-title-country"><span>MEdia Type</span><img src="'+o+'"></div><div class="contact-title-action"><span></span></div></div>',1),y=l('<div class="contact-content-name"><p>Duis senectus ultrices dignissim aliquam ultrices</p></div><div class="contact-content-phone"><p>24 Sep, 2022</p></div><div class="contact-content-gender"><p>4500</p></div><div class="contact-content-age"><span>Unscheduled</span></div><div class="contact-content-country"><p>Image</p></div>',5),S={class:"contact-content-action"},$={class:"action-1"},k=t("button",null,[t("img",{src:a,alt:"excel icon"})],-1),I=l('<div class="contact-content-name"><p>Duis senectus ultrices dignissim aliquam ultrices</p></div><div class="contact-content-phone"><p>24 Sep, 2022</p></div><div class="contact-content-gender"><p>4500</p></div><div class="contact-content-age"><span class="scheduled">Scheduled (10)</span></div><div class="contact-content-country"><p>Image</p></div>',5),B={class:"contact-content-action"},D={class:"action-1"},L=t("button",null,[t("img",{src:a,alt:"excel icon"})],-1),q=l('<div class="contact-content-name"><p>Duis senectus ultrices dignissim aliquam ultrices</p></div><div class="contact-content-phone"><p>24 Sep, 2022</p></div><div class="contact-content-gender"><p>4500</p></div><div class="contact-content-age"><span class="active">Active</span></div><div class="contact-content-country"><p>Image</p></div>',5),N={class:"contact-content-action"},V={class:"action-1"},E=t("button",null,[t("img",{src:a,alt:"excel icon"})],-1),F=t("p",null,"Duis senectus ultrices dignissim aliquam ultrices",-1),T={class:"item"},A=t("span",null,"24 Sep, 2022",-1),M={class:"item-list"},R={class:"item"},U=t("span",null,"4500",-1),Y={class:"item"},H=t("span",null,"Image",-1),j={class:"item-footer"},z=t("span",{class:"active"},"Active",-1),G={class:"action-1"},J=t("button",null,[t("img",{src:a,alt:"excel icon"})],-1),K=t("p",null,"Duis senectus ultrices dignissim aliquam ultrices",-1),O={class:"item"},P=t("span",null,"24 Sep, 2022",-1),Q={class:"item-list"},W={class:"item"},X=t("span",null,"4500",-1),Z={class:"item"},tt=t("span",null,"Image",-1),st={class:"item-footer"},nt=t("span",{class:"scheduled"},"Scheduled (10)",-1),et={class:"action-1"},it=t("button",null,[t("img",{src:a,alt:"excel icon"})],-1),ct=t("p",null,"Duis senectus ultrices dignissim aliquam ultrices",-1),at={class:"item"},ot=t("span",null,"24 Sep, 2022",-1),lt={class:"item-list"},dt={class:"item"},_t=t("span",null,"4500",-1),rt={class:"item"},ut=t("span",null,"Image",-1),pt={class:"item-footer"},vt=t("span",null,"Unscheduled",-1),mt={class:"action-1"},ht=t("button",null,[t("img",{src:a,alt:"excel icon"})],-1),gt={class:"footer"},bt={class:"itemfootericon"},Ct=l('<div class="itemfooter active"> 1 </div><div class="itemfooter"> 2 </div><div class="itemfooter active"> ... </div><div class="itemfooter"> 9 </div><div class="itemfooter" style="border-right:0;"> 10 </div>',5),ft={class:"itemfootericon"};function wt(u,e,p,v,m,i){return _(),r("div",null,[t("div",w,[x,t("div",{class:"contact-content",onClick:e[0]||(e[0]=(...c)=>i.viewCampaign&&i.viewCampaign(...c))},[y,t("div",S,[t("div",$,[k,t("button",null,[s(n,{icon:"tabler-copy"})]),t("button",null,[s(n,{icon:"tabler-trash"})])])])]),t("div",{class:"contact-content",onClick:e[1]||(e[1]=(...c)=>i.viewCampaign&&i.viewCampaign(...c))},[I,t("div",B,[t("div",D,[L,t("button",null,[s(n,{icon:"tabler-copy"})]),t("button",null,[s(n,{icon:"tabler-trash"})])])])]),t("div",{class:"contact-content",onClick:e[2]||(e[2]=(...c)=>i.viewCampaign&&i.viewCampaign(...c))},[q,t("div",N,[t("div",V,[E,t("button",null,[s(n,{icon:"tabler-copy"})]),t("button",null,[s(n,{icon:"tabler-trash"})])])])])]),t("div",{class:"campaign-mobile",onClick:e[6]||(e[6]=(...c)=>i.viewCampaign&&i.viewCampaign(...c))},[t("div",{class:"campaign-item",onClick:e[3]||(e[3]=(...c)=>i.viewCampaign&&i.viewCampaign(...c))},[F,t("div",T,[s(n,{icon:"tabler-calendar-due"}),A]),t("div",M,[t("div",R,[s(n,{icon:"tabler-phone"}),U]),t("div",Y,[s(n,{icon:"tabler-video-plus"}),H])]),t("div",j,[z,t("div",G,[J,t("button",null,[s(n,{icon:"tabler-copy"})]),t("button",null,[s(n,{icon:"tabler-trash"})])])])]),t("div",{class:"campaign-item",onClick:e[4]||(e[4]=(...c)=>i.viewCampaign&&i.viewCampaign(...c))},[K,t("div",O,[s(n,{icon:"tabler-calendar-due"}),P]),t("div",Q,[t("div",W,[s(n,{icon:"tabler-phone"}),X]),t("div",Z,[s(n,{icon:"tabler-video-plus"}),tt])]),t("div",st,[nt,t("div",et,[it,t("button",null,[s(n,{icon:"tabler-copy"})]),t("button",null,[s(n,{icon:"tabler-trash"})])])])]),t("div",{class:"campaign-item",onClick:e[5]||(e[5]=(...c)=>i.viewCampaign&&i.viewCampaign(...c))},[ct,t("div",at,[s(n,{icon:"tabler-calendar-due"}),ot]),t("div",lt,[t("div",dt,[s(n,{icon:"tabler-phone"}),_t]),t("div",rt,[s(n,{icon:"tabler-video-plus"}),ut])]),t("div",pt,[vt,t("div",mt,[ht,t("button",null,[s(n,{icon:"tabler-copy"})]),t("button",null,[s(n,{icon:"tabler-trash"})])])])])]),t("div",gt,[t("div",bt,[s(n,{icon:"tabler-arrow-left"})]),Ct,t("div",ft,[s(n,{icon:"tabler-arrow-right"})])])])}const xt=d(f,[["render",wt]]),yt={name:"List",components:{},setup(){return{}},methods:{createCampaign(){this.$router.push("/create-campaign")}}},St="/assets/Vector1.e3db4175.svg",$t="/assets/filter.97f93ae9.svg";const kt={class:"searchbar"},It=t("div",{class:"campaign"},[t("h1",{class:"title"}," Campaign "),t("div",{class:"totalList"}," 10 ")],-1),Bt=t("img",{style:{width:"24px",height:"24px"},src:St},null,-1),Dt=t("h1",{class:"text"},[C(" Create New "),t("span",null,"Campaign")],-1),Lt=[Bt,Dt],qt={class:"contact-header"},Nt={class:"contact-search"},Vt=t("input",{type:"text",placeholder:"Search by name"},null,-1),Et={class:"contact-button"},Ft=t("h6",null,"FILTER BY",-1),Tt=t("span",null,"Date from:",-1),At=t("span",null,"Date to:",-1),Mt={class:"status"},Rt=t("span",null,"Status",-1),Ut=t("button",{class:"contact-button-mobile"},[t("h6",null,"FILTER BY"),t("button",null,[t("img",{src:$t,alt:"filter"})])],-1);function Yt(u,e,p,v,m,i){return _(),r(b,null,[t("div",kt,[It,t("button",{class:"btnCreate",onClick:e[0]||(e[0]=(...c)=>i.createCampaign&&i.createCampaign(...c))},Lt)]),t("div",qt,[t("div",Nt,[s(n,{icon:"tabler-search"}),Vt]),t("div",Et,[Ft,t("button",null,[Tt,s(n,{icon:"tabler-calendar-due"})]),t("button",null,[At,s(n,{icon:"tabler-calendar-due"})]),t("button",Mt,[Rt,s(n,{icon:"tabler-chevron-down"})])]),Ut])],64)}const Ht=d(yt,[["render",Yt]]);const jt={name:"Campaign",components:{CampaignList:xt,SearchBar:Ht}},zt={class:"campaign-container"};function Gt(u,e,p,v,m,i){const c=h("SearchBar"),g=h("CampaignList");return _(),r("div",zt,[s(c),s(g)])}const Ot=d(jt,[["render",Gt],["__scopeId","data-v-408a387e"]]);export{Ot as default};
