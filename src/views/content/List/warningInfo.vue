<template>
  <div class="warning-container">
    <div class="head">
<!--      <div class="head-search">
&lt;!&ndash;        时间选择&ndash;&gt;
&lt;!&ndash;        <div>
          <Row>
            <Col span="7">
              预警时间：
            </Col>
            <Col span="17">
              <DatePicker :value="value1" format="yyyy年MM月dd日" type="date" placeholder="Select date" style="width: 200px"></DatePicker>
            </Col>
          </Row>
        </div>
        <div class="search-item">
          <Row>
            <Col span="10">
              预警时间确认时间段：
            </Col>
            <Col span="14">
              <DatePicker :value="value1" format="yyyy年MM月dd日" type="date" placeholder="Select date" style="width: 200px"></DatePicker>
            </Col>
          </Row>
        </div>
        <div class="search-item">
          <Row>
            <Col span="24">
              <DatePicker :value="value1" format="yyyy年MM月dd日" type="date" placeholder="Select date" style="width: 200px"></DatePicker>
            </Col>
          </Row>
        </div>
        <div class="search-item">
          <Row>
            <Col span="7">
              预警级别：
            </Col>
            <Col span="17">
              <Select v-model="model1" style="width:200px" placeholder="Select level">
                <Option v-for="item in cityList" :value="item.value" :key="item.value" >{{ item.label }}</Option>
              </Select>
            </Col>
          </Row>
        </div>&ndash;&gt;
&lt;!&ndash;      单选&ndash;&gt;
&lt;!&ndash;        <div style="padding-left:30px">
            <span>是否分发：</span>
              <RadioGroup v-model="type">
                <Radio label="是"></Radio>
                <Radio label="否"></Radio>
              </RadioGroup>
        </div>
        <div style="padding-left:30px">
          <span>是否无效预警：</span>
          <RadioGroup v-model="type1">
            <Radio label="是"></Radio>
            <Radio label="否"></Radio>
          </RadioGroup>
        </div>&ndash;&gt;
&lt;!&ndash;      查询按钮&ndash;&gt;

        <div class="search-item">
          <Button type="primary">查询</Button>
        </div>
      </div>
      <div class="head-menu">
        <Icon type="ios-sad-outline" size="30" style="float:right"/>
        <Icon type="ios-sad-outline" size="30"  style="float:right"/>
      </div>-->
      <div class="head-text"><span>预警时间：</span></div>
      <div class="head-selection">
        <span>
          <DatePicker type="date" placeholder="Select date"></DatePicker>
        </span>
      </div>
      <div class="head-largeText"><span>预警确认时间段：</span></div>
      <div class="head-selection">
        <span>
          <DatePicker type="date" placeholder="Select date"></DatePicker>
        </span>
      </div>
      <div class="head-selection">
        <span>
          <DatePicker type="date" placeholder="Select date"></DatePicker>
        </span>
      </div>
      <div class="head-text"><span>预警级别：</span></div>
      <div class="head-selection">
        <span>
          <Select v-model="model11" filterable>
            <Option v-for="item in cityList"  :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </span>
      </div>
      <div class="head-text"><span>是否分发：</span></div>
      <div>
        <span>
          <RadioGroup v-model="type">
            <Radio label="是"></Radio>
            <Radio label="否"></Radio>
          </RadioGroup>
        </span>
      </div>
      <div class="head-largeText"><span>是否无效预警：</span></div>
      <div >
        <span>
          <RadioGroup v-model="type1">
            <Radio label="是"></Radio>
            <Radio label="否"></Radio>
          </RadioGroup>
        </span>
      </div>
      <div class="head-text">
        <span>
          <Button type="primary" @click="handleSubmit()">查询</Button>
        </span>
      </div>
    </div>


    <div class="isView">
      <div class="numData">
        <div class="discover">
          <div class="cameraImage">
<!--            <img src="../../../assets/warninginfo/cameraImage.png">-->
          </div>
          <div class="discover-content">
            <div class="content-num">1,160</div>
            <div class="content-text">预警发现</div>
          </div>
        </div>
        <div class="distributed">
          <div class="distributed-num">1,160</div>
          <div class="distributed-text">已分发</div>
        </div>
        <div class="verified">
          <div class="verified-num">1,160</div>
          <div class="verified-text">已核查</div>
        </div>
      </div>
      <div class="pieChart" id="pieChart"></div>
      <div class="barChart" id="barChart"></div>
    </div>

    <div class="dataInfo">
      <div class="data-item">
        <div class="item-image"></div>
<!--        <div class="item-content"><span>预警类别： 违法建房</span></div>-->
<!--        <div class="item-content">预警时间： 2020年12月16日 12:20</div>-->
<!--        <div class="item-content">是否分类： 是</div>-->
                <div class="item-content"></div>
                <div class="item-content"></div>
                <div class="item-content"></div>
        <div class="item-detail"></div>
      </div>
      <div class="data-item"></div>
      <div class="data-item"></div>
      <div class="data-item"></div>
      <div class="data-item"></div>
      <div class="data-item"></div>
      <div class="data-item"></div>
      <div class="data-item"></div>
      <div class="data-item"></div>
      <div class="data-item"></div>
      <div class="data-item"></div>
      <div class="data-item"></div>
      <div class="data-item"></div>
      <div class="data-item"></div>
      <div class="data-item"></div>
      <div class="data-item"></div>
      <div class="data-item"></div>
      <div class="data-item"></div>
      <div class="data-item"></div>
      <div class="data-item"></div>
      <div class="data-item"></div>
      <div class="data-item"></div>
      <div class="data-item"></div>
      <div class="data-item"></div>
      <div class="data-item"></div>
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
      model1: '',
      type: '是',
      type1: '否',
      value1: '',
      dataList: {},
    }
  },
  mounted() {
    this.initPieChart();
    this.initBarChart();
    this.$nextTick(() =>{
      this.initData();
    })
  },
  methods: {
    /**
     * 初始化数据
     */
    initData(){
      this.$api.get(this.common.warning, null).then(({ data }) => {
        if(data.code == 200){
          console.log(data)
        }
      })
    },

    initPieChart(){
      let width = this.$refs.pieChart.style.width;
      console.log(width);
      this.$echarts.init(document.getElementById('pieChart')).setOption({
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
              {value: 1048, name: '类型一'},
              {value: 735, name: '类型二'},
              {value: 580, name: '类型三'},
              {value: 484, name: '类型四'},
              {value: 300, name: '类型五'}
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
      })
    },

    initBarChart(){
      this.$echarts.init(document.getElementById('barChart')).setOption({
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
            max: 250,
            interval: 50,
            // axisLabel: {
            //   formatter: '{value} ml'
            // }
          }
        ],
        series: [
          {
            name: '蒸发量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
          },

          {
            name: '平均温度',
            type: 'line',
            yAxisIndex: 0,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
          }
        ]
      })
    },

    /**
     * 查询提交
     */
    handleSubmit(){

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
    width:100%;
    //background-color: #0abcdf;
    display: flex;          //设置子元素位置居中
    align-items: center;
    //justify-content: center;
    .head-text{
      width:4%;
      height:70%;
      //background-color: #cd2e2e;
      margin-left: 1%;
      text-align: center;
      display:table;
      span{
        display:table-cell;
        vertical-align:middle;
      }
    }
    .head-largeText{
      width:7%;
      height:70%;
      //background-color: #cd2e2e;
      margin-left: 1%;
      text-align: center;
      display:table;
      span{
        display:table-cell;
        vertical-align:middle;
      }
    }

    .head-selection{
      width:11%;
      height:70%;
      //background-color: #21aa58;
      margin-left: 0.5%;
      display:table;
      span{
        display:table-cell;
        vertical-align:middle;
      }
    }
    .head-search{
      height:80%;
      width:85%;
      padding-left:10px;
      line-height:80px;       //设置字体居中
      display: flex;
      //justify-content: center;
      align-items: center;
      font-family: 微软雅黑;
      font-weight: bold;
        .search-item{
          padding-left: 20px;     //设置条件框中间位置
        }
    }
    .head-menu{
      flex: 1;
      text-align:right;
      height:80%;
      display: flex;
      //justify-content: center;
      margin-left:30px;
      align-items: center;
      //background-color: #ffbb96;
      padding-left:10%;

    }
  }

  .isView{
    width:25%;
    height:calc(100% - 60px);
    //margin-top:110px;
    float:left;
    //display: flex;
    //justify-content: center;
    //align-items: center;
    .numData{
      width: 90%;
      height:30%;
      margin-left: 5%;
      .discover{
        width:100%;
        height:45%;
        background-color: #ffffff;
        //margin-left:20px;
        display: flex;
        justify-content: center;
        align-items: center;
        .cameraImage{
          width:30%;
          height:80%;
          background-image: url("../../../assets/warninginfo/cameraImage.png");
          background-size: 100%;
        }
        .discover-content{
          width:30%;
          height:90%;
          margin-left: 10%;
          .content-num{
            width:100%;
            height:60%;
            text-align:center;
            font-weight:bold;
            font-size:30px;
            line-height:100%;
            padding-top: 10%;
          }
          .content-text{
            width:100%;
            height:40%;
            text-align:center;
            font-weight:bold;
          }
        }
      }
      .distributed{
        width:45%;
        height: 45%;
        float:left;
        //margin-left:20px;
        margin-top:6%;
        background-color: #ffffff;
        .distributed-num{
          width:100%;
          height:60%;
          text-align:center;
          font-weight:bold;
          font-size:30px;
          line-height:100%;
          padding-top: 10%;
        }
        .distributed-text{
          width:100%;
          height:40%;
          text-align:center;
          font-weight:bold;
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
    //margin-top:110px;
    margin-left: 1%;
    float:left;
    background-color: #bfa443;
    overflow: scroll;
    .data-item{
      width:19%;
      height:35%;
      background-color: #ff4d51;
      margin-right: 1%;
      margin-bottom: 0.5%;
      display:inline-block;
      .item-image{
        width:90%;
        height:45%;
        background-color: #72a755;
        margin-top: 5%;
        margin-left:5%;
      }
      .item-content{
        width:90%;
        height:10%;
        margin-left:5%;
        background-color: #e88216;
      }
      .item-detail{
        width:90%;
        height:15%;
        margin-left:5%;
        background-color: #a61fcd;
      }
    }
  }

}
</style>