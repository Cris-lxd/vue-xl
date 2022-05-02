<template>
  <div class="container">
    <div class="box">
      <div class="search">
        <input class="search_text" ref = "search">
        <span class="icon iconfont icon-search" style="position:absolute; left: 20px"></span>
        <span class="icon iconfont icon-close" style="position:absolute; right: 20px; cursor: pointer" @click="close"></span>
      </div>
      <div class="text">取消</div>
    </div>
  </div>
</template>

<script>
import "@/style/list/componentLibrary.less"
export default {
  name: "componentLibrary",
  methods: {
    // close: () => this.$refs.search.value = '',

    close(){
      this.$refs.search.value = ''
    }
  }
}
</script>

<style scoped>

</style>