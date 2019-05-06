<template>
  <div>
    <footer class="footer clearfix">
      <div class="wrap clearfix">
        <div class="ft_nav">
          <dl>
            <dt class="font-15">
              <router-link :to="{ path: '/index/detail', query: {name: '集团简介', type: 1}}"><a>集团介绍</a></router-link>
            </dt>
            <dd>
              <router-link :to="{ path: '/index/detail', query: {name: '集团简介', type: 1}}"><a>集团简介</a></router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/index/detail', query: {name: '集团简介', type: 2}}"><a>董事长简介</a></router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/index/detail', query: {name: '董事长致辞', type: 3}}"><a>董事长致辞</a></router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/index/detail', query: {name: '发展历程', type: 4}}"><a>发展历程</a></router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/index/detail', query: {name: '企业文化', type: 5}}"><a>企业文化</a></router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/index/detail', query: {name: '企业荣誉', type: 5}}"><a>企业荣誉</a></router-link>
            </dd>
          </dl>
          <dl>
            <dt class="font-15">
              <router-link :to="{ path: '/news'}"><a>新闻中心</a></router-link>
            </dt>
          </dl>
          <dl>
            <dt class="font-15">
              <router-link :to="{ path: '/house'}"><a>集团产业</a></router-link>
            </dt>
          </dl>
          <dl>
            <dt class="font-15">
              <router-link :to="{ path: '/index/detail', query: {name: '人才理念', type: 20}}"><a>加入我们</a></router-link>
            </dt>
            <dd>
              <router-link :to="{ path: '/index/detail', query: {name: '人才理念', type: 20}}"><a>人才理念</a></router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/index/detail', query: {name: '人才战略', type: 21}}"><a>人才战略</a></router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/index/detail', query: {name: '人才发展', type: 22}}"><a>人才发展</a></router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/index/detail', query: {name: '人才理念', type: 23}}"><a>社会招聘</a></router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/index/detail', query: {name: '人才理念', type: 24}}"><a>校园招聘</a></router-link>
            </dd>
          </dl>
        </div>
        <div class="ft_rt">
          <div class="ft_share font-12 cf">
            <ul>
              <li>
                <i><img src="static/images/20170220135430_3836.jpg" onerror="lods(this)"></i>
                <p>官方微信：<br>珩亿达投资控股集团官方微信</p>
              </li>
              <li>
                <i><img src="static/images/ft_share_img01.png" onerror="lods(this)"></i>
                <p>新浪微博：珩亿达投资控股集团官方微博<br>
                  <a href="http://www.hydjt.cn" target="_blank" title="http://www.hydjt.cn">http://www.hydjt.cn</a>
                </p>
              </li>
            </ul>
          </div>
          <div class="copy_nav font-12 cf">
            <ul class="cf">
              <li>
                <router-link to="/contact"><a title="联系我们">联系我们</a></router-link>
              </li>
              <li>
                <router-link :to="{ path: '/house'}">集团产业</router-link>
              </li>
              <li>
                <router-link :to="{ path: '/news'}"><a>新闻中心</a></router-link>
              </li>
              <li>
                <router-link :to="{ path: '/index/detail', query: {name: '人才理念', type: 20}}"><a>加入我们</a></router-link>
              </li>
            </ul>
          </div>
          <div class="copy font-12 cf">© 2019 珩亿达投资控股集团 ALL RIGHTS RESERVED
            <a href="#" title="京ICP备11040840号-2" class="a1" target="_blank">粤ICP备19026004号-1</a>
            <!-- <a href="#" target="_blank" title="xinhongru.com">Powered by xinhongru.com</a> -->
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
</style>
