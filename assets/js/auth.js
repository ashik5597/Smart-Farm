const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    });
  });
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); //preventing form submit
    forms.classList.toggle("show-signup");
  });
});

/* registration form checking and message */
document.addEventListener("DOMContentLoaded", function () {
  // Get the form element by its ID
  const form = document.getElementById("registrationForm");

  // Add an event listener for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the input values
    const name = form.querySelector('input[type="name"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const location = form.querySelector("#location").value;
    const password = form.querySelector('input[type="password"]').value;

    // Show an alert with the form data
    const message = `Name: ${name}\nEmail: ${email}\nLocation: ${location}\nPassword: ${password}`;

    if (confirm(message + "\n\nClick OK to proceed to the login page.")) {
      // Redirect to the login page
      window.location.href = "../pages/login.html"; // Replace 'login.html' with your actual login page URL
    }
  });
});

/* login form checking and message */
document.addEventListener("DOMContentLoaded", function () {
  // Get the form element by its ID
  const form = document.getElementById("loginFrom");

  // Add an event listener for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const users = [
      {
        email: "ashik@gmail.com",
        password: "123456",
      },
      {
        email: "jubayer@gmail.com",
        password: "123456",
      },
      {
        email: "hasib@gmail.com",
        password: "123456",
      },
    ];

    let valid = false;

    // Get the input values

    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;
    if (
      (email === "ashik@gmail.com" ||
        email === "jubayer@gmail.com" ||
        email === "hasib@gmail.com") &&
      password == "123456"
    ) {
      valid = true;
    }
    // Show an alert with the form data
    let message = valid ? "User is valid ✅✅✅" : "User is not valid 📌";

    if (confirm(message)) {
      // Redirect to the login page
      valid
        ? (window.location.href = "../pages/dashboard.html")
        : (window.location.href = "../../index.html"); // Replace 'login.html' with your actual login page URL
    }
  });
});
