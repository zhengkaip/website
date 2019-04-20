<template>
    <div>
        <Header></Header>
        <div class="swiper-wrap">
            <swiper :options="swiperOption"
                    ref="mySwiper">
                <swiper-slide><img src="static/images/20170228150346_7112.jpg"
                         class="ratio-img"
                         data-ratio="0.4386"></swiper-slide>
                <swiper-slide><img src="static/images/20170228150346_7112.jpg"
                         class="ratio-img"
                         data-ratio="0.4386"></swiper-slide>
            </swiper>
            <!--以下看需要添加-->
            <div class="swiper-pagination "
                 slot="pagination"></div>
        </div>
        <div class="in_business cf">
            <div class="wrap clearfix">
                <h2 class="in_tit cf">
                    <a href="business/index.html">
                        <span class="span01 font-30">天圆 · 业务领域</span>
                        <span class="span02 font-12">G.S Group<br>Business field</span>
                    </a>
                </h2>

                <ul class="cf">
                    <li>
                        <a href="business/index.html"
                           title="房地产">
                            <div class="img tran_scale">
                                <span class="auto-img"><img src="static/images/20170221110745_1782.jpg"
                                         onerror="lods(this)"
                                         style="width: auto; height: 504px; margin-top: 0px; margin-left: 0px; visibility: visible;"></span>
                            </div>
                            <div class="tit">
                                <span class="font-35">房地产
                                    <i></i>
                                </span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="business/finance.html"
                           title="金融">
                            <div class="img tran_scale">
                                <span class="auto-img"><img src="static/images/20170228150314_4504.jpg"
                                         onerror="lods(this)"
                                         style="width: auto; height: 504px; margin-top: 0px; margin-left: 0px; visibility: visible;"></span>
                            </div>
                            <div class="tit">
                                <span class="font-35">金融
                                    <i></i>
                                </span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="business/movies.html"
                           title="影视">
                            <div class="img tran_scale">
                                <span class="auto-img"><img src="static/images/20170221111126_4488.jpg"
                                         onerror="lods(this)"
                                         style="width: auto; height: 504px; margin-top: 0px; margin-left: 0px; visibility: visible;"></span>
                            </div>
                            <div class="tit">
                                <span class="font-35">影视
                                    <i></i>
                                </span>
                            </div>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
        <div class="wrap clearfix">
            <div class="in_about cf">

                <div class="text fl">
                    <h2 class="font-30 cf">我们是谁</h2>
                    <div class="con">
                        <div class="edit_con_original edit-con-original">
                            <p>
                                <span class="span01">天圆集团</span>前身天圆经贸有限公司创办于1992年，1995年成立集团公司，至今已发展成为总资产超150亿的综合性集团公司。 </p>
                            <p> 在左安一董事长的带领下，秉承“
                                <span>商决于智、信取于诚</span>”的经营理念，锐意进取，开拓创新，逐步实现了自身经营的规范化、多元化和国际化。 </p>
                            <p> 目前，天圆集团已形成实业投资与金融资本两大板块互补互动的发展格局，经营领域涉及房地产开发、金融投资、资产管理、企业并购、生物科技、影视文化等业务。 </p>
                        </div>
                    </div>

                    <div class="more font-16">
                        <a href="about/index.html"
                           title="查看详情">查看详情</a>
                    </div>

                </div>

                <div class="in_video fr">
                    <div class="bx-wrapper"
                         style="max-width: 100%;">
                        <div class="bx-viewport"
                             style="width: 100%; overflow: hidden; position: relative; height: 330px;">
                            <ul style="width: 415%; position: relative; transition-duration: 0s; transform: translate3d(-587px, 0px, 0px);">
                                <li style="float: left; list-style: none; position: relative; width: 587px;"
                                    class="bx-clone"> <img src="static/images/20170228181253_1725.jpg"
                                         title="/upload/mobile.mp4"
                                         alt="/upload/mobile.mp4"
                                         onerror="lods(this)">
                                    <a href="javascript:void(0);"
                                       data-mp4="static/images/20170301095808_0024.mp4"
                                       data-img="static/images/20170228/20170228181253_1725.jpg"
                                       title="/upload/mobile.mp4"
                                       alt="/upload/mobile.mp4"></a>
                                </li>

                                <li style="float: left; list-style: none; position: relative; width: 587px;"> <img src="static/images/20170228175731_0347.jpg"
                                         onerror="lods(this)">
                                    <a href="javascript:void(0);"
                                       data-mp4="static/images/20170228180153_8747.mp4"
                                       data-img="static/images/20170228175731_0347.jpg"></a>
                                </li>
                                <li style="float: left; list-style: none; position: relative; width: 587px;"> <img src="static/images/20170228181253_1725.jpg"
                                         title="/upload/mobile.mp4"
                                         alt="/upload/mobile.mp4"
                                         onerror="lods(this)">
                                    <a href="javascript:void(0);"
                                       data-mp4="static/images/20170301095808_0024.mp4"
                                       data-img="static/images/20170228/20170228181253_1725.jpg"
                                       title="/upload/mobile.mp4"
                                       alt="/upload/mobile.mp4"></a>
                                </li>

                                <li style="float: left; list-style: none; position: relative; width: 587px;"
                                    class="bx-clone"> <img src="static/images/20170228175731_0347.jpg"
                                         onerror="lods(this)">
                                    <a href="javascript:void(0);"
                                       data-mp4="static/images/20170228180153_8747.mp4"
                                       data-img="static/images/20170228/20170228175731_0347.jpg"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div class="in_news cf">
                <h2 class="in_tit cf">
                    <a href="aid_nav/links.html">
                        <span class="span01 font-30">天圆 · 新闻中心</span>
                        <span class="span02 font-12">G.S Group<br>News center</span>
                    </a>
                </h2>

                <div class="bx-wrapper"
                     style="max-width: 1277px; margin: 0px auto;">
                    <div class="bx-viewport"
                         style="width: 100%; overflow: hidden; position: relative; height: 454px;">
                        <ul style="width: 515%; position: relative; transition-duration: 0s; transform: translate3d(-1312.97px, 0px, 0px);">
                            <li style="float: left; list-style: none; position: relative; width: 394.667px; margin-right: 43px;"
                                class="bx-clone">
                                <div class="img tran_scale">
                                    <a href="/content/details3_405.html"
                                       target="_blank"
                                       title=""><img src="static/images/20170628101720_8187.jpg"
                                             class="ratio-img"
                                             data-ratio="0.5668"
                                             onerror="lods(this)"
                                             title=""
                                             style="height: 223px;"></a>
                                </div>
                                <div class="con">
                                    <div class="date en">
                                        <span class="font-39">28</span>
                                        <span class="font-12">2017/06</span>
                                    </div>
                                    <h3 class="font-18">
                                        <a href="/content/details3_405.html"
                                           target="_blank"
                                           title="天圆集团董事局主席左安一率企业家考察团走进辽宁">天圆集团董事局主席左安一率企业家考察团走进辽宁</a>
                                    </h3>
                                    <p> 6月17日至19日，天圆集团董事局主席、神州企业家俱乐部主席左安一率领神州企业家俱乐部轮值主席、北京顺天通集团董事长田在玮、步长集团董事局主席赵涛、中基控股集团董事长葛坚及部分在京省级企业商会的企业家近60人的考察团走进辽宁，开展系列商务考察交流活动，企业家考察团受到辽宁省、沈阳市、鞍山市等省市领导的高度重视。</p>
                                    <div class="more">
                                        <a href="/content/details3_405.html"
                                           target="_blank"
                                           title=""></a>
                                    </div>
                                </div>
                            </li>
                            <li style="float: left; list-style: none; position: relative; width: 394.667px; margin-right: 43px;"
                                class="bx-clone">
                                <div class="img tran_scale">
                                    <a href="/content/details3_391.html"
                                       target="_blank"
                                       title=""><img src="static/images/20170407131916_4160.jpg"
                                             class="ratio-img"
                                             data-ratio="0.5668"
                                             onerror="lods(this)"
                                             title=""
                                             style="height: 223px;"></a>
                                </div>
                                <div class="con">
                                    <div class="date en">
                                        <span class="font-39">30</span>
                                        <span class="font-12">2017/03</span>
                                    </div>
                                    <h3 class="font-18">
                                        <a href="/content/details3_391.html"
                                           target="_blank"
                                           title="天圆集团获廊坊银行50亿授信">天圆集团获廊坊银行50亿授信</a>
                                    </h3>
                                    <p>2017年3月30日，天圆集团与廊坊银行在天圆祥泰大厦举行签约仪式，双方达成战略合作协议，廊坊银行承诺向天圆集团提供50亿元授信额度。</p>
                                    <div class="more">
                                        <a href="/content/details3_391.html"
                                           target="_blank"
                                           title=""></a>
                                    </div>
                                </div>
                            </li>
                            <li style="float: left; list-style: none; position: relative; width: 394.667px; margin-right: 43px;"
                                class="bx-clone">
                                <div class="img tran_scale">
                                    <a href="/content/details3_320.html"
                                       target="_blank"
                                       title=""><img src="static/images/20170111102941_1350.jpeg"
                                             class="ratio-img"
                                             data-ratio="0.5668"
                                             onerror="lods(this)"
                                             title=""
                                             style="height: 223px;"></a>
                                </div>
                                <div class="con">
                                    <div class="date en">
                                        <span class="font-39">01</span>
                                        <span class="font-12">2016/07</span>
                                    </div>
                                    <h3 class="font-18">
                                        <a href="/content/details3_320.html"
                                           target="_blank"
                                           title="天圆祥泰大厦-龙脉新地标 京城新名片">天圆祥泰大厦-龙脉新地标 京城新名片</a>
                                    </h3>
                                    <p>2016年7月1日，阳光普照，蓝天白云。北京天圆集团总部—天圆祥泰大厦举行了隆重的开业典礼。</p>
                                    <div class="more">
                                        <a href="/content/details3_320.html"
                                           target="_blank"
                                           title=""></a>
                                    </div>
                                </div>
                            </li>

                            <li style="float: left; list-style: none; position: relative; width: 394.667px; margin-right: 43px;">
                                <div class="img tran_scale">
                                    <a href="/content/details3_405.html"
                                       target="_blank"
                                       title=""><img src="static/images/20170628101720_8187.jpg"
                                             class="ratio-img"
                                             data-ratio="0.5668"
                                             onerror="lods(this)"
                                             title=""
                                             style="height: 223px;"></a>
                                </div>
                                <div class="con">
                                    <div class="date en">
                                        <span class="font-39">28</span>
                                        <span class="font-12">2017/06</span>
                                    </div>
                                    <h3 class="font-18">
                                        <a href="/content/details3_405.html"
                                           target="_blank"
                                           title="天圆集团董事局主席左安一率企业家考察团走进辽宁">天圆集团董事局主席左安一率企业家考察团走进辽宁</a>
                                    </h3>
                                    <p> 6月17日至19日，天圆集团董事局主席、神州企业家俱乐部主席左安一率领神州企业家俱乐部轮值主席、北京顺天通集团董事长田在玮、步长集团董事局主席赵涛、中基控股集团董事长葛坚及部分在京省级企业商会的企业家近60人的考察团走进辽宁，开展系列商务考察交流活动，企业家考察团受到辽宁省、沈阳市、鞍山市等省市领导的高度重视。</p>
                                    <div class="more">
                                        <a href="/content/details3_405.html"
                                           target="_blank"
                                           title=""></a>
                                    </div>
                                </div>
                            </li>
                            <li style="float: left; list-style: none; position: relative; width: 394.667px; margin-right: 43px;">
                                <div class="img tran_scale">
                                    <a href="/content/details3_391.html"
                                       target="_blank"
                                       title=""><img src="static/images/20170407131916_4160.jpg"
                                             class="ratio-img"
                                             data-ratio="0.5668"
                                             onerror="lods(this)"
                                             title=""
                                             style="height: 223px;"></a>
                                </div>
                                <div class="con">
                                    <div class="date en">
                                        <span class="font-39">30</span>
                                        <span class="font-12">2017/03</span>
                                    </div>
                                    <h3 class="font-18">
                                        <a href="/content/details3_391.html"
                                           target="_blank"
                                           title="天圆集团获廊坊银行50亿授信">天圆集团获廊坊银行50亿授信</a>
                                    </h3>
                                    <p>2017年3月30日，天圆集团与廊坊银行在天圆祥泰大厦举行签约仪式，双方达成战略合作协议，廊坊银行承诺向天圆集团提供50亿元授信额度。</p>
                                    <div class="more">
                                        <a href="/content/details3_391.html"
                                           target="_blank"
                                           title=""></a>
                                    </div>
                                </div>
                            </li>
                            <li style="float: left; list-style: none; position: relative; width: 394.667px; margin-right: 43px;">
                                <div class="img tran_scale">
                                    <a href="/content/details3_320.html"
                                       target="_blank"
                                       title=""><img src="static/images/20170111102941_1350.jpeg"
                                             class="ratio-img"
                                             data-ratio="0.5668"
                                             onerror="lods(this)"
                                             title=""
                                             style="height: 223px;"></a>
                                </div>
                                <div class="con">
                                    <div class="date en">
                                        <span class="font-39">01</span>
                                        <span class="font-12">2016/07</span>
                                    </div>
                                    <h3 class="font-18">
                                        <a href="/content/details3_320.html"
                                           target="_blank"
                                           title="天圆祥泰大厦-龙脉新地标 京城新名片">天圆祥泰大厦-龙脉新地标 京城新名片</a>
                                    </h3>
                                    <p>2016年7月1日，阳光普照，蓝天白云。北京天圆集团总部—天圆祥泰大厦举行了隆重的开业典礼。</p>
                                    <div class="more">
                                        <a href="/content/details3_320.html"
                                           target="_blank"
                                           title=""></a>
                                    </div>
                                </div>
                            </li>

                            <li style="float: left; list-style: none; position: relative; width: 394.667px; margin-right: 43px;"
                                class="bx-clone">
                                <div class="img tran_scale">
                                    <a href="/content/details3_405.html"
                                       target="_blank"
                                       title=""><img src="static/images/20170628101720_8187.jpg"
                                             class="ratio-img"
                                             data-ratio="0.5668"
                                             onerror="lods(this)"
                                             title=""
                                             style="height: 223px;"></a>
                                </div>
                                <div class="con">
                                    <div class="date en">
                                        <span class="font-39">28</span>
                                        <span class="font-12">2017/06</span>
                                    </div>
                                    <h3 class="font-18">
                                        <a href="/content/details3_405.html"
                                           target="_blank"
                                           title="天圆集团董事局主席左安一率企业家考察团走进辽宁">天圆集团董事局主席左安一率企业家考察团走进辽宁</a>
                                    </h3>
                                    <p> 6月17日至19日，天圆集团董事局主席、神州企业家俱乐部主席左安一率领神州企业家俱乐部轮值主席、北京顺天通集团董事长田在玮、步长集团董事局主席赵涛、中基控股集团董事长葛坚及部分在京省级企业商会的企业家近60人的考察团走进辽宁，开展系列商务考察交流活动，企业家考察团受到辽宁省、沈阳市、鞍山市等省市领导的高度重视。</p>
                                    <div class="more">
                                        <a href="/content/details3_405.html"
                                           target="_blank"
                                           title=""></a>
                                    </div>
                                </div>
                            </li>
                            <li style="float: left; list-style: none; position: relative; width: 394.667px; margin-right: 43px;"
                                class="bx-clone">
                                <div class="img tran_scale">
                                    <a href="/content/details3_391.html"
                                       target="_blank"
                                       title=""><img src="static/images/20170407131916_4160.jpg"
                                             class="ratio-img"
                                             data-ratio="0.5668"
                                             onerror="lods(this)"
                                             title=""
                                             style="height: 223px;"></a>
                                </div>
                                <div class="con">
                                    <div class="date en">
                                        <span class="font-39">30</span>
                                        <span class="font-12">2017/03</span>
                                    </div>
                                    <h3 class="font-18">
                                        <a href="/content/details3_391.html"
                                           target="_blank"
                                           title="天圆集团获廊坊银行50亿授信">天圆集团获廊坊银行50亿授信</a>
                                    </h3>
                                    <p>2017年3月30日，天圆集团与廊坊银行在天圆祥泰大厦举行签约仪式，双方达成战略合作协议，廊坊银行承诺向天圆集团提供50亿元授信额度。</p>
                                    <div class="more">
                                        <a href="/content/details3_391.html"
                                           target="_blank"
                                           title=""></a>
                                    </div>
                                </div>
                            </li>
                            <li style="float: left; list-style: none; position: relative; width: 394.667px; margin-right: 43px;"
                                class="bx-clone">
                                <div class="img tran_scale">
                                    <a href="/content/details3_320.html"
                                       target="_blank"
                                       title=""><img src="static/images/20170111102941_1350.jpeg"
                                             class="ratio-img"
                                             data-ratio="0.5668"
                                             onerror="lods(this)"
                                             title=""
                                             style="height: 223px;"></a>
                                </div>
                                <div class="con">
                                    <div class="date en">
                                        <span class="font-39">01</span>
                                        <span class="font-12">2016/07</span>
                                    </div>
                                    <h3 class="font-18">
                                        <a href="/content/details3_320.html"
                                           target="_blank"
                                           title="天圆祥泰大厦-龙脉新地标 京城新名片">天圆祥泰大厦-龙脉新地标 京城新名片</a>
                                    </h3>
                                    <p>2016年7月1日，阳光普照，蓝天白云。北京天圆集团总部—天圆祥泰大厦举行了隆重的开业典礼。</p>
                                    <div class="more">
                                        <a href="/content/details3_320.html"
                                           target="_blank"
                                           title=""></a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
export default {
    name: 'Index',
    data () {
        return {
            navList: [
                {
                    name: '首页'
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
                    name: '新闻中心'
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
                    name: '社会责任'
                },
                {
                    name: '加入天圆'
                },
                {
                    name: '联系我们'
                }
            ],
            swiperOption: {
                notNextTick: true,
                // 循环
                loop: true,
                // 设定初始化时slide的索引
                initialSlide: 0,
                // 自动播放
                autoplay: true,
                // autoplay: {
                //     delay: 3000,
                //     stopOnLastSlide: false,
                //     disableOnInteraction: true,
                // },
                // 滑动速度
                speed: 800,
                // 滑动方向
                direction: 'horizontal',
                // 小手掌抓取滑动
                // grabCursor : true,
                // 滑动之后回调函数
                on: {
                    slideChangeTransitionEnd: function () {
                        // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
                    }
                },
                // 分页器设置
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            }
        }
    },
    components: {
        swiper,
        swiperSlide,
        Footer,
        Header
    },
    computed: {
        swiper () {
            return this.$refs.mySwiper.swiper
        }
    },
    mounted () {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper-wrap {
    width: 100%;
}
.swiper-slide {
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
}
/**************in_business****************/
.in_business {
    background: #f4f4f4;
    padding: 67px 0px 73px;
}
.in_business ul li {
    float: left;
    width: 33.3%;
    position: relative;
}
.in_business ul li .tit {
    position: absolute;
    left: 0px;
    top: 32%;
    width: 100%;
    text-align: center;
}
.in_business ul li .tit span {
    border: 1px solid #fff;
    position: relative;
    display: inline-block;
    padding: 10px 38px 30px 14px;
    color: #fff;
    font-weight: bold;
}
.in_business ul li .tit span i {
    position: absolute;
    left: 15px;
    bottom: 17px;
    width: 48px;
    height: 4px;
    background: #fff;
}

.in_business ul li .auto-img {
    height: 504px;
}
/*******************in_about******************/
.in_about {
    background: url(../../../static/images/in_about_bg.jpg) repeat-y center
        center;
    margin-top: 72px;
    padding: 98px 74px 113px 70px;
}
.in_about .text {
    width: 42.5%;
}
.in_about .text h2 {
    font-weight: normal;
    line-height: 100%;
    color: #717171;
}
.in_about .text .con {
    color: #636363;
    margin: 35px 0px 10px;
    max-height: 210px;
    overflow: hidden;
}
.in_about .text .con span {
    font-weight: bold;
    font-size: 18px;
}
.in_about .text .con .span01 {
    color: #a79172;
}
.in_about .text .con p {
    margin-bottom: 13px;
}
.in_about .text .more {
    padding-top: 46px;
}
.in_about .text .more a {
    color: #fff;
    background: #a79172;
    width: 133px;
    height: 39px;
    text-align: center;
    line-height: 39px;
    display: inline-block;
}
.in_about .text .more a:hover {
    background: #907753;
}

.in_about .in_video {
    width: 52.59%;
}
.in_about .in_video img {
    width: 100%;
}
.in_about .in_video ul li {
    position: relative;
    float: left;
}
.in_about .in_video ul li a {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    display: inline-block;
    background: url(../../../static/images/play.png) no-repeat center center;
}

/********video_tcbox**********/
.video_tcbox {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0;
    display: block;
}
.video_tcbox .video_tccon {
    position: absolute;
    width: 60%;
    left: 20%;
    z-index: 2;
}
.video_tcbox .video_tccon .con.play .bon-play {
    display: none;
}
.video_tcbox .video_t {
    background: #000;
}
.video_tcbox .mask {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(13, 45, 43, 0.8);
}
.lt9 .video_tcbox .mask {
    filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr="#880d2d2b", EndColorStr="#880d2d2b");
}
.video_tcbox .close {
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 3;
    cursor: pointer;
}
.video_tcbox .bon-play {
    background: url(../../../static/images/play.png) no-repeat;
    width: 89px;
    height: 62px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -31px 0 0 -44.5px;
    pointer-events: none;
    display: none;
}
.ie .video_tcbox .bon-play {
    display: none;
}

.video_tcbox.open {
    z-index: 99999;
    opacity: 1;
}
.lt9 .video_tcbox {
    display: none;
}
.lt9 .video_tcbox.open {
    z-index: 99999;
    display: block;
}

.video_con.ind_5 {
    background: #000;
    cursor: pointer;
    position: relative;
}
.video_con.ind_5 .bon-play {
    background: url(../../../static/images/play.png) no-repeat;
    width: 89px;
    height: 62px;
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -44.5px;
    margin-top: -31px;
    pointer-events: none;
}
.video_con.ind_5.play .bon-play {
    display: none;
}
.ie .video_con.ind_5 .bon-play {
    display: none;
}

/*************in_news****************/
.in_news {
    padding-top: 54px;
}
.in_news h2 {
    margin-bottom: 41px;
}
.in_news ul li {
    float: left;
    width: 31.01%;
    margin-right: 3.36%;
}
.in_news ul li .img img {
    width: 100%;
}
.in_news ul li .con {
    border: 1px solid #dcdcdc;
    border-top: none;
    padding: 0px 35px 29px 26px;
}
.in_news ul li .date {
    width: 68px;
    height: 68px;
    background: #a79172;
    margin-top: -49px;
    position: relative;
    text-align: center;
    color: #fff;
}
.in_news ul li .date span {
    display: block;
    line-height: 120%;
}
.in_news ul li .date span:first-child + span {
    line-height: 100%;
}
.in_news ul li h3 {
    line-height: 133%;
    height: 2.66em;
    overflow: hidden;
    margin-top: 22px;
}
.in_news ul li h3 a {
    color: #000;
}
.in_news ul li h3 a:hover {
    color: #eb6100;
}
.in_news ul li p {
    color: #636363;
    margin-top: 19px;
    height: 3em;
    overflow: hidden;
}
.in_news ul li .more {
    padding-top: 18px;
}
.in_news ul li .more a {
    background: url(../../../static/images/in_news_more01.png) no-repeat;
    width: 28px;
    height: 28px;
    display: inline-block;
}

.ie8 .in_news ul li {
    padding-bottom: 1px;
}
.bx-wrapper {
    -moz-box-shadow: 0 0 5px #ccc;
    -webkit-box-shadow: 0 0 5px #ccc;
    box-shadow: 0 0 5px #ccc;
    border: 5px solid #fff;
    background: #fff;
}
</style>
