<template>
  <div class="not-view">
    <el-result title="404" subTitle="找不到页面，回到首页看看吧">
      <template slot="icon">
        <img style="width:100%;height:400px;" src="@/assets/login/not404.png"/>
      </template>
      <template slot="extra">
        <el-button type="primary" size="medium" @click="$router.push('home')">返回首页</el-button>
      </template>
    </el-result>
  </div>
</template>

<script>

export default{
  data() {
    return {

    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
.not-view{
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-top: 200px;
}
</style>
