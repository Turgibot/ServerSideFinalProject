$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });

    var vid = document.getElementById('vid');
    vid.playbackRate = 0.85;

    new WOW().init();
    // add Bootstrap's scrollspy
    $('body').scrollspy({
        target: '.navbar',
        offset: 160
    });
    $('nav a, .down-button a').bind('click', function () {
        if ($($(this).attr('href')).length>0) {
            $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top - 50
            }, 1500);
        }
        event.preventDefault();
    });
    $('.dropdown-menu').click(function (e) {
        e.stopPropagation();
    })
});

onSuccess = function (data, status, xhr) {
    console.log("success: " + data + " | " + status + " | " + xhr + " | " + xhr.status);

    if (xhr.status == 200) {
        $('.dropdown').class = 'dropdown';
        $('#friends')[0].innerText = "היי " + data;
        $('.dropdown').dropdown('toggle');
        var $icon = $('<i>');
        $icon.attr('class', 'fa fa-sign-out fa-3x');
        $icon.attr('onclick', 'reload()');

        $('.nav').append($('<li>').append($icon));
    }
    else
        alert("Something went wrong, please try again !");
}

onError = function (xhr, status, thrownError) {
    console.log("failure: " + status + " | " + thrownError + " | " + xhr + " | " + xhr.status);
    if (xhr.status == 404 || xhr.status == 500)
        alert("Bad username or password, please try again!");


}


function validateUser() {
    var user = {
        user_name: $("#user-name").val(),
        password: $("#user-pass").val()
    };

    //making ajax call to UserController 
    ajaxHandler(Type.get, urlGenerator(["user", user.user_name, user.password]), "", onSuccess, onError);
}
function gotoRegisterPage() {
    window.location = 'Registration.html';
}
reload = function () {
    window.confirm("תודה שבאת")
    window.location.reload();
}

