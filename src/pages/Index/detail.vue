<template>
    <div>
        <Header></Header>
        <section class="main clearfix">
            <div class="wrap clearfix">
                <div class="current cf">
                    <h1 class="fl font-36">
                        <i></i>大事记</h1>
                    <div class="cur_rt font-14 fr">
                        <a title="首页"
                           href="/index.html">首页</a>&gt;
                        <a href="/about/index.html"
                           title="天圆集团">天圆集团</a>&gt;
                        <span>公司简介</span>
                    </div>
                </div>
                <div class="ab_intro cf">

                    <div class="img"><img src="static/images/20170802095700_9981.jpg"
                             title="天圆集团"
                             onerror="lods(this)"></div>

                    <div class="text">
                        <h2><img src="static/images/ab_intro_logo.png"
                                 onerror="lods(this)"
                                 title="天圆集团"></h2>
                        <div class="edit_con_original edit-con-original">
                            <p>
                                <br>
                            </p>
                            <p>
                                <span class="span01"> </span>
                            </p>
                            <p class="MsoNormal"
                               style="margin-left:0cm;">
                                <b>天圆集团前身天圆经贸有限公司创办于
                                    <span>1992</span>年，
                                    <span>1995</span>年成立集团公司，至今已发展成为总资产超150亿的综合性集团公司。</b>
                            </p>
                            <p class="MsoNormal"
                               style="margin-left:0cm;">
                                <b>在左安一董事长的带领下，秉承“商决于智、信取于诚”的经营理念，锐意进取，开拓创新，逐步实现了自身经营的规范化、多元化和国际化。
                                    <span></span>
                                </b>
                            </p>
                            <p class="MsoNormal"
                               style="margin-left:0cm;">
                                <b style="line-height:1.8;">目前，天圆集团已形成实业投资与金融资本两大板块互补互动的发展格局，经营领域涉及房地产开发、金融投资、资产管理、
                                    <b style="line-height:1.8;white-space:normal;">企业并购、生物科技、</b>影视文化等业务。</b>
                            </p>
                            <p>
                                <br>
                            </p>
                            <p>
                                <br>
                            </p>
                            <p>
                                <br>
                            </p>
                        </div>

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
export default {
    name: 'showDetail',
    components: {
        Footer,
        Header
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
    padding-top: 6.75%;
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
