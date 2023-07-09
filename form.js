const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const cpassword = document.getElementById('cpassword')



function validateInputs(){
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success = true


    if (usernameVal === ''){
        success = false
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }

    if (emailVal === ''){
        success = false
        setError(email,'Email is required')
    }
    else{
        setSuccess(email)
    }

    if (passwordVal === ''){
        success = false
        setError(password,'Password is required')
    }
    else if (passwordVal.lenght< 8){
        success = false
        setError(password,'Password must contain eight Charecter')
    }
    else{
        setSuccess(password)
    }

    if (cpasswordVal === ''){
        success = false
        setError(cpassword,'Confirm password should not empty')
    }
    else if (cpasswordVal !== passwordVal){
        success = false
        setError(cpassword,'Confirm password should be match to password')
    }
    else {
        setSuccess(cpassword)
    }

}

function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error')
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})
