var marquee = document.getElementById("fast");
marquee.scrollAmount = 15; // Change this value to adjust the speed

function search() {
  let filter = document.getElementById("find").value.toLowerCase();
  let items = document.querySelectorAll(".card");
  let cardGroup = document.getElementById("cardGroup");
  let l = document.getElementsByTagName("h5");
  let searchNotFound = true;

  for (var i = 0; i < l.length; i++) {
    let a = items[i].getElementsByTagName("h5")[0];
    let value = a.innerHTML || a.innerText || a.textContent;

    if (value.toLowerCase().indexOf(filter) > -1) {
      items[i].style.display = "";
      searchNotFound = false;
    } else {
      items[i].style.display = "none";
    }
  }

  if (searchNotFound) {
    document.getElementById("message").innerHTML = "Search not found!";
  } else {
    document.getElementById("message").innerHTML = "";
  }

  // Check the number of displayed cards
  let displayedCards = document.querySelectorAll(
    ".card:not([style*='display: none'])"
  );
  if (displayedCards.length <= 3) {
    cardGroup.style.width = "15%";
  } else {
    cardGroup.style.width = ""; // Reset to default width
  }
}




var loggedInUser = localStorage.getItem("loggedInUser");
var userGreeting = document.getElementById("userGreeting");

// Update the element with the user's name
function updateUserGreeting() {
  if (loggedInUser) {
    userGreeting.innerHTML = "Hi, " + loggedInUser + "!";
  } else {
    userGreeting.innerHTML = "Hi!";
  }
}

// Call the function initially to set the greeting based on the logged-in user
updateUserGreeting();

 
// Function to reset cart counts to zero and update local storage
function resetCartCountsAndStore() {

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
  localStorage.setItem("TheTomatoCartCount", myTomatoCartCount);
  localStorage.setItem("TheProductCostTomato", myTomatoProductCost);
  localStorage.setItem("TheSpringCartCount", mySpringCartCount);
  localStorage.setItem("TheProductCostSpring", mySpringProductCost);
  localStorage.setItem("TheEggCartCount", myEggCartCount);
  localStorage.setItem("TheProductCostEgg", myEggProductCost);
  localStorage.setItem("ThePepperCartCount", myPepperCartCount);
  localStorage.setItem("TheProductCostPepper", myPepperProductCost);
  localStorage.setItem("TheBeansCartCount", myBeansCartCount);
  localStorage.setItem("TheProductCostBeans", myBeansProductCost);
  localStorage.setItem("TheOnionCartCount", myOnionCartCount);
  localStorage.setItem("TheProductCostOnion", myOnionProductCost);
}

// Log out button click event handler
var logoutButton = document.getElementById("logoutButton");
logoutButton.addEventListener("click", function () {

  // Clear the logged-in user from localStorage
  localStorage.removeItem("loggedInUser");

  // Reset the greeting
  loggedInUser = null;
  updateUserGreeting();

  resetCartCountsAndStore();

  // Redirect or perform other actions after logging out
  // Example: Redirect to a login page
  window.location.href = "page2.html";
});

// login.js

// Function to reset cart counts to zero and update local storage

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var card = document.getElementById("tomato");

// Add a click event listener to the card
card.addEventListener("click", function () {
  // Open another page when the card is clicked
  window.open("tomato.html", "_self");
});

var card = document.getElementById("pepper");

// Add a click event listener to the card
card.addEventListener("click", function () {
  // Open another page when the card is clicked
  window.open("pepper.html", "_self");
});

var card = document.getElementById("spring");

// Add a click event listener to the card
card.addEventListener("click", function () {
  // Open another page when the card is clicked
  window.open("spring.html", "_self");
});


var card = document.getElementById("egg");

// Add a click event listener to the card
card.addEventListener("click", function () {
  // Open another page when the card is clicked
  window.open("egg.html", "_self");
});

var card = document.getElementById("beans");

// Add a click event listener to the card
card.addEventListener("click", function () {
  // Open another page when the card is clicked
  window.open("beans.html", "_self");
});


var card = document.getElementById("onion");

// Add a click event listener to the card
card.addEventListener("click", function () {
  // Open another page when the card is clicked
  window.open("onion.html", "_self");
});

//for theme switch

document.addEventListener("DOMContentLoaded", () => {
  const modeSwitch = document.getElementById("toggleSwitch");
  const container = document.querySelector(".container-fluid");
  const contain = document.querySelector(".border");
  const containers = document.querySelector(".container");
  const cards = document.querySelectorAll(".card > *");

  const setTheme = (darkMode) => {
    const backgroundColor = darkMode ? "" : "#0EE80";
    const borderClass = darkMode ? "border-black" : "";
    const containerClass = darkMode ? "container-mode" : "";
    const cardBackground = darkMode ? "" : "#fff";

    container.classList.toggle("dark-mode", darkMode);
    container.style.backgroundColor = backgroundColor;
    contain.classList.toggle("border-black", darkMode);
    contain.style.backgroundColor = darkMode ? "" : "#010057";
    containers.classList.toggle("container-mode", darkMode);
    containers.style.backgroundColor = darkMode ? "" : "#ffffffc2";

    cards.forEach((card) => {
      card.classList.toggle("card-mode", darkMode);
      card.style.backgroundColor = cardBackground;
    });

    cards.forEach((card) => {
      card.classList.toggle("cardHoverClass", !darkMode);
      card.style.boxShadow = darkMode ? "none" : "2px 2px 2px 2px #cbc9c9fe";
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



