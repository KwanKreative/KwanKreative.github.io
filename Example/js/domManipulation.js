

let body = document.getElementById("myBodyElement");

body.style.backgroundColor = "brown";

body.innerHTML = "<h1>Hello World!</h1>";

body.innerHTML = 
    body.innerHTML + 
    "<p id='myParagraph'> This was written with dynamic JS!</p>";

body.innerHTML +=  "<p>  dynamic JS!</p>";

let myParagraph = document.getElementById("myParagraph");
myParagraph.style.color = "blue";
myParagraph.style.fontWeight = "bold";

let isDarkMode = true;
if (isDarkMode) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
} else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
}