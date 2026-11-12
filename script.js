const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        menuBtn.textContent = "×";
    } else {
        menuBtn.textContent = "☰";
    }
});


const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});
