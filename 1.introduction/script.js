/*
*/

let titlePage = document.getElementById("title");
console.log(titlePage.innerText); 

titlePage.innerText = "Modifying the DOM";

document.addEventListener("DOMContentLoaded", function() {
    var randomRed = Math.floor(Math.random() * 256);
    var randomGreen = Math.floor(Math.random() * 256);
    var randomBlue = Math.floor(Math.random() * 256);
    var randomColor = "rgb(" + randomRed + ", " + randomGreen + ", " + randomBlue + ")";

    var bodyColor = document.body;
    if (bodyColor !== null) {
        bodyColor.style.backgroundColor = randomColor;
    } else {
        console.log("error");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var bodyElement = document.body;

    if (bodyElement.children.length >= 2) {
        var secondChild = bodyElement.children[1];
        for (var child of secondChild.children) {
            console.log(child);
        }
    } else {
        console.log("Il n'y a pas de deuxième élément enfant dans le document.");
    }
});
