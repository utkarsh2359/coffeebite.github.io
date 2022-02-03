const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navElement = document.getElementsByClassName('navElement')[0]

toggleButton.addEventListener('click', () => {
    navElement.classList.toggle('active')
})

window.addEventListener("scroll", function () {
    let nav = document.querySelector("nav");
    let windowPosition = window.scrollY > 0;
    nav.classList.toggle("scrolling-active", windowPosition);
});