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
    grid.style.display = "grid";
}

gridLink.onclick = showgrid;


function hideAll2() {
    grid.style.display = "none";
    gridthree.style.display = "none";
}


function showgridtwo() {
    hideAll2();
    gridtwo.style.display = "grid";
}
gridtwoLink.onclick = showgridtwo;

function hideAll3() {
    grid.style.display = "none";
    gridtwo.style.display = "none";
}

function showgridthree() {
    hideAll3();
    gridthree.style.display = "grid";
}
gridthreeLink.onclick = showgridthree;
