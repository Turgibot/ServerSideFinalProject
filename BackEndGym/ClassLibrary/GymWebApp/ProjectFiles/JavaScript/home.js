$(function () {
   
    var vid = document.getElementById('vid');
    vid.playbackRate = 0.85;

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
});

onSuccess = function (data, status, xhr) {
    console.log("success: " + data.first_name + " | " + status + " | " + xhr + " | " + xhr.status);

    if (xhr.status == 200) {
        updatePage(data);
        updateLocalStorage(data);

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


function updateLocalStorage(data){
    localStorage.setItem('first_name', data.first_name);
    localStorage.setItem('is_manager', data.is_manager);
}
