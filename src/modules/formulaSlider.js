import SliderCarusel from './slider';

const formulaSlider = () => {
    const formulaSlides = document.querySelectorAll('.formula-slider__slide');
    formulaSlides.forEach(slide => slide.style.opacity = 1);
    if (document.documentElement.clientWidth < 1024) {
        const formula = new SliderCarusel({
            main: '.formula-slider-wrap',
            wrap: '.formula-slider',
            next: '#formula-arrow_right',
            prev: '#formula-arrow_left',
            slidesToShow: 1,
            infinity: true,
        });
        formula.init();
    }
}


export default formulaSlider;