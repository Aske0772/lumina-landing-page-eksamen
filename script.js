"use strict";



// SECTION 2 - HØJTALER FARVESKIFT
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


// når man trykker på knapperne tager bruger den funktion som siger at den skal ændre src, text content, og button style
// this er tilføjet for at kunne referere til den knap der blev klikket på
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

// SEKTION 3 - RUNDE BILLEDER HOVER SKIFT
// bruger replace i stedet for if/ else for at gøre koden mere simpel
const circularGallery = document.querySelectorAll('.circular-gallery');

circularGallery.forEach(function(img) {
    const originalSrc = img.src;

    img.addEventListener('mouseover', function() {
        this.src = originalSrc.replace('.png', '-hover.png');
    });

    img.addEventListener('mouseout', function() {
        this.src = originalSrc;
    });

    // klik funktion for mobil og tablets
    img.addEventListener('click', function() {
        this.src = originalSrc.replace('.png', '-hover.png');
    });
});

// SEKTION 5

// variabel til trust pilot container
const trustPilotContainer = document.querySelector('.bg-rectangle-section-trustpilot');

// backticks for at kunne lave flere strings på en gang
// funktion til at lave trust pilot rectangles
function trustPilotRectangle(imageSrc, starsSrc, review, author, speaker) {
    return `
    <article class="trust-pilot-rectangle">
        <img src="${imageSrc}" alt="Trustpilot Rating">
        <img src="${starsSrc}" alt="5 Stjerner truspilot rating">
        <h4>${review}</h4>
        <h5>${author}</h5>
        <h6>${speaker}</h6>
    </article>
    `;
}

// indsætter rectangles i trust pilot container
const trustPilotData = [
    {
    imageSrc: 'img/selfie-women/selfie-woman-one.png',
    starsSrc: 'img/trustpilot/5-stjerner.png',
    review: 'Helt ærligt den bedste højtaler jeg nogensinde har ejet! Lyden er krystalklar og bassen er dyb og fyldig. Designet er også utroligt stilfuldt og passer perfekt ind i mit hjem.',
    author: 'Anna K.',
    speaker: ''

    },

 {
    imageSrc: 'img/selfie-women/selfie-woman-one.png',
    starsSrc: 'img/trustpilot/5-stjerner.png',
    review: '',
    author:'',
    speaker: ''
    },

 {
    imageSrc: 'img/selfie-women/selfie-woman-one.png',
    starsSrc: 'img/trustpilot/5-stjerner.png',
    review: '',
    author:'',
    speaker: ''

    },

 {
    imageSrc: 'img/selfie-women/selfie-woman-one.png',
    starsSrc: 'img/trustpilot/5-stjerner.png',
    review: '',
    author:'',
    speaker: ''

    },

 {
    imageSrc: 'img/selfie-women/selfie-woman-one.png',
    starsSrc: 'img/trustpilot/5-stjerner.png',
    review: '',
    author:'',
    speaker: ''

    },

 {
    imageSrc: 'img/selfie-women/selfie-woman-one.png',
    starsSrc: 'img/trustpilot/5-stjerner.png',
    review: '',
    author:'',
    speaker: ''

    },
]