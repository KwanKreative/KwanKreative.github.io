let lightboxContainer = document.getElementById("lightboxContainer");
let lightboxBackground = document.getElementById("lightboxBackground");
let lightbox = document.getElementById("lightbox");
let lightboxCloser = document.getElementById("lightboxCloser");
//Image 1 
function openLightbox(){
    lightboxContainer.classList.add("display");
    lightbox.src = this.src;
}

// let group1 = document.getElementById("group1");
// group1.onclick = openLightbox;

function closeLightbox() {
    lightboxContainer.classList.remove("display");
    lightbox.src = "";
}

// lightboxCloser.onclick = closeLightbox;
// lightboxBackground.onclick = closeLightbox;

// //Image 2 

// function openLightbox(){
//     lightboxContainer.classList.add("display");
//     lightbox.src = this.src;
// }

// let group2= document.getElementById("group2");
// group2.onclick = openLightbox;

// function closeLightbox() {
//     lightboxContainer.classList.remove("display");
//     lightbox.src = "";
// }

// lightboxCloser.onclick = closeLightbox;
// lightboxBackground.onclick = closeLightbox;

// //Image 3 
// function openLightbox(){
//     lightboxContainer.classList.add("display");
//     lightbox.src = this.src;
// }

// let group3= document.getElementById("group3");
// group3.onclick = openLightbox;

// function closeLightbox() {
//     lightboxContainer.classList.remove("display");
//     lightbox.src = "";
// }

// lightboxCloser.onclick = closeLightbox;
// lightboxBackground.onclick = closeLightbox;

// //Image 4 
// function openLightbox(){
//     lightboxContainer.classList.add("display");
//     lightbox.src = this.src;
// }

// let group4= document.getElementById("group4");
// group4.onclick = openLightbox;

// function closeLightbox() {
//     lightboxContainer.classList.remove("display");
//     lightbox.src = "";
// }

// lightboxCloser.onclick = closeLightbox;
// lightboxBackground.onclick = closeLightbox;
// //Image 5 
// function openLightbox(){
//     lightboxContainer.classList.add("display");
//     lightbox.src = this.src;
// }

// let group5 = document.getElementById("group5");
// group5.onclick = openLightbox;

// function closeLightbox() {
//     lightboxContainer.classList.remove("display");
//     lightbox.src = "";
// }

// lightboxCloser.onclick = closeLightbox;
// lightboxBackground.onclick = closeLightbox;
// //Image 6
// function openLightbox(){
//     lightboxContainer.classList.add("display");
//     lightbox.src = this.src;
// }

// let group6 = document.getElementById("group6");
// group6.onclick = openLightbox;

// function closeLightbox() {
//     lightboxContainer.classList.remove("display");
//     lightbox.src = "";
// }

// lightboxCloser.onclick = closeLightbox;
// lightboxBackground.onclick = closeLightbox;




let galleryImages = document.getElementsByClassName('galleryImage');

for (let i = 0; i < galleryImages.length; i++) {
    let galleryImage = galleryImages[i];
    galleryImage.onclick = openLightbox;
}

let closers = document.getElementsByClassName('closer');

for (let i = 0; i < closers.length; i++) {
    let closer = closers[i];
    closer.onclick = closeLightbox;
}



