document.addEventListener("DOMContentLoaded", function() {
    // Liste des apprenants avec leur nom
    let learners = [
        "Iliess Abdelmadjid",
        "Maryam Akraiche",
        "Nathanaël Amand",
        "Zahra Anaflous",
        "Dorian Blariau",
        "Adrien Boels",
        "Jean-Emmanuel Carenjot",
        "Adrien Caufriez",
        "Caroline Deconinck",
        "Tom Delinte",
        "Stacy Druart",
        "Dylan Feys",
        "Justine Frigo",
        "Mohamed Kamal",
        "Lyne Kapongo Tshilumbwa",
        "Dzheylyan Kyamilova",
        "Ludovic Lacroix",
        "Justine Lambert",
        "Denis Lettany",
        "Jordan Masy",
        "Nataliia Melnykova",
        "Angel Nittelet",
        "Isabelle Noël",
        "Youris Rachid",
        "Giovanni Tummino",
        "Arnaud Van Acker",
        "Julie Wustefeld"
    ]; // array écrit avec une IA

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    shuffleArray(learners);
   
    let article = document.createElement('article');

    learners.forEach(function(learner) {
        let paragraph = document.createElement('p');
        let randomRed = Math.floor(Math.random() * 256);
        let randomGreen = Math.floor(Math.random() * 256);
        let randomBlue = Math.floor(Math.random() * 256);
        let randomColor = "rgb(" + randomRed + ", " + randomGreen + ", " + randomBlue + ")";
        paragraph.style.backgroundColor = randomColor;
        paragraph.textContent = learner;
        let brightness = (randomRed * 0.299 + randomGreen * 0.587 + randomBlue * 0.114);// formule de google... 
        if (brightness > 125) {
            paragraph.style.color = "black";
        } else {
            paragraph.style.color = "white";
        }
        paragraph.style.margin = "0 25% 0.5% 25%";
        paragraph.style.padding = "1%";
        paragraph.style.borderRadius = "5px";
        paragraph.style.textAlign = "center";
        article.appendChild(paragraph);
    });

    let main = document.querySelector('main');

    main.appendChild(article);
});
