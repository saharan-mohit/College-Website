// dashboard today time table
var i = 0;
for (i = 0; i < MondayList.length; i++) {
    if (MondayList[i].periodType == 1) {
        var id = "class-" + String(i) + "-name";
        document.getElementById(id).innerText = MondayList[i].periodName;
        id = "class-" + String(i) + "-time";
        document.getElementById(id).innerText = String(MondayList[i].periodStartingTime) + '-' + String(MondayList[i].periodEndingTime);
    }else{
        var id = "class-" + String(i);
        document.getElementById(id).style.display = "none";
    }
}
    
var k = 0;
for(var a=0;a<MondayList.length;a++){
    if(MondayList[a].periodType == 1){
        var id = "schedule-card-" + String(k) + "-name";
        document.getElementById(id).innerText = MondayList[a].periodName;
        id = "schedule-card-" + String(k) + "-time";
        document.getElementById(id).innerText = String(MondayList[a].periodStartingTime) + '-' + String(MondayList[a].periodEndingTime);
        id = "schedule-card-" + String(k) + "-location";
        document.getElementById(id).innerText = String(MondayList[a].periodLocation);
        console.log(k);
        k+=1;
    }
}
for(;k<7;k++){
    var id = "schedule-card-" + String(k);
    document.getElementById(id).style.display = "none";
}

// dashboard bottom subject cards
var subject_Array =  JSON.parse(subjectRetrievedObject);
for(i=0;i<3;i++){
    var id="subject-container-" + String(i);
    document.getElementById(id).innerText = subject_Array[i].subjectName;
}

// two min attendance subjects
var min_attendance1 = 100,min_attendance2=100;
var sub_min_1,sub_min_2;
for(i=0;i<subject_Array.length;i++){
    var total_classes = subject_Array[i].subjectPresent
        + subject_Array[i].subjectAbsent
        + subject_Array[i].subjectCancelled;
    var present = (subject_Array[i].subjectPresent * 100) / total_classes;
    if(present < min_attendance1){
        sub_min_2 = sub_min_1
        sub_min_1 = i;
    } else if(present > min_attendance1 && present < min_attendance2){
        min_attendance2 = i;
    }
}
var sub_min_1_id = "subject-name-0"
document.getElementById(sub_min_1_id).innerText = subject_Array[sub_min_1].subjectName;
document.getElementById("subject-attendence-0").innerText = String(Math.round(
    (subject_Array[sub_min_1].subjectPresent * 100) / 
    (subject_Array[sub_min_1].subjectPresent
    + subject_Array[sub_min_1].subjectAbsent
    + subject_Array[sub_min_1].subjectCancelled)
)  ) + "%" ;
var sub_min_2_id = "subject-name-1"
document.getElementById(sub_min_2_id).innerText = subject_Array[sub_min_2].subjectName;
document.getElementById("subject-attendance-1").innerText = String(Math.round(
    (subject_Array[sub_min_2].subjectPresent * 100) / 
        ( subject_Array[sub_min_2].subjectPresent
        + subject_Array[sub_min_2].subjectAbsent
        + subject_Array[sub_min_2].subjectCancelled)
        )
    ) + "%"  ;
    
// time table 
for(i=0;i<MondayList.length;i++){
    var plate_id = "MON-period-"+String(i);
    if(MondayList[i].periodType == 1){
        document.getElementById(plate_id).getElementsByClassName('period')[0]
            .getElementsByClassName("timetable-card-nav")[0].getElementsByTagName('span')[0].innerText =
                MondayList[i].periodName;
        document.getElementById(plate_id).getElementsByClassName('period')[0]
            .getElementsByClassName("timetable-card-details")[0].getElementsByTagName('h7')[0].innerText = 
                MondayList[i].periodStartingTime + "-" + MondayList[i].periodEndingTime;
        document.getElementById(plate_id).getElementsByClassName('period')[0]
            .getElementsByClassName("timetable-card-details")[1].getElementsByTagName('h7')[0].innerText = 
                MondayList[i].periodLocation;
    } else{
        document.getElementById(plate_id).getElementsByClassName('period')[0].style.display = 'none';
        document.getElementById(plate_id).getElementsByClassName('no_period')[0].style.display = 'flex';
        document.getElementById(plate_id).getElementsByClassName('no_period')[0]
            .getElementsByClassName("no_timetable-card-details")[0].getElementsByTagName('h7')[0].innerText = 
                MondayList[i].periodStartingTime + "-" + MondayList[i].periodEndingTime;
    }
}

var user = localStorage.getItem("User_Name");
document.getElementById("user").innerText = user;
var a;
for(a = 0;a<subject_Array.length;a++){
    var id="subject-card-subname-" + String(a);
    document.getElementById(id).innerText = subject_Array[a].subjectName;
    id="subject-card-tename-" + String(a);
    document.getElementById(id).innerText ="Teacher - " +  subject_Array[a].subjectTeacherName;
}
for(;a<7;a++){
    document.getElementsByClassName("subject-card")[a].style.display = 'none';
}



//active state in today schedule menu
var nameid = 'schedule-card-0-name';
var timeid = "schedule-card-0-time";
var locationid = "schedule-card-0-location";
document.getElementById('right-detail-subname').innerText =  document.getElementById(nameid).innerText;
document.getElementById("right-detail-time").innerText =  'Timing - '+document.getElementById(timeid).innerText;
document.getElementById("right-detail-location").innerText = 'Location - '+document.getElementById(locationid).innerText;
var teacher;
for(var b=0;b<MondayList.length;b++){
    if(MondayList[b].periodName == document.getElementById(nameid).innerText){
        teacher = MondayList[b].periodTeacherName;
    }
}
document.getElementById("right-detail-teacher").innerText = "Teacher's Name - " +  teacher;