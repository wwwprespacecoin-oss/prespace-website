// ================================
// NAVBAR SCROLL EFFECT
// ================================

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
    }
});

// ================================
// MOBILE MENU
// ================================

const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

if (hamburger && mobileNav) {

    hamburger.addEventListener("click", () => {

        const isOpen = mobileNav.classList.toggle("open");

        hamburger.classList.toggle("open", isOpen);

        document.body.style.overflow =
            isOpen ? "hidden" : "";
    });

    mobileNav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove("open");

            hamburger.classList.remove("open");

            document.body.style.overflow = "";
        });

    });

    document.addEventListener("keydown", (e) => {

        if (
            e.key === "Escape" &&
            mobileNav.classList.contains("open")
        ) {

            mobileNav.classList.remove("open");

            hamburger.classList.remove("open");

            document.body.style.overflow = "";
        }

    });
}

// ================================
// LOGIN REDIRECT
// ================================

function openLogin() {
    window.location.href = "login.html";
}

// ================================
// REGISTER REDIRECT
// ================================

function openRegister() {
    window.location.href = "register.html";
}