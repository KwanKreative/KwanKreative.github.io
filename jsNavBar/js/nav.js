const navButton = document.getElementById("nav-button");
const navArrow = document.getElementById("arrow");
const navDropdown = document.getElementById("dropdown");
const page = document.getElementById("page");

function toggleDropdown() {
    navDropdown.classList.toggle("reveal");
    navArrow.classList.toggle("arrow-flip");
}
// navButton.onclick = toggleDropdown;
navButton.addEventListener("click", function(e) { 
    toggleDropdown();
});
page.addEventListener ("click", function(e) {
    if(navDropdown.classList.contains("reveal")) {
        toggleDropdown();
    }
});

// toggleDropdown();


//Mouse move Demo
const follower = document.getElementById("follower");

document.addEventListener("mousemove", function(e){
    let x = e.pageX - 25;
    let y = e.pageY - 25;

    console.log("x:" + x);
    console.log("y:" + y);

    follower.style.top = y + "px";
    follower.style.left = x + "px";

});