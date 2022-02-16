<template>
  <div class="nav-bar-style">
    <el-menu :default-active="defaultActive || '1-1'"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @select="onSelect">
      <i @click="handleCollapse" :class="[isCollapse ? 'icon-unwind' : 'icon-up', 'iconfont icon-zhankai icon']"></i>
      <el-submenu 
        v-for="(item) in menuList" 
        :key="item.name" 
        :index="item.name"
      >
        <template slot="title">
          <i class="iconfont icon" :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </template>
        <el-menu-item
          class="my-el-menu-item"
          v-for="(childItem) in item.child" 
          @click="handleMenu(item, childItem)" 
          :key="childItem.name" 
          :index="childItem.name"
        >
          {{childItem.title}}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { setLocaStorage, getStorage } from '@/utils/SessionUtil.js'
export default {
  data() {
    return {
      isCollapse: true,
      defaultActive: '1-1',
      menuList: [
        {
          id: 1,
          title: "主界面",
          name: '1',
          icon: 'icon-zhuye',
          child: [
            {
              id: 1.1,
              name: "1-1",
              title: "个人信息",
              path: "myInfo",
              icon: 'icon-gerenxinxi',
            },
            {
              id: 1.2,
              name: "1-2",
              title: "列表页面",
              path: "list",
              icon: 'icon-gerenxinxi',
            },
            // {
            //   name: "1-3",
            //   title: "元气森林",
            //   path: "forest",
            // },
          ],
        },
        {
          id: 2,
          title: "设置",
          name: '2',
          icon: 'icon-shezhi',
          child: [
            {
              id: 2.1,
              name: "2-1",
              title: "个人信息",
              path: "myInfo",
              icon: 'icon-gerenxinxi',
            },
            {
              id: 2.2,
              name: "2-2",
              title: "列表页面",
              path: "list",
              icon: 'icon-liebiao',
            },
          ],
        },
      ],
    };
  },
  mounted() {
    if (getStorage('path') && getStorage('path').name){
      this.defaultActive = getStorage('path').name
    }
  },
  methods: {
    handleCollapse() {
      this.isCollapse = !this.isCollapse
      this.$emit('handleCollapse', this.isCollapse)
    },
    onSelect() {},
    handleMenu(it, chit) {
      if (chit.path === getStorage('path').path || '') return
      const { path } = chit
      setLocaStorage('path', chit)
      this.$router.push(`/${path}`)
    }
  },
};
</script>

<style scoped lang="less">
.nav-bar-style {
  margin-top: 54px;
  display: flex;
  flex-direction: column;
  min-width: 200px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  .icon{
    color:#333;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    &.icon-unwind{
      justify-content: center;
    }
    &.icon-up{
      padding-right: 16px;
      justify-content: flex-end;
    }
  }
  span{
    padding-left: 10px;
  }
  .el-menu-vertical-demo {
    padding-top: 10px;
    height: 100%;
  }
  /deep/ .el-submenu__title{
    display: flex;
    align-items: center;
    &:hover{
      background-color: green !important;
    }
  }
  /deep/.my-el-menu-item{
    &.is-active{
      color: #333;
      background-color: green !important;
    }
    &:hover{
      background-color: green !important;
    }
  }
}
</style>
<style lang="less">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    overflow: hidden;
    background-color: #fff;
  }
</style>
