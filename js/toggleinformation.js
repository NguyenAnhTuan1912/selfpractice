// Declare HTML DOM
const numbericcircle_week = document.getElementsByClassName('week'); // Numberic Circle
const button_exit = document.getElementById('jsBody__modal__information__button__exit'); // Button exit
const modal = document.getElementById('jsModal'); // Modal


const modal__information__header = document.getElementById('jsModal__information__header');
const modal__information__descriptiontext = document.getElementById('jsModal__information__descriptiontext');


const pageTwo__information__header = document.getElementById('jsPageTwo__information__header');
const pageTwo__information__descriptiontext = document.getElementById('jsPageTwo__information__descriptiontext');
const pageTwo__information__previewimage = document.getElementById('jsPageTwo__information__previewimage');
// Data
var description_text = [
 'My second step is "Self Practice" web that contains all of my small front-end projects.'
]

var header_text = [
    "Week 1 - Self Practice"
]

var image_src = [
    "image/week/week1.svg"
]

// Show informaition of week 1
changeInformation(0);


function currentInformation(n) {
    // If width of page reachs 1440px, this condition will implement
    if(match.matches) {
        changeInformation(n - 1);
        showInformationContainer(n - 1);
    } else {
        changeInformation(n - 1);
    }
}


function showInformationContainer(n) {
    modal.style.zIndex = '10';
    modal.style.display = 'block';
    modal.style.visibility = 'visible';
}

function changeInformation(n) {
    if(match.matches) {
        // Delete data information container - Modal
        modal__information__header.innerHTML = "";
        modal__information__descriptiontext.innerHTML = "";

        // Add data to information container - Modal
        modal__information__header.innerHTML = header_text[n];
        modal__information__descriptiontext.innerHTML = description_text[n];
    } else {
        // Delete data information container - Pagetwwo
        pageTwo__information__header.innerHTML = "";
        pageTwo__information__descriptiontext.innerHTML = "";
        pageTwo__information__previewimage.src = "";

        // Add data to information container - Pagetwwo
        pageTwo__information__header.innerHTML = header_text[n];
        pageTwo__information__descriptiontext.innerHTML = description_text[n];
        pageTwo__information__previewimage.src = image_src[n];
    }
}

// Exit button is clicked!
button_exit.onclick = function() {
    modal.style.zIndex = '-5';
    modal.style.display = 'none';
    modal.style.visibility = 'hidden';
}