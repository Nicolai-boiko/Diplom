import SliderCarusel from './slider';

const repairSlider = () => {
    const repairBtns = document.querySelectorAll('.nav-list-repair > button');
    const counterCurrent = document.querySelector('.slider-counter-content__current');
    const counterTotal = document.querySelector('.slider-counter-content__total');
        

    let sliderSelector = `.types-repair1`;
    repairBtns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            sliderSelector = `.types-repair${i+1}`;
            repairBtns.forEach(btn => btn.classList.remove('active'));
            btn.classList.add('active');
            document.querySelectorAll('.repair-types-slider > div').forEach(div => {
                div.style.display = 'none';
                div.classList.remove('glo-slider__wrap');
                div.querySelectorAll('div').forEach(div => div.classList.remove('glo-slider__item'))
            });
            document.querySelector(sliderSelector).style.display = 'block'
            render();
            counterTotal.textContent = document.querySelectorAll('.repair-types-slider__slide.glo-slider__item').length;
        })
    })

    const tabsSliderW = () => {
        const tabBtns = document.querySelectorAll('#nav-arrow-repair-left_base, #nav-arrow-repair-right_base');
        if (document.documentElement.clientWidth < 1024) {
            const tabs = new SliderCarusel({
                main: '.repair-types-nav',
                wrap: '.nav-list-repair',
                next: '.nav-arrow_right',
                prev: '.nav-arrow_left',
                slidesToShow: 1,
                infinity: true,
            });
            tabs.init();
            tabBtns.forEach(btns => btns.addEventListener('click', () => {
                sliderSelector = `.types-repair${tabs.options.position + 1}`;
                repairBtns.forEach((btn, i) => {
                    btn.classList.remove('active');
                    if (i === tabs.options.position) btn.classList.add('active')
                });
                document.querySelectorAll('.repair-types-slider > div').forEach(div => {
                    div.style.display = 'none';
                    div.classList.remove('glo-slider__wrap');
                    div.querySelectorAll('div').forEach(div => div.classList.remove('glo-slider__item'))
                });
                document.querySelector(sliderSelector).style.display = 'block'
                render();
                counterTotal.textContent = document.querySelectorAll('.repair-types-slider__slide.glo-slider__item').length;
            }))
        }
    }
    tabsSliderW();

    const render = () => {
        const repair = new SliderCarusel({
        main: '.repair-types-slider',
        wrap: `${sliderSelector}`,
        next: '#repair-types-arrow_right',
        prev: '#repair-types-arrow_left',
        slidesToShow: 1,
        infinity: true,
    });
        let positionConter = 1;
        const arrowNext = document.querySelector('#repair-types-arrow_right')
        const arrowPrev = document.querySelector('#repair-types-arrow_left')
        arrowNext.addEventListener('click', () => {
            ++positionConter
            if (positionConter > document.querySelectorAll('.repair-types-slider__slide.glo-slider__item').length) {
                positionConter = 1;
            }
            counterCurrent.textContent = positionConter;
        })
        arrowPrev.addEventListener('click', () => {
            --positionConter
            if (positionConter < 1) {
                positionConter = document.querySelectorAll('.repair-types-slider__slide.glo-slider__item').length;
            }
            counterCurrent.textContent = positionConter;
        })
        repair.init();
    }
    render();
    counterTotal.textContent = document.querySelectorAll('.repair-types-slider__slide.glo-slider__item').length;
}

export default repairSlider;