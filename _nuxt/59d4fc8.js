(window.webpackJsonp=window.webpackJsonp||[]).push([[42,22,24,38],{443:function(t,e,r){var content=r(451);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("0c7f3273",content,!0,{sourceMap:!1})},445:function(t,e,r){var content=r(457);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("db186188",content,!0,{sourceMap:!1})},446:function(t,e,r){"use strict";r.r(e);var l=r(159),n={name:"HeroEarlyBird",computed:{etherUSDPrice:function(){return l.a.amountDisplay(this.$store.state.status.etherUSDPrice,6)},vokenUSDPrice:function(){return l.a.amountDisplay(this.$store.state.status.vokenUSDPrice,6)},weiMin:function(){return l.a.amountDisplay(this.$store.state.status.weiMin,18)},weiMax:function(){return l.a.amountDisplay(this.$store.state.status.weiMax,18)}}},o=(r(450),r(12)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-indigo-800"},[r("div",{staticClass:"resp-container border-t border-indigo-600 py-16 px-4 sm:py-24 sm:px-6 lg:px-8"},[r("div",{staticClass:"px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center"},[r("div",{staticClass:"max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-5xl"},[r("h1",{staticClass:"text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl"},[t._v("\n          "+t._s(t.$t("Early_bird_sale"))+"\n        ")]),t._v(" "),r("p",{staticClass:"mt-5 text-xl text-indigo-300"},[t._v("\n          "+t._s(t.$t("Ethereum_smart_contracts_ensure__"))+"\n        ")]),t._v(" "),r("ul",{staticClass:"eb-features-ul"},[r("li",[t._v("\n            "+t._s(t.$t("Five_percent_for_early_bird"))+"\n          ")]),t._v(" "),r("li",[t._v("\n            "+t._s(t.$t("Only_one_purchase_per_address"))+"\n          ")]),t._v(" "),r("li",[t._v("\n            "+t._s(t.$t("Maximum_"))+" "+t._s(t.weiMax.toFixed(1))+" ETH\n          ")]),t._v(" "),r("li",[t._v("\n            "+t._s(t.$t("Minimum_"))+" "+t._s(t.weiMin.toFixed(1))+" ETH\n          ")])])]),t._v(" "),r("div",{staticClass:"mt-10 w-full max-w-xs lg:mt-0"},[r("div",[r("div",{staticClass:"block text-base font-medium text-indigo-300"},[t._v("\n            ETH "+t._s(t.$t("realtime_price"))+"\n          ")]),t._v(" "),r("div",{staticClass:"mt-2 relative rounded-md shadow-sm"},[t._m(0),t._v(" "),r("div",{staticClass:"block w-full py-4 pl-7 pr-12 bg-indigo-50 border-gray-300 rounded-md"},[t._v("\n              "+t._s(t.etherUSDPrice.toFixed(6))+"\n            ")]),t._v(" "),t._m(1)])]),t._v(" "),r("div",{staticClass:"mt-4"},[r("div",{staticClass:"block text-base font-medium text-indigo-300"},[t._v("\n            VokenTB "+t._s(t.$t("realtime_price"))+"\n          ")]),t._v(" "),r("div",{staticClass:"mt-2 relative rounded-md shadow-sm"},[t._m(2),t._v(" "),r("div",{staticClass:"block w-full py-4 pl-7 pr-12 bg-indigo-50 border-gray-300 rounded-md"},[t._v("\n              "+t._s(t.vokenUSDPrice.toFixed(6))+"\n            ")]),t._v(" "),t._m(3)])]),t._v(" "),r("div",{staticClass:"mt-6 text-indigo-300 text-left lg:text-center"},[t._v("\n          "+t._s(t.$t("Block_height_"))+" #"+t._s(t.$store.state.blockNumber>0?t.$store.state.blockNumber:"loading next...")+"\n        ")])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"absolute inset-y-0 left-0 pl-3 flex items-center"},[r("span",{staticClass:"text-gray-500"},[t._v("\n                $\n              ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"absolute inset-y-0 right-0 pr-3 flex items-center"},[r("span",{staticClass:"text-gray-500"},[t._v("\n                USD\n              ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"absolute inset-y-0 left-0 pl-3 flex items-center"},[r("span",{staticClass:"text-gray-500"},[t._v("\n                $\n              ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"absolute inset-y-0 right-0 pr-3 flex items-center"},[r("span",{staticClass:"text-gray-500"},[t._v("\n                USD\n              ")])])}],!1,null,"288b1652",null);e.default=component.exports},448:function(t,e,r){"use strict";r.r(e);var l=r(159),n={name:"VokenProfile",computed:{vokenTotalSupply:function(){return l.a.amountDisplay(this.$store.state.status.vokenTotalSupply,9)},vokenIssued:function(){return l.a.amountDisplay(this.$store.state.status.vokenIssued,9)},earlyBirdProcess:function(){return this.$store.state.status.vokenIssued.div(this.$store.state.status.vokenCap.multipliedBy(5).div(100)).multipliedBy(100)}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl"},[r("div",{staticClass:"bg-white shadow overflow-hidden sm:rounded-lg"},[r("div",{staticClass:"px-4 py-5 sm:px-6"},[r("h3",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[t._v("\n          VokenTB "+t._s(t.$t("Profile"))+"\n        ")]),t._v(" "),r("p",{staticClass:"mt-1 max-w-2xl text-sm text-gray-500"},[t._v("\n          Details of VokenTB (Voken TeraByte)\n        ")])]),t._v(" "),r("div",{staticClass:"border-t border-gray-200 px-4 py-5 sm:p-0"},[r("dl",{staticClass:"sm:divide-y sm:divide-gray-200"},[r("div",{staticClass:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},[r("dt",{staticClass:"text-sm font-medium text-gray-500"},[t._v("\n              "+t._s(t.$t("Token_name"))+"\n            ")]),t._v(" "),r("dd",{staticClass:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},[t._v("\n              Voken TeraByte\n            ")])]),t._v(" "),r("div",{staticClass:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},[r("dt",{staticClass:"text-sm font-medium text-gray-500"},[t._v("\n              "+t._s(t.$t("Token_symbol"))+"\n            ")]),t._v(" "),r("dd",{staticClass:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},[t._v("\n              VokenTB\n            ")])]),t._v(" "),r("div",{staticClass:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},[r("dt",{staticClass:"text-sm font-medium text-gray-500"},[t._v("\n              "+t._s(t.$t("Description"))+"\n            ")]),t._v(" "),r("dd",{staticClass:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},[t._v("\n              "+t._s(t.$t("Voken_is_the_only_utility_token"))+"\n            ")])]),t._v(" "),r("div",{staticClass:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},[r("dt",{staticClass:"text-sm font-medium text-gray-500"},[t._v("\n              "+t._s(t.$t("Anchored_resource"))+"\n            ")]),t._v(" "),r("dd",{staticClass:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},[t._v("\n              "+t._s(t.$t("__greater_than"))+" 1 TB (1,000 GB) "+t._s(t.$t("general_traffic"))+t._s(t.$t("_dynamic_pricing_will_be_supported"))+"\n            ")])]),t._v(" "),r("div",{staticClass:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},[r("dt",{staticClass:"text-sm font-medium text-gray-500"},[t._v("\n              "+t._s(t.$t("Decimals"))+"\n            ")]),t._v(" "),r("dd",{staticClass:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},[t._v("\n              9\n            ")])]),t._v(" "),r("div",{staticClass:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},[r("dt",{staticClass:"text-sm font-medium text-gray-500"},[t._v("\n              "+t._s(t.$t("Total_supply"))+"\n            ")]),t._v(" "),r("dd",{staticClass:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},[t._v("\n              "+t._s(t.$t("Million_210"))+t._s(t.$t("__lp"))+t._s(t.vokenTotalSupply)+" "+t._s(t.$t("for_now"))+t._s(t.$t("__rp"))+"\n            ")])]),t._v(" "),r("div",{staticClass:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},[r("dt",{staticClass:"text-sm font-medium text-gray-500"},[t._v("\n              "+t._s(t.$t("Distribution_for_Early_bird"))+"\n            ")]),t._v(" "),r("dd",{staticClass:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},[t._v("\n              5% ~ "+t._s(t.$t("Million_10_5"))+t._s(t.$t("__comma"))+t._s(t.earlyBirdProcess.toFixed(4))+"% "+t._s(t.$t("finished"))+"\n            ")])]),t._v(" "),r("div",{staticClass:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},[r("dt",{staticClass:"text-sm font-medium text-gray-500"},[t._v("\n              "+t._s(t.$t("Distribution_for_Public_sale"))+"\n            ")]),t._v(" "),r("dd",{staticClass:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},[t._v("\n              40% ~ "+t._s(t.$t("Million_84"))+t._s(t.$t("__comma"))+t._s(t.$t("NOT_STARTED"))+"\n            ")])])])])])])])}),[],!1,null,"4a7e7f8c",null);e.default=component.exports},449:function(t,e,r){"use strict";r.r(e);var l={name:"DiveToReferral"},n=(r(456),r(12)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative"},[t._m(0),t._v(" "),r("div",{staticClass:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},[r("div",{staticClass:"bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"},[r("div",{staticClass:"pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20"},[r("div",{staticClass:"lg:self-center"},[r("h2",{staticClass:"text-3xl font-extrabold text-white sm:text-4xl"},[r("span",{staticClass:"block"},[t._v("\n                "+t._s(t.$t("referral.Ready_to_dive_in_"))+"\n              ")]),t._v(" "),r("span",{staticClass:"block text-red-900"},[t._v("\n                "+t._s(t.$t("referral.Join_the_referral_program_today"))+"\n              ")])]),t._v(" "),r("p",{staticClass:"mt-4 text-lg leading-6 text-orange-50"},[t._v("\n            "+t._s(t.$t("referral.Tell_a_friend_about__"))+"\n          ")]),t._v(" "),r("div",{staticClass:"mt-8"},[r("nuxt-link",{staticClass:"a-visit-referral",attrs:{to:t.localePath("/referral")}},[t._v("\n              "+t._s(t.$t("referral.Visit_Referral_System"))+"\n            ")])],1)])]),t._v(" "),t._m(1)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"absolute inset-0 flex flex-col",attrs:{"aria-hidden":"true"}},[r("div",{staticClass:"flex-1 bg-gray-50"}),t._v(" "),r("div",{staticClass:"flex-1"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1"},[e("img",{staticClass:"transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20",attrs:{src:"https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg",alt:"App screenshot"}})])}],!1,null,"7291d0f2",null);e.default=component.exports},450:function(t,e,r){"use strict";r(443)},451:function(t,e,r){var l=r(32)(!1);l.push([t.i,'.eb-features-ul[data-v-288b1652]{margin-top:1.25rem;padding-left:1.25rem;list-style-type:disc;font-family:Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--text-opacity:1;color:#b4c6fc;color:rgba(180,198,252,var(--text-opacity))}.eb-features-ul li[data-v-288b1652]{line-height:1.75rem}',""]),t.exports=l},456:function(t,e,r){"use strict";r(445)},457:function(t,e,r){var l=r(32)(!1);l.push([t.i,".a-visit-referral[data-v-7291d0f2]{--bg-opacity:1;background-color:#feecdc;background-color:rgba(254,236,220,var(--bg-opacity));border-width:1px;border-color:transparent;border-radius:.375rem;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);padding:.75rem 1.5rem;display:inline-flex;align-items:center;font-size:1rem;font-weight:500;--text-opacity:1;color:#e02424;color:rgba(224,36,36,var(--text-opacity))}.a-visit-referral[data-v-7291d0f2]:hover{--bg-opacity:1;background-color:#fcd9bd;background-color:rgba(252,217,189,var(--bg-opacity));--text-opacity:1;color:#f05252;color:rgba(240,82,82,var(--text-opacity))}",""]),t.exports=l},563:function(t,e,r){"use strict";r.r(e);var l=r(446),n=r(461),o=r(448),c={name:"index",middleware:["dapp"],components:{DiveToReferral:r(449).default,VokenProfile:o.default,Swap:n.default,HeroEarlyBird:l.default}},d=r(12),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pb-12"},[r("hero-early-bird"),t._v(" "),r("swap"),t._v(" "),r("voken-profile",{staticClass:"bg-gray-50"}),t._v(" "),r("dive-to-referral")],1)}),[],!1,null,"a4795454",null);e.default=component.exports;installComponents(component,{HeroEarlyBird:r(446).default,Swap:r(461).default,VokenProfile:r(448).default,DiveToReferral:r(449).default})}}]);