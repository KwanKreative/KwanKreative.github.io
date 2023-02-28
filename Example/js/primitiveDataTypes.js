//console.log will output anything
//you put in the parentheses
//to the Chrome Developer Tools'Console

//Data Type: String (text)

console.log("Hello world!");


//Data Type: Number
console.log(4);
console.log(400000000);

//math operator
//adition (+), subtraction (-)
//multiplication (*), division (/)

console.log(10 + 5);
console.log(20 - 12);
console.log(3 * 4);
console.log(10 / 2);

//String operator
//Concatenation (+) (putting two stringstogether)
console.log("Hello" + "World" + "!!!!");

//Data Type : Boolean (true/false)
console.log(true);
console.log(false);

//Boolean operators
//eqivalence (==) (is equal to)
console.log(10 == 10);
console.log(10 == 5);

//not equivalent (!=) (is not equal to)
console.log(5 != 15); 
console.log(5 != 5); 

//less than
console.log(5 < 10); 
console.log(10 < 5); 
console.log(5 < 5); 

//greater than 
console.log(5 > 10); 
console.log(10 > 5); 
console.log(5 > 5); 

//greater than or equal to (>=)
//less than or equal to (<=)
console.log(5 >= 10);
console.log(10 >= 5);
console.log(5 >= 5);

//Boolean data types allow us to
//write branching code paths

let a = 5;
let b = 10;
if (a > b) {
     console.log("This statement is true!");
} else { 
    console.log("This statement is false!");
}