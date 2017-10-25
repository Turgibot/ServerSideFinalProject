
onSuccess = function (data, status , xhr) {
    console.log("success: " + data + " | " + status + " | " + xhr + " | " + xhr.status);

    if (xhr.status == 200)
        window.location.href = "home.html";

    else
        alert("Something went wrong, please try again !!!");
}

onError = function (xhr, status, thrownError) {
    console.log("failure: " + status + " | " + thrownError + " | " + xhr + " | " + xhr.status);

    if (xhr.status == 404 || xhr.status == 500)
        alert("Bad username or password, please try again!!!");
    
}


function validateUser() {
    var user = {
        user_name: $("#username").val(),
        password: $("#user_pass").val()
    };
    console.log($("#username").val() + " | " + $("#user_pass").val());
    //making ajax call to UserController 
    ajaxHandler(Type.get, urlGenerator(["user",user.user_name, user.password]), "", onSuccess, onError);
}