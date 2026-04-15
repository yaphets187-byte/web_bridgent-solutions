const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const yearTarget = document.querySelector("#year");
const form = document.querySelector("[data-web3forms-form]");
const formNote = document.querySelector("[data-form-note]");

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (form && formNote) {
  const accessKeyField = form.querySelector('input[name="access_key"]');
  const redirectField = form.querySelector('input[name="redirect"]');

  if (accessKeyField && accessKeyField.value === "YOUR_WEB3FORMS_ACCESS_KEY") {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      formNote.textContent = "Add your Web3Forms access key in index.html before testing the form.";
      formNote.style.color = "#8b2e2e";
    });
  } else {
    formNote.textContent = "Your message will be sent securely via Web3Forms.";
    formNote.style.color = "#5f7087";
  }

  if (redirectField && window.location.hostname && window.location.hostname !== "bridgent-solutions.com") {
    redirectField.value = `${window.location.origin}${window.location.pathname.replace(/index\.html?$/, "")}thank-you.html`;
  }
}
