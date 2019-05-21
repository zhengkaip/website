<template>
  <div>
    <Header></Header>
    <div class="swiper-wrap">
      <swiper v-if="fileList.length>1" :options="swiperOption" ref="mySwiper" style="margin-top: 10px;padding-top: 45px;">
        <swiper-slide v-for="(item,index) in fileList" :key="index">
          <div style="display: flex;justify-content: center;align-items: center;height: 366px;">
            <img :src="item.url" class="ratio-img" data-ratio="0.4386">
          </div>
        </swiper-slide>
      </swiper>
      <!--以下看需要添加-->
      <div class="swiper-pagination " slot="pagination"></div>
    </div>
    <div class="in_business cf">
      <div class="wrap clearfix">
        <h2 class="in_tit cf">
          <router-link to="/house">
            <a>
              <span class="span01 font-30">珩亿达集团 · 集团产业</span>
              <span class="span02 font-12">HENGYIDA GROUP<br>Group of Industries</span>
            </a>
          </router-link>
        </h2>
        <ul class="cf">
          <li>
            <router-link to="/house">
              <a title="房地产">
                <div class="img tran_scale">
                <span class="auto-img">
                  <img src="static/images/20170221110745_1782.jpg" style="width: auto; height: 504px; margin-top: 0px; margin-left: 0px; visibility: visible;">
                </span>
                </div>
                <div class="tit">
                  <span class="font-35">房地产<i></i></span>
                </div>
              </a>
            </router-link>
          </li>
          <li>
            <router-link to="/house">
              <a title="酒店">
                <div class="img tran_scale">
                <span class="auto-img">
                  <img src="static/images/20170228150314_4504.jpg" style="width: auto; height: 504px; margin-top: 0px; margin-left: 0px; visibility: visible;">
                </span>
                </div>
                <div class="tit">
                  <span class="font-35">酒店<i></i></span>
                </div>
              </a>
            </router-link>
          </li>
          <li>
            <router-link to="/house">
              <a title="教育">
                <div class="img tran_scale">
                <span class="auto-img">
                  <img src="static/images/20170221111126_4488.jpg" style="width: auto; height: 504px; margin-top: 0px; margin-left: 0px; visibility: visible;">
                </span>
                </div>
                <div class="tit">
                  <span class="font-35">教育<i></i></span>
                </div>
              </a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="wrap clearfix">
      <div class="in_about cf">
        <div class="text fl">
          <h2 class="font-30 cf">集团简介</h2>
          <div class="con">
            <div class="edit_con_original edit-con-original" v-html="essay.content"></div>
          </div>
          <div class="more font-16">
            <a @click="push('/index/detail', {name: '集团简介', type: 1})" title="查看详情" class="pointer">查看详情</a>
          </div>
        </div>
        <div class="in_video fr">
          <div class="bx-wrapper" style="max-width: 100%;">
            <div class="bx-viewport"
                 style="width: 100%; overflow: hidden; position: relative; height: 330px;">
              <ul style="width: 415%; position: relative; transition-duration: 0s;">
                <li style="float: left; list-style: none; position: relative; width: 587px;">
                  <img :src="essay.imgUri" title="essay.title">
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="in_news cf">
        <h2 class="in_tit cf">
          <router-link to="/news">
            <a>
              <span class="span01 font-30">珩亿达集团 · 新闻中心</span>
              <span class="span02 font-12">HENGYIDA GROUP<br>News center</span>
            </a>
          </router-link>
        </h2>
        <div class="bx-wrapper" style="max-width: 1277px; margin: 0px auto;">
          <div class="bx-viewport" style="width: 100%; overflow: hidden; position: relative; height: 454px;">
            <ul style="width: 515%; position: relative; transition-duration: 0s;">
              <li v-for="(item,index) in essayList.list" :key="index" style="float: left; list-style: none; position: relative; width: 394.667px; margin-right: 43px;" class="bx-clone">
                <div class="img tran_scale">
                  <a title=""><img :src="item.imgUri | getdefaultImg" class="ratio-img" data-ratio="0.5668" style="height: 223px;"></a>
                </div>
                <div class="con">
                  <div class="date en">
                    <span class="font-39">{{item.day}}</span>
                    <span class="font-12">{{item.yearMonth}}</span>
                  </div>
                  <h3 class="font-18">
                    <router-link :to="`/newsDetail/${item.id}`">
                      <a :title="item.title">{{item.title}}</a>
                    </router-link>
                  </h3>
                  <p style="font-size: 14px;font-family: 'Microsoft Yahei',arial,'\5b8b\4f53';">{{item.contentShort}}</p>
                  <router-link :to="`/newsDetail/${item.id}`">
                    <div class="more"><a title=""></a></div>
                  </router-link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import Footer from '@/components/Footer'
  import Header from '@/components/Header'
  import imgApi from '../../api/img'
  import essayApi from '../../api/essay'
  import Code from '../../utils/code'

  export default {
    name: 'Index',
    data () {
      return {
        navList: [
          {
            name: '首页'
          },
          {
            name: '天原集团',
            showChildNav: false,
            child: {
              img: 'static/images/nav_adimg01.jpg',
              childName: ['集团简介', '董事长简介', '组织架构', '企业文化', '大事记', '企业荣誉']
            }
          },
          {
            name: '新闻中心'
          },
          {
            name: '业务领域',
            showChildNav: false,
            child: {
              img: 'static/images/nav_adimg01.jpg',
              childName: ['集团简介', '董事长简介', '组织架构', '企业文化', '大事记', '企业荣誉']
            }
          },
          {
            name: '社会责任'
          },
          {
            name: '加入珩亿达'
          },
          {
            name: '联系我们'
          }
        ],
        swiperOption: {
          notNextTick: true,
          // 循环
          loop: true,
          // 设定初始化时slide的索引
          initialSlide: 0,
          // 自动播放
          // autoplay: true,
          autoplay: {
              delay: 3000,
              stopOnLastSlide: false,
              disableOnInteraction: true,
          },
          // 滑动速度
          speed: 800,
          // 滑动方向
          direction: 'horizontal',
          // 小手掌抓取滑动
          // grabCursor : true,
          // 滑动之后回调函数
          on: {
            slideChangeTransitionEnd: function () {
              // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
            }
          },
          // 分页器设置
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        fileList: [],
        essayList: {
          list: [],
          listQuery: {
            exceptId: '',
            type: 0,
            current: 1,
            size: 3
          }
        },
        essay: {
          title: '',
          content: '',
          imgUri: ''
        }
      }
    },

    mounted () {
      this.imgApi()
      this.getEssay()
      this.getArticleById(1)
    },

    components: {
      swiper,
      swiperSlide,
      Footer,
      Header
    },

    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },

    methods: {
      imgApi () {
        imgApi.find({ type: 1 }).then(res => {
          if (Code.SUCC === res.data.code) {
            this.fileList = res.data.result
          }
        }).catch(() => {
        })
      },
      getArticleById (type) {
        essayApi.getById({ type }).then(res => {
          if (res.data.result) {
            this.essay = res.data.result
          }
        })
      },
      getEssay () {
        essayApi.page(this.essayList.listQuery).then(res => {
          this.essayList.list = res.data.result.records.map(item => {
            if (item.title.length > 17) {
              item.title = item.title.substring(0, 17) + '...'
            }
            return item
          })
        })
      },
      push (path, query = {}) {
        this.$router.push({ path: path, query: query })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bx-viewport {
    /*fix other elements on the page moving (on Chrome)*/
    -webkit-transform: translatez(0);
  }

  .swiper-wrap {
    width: 100%;
    padding-bottom: 50px;
  }

  .swiper-slide {
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
  }

  /**************in_business****************/
  .in_business {
    background: #f4f4f4;
    padding: 67px 0px 73px;
  }

  .in_business ul li {
    float: left;
    width: 33.3%;
    position: relative;
  }

  .in_business ul li .tit {
    position: absolute;
    left: 0px;
    top: 32%;
    width: 100%;
    text-align: center;
  }

  .in_business ul li .tit span {
    border: 1px solid #fff;
    position: relative;
    display: inline-block;
    padding: 10px 38px 30px 14px;
    color: #fff;
    font-weight: bold;
  }

  .in_business ul li .tit span i {
    position: absolute;
    left: 15px;
    bottom: 17px;
    width: 48px;
    height: 4px;
    background: #fff;
  }

  .in_business ul li .auto-img {
    height: 504px;
  }

  /*******************in_about******************/
  .in_about {
    background: url(../../../static/images/in_about_bg.jpg) repeat-y center center;
    margin-top: 72px;
    padding: 98px 74px 113px 70px;
  }

  .in_about .text {
    width: 42.5%;
  }

  .in_about .text h2 {
    font-weight: normal;
    line-height: 100%;
    color: #717171;
  }

  .in_about .text .con {
    color: #636363;
    margin: 35px 0px 10px;
    max-height: 210px;
    overflow: hidden;
  }

  .in_about .text .con span {
    font-weight: bold;
    font-size: 18px;
  }

  .in_about .text .con .span01 {
    color: #a79172;
  }

  .in_about .text .con p {
    margin-bottom: 13px;
  }

  .in_about .text .more {
    padding-top: 46px;
  }

  .in_about .text .more a {
    color: #fff;
    background: #a79172;
    width: 133px;
    height: 39px;
    text-align: center;
    line-height: 39px;
    display: inline-block;
  }

  .in_about .text .more a:hover {
    background: #907753;
  }

  .in_about .in_video {
    width: 52.59%;
  }

  .in_about .in_video img {
    width: 100%;
  }

  .in_about .in_video ul li {
    position: relative;
    float: left;
  }

  .in_about .in_video ul li a {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    display: inline-block;
    background: url(../../../static/images/play.png) no-repeat center center;
  }

  /********video_tcbox**********/
  .video_tcbox {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0;
    display: block;
  }

  .video_tcbox .video_tccon {
    position: absolute;
    width: 60%;
    left: 20%;
    z-index: 2;
  }

  .video_tcbox .video_tccon .con.play .bon-play {
    display: none;
  }

  .video_tcbox .video_t {
    background: #000;
  }

  .video_tcbox .mask {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(13, 45, 43, 0.8);
  }

  .lt9 .video_tcbox .mask {
    filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr="#880d2d2b", EndColorStr="#880d2d2b");
  }

  .video_tcbox .close {
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 3;
    cursor: pointer;
  }

  .video_tcbox .bon-play {
    background: url(../../../static/images/play.png) no-repeat;
    width: 89px;
    height: 62px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -31px 0 0 -44.5px;
    pointer-events: none;
    display: none;
  }

  .ie .video_tcbox .bon-play {
    display: none;
  }

  .video_tcbox.open {
    z-index: 99999;
    opacity: 1;
  }

  .lt9 .video_tcbox {
    display: none;
  }

  .lt9 .video_tcbox.open {
    z-index: 99999;
    display: block;
  }

  .video_con.ind_5 {
    background: #000;
    cursor: pointer;
    position: relative;
  }

  .video_con.ind_5 .bon-play {
    background: url(../../../static/images/play.png) no-repeat;
    width: 89px;
    height: 62px;
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -44.5px;
    margin-top: -31px;
    pointer-events: none;
  }

  .video_con.ind_5.play .bon-play {
    display: none;
  }

  .ie .video_con.ind_5 .bon-play {
    display: none;
  }

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  /*************in_news****************/
  .in_news {
    padding-top: 54px;
  }

  .in_news h2 {
    margin-bottom: 41px;
  }

  .in_news ul li {
    float: left;
    width: 31.01%;
    margin-right: 3.36%;
  }

  .in_news ul li .img img {
    width: 100%;
  }

  .in_news ul li .con {
    border: 1px solid #dcdcdc;
    border-top: none;
    padding: 0px 35px 29px 26px;
  }

  .in_news ul li .date {
    width: 68px;
    height: 68px;
    background: #a79172;
    margin-top: -49px;
    position: relative;
    text-align: center;
    color: #fff;
  }

  .in_news ul li .date span {
    display: block;
    line-height: 120%;
  }

  .in_news ul li .date span:first-child + span {
    line-height: 100%;
  }

  .in_news ul li h3 {
    line-height: 133%;
    height: 2.66em;
    overflow: hidden;
    margin-top: 22px;
  }

  .in_news ul li h3 a {
    color: #000;
  }

  .in_news ul li h3 a:hover {
    color: #eb6100;
  }

  .in_news ul li p {
    color: #636363;
    margin-top: 19px;
    height: 3em;
    overflow: hidden;
  }

  .in_news ul li .more {
    padding-top: 18px;
  }

  .in_news ul li .more a {
    background: url(../../../static/images/in_news_more01.png) no-repeat;
    width: 28px;
    height: 28px;
    display: inline-block;
  }

  .ie8 .in_news ul li {
    padding-bottom: 1px;
  }

  .bx-wrapper {
    -moz-box-shadow: 0 0 5px #ccc;
    -webkit-box-shadow: 0 0 5px #ccc;
    box-shadow: 0 0 5px #ccc;
    border: 5px solid #fff;
    background: #fff;
  }

  .in_tit {
    font-weight: normal;
    color: #717171;
    margin-bottom: 22px;
    text-align: left;
  }

  .in_tit span {
    float: left;
  }

  .in_tit .span01 {
    line-height: 100%;
  }

  .in_tit .span02 {
    color: #a6a6a6;
    line-height: 14px;
    padding: 2px 29px 0px 17px;
  }

  .in_tit a {
    background: url(../../../static/images/in_tit_jt.png) no-repeat right center;
    display: inline-block;
    color: #717171;
  }
</style>

<style>
  .swiper-wrap .swiper-pagination {
    padding: 5px 5px;
    width: 100%;
  }

  .swiper-wrap .swiper-pagination-bullet {
    background: #666;
  }

  .swiper-wrap .swiper-pagination-bullet-active {
    background: #000;
  }

  .swiper-wrap .swiper-pagination span {
    margin: 0 5px;
  }

  .swiper-wrap .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
  }

  .swiper-wrap .swiper-container {
    margin-top: 0 !important;
  }
</style>
