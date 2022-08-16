var numberEl = $("#we-lead .wrapper-img .container-el .el").length,
    countEl = 1,
    delayTeamCaroussel = 8e3,
    intervalTeamCaroussel = setInterval(function () {
        sectionTeamCarousselInit();
    }, delayTeamCaroussel);
function sectionTeamCarousselPrg() {
    $("#we-lead .wrapper-img .container-action .btn .progress").removeClass("active"),
        setTimeout(function () {
            $("#we-lead .wrapper-img .container-action .btn .progress").addClass("active");
        }, 50);
    var e = "#we-lead .wrapper-img .container-el .el";
    countEl < numberEl
        ? ($(e + ".show")
              .removeClass("show")
              .addClass("hide"),
          setTimeout(function () {
              $(e + ".hide")
                  .hide()
                  .removeClass("hide");
          }, 700),
          countEl++,
          $("#we-lead .wrapper-img .container-el .el:nth-child(" + countEl + ")").show(),
          setTimeout(function () {
              $(e + ":visible").addClass("show");
          }, 100),
          clearInterval(intervalTeamCaroussel),
          (intervalTeamCaroussel = setInterval(function () {
              sectionTeamCarousselPrg();
          }, delayTeamCaroussel)))
        : ((countEl = 0), sectionTeamCarousselPrg());
}
function sectionTeamCarousselInit() {
    sectionTeamCarousselPrg();
}
$("#we-lead .wrapper-img .container-action .btn").click(function () {
    $("#we-lead .wrapper-img .container-action .btn .progress").removeClass("active"),
        clearInterval(intervalTeamCaroussel),
        (intervalTeamCaroussel = setInterval(function () {
            sectionTeamCarousselPrg();
        }, delayTeamCaroussel)),
        sectionTeamCarousselPrg();
}),
    sectionTeamCarousselInit(),
    $("#we-lead").addClass("anim"),
    $(".tab-link").hover(function () {
        $(this).find("a").hasClass("current") ? ($(this).find("a").removeClass("current"), $(".header-container").removeClass("active")) : ($(this).find("a").addClass("current"), $(".header-container").addClass("active"));
    }),
    $(".tab-link").mouseenter(function () {
        $(".overlay").addClass("show");
    }),
    $(".tab-link").mouseleave(function () {
        $(".overlay").removeClass("show");
    }),
    $(window).scroll(function () {
        $(window).scrollTop() > 1 ? $(".header-container").addClass("shrink") : $(".header-container").removeClass("shrink");
    }),
    AOS.init({ once: !0 }),
    $(document).ready(function () {
        $("#achievement-slider").owlCarousel({ loop: !0, items: 1, nav: !1, dots: !0, autoplay: !0, autoplayTimeout: 5e8, autoplayHoverPause: !1 });
    }),
    $(".checkbox").on("click", function () {
        $(this).toggleClass("active");
    }),
    $(document).ready(function () {
        $(window).on("scroll", function () {
            $(window).scrollTop() + $(window).height() > $(".stats").offset().top ? $(".stats").addClass("anim-start") : $(".stats").removeClass("anim-start");
        });
    }),
    $(document).ready(function () {
        $("#port-slider").owlCarousel({ loop: !0, items: 1, nav: !1, dots: !0, autoplay: !0, autoplayTimeout: 5e3, autoplayHoverPause: !1 });
    }),
    $(window).width() >= 767 &&
        $(function () {
            var e = $(window).height(),
                t = ($(window).width(), new ScrollMagic.Controller({ container: window }));
            $(".ripen-portfolio-sec").css("height", 8 * e),
                new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: 2 * -e, duration: e })
                    .on("enter", function () {
                        $(".clock-dial-center-wrap").removeClass("active"),
                            TweenLite.to("#Opaque_Ring", 1, { ease: Power4.easeInOut, strokeDasharray: "0,1000" }),
                            TweenLite.to(".ripen-portfolio-sec-left figure.one", 1, { ease: Power4.easeInOut, css: { opacity: "0" } }),
                            TweenLite.to(".nexgtv-center-text .text-big p", 1, { ease: Power4.easeInOut, top: "95px" }),
                            TweenLite.to(".nexgtv-center-text .text-sm p", 1.3, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".nexgtv-center-text .text-big .plus", 1.3, { ease: Power4.easeInOut, css: { opacity: "0", visibility: "hidden" } }),
                            TweenLite.to(".ripen-port-left-content .pp-head p .l1", 1, { ease: Power4.easeInOut, top: "45px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l1 p .l1", 1.2, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l1 p .l2", 1.4, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l1 p .l3", 1.6, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-casestudy-navi .pp-navi.l2", 1.8, { ease: Power4.easeInOut, css: { scale: 0, zIndex: "-1" } }),
                            TweenLite.to(".nexgtv-img figure.l1", 1, { ease: Power4.easeInOut, bottom: "1%" }),
                            TweenLite.to(".nexgtv-img figure.l2", 1.2, { ease: Power4.easeInOut, left: "9.5%" }),
                            TweenLite.to(".nexgtv-img figure.l3", 1.4, { ease: Power4.easeInOut, bottom: "19%", right: "26%" }),
                            TweenLite.to(".nexgtv-img figure.l4", 1.6, { ease: Power4.easeInOut, bottom: "-11%", right: "38%" }),
                            TweenLite.to(".nexgtv-img figure.l5", 1.8, { ease: Power4.easeInOut, bottom: "10%", right: "11%" }),
                            TweenLite.to(".nexgtv-img figure.l6", 1.8, { ease: Power4.easeInOut, bottom: "60%", right: "30%" }),
                            TweenLite.to(".ripen-portfolio-sec-left .award-grp figure.l1", 1, { ease: Power4.easeInOut, css: { opacity: "0" } }),
                            TweenLite.to(".dotsstro, .dotsstro1, .dotsstro2, .dotsstro3, .dotsstro4, .dotsstro5, .dotsstro6", 0.1, { ease: Power4.easeInOut, css: { opacity: 0 } }),
                            TweenLite.to(".dotsfill, .dotsfill1, .dotsfill2, .dotsfill3, .dotsfill4, .dotsfill5, .dotsfill6", 0.1, { ease: Power4.easeInOut, css: { opacity: 0.4, fill: "#fff" } });
                    })
                    .addTo(t),
                new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: 0, duration: 7 * e }).setPin(".ripen-ins-portfolio-sec").addTo(t),
                new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: (2 * -e) / 2, duration: 2 * e })
                    .on("enter", function () {
                        $(".clock-dial-center-wrap").addClass("active"),
                            TweenLite.to(".ripen-portfolio-sec-left figure.one", 1, { ease: Power4.easeInOut, css: { opacity: "1" } }),
                            setTimeout(function () {
                                TweenLite.to("#Opaque_Ring", 1, { ease: Power4.easeInOut, strokeDasharray: "10,1000" }),
                                    TweenLite.to(".dotsstro", 1.5, { ease: Power4.easeInOut, css: { opacity: 1 } }),
                                    TweenLite.to(".dotsfill", 1.5, { ease: Power4.easeInOut, css: { fill: "#0092ff", opacity: 1 } });
                            }, 200),
                            TweenLite.to(".nexgtv-center-text .text-big p", 1, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".nexgtv-center-text .text-sm p", 1.3, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".nexgtv-center-text .text-big .plus", 1.3, { ease: Power4.easeInOut, css: { opacity: "1", visibility: "visible" } }),
                            TweenLite.to(".ripen-port-left-content .pp-head p .l1", 1, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l1 p .l1", 1.2, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l1 p .l2", 1.4, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l1 p .l3", 1.6, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-casestudy-navi .pp-navi.l2", 1.8, { ease: Power4.easeInOut, css: { scale: 1, zIndex: "1" } }),
                            TweenLite.to(".nexgtv-img", 1, { ease: Power4.easeInOut, opacity: "1", visibility: "visible" }),
                            TweenLite.to(".nexgtv-img figure.l1", 1, { ease: Power4.easeInOut, bottom: "1%" }),
                            TweenLite.to(".nexgtv-img figure.l2", 1.2, { ease: Power4.easeInOut, bottom: "63%" }),
                            TweenLite.to(".nexgtv-img figure.l3", 1.4, { ease: Power4.easeInOut, bottom: "19%" }),
                            TweenLite.to(".nexgtv-img figure.l4", 1.6, { ease: Power4.easeInOut, bottom: "-11%" }),
                            TweenLite.to(".nexgtv-img figure.l5", 1.8, { ease: Power4.easeInOut, bottom: "8%" }),
                            TweenLite.to(".nexgtv-img figure.l6", 1.8, { ease: Power4.easeInOut, bottom: "60%" }),
                            TweenLite.to(".ripen-ins-portfolio-sec", 1, { ease: Power4.easeInOut, css: { backgroundColor: "#4FBEEF" } }),
                            TweenLite.to(".ripen-portfolio-sec-left, .clockbg-dial", 1, { ease: Power4.easeInOut, css: { backgroundColor: "#08132D" } }),
                            TweenLite.to(".ripen-portfolio-sec-left figure.two", 1, { ease: Power4.easeInOut, css: { opacity: "0" } }),
                            TweenLite.to(".ripen-port-clocktext.blockchain .up-text .l1", 1, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-port-clocktext.blockchain .middel-text .l2", 1, { ease: Power4.easeInOut, top: "65px" }),
                            TweenLite.to(".ripen-port-clocktext.blockchain .down-text .l3", 1, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-port-left-content .pp-head p .l2", 1, { ease: Power4.easeInOut, top: "45px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l2 p .l1", 1.2, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l2 p .l2", 1.4, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l2 p .l3", 1.6, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-casestudy-navi .pp-navi.l1", 1.8, { ease: Power4.easeInOut, css: { scale: 0, zIndex: "-1" } }),
                            TweenLite.to(".vemeport-img", 1, { ease: Power4.easeInOut, css: { opacity: "0", visibility: "hideen" } }),
                            TweenLite.to(".vemeport-img figure.l1 img", 1, { ease: Power4.easeInOut, top: "100vh" }),
                            TweenLite.to(".vemeport-img figure.l2 img", 1.3, { ease: Power4.easeInOut, top: "-100vh" }),
                            TweenLite.to(".vemeport-img figure.l3 img", 1, { ease: Power4.easeInOut, top: "100vh" }),
                            TweenLite.to(".vemeport-img figure.l4 img", 1.3, { ease: Power4.easeInOut, top: "-100vh" }),
                            TweenLite.to(".dotsstro1, .dotsstro2, .dotsstro3, .dotsstro4, .dotsstro5, .dotsstro6", 0.1, { ease: Power4.easeInOut, css: { opacity: 0 } }),
                            TweenLite.to(".ripen-portfolio-sec-left .award-grp figure.l1", 1, { ease: Power4.easeInOut, css: { opacity: "1" } }),
                            TweenLite.to(".dotsfill1, .dotsfill2, .dotsfill3, .dotsfill4, .dotsfill5, .dotsfill6", 0.1, { ease: Power4.easeInOut, css: { opacity: 0.4, fill: "#fff" } });
                    })
                    .addTo(t),
                new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: e, duration: e })
                    .on("enter", function () {
                        TweenLite.to("#Opaque_Ring", 1, { ease: Power4.easeInOut, strokeDasharray: "152,1000" }),
                            TweenLite.to(".ripen-portfolio-sec-left figure.one", 1, { ease: Power4.easeInOut, css: { opacity: "0" } }),
                            TweenLite.to(".nexgtv-center-text .text-big p", 1, { ease: Power4.easeInOut, top: "-115px" }),
                            TweenLite.to(".nexgtv-center-text .text-sm p", 1, { ease: Power4.easeInOut, top: "-38px" }),
                            TweenLite.to(".nexgtv-center-text .text-big .plus", 1, { ease: Power4.easeInOut, css: { opacity: "0" } }),
                            TweenLite.to(".ripen-portfolio-sec-left .award-grp figure.l1", 1, { ease: Power4.easeInOut, css: { opacity: "0" } }),
                            TweenLite.to(".ripen-port-left-content .pp-head p .l1", 1, { ease: Power4.easeInOut, top: "-45px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l1 p .l1", 1.1, { ease: Power4.easeInOut, top: "-30px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l1 p .l2", 1.3, { ease: Power4.easeInOut, top: "-30px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l1 p .l3", 1.4, { ease: Power4.easeInOut, top: "-30px" }),
                            TweenLite.to(".ripen-casestudy-navi .pp-navi.l2", 1.5, { ease: Power4.easeInOut, css: { scale: 0, zIndex: "-1" } }),
                            TweenLite.to(".nexgtv-img figure.l1", 1, { ease: Power4.easeInOut, bottom: "-1000px" }),
                            TweenLite.to(".nexgtv-img figure.l2", 1, { ease: Power4.easeInOut, bottom: "-1000px" }),
                            TweenLite.to(".nexgtv-img figure.l3", 1, { ease: Power4.easeInOut, bottom: "-1000px" }),
                            TweenLite.to(".nexgtv-img figure.l4", 1, { ease: Power4.easeInOut, bottom: "-1000px" }),
                            TweenLite.to(".nexgtv-img figure.l5", 1, { ease: Power4.easeInOut, bottom: "-1000px" }),
                            TweenLite.to(".nexgtv-img figure.l6", 1, { ease: Power4.easeInOut, bottom: "-1000px" }),
                            TweenLite.to(".ripen-ins-portfolio-sec", 1, { ease: Power4.easeInOut, css: { backgroundColor: "#B6D68F" } }),
                            TweenLite.to(".ripen-portfolio-sec-left, .clockbg-dial", 1, { ease: Power4.easeInOut, css: { backgroundColor: "#0D2929" } }),
                            TweenLite.to(".ripen-portfolio-sec-left figure.two", 1, { ease: Power4.easeInOut, css: { opacity: "1" } }),
                            setTimeout(function () {
                                TweenLite.to(".dotsstro1", 1, { ease: Power4.easeInOut, css: { opacity: 1 } }), TweenLite.to(".dotsfill1", 1, { ease: Power4.easeInOut, css: { fill: "#0092ff", opacity: "1" } });
                            }, 800),
                            TweenLite.to(".ripen-port-clocktext.blockchain .up-text .l1", 1.3, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-clocktext.blockchain .middel-text .l2", 1.5, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-clocktext.blockchain .down-text .l3", 1.8, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-left-content .pp-head p .l2", 1, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l2 p .l1", 1.2, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l2 p .l2", 1.4, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l2 p .l3", 1.6, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-casestudy-navi .pp-navi.l1", 1.8, { ease: Power4.easeInOut, css: { scale: 1, zIndex: "1" } }),
                            TweenLite.to(".vemeport-img", 1, { ease: Power4.easeInOut, css: { opacity: "1", visibility: "visible" } }),
                            TweenLite.to(" .vemeport-img figure.l1 img", 1.5, { ease: Power4.easeInOut, top: "0vh" }),
                            TweenLite.to(" .vemeport-img figure.l2 img", 1.8, { ease: Power4.easeInOut, top: "0vh" }),
                            TweenLite.to(" .vemeport-img figure.l3 img", 1.8, { ease: Power4.easeInOut, top: "0vh" }),
                            TweenLite.to(" .vemeport-img figure.l4 img", 1.5, { ease: Power4.easeInOut, top: "0vh" }),
                            TweenLite.to(".ripen-portfolio-sec-left figure.three", 1, { ease: Power4.easeInOut, css: { opacity: "0" } }),
                            TweenLite.to(".ripen-port-clocktext.nasa .up-text .l1", 1, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-port-clocktext.nasa .middel-text .l2", 1.1, { ease: Power4.easeInOut, top: "89px" }),
                            TweenLite.to(".ripen-port-clocktext.nasa .down-text .l3", 1.5, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-port-left-content .pp-head p .l3", 1, { ease: Power4.easeInOut, top: "45px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l3 p .l1", 1.2, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l3 p .l2", 1.4, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l3 p .l3", 1.6, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-casestudy-navi .pp-navi.l3", 1.5, { ease: Power4.easeInOut, css: { scale: 0, zIndex: "-1" } }),
                            TweenLite.to(".nasa-img figure.l1", 1.1, { ease: Power4.easeInOut, bottom: "-110%" }),
                            TweenLite.to(" .nasa-img figure.l2", 1.3, { ease: Power4.easeInOut, top: "-100%" }),
                            TweenLite.to(".dotsstro2, .dotsstro3, .dotsstro4, .dotsstro5, .dotsstro6", 0.1, { ease: Power4.easeInOut, css: { opacity: 0 } }),
                            TweenLite.to(".dotsfill2, .dotsfill3, .dotsfill4, .dotsfill5, .dotsfill6", 0.1, { ease: Power4.easeInOut, css: { opacity: 0.4, fill: "#fff" } });
                    })
                    .addTo(t),
                new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: 2 * e, duration: e })
                    .on("enter", function () {
                        TweenLite.to("#Opaque_Ring", 1, { ease: Power4.easeInOut, strokeDasharray: "282,1000" }),
                            TweenLite.to(".ripen-portfolio-sec-left figure.two", 1, { ease: Power4.easeInOut, css: { opacity: "0" } }),
                            TweenLite.to(".ripen-port-clocktext.blockchain .up-text .l1", 1, { ease: Power4.easeInOut, top: "-30px" }),
                            TweenLite.to(".ripen-port-clocktext.blockchain .middel-text .l2", 1, { ease: Power4.easeInOut, top: "-65px" }),
                            TweenLite.to(".ripen-port-clocktext.blockchain .down-text .l3", 1, { ease: Power4.easeInOut, top: "-30px" }),
                            TweenLite.to(".ripen-port-left-content .pp-head p .l2", 1, { ease: Power4.easeInOut, top: "-45px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l2 p .l1", 1.2, { ease: Power4.easeInOut, top: "-30px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l2 p .l2", 1.4, { ease: Power4.easeInOut, top: "-30px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l2 p .l3", 1.6, { ease: Power4.easeInOut, top: "-30px" }),
                            TweenLite.to(".ripen-casestudy-navi .pp-navi.l1", 1, { ease: Power4.easeInOut, css: { scale: 0, zIndex: "-1" } }),
                            TweenLite.to(".vemeport-img figure.l1 img", 1, { ease: Power4.easeInOut, top: "100vh" }),
                            TweenLite.to(".vemeport-img figure.l2 img", 1.3, { ease: Power4.easeInOut, top: "-100vh" }),
                            TweenLite.to(".vemeport-img figure.l3 img", 1.5, { ease: Power4.easeInOut, top: "-100vh" }),
                            TweenLite.to(".vemeport-img figure.l4 img", 1.7, { ease: Power4.easeInOut, top: "100vh" }),
                            TweenLite.to(".ripen-ins-portfolio-sec", 1, { ease: Power4.easeInOut, css: { backgroundColor: "#5091CD" } }),
                            TweenLite.to(".ripen-portfolio-sec-left, .clockbg-dial", 1, { ease: Power4.easeInOut, css: { backgroundColor: "#113251" } }),
                            TweenLite.to(".ripen-portfolio-sec-left figure.three", 1, { ease: Power4.easeInOut, css: { opacity: "1" } }),
                            setTimeout(function () {
                                TweenLite.to(".dotsstro2", 1, { ease: Power4.easeInOut, css: { opacity: 1 } }), TweenLite.to(".dotsfill2", 1, { ease: Power4.easeInOut, css: { fill: "#0092ff", opacity: "1" } });
                            }, 800),
                            TweenLite.to(".ripen-port-clocktext.nasa .up-text .l1", 1.3, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-clocktext.nasa .middel-text .l2", 1.5, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-clocktext.nasa .down-text .l3", 1.5, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-left-content .pp-head p .l3", 1, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l3 p .l1", 1.2, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l3 p .l2", 1.4, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l3 p .l3", 1.6, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-casestudy-navi .pp-navi.l3", 1, { ease: Power4.easeInOut, css: { scale: 1, zIndex: "1" } }),
                            TweenLite.to(".ripen-ins-portfolio-right.nasa-img", 1, { ease: Power4.easeInOut, css: { opacity: "1", visibility: "visible" } }),
                            TweenLite.to(".nasa-img figure.l1", 1.5, { ease: Power4.easeInOut, bottom: "-12%" }),
                            TweenLite.to(".nasa-img figure.l2", 1.8, { ease: Power4.easeInOut, top: "23%" }),
                            TweenLite.to(".ripen-portfolio-sec-left figure.four", 1, { ease: Power4.easeInOut, css: { opacity: "0" } }),
                            TweenLite.to(".ripen-port-left-content .pp-head p .l4", 1, { ease: Power4.easeInOut, top: "45px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l4 p .l1", 1, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l4 p .l2", 1.2, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l4 p .l3", 1.4, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-casestudy-navi .pp-navi.l4", 1, { ease: Power4.easeInOut, css: { scale: 0, zIndex: "-1" } }),
                            TweenLite.to(".ripen-port-clocktext.dominos .up-text .l1", 1, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-port-clocktext.dominos .middel-text .l2", 1.2, { ease: Power4.easeInOut, top: "75px" }),
                            TweenLite.to(".ripen-port-clocktext.dominos .down-text .l3", 1.4, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-portfolio-sec-left figure .donimg", 1, { ease: Power4.easeInOut, top: "-450px" }),
                            TweenLite.to(".ripen-ins-portfolio-right.dominos-img figure.l1", 1.1, { ease: Power4.easeInOut, top: "-100%" }),
                            TweenLite.to(".ripen-ins-portfolio-right.dominos-img figure.l2", 1.3, { ease: Power4.easeInOut, top: "-107%" }),
                            TweenLite.to(".ripen-ins-portfolio-right.dominos-img figure.l6", 1.3, { ease: Power4.easeInOut, right: "-50%" }),
                            TweenLite.to(".dotsstro3, .dotsstro4, .dotsstro5, .dotsstro6", 0.1, { ease: Power4.easeInOut, css: { opacity: 0 } }),
                            TweenLite.to(".dotsfill3, .dotsfill4, .dotsfill5, .dotsfill6", 0.1, { ease: Power4.easeInOut, css: { opacity: 0.4, fill: "#fff" } });
                    })
                    .addTo(t),
                new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: 3 * e, duration: e })
                    .on("enter", function () {
                        TweenLite.to("#Opaque_Ring", 1, { ease: Power4.easeInOut, strokeDasharray: "405,1000" }),
                            TweenLite.to(".ripen-portfolio-sec-left figure.three", 1, { ease: Power4.easeInOut, css: { opacity: "0" } }),
                            TweenLite.to(".ripen-port-clocktext.nasa .up-text .l1", 1, { ease: Power4.easeInOut, top: "-30px" }),
                            TweenLite.to(".ripen-port-clocktext.nasa .middel-text .l2", 1.1, { ease: Power4.easeInOut, top: "-89px" }),
                            TweenLite.to(".ripen-port-clocktext.nasa .down-text .l3", 1.5, { ease: Power4.easeInOut, top: "-30px" }),
                            TweenLite.to(".ripen-port-left-content .pp-head p .l3", 1, { ease: Power4.easeInOut, top: "-45px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l3 p .l1", 1.2, { ease: Power4.easeInOut, top: "-30px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l3 p .l2", 1.4, { ease: Power4.easeInOut, top: "-30px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l3 p .l3", 1.6, { ease: Power4.easeInOut, top: "-30px" }),
                            TweenLite.to(".ripen-casestudy-navi .pp-navi.l3", 1, { ease: Power4.easeInOut, css: { scale: 0, zIndex: "-1" } }),
                            TweenLite.to(" .nasa-img figure.l1", 1.1, { ease: Power4.easeInOut, bottom: "-105%" }),
                            TweenLite.to(" .nasa-img figure.l2", 1.3, { ease: Power4.easeInOut, top: "-100%" }),
                            TweenLite.to(".ripen-ins-portfolio-sec", 1, { ease: Power4.easeInOut, css: { backgroundColor: "#0d141c" } }),
                            TweenLite.to(".ripen-portfolio-sec-left, .clockbg-dial", 1, { ease: Power4.easeInOut, css: { backgroundColor: "#162b44" } }),
                            TweenLite.to(".ripen-portfolio-sec-left figure.four", 1, { ease: Power4.easeInOut, css: { opacity: "1" } }),
                            setTimeout(function () {
                                TweenLite.to(".dotsstro3", 1, { ease: Power4.easeInOut, css: { opacity: 1 } }), TweenLite.to(".dotsfill3", 1, { ease: Power4.easeInOut, css: { fill: "#0092ff", opacity: "1" } });
                            }, 800),
                            TweenLite.to(".ripen-port-left-content .pp-head p .l4", 1, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l4 p .l1", 1.2, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l4 p .l2", 1.4, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l4 p .l3", 1.6, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-casestudy-navi .pp-navi.l4", 1, { ease: Power4.easeInOut, css: { scale: 1, zIndex: "1" } }),
                            TweenLite.to(".ripen-port-clocktext.dominos .up-text .l1", 1, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-clocktext.dominos .middel-text .l2", 1.2, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-clocktext.dominos .down-text .l3", 1.4, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-portfolio-sec-left figure .donimg", 1.4, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-ins-portfolio-right.dominos-img", 1, { ease: Power4.easeInOut, css: { opacity: "1", visibility: "visible" } }),
                            TweenLite.to(".ripen-ins-portfolio-right.dominos-img figure.l1", 1.1, { ease: Power4.easeInOut, top: "4%" }),
                            TweenLite.to(".ripen-ins-portfolio-right.dominos-img figure.l2", 1.3, { ease: Power4.easeInOut, top: "9%" }),
                            TweenLite.to(".ripen-ins-portfolio-right.dominos-img figure.l6", 1.3, { ease: Power4.easeInOut, right: "0" }),
                            TweenLite.to(".ripen-portfolio-sec-left figure.five", 1, { ease: Power4.easeInOut, css: { opacity: "0" } }),
                            TweenLite.to(".ripen-port-left-content .pp-head p .l5", 1, { ease: Power4.easeInOut, top: "45px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l5 p .l1", 1, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l5 p .l2", 1.2, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l5 p .l3", 1.4, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-casestudy-navi .pp-navi.l5", 1, { ease: Power4.easeInOut, css: { scale: 0, zIndex: "-1" } }),
                            TweenLite.to(".ripen-port-clocktext.binkx .up-text .l1", 1, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-port-clocktext.binkx .middel-text .l2", 1.2, { ease: Power4.easeInOut, top: "70px" }),
                            TweenLite.to(".ripen-port-clocktext.binkx .down-text .l3", 1.4, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-ins-portfolio-right.binkx-img figure.l1", 1.1, { ease: Power4.easeInOut, top: "-100%" }),
                            TweenLite.to(".ripen-ins-portfolio-right.binkx-img figure.l2", 1.3, { ease: Power4.easeInOut, bottom: "-100%" }),
                            TweenLite.to(".ripen-ins-portfolio-right.binkx-img figure.l3", 1.5, { ease: Power4.easeInOut, left: "120%" }),
                            TweenLite.to(".ripen-ins-portfolio-right.binkx-img figure.l4", 1.1, { ease: Power4.easeInOut, top: "-100%" }),
                            TweenLite.to(".ripen-ins-portfolio-right.binkx-img figure.l5", 1.3, { ease: Power4.easeInOut, bottom: "-100%" }),
                            TweenLite.to(".dotsstro4, .dotsstro5, .dotsstro6", 0.1, { ease: Power4.easeInOut, css: { opacity: 0 } }),
                            TweenLite.to(".dotsfill4, .dotsfill5, .dotsfill6", 0.1, { ease: Power4.easeInOut, css: { opacity: 0.4, fill: "#fff" } });
                    })
                    .addTo(t),
                new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: 4 * e, duration: e })
                    .on("enter", function () {
                        TweenLite.to("#Opaque_Ring", 1, { ease: Power4.easeInOut, strokeDasharray: "535,1000" }),
                            TweenLite.to(".ripen-portfolio-sec-left figure.four", 1, { ease: Power4.easeInOut, css: { opacity: "0" } }),
                            TweenLite.to(".ripen-port-left-content .pp-head p .l4", 1, { ease: Power4.easeInOut, top: "-45px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l4 p .l1", 1, { ease: Power4.easeInOut, top: "-30px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l4 p .l2", 1.2, { ease: Power4.easeInOut, top: "-30px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l4 p .l3", 1.4, { ease: Power4.easeInOut, top: "-30px" }),
                            TweenLite.to(".ripen-casestudy-navi .pp-navi.l4", 1, { ease: Power4.easeInOut, css: { scale: 0, zIndex: "-1" } }),
                            TweenLite.to(".ripen-port-clocktext.dominos .up-text .l1", 1, { ease: Power4.easeInOut, top: "-30px" }),
                            TweenLite.to(".ripen-port-clocktext.dominos .middel-text .l2", 1.1, { ease: Power4.easeInOut, top: "-80px" }),
                            TweenLite.to(".ripen-port-clocktext.dominos .down-text .l3", 1.2, { ease: Power4.easeInOut, top: "-30px" }),
                            TweenLite.to(".ripen-portfolio-sec-left figure .donimg", 1.4, { ease: Power4.easeInOut, top: "-450px" }),
                            TweenLite.to(".ripen-ins-portfolio-right.dominos-img figure.l1", 1.1, { ease: Power4.easeInOut, top: "-100%" }),
                            TweenLite.to(".ripen-ins-portfolio-right.dominos-img figure.l2", 1.3, { ease: Power4.easeInOut, top: "-107%" }),
                            TweenLite.to(".ripen-ins-portfolio-right.dominos-img figure.l6", 1.3, { ease: Power4.easeInOut, right: "-50%" }),
                            TweenLite.to(".ripen-ins-portfolio-sec", 1, { ease: Power4.easeInOut, css: { backgroundColor: "#6182EE" } }),
                            TweenLite.to(".ripen-portfolio-sec-left, .clockbg-dial", 1, { ease: Power4.easeInOut, css: { backgroundColor: "#050041" } }),
                            TweenLite.to(".ripen-portfolio-sec-left figure.five", 1, { ease: Power4.easeInOut, css: { opacity: "1" } }),
                            setTimeout(function () {
                                TweenLite.to(".dotsstro4", 1, { ease: Power4.easeInOut, css: { opacity: 1 } }), TweenLite.to(".dotsfill4", 1, { ease: Power4.easeInOut, css: { fill: "#0092ff", opacity: "1" } });
                            }, 800),
                            TweenLite.to(".ripen-port-left-content .pp-head p .l5", 1, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l5 p .l1", 1.2, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l5 p .l2", 1.4, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l5 p .l3", 1.6, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-casestudy-navi .pp-navi.l5", 1, { ease: Power4.easeInOut, css: { scale: 1, zIndex: "1" } }),
                            TweenLite.to(".ripen-port-clocktext.binkx .up-text .l1", 1, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-clocktext.binkx .middel-text .l2", 1.2, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-clocktext.binkx .down-text .l3", 1.4, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-ins-portfolio-right.binkx-img", 1, { ease: Power4.easeInOut, css: { opacity: "1", visibility: "visible" } }),
                            TweenLite.to(".ripen-ins-portfolio-right.binkx-img figure.l1", 1.1, { ease: Power4.easeInOut, top: "7%" }),
                            TweenLite.to(".ripen-ins-portfolio-right.binkx-img figure.l2", 1.3, { ease: Power4.easeInOut, bottom: "5%" }),
                            TweenLite.to(".ripen-ins-portfolio-right.binkx-img figure.l3", 1.5, { ease: Power4.easeInOut, left: "70%" }),
                            TweenLite.to(".ripen-ins-portfolio-right.binkx-img figure.l4", 1.1, { ease: Power4.easeInOut, top: "10%" }),
                            TweenLite.to(".ripen-ins-portfolio-right.binkx-img figure.l5", 1.3, { ease: Power4.easeInOut, bottom: "2%" }),
                            TweenLite.to(".ripen-portfolio-sec-left figure.six", 1, { ease: Power4.easeInOut, css: { opacity: "0" } }),
                            TweenLite.to(".ripen-port-left-content .pp-head p .l6", 1, { ease: Power4.easeInOut, top: "45px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l6 p .l1", 1.2, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l6 p .l2", 1.4, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l6 p .l3", 1.6, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-casestudy-navi .pp-navi.l6", 1, { ease: Power4.easeInOut, css: { scale: 0, zIndex: "-1" } }),
                            TweenLite.to(".ripen-ins-portfolio-right.ikea-img", 1, { ease: Power4.easeInOut, css: { opacity: "0" } }),
                            TweenLite.to(".ripen-port-clocktext.ikea .up-text .l1", 1, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-port-clocktext.ikea .middel-text .l2", 1.1, { ease: Power4.easeInOut, top: "65px" }),
                            TweenLite.to(".ripen-port-clocktext.ikea .down-text .l3", 1.3, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-ins-portfolio-right.ikea-img figure.l1", 1, { ease: Power4.easeInOut, bottom: "-100%" }),
                            TweenLite.to(".dotsstro5, .dotsstro6", 0.1, { ease: Power4.easeInOut, css: { opacity: 0 } }),
                            TweenLite.to(".dotsfill5, .dotsfill6", 0.1, { ease: Power4.easeInOut, css: { opacity: 0.4, fill: "#fff" } });
                    })
                    .addTo(t),
                new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: 5 * e, duration: e })
                    .on("enter", function () {
                        TweenLite.to("#Opaque_Ring", 1, { ease: Power4.easeInOut, strokeDasharray: "680,1000" }),
                            TweenLite.to(".ripen-portfolio-sec-left figure.five", 1, { ease: Power4.easeInOut, css: { opacity: "0" } }),
                            TweenLite.to(".ripen-port-left-content .pp-head p .l5", 1, { ease: Power4.easeInOut, top: "-45px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l5 p .l1", 1.2, { ease: Power4.easeInOut, top: "-30px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l5 p .l2", 1.4, { ease: Power4.easeInOut, top: "-30px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l5 p .l3", 1.6, { ease: Power4.easeInOut, top: "-30px" }),
                            TweenLite.to(".ripen-casestudy-navi .pp-navi.l5", 1, { ease: Power4.easeInOut, css: { scale: 0, zIndex: "-1" } }),
                            TweenLite.to(".ripen-port-clocktext.binkx .up-text .l1", 1, { ease: Power4.easeInOut, top: "-30px" }),
                            TweenLite.to(".ripen-port-clocktext.binkx .middel-text .l2", 1.1, { ease: Power4.easeInOut, top: "-80px" }),
                            TweenLite.to(".ripen-port-clocktext.binkx .down-text .l3", 1.3, { ease: Power4.easeInOut, top: "-30px" }),
                            TweenLite.to(".ripen-ins-portfolio-right.binkx-img figure.l1", 1.1, { ease: Power4.easeInOut, top: "-100%" }),
                            TweenLite.to(".ripen-ins-portfolio-right.binkx-img figure.l2", 1.3, { ease: Power4.easeInOut, bottom: "-100%" }),
                            TweenLite.to(".ripen-ins-portfolio-right.binkx-img figure.l3", 1.5, { ease: Power4.easeInOut, left: "120%" }),
                            TweenLite.to(".ripen-ins-portfolio-right.binkx-img figure.l4", 1.1, { ease: Power4.easeInOut, top: "-100%" }),
                            TweenLite.to(".ripen-ins-portfolio-right.binkx-img figure.l5", 1.3, { ease: Power4.easeInOut, bottom: "-100%" }),
                            TweenLite.to(".ripen-ins-portfolio-sec", 1, { ease: Power4.easeInOut, css: { backgroundColor: "#414857" } }),
                            TweenLite.to(".ripen-portfolio-sec-left, .clockbg-dial", 1, { ease: Power4.easeInOut, css: { backgroundColor: "#030303" } }),
                            TweenLite.to(".ripen-portfolio-sec-left figure.six", 1, { ease: Power4.easeInOut, css: { opacity: "1" } }),
                            setTimeout(function () {
                                TweenLite.to(".dotsstro5", 1, { ease: Power4.easeInOut, css: { opacity: 1 } }), TweenLite.to(".dotsfill5", 1, { ease: Power4.easeInOut, css: { fill: "#0092ff", opacity: "1" } });
                            }, 800),
                            TweenLite.to(".ripen-port-left-content .pp-head p .l6", 1, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l6 p .l1", 1.2, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l6 p .l2", 1.4, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l6 p .l3", 1.6, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-casestudy-navi .pp-navi.l6", 1, { ease: Power4.easeInOut, css: { scale: 1, zIndex: "1" } }),
                            TweenLite.to(".ripen-port-clocktext.ikea .up-text .l1", 1, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-clocktext.ikea .middel-text .l2", 1.2, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-clocktext.ikea .down-text .l3", 1.4, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-ins-portfolio-right.ikea-img", 1, { ease: Power4.easeInOut, css: { opacity: "1", visibility: "visible" } }),
                            TweenLite.to(".ripen-ins-portfolio-right.ikea-img figure.l1", 1.3, { ease: Power4.easeInOut, bottom: "0%" }),
                            TweenLite.to(".ripen-portfolio-sec-left figure.seven", 1, { ease: Power4.easeInOut, css: { opacity: "0" } }),
                            TweenLite.to(".ripen-port-left-content .pp-head p .l7", 1, { ease: Power4.easeInOut, top: "45px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l7 p .l1", 1.2, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l7 p .l2", 1.4, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l7 p .l3", 1.6, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-casestudy-navi .pp-navi.l7", 1, { ease: Power4.easeInOut, css: { scale: 0, zIndex: "-1" } }),
                            TweenLite.to(".ripen-port-clocktext.melltoo .up-text .l1", 1, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-port-clocktext.melltoo .middel-text .l2", 1.2, { ease: Power4.easeInOut, top: "65px" }),
                            TweenLite.to(".ripen-port-clocktext.melltoo .down-text .l3", 1.6, { ease: Power4.easeInOut, top: "30px" }),
                            TweenLite.to(".ripen-ins-portfolio-right.melltoo-img figure.l1", 1.1, { ease: Power4.easeInOut, bottom: "-140%" }),
                            TweenLite.to(".ripen-ins-portfolio-right.melltoo-img figure.l2", 1.3, { ease: Power4.easeInOut, bottom: "-100%" }),
                            TweenLite.to(".ripen-portfolio-sec-left .award-grp figure.l2", 1, { ease: Power4.easeInOut, css: { opacity: "0" } }),
                            TweenLite.to(".dotsstro6", 0.1, { ease: Power4.easeInOut, css: { opacity: 0 } }),
                            TweenLite.to(".dotsfill6", 0.1, { ease: Power4.easeInOut, css: { opacity: 0.4, fill: "#fff" } });
                    })
                    .addTo(t),
                new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: 6 * e, duration: e - e / 3 })
                    .on("enter", function () {
                        TweenLite.to("#Opaque_Ring", 1, { ease: Power4.easeInOut, strokeDasharray: "815,1000" }),
                            TweenLite.to(".ripen-portfolio-sec-left figure.six", 1, { ease: Power4.easeInOut, css: { opacity: "0" } }),
                            TweenLite.to(".ripen-port-left-content .pp-head p .l6", 1, { ease: Power4.easeInOut, top: "-45px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l6 p .l1", 1.2, { ease: Power4.easeInOut, top: "-30px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l6 p .l2", 1.4, { ease: Power4.easeInOut, top: "-30px" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l6 p .l3", 1.6, { ease: Power4.easeInOut, top: "-30px" }),
                            TweenLite.to(".ripen-casestudy-navi .pp-navi.l6", 1, { ease: Power4.easeInOut, css: { scale: 0, zIndex: "-1" } }),
                            TweenLite.to(".ripen-ins-portfolio-right.ikea-img", 1, { ease: Power4.easeInOut, css: { opacity: "0" } }),
                            TweenLite.to(".ripen-port-clocktext.ikea .up-text .l1", 1, { ease: Power4.easeInOut, top: "-30px" }),
                            TweenLite.to(".ripen-port-clocktext.ikea .middel-text .l2", 1.1, { ease: Power4.easeInOut, top: "-80px" }),
                            TweenLite.to(".ripen-port-clocktext.ikea .down-text .l3", 1.3, { ease: Power4.easeInOut, top: "-30px" }),
                            TweenLite.to(".ripen-ins-portfolio-right.ikea-img figure.l1", 1, { ease: Power4.easeInOut, bottom: "-100%" }),
                            TweenLite.to(".ripen-ins-portfolio-right.ikea-img figure.l2", 1.1, { ease: Power4.easeInOut, right: "10%" }),
                            TweenLite.to(".ripen-ins-portfolio-right.ikea-img figure.l3", 1.3, { ease: Power4.easeInOut, top: "-100%" }),
                            TweenLite.to(".ripen-ins-portfolio-sec", 1, { ease: Power4.easeInOut, css: { backgroundColor: "#FFB884" } }),
                            TweenLite.to(".ripen-portfolio-sec-left, .clockbg-dial", 1, { ease: Power4.easeInOut, css: { backgroundColor: "#08132D" } }),
                            TweenLite.to(".ripen-portfolio-sec-left figure.seven", 1, { ease: Power4.easeInOut, css: { opacity: "1" } }),
                            setTimeout(function () {
                                TweenLite.to(".dotsstro6", 1, { ease: Power4.easeInOut, css: { opacity: 1 } }), TweenLite.to(".dotsfill6", 1, { ease: Power4.easeInOut, css: { fill: "#0092ff", opacity: "1" } });
                            }, 500),
                            TweenLite.to(".ripen-port-left-content .pp-head p .l7", 1, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l7 p .l1", 1.2, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l7 p .l2", 1.4, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-left-content .ripen-pp-para .ripen-cont.ripen-pp-l7 p .l3", 1.6, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-casestudy-navi .pp-navi.l7", 1, { ease: Power4.easeInOut, css: { scale: 1, zIndex: "1" } }),
                            TweenLite.to(".ripen-port-clocktext.melltoo .up-text .l1", 1.2, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-clocktext.melltoo .middel-text .l2", 1.4, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-port-clocktext.melltoo .down-text .l3", 1.6, { ease: Power4.easeInOut, top: "0" }),
                            TweenLite.to(".ripen-ins-portfolio-right.melltoo-img", 1, { ease: Power4.easeInOut, css: { opacity: "1", visibility: "visible" }, onStart: function () {} }),
                            TweenLite.to(".ripen-portfolio-sec-left .award-grp figure.l2", 1, { ease: Power4.easeInOut, css: { opacity: "1" } }),
                            TweenLite.to(".ripen-ins-portfolio-right.melltoo-img figure.l1", 1.2, { ease: Power4.easeInOut, bottom: "-20%" }),
                            TweenLite.to(".ripen-ins-portfolio-right.melltoo-img figure.l2", 1.4, { ease: Power4.easeInOut, bottom: "29%" });
                    })
                    .addTo(t);
        }),
    $(function () {
        var e = $(window).scrollTop();
        $(window).scroll(function () {
            var t = $(window).scrollTop();
            e < t ? ($(".portskip.dwn").show(), $(".portskip.up").hide()) : ($(".portskip.up").show(), $(".portskip.dwn").hide()), (e = t);
        });
    }),
    $(".portskip").click(function (e) {
        e.preventDefault(), $("body,html").animate({ scrollTop: $(this.hash).offset().top - 75 }, 1e3);
    }),
    $(".bl_bg").addClass("anim");
