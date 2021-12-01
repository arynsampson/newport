let navbar = document.getElementsByClassName('navbar')[0];
let burgerMenu = document.getElementsByClassName('burger-menu-wrapper')[0];
let burgerMenuIcon = document.querySelector('.burger-menu-icon');


console.log(burgerMenuIcon)

burgerMenu.addEventListener('click', function () {
    if (navbar.style.visibility !== "visible") {
        navbar.style.visibility = "visible";
        burgerMenu.style.background = "lightgrey";
    } else {
        navbar.style.visibility = "hidden";
        burgerMenu.style.background = "initial";
    }
})
