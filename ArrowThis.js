/**         this keyword *****/

// 1. this represent the current context. i.e it store the address of the object in which it is used
// 2. this keyword is only used inside the object. it can not be used inside function and arrow function


// const userDetails = {
//     username:"saten",
//     email: "satendra285@gmail.com",
//     show: function(){
//         console.log(`${this.username} , welcome to the skillify`);
//     }
// }

// console.log(userDetails.show());
// userDetails["username"] = "satendra";
// console.log(userDetails.show());






/*******************                   Arrow Function in Js               **************/

// 1. The arrow function is defind as ()=>{ //function code }
// 2. if we have only one line in the arrow function then there is no need to specify the return keyword and use () instead of {} i.e ()=>().



// const value = (num1, num2) =>{
//     return num1 + num2
// }
// console.log(value(100, 200));



// const value = (num1, num2) =>(num1 + num2);
// console.log(value(10, 20));


// const value = ()=>{return {username:"satendra"}}
// console.log(value())

