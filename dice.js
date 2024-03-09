const myButton = document.getElementById('myButton');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');
let randomCount1;
let randomCount2;
let randomCount3;
const max = 6;
const min = 1;

myButton.onclick = function(){
    randomCount1 = Math.floor(Math.random() * max) + min;
    randomCount2 = Math.floor(Math.random() * max) + min;
    randomCount3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomCount1;
    label2.textContent = randomCount2;
    label3.textContent = randomCount3;
}