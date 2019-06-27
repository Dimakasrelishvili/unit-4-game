



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

$(document).ready(function() {
    
     function main() {
    if(totalScore==mainNumber){
        win++;
    };
    if(totalScore>mainNumber){
        loses++;
         mainNumber =0;     
         crystal1 =0;
         crystal2 =0;
         crystal3 =0;
         crystal4 =0;
         totalScore =0;
         console.log(totalScore);
         console.log(win);
         console.log(losses);
       
       
    };};
$("#crystal1").on("click", function() {
        main()
        totalScore=totalScore+crystal1;
    });
    
    $("#crystal2").on("click", function() {
        totalScore=totalScore+crystal2;
        main()
    });
    
    $("#crystal3").on("click", function() {
        totalScore=totalScore+crystal3;
        main()
        
    });
    $("#crystal4").on("click", function() {
        totalScore=totalScore+crystal4;
        main()
    });
    
    
}); 














