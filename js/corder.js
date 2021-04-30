var emailArray=['199237'];
var passwordArray=['1234'];

var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");
var forgetBox = document.getElementById("forgot");

var loginTab = document.getElementById("lt");
var regTab = document.getElementById("rt");


function login(){
    event.preventDefault();

    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;

    var i = emailArray.indexOf(email);

    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            alert("Order number required.");
            return ;
        }
        alert("Order number does not exist.");
        return ;
    }
    else if(passwordArray[i] != password){
        if (password == ""){
            alert("Contact number required.");
            return ;
        }
        alert("Contact number does not match.");
        return ;
    }
    else {
        window.location.href='../order';

        document.getElementById("se").value ="";
        document.getElementById("sp").value="";
        return ;
    }

}
