const form=document.getElementById("resetForm");

form.addEventListener("submit",(e)=>{

e.preventDefault();

const btn=document.querySelector(".login-btn");

btn.innerHTML="Updating Password...";

btn.disabled=true;

setTimeout(()=>{

window.location.href="password-success.html";

},2000);

});