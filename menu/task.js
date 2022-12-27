const linkArray = Array.from(document.querySelectorAll(".menu__link"))

linkArray.forEach(link =>  link.onclick = () => {
    if (link.nextElementSibling) {
        link.nextElementSibling.classList.toggle("menu_active");
        return false;
    }        
})

