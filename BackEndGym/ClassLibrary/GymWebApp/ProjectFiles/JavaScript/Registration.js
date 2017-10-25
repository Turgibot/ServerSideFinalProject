
function checkForm() {
    //making sure all the inputs are not empty
    var username_valid = $("#username").val() != "";
    var pass_valid = $("#user_pass").val() != "";
    var confirm_pass_valid = $("#user_pass_confirm").val() != "";
    var name_valid = $("#user_name").val() != "";
    var surname_valid = $("#user_surname").val() != "";
    var phone_valid = $("#user_phone").val() != "";
    var birthday_valid = $("#user_birthday").val() != "";

    //comparing PASSWORD and CONFIRM PASSWORD . In case of exact match localeCompare returns 0 .
    var password_confirmed = $("#user_pass").val().localeCompare($("#user_pass_confirm").val());

    if (username_valid && pass_valid && confirm_pass_valid && name_valid && surname_valid && phone_valid && birthday_valid && !password_confirmed)
        addUser();

    if (!username_valid || !pass_valid || !confirm_pass_valid || !name_valid || !surname_valid || !phone_valid || !birthday_valid)
        alert("One or more of the input fields are empty, please fill them up !")

    else if(password_confirmed != 0)
        alert("Your confirm password is not identical to the password you chose, please try again !")
    
}


function addUser()
{
    var user = {
       
        user_name: $("#username").val(),
        password: $("#user_pass").val(),
        first_name: $("#user_name").val(),
        last_name: $("#user_surname").val(),
        phone: $("#user_phone").val(),
        birthday: $("#user_birthday").val(),
        is_manager: false
    };


    ajaxHandler(Type.pos, urlGenerator(["user"]), user, onSuccess, onError);


}


onSuccess = function (data, status, xhr) {
    console.log("success: " + data + " | " + status + " | " + xhr + " | " + xhr.status);
   
    if (xhr.status == 204 || xhr.status == 200)
        goToHomePage();
   
    else
        alert("Some error occured, please refresh you page and try again! ")
}

onError = function (xhr, status, thrownError) {
    console.log("failure: " + status + " | " + thrownError + " | " + xhr + " | " + xhr.status);
    // xhr.status == 500
    alert("error! one or more of your inputs don't meet the conditions !");

}

