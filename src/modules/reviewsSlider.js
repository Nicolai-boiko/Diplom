const reviewsSlider = () => {
    const reviewsSlides = document.querySelectorAll('.reviews-slider__slide');
    const nextFrame = document.querySelector('#reviews-arrow_right');
    const prevFrame = document.querySelector('#reviews-arrow_left');
    nextFrame.style.transform = 'rotate(90deg)';
    prevFrame.style.transform = 'rotate(90deg)';


    let framePos = 0;
    const moveSlider = (framePos) => {
        reviewsSlides.forEach(slide => {
            slide.style.transform = `translateY(${-100 * framePos}%)`;
            slide.style.transition = `transform 0.5s`;
        })
    }
    nextFrame.addEventListener('click', () => {
        ++framePos
        if (framePos > reviewsSlides.length - 1) {
            framePos = 0
        }
        moveSlider(framePos);
    })
    prevFrame.addEventListener('click', () => {
        --framePos
        if (framePos < 0) {
            framePos = reviewsSlides.length - 1;
        }
        moveSlider(framePos);
    })
}
export default reviewsSlider;