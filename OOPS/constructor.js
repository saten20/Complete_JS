//***************************constructor ***************//

// new keyword will convert the normal function call into constructor.
// What happened when we use new keyword
// step 1 - Empty object is created.
// step 2 - Constructor function(function that we have called) wrap all the member function and variable and push it into the empty object.
// i.e prototype of the empty object will inherit the prototype of the function that we have called.
// step 3 - all the member function and variable given by constructor function(function call) is injected inside the this keyword.
// step 4 - Now we have new instance of the object.
// so new userDetails() is constructor now.



// function userDetails(userid, username, isLoggedin){
//     this.userid = userid
//     this.username = username
//     this.isLoggedin = isLoggedin
//     return this
// }


// const user1 = new userDetails(1, "Satendra", "yadavsaten9834@gmail.com")
// const user2 = new userDetails(3, "viren", "virenyadv@gmail.com")
// console.log(user1)
// console.log(user2)

