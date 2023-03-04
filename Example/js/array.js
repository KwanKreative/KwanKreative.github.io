// An array is basically a list of objects.
//Arrays are a type of "data structure"
//which are constructs that hold data
// Arrays can be created with square brackets

let exmptyArray = []; // more can be added later

let numberArray = [27, 7, 2, 2929, 45]; // lenght of 5 

let stringArray = 
    ["apple", "orange", "grapes", "pear"]; // length of 4 

let mixedArray = ["cat", 2, 5, "dog", "platypus", 12, [2, 3]];

let groceryList = [
    "bacon",
    "eggs",
    "coffee",
    "fruits and veggies",
    "pastromi"
];

console.log(groceryList);

let firstGroceryItem = groceryList[0];
console.log(firstGroceryItem);

let thirdGroceryItem = groceryList[2];
console.log(thirdGroceryItem);

let lastGroceryItem = groceryList[5];
console.log(lastGroceryItem);

// we can add items to an existing array.
// One way of doing that is using the push method

 console.log(groceryList);
 groceryList.push("ice cream");
 console.log(groceryList);

 //Start of dynamic grocery list demo
 const pageList = document.getElementById("pageList");
 const itemInput = document.getElementById("itemInput");
 const itemSubmit = document.getElementById("itemSubmit");

 function displayList() {
    pageList.innerHTML = groceryList.toString().replaceAll(",", "<br>");
 }

 displayList();

 itemSubmit.addEventListener("click", function(e) {
    let newItem = itemInput.value;
    itemInput.value = "";
    groceryList.push(newItem);
    displayList();
 });