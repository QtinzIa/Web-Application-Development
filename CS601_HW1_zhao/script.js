// DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("subscriptionForm");
    const errmessage = document.getElementById("error");
    const successmessage = document.getElementById("success");
    form.appendChild(errmessage); // Append feedback below the form

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission
        errmessage.innerHTML = ""; // Clear previous message
        successmessage.innerHTML = ""; // Clear previous message

        // Get values from each fields
        const firstName = document.getElementById("fName").value;
        const lastName = document.getElementById("lName").value;
        const email = document.getElementById("email").value;
        const packageSelected = document.getElementById("package").value;
        const subscribe = document.getElementById("subscribe").checked;

        // Initialize an array to store error messages
        let errors = [];

        // Validation for First Name
        if (firstName.length < 2 || !/^[a-zA-Z]+$/.test(firstName)) {
            errors.push("Provide valid first name! (min 2 alpha characters)");
        }

        // Validation for Last Name
        if (lastName.length < 2 || !/^[a-zA-Z]+$/.test(lastName)) {
            errors.push("Provide valid last name! (min 2 alpha characters)");
        }

        // Validation for Email
        if (email && !/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            errors.push("Please enter a valid email address.");
        }

        // Validation for Package selection
        if (!packageSelected) {
            errors.push("Please select a package!");
        }

        // Validation for Subscribe checkbox
        if (!subscribe) {
            errors.push("Checkbox must be checked to proceed!");
        }

        // Display errors or success message
        if (errors.length > 0) {
            // Display each error message
            errmessage.innerHTML = errors.map(error => `<p style="color: red;">${error}</p>`).join("");
        } else {
            // Display success message and hide the form
            successmessage.innerHTML = `
                Thank you, ${firstName} ${lastName}, for subscribing!</p>
                Your email ${email} is registered with our ${packageSelected} package.</p>
            `;
            form.style.display = "none"; // Hide form after successful submission
        }
    });
});
