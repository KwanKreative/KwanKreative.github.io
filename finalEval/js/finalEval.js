const trending= document.getElementById("trending");
const disney= document.getElementById("disney");
const coming= document.getElementById("coming");
const trendingLink = document.getElementById("trendingLink");
const disneyLink = document.getElementById("disneyLink");
const comingLink = document.getElementById("comingLink");

function hideAll() {
    // trending.style.display = "none";
    disney.style.display = "none";
    coming.style.display = "none";
}

hideAll();

function showtrending(){
    hideAll();
    trending.style.display = "";
}

trendingLink.onclick = showtrending;

function showdisney(){
    hideAll();
    disney.style.display = "";
}

disneyLink.onclick = shownew;

function showcoming(){
    hideAll();
    coming.style.display = "";
}

comingLink.onclick = showcoming;