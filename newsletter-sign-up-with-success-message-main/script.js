let INPUT_MODIFIED = false;

let mainInput = document.querySelector("#main-input");
let mainButton = document.querySelector("#main-button");
let successButton = document.querySelector("#success-button");
let mainArticle = document.querySelector(".main-article");
let successArticle = document.querySelector(".success-article");

mainInput.addEventListener("focus", getFocus);
mainInput.addEventListener("blur", lostFocus);
mainButton.addEventListener("click", getClick);
successButton.addEventListener("click", getSuccessClick);







function getFocus() {
    if (INPUT_MODIFIED==false) {
        INPUT_MODIFIED = true;
        mainInput.style.color = "#242742";
        mainInput.style.borderColor = "#242742";
        mainInput.value = "";
    }
    
}

function lostFocus() {
    if (mainInput.value=="") {
        INPUT_MODIFIED = false;
        mainInput.style.color = "#9294a0";
        mainInput.style.borderColor = "#9294a0";
        mainInput.value = "email@company.com"
    }
}

function getClick() {
    mainArticle.style.display = "none";
    successArticle.style.display = "flex";
}

function getSuccessClick() {
    successArticle.style.display = "none";
    mainArticle.style.display = "flex";
}