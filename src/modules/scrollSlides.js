const scrollSlides = () => {
    const scrollUpBtn = document.querySelector('.button-footer');
    const menuItem = document.querySelectorAll('.popup-menu-nav__item > a');

    menuItem.forEach(link => link.addEventListener('click', (e) => {
        e.preventDefault();
        const blockId = e.target.getAttribute('href').substr(1)
        document.getElementById(blockId).scrollIntoView({
            block: 'start',
            behavior: "smooth"
        })
    }))
    scrollUpBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
}

export default scrollSlides;