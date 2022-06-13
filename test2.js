// test 2

function test() {
  for (let i = 0; i < 99; i++) {
    if (i % 3 === 0 && i % 7 === 0) {
      console.log("OpenSource");
    } else if (i % 3 === 0) {
      console.log("Open");
    } else if (i % 7 === 0) {
      console.log("Source");
    } else {
      console.log(i);
    }
  }
}
test();

// test 3

const myDiv = document.querySelector(".container2");
const children = myDiv.childNodes;

children.forEach((div) => {
  console.log(div.innerText);
});

// test 4

const arr = ["1", "a", "25", "13.1"];

function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    if (typeof Number(curr) === "number" && Math.floor(curr) === Number(curr)) {
      sum += Number(curr);
    }
  }
  return sum;
}

console.log(calculateSum(arr));

// test 5

async function fetchPostsById() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const objectWithIdFive = data.find((post) => post.id === 5);

    return objectWithIdFive;
  } catch (e) {
    console.log(e);
  }
}

fetchPostsById();

// test 6

const str = ["Softeq", "#rules"];

str.forEach((n) => {
  let regexp = /[a-z]+/gi;
  const result = n.match(regexp);
  console.log(result);
});

// test 7

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const alpha = alphabet.toString();
const replaceAlp = alpha.replace(/['"]+/g, "");
const result = replaceAlp.split(" ");
console.log(result);

// test 8

function guessNumber() {
  const random = Math.floor(Math.random() * 10) + 1;

  let number = parseInt(prompt("Guess a number from 1 to 10: "));

  while (number !== random) {
    number = parseInt(prompt("Guess a number from 1 to 10: "));
  }

  if (number == random) {
    console.log("You guessed the correct number.");
  }
}

guessNumber();
