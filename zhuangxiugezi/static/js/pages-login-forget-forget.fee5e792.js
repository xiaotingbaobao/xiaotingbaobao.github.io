(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-forget-forget"],{1990:function(e,t,a){"use strict";a.r(t);var n=a("f895"),i=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,(function(){return n[e]}))}(s);t["default"]=i.a},2277:function(e,t,a){"use strict";var n={pageHeadBack:a("9c7e").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("page-head-back",{attrs:{title:"忘记密码"}}),a("v-uni-view",{staticClass:"reset"},[a("v-uni-view",{staticClass:"reset_margin"},[a("v-uni-view",{staticClass:"area"},[a("v-uni-view",{staticClass:"area_title"},[e._v("中国大陆")]),a("v-uni-view",{staticClass:"area_select"},[a("v-uni-view",{staticClass:"area_number"},[e._v("+86")]),a("v-uni-view",{staticClass:"area_icon"},[e._v("＞")])],1)],1),a("v-uni-view",{staticClass:"phone"},[a("v-uni-input",{staticClass:"phone_input",attrs:{type:"number",maxlength:"11","placeholder-style":"color:#cccccc",placeholder:"请输入手机号码"},model:{value:e.postData["mobile"],callback:function(t){e.$set(e.postData,"mobile",t)},expression:"postData['mobile']"}})],1),a("v-uni-view",{staticClass:"number"},[a("v-uni-view",{staticClass:"number_pla"},[a("v-uni-input",{attrs:{type:"number",placeholder:"验证码","placeholder-style":"color:#cccccc"},model:{value:e.postData["captcha"],callback:function(t){e.$set(e.postData,"captcha",t)},expression:"postData['captcha']"}})],1),a("v-uni-view",{staticClass:"number_get",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.sendCode()}}},[e._v(e._s(e.codetext))])],1),a("v-uni-view",{staticClass:"password"},[a("v-uni-input",{attrs:{password:e.ispassword,"placeholder-style":"color:#cccccc",placeholder:"请输入6-20位账号密码"},model:{value:e.postData["newpassword"],callback:function(t){e.$set(e.postData,"newpassword",t)},expression:"postData['newpassword']"}}),a("v-uni-view",{class:e.ispassword?"iconfont iconyanjing":"iconfont iconyanjing2",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.check(e.ispassword)}}})],1),a("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.tologin.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"signin"},[e._v("提交")])],1)],1)],1)],1)},s=[];a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return n}))},"8fc5":function(e,t,a){"use strict";a.r(t);var n=a("2277"),i=a("1990");for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);a("e451");var r,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"84b6e3ba",null,!1,n["a"],r);t["default"]=c.exports},cdde:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.reset .reset_margin[data-v-84b6e3ba]{margin:0 %?75?%;width:calc(100% - %?150?%)}.reset .reset_margin .area[data-v-84b6e3ba]{width:%?596?%;height:%?86?%;border:1px solid #f0f0f0;color:#000;border-radius:%?44?%;font-size:%?30?%;line-height:%?86?%;margin-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.reset .reset_margin .area .area_title[data-v-84b6e3ba]{height:%?86?%;line-height:%?86?%;font-size:%?30?%;margin-left:%?52?%}.reset .reset_margin .area .area_select[data-v-84b6e3ba]{margin-right:%?50?%;display:-webkit-box;display:-webkit-flex;display:flex}.reset .reset_margin .phone[data-v-84b6e3ba]{width:%?596?%;height:%?86?%;border:1px solid #f0f0f0;color:#333;border-radius:%?44?%;font-size:%?30?%;line-height:%?86?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?20?%}.reset .reset_margin .phone uni-input[data-v-84b6e3ba]{font-size:%?30?%;margin-left:%?52?%;color:#333}.reset .reset_margin .number[data-v-84b6e3ba]{width:%?596?%;height:%?86?%;border:1px solid #f0f0f0;color:#333;border-radius:%?44?%;font-size:%?30?%;margin-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.reset .reset_margin .number .number_pla[data-v-84b6e3ba]{font-size:%?30?%;margin-left:%?52?%}.reset .reset_margin .number .number_pla uni-input[data-v-84b6e3ba]{width:%?300?%;color:#333;font-size:%?30?%}.reset .reset_margin .number .number_get[data-v-84b6e3ba]{color:#1b82d1;font-size:%?30?%;margin-right:%?50?%}.reset .reset_margin .signin[data-v-84b6e3ba]{width:%?600?%;height:%?88?%;line-height:%?88?%;text-align:center;color:#333;border-radius:%?44?%;font-size:%?36?%;line-height:%?86?%;color:#fff;background:-webkit-linear-gradient(left,#2466ad,#2b7ed1);background:linear-gradient(90deg,#2466ad,#2b7ed1);margin-top:%?20?%}.reset .reset_margin .password[data-v-84b6e3ba]{width:%?596?%;height:%?86?%;border:1px solid #f0f0f0;color:#333;border-radius:%?44?%;font-size:%?30?%;line-height:%?86?%;margin-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.reset .reset_margin .password uni-input[data-v-84b6e3ba]{font-size:%?30?%;color:#333;margin-left:%?52?%}.reset .reset_margin .password .iconfont[data-v-84b6e3ba]{font-size:%?40?%;margin-right:%?50?%}',""]),e.exports=t},e451:function(e,t,a){"use strict";var n=a("eff3"),i=a.n(n);i.a},eff3:function(e,t,a){var n=a("cdde");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("aad5c442",n,!0,{sourceMap:!1,shadowMode:!1})},f895:function(e,t,a){"use strict";var n=a("ee27");a("ac1f"),a("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,s,r=n(a("9c7e")),o={components:{pageHeadBack:r.default},onLoad:function(e){i=this,i.forgetmoblie=e.moblie,i.postData.mobile=i.forgetmoblie,console.log(i.forgetmoblie)},onUnload:function(){s&&(clearInterval(s),s=null)},data:function(){return{ispassword:!0,postData:{mobile:"",newpassword:"",captcha:"",event:"resetpwd"},canSend:!0,codetext:"获取验证码",forgetmoblie:""}},methods:{check:function(e){var t=this;t.ispassword=!t.ispassword,console.log(t.ispassword)},sendCode:function(){if(i.canSend){if(11!==i.postData.mobile.length)return void i.echo("请输入11位手机号码");i.canSend=!1;var e="",t=60;return s=setInterval((function(){if(t<=0)return clearInterval(s),i.canSend=!0,i.codetext="获取验证码",void(t=60);t-=1,e=t<10?"0"+t:""+t,i.codetext="重新获取("+e+"s)",console.log(t)}),1e3),void i.post("api/sms/send",i.postData,(function(e){if(console.log(e),1===e.code)i.success("发送成功");else{console.log(t),clearInterval(s),i.canSend=!0,i.codetext="获取验证码",t=60;var a=e.msg.split("(",2);i.echo(a[0])}}))}},tologin:function(){console.log(i.postData["mobile"]),i.post("api/user/resetpwd",i.postData,(function(e){if(console.log(e),1===e.code)i.echo("重置密码成功"),setTimeout((function(){uni.reLaunch({url:"/pages/login/login"})}),500);else{var t=e.msg.split("(",2);i.echo(t[0])}}))}}};t.default=o}}]);