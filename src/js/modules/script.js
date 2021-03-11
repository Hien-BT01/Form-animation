import { container, panelLeft, panelRight, signInBtn, signInForm, signUpBtn, signUpForm } from "../variables/variables.js";
signUpBtn.addEventListener("click",e => {
    e.preventDefault();
    container.classList.add("switch");
    panelLeft.classList.add("move-left-out");
    panelRight.classList.add("move-left-in");
    signUpForm.classList.add("left-move");
    signInForm.classList.add("right-move");
})

signInBtn.addEventListener("click", e => {
    e.preventDefault();
    container.classList.remove("switch");
    panelLeft.classList.remove("move-left-out");
    panelRight.classList.remove("move-left-in");
    signUpForm.classList.remove("left-move");
    signInForm.classList.remove("right-move");
})