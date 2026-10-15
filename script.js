
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Mobile navigation menu
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");

    const isExpanded = navLinks.classList.contains("show");
    menuBtn.setAttribute("aria-expanded", isExpanded);
});

// Close menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

// Display current year in footer
document.getElementById("year").textContent =
    new Date().getFullYear();
