<template>
  <div class="home_container">
      <navBar></navBar>
      <div style="width:100%">
        <div class="header-style">
          <span>首页/</span>
          <span>欢迎用户 <span class="login-name">{{ userObj.name }}</span></span>
        </div>
        <router-view></router-view>
      <router-view></router-view>
      <div class="log_out">
        <Dropdown>
<!--          <Button type="primary">-->
<!--            退出登陆-->
<!--            <Icon type="ios-arrow-down"></Icon>-->
<!--          </Button>-->
          <Avatar size="large" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />

          <DropdownMenu slot="list">
            <DropdownItem @click.native="alertinfo">个人信息</DropdownItem>
            <DropdownItem @click.native="logout">登出</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
  </div>
</template>

<script>
import navBar from './navBar/index.vue'
export default {
  components: {
    navBar
  },
  data() {
    return {
      userObj: {}
    }
  },
  created() {
    console.log(JSON.parse(localStorage.getItem('user')), 'localSto')
    if (JSON.parse(localStorage.getItem('user')).name) {
      this.userObj = JSON.parse(localStorage.getItem('user'))
    } else {
      this.userObj = { name: '访客人员' }
    }
  },
  methods: {
    logout() {
      this.$router.push('/login');
      sessionStorage.removeItem("user", null);
      sessionStorage.removeItem("token", null);
      this.$Message.success("退出登陆成功");
    },
    alertinfo() {
      alert("hahah");
    }
  }
}
</script>

<style lang="less">
.home_container{
  display: flex;
  background: #fff;
  padding: 10px;
  /*background: green;*/
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  .header-style{
    width: 100%;
    height: 49px;
    border-bottom: 1px solid #000;
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: 10px;
    .login-name{
      font-size: 18px;
      color: red;
    }
  }

}
.home_container .log_out{
  width: 2%;
  height: 4%;
  position: absolute;
  margin-right: 1%;
  margin-top: 0.5%;
  right: 0;
  top: 0;
  /*background-color: teal;*/
}

</style>
