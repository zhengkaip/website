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
              <a href="/business/index.html" title="业务领域">业务领域</a>
            </dt>
            <dd>
              <a href="/business/index.html">房地产</a>
            </dd>
            <dd>
              <a href="/business/finance.html">金融</a>
            </dd>
            <dd>
              <a href="/business/movies.html">影视</a>
            </dd>
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
                <p>官方微信：<br>天圆集团官方微信</p>
              </li>
              <li>
                <i><img src="static/images/ft_share_img01.png" onerror="lods(this)"></i>
                <p>新浪微博：天圆集团官方微博<br>
                  <a href="http://web.com/tianyuan" target="_blank" title="http://web.com/tianyuan">http://web.com/tianyuan</a>
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
                <a href="/aid_nav/sitemap.html" title="网站地图">网站地图</a>
              </li>
              <li>
                <a href="/aid_nav/legal.html" title="法律声明">法律声明</a>
              </li>
              <li>
                <a href="/about/index.html" title="关于天圆">关于天圆</a>
              </li>
            </ul>
          </div>
          <div class="copy font-12 cf">© 2019 天圆集团 ALL RIGHTS RESERVED
            <a href="http://www.miibeian.gov.cn" title="京ICP备11040840号-2" class="a1" target="_blank">京ICP备11040840号-2</a>
            <a href="http://www.xinhongru.com" target="_blank" title="xinhongru.com">Powered by xinhongru.com</a>
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
