// function myFunction() {
//     alert("Submission successful");
// }


    // function validateForm(event) {
    //     event.preventDefault(); 
    
    //     let x = document.forms["registrationForm"]["username"].value;
    //     let y = document.forms["registrationForm"]["email"].value;
    //     let z = document.forms["registrationForm"]["password"].value;
    //     let w = document.forms["registrationForm"]["answer"].value;
    //     console.log(x);
    
    //     if (x == "" || y == "" || z == "" || w == "") {
    //         alert("Please fill in everything");
    //     } else {
    //         alert("done");
    //     }
    // }
    // ---------------------------------------------------------------------------------------

$(document).ready(function () {

//     // $('#submit').click(function(event){ 
//     //     event.preventDefault();
//     // });


    $('#form').validate({
        rules: {
            username: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            },
            answer: {
                required: true
            }
        },
 
        messages: {
            username: {
                required: "Please enter your username"
            },
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email"
            },
            password: {
                required: "Please enter your password",
                minlength: "Your password must be at least 8 characters long"
            },
            answer: {
                required: "Please enter your answer"
            }
        },

        submitHandler: function (form) {
            alert("Form submitted successfully");
        }
    });
});




//     const form = document.getElementById("Form");
//     const username = document.getElementById("username");
//     const email = document.getElementById("email");
//     const password = document.getElementById("password");
//     const answer = document.getElementById("answer");
//     console.log(form);

//     form.addEventListener("submit",(e) => {
//         e.preventDefault();

//         validateInputs();
//     });

// const setError= (element, message) => {
//         const inputControl = element.parentElement;
//         const errorDisplay = inputControl.querySelector(".error");
    
//         errorDisplay.innerText = message;
//         inputControl.classList.add("error");
//         inputControl.classList.remove("success")
//     }

//     const setSuccess= (element) => {
//         const inputControl = element.parentElement;
//         const errorDisplay = inputControl.querySelector(".error");

//         errorDisplay.innerText = "";
//         inputControl.classList.add("success");
//         inputControl.classList.remove("error");
//     }

//     const isValidEmail = email => {
//         const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         return re.test(String(email).toLowerCase());
//     }
    
//     const validateInputs = () => {
//         var usernameValue = username.value.trim();
//         var emailValue = email.value.trim();
//         var passwordValue = password.value.trim();
//         var answerValue = answer.value.trim();
//     }

//     if(usernameValue ===""){
//         setError(username, "Username is required");
//     }else{
//         setSuccess(username);
//     }
    
//     if(emailValue ===""){
//         setError(email, "Email is required");
//     }else if (!isValidEmail(emailValue)){
//         setError(email, "Invalid email");
//     }else{
//         setSuccess(email);
//     }
    
//     if(passwordValue ===""){
//         setError(password, "Password is required");
//     }else if (passwordValuue.length < 8) {
//         setError(password, "Password must be at least 8 characters")
//     }else{
//         setSuccess(password);
//     }
    
//     if(answerValue ===""){
//         setError(answer, "Answer is required");
//     }else{
//         setSuccess(answer);
//     }
    
    
    // const username = document.forms["registrationForm"]["username"].value;
    // console.log(username);

    // const email = document.forms["registrationForm"]["email"].value;
    // console.log(email);

    // const password = document.forms["registrationForm"]["password"].value;
    // console.log(password); 

    // const answer = document.forms["registrationForm"]["answer"].value;
    // console.log(answer);

    // const form = document.getElementById("registrationForm");

    // const errorElement = document.getElementById("error");

    // form.addEventListener("submit",(e) => {
    //     e.preventDefault();

    //     validateInputs();
    // });

    // const setError= (element, message) => {
    //     const inputControl = element.parentElement;
    //     const errorDisplay = inputControl.querySelector(".error");

    //     errorDisplay.innerText = message;
    //     inputControl.classList.add("error");
    //     inputControl.classList.remove("success")
    // }

    // const validateInputs = () => {
    //     var usernameValue = username.value.trim();
    //     var emailValue = email.value.trim();
    //     var passwordValue = password.value.trim();
    //     var answerValue = answer.value.trim();
    // }

    // if(passwordValue ===""){
    //     setError(password, "Please enter");
    // }

        


    // let message =[]
    // if (username == "" || email == "" || password == "" || answer == "") {
    //     alert("Please fill in everything");
    // }

    // function validateForm() {
    //     let x = document.forms["registrationForm"]["username"].value;
    //     let y = document.forms["registrationForm"]["email"].value;
    //     let z = document.forms["registrationForm"]["password"].value;
    //     let w = document.forms["registrationForm"]["answer"].value;
    
    //     if (x === "" || y === "" || z === "" || w === "") {
    //         document.getElementById("error").innerHTML = "Please fill in all fields";
    //         return false;
    //     } else {
    //         document.getElementById("error").innerHTML = "";
    //         return true;
    //     }
    // }
