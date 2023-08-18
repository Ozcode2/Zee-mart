

function handleSubmit() {
  // Get the address input element
  var addressInput = document.getElementById("user_address");

  // Get the error message element
  var errorTxt = document.getElementById("errorTxt");

  // Clear the error message
  errorTxt.textContent = "";

  // Get the address value
  var address = addressInput.value.trim();

  // Regular expression pattern for validating the address
  var addressPattern = /^[a-zA-Z0-9\s,.'-]*$/;

  // Check if the address matches the pattern
  if (!addressPattern.test(address)) {
    // Display error message if the address is invalid
    errorTxt.textContent = "Invalid address!";
    return false; // Prevent form submission
  }

  var usernameInput = document.getElementById("username");
  var error = document.getElementById("error");

  // Clear the error message
  error.textContent = "";

  // Get the username value
  var username = usernameInput.value.trim();

  var usernamePattern = /^[a-zA-Z]+$/;

  if (!usernamePattern.test(username)) {
    error.textContent = "Username should contain only letters!";
    return false; // Prevent form submission
  } else if (username.length < 2) {
    error.textContent = "Username should contain two or more letters!";
    return false; // Prevent form submission
  }

  var emailInput = document.getElementById("user_email");
  var invalid = document.getElementById("invalid");

  invalid.textContent = "";

  var email = emailInput.value.trim();

  var emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  if (!emailPattern.test(email)) {
    invalid.textContent = "Please enter a valid email address!";
    return false; // Prevent form submission
  }

  var passwordInput = document.getElementById("user_password");
  var message = document.getElementById("message");

  message.textContent = "";
  var password = passwordInput.value.trim();

  var passwordPattern =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  if (!passwordPattern.test(password)) {
    message.textContent =
      "Password must contain a mixture of numbers, uppercase and lowercase letters, a special character, and must not be less than six characters!";
    return false; // Prevent form submission
  }

  var confirmPasswordInput = document.getElementById("confirm_password");
  var errorText = document.getElementById("errorText");

  errorText.textContent = "";

  var confirmPassword = confirmPasswordInput.value.trim();

  if (passwordInput.value !== confirmPassword) {
    errorText.textContent = "Passwords do not match!";
    return false; // Prevent form submission
  }

  var termsChecked = document.getElementById("exampleCheck1").checked;
  // Check if terms and conditions checkbox is checked
  if (!termsChecked) {
    alert("Please agree to the Terms and Conditions");
    return false; // Prevent form submission
  }

  // If all validations pass, you can submit the form and store the users credentials

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);
  localStorage.setItem("userAddress", address);
  localStorage.setItem("userName", username);

  var getUserName = localStorage.getItem("userName");

  localStorage.setItem("loggedInUser", getUserName);

  var myTomatoCartCount = localStorage.getItem("tomatoCartCount");
  var myTomatoProductCost = localStorage.getItem("productCostTomato");
  var mySpringCartCount = localStorage.getItem("springCartCount");
  var mySpringProductCost = localStorage.getItem("productCostSpring");
  var myEggCartCount = localStorage.getItem("eggCartCount");
  var myEggProductCost = localStorage.getItem("productCostEgg");
  var myPepperCartCount = localStorage.getItem("pepperCartCount");
  var myPepperProductCost = localStorage.getItem("productCostPepper");
  var myBeansCartCount = localStorage.getItem("beansCartCount");
  var myBeansProductCost = localStorage.getItem("productCostBeans");
  var myOnionCartCount = localStorage.getItem("onionCartCount");
  var myOnionProductCost = localStorage.getItem("productCostOnion");
  //Reset cart counts to zero
  var myTomatoCartCount = 0;
  var myTomatoProductCost = 0;
  var mySpringCartCount = 0;
  var mySpringProductCost = 0;
  var myEggCartCount = 0;
  var myEggProductCost = 0;
  var myPepperCartCount = 0;
  var myPepperProductCost = 0;
  var myBeansCartCount = 0;
  var myBeansProductCost = 0;
  var myOnionCartCount = 0;
  var myOnionProductCost = 0;

  // Store the updated cart counts in localStorage
  localStorage.setItem("tomatoCartCount", myTomatoCartCount);
  localStorage.setItem("productCostTomato", myTomatoProductCost);
  localStorage.setItem("springCartCount", mySpringCartCount);
  localStorage.setItem("productCostSpring", mySpringProductCost);
  localStorage.setItem("eggCartCount", myEggCartCount);
  localStorage.setItem("productCostEgg", myEggProductCost);
  localStorage.setItem("pepperCartCount", myPepperCartCount);
  localStorage.setItem("productCostPepper", myPepperProductCost);
  localStorage.setItem("beansCartCount", myBeansCartCount);
  localStorage.setItem("productCostBeans", myBeansProductCost);
  localStorage.setItem("onionCartCount", myOnionCartCount);
  localStorage.setItem("productCostOnion", myOnionProductCost);

  if (
    emailPattern.test(email) &&
    passwordPattern.test(password) &&
    addressPattern.test(address) &&
    usernamePattern.test(username) &&
    termsChecked
  ) {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    modal.style.color = "#03fe03";

    localStorage.setItem("loggedInUser", getUserName);

    return false;
  }
}

function openModal() {
  window.location.href = "index.html";
}

//for theme switch
document.addEventListener("DOMContentLoaded", () => {
  const modeSwitch = document.getElementById("toggleSwitch");
  const container = document.querySelector(".container-fluid");
  const card = document.querySelector(".card");
  const cardTitle = document.querySelector(".card-title"); // Select the card title element
  const labels = document.querySelectorAll(".label");

  const setTheme = (darkMode) => {
    const backgroundColor = darkMode ? "#191919" : "#62BD69";
    const cardBackground = darkMode ? "#000" : "#5AA861";
    const cardTitleColor = darkMode ? "#fff" : "#000"; // Card title color for dark and light mode
    const labelColor = darkMode ? "#fff" : "#000";

    container.classList.toggle("dark-mode", darkMode);
    container.style.backgroundColor = backgroundColor;
    card.style.backgroundColor = cardBackground;
    cardTitle.style.color = cardTitleColor; // Apply the card title color

    labels.forEach((label) => {
      label.style.color = labelColor;
    });
  };

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme !== null) {
    modeSwitch.checked = savedTheme === "dark";
    setTheme(savedTheme === "dark");
  }

  modeSwitch.addEventListener("change", () => {
    const darkMode = modeSwitch.checked;
    setTheme(darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  });
});
