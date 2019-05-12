<template>
  <div>
    <Header></Header>
    <section class="main clearfix">
      <div class="wrap clearfix">
        <div class="current cf">
          <h1 class="fl font-36"><i></i>{{query.name}}</h1>
          <div class="cur_rt font-14 fr">
            <router-link to="/index">首页</router-link>&gt;
            <div v-if="query.type >= 20 && query.type < 30" style="display: inline-block">
              <router-link to="">加入我们</router-link>
            </div>
            <div v-else style="display: inline-block">
              <router-link :to="{ path: '/index/detail', query: {name: '集团简介', type: 1}}">集团介绍</router-link>
            </div>
            &gt;<span>{{query.name}}</span>
          </div>
        </div>
        <div class="ab_intro cf">
          <div class="img"><img :src="essay.imgUri | getdefaultImg" title="图片"></div>
          <div class="text" style="line-height:1.8;color: #606060;font-size: 14px;font-family: '华文中宋','Microsoft Yahei',arial,'\5b8b\4f53';font-weight: bold;text-align: left;">
            <div v-html="essay.content"></div>
          </div>
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
  import articleApi from '../../api/article'

  export default {
    name: 'showDetail',

    data () {
      return {
        query: {
          name: '',
          type: 1
        },
        essay: {
          title: '',
          content: '',
          imgUri: ''
        }
      }
    },

    components: {
      Footer,
      Header
    },

    methods: {
      getArticleById (type, id = null) {
        if (type >= 20 && type <= 30) {
          articleApi.getArticleById(id, type).then(res => {
            if (res.data.result) {
              this.essay.content = res.data.result.body.contentHtml
            } else {
              this.essay.content = ''
            }
          })
        } else {
          essayApi.getById({ type }).then(res => {
            if (res.data.result) {
              this.essay = res.data.result
            }
          })
        }
      }
    },

    watch: {
      $route () {
        this.query = this.$route.query
        if (this.query.id) {
          this.getArticleById(this.query.type, this.query.id)
        } else {
          this.getArticleById(this.query.type)
        }
      }
    },

    mounted () {
      this.query = this.$route.query
      if (this.query.id) {
        this.getArticleById(this.query.type, this.query.id)
      } else {
        this.getArticleById(this.query.type)
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
    padding-top: 2.75%
  }

  .ab_intro .text p {
    padding-bottom: 14px;
    text-align: left;
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
</style>
