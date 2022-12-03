const fs = require("fs");
const internal = require("stream");

const readInputAsArray = function (file) {
  let input = fs.readFileSync(file).toString("utf-8");
  let inputArray = input.split("\n");
  return inputArray;
};

/////////////////////////
// DAY 2
// 2a) My rock-paper-scissors score
// A = X = Rock = 1, B = Y = Paper = 2, C = Z = Scissors = 3
// loss = 0, draw = 3, win = 6

const Scores = {
  'A X': 4, // Rock - Rock -> draw
  'A Y': 8, // Rock - Paper -> win
  'A Z': 3, // Rock - Scissors -> loss
  'B X': 1, // Paper - Rock -> loss
  'B Y': 5, // Paper - Paper -> draw
  'B Z': 9, // Paper - Scissors -> win
  'C X': 7, // Scissors - Rock -> win
  'C Y': 2, // Scissors - Paper -> loss
  'C Z': 6, // Scissors - Scissors -> draw
}

let gamesArray = readInputAsArray("./day2_input.txt");

const day2a = function () {
  let myScore = 0;
  gamesArray.forEach(game => {
    if (game) {
      myScore = myScore + Scores[game];
    }
  })

  console.log(myScore);
  return myScore;
}

///// day 2: part 1 results
day2a(); // 13268

//-------------
// 2b) Corrected rules
// X = loss, Y = draw, Z = win

const CorrectedScores = {
  'A X': 3, // Rock - Scissors -> loss
  'B X': 1, // Paper - Rock -> loss
  'C X': 2, // Scissors - Paper -> loss
  'A Y': 4, // Rock - Rock -> draw
  'B Y': 5, // Paper - Paper -> draw
  'C Y': 6, // Scissors - Scissors -> draw
  'A Z': 8, // Rock - Paper -> win
  'B Z': 9, // Paper - Scissors -> win
  'C Z': 7, // Scissors - Rock -> win
}


const day2b = function () {
  let myScore = 0;
  gamesArray.forEach(game => {
    if (game) {
      myScore = myScore + CorrectedScores[game];
    }
  })

  console.log(myScore);
  return myScore;
}

///// day 2: part 2 results
day2b(); // 15508

//-------------
// Combined solution
const day2 = function (ScoringSystem) {
  let myScore = 0;
  gamesArray.forEach(game => {
    if (game) {
      myScore = myScore + ScoringSystem[game];
    }
  })

  console.log(myScore);
  return myScore;
}

day2(Scores); // 13268
day2(CorrectedScores); // 15508

