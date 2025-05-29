// scripts.js

// Skip to Content keyboard support
document.addEventListener("DOMContentLoaded", function () {
  const skipLink = document.createElement("a");
  skipLink.href = "#main";
  skipLink.textContent = "Skip to main content";
  skipLink.className = "skip-link";
  skipLink.style.position = "absolute";
  skipLink.style.top = "0";
  skipLink.style.left = "0";
  skipLink.style.background = "#000";
  skipLink.style.color = "#fff";
  skipLink.style.padding = "10px";
  skipLink.style.zIndex = "1000";
  skipLink.style.transform = "translateY(-100%)";
  skipLink.style.transition = "transform 0.3s ease";

  skipLink.addEventListener("focus", () => {
    skipLink.style.transform = "translateY(0)";
  });

  skipLink.addEventListener("blur", () => {
    skipLink.style.transform = "translateY(-100%)";
  });

  document.body.insertBefore(skipLink, document.body.firstChild);
});

// Highlight current navigation link for screen readers
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    const linkHref = link.getAttribute("href");

    if (linkHref === currentPage || currentPage === "" && linkHref === "index.html") {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
});
