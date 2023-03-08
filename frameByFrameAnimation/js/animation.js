let frames = [
    "assets/images/Asset19.png",
    "assets/images/Asset20.png",
    "assets/images/Asset21.png",
    "assets/images/Asset22.png",
    "assets/images/Asset23.png",
    "assets/images/Asset24.png",
    "assets/images/Asset25.png",
    "assets/images/Asset26.png",
    "assets/images/Asset27.png"
];

const heart = document.getElementById("heart");

let frameIndex = 0;
function animate() {
    heart.src = frames[frameIndex];
    // frameIndex = frameIndex + 1;
    // frameIndex += 1;
    frameIndex++;
    if (frameIndex >= frames.length) {
        frameIndex = 0;
    }
}

setInterval(animate, 100);


let bunnyframes = [
    "assets/images/run1.png",
    "assets/images/run2.png",
    "assets/images/run3.png",
    "assets/images/run4.png",
    "assets/images/run5.png",
    "assets/images/run6.png",
    "assets/images/run7.png",
    "assets/images/run8.png"
    
];

const run = document.getElementById("run");

let bunnyframeIndex = 0;
function animatebunny() {
    run.src = bunnyframes[bunnyframeIndex];
    bunnyframeIndex++;
    if (bunnyframeIndex >= bunnyframes.length) {
        bunnyframeIndex = 0;
    }
}

setInterval(animatebunny, 100);