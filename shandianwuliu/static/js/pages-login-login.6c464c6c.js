(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"135d":function(i,e,n){"use strict";var t=n("5f56"),a=n.n(t);a.a},"5f56":function(i,e,n){var t=n("c492");"string"===typeof t&&(t=[[i.i,t,""]]),t.locals&&(i.exports=t.locals);var a=n("4f06").default;a("0e04e119",t,!0,{sourceMap:!1,shadowMode:!1})},"789f":function(i,e,n){"use strict";n.r(e);var t=n("a40a"),a=n("7eab");for(var o in a)"default"!==o&&function(i){n.d(e,i,(function(){return a[i]}))}(o);n("135d");var s,r=n("f0c5"),l=Object(r["a"])(a["default"],t["b"],t["c"],!1,null,"7842d417",null,!1,t["a"],s);e["default"]=l.exports},"7eab":function(i,e,n){"use strict";n.r(e);var t=n("c310"),a=n.n(t);for(var o in t)"default"!==o&&function(i){n.d(e,i,(function(){return t[i]}))}(o);e["default"]=a.a},a40a:function(i,e,n){"use strict";var t,a=function(){var i=this,e=i.$createElement,n=i._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"top"},[n("v-uni-view",{staticClass:"status",staticStyle:{"{background":"#fff}"}}),n("v-uni-view",{staticClass:"nav-bar"},[n("v-uni-text",{staticClass:"title"})],1),n("v-uni-view",{staticClass:"place",staticStyle:{"{height":"44upx"}})],1),n("v-uni-view",{staticClass:"title"},[i._v("闪电物流")]),n("v-uni-view",{staticClass:"login"},[n("v-uni-view",{staticClass:"login_margin"},[n("v-uni-view",{staticClass:"phone",class:["phone",0==i.rightmobile?"red":""]},[n("v-uni-input",{staticClass:"phone_input",attrs:{maxlength:"11",type:"text",value:"",placeholder:"请输入手机号","placeholder-style":"color:#999"},model:{value:i.postData["user_name"],callback:function(e){i.$set(i.postData,"user_name",e)},expression:"postData['user_name']"}})],1),n("v-uni-view",{staticClass:"password"},[n("v-uni-input",{attrs:{password:i.ispassword,"placeholder-style":"color:#999",placeholder:"请输入6-20位账号密码"},model:{value:i.postData["password"],callback:function(e){i.$set(i.postData,"password",e)},expression:"postData['password']"}}),n("v-uni-view",{class:i.ispassword?"iconfont iconyanjing":"iconfont iconyanjing2",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.check(i.ispassword)}}})],1),n("v-uni-view",{staticClass:"remember"},[n("v-uni-view",{staticClass:"loginfree"},[n("v-uni-view",{staticClass:"radio"},[n("v-uni-radio",{staticStyle:{transform:"scale(0.7)"},attrs:{color:"#666",disabled:"true",checked:i.ischeck}})],1),n("v-uni-view",{staticClass:"loginfree_title"},[i._v("十天内免登录")])],1)],1),n("v-uni-view",{on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.tologin.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"signin"},[i._v("登录")])],1)],1)],1)],1)},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return t}))},c310:function(i,e,n){"use strict";var t;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{ischeck:!0,postData:{user_name:"",password:""},tmp:[],ispassword:!0,passWord:"",rightmobile:!0}},onLoad:function(){t=this},methods:{tologin:function(){t.postData["user_name"]?t.postData["password"]?(console.log("1111"),t.post("/user/login",t.postData,(function(i){if(console.log(i),200===i.Code){console.log(i);var e=i.Result;uni.setStorage({key:"userinfo",data:e,success:function(){uni.reLaunch({url:"/pages/buy/buy"})}}),t.success("登录成功")}else t.echo("手机号或密码不正确")}))):t.echo("请填写密码"):t.echo("请填写手机号")}}};e.default=a},c492:function(i,e,n){var t=n("24fb");e=t(!1),e.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-7842d417]{background-color:#fdfdfd}.title[data-v-7842d417]{padding-top:%?300?%;font-size:%?60?%;color:#666;height:%?80?%;text-align:center}.login[data-v-7842d417]{margin-top:%?100?%}.login .login_margin[data-v-7842d417]{margin:0 %?75?%;width:calc(100% - %?150?%);overflow:hidden}.login .login_margin .phone[data-v-7842d417]{width:%?596?%;height:%?86?%;border:1px solid #999;color:#333;border-radius:%?44?%;font-size:%?30?%;line-height:%?86?%;margin-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.login .login_margin .phone .phone_input[data-v-7842d417]{width:%?596?%;font-size:%?30?%;color:#333;margin-left:%?52?%}.login .login_margin .red .phone_input[data-v-7842d417]{width:%?596?%;font-size:%?30?%;color:red;margin-left:%?52?%}.login .login_margin .password[data-v-7842d417]{width:%?596?%;height:%?86?%;border:1px solid #999;color:#333;border-radius:%?44?%;font-size:%?30?%;line-height:%?86?%;margin-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.login .login_margin .password uni-input[data-v-7842d417]{width:%?596?%;font-size:%?30?%;margin-left:%?52?%}.login .login_margin .password .iconfont[data-v-7842d417]{font-size:%?40?%;margin-right:%?50?%}.login .login_margin .remember[data-v-7842d417]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.login .login_margin .remember .loginfree[data-v-7842d417]{color:#999;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?30?%;margin-bottom:%?30?%;margin-left:%?17?%}.login .login_margin .remember .loginfree .radio[data-v-7842d417]{background-color:#fff}.login .login_margin .remember .loginfree .loginfree_title[data-v-7842d417]{font-size:%?30?%;color:#999}.login .login_margin .remember .forget[data-v-7842d417]{font-size:%?30?%;color:#999;margin-right:%?73?%}.login .login_margin .signin[data-v-7842d417]{width:%?600?%;height:%?88?%;line-height:%?88?%;text-align:center;color:#333;border-radius:%?44?%;font-size:%?36?%;line-height:%?86?%;color:#fff;background:#373a3f}.login .login_margin .otherlogin[data-v-7842d417]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?30?%;margin-top:%?60?%}.login .login_margin .otherlogin .message[data-v-7842d417]{color:#999;margin-left:%?60?%}.login .login_margin .otherlogin .logon[data-v-7842d417]{margin-left:%?172?%;color:#333}body.?%PAGE?%[data-v-7842d417]{background-color:#fdfdfd}',""]),i.exports=e}}]);