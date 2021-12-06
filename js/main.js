// Get the modal
var modal = document.getElementById('id01');
        
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// let form = document.getElementById('contact');
// let subForm = document.getElementById('contact-subpage');

// form.addEventListener('click', validateInputs());
// subForm.addEventListener('click', validateSubInputs());

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateInputs() {
    let usernameValue = document.getElementById('input-name');
    let emailValue = document.getElementById('input-email');
    // let subjectValue = document.getElementById('input-subject');
    let textareaValue = document.getElementById('textarea');
    
    if(usernameValue.value == '') {
        alert('Username is required');
        usernameValue.style = "border: red solid;";
        emailValue.style = "border: 1px rgb(254, 209, 54) solid;";
        textareaValue.style = "border: 1px rgb(254, 209, 54) solid;";
    }
    else if(emailValue.value == '') {
        alert('Email is required');
        emailValue.style = "border: red solid;";
        usernameValue.style = "border: 1px rgb(254, 209, 54) solid;";
        textareaValue.style = "border: 1px rgb(254, 209, 54) solid;";
    } 
    else if (!isValidEmail(emailValue.value)) {
        alert('Provide a valid email address');
        emailValue.style = "border: red solid;";
        usernameValue.style = "border: 1px rgb(254, 209, 54) solid;";
        textareaValue.style = "border: 1px rgb(254, 209, 54) solid;";
    }
    else if (textareaValue.value == '') {
        alert('Message is required');
        textareaValue.style = "border: red solid;";
        usernameValue.style = "border: 1px rgb(254, 209, 54) solid;";
        emailValue.style = "border: 1px rgb(254, 209, 54) solid;";
    }
    else {
        usernameValue.style = "border: 1px rgb(254, 209, 54) solid;";
        emailValue.style = "border: 1px rgb(254, 209, 54) solid;";
        textareaValue.style = "border: 1px rgb(254, 209, 54) solid;";
    }

}

function validateSubInputs() {
    let usernameValue = document.getElementById('sub-input-name');
    let emailValue = document.getElementById('sub-input-email');
    // let subjectValue = document.getElementById('sub-input-subject');
    let textareaValue = document.getElementById('sub-textarea');
    
    if(usernameValue.value == '') {
        alert('Username is required');
        usernameValue.style = "border: red solid;";
        emailValue.style = "border: 1px rgb(254, 209, 54) solid;";
        textareaValue.style = "border: 1px rgb(254, 209, 54) solid;";
    }
    else if(emailValue.value == '') {
        alert('Email is required');
        emailValue.style = "border: red solid;";
        usernameValue.style = "border: 1px rgb(254, 209, 54) solid;";
        textareaValue.style = "border: 1px rgb(254, 209, 54) solid;";
    } 
    else if (!isValidEmail(emailValue.value)) {
        alert('Provide a valid email address');
        emailValue.style = "border: red solid;";
        usernameValue.style = "border: 1px rgb(254, 209, 54) solid;";
        textareaValue.style = "border: 1px rgb(254, 209, 54) solid;";
    }
    else if (textareaValue.value == '') {
        alert('Message is required');
        textareaValue.style = "border: red solid;";
        usernameValue.style = "border: 1px rgb(254, 209, 54) solid;";
        emailValue.style = "border: 1px rgb(254, 209, 54) solid;";
    }
    else {
        usernameValue.style = "border: 1px rgb(254, 209, 54) solid;";
        emailValue.style = "border: 1px rgb(254, 209, 54) solid;";
        textareaValue.style = "border: 1px rgb(254, 209, 54) solid;";
    }

}
