<template>
  <div class="home_container">
      <div class="view-style" style="width:100%">
        <div class="header-style">
          <span class="header-left">
            <span @click="flag = !flag" class="iconfont icon-align-right icon"></span>
            首页/{{pathName}}
          </span>
          <div class="header-right">
            <!-- <p> userinfo: {{ userinfo }}</p> -->
              <Dropdown class="info-style">
                <Avatar size="large" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                <span v-if="userinfo" class="login-name" size="large">{{userinfo.user.username}}</span>
                <DropdownMenu slot="list">
                  <DropdownItem @click.native="alertinfo">个人信息</DropdownItem>
                  <DropdownItem @click.native="logout">退出登陆</DropdownItem>
                  <DropdownItem @click.native="warning">预警信息</DropdownItem>
                </DropdownMenu>
              </Dropdown>
          </div>
        </div>
        <navBar v-if="flag" id="navBar"></navBar>
        <div :style="flag ? 'margin-left: 200px;' : ''" class="content"><router-view></router-view></div>
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
      flag: true,
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
    // let content = document.getElementById('content');
    // content.setAttribute('style','margin-left:200px;margin-top:54px !important')
  },
  methods: {
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

    /**
     * 菜单栏的展开收起
     */
    // closeMenu(){
    //   let element = document.getElementById('navBar');
    //   let closeMenu = document.getElementById('closeMenu');
    //   // let content = document.getElementById('content');
    //   if(element.style.display == ""){
    //     element.setAttribute('style', 'display: none !important');
    //     closeMenu.innerHTML = '展开'
    //   }else{

    //     element.setAttribute('style', 'display: "" !important');
    //     closeMenu.innerHTML = '收起'
    //   }
    //   this.displayStatus = element.style.display;

    // }
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
      height: 49px;
      background-color: #fff;
      border-bottom: 1px solid #000;
      padding: 10px;
      display: table;
      background: #000;
      color: #fff;
      .header-left{
        float: left;
        line-height: 34px;
        .icon{
          font-size: 20px;
          cursor: pointer;
          padding-right: 10px;
        }
      }
      .header-right{
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
    .content{
      padding: 10px;
      margin-top: 54px;
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
