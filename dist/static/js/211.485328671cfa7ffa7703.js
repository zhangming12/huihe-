webpackJsonp([211],{"//Fk":function(t,e,a){t.exports={default:a("U5ju"),__esModule:!0}},"0IWn":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("be1W"),o=a("gx5I");var r=function(t){a("nG47")},i=a("VU/8")(n.a,o.a,!1,r,"data-v-bb3594e0",null);e.default=i.exports},"2KxR":function(t,e){t.exports=function(t,e,a,n){if(!(t instanceof e)||void 0!==n&&n in t)throw TypeError(a+": incorrect invocation!");return t}},"3FnR":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'.box[data-v-bb3594e0]{margin:0 auto;padding:0;min-width:1135px}button[data-v-bb3594e0]{outline:none;list-style:none;border:0;cursor:pointer}button#success[data-v-bb3594e0]{color:#19be6b;background:transparent}button#fail[data-v-bb3594e0]{color:#ed3f14;background:transparent}button#primary[data-v-bb3594e0]{color:#ff8a34;background:transparent}button.down[data-v-bb3594e0],button.up[data-v-bb3594e0]{color:#ff8a34}button.down[data-v-bb3594e0]:after{content:"\\F116"}button.up[data-v-bb3594e0]:after{content:"\\F124"}#bottonFather[data-v-bb3594e0]{display:flex;justify-content:center;align-items:center}.lookDetail[data-v-bb3594e0]{background:#febf00;border-color:#febf00;color:#fff}.ml20[data-v-bb3594e0]{margin-left:20px}.w18[data-v-bb3594e0]{width:17.5%}.w10[data-v-bb3594e0]{width:12.5%}.w36[data-v-bb3594e0]{width:35%}.fs12[data-v-bb3594e0]{font-size:12px}.fs14[data-v-bb3594e0]{font-size:14px}.fs16[data-v-bb3594e0]{font-size:16px}.fs28[data-v-bb3594e0]{font-size:28px}.text-center[data-v-bb3594e0]{text-align:center}.block[data-v-bb3594e0]{display:block}.container[data-v-bb3594e0]:after{display:block;clear:both;content:"";visibility:hidden;height:0}.container[data-v-bb3594e0]{zoom:1}.text-overflow[data-v-bb3594e0]{display:inline-block;max-width:80%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}input[data-v-bb3594e0]::-ms-input-placeholder{text-align:center!important}input[data-v-bb3594e0]::-webkit-input-placeholder{text-align:center!important}.displayGroupPrimary[data-v-bb3594e0]{color:#ff8a34}.demo-spin-icon-load[data-v-bb3594e0]{animation:ani-demo-spin-data-v-bb3594e0 1s linear infinite}@keyframes ani-demo-spin-data-v-bb3594e0{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}#Main[data-v-bb3594e0]{height:100%}#Main .main-container[data-v-bb3594e0]{padding-top:10px;min-height:100%;position:relative;background:#fff;padding-bottom:60px;min-width:1135px}#Main .main-container .page-box[data-v-bb3594e0]{overflow:hidden;position:absolute;bottom:10px;right:10px}#Main .main-container .searchBox[data-v-bb3594e0]{overflow:hidden}#Main .main-container .searchBox .search-left[data-v-bb3594e0],#Main .main-container .searchBox .search-right[data-v-bb3594e0]{width:48%}#Main .main-container .searchBox .search-left button[data-v-bb3594e0]{outline:none;border:none;width:60px;height:30px;line-height:30px;background:#fff;margin-left:8px;cursor:pointer;color:#ff8a34}#Main .main-container .searchBox .search-right[data-v-bb3594e0]{width:52%}#Main .main-container .searchBox .search-right img[data-v-bb3594e0]{cursor:pointer;margin-left:6px}#Main .main-container .numColor[data-v-bb3594e0]{color:#ff8a34}.box[data-v-bb3594e0]{width:100%;box-shadow:0 0 10px 2px rgba(0,0,0,.1);margin:0 auto 15px;padding:30px 20px 0;background:#fff}.ivu-radio-wrapper[data-v-bb3594e0]{margin-right:30px}.contentTop[data-v-bb3594e0]{overflow:hidden;margin-bottom:10px}.contentTop .export[data-v-bb3594e0]{height:24px;float:right}.contentTop .export div[data-v-bb3594e0]{background:#ff8a34;color:#fff;padding:3px 12px;border-bottom:0;cursor:pointer}.contentTop .export div i[data-v-bb3594e0]{margin-right:2px}.contentTop .upDate[data-v-bb3594e0]{float:right;border:1px solid #aeaeae;padding:2px 12px;margin-right:10px;color:#333;cursor:pointer}.contentTop .demo[data-v-bb3594e0]{float:right;color:#ff8a34;line-height:24px;cursor:pointer;margin-right:20px}.contentTop .demo span[data-v-bb3594e0]{text-decoration:underline}',""])},"4G/D":function(t,e,a){"use strict";e.a=function(t){var e={data:t};return a.i(n.a)({url:"worker/updateStatus.json",method:"post",data:e})};var n=a("f+26")},"82Mu":function(t,e,a){var s=a("7KvD"),l=a("L42u").set,c=s.MutationObserver||s.WebKitMutationObserver,u=s.process,d=s.Promise,p="process"==a("R9M2")(u);t.exports=function(){var a,n,o,t=function(){var t,e;for(p&&(t=u.domain)&&t.exit();a;){e=a.fn,a=a.next;try{e()}catch(t){throw a?o():n=void 0,t}}n=void 0,t&&t.enter()};if(p)o=function(){u.nextTick(t)};else if(!c||s.navigator&&s.navigator.standalone)if(d&&d.resolve){var e=d.resolve(void 0);o=function(){e.then(t)}}else o=function(){l.call(s,t)};else{var r=!0,i=document.createTextNode("");new c(t).observe(i,{characterData:!0}),o=function(){i.data=r=!r}}return function(t){var e={fn:t,next:void 0};n&&(n.next=e),a||(a=e,o()),n=e}}},"9bBU":function(t,e,a){a("mClu");var n=a("FeBl").Object;t.exports=function(t,e,a){return n.defineProperty(t,e,a)}},C4MV:function(t,e,a){t.exports={default:a("9bBU"),__esModule:!0}},CXw9:function(t,e,a){"use strict";var n,o,r,i,s=a("O4g8"),l=a("7KvD"),c=a("+ZMJ"),u=a("RY/4"),d=a("kM2E"),p=a("EqjI"),f=a("lOnJ"),v=a("2KxR"),h=a("NWt+"),b=a("t8x9"),m=a("L42u").set,g=a("82Mu")(),_=a("qARP"),x=a("dNDb"),w=a("iUbK"),k=a("fJUb"),M="Promise",y=l.TypeError,D=l.process,I=D&&D.versions,S=I&&I.v8||"",R=l[M],N="process"==u(D),F=function(){},O=o=_.f,T=!!function(){try{var t=R.resolve(1),e=(t.constructor={})[a("dSzd")("species")]=function(t){t(F,F)};return(N||"function"==typeof PromiseRejectionEvent)&&t.then(F)instanceof e&&0!==S.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(t){}}(),P=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},j=function(u,a){if(!u._n){u._n=!0;var n=u._c;g(function(){for(var l=u._v,c=1==u._s,t=0,e=function(t){var e,a,n,o=c?t.ok:t.fail,r=t.resolve,i=t.reject,s=t.domain;try{o?(c||(2==u._h&&E(u),u._h=1),!0===o?e=l:(s&&s.enter(),e=o(l),s&&(s.exit(),n=!0)),e===t.promise?i(y("Promise-chain cycle")):(a=P(e))?a.call(e,r,i):r(e)):i(l)}catch(t){s&&!n&&s.exit(),i(t)}};n.length>t;)e(n[t++]);u._c=[],u._n=!1,a&&!u._h&&B(u)})}},B=function(r){m.call(l,function(){var t,e,a,n=r._v,o=C(r);if(o&&(t=x(function(){N?D.emit("unhandledRejection",n,r):(e=l.onunhandledrejection)?e({promise:r,reason:n}):(a=l.console)&&a.error&&a.error("Unhandled promise rejection",n)}),r._h=N||C(r)?2:1),r._a=void 0,o&&t.e)throw t.v})},C=function(t){return 1!==t._h&&0===(t._a||t._c).length},E=function(e){m.call(l,function(){var t;N?D.emit("rejectionHandled",e):(t=l.onrejectionhandled)&&t({promise:e,reason:e._v})})},$=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),j(e,!0))},L=function(t){var a,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw y("Promise can't be resolved itself");(a=P(t))?g(function(){var e={_w:n,_d:!1};try{a.call(t,c(L,e,1),c($,e,1))}catch(t){$.call(e,t)}}):(n._v=t,n._s=1,j(n,!1))}catch(t){$.call({_w:n,_d:!1},t)}}};T||(R=function(t){v(this,R,M,"_h"),f(t),n.call(this);try{t(c(L,this,1),c($,this,1))}catch(t){$.call(this,t)}},(n=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=a("xH/j")(R.prototype,{then:function(t,e){var a=O(b(this,R));return a.ok="function"!=typeof t||t,a.fail="function"==typeof e&&e,a.domain=N?D.domain:void 0,this._c.push(a),this._a&&this._a.push(a),this._s&&j(this,!1),a.promise},catch:function(t){return this.then(void 0,t)}}),r=function(){var t=new n;this.promise=t,this.resolve=c(L,t,1),this.reject=c($,t,1)},_.f=O=function(t){return t===R||t===i?new r(t):o(t)}),d(d.G+d.W+d.F*!T,{Promise:R}),a("e6n0")(R,M),a("bRrM")(M),i=a("FeBl")[M],d(d.S+d.F*!T,M,{reject:function(t){var e=O(this);return(0,e.reject)(t),e.promise}}),d(d.S+d.F*(s||!T),M,{resolve:function(t){return k(s&&this===i?R:this,t)}}),d(d.S+d.F*!(T&&a("dY0y")(function(t){R.all(t).catch(F)})),M,{all:function(t){var i=this,e=O(i),s=e.resolve,l=e.reject,a=x(function(){var n=[],o=0,r=1;h(t,!1,function(t){var e=o++,a=!1;n.push(void 0),r++,i.resolve(t).then(function(t){a||(a=!0,n[e]=t,--r||s(n))},l)}),--r||s(n)});return a.e&&l(a.v),e.promise},race:function(t){var e=this,a=O(e),n=a.reject,o=x(function(){h(t,!1,function(t){e.resolve(t).then(a.resolve,n)})});return o.e&&n(o.v),a.promise}})},EqBC:function(t,e,a){"use strict";var n=a("kM2E"),o=a("FeBl"),r=a("7KvD"),i=a("t8x9"),s=a("fJUb");n(n.P+n.R,"Promise",{finally:function(e){var a=i(this,o.Promise||r.Promise),t="function"==typeof e;return this.then(t?function(t){return s(a,e()).then(function(){return t})}:e,t?function(t){return s(a,e()).then(function(){throw t})}:e)}})},L42u:function(t,e,a){var n,o,r,i=a("+ZMJ"),s=a("knuC"),l=a("RPLV"),c=a("ON07"),u=a("7KvD"),d=u.process,p=u.setImmediate,f=u.clearImmediate,v=u.MessageChannel,h=u.Dispatch,b=0,m={},g="onreadystatechange",_=function(){var t=+this;if(m.hasOwnProperty(t)){var e=m[t];delete m[t],e()}},x=function(t){_.call(t.data)};p&&f||(p=function(t){for(var e=[],a=1;arguments.length>a;)e.push(arguments[a++]);return m[++b]=function(){s("function"==typeof t?t:Function(t),e)},n(b),b},f=function(t){delete m[t]},"process"==a("R9M2")(d)?n=function(t){d.nextTick(i(_,t,1))}:h&&h.now?n=function(t){h.now(i(_,t,1))}:v?(r=(o=new v).port2,o.port1.onmessage=x,n=i(r.postMessage,r,1)):u.addEventListener&&"function"==typeof postMessage&&!u.importScripts?(n=function(t){u.postMessage(t+"","*")},u.addEventListener("message",x,!1)):n=g in c("script")?function(t){l.appendChild(c("script"))[g]=function(){l.removeChild(this),_.call(t)}}:function(t){setTimeout(i(_,t,1),0)}),t.exports={set:p,clear:f}},"NWt+":function(t,e,a){var p=a("+ZMJ"),f=a("msXi"),v=a("Mhyx"),h=a("77Pl"),b=a("QRG4"),m=a("3fs2"),g={},_={};(e=t.exports=function(t,e,a,n,o){var r,i,s,l,c=o?function(){return t}:m(t),u=p(a,n,e?2:1),d=0;if("function"!=typeof c)throw TypeError(t+" is not iterable!");if(v(c)){for(r=b(t.length);d<r;d++)if((l=e?u(h(i=t[d])[0],i[1]):u(t[d]))===g||l===_)return l}else for(s=c.call(t);!(i=s.next()).done;)if((l=f(s,u,i.value,e))===g||l===_)return l}).BREAK=g,e.RETURN=_},U5ju:function(t,e,a){a("M6a0"),a("zQR9"),a("+tPU"),a("CXw9"),a("EqBC"),a("jKW+"),t.exports=a("FeBl").Promise},W3Iv:function(t,e,a){t.exports={default:a("wEtr"),__esModule:!0}},bOdI:function(t,e,a){"use strict";e.__esModule=!0;var n,o=a("C4MV"),r=(n=o)&&n.__esModule?n:{default:n};e.default=function(t,e,a){return e in t?(0,r.default)(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}},bRrM:function(t,e,a){"use strict";var n=a("7KvD"),o=a("FeBl"),r=a("evD5"),i=a("+E39"),s=a("dSzd")("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:n[t];i&&e&&!e[s]&&r.f(e,s,{configurable:!0,get:function(){return this}})}},be1W:function(t,e,n){"use strict";var a=n("W3Iv"),o=n.n(a),r=n("bOdI"),s=n.n(r),l=n("4G/D"),c=n("BK/k");e.a={name:"list-keepAlive",data:function(){var t,i=this,a=this;return t={ruleInline:{},importShow:!1,importModelData:{brandList:[],brandId:"",userType:""},changeMessageData:{phone:"",workerName:"",salesRoute:""},changeMessage:!1,changeSaleRouteIsShow:!1,saleRouteData:{oldSaleRoute:"",newSaleRoute:"",workerId:"",brandId:""},uploadText:"上传参与业代名单",url:c.a.uploadWorkerExcel,uploadUrl:"",formData:{salesRoute:"",brandId:"",workerName:"",phone:"",bindStatus:"",status:""},formItem:{workerName:"",phone:""},page:1,pageSize:10,pageNum:0,rules:{},columns1:[{title:"品牌名称",key:"brandName",align:"center",minWidth:50},{title:"员工类型",key:"userType",align:"center",minWidth:50,render:function(t,e){return t("div",i.Global.ENUMS.userType[e.row.userType])}},{title:"员工编号",key:"salesRoute",align:"center",minWidth:50},{title:"系统员工ID",key:"workerId",align:"center",minWidth:70},{title:"业代姓名",key:"workerName",align:"center",minWidth:50},{title:"手机号码",key:"phone",align:"center",minWidth:50},{title:"锁定状态",key:"status",align:"center",minWidth:50,render:function(t,e){var a="";switch(e.row.status){case 0:a="锁定";break;case 1:a="解锁";break;case 2:a="软删除";break;default:a=""}return t("div",a)}},{title:"状态",key:"bindStatus",align:"center",minWidth:50,render:function(t,e){return t("div",i.Global.ENUMS.workerType[e.row.bindStatus])}},{title:"操作",key:"action",align:"center",width:300,render:function(t,r){var e=[t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){i.$Modal.confirm({title:"警告",content:"确定删除该业务员？",onOk:function(){a.userBlack(r.row.brandId,r.row.workerId)}})}}},"删除")];return 1==r.row.bindStatus&&e.push(t("Button",{props:{type:"success",size:"small"},style:{marginRight:"5px"},on:{click:function(){var t=r.row,e=t.brandId,a=t.workerId,n=t.workerName,o=t.phone;i.showUnlock=!0,i.formItem={workerName:n,phone:o,brandId:e,workerId:a}}}},"解绑")),1==r.row.status?e.push(t("Button",{props:{type:"info",size:"small"},on:{click:function(){i.$Modal.confirm({title:"警告",content:"确定锁定该业务员？",onOk:function(){var t={workerId:r.row.workerId,status:0,brandId:r.row.brandId};n.i(l.a)(t).then(function(t){t&&1==t.status&&a.init()})}})}}},"锁定")):0==r.row.status&&e.push(t("Button",{props:{type:"info",size:"small"},on:{click:function(){i.$Modal.confirm({title:"警告",content:"确定解锁该业务员？",onOk:function(){var t={workerId:r.row.workerId,status:1,brandId:r.row.brandId};n.i(l.a)(t).then(function(t){t&&1==t.status&&a.init()})}})}}},"解锁")),e.push(t("Button",{props:{type:"info",size:"small"},style:{marginLeft:"5px"},on:{click:function(){i.changeMessageMethod(r.row)}}},"修改")),t("div",e)}}],pageData:[]},s()(t,"page",1),s()(t,"pageNum",0),s()(t,"brandList",[]),s()(t,"showUnlock",!1),t},created:function(){var e=this;this.Global.doPostNoLoading("condition/queryBrands.json",{},function(t){e.brandList=[],o()(t).forEach(function(t){e.brandList.push({id:Number(t[0]),brandName:t[1]})}),e.importModelData.brandList=e.brandList,e.brandList&&e.brandList.length&&(e.formData.brandId=e.brandList[0].id,e.importModelData.brandId=e.brandList[0].id,e.init())})},watch:{changeMessage:function(t){t||(this.changeMessageData={})}},methods:{imortModel:function(){this.importShow=!0},sureChangeMessageList:function(t){var e=this;if(!this.changeMessageData.workerName||!this.changeMessageData.userType||!this.changeMessageData.phone)return this.$Message.error("员工姓名、员工类型、员工电话不能为空"),!1;if(!this.Global.checkPhone(this.changeMessageData.phone))return this.$Message.error("手机号码格式不对"),!1;var a=this.Global.JsonChange(this.changeMessageData);this.changeMessageData.salesRoute||(a.salesRoute="无"),delete a.brandName,this.Global.doPost("worker/updateWorkerInfo.json",a,function(t){e.changeMessage=!1,e.$Message.success("修改成功"),e.init()})},changeMessageMethod:function(t){this.changeMessageData={},this.changeMessageData={brandId:t.brandId,brandName:t.brandName,workerId:t.workerId,phone:t.phone,workerName:t.workerName,salesRoute:t.salesRoute,userType:t.userType},this.changeMessage=!0},cancel:function(){this.changeSaleRouteIsShow=!1,this.changeMessage=!1,this.importShow=!1,this.importModelData.userType="",this.changeMessageData={phone:"",workerName:"",salesRoute:""}},uploadExcel:function(){var t=this;if(!this.importModelData.userType)return this.$Message.error("请选择角色类型"),!1;if(!this.uploadUrl)return this.$Message.error("请核实上传文件"),!1;var e={loadFilePath:this.uploadUrl,brandId:this.importModelData.brandId,userType:this.importModelData.userType};this.Global.doPost("worker/brandWorkerImport.json",e,function(){t.init(),t.$Message.success("导入成功"),t.importShow=!1,t.uploadText="上传参与业代名单"})},dowland:function(){window.open("https://hbrand.oss-cn-hangzhou.aliyuncs.com/demo/brandWorkerInfo.xlsx")},handleError:function(){},handleSuccess:function(t,e,a){this.uploadText=e.name;var n=t.data;n&&(this.uploadUrl=n)},submit:function(t){var e=this;this.$refs[t].validate(function(t){t?(e.page=1,e.init()):e.$Message.error("请选择查询条件!!")})},changePage:function(t){this.page=t,this.init()},userBlack:function(t,e){var a=this;this.Global.doPost("worker/updateStatus.json",{brandId:t,workerId:e,status:2},function(){a.init(),a.$Message.success("成功")})},userBind:function(t){var e=this;this.Global.doPost("worker/unBindWorker.json",{brandId:this.formItem.brandId,workerId:this.formItem.workerId,bindStatus:0},function(){e.$Message.success("解绑成功"),e.init()})},init:function(){var e=this,t=this.Global.JsonChange(this.formData);this.Global.deleteEmptyProperty(t),t.currentPage=this.page,t.pageSize=this.pageSize,this.Global.doPost("worker/queryWorkerActivityReport.json",t,function(t){e.pageNum=t.items,e.page=t.page,e.pageData=t.datalist})},exportExcel:function(){var t=this.Global.JsonChange(this.formData);this.Global.deleteEmptyProperty(t);var e=this.Global.getExportUrl("worker/queryWorkerActivityReportExport.json",t);window.open(e)}}}},dNDb:function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},"f+26":function(t,e,a){"use strict";var n=a("//Fk"),o=a.n(n),r=a(4),i=a.n(r),s=a("NC6I"),l=(a.n(s),a("NHnr")),c=a("BK/k"),u=a("yt7g"),d=i.a.create({baseURL:c.a.dataServer,timeout:3e4}),p=c.a.dataServer+"activity/queryActivityList.json";d.interceptors.request.use(function(t){var e=u.a.getContext();return t.data.context=e,t.data.sign=u.a.getSign(e),t},function(t){o.a.reject(t)}),d.interceptors.response.use(function(t){if("MEMBER_NOT_LOGIN"!==t.data.errorMsg)return 1===t.data.status?p===t.config.url&&0===t.data.data.items?void l.default.$Message.warning("该品牌暂无陈列活动"):t.data:(l.default.$Message.error(t.data.errorMsg),t.data);sessionStorage.clear(),l.default.$router.replace("/")},function(t){return t&&t.response&&200!==t.response.status&&l.default.$Message.error("系统繁忙，请稍后再试"),console.log(t),o.a.reject(t)}),e.a=d},fJUb:function(t,e,a){var n=a("77Pl"),o=a("EqjI"),r=a("qARP");t.exports=function(t,e){if(n(t),o(e)&&e.constructor===t)return e;var a=r.f(t);return(0,a.resolve)(e),a.promise}},gSvA:function(t,e,a){var n=a("kM2E"),o=a("mbce")(!0);n(n.S,"Object",{entries:function(t){return o(t)}})},gx5I:function(t,e,a){"use strict";var n={render:function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{attrs:{id:"Main"}},[n("div",{staticClass:"box"},[n("Form",{ref:"form",attrs:{model:a.formData,"label-width":88,rules:a.rules}},[n("Row",[n("Col",{attrs:{span:"7"}},[n("Form-item",{attrs:{label:"品牌名称:",prop:"brandId"}},[n("Select",{attrs:{placeholder:"请选择"},model:{value:a.formData.brandId,callback:function(t){a.$set(a.formData,"brandId",t)},expression:"formData.brandId"}},a._l(a.brandList,function(t,e){return n("Option",{key:e,attrs:{value:t.id}},[a._v(a._s(t.brandName))])}))],1),a._v(" "),n("Form-item",{attrs:{label:"销售路线:",prop:"salesRoute"}},[n("Input",{attrs:{placeholder:"请输入销售路线"},model:{value:a.formData.salesRoute,callback:function(t){a.$set(a.formData,"salesRoute",t)},expression:"formData.salesRoute"}})],1)],1),a._v(" "),n("Col",{attrs:{span:"7"}},[n("Form-item",{attrs:{label:"业代姓名:",prop:"workerName"}},[n("Input",{attrs:{placeholder:"请输入业代姓名"},model:{value:a.formData.workerName,callback:function(t){a.$set(a.formData,"workerName",t)},expression:"formData.workerName"}})],1),a._v(" "),n("Form-item",{attrs:{label:"账号状态:"}},[n("Radio-group",{model:{value:a.formData.status,callback:function(t){a.$set(a.formData,"status",t)},expression:"formData.status"}},[n("Radio",{attrs:{label:""}},[a._v("全部")]),a._v(" "),n("Radio",{attrs:{label:"0"}},[a._v("锁定")]),a._v(" "),n("Radio",{attrs:{label:"1"}},[a._v("解锁")])],1)],1)],1),a._v(" "),n("Col",{attrs:{span:"7"}},[n("Form-item",{attrs:{label:"手机号码:",prop:"phone"}},[n("Input",{attrs:{placeholder:"请输入手机号码"},model:{value:a.formData.phone,callback:function(t){a.$set(a.formData,"phone",t)},expression:"formData.phone"}})],1),a._v(" "),n("Form-item",{attrs:{label:"状态:",prop:"bindStatus"}},[n("Radio-group",{model:{value:a.formData.bindStatus,callback:function(t){a.$set(a.formData,"bindStatus",t)},expression:"formData.bindStatus"}},[n("Radio",{attrs:{label:""}},[a._v("全部")]),a._v(" "),n("Radio",{attrs:{label:"1"}},[a._v("已绑定")]),a._v(" "),n("Radio",{attrs:{label:"0"}},[a._v("未绑定")])],1)],1)],1),a._v(" "),n("Col",{staticStyle:{"margin-top":"28px"},attrs:{span:"2",offset:"1"}},[n("Button",{staticClass:"btn-search",attrs:{type:"primary"},on:{click:function(t){a.submit("form")}}},[a._v("查询")])],1)],1)],1)],1),a._v(" "),n("div",{staticClass:"box",staticStyle:{"margin-top":"15px",overflow:"hidden"}},[n("div",{staticClass:"contentTop"},[n("Button",{staticClass:"btn-export",attrs:{icon:"ios-download-outline",type:"primary"},on:{click:a.exportExcel}},[a._v("导出")]),a._v(" "),n("Button",{staticClass:"btn-export",attrs:{icon:"android-add",type:"info"},on:{click:a.imortModel}},[a._v("导入")]),a._v(" "),n("div",{staticClass:"demo",on:{click:a.dowland}},[n("Icon",{attrs:{type:"ios-paper-outline",size:"14",color:"#ff8a34"}}),a._v(" "),n("span",[a._v("下载模版")])],1)],1),a._v(" "),n("Table",{attrs:{columns:a.columns1,data:a.pageData,"disabled-hover":""}}),a._v(" "),n("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[n("div",{staticStyle:{float:"right"}},[n("Page",{attrs:{total:a.pageNum,current:a.page},on:{"on-change":a.changePage}})],1)])],1),a._v(" "),n("Modal",{attrs:{title:"确定解绑该业务员？","class-name":"vertical-center-modal"},on:{"on-ok":a.userBind},model:{value:a.showUnlock,callback:function(t){a.showUnlock=t},expression:"showUnlock"}},[n("Form",{attrs:{model:a.formItem,"label-width":90}},[n("FormItem",{attrs:{label:"姓名"}},[n("Input",{model:{value:a.formItem.workerName,callback:function(t){a.$set(a.formItem,"workerName",t)},expression:"formItem.workerName"}})],1),a._v(" "),n("FormItem",{attrs:{label:"手机号"}},[n("Input",{model:{value:a.formItem.phone,callback:function(t){a.$set(a.formItem,"phone",t)},expression:"formItem.phone"}})],1)],1)],1),a._v(" "),n("Modal",{model:{value:a.changeSaleRouteIsShow,callback:function(t){a.changeSaleRouteIsShow=t},expression:"changeSaleRouteIsShow"}},[a.saleRouteData.oldSaleRoute?n("h2",{staticStyle:{"text-align":"center"}},[a._v("更改销售路线")]):n("h2",{staticStyle:{"text-align":"center"}},[a._v("设置销售路线")]),a._v(" "),n("i-Form",[a.saleRouteData.oldSaleRoute?n("Form-item",{attrs:{label:"原销售路线"}},[n("Input",{attrs:{readonly:a.saleRouteData.oldSaleRoute},model:{value:a.saleRouteData.oldSaleRoute,callback:function(t){a.$set(a.saleRouteData,"oldSaleRoute",t)},expression:"saleRouteData.oldSaleRoute"}})],1):a._e(),a._v(" "),n("Form-item",{attrs:{label:"新销售路线"}},[n("Input",{model:{value:a.saleRouteData.newSaleRoute,callback:function(t){a.$set(a.saleRouteData,"newSaleRoute",t)},expression:"saleRouteData.newSaleRoute"}})],1)],1),a._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"text"},on:{click:a.cancel}},[a._v("取消")]),a._v(" "),n("Button",{attrs:{type:"success"},on:{click:function(t){a.sureChangeSaleRoute(t)}}},[a._v("确定")])],1)],1),a._v(" "),n("Modal",{model:{value:a.changeMessage,callback:function(t){a.changeMessage=t},expression:"changeMessage"}},[n("h2",{staticStyle:{"text-align":"center"}},[a._v("修改信息")]),a._v(" "),n("i-Form",{ref:"checkMes",attrs:{"label-width":75,rules:a.ruleInline}},[n("Form-item",{attrs:{label:"品牌名称:"}},[a._v("\n          "+a._s(a.changeMessageData.brandName)+"\n        ")]),a._v(" "),n("Form-item",{attrs:{label:"员工ID:"}},[a._v("\n          "+a._s(a.changeMessageData.workerId)+"\n        ")]),a._v(" "),n("Form-item",{attrs:{label:"员工姓名:",prop:"workerName"}},[n("Input",{model:{value:a.changeMessageData.workerName,callback:function(t){a.$set(a.changeMessageData,"workerName",t)},expression:"changeMessageData.workerName"}})],1),a._v(" "),n("Form-item",{attrs:{label:"员工编号:",prop:"salesRoute"}},[n("Input",{model:{value:a.changeMessageData.salesRoute,callback:function(t){a.$set(a.changeMessageData,"salesRoute",t)},expression:"changeMessageData.salesRoute"}})],1),a._v(" "),n("Form-item",{attrs:{label:"员工类型:",prop:"userType"}},[n("Select",{attrs:{placeholder:"请选择"},model:{value:a.changeMessageData.userType,callback:function(t){a.$set(a.changeMessageData,"userType",t)},expression:"changeMessageData.userType"}},[n("Option",{attrs:{value:"PI"}},[a._v("巡检员")]),a._v(" "),n("Option",{attrs:{value:"W"}},[a._v("品牌业务员")]),a._v(" "),n("Option",{attrs:{value:"C"}},[a._v("C端客户")]),a._v(" "),n("Option",{attrs:{value:"DM"}},[a._v("主任")]),a._v(" "),n("Option",{attrs:{value:"LM"}},[a._v("配送员")]),a._v(" "),n("Option",{attrs:{value:"CL"}},[a._v("公司领导")]),a._v(" "),n("Option",{attrs:{value:"ES"}},[a._v("内部员工")]),a._v(" "),n("Option",{attrs:{value:"FS"}},[a._v("工厂员工")]),a._v(" "),n("Option",{attrs:{value:"HX"}},[a._v("核销员")]),a._v(" "),n("Option",{attrs:{value:"M"}},[a._v("经销商")]),a._v(" "),n("Option",{attrs:{value:"Z"}},[a._v("公仔")])],1)],1),a._v(" "),n("Form-item",{attrs:{label:"手机号码:",prop:"phone"}},[n("Input",{model:{value:a.changeMessageData.phone,callback:function(t){a.$set(a.changeMessageData,"phone",t)},expression:"changeMessageData.phone"}})],1)],1),a._v(" "),n("div",{staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"text"},on:{click:a.cancel}},[a._v("取消")]),a._v(" "),n("Button",{attrs:{type:"success"},on:{click:function(t){a.sureChangeMessageList("checkMes")}}},[a._v("确定")])],1)],1),a._v(" "),n("Modal",{model:{value:a.importShow,callback:function(t){a.importShow=t},expression:"importShow"}},[n("h2",{staticStyle:{"text-align":"center"}},[a._v("上传参与业代名单")]),a._v(" "),n("i-Form",[n("Form-item",{attrs:{label:"品牌名称:",prop:"brandId","label-width":72}},[n("Select",{attrs:{placeholder:"请选择"},model:{value:a.importModelData.brandId,callback:function(t){a.$set(a.importModelData,"brandId",t)},expression:"importModelData.brandId"}},a._l(a.importModelData.brandList,function(t,e){return n("Option",{key:e,attrs:{value:t.id}},[a._v(a._s(t.brandName))])}))],1),a._v(" "),n("Form-item",{attrs:{label:"员工类型:",prop:"userType","label-width":72}},[n("Select",{attrs:{placeholder:"请选择"},model:{value:a.importModelData.userType,callback:function(t){a.$set(a.importModelData,"userType",t)},expression:"importModelData.userType"}},[n("Option",{attrs:{value:"PI"}},[a._v("巡检员")]),a._v(" "),n("Option",{attrs:{value:"W"}},[a._v("品牌业务员")]),a._v(" "),n("Option",{attrs:{value:"C"}},[a._v("C端客户")]),a._v(" "),n("Option",{attrs:{value:"DM"}},[a._v("主任")]),a._v(" "),n("Option",{attrs:{value:"LM"}},[a._v("配送员")]),a._v(" "),n("Option",{attrs:{value:"CL"}},[a._v("公司领导")]),a._v(" "),n("Option",{attrs:{value:"ES"}},[a._v("内部员工")]),a._v(" "),n("Option",{attrs:{value:"FS"}},[a._v("工厂员工")]),a._v(" "),n("Option",{attrs:{value:"HX"}},[a._v("核销员")]),a._v(" "),n("Option",{attrs:{value:"M"}},[a._v("经销商")]),a._v(" "),n("Option",{attrs:{value:"Z"}},[a._v("公仔")])],1)],1),a._v(" "),n("div",{staticClass:"upDate",staticStyle:{cursor:"pointer","text-align":"center",border:"1px solid #aeaeae",padding:"2px 12px","margin-right":"10px",width:"150px"}},[n("Upload",{attrs:{action:a.url,"show-upload-list":!1,"on-success":a.handleSuccess,"on-error":a.handleError}},[n("Icon",{attrs:{type:"ios-folder",size:"14",color:"#53a3f4"}}),a._v("\n              "+a._s(a.uploadText)+"\n            ")],1)],1)],1),a._v(" "),n("div",{staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"text"},on:{click:a.cancel}},[a._v("取消")]),a._v(" "),n("Button",{attrs:{type:"success"},on:{click:a.uploadExcel}},[a._v("确定")])],1)],1)],1)},staticRenderFns:[]};e.a=n},iUbK:function(t,e,a){var n=a("7KvD").navigator;t.exports=n&&n.userAgent||""},"jKW+":function(t,e,a){"use strict";var n=a("kM2E"),o=a("qARP"),r=a("dNDb");n(n.S,"Promise",{try:function(t){var e=o.f(this),a=r(t);return(a.e?e.reject:e.resolve)(a.v),e.promise}})},knuC:function(t,e){t.exports=function(t,e,a){var n=void 0===a;switch(e.length){case 0:return n?t():t.call(a);case 1:return n?t(e[0]):t.call(a,e[0]);case 2:return n?t(e[0],e[1]):t.call(a,e[0],e[1]);case 3:return n?t(e[0],e[1],e[2]):t.call(a,e[0],e[1],e[2]);case 4:return n?t(e[0],e[1],e[2],e[3]):t.call(a,e[0],e[1],e[2],e[3])}return t.apply(a,e)}},mClu:function(t,e,a){var n=a("kM2E");n(n.S+n.F*!a("+E39"),"Object",{defineProperty:a("evD5").f})},mbce:function(t,e,a){var l=a("lktj"),c=a("TcQ7"),u=a("NpIQ").f;t.exports=function(s){return function(t){for(var e,a=c(t),n=l(a),o=n.length,r=0,i=[];r<o;)u.call(a,e=n[r++])&&i.push(s?[e,a[e]]:a[e]);return i}}},nG47:function(t,e,a){var n=a("3FnR");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("0c0446d5",n,!0,{})},qARP:function(t,e,a){"use strict";var o=a("lOnJ");function n(t){var a,n;this.promise=new t(function(t,e){if(void 0!==a||void 0!==n)throw TypeError("Bad Promise constructor");a=t,n=e}),this.resolve=o(a),this.reject=o(n)}t.exports.f=function(t){return new n(t)}},t8x9:function(t,e,a){var o=a("77Pl"),r=a("lOnJ"),i=a("dSzd")("species");t.exports=function(t,e){var a,n=o(t).constructor;return void 0===n||null==(a=o(n)[i])?e:r(a)}},wEtr:function(t,e,a){a("gSvA"),t.exports=a("FeBl").Object.entries},"xH/j":function(t,e,a){var o=a("hJx8");t.exports=function(t,e,a){for(var n in e)a&&t[n]?t[n]=e[n]:o(t,n,e[n]);return t}}});