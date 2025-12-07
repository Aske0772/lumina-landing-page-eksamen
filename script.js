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
function trustPilotRectangle(imageSrc, starsSrc, review, author, speaker, purchased) {
    return `
    <article class="trust-pilot-rectangle">
        <img class="image-trustpilot" src="${imageSrc}" alt="Trustpilot Rating">
        <img class="stars-trustpilot" src="${starsSrc}" alt="5 Stjerner truspilot rating">
        <p class="review-trustpilot">${review}</p>
        <p class="author-trustpilot">${author}</p>
        <p class="speaker-trustpilot">${speaker}</p>
        <p class="purchased-trustpilot">${purchased}</p>
    </article>
    `;
}

// indsætter rectangles i trust pilot container
const trustPilotData = [
    {
    imageSrc: 'img/selfie-women/woman-one.png',
    starsSrc: 'img/trustpilot/5-stjerner.png',
    review: 'Helt ærligt den bedste højtaler jeg nogensinde har ejet! Lyden er krystalklar og bassen er dyb og fyldig. Designet er også utroligt stilfuldt og passer perfekt ind i mit hjem',
    author: 'Anna K.',
    speaker: 'misty white',
    purchased: 'december 2025'

    },

 {
    imageSrc: 'img/selfie-women/woman-two.png',
    starsSrc: 'img/trustpilot/5-stjerner.png',
    review: 'Jeg er virkelig imponeret over denne højtaler. Den har en fantastisk lydkvalitet og er super nem at bruge. Jeg kan forbinde den til min telefon på ingen tid, og batteritiden er imponerende lang',
    author:'mette j.',
    speaker: 'dusty rose',
    purchased: 'januar 2026'

    },

 {
    imageSrc: 'img/selfie-women/woman-three.png',
    starsSrc: 'img/trustpilot/5-stjerner.png',
    review: 'Den er bare let at tage med overalt, har ikke mere at sige! 5 ud af 5 stjerner',
    author:'maria L',
    speaker: 'lavender mist',
    purchased: 'februar 2025'

    },

 {
    imageSrc: 'img/selfie-women/woman-four.png',
    starsSrc: 'img/trustpilot/5-stjerner.png',
    review: 'den er helt fantastisk!',
    author:'Anna S',
    speaker: 'Sage Green',
    purchased: 'marts 2025'

    },

 {
    imageSrc: 'img/selfie-women/woman-five.png',
    starsSrc: 'img/trustpilot/5-stjerner.png',
    review: 'Virkelig god til pengene. kan varmt anbefale til alle der elsker et godt design',
    author:'Astrid P',
    speaker: 'misty white',
    purchased: 'februar 2025'

    },

 {
    imageSrc: 'img/selfie-women/woman-six.png',
    starsSrc: 'img/trustpilot/5-stjerner.png',
    review: 'Godt design, god lyd, og virkelig let at tage med rundt',
    author:'Anne M',
    speaker: 'sage green',
    purchased: 'marts 2025'

    },
];

trustPilotData.forEach(function(data) {
    trustPilotContainer.innerHTML += trustPilotRectangle(data.imageSrc, data.starsSrc, data.review, data.author, data.speaker, data.purchased);
});

console.log(trustPilotContainer);