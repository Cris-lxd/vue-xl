<template>
  <el-dialog title="待办配置" :visible.sync="isShow" class="iframe-dialog-container">
    <div>
      <el-form size="mini" label-width="170px">
        <!-- 系统名称、系统编码、业务类型、业务编码、模板名称、模板编码+新增加的字段，仅新增加字段可编辑。 -->
        <el-form-item label="系统名称">
          <div class="des">{{detail.systemName}}</div>
        </el-form-item>
        <el-form-item label="系统编码">
          <div class="des">{{detail.systemNo}}</div>
        </el-form-item>
        <el-form-item label="业务类型">
          <div class="des">{{detail.approvalCode}}</div>
        </el-form-item>
        <!-- <el-form-item label="业务编码">
          <div class="des">{{detail.productCode}}</div>
        </el-form-item> -->
        <el-form-item label="模板名称">
          <div class="des">{{detail.flowName}}</div>
        </el-form-item>
        <el-form-item label="模板编码">
          <div class="des">{{detail.flowModelNo}}</div>
        </el-form-item>
        <el-form-item label="待办类别">
          <el-select v-model="detail.businessCategory" placeholder="请选择" class="el-select--maia">
            <el-option
              v-for="item in businessCategory"
              :key="item.key"
              :label="item.value"
              :value="item.key">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否支持外网打开待办">
          <el-select v-model="detail.outsideNet" placeholder="请选择" class="el-select--maia">
            <el-option
              v-for="item in outsideNet"
              :key="item.key"
              :label="item.value"
              :value="item.key">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="云图梭桌面端打开待办方式">
          <el-select v-model="detail.desktopOpenType" placeholder="请选择" class="el-select--maia">
            <el-option
              v-for="item in desktopOpenType"
              :key="item.key"
              :label="item.value"
              :value="item.key">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="云图梭WEB端打开待办方式">
          <el-select v-model="detail.webOpenType" placeholder="请选择" class="el-select--maia">
            <el-option
              v-for="item in webOpenType"
              :key="item.key"
              :label="item.value"
              :value="item.key">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否支持开通热键审批">
          <el-select v-model="detail.openHotKey" placeholder="请选择" class="el-select--maia">
            <el-option
              v-for="item in openHotKey"
              :key="item.key"
              :label="item.value"
              :value="item.key">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button size="medium" @click="cancel" :disabled="isCommiting">取消</el-button>
      <el-button size="medium" type='primary' @click="commit" :loading="isCommiting" :disabled="isLoading || isCommiting">确定</el-button>
    </div>
  </el-dialog>
</template>
<script>
  // import { getBusinessVectorById, updateBusinessVector } from '@/api'
  // import { businessVector } from '@/plugin/constString'
  // const { businessCategory, desktopOpenType, outsideNet, openHotKey, webOpenType } = businessVector
  export default {
    name: 'EditTask',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      editId: {
        type: [String, Number],
        default: ''
      }
    },
    data() {
      return {
        isLoading: false, // 加载中
        isCommiting: false, // 提交中
        businessCategory: [], // 0审批待办，1任务待办
        desktopOpenType: [], // 云图梭桌面端打开待办方式：0云图梭弹窗、1跳到WEB端
        outsideNet: [], // 是否支持外网打开待办：0支持、1不支持
        openHotKey: [], // 是否支持开通热键审批：1是，0否
        webOpenType: [], // 云图梭WEB端打开待办方式：0云图梭弹窗、1跳到WEB端
        detail: {}
      }
    },
    computed: {
      isShow: {
        get() {
          if (this.visible) {
            this.getDetail()
          }
          return this.visible
        },
        set(value) {
          this.$emit('update:visible', value)
        }
      }
    },
    methods: {
      // 获取当前详情
      getDetail() {
        this.isLoading = true
        // getBusinessVectorById(this.editId).then(res => {
        //   this.detail = res.data || {}
        // }).finally(() => {
        //   this.isLoading = false
        // })
      },
      // 提交
      commit() {
        if (this.isLoading || this.isCommiting) {
          return
        }
        this.isCommiting = true
        // const postData = {
        //   id: this.detail.id,
        //   desktopOpenType: this.detail.desktopOpenType,
        //   businessCategory: this.detail.businessCategory,
        //   outsideNet: this.detail.outsideNet,
        //   webOpenType: this.detail.webOpenType,
        //   openHotKey: this.detail.openHotKey
        // }
        // updateBusinessVector(postData).then(res => {
        //   this.$success('更新成功')
        //   this.$emit('updateFormList')
        // }).finally(() => {
        //   this.isCommiting = false
        //   this.isShow = false
        // })
      },
      // 取消
      cancel() {
        this.isShow = false
      }
    }
  }
</script>
