const fs = require("fs");

const readInputAsArray = function (file) {
  let input = fs.readFileSync(file).toString("utf-8");
  let inputArray = input.split("\n");
  return inputArray.filter(elem => elem !== '');
};

/////////////////////////
// DAY 4
// 4a) Pair assignments - full overlap

let assignments = readInputAsArray("./day4_input.txt");

const day4a = function () {
  let numFullOverlaps = 0;
  assignments.forEach(pair => {
    let sections = pair.split(',');
    sectionsA = sections[0].split('-');
    sectionsB = sections[1].split('-');

    let a1 = parseInt(sectionsA[0]);
    let a2 = parseInt(sectionsA[1]);
    let b1 = parseInt(sectionsB[0]);
    let b2 = parseInt(sectionsB[1]);

    // has a full overlap if:
    // a1 == b1 => Y
    // a1 >= b1 & a2 <= b2 => Y
    // a1 <= b1 & a2 >= b2 => Y

    if ((a1 === b1)
      || (a1 >= b1 && a2 <= b2)
      || (a1 <= b1 && a2 >= b2)) {
      numFullOverlaps++;
    }
  });

  console.log(numFullOverlaps); // 569
  return numFullOverlaps;
}

///// day 4: part 1 results
day4a(); // 569

//-------------
// 4b) Pair assignments - any overlap
const day4b = function () {
  let numOverlaps = 0;
  assignments.forEach(pair => {
    let sections = pair.split(',');
    sectionsA = sections[0].split('-');
    sectionsB = sections[1].split('-');

    let a1 = parseInt(sectionsA[0]);
    let a2 = parseInt(sectionsA[1]);
    let b1 = parseInt(sectionsB[0]);
    let b2 = parseInt(sectionsB[1]);

    // has a partial overlap if:
    // a1 <= b1 & a2 >= b1 => Y
    // b1 <= a1 & b2 >= a1 => Y

    // 
    if ((a1 <= b1 && a2 >= b1)
      || (b1 <= a1 && b2 >= a1)) {
      numOverlaps++;
    }
  });

  console.log(numOverlaps); // 936
  return numOverlaps;
}

///// day 4: part 2 results
day4b(); // 936
