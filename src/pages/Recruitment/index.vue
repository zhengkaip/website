<template>
    <div>
        <Header></Header>
        <section class="main clearfix">

            <div class="wrap clearfix">

                <div class="current cf">
                    <h1 class="fl font-36">
                        <i></i>社会招聘</h1>
                    <div class="cur_rt font-14 fr">
                        <a title="首页"
                           href="/index.html">首页</a>&gt;
                        <a href="/join/index.html"
                           title="加入天圆">加入天圆</a>&gt;
                        <span>社会招聘</span>
                    </div>
                </div>

                <div class="job_list cf">
                    <table class="ph_table">
                        <thead class="font-16">
                            <tr>
                                <td class="t1">职位</td>
                                <td class="t2">招聘人数</td>
                                <td class="t3">学历要求</td>
                                <td class="t4">工作地点</td>
                                <td class="t5">发布时间</td>
                                <td class="t6">工作性质</td>
                                <td class="t7">查看详情</td>
                            </tr>
                        </thead>
                        <tbody class="font-14 job">

                        </tbody>
                    </table>

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
    name: 'recruitment',
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
/*******************join***************************/
.job_list .ph_table {
    width: 100%;
    text-align: center;
    margin-bottom: 33px;
}
.job_list .ph_table td {
    text-align: center;
    padding: 0px 10px;
    border-bottom: 1px solid #d0d0d0;
    color: #7b7b7b;
}
.job_list .ph_table thead td {
    border-top: 3px solid #d0d0d0;
    padding: 8px 10px;
    color: #000;
    letter-spacing: 3px;
}
.job_list .ph_table tbody td {
    height: 38px;
    overflow: hidden;
    letter-spacing: 3px;
    line-height: 38px;
}
.job_list .ph_table tbody td:first-child + td + td + td {
    color: #a79172;
}
.job_list .ph_table tbody td:first-child + td + td + td + td {
    letter-spacing: 0px;
}
.job_list .ph_table tbody td:first-child + td {
    letter-spacing: 0px;
}

.job_list .ph_table .t1 {
    width: 16.25%;
}
.job_list .ph_table .t2 {
    width: 12.73%;
}
.job_list .ph_table .t3 {
    width: 15.39%;
}
.job_list .ph_table .t4 {
    width: 12.97%;
}
.job_list .ph_table .t5 {
    width: 14.84%;
}
.job_list .ph_table .t6 {
    width: 13.28%;
}

.job_list .ph_table td:first-child a {
    color: #7b7b7b;
}
.job_list .ph_table td:first-child a:hover {
    color: #eb6100;
}
.job_list .ph_table td:first-child + td + td + td + td + td + td a {
    color: #fff;
    padding: 0px 20px 0px 20px;
    line-height: 20px;
    display: inline-block;
    background: #a79172;
    font-size: 12px;
    letter-spacing: 0px;
}
.job_list .ph_table td:first-child + td + td + td + td + td + td a:hover {
    background: #eb6100;
}
</style>
