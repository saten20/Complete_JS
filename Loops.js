/*****  for of *****/

// 1. for of loop -> for(const it of iterable)
// 2. iterable are arr, string , map
// 3. Object are not iterable using for of loop
// 4. map can be iterate by using the for of loop 





// const arr = [1, 3, 5, 3, 5];
// for(const it of arr){
//     console.log(it);
// }



// const userDetails = {
//     username: "satendra",
//     email: "satendrayadav@gmail.com"
// }

// for(const it of userDetails){
//     console.log(it);
// }

// const mp = new Map();
// mp.set(1, "satendra");
// mp.set(2, "virendra");
// mp.set(3, "yadav");


// for(const [key, value] of mp){
//     console.log(`${key}  ${value}`);
// }









/********************      for in    ******************/






// 1. for in loop --> for(const it in arr) 
// 2. we can not iterate in map using for in loop
// 3. object is easy iterable using the for in loop  --> for(const key in obj){obj[key]}





// const arr = new Array(1, 43, 2, "satendra", "hitesh");
// for(const it in arr){
//     console.log(arr[it]);
// }

// const mp = new Map();
// mp.set(1, "india");
// mp.set(2, "usa");
// mp.set(3, "srilanka");

// for(const [key, value] in mp){    // Not iterable 
//     console.log(value)
// }


// const userDetails = {
//     userid: 134,
//     username :"saten123",
//     email:"satendra@gmail.com"
// }

// for(const it in userDetails){
//     console.log(userDetails[it]);
// }










/********        forEach    **********/



// 1. forEach(() => {}) is the predefind method of Array. it can be used with the map also
// 2. it take callback function as an  argument , with three parameter (item , index, completArray)
// 3. In the case of the map (mapvalue, key, fullmap)
// 4. it can not be used with the object
// 5. forEach() loop does not return anything , but what if we want something in return based on the condtion then for that we used filter(() => {})



// const arr = [12, 42, "satendra", 42, 431, "jatin"];

// arr.forEach((item, index, arr)=>{
//     console.log(item , index, arr);
// })

// const userDetail = new Map();
// userDetail.set(1, 123);
// userDetail.set("fname", "satendra");
// userDetail.set(3, "satendra@gmail.com")

// userDetail.forEach((item, index, arr) => {
//     console.log(item , index, arr);
// })






/********************   filter *************/

// 1. it return the value based on the conditon, it is predefind method of the array
// 2. const val = filter( () => { })
// 3. it take three parameter (value , index, completeArray)

// const arr = new Array(1, 2, 3, 4, 5,6,7,8, 9, 19);

// const newarr = arr.filter((item) => {
//     return item > 5
// })

// console.log(newarr);


// const bookDetails = [
//     {
//         bid: 123,
//         bname:"history",
//         edition: 2000
//     },
//     {
//         bid: 323,
//         bname:"history",
//         edition: 2011
//     },
//     {
//         bid: 153,
//         bname:"geography",
//         edition: 2003
//     },
//     {
//         bid: 832,
//         bname:"math",
//         edition: 1988
//     },
//     {
//         bid: 923,
//         bname:"english",
//         edition: 2021
//     },
//     {
//         bid: 111,
//         bname:"calculus",
//         edition: 1900
//     },
// ]

// const newData = bookDetails.filter( (bk,index, arr) => {
//     console.log(index, arr);
//     return bk.bname == "history" && bk.edition == 2000

// });

// console.log(newData);






/********************   map *************/


// 1. map is also array's predefind method
// 2. map( () => { }) , it also take the three arguments (item , index, completeArray)
// 3. map is used when we want to modify the data. it return the data
// 3. we can perform the chaining also in the map , inbetween we can use the filter also
// 4. when we apply the filter from left map return the value to the right one and at the end last map return the value.




// const score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newScore = score.map( (num) => {
//     return num * 10;
// })
// console.log(newScore);
// console.log(score);


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newarr = arr.
//                 map( (num)=>{
//                     return num * 10;
//                 })
//                 .map((num) =>{
//                     return num + 1
//                 })
//                 .filter( (num)=>{
//                     return num > 40
//                 })


// console.log(newarr);





/********************   reduce *************/

// 1. reduce( (acc, curr) => {return acc + curr}, intialval) 
// 2. it takes two paramter first the accumator in which all the values accumulate and second the curr val. initially accumaltor take the initial val
// 3. This can be accheive by using other forloop's also
// 4. currval can be the item of the array i.e iterator


// const arr = [1, 2, 3 , 4];

// const val = arr.reduce( (acc, currval) =>{
//     console.log(`acc: ${acc} currval: ${currval}`)
//     return acc + currval
// }, 7)

// console.log(val);


// const shopingCart = [
//     {
//         course: "js",
//         price:2999
//     },
//     {
//         course: "c++",
//         price:3999
//     },
//     {
//         course: "Android",
//         price:10999
//     },
//     {
//         course: "DSA",
//         price:4999
//     },
//     {
//         course: "py",
//         price:1999
//     }
// ];

// const totalAmount = shopingCart.reduce( (acc, item) => {
//     return acc + item.price
// }, 0);

// console.log(totalAmount);