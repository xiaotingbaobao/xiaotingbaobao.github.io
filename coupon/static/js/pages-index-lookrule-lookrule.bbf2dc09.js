(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-lookrule-lookrule"],{"0433":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-3ff8e098]{background-color:#f2f2f2}.list[data-v-3ff8e098]{width:100%;background-color:#fff}.list .items[data-v-3ff8e098]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?98?%;line-height:%?98?%;border-bottom:1px solid #f1f1f1;width:%?690?%;margin:0 %?30?%}.list .items .left[data-v-3ff8e098]{display:-webkit-box;display:-webkit-flex;display:flex}.list .items .left .title[data-v-3ff8e098]{font-size:%?30?%;color:#333}.list .items .left .iconfont[data-v-3ff8e098]{font-size:%?40?%;margin-left:%?10?%;color:red}.list .items .text[data-v-3ff8e098]{font-size:%?30?%;color:#999}body.?%PAGE?%[data-v-3ff8e098]{background-color:#f2f2f2}',""]),t.exports=i},"0592":function(t,i,e){"use strict";e.r(i);var n=e("427b"),s=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=s.a},"427b":function(t,i,e){"use strict";var n=e("ee27");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s,a=n(e("4700")),l={components:{tipsText:a.default},data:function(){return{customerroleone:!1,list:[{title:"sfklsfdklsdf地方艰苦拉萨对方金克拉撒旦风口浪尖"}],aashow:!1,texttitle:"",texttext:"",id:"",ruleid:""}},onLoad:function(t){console.log(t),s=this,s.id=t.id,s.ruleid=t.ruleid,s.gettmp()},methods:{gettmp:function(){s.get("activityRule/query",{id:s.ruleid},(function(t){0==t.status||s.echo(t.msg)}))},showtip:function(t){s.aashow=!0,1==t&&(s.texttitle="领券者地区限制说明",s.texttext="地区限制开关关闭时，所有地区得微信用户都可以参与活动。地区限制开关打开时，只有定位在你所选区域内的用户才能领取。比如你选择的是武汉市，那么定位在武汉市以外的用户无法领取"),3==t&&(s.texttitle="禁止赠送说明",s.texttext="开关打开时，用户领取电子券后，只能自己（领取电子券的微信号）使用；开关关闭时，允许用户领取电子券后赠送给好友。"),2==t&&(s.texttitle="核销后赠券说明",s.texttext="用户到店核销后，系统再赠送一张电子券，从未领取的发券总量中赠出，如已领完则不再赠送"),4==t&&(s.texttitle="禁止分享说明",s.texttext="开启后，分享给微信好友时，每次分享的优惠券只能一人领取。"),5==t&&(s.texttitle="客户信息收集说明",s.texttext="开启此功能后，用户在领券前需要填写商家设置的信息，才可以领券，主要用于商家收集会员信息的场景。")}}};i.default=l},"6f44":function(t,i,e){"use strict";var n=e("b9b1"),s=e.n(n);s.a},b9b1:function(t,i,e){var n=e("0433");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=e("4f06").default;s("6b54d3b0",n,!0,{sourceMap:!1,shadowMode:!1})},d086:function(t,i,e){"use strict";e.r(i);var n=e("f2e4"),s=e("0592");for(var a in s)"default"!==a&&function(t){e.d(i,t,(function(){return s[t]}))}(a);e("6f44");var l,c=e("f0c5"),o=Object(c["a"])(s["default"],n["b"],n["c"],!1,null,"3ff8e098",null,!1,n["a"],l);i["default"]=o.exports},f2e4:function(t,i,e){"use strict";var n={tipsText:e("4700").default},s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"top"},[e("v-uni-view",{staticClass:"list"},[e("v-uni-view",{staticClass:"items"},[e("v-uni-view",{staticClass:"left"},[e("v-uni-view",{staticClass:"title"},[t._v("领券者地区限制")]),e("v-uni-view",{staticClass:"iconfont iconichaxun",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showtip(1)}}})],1),e("v-uni-view",{staticClass:"text"},[t._v("已关闭")])],1),e("v-uni-view",{staticClass:"items"},[e("v-uni-view",{staticClass:"left"},[e("v-uni-view",{staticClass:"title"},[t._v("核销后赠券")]),e("v-uni-view",{staticClass:"iconfont iconichaxun",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showtip(2)}}})],1),e("v-uni-view",{staticClass:"text"},[t._v("已关闭")])],1),e("v-uni-view",{staticClass:"items"},[e("v-uni-view",{staticClass:"left"},[e("v-uni-view",{staticClass:"title"},[t._v("禁止赠送")]),e("v-uni-view",{staticClass:"iconfont iconichaxun",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showtip(3)}}})],1),e("v-uni-view",{staticClass:"text"},[t._v("已关闭")])],1),e("v-uni-view",{staticClass:"items"},[e("v-uni-view",{staticClass:"left"},[e("v-uni-view",{staticClass:"title"},[t._v("禁止分享")]),e("v-uni-view",{staticClass:"iconfont iconichaxun",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showtip(4)}}})],1),e("v-uni-view",{staticClass:"text"},[t._v("已关闭")])],1),e("v-uni-view",{staticClass:"items"},[e("v-uni-view",{staticClass:"left"},[e("v-uni-view",{staticClass:"title"},[t._v("分享更优惠")])],1),e("v-uni-view",{staticClass:"text"},[t._v("已关闭")])],1),e("v-uni-view",{staticClass:"items"},[e("v-uni-view",{staticClass:"left"},[e("v-uni-view",{staticClass:"title"},[t._v("客户信息收集")]),e("v-uni-view",{staticClass:"iconfont iconichaxun",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showtip(5)}}})],1),e("v-uni-view",{staticClass:"right"},[e("v-uni-switch",{staticStyle:{transform:"scale(0.82)"},attrs:{checked:t.customerroleone}})],1)],1)],1)],1),e("v-uni-view",{staticClass:"xkeep",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toBack.apply(void 0,arguments)}}},[t._v("返回")]),e("v-uni-view",{},[e("tips-text",{attrs:{texttitle:t.texttitle,texttext:t.texttext,title:"提示",text:"确定删除吗？"},on:{canceltiptext:function(i){arguments[0]=i=t.$handleEvent(i),t.canceltiptext.apply(void 0,arguments)}},model:{value:t.aashow,callback:function(i){t.aashow=i},expression:"aashow"}})],1)],1)},a=[];e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}))}}]);