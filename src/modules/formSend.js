const formSend = () => {
    const forms = document.querySelectorAll('form');
    const phoneInputs = document.querySelectorAll('input[name=phone]');
    const checkboxInputs = document.querySelectorAll('.checkbox__input');
    phoneInputs.forEach(input => input.setAttribute("required", "true"));
    checkboxInputs.forEach(input => input.setAttribute("required", "true"));

    const errorMesage = 'Что то пошло не так';
    const successMesage = 'Спасибо! Мы скоро свяжемся с вами!';
            
    const statusMessage = document.createElement('div');

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    }
    forms.forEach(form => {
        let input = form.querySelector('input');
        input.addEventListener('focus', () => {
            let checkbox = form.querySelector('.checkbox__input');
            checkbox.style.visibility = 'visible';
            checkbox.style.opacity = '0';
            checkbox.style.transform = 'translateX(130%)';
        })
    });

    forms.forEach(form => form.addEventListener('submit', (e) => {
        e.preventDefault();
        let checkbox = form.querySelector('.checkbox__input');
        checkbox.style.visibility = 'hidden';
        statusMessage.innerHTML = `
        <div class="spinner">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
        </div>
        `;
        form.appendChild(statusMessage);

        const formData = new FormData(form);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        })
        postData(body)
            .then((response) => {
                if (response.status !== 200){
                    throw new Error('Все пропало!')
                }
                statusMessage.style.cssText = 'font-size: 13px; color: black;';
                const popThx = document.querySelector('.popup-thank');
                const closeThank = document.querySelector('.close-thank');
                closeThank.addEventListener('click', () => {
                    popThx.style.visibility = 'hidden'
                })
                popThx.style.visibility = 'visible'
                statusMessage.innerHTML = '';
                let inputs = form.querySelectorAll('input');
                inputs.forEach(input => input.value = '');
            })
            .catch(error => {
                statusMessage.innerHTML = errorMesage;
                console.log(error)
            });
    }))
}

export default formSend;