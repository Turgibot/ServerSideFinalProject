$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });

    new WOW().init();
   
    $('.dropdown-menu').click(function (e) {
        e.stopPropagation();
    });

    if (localStorage.key(0) == "first_name") {
        var existingUser = {};
        existingUser.first_name = localStorage.getItem('first_name');
        existingUser.is_manager = localStorage.getItem('is_manager');
        updatePage(existingUser);
    }
});

var Type = {
    get: "GET",
    put: "PUT",
    pos: "POST",
    del: "DELETE"
}
var User = function () {
    var user_id;
    var user_name;
    var password;
    var first_name;
    var last_name;
    var birthday;
    var is_manager;
}

var Lesson = function () {
    var lesson_id;
    var lesson_name;
    var lesson_days;
    var lesson_start_time;
    var lesson_duration;
    var capacity;
    var instructor_name;
    var training_type;
    var gear;
}
var UserInLesson = function(){
    var user_id; 
    var lesson_id;
    var record_id;
    var lesson_day;
}
    
function ajaxHandler(verb, uri, targetData, onSuccess, onError) {

    console.log("AJAX: \n verb: " + verb + " url: " + uri + " target: " + JSON.stringify(targetData));

    $.ajax({
        dataType: "json",
        url: uri,
        contentType: "application/json; charset=utf-8",
        type: verb,
        data: JSON.stringify(targetData),
        success: onSuccess,
        error: onError
    });

}
function urlGenerator(strings) {
    var str = "/api";
    for (s in strings)
        str += "/" + strings[s].toLowerCase();
    return str;
}

var errorHandler = function (str) {
    if (str == null) {
        str = "DataBase returned Error";
    }
    alert(" שגיאה בשרת");
}

var whiteSpaceRemoval = function (str) {
    var input = "" + str;
    return input.replace(/\s/g, '');
}

var string2Days = function (daysStr) {
    return daysStr.split(',');
}

var goToMangerDashboard = function () {
    window.location = 'MangerDashboard.html';
}
var gotoRegisterPage = function () {
    window.location = 'Registration.html';
}

goToHomePage = function () {
    window.location = "home.html";
}

var reload = function () {
    window.confirm("תודה שבאת")
    window.location.reload();
    localStorage.clear();
}

var addManager = function () {
    $('.update-class').addClass('manager');
}
var addIcon = function () {
    var $icon = $('<i>');
    $icon.attr('class', 'fa fa-sign-out fa-3x');
    $icon.attr('onclick', 'reload()');
    $('.nav').append($('<li>').append($icon));
}
var activateLessons = function () {
    $('#tool-strike').removeClass('red-strike');
    $('#tool-strike').click(function () {
        window.location = "lessons.html";
    })
}

function updatePage(data) {
    $('.dropdown').class = 'dropdown';
    $('#friends')[0].innerText = "היי " + data.first_name;
    $('.dropdown').dropdown('toggle');
    addIcon();
    activateLessons();
    if (data.is_manager === true)
        addManager();
}