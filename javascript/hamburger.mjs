
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("humburgerBtn").classList.toggle("open");
    const navLinks = document.querySelectorAll("#primaryNav li a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        document.getElementById("primaryNav").classList.remove("open");
        document.getElementById("humburgerBtn").classList.remove("open");
      });
    });
    document.addEventListener("DOMContentLoaded", () => {
      // add the code here
    });
  }
  
  export default toggleMenu;