const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})



window.addEventListener("scroll", () => {
    document.querySelector(".style-switcher").classList.contains("open")

    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }

})



const alternateStyle = document.querySelectorAll(".alternate-style");
function setActivestyle(color) {
    alternateStyle.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    })
}



const dayNight = document.querySelector(".day-night");
const icon = dayNight.querySelector("i");
const image = document.getElementById("image_logo");

// عند الضغط على زر التبديل بين الوضعين
dayNight.addEventListener("click", () => {
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});

// عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    if (document.body.classList.contains("dark")) {
        icon.classList.add("fa-sun"); // إذا كانت الصفحة في الوضع الداكن
        image.src = "./images/logo_2.png";
    } else {
        icon.classList.add("fa-moon"); // إذا كانت الصفحة في الوضع العادي
    }
});


