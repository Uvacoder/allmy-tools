(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{554:function(t,o,e){"use strict";e.r(o);var l=e(380),n=e.n(l),r=e(407),c=e.n(r),d={props:{tool:{type:Object,default:null}},data:function(){return{input:"",inputFormatted:""}},methods:{beautify:function(){var t;try{t=n.a.format(this.input,{semi:!1,parser:"html",plugins:[c.a]})}catch(o){t="This is not valid HTML"}this.inputFormatted=t}}},v=e(94),f=e(125),m=e.n(f),_=e(271),h=e(188),w=e(361),V=e(370),k=e(187),y=e(368),x=e(384),T=e(52),F=e(197),component=Object(v.a)(d,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-card",[e("v-toolbar",{attrs:{color:"primary"}},[e("v-btn",{attrs:{icon:"",dark:""},on:{click:function(o){t.tool.dialog=!1}}},[e("v-icon",[t._v("mdi-close")])],1),t._v(" "),e("v-toolbar-title",[t._v(t._s(t.tool.name)+" - "+t._s(t.tool.desc))])],1),t._v(" "),e("v-container",{attrs:{"fill-height":"",fluid:""}},[e("v-spacer"),t._v(" "),e("v-col",{attrs:{cols:"12",md:"6",sm:"12",align:"center"}},[e("v-col",{attrs:{cols:"12"}},[e("v-textarea",{attrs:{filled:"",label:"Input","auto-grow":"",rows:"10","hide-details":""},model:{value:t.input,callback:function(o){t.input=o},expression:"input"}})],1),t._v(" "),e("v-btn",{staticClass:"my-4",attrs:{block:"",color:"accent"},on:{click:t.beautify}},[t._v("\n        Beautify\n      ")]),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("v-textarea",{attrs:{filled:"",label:"Output","auto-grow":"",rows:"10",readonly:"","hide-details":""},model:{value:t.inputFormatted,callback:function(o){t.inputFormatted=o},expression:"inputFormatted"}})],1)],1),t._v(" "),e("v-spacer")],1)],1)}),[],!1,null,null,null);o.default=component.exports;m()(component,{VBtn:_.a,VCard:h.a,VCol:w.a,VContainer:V.a,VIcon:k.a,VSpacer:y.a,VTextarea:x.a,VToolbar:T.a,VToolbarTitle:F.a})}}]);