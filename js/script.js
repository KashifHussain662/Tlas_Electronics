// AOS: Initialize Scroll Animations
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1200, // Animation duration in ms
    once: true, // Animation happens only once
  });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll("a.nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId.startsWith("#")) {
      e.preventDefault(); // Prevent default anchor click behavior
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth", // Smooth scroll effect
      });
    }
  });
});

// // Preloader: Show for 5 Seconds
// window.addEventListener("load", () => {
//   const preloader = document.getElementById("preloader");
//   if (preloader) {
//     setTimeout(() => {
//       preloader.style.display = "none"; // Hide preloader after 5 seconds
//     }, 2000); // 5000ms = 5 seconds
//   }
// });

// Toastr Notifications Example
// Show success notification (use this wherever appropriate)
function showSuccessMessage(message) {
  toastr.success(message);
}

// Show error notification (use this wherever appropriate)
function showErrorMessage(message) {
  toastr.error(message);
}

// Script for Back-to-Top Button
const backToTop = document.getElementById("backToTop");
window.onscroll = () => {
  backToTop.style.display = window.scrollY > 100 ? "block" : "none";
};
backToTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
