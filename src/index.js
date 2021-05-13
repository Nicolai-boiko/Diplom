import telToggle from './modules/telToggle';
import toggleMenu from './modules/toggleMenu';
import scrollSlides from './modules/scrollSlides';
import showFullListServices from './modules/showFullListServices';
import telValidator from './modules/telValidator';
import formSend from './modules/formSend';
import politicPopup from './modules/politicPopup';



document.addEventListener("DOMContentLoaded", () => {

    //Показ телефона в шапке
    telToggle();

    //Меню
    toggleMenu();

    //Плавный переход по ссылкам
    scrollSlides();

    //Открытие модального окна с полным списком услуг
    showFullListServices();

    //Телефон валидатор
    telValidator();

    //Отправка формы
    formSend();

    //Отображение политики конфиденциальности
    politicPopup();
});
