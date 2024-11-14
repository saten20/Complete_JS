//***************** Promise ************//

// Promise is eventually completing object.
// when promise is create it is in pending state , if completed then resolved state if not then rejected state.
// first we have to create the promise then we will consume the promise.
// The syntex of the promise creation , const promise = new Promise(()=>{//code}) 
// Promise Either reject or resolve.
// then((data)=>{}) then block is used to handle if promise is resolve.
// catch((error)=>{}) catch block is used to handle if promise is reject.
// finally(()=>{}) finally block will execute always.

// we will put all the data inside the resolve()  block that we want when promise will resolve.
// same way we will put all the data inside the reject() block that we want once promise is rejected.
// it is not compulsory that you have to use the then() catch() block to handle the promise. we can use the (async await)  function also.

// if a .then() block returns a value, that value can be passed to the next .then() block in the chain.
// Each .then() block returns a new promise, allowing you to chain multiple .then() calls.
// If you return a value from one .then() block, it is passed as the resolved value to the next .then() in the chain.

// try{} catch(e){} block is used to handle the error.
// response.json() is also take time so we have to use the (await response.json()).since response always comes in string form so 
// we have to convert it into json form using .json.
// fetch() method also return the promise that can be handle using async await or by using then() catch() block.




// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("inside the settimeout function")
//         resolve("resolved")
//     }, 1000)
// })
// console.log(promise)
// promise.then((data)=>{
//     console.log("Your promise is resolved")
//     console.log(promise)
// }).catch((e)=>{
//     console.log("Promise is rejected")
// })


// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         const userDetails = {
//                 username: "satenyadav",
//                 email:"yadavsaten9834@gmail.com",
//                 pass:"9832"
//             }
//             resolve(userDetails)
//         })
// })

// promise.then((data) =>{
//     console.log(data)
//     return data.username
// })
// .then((username)=>{
//     console.log(username)
// })
// .catch((e)=>{
//     console.log(e)
// })
// .finally(()=>{
//     console.log("Either promise is resolve or rejected")
// })



// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         flag = false;
//         if(flag)
//             resolve("your promise is resolved")
//         else
//             reject("your promise is rejected")
//     }, 1000)
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((e)=>{
//     console.log(e)
// })
// .finally(()=>{
//     console.log("Done with the promise")
// })



// without then() catch() block



// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         flag = true;
//         if(flag)
//               resolve("your promise is resolved")
//         else
//               reject("your promise is rejected")
//     }, 2000)
// })

// async function callme(){
//    try{
//     const data = await promise
//     console.log(data)
//    }
//    catch(e){
//     console.log(e)
//    }
// }
// callme()
// console.log("Hello")




// fetch() also return the promise that we are handling with async await




// async function getData(){
//     try{
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data =  await response.json()   
//         console.log(data)
//     }catch(err){
//         console.log(err)
//     }
// }
// getData()


// fetch() using then() catch() block

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((data)=>{
//     return data.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((e)=>{
//     console.log(e)
// })