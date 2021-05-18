const politicPopup = () => {
    const links = document.querySelectorAll('.link-privacy');
    const popup = document.querySelector('.popup-privacy');
    const closeBtn = document.querySelector('.close-privacy');

    links.forEach(link => link.addEventListener('click', () => {
        popup.style.visibility = 'visible';
    }));
    closeBtn.addEventListener('click', () => {
        popup.style.visibility = 'hidden';
    })
    const popupAll = document.querySelectorAll('.popup');
    popupAll.forEach(pop => pop.addEventListener('click', (e) => {
        if (e.target.matches('.popup')) {
            popupAll.forEach(pop => pop.style.visibility = 'hidden');
        }
    }))
}

export default politicPopup;