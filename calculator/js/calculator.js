let result = document.getElementById("result");

function displayTwoPlusTwo() {
    let number1 = 2;
    let number2 = 2;
    result.innerHTML = number1 + number2;
}

function displayFourTimesTwo() {
    result.innerHTML = 4 * 2;
}

function displayOneHundreddividedByTwo() {
    result.innerHTML = 100 / 2
}

function displayMultiply(){
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    result.innerHTML = input1.value * input2.value;
}

