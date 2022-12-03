const fs = require("fs");

const readInputAsArray = function (file) {
  let input = fs.readFileSync(file).toString("utf-8");
  let inputArray = input.split("\n");
  return inputArray;
};

/////////////////////////
// DAY 3
// 3a) Rearrange items priority sum

/*
// For 'a' -> char code = 97; 'a' should be = 1
// => For a to z => code minus 96
console.log('a'.charCodeAt(0)); // 97
console.log('b'.charCodeAt(0)); // 98
console.log('z'.charCodeAt(0)); // 122

// For 'A' -> char code = 65; 'A' should be = 27
// => For A to Z => code minus 38
console.log('A'.charCodeAt(0)); // 65
console.log('B'.charCodeAt(0)); // 66
console.log('Z'.charCodeAt(0)); // 90
*/

let rucksacks = readInputAsArray("./day3_input.txt");
// let rucksacks = readInputAsArray("./sample.txt");
rucksacks = rucksacks.filter(elem => elem !== '');

const day3a = function () {
  let toBeRearrangedList = [];

  rucksacks.forEach(rucksack => {
    const firstCompList = rucksack.substring(0, rucksack.length / 2);
    const secondCompList = rucksack.substring(rucksack.length / 2);

    for (let i = 0; i < firstCompList.length; i++) {
      const char = firstCompList[i];
      if (secondCompList.includes(char)) {
        toBeRearrangedList.push(char);
        break; // only 1 item needs rearrangement
      }
    }
  });

  const prioritySum = sumPriorities(toBeRearrangedList);
  console.log(prioritySum); // 7428
  return prioritySum;
};

const sumPriorities = function (list) {
  let prioritySum = 0;
  list.forEach(item => {
    if (item.toUpperCase() === item) {
      // is uppercase
      prioritySum += item.charCodeAt(0) - 38;
    } else {
      // is lowercase
      prioritySum += item.charCodeAt(0) - 96;
    }
  });
  return prioritySum;
}

///// day 3: part 1 results
day3a(); // 7428

//-------------
// 3b) Badges

const day3b = function () {
  let badges = [];
  for (let i = 0; i < rucksacks.length; i += 3) {
    const group1 = rucksacks[i];
    const group2 = rucksacks[i + 1];
    const group3 = rucksacks[i + 2];
    badges.push(findBadge(group1, group2, group3));
  }

  const prioritySum = sumPriorities(badges);
  console.log(prioritySum); // 2650
  return prioritySum;
};

const findBadge = function (group1, group2, group3) {
  const unique1 = Array.from(new Set(group1));
  const unique2 = Array.from(new Set(group2));
  const unique3 = Array.from(new Set(group3));
  // should have only 1 common item
  return unique1.filter(item => unique2.includes(item)).filter(item => unique3.includes(item))[0];
};

///// day 3: part 2 results
day3b(); // 2650
