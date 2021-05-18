const faqAccordion = () => {
    const accordion = document.querySelectorAll('.title_block');
    accordion.forEach(acc => {
        acc.addEventListener('click', () => {
            accordion.forEach(acc => acc.classList.remove('msg-active'))
            acc.classList.add('msg-active')
        })
    })
}

export default faqAccordion;