"use strict";

// højtaler skifter billede og navn ved klik på knapper - knap skifter ikke stroke når der klikked udenfor knappen
const productImage = document.getElementById('productImage');
const productName = document.getElementById('productName');
const colourButtons = document.querySelectorAll('.colour-btn');

// genbrugelig funktion til at ændre højtaler farve
function btnColourChange(image, name, clickedButton) {
    // ændre src og text content
    productImage.src = image;
    productName.textContent = name;

    colourButtons.forEach(function(btn) {
    btn.classList.remove('active');
});

    clickedButton.classList.add('active');
}


// når man trykker på knapperne tager bruger den funktion som siger at den skal ændre src og text content
document.querySelector('.misty-white-btn').addEventListener('click', function () {
    btnColourChange('img/speakers/misty-white-transparent.png', 'Misty White', this);
});

document.querySelector('.lavender-mist-btn').addEventListener('click', function () {
    btnColourChange('img/speakers/lavender-mist-transparent.png', 'Lavender Mist', this);
});

document.querySelector('.sage-green-btn').addEventListener('click', function () {
    btnColourChange('img/speakers/sage-green-transparent.png', 'Sage Green', this);
});

document.querySelector('.dusty-rose-btn').addEventListener('click', function () {
    btnColourChange('img/speakers/dusty-rose-transparent-true.png', 'Dusty Rose', this);
});