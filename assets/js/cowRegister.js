document
  .getElementById("cowRegistrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page

    // Get form input values
    var id = document.getElementById("id").value;
    var age = document.getElementById("age").value;
    var color = document.getElementById("color").value;
    var category = document.getElementById("category").value;
    var breed = document.getElementById("breed").value;

    // Create an object to hold the cow's information
    var cowInfo = {
      Name: id,
      Age: age,
      Color: color,
      Breed: breed,
    };

    // Show alert with cow information
    var alertMessage = "Cow Information:\n";
    for (var key in cowInfo) {
      alertMessage += key + ": " + cowInfo[key] + "\n";
    }
    alert(alertMessage);

    // Clear form fields
    document.getElementById("id").value = "";
    document.getElementById("age").value = "";
    document.getElementById("color").value = "";
    document.getElementById("category").value = "";
    document.getElementById("breed").value = "";
  });
