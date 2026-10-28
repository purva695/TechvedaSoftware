const toggle = document.querySelector(".menu-toggle"),
  nav = document.querySelector(".nav-links");
if (toggle && nav)
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.setAttribute(
      "aria-expanded",
      nav.classList.contains("open") ? "true" : "false",
    );
  });
document.querySelectorAll(".nav-drop>button").forEach((b) =>
  b.addEventListener("click", () => {
    if (innerWidth <= 760) b.parentElement.classList.toggle("open");
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
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.1 },
  );
  document.querySelectorAll(".reveal").forEach((x) => io.observe(x));
} else
  document
    .querySelectorAll(".reveal")
    .forEach((x) => x.classList.add("visible"));
document.querySelectorAll(".contact-form").forEach((f) =>
  f.addEventListener("submit", (e) => {
    e.preventDefault();
    const n = f.querySelector(".notice");
    if (n) {
      n.textContent =
        "Thanks! This demo form is working in the browser. Connect a backend/email service to receive enquiries.";
      n.classList.add("show");
    }
    f.reset();
  }),
);
const y = document.querySelector("#year");
if (y) y.textContent = new Date().getFullYear();
