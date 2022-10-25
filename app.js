
const passwordField1 = document.querySelector("#password")
const passwordField2 = document.querySelector("#confirm-password")
const warningPara = document.querySelector(".warning")

const passwordFields = [passwordField1, passwordField2]

passwordFields.forEach(ele =>(ele.addEventListener('change', () => {
    if(passwordField1.value === passwordField2.value) {
        passwordField1.classList.remove("error")
        passwordField2.classList.remove("error")
        if(warningPara.textContent === 'Passwords do not match') {
            warningPara.textContent = ''
        }
    }
    else {
        passwordField1.classList.add("error")
        passwordField2.classList.add("error")
        warningPara.textContent = 'Passwords do not match'

    }
})));

