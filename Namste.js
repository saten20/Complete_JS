// Javascript is synchronous single threaded programming language.
// single threaded -- execute single command at a time
// global execution context [memory creation phase (1) | code execution phase (2)]
// This thing will be maintain by the call stack.


// Hoisting 
// it is a phenomenon in JS using which we can access the function before it's intialization.
// The behind reason is Execution Context
// Before the code execution phase first the memory creation happend. so all the variable got the memory and function also got the memory.
// All the variable store the undefind value in the memory creation phase. during code execution they got the actual value.
// Because of that we are able to use the function and variable before it's defination.

// Global Object or window object
// so when we run the js program , JS will create the two things global execution context and global object.
// global scope means any thing declare outside the function.
// All the function and variable declare in the global scope is attached with the global object.
// we can access all the variable and function as window.variabelName or window.functionCall().
// In case of chrome browser we call the global object as window but in other browser they may be different.
// this is the keyword which also created when we run js program. this point to the window object.
