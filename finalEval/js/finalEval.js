const grid = document.getElementById("grid");
const gridtwo = document.getElementById("gridtwo");
const gridthree = document.getElementById("gridthree");
const gridLink = document.getElementById("gridLink");
const gridtwoLink =
    document.getElementById("gridtwoLink");
const gridthreeLink = document.getElementById("gridthreeLink");

function hideAll() {
    grid.style.display = "grid";
    gridtwo.style.display = "none";
    gridthree.style.display = "none";
    
}
hideAll();

function showgrid() {
    hideAll();
    grid.style.display = "";
}

gridLink.onclick = showgrid;


function hideAll2() {
    grid.style.display = "none";
    gridthree.style.display = "none";
}
hideAll2();


function showgridtwo() {
    hideAll2();
    gridtwo.style.display = "";
}
gridtwoLink.onclick = showgridtwo;

function hideAll3() {
    grid.style.display = "none";
    gridtwo.style.display = "none";
}
hideAll3();

function showgridthree() {
    hideAll3();
    gridthree.style.display = "";
}
gridthreeLink.onclick = showgridthree;
