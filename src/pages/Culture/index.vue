<template>
    <div>
        <Header></Header>
        <div class="wrap clearfix">

            <div class="current cf">
                <h1 class="fl font-36">
                    <i></i>企业文化</h1>
                <div class="cur_rt font-14 fr">
                    <a title="首页"
                       href="/index.html">首页</a>&gt;
                    <a href="/about/index.html"
                       title="珩亿达集团">珩亿达集团</a>&gt;
                    <span>企业文化</span>
                </div>
            </div>
            <div class="ab_culture cf">
                <h2 class="font-36 cf">善良
                    <span>·</span>智慧
                    <span>·</span>高效
                    <span>·</span>卓越</h2>
                <div class="con cf">
                    <div class="img"><img src="static/images/20170228133924_4711.jpg"
                             title="企业文化"
                             onerror="lods(this)"></div>
                    <div class="text">
                        <dl>
                            <dt class="font-24">企业理念</dt>
                            <dd>
                                <div class="edit_con_original edit-con-original">
                                    <p>
                                        珩亿达集团企业文化的核心理念是：<br>
                                        <span>”商决于智、信取于诚“</span> 。
                                    </p>
                                    <p>
                                        锐意进取，开拓创新，共同塑造
                                        <span>“善良、智慧、高效、卓越”</span>的企业精神，逐步实现珩亿达集团的经营规范化、多元化和国际化。
                                    </p>
                                </div>
                            </dd>
                        </dl>
                        <dl>
                            <dt class="font-24">核心价值观</dt>
                            <dd>
                                <label>资源整合</label>
                                <label>优势互补</label>
                                <label>合作共赢</label>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'
export default {
    name: 'culture',
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
/**************ab_organization******************/
.ab_organization {
}
.ab_organization img {
    max-width: 100%;
}

/*******************ab_culture***********************/
.ab_culture {
    padding-bottom: 10px;
}
.ab_culture h2 {
    text-align: center;
    padding: 6px 0px 43px;
}
.ab_culture h2 span {
    color: #a79172;
    font-size: 26px;
    font-weight: normal;
    padding: 0px 18px;
}

.ab_culture .con {
    background: url(../../../static/images/in_about_bg.jpg) repeat-y center top;
    padding: 49px 52px 50px 68px;
}

.ab_culture .img {
    float: right;
    width: 51.6%;
    margin-left: 11%;
}
.ab_culture .img img {
    width: 100%;
}

.ab_culture .text {
    overflow: hidden;
}
.ab_culture .text dl {
    padding-bottom: 11px;
}
.ab_culture .text dl dt {
    font-weight: bold;
    padding: 17px 0px 10px;
}
.ab_culture .text span {
    font-size: 18px;
}
.ab_culture .text p {
    padding-bottom: 5px;
}
.ab_culture .text label {
    font-size: 18px;
    color: #a79172;
    position: relative;
    display: inline-block;
    margin-right: 12px;
}
.ab_culture .text label i {
    position: absolute;
    left: 0px;
    width: 100%;
    height: 1px;
    bottom: 0px;
    background: #a79172;
}
.ab_culture .text label {
    border-bottom: 1px solid #a79172;
}
</style>
