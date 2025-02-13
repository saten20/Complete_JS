/***********          object creation using the object literals i.e {}       *********/

// 1. object store the value as key value i.e {name: "satendra"}.
// 2. JS engine take the key as the string i.e "name " internally
// 3. Object.freeze(userDetails) this will freeze the object and no more changes is applicable on the userDetails object
// 4. we can use the Symbol as the key also in the object  (const mykey = Symbol("firstkey") --> {[mykey] :"satendra"})
// 5. The only way to print the sumbol is console.log(accountDetails[mykey]);
// 6. object can be access by using (obj.key) or (obj["key"])



// const userDetails = {   
//     userid: 123,
//     username: "satendra",
//     email:"satendrayadav@gmail.com",
//     password: 1234
// }

// console.log(typeof userDetails);
// userDetails["password"] = "saten@123"     
// console.log(userDetails);


// Object.freeze(userDetails);    // Once object is freeze we can not make any changes into the object
// userDetails.email = "yadavsaten9834@gmail.com"
// console.log(userDetails);






// const mykey = Symbol("keyone");        // using the symbol as a key

// const accountDetails = {
//     username : "rahul",
//     [mykey] : "rahul@sbi"            
// }

// console.log(accountDetails);
// console.log(accountDetails[mykey]);    // the only way to print the symbol as a key from the object


// accountDetails.addfunction = function(){         // we can add the function into the object  
//     console.log("This the function of accountDetails  object");
// }

// console.log(accountDetails);
// accountDetails.addfunction();






/****************  creation of object using the constructor ****************/

// 1. object can be create by using the Object constructor
// 2. To mereg the object we use the spread operator i.e {...obj1, ...obj2}. it return the new object which is collection of the mention object
// 3. Object.key(obj)  --> it will return the keys of the obj  in the form of the array
// 4. Object.values(obj)  --> return the values of the obj in the form of array.



// const obj = new Object({
//     name: "Satendra", 
//     email:"saten@gmail.com"
// })


// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// const obj1 = {1:'a', 2:'b'};
// const obj2 = {3:'c', 4:'d'};
// const obj3 = {5: 'e', 6:'f'};
// const obj4 = {...obj1, ...obj2, ...obj3};      
// console.log(obj4); 
// console.log(typeof (Object.keys(obj4)));
// console.log(Object.values(obj4));




/****          DeStructring  the object     ****/

// 1. Removing the property of the object into some variables is called as destrutring the object
// 2. This is usefull while we do the API call


// const userDetails = {
//     userid : 123,
//     username : "saten123", 
//     mail :"satenyadav@gmail.com",
//     isLoggedIn : false
// }

// const {userid: id, username : name , mail, isLoggedIn:status } = userDetails;
// console.log(id);
// console.log(name);
// console.log(mail);
// console.log(status);



