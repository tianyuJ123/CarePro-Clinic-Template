// script.js

// Scroll back to the top feature
const backToTopButton = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// News rotation function
let currentNewsIndex = 0;
const newsItems = document.querySelectorAll(".news-item");

function showNextNews() {
    newsItems[currentNewsIndex].classList.remove("active");
    currentNewsIndex = (currentNewsIndex + 1) % newsItems.length;
    newsItems[currentNewsIndex].classList.add("active");
}

setInterval(showNextNews, 3000); // Switch news every 3 seconds

// Dynamic navigation bar highlighting function
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    const fromTop = window.scrollY;

    navLinks.forEach(link => {
        const section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});
