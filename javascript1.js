
let counter = 0;


function updateCounterDisplay() {
  document.getElementById('counter').textContent = counter;
}


function increaseCounter() {
  counter++;
  updateCounterDisplay();
}

function decreaseCounter() {
  counter--;
  updateCounterDisplay();
}


function runForLoop() {
  let result = '';
  for (let i = 0; i <= counter; i++) {
    result += i;
    if (i < counter) {
      result += ', ';
    }
  }
  document.getElementById('forLoopResult').textContent = result;
}


function showOddNumbers() {
  let result = '';
  let first = true;
  for (let i = 1; i <= counter; i += 2) {
    if (!first) {
      result += ', ';
    }
    result += i;
    first = false;
  }
  document.getElementById('oddNumbersResult').textContent = result;
}

function reverseMultiplesOf5() {
  let arr = [];
  if (counter >= 5) {
  
    let multiples = [];
    for (let i = 5; i <= counter; i += 5) {
      multiples.push(i);
    }

    for (let i = multiples.length - 1; i >= 0; i--) {
      arr.push(multiples[i]);
    }
  }
  console.log(arr);
}


function printCarObject() {
  let car = {
    type: document.getElementById('carType').value,
    mpg: document.getElementById('carMPG').value,
    color: document.getElementById('carColor').value
  };
  console.log(car);
}


const car1 = {
  type: 'Sedan',
  mpg: 30,
  color: 'Silver'
};

const car2 = {
  type: 'SUV',
  mpg: 22,
  color: 'Black'
};

const car3 = {
  type: 'Truck',
  mpg: 18,
  color: 'Red'
};


function loadCar(carNumber) {
  let car;
  switch (carNumber) {
    case 1:
      car = car1;
      break;
    case 2:
      car = car2;
      break;
    case 3:
      car = car3;
      break;
  }
  document.getElementById('carType').value = car.type;
  document.getElementById('carMPG').value = car.mpg;
  document.getElementById('carColor').value = car.color;
}


function changeColor(color) {
  document.getElementById('colorParagraph').style.color = color;
}