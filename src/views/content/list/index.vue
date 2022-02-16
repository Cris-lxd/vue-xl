<template>
  <section>
    <div class="my-container">
      <!-- 公司大事记 -->
      <div class="things-container">
        <p class="things-title">公司大事记</p>
        <div class="select-date">
          <i
            class="left-ion iconfont icon-shipin"
            @click="handleSwitch('left')"
          ></i>
          <div class="date-items-box">
            <p
              v-for="(item, index) in list"
              :key="index"
              :class="[currentDateI === index ? 'active' : '', 'date-items']"
              @mousemove="dateSelect(index)"
            >
              {{ item }}
            </p>
          </div>
          <i
            class="right-ion iconfont icon-shipin"
            @click="handleSwitch('right')"
          ></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: "index",
  data() {
    return {
      currentDateI: 0,
      list: [1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007],
    };
  },
  head() {
    return {
      title: "关于我们 - 元气森林",
    };
  },
  methods: {
    handleSwitch(type) {
      if (type === "left") {
        console.log(1);
      } else if (type === "right") {
        console.log(1);
      }
    },
    dateSelect(i) {
      this.currentDateI = i;
      console.log(this.list[i], "时间");
    },
  },
};
</script>

<style scoped lang="less">
.my-container {
  margin-top: 99px;
  margin-bottom: 69px;
}
// 主文字样式
.things-title {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin: 100px 0;
  position: relative;
  &::after {
    content: "";
    width: 34px;
    height: 2px;
    background-color: #ff0000;
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
  }
}
// 公司大事记
.things-container {
  .select-date {
    display: flex;
    align-items: center;
    cursor: pointer;
    .date-items-box {
      display: flex;
      align-items: center;
      .date-items {
        color: #666;
        padding-right: 18px;
        font-size: 14px;
        &.active {
          font-weight: bold;
          color: #333;
        }
        &:last-child {
          padding-right: 0;
        }
      }
    }
    .left-ion {
      transform: rotate(-180deg);
      padding-right: 5px;
    }
    .right-ion {
      padding-left: 5px;
    }
    .left-ion,
    .right-ion {
      color: #a6a6a6;
      font-size: 30px;
      &:hover {
        color: #ff0000;
      }
    }
  }
}
</style>
<style scoped lang="less">
.pc {
}
</style>
<style scoped lang="less">
.mobile {
}
</style>
