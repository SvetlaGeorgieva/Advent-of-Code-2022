const fs = require("fs");

const readInput = function (file) {
  let input = fs.readFileSync(file).toString("utf-8").trim();
  return input;
};

/////////////////////////
// DAY 6
// 6a) start-of-packet marker
const dataStream = readInput("./day6_input.txt");
// const dataStream = readInput("./sample.txt");
// console.log(dataStream);

function isUnique(str) {
  return new Set(str).size == str.length;
}

const day6a = function () {
  for (let i = 0; i < dataStream.length - 4; i++) {
    const fourLetterCode = dataStream.substring(i, i + 4);
    if (isUnique(fourLetterCode)) {
      let numProcessedCharacters = i + 4;
      console.log(numProcessedCharacters); // 1912
      return numProcessedCharacters;
    }
  }
}

///// day 6: part 1 results
day6a(); // 1912


//-------------
// 6b) first start-of-message marker

const day6b = function () {
  for (let i = 0; i < dataStream.length - 14; i++) {
    const fourLetterCode = dataStream.substring(i, i + 14);
    if (isUnique(fourLetterCode)) {
      let numProcessedCharacters = i + 14;
      console.log(numProcessedCharacters); // 2122
      return numProcessedCharacters;
    }
  }
}

///// day 6: part 2 results
day6b(); // 2122
