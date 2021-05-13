const telToggle = () => {
    const tel = document.querySelector('.header-contacts__phone-number-accord > a');
    const arrow = document.querySelector('.header-contacts__arrow > img');
    const telWrapper = document.querySelector('.header-contacts__phone-number-accord');

    const toggleTel = () => {
        if (tel.style.opacity === '') {
            tel.style.opacity = 1;
            telWrapper.style.transform = 'translateY(25px)';
            arrow.style.transform = 'rotate(180deg)';
        } else {
            tel.style.opacity = '';
            telWrapper.style.transform = 'translateY(0px)';
            arrow.style.transform = 'rotate(0deg)';
        }
    }
    arrow.addEventListener('click', toggleTel);
}

export default telToggle;

