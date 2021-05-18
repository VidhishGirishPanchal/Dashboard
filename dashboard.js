$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});
// ========================CALENDAR========================
let dt = new Date();

function renderDate() {
    let dateString = new Date();

    dt.setDate(1);
    let day = dt.getDay();

    let endDate = new Date(
        dt.getFullYear(),
        dt.getMonth() + 1,
        0
    ).getDate();

    let prevDate = new Date(
        dt.getFullYear(),
        dt.getMonth(),
        0
    ).getDate();

    let today = new Date();

    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    document.getElementById("icalendarMonth").innerHTML = months[dt.getMonth()] + " , " + dt.getFullYear();
    document.getElementById("icalendarDateStr").innerHTML = dateString.toDateString();

    let cells = "";
    let countDate = 0;

    for (let x = day; x > 0; x--) {
        cells += "<div class='icalendar__prev-date'>" + (prevDate - x + 1) + "</div>";
    }

    for (let i = 1; i <= endDate; i++) {
        if (i === today.getDate() && dt.getMonth() === today.getMonth() && dt.getFullYear() === today.getFullYear()) {
            cells += "<div class='icalendar__today'>" + i + "</div>";
        } else {
            cells += "<div>" + i + "</div>";
        }

        countDate = i;
    }

    let reservedDateCells = countDate + day + 1;
    for (let j1 = reservedDateCells, j2 = 1; j1 <= 42; j1++, j2++) {
        cells += "<div class='icalendar__next-date'>" + j2 + "</div>";
    }

    document.getElementsByClassName("icalendar__days")[0].innerHTML = cells;
}

renderDate();


function moveDate(param) {
    if (param === 'prev') {
        dt.setMonth(dt.getMonth() - 1);
    } else if (param === 'next') {
        dt.setMonth(dt.getMonth() + 1);
    }

    renderDate();
}

// =============================SPLINE AREA CHART=============================
// window.onload = function () {

//     var options = {
//         exportEnabled: true,
//         animationEnabled: true,
//         title: {
//             text: "Spent Time(hrs/week)"
//         },
//         axisY: {
//                         title: "Hours in Week",
                       
//                         suffix: "hr",
//                         prefix: ""
//                     },
//         axisX: {
//             title: "Weeks",   
//             suffix: "w"   
//         },
//         data: [
//         {
//             type: "splineArea",
//             dataPoints: [
//                 { y: 10 },
//                 { y: 6 },
//                 { y: 14 },
//                 { y: 12 },
//                 { y: 19 },
//                 { y: 14 },
//                 { y: 26 },
//                 { y: 10 },
//                 { y: 22 }
//             ]
//         }
//         ]
//     };
//     $("#chartContainer1").CanvasJSChart(options);
    
//     }

    var chart1 = new CanvasJS.Chart
    ("chartContainer1", {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Spent Time(hrs/week)"
        },
        axisY: {
                        title: "Hours in Week",
                       
                        suffix: "hr",
                        prefix: ""
                    },
        axisX: {
            title: "Weeks",   
            suffix: "w"   
        },
        data: [
        {
            type: "splineArea",
            dataPoints: [
                { y: 10 },
                { y: 6 },
                { y: 14 },
                { y: 12 },
                { y: 19 },
                { y: 14 },
                { y: 26 },
                { y: 10 },
                { y: 22 }
            ]
        }
        ]
    });
// ======================PIECHART======================
// window.onload = function() {

//     var options = {
//         title: {
//             text: "Website Traffic Source"
//         },
//         data: [{
//                 type: "pie",
//                 startAngle: 45,
//                 showInLegend: "true",
//                 legendText: "{label}",
//                 indexLabel: "{label} ({y})",
//                 yValueFormatString:"#,##0.#"%"",
//                 dataPoints: [
//                     { label: "Organic", y: 36 },
//                     { label: "Email Marketing", y: 31 },
//                     { label: "Referrals", y: 7 },
//                     { label: "Twitter", y: 7 },
//                     { label: "Facebook", y: 6 },
//                     { label: "Google", y: 10 },
//                     { label: "Others", y: 3 }
//                 ]
//         }]
//     };
//     $("#chartContainer2").CanvasJSChart(options);
    
//     }
var chart2 = new CanvasJS.Chart
    ("chartContainer2", {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Skills"
        },
        data: [{
                type: "pie",
                startAngle: 45,
                showInLegend: "true",
                legendText: "{label}",
                indexLabel: "{label} ({y})",
                yValueFormatString:"#,##0.#"%"",
                dataPoints: [
                    { label: "Math", y: 36 },
                    { label: "Sci", y: 31 },
                    { label: "Eng", y: 7 },
                    { label: "His", y: 7 },
                    { label: "Geo", y: 6 },
                    { label: "Com", y: 10 },
                    { label: "Art", y: 3 }
                ]
        }]
    });

    chart1.render();
    chart2.render();

//    ===========================BOOKMARK==============================
    $('#bookmark').on('click',function(){
        
    });   