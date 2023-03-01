let greeting = "Good evening";
console.log(greeting);

//simple function
function greet() {
        console.log(greeting);
}

greet();

//Function with an input parameter
function greetUser(username) {
    let userGreeting = greeting + ", " +  username;
    console.log(userGreeting);
}

greetUser("Kwan");
greetUser("A");
greetUser("B");

// or function greetUser(username = "Kwan");


function greetUserOnpage(username) {
    let greetingDisplay = document.getElementById("greetingDisplay");
    greetingDisplay.innerHTML += greeting + ", " +  username;   


greetingDisplay.innerHTML = 
    greetingDisplay.innerHTML +
    greeting +
    ", " +
    username;
}
greetUserOnpage("Ryan");

//Function that output (or "returns") a value
function getUserGreeting(username) {
    return greeting + ", " +  username + "!";
}

getUserGreeting("Ryan");
console.log(getUserGreeting("Ryan"));

//Function using another function
// that modifies the page
function greetUserOnPageV2(username) {
    let greetingDisplay = document.getElementById("greetingDisplay");
    greetingDisplay.innerHTML = getUserGreeting(username);
}

greetUserOnPageV2("KWANJIRA");