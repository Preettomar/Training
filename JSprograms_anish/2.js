const prompt = require('prompt-sync')();
const num1 = parseInt(prompt("enter the num1"));
const num2= parseInt(prompt("enter the num2"));
const num3 = parseInt(prompt("enter the num3"));

let large = Math.max(num1,num2,num3);
console.log(large);

