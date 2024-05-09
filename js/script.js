// form-validation
function validation() {
    let username = document.getElementById('form-username').value;
    let email = document.getElementById('formEmail').value;
    let interest = document.getElementById('optionForm').value;
    console.log(username);
    console.log(email);
    console.log(interest);
    if (username == '' || username == null) {
        document.getElementById('form-username').style.border = '1px solid red';
        alert('Username anda kosong, periksa kembali');
    } else {

    }
    if (email == '' || email == null) {
        document.getElementById('formEmail').style.border = '1px solid red';
        alert('Email anda kosong, periksa kembali');

    } else {
        if (!isValidEmail(email)) {
            alert("Email anda tidak valid!, periksa kembali");
            return false;
        }
    }

    if (interest == '' || interest == null) {
        document.getElementById('optionForm').style.border = '1px solid red';
        alert('Option anda kosong, periksa kembali');
    } else {

    }
}
// send button
document.getElementById('send-btn').addEventListener('click', () => validation())
// validation email
function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

//send to local storage
function sendContact() {
    let username = document.getElementById('form-username').value;
    let email = document.getElementById('formEmail').value;
    let interest = document.getElementById('optionForm').value;

    if (username && email && interest) {
        alert(`${username}, thanks for registering.`);
        // Save form data to localStorage
        localStorage.setItem('form-username', username);
        localStorage.setItem('formEmail', email);
        localStorage.setItem('optionForm', interest);

        // Display the saved data on the webpage
        document.getElementById('display').innerHTML = `
            <p>Your Name: ${username}</p>
            <p>Email Address: ${email}</p>
            <p>Interested in: ${interest}</p>
        `;
    } else {
        alert("There was an error. Please fill in all fields.");
    }
}

// auto slide
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3500); // Change image every 3,5 seconds
}   
