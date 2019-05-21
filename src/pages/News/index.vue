<template>
  <div>
    <Header></Header>
    <div class="wrap clearfix">
      <div class="current cf">
        <h1 class="fl font-36"><i></i>新闻中心</h1>
        <div class="cur_rt font-14 fr">
          <router-link to="/index">首页</router-link>&gt;
          <span>新闻中心</span>
        </div>
      </div>

      <div class="ns_focus cf">
        <div class="divimg">
          <a class="tran_scale" title=""><img :src="topEssay.imgUri"></a>
        </div>
        <div class="text">
          <h2 class="font-30">
            <router-link :to="`/newsDetail/${topEssay.id}`">
              <a :title="topEssay.title">{{topEssay.title}}</a>
            </router-link>
          </h2>
          <div class="date font-12 en">{{topEssay.displayTime}}</div>
          <p>{{topEssay.contentShort}}</p>
          <router-link :to="`/newsDetail/${topEssay.id}`">
            <div class="more"><a></a></div>
          </router-link>
        </div>
      </div>

      <div class="ns_list interlaced cf">
        <ul class="cf">
          <li v-for="(item,index) in essay.list" :key="index" :class="{li02: index%2===1}">
            <div class="date en">
              <span class="font-39">{{item.day}}</span>
              <span class="font-12">{{item.yearMonth}}</span>
            </div>
            <div class="text">
              <h2 class="font-22 ut-s">
                <router-link :to="`/newsDetail/${item.id}`">
                  <a target="_blank" :title="item.title">{{item.title}}</a>
                </router-link>
              </h2>
              <p class="font-12">{{item.contentShort}}</p>
              <div class="more font-12">
                <router-link :to="`/newsDetail/${item.id}`">
                  <a target="_blank" title="">了解详情 &gt;&gt;</a>
                </router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <paginate :page-count="essay.pages" :page-range="3" :margin-pages="2" :click-handler="clickCallback" :prev-text="'上一页'" :next-text="'下一页'" :container-class="'pagination'" :page-class="'page-item'"></paginate>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import 'bootstrap/dist/css/bootstrap.min.css'
  import Footer from '../../components/Footer'
  import Header from '../../components/Header'
  import Pagination from '../../components/Pagination'

  import essayApi from '../../api/essay'

  export default {
    name: 'news',

    components: { Footer, Header, Pagination },

    data () {
      return {
        essay: {
          total: 0,
          pages: 0,
          list: [],
          listLoading: false,
          listQuery: {
            type: 0,
            current: 1,
            size: 10
          }
        }, topEssay: {
          imgUri: ''
        }
      }
    },

    mounted () {
      this.getTopEssay()
      this.getEssay()
    },

    methods: {
      clickCallback (pageNum) {
        this.essay.listQuery.current = pageNum
        this.getEssay()
      },
      getTopEssay () {
        essayApi.getById({ type: -1, isAddViewCount: 1 }).then(res => {
          this.topEssay = res.data.result
        })
      },
      getEssay () {
        this.essay.listLoading = true
        essayApi.page(this.essay.listQuery).then(res => {
          this.essay.list = res.data.result.records.map(item => {
            if (item.title.length > 17) {
              item.title = item.title.substring(0, 17) + '...'
            }
            if (item.contentShort.length > 100) {
              item.contentShort = item.contentShort.substring(0, 100) + '...'
            }
            return item
          })
          this.essay.pages = res.data.result.pages
          this.essay.total = res.data.result.total
        }).finally(() => {
          this.essay.listLoading = false
        })
      }
    }
  }
</script>

<style scoped>
  /***********************current************************/
  .current {
    border-bottom: 1px solid #ae997d;
    padding: 15px 0px 0px;
    margin-bottom: 42px;
  }

  .current h1 {
    font-weight: normal;
    color: #717171;
    position: relative;
    padding-bottom: 14px;
  }

  .current h1 i {
    width: 100%;
    min-width: 182px;
    height: 3px;
    background: #a79172;
    position: absolute;
    left: 0px;
    bottom: 0px;
  }

  .current .cur_rt {
    margin-top: 22px;
  }

  .current a {
    color: #717171;
    margin: 0px 5px;
  }

  .current a:hover {
    color: #a79172;
  }

  .current span {
    padding-left: 5px;
    color: #a79172;
  }

  /**************ab_intro*****************/
  .ab_intro {
    color: #636363;
    padding-bottom: 10px;
  }

  .ab_intro .img {
    float: left;
    width: 48.59%;
    margin-right: 6.4%;
  }

  .ab_intro .img img {
    width: 100%;
  }

  .ab_intro .text {
    overflow: hidden;
    padding-right: 5.47%;
    padding-top: 2.75%;
  }

  .ab_intro .text p {
    padding-bottom: 14px;
  }

  .ab_intro .text span {
    font-weight: bold;
    font-size: 18px;
  }

  .ab_intro .text .span01 {
    color: #a79172;
  }

  .ab_intro .text img {
    max-width: 100%;
  }

  .ab_intro .text h2 {
    padding-bottom: 39px;
  }

  /**************ab_speech*****************/
  .ab_speech {
    color: #636363;
    padding-bottom: 34px;
  }

  .ab_speech .img {
    float: left;
    width: 37.34%;
    margin-right: 3.9%;
  }

  .ab_speech .img img {
    width: 100%;
  }

  .ab_speech .text {
    overflow: hidden;
    padding-right: 5.47%;
  }

  .ab_speech .text h2 {
    font-weight: normal;
    color: #a79172;
    line-height: 133%;
    margin-top: -6px;
  }

  .ab_speech .text .con {
    line-height: 171%;
    padding-top: 21px;
  }

  .ab_speech .text .con p {
    margin-bottom: 10px;
  }

  .ab_speech .autograph {
    padding-top: 33px;
    text-align: right;
    padding-right: 13px;
  }

  .ab_speech .autograph b {
    position: relative;
    top: -10px;
  }

  .ab_speech .autograph img {
    vertical-align: sub;
    padding: 0px 0px 0px 35px;
    max-width: 80%;
  }

  .ie .ab_speech .text {
    margin-top: 0px;
  }

  /**************ns_focus*****************/
  .ns_focus {
    background: #f2f0eb;
  }

  .ns_focus .divimg {
    float: left;
    width: 50%;
  }

  .ns_focus .divimg img {
    width: 100%;
  }

  .ns_focus .text {
    float: right;
    width: 42.66%;
    padding-right: 2.18%;
    padding-top: 41px;
  }

  .ns_focus .text h2 {
    line-height: 120%;
    font-weight: normal;
    max-height: 2.4em;
    overflow: hidden;
  }

  .ns_focus .text h2 a {
    color: #000;
  }

  .ns_focus .text h2 a:hover {
    color: #eb6100;
  }

  .ns_focus .text .date {
    background: url(../../../static/images/date.png) no-repeat left 2px;
    padding-left: 19px;
    margin: 13px 0px 22px;
  }

  .ns_focus .text p {
    line-height: 171%;
    max-height: 5.13em;
    overflow: hidden;
  }

  .ns_focus .text .more {
    padding-top: 33px;
  }

  .ns_focus .text .more a {
    width: 28px;
    height: 28px;
    background: url(../../../static/images/ns_more.png) no-repeat;
    display: inline-block;
  }

  /*************ns_list*****************/
  .ns_list {
    padding-top: 62px;
  }

  .ns_list ul li {
    float: left;
    width: 48.28%;
    margin: 0.65% 0px 2.4%;
    padding: 3.1% 0px 2.8%;
    border: 1px solid #dcdcdc;
  }

  .ns_list ul li .date {
    float: left;
    margin-left: 4.69%;
    width: 68px;
    text-align: center;
    color: #fff;
    height: 68px;
    background: #c2ab8a;
  }

  .ns_list ul li .date span {
    display: block;
    line-height: 120%;
  }

  .ns_list ul li .date span:first-child + span {
    line-height: 100%;
  }

  .ns_list ul li .text {
    float: left;
    width: 70.2%;
    padding-left: 5.5%;
  }

  .ns_list .text h2 {
    line-height: 100%;
    color: #000;
    margin-bottom: 14px;
    font-weight: normal;
  }

  .ns_list .text h2 a {
    color: #000;
  }

  .ns_list .text p {
    line-height: 171%;
    height: 5.13em;
    overflow: hidden;
  }

  .ns_list .text .more {
    padding-top: 21px;
  }

  .ns_list .text .more a {
    color: #686868;
  }

  .ns_list .text .more a:hover {
    color: #eb6100;
  }

  .ns_list ul li.li02 {
    float: right;
  }

  .ns_list ul li:hover {
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  }
</style>
