const hamburger = document.getElementById("hamburgermenu")
const nav = document.getElementById("nav-ul")
const hamburgerSVG = document.getElementById("hamburger-svg")


hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
    hamburgerSVG.classList.toggle("fa-bars")
    hamburgerSVG.classList.toggle("fa-times")
});
