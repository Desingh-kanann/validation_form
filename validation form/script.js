



function validate(){
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var error = document.getElementById("error-msg");

    var regx = /D00/
/*
if(name==""  || email=="" || password==""){
   error.innerHTML ="Fill the blank values";

    return false;
}

else{
    true;
}*/

if(regx.test(name)){
    alert("valid name");
    return false;
}
else{
    alert("enter valid name");
    return true;
}
}



