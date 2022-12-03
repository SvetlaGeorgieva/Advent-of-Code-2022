const fs = require("fs");

const readInputAsArray = function (file) {
  let input = fs.readFileSync(file).toString("utf-8");
  let inputArray = input.split("\n");
  return inputArray;
};

/////////////////////////
// DAY 1
// 1a) The elf with most snacks -> sum of the snacks

const day1a = function () {
  let elfSnacksArray = readInputAsArray("./day1_input.txt");

  let sum = 0;
  let maxCalories = 0;
  for (let i = 0; i < elfSnacksArray.length; i++) {
    if (elfSnacksArray[i] === '') {
      maxCalories = (sum > maxCalories) ? sum : maxCalories;
      sum = 0;
      continue;
    }

    const snackCalories = parseInt(elfSnacksArray[i]);
    sum = sum + snackCalories;
  }

  console.log(maxCalories); // 66186
  return maxCalories;
}

///// day 1: part 1 results
day1a(); // 66186

//-------------
// 1b) The top 3 elves with most snacks -> sum of the snacks

const day1b = function () {
  let elfSnacksArray = readInputAsArray("./day1_input.txt");

  let sum = 0;
  let listTotalCalories = [];
  for (let i = 0; i < elfSnacksArray.length; i++) {

    if (elfSnacksArray[i] === '') {
      listTotalCalories.push(sum);
      sum = 0;
      continue;
    }

    const snackCalories = parseInt(elfSnacksArray[i]);
    sum = sum + snackCalories;
  }

  listTotalCalories.sort((a, b) => b - a);
  const sumTop3ElfStash = listTotalCalories[0] + listTotalCalories[1] + listTotalCalories[2];
  console.log(listTotalCalories);
  console.log(sumTop3ElfStash); // 196804
  return sumTop3ElfStash;
}

///// day 1: part 2 results
day1b(); // 196804
