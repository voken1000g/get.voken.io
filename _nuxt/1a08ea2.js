(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{566:function(t,e,n){"use strict";n.r(e);var o={name:"LayoutSwitch",props:{isOn:{type:Boolean,default:!1}},data:function(){return{toggleOn:this.isOn}},methods:{toggle:function(){this.toggleOn=!this.toggleOn,this.$emit("update:isOn",this.toggleOn)}}},l=n(12),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex items-center space-x-4 text-sm"},[n("button",{staticClass:"relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline",class:{"bg-indigo-600":t.toggleOn,"bg-indigo-200":!t.toggleOn},on:{click:t.toggle}},[n("span",{staticClass:"relative inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200",class:{"translate-x-5":t.toggleOn,"translate-x-0":!t.toggleOn}},[n("span",{staticClass:"absolute inset-0 h-full w-full flex items-center justify-center transition-opacity",class:{"opacity-0 ease-out duration-100":t.toggleOn,"opacity-100 ease-in duration-200":!t.toggleOn}},[n("svg",{staticClass:"h-3 w-3 text-gray-400",attrs:{fill:"none",viewBox:"0 0 12 12"}},[n("path",{attrs:{d:"M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),n("span",{staticClass:"absolute inset-0 h-full w-full flex items-center justify-center transition-opacity",class:{"opacity-100 ease-in duration-200":t.toggleOn,"opacity-0 ease-out duration-100":!t.toggleOn}},[n("svg",{staticClass:"h-3 w-3 text-indigo-600",attrs:{fill:"currentColor",viewBox:"0 0 12 12"}},[n("path",{attrs:{d:"M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"}})])])])]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.isOn&&t.$slots.textOn,expression:"isOn && $slots.textOn"}],staticClass:"text-indigo-700 font-bold"},[t._t("textOn")],2),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.isOn&&t.$slots.textOff,expression:"!isOn && $slots.textOff"}],staticClass:"text-indigo-500"},[t._t("textOff")],2)])}),[],!1,null,null,null);e.default=component.exports}}]);