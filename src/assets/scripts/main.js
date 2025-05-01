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

// AFEGIT: Detectar en quina pàgina estem i marcar el link actiu (versió millorada)
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll(".nav-link");

  let currentPath = window.location.pathname;
  currentPath = currentPath.substring(currentPath.lastIndexOf("/") + 1);

  // Normalitzem: si no hi ha res ("/") assumim "index.html"
  if (currentPath === "" || currentPath === "/") {
    currentPath = "index.html";
  }

  links.forEach(link => {
    const linkHref = link.getAttribute("href");

    if (linkHref === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
