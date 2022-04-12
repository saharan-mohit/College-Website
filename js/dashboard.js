//user logout button function
function logout(){
    console.log("sign out");
    firebase.auth().signOut().then(()=>{
        localStorage.clear();
        window.location="index.html";
    })
    
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log("user still logged In");
    } else {
        console.log("user logged out");
    }
});

function timetable(){
    console.log("timetable is clicked");
    document.getElementsByClassName('menu-dashboard')[0].style.display="none";
    document.getElementsByClassName('menu-schedule')[0].style.display="none";
    document.getElementsByClassName('menu-timetable')[0].style.display="block";
    document.getElementsByClassName('menu-subjects')[0].style.display="none";
    document.getElementsByClassName('menu-notification')[0].style.display="none";
    document.getElementsByClassName('menu-events')[0].style.display="none";
}
function notification(){
    console.log("notification is clicked");
    document.getElementsByClassName('menu-dashboard')[0].style.display="none";
    document.getElementsByClassName('menu-schedule')[0].style.display="none";
    document.getElementsByClassName('menu-timetable')[0].style.display="none";
    document.getElementsByClassName('menu-subjects')[0].style.display="none";
    document.getElementsByClassName('menu-notification')[0].style.display="block";
    document.getElementsByClassName('menu-events')[0].style.display="none";
}
function events(){
    console.log("events is clicked");
    document.getElementsByClassName('menu-dashboard')[0].style.display="none";
    document.getElementsByClassName('menu-schedule')[0].style.display="none";
    document.getElementsByClassName('menu-timetable')[0].style.display="none";
    document.getElementsByClassName('menu-subjects')[0].style.display="none";
    document.getElementsByClassName('menu-notification')[0].style.display="none";
    document.getElementsByClassName('menu-events')[0].style.display="block";
}
function datecollect(){
    var date= new Date();
    var d = date.toDateString().split(" ");
    var dateClass=document.getElementsByClassName('date');
    for(let i=0;i<dateClass.length;i++){
        var month;
        var day;
        if(d[0]=='Sat'){
            day="Saturday";
        }else if(d[0]=='Mon'){
            day="Monday";
        }else if(d[0]=='Tue'){
            day="Tuesday";
        }else if(d[0]=="Wed"){
            day="Wednesday"
        }else if(d[0]=="Thu"){
            day="Thursday";
        }else if(d[0]=="Fri"){
            day="Friday";
        }else if(d[0]=="Sat"){
            day="Saturday";
        }else{
            day="Sunday";
        }
        if(d[1]=="Jan"){
            month="Januray";
        }else if(d[1]=="Feb"){
            month="Februray";
        }else if(d[1]=="Mar"){
            month="March";
        }else if(d[1]=="Apr"){
            month="April";
        }else if(d[1]=="May"){
            month="May";
        }else if(d[1]=="Jun"){
            month="June";
        }else if(d[1]=="Jul"){
            month="July";
        }else if(d[1]=="Aug"){
            month="August";
        }else if(d[1]=="Sep"){
            month="September";
        }else if(d[1]=="Oct"){
            month="October";
        }else if(d[1]=="Nov"){
            month="November";
        }else{
            month="December";
        }

        dateClass[i].innerHTML=d[2]+" "+month+" "+d[3]+", "+day;
    }
}
//class for the timetable data
class Timetable_data{
    constructor(periodName,periodTeacherName,periodStartingTime,periodEndingTime,periodLocation,periodType){
        this.periodName=periodName;
        this.periodTeacherName=periodTeacherName;
        this.periodStartingTime=periodStartingTime;
        this.periodEndingTime=periodEndingTime;
        this.periodLocation=periodLocation;
        this.periodType=periodType;
    }
}
//class for the subject data
class Subject_data{
    constructor(subjectName,subjectPresent,subjectAbsent,subjectCancelled){
        this.subjectName=subjectName;
        this.subjectPresent=subjectPresent;
        this.subjectAbsent=subjectAbsent;
        this.subjectCancelled=subjectCancelled;
    }
}
let timetable_Array=[];
let subject_array= [];
var timetableRetrievedObject = localStorage.getItem("Timetable_Array");
var subjectRetrievedObject = localStorage.getItem("Subject_Array");
var MondayList = JSON.parse(timetableRetrievedObject);


function arrangingMondayList(){
    var j = 0;
    while (j <= MondayList.length - 1) {
        var index = 0;
        let lowestTime =parseInt(MondayList[0].periodStartingTime.split(":")[0]);
        for(let i=0; i <= MondayList.length-1-j ; i++){
            let time = parseInt(MondayList[i].periodStartingTime.split(":")[0]);
            if( lowestTime > time) {
                lowestTime = time;
                index = i;
            }
        }
        j += 1  ;
        MondayList.push(MondayList[index]);
        MondayList.splice(index,1);
    }
    var startingTime = 8;
    for(let i=0;i<MondayList.length;i++){
        var time =
            parseInt(MondayList[0].periodStartingTime.split(":")[0]);
        if (time < startingTime) {
            MondayList.push(MondayList[0]);
            MondayList.shift();
        }else{
            break;
        }
    }
}
//Arranging the period according to timing
arrangingMondayList();

//Date displaying
datecollect();


function showDetail(id_no){
    var nameid = 'schedule-card-'+String(id_no)+'-name';
    var timeid = "schedule-card-"+  String(id_no)+ "-time";
    var locationid = "schedule-card-" + String(id_no) + "-location";
    document.getElementById('right-detail-subname').innerText =  document.getElementById(nameid).innerText;
    document.getElementById("right-detail-time").innerText =  'Timing - '+document.getElementById(timeid).innerText;
    document.getElementById("right-detail-location").innerText = 'Location - '+document.getElementById(locationid).innerText;
    var teacher;
    for(var b=0;b<MondayList.length;b++){
        if(MondayList[b].periodName == document.getElementById(nameid).innerText){
            teacher = MondayList[b].periodTeacherName;
        }
    }
    document.getElementById("right-detail-teacher").innerText = "Teacher's Name - " +  teacher;// MondayList[id_no].periodTeacherName;
}