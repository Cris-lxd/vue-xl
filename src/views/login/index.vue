<template>
  <div class="login_container">
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
                <Button  type="default" @click="regist" ghost>注册</Button>
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
        this.$refs.formInline.validate((valid) => {
          if (valid) {
            this.$Message.success('登陆成功');
            setTimeout(() => {
              this.$router.push('/home')
            }, 300)
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
    .btn_style{
      display: flex;
      justify-content: space-around;
    }
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
