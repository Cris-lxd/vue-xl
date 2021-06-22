<template>
  <div>
    <Menu active-name="1-1" :open-names="['1','2','3']">
      <div v-for="item in menuList" :key="item.name">
        <Submenu :name="item.name">
          <template slot="title">{{ item.title }}</template>
            <MenuItem v-for="childItem in item.child" :key="childItem.name" name="childItem.name">{{ childItem.text }}</MenuItem>
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
          name: '1',
          child: [
            {
              name: '1-1',
              text: '个人信息'
            },
            {
              name: '1-2',
              text: 'content 页面'
            }
          ]
        },
        {
          title: '目录2',
          name: '2',
          child: [
            {
              name: '2-1',
              text: '个人信息'
            },
            {
              name: '2-2',
              text: 'content 页面'
            }
          ]
        },
        {
          title: '目录3',
          name: '3',
          child: [
            {
              name: '3-1',
              text: '个人信息'
            },
            {
              name: '3-2',
              text: 'content 页面'
            }
          ]
        },
      ]
    }
  },
  methods: {
    
  }
}
</script>

