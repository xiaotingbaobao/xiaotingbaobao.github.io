(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-sale-book-sign-sign"],{"26fb":function(t,i,a){"use strict";var e=a("a94f"),s=a.n(e);s.a},"33d8":function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"main"},[a("v-uni-scroll-view",{staticClass:"main-scroll",attrs:{"scroll-y":""}},[a("v-uni-view",{staticClass:"basic row"},[a("v-uni-view",{staticClass:"items"},[a("v-uni-text",{staticClass:"label"},[t._v("客户姓名：")]),a("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入客户姓名"}})],1),a("v-uni-view",{staticClass:"items"},[a("v-uni-text",{staticClass:"label"},[t._v("客户手机：")]),a("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入客户手机"}})],1),a("v-uni-view",{staticClass:"items"},[a("v-uni-text",{staticClass:"label"},[t._v("客户性别：")]),a("v-uni-radio-group",{staticClass:"radioes"},[a("v-uni-view",{staticClass:"rad-item"},[a("v-uni-radio",{attrs:{value:"1"}}),t._v("男")],1),a("v-uni-view",{staticClass:"rad-item"},[a("v-uni-radio",{attrs:{value:"2"}}),t._v("女")],1)],1)],1),a("v-uni-view",{staticClass:"items"},[a("v-uni-text",{staticClass:"label"},[t._v("产品类型：")]),a("v-uni-view",{staticClass:"pickers"},[a("v-uni-picker",{attrs:{value:t.product,range:t.products},on:{change:function(i){i=t.$handleEvent(i),t.bindProductChange(i)}}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.products[t.product]))])],1)],1)],1),a("v-uni-view",{staticClass:"items"},[a("v-uni-text",{staticClass:"label"},[t._v("预计拍摄时间：")]),a("v-uni-view",{staticClass:"pickers"},[a("v-uni-picker",{attrs:{mode:"date",value:t.date},on:{change:function(i){i=t.$handleEvent(i),t.bindDateChange(i)}}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.date))])],1)],1)],1)],1),a("v-uni-view",{staticClass:"tg row",on:{click:function(i){i=t.$handleEvent(i),t.tgOthers()}}},[a("v-uni-text",{staticClass:"title"},[t._v("其他选填项")]),a("v-uni-text",[t._v("^")])],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showOthers,expression:"showOthers"}],staticClass:"others row"},[a("v-uni-view",{staticClass:"items"},[a("v-uni-text",{staticClass:"label"},[t._v("客户住址：")]),a("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入客户住址"}})],1),a("v-uni-view",{staticClass:"items"},[a("v-uni-text",{staticClass:"label"},[t._v("客户身份：")]),a("v-uni-view",{staticClass:"pickers"},[a("v-uni-picker",{attrs:{value:t.identity,range:t.identities},on:{change:function(i){i=t.$handleEvent(i),t.bindIdentityChange(i)}}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.identities[t.identity]))])],1)],1)],1),a("v-uni-view",{staticClass:"items"},[a("v-uni-text",{staticClass:"label"},[t._v("其他联系人：")]),a("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入其他联系人"}})],1),a("v-uni-view",{staticClass:"items"},[a("v-uni-text",{staticClass:"label"},[t._v("其他联系方式：")]),a("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入其他联系方式"}})],1),a("v-uni-view",{staticClass:"items"},[a("v-uni-text",{staticClass:"label"},[t._v("客户来源：")]),a("v-uni-view",{staticClass:"pickers"},[a("v-uni-picker",{attrs:{value:t.job,range:t.jobs},on:{change:function(i){i=t.$handleEvent(i),t.bindJobChange(i)}}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.jobs[t.job]))])],1)],1)],1),a("v-uni-view",{staticClass:"items"},[a("v-uni-text",{staticClass:"label"},[t._v("客户职业：")]),a("v-uni-view",{staticClass:"pickers"},[a("v-uni-picker",{attrs:{value:t.from,range:t.froms},on:{change:function(i){i=t.$handleEvent(i),t.bindFromChange(i)}}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.froms[t.from]))])],1)],1)],1),a("v-uni-view",{staticClass:"items other-text"},[a("v-uni-text",{staticClass:"label"},[t._v("其他说明：")]),a("v-uni-textarea",{staticClass:"textarea",attrs:{"auto-height":"",placeholder:"其他说明..."}})],1)],1)],1),a("v-uni-view",{staticClass:"bot-btn"},[a("v-uni-view",{staticClass:"btns left"},[a("v-uni-text",[t._v("预约看店")])],1),a("v-uni-view",{staticClass:"btns left"},[a("v-uni-text",[t._v("客户缴费")])],1),a("v-uni-view",{staticClass:"btns right"},[a("v-uni-text",[t._v("完成登记")])],1)],1)],1)},s=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return s})},"6ad9":function(t,i,a){i=t.exports=a("2350")(!1),i.push([t.i,"body[data-v-5bfd68c0]{background-color:#f8f8f8}.main[data-v-5bfd68c0],uni-page-body[data-v-5bfd68c0]{height:100%}.row[data-v-5bfd68c0]{width:%?690?%;padding:0 %?30?%;background-color:#fff;margin-bottom:%?30?%}.main-scroll[data-v-5bfd68c0]{height:-webkit-calc(100% - %?84?%);height:calc(100% - %?84?%)}.row .items[data-v-5bfd68c0]{width:100%;border-bottom:1px solid #f8f8f8;display:table}.row .items[data-v-5bfd68c0]:last-child{border-bottom:none}.row .items .label[data-v-5bfd68c0]{font-size:%?30?%;line-height:%?90?%;display:table-cell}.row .items .pickers[data-v-5bfd68c0],.row .items .radioes[data-v-5bfd68c0],.row .items .uni-input[data-v-5bfd68c0]{font-size:%?30?%;line-height:%?90?%;text-align:right;display:table-cell}.row .items .radioes .rad-item[data-v-5bfd68c0]{display:inline-block;margin-left:%?50?%}.row .items .pickers .uni-input[data-v-5bfd68c0]{display:inline-block;width:100%;text-align:right}.tg[data-v-5bfd68c0]{height:%?90?%;line-height:%?90?%;text-align:center}.tg .title[data-v-5bfd68c0]{font-size:%?30?%;padding-right:%?10?%}.row .other-text[data-v-5bfd68c0]{display:block;padding-bottom:%?30?%}.row .other-text .label[data-v-5bfd68c0]{width:100%;display:inline-block}.row .other-text .textarea[data-v-5bfd68c0]{width:100%;min-height:%?120?%;font-size:%?30?%}.bot-btn[data-v-5bfd68c0]{position:fixed;bottom:0;left:0;width:%?750?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.bot-btn .btns[data-v-5bfd68c0]{width:-webkit-calc(100%/3);width:calc(100% / 3);height:%?84?%;font-size:%?36?%;line-height:%?84?%;text-align:center;color:#fff}.bot-btn .btns.left[data-v-5bfd68c0]{color:#2aa0f7;background-color:#e9f6ff}.bot-btn .btns.right[data-v-5bfd68c0]{background-color:#2aa0f7}",""])},"8fd1":function(t,i,a){"use strict";a.r(i);var e=a("33d8"),s=a("cd08");for(var n in s)"default"!==n&&function(t){a.d(i,t,function(){return s[t]})}(n);a("26fb");var l=a("2877"),c=Object(l["a"])(s["default"],e["a"],e["b"],!1,null,"5bfd68c0",null);i["default"]=c.exports},a94f:function(t,i,a){var e=a("6ad9");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=a("4f06").default;s("09f8cbd6",e,!0,{sourceMap:!1,shadowMode:!1})},cd08:function(t,i,a){"use strict";a.r(i);var e=a("f77b"),s=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(i,t,function(){return e[t]})}(n);i["default"]=s.a},f77b:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=n(),s={data:function(){return{product:0,products:["请选择","婚纱摄影","亲子摄影","毕业照"],identity:0,identities:["请选择","父母","伴侣","子女","亲戚","其它"],job:0,jobs:["请选择","职员","老板"],from:0,froms:["请选择","朋友介绍","官网","广告"],date:e,showOthers:!0}},methods:{bindProductChange:function(t){this.product=t.target.value},bindDateChange:function(t){this.date=t.target.value},bindJobChange:function(t){this.job=t.target.value},bindIdentityChange:function(t){this.identity=t.target.value},bindFromChange:function(t){this.from=t.target.value},tgOthers:function(){this.showOthers=!this.showOthers}},computed:{startDate:function(){return n("start")},endDate:function(){return n("end")}}};function n(){!(arguments.length>0&&void 0!==arguments[0])||arguments[0];var t=new Date,i=t.getFullYear(),a=t.getMonth()+1,e=t.getDate();return a=a>9?a:"0"+a,e=e>9?e:"0"+e,"".concat(i,"-").concat(a,"-").concat(e)}i.default=s}}]);