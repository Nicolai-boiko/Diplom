const toggleMenu = () => {
    const menu = document.querySelector('.popup-dialog-menu');
    
    const handlerMenu = () => {
        menu.classList.toggle('popup-dialog-menu-active');
    }

    menu.addEventListener('click', (e) => {
        if (e.target.closest('.popup-menu-nav__item') || e.target.closest('.link-list') || e.target.classList.contains('close-menu')) {
            handlerMenu();
        }
    })
    document.querySelector('body').addEventListener('click', (e)=>{
        if (e.target.classList.contains('menu__icon')) {
            handlerMenu();
        } else if (e.target.closest('.popup-dialog-menu') === null && menu.classList.contains('popup-dialog-menu-active')) {
            menu.classList.remove('popup-dialog-menu-active')
        }
    })
}
export default toggleMenu;