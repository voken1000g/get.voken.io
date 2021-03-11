(window.webpackJsonp=window.webpackJsonp||[]).push([[0,18,26],{422:function(t,e,r){"use strict";r.r(e);var o={name:"LayoutForMobi"},n=r(12),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"max-w-lg mx-auto px-2 md:px-0"},[t._t("default")],2)}),[],!1,null,"7a31fdbd",null);e.default=component.exports},423:function(t,e,r){"use strict";r.r(e);var o={name:"LayoutBgA",components:{SvgPatternRect:r(424).default},props:{theme:{type:String,default:"RL"}}},n=r(12),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative overflow-hidden"},[r("div",{staticClass:"hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"},[r("div",{staticClass:"relative h-full max-w-screen-xl mx-auto"},["RL"===t.theme?[r("svg-pattern-rect",{staticClass:"absolute bottom-0 left-full transform -translate-y-40 -translate-x-1/4 lg:-translate-x-1/2",attrs:{width:394,height:786}}),t._v(" "),r("svg-pattern-rect",{staticClass:"absolute top-0 right-full transform translate-y-40 translate-x-1/4 lg:translate-x-1/2",attrs:{width:394,height:786}})]:"RLR"===t.theme?[r("svg-pattern-rect",{staticClass:"absolute top-12 left-full transform -translate-x-1/4 lg:-translate-x-1/2",attrs:{width:394,height:394}}),t._v(" "),r("svg-pattern-rect",{staticClass:"absolute top-1/2 right-full transform -translate-y-1/2 translate-x-1/4 lg:translate-x-1/2",attrs:{width:394,height:394}}),t._v(" "),r("svg-pattern-rect",{staticClass:"absolute bottom-12 left-full transform -translate-x-1/4 -translate-x-1/4 lg:-translate-x-1/2",attrs:{width:394,height:394}})]:"CORNER"===t.theme?[r("svg-pattern-rect",{staticClass:"absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4\n                                          lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4",attrs:{width:394,height:786}})]:"LEFT"===t.theme?[r("svg-pattern-rect",{staticClass:"absolute top-0 right-1/2 transform -translate-x-1/2 -translate-y-8",attrs:{width:640,height:2048}})]:"RIGHT"===t.theme?[r("svg-pattern-rect",{staticClass:"absolute top-0 left-1/2 transform translate-x-1/2 -translate-y-8",attrs:{width:640,height:2048}})]:t._e()],2)]),t._v(" "),r("div",{staticClass:"relative"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SvgPatternRect:r(424).default})},424:function(t,e,r){"use strict";r.r(e);r(425);var o={name:"SvgPatternRect",props:{width:{type:Number,default:404},height:{type:Number,default:784}},computed:{viewBox:function(){return"0 0 "+this.width+" "+this.height}}},n=r(12),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{fill:"none",width:t.width,height:t.height,viewBox:t.viewBox}},[r("defs",[r("pattern",{attrs:{id:"f210dbf6-a58d-4871-961e-36d5016a0f49",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"}},[r("rect",{staticClass:"text-gray-200",attrs:{x:"0",y:"0",width:"4",height:"4",fill:"currentColor"}})])]),t._v(" "),r("rect",{attrs:{width:t.width,height:t.height,fill:"url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"}})])}),[],!1,null,"4766f43b",null);e.default=component.exports},429:function(t,e,r){var content=r(440);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("22fef174",content,!0,{sourceMap:!1})},432:function(t,e,r){"use strict";r.r(e);var o={name:"TxInfo",props:["status","hash","confirmation","message"],computed:{fast:function(){return this.$store.state.fast},txInfoClassArr:function(){var t=["tx-info"];return 0===this.status?t.push("tx-info-pending"):1===this.status?t.push("tx-info-confirming"):2===this.status?t.push("tx-info-success"):this.status>2&&t.push("tx-info-error"),t},statusDisplay:function(){return 0===this.status?"Pending...":1===this.status?"Confirming... "+this.confirmation+" blocks":2===this.status?"Success > "+this.confirmation+" blocks":this.status>2?"Error":void 0},hashDisplay:function(){return this.hash?this.hash:"..."}}},n=(r(439),r(12)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"show",rawName:"v-show",value:"number"==typeof t.status&&t.status>=0,expression:"typeof status === 'number' && status >= 0"}],staticClass:"space-x-2",class:t.txInfoClassArr},[o("div",{staticClass:"w-1/4 flex items-center justify-center"},[0===t.status?o("img",{staticClass:"w-20 h-20",attrs:{src:r(437),alt:"spinner"}}):t._e(),t._v(" "),1===t.status?o("img",{staticClass:"w-20 h-20",attrs:{src:r(438),alt:"spinner"}}):2===t.status?o("fa",{staticClass:"mx-5 fa-3x",attrs:{icon:["fas","check-square"]}}):t.status>2?o("fa",{staticClass:"mx-5 fa-3x",attrs:{icon:["fas","times-circle"]}}):t._e()],1),t._v(" "),o("div",{staticClass:"w-full pt-3 pb-4"},[o("div",{staticClass:"tx-title"},[t._v("\n      "+t._s(t.statusDisplay)+"\n    ")]),t._v(" "),t.hash?o("div",{staticClass:"tx-hash"},[t._v("\n      "+t._s(t.hash)+"\n    ")]):t._e(),t._v(" "),t.message?o("div",{staticClass:"tx-message"},[t._v("\n      "+t._s(t.message)+"\n    ")]):t._e()])])}),[],!1,null,"1cdb0522",null);e.default=component.exports},437:function(t,e,r){t.exports=r.p+"img/spinner-gray.a51bfce.svg"},438:function(t,e,r){t.exports=r.p+"img/spinner-blue.f7f11e6.svg"},439:function(t,e,r){"use strict";r(429)},440:function(t,e,r){var o=r(30)(!1);o.push([t.i,".tx-info[data-v-1cdb0522]{display:flex;align-items:center;padding-left:.5rem;padding-right:1.25rem;border-radius:.375rem;text-align:left}.tx-info-pending[data-v-1cdb0522]{--bg-opacity:1;background-color:#252f3f;background-color:rgba(37,47,63,var(--bg-opacity));--text-opacity:1;color:#f9fafb;color:rgba(249,250,251,var(--text-opacity))}.tx-info-confirming[data-v-1cdb0522]{--bg-opacity:1;background-color:#1a56db;background-color:rgba(26,86,219,var(--bg-opacity));--text-opacity:1;color:#ebf5ff;color:rgba(235,245,255,var(--text-opacity))}.tx-info-success[data-v-1cdb0522]{--bg-opacity:1;background-color:#046c4e;background-color:rgba(4,108,78,var(--bg-opacity));--text-opacity:1;color:#f3faf7;color:rgba(243,250,247,var(--text-opacity))}.tx-info-error[data-v-1cdb0522]{--bg-opacity:1;background-color:#c81e1e;background-color:rgba(200,30,30,var(--bg-opacity));--text-opacity:1;color:#fdf2f2;color:rgba(253,242,242,var(--text-opacity))}.tx-title[data-v-1cdb0522]{font-weight:700;font-size:1.25rem}.tx-hash[data-v-1cdb0522]{margin-top:.25rem;word-break:break-all}.tx-message[data-v-1cdb0522]{margin-top:.5rem;padding-top:.5rem;border-top-width:1px;--border-opacity:1;border-color:#d2d6dc;border-color:rgba(210,214,220,var(--border-opacity));font-size:.875rem;word-break:break-all}",""]),t.exports=o},456:function(t,e,r){"use strict";r.r(e);var o=r(2),n=(r(16),r(18),r(114),r(115),r(73),r(165)),c=r(480),d=r(490),l=r.n(d),f=r(466),v=r.n(f),m=r(71),h=r.n(m),x=r(422),w=r(423),_={name:"CompSetVoken",components:{TxInfo:r(432).default,LayoutBgA:w.default,LayoutForMobi:x.default},data:function(){return{avatar:v.a,vokenAddress:"",vInt:"0",referrer:null,showButtonSet:!0,showButtonNew:!0,mnemonic:"",mnemonicArray:null,txStatus:-1,txHash:null,txConfirmation:0,txMessage:null}},watch:{vokenAddress:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.vInt=h.a.toBN(t.vokenAddress).toString(),!t.vInt||"0"===t.vInt){e.next=6;break}return e.next=4,t.$store.state.vokenTbContract().methods.voken2address(t.vInt).call().then((function(e){t.referrer=e})).catch((function(t){console.error("::: voken2address",t)}));case 4:e.next=7;break;case 6:t.referrer=null;case 7:case"end":return e.stop()}}),e)})))()},mnemonic:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.mnemonicArray=t.mnemonic.split(" ");case 1:case"end":return e.stop()}}),e)})))()}},computed:{vokenBalance:function(){return n.a.amountDisplay(this.$store.state.accountStatus.vokenBalance,9)},vokenIssued:function(){return n.a.amountDisplay(this.$store.state.accountStatus.issued,9)},vokenBonuses:function(){return n.a.amountDisplay(this.$store.state.accountStatus.bonuses,9)},vokenAddressStatus:function(){if(this.vokenAddress)return h.a.isAddress(this.vokenAddress)?n.a.isNotAddress(this.referrer)?"success":"warn":"error"},isAddress:function(){return"success"===this.vokenAddressStatus}},methods:{saveVokenAddress:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.showButtonSet=!1,t.txStatus=0,t.txMessage=null,e.next=5,t.$store.state.vokenTbContract().methods.setVokenAddress(String(t.vInt)).send({from:t.$store.state.account}).on("transactionHash",t.onTransactionHash).on("receipt",t.onReceipt).on("confirmation",t.onConfirmation).on("error",t.onError).catch(t.onError);case 5:case"end":return e.stop()}}),e)})))()},onTransactionHash:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.txStatus=0,e.txHash=t;case 2:case"end":return r.stop()}}),r)})))()},onReceipt:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.txMessage=null,t.status?e.txStatus=1:e.txStatus=3;case 2:case"end":return r.stop()}}),r)})))()},onConfirmation:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(e.txStatus<3&&t<16)){r.next=15;break}if(!(t<6)){r.next=5;break}e.txStatus=1,r.next=14;break;case 5:if(!(t>=6&&t<10)){r.next=9;break}e.txStatus=2,r.next=14;break;case 9:return e.txStatus=2,r.next=12,e.$store.state.dApp.getStatus();case 12:return r.next=14,e.$store.state.dApp.getAccountStatus();case 14:e.txConfirmation=t;case 15:case"end":return r.stop()}}),r)})))()},onError:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.txStatus=3,e.txMessage=t.message,e.showButtonSet=!0;case 3:case"end":return r.stop()}}),r)})))()},newVokenAddress:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.showButtonNew=!1,e.next=3,c.generateMnemonic(192);case 3:return t.mnemonic=e.sent,e.next=6,t.generateFromMnemonic();case 6:case"end":return e.stop()}}),e)})))()},generateFromMnemonic:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.mnemonicToSeed(t.mnemonic);case 2:r=e.sent,o=new l.a(r),n=o.derive(0),t.vokenAddress=n.address;case 6:case"end":return e.stop()}}),e)})))()}}},y=(r(537),r(12)),component=Object(y.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("layout-for-mobi",{staticClass:"set-voken-address mt-6 md:mt-8 lg:mt-12 xl:mt-14 2xl:mt-20"},[r("div",{staticClass:"py-8 px-6 bg-gradient-to-br from-red-100 to-orange-200 rounded-lg text-center"},[r("h2",{staticClass:"font-light text-3xl text-gray-700 text-center tracking-tight"},[t._v("\n      "+t._s(t.$t("referral.Set_your_VOKEN_address"))+"\n    ")]),t._v(" "),r("div",{staticClass:"mt-8 w-14 h-14 mx-auto bg-white rounded-md shadow-md lg:shadow-lg"},[r("img",{directives:[{name:"show",rawName:"v-show",value:t.isAddress,expression:"isAddress"}],attrs:{src:t.avatar.svgDataUriFromSeed(t.vokenAddress),alt:"address avatar"}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.isAddress,expression:"!isAddress"}],staticClass:"h-full flex items-center justify-center text-2xl text-gray-300",class:{"text-red-300":"error"===t.vokenAddressStatus}},[r("fa",{directives:[{name:"show",rawName:"v-show",value:!t.vokenAddress,expression:"!vokenAddress"}],attrs:{icon:["fas","seedling"]}}),t._v(" "),r("fa",{directives:[{name:"show",rawName:"v-show",value:t.vokenAddress&&!t.isAddress,expression:"vokenAddress && !isAddress"}],attrs:{icon:["fas","times"]}})],1)]),t._v(" "),t.vokenBalance.gt(0)?r("div",[r("div",{staticClass:"mt-8",class:t.vokenAddressStatus},[r("label",{staticClass:"block text-sm font-medium text-gray-700 text-left",attrs:{for:"referral-address"}},[t._v("\n          "+t._s(t.$t("referral.VOKEN_wallet_address"))+"\n        ")]),t._v(" "),r("div",{staticClass:"mt-1 relative rounded-md shadow-md"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.vokenAddress,expression:"vokenAddress"}],ref:"referral-address",staticClass:"form-input input-voken-address",attrs:{type:"text",name:"referral-address",id:"referral-address",placeholder:t.$t("Enter_a_valid_VOKEN_wallet_address"),"aria-describedby":"referral-address"},domProps:{value:t.vokenAddress},on:{input:function(e){e.target.composing||(t.vokenAddress=e.target.value)}}}),t._v(" "),"success"===t.vokenAddressStatus?r("div",{staticClass:"input-icon"},[r("fa",{attrs:{icon:["fas","check"]}})],1):t._e(),t._v(" "),"error"===t.vokenAddressStatus?r("div",{staticClass:"input-icon"},[r("fa",{attrs:{icon:["fas","times"]}})],1):t._e(),t._v(" "),"warn"===t.vokenAddressStatus?r("div",{staticClass:"input-icon"},[r("fa",{attrs:{icon:["fas","exclamation-triangle"]}})],1):t._e()]),t._v(" "),"error"===t.vokenAddressStatus?r("div",{staticClass:"input-p"},[t._v("\n          "+t._s(t.$t("referral.Not_a_VOKEN_wallet_address"))+"\n        ")]):t._e(),t._v(" "),"warn"===t.vokenAddressStatus?r("div",{staticClass:"input-p"},[t._v("\n          "+t._s(t.$t("referral.The_address_is_already_exist"))+"\n        ")]):t._e()]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.showButtonSet,expression:"showButtonSet"}],staticClass:"mt-8 flex justify-between space-x-2"},[r("button",{staticClass:"btn-swap",on:{click:t.saveVokenAddress}},[t._v("\n          "+t._s(t.$t("referral.Set_VOKEN_address"))+"\n        ")])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.showButtonNew,expression:"showButtonNew"}],staticClass:"mt-4 flex justify-between space-x-2"},[r("button",{staticClass:"btn-generate",on:{click:t.newVokenAddress}},[t._v("\n          "+t._s(t.$t("referral.Generate_New_VOKEN_Address"))+"\n        ")])]),t._v(" "),r("tx-info",{class:{"mt-4":t.showButtonSet,"mt-8":!t.showButtonSet},attrs:{status:t.txStatus,hash:t.txHash,confirmation:t.txConfirmation,message:t.txMessage}})],1):r("div",{staticClass:"mt-8"},[r("div",{staticClass:"font-mono"},[r("div",{staticClass:"pi"},[t._v("\n          "+t._s(t.$t("referral.You_dont_have_any_VOKEN"))+"\n        ")])]),t._v(" "),r("div",{staticClass:"mt-8 flex justify-between space-x-2"},[r("nuxt-link",{staticClass:"a-referral-board",attrs:{to:t.localePath("/")}},[t._v("\n          "+t._s(t.$t("referral.Go_to_Early_bird_Sale"))+"\n        ")])],1)])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.mnemonic,expression:"mnemonic"}],staticClass:"mt-6 py-6 px-4 bg-gradient-to-br from-blue-50 to-indigo-200 rounded-md"},[r("h2",{staticClass:"text-2xl text-gray-600 text-center"},[t._v("\n      "+t._s(t.$t("referral.Mnemonic__backup_phrase_"))+"\n    ")]),t._v(" "),r("div",{staticClass:"w-5/6 mt-6 mx-auto font-mono text-red-600 text-center"},[t._v("\n      "+t._s(t.$t("referral.Please_write_the_mnemonic_"))+"\n    ")]),t._v(" "),r("div",{staticClass:"mt-6 grid grid-cols-3 gap-3"},t._l(t.mnemonicArray,(function(e,o){return r("div",{staticClass:"mnemonic"},[r("span",{staticClass:"mnemonic-index"},[t._v("\n            "+t._s(o+1)+".\n          ")]),t._v(" "),r("span",{staticClass:"mnemonic-word"},[t._v("\n            "+t._s(e)+"\n          ")])])})),0),t._v(" "),r("button",{staticClass:"mt-6 btn-generate",on:{click:t.newVokenAddress}},[t._v("\n      "+t._s(t.$t("referral.Generate_New_Address__Mnemonic"))+"\n    ")]),t._v(" "),r("div",{staticClass:"mt-6 font-mono text-sm text-center"},[r("a",{staticClass:"a-info",attrs:{target:"_blank",href:t.$t("link.Visit_Toolkit__VOKEN_wallet_generator.href")}},[r("fa",{attrs:{icon:["fas","wallet"]}}),t._v("\n        "+t._s(t.$t("link.Visit_Toolkit__VOKEN_wallet_generator.text"))+"\n      ")],1)])])])}),[],!1,null,"79b43d9c",null);e.default=component.exports;installComponents(component,{TxInfo:r(432).default,LayoutForMobi:r(422).default})},467:function(t,e,r){var content=r(538);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("5ee34300",content,!0,{sourceMap:!1})},537:function(t,e,r){"use strict";r(467)},538:function(t,e,r){var o=r(30)(!1);o.push([t.i,'.input-voken-address[data-v-79b43d9c]{display:block;width:100%;padding:.75rem 1.5rem;--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity));border-width:1px;--border-opacity:1;border-color:#d2d6dc;border-color:rgba(210,214,220,var(--border-opacity));border-radius:.375rem;font-family:Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}.input-voken-address[data-v-79b43d9c]:focus{--border-opacity:1;border-color:#ff5a1f;border-color:rgba(255,90,31,var(--border-opacity));box-shadow:0 0 0 3px rgba(253,186,140,.45)}.error .input-voken-address[data-v-79b43d9c]{--bg-opacity:1;background-color:#fde8e8;background-color:rgba(253,232,232,var(--bg-opacity));--border-opacity:1;border-color:#c81e1e;border-color:rgba(200,30,30,var(--border-opacity));--text-opacity:1;color:#c81e1e;color:rgba(200,30,30,var(--text-opacity))}.error .input-voken-address[data-v-79b43d9c]:focus{box-shadow:0 0 0 3px rgba(248,180,180,.45)}.success .input-voken-address[data-v-79b43d9c]{--bg-opacity:1;background-color:#def7ec;background-color:rgba(222,247,236,var(--bg-opacity));--border-opacity:1;border-color:#046c4e;border-color:rgba(4,108,78,var(--border-opacity));--text-opacity:1;color:#046c4e;color:rgba(4,108,78,var(--text-opacity))}.success .input-voken-address[data-v-79b43d9c]:focus{box-shadow:0 0 0 3px rgba(132,225,188,.45)}.warn .input-voken-address[data-v-79b43d9c]{--bg-opacity:1;background-color:#fdfdea;background-color:rgba(253,253,234,var(--bg-opacity));--border-opacity:1;border-color:#8e4b10;border-color:rgba(142,75,16,var(--border-opacity));--text-opacity:1;color:#8e4b10;color:rgba(142,75,16,var(--text-opacity))}.warn .input-voken-address[data-v-79b43d9c]:focus{box-shadow:0 0 0 3px rgba(250,202,21,.45)}.set-voken-address button[data-v-79b43d9c]{width:100%;padding-top:1rem;padding-bottom:1rem;background-image:linear-gradient(90deg,var(--gradient-color-stops));border-width:1px;border-color:transparent;border-radius:.375rem;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);font-family:Inter var,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-weight:600;font-size:1.25rem;--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));text-align:center}.set-voken-address button[data-v-79b43d9c]:focus{outline:2px solid transparent;outline-offset:2px}.set-voken-address button[data-v-79b43d9c]:active{border-color:transparent}.btn-bind[data-v-79b43d9c]{--gradient-from-color:#6875f5;--gradient-color-stops:var(--gradient-from-color),var(--gradient-to-color,rgba(104,117,245,0));--gradient-to-color:#9061f9}.btn-bind[data-v-79b43d9c]:hover{--gradient-to-color:#7e3af2}.btn-bind[data-v-79b43d9c]:active{--gradient-to-color:#9061f9;box-shadow:0 0 0 3px rgba(202,191,253,.45)}.btn-swap[data-v-79b43d9c]{--gradient-from-color:#ff5a1f;--gradient-color-stops:var(--gradient-from-color),var(--gradient-to-color,rgba(255,90,31,0));--gradient-to-color:#e74694}.btn-swap[data-v-79b43d9c]:hover{--gradient-to-color:#d61f69}.btn-swap[data-v-79b43d9c]:active{--gradient-to-color:#e74694;box-shadow:0 0 0 3px rgba(248,180,217,.45)}.btn-generate[data-v-79b43d9c]{--gradient-from-color:#3f83f8;--gradient-color-stops:var(--gradient-from-color),var(--gradient-to-color,rgba(63,131,248,0));--gradient-to-color:#6875f5}.btn-generate[data-v-79b43d9c]:hover{--gradient-to-color:#5850ec}.btn-generate[data-v-79b43d9c]:active{--gradient-to-color:#6875f5;box-shadow:0 0 0 3px rgba(180,198,252,.45)}.mnemonic[data-v-79b43d9c]{display:flex;justify-content:space-between;padding:.5rem .75rem;border-bottom-width:2px;--border-opacity:1;border-color:#b4c6fc;border-color:rgba(180,198,252,var(--border-opacity));font-family:Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;text-align:center}.mnemonic-index[data-v-79b43d9c]{--text-opacity:1;color:#6b7280;color:rgba(107,114,128,var(--text-opacity))}.mnemonic-word[data-v-79b43d9c]{width:100%}.a-referral-board[data-v-79b43d9c]{width:100%;padding-top:1rem;padding-bottom:1rem;background-image:linear-gradient(90deg,var(--gradient-color-stops));border-width:1px;border-color:transparent;border-radius:.375rem;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);--gradient-from-color:#ff5a1f;--gradient-color-stops:var(--gradient-from-color),var(--gradient-to-color,rgba(255,90,31,0));--gradient-to-color:#e74694;font-family:Inter var,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-weight:600;font-size:1.25rem;--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));text-align:center}.a-referral-board[data-v-79b43d9c]:hover{--gradient-to-color:#d61f69}.a-info[data-v-79b43d9c]{padding-bottom:.5rem;padding-left:.5rem;padding-right:.5rem;--text-opacity:1;color:#6b7280;color:rgba(107,114,128,var(--text-opacity))}.a-info[data-v-79b43d9c]:hover{border-bottom-width:1px;--border-opacity:1;border-color:#1c64f2;border-color:rgba(28,100,242,var(--border-opacity));--text-opacity:1;color:#1c64f2;color:rgba(28,100,242,var(--text-opacity))}',""]),t.exports=o}}]);