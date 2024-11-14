document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get the values of the input fields
    var phoneNumber = document.querySelector('input[name="name"]').value;
    var otp = document.querySelector('input[name="otp"]').value;
    
    // Basic validation for the phone number and OTP
    if (phoneNumber === "") {
        alert("Please enter your phone number.");
        return; // Stop form submission
    }
    
    if (otp === "") {
        alert("Please enter the OTP.");
        return; // Stop form submission
    }

    // Optional: Additional validation for phone number format (simple example)
    var phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
        alert("Please enter a valid 10-digit phone number.");
        return; // Stop form submission
    }

    // Optional: Additional OTP validation
    if (otp.length !== 6 || isNaN(otp)) {
        alert("Please enter a valid 6-digit OTP.");
        return; // Stop form submission
    }
    
    // If validation passes, manually submit the form
    this.submit();
});
