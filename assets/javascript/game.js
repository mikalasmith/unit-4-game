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

//yellowGem = randomNum(1,12);
//console.log(yellowGem);
//function resetRound() {
    //redGem = randomNum(1,12);
    //yellowGem = randomNum(1,12);
    //clearGem = randomNum(1,12);
    //greenGem = randomNum(1,12);
   // goalNum = randomNum (19, 120);
    //userSum = 0; 
    //console.log(redGem, yellowGem, clearGem, greenGem, goalNum);
//}
//resetRound();

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

console.log("user sum="+ userSum);
}

function newGame(){
    goalNum = randomNum(19,120);
    $ ("#goal").text(goalNum);
    redGem =0;
    yellowGem =0;
    clearGem=0;
    greenGem=0;
}
// funtion that will reset each round of the game, without refreshing the page.


// function gemClick (gem) {
//     console.log()
//     userSum =+ gem;
//     alert("gem clicked"+gem)
//     console.log(userSum);
//     checkStatus();
//     console.log("gemclick")

// }function gemClick (gem) {
//     console.log()
//     userSum =+ gem;
//     alert("gem clicked"+gem)
//     console.log(userSum);
//     checkStatus();
//     console.log("gemclick")
// }


//click events

    $("#yellow").on("click",function(){
        console.log('hi')
if(yellowGem===0){
    yellowGem = randomNum(1,12);
    $("#yellow").text($(this).text());
    console.log(yellowGem);
}
userSum+=yellowGem;
$("#sum").text(userSum);
    });


      
         







 });
  










//when click on gem
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

//yellowGem = randomNum(1,12);
//console.log(yellowGem);
//function resetRound() {
    //redGem = randomNum(1,12);
    //yellowGem = randomNum(1,12);
    //clearGem = randomNum(1,12);
    //greenGem = randomNum(1,12);
   // goalNum = randomNum (19, 120);
    //userSum = 0; 
    //console.log(redGem, yellowGem, clearGem, greenGem, goalNum);
//}
//resetRound();

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

console.log("user sum="+ userSum);
}

function newGame(){
    goalNum = randomNum(19,120);
    $ ("#goal").text(goalNum);
    redGem =0;
    yellowGem =0;
    clearGem=0;
    greenGem=0;
}
// funtion that will reset each round of the game, without refreshing the page.


// function gemClick (gem) {
//     console.log()
//     userSum =+ gem;
//     alert("gem clicked"+gem)
//     console.log(userSum);
//     checkStatus();
//     console.log("gemclick")

// }function gemClick (gem) {
//     console.log()
//     userSum =+ gem;
//     alert("gem clicked"+gem)
//     console.log(userSum);
//     checkStatus();
//     console.log("gemclick")
// }


//click events

    $("#yellow").on("click",function(){
        console.log('hi')
if(yellowGem===0){
    yellowGem = randomNum(1,12);
    $("#yellow").text($(this).text());
    console.log(yellowGem);
}
userSum+=yellowGem;
$("#sum").text(userSum);
    });


      
         







 });
  










//when click on gem
