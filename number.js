document.addEventListener("DOMContentLoaded", function () {
    let phoneInput = document.getElementById("phone");
    let phoneError = document.getElementById("phoneError");

    phoneInput.addEventListener("input", function () {
        let phoneNumber = phoneInput.value.trim();

        // Check if the phone number has exactly 10 digits
        if (/^\d{10}$/.test(phoneNumber)) {
            phoneError.style.display = "none"; // Hide error
            phoneInput.style.border = "2px solid green"; // Optional: Green border for success
        } else {
            phoneError.style.display = "block"; // Show error
            phoneInput.style.border = "2px solid red"; // Optional: Red border for error
        }
    });
});
