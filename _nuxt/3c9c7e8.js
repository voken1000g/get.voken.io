(window.webpackJsonp=window.webpackJsonp||[]).push([[6,13,22,26,27,28,30],{506:function(t,e,n){"use strict";var r=n(15),o=n(53),c=n(54),l=n(182),d=n(126),v=n(26),f=n(101).f,m=n(102).f,h=n(28).f,x=n(507).trim,w="Number",k=r.Number,_=k,A=k.prototype,y=c(n(127)(A))==w,C="trim"in String.prototype,N=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=C?e.trim():x(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,v=l.length;i<v;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+e};if(!k(" 0o1")||!k("0b1")||k("+0x1")){k=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof k&&(y?v((function(){A.valueOf.call(n)})):c(n)!=w)?l(new _(N(e)),n,k):N(e)};for(var S,O=n(24)?f(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;O.length>E;E++)o(_,S=O[E])&&!o(k,S)&&h(k,S,m(_,S));k.prototype=A,A.constructor=k,n(32)(r,w,k)}},507:function(t,e,n){var r=n(11),o=n(70),c=n(26),l=n(508),d="["+l+"]",v=RegExp("^"+d+d+"*"),f=RegExp(d+d+"*$"),m=function(t,e,n){var o={},d=c((function(){return!!l[t]()||"​"!="​"[t]()})),v=o[t]=d?e(h):l[t];n&&(o[n]=v),r(r.P+r.F*d,"String",o)},h=m.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(v,"")),2&e&&(t=t.replace(f,"")),t};t.exports=m},508:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},509:function(t,e,n){"use strict";n.r(e);n(506);var r={name:"SvgPatternRect",props:{width:{type:Number,default:404},height:{type:Number,default:784}},computed:{viewBox:function(){return"0 0 "+this.width+" "+this.height}}},o=n(7),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{fill:"none",width:t.width,height:t.height,viewBox:t.viewBox}},[n("defs",[n("pattern",{attrs:{id:"f210dbf6-a58d-4871-961e-36d5016a0f49",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"}},[n("rect",{staticClass:"text-gray-200",attrs:{x:"0",y:"0",width:"4",height:"4",fill:"currentColor"}})])]),t._v(" "),n("rect",{attrs:{width:t.width,height:t.height,fill:"url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"}})])}),[],!1,null,"4766f43b",null);e.default=component.exports},510:function(t,e,n){"use strict";n.r(e);var r={name:"LayoutBgA",props:{theme:{type:String,default:"RL"}}},o=n(7),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative overflow-hidden"},[n("div",{staticClass:"hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"},[n("div",{staticClass:"relative h-full max-w-screen-xl mx-auto"},["RL"===t.theme?[n("svg-pattern-rect",{staticClass:"absolute bottom-0 left-full transform -translate-y-40 -translate-x-1/4 lg:-translate-x-1/2",attrs:{width:394,height:786}}),t._v(" "),n("svg-pattern-rect",{staticClass:"absolute top-0 right-full transform translate-y-40 translate-x-1/4 lg:translate-x-1/2",attrs:{width:394,height:786}})]:"RLR"===t.theme?[n("svg-pattern-rect",{staticClass:"absolute top-12 left-full transform -translate-x-1/4 lg:-translate-x-1/2",attrs:{width:394,height:394}}),t._v(" "),n("svg-pattern-rect",{staticClass:"absolute top-1/2 right-full transform -translate-y-1/2 translate-x-1/4 lg:translate-x-1/2",attrs:{width:394,height:394}}),t._v(" "),n("svg-pattern-rect",{staticClass:"absolute bottom-12 left-full transform -translate-x-1/4 -translate-x-1/4 lg:-translate-x-1/2",attrs:{width:394,height:394}})]:"CORNER"===t.theme?[n("svg-pattern-rect",{staticClass:"absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4\n                                          lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4",attrs:{width:394,height:786}})]:"LEFT"===t.theme?[n("svg-pattern-rect",{staticClass:"absolute top-0 right-1/2 transform -translate-x-1/2 -translate-y-8",attrs:{width:640,height:2048}})]:"RIGHT"===t.theme?[n("svg-pattern-rect",{staticClass:"absolute top-0 left-1/2 transform translate-x-1/2 -translate-y-8",attrs:{width:640,height:2048}})]:t._e()],2)]),t._v(" "),n("div",{staticClass:"relative"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SvgPatternRect:n(509).default})},511:function(t,e,n){"use strict";n.r(e);var r={name:"LayoutVokenAvatar",components:{VueAvatar:n(180).a}},o=n(7),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 mx-auto bg-white rounded-md shadow-md lg:shadow-lg"},["0"===t.$store.state.voken.account.vokenInt?n("div",{staticClass:"h-full flex items-center justify-center text-2xl lg:text-3xl xl:text-4xl text-gray-300"},[n("fa",{attrs:{icon:["fas","seedling"]}})],1):n("vue-avatar",{attrs:{value:t.$store.state.voken.account.vokenAddress}})],1)}),[],!1,null,null,null);e.default=component.exports},513:function(t,e,n){"use strict";n.r(e);var r={name:"CompSwitch",props:["isOn"]},o=n(7),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",class:{"bg-indigo-600 border-transparent":t.isOn,"bg-cool-gray-100 border-gray-300":!t.isOn}},[n("span",{staticClass:"translate-x-0 pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",class:{"translate-x-5":t.isOn,"translate-x-0":!t.isOn}},[n("span",{staticClass:"opacity-100 ease-in duration-200 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity",class:{"opacity-0 ease-out duration-100":t.isOn,"opacity-100 ease-in duration-200":!t.isOn}},[n("svg",{staticClass:"bg-white h-3 w-3 text-gray-400",attrs:{fill:"none",viewBox:"0 0 12 12"}},[n("path",{attrs:{d:"M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),n("span",{staticClass:"opacity-0 ease-out duration-100 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity",class:{"opacity-100 ease-in duration-200":t.isOn,"opacity-0 ease-out duration-100":!t.isOn}},[n("svg",{staticClass:"bg-white h-3 w-3 text-indigo-600",attrs:{fill:"currentColor",viewBox:"0 0 12 12"}},[n("path",{attrs:{d:"M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"}})])])])])}),[],!1,null,null,null);e.default=component.exports},514:function(t,e,n){t.exports=n.p+"img/spinner-gray.a51bfce.svg"},515:function(t,e,n){t.exports=n.p+"img/spinner-blue.f7f11e6.svg"},516:function(t,e,n){"use strict";n.r(e);var r={name:"LayoutVokenAccount",props:{showAddress:{type:Boolean,required:!1,default:!1},showValue:{type:Boolean,required:!1,default:!1}},computed:{vokenAccount:function(){return this.$store.state.voken.account},address:function(){return this.showAddress&&this.vokenAccount.vokenInt>"0"},vesting:function(){return this.vokenAccount.balance>"0"&&this.vokenAccount.balance===this.vokenAccount.vesting},available:function(){return this.vokenAccount.balance>"0"&&this.vokenAccount.balance!==this.vokenAccount.available},allAvailable:function(){return this.vokenAccount.balance>"0"&&this.vokenAccount.balance===this.vokenAccount.available},value:function(){return this.showValue&&this.vokenAccount.value>"0"},balanceClass:function(){return this.address?"mt-8":"resp-mt"}}},o=n(7),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("layout-voken-avatar"),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.address,expression:"address"}],staticClass:"mt-8 font-mono text-xs sm:text-sm md:text-base text-cool-gray-500 truncate"},[t._v("\n    "+t._s(t.vokenAccount.vokenAddress)+"\n  ")]),t._v(" "),n("div",{staticClass:"font-mono text-cool-gray-700",class:t.balanceClass},[n("div",{staticClass:"text-xl md:text-2xl"},[t._v("\n      "+t._s(t.vokenAccount.balanceObj.d)),n("span",{directives:[{name:"show",rawName:"v-show",value:t.vokenAccount.balanceObj.f,expression:"vokenAccount.balanceObj.f"}],staticClass:"text-lg md:text-xl"},[t._v("."+t._s(t.vokenAccount.balanceObj.f))]),t._v(" "),n("span",{staticClass:"text-lg md:text-xl"},[t._v("\n        VokenTB\n      ")]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.vesting,expression:"vesting"}],staticClass:"font-sans text-base md:text-lg text-gray-400"},[t._v("\n        "+t._s(t.$t("voken._vesting_"))+"\n      ")]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.allAvailable,expression:"allAvailable"}],staticClass:"font-sans text-base md:text-lg text-gray-400"},[t._v("\n        "+t._s(t.$t("voken._all_available_"))+"\n      ")])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"mt-2"},[t._v("\n      "+t._s(t.$t("voken.Market_Value"))+"\n      $"+t._s(t.vokenAccount.valueObj.d)),n("span",{directives:[{name:"show",rawName:"v-show",value:t.vokenAccount.valueObj.f,expression:"vokenAccount.valueObj.f"}],staticClass:"text-sm"},[t._v("."+t._s(t.vokenAccount.valueObj.f))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.available,expression:"available"}],staticClass:"mt-2 text-pink-600"},[t._v("\n      "+t._s(t.vokenAccount.availableObj.d)),n("span",{directives:[{name:"show",rawName:"v-show",value:t.vokenAccount.availableObj.f,expression:"vokenAccount.availableObj.f"}],staticClass:"text-sm"},[t._v("."+t._s(t.vokenAccount.availableObj.f))]),t._v("\n      "+t._s(t.$t("voken.available"))+"\n    ")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"0"===t.vokenAccount.balance,expression:"vokenAccount.balance === '0'"}],staticClass:"mt-4 text-xs sm:text-sm md:text-base text-gray-500 truncate"},[t._v("\n      "+t._s(t.$store.state.ether.account)+"\n    ")])])],1)}),[],!1,null,"56d020f1",null);e.default=component.exports;installComponents(component,{LayoutVokenAvatar:n(511).default})},517:function(t,e,n){"use strict";n.r(e);var r={name:"TxInfo",props:["status","hash","confirmation","message"],computed:{txInfoClassArr:function(){var t=["tx-info"];return 0===this.status?t.push("tx-info-pending"):1===this.status?t.push("tx-info-confirming"):2===this.status?t.push("tx-info-success"):this.status>2&&t.push("tx-info-error"),t},statusDisplay:function(){return 0===this.status?"Pending...":1===this.status?"Confirming... "+this.confirmation+" blocks":2===this.status?"Success > "+this.confirmation+" blocks":this.status>2?"Error":void 0},hashDisplay:function(){return this.hash?this.hash:"..."}}},o=n(7),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"show",rawName:"v-show",value:"number"==typeof t.status&&t.status>-1,expression:"typeof status === 'number' && status > -1"}],staticClass:"space-x-2",class:t.txInfoClassArr},[r("div",{staticClass:"w-1/4 flex items-center justify-center"},[0===t.status?r("img",{staticClass:"w-20 h-20",attrs:{src:n(514),alt:"spinner"}}):1===t.status?r("img",{staticClass:"w-20 h-20",attrs:{src:n(515),alt:"spinner"}}):2===t.status?r("fa",{staticClass:"mx-5 fa-3x",attrs:{icon:["fas","check-square"]}}):t.status>2?r("fa",{staticClass:"mx-5 fa-3x",attrs:{icon:["fas","times-circle"]}}):t._e()],1),t._v(" "),r("div",{staticClass:"w-full pt-3 pb-4"},[r("div",{staticClass:"tx-title"},[t._v("\n      "+t._s(t.statusDisplay)+"\n    ")]),t._v(" "),t.hash?r("div",{staticClass:"tx-hash"},[t._v("\n      "+t._s(t.hash)+"\n    ")]):t._e(),t._v(" "),t.message?r("div",{staticClass:"tx-message"},[t._v("\n      "+t._s(t.message)+"\n    ")]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},554:function(t,e,n){var content=n(602);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("0e6e162c",content,!0,{sourceMap:!1})},601:function(t,e,n){"use strict";n(554)},602:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,'.number-f[data-v-0df26b7d]{\n  font-size:0.875rem;\n  line-height:1.25rem;\n  --tw-text-opacity:1;\n  color:rgba(151, 166, 186, var(--tw-text-opacity))\n}\n.mnemonic-canvas[data-v-0df26b7d]{\n  background-image:linear-gradient(to bottom right, var(--tw-gradient-stops));\n  --tw-gradient-from:#ebf5ff;\n  --tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(235, 245, 255, 0));\n  --tw-gradient-to:#cddbfe;\n  --tw-border-opacity:1;\n  border-color:rgba(180, 198, 252, var(--tw-border-opacity));\n  border-radius:0.375rem;\n  border-width:1px;\n  margin-top:1.5rem;\n  padding-left:1rem;\n  padding-right:1rem;\n  padding-top:1.5rem;\n  padding-bottom:1.5rem;\n  --tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n.mnemonic[data-v-0df26b7d]{\n  --tw-border-opacity:1;\n  border-color:rgba(180, 198, 252, var(--tw-border-opacity));\n  border-bottom-width:2px;\n  display:flex;\n  justify-content:space-between;\n  font-family:Hack, monospace, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n  padding-left:0.75rem;\n  padding-right:0.75rem;\n  text-align:center\n}\n.mnemonic-index[data-v-0df26b7d]{\n  --tw-text-opacity:1;\n  color:rgba(107, 114, 128, var(--tw-text-opacity))\n}\n.mnemonic-word[data-v-0df26b7d]{\n  width:100%\n}\n.a-generator[data-v-0df26b7d]{\n  padding-left:0.5rem;\n  padding-right:0.5rem;\n  padding-bottom:0.5rem;\n  --tw-text-opacity:1;\n  color:rgba(107, 114, 128, var(--tw-text-opacity))\n}\n.a-generator[data-v-0df26b7d]:hover{\n  --tw-border-opacity:1;\n  border-color:rgba(28, 100, 242, var(--tw-border-opacity));\n  border-bottom-width:1px;\n  --tw-text-opacity:1;\n  color:rgba(28, 100, 242, var(--tw-text-opacity))\n}',""]),t.exports=r},607:function(t,e,n){"use strict";n.r(e);var r=n(1),o=(n(14),n(17),n(68),n(69),n(55),n(539)),c=n(540),l=n.n(c),d=n(180),v=n(72),f=n(71),m=n.n(f),h={name:"WalletBindMain",components:{VueAvatar:d.a},data:function(){return{vokenAddress:"",vokenAddressError:"",vokenInt:"0",referrer:v.a.ZERO_ADDRESS,accepted:!1,showButtonSave:!0,showButtonNew:!0,mnemonic:"",txStatus:-1,txHash:null,txConfirmation:0,txMessage:null}},watch:{vokenAddress:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.vokenAddress){e.next=15;break}return t.vokenAddressError="",t.referrer=v.a.ZERO_ADDRESS,t.vokenInt="0",e.prev=4,t.vokenInt=m.a.toBN(t.vokenAddress).toString(),e.next=8,t.$store.state.voken.contract().methods.voken2address(t.vokenInt).call().then((function(e){v.a.isZeroAddress(e)||(t.vokenAddressError="The address is already exist"),t.referrer=e})).catch((function(t){console.error("::: voken2address",t)}));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),t.vokenAddressError=e.t0.message;case 13:e.next=18;break;case 15:t.vokenAddressError="",t.referrer=v.a.ZERO_ADDRESS,t.vokenInt="0";case 18:case"end":return e.stop()}}),e,null,[[4,10]])})))()}},computed:{vokenAccount:function(){return this.$store.state.voken.account},isAddress:function(){return m.a.isAddress(this.vokenAddress)},vokenAddressStatus:function(){if(this.vokenAddress)return this.isAddress?v.a.isZeroAddress(this.referrer)?"success":"warn":"error"},vokenAddressLabel:function(){return this.vokenAddressError?this.vokenAddressError:this.$t("wallet.VOKEN_wallet_address")},mnemonicArray:function(){return this.mnemonic.split(" ")}},methods:{toggleAccepted:function(){this.accepted=!this.accepted},saveVokenAddress:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.vokenAddress){e.next=3;break}return t.$toast.error("Make sure you have entered a valid Voken wallet address."),e.abrupt("return");case 3:if(!t.vokenAddressError){e.next=6;break}return t.$toast.error(t.vokenAddressError),e.abrupt("return");case 6:if(t.accepted){e.next=9;break}return t.$toast.error("Make sure you have backed up your mnemonic phase!"),e.abrupt("return");case 9:return t.showButtonSave=!1,t.txStatus=0,t.txMessage=null,e.next=14,t.$store.state.voken.contract().methods.setVokenAddress(t.vokenInt).send({from:t.$store.state.ether.account}).on("transactionHash",t.onTransactionHash).on("receipt",t.onReceipt).on("confirmation",t.onConfirmation).on("error",t.onError).catch(t.onError);case 14:case"end":return e.stop()}}),e)})))()},onTransactionHash:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.txStatus=0,e.txHash=t;case 2:case"end":return n.stop()}}),n)})))()},onReceipt:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.txMessage=null,t.status?e.txStatus=1:e.txStatus=3;case 2:case"end":return n.stop()}}),n)})))()},onConfirmation:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(e.txStatus<3&&t<16)){n.next=13;break}if(!(t<6)){n.next=5;break}e.txStatus=1,n.next=12;break;case 5:if(!(t>=6&&t<10)){n.next=9;break}e.txStatus=2,n.next=12;break;case 9:return e.txStatus=2,n.next=12,e.$store.dispatch("voken/SYNC_DATA");case 12:e.txConfirmation=t;case 13:case"end":return n.stop()}}),n)})))()},onError:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.txStatus=3,e.txMessage=t.message,e.showButtonSave=!0;case 3:case"end":return n.stop()}}),n)})))()},newVokenAddress:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.showButtonNew=!1,e.next=3,o.generateMnemonic(192);case 3:return t.mnemonic=e.sent,e.next=6,t.generateFromMnemonic();case 6:case"end":return e.stop()}}),e)})))()},generateFromMnemonic:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.mnemonicToSeed(t.mnemonic);case 2:n=e.sent,r=new l.a(n),c=r.derive(0),t.vokenAddress=c.address;case 6:case"end":return e.stop()}}),e)})))()}}},x=(n(601),n(7)),component=Object(x.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout-bg-a",{staticClass:"py-20"},[n("div",{staticClass:"resp-wide"},["0"===t.vokenAccount.vokenInt?n("div",{staticClass:"max-w-xl mx-auto"},["0"===t.vokenAccount.balanceStr?n("div",{staticClass:"resp-mt text-center"},[n("p",{staticClass:"mt-4 text-lg leading-6 font-bold text-red-500"},[t._v("\n          "+t._s(t.$t("voken.You_are_NOT_holding_VokenTB"))+"\n        ")]),t._v(" "),n("div",{staticClass:"resp-mt"},[n("nuxt-link",{staticClass:"w-full max-w-xl btn btn-pink justify-center py-3 text-lg",attrs:{to:t.localePath("/voken/early-bird")}},[t._v("\n            Go to Early-Bird Sale\n          ")])],1)]):n("div",{class:t.vokenAddressStatus},[n("div",{staticClass:"mx-auto avatar-wrapper"},[n("vue-avatar",{directives:[{name:"show",rawName:"v-show",value:t.isAddress,expression:"isAddress"}],attrs:{value:t.vokenAddress}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isAddress,expression:"!isAddress"}],staticClass:"h-full flex items-center justify-center text-2xl lg:text-3xl xl:text-4xl text-gray-300",class:{"text-red-300":t.vokenAddress&&!t.isAddress}},[n("fa",{directives:[{name:"show",rawName:"v-show",value:!t.vokenAddress,expression:"!vokenAddress"}],attrs:{icon:["fas","seedling"]}}),t._v(" "),n("fa",{directives:[{name:"show",rawName:"v-show",value:t.vokenAddress&&!t.isAddress,expression:"vokenAddress && !isAddress"}],attrs:{icon:["fas","times"]}})],1)],1),t._v(" "),n("label",{staticClass:"block mt-4 md:mt-6 lg:mt-8 xl:mt-12 2xl:mt-14 font-medium text-gray-700 text-left",attrs:{for:"address-validate"}},[t._v("\n          "+t._s(t.vokenAddressLabel)+"\n        ")]),t._v(" "),n("div",{staticClass:"relative mt-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.vokenAddress,expression:"vokenAddress"}],staticClass:"input-indigo w-full py-3 px-6 font-mono text-sm md:text-base",attrs:{type:"text",id:"address-validate",placeholder:"Input your Voken wallet address"},domProps:{value:t.vokenAddress},on:{input:function(e){e.target.composing||(t.vokenAddress=e.target.value)}}}),t._v(" "),n("div",{staticClass:"absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none"},[n("fa",{staticClass:"fa-error",attrs:{icon:["fas","times"]}}),t._v(" "),n("fa",{staticClass:"fa-success",attrs:{icon:["fas","check"]}}),t._v(" "),n("fa",{staticClass:"fa-warn",attrs:{icon:["fas","exclamation-triangle"]}})],1)]),t._v(" "),n("div",{staticClass:"mt-6 ml-4 flex items-center space-x-4",on:{click:t.toggleAccepted}},[n("comp-switch",{attrs:{isOn:t.accepted}}),t._v(" "),n("div",{staticClass:"leading-7 text-sm text-cool-gray-500"},[t._v("\n            I have already backed up the mnemonic (backup phrase);\n            And I know that the Voken wallet address cannot be changed.\n          ")])],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showButtonSave,expression:"showButtonSave"}],staticClass:"mt-6"},[n("button",{staticClass:"w-full btn btn-pink py-3 justify-center text-xl",on:{click:t.saveVokenAddress}},[t._v("\n            "+t._s(t.$t("wallet.Set_Voken_Address"))+"\n          ")])]),t._v(" "),n("tx-info",{class:{"mt-4":t.showButtonSave,"mt-8":!t.showButtonSave},attrs:{status:t.txStatus,hash:t.txHash,confirmation:t.txConfirmation,message:t.txMessage}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showButtonNew,expression:"showButtonNew"}],staticClass:"mt-4 flex justify-between space-x-2"},[n("button",{staticClass:"w-full btn py-3 justify-center text-xl",on:{click:t.newVokenAddress}},[t._v("\n            "+t._s(t.$t("wallet.Generate_A_New_Voken_Address"))+"\n          ")])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.mnemonic,expression:"mnemonic"}],staticClass:"mnemonic-canvas"},[n("h2",{staticClass:"text-2xl text-gray-600 text-center"},[t._v("\n            "+t._s(t.$t("wallet.Mnemonic__backup_phrase_"))+"\n          ")]),t._v(" "),n("div",{staticClass:"w-5/6 mt-6 mx-auto font-mono text-red-600 text-center"},[t._v("\n            "+t._s(t.$t("wallet.Please_write_the_mnemonic_"))+"\n          ")]),t._v(" "),n("div",{staticClass:"mt-6 grid grid-cols-3 gap-3"},t._l(t.mnemonicArray,(function(e,r){return n("div",{staticClass:"mnemonic"},[n("span",{staticClass:"mnemonic-index"},[t._v("\n              "+t._s(r+1)+".\n            ")]),t._v(" "),n("span",{staticClass:"mnemonic-word"},[t._v("\n              "+t._s(e)+"\n            ")])])})),0),t._v(" "),n("button",{staticClass:"mt-6 w-full btn py-3 justify-center",on:{click:t.newVokenAddress}},[t._v("\n            "+t._s(t.$t("wallet.Generate_New_Address__Mnemonic"))+"\n          ")]),t._v(" "),n("div",{staticClass:"mt-6 font-mono text-sm text-center"},[n("nuxt-link",{staticClass:"a-generator",attrs:{to:t.localePath("/wallet/generator")}},[n("fa",{attrs:{icon:["fas","wallet"]}}),t._v("\n              "+t._s(t.$t("wallet.Visit__VOKEN_wallet_generator"))+"\n            ")],1)],1)])],1)]):n("div",{staticClass:"mx-auto max-w-xl text-center"},[n("h2",{staticClass:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"},[t._v("\n        "+t._s(t.$t("voken.bind.Already_Done"))+"\n      ")]),t._v(" "),n("layout-voken-account",{staticClass:"resp-mt",attrs:{"show-address":!0}}),t._v(" "),n("div",{staticClass:"resp-mt"},[n("nuxt-link",{staticClass:"w-full btn justify-center py-3 text-lg",attrs:{to:t.localePath("/voken/migrate")}},[t._v("\n          Migrate to Voken Blockchain\n        ")])],1),t._v(" "),n("div",{staticClass:"mt-3"},[n("nuxt-link",{staticClass:"w-full btn btn-pink justify-center py-3 text-lg",attrs:{to:t.localePath("/voken/early-bird-referral")}},[t._v("\n          Early-Bird Sale Referral Rewards\n        ")])],1)],1)])])}),[],!1,null,"0df26b7d",null);e.default=component.exports;installComponents(component,{CompSwitch:n(513).default,TxInfo:n(517).default,LayoutVokenAccount:n(516).default,LayoutBgA:n(510).default})}}]);