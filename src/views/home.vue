<template>
  <div class="home_container">
      <div class="view-style" style="width:100%">
        <div class="header-style">
          <span class="header-left">
            首页 / {{pathName}}
          </span>
          <div class="header-right">
              <Dropdown class="info-style">
                <Avatar size="large" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                <span v-if="userinfo" class="login-name" size="large">{{userinfo.user.username}}</span>
                <DropdownMenu slot="list">
                  <DropdownItem @click.native="alertinfo">个人信息</DropdownItem>
                  <DropdownItem @click.native="logout">退出登陆</DropdownItem>
                  <DropdownItem @click.native="warning">预警信息</DropdownItem>
                  <DropdownItem @click.native="forest">元气森林</DropdownItem>
                </DropdownMenu>
              </Dropdown>
          </div>
        </div>
        <navBar id="navBar" @handleCollapse="handleCollapse"></navBar>
        <div :class="[isCollapse ? 'mar-64':'mar-200', 'content-container']">
          <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { removeStorage } from '@/utils/SessionUtil'
import navBar from './nav_bar.vue'
import { getStorage } from '@/utils/SessionUtil.js'
export default {
  components: {
    navBar
  },
  data() {
    return {
      isCollapse: true,
      userObj: this.$store.state,
      pathName: '个人信息',
      displayStatus: '',
    }
  },
  computed: {
    ...mapState([
      'userinfo'
    ]),
    userInfo() {
      console.log(this.userinfo, 'userinfo')
      return getStorage('userInfo')
    }
  },
  watch: {
    '$route'(news) {
      this.pathName = news.meta
      console.log(news);
    }
  },
  created() {},
  mounted() {
  },
  methods: {
    handleCollapse(state) {
      this.isCollapse = state
    },
    logout() {
      this.$message.success("即将退出登陆")
      removeStorage('userInfo')
      removeStorage("token")
      setTimeout(() => {
        this.$router.push('/login')
      }, 1000)
    },
    alertinfo() {
      this.$router.push('myInfo')
    },
    warning(){
      setTimeout(() => {
        this.$router.push('/warningInfo')
      }, 0)
    },
    forest(){
      setTimeout(() => {
        this.$router.push('/forest')
      },0)
    }
  }
}
</script>

<style lang="less">
.home_container{
  display: flex;
  background: #fff;
  .view-style{
    .header-style{
      z-index: 99;
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      width: 100%;
      background-color: #fff;
      border-bottom: 1px solid #000;
      padding: 10px 20px;
      background: #000;
      color: #fff;
      display: flex;
      justify-content: space-between;
      .header-left{
        display: flex;
        align-items: center;
        float: left;
        cursor: pointer;
        line-height: 34px;
      }
      .header-right{
        line-height: 35px;
        float: right;
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
    .content-container{
      padding: 10px;
      margin-top: 54px;
      transition: all 1s;
      &.mar-200{
        margin-left: 200px;
      }
      &.mar-64{
        margin-left: 64px;
      }
    }
    .box-style1{
      margin-left:200px;
      margin-top: 54px;
    }
    .box-style2{
      margin-left: 0px;
      margin-top: 54px;
    }
  }
}
</style>
