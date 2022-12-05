const fs = require("fs");

const readInputAsArray = function (file) {
  let input = fs.readFileSync(file).toString("utf-8");
  let inputArray = input.split("\n");
  return inputArray;
  // return inputArray.filter(elem => elem !== '');
};

/////////////////////////
// DAY 5
// 5a) Rearrange crates - crates on top

const day5a = function () {
  // let data = readInputAsArray("./day5_input.txt");
  let data = readInputAsArray("./sample.txt");
  const numStacks = (data[0].length + 1) / 4;
  // console.log(numStacks);

  let stacksHeight = 0;
  for (let rowNum = 0; rowNum < data.length; rowNum++) {
    const row = data[rowNum];
    if (!row.includes('[')) {
      // row with stack numbers
      stacksHeight = rowNum;
      break;
    }
  }
  // console.log('stacksHeight: ', stacksHeight);

  const moves = data.splice(stacksHeight + 2).filter(elem => elem !== '');
  // console.log(data);
  const stacksData = data.splice(stacksHeight).filter(elem => elem !== '');
  const cratesData = data;
  console.log(cratesData);
  console.log(stacksData);
  console.log('first move: ', moves[0]);
  console.log('last move: ', moves[moves.length - 1]);

  for (let row = 0; row < cratesData.length; row++) {
    cratesData[row] = toOrderedBoxes(cratesData[row]);
  }

  console.log(cratesData);
};

const toOrderedBoxes = function (row) {
  let listCrates = [];
  for (let i = 0; i < row.length; i += 4) {
    if (row[i] === '[') {
      listCrates.push(row[i + 1]);
    } else {
      listCrates.push('');
    }
  }
  return listCrates;
};

///// day 5: part 1 results
day5a(); //
