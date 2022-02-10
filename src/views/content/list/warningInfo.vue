<template>
  <div class="warning-container">
    <div class="head">
      <div class="head-search">
<!--        时间选择-->
        <div>
          <Row>
            <Col span="7">
              年份选择：
            </Col>
            <Col span="17">
              <DatePicker :value="value1" format="yyyy年MM月dd日" type="date" placeholder="2020" style="width: 200px"></DatePicker>
            </Col>
          </Row>
        </div>
        <div class="search-item">
          <Row>
            <Col span="10">
              农场投入区间：
            </Col>
            <Col span="14">
<!--              <DatePicker :value="value1" format="yyyy年MM月dd日" type="date" placeholder="Select date" style="width: 200px"></DatePicker>-->
              <Select v-model="model1" style="width:200px" placeholder="100,000">
                <Option v-for="item in cityList" :value="item.value" :key="item.value" >{{ item.label }}</Option>
              </Select>

            </Col>
          </Row>
        </div>
        <div class="search-item">
          <Row>
            <Col span="24">
              —— &nbsp;&nbsp;
<!--              <DatePicker :value="value1" format="yyyy年MM月dd日" type="date" placeholder="Select date" style="width: 200px"></DatePicker>-->
              <Select v-model="model1" style="width:200px" placeholder="2,000,000">
                <Option v-for="item in cityList" :value="item.value" :key="item.value" >{{ item.label }}</Option>
              </Select>
            </Col>
          </Row>
        </div>
        <div class="search-item">
          <Row>
            <Col span="7">
              开垦程度：
            </Col>
            <Col span="17">
              <Select v-model="model1" style="width:200px" placeholder="初步开垦">
                <Option v-for="item in cityList" :value="item.value" :key="item.value" >{{ item.label }}</Option>
              </Select>
            </Col>
          </Row>
        </div>
<!--      单选-->
<!--        <div style="padding-left:30px">-->
<!--            <span>是否分发：</span>-->
<!--              <RadioGroup v-model="type">-->
<!--                <Radio label="是"></Radio>-->
<!--                <Radio label="否"></Radio>-->
<!--              </RadioGroup>-->
<!--        </div>-->
<!--        <div style="padding-left:30px">-->
<!--          <span>是否无效预警：</span>-->
<!--          <RadioGroup v-model="type1">-->
<!--            <Radio label="是"></Radio>-->
<!--            <Radio label="否"></Radio>-->
<!--          </RadioGroup>-->
<!--        </div>-->
<!--      查询按钮-->
        <div class="search-item">
          <Button type="primary">查询</Button>
        </div>
      </div>
<!--      <div class="head-menu">-->
<!--        <Icon type="ios-sad-outline" size="30" style="float:right"/>-->
<!--        <Icon type="ios-sad-outline" size="30"  style="float:right"/>-->
<!--      </div>-->
    </div>


    <div class="isView">
      <div class="numData">
        <div class="discover">
          <!-- <div class="cameraImage">
          </div>
          <div class="discover-content">
            <div class="content-num">1,160</div>
            <div class="content-text">预警发现</div>
          </div> -->
           <img src="@/assets/content/list//cameraImage.png">
           <div class="discover-tetx">
             <span>1,160</span>
             <p>已监测农田(亩)</p>
           </div>
        </div>
        <div class="distributed">
          <div class="distributed-item">
            <span class="distributed-num">1,130</span>
            <p class="distributed-text">已开垦</p>
          </div>
          <div class="distributed-item">
            <span class="distributed-num">30</span>
            <p class="distributed-text">未开垦</p>
          </div>
        </div>
      </div>
      <div class="pieChart" style="height:300px" id="pieChart"></div>
      <div class="barChart" style="height:300px" id="barChart"></div>
    </div>

    <div class="dataInfo">
      <!-- <div class="data-item">
      </div> -->
      <div class="data-item" v-for="(item, index) in 25" :key="index">
        <!-- <div class="item-image"></div> -->
          <img class="item-image" :src="getImgUrl(item)" alt="">
          <div>
            <p class="item-content"><span>农田名称：{{ item}}号农田 </span></p>
            <p class="item-content">开垦时间： 2020年12月{{item}}日</p>
            <div class="is-text">
              <span class="item-content">是否开垦： 是</span>
              <span class="item-content">是否核查： 否</span>
            </div>
          </div>
          <!-- <div class="item-content"><span>预警类别： 违法建房</span></div>
          <div class="item-content">预警时间： 2020年12月16日 12:20</div>
          <div class="item-content">是否分类： 是</div> -->
        <div class="item-detail">
          <Button :size="buttonSize" type="primary">详细查看</Button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "warningInfo",
  data () {
    return {
      cityList: [
        {
          value: 'primary',
          label: '初级'
        },
        {
          value: 'middle',
          label: '中级'
        },
        {
          value: 'high',
          label: '高级'
        },
      ],
      pieOptions: { // initPieChart 方法使用 options
        title: {
          text: '农田类型占比',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          right: '10%',
          top:'30%'
        },
        series: [
          {
            name: '半径模式',
            type: 'pie',
            radius:'80%',
            center: ['30%', '50%'],
            roseType: 'radius',
            itemStyle: {
              borderRadius: 1
            },
            label: {
              show: false
            },
            data: [
              {value: 1048, name: '平坝田'},
              {value: 735, name: '水浇地'},
              {value: 580, name: '旱地'},
              {value: 484, name: '水田'},
              {value: 300, name: '条田'}
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      },
      barOpptions: { // initBarChart 方法使用 options
        title: {
          text: '2020年农田产值',
          subtext: '(万元)',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        //是否保存图片等工具
        // toolbox: {
        //     feature: {
        //         dataView: {show: true, readOnly: false},
        //         magicType: {show: true, type: ['line', 'bar']},
        //         restore: {show: true},
        //         saveAsImage: {show: true}
        //     }
        // },
        //标题分类框
        // legend: {
        //     data: ['蒸发量', '平均温度']
        // },
        xAxis: [
          {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisLabel: { interval: 0, rotate: -50 },
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            // name: '水量',
            min: 0,
            max: 150,
            interval: 30,
            // axisLabel: {
            //   formatter: '{value} ml'
            // }
          }
        ],
        series: [
          {
            name: '蒸发量',
            type: 'bar',
            data: [23,42,45,67,78,76,105,124,103,85,45,31]
          },

          {
            name: '变化率',
            type: 'line',
            yAxisIndex: 0,
            data: [23,42,45,67,78,76,105,124,103,85,45,31]
          }
        ]
      },
      model1: '',
      type: '是',
      type1: '是',
      value1: '',
    }
  },
  mounted() {
    this.$nextTick(() =>{
      this.initPieChart();
      this.initBarChart();
    })
  },
  methods: {
    initPieChart(){
      let myChart1 = this.$echarts.init(document.getElementById('pieChart'));
      myChart1.setOption(this.pieOptions);
      window.onresize = myChart1.resize;
    },

    initBarChart(){
      let myChart = this.$echarts.init(document.getElementById('barChart'));
      myChart.setOption(this.barOpptions);
      window.onresize = myChart.resize;
    },
    getImgUrl(item){
      return require("@/assets/content/list/"+item+".jpeg");
    }

  }
}
</script>

<style lang="less">
.warning-container{
  background-color: #f5f5f6;
  width:100%;
  height:100%;
  .head{
    height:60px;
    //background-color: #0abcdf;
    display: flex;          //设置子元素位置居中
    align-items: center;
    //justify-content: center;
    .head-search{
      height:85%;
      width:100%;
      padding-left:45px;
      line-height:51px;       //设置字体居中
      display: flex;
      //justify-content: center;
      align-items: center;
      font-family: 微软雅黑;
      font-weight: bold;
        .search-item{
          padding-left: 45px;     //设置条件框中间位置
        }
    }
    //.head-menu{
    //  flex: 1;
    //  text-align:right;
    //  height:80%;
    //  display: flex;
    //  //justify-content: center;
    //  margin-left:30px;
    //  align-items: center;
    //  //background-color: #ffbb96;
    //  padding-left:10%;
    //
    //}
  }

  .isView{
    width:25%;
    height:calc(100% - 60px);
    float:left;
    .numData{
      width: 90%;
      height:30%;
      margin-left: 5%;
      .discover{
        width:100%;
        height:120px;
        background-color: #ffffff;
        padding-left:50px;
        display: flex;
        align-items: center;
        .discover-tetx{
          padding-left: 20px;
          span{
            font-size: 20px;
            font-weight: 600;
          }
        }
      }
      .distributed{
        width: 100%;
        display: flex;
        margin-top: 20px;
        .distributed-item{
          flex: 1;
          background: #fff;
          padding: 20px 10px;
          text-align: center;
          &:last-child{
            margin-left: 20px;
          }
        }
      }
      .verified{
        width:45%;
        height: 45%;
        float:left;
        margin-top:6%;
        margin-left:10%;
        background-color: #ffffff;
        .verified-num{
          width:100%;
          height:60%;
          text-align:center;
          font-weight:bold;
          font-size:30px;
          line-height:100%;
          padding-top: 10%;
        }
        .verified-text{
          width:100%;
          height:40%;
          text-align:center;
          font-weight:bold;
        }
      }
    }
    .pieChart{
      margin-top:5%;
      width: 90%;
      height:30%;
      margin-left: 5%;
      background-color: #ffffff;
    }
    .barChart{
      margin-top:5%;
      width: 90%;
      height:30%;
      margin-left: 5%;
      background-color: #ffffff;
    }
  }
  .dataInfo{
    width:74%;
    height:calc(100% - 60px);
    margin-left: 1%;
    float:left;
    overflow: scroll;
    display: flex;
    flex-wrap: wrap;
    .data-item{
      width:19%;
      // height:35%;
      min-height:150px;
      background-color: #fff;
      margin-right: 11px;
      margin-bottom: 11px;
      display:inline-block;
      &:last-child{
        margin-right: 0;
        margin-bottom: 0;
      }
      .item-image{
        width:90%;
        height:60%;
        //background-color: #72a755;
        margin-top: 5%;
        margin-left:5%;
        //background-size: contain;
        //background-position: center center;
        object-fit: contain;
      }
      .item-content{
        width:90%;
        height:10%;
        margin-left:5%;
      }
      .is-text{
        // display: flex;
        // justify-content: space-between;
      }
      .item-detail{
        display: flex;
        justify-content: center;
        .ivu-btn-primary{
          width: 100px;
          margin-top: 12px;
        }
      }
    }
  }

}
</style>