<template>
  <div>
    <Header></Header>
    <section class="main clearfix">

      <div class="wrap clearfix">

        <div class="current cf">
          <h1 class="fl font-36">
            <i></i>联系我们</h1>
          <div class="cur_rt font-14 fr">
            <a title="首页"
               href="/index.html">首页</a>&gt;
            <span>联系我们</span>
          </div>
        </div>

        <div class="con_contact interlaced cf">

          <div class="con_text">
            <h2 class="font-30  cf">{{form.conpanyname}}</h2>

            <ul class="cf">
              <li>
                <div class="tit">
                  <div class="wrapper">
                    <div class="subwrap">
                      <h3>
                        <span>地址</span>
                      </h3>
                      <p>{{form.addr}}</p>
                    </div>
                  </div>
                </div>
                <i><img src="static/images/con_text_ico01.png"></i>
              </li>

              <li class="li02">
                <div class="tit">
                  <div class="wrapper">
                    <div class="subwrap">
                      <h3>
                        <span>电话</span>
                      </h3>
                      <p>{{form.phone}}</p>
                    </div>
                  </div>
                </div>
                <i><img src="static/images/con_text_ico02.png"></i>
              </li>
              <li>
                <div class="tit">
                  <div class="wrapper">
                    <div class="subwrap">
                      <h3>
                        <span>传真</span>
                      </h3>
                      <p>{{form.fax}}</p>
                    </div>
                  </div>
                </div>
                <i><img src="static/images/con_text_ico03.png"></i>
              </li>
              <li class="li02">
                <div class="tit">
                  <div class="wrapper">
                    <div class="subwrap">
                      <h3>
                        <span>邮编</span>
                      </h3>
                      <p>{{form.pcode}}</p>
                    </div>
                  </div>
                </div>
                <i><img src="static/images/con_text_ico04.png"></i>
              </li>
            </ul>
          </div>
          <div class="con_con_map">
            <div id="map"></div>
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

  import contactApi from '../../api/contact'

  export default {
    name: 'contact',
    components: {
      Footer,
      Header
    },
    data () {
      return {
        form: {
          id: '',
          addr: '',
          phone: '',
          fax: '',
          pcode: '',
          conpanyname: ''
        }
      }
    },
    methods: {
      get () {
        contactApi.get().then((res) => {
          console.log('res:', res.data)
          if (res.data.code === 200) {
            this.form = res.data.result
          } else {
            this.$message({ message: '数据获取失败！', type: 'error', showClose: true })
          }
        }).catch(() => {
          this.$message({ message: '数据获取失败！', type: 'error', showClose: true })
        })
      }
    },
    mounted () {
      this.get()
      var map = new BMap.Map('map')
      var point = new BMap.Point(116.404, 39.915)
      map.centerAndZoom(point, 15)
      var marker = new BMap.Marker(point) // 创建标注
      map.addOverlay(marker) // 将标注添加到地图中
      marker.setAnimation(BMAP_ANIMATION_BOUNCE) //跳动的动画
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

  /**************contact****************/
  .con_contact {
    padding-bottom: 20px;
  }

  .con_contact .con_text {
    float: left;
    width: 416px;
    margin-right: 3.9%;
    border-bottom: 1px solid #f4f1ed;
  }

  .con_contact .con_text h2 {
    color: #717171;
    font-weight: normal;
    margin-bottom: 36px;
  }

  .con_contact .con_text ul li {
    background: #f8f7f4;
    padding: 20px 10% 20px 21.63%;
    min-height: 67px;
    position: relative;
  }

  .con_contact .con_text ul li i {
    position: absolute;
    left: 7.21%;
    top: 50%;
    margin-top: -18px;
  }

  .con_contact .con_text ul li i img {
    width: 36px;
  }

  .con_contact .con_text ul li h3 {
    color: #a79172;
    margin-bottom: 6px;
  }

  .con_contact .con_text ul li h3 span {
    background: url(../../../static/images/jt03.png) no-repeat right center;
    padding-right: 15px;
    display: inline-block;
  }

  .con_contact .con_text ul li p {
    line-height: 128.6%;
  }

  .con_contact .con_text ul li.li02 {
    background: #fff;
  }

  .con_contact .con_text ul li .tit {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
  }

  .con_contact .con_text ul li .wrapper {
    position: absolute;
    left: 21.63%;
    right: 10%;
    top: 0px;
    width: 68.37%;
    height: 100%;
    bottom: 0px;
    display: table;
  }

  .con_contact .con_text ul li .subwrap {
    display: table-cell;
    vertical-align: middle;
  }

  .ie7 .con_contact .con_text ul li .subwrap {
    position: relative;
    top: 30%;
  }

  .ie7 .con_contact .con_text ul li:first-child .subwrap {
    position: relative;
    top: 20%;
  }

  .con_contact .con_con_map {
    overflow: hidden;
    border: 5px solid #e4dbce;
    padding: 3px;
  }

  .con_contact .con_con_map #map {
    width: 100%;
    height: 596px;
  }
</style>
