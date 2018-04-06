var goalNum;
var wins = 0;
var losses = 0;
var redGem;
var yellowGem;
var clearGem;
var greenGem;
var userSum = 0;

// define all functions
$(document).ready(function() {
  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function resetRound() {
    redGem = randomNum(1, 12);
    yellowGem = randomNum(1, 12);
    clearGem = randomNum(1, 12);
    greenGem = randomNum(1, 12);
    goalNum = randomNum(19, 120);
    $("#goal").text("Goal Number: " + goalNum);
    userSum = 0;
    $("#sum").text(userSum);
  }

  function gemClick(gemValue) {
    userSum += gemValue;
    $("#sum").text(userSum);
    checkStatus();
  }

  function checkStatus() {
    if (userSum === goalNum) {
      wins++;
      alert("Congratulations you've won!");
      resetRound();
      $("#wins").text("Wins : " + wins);     
    } else if (userSum > goalNum) {
      losses++;
      alert("Better luck next time!")
      resetRound();
      $("#losses").text("losses : " + losses);
    }
  }
  
  //click events
  resetRound();
  $("#goal").text("Goal Number : " + goalNum);
  $("#yellow").on("click", function() {
    gemClick(yellowGem);
  });

  $("#red").on("click", function() {
    gemClick(redGem);
  });

  $("#clear").on("click", function() {
    gemClick(clearGem);
  });

  $("#green").on("click", function() {
    gemClick(greenGem);
  });
});










