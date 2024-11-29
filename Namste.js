//****************************global Execution Context******************

// Javascript is synchronous single threaded programming language.
// single threaded -- execute single command at a time
// when js program run js engine create two things global execution context and global object that is window.
// global execution context [memory creation phase (1) | code execution phase (2)]
// This thing will be maintain by the call stack.






// *****************Hoisting********************

// it is a phenomenon in JS using which we can access the function before it's intialization.The behind reason is Execution Context.
// Before the code execution phase first the memory creation happend. so all the variable got the memory and function also got the memory.
// All the variable store the undefind value in the memory creation phase. during code execution they got the actual value. 
// Because of that we are able to use the function and variable before it's defination.
// All var variable is attached to the global object and present in the global memory space.
// let const variable are also hoisted. but they behave differently then the var.
// let and const are not attached with the global object and they are present in the different memory space then global memory space.

// "Temporal Dead Zone" -- 
// All let and const variable are hoisted that is they got the memeory in the memory creation phase but value is not initialze yet.
// From Hositing to , till the time let const vairable are unintialize are called as temporal dead zone.
// And we can not access the variable in the temporal dead zone.











// ************************Global Object or window object***************************

// so when we run the js program , JS will create the two things global execution context and global object.
// global scope means any thing declare outside the function.
// All the function and variable declare in the global scope is attached with the global object i.e window in case of chrome.
// we can access all the variable and function as window.variabelName or window.functionCall().
// In case of chrome browser we call the global object as window but in other browser they may be different.
// this is the keyword which also created when we run js program. this point to the window object.







// ****************************undefind*************************
// undefind is nothing but the placeholder given to the variable during the memory creation phase.
// In execution phase undefind will be replace by the actual value.





// **********************Lexical scopping and Closure*********************

// Lexical scope = local memory + reference to parent's lexical scope.
// Inner function have the access of the outer function(parent function) variable.This is called as lexical scopping.
// But two inner function can not share the variable between themself.
// Outer function or global scope can not access the variable of inner  because inner function's execution context is not created yet.

// Inner function first search the username in it's execution context . if it is not found then it will start seraching in it's parent lexical
// execution context  it will keep on searching till it reaches the Global execution context of the running program.
// This is called as "scope chaining".
// global Execution context parent points to it' parent lexical scope which is null.

// closure--
// Function along with  reference to it's lexical scope form a closure.
// when we return the function in JS it returns it's lexical scope also(scope chaining) that is we are able to access all the variable which is 
// there in the lexical scope.This is what we called as closure.
// Fuction return the reference not the actual values.
// advantages - data hiding, encapsulation, higher order function (memoize, once)
// disadvanatges - waste of memory

// In the below function setTimeout function remember the reference of i.
// so when again function comes to callstack once time is done it will print the value present at i location
// In case of let , block memory is created so 5 i block is created.
// In case of var since it is present in the global scope so there is only one value which become 6.


// function callme(){
//     for(let i = 1;  i <= 5 ; i++){
//         setTimeout(function a(){
//             console.log(i)
//         }, i * 1000)
//     }
// }
// callme();



// function a(){
//     let x = 10;
//     function b(){
//        function c(){
//         console.log(x)
//        }
//        return c
//     }
//     return b()
// }
// let z = a();
// z();



//*****************************Block Scope********************
// {} this is what we called the block scope. it is used to group the multiple statement and used it when js expected the single statement.
// let and const are block scope variable since they got the memory in diiferent scope not in global scope.
// "shadowing" -- inner variable will shadow the outer variable so when we access the value inside block that value will be display.
// Variable declare inside the Function  shadow the global variable.

// let a = 10;
// {
//     let a = 20;
//     console.log(a);
// }



//***************************Functions *********************

// function statement aka function declartion
// function show(){
//     console.log("This is called function statement or function declartion");
// }

// function Expression -- using the function as a value is called as function expression.
// The difference b/w statement and expression is that they hoisted differently.
// let res = function(){
//     console.log("Function expression");
// }

// Anonymous function -- function which does not have any name, it is used when we want to use function as a value.
// function(){}

// Named function expression
// let res3 = function abs(){console.log("This is named function expression")}

// first class function -- when we pass function as an argument or when we return the function then it is called first class function
// This ability of doing it is called as first class function. it is also known as first class citizen.

// Arrow function -- let val = ()=>{console.log("Hello")}



//************************ callback, main thread *****************
// callback -- when we pass the function as the argument is called as callback function
// setTimeout( ()=>{console.log("Hii")}, 1000)

// Main Thread -- call stack is called as the main thread
// if the function in the callstack taking to much time then it will block rest of the function execution.
// This is called as blocking the main thread.


//***************************Event Loop ********************