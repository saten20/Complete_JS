// Given an array in JS.iterate only on the original property of the Array.

// Ans --
// We can insert the new property also in the array.so when we iterate in the array it will display all those
// user defind property also. which we don't want.
// there is one method called hasOwnProperty(value). this will not true for the extra property that we are inserting.

const arr = [2,55,355,26,43,5]
Array.prototype.myname = "satendra";

for(let val in arr){
    console.log(val)
}

// for(let val in arr){
//     if(arr.hasOwnProperty(val)){
//         console.log(val)
//     }
// }