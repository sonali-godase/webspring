// select form
const form = document.getElementById("form");

// when button clicked
form.addEventListener("submit", function(e){

    e.preventDefault(); // stop page refresh

    // get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = parseInt(document.getElementById("age").value);

    let valid = true;

    // NAME VALIDATION
    if(name.length < 3){
        showError("nameError","Enter valid name");
        valid = false;
    } else {
        hideError("nameError");
    }

    // EMAIL VALIDATION
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!pattern.test(email)){
        showError("emailError","Enter valid email");
        valid = false;
    } else {
        hideError("emailError");
    }

    // AGE VALIDATION
    if(isNaN(age) || age < 18 || age > 60){
        showError("ageError","Age must be 18–60");
        valid = false;
    } else {
        hideError("ageError");
    }

    // IF ALL VALID → GO LOGIN PAGE
    if(valid){

        // calculate points
        const points =
        500 + Math.floor(Math.random()*500);

        // save to localStorage
        let players =
        JSON.parse(localStorage.getItem("players")) || [];

        players.push({
            name:name,
            email:email,
            age:age,
            points:points
        });

        localStorage.setItem(
            "players",
            JSON.stringify(players)
        );

        // show success
        document.getElementById("successBox")
        .classList.remove("hidden");

        document.getElementById("points")
        .innerText =
        "Score: " + points;

        // redirect after 2 seconds
        setTimeout(function(){

            window.location.href = "login.html";

        },2000);

    }

});


// error functions
function showError(id,msg){
    const el = document.getElementById(id);
    el.innerText = msg;
    el.classList.remove("hidden");
}

function hideError(id){
    document.getElementById(id)
    .classList.add("hidden");
}