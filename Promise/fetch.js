//****************** fetch API *******************//
// fetch() method is used to do the network call.
// fetch return the promise that we can handle either by using the then() catch() block or by using the async await.
// fetch promise will only reject if network call is rejected otherwise if we are getting any code 404/304/202 it will resolve.
// fetch(''url', {header}) take two parameter first one is the location from where we want to fetch the data 
// second parameter is header in which we can pass object, body , data etc.
// As we know all the async function call is registor in the task queue and fetch function is registor in microtask queue(priority queue).
// microtask queue have the highest priority.



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