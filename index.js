let todo1 = 'cook food';
let todo2 = 'go to market';
let todo3 = 'wash clothes';
let element = document.createElement('button');
element.innerText = 'click me';
document.body.appendChild(element);

document.title = 'my little todo';

function greeting(firstname) {
     console.log('hello ' + firstname);
    
    
}
greeting('ifeoma');

function toUpper(str) {
    let result = str.toUpperCase();
    console.log(result);
}
toUpper('abcd');

function conversion(inches) {
    let result = inches * 2.54;
    console.log("length is " + result + " centimeters");
}
conversion(6);

function toupperCase([str]) {
    let result = [];
     result.push = str.toUpperCase();
    console.log(result);
    
}
toupperCase('juliet', 'ugo');