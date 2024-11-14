/**           JS Array *******/

// 1. it can store the value of any types. it is object in JS
// 2. method like push() , pop(), unshift(), shift(), slice(), splice(), sort(), length, concat() are present in the array
// 3. To  concat the multiple array spread operator (...arr1, ...arr2, ...arr3) is used


//  const arr = new Array(1, 4, 2,"Satendra", 4, 3 ,2,"hitesh",42);
// console.log(typeof arr);

// console.log(arr.push(100));  // return the size and push the value in the back


// console.log(arr.pop());  // pop the value from the back and return the pop value

// console.log(arr.unshift(400));  // insert the value from the front


// console.log(arr.shift());   // remove the value from the front

// console.log(arr);

// console.log(arr.sort());  // sort function make the changes in the orignal array
// console.log(arr)


// const arr2 = ['x','y','z'];   //join method
// const val = arr.join(arr2);
// console.log(val);

// const newarr = new Array(4, 6, 8, 10, 12, 14, 16);
// console.log(newarr.slice(2, 4));      // it will slice idx1 to idx2 excluding idx2 and it will not change the original  array
// console.log(newarr);

// console.log(newarr.splice(2, 3));    // splice from idx1 to size , it will modify the orignal array
// console.log(newarr);



// const arr1 = [1, 3, 5, 7, 9];
// const arr2 = [2, 4, 6, 8 ,10];
// const arr3 = [20, 30, 40, 50, 60];

// const arr = arr1.concat(arr2, arr3);    // concat() method to merge the array
// console.log(arr);

// const newarr = [...arr1, ...arr2, ...arr3];    // spread operator to spread the array
// console.log(newarr);

// console.log(Array.from('satendra'));     // convert the string to array Note: for number or other things give the empty array


// console.log(Array.from({sname: "satendra"}));    // This is also not convertable --> return the empty object


const a1 = 100;
const a2 = 200;
const a3 = 300;
const a4 = 400;
// console.log(Array.of(a1, a2, a3, a4));    // convert the array form