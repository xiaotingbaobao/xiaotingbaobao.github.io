(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-management-supplier-supplier"],{"1e0a":function(t,e,a){"use strict";var n=a("2606"),i=a.n(n);i.a},"1f53":function(t,e,a){"use strict";a.r(e);var n=a("1f54"),i=a("deb1");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("1e0a");var r,c=a("f0c5"),l=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"62f6ceca",null,!1,n["a"],r);e["default"]=l.exports},"1f54":function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"topmargin"},[a("v-uni-view",{staticClass:"status",staticStyle:{"{background":"#fff}"}}),a("v-uni-view",{staticClass:"nav-bar"},[a("v-uni-view",{staticClass:"back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.backfee.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"iconfont iconleft"}),a("v-uni-view",{staticClass:"text"},[t._v("返回")])],1),t.ismanager?a("v-uni-view",{staticClass:"avatar",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addstaff()}}},[a("v-uni-view",{staticClass:"iconfont icontianjia1"})],1):t._e(),a("v-uni-text",{staticClass:"title"},[t._v("供应商列表")])],1),a("v-uni-view",{staticClass:"place",staticStyle:{"{height":"44upx"}})],1),a("v-uni-view",{staticClass:"xpadding"}),0==t.tmplist.length?a("v-uni-view",{staticClass:"xlistmargin"},[t._v("暂无供应商信息哦~")]):t._e(),t._l(t.tmplist,(function(e,n){return 0!==t.tmplist.length?a("v-uni-view",{key:n,staticClass:"content"},[a("v-uni-view",{staticClass:"content_list",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.touserdetail(e.supplier_id)}}},[a("v-uni-view",{staticClass:"content_top"},[a("v-uni-view",{staticClass:"content_img"},[a("v-uni-image",{attrs:{"lazy-load":!0,src:e.avatar,mode:"aspectFill"}})],1),a("v-uni-view",{staticClass:"content_top_text"},[a("v-uni-view",{staticClass:"con_name"},[t._v(t._s(e.name))])],1),a("v-uni-view",{staticClass:"phone",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.phoneclick(e.mobile)}}},[a("v-uni-view",{staticClass:"iconfont iconllcouponphone"})],1)],1),a("v-uni-view",{staticClass:"content_footer"},[t._l(e.rolelist,(function(e,n){return[a("v-uni-view",{key:n+"_0",staticClass:"content_footer_tag"},[a("v-uni-view",{staticClass:"tags"},[t._v(t._s(e))])],1)]}))],2),a("v-uni-view",{staticClass:"xpadding"})],1)],1):t._e()})),a("graceFullLoading",{attrs:{graceFullLoading:t.graceFullLoading,logoUrl:"/static/img/logoone.gif"}})],2)},o=[];a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}))},2606:function(t,e,a){var n=a("36af");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("4fcb8c0d",n,!0,{sourceMap:!1,shadowMode:!1})},"36af":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-62f6ceca]{background-color:#f5f5f5}.topmargin .status[data-v-62f6ceca]{width:100%;height:0;position:fixed;background-image:-webkit-linear-gradient(left,#2466ad,#2b7ed1);background-image:linear-gradient(90deg,#2466ad,#2b7ed1);z-index:10;top:0}.topmargin .nav-bar[data-v-62f6ceca]{width:100%;height:%?88?%;line-height:%?88?%;background-image:-webkit-linear-gradient(left,#2466ad,#2b7ed1);background-image:linear-gradient(90deg,#2466ad,#2b7ed1);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;overflow:hidden;top:0;z-index:10\r\n  /* .back {\r\n\t\t\tmargin: 0 2px;\r\n\t\t\twidth: 27px;\r\n\t\t\theight: 30px;\r\n\t\t\tflex-shrink: 0;\r\n\t\t}\r\n\t\t.middle {\r\n\t\t\tcolor: white;\r\n\t\t\twidth: 80%;\r\n\t\t\theight: 44px;\r\n\t\t\tline-height: 44px;\r\n\t\t\tpadding: 0 10%;\r\n\t\t\tfont-size: 16px;\r\n\t\t\ttext-align: center;\r\n\t\t}\r\n\t\t.icon-btn {\r\n\t\t\tmargin: 0 2px;\r\n\t\t\twidth: 27px;\r\n\t\t\theight: 30px;\r\n\t\t\tflex-shrink: 0;\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: flex-end;\r\n\t\t\t.iconfont {\r\n\t\t\t\tcolor: white;\r\n\t\t\t\twidth: 27px;\r\n\t\t\t\theight: 27px;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tfont-size: 21px;\r\n\t\t\t}\r\n\t\t} */}.topmargin .nav-bar .topimg[data-v-62f6ceca]{width:%?45?%;height:%?45?%;margin-left:%?33?%;overflow:hidden}.topmargin .nav-bar .topimg uni-image[data-v-62f6ceca]{width:100%;height:100%}.topmargin .nav-bar .back[data-v-62f6ceca]{height:%?88?%;position:absolute;left:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.topmargin .nav-bar .back .iconfont[data-v-62f6ceca]{font-size:%?40?%;color:#fff;line-height:%?90?%}.topmargin .nav-bar .back .text[data-v-62f6ceca]{font-size:%?32?%;color:#fff}.topmargin .nav-bar .avatar[data-v-62f6ceca]{height:%?45?%;line-height:%?45?%;border-radius:50%;position:absolute;right:%?30?%;top:%?22?%}.topmargin .nav-bar .avatar .avatar_text[data-v-62f6ceca]{font-size:%?32?%;color:#fff}.topmargin .nav-bar .avatar .tipnum[data-v-62f6ceca]{position:absolute;right:%?-2?%;top:%?-2?%;font-size:%?22?%;color:#fff;width:%?22?%;height:%?22?%;line-height:%?22?%;border-radius:50%;text-align:center;background-color:#ef261e}.topmargin .nav-bar .avatar .cloak[data-v-62f6ceca]{display:block}.topmargin .nav-bar .avatar uni-image[data-v-62f6ceca]{display:block;width:%?45?%;height:%?45?%}.topmargin .nav-bar .avatar .iconfont[data-v-62f6ceca]{font-size:%?42?%;color:#fff}.topmargin .nav-bar .title[data-v-62f6ceca]{width:100%;height:%?88?%;line-height:%?88?%;font-size:%?38?%;color:#fff;text-align:center;background-image:-webkit-linear-gradient(left,#2466ad,#2b7ed1);background-image:linear-gradient(90deg,#2466ad,#2b7ed1)}.topmargin .nav-bar .stt[data-v-62f6ceca]{line-height:%?110?%;font-size:%?30?%;color:#fff;position:absolute;right:%?30?%;top:0}.topmargin .place[data-v-62f6ceca]{height:%?88?%}.xpadding[data-v-62f6ceca]{width:100%;height:%?20?%;background-color:#f5f5f5}.content[data-v-62f6ceca]{width:100%}.content .content_list[data-v-62f6ceca]{width:100%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.content .content_list .content_top[data-v-62f6ceca]{width:100%;height:%?88?%;margin-top:%?36?%;display:-webkit-box;display:-webkit-flex;display:flex}.content .content_list .content_top .content_img[data-v-62f6ceca]{width:%?88?%;height:%?88?%;margin-left:%?30?%;border-radius:50%}.content .content_list .content_top .content_img uni-image[data-v-62f6ceca]{width:100%;height:100%;border-radius:50%}.content .content_list .content_top .content_top_text[data-v-62f6ceca]{height:%?88?%;line-height:%?88?%;display:-webkit-box;display:-webkit-flex;display:flex}.content .content_list .content_top .content_top_text .con_name[data-v-62f6ceca]{text-align:center;font-size:%?36?%;margin-right:%?14?%;margin-left:%?21?%}.content .content_list .content_top .content_top_text .line[data-v-62f6ceca]{width:%?2?%;height:%?30?%;background-color:#333;margin-top:%?32?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.content .content_list .content_top .content_top_text .con_alias[data-v-62f6ceca]{color:#666;font-size:%?24?%;margin-left:%?15?%}.content .content_list .content_top .phone[data-v-62f6ceca]{margin-left:auto;margin-right:%?34?%;margin-top:%?10?%;width:%?66?%;height:%?66?%;border-radius:50%;background-color:#2468b1;color:#fff}.content .content_list .content_top .phone .iconfont[data-v-62f6ceca]{text-align:center;height:%?66?%;line-height:%?66?%;font-size:%?38?%}.content .content_list .content_footer[data-v-62f6ceca]{margin:%?10?% %?30?% %?10?% %?130?%;width:calc(100% - %?160?%);padding-bottom:%?16?%}.content .content_list .content_footer .content_footer_tag[data-v-62f6ceca]{display:inline-block;width:%?136?%;height:%?56?%;line-height:%?56?%;margin:0 %?10?% %?10?% 0}.content .content_list .content_footer .content_footer_tag .tags[data-v-62f6ceca]{text-align:center;border:1px solid #2468b1;border-radius:%?10?%;color:#2468b1;font-size:%?28?%}.fixed_add[data-v-62f6ceca]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:%?88?%;background:-webkit-linear-gradient(left,#2466ad,#2b7ed1);background:linear-gradient(90deg,#2466ad,#2b7ed1);position:fixed;bottom:0;width:100%}.fixed_add .iconfont[data-v-62f6ceca]{font-size:%?36?%;color:#fff;margin-right:%?12?%}.fixed_add .text[data-v-62f6ceca]{font-size:%?36?%;color:#fff}.grace-full-loading[data-v-62f6ceca]{width:100%;height:calc(100% - %?88?%);background:#fff;position:fixed;z-index:99;left:0;top:%?88?%}body.?%PAGE?%[data-v-62f6ceca]{background-color:#f5f5f5}',""]),t.exports=e},"4f16":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"@-webkit-keyframes grace-fade-data-v-38501214{0%{opacity:.9}25%{opacity:1}50%{opacity:.9}75%{opacity:1}100%{opacity:1}}@keyframes grace-fade-data-v-38501214{0%{opacity:.9}25%{opacity:1}50%{opacity:.9}75%{opacity:1}100%{opacity:1}}.grace-full-loading .content[data-v-38501214]{width:%?300?%;height:auto;position:absolute;z-index:100;left:50%;top:40%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-animation:grace-fade-data-v-38501214 3.5s infinite linear;animation:grace-fade-data-v-38501214 3.5s infinite linear;opacity:.9;padding:%?10?%}.grace-full-loading .image[data-v-38501214]{width:%?150?%;height:%?150?%;margin:0 auto}.grace-full-loading .image uni-image[data-v-38501214]{width:%?150?%;height:%?150?%;border-radius:50%}.grace-full-loading .text[data-v-38501214]{line-height:1.5em;font-size:%?22?%;margin-top:6px;text-align:center}\r\n\r\n/* .grace-full-loading{width:100%; height:100%; background:#FFFFFF; z-index:99;}\r\n.grace-full-loading .content{width:300rpx; height:auto;  z-index:100;  transform:translate(-50%, -50%); animation:grace-fade 3500ms infinite linear; opacity:0.6; padding:10rpx;}\r\n.grace-full-loading .image{width:150rpx; height:150rpx; margin:0 auto;}\r\n.grace-full-loading .image image{width:150rpx; height:150rpx; border-radius:150rpx;}\r\n.grace-full-loading .text{line-height:1.5em; font-size:22upx; margin-top:6px; font-style:italic; text-align:center;} */",""]),t.exports=e},"5be3":function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.graceFullLoading?a("v-uni-view",{staticClass:"grace-full-loading",on:{touchmove:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopFun.apply(void 0,arguments)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopFun.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"image"},[a("v-uni-image",{attrs:{src:t.logoUrl,mode:"aspectFill"}})],1),a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.text))])],1)],1):t._e()},o=[];a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}))},"6ab6":function(t,e,a){"use strict";a.r(e);var n=a("99ab"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"99ab":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"graceFullLoading",props:{graceFullLoading:{type:Boolean,default:!1},logoUrl:{type:String,default:""},text:{type:String,default:"Loading ..."}},methods:{stopFun:function(){return!1}}};e.default=n},"9fee":function(t,e,a){"use strict";a.r(e);var n=a("5be3"),i=a("6ab6");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("c258");var r,c=a("f0c5"),l=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"38501214",null,!1,n["a"],r);e["default"]=l.exports},c131:function(t,e,a){"use strict";var n=a("ee27");a("99af"),a("c975"),a("ac1f"),a("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,o=n(a("9c7e")),r=n(a("9fee")),c={components:{pageHeadBack:o.default,graceFullLoading:r.default},data:function(){return{graceFullLoading:!0,chanelList:[{name:"aa"},{name:"aa"},{name:"aa"},{name:"aa"},{name:"aa"},{name:"aa"}],tmplist:[],userinfo:{},iscompany:"",ismanager:!1}},onShow:function(){i.getuser((function(t){i.userinfo=t.data,i.iscompany=i.userinfo.userinfo.role.split("|")[1],i.checkPower(i.userinfo,"api/channel/add")?i.$set(i,"ismanager",!0):i.$set(i,"ismanager",!1),i.gettmpList()}))},onLoad:function(){i=this},methods:{aaaaa:function(){console.log("aaaaaaa"),uni.navigateTo({url:"/pages/test/suppliertest/suppliertest"})},gettmpList:function(){i.post("api/supplier/index",{company_id:i.iscompany},(function(t){if(1===t.code)i.tmplist=t.data,console.log(i.tmplist),i.each(i.tmplist,(function(t,e){e.logo?i.$set(e,"avatar",e.logo):i.$set(e,"avatar","/static/img/gyslogo.png"),e.rolelist=[],e.order_status&&(e.order_status.indexOf("beforePay")>-1&&(e.rolelist=e.rolelist.concat("跟进客户")),e.order_status.indexOf("beforeContract")>-1&&(e.rolelist=e.rolelist.concat("合同客户")),e.order_status.indexOf("lost")>-1&&(e.rolelist=e.rolelist.concat("流失客户")))})),i.graceFullLoading=!1;else{var e=t.msg.split("(",2);i.echo(e[0])}}))},addstaff:function(){i.checkPower(i.userinfo,"api/channel/add")&&uni.navigateTo({url:"/pages/management/supplier/addsuppliertwo/addsuppliertwo"})},backfee:function(){uni.navigateBack({})},touserdetail:function(t){uni.navigateTo({url:"/pages/management/supplier/supplierdetail/supplierdetail?id="+t})},toAddflow:function(){i.checkPower(i.userinfo,"api/supplier/add")&&uni.navigateTo({url:"/pages/management/supplier/addsupplier/addsupplier"})},tochangechannel:function(t){i.checkPower(i.userinfo,"api/supplier/update")&&uni.setStorage({key:"tmp_changesupplier",data:t,success:function(){uni.navigateTo({url:"/pages/management/supplier/changesupplier/changesupplier"})}})}}};e.default=c},c258:function(t,e,a){"use strict";var n=a("eed4"),i=a.n(n);i.a},deb1:function(t,e,a){"use strict";a.r(e);var n=a("c131"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},eed4:function(t,e,a){var n=a("4f16");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("4ae281b9",n,!0,{sourceMap:!1,shadowMode:!1})}}]);