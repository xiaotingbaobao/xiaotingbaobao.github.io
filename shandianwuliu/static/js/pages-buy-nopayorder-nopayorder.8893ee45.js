(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-buy-nopayorder-nopayorder"],{"14cd":function(e,t,o){var r=o("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-4862f10c]{background-color:#f1f1f1}.order_list[data-v-4862f10c]{width:%?720?%;height:%?270?%;margin:0 %?15?% %?20?% %?15?%;background-color:#fff;border-radius:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;position:relative}.order_list .order_left[data-v-4862f10c]{width:100%;margin-left:%?40?%;margin-top:%?30?%}.order_list .order_left .ordertop[data-v-4862f10c]{width:100%;height:%?40?%;font-size:%?24?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.order_list .order_left .ordertop .lefttitle[data-v-4862f10c]{font-size:%?24?%;color:#999}.order_list .order_left .ordertop .right_num[data-v-4862f10c]{color:#333}.order_list .order_left .orderfoo[data-v-4862f10c]{width:100%;height:%?110?%;margin-top:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex}.order_list .order_left .orderfoo .orderf_left[data-v-4862f10c]{width:%?200?%;height:%?110?%}.order_list .order_left .orderfoo .orderf_left .orderf_lefttop[data-v-4862f10c]{font-size:%?32?%;color:#333}.order_list .order_left .orderfoo .orderf_left .orderf_leftfoo[data-v-4862f10c]{height:%?60?%;line-height:%?60?%;font-size:%?28?%;color:#999;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.order_list .order_left .orderfoo .orderf_cen[data-v-4862f10c]{height:%?140?%;width:%?230?%;overflow:hidden;margin-top:%?10?%}.order_list .order_left .orderfoo .orderf_cen .orderline[data-v-4862f10c]{width:%?170?%;height:%?20?%;margin-left:%?30?%;overflow:hidden}.order_list .order_left .orderfoo .orderf_cen .orderline uni-image[data-v-4862f10c]{display:block;width:100%;height:100%}.order_list .order_left .orderfoo .orderf_cen .orderstatus[data-v-4862f10c]{margin-top:%?20?%;font-size:%?28?%;color:#b9303e;text-align:center}.order_list .order_left .orderfoo .orderf_right[data-v-4862f10c]{width:%?200?%;height:%?110?%}.order_list .order_left .orderfoo .orderf_right .orderf_lefttop[data-v-4862f10c]{font-size:%?32?%;color:#333;text-align:center}.order_list .order_left .orderfoo .orderf_right .orderf_leftfoo[data-v-4862f10c]{height:%?60?%;line-height:%?60?%;text-align:center;font-size:%?28?%;color:#999;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.order_list .uploadimg_lidelete[data-v-4862f10c]{position:absolute;top:%?10?%;right:%?10?%;width:%?40?%;height:%?40?%;border-radius:50%;overflow:hidden;background-color:#fff}.order_list .uploadimg_lidelete uni-image[data-v-4862f10c]{display:block;width:100%;height:100%}.order_list .uploadimg_lidelete .iconfont[data-v-4862f10c]{color:#ef5350;font-size:%?40?%}.order_list .order_right[data-v-4862f10c]{width:%?150?%;height:%?280?%;border-left:1px solid #f1f1f1}.order_list .order_right .orderbutton[data-v-4862f10c]{width:%?100?%;height:%?48?%;border-radius:%?10?%;margin-top:%?116?%;margin-left:%?25?%;color:#fff;font-size:%?26?%;background-color:#e51a3d;line-height:%?48?%;text-align:center}body.?%PAGE?%[data-v-4862f10c]{background-color:#f1f1f1}',""]),e.exports=t},"23fa":function(e,t,o){"use strict";var r,i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-uni-view",[o("v-uni-view",{staticClass:"main"},[o("v-uni-view",{staticClass:"xpadding"}),0==e.getlist.length?o("v-uni-view",{staticClass:"xlistmargin"},[e._v("暂无未付款订单！")]):e._e(),e._l(e.getlist,(function(t,r){return 0!==e.getlist.length?o("v-uni-view",{key:r},[o("v-uni-view",{staticClass:"order_list",on:{click:function(o){arguments[0]=o=e.$handleEvent(o),e.tolook(t.order_id)}}},[o("v-uni-view",{staticClass:"order_left"},[o("v-uni-view",{staticClass:"ordertop"},[o("v-uni-view",{staticClass:"lefttitle"},[e._v("运单号"),o("v-uni-view",{staticClass:"w"})],1),o("v-uni-view",{staticClass:"rightnum"},[e._v(e._s(t.order_sn))])],1),o("v-uni-view",{staticClass:"ordertop"},[o("v-uni-view",{staticClass:"lefttitle"},[e._v("支付时间：")]),o("v-uni-view",{staticClass:"rightnum"},[e._v(e._s(t.pay_time))])],1),o("v-uni-view",{staticClass:"orderfoo"},[o("v-uni-view",{staticClass:"orderf_left"},[o("v-uni-view",{staticClass:"orderf_lefttop"},[e._v(e._s(t.province))]),o("v-uni-view",{staticClass:"orderf_leftfoo"},[e._v(e._s(t.name))])],1),o("v-uni-view",{staticClass:"orderf_cen"},[o("v-uni-view",{staticClass:"orderline"},[o("v-uni-image",{attrs:{src:"/static/img/hongxian.png"}})],1),o("v-uni-view",{staticClass:"orderstatus"},[e._v("待付款")])],1),o("v-uni-view",{staticClass:"orderf_right"},[o("v-uni-view",{staticClass:"orderf_lefttop"},[e._v(e._s(t.rec_province))]),o("v-uni-view",{staticClass:"orderf_leftfoo"},[e._v(e._s(t.rec_name))])],1)],1)],1),o("v-uni-view",{staticClass:"uploadimg_lidelete",on:{click:function(o){o.stopPropagation(),arguments[0]=o=e.$handleEvent(o),e.deleteclick(t.order_id)}}},[o("v-uni-image",{attrs:{src:"/static/img/delete.png"}})],1)],1)],1):e._e()})),e.showLoadMoreone?o("v-uni-view",{staticClass:"loading-text"},[e._v(e._s(e.loadMoreTextone))]):e._e()],2)],1)},a=[];o.d(t,"b",(function(){return i})),o.d(t,"c",(function(){return a})),o.d(t,"a",(function(){return r}))},"4be2":function(e,t,o){var r=o("14cd");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=o("4f06").default;i("5da21803",r,!0,{sourceMap:!1,shadowMode:!1})},"83a2":function(e,t,o){"use strict";o.r(t);var r=o("9293"),i=o.n(r);for(var a in r)"default"!==a&&function(e){o.d(t,e,(function(){return r[e]}))}(a);t["default"]=i.a},9293:function(e,t,o){"use strict";var r;o("99af"),o("ac1f"),o("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{postData:{uid:"",time:"",sign:"",keyword:"",q_type:"2",page:"1",order_status:"0",pay_status:"0"},deletedata:{uid:"",time:"",sign:"",order_id:""},getlist:[],loadMoreTextone:"加载中...",showLoadMoreone:!1,loadMoreTexttwo:"加载中...",showLoadMoretwo:!1,pageone:1}},onLoad:function(){r=this,uni.getStorage({key:"userinfo",success:function(e){r.postData.uid=e.data.uid,r.postData.time=Date.parse(new Date),r.postData.sign="md5("+r.postData.uid+"202001016090901ka7g6dc0s309"+r.postData.time+")",r.deletedata.uid=e.data.uid,r.deletedata.time=Date.parse(new Date),r.deletedata.sign="md5("+r.deletedata.uid+"202001016090901ka7g6dc0s309"+r.deletedata.time+")",r.getListFunc()},fail:function(){console.log("wwwwwwwwwww")}})},onReachBottom:function(){console.log("onReachBottom"),r.onbottomone()},onPullDownRefresh:function(){r.pageone=1,r.pagetwo=1,r.issearchstatus=!1,r.buttononeblock=!1,r.showLoadMoreone=!1,r.showLoadMoretwo=!1,setTimeout((function(){r.getListFunc()}),200)},methods:{getListFunc:function(){r.post("/order/list",r.postData,(function(e){if(200===e.Code){var t=e.Result;console.log(r.getlist),console.log(r.tmplist),r.each(t,(function(e,t){"0"==t.order_status?(t.isblock=!0,console.log("yes")):(t.isblock=!1,console.log("yifukuan"))})),console.log(t),r.$set(r,"getlist",t)}else{var o=e.Msg.split("(",2);r.echo(o[0])}}))},onbottomone:function(){if(console.log("aabottom"),console.log(r.buttononeblock),console.log(r.showLoadMoreone),!1===r.showLoadMoreone){if(1==r.showLoadMoreone)return;r.pageone=r.pageone+1,r.$set(r,"loadMoreTextone","正在加载..."),r.post("/order/list",{uid:r.postData.uid,time:Date.parse(new Date),sign:"md5("+r.postData.uid+"202001016090901ka7g6dc0s309"+r.postData.time+")",keyword:"",q_type:"2",pay_status:"0",order_status:"0",page:r.pageone},(function(e){if(200===e.Code){console.log(e);var t=e.Result.Result;r.getlist.length>0?e.Result.Result.length>0?(r.getlist=r.getlist.concat(t),r.each(r.getlist,(function(e,t){"0"==t.order_status?(t.isblock=!0,console.log("yes")):(t.isblock=!1,console.log("yifukuan"))}))):(r.$set(r,"showLoadMoreone",!0),r.$set(r,"loadMoreTextone","已加载全部！")):(r.getlist=t,r.each(r.getlist,(function(e,t){"0"==t.order_status?(t.isblock=!0,console.log("yes")):(t.isblock=!1,console.log("yifukuan"))}))),console.log(r.getlist)}else{var o=e.Msg.split("(",2);r.echo(o[0])}}))}else r.$set(r,"loadMoreTextone","已加载全部！"),r.$set(r,"showLoadMoreone",!0)},tolook:function(e){uni.navigateTo({url:"/pages/buy/pay/pay?orderid="+e})},deleteclick:function(e){r.deletedata.order_id=e,r.post("/order/delete",r.deletedata,(function(e){if(200===e.Code)r.success("删除成功"),r.getListFunc();else{var t=e.Msg.split("(",2);r.echo(t[0])}}))}}};t.default=i},ca84a:function(e,t,o){"use strict";o.r(t);var r=o("23fa"),i=o("83a2");for(var a in i)"default"!==a&&function(e){o.d(t,e,(function(){return i[e]}))}(a);o("d746");var s,n=o("f0c5"),d=Object(n["a"])(i["default"],r["b"],r["c"],!1,null,"4862f10c",null,!1,r["a"],s);t["default"]=d.exports},d746:function(e,t,o){"use strict";var r=o("4be2"),i=o.n(r);i.a}}]);