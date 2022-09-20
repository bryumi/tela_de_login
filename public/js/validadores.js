const formRegisterElement = document.querySelector('form');
const inputsForm = document.querySelectorAll('form input')

inputsForm.forEach((input) => {
    input.insertAdjacentHTML('afterend', '<span class="error" style="display:none">Campo Incorreto</span>');
})

function isInputValid(name,value){
    if(!value.length){
        return false;
    }

    switch(value){
        case 'name':
            return value.length > 2 && value.length < 80;
        
        case 'username':
            return value.length > 2 && value.length < 100;
        case 'email':
            return value.length > 2 && value.length < 80;
        case 'password':
            return value.length > 8;

        default:
            return false
    }
}
formRegisterElement.onsubmit = (event) => {
    event.preventDefault()
    
    const { name, username, email, password, } = formRegisterElement;

    const userData = { name, username, email, password }

    let isFormInvalid = false;

    Object.keys(userData).forEach(key => {
        const input = userData[key];
        const spanElement = input.nextElementSibling;
        const isValid = isInputValid(input.name, input.value.trim());
        if(!isValid){
            isFormInvalid = true;
            spanElement.style.display = 'block';
            spanElement.innerHTML = `Campo ${input.name} vazio`

            return;
        } 

        spanElement.style.display = 'none';
        
    });

    if(isFormInvalid){
        return false;
    }
}