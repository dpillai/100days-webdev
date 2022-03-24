calculateSumButton = document.querySelector("#calculator button");

function calculateSum() {
  console.log("ere");
  let userNumber = document.getElementById("user-number").value;
  let sum = 0;
  for (let i = 0; i <= userNumber; i++) sum = sum + i;

  outputElement = document.getElementById("calculated-sum");
  outputElement.textContent = sum;
  outputElement.style.display = "block";
}

calculateSumButton.addEventListener("click", calculateSum);

//Highlight Links

highlightLinksButton = document.getElementById("highlight-links");

function highlightLinks() {
  anchorElements = document.querySelectorAll("#highlight-links a");

  for (const anchorElement of anchorElements)
    anchorElement.classList.add("highlight");
}
highlightLinksButton.addEventListener("click", highlightLinks);

//Add user Data

const userData = {
  firstName: "Deepak",
  lastName: "Pillai",
  age: 46,
};

userDataButton = document.querySelector("#user-data button");
listItem = document.getElementById("output-user-data");

function displayUserData() {
  for (let key in userData) {
    const newListItem = document.createElement("li");
    const userDataString = key.toUpperCase() + ": " + userData[key];
    newListItem.textContent = userDataString;
    listItem.append(newListItem);
  }
}

userDataButton.addEventListener("click", displayUserData);

//roll dice

rollDiceButton = document.querySelector("#statistics button");
outputTotalRollsItem = document.getElementById("output-total-rolls");
outputTargetItem = document.getElementById("output-target-number");

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
function getStats() {
  const targetNumber = document.getElementById("user-target-number").value;
  const diceRollsList = document.getElementById("dice-rolls");
  let rightNumberRolled = false;
  let numberOfRolls = 0;
  let rolledNUmber;

  diceRollsList.innerHTML = "";

  while (!rightNumberRolled) {
    rolledNumber = rollDice();

    //   if (rolledNumber == targetNumber) rightNumberRolled = true;
    // }
    numberOfRolls++;
    rightNumberRolled = rolledNumber == targetNumber;

    const newRollListItem = document.createElement("li");
    newRollListItem.textContent = "Roll" + ": " + rolledNumber;
    diceRollsList.append(newRollListItem);
  }

  outputTotalRollsItem.textContent = numberOfRolls;
  outputTargetItem.textContent = targetNumber;
}

rollDiceButton.addEventListener("click", getStats);
