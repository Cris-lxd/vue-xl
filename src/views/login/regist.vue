<template>
  <div class="login_container">
    <div class="tab">
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
          <FormItem prop="user">
              <Input type="text" v-model="formInline.user" placeholder="手机号">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem prop="password">
              <Input type="password" v-model="formInline.password" placeholder="验证码">
                  <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
      </Form>
      <Button style="width:100%" type="default" ghost @click="clear('formInline')">获取验证码</Button>
      <Button style="width:100%;margin-top:10px" ghost type="primary" @click="handleSubmit('formInline')">注册</Button>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: '手机号不能为空', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '验证码不能为空', trigger: 'blur' },
          ]
        }
      }
    },
    methods: {
      handleSubmit() {
        this.$refs.formInline.validate((valid) => {
          if (valid) {
            this.$Message.success('登陆成功');
          } else {
            this.$Message.error('登陆失败');
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
.login_container{
  width: 100%;
  height: 100%;
  position: absolute;
  background: black;
  .tab{
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
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
