const submit = document.querySelector(".submit");
const box = document.querySelector(".box");
const inputDetails = document.querySelector(".inputDetails");
const check = document.querySelector(".enter");
const inputField = document.querySelector(".inputField");
const passwordInput = document.querySelector(".check");


let password = "2222"

check.addEventListener("click",() => {
    if(password == passwordInput.value){
        check.style.display = "none";
        passwordInput.style.display = "none";
        inputField.style.display = "block";
        submit.style.display = "block";
    }
    else{
        passwordInput.value = "";
        alert("Incorrect Password");
    }
})

submit.addEventListener("click",() => {
    let data = document.querySelector(".inputField").value;
    inputDetails.style.display = "none";
    document.querySelector(".number").innerText = data;
    box.style.display = "block";
})