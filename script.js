"use strict";

// højtaler skifter billede og navn ved klik på knapper
const productImage = document.getElementById('productImage');
const productName = document.getElementById('productName');

// genbrugelig funktion til at ændre højtaler farve
function btnColourChange(image, name) {
    // ændre src og text content
    productImage.src = image;
    productName.textContent = name;
}


// når man trykker på knapperne tager bruger den funktion som siger at den skal ændre src og text content
document.querySelector('.misty-white-btn').addEventListener('click', function () {
    btnColourChange('img/speakers/misty-white-transparent.png', 'Misty White');
});

document.querySelector('.lavender-mist-btn').addEventListener('click', function () {
    btnColourChange('img/speakers/lavender-mist-transparent.png', 'Lavender Mist');
});

document.querySelector('.sage-green-btn').addEventListener('click', function () {
    btnColourChange('img/speakers/sage-green-transparent.png', 'Sage Green');
});

document.querySelector('.dusty-rose-btn').addEventListener('click', function () {
    btnColourChange('img/speakers/dusty-rose-transparent-true.png', 'Dusty Rose');
});