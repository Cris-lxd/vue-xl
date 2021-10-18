<template>
  <div>
    <i class="iconfont icon-Rightbutton"></i>
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
    this.$ajax.post(this.common.test,null,this,true).then((res) => {
      if(res.length){
        this.$message.success('操作成功')
      }
    })
  },
  methods: {}
}
</script>

<style scoped>
.box{
  height: 100%;
  /* background: teal; */
}
</style>
