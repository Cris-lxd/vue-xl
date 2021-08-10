<template>
  <div class="login_container" :style="height" v-loading="loginLoading" element-loading-text="正在登陆..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">
    <div class="tab">
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
          <FormItem prop="user">
              <Input type="text" v-model="formInline.user" placeholder="账号">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem prop="password">
              <Input type="password" v-model="formInline.password" placeholder="密码">
                  <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem>
              <div class="btn_style">
                <Button type="primary" @click="handleSubmit('formInline')">登陆</Button>
                <Button type="primary" @click="clear('formInline')">重置</Button>
                <Button  type="default" @click="regist">注册</Button>
              </div>
          </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        loginLoading: false,
        height: { height: 'calc(100vh)'},
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: '账号不能为空', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
          ]
        }
      }
    },
    methods: {
      handleSubmit() {
        this.loginLoading = true
        // const params = {
        //   username: this.formInline.user,
        //   password: this.formInline.password
        // }
        // this.$api.post(this.common.login, params).then(({ data }) => {
        //   if (data.code == 0) {
        //     this.$message.success('登陆成功')
        //     this.$store.commit('setUserInfo', data.data)
        //     console.log(this.$store.state, 'state')
        //     setTimeout(() => {
        //       this.$router.push('/home')
        //       this.$router.go(0)
        //       this.loginLoading = false
        //   }, 1000)
        //   } else {
        //     this.$message.error(data.data)
        //   }
        // }).finally(() => {
        //   this.loginLoading = false
        // })
        this.$message.success('登陆成功')
        this.$router.push('/warningInfo')
        this.$router.go(0)
        this.loginLoading = false
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
@import './login.less' ;
</style>
<style scoped>
.ivu-form-inline .ivu-form-item{
  display: block;
}
.ivu-form-item .ivu-form-item-required{
  width: 100%;
}
</style>
