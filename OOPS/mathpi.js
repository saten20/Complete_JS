// why we can not change the value of the math.pi
// so we can get the access of all the property give to the key "PI" by using the Object method called getOwnPropertyDescriptor(Math ,"PI")
// so it will return the object inside that there are some property related to PI that are mark as true using c++.
// we can not change the value of those property like   writable: false, enumerable: false, configurable: false 
// That's why the value of the PI can not be change.


// we can make the changes in the property of our object using Object.defineProperty.


// console.log(Math.PI)
// const des = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(des)


const userDetails = {
    username:"saten",
    email:"saten@9834",
    pass:1243
}


console.log( Object.getOwnPropertyDescriptor(userDetails, "username"))

Object.defineProperty(userDetails, 'username', {
    enumerable:false
})
console.log( Object.getOwnPropertyDescriptor(userDetails, "username"))