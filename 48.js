
var form = document.querySelector("form");
var name = form.querySelector("div #names");
var email = form.querySelector("div #email");
var password = form.querySelector("div #password");

form.addEventListener("submit",formHandler);


function formHandler(e){
    e.preventDefault();
    // console.log("submit");
    // console.log(names.value);
    // console.log(email.value);
    // console.log(password.value);

    var info = {
        names : names.value,
        email : email.value,
        password : password.value
    }

    console.log(info);
    names.value = "",
    email.value = "",
    password.value = ""
   
}