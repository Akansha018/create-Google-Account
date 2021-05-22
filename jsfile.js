function show(){
    var password = document.getElementById("pass1");
    var confirm = document.getElementById("pass2");
    var hide = document.getElementById("hide");
    var show = document.getElementById("show");
    if(password.type==="password", confirm.type==="password"){
        password.type='text';
        confirm.type='text';
        hide.style.display = "block";
        show.style.display = "none";
    }
    else(password.type==="text", confirm.type==="text")
    {
        password.type='password';
        confirm.type='password';
        hide.style.display = "none";
        show.style.display = "block";
    }
}