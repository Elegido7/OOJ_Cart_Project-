"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7005],{28605:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(93677);n(92379);var a=n(651);function l(e){let{title:t,description:n,onClose:l,actionButton:i,cancelButton:o}=e;return(0,a.jsx)(r.fC,{open:!0,onOpenChange:e=>{e||l()},children:(0,a.jsxs)(r.h_,{children:[(0,a.jsx)(r.aV,{className:"fixed inset-0 border-token-border-medium radix-state-open:animate-show"}),(0,a.jsxs)(r.VY,{className:"fixed start-1/2 top-1/2 flex max-h-[85vh] w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 flex-col gap-2 rounded-2xl bg-token-main-surface-primary shadow-2xl focus:outline-none radix-state-open:animate-alertShow",onEscapeKeyDown:e=>e.preventDefault(),children:[(0,a.jsx)(r.Dx,{className:"border-b border-token-border-light p-4 text-lg font-semibold md:p-6",children:t}),(0,a.jsxs)("div",{className:"flex flex-col gap-4 p-4 md:p-6",children:[(0,a.jsx)(r.dk,{className:"text-base",children:n}),(0,a.jsxs)("div",{className:"flex justify-end gap-2",children:[o&&(0,a.jsx)(r.$j,{asChild:!0,children:o}),(0,a.jsx)(r.aU,{asChild:!0,children:i})]})]})]})]})})}},92609:function(e,t,n){n.d(t,{Z:function(){return p},d:function(){return m}});var r=n(98601),a=n(52088),l=n(92745),i=n(36368),o=n(19841),s=n(651);let c=["href","children"],u=["className","openNewTab","type"];function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function m(e){let{href:t,children:n}=e,r=(0,a.Z)(e,c),o=(0,l.h9)();return(0,s.jsx)("a",f(f({href:(0,i.k)(t),target:"_blank",rel:o?"noopener noreferrer":"noopener"},r),{},{children:n}))}function p(e){let{className:t,openNewTab:n=!1,type:r="primary"}=e,l=(0,a.Z)(e,u);return(0,s.jsx)("a",f({rel:"noopener",className:(0,o.default)("cursor-pointer font-normal underline","primary"===r&&"text-green-600",t),target:n?"_blank":"_self"},l))}},55356:function(e,t,n){n.d(t,{HC:function(){return l},QI:function(){return a}});var r=n(15478);r.Z.ol`ml-5 list-decimal`;let a=r.Z.ul`ml-3 list-disc`,l=r.Z.li`marker:text-token-text-tertiary text-token-text-primary mb-2`},44087:function(e,t,n){n.d(t,{$3:function(){return d},Ap:function(){return s},CV:function(){return f},GA:function(){return u},Gk:function(){return b},bE:function(){return x},cI:function(){return p},eA:function(){return m},my:function(){return h},qH:function(){return c}});var r=n(99333),a=n(93951),l=n(31498),i=n(92379),o=n(49764);function s(){let e=(0,o.Z)(),t=e.formatMessage(k.adminRoleName),n=e.formatMessage(k.ownerRoleName),a=e.formatMessage(k.standardRoleName);return(0,i.useMemo)(()=>({[r.r3.OWNER]:n,[r.r3.ADMIN]:t,[r.r3.STANDARD]:a}),[n,t,a])}function c(e){let t=(0,o.Z)(),n=e?.isTeam(),r=e?.isEnterprise(),a=e?.isEdu();if(e){if(n)return t.formatMessage(k.teamPlanName);if(r)return t.formatMessage(k.enterprisePlanName);if(a)return t.formatMessage(k.eduPlanName)}return t.formatMessage(k.personalPlanName)}function u(e){return f((0,o.Z)(),e)}function d(){let e=(0,a.t)();return f((0,o.Z)(),e)}function f(e,t){return null==t||t.isPersonalAccount()?e.formatMessage(k.personalWorkspaceTitle):t.data.name??e.formatMessage(k.defaultWorkspaceTitle)}function m(){let e=(0,l.aF)();return e?.email??null}function p(){let e=(0,l.aF)();return e?.name??e?.email??null}function g(){return(0,l.ec)(e=>{let{workspaces:t}=e;return t})}function h(){let{data:e}=(0,a.rk)();return e?.accountItems.filter(e=>!e.isDeactivated())??[]}function b(e){let t=g().find(t=>t.id===e);return t?.role===r.r3.OWNER}function x(e){let t=g().find(t=>t.id===e);return t?.role===r.r3.ADMIN}let k=(0,n(47584).vU)({defaultWorkspaceTitle:{id:"useWorkspaces.defaultWorkspaceTitle",defaultMessage:"Untitled Workspace"},personalWorkspaceTitle:{id:"useWorkspaces.personalWorkspaceTitle",defaultMessage:"Personal account"},personalPlanName:{id:"useWorkspaces.personalPlanName",defaultMessage:"Personal"},enterprisePlanName:{id:"useWorkspaces.enterprisePlanName",defaultMessage:"Enterprise"},eduPlanName:{id:"useWorkspaces.eduPlanName",defaultMessage:"Edu"},teamPlanName:{id:"useWorkspaces.teamPlanName",defaultMessage:"Team"},adminRoleName:{id:"useWorkspaces.adminRoleName",defaultMessage:"Admin"},ownerRoleName:{id:"useWorkspaces.ownerRoleName",defaultMessage:"Owner"},standardRoleName:{id:"useWorkspacews.standardRoleName",defaultMessage:"Member"}})},69338:function(e,t,n){n.d(t,{j:function(){return o}});var r=n(19841),a=n(11550),l=n(30115),i=n(651);let o=e=>{let{onDismiss:t,title:n,content:o,onPrimaryCtaClick:s,primaryCtaText:c,onSecondaryCtaClick:u,secondaryCtaText:d,isElevated:f=!0}=e;return(0,i.jsxs)("div",{className:(0,r.default)("flex w-full items-start gap-4 rounded-2xl border border-token-border-light bg-token-main-surface-primary py-4 pl-5 pr-3 text-sm text-token-text-primary [text-wrap:pretty] dark:border-transparent dark:bg-token-main-surface-secondary md:items-center lg:mx-auto",f&&"shadow-xxs"),children:[(0,i.jsxs)("div",{className:"mt-1.5 flex grow flex-col items-start gap-4 md:mt-0 md:flex-row md:items-center md:justify-between md:gap-8",children:[(0,i.jsxs)("div",{className:"flex max-w-none flex-col",children:[n&&(0,i.jsx)("div",{className:(0,r.default)("font-bold text-token-text-primary"),children:n}),(0,i.jsx)("div",{className:(0,r.default)(n?"text-token-text-secondary":""),children:o})]}),(c||d)&&(0,i.jsxs)("div",{className:"flex shrink-0 gap-2 pb-1 md:pb-0",children:[d&&(0,i.jsx)(a.z,{onClick:u,color:"secondary",className:"shrink-0",children:d}),c&&(0,i.jsx)(a.z,{onClick:s,color:"primary",className:"shrink-0",children:c})]})]}),(0,i.jsx)("div",{className:"flex shrink-0 items-center gap-2",children:!!t&&(0,i.jsx)(l.P,{onClick:t})})]})}},89692:function(e,t,n){n.d(t,{Dr:function(){return C},Jx:function(){return T},f6:function(){return N},gO:function(){return D},im:function(){return S}});var r=n(98601),a=n(16757),l=n(28605),i=n(11550),o=n(92609),s=n(69338),c=n(24907),u=n(60682),d=n(93951),f=n(99976),m=n(61619),p=n(88667),g=n(30474),h=n(34977),b=n(92379),x=n(75325),k=n(49764),y=n(47584),j=n(651);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let w=u.pm.UseSidekick,O=u.pm.SidekickLauncherOnboarding,_="https://persistent.oaistatic.com/sidekick/public/ChatGPT_Desktop_public_latest.dmg",M="download";function N(){let e=(0,d.t)(),t=(0,p.ep)("1696863369").layer.get("has_sidekick_access",!1);return null!=e&&t}function C(){let e=(0,h.useRouter)(),t=((0,g.L)(()=>e.asPath)??"").split("#");return{openModal:()=>{let t=e.asPath.split("#");e.replace(t[0]+"#"+M)},closeModal:()=>{e.replace(t[0])},isOpen:t[1]===M}}function S(e){let{eligible:t,isLoading:n}=(0,c.g)(),r=N(),{eligible:l,isLoading:i}=(0,u.qg)(w),{eligible:o,isLoading:s}=(0,u.qg)(O);return{eligible:!(t||!l||!o||!r||e.conversationMode?.kind!==a.OL.PrimaryAssistant)&&p.m9.getLayerValue({layerName:"1696863369",key:"show_nux_banner",defaultValue:!1}),isLoading:n||s||i}}function T(e){let{onClose:t}=e;(0,b.useEffect)(()=>{f.A.logEvent(m.M.sidekickAnnouncementShown),p.m9.logEvent("chatgpt_sidekick_announcement_shown")},[]);let{markAsViewed:n}=(0,u.qg)(w),r=(0,b.useCallback)(()=>{n(),f.A.logEvent(m.M.sidekickAnnouncementDismissed),p.m9.logEvent("chatgpt_sidekick_announcement_closed"),t&&t()},[n,t]),a={downloadUrl:_,markAsDownloaded:(0,b.useCallback)(()=>{f.A.logEvent(m.M.sidekickAnnouncementLinkClicked),p.m9.logEvent("chatgpt_sidekick_announcement_download_clicked"),n(),t&&t()},[n,t]),markAsViewed:r,isSidekickAvailable:N()};return(0,j.jsx)(A,P({},a))}function D(){let{closeModal:e,isOpen:t}=C(),n=N(),r=(0,b.useMemo)(()=>({isDesktopAppAvailable:n}),[n]);return((0,b.useEffect)(()=>{t&&(f.A.logEvent(m.M.sidekickDownloadModalShown,P({},r)),p.m9.logEvent("chatgpt_sidekick_modal_shown"))},[r,t]),t)?(0,j.jsx)(B,{downloadUrl:_,markAsDownloaded:()=>{f.A.logEvent(m.M.sidekickDownloadModalDownloaded,r),p.m9.logEvent("chatgpt_sidekick_modal_download_clicked"),e()},markAsViewed:()=>{f.A.logEvent(m.M.sidekickDownloadModalClosed,r),p.m9.logEvent("chatgpt_sidekick_modal_closed"),e()},isSidekickAvailable:n}):null}function B(e){let{downloadUrl:t,markAsDownloaded:n,markAsViewed:r,isSidekickAvailable:a}=e,s=a?E.modalTitleEligible:E.modalTitleNotEligible,c=(0,j.jsx)(x.Z,P({},s)),u=(0,j.jsx)(x.Z,P({},E.modalContent)),d=a?E.disclaimer:E.comingSoonDisclaimer,f=(0,j.jsx)(x.Z,P(P({},d),{},{values:{learnMoreLink:e=>(0,j.jsx)(o.Z,{openNewTab:!0,href:"https://help.openai.com/en/articles/9275200",children:e})}})),m=(0,j.jsxs)("div",{children:[(0,j.jsx)("div",{children:u}),(0,j.jsx)("div",{className:"mt-2",children:f})]}),p=(0,j.jsx)(i.z,{as:"link",to:t,color:"primary",onClick:n,openNewTab:!0,children:(0,j.jsx)(x.Z,P({},E.download))}),g=(0,j.jsx)(i.z,{color:"secondary",onClick:r,children:(0,j.jsx)(x.Z,P({},E.close))}),h=a?p:g,b=a?g:void 0;return(0,j.jsx)(l.Z,{onClose:r,title:c,description:m,actionButton:h,cancelButton:b})}function A(e){let{markAsDownloaded:t,markAsViewed:n}=e,r=(0,k.Z)(),a=(0,b.useCallback)(()=>{window.open(_,"_blank"),t()},[t]),l=(0,j.jsx)(x.Z,P({},d.t()?.isPlus()?E.bannerTitleMentioningPlus:E.bannerTitleNotMentioningPlus)),i=(0,j.jsx)(x.Z,P({},E.bannerContent)),c=(0,j.jsx)(x.Z,P(P({},E.disclaimer),{},{values:{learnMoreLink:e=>(0,j.jsx)(o.Z,{openNewTab:!0,href:"https://help.openai.com/en/articles/9275200",children:e})}})),u=(0,j.jsxs)("div",{className:"flex-grow",children:[(0,j.jsx)("div",{className:"mb-0.5 font-semibold",children:l}),(0,j.jsxs)("span",{className:"text-token-text-secondary",children:[i," ",c]})]});return(0,j.jsx)(s.j,{onPrimaryCtaClick:a,primaryCtaText:r.formatMessage(E.download),onDismiss:n,content:u})}let E=(0,y.vU)({bannerTitleNotMentioningPlus:{id:"SidekickOnboarding.bannerTitleEnterprisey_2",defaultMessage:"ChatGPT is available for macOS 14+ with Apple Silicon"},bannerTitleMentioningPlus:{id:"SidekickOnboarding.bannerTitleMentioningPlus",defaultMessage:"ChatGPT is now available for macOS—Plus users get early access"},modalTitleEligible:{id:"SidekickOnboarding.modalTitleEligible",defaultMessage:"The ChatGPT app is now available for macOS"},modalTitleNotEligible:{id:"SidekickOnboarding.modalTitleNotEligible",defaultMessage:"The ChatGPT macOS desktop app is coming soon"},modalContent:{id:"SidekickOnboarding.modal_content_eligible",defaultMessage:"Quickly access ChatGPT from anywhere on your computer with a shortcut: Option + Space. Share screenshots, upload files and photos, have voice conversations, and search through past conversations."},bannerContent:{id:"SidekickOnboarding.banner_content_3",defaultMessage:"Get faster access to ChatGPT with the Option + Space shortcut and the floating companion window."},disclaimer:{id:"SidekickOnboarding.disclaimer_3",defaultMessage:"<learnMoreLink>Learn more</learnMoreLink>."},comingSoonDisclaimer:{id:"SidekickOnboarding.coming_soon_disclaimer",defaultMessage:"The app will be available over the next couple of weeks."},download:{id:"SidekickOnboarding.download",defaultMessage:"Download"},close:{id:"SidekickOnboarding.close",defaultMessage:"Close"}})},71829:function(e,t,n){let r;n.d(t,{IB:function(){return o},M4:function(){return i},MG:function(){return l}});var a=n(25025);function l(e,t){r=t,e({hash:a.D$})}function i(e){e(window.location.pathname+window.location.search)}function o(){let e=r;return r=void 0,e}},25025:function(e,t,n){n.d(t,{B2:function(){return a},D$:function(){return s},D7:function(){return u},Ks:function(){return o},Zr:function(){return i},_4:function(){return c},m1:function(){return l},ti:function(){return r}});let r="https://help.openai.com/en/collections/3943089-billing",a="https://openai.com/enterprise",l="https://help.openai.com/en/articles/7905690-how-do-i-cancel-my-apple-subscription-for-chatgpt-plus-in-the-chatgpt-ios-app",i="https://help.openai.com/en/articles/8258076-how-to-cancel-my-plus-subscription-in-the-chatgpt-android-app",o="https://help.openai.com/en/articles/7102672-how-can-i-access-gpt-4",s="pricing",c={WEBAPP:"chatgpt_web",MOBILE_IOS:"chatgpt_mobile_ios",MOBILE_ANDROID:"chatgpt_mobile_android",GRANTED:"chatgpt_gratis_recepient",NOT_PURCHASED:"chatgpt_not_purchased"},u={ALREADY_PAID:"User is already paid"}},50454:function(e,t,n){n.d(t,{IW:function(){return v},Re:function(){return y},Y6:function(){return j},ZY:function(){return P},c0:function(){return _},sY:function(){return w},sr:function(){return M}});var r,a=n(98601),l=n(28146),i=n(55356),o=n(43991),s=n(95182),c=n.n(s),u=n(75325),d=n(47584),f=n(15478),m=n(651);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach(function(t){(0,a.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let h=f.Z.div`p-6`,b=f.Z.label`font-semibold text-base cursor-pointer`,x=f.Z.div`flex flex-col gap-3 text-token-text-secondary text-sm mt-3`,k=f.Z.p`text-token-text-primary`,y=f.Z.s`text-token-text-tertiary`,j=2;function v(e){let{billingType:t,name:n,billingFeatures:r,cost:a,costStructure:s}=e;return(0,m.jsxs)(h,{children:[(0,m.jsxs)("div",{className:"flex items-center gap-4",children:[(0,m.jsx)(o.ck,{value:t,id:t,className:"h-5 w-5 cursor-pointer rounded-full border border-token-border-medium bg-token-main-surface-primary outline-none hover:bg-token-main-surface-secondary radix-state-checked:border-green-500 radix-state-checked:bg-green-500",children:(0,m.jsx)(o.z$,{className:"flex items-center justify-center",children:(0,m.jsx)(l.$As,{className:"mt-0.5 h-[14px] w-[14px] stroke-[3] text-white"})})}),(0,m.jsx)(b,{htmlFor:t,children:(0,m.jsx)(u.Z,g({},n))})]}),(0,m.jsxs)(x,{children:[(0,m.jsxs)("div",{children:[(0,m.jsx)(k,{children:(0,m.jsx)(u.Z,g(g({},a),{},{values:{s:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,m.jsx)(y,{children:t})}}}))}),(0,m.jsx)("p",{children:(0,m.jsx)(u.Z,g({},s))})]}),(0,m.jsx)(i.QI,{children:r.map(e=>(0,m.jsx)(i.HC,{children:(0,m.jsx)(u.Z,g({},e))},e.id))})]})]})}function P(e){let{numSeats:t,minSeats:n,setNumSeats:r}=e;return(0,m.jsxs)("div",{className:"mb-3 flex items-center",children:[(0,m.jsx)("button",{disabled:t<=n,onClick:e=>{let t=e.shiftKey;r(e=>c()(e-=t?10:1,n,999))},className:"px-4 py-2 disabled:cursor-not-allowed disabled:text-token-text-secondary",children:(0,m.jsx)(l.V_R,{className:"icon-sm"})}),(0,m.jsx)("input",{type:"number",min:n,max:999,name:"seats",value:t,onChange:e=>{r(parseInt(e.target.value))},onBlur:()=>{t<n&&r(n),t>999&&r(999),t||r(n)},className:"m-0 h-9 appearance-none rounded border border-gray-200 px-2 py-0 text-center text-sm text-gray-800 shadow-none outline-none ring-transparent focus:border-green-500 focus:ring-green-500 dark:border-gray-700"}),(0,m.jsx)("button",{disabled:t>=999,onClick:e=>{let t=e.shiftKey;r(e=>c()(e+=t?10:1,n,999))},className:"px-4 py-2 disabled:cursor-not-allowed disabled:text-token-text-secondary",children:(0,m.jsx)(l.Vz5,{className:"icon-sm"})})]})}let w=(0,d.vU)({flexiblePlanName:{id:"teamBilling.flexiblePlan.name",defaultMessage:"Flexible plan"},flexiblePlanCost:{id:"teamBilling.flexiblePlan.cost",defaultMessage:"USD $30"},flexibleBilledMonthly:{id:"teamBilling.flexiblePlan.billedMonthly",defaultMessage:"Price billed monthly"},flexibleAddRemoveUsers:{id:"teamBilling.flexiblePlan.addRemoveUsers",defaultMessage:"Add or remove users as needed"},flexibleMinBill:{id:"teamBilling.flexiblePlan.minBill",defaultMessage:"The minimum monthly bill is for 2 users, USD $60/month"},seatsTitle:{id:"teamBilling.seatsTitle",defaultMessage:"Seats"},summaryTitle:{id:"teamBilling.summaryTitle",defaultMessage:"Summary"},annualPlanName:{id:"teamBilling.annualPlan.name",defaultMessage:"Annual plan"},annualPlanCost:{id:"teamBilling.annualPlan.cost",defaultMessage:"USD $25 <s>$30</s>"},annualBilledAnnually:{id:"teamBilling.annualPlan.billedAnnually",defaultMessage:"Annual price billed annually"},annualAddUsersWithRenewal:{id:"teamBilling.annualPlan.addUsersWithRenewal",defaultMessage:"Add users as needed, remove users only when you renew the contract"},annualMinBill:{id:"teamBilling.annualPlan.minBill",defaultMessage:"The minimum bill is for 2 users, USD $50/month billed annually"},teamsCostStructure:{id:"teamBilling.teamsCostStructure",defaultMessage:"per person/month"},annualSavingsPercentage:{id:"teamBilling.annualSavingsPercentage",defaultMessage:"16.7% off"},createWorkspace:{id:"createWorkspace.title",defaultMessage:"Create workspace"},cancel:{id:"createWorkspace.cancel",defaultMessage:"Cancel"},selectTeamPlan:{id:"createWorkspace.selectTeamPlan",defaultMessage:"Select Team Plan"},selectTeamPlanModalTitle:{id:"createWorkspace.selectTeamPlanModalTitle",defaultMessage:"Select your team plan"},continueToBillingButton:{id:"createWorkspace.continueToBillingButton",defaultMessage:"Continue to billing"},paymentErrorWarning:{id:"createWorkspace.paymentErrorWarning",defaultMessage:"The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com."},selectBillingOption:{id:"createWorkspace.selectBillingOption",defaultMessage:"Select billing options"},annualPlanSelected:{id:"teamBilling.annualPlanSelected",defaultMessage:"ChatGPT Team annual plan"},annualPlanBilled:{id:"teamBilling.annualPlanBilled",defaultMessage:"Price billed annually, starting {date}"},annualPlanTotal:{id:"teamBilling.annualPlanTotal",defaultMessage:"USD ${totalCost} per year total"},flexiblePlanSelected:{id:"teamBilling.flexiblePlanSelected",defaultMessage:"ChatGPT Team flexible plan"},flexiblePlanBilled:{id:"teamBilling.flexiblePlanBilled",defaultMessage:"Price billed monthly, starting {date}"},flexiblePlanTotal:{id:"teamBilling.flexiblePlanTotal",defaultMessage:"USD ${totalCost} per month total"},continueToPricePreview:{id:"teamBilling.continueToPricePreview",defaultMessage:"Continue"},changeEffectDate:{id:"teamBilling.changeEffectDate",defaultMessage:"This change will take effect at your next renewal on {date}"},confirmPageChangeEffectDate:{id:"teamBilling.confirmPageChangeEffectDate",defaultMessage:"Your billing schedule will change from {current_plan} to {new_plan} starting at your next renewal on {date}"},confirmChange:{id:"teamBilling.confirmChange",defaultMessage:"Confirm"}});var O=((r=O||{}).FLEXIBLE="month",r.ANNUAL="year",r);let _={type:O.FLEXIBLE,name:w.flexiblePlanName,cost:w.flexiblePlanCost,costStructure:w.teamsCostStructure,billingFeatures:[w.flexibleBilledMonthly,w.flexibleAddRemoveUsers,w.flexibleMinBill]},M={type:O.ANNUAL,name:w.annualPlanName,cost:w.annualPlanCost,costStructure:w.teamsCostStructure,originalCost:w.flexiblePlanCost,savingsFromOriginal:w.annualSavingsPercentage,billingFeatures:[w.annualBilledAnnually,w.annualAddUsersWithRenewal,w.annualMinBill]}},24907:function(e,t,n){n.d(t,{g:function(){return s},h:function(){return c}});var r=n(60682),a=n(67437),l=n(88667),i=n(45120);function o(){return(0,i.fW)("437245079").value}function s(){let e=o(),t=(0,a.Hb)(),n=(0,l.xb)("1908072088").config.value,{eligible:i,isLoading:s}=(0,r.qg)(r.pm.AG8PqS2q);return{eligible:i&&e&&t&&!0===n.blocking_modal,singleButtonVariant:!0===n.single_button_variant,isLoading:s}}function c(){let e=o(),t=(0,a.Hb)(),n=(0,l.xb)("1908072088").config.value,{eligible:i,isLoading:s}=(0,r.qg)(r.pm.AG8PqS2q);return{eligible:i&&e&&t&&n.dropdown_tooltip,isLoading:s}}},91496:function(e,t,n){n.d(t,{F:function(){return i}});var r=n(12622),a=n(30474),l=n(34977);function i(){var e;let t=(0,l.useRouter)(),n=((0,a.L)(()=>t.asPath)??"").split("#"),i=(e=n[1],e?.startsWith("settings")??!1),o=i?n[1].split("/")[1]:void 0;return{openSettings:e=>{let n=t.asPath.split("#"),r=e?`settings/${e}`:"settings";t.replace(n[0]+"#"+r)},closeSettings:()=>{t.replace(n[0])},isOpen:i,currentTab:Object.values(r.u5).includes(o)?o:r.u5.General}}},12622:function(e,t,n){n.d(t,{ZR:function(){return b},a7:function(){return h},aG:function(){return g},c0:function(){return j},ls:function(){return y},u5:function(){return p},wy:function(){return k},yk:function(){return x}});var r,a=n(15913),l=n(30757),i=n(19841),o=n(15478),s=n(11550),c=n(38838),u=n(97537),d=n(16779),f=n(30853),m=n(651);let p=((r={}).General="General",r.BetaFeatures="BetaFeatures",r.DataControls="DataControls",r.Personalization="Personalization",r.BuilderProfile="BuilderProfile",r.ConnectorSettings="ConnectorSettings",r.Speech="Speech",r.Security="Security",r);function g(e){let{value:t,icon:n,label:r}=e,o=(0,a.w$)();return(0,m.jsxs)(l.xz,{className:(0,i.default)("group flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm text-token-text-primary radix-state-active:bg-token-main-surface-tertiary radix-state-active:text-token-text-primary md:radix-state-active:bg-token-main-surface-secondary",{"flex-1 justify-center":!o}),value:t,children:[n,(0,m.jsx)("div",{className:o?"text-left":"truncate",children:r})]})}function h(e){let{value:t,children:n}=e;return(0,m.jsx)(l.VY,{className:"max-h-[calc(100vh-150px)] w-full overflow-y-auto md:min-h-[380px]",value:t,children:(0,m.jsx)("div",{className:"flex flex-col gap-3 px-4 pb-1 text-sm text-token-text-primary sm:px-6 sm:pb-2 md:ps-0 md:pt-5",children:n})})}function b(e){let{children:t}=e;return(0,m.jsx)("div",{className:"border-b border-token-border-light pb-3 last-of-type:border-b-0",children:t})}let x=o.Z.div`text-xs text-token-text-secondary pr-12 mt-3`;function k(e){let{label:t,disabled:n,enabled:r,onChange:a,description:l,toggleTooltip:i,isLoading:o=!1}=e,s=(0,m.jsx)(d.Z,{disabled:n,enabled:r,onChange:a,label:t,withLockIcon:n,size:"normal"});return null!=i&&(s=(0,m.jsx)(f.u,{label:i,side:"top",sideOffset:4,children:s})),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"flex items-center justify-between",children:[(0,m.jsx)("div",{children:t}),o?(0,m.jsx)(u.Z,{}):s]}),null!=l&&(0,m.jsx)(x,{children:l})]})}function y(e){let{color:t="secondary",disabled:n,label:r,buttonLabel:a,onClick:l,description:o}=e;return(0,m.jsxs)("div",{className:(0,i.default)("flex",o?"items-start":"items-center","justify-between"),children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{children:r}),null!=o&&(0,m.jsx)(x,{children:o})]}),(0,m.jsx)(s.z,{className:"shrink-0",color:t,disabled:!!n,onClick:l,children:a})]})}function j(e){let{onClick:t,label:n,stateLabel:r}=e;return(0,m.jsx)("button",{className:"w-full",onClick:t,children:(0,m.jsxs)("div",{className:"flex items-center justify-between",children:[(0,m.jsx)("div",{children:n}),(0,m.jsxs)("div",{className:"flex items-center text-token-text-secondary",children:[r&&(0,m.jsx)("div",{className:"-mt-0.5 me-1",children:r}),(0,m.jsx)(c.Yf,{className:"icon-sm"})]})]})})}},67437:function(e,t,n){n.d(t,{B9:function(){return D},Bv:function(){return E},Hb:function(){return C},L4:function(){return k},OX:function(){return N},Tg:function(){return M},WK:function(){return W},Xy:function(){return Z},Y7:function(){return _},fm:function(){return B},iu:function(){return S},j8:function(){return L},kH:function(){return j},mx:function(){return y},vJ:function(){return A}});var r=n(98601),a=n(52088),l=n(93951),i=n(49166),o=n(84760),s=n(99976),c=n(34977),u=n(92379),d=n(16757),f=n(2721),m=n(92745),p=n(30478),g=n(3945);let h=["default_model","tagline","color","human_category_name","category","human_category_short_name","human_category_shorter_name","subscription_level","short_explainer"];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let k="text-davinci-002-render-sha",y="gpt-4",j="gpt-4o",v=(0,g.H6)({slug:g.ge,max_tokens:4097,title:"Default",description:"",tags:[d.S.GPT_3_5],product_features:{}}),P=e=>{let{default_model:t,tagline:n,color:r,human_category_name:l,category:i,human_category_short_name:o,human_category_shorter_name:s,subscription_level:c,short_explainer:u}=e;return x({color:r,tagline:n,defaultModel:t,label:l,shortLabel:o,description:u,shorterLabel:s??o,subscriptionLevel:c,categoryId:i},(0,a.Z)(e,h))},w=e=>{let{icon:t,icon_filled_src:n,icon_outline_src:r}=e;return{iconName:t,iconFilledSrc:n,iconOutlineSrc:r}},O=e=>{let{group:t,human_group_name:n,human_group_short_name:r,model_ids:a}=e;return{group:t,label:n,shortLabel:r,modelIds:a}};function _(){let e=(0,p.V_)();return(0,o.a)((0,i.C)({retry:5,queryKey:["models",{isHistoryDisabled:e}],queryFn:async()=>await f.Z.getModels(e).then(e=>{let{models:t,internal_groups:n,categories:r}=e,a=t.map(g.H6);return{categories:r.concat().reverse().map(P),groups:n?.map(O)??[],modelsList:a,modelsMap:Object.fromEntries(a.map(e=>[e.id,e]))}})}))}function M(){return(0,o.a)((0,i.C)({retry:5,queryKey:["modelIcons"],queryFn:async()=>await f.Z.getModelIcons().then(e=>Object.fromEntries(Object.entries(e).map(e=>{let[t,n]=e;return[t,w(n)]})))}))}function N(){let{isRegen:e=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{isLoading:t,data:{categories:n=[],groups:r=[]}={}}=_();return{isLoading:t,categories:(0,u.useMemo)(()=>e?n.filter(e=>!1!==e.is_regenerate_category):n.filter(e=>!e.is_regenerate_category),[n,e]),groups:r??[]}}function C(){let{categories:e}=N();return!!e.find(e=>{let{categoryId:t}=e;return t===g.ft.GPT4o})}function S(){let{data:e}=_();return(0,u.useMemo)(()=>new Set(e?Object.keys(e.modelsMap):[g.ge]),[e])}let T={[g.ge]:v};function D(){let{data:e}=_();return e?.modelsMap??T}function B(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(0,c.useRouter)(),{query:n}=t;return(0,u.useCallback)(r=>{let{location:a,modelId:l}=r,i={model:encodeURIComponent(l)},o=t.route.includes("/g/");if(e||o)s.A.logNewChatButtonClicked({location:a}),t.push({pathname:"/",query:i},void 0,{shallow:!0});else{let e=x(x({},n),i);s.A.logNewChatButtonClicked({location:a}),t.replace({pathname:t.basePath,query:e},void 0,{shallow:!0})}},[e,n,t])}function A(){let{data:{categories:e=[]}={}}=_(),{doesUserHaveAnyAccountsWithPlusFeatures:t}=(0,l.al)();if(t)return null;let n=e.find(g.q_);return n?.defaultModel??null}function E(e){return(0,m.y8)(e)}function Z(e){let t=E(e),n=D();return(0,u.useMemo)(()=>null==t?v:n[t]??v,[t,n])}function W(e){return decodeURIComponent(e.model??"")||null}function L(){var e,t;let n;let{data:r}=_(),{doesUserHaveAnyAccountsWithPlusFeatures:a}=(0,l.al)(),i=(0,l.t)();return e=!!a,t=!!i?.isEnterprise(),n=d.S.GPT_3_5,t?n=d.S.GPT_4:e&&(n=d.S.GPT_4o),r?.modelsList.find(e=>e.tags.includes(n))??r?.modelsList[0]??v}},82821:function(e,t,n){n.d(t,{A:function(){return p},b:function(){return g}});var r=n(98601),a=n(58695),l=n(4132),i=n(177),o=n(82826),s=n(88667),c=n(45120),u=n(87161),d=n(34977);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function p(e,t,n){return t?a.Ho.LoginWebAuth0:a.Ho.Auth0}function g(){let e=(0,d.useRouter)(),{value:t}=(0,c.fW)("1198030896"),n=(0,a._0)((0,s.xb)("1977905538").config.value),r=(0,o.L)();return function(){let{authType:o="signup",callbackUrl:s="/",additionalAuthParams:c={}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=p(e,t,n.forwardToAuthApi),f=r();return(0,u.signIn)(d,{callbackUrl:s},m(m(m(m({prompt:"login",screen_hint:o},(0,l.gk)((0,i.f3)())),(0,a.zC)(n)),f?{use_email_otp:"true"}:{}),c)),d}}},36368:function(e,t,n){n.d(t,{k:function(){return a}});let r=["https:","mailto:","tel:"],a=e=>{let t;if(void 0!==e){try{t=new URL(e,window.location.origin)}catch(e){return}if(!r.includes(t.protocol))return;return t.href}}},66290:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(34977),a=n.n(r),l=n(92379);function i(){return(0,l.useCallback)(e=>{-1===e?a().back():a().push(e,void 0,{shallow:!0})},[])}},4132:function(e,t,n){n.d(t,{gk:function(){return a}});var r=n(95947);function a(e){return{"ext-statsig-tier":r.uG,"ext-oai-did":e}}},82826:function(e,t,n){n.d(t,{L:function(){return a}});var r=n(45120);function a(){let{layer:e}=(0,r.AH)("1346366956");return()=>e.get("use_email_otp",!1)}}}]);
//# sourceMappingURL=7005-406f8d062bcac332.js.map