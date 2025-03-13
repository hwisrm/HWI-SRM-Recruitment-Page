document.addEventListener("DOMContentLoaded", function () {
    let whatsappInput = document.getElementById("whatsapp");
    let whatsappError = document.getElementById("whatsappError");

    whatsappInput.addEventListener("input", function () {
            let phoneNumber = whatsappInput.value.trim();
    
            if (/^\d{10}$/.test(phoneNumber)) {
                whatsappError.style.display = "none"; // Hide error
                whatsappInput.style.border = "2px solid green"; // Optional: Green border for success
            } else {
                whatsappError.style.display = "block"; // Show error
                whatsappInput.style.border = "2px solid red"; // Optional: Red border for error
            }
        });
});