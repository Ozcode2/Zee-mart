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

updateUserGreeting();

function toggleContainer() {
  var container = document.getElementById("pop-up");
  if (container.style.display === "none") {
    container.style.display = "block";
  } else {
    container.style.display = "none";
  }
}

// Get the close button element
var closeButton = document.querySelector(".close");

// Add a click event listener to the close button
closeButton.addEventListener("click", function () {
  // Hide the pop-up by setting its display property to 'none'
  var popUp = document.querySelector("#pop-up");
  popUp.style.display = "none";
});

// Assuming you have the user's address stored in a variable called "userAddress"
var getaddress = localStorage.getItem("userAddress");
var loggedInUser = localStorage.getItem("loggedInUser");
var getAddress = document.getElementById("address");

// Update the element with the user's name
function updateUser() {
  if (loggedInUser) {
    getAddress.innerHTML = "Address: " + getaddress;
  } else {
    getAddress.innerHTML = "Address:";
  }
}

updateUser();

window.addEventListener("load", function () {
  var cartCounter = document.getElementById("cartCounterEgg");
  var count = localStorage.getItem("eggCartCount");
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (count && loggedInUser) {
    cartCounter.innerText = count;
  }

  var ProductCost = document.getElementById("price");
  var totalProductCost = localStorage.getItem("productCostEgg");
  if (totalProductCost && loggedInUser) {
    ProductCost.style.display = "block";
    ProductCost.innerText = totalProductCost;
  }

  updateTotalCount();
});

window.addEventListener("load", function () {
  var cartCounter = document.getElementById("cartCounterEgg");
  var count = localStorage.getItem("eggCartCount");
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (count && loggedInUser) {
    cartCounter.innerText = count;
  }

  var ProductCostEgg = document.getElementById("price");
  var totalProductCost = localStorage.getItem("productCostEgg");
  if (totalProductCost && loggedInUser) {
    ProductCostEgg.style.display = "block";
    ProductCostEgg.innerText = totalProductCost;
  }
  updateTotalCount();
});


document.addEventListener("DOMContentLoaded", function () {
  // Load cart counts from local storage
  var pepperCartCount = localStorage.getItem("pepperCartCount");
  var tomatoCartCount = localStorage.getItem("tomatoCartCount");
  var springCartCount = localStorage.getItem("springCartCount");
  var eggCartCount = localStorage.getItem("eggCartCount");
  var beansCartCount = localStorage.getItem("beansCartCount");
  var onionCartCount = localStorage.getItem("onionCartCount");
  var getUserName = localStorage.getItem("loggedInUser", getUserName);

  // Set initial cart counts
  document.getElementById("cartCounterEgg").innerText =
    eggCartCount !== null ? eggCartCount : "0";
  document.getElementById("totalCounter").innerText = calculateTotalCount(
    tomatoCartCount,
    pepperCartCount,
    springCartCount,
    eggCartCount,
    beansCartCount,
    onionCartCount
  );
});


document.getElementById("clickEgg").addEventListener("click", function () {
  var cartElement = document.getElementById("cartEgg");
  var addToCartText = document.getElementById("clickEgg").innerText;
  cartElement.parentNode.removeChild(cartElement);
  document.getElementById("clickEgg").innerText = "";
  var getUserName = localStorage.getItem("loggedInUser", getUserName);
  var ProductCostEgg = document.getElementById("price");
  var eggProduct = document.getElementById("egg");

  var incrementButton = document.createElement("button");
  incrementButton.classList.add("button", "button-green");
  incrementButton.innerHTML = "+";
  incrementButton.addEventListener("click", function () {
    var cartCounter = document.getElementById("cartCounterEgg");
    var count = parseInt(cartCounter.innerText);
    if (eggProduct && count >= 0 && getUserName) {
      count += 1;
      cartCounter.innerText = count;
      document.getElementById("alert").play();
      localStorage.setItem("eggCartCount", count);

      ProductCostEgg.style.display = "block";
      var currentCost = parseInt(
        ProductCostEgg.innerText.replace(/[^0-9.-]+/g, "")
      );
      var newCost = currentCost + 1135;
      ProductCostEgg.innerText = "cost: ₦ " + newCost.toLocaleString();
      localStorage.setItem("productCostEgg", ProductCostEgg.innerText);
      var totalCost = localStorage.getItem("totalProductCost");
      totalCost = totalCost ? parseInt(totalCost) : 0;
      totalCost += 1135;
      localStorage.setItem("totalProductCost", totalCost);

      updateTotalCount();
    } else if (!getUserName) {
      popUp();
    }
  });
  document.getElementById("clickEgg").appendChild(incrementButton);

  var decrementButton = document.createElement("button");
  decrementButton.classList.add("button", "button-red");
  decrementButton.innerHTML = "-";
  decrementButton.addEventListener("click", function () {
    var cartCounter = document.getElementById("cartCounterEgg");
    var count = parseInt(cartCounter.innerText);
    if (eggProduct && count > 0 && getUserName) {
      count--;
      cartCounter.innerText = count;
      document.getElementById("alert").play();
      localStorage.setItem("eggCartCount", count);

      ProductCostEgg.style.display = "block";
      var currentCost = parseInt(
        ProductCostEgg.innerText.replace(/[^0-9.-]+/g, "")
      );
      var newCost = currentCost - 1135;
      ProductCostEgg.innerText = "cost: ₦ " + newCost.toLocaleString();
      localStorage.setItem("productCostEgg", ProductCostEgg.innerText);
      var totalCost = localStorage.getItem("totalProductCost");
      totalCost = totalCost ? parseInt(totalCost) : 0;
      totalCost -= 1135;
      localStorage.setItem("totalProductCost", totalCost);

      updateTotalCount();
    } else if (!getUserName) {
      popUp();
    }
  });
  document.getElementById("clickEgg").appendChild(decrementButton);
});

function updateTotalCount() {
  var pepperCartCount = localStorage.getItem("pepperCartCount");
  var tomatoCartCount = localStorage.getItem("tomatoCartCount");
  var springCartCount = localStorage.getItem("springCartCount");
  var eggCartCount = localStorage.getItem("eggCartCount");
  var onionCartCount = localStorage.getItem("onionCartCount");
  var beansCartCount = localStorage.getItem("beansCartCount");

  document.getElementById("totalCounter").innerText = calculateTotalCount(
    tomatoCartCount,
    pepperCartCount,
    springCartCount,
    eggCartCount,
    beansCartCount,
    onionCartCount
  );
}

function calculateTotalCount(
  tomatoCount,
  pepperCount,
  springCount,
  onionCount,
  eggCount,
  beansCount
) {
  tomatoCount = tomatoCount !== null ? parseInt(tomatoCount) : 0;
  pepperCount = pepperCount !== null ? parseInt(pepperCount) : 0;
  springCount = springCount !== null ? parseInt(springCount) : 0;
  onionCount = onionCount !== null ? parseInt(onionCount) : 0;
  eggCount = eggCount !== null ? parseInt(eggCount) : 0;
  beansCount = beansCount !== null ? parseInt(beansCount) : 0;

  tomatoCount = !isNaN(tomatoCount) ? tomatoCount : 0;
  pepperCount = !isNaN(pepperCount) ? pepperCount : 0;
  springCount = !isNaN(springCount) ? springCount : 0;
  onionCount = !isNaN(onionCount) ? onionCount : 0;
  eggCount = !isNaN(eggCount) ? eggCount : 0;
  beansCount = !isNaN(beansCount) ? beansCount : 0;
  return (
    tomatoCount + pepperCount + springCount + beansCount + eggCount + onionCount
  );
}

function checkOut() {
  var cartCounter = document.getElementById("totalCounter");
  var mycount = parseInt(cartCounter.innerText);

  if (!loggedInUser && mycount >= 0) {
    popUp();
  } else if (loggedInUser && mycount == 0) {
    openModal();
  } else {
    redirectToCheckout();
  }
}

function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function redirectToCheckout() {
  window.location.href = "checkout.html";
}

function redirectToTomato() {
  window.location.href = "spring.html";
}

function checkout() {
  window.location.href = "page4.html";
}

function popUp() {
  document.getElementById("myModal").style.display = "block";
  document.getElementById("mode").innerHTML = "You have to create an account!";
  document.getElementById("btn").addEventListener("click", checkout);
}


//for theme switch
document.addEventListener("DOMContentLoaded", () => {
  const modeSwitch = document.getElementById("toggleSwitch");
  const container = document.querySelector(".container-fluid");
  const card = document.querySelector(".card");
  const cardTitle = document.querySelector(".card-title"); // Select the card title element
  const labels = document.querySelectorAll(".label");
  const containers = document.querySelector(".container")
  const about = document.querySelector("#about");

  const setTheme = (darkMode) => {
    const backgroundColor = darkMode ? "#191919" : "#62BD69";
    const cardBackground = darkMode ? "#000" : "#fff";
    const cardTitleColor = darkMode ? "#fff" : "#000"; // Card title color for dark and light mode
    const labelColor = darkMode ? "#fff" : "#000";

    container.classList.toggle("dark-mode", darkMode);
    container.style.backgroundColor = backgroundColor;
    card.style.backgroundColor = cardBackground;
    card.style.boxShadow = "0px 7px 9px 5px #292828fe";
    about.style.backgroundColor = cardBackground;
    about.style.boxShadow = "0px 7px 9px 9px #292828fe";
    cardTitle.style.color = cardTitleColor; // Apply the card title color
    containers.classList.toggle("container-mode", darkMode);
    containers.style.backgroundColor = darkMode ? "#000" : "#ffffffc2";

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
