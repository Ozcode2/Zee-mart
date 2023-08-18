function handleLogin() {
  var email = document.getElementById("user_email").value;
  var password = document.getElementById("user_password").value;

  var getEmail = localStorage.getItem("userEmail");
  var getPassword = localStorage.getItem("userPassword");
  var getUserName = localStorage.getItem("userName");

  if (email === getEmail && password === getPassword) {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    modal.style.color = "#03fe03";

    // Store the logged-in user in localStorage
    localStorage.setItem("loggedInUser", getUserName);
    localStorage.getItem("tomatoCartCount");
    localStorage.getItem("productCostTomato");
    localStorage.getItem("springCartCount");
    localStorage.getItem("productCostSpring");
    localStorage.getItem("eggCartCount");
    localStorage.getItem("productCostEgg");
    localStorage.getItem("pepperCartCount");
    localStorage.getItem("productCostPepper");
    localStorage.getItem("beansCartCount");
    localStorage.getItem("productCostBeans");
    localStorage.getItem("onionCartCount");
    localStorage.getItem("productCostOnion");

    return false;
  } else {
    var model = document.getElementById("myModel");
    model.style.display = "block";
    model.style.color = "brown";

    return false;
  }
}

function openModal() {
  window.location.href = "index.html";
}

function closeModal() {
  window.location.href = "page2.html";
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

