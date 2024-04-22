const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

let section = document.querySelector('main > section.displayedsquare-wrapper');
let ul = document.querySelector('main > section:nth-of-type(3) > ul');

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  
  const newSquare = document.createElement('div');
  newSquare.classList.add('actionsquare');
  newSquare.classList.add(e.target.classList[1]);
  section.appendChild(newSquare);  

  let a = document.createElement('li');
  a.textContent = getElapsedTime() + " created a new " + e.target.classList[1] + " square";
  ul.appendChild(a);
}

section.addEventListener('click',(e) => {
  if (e.target.classList.contains('actionsquare')) {
    alert(e.target.classList[1]);
    //e.stopPropagation();
}
});

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
} 

document.addEventListener('keydown', function(event) {
  if (event.key === ' ') {
    console.log('La touche Espace a été pressée');
    let randomRed = Math.floor(Math.random() * 256);
    let randomGreen = Math.floor(Math.random() * 256);
    let randomBlue = Math.floor(Math.random() * 256);
    let randomColor = "rgb(" + randomRed + ", " + randomGreen + ", " + randomBlue + ")";
    const body = document.querySelector('body');
    body.style.backgroundColor = randomColor;
  }                  
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'l') {
    console.log('La touche L a été pressée');
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    } 
  }                  
});

document.addEventListener('keydown', function(event) {
  if (event.key === 's') {
    console.log('La touche S a été pressée');
    console.log(section.children);
    while (section.firstChild) {
      section.removeChild(section.firstChild);
    } 
  }                  
});


document.addEventListener('keydown', function(event) {
  if (event.key === 'd') {
    console.log('La touche d a été pressée');
    
    const children = section.children;
    while (section.children) {
      style.backgroundColor = "black";
    }
    console.log(children);
  }                  
});