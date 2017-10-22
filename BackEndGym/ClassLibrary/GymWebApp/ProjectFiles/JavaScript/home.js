$(function () {
    $(window).on("load resize click", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });

    var vid = document.getElementById('vid');
    vid.playbackRate = 0.85;

    new WOW().init();

    $('nav a, .down-button a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top-50
        }, 1500);
        event.preventDefault();
    });
});
