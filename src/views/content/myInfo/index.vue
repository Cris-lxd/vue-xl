<template>
  <div>
    我的个人信息
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  created() {
    console.log(this.$api, 'api')
    this.$api.get('/user/12345').then(res => {
      console.log(res, '接口')
    })
  },
  methods: {}
}
</script>
