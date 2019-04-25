<template>
  <header class="clearfix">
    <div class="head_top">
      <div class="wrap cf">
        <div class="welcome font-12 en fl">Welcome to G.S Group</div>
        <div class="top_share fr">
          <a href="javascript:void();" class="a-1"></a>
          <a href="javascript:void();" class="a-2 weixinbut" data-qrcode="/Upload/image/20170220/20170220135420_5371.jpg"></a>
        </div>
        <div class="top_tel en fr">
          <ul>
            <li class="font-14">
              <i><img src="static/images/top_tel_ico01.png"></i>010-50908666
            </li>
            <li class="font-12">
              <a href="tygroup@tygroup.com.cn"><i><img src="static/images/top_tel_ico02.png"></i>tygroup@tygroup.com.cn</a>
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
              <a href="/index.html" class="font-16">{{items.name}}</a>
              <div class="cf l1 child" style="display:block;" v-if="items.child">
                <div class="txt font-14">
                  <dl>
                    <dd v-for="(item,i) in items.child.childName" v-bind:key="i">
                      <a href="/about/index.html">{{item}}</a>
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
            showChildNav: false
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
            name: '新闻中心',
            showChildNav: false
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
            name: '社会责任',
            showChildNav: false
          },
          {
            name: '加入天圆',
            showChildNav: false
          },
          {
            name: '联系我们',
            showChildNav: false
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
      }
    }
  }
</script>
