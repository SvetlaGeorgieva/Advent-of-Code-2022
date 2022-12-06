const fs = require("fs");

const readInputAsArray = function (file) {
  let input = fs.readFileSync(file).toString("utf-8");
  let inputArray = input.split("\n");
  return inputArray;
};

/////////////////////////
// DAY 5
// 5a) Rearrange crates - crates on top

let data = readInputAsArray("./day5_input.txt");
// let data = readInputAsArray("./sample.txt");
const numStacks = (data[0].length + 1) / 4;

let stacksHeight = 0;
for (let rowNum = 0; rowNum < data.length; rowNum++) {
  const row = data[rowNum];
  if (!row.includes('[')) {
    // row with stack numbers
    stacksHeight = rowNum;
    break;
  }
}

const moves = data.splice(stacksHeight + 2).filter(elem => elem !== '');
const stackNumbersData = data.splice(stacksHeight).filter(elem => elem !== '');

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

const rotateMatrix90C = source => {
  // get the dimensions of the source matrix
  const M = source.length;
  const N = source[0].length;

  // create a new NxM destination array
  let destination = new Array(N);
  for (let i = 0; i < N; i++) {
    destination[i] = new Array(M);
  }

  // start copying from source into destination
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      destination[i][j] = source[M - j - 1][i];
    }
  }

  // return the destination matrix
  return destination;
};

const getCratesData = function (data) {
  data.splice(stacksHeight + 2).filter(elem => elem !== '');
  const stackNumbersData = data.splice(stacksHeight).filter(elem => elem !== '');
  const cratesData = data;
  // console.log('initial crates order: ', cratesData);
  // console.log('stack numbers: ', stackNumbersData);
  // console.log('first move: ', moves[0]);
  // console.log('last move: ', moves[moves.length - 1]);

  for (let row = 0; row < cratesData.length; row++) {
    cratesData[row] = toOrderedBoxes(cratesData[row]);
  }
  let stacksData = rotateMatrix90C(cratesData);
  stacksData.forEach(stack => {
    for (let i = stack.length - 1; i >= 0; i--) {
      if (stack[i] === '') {
        stack.pop();
      }
    }
  });
  return stacksData;
}

const stacksData = getCratesData(data);

const day5a = function () {

  moves.forEach(move => {
    let temp = move.split('move ');
    temp.shift();
    temp = temp[0].split(' from ');
    let numCratesToMove = temp[0];
    temp = temp[1].split(' to ');
    let fromStackNum = temp[0];
    let toStackNum = temp[1];
    let fromStackIndex = fromStackNum - 1;
    let toStackIndex = toStackNum - 1;

    for (let i = 1; i <= numCratesToMove; i++) {
      const crate = stacksData[fromStackIndex][stacksData[fromStackIndex].length - 1];
      stacksData[toStackIndex].push(crate);
      stacksData[fromStackIndex].pop();
    }

  });

  console.log('Final crates: ', stacksData);

  // Top crates:
  let topCrates = '';
  for (let i = 0; i < stacksData.length; i++) {
    topCrates += stacksData[i].pop();
  }

  console.log('Crates on top: ', topCrates); // QPJPLMNNR
};


///// day 5: part 1 results
// day5a(); // QPJPLMNNR


//-------------
// 5b) Pair assignments - any overlap
const day5b = function () {

  moves.forEach(move => {
    let temp = move.split('move ');
    temp.shift();
    temp = temp[0].split(' from ');
    let numCratesToMove = temp[0];
    temp = temp[1].split(' to ');
    let fromStackNum = temp[0];
    let toStackNum = temp[1];
    let fromStackIndex = fromStackNum - 1;
    let toStackIndex = toStackNum - 1;

    let cratesToMove = stacksData[fromStackIndex].splice(-numCratesToMove);

    cratesToMove.forEach(crate => {
      stacksData[toStackIndex].push(crate);
    });

  });

  console.log('Final crates: ', stacksData);

  // Top crates:
  let topCrates = '';
  for (let i = 0; i < stacksData.length; i++) {
    topCrates += stacksData[i].pop();
  }

  console.log('Crates on top: ', topCrates); // BQDNWJPVJ
};

///// day 5: part 2 results
day5b(); // BQDNWJPVJ
