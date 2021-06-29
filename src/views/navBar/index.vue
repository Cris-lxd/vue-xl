<template>
  <div class="nav-bar-style">
    <Menu active-name="1-1" theme="dark" @on-select="onSelect" :open-names="[1, 2]">
      <div v-for="item in menuList" :key="item.name">
        <Submenu :name="item.name">
          <template slot="title">{{ item.title }}</template>
            <MenuItem 
            v-for="childItem in item.child" 
            :key="childItem.name" 
            :name="childItem.name">{{ childItem.text }}</MenuItem>
        </Submenu>
      </div>
    </Menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          title: '目录',
          name: 1,
          child: [
            {
              name: '1-1',
              text: '个人信息',
              path: 'info'
            },
            {
              name: '1-2',
              text: 'content 页面',
              path: 'list'
            }
          ]
        },
        {
          title: '目录2',
          name: 2,
          child: [
            {
              name: '2-1',
              text: '个人信息',
              path: 'list'
            },
            {
              name: '2-2',
              text: 'content 页面',
              path: 'list'
            }
          ]
        }
      ]
    }
  },
  methods: {
    onSelect(row, row1) {
      console.log(row, row1, 'e')
      // this.$router.push(e.path)
    }
  }
}
</script>

<style scoped lang="less">
.nav-bar-style{
  display: flex;
  .header{
    flex: 1;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #000;
  }
}
</style>

