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
              <a  @click="forgetPwd">忘记密码？</a>
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
  import { setLocaStorage } from '@/utils/SessionUtil'
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
        let params = new FormData();
        params.append("username",this.formInline.user);
        params.append("password",this.formInline.password);
        this.$ajax.post(this.common.login,params,this,false).then((res) => {
          if(res.code == 0){
            this.$message.success('登陆成功')
            this.loginLoading = false
            setLocaStorage('userInfo', res.data)
            setLocaStorage('token', res.data.token)
            this.$router.push('/')
          }else{
            this.$message.error(res.data)
          }
        }).finally(() => {
          this.loginLoading = false
        })
      },
      regist() {
        this.$router.push('regist')
      },
      clear() {
        this.$refs.formInline.resetFields()
      },
      /**
       * 忘记密码
       */
      forgetPwd(){
        this.$router.push('changePwd');
      }
    }
  }
</script>
<style scoped lang="less">
@import '../../style/login/login.less';
</style>
<style scoped>
.ivu-form-inline .ivu-form-item{
  display: block;
}
.ivu-form-item .ivu-form-item-required{
  width: 100%;
}
</style>
