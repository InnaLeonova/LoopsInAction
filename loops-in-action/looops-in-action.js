//First Example: Sum numbers

const calculateSumButtonElement = document.querySelector('#calculator button');

function calculateSum() {
  const userNumberInputElement = document.getElementById('user-number');
  console.dir(userNumberInputElement);
  const enteredNumber = userNumberInputElement.value;
  console.dir(enteredNumber);
  let sumUpToNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber = sumUpToNumber + i;
    console.log(sumUpToNumber);
  }
  // console.log(sumUpToNumber);
  const outputResultElement = document.getElementById('calculated-sum');

  outputResultElement.textContent = sumUpToNumber;
  outputResultElement.style.display = 'block';
}

calculateSumButtonElement.addEventListener('click', calculateSum);

// Hightlight links

const highlightLinksButtonElement = document.querySelector(
  '#highlight-links button'
);
// console.dir(highlightLinksButtonElement);
function highlightLinks() {
  const anchorElements = document.querySelectorAll('#highlight-links a');
  for (const anchorElement of anchorElements) {
    anchorElement.classList.add('highlight');
  }
}

highlightLinksButtonElement.addEventListener('click', highlightLinks);

// Display user data

const userData = {
  firstName: 'Maria',
  lastName: 'Ivanova',
  age: 40,
};

const displayUserDataButtonElement =
  document.querySelector('#user-data button');

function displayUserData() {
  const outputDataElement = document.getElementById('output-user-data');
  outputDataElement.innerHTML = '';
  for (const key in userData) {
    const newUserDataListItemElement = document.createElement('li');
    const outputText = key.toUpperCase() + ': ' + userData[key];
    newUserDataListItemElement.textContent = outputText;
    outputDataElement.append(newUserDataListItemElement);
  }
}
displayUserDataButtonElement.addEventListener('click', displayUserData);

//Statisctis Roll the Dice

const rollDiceButtonElement = document.querySelector('#statistics button');
// console.dir(rollDiceButtonElement);

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
  // return 3;
}

function deriveNumberOfDiceRole() {
  const targetNumberInputElement =
    document.getElementById('user-target-number');
  const diceRollsListElement = document.getElementById('dice-rolls');

  const enteredNumber = targetNumberInputElement.value;
  console.log(enteredNumber);
  diceRollsListElement.innerHTML = '';
  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;
  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();
    // if (rolledNumber == enteredNumber){
    //     hasRolledTargetNumber = true;
    // }

    numberOfRolls++;
    const newRollListItemElement = document.createElement('li');
    const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
    newRollListItemElement.textContent = outputText;
    diceRollsListElement.append(newRollListItemElement);
    hasRolledTargetNumber = rolledNumber == enteredNumber;
  }
  console.log(enteredNumber);
  const outputTotalRollsElement = document.getElementById('output-total-rolls');
  const outputTargetNumberElement = document.getElementById(
    'output-target-number'
  );
  outputTargetNumberElement.textContent = enteredNumber;
  outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRole);
