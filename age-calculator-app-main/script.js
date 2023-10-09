// Vanilla JS

let day_modified = false;
let month_modified = false;
let year_modified = false;

let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");

let button = document.querySelector(".section-button-button");

let first_field = document.querySelector("#first-field");
let second_field = document.querySelector("#second-field");
let third_field = document.querySelector("#third-field");

let error1=false, error2=false, error3=false, error4=false;

button.addEventListener("click", realizeClick);
day.addEventListener("focus", rem_def_str);
month.addEventListener("focus", rem_def_str);
year.addEventListener("focus", rem_def_str);
day.addEventListener("blur", add_def_str);
month.addEventListener("blur", add_def_str);
year.addEventListener("blur", add_def_str);

function realizeClick() {
    // delete error messages
    if (error1) {
        deleteError(first_field);
        error1 = false;
    }

    if (error2) {
        deleteError(second_field);
        error2 = false;
    }

    if (error3) {
        deleteError(third_field);
        error3 = false;
    }

    if (error4) {
        deleteValidError();
        error4 = false;
    }  
    

    const date_start = luxon.DateTime.local(parseInt(year.value), parseInt(month.value), parseInt(day.value));
    const date_end = luxon.DateTime.now();

    var diffInYears = date_end.diff(date_start, ['years','months','days']);

    // correct
    if (date_start.isValid) {
        let data_years = document.querySelector('#data-years');
        data_years.innerHTML = diffInYears.years;
        let data_months = document.querySelector('#data-months');
        data_months.innerHTML = diffInYears.months;
        let data_days = document.querySelector('#data-days');
        data_days.innerHTML = Math.trunc(diffInYears.days);
    }

    // check invalid
    if (day.value!="" && month.value!="" && year.value!="" && error4==false && date_start.isValid==false) {
        addValidError();
        error4 = true;
    }

    if (error4 && (day.value=="" || month.value=="" || year.value=="")) {
        deleteValidError();
        error4 = false;
    }

    // check second field
    if (month.value=="" && error2==false){
        addEmptyError(second_field, "This field is required");
        error2 = true;
    }

    // check third field
    if (year.value=="" && error3==false){
        addEmptyError(third_field, "This field is required");
        error3 = true;
    }

     // check first field
     if (day.value=="" && error1==false){
        addEmptyError(first_field, "This field is required");
        error1 = true;
    }

    if (day.value!="" || month.value!="" || year.value!="") {
        let number = parseInt(day.value);
        if (number<1 || number>31) {
            addEmptyError(first_field, "Must be a valid day");
        }
    }
}





function addEmptyError(field, mess) {
    field.children[0].style.color = "#ff5757";

    field.children[1].style.borderColor = "#ff5757";
    field.children[1].className = "color-gray";

    var message = document.createElement("p");
    message.innerHTML = mess; //"This field is required";
    message.className = 'error-message';
    field.appendChild(message);

    let data_years = document.querySelector('#data-years');
    data_years.innerHTML = "--";
    let data_months = document.querySelector('#data-months');
    data_months.innerHTML = "--";
    let data_days = document.querySelector('#data-days');
    data_days.innerHTML = "--";
}

function deleteError(field) {
    field.children[0].style.color = "#716f6f";

    field.children[1].style.borderColor = "#dbdbdb";
    field.children[1].classList.remove ("color-gray");

    field.children[2].remove();
}

function addValidError() {
    addEmptyError(first_field, "Must be a valid date");

    second_field.children[0].style.color = "#ff5757";
    second_field.children[1].style.borderColor = "#ff5757";
    second_field.children[1].className = "color-gray";

    third_field.children[0].style.color = "#ff5757";
    third_field.children[1].style.borderColor = "#ff5757";
    third_field.children[1].className = "color-gray";
}

function deleteValidError() {
    deleteError(first_field);

    second_field.children[0].style.color = "#716f6f";
    second_field.children[1].style.borderColor = "#dbdbdb";
    second_field.children[1].classList.remove ("color-gray");

    third_field.children[0].style.color = "#716f6f";
    third_field.children[1].style.borderColor = "#dbdbdb";
    third_field.children[1].classList.remove ("color-gray");
}


function rem_def_str(field) {
    if (field.target.value=="DD") { 
        field.target.value = "";
        field.target.style.color = "#141414";
    }
    if (field.target.value=="MM") { 
        field.target.value = "";
        field.target.style.color = "#141414";
    }
    if (field.target.value=="YYYY") { 
        field.target.value = "";
        field.target.style.color = "#141414";
    }
}

function add_def_str(field) {
    if (field.target.id=="day" && field.target.value=="") { 
        field.target.value = "DD";
        field.target.style.color = "#716f6f";
    }
    if (field.target.id=="month" && field.target.value=="") { 
        field.target.value = "MM";
        field.target.style.color = "#716f6f";
    }
    if (field.target.id=="year" && field.target.value=="") { 
        field.target.value = "YYYY";
        field.target.style.color = "#716f6f";
    }
}