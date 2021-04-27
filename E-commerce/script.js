const form = document.getElementById('form');
const password1El = document.getElementById('password1'); 
const password1E2 = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm(){
    //using constraint API
    isValid = form.checkValidity();
    //main message
    if(!isValid){
    message.textContent = 'Please fill out all fields.'
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
    }
    //check to see if passwords match
    if (password1El.value === password1E2.value){
        passwordsMatch = true;
        password1El.style.borderColor = 'green';
        password1E2.style.borderColor = 'green';
    }else{
        passwordsMatch = false
        message.textContent = 'Make sure passwords match.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red'
        password1El.style.borderColor = 'red';
        password1E2.style.borderColor = 'red';
        return;
    }
    if(isValid && passwordsMatch){
        message.textContent = 'Successfully Registered!!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}
function storeFormData(){
    const user = {
        name: form.name.value,
        phone:form.phone.value,
        email: form.email.value,
        password: form.password.value,
    }
};
//do something with user data
function get(){
console.log(user);
}
function processFormData(e) {
    e.preventDefault();
    validateForm();
    //submit data
    if(isValid && passwordsMatch){
        storeFormData();
    }
}

// event listener
// form.addEventListener('submit', processFormData);