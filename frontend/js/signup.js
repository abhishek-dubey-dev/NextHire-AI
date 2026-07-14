const password = document.getElementById("password");

const confirmPassword = document.getElementById("confirmPassword");

const strengthFill = document.querySelector(".strength-fill");

const strengthText = document.querySelector(".strength small");

const message = document.querySelector(".password-message");

password.addEventListener("input",()=>{

    const value=password.value;

    let strength=0;

    if(value.length>=8) strength++;

    if(/[A-Z]/.test(value)) strength++;

    if(/[0-9]/.test(value)) strength++;

    if(/[!@#$%^&*]/.test(value)) strength++;

    switch(strength){

        case 1:

            strengthFill.style.width="25%";

            strengthFill.style.background="#ef4444";

            strengthText.innerText="Weak";

            break;

        case 2:

            strengthFill.style.width="50%";

            strengthFill.style.background="#f59e0b";

            strengthText.innerText="Medium";

            break;

        case 3:

            strengthFill.style.width="75%";

            strengthFill.style.background="#3b82f6";

            strengthText.innerText="Strong";

            break;

        case 4:

            strengthFill.style.width="100%";

            strengthFill.style.background="#22c55e";

            strengthText.innerText="Very Strong";

            break;

        default:

            strengthFill.style.width="0%";

            strengthText.innerText="Password Strength";

    }

});

password.addEventListener("input",()=>{

    const value=password.value;

    let strength=0;

    if(value.length>=8) strength++;

    if(/[A-Z]/.test(value)) strength++;

    if(/[0-9]/.test(value)) strength++;

    if(/[!@#$%^&*]/.test(value)) strength++;

    switch(strength){

        case 1:

            strengthFill.style.width="25%";

            strengthFill.style.background="#ef4444";

            strengthText.innerText="Weak";

            break;

        case 2:

            strengthFill.style.width="50%";

            strengthFill.style.background="#f59e0b";

            strengthText.innerText="Medium";

            break;

        case 3:

            strengthFill.style.width="75%";

            strengthFill.style.background="#3b82f6";

            strengthText.innerText="Strong";

            break;

        case 4:

            strengthFill.style.width="100%";

            strengthFill.style.background="#22c55e";

            strengthText.innerText="Very Strong";

            break;

        default:

            strengthFill.style.width="0%";

            strengthText.innerText="Password Strength";

    }

});

confirmPassword.addEventListener("input",()=>{

    if(confirmPassword.value===""){

        message.innerText="";

        return;

    }

    if(password.value===confirmPassword.value){

        message.innerText="✔ Password Matched";

        message.style.color="#22c55e";

    }

    else{

        message.innerText="✖ Password doesn't match";

        message.style.color="#ef4444";

    }

});