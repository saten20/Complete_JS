// **********************Lexical scopping*********************

// Lexical scope = local memory + reference to parent's lexical scope.
// Inner function have the access of the outer function(parent function) variable.This is called as lexical scopping.
// But two inner function can not share the variable between themself.
// Outer function or global scope can not access the variable of inner  because inner function's execution context is not created yet.

// Inner function first search the username in it's execution context . if it is not found then it will start seraching in it's parent lexical
// execution context  it will keep on searching till it reaches the Global execution context of the running program.
// This is called as scope chaining.
// global Execution context parent points to it' parent lexical scope which is null.


// function a(){
//     c();
//     function c(){
//         console.log(b)
//     }
// }
//  let b = 100;
//  a();


// function outer(){
//     const username = "saten123"
//     function inner(){
//         console.log(username)
//     }
//     inner()
// }
// outer()


// Closure property

// When we return the inner function it will return his lexical scope that is all the outer function variables.
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