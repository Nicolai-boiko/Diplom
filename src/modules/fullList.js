import SliderCarusel from './slider';

const fullList = () => {
    
    let jobData;
    let matchedJobs;
    const doJobSlider = () => {
        const list = new SliderCarusel({
            main: '.nav-popup.nav-popup-repair-types.transparancy-cut',
            wrap: '.nav-list.nav-list-popup-repair',
            next: '#nav-arrow-popup-repair_right',
            prev: '#nav-arrow-popup-repair_left',
            slidesToShow: 1,
            infinity: true,
        });
        list.init();
        const arrowBtns = document.querySelectorAll('#nav-arrow-popup-repair_right, #nav-arrow-popup-repair_left');
        arrowBtns.forEach(aBtn => aBtn.addEventListener('click', () => {
            const navButtons = document.querySelectorAll('.popup-repair-types-nav__item');
            navButtons.forEach((nBtn, i) => {
                if (i === list.options.position) {
                    nBtn.classList.add('active');
                   
                    matchedJobs = jobData.filter(job => job.type === nBtn.innerText);
                    const headTitle = document.querySelector('.popup-repair-types-content__head-title');
                    const table = document.querySelector('.popup-repair-types-content-table__list > tbody');
                    headTitle.innerText = nBtn.innerText;
                    table.innerHTML = '';
                    matchedJobs.forEach(mJob => {
                        const crTr = document.createElement('tr');
                        crTr.className = "mobile-row";
                        crTr.innerHTML = `
                            <td class="repair-types-name">${mJob.name}</td>
                            <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
                            <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
                            <td class="repair-types-value">${mJob.units}</td>
                            <td class="repair-types-value">${mJob.cost} руб.</td>
                        `;
                        table.append(crTr) 
                    })
                    const mobRows = document.querySelectorAll('.mobile-row');
                    mobRows.forEach(row => {
                        row.addEventListener('mouseover', () => {
                            row.classList.add('showHide')
                        })
                        row.addEventListener('mouseout', () => {
                            row.classList.remove('showHide')
                        })
                    })
                } else {
                    nBtn.classList.remove('active');
                }
            })
        }))
    }

    fetch('../crm-backend/db.json')
        .then(response => response.json())
        .then(data => {
            jobData = data;
            let fullJobTypes = jobData.map(job => job.type);
            let jobTypes = new Set(fullJobTypes);
            jobTypes.forEach(job => {
                const btnsContainer = document.querySelector('.nav-list-popup-repair');
                const crBtn = document.createElement('button');
                crBtn.className = "button_o popup-repair-types-nav__item";
                crBtn.innerHTML = `
                    ${job}
                `;
                btnsContainer.append(crBtn);
            })
            document.querySelector('.popup-repair-types-nav__item').classList.add('active');
            if (document.documentElement.clientWidth <= 1024) {
                doJobSlider();
            }

            window.addEventListener('resize', () => {
                if (document.documentElement.clientWidth <= 1024) {
                    doJobSlider();
                } else {
                    document.querySelectorAll('.button_o.popup-repair-types-nav__item.glo-slider__item').forEach(item => item.classList.remove('glo-slider__item'));
                    document.querySelector('.nav-list.nav-list-popup-repair.glo-slider__wrap').classList.remove('glo-slider__wrap');
                    document.querySelector('.nav-list.nav-list-popup-repair').style.transform = 'translateX(0%)';
                    document.querySelector('.nav-popup.nav-popup-repair-types.transparancy-cut.glo-slider').classList.remove('glo-slider');
                }
            }) 

            matchedJobs = jobData.filter(job => job.type === "Потолок: Демонтажные работы");
            const table = document.querySelector('.popup-repair-types-content-table__list > tbody');
            matchedJobs.forEach(mJob => {
                const crTr = document.createElement('tr');
                crTr.className = "mobile-row";
                crTr.innerHTML = `
                    <td class="repair-types-name">${mJob.name}</td>
                    <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
                    <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
                    <td class="repair-types-value">${mJob.units}</td>
                    <td class="repair-types-value">${mJob.cost} руб.</td>
                `;
                table.append(crTr)
            })
            const mobRows = document.querySelectorAll('.mobile-row');
                mobRows.forEach(row => {
                    row.addEventListener('mouseover', () => {
                        row.classList.add('showHide')
                    })
                    row.addEventListener('mouseout', () => {
                        row.classList.remove('showHide')
                    })
                })
            const navButtons = document.querySelectorAll('.popup-repair-types-nav__item');
            navButtons.forEach(btn => btn.addEventListener('click', () => {
                navButtons.forEach(btn => btn.classList.remove('active'));
                btn.classList.add('active');
                matchedJobs = jobData.filter(job => job.type === btn.innerText);
                const headTitle = document.querySelector('.popup-repair-types-content__head-title');
                const table = document.querySelector('.popup-repair-types-content-table__list > tbody');
                headTitle.innerText = btn.innerText;
                table.innerHTML = '';
                matchedJobs.forEach(mJob => {
                    const crTr = document.createElement('tr');
                    crTr.className = "mobile-row";
                    crTr.innerHTML = `
                        <td class="repair-types-name">${mJob.name}</td>
                        <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
                        <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
                        <td class="repair-types-value">${mJob.units}</td>
                        <td class="repair-types-value">${mJob.cost} руб.</td>
                    `;
                    table.append(crTr) 
                })        
            }))
            
        })
        .catch(error => console.log(error))
        
     
}
export default fullList;