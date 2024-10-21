// this represent the current context.
// when we not return this inside the function is automatically return this.
// in the below example when we are using the username in the function . JS engine is not able to find out username variable, because that 
// variable is not exsist in the function. when we use the this keyword so we are specifying that use your global space username.

// when we use arrow funtion as a funciton inside the object. In JavaScript, arrow functions do not bind their own this context.
// Instead, they inherit this from their surrounding  scope which is global this.
// inside the users object inherits this from where the users object was defined, which is likely the global scope. 
// So, this.username in the arrow function is trying to access username from the wrong context. hence we can not use the this keyword in arrow.

const users = new Object({
    username: "sattu",
    id:134,
    entry:function(){
        console.log(`Current user is ${this.username}`)
    }
})

users.entry()


//***************************constructor ***************/

// new keyword will convert the normal function call into constructor.
// step 1 - first new keyword will create the empty object.
// step 2 - that empty object has it's own this.
// step 3 - all the value pass inside the function call which is construtor now will be store in that empty created object by new.
// step 4 - and this object will be return by the new keyword to any other variable.
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
