document
  .getElementById("theme-selector")
  .addEventListener("change", function () {
    var theme = this.value;
    var body = document.body;
    var message = document.getElementById("theme-message");

    // Remove any previous theme classes
    body.classList.remove("light-theme", "dark-theme", "blue-theme");

    switch (theme) {
      case "light":
        body.classList.add("light-theme");
        message.textContent = "Light theme applied.";
        message.style.backgroundColor = "aliceblue";
        message.style.color = "ash";
        message.style.padding = "10px";
        message.style.borderRadius = "10px";
        message.style.display = "block";
        break;
      case "dark":
        body.classList.add("dark-theme");
        message.textContent = "Dark theme applied.";
        message.style.backgroundColor = "black";
        message.style.color = "ash";
        message.style.padding = "10px";
        message.style.borderRadius = "10px";
        message.style.display = "block";
        break;
      case "blue":
        body.classList.add("blue-theme");
        message.textContent = "Blue theme applied.";
        message.style.backgroundColor = "dodgerblue";
        message.style.color = "ash";
        message.style.padding = "10px";
        message.style.borderRadius = "10px";
        message.style.display = "block";
        break;
      default:
        message.textContent = "";
        message.style.display = "none";
        break;
    }
  });

// Scenario 2: Form Validation
document
  .getElementById("user-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("form-message");

    if (username === "") {
      message.textContent = "Username is required.";
      message.style.display = "block";
      message.style.backgroundColor = "red";
      message.style.color = "white";
      message.style.padding = "10px";
      message.style.borderRadius = "10px";
    } else if (email === "") {
      message.textContent = "Email is required.";
      message.style.display = "block";
      message.style.backgroundColor = "red";
      message.style.color = "white";
      message.style.padding = "10px";
      message.style.borderRadius = "10px";
    } else if (password === "") {
      message.textContent = "Password is required.";
      message.style.backgroundColor = "red";
      message.style.color = "white";
      message.style.padding = "10px";
      message.style.borderRadius = "10px";
      message.style.display = "block";
    } else {
      message.textContent = "Form submitted successfully!";
      message.style.backgroundColor = "green";
      message.style.color = "white";
      message.style.padding = "10px";
      message.style.borderRadius = "10px";
      message.style.display = "block";
    }
  });

// Scenario 3: Weather Conditions
document
  .getElementById("weather-selector")
  .addEventListener("change", function () {
    var weather = this.value;
    var message = document.getElementById("weather-message");

    switch (weather) {
      case "sunny":
        message.textContent = "It is sunny today. Enjoy the sunshine!";
        message.style.backgroundColor = "yellow";
        message.style.color = "black";
        message.style.padding = "10px";
        message.style.borderRadius = "10px";
        message.style.display = "block";
        break;
      case "rainy":
        message.textContent =
          "It is raining today. Don’t forget your umbrella!";
        message.style.backgroundColor = "lightblue";
        message.style.color = "black";
        message.style.padding = "10px";
        message.style.borderRadius = "10px";
        message.style.display = "block";
        break;
      case "snowy":
        message.textContent = "It is snowy today. Stay warm and safe!";
        message.style.backgroundColor = "lightgrey";
        message.style.color = "white";
        message.style.padding = "10px";
        message.style.borderRadius = "10px";
        message.style.display = "block";
        break;
      case "cloudy":
        message.textContent =
          "It is cloudy today. The sun might peek through later.";
        message.style.backgroundColor = "lightgrey";
        message.style.color = "grey";
        message.style.padding = "10px";
        message.style.borderRadius = "10px";
        message.style.display = "block";
        break;
      default:
        message.textContent = "";
        message.style.display = "none";
        break;
    }
  });
