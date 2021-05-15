import SliderCarusel from './slider';

const reviewsSlider = () => {
    const reviewSlider = new SliderCarusel({
        main: '.reviews-slider-wrap',
        wrap: '.reviews-slider',
        next: '#reviews-arrow_right',
        prev: '#reviews-arrow_left',
        slidesToShow: 1,
        infinity: true,
    });
    reviewSlider.init();
}
export default reviewsSlider;