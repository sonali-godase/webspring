const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const name =
document.getElementById("loginName").value.trim();

const email =
document.getElementById("loginEmail").value.trim();

let valid = true;


// validation
if(name.length < 3){

showError("nameError","Enter valid name");

valid = false;

}
else{

hideError("nameError");

}


const pattern =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!pattern.test(email)){

showError("emailError","Enter valid email");

valid = false;

}
else{

hideError("emailError");

}


if(!valid) return;


// check localStorage
const players =
JSON.parse(localStorage.getItem("players")) || [];


const player =
players.find(p =>
p.name === name &&
p.email === email
);


if(player){

document.getElementById("successBox")
.classList.remove("hidden");


document.getElementById("loginError")
.classList.add("hidden");


// redirect to home page
setTimeout(function(){

window.location.href = "index.html";

},2000);

}
else{

document.getElementById("loginError")
.classList.remove("hidden");

}

});



function showError(id,msg){

const el =
document.getElementById(id);

el.innerText = msg;

el.classList.remove("hidden");

}


function hideError(id){

document.getElementById(id)
.classList.add("hidden");

}