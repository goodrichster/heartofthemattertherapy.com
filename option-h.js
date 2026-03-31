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
