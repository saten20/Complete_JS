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
// setTimeout, Dom, fetch, localstorage, these feture are not present in JS. These feature is provided by the browser.
// So all these api is injected in the global object.







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
// "Inversion of control" -- we pass the callback function to third party api and we trust that this api will execute our callback
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
// if any one of the promise is rejected then it will direct throw the error at that point of time. it will not wait for reset of the promise.
// it throw the same error as that of the return by the failed promise.

// "Promise.allSettled([])"
// it is same as Pomise.all() the only difference is that it will wait till all the promise get executed.it will give the same size result
// array in which all the fulfilled and rejejcted promise value present.

// Promise.race([])
// it will wait till the first promise is settled(that is either rejected or resolve).
// if the first executing promise is resolve then it will return that value.if rejected then it will throw the error and not wait for other 
// promise to settled.

// Promise.any([])
// Promise.any will wait for the first resolve promise. The first promise which resolve it will return the result of that promise.
// if none of the promise get resolve then it will return an array of aggrigated error. array of all the error given by the promise.
// There is an array of error which contain all the error.


// const p1 = new Promise((resolve, reject) =>{
//     // setTimeout(()=>{
//     //     resolve("Promise p1 success")
//     // }, 3000)
//     setTimeout(()=>{
//         reject("Promise p1 reject")
//     }, 3000)
// })
// const p2 = new Promise((resolve, reject) =>{
//     // setTimeout(()=>{
//     //     resolve("Promise p2 success")
//     // }, 1000)
//     setTimeout(()=>{
//         reject("Promise p2 reject")
//     }, 1000)
// })
// const p3 = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         resolve("Promise p3 success")
//     }, 2000)
//     // setTimeout(()=>{
//     //     reject("Promise p3 reject")
//     // }, 2000)
// })

// // const p = Promise.all([p1, p2, p3]);
// // const p = Promise.allSettled([p1, p2, p3])
// // const p = Promise.race([p1, p2, p3])
// const p = Promise.any([p1, p2, p3])
// p.then((data)=>{
//     console.log(data)
// })
// .catch((e)=>{
//     console.error(e)
// })




//******************************async await**********************

// we can handle the promise with the help of the async await function also.
// async keyword is used to make the function async. async function always return the promise.
// if it is not returning the promise if it is returning the normal value then it will wrap it into promise and then return it.
// but if it is already returning the promise then it do nothing, it will return that promise as it is.
// await is used inside the async function only. we can not used the await outside the async function.
// await will stop the execution of the code where the await is written.below line is not executed until the await is executed.
// But JS engine not wait there. JS engin suspend the function from the call stack and move that function into to the event queue.
// As a result callstack is not blocked, it will execute the other function.
// When the time is completed JS engine take that function from the event queue and put it into the callstack and execute it.
// And then the  line below the await will execute. Again if there is await then JS suspend that function from callstack and put it into event queue.
// As a result main callstack never blocked.
// what if event queue function is not executed or some error arises , then to handle that we used try catch block.

// we used the async await to do the asynchronous operation. We used it in fetech() method. fetch will return the Promise.
// That promise may be resolved or rejected.
// But if we handle the promise with then() catch() block then below the then() catch() block line is executed whether promise is resolve
// immedalty or after some time.
// But async await in background uses the then() catch() block only, async await is just the alternate way of handling the promise.





// const p1 = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         resolve("Promise is resolved")
//     }, 10000)
// })

// const p2 = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         resolve("Promise is resolved")
//     }, 5000)
// })

// // function handlepromise(){
// //     p.then((data)=>{
// //         console.log(data)
// //     })
// //     .catch((err)=>{
// //         console.log(err)
// //     })
// //     console.log("This is the next line")
// // }
// // handlepromise();

// async function handlePromise(){
//     const val1 = await p1
//     console.log("Promise p1 executed")
//     console.log(val1);

//     const val2 = await p2
//     console.log("Promise p2 is executed")
//     console.log(val2)
// }
// handlePromise();



// async function handlePromise(){
//     // try{
//     //     const res = await fetch("https://github")
//     //     const data = await res.json()
//     //     console.log(data);

//     // }catch(error){
//     //     console.log("Error is occurs while fetching the data....")
//     //     console.log(error)
//     // }

        
//         const res = await fetch("https://github")
//         const data = await res.json()
//         console.log(data);

        
    
// }
// handlePromise().catch((erro)=>{console.log("Error while fetching the data..........",erro)});







//************************************ this keyword **************************

// In global space this represent the global object that is window in case of browser. this point to the global object
// The value of this inside the function behave differently, in case of non-strict mode value of this inside the function is global object.
// This happen due to the this substitution. But incase of strict mode it is undefind.

// this inside the object represent the object.
// The function that we defind inside the object is called as the method of that object.

// "call" -- with the help of the call we can pass the our execution context(our this) to other function.
// So other function will use our execution context rather then using it's own

// arrow function does not have there own this, it retain the this value of lexical scope where it is defind.
// this inside the arrow function represent the lexical context of, where it is defind.
// if arrow funtion is present inside the function and function present inside the object. Then this keyword inside the arrow function will represent
// the object because lexical scope of function is object only where arrow function is defind.

// this inside the dom
// this represent the tag where it is defind. if it is used inside the button tag then it will represent that button only.




// "use strict"
// var m = 10

// console.log(this)
// function x(){
//     console.log(this)
// }
// x()

// const obj = {
//     a:24,
//     fname:"saten",
//     fun:function(){
//         console.log(this.a)
//     }
// }
// obj.fun()


// const student1 = {
//     name:"saten",
//     printname:function(){
//         console.log(this.name)
//     }
// }
// student1.printname();

// const student2 = {
//     name: "samay"
// }
// student1.printname.call(student2)
// student1.printname();


// const obj = {
//     a:124,
//     x:function(){      // lexical scope where arrow funtion is defind is object. so this inside the arrow function represent the object.
//         const val = ()=>{
//             console.log(this)
//         }
//         val()
//     }
// }
// obj.x()




//***************************Event Loop (power of browser) *********************************

// There are so many fetures that are provided by the browser.storage, timer,doing network call, rendoring, server communicatio etc.
// Js engine is present inside the browser , so what if JS engine want to access all these fatures provided by the browser.
// so browser provide the different API likes setTimeout, fetch, dom, console, localstorage to access these feature.
// Browser wrap all API inside the window object, and by accesing window object we can access these features.

// So when ever any Asynchronous operation like setTimeout, fetch are there in the code, that functions are hand off to web API.
// web API registor the task and that function is poped off from the call stack.When web API done with the requested task like fetching web page,
// or setTimeout timer expire it push that callback inside the event queue(setTimeout,setInterval, dom) or microtask queue(fetch, then, catch).
// microtask queue has higher priorites.microtask queue store the promises and mutalOberver.
// There is event Loop which keep on checking is callstack empty and there exsist any function inside the queue, if yes then event queue
// will pick the function from the queue and push it into the call stack. also that function is removed from the queue.
// Event loop only push the callback from the queue once the callstack is empty.it continuosly keep on checking.
// First microtask queue is executed and when there is no callback left then event queue callback will be executed.
// There may be chance that event queue not get the chanace to execute there callback , so this condition is called as starvation.
// That's why it is not guranteed that setTimeout will execute exactly when it's time is expired.



//************************ JS Engine ****************************

// JS environment is needed to run the JS program. JS environment contain JS engine, Web API's, queues, event loop.
// JS is interpretor as well as compiler lanaguage.
// "interpretor" -- Just start executing the code line by line there is no any syntext checking before the execution.
// "compiler" -- First scan the code and convert it into optimised code and then start executing the code line by line.
// JS engine pass the code into three phases 1) parsing -- break the code into token and do the syntex parsing and create the AST that is 
// abstract syntex tree of the code.This Abstract syntex tree is then pass to the compiler.
// 2) Compilation -- compiler do the just in time compliation that is interpretor execute the code line by line and compiler take that line and optimised it.
// SO js support both compilation and interpretation, it  depends on the JS engine.
// Now compile code is converted into byte and pass to the execution phase.
// 3) Execution phase has memory heap and call stack. it also have garbage collector which uses mark and sweep algorithm  to free the memory
// from the heap which is not in used.




//********************************* Higher order function ************************
// function which take other function as an argument or return the function is called as the higher order function.
// The function as an argument is called as the callback function. Higher order function is used to make the moduler code.
// map -- it is used to tranform the array.
// filter -- it is used to filter the values of array based on some conditions.
// reduce -- it is used when we want to shrink the result. It uses changes with requirements.


// const radius = [4,3,9,6,5]
// const area = function (radius){
//     return 2 * 3.14 * radius
// }

// const calculate = function(radius, area){
//     const output = []
//     for(let i = 0; i < radius.length; i++){
//         output.push(area(radius[i]))
//     }
//     return output
// }
// console.log(calculate(radius, area))

// console.log(radius.map(area))

// const val = radius.map((r,i, radius)=>{
//     //console.log(r, i, radius)
//     return 2 * 3.14 * r
// })
// console.log(val)
