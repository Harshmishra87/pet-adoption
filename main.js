// Temporary credentials
const tempUsername = "user123";
const tempPassword = "password123";

function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    // Check if the input matches the temporary credentials
    if (username === tempUsername && password === tempPassword) {
        errorMessage.textContent = ""; // Clear any previous error message
        alert("Login successful!");
        // Redirect to homepage
        window.location.href = "homepage.html"; // Ensure the correct file name
        return false; // Prevent form submission
    } else {
        errorMessage.textContent = "Incorrect username or password.";
        return false; // Stop form submission on error
    }
}
