<template>
  <div class="login_container" v-loading="loading" element-loading-text="正在努力加载中..."
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(0, 0, 0, 0.8)">
    <div class="tab">
      <h2 class="text-style">修改密码</h2>
      <p class="text-style text-style-p">每一天，乐在进步！</p>
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="username">
          <Input type="text" v-model="formInline.username" placeholder="账号">
            <Icon type="logo-tux" slot="prepend"/>
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
      <Form ref="newPwd" :model="newPwd" :rules="ruleNewPwd" inline>
        <FormItem prop="password1">
          <Input type="password" v-model="newPwd.password1" placeholder="请输入密码">
            <Icon type="ios-lock-outline" slot="prepend"/>
          </Input>
        </FormItem>
        <FormItem prop="password2">
          <Input type="password" v-model="newPwd.password2" placeholder="请再次输入密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
      </Form>
      <Button style="width:100%;margin-top:10px" type="primary" :loading="btnLoading"  ref="validator" @click="handleSubmit('formInline')">立即验证</Button>
      <Button style="width:100%;margin-top:10px" type="primary" :loading="btnLoading"  ref="changePwd" @click="changePwd('newPwd')">立即修改</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: "changePwd",
  data(){
    var handleNum = ((rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入手机号'))
      } else if (!/^1[0-9]{10}$/.test(value)) {
        return callback(new Error('请输入正确手机号'))
      } else {
        callback()
      }
    })

    return{
      codeText: '获取验证码',
      btnDisabled: false,
      loading: false,
      btnLoading: false,
      isFocus: false,
      verificationCode: '',
      username: '',
      formInline: {
        username: '',
        phoneNumber: '',
        code: ''
      },
      newPwd: {
        password1: '',
        password2: '',
      },
      ruleNewPwd: {
        password1: [
          {trigger: 'blur',required: true, message: '密码不可为空'},
        ],
        password2: [
          {trigger: 'blur',required: true, message: '密码不可为空'},
        ],
      },
      ruleInline: {
        username: [
          { required: true, message: '账户名称不可为空', trigger: 'blur' }
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
  mounted() {
    this.$refs.formInline.$el.style.display = '';    //获取验证码显示
    this.$refs.newPwd.$el.style.display = 'none';     //验证过后输入密码隐藏
    this.$refs.validator.$el.style.display = '';     //显示验证按钮
    this.$refs.changePwd.$el.style.display = 'none';      //隐藏修改密码按钮
  },
  methods: {
    /**
     * 获取验证码
     */
    randomCode() {
      this.codeText = ''
      this.btnDisabled = true
      var num = 59
      const params = new FormData();
      params.append("phoneNumber",this.formInline.phoneNumber)
      params.append("username",this.formInline.username)
      params.append("type","1");   //代表忘记密码时验证手机号和账户是否一致
      this.$ajax.post(this.common.getVerifiedCode, params,this,false).then((res) => {
        if (res.code == 0) {
          this.username = this.formInline.username
          this.verificationCode = res.data
        }else{
          this.$message.error(res.data)
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
          this.$message.info("请输入新密码");
          this.$refs.formInline.$el.style.display = 'none';
          this.$refs.newPwd.$el.style.display = '';
          this.$refs.validator.$el.style.display = 'none';
          this.$refs.changePwd.$el.style.display = '';
        }
      })
    },
    changePwd() {
      if(this.newPwd.password1 != this.newPwd.password2){
        this.$message.error("两次密码不一致，请核对");
        return;
      }
      const params = new FormData();
      params.append("username",this.username)
      params.append("password",this.newPwd.password1)
      this.$ajax.post(this.common.findPassword, params,this,false).then((res) => {
        if (res.code == 0) {
          this.$message.success(res.data + ",即将跳转登录")
          this.$router.push('/login')
        }else{
          this.$message.error(res.data)
        }
      })
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