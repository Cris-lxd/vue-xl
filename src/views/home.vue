<template>
  <div class="home_container">
      <navBar></navBar>
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

<style>
.home_container{
  display: flex;
  padding: 10px;
  /*background: green;*/
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

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
