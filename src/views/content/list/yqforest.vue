<template>
<div class="foster_container">
  <div class="foster_head">
    <div class="head_top"></div>
    <div class="head_bottom">
      <div class="bottom_left">
        <div class="left_icon">元气森林</div>
      </div>
      <div class="bottom_center">
        <div class="center_item" style="width: 76px">首 页</div>
        <div class="center_item">
          <dropdown>
            <a style="color: black">
              关于我们
            </a>
            <dropdownMenu slot="list">
              <div class="option_item">公司介绍</div>
              <div class="option_item">企业大事件</div>
              <div class="option_item">人和文化</div>
              <div class="option_item">可持续发展</div>
            </dropdownMenu>
          </dropdown>
        </div>
        <div class="center_item">旗下产品</div>
        <div class="center_item">
          <dropdown>
            <a style="color: black">
              天生元气
            </a>
            <dropdownMenu slot="list">
              <div class="option_item">原科介绍</div>
              <div class="option_item">工厂介绍</div>
            </dropdownMenu>
          </dropdown>
        </div>
        <div class="center_item">
          <dropdown>
            <a style="color: black">
              新闻公告
            </a>
            <dropdownMenu slot="list">
              <div class="option_item">公司新闻</div>
              <div class="option_item">媒体资源库</div>
            </dropdownMenu>
          </dropdown>
        </div>
        <div class="center_item">
          <dropdown>
            <a style="color: black">
              联系我们
            </a>
            <dropdownMenu slot="list">
              <div class="option_item">招聘信息</div>
              <div class="option_item">联系电话</div>
            </dropdownMenu>
          </dropdown>
        </div>
      </div>
      <div class="bottom_right">
        <div class="right_text">中</div>
        <div class="right_text">繁</div>
      </div>
    </div>
  </div>
  <div class="foster_body">
    <div class="body_first">
<!--      <img src="../../../assets/content/list/yqsl.jpg" style="width: 100%; height: 100%"/>-->
      <Carousel autoplay v-model="value1" loop dots="none" arrow="never" @on-change="getindex">
        <CarouselItem>
          <div class="demo-carousel"><img src="../../../assets/content/list/yqsl.jpg" style="width: 100%; height: 100%"/></div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel"><img src="../../../assets/content/list/yqsl.jpg" style="width: 100%; height: 100%"/></div>
        </CarouselItem>
      </Carousel>
    </div>
  </div>
</div>
</template>

<script>
import '@/style/list/forest.less'
export default {
  name: "yqforest",
  data () {
    return {
      value1: 0,
      indexOfImg: 0,
    }
  },
  methods:{
    getindex(data){
      this.indexOfImg = data;
    }
  }
}
</script>

<style scoped>

</style>