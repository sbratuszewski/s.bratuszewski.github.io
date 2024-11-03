//display current year in footer
const currentYear = new Date().getUTCFullYear();
const date = document.getElementById("date");
const yearText = document.createTextNode(currentYear);

date.appendChild(yearText);

// handling change on navigation items when scroll
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-item");
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav .nav-item a");

  function changeActiveLink() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove("active"));
    if (navLinks[index]) {
      navLinks[index].classList.add("active");
    }
  }

  changeActiveLink();
  window.addEventListener("scroll", changeActiveLink);
});
