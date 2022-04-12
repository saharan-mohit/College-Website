console.log(subject_Array)

var charData_labels = [];
var charData_present = [];
var charData_absent = [];
var charData_cancel = [];
for(var i=0;i<subject_Array.length;i++){
    charData_labels.push(subject_Array[i].subjectName);
    charData_present.push(subject_Array[i].subjectPresent);
    charData_absent.push(subject_Array[i].subjectAbsent);
    charData_cancel.push(subject_Array[i].subjectCancelled);
}

var chartData = {
    labels: charData_labels ,//['Sub1', 'sub2', 'sub3', 'sub4','sub5'],
    datasets: [{
        type: 'line',
        label: 'Percentage',
        backgroundColor: 'rgba(255, 244, 87, 1)',
        borderColor:'rgba(255,244,87, 1)',
        borderWidth: 0,
        fill: true,
        data:  [5,7,8,5,5]
    }, {
        type: 'bar',
        label: 'Present',
        backgroundColor: 'rgba(0, 195, 255,1)',
        borderColor:'white',
        data: charData_present ,// [5,6,3,8,6],
        borderWidth: 2
    }, {
        type: 'bar',
        label: 'Absent',
        backgroundColor: 'rgb(128, 128, 128)',
        borderColor:'white',
        borderWidth:2,
        data: charData_absent// [1,2,3,1,2]
    }]

};
var data = {
    datasets: [{
        data: [20,30],
        backgroundColor:['rgba(152, 211, 250,1)','#1b262c'],
        borderWidth:0
        
    }],
    labels: [
        'Present',
        'Total',
        // 'Cancel'
    ]
};
var subjectdata=[
    [100, 50, 65, 69, 73, 80],
    [80, 73, 69, 65, 73, 85],
    [95, 85, 69, 70, 73, 90],
    [100, 75, 77, 82, 85, 80],
    [98, 80, 85, 91, 93, 97],
    [80, 75, 85, 69, 73, 100],
    [100, 50, 65, 69, 73, 80],
    [80, 73, 69, 65, 73, 85],
    [95, 85, 69, 70, 73, 90],
    [100, 75, 77, 82, 85, 80],
    [98, 80, 85, 91, 93, 97],
    [80, 75, 85, 69, 73, 100]
];
var myDoughnutChart;
window.onload = function() {
    var ctx = document.getElementById('myChart').getContext('2d');
	window.myMixedChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            responsive: true,
            title: {
                display: false,
                text: 'Chart.js Combo Bar Line Chart'
            },
            tooltips: {
                mode: 'index',
                intersect: true
            },
            scales: {
                xAxes: [{
                    ticks:{
                        fontColor:'#bbe1fa'
                    },
                    gridLines:{
                        display:false,
                        drawBorder:false
                    }
                }],
                yAxes: [{
                    display:false,
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend:{
                position:'top',
                labels:{
                    boxWidth:10,
                    fontColor:'white'
                }
            },
            animation:{
                animateScale:true
            }
        }
    });
    var ctx2 = document.getElementById('subchart');
    var myChart = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            datasets: [{
                label: 'Attendance %',
                data: [100, 50, 65, 69, 73, 80],
                backgroundColor: 'rgba(152, 211, 250,0.2)',
                borderColor: 'rgba(152, 211, 250,1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    ticks:{
                        fontColor:'#bbe1fa'
                    }
                }],
                yAxes: [{
                    display:false,
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend:{
                position:'top',
                labels:{
                    boxWidth:10,
                    fontColor:'white'
                }
            },
            animation:{
                animateScale:true
            }
        }
    });
    
    var ctx4 = document.getElementById('radarChart').getContext('2d');
    var myRadarChart = new Chart(ctx4, {
        type: 'radar',
        data: {
            labels: ['C O A', 'C O M P', 'C O M', 'M A T H S','O O P S','C S E'],
            datasets: [{
                label: 'Percentage %',
                backgroundColor: 'rgba(152, 211, 250,0.2)',
                borderColor: 'rgba(152, 211, 250,1)',
                pointBackgroundColor: 'rgba(152, 211, 250,1)',
                data: [92,70,66,90,75,80],
            }]
        },
        options: {
            legend: {
                display:false,
                position: 'top',
            },
            title: {
                display: false,
                text: 'Attendance Chart'
            },
            scale: {
                ticks: {
                    beginAtZero: true,
                    display:false,
                    fontColor:'white',
                    backdropColor:'transparent'
                },
                gridLines:{
                    color:'rgba(255, 225, 255,0.1)'
                },
                pointLabels:{
                    fontColor:'white'
                }
                
            },
            
        }
    });    
};
function schedule(){
    console.log("schedule is clicked");
    document.getElementsByClassName('menu-dashboard')[0].style.display="none";
    document.getElementsByClassName('menu-schedule')[0].style.display="inline";
    document.getElementsByClassName('menu-timetable')[0].style.display="none";
    document.getElementsByClassName('menu-subjects')[0].style.display="none";
    document.getElementsByClassName('menu-notification')[0].style.display="none";
    document.getElementsByClassName('menu-events')[0].style.display="none";
    var ctx3 = document.getElementsByClassName('schedule-subject-card-bar');
    var k=0;
    for(let i=0;i<MondayList.length;i++){
        if(MondayList[i].periodType==1){
            for(let j=0;j<subject_Array.length;j++){
                console.log("Monday list period name"+MondayList[i].periodName);
                if(MondayList[i].periodName==subject_Array[j].subjectName){
                    var total_classes = subject_Array[j].subjectAbsent + subject_Array[j].subjectCancelled;
                    var present = subject_Array[j].subjectPresent;
                }
            }
            var myDoughnutCharts = new Chart(ctx3[k], {
                type: 'doughnut',
                data:  {
                    datasets: [{
                        data: [present,total_classes],
                        backgroundColor:['rgba(152, 211, 250,1)','#1b262c'],
                        borderWidth:0
                        
                    }],
                    labels: [
                        'Present',
                        'Total',
                    ]
                },
                options: {
                    cutoutPercentage:70,
                    rotation:Math.PI*1.5,
                    title:{
                        display:false
                    },
                    legend:{
                        display:false
                    },
                    animation:{
                        animateScale:true
                    }
                }
            });
            k++;
        }
    }
}
function subjects(){
    console.log("subjects is clicked");
    document.getElementsByClassName('menu-dashboard')[0].style.display="none";
    document.getElementsByClassName('menu-schedule')[0].style.display="none";
    document.getElementsByClassName('menu-timetable')[0].style.display="none";
    document.getElementsByClassName('menu-subjects')[0].style.display="block";
    document.getElementsByClassName('menu-notification')[0].style.display="none";
    document.getElementsByClassName('menu-events')[0].style.display="none";
    var ctx5 = document.getElementsByClassName('menu-subject-linebar');
    for(let i=0;i<ctx5.length;i++){
        var mysubjectChart = new Chart(ctx5[i], {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                datasets: [{
                    label: 'Attendance %',
                    data: subjectdata[i],
                    backgroundColor: 'rgba(152, 211, 250,0.2)',
                    borderColor: 'rgba(152, 211, 250,1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        ticks:{
                            fontColor:'#bbe1fa'
                        }
                    }],
                    yAxes: [{
                        display:false,
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                legend:{
                    position:'top',
                    labels:{
                        boxWidth:10,
                        fontColor:'white'
                    }
                },
                animation:{
                    animateScale:true
                }
            }
        });
    }
}
function dashboard(){
    console.log("dashboard is clicked");
    document.getElementsByClassName('menu-dashboard')[0].style.display= "block";
    document.getElementsByClassName('menu-schedule')[0].style.display="none";
    document.getElementsByClassName('menu-timetable')[0].style.display="none";
    document.getElementsByClassName('menu-subjects')[0].style.display="none";
    document.getElementsByClassName('menu-notification')[0].style.display="none";
    document.getElementsByClassName('menu-events')[0].style.display="none";
    var ctx = document.getElementById('myChart').getContext('2d');
	window.myMixedChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            responsive: true,
            title: {
                display: false,
                text: 'Chart.js Combo Bar Line Chart'
            },
            tooltips: {
                mode: 'index',
                intersect: true
            },
            scales: {
                xAxes: [{
                    ticks:{
                        fontColor:'#bbe1fa'
                    },
                    gridLines:{
                        display:false,
                        drawBorder:false
                    }
                }],
                yAxes: [{
                    display:false,
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend:{
                position:'top',
                labels:{
                    boxWidth:10,
                    fontColor:'white'
                }
            },
            animation:{
                animateScale:true
            }
        }
    });
    var ctx4 = document.getElementById('radarChart').getContext('2d');
    var myRadarChart = new Chart(ctx4, {
        type: 'radar',
        data: {
            labels: ['C O A', 'C O M P', 'C O M', 'M A T H S','O O P S','C S E'],
            datasets: [{
                label: 'Percentage %',
                backgroundColor: 'rgba(152, 211, 250,0.2)',
                borderColor: 'rgba(152, 211, 250,1)',
                pointBackgroundColor: 'rgba(152, 211, 250,1)',
                data: [92,70,66,90,75,80],
            }]
        },
        options: {
            legend: {
                display:false,
                position: 'top',
            },
            title: {
                display: false,
                text: 'Attendance Chart'
            },
            scale: {
                ticks: {
                    beginAtZero: true,
                    display:false,
                    fontColor:'white',
                    backdropColor:'transparent'
                },
                gridLines:{
                    color:'rgba(255, 225, 255,0.1)'
                },
                pointLabels:{
                    fontColor:'white'
                }
                
            },
            
        }
    });
}
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
   var ctx2 = document.getElementById('subchart');
    var myChart = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            datasets: [{
                label: 'Attendance %',
                data: subjectdata[id_no],
                backgroundColor: 'rgba(152, 211, 250,0.2)',
                borderColor: 'rgba(152, 211, 250,1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    ticks:{
                        fontColor:'#bbe1fa'
                    }
                }],
                yAxes: [{
                    display:false,
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend:{
                position:'top',
                labels:{
                    boxWidth:10,
                    fontColor:'white'
                }
            },
            animation:{
                animateScale:true
            }
        }
    });
}


    
 