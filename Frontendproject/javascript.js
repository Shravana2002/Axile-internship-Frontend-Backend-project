function validateRegister(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;

if(name == "" || email == ""){
alert("Please fill all fields");
return false;
}

alert("Registration Successful");
return true;

}

function validateLogin(){

let email = document.getElementById("loginEmail").value;
let password = document.getElementById("loginPassword").value;

if(email == "" || password == ""){
alert("Enter Email and Password");
return false;
}

alert("Login Successful");
return true;

}
