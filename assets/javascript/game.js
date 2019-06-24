



var mainNumber =0;     
var crystal1 =0;
var crystal2 =0;
var crystal3 =0;
var crystal4 =0;
var totalScore =0;
var win =0;
var loses =0;


mainNumber = Math.floor(Math.random() * 101+19);
crystal1 = Math.floor(Math.random()*12+1);
crystal2 = Math.floor(Math.random()*12+1);
crystal3 = Math.floor(Math.random()*12+1);
crystal4 = Math.floor(Math.random()*12+1);
console.log(mainNumber);
console.log(crystal1)

$("#crystal1").on("click", function(event) {
    totalScore=totalScore+crystal1;
    console.log(totalScore);


});

$("#crystal2").on("click", function(event) {
    totalScore=totalScore+crystal2;
});

if(totalScore=mainNumber){
    wins++;
}
if(totalScore>mainNumber){
    loses++;
}















