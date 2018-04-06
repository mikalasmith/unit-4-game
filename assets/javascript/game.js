//define all variables
var goalNum;
var wins = 0;
var losses = 0;
var redGem;
var yellowGem;
var clearGem;
var greenGem;
var userSum ;

// define all functions
$( document ).ready(function() {
    function randomNum(min,max) {
        return Math.floor(Math.random()*((max-min)+1)+min) 
    }


    function resetRound() {
        redGem = randomNum(1,12);
        // attach this value to the corresponding button element
        $('#red').attr('data-value', redGem);

        yellowGem = randomNum(1,12);
        clearGem = randomNum(1,12);
        greenGem = randomNum(1,12);
        goalNum = randomNum (19, 120);
        userSum = 0; 
    }
    

    function checkStatus() {
        if (userSum === goalNum){
            wins++;
            console.log(wins)
            resetRound();      
        } else if(userSum > goalNum){
            losses++;
            console.log(losses)
            resetRound();
        }  
    }

    // function newGame(){
    //     goalNum = randomNum(19,120);
    //     $ ("#goal").text(goalNum);
    //     redGem =0;
    //     yellowGem =0;
    //     clearGem=0;
    //     greenGem=0;
    // }
    // funtion that will reset each round of the game, without refreshing the page.


    function gemClick (gemValue) {
        userSum =+ gemValue;
        checkStatus();
    } 

    //click events
    resetRound();

    $("#yellow").on("click",function(){
        console.log("what is $(this)?", $(this));
        gemClick($(this));  
        $("#sum").text(userSum);
    });

    $("#red").on("click",function(){
        console.log("what is $(this)?", $(this));
        gemClick($(this));    
        $("#sum").text(userSum);
    });

    $("#clear").on("click",function(){
        console.log("what is $(this)?", $(this));
        gemClick($(this));    
        $("#sum").text(userSum);
    });

    $("#green").on("click",function(){
        console.log("what is $(this)?", $(this));
        gemClick($(this));    
        $("#sum").text(userSum);
    });
            
 });
  










