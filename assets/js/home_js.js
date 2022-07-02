
$( document ).ready(()=>{
    const nav_menu = document.querySelector(".nav-menu")
    const nav_links = document.querySelector(".nav-link")

    nav_menu.addEventListener('click', () => {
        nav_links.classList.toggle('active')
    })

    const all_course = document.querySelector(".all_course")

    all_course.addEventListener('click', () => {
        all_course.classList.toggle('clicked')
    })
});