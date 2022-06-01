var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmPassword = document.querySelector('#confirm-password')
var form = document.querySelector('form');

// Hàm show lỗi
function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')

    parent.classList.add('error')
    small.innerText = message
}

// Hàm thành công
function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')

    parent.classList.remove('error')
    small.innerText = ''
}

// Check rỗng
function checkEmptyError(listInput) {
    let isEmptyError = false
    // ktra từng ptu 1
    listInput.forEach(input => {

        // check đầu vào chuẩn dữ liệu
        input.value = input.value.trim();

        if(!input.value) {
            isEmptyError = true
            showError(input, 'Không được để trống !')
        } else {
            showSuccess(input)
        }
    });
    return isEmptyError
}

// check email
function checkEmailError(input) {
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    input.value = input.value.trim();
    
    let isEmailError = !regexEmail.test(input.value);
    if(regexEmail.test(input.value)) {
        showSuccess(input)
    } else {
        showError(input, 'Email Invalid');
    }

    return isEmailError ;

}

// check ký tự
function checkLengthError(input, min, max) {
    input.value = input.value.trim();
    if(input.value.length < min) {
        showError(input, `Phải có ít nhất ${min} ký tự`);
        return true;
    }

    if(input.value.length > max) {
        showError(input, `Không được vượt quá ${max} ký tự`);
        return true;
    }
    return false;
}

// check password trùng nhau
function checkMatchPasswordError(passwordInput, cfpasswordInput) {
    if (passwordInput.value !== cfpasswordInput.value) {
        showError(cfpasswordInput, 'Mật khẩu không trùng khớp')
        return true
    }
    return false;
}

form.addEventListener('submit', function(e) {
    e.preventDefault()

    let isEmptyError = checkEmptyError([username, email, password, confirmPassword]);
    let isEmailError = checkEmailError(email);
    let isUserNameLengthError = checkLengthError(username, 6, 10);
    let isPasswordLengthError = checkLengthError(password, 6, 10);
    let isMatchError = checkMatchPasswordError(password, confirmPassword)

    if(isEmptyError || isEmailError || isUserNameLengthError ||  isPasswordLengthError || isMatchError) {
        
        // Do nothing
    } else {

        // logic, call API,....
    }
}) 


