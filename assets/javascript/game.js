$(document).ready(function() {

 var totalScore =0;

var wins =0; 
var losses =0;
 function reset(){

mainNumber = Math.floor(Math.random() * 100+20);
crystal1 = Math.floor(Math.random()*12+1);
crystal2 = Math.floor(Math.random()*12+1);
crystal3 = Math.floor(Math.random()*12+1);
crystal4 = Math.floor(Math.random()*12+1);
$("#mainNumber").text("target number " +  mainNumber) 

totalScore=0
$("#totalScore").text("your total score" + "  " + totalScore) 

 }
 reset()



    // this function does not work inside onclick functions i dont know why
    function win() {
        wins++;
        $("#wins").text("your wins :" + wins) 
        $("#totalScore").text("your total score" + "  " + totalScore) 
        alert("good job winner !!!")
        reset()

    }
    function lose(){
        losses++;
        $("#losses").text("your losses :" + losses)
        $("#totalScore").text("your total score" + "  " + totalScore) 
        alert(" you can try again ! ")
        reset()
    }
 

    
    
    $("#crystal1").on("click", function() {
       
        totalScore = totalScore + crystal1  
        
        $("#totalScore").text("your total score" + "  " + totalScore) 
       
            
        if(totalScore == mainNumber){
            
            win();
        }
        else if (totalScore > mainNumber){
            lose();
        }  
    });
    
    $("#crystal2").on("click", function() {
       
        totalScore = totalScore + crystal2  
        
        $("#totalScore").text("your total score" + "  " + totalScore) 
       
            
        if(totalScore == mainNumber){
            
            win();
        }
        else if (totalScore > mainNumber){
            lose();
        }  
    });

    
    $("#crystal3").on("click", function() {
       
        totalScore = totalScore + crystal3  
        
        $("#totalScore").text("your total score" + "  " + totalScore) 
       
            
        if(totalScore == mainNumber){
            
            win();
        }
        else if (totalScore > mainNumber){
            lose();
        }  
    });
    
    
    $("#crystal4").on("click", function() {
       
        totalScore = totalScore + crystal4  
        
        $("#totalScore").text("your total score" + "  " + totalScore) 
       
            
        if(totalScore == mainNumber){
            
            win();
        }
        else if (totalScore > mainNumber){
            lose();
        }  
    });


        

})