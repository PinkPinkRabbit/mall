(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3837fdcd"],{"1c70":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"add-goods"},[n("p",[n("label",{attrs:{for:""}},[t._v("商品名称：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),n("p",[n("label",{attrs:{for:""}},[t._v("商品价格：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],attrs:{type:"text"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}})]),n("p",[n("label",{attrs:{for:""}},[t._v("商品描述：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.desc,expression:"desc"}],attrs:{type:"text"},domProps:{value:t.desc},on:{input:function(e){e.target.composing||(t.desc=e.target.value)}}})]),n("div",{staticClass:"submit"},[n("span",{on:{click:t.submitAction}},[t._v("提交")]),n("span",{on:{click:t.cancelAction}},[t._v("清空")])])])},a=[],c=(n("96cf"),n("1da1")),r=n("8daa"),s={data:function(){return{title:"",price:"",desc:""}},methods:{submitAction:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r["b"].post(r["a"].ADD_GOODS_API,{title:t.title,price:t.price,desc:t.desc});case 2:e.sent,t.title="",t.price="",t.desc="",alert("添加成功");case 7:case"end":return e.stop()}}),e)})))()},cancelAction:function(){this.title="",this.price="",this.desc=""}}},o=s,l=(n("8770"),n("2877")),u=Object(l["a"])(o,i,a,!1,null,"6b359a1a",null);e["default"]=u.exports},8770:function(t,e,n){"use strict";var i=n("f414"),a=n.n(i);a.a},f414:function(t,e,n){}}]);
//# sourceMappingURL=chunk-3837fdcd.0763a272.js.map