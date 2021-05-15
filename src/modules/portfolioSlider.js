const portfolioSlider = () => {
    const sliderFramesDek = document.querySelectorAll('.portfolio-slider__slide > .portfolio-slider__slide-frame');
    const sliderFramesMob = document.querySelectorAll('.portfolio-slider-mobile > .portfolio-slider__slide-frame');
    const closeBtn = document.querySelector('.close-portfolio');
    const closeBtnMob = document.querySelector('.close-portfolio_mob');
    const popupFrame = document.querySelector('.popup-portfolio');
    const popupNextFrame = document.querySelector('#popup_portfolio_right');
    const popupPrevFrame = document.querySelector('#popup_portfolio_left');
    const popupPortfolioSlides = document.querySelectorAll('.popup-portfolio-slider__slide');
    const popupPortfolioTexts = document.querySelectorAll('.popup-portfolio-text');
    const textWrapper = document.querySelector('.popup-portfolio-text_wrapper_custom');
    const sliderContentCurrent = document.querySelectorAll('.slider-counter-content__current');
    const sliderContentTotal = document.querySelectorAll('.slider-counter-content__total');

    if (document.documentElement.clientWidth > 1024) {
        popupPortfolioTexts.forEach(text => text.style.paddingBottom = '137px');
    } else if (document.documentElement.clientWidth > 575 && document.documentElement.clientWidth <= 1024) {
        popupPortfolioTexts.forEach(text => text.style.cssText = 'display: flex; flex-direction: row; justify-content: space-around; width: 100%');
        textWrapper.style.width = '100%'
    }   





    if (document.documentElement.clientWidth > 575) {
        const arrows = document.querySelector('.slider-arrow_right-portfolio');
        let pos = 1;
        arrows.addEventListener('click', () => {
            const slides = document.querySelectorAll('.portfolio-slider__slide');
            slides.forEach(slide => {
                slide.style.transform = `translateX(${-100 * pos}%)`;
                slide.style.transition = `transform 0.5s`;
            })
            pos++;
            let sliderLength;
            if (document.documentElement.clientWidth > 1140) {
                sliderLength = slides.length - 3;
            } else if (document.documentElement.clientWidth > 900 && document.documentElement.clientWidth <= 1140) {
                sliderLength = slides.length - 2;
            } else if (document.documentElement.clientWidth <= 900) {
                sliderLength = slides.length - 1;
            }
            if (pos > sliderLength) {
                pos = 0
            }
        })
    }
    let framePos;
    const moveSlider = (framePos) => {
        popupPortfolioSlides.forEach(slide => {
            slide.style.transform = `translateX(${-100 * framePos}%)`;
            slide.style.transition = `transform 0.5s`;
        })
        popupPortfolioTexts.forEach(slide => {
            slide.style.transform = `translateY(${-100 * framePos}%)`;
            slide.style.transition = `transform 0.5s`;
        })
    }
    sliderFramesDek.forEach((frame, i) => frame.addEventListener('click', () => {
        popupFrame.style.visibility = 'visible';
        framePos = i;
        sliderContentCurrent.forEach(slide => slide.textContent = framePos + 1);
        sliderContentTotal.forEach(slide => slide.innerText = sliderFramesDek.length);
        console.log(sliderFramesDek.length);
        moveSlider(framePos)
    }));
    sliderFramesMob.forEach((frame, i) => frame.addEventListener('click', () => {
        popupFrame.style.visibility = 'visible';
        framePos = i;
        sliderContentCurrent.forEach(slide => slide.textContent = framePos + 1);
        sliderContentTotal.forEach(slide => slide.innerText = sliderFramesDek.length);
        moveSlider(framePos)
    }));
    popupNextFrame.addEventListener('click', () => {
        ++framePos
        if (framePos > popupPortfolioSlides.length - 1) {
            framePos = 0
        }
        sliderContentCurrent.forEach(slide => slide.textContent = framePos + 1);
        moveSlider(framePos);
    })
    popupPrevFrame.addEventListener('click', () => {
        --framePos
        if (framePos < 0) {
            framePos = popupPortfolioSlides.length - 1;
        }
        sliderContentCurrent.forEach(slide => slide.textContent = framePos + 1);
        moveSlider(framePos);
    })
    closeBtn.addEventListener('click', () => {
        popupFrame.style.visibility = 'hidden';
    })
    closeBtnMob.addEventListener('click', () => {
        popupFrame.style.visibility = 'hidden';
    })
}

export default portfolioSlider;