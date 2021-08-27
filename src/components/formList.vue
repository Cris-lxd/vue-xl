<template>
  <div class="form-list-wrap">
    <el-table v-loading="loading" :data="tableData" border style="width: 100%" height="1000px">
      <el-table-column prop="flowName" label="模板名称"></el-table-column>
      <el-table-column prop="flowModelNo" label="模板编码"></el-table-column>
      <el-table-column prop="systemName" label="系统名称"></el-table-column>
      <el-table-column prop="systemNo" label="系统编码"></el-table-column>
      <el-table-column prop="approvalCode" label="业务类型"></el-table-column>
      <el-table-column label="待办类别">
        <template slot-scope="scope">
          <p>
            {{ scope.row.businessCategory === 0 ? "审批待办" : "任务待办" }}
          </p>
        </template>
      </el-table-column>
      <el-table-column label="是否支持外网打开待办">
        <template slot-scope="scope">
          <p>{{ scope.row.outsideNet === 0 ? "支持" : "不支持" }}</p>
        </template>
      </el-table-column>
      <el-table-column label="云图梭桌面端打开待办方式">
        <template slot-scope="scope">
          <p>{{ scope.row.desktopOpenType === 0 ? "云图梭弹窗" : "跳到WEB端" }}</p>
        </template>
      </el-table-column>
      <el-table-column label="云图梭WEB端打开待办方式">
        <template slot-scope="scope">
          <p>{{ scope.row.webOpenType === 0 ? "云图梭弹窗" : "跳到WEB端" }}</p>
        </template>
      </el-table-column>
      <el-table-column label="是否支持开通热键审批">
        <template slot-scope="scope">
          <p>{{ scope.row.openHotKey === 0 ? "否" : "是" }}</p>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button class="edit-btn" @click="handleEdit(scope.row)" type="text" size="small"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div style="display:flex;justify-content:center">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalResults"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FormList",
    props: {
      currentPage: {
        type: Number,
        default: 1
      },
      totalResults: {
        type: Number,
        default: 0
      },
      tableData: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    data() {
      return {
        loading: false
      }
    },
    methods: {
      /**
       * @description: 编辑模板配置
       * @param {*} data 要编辑的模板配置信息
       */
      handleEdit(data) {
        this.$emit('editTask', data)
      },
      /**
       * @description: 每页展示多少条数据改变时触发的回调函数
       * @param {*} val 每页展示的条数
       */
      handleSizeChange(val) {
        this.$emit('sizeChange', val)
      },
      /**
       * @description: 当前页改变时触发触发的回调函数
       * @param {*} val
       */
      handleCurrentChange(val) {
        this.$emit('currentChange', val)
      }
    }
  }
</script>

<style lang="less" scoped>
.form-list-wrap {
  padding-bottom: 20px;
  /deep/.el-table {
    margin-bottom: 20px;
    thead th {
      background: #f4f5f6;
    }
  }
  /deep/.el-pagination {
    display: flex;
    justify-content: flex-end;
  }
  .edit-btn {
    font-size: 14px;
  }
}
</style>
