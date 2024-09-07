(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2223],{94337:function(e,t,o){"use strict";o.r(t),o.d(t,{__N_SSP:function(){return H},default:function(){return F}});var A=o(98601),s=o(11550),n=o(24434),l=o(82821),r=o(15913),a=o(99976),c=o(61619),i=o(88667),u=o(91530),d=o.n(u),g=o(92379),p=o(75325),m=o(47584),f=o(651);function h(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);t&&(A=A.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,A)}return o}function O(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?h(Object(o),!0).forEach(function(t){(0,A.Z)(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):h(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}let b=e=>{let{onClose:t,onOpen:o}=e,A=(0,l.b)(),u=(0,r.oc)();return(0,g.useEffect)(()=>{o(),a.A.logEvent(c.M.noAuthWelcomeBackModalShown),i.m9.logEvent("chatgpt_no_auth_welcome_back_modal_shown")},[o]),(0,f.jsx)(n.Z,{isOpen:!0,onClose:d(),shouldIgnoreClickOutside:!0,showCloseButton:!1,type:"success",noPadding:!0,size:"custom",className:"max-w-[373px] sm:max-w-[400px]",position:u?"center":"bottom",children:(0,f.jsxs)("div",{className:"flex flex-col items-center justify-center px-6 py-8 sm:p-10",children:[(0,f.jsx)("p",{className:"mb-1 text-center text-2xl font-semibold",children:(0,f.jsx)(p.Z,O({},x.title))}),(0,f.jsx)("p",{className:"mb-6 text-center text-lg text-token-text-secondary",children:(0,f.jsx)(p.Z,O({},x.subtitle))}),(0,f.jsx)(s.z,{as:"button",size:"large",color:"primary",fullWidth:!0,className:"mb-2 sm:mb-3","data-testid":"welcome-login-button",onClick:()=>{let e=A({authType:"login"});a.A.logLogInButtonClicked({provider:e,location:"No Auth Welcome Back Modal"})},children:(0,f.jsx)(p.Z,O({},x.logInCta))}),(0,f.jsx)(s.z,{as:"button",size:"large",color:"secondary",fullWidth:!0,className:"mb-5",onClick:()=>{let e=A({authType:"signup"});a.A.logSignUpButtonClicked({provider:e,location:"No Auth Welcome Back Modal"})},children:(0,f.jsx)(p.Z,O({},x.signUpCta))}),(0,f.jsx)("a",{href:"#",className:"cursor-pointer font-semibold text-token-text-secondary underline sm:text-sm",onClick:e=>{e.preventDefault(),a.A.logEvent(c.M.noAuthWelcomeBackModalStayLoggedOutLinkClicked),i.m9.logEvent("chatgpt_no_auth_welcome_back_modal_stay_logged_out_link_clicked"),t()},"data-testid":"dismiss-welcome",children:(0,f.jsx)(p.Z,O({},x.stayLoggedOutLink))})]})})},x=(0,m.vU)({title:{id:"NoAuthWelcomeBackModal.title",defaultMessage:"Welcome back"},subtitle:{id:"7WQi5y",defaultMessage:"Log in or sign up to get smarter responses, upload files and images, and more."},signUpCta:{id:"NoAuthWelcomeBackModal.signUpCta",defaultMessage:"Sign up"},logInCta:{id:"NoAuthWelcomeBackModal.logInCta",defaultMessage:"Log in"},stayLoggedOutLink:{id:"NoAuthWelcomeBackModal.stayLoggedOut",defaultMessage:"Stay logged out"}});var j=o(70840),E=o(59144),y=o(66583),w=o(86481),_=o.n(w),B=o(49764),k=o(30115);function P(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);t&&(A=A.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,A)}return o}function C(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?P(Object(o),!0).forEach(function(t){(0,A.Z)(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):P(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}let v=e=>{let{onClose:t,onOpen:o}=e,A=(0,B.Z)(),s=(0,l.b)(),u=(0,r.oc)();return(0,g.useEffect)(()=>{o(),a.A.logEvent(c.M.noAuthGpt4oModalShown),i.m9.logEvent("chatgpt_no_auth_gpt_4o_modal_shown")},[o]),(0,f.jsx)(n.Z,{className:"max-w-md sm:max-w-[480px]",isOpen:!0,noPadding:!0,onClose:d(),position:u?"center":"bottom",shouldIgnoreClickOutside:!0,showCloseButton:!1,size:"custom",type:"success",children:(0,f.jsxs)("div",{className:"relative flex flex-col items-center rounded-xl text-center focus:outline-none",children:[(0,f.jsx)(_(),{src:j.Z,alt:"Background image",priority:!0,className:"w-full rounded-t-xl"}),(0,f.jsx)(k.P,{className:"absolute right-0 top-0 m-4",onClick:()=>{a.A.logEvent(c.M.noAuthGpt4oModalDismissed),i.m9.logEvent("chatgpt_no_auth_gpt_4o_modal_dismissed"),t()}}),(0,f.jsxs)("div",{className:"flex flex-col items-center p-8",children:[(0,f.jsx)(y.Dx,{className:"mb-2 font-semibold leading-6",children:(0,f.jsx)(p.Z,C({},M.title))}),(0,f.jsx)(y.dk,{className:"mb-5 text-center text-token-text-secondary",children:(0,f.jsx)(p.Z,C({},M.body))}),(0,f.jsxs)("div",{className:"flex justify-center gap-2",children:[(0,f.jsx)(E.Z.Button,{title:A.formatMessage(M.logInButtonText),className:"rounded-xl",color:"secondary",onClick:()=>{let e=s({authType:"login"});a.A.logLogInButtonClicked({location:"No Auth GPT 4o Modal",provider:e})}}),(0,f.jsx)(E.Z.Button,{title:A.formatMessage(M.signUpButtonText),className:"rounded-xl",color:"primary",onClick:()=>{let e=s({authType:"signup"});a.A.logSignUpButtonClicked({location:"No Auth GPT 4o Modal",provider:e})}})]})]})]})})},M=(0,m.vU)({title:{id:"22rZFl",defaultMessage:"Log in for smarter responses"},body:{id:"eiQJD6",defaultMessage:"Our latest model, GPT-4o, is smarter, understands images, can browse the web, and speaks more languages. Sign up or log in to try it for free."},logInButtonText:{id:"k1czMK",defaultMessage:"Log in"},signUpButtonText:{id:"sQLMzl",defaultMessage:"Sign up"}}),N=e=>{let{onClose:t,onOpen:o,type:A}=e;switch(A){case"default":return(0,f.jsx)(b,{onClose:t,onOpen:o});case"gpt-4o":return(0,f.jsx)(v,{onClose:t,onOpen:o})}};var D=o(99985),Q=o(86025),S=o(13249),z=o(45120);let I="has-dismissed-welcome-back-modal",Z=!!S.m.getItem(S.F.NoAuthHasSeenGpt4oModal),L=()=>{let{0:e,1:t}=(0,g.useState)(!0),{layer:o}=(0,z.AH)("3637408529"),A=o.get("is_no_auth_welcome_back_modal_enabled",!1),s=o.get("is_no_auth_gpt4o_modal_enabled",!1),{isUnauthenticated:n,isLoading:l}=(0,Q.u)(),r=(0,D.W)(),a=s&&!Z?"gpt-4o":"default";return(0,g.useEffect)(()=>{t(null!=sessionStorage.getItem(I))},[]),{close:()=>{t(!0),sessionStorage.setItem(I,"true")},isOpen:!l&&n&&A&&!e&&r,onOpen:(0,g.useCallback)(()=>{"gpt-4o"===a&&S.m.setItem(S.F.NoAuthHasSeenGpt4oModal,!0)},[a]),type:a}};var T=o(34977),W=o(39844);function U(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);t&&(A=A.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,A)}return o}function G(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?U(Object(o),!0).forEach(function(t){(0,A.Z)(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):U(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}var H=!0;function F(e){let t=(0,T.useRouter)(),o=e.conversationId??(0,W.wS)(t.asPath),A=(0,W.p9)(o),{close:s,isOpen:n,onOpen:l,type:r}=L();return((0,g.useEffect)(()=>{A&&t.replace("/",void 0,{shallow:!0})},[A,t]),A)?null:(0,f.jsxs)(f.Fragment,{children:[n?(0,f.jsx)(N,{onClose:s,onOpen:l,type:r}):null,(0,f.jsx)(W.ZP,G(G({},e),{},{urlThreadId:o}))]})}},41404:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[[...default]]",function(){return o(94337)}])},70840:function(e,t){"use strict";t.Z={src:"https://cdn.oaistatic.com/_next/static/media/gpt4o_nux_bg.59b50c3b.jpg",height:1159,width:2579,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oADAMBAAIQAxAAAAGsJN//xAAWEAEBAQAAAAAAAAAAAAAAAAADAhT/2gAIAQEAAQUCU50f/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQIA/9oACAEDAQE/AaBp3//EABYRAQEBAAAAAAAAAAAAAAAAAAECAP/aAAgBAgEBPwEpJN//xAAWEAADAAAAAAAAAAAAAAAAAAAAMXP/2gAIAQEABj8Coz//xAAZEAEAAgMAAAAAAAAAAAAAAAABABExQWH/2gAIAQEAAT8hpBLMbzZP/9oADAMBAAIAAwAAABD/AP/EABYRAQEBAAAAAAAAAAAAAAAAAAEAQf/aAAgBAwEBPxBATb//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREh/9oACAECAQE/EJQ5h//EABkQAQACAwAAAAAAAAAAAAAAAAEAESExUf/aAAgBAQABPxBaYwo04HBqf//Z",blurWidth:8,blurHeight:4}}},function(e){e.O(0,[4160,4198,5239,4089,6030,5592,3991,5113,4398,4818,9788,2349,759,4984,1438,6481,4218,5628,4427,4335,2745,2804,4993,4315,7005,3809,2350,3127,9857,5493,9385,9844,2888,9774,179],function(){return e(e.s=41404)}),_N_E=e.O()}]);
//# sourceMappingURL=[[...default]]-0ecb3037a60256a4.js.map