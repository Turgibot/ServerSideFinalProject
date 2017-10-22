
onSuccess = function (data) {

    if (data == true)
        window.location.href = "home.html";

    else
        alert("Bad username or password, please try again!");
}

onError = function () {

    alert("error!");
}




function validateUser() {
    var user = {
        user_name: $("#user_id").val(),
        password: $("#user_pass").val()
    };

    //making ajax call to UserController 
    ajaxHandler(Type.get, urlGenerator(["user",user.user_name, user.password]), "", onSuccess, onerror);
}