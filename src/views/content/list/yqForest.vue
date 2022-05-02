<template>
<div class="foster_container">
  <div class="foster_head">
    <div class="head_top"></div>
    <div class="head_bottom">
      <div class="bottom_left">
        <div class="left_icon">元气森林</div>
      </div>
      <div class="bottom_center">
        <div class="center_item" v-for="(item, index) in menuList" :key="index">
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
        <div
            v-for="(item, index) in languageList"
            :key="index"
            class="right_text"
            :class="{'active': currentIndex === index}"
            @click="changeBg(index)">
          {{ item.name}}
        </div>
      </div>
    </div>
  </div>
  <div class="foster_body">
    <div class="body_first">
      <div class="image_index">
        <span class="index_text" ref="one"></span>
        <span class="index_text" ref="two"></span>
      </div>
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
          <img src="../../../assets/login/farm.jpg" style="width: 100%; height: 100%"/>
        </div>
        <div class="content_page">
          <span class="title">年轻团队创造年轻人的产品</span>
          <span class="sign"></span>
          <span class="brief">有意思生活方式大会在北京举行</span>
          <span class="content">9月11日，尤以撒发发空腹喝酒啊快来发哈咖啡黑科技啊发哈就看过哈开机后公交卡和公交卡很干净啊计发手机客服哈划开工</span>
          <input type="button" class="detail" value="查看详情"/>
        </div>
      </div>
      <div class="second_content">
        <div class="content_page">
          <img src="../../../assets/login/JhsFuNuNOkQ.jpg" style="width: 100%; height: 100%"/>
        </div>
        <div class="content_page">
          <span class="title">年轻团队创造年轻人的产品</span>
          <span class="sign"></span>
          <span class="brief">有意思生活方式大会在北京举行</span>
          <span class="content">9月11日，尤以撒发发空腹喝酒啊快来发哈咖啡黑科技啊发哈就看过哈开机后公交卡和公交卡很干净啊计发手机客服哈划开工</span>
          <input type="button" class="detail" value="查看详情" @click="test"/>
        </div>
      </div>
      <div class="second_content">
        <div class="content_page">
          <img src="../../../assets/login/rocketlaunch.jpg" style="width: 100%; height: 100%"/>
        </div>
        <div class="content_page">
          <span class="title">年轻团队创造年轻人的产品</span>
          <span class="sign"></span>
          <span class="brief">有意思生活方式大会在北京举行</span>
          <span class="content">9月11日，尤以撒发发空腹喝酒啊快来发哈咖啡黑科技啊发哈就看过哈开机后公交卡和公交卡很干净啊计发手机客服哈划开工</span>
          <input type="button" class="detail" value="查看详情"/>
        </div>
      </div>
    </div>
    <div class="body_third">
      <span class="title">新闻资讯</span>
      <span class="news">
        <div class="news_details">
          <span class="img"><img src="../../../assets/content/list/yqsl.jpg"  style="width: 100%; height: 246px"/></span>
          <span class="details_title">元气新青年出征告捷</span>
          <span class="details_date">2022-02-17</span>
          <span class="details_content">于2022年11月28日，元气森林产品发布会在中国广东省深圳市举行，届时元气森林CEO将出席本次庆典</span>
        </div>
        <div class="news_details">
          <span class="img"><img src="../../../assets/content/list/yqsl.jpg"  style="width: 100%; height: 246px"/></span>
          <span class="details_title">元气新青年出征告捷</span>
          <span class="details_date">2022-02-17</span>
          <span class="details_content">于2022年11月28日，元气森林产品发布会在中国广东省深圳市举行，届时元气森林CEO将出席本次庆典</span>
        </div>
        <div class="news_details">
          <span class="img"><img src="../../../assets/content/list/yqsl.jpg"  style="width: 100%; height: 246px"/></span>
          <span class="details_title">元气新青年出征告捷</span>
          <span class="details_date">2022-02-17</span>
          <span class="details_content">于2022年11月28日，元气森林产品发布会在中国广东省深圳市举行，届时元气森林CEO将出席本次庆典</span>
        </div>
      </span>
      <span class="detail">了解详情</span>
    </div>
    <div class="body_logo" >
      <span class="logo" v-for="(item, index) in 13" :key="index">
        <img src="../../../assets/content/list/logo.png"  style="width: 100%; height: 100%"/>
      </span>
      <span class="logo2">敬请期待</span>
    </div>
  </div>
  <div class="foster_foot">
    <div class="foot_right">京ICP备：983401412341-4号</div>
  </div>
</div>
</template>

<script>
import '@/style/list/forest.less'
export default {
  name: "yqforest",
  data () {
    return {
      value1: 0,    //代表幻灯片从1开始
      indexOfImg: 0,
      menuList: window.ApplicationConfig.menuList,
      languageColor: "white",
      formColor: "white",
      currentIndex:  1,
      languageList: [
        {
          name: '中'
        },
        {
          name: '繁'
        }
      ],
    }
  },
  created() {

  },
  mounted() {
    this.getindex(1)
  },
  methods:{
    getindex(data){
      if(data == 0 || data == "" || data == null){
        this.$refs.one.style.width = "20px"
        this.$refs.one.style.borderTop = "1px solid red";
        this.$refs.two.style.width = "13px"
        this.$refs.two.style.borderTop = "1px solid #808080";
      }
      if(data == 1){
        this.$refs.two.style.width = "20px"
        this.$refs.two.style.borderTop = "1px solid red";
        this.$refs.one.style.width = "13px"
        this.$refs.one.style.borderTop = "1px solid #808080";
      }
    },
    test(){
      alert("fafa")
    },
    changeBg(index){
      this.currentIndex = index
    }


  }
}
</script>

<style scoped>

</style>