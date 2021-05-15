import telToggle from './modules/telToggle';
import toggleMenu from './modules/toggleMenu';
import scrollSlides from './modules/scrollSlides';
import showFullListServices from './modules/showFullListServices';
import telValidator from './modules/telValidator';
import formSend from './modules/formSend';
import politicPopup from './modules/politicPopup';
import showToolTip from './modules/showToolTip';
import repairSlider from './modules/repairSlider';
import formulaSlider from './modules/formulaSlider';
import portfolioSlider from './modules/portfolioSlider';
import documentsSlider from './modules/documentsSlider';
import showConsultation from './modules/showConsultation';
import reviewsSlider from './modules/reviewsSlider';



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

    //Отображение всплывающей подсказки в секции формула успешности
    showToolTip();
    
    //Слайдер виды ремонта
    repairSlider();

    //Слайдер формула
    formulaSlider();

    //Слайдер портфолио
    portfolioSlider();

    //Слайдер документов
    documentsSlider();

    //Слайдер документов
    showConsultation();

    //Слайдер документов
    reviewsSlider();
});
