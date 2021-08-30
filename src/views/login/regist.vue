<template>
  <div class="login_container" v-loading="loading" element-loading-text="正在努力加载中..."
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(0, 0, 0, 0.8)">
    <div class="tab">
      <h2 class="text-style">欢迎注册</h2>
      <p class="text-style text-style-p">每一天，乐在进步！</p>
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="username">
          <Input type="text" v-model="formInline.username" placeholder="昵称">
            <Icon type="logo-tux" slot="prepend"/>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="formInline.password" placeholder="密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>


        <FormItem prop="num">
          <Input type="number" v-model="formInline.phoneNumber" placeholder="手机号">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <div class="code-style">
          <FormItem prop="code">
            <Input type="text" v-model="formInline.code" placeholder="验证码">
              <Icon type="ios-send" slot="prepend"/>
            </Input>
          </FormItem>
          <Button :disabled="btnDisabled" type="warning" @click="randomCode">{{ codeText ? codeText : '获取验证码' }}</Button>
        </div>
      </Form>
      <Button style="width:100%;margin-top:10px" type="primary" :loading="btnLoading"  @click="handleSubmit('formInline')">立即注册</Button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    // /^1[0-9]{10}$/.test(s)
    var handleNum = ((rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入手机号'))
      } else if (!/^1[0-9]{10}$/.test(value)) {
        return callback(new Error('请输入正确手机号'))
      } else {
        callback()
      }
    })
    return {
      btnDisabled: false,
      codeText: '获取验证码',
      loading: false,
      btnLoading: false,
      isFocus: false,
      verificationCode: '',
      formInline: {
        username: '',
        password: '',
        phoneNumber: '',
        code: ''
      },
      ruleInline: {
        username: [
          { required: true, message: '昵称不可为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
        ],
        phoneNumber: [
          { validator: handleNum, trigger: 'blur' },
        ],
        code: [
          { required: true, message: '验证码不能为空', trigger: 'blur' },
        ],
      }
    }
  },
  created() {
  },
  methods: {
    randomCode() {
      this.codeText = ''
      this.btnDisabled = true
      var num = 59
      const params = new FormData();
      params.append("phoneNumber",this.formInline.phoneNumber)
      this.$ajax.post(this.common.getVerifiedCode, params,this,false).then((res) => {
        console.log(res, 'res')
        if (res.code == 0) {
          this.verificationCode = res.data
        }
      })
      let time = setInterval(() => {
        if (num <= 0) {
          this.btnDisabled = false
          this.codeText = '重新发送验证码'
          this.verificationCode = ''
          clearInterval(time)
          return
        }
        this.codeText = `${num--}秒后，重新发送`
      }, 1000)
    },
    handleSubmit() {
      if(this.btnLoading) return
      this.$refs.formInline.validate((valid) => {
        if (valid) {
          if (this.verificationCode != this.formInline.code) {
            this.$message.error('验证码不正确，重新输入')
            return
          }
          this.loading = true
          this.btnLoading = true
          const { username, password, phoneNumber} = this.formInline
          const params = new FormData();
          params.append("username",username);
          params.append("password",password);
          params.append("phoneNumber",phoneNumber);
          this.$api.post(this.common.registry, params,this,false).then((res) => {
            if (res.code == 0) {
              this.$message.success(`${res.data}，即将跳转登陆页`)
              setTimeout(() => {
                this.$router.push('/login')
              }, 2000)
            } else {
              this.$message.error(res.data)
            }
          }).finally(() => {
            this.loading = false
            this.btnLoading = false
          })
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
@import '../../style/login/login.less';
</style>
<style scoped>
.text-style{
  color: black;
}
.text-style-p{
  padding-bottom: 20px;
}
.ivu-form-inline .ivu-form-item{
  display: block;
  width: 100%;
}
.ivu-form-item .ivu-form-item-required{
  width: 100%;
}
</style>
