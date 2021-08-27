<template>
  <div class="manage">
    <div class="manage-content">
      <div class="filter-box">
        <el-form size="medium" :label-position="labelPosition" ref="fromData" label-width="80px" :model="fromData">
          <el-row :gutter="50">
            <el-col :span="6">
              <el-form-item prop="productName" label="产品名称">
                <el-input placeholder="产品名称" v-model="fromData.productName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item prop="productCode" label="产品编码">
                <el-input placeholder="产品编码" v-model="fromData.productCode"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item prop="systemName" label="系统名称">
                <el-input placeholder="系统名称" v-model="fromData.systemName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item prop="systemNo" label="系统编码">
                <el-input placeholder="系统编码" v-model="fromData.systemNo"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="50">
            <el-col :span="6">
              <el-form-item prop="approvalCode" label="审批类型">
                <el-input placeholder="审批类型" v-model="fromData.approvalCode"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item prop="flowName" label="模板名称">
                <el-input placeholder="模板名称" v-model="fromData.flowName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item prop="flowModelNo" label="模板编码">
                <el-input placeholder="模板编码" v-model="fromData.flowModelNo"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      <div class="filter-btns">
        <el-button type="primary" @click="getList()">查询</el-button>
        <el-button type="primary" @click="exportFile()">导出</el-button>
        <el-button type="primary" @click="clear()">重置</el-button>
      </div>
      </div>
      <form-list
        ref="listView"
        :tableData="tableData"
        :currentPage="currentPage"
        :totalResults="totalResults"
        @editTask="handleEditTask"
        @sizeChange="handleSizeChange"
        @currentChange="handleCurrentChange"
      ></form-list>
      <EditTask :visible.sync='visible' :editId="editId" @updateFormList="getList"></EditTask>
    </div>
  </div>
</template>
<script>
  // import { getBusinessVectorList, exportBusinessVector } from '@/api'
  import FormList from "@/components/formList.vue"
  import EditTask from "@/components/editTask.vue"
  export default {
    name: "Manage",
    components: {
      EditTask,
      FormList
    },
    data() {
      return {
        loading: true,
        tableData: [],
        currentPage: 1,
        labelPosition: 'top',
        editId: '',
        visible: false,
        fromData: {
          productName: '',
          productCode: '',
          systemName: '',
          systemNo: '',
          approvalCode: '',
          flowName: '',
          flowModelNo: ''
        },
        totalResults: 0,
        pageSize: 10,
        pageNo: 1
      }
    },
    mounted() {
      this.getList()
    },
    methods: {
      /**
       * @description: 每页展示多少条数据改变时触发的回调函数
       * @param {*} val 每页展示的条数
       */
      handleSizeChange(val) {
        this.pageSize = val
        this.getList()
      },
      /**
       * @description: 当前页改变时触发触发的回调函数
       * @param {*} val
       */
      handleCurrentChange(val) {
        this.pageNo = val
        this.getList()
      },
      handleEditTask(data) {
        this.editId = data.id
        this.visible = true
      },
      getList() { // 获取列表
        // this.$refs.listView.loading = true
        // const params = {
        //   ...this.fromData,
        //   pageSize: this.pageSize,
        //   pageNo: this.pageNo
        // }
        // getBusinessVectorList(params).then(({ code, data }) => {
        //   if (code == 1) {
        //     this.tableData = data.list
        //     this.totalResults = data.totalResults
        //     this.total =
        //       this.$refs.listView.loading = false
        //   }
        // }).catch(e => {
        //   console.log(e)
        //   this.$refs.listView.loading = false
        // })
      },
      exportFile() { // 导出文件
        // const params = {
        //   ...this.fromData,
        //   pageSize: 0,
        //   pageNo: 0
        // }
        // exportBusinessVector(params).then(res => {
        //   const blob = new Blob([res])
        //   const elink = document.createElement('a')
        //   const fileName = '模版配置表.xlsx'
        //   elink.download = fileName
        //   elink.style.display = 'none'
        //   elink.href = URL.createObjectURL(blob)
        //   document.body.appendChild(elink)
        //   elink.click()
        //   URL.revokeObjectURL(elink.href)
        //   document.body.removeChild(elink)
        // })
      },
      clear() { // 重置
        this.$refs.fromData.resetFields()
        this.getList()
      }
    }
  }
</script>
<style lang="less" scoped>
.manage{
  padding: 10px;
  box-sizing: border-box;
  background-color: rgb(241,241,241);
  height: 100%;
  overflow-y: scroll;
  .manage-content{
    // height: 100%;
    box-sizing: content-box;
    background-color: #fff;
    .filter-box{
      padding: 20px;
      border-bottom: 5px solid rgb(241,241,241);
      .el-form-item__label{
        padding: 0;
      }
      .filter-btns{
        display: inline-block;
        display: flex;
        justify-content: flex-end;
        .el-button{
          padding: 10px 30px;
        }
      }
    }
  }
}
</style>
