<template>
  <div>
    <Header></Header>
    <section class="main clearfix">
      <div class="wrap clearfix">
        <div class="current cf"></div>
        <div class="ns_notice_body cf">
          <div class="ns_notice_lf fl">
            <div class="article-box">
              <div class="art-title cf">
                <h6 class="font-22">{{essay.title}}</h6>
                <div class="basic-list font-14">
                  <span class="date en">{{essay.displayTime}}</span>
                  <span class="view en">{{essay.viewCounts}}</span>
                </div>
              </div>
              <div class="art-text-box edit_con_original font-14" style="line-height:180%;color: #404040;font-size: 15px;font-family: 'Microsoft Yahei',arial,'\5b8b\4f53';text-indent: 2em;" v-html="essay.content"></div>
              <div class="clear"></div>
              <div class="pager-close cf">
                <div class="close-right  font-14">
                  <a @click="goback">返回</a>
                </div>
                <div class="pager-left  font-12">
                  <p v-show="pre && !!pre.id">
                    <span>上一篇：</span>
                    <router-link :to="`/newsDetail/${pre.id}`">
                      <a :title="pre.title">{{pre.title}}</a>
                    </router-link>
                  </p>
                  <p class="ut-s" v-show="next && !!next.id">
                    <span>下一篇：</span>
                    <router-link :to="`/newsDetail/${next.id}`">
                      <a :title="next.title">{{next.title}}</a>
                    </router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside class="ns_notice_rt fr">
            <h2 class="font-24 cf">最新动态
              <i></i>
            </h2>
            <ul class="cf">
              <li v-for="(item,index) in essayList.list" :key="index">
                <div class="img">
                  <router-link :to="`/newsDetail/${item.id}`">
                    <a class="tran_scale" :title="item.title">
                      <img :src="item.imgUri">
                    </a>
                  </router-link>
                </div>
                <p class="date font-12 en">{{item.displayTime}}</p>
                <p class="font-18">
                  <router-link :to="`/newsDetail/${item.id}`">
                    <a :title="item.title">{{item.title}}</a>
                  </router-link>
                </p>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>
<script>
  import Footer from '@/components/Footer'
  import Header from '@/components/Header'

  import essayApi from '../../api/essay'

  export default {
    name: 'enterDetails',

    components: { Footer, Header },

    data () {
      return {
        essay: {
          displayTime: '',
          content: ''
        },
        pre: {
          id: '',
          title: ''
        },
        next: {
          id: '',
          title: ''
        },
        essayList: {
          list: [],
          listQuery: {
            exceptId: '',
            type: 0,
            current: 1,
            size: 3
          }
        }
      }
    },

    mounted () {
      this.getById(this.$route.params.id)
      this.findPreNextData(this.$route.params.id)

      this.essayList.listQuery.exceptId = this.$route.params.id
      this.getEssay()
    },

    methods: {
      goback () {
        this.$router.go(-1)
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
      getById (id) {
        essayApi.getById({ id: id }).then(res => {
          this.essay = res.data.result
        })
      },
      findPreNextData (id) {
        essayApi.findPreNextData({ id: id, type: 0 }).then(res => {
          if (res.data.result.pre) {
            if (!res.data.result.pre.id) {
              res.data.result.pre.id = ''
            }
            if (!res.data.result.pre.title) {
              res.data.result.pre.title = ''
            }
            this.pre = res.data.result.pre
          } else {
            this.pre.id = ''
            this.pre.title = ''
          }

          if (res.data.result.next) {
            if (!res.data.result.next.id) {
              res.data.result.next.id = ''
            }
            if (!res.data.result.next.title) {
              res.data.result.next.title = ''
            }
            this.next = res.data.result.next
          } else {
            this.next.id = ''
            this.next.title = ''
          }
        })
      }
    },

    watch: {
      '$route' () {
        if (this.$route.params.id) {
          this.getById(this.$route.params.id)
          this.findPreNextData(this.$route.params.id)
        }
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

  /*****ns_noticelb******/
  .ns_notice_lf {
    width: 65.625%;
  }

  /*******ns_noticelb**********/
  .ns_noticelb ul {
    padding-bottom: 1.3%;
  }

  .ns_noticelb ul li {
    float: left;
    width: 47.14%;
    border: 1px solid #dcdcdc;
    padding-bottom: 28px;
    margin-bottom: 4.8%;
  }

  .ns_noticelb ul li .img {
    margin: 0px -1px;
  }

  .ns_noticelb ul li .img img {
    width: 100%;
  }

  .ns_noticelb ul li h2 {
    padding: 0px 16.2% 0px 6.56%;
    margin: 26px 0px 15px;
    height: 2.66em;
    overflow: hidden;
    font-weight: 600;
    line-height: 133%;
  }

  .ns_noticelb ul li h2 a {
    color: #000;
  }

  .ns_noticelb ul li h2 a:hover {
    color: #eb6100;
  }

  .ns_noticelb ul li .con {
    padding: 0px 5% 10px 6.56%;
  }

  /*****ns_noticelb******/
  .ns_notice_lf {
    width: 65.625%;
  }

  /*******ns_noticelb**********/
  .ns_noticelb ul {
    padding-bottom: 1.3%;
  }

  .ns_noticelb ul li {
    float: left;
    width: 47.14%;
    border: 1px solid #dcdcdc;
    padding-bottom: 28px;
    margin-bottom: 4.8%;
  }

  .ns_noticelb ul li .img {
    margin: 0px -1px;
  }

  .ns_noticelb ul li .img img {
    width: 100%;
  }

  .ns_noticelb ul li h2 {
    padding: 0px 16.2% 0px 6.56%;
    margin: 26px 0px 15px;
    height: 2.66em;
    overflow: hidden;
    font-weight: 600;
    line-height: 133%;
  }

  .ns_noticelb ul li h2 a {
    color: #000;
  }

  .ns_noticelb ul li h2 a:hover {
    color: #eb6100;
  }

  .ns_noticelb ul li .con {
    padding: 0px 5% 10px 6.56%;
  }

  .ns_noticelb ul li .date {
    width: 68px;
    height: 68px;
    background: #a79172;
    margin-top: -49px;
    position: relative;
    text-align: center;
    color: #fff;
  }

  .ns_noticelb ul li .date span {
    display: block;
    line-height: 120%;
  }

  .ns_noticelb ul li .date span:first-child + span {
    line-height: 100%;
  }

  .ns_noticelb ul li p {
    color: #636363;
    margin-top: 14px;
    height: 3em;
    overflow: hidden;
  }

  .ns_noticelb ul li .ft {
    padding-top: 18px;
  }

  .ns_noticelb ul li .ft a {
    background: url(../../../static/images/in_news_more01.png) no-repeat;
    float: left;
    width: 28px;
    height: 28px;
    display: inline-block;
  }

  .ns_noticelb ul li .ft .edit {
    float: right;
    padding: 0px 0px 0px 32px;
    margin-top: 1px;
    line-height: 18px;
    cursor: pointer;
    margin-left: 22px;
    position: relative;
    color: #a79172;
  }

  .ns_noticelb ul li .ft .edit i {
    position: absolute;
    left: 0px;
    top: 50%;
    margin-top: -9px;
  }

  .ns_noticelb ul li.li02 {
    float: right;
  }

  .ns_noticelb ul li.libg {
    background: #faf9f7;
  }

  /*********ns_notice_rt*********/
  .ns_notice_rt {
    width: 31.01%;
  }

  .ns_notice_rt h2 {
    background: #f4f1ed;
    position: relative;
    margin-bottom: 1px;
    font-weight: normal;
    line-height: 72px;
    padding-left: 17px;
    color: #000;
  }

  .ns_notice_rt h2 i {
    width: 12px;
    height: 6px;
    background: url(../../../static/images/jt06.png) no-repeat;
    position: absolute;
    top: 50%;
    margin-top: -3px;
    right: 18px;
  }

  .ns_notice_rt ul {
    border: 1px solid #dcdcdc;
    padding: 0px 15px 8px;
  }

  .ns_notice_rt ul li {
    border-top: 1px solid #f4f1ed;
    padding: 20px 0px 18px;
  }

  .ns_notice_rt ul li .date {
    color: #a79172;
    padding-top: 14px;
  }

  .ns_notice_rt ul li p {
    line-height: 133%;
    margin: 3px 0px 0px;
    padding: 0px 9px;
  }

  .ns_notice_rt ul li a {
    color: #000;
  }

  .ns_notice_rt ul li a:hover {
    color: #eb6100;
  }

  .ns_notice_rt ul li img {
    width: 100%;
  }

  .ns_notice_rt ul li:first-child {
    border-top: none;
  }

  .article-box .share {
    padding-top: 36px;
    padding-bottom: 14px;
  }

  .article-box .share .sharetl {
    float: left;
    padding-right: 5px;
    line-height: 32px;
    color: #383842;
  }

  .article-box .share .jiathis_style_32x32 {
    float: left;
  }

  .article-box .share .jiathis_style_32x32 a {
    margin: 0px -1px;
    float: left;
  }

  .pager-close {
    border-top: 1px solid #898989;
    padding-top: 25px;
    width: 92.86%;
  }

  .pager-close .pager-left {
    line-height: 210%;
    color: #383842;
    overflow: hidden;
  }

  .pager-close .pager-left p {
    text-align: left;
  }

  .pager-close .pager-left p span {
    color: #626670;
  }

  .pager-close .pager-left p a {
    color: #a79172;
  }

  .pager-close .pager-left p a:hover {
    color: #eb6100;
  }

  .pager-close .close-right {
    float: right;
    padding-top: 5px;
    font-weight: bold;
  }

  .pager-close .close-right a {
    display: inline-block;
    background: #a79172;
    color: #fff;
    padding: 7px 29px;
  }

  .pager-close .close-right a:hover {
    background: #eb6100;
  }

  .art-title h6 {
    color: #000;
    font-weight: normal;
    padding-bottom: 28px;
    border-bottom: 3px solid #a79172;
    margin-bottom: 1px;
    text-align: center;
  }

  .article-box .art-text-box img {
    max-width: 100%;
  }

  .article-box .art-text-box p {
    padding-bottom: 9px;
  }

  .art-text-box {
    font-size: 14px;
    color: #636363;
    line-height: 143%;
    margin-top: 10px;
    margin-bottom: 10px;
    max-width: 840px;
  }

  .basic-list {
    text-align: center;
    background: #f8f6f3;
  }

  .basic-list span {
    display: inline-block;
    color: #a79172;
    line-height: 32px;
    height: 32px;
    margin: 0 29px;
  }

  .basic-list .date {
    background: url(../../../static/images/time.png) no-repeat left center;
    padding-left: 36px;
  }

  .basic-list .author {
    background: url(../../../static/images/ns_notice_ico01.png) no-repeat left center;
    padding-left: 31px;
  }

  .basic-list .view {
    background: url(../../../static/images/ns_notice_ico02.png) no-repeat left center;
    padding-left: 31px;
  }

  .en {
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
