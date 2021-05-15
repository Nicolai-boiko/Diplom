import SliderCarusel from './slider';

const documentsSlider = () => {
    const allDocs = document.querySelectorAll('.transparency-item__img');
    const popupTransparency = document.querySelector('.popup-transparency');
    const closeTransparencyBtn = document.querySelector('.close-transparency');
    const prevTransparencyBtn = document.querySelector('#transparency_left');
    const nextTransparencyBtn = document.querySelector('#transparency_right');
    const transparencySlides = document.querySelectorAll('.popup-transparency-slider__slide');
    const sliderContentCurrent = document.querySelectorAll('.slider-counter-content__current');
    const sliderContentTotal = document.querySelectorAll('.slider-counter-content__total');
    sliderContentTotal.forEach(q=> q.textContent = 3);
    allDocs.forEach((doc, i) => {
        const hoverItem = doc.querySelector('.item-hover');
        doc.addEventListener('mouseover', () => {
            hoverItem.style.cssText = 'visibility: visible; opacity: 1'
        })
        doc.addEventListener('mouseout', () => {
            hoverItem.style.cssText = 'visibility: hidden; opacity: 0'
        })
        doc.addEventListener('click', () => {
            popupTransparency.style.visibility = 'visible';
            let framePos = i;
            sliderContentCurrent.forEach(slide => slide.textContent = framePos + 1);
            const moveSlider = (framePos) => {
                transparencySlides.forEach(slide => {
                    slide.style.transform = `translateY(${-100 * framePos}%)`;
                    slide.style.transition = `transform 0.5s`;
                })
            }
            moveSlider(i);
            nextTransparencyBtn.addEventListener('click', () => {
                ++framePos
                if (framePos > transparencySlides.length - 1) {
                    framePos = 0
                }
                sliderContentCurrent.forEach(slide => slide.textContent = framePos + 1);
                moveSlider(framePos);
            })
            prevTransparencyBtn.addEventListener('click', () => {
                --framePos
                if (framePos < 0) {
                    framePos = transparencySlides.length - 1;
                }
                sliderContentCurrent.forEach(slide => slide.textContent = framePos + 1);
                moveSlider(framePos);
            })
        })
    })

    closeTransparencyBtn.addEventListener('click', () => {
        popupTransparency.style.visibility = 'hidden'
    })

    if (document.documentElement.clientWidth <= 1090) {
        document.querySelector('.transparency-slider').style.flexWrap = 'nowrap'
        const docSlider = new SliderCarusel({
            main: '.transparency-slider-wrap',
            wrap: '.transparency-slider',
            next: '#transparency-arrow_right',
            prev: '#transparency-arrow_left',
            slidesToShow: 1,
            infinity: true,
        });
        docSlider.init();
    }
}


export default documentsSlider;