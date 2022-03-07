const burger = document.querySelector('.burger')
const index_nav = document.querySelector('#index_nav-links')

function toggleMenu() {
    index_nav.classList.toggle('index_nav-active')
    burger.classList.toggle('toggle')
}

burger.addEventListener('click', toggleMenu)