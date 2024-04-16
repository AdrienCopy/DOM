/*
*/
document.addEventListener("DOMContentLoaded", function() {
    let important = document.querySelectorAll('.important');
    important.forEach(function(element) {
        // Ajouter l'attribut "title" avec la valeur "This is an important item"
        element.setAttribute('title', 'This is an important item');
    });

    let images = document.querySelectorAll('img');
    images.forEach(function(image) {
        if (!image.classList.contains('important')) {
            image.style.display = 'none';
        }
    });

    let paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(function(paragraph) {
        console.log(paragraph.textContent);
        if (paragraph.classList.length > 0) {
            console.log("Classe du paragraphe :", paragraph.classList);
        } else {
            var randomRed = Math.floor(Math.random() * 256);
            var randomGreen = Math.floor(Math.random() * 256);
            var randomBlue = Math.floor(Math.random() * 256);
            var randomColor = "rgb(" + randomRed + ", " + randomGreen + ", " + randomBlue + ")";

            paragraph.style.color = randomColor;
        }
    });

});
