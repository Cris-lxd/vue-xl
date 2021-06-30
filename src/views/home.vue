<template>
  <div class="home_container">
      <navBar></navBar>
      <div style="width:100%">
        <div class="header-style">
          <span>首页/{{pathName}}</span>
          <div>
              <Dropdown class="info-style">
                <Avatar size="large" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                <span class="login-name" size="large">{{userinfo.user.username}}</span>
                <DropdownMenu slot="list">
                  <DropdownItem @click.native="alertinfo">个人信息</DropdownItem>
                  <DropdownItem @click.native="logout">登出</DropdownItem>
                </DropdownMenu>
              </Dropdown>
          </div>
        </div>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import navBar from './navBar/index.vue'
export default {
  components: {
    navBar
  },
  data() {
    return {
      userObj: this.$store.state,
      pathName: '个人信息'
    }
  },
  computed: {
    ...mapState([
      'userinfo'
    ])
  },
  watch: {
    '$route'(news) {
      this.pathName = news.meta
      console.log(news);
    }
  },
  created() {
  },
  methods: {
    logout() {
      this.$message.success("即将退出登陆")
      sessionStorage.removeItem("user", null)
      sessionStorage.removeItem("token", null)
      setTimeout(() => {
        this.$router.push('/login')
      }, 1000)
    },
    alertinfo() {
      this.$router.push('myInfo')
    }
  }
}
</script>

<style lang="less">
.home_container{
  display: flex;
  background: #fff;
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
    padding: 0 10px;
    .info-style{
      display: flex;
      justify-content: center;
      cursor: pointer;
      .ivu-avatar-large{
        width: 30px;
        height: 30px;
        line-height: 30px;
      }
      .login-name{
        padding-left: 10px;
        color: #000;
        font-weight: 500;
      }
    }
  }

}
// .home_container .log_out{
//   width: 2%;
//   height: 4%;
//   position: absolute;
//   margin-right: 1%;
//   margin-top: 0.5%;
//   right: 0;
//   top: 0;
// }

</style>
