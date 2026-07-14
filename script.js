// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Initialize AOS (Animate On Scroll) with custom smoothing setup
    AOS.init({
        duration: 1200,          // Animation speed (1.2 seconds for extra smoothness)
        once: false,             // Animations trigger every time you scroll past them
        mirror: true,            // Element animates out while scrolling past it
        easing: 'ease-out-cubic' // Fluid acceleration curve
    });

    // 2. Active Link Highlight on Scroll
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let current = "";
        
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Checks if user is currently inside the section area
            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // 3. Mobile Hamburger Menu Toggle Logic
 
    const menuToggle = document.getElementById("mobile-menu");
    const navMenu = document.getElementById("nav-menu");
    const navLinksList = document.querySelectorAll("nav a");

    if (menuToggle && navMenu) {
        // Menu open/close smoothly on click
        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // Close drawer instantly when selecting any section link
        navLinksList.forEach(link => {
            link.addEventListener("click", () => {
                menuToggle.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });
    

        // Kisi bhi link par click karte hi mobile menu automatic close ho jaye
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                const icon = menuToggle.querySelector("i");
                if (icon) icon.className = "fas fa-bars";
            });
        });
    }
});