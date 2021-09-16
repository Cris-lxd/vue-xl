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
    // this.$api.post(this.common.test).then(({ data }) => {
    //   console.log(data, 'data')
    //   if (data.code == 0) {
    //     this.$message.error('情况')
    //   } else {
    //     this.$message.error(data.message)
    //   }
    // }).finally(() => {
    // })
    this.$ajax.post(this.common.test,null,this,true).then((res) => {
      if(res.code == 0){
        this.$message.info(res.data)
      }else{
        this.$message.error(res.data)
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
  background: teal;
}
</style>
