<style lang="less" scoped>
@import "../../../config/index.less";

.box {
  width: 100%;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  padding: 30px 20px;
  padding-bottom: 0;
  background: #fff;
}
.ivu-table-row {
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1) !important;
  transform: translateY(0px);
}
.ivu-date-picker {
  display: block;
}
.searchBox {
  overflow: hidden;
  margin-top: 10px;
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
</style>

<template>
  <div id="Main">
    <!-- <h2 class="Title">活动参与明细</h2> -->
    <div class="box">
      <Form ref="form" :model="formData" :label-width="88" :rules="rule">
        <Row>
          <Col span="21">
            <Row>
              <Col span="16">
                <Form-item label="参与时间:" required>
                  <Row>
                    <Col span="11">
                      <Form-item>
                        <data-range hour="00:00" v-model="formData.queryStartTime" start></data-range>
                      </Form-item>
                    </Col>
                    <Col span="2" style="text-align: center;">至</Col>
                    <Col span="11">
                      <Form-item>
                        <data-range hour="24:00" placeholder="结束时间" v-model="formData.queryEndTime"></data-range>
                      </Form-item>
                    </Col>
                  </Row>
                </Form-item>
              </Col>
              <Col span="8">
                <Form-item label="品牌名称:" prop="brandId" required>
                  <Select v-model="formData.brandId" placeholder="请选择品牌" @on-change="changeValue">
                    <Option
                      :value="item.id"
                      v-for="(item,index) in brandList"
                      :key="index"
                    >{{ item.brandName }}</Option>
                  </Select>
                </Form-item>
              </Col>
              <Col span="24">
                <Row>
                  <Col span="8">
                    <Form-item label="活动包名:" prop="groupId" required>
                      <Select
                        v-model="formData.groupId"
                        placeholder="请选择活动包名"
                        @on-change="getActivityList"
                      >
                        <Option
                          :value="item.id"
                          v-for="(item,index) in groupList"
                          :key="index"
                        >{{ item.groupName }}</Option>
                      </Select>
                    </Form-item>
                  </Col>
                  <Col span="8">
                    <Form-item label="活动名称:" prop="activityId">
                      <Select v-model="formData.activityId" placeholder="请选择活动">
                        <Option
                          :value="item.id"
                          v-for="(item,index) in activityList"
                          :key="index"
                        >{{ item.name }}</Option>
                      </Select>
                    </Form-item>
                  </Col>
                  <Col span="8">
                    <Form-item label="折扣类型:" props="goodsType">
                      <Select v-model="formData.goodsType" clearable placeholder="请选择折扣类型">
                        <Option value="0">电子券</Option>
                        <Option value="1">实物折扣</Option>
                        <Option value="2">电子红包</Option>
                      </Select>
                    </Form-item>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span="2" offset="1">
            <div class="searchBox">
              <Button @click="submit('form')" class="btn-search search_btn" type="primary">查询</Button>
              <Button
                @click="showQuery=!showQuery"
                class="search_icon"
                type="primary"
                icon="ios-arrow-up"
                v-if="showQuery"
              ></Button>
              <Button
                @click="showQuery=!showQuery"
                class="search_icon"
                type="primary"
                icon="ios-arrow-down"
                v-else
              ></Button>
            </div>
          </Col>
        </Row>
        <transition name="fade">
          <Row v-if="showQuery">
            <Col span="7">
              <Form-item label="区域:" prop="areaCode">
                <Cascader :data="areaData" v-model="formData.areaCode" change-on-select></Cascader>
              </Form-item>
            </Col>
            <Col span="7">
              <Form-item label="用户ID:">
                <Input v-model.trim="formData.userId" placeholder="请输入用户ID"></Input>
              </Form-item>
            </Col>
          </Row>
        </transition>
      </Form>
    </div>
    <div class="box" style="margin-top: 15px;padding-bottom:20px">
      <div class="contentTop">
        <Button @click="exportExcel" class="btn-right" icon="ios-download-outline" type="primary">导出</Button>
      </div>
      <Table :columns="columns1" :data="pageData" disabled-hover></Table>
      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
          <Page :total="pageNum" :current="page" @on-change="changePage"></Page>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import area from "@/config/china_code_data.js";
import dataRange from "@/components/data-range/data-range.vue";
import { EDFAULT_STARTTIME, EDFAULT_ENDTIME } from "@/util/index.js"; //搜索条件默认时间
import { validateStart, validateEnd } from "@/util/index.js"; //验证规则

export default {
  name: "activity-partake-detail-keepAlive",
  data() {
    return {
      showQuery: false,
      formData: {
        activityName: "",
        brandId: "",
        groupId: "",
        activityId: "",
        queryStartTime: EDFAULT_STARTTIME,
        queryEndTime: EDFAULT_ENDTIME,
        areaCode: [],
        goodsType: "",
        userId: ""
      },
      currentPage: 1,
      page: 1,
      pageNum: 0,
      rule: {
        queryStartTime: [{ validator: validateStart }],
        queryEndTime: [{ validator: validateEnd }]
      },
      columns1: [
        {
          title: "序号",
          type: "index",
          minWidth: 70,
          align: "center"
        },
        {
          title: "参与时间",
          key: "createTime",
          align: "center",
          minWidth: 150,
          render: (h, params) => {
            return params.row.createTime
              ? this.Global.createTime(params.row.createTime)
              : "";
          }
        },
        {
          title: "用户ID",
          key: "userId",
          align: "center",
          minWidth: 110
        },
        {
          title: "手机号",
          key: "phone",
          minWidth: 150,
          align: "center"
        },
        {
          title: "昵称",
          key: "nickName",
          minWidth: 150,
          align: "center"
        },
        {
          title: "省",
          key: "province",
          minWidth: 150,
          align: "center"
        },
        {
          title: "市",
          key: "city",
          minWidth: 150,
          align: "center"
        },
        {
          title: "区",
          key: "area",
          minWidth: 150,
          align: "center"
        },
        {
          title: "活动名称",
          key: "activityName",
          minWidth: 150,
          align: "center"
        },
        {
          title: "业务ID",
          key: "recordId",
          minWidth: 150,
          align: "center"
        },
        {
          title: "业务单号",
          key: "wxTradeNo",
          minWidth: 150,
          align: "center"
        },
        {
          title: "折扣类型",
          key: "goodsType",
          minWidth: 150,
          align: "center",
          render: (h, params) => {
            return this.goodsType(params.row.goodsType);
          }
        },
        {
          title: "折扣",
          key: "goodsName",
          minWidth: 150,
          align: "center"
        },
        {
          title: "折扣状态",
          key: "statusMessage",
          minWidth: 150,
          align: "center"
        },
        {
          title: "交易单号",
          key: "wxTradeNo",
          minWidth: 150,
          align: "center"
        }
      ],
      pageData: [],
      areaData: area,
      brandList: [],
      groupList: [],
      activityList: []
    };
  },
  created() {
    this.Global.doPost(
      "condition/queryBrands.json",
      { date: 7, activityType: 1, scope: "a", channel: "C" },
      res => {
        this.brandList = [];
        Object.entries(res).forEach(item => {
          this.brandList.push({ id: Number(item[0]), brandName: item[1] });
        });
        if (this.brandList && this.brandList.length) {
          this.formData.brandId = this.brandList[0].id;
          this.changeValue(this.formData.brandId);
        }
      }
    );
  },
  components: {
    dataRange
  },
  methods: {
    getActivityList(value) {
      this.activityList = [];
      this.formData.activityId = "";
      if (!value) return;
      this.Global.doPost(
        "condition/queryActivity.json",
        { date: 7, activityType: 1, scope: "a", groupId: value },
        res => {
          Object.entries(res).forEach(item => {
            this.activityList.push({ id: Number(item[0]), name: item[1] });
          });
        }
      );
    },
    changeValue(value) {
      this.groupList = [];
      this.formData.groupId = "";
      if (!value) return;
      this.Global.doPost(
        "condition/queryGroup.json",
        { activityType: 1, scope: "a", brandId: value, channel: "C" },
        res => {
          Object.entries(res).forEach(item => {
            this.groupList.push({ id: Number(item[0]), groupName: item[1] });
          });
          if (this.groupList && this.groupList.length) {
            this.formData.groupId = this.groupList[0].id;
            this.getActivityList(this.formData.groupId);
          }
        }
      );
    },
    formateTime(time) {
      return new Date(Number(time)).pattern("yyyy-MM-dd-hh");
    },
    submit: function(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.page = 1;
          this.init(1, 10);
        } else {
          this.$Message.error("请选择查询条件!");
        }
      });
    },
    beforePage() {
      this.currentPage--;
      if (this.currentPage <= 1) {
        this.currentPage = 1;
        this.init(this.currentPage, 10);
      }
    },
    nextPage() {
      this.currentPage++;
      this.init(this.currentPage, 10);
    },
    changePage: function(size) {
      this.page = size;
      this.init(size, 10);
    },
    createTime: function(val) {
      var time = this.Global.createTime(val);
      return time;
    },
    init(currentPage, pageSize) {
      if (!this.formData.groupId) {
        this.$Message.error("请选择查询条件!");
        return false;
      }
      var data = this.Global.JsonChange(this.formData);
      data["queryStartTime"] = this.Global.createTime(
        this.formData.queryStartTime
      );

      data["queryEndTime"] = this.Global.createTime(this.formData.queryEndTime);

      this.Global.deleteEmptyProperty(data);
      data["userType"] = "C";
      data["currentPage"] = this.page;
      data["pageSize"] = pageSize;
      this.Global.doPost("report/activityDetailReport.json", data, res => {
        this.pageNum = res.items;
        this.pageData = res.datalist;
        this.page = res.page;
      });
    },
    formatYearMonth(time) {
      return new Date(Number(time)).pattern("yyyy-MM-dd");
    },
    goodsType: function(data) {
      console.log(data);
      return this.Global.ENUMS.goodsType[data];
    },
    exportExcel() {
      var data = this.Global.JsonChange(this.formData);
      data["queryStartTime"] = this.Global.createTime(
        this.formData.queryStartTime
      );

      data["queryEndTime"] = this.Global.createTime(this.formData.queryEndTime);

      this.Global.deleteEmptyProperty(data);
      data["userType"] = "C";
      var url = this.Global.getExportUrl(
        "report/activityDetailExport.json",
        data
      );
      window.open(url);
    }
  }
};
</script>