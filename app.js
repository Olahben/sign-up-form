const passwordFieldsNodelist = document.querySelectorAll(".error")
const passwordFields = Array.from(passwordFieldsNodelist);

passwordFields.forEach(ele => ele.setCustomValidity("Invalid password"));


const passwordField1 = document.querySelector("#password")
const passwordField2 = document.querySelector("#confirm-password")