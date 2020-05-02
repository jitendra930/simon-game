buttonColours = ["red", "blue", "green", "yellow"];
userClickedPattern = [];
gamePattern = [];

function nextSequence() {
  userClickedPattern = [];
  randomNumber = (Math.random() * 4);
  randomChosenColour = buttonColours[Math.floor(randomNumber)];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn("slow");

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
  level = level + 1;
  $("h1").html("Level " + level);

}
////////////////////////////////////////for click//////////////////////////////////////////////////////
$(".btn").click(function() {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  var audio = new Audio("sounds/" + userChosenColour + ".mp3");//for audio for different inputs btn//
  audio.play();
  $("#" + userChosenColour).fadeOut(100).fadeIn("slow");//for fading of a button on click//

  checkAnswer(userClickedPattern.length-1);//for checking answer for each input click//

});
/////////////////for start a game we press any keyboard key/////////////////////
level = 0;
$(document).bind("keydown", function() {//start when any keyboard press//
  if (level == 0) {
    nextSequence();
  }
});


function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel]===userClickedPattern[currentLevel]){//check click answer with per click from gamepattern//
    if (gamePattern.length===userClickedPattern.length){//count length of the array//
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  }
if (gamePattern[currentLevel]!==userClickedPattern[currentLevel]){//for wrong answer //
  var audio = new Audio("sounds/wrong.mp3");
  audio.play();
  $("body").addClass("game-over");//add game-over class to body//
  $("h1").html("Game Over");
  //$(document).bind("keypress", function(){

    setTimeout(function () {
      startOver();
    }, 2000);
  //});
}}

function startOver(){//for restart game//
  level=0;
  gamePattern=[];
  userClickedPattern=[];
  $("h1").html("Press A Key to Start");
    $("body").removeClass("game-over");
    //nextSequence();

}
