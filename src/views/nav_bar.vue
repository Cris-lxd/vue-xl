<template>
  <div class="nav-bar-style">
    <el-menu default-active="1-1" 
      background-color="#000" 
      text-color="#fff" 
      class="el-menu-vertical-demo"
      :unique-opened="true"
      @select="onSelect">
      <el-submenu v-for="(item) in menuList" :key="item.name" :index="item.name">
        <span slot="title">{{item.title}}</span>
        <el-menu-item  v-for="(childItem) in item.child" @click="handleMenu(item, childItem)" :key="childItem.name" :index="childItem.name">{{childItem.title}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          title: "目录",
          name: '1',
          child: [
            {
              name: "1-1",
              title: "个人信息",
              path: "myInfo",
            },
            {
              name: "1-2",
              title: "自定义页面",
              path: "list",
            },
          ],
        }
      ],
    };
  },
  methods: {
    onSelect() {},
    handleMenu(it, chit) {
      this.$router.push(`/${chit.path}`)
    }
  },
};
</script>

<style scoped lang="less">
.nav-bar-style {
  margin-top: 54px;
  display: flex;
  min-width: 200px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  .header {
    flex: 1;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #000;
  }
}
</style>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    overflow: hidden;
  }
</style>
