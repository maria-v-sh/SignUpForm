var ID_FIRST_NAME = "firstName";
var LABEL_FIRST_NAME = "fNameLabel";
var ID_LAST_NAME = "secondName";
var LABEL_LAST_NAME = "sNameLabel";
var ID_DATE = "dateOfBirth";
var LABEL_DATE = "dateLabel";
var ID_PHONE = "phone";
var LABEL_PHONE = "phoneLabel";
var ID_DOCUMENT_NUMBER = "docNumber";
var LABEL_DOCUMENT_NUMBER = "docNumLabel";
var ID_CITY = "city";
var LABEL_CITY = "cityLabel";
var ID_COUNTRY = "country";
var LABEL_COUNTRY = "countryLabel";
var TEXT_COLOR = "#02537d";


window.onload = function(){

    var button = document.getElementById("button");
    button.onclick = clickHandle;
}

function clickHandle() {

    var sevenFilds = setEmptyFildToRed(ID_FIRST_NAME, LABEL_FIRST_NAME) + 
        setEmptyFildToRed(ID_LAST_NAME, LABEL_LAST_NAME) +
        setEmptyFildToRed(ID_DATE, LABEL_DATE) + 
        setEmptyFildToRed(ID_PHONE, LABEL_PHONE) + 
        setEmptyFildToRed(ID_DOCUMENT_NUMBER, LABEL_DOCUMENT_NUMBER) + 
        setEmptyFildToRed(ID_CITY, LABEL_CITY) + 
        setEmptyFildToRed(ID_COUNTRY, LABEL_COUNTRY);
    
    if(sevenFilds < 7){
        alert("Please fill in all fields marked with a star and red color text");
    } else {
        if (isFutureDate(ID_DATE)){
            alert("Date of birth cannot be greater or equal than today's date");
        } else if(validPhoneNumber(ID_PHONE)){
            document.location.href = "success.html";
        }
    }
}

function setEmptyFildToRed(id, label) {
    var dataId = document.getElementById(id).value;
    var dataLabel = document.getElementById(label);

    if (!dataId) {
        dataLabel.innerHTML;
        dataLabel.style.color = "red";
        return 0;
    } else {
        dataLabel.style.color = TEXT_COLOR;
        return 1;
    }
}

function isFutureDate(id) {
    var dataId = document.getElementById(id).value;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    if(dataId >= today) {
        return true;
    } else {
        return false;
    }
}

function validPhoneNumber(id) {
    var number = document.getElementById(id).value;

    for(var i = 0; i < number.length; i++) {
        if(number.charCodeAt(i) < "0".charCodeAt(0) || number.charCodeAt(i) > "9".charCodeAt(0)){
            alert("Phone number can only contain numbers");
            return false;
        }
    }
    
    if(number.length == 11) {
        if(number[0] == 7) {
            return true;
        } else {
            alert("The first digit in the phone number must be 7");
            return false;
        }
    } else {
        alert("The phone number must be 11 digits");
        return false;
    }
}

