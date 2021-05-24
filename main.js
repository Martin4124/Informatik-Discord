const hamburger = document.getElementById("hamburgermenu")
const nav = document.getElementById("nav-ul")

hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
});