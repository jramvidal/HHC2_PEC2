/**
 * Import dependencies from node_modules
 */
import * as bootstrap from 'bootstrap';
import "@fortawesome/fontawesome-free/css/all.min.css"; // <-- AFEGIT: Font Awesome

/**
 * Write any other JavaScript below
 */
+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll(".nav-link");

  let currentPath = window.location.pathname;

  // Normalizamos el path: quitamos slashes iniciales y extensión .html si existe
  currentPath = currentPath.replace(/^\/+/, "").replace(/\.html$/, "");

  // Si está vacío ("/"), asumimos "index"
  if (currentPath === "") {
    currentPath = "index";
  }

  links.forEach(link => {
    let linkHref = link.getAttribute("href") || "";

    // Normalizamos también el href del link
    linkHref = linkHref.replace(/^\/+/, "").replace(/\.html$/, "");
    if (linkHref === "") linkHref = "index";

    if (linkHref === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

