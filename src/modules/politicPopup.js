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
}

export default politicPopup;