const toggle = document.querySelector(".menu-toggle"),
  nav = document.querySelector(".nav-links");
if (toggle && nav)
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", nav.classList.contains("open"));
  });
document.querySelectorAll(".nav-drop>a").forEach((a) =>
  a.addEventListener("click", (e) => {
    if (innerWidth <= 860 && !a.parentElement.classList.contains("open")) {
      e.preventDefault();
      a.parentElement.classList.add("open");
    }
  }),
);
document.querySelectorAll(".filter-btn").forEach((b) =>
  b.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    document
      .querySelectorAll("[data-category]")
      .forEach(
        (c) =>
          (c.style.display =
            b.dataset.filter === "all" ||
            c.dataset.category === b.dataset.filter
              ? ""
              : "none"),
      );
  }),
);
document.querySelectorAll(".contact-form").forEach((f) =>
  f.addEventListener("submit", (e) => {
    e.preventDefault();
    const n = f.querySelector(".notice");
    if (n) {
      n.textContent =
        "Thanks! This demo form works in the browser only. Connect a backend or email service to receive enquiries.";
      n.classList.add("show");
    }
    f.reset();
  }),
);
const y = document.querySelector("#year");
if (y) y.textContent = new Date().getFullYear();
