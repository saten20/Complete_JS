/******         String in JS       ******/

// 1. String is immutable in js i.e you can not change the actual string, all the opeartion perfrom on the copy of the string
// 2. {`${user} is the user`} This is called as the string interpolation or string literals

const str = new String("satendra");
console.log(typeof str);
const password = "Saten@123";
console.log(password.trim());
console.log(password.toLowerCase());
console.log(password.toUpperCase());
console.log(password.slice(4, 8));
console.log(password.replace("@123" , "dra3"));
console.log(password);