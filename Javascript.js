$("#currentDay").text(moment().format("dddd, MMMM Do"));

//newDivArray["<div>", "<div>","<div>","<div>","<div>","<div>","<div>","<div>","<div>"];
//var newDiv;
var newDiv1 = $("<div>");
var newDiv2 = $("<div>");
var newDiv3 = $("<div>");
var newDiv4 = $("<div>");
var newDiv5 = $("<div>");
var newDiv6 = $("<div>");
var newDiv7 = $("<div>");
var newDiv8 = $("<div>");
var newDiv9 = $("<div>");
var newDiv10 = $("<div>");
var newDiv11 = $("<div>");
var newDiv12 = $("<div>");
var newDiv13 = $("<div>");
var newDiv14 = $("<div>");
var newDiv15 = $("<div>");
var newDiv16 = $("<div>");
var newDiv17 = $("<div>");
var newDiv18 = $("<div>");
var newDiv19 = $("<div>");
var newDiv20 = $("<div>");
var newText1 = $("<textarea>");
var newText2 = $("<textarea>");
var newText3 = $("<textarea>");
var newText4 = $("<textarea>");
var newText5 = $("<textarea>");
var newText6 = $("<textarea>");
var newText7 = $("<textarea>");
var newText8 = $("<textarea>");
var newText9 = $("<textarea>");
var newText10 = $("<textarea>");



var x = 0;

var textInput = $("<textarea>");
var button = $("<button>");

divArray1 = [newDiv1,newDiv2,newDiv3,newDiv4,newDiv5,newDiv6,newDiv7,newDiv8,newDiv9,newDiv10];
divArray2 = [newDiv11,newDiv12,newDiv13,newDiv14,newDiv15,newDiv16,newDiv17,newDiv18,newDiv19,newDiv20];
newTextArray = [newText1,newText2,newText3,newText4,newText5,newText6,newText7,newText8,newText9,newText10];
hoursOfDay = ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"];

for (var i = 0; i<hoursOfDay.length; i++) {
    $(".container").append(divArray1[i]);
    divArray1[i].append(divArray2[i]);
    divArray1[i].addClass("row");
    divArray2[i].addClass("hour col-1");
    divArray2[i].text(hoursOfDay[x]);
    //console.log(hoursOfDay[x].substring(0,2));
    var n = (parseSubString(hoursOfDay[x]));
    var ppf = pastPresentFuture(n);
    x++;
    divArray1[i].append(newTextArray[i]);
    newTextArray[i].addClass("hour col-10");
    if(ppf == "past") {
        newTextArray[i].addClass("past");
    } else if (ppf=="present") {
        newTextArray[i].addClass("present");
    } else {
        newTextArray[i].addClass("future");
    }
    (divArray1[i]).append("<button>");
    $("button").addClass("saveBtn i:hover col-1 fas fa-lock");
}


function parseSubString (y) {
    return parseInt(y.substring(0,2));
}

function pastPresentFuture (z) {
    //converting moments into an integer
    const m = (moment().format('HH:mmA'));
    console.log(m);
    var int = (parseInt(m));
    if(z<int){
        return("past");
    } else if (z === int){
        return("present");
    } else {
        return("future");
    }
} 
