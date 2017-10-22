
$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });
    $(".video-wallpaper").wallpaper({
        source: {
            poster: "../Media/Images/range-1.png",
            mp4: "../Media/Video/clip.mp4"
            //,
            //ogg: "path/to/video.ogv",
            //webm: "path/to/video.webm"
        }
    });
    // add Bootstrap's scrollspy
    $('body').scrollspy({
        target: '.navbar',
        offset: 160
    });

    // smooth scrolling
    $('nav a, .down-button a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // initialize WOW for element animation
    new WOW().init();

    // initialize NanoGallery
    $(document).ready(function () {
        $("#nanoGallery3").nanoGallery();
    });

});