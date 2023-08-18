
function handlePasswordRecovery() {
  var email = document.getElementById("recovery_email").value;
  var storedEmail = localStorage.getItem("userEmail");
  var storedPassword = localStorage.getItem("userPassword");
  var storedName = localStorage.getItem("userName")

  if (email === storedEmail) {
    // recover user password
    document.querySelector(".modal").style.display = "block";
    document.querySelector(".modal").style.color = "#03fe03";
    document.getElementById("mode").innerHTML = storedName + " Your password is: " + storedPassword;

    return false;
  } else {
    document.querySelector(".modal").style.display = "block";
    document.querySelector(".modal").style.color = "brown";
    document.getElementById("mode").innerHTML = "Invalid email address";
    
    return false;
  }
}

function openModal() {
  var email = document.getElementById("recovery_email").value;
  var storedEmail = localStorage.getItem("userEmail");

  var modal = document.getElementById("myModal");

  if (email === storedEmail) {
    window.location.href = "page2.html";
  } else {
    window.location.href = "password.html";
  }
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

