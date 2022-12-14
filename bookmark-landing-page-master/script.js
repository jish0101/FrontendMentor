const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const primaryHeader = document.querySelector(".primary-header");
const primaryNav = document.querySelector(".primary-navigation");

mobileNavToggle.addEventListener("click", () => {
  if (primaryHeader.hasAttribute("data-visible")) {
    mobileNavToggle.setAttribute("aria-expanded", false);
  } else {
    mobileNavToggle.setAttribute("aria-expanded", true);
  }
  primaryHeader.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
  primaryNav.classList.toggle("hidden");
});