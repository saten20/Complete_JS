// ***************  setTimeout(()=>(), time) and clearTimeout() ******************

// setTimeout will take two parameter first call back function or function reference and second is time.
// setTimeout will execute after the specified time.
// clearTimeout() will take the one parameter that is reference of the setTimeout function whom we wont to stop.
// setTimeout() and setInterval() both are the async method of js.
// setTimeout() will execute only once.

// setTimeout does not guaranteed that it will execute as the time expired.
// event loop will first check the call stack if call stack is empty then only event loop will pick the callback from the queue and put it into
// call stack. But if there are function or global execution context which are taking  long time to execute then setTimeout callback function
// will not get the callstack to complete it's execution. That's why it is not guaranteed that setTimeout will execute as it's time expires.
// And there may be callback inside the microtask queue which has the higher priority then the event queue.so event loop will put that callback
// first into the callstack.
// Even if the Timeout time is 0 second still i has to go through the step of operation like setTimeout will registor the callback into the 
// web API and that callback push into the event queue and from there it will push into the callstack with the help of the event loop.

console.log("start")
setTimeout(()=>{
    console.log("callback")
}, 0)
console.log("End")

//*********************** setInterval(()=>(), time, "argument") and clearInterval() *************

// setInterval will take the three argument first the callback function . we can also pass the reference of the function.
// second the time and third is argument which we can pass to the function when we use the function reference.
// clearInterval() function will take the reference of the setInterval whom we want to clear.
// setinterval will keep on executing after each mention time.

// setTimeout(()=>{
//     console.log("i'm timeout")
// }, 3000)

// function callme(){
//     console.log("callme")
// }
// const ref = setTimeout(callme, 1000)
// clearTimeout(ref)




// setInterval(()=>{
//     console.log("i'm interval")
// }, 3000)

// function intervalcall(str){
//     console.log(`${str} interval call`)
// }

// setInterval(intervalcall, 2000, "satendra")


