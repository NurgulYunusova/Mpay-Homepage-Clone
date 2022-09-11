const faqs = document.querySelectorAll(".question-answer");

faqs.forEach((faq) =>
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  })
);

const dropdownMenu = document.querySelector(".dropdown-menu");
const language = document.querySelector(".languages");

const dropdownMenu1 = document.querySelector(".dropdown-menu1");
const language1 = document.querySelector(".languages1");

language.addEventListener("click", () => {
  dropdownMenu.classList.toggle("activee");
});

language1.addEventListener("click", () => {
  dropdownMenu1.classList.toggle("activee");
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
