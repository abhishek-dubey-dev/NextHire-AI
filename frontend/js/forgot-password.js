const form = document.getElementById("forgotForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();

    if(email===""){

        alert("Please enter your email.");

        return;

    }

    const button=document.querySelector(".login-btn");

    button.innerHTML="Sending Link...";

    button.disabled=true;

    setTimeout(()=>{

        alert("Password reset link has been sent successfully.");

        button.innerHTML="Send Reset Link";

        button.disabled=false;

    },2000);

});