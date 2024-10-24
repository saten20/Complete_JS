// Lexical scopping

// Inner function have the access of the out function(parent function) variable.This is called as lexical scopping.
// But two inner function can not share the variable between themself. and outer function also can not share the variable.
// inner function first search the username in it's scope. now it will start serching in the scope where it is declare.


// function outer(){
//     const username = "saten123"
//     function inner(){
//         console.log(username)
//     }
//     inner()
// }
// outer()


// Closure property

// When we return the inner function it will return his lexical scope that is, all the outer function variables.
// Inner function have the access of the outer function variable due to lexical scopping.
// in the below example even outer() function get executed and remove from the call stack still we are able to print the value of the username.
// JavaScript functions always remember the context (or lexical scope) in which they were created. This means that even after the outer 
// function is finished executing, inner still has access to variables that were in scope when it was defined.


function outer(){
    const username = "satendra9834"

    function inner(){
        console.log(username)
    }
  
   return inner
}

const myfunc = outer();
myfunc()