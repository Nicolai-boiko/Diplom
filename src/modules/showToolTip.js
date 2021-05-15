const showToolTip = () => {
    const elements = document.querySelectorAll('.formula-item__icon');
    
    

    elements.forEach(elem => {
        let fill = elem.querySelector('.formula-item__icon-inner');
        elem.addEventListener('mouseover', () => {
            let coords = elem.getBoundingClientRect();
            let top = coords.top - elem.firstElementChild.offsetHeight;
            fill.style.opacity = '1';
            if (document.documentElement.clientWidth < 1024) {
                elem.firstElementChild.style.cssText = `visibility: visible; opacity: 1; transition: opacity 0.5s`;
            } else {
                if (top < 0) {
                    elem.firstElementChild.classList.add('rotate-tooltip');
                    const row = elem.closest('.row');
                    row.style.cssText = 'z-index: 1 !important';
                    elem.firstElementChild.style.cssText = `visibility: visible; opacity: 1; transition: opacity 0.5s; transform: translateY(${coords.height + elem.firstElementChild.offsetHeight + 20}px)`;                
                } else {
                    elem.firstElementChild.style.cssText = `visibility: visible; opacity: 1; transition: opacity 0.5s`;
                }
            }
            
        });
        elem.addEventListener('mouseout', () => {
            elem.firstElementChild.style.cssText = 'visibility: hidden; opacity: 0.1;';
            elem.firstElementChild.classList.remove('rotate-tooltip');
            elem.classList.remove('formula-item__icon-inner');
            if (document.documentElement.clientWidth > 1024) {
                fill.style.opacity = '0';
                const row = elem.closest('.row');
                row.style.cssText = 'z-index: 0 !important';
            }             
        })
    })
}

export default showToolTip;