<template>
  <div class="login_container" v-loading="loading" element-loading-text="正在努力加载中..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">
    <div class="tab">
      <h2 class="text-style">欢迎注册</h2>
      <p class="text-style text-style-p">每一天，乐在进步！</p>
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="name">
              <Input type="text" v-model="formInline.name" placeholder="昵称">
                  <Icon type="logo-tux" slot="prepend"/>
              </Input>
          </FormItem>
          <FormItem prop="password">
              <Input type="password" v-model="formInline.password" placeholder="密码">
                  <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <!-- <FormItem prop="user">
              <Input type="text" @on-focus="isFocus = true" @on-blur="isFocus = false" v-model="formInline.user" placeholder="手机号">
                <Icon type="logo-apple" slot="prepend"/>
              </Input>
          </FormItem> -->
          <div class="code-style">
            <FormItem prop="code">
                <Input type="text" v-model="formInline.code" placeholder="验证码">
                    <Icon type="ios-send" slot="prepend"/>
                </Input>
            </FormItem>
            <Button type="warning" @click="randomCode">{{ codeText }}</Button>
          </div>
      </Form>
      <Button style="width:100%;margin-top:10px" type="primary" :loading="btnLoading" icon="ios-power" @click="handleSubmit('formInline')">立即注册</Button>
    </div>
  </div>
</template>
<script>
  import { setLocaStorage } from '@/utils/index.js'
  export default {
    data () {
      var validator = (rule, value, callback) => {
        if (value == '') {
          callback(new Error('验证码不可为空'))
        } else if (value != this.codeText) {
          callback(new Error('验证码错误'))
        } else {
          callback()
        }
        console.log(rule, value, callback, 'rule, value, callback')
      }
      return {
        codeText: '',
        loading: false,
        btnLoading: false,
        isFocus: false,
        randomList: [1,2,3,4,5,6,7,8,9,0,'A','B','C', 'D'],
        formInline: {
          name: '',
          password: '',
          code: '',
        },
        ruleInline: {
          name: [
            { required: true, message: '昵称不可为空', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
          ],
          code: [
            { validator: validator, trigger: 'blur' }
          ],
        }
      }
    },
    created() {
      this.randomCode()
    },
    methods: {
      randomCode() {
        this.codeText = ''
        for (let i = 0; i < 4; i++) {
          let index = Math.floor(Math.random()*13)
          this.codeText += this.randomList[index]
        }
      },
      handleSubmit() {
        if(this.btnLoading) return
        this.$refs.formInline.validate((valid) => {
          if (valid) {
            this.loading = true
            this.btnLoading = true
            this.$message.success('注册成功，即将跳转')
            setLocaStorage('user', JSON.stringify(this.formInline))
            setTimeout(() => {
              this.loading = false
              this.btnLoading = false
              this.$router.push('/home')
            }, 2000)
          }
        })
      },
      regist() {
        this.$router.push('regist')
      },
      clear() {
        this.$refs.formInline.resetFields()
      }
    }
  }
</script>
<style scoped lang="less">
@import './login.less';
.text-style{
  color: black;
}
.text-style-p{
  padding-bottom: 20px;
}
</style>
<style scoped>
.ivu-form-inline .ivu-form-item{
  display: block;
}
.ivu-form-item .ivu-form-item-required{
  width: 100%;
}
</style>
