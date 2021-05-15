const showConsultation = () => {
    const consBtns = document.querySelectorAll('.consultation-btn');
    const popCons = document.querySelector('.popup-consultation');
    const consCloseBtn = document.querySelector('.close-consultation');
    
    consBtns.forEach(btn => btn.addEventListener('click', () => {
        popCons.style.visibility = 'visible';
    }))
    consCloseBtn.addEventListener('click', () => {
        popCons.style.visibility = 'hidden';
    })
}

export default showConsultation;