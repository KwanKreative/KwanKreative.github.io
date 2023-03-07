let lightboxContainer = document.getElementById("lightboxContainer");
let lightboxBackground = document.getElementById("lightboxBackground");
let lightbox = document.getElementById("lightbox");
let lightboxCloser = document.getElementById("lightboxCloser");

function openLightbox(){
    lightboxContainer.classList.add("display");
    lightbox.src = this.src;
}


function closeLightbox() {
    lightboxContainer.classList.remove("display");
    lightbox.src = "";
}


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



