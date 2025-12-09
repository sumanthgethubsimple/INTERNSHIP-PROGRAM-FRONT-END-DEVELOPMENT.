function initializeForm() {
    const userForm = document.getElementById("userForm");
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    const errorMsg = document.getElementById("errorMsg");

    if (!userForm || !nameInput || !emailInput || !passwordInput || !errorMsg) {
        console.error("Required form elements not found");
        return;
    }

userForm.addEventListener("submit", function(event) {

    event.preventDefault();  // Stop form submit

    let name = nameInput.value.trim();
    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();
    let error = errorMsg;

    if (name === "") {
        error.innerText = "Name is required";
        return;
    }

    if (email === "" || !email.includes("@")) {
        error.innerText = "Valid email is required";
        return;
    }

    if (password.length < 6) {
        error.innerText = "Password must be at least 6 characters";
        return;
    }
    error.innerText = "Form submitted successfully!";
    error.style.color = "green";
    });
}

initializeForm();
