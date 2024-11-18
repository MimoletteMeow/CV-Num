const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

// Ouvrir/fermer le menu
mobileMenu.addEventListener("click", () => {
    navList.classList.toggle("active");
});

// Fermer le menu si on clique sur un lien
document.querySelectorAll(".nav-list a").forEach(link => {
    link.addEventListener("click", () => {
        navList.classList.remove("active");
    });
});

// Fermer le menu si on clique en dehors
document.addEventListener("click", (event) => {
    if (!navList.contains(event.target) && !mobileMenu.contains(event.target)) {
        navList.classList.remove("active");
    }
});
