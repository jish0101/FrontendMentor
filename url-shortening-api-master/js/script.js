const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const navList = document.querySelector(".nav-list");
const primaryHeader = document.querySelector(".primary-header");

mobileNavToggle.addEventListener("click", () => {
  navList.toggleAttribute("data-expanded");
  if (navList.hasAttribute("data-expanded")) {
    primaryHeader.setAttribute("data-overlay", true);
    mobileNavToggle.setAttribute("aria-expanded", true);
  } else {
    primaryHeader.removeAttribute("data-overlay");
    mobileNavToggle.setAttribute("aria-expanded", false);
  }
});