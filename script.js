function submitForm() {
    alert("Registered Successfully");
    // Further implementation for sending email goes here.
    return false;  // Prevents the form from submitting normally
}

function submitForm() {
    event.preventDefault();

    // Accesses the form fields
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let propertyType = document.getElementById('propertyType').value;
    let bedrooms = document.getElementById('bedrooms').value;
    let bathrooms = document.getElementById('bathrooms').value;
    let priceRange = document.getElementById('priceRange').value;

    // Basic form validation
    if(firstName === "" || lastName === "" || phone === "" || email === "" || propertyType === "" || bedrooms === "" || bathrooms === "" || priceRange === "") {
        alert('Please fill all the fields');
        return false;
    }
    else {
        alert('Registered Successfully');
        return true;
    }

}