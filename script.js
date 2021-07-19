let burger = document.getElementById("burger")
let menu = document.getElementById("logo")
let navbar = document.getElementById("navbar-menu")
let navbar_resp = document.getElementById("navbar")
burger.addEventListener('click', event => {
    navbar_resp.classList.toggle("d-none")
})
