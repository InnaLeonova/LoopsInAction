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

const highlightLinksButtonElement = document.querySelector('#highlight-links button');
// console.dir(highlightLinksButtonElement);
function highlightLinks() {
    const anchorElements = document.querySelectorAll('#highlight-links a');
    for (const anchorElement of anchorElements) {
        anchorElement.classList.add('highlight');
    }

}

highlightLinksButtonElement.addEventListener('click', highlightLinks);
