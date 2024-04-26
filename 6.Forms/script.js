/*
*/
let a = document.getElementById('firstname');
let b = document.getElementById('display-firstname');
a.addEventListener('keyup', function(event){
    c = event.target.value;
    b.textContent = c;
});

let age = document.getElementById('age');
let hard = document.getElementById('a-hard-truth');
age.addEventListener('keyup', function() {
    let ageValue = parseInt(age.value);
    if (ageValue > 17) {
        hard.style.visibility = "visible";
        console.log('vieux');
    } else {
        hard.style.visibility = "hidden";
        console.log('jeune');
    }
})


let password = document.getElementById('pwd');
password.addEventListener('keyup', function() {
    let passwordValue = password.value;
    if (passwordValue.length < 6) {
        console.log('error');
        password.style.background = "red";
        
    } else {
        console.log('ok');
        password.style.background = "green";
    }
})

let passwordConfirm = document.getElementById('pwd-confirm');
passwordConfirm.addEventListener('keyup', function() {
    let passwordConfirmValue = passwordConfirm.value;
    let pass = password.value;
    if (passwordConfirmValue === pass ) {
        console.log('ok');
        passwordConfirm.style.background = "green";
        
    } else {
        console.log('error');
        passwordConfirm.style.background = "red";
    }
})

let body = document.querySelector('body');
let mode = document.getElementById('toggle-darkmode');
console.log(mode);
mode.addEventListener("change", function() {
    let choice = mode.value;
    if (choice === "dark") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
})  