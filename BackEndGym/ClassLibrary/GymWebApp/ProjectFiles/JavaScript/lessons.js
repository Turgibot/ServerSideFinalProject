var  $table = $('#lesson-by-user');
var $lesson_name = $('<th>');
var $t_body = $('#t-body');
var $t_head = $('#t-head');
var $tr = $('<tr>');
var $th = $('<th>');
var $td = $('<td>');
var lessons = {};
var lessonsOfUser = {};
var active_lessons = [];
var lessonsRegistered = [];
var lessonsDeleted = [];

var getLessonsOnSuccess = function (data) {
    lessons = getLessonsDB(data);
    createlessonsTable();
    //console.log(data);
    //getLessonsbyUserID
}
var getLessonsOnError = function (data) {
    console.log(data);
}

var Status = {
    inactive: 0,
    active: 1,
    registered:2,
    overbooked:3
};

var getLessonsDB = function (data) {
    var myLessons = {};
    for (var i in data) {
        lesson = new Lesson();
        lesson.lesson_id = data[i].lesson_id;
        lesson.lesson_name = data[i].lesson_name;
        lesson.lesson_days = data[i].lesson_days;
        lesson.lesson_start_time = data[i].lesson_start_time;
        lesson.lesson_duration = data[i].lesson_duration;
        lesson.capacity = data[i].capacity;
        lesson.instructor_name = data[i].instructor_name;
        lesson.training_type = data[i].training_type;
        lesson.gear = data[i].gear;
        myLessons[i] = lesson;
    }
    return myLessons;
}

createlessonsTable = function () {
    
    for (var i in lessons) {
        var name = lessons[i].lesson_name;
        var lesson_pair = {};
        lesson_pair.name = name;
        lesson_pair.id = lessons[i].lesson_id;
        if (alreadyExist(lessons[i], lesson_pair)) {
            continue;
        }
        active_lessons.push(lesson_pair);
        addTitle(name);
        var days = string2Days(lessons[i].lesson_days);
        addHours(days, lesson_pair, lessons[i].lesson_start_time, lessons[i].lesson_duration, lessons[i].instructor_name.trim(), Status.active);
        completeWhiteSpaces(days, lesson_pair);

    }
}
var alreadyExist = function (curr_lesson,lesson_pair) {
    for (var i in active_lessons) {
        if (lesson_pair.name == active_lessons[i].name) {
            updateLessonInTable(curr_lesson, active_lessons[i].id);
            return true;
        }
    }
    return false;
}
var updateLessonInTable = function (lesson, lesson_id) {
    var _days = string2Days(lesson.lesson_days);
    for (var j in _days) {
        var $tbl = $('#' + lesson_id.trim() + "_" + _days[j]);
        var tds = $tbl.find('td');
        for (var i in tds) {
            if (tds[i].innerHTML == "") {
                var tr1 = document.createElement('tr');
                tds[i].innerHTML = "" + lesson.lesson_start_time.substring(0, 5);
                tds[i].setAttribute('id', "" + lesson_id.trim() + "" + _days[j] + "_" + lesson.lesson_start_time.substring(0, 2));
                tds[i].setAttribute('status', Status.active);
                tds[i].setAttribute('onclick', 'toggleColors(' + '"' + lesson_id.trim() + "" + _days[j] + "_" + lesson.lesson_start_time.substring(0, 2) + '"' + ')');
                tds[i].setAttribute('data-toggle', 'tooltip');
                tds[i].setAttribute('title', 'משך השיעור: ' + lesson.lesson_duration + ' מדריך: ' + lesson.instructor_name);
                tds[i].setAttribute('style', 'background-color: yellow');

                break;
            }
        }
       
    }

}
var getLessons = function(){
    ajaxHandler(Type.get, urlGenerator(["lesson"]), "", getLessonsOnSuccess, errorHandler);
}


var getLessonsbyUserID = function () {
    var id = localStorage.getItem('user_id').trim();
    ajaxHandler(Type.get, urlGenerator(["userinlesson", id]), "", getUserLessonsOnSuccess, errorHandler);
}
var addTitle = function(name){
    var $tr = $('#tr-days');
    var $th = $('<th>');
    $th.addClass("lesson_name");
    $th.attr('id', 'th_' + name);
    $th.html(name);
    $tr.append($th);
}
var addHours = function (days, lesson_pair, start_time, duration, instr,status) {

    for(var i in days){
        var $day_tr = $('#day' + days[i]);
        var $td = $('<td>');
        var $tbl = $('<table>');
        $tbl.attr('id', "" + lesson_pair.id.trim() + "_" + days[i])
        var $tr1 = $('<tr>');
        var $td1 = $('<td>');
        $td1.html("" + start_time.substring(0, 5));
        $td1.attr('id', "" + lesson_pair.id.trim() + "" + days[i] + "_" + start_time.substring(0, 2));
        $td1.attr('status', status);
        var str = lesson_pair.id.trim() + '' + days[i] + '_' + start_time.substring(0, 2);
        if(status!=0)
            $td1.attr('onclick', 'toggleColors("' + str.trim() + '")');
        var $tr2 = $('<tr>');
        var $td2 = $('<td>');
        $td2.html("");
        var $tr3 = $('<tr>');
        var $td3 = $('<td>');
        $td3.html("");
        $td1.attr({ 'data-toggle': 'tooltip', 'title': 'משך השיעור: ' + duration + ' מדריך: ' + instr });
        if(status == 1)
            $td1.css('background-color', 'yellow');
        $day_tr.append($td.append($tbl.append($tr1.append($td1), $tr2.append($td2), $tr3.append($td3))));
    }
}
var completeWhiteSpaces = function (__days, lesson_pair) {
    var flag = false;
    var rest_days = [];
    for (var i = 1; i < 8; i++) {
        for (var j in __days) {
            if (__days[j] == i) {
                flag = true;
                break;
            }
        }
            if (!flag) {
                rest_days.push(i);
            }
            flag = false;
    }
    addHours(rest_days, lesson_pair, "", "", "", Status.inactive);
}

var getUserLessonsOnSuccess = function (data) {
    lessonsOfUser = getLessonsDB(data);
    
    for (var i in lessonsOfUser) {
        var registeredLesson = getLessonById(lessonsOfUser[i].lesson_id.trim());
    }
}

var toggleColors = function (id) {
    var colors = ['yellow', 'blue'];
    var $td = $('#' + id);
   
    var stat = $td.attr('status');
    stat = parseInt((stat) % 2);

    $td.css('background-color', colors[stat]);
    $td.attr('status', (stat+1));
    lessonUpdate(id, (stat + 1));
}

var getLessonById = function (id) {
    ajaxHandler(Type.get, urlGenerator(["lesson", id]), "", getLessonByIdOnSuccess, errorHandler);

}
var getLessonByIdOnSuccess = function (lesson) {

    var days = string2Days(lesson.lesson_days);
    for (var i in days) {

        var td_id = lesson.lesson_id.trim() + "" + days[i] + "_" + lesson.lesson_start_time.substring(0, 2);
        var $td = $('#' + td_id);
        var sts = $td.attr('status', Status.registered);
        $td.css('background-color', 'blue');
    }
}
   
var lessonUpdate = function (id, status) {
    var time = id.substring(6, 8);
    var user_id = localStorage.getItem("user_id");
    var lesson_id = id.substring(0, 4);
    var day = id.substring(4, 5);
    var userInLesson = new UserInLesson();
    lesson_id = getLessonId(lesson_id, time);
    userInLesson.lesson_id = lesson_id;
    userInLesson.user_id = user_id;
    userInLesson.lesson_day = day;

    if (status == 1) {
        addToDeletedList(userInLesson);
    } else {
        addToRegisterList(userInLesson);
    }
}
var addToDeletedList = function (userInLesson) {
    for (var i in lessonsRegistered) {
        if (lessonsRegistered[i].lesson_id == userInLesson.lesson_id)
            delete lessonsRegistered[i];
    }
    lessonsDeleted.push(userInLesson);
}

var addToRegisterList = function (userInLesson) {
    for (var i in lessonsDeleted) {
        if (lessonsDeleted[i].lesson_id == userInLesson.lesson_id)
            delete lessonsDeleted[i];
    }
    lessonsRegistered.push(userInLesson);
}
var getLessonId = function (id, time) {
    var name;
    for (var i in lessons) {
        if (id == lessons[i]) {
            name = lessons[i].lesson_name;
            break;
        }
    }
    for (var i in lessons) {
        if (lessons[i].lesson_start_time.startsWith(time)) {
            return lessons[i].lesson_id;
        }
    }
}

var onUpdateBtn = function () {
    if (lessonsRegistered.length > 0) {
        ajaxHandler(Type.pos, urlGenerator(["userinlesson"]), lessonsRegistered, lessonsRegOnSuccess, errorHandler);
    }
    if (lessonsDeleted.length > 0) {
        ajaxHandler(Type.del, urlGenerator(["userinlesson"]), lessonsDeleted, lessonsDelOnSuccess, errorHandler);

    }
}
var lessonsRegOnSuccess = function () {
    alert("השינויים עודכנו בהצלחה");
}

var lessonsDelOnSuccess = function () {
    alert("השינויים עודכנו בהצלחה");
}
getLessons();
setTimeout(getLessonsbyUserID,1000);
