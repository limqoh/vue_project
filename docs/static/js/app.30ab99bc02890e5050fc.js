webpackJsonp([0],{"/TS7":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),r=[{title:"title1",content:"content1"},{title:"title2",content:"content2"}],a={name:"Create",data:function(){return{data:r,title:"",content:""}},methods:{add:function(){this.data.push({title:this.title,content:this.content})}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{placeholder:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{placeholder:"content"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),t._v(" "),n("button",{on:{click:t.add}},[t._v("추가")])])},staticRenderFns:[]};var l={name:"Read",data:function(){return{data:r}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[t._m(0),t._v(" "),t._l(t.data,function(e,i){return n("tr",{key:i},[n("td",[t._v(t._s(e.title))]),t._v(" "),n("td",[t._v(t._s(e.content))])])})],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("제목")]),this._v(" "),e("td",[this._v("내용")])])}]};var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("Update")])},staticRenderFns:[]};var u={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("Delete")])},staticRenderFns:[]};var d={components:{Create:n("VU/8")(a,o,!1,function(t){n("aztD")},null,null).exports,Read:n("VU/8")(l,c,!1,function(t){n("UXsp")},null,null).exports,Update:n("VU/8")({},s,!1,function(t){n("R5rA")},null,null).exports,Delete:n("VU/8")({},u,!1,function(t){n("p+ki")},null,null).exports}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Create"),this._v(" "),e("Read"),this._v(" "),e("Update"),this._v(" "),e("Delete")],1)},staticRenderFns:[]};var p=n("VU/8")(d,v,!1,function(t){n("/TS7")},null,null).exports;i.a.config.productionTip=!1,new i.a({el:"#app",components:{App:p},template:"<App/>"})},R5rA:function(t,e){},UXsp:function(t,e){},aztD:function(t,e){},"p+ki":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.30ab99bc02890e5050fc.js.map