// 经销商管理
<style lang="less" scoped>
@import "../../config/index.less";
.box {
  width: 100%;
  margin: 0 auto 15px;
  padding-bottom: 0;
  background: #fff;
}

.ivu-table-row {
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1) !important;
  transform: translateY(0px);
}

.time {
  float: left;
  padding: 0px 10px;
  border: 1px solid @primary-color;
  margin-right: 10px;
  cursor: pointer;
}
.form {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    width: 70%;

    .w18 {
      width: 25%;
    }
  }
  .w10 {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.contentTop {
  overflow: hidden;
  margin-bottom: 10px;
  .export {
    height: 24px;
    float: right;
    div {
      background: @primary-color;
      color: #fff;
      padding: 3px 12px;
      border-bottom: 0;
      cursor: pointer;
      i {
        margin-right: 2px;
      }
    }
  }
  .upDate {
    float: right;
    border: 1px solid #aeaeae;
    padding: 2px 12px;
    margin-right: 10px;
    margin-top: 4px;
    color: #333;
  }
  .demo {
    float: right;
    color: @primary-color;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
    margin-right: 20px;
    span {
      text-decoration: underline;
    }
  }
}

.searchBox {
  overflow: hidden;
  .search_btn {
    float: left;
    width: 50px;
    padding: 5px 14px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .search_icon {
    float: left;
    padding: 5px 10px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
.myModal {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  .modal-main {
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    height: 100%;
    h3 {
      text-align: center;
      font-size: 14px;
    }
    .modal-table {
      max-height: 500px;
      margin-top: 10px;
      .modal-table-top {
        overflow: hidden;
        height: 30px;
        line-height: 30px;
      }
    }
  }
}
.demo {
  color: @primary-color;
  margin-left: 20px;
  cursor: pointer;
}
.w36 {
  width: 35%;
}
</style>

<template>
	<div id="Main">
		<!-- <h2 class="Title">费用周领取汇总</h2> -->
        <div class="main-container">
            <div class="box">
                <Form ref="form" :model="formData" :label-width="10">
                    <div class="container">
                        <div class="btn-left w18">
                            <Form-item prop="brandId" required>
                                <Select v-model="formData.brandId" placeholder="品牌名称" @on-change="changeValue">
                                    <Option :value="item.id" v-for="(item,index) in brandList" :key="index">{{ item.brandName }}</Option>
                                </Select>
                            </Form-item>
                        </div>
                        <div class="btn-left w18">
                            <Form-item prop="merchantId" required>
                               <Select v-model="formData.merchantId" placeholder="经销商" clearable>
                                    <Option :value="item.id" v-for="(item,index) in distributorList" :key="index">{{ item.merchantName }}</Option>
                                </Select>
                            </Form-item>
                        </div>
                        <div class="btn-left w18">
                            <Form-item prop="groupId" required>
                                <Select v-model="formData.groupId" placeholder="活动名称*" @on-change="getActivityList" clearable>
                                    <Option :value="item.id" v-for="(item,index) in groupList" :key="index">{{ item.groupName }}</Option>
                                </Select>
                            </Form-item>
                        </div>
                        <div class="btn-left w18">
                            <Form-item prop="activityId">
                                <Select v-model="formData.activityId" placeholder="子活动名称" @on-change="getpresentList" clearable>
                                    <Option :value="item.id" v-for="(item,index) in activityList" :key="index">{{ item.name }}</Option>
                                </Select>
                            </Form-item>
                        </div>

                        <div class="btn-left w18">
                            <Form-item prop="activityId">
                                <Select v-model="formData.presentId" placeholder="子活动分组" clearable>
                                    <Option :value="item.id" v-for="(item,index) in presentList" :key="index">{{ item.activityTag }}</Option>
                                </Select>
                            </Form-item>
                        </div>
                        <div class="btn-right w10">
                            <div class="searchBox">
                                <div class="btn-left search-left" @click="showQuery=!showQuery">
                                    <button type="button">
                                        {{showQuery?'收起':'更多'}}
                                        <Icon type="ios-arrow-down" size="14" style="margin-top:-2px;" v-if="!showQuery"/>
                                        <Icon type="ios-arrow-up" size="14" style="margin-top:-2px;" v-else/>
                                    </button>
                                </div>
                                <div class="btn-right search-right" @click="submit('form')">
                                    <Button shape="circle" icon="ios-search" type="primary">搜索</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <transition name="fade">
                        <div class="container" v-if="showQuery">
                            <div class="btn-left w36">
                                <Form-item >
                                    <Select v-model="formData.period" placeholder="上传周期" clearable  multiple>
                                        <Option v-for="(item, key, index) in timeList" :value="key" :key="index" >
                                            第{{ key }}周 活动日期：{{ item[0] | formatDate}}-{{ item[1] | formatDate}}
                                        </Option>
                                    </Select>
                                </Form-item>
                            </div>
                        </div>
                    </transition>
                </Form>
            </div>
            <div class="box" style="padding:10px">
                <div class="contentTop">
                    <span class="btn-left">
                        此表共包含<span class='numColor'>{{pageNum}}</span>
                        条数据，总领取折扣
                        <span class='numColor'>{{sumReceiveWinAmount}}</span>
                        ，单位总领取折扣
                        <span class='numColor'>{{mReceiveWinAmount}}</span>
                        ，员工总领取折扣
                        <span class='numColor'>{{wReceiveWinAmount}}</span>
                    </span>
                </div>
                <hhTable ref="table" :columns="columns" :pageData="pageData" :noneStatus="noneStatus" disabled-hover></hhTable>
            
            </div>
            <div class="page-box">
                <div>
                    <Page :total="pageNum" :current="1" @on-change="changePage"></Page>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
import config from "@/util/config.js";
import myModal from "@/components/Modal/my-modal.vue";
import fieldNameDes from "@/components/field-name-description.vue";
import hhTable from "@/components/table/table.vue";
import dataRange from "@/components/data-rang.vue";
import addNewBtn from "@/components/Button/addNew-btn.vue";
import {
  queryActivityPresentVOByactivityId //根据活动ID获取陈列活动分组列表
} from "@/api/common.js";
export default {
  name: "weeks-fee-collection-summary-keepAlive",

  components: {
    dataRange,
    hhTable,
    myModal,
    fieldNameDes,
    addNewBtn
  },
  data() {
    return {
      groupList: [],
      exportExportData: {
        uploadText: "选择上传文件",
        brandId: "",
        loadFilePath: ""
      },
      wReceiveWinAmount: 0,
      mReceiveWinAmount: 0,
      sumReceiveWinAmount: 0,
      exportExport: false,
      noneStatus: false,
      formData: {
        brabdId: "",
        period: []
      },
      page: 1,
      pageNum: 0,
      timeList: [],
      columns: [
        {
          title: "序号",
          type: "index"
        },
        {
          title: "领取周期",
          key: "recTime",
          align: "center",
          tooltip: true
        },
        {
          title: "经销商名称",
          key: "merchantName",
          align: "center",
          tooltip: true
        },
        {
          title: "活动名称",
          key: "groupName",
          align: "center",
          tooltip: true
        },
        {
          title: "项目名称",
          key: "activityName",
          align: "center",
          tooltip: true
        },
        {
          title: "分组名称",
          key: "activityTag",
          align: "center",
          tooltip: true
        },
        {
          title: "老板获得折扣",
          key: "merchantWinAmount",
          align: "center",
          tooltip: true
        },
        {
          title: "老板已领折扣",
          key: "wReceiveWinAmount",
          align: "center",
          tooltip: true
        },
        {
          title: "员工已领折扣",
          key: "workerWinAmount",
          align: "center",
          tooltip: true
        },
        {
          title: "员工已领折扣",
          key: "mReceiveWinAmount",
          align: "center",
          tooltip: true
        }
      ],
      importUrl: config.uploadWorkerExcel,
      pageData: [],
      brandList: [],
      distributorList: [],
      activityList: [],
      presentList: [],
      uploadText: "选择上传文件",
      wordUploadFlag: false, //上传成功标识
      isUpload: false,
      showQuery: false,
      examineType: null, //审核类型
      page: 1,
      pageSize: 10
    };
  },
  created() {
    this.Global.doPost(
      "condition/queryBrands.json",
      { date: 15, scope: "a" },
      res => {
        this.brandList = [];
        Object.entries(res).forEach(item => {
          this.brandList.push({ id: Number(item[0]), brandName: item[1] });
        });
        this.formData.brandId = this.brandList[0].id;
        this.changeValue(this.formData.brandId);
      }
    );
  },
  watch: {},
  methods: {
    getpresentList(value) {
      this.presentList = [];
      this.formData.presentId = "";
      if (!value) return;
      queryActivityPresentVOByactivityId(value).then(res => {
        if (res && res.status == 1) {
          this.presentList = res.data;
        }
      });
    },
    changeValue(value) {
      this.distributorList = [];
      this.formData.merchantId = "";
      this.groupList = [];
      this.formData.groupId = "";
      if (!value) return;
      //查询经销商数据
      this.getDistributorList(value);
      //查询活动数据
      this.Global.doPostNoLoading(
        "condition/queryGroup.json",
        { date: 7, scope: "a", brandId: value },
        res => {
          Object.entries(res).forEach(item => {
            this.groupList.push({ id: Number(item[0]), groupName: item[1] });
          });
          //   if (this.groupList && this.groupList.length) {
          //     this.formData.groupId = this.groupList[0].id;
          //     this.getActivityList(this.formData.groupId)
          //   }
        }
      );
    },
    //查询经销商数据
    getDistributorList(brandId) {
      this.distributorList = [];
      this.Global.doPost(
        "dealers/doQueryMerchantByBrandId.json",
        { brandId },
        res => {
          if (res.length) {
            this.distributorList = res;
          }
        }
      );
    },
    getActivityList(value) {
      this.activityList = [];
      this.formData.activityId = "";
      if (!value) return;
      this.Global.doPostNoLoading(
        "condition/queryActivity.json",
        { date: 7,  scope: "a", groupId: value },
        res => {
          Object.entries(res).forEach(item => {
            this.activityList.push({ id: Number(item[0]), name: item[1] });
          });
        }
      );
      this.Global.doPost("liquidate/getWeeksList.json", value, res => {
        this.formData.weeks = "";
        this.timeList = res;
      });
    },
    handleError() {},
    handleSuccess(response, file, fileList) {
      this.exportExportData.uploadText = file.name;
      var url = response.data;
      if (url) {
        this.exportExportData.loadFilePath = url;
      }
    },
    closeModal() {
      this.exportExport = false;
    },
    submit(name) {
      this.page = 1;
      this.init();
    },
    changePage(size) {
      this.page = size;
      this.init();
    },
    init() {
      var data = this.Global.JsonChange(this.formData);
      this.Global.deleteEmptyProperty(data);
      data["currentPage"] = this.page;
      data["pageSize"] = this.pageSize;
      if (this.formData.period.length) {
        data["period"] = this.formData.period.join();
      } else {
        delete data["period"];
      }
      this.Global.doPost(
        "patrolCost/patrolCostSummaryByWeek.json",
        data,
        res => {
          this.pageData = res.datalist;
          this.pageNum = res.items;
          this.page = res.page;
          if (res.datalist.length) {
            this.wReceiveWinAmount = res.datalist[0].sumWWinAmount;
            this.mReceiveWinAmount = res.datalist[0].sumMWinAmount;
            this.sumReceiveWinAmount = res.datalist[0].sumReceiveWinAmount;
            res.datalist.forEach(item => {
              item.recTime = this.Global.createTime(item.recTime);
            });
          } else {
            this.wReceiveWinAmount = 0;
            this.mReceiveWinAmount = 0;
            this.sumReceiveWinAmount = 0;
          }
          this.noneStatus = true;
        }
      );
    },
    download() {
      const url =
        "https://hbrand.oss-cn-hangzhou.aliyuncs.com/demo/displayRetailPurchases.xlsx";
      window.open(url);
    },

    uploadExcel() {
      if (!this.exportExportData.brandId) {
        this.$Message.error("请选择品牌");
        return false;
      }
      if (!this.exportExportData.loadFilePath) {
        this.$Message.error("请核实上传文件");
        return false;
      }
      let params = {
        loadFilePath: this.exportExportData.loadFilePath,
        brandId: this.exportExportData.brandId
      };
      this.isUpload = true;
      //导入
      this.Global.doPost(
        "position/positionSalesRouteImport.json",
        params,
        res => {
          this.init();
          this.$Message.success("上传成功");
          this.wordUploadFlag = true;
          this.isUpload = false;
          this.exportExport = false;
        }
      );
    },
    exportExcel() {
      var data = this.Global.JsonChange(this.formData);
      this.Global.deleteEmptyProperty(data);
      var url = this.Global.getExportUrl(
        "position/positionSalesRouteExport.json",
        data
      );
      window.open(url);
    }
  },
  filters: {
    formatDate(t) {
      return new Date(t).pattern("yyyy-MM-dd");
    }
  }
};
</script>