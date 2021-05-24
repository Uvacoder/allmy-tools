(window.webpackJsonp=window.webpackJsonp||[]).push([[65,48,49,50,51,52,53,54,55],{360:function(t,e,n){},365:function(t,e,n){n(4)({target:"Object",stat:!0},{is:n(259)})},367:function(t,e,n){},369:function(t,e,n){"use strict";n(8),n(6),n(10),n(11),n(7),n(12);var o=n(1),r=(n(17),n(58),n(360),n(368)),l=n(5);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d=Object(l.a)(r.a);e.a=d.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},r.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var input=this.$refs.input;if(input){input.style.height="0";var t=input.scrollHeight,e=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(e,t)+"px"}},genInput:function(){var input=r.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput:function(t){r.a.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},373:function(t,e,n){},380:function(t,e,n){"use strict";n(8),n(6),n(10),n(11),n(7),n(12);var o=n(1),r=(n(367),n(24));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=r.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:c({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:c({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},403:function(t,e,n){"use strict";var o=n(83),r=n(1),l=(n(17),n(66),n(58),n(36),n(53),n(101),n(8),n(6),n(10),n(11),n(7),n(12),n(373),n(24)),c=l.a.extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:l.a.options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}}),d=n(102),v=n(121),f=n(190),h=n(192),m=n(2).a.extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout((function(){e.isActive=!1}))}}}),_=n(191),w=n(34),y=n(189),x=n(5),O=n(9),C=n(0);function V(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?V(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):V(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j=Object(x.a)(d.a,v.a,f.a,h.a,m,_.a,w.a);e.a=j.extend({name:"v-dialog",directives:{ClickOutside:y.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(r.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(r.a)(t,"v-dialog--active",this.isActive),Object(r.a)(t,"v-dialog--persistent",this.persistent),Object(r.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(r.a)(t,"v-dialog--scrollable",this.scrollable),Object(r.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(O.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):h.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===C.p.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),r=Object(o.a)(n).find((function(t){return!t.hasAttribute("disabled")}));r&&r.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(c,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:k({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=k(k({},data.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(C.f)(this.maxWidth),width:"auto"===this.width?void 0:Object(C.f)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},532:function(t,e,n){},566:function(t,e,n){"use strict";n.r(e);var o={props:{tool:{type:Object,default:null}},data:function(){return{input:"",inputDown:""}}},r=n(91),l=n(120),c=n.n(l),d=n(258),v=n(180),f=n(345),h=n(354),m=n(380),_=n(179),w=n(352),y=n(369),x=n(49),O=n(188),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-toolbar",{attrs:{color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.tool.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("v-toolbar-title",[t._v(t._s(t.tool.name)+" - "+t._s(t.tool.desc))])],1),t._v(" "),n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("v-spacer"),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6",sm:"12",align:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{filled:"",label:"Input","auto-grow":"",rows:"10","hide-details":""},on:{input:function(e){t.inputDown=t.input.toLowerCase()}},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),t._v(" "),n("v-divider",{staticClass:"my-4"}),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{filled:"",label:"Output","auto-grow":"",rows:"10",readonly:"","hide-details":""},model:{value:t.inputDown,callback:function(e){t.inputDown=e},expression:"inputDown"}})],1)],1),t._v(" "),n("v-spacer")],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCol:f.a,VContainer:h.a,VDivider:m.a,VIcon:_.a,VSpacer:w.a,VTextarea:y.a,VToolbar:x.a,VToolbarTitle:O.a})},567:function(t,e,n){"use strict";n.r(e);var o={props:{tool:{type:Object,default:null}},data:function(){return{input:"",inputUp:""}}},r=n(91),l=n(120),c=n.n(l),d=n(258),v=n(180),f=n(345),h=n(354),m=n(380),_=n(179),w=n(352),y=n(369),x=n(49),O=n(188),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-toolbar",{attrs:{color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.tool.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("v-toolbar-title",[t._v(t._s(t.tool.name)+" - "+t._s(t.tool.desc))])],1),t._v(" "),n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("v-spacer"),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6",sm:"12",align:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{filled:"",label:"Input","auto-grow":"",rows:"10","hide-details":""},on:{input:function(e){t.inputUp=t.input.toUpperCase()}},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),t._v(" "),n("v-divider",{staticClass:"my-4"}),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{filled:"",label:"Output","auto-grow":"",rows:"10",readonly:"","hide-details":""},model:{value:t.inputUp,callback:function(e){t.inputUp=e},expression:"inputUp"}})],1)],1),t._v(" "),n("v-spacer")],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCol:f.a,VContainer:h.a,VDivider:m.a,VIcon:_.a,VSpacer:w.a,VTextarea:y.a,VToolbar:x.a,VToolbarTitle:O.a})},568:function(t,e,n){"use strict";n.r(e);var o={props:{tool:{type:Object,default:null}},data:function(){return{input:"",inputCap:""}}},r=n(91),l=n(120),c=n.n(l),d=n(258),v=n(180),f=n(345),h=n(354),m=n(380),_=n(179),w=n(352),y=n(369),x=n(49),O=n(188),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-toolbar",{attrs:{color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.tool.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("v-toolbar-title",[t._v(t._s(t.tool.name)+" - "+t._s(t.tool.desc))])],1),t._v(" "),n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("v-spacer"),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6",sm:"12",align:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{filled:"",label:"Input","auto-grow":"",rows:"10","hide-details":""},on:{input:function(e){t.inputCap=t.input.split(" ").map((function(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()})).join(" ")}},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),t._v(" "),n("v-divider",{staticClass:"my-4"}),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{filled:"",label:"Output","auto-grow":"",rows:"10",readonly:"","hide-details":""},model:{value:t.inputCap,callback:function(e){t.inputCap=e},expression:"inputCap"}})],1)],1),t._v(" "),n("v-spacer")],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCol:f.a,VContainer:h.a,VDivider:m.a,VIcon:_.a,VSpacer:w.a,VTextarea:y.a,VToolbar:x.a,VToolbarTitle:O.a})},569:function(t,e,n){"use strict";n.r(e);var o={props:{tool:{type:Object,default:null}},data:function(){return{input:"",inputRev:""}}},r=n(91),l=n(120),c=n.n(l),d=n(258),v=n(180),f=n(345),h=n(354),m=n(380),_=n(179),w=n(352),y=n(369),x=n(49),O=n(188),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-toolbar",{attrs:{color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.tool.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("v-toolbar-title",[t._v(t._s(t.tool.name)+" - "+t._s(t.tool.desc))])],1),t._v(" "),n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("v-spacer"),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6",sm:"12",align:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{filled:"",label:"Input","auto-grow":"",rows:"10","hide-details":""},on:{input:function(e){t.inputRev=t.input.split(" ").map((function(t){return t.split("").reverse().join("")})).reverse().join(" ")}},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),t._v(" "),n("v-divider",{staticClass:"my-4"}),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{filled:"",label:"Output","auto-grow":"",rows:"10",readonly:"","hide-details":""},model:{value:t.inputRev,callback:function(e){t.inputRev=e},expression:"inputRev"}})],1)],1),t._v(" "),n("v-spacer")],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCol:f.a,VContainer:h.a,VDivider:m.a,VIcon:_.a,VSpacer:w.a,VTextarea:y.a,VToolbar:x.a,VToolbarTitle:O.a})},570:function(t,e,n){"use strict";n.r(e);var o={props:{tool:{type:Object,default:null}},data:function(){return{input:"",counter:0}}},r=n(91),l=n(120),c=n.n(l),d=n(258),v=n(180),f=n(345),h=n(354),m=n(380),_=n(179),w=n(352),y=n(368),x=n(369),O=n(49),C=n(188),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-toolbar",{attrs:{color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.tool.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("v-toolbar-title",[t._v(t._s(t.tool.name)+" - "+t._s(t.tool.desc))])],1),t._v(" "),n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("v-spacer"),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6",sm:"12",align:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{filled:"",label:"Input","auto-grow":"",rows:"10","hide-details":""},on:{input:function(e){t.counter=t.input.split(" ").filter((function(t){return null!==t&&0!==t.length})).length}},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),t._v(" "),n("v-divider",{staticClass:"my-4"}),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{filled:"",label:"Output",readonly:"","hide-details":""},model:{value:t.counter,callback:function(e){t.counter=e},expression:"counter"}})],1)],1),t._v(" "),n("v-spacer")],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCol:f.a,VContainer:h.a,VDivider:m.a,VIcon:_.a,VSpacer:w.a,VTextField:y.a,VTextarea:x.a,VToolbar:O.a,VToolbarTitle:C.a})},571:function(t,e,n){"use strict";n.r(e);var o={props:{tool:{type:Object,default:null}},data:function(){return{input:"",counter:0}}},r=n(91),l=n(120),c=n.n(l),d=n(258),v=n(180),f=n(345),h=n(354),m=n(380),_=n(179),w=n(352),y=n(368),x=n(369),O=n(49),C=n(188),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-toolbar",{attrs:{color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.tool.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("v-toolbar-title",[t._v(t._s(t.tool.name)+" - "+t._s(t.tool.desc))])],1),t._v(" "),n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("v-spacer"),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6",sm:"12",align:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{filled:"",label:"Input","auto-grow":"",rows:"10","hide-details":""},on:{input:function(e){t.counter=t.input.split(" ").join("").length}},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),t._v(" "),n("v-divider",{staticClass:"my-4"}),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{filled:"",label:"Output",readonly:"","hide-details":""},model:{value:t.counter,callback:function(e){t.counter=e},expression:"counter"}})],1)],1),t._v(" "),n("v-spacer")],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCol:f.a,VContainer:h.a,VDivider:m.a,VIcon:_.a,VSpacer:w.a,VTextField:y.a,VTextarea:x.a,VToolbar:O.a,VToolbarTitle:C.a})},572:function(t,e,n){"use strict";n.r(e);var o={props:{tool:{type:Object,default:null}},data:function(){return{input:"",inputClap:""}}},r=n(91),l=n(120),c=n.n(l),d=n(258),v=n(180),f=n(345),h=n(354),m=n(380),_=n(179),w=n(352),y=n(369),x=n(49),O=n(188),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-toolbar",{attrs:{color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.tool.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("v-toolbar-title",[t._v(t._s(t.tool.name)+" - "+t._s(t.tool.desc))])],1),t._v(" "),n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("v-spacer"),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6",sm:"12",align:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{filled:"",label:"Input","auto-grow":"",rows:"10","hide-details":""},on:{input:function(e){t.inputClap=t.input.split(" ").filter((function(t){return null!==t&&0!==t.length})).join(" 👏 ")}},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),t._v(" "),n("v-divider",{staticClass:"my-4"}),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{filled:"",label:"Output","auto-grow":"",rows:"10",readonly:"","hide-details":""},model:{value:t.inputClap,callback:function(e){t.inputClap=e},expression:"inputClap"}})],1)],1),t._v(" "),n("v-spacer")],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCol:f.a,VContainer:h.a,VDivider:m.a,VIcon:_.a,VSpacer:w.a,VTextarea:y.a,VToolbar:x.a,VToolbarTitle:O.a})},573:function(t,e,n){"use strict";n.r(e);var o={props:{tool:{type:Object,default:null}},data:function(){return{input:"",inputMock:""}}},r=n(91),l=n(120),c=n.n(l),d=n(258),v=n(180),f=n(345),h=n(354),m=n(380),_=n(179),w=n(352),y=n(369),x=n(49),O=n(188),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-toolbar",{attrs:{color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.tool.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("v-toolbar-title",[t._v(t._s(t.tool.name)+" - "+t._s(t.tool.desc))])],1),t._v(" "),n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("v-spacer"),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6",sm:"12",align:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{filled:"",label:"Input","auto-grow":"",rows:"10","hide-details":""},on:{input:function(e){t.inputMock=t.input.split("").map((function(t){return 1===Math.floor(Math.random()*Math.floor(2))?t.toLowerCase():t.toUpperCase()})).join("")}},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),t._v(" "),n("v-divider",{staticClass:"my-4"}),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{filled:"",label:"Output","auto-grow":"",rows:"10",readonly:"","hide-details":""},model:{value:t.inputMock,callback:function(e){t.inputMock=e},expression:"inputMock"}})],1)],1),t._v(" "),n("v-spacer")],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCol:f.a,VContainer:h.a,VDivider:m.a,VIcon:_.a,VSpacer:w.a,VTextarea:y.a,VToolbar:x.a,VToolbarTitle:O.a})},728:function(t){t.exports=JSON.parse('{"downcase":{"name":"Downcase","desc":"Lowercase input text","icon":"format-text-rotation-down","dialog":false},"upcase":{"name":"Upcase","desc":"Uppercase input text","icon":"format-text-rotation-up","dialog":false},"capitalize":{"name":"Capitalize","desc":"Capitalize input text","icon":"text-short","dialog":false},"reverse":{"name":"Reverse","desc":"Reverse input text","icon":"sort-reverse-variant","dialog":false},"countCharacters":{"name":"Count Characters","desc":"Count the amount of characters input text has","icon":"format-text-variant","dialog":false},"countWords":{"name":"Count Words","desc":"Count the words of characters input text has","icon":"keyboard-space","dialog":false},"clappy":{"name":"Clappy","desc":"Clap 👏 between 👏 words","icon":"handshake","dialog":false},"mock":{"name":"Mock","desc":"MoCk iNpUt tExT","icon":"swim","dialog":false}}')},729:function(t,e,n){"use strict";n(532)},739:function(t,e,n){"use strict";n.r(e);var o=n(728),r=n(566),l=n(567),c=n(568),d=n(569),v=n(570),f=n(571),h=n(572),m=n(573),_={components:{Downcase:r.default,Upcase:l.default,Capitalize:c.default,Reverse:d.default,CountWords:v.default,CountCharacters:f.default,Clappy:h.default,Mock:m.default},data:function(){return{tools:o}},head:function(){var title="Text",desc="TextTools";return{title:title,meta:[{hid:"description",name:"description",content:desc},{name:"og:description",content:desc},{name:"og:title",content:"Text - Argyle"}]}}},w=(n(729),n(91)),y=n(120),x=n.n(y),O=n(258),C=n(180),V=n(150),k=n(345),j=n(403),T=n(179),$=n(346),I=n(352),component=Object(w.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center",align:"center"}},t._l(t.tools,(function(e){return n("v-col",{key:e.name,attrs:{cols:"12",md:"4",sm:"6"}},[n("v-card",{staticClass:"card-outter",attrs:{elevation:"2",outlined:"",height:"100%"}},[n("v-card-title",[n("v-icon",{staticClass:"accent--text mr-2"},[t._v("\n          mdi-"+t._s(e.icon)+"\n        ")]),t._v("\n        "+t._s(e.name.toUpperCase())+"\n        "),n("v-spacer"),t._v(" "),e.external?n("v-icon",{staticClass:"accent--text"},[t._v("\n          mdi-signal-variant\n        ")]):t._e()],1),t._v(" "),n("v-card-text",{staticClass:"text--primary"},[n("div",[t._v(t._s(e.desc))])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-card-actions",{staticClass:"card-actions pa-4"},[n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"primary"}},"v-btn",r,!1),o),[t._v("\n              USE ME\n            ")])]}}],null,!0),model:{value:e.dialog,callback:function(n){t.$set(e,"dialog",n)},expression:"tool.dialog"}},[t._v(" "),n(e.name.split(" ").join(""),{tag:"component",attrs:{tool:e}})],1)],1)],1)],1)})),1)}),[],!1,null,"2c93ac5e",null);e.default=component.exports;x()(component,{VBtn:O.a,VCard:C.a,VCardActions:V.a,VCardText:V.b,VCardTitle:V.c,VCol:k.a,VDialog:j.a,VIcon:T.a,VRow:$.a,VSpacer:I.a})}}]);