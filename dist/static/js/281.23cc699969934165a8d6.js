webpackJsonp([281],{"8BEA":function(t,a,e){var n=e("mivZ");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("4dd365dc",n,!0,{})},"9bBU":function(t,a,e){e("mClu");var n=e("FeBl").Object;t.exports=function(t,a,e){return n.defineProperty(t,a,e)}},C4MV:function(t,a,e){t.exports={default:e("9bBU"),__esModule:!0}},E8Zt:function(t,a,e){"use strict";var n=e("bOdI"),s=e.n(n),r=e("fl7q");a.a={data:function(){var t;return{time:"",formData:(t={joinCode:"",phone:"",storeName:"",storeId:"",name:"",isBlack:"",address:"",salesRoute:"",workerName:"",workerPhone:"",activityName:"",activityTag:"",liquidateTime:"",periodMonth:"",auditCountQualified:"",checkStatus:"",riskStatus:"更新中"},s()(t,"auditCountQualified",""),s()(t,"periodAmount",""),s()(t,"liquidateAmount",""),s()(t,"status",""),s()(t,"recStatus",""),s()(t,"memo",""),s()(t,"switchStatus",""),t),checkStatusList:[{name:"正常",id:1},{name:"异常",id:2}],auditCountQualifiedList:[{name:"合格",id:1},{name:"不合格",id:0}],status:"",brandId:1}},created:function(){this.formData=JSON.parse(this.$route.query.data),this.status=this.$route.query.type,this.brandId=this.$route.query.brandId,this.time=this.$route.query.time},methods:{back:function(){var t="month"==this.time?"/giveoutPrizesClear":"/displayClear";this.$router.push({path:t})},submit:function(){var a=this,t=this.formData,e=t.checkStatus,n={checkStatus:t.auditCountQualified,superviseStatus:e,liquidateAmount:t.liquidateAmount,switchStatus:t.switchStatus,memo:t.memo,id:t.id};this.Global.JsonChange(n),this.Global.doPost("liquidate/doEditLiquidateRecord.json",n,function(t){a.$Message.success("修改成功"),a.back()})}},filters:{phoneFormat:function(t){var a=/^(\d{3})(\d{4})(\d{4})$/.exec(t);return a?a[1]+"-"+a[2]+"-"+a[3]:t},formatYearMonth:function(t){return new Date(Number(t)).pattern("yyyy-MM-dd HH:mm:ss")},isBlack:function(t){return{0:"正常",1:"异常"}[t]},auditCountQualified:function(t){return r.z[t]},checkStatus:function(t){return r.o[t]},status:function(t){return r.n[t]},recStatus:function(t){return t?r.p[t]:"未发放"},switchStatus:function(t){return{0:"暂不发放奖励（全部发放时将不包括此客户此项奖励）",1:"正常发放奖励"}[t]}}}},GKCy:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("E8Zt"),s=e("JRTf");var r=function(t){e("8BEA")},o=e("VU/8")(n.a,s.a,!1,r,"data-v-14834370",null);a.default=o.exports},JRTf:function(t,a,e){"use strict";var n={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"Main"}},[n("div",{staticClass:"box"},[n("Form",{attrs:{model:e.formData,"label-position":"left","label-width":80,inline:""}},[n("Row",[n("Col",{attrs:{span:"6"}},[n("FormItem",{attrs:{label:"客户编号："}},[n("span",{staticClass:"txt"},[e._v(e._s(e.formData.joinCode))])])],1),e._v(" "),n("Col",{attrs:{span:"6"}},[n("FormItem",{attrs:{label:"店铺名称："}},[n("span",{staticClass:"txt"},[e._v(e._s(e.formData.storeName))])])],1),e._v(" "),n("Col",{attrs:{span:"6"}},[n("FormItem",{attrs:{label:"店铺ID：","label-width":70}},[n("span",{staticClass:"txt"},[e._v(e._s(e.formData.storeId))])])],1),e._v(" "),n("Col",{attrs:{span:"6"}},[n("FormItem",{attrs:{label:"客户姓名："}},[n("span",{staticClass:"txt"},[e._v(e._s(e.formData.name))])])],1)],1),e._v(" "),n("Row",[n("Col",{attrs:{span:"6"}},[n("FormItem",{attrs:{label:"手机号码："}},[n("span",{staticClass:"txt"},[e._v(e._s(e._f("phoneFormat")(e.formData.phone)))])])],1),e._v(" "),n("Col",{attrs:{span:"6"}},[n("FormItem",{attrs:{label:"客户状态："}},[n("span",{staticClass:"txt"},[e._v(e._s(e._f("isBlack")(e.formData.isBlack)))])])],1),e._v(" "),n("Col",{attrs:{span:"12"}},[n("FormItem",{attrs:{label:"门店地址："}},[n("span",{staticClass:"txt"},[e._v(e._s(e.formData.address))])])],1)],1),e._v(" "),n("Row",[n("Col",{attrs:{span:"6"}},[n("FormItem",{attrs:{label:"线路编号："}},[n("span",{staticClass:"txt"},[e._v(e._s(e.formData.salesRoute))])])],1),e._v(" "),n("Col",{attrs:{span:"6"}},[n("FormItem",{attrs:{label:"业代姓名："}},[n("span",{staticClass:"txt"},[e._v(e._s(e.formData.workerName))])])],1),e._v(" "),n("Col",{attrs:{span:"6"}},[n("FormItem",{attrs:{label:"业代手机："}},[n("span",{staticClass:"txt"},[e._v(e._s(e._f("phoneFormat")(e.formData.workerPhone)))])])],1)],1),e._v(" "),n("Row",[n("Col",{attrs:{span:"6"}},[n("FormItem",{attrs:{label:"陈列活动："}},[n("span",{staticClass:"txt"},[e._v(e._s(e.formData.activityName))])])],1),e._v(" "),n("Col",{attrs:{span:"6"}},[n("FormItem",{attrs:{label:"分组名称："}},[n("span",{staticClass:"txt"},[e._v(e._s(e.formData.activityTag))])])],1),e._v(" "),n("Col",{attrs:{span:"6"}},[n("FormItem",{attrs:{label:"清算时间："}},[n("span",{staticClass:"txt"},[e._v(e._s(e._f("formatYearMonth")(e.formData.liquidateTime)))])])],1),e._v(" "),n("Col",{attrs:{span:"6"}},[n("FormItem",{attrs:{label:"结算周期："}},[n("span",{staticClass:"txt"},[e._v(e._s(e.formData.periodMonth))])])],1)],1),e._v(" "),n("Row",[n("Col",{attrs:{span:"6"}},[n("FormItem",{attrs:{label:"合格情况：","label-width":100}},[n("span",{staticClass:"txt"},[e._v(e._s(e._f("auditCountQualified")(e.formData.auditCountQualified)))])])],1),e._v(" "),n("Col",{attrs:{span:"6"}},[n("FormItem",{attrs:{label:"稽查状态："}},[1==e.status?n("span",{staticClass:"txt"},[e._v(e._s(e._f("checkStatus")(e.formData.checkStatus)))]):e._e(),e._v(" "),2==e.status?n("Select",{attrs:{clearable:""},model:{value:e.formData.checkStatus,callback:function(t){e.$set(e.formData,"checkStatus",t)},expression:"formData.checkStatus"}},e._l(e.checkStatusList,function(t,a){return n("Option",{key:a,attrs:{value:t.id}},[e._v(e._s(t.name))])})):e._e()],1)],1),e._v(" "),n("Col",{attrs:{span:"6"}},[n("FormItem",{attrs:{label:"进货达标状态：","label-width":100}},[n("span",{staticClass:"txt"},[e._v("更新中")])])],1),e._v(" "),n("Col",{attrs:{span:"6"}},[n("FormItem",{attrs:{label:"综合判定状态：","label-width":100}},[1==e.status?n("span",{staticClass:"txt"},[e._v(e._s(e._f("auditCountQualified")(e.formData.auditCountQualified)))]):e._e(),e._v(" "),2==e.status?n("Select",{attrs:{clearable:""},model:{value:e.formData.auditCountQualified,callback:function(t){e.$set(e.formData,"auditCountQualified",t)},expression:"formData.auditCountQualified"}},e._l(e.auditCountQualifiedList,function(t,a){return n("Option",{key:a,attrs:{value:t.id}},[e._v(e._s(t.name))])})):e._e()],1)],1)],1),e._v(" "),n("Row",[n("Col",{attrs:{span:"6"}},[n("FormItem",{attrs:{label:"标准费用："}},[n("span",{staticClass:"txt"},[e._v(e._s(e.formData.periodAmount))])])],1),e._v(" "),n("Col",{attrs:{span:"6"}},[n("FormItem",{attrs:{label:"折扣："}},[2==e.status?n("Row",[n("Col",{attrs:{span:"12"}},[n("Input",{model:{value:e.formData.liquidateAmount,callback:function(t){e.$set(e.formData,"liquidateAmount",t)},expression:"formData.liquidateAmount"}})],1),e._v(" "),n("Col",{attrs:{span:"12"}},[e._v("\n                                  元/周\n                              ")])],1):e._e(),e._v(" "),1==e.status?n("span",{staticClass:"txt"},[e._v(e._s(e.formData.liquidateAmount)+"元/周")]):e._e()],1)],1),e._v(" "),n("Col",{attrs:{span:"6"}},[n("FormItem",{attrs:{label:"清算状态："}},[n("span",{staticClass:"txt"},[e._v(e._s(e._f("status")(e.formData.status)))])])],1),e._v(" "),n("Col",{attrs:{span:"6"}},[n("FormItem",{attrs:{label:"提现状态："}},[n("span",{staticClass:"txt"},[e._v(e._s(e._f("recStatus")(e.formData.recStatus)))])])],1)],1),e._v(" "),n("Row",[n("Col",{attrs:{span:"6"}},[n("FormItem",{attrs:{label:"特殊处理："}},[1==e.status?n("span",{staticClass:"txt"},[e._v(e._s(e._f("switchStatus")(e.formData.switchStatus)))]):e._e(),e._v(" "),2==e.status?n("RadioGroup",{model:{value:e.formData.switchStatus,callback:function(t){e.$set(e.formData,"switchStatus",t)},expression:"formData.switchStatus"}},[n("Radio",{attrs:{label:0}},[e._v("暂不发放奖励（全部发放时将不包括此客户此项奖励）")]),e._v(" "),n("Radio",{attrs:{label:1}},[e._v("正常发放奖励")])],1):e._e()],1)],1),e._v(" "),n("Col",{attrs:{span:"6"}},[n("FormItem",{attrs:{label:"清算ID："}},[n("span",{staticClass:"txt"},[e._v(e._s(e.formData.id))])])],1)],1),e._v(" "),n("Row",[n("Col",[n("FormItem",{staticStyle:{width:"100%"},attrs:{label:"备注信息："}},[1==e.status?n("span",{staticClass:"txt"},[e._v(e._s(e.formData.memo))]):e._e(),e._v(" "),2==e.status?n("Input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.formData.memo,callback:function(t){e.$set(e.formData,"memo",t)},expression:"formData.memo"}}):e._e()],1)],1)],1)],1),e._v(" "),n("footer",{staticClass:"backBox"},[2==e.status?n("Button",{staticClass:"btn-back",attrs:{type:"primary"},on:{click:e.submit}},[e._v("保存")]):e._e(),e._v(" "),n("Button",{staticClass:"btn-back",attrs:{type:"success"},on:{click:e.back}},[e._v("返回")])],1)],1)])},staticRenderFns:[]};a.a=n},bOdI:function(t,a,e){"use strict";a.__esModule=!0;var n,s=e("C4MV"),r=(n=s)&&n.__esModule?n:{default:n};a.default=function(t,a,e){return a in t?(0,r.default)(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}},fl7q:function(t,a,e){"use strict";e.d(a,"A",function(){return n}),e.d(a,"C",function(){return s}),e.d(a,"s",function(){return r}),e.d(a,"B",function(){return o}),e.d(a,"D",function(){return i}),e.d(a,"w",function(){return u}),e.d(a,"r",function(){return l}),e.d(a,"q",function(){return c}),e.d(a,"y",function(){return d}),e.d(a,"u",function(){return f}),e.d(a,"t",function(){return m}),e.d(a,"a",function(){return p}),e.d(a,"E",function(){return v}),e.d(a,"F",function(){return _}),e.d(a,"n",function(){return b}),e.d(a,"o",function(){return h}),e.d(a,"p",function(){return C}),e.d(a,"z",function(){return x}),e.d(a,"G",function(){return w}),e.d(a,"f",function(){return k}),e.d(a,"c",function(){return D}),e.d(a,"d",function(){return g}),e.d(a,"i",function(){return S}),e.d(a,"x",function(){return y}),e.d(a,"b",function(){return B}),e.d(a,"e",function(){return F}),e.d(a,"g",function(){return I}),e.d(a,"j",function(){return M}),e.d(a,"m",function(){return R}),e.d(a,"l",function(){return Y}),e.d(a,"k",function(){return J}),e.d(a,"h",function(){return T}),e.d(a,"v",function(){return q}),e.d(a,"H",function(){return N});var n={0:"无效",1:"有效"},s={0:"电子券",1:"实物",2:"电子红包",5:"咪咕流量包",9:"谢谢惠顾"},r={0:"待使用",1:"流通中",10:"待核销",2:"已核销",4:"已过期"},o={0:"非展示中",1:"展示中"},i={1:"执行中",2:"暂停",3:"执行完毕"},u={BPP:"e店佳",CPP:"e促达"},l={1:"展示中",2:"非展示中",3:"未开始",4:"已结束"},c={0:"审核中",1:"视频通过",2:"审核不通过",3:"退回需重传",4:"通过已发奖",1001:"预审通过",1010:"已清算",1002:"预审不通过",1003:"预审退回",2001:"审核通过"},d={"-1":"未上传",0:"审核中",1:"合格",2:"不合格",3:"不合格",4:"合格",1001:"审核中",1010:"已清算",1002:"审核中",1003:"审核中",2001:"审核中"},f={1:"合格",2:"不合格",3:"终止",4:"恢复"},m={1:"待参与",2:"参与中",3:"被终止",4:"活动结束"},p={0:"待审核",1:"通过",2:"审核不通过",3:"退回需重传",4:"通过已发放",1010:"已清算",1001:"审核中",1002:"审核中",1003:"审核中",2001:"审核中",4040:"未达发放要求"},v={"-1":"待参与",0:"待清算",1010:"已清算",4:"已发奖"},_={0:"待领用",1:"已领用",2:"已清算",3:"已发奖"},b={"-1":"不符合发奖要求",0:"待清算",1010:"已清算",4:"已发奖",4040:"不符合发奖要求",9090:"不符合发奖要求"},h={1:"正常",2:"异常"},C={0:"未领取",1:"领取中",2:"已领取",3:"提现退回"},x={0:"不合格",1:"合格"},w={0:"未签到",1:"已签到",2:"迟到",3:"待签到"},k={"-1":"待提交",0:"待审核",1:"审核通过",1001:"待审核",2:"不通过",3:"退回重签中"},D={0:"无",1:"KO冰柜",2:"客户自有冰柜",3:"KO、客户冰柜"},g={1:"KO冰柜",2:"客户冰柜",3:"KO冰柜/客户冰柜"},S={1:"是",0:"否"},y={"-2":"未参与","-1":"未上传",0:"审核中",1:"合格",2:"不合格",3:"退回重传"},B={0:"无",1:"端架陈列",2:"小方展架陈列",3:"带有价格提示的RB套餐牌",4:"助销工具投放及使用",5:"果汁货架陈列"},F={Milk:"含乳饮品",nutrient:"营养素饮料",juice:"果汁",soda:"汽水"},I={0:"初始",1:"正常",2:"锁定"},M={GT:"GT",JY:"教育",WB:"网吧",YS:"饮食",GZCS:"工作场所",QT:"其他"},R={GT:{GT_JY:"即饮"},JY:{JY_CS:"超市",JY_SPD:"食品店",JY_STNKK:"食堂内档口",JY_STNCS:"食堂内超市",JY_STNSB:"食堂内水吧"},WB:{WB_WB:"网吧"},GZCS:{GZCS_JY:"即饮"},YS:{YS_ZTWWD:"传统（无网店）",YS_ZTYWD:"传统（有网店）",YS_ZGDCYXX:"中高档（线下）",YS_ZGDCYXSXX:"中高档（线上+线下）"},QT:{QT_QT:"其他"}},Y={"冀北销售部":"冀北销售部","冀南销售部":"冀南销售部","冀中销售部":"冀中销售部","雄安销售部":"雄安销售部"},J={diamond:"钻石",gold:"金",silver:"银",copper:"铜"},T={0:"无",1:"端架陈列",2:"小方展架陈列",3:"带有价格提示的RB套餐牌",4:"助销工具投放及使用",5:"果汁货架陈列"},q={"-1":"不可参与",0:"未参与",1:"执行中"},N={ICBKCNBJ:"工商银行",PCBCCNBJ:"建设银行",COMMCNSH:"交通银行",ABOCCNBJ:"农业银行",PSBCCNBJ:"邮政储蓄银行",BKCHCNBJ:"中国银行"}},mClu:function(t,a,e){var n=e("kM2E");n(n.S+n.F*!e("+E39"),"Object",{defineProperty:e("evD5").f})},mivZ:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,'.box[data-v-14834370]{padding:0;min-width:1135px}button[data-v-14834370]{outline:none;list-style:none;border:0;cursor:pointer}button#success[data-v-14834370]{color:#19be6b;background:transparent}button#fail[data-v-14834370]{color:#ed3f14;background:transparent}button#primary[data-v-14834370]{color:#ff8a34;background:transparent}button.down[data-v-14834370],button.up[data-v-14834370]{color:#ff8a34}button.down[data-v-14834370]:after{content:"\\F116"}button.up[data-v-14834370]:after{content:"\\F124"}#bottonFather[data-v-14834370]{display:flex;justify-content:center;align-items:center}.lookDetail[data-v-14834370]{background:#febf00;border-color:#febf00;color:#fff}.ml20[data-v-14834370]{margin-left:20px}.w18[data-v-14834370]{width:17.5%}.w10[data-v-14834370]{width:12.5%}.w36[data-v-14834370]{width:35%}.fs12[data-v-14834370]{font-size:12px}.fs14[data-v-14834370]{font-size:14px}.fs16[data-v-14834370]{font-size:16px}.fs28[data-v-14834370]{font-size:28px}.text-center[data-v-14834370]{text-align:center}.block[data-v-14834370]{display:block}.container[data-v-14834370]:after{display:block;clear:both;content:"";visibility:hidden;height:0}.container[data-v-14834370]{zoom:1}.text-overflow[data-v-14834370]{display:inline-block;max-width:80%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}input[data-v-14834370]::-ms-input-placeholder{text-align:center!important}input[data-v-14834370]::-webkit-input-placeholder{text-align:center!important}.displayGroupPrimary[data-v-14834370]{color:#ff8a34}.demo-spin-icon-load[data-v-14834370]{animation:ani-demo-spin-data-v-14834370 1s linear infinite}@keyframes ani-demo-spin-data-v-14834370{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}#Main[data-v-14834370]{height:100%}#Main .main-container[data-v-14834370]{padding-top:10px;min-height:100%;position:relative;background:#fff;padding-bottom:60px;min-width:1135px}#Main .main-container .page-box[data-v-14834370]{overflow:hidden;position:absolute;bottom:10px;right:10px}#Main .main-container .searchBox[data-v-14834370]{overflow:hidden}#Main .main-container .searchBox .search-left[data-v-14834370],#Main .main-container .searchBox .search-right[data-v-14834370]{width:48%}#Main .main-container .searchBox .search-left button[data-v-14834370]{outline:none;border:none;width:60px;height:30px;line-height:30px;background:#fff;margin-left:8px;cursor:pointer;color:#ff8a34}#Main .main-container .searchBox .search-right[data-v-14834370]{width:52%}#Main .main-container .searchBox .search-right img[data-v-14834370]{cursor:pointer;margin-left:6px}#Main .main-container .numColor[data-v-14834370]{color:#ff8a34}.box[data-v-14834370]{width:100%;box-shadow:0 0 10px 2px rgba(0,0,0,.1);margin:0 auto;padding:30px 20px;padding-bottom:0;background:#fff}.txt[data-v-14834370]{margin-left:-20px}footer[data-v-14834370]{text-align:center;padding:0 20px 20px}footer .btn-back[data-v-14834370]{margin-left:50px}footer .btn-back[data-v-14834370]:first-child{margin-left:0}.backBox[data-v-14834370]{text-align:center;margin:20px 0}',""])}});