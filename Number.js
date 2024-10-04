/****** Number and Math Function *******/

// 1. Math.random() function will generate the random number between 0 and 1


const no = new Number(234.67532);
// console.log(no.toFixed(3));
// console.log(no.toPrecision(4));

// console.log(Math.floor(4.6));
// console.log(Math.min(66, 24, 62, 6,2));
// console.log(Math.max(5,2,7,23,462,75));


console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 30;

console.log(Math.ceil((Math.random() * 10)) + (max - min))