document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let error = document.getElementById("errorMsg");

    if (name === "") {
        error.innerText = "Name is required";
        error.classList.add("text-danger");
        return;
    }

    if (email === "" || !email.includes("@")) {
        error.innerText = "Valid email is required";
        error.classList.add("text-danger");
        return;
    }

    if (password.length < 6) {
        error.innerText = "Password must be at least 6 characters";
        error.classList.add("text-danger");
        return;
    }

    error.innerText = "Form submitted successfully!";
    error.classList.remove("text-danger");
    error.classList.add("text-success");
});
