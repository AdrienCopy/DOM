/*
*/
let ulList = document.querySelectorAll('ul');
let children = [];
ulList.forEach(ul => {
    ul.childNodes.forEach(child => {
        if (child.nodeType === Node.ELEMENT_NODE) {// Verifier si le neud enfant est un element HTML (nodeType === 1)
            children.push(child.textContent);
            
        }
    });
});
console.log(children);

let search = "Fast and Furious";

let result = children.find(title => title === search);
let index = children.findIndex(title => title === search);
if (index !== -1) {
    children.splice(index, 1);//retirer
    children.unshift(search);// Inserer
    console.log('new :', children);
} else {
    console.log('erreur');
}
console.log(result + " est en index : " + index);

function change(a) {
    ulList.forEach(ul => {
        ul.innerHTML = '';
        a.forEach(item => {
            let li = document.createElement('li');
            li.textContent = item;
            li.addEventListener('click', alertTilte)
            ul.appendChild(li);
            if (li.textContent === search) {
                li.classList.add('important');
            } else {
                li.classList.add('normal');
            }
        });
    });
}

change(children);

function alertTilte(e) {
    //alert(e.target.textContent); remplace par console.log
    if (e.target.textContent === search) {
        console.log("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
    } else {
        console.log(e.target.textContent);
    }
}

let body = document.querySelector('body');
let div = document.createElement('div');
let select = document.createElement('select');
let option1 = document.createElement('option');
option1.textContent = "important franchises";
let option2 = document.createElement('option');
option2.textContent = "normal franchises";

body.insertBefore(div, body.firstChild);
div.appendChild(select);
select.appendChild(option1);
select.appendChild(option2);

select.addEventListener("change", function() {
    let choice = select.value;
    let normal = dorcument.querySelectorAll('normal');
    if (choice = "important franchises") {
        normal.forEach(element => {
            element.style.visibility = 'hidden'; 
            });
        } else {
        normal.forEach(element => {
            element.style.visibility = 'visible';    
        });
    }
           
    });