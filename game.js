// // alert("game.js added");

// // console.log($("h1"));
// let gamePattern = [];
// let userClickedPattern = [];

// var started = false;
// let level = 0;

// let buttonColours = ["red", "blue", "green", "yellow"];

// function nextSequence() {
//   let randomNumber = Math.floor(Math.random() * 4);

//   let randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   $("#" + randomChosenColour)
//     .fadeOut(100)
//     .fadeIn(100)
//     .fadeOut(100)
//     .fadeIn(100);
//   playSound(randomChosenColour);

//   level++;
//   $("#level-title").text("Level " + level);

//   userClickedPattern = [];
// }

// function playSound(name) {
//   var audio = new Audio(`sounds/${name}.mp3`);

//   audio.play();
// }

// $(".btn").click(function () {
//   let userChosenColour = $(this).attr("id");

//   userClickedPattern.push(userChosenColour);

//   playSound(userChosenColour);
//   animatePress(userChosenColour);

//   checkAnswer(userClickedPattern.length - 1);
// });

// function animatePress(currentColour) {
//   $("#" + currentColour).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColour).removeClass("pressed");
//   }, 100);
// }

// $(document).keydown(function (event) {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });

// function checkAnswer(currentLevel) {
//   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//     if (gamePattern.length === userClickedPattern.length) {
//       setTimeout(function () {
//         nextSequence();
//       }, 1000);
//     }
//   } else {
//     playSound("wrong");
//     $(document.body).addClass("game-over");
//     setTimeout(function () {
//       $(document.body).removeClass("game-over");
//     }, 200);

//     $("#level-title").text("Game Over, Press Any Key to Restart");
//     startOver();
//   }
// }

// function startOver() {
//   level = 0;
//   gamePattern = [];
//   started = false;
// }
