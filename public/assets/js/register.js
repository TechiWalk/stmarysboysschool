let submitted = false;

function validateName() {
    let name = document.getElementById("fname").value;
    if (name.length == 0) {
        alert("Name can't be blank");
        return false;
    }
    if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
        alert("Please enter your correct name"); //Validation Message
        return false;
    }
    return true;
}
function validateLastName() {
    let lastName = document.getElementById("lname").value;
    if (lastName.length == 0) {
        alert("Name can't be blank");
        return false;
    }
    if (!lastName.match(/^[a-zA-Z]{3,}(?:[a-zA-Z]+){0,2}$/)) {
        alert("Please enter your correct Last name"); //Validation Message
        return false;
    }
    return true;
}

function validatePhone() {
    let phone = document.getElementById("r-phone").value;
    if (phone.length == 0) {
        alert("Mobile number can't be blank"); //Validation Message
        return false;
    }

    if (!phone.match(/^\d{10}$/)) {
        alert("Please enter a correct Mobile number"); //Validation Message
        return false;
    }

    return true;
}
function validateSubject() {
    let subject = document.getElementById("subject").value;
    if (subject.length == 0) {
        alert("Please select atleast any one subject."); //Validation Message
        return false;
    }
    return true;
}

function validateEmail() {
    let email = document.getElementById("r-email").value;
    if (email.length == 0) {
        alert("Email can't be blank"); //Validation Message
        return false;
    }

    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        alert("Please enter a correct email address"); //Validation Message
        return false;
    }

    return true;
}

function validateRegisterForm() {
    if (!validateName() || !validateLastName() || !validatePhone() || !validateSubject()  || !validateEmail()) {
        alert("Form not submitted"); //Validation Message
        return false;
    } else {
        alert("Thank you for reaching out to us.");
        submitted = true;
        return true;
    }
}