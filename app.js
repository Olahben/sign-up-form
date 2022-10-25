const passwordFieldsNodelist = document.querySelectorAll(".error")
const passwordFields = Array.from(passwordFieldsNodelist);

passwordFields.forEach(ele => ele.setCustomValidity("Invalid password"));
