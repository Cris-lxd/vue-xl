<template>
<div class="foster_container">
  <div class="foster_head">
    <div class="head_top"></div>
    <div class="head_bottom">
      <div class="bottom_left">
        <div class="left_icon">元气森林</div>
      </div>
      <div class="bottom_center">
        <div class="center_item" v-for="item in menuList" :key="item.name">
          <dropdown>
            <span style="color: black">
              {{ item.title }}
            </span>
            <dropdownMenu slot="list" v-for="item1 in item.child" :key="item1.name">
              <div class="option_item">{{ item1.title }}</div>
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
          <div class="demo-carousel"><img src="../../../assets/content/list/yqsl.jpg" style="width: 100%; height: 800px"/></div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel"><img src="../../../assets/content/list/yqsl.jpg" style="width: 100%; height: 800px"/></div>
        </CarouselItem>
      </Carousel>
    </div>
  </div>
  <div class="foster_body">
    <div class="body_second">
      <div class="second_content">
        <div class="content_page">
<!--          <img src="../../../assets/login/farm.jpg" style="width: 100%;"/>-->
        </div>
        <div class="content_page"></div>
      </div>
      <div class="second_content"></div>
      <div class="second_content"></div>
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
      menuList: window.ApplicationConfig.menuList
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