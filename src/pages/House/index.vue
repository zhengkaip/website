<template>
  <div>
    <Header></Header>
    <div class="wrap clearfix">
      <div class="current cf">
        <h1 class="fl font-36"><i></i>集团产业</h1>
        <div class="cur_rt font-14 fr">
          <a title="首页" href="/index.html">首页</a>&gt;
          <span>集团产业</span>
        </div>
      </div>
      <div class="bus_real_head cf">
        <!--<div class="tit cf">-->
          <!--<div class="edit_con_original edit-con-original">-->
            <!--2013年是珩亿达集团发展历程中具有里程碑意义的一年，<br>-->
            <!--<b class="font-24">我们将以天圆祥泰双子座项目为新起点，立足北京、布局全国，</b><br> 力争五年内完成三百万平米的综合开发,成为具有大型商业、住宅、旅游会展综合性地产开发公司。 <br> 业务发展方向:-->
          <!--</div>-->
        <!--</div>-->
        <ul class="cf">
          <li v-for="(item, index) in list" :key="index">
            <div class="date font-36 en">
              <span>{{index + 1}}</span>
              <i></i>
            </div>
            <dl>
              <dt class="font-24">{{item.title}}</dt>
              <dd class="font-12">{{item.contentShort}}</dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from '@/components/Footer'
  import Header from '@/components/Header'
  import classicCaseApi from '../../api/classicCase'

  export default {
    name: 'House',
    components: {
      Footer,
      Header
    },
    data () {
      return {
        loading: false,
        total: 0,
        list: null,
        listQuery: {
          current: 1,
          size: 100,
          type: '2'
        }
      }
    },
    created () {
      this.page()
    },
    methods: {
      page () {
        // this.listQuery.type = this.$route.params.key
        this.loading = true
        classicCaseApi.page(this.listQuery).then(res => {
          console.log('res.data.result.records:', res.data.result.records)
          this.list = res.data.result.records
        }).finally(() => {
          this.loading = false
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

  /************************bussiness*****************************/
  /******bus_real_head******/
  .bus_real_head {
    background: url(../../../static/images/bus_real_head_bg.jpg) repeat-y center center;
  }

  .bus_real_head .tit {
    text-align: center;
    color: #636363;
    padding: 71px 0px 15px;
    line-height: 171%;
  }

  .bus_real_head .tit b {
    padding: 6px 0px 14px;
    display: inline-block;
  }

  .bus_real_head ul {
    padding-left: 2.5%;
  }

  .bus_real_head ul li {
    float: left;
    width: 31.5%;
    padding: 3.65% 0px 1.5%;
  }

  .bus_real_head ul li .date {
    float: left;
    padding: 0px 6px 6px 0px;
    position: relative;
    margin-left: 16.4%;
    margin-right: 7.25%;
  }

  .bus_real_head ul li .date span {
    position: absolute;
    left: 6px;
    font-weight: bold;
    top: 6px;
    display: inline-block;
    width: 60px;
    height: 60px;
    background: #c2ab8a;
    text-align: center;
    line-height: 60px;
    color: #fff;
  }

  .bus_real_head ul li .date i {
    width: 56px;
    height: 56px;
    display: inline-block;
    border: 2px solid #c2ab8a;
  }

  .bus_real_head ul li dl {
    padding-right: 9%;
    overflow: hidden;
  }

  .bus_real_head ul li dl dt {
    line-height: 100%;
    padding-bottom: 18px;
  }

  .bus_real_head ul li dl dd {
    text-align: justify;
    height: 9em;
    overflow: hidden;
  }
</style>
