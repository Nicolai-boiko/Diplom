import animate from './animate';

const scrollSlides = () => {
    const scrollUpBtn = document.querySelector('[href="#main"]');
    /* const mainHeight = document.querySelector('main').getBoundingClientRect().height; */

    const menuItem = document.querySelectorAll('.popup-menu-nav__item > a');

    let arrHeight = [];
    menuItem.forEach((item) => {
        let attr = item.getAttribute('href');
        let elemHeight = document.querySelector(`${attr}`).getBoundingClientRect().height;
        arrHeight.push(elemHeight);
        let neededHeight = arrHeight.reduce((acc, value) => acc + value, 0);
        item.addEventListener('click', (e) => {
            e.preventDefault();
            animate({
                duration: 500,
                timing: function(timeFraction) {
                return timeFraction;
                },
                draw: function(progress) {
                    if (document.documentElement.scrollTop === 0){
                        document.documentElement.scrollTop = progress * (neededHeight - elemHeight);
                    } else {
                        window.scrollBy(0, progress * (neededHeight - elemHeight - document.documentElement.scrollTop))
                    }
                }
            });
        })
    })

    scrollUpBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
}

export default scrollSlides;