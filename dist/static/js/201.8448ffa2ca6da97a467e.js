webpackJsonp([201],{"//Fk":function(t,a,e){t.exports={default:e("U5ju"),__esModule:!0}},"2KxR":function(t,a){t.exports=function(t,a,e,n){if(!(t instanceof a)||void 0!==n&&n in t)throw TypeError(e+": incorrect invocation!");return t}},"4mJk":function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,'.box[data-v-5d529a00]{width:100%;margin:0 auto;padding:0;background:#fff;min-width:1135px}button[data-v-5d529a00]{outline:none;list-style:none;border:0;cursor:pointer}button#success[data-v-5d529a00]{color:#19be6b;background:transparent}button#fail[data-v-5d529a00]{color:#ed3f14;background:transparent}button#primary[data-v-5d529a00]{color:#ff8a34;background:transparent}button.down[data-v-5d529a00],button.up[data-v-5d529a00]{color:#ff8a34}button.down[data-v-5d529a00]:after{content:"\\F116"}button.up[data-v-5d529a00]:after{content:"\\F124"}#bottonFather[data-v-5d529a00]{display:flex;justify-content:center;align-items:center}.lookDetail[data-v-5d529a00]{background:#febf00;border-color:#febf00;color:#fff}.ml20[data-v-5d529a00]{margin-left:20px}.w18[data-v-5d529a00]{width:17.5%}.w10[data-v-5d529a00]{width:12.5%}.w36[data-v-5d529a00]{width:35%}.fs12[data-v-5d529a00]{font-size:12px}.fs14[data-v-5d529a00]{font-size:14px}.fs16[data-v-5d529a00]{font-size:16px}.fs28[data-v-5d529a00]{font-size:28px}.text-center[data-v-5d529a00]{text-align:center}.block[data-v-5d529a00]{display:block}.container[data-v-5d529a00]:after{display:block;clear:both;content:"";visibility:hidden;height:0}.container[data-v-5d529a00]{zoom:1}.text-overflow[data-v-5d529a00]{display:inline-block;max-width:80%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}input[data-v-5d529a00]::-ms-input-placeholder{text-align:center!important}input[data-v-5d529a00]::-webkit-input-placeholder{text-align:center!important}.displayGroupPrimary[data-v-5d529a00]{color:#ff8a34}.demo-spin-icon-load[data-v-5d529a00]{animation:ani-demo-spin-data-v-5d529a00 1s linear infinite}@keyframes ani-demo-spin-data-v-5d529a00{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}#Main[data-v-5d529a00]{height:100%}#Main .main-container[data-v-5d529a00]{padding-top:10px;min-height:100%;position:relative;background:#fff;padding-bottom:60px;min-width:1135px}#Main .main-container .page-box[data-v-5d529a00]{overflow:hidden;position:absolute;bottom:10px;right:10px}#Main .main-container .searchBox[data-v-5d529a00]{overflow:hidden}#Main .main-container .searchBox .search-left[data-v-5d529a00],#Main .main-container .searchBox .search-right[data-v-5d529a00]{width:48%}#Main .main-container .searchBox .search-left button[data-v-5d529a00]{outline:none;border:none;width:60px;height:30px;line-height:30px;background:#fff;margin-left:8px;cursor:pointer;color:#ff8a34}#Main .main-container .searchBox .search-right[data-v-5d529a00]{width:52%}#Main .main-container .searchBox .search-right img[data-v-5d529a00]{cursor:pointer;margin-left:6px}#Main .main-container .numColor[data-v-5d529a00]{color:#ff8a34}.container[data-v-5d529a00]{display:flex;flex-direction:row}.container .timeBox[data-v-5d529a00]{width:60%;padding:0;margin:0;padding-right:10px}.container .timeBox .date-picker[data-v-5d529a00]{width:100%!important}.container .hourBox[data-v-5d529a00]{width:40%;padding:0;margin:0}',""])},"5TOB":function(t,a,e){"use strict";var n={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"timeBox"},[e("Date-picker",{staticClass:"date-picker",attrs:{placement:a.placement,disabled:a.dis,type:"date",placeholder:a.placeholder},on:{"on-change":a.changeTime},model:{value:a.yearData,callback:function(t){a.yearData=t},expression:"yearData"}})],1),a._v(" "),e("div",{staticClass:"hourBox"},[e("Select",{attrs:{disabled:a.dis,placeholder:"请选择时间"},on:{"on-change":a.changeTypeValue},model:{value:a.hourData,callback:function(t){a.hourData=t},expression:"hourData"}},a._l(a.dataList,function(t){return e("Option",{key:t.dataTime,attrs:{value:t.dataTime}},[a._v(a._s(t.dataTime))])}))],1)])},staticRenderFns:[]};a.a=n},"82Mu":function(t,a,e){var s=e("7KvD"),c=e("L42u").set,d=s.MutationObserver||s.WebKitMutationObserver,u=s.process,l=s.Promise,f="process"==e("R9M2")(u);t.exports=function(){var e,n,r,t=function(){var t,a;for(f&&(t=u.domain)&&t.exit();e;){a=e.fn,e=e.next;try{a()}catch(t){throw e?r():n=void 0,t}}n=void 0,t&&t.enter()};if(f)r=function(){u.nextTick(t)};else if(!d||s.navigator&&s.navigator.standalone)if(l&&l.resolve){var a=l.resolve(void 0);r=function(){a.then(t)}}else r=function(){c.call(s,t)};else{var i=!0,o=document.createTextNode("");new d(t).observe(o,{characterData:!0}),r=function(){o.data=i=!i}}return function(t){var a={fn:t,next:void 0};n&&(n.next=a),e||(e=a,r()),n=a}}},CXw9:function(t,a,e){"use strict";var n,r,i,o,s=e("O4g8"),c=e("7KvD"),d=e("+ZMJ"),u=e("RY/4"),l=e("kM2E"),f=e("EqjI"),h=e("lOnJ"),p=e("2KxR"),v=e("NWt+"),m=e("t8x9"),g=e("L42u").set,y=e("82Mu")(),b=e("qARP"),x=e("dNDb"),w=e("iUbK"),D=e("fJUb"),_="Promise",k=c.TypeError,T=c.process,M=T&&T.versions,j=M&&M.v8||"",B=c[_],E="process"==u(T),q=function(){},L=r=b.f,C=!!function(){try{var t=B.resolve(1),a=(t.constructor={})[e("dSzd")("species")]=function(t){t(q,q)};return(E||"function"==typeof PromiseRejectionEvent)&&t.then(q)instanceof a&&0!==j.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(t){}}(),S=function(t){var a;return!(!f(t)||"function"!=typeof(a=t.then))&&a},I=function(u,e){if(!u._n){u._n=!0;var n=u._c;y(function(){for(var c=u._v,d=1==u._s,t=0,a=function(t){var a,e,n,r=d?t.ok:t.fail,i=t.resolve,o=t.reject,s=t.domain;try{r?(d||(2==u._h&&R(u),u._h=1),!0===r?a=c:(s&&s.enter(),a=r(c),s&&(s.exit(),n=!0)),a===t.promise?o(k("Promise-chain cycle")):(e=S(a))?e.call(a,i,o):i(a)):o(c)}catch(t){s&&!n&&s.exit(),o(t)}};n.length>t;)a(n[t++]);u._c=[],u._n=!1,e&&!u._h&&P(u)})}},P=function(i){g.call(c,function(){var t,a,e,n=i._v,r=F(i);if(r&&(t=x(function(){E?T.emit("unhandledRejection",n,i):(a=c.onunhandledrejection)?a({promise:i,reason:n}):(e=c.console)&&e.error&&e.error("Unhandled promise rejection",n)}),i._h=E||F(i)?2:1),i._a=void 0,r&&t.e)throw t.v})},F=function(t){return 1!==t._h&&0===(t._a||t._c).length},R=function(a){g.call(c,function(){var t;E?T.emit("rejectionHandled",a):(t=c.onrejectionhandled)&&t({promise:a,reason:a._v})})},N=function(t){var a=this;a._d||(a._d=!0,(a=a._w||a)._v=t,a._s=2,a._a||(a._a=a._c.slice()),I(a,!0))},O=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw k("Promise can't be resolved itself");(e=S(t))?y(function(){var a={_w:n,_d:!1};try{e.call(t,d(O,a,1),d(N,a,1))}catch(t){N.call(a,t)}}):(n._v=t,n._s=1,I(n,!1))}catch(t){N.call({_w:n,_d:!1},t)}}};C||(B=function(t){p(this,B,_,"_h"),h(t),n.call(this);try{t(d(O,this,1),d(N,this,1))}catch(t){N.call(this,t)}},(n=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=e("xH/j")(B.prototype,{then:function(t,a){var e=L(m(this,B));return e.ok="function"!=typeof t||t,e.fail="function"==typeof a&&a,e.domain=E?T.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&I(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new n;this.promise=t,this.resolve=d(O,t,1),this.reject=d(N,t,1)},b.f=L=function(t){return t===B||t===o?new i(t):r(t)}),l(l.G+l.W+l.F*!C,{Promise:B}),e("e6n0")(B,_),e("bRrM")(_),o=e("FeBl")[_],l(l.S+l.F*!C,_,{reject:function(t){var a=L(this);return(0,a.reject)(t),a.promise}}),l(l.S+l.F*(s||!C),_,{resolve:function(t){return D(s&&this===o?B:this,t)}}),l(l.S+l.F*!(C&&e("dY0y")(function(t){B.all(t).catch(q)})),_,{all:function(t){var o=this,a=L(o),s=a.resolve,c=a.reject,e=x(function(){var n=[],r=0,i=1;v(t,!1,function(t){var a=r++,e=!1;n.push(void 0),i++,o.resolve(t).then(function(t){e||(e=!0,n[a]=t,--i||s(n))},c)}),--i||s(n)});return e.e&&c(e.v),a.promise},race:function(t){var a=this,e=L(a),n=e.reject,r=x(function(){v(t,!1,function(t){a.resolve(t).then(e.resolve,n)})});return r.e&&n(r.v),e.promise}})},EqBC:function(t,a,e){"use strict";var n=e("kM2E"),r=e("FeBl"),i=e("7KvD"),o=e("t8x9"),s=e("fJUb");n(n.P+n.R,"Promise",{finally:function(a){var e=o(this,r.Promise||i.Promise),t="function"==typeof a;return this.then(t?function(t){return s(e,a()).then(function(){return t})}:a,t?function(t){return s(e,a()).then(function(){throw t})}:a)}})},FSVQ:function(t,a,e){"use strict";var n=e("pFYg"),r=e.n(n);a.a={name:"dataRange",data:function(){return{dataList:[],yearData:this.time.slice(0,10),hourData:this.hour}},props:{time:{type:[String,Number,Date,Boolean]},placement:{type:String,default:"bottom"},hour:{type:String},dis:{type:Boolean,default:!1},placeholder:{type:String,default:"开始时间"}},created:function(){for(var t=0;t<=24;t++){var a=t<10?"0"+t:t;a+=":00",this.dataList.push({dataTime:a})}},watch:{time:{handler:function(t){var a=this;t||(this.hourData=this.hour),"string"==typeof t&&(this.yearData=t.slice(0,10),this.$nextTick(function(){a.hourData=t.slice(11,13)+":00"}))},immediate:!0}},computed:{},methods:{changeTime:function(t){t+=" 00:00:00",t=this.formateTime(t),this.$emit("dataChange",{time:t,hour:this.hourData})},changeTypeValue:function(t){var a=null;"object"==r()(this.yearData)?a=Date.parse(this.yearData):"string"==typeof this.yearData&&(a=this.yearData.split("-").join("/"),a=Date.parse(new Date(a))),this.$emit("dataChange",{time:a,hour:this.hourData})},formateTime:function(t){return t=t.replace(/-/g,"/"),new Date(t).getTime()}}}},"HUS/":function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,'.box[data-v-08af0136]{padding:0;min-width:1135px}button[data-v-08af0136]{outline:none;list-style:none;border:0;cursor:pointer}button#success[data-v-08af0136]{color:#19be6b;background:transparent}button#fail[data-v-08af0136]{color:#ed3f14;background:transparent}button#primary[data-v-08af0136]{color:#ff8a34;background:transparent}button.down[data-v-08af0136],button.up[data-v-08af0136]{color:#ff8a34}button.down[data-v-08af0136]:after{content:"\\F116"}button.up[data-v-08af0136]:after{content:"\\F124"}#bottonFather[data-v-08af0136]{display:flex;justify-content:center;align-items:center}.lookDetail[data-v-08af0136]{background:#febf00;border-color:#febf00;color:#fff}.ml20[data-v-08af0136]{margin-left:20px}.w18[data-v-08af0136]{width:17.5%}.w10[data-v-08af0136]{width:12.5%}.w36[data-v-08af0136]{width:35%}.fs12[data-v-08af0136]{font-size:12px}.fs14[data-v-08af0136]{font-size:14px}.fs16[data-v-08af0136]{font-size:16px}.fs28[data-v-08af0136]{font-size:28px}.text-center[data-v-08af0136]{text-align:center}.block[data-v-08af0136]{display:block}.container[data-v-08af0136]:after{display:block;clear:both;content:"";visibility:hidden;height:0}.container[data-v-08af0136]{zoom:1}.text-overflow[data-v-08af0136]{display:inline-block;max-width:80%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}input[data-v-08af0136]::-ms-input-placeholder{text-align:center!important}input[data-v-08af0136]::-webkit-input-placeholder{text-align:center!important}.displayGroupPrimary[data-v-08af0136]{color:#ff8a34}.demo-spin-icon-load[data-v-08af0136]{animation:ani-demo-spin-data-v-08af0136 1s linear infinite}@keyframes ani-demo-spin-data-v-08af0136{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}#Main[data-v-08af0136]{height:100%}#Main .main-container[data-v-08af0136]{padding-top:10px;min-height:100%;position:relative;background:#fff;padding-bottom:60px;min-width:1135px}#Main .main-container .page-box[data-v-08af0136]{overflow:hidden;position:absolute;bottom:10px;right:10px}#Main .main-container .searchBox[data-v-08af0136]{overflow:hidden}#Main .main-container .searchBox .search-left[data-v-08af0136],#Main .main-container .searchBox .search-right[data-v-08af0136]{width:48%}#Main .main-container .searchBox .search-left button[data-v-08af0136]{outline:none;border:none;width:60px;height:30px;line-height:30px;background:#fff;margin-left:8px;cursor:pointer;color:#ff8a34}#Main .main-container .searchBox .search-right[data-v-08af0136]{width:52%}#Main .main-container .searchBox .search-right img[data-v-08af0136]{cursor:pointer;margin-left:6px}#Main .main-container .numColor[data-v-08af0136]{color:#ff8a34}.box[data-v-08af0136]{width:100%;box-shadow:0 0 10px 2px rgba(0,0,0,.1);margin:0 auto;padding:30px 20px;padding-bottom:0;background:#fff}.ivu-date-picker[data-v-08af0136]{display:block}',""])},L42u:function(t,a,e){var n,r,i,o=e("+ZMJ"),s=e("knuC"),c=e("RPLV"),d=e("ON07"),u=e("7KvD"),l=u.process,f=u.setImmediate,h=u.clearImmediate,p=u.MessageChannel,v=u.Dispatch,m=0,g={},y="onreadystatechange",b=function(){var t=+this;if(g.hasOwnProperty(t)){var a=g[t];delete g[t],a()}},x=function(t){b.call(t.data)};f&&h||(f=function(t){for(var a=[],e=1;arguments.length>e;)a.push(arguments[e++]);return g[++m]=function(){s("function"==typeof t?t:Function(t),a)},n(m),m},h=function(t){delete g[t]},"process"==e("R9M2")(l)?n=function(t){l.nextTick(o(b,t,1))}:v&&v.now?n=function(t){v.now(o(b,t,1))}:p?(i=(r=new p).port2,r.port1.onmessage=x,n=o(i.postMessage,i,1)):u.addEventListener&&"function"==typeof postMessage&&!u.importScripts?(n=function(t){u.postMessage(t+"","*")},u.addEventListener("message",x,!1)):n=y in d("script")?function(t){c.appendChild(d("script"))[y]=function(){c.removeChild(this),b.call(t)}}:function(t){setTimeout(o(b,t,1),0)}),t.exports={set:f,clear:h}},"NWt+":function(t,a,e){var f=e("+ZMJ"),h=e("msXi"),p=e("Mhyx"),v=e("77Pl"),m=e("QRG4"),g=e("3fs2"),y={},b={};(a=t.exports=function(t,a,e,n,r){var i,o,s,c,d=r?function(){return t}:g(t),u=f(e,n,a?2:1),l=0;if("function"!=typeof d)throw TypeError(t+" is not iterable!");if(p(d)){for(i=m(t.length);l<i;l++)if((c=a?u(v(o=t[l])[0],o[1]):u(t[l]))===y||c===b)return c}else for(s=d.call(t);!(o=s.next()).done;)if((c=h(s,u,o.value,a))===y||c===b)return c}).BREAK=y,a.RETURN=b},ObmC:function(t,a,e){"use strict";var n={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"Main"}},[n("div",{staticClass:"box"},[n("Form",{ref:"form",attrs:{model:e.formData,"label-width":88,rules:e.rule}},[n("Row",[n("Col",{attrs:{span:"21"}},[n("Row",[n("Col",{attrs:{span:"16"}},[n("Form-item",{attrs:{label:"时间",required:""}},[n("Row",[n("Col",{attrs:{span:"11"}},[n("Form-item",{attrs:{prop:"queryStartTime"}},[n("data-range",{attrs:{hour:"00:00",time:e.formData.queryStartTime,start:""},on:{dataChange:e.startTimeChange}})],1)],1),e._v(" "),n("Col",{staticStyle:{"text-align":"center"},attrs:{span:"2"}},[e._v("至")]),e._v(" "),n("Col",{attrs:{span:"11"}},[n("Form-item",{attrs:{prop:"queryEndTime"}},[n("data-range",{attrs:{hour:"24:00",placeholder:"结束时间",time:e.formData.queryEndTime},on:{dataChange:e.endTimeChange}})],1)],1)],1)],1)],1),e._v(" "),n("Col",{attrs:{span:"8"}},[n("Form-item",{attrs:{label:"品牌名称:",prop:"brandId"}},[n("Select",{attrs:{placeholder:"请选择品牌",clearable:""},on:{"on-change":e.changeValue},model:{value:e.formData.brandId,callback:function(t){e.$set(e.formData,"brandId",t)},expression:"formData.brandId"}},e._l(e.brandList,function(t,a){return n("Option",{key:a,attrs:{value:t.id}},[e._v(e._s(t.brandName))])}))],1)],1),e._v(" "),n("Col",{attrs:{span:"24"}},[n("Row",[n("Col",{attrs:{span:"8"}},[n("Form-item",{attrs:{label:"活动包名:",prop:"groupId"}},[n("Select",{attrs:{placeholder:"请选择活动包名",clearable:""},on:{"on-change":e.getActivityList},model:{value:e.formData.groupId,callback:function(t){e.$set(e.formData,"groupId",t)},expression:"formData.groupId"}},e._l(e.groupList,function(t,a){return n("Option",{key:a,attrs:{value:t.id}},[e._v(e._s(t.groupName))])}))],1)],1),e._v(" "),n("Col",{attrs:{span:"8"}},[n("Form-item",{attrs:{label:"活动名称:",prop:"activityId"}},[n("Select",{attrs:{placeholder:"请选择活动",clearable:""},model:{value:e.formData.activityId,callback:function(t){e.$set(e.formData,"activityId",t)},expression:"formData.activityId"}},e._l(e.activityList,function(t,a){return n("Option",{key:a,attrs:{value:t.id}},[e._v(e._s(t.name))])}))],1)],1)],1)],1)],1)],1),e._v(" "),n("Col",{attrs:{span:"2",offset:"1"}},[n("Button",{staticClass:"btn-search",attrs:{type:"primary"},on:{click:function(t){e.submit("form")}}},[e._v("查询")])],1)],1)],1)],1),e._v(" "),n("div",{staticClass:"box",staticStyle:{"margin-top":"30px","padding-bottom":"20px"}},[n("div",{staticClass:"contentTop"},[n("Button",{staticClass:"btn-export",attrs:{icon:"ios-download-outline",type:"primary"},on:{click:e.exportExcel}},[e._v("导出")])],1),e._v(" "),n("Table",{attrs:{columns:e.columns1,data:e.pageData,"disabled-hover":""}}),e._v(" "),n("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[n("div",{staticStyle:{float:"right"}},[n("Page",{attrs:{total:e.pageNum,current:e.page},on:{"on-change":e.changePage}})],1)])],1)])},staticRenderFns:[]};a.a=n},U5ju:function(t,a,e){e("M6a0"),e("zQR9"),e("+tPU"),e("CXw9"),e("EqBC"),e("jKW+"),t.exports=e("FeBl").Promise},W3Iv:function(t,a,e){t.exports={default:e("wEtr"),__esModule:!0}},ZoQJ:function(t,a,e){"use strict";a.i=h,e.d(a,"h",function(){return p}),e.d(a,"g",function(){return v}),e.d(a,"f",function(){return m}),e.d(a,"c",function(){return b}),e.d(a,"a",function(){return x}),e.d(a,"j",function(){return w}),e.d(a,"b",function(){return D}),e.d(a,"d",function(){return _}),e.d(a,"k",function(){return k}),a.e=function(t){for(var a=0;a<t.length;a++)if(t[a].checked=!1,t[a].children)for(var e=0;e<t[a].children.length;e++)t[a].children[e].checked=!1};var n=e("BO1k"),r=(e.n(n),e("//Fk"));e.n(r),e("t5DY");function i(t){var a=new Date(Number(t)),e=a.getFullYear(),n=a.getMonth()+1;n=n<10?"0"+n:n;var r=a.getDate();return e+"-"+n+"-"+(r=r<10?"0"+r:r)+" 00:00:00"}var o,s=new Date,c=i(s.getTime()),d=i((o=(o=c).replace(/-/g,"/"),new Date(o).getTime()+864e5)),u=s.getFullYear(),l=s.getMonth()+1;l=l<10?"0"+l:l;var f=s.getDate();s.getDate();function h(t){var a=new Date,e=new Date;e.setDate(a.getDate()+t);var n=e.getMonth()<9?"0"+(e.getMonth()+1):e.getMonth()+1,r=e.getDate()<10?"0"+e.getDate():e.getDate();return e.getFullYear()+"-"+n+"-"+r}f=f<10?"0"+f:f;var p=h(-30)+" 00:00:00",v=h(-7)+" 00:00:00",m=h(0)+" 00:00:00",g=h(-3),y=u+"-"+l+"-"+f,b=y,x=(s.getHours(),s.getMinutes(),s.getSeconds(),v),w=g+" 00:00:00",D=y+" 24:00:00",_=y+" 00:00:00",k=d},a1LZ:function(t,a,e){"use strict";var n=e("FSVQ"),r=e("5TOB");var i=function(t){e("dBi9")},o=e("VU/8")(n.a,r.a,!1,i,"data-v-5d529a00",null);a.a=o.exports},aD3x:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("c3q1"),r=e("ObmC");var i=function(t){e("h43g")},o=e("VU/8")(n.a,r.a,!1,i,"data-v-08af0136",null);a.default=o.exports},bRrM:function(t,a,e){"use strict";var n=e("7KvD"),r=e("FeBl"),i=e("evD5"),o=e("+E39"),s=e("dSzd")("species");t.exports=function(t){var a="function"==typeof r[t]?r[t]:n[t];o&&a&&!a[s]&&i.f(a,s,{configurable:!0,get:function(){return this}})}},c3q1:function(t,a,e){"use strict";var n=e("W3Iv"),r=e.n(n),i=e("a1LZ"),o=(e("t5DY"),e("ZoQJ"));a.a={name:"prizeCity-keepAlive",data:function(){var r=this;return{brandList:[],groupList:[],start:{time:"",hour:""},end:{time:o.b,hour:"24:00"},formData:{queryStartTime:o.a,queryEndTime:o.b,activityId:"",brandId:"",groupId:""},page:1,pageNum:0,rule:{queryStartTime:[{validator:function(t,a,e){""==a?e(new Error("请输入开始时间")):(""!==r.formData.queryEndTime&&r.$refs.form.validateField("queryEndTime"),e())}}],queryEndTime:[{validator:function(t,a,e){if(""==a)e(new Error("请输入结束时间"));else{var n=new Date(r.formData.queryStartTime).getTime();new Date(a).getTime()<n?e(new Error("开始时间大于结束时间")):e()}}}]},columns1:[],defaultList:[{title:"省",key:"province",align:"center"},{title:"市",key:"city",align:"center"},{title:"用户数（去重）",key:"userNum",minWidth:200,align:"center"},{title:"参与量（汇总）",key:"sumWinNum",minWidth:200,align:"center"}],pageData:[],keyList:[],activityList:[]}},created:function(){var a=this;this.columns1=this.columns1.concat(this.defaultList),this.Global.doPostNoLoading("condition/queryBrands.json",{date:7,activityType:1,scope:"a",channel:"B"},function(t){a.brandList=[],r()(t).forEach(function(t){a.brandList.push({id:Number(t[0]),brandName:t[1]})}),a.brandList&&a.brandList.length&&(a.formData.brandId=a.brandList[0].id,a.changeValue(a.formData.brandId))})},components:{dataRange:i.a},methods:{getActivityList:function(t){var a=this;this.activityList=[],this.formData.activityId="",t&&this.Global.doPostNoLoading("condition/queryActivity.json",{date:7,activityType:1,scope:"a",groupId:t},function(t){r()(t).forEach(function(t){a.activityList.push({id:Number(t[0]),name:t[1]})})})},changeValue:function(t){var a=this;this.groupList=[],this.formData.groupId="",t&&this.Global.doPostNoLoading("condition/queryGroup.json",{activityType:1,scope:"a",brandId:t,channel:"B"},function(t){r()(t).forEach(function(t){a.groupList.push({id:Number(t[0]),groupName:t[1]})}),a.groupList&&a.groupList.length&&(a.formData.groupId=a.groupList[0].id,a.getActivityList(a.formData.groupId))})},startTimeChange:function(t){this.start.hour=t.hour,this.start.time=t.time,"24:00"!=t.hour&&(this.formData.queryStartTime=this.Global.setHoursData(t.time,t.hour))},endTimeChange:function(t){this.end.hour=t.hour,this.end.time=t.time,"24:00"!=t.hour&&(this.formData.queryEndTime=this.Global.setHoursData(t.time,t.hour))},submit:function(t){var a=this;this.$refs[t].validate(function(t){t?(a.page=1,a.init(a.page,10)):a.$Message.error("请选择查询条件!!")})},changePage:function(t){this.init(t,10)},init:function(t,a){var o=this,e=this.Global.JsonChange(this.formData);e.queryStartTime=this.Global.createTime(this.formData.queryStartTime),"24:00"==this.start.hour&&(e.queryStartTime=this.Global.setHoursData(this.start.time,this.start.hour)),e.queryEndTime=this.Global.createTime(this.formData.queryEndTime),"24:00"==this.end.hour&&(e.queryEndTime=this.Global.setHoursData(this.end.time,this.end.hour)),this.Global.deleteEmptyProperty(e),e.userType="B",e.currentPage=t,e.pageSize=a,e.level=2,console.log(e),this.Global.doPost("report/activityDailyReport.json",e,function(t){if(o.pageNum=t.items,o.page=t.page,o.columns1=[],o.columns1=o.columns1.concat(o.defaultList),0<t.datalist.length){var a=t.datalist[0].gMap;for(var e in a){var n={title:"",key:"",align:"center"};n.title=a[e],n.key=e,o.columns1.push(n),o.keyList.push(e)}}for(var r=0;r<t.datalist.length;r++)for(var i=0;i<o.keyList.length;i++)t.datalist[r].countWinMap&&(t.datalist[r][o.keyList[i]]=t.datalist[r].cWinMap[o.keyList[i]]);o.pageData=t.datalist})},exportExcel:function(){var t=this.Global.JsonChange(this.formData);t.queryStartTime=this.Global.createTime(this.formData.queryStartTime),"24:00"==this.start.hour&&(t.queryStartTime=this.Global.setHoursData(this.start.time,this.start.hour)),t.queryEndTime=this.Global.createTime(this.formData.queryEndTime),"24:00"==this.end.hour&&(t.queryEndTime=this.Global.setHoursData(this.end.time,this.end.hour)),this.Global.deleteEmptyProperty(t),t.userType="B",t.level=2;var a=this.Global.getExportUrl("report/activityDailyExport.json",t);window.open(a)}}}},dBi9:function(t,a,e){var n=e("4mJk");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("d4798972",n,!0,{})},dNDb:function(t,a){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},"f+26":function(t,a,e){"use strict";var n=e("//Fk"),r=e.n(n),i=e(4),o=e.n(i),s=e("NC6I"),c=(e.n(s),e("NHnr")),d=e("BK/k"),u=e("yt7g"),l=o.a.create({baseURL:d.a.dataServer,timeout:3e4}),f=d.a.dataServer+"activity/queryActivityList.json";l.interceptors.request.use(function(t){var a=u.a.getContext();return t.data.context=a,t.data.sign=u.a.getSign(a),t},function(t){r.a.reject(t)}),l.interceptors.response.use(function(t){if("MEMBER_NOT_LOGIN"!==t.data.errorMsg)return 1===t.data.status?f===t.config.url&&0===t.data.data.items?void c.default.$Message.warning("该品牌暂无陈列活动"):t.data:(c.default.$Message.error(t.data.errorMsg),t.data);sessionStorage.clear(),c.default.$router.replace("/")},function(t){return t&&t.response&&200!==t.response.status&&c.default.$Message.error("系统繁忙，请稍后再试"),console.log(t),r.a.reject(t)}),a.a=l},fJUb:function(t,a,e){var n=e("77Pl"),r=e("EqjI"),i=e("qARP");t.exports=function(t,a){if(n(t),r(a)&&a.constructor===t)return a;var e=i.f(t);return(0,e.resolve)(a),e.promise}},gSvA:function(t,a,e){var n=e("kM2E"),r=e("mbce")(!0);n(n.S,"Object",{entries:function(t){return r(t)}})},h43g:function(t,a,e){var n=e("HUS/");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("30423de4",n,!0,{})},iUbK:function(t,a,e){var n=e("7KvD").navigator;t.exports=n&&n.userAgent||""},"jKW+":function(t,a,e){"use strict";var n=e("kM2E"),r=e("qARP"),i=e("dNDb");n(n.S,"Promise",{try:function(t){var a=r.f(this),e=i(t);return(e.e?a.reject:a.resolve)(e.v),a.promise}})},knuC:function(t,a){t.exports=function(t,a,e){var n=void 0===e;switch(a.length){case 0:return n?t():t.call(e);case 1:return n?t(a[0]):t.call(e,a[0]);case 2:return n?t(a[0],a[1]):t.call(e,a[0],a[1]);case 3:return n?t(a[0],a[1],a[2]):t.call(e,a[0],a[1],a[2]);case 4:return n?t(a[0],a[1],a[2],a[3]):t.call(e,a[0],a[1],a[2],a[3])}return t.apply(e,a)}},mbce:function(t,a,e){var c=e("lktj"),d=e("TcQ7"),u=e("NpIQ").f;t.exports=function(s){return function(t){for(var a,e=d(t),n=c(e),r=n.length,i=0,o=[];i<r;)u.call(e,a=n[i++])&&o.push(s?[a,e[a]]:e[a]);return o}}},qARP:function(t,a,e){"use strict";var r=e("lOnJ");function n(t){var e,n;this.promise=new t(function(t,a){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=a}),this.resolve=r(e),this.reject=r(n)}t.exports.f=function(t){return new n(t)}},t5DY:function(t,a,n){"use strict";a.d=function(t,a){var e={data:{level:t,parentId:a}};return n.i(r.a)({url:"/areaDict/doQueryAll.json",method:"post",data:e})},a.a=function(){return n.i(r.a)({url:"/brand/doQueryWithPage.json",method:"post",data:{data:{status:1}}})},a.l=function(t){var a={data:{brandId:t,type:3}};return n.i(r.a)({url:"/activity/queryActivityList.json",method:"post",data:a})},a.k=function(t){var a={data:t};return n.i(r.a)({url:"/displayYxtg/queryActivityGroupVOByBrandId.json",method:"post",data:a})},a.j=function(t){var a={data:t};return n.i(r.a)({url:"/resource/getRoleResource.json",method:"post",data:a})},a.i=function(t){var a={data:t};return n.i(r.a)({url:"/resource/removeRoleResource.json",method:"post",data:a})},a.h=function(t){var a={data:t};return n.i(r.a)({url:"/resource/doDelete.json",method:"post",data:a})},a.c=function(t){var a={data:t};return n.i(r.a)({url:"/displayYxtg/queryActivityVOByGroupId.json",method:"post",data:a})},a.g=function(t){var a={data:t};return n.i(r.a)({url:"/displayYxtg/queryActivityPresentVOByactivityId.json",method:"post",data:a})},a.e=function(t){var a={data:t};return n.i(r.a)({url:"/activityUtil/queryActivityVOByGroupId.json",method:"post",data:a})},a.f=function(t){var a={data:t};return n.i(r.a)({url:"/activityUtil/queryActivityGroupVOByBrandId.json",method:"post",data:a})},a.b=function(t){var a={data:t};return n.i(r.a)({url:"/uploadReport/queryOrganizationDictList.json",method:"post",data:a})};var r=n("f+26")},t8x9:function(t,a,e){var r=e("77Pl"),i=e("lOnJ"),o=e("dSzd")("species");t.exports=function(t,a){var e,n=r(t).constructor;return void 0===n||null==(e=r(n)[o])?a:i(e)}},wEtr:function(t,a,e){e("gSvA"),t.exports=e("FeBl").Object.entries},"xH/j":function(t,a,e){var r=e("hJx8");t.exports=function(t,a,e){for(var n in a)e&&t[n]?t[n]=a[n]:r(t,n,a[n]);return t}}});