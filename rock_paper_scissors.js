const map = new Map([
  ["paper", 0],
  ["scissors", 1],
  ["rock", 2],
]);
const result = new Map([
  [0, "Tie"],
  [-1, "Player"],
  [-2, "Computer"],
  [1, "Computer"],
  [2, "Player"],
]);
function getComputerMove() {
  return Math.floor(Math.random() * 3);
}

let playerChoice = map.get(prompt("Enter your choice"));
console.log(playerChoice);
function getResult(playerChoice, computerChoice) {
  let win = computerChoice - playerChoice;
  console.log(`Player move ${playerChoice} and Computer ${computerChoice}`);
  console.log(`${result.get(win)} won `);
}

getResult(playerChoice, getComputerMove());
