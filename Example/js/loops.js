// some function will return an Array
//getElementByTagName will return an array
//of element that match the tag name.

// const body = document.getElementsByTagName("body")[0];

const elementsArray = 
    document.getElementsByTagName("body");
const body = elementsArray[0];

// body.innerHTML += "<h2>Heading 1 </h2>";
// body.innerHTML += "<h2>Heading 2 </h2>";
// body.innerHTML += "<h2>Heading 3 </h2>";
// body.innerHTML += "<h2>Heading 4 </h2>";

// for loop
// there are three main set-up part pf a for loop
// - initializing the counting variable 
// - the condition to stop the loop
// - the code to update the counting variable

for (let i = 0; i < 100; i++) {
    body.innerHTML += "<h2> Heading " + (i+1) + "</h2>";
}
