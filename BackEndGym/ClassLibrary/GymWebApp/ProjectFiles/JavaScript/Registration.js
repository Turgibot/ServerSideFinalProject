
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
        alert("אחד או יותר מהשדות ריקים, אנא מלא את כולם בהתאם")

    else if(password_confirmed != 0)
        alert("הסיסמה ואימות הסיסמה שבחרת אינם זהים, אנא נסת שנית ! ")

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
    {
        alert(".כל הכבוד! נרשמת בהצלחה, אנא התחבר לאתר עם שם המשתמש והסיסמא שיצרת")
        goToHomePage();
    }
   
    else
        alert("קרתה שגיאה כלשהי, אנא רענן את העמוד ונסה שנית, תודה. ")
}

onError = function (xhr, status, thrownError) {
    console.log("failure: " + status + " | " + thrownError + " | " + xhr + " | " + xhr.status);
    // xhr.status == 500
    alert("שגיאה! אחד או יותר מהנתונים שהכנסת לא מתאימים.");

}

