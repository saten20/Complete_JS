/**********   JS Functions ***********/

// 1. JS function is liberal as compair to the c , c++ function
// 2. There is no need to defind the data type in the parameter of the function. 
// 3. This function does not have any return type statment still it can return the value
// 4. Function got the memeory in the heap

// 1. We can pass the normal variable, object , array in the parameter of the Function
// 2. if we are not sure that how many varible does the function call give to the function defination then instead of using the paramter in the function call
//    we can use the Rest operator (...num). This operator can take any number of input from the user. This is same as the spred operator of array and object

// 1. Hoisting in js function
// 2. when we hold the value of function in variable at that time statement sequnce matter but when we are not holding the return value of the function at that 
//    time you can call the function before it's defination also this is called as hoisting in JS




// function userDetails(user){
//     console.log("This is the user function");
//     console.log(`user is ${user}`)
//     const arr = new Array(1,3, 4, 2, "satendra", 442, 123, "hitesh");
//     return arr;
// }
// const returnval = userDetails("satendra");
// console.log(returnval);


// function shoppingCart(...values){
//     return values;
// }

// function shoppingCart(val1, val2, ...values){
//     return values;   
// }

// console.log(shoppingCart(12, 4423, 211, "satendra", "jitesh", 4421));     // first and second values will store in val1 and val2 




// const userDetails = new Object({
//     userid: 132,
//     username: "saten123",
//     email:"satendrayadab285@gmail.com"
// })

// function showDetails(user){
//     console.log(user.userid);
//     console.log(user.username);
// }

// showDetails({
//     userid:1000,
//     username:"jatin"
// })


// function studentmarks(marks){
//     console.log(marks[0]);
//     console.log(marks[1]);
//     console.log(marks[2]);
// }

// studentmarks([122, 442, 223, 2223]);



console.log(addone(32))

function addone(num){
    return num + 1;
}




const returnVal = function(num){      // we can not use retrunVal() before the function defination as we are doing in the above program
    return num + 1
}
console.log(returnVal(100));
