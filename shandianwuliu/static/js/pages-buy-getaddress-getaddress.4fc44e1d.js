(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-buy-getaddress-getaddress"],{"114e":function(t,a,n){"use strict";var e,i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",[n("v-uni-view",{staticClass:"xpadding"}),n("v-uni-view",{staticClass:"main"},[n("v-uni-view",{staticClass:"main_top"},[n("v-uni-view",{staticClass:"main_left"},[t._v("收")]),n("v-uni-view",{staticClass:"main_right"},[t._v("收件人")])],1),n("v-uni-view",{staticClass:"main_content"},[n("v-uni-view",{staticClass:"main_input"},[n("v-uni-input",{staticClass:"uni_input",attrs:{maxlength:"6",placeholder:"请输入收件人姓名","placeholder-style":"width: 450upx; color:#666;font-size:30upx;"},model:{value:t.postData["name"],callback:function(a){t.$set(t.postData,"name",a)},expression:"postData['name']"}})],1),n("v-uni-view",{staticClass:"main_input"},[n("v-uni-input",{staticClass:"uni_input",attrs:{type:"number",maxlength:"11",placeholder:"请输入收件人电话","placeholder-style":"width: 450upx; color:#666;font-size:30upx;"},model:{value:t.postData["mobile"],callback:function(a){t.$set(t.postData,"mobile",a)},expression:"postData['mobile']"}})],1),n("v-uni-view",{staticClass:"main_picker"},[n("v-uni-view",{staticClass:"pickers"},[n("v-uni-picker",{attrs:{value:t.channel,range:t.channellist},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.bindchannelChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.channeltext))])],1)],1),n("v-uni-view",{staticClass:"iconfont iconjiantou2-copy-copy-copy"})],1),n("v-uni-view",{staticClass:"main_text"},[n("v-uni-textarea",{staticClass:"uni_input",attrs:{"auto-height":!0,placeholder:"请输入详细地址(精确到门牌号)"},model:{value:t.postData["address"],callback:function(a){t.$set(t.postData,"address",a)},expression:"postData['address']"}})],1),n("v-uni-view",{staticClass:"xpadding"})],1)],1),n("v-uni-view",{staticClass:"footer"},[n("v-uni-view",{staticClass:"send",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.send.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)},o=[];n.d(a,"b",(function(){return i})),n.d(a,"c",(function(){return o})),n.d(a,"a",(function(){return e}))},"188d":function(t,a,n){"use strict";var e=n("32dc"),i=n.n(e);i.a},"234a":function(t,a,n){"use strict";var e;n("ac1f"),n("1276"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{postData:{uid:"5",time:"",sign:"",address_type:"1",province:"",address:"",mobile:"",name:"",country:"广东",city:"白云"},channel:0,channelid:"",channeltext:"请选择城市/区域",channellist:["广州","daka"]}},onLoad:function(){e=this,uni.getStorage({key:"userinfo",success:function(t){console.log(t.data.uid),e.postData.uid=t.data.uid,e.postData.time=Date.parse(new Date),e.postData.sign="md5("+e.postData.uid+"202001016090901ka7g6dc0s309"+e.postData.time+")"},fail:function(){console.log("wwwwwwwwwww")}}),uni.getStorage({key:"getaddress",success:function(t){console.log(t.data),e.postData.country=t.data.country,e.postData.province=t.data.province,e.postData.address=t.data.address,e.postData.mobile=t.data.mobile,e.postData.name=t.data.name,""!==e.postData.province&&e.each(e.channellist,(function(t,a){a==e.postData.province&&(e.channel=t,e.channeltext=a)}))},fail:function(){console.log("wwwwwwwwwww")}})},methods:{bindchannelChange:function(t){console.log(t.target.value);var a=t.target.value;e.$set(e,"channeltext",e.channellist[a])},send:function(){e.$set(e.postData,"province",e.channeltext),""==e.postData.name?e.echo("请输入收件人姓名"):""==e.postData.mobile?e.echo("请输入收件人电话"):""==e.postData.province?e.echo("请选择城市/区域"):""==e.postData.address?e.echo("请输入详细地址"):e.post("/address/add",e.postData,(function(t){if(200===t.Code)console.log(t),e.echo("收件地址添加成功"),uni.setStorage({key:"getaddress",data:e.postData,success:function(){uni.switchTab({url:"/pages/buy/buy"})}}),setTimeout((function(){uni.reLaunch({url:"/pages/buy/buy"})}),500);else{var a=t.Msg.split("(",2);e.echo(a[0])}}))}}};a.default=i},"32dc":function(t,a,n){var e=n("570a");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=n("4f06").default;i("c03d52c8",e,!0,{sourceMap:!1,shadowMode:!1})},"4fc3":function(t,a,n){"use strict";n.r(a);var e=n("114e"),i=n("5b97");for(var o in i)"default"!==o&&function(t){n.d(a,t,(function(){return i[t]}))}(o);n("188d");var s,c=n("f0c5"),r=Object(c["a"])(i["default"],e["b"],e["c"],!1,null,"6130b4ae",null,!1,e["a"],s);a["default"]=r.exports},"570a":function(t,a,n){var e=n("24fb");a=e(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-6130b4ae]{background-color:#f6f6f6}.main[data-v-6130b4ae]{background-color:#fff;width:calc(100% - %?40?%);margin-left:%?20?%;border-radius:%?10?%}.main .main_top[data-v-6130b4ae]{padding-top:%?30?%;height:%?46?%;line-height:%?46?%;display:-webkit-box;display:-webkit-flex;display:flex}.main .main_top .main_left[data-v-6130b4ae]{width:%?46?%;height:%?46?%;background-color:#da1d31;border-top-right-radius:%?10?%;border-bottom-right-radius:%?10?%;color:#fff;line-height:%?46?%;text-align:center;font-size:%?22?%}.main .main_top .main_right[data-v-6130b4ae]{margin-left:%?30?%;font-size:%?32?%;color:#000;font-weight:700}.main .main_content[data-v-6130b4ae]{width:calc(100% - %?40?%);margin-left:%?20?%;margin-top:%?30?%}.main .main_content .main_input[data-v-6130b4ae]{width:100%;height:%?100?%;line-height:%?100?%;border-bottom:1px solid #f1f1f1;color:block}.main .main_content .main_input .uni_input[data-v-6130b4ae]{width:100%;height:%?100?%;line-height:%?100?%;color:#000}.main .main_content .main_picker[data-v-6130b4ae]{width:100%;height:%?100?%;line-height:%?100?%;border-bottom:1px solid #f1f1f1;display:-webkit-box;display:-webkit-flex;display:flex}.main .main_content .main_picker .pickers[data-v-6130b4ae]{font-size:%?30?%;color:#666;width:calc(100% - %?40?%)}.main .main_content .main_picker .iconfont[data-v-6130b4ae]{width:%?40?%;font-size:%?40?%;color:#666}.main .main_content .main_text[data-v-6130b4ae]{width:100%;min-height:%?100?%;border-bottom:1px solid #f1f1f1}.main .main_content .main_text .uni_input[data-v-6130b4ae]{line-height:%?50?%;padding:%?25?% 0;color:#000;font-size:%?30?%;color:block}.footer[data-v-6130b4ae]{width:100%;position:fixed;bottom:0;background-color:#fff;height:%?120?%}.footer .send[data-v-6130b4ae]{margin-left:%?225?%;margin-top:%?20?%;width:%?300?%;height:%?80?%;background-color:#c93539;line-height:%?80?%;text-align:center;color:#fff;font-size:%?32?%;border-radius:%?100?%}body.?%PAGE?%[data-v-6130b4ae]{background-color:#f6f6f6}',""]),t.exports=a},"5b97":function(t,a,n){"use strict";n.r(a);var e=n("234a"),i=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(a,t,(function(){return e[t]}))}(o);a["default"]=i.a}}]);