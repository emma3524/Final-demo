// ===== CAROUSEL =====
let slides = document.querySelectorAll(".carousel-slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

document.getElementById("next").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

document.getElementById("prev").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);

// ===== MODAL FUNCTIONS =====
function openModal(id) {
  document.getElementById(id).style.display = "flex";
}
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// ===== DYNAMIC RATES (Dummy Example) =====
const ratesTable = document.querySelector("#ratesTable tbody");
const rates = [
  { currency: "BTC", buy: "$68,200", sell: "$68,450" },
  { currency: "ETH", buy: "$2,520", sell: "$2,540" },
  { currency: "USDT", buy: "$1.00", sell: "$1.00" },
  { currency: "BNB", buy: "$590", sell: "$598" },
  { currency: "NGN", buy: "₦1,580/$", sell: "₦1,600/$" },
];

function loadRates() {
  ratesTable.innerHTML = "";
  rates.forEach(r => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${r.currency}</td><td>${r.buy}</td><td>${r.sell}</td>`;
    ratesTable.appendChild(row);
  });
}

loadRates();
// ===== ADMIN LOGIN SYSTEM =====
const ADMIN_USER = "admin@tradex.com";
const ADMIN_PASS = "12345";

function loginUser() {
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (username === ADMIN_USER && password === ADMIN_PASS) {
    alert("Welcome Admin!");
    closeModal("loginModal");
    showAdminPanel();
  } else {
    alert("Invalid login! Only admin can access the dashboard.");
  }
}

function showAdminPanel() {
  // Hide everything else
  document.querySelector(".carousel").style.display = "none";
  document.querySelector(".support").style.display = "none";
  document.querySelector(".rates").style.display = "none";
  document.querySelector(".account").style.display = "none";
  // Show admin dashboard
  document.getElementById("adminPanel").style.display = "block";
}

function logout() {
  document.getElementById("adminPanel").style.display = "none";
  document.querySelector(".carousel").style.display = "flex";
  document.querySelector(".support").style.display = "block";
  document.querySelector(".rates").style.display = "block";
  document.querySelector(".account").style.display = "block";
  alert("Logged out successfully!");
}

// ===== ADMIN DASHBOARD TABS =====
function showTab(tabId) {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => tab.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");
}
