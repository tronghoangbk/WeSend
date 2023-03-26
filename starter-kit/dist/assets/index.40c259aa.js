import{_ as l}from"./AppOtpInput.vue_vue_type_style_index_0_lang.9b825fbf.js";import{b as d}from"./route-block.3d2a9a4d.js";import{y as u,o as a,c as r,m as e,p as $,b7 as h,b8 as f,z as s,k as g,d as k,r as V,b as x,bq as I}from"./index.4255a4f1.js";import"./VTextField.92694589.js";import"./forwardRefs.c003b6b8.js";const v={name:"Verify",components:{AppOtpInput:l},props:{action:{type:Function,default:()=>{}}}},c=t=>(h("data-v-7cd665de"),t=t(),f(),t),C={class:"verify__container"},N=c(()=>e("h1",null,[s("We"),e("span",null,"Send")],-1)),A={class:"verify__content"},W=c(()=>e("h2",null,"Verify",-1)),w=c(()=>e("p",null,"Please enter the code send on your phone for verification",-1)),B={class:"input-number"},P={class:"verify__content-button"},R=c(()=>e("p",{class:"resend"},[s(" Didn\u2019t received the code. "),e("a",{href:"#"},"Resend"),s(" (20s) ")],-1)),E=c(()=>e("p",null,[s("New to WeSend. "),e("a",{href:"#"},"Sign up")],-1));function O(t,n,_,y,S,b){const p=l;return a(),r("div",C,[N,e("div",A,[W,w,e("div",B,[$(p)]),e("div",P,[e("button",{onClick:n[0]||(n[0]=(...i)=>_.action&&_.action(...i))}," Verify ")]),R]),E])}typeof d=="function"&&d(v);const T=u(v,[["render",O],["__scopeId","data-v-7cd665de"]]);const q=g(1),m=k({components:{Verify:T},setup(){return{step:q}},methods:{nextStep(){this.step++},VerifyAction(){this.$router.push("/")}}}),o=t=>(h("data-v-00c5ae44"),t=t(),f(),t),z={class:"sign-up"},D={class:"container"},F={key:0,class:"sign-up__container"},K=o(()=>e("h1",null,[s("We"),e("span",null,"Send")],-1)),U={class:"sign-up__content"},j=o(()=>e("h2",null,"Sign In",-1)),G=o(()=>e("p",null," Enter your phone number to Sign in to your account ",-1)),H={class:"input-number"},J=o(()=>e("input",{type:"number",placeholder:"+972"},null,-1)),L=o(()=>e("input",{type:"number",placeholder:"0000000000",class:"phone-number"},null,-1)),M={class:"sign-up-input-checkbox"},Q=o(()=>e("div",{class:"input-checkbox"},[e("input",{type:"checkbox"}),e("label",null,"Keep me Sign in")],-1)),X=o(()=>e("p",null,[s("New to WeSend. "),e("a",{href:"#"},"Sign up")],-1)),Y=I('<div class="sign-up__footer" data-v-00c5ae44><div class="sign-up__footer__link" data-v-00c5ae44><a href="#" data-v-00c5ae44>Contact Us</a><span data-v-00c5ae44>|</span><a href="#" data-v-00c5ae44>Privacy Policy</a><span data-v-00c5ae44>|</span><a href="#" data-v-00c5ae44>Terms &amp; Conditions</a></div><p data-v-00c5ae44>\xA9 2022 We Send. All Rights Reserved.</p></div>',1);function Z(t,n,_,y,S,b){const p=V("Verify");return a(),r("div",z,[e("div",D,[t.step===1?(a(),r("div",F,[K,e("div",U,[j,G,e("div",H,[J,L,e("button",{onClick:n[0]||(n[0]=(...i)=>t.nextStep&&t.nextStep(...i))}," Sign in ")]),e("div",M,[Q,e("button",{onClick:n[1]||(n[1]=(...i)=>t.nextStep&&t.nextStep(...i))}," Sign in ")])]),X])):(a(),x(p,{key:1,action:t.VerifyAction},null,8,["action"])),Y])])}typeof d=="function"&&d(m);const ie=u(m,[["render",Z],["__scopeId","data-v-00c5ae44"]]);export{ie as default};
