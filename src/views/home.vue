<template>
  <div class="home_container">
      <navBar></navBar>
      <div style="width:100%">
        <div class="header-style">
          <span>首页/</span>
          <span>欢迎用户 <span class="login-name">{{ userObj.name }}</span></span>
        </div>
        <router-view></router-view>
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
  }
}
</script>

<style lang="less">
.home_container{
  display: flex;
  background: #fff;
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
</style>
