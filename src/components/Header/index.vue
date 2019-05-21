<template>
  <header class="clearfix">
    <div class="head_top">
      <div class="wrap cf">
        <div class="welcome font-12 en fl">welcome to hengyida investment holdings group</div>
        <div class="top_share fr">
          <a class="a-1"></a>
          <a class="a-2 weixinbut" data-qrcode="/Upload/image/20170220/20170220135420_5371.jpg"></a>
        </div>
        <div class="top_tel en fr">
          <ul>
            <li class="font-14">
              <i><img src="static/images/top_tel_ico01.png"></i>027-86669997
            </li>
            <li class="font-12">
              <a href="#"><i><img src="static/images/top_tel_ico02.png"></i>hydjt8888@163.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="head-menu">
      <div class="wrap cf">
        <div class="logo fl">
          <a href="/index.html"><img src="static/images/logo.png"></a>
        </div>
        <nav>
          <ul class="cf">
            <li @mouseover="showChildNav(items)" @mouseout="hideChildNav(items)" v-for="(items,index) in navList" v-bind:key="index" :class="{'on':items.showChildNav}">
              <a class="font-16 pointer" @click="push(items.url)">{{items.name}}</a>
              <div class="cf l1 child" style="display:block;" v-if="items.child">
                <div class="txt font-14">
                  <dl>
                    <dd v-for="(item,i) in items.child.childName" v-bind:key="i">
                      <a @click="push(item.url, item.query)" class="pointer">{{item.name}}</a>
                    </dd>
                  </dl>
                </div>
              </div>
              <div class="line"></div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data () {
      return {
        navList: [
          {
            name: '首页',
            showChildNav: false,
            url: '/index'
          },
          {
            name: '集团介绍',
            showChildNav: false,
            child: {
              img: 'static/images/nav_adimg01.jpg',
              childName: [{
                name: '集团简介',
                url: '/index/detail',
                query: {
                  name: '集团简介',
                  type: 1
                }
              }, {
                name: '董事长简介',
                url: '/index/detail',
                query: {
                  name: '董事长简介',
                  type: 2
                }
              }, {
                name: '董事长致辞',
                url: '/index/detail',
                query: {
                  name: '董事长致辞',
                  type: 3
                }
              }, {
                name: '发展历程',
                url: '/index/detail',
                query: {
                  name: '发展历程',
                  type: 4
                }
              }, {
                name: '企业文化',
                url: '/index/detail',
                query: {
                  name: '企业文化',
                  type: 5
                }
              }, {
                name: '企业荣誉',
                url: '/index/detail',
                query: {
                  name: '企业荣誉',
                  type: 6
                }
              }]
            }
          },
          {
            name: '新闻中心',
            showChildNav: false,
            url: '/news'
          },
          {
            name: '集团产业',
            showChildNav: false,
            url: '/house'
          },
          {
            name: '加入我们',
            showChildNav: false,
            child: {
              img: 'static/images/nav_adimg01.jpg',
              childName: [{
                name: '人才理念',
                url: '/index/detail',
                query: {
                  name: '人才理念',
                  type: 20
                }
              }, {
                name: '人才战略',
                url: '/index/detail',
                query: {
                  name: '人才战略',
                  type: 21
                }
              }, {
                name: '人才发展',
                url: '/index/detail',
                query: {
                  name: '人才发展',
                  type: 22
                }
              }, {
                name: '社会招聘',
                url: '/recruitment',
                query: {
                  name: '社会招聘',
                  type: 23
                }
              }, {
                name: '校园招聘',
                url: '/recruitment',
                query: {
                  name: '校园招聘',
                  type: 24
                }
              }]
            }
          },
          {
            name: '联系我们',
            showChildNav: false,
            url: '/contact'
          }
        ]
      }
    },
    methods: {
      showChildNav (items) {
        items.showChildNav = true
      },
      hideChildNav (items) {
        items.showChildNav = false
      },
      push (path, query = {}) {
        this.$router.push({ path: path, query: query })
      }
    }
  }
</script>
<style scoped>
header{
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
}
</style>
