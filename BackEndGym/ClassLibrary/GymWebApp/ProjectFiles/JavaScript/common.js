var Type = {
    get: "GET",
    put: "PUT",
    pos: "POST",
    del: "DELETE"
}
var Product = function () {
    var product_name;
    var product_number;
    var price;
    var inventory;
    var amount;
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

errorHandler = function (str) {
    if (str == null) {
        str = "DataBase returned Error";
    }
    alert(" שגיאה בשרת");
}

whiteSpaceRemoval = function (str) {
    var input = "" + str;
    return input.replace(/\s/g, '');
}
