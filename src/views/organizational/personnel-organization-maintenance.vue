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
  //   justify-content: center;
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
  .modal-main,
  .modal-main-modify {
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
  .modal-main-modify {
    display: flex;
    justify-content: center;
    flex-direction: column;
    h3 {
      text-align: center;
    }
    .modal-table {
      width: 80%;
      margin-left: 10%;
    }
  }
}
.demo {
  color: @primary-color;
  margin-left: 10px;
  cursor: pointer;
}
</style>

<template>
  <div id="Main">
    <!-- <h2 class="Title">业务员关系管理</h2> -->
    <div class="main-container">
      <div class="box">
        <Form ref="form" class="form" :model="formData" :label-width="10">
          <div class="container">
            <div class="btn-left w18">
              <Form-item prop="brandId" required>
                <Select v-model="formData.brandId" placeholder="品牌名称">
                  <Option
                    :value="item.id"
                    v-for="(item,index) in brandList"
                    :key="index"
                  >{{ item.brandName }}</Option>
                </Select>
              </Form-item>
            </div>
            <div class="btn-left w18">
              <Form-item>
                <Input v-model.trim="formData.userName" clearable placeholder="员工姓名"></Input>
              </Form-item>
            </div>
            <div class="btn-left w18">
              <Form-item>
                <Input v-model.trim="formData.phone" clearable placeholder="手机号"></Input>
              </Form-item>
            </div>
            <div class="btn-left w18">
              <Form-item>
                <Input v-model.trim="formData.deptName" clearable placeholder="组织名称"></Input>
              </Form-item>
            </div>
          </div>
          <div class="btn-right w10">
            <div class="searchBox">
              <div class="btn-right search-right" @click="submit('form')">
                <Button shape="circle" icon="ios-search" type="primary">搜索</Button>
              </div>
            </div>
          </div>
        </Form>
      </div>
      <div class="box" style="padding:10px">
        <div class="contentTop">
          <span class="btn-left">
            此表共包含
            <span class="numColor">{{pageNum}}</span>条数据
          </span>

          <importBtn class="btn-right" @btnClick="exportExport = true"/>
          <exportBtn class="btn-right" @btnClick="exportExcel"/>
        </div>
        <hhTable :columns="columns" :pageData="pageData" :noneStatus="noneStatus" disabled-hover></hhTable>
      </div>
      <div class="page-box">
        <div>
          <Page :total="pageNum" :current="1" @on-change="changePage"></Page>
        </div>
      </div>
    </div>
    <!-- 导入 -->
    <myModal class="myModal" @close="closeModal" :modal="exportExport">
      <div slot="main" class="modal-main">
        <h3>导入</h3>
        <div class="modal-table">
          <Form ref="form" :model="exportExportData" :label-width="88">
            <Form-item label="品牌名称" required>
              <Select v-model="exportExportData.brandId" placeholder="品牌名称">
                <Option
                  :value="item.id"
                  v-for="(item,index) in brandList"
                  :key="index"
                >{{ item.brandName }}</Option>
              </Select>
            </Form-item>
            <Form-item label="上传文件" required>
              <div style="overflow:hidden;display:flex;flex-direction:row;">
                <div
                  class="upDate"
                  style="cursor:pointer;text-align:center;border: 1px solid #aeaeae;padding: 2px 12px;margin-right: 10px;width:150px;"
                >
                  <Upload
                    :action="importUrl"
                    :show-upload-list="false"
                    :on-success="handleSuccess"
                    :on-error="handleError"
                  >
                    <Icon type="ios-folder" size="14" color="#53a3f4"></Icon>
                    <span>{{exportExportData.uploadText}}</span>
                  </Upload>
                </div>
                <div class="demo" @click="download">
                  <Icon type="ios-paper-outline" size="14" color="@primary-color"></Icon>
                  <span>下载模版</span>
                </div>
              </div>
            </Form-item>
            <div class="fotter" style="text-align:center;">
              <Button @click="closeModal" type="primary">取消</Button>
              <Button type="success" @click="uploadExcel">导入</Button>
            </div>
          </Form>
        </div>
      </div>
    </myModal>

    <!-- 修改 -->
    <myModal class="myModal" @close="showModify = false;" :modal="showModify">
      <div slot="main" class="modal-main-modify">
        <h3>组织修改</h3>
        <div class="modal-table">
          <Form ref="form" :model="exportExportData" :label-width="88">
            <Form-item label="员工姓名：">{{ addData.userName }}</Form-item>
            <Form-item label="手机号：">{{ addData.phone }}</Form-item>
            <Form-item label="组织名称：" required>
              <Input placeholder="请输入组织名称" v-model.trim="addData.deptName"/>
            </Form-item>
            <div class="fotter" style="text-align:center;">
              <Button @click="showModify = false;" type="primary">取消</Button>
              <Button type="success" @click="sureModify">确定</Button>
            </div>
          </Form>
        </div>
      </div>
    </myModal>
  </div>
</template>

<script>
import config from "@/util/config.js";
import myModal from "@/components/Modal/my-modal.vue";
import fieldNameDes from "@/components/field-name-description.vue";
import hhTable from "@/components/table/table.vue";
import exportBtn from "@/components/Button/export-btn.vue";
import importBtn from "@/components/Button/import-btn.vue";
export default {
  name: "personnel-organization-maintenance-keepAlive",

  components: {
    exportBtn,
    hhTable,
    importBtn,
    myModal,
    fieldNameDes
  },
  data() {
    return {
      exportExportData: {
        uploadText: "选择上传文件",
        brandId: "",
        loadFilePath: ""
      },
      exportExport: false,
      noneStatus: false,
      formData: {
        brabdId: ""
      },
      addData: {},
      page: 1,
      pageNum: 0,
      columns: [
        {
          title: "序号",
          type: "index"
        },
        {
          title: "员工姓名",
          key: "userName",
          align: "center"
        },
        {
          title: "手机号",
          key: "phone",
          align: "center"
        },
        {
          title: "组织名称",
          key: "deptName",
          align: "center"
        },
        {
          title: "操作",
          key: "action",
          minWidth: 200,
          align: "center",
          render: (h, params) => {
            let tag = [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.addData = {
                        userName: params.row.userName,
                        phone: params.row.phone,
                        deptName: params.row.deptName,
                        recordId: params.row.recordId,
                        brandId: params.row.brandId,
                        userId: params.row.userId
                      };
                      this.showModify = true;
                    }
                  }
                },
                "修改"
              )
            ];
            tag.push(
              h(
                "Button",
                {
                  props: {
                    type: "info",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.$Modal.confirm({
                        title: "警告",
                        content: "确定删除该用户",
                        onOk: () => {
                          this.Global.doPost(
                            "position/clearPositionDataPermissionsUserByKqt.json",
                            {
                              recordId: params.row.recordId
                            },
                            res => {
                              this.$Message.success("操作成功");
                              this.init();
                            }
                          );
                        }
                      });
                    }
                  }
                },
                "删除"
              )
            );
            return h("div", tag);
          }
        }
      ],
      showModify: false,
      importUrl: config.uploadWorkerExcel,
      pageData: [],
      brandList: [],
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
      }
    );
  },
  watch: {},
  methods: {
    //修改
    sureModify() {
      if (!this.addData.deptName) {
        this.$Message.error("请输入组织名称");
        return false;
      }
      let data = {
        recordId: this.addData.recordId,
        userId: this.addData.userId,
        brandId: this.addData.brandId,
        deptName: this.addData.deptName
      };
      this.Global.doPost(
        "position/modifyPositionDataPermissionsUserByKqt.json",
        data,
        res => {
          this.$Message.success("修改成功");
          this.showModify = false;
          this.init();
        }
      );
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
      this.Global.doPost(
        "position/queryPositionDataPermissionsUserByKqt.json",
        data,
        res => {
          this.pageData = res.datalist;
          this.pageNum = res.items;
          this.page = res.page;
          this.noneStatus = true;
        }
      );
    },
    download() {
      const url =
        "https://hbrand.oss-cn-hangzhou.aliyuncs.com/template/positionUserImport.xlsx";
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
        "position/positionDataPermissionsUserImport.json",
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
        "position/positionDataPermissionsUserExport.json",
        data
      );
      window.open(url);
    }
  }
};
</script>