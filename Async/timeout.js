// ***************  setTimeout(()=>(), time) and clearTimeout() ******************

// setTimeout will take two parameter first call back function or function reference and second is time.
// setTimeout will execute after the specified time.
// clearTimeout() will take the one parameter that is reference of the setTimeout function whom we wont to stop.
// setTimeout() and setInterval() both are the async method of js.

//*********************** setInterval(()=>(), time, "argument") and clearInterval() *************

// setInterval will take the three argument first the callback function . we can also pass the reference of the function.
// second the time and third is argument which we can pass to the function when we use the function reference.
// clearInterval() function will take the reference of the setInterval whom we want to clear.

setTimeout(()=>{
    console.log("i'm timeout")
}, 3000)

function callme(){
    console.log("callme")
}
const ref = setTimeout(callme, 1000)
clearTimeout(ref)




setInterval(()=>{
    console.log("i'm interval")
}, 3000)

function intervalcall(str){
    console.log(`${str} interval call`)
}

setInterval(intervalcall, 2000, "satendra")


