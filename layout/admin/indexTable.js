//Проверка авторизации

if(document.cookie === '') {
    document.location.href = '../admin';
}

//Загрузка данных

let jobData;
const render = (item) => {
    const crTr = document.createElement('tr');
    crTr.className = 'table__row';
    crTr.innerHTML =`
        <td class="table__id table__cell">${item.id}</td>
        <td class="table-type table__cell">${item.type}</td>
        <td class="table-name table__cell">${item.name}</td>
        <td class="table-units table__cell">${item.units}</td>
        <td class="table-cost table__cell">${item.cost}</td>
        <td>
            <div class="table__actions table__cell">
                <button class="button action-change"><span class="svg_ui"><svg class="action-icon_change"><use xlink:href="./img/sprite.svg#change"></use></svg></span><span>Изменить</span>
                </button>
                <button class="button action-remove"><span class="svg_ui"><svg class="action-icon_remove"><use xlink:href="./img/sprite.svg#remove"></use></svg></span><span>Удалить</span>
                </button>
            </div>
        </td>
    `;
    tbody.append(crTr)
}
fetch('http://localhost:3000/api/items')
    .then(response => response.json())
    .then(data => {
        jobData = data;
        //Создание списка услуг
        let typeOfJobs = new Set(jobData.map(job => job.type));
        const select = document.getElementById('typeItem');
        typeOfJobs.forEach(type => {
            const crOption = document.createElement('option');
            crOption.setAttribute('value', `${type}`);
            crOption.innerHTML =`
                ${type}
            `;
            select.append(crOption)
        })
        //Создание таблицы услуг
        const tbody = document.getElementById('tbody');
        jobData.forEach(job => render(job))

        function sortJobs(){
            if (select.value !== 'Все услуги'){
                tbody.innerHTML = '';
                let filtredJobsData = jobData.filter(job => job.type === select.value);
                filtredJobsData.forEach(job => render(job));
            } else {
                tbody.innerHTML = '';
                jobData.forEach((job) => render(job))
            }
        }
        select.addEventListener('change', sortJobs);

        //Изменение услуги
        const changeBtns = document.querySelectorAll('.action-change');
        
        let target = '';
        changeBtns.forEach(btn => btn.addEventListener('click', (e) => {
            target = e.target.closest('.table__row').querySelector('.table__id').innerText;
            
            fetch(`http://localhost:3000/api/items/${target}`)
            .then(response => response.json())
            .then(job => {
                let type = document.getElementById('type-change');
                let name = document.getElementById('name-change');
                let units = document.getElementById('units-change');
                let cost = document.getElementById('cost-change');
                type.value = job.type;
                name.value = job.name;
                units.value = job.units;
                cost.value = job.cost;
                const formChange = document.querySelector('.change-form');
                modalChange.style.display = 'flex';

                
                const btnCloseModalChange = document.querySelector('.close-change');
                btnCloseModalChange.addEventListener('click', () => {
                    modalChange.style.display = 'none';
                    target = '';
                })

                const renderChange = () => {
                    const type = document.getElementById('type-change').value;
                    const name = document.getElementById('name-change').value;
                    const units = document.getElementById('units-change').value;
                    const cost = document.getElementById('cost-change').value;
                    let bodyObjChange = { 
                        type, 
                        name, 
                        units, 
                        cost
                    }
                    console.log(bodyObjChange);
                    e.preventDefault();
                    fetch(`http://localhost:3000/api/items/${target}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(bodyObjChange)
                        })
                }
                formChange.addEventListener('submit', renderChange)
            })
        }))

        //Удаление услуги
        const deleteBtns = document.querySelectorAll('.action-remove');
        deleteBtns.forEach(btn => btn.addEventListener('click', (e) => {
            let targetDelete = e.target.closest('.table__row').querySelector('.table__id').innerText;
            e.preventDefault();
                    fetch(`http://localhost:3000/api/items/${targetDelete}`, {
                        method: 'DELETE'
                    })
        }))
    })

//Добавление услуги
const btnAddItem = document.querySelector('.btn-addItem');
const btnCloseModal = document.querySelector('.close-add');
const modalHeader = document.querySelector('.modal__header');
const modal = document.getElementById('modal-add');
const modalChange = document.getElementById('modal-change');

btnAddItem.addEventListener('click', () => {
    modal.style.display = 'flex'
    modalHeader.innerText = 'Добавление новой услуги';
    let type = document.getElementById('type');
    let name = document.getElementById('name');
    let units = document.getElementById('units');
    let cost = document.getElementById('cost');
    type.value = '';
    name.value = '';
    units.value ='';
    cost.value = '';
    })

btnCloseModal.addEventListener('click', () => {
    modal.style.display = 'none'
})

const form = document.querySelector('.add-form');
const select = document.getElementById('typeItem');

form.addEventListener('submit', (e) => {
    const type = document.getElementById('type').value;
    const name = document.getElementById('name').value;
    const units = document.getElementById('units').value;
    const cost = document.getElementById('cost').value;
    let bodyObj = { 
        type, 
        name, 
        units, 
        cost
      }
    e.preventDefault();
    fetch('http://localhost:3000/api/items', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
      },
    body: JSON.stringify(bodyObj)
    })
        .then(data => fetch('http://localhost:3000/api/items'))
        .then(response => response.json())
        .then(data => {
            jobData = data;
            select.value = 'Все услуги';
            tbody.innerHTML = '';
            jobData.forEach((job) => render(job))
        })
            
    modal.style.display = 'none'
})