webpackJsonp([158],{"//Fk":function(t,e,a){t.exports={default:a("U5ju"),__esModule:!0}},"2KxR":function(t,e){t.exports=function(t,e,a,n){if(!(t instanceof e)||void 0!==n&&n in t)throw TypeError(a+": incorrect invocation!");return t}},"44gN":function(t,e,a){var n=a("Ua9L");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("761851a4",n,!0,{})},"4mJk":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'.box[data-v-5d529a00]{width:100%;margin:0 auto;padding:0;background:#fff;min-width:1135px}button[data-v-5d529a00]{outline:none;list-style:none;border:0;cursor:pointer}button#success[data-v-5d529a00]{color:#19be6b;background:transparent}button#fail[data-v-5d529a00]{color:#ed3f14;background:transparent}button#primary[data-v-5d529a00]{color:#ff8a34;background:transparent}button.down[data-v-5d529a00],button.up[data-v-5d529a00]{color:#ff8a34}button.down[data-v-5d529a00]:after{content:"\\F116"}button.up[data-v-5d529a00]:after{content:"\\F124"}#bottonFather[data-v-5d529a00]{display:flex;justify-content:center;align-items:center}.lookDetail[data-v-5d529a00]{background:#febf00;border-color:#febf00;color:#fff}.ml20[data-v-5d529a00]{margin-left:20px}.w18[data-v-5d529a00]{width:17.5%}.w10[data-v-5d529a00]{width:12.5%}.w36[data-v-5d529a00]{width:35%}.fs12[data-v-5d529a00]{font-size:12px}.fs14[data-v-5d529a00]{font-size:14px}.fs16[data-v-5d529a00]{font-size:16px}.fs28[data-v-5d529a00]{font-size:28px}.text-center[data-v-5d529a00]{text-align:center}.block[data-v-5d529a00]{display:block}.container[data-v-5d529a00]:after{display:block;clear:both;content:"";visibility:hidden;height:0}.container[data-v-5d529a00]{zoom:1}.text-overflow[data-v-5d529a00]{display:inline-block;max-width:80%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}input[data-v-5d529a00]::-ms-input-placeholder{text-align:center!important}input[data-v-5d529a00]::-webkit-input-placeholder{text-align:center!important}.displayGroupPrimary[data-v-5d529a00]{color:#ff8a34}.demo-spin-icon-load[data-v-5d529a00]{animation:ani-demo-spin-data-v-5d529a00 1s linear infinite}@keyframes ani-demo-spin-data-v-5d529a00{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}#Main[data-v-5d529a00]{height:100%}#Main .main-container[data-v-5d529a00]{padding-top:10px;min-height:100%;position:relative;background:#fff;padding-bottom:60px;min-width:1135px}#Main .main-container .page-box[data-v-5d529a00]{overflow:hidden;position:absolute;bottom:10px;right:10px}#Main .main-container .searchBox[data-v-5d529a00]{overflow:hidden}#Main .main-container .searchBox .search-left[data-v-5d529a00],#Main .main-container .searchBox .search-right[data-v-5d529a00]{width:48%}#Main .main-container .searchBox .search-left button[data-v-5d529a00]{outline:none;border:none;width:60px;height:30px;line-height:30px;background:#fff;margin-left:8px;cursor:pointer;color:#ff8a34}#Main .main-container .searchBox .search-right[data-v-5d529a00]{width:52%}#Main .main-container .searchBox .search-right img[data-v-5d529a00]{cursor:pointer;margin-left:6px}#Main .main-container .numColor[data-v-5d529a00]{color:#ff8a34}.container[data-v-5d529a00]{display:flex;flex-direction:row}.container .timeBox[data-v-5d529a00]{width:60%;padding:0;margin:0;padding-right:10px}.container .timeBox .date-picker[data-v-5d529a00]{width:100%!important}.container .hourBox[data-v-5d529a00]{width:40%;padding:0;margin:0}',""])},"5TOB":function(t,e,a){"use strict";var n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"timeBox"},[a("Date-picker",{staticClass:"date-picker",attrs:{placement:e.placement,disabled:e.dis,type:"date",placeholder:e.placeholder},on:{"on-change":e.changeTime},model:{value:e.yearData,callback:function(t){e.yearData=t},expression:"yearData"}})],1),e._v(" "),a("div",{staticClass:"hourBox"},[a("Select",{attrs:{disabled:e.dis,placeholder:"请选择时间"},on:{"on-change":e.changeTypeValue},model:{value:e.hourData,callback:function(t){e.hourData=t},expression:"hourData"}},e._l(e.dataList,function(t){return a("Option",{key:t.dataTime,attrs:{value:t.dataTime}},[e._v(e._s(t.dataTime))])}))],1)])},staticRenderFns:[]};e.a=n},"61ck":function(t,e,a){"use strict";var n=a("BK/k");e.a={props:{wordUploadFlag:Boolean},data:function(){return{urlOssPath:n.a.uploadWorkerExcel,uploadText:"选择上传文件",uploadSuccessUrl:"",uploadFormatType:["xls","xlsx"]}},watch:{wordUploadFlag:function(t){!0===t&&(this.uploadText="选择上传文件",this.uploadSuccessUrl="",this.$emit("wordPicturnUploadSuccess",null,!1))}},methods:{handleSuccess:function(t,e,a){this.uploadText=e.name;var n=t.data;n&&(this.uploadSuccessUrl=n,this.$emit("wordPicturnUploadSuccess",n))},handleError:function(){},handleFormatError:function(t){var a=this,n="";this.uploadFormatType.forEach(function(t,e){e+1===a.uploadFormatType.length?n+=t:n+=t+"或"}),this.$Notice.warning({title:"文件格式不正确",desc:"文件"+t.name+" 格式不正确，请上传"+n+"格式的图片。"})}}}},"82Mu":function(t,e,a){var s=a("7KvD"),c=a("L42u").set,d=s.MutationObserver||s.WebKitMutationObserver,u=s.process,l=s.Promise,f="process"==a("R9M2")(u);t.exports=function(){var a,n,r,t=function(){var t,e;for(f&&(t=u.domain)&&t.exit();a;){e=a.fn,a=a.next;try{e()}catch(t){throw a?r():n=void 0,t}}n=void 0,t&&t.enter()};if(f)r=function(){u.nextTick(t)};else if(!d||s.navigator&&s.navigator.standalone)if(l&&l.resolve){var e=l.resolve(void 0);r=function(){e.then(t)}}else r=function(){c.call(s,t)};else{var o=!0,i=document.createTextNode("");new d(t).observe(i,{characterData:!0}),r=function(){i.data=o=!o}}return function(t){var e={fn:t,next:void 0};n&&(n.next=e),a||(a=e,r()),n=e}}},CXw9:function(t,e,a){"use strict";var n,r,o,i,s=a("O4g8"),c=a("7KvD"),d=a("+ZMJ"),u=a("RY/4"),l=a("kM2E"),f=a("EqjI"),p=a("lOnJ"),h=a("2KxR"),m=a("NWt+"),v=a("t8x9"),g=a("L42u").set,b=a("82Mu")(),y=a("qARP"),x=a("dNDb"),w=a("iUbK"),D=a("fJUb"),k="Promise",_=c.TypeError,T=c.process,C=T&&T.versions,S=C&&C.v8||"",B=c[k],j="process"==u(T),M=function(){},P=r=y.f,E=!!function(){try{var t=B.resolve(1),e=(t.constructor={})[a("dSzd")("species")]=function(t){t(M,M)};return(j||"function"==typeof PromiseRejectionEvent)&&t.then(M)instanceof e&&0!==S.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(t){}}(),F=function(t){var e;return!(!f(t)||"function"!=typeof(e=t.then))&&e},q=function(u,a){if(!u._n){u._n=!0;var n=u._c;b(function(){for(var c=u._v,d=1==u._s,t=0,e=function(t){var e,a,n,r=d?t.ok:t.fail,o=t.resolve,i=t.reject,s=t.domain;try{r?(d||(2==u._h&&G(u),u._h=1),!0===r?e=c:(s&&s.enter(),e=r(c),s&&(s.exit(),n=!0)),e===t.promise?i(_("Promise-chain cycle")):(a=F(e))?a.call(e,o,i):o(e)):i(c)}catch(t){s&&!n&&s.exit(),i(t)}};n.length>t;)e(n[t++]);u._c=[],u._n=!1,a&&!u._h&&R(u)})}},R=function(o){g.call(c,function(){var t,e,a,n=o._v,r=N(o);if(r&&(t=x(function(){j?T.emit("unhandledRejection",n,o):(e=c.onunhandledrejection)?e({promise:o,reason:n}):(a=c.console)&&a.error&&a.error("Unhandled promise rejection",n)}),o._h=j||N(o)?2:1),o._a=void 0,r&&t.e)throw t.v})},N=function(t){return 1!==t._h&&0===(t._a||t._c).length},G=function(e){g.call(c,function(){var t;j?T.emit("rejectionHandled",e):(t=c.onrejectionhandled)&&t({promise:e,reason:e._v})})},L=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),q(e,!0))},J=function(t){var a,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw _("Promise can't be resolved itself");(a=F(t))?b(function(){var e={_w:n,_d:!1};try{a.call(t,d(J,e,1),d(L,e,1))}catch(t){L.call(e,t)}}):(n._v=t,n._s=1,q(n,!1))}catch(t){L.call({_w:n,_d:!1},t)}}};E||(B=function(t){h(this,B,k,"_h"),p(t),n.call(this);try{t(d(J,this,1),d(L,this,1))}catch(t){L.call(this,t)}},(n=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=a("xH/j")(B.prototype,{then:function(t,e){var a=P(v(this,B));return a.ok="function"!=typeof t||t,a.fail="function"==typeof e&&e,a.domain=j?T.domain:void 0,this._c.push(a),this._a&&this._a.push(a),this._s&&q(this,!1),a.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new n;this.promise=t,this.resolve=d(J,t,1),this.reject=d(L,t,1)},y.f=P=function(t){return t===B||t===i?new o(t):r(t)}),l(l.G+l.W+l.F*!E,{Promise:B}),a("e6n0")(B,k),a("bRrM")(k),i=a("FeBl")[k],l(l.S+l.F*!E,k,{reject:function(t){var e=P(this);return(0,e.reject)(t),e.promise}}),l(l.S+l.F*(s||!E),k,{resolve:function(t){return D(s&&this===i?B:this,t)}}),l(l.S+l.F*!(E&&a("dY0y")(function(t){B.all(t).catch(M)})),k,{all:function(t){var i=this,e=P(i),s=e.resolve,c=e.reject,a=x(function(){var n=[],r=0,o=1;m(t,!1,function(t){var e=r++,a=!1;n.push(void 0),o++,i.resolve(t).then(function(t){a||(a=!0,n[e]=t,--o||s(n))},c)}),--o||s(n)});return a.e&&c(a.v),e.promise},race:function(t){var e=this,a=P(e),n=a.reject,r=x(function(){m(t,!1,function(t){e.resolve(t).then(a.resolve,n)})});return r.e&&n(r.v),a.promise}})},EqBC:function(t,e,a){"use strict";var n=a("kM2E"),r=a("FeBl"),o=a("7KvD"),i=a("t8x9"),s=a("fJUb");n(n.P+n.R,"Promise",{finally:function(e){var a=i(this,r.Promise||o.Promise),t="function"==typeof e;return this.then(t?function(t){return s(a,e()).then(function(){return t})}:e,t?function(t){return s(a,e()).then(function(){throw t})}:e)}})},FSVQ:function(t,e,a){"use strict";var n=a("pFYg"),r=a.n(n);e.a={name:"dataRange",data:function(){return{dataList:[],yearData:this.time.slice(0,10),hourData:this.hour}},props:{time:{type:[String,Number,Date,Boolean]},placement:{type:String,default:"bottom"},hour:{type:String},dis:{type:Boolean,default:!1},placeholder:{type:String,default:"开始时间"}},created:function(){for(var t=0;t<=24;t++){var e=t<10?"0"+t:t;e+=":00",this.dataList.push({dataTime:e})}},watch:{time:{handler:function(t){var e=this;t||(this.hourData=this.hour),"string"==typeof t&&(this.yearData=t.slice(0,10),this.$nextTick(function(){e.hourData=t.slice(11,13)+":00"}))},immediate:!0}},computed:{},methods:{changeTime:function(t){t+=" 00:00:00",t=this.formateTime(t),this.$emit("dataChange",{time:t,hour:this.hourData})},changeTypeValue:function(t){var e=null;"object"==r()(this.yearData)?e=Date.parse(this.yearData):"string"==typeof this.yearData&&(e=this.yearData.split("-").join("/"),e=Date.parse(new Date(e))),this.$emit("dataChange",{time:e,hour:this.hourData})},formateTime:function(t){return t=t.replace(/-/g,"/"),new Date(t).getTime()}}}},GwtN:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("J3/U"),r=a("blvD");var o=function(t){a("PSzj")},i=a("VU/8")(n.a,r.a,!1,o,"data-v-06b8301e",null);e.default=i.exports},"J3/U":function(t,e,r){"use strict";var o=r("XP8j"),n=r("fl7q"),a=r("a1LZ"),i=r("ZoQJ"),s=(r("BK/k"),r("LKnx"));e.a={name:"activity-abnormal-warn-two-keepAlive",components:{wpictureUpload:s.a,dataRange:a.a},data:function(){var r=this,a=this;return{formData:{queryStartTime:i.a,queryEndTime:i.b,joinCode:"",storeName:"",busiDept:"",workerName:"",workerPhone:"",salesRoute:"",salesDept:"",salesRegion:"",bapChannel:"",isLoong:""},protocolBapChannel:n.j,page:1,pageNum:0,rule:{queryStartTime:[{validator:function(t,e,a){""==e?a(new Error("请输入开始时间")):(""!==r.formData.queryEndTime&&r.$refs.form.validateField("queryEndTime"),a())}}],queryEndTime:[{validator:function(t,e,a){if(""==e)a(new Error("请输入结束时间"));else{var n=new Date(r.formData.queryStartTime).getTime();new Date(e).getTime()<n?a(new Error("开始时间大于结束时间")):a()}}}],queryTime:[{required:!0,message:"选择日期跟时间"}]},start:{time:"",hour:""},end:{time:i.b,hour:"24:00"},columns:[{title:"序号",type:"index",width:60,align:"center"},{title:"上传时间",key:"joinCode",width:170,align:"center",render:function(t,e){return a.Global.createTime(e.row.uploadTime)}},{title:"上传周期",key:"storeName",width:180,align:"center",render:function(t,e){return a.Global.formatYear(e.row.startTime)+"至"+a.Global.formatYear(e.row.endTime)}},{title:"销售部",key:"salesDept",width:120,align:"center"},{title:"销售大区",key:"salesRegion",width:120,align:"center"},{title:"营业部",key:"busiDept",width:170,align:"center"},{title:"客户编号",key:"joinCode",width:120,align:"center"},{title:"店铺名称",key:"storeName",width:170,align:"center"},{title:"DSD/DSS",key:"storeNature",width:100,align:"center"},{title:"BAP渠道",key:"bapChannel",width:120,align:"center"},{title:"销售路线",key:"salesRoute",width:120,align:"center"},{title:"负责业代",key:"workerName",width:160,align:"center"},{title:"地域性质",key:"regionProp",width:100,align:"center"},{title:"客户地址",key:"address",width:200,align:"center"},{title:"联系方式",key:"phone",width:120,align:"center"},{title:"预警状态",key:"riskStatus",width:170,align:"center"},{title:"操作",key:"action",width:100,align:"center",fixed:"right",render:function(t,e){var a=[];return a.push(t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){var t={joinCode:e.row.joinCode,id:e.row.id,loongBizType:"two",storeId:e.row.storeId};r.$router.push({path:"/examineDetail",query:t})}}},"查看详情")),t("div",a)}}],pageData:[],showQuery:!1}},created:function(){},mounted:function(){},methods:{submit:function(t){var e=this;this.$refs[t].validate(function(t){t?(e.page=1,e.init(e.page,10)):e.$Message.error("请选择查询条件!!")})},changePage:function(t){this.init(t,10)},init:function(t,e){var a=this,n=this.Global.JsonChange(this.formData);n.queryStartTime=this.Global.createTime(this.formData.queryStartTime),"24:00"==this.start.hour&&(n.queryStartTime=this.Global.setHoursData(this.start.time,this.start.hour)),n.queryEndTime=this.Global.createTime(this.formData.queryEndTime),"24:00"==this.end.hour&&(n.queryEndTime=this.Global.setHoursData(this.end.time,this.end.hour)),this.Global.deleteEmptyProperty(n),n.currentPage=t,n.pageSize=e,n.loongBizType="two",delete n.queryTime,r.i(o.h)(n).then(function(t){t&&1===t.status&&(console.log(t.data),a.pageNum=t.data.items,a.page=t.data.page,a.pageData=t.data.datalist)})},startTimeChange:function(t){this.start.hour=t.hour,this.start.time=t.time,"24:00"!=t.hour&&(this.formData.queryStartTime=this.Global.setHoursData(t.time,t.hour))},endTimeChange:function(t){this.end.hour=t.hour,this.end.time=t.time,"24:00"!=t.hour&&(this.formData.queryEndTime=this.Global.setHoursData(t.time,t.hour))},exportExcel:function(){var t=this.Global.JsonChange(this.formData);t.loongBizType="two",t.queryStartTime=this.Global.createTime(this.formData.queryStartTime),"24:00"==this.start.hour&&(t.queryStartTime=this.Global.setHoursData(this.start.time,this.start.hour)),t.queryEndTime=this.Global.createTime(this.formData.queryEndTime),"24:00"==this.end.hour&&(t.queryEndTime=this.Global.setHoursData(this.end.time,this.end.hour)),this.Global.deleteEmptyProperty(t),delete t.queryTime,console.log(t);var e=this.Global.getExportUrl("displayLoongLog/loongActivityRiskExport.json",t);window.open(e)},importExcel:function(){}}}},L42u:function(t,e,a){var n,r,o,i=a("+ZMJ"),s=a("knuC"),c=a("RPLV"),d=a("ON07"),u=a("7KvD"),l=u.process,f=u.setImmediate,p=u.clearImmediate,h=u.MessageChannel,m=u.Dispatch,v=0,g={},b="onreadystatechange",y=function(){var t=+this;if(g.hasOwnProperty(t)){var e=g[t];delete g[t],e()}},x=function(t){y.call(t.data)};f&&p||(f=function(t){for(var e=[],a=1;arguments.length>a;)e.push(arguments[a++]);return g[++v]=function(){s("function"==typeof t?t:Function(t),e)},n(v),v},p=function(t){delete g[t]},"process"==a("R9M2")(l)?n=function(t){l.nextTick(i(y,t,1))}:m&&m.now?n=function(t){m.now(i(y,t,1))}:h?(o=(r=new h).port2,r.port1.onmessage=x,n=i(o.postMessage,o,1)):u.addEventListener&&"function"==typeof postMessage&&!u.importScripts?(n=function(t){u.postMessage(t+"","*")},u.addEventListener("message",x,!1)):n=b in d("script")?function(t){c.appendChild(d("script"))[b]=function(){c.removeChild(this),y.call(t)}}:function(t){setTimeout(i(y,t,1),0)}),t.exports={set:f,clear:p}},LKnx:function(t,e,a){"use strict";var n=a("61ck"),r=a("SGfj");var o=function(t){a("44gN")},i=a("VU/8")(n.a,r.a,!1,o,"data-v-67deeb84",null);e.a=i.exports},"NWt+":function(t,e,a){var f=a("+ZMJ"),p=a("msXi"),h=a("Mhyx"),m=a("77Pl"),v=a("QRG4"),g=a("3fs2"),b={},y={};(e=t.exports=function(t,e,a,n,r){var o,i,s,c,d=r?function(){return t}:g(t),u=f(a,n,e?2:1),l=0;if("function"!=typeof d)throw TypeError(t+" is not iterable!");if(h(d)){for(o=v(t.length);l<o;l++)if((c=e?u(m(i=t[l])[0],i[1]):u(t[l]))===b||c===y)return c}else for(s=d.call(t);!(i=s.next()).done;)if((c=p(s,u,i.value,e))===b||c===y)return c}).BREAK=b,e.RETURN=y},PSzj:function(t,e,a){var n=a("SEMm");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("961531b4",n,!0,{})},SEMm:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'.box[data-v-06b8301e]{margin:0 auto;padding:0;min-width:1135px}button[data-v-06b8301e]{outline:none;list-style:none;border:0;cursor:pointer}button#success[data-v-06b8301e]{color:#19be6b;background:transparent}button#fail[data-v-06b8301e]{color:#ed3f14;background:transparent}button#primary[data-v-06b8301e]{color:#ff8a34;background:transparent}button.down[data-v-06b8301e],button.up[data-v-06b8301e]{color:#ff8a34}button.down[data-v-06b8301e]:after{content:"\\F116"}button.up[data-v-06b8301e]:after{content:"\\F124"}#bottonFather[data-v-06b8301e]{display:flex;justify-content:center;align-items:center}.lookDetail[data-v-06b8301e]{background:#febf00;border-color:#febf00;color:#fff}.ml20[data-v-06b8301e]{margin-left:20px}.w18[data-v-06b8301e]{width:17.5%}.w10[data-v-06b8301e]{width:12.5%}.w36[data-v-06b8301e]{width:35%}.fs12[data-v-06b8301e]{font-size:12px}.fs14[data-v-06b8301e]{font-size:14px}.fs16[data-v-06b8301e]{font-size:16px}.fs28[data-v-06b8301e]{font-size:28px}.text-center[data-v-06b8301e]{text-align:center}.block[data-v-06b8301e]{display:block}.container[data-v-06b8301e]:after{display:block;clear:both;content:"";visibility:hidden;height:0}.container[data-v-06b8301e]{zoom:1}.text-overflow[data-v-06b8301e]{display:inline-block;max-width:80%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}input[data-v-06b8301e]::-ms-input-placeholder{text-align:center!important}input[data-v-06b8301e]::-webkit-input-placeholder{text-align:center!important}.displayGroupPrimary[data-v-06b8301e]{color:#ff8a34}.demo-spin-icon-load[data-v-06b8301e]{animation:ani-demo-spin-data-v-06b8301e 1s linear infinite}@keyframes ani-demo-spin-data-v-06b8301e{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}#Main[data-v-06b8301e]{height:100%}#Main .main-container[data-v-06b8301e]{padding-top:10px;min-height:100%;position:relative;background:#fff;padding-bottom:60px;min-width:1135px}#Main .main-container .page-box[data-v-06b8301e]{overflow:hidden;position:absolute;bottom:10px;right:10px}#Main .main-container .searchBox[data-v-06b8301e]{overflow:hidden}#Main .main-container .searchBox .search-left[data-v-06b8301e],#Main .main-container .searchBox .search-right[data-v-06b8301e]{width:48%}#Main .main-container .searchBox .search-left button[data-v-06b8301e]{outline:none;border:none;width:60px;height:30px;line-height:30px;background:#fff;margin-left:8px;cursor:pointer;color:#ff8a34}#Main .main-container .searchBox .search-right[data-v-06b8301e]{width:52%}#Main .main-container .searchBox .search-right img[data-v-06b8301e]{cursor:pointer;margin-left:6px}#Main .main-container .numColor[data-v-06b8301e]{color:#ff8a34}.box[data-v-06b8301e]{width:100%;box-shadow:0 0 10px 2px rgba(0,0,0,.1);margin:0 auto 15px;padding:30px 20px;padding-bottom:0;background:#fff}.ivu-table-row[data-v-06b8301e]{box-shadow:0 0 5px 2px rgba(0,0,0,.1)!important;transform:translateY(0)}.contentTop[data-v-06b8301e]{overflow:hidden;margin-bottom:10px}.contentTop .export[data-v-06b8301e]{height:24px;float:right}.contentTop .export div[data-v-06b8301e]{background:#ff8a34;color:#fff;padding:3px 12px;border-bottom:0;cursor:pointer}.contentTop .export div i[data-v-06b8301e]{margin-right:2px}.contentTop .upDate[data-v-06b8301e]{float:right;border:1px solid #aeaeae;padding:2px 12px;margin-right:10px;margin-top:4px;color:#333}.contentTop .demo[data-v-06b8301e]{float:right;color:#ff8a34;height:30px;line-height:30px;cursor:pointer;margin-right:20px}.contentTop .demo span[data-v-06b8301e]{text-decoration:underline}.searchBox[data-v-06b8301e]{overflow:hidden}.searchBox .search_btn[data-v-06b8301e]{float:left;width:50px;padding:5px 14px;border-top-right-radius:0;border-bottom-right-radius:0}.searchBox .search_icon[data-v-06b8301e]{float:left;padding:5px 10px;border-top-left-radius:0;border-bottom-left-radius:0}',""])},SGfj:function(t,e,a){"use strict";var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"upDate"},[a("Upload",{attrs:{action:t.urlOssPath,"show-upload-list":!1,format:t.uploadFormatType,"on-success":t.handleSuccess,"on-error":t.handleError,"on-format-error":t.handleFormatError}},[a("Icon",{attrs:{type:"ios-folder",size:"14",color:"#53a3f4"}}),t._v("\n        "+t._s(t.uploadText)+" \n    ")],1)],1)},staticRenderFns:[]};e.a=n},U5ju:function(t,e,a){a("M6a0"),a("zQR9"),a("+tPU"),a("CXw9"),a("EqBC"),a("jKW+"),t.exports=a("FeBl").Promise},Ua9L:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".upDate[data-v-67deeb84]{float:right;border:1px solid #aeaeae;padding:2px 12px;margin-right:10px;margin-top:4px;color:#333;cursor:pointer}",""])},XP8j:function(t,e,a){"use strict";e.b=function(t){var e={data:t};return a.i(n.a)({url:"/displayLoongLog/queryLoongStoreList.json",method:"post",data:e})},e.c=function(t){var e={data:t};return a.i(n.a)({url:"/brandStoreSign/brandStoreSignInfoImport.json",method:"post",data:e})},e.d=function(t){var e={data:t};return a.i(n.a)({url:"/displayLoongLog/deleteLoongStoreInfo.json",method:"post",data:e})},e.e=function(t){var e={data:t};return a.i(n.a)({url:"/displayLoongLog/queryLoongActivityList.json",method:"post",data:e})},e.h=function(t){var e={data:t};return a.i(n.a)({url:"/displayLoongLog/queryLoongActivityRisk.json",method:"post",data:e})},e.g=function(t){var e={data:t};return a.i(n.a)({url:"/displayLoongLog/getLoongActivityInfo.json",method:"post",data:e})},e.a=function(t){var e={data:t};return a.i(n.a)({url:"/report/loongTrackStatisticsForWeek.json",method:"post",data:e})},e.f=function(t){var e={data:t};return a.i(n.a)({url:"/report/loongTrackStatisticsDetail.json",method:"post",data:e})};var n=a("f+26")},ZoQJ:function(t,e,a){"use strict";e.i=p,a.d(e,"h",function(){return h}),a.d(e,"g",function(){return m}),a.d(e,"f",function(){return v}),a.d(e,"c",function(){return y}),a.d(e,"a",function(){return x}),a.d(e,"j",function(){return w}),a.d(e,"b",function(){return D}),a.d(e,"d",function(){return k}),a.d(e,"k",function(){return _}),e.e=function(t){for(var e=0;e<t.length;e++)if(t[e].checked=!1,t[e].children)for(var a=0;a<t[e].children.length;a++)t[e].children[a].checked=!1};var n=a("BO1k"),r=(a.n(n),a("//Fk"));a.n(r),a("t5DY");function o(t){var e=new Date(Number(t)),a=e.getFullYear(),n=e.getMonth()+1;n=n<10?"0"+n:n;var r=e.getDate();return a+"-"+n+"-"+(r=r<10?"0"+r:r)+" 00:00:00"}var i,s=new Date,c=o(s.getTime()),d=o((i=(i=c).replace(/-/g,"/"),new Date(i).getTime()+864e5)),u=s.getFullYear(),l=s.getMonth()+1;l=l<10?"0"+l:l;var f=s.getDate();s.getDate();function p(t){var e=new Date,a=new Date;a.setDate(e.getDate()+t);var n=a.getMonth()<9?"0"+(a.getMonth()+1):a.getMonth()+1,r=a.getDate()<10?"0"+a.getDate():a.getDate();return a.getFullYear()+"-"+n+"-"+r}f=f<10?"0"+f:f;var h=p(-30)+" 00:00:00",m=p(-7)+" 00:00:00",v=p(0)+" 00:00:00",g=p(-3),b=u+"-"+l+"-"+f,y=b,x=(s.getHours(),s.getMinutes(),s.getSeconds(),m),w=g+" 00:00:00",D=b+" 24:00:00",k=b+" 00:00:00",_=d},a1LZ:function(t,e,a){"use strict";var n=a("FSVQ"),r=a("5TOB");var o=function(t){a("dBi9")},i=a("VU/8")(n.a,r.a,!1,o,"data-v-5d529a00",null);e.a=i.exports},bRrM:function(t,e,a){"use strict";var n=a("7KvD"),r=a("FeBl"),o=a("evD5"),i=a("+E39"),s=a("dSzd")("species");t.exports=function(t){var e="function"==typeof r[t]?r[t]:n[t];i&&e&&!e[s]&&o.f(e,s,{configurable:!0,get:function(){return this}})}},blvD:function(t,e,a){"use strict";var n={render:function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{attrs:{id:"Main"}},[r("h2",{staticClass:"Title"},[n._v("活动异常预警")]),n._v(" "),r("div",{staticClass:"box"},[r("Form",{ref:"form",attrs:{model:n.formData,"label-width":80,rules:n.rule}},[r("Row",[r("Col",{attrs:{span:"21"}},[r("Row",[r("Col",{attrs:{span:"13"}},[r("Form-item",{attrs:{label:"时间:"}},[r("Row",[r("Col",{attrs:{span:"11"}},[r("Form-item",{attrs:{prop:"queryStartTime"}},[r("data-range",{attrs:{hour:"00:00",time:n.formData.queryStartTime,start:""},on:{dataChange:n.startTimeChange}})],1)],1),n._v(" "),r("Col",{staticStyle:{"text-align":"center"},attrs:{span:"2"}},[n._v("至")]),n._v(" "),r("Col",{attrs:{span:"11"}},[r("Form-item",{attrs:{prop:"queryEndTime"}},[r("data-range",{attrs:{hour:"24:00",placeholder:"结束时间",time:n.formData.queryEndTime},on:{dataChange:n.endTimeChange}})],1)],1)],1)],1)],1),n._v(" "),r("Col",{attrs:{span:"11"}},[r("Form-item",{attrs:{label:"客户编号"}},[r("Input",{model:{value:n.formData.joinCode,callback:function(t){n.$set(n.formData,"joinCode",t)},expression:"formData.joinCode"}})],1)],1)],1),n._v(" "),r("Row",[r("Col",{attrs:{span:"8"}},[r("Form-item",{attrs:{label:"店铺名称"}},[r("Input",{model:{value:n.formData.storeName,callback:function(t){n.$set(n.formData,"storeName",t)},expression:"formData.storeName"}})],1)],1),n._v(" "),r("Col",{attrs:{span:"8"}},[r("Form-item",{attrs:{label:"客户渠道"}},[r("Select",{attrs:{clearable:""},model:{value:n.formData.bapChannel,callback:function(t){n.$set(n.formData,"bapChannel",t)},expression:"formData.bapChannel"}},n._l(n.protocolBapChannel,function(t,e,a){return r("Option",{key:a,attrs:{value:e}},[n._v(n._s(t))])}))],1)],1),n._v(" "),r("Col",{attrs:{span:"8"}},[r("Form-item",{attrs:{label:"业代姓名"}},[r("Input",{model:{value:n.formData.workerName,callback:function(t){n.$set(n.formData,"workerName",t)},expression:"formData.workerName"}})],1)],1)],1)],1),n._v(" "),r("Col",{attrs:{span:"2",offset:"1"}},[r("div",{staticClass:"searchBox"},[r("Button",{staticClass:"btn-search  search_btn",attrs:{type:"primary"},on:{click:function(t){n.submit("form")}}},[n._v("查询")]),n._v(" "),n.showQuery?r("Button",{staticClass:"search_icon",attrs:{type:"primary",icon:"ios-arrow-up"},on:{click:function(t){n.showQuery=!n.showQuery}}}):r("Button",{staticClass:"search_icon",attrs:{type:"primary",icon:"ios-arrow-down"},on:{click:function(t){n.showQuery=!n.showQuery}}})],1)])],1),n._v(" "),r("transition",{attrs:{name:"fade"}},[n.showQuery?r("Row",[r("Col",{attrs:{span:"7"}},[r("Form-item",{attrs:{label:"销售路线"}},[r("Input",{model:{value:n.formData.salesRoute,callback:function(t){n.$set(n.formData,"salesRoute",t)},expression:"formData.salesRoute"}})],1)],1),n._v(" "),r("Col",{attrs:{span:"7"}},[r("Form-item",{attrs:{label:"销售部"}},[r("Input",{model:{value:n.formData.salesDept,callback:function(t){n.$set(n.formData,"salesDept",t)},expression:"formData.salesDept"}})],1)],1),n._v(" "),r("Col",{attrs:{span:"7"}},[r("Form-item",{attrs:{label:"大区"}},[r("Input",{model:{value:n.formData.salesRegion,callback:function(t){n.$set(n.formData,"salesRegion",t)},expression:"formData.salesRegion"}})],1)],1),n._v(" "),r("Col",{attrs:{span:"7"}},[r("Form-item",{attrs:{label:"营业部"}},[r("Input",{model:{value:n.formData.busiDept,callback:function(t){n.$set(n.formData,"busiDept",t)},expression:"formData.busiDept"}})],1)],1),n._v(" "),r("Col",{attrs:{span:"7"}},[r("Form-item",{attrs:{label:"业代手机"}},[r("Input",{model:{value:n.formData.workerPhone,callback:function(t){n.$set(n.formData,"workerPhone",t)},expression:"formData.workerPhone"}})],1)],1)],1):n._e()],1)],1)],1),n._v(" "),r("div",{staticClass:"box",staticStyle:{"padding-bottom":"20px"}},[r("div",{staticClass:"contentTop"},[r("Button",{staticClass:"btn-right",attrs:{type:"primary"},on:{click:n.exportExcel}},[n._v("导出")])],1),n._v(" "),r("Table",{attrs:{columns:n.columns,data:n.pageData,"disabled-hover":""}}),n._v(" "),r("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[r("div",{staticStyle:{float:"right"}},[r("Page",{attrs:{total:n.pageNum,current:n.page},on:{"on-change":n.changePage}})],1)])],1)])},staticRenderFns:[]};e.a=n},dBi9:function(t,e,a){var n=a("4mJk");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("d4798972",n,!0,{})},dNDb:function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},"f+26":function(t,e,a){"use strict";var n=a("//Fk"),r=a.n(n),o=a(4),i=a.n(o),s=a("NC6I"),c=(a.n(s),a("NHnr")),d=a("BK/k"),u=a("yt7g"),l=i.a.create({baseURL:d.a.dataServer,timeout:3e4}),f=d.a.dataServer+"activity/queryActivityList.json";l.interceptors.request.use(function(t){var e=u.a.getContext();return t.data.context=e,t.data.sign=u.a.getSign(e),t},function(t){r.a.reject(t)}),l.interceptors.response.use(function(t){if("MEMBER_NOT_LOGIN"!==t.data.errorMsg)return 1===t.data.status?f===t.config.url&&0===t.data.data.items?void c.default.$Message.warning("该品牌暂无陈列活动"):t.data:(c.default.$Message.error(t.data.errorMsg),t.data);sessionStorage.clear(),c.default.$router.replace("/")},function(t){return t&&t.response&&200!==t.response.status&&c.default.$Message.error("系统繁忙，请稍后再试"),console.log(t),r.a.reject(t)}),e.a=l},fJUb:function(t,e,a){var n=a("77Pl"),r=a("EqjI"),o=a("qARP");t.exports=function(t,e){if(n(t),r(e)&&e.constructor===t)return e;var a=o.f(t);return(0,a.resolve)(e),a.promise}},fl7q:function(t,e,a){"use strict";a.d(e,"A",function(){return n}),a.d(e,"C",function(){return r}),a.d(e,"s",function(){return o}),a.d(e,"B",function(){return i}),a.d(e,"D",function(){return s}),a.d(e,"w",function(){return c}),a.d(e,"r",function(){return d}),a.d(e,"q",function(){return u}),a.d(e,"y",function(){return l}),a.d(e,"u",function(){return f}),a.d(e,"t",function(){return p}),a.d(e,"a",function(){return h}),a.d(e,"E",function(){return m}),a.d(e,"F",function(){return v}),a.d(e,"n",function(){return g}),a.d(e,"o",function(){return b}),a.d(e,"p",function(){return y}),a.d(e,"z",function(){return x}),a.d(e,"G",function(){return w}),a.d(e,"f",function(){return D}),a.d(e,"c",function(){return k}),a.d(e,"d",function(){return _}),a.d(e,"i",function(){return T}),a.d(e,"x",function(){return C}),a.d(e,"b",function(){return S}),a.d(e,"e",function(){return B}),a.d(e,"g",function(){return j}),a.d(e,"j",function(){return M}),a.d(e,"m",function(){return P}),a.d(e,"l",function(){return E}),a.d(e,"k",function(){return F}),a.d(e,"h",function(){return q}),a.d(e,"v",function(){return R}),a.d(e,"H",function(){return N});var n={0:"无效",1:"有效"},r={0:"电子券",1:"实物",2:"电子红包",5:"咪咕流量包",9:"谢谢惠顾"},o={0:"待使用",1:"流通中",10:"待核销",2:"已核销",4:"已过期"},i={0:"非展示中",1:"展示中"},s={1:"执行中",2:"暂停",3:"执行完毕"},c={BPP:"e店佳",CPP:"e促达"},d={1:"展示中",2:"非展示中",3:"未开始",4:"已结束"},u={0:"审核中",1:"视频通过",2:"审核不通过",3:"退回需重传",4:"通过已发奖",1001:"预审通过",1010:"已清算",1002:"预审不通过",1003:"预审退回",2001:"审核通过"},l={"-1":"未上传",0:"审核中",1:"合格",2:"不合格",3:"不合格",4:"合格",1001:"审核中",1010:"已清算",1002:"审核中",1003:"审核中",2001:"审核中"},f={1:"合格",2:"不合格",3:"终止",4:"恢复"},p={1:"待参与",2:"参与中",3:"被终止",4:"活动结束"},h={0:"待审核",1:"通过",2:"审核不通过",3:"退回需重传",4:"通过已发放",1010:"已清算",1001:"审核中",1002:"审核中",1003:"审核中",2001:"审核中",4040:"未达发放要求"},m={"-1":"待参与",0:"待清算",1010:"已清算",4:"已发奖"},v={0:"待领用",1:"已领用",2:"已清算",3:"已发奖"},g={"-1":"不符合发奖要求",0:"待清算",1010:"已清算",4:"已发奖",4040:"不符合发奖要求",9090:"不符合发奖要求"},b={1:"正常",2:"异常"},y={0:"未领取",1:"领取中",2:"已领取",3:"提现退回"},x={0:"不合格",1:"合格"},w={0:"未签到",1:"已签到",2:"迟到",3:"待签到"},D={"-1":"待提交",0:"待审核",1:"审核通过",1001:"待审核",2:"不通过",3:"退回重签中"},k={0:"无",1:"KO冰柜",2:"客户自有冰柜",3:"KO、客户冰柜"},_={1:"KO冰柜",2:"客户冰柜",3:"KO冰柜/客户冰柜"},T={1:"是",0:"否"},C={"-2":"未参与","-1":"未上传",0:"审核中",1:"合格",2:"不合格",3:"退回重传"},S={0:"无",1:"端架陈列",2:"小方展架陈列",3:"带有价格提示的RB套餐牌",4:"助销工具投放及使用",5:"果汁货架陈列"},B={Milk:"含乳饮品",nutrient:"营养素饮料",juice:"果汁",soda:"汽水"},j={0:"初始",1:"正常",2:"锁定"},M={GT:"GT",JY:"教育",WB:"网吧",YS:"饮食",GZCS:"工作场所",QT:"其他"},P={GT:{GT_JY:"即饮"},JY:{JY_CS:"超市",JY_SPD:"食品店",JY_STNKK:"食堂内档口",JY_STNCS:"食堂内超市",JY_STNSB:"食堂内水吧"},WB:{WB_WB:"网吧"},GZCS:{GZCS_JY:"即饮"},YS:{YS_ZTWWD:"传统（无网店）",YS_ZTYWD:"传统（有网店）",YS_ZGDCYXX:"中高档（线下）",YS_ZGDCYXSXX:"中高档（线上+线下）"},QT:{QT_QT:"其他"}},E={"冀北销售部":"冀北销售部","冀南销售部":"冀南销售部","冀中销售部":"冀中销售部","雄安销售部":"雄安销售部"},F={diamond:"钻石",gold:"金",silver:"银",copper:"铜"},q={0:"无",1:"端架陈列",2:"小方展架陈列",3:"带有价格提示的RB套餐牌",4:"助销工具投放及使用",5:"果汁货架陈列"},R={"-1":"不可参与",0:"未参与",1:"执行中"},N={ICBKCNBJ:"工商银行",PCBCCNBJ:"建设银行",COMMCNSH:"交通银行",ABOCCNBJ:"农业银行",PSBCCNBJ:"邮政储蓄银行",BKCHCNBJ:"中国银行"}},iUbK:function(t,e,a){var n=a("7KvD").navigator;t.exports=n&&n.userAgent||""},"jKW+":function(t,e,a){"use strict";var n=a("kM2E"),r=a("qARP"),o=a("dNDb");n(n.S,"Promise",{try:function(t){var e=r.f(this),a=o(t);return(a.e?e.reject:e.resolve)(a.v),e.promise}})},knuC:function(t,e){t.exports=function(t,e,a){var n=void 0===a;switch(e.length){case 0:return n?t():t.call(a);case 1:return n?t(e[0]):t.call(a,e[0]);case 2:return n?t(e[0],e[1]):t.call(a,e[0],e[1]);case 3:return n?t(e[0],e[1],e[2]):t.call(a,e[0],e[1],e[2]);case 4:return n?t(e[0],e[1],e[2],e[3]):t.call(a,e[0],e[1],e[2],e[3])}return t.apply(a,e)}},qARP:function(t,e,a){"use strict";var r=a("lOnJ");function n(t){var a,n;this.promise=new t(function(t,e){if(void 0!==a||void 0!==n)throw TypeError("Bad Promise constructor");a=t,n=e}),this.resolve=r(a),this.reject=r(n)}t.exports.f=function(t){return new n(t)}},t5DY:function(t,e,n){"use strict";e.d=function(t,e){var a={data:{level:t,parentId:e}};return n.i(r.a)({url:"/areaDict/doQueryAll.json",method:"post",data:a})},e.a=function(){return n.i(r.a)({url:"/brand/doQueryWithPage.json",method:"post",data:{data:{status:1}}})},e.l=function(t){var e={data:{brandId:t,type:3}};return n.i(r.a)({url:"/activity/queryActivityList.json",method:"post",data:e})},e.k=function(t){var e={data:t};return n.i(r.a)({url:"/displayYxtg/queryActivityGroupVOByBrandId.json",method:"post",data:e})},e.j=function(t){var e={data:t};return n.i(r.a)({url:"/resource/getRoleResource.json",method:"post",data:e})},e.i=function(t){var e={data:t};return n.i(r.a)({url:"/resource/removeRoleResource.json",method:"post",data:e})},e.h=function(t){var e={data:t};return n.i(r.a)({url:"/resource/doDelete.json",method:"post",data:e})},e.c=function(t){var e={data:t};return n.i(r.a)({url:"/displayYxtg/queryActivityVOByGroupId.json",method:"post",data:e})},e.g=function(t){var e={data:t};return n.i(r.a)({url:"/displayYxtg/queryActivityPresentVOByactivityId.json",method:"post",data:e})},e.e=function(t){var e={data:t};return n.i(r.a)({url:"/activityUtil/queryActivityVOByGroupId.json",method:"post",data:e})},e.f=function(t){var e={data:t};return n.i(r.a)({url:"/activityUtil/queryActivityGroupVOByBrandId.json",method:"post",data:e})},e.b=function(t){var e={data:t};return n.i(r.a)({url:"/uploadReport/queryOrganizationDictList.json",method:"post",data:e})};var r=n("f+26")},t8x9:function(t,e,a){var r=a("77Pl"),o=a("lOnJ"),i=a("dSzd")("species");t.exports=function(t,e){var a,n=r(t).constructor;return void 0===n||null==(a=r(n)[i])?e:o(a)}},"xH/j":function(t,e,a){var r=a("hJx8");t.exports=function(t,e,a){for(var n in e)a&&t[n]?t[n]=e[n]:r(t,n,e[n]);return t}}});