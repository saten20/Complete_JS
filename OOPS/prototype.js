//***************** JS prototypal behaviour *****************//

// Every things in JS is object. array, string, function because every one have prototype in it and we can use the object method.
// In JavaScript, objects can "inherit" properties and methods from other objects. 
// The mechanism by which this inheritance works is called prototypal inheritance.
// When you create an object in JavaScript (using a constructor function, class, or object literal), that object gets an internal link to
//  a prototype object.
// The prototype object acts as a template from which the object can inherit properties or methods.

// function in js is object as well as function also. in below code we are accessing the function as obj.key this says that it behave as 
// the function also. This is happend due to prototypal inheritance.

// new will create the empty object which have it's own this.
// new object will inherit the userDetails.prototype which have method like increment and printme.
// all the property also inherit by the new object that is username and price of userDetails
// Every thing is done by the new keyword.





// function multiplayby5(num){
//     return num * 5
// }
// multiplayby5.username = "satendra";
// console.log(multiplayby5(5))
// console.log(multiplayby5.username)


// function userDetails(username,price){
//     this.username = username
//     this.price = price
// }
// userDetails.prototype.increment = function(){
//     this.price++
// }
// userDetails.prototype.printme = function(){
//     console.log(`${this.username} and price is ${this.price}`)

// }

// const user = new userDetails("jatin", 100)
// user.increment()
// user.printme()







// userDetails.prototype.functionName = ()=>{} this is used to add the method in the userDetails object.
// All function , string, object are passed throught the object so if we add some method inside the object then everyone can access 
// those method.
// This is done by using   Object.prototype.increment = function(){}. Now everyone can access the method increment
// Now increment method is injected inside the object prototype.
// Default property is there in each of the object



// const heros = ['thor', 'spiderman']
// const heropower = {
//     thor:"hammer",
//     spiderman:"sling"
// }

// Object.prototype.positivemindset = function(){           // This method will inject inside the object.
//     console.log("Heros have growth mindset")
// }

// heros.positivemindset()
// heropower.positivemindset()

// Array.prototype.checkhero = function(){                   // Here we are inserting the value inside the Array only so we can not access in object.
//     console.log("Hollywood heros")
// }
                                      


// Created the function that tell the true length with the help of prototype.


// const username = "Satendra     "
// String.prototype.truelength = function(){
//     console.log(`${this}`)
//     console.log(`true length is  ${this.trim().length}`)
// }
// username.truelength()
// "rahul          ".truelength();



// Suppose we have function inside the function.
// so each we get the call stack memroy.
// since they have different call stack so the inner function will have the access of global execution context.
// so when global context point to the window at that time this have the access of window.
// but when global context point to node at that time this have {} object reference.