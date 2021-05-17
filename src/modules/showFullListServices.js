const showFullListServices = () => {
    const modal = document.querySelector('.popup-repair-types');
    const linksList = document.querySelectorAll('.link-list');
    const closeButton = document.querySelector('.close-repair_list');
    const closeButtonMob = document.querySelector('.close-popup-repair');
    
    linksList.forEach(link => link.addEventListener('click',() => {
        modal.style.visibility = 'visible'
    }))
    closeButton.addEventListener('click', () => {
        modal.style.visibility = 'hidden';
    })
    closeButtonMob.addEventListener('click', () => {
        modal.style.visibility = 'hidden';
    })
}

export default showFullListServices;