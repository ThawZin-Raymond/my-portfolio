function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

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
        duration: 1800,
    });

    // Your other JavaScript code can go here...
    var scrollAnimation = document.querySelector(".scroll-animation");

    window.addEventListener("scroll", function () {
        if (window.scrollY === 0) {
            scrollAnimation.style.display = "block";
        } else {
            scrollAnimation.style.display = "none";
        }
        
        // Call the calcScrollValue function to update the scroll progress indicator
        calcScrollValue();
    });

    // Define the calcScrollValue function
    function calcScrollValue() {
        var scrollProgress = document.getElementById("sp-btn-container");
        var progressValue = document.getElementById("sp-btn");
        let pos = document.documentElement.scrollTop;
        let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrollValue = Math.round((pos * 100) / calcHeight);
        if (pos > 100) {
            scrollProgress.style.display = "grid";
        } else {
            scrollProgress.style.display = "none";
        }
        scrollProgress.addEventListener("click", () => {
            document.documentElement.scrollTop = 0;
        });
    }
});
