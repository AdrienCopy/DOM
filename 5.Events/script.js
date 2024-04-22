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
  if (event.key === 's') {
    console.log('La touche S a été pressée');
    console.log(section.children);
    while (section.firstChild) {
      section.removeChild(section.firstChild);
    } 
  }                     
});



const rotationAngles = {};
const translationValues = {};

document.addEventListener('keydown', function(event) {
  if (event.key === 'r') {
    console.log('La touche r a été pressée');
    
    const children = section.children;
    for (let i = 0; i < children.length; i++) {
      rotationAngles[i] = (rotationAngles[i] || 0) + 45;
      children[i].style.transform = 'rotate(' + rotationAngles[i] + 'deg)';
    }
  } 
  if (event.key === 't') {
    const children = section.children;
    for (let i = 0; i < children.length; i++) {
      translationValues[i] = translationValues[i] || {x: 0, y: 0};
      translationValues[i].x += 10;
      translationValues[i].y += 10;
      children[i].style.transform = 'translate(' + translationValues[i].x + 'px, ' + translationValues[i].y + 'px)';
    }
  }
});
