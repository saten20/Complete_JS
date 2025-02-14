//*************************call ***********************/

// we use the call to pass our context to other function.
// why we are doing this? In the below example when the inner function completed it's execution context , it will distroy.
// so value that present inside that function are no more available.
// so with the help of the call we paased our execution context so all the changes are done inside our this.


function setusername(username){
    this.username = username
}

function createUser(username, email , pass){
    setusername.call(this, username)
    this.email = email
    this.pass = pass
}

const newuser = new createUser("satendra", "satenyadav285@gmail.com", "1242")
console.log(newuser)



//******************************* Bind ********************************/