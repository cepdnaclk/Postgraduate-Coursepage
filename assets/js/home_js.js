
$( document ).ready(()=>{
    const nav_menu = document.querySelector(".nav-menu")
    const nav_links = document.querySelector(".nav-link")

    nav_menu.addEventListener('click', () => {
        nav_links.classList.toggle('active')
    })
});