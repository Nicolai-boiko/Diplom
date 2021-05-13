const toggleMenu = () => {
    const menu = document.querySelector('.popup-dialog-menu');
    const btnMenu = document.querySelector('.menu__icon');
    
    const handlerMenu = () => {
        menu.classList.toggle('popup-dialog-menu-active');
    }

    btnMenu.addEventListener('click', handlerMenu);
    menu.addEventListener('click', (e) => {
        if (e.target.closest('.popup-menu-nav__item') || e.target.closest('.link-list') || e.target.classList.contains('close-menu')) {
            handlerMenu();
        }
    })
}
export default toggleMenu;