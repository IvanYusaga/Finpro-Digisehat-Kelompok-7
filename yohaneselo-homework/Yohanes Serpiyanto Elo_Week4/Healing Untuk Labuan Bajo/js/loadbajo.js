gsap.fromTo(
".loading-page",
{ opacity: 1 },
{
opacity: 0,
display: "none",
duration: 1.5,
delay: 3.5,
}
);

gsap.fromTo(
".logo-name",
{
y: 50,
opacity: 0,
},
{
y: 0,
opacity: 1,
duration: 2,
delay: 0.5,
}
);

document.addEventListener("DOMContentLoaded", function () {
setTimeout(function () {
    const loader = document.querySelector(".pro-loading-wrapper");
    loader.classList.add("hidden");

    const mainContent = document.getElementById("main-content");
    mainContent.style.display = "block";
}, 3000);
});