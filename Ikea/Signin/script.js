function func(){
            user = document.forms["login"]["uname"];
            pass = document.forms["login"]["pname"];
        
        if(user.value == ""){
            alert("Fill out the user name");
            user.focus();
            return false;
        }
        else if(pass.value == ""){
            alert("Fill out the password");
            pass.focus();
            return false;
        }
        else if(user.value=="Sanjay" && pass.value=="13"){
            location.href = "../index.html";
            return false;
        }
        else{
            alert("User not found");
            return false;
        }
    }