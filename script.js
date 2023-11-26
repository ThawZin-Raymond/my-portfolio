document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".auto-text-1", {
      strings: [" Thaw Zin", " a Programmer", " a Gamer", " a Photographer"],
      typeSpeed: 150,
      backSpeed: 50,
      loop: true,
    });
  
    var typed_1 = new Typed(".auto-text-2", {
      strings: ["are coming soon..."],
      typeSpeed: 150,
      backSpeed: 50,
      loop: true,
    });
  
    var ldModeButton = document.querySelector(".ld-mode-icon");
  
    ldModeButton.addEventListener("click", function () {
      document.body.classList.toggle("dark-theme");
      if (document.body.classList.contains("dark-theme")) {
        ldModeButton.src = "./images/sun.png";
      } else {
        ldModeButton.src = "./images/moon.png";
      }
    });
  
    // Initialize AOS here
    AOS.init({
      duration: 1800
    });
  
    // Your other JavaScript code can go here...
  });
  