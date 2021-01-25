
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
var newButton1 = $("<button>");
var newButton2 = $("<button>");
var newButton3 = $("<button>");
var newButton4 = $("<button>");
var newButton5 = $("<button>");
var newButton6 = $("<button>");
var newButton7 = $("<button>");
var newButton8 = $("<button>");
var newButton9 = $("<button>");
var newButton10 = $("<button>");
var inputs = document.getElementById("inputs");
var x = 0;
var button = $("<button>");

divArray1 = [newDiv1,newDiv2,newDiv3,newDiv4,newDiv5,newDiv6,newDiv7,newDiv8,newDiv9,newDiv10];
divArray2 = [newDiv11,newDiv12,newDiv13,newDiv14,newDiv15,newDiv16,newDiv17,newDiv18,newDiv19,newDiv20];
newTextArray = [newText1,newText2,newText3,newText4,newText5,newText6,newText7,newText8,newText9,newText10];
newButttonArray = [newButton1,newButton2,newButton3,newButton4,newButton5,newButton6,newButton7,newButton8,newButton9,newButton10]
hoursOfDay = ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"];
idArray = ["#0","#1","#2","#3","#4","#5","#6","#7","#8"]

$("#currentDay").text(moment().format("dddd, MMMM Do"));

init();

for (var i = 0; i<hoursOfDay.length; i++) {
    $(".container").append(divArray1[i]);
    divArray1[i].append(divArray2[i]);
    divArray1[i].addClass("row");
    divArray2[i].addClass("hour col-1");
    divArray2[i].text(hoursOfDay[x]);
    var n = (parseSubString(hoursOfDay[x]));
    var ppf = pastPresentFuture(n);
    x++;
    divArray1[i].append(newTextArray[i]);
    newTextArray[i].addClass("hour col-10");
    newTextArray[i].attr('id', inputs)
    if(ppf == "past") {
        newTextArray[i].addClass("past");
    } else if (ppf=="present") {
        newTextArray[i].addClass("present");
        } else {
            newTextArray[i].addClass("future");
        }

    (divArray1[i]).append(newButttonArray[i]);
    newButttonArray[i].addClass("saveBtn i:hover col-1 fas fa-lock");
    newButttonArray[i].attr('id',i);

}

$(".saveBtn").on("click", function () {
    var textEntries = [];
    var textMemory = [];
    for (var i = 0; i<hoursOfDay.length; i++) {
        textEntries[i] = newTextArray[i].val();
        localStorage.setItem("input"+i, textEntries[i]); 
    };
});

function init() {
    for (var i = 0; i<newTextArray.length; i++) {
        newTextArray[i].text(localStorage.getItem("input"+i));
        console.log(localStorage.getItem("input1"));
    }
}        

function parseSubString (y) {
    return parseInt(y.substring(0,2));
}

function pastPresentFuture (z) {
    const m = (moment().format('HH:mmA'));
    var int = (parseInt(m));
    if(z<int){
        return("past");
    } else if (z === int){
        return("present");
    } else {
        return("future");
    }
} 
