function calculateCurrentGrade() {
var asses1= document.getElementById("AssessmentWeight").value;
var asses2= document.getElementById("AssessmentPoints").value;
var clswrk1= document.getElementById("ClassworkWeight").value;
var clswrk2= document.getElementById("ClassworkPoints").value;
var hw1= document.getElementById("HomeworkWeight").value;
var hw2= document.getElementById("HomeworkPoints").value;
var parti1= document.getElementById("ParticipationWeight").value;
var parti2= document.getElementById("ParticipationPoints").value;

var asses2Array= convertArrayStringToNumber(asses2);
var clswrk2Array= convertArrayStringToNumber(clswrk2);
var hw2Array= convertArrayStringToNumber(hw2);
var parti2Array= convertArrayStringToNumber(parti2);

var asses1Array= averageArray(asses2Array);
var clswrk1Array= averageArray(clswrk2Array);
var hw1Array= averageArray(hw2Array);
var parti1Array= averageArray(parti2Array);

var points= parseInt(asses1Array)+parseInt(clswrk1Array)+parseInt(hw1Array)+parseInt(parti1Array);
var asses= asses1Array/points;
var clswrk= clswrk1Array/points;
var hw= hw1Array/points;
var parti= parti1Array/points;

var grd= (asses*asses2Array)+(clswrk*clswrk2Array)+(hw*hw2Array)+(parti*parti2Array)+ "%";
console.log(grd);
document.getElementById("currentgrade").innerHTML= "Your current grade is " + grd;
document.getElementById("CurrentGrade3").innerHTML= "To find out what you need on the final, enter your final weight and your current grade!";

color(asses1Array, document.getElementById("p1"));
color(clswrk1Array, document.getElementById("p2"));
color(hw1Array, document.getElementById("p3"));
color(parti1Array, document.getElementById("p4"));



}

function convertArrayStringToNumber(str) {
    var arr = str.split(",");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i])
    }
    return arr;
}



function averageArray(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}



function calculateGradeNeeded(){
    var crgrd= document.getElementById("CurrentGrade2").value;
    var grdwntd= document.getElementById("GradeWanted").value;
    var fnlprct= document.getElementById("FinalsPercentWorth").value;
    var fnl= fnlprct/100;
    var final= ((grdwntd-((1-fnl)*crgrd))/fnlprct)*100;
    if(final>100){
        document.getElementById("x").innerHTML= "You will need to get at least a "+final+ "% in order to get a "+grdwntd+ " Hey grades don't really matter anyway!";
    }
    else if(final<60){
        document.getElementById("x").innerHTML="You will need to get at least a "+final+ "% in order to get a "+grdwntd+ " Looks like you won't have to do much studying!";
    }
    else{
        document.getElementById("x").innerHTML= "You will need to get at least a "+final+ "% in order to get a "+grdwntd+ " Good luck!";
    }

}

function color(xyz,element){
    if(xyz<60){
        element.style.background="red";
    }
     else if(xyz<70){
        element.style.background="lavender";
    }
    else if(xyz<80){
        element.style.background="yellow";
    }
    else if(xyz<90){
        element.style.background="green";
    }
    else{
        element.style.background="pink";
    }
}




