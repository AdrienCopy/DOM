/*
*/
const list = document.querySelector('ol');
const a =  list.lastElementChild;
list.prepend(a);

console.log(a);

const section = document.querySelector('main');
const section2 = section.children[1];
const h2s2 = section2.querySelector('h2');
const section3 = section.children[2];
const h2s3 = section3.querySelector('h2');

section3.insertBefore(h2s2, section3.firstChild);
section2.insertBefore(h2s3, section2.firstChild);

const lastSection = section.lastElementChild;
lastSection.remove();


console.log(lastSection);
