// get set is the special keyword which is used to override the property(attribute)
// With the help of the getter and setter we allow the user to access our property  the way we want.
// in the below example username is not the method it is the name of the attribute that we want to change.
// set and get will take the value of the attribute from the memory and set it the way we want and return it when user demand.
// we are not giving the direct access of our attribute to the user.
// this._username specify that this is private attribute in layman language.
// The below get set functionality can be implemented with the help of the function also.

class userDetails{
    constructor(username, email, pass){
        this.username = username,
        this.email = email, 
        this.pass = pass
    }

    set username(value){
        this._username = value
    }
    get username(){
        return this._username.toUpperCase();
    }
}

const newuser = new userDetails("satendra","saten@9834", "12kd")
console.log(newuser.username)