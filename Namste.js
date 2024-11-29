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


//*************************** call back hell / pyramid of doom ********************

// callback is a way to handling the async operation in JS.we pass the callback function in settimeout and it will execute as we want.
// when we pass one callback inside other callback  and so on then it is called as callback hell.
// Inversion of control -- we pass the callback function to third party api and we trust that this api will execute our callback
// but there may be changes that , api call the callback twice, or not call the callback.so we loose the control on our code
// This is called as inversion of control that is losoing the control on our code.

// const cart = ["shoe", "pant", "shirt"]
// AudioParam.createOrder(cart, function(){
//     api.proceedPayment(function(){
//         api.genereateBill(function(){
//             api.updatewalllet(function(){

//             })
//         })
//     })
// })




//****************************** Promises ****************************

// A Promise is an  object representing the eventual completion or failure of an asynchronous operation.
// Initially promise is in pending state then it converted to either fulfilled or rejected state.
// With the help of the promise we resolve the "Inversion of control" problem, because if promise is executed then only we are doing the api call.
// so we have full control on our callback function which was not there in the basic callback.
// "Pomise Chaining " -- promise chaining is the soluation of the callback hell. 
// In the promise chaining it is important to return from one then() block to it's next .then()
// In Promise chaining code will grow vertically and in meaningfull manner
// "Promise" -- promise is the solution of the Inversion of control problem i.e loosing the control on our code.

// "Promise.all([])"
// it is used when we want to execute the multiple promise at the same time.suppose we want to fetch data of 10 userid from server then we will use it.
// Promise.all() will execute successfully if all the promise resolve(). it will wait for all the promise to resolve.
// if any one of the promise is rejected then it will direct throw the error at that point of time. it will not wait to reset of the promise.
// The error is same as that of the return by the failed promise.

// Promise.allSettled([])
// it is same as Pomise.all() the only difference is that it will wait till all the promise get executed.it will give the same size result
// array in which all the fulfilled and rejejcted promise value present.

const p = Promise.all([f1, f2, f3]);
p.then((data)=>{
    console.log(data)
})
.catch((e)=>{
    console.log(e)
})

function f1(){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            resolve("First promise")
        }, 3000)
    })
}
function f2(){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            resolve("First promise")
        }, 1000)
    })
}
function f3(){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            resolve("First promise")
        }, 5000)
    })
}