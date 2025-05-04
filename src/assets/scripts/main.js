/**
 * Import dependencies from node_modules
 */
import * as bootstrap from 'bootstrap'; // Import all Bootstrap JS features
import "@fortawesome/fontawesome-free/css/all.min.css"; // Font Awesome icons
import AOS from 'aos'; // AOS (Animate On Scroll) for scroll-based animations
import 'aos/dist/aos.css'; // AOS CSS styles

/**
 * Example of a self-invoking function
 */
+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

/**
 * Highlight the active navigation link based on the current page
 */
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll(".nav-link");

  let currentPath = window.location.pathname;

  // Normalize the path: remove leading slashes and ".html" extension if present
  currentPath = currentPath.replace(/^\/+/, "").replace(/\.html$/, "");

  // Default to "index" if path is empty (e.g., homepage)
  if (currentPath === "") {
    currentPath = "index";
  }

  links.forEach(link => {
    let linkHref = link.getAttribute("href") || "";

    // Normalize hrefs the same way as the path
    linkHref = linkHref.replace(/^\/+/, "").replace(/\.html$/, "");
    if (linkHref === "") linkHref = "index";

    // Add 'active' class to the link that matches the current page
    if (linkHref === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

/**
 * Initialize AOS animations after the DOM is ready
 */
AOS.init(); // You can add options here if needed (e.g., { duration: 800, once: true })

