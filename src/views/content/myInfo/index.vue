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
