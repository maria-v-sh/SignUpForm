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
var REQUIRED_TEXT_COLOR = "red";


window.onload = function(){

    var button = document.getElementById("button");
    button.onclick = clickHandle;
}

function clickHandle() {

    var listIDFields = [ID_FIRST_NAME, ID_LAST_NAME, ID_DATE, ID_PHONE, ID_DOCUMENT_NUMBER, ID_CITY, ID_COUNTRY];
    var listLabelFields = [LABEL_FIRST_NAME, LABEL_LAST_NAME, LABEL_DATE, LABEL_PHONE, LABEL_DOCUMENT_NUMBER, LABEL_CITY, LABEL_COUNTRY];

    colorFieldsLabels(listIDFields, listLabelFields);
    var numEmptyFields = getNumEmptyFields(listIDFields);

    var numMistakes = 0;
    if(numEmptyFields > 0){
        alert("Please fill in all fields marked with a star and red color text");
        numMistakes++;
    } else {
        if (isFutureDate(ID_DATE)){
            alert("Date of birth cannot be greater or equal than today's date");
            numMistakes++;
        }
        
        if(!isPhoneNumberContainOnlyNumbers(ID_PHONE)){
            alert("Phone number can only contain numbers");
            numMistakes++;
        }
    
        if(!checkPhoneNumberLength(ID_PHONE)) {
            alert("The phone number must be 11 digits");
            numMistakes++;
        }
    
        if(!checkFirstDigitOfPhoneNumber(ID_PHONE)) {
            alert("The first digit in the phone number must be 7");
            numMistakes++;
        }
    }

    if(numMistakes === 0){
        document.location.href = "success.html";
    } 
}


// Fields //
function colorFieldsLabels(listIDFields, listLabelFields) {

    for(var i = 0; i < listIDFields.length; i++) {
        if(isEmptyField(listIDFields[i])){
            colorText(listLabelFields[i], REQUIRED_TEXT_COLOR);
        } else {
            colorText(listLabelFields[i], TEXT_COLOR);
        }
    }
}

function getNumEmptyFields(listIDFields) {
    var num = 0;
    for(var i = 0; i < listIDFields.length; i++) {
        if(isEmptyField(listIDFields[i])){
            num++;
        }
    }
    return num;
}

function isEmptyField(id){
    var dataId = document.getElementById(id).value;
    if (!dataId) {
        return true;
    }
    return false;
}

function colorText(label, color) {
    var dataLabel = document.getElementById(label);

    dataLabel.style.color = color;
}

// Date //
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

// Phone number //
function isPhoneNumberContainOnlyNumbers(id) {
    var number = document.getElementById(id).value;

    for(var i = 0; i < number.length; i++) {
        if(number.charCodeAt(i) < "0".charCodeAt(0) || number.charCodeAt(i) > "9".charCodeAt(0)){
            return false;
        }
    }
    return true;
}

function checkPhoneNumberLength(id) {
    var number = document.getElementById(id).value;

    if(number.length === 11){
        return true;
    }
    return false;
}

function checkFirstDigitOfPhoneNumber(id) {
    var number = document.getElementById(id).value;
    
    if(+number[0] === 7) {
        return true;
    } 
    return false;
}

