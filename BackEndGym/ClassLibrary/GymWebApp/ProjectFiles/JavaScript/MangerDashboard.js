onSuccess = function (data) {
    console.log("success on get all lessons");
    showLessons(data);
}

onError = function () {
    console.log("failure on get all lessons");
}


addLessonOnSuccess = function (data, status, xhr) {
    console.log("success: " + data + " | " + status + " | " + xhr + " | " + xhr.status);

    if (xhr.status == 204 || xhr.status == 200)
        alert("success");

    else
        alert("Some error occured, please refresh you page and try again! ")
}

addLessonOnError = function (xhr, status, thrownError) {
    console.log("failure: " + status + " | " + thrownError + " | " + xhr + " | " + xhr.status);
    // xhr.status == 500
    alert("error! one or more of your inputs don't meet the conditions !");

}


getLessonByIdOnSuccess = function (data) {
    console.log("success on get lesson by id");
    console.log(data);
    createInputTableForUpdateLesson(data);
}

getLessonByIdOnError = function () {
    console.log("failure on get lesson by id");
}



updateLessonOnSuccess = function (data, status, xhr) {
    console.log("success: " + data + " | " + status + " | " + xhr + " | " + xhr.status);

    if (xhr.status == 204 || xhr.status == 200)
        alert("success");

    else
        alert("Some error occured, please refresh you page and try again! ")
}

updateLessonOnError = function (xhr, status, thrownError) {
    console.log("failure: " + status + " | " + thrownError + " | " + xhr + " | " + xhr.status);
    // xhr.status == 500 || 404
    alert("error! one or more of your inputs don't meet the conditions !");

}


function getLessons()
{
    ajaxHandler(Type.get, urlGenerator(["lesson"]), "", onSuccess, onError);
}

function showLessons(lessons) {
    $("#input_container").remove();
    $("#lessons").empty();

    var $tr0 = $("<tr>");
    var $th0_lesson_id = $("<td>").html("Lesson Id");
    var $th0_lesson_name = $("<td>").html("Lesson Name");
    var $th0_lesson_days = $("<td>").html("Lesson Days");
    var $th0_lesson_start_time = $("<td>").html("Start Time");
    var $th0_lesson_duration = $("<td>").html("Lesson Duration");
    var $th0_capacity = $("<td>").html("Capacity");
    var $th0_instructor_name = $("<td>").html("Instructor Name");
    var $th0_training_type = $("<td>").html("Training Type ");
    var $th0_gear = $("<td>").html("Gear");


    $tr0.append($th0_lesson_id, $th0_lesson_name, $th0_lesson_days, $th0_lesson_start_time, $th0_lesson_duration, $th0_capacity, $th0_instructor_name, $th0_training_type, $th0_gear);
    $("#lessons").append($tr0);

    for (i in lessons) {

        var $tr = $("<tr>");

        var $td_lesson_id = $("<td>").html(lessons[i].lesson_id).attr("id", "lesson_id" + i);
        var $td_lesson_name = $("<td>").html(lessons[i].lesson_name).attr("id", "lesson_name" + i);
        var $td_lesson_days = $("<td>").html(lessons[i].lesson_days).attr("id", "lesson_days" + i);
        var $td_lesson_start_time = $("<td>").html(lessons[i].lesson_start_time).attr("id", "lesson_start_time" + i);
        var $td_lesson_duration = $("<td>").html(lessons[i].lesson_duration).attr("id", "lesson_duration" + i);
        var $td_capacity = $("<td>").html(lessons[i].capacity).attr("id", "capacity" + i);
        var $td_instructor_name = $("<td>").html(lessons[i].instructor_name).attr("id", "instructor_name" + i);
        var $td_training_type = $("<td>").html(lessons[i].training_type).attr("id", "training_type" + i);
        var $td_gear = $("<td>").html(lessons[i].gear).attr("id", "gear" + i);

        $tr.append($td_lesson_id, $td_lesson_name, $td_lesson_days, $td_lesson_start_time, $td_lesson_duration, $td_capacity, $td_instructor_name, $td_training_type, $td_gear);
        $tr.addClass('danger');
        $("#lessons").append($tr);

    }
}


function createInputTableForAddLesson()
{
    $("#input_container").remove();
    $("#lessons").empty();

    var $tr0 = $("<tr>");
    var $td0_lesson_id = $("<td>").html("Lesson Id");
    var $td0_lesson_name = $("<td>").html("Lesson Name");
    var $td0_lesson_days = $("<td>").html("Lesson Days");
    var $td0_lesson_start_time = $("<td>").html("Start Time");
    var $td0_lesson_duration = $("<td>").html("Lesson Duration");
    var $td0_capacity = $("<td>").html("Capacity");
    var $td0_instructor_name = $("<td>").html("Instructor Name");
    var $td0_training_type = $("<td>").html("Training Type ");
    var $td0_gear = $("<td>").html("Gear");
    var $td0_submit = $("<td>").html("");

    $tr0.append($td0_lesson_id, $td0_lesson_name, $td0_lesson_days, $td0_lesson_start_time, $td0_lesson_duration, $td0_capacity, $td0_instructor_name, $td0_training_type, $td0_gear, $td0_submit);
    $("#lessons").append($tr0);

    var $tr1 = $("<tr>");
    var $td1_lesson_id = $("<td>");
    var $input_lesson_id = $("<input>").attr({ "type": "text", "id": "input_lesson_id" });
    $td1_lesson_id.append($input_lesson_id);

    var $td1_lesson_name = $("<td>");
    var $input_lesson_name = $("<input>").attr({ "type": "text", "id": "input_lesson_name" });
    $td1_lesson_name.append($input_lesson_name);

    var $td1_lesson_days = $("<td>");
    var $input_lesson_days = $("<input>").attr({ "type": "text", "id": "input_lesson_days" });
    $td1_lesson_days.append($input_lesson_days);

    var $td1_lesson_start_time = $("<td>");
    var $input_lesson_start_time = $("<input>").attr({ "type": "time", "id": "input_start_time" });
    $td1_lesson_start_time.append($input_lesson_start_time);

    var $td1_lesson_duration = $("<td>");
    var $input_lesson_duration = $("<input>").attr({ "type": "number", "id": "input_lesson_duration" });
    $td1_lesson_duration.append($input_lesson_duration);

    var $td1_capacity = $("<td>");
    var $input_capacity = $("<input>").attr({ "type": "number", "min":"0", "id": "input_capacity" });
    $td1_capacity.append($input_capacity);

    var $td1_instructor_name = $("<td>");
    var $input_instructor_name = $("<input>").attr({ "type": "text", "id": "input_instructor_name" });
    $td1_instructor_name.append($input_instructor_name);

    var $td1_training_type = $("<td>");
    var $input_training_type = $("<input>").attr({ "type": "text", "id": "input_training_type" });
    $td1_training_type.append($input_training_type);

    var $td1_gear = $("<td>");
    var $input_gear = $("<input>").attr({ "type": "text", "id": "input_gear" });
    $td1_gear.append($input_gear);

    var $td1_submit = $("<td>");
    var $submit_btn = $("<input>").attr({ "type": "button", "id": "submit_btn" }).val("Submit");
    $submit_btn.click(function(){
        addLesson();
    });
    $td1_submit.append($submit_btn);

    $tr1.append($td1_lesson_id, $td1_lesson_name, $td1_lesson_days, $td1_lesson_start_time, $td1_lesson_duration, $td1_capacity, $td1_instructor_name, $td1_training_type, $td1_gear, $td1_submit);
    $("#lessons").append($tr1);


}

function addLesson()
{
    var lesson = {
        lesson_id: $("#input_lesson_id").val(),
        lesson_name: $("#input_lesson_name").val(),
        lesson_days: $("#input_lesson_days").val(),
        lesson_start_time: $("#input_start_time").val(),
        lesson_duration: $("#input_lesson_duration").val(),
        capacity: $("#input_capacity").val(),
        instructor_name: $("#input_instructor_name").val(),
        training_type: $("#input_training_type").val(),
        gear: $("#input_gear").val(),
    };

    ajaxHandler(Type.pos, urlGenerator(["lesson"]), lesson, addLessonOnSuccess, addLessonOnError);

}


function askForLessonId()
{
    $("#input_container").remove();
    $("#lessons").empty();

    var $dashboard_container = $("#dashboard_container");
    var $input_container = $("<div>").attr({"id":"input_container"});
    var $p = $("<p>").html("מהו מספר האימון היחודי?");
    var $input_lesson_id = $("<input>").attr({ "type": "text", "id": "input_lesson_id" });
    var $submit_btn = $("<input>").attr({ "type": "button", "id": "submit_btn" }).val("מצא אימון");
    $submit_btn.addClass('btn btn-warning');
    $submit_btn.click(function () {
        if ($input_lesson_id.val() != "")
        {
            getLessonById($input_lesson_id.val());
            $input_container.remove();
        }
        else
            alert("You must fill the field to procced !");
        
    });

    $input_container.append($p);
    $input_container.append($input_lesson_id);
    $input_container.append($submit_btn);
    $dashboard_container.append($input_container);

}

function getLessonById(lesson_id)
{
    ajaxHandler(Type.get, urlGenerator(["lesson", lesson_id]), "", getLessonByIdOnSuccess, getLessonByIdOnError);
}

function createInputTableForUpdateLesson(Lesson)
{
    console.log("inside editLesson");

    $("#input_container").remove();
    $("#lessons").empty();

    var $tr0 = $("<tr>");
    var $td0_lesson_id = $("<td>").html("Lesson Id");
    var $td0_lesson_name = $("<td>").html("Lesson Name");
    var $td0_lesson_days = $("<td>").html("Lesson Days");
    var $td0_lesson_start_time = $("<td>").html("Start Time");
    var $td0_lesson_duration = $("<td>").html("Lesson Duration");
    var $td0_capacity = $("<td>").html("Capacity");
    var $td0_instructor_name = $("<td>").html("Instructor Name");
    var $td0_training_type = $("<td>").html("Training Type ");
    var $td0_gear = $("<td>").html("Gear");
    var $td0_submit = $("<td>").html("");

    $tr0.append($td0_lesson_id, $td0_lesson_name, $td0_lesson_days, $td0_lesson_start_time, $td0_lesson_duration, $td0_capacity, $td0_instructor_name, $td0_training_type, $td0_gear, $td0_submit);
    $("#lessons").append($tr0);

    var $tr1 = $("<tr>");
    var $td1_lesson_id = $("<td>").attr({"id": "lesson_id" }).html(Lesson.lesson_id);
    //var $input_lesson_id = $("<input>").attr({ "type": "text", "id": "input_lesson_id" }).val(Lesson.lesson_id);
    //$td1_lesson_id.append($input_lesson_id);

    var $td1_lesson_name = $("<td>");
    var $input_lesson_name = $("<input>").attr({ "type": "text", "id": "input_lesson_name" }).val(Lesson.lesson_name);
    $td1_lesson_name.append($input_lesson_name);

    var $td1_lesson_days = $("<td>");
    var $input_lesson_days = $("<input>").attr({ "type": "text", "id": "input_lesson_days" }).val(Lesson.lesson_days);
    $td1_lesson_days.append($input_lesson_days);

    var $td1_lesson_start_time = $("<td>");
    var $input_lesson_start_time = $("<input>").attr({ "type": "time", "id": "input_start_time" }).val(Lesson.lesson_start_time);
    $td1_lesson_start_time.append($input_lesson_start_time);

    var $td1_lesson_duration = $("<td>");
    var $input_lesson_duration = $("<input>").attr({ "type": "number", "id": "input_lesson_duration" }).val(Lesson.lesson_duration);
    $td1_lesson_duration.append($input_lesson_duration);

    var $td1_capacity = $("<td>");
    var $input_capacity = $("<input>").attr({ "type": "number", "min": "0", "id": "input_capacity" }).val(Lesson.capacity);
    $td1_capacity.append($input_capacity);

    var $td1_instructor_name = $("<td>");
    var $input_instructor_name = $("<input>").attr({ "type": "text", "id": "input_instructor_name" }).val(Lesson.instructor_name);
    $td1_instructor_name.append($input_instructor_name);

    var $td1_training_type = $("<td>");
    var $input_training_type = $("<input>").attr({ "type": "text", "id": "input_training_type" }).val(Lesson.training_type);
    $td1_training_type.append($input_training_type);

    var $td1_gear = $("<td>");
    var $input_gear = $("<input>").attr({ "type": "text", "id": "input_gear" }).val(Lesson.gear);
    $td1_gear.append($input_gear);

    var $td1_submit = $("<td>");
    var $submit_btn = $("<input>").attr({ "type": "button", "id": "submit_btn" }).val("Submit");
    $submit_btn.click(function () {
        updateLesson();
    });
    $td1_submit.append($submit_btn);

    $tr1.append($td1_lesson_id, $td1_lesson_name, $td1_lesson_days, $td1_lesson_start_time, $td1_lesson_duration, $td1_capacity, $td1_instructor_name, $td1_training_type, $td1_gear, $td1_submit);
    $("#lessons").append($tr1);





}

function updateLesson() {

    var updated_lesson = {
        lesson_id: $("#lesson_id").html(),
        lesson_name: $("#input_lesson_name").val(),
        lesson_days: $("#input_lesson_days").val(),
        lesson_start_time: $("#input_start_time").val(),
        lesson_duration: $("#input_lesson_duration").val(),
        capacity: $("#input_capacity").val(),
        instructor_name: $("#input_instructor_name").val(),
        training_type: $("#input_training_type").val(),
        gear: $("#input_gear").val(),
    };

    ajaxHandler(Type.put, urlGenerator(["lesson", "update"]), updated_lesson, updateLessonOnSuccess, updateLessonOnError);

}



    $(document).ready(function () {
    


    })