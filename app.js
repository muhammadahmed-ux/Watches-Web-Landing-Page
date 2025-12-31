const NavLinks = document.querySelector('#nav-links')
const MenuIcon = document.querySelector('#menu-icon')

MenuIcon.addEventListener('click', () => {
    NavLinks.classList.toggle('show-ul')
    if (NavLinks.className == "show-ul") {


        document.querySelector('#menu').className='fa-solid fa-xmark'
    } else {
        document.querySelector('#menu').className='fa-solid fa-bars'
    }
})
