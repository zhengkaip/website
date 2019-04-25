$(function () {


    var winW = $(window).width();
    var winH = $(window).height();

    var hisW = $(".ab_history").width();

    var navLiH = $(".ab_his_nav .ab_his_nav_box ul li").height();
    $(".ab_his_nav .ab_his_nav_box").css({ height: navLiH * 8 + "px" });

    $(document).on("click", ".ab_his_nav_box ul li", function (e) {
        var nIndex = $(this).index();
        $(this).removeClass().addClass("hover01").siblings().removeClass()
        $("body,html").stop().animate({ scrollTop: $(".history_box:eq(" + nIndex + ")").offset().top - 60 }, 600);
        devGetPosition(nIndex);
        //$("html,body").animate({scrollTop:"0px"}, 500);
    })



    $(".ab_his_nav").removeClass("his_fixed");
    $(window).scroll(function () {

        //pc scroll  start
        if ($(window).scrollTop() > $(".ab_history").offset().top) {
            var getLeftPosition = $(window).scrollTop() - $(".ab_his_body").offset().top + 20;
            var getComparePosition = $(".ab_his_body").height() - $(".ab_his_nav").height();

            if (getLeftPosition >= getComparePosition) {
                $(".ab_his_nav").css({ "top": getComparePosition - 80, "left": "auto", "position": "absolute", "right": 12 });
            } else {
                $(".ab_his_nav").css({ "opacity": 1, "left": $(".ab_history").offset().left + hisW - 160, "top": 30, "position": "fixed", "right": "auto" });
            }
        } else {
            $(".ab_his_nav").css({ "opacity": 1, "top": 0, "left": "auto", "position": "absolute", "right": 12 });
        }
        //pc scroll end




        try {
            $(".ab_his_nav_box ul li").each(function (i) {

                if ($(window).scrollTop() >= $(".history_box:eq(" + i + ")").offset().top - 20 - 108) {            //pc
                    $(".ab_his_nav_wrap li:eq(" + i + ")").addClass("hover01").siblings().removeClass("hover01");
                    devGetPosition(i);
                } else {

                }
            })
        } catch (e) { }



    })

    function devGetPosition (nIndex) {
        var getLeftLiHeight = $(".ab_his_nav_wrap li:eq(0)").height();
        var getSize = $(".ab_his_nav_wrap li").size();
        if (getSize <= 8) return;
        if (nIndex > 2 && nIndex < getSize - 4) {
            $(".ab_his_nav ul").stop().animate({ "top": nIndex * getLeftLiHeight * -1 + getLeftLiHeight * 3 });
        } else if (nIndex >= getSize - 4) {
            $(".ab_his_nav ul").stop().animate({ "top": getLeftLiHeight * getSize * -1 + getLeftLiHeight * 8 });
        } else if (nIndex <= 2) {
            $(".ab_his_nav ul").stop().animate({ "top": 0 });
        }
    }



    $(window).resize(function () {
        var winW = $(window).width();
        var winH = $(window).height();

        var hisW = $(".ab_history").width();
        var navLiH = $(".ab_his_nav .ab_his_nav_box ul li").height();
        $(".ab_his_nav .ab_his_nav_box").css({ height: navLiH * 8 + "px" });

        //pc scroll  start
        if ($(window).scrollTop() > $(".ab_history").offset().top) {
            var getLeftPosition = $(window).scrollTop() - $(".ab_his_body").offset().top + 20;
            var getComparePosition = $(".ab_his_body").height() - $(".ab_his_nav").height();

            if (getLeftPosition >= getComparePosition) {
                $(".ab_his_nav").css({ "top": getComparePosition - 40, "left": "auto", "position": "absolute", "right": 12 });
            } else {
                $(".ab_his_nav").css({ "opacity": 1, "left": $(".ab_history").offset().left + hisW - 160, "top": 30, "position": "fixed", "right": "auto" });
            }
        } else {
            $(".ab_his_nav").css({ "opacity": 1, "top": 0, "left": "auto", "position": "absolute", "right": 12 });
        }
        //pc scroll end


    })


})
