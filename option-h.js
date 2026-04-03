const hNavToggle = document.querySelector("[data-h-nav-toggle]");
const hNav = document.querySelector("[data-h-nav]");

if (hNavToggle && hNav) {
  hNavToggle.addEventListener("click", () => {
    const open = hNav.classList.toggle("is-open");
    hNavToggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("h-menu-open", open);
  });

  hNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hNav.classList.remove("is-open");
      hNavToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("h-menu-open");
    });
  });
}

document.querySelectorAll("[data-faq]").forEach((item) => {
  const button = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  if (!button || !answer) {
    return;
  }

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    answer.style.maxHeight = expanded ? "0px" : `${answer.scrollHeight}px`;
    button.querySelector("span:last-child").textContent = expanded ? "+" : "−";
  });
});

document
  .querySelectorAll(".f-contact-form, .h-contact-form, .j-contact-form")
  .forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  });
