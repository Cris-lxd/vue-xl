<template>
  <div>
    我的个人信息
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  created() {
    console.log(1)
    this.$api.post(this.common.test).then(({ data }) => {
      console.log(data, 'data')
      if (data.code == 0) {
        this.$message.error('情况')
      } else {
        this.$message.error(data.message)
      }
    }).finally(() => {
    })
  },
  methods: {}
}
</script>

<style scoped>
.box{
  width: 100px;
  height: 2000px;
  background: red;
}
</style>
