const faqAccordion = () => {
    const accordion = document.querySelectorAll('.title_block');
    accordion.forEach(acc => {
        acc.addEventListener('click', () => {
            acc.classList.toggle('msg-active')
        })
    })
}

export default faqAccordion;