function initializePage() {
    console.log("Page loaded successfully.");
    
    // Set tabindex attributes for keyboard accessibility
    const images = document.querySelectorAll(".preview");
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }

    // Set tabindex for the main display div
    const displayDiv = document.getElementById("image");
    displayDiv.setAttribute("tabindex", "0");
}

function upDate(imageElement) {
    const displayDiv = document.getElementById("image");
    displayDiv.style.backgroundImage = `url('${imageElement.src}')`;
    displayDiv.style.backgroundSize = "contain";
    displayDiv.style.backgroundRepeat = "no-repeat";
    displayDiv.innerHTML = imageElement.alt;
    console.log("Image updated with alt text: " + imageElement.alt);
}

function unDo() {
    const displayDiv = document.getElementById("image");
    displayDiv.style.backgroundImage = "";
    displayDiv.innerHTML = "Hover over an image below to display here.";
    console.log("Image display reverted.");
}

// Handle focus and blur events on the main display div
function focusHandler() {
    const displayDiv = document.getElementById("image");
    displayDiv.style.outline = "2px solid #FFD700";
    console.log("Display div focused.");
}

function blurHandler() {
    const displayDiv = document.getElementById("image");
    displayDiv.style.outline = "none";
    console.log("Display div lost focus.");
}

options = ["blue_macaw.jpg", "blue_parrot.jpg", "green_parrot.jpg", "green_small_parrots_kissing.jpg", "mountainous_green_parrots.jpg", "orange_parrot.jpg", "pageonepic.jpg", "pagetwopic.jpg", "parrot_blue.jpg", "purple_parrots.jpg", "white_parrot.jpg"]

currentImages = document.querySelectorAll(".flex img")
for (var i=0; i < currentImages.length; i++) {
    console.log("Image"+ i)

    randomImg = "images/" + options[Math.floor(Math.random() * options.length)];

    currentImages[i].src =randomImg 
}
