/**         Immediately Invoked Function Expression           **/

// 1. it is used to remove the global variable polluation.it will immediately invoked
// 2. The variable which is declare inside the IIFE are not accessable from outside the IIFE . hence no one can change the IIFE variables
// 3. As a result data is consistent.
// 4. IIFE  defind as (function body)() --> the first block contain the function defination and second is to call the function immediately

// 1. when we use two iife we have to use the semicolon after the first iife to explicitely tell the js engine that  this function is ended here. 
// if we not use semicolon then js engine will confused where this statmenet is ended.



(function callme(){
    var score = 100;
    console.log("i'm the immedately innvoked function")
    console.log(`score is ${score}`);
})();

console.log(score);    // we can not access the score variable of the above iife. 

((name)=>{
    console.log(`Hello ${name} this is the second IIFE`)
})('satendra');


(()=>{
    console.log("This is the third IIFE")
})()



/****  Nullish coalescing operator  *****/

// 1. it is used as val = null ?? 10
// 2. if first val is null then used the second value
// 3. it is usefull while we do the API call

const val = null ?? 100
console.log(val);