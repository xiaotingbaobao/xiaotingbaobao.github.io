(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coupon-adddai-adddai"],{1362:function(t,e,o){"use strict";o.r(e);var n=o("ea57"),i=o("c44d");for(var a in i)"default"!==a&&function(t){o.d(e,t,(function(){return i[t]}))}(a);o("8414");var s,c=o("f0c5"),r=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"148bdc8b",null,!1,n["a"],s);e["default"]=r.exports},2426:function(t,e,o){"use strict";var n;o("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{pay_one:"100",pay_two:"10",tmp:{activityRuleId:"",conditions:"",couponId:"",maxAmount:"",merchantId:"",minAmount:"",name:"",type:"4",vouchersAmount:"",merchantName:""},oneid:"",twoid:"",threeid:"",onesettext:"可选择设置",twosettext:"可选择设置",threesettext:"可选择设置",businessname:"",onenum:"10",twonum:"14",threenum:"10"}},onLoad:function(){n=this,setTimeout((function(){n.getsetcoupon()}),500)},onShow:function(){n.init()},onHide:function(){console.log("onhide")},methods:{oneinput:function(t){console.log(t),n.$set(n,"onenum",Number(10-t.target.cursor)),n.$forceUpdate()},twoinput:function(t){console.log(t),n.$set(n,"twonum",Number(10-t.target.cursor)),n.$forceUpdate()},threeinput:function(t){console.log(t),n.$set(n,"threenum",Number(10-t.target.cursor)),n.$forceUpdate()},init:function(){console.log("init"),console.log("券id:"+wx.getStorageSync("fourCouponOneid")),n.oneid=wx.getStorageSync("fourCouponOneid"),n.tmp.couponId=wx.getStorageSync("fourCouponOneid"),n.twoid=wx.getStorageSync("fourCouponTwoid"),n.tmp.merchantId=wx.getStorageSync("fourCouponTwoid"),n.threeid=wx.getStorageSync("fourCouponThreeid"),n.tmp.activityRuleId=wx.getStorageSync("fourCouponThreeid"),n.checkid(n.oneid,n.twoid,n.threeid),n.$forceUpdate(),console.log("券id信息:"+n.oneid),console.log("商家id信息:"+n.twoid),console.log("规则id信息:"+n.threeid)},getsetcoupon:function(){console.log("获取保存过的券信息"),n.get("couponType/queryIsSave",{type:4},(function(t){console.log(t),0==t.status?t.re&&(n.tmp.activityRuleId=t.re.activityRuleId,n.tmp.conditions=t.re.conditions,n.tmp.couponId=t.re.couponId,n.tmp.maxAmount=t.re.maxAmount,n.tmp.merchantId=t.re.merchantId,n.tmp.name=t.re.name,n.tmp.type=t.re.type,n.tmp.vouchersAmount=t.re.vouchersAmount,n.tmp.merchantName=t.re.merchantName,n.oneid=n.tmp.couponId,n.twoid=n.tmp.merchantId,n.threeid=n.tmp.activityRuleId,wx.setStorageSync("fourCouponOneid",n.oneid),wx.setStorageSync("fourCouponTwoid",n.twoid),wx.setStorageSync("fourCouponThreeid",n.threeid),console.log("重新赋值oneid"+n.oneid),console.log("重新赋值twoid"+n.twoid),console.log("重新赋值threeid"+n.threeid),n.checkid(n.tmp.couponId,n.tmp.merchantId,n.tmp.activityRuleId)):n.echo(t.msg)}))},checkid:function(t,e,o){n.onesettext=t?"已设置":"可选择设置",n.twosettext=e?"已设置":"可选择设置",n.threesettext=o?"已设置":"可选择设置"},keep:function(){n.tmp.couponId||(n.tmp.couponId=0),console.log("keep"),console.log(n.tmp),n.tmp.name=n.tmp.vouchersAmount+"元代金券",""==n.tmp.name?n.echo("请输入代金券金额"):""==n.tmp.merchantName?n.echo("请输入商家名称"):(n.echo("保存中..."),n.post("couponType/create",n.tmp,(function(t){console.log(t),0==t.status?(wx.removeStorageSync("fourCouponOneid"),wx.removeStorageSync("fourCouponTwoid"),wx.removeStorageSync("fourCouponThreeid"),setTimeout((function(){n.echo("保存成功")}),500)):n.echo(t.msg)})))},creatcoupon:function(){n.tmp.couponId||(n.tmp.couponId=0),n.tmp.name=n.tmp.vouchersAmount+"元代金券",""==n.tmp.name?n.echo("请输入代金券金额"):""==n.tmp.merchantName?n.echo("请输入商家名称"):(n.echo("发布中..."),n.post("couponType/release",n.tmp,(function(t){console.log(t),0==t.status?(wx.removeStorageSync("fourCouponOneid"),wx.removeStorageSync("fourCouponTwoid"),wx.removeStorageSync("fourCouponThreeid"),n.tmp={activityRuleId:"",conditions:"",couponId:"",maxAmount:"",merchantId:"",minAmount:"",name:"",type:"4",vouchersAmount:""},n.tmp.merchantName="",uni.navigateTo({url:"/pages/my/detail/detail"})):n.echo(t.msg)})))},tosetone:function(){n.tmp.vouchersAmount?uni.navigateTo({url:"/pages/coupon/add/setcoupon/setcoupon?type=4&oneid="+n.oneid}):n.echo("请输入代金券金额")},tosettwo:function(){n.tmp.merchantName?uni.navigateTo({url:"/pages/coupon/add/setbusiness/setbusiness?type=4&businessname="+n.tmp.merchantName+"&twoid="+n.twoid}):n.echo("请填写商家名称")},tosetthree:function(){n.tmp.vouchersAmount?n.tmp.merchantName?uni.navigateTo({url:"/pages/coupon/add/setrules/setrules?type=4&threeid="+n.threeid}):n.echo("请填写商家名称"):n.echo("请输入代金券金额")},mpGetUserInfo:function(t){n.creatcoupon()}}};e.default=i},8414:function(t,e,o){"use strict";var n=o("fa17"),i=o.n(n);i.a},c44d:function(t,e,o){"use strict";o.r(e);var n=o("2426"),i=o.n(n);for(var a in n)"default"!==a&&function(t){o.d(e,t,(function(){return n[t]}))}(a);e["default"]=i.a},ea57:function(t,e,o){"use strict";var n,i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",[o("v-uni-view",{staticClass:"xpadding f2f2f2"}),o("v-uni-view",{staticClass:"top"},[o("v-uni-view",{staticClass:"items"},[o("v-uni-view",{staticClass:"title",staticStyle:{width:""}},[t._v(t._s(t.tmp.vouchersAmount)),t.tmp.vouchersAmount?t._e():o("v-uni-text",{staticStyle:{color:"#333"}},[t._v("**")]),t._v("元代金券"),o("v-uni-text",[t._v("*")])],1),o("v-uni-view",{staticClass:"right"},[o("v-uni-input",{staticClass:"right_inputtip",attrs:{type:"number",maxlength:"5",placeholder:"输入代金金额","placeholder-style":"font-size:28rpx;color:#999;"},model:{value:t.tmp.vouchersAmount,callback:function(e){t.$set(t.tmp,"vouchersAmount",e)},expression:"tmp.vouchersAmount"}}),o("v-uni-view",{staticClass:"rughtnum"},[t._v("10")])],1)],1),o("v-uni-view",{staticClass:"items"},[o("v-uni-view",{staticClass:"title"},[t._v("使用条件")]),o("v-uni-view",{staticClass:"right"},[o("v-uni-input",{staticClass:"right_inputtip",attrs:{type:"text",maxlength:"14",placeholder:"仅限购买某种品类","placeholder-style":"font-size:28rpx;color:#999;"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.twoinput.apply(void 0,arguments)}},model:{value:t.tmp.conditions,callback:function(e){t.$set(t.tmp,"conditions",e)},expression:"tmp.conditions"}}),o("v-uni-view",{staticClass:"rughtnum"},[t._v(t._s(t.twonum))])],1)],1),o("v-uni-view",{staticClass:"items",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tosetone.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"title"},[t._v("券信息")]),o("v-uni-view",{staticClass:"right"},[o("v-uni-view",{staticClass:"selecttext"},[t._v(t._s(t.onesettext))]),o("v-uni-view",{staticClass:"iconfont iconjiantou2"})],1)],1)],1),o("v-uni-view",{staticClass:"xpadding f2f2f2"}),o("v-uni-view",{staticClass:"top"},[o("v-uni-view",{staticClass:"items"},[o("v-uni-view",{staticClass:"title"},[t._v("商家名称"),o("v-uni-text",[t._v("*")])],1),o("v-uni-view",{staticClass:"right"},[o("v-uni-input",{staticClass:"right_inputtip",attrs:{type:"text",maxlength:"10",placeholder:"不超过10个字","placeholder-style":"font-size:28rpx;color:#999;"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.threeinput.apply(void 0,arguments)}},model:{value:t.tmp.merchantName,callback:function(e){t.$set(t.tmp,"merchantName",e)},expression:"tmp.merchantName"}}),o("v-uni-view",{staticClass:"rughtnum"},[t._v(t._s(t.threenum))])],1)],1),o("v-uni-view",{staticClass:"items",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tosettwo.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"title"},[t._v("商家详情信息")]),o("v-uni-view",{staticClass:"right"},[o("v-uni-view",{staticClass:"selecttext"},[t._v(t._s(t.twosettext))]),o("v-uni-view",{staticClass:"iconfont iconjiantou2"})],1)],1),o("v-uni-view",{staticClass:"items",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tosetthree.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"title"},[t._v("活动规则")]),o("v-uni-view",{staticClass:"right"},[o("v-uni-view",{staticClass:"selecttext"},[t._v(t._s(t.threesettext))]),o("v-uni-view",{staticClass:"iconfont iconjiantou2"})],1)],1)],1),o("v-uni-view",{staticClass:"xpadding f2f2f2"}),o("v-uni-view",{staticClass:"foo"},[o("v-uni-view",{staticClass:"title"},[t._v("使用须知")]),o("v-uni-view",{staticClass:"text"},[o("v-uni-view",{staticClass:"textone textonetop"},[t._v("1、本券不与其他活动同时使用。")]),o("v-uni-view",{staticClass:"textone"},[t._v("2、本券仅限本人使用。")]),o("v-uni-view",{staticClass:"textone"},[t._v("3、本券不兑现，不找零，不与其他优惠同时用。")]),o("v-uni-view",{staticClass:"textone textonebottom"},[t._v("4、此活动最终解释权归本店所有。")])],1)],1),o("v-uni-view",{staticClass:"foobuttom"},[o("v-uni-view",{staticClass:"keep",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.keep.apply(void 0,arguments)}}},[t._v("保存")]),o("v-uni-view",{staticClass:"send"},[o("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.creatcoupon.apply(void 0,arguments)}}},[t._v("发送")])],1)],1)],1)},a=[];o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return n}))},f78d:function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-148bdc8b]{background-color:#fff}.top[data-v-148bdc8b]{width:100%;background-color:#fff}.top .items[data-v-148bdc8b]{width:calc(100% - %?60?%);margin:0 %?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?98?%;line-height:%?98?%;border-bottom:1px solid #f1f1f1}.top .items .title[data-v-148bdc8b]{font-size:%?30?%;color:#333}.top .items .title uni-text[data-v-148bdc8b]{font-size:%?30?%;color:red;margin-left:%?10?%}.top .items .right[data-v-148bdc8b]{display:-webkit-box;display:-webkit-flex;display:flex}.top .items .right .text[data-v-148bdc8b]{font-size:%?30?%;color:#333}.top .items .right .right_input[data-v-148bdc8b]{margin:%?24?% %?10?% 0 %?10?%;width:%?120?%;height:%?50?%;margin-top:%?26?%;font-size:%?30?%;color:#333;text-align:center;line-height:%?50?%;background-color:#f9f9f9}.top .items .right .right_inputtip[data-v-148bdc8b]{width:%?420?%;height:%?98?%;line-height:%?98?%;text-align:right;margin-right:%?10?%;font-size:%?30?%;color:#333}.top .items .right .rughtnum[data-v-148bdc8b]{color:red;font-size:%?24?%}.top .items .right .selecttext[data-v-148bdc8b]{font-size:%?30?%;color:#333;margin-right:%?10?%}.top .items .right .iconfont[data-v-148bdc8b]{color:#999}.foo[data-v-148bdc8b]{width:100%}.foo .title[data-v-148bdc8b]{margin-left:%?30?%;height:%?90?%;line-height:%?90?%;font-size:%?30?%;color:#333}.foo .text[data-v-148bdc8b]{width:%?690?%;margin:0 %?30?%;background-color:#f9f9f9}.foo .text .textone[data-v-148bdc8b]{margin:0 %?30?%;font-size:%?28?%;height:%?40?%;line-height:%?40?%;color:#333}.foo .text .textonetop[data-v-148bdc8b]{padding-top:%?30?%}.foo .text .textonebottom[data-v-148bdc8b]{padding-bottom:%?30?%}.foobuttom[data-v-148bdc8b]{margin-top:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;width:100%}.foobuttom .keep[data-v-148bdc8b]{width:%?296?%;height:%?86?%;margin-left:%?60?%;border-radius:%?10?%;color:#f35f6d;border:1px solid #f35f6d;line-height:%?90?%;text-align:center;font-size:%?32?%}.foobuttom .send[data-v-148bdc8b]{margin-left:%?30?%;width:%?300?%;height:%?90?%;border-radius:%?10?%;color:#fff;background-color:#f35f6d;line-height:%?90?%;text-align:center;font-size:%?32?%}.foobuttom .send uni-button[data-v-148bdc8b]{background-color:#f35f6d}body.?%PAGE?%[data-v-148bdc8b]{background-color:#fff}',""]),t.exports=e},fa17:function(t,e,o){var n=o("f78d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("4f06").default;i("8022cc6e",n,!0,{sourceMap:!1,shadowMode:!1})}}]);