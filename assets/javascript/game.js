

     $( document ).ready(function() {
         console.log( "document loaded" );
     });
  
     $( window ).on( "load", function() {
         console.log( "window loaded" );
        resetRound();
     });




//define all variables
var goalNum;
var wins = 0;
var losses = 0;
var redGem;
var yellowGem;
var clearGem;
var greenGem;
var userSum = 0;


// define all functions

function randomNum(min,max) {
    return Math.floor(Math.random()*((max-min)+1)+min) 
}

//yellowGem = randomNum(1,12);
//console.log(yellowGem);


function checkStatus() {
    if (userSum === goalNum){
    wins++;
    resetRound();
} else if (userSum > goalNum) {
    losses++;
    resetRound();
}
console.log("checkstatus");
console.log("user sum="+ userSum);
}

// funtion that will reset each round of the game, without refreshing the page.
function resetRound() {
    redGem = randomNum(1,12);
    yellowGem = randomNum(1,12);
    clearGem = randomNum(1,12);
    greenGem = randomNum(1,12);
    goalNum = randomNum (19, 120);
    userSum = 0; 
    console.log("resetround");
}

resetRound();

function gemClick (gem) {
    userSum =+ gem;
    checkStatus();
    console.log("gemclick")
}

//click events
console.log(yellowGem);
 $ ("button").on("click", "#yellow", gemClick(yellowGem));


//when click on gem
