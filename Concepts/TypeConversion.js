// let val = 2355;
// console.log(typeof val);
// let convert_string  = String(val);
// console.log(typeof convert_string);

// let string  = undefined;
// let value = Number(string);
// console.log(typeof value);

// let flag = undefined;
// let value = Boolean(flag);
// console.log(flag);
// console.log(typeof value);

//**********************************  unexpected DATA TYPE **************************/
// Array , function, null is an object
// Type of the function is object as well as function.

let arr = ["satendra", 1, "rahul", 134];
console.log(typeof arr);

const value = function(){
    console.log("Hello from the other side");
}

console.log(typeof value)

const obj = {
    rollno: 133,
    sname:"Tushar",
    add:"Mumbai"
}

console.log(typeof obj);

let val = null;
console.log(typeof val);


// const val = "Satendra"
// console.log(typeof val)
// const newval = Number(val)
// console.log(typeof newval)