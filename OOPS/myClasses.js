// class in js
// In class we don't have to use the function to defind the function. This can be done by just writting the name of the function.
// class uses the prototypal inheritance concepts.



// class userDetails{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${thise.password}#91ks`
//     }

//     changeuserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const newuser = new userDetails("saten", "yadavsaten9834@gmail.com", "1342")
// console.log(newuser)





// class use the prototypal inheritance concepts.
// The above class functionality can be implemented with the help of the prototypal inheritance.

// function userDetails(username, email , pass){
//     this.username = username
//     this.email = email
//     this.pass = pass
// }

// userDetails.prototype.encryptpassword = function(){
//     return `${this.pass}18*4&!2`
// }

// userDetails.prototype.changeuserName = function(){
//     return `${this.username.toUpperCase()}`
// }

// const newuser = new userDetails("satendra", "saten@gmail.com", "saten")
// console.log(newuser)






//************* Inheritance **************/

// To inherit one class into other extends keyword is used.
// as we know call() pass  our context to other function, so here this is done by the super() keyword.
// static keyword is used to make the method private. 
// static  method is not accessable for the user who create object of our class , also for the user who inherit our class.

class user{
    constructor(username){
        this.username = username
    }

    static createid(){
        return "_id 124321943"
    }
    showuser(){
        return `${this.username}`
    }
}

class nextflix extends user{
    constructor(username, email ,pass){
        super(username)
        this.email = email
        this.pass = pass
    }

    extraDetails(){
        return `${this.email}  ${this.pass}`
    }

}

const newuser = new nextflix("saten", "saten@gmail.com", "4244")
console.log(newuser.showuser())
console.log(newuser.extraDetails())