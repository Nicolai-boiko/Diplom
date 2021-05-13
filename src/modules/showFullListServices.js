const showFullListServices = () => {
    const modal = document.querySelector('.popup-repair-types');
    const linksList = document.querySelectorAll('.link-list');
    const closeButton = document.querySelector('.close-repair_list');
    
    linksList.forEach(link => link.addEventListener('click',() => {
        modal.style.visibility = 'visible'
    }))
    closeButton.addEventListener('click', () => {
        modal.style.visibility = 'hidden';
    })
}

export default showFullListServices;