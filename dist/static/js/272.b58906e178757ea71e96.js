webpackJsonp([272],{"8Lzi":function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,'.box[data-v-194d0ad6]{padding:0;min-width:1135px}button[data-v-194d0ad6]{outline:none;list-style:none;border:0;cursor:pointer}button#success[data-v-194d0ad6]{color:#19be6b;background:transparent}button#fail[data-v-194d0ad6]{color:#ed3f14;background:transparent}button#primary[data-v-194d0ad6]{color:#ff8a34;background:transparent}button.down[data-v-194d0ad6],button.up[data-v-194d0ad6]{color:#ff8a34}button.down[data-v-194d0ad6]:after{content:"\\F116"}button.up[data-v-194d0ad6]:after{content:"\\F124"}#bottonFather[data-v-194d0ad6]{display:flex;justify-content:center;align-items:center}.lookDetail[data-v-194d0ad6]{background:#febf00;border-color:#febf00;color:#fff}.ml20[data-v-194d0ad6]{margin-left:20px}.w18[data-v-194d0ad6]{width:17.5%}.w10[data-v-194d0ad6]{width:12.5%}.w36[data-v-194d0ad6]{width:35%}.fs12[data-v-194d0ad6]{font-size:12px}.fs14[data-v-194d0ad6]{font-size:14px}.fs16[data-v-194d0ad6]{font-size:16px}.fs28[data-v-194d0ad6]{font-size:28px}.text-center[data-v-194d0ad6]{text-align:center}.block[data-v-194d0ad6]{display:block}.container[data-v-194d0ad6]:after{display:block;clear:both;content:"";visibility:hidden;height:0}.container[data-v-194d0ad6]{zoom:1}.text-overflow[data-v-194d0ad6]{display:inline-block;max-width:80%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}input[data-v-194d0ad6]::-ms-input-placeholder{text-align:center!important}input[data-v-194d0ad6]::-webkit-input-placeholder{text-align:center!important}.displayGroupPrimary[data-v-194d0ad6]{color:#ff8a34}.demo-spin-icon-load[data-v-194d0ad6]{animation:ani-demo-spin-data-v-194d0ad6 1s linear infinite}@keyframes ani-demo-spin-data-v-194d0ad6{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}#Main[data-v-194d0ad6]{height:100%}#Main .main-container[data-v-194d0ad6]{padding-top:10px;min-height:100%;position:relative;background:#fff;padding-bottom:60px;min-width:1135px}#Main .main-container .page-box[data-v-194d0ad6]{overflow:hidden;position:absolute;bottom:10px;right:10px}#Main .main-container .searchBox[data-v-194d0ad6]{overflow:hidden}#Main .main-container .searchBox .search-left[data-v-194d0ad6],#Main .main-container .searchBox .search-right[data-v-194d0ad6]{width:48%}#Main .main-container .searchBox .search-left button[data-v-194d0ad6]{outline:none;border:none;width:60px;height:30px;line-height:30px;background:#fff;margin-left:8px;cursor:pointer;color:#ff8a34}#Main .main-container .searchBox .search-right[data-v-194d0ad6]{width:52%}#Main .main-container .searchBox .search-right img[data-v-194d0ad6]{cursor:pointer;margin-left:6px}#Main .main-container .numColor[data-v-194d0ad6]{color:#ff8a34}.box[data-v-194d0ad6]{width:100%;box-shadow:0 0 10px 2px rgba(0,0,0,.1);margin:0 auto;padding:30px 20px;padding-bottom:0;background:#fff;overflow:hidden}.ivu-table-row[data-v-194d0ad6]{box-shadow:0 0 5px 2px rgba(0,0,0,.1)!important;transform:translateY(0)}#imgBox[data-v-194d0ad6]{height:120px;display:table;line-height:120px}#imgBox span[data-v-194d0ad6]{display:inline-block;width:80px}#imgBox .changeImg[data-v-194d0ad6]{width:150px;height:120px;display:table-cell;vertical-align:middle;transform:translateX(20px);border:1px solid #efefef}#imgBox .changeImg img[data-v-194d0ad6]{width:150px;height:120px;display:block}#imgBox p[data-v-194d0ad6]{display:inline-block}footer[data-v-194d0ad6]{text-align:center;margin:40px 0 20px}',""])},BHQ5:function(t,a){var s;s=Crypto.util,Crypto.HMAC=function(t,a,e,r){for(var o=e=e.length>4*t._blocksize?t(e,{asBytes:!0}):s.stringToBytes(e),n=e.slice(0),i=0;i<4*t._blocksize;i++)o[i]^=92,n[i]^=54;var d=t(s.bytesToString(o)+t(s.bytesToString(n)+a,{asString:!0}),{asBytes:!0});return r&&r.asBytes?d:r&&r.asString?s.bytesToString(d):s.bytesToHex(d)}},"Il6+":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e("wJyR"),o=e("NGNR");var n=function(t){e("iuSy")},i=e("VU/8")(r.a,o.a,!1,n,"data-v-194d0ad6",null);a.default=i.exports},LTBv:function(t,a){!function(){var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";window.Crypto={};var n=Crypto.util={rotl:function(t,a){return t<<a|t>>>32-a},rotr:function(t,a){return t<<32-a|t>>>a},endian:function(t){if(t.constructor==Number)return 16711935&n.rotl(t,8)|4278255360&n.rotl(t,24);for(var a=0;a<t.length;a++)t[a]=n.endian(t[a]);return t},randomBytes:function(t){for(var a=[];0<t;t--)a.push(Math.floor(256*Math.random()));return a},stringToBytes:function(t){for(var a=[],e=0;e<t.length;e++)a.push(t.charCodeAt(e));return a},bytesToString:function(t){for(var a=[],e=0;e<t.length;e++)a.push(String.fromCharCode(t[e]));return a.join("")},stringToWords:function(t){for(var a=[],e=0,r=0;e<t.length;e++,r+=8)a[r>>>5]|=t.charCodeAt(e)<<24-r%32;return a},bytesToWords:function(t){for(var a=[],e=0,r=0;e<t.length;e++,r+=8)a[r>>>5]|=t[e]<<24-r%32;return a},wordsToBytes:function(t){for(var a=[],e=0;e<32*t.length;e+=8)a.push(t[e>>>5]>>>24-e%32&255);return a},bytesToHex:function(t){for(var a=[],e=0;e<t.length;e++)a.push((t[e]>>>4).toString(16)),a.push((15&t[e]).toString(16));return a.join("")},hexToBytes:function(t){for(var a=[],e=0;e<t.length;e+=2)a.push(parseInt(t.substr(e,2),16));return a},bytesToBase64:function(t){if("function"==typeof btoa)return btoa(n.bytesToString(t));for(var a,e=[],r=0;r<t.length;r++)switch(r%3){case 0:e.push(o.charAt(t[r]>>>2)),a=(3&t[r])<<4;break;case 1:e.push(o.charAt(a|t[r]>>>4)),a=(15&t[r])<<2;break;case 2:e.push(o.charAt(a|t[r]>>>6)),e.push(o.charAt(63&t[r])),a=-1}for(null!=a&&-1!=a&&e.push(o.charAt(a));e.length%4!=0;)e.push("=");return e.join("")},base64ToBytes:function(t){if("function"==typeof atob)return n.stringToBytes(atob(t));t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var a=[],e=0;e<t.length;e++)switch(e%4){case 1:a.push(o.indexOf(t.charAt(e-1))<<2|o.indexOf(t.charAt(e))>>>4);break;case 2:a.push((15&o.indexOf(t.charAt(e-1)))<<4|o.indexOf(t.charAt(e))>>>2);break;case 3:a.push((3&o.indexOf(t.charAt(e-1)))<<6|o.indexOf(t.charAt(e)))}return a}};Crypto.mode={}}()},M0tS:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAIAAAC2BqGFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzVDQUQwMjM5QjE1MTFFNzlFNEI5QUJEMDUzNEQwRTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzVDQUQwMjQ5QjE1MTFFNzlFNEI5QUJEMDUzNEQwRTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNUNBRDAyMTlCMTUxMUU3OUU0QjlBQkQwNTM0RDBFOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNUNBRDAyMjlCMTUxMUU3OUU0QjlBQkQwNTM0RDBFOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pja9Sl4AAAReSURBVHja7J3bc9JAFMZPSEi4hPut9CJq1da++P8/+Tf45IyO+qAz1apVKdaCtHgOItohDLnsJpJ83/BAywbYXzbfOWd30xqzl08J0q8cEAA0QEMADdAADQE0QEMADdAADQE0QEMADdAADQE0QEMADdCZlrXh9dNnYORL/SfRQN9cgyGsA6AhgAZogIYAGqAhgAZogIYAGqAhgAboVMvK2LgyqVAnp0qWLT9OJzQe0tXXGGaDswTa7VFlR1gvZZep1KCbfbp4T6MPAB1ZhkHNQypU1w7z2h45FTp/RbMZPDqC6oO1lJfiBvW7CIYRxI5cavpqyTbiVAE6rNiX/avaB+hw/bPIcQO05/CYswA6uPKlOA4B6FvJnP+LILWgGUd1V8s7h6hEZtP0gq7uScjSEfGnV4EP+XmVUtDsieW2PGncIUP197me0OQyCOVLOSSdoOsHiyemTbV99e8fqLa+0FWIJw261JKMaike2lwKq9WPL3Q19NVyfCGNUwjamE8yrJbLyg3k/M1mA+EGn1+ntATnTGM1l7JsiY1qNbumTy9o9NF7zoh/yS9xg5nGydLkZu84Brpt75fcjlzCk5FS1jf07S19P6PifELDtBehUuzinKZj3d1NDrTEPWPtq40BnT0XOoqzvbFMPfMj/lIhoRjY3DAFYTn65neSqcmSiIE5Xy7sdm8lJAAdPAb2ycz7OSFiIIYB0OGCQpHKXd+NC7rmQNIPmuvAQIOUDSRfBuiAktTKDXhMSgwkRtAcA8NNZeQLVOkDtG9VdvzFQM9je5oWPlIHmsOa24tyOYiBkAHQPurAiD6bLwZbz84i6GJ98/4Vn+aztQaiH3ToGOjxVoaswmyngegHzXHs91SZEvGIrvQAejUGOtFioOeZ64tfA/RKDFT9EWwg9QFA/6NCTR46ZJfUXyjbCprHnY4l7aWqfcnNAVpGHBu01mSmMcg8aNOJo7iwyzK3l2nQOmKgt4HsBjAQp0KdY31bzWMHzT0p1mL6+j4NhJvV71D7oUTR9oP5YoKx5aAl99qPtQcbDYRPfO9ksb1vWcp3HqksoxIAzX2OPxngEWo6awbyQIbwKlM+Pd1jXdmndtDcn0Rm6D0NZDGQW+u7blHrcL4nzdg20PyljYQ2ijgulTt/+mQKd8+B7JmGxmIj6rhwTC82kkyg+DSzgbAbdE9kk2ogl+8+lluXdUrVljCuAw8SzlT5YpKxGWq1jC+C1n3Z6jh8p+nmWUUj2u3IEmriCr0muexF+8g7rv4XoNngUrNPjhNtzkY0eKAK0JxdGSalRmwjzXtS4CjdTBIZtO36vdN6u8QFTudI4bxYRNDG31t90qd8SbIRRTaSi3rat3BVKVgmo8hGoqV3/PHDU8qCnJr8RaDEQI/OCEqgBIcAGqABGgJogIYAGqAzok0FS84Eo1hAb/qnZhCsA6ABGgJogIYAGqABGgJogIYAGqABGgJogIYAGqABGgJogIZ86JcAAwBsOona4U2NtgAAAABJRU5ErkJggg=="},NGNR:function(t,a,r){"use strict";var e={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"Main"}},[e("h2",{staticClass:"Title"},[a._v("新建&修改")]),a._v(" "),e("div",{staticClass:"box"},[e("Form",{ref:"form",attrs:{model:a.formData,"label-width":80,rules:a.rule}},[e("Row",[e("Col",{attrs:{span:"10"}},[e("Form-item",{attrs:{label:"活动时间",required:"","label-width":100}},[e("Row",[e("Col",{attrs:{span:"11"}},[e("Form-item",{attrs:{prop:"startTime"}},[e("Date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",placeholder:"选择时间"},model:{value:a.formData.startTime,callback:function(t){a.$set(a.formData,"startTime",t)},expression:"formData.startTime"}})],1)],1),a._v(" "),e("Col",{staticStyle:{"text-align":"center"},attrs:{span:"2"}},[a._v("至")]),a._v(" "),e("Col",{attrs:{span:"11"}},[e("Form-item",{attrs:{prop:"endTime"}},[e("Date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",placeholder:"选择时间"},model:{value:a.formData.endTime,callback:function(t){a.$set(a.formData,"endTime",t)},expression:"formData.endTime"}})],1)],1)],1)],1)],1),a._v(" "),e("Col",{attrs:{span:"10",offset:"2"}},[e("Form-item",{attrs:{label:"折扣名称",prop:"name","label-width":100}},[e("Input",{attrs:{placeholder:"请输入..."},model:{value:a.formData.name,callback:function(t){a.$set(a.formData,"name",t)},expression:"formData.name"}})],1)],1),a._v(" "),e("Col",{attrs:{span:"24"}},[e("Form-item",{attrs:{"label-width":1}},[e("div",{attrs:{id:"imgBox"}},[e("span",[a._v("折扣图片")]),a._v(" "),e("div",{staticClass:"changeImg"},[a.notifyImg?e("img",{attrs:{src:a.notifyImg,alt:""}}):e("img",{attrs:{src:r("M0tS"),alt:""}})]),a._v(" "),e("Upload",{staticStyle:{transform:"translateX(40px)"},attrs:{action:"https://hbrand.oss-cn-hangzhou.aliyuncs.com",data:a.upData,"before-upload":a.beforeUpload,"on-success":a.notifyUpload,"show-upload-list":!1,format:["jpg","jpeg","png"],"on-format-error":a.handleFormatError}},[e("Button",{attrs:{type:"primary"}},[a._v("重新上传")]),a._v(" "),e("p",{staticStyle:{margin:"0",color:"#ff8a34"}},[a._v("（建议尺寸：210*170px）")])],1)],1)])],1),a._v(" "),e("Col",{attrs:{span:"10"}},[e("Form-item",{attrs:{label:"备注","label-width":100}},[e("Input",{model:{value:a.formData.memo,callback:function(t){a.$set(a.formData,"memo",t)},expression:"formData.memo"}})],1)],1)],1)],1),a._v(" "),e("footer",[e("Button",{attrs:{type:"primary"},on:{click:a.goBack}},[a._v("取消")]),a._v(" "),e("Button",{staticStyle:{"margin-left":"24px"},attrs:{type:"success"},on:{click:function(t){a.submit("form")}}},[a._v("确定")])],1)],1)])},staticRenderFns:[]};a.a=e},"R/Rc":function(t,a,e){"use strict";var l={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(t){var a,e,r,o,n,i,d,s="",c=0;for(t=l._utf8_encode(t);c<t.length;)o=(a=t.charCodeAt(c++))>>2,n=(3&a)<<4|(e=t.charCodeAt(c++))>>4,i=(15&e)<<2|(r=t.charCodeAt(c++))>>6,d=63&r,isNaN(e)?i=d=64:isNaN(r)&&(d=64),s=s+this._keyStr.charAt(o)+this._keyStr.charAt(n)+this._keyStr.charAt(i)+this._keyStr.charAt(d);return s},decode:function(t){var a,e,r,o,n,i,d="",s=0;for(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");s<t.length;)a=this._keyStr.indexOf(t.charAt(s++))<<2|(o=this._keyStr.indexOf(t.charAt(s++)))>>4,e=(15&o)<<4|(n=this._keyStr.indexOf(t.charAt(s++)))>>2,r=(3&n)<<6|(i=this._keyStr.indexOf(t.charAt(s++))),d+=String.fromCharCode(a),64!=n&&(d+=String.fromCharCode(e)),64!=i&&(d+=String.fromCharCode(r));return d=l._utf8_decode(d)},_utf8_encode:function(t){t=t.replace(/\r\n/g,"\n");for(var a="",e=0;e<t.length;e++){var r=t.charCodeAt(e);r<128?a+=String.fromCharCode(r):(127<r&&r<2048?a+=String.fromCharCode(r>>6|192):(a+=String.fromCharCode(r>>12|224),a+=String.fromCharCode(r>>6&63|128)),a+=String.fromCharCode(63&r|128))}return a},_utf8_decode:function(t){for(var a="",e=0,r=c1=c2=0;e<t.length;)(r=t.charCodeAt(e))<128?(a+=String.fromCharCode(r),e++):191<r&&r<224?(c2=t.charCodeAt(e+1),a+=String.fromCharCode((31&r)<<6|63&c2),e+=2):(c2=t.charCodeAt(e+1),c3=t.charCodeAt(e+2),a+=String.fromCharCode((15&r)<<12|(63&c2)<<6|63&c3),e+=3);return a}};a.a=l},"f+5i":function(t,a,e){"use strict";var r=e("mvHQ"),o=e.n(r),n=e("LTBv"),i=(e.n(n),e("BHQ5")),d=(e.n(i),e("o8UP")),s=(e.n(d),e("R/Rc").a.encode(o()({expiration:"2020-01-01T12:00:00.000Z",conditions:[["content-length-range",0,1048576e3]]}))),c=s,l=Crypto.HMAC(Crypto.SHA1,c,"8RuhER7GukaY9t2AKMhPrysTuYYLmt",{asBytes:!0}),h={OSSAccessKeyId:"LTAIIKr2gHrLW1pp",policy:s,success_action_status:"200",signature:Crypto.util.bytesToBase64(l)};a.a=h},iuSy:function(t,a,e){var r=e("8Lzi");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e("rjj0")("450ba9e0",r,!0,{})},o8UP:function(t,a){var b,r;b=Crypto.util,(r=Crypto.SHA1=function(t,a){var e=b.wordsToBytes(r._sha1(t));return a&&a.asBytes?e:a&&a.asString?b.bytesToString(e):b.bytesToHex(e)})._sha1=function(t){var a=b.stringToWords(t),e=8*t.length,r=[],o=1732584193,n=-271733879,i=-1732584194,d=271733878,s=-1009589776;a[e>>5]|=128<<24-e%32,a[15+(e+64>>>9<<4)]=e;for(var c=0;c<a.length;c+=16){for(var l=o,h=n,f=i,m=d,u=s,p=0;p<80;p++){if(p<16)r[p]=a[c+p];else{var g=r[p-3]^r[p-8]^r[p-14]^r[p-16];r[p]=g<<1|g>>>31}var v=(o<<5|o>>>27)+s+(r[p]>>>0)+(p<20?1518500249+(n&i|~n&d):p<40?1859775393+(n^i^d):p<60?(n&i|n&d|i&d)-1894007588:(n^i^d)-899497514);s=d,d=i,i=n<<30|n>>>2,n=o,o=v}o+=l,n+=h,i+=f,d+=m,s+=u}return[o,n,i,d,s]},r._blocksize=16},wJyR:function(t,a,e){"use strict";var r=e("f+5i"),o=e("BK/k");a.a={data:function(){var o=this;return{timeStr:"",formData:{startTime:"",endTime:"",name:"",memo:"",id:null},rule:{startTime:[{validator:function(t,a,e){""==a?e(new Error("请输入开始时间")):(""!==o.formData.endTime&&o.$refs.form.validateField("endTime"),e())}}],endTime:[{validator:function(t,a,e){if(""==a)e(new Error("请输入结束时间"));else{var r=new Date(o.formData.startTime).getTime();new Date(a).getTime()<r?e(new Error("开始时间大于结束时间")):e()}}}],brandId:[{required:!0,message:"请选择品牌名称"}],name:[{required:!0,message:"请输入活动名称"}]},type:"",upData:r.a,notifyImg:""}},created:function(){var t=this.$route.query.type,a=this.$route.query.id;t&&(this.type=t),a&&(this.formData.id=a,this.activityDetail(a))},methods:{addRules:function(){this.list.push("")},beforeUpload:function(t){this.timeStr=Date.now(),this.upData.key="ecuda/image/"+this.timeStr+t.name},notifyUpload:function(t,a,e){this.notifyImg=o.a.ossServer+"ecuda/image/"+this.timeStr+a.name},handleFormatError:function(t){this.$Notice.warning({title:"文件格式不正确",desc:"文件 "+t.name+" 格式不正确，请上传 jpg 或 png 格式的图片。"})},activityDetail:function(t){var a=this,e=new Date;t?this.Global.doPost("goodsInfo/getGoodsInfo.json",t,function(t){a.formData.name=t.name,a.formData.memo=t.memo,a.formData.startTime=e.setTime(t.startTime),a.formData.endTime=e.setTime(t.endTime),a.notifyImg=t.url}):this.$Message.error("请在活动列表重新选择")},submit:function(t){var a=this;this.$refs[t].validate(function(t){t?a.init():a.$Message.error("请选择查询条件!!")})},init:function(){var t,a=this,e=this.Global.JsonChange(this.formData);e.startTime=this.Global.createTime(this.formData.startTime),e.endTime=this.Global.createTime(this.formData.endTime),this.Global.deleteEmptyProperty(e),e.url=this.notifyImg,e.type=2,"edd"==this.type&&(e.id=this.formData.id,t="goodsInfo/modiGoodsInfo.json"),"add"==this.type&&(t="goodsInfo/addGoodsInfo.json"),this.Global.doPost(t,e,function(t){a.$router.push("/redAwardManage")})},goBack:function(){this.$router.push({path:"/awardManage"})}}}}});